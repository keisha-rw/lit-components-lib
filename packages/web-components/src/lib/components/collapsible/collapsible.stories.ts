import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './collapsible';

export default {
  title: 'Components/Collapsible',
  component: 'pds-collapsible',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'default',
      description: 'The style variant for the collapsible',
      table: {
        type: { summary: '"" | default | inverted | strong' },
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['default', 'inverted', 'strong'],
    },
  },
  render: (args) =>
    html`<pds-collapsible
      variant="${args.variant || nothing}"
      ?open="${args.open}"
      ><span slot="summary-title">What is a 1099 tax form?</span><span slot="collapsible-content">Form 1099 is a
      series of forms described by the Internal Revenue Service (IRS) as
      “information returns”, used to report income other than a regular salary.</slot>
    </pds-collapsible>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
  parameters: {
    actions: {
      handles: ['pds-collapsible-open', 'pds-collapsible-close'],
    },
  },
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  args: { variant: 'inverted' },
  parameters: {
    actions: {
      handles: ['pds-collapsible-open', 'pds-collapsible-close'],
    },
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const Strong: StoryObj = {
  name: 'Strong',
  args: { variant: 'strong' },
  parameters: {
    actions: {
      handles: ['pds-collapsible-open', 'pds-collapsible-close'],
    },
  },
};

export const MultipleItems: StoryObj = {
  name: 'Multiple items',
  args: { variant: 'default' },
  parameters: {
    actions: {
      handles: ['pds-collapsible-open', 'pds-collapsible-close'],
    },
  },
  render: (args) =>
    html`<pds-collapsible variant="${args.variant}" ?open="${args.open}"
        ><span slot="summary-title">What is a 1099 tax form?</span
        ><span slot="collapsible-content"
          >Form 1099 is a series of forms described by the Internal Revenue
          Service (IRS) as “information returns”, used to report income other
          than a regular salary.</span
        >
      </pds-collapsible>
      <pds-collapsible variant="${args.variant}" ?open="${args.open}"
        ><span slot="summary-title">What is a 1098 tax form?</span
        ><span slot="collapsible-content"
          >Form 1098 is a series of forms described by the Internal Revenue
          Service (IRS) as “information returns”, used to report income other
          than a regular salary.</span
        >
      </pds-collapsible>`,
};

export const Description: StoryObj = {
  name: 'Description',
  args: {},
  parameters: {
    actions: {
      handles: ['pds-collapsible-open', 'pds-collapsible-close'],
    },
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        const component = document.querySelector('pds-collapsible');

        component?.shadowRoot
          ?.querySelector('.pds-c-collapsible__summary')
          ?.dispatchEvent(clickEvent);
      },
      delay: 1000,
    },
  },
  render: () =>
    html`<pds-collapsible
      ><span slot="summary-title">What is a 1099 tax form?</span>
      <span slot="summary-description">This is an optional description</span
      ><span slot="collapsible-content"
        >Form 1099 is a series of forms described by the Internal Revenue
        Service (IRS) as “information returns”, used to report income other than
        a regular salary.</span
      >
    </pds-collapsible>`,
};
