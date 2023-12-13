import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './error-page';

const meta: Meta = {
  title: 'Components/Error page',
  component: 'pds-error-page',
  tags: ['autodocs'],
  argTypes: {
    linkText: { control: 'text' },
    helpHref: { control: 'text' },
    layoutContainerVariant: { control: 'text' },
  },
  render: (args) =>
    html`<pds-error-page
      errorCode="${args.errorCode || nothing}"
      linkText="${args.linkText || '[Insert link here]'}"
      linkHref="${args.linkHref || 'https://www.google.com'}"
    >
    </pds-error-page>`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Error404: StoryObj = {
  name: '404',
  args: {
    errorCode: '404',
  },
};

export const Error403: StoryObj = {
  name: '403',
  args: {
    errorCode: '403',
  },
};

export const Error500: StoryObj = {
  name: '500',
  args: {
    errorCode: '500',
  },
};

export const Error503: StoryObj = {
  name: '503',
  args: { errorCode: '503' },
};
