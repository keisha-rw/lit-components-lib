import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './article-intro';
import './article-intro.scss';
import '../../../src/lib/components/heading/heading';
import '../../../src/lib/components/text-passage/text-passage';

export default {
  title: 'Recipes/Article intro',
  component: 'article-intro',
  tags: ['autodocs'],
  argTypes: {},
  render: () =>
    html`<pds-heading
        class="c-article-intro__title"
        headingTag="h1"
        variant="display-default"
      >
        3 reasons to start investing young
      </pds-heading>
      <pds-text-passage class="pds-u-margin-bottom-40"
        >This is short intro text that accompanies the title.</pds-text-passage
      >
      <img
        class="c-article-intro__image"
        src="${process.env.IMAGES_PATH}image_border.svg"
        alt="placeholder"
      />`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};
