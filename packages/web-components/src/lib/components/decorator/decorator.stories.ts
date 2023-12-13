import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './decorator';

export default {
  title: 'Components/Decorator',
  component: 'pds-decorator',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    variant: {
      control: 'select',
      options: ['default', 'inverted'],
    },
  },
  render: (args) =>
    html`<pds-decorator
      size="${args.size || nothing}"
      variant="${args.variant || nothing}"
    ></pds-decorator>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
};

export const Small: StoryObj = {
  name: 'Small',
  args: {
    size: 'sm',
  },
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  args: {
    variant: 'inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const Defaultwithheading: StoryObj = {
  name: 'Default with heading',
  render: (args) =>
    html`<pds-decorator
      size="${args.size || nothing}"
      variant="${args.variant || nothing}"
      ><span>Heading</span></pds-decorator
    >`,
};

export const Invertedwithheading: StoryObj = {
  name: 'Inverted with heading',
  args: {
    variant: 'inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
  render: (args) =>
    html`<pds-decorator
      size="${args.size || nothing}"
      variant="${args.variant || nothing}"
      ><span>Heading</span></pds-decorator
    >`,
};
