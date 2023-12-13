import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './footer-contact-link';

const meta: Meta = {
  title: 'Components/Footer/Footer contact link',
  component: 'pds-footer-contact-link',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-link-click'],
    },
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the footer component when creating a super footer.',
      },
    },
  },
  render: (args) =>
    html`<pds-footer-contact-link
      linkCategory=${args.linkCategory}
      variant=${args.variant}
      ariaLabel=${args.ariaLabel}
      href="${args.href}"
    ></pds-footer-contact-link>`,
};
export default meta;

export const DefaultPhoneInverted: StoryObj = {
  name: 'Default phone inverted',
  args: {
    variant: 'inverted',
    linkCategory: 'phone',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};

export const DefaultEmail: StoryObj = {
  name: 'Default email',
  args: {
    variant: 'default',
    linkCategory: 'email',
  },
};

export const DefaultHelp: StoryObj = {
  name: 'Default help',
  args: {
    linkCategory: 'help',
  },
};

export const CustomPhone: StoryObj = {
  name: 'Custom phone',
  args: {
    linkCategory: 'phone',
    href: 'tel:123-456-7890',
    ariaLabel: 'Call us toll free',
  },
  render: (args) =>
    html`<pds-footer-contact-link
      linkCategory="${args.linkCategory}"
      ariaLabel="${args.ariaLabel}"
      href="${args.href}"
      >tol:123-456-7890</pds-footer-contact-link
    >`,
};
export const CustomEmailInverted: StoryObj = {
  name: 'Custom email inverted',
  args: {
    linkCategory: 'email',
    href: '#',
    ariaLabel: 'Send us a message',
    variant: 'inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
  render: (args) =>
    html`<pds-footer-contact-link
      variant="${args.variant}"
      ariaLabel="${args.ariaLabel}"
      linkCategory="${args.linkCategory}"
      href="${args.href}"
      >Get in touch</pds-footer-contact-link
    >`,
};

export const CustomHelp: StoryObj = {
  name: 'Custom help',
  args: {
    linkCategory: 'help',
    href: 'www.google.com',
    ariaLabel: 'Get some help',
  },
  render: (args) =>
    html`<pds-footer-contact-link
      linkCategory="${args.linkCategory}"
      ariaLabel="${args.ariaLabel}"
      href="${args.href}"
      >Additional information</pds-footer-contact-link
    >`,
};

export const CustomFax: StoryObj = {
  name: 'Custom fax',
  args: {
    linkCategory: 'fax',
    href: '123-456-7890',
    ariaLabel: 'Send us a fax',
  },
  render: (args) =>
    html`<pds-footer-contact-link
      linkCategory="${args.linkCategory}"
      ariaLabel="${args.ariaLabel}"
      href="${args.href}"
      >123-456-7890</pds-footer-contact-link
    >`,
};
