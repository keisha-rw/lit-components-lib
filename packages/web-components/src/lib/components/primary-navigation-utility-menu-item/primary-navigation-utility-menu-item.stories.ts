import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './primary-navigation-utility-menu-item';

const meta: Meta = {
  title:
    'Components/Primary navigation/Primary navigation utility menu/Primary navigation utility menu item',
  component: 'pds-primary-navigation-utility-menu-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: ['pds-primary-navigation-utility-menu-item-click'],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the primary navigation component.  It should only be used within a pds-primary-navigation-utility-menu element.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // This is not an issue when it's contained properly within primary-navigation-utility-menu
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
          {
            // The styles from this element are pretty awful when not in a primary-navigation-utility-menu
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
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    text: 'Default',
  },
  render: () =>
    html`<pds-primary-navigation-utility-menu-item href="#"
      >Link</pds-primary-navigation-utility-menu-item
    >`,
};
