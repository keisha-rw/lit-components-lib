import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsActionMenuItem } from './action-menu-item';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default {
  title: 'Components/Action menu/Action menu item',
  component: PdsActionMenuItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the action menu component. It should always be used within a action-menu element.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsActionMenuItem> = (args) => (
  <PdsActionMenuItem
    {...args}
    onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
  >
    Action menu item
  </PdsActionMenuItem>
);

export const Button = Template.bind({});
Button.args = {
  ariaLabel: 'Action menu item',
};

export const Link = Template.bind({});
Link.args = {
  ariaLabel: 'Action menu item',
  target: '_blank',
  linkHref: 'https://www.google.com',
};
