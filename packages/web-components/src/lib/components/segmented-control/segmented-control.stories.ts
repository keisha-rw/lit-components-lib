import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './segmented-control';

const meta: Meta = {
  title: 'Components/Segmented control',
  component: 'pds-segmented-control',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
  render: (args) =>
    html`<pds-segmented-control
      ?disabled=${args.disabled}
      size="${args.size || nothing}"
      ><pds-segmented-control-item>Option 1</pds-segmented-control-item>
      <pds-segmented-control-item>Option 2</pds-segmented-control-item>
      <pds-segmented-control-item>Option 3</pds-segmented-control-item>
    </pds-segmented-control>`,
  parameters: {
    actions: {
      handles: ['pds-segmented-control-item-click'],
    },
  },
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const Small: StoryObj = {
  name: 'Small',
  args: {
    size: 'sm',
  },
};

export const LongLabel: StoryObj = {
  name: 'Long label',
  render: () =>
    html`<pds-segmented-control
      ><pds-segmented-control-item isSegmentActive
        >Option 1</pds-segmented-control-item
      >
      <pds-segmented-control-item>Option 2 large</pds-segmented-control-item>
      <pds-segmented-control-item>Option 3</pds-segmented-control-item>
    </pds-segmented-control>`,
};

export const FourSegments: StoryObj = {
  name: '4 segments',
  render: () =>
    html`<pds-segmented-control
      ><pds-segmented-control-item>Option 1</pds-segmented-control-item>
      <pds-segmented-control-item isSegmentActive
        >Option 2</pds-segmented-control-item
      >
      <pds-segmented-control-item>Option 3</pds-segmented-control-item>
      <pds-segmented-control-item>Option 4</pds-segmented-control-item>
    </pds-segmented-control>`,
};

export const FiveSegments: StoryObj = {
  name: '5 segments',
  args: {},
  render: () =>
    html`<pds-segmented-control
      ><pds-segmented-control-item>Option 1</pds-segmented-control-item>
      <pds-segmented-control-item>Option 2</pds-segmented-control-item>
      <pds-segmented-control-item>Option 3</pds-segmented-control-item>
      <pds-segmented-control-item>Option 4</pds-segmented-control-item>
      <pds-segmented-control-item isSegmentActive
        >Option 5</pds-segmented-control-item
      >
    </pds-segmented-control>`,
};
