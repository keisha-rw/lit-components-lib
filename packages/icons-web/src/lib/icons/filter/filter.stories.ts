import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './filter';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Filter',
  component: 'pds-icon-filter',
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
    html`<pds-icon-filter
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-filter>`,
} as Meta;

export const Filter: StoryObj = {
  name: 'Filter',
  args: { size: 'default' },
};
