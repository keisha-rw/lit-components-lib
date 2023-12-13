import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './video-player';

export default {
  title: 'Components/Video player',
  component: 'pds-video-player',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    a11y: {
      config: {
        rules: [
          {
            // We can't set the video caption through brightcove's API
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/video-caption
            id: 'video-caption',
            enabled: false,
          },
          {
            // We can't set the video alt through brightcove's API
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/object-alt
            id: 'object-alt',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'alt'],
    },
    hideVideoDuration: {
      control: 'boolean',
    },
  },
  render: (args) =>
    html`<pds-video-player
      variant="${args.variant || nothing}"
      ?hideVideoDuration="${args.hideVideoDuration}"
      videoTitle="${args.videoTitle || nothing}"
      videoDescription="${args.videoDescription || nothing}"
      videoUrl="https://players.brightcove.net/1162425107001/cbe63a49-d26e-41ed-9e8e-5c1dec8c6b45_default/index.html?videoId=5027867735001"
      videoPlayerTextTracks="https://static.3playmedia.com/p/files/5281753/threeplay_transcripts/15765393?format_id=16&amp;project_id=17743&amp;format=txt"
    ></pds-video-player>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    videoTitle: 'This is an optional video title',
    videoDescription:
      '<p>This is an optional <strong>video description</strong>. It should only be added if there is also a video title.</p>',
  },
  parameters: {
    actions: {
      handles: [
        'pds-video-player-play',
        'pds-video-player-ended',
        'pds-video-player-progress',
      ],
    },
  },
};

export const Alt: StoryObj = {
  name: 'Alt',
  args: { variant: 'alt', hideVideoDuration: true },
  parameters: {
    actions: {
      handles: [
        'pds-video-player-play',
        'pds-video-player-ended',
        'pds-video-player-progress',
      ],
    },
  },
};
