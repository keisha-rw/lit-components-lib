import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { themedefault } from '@keisha/design-system-tokens';
import './twitter';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/Twitter',
  component: 'pds-icon-twitter',
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
    html`<pds-icon-twitter
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-twitter>`,
} as Meta;

export const Twitter: StoryObj = {
  name: 'Twitter',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
