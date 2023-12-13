import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './shield';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Shield',
  component: 'pds-icon-shield',
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
    html`<pds-icon-shield
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-shield>`,
} as Meta;

export const Shield: StoryObj = {
  name: 'Shield',
  args: { size: 'default' },
};
