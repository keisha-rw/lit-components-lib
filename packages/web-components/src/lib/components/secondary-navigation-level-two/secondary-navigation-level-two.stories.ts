import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './secondary-navigation-level-two';
import '../list/list';
import '../list-item/list-item';
import '../secondary-navigation-link/secondary-navigation-link';

const meta: Meta = {
  title: 'Components/Secondary navigation/Secondary navigation level two',
  component: 'pds-secondary-navigation-level-two',
  tags: ['autodocs'],
  parameters: {
    happo: false,
  },
  render: (args) =>
    html`<pds-secondary-navigation-level-two
      title="${args.title || nothing}"
      href="${args.href || nothing}"
    >
      <pds-list spacing="sm">
        <pds-list-item
          ><pds-secondary-navigation-link href="#"
            >Link one</pds-secondary-navigation-link
          ></pds-list-item
        >
        <pds-list-item
          ><pds-secondary-navigation-link href="#"
            >Link two</pds-secondary-navigation-link
          ></pds-list-item
        >
      </pds-list>
    </pds-secondary-navigation-level-two>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    title: 'Category one',
  },
};

export const Link: StoryObj = {
  name: 'Link',
  args: {
    title: 'Link',
    href: window.location.href,
  },
};
