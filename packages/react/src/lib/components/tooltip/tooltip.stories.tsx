import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconHelpCircle } from '@keisha/design-system-icons-react';
// @ts-ignore
import { themedefault } from '@keisha/design-system-tokens';
import { PdsButton } from '../button/button';
import { PdsTooltip } from './tooltip';

export default {
  title: 'Components/Tooltip',
  component: PdsTooltip,
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsTooltip> = (args: any) => (
  <PdsTooltip {...args}>
    <PdsButton
      slot="trigger"
      variant="icon"
      size="sm"
      ariaLabel="This button triggers a tooltip"
    >
      <PdsIconHelpCircle
        color={themedefault.SemanticBorderInteractiveDefault}
      />
    </PdsButton>
    tooltip
  </PdsTooltip>
);

const DefaultTemplate: StoryFn<typeof PdsTooltip> = (args: any) => (
  <>
    <br />
    <br />
    <br />
    <PdsTooltip {...args}>
      <PdsButton
        slot="trigger"
        variant="icon"
        size="sm"
        ariaLabel="This button triggers a tooltip"
      >
        <PdsIconHelpCircle
          color={themedefault.SemanticBorderInteractiveDefault}
        />
      </PdsButton>
      Tooltip content
    </PdsTooltip>
  </>
);

export const Default = DefaultTemplate.bind({});
DefaultTemplate.storyName = 'Default';
DefaultTemplate.args = {
  variant: 'default',
};

const SubtleTopTemplate: StoryFn<typeof PdsTooltip> = (args: any) => (
  <>
    <br />
    <br />
    <br />
    <PdsTooltip {...args}>
      <PdsButton
        slot="trigger"
        variant="icon"
        size="sm"
        ariaLabel="This button triggers a tooltip"
      >
        <PdsIconHelpCircle
          color={themedefault.SemanticBorderInteractiveDefault}
        />
      </PdsButton>
      Tooltip content
    </PdsTooltip>
  </>
);

export const SubtleTop = SubtleTopTemplate.bind({});
SubtleTop.storyName = 'Subtle top';
SubtleTop.args = {
  variant: 'subtle',
  placement: 'top',
};

const SubtleLeftTemplate: StoryFn<typeof PdsTooltip> = (args: any) => (
  <>
    <span style={{ marginLeft: '100px' }} />
    <PdsTooltip {...args}>
      <PdsButton
        slot="trigger"
        variant="icon"
        size="sm"
        ariaLabel="This button triggers a tooltip"
      >
        <PdsIconHelpCircle
          color={themedefault.SemanticBorderInteractiveDefault}
        />
      </PdsButton>
      tooltip
    </PdsTooltip>
  </>
);

export const SubtleLeft = SubtleLeftTemplate.bind({});
SubtleLeft.storyName = 'Subtle left';
SubtleLeft.args = {
  variant: 'subtle',
  placement: 'left',
};

export const SubtleRight = Template.bind({});
SubtleRight.storyName = 'Subtle right';
SubtleRight.args = {
  variant: 'subtle',
  placement: 'right',
};

export const SubtleBottom = Template.bind({});
SubtleBottom.storyName = 'Subtle bottom';
SubtleBottom.args = {
  variant: 'subtle',
  placement: 'bottom',
};

const LinkTemplate: StoryFn<typeof PdsTooltip> = (args: any) => (
  <PdsTooltip {...args}>
    <PdsButton
      slot="trigger"
      link="default"
      ariaLabel="This button triggers a tooltip"
    >
      This is a button that looks like a link
    </PdsButton>
    Tooltip content
  </PdsTooltip>
);

export const Link = LinkTemplate.bind({});
Link.args = {
  variant: 'default',
  placement: 'right',
};
