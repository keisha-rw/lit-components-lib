import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './avatar';
import '../link/link';
import '@keisha/design-system-icons-web/user';

export default {
  title: 'Components/Avatar',
  component: 'pds-avatar',
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
  argTypes: {
    align: {
      control: 'select',
      options: ['center', 'default'],
    },
    variant: {
      control: 'select',
      options: ['default', 'color-bar'],
    },
  },
  render: (args) =>
    html`<pds-avatar
      align="${args.align || nothing}"
      ?inverted=${args.inverted}
      variant="${args.variant || nothing}"
    >
      <div slot="media">
        <img
          src="${process.env.IMAGES_PATH}image_small_40x40.svg"
          alt="lorem ipsum"
        />
      </div>
      <div slot="heading">
        <span>FirstName LastName</span>
      </div>
      <div slot="details">Lorem ipsum dolor</div>
    </pds-avatar>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const AvatarCentered: StoryObj = {
  name: 'Centered',
  args: { align: 'center' },
};

export const AvatarInverted: StoryObj = {
  name: 'Inverted',
  args: { inverted: true },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
  },
};

export const AvatarWithColorBar: StoryObj = {
  name: 'Color bar',
  args: { variant: 'color-bar' },
};

export const AvatarWithIcon: StoryObj = {
  name: 'Icon',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) =>
    html`<pds-avatar>
      <div slot="media">
        <pds-icon-user size="default"></pds-icon-user>
      </div>
      <div slot="heading">
        <span>FirstName LastName</span>
      </div>
      <div slot="details">Lorem ipsum dolor</div>
    </pds-avatar>`,
  args: {},
};

export const AvatarH3Example: StoryObj = {
  name: 'H3 heading',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) =>
    html`<pds-avatar>
      <div slot="media">
        <img
          src="${process.env.IMAGES_PATH}image_small_40x40.svg"
          alt="lorem ipsum"
        />
      </div>
      <div slot="heading">
        <pds-heading headingTag="h3" variant="label-default"
          >FirstName LastName</pds-heading
        >
      </div>
      <div slot="details">Lorem ipsum dolor</div>
    </pds-avatar>`,
  args: {},
};

export const AvatarLinkExample: StoryObj = {
  name: 'Link',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) =>
    html`<pds-avatar>
      <div slot="media">
        <img
          src="${process.env.IMAGES_PATH}image_small_40x40.svg"
          alt="lorem ipsum"
        />
      </div>
      <div slot="heading">
        <pds-link href="">FirstName LastName</pds-link>
      </div>
      <div slot="details">Lorem ipsum dolor</div>
    </pds-avatar>`,
  args: {},
};

export const AvatarInvertedLinkExample: StoryObj = {
  name: 'Inverted with link',
  render: (args) =>
    html`<pds-avatar .inverted="${args.inverted}">
      <div slot="media">
        <img
          src="${process.env.IMAGES_PATH}image_small_40x40.svg"
          alt="lorem ipsum"
        />
      </div>
      <div slot="heading">
        <pds-link href="">FirstName LastName</pds-link>
      </div>
      <div slot="details">Lorem ipsum dolor</div>
    </pds-avatar>`,
  args: {
    inverted: true,
  },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
  },
};
