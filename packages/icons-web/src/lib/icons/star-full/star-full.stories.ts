import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { themedefault } from '@keisha/design-system-tokens';
import './star-full';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/StarFull',
  component: 'pds-icon-star-full',
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
    html`<pds-icon-star-full
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-star-full>`,
} as Meta;

export const StarFull: StoryObj = {
  name: 'StarFull',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
