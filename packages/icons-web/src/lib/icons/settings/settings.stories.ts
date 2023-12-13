import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './settings';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Settings',
  component: 'pds-icon-settings',
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
    html`<pds-icon-settings
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-settings>`,
} as Meta;

export const Settings: StoryObj = {
  name: 'Settings',
  args: { size: 'default' },
};
