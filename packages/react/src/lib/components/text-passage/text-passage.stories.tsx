import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsTextPassage } from './text-passage';

export default {
  title: 'Components/Text passage',
  component: PdsTextPassage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Text passage wrapper uses the _light-dom_',
      },
    },
  },
};

const Template: StoryFn<typeof PdsTextPassage> = (args) => (
  <PdsTextPassage {...args}>
    <h2 className="pds-c-heading pds-c-heading--headline-sm">
      Heading example
    </h2>
    <p className="pds-u-margin-top-24">
      <a href="https://www.google.com">A text passage</a> contains arbitrary
      text that might come from a CMS. It should live within a container that
      caps the line length of the text to avoid a straining reading experience.
    </p>
    <p>Second paragraph.</p>
    <ul>
      <li>List item</li>
      <li>
        <a href="https://www.google.com">List item</a>
      </li>
    </ul>
    <ol>
      <li>List item</li>
      <li>
        <a href="https://www.google.com">List item</a>
      </li>
    </ol>
  </PdsTextPassage>
);

export const Default = Template.bind({});
Default.args = {};

export const SmallLineLength = Template.bind({});
SmallLineLength.storyName = 'Small linelength';
SmallLineLength.args = { lineLength: 'sm' };

export const RemoveLineLength = Template.bind({});
RemoveLineLength.storyName = 'Remove linelength';
RemoveLineLength.args = { lineLength: 'none' };
