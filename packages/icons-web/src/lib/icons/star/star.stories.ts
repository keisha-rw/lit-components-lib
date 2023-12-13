import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './star';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Star',
  component: 'pds-icon-star',
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
    html`<pds-icon-star
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-star>`,
} as Meta;

export const Star: StoryObj = {
  name: 'Star',
  args: { size: 'default' },
};
