import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsBand } from './band';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title: 'Components/Band',
  component: PdsBand,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsBand> = (args) => (
  <PdsBand {...args}>
    <PlaceholderElement tight styleModifier="pds-u-margin-bottom-0">
      for placeholder only
    </PlaceholderElement>
  </PdsBand>
);

export const Default = Template.bind({});
Default.args = {};

export const BrandDefault = Template.bind({});
BrandDefault.storyName = 'Brand default';
BrandDefault.args = {
  variant: 'brand-default',
};

export const SpacingSmall = Template.bind({});
SpacingSmall.storyName = 'Spacing small';
SpacingSmall.args = {
  variant: 'brand-default',
  spacing: 'sm',
};

export const SpacingLarge = Template.bind({});
SpacingLarge.storyName = 'Spacing large';
SpacingLarge.args = {
  variant: 'brand-default',
  spacing: 'lg',
};

export const SpacingNone = Template.bind({});
SpacingNone.storyName = 'Spacing none';
SpacingNone.args = {
  variant: 'brand-default',
  spacing: 'none',
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
};

export const Strong = Template.bind({});
Strong.args = {
  variant: 'strong',
};

export const BrandStrong = Template.bind({});
BrandStrong.storyName = 'Brand strong';
BrandStrong.args = {
  variant: 'brand-strong',
};

export const BrandXStrong = Template.bind({});
BrandXStrong.storyName = 'Brand xstrong';
BrandXStrong.args = {
  variant: 'brand-xstrong',
};

export const BrandGradientStrong = Template.bind({});
BrandGradientStrong.storyName = 'Brand gradient strong';
BrandGradientStrong.args = {
  variant: 'brand-gradient-strong',
};

export const BrandGradientXStrong = Template.bind({});
BrandGradientXStrong.storyName = 'Brand gradient xstrong';
BrandGradientXStrong.args = {
  variant: 'brand-gradient-xstrong',
};
