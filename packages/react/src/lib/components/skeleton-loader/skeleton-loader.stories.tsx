import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsSkeletonLoader } from './skeleton-loader';

export default {
  title: 'Components/Skeleton loader',
  component: PdsSkeletonLoader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'heading', 'image', 'area-chart'],
    },
  },
};

const Template: StoryFn<typeof PdsSkeletonLoader> = (args) => (
  <PdsSkeletonLoader {...args} />
);

export const SkeletonLoaderDefault = Template.bind({});
SkeletonLoaderDefault.storyName = 'Default';
SkeletonLoaderDefault.args = { variant: 'default' };

export const SkeletonLoaderHeading = Template.bind({});
SkeletonLoaderHeading.storyName = 'Heading';
SkeletonLoaderHeading.args = { variant: 'heading' };

export const SkeletonLoaderAreaChart = Template.bind({});
SkeletonLoaderAreaChart.storyName = 'Area chart';
SkeletonLoaderAreaChart.args = { variant: 'area-chart' };

export const SkeletonLoaderImage = Template.bind({});
SkeletonLoaderImage.storyName = 'Image';
SkeletonLoaderImage.args = { variant: 'image' };

export const SkeletonLoaderInvertedHeading = Template.bind({});
SkeletonLoaderInvertedHeading.storyName = 'Inverted heading';
SkeletonLoaderInvertedHeading.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
SkeletonLoaderInvertedHeading.args = { variant: 'heading', inverted: true };

export const SkeletonLoaderInvertedDefault = Template.bind({});
SkeletonLoaderInvertedDefault.storyName = 'Inverted text';
SkeletonLoaderInvertedDefault.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
SkeletonLoaderInvertedDefault.args = { variant: 'default', inverted: true };

export const SkeletonLoaderInvertedAreaChart = Template.bind({});
SkeletonLoaderInvertedAreaChart.storyName = 'Inverted area chart';
SkeletonLoaderInvertedAreaChart.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
SkeletonLoaderInvertedAreaChart.args = {
  variant: 'area-chart',
  inverted: true,
};

export const SkeletonLoaderInvertedImage = Template.bind({});
SkeletonLoaderInvertedImage.storyName = 'Inverted image';
SkeletonLoaderInvertedImage.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
SkeletonLoaderInvertedImage.args = { variant: 'image', inverted: true };
