import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './footnote-link';

export default {
  title: 'Components/Footnote/Footnote link',
  component: 'pds-footnote-link',
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
            // Subcomponent stories confuse AXE.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/listitem
            id: 'listitem',
            enabled: false,
          },
        ],
      },
    },
  },
  render: (args) =>
    html`<pds-footnote-link
      variant="${args.variant}"
      href="#id2"
      id="link2"
      footnoteId="id2"
      aria-describedby="id2"
      footnoteNumber="1"
    ></pds-footnote-link>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: { variant: 'default' },
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  args: { variant: 'inverted' },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};
