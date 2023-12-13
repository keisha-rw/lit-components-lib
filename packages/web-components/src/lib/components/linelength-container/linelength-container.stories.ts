import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './linelength-container';

export default {
  title: 'Components/Linelength container',
  component: 'pds-linelength-container',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
  },
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () =>
    html`<pds-linelength-container
      ><pds-text-passage>
        For the default container, it will wrap to the next line after about 80
        characters.</pds-text-passage
      ></pds-linelength-container
    >`,
};

export const Small: StoryObj = {
  name: 'Small',
  args: { size: 'sm' },
  render: (args) =>
    html`<pds-linelength-container size="${args.size}"
      ><pds-text-passage
        >The small container prop should wrap at about 60
        characters.</pds-text-passage
      ></pds-linelength-container
    >`,
};
