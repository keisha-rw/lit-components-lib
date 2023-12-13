import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsSupportHeading } from './support-heading';

export default {
  title: 'Components/Support heading',
  component: PdsSupportHeading,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsSupportHeading> = (args) => {
  return <PdsSupportHeading {...args}>Title</PdsSupportHeading>;
};

export const Default = Template.bind({});
Default.args = {
  headingTagName: 'h2',
  headingVariant: 'meta-default',
};

export const DefaultSmall = Template.bind({});
DefaultSmall.storyName = 'Default small';
DefaultSmall.args = {
  headingTagName: 'h2',
  headingVariant: 'meta-sm',
};

export const Inverted = Template.bind({});
Inverted.args = {
  headingTagName: 'h2',
  headingVariant: 'meta-sm',
  inverted: true,
};

export const InvertedSmall = Template.bind({});
InvertedSmall.storyName = 'Inverted small';
InvertedSmall.args = {
  headingTagName: 'h2',
  headingVariant: 'meta-sm',
  inverted: true,
};

export const Styled = Template.bind({});
Styled.args = {
  headingTagName: 'h2',
  headingVariant: 'headline-default',
};
