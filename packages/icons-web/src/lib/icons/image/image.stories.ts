import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './image';
import { themedefault } from '@keisha/design-system-tokens';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/Image',
  component: 'pds-icon-image',
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
    html`<pds-icon-image
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-image>`,
} as Meta;

export const Image: StoryObj = {
  name: 'Image',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
