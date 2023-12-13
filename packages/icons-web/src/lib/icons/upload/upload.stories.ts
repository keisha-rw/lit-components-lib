import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './upload';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Upload',
  component: 'pds-icon-upload',
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
    html`<pds-icon-upload
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-upload>`,
} as Meta;

export const Upload: StoryObj = {
  name: 'Upload',
  args: { size: 'default' },
};
