import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './secondary-navigation-level-one';
import '../secondary-navigation-level-two/secondary-navigation-level-two';

const meta: Meta = {
  title: 'Components/Secondary navigation/Secondary navigation level one',
  component: 'pds-secondary-navigation-level-one',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    a11y: {
      actions: {
        handles: [
          'pds-secondary-navigation-dropdown-close',
          'pds-secondary-navigation-dropdown-open',
        ],
      },
      config: {
        rules: [
          {
            // Since this is a subcomponent it confuses AXE
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
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
  render: (args) =>
    html`<pds-secondary-navigation-level-one
      title="${args.title || nothing}"
      href="${args.href || nothing}"
      columns="${args.columns || nothing}"
    >
      <pds-secondary-navigation-level-two title="Category one">
        <pds-list spacing="sm">
          <pds-list-item><pds-link href="#">Link one</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Link two</pds-link></pds-list-item>
          <pds-list-item
            ><pds-link href="#">Link three</pds-link></pds-list-item
          >
        </pds-list>
      </pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two title="Category two">
        <pds-list spacing="sm">
          <pds-list-item><pds-link href="#">Link one</pds-link></pds-list-item>
          <pds-list-item><pds-link href="#">Link two</pds-link></pds-list-item>
          <pds-list-item
            ><pds-link href="#">Link three</pds-link></pds-list-item
          >
          <pds-list-item><pds-link href="#">Link four</pds-link></pds-list-item>
        </pds-list>
      </pds-secondary-navigation-level-two></pds-secondary-navigation-level-one
    >`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    title: 'Menu item one',
    columns: '2col',
  },
};

export const Link: StoryObj = {
  name: 'Link',
  args: {
    title: 'Account',
    href: '#',
  },
};

export const ContainsOnlyLinks: StoryObj = {
  name: 'Contains only links',
  args: {
    title: 'Menu item one',
  },
  render: (args) =>
    html`<pds-secondary-navigation-level-one title="${args.title || nothing}">
      <pds-secondary-navigation-level-two
        title="Link one"
        href="#"
      ></pds-secondary-navigation-level-two>
      <pds-secondary-navigation-level-two title="Link two" href="#">
      </pds-secondary-navigation-level-two
      ><pds-secondary-navigation-level-two
        title="Link three"
        href="${window.location.href}"
      ></pds-secondary-navigation-level-two
    ></pds-secondary-navigation-level-one>`,
};
