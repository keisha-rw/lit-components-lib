import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './radio';

export default {
  title: 'Components/Radio group/Radio',
  component: 'pds-radio',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the radio group component.',
      },
    },
  },
  render: () => html`<pds-radio label="Option 1" value="option-1"></pds-radio>`,
} as Meta;
// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
};

export const Named: StoryObj = {
  name: 'Named',
  render: () =>
    html`<pds-radio
      label="Option 1"
      value="option-1"
      name="group-name"
    ></pds-radio>`,
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  render: () =>
    html`<pds-radio label="Option 1" value="option-1" disabled></pds-radio>`,
};
