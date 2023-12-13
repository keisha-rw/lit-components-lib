import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './line-chart';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/LineChart',
  component: 'pds-icon-line-chart',
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
    html`<pds-icon-line-chart
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-line-chart>`,
} as Meta;

export const LineChart: StoryObj = {
  name: 'LineChart',
  args: { size: 'default' },
};
