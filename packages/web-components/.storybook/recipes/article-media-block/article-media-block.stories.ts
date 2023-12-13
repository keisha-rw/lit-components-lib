import { html, nothing } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './article-media-block';
import './article-media-block.scss';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/card/card';

export default {
  title: 'Recipes/Article media block',
  component: 'article-media-block',
  tags: ['autodocs'],
  argTypes: {},
  render: (args) =>
    html`<pds-card variant=${args.variant || nothing} direction="horizontal">
      <div slot="header">
        <img
          class="pds-u-block"
          src="${process.env.IMAGES_PATH}image_40x100.svg"
          alt="placeholder"
        />
      </div>
      <div>
        <div class="pds-u-typography-meta-sm">Eyebrow</div>
        <pds-heading headingTag="h3" variant="label-default" slot="title">
          Article media block title
        </pds-heading>
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
};
