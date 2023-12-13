import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './download';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Download',
  component: 'pds-icon-download',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: iconSizes,
    },
    color: {
      control: 'select',
      options: validIconColors,
    },
  },
  render: (args) =>
    html`<pds-icon-download
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-download>`,
} as Meta;

export const Download: StoryObj = {
  name: 'Download',
  args: { size: 'default' },
};
