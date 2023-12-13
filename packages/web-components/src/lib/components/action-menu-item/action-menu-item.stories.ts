import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './action-menu-item';

export default {
  title: 'Components/Action menu/Action menu item',
  component: 'pds-action-menu-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: ['pds-action-menu-item-click'],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the Action Menu component.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // The elements are within a ul when within the action-menu component
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/listitem
            id: 'listitem',
            enabled: false,
          },
        ],
      },
    },
  },
  render: (args) => {
    return html`<pds-action-menu-item ariaLabel="${args.ariaLabel}"
      >Action 1</pds-action-menu-item
    >`;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const ItemButton: StoryObj = {
  name: 'Button',
  args: { ariaLabel: 'Action 1' },
};

export const ItemLink: StoryObj = {
  name: 'Link',
  args: {
    ariaLabel: 'Action 1',
    linkHref: 'https://www.google.com',
    target: '_blank',
  },
  render: (args) => {
    return html`<pds-action-menu-item
      ariaLabel="${args.ariaLabel}"
      linkHref="${args.linkHref}"
      target="${args.target}"
      >Action 4</pds-action-menu-item
    >`;
  },
};
