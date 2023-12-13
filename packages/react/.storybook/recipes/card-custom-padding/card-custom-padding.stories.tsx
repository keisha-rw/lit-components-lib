import * as React from 'react';
import { PdsCard } from '../../../src/lib/components/card/card';
import { PdsHeading } from '../../../src/lib/components/heading/heading';

export default {
  title: 'Recipes/Card with custom padding',
  component: 'card-custom-padding',
  tags: ['autodocs'],
  parameters: {
    options: { showPanel: false },
  },
  argTypes: null,
};

export const CardWithCustomPadding = () => (
  <PdsCard removePadding>
    <div slot="header" className="pds-u-margin-12">
      <PdsHeading headingTag="h2" variant="headline-sm">
        Card title
      </PdsHeading>
    </div>
    <p className="pds-u-margin-12 pds-u-typography-body-default">
      This card has a custom padding of 12px instead of the default. The 12px is
      applied on the slotted card content.
    </p>
    <div
      className="pds-u-margin-12 pds-u-typography-body-default"
      slot="footer"
    >
      <p>Lorem ipsum footer</p>
    </div>
  </PdsCard>
);
CardWithCustomPadding.storyName = 'Default';
