import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsVideoPlayer } from './video-player';
import { PdsVideoPlayerProps } from '../../built-component-props';

export default {
  title: 'Components/Video player',
  component: PdsVideoPlayer,
  tags: ['autodocs'],
  parameters: { happo: false },
};

const Template: StoryFn<typeof PdsVideoPlayer> = (
  args: PdsVideoPlayerProps,
) => (
  <PdsVideoPlayer
    {...args}
    videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001"
    variant="alt"
    videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"
  />
);

export const Default = Template.bind({});
Default.args = {
  videoTitle: 'This is an optional video title',
  videoDescription:
    '<p>This is an optional <strong>video description</strong>. It should only be added if there is also a video title.</p>',
};

Default.parameters = {
  actions: {
    handles: [
      'pds-video-player-play',
      'pds-video-player-ended',
      'pds-video-player-progress',
    ],
  },
};

export const Alt = Template.bind({});
Alt.args = {
  variant: 'alt',
  hideVideoDuration: true,
};

Alt.parameters = {
  actions: {
    handles: [
      'pds-video-player-play',
      'pds-video-player-ended',
      'pds-video-player-progress',
    ],
  },
};
