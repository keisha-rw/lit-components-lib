import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './refresh-ccw';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/RefreshCcw',
  component: 'pds-icon-refresh-ccw',
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
    html`<pds-icon-refresh-ccw
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-refresh-ccw>`,
} as Meta;

export const RefreshCcw: StoryObj = {
  name: 'RefreshCcw',
  args: { size: 'default' },
};
