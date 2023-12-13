import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsLogoutPage } from './logout-page';

export default {
  title: 'Components/Logout page',
  component: PdsLogoutPage,
  parameters: {
    actions: {
      handles: [],
    },
  },
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsLogoutPage> = (args) => (
  <PdsLogoutPage {...args} />
);

export const Default = Template.bind({});

export const DefaultSpanish = Template.bind({});
DefaultSpanish.parameters = {
  lang: 'es',
};

export const ExpiredSpanish = Template.bind({});
ExpiredSpanish.args = { variant: 'expired' };
ExpiredSpanish.parameters = {
  lang: 'es',
};

export const Expired = Template.bind({});
Expired.args = { variant: 'expired' };
