import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import '../list/list';
import './list-item';
import '@keisha/design-system-icons-web/check';

export default {
  title: 'Components/List/List item',
  component: 'pds-list-item',
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
    a11y: {
      config: {
        rules: [
          {
            // This is not an issue when it's contained properly within the pds-list element
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
          {
            // The shadow dom makes this check difficult, but the dd and dt items are in a dl.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/dlitem
            id: 'dlitem',
            enabled: false,
          },
        ],
      },
    },
  },
  render: (args) => {
    if (
      args.variant === 'description' ||
      args.variant === 'description-reverse'
    ) {
      return html`<pds-list-item variant="${args.variant || nothing}"
        ><span slot="description">List item description</span
        ><span slot="description-term">List item label</span></pds-list-item
      >`;
    }
    return html`<pds-list-item variant="${args.variant || nothing}"
      >This is a list item.</pds-list-item
    > `;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const ListItem: StoryObj = {
  name: 'Default',
  args: {
    text: 'List item',
    args: { variant: 'default' },
  },
};

export const ListItemWithIcon: StoryObj = {
  name: 'Icon',
  args: {
    text: 'List item with icon',
  },
  render: () =>
    html`<pds-list-item>
      <pds-icon-check slot="icon"></pds-icon-check>
      <slot>This is a list item.</slot>
    </pds-list-item>`,
};

export const Default: StoryObj = {
  name: 'Description Default',
  args: { variant: 'description' },
};

export const Reverse: StoryObj = {
  name: 'Description Reverse',
  args: {
    variant: 'description-reverse',
  },
};
