import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsPagination } from './pagination';
import { PdsPaginationItem } from '../pagination-item/pagination-item';

export default {
  title: 'Components/Pagination',
  component: PdsPagination,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-pagination-click'],
    },
  },
};

const Template: StoryFn<typeof PdsPagination> = (args) => (
  <PdsPagination onHandleClick={action('pds-pagination-click')} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Sample paginator',
  backwardDisabled: true,
  children: (
    <>
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        pageNumber={1}
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        pageNumber={2}
        active
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        pageNumber={3}
      />
    </>
  ),
};

export const ArrowsOnly = Template.bind({});
ArrowsOnly.storyName = 'Arrows only';
ArrowsOnly.args = {
  ariaLabel: 'Sample arrow paginator',
  backwardDisabled: true,
  variant: 'arrows',
};

export const NoArrows = Template.bind({});
NoArrows.storyName = 'No arrows';
NoArrows.args = {
  ariaLabel: 'No arrows paginator',
  variant: 'no-arrows',
  children: (
    <>
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        pageNumber={1}
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        pageNumber={2}
        active
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        pageNumber={3}
      />
    </>
  ),
};

export const NoArrowsOneItem = Template.bind({});
NoArrowsOneItem.storyName = 'No arrows one item';
NoArrowsOneItem.args = {
  variant: 'no-arrows',
  children: (
    <PdsPaginationItem
      onClick={action('pds-pagination-item-click')}
      pageNumber={1}
      active
    />
  ),
};

export const Anchors = Template.bind({});
Anchors.args = {
  ariaLabel: 'Pagination built with anchors',
  backwardDisabled: true,
  flyFirstHref: 'https://www.google.com/first',
  stepBackwardHref: 'https://www.google.com/backward',
  stepForwardHref: 'https://www.google.com/forward',
  flyLastHref: 'https://www.google.com/last',
  children: (
    <>
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        href="https://www.google.com"
        pageNumber={1}
        active
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        href="https://www.google.com"
        pageNumber={2}
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        href="https://www.google.com"
        pageNumber={3}
      />
    </>
  ),
};

export const HideFlyers = Template.bind({});
HideFlyers.storyName = 'Hide flyers';
HideFlyers.args = {
  ariaLabel: 'Hide flyers paginator',
  forwardDisabled: false,
  backwardDisabled: true,
  stepBackwardHref: 'https://www.google.com/backward',
  stepForwardHref: 'https://www.google.com/forward',
  hideFlyers: true,
  children: (
    <>
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        href="https://www.google.com"
        pageNumber={1}
        active
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        href="https://www.google.com"
        pageNumber={2}
      />
      <PdsPaginationItem
        onClick={action('pds-pagination-item-click')}
        href="https://www.google.com"
        pageNumber={3}
      />
    </>
  ),
};
