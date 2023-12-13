import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { themedefault } from '@keisha/design-system-tokens';
import './youtube';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/Youtube',
  component: 'pds-icon-youtube',
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
    html`<pds-icon-youtube
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-youtube>`,
} as Meta;

export const Youtube: StoryObj = {
  name: 'Youtube',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
