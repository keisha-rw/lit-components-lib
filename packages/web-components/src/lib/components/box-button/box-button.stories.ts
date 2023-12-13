import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './box-button';
import '../grid/grid';
import '../grid-item/grid-item';

export default {
  title: 'Components/Box button',
  component: 'pds-box-button',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-box-button-click'],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'strong'],
    },
    labelVariant: {
      control: 'radio',
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
  render: (args) =>
    html`<pds-box-button
      variant="${args.variant || nothing}"
      href="${args.href || nothing}"
      label="Some default content goes here"
      labelVariant="xl"
      ><pds-text-passage slot="description"
        >This description adds additional context</pds-text-passage
      ></pds-box-button
    >`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
  },
};

export const Business: StoryObj = {
  name: 'Strong',
  args: {
    variant: 'strong',
  },
};

export const CenterContentVertically: StoryObj = {
  name: 'Center content vertically',
  args: {
    variant: 'default',
    centerContentVertically: true,
    labelVariant: 'xl',
  },
  render: (args) =>
    html`<pds-grid variant="2up"
      ><pds-grid-item
        ><pds-box-button
          variant="${args.variant || nothing}"
          centerContentVertically="${args.centerContentVertically || nothing}"
          label="Some default content goes here"
          labelVariant="${args.labelVariant || nothing}"
          ><pds-text-passage slot="description"
            ><p>This description adds additional context</p></pds-text-passage
          ></pds-box-button
        ></pds-grid-item
      ><pds-grid-item
        ><pds-box-button
          variant="${args.variant || nothing}"
          centerContentVertically="${args.centerContentVertically || nothing}"
          label="Some default content goes here"
          labelVariant="${args.labelVariant || nothing}"
          ><pds-text-passage slot="description"
            ><p>This description adds additional context</p>
            <p>This description adds additional context</p></pds-text-passage
          ></pds-box-button
        ></pds-grid-item
      ></pds-grid
    >`,
};
