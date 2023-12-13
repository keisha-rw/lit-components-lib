import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsLinelengthContainer } from './linelength-container';
import { PdsTextPassage } from '../text-passage/text-passage';

export default {
  title: 'Components/Linelength container',
  component: PdsLinelengthContainer,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsLinelengthContainer> = (args) => (
  <PdsLinelengthContainer {...args}>
    <PdsTextPassage>
      For the default container, it will wrap to the next line after about 80
      characters.
    </PdsTextPassage>
  </PdsLinelengthContainer>
);

export const Default = Template.bind({});
Default.args = {};

const SmallTemplate: StoryFn<typeof PdsLinelengthContainer> = (args) => (
  <PdsLinelengthContainer {...args}>
    <PdsTextPassage>
      The small container prop should wrap at about 60 characters.
    </PdsTextPassage>
  </PdsLinelengthContainer>
);

export const Small = SmallTemplate.bind({});
Small.args = { size: 'sm' };
