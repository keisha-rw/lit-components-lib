import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsPrimaryNavigationMainMenuItem } from './primary-navigation-main-menu-item';
import { PdsList } from '../list/list';
import { PdsListItem } from '../list-item/list-item';
import { PdsGrid } from '../grid/grid';
import { PdsPrimaryNavigationDropdownLink } from '../primary-navigation-dropdown-link/primary-navigation-dropdown-link';
import { PdsGridItem } from '../grid-item/grid-item';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';

export default {
  title:
    'Components/Primary navigation/Primary navigation main menu/Primary navigation main menu item',
  component: PdsPrimaryNavigationMainMenuItem,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the primary navigation main menu component.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // This is not an issue when it's contained properly within primary-navigation-main-menu
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
        ],
      },
    },
  },
};

const DropdownTemplate: StoryFn<
  typeof PdsPrimaryNavigationMainMenuItem
> = () => (
  <PdsPrimaryNavigationMainMenuItem
    dropdown
    text="Dropdown"
    onDropdownOpen={(e: any) =>
      action('pds-primary-navigation-main-menu-dropdown-open')(e.detail)
    }
    onDropdownClose={(e: any) =>
      action('pds-primary-navigation-main-menu-dropdown-close')(e.detail)
    }
  >
    <PdsList size="sm" spacing="sm">
      <PdsListItem>
        <PdsPrimaryNavigationDropdownLink href="#">
          This is a link
        </PdsPrimaryNavigationDropdownLink>
      </PdsListItem>
      <PdsListItem>
        <PdsPrimaryNavigationDropdownLink href="#">
          This is a link
        </PdsPrimaryNavigationDropdownLink>
      </PdsListItem>
      <PdsListItem>
        <PdsPrimaryNavigationDropdownLink href="#">
          This is a link
        </PdsPrimaryNavigationDropdownLink>
      </PdsListItem>
      <PdsListItem>
        <PdsPrimaryNavigationDropdownLink href="#">
          This is a link
        </PdsPrimaryNavigationDropdownLink>
      </PdsListItem>
    </PdsList>
  </PdsPrimaryNavigationMainMenuItem>
);
export const Dropdown = DropdownTemplate.bind({});
Dropdown.args = {};

const MegamenuTemplate: StoryFn<
  typeof PdsPrimaryNavigationMainMenuItem
> = () => (
  <PdsPrimaryNavigationMainMenuItem
    megamenu
    text="Megamenu"
    onDropdownOpen={(e: any) =>
      action('pds-primary-navigation-main-menu-dropdown-open')(e.detail)
    }
    onDropdownClose={(e: any) =>
      action('pds-primary-navigation-main-menu-dropdown-close')(e.detail)
    }
  >
    <PdsGrid variant="1-3up" break="slower">
      <PdsGridItem>
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Item 1
        </PlaceholderElement>
      </PdsGridItem>
      <PdsGridItem>
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Item 2
        </PlaceholderElement>
      </PdsGridItem>
      <PdsGridItem>
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Item 3
        </PlaceholderElement>
      </PdsGridItem>
      <PdsGridItem>
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Item 4
        </PlaceholderElement>
      </PdsGridItem>
      <PdsGridItem>
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Item 5
        </PlaceholderElement>
      </PdsGridItem>
      <PdsGridItem>
        <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
          Item 6
        </PlaceholderElement>
      </PdsGridItem>
    </PdsGrid>
  </PdsPrimaryNavigationMainMenuItem>
);
export const Megamenu = MegamenuTemplate.bind({});
Megamenu.args = {};

const LinkTemplate: StoryFn<typeof PdsPrimaryNavigationMainMenuItem> = () => (
  <PdsPrimaryNavigationMainMenuItem
    href="#"
    text="Link"
    onClick={(e: any) =>
      action('pds-primary-navigation-main-menu-link-click')(e.detail)
    }
  />
);
export const Link = LinkTemplate.bind({});
Link.args = {};

const LinkWithIconTemplate: StoryFn<
  typeof PdsPrimaryNavigationMainMenuItem
> = () => (
  <PdsPrimaryNavigationMainMenuItem
    href="#"
    text="Link"
    arrow
    onClick={(e: any) =>
      action('pds-primary-navigation-main-menu-link-click')(e.detail)
    }
  />
);
export const LinkWithIcon = LinkWithIconTemplate.bind({});
LinkWithIcon.args = {};
LinkWithIcon.storyName = 'Link with icon';
