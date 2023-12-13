import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsAlert } from './alert';
import { PdsLink } from '../link/link';

export default {
  title: 'Components/Alert',
  component: PdsAlert,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-button-click'],
    },
  },
};

const Template: StoryFn<typeof PdsAlert> = (args) => (
  <PdsAlert {...args}>
    This is alert content.{' '}
    <PdsLink
      variant="emphasis"
      onClick={(e: any) => action('pds-link-click')(e.detail)}
    >
      This is a link.
    </PdsLink>
  </PdsAlert>
);

export const Information = Template.bind({});
Information.args = {};

export const InformationNoDismiss = Template.bind({});
InformationNoDismiss.storyName = 'Information not dismissable';
InformationNoDismiss.args = {
  hideDismissButton: true,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

const BannerTemplate: StoryFn<typeof PdsAlert> = (args) => (
  <PdsAlert {...args}>
    This is alert content.{' '}
    <PdsLink
      variant="emphasis-inverted"
      onClick={(e: any) => action('pds-link-click')(e.detail)}
    >
      This is a link.
    </PdsLink>
  </PdsAlert>
);

export const Banner = BannerTemplate.bind({});
Banner.args = {
  variant: 'banner',
};

export const InformationWithLayoutContainer = Template.bind({});
InformationWithLayoutContainer.storyName =
  'Informational with layout-container';
InformationWithLayoutContainer.args = {
  variant: 'information',
  layoutContainerVariant: 'default',
  layoutContainerRemovePadding: 'md',
};

export const BannerWithLayoutContainer = BannerTemplate.bind({});
BannerWithLayoutContainer.storyName = 'Banner with layout container';
BannerWithLayoutContainer.args = {
  variant: 'banner',
  layoutContainerVariant: 'default',
};

export const HiddenOnPageLoad = Template.bind({});
HiddenOnPageLoad.storyName = 'Hidden on page load';
HiddenOnPageLoad.args = {
  variant: 'information',
  hiddenOnPageLoad: true,
};
