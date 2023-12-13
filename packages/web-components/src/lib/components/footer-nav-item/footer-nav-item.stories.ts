import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './footer-nav-item';

export default {
  title: 'Components/Footer/Footer nav/Footer nav item',
  component: 'pds-footer-nav-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the footer nav component.',
      },
    },
  },
  render: () => {
    return html` <pds-footer-nav-item label="Our company"
      ><pds-list
        ><pds-list-item
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
    >`;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
};
