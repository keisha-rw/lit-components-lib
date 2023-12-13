import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './heading';

export default {
  title: 'Components/Heading',
  component: 'pds-heading',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display-default',
        'display-sm',
        'headline-lg',
        'headline-default',
        'headline-sm',
        'title-lg',
        'title-default',
        'title-sm',
        'title-xs',
        'label-lg',
        'label-default',
        'label-sm',
        'meta-sm',
        'meta-default',
      ],
    },
    headingTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    inverted: {
      control: 'boolean',
    },
  },
  render: (args) =>
    html`<pds-heading
      headingTag="${args.headingTag || nothing}"
      variant="${args.variant || nothing}"
      >Some heading text goes here</pds-heading
    >`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Heading1VariantDisplayDefault: StoryObj = {
  name: 'H1 variant, display default',
  args: { headingTag: 'h1', variant: 'display-default' },
};

export const Heading2VariantDisplayDefault: StoryObj = {
  name: 'H2 variant, display default',
  args: { headingTag: 'h2', variant: 'display-default' },
};

export const Heading2VariantDisplaySmall: StoryObj = {
  name: 'H2 variant, display small',
  args: { headingTag: 'h2', variant: 'display-sm' },
};

export const Heading2VariantHeadlineSmall: StoryObj = {
  name: 'H2 variant, headline small',
  args: { headingTag: 'h2', variant: 'headline-sm' },
};

export const Heading2VariantHeadlineDefault: StoryObj = {
  name: 'H2 variant, headline default',
  args: { headingTag: 'h2', variant: 'headline-default' },
};

export const Heading2VariantHeadlineLarge: StoryObj = {
  name: 'H2 variant, headline large',
  args: { headingTag: 'h2', variant: 'headline-lg' },
};

export const Heading2VariantTitleExtraSmall: StoryObj = {
  name: 'H2 variant, title xsmall',
  args: { headingTag: 'h2', variant: 'title-xs' },
};

export const Heading2VariantTitleSmall: StoryObj = {
  name: 'H2 variant, title small',
  args: { headingTag: 'h2', variant: 'title-sm' },
};

export const Heading2VariantTitleDefault: StoryObj = {
  name: 'H2 variant, title default',
  args: { headingTag: 'h2', variant: 'title-default' },
};

export const Heading2VariantTitleLarge: StoryObj = {
  name: 'H2 variant, title large',
  args: { headingTag: 'h2', variant: 'title-lg' },
};

export const Heading2VariantLabelSmall: StoryObj = {
  name: 'H2 variant, label small',
  args: { headingTag: 'h2', variant: 'label-sm' },
};

export const Heading2VariantLabelDefault: StoryObj = {
  name: 'H2 variant, label default',
  args: { headingTag: 'h2', variant: 'label-default' },
};

export const Heading2VariantLabelLarge: StoryObj = {
  name: 'H2 variant, label large',
  args: { headingTag: 'h2', variant: 'label-lg' },
};

export const Heading2VariantMetaSmall: StoryObj = {
  name: 'H2 variant, meta small',
  args: { headingTag: 'h2', variant: 'meta-sm' },
};

export const Heading2VariantMetaDefault: StoryObj = {
  name: 'H2 variant, meta default',
  args: { headingTag: 'h2', variant: 'meta-default' },
};

export const Heading3VariantDisplayDefault: StoryObj = {
  name: 'H3 variant, display default',
  args: { headingTag: 'h3', variant: 'display-default' },
};

export const Heading4VariantDisplaySmall: StoryObj = {
  name: 'H4 variant, display small',
  args: { headingTag: 'h4', variant: 'display-sm' },
};

export const Heading4VariantDisplayDefault: StoryObj = {
  name: 'H4 variant, display default',
  args: { headingTag: 'h4', variant: 'display-default' },
};

export const Heading5VariantDisplayDefault: StoryObj = {
  name: 'H5 variant, display default',
  args: { headingTag: 'h5', variant: 'display-default' },
};

export const Heading6VariantDisplayDefault: StoryObj = {
  name: 'H6 variant, display default',
  args: { headingTag: 'h6', variant: 'display-default' },
};
