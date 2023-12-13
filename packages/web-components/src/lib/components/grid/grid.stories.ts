import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './grid';
import '../grid-item/grid-item';
import '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title: 'Layout/Grid',
  component: 'pds-grid',
  tags: ['autodocs'],
  render: (args) =>
    html`<pds-grid
      variant="${args.variant || nothing}"
      break="${args.break || nothing}"
      ><pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item></pds-grid
    >`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const SideBySide: StoryObj = {
  name: 'Side by side',
  args: {
    variant: 'side-by-side',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const TwoUp: StoryObj = {
  name: '2up',
  args: {
    variant: '2up',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const ThreeUp: StoryObj = {
  name: '3up',
  args: {
    variant: '3up',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 5</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 6</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const ThreeUpBreakFaster: StoryObj = {
  name: '3up break faster',
  args: {
    variant: '3up',
    break: 'faster',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}" break="${args.break}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 5</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 6</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const ThreeUpBreakSlower: StoryObj = {
  name: '3up break slower',
  args: {
    variant: '3up',
    break: 'slower',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}" break="${args.break}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 5</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 6</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const OneToThreeUp: StoryObj = {
  name: '1-3up',
  args: {
    variant: '1-3up',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 5</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 6</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const OneToThreeUpBreakFaster: StoryObj = {
  name: '1-3up break faster',
  args: {
    variant: '1-3up',
    break: 'faster',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}" break="${args.break}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 5</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 6</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const OneToThreeUpBreakSlower: StoryObj = {
  name: '1-3up break slower',
  args: {
    variant: '1-3up',
    break: 'slower',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}" break="${args.break}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 5</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 6</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};

export const OneToTwoToFourUp: StoryObj = {
  name: '1-2-4up',
  args: {
    variant: '1-2-4up',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};
export const OneToTwoToFourUpBreakFaster: StoryObj = {
  name: '1-2-4up break faster',
  args: {
    variant: '1-2-4up',
    break: 'faster',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}" break="${args.break}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};
export const OneToTwoToFourUpBreakSlower: StoryObj = {
  name: '1-2-4up break slower',
  args: {
    variant: '1-2-4up',
    break: 'slower',
  },
  render: (args) =>
    html`<pds-grid variant="${args.variant}" break="${args.break}">
      <pds-grid-item>
        <placeholder-element>Item 1</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 2</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 3</placeholder-element>
      </pds-grid-item>
      <pds-grid-item>
        <placeholder-element>Item 4</placeholder-element>
      </pds-grid-item>
    </pds-grid>`,
};
