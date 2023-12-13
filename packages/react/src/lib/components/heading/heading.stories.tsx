import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsHeading } from './heading';

export default {
  title: 'Components/Heading',
  component: PdsHeading,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsHeading> = (args) => (
  <PdsHeading {...args}>Some heading text goes here</PdsHeading>
);

export const Heading1VariantDisplayDefault = Template.bind({});
Heading1VariantDisplayDefault.storyName = 'H1 variant, display default';
Heading1VariantDisplayDefault.args = {
  headingTag: 'h1',
  variant: 'display-default',
};

export const Heading2VariantDisplayDefault = Template.bind({});
Heading2VariantDisplayDefault.storyName = 'H2 variant, display default';
Heading2VariantDisplayDefault.args = {
  headingTag: 'h2',
  variant: 'display-default',
};

export const Heading2VariantDisplaySmall = Template.bind({});
Heading2VariantDisplaySmall.storyName = 'H2 variant, display small';
Heading2VariantDisplaySmall.args = {
  headingTag: 'h2',
  variant: 'display-sm',
};

export const Heading2VariantHeadlineSmall = Template.bind({});
Heading2VariantHeadlineSmall.storyName = 'H2 variant, headline small';
Heading2VariantHeadlineSmall.args = {
  headingTag: 'h2',
  variant: 'headline-sm',
};

export const Heading2VariantHeadlineDefault = Template.bind({});
Heading2VariantHeadlineDefault.storyName = 'H2 variant, headline default';
Heading2VariantHeadlineDefault.args = {
  headingTag: 'h2',
  variant: 'headline-default',
};

export const Heading2VariantHeadlineLarge = Template.bind({});
Heading2VariantHeadlineLarge.storyName = 'H2 variant, headline large';
Heading2VariantHeadlineLarge.args = {
  headingTag: 'h2',
  variant: 'headline-lg',
};

export const Heading2VariantTitleExtraSmall = Template.bind({});
Heading2VariantTitleExtraSmall.storyName = 'H2 variant, title xsmall';
Heading2VariantTitleExtraSmall.args = {
  headingTag: 'h2',
  variant: 'title-xs',
};

export const Heading2VariantTitleSmall = Template.bind({});
Heading2VariantTitleSmall.storyName = 'H2 variant, title small';
Heading2VariantTitleSmall.args = {
  headingTag: 'h2',
  variant: 'title-sm',
};

export const Heading2VariantTitleDefault = Template.bind({});
Heading2VariantTitleDefault.storyName = 'H2 variant, title default';
Heading2VariantTitleDefault.args = {
  headingTag: 'h2',
  variant: 'title-default',
};

export const Heading2VariantTitleLarge = Template.bind({});
Heading2VariantTitleLarge.storyName = 'H2 variant, title large';
Heading2VariantTitleLarge.args = {
  headingTag: 'h2',
  variant: 'title-lg',
};

export const Heading2VariantLabelSmall = Template.bind({});
Heading2VariantLabelSmall.storyName = 'H2 variant, label small';
Heading2VariantLabelSmall.args = {
  headingTag: 'h2',
  variant: 'label-sm',
};

export const Heading2VariantLabelDefault = Template.bind({});
Heading2VariantLabelDefault.storyName = 'H2 variant, label default';
Heading2VariantLabelDefault.args = {
  headingTag: 'h2',
  variant: 'label-default',
};

export const Heading2VariantLabelLarge = Template.bind({});
Heading2VariantLabelLarge.storyName = 'H2 variant, label large';
Heading2VariantLabelLarge.args = {
  headingTag: 'h2',
  variant: 'label-lg',
};

export const Heading2VariantMetaSmall = Template.bind({});
Heading2VariantMetaSmall.storyName = 'H2 variant, meta small';
Heading2VariantMetaSmall.args = {
  headingTag: 'h2',
  variant: 'meta-sm',
};

export const Heading2VariantMetaDefault = Template.bind({});
Heading2VariantMetaDefault.storyName = 'H2 variant, meta default';
Heading2VariantMetaDefault.args = {
  headingTag: 'h2',
  variant: 'meta-default',
};

export const Heading3VariantDisplayDefault = Template.bind({});
Heading3VariantDisplayDefault.storyName = 'H3 variant, display default';
Heading3VariantDisplayDefault.args = {
  headingTag: 'h3',
  variant: 'display-default',
};

export const Heading4VariantDisplaySmall = Template.bind({});
Heading4VariantDisplaySmall.storyName = 'H4 variant, display small';
Heading4VariantDisplaySmall.args = {
  headingTag: 'h4',
  variant: 'display-sm',
};

export const Heading4VariantDisplayDefault = Template.bind({});
Heading4VariantDisplayDefault.storyName = 'H4 variant, display default';
Heading4VariantDisplayDefault.args = {
  headingTag: 'h4',
  variant: 'display-default',
};

export const Heading5VariantDisplayDefault = Template.bind({});
Heading5VariantDisplayDefault.storyName = 'H5 variant, display default';
Heading5VariantDisplayDefault.args = {
  headingTag: 'h5',
  variant: 'display-default',
};

export const Heading6VariantDisplayDefault = Template.bind({});
Heading6VariantDisplayDefault.storyName = 'H6 variant, display default';
Heading6VariantDisplayDefault.args = {
  headingTag: 'h6',
  variant: 'display-default',
};
