import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './button';
import '@keisha/design-system-icons-web/more-horizontal';
import '@keisha/design-system-icons-web/x';

export default {
  title: 'Components/Button',
  component: 'pds-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'default-inverted',
        'primary',
        'primary-inverted',
        'icon',
        'icon-inverted',
      ],
    },
    size: {
      control: 'radio',
      options: ['default', 'sm'],
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
    },
    link: {
      control: 'select',
      options: [
        'default',
        'inverted',
        'emphasis',
        'emphasis-inverted',
        'icon-left',
        'icon-right',
        '',
      ],
    },
  },
  render: (args) =>
    html`<pds-button
      variant="${args.variant || nothing}"
      size="${args.size || nothing}"
      type="${args.type || nothing}"
      link="${args.link || nothing}"
      fullWidth="${args.fullWidth || nothing}"
      ariaLabel="${args.ariaLabel || nothing}"
      ?disabled="${args.disabled}"
      ?removeLinkPadding="${args.removeLinkPadding}"
      ><span>Label</span></pds-button
    >`,
  parameters: {
    actions: {
      handles: ['pds-button-click'],
    },
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  args: {},
};

export const DefaultSmall: StoryObj = {
  name: 'Default small',
  args: {
    size: 'sm',
  },
};

export const DefaultInverted: StoryObj = {
  name: 'Default inverted',
  args: {
    variant: 'default-inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const Primary: StoryObj = {
  name: 'Primary',
  args: {
    variant: 'primary',
  },
};

export const PrimaryInverted: StoryObj = {
  name: 'Primary inverted',
  args: {
    variant: 'primary-inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
  render: (args) =>
    html`<pds-button disabled="${args.disabled}" size="${args.size || nothing}"
      ><span>Label</span></pds-button
    >`,
};

export const FullWidth: StoryObj = {
  name: 'Full width',
  args: {
    fullWidth: true,
  },
  render: (args) =>
    html`<pds-button
      fullWidth="${args.fullWidth}"
      size="${args.size || nothing}"
      ><span>Label</span></pds-button
    >`,
};

export const Icon: StoryObj = {
  name: 'Icon',
  args: {
    variant: 'icon',
    ariaLabel: 'icon',
  },
  render: (args) =>
    html`<pds-button
      variant="${args.variant}"
      ariaLabel="${args.ariaLabel}"
      size="${args.size || nothing}"
      ><pds-icon-more-horizontal></pds-icon-more-horizontal
    ></pds-button>`,
};

export const IconInverted: StoryObj = {
  name: 'Icon inverted',
  args: {
    variant: 'icon-inverted',
    ariaLabel: 'icon inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
  render: (args) =>
    html`<pds-button
      variant="${args.variant}"
      ariaLabel="${args.ariaLabel}"
      size="${args.size || nothing}"
      ><pds-icon-more-horizontal></pds-icon-more-horizontal
    ></pds-button>`,
};

export const LinkButton: StoryObj = {
  name: 'Link button',
  args: {
    link: 'default',
  },
};

export const LinkButtonSmall: StoryObj = {
  name: 'Link button small',
  args: {
    link: 'default',
    size: 'sm',
  },
};

export const LinkButtonInverted: StoryObj = {
  name: 'Link button inverted',
  args: {
    link: 'inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const LinkButtonEmphasis: StoryObj = {
  name: 'Link button emphasis',
  args: {
    link: 'emphasis',
  },
};

export const LinkButtonEmphasisInverted: StoryObj = {
  name: 'Link button emphasis inverted',
  args: {
    link: 'emphasis-inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const LinkButtonIconLeft: StoryObj = {
  name: 'Link button icon left',
  args: {
    link: 'icon-left',
  },
  render: (args) =>
    html`<pds-button
      href="${args.href}"
      link="${args.link}"
      size="${args.size || nothing}"
      ><pds-icon-x slot="icon-left"></pds-icon-x><span>Label</span></pds-button
    >`,
};

export const LinkButtonIconRight: StoryObj = {
  name: 'Link button icon right',
  args: {
    link: 'icon-right',
  },
  render: (args) =>
    html`<pds-button
      href="${args.href}"
      link="${args.link}"
      size="${args.size || nothing}"
      ><span>Label</span><pds-icon-x slot="icon-right"></pds-icon-x
    ></pds-button>`,
};
