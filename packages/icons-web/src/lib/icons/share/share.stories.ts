import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './share';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Share',
  component: 'pds-icon-share',
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
    html`<pds-icon-share
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-share>`,
} as Meta;

export const Share: StoryObj = {
  name: 'Share',
  args: { size: 'default' },
};
