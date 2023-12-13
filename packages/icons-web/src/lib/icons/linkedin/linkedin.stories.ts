import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { themedefault } from '@keisha/design-system-tokens';
import './linkedin';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/LinkedIn',
  component: 'pds-icon-linkedin',
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
    html`<pds-icon-linkedin
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-linkedin>`,
} as Meta;

export const LinkedIn: StoryObj = {
  name: 'LinkedIn',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
