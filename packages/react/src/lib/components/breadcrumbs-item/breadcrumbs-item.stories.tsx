import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsBreadcrumbs } from '../breadcrumbs/breadcrumbs';
import { PdsBreadcrumbsItem } from './breadcrumbs-item';

export default {
  title: 'Components/Breadcrumbs/Breadcrumbs item',
  component: PdsBreadcrumbsItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the breadcrumbs component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsBreadcrumbs> = (args) => (
  <PdsBreadcrumbs {...args}>
    <PdsBreadcrumbsItem
      onClick={(e: any) => action('pds-breadcrumbs-item-click')(e.detail)}
      href="https://google.com"
    >
      Breadcrumb 1
    </PdsBreadcrumbsItem>
  </PdsBreadcrumbs>
);

export const Default = Template.bind({});
Default.args = {};

const ActiveTemplate: StoryFn<typeof PdsBreadcrumbs> = (args) => (
  <PdsBreadcrumbs {...args}>
    <PdsBreadcrumbsItem active>Breadcrumb 1</PdsBreadcrumbsItem>
  </PdsBreadcrumbs>
);

export const Active = ActiveTemplate.bind({});
Active.args = {};
