import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsHr } from './hr';

export default {
  title: 'Components/Hr',
  component: PdsHr,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsHr> = (args) => <PdsHr {...args} />;

export const Default = Template.bind({});
Default.args = {};
