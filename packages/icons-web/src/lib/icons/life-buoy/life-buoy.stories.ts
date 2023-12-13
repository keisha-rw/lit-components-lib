import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './life-buoy';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Life buoy',
  component: 'pds-icon-life-buoy',
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
    html`<pds-icon-life-buoy
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-life-buoy>`,
} as Meta;

export const LifeBuoy: StoryObj = {
  name: 'LifeBuoy',
  args: { size: 'default' },
};
