import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './article-feature-block.scss';
import './article-feature-block';
import '../../../src/lib/components/layout-container/layout-container';
import '../../../src/lib/components/feature-block/feature-block';
import '../../../src/lib/components/button/button';
import '../../../src/lib/components/band/band';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/text-passage/text-passage';

export default {
  title: 'Recipes/Article feature block',
  component: 'article-feature-block',
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    actions: {
      handles: ['pds-button-click'],
    },
    a11y: {
      config: {
        rules: [
          {
            // Axe doesn't like our gradient over an image for color contrast.
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
    html`<pds-feature-block>
      <span slot="media">
        <img
          class="c-article-feature-block__image pds-u-block"
          src="${process.env.IMAGES_PATH}image_border.svg"
          alt="placeholder"
        />
      </span>
      <div class="c-article-feature-block__body pds-u-position-relative">
        <pds-layout-container>
          <div class="c-article-feature-block__body-inner">
            <span
              class="c-article-feature-block__eyebrow pds-u-typography-meta-sm pds-u-margin-bottom-16"
            >
              1:00 PM CT | May 18, 2022
            </span>
            <pds-heading slot="heading" headingTag="h3" variant="title-default">
              A beginner's guide to investing
            </pds-heading>
            <div
              class="c-article-feature-block__description pds-u-margin-top-24"
            >
              <pds-text-passage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Lorem ipsum dolor amet, consectetur adipiscing
                elit.</pds-text-passage
              >
            </div>
            <div
              class="c-article-feature-block__cta pds-u-block pds-u-margin-top-40"
            >
              <pds-button>Register for the upcoming webinar</pds-button>
            </div>
          </div>
        </pds-layout-container>
      </div>
    </pds-feature-block>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Subtle = () =>
  html`<pds-band variant="subtle"
    ><pds-feature-block>
      <span slot="media">
        <img
          class="c-article-feature-block__image pds-u-block"
          src="${process.env.IMAGES_PATH}image_border.svg"
          alt="placeholder"
        />
      </span>
      <div class="c-article-feature-block__body pds-u-position-relative">
        <pds-layout-container>
          <div class="c-article-feature-block__body-inner">
            <span
              class="c-article-feature-block__eyebrow pds-u-typography-meta-sm pds-u-margin-bottom-16"
            >
              1:00 PM CT | May 18, 2022
            </span>
            <pds-heading slot="heading" headingTag="h3" variant="title-default">
              A beginner's guide to investing
            </pds-heading>
            <div
              class="c-article-feature-block__description pds-u-margin-top-24"
            >
              <pds-text-passage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Lorem ipsum dolor amet, consectetur adipiscing
                elit.</pds-text-passage
              >
            </div>
            <div
              class="c-article-feature-block__cta pds-u-block pds-u-margin-top-40"
            >
              <pds-button>Register for the upcoming webinar</pds-button>
            </div>
          </div>
        </pds-layout-container>
      </div>
    </pds-feature-block></pds-band
  >`;

export const FullWidthDefault: StoryObj = {
  name: 'Full width default',
  args: {},
  render: () =>
    html`<pds-feature-block fullwidth>
      <span slot="media">
        <img
          class="c-article-feature-block__image pds-u-block"
          src="${process.env.IMAGES_PATH}image_border.svg"
          alt="placeholder"
        />
      </span>
      <div class="c-article-feature-block__body pds-u-position-relative">
        <pds-layout-container>
          <div class="c-article-feature-block__body-inner">
            <span
              class="c-article-feature-block__eyebrow pds-u-typography-meta-sm pds-u-margin-bottom-16"
            >
              1:00 PM CT | May 18, 2022
            </span>
            <pds-heading slot="heading" headingTag="h3" variant="title-default">
              A beginner's guide to investing
            </pds-heading>
            <div
              class="c-article-feature-block__description pds-u-margin-top-24"
            >
              <pds-text-passage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Lorem ipsum dolor amet, consectetur adipiscing
                elit.</pds-text-passage
              >
            </div>
            <div
              class="c-article-feature-block__cta pds-u-block pds-u-margin-top-40"
            >
              <pds-button>Register for the upcoming webinar</pds-button>
            </div>
          </div>
        </pds-layout-container>
      </div>
    </pds-feature-block>`,
};
