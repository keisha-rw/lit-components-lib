import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsDecorator } from './decorator';

export default {
  title: 'Components/Decorator',
  component: PdsDecorator,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsDecorator> = (args) => (
  <PdsDecorator {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
Inverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};

const headingTemplate: StoryFn<typeof PdsDecorator> = (args) => (
  <PdsDecorator {...args}>
    <span>Heading</span>
  </PdsDecorator>
);

export const Defaultwithheading = headingTemplate.bind({});
Defaultwithheading.storyName = 'Default with heading';
Defaultwithheading.args = {};

export const Invertedwithheading = headingTemplate.bind({});
Invertedwithheading.storyName = 'Inverted with heading';
Invertedwithheading.args = {
  variant: 'inverted',
};
Invertedwithheading.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
