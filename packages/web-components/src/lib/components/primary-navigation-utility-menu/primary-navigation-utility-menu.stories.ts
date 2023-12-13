import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './primary-navigation-utility-menu';
import '../primary-navigation-utility-menu-item/primary-navigation-utility-menu-item';

const meta: Meta = {
  title: 'Components/Primary navigation/Primary navigation utility menu',
  component: 'pds-primary-navigation-utility-menu',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the primary navigation component.',
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
    html`<pds-primary-navigation-utility-menu
      ><pds-primary-navigation-utility-menu-item href="#"
        >Link</pds-primary-navigation-utility-menu-item
      ></pds-primary-navigation-utility-menu
    >`,
};
