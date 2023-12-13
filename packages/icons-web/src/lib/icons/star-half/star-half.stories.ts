import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { themedefault } from '@keisha/design-system-tokens';
import './star-half';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/StarHalf',
  component: 'pds-icon-star-half',
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
    html`<pds-icon-star-half
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-star-half>`,
} as Meta;

export const StarHalf: StoryObj = {
  name: 'StarHalf',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
