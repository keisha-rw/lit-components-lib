import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './hr';

export default {
  title: 'Components/Hr',
  component: 'pds-hr',
  tags: ['autodocs'],
  render: () => html`<pds-hr></pds-hr>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
