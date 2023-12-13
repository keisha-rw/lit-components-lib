import brightcovePlayerLoader from '@brightcove/player-loader';
import { localized, msg } from '@lit/localize';
import { html, nothing } from 'lit';
import sanitizeHTML from 'sanitize-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { required } from '../../decorators/required';
import { PdsElement } from '../PdsElement';
import lightDomStyles from './video-player-light-dom.scss?inline';
import { ALLOWED_TAGS_LIST } from './video-player-utils';
import '../link/link';
import '../text-passage/text-passage';
import '@keisha/design-system-icons-web/clock';

/**
 * @summary A brightcove video player component
 * @fires pds-video-player-play A custom event dispatched on playing the video
 * @fires pds-video-player-ended A custom event dispatched on the video ending
 * @fires pds-video-player-progress A custom event dispatched on hitting 25%/50%/75%/90% progress milestones of the video
 *
 */
@customElement('pds-video-player', {
  category: 'component',
  type: 'component',
  styles: {},
})
// This is important to place below the @customElement decorator (https://github.com/lit/lit/issues/3264)
@localized()
export class PdsVideoPlayer extends PdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  /**
   * Style variant
   * - Default The video displays with rounded corners
   * - **alt** The video displays with square corners
   */
  @property()
  variant: 'default' | 'alt' = 'default';

  /**
   * Aspect ratio for the video to display in
   */
  @property()
  aspectRatio? = '16:9';

  /**
   * The URL to the brightcove video
   */
  @required
  @property()
  videoUrl: string;

  /**
   * The URL to the video transcript
   */
  @required
  @property()
  videoPlayerTextTracks: string;

  /**
   * A title to display under the video; if provided, will also be used to replace the video title for screen readers
   */
  @property()
  videoTitle: string = '';

  /**
   * A description to display under the video; should only be used if videoTitle is provided, and it will display between the title and transcript link
   * Should be passed in as a string of HTML, sanitization is handled within PDS
   */
  @property()
  videoDescription: string = '';

  /**
   * Determines whether to show the video duration beneath the video or not
   */
  @property()
  hideVideoDuration: boolean = false;

  /**
   * @internal
   */
  @query('.pds-c-video-player')
  videoPlayer: HTMLElement;

  /**
   * @internal
   */
  @state()
  percentage: string = '25%';

  /**
   * @internal
   */
  @state()
  videoDuration: string;

  /**
   * @internal
   */
  @state()
  numberOfVideos: number = 1;

  /**
   * @internal
   */
  @state()
  brightcoveVideoTitle: string;

  /**
   * @internal
   */
  // Splitting out for screen reader only text usage
  @state()
  minutes: string;

  /**
   * @internal
   */
  // Splitting out for screen reader only text usage
  @state()
  seconds: string;

  /**
   * @internal
   */
  get classNames() {
    return {
      /* This is equivalent to doing
       * 'primary': this.variant === 'primary',
       * 'secondary': this.variant === 'secondary',
       */
      [this.variant]: !!this.variant,
    };
  }

  formatDuration = (
    duration: number,
    hideVideoDuration: boolean,
  ): { minutes: string; seconds: string; videoDuration: string } => {
    let calculatedVideoDuration = duration.toString();
    const calculatedMinutes = Math.floor(duration / 60).toString();
    const calculatedSeconds = (duration % 60).toString().slice(-1);

    if (hideVideoDuration === false) {
      calculatedVideoDuration = ` ${calculatedMinutes}:${calculatedSeconds.padStart(
        2,
        '0',
      )}`;
    } else {
      calculatedVideoDuration = '';
    }

    return {
      minutes: calculatedMinutes,
      seconds: calculatedSeconds,
      videoDuration: calculatedVideoDuration,
    };
  };

  /**
   * This method compares the current timestamp of a video with the total length of the video
   * It then returns a boolean so we can dispatch an event when a user gets to 25%, 50%, 75%, and 90% of a video
   */
  compareTimeProgress(
    percentage: string,
    currentTime: number,
    videoLength: number,
    percentageSetterFunction: Function,
  ) {
    let dispatchEvent = false;
    // These calculations find where the percentage marks are on the current video
    const twentyFivePercent = videoLength / 4;
    const fiftyPercent = videoLength / 2;
    const seventyFivePercent = videoLength * 0.75;
    const ninetyPercent = videoLength * 0.9;

    // This switch manages dispatching the custom event at the correct percentage of the way through the video.
    // It ensures that each event is only dispatched once by checking both if the current time is over the percentage mark calculated above in addition to the this.percentage value
    switch (percentage) {
      // This case is needed so that if the video is over 90% and the time is updated it doesn't go back down to the default case
      case '100%':
        break;
      // If this.percentage is set to 90% and the video is over 90% watched
      case '90%':
        if (currentTime > Math.floor(ninetyPercent)) {
          percentageSetterFunction('100%');
          dispatchEvent = true;
        }
        break;
      // If this.percentage is set to 75% and the video is over 75% watched
      case '75%':
        if (currentTime > Math.floor(seventyFivePercent)) {
          percentageSetterFunction('90%');
          dispatchEvent = true;
        }
        break;
      // If this.percentage is set to 50% and the video is over 50% watched
      case '50%':
        if (currentTime > Math.floor(fiftyPercent)) {
          percentageSetterFunction('75%');
          dispatchEvent = true;
        }
        break;
      // If this.percentage is set to 25% and the video is over 25% watched
      case '25%':
        if (currentTime > Math.floor(twentyFivePercent)) {
          percentageSetterFunction('50%');
          dispatchEvent = true;
        }
        break;
      // If this.percentage isn't set, default it to 25%
      default:
        percentageSetterFunction('25%');
    }

    return dispatchEvent;
  }

  retrieveVideoInformationFromUrl = (videoUrl: string) => {
    let accountId;
    let playerId;
    let videoId;

    const videoInfoArray = videoUrl.match(
      /players\.brightcove\.net(\/\d+\/)(.+_default).*(videoId=\d+)/,
    );

    // Get required video params for API call from passed in URL
    if (videoInfoArray && videoInfoArray.length === 4) {
      [, accountId] = videoInfoArray[1].split('/');
      [playerId] = videoInfoArray[2].split('_default');
      [, videoId] = videoInfoArray[3].split('videoId=');
    }

    return { accountId, playerId, videoId };
  };

  handleLoadstart = ({
    player,
    hideVideoDuration,
  }: {
    player: {
      target: { player: { mediainfo: { duration: string; name: string } } };
    };
    hideVideoDuration: boolean;
  }) => {
    const {
      minutes,
      seconds,
      videoDuration: calculatedVideoDuration,
    } = this.formatDuration(
      Number(player.target.player.mediainfo.duration),
      hideVideoDuration,
    );
    return {
      brightcoveVideoTitle: player.target.player.mediainfo.name,
      minutes,
      seconds,
      videoDuration: calculatedVideoDuration,
    };
  };

  handleTimeupdate = ({
    player,
    elementToFireEventFrom,
    videoUrl,
    percentage,
    percentageSetterFunction,
    minutes,
    seconds,
  }: {
    player: {
      target: {
        player: {
          controlBar: { currentTimeDisplay: { formattedTime_: string } };
        };
      };
    };
    elementToFireEventFrom: HTMLElement;
    videoUrl: string;
    percentage: string;
    percentageSetterFunction: Function;
    minutes: string;
    seconds: string;
  }) => {
    const customEvent = new CustomEvent('pds-video-player-progress', {
      bubbles: true,
      composed: true,
      detail: {
        summary: videoUrl,
        percentage,
      },
    });

    // This is the user's current watch time of the video
    const formattedCurrentTime =
      // eslint-disable-next-line no-underscore-dangle
      player.target.player.controlBar.currentTimeDisplay.formattedTime_;

    // The brightcove player object returns the user's current watch time as a formatted time, so we need to turn it back to a number to be able to compare it to the video length
    const currentTimeArray = formattedCurrentTime.split(':');
    const currentMinutes = Math.floor(Number(currentTimeArray[0]) * 60);
    const currentSeconds = Math.floor(Number(currentTimeArray[1]));
    const currentTime = currentSeconds + currentMinutes;

    // This is the total length of the video
    const videoLength = Number(minutes) * 60 + Number(seconds);

    if (
      this.compareTimeProgress(
        percentage,
        currentTime,
        videoLength,
        percentageSetterFunction,
      ) === true
    ) {
      elementToFireEventFrom.dispatchEvent(customEvent);
    }
  };

  handleEnded = ({
    videoUrl,
    elementToFireEventFrom,
  }: {
    videoUrl: string;
    elementToFireEventFrom: HTMLElement;
  }) => {
    const customEvent = new CustomEvent('pds-video-player-ended', {
      bubbles: true,
      composed: true,
      detail: {
        summary: videoUrl,
      },
    });

    elementToFireEventFrom.dispatchEvent(customEvent);
  };

  handlePlay = ({
    videoUrl,
    elementToFireEventFrom,
  }: {
    videoUrl: string;
    elementToFireEventFrom: HTMLElement;
  }) => {
    const customEvent = new CustomEvent('pds-video-player-play', {
      bubbles: true,
      composed: true,
      detail: {
        summary: videoUrl,
      },
    });

    elementToFireEventFrom.dispatchEvent(customEvent);
  };

  async firstUpdated() {
    const lightDomExists = document.head.querySelector(
      '#pds-video-player-styles',
    );

    if (!lightDomExists) {
      const lightDomStyle = document.createElement('style');
      lightDomStyle.id = 'pds-video-player-styles';
      lightDomStyle.innerHTML = lightDomStyles.toString();
      document.head.appendChild(lightDomStyle);
    }

    const { accountId, playerId, videoId } =
      this.retrieveVideoInformationFromUrl(this.videoUrl);

    const videoPlayer = await brightcovePlayerLoader({
      refNode: this.videoPlayer,
      refNodeInsert: 'append',
      accountId,
      playerId,
      embedId: 'default',
      videoId,
      options: {
        aspectRatio: this.aspectRatio,
      },
    });

    videoPlayer.ref.on(
      'loadstart',
      (player: {
        target: { player: { mediainfo: { duration: string; name: string } } };
      }) => {
        const { brightcoveVideoTitle, minutes, seconds, videoDuration } =
          this.handleLoadstart({
            player,
            hideVideoDuration: this.hideVideoDuration,
          });
        this.brightcoveVideoTitle = brightcoveVideoTitle;
        this.minutes = minutes;
        this.seconds = seconds;
        this.videoDuration = videoDuration;
      },
    );

    /**
     * Utilizes the Brightcove play event to dispatch a custom event
     * Used for GA4 tracking for when a user plays a video
     */
    videoPlayer.ref.on('play', () => {
      this.handlePlay({
        videoUrl: this.videoUrl,
        elementToFireEventFrom: this,
      });
    });

    /**
     * Utilizes the Brightcove ended event to dispatch a custom event
     * Used for GA4 tracking for when a user gets to the end of a video
     */
    videoPlayer.ref.on('ended', () => {
      this.handleEnded({
        videoUrl: this.videoUrl,
        elementToFireEventFrom: this,
      });
    });

    /**
     * Utilizes the Brightcove timeupdate event to dispatch a custom event
     * Used for GA4 tracking of when a user gets to 25%, 50%, 75%, and 90% of a video
     */
    videoPlayer.ref.on(
      'timeupdate',
      (player: {
        target: {
          player: {
            controlBar: { currentTimeDisplay: { formattedTime_: string } };
          };
        };
      }) => {
        this.handleTimeupdate({
          player,
          elementToFireEventFrom: this,
          videoUrl: this.videoUrl,
          percentage: this.percentage,
          // eslint-disable-next-line no-return-assign
          percentageSetterFunction: (percent: string) =>
            (this.percentage = percent),
          minutes: this.minutes,
          seconds: this.seconds,
        });
      },
    );

    const videosOnPage = document.querySelectorAll('pds-video-player');

    videosOnPage.forEach((video) => {
      const videoPlayerElement = video.querySelector('.pds-c-video-player');
      const videoPlayerDescription = video.querySelector(
        '.pds-c-video-player__description',
      );

      if (videoPlayerElement && videoPlayerDescription) {
        videoPlayerElement.setAttribute(
          'aria-describedby',
          `videoplayerdescription-${this.numberOfVideos}`,
        );
        videoPlayerDescription.id = `videoplayerdescription-${this.numberOfVideos}`;
        this.numberOfVideos += 1;
      }
    });
  }

  /**
   * @internal
   */
  setVideoTitle = () => {
    if (ifDefined(this.videoTitle)) {
      return html`<div>
        <p aria-hidden="true" class="pds-c-video-player-video-title">
          ${this.videoTitle}
        </p>
      </div>`;
    }

    return undefined;
  };

  /**
   * @internal
   */
  setVideoDescription = (): any => {
    if (ifDefined(this.videoDescription)) {
      const sanitizedVideoDescription = sanitizeHTML(this.videoDescription, {
        allowedTags: ALLOWED_TAGS_LIST,
      });
      const videoDescriptionMarkup = `<div>
        <pds-text-passage linelength="none" class="pds-c-video-player__description">${sanitizedVideoDescription}</pds-text-passage>
      </div>`;

      return unsafeHTML(videoDescriptionMarkup);
    }

    return undefined;
  };

  render() {
    const videoDurationSvg =
      this.hideVideoDuration === false
        ? html`<span class="pds-c-video-player__icon">
            <pds-icon-clock size="xs"></pds-icon-clock
          ></span>`
        : '';

    return html`
      <div
        class="pds-c-video-player ${this.getClass()}"
        title="${ifDefined(
          this.videoTitle ? this.videoTitle : this.brightcoveVideoTitle,
        )}"
      ></div>
      <div class="pds-u-sr-only">
        ${msg('Video duration is')} ${this.minutes} ${msg('minutes and')}
        ${this.seconds} ${msg('seconds long')}.
      </div>
      <p
        aria-hidden="true"
        class="pds-c-video-player__duration"
        data-happo-hide
      >
        ${videoDurationSvg}${this.hideVideoDuration === false
          ? this.videoDuration
          : nothing}
      </p>
      ${ifDefined(this.setVideoTitle())}
      ${ifDefined(this.setVideoTitle())
        ? ifDefined(this.setVideoDescription())
        : nothing}
      <pds-link
        class="pds-c-video-player__link"
        href="${this.videoPlayerTextTracks}"
        target="_blank"
      >
        ${msg('View video transcript')}
      </pds-link>
    `;
  }

  protected createRenderRoot() {
    return this;
  }
}
