import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './card-custom-padding';
import '../../../src/lib/components/card/card';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/grid-item/grid-item';
import '../../../src/lib/components/button/button';

export default {
  title: 'Recipes/Card with custom padding',
  component: 'card-custom-padding',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () =>
    html`<pds-card removePadding
      ><div slot="header" class="pds-u-padding-12">
        <pds-heading headingTag="h2" variant="headline-sm"
          >Card title</pds-heading
        >
      </div>
      <p class="pds-u-padding-12 pds-u-typography-body-default">
        This card has a custom padding of 12px instead of the default. The 12px
        is applied on the slotted card content.
      </p>
      <div slot="footer" class="pds-u-padding-12 pds-u-typography-body-default">
        Lorem ipsum footer
      </div></pds-card
    >`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
