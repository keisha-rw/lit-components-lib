import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsBoxButton } from './box-button';
import { PdsTextPassage } from '../text-passage/text-passage';
import { PdsGrid } from '../grid/grid';
import { PdsGridItem } from '../grid-item/grid-item';

export default {
  title: 'Components/Box button',
  component: PdsBoxButton,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-box-button-click'],
    },
  },
};

const Template: StoryFn<typeof PdsBoxButton> = (args) => (
  <PdsBoxButton
    onClick={action('pds-box-button-click')}
    {...args}
    label="Some default content goes here"
    labelVariant="xl"
  >
    <PdsTextPassage slot="description">
      This description adds additional context
    </PdsTextPassage>
  </PdsBoxButton>
);

export const Default = Template.bind({});
Default.args = {};

export const Strong = Template.bind({});
Strong.args = {
  variant: 'strong',
};

const CenterContentVerticallyTemplate: StoryFn<typeof PdsBoxButton> = (
  args,
) => (
  <PdsGrid variant="2up">
    <PdsGridItem>
      <PdsBoxButton
        onClick={action('pds-box-button-click')}
        {...args}
        label="Some default content goes here"
        labelVariant="xl"
      >
        <PdsTextPassage slot="description">
          This description adds additional context
        </PdsTextPassage>
      </PdsBoxButton>
    </PdsGridItem>
    <PdsGridItem>
      <PdsBoxButton
        onClick={action('pds-box-button-click')}
        {...args}
        label="Some default content goes here"
        labelVariant="xl"
      >
        <PdsTextPassage slot="description">
          <p>This description adds additional context</p>
          <p>This description adds additional context</p>
        </PdsTextPassage>
      </PdsBoxButton>
    </PdsGridItem>
  </PdsGrid>
);

export const CenterContentVertically = CenterContentVerticallyTemplate.bind({});
CenterContentVertically.args = {
  centerContentVertically: true,
};
CenterContentVertically.storyName = 'Center content vertically';
