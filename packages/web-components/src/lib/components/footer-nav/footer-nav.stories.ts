import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './footer-nav';
import '../footer-nav-item/footer-nav-item';

export default {
  title: 'Components/Footer/Footer nav',
  component: 'pds-footer-nav',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the footer component when creating a super footer.',
      },
    },
  },
  render: (args) => {
    return html`<pds-footer-nav behavior="${args.behavior}">
      <pds-footer-nav-item label="Our company">
        <pds-list>
          <pds-list-item
            ><pds-link variant="default" href="#"
              >About us</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Investor relations</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >News room</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Sustainability</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Insights</pds-link
            ></pds-list-item
          >
        </pds-list></pds-footer-nav-item
      >
      <pds-footer-nav-item label="We're hiring"
        ><pds-list>
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Careers</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Global jobs</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Financial professional opportunities</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Internships</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Recent graduates</pds-link
            ></pds-list-item
          >
        </pds-list></pds-footer-nav-item
      >
      <pds-footer-nav-item label="Other sites"
        ><pds-list>
          <pds-list-item
            ><pds-link variant="default" href="#"
              >For dental providers</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >For financial professionals</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Company Co Asset Management</pds-link
            ></pds-list-item
          >
        </pds-list></pds-footer-nav-item
      >
    </pds-footer-nav>`;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    behavior: '3col',
  },
};

export const FourCols: StoryObj = {
  name: 'Four columns',
  args: {
    behavior: '4col',
  },
  render: (args) => {
    return html`<pds-footer-nav behavior="${args.behavior}">
      <pds-footer-nav-item label="Our company">
        <pds-list>
          <pds-list-item
            ><pds-link variant="default" href="#"
              >About us</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Investor relations</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >News room</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Sustainability</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Insights</pds-link
            ></pds-list-item
          >
        </pds-list></pds-footer-nav-item
      >
      <pds-footer-nav-item label="We're hiring"
        ><pds-list>
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Careers</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Global jobs</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Financial professional opportunities</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Internships</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Recent graduates</pds-link
            ></pds-list-item
          >
        </pds-list></pds-footer-nav-item
      >
      <pds-footer-nav-item label="Other sites"
        ><pds-list>
          <pds-list-item
            ><pds-link variant="default" href="#"
              >For dental providers</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >For financial professionals</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Company Co Asset Management</pds-link
            ></pds-list-item
          >
        </pds-list></pds-footer-nav-item
      >
      <pds-footer-nav-item label="Fourth column">
        <pds-list>
          <pds-list-item
            ><pds-link variant="default" href="#"
              >About us again</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Still investor relations</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >News room two</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >Sustainable sustainability</pds-link
            ></pds-list-item
          >
          <pds-list-item
            ><pds-link variant="default" href="#"
              >More insights</pds-link
            ></pds-list-item
          >
        </pds-list>
      </pds-footer-nav-item>
    </pds-footer-nav>`;
  },
};
