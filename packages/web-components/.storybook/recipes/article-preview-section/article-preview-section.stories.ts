import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './article-preview-section';
import './article-preview-section.scss';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/card/card';
import '../../../src/lib/components/band/band';
import '../../../src/lib/components/layout-container/layout-container';
import '../../../src/lib/components/support-heading/support-heading';
import '../../../src/lib/components/grid/grid';
import '../../../src/lib/components/grid-item/grid-item';
import '../../../src/lib/components/text-passage/text-passage';

export default {
  title: 'Recipes/Article preview section',
  component: 'article-preview-section',
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Axe can't see all the elements due to positioning, so it fails color contrast.
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
    html`<pds-band
        class="c-article-preview-section__band"
        spacing="none"
        variant="brand-gradient-strong"
      >
        <div
          class="c-article-preview-section__band-inner pds-u-padding-vertical-32"
        >
          <pds-layout-container>
            <pds-heading
              class="c-article-preview-section__page-title"
              headingTag="h1"
              variant="display-default"
              inverted
            >
              This is a headline.
            </pds-heading>
            <div class="c-article-preview-section__description">
              <pds-text-passage slot="description"
                >This is supporting body copy.</pds-text-passage
              >
            </div>
          </pds-layout-container>
        </div>
      </pds-band>
      <pds-layout-container>
        <pds-band rounded class="c-article-preview-section__panel">
          <pds-layout-container
            class="c-article-preview-section__layout-container-inner"
            ><pds-support-heading
              headingTagName="h2"
              headingVariant="meta-default"
              >[MONTH'S] FEATURE: Managing debt</pds-support-heading
            >
            <section class="pds-u-margin-top-32">
              <pds-grid variant="2up" gap="xl">
                <pds-grid-item>
                  <pds-card variant="bare">
                    <div slot="header">
                      <img
                        class="pds-u-responsive-image"
                        src="${process.env.IMAGES_PATH}image_border.svg"
                        alt="placeholder"
                      />
                    </div>
                    <div>
                      <div
                        class="pds-u-typography-meta-sm pds-u-margin-vertical-8"
                      >
                        5 min read
                      </div>
                      <pds-heading headingTag="h3" variant="title-sm">
                        <span
                          >6 better options for emergency cash than an early
                          401(k) withdrawal</span
                        >
                      </pds-heading>
                      <pds-text-passage>
                        We know it can be a struggle when suddenly you need
                        emergency cash for medical expenses, student loans, or
                        crushing consumer debt.
                      </pds-text-passage>
                    </div>
                  </pds-card>
                </pds-grid-item>
                <pds-grid-item>
                  <pds-card direction="horizontal" variant="bare">
                    <div slot="header">
                      <img
                        class="pds-u-block"
                        src="${process.env.IMAGES_PATH}image_small.svg"
                        alt="placeholder"
                      />
                    </div>
                    <div>
                      <div class="pds-u-typography-meta-sm">4 MIN READ</div>
                      <pds-heading
                        headingTag="h3"
                        variant="label-default"
                        slot="title"
                      >
                        Managing debt: 3 ways to find the right balance
                      </pds-heading>
                    </div>
                  </pds-card>
                  <pds-card
                    direction="horizontal"
                    variant="bare"
                    class="pds-u-block pds-u-margin-top-16"
                  >
                    <div slot="header">
                      <img
                        class="pds-u-block"
                        src="${process.env.IMAGES_PATH}image_small.svg"
                        alt="placeholder"
                      />
                    </div>
                    <div>
                      <div class="pds-u-typography-meta-sm">3 MIN READ</div>
                      <pds-heading
                        headingTag="h3"
                        variant="label-default"
                        slot="title"
                      >
                        5 questions to ask before you take on debt
                      </pds-heading>
                    </div> </pds-card
                  ><pds-card
                    direction="horizontal"
                    variant="bare"
                    class="pds-u-block pds-u-margin-top-16"
                  >
                    <div slot="header">
                      <img
                        class="pds-u-block"
                        src="${process.env.IMAGES_PATH}image_small.svg"
                        alt="placeholder"
                      />
                    </div>
                    <div>
                      <div class="pds-u-typography-meta-sm">5 MIN READ</div>
                      <pds-heading
                        headingTag="h3"
                        variant="label-default"
                        slot="title"
                      >
                        3 steps to understand your credit score (and keep it
                        healthy)
                      </pds-heading>
                    </div>
                  </pds-card>
                </pds-grid-item>
              </pds-grid>
            </section>
          </pds-layout-container>
        </pds-band>
      </pds-layout-container>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
