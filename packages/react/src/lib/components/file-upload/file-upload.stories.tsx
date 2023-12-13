import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsFileUpload } from './file-upload';

export default {
  title: 'Components/File upload',
  component: PdsFileUpload,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-file-upload-change', 'pds-file-upload-remove'],
    },
  },
};

const Template: StoryFn<typeof PdsFileUpload> = (args) => (
  <PdsFileUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'defaultFileUpload',
  helpText: 'For this PDS example, please upload any one file.',
};

export const Spanish = Template.bind({});
Spanish.args = {
  name: 'Spanish',
  helpText:
    'This is example "spanish" help text that says to upload at least one .png or .svg file.',
  accept: '.png,.svg',
  multiple: true,
};
Spanish.parameters = {
  lang: 'es',
};

export const Single = Template.bind({});
Single.args = {
  name: 'singleFileUpload',
  helpText: 'For this PDS example, please upload one .pdf file.',
  accept: '.pdf',
  required: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  name: 'MultiFileUpload',
  helpText:
    'For this PDS example, please upload one or multiple .pdf, .png, or .svg files.',
  accept: '.pdf,.png,.svg',
  multiple: true,
  required: true,
};

export const SizeRestriction = Template.bind({});
SizeRestriction.storyName = 'Size restriction';
SizeRestriction.args = {
  name: 'FileSizeRestriction',
  helpText: 'For this PDS example, upload a PDF file that is less than 100 KB.',
  accept: '.pdf,.doc',
  size: 100,
};
