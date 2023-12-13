import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsPrimaryNavigationUtilityMenuItem } from './primary-navigation-utility-menu-item';

export default {
  title:
    'Components/Primary navigation/Primary navigation utility menu/Primary navigation utility menu item',
  component: PdsPrimaryNavigationUtilityMenuItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the primary-navigation-utility-menu component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsPrimaryNavigationUtilityMenuItem> = () => (
  <PdsPrimaryNavigationUtilityMenuItem
    href="#"
    onHandleClick={(e: any) =>
      action('pds-primary-navigation-utility-menu-item-click')(e.detail)
    }
  >
    Link
  </PdsPrimaryNavigationUtilityMenuItem>
);
export const Default = Template.bind({});
Default.args = {};
