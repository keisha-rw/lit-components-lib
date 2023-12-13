import { html } from 'lit';
import './primary-navigation-main-menu';
import { Meta, StoryObj } from '@storybook/web-components';
import '../primary-navigation-main-menu-item/primary-navigation-main-menu-item';
import '../list/list';
import '../list-item/list-item';
import '../grid/grid';
import '../grid-item/grid-item';
import '../primary-navigation-dropdown-link/primary-navigation-dropdown-link';
import '../../../../.storybook/components/placeholder-element/placeholder-element';

const meta: Meta = {
  title: 'Components/Primary navigation/Primary navigation main menu',
  component: 'pds-primary-navigation-main-menu',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: [
        'pds-primary-navigation-item-click',
        'pds-primary-navigation-main-menu-dropdown-close',
        'pds-primary-navigation-main-menu-dropdown-open',
        'pds-primary-navigation-main-menu-link-click',
      ],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the primary navigation component.',
      },
    },
  },
  render: (args) =>
    html` <pds-primary-navigation-main-menu
      variant="${args.variant}"
      ariaLabel=${args.ariaLabel}
    >
      <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
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
      <pds-primary-navigation-main-menu-item megamenu text="Megamenu">
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
      </pds-primary-navigation-main-menu-item>
      <pds-primary-navigation-main-menu-item
        href="#"
        text="Link"
      ></pds-primary-navigation-main-menu-item>
    </pds-primary-navigation-main-menu>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
    ariaLabel: 'main menu',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
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
};

export const LinkWithIcon: StoryObj = {
  name: 'Link with icon',
  args: {
    variant: 'default',
    ariaLabel: 'main menu',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
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
    html`<pds-primary-navigation-main-menu
      variant="${args.variant}"
      ariaLabel=${args.ariaLabel}
    >
      <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
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
      <pds-primary-navigation-main-menu-item megamenu text="Megamenu">
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
      </pds-primary-navigation-main-menu-item>
      <pds-primary-navigation-main-menu-item
        arrow
        href="#"
        text="Link"
      ></pds-primary-navigation-main-menu-item>
    </pds-primary-navigation-main-menu>`,
};
