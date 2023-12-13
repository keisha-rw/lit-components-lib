// @ts-nocheck

import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsFootnoteItem } from './footnote-item';

export default {
  title: 'Components/Footnote/Footnote item',
  component: PdsFootnoteItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the footnote component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsFootnoteItem> = (args) => (
  <PdsFootnoteItem {...args} ariaLabel="back to content" id="id1" href="#link1">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo.
  </PdsFootnoteItem>
);

export const Default = Template.bind({});
Default.args = {};
