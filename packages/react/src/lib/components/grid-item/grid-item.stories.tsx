import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';
import { PdsGridItem } from './grid-item';

export default {
  title: 'Layout/Grid/Grid item',
  component: PdsGridItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the grid component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsGridItem> = (args) => (
  <PdsGridItem {...args}>
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Item 1
    </PlaceholderElement>
  </PdsGridItem>
);

export const Default = Template.bind({});
Default.args = {};
