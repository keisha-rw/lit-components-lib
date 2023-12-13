import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './show-more';
import '../link/link';

export default {
  title: 'Components/Show more',
  component: 'pds-show-more',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'variant',
      control: 'select',
      options: ['default', 'inverted'],
    },
    open: { control: 'boolean' },
  },
  parameters: {
    actions: {
      handles: ['pds-show-more-open', 'pds-show-more-close'],
    },
  },
  render: (args) =>
    html`<pds-show-more
      variant="${args.variant || nothing}"
      ?open="${args.open}"
      showMoreText="${args.showMoreText || nothing}"
      showLessText="${args.showLessText || nothing}"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pretium aenean
        pharetra magna ac. Convallis a cras semper auctor neque vitae tempus
        quam pellentesque. Elit ut aliquam purus sit amet luctus venenatis
        lectus magna. Donec adipiscing tristique risus nec feugiat in fermentum
        posuere urna. Tristique sollicitudin nibh sit amet commodo. Pellentesque
        sit amet porttitor eget dolor morbi non arcu risus. Id porta nibh
        venenatis cras sed felis eget. Fermentum iaculis eu non diam phasellus
        vestibulum. <pds-link href="#">link</pds-link> Hac habitasse platea
        dictumst pellentesque elit. Integer vitae justo eget magna fermentum
        iaculis eu non. Est ante in nibh mauris cursus mattis. Nunc lobortis
        mattis aliquam faucibus purus in massa tempor. Sed blandit libero
        volutpat sed cras ornare arcu. Ut placerat orci nulla pellentesque.
        Tempus imperdiet nulla malesuada pellentesque elit eget. Euismod lacinia
        at quis risus sed vulputate. Lectus quam id leo in vitae. Id porta nibh
        venenatis cras sed felis. Risus pretium quam vulputate dignissim
        suspendisse in est. Tellus in metus vulputate eu. Quam id leo in vitae
        turpis massa sed. Pharetra convallis posuere morbi leo urna molestie at
        elementum eu. Sit amet nisl purus in mollis nunc. Sed velit dignissim
        sodales ut eu sem integer.
      </p></pds-show-more
    >`,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Inverted: StoryObj = {
  name: 'Inverted',
  args: {
    variant: 'inverted',
  },
  parameters: {
    backgrounds: {
      default: 'BrandXStrong',
    },
  },
};
