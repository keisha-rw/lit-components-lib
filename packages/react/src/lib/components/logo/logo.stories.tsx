import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsLogo } from './logo';

export default {
  title: 'Components/Logo',
  component: PdsLogo,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsLogo> = (args) => <PdsLogo {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = { variant: 'default' };

export const DefaultLogoWhiteFont = Template.bind({});
DefaultLogoWhiteFont.storyName = 'Default white font';
DefaultLogoWhiteFont.args = {
  variant: 'default-p-white-font',
};
DefaultLogoWhiteFont.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};

export const White = Template.bind({});
White.storyName = 'White';
White.args = {
  variant: 'white',
};
White.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};

export const PLogo = Template.bind({});
PLogo.storyName = 'P';
PLogo.args = {
  variant: 'p',
};

export const PGradientLogo = Template.bind({});
PGradientLogo.storyName = 'P gradient';
PGradientLogo.args = {
  variant: 'p-gradient',
};

export const PWhiteLogo = Template.bind({});
PWhiteLogo.storyName = 'P white';
PWhiteLogo.args = {
  variant: 'p-white',
};
PWhiteLogo.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
