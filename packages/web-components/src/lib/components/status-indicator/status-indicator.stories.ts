import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './status-indicator';
import '@keisha/design-system-icons-web/check';
import '@keisha/design-system-icons-web/x';
import '@keisha/design-system-icons-web/minus';
import '@keisha/design-system-icons-web/more-horizontal';

const meta: Meta = {
  title: 'Components/Status indicator',
  component: 'pds-status-indicator',
  tags: ['autodocs'],
  render: (args) =>
    html`<pds-status-indicator
      variant="${args.variant || nothing}"
      border="${args.border || nothing}"
      icon="${args.icon || nothing}"
      ><span>Status</span></pds-status-indicator
    >`,
};
export default meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {
    variant: 'default',
  },
};

export const DefaultWithCheck: StoryObj = {
  name: 'Default with check icon',
  args: {
    variant: 'default',
    icon: 'check',
  },
};

export const DefaultWithBorder: StoryObj = {
  name: 'Default with border',
  args: {
    variant: 'default',
    border: true,
  },
};

export const Negative: StoryObj = {
  name: 'Negative',
  args: {
    variant: 'negative',
  },
};

export const NegativeWithX: StoryObj = {
  name: 'Negative with x icon',
  args: {
    variant: 'negative',
    icon: 'x',
  },
};

export const NegativeMinus: StoryObj = {
  name: 'Negative with minus icon',
  args: {
    variant: 'negative',
    icon: 'minus',
  },
};

export const NegativeAlert: StoryObj = {
  name: 'Negative with alert icon',
  args: {
    variant: 'negative',
    icon: 'alert',
  },
};

export const Neutral: StoryObj = {
  name: 'Neutral',
  args: {
    variant: 'neutral',
  },
};

export const NeutralMinus: StoryObj = {
  name: 'Neutral with minus icon',
  args: {
    variant: 'neutral',
    icon: 'minus',
  },
};

export const NeutralMoreHorizontal: StoryObj = {
  name: 'Neutral with more horizontal icon',
  args: {
    variant: 'neutral',
    icon: 'moreHorizontal',
  },
};

export const NeutralClock: StoryObj = {
  name: 'Neutral with clock icon',
  args: {
    variant: 'neutral',
    icon: 'clock',
  },
};

export const Warning: StoryObj = {
  name: 'Warning',
  args: {
    variant: 'warning',
  },
};

export const WarningAlert: StoryObj = {
  name: 'Warning with alert icon',
  args: {
    variant: 'warning',
    icon: 'alert',
  },
};
