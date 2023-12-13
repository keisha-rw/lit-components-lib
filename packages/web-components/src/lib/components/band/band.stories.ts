import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './band';
import '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title: 'Components/Band',
  component: 'pds-band',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'subtle',
        'strong',
        'brand-default',
        'brand-strong',
        'brand-xstrong',
        'brand-gradient-strong',
        'brand-gradient-xstrong',
      ],
    },
    spacing: {
      control: 'radio',
      options: ['none', 'sm', 'lg', 'default'],
    },
  },
  render: (args) =>
    html`<pds-band
      variant="${args.variant || nothing}"
      spacing="${args.spacing || nothing}"
      ><placeholder-element tight="true"
        >for placeholder only</placeholder-element
      ></pds-band
    >`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) =>
    html`<pds-band
      ><placeholder-element tight="true"
        >for placeholder only</placeholder-element
      ></pds-band
    >`,
  args: {},
};

export const BrandDefault: StoryObj = {
  name: 'Brand default',
  args: {
    variant: 'brand-default',
  },
};

export const SpacingSmall: StoryObj = {
  name: 'Spacing small',
  args: {
    variant: 'brand-default',
    spacing: 'sm',
  },
};

export const SpacingLarge: StoryObj = {
  name: 'Spacing large',
  args: {
    variant: 'brand-default',
    spacing: 'lg',
  },
};

export const SpacingNone: StoryObj = {
  name: 'Spacing none',
  render: (args) =>
    html`<pds-band variant="${args.variant}" spacing="${args.spacing}"
      ><placeholder-element inlineStyle="background: none" tight="true"
        >for placeholder only (transparent)</placeholder-element
      ></pds-band
    >`,
  args: {
    variant: 'brand-default',
    spacing: 'none',
  },
};

export const Subtle: StoryObj = {
  name: 'Subtle',
  args: {
    variant: 'subtle',
  },
};

export const Strong: StoryObj = {
  name: 'Strong',
  args: {
    variant: 'strong',
  },
};

export const BrandStrong: StoryObj = {
  name: 'Brand strong',
  args: {
    variant: 'brand-strong',
  },
};

export const BrandXStrong: StoryObj = {
  name: 'Brand xstrong',
  args: {
    variant: 'brand-xstrong',
  },
};

export const BrandGradientStrong: StoryObj = {
  name: 'Brand gradient strong',
  args: {
    variant: 'brand-gradient-strong',
  },
};

export const BrandGradientXStrong: StoryObj = {
  name: 'Brand gradient xstrong',
  args: {
    variant: 'brand-gradient-xstrong',
  },
};
