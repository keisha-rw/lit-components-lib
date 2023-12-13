import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';
import { PdsCard } from './card';
import { PdsLink } from '../link/link';

export default {
  title: 'Components/Card',
  component: PdsCard,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsCard> = (args) => (
  <PdsCard {...args} onClick={(e: any) => action('pds-card-click')(e.detail)}>
    <div slot="header">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Card header slot
      </PlaceholderElement>
    </div>
    <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
      Card body slot
    </PlaceholderElement>
    <div slot="footer">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Card footer slot
      </PlaceholderElement>
    </div>
  </PdsCard>
);

export const Default = Template.bind({});
Default.args = {};

export const Bare = Template.bind({});
Bare.args = {
  variant: 'bare',
};

const ClickableTemplate: StoryFn<typeof PdsCard> = (args) => (
  <PdsCard {...args} onClick={(e: any) => action('pds-card-click')(e.detail)}>
    <div slot="header">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Card header slot
      </PlaceholderElement>
    </div>
    <PdsLink
      target="_blank"
      href="https://www.google.com"
      onClick={(e: any) => action('pds-link-click')(e.detail)}
    >
      Internal PDS link
    </PdsLink>
    <div slot="footer">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Card footer slot
      </PlaceholderElement>
    </div>
  </PdsCard>
);

export const Clickable = ClickableTemplate.bind({});
Clickable.args = {
  href: 'https://www.google.com',
  target: '_blank',
  ariaLabel: 'This is an clickable card with internal link',
};

export const ClickableNoInternalLink = Template.bind({});
ClickableNoInternalLink.storyName = 'Clickable no internal link';
ClickableNoInternalLink.args = {
  href: 'https://www.google.com',
  target: '_blank',
  ariaLabel: 'This is an clickable card with no internal link',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
};

export const SmallBorderRadius = Template.bind({});
SmallBorderRadius.storyName = 'Small border radius';
SmallBorderRadius.args = {
  borderRadiusSize: 'sm',
};

export const RemovePadding = Template.bind({});
RemovePadding.storyName = 'Remove default padding';
RemovePadding.args = {
  removePadding: true,
};

const NoPaddingHorizontalTemplate: StoryFn<typeof PdsCard> = (args) => (
  <PdsCard {...args} onClick={(e: any) => action('pds-card-click')(e.detail)}>
    <div slot="header">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Card header slot
      </PlaceholderElement>
    </div>
    <PlaceholderElement
      inlineStyle={{
        height: '118px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
      }}
    >
      <p>Card body slot</p>
    </PlaceholderElement>
    <div slot="footer">
      <PlaceholderElement
        inlineStyle={{
          height: '118px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 0,
        }}
      >
        <p>Card footer slot</p>
      </PlaceholderElement>
    </div>
  </PdsCard>
);

export const RemovePaddingHorizontal = NoPaddingHorizontalTemplate.bind({});
RemovePaddingHorizontal.storyName = 'Horizontal without padding';
RemovePaddingHorizontal.args = {
  removePadding: true,
  direction: 'horizontal',
};

export const HorizontalWithUtilClasses = NoPaddingHorizontalTemplate.bind({});
HorizontalWithUtilClasses.storyName = 'Horizontal with util class';
HorizontalWithUtilClasses.args = {
  direction: 'horizontal',
  className: 'pds-u-background-subtle',
};
