import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { PdsPrimaryNavigation } from '../../../src/lib/components/primary-navigation/primary-navigation';
import { PdsPrimaryNavigationMainMenu } from '../../../src/lib/components/primary-navigation-main-menu/primary-navigation-main-menu';
import { PdsPrimaryNavigationMainMenuItem } from '../../../src/lib/components/primary-navigation-main-menu-item/primary-navigation-main-menu-item';
import { PdsList } from '../../../src/lib/components/list/list';
import { PdsListItem } from '../../../src/lib/components/list-item/list-item';
import { PdsPrimaryNavigationDropdownLink } from '../../../src/lib/components/primary-navigation-dropdown-link/primary-navigation-dropdown-link';
import { PdsGrid } from '../../../src/lib/components/grid/grid';
import { PdsGridItem } from '../../../src/lib/components/grid-item/grid-item';
import { PdsPrimaryNavigationUtilityMenu } from '../../../src/lib/components/primary-navigation-utility-menu/primary-navigation-utility-menu';
import { PdsPrimaryNavigationUtilityMenuItem } from '../../../src/lib/components/primary-navigation-utility-menu-item/primary-navigation-utility-menu-item';
import { PdsSecondaryNavigation } from '../../../src/lib/components/secondary-navigation/secondary-navigation';
import { PdsSecondaryNavigationLevelOne } from '../../../src/lib/components/secondary-navigation-level-one/secondary-navigation-level-one';
import { PdsSecondaryNavigationLevelTwo } from '../../../src/lib/components/secondary-navigation-level-two/secondary-navigation-level-two';
import { PdsSecondaryNavigationLink } from '../../../src/lib/components/secondary-navigation-link/secondary-navigation-link';

export default {
  title: 'Recipes/Page navigation',
  component: 'page-navigation',
  parameters: {
    options: { showPanel: false },
  },
  tags: ['autodocs'],
  argTypes: null,
};

const customActivePageFunction = () => {
  // Not a single link, but a list of links
  // Loop through links and determine if href matches the current url
  const links = document.querySelectorAll('pds-secondary-navigation-link');
  if (links) {
    links.forEach((link) => {
      if (link.getAttribute('href') === '/relative-path') {
        // Find level one parent of the current link
        const levelOneParent = link.closest(
          'pds-secondary-navigation-level-one',
        );
        levelOneParent?.setAttribute('activeSection', 'true');
        link.setAttribute('activePage', 'true');
        link.setAttribute('ariaCurrent', 'page');
      }
    });
  }
};

export const PageNavigation = () => (
  <div>
    <PdsPrimaryNavigation
      variant="inverted"
      includeAction="notification"
      messagesCount={5}
      otherAlertsCount={33}
      loginLinkVariant="primary-inverted"
      layoutContainerVariant="default"
      layoutContainerRemovePadding="md"
    >
      <PdsPrimaryNavigationMainMenu
        slot="primary-navigation-main-menu"
        aria-label="Main menu of navigation"
      >
        <PdsPrimaryNavigationMainMenuItem
          dropdown
          text="Dropdown"
          // TODO: This event was fired this way to get it to show up in storybook. Now that our events toggle -open/-close instead of
          // just "-click", we need to update this when we figure out a way to toggle events for react action logging in storybook.
          // onHandleClick={(e: any) =>
          //   action('pds-primary-navigation-main-menu-dropdown-click')(e.detail)
          // }
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
        <PdsPrimaryNavigationMainMenuItem
          megamenu
          text="Megamenu"
          // TODO: This event was fired this way to get it to show up in storybook. Now that our events toggle -open/-close instead of
          // just "-click", we need to update this when we figure out a way to toggle events for react action logging in storybook.
          // onHandleClick={(e: any) =>
          //   action('pds-primary-navigation-main-menu-dropdown-click')(e.detail)
          // }
        >
          <PdsGrid variant="1-3up" break="slower">
            <PdsGridItem>
              <PdsPrimaryNavigationDropdownLink href="#">
                Item 1
              </PdsPrimaryNavigationDropdownLink>
            </PdsGridItem>
            <PdsGridItem>
              <PdsPrimaryNavigationDropdownLink href="#">
                Item 2
              </PdsPrimaryNavigationDropdownLink>
            </PdsGridItem>
            <PdsGridItem>
              <PdsPrimaryNavigationDropdownLink href="#">
                Item 3
              </PdsPrimaryNavigationDropdownLink>
            </PdsGridItem>
            <PdsGridItem>
              <PdsPrimaryNavigationDropdownLink href="#">
                Item 4
              </PdsPrimaryNavigationDropdownLink>
            </PdsGridItem>
            <PdsGridItem>
              <PdsPrimaryNavigationDropdownLink href="#">
                Item 5
              </PdsPrimaryNavigationDropdownLink>
            </PdsGridItem>
            <PdsGridItem>
              <PdsPrimaryNavigationDropdownLink href="#">
                Item 6
              </PdsPrimaryNavigationDropdownLink>
            </PdsGridItem>
          </PdsGrid>
        </PdsPrimaryNavigationMainMenuItem>
        <PdsPrimaryNavigationMainMenuItem
          href="#"
          text="Link"
          onClick={(e: any) =>
            action('pds-primary-navigation-main-menu-link-click')(e.detail)
          }
        />
      </PdsPrimaryNavigationMainMenu>
      <PdsPrimaryNavigationUtilityMenu slot="primary-navigation-utility-menu">
        <PdsPrimaryNavigationUtilityMenuItem
          href="#"
          onHandleClick={(e: any) =>
            action('pds-primary-navigation-utility-menu-item-click')(e.detail)
          }
        >
          Link
        </PdsPrimaryNavigationUtilityMenuItem>
      </PdsPrimaryNavigationUtilityMenu>
    </PdsPrimaryNavigation>
    <PdsSecondaryNavigation
      title="Account/Product name"
      description="Optional description placeholder"
    >
      <PdsSecondaryNavigationLevelOne
        title="Menu item one"
        columns="2col"
        activeSectionCallback={() => {}}
      >
        <PdsSecondaryNavigationLevelTwo
          title="Category one"
          activePageCallback={customActivePageFunction}
        >
          <PdsList spacing="sm">
            <PdsListItem>
              <PdsSecondaryNavigationLink
                href="/relative-path"
                onClick={(e: any) =>
                  action('pds-secondary-navigation-link-click')(e.detail)
                }
              >
                Link one
              </PdsSecondaryNavigationLink>
            </PdsListItem>
            <PdsListItem>
              <PdsSecondaryNavigationLink
                href="#"
                onClick={(e: any) =>
                  action('pds-secondary-navigation-link-click')(e.detail)
                }
              >
                Link two
              </PdsSecondaryNavigationLink>
            </PdsListItem>
            <PdsListItem>
              <PdsSecondaryNavigationLink
                href="#"
                onClick={(e: any) =>
                  action('pds-secondary-navigation-link-click')(e.detail)
                }
              >
                Link three
              </PdsSecondaryNavigationLink>
            </PdsListItem>
          </PdsList>
        </PdsSecondaryNavigationLevelTwo>
        <PdsSecondaryNavigationLevelTwo
          title="Category two"
          activePageCallback={customActivePageFunction}
        >
          <PdsList spacing="sm">
            <PdsListItem>
              <PdsSecondaryNavigationLink
                href="#"
                onClick={(e: any) =>
                  action('pds-secondary-navigation-link-click')(e.detail)
                }
              >
                Link one
              </PdsSecondaryNavigationLink>
            </PdsListItem>
            <PdsListItem>
              <PdsSecondaryNavigationLink
                href="#"
                onClick={(e: any) =>
                  action('pds-secondary-navigation-link-click')(e.detail)
                }
              >
                Link two
              </PdsSecondaryNavigationLink>
            </PdsListItem>
            <PdsListItem>
              <PdsSecondaryNavigationLink
                href="#"
                onClick={(e: any) =>
                  action('pds-secondary-navigation-link-click')(e.detail)
                }
              >
                Link three
              </PdsSecondaryNavigationLink>
            </PdsListItem>
            <PdsListItem>
              <PdsSecondaryNavigationLink
                href="#"
                onClick={(e: any) =>
                  action('pds-secondary-navigation-link-click')(e.detail)
                }
              >
                Link four
              </PdsSecondaryNavigationLink>
            </PdsListItem>
          </PdsList>
        </PdsSecondaryNavigationLevelTwo>
      </PdsSecondaryNavigationLevelOne>
      <PdsSecondaryNavigationLevelOne
        title="Menu item two"
        activeSectionCallback={() => {}}
      >
        <PdsSecondaryNavigationLevelTwo
          title="Link one"
          href={window.location.href}
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
          activePageCallback={customActivePageFunction}
        />
        <PdsSecondaryNavigationLevelTwo
          title="Link two"
          href="#"
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
          activePageCallback={customActivePageFunction}
        />
        <PdsSecondaryNavigationLevelTwo
          title="Link three"
          href="#"
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
          activePageCallback={customActivePageFunction}
        />
        <PdsSecondaryNavigationLevelTwo
          title="Link four"
          href="#"
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
          activePageCallback={customActivePageFunction}
        />
      </PdsSecondaryNavigationLevelOne>
      <PdsSecondaryNavigationLevelOne
        title="Menu item three"
        href="#"
        activeSectionCallback={() => {}}
      />
      <span slot="logo">
        <svg width="160" height="104">
          <rect
            width="160"
            height="104"
            style={{ fill: '#000000', stroke: 'rgb(0,0,0)' }}
          />
        </svg>
      </span>
    </PdsSecondaryNavigation>
  </div>
);
PageNavigation.storyName = 'Default';
