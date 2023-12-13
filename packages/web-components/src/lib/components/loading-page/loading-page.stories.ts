import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './loading-page';

const meta: Meta = {
  title: 'Components/Loading page',
  component: 'pds-loading-page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`<pds-loading-page></pds-loading-page>`,
};
export default meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
