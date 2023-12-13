import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsBreadcrumbs } from './breadcrumbs';
import { PdsBreadcrumbsItem } from '../breadcrumbs-item/breadcrumbs-item';

export default {
  title: 'Components/Breadcrumbs',
  component: PdsBreadcrumbs,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsBreadcrumbs> = (args) => (
  <PdsBreadcrumbs {...args}>
    <PdsBreadcrumbsItem
      onClick={(e: any) => action('pds-breadcrumbs-item-click')(e.detail)}
      href="https://google.com"
    >
      Breadcrumb 1
    </PdsBreadcrumbsItem>
    <PdsBreadcrumbsItem
      onClick={(e: any) => action('pds-breadcrumbs-item-click')(e.detail)}
      href="https://google.com"
    >
      Breadcrumb 2
    </PdsBreadcrumbsItem>
    <PdsBreadcrumbsItem
      onClick={(e: any) => action('pds-breadcrumbs-item-click')(e.detail)}
      href="https://google.com"
    >
      Breadcrumb 3
    </PdsBreadcrumbsItem>
    <PdsBreadcrumbsItem
      onClick={(e: any) => action('pds-breadcrumbs-item-click')(e.detail)}
      href="https://google.com"
    >
      Breadcrumb 4
    </PdsBreadcrumbsItem>
    <PdsBreadcrumbsItem active>Breadcrumb 5</PdsBreadcrumbsItem>
  </PdsBreadcrumbs>
);

export const Default = Template.bind({});
Default.args = {};
