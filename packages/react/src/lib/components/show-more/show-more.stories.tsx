import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsShowMore } from './show-more';

export default {
  title: 'Components/Show more',
  component: PdsShowMore,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['pds-show-more-open', 'pds-show-more-close'],
    },
  },
};

const Template: StoryFn<typeof PdsShowMore> = (args) => (
  <PdsShowMore {...args}>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pretium aenean
        pharetra magna ac. Convallis a cras semper auctor neque vitae tempus
        quam pellentesque. Elit ut aliquam purus sit amet luctus venenatis
        lectus magna. Donec adipiscing tristique risus nec feugiat in fermentum
        posuere urna. Tristique sollicitudin nibh sit amet commodo. Pellentesque
        sit amet porttitor eget dolor morbi non arcu risus. Id porta nibh
        venenatis cras sed felis eget. Fermentum iaculis eu non diam phasellus
        vestibulum. Hac habitasse platea dictumst vestibulum rhoncus est
        pellentesque elit. Integer vitae justo eget magna fermentum iaculis eu
        non. Est ante in nibh mauris cursus mattis. Nunc lobortis mattis aliquam
        faucibus purus in massa tempor. Sed blandit libero volutpat sed cras
        ornare arcu. Ut placerat orci nulla pellentesque. Tempus imperdiet nulla
        malesuada pellentesque elit eget. Euismod lacinia at quis risus sed
        vulputate. Lectus quam id leo in vitae. Id porta nibh venenatis cras sed
        felis. Risus pretium quam vulputate dignissim suspendisse in est. Tellus
        in metus vulputate eu. Quam id leo in vitae turpis massa sed. Pharetra
        convallis posuere morbi leo urna molestie at elementum eu. Sit amet nisl
        purus in mollis nunc. Sed velit dignissim sodales ut eu sem integer.
      </p>
    </div>
  </PdsShowMore>
);

export const Default = Template.bind({});
Default.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
Inverted.parameters = {
  backgrounds: {
    default: 'BrandXStrong',
  },
};
