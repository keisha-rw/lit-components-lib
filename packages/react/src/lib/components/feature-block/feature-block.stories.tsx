import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsFeatureBlock } from './feature-block';
import { PdsHeading } from '../heading/heading';
import { PdsTextPassage } from '../text-passage/text-passage';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title: 'Components/Feature block',
  component: PdsFeatureBlock,
  tags: ['autodocs'],
  parameters: {
    happo: {
      waitFor: () =>
        document
          ?.querySelector('pds-feature-block')
          ?.querySelector('div[slot="media"]')
          ?.querySelector('img')?.complete,
    },
  },
};

const Template: StoryFn<typeof PdsFeatureBlock> = (args) => (
  <PdsFeatureBlock {...args}>
    <div slot="media">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Slot for image or video
      </PlaceholderElement>
    </div>
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Slot for body content
    </PlaceholderElement>
  </PdsFeatureBlock>
);

export const Default = Template.bind({});
Default.args = {};

const ExampleTemplate: StoryFn<typeof PdsFeatureBlock> = (args) => (
  <PdsFeatureBlock {...args}>
    <div slot="media">
      <img
        className="pds-u-responsive-image"
        alt="placeholder"
        // @ts-expect-error env comes from vite
        src={`${import.meta.env.BASE_URL}image_border.svg`}
      />
    </div>
    <div>
      <div className="pds-u-typography-meta-sm pds-u-margin-bottom-16">
        1:00 PM CT | May 18, 2022
      </div>
      <PdsHeading slot="heading" headingTag="h3" variant="title-default">
        Title
      </PdsHeading>
      <PdsTextPassage>
        Turpis congue vitae rutrum habitasse integer nibh faucibus feugiat
        interdum.
      </PdsTextPassage>
      <PlaceholderElement styleModifier="pds-u-margin-top-16">
        Additional slot area
      </PlaceholderElement>
    </div>
  </PdsFeatureBlock>
);

export const ExampleUsage = ExampleTemplate.bind({});
ExampleUsage.storyName = 'Example usage';

export const Reversed = Template.bind({});
Reversed.args = {
  behavior: 'reversed',
};

const FullWidthTemplate: StoryFn<typeof PdsFeatureBlock> = (args) => (
  <PdsFeatureBlock {...args}>
    <div slot="media">
      <PlaceholderElement styleModifier="padding: 2rem 0">
        Slot for full width image
      </PlaceholderElement>
    </div>
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Overlay Slot for body content. Width set at recipe level
    </PlaceholderElement>
  </PdsFeatureBlock>
);

export const FullWidth = FullWidthTemplate.bind({});
FullWidth.storyName = 'Full width';
FullWidth.args = {
  fullWidth: true,
};
