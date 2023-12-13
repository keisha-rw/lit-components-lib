import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './segmented-control-item';

const meta: Meta = {
  title: 'Components/Segmented control/Segmented control item',
  component: 'pds-segmented-control-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    action: {
      handles: ['pds-segmented-control-item-click'],
    },
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the segmented-control component.',
      },
    },
  },
  render: (args) =>
    html`<pds-segmented-control-item ?disabled=${args.disabled}
      >Option 1</pds-segmented-control-item
    >`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};
