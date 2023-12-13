import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsPrimaryNavigationUtilityMenu } from './primary-navigation-utility-menu';
import { PdsPrimaryNavigationUtilityMenuItem } from '../primary-navigation-utility-menu-item/primary-navigation-utility-menu-item';

export default {
  title: 'Components/Primary navigation/Primary navigation utility menu',
  component: PdsPrimaryNavigationUtilityMenu,
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

const Template: StoryFn<typeof PdsPrimaryNavigationUtilityMenu> = () => (
  <PdsPrimaryNavigationUtilityMenu slot="primary-navigation-utility-menu">
    <PdsPrimaryNavigationUtilityMenuItem
      href="#"
      onHandleClick={(e: any) =>
        action('pds-primary-navigation-utility-menu-item-click')(e.detail)
      }
    >
      Link
    </PdsPrimaryNavigationUtilityMenuItem>
  </PdsPrimaryNavigationUtilityMenu>
);
export const Default = Template.bind({});
Default.args = {};
