import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsTag } from './tag';

export default {
  title: 'Components/Tag',
  component: PdsTag,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-tag-click'],
    },
  },
};

const Template: StoryFn<typeof PdsTag> = (args) => (
  <PdsTag onClick={action('pds-tag-click')} {...args} />
);

export const Default = Template.bind({});
Default.args = {};
