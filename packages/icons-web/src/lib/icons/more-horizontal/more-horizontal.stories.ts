import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './more-horizontal';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/MoreHorizontal',
  component: 'pds-icon-more-horizontal',
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
    html`<pds-icon-more-horizontal
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-more-horizontal>`,
} as Meta;

export const MoreHorizontal: StoryObj = {
  name: 'MoreHorizontal',
  args: { size: 'default' },
};
