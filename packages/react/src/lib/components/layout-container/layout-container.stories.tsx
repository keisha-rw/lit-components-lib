import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsLayoutContainer } from './layout-container';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title: 'Layout/Layout container',
  component: PdsLayoutContainer,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsLayoutContainer> = (args) => (
  <PdsLayoutContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Layout container
    </PlaceholderElement>
  ),
};

export const RemovePaddingMd = Template.bind({});
RemovePaddingMd.storyName = 'Remove padding medium';
RemovePaddingMd.args = {
  children: (
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Remove padding around placeholder element below md screens
    </PlaceholderElement>
  ),
  removePadding: 'md',
};

export const RemovePaddingAll = Template.bind({});
RemovePaddingAll.storyName = 'Remove padding all';
RemovePaddingAll.args = {
  children: (
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Remove padding around placeholder element for all screens
    </PlaceholderElement>
  ),
  removePadding: 'all',
};

export const Narrow = Template.bind({});
Narrow.args = {
  children: (
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Layout container
    </PlaceholderElement>
  ),
  variant: 'narrow',
};
