import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './facebook';
import { themedefault } from '@keisha/design-system-tokens';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/Facebook',
  component: 'pds-icon-facebook',
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
    html`<pds-icon-facebook
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-facebook>`,
} as Meta;

export const Facebook: StoryObj = {
  name: 'Facebook',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
