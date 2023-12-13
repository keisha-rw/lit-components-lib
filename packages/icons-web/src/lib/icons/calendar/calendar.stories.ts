import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './calendar';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Calendar',
  component: 'pds-icon-calendar',
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
    html`<pds-icon-calendar
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-calendar>`,
} as Meta;

export const Calendar: StoryObj = {
  name: 'Calendar',
  args: { size: 'default' },
};
