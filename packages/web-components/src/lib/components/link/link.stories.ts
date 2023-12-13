import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import '@keisha/design-system-icons-web/check';
import '@keisha/design-system-icons-web/more-horizontal';
import './link';

export default {
  title: 'Components/Link',
  component: 'pds-link',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'emphasis', 'inverted', 'emphasis-inverted'],
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'lg', 'xl'],
    },
    download: {
      control: 'boolean',
    },
    rel: {
      control: 'text',
    },
    hreflang: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
    type: {
      control: 'text',
    },
    button: {
      control: 'select',
      options: [
        'default',
        'default-inverted',
        'primary',
        'primary-inverted',
        'icon',
        'icon-inverted',
        '',
      ],
    },
  },
  render: (args) =>
    html`<pds-link
      variant="${args.variant || nothing}"
      size="${args.size || nothing}"
      href="${args.href || nothing}"
      download="${args.download || nothing}"
      rel="${args.rel || nothing}"
      hreflang="${args.hreflang || nothing}"
      target="${args.target || nothing}"
      ariaLabel="${args.ariaLabel || nothing}"
      role="${args.role || nothing}"
      type="${args.type || nothing}"
      button="${args.button || nothing}"
      ?hover="${args.hover}"
      ><span>Link text</span></pds-link
    >`,
  parameters: {
    actions: {
      handles: ['pds-link-click'],
    },
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
    size: 'default',
    href: 'https://www.google.com',
  },
};

export const DefaultInverted: StoryObj = {
  name: 'Default inverted',
  args: {
    variant: 'inverted',
    size: 'default',
    href: 'https://www.google.com',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const Emphasis: StoryObj = {
  name: 'Emphasis',
  args: {
    variant: 'emphasis',
    size: 'default',
    href: 'https://www.google.com',
  },
};

export const EmphasisInverted: StoryObj = {
  name: 'Emphasis inverted',
  args: {
    variant: 'emphasis-inverted',
    size: 'default',
    href: 'https://www.google.com',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const IconLeft: StoryObj = {
  name: 'Icon left',
  args: { size: 'default' },
  render: () =>
    html`<pds-link href="https://www.google.com">
      <pds-icon-check slot="icon-left"></pds-icon-check>
      <span>Link text</span></pds-link
    >`,
};

export const IconRight: StoryObj = {
  name: 'Icon right',
  args: { size: 'default' },
  render: () =>
    html`<pds-link href="https://www.google.com">
      <span>Link text</span><pds-icon-check slot="icon-right"></pds-icon-check
    ></pds-link>`,
};

export const Download: StoryObj = {
  name: 'Download',
  args: { download: true, href: 'https://www.google.com' },
};

export const HoverTriggered: StoryObj = {
  name: 'Hover triggered',
  args: { hover: true, href: 'https://www.google.com' },
};

export const ButtonLinkDefault: StoryObj = {
  name: 'Button link default',
  args: {
    button: 'default',
    href: 'https://www.google.com',
  },
};

export const ButtonLinkDefaultSmall: StoryObj = {
  name: 'Button link default small',
  args: {
    button: 'default',
    href: 'https://www.google.com',
    size: 'sm',
  },
};

export const ButtonLinkDefaultInverted: StoryObj = {
  name: 'Button link default inverted',
  args: {
    button: 'default-inverted',
    href: 'https://www.google.com',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
    a11y: {
      config: {
        rules: [
          {
            // Color contrast is sufficient - this is a false positive
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

export const ButtonLinkPrimary: StoryObj = {
  name: 'Button link primary',
  args: {
    button: 'primary',
    href: 'https://www.google.com',
  },
};

export const ButtonLinkPrimaryInverted: StoryObj = {
  name: 'Button link primary inverted',
  args: {
    button: 'primary-inverted',
    href: 'https://www.google.com',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const ButtonLinkIcon: StoryObj = {
  name: 'Button link icon',
  args: {
    button: 'icon',
    href: 'https://www.google.com',
  },
  render: (args) =>
    html`<pds-link
      href="${args.href}"
      button="${args.button}"
      role="link"
      ariaLabel="More actions"
    >
      <pds-icon-more-horizontal slot="icon-left"></pds-icon-more-horizontal>
    </pds-link>`,
};

export const ButtonLinkIconInverted: StoryObj = {
  name: 'Button link icon inverted',
  args: {
    button: 'icon-inverted',
    href: 'https://www.google.com',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
  render: (args) =>
    html`<pds-link
      href="${args.href}"
      button="${args.button}"
      role="link"
      ariaLabel="More actions"
    >
      <pds-icon-more-horizontal slot="icon-right"></pds-icon-more-horizontal>
    </pds-link>`,
};
