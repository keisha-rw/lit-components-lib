import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsRadio } from './radio';

export default {
  title: 'Components/Radio group/Radio',
  component: PdsRadio,
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
};

const Template: StoryFn<typeof PdsRadio> = (args) => <PdsRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  value: 'option-1',
};

export const Named = Template.bind({});
Named.args = {
  label: 'Option 1',
  value: 'option-1',
  name: 'named',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option 1',
  value: 'option-1',
  disabled: true,
};
