import { Meta, StoryObj } from '@storybook/web-components';

import { html, nothing } from 'lit';
import './layout-container';
import '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title: 'Layout/Layout container',
  component: 'pds-layout-container',
  tags: ['autodocs'],
  happo: {
    delay: 300,
  },
  render: (args) =>
    html`<pds-layout-container
      variant="${args.variant || nothing}"
      removePadding="${args.removePadding || nothing}"
      ><placeholder-element
        >Layout container</placeholder-element
      ></pds-layout-container
    >`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const RemovePaddingMd: StoryObj = {
  name: 'Remove padding medium',
  args: {
    removePadding: 'md',
  },
};

export const RemovePaddingAll: StoryObj = {
  name: 'Remove padding all',
  args: {
    removePadding: 'all',
  },
};

export const Narrow: StoryObj = {
  name: 'Narrow',
  args: {
    variant: 'narrow',
  },
};
