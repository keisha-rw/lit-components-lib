import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './search';
import { themedefault } from '@keisha/design-system-tokens';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Custom/Search',
  component: 'pds-icon-search',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: iconSizes,
    },
    color: {
      control: 'select',
      options: validIconColors,
    },
  },
  render: (args) =>
    html`<pds-icon-search
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-search>`,
} as Meta;

export const Search: StoryObj = {
  name: 'Search',
  args: { size: 'default', color: themedefault.SemanticBorderIconDefault },
};
