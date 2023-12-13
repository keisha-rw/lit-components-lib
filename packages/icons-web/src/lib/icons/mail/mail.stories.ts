import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './mail';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Mail',
  component: 'pds-icon-mail',
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
    html`<pds-icon-mail
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-mail>`,
} as Meta;

export const Mail: StoryObj = {
  name: 'Mail',
  args: { size: 'default' },
};
