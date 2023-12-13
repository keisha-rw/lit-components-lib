import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsActionMenu } from './action-menu';
import { PdsActionMenuItem } from '../action-menu-item/action-menu-item';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PdsButton } from '../button/button';

export default {
  title: 'Components/Action menu',
  component: PdsActionMenu,
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: [
        'default',
        'default-inverted',
        'primary',
        'primary-inverted',
        'icon',
        'icon-inverted',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
    buttonLabel: {
      control: 'text',
    },
    hideSeperator: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story: JSX.IntrinsicAttributes) => (
      <div style={{ height: '19em' }}>
        {/* @ts-expect-error */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    happo: {
      waitFor: document
        .querySelector('pds-action-menu')
        ?.shadowRoot?.querySelector('.pds-c-action-menu'),
      beforeScreenshot: () => {
        (
          document
            .querySelector('pds-action-menu')
            ?.shadowRoot?.querySelector(
              '.pds-c-action-menu__button',
            ) as HTMLElement
        ).click();
      },
      delay: 500,
    },
  },
};

const Template: StoryFn<typeof PdsActionMenu> = (args) => (
  <PdsActionMenu {...args} label="I want to..." ariaLabel="action menu">
    <PdsActionMenuItem
      ariaLabel="Action 1"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 1
    </PdsActionMenuItem>
    <PdsActionMenuItem
      ariaLabel="Action 2"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 2
    </PdsActionMenuItem>
    <PdsActionMenuItem
      ariaLabel="Action 3"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 3
    </PdsActionMenuItem>
    <PdsActionMenuItem
      ariaLabel="Action 4"
      linkHref="https://www.google.com"
      target="_blank"
      slot="footer"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 4
    </PdsActionMenuItem>
  </PdsActionMenu>
);

export const Default = Template.bind({});
Default.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  buttonVariant: 'icon-inverted',
};
Inverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};

const TemplateForTextButtons: StoryFn<typeof PdsActionMenu> = (args) => (
  <PdsActionMenu {...args} label="I want to...">
    <PdsActionMenuItem
      ariaLabel="Action 1"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 1
    </PdsActionMenuItem>
    <PdsActionMenuItem
      ariaLabel="Action 2"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 2
    </PdsActionMenuItem>
    <PdsActionMenuItem
      ariaLabel="Action 3"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 3
    </PdsActionMenuItem>
    <PdsActionMenuItem
      ariaLabel="Action 4"
      linkHref="https://www.google.com"
      target="_blank"
      slot="footer"
      onClick={(e: any) => action('pds-action-menu-item-click')(e.detail)}
    >
      Action 4
    </PdsActionMenuItem>
  </PdsActionMenu>
);

export const TextButtonDefault = TemplateForTextButtons.bind({});
TextButtonDefault.args = {
  buttonVariant: 'default',
};
TextButtonDefault.storyName = 'Text button default';

export const TextButtonInverted = TemplateForTextButtons.bind({});
TextButtonInverted.args = {
  buttonVariant: 'default-inverted',
};
TextButtonInverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
TextButtonInverted.storyName = 'Text button inverted';
