import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './file';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/File',
  component: 'pds-icon-file',
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
    html`<pds-icon-file
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-file>`,
} as Meta;

export const File: StoryObj = {
  name: 'File',
  args: { size: 'default' },
};
