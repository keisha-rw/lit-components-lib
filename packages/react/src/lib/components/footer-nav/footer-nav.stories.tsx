import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsFooterNav } from './footer-nav';
import { PdsFooterNavItem } from '../footer-nav-item/footer-nav-item';
import { PdsLink } from '../link/link';
import { PdsList } from '../list/list';
import { PdsListItem } from '../list-item/list-item';

export default {
  title: 'Components/Footer/Footer nav',
  component: PdsFooterNav,
  tags: ['autodocs'],
  parameters: {
    happo: false,
    docs: {
      description: {
        component:
          'Note: This component is ONLY meant to be used as a subcomponent of the footer component when creating a super footer.',
      },
    },
  },
};

const Template: StoryFn<typeof PdsFooterNav> = (args) => (
  <PdsFooterNav {...args}>
    <PdsFooterNavItem label="Our company">
      <PdsList>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            About us
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Investor relations
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            News room
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Sustainability
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Insights
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
    <PdsFooterNavItem label="We're hiring">
      <PdsList>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Careers
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Global jobs
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Financial professional opportunities
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Internships
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Recent graduates
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>

    <PdsFooterNavItem label="Other sites">
      <PdsList>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            For dental providers
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            For financial professionals
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Company Co Asset Management
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
  </PdsFooterNav>
);

export const Default = Template.bind({});
Default.args = { variant: 'default' };

const FourColsTemplate: StoryFn<typeof PdsFooterNav> = (args) => (
  <PdsFooterNav {...args}>
    <PdsFooterNavItem label="Our company">
      <PdsList>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            About us
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Investor relations
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            News room
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Sustainability
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Insights
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
    <PdsFooterNavItem label="We're hiring">
      <PdsList>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Careers
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Global jobs
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Financial professional opportunities
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Internships
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Recent graduates
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>

    <PdsFooterNavItem label="Other sites">
      <PdsList>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            For dental providers
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            For financial professionals
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Company Co Asset Management
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
    <PdsFooterNavItem label="Fourth column">
      <PdsList>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            About us again
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Still investor relations
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            News room two
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            Sustainable sustainability
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink variant="default" href="#">
            More insights
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsFooterNavItem>
  </PdsFooterNav>
);
export const FourCols = FourColsTemplate.bind({});
FourCols.args = { behavior: '4col' };
FourCols.storyName = 'Four columns';
