import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsFooterContactLink } from './footer-contact-link';

export default {
  title: 'Components/Footer/Footer contact link',
  component: PdsFooterContactLink,
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
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsFooterContactLink> = (args) => (
  <PdsFooterContactLink {...args} />
);

export const DefaultPhoneInverted = Template.bind({});
DefaultPhoneInverted.args = {
  variant: 'inverted',
  linkCategory: 'phone',
};
DefaultPhoneInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
DefaultPhoneInverted.storyName = 'Default phone inverted';

export const DefaultEmail = Template.bind({});
DefaultEmail.args = {
  variant: 'default',
  linkCategory: 'email',
};
DefaultEmail.storyName = 'Default email';

export const DefaultHelp = Template.bind({});
DefaultHelp.args = {
  variant: 'default',
  linkCategory: 'help',
};
DefaultHelp.storyName = 'Default help';

const CustomPhoneTemplate: StoryFn<typeof PdsFooterContactLink> = () => (
  <PdsFooterContactLink
    linkCategory="phone"
    href="tel:123-456-7890"
    ariaLabel="Call us toll free"
  >
    tol:123-456-7890
  </PdsFooterContactLink>
);

export const CustomPhone = CustomPhoneTemplate.bind({});
CustomPhone.storyName = 'Custom phone';

const CustomEmailInvertedTemplate: StoryFn<
  typeof PdsFooterContactLink
> = () => (
  <PdsFooterContactLink
    linkCategory="email"
    variant="inverted"
    href="#"
    ariaLabel="Send us a message"
  >
    Get in touch
  </PdsFooterContactLink>
);

export const CustomEmailInverted = CustomEmailInvertedTemplate.bind({});
CustomEmailInverted.storyName = 'Custom email inverted';
CustomEmailInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};

const CustomHelpTemplate: StoryFn<typeof PdsFooterContactLink> = () => (
  <PdsFooterContactLink
    linkCategory="help"
    href="www.google.com"
    ariaLabel="Get some help"
  >
    Additional information
  </PdsFooterContactLink>
);

export const CustomHelp = CustomHelpTemplate.bind({});
CustomHelp.storyName = 'Custom help';

const CustomFaxTemplate: StoryFn<typeof PdsFooterContactLink> = () => (
  <PdsFooterContactLink
    linkCategory="fax"
    href="123-456-7890"
    ariaLabel="Send us a fax"
  >
    123-456-7890
  </PdsFooterContactLink>
);

export const CustomFax = CustomFaxTemplate.bind({});
CustomFax.storyName = 'Custom fax';
