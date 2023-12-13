import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './logo';

export default {
  title: 'Components/Logo',
  component: 'pds-logo',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'white',
        'default-p-white-font',
        'p-gradient',
        'p',
        'p-white',
      ],
    },
  },
  render: (args) =>
    html`<pds-logo variant="${args.variant || nothing}"></pds-logo>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const DefaultLogo: StoryObj = {
  name: 'Default',
  args: {},
};

export const DefaultLogoWhiteFont: StoryObj = {
  name: 'Default white font',
  args: { variant: 'default-p-white-font' },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const WhiteLogo: StoryObj = {
  name: 'White',
  args: { variant: 'white' },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const PLogo: StoryObj = {
  name: 'P',
  args: { variant: 'p' },
};

export const PGradientLogo: StoryObj = {
  name: 'P gradient',
  args: { variant: 'p-gradient' },
};

export const PWhiteLogo: StoryObj = {
  name: 'P white',
  args: { variant: 'p-white' },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};
