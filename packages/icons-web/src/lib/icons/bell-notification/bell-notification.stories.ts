import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './bell-notification';
import { themedefault } from '@keisha/design-system-tokens';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/BellNotification',
  component: 'pds-icon-bell-notification',
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
    html`<pds-icon-bell-notification
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-bell-notification>`,
} as Meta;

export const BellNotification: StoryObj = {
  name: 'BellNotification',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
