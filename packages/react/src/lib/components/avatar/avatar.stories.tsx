import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconUser } from '@keisha/design-system-icons-react';
// @ts-ignore
import { themedefault } from '@keisha/design-system-tokens';
import { PdsAvatar } from './avatar';
import { PdsLink } from '../link/link';
import { PdsHeading } from '../heading/heading';

export default {
  title: 'Components/Avatar',
  component: PdsAvatar,
  tags: ['autodocs'],
  parameters: {
    happo: {
      waitFor: () =>
        document
          ?.querySelector('pds-avatar')
          ?.querySelector('div[slot="media"]')
          ?.querySelector('img')?.complete,
    },
  },
};

const Template: StoryFn<typeof PdsAvatar> = (args) => (
  <PdsAvatar {...args}>
    <div slot="media">
      <img
        // @ts-expect-error env comes from vite
        src={`${import.meta.env.BASE_URL}image_small_40x40.svg`}
        alt="lorem ipsum"
      />
    </div>
    <div slot="heading">FirstName LastName</div>
    <div slot="details">Lorem ipsum dolor</div>
  </PdsAvatar>
);

export const Default = Template.bind({});
Default.args = {};

export const AvatarCentered = Template.bind({});
AvatarCentered.storyName = 'Centered';
AvatarCentered.args = { align: 'center' };

export const AvatarInverted = Template.bind({});
AvatarInverted.storyName = 'Inverted';
AvatarInverted.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
AvatarInverted.args = { inverted: true };

export const AvatarWithColorBar = Template.bind({});
AvatarWithColorBar.storyName = 'Color bar';
AvatarWithColorBar.args = { variant: 'color-bar' };

const AvatarWithIconTemplate: StoryFn<typeof PdsAvatar> = (args) => (
  <PdsAvatar {...args}>
    <div slot="media">
      <PdsIconUser
        size="default"
        color={themedefault.SemanticBorderInteractiveXstrong}
      />
    </div>
    <div slot="heading">FirstName LastName</div>
    <div slot="details">Lorem ipsum dolor</div>
  </PdsAvatar>
);

export const AvatarWithIcon = AvatarWithIconTemplate.bind({});
AvatarWithIcon.storyName = 'Icon';
AvatarWithIcon.args = {};

const AvatarH3Template: StoryFn<typeof PdsAvatar> = (args) => (
  <PdsAvatar {...args}>
    <div slot="media">
      <img
        // @ts-expect-error env comes from vite
        src={`${import.meta.env.BASE_URL}image_small_40x40.svg`}
        alt="lorem ipsum"
      />
    </div>
    <div slot="heading">
      <PdsHeading headingTag="h3" variant="label-default">
        FirstName LastName
      </PdsHeading>
    </div>
    <div slot="details">Lorem ipsum dolor</div>
  </PdsAvatar>
);

export const AvatarH3Example = AvatarH3Template.bind({});
AvatarH3Example.storyName = 'H3 heading';
AvatarH3Example.args = {};

const AvatarLinkTemplate: StoryFn<typeof PdsAvatar> = (args) => (
  <PdsAvatar {...args}>
    <div slot="media">
      <img
        // @ts-expect-error env comes from vite
        src={`${import.meta.env.BASE_URL}image_small_40x40.svg`}
        alt="lorem ipsum"
      />
    </div>
    <div slot="heading">
      <PdsLink href="">FirstName LastName</PdsLink>
    </div>
    <div slot="details">Lorem ipsum dolor</div>
  </PdsAvatar>
);

export const AvatarLinkExample = AvatarLinkTemplate.bind({});
AvatarLinkExample.storyName = 'Link';
AvatarLinkExample.args = {};

export const AvatarInvertedLinkExample = AvatarLinkTemplate.bind({});
AvatarInvertedLinkExample.parameters = {
  backgrounds: { default: 'BrandXStrong' },
};
AvatarInvertedLinkExample.storyName = 'Inverted with link';
AvatarInvertedLinkExample.args = { inverted: true };
