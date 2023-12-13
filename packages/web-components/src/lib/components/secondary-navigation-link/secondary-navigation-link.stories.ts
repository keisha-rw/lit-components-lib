import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './secondary-navigation-link';

const meta: Meta = {
  title: 'Components/Secondary navigation/Secondary navigation link',
  component: 'pds-secondary-navigation-link',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent slotted within the secondary navigation level two components.  It contains all the same properties as pds-link, but with an additional activePage prop to handle if the link should be shown as active.',
      },
    },
  },
  render: (args) =>
    html`<pds-secondary-navigation-link
      href="#"
      activePage="${args.activePage || nothing}"
      >Test link</pds-secondary-navigation-link
    >`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: { activePage: false },
};

export const Active: StoryObj = {
  name: 'Active',
  args: { activePage: true },
};
