import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ReactPlayerLoader from '@brightcove/react-player-loader';
import { PdsIconClock } from '@keisha/design-system-icons-react';
import { PdsVideoPlayer as PdsVideoPlayerWebComponent } from '@keisha/design-system';
import { useTranslation } from 'react-i18next';
import sanitizeHTML from 'sanitize-html';
import { ALLOWED_TAGS_LIST } from '@keisha/design-system/utils/video-player/video-player-utils';
import { v4 as uuidv4 } from 'uuid';
import { PdsLink } from '../link/link';
import { PdsVideoPlayerProps } from '../../built-component-props';
import '../../../../i18n';
import { PdsTextPassage } from '../text-passage/text-passage';
import '@keisha/design-system/css/video-player/video-player-light-dom.scss';

export const PdsVideoPlayer = React.forwardRef<
  React.Ref<any>,
  PdsVideoPlayerProps
>((props: PdsVideoPlayerProps, ref?: React.Ref<any>) => {
  const { t } = useTranslation();
  const {
    videoUrl,
    aspectRatio = '16:9',
    videoTitle,
    hideVideoDuration = false,
    videoPlayerTextTracks,
    videoDescription,
  } = props;
  const sanitizedVideoDescription = sanitizeHTML(videoDescription!, {
    allowedTags: ALLOWED_TAGS_LIST,
  });
  const [brightcoveVideoTitle, setBrightcoveVideoTitle] = React.useState<
    string | undefined
  >(undefined);
  const [videoDuration, setVideoDuration] = React.useState<string | undefined>(
    undefined,
  );
  const [minutes, setMinutes] = React.useState<string>('');
  const [seconds, setSeconds] = React.useState<string>('');
  const [percentage, setPercentage] = React.useState<string>('25%');
  const uniqueIdForVideo = React.useMemo(() => {
    return uuidv4();
  }, []);
  const videoPlayerWebComponent = React.useMemo(() => {
    return new PdsVideoPlayerWebComponent();
  }, []);
  const { accountId, playerId, videoId } = React.useMemo(() => {
    return videoPlayerWebComponent.retrieveVideoInformationFromUrl(videoUrl);
  }, [videoUrl, videoPlayerWebComponent]);

  const onFailure = (error: any) => {
    // eslint-disable-next-line no-console
    console.error(
      'PDS video player encountered an error: ',
      JSON.stringify(error),
    );
  };

  React.useEffect(() => {
    const wrapperDiv = document.getElementById(
      `pds-video-player-container-${videoId}-${uniqueIdForVideo}`,
    );

    const onSuccess = (success: any) => {
      success.ref.on(
        'loadstart',
        (player: {
          target: { player: { mediainfo: { duration: string; name: string } } };
        }) => {
          const {
            brightcoveVideoTitle: videoTitleFromComponent,
            minutes: minutesFromComponent,
            seconds: secondsFromComponent,
            videoDuration: videoDurationFromComponent,
          } = videoPlayerWebComponent.handleLoadstart({
            player,
            hideVideoDuration,
          });
          setBrightcoveVideoTitle(videoTitleFromComponent);
          setMinutes(minutesFromComponent);
          setSeconds(secondsFromComponent);
          setVideoDuration(videoDurationFromComponent);
        },
      );

      /**
       * Utilizes the Brightcove play event to dispatch a custom event
       * Used for GA4 tracking for when a user plays a video
       */
      success.ref.on('play', () => {
        videoPlayerWebComponent.handlePlay({
          videoUrl,
          elementToFireEventFrom: wrapperDiv!,
        });
      });

      /**
       * Utilizes the Brightcove ended event to dispatch a custom event
       * Used for GA4 tracking for when a user gets to the end of a video
       */
      success.ref.on('ended', () => {
        videoPlayerWebComponent.handleEnded({
          videoUrl,
          elementToFireEventFrom: wrapperDiv!,
        });
      });

      /**
       * Utilizes the Brightcove timeupdate event to dispatch a custom event
       * Used for GA4 tracking of when a user gets to 25%, 50%, 75%, and 90% of a video
       */
      success.ref.on(
        'timeupdate',
        (player: {
          target: {
            player: {
              controlBar: { currentTimeDisplay: { formattedTime_: string } };
            };
          };
        }) => {
          videoPlayerWebComponent.handleTimeupdate({
            player,
            elementToFireEventFrom: wrapperDiv!,
            videoUrl,
            percentage,
            percentageSetterFunction: setPercentage,
            seconds,
            minutes,
          });
        },
      );

      const videoPlayerElement = wrapperDiv?.querySelector(
        '.pds-c-video-player',
      );
      const videoPlayerDescription = wrapperDiv?.querySelector(
        '.pds-c-video-player__description',
      );

      if (videoPlayerElement && videoPlayerDescription) {
        videoPlayerElement?.setAttribute(
          'aria-describedby',
          `videoplayerdescription-${videoId}-${uniqueIdForVideo}`,
        );
        videoPlayerDescription.id = `videoplayerdescription-${videoId}-${uniqueIdForVideo}`;
      }
    };

    if (typeof window !== 'undefined') {
      const playerDiv = document.getElementById(
        `pds-video-player-${videoId}-${uniqueIdForVideo}`,
      );
      // Note: this createRoot rigmarole is only because
      // it is required by the react-player-loader library
      const root = createRoot(playerDiv!);
      root.render(
        <ReactPlayerLoader
          accountId={accountId}
          playerId={playerId}
          videoId={videoId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          options={{ aspectRatio }}
        />,
      );
    }
    // We only want to run this hook once, so we don't want to pass in all the deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      id={`pds-video-player-container-${videoId}-${uniqueIdForVideo}`}
    >
      <div
        className="pds-c-video-player"
        title={videoTitle || brightcoveVideoTitle}
      >
        <div id={`pds-video-player-${videoId}-${uniqueIdForVideo}`} />
        <div className="pds-u-sr-only">
          {t('video-duration-is')} {minutes} {t('minutes-and')}
          {seconds} {t('seconds-long')}.
        </div>
        <p
          aria-hidden="true"
          className="pds-c-video-player__duration"
          data-happo-hide
        >
          {!hideVideoDuration && (
            <>
              <span className="pds-c-video-player__icon">
                <PdsIconClock size="xs" />
              </span>
              <span>{videoDuration}</span>
            </>
          )}
        </p>
        {videoTitle && (
          <div>
            <p aria-hidden="true" className="pds-c-video-player-video-title">
              {videoTitle}
            </p>
          </div>
        )}
        {sanitizedVideoDescription && (
          <div>
            <PdsTextPassage
              lineLength="none"
              className="pds-c-video-player__description"
            >
              <span
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: sanitizedVideoDescription }}
              />
            </PdsTextPassage>
          </div>
        )}
        <PdsLink
          className="pds-c-video-player__link"
          href={videoPlayerTextTracks}
          target="_blank"
        >
          {t('view-video-transcript')}
        </PdsLink>
      </div>
    </div>
  );
});
