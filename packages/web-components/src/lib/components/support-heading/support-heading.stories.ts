import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './support-heading';

export default {
  title: 'Components/Support heading',
  component: 'pds-support-heading',
  tags: ['autodocs'],
  argTypes: {
    headingVariant: {
      control: 'select',
      options: ['meta-default', 'meta-sm', 'headline-default'],
    },
    headingTagName: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  render: (args) => {
    return html`<pds-support-heading
      headingVariant=${args.headingVariant || nothing}
      headingTagName=${args.headingTagName || nothing}
      ?inverted=${args.inverted}
      >Title</pds-support-heading
    >`;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    headingTagName: 'h2',
  },
};

export const DefaultSmall: StoryObj = {
  name: 'Default small',
  args: {
    headingVariant: 'meta-sm',
    headingTagName: 'h2',
  },
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  args: {
    inverted: true,
    headingTagName: 'h2',
  },
};

export const InvertedSmall: StoryObj = {
  name: 'Inverted small',
  args: {
    headingVariant: 'meta-sm',
    inverted: true,
    headingTagName: 'h2',
  },
};

export const Styled: StoryObj = {
  name: 'Styled',
  args: {
    headingVariant: 'headline-default',
    headingTagName: 'h2',
  },
};
