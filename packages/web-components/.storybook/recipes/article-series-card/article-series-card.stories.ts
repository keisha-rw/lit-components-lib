import { html, nothing } from 'lit';
import './article-series-card';
import './article-series-card.scss';
import { Meta, StoryObj } from '@storybook/web-components';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/card/card';

export default {
  title: 'Recipes/Article series card',
  component: 'article-series-card',
  tags: ['autodocs'],
  render: (args) =>
    html`<pds-card variant=${args.variant || nothing}>
      <img
        class="pds-u-responsive-image"
        slot="header"
        src="${process.env.IMAGES_PATH}image_border.svg"
        alt="placeholder"
      />
      <div class="pds-u-typography-display-default">1</div>
      <div class="pds-u-typography-meta-sm pds-util-margin-vertical-8">
        Eyebrow
      </div>
      <pds-heading headingTag="h3" variant="title-xs">
        Article series card title
      </pds-heading>
    </pds-card>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Bare: StoryObj = {
  name: 'Bare',
  args: { variant: 'bare' },
};
