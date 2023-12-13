import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './skeleton-loader';

export default {
  title: 'Components/Skeleton loader',
  component: 'pds-skeleton-loader',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'heading', 'image', 'area-chart'],
    },
  },
  render: (args) =>
    html`<pds-skeleton-loader
      variant="${args.variant || nothing}"
      ?inverted="${args.inverted}"
    ></pds-skeleton-loader>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const SkeletonLoaderDefault: StoryObj = {
  name: 'Default',
  args: {},
};

export const SkeletonLoaderHeading: StoryObj = {
  name: 'Heading',
  args: { variant: 'heading' },
};

export const SkeletonLoaderAreaChart: StoryObj = {
  name: 'Area chart',
  args: { variant: 'area-chart' },
};

export const SkeletonLoaderImage: StoryObj = {
  name: 'Image',
  args: { variant: 'image' },
};

export const SkeletonLoaderInvertedHeading: StoryObj = {
  name: 'Inverted heading',
  args: { variant: 'heading', inverted: true },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
  },
};

export const SkeletonLoaderInvertedDefault: StoryObj = {
  name: 'Inverted text',
  args: { inverted: true },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
  },
};

export const SkeletonLoaderInvertedAreaChart: StoryObj = {
  name: 'Inverted area chart',
  args: { variant: 'area-chart', inverted: true },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
  },
};

export const SkeletonLoaderInvertedImage: StoryObj = {
  name: 'Inverted image',
  args: { variant: 'image', inverted: true },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
  },
};
