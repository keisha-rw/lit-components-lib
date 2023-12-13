import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';
import { PdsGrid } from './grid';
import { PdsGridItem } from '../grid-item/grid-item';

export default {
  title: 'Layout/Grid',
  component: PdsGrid,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsGrid> = (args) => (
  <PdsGrid {...args}>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 1
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 2
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 3
      </PlaceholderElement>
    </PdsGridItem>
  </PdsGrid>
);

export const Default = Template.bind({});
Default.args = {};

const TwoUpTemplate: StoryFn<typeof PdsGrid> = (args) => (
  <PdsGrid variant={args.variant} break={args.break}>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 1
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 2
      </PlaceholderElement>
    </PdsGridItem>
  </PdsGrid>
);

export const SideBySide = TwoUpTemplate.bind({});
SideBySide.storyName = 'Side by side';
SideBySide.args = {
  variant: 'side-by-side',
};

export const TwoUp = TwoUpTemplate.bind({});
TwoUp.storyName = '2up';
TwoUp.args = {
  variant: '2up',
};

const ThreeUpTemplate: StoryFn<typeof PdsGrid> = (args) => (
  <PdsGrid variant={args.variant} break={args.break}>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 1
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 2
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 3
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 4
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 5
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 6
      </PlaceholderElement>
    </PdsGridItem>
  </PdsGrid>
);

export const ThreeUp = ThreeUpTemplate.bind({});
ThreeUp.storyName = '3up';
ThreeUp.args = {
  variant: '3up',
};

export const ThreeUpBreakFaster = ThreeUpTemplate.bind({});
ThreeUpBreakFaster.storyName = '3up break faster';
ThreeUpBreakFaster.args = {
  variant: '3up',
  break: 'faster',
};

export const ThreeUpBreakSlower = ThreeUpTemplate.bind({});
ThreeUpBreakSlower.storyName = '3up break slower';
ThreeUpBreakSlower.args = {
  variant: '3up',
  break: 'slower',
};

export const OneToThreeUp = ThreeUpTemplate.bind({});
OneToThreeUp.storyName = '1-3up';
OneToThreeUp.args = {
  variant: '1-3up',
};

export const OneToThreeUpBreakFaster = ThreeUpTemplate.bind({});
OneToThreeUpBreakFaster.storyName = '1-3up break faster';
OneToThreeUpBreakFaster.args = {
  variant: '1-3up',
  break: 'faster',
};

export const OneToThreeUpBreakSlower = ThreeUpTemplate.bind({});
OneToThreeUpBreakSlower.storyName = '1-3up break slower';
OneToThreeUpBreakSlower.args = {
  variant: '1-3up',
  break: 'slower',
};

const OneToTwoToFourUpTemplate: StoryFn<typeof PdsGrid> = (args) => (
  <PdsGrid variant={args.variant} break={args.break}>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 1
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 2
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 3
      </PlaceholderElement>
    </PdsGridItem>
    <PdsGridItem>
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Item 4
      </PlaceholderElement>
    </PdsGridItem>
  </PdsGrid>
);

export const OneToTwoToFourUp = OneToTwoToFourUpTemplate.bind({});
OneToTwoToFourUp.storyName = '1-2-4up';
OneToTwoToFourUp.args = {
  variant: '1-2-4up',
};

export const OneToTwoToFourUpBreakFaster = OneToTwoToFourUpTemplate.bind({});
OneToTwoToFourUpBreakFaster.storyName = '1-2-4up break faster';
OneToTwoToFourUpBreakFaster.args = {
  variant: '1-2-4up',
  break: 'faster',
};

export const OneToTwoToFourUpBreakSlower = OneToTwoToFourUpTemplate.bind({});
OneToTwoToFourUpBreakSlower.storyName = '1-2-4up break slower';
OneToTwoToFourUpBreakSlower.args = {
  variant: '1-2-4up',
  break: 'slower',
};
