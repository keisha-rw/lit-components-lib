import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './help-circle';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/HelpCircle',
  component: 'pds-icon-help-circle',
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
    html`<pds-icon-help-circle
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-help-circle>`,
} as Meta;

export const HelpCircle: StoryObj = {
  name: 'HelpCircle',
  args: { size: 'default' },
};
