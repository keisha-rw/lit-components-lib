import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { themedefault } from '@keisha/design-system-tokens';
import './whatsapp';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/Whatsapp',
  component: 'pds-icon-whatsapp',
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
    html`<pds-icon-whatsapp
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-whatsapp>`,
} as Meta;

export const Whatsapp: StoryObj = {
  name: 'Whatsapp',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
