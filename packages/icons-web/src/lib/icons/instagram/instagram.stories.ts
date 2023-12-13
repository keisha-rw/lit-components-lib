import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './instagram';
import { themedefault } from '@keisha/design-system-tokens';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/Instagram',
  component: 'pds-icon-instagram',
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
    html`<pds-icon-instagram
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-instagram>`,
} as Meta;

export const Instagram: StoryObj = {
  name: 'Instagram',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
