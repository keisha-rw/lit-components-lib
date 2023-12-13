import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './map-pin';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/MapPin',
  component: 'pds-icon-map-pin',
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
    html`<pds-icon-map-pin
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-map-pin>`,
} as Meta;

export const MapPin: StoryObj = {
  name: 'MapPin',
  args: { size: 'default' },
};
