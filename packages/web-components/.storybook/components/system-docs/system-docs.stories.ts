// Use markdown-it to process our markdown into HTML
import MarkdownIt from 'markdown-it';
// @ts-expect-error Silly TS, this file really does exist
import Code from '../../../docs/CODE_GUIDELINES.md?raw';
// @ts-expect-error Silly TS, this file really does exist
import Generators from '../../../docs/GENERATORS.md?raw';
import './system-docs';
import '../../../src/lib/components/text-passage/text-passage';

const md = new MarkdownIt({
  html: true,
});

export default {
  title: 'Documentation/Guidelines',
  component: 'system-docs',
  parameters: {
    happo: false,
    docs: {
      autodocs: false,
    },
  },
};

export const CodeGuidelines = () =>
  `<system-docs><pds-text-passage>${md.render(
    Code,
  )}</pds-text-passage></system-docs>`;
CodeGuidelines.parameters = {
  previewTabs: {
    'storybook/docs/panel': { hidden: true },
  },
};

export const GeneratorGuidelines = () =>
  `<system-docs><pds-text-passage>${md.render(
    Generators,
  )}</pds-text-passage></system-docs>`;
GeneratorGuidelines.parameters = {
  previewTabs: {
    'storybook/docs/panel': { hidden: true },
  },
};
