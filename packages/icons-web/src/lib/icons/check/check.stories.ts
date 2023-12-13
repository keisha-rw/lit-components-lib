import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './check';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Check',
  component: 'pds-icon-check',
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
    html`<pds-icon-check
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-check>`,
} as Meta;

export const Check: StoryObj = {
  name: 'Check',
  args: { size: 'default' },
};
