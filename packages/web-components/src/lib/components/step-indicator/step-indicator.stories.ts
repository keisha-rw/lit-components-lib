import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './step-indicator';
import '../step-indicator-item/step-indicator-item';

export default {
  title: 'Components/Step indicator',
  component: 'pds-step-indicator',
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Color contrast is sufficient for the incomplete checks, but axe doesn't like them.
            //
            // @link https://dequeuniversity.com/rules/axe/4.6/color-contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  render: (args) => {
    if (args.interactive) {
      return html`<pds-step-indicator
        variant="${args.variant || nothing}"
        ?interactive="${args.interactive}"
        ?inverted="${args.inverted}"
      >
        <pds-step-indicator-item status="completed" href="#">
          Step one
        </pds-step-indicator-item>
        <pds-step-indicator-item status="current" href="#" active>
          Step two is longer and wraps to the second line
        </pds-step-indicator-item>
        <pds-step-indicator-item status="incomplete">
          <span>Step three</span>
        </pds-step-indicator-item>
        <pds-step-indicator-item status="incomplete">
          <span>Step four</span>
        </pds-step-indicator-item>
      </pds-step-indicator>`;
    }

    return html`<pds-step-indicator
      variant="${args.variant || nothing}"
      ?interactive="${args.interactive}"
      ?inverted="${args.inverted}"
    >
      <pds-step-indicator-item status="completed">
        <span>Step one</span>
      </pds-step-indicator-item>
      <pds-step-indicator-item status="current" active>
        <span>Step two is longer and wraps to the second line</span>
      </pds-step-indicator-item>
      <pds-step-indicator-item status="incomplete">
        <span>Step three</span>
      </pds-step-indicator-item>
      <pds-step-indicator-item status="incomplete">
        <span>Step four</span>
      </pds-step-indicator-item>
    </pds-step-indicator>`;
  },
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Horizontal: StoryObj = {
  name: 'Horizontal',
  args: {},
};

export const HorizontalInteractive: StoryObj = {
  name: 'Horizontal interactive',
  args: {
    interactive: true,
  },
  parameters: {
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
};

export const Vertical: StoryObj = {
  name: 'Vertical',
  args: {
    variant: 'vertical',
  },
};

export const VerticalInteractive: StoryObj = {
  name: 'Vertical interactive',
  args: {
    variant: 'vertical',
    interactive: true,
  },
  parameters: {
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
};

export const HorizontalInverted: StoryObj = {
  name: 'Horizontal inverted',
  args: {
    inverted: true,
  },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
  },
};

export const HorizontalInteractiveInverted: StoryObj = {
  name: 'Horizontal interactive inverted',
  args: {
    interactive: true,
    inverted: true,
  },
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
};

export const PreviousStepActive: StoryObj = {
  name: 'Previous step active',
  parameters: {
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
  render() {
    return html`<pds-step-indicator variant="horizontal" interactive>
      <pds-step-indicator-item status="completed" href="#" active>
        Step one
      </pds-step-indicator-item>
      <pds-step-indicator-item status="current" href="#">
        Step two is longer and wraps to the second line
      </pds-step-indicator-item>
      <pds-step-indicator-item status="incomplete">
        <span>Step three</span>
      </pds-step-indicator-item>
      <pds-step-indicator-item status="incomplete">
        <span>Step four</span>
      </pds-step-indicator-item>
    </pds-step-indicator>`;
  },
};

export const PreviousStepActiveInverted: StoryObj = {
  name: 'Previous step active inverted',
  parameters: {
    backgrounds: { default: 'BrandXStrong' },
    actions: {
      handles: ['pds-step-indicator-item-click'],
    },
  },
  render() {
    return html`<pds-step-indicator variant="horizontal" interactive inverted>
      <pds-step-indicator-item status="completed" href="#" active>
        Step one
      </pds-step-indicator-item>
      <pds-step-indicator-item status="current" href="#">
        Step two is longer and wraps to the second line
      </pds-step-indicator-item>
      <pds-step-indicator-item status="incomplete">
        <span>Step three</span>
      </pds-step-indicator-item>
      <pds-step-indicator-item status="incomplete">
        <span>Step four</span>
      </pds-step-indicator-item>
    </pds-step-indicator>`;
  },
};
