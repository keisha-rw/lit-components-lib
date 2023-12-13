/* eslint-disable import/extensions */
import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './pagination';
import '../pagination-item/pagination-item';

export default {
  title: 'Components/Pagination',
  component: 'pds-pagination',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-pagination-click', 'pds-pagination-item-click'],
    },
  },
  argTypes: {
    variant: {
      control: 'text',
    },
  },
  render: (args) => {
    return html`<pds-pagination
      variant=${args.variant || nothing}
      lang=${args.lang || nothing}
      backwardDisabled=${args.backwardDisabled || nothing}
    >
      <pds-pagination-item pageNumber="1"></pds-pagination-item>
      <pds-pagination-item pageNumber="2" active></pds-pagination-item>
      <pds-pagination-item pageNumber="3"></pds-pagination-item>
    </pds-pagination>`;
  },
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Arrows: StoryObj = {
  name: 'Arrows only',
  args: {
    variant: 'arrows',
  },
  render: (args) => {
    return html`<pds-pagination variant=${args.variant}></pds-pagination>`;
  },
};

export const NoArrows: StoryObj = {
  name: 'No arrows',
  args: {
    variant: 'no-arrows',
  },
};

export const NoArrowsOneItem: StoryObj = {
  name: 'No arrows one item',
  args: {
    variant: 'no-arrows',
  },
  render: (args) => {
    return html`<pds-pagination variant=${args.variant}>
      <pds-pagination-item pageNumber="1" active></pds-pagination-item>
    </pds-pagination>`;
  },
};

export const Anchors: StoryObj = {
  name: 'Anchors',
  args: {
    ariaLabel: 'Pagination built with anchors',
    backwardDisabled: 'true',
    stepForwardHref: 'http://www.google.com/forward',
    flyLastHref: 'http://www.google.com/last',
  },
  render: (args) => {
    return html`<pds-pagination
      ariaLabel=${args.ariaLabel}
      stepForwardHref=${args.stepForwardHref}
      backwardDisabled=${args.backwardDisabled}
      flyLastHref=${args.flyLastHref}
    >
      <pds-pagination-item
        href="http://www.google.com"
        pageNumber="1"
        active
      ></pds-pagination-item>
      <pds-pagination-item
        href="http://www.google.com"
        pageNumber="2"
      ></pds-pagination-item>
      <pds-pagination-item
        href="http://www.google.com"
        pageNumber="3"
      ></pds-pagination-item>
    </pds-pagination>`;
  },
};

export const HideFlyers: StoryObj = {
  name: 'Hide flyers',
  args: {
    backwardDisabled: true,
    hideFlyers: true,
    stepBackwardHref: 'http://www.google.com/backward',
    stepForwardHref: 'http://www.google.com/forward',
  },
  render: (args) => {
    return html`<pds-pagination
      stepForwardHref=${args.stepForwardHref}
      backwardDisabled=${args.backwardDisabled}
      hideFlyers=${args.hideFlyers}
    >
      <pds-pagination-item
        href="http://www.google.com"
        pageNumber="1"
        active
      ></pds-pagination-item>
      <pds-pagination-item
        href="http://www.google.com"
        pageNumber="2"
      ></pds-pagination-item>
      <pds-pagination-item
        href="http://www.google.com"
        pageNumber="3"
      ></pds-pagination-item>
    </pds-pagination>`;
  },
};
