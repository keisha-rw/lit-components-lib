import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsPaginationItem } from './pagination-item';

export default {
  title: 'Components/Pagination/Pagination item',
  component: PdsPaginationItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the pagination component.',
      },
    },
    actions: {
      handles: ['pds-pagination-item-click'],
    },
  },
};

const Template: StoryFn<typeof PdsPaginationItem> = (args) => (
  <PdsPaginationItem onClick={action('pds-pagination-item-click')} {...args} />
);

export const Default = Template.bind({});
Default.args = { pageNumber: 1, variant: 'no-arrows-first' };

export const Active = Template.bind({});
Active.args = { pageNumber: 1, variant: 'no-arrows-first', active: true };

export const WithHref = Template.bind({});
WithHref.args = {
  pageNumber: 1,
  variant: 'no-arrows-first',
  href: 'https://www.google.com',
};
WithHref.storyName = 'With href';

export const NoArrowsLast = Template.bind({});
NoArrowsLast.args = {
  pageNumber: 1,
  variant: 'no-arrows-last',
};
NoArrowsLast.storyName = 'No arrows last';

export const NoArrowsOneItem = Template.bind({});
NoArrowsOneItem.args = {
  pageNumber: 1,
  variant: 'no-arrows-one-item',
};
NoArrowsOneItem.storyName = 'No arrows one item';

export const HiddenFlyers = Template.bind({});
HiddenFlyers.args = {
  pageNumber: 1,
  variant: 'no-arrows-first',
  hideFlyers: true,
};
HiddenFlyers.storyName = 'Hide flyers';
