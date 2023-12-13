import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './primary-navigation-dropdown-link';

const meta: Meta = {
  title:
    'Components/Primary navigation/Primary navigation main menu/Primary navigation main menu item/Primary navigation dropdown link',
  component: 'pds-primary-navigation-dropdown-link',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: ['pds-primary-navigation-dropdown-link-click'],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the primary navigation component. It should always be used within a primary-navigation-main-menu-item element.',
      },
    },
  },
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  render: () =>
    html`<pds-primary-navigation-dropdown-link href="#"
      >This is a link</pds-primary-navigation-dropdown-link
    >`,
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
    viewport: {
      defaultViewport: 'iphonex',
    },
    a11y: {
      config: {
        rules: [
          {
            // Color contrast is sufficient for the inverted links.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  render: () =>
    html`<pds-primary-navigation-dropdown-link href="#" variant="inverted"
      >This is a link</pds-primary-navigation-dropdown-link
    >`,
};
