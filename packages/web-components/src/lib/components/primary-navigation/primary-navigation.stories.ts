import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './primary-navigation';
import '@keisha/design-system-icons-web/alert-circle';
import '@keisha/design-system-icons-web/bell';
import '../primary-navigation-main-menu-item/primary-navigation-main-menu-item';
import '../list/list';
import '../list-item/list-item';
import '../grid/grid';
import '../grid-item/grid-item';
import '../primary-navigation-dropdown-link/primary-navigation-dropdown-link';
import '../../../../.storybook/components/placeholder-element/placeholder-element';
import '../primary-navigation-main-menu/primary-navigation-main-menu';

const meta: Meta = {
  title: 'Components/Primary navigation',
  component: 'pds-primary-navigation',
  tags: ['autodocs'],
  parameters: {
    happo: {
      delay: 500,
    },
    layout: 'fullscreen',
    actions: {
      handles: [
        'pds-primary-navigation-item-click',
        'pds-primary-navigation-notification-link-click',
        'pds-primary-navigation-panel-open',
        'pds-primary-navigation-panel-close',
        'pds-primary-navigation-menu-button-open',
        'pds-primary-navigation-menu-button-close',
        'pds-primary-navigation-main-menu-dropdown-open',
        'pds-primary-navigation-main-menu-dropdown-close',
        'pds-primary-navigation-main-menu-link-click',
        'pds-primary-navigation-utility-menu-item-click',
      ],
    },
    a11y: {
      config: {
        rules: [
          {
            // None of the nested elements are interactive - this is a false positive.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/nested-interactive
            id: 'nested-interactive',
            enabled: false,
          },
          {
            // The skip link target will exist on real apps, but we don't have it in Storybook.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/skip-link
            id: 'skip-link',
            enabled: false,
          },
          {
            // Color contrast is sufficient - axe was having trouble grabbing the colors for this element.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'inverted'],
    },
    layoutContainerVariant: {
      control: 'select',
      options: ['default', 'narrow', ''],
    },
    layoutContainerRemovePadding: {
      control: 'text',
    },
    loginLink: {
      control: 'select',
      options: ['none', 'login', 'logout', 'customLogout'],
    },
    loginLinkVariant: {
      control: 'select',
      options: ['default', 'default-inverted', 'primary', 'primary-inverted'],
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
      variant="${args.variant || nothing}"
      includeAction="${args.includeAction || nothing}"
      messagesCount="${args.messagesCount || 0}"
      otherAlertsCount="${args.otherAlertsCount || nothing}"
      loginLink="${args.loginLink || nothing}"
      loginLinkVariant="${args.loginLinkVariant || nothing}"
      layoutContainerVariant="${args.layoutContainerVariant || nothing}"
      layoutContainerRemovePadding="${args.layoutContainerRemovePadding ||
      nothing}"
    >
      <pds-primary-navigation-main-menu
        slot="primary-navigation-main-menu"
        ariaLabel="Main navigation area"
      >
        <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item megamenu text="Megamenu">
          <pds-grid variant="1-3up" break="slower">
            <pds-grid-item>
              <placeholder-element>Item 1</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 2</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 3</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 4</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 5</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 6</placeholder-element>
            </pds-grid-item>
          </pds-grid>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item href="#"
          >Link</pds-primary-navigation-utility-menu-item
        ></pds-primary-navigation-utility-menu
      ></pds-primary-navigation
    >`,
} as Meta;

export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });

        document
          ?.querySelector('pds-primary-navigation')
          ?.shadowRoot?.querySelector('.pds-c-primary-navigation__inner')
          ?.querySelector('.pds-c-primary-navigation__buttons-nav')
          ?.querySelector('pds-button')
          ?.dispatchEvent(clickEvent);

        document
          ?.querySelector('pds-primary-navigation')
          ?.querySelectorAll('pds-primary-navigation-main-menu-item')[0]
          ?.shadowRoot?.querySelector('button')
          ?.dispatchEvent(clickEvent);
      },
      delay: 500,
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
      variant="${args.variant}"
      messagesCount="${0}"
      includeAction="search"
    >
      <pds-primary-navigation-main-menu
        slot="primary-navigation-main-menu"
        ariaLabel="Main navigation area"
      >
        <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item megamenu text="Megamenu">
          <pds-grid variant="1-3up" break="slower">
            <pds-grid-item>
              <placeholder-element>Item 1</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 2</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 3</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 4</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 5</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 6</placeholder-element>
            </pds-grid-item>
          </pds-grid>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item href="#"
          >Link</pds-primary-navigation-utility-menu-item
        ></pds-primary-navigation-utility-menu
      ><span slot="search"
        ><placeholder-element>Search slot</placeholder-element></span
      ></pds-primary-navigation
    >`,
};

export const DefaultWithNotifications: StoryObj = {
  name: 'Default with notifications',
  args: {
    variant: 'default',
    includeAction: 'notification',
    messagesCount: 5,
    otherAlertsCount: 33,
    loginLink: 'login',
    loginLinkVariant: 'primary',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });

        document
          ?.querySelector('pds-primary-navigation')
          ?.shadowRoot?.querySelector('.pds-c-primary-navigation__inner')
          ?.querySelector('.pds-c-primary-navigation__buttons-nav')
          ?.querySelector('pds-button')
          ?.dispatchEvent(clickEvent);

        document
          ?.querySelector('pds-primary-navigation')
          ?.querySelectorAll('pds-primary-navigation-main-menu-item')[1]
          ?.shadowRoot?.querySelector('button')
          ?.dispatchEvent(clickEvent);
      },
      delay: 500,
    },
  },
};

export const DefaultWith99PlusNotifications: StoryObj = {
  name: 'Default with 99+ notifications',
  args: {
    variant: 'default',
    includeAction: 'notification',
    messagesCount: 105,
    otherAlertsCount: 123,
    loginLink: 'login',
    loginLinkVariant: 'primary',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });

        document
          ?.querySelector('pds-primary-navigation')
          ?.shadowRoot?.querySelector('.pds-c-primary-navigation__inner')
          ?.querySelector('.pds-c-primary-navigation__icons-nav')
          ?.querySelector('pds-button')
          ?.dispatchEvent(clickEvent);
      },
      delay: 500,
    },
  },
};

export const Spanish: StoryObj = {
  name: 'Spanish',
  args: {
    variant: 'default',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
    lang: 'es',
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });

        document
          ?.querySelector('pds-primary-navigation')
          ?.shadowRoot?.querySelector('.pds-c-primary-navigation__inner')
          ?.querySelector('.pds-c-primary-navigation__icons-nav')
          ?.querySelector('pds-button')
          ?.dispatchEvent(clickEvent);
      },
      delay: 500,
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
      variant="${args.variant}"
      messagesCount="${0}"
      includeAction="search"
    >
      <pds-primary-navigation-main-menu
        slot="primary-navigation-main-menu"
        ariaLabel="Main navigation area"
      >
        <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item megamenu text="Megamenu">
          <pds-grid variant="1-3up" break="slower">
            <pds-grid-item>
              <placeholder-element>Item 1</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 2</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 3</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 4</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 5</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 6</placeholder-element>
            </pds-grid-item>
          </pds-grid>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item href="#"
          >Link</pds-primary-navigation-utility-menu-item
        ></pds-primary-navigation-utility-menu
      ><span slot="search"
        ><placeholder-element>Search slot</placeholder-element></span
      ></pds-primary-navigation
    >`,
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  args: {
    variant: 'inverted',
    includeAction: 'notification',
    messagesCount: 5,
    otherAlertsCount: 33,
    loginLink: 'logout',
    loginLinkVariant: 'primary-inverted',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
  },
};

export const InvertedWithLayoutContainer: StoryObj = {
  name: 'Inverted within layout container',
  args: {
    variant: 'inverted',
    includeAction: 'notification',
    messagesCount: 5,
    otherAlertsCount: 33,
    loginLink: 'logout',
    loginLinkVariant: 'primary-inverted',
    layoutContainerVariant: 'default',
    layoutContainerRemovePadding: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
  },
};

export const CustomLogo: StoryObj = {
  name: 'Custom logo',
  parameters: {
    backgrounds: {
      default: 'Default',
    },
  },
  render: () =>
    html`<pds-primary-navigation variant="default">
      <img
        slot="logo"
        width="158"
        height="80"
        src='data:image/svg+xml,&lt;svg xmlns="http://www.w3.org/2000/svg" width="312.52" height="41.425" viewBox="0 0 312.52 41.425"&gt;%0A  &lt;g id="Group_6145" data-name="Group 6145" transform="translate(-9 -22.999)"&gt;%0A    &lt;g id="src_img_logo-company-name-white-padded-standard" transform="translate(-5.12 10.279)"&gt;%0A      &lt;path id="Path_5705" data-name="Path 5705" d="M136.029,32.95a3.136,3.136,0,0,1-3.381,3.441c-1.547,0-2.494-.827-2.494-2.158,0-1.5,1.223-2.386,3.273-2.386a12.372,12.372,0,0,1,2.6.276v.827Zm0-2.722a11.906,11.906,0,0,0-2.938-.336c-3.549,0-5.659,1.715-5.659,4.544,0,2.494,1.99,4.16,4.88,4.16a4.97,4.97,0,0,0,4.041-1.834,2.672,2.672,0,0,0,2.722,1.834,4.245,4.245,0,0,0,1.547-.276l-.276-2.11a2.986,2.986,0,0,1-.719.108c-.671,0-.947-.336-.947-1V29.509c0-3.105-2.05-4.988-5.431-4.988a12.3,12.3,0,0,0-5.156,1.223l.827,2.158a8.066,8.066,0,0,1,3.885-1.055c2.1,0,3.213.947,3.213,2.77v.611Zm-26.27,8.093V24.857h-2.71V38.322Zm-1.331-15.407a1.715,1.715,0,0,0,0-3.429,1.716,1.716,0,1,0,0,3.429ZM146.22,36.271c-.947,0-1.271-.384-1.271-1.439V19.15h-2.722V35.228c0,2.158,1.223,3.381,3.489,3.381a4.244,4.244,0,0,0,1.547-.276l-.276-2.158a5.16,5.16,0,0,1-.767.1ZM100,26.955a6.114,6.114,0,0,1,3.441,1.283l1.211-1.99a7.55,7.55,0,0,0-4.76-1.715,6.7,6.7,0,0,0-6.822,7.038c0,4.268,2.662,7.038,6.654,7.038a7.458,7.458,0,0,0,4.928-1.715l-1.211-1.942a5.073,5.073,0,0,1-3.333,1.223c-2.6,0-4.268-1.774-4.268-4.6.012-2.782,1.679-4.616,4.16-4.616ZM85.876,24.521a5.41,5.41,0,0,0-4.316,2.05l-.228-1.715H79.053V38.322h2.722V30.78a3.5,3.5,0,0,1,3.489-3.825,2.8,2.8,0,0,1,3,3v8.369h2.71v-8.7a4.827,4.827,0,0,0-5.1-5.1ZM75.5,38.322V24.857h-2.71V38.322ZM74.185,22.915a1.715,1.715,0,0,0,0-3.429,1.716,1.716,0,1,0,0,3.429Zm-5.323,1.715A4.411,4.411,0,0,0,65.1,26.572l-.228-1.715H62.591V38.322h2.722V31.068c0-2.6,1.223-3.993,3.549-3.993a8.987,8.987,0,0,1,1.5.216l.324-2.326a4.742,4.742,0,0,0-1.822-.336Zm-18.4-2.266h3.381c2.554,0,4.041,1.271,4.041,3.549s-1.5,3.549-4.041,3.549H50.458v-7.1ZM47.64,19.977V38.322h2.83V31.835h3.765c3.873,0,6.486-2.386,6.486-5.923s-2.6-5.923-6.486-5.923l-6.594-.012Zm71.543,16.186a4.373,4.373,0,0,1-3.213-1.439V30.672a3.382,3.382,0,0,1,3.489-3.717c2.218,0,3.609,1.667,3.609,4.328-.012,3.105-1.451,4.88-3.885,4.88Zm.827-11.642a5.36,5.36,0,0,0-4.328,2.05l-.216-1.715h-2.278v18.9h2.722V37.267a5.9,5.9,0,0,0,3.7,1.331c3.717,0,6.211-3,6.211-7.314.012-4.041-2.326-6.762-5.815-6.762Z" transform="translate(6.67 1.279)" fill="%23002855"/&gt;%0A      &lt;path id="Path_5706" data-name="Path 5706" d="M133.544,21.726h.588a.469.469,0,1,0,0-.935h-.588v.935Zm-.671-1.487h1.355a1,1,0,0,1,1.091,1,.892.892,0,0,1-.671.911l.779,1.211h-.767l-.671-1.1h-.456v1.1h-.671l.012-3.117Zm1.175,3.813a2.254,2.254,0,1,0-2.254-2.254,2.159,2.159,0,0,0,2.254,2.254Zm0-5.012a2.644,2.644,0,0,1,2.758,2.758,2.758,2.758,0,1,1-5.515,0,2.644,2.644,0,0,1,2.758-2.758Z" transform="translate(23.315 1.258)" fill="%23002855"/&gt;%0A      &lt;path id="Path_5707" data-name="Path 5707" d="M47.919,26.808c0-8.129-6.343-14.088-15.035-14.088-10.695,0-18.764,8.357-18.764,19.316A22.263,22.263,0,0,0,34.335,54.145V39.565a9.514,9.514,0,0,1-9.016-9.688c0-5.072,3.393-8.741,8.069-8.741,4.28,0,7.182,2.674,7.182,6.63,0,3.513-2.23,5.791-6.235,6.4v5.4c8.237-.228,13.584-5.24,13.584-12.757Z" transform="translate(0)" fill="%23002855"/&gt;%0A    &lt;/g&gt;%0A    &lt;path id="Path_5790" data-name="Path 5790" d="M2.4,0H7.848c4.9,0,8.208-3.312,8.208-8.064,0-4.8-3.312-8.064-8.208-8.064H2.4ZM14.04-8.064a6.168,6.168,0,0,1-6.384,6.5H4.368V-14.568H7.656A6.168,6.168,0,0,1,14.04-8.064Zm4.272,2.232A5.847,5.847,0,0,0,24.384.288,9.816,9.816,0,0,0,28.7-.84l-.6-1.32a7.577,7.577,0,0,1-3.528.984,4.23,4.23,0,0,1-4.344-4.176h9.024a6.744,6.744,0,0,0,.024-.7c0-3.48-2.16-5.9-5.28-5.9C20.664-11.952,18.312-9.432,18.312-5.832ZM24-10.488c1.968,0,3.36,1.608,3.432,3.912h-7.2C20.424-8.928,21.912-10.488,24-10.488Zm7.3,1.8c0,4.368,6.7,2.664,6.7,5.616,0,1.128-1.032,1.9-2.592,1.9a10.04,10.04,0,0,1-3.744-.84L31.2-.6a12,12,0,0,0,4.344.888c2.568,0,4.32-1.392,4.32-3.36,0-4.464-6.672-2.736-6.672-5.616,0-1.08.984-1.8,2.5-1.8a8.875,8.875,0,0,1,3.36.768l.432-1.416a10.607,10.607,0,0,0-3.936-.816C33.048-11.952,31.3-10.584,31.3-8.688ZM42.816,0h1.9V-11.664h-1.9ZM42.48-15.216a1.229,1.229,0,0,0,1.3,1.272,1.222,1.222,0,0,0,1.272-1.272,1.222,1.222,0,0,0-1.272-1.272A1.229,1.229,0,0,0,42.48-15.216Zm16.248,3.552H57.192l-.24,1.944a4.467,4.467,0,0,0-4.008-2.232c-3.072,0-5.28,2.544-5.28,6.12s2.208,6.12,5.28,6.12a4.381,4.381,0,0,0,3.864-2.112V.288c0,2.04-1.656,3.456-3.984,3.456a10.216,10.216,0,0,1-3.888-.936l-.576,1.44A12.121,12.121,0,0,0,52.968,5.28c3.336,0,5.76-2.112,5.76-5.064Zm-9.1,5.832c0-2.664,1.56-4.56,3.768-4.56a3.394,3.394,0,0,1,3.432,3.624V-4.9A3.38,3.38,0,0,1,53.4-1.272C51.192-1.272,49.632-3.144,49.632-5.832ZM62.5,0h1.9V-6.576a3.523,3.523,0,0,1,3.528-3.768A2.924,2.924,0,0,1,70.992-7.32V0h1.92V-7.608a4.209,4.209,0,0,0-4.44-4.344,4.565,4.565,0,0,0-4.2,2.424l-.24-2.136H62.5ZM81.672-12.1c0,5.952,9.408,3.552,9.408,7.968,0,1.68-1.536,2.808-3.912,2.808a14.893,14.893,0,0,1-5.112-1.2l-.48,1.536A15.573,15.573,0,0,0,87.312.288c3.408,0,5.736-1.8,5.736-4.416,0-6.1-9.432-3.648-9.432-7.968,0-1.632,1.536-2.712,3.84-2.712A12.083,12.083,0,0,1,91.992-13.8l.48-1.536a14.114,14.114,0,0,0-5.16-1.08C83.976-16.416,81.672-14.64,81.672-12.1Zm24.144.432H103.8l-3.624,9.456-3.744-9.456H94.44L99.264-.1l-.6,1.512c-.624,1.632-1.32,2.3-2.5,2.3a4.759,4.759,0,0,1-1.176-.192l-.264,1.536a7.109,7.109,0,0,0,1.632.216c1.872,0,3.072-1.1,4.032-3.528Zm1.392,2.976c0,4.368,6.7,2.664,6.7,5.616,0,1.128-1.032,1.9-2.592,1.9a10.04,10.04,0,0,1-3.744-.84L107.112-.6a12,12,0,0,0,4.344.888c2.568,0,4.32-1.392,4.32-3.36,0-4.464-6.672-2.736-6.672-5.616,0-1.08.984-1.8,2.5-1.8a8.875,8.875,0,0,1,3.36.768l.432-1.416a10.607,10.607,0,0,0-3.936-.816C108.96-11.952,107.208-10.584,107.208-8.688Zm14.28-6.432h-1.9v3.456h-2.424v1.512h2.424V-3.12A3.289,3.289,0,0,0,123.1.288a9.021,9.021,0,0,0,2.328-.312l-.264-1.488a7.254,7.254,0,0,1-1.656.24,1.915,1.915,0,0,1-2.016-2.016v-6.864h3.672v-1.512h-3.672Zm5.16,9.288A5.847,5.847,0,0,0,132.72.288,9.816,9.816,0,0,0,137.04-.84l-.6-1.32a7.577,7.577,0,0,1-3.528.984,4.23,4.23,0,0,1-4.344-4.176h9.024a6.748,6.748,0,0,0,.024-.7c0-3.48-2.16-5.9-5.28-5.9C129-11.952,126.648-9.432,126.648-5.832Zm5.688-4.656c1.968,0,3.36,1.608,3.432,3.912h-7.2C128.76-8.928,130.248-10.488,132.336-10.488ZM140.376,0h1.9V-6.768a3.333,3.333,0,0,1,3.336-3.576,2.735,2.735,0,0,1,2.88,2.832V0h1.92V-6.768a3.333,3.333,0,0,1,3.336-3.576A2.728,2.728,0,0,1,156.6-7.512V0h1.92V-7.8a4.033,4.033,0,0,0-4.248-4.152A4.824,4.824,0,0,0,150-9.408a3.9,3.9,0,0,0-3.84-2.544,4.405,4.405,0,0,0-4.008,2.328l-.24-2.04h-1.536Z" transform="translate(163 50)" fill="%23002855"/&gt;%0A  &lt;/g&gt;%0A&lt;/svg&gt;%0A'
        alt="Company Co Design System" />
      <pds-primary-navigation-main-menu
        slot="primary-navigation-main-menu"
        ariaLabel="main navigation area"
      >
        <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item text="Megamenu" megamenu>
          <placeholder-element>Megamenu content</placeholder-element>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
    ></pds-primary-navigation>`,
};

export const InvertedWithoutDropdowns: StoryObj = {
  name: 'Inverted without dropdowns',
  args: {
    variant: 'inverted',
    loginLinkVariant: 'primary-inverted',
    loginLink: 'logout',
    layoutContainerVariant: 'default',
  },
  render: (args) =>
    html`<pds-primary-navigation
      variant="${args.variant}"
      loginLinkVariant="${args.loginLinkVariant}"
      loginLink="${args.loginLink}"
      layoutContainerVariant="${args.layoutContainerVariant}"
    >
      <pds-primary-navigation-main-menu
        ariaLabel="Main nav area"
        slot="primary-navigation-main-menu"
      >
        <pds-primary-navigation-main-menu-item
          href="#"
          text="This is a link"
        ></pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="This is a link"
        ></pds-primary-navigation-main-menu-item>
      </pds-primary-navigation-main-menu>
      <pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
      >
        <pds-primary-navigation-utility-menu-item href="#"
          >This is a link</pds-primary-navigation-utility-menu-item
        >
        <pds-primary-navigation-utility-menu-item href="#"
          >This is a link</pds-primary-navigation-utility-menu-item
        >
      </pds-primary-navigation-utility-menu>
    </pds-primary-navigation>`,
};

export const InvertedWithSearch: StoryObj = {
  name: 'Inverted with search',
  args: {
    variant: 'inverted',
    loginLinkVariant: 'primary-inverted',
    loginLink: 'logout',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
      variant="${args.variant}"
      messagesCount="${0}"
      loginLinkVariant="${args.loginLinkVariant}"
      loginLink="${args.loginLink}"
      includeAction="search"
    >
      <pds-primary-navigation-main-menu
        slot="primary-navigation-main-menu"
        ariaLabel="Main navigation area"
      >
        <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item megamenu text="Megamenu">
          <pds-grid variant="1-3up" break="slower">
            <pds-grid-item>
              <placeholder-element>Item 1</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 2</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 3</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 4</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 5</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 6</placeholder-element>
            </pds-grid-item>
          </pds-grid>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          href="#"
          text="Link"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item href="#"
          >Link</pds-primary-navigation-utility-menu-item
        ></pds-primary-navigation-utility-menu
      ><span slot="search"
        ><placeholder-element>Search slot</placeholder-element></span
      ></pds-primary-navigation
    >`,
};

export const DefaultWithoutLinks: StoryObj = {
  name: 'No navigation links',
  args: {
    variant: 'default',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
      variant="${args.variant}"
      messagesCount="${0}"
      includeAction="search"
    >
      <pds-primary-navigation-main-menu slot="primary-navigation-main-menu">
      </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
      ></pds-primary-navigation-utility-menu
      ><span slot="search"
        ><placeholder-element>Search slot</placeholder-element></span
      ></pds-primary-navigation
    >`,
};

export const LinkWithIcon: StoryObj = {
  name: 'Link with icon',
  args: {
    variant: 'default',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
      variant="${args.variant}"
      messagesCount="${0}"
      includeAction="search"
    >
      <pds-primary-navigation-main-menu
        slot="primary-navigation-main-menu"
        ariaLabel="Main navigation area"
      >
        <pds-primary-navigation-main-menu-item dropdown text="Dropdown">
          <pds-list size="sm" spacing="sm">
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-primary-navigation-dropdown-link href="#"
                >This is a link</pds-primary-navigation-dropdown-link
              ></pds-list-item
            >
          </pds-list>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item megamenu text="Megamenu">
          <pds-grid variant="1-3up" break="slower">
            <pds-grid-item>
              <placeholder-element>Item 1</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 2</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 3</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 4</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 5</placeholder-element>
            </pds-grid-item>
            <pds-grid-item>
              <placeholder-element>Item 6</placeholder-element>
            </pds-grid-item>
          </pds-grid>
        </pds-primary-navigation-main-menu-item>
        <pds-primary-navigation-main-menu-item
          arrow
          href="#"
          text="Link"
        ></pds-primary-navigation-main-menu-item> </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
        ><pds-primary-navigation-utility-menu-item href="#"
          >Link</pds-primary-navigation-utility-menu-item
        ></pds-primary-navigation-utility-menu
      ><span slot="search"
        ><placeholder-element>Search slot</placeholder-element></span
      ></pds-primary-navigation
    >`,
};

export const CustomLogout: StoryObj = {
  name: 'Logout static',
  args: {
    loginLink: 'customLogout',
  },
  parameters: {
    backgrounds: {
      default: 'Default',
    },
  },
  render: (args) =>
    html`<pds-primary-navigation
      loginLink="${args.loginLink}"
      messagesCount="${0}"
      includeAction="search"
    >
      <pds-primary-navigation-main-menu slot="primary-navigation-main-menu">
      </pds-primary-navigation-main-menu
      ><pds-primary-navigation-utility-menu
        slot="primary-navigation-utility-menu"
      ></pds-primary-navigation-utility-menu
      ><span slot="search"
        ><placeholder-element>Search slot</placeholder-element></span
      ></pds-primary-navigation
    >`,
};
