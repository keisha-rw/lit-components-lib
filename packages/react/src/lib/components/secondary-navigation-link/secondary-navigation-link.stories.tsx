import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsSecondaryNavigationLink } from './secondary-navigation-link';

export default {
  title: 'Components/Secondary navigation/Secondary navigation link',
  component: PdsSecondaryNavigationLink,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    actions: {
      handles: ['pds-secondary-navigation-link-click'],
    },
  },
};

const Template: StoryFn<typeof PdsSecondaryNavigationLink> = (args) => (
  <PdsSecondaryNavigationLink
    onClick={action('pds-secondary-navigation-link-click')}
    {...args}
  >
    Link text
  </PdsSecondaryNavigationLink>
);

export const Default = Template.bind({});
Default.args = {
  href: 'https://www.google.com',
};

export const Active = Template.bind({});
Active.args = {
  href: 'https://www.google.com',
  activePage: true,
};
