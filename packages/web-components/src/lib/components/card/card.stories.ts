import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './card';
import '../../../../.storybook/components/placeholder-element/placeholder-element';
import '../link/link';

export default {
  title: 'Components/Card',
  component: 'pds-card',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bare'],
    },
    borderRadiusSize: {
      control: 'select',
      options: ['default', 'sm'],
    },
    direction: {
      control: 'select',
      options: ['default', 'horizontal'],
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
  },
  render: (args) =>
    html`<pds-card
      variant="${args.variant || nothing}"
      href="${args.href || nothing}"
      centerContentVertically="${args.centerContentVertically || nothing}"
      target="${args.target || nothing}"
      removePadding="${args.removePadding || nothing}"
      ariaLabel="${args.ariaLabel || nothing}"
      direction="${args.direction || nothing}"
      borderRadiusSize="${args.borderRadiusSize || nothing}"
    >
      <div slot="header">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card header slot</placeholder-element
        >
      </div>
      <placeholder-element style="--placeholder-element-margin-bottom: 0;"
        >Card body slot</placeholder-element
      >
      <div slot="footer">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card footer slot</placeholder-element
        >
      </div>
    </pds-card>`,
  parameters: {
    actions: {
      handles: ['pds-card-click', 'pds-link-click'],
    },
  },
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Bare: StoryObj = {
  name: 'Bare',
  args: {
    variant: 'bare',
  },
};

export const Clickable: StoryObj = {
  name: 'Clickable',
  args: {
    href: 'https://www.google.com',
    target: '_blank',
    ariaLabel: 'This is an aria label',
  },
  render: (args) =>
    html`<pds-card
      href="${args.href}"
      target="${args.target || nothing}"
      ariaLabel="${args.ariaLabel || nothing}"
      centerContentVertically="${args.centerContentVertically || nothing}"
    >
      <div slot="header">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card header slot</placeholder-element
        >
      </div>
      <div>
        <pds-link href="https://www.google.com" target="_blank"
          >Example link</pds-link
        >
      </div>
      <div slot="footer">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card footer slot</placeholder-element
        >
      </div>
    </pds-card>`,
};

export const ClickableNoInternalLink: StoryObj = {
  name: 'Clickable no internal link',
  args: {
    target: '_blank',
    href: `https://www.google.com/individuals/invest-retire/individual-retirement-account?alert('xss')`,
    ariaLabel: 'This is an aria label',
  },
};

export const Horizontal: StoryObj = {
  name: 'Horizontal',
  args: { direction: 'horizontal' },
};

export const SmallBorderRadius: StoryObj = {
  name: 'Small border radius',
  args: { borderRadiusSize: 'sm' },
};

export const RemovePadding: StoryObj = {
  name: 'Remove default padding',
  args: { removePadding: true },
};

export const HorizontalWithoutPadding: StoryObj = {
  name: 'Horizontal without padding',
  args: { removePadding: true, direction: 'horizontal' },
  render: (args) =>
    html`<pds-card
      variant="${args.variant || nothing}"
      href="${args.href || nothing}"
      centerContentVertically="${args.centerContentVertically || nothing}"
      target="${args.target || nothing}"
      removePadding="${args.removePadding || nothing}"
      ariaLabel="${args.ariaLabel || nothing}"
      direction="${args.direction || nothing}"
      borderRadiusSize="${args.borderRadiusSize || nothing}"
    >
      <div slot="header">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card header slot</placeholder-element
        >
      </div>
      <placeholder-element
        inlineStyle="height: 118px; display: flex; align-items: center; justify-content: center;"
        ><p>Card body slot</p></placeholder-element
      >
      <div slot="footer">
        <placeholder-element
          inlineStyle="height: 118px; display: flex; align-items: center; justify-content: center;"
          >Card footer slot</placeholder-element
        >
      </div>
    </pds-card>`,
};

export const HorizontalWithUtilClasses: StoryObj = {
  name: 'Horizontal with util class',
  render: () =>
    html`<pds-card direction="horizontal" class="pds-u-background-subtle">
      <div slot="header">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card header slot</placeholder-element
        >
      </div>
      <placeholder-element
        inlineStyle="height: 118px; display: flex; align-items: center; justify-content: center;"
        ><p>Card body slot</p></placeholder-element
      >
      <div slot="footer">
        <placeholder-element
          inlineStyle="height: 118px; display: flex; align-items: center; justify-content: center;"
          >Card footer slot</placeholder-element
        >
      </div>
    </pds-card>`,
};
