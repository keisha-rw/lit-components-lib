import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './page-navigation';
import '../../../src/lib/components/primary-navigation/primary-navigation';
import '../../../src/lib/components/secondary-navigation/secondary-navigation';
import '../../../src/lib/components/list/list';
import '../../../src/lib/components/link/link';
import '../../../src/lib/components/grid/grid';

export default {
  title: 'Recipes/Page navigation',
  component: 'page-navigation',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
    description: {
      table: { disable: true },
    },
  },
  parameters: {
    actions: {
      handles: [
        'pds-primary-navigation-item-click',
        'pds-primary-navigation-notification-link-click',
        'pds-primary-navigation-panel-toggle',
        'pds-primary-navigation-menu-button-toggle',
        'pds-primary-navigation-main-menu-dropdown-close',
        'pds-primary-navigation-main-menu-dropdown-open',
        'pds-primary-navigation-main-menu-link-click',
        'pds-primary-navigation-utility-menu-item-click',
      ],
    },
    a11y: {
      config: {
        rules: [
          {
            // None of the nested elements are interactive - this is a false positive.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/nested-interactive
            id: 'nested-interactive',
            enabled: false,
          },
          {
            // The skip link target will exist on real apps, but we don't have it in Storybook.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/skip-link
            id: 'skip-link',
            enabled: false,
          },
          {
            // The primary navigation main menu children are correct; the shadow root confuses AXE.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/aria-required-children
            id: 'aria-required-children',
            enabled: false,
          },
          {
            // The primary navigation main menu aria parents are correct; the shadow root confuses AXE.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
          {
            // Color contrast is sufficient - this is a false positive.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
        variant="${args.variant}"
        includeAction="notification"
        messagescount="5"
        otheralertscount="33"
        loginlink="logout"
        loginlinkvariant="primary-inverted"
        layoutContainerVariant="default"
        layoutContainerRemovePadding="md"
      >
        <pds-primary-navigation-main-menu
          slot="primary-navigation-main-menu"
          arialabel="Main navigation area"
        >
          <pds-primary-navigation-main-menu-item dropdown="" text="Dropdown">
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
          </pds-primary-navigation-main-menu-item>
          <pds-primary-navigation-main-menu-item megamenu="" text="Megamenu">
            <pds-grid variant="1-3up" break="slower">
              <pds-grid-item>
                <pds-primary-navigation-dropdown-link href="#"
                  >Item 1</pds-primary-navigation-dropdown-link
                >
              </pds-grid-item>
              <pds-grid-item>
                <pds-primary-navigation-dropdown-link href="#"
                  >Item 2</pds-primary-navigation-dropdown-link
                >
              </pds-grid-item>
              <pds-grid-item>
                <pds-primary-navigation-dropdown-link href="#"
                  >Item 3</pds-primary-navigation-dropdown-link
                >
              </pds-grid-item>
              <pds-grid-item>
                <pds-primary-navigation-dropdown-link href="#"
                  >Item 4</pds-primary-navigation-dropdown-link
                >
              </pds-grid-item>
              <pds-grid-item>
                <pds-primary-navigation-dropdown-link href="#"
                  >Item 5</pds-primary-navigation-dropdown-link
                >
              </pds-grid-item>
              <pds-grid-item>
                <pds-primary-navigation-dropdown-link href="#"
                  >Item 6</pds-primary-navigation-dropdown-link
                >
              </pds-grid-item>
            </pds-grid>
          </pds-primary-navigation-main-menu-item>
          <pds-primary-navigation-main-menu-item
            href="#"
            text="Link"
          ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
        ><pds-primary-navigation-utility-menu
          slot="primary-navigation-utility-menu"
          ><pds-primary-navigation-utility-menu-item href="#"
            >Link</pds-primary-navigation-utility-menu-item
          ></pds-primary-navigation-utility-menu
        ></pds-primary-navigation
      ><pds-secondary-navigation
        title="${args.title || nothing}"
        description="${args.description || nothing}"
      >
        <pds-secondary-navigation-level-one
          title="Menu item one"
          columns="2col"
        >
          <pds-secondary-navigation-level-two title="Category one">
            <pds-list spacing="sm">
              <pds-list-item
                ><pds-secondary-navigation-link href="#"
                  >Link one</pds-secondary-navigation-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-secondary-navigation-link href="#"
                  >Link two</pds-secondary-navigation-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-secondary-navigation-link href="#"
                  >Link three</pds-secondary-navigation-link
                ></pds-list-item
              >
            </pds-list>
          </pds-secondary-navigation-level-two>
          <pds-secondary-navigation-level-two title="Category two">
            <pds-list spacing="sm">
              <pds-list-item
                ><pds-secondary-navigation-link href="#"
                  >Link one</pds-secondary-navigation-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-secondary-navigation-link href="#"
                  >Link two</pds-secondary-navigation-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-secondary-navigation-link href="#"
                  >Link three</pds-secondary-navigation-link
                ></pds-list-item
              >
              <pds-list-item
                ><pds-secondary-navigation-link href="#"
                  >Link four</pds-secondary-navigation-link
                ></pds-list-item
              >
            </pds-list>
          </pds-secondary-navigation-level-two></pds-secondary-navigation-level-one
        >
        <pds-secondary-navigation-level-one title="Menu item two">
          <pds-secondary-navigation-level-two
            title="Link one"
            href="#"
          ></pds-secondary-navigation-level-two>
          <pds-secondary-navigation-level-two
            title="Link two"
            href="https://google.com"
          ></pds-secondary-navigation-level-two>
          <pds-secondary-navigation-level-two
            title="Link three"
            href="#"
          ></pds-secondary-navigation-level-two>
          <pds-secondary-navigation-level-two
            title="Link four"
            href="#"
          ></pds-secondary-navigation-level-two>
        </pds-secondary-navigation-level-one>
        <pds-secondary-navigation-level-one
          title="Menu item three"
          href="#"
        ></pds-secondary-navigation-level-one>
        <span slot="logo">
          <svg width="160" height="104">
            <rect
              width="160"
              height="104"
              style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
            />
          </svg>
        </span>
      </pds-secondary-navigation>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'inverted',
    title: 'Account/Product Name',
    description: 'Optional description placeholder',
  },
};
