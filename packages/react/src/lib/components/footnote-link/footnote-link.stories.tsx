// @ts-nocheck

import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsFootnoteLink } from './footnote-link';

export default {
  title: 'Components/Footnote/Footnote link',
  component: PdsFootnoteLink,
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

const Template: StoryFn<typeof PdsFootnoteLink> = (args) => (
  <PdsFootnoteLink
    {...args}
    href="#id1"
    id="link1"
    footnoteId="id1"
    aria-describedby="id1"
  >
    1
  </PdsFootnoteLink>
);

export const Default = Template.bind({});
Default.args = { variant: 'default' };

export const Inverted = Template.bind({});
Inverted.args = { variant: 'inverted' };
Inverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
