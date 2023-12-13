/* eslint-disable import/extensions */
import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './pagination-item';

export default {
  title: 'Components/Pagination/Pagination item',
  component: 'pds-pagination',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: ['pds-pagination-item-click'],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the pagination component.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // This is a subcomponent so AXE is confused.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'text',
    },
  },
  render: (args) => {
    return html`
      <pds-pagination-item
        pageNumber=${args.pageNumber || nothing}
        active=${args.active || nothing}
        variant=${args.variant || nothing}
        href=${args.href || nothing}
        hideFlyers=${args.hideFlyers || nothing}
      ></pds-pagination-item>
    `;
  },
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: { pageNumber: '1', variant: 'no-arrows-first' },
};

export const Active: StoryObj = {
  name: 'Active',
  args: { pageNumber: '1', active: true, variant: 'no-arrows-first' },
};

export const WithHref: StoryObj = {
  name: 'With href',
  args: { pageNumber: '1', href: 'https://www.google.com' },
};

export const NoArrowsLast: StoryObj = {
  name: 'No arrows last',
  args: { pageNumber: '1', variant: 'no-arrows-last' },
};

export const NoArrowsOneItem: StoryObj = {
  name: 'No arrows one item',
  args: { pageNumber: '1', variant: 'no-arrows-one-item' },
};

export const HiddenFlyers: StoryObj = {
  name: 'Hide flyers',
  args: { pageNumber: '1', variant: 'no-arrows-first', hideFlyers: true },
};
