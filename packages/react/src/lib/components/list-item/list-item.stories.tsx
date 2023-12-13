import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsIconCheck } from '@keisha/design-system-icons-react';
// @ts-ignore
import { themedefault } from '@keisha/design-system-tokens';
import { PdsListItem } from './list-item';

export default {
  title: 'Components/List/List item',
  component: PdsListItem,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'description', 'description-reverse'],
    },
  },
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the list component.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsListItem> = (args) => {
  if (
    args.variant === 'description' ||
    args.variant === 'description-reverse'
  ) {
    return (
      <PdsListItem {...args}>
        <span slot="description-term">List item label</span>
        <span slot="description">List item description</span>
      </PdsListItem>
    );
  }
  return (
    <PdsListItem {...args}>
      <span slot="icon">
        <PdsIconCheck color={themedefault.SemanticBorderIconDefault} />
      </span>
      <span>This is a list item.</span>
    </PdsListItem>
  );
};
export const Default = Template.bind({});
Default.args = {};

export const Descriptiondefault = Template.bind({});
Descriptiondefault.args = { variant: 'description' };

export const Descriptionreverse = Template.bind({});
Descriptionreverse.args = {
  variant: 'description-reverse',
};
