import { prettyShadowDOM } from 'shadow-dom-testing-library';
import { render } from '@testing-library/react';
import React from 'react';
import { PdsVideoPlayer } from './video-player';

jest.mock(
  '@keisha/design-system/utils/video-player/video-player-utils',
  () => {
    return { ALLOWED_TAGS_LIST: [] };
  },
);

jest.mock('uuid', () => ({
  __esModule: true,
  v4: () => 'abc123nowihaveauuid',
}));

describe('VideoPlayer unit tests', () => {
  beforeEach(async () => {});

  test('should render the video player with the defaults', () => {
    const { baseElement } = render(
      <PdsVideoPlayer
        videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001"
        variant="alt"
        videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"
        videoTitle="This is an optional video title"
        videoDescription="<p>This is an optional <strong>video description</strong>. It should only be added if there is also a video title.</p>"
      />,
    );

    expect(prettyShadowDOM(baseElement)).toMatchSnapshot();
  });
});
