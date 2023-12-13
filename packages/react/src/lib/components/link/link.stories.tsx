import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  PdsIconMoreHorizontal,
  PdsIconCheck,
} from '@keisha/design-system-icons-react';
// @ts-ignore
import { themedefault } from '@keisha/design-system-tokens';
import { PdsLink } from './link';

export default {
  title: 'Components/Link',
  component: PdsLink,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-link-click'],
    },
  },
};

const Template: StoryFn<typeof PdsLink> = (args) => (
  <PdsLink onClick={action('pds-link-click')} {...args}>
    Link text
  </PdsLink>
);

export const Default = Template.bind({});
Default.args = {
  href: 'https://www.google.com',
};

export const DefaultInverted = Template.bind({});
DefaultInverted.storyName = 'Default inverted';
DefaultInverted.args = {
  variant: 'inverted',
  href: 'https://www.google.com',
};

DefaultInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};

export const Emphasis = Template.bind({});
Emphasis.args = { variant: 'emphasis', href: 'https://www.google.com' };

export const EmphasisInverted = Template.bind({});
EmphasisInverted.storyName = 'Emphasis inverted';
EmphasisInverted.args = {
  variant: 'emphasis-inverted',
  href: 'https://www.google.com',
};
EmphasisInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};

const TemplateLeft: StoryFn<typeof PdsLink> = (args) => (
  <PdsLink {...args}>
    <span slot="icon-left">
      <PdsIconCheck color={themedefault.SemanticBorderInteractiveDefault} />
    </span>
    Link text
  </PdsLink>
);
export const IconLeft = TemplateLeft.bind({});
IconLeft.storyName = 'Icon left';
IconLeft.args = {
  href: 'https://www.google.com',
};

const TemplateRight: StoryFn<typeof PdsLink> = (args) => (
  <PdsLink {...args}>
    Link text
    <span slot="icon-right">
      <PdsIconCheck color={themedefault.SemanticBorderInteractiveDefault} />
    </span>
  </PdsLink>
);
export const IconRight = TemplateRight.bind({});
IconRight.storyName = 'Icon right';
IconRight.args = { href: 'https://www.google.com' };

export const Download = Template.bind({});
Download.args = {
  download: true,
  href: 'https://www.google.com',
};

export const Hover = Template.bind({});
Hover.storyName = 'Hover triggered';
Hover.args = {
  hover: true,
  href: 'https://www.google.com',
};

export const ButtonLinkDefault = Template.bind({});
ButtonLinkDefault.storyName = 'Button link default';
ButtonLinkDefault.args = {
  button: 'default',
  href: 'https://www.google.com',
};

export const ButtonLinkDefaultSmall = Template.bind({});
ButtonLinkDefaultSmall.storyName = 'Button link default small';
ButtonLinkDefaultSmall.args = {
  button: 'default',
  size: 'sm',
  href: 'https://www.google.com',
};

export const ButtonLinkDefaultInverted = Template.bind({});
ButtonLinkDefaultInverted.storyName = 'Button link default inverted';
ButtonLinkDefaultInverted.args = {
  button: 'default-inverted',
  href: 'https://www.google.com',
};
ButtonLinkDefaultInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};

export const ButtonLinkPrimary = Template.bind({});
ButtonLinkPrimary.storyName = 'Button link primary';
ButtonLinkPrimary.args = {
  button: 'primary',
  href: 'https://www.google.com',
};

export const ButtonLinkPrimaryInverted = Template.bind({});
ButtonLinkPrimaryInverted.storyName = 'Button link primary inverted';
ButtonLinkPrimaryInverted.args = {
  button: 'primary-inverted',
  href: 'https://www.google.com',
};
ButtonLinkPrimaryInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};

const ButtonLinkIconTemplate: StoryFn<typeof PdsLink> = (args) => (
  <PdsLink {...args}>
    <PdsIconMoreHorizontal
      color={themedefault.SemanticBorderInteractiveDefault}
    />
  </PdsLink>
);
export const ButtonLinkIcon = ButtonLinkIconTemplate.bind({});
ButtonLinkIcon.storyName = 'Button link icon';
ButtonLinkIcon.args = {
  button: 'icon',
  href: 'https://www.google.com',
};

const ButtonLinkIconInvertedTemplate: StoryFn<typeof PdsLink> = (args) => (
  <PdsLink {...args}>
    <PdsIconMoreHorizontal color={themedefault.SemanticBorderInvertedDefault} />
  </PdsLink>
);

export const ButtonLinkIconInverted = ButtonLinkIconInvertedTemplate.bind({});
ButtonLinkIconInverted.storyName = 'Button link icon inverted';
ButtonLinkIconInverted.args = {
  button: 'icon-inverted',
  href: 'https://www.google.com',
};
ButtonLinkIconInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
