import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './aligned-content-cards';
import '../../../src/lib/components/card/card';
import '../../../src/lib/components/grid/grid';
import '../../../src/lib/components/grid-item/grid-item';
import '../../../src/lib/components/button/button';

export default {
  title: 'Recipes/Cards with aligned content',
  component: 'aligned-content-cards',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  render: () =>
    html`<pds-grid variant="3up"
      ><pds-grid-item>
        <pds-card centerContentVertically
          ><div slot="header" class="pds-u-padding-12">
            <pds-heading headingTag="h2" variant="headline-sm"
              >Card title</pds-heading
            >
          </div>
          <p class="pds-u-margin-top-0 pds-u-typography-body-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pulvinar, turpis at dapibus luctus, mi nisi congue est, nec
            consequat massa lacus sed ex. Donec pretium augue at lorem
            consectetur consequat. Maecenas vulputate nulla vitae odio interdum,
            ut luctus massa blandit. Sed efficitur urna sit amet diam porttitor
            tincidunt.
          </p>
          <div slot="footer" class="pds-u-padding-12">
            <pds-button fullWidth><span>Click this cool CTA</span></pds-button>
          </div></pds-card
        >
      </pds-grid-item>
      <pds-grid-item>
        <pds-card
          ><div slot="header" class="pds-u-padding-12">
            <pds-heading headingTag="h2" variant="headline-sm"
              >Card title</pds-heading
            >
          </div>
          <p class="pds-u-margin-top-0 pds-u-typography-body-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pulvinar, turpis at dapibus luctus, mi nisi congue est, nec
            consequat massa lacus sed ex. Donec pretium augue at lorem
            consectetur consequat. Maecenas vulputate nulla vitae odio interdum,
            ut luctus massa blandit. Sed efficitur urna sit amet diam porttitor
            tincidunt. Nunc pharetra condimentum accumsan. Nunc a maximus purus.
            Cras ante massa, posuere eu risus pharetra, rutrum mollis erat.
            Maecenas dignissim enim porttitor nisi tincidunt porttitor. Nullam
            iaculis velit a libero rhoncus, ac accumsan ipsum ullamcorper. Nunc
            convallis varius sapien, at porttitor neque laoreet vitae. Vivamus
            sagittis diam sapien, ut ultricies lorem interdum non. Sed diam sem,
            euismod at mauris a, ultrices iaculis magna. Donec sed congue justo,
            et blandit neque. Cras rutrum aliquam velit. Donec ipsum tortor,
            sagittis in erat quis, semper laoreet lectus. Etiam lobortis
            sagittis tincidunt. Nam feugiat quis massa sit amet dictum.
            Suspendisse potenti.
          </p>
          <div slot="footer" class="pds-u-padding-12">
            <pds-button fullWidth><span>Click this cool CTA</span></pds-button>
          </div></pds-card
        >
      </pds-grid-item>
      <pds-grid-item>
        <pds-card
          ><div slot="header" class="pds-u-padding-12">
            <pds-heading headingTag="h2" variant="headline-sm"
              >Card title</pds-heading
            >
          </div>
          <p class="pds-u-margin-top-0 pds-u-typography-body-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pulvinar, turpis at dapibus luctus, mi nisi congue est, nec
            consequat massa lacus sed ex. Donec pretium augue at lorem
            consectetur consequat. Maecenas vulputate nulla vitae odio interdum,
            ut luctus massa blandit.
          </p>
          <div slot="footer" class="pds-u-padding-12">
            <pds-button fullWidth><span>Click this cool CTA</span></pds-button>
          </div></pds-card
        >
      </pds-grid-item></pds-grid
    >`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
