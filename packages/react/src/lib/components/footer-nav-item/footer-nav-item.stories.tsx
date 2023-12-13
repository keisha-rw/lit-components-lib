import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsFooterNavItem } from './footer-nav-item';
import { PdsLink } from '../link/link';
import { PdsList } from '../list/list';
import { PdsListItem } from '../list-item/list-item';

export default {
  title: 'Components/Footer/Footer nav/Footer nav item',
  component: PdsFooterNavItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the footer nav component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsFooterNavItem> = (args) => (
  <PdsFooterNavItem {...args} label="Our company">
    <PdsList>
      <PdsListItem>
        <PdsLink variant="default" href="#">
          About us
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink variant="default" href="#">
          Investor relations
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink variant="default" href="#">
          News room
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink variant="default" href="#">
          Sustainability
        </PdsLink>
      </PdsListItem>
      <PdsListItem>
        <PdsLink variant="default" href="#">
          Insights
        </PdsLink>
      </PdsListItem>
    </PdsList>
  </PdsFooterNavItem>
);

export const Default = Template.bind({});
Default.args = { variant: 'default' };
