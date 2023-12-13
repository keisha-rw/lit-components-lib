import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsVideoPlayer } from './video-player';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Video player/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

jest.mock('sanitize-html', () => {
  return {
    default: jest.fn(),
  };
});

jest.mock('./video-player-utils.ts', () => {
  return { ALLOWED_TAGS_LIST: [] };
});

jest.mock('@brightcove/player-loader', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    ref: {
      on: (eventName: string, callback: Function) => {
        if (eventName === 'loadstart') {
          document.createElement('div').addEventListener(
            eventName,
            callback({
              target: {
                player: {
                  mediainfo: { duration: '123.45', name: 'Brand Essence' },
                },
              },
            }),
            false,
          );
        }
        if (eventName === 'play') {
          document
            .createElement('div')
            .addEventListener(eventName, callback({}), false);
        }
        if (eventName === 'ended') {
          document
            .createElement('div')
            .addEventListener(eventName, callback({}), false);
        }
        if (eventName === 'timeupdate') {
          document.createElement('div').addEventListener(
            eventName,
            callback({
              target: {
                player: {
                  controlBar: {
                    currentTimeDisplay: { formattedTime_: '0:35' },
                  },
                },
              },
            }),
            false,
          );
        }
      },
    },
  }),
}));

describe('VideoPlayer unit tests', () => {
  let element: PdsVideoPlayer;

  beforeEach(async () => {
    element = await fixture(
      '<pds-video-player videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001" variant="alt" videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"/>',
    );
  });

  it('is an instance of PdsVideoPlayer', () => {
    expect(element).toBeInstanceOf(PdsVideoPlayer);
  });

  it('populates the title and description attributes and displays them when provided', async () => {
    element = await fixture(
      '<pds-video-player videoTitle="This is an optional video title" videoDescription="<p>This is an optional video description. It should only be added if there is also a video title.</p>" videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001" variant="alt" videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"><div slot="video-title">Video Title</div></pds-video-player>',
    );

    expect(
      element
        .querySelector('.pds-c-video-player')
        ?.getAttribute('title')
        ?.trim(),
    ).toStrictEqual('This is an optional video title');
    expect(
      element
        .querySelector('.pds-c-video-player-video-title')
        ?.textContent?.trim(),
    ).toStrictEqual('This is an optional video title');
    expect(
      element
        .querySelector('.pds-c-video-player')
        ?.getAttribute('aria-describedby')
        ?.trim(),
    ).toStrictEqual('videoplayerdescription-1');
    expect(
      element
        .querySelector('.pds-c-video-player__description')
        ?.textContent?.trim(),
    ).toBeTruthy();
  });

  it('does not populate the description attribute if title is empty', async () => {
    element = await fixture(
      '<pds-video-player videoDescription="This is an optional video description. It should only be added if there is also a video title." videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001" variant="alt" videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"><div slot="video-title">Video Title</div></pds-video-player>',
    );

    expect(
      element
        .querySelector('.pds-c-video-player')
        ?.getAttribute('title')
        ?.trim(),
    ).toStrictEqual('Brand Essence');
    expect(
      element.querySelector('.pds-c-video-player-video-title'),
    ).toBeFalsy();
    expect(
      element
        .querySelector('.pds-c-video-player')
        ?.getAttribute('aria-describedby')
        ?.trim(),
    ).toStrictEqual('videoplayerdescription-1');
    expect(
      element
        .querySelector('.pds-c-video-player__description')
        ?.textContent?.trim(),
    ).toStrictEqual('undefined');
  });

  it('does populate a title and no description if just title is passed in', async () => {
    element = await fixture(
      '<pds-video-player videoTitle="This is an optional video title" videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001" variant="alt" videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"><div slot="video-title">Video Title</div></pds-video-player>',
    );

    expect(
      element
        .querySelector('.pds-c-video-player')
        ?.getAttribute('title')
        ?.trim(),
    ).toStrictEqual('This is an optional video title');
    expect(
      element
        .querySelector('.pds-c-video-player-video-title')
        ?.textContent?.trim(),
    ).toStrictEqual('This is an optional video title');
    expect(
      element
        .querySelector('.pds-c-video-player')
        ?.getAttribute('aria-describedby'),
    ).toBeFalsy();
    expect(
      element.querySelector('.pds-c-video-player__description'),
    ).toBeFalsy();
  });

  it('populates the variant and text tracks when provided', async () => {
    element = await fixture(
      '<pds-video-player videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001" variant="alt" videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"></pds-video-player>',
    );

    expect(
      element.querySelector('.pds-c-video-player__link')?.getAttribute('href'),
    ).toStrictEqual(
      'https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&project_id=17743&format=txt',
    );

    expect(element.querySelector('.pds-c-video-player--alt')).toBeTruthy();
  });

  it('multiple videos populate on the same page', async () => {
    element = await fixture(
      `<pds-video-player
      videoTitle="This is an optional video title"
      videoDescription="This is an optional video description. It should only be added if there is also a video title."
      videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001"
      videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"
    ></pds-video-player>
    <pds-video-player
      videoTitle="This is also an optional video title"
      videoDescription="This is also an optional video description. It should only be added if there is also a video title."
      videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001"
      videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"
    ></pds-video-player>
    <pds-video-player
      videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001"
      videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"
    ></pds-video-player>`,
    );

    expect(element).toBeInstanceOf(PdsVideoPlayer);
  });

  it('populates a variant corrently with the duration set to false', async () => {
    element = await fixture(
      '<pds-video-player videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001" variant="alt" videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt" hideVideoDuration="true"></pds-video-player>',
    );

    expect(
      element
        .querySelector('.pds-c-video-player__duration')
        ?.textContent?.trim(),
    ).toStrictEqual('');
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('Switches the SR only label to Spanish if localization is applied', async () => {
    const spanishEl = await fixture(
      '<pds-video-player lang="es" videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001" variant="alt" videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"/>',
    );
    const srOnlyText =
      spanishEl.querySelector('div.pds-u-sr-only')?.textContent;
    expect(srOnlyText).toContain('La duración del vídeo es de');
  });

  it('formats the duration properly if video is less than one minute long', () => {
    const { videoDuration, minutes, seconds } = element.formatDuration(
      2.67,
      false,
    );
    expect(videoDuration).toStrictEqual(' 0:07');
    expect(minutes).toStrictEqual('0');
    expect(seconds).toStrictEqual('7');
  });

  it('formats the duration properly if video has no seconds', () => {
    const { videoDuration, minutes, seconds } = element.formatDuration(
      60,
      false,
    );
    expect(videoDuration).toStrictEqual(' 1:00');
    expect(minutes).toStrictEqual('1');
    expect(seconds).toStrictEqual('0');
  });

  it('formats the duration properly if video is longer than 60 minutes', () => {
    const { videoDuration, minutes, seconds } = element.formatDuration(
      36216.4679,
      false,
    );
    expect(videoDuration).toStrictEqual(' 603:08');
    expect(minutes).toStrictEqual('603');
    expect(seconds).toStrictEqual('8');
  });

  it('returns false if current time is less than 25% of the video length and first time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('', 15, 126, percentageSetter),
    ).toStrictEqual(false);
    expect(percentageSetter).toHaveBeenCalledTimes(1);
    expect(percentageSetter).toHaveBeenCalledWith('25%');
  });

  it('returns false if current time is less than 25% of the video length and second+ time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('25%', 15, 126, percentageSetter),
    ).toStrictEqual(false);
    expect(percentageSetter).not.toHaveBeenCalled();
  });

  it('returns true if current time is more than 25% of the video length and first time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('25%', 35, 126, percentageSetter),
    ).toStrictEqual(true);
    expect(percentageSetter).toHaveBeenCalledTimes(1);
    expect(percentageSetter).toHaveBeenCalledWith('50%');
  });

  it('returns false if current time is more than 25% of the video length and second+ time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('50%', 35, 126, percentageSetter),
    ).toStrictEqual(false);
    expect(percentageSetter).not.toHaveBeenCalled();
  });

  it('returns true if current time is more than 50% of the video length and first time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('50%', 65, 126, percentageSetter),
    ).toStrictEqual(true);
    expect(percentageSetter).toHaveBeenCalledTimes(1);
    expect(percentageSetter).toHaveBeenCalledWith('75%');
  });

  it('returns false if current time is more than 50% of the video length and second+ time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('75%', 65, 126, percentageSetter),
    ).toStrictEqual(false);
    expect(percentageSetter).not.toHaveBeenCalled();
  });

  it('returns true if current time is more than 75% of the video length and first time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('75%', 95, 126, percentageSetter),
    ).toStrictEqual(true);
    expect(percentageSetter).toHaveBeenCalledTimes(1);
    expect(percentageSetter).toHaveBeenCalledWith('90%');
  });

  it('returns false if current time is more than 75% of the video length and second+ time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('90%', 95, 126, percentageSetter),
    ).toStrictEqual(false);
    expect(percentageSetter).not.toHaveBeenCalled();
  });

  it('returns true if current time is more than 90% of the video length and first time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('90%', 115, 126, percentageSetter),
    ).toStrictEqual(true);
    expect(percentageSetter).toHaveBeenCalledTimes(1);
    expect(percentageSetter).toHaveBeenCalledWith('100%');
  });

  it('returns false if current time is more than 90% of the video length and second+ time through switch', () => {
    const percentageSetter = jest.fn();
    expect(
      element.compareTimeProgress('100%', 115, 126, percentageSetter),
    ).toStrictEqual(false);
    expect(percentageSetter).not.toHaveBeenCalled();
  });
});
