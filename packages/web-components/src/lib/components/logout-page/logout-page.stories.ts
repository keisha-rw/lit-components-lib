import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './logout-page';

const meta: Meta = {
  title: 'Components/Logout page',
  component: 'pds-logout-page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) =>
    html`<pds-logout-page
      variant=${args.variant || nothing}
    ></pds-logout-page>`,
};
export default meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const DefaultSpanish: StoryObj = {
  name: 'Default Spanish',
  parameters: { lang: 'es' },
};

export const ExpiredSpanish: StoryObj = {
  name: 'Expired Spanish',
  args: { variant: 'expired' },
  parameters: { lang: 'es' },
};

export const Expired: StoryObj = {
  name: 'Expired',
  args: { variant: 'expired' },
};
