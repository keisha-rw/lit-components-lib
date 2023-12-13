import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './list';
import '../link/link';
import '../../../../.storybook/components/placeholder-element/placeholder-element';
import '@keisha/design-system-icons-web/check';

export default {
  title: 'Components/List',
  component: 'pds-list',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['md', 'sm'],
    },
    spacing: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'none'],
    },
    align: {
      control: 'radio',
      options: ['center', 'default'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'default'],
    },
    variant: {
      control: 'select',
      options: ['default', 'description', 'description-reverse'],
    },
  },
  render: (args) => {
    if (args.variant === 'description') {
      return html`<pds-list variant=${args.variant || nothing}>
        <pds-list-item
          ><span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
      </pds-list>`;
    }
    if (args.variant === 'description-reverse') {
      return html`<pds-list variant=${args.variant || nothing}>
        <pds-list-item
          ><span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
        <pds-list-item>
          <span slot="description">List item description</span
          ><span slot="description-term">List item label</span></pds-list-item
        >
      </pds-list>`;
    }
    if (args.variant === 'default') {
      return html`<pds-list
        size=${args.size || nothing}
        align=${args.align || nothing}
        orientation=${args.orientation || nothing}
        spacing=${args.spacing || nothing}
        variant=${args.variant || nothing}
      >
        <pds-list-item><span>List item label</span></pds-list-item>
        <pds-list-item><span>List item label</span></pds-list-item>
        <pds-list-item><span>List item label</span></pds-list-item>
      </pds-list>`;
    }
    return html`<pds-list
      size=${args.size || nothing}
      align=${args.align || nothing}
      orientation=${args.orientation || nothing}
      spacing=${args.spacing || nothing}
      variant=${args.variant || nothing}
    >
      ${args.child || nothing}
    </pds-list>`;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Color contrast is sufficient - this is a false positive.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};

export const DefaultSmall: StoryObj = {
  name: 'Default small',
  args: {
    size: 'sm',
    child: html`<pds-list-item><span>List item label</span></pds-list-item>
      <pds-list-item><span>List item label</span></pds-list-item>
      <pds-list-item><span>List item label</span></pds-list-item>`,
  },
};

export const DefaultWithIcons: StoryObj = {
  name: 'Default with icons',
  args: {
    child: html`<pds-list-item>
      <pds-icon-check slot="icon"></pds-icon-check>
      <span
        >This is a really really long list item with a lot of text so it can
        showcase how the text wraps with the icon on mobile. </span
      ></pds-list-item>
      <pds-list-item>
        <pds-icon-check slot="icon"></pds-icon-check>
        <span>This is a list item.</span></pds-list-item
      ><pds-list-item>
          <pds-icon-check slot="icon"></pds-icon-check>
        <span>This is a list item.</span>
      </pds-list-item></pds-list-item
    >`,
  },
};

export const DefaultSmallSpacing: StoryObj = {
  name: 'Default small spacing',
  args: {
    spacing: 'sm',
    child: html`<pds-list-item
        ><placeholder-element
          ><span>List item label</span></placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          ><span>List item label</span></placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          ><span>List item label</span></placeholder-element
        ></pds-list-item
      >`,
  },
};

export const Horizontal: StoryObj = {
  name: 'Horizontal',
  args: {
    orientation: 'horizontal',
    child: html`<pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>`,
  },
};

export const HorizontalSmall: StoryObj = {
  name: 'Horizontal small',
  args: {
    orientation: 'horizontal',
    size: 'sm',
    child: html`<pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>
      <pds-list-item>List item label</pds-list-item>`,
  },
};

export const HorizontalSmallSpacing: StoryObj = {
  name: 'Horizontal small spacing',
  args: {
    orientation: 'horizontal',
    spacing: 'sm',
    child: html`<pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >`,
  },
};

export const HorizontalLargeSpacing: StoryObj = {
  name: 'Horizontal large spacing',
  args: {
    orientation: 'horizontal',
    spacing: 'lg',
    child: html`<pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >`,
  },
};

export const AlignCenter: StoryObj = {
  name: 'Align center',
  args: {
    align: 'center',
    child: html`<pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >`,
  },
};

export const AlignCenterHorizontal: StoryObj = {
  name: 'Align center horizontal',
  args: {
    orientation: 'horizontal',
    align: 'center',
    child: html`<pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >
      <pds-list-item
        ><placeholder-element
          >List item label</placeholder-element
        ></pds-list-item
      >`,
  },
};

export const LinkList: StoryObj = {
  name: 'Link list',
  args: {
    child: html`<pds-list-item
        ><pds-link href="#">This is a link</pds-link></pds-list-item
      >
      <pds-list-item
        ><pds-link href="#">This is a link</pds-link></pds-list-item
      >
      <pds-list-item
        ><pds-link href="#">This is a link</pds-link></pds-list-item
      >
      <pds-list-item
        ><pds-link href="#">This is a link</pds-link></pds-list-item
      >
      <pds-list-item
        ><pds-link href="#">This is a link</pds-link></pds-list-item
      >
      <pds-list-item
        ><pds-link href="#">This is a link</pds-link></pds-list-item
      >`,
  },
};

export const DescriptionDefault: StoryObj = {
  name: 'Description default',
  args: { variant: 'description' },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Description list items are li elements, so this check is invalid.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/definition-list
            id: 'definition-list',
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
};

export const DescriptionReverse: StoryObj = {
  name: 'Description reverse',
  args: {
    variant: 'description-reverse',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Description list items are li elements, so this check is invalid.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/definition-list
            id: 'definition-list',
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
};
