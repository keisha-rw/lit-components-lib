import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './footnote-item';

export default {
  title: 'Components/Footnote/Footnote item',
  component: 'pds-footnote-item',
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the footnote component.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // The elements are within a ol when within the footnote component
            //
            // @link https://dequeuniversity.com/rules/axe/4.7/aria-required-parent?application=axeAPI
            id: 'aria-required-parent',
            enabled: false,
          },
        ],
      },
    },
  },
  render: () =>
    html` <pds-footnote-item
      ariaLabel="back to content"
      id="id3"
      href="#link3"
      footnoteId="link3"
    >
      Sed malesuada magna nec dolor tempor, eu euismod ipsum sagittis. Duis leo
      nibh, interdum pellentesque venenatis molestie, elementum a augue. In
      vitae sagittis urna. Fusce ac ligula ac diam sagittis sollicitudin.
      Aliquam quis ex eros. Praesent sodales risus id placerat ullamcorper.
      Donec vehicula rutrum lacus, sed laoreet ligula tempor
      vel.</pds-footnote-item
    >`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
