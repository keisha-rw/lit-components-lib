import { html } from 'lit';
import './primary-navigation-main-menu-item';
import { Meta, StoryObj } from '@storybook/web-components';
import '../list/list';
import '../list-item/list-item';
import '../grid/grid';
import '../grid-item/grid-item';
import '../primary-navigation-dropdown-link/primary-navigation-dropdown-link';
import '../../../../.storybook/components/placeholder-element/placeholder-element';

const meta: Meta = {
  title:
    'Components/Primary navigation/Primary navigation main menu/Primary navigation main menu item',
  component: 'pds-primary-navigation-main-menu-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: [
        'pds-primary-navigation-main-menu-dropdown-close',
        'pds-primary-navigation-main-menu-dropdown-open',
        'pds-primary-navigation-main-menu-link-click',
      ],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the primary navigation component. It should always be used within a primary-navigation-main-menu element.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // This is not an issue when it's contained properly within primary-navigation-main-menu
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
        ],
      },
    },
  },
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Dropdown: StoryObj = {
  name: 'Dropdown',
  args: {
    text: 'Dropdown',
  },
  render: (args) =>
    html`<pds-primary-navigation-main-menu-item dropdown text="${args.text}">
      <pds-list size="sm" spacing="sm">
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-primary-navigation-dropdown-link href="#"
            >This is a link</pds-primary-navigation-dropdown-link
          ></pds-list-item
        >
      </pds-list>
    </pds-primary-navigation-main-menu-item> `,
};

export const Megamenu: StoryObj = {
  name: 'Mega menu',
  args: {
    text: 'Mega menu',
  },
  render: (args) =>
    html`<pds-primary-navigation-main-menu-item megamenu text="${args.text}">
      <pds-grid variant="1-3up" break="slower">
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
      </pds-grid>
    </pds-primary-navigation-main-menu-item>`,
};

export const Link: StoryObj = {
  name: 'Link',
  args: {
    text: 'Link',
  },
  render: (args) =>
    html`<pds-primary-navigation-main-menu-item
      href="#"
      text="${args.text}"
    ></pds-primary-navigation-main-menu-item>`,
};

export const LinkWithIcon: StoryObj = {
  name: 'Link with icon',
  args: {
    text: 'Link',
  },
  render: (args) =>
    html`<pds-primary-navigation-main-menu-item
      arrow
      href="#"
      text="${args.text}"
    ></pds-primary-navigation-main-menu-item>`,
};
