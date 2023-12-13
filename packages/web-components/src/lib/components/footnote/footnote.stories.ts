import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './footnote';
import '../footnote-item/footnote-item';
import '../footnote-link/footnote-link';
import '../text-passage/text-passage';

export default {
  title: 'Components/Footnote',
  component: 'pds-footnote',
  tags: ['autodocs'],
  render: () =>
    html`<pds-text-passage linelength="none">
        Lorem ipsum dolor sit amet, consectetur<pds-footnote-link
          href="#id1"
          id="link1"
          footNoteId="id1"
          aria-describedby="id1"
        ></pds-footnote-link>
        adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
        odio mattis. Lorem ipsum dolor amet, consectetur adipiscing elit.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit
        amet. Tristique<pds-footnote-link
          href="#id2"
          id="link2"
          footNoteId="id2"
          aria-describedby="id2"
        ></pds-footnote-link>
        senectus et netus et malesuada fames ac turpis egestas. Elementum
        pulvinar etiam non quam lacus. Erat nam at lectus urna duis. Odio
        facilisis mauris sit amet massa. Venenatis lectus magna fringilla urna
        porttitor. Cursus eget nunc scelerisque viverra. Ut enim blandit
        volutpat maecenas volutpat blandit aliquam etiam erat. Massa tincidunt
        nunc pulvinar sapien et ligula. Mauris nunc congue<pds-footnote-link
          href="#id3"
          id="link3"
          footNoteId="id3"
          aria-describedby="id3"
        ></pds-footnote-link>
        nisi vitae suscipit tellus. Interdum consectetur libero id faucibus. Nam
        libero justo laoreet sit amet cursus sit amet dictum. Maecenas pharetra
        convallis posuere morbi leo. Fames ac turpis egestas sed tempus. Id
        volutpat lacus laoreet non curabitur. Id leo in vitae turpis massa sed
        elementum tempus. Nisl pretium fusce id velit ut tortor. Lacus sed
        viverra tellus in hac habitasse. Hendrerit dolor magna eget est lorem.
        Vitae suscipit tellus mauris a. Tellus id interdum velit laoreet id.
        Fermentum et sollicitudin ac orci phasellus. Lorem sed risus ultricies
        tristique. Et netus et malesuada fames. Elementum pulvinar etiam non
        quam lacus suspendisse faucibus. Nullam ac tortor vitae purus. Est
        placerat in egestas erat imperdiet sed euismod nisi porta. Volutpat diam
        ut venenatis tellus. Massa tempor nec feugiat nisl pretium fusce id
        velit ut. Bibendum neque egestas congue quisque egestas. Et tortor
        consequat id porta.
      </pds-text-passage>
      <pds-footnote>
        <pds-footnote-item ariaLabel="back to content" id="id1" href="#link1"
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo.</pds-footnote-item
        >
        <pds-footnote-item ariaLabel="back to content" id="id2" href="#link2"
          >Orci dapibus ultrices in iaculis nunc sed. Consectetur adipiscing
          elit ut aliquam purus sit amet. Tristique senectus et netus et
          malesuada fames ac turpis. Habitant morbi tristique senectus et. Dolor
          sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Velit
          dignissim sodales ut eu.</pds-footnote-item
        >
        <pds-footnote-item ariaLabel="back to content" id="id3" href="#link3">
          Sed malesuada magna nec dolor tempor, eu euismod ipsum sagittis. Duis
          leo nibh, interdum pellentesque venenatis molestie, elementum a augue.
          In vitae sagittis urna. Fusce ac ligula ac diam sagittis sollicitudin.
          Aliquam quis ex eros. Praesent sodales risus id placerat ullamcorper.
          Donec vehicula rutrum lacus, sed laoreet ligula tempor
          vel.</pds-footnote-item
        >
      </pds-footnote>`,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Color contrast is sufficient for the back links.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
