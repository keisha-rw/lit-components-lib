import * as React from 'react';
import { action } from '@storybook/addon-actions';
import type { StoryFn } from '@storybook/react';
import { PdsPrimaryNavigationDropdownLink } from './primary-navigation-dropdown-link';

export default {
  title:
    'Components/Primary navigation/Primary navigation main menu/Primary navigation main menu item/Primary navigation dropdown link',
  component: PdsPrimaryNavigationDropdownLink,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the primary navigation component. It should always be used within a primary-navigation-main-menu-item element.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsPrimaryNavigationDropdownLink> = (args) => (
  <PdsPrimaryNavigationDropdownLink
    {...args}
    onClick={(e: any) =>
      action('pds-primary-navigation-dropdown-link-click')(e.detail)
    }
    href="#"
  >
    This is a link
  </PdsPrimaryNavigationDropdownLink>
);

export const Default = Template.bind({});
Default.args = { variant: 'default' };

export const Inverted = Template.bind({});
Inverted.args = { variant: 'inverted' };
Inverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
  viewport: {
    defaultViewport: 'iphonex',
  },
};
