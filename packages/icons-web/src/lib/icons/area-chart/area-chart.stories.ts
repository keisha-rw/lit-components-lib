import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './area-chart';
import { themedefault } from '@keisha/design-system-tokens';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/AreaChart',
  component: 'pds-icon-area-chart',
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
    html`<pds-icon-area-chart
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-area-chart>`,
} as Meta;

export const AreaChart: StoryObj = {
  name: 'AreaChart',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
