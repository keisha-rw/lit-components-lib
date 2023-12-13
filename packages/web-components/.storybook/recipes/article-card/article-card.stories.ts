import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './article-card';
import './article-card.scss';
import '../../../src/lib/components/card/card';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/text-passage/text-passage';

export default {
  title: 'Recipes/Article card',
  component: 'article-card',
  tags: ['autodocs'],
  argTypes: {},
  render: (args) =>
    html`<pds-card variant=${args.variant || nothing}>
      <div slot="header">
        <img
          class="pds-u-responsive-image"
          src="${process.env.IMAGES_PATH}image_border.svg"
          alt="placeholder"
        />
      </div>
      <div>
        <div class="pds-u-typography-meta-sm pds-u-margin-vertical-8">
          Eyebrow
        </div>
        <pds-heading headingTag="h3" variant="title-sm">
          <span>Article card title</span>
        </pds-heading>
        <pds-text-passage class="pds-u-margin-top-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
          ipsum dolor amet, consectetur adipiscing elit.
        </pds-text-passage>
      </div>
    </pds-card>`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Bare: StoryObj = {
  name: 'Bare',
  args: { variant: 'bare' },
  argTypes: { variant: { table: { disable: true } } },
};
