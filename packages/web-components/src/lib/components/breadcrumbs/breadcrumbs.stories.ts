import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './breadcrumbs';
import '../breadcrumbs-item/breadcrumbs-item';

export default {
  title: 'Components/Breadcrumbs',
  component: 'pds-breadcrumbs',
  tags: ['autodocs'],
  render: () =>
    html`<pds-breadcrumbs>
      <pds-breadcrumbs-item href="https://google.com"
        >Breadcrumb 1</pds-breadcrumbs-item
      >
      <pds-breadcrumbs-item href="https://google.com"
        >Breadcrumb 2</pds-breadcrumbs-item
      >
      <pds-breadcrumbs-item href="https://google.com"
        >Breadcrumb 3</pds-breadcrumbs-item
      >
      <pds-breadcrumbs-item href="https://google.com"
        >Breadcrumb 4</pds-breadcrumbs-item
      >
      <pds-breadcrumbs-item active>Breadcrumb 5</pds-breadcrumbs-item>
    </pds-breadcrumbs>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  parameters: {
    actions: {
      handles: ['pds-breadcrumbs-item-click'],
    },
  },
};
