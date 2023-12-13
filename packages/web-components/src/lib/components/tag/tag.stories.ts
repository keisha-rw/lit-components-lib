import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './tag';

export default {
  title: 'Components/Tag',
  component: 'pds-tag',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-tag-click'],
    },
  },
  render: (args) =>
    html`<pds-tag href="${args.href || '#'}"><span>Tag name</span></pds-tag>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
