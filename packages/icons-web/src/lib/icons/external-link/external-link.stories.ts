import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './external-link';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ExternalLink',
  component: 'pds-icon-external-link',
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
    html`<pds-icon-external-link
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-external-link>`,
} as Meta;

export const ExternalLink: StoryObj = {
  name: 'ExternalLink',
  args: { size: 'default' },
};
