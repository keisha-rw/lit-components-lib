import * as React from 'react';
import { StoryFn } from '@storybook/react';
import {
  PdsIconMoreHorizontal,
  PdsIconX,
} from '@keisha/design-system-icons-react';
// @ts-ignore
import { themedefault } from '@keisha/design-system-tokens';
import { PdsButton } from './button';

export default {
  title: 'Components/Button',
  component: PdsButton,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-button-click'],
    },
  },
};

const Template: StoryFn<typeof PdsButton> = (args) => (
  <PdsButton {...args}>Label</PdsButton>
);

export const Default = Template.bind({});
Default.args = {};

export const DefaultSmall = Template.bind({});
DefaultSmall.storyName = 'Default small';
DefaultSmall.args = {
  size: 'sm',
};

export const DefaultInverted = Template.bind({});
DefaultInverted.storyName = 'Default inverted';
DefaultInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
DefaultInverted.args = {
  variant: 'default-inverted',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.storyName = 'Primary inverted';
PrimaryInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
PrimaryInverted.args = {
  variant: 'primary-inverted',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.storyName = 'Full width';
FullWidth.args = {
  fullWidth: true,
};

const ButtonWithIconTemplate: StoryFn<typeof PdsButton> = (args) => (
  <PdsButton {...args}>
    <PdsIconMoreHorizontal
      color={themedefault.SemanticBorderInteractiveDefault}
    />
  </PdsButton>
);

export const Icon = ButtonWithIconTemplate.bind({});
Icon.args = {
  variant: 'icon',
  ariaLabel: 'icon',
};

const ButtonWithIconInvertedTemplate: StoryFn<typeof PdsButton> = (args) => (
  <PdsButton {...args}>
    <PdsIconMoreHorizontal color={themedefault.SemanticBorderInvertedDefault} />
  </PdsButton>
);

export const IconInverted = ButtonWithIconInvertedTemplate.bind({});
IconInverted.storyName = 'Icon inverted';
IconInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
IconInverted.args = {
  variant: 'icon-inverted',
  ariaLabel: 'icon inverted',
};

export const LinkButton = Template.bind({});
LinkButton.storyName = 'Link button';
LinkButton.args = {
  link: 'default',
};

export const LinkButtonSmall = Template.bind({});
LinkButtonSmall.storyName = 'Link button small';
LinkButtonSmall.args = {
  link: 'default',
  size: 'sm',
};

export const LinkButtonInverted = Template.bind({});
LinkButtonInverted.storyName = 'Link button inverted';
LinkButtonInverted.args = {
  link: 'inverted',
};
LinkButtonInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};

export const LinkButtonEmphasis = Template.bind({});
LinkButtonEmphasis.storyName = 'Link button emphasis';
LinkButtonEmphasis.args = {
  link: 'emphasis',
};

export const LinkButtonEmphasisInverted = Template.bind({});
LinkButtonEmphasisInverted.storyName = 'Link button emphasis inverted';
LinkButtonEmphasisInverted.args = {
  link: 'emphasis-inverted',
};
LinkButtonEmphasisInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};

const LinkButtonIconTemplate: StoryFn<typeof PdsButton> = (args) => (
  <PdsButton {...args}>
    {args.link === 'icon-left' && (
      <PdsIconX
        slot="icon-left"
        color={themedefault.SemanticBorderInteractiveDefault}
      />
    )}
    <span>Label</span>
    {args.link === 'icon-right' && (
      <PdsIconX
        slot="icon-right"
        color={themedefault.SemanticBorderInteractiveDefault}
      />
    )}
  </PdsButton>
);

export const LinkButtonIconLeft = LinkButtonIconTemplate.bind({});
LinkButtonIconLeft.storyName = 'Link button icon left';
LinkButtonIconLeft.args = {
  link: 'icon-left',
};

export const LinkButtonIconRight = LinkButtonIconTemplate.bind({});
LinkButtonIconRight.storyName = 'Link button icon right';
LinkButtonIconRight.args = {
  link: 'icon-right',
};
