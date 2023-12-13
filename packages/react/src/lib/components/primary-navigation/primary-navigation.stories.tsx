import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PlaceholderElement } from '../../../../.storybook/components/placeholder-element/placeholder-element';
import { PdsPrimaryNavigation } from './primary-navigation';
import { PdsPrimaryNavigationMainMenu } from '../primary-navigation-main-menu/primary-navigation-main-menu';
import { PdsPrimaryNavigationMainMenuItem } from '../primary-navigation-main-menu-item/primary-navigation-main-menu-item';
import { PdsPrimaryNavigationUtilityMenu } from '../primary-navigation-utility-menu/primary-navigation-utility-menu';
import { PdsPrimaryNavigationUtilityMenuItem } from '../primary-navigation-utility-menu-item/primary-navigation-utility-menu-item';
import { PdsPrimaryNavigationDropdownLink } from '../primary-navigation-dropdown-link/primary-navigation-dropdown-link';
import { PdsList } from '../list/list';
import { PdsListItem } from '../list-item/list-item';
import { PdsGrid } from '../grid/grid';
import { PdsGridItem } from '../grid-item/grid-item';

export default {
  title: 'Components/Primary navigation',
  component: PdsPrimaryNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: StoryFn<typeof PdsPrimaryNavigation> = (args) => (
  <PdsPrimaryNavigation
    {...args}
    onHandleClick={(e: any) =>
      action('pds-primary-navigation-item-click')(e.detail)
    }
    onNotificationLinkClick={(e: any) =>
      action('pds-primary-navigation-notification-link-click')(e.detail)
    }
    onPanelOpen={(e: any) =>
      action('pds-primary-navigation-panel-open')(e.detail)
    }
    onPanelClose={(e: any) =>
      action('pds-primary-navigation-panel-close')(e.detail)
    }
    onButtonOpen={(e: any) =>
      action('pds-primary-navigation-menu-button-open')(e.detail)
    }
    onButtonClose={(e: any) =>
      action('pds-primary-navigation-menu-button-close')(e.detail)
    }
  >
    <PdsPrimaryNavigationMainMenu
      slot="primary-navigation-main-menu"
      aria-label="Main navigation area"
    >
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
    <span slot="search">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Search slot
      </PlaceholderElement>
    </span>
  </PdsPrimaryNavigation>
);

const NotificationTemplate: StoryFn<typeof PdsPrimaryNavigation> = (args) => (
  <PdsPrimaryNavigation
    {...args}
    onHandleClick={(e: any) =>
      action('pds-primary-navigation-item-click')(e.detail)
    }
    onNotificationLinkClick={(e: any) =>
      action('pds-primary-navigation-notification-link-click')(e.detail)
    }
    onPanelOpen={(e: any) =>
      action('pds-primary-navigation-panel-open')(e.detail)
    }
    onPanelClose={(e: any) =>
      action('pds-primary-navigation-panel-close')(e.detail)
    }
    onButtonOpen={(e: any) =>
      action('pds-primary-navigation-menu-button-open')(e.detail)
    }
    onButtonClose={(e: any) =>
      action('pds-primary-navigation-menu-button-close')(e.detail)
    }
  >
    <PdsPrimaryNavigationMainMenu
      slot="primary-navigation-main-menu"
      aria-label="Main navigation area"
    >
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
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  loginLink: 'login',
  loginLinkVariant: 'primary',
  includeAction: 'search',
};

export const DefaultWithNotifications = NotificationTemplate.bind({});
DefaultWithNotifications.storyName = 'Default with notifications';
DefaultWithNotifications.args = {
  variant: 'default',
  includeAction: 'notification',
  messagesCount: 5,
  otherAlertsCount: 33,
  loginLink: 'login',
  loginLinkVariant: 'primary',
};
DefaultWithNotifications.parameters = {
  backgrounds: {
    default: 'Default',
  },
};

export const DefaultWith99PlusNotifications = NotificationTemplate.bind({});
DefaultWith99PlusNotifications.storyName = 'Default with 99+ notifications';
DefaultWith99PlusNotifications.args = {
  variant: 'default',
  includeAction: 'notification',
  messagesCount: 105,
  otherAlertsCount: 123,
  loginLink: 'login',
  loginLinkVariant: 'primary',
};
DefaultWith99PlusNotifications.parameters = {
  backgrounds: {
    default: 'Default',
  },
};

export const Spanish = Template.bind({});
Spanish.args = { variant: 'default', includeAction: 'search' };
Spanish.parameters = {
  backgrounds: {
    default: 'Default',
  },
  lang: 'es',
};

export const Inverted = NotificationTemplate.bind({});
Inverted.args = {
  variant: 'inverted',
  includeAction: 'notification',
  messagesCount: 5,
  otherAlertsCount: 33,
  loginLink: 'logout',
  loginLinkVariant: 'default-inverted',
};
Inverted.parameters = {
  backgrounds: {
    default: 'Default',
  },
};

export const InvertedWithLayoutContainer = NotificationTemplate.bind({});
InvertedWithLayoutContainer.storyName = 'Inverted within layout container';
InvertedWithLayoutContainer.args = {
  variant: 'inverted',
  includeAction: 'notification',
  messagesCount: 5,
  otherAlertsCount: 33,
  loginLink: 'logout',
  loginLinkVariant: 'primary-inverted',
  layoutContainerVariant: 'default',
  layoutContainerRemovePadding: 'md',
};
InvertedWithLayoutContainer.parameters = {
  backgrounds: {
    default: 'Default',
  },
};

const CustomLogoTemplate: StoryFn<typeof PdsPrimaryNavigation> = (args) => (
  <PdsPrimaryNavigation
    {...args}
    onHandleClick={(e: any) =>
      action('pds-primary-navigation-item-click')(e.detail)
    }
    onNotificationLinkClick={(e: any) =>
      action('pds-primary-navigation-notification-link-click')(e.detail)
    }
    onPanelOpen={(e: any) =>
      action('pds-primary-navigation-panel-open')(e.detail)
    }
    onPanelClose={(e: any) =>
      action('pds-primary-navigation-panel-close')(e.detail)
    }
    onButtonOpen={(e: any) =>
      action('pds-primary-navigation-menu-button-open')(e.detail)
    }
    onButtonClose={(e: any) =>
      action('pds-primary-navigation-menu-button-close')(e.detail)
    }
  >
    {/* @ts-expect-error */}
    <svg slot="logo" width="144" height="58">
      <rect
        width="144"
        height="58"
        style={{ fill: '#000000', stroke: 'rgb(0,0,0)' }}
      />
    </svg>
    <PdsPrimaryNavigationMainMenu
      slot="primary-navigation-main-menu"
      aria-label="Main navigation area"
    >
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
);

export const CustomLogo = CustomLogoTemplate.bind({});
CustomLogo.storyName = 'Custom logo';
CustomLogo.parameters = {
  backgrounds: {
    default: 'Default',
  },
};

const InvertedWithoutDropdownsTemplate: StoryFn<typeof PdsPrimaryNavigation> = (
  args,
) => (
  <PdsPrimaryNavigation
    {...args}
    onHandleClick={(e: any) =>
      action('pds-primary-navigation-item-click')(e.detail)
    }
    onNotificationLinkClick={(e: any) =>
      action('pds-primary-navigation-notification-link-click')(e.detail)
    }
    onPanelOpen={(e: any) =>
      action('pds-primary-navigation-panel-open')(e.detail)
    }
    onPanelClose={(e: any) =>
      action('pds-primary-navigation-panel-close')(e.detail)
    }
    onButtonOpen={(e: any) =>
      action('pds-primary-navigation-menu-button-open')(e.detail)
    }
    onButtonClose={(e: any) =>
      action('pds-primary-navigation-menu-button-close')(e.detail)
    }
  >
    <PdsPrimaryNavigationMainMenu
      aria-label="Main nav area"
      slot="primary-navigation-main-menu"
    >
      <PdsPrimaryNavigationMainMenuItem
        href="#"
        text="This is a link"
        onClick={(e: any) =>
          action('pds-primary-navigation-main-menu-link-click')(e.detail)
        }
      />
    </PdsPrimaryNavigationMainMenu>
    <PdsPrimaryNavigationMainMenu
      aria-label="Main navigation area"
      slot="primary-navigation-main-menu"
    >
      <PdsPrimaryNavigationMainMenuItem
        href="#"
        text="This is a link"
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
        This is a link
      </PdsPrimaryNavigationUtilityMenuItem>
      <PdsPrimaryNavigationUtilityMenuItem
        href="#"
        onHandleClick={(e: any) =>
          action('pds-primary-navigation-utility-menu-item-click')(e.detail)
        }
      >
        This is a link
      </PdsPrimaryNavigationUtilityMenuItem>
    </PdsPrimaryNavigationUtilityMenu>
  </PdsPrimaryNavigation>
);

export const InvertedWithoutDropdowns = InvertedWithoutDropdownsTemplate.bind(
  {},
);
InvertedWithoutDropdowns.storyName = 'Inverted without dropdowns';
InvertedWithoutDropdowns.args = {
  variant: 'inverted',
  loginLinkVariant: 'default-inverted',
  loginLink: 'logout',
  layoutContainerVariant: 'default',
};
InvertedWithoutDropdowns.parameters = {
  backgrounds: {
    default: 'Default',
  },
};

export const InvertedWithSearch = Template.bind({});
InvertedWithSearch.storyName = 'Inverted with search';
InvertedWithSearch.args = {
  variant: 'inverted',
  loginLink: 'logout',
  loginLinkVariant: 'primary-inverted',
  includeAction: 'search',
};

const LinkWithIconTemplate: StoryFn<typeof PdsPrimaryNavigation> = (args) => (
  <PdsPrimaryNavigation
    {...args}
    onHandleClick={(e: any) =>
      action('pds-primary-navigation-item-click')(e.detail)
    }
    onNotificationLinkClick={(e: any) =>
      action('pds-primary-navigation-notification-link-click')(e.detail)
    }
    onPanelOpen={(e: any) =>
      action('pds-primary-navigation-panel-open')(e.detail)
    }
    onPanelClose={(e: any) =>
      action('pds-primary-navigation-panel-close')(e.detail)
    }
    onButtonOpen={(e: any) =>
      action('pds-primary-navigation-menu-button-open')(e.detail)
    }
    onButtonClose={(e: any) =>
      action('pds-primary-navigation-menu-button-close')(e.detail)
    }
  >
    <PdsPrimaryNavigationMainMenu
      slot="primary-navigation-main-menu"
      aria-label="Main navigation area"
    >
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
      <PdsPrimaryNavigationMainMenuItem
        arrow
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
    <span slot="search">
      <PlaceholderElement styleModifier="pds-u-margin-bottom-0">
        Search slot
      </PlaceholderElement>
    </span>
  </PdsPrimaryNavigation>
);

export const LinkWithIcon = LinkWithIconTemplate.bind({});
LinkWithIcon.storyName = 'Link with icon';
LinkWithIcon.args = {
  variant: 'default',
  loginLink: 'login',
  loginLinkVariant: 'primary',
  includeAction: 'search',
};

export const CustomLogout = LinkWithIconTemplate.bind({});
CustomLogout.storyName = 'Custom logout';
CustomLogout.args = {
  loginLink: 'customLogout',
  includeAction: 'search',
};
