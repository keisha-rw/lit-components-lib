import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './list';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/List',
  component: 'pds-icon-list',
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
    html`<pds-icon-list
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-list>`,
} as Meta;

export const List: StoryObj = {
  name: 'List',
  args: { size: 'default' },
};
