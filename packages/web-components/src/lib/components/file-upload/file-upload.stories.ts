import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './file-upload';

const meta: Meta = {
  title: 'Components/File upload',
  component: 'pds-file-upload',
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    label: {
      table: {
        category: 'attributes',
      },
      description:
        ' The label of the form field. Must be plain text. If label requires additional markup (e.g., superscript), then use the label slot instead.',
      control: 'text',
    },
    'slot:label': {
      name: 'label',
      control: 'text',
      table: {
        category: 'slots',
      },
      description:
        'Use this slot instead of the label property, if the label requires additional markup.',
    },
    fieldId: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    invalidFilename: {
      control: 'text',
    },
  },
  parameters: {
    actions: {
      handles: ['pds-file-upload-change', 'pds-file-upload-remove'],
    },
  },
  render: (args) =>
    html`<pds-file-upload
      name="${args.name || nothing}"
      lang="${args.lang || nothing}"
      helpText="${args.helpText || nothing}"
      accept="${args.accept || nothing}"
      size="${args.size || nothing}"
      ?multiple=${args.multiple}
      ?required=${args.required}
    ></pds-file-upload>`,
};

export default meta;

export const Default: StoryObj = {
  name: 'Single file upload',
  args: {
    name: 'singleFileUpload',
    helpText: 'For this PDS example, please upload one .pdf file.',
    accept: '.pdf',
    required: true,
  },
};

export const Spanish: StoryObj = {
  name: 'Spanish',
  parameters: {
    lang: 'es',
  },
  args: {
    name: 'Spanish',
    helpText:
      'Para este ejemplo de PDS, cargue al menos un archivo .png o .svg.',
    accept: '.png,.svg',
    multiple: true,
  },
};

export const MultiFileUpload: StoryObj = {
  name: 'Multi file upload',
  args: {
    name: 'MultiFileUpload',
    helpText:
      'For this PDS example, please upload one or multiple .pdf, .png, or .svg files.',
    accept: '.pdf,.png,.svg',
    multiple: true,
    required: true,
  },
};

export const FileSizeRestriction: StoryObj = {
  name: 'File size restriction',
  args: {
    name: 'FileSizeRestriction',
    helpText:
      'For this PDS example, upload a PDF file that is less than 100 KB.',
    accept: '.pdf',
    size: 100,
  },
};
