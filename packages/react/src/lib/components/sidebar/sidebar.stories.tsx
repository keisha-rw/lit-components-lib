import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';
import { PdsSidebar } from './sidebar';

export default {
  title: 'Layout/Sidebar',
  component: PdsSidebar,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsSidebar> = (args) => <PdsSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Main content
      </PlaceholderElement>
      <div slot="right-sidebar">
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Right sidebar
        </PlaceholderElement>
      </div>
    </>
  ),
};

export const LeftSidebar = Template.bind({});
LeftSidebar.storyName = 'Left';
LeftSidebar.args = {
  children: (
    <>
      <div slot="left-sidebar">
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Left sidebar
        </PlaceholderElement>
      </div>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Main content
      </PlaceholderElement>
    </>
  ),
};

export const LeftAndRightSidebar = Template.bind({});
LeftAndRightSidebar.storyName = 'Left and right';
LeftAndRightSidebar.args = {
  children: (
    <>
      <div slot="left-sidebar">
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Left sidebar
        </PlaceholderElement>
      </div>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Main content
      </PlaceholderElement>
      <div slot="right-sidebar">
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Right sidebar
        </PlaceholderElement>
      </div>
    </>
  ),
};
