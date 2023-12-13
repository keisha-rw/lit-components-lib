import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../breadcrumbs/breadcrumbs';
import './breadcrumbs-item';

export default {
  title: 'Components/Breadcrumbs/Breadcrumbs item',
  component: 'pds-breadcrumbs-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: ['pds-breadcrumbs-item-click'],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the Breadcrumbs component.',
      },
    },
  },
  argTypes: {
    active: {
      control: 'boolean',
    },
    default: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    'pds-breadcrumbs-item-click': {
      control: 'object',
    },
  },
  render: () =>
    html`<pds-breadcrumbs>
      <pds-breadcrumbs-item href="https://google.com"
        >Breadcrumb 1</pds-breadcrumbs-item
      >
    </pds-breadcrumbs>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
};

export const Active: StoryObj = {
  name: 'Active',
  render: () =>
    html`<pds-breadcrumbs>
      <pds-breadcrumbs-item active>Breadcrumb 1</pds-breadcrumbs-item>
    </pds-breadcrumbs>`,
};
