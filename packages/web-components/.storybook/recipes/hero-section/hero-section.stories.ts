import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './hero-section.scss';
import './hero-section';
import '../../../src/lib/components/list/list';
import '../../../src/lib/components/link/link';
import '../../../src/lib/components/band/band';
import '../../../src/lib/components/layout-container/layout-container';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/text-passage/text-passage';
import '../../../src/lib/components/button/button';
import '../../../src/lib/components/feature-block/feature-block';

export default {
  title: 'Recipes/Hero section',
  component: 'hero-section',
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['pds-button-click', 'pds-link-click'],
    },
    a11y: {
      config: {
        rules: [
          {
            // None of the nested elements are interactive - this is a false positive.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/nested-interactive
            id: 'nested-interactive',
            enabled: false,
          },
          {
            // The skip link target will exist on real apps, but we don't have it in Storybook.
            //
            // @link https://dequeuniversity.com/rules/axe/4.4/skip-link
            id: 'skip-link',
            enabled: false,
          },
          {
            // The primary navigation main menu children are correct; the shadow root confuses AXE.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/aria-required-children
            id: 'aria-required-children',
            enabled: false,
          },
          {
            // The primary navigation main menu aria parents are correct; the shadow root confuses AXE.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/aria-required-parent
            id: 'aria-required-parent',
            enabled: false,
          },
          {
            // Color contrast is sufficient - this is a false positive.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  render: () =>
    html`<pds-band variant="subtle" spacing="default">
      <pds-layout-container variant="default"
        ><pds-heading
          class="pds-u-margin-top-8 pds-u-margin-left-40 pds-u-margin-right-40"
          headingTag="h1"
          variant="display-default"
        >
          This is a display.
        </pds-heading>
        <div
          class="pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-top-24"
        >
          <pds-text-passage linelength="none">
            This is body text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</pds-text-passage
          >
        </div>
        <div
          class="pds-u-margin-top-40 pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-bottom-8"
        >
          <pds-button variant="primary"><span>Label</span></pds-button>
        </div></pds-layout-container
      >
    </pds-band>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Solid background',
  args: {},
};
export const HeroCentered: StoryObj = {
  name: 'Centered',
  args: {},
  render: () => html`
    <pds-band
      variant="brand-xstrong"
      spacing="default"
      class="pds-u-typography-color-inverted-default pds-u-text-align-center"
    >
      <pds-layout-container variant="default"
        ><pds-heading
          class="pds-u-margin-top-8 pds-u-margin-left-40 pds-u-margin-right-40"
          headingTag="h1"
          variant="display-default"
        >
          This is a display.
        </pds-heading>
        <div
          class="pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-top-24"
        >
          <pds-text-passage linelength="none">
            This is body text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</pds-text-passage
          >
        </div>
        <div
          class="pds-u-margin-top-40 pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-bottom-8"
        >
          <pds-button variant="primary-inverted"><span>Label</span></pds-button>
        </div></pds-layout-container
      >
    </pds-band>
  `,
};

export const HeroWithImage: StoryObj = {
  name: 'Image',
  args: {},
  render: () => html`
  <pds-feature-block
    fullwidth
  >
      <img slot="media"
        class="pds-u-block"
        src="${process.env.IMAGES_PATH}image.svg"
        alt="placeholder"
        style="object-fit:cover; height:100%; width:100%;"
      />
    <div class="pds-u-position-relative">
      <pds-feature-block fullwidth>
        <pds-band
          variant="brand-xstrong"
          spacing="default"
          class="c-hero-section__band pds-u-typography-color-inverted-default" style="opacity:0.9;"
          >
          <pds-layout-container>
          <pds-heading
                    class="pds-u-margin-top-8 pds-u-margin-left-40 pds-u-margin-right-40"
                    headingTag="h1"
                    variant="display-default"
                  >
                    This is a display.
                  </pds-heading>
                  <div
                    class="pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-top-24"
                  >
                    <pds-text-passage linelength="none">
                      This is body text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.</pds-text-passage
                    >
                  </div>
                  <div
                    class="pds-u-margin-top-40 pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-bottom-8"
                  >
                    <pds-button variant="primary-inverted"><span>Label</span></pds-button>
                  </div>
            </div>
          </pds-layout-container></pds-band
        ></pds-feature-block
      >
    </div>
  </pds-feature-block>`,
};

export const HeroAudience: StoryObj = {
  name: 'Audience',
  args: {},
  render: () =>
    html`
      <pds-feature-block fullwidth>
        <img
          slot="media"
          class="pds-u-block pds-image"
          src="${process.env.IMAGES_PATH}image.svg"
          alt="placeholder"
          style="object-fit:cover; height:100%; width:100%;"
        />
        <div class="pds-u-position-relative">
          <pds-feature-block fullwidth>
            <pds-band
              variant="brand-xstrong"
              spacing="default"
              class="c-hero-audience__band pds-u-typography-color-inverted-default"
            >
              <pds-layout-container>
                <div class="pds-u-margin-left-40 pds-u-margin-right-40">
                  <pds-heading
                    class="pds-u-margin-top-8"
                    headingTag="h1"
                    variant="display-default"
                  >
                    This is a display.
                  </pds-heading>
                  <div class="pds-u-margin-top-24">
                    <pds-text-passage linelength="none">
                      This is body text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </pds-text-passage>
                  </div>
                  <div class="pds-u-margin-top-40 pds-u-margin-bottom-8">
                    <pds-button variant="primary-inverted">Label</pds-button>
                  </div>
                </div>
              </pds-layout-container>
            </pds-band>
          </pds-feature-block>
        </div>
      </pds-feature-block>
      <pds-card
        variant="bare"
        removepadding=""
        target="_blank"
        class="pds-card-quickLinks pds-u-background-brand-xstrong"
      >
        <pds-heading
          headingtag="h2"
          variant="title-sm"
          class="pds-u-typography-color-inverted-default"
        >
          Quick links
        </pds-heading>
        <pds-list class="pds-u-margin-top-20" spacing="sm" size="md">
          <pds-list-item size="md"
            ><pds-link
              href="https://google.com"
              variant="emphasis-inverted"
              >Link 1</pds-link
            ></pds-list-item
          >
          <pds-list-item size="md"
            ><pds-link
              href="https://google.com"
              variant="emphasis-inverted"
              >Link 2</pds-link
            ></pds-list-item
          >
          <pds-list-item size="md"
            ><pds-link
              href="https://google.com"
              variant="emphasis-inverted"
              >Link 3</pds-link
            ></pds-list-item
          >
          <pds-list-item size="md"
            ><pds-link
              href="https://google.com"
              variant="emphasis-inverted"
              >Link 4</pds-link
            ></pds-list-item
          >
        </pds-list>
      </pds-card>
    </div>`,
};
