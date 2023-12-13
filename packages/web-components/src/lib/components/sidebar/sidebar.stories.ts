import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './sidebar';
import '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title: 'Layout/Sidebar',
  component: 'pds-sidebar',
  tags: ['autodocs'],
  render: () =>
    html`<pds-sidebar
      ><placeholder-element style="--placeholder-element-margin-bottom: 0;"
        >Main content</placeholder-element
      ><placeholder-element
        style="--placeholder-element-margin-bottom: 0;"
        slot="right-sidebar"
        >Right sidebar</placeholder-element
      ></pds-sidebar
    >`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const LeftSidebar: StoryObj = {
  name: 'Left',
  render: () =>
    html`<pds-sidebar style="--pds-sidebar-left-width: 380px;"
      ><placeholder-element
        style="--placeholder-element-margin-bottom: 0;"
        slot="left-sidebar"
        >Left sidebar</placeholder-element
      ><placeholder-element style="--placeholder-element-margin-bottom: 0;"
        >Main content</placeholder-element
      ></pds-sidebar
    >`,
};

export const LeftAndRightSidebar: StoryObj = {
  name: 'Left and right',
  render: () =>
    html`<pds-sidebar
      ><placeholder-element
        style="--placeholder-element-margin-bottom: 0;"
        slot="left-sidebar"
        >Left sidebar</placeholder-element
      ><placeholder-element style="--placeholder-element-margin-bottom: 0;"
        >Main content</placeholder-element
      ><placeholder-element
        style="--placeholder-element-margin-bottom: 0;"
        slot="right-sidebar"
        >Right sidebar</placeholder-element
      ></pds-sidebar
    >`,
};
