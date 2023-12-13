import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './grid-item';
import '../../../../.storybook/components/placeholder-element/placeholder-element';

const meta: Meta = {
  title: 'Layout/Grid/Grid item',
  component: 'pds-grid-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the grid component.',
      },
    },
  },
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    text: 'Grid item',
  },
  render: () =>
    html`<pds-grid-item>
      <placeholder-element>Grid item</placeholder-element>
    </pds-grid-item> `,
};
