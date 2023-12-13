import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './secondary-navigation';
import '../secondary-navigation-level-one/secondary-navigation-level-one';
import '../secondary-navigation-level-two/secondary-navigation-level-two';
import '../secondary-navigation-link/secondary-navigation-link';

const meta: Meta = {
  title: 'Components/Secondary navigation',
  component: 'pds-secondary-navigation',
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
  decorators: [(story) => html`<div style="height: 450px">${story()}</div>`],
  render: (args) =>
    html`<pds-secondary-navigation
      title="${args.title || nothing}"
      description="${args.description || nothing}"
    >
      <pds-secondary-navigation-level-one title="Menu item one" columns="2col">
        <pds-secondary-navigation-level-two title="Category one">
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
            <pds-list-item
              ><pds-secondary-navigation-link href="#" variant="emphasis"
                >Link three</pds-secondary-navigation-link
              ></pds-list-item
            >
          </pds-list>
        </pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two title="Category two">
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
            <pds-list-item
              ><pds-secondary-navigation-link href="#"
                >Link three</pds-secondary-navigation-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-secondary-navigation-link href="#"
                >Link four</pds-secondary-navigation-link
              ></pds-list-item
            >
          </pds-list>
        </pds-secondary-navigation-level-two></pds-secondary-navigation-level-one
      >
      <pds-secondary-navigation-level-one title="Menu item two">
        <pds-secondary-navigation-level-two
          title="Link one"
          href="#"
        ></pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two
          title="Link two"
          href="#"
        ></pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two
          title="Link three"
          href="#"
        ></pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two
          title="Link four"
          href="#"
        ></pds-secondary-navigation-level-two>
      </pds-secondary-navigation-level-one>
      <pds-secondary-navigation-level-one
        title="Menu item three"
        href="${window.location.href}"
      ></pds-secondary-navigation-level-one>
      ${args.logo || nothing}
    </pds-secondary-navigation>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    title: 'Account/Product Name',
    description: 'Optional description placeholder',
  },
};

export const Logo: StoryObj = {
  name: 'Logo',
  args: {
    title: 'Account/Product Name',
    description: 'Optional description placeholder',
    logo: html`<span slot="logo">
      <svg width="160" height="104">
        <rect
          width="160"
          height="104"
          style="fill:#000000;stroke-width:3;stroke:rgb(0,0,0)"
        />
      </svg>
    </span>`,
  },
  parameters: {
    happo: {
      waitFor: () => {
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        document.querySelector('pds-secondary-navigation')?.updateComplete;
      },
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        const component = document?.querySelector('pds-secondary-navigation');

        const collapsibleEl = component?.shadowRoot
          ?.querySelector('pds-collapsible')
          ?.shadowRoot?.querySelector('.pds-c-collapsible__summary');

        collapsibleEl?.dispatchEvent(clickEvent);

        component
          ?.querySelectorAll('pds-secondary-navigation-level-one')
          .forEach(
            (el) =>
              el?.shadowRoot
                ?.querySelector('pds-collapsible')
                ?.shadowRoot?.querySelector('.pds-c-collapsible__summary')
                ?.dispatchEvent(clickEvent),
          );

        component
          ?.querySelectorAll('pds-secondary-navigation-level-two')[0]
          ?.shadowRoot?.querySelector('pds-collapsible')
          ?.shadowRoot?.querySelector('.pds-c-collapsible__summary')
          ?.dispatchEvent(clickEvent);

        const buttonEl = document
          ?.querySelector('pds-secondary-navigation')
          ?.querySelectorAll('pds-secondary-navigation-level-one')[0]
          ?.shadowRoot?.querySelector('button');

        buttonEl?.dispatchEvent(clickEvent);
      },
      delay: 1000,
    },
  },
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

export const SecondaryLinkActivePage: StoryObj = {
  name: 'With active secondary nav item link',
  args: {
    title: 'Account/Product Name',
    description: 'Optional description placeholder',
  },
  render: (args) =>
    html`<pds-secondary-navigation
      title="${args.title || nothing}"
      description="${args.description || nothing}"
    >
      <pds-secondary-navigation-level-one
        title="Menu item one"
        columns="2col"
        .activeSectionCallback="${() => {}}"
      >
        <pds-secondary-navigation-level-two
          title="Category one"
          .activePageCallback="${customActivePageFunction}"
        >
          <pds-list spacing="sm">
            <pds-list-item
              ><pds-secondary-navigation-link href="/relative-path"
                >Link one</pds-secondary-navigation-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-secondary-navigation-link href="#"
                >Link two</pds-secondary-navigation-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-secondary-navigation-link href="#" variant="emphasis"
                >Link three</pds-secondary-navigation-link
              ></pds-list-item
            >
          </pds-list>
        </pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two
          title="Category two"
          .activePageCallback="${customActivePageFunction}"
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
            <pds-list-item
              ><pds-secondary-navigation-link href="#"
                >Link three</pds-secondary-navigation-link
              ></pds-list-item
            >
            <pds-list-item
              ><pds-secondary-navigation-link href="#"
                >Link four</pds-secondary-navigation-link
              ></pds-list-item
            >
          </pds-list>
        </pds-secondary-navigation-level-two></pds-secondary-navigation-level-one
      >
      <pds-secondary-navigation-level-one
        title="Menu item two"
        .activeSectionCallback="${() => {}}"
      >
        <pds-secondary-navigation-level-two
          .activePageCallback="${customActivePageFunction}"
          title="Link one"
          href="#"
        ></pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two
          .activePageCallback="${customActivePageFunction}"
          title="Link two"
          href="#"
        ></pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two
          .activePageCallback="${customActivePageFunction}"
          title="Link three"
          href="#"
        ></pds-secondary-navigation-level-two>
        <pds-secondary-navigation-level-two
          title="Link four"
          .activePageCallback="${customActivePageFunction}"
          href="${window.location.href}"
        ></pds-secondary-navigation-level-two>
      </pds-secondary-navigation-level-one>
      <pds-secondary-navigation-level-one
        title="Menu item three"
        .activeSectionCallback="${() => {}}"
        href="#"
      ></pds-secondary-navigation-level-one>
    </pds-secondary-navigation>`,
  parameters: {
    happo: {
      beforeScreenshot: () => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });

        const component = document?.querySelector('pds-secondary-navigation');

        const collapsibleEl = component?.shadowRoot
          ?.querySelector('pds-collapsible')
          ?.shadowRoot?.querySelector('.pds-c-collapsible__summary');

        collapsibleEl?.dispatchEvent(clickEvent);

        component
          ?.querySelectorAll('pds-secondary-navigation-level-one')
          .forEach(
            (el) =>
              el?.shadowRoot
                ?.querySelector('pds-collapsible')
                ?.shadowRoot?.querySelector('.pds-c-collapsible__summary')
                ?.dispatchEvent(clickEvent),
          );

        component
          ?.querySelectorAll('pds-secondary-navigation-level-two')[1]
          ?.shadowRoot?.querySelector('pds-collapsible')
          ?.shadowRoot?.querySelector('.pds-c-collapsible__summary')
          ?.dispatchEvent(clickEvent);

        const buttonEl = component
          ?.querySelectorAll('pds-secondary-navigation-level-one')[1]
          ?.shadowRoot?.querySelector('button');

        buttonEl?.dispatchEvent(clickEvent);
      },
      delay: 500,
    },
  },
};
