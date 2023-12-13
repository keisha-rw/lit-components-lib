import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PdsErrorPage } from './error-page';

const meta: Meta<typeof PdsErrorPage> = {
  title: 'Components/Error page',
  component: PdsErrorPage,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof PdsErrorPage>;

export const Error404: Story = {
  render: (args: {}) => <PdsErrorPage {...args} />,
  args: {
    errorCode: '404',
    linkText: '[Insert link here]',
    linkHref: 'https://www.google.com',
  },
};
Error404.storyName = '404';

export const Error403: Story = {
  render: (args: {}) => <PdsErrorPage {...args} />,
  args: {
    errorCode: '403',
    linkText: '[Insert link here]',
    linkHref: 'https://www.google.com',
  },
};
Error403.storyName = '403';

export const Error500: Story = {
  render: (args: {}) => <PdsErrorPage {...args} />,
  args: {
    errorCode: '500',
    linkText: '[Insert link here]',
    linkHref: 'https://www.google.com',
  },
};
Error500.storyName = '500';

export const Error503: Story = {
  render: (args: {}) => <PdsErrorPage {...args} />,
  args: {
    errorCode: '503',
    linkText: '[Insert link here]',
    linkHref: 'https://www.google.com',
  },
};
Error503.storyName = '503';
