import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './action-menu';
import '../action-menu-item/action-menu-item';

export default {
  title: 'Components/Action menu',
  component: 'pds-action-menu',
  tags: ['autodocs'],
  parameters: {
    happo: {
      waitFor: document
        .querySelector('pds-action-menu')
        ?.shadowRoot?.querySelector('.pds-c-action-menu'),
      beforeScreenshot: () => {
        (
          document
            .querySelector('pds-action-menu')
            ?.shadowRoot?.querySelector(
              '.pds-c-action-menu__button',
            ) as HTMLElement
        ).click();
      },
      delay: 500,
    },
    actions: {
      handles: ['pds-action-menu-item-click', 'mouseup'],
    },
    a11y: {
      config: {
        rules: [
          {
            // Action menu items are li elements, so this check is invalid.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/list
            id: 'list',
            enabled: false,
          },
          {
            // The shadow dom makes this check difficult, list item elements are in a ul.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/listitem
            id: 'listitem',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: [
        'default',
        'default-inverted',
        'primary',
        'primary-inverted',
        'icon',
        'icon-inverted',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
    buttonLabel: {
      control: 'text',
    },
    hideSeperator: {
      control: 'boolean',
    },
  },
  render: (args) =>
    html`<pds-action-menu
      buttonVariant="${args.buttonVariant || nothing}"
      size="${args.size || nothing}"
      ?hideSeparator=${args.hideSeparator}
      label="I want to..."
      buttonLabel=${args.buttonLabel || nothing}
    >
      <pds-action-menu-item ariaLabel="Action 1">Action 1</pds-action-menu-item>
      <pds-action-menu-item ariaLabel="Action 2">Action 2</pds-action-menu-item>
      <pds-action-menu-item ariaLabel="Action 3">Action 3</pds-action-menu-item>
      <pds-action-menu-item
        ariaLabel="Action 4"
        linkHref="https://www.google.com"
        target="_blank"
        slot="footer"
        >Action 4</pds-action-menu-item
      >
      <pds-action-menu-item
        ariaLabel="Action 4"
        linkHref="https://www.google.com"
        target="_blank"
        slot="footer"
        >Action 5</pds-action-menu-item
      >
    </pds-action-menu>`,
  decorators: [(story) => html`<div style="height: 300px">${story()}</div>`],
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  args: {
    buttonVariant: 'icon-inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const TextButtonDefault: StoryObj = {
  name: 'Text button default',
  args: {
    buttonVariant: 'default',
  },
};

export const TextButtonInverted: StoryObj = {
  name: 'Text button inverted',
  args: {
    buttonVariant: 'default-inverted',
    buttonLabel: 'I want to...',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const HideSeperator: StoryObj = {
  name: 'Hide Seperator',
  args: {
    hideSeparator: true,
  },
};
