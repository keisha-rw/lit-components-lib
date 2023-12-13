import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './home';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Home',
  component: 'pds-icon-home',
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
    html`<pds-icon-home
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-home>`,
} as Meta;

export const Home: StoryObj = {
  name: 'Home',
  args: { size: 'default' },
};
