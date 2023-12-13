import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './tooltip';
import '@keisha/design-system-icons-web/help-circle';
import '../button/button';
import '../text-passage/text-passage';

export default {
  title: 'Components/Tooltip',
  component: 'pds-tooltip',
  tags: ['autodocs'],
  parameters: {
    happo: {
      beforeScreenshot: () => {
        const focusEvent = new FocusEvent('focus', {
          view: window,
          bubbles: true,
          cancelable: false,
        });

        const buttonEl = document
          ?.querySelector('pds-tooltip')
          ?.querySelector('pds-button[slot="trigger"]');

        buttonEl?.dispatchEvent(focusEvent);
      },
      delay: 200,
    },
  },
  render: (args: any) =>
    html`<pds-tooltip
      variant="${args.variant || nothing}"
      placement="${args.placement || nothing}"
    >
      <pds-button
        slot="trigger"
        variant="icon"
        size="sm"
        ariaLabel="This button triggers a tooltip"
      >
        <pds-icon-help-circle></pds-icon-help-circle
      ></pds-button>
      Tooltip content</pds-tooltip
    >`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
  },
  render: (args: any) =>
    html`<br /><br /><br /><pds-tooltip
        variant="${args.variant || nothing}"
        placement="${args.placement || nothing}"
      >
        <pds-button
          slot="trigger"
          variant="icon"
          size="sm"
          ariaLabel="This button triggers a tooltip"
        >
          <pds-icon-help-circle></pds-icon-help-circle
        ></pds-button>
        Tooltip content</pds-tooltip
      >`,
};

export const SubtleTop: StoryObj = {
  name: 'Subtle top',
  args: {
    variant: 'subtle',
    placement: 'top',
  },
  render: (args: any) =>
    html`<br /><br /><br /><pds-tooltip
        variant="${args.variant || nothing}"
        placement="${args.placement || nothing}"
      >
        <pds-button
          slot="trigger"
          variant="icon"
          size="sm"
          ariaLabel="This button triggers a tooltip"
        >
          <pds-icon-help-circle></pds-icon-help-circle
        ></pds-button>
        Tooltip content</pds-tooltip
      >`,
};

export const SubtleLeft: StoryObj = {
  name: 'Subtle left',
  args: {
    variant: 'subtle',
    placement: 'left',
  },
  render: (args: any) =>
    html`<span style="margin-right: 100px;"></span>
      <pds-tooltip
        variant="${args.variant || nothing}"
        placement="${args.placement || nothing}"
      >
        <pds-button
          slot="trigger"
          variant="icon"
          size="sm"
          ariaLabel="This button triggers a tooltip"
        >
          <pds-icon-help-circle></pds-icon-help-circle
        ></pds-button>
        Tooltip</pds-tooltip
      >`,
};

export const SubtleRight: StoryObj = {
  name: 'Subtle right',
  args: {
    variant: 'subtle',
    placement: 'right',
  },
};

export const SubtleBottom: StoryObj = {
  name: 'Subtle bottom',
  args: {
    variant: 'subtle',
    placement: 'bottom',
  },
};

export const Link: StoryObj = {
  name: 'Link',
  args: {
    variant: 'default',
    placement: 'bottom',
  },
  render: (args: any) =>
    html`<pds-tooltip
      variant="${args.variant || nothing}"
      placement="${args.placement || nothing}"
      ><pds-button
        slot="trigger"
        link="default"
        ariaLabel="This button triggers a tooltip"
        >This is a button that looks like a link</pds-button
      >Tooltip content</pds-tooltip
    >`,
};
