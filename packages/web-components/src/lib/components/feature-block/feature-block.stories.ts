import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './feature-block';
import '../../../../.storybook/components/placeholder-element/placeholder-element';
import '../text-passage/text-passage';

export default {
  title: 'Components/Feature block',
  component: 'pds-feature-block',
  tags: ['autodocs'],
  argTypes: {
    behavior: {
      control: 'radio',
      options: ['reversed', 'default'],
    },
  },
  render: (args) =>
    html` <pds-feature-block
      ?fullWidth=${args.fullWidth}
      behavior=${args.behavior || nothing}
      ?reverseMobileDisplay=${args.reverseMobileDisplay}
    >
      <placeholder-element
        style="--placeholder-element-margin-bottom: 0;"
        slot="media"
        >Slot for image or video</placeholder-element
      >
      <placeholder-element style="--placeholder-element-margin-bottom: 0;"
        >Slot for body content</placeholder-element
      >
    </pds-feature-block>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const ExampleUsage: StoryObj = {
  name: 'Example usage',
  parameters: {
    happo: {
      waitFor: () =>
        document
          ?.querySelector('pds-feature-block')
          ?.querySelector('div[slot="media"]')
          ?.querySelector('img')?.complete,
    },
  },
  render: () =>
    html`<pds-feature-block>
      <div slot="media">
        <img
          class="pds-u-responsive-image"
          alt="placeholder"
          src="${process.env.IMAGES_PATH}image_border.svg"
        />
      </div>
      <div>
        <div class="pds-u-typography-meta-sm pds-u-margin-bottom-16">
          1:00 PM CT | May 18, 2022
        </div>
        <pds-heading headingTag="h3" variant="title-default">Title</pds-heading>
        <pds-text-passage>
          Turpis congue vitae rutrum habitasse integer nibh faucibus feugiat
          interdum.</pds-text-passage
        >
        <placeholder-element class="pds-u-margin-top-16"
          >Additional slot area</placeholder-element
        >
      </div>
    </pds-feature-block>`,
};

export const Reversed: StoryObj = {
  name: 'Reversed',
  args: {
    behavior: 'reversed',
  },
};

export const FullWidth: StoryObj = {
  name: 'Full width',
  render: (args) =>
    html`<pds-feature-block ?fullWidth=${args.fullWidth}>
      <placeholder-element slot="media"
        ><div style="padding: 2rem 0">
          Slot for full width image
        </div></placeholder-element
      >
      <placeholder-element style="--placeholder-element-margin-bottom: 0;"
        >Overlay Slot for body content. Width set at recipe
        level</placeholder-element
      >
    </pds-feature-block>`,
  args: {
    fullWidth: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // This is flagged on the placeholder, so we can safely ignore it.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};
