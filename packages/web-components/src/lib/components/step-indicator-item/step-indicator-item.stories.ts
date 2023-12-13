import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './step-indicator-item';

export default {
  title: 'Components/Step indicator/Step indicator item',
  component: 'pds-step-indicator-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the step indicator component.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // The elements are within a ol when within the step-indicator component
            //
            // @link https://dequeuniversity.com/rules/axe/4.7/aria-required-parent?application=axeAPI
            id: 'aria-required-parent',
            enabled: false,
          },
          {
            // Color contrast is sufficient for the incomplete checks, but axe doesn't like them.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  render: (args) => {
    return html` <pds-step-indicator-item status=${args.status}>
      <span>Step item</span>
    </pds-step-indicator-item>`;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const CurrentNotInteractive: StoryObj = {
  name: 'Current, not interactive',
  args: { status: 'current' },
};

export const CurrentInteractive: StoryObj = {
  name: 'Current, interactive',
  args: {
    status: 'current',
    href: '#',
    active: true,
  },
  render: (args) => {
    return html` <pds-step-indicator-item
      status=${args.status}
      active=${args.status}
      href=${args.href}
      interactive
    >
      <span>Step item</span>
    </pds-step-indicator-item>`;
  },
  parameters: {
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
};

export const CompletedNotInteractive: StoryObj = {
  name: 'Completed, not interactive',
  args: { status: 'completed' },
};

export const CompletedInteractive: StoryObj = {
  name: 'Completed, interactive',
  args: {
    status: 'completed',
    href: '#',
  },
  render: (args) => {
    return html` <pds-step-indicator-item
      status=${args.status}
      href=${args.href}
      interactive
    >
      <span>Step item</span>
    </pds-step-indicator-item>`;
  },
  parameters: {
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
};

export const IncompleteNotInteractive: StoryObj = {
  name: 'Incomplete, not interactive',
  args: { status: 'incomplete' },
};

export const IncompleteInteractive: StoryObj = {
  name: 'Incomplete, interactive',
  args: {
    status: 'incomplete',
    href: '#',
  },
  render: (args) => {
    return html` <pds-step-indicator-item
      status=${args.status}
      href=${args.href}
      interactive
    >
      <span>Step item</span>
    </pds-step-indicator-item>`;
  },
  parameters: {
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
};
