import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './text-passage';

export default {
  title: 'Components/Text passage',
  component: 'pds-text-passage',
  tags: ['autodocs'],
  argTypes: {
    lineLength: {
      control: 'select',
      options: ['default', 'sm', 'none'],
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'lg'],
    },
  },
  render: (args) =>
    html`<pds-text-passage lineLength=${args.lineLength || nothing}>
      <h2 class="pds-c-heading pds-c-heading--headline-sm">Heading example</h2>
      <p class="pds-u-margin-top-24">
        <a href="https://www.google.com">A text passage</a> contains
        arbitrary text that might come from a CMS. It should live within a
        container that caps the line length of the text to avoid a straining
        reading experience.
      </p>
      <p>Second paragraph.</p>
      <ul>
        <li>List item</li>
        <li>
          <a href="https://www.google.com">List item</a>
        </li>
      </ul>
      <ol>
        <li>List item</li>
        <li>
          <a href="https://www.google.com">List item</a>
        </li>
      </ol></pds-text-passage
    >`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const SmallLineLength: StoryObj = {
  name: 'Small linelength',
  args: { lineLength: 'sm' },
};

export const DefaultNoCap: StoryObj = {
  name: 'Remove linelength',
  args: {
    lineLength: 'none',
  },
};
