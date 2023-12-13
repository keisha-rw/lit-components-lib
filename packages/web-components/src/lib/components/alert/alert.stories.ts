import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './alert';

export default {
  title: 'Components/Alert',
  component: 'pds-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['information', 'success', 'error', 'warning', 'banner'],
    },
    role: {
      control: 'text',
    },
    layoutContainerVariant: {
      control: 'select',
      options: ['default', 'narrow'],
    },
    layoutContainerRemovePadding: {
      control: 'text',
    },
  },
  render: (args) =>
    html`<pds-alert
      variant=${args.variant || nothing}
      layoutContainerVariant=${args.layoutContainerVariant || nothing}
      layoutContainerRemovePadding=${args.layoutContainerRemovePadding ||
      nothing}
      ?hideDismissButton=${args.hideDismissButton}
      hiddenOnPageLoad=${args.hiddenOnPageLoad || nothing}
      ><span
        >This is an alert message.
        <pds-link variant="emphasis" href="#">This is a link.</pds-link></span
      ></pds-alert
    >`,
  parameters: {
    actions: {
      handles: ['pds-button-click', 'pds-link-click'],
    },
  },
} as Meta;

export const Information: StoryObj = {
  name: 'Information',
  args: {
    variant: 'information',
  },
};

export const InformationNotDismissable: StoryObj = {
  name: 'Information not dismissable',
  args: {
    variant: 'information',
    hideDismissButton: true,
  },
};

export const Success: StoryObj = {
  name: 'Success',
  args: {
    variant: 'success',
  },
};

export const Error: StoryObj = {
  name: 'Error',
  args: {
    variant: 'error',
  },
};

export const Warning: StoryObj = {
  name: 'Warning',
  args: {
    variant: 'warning',
  },
};

export const Banner: StoryObj = {
  name: 'Banner',
  args: {
    variant: 'banner',
  },
  render: (args) =>
    html`<pds-alert variant=${args.variant}
      ><span
        >This is an alert message.
        <pds-link variant="emphasis-inverted" href="#"
          >This is a link.</pds-link
        ></span
      ></pds-alert
    >`,
};

export const InformationalWithLayoutContainer: StoryObj = {
  name: 'Informational with layout-container',
  args: {
    variant: 'information',
    layoutContainerVariant: 'default',
    layoutContainerRemovePadding: 'md',
  },
};

export const BannerWithLayoutContainer: StoryObj = {
  name: 'Banner with layout-container',
  args: {
    variant: 'banner',
    layoutContainerVariant: 'default',
  },
};

export const hiddenAlert: StoryObj = {
  name: 'Hidden on load',
  args: { variant: 'information', hiddenOnPageLoad: true },
};
