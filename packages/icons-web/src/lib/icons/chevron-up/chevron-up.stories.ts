import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './chevron-up';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ChevronUp',
  component: 'pds-icon-chevron-up',
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
    html`<pds-icon-chevron-up
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-chevron-up>`,
} as Meta;

export const ChevronUp: StoryObj = {
  name: 'ChevronUp',
  args: { size: 'default' },
};
