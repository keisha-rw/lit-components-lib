import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';
import { useRef } from 'react';
import { PdsSecondaryNavigation } from './secondary-navigation';
import { PdsSecondaryNavigationLevelOne } from '../secondary-navigation-level-one/secondary-navigation-level-one';
import { PdsSecondaryNavigationLevelTwo } from '../secondary-navigation-level-two/secondary-navigation-level-two';
import { PdsList } from '../list/list';
import { PdsListItem } from '../list-item/list-item';
import { PdsSecondaryNavigationLink } from '../secondary-navigation-link/secondary-navigation-link';

export default {
  title: 'Components/Secondary navigation',
  component: PdsSecondaryNavigation,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: [
        'pds-secondary-navigation-dropdown-close',
        'pds-secondary-navigation-dropdown-open',
        'pds-secondary-navigation-dropdown-link-click',
        'pds-secondary-navigation-link-click',
      ],
    },
  },
  decorators: [
    (Story: JSX.IntrinsicAttributes) => (
      <div style={{ height: '450px' }}>
        {/* @ts-expect-error */}
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<typeof PdsSecondaryNavigation> = (args) => (
  <PdsSecondaryNavigation {...args}>
    <PdsSecondaryNavigationLevelOne title="Menu item one" columns="2col">
      <PdsSecondaryNavigationLevelTwo title="Category one">
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
        </PdsList>
      </PdsSecondaryNavigationLevelTwo>
      <PdsSecondaryNavigationLevelTwo title="Category two">
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
    <PdsSecondaryNavigationLevelOne title="Menu item two">
      <PdsSecondaryNavigationLevelTwo
        title="Link one"
        href="#"
        // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
        onClick={(e: any) =>
          action('pds-secondary-navigation-link-click')(e.detail)
        }
      />
      <PdsSecondaryNavigationLevelTwo
        title="Link two"
        href="#"
        // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
        onClick={(e: any) =>
          action('pds-secondary-navigation-link-click')(e.detail)
        }
      />
      <PdsSecondaryNavigationLevelTwo
        title="Link three"
        href="#"
        // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
        onClick={(e: any) =>
          action('pds-secondary-navigation-link-click')(e.detail)
        }
      />
      <PdsSecondaryNavigationLevelTwo
        title="Link four"
        href="#"
        // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
        onClick={(e: any) =>
          action('pds-secondary-navigation-link-click')(e.detail)
        }
      />
    </PdsSecondaryNavigationLevelOne>
    <PdsSecondaryNavigationLevelOne
      title="Menu item three"
      href={typeof window !== 'undefined' ? window.location.href : ''}
    />
  </PdsSecondaryNavigation>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Account/Product Name',
  description: 'Optional description placeholder',
};

const LogoTemplate: StoryFn<typeof PdsSecondaryNavigation> = (args) => {
  const menuItemOneRef = useRef<
    typeof PdsSecondaryNavigationLevelOne & { setAttribute: Function } & {
      getAttribute: Function;
    }
  >(null);
  const menuItemTwoRef = useRef<
    typeof PdsSecondaryNavigationLevelOne & { setAttribute: Function } & {
      getAttribute: Function;
    }
  >(null);
  const menuItemThreeRef = useRef<
    typeof PdsSecondaryNavigationLevelOne & { setAttribute: Function } & {
      getAttribute: Function;
    }
  >(null);

  const customActiveSectionFunc = () => {
    const refsArray = [menuItemOneRef, menuItemTwoRef, menuItemThreeRef];
    // Loop through the refs array and set the active section
    refsArray.forEach((ref) => {
      const pathFromWindowHref =
        typeof window !== 'undefined' ? window.location.pathname : '';

      if (ref?.current?.getAttribute('href') === pathFromWindowHref) {
        ref?.current?.setAttribute('activesection', 'true');
      }
    });
  };
  return (
    <PdsSecondaryNavigation {...args}>
      <PdsSecondaryNavigationLevelOne
        title="Menu item one"
        columns="2col"
        activeSectionCallback={customActiveSectionFunc}
        ref={menuItemOneRef}
      >
        <PdsSecondaryNavigationLevelTwo title="Category one">
          <PdsList spacing="sm" size="md">
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
          </PdsList>
        </PdsSecondaryNavigationLevelTwo>
        <PdsSecondaryNavigationLevelTwo title="Category two">
          <PdsList spacing="sm" size="md">
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
        activeSectionCallback={customActiveSectionFunc}
        ref={menuItemTwoRef}
      >
        <PdsSecondaryNavigationLevelTwo
          title="Link one"
          href="#"
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
        />
        <PdsSecondaryNavigationLevelTwo
          title="Link two"
          href="#"
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
        />
        <PdsSecondaryNavigationLevelTwo
          title="Link three"
          href="#"
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
        />
        <PdsSecondaryNavigationLevelTwo
          title="Link four"
          href="#"
          // @ts-expect-error There's not really an onClick for level two, but I need the actions to work
          onClick={(e: any) =>
            action('pds-secondary-navigation-link-click')(e.detail)
          }
        />
      </PdsSecondaryNavigationLevelOne>
      <PdsSecondaryNavigationLevelOne
        title="Menu item three"
        href={typeof window !== 'undefined' ? window.location.pathname : ''}
        activeSectionCallback={customActiveSectionFunc}
        ref={menuItemThreeRef}
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
  );
};

export const Logo = LogoTemplate.bind({});
Logo.args = {
  title: 'Account/Product Name',
  description: 'Optional description placeholder',
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

const SecondaryLinkActivePageTemplate: StoryFn<
  typeof PdsSecondaryNavigation
> = (args) => (
  <PdsSecondaryNavigation {...args}>
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
        href={typeof window !== 'undefined' ? window.location.href : ''}
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
  </PdsSecondaryNavigation>
);

export const SecondaryLinkActivePage = SecondaryLinkActivePageTemplate.bind({});
SecondaryLinkActivePage.args = {
  title: 'Account/Product Name',
  description: 'Optional description placeholder',
};
SecondaryLinkActivePage.storyName = 'With active secondary nav item link';
