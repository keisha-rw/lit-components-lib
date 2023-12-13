import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PdsDataTable } from './data-table';
import { PdsDataTableColumns } from '../data-table-columns/data-table-columns';
import { PdsDataTableColumn } from '../data-table-column/data-table-column';
import { PdsDataTableCell } from '../data-table-cell/data-table-cell';
import { PdsDataTableRows } from '../data-table-rows/data-table-rows';
import { PdsDataTableRow } from '../data-table-row/data-table-row';
import { PdsActionMenu } from '../action-menu/action-menu';
import { PdsActionMenuItem } from '../action-menu-item/action-menu-item';
import { PdsCard } from '../card/card';
import { PdsHeading } from '../heading/heading';
import { PdsSelect } from '../select/select';
import { PdsSwitch } from '../switch/switch';
import { PdsDataTableInputColumn } from '../data-table-input-column/data-table-input-column';
import { PdsTextInput } from '../text-input/text-input';

const columns = [
  {
    id: 'firstName',
    header: 'First name',
    accessorKey: 'firstName',
  },
  {
    id: 'lastName',
    header: 'Last name',
    accessorKey: 'lastName',
  },
  {
    id: 'alterEgo',
    header: 'Alter ego',
    meta: {
      align: 'right',
    },
    accessorKey: 'alterEgo',
  },
  {
    id: 'filterableContent',
    meta: {
      hidden: true,
    },
    accessorKey: 'filterableContent',
  },
];

const data = [
  {
    firstName: 'Michael',
    lastName: 'Jordan',
    alterEgo: 'Air Jordan',
    filterableContent: 'This is full width content',
    subRows: [
      {
        fullWidth: 'This is full width content',
        filterableContent: 'This is full width content',
      },
    ],
  },
  {
    firstName: 'Arthur',
    lastName: 'Curry',
    status: 'single',
    alterEgo: 'Aquaman',
    filterableContent:
      'This is full width content This is a second full width content',
    subRows: [
      {
        fullWidth: 'This is full width content',
        filterableContent: 'This is full width content',
      },
      {
        fullWidth: 'This is a second full width content',
        filterableContent: 'This is a second full width content',
      },
    ],
  },
];

export default {
  title: 'Components/Data table',
  component: PdsDataTable,
  tags: ['autodocs'],
  parameters: {
    happo: {
      // @ts-expect-error
      waitFor: () => document.querySelector('pds-data-table')?.updateComplete,
      delay: 1000,
    },
    actions: {
      handles: [
        'pds-data-table-input-updated',
        'pds-data-table-sorted',
        'pds-pagination-click',
        'pds-pagination-item-click',
        'pds-text-input-change',
        'pds-text-input-input',
        'pds-select-change',
        'pds-switch-toggle-on',
        'pds-switch-toggle-off',
      ],
    },
  },
};

const Template: StoryFn<typeof PdsDataTable> = (args) => (
  <PdsDataTable
    {...args}
    tableSorted={(e: any) => action('pds-data-table-sorted')(e.detail)}
  >
    <PdsHeading slot="caption" variant="title-default" headingTag="h3">
      Example table heading
    </PdsHeading>
    <PdsDataTableColumns slot="columns">
      <PdsDataTableColumn columnId="firstName">First name</PdsDataTableColumn>

      <PdsDataTableColumn columnId="lastName">Last name</PdsDataTableColumn>

      <PdsDataTableColumn columnId="alterEgo">Alter ego</PdsDataTableColumn>
      <PdsDataTableColumn
        width="200px"
        align="center"
        disableSort
        columnId="action"
        type="display"
        header="Action"
      >
        <PdsActionMenu label="I want to...">
          <PdsActionMenuItem ariaLabel="Action 1">Action 1</PdsActionMenuItem>
          <PdsActionMenuItem ariaLabel="Action 2">Action 2</PdsActionMenuItem>
          <PdsActionMenuItem ariaLabel="Action 3">Action 3</PdsActionMenuItem>
          <PdsActionMenuItem
            ariaLabel="Action 4"
            linkHref="https://www.google.com"
            slot="footer"
            target="_blank"
          >
            Action 4
          </PdsActionMenuItem>
        </PdsActionMenu>
      </PdsDataTableColumn>
    </PdsDataTableColumns>
    <PdsDataTableRows slot="rows">
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Clark</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Kent</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">100</PdsDataTableCell>
        <PdsDataTableCell cellId="status">relationship</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Superman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Bruce</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Wayne</PdsDataTableCell>
        <PdsDataTableCell cellId="age">40</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">40</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">80</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Batman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Oliver</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Queen</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">60</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">70</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Green Arrow</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Arthur</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Curry</PdsDataTableCell>
        <PdsDataTableCell cellId="age">32</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">10</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">90</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Aquaman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Diana</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Prince</PdsDataTableCell>
        <PdsDataTableCell cellId="age">36</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">55</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Wonder Woman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">20</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Not Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">20</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Clark</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Kent</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">100</PdsDataTableCell>
        <PdsDataTableCell cellId="status">relationship</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Superman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Bruce</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Wayne</PdsDataTableCell>
        <PdsDataTableCell cellId="age">40</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">40</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">80</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Batman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Oliver</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Queen</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">60</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">70</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Green Arrow</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Arthur</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Curry</PdsDataTableCell>
        <PdsDataTableCell cellId="age">32</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">10</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">90</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Aquaman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Diana</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Prince</PdsDataTableCell>
        <PdsDataTableCell cellId="age">36</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">55</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Wonder Woman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">20</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Not Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">20</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Clark</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Kent</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">100</PdsDataTableCell>
        <PdsDataTableCell cellId="status">relationship</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Superman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Bruce</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Wayne</PdsDataTableCell>
        <PdsDataTableCell cellId="age">40</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">40</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">80</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Batman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Oliver</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Queen</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">60</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">70</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Green Arrow</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Arthur</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Curry</PdsDataTableCell>
        <PdsDataTableCell cellId="age">32</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">10</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">90</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Aquaman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Diana</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Prince</PdsDataTableCell>
        <PdsDataTableCell cellId="age">36</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">55</PdsDataTableCell>
        <PdsDataTableCell cellId="status">single</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Wonder Woman</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">20</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Not Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="visits">20</PdsDataTableCell>
        <PdsDataTableCell cellId="status">complicated</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
      </PdsDataTableRow>
    </PdsDataTableRows>
  </PdsDataTable>
);

const TemplateExpandable: StoryFn<typeof PdsDataTable> = (args) => (
  <PdsDataTable {...args}>
    <PdsHeading slot="caption" variant="title-default" headingTag="h3">
      Example table heading
    </PdsHeading>
    <PdsDataTableColumns slot="columns">
      <PdsDataTableColumn columnId="firstName">
        <div>First name</div>
      </PdsDataTableColumn>

      <PdsDataTableColumn columnId="lastName">
        <div>
          <div>Last name</div>
        </div>
      </PdsDataTableColumn>

      <PdsDataTableColumn columnId="alterEgo">
        <div>Alter ego</div>
      </PdsDataTableColumn>
    </PdsDataTableColumns>
    <PdsDataTableRows slot="rows">
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Michael</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Jordan</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Air Jordan</PdsDataTableCell>
        <PdsDataTableCell cellId="filterableContent">
          This is a full width table cell touting the career of Michael Jordan
        </PdsDataTableCell>
        <PdsDataTableRow>
          <PdsDataTableCell cellId="filterableContent">
            This is a full width table cell touting the career of Michael Jordan
          </PdsDataTableCell>
          <PdsDataTableCell cellId="fullWidth">
            <PdsCard direction="horizontal">
              <div>
                <img
                  alt="basketball"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
                />
                <span>
                  This is a full width table cell touting the career of Michael
                  Jordan
                </span>
              </div>
            </PdsCard>
          </PdsDataTableCell>
        </PdsDataTableRow>
      </PdsDataTableRow>
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Arthur</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Curry</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Aquaman</PdsDataTableCell>
        <PdsDataTableRow>
          <PdsDataTableCell cellId="firstName">Diana</PdsDataTableCell>
          <PdsDataTableCell cellId="lastName">Prince</PdsDataTableCell>
          <PdsDataTableRow>
            <PdsDataTableCell cellId="filterableContent">
              This is a full width table cell touting the career of Michael
              Jordan
            </PdsDataTableCell>
            <PdsDataTableCell cellId="fullWidth">
              <PdsCard direction="horizontal">
                <div>
                  <img
                    alt="basketball"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
                  />
                  <span>
                    This is a full width table cell touting the career of
                    Michael Jordan
                  </span>
                </div>
              </PdsCard>
            </PdsDataTableCell>
          </PdsDataTableRow>
        </PdsDataTableRow>
        <PdsDataTableRow>
          <PdsDataTableCell cellId="firstName">Arthur</PdsDataTableCell>
          <PdsDataTableCell cellId="lastName">Curry</PdsDataTableCell>
          <PdsDataTableCell cellId="alterEgo">Aquaman</PdsDataTableCell>
          <PdsDataTableRow>
            <PdsDataTableCell cellId="firstName">Diana</PdsDataTableCell>
            <PdsDataTableCell cellId="lastName">Prince</PdsDataTableCell>
            <PdsDataTableCell cellId="alterEgo">Wonder Woman</PdsDataTableCell>
          </PdsDataTableRow>
          <PdsDataTableRow>
            <PdsDataTableCell cellId="firstName">Tony</PdsDataTableCell>
            <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
            <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
          </PdsDataTableRow>
          <PdsDataTableRow>
            <PdsDataTableCell cellId="firstName">Not Tony</PdsDataTableCell>
            <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
            <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
          </PdsDataTableRow>
        </PdsDataTableRow>
      </PdsDataTableRow>
    </PdsDataTableRows>
  </PdsDataTable>
);

const TemplateLoadData: StoryFn<typeof PdsDataTable> = (args) => (
  // @ts-expect-error
  <PdsDataTable columns={columns} data={data} {...args}>
    <PdsHeading slot="caption" variant="title-default" headingTag="h3">
      Example table heading
    </PdsHeading>
  </PdsDataTable>
);

const TemplateLoading: StoryFn<typeof PdsDataTable> = (args) => (
  <PdsDataTable {...args}>
    <PdsHeading slot="caption" variant="title-default" headingTag="h3">
      Example table heading
    </PdsHeading>
  </PdsDataTable>
);

const TemplateInputCells: StoryFn<typeof PdsDataTable> = (args) => (
  <PdsDataTable
    {...args}
    tableSorted={(e: any) => action('pds-data-table-sorted')(e.detail)}
  >
    <PdsHeading slot="caption" variant="title-default" headingTag="h3">
      Example table heading
    </PdsHeading>
    <PdsDataTableColumns slot="columns">
      <PdsDataTableColumn columnId="firstName">First name</PdsDataTableColumn>
      <PdsDataTableInputColumn
        columnId="editFirstName"
        dataSyncId="firstName"
        inputLabel="Edit first name"
        width="200px"
      >
        Edit first name
        <PdsTextInput
          slot="input"
          hideLabel
          size="sm"
          label="edit first name"
          name="Edit first name"
        />
      </PdsDataTableInputColumn>
      <PdsDataTableColumn columnId="lastName">Last name</PdsDataTableColumn>
      <PdsDataTableColumn columnId="salary" hidden>
        Salary
      </PdsDataTableColumn>
      <PdsDataTableColumn columnId="universe" hidden>
        Universe
      </PdsDataTableColumn>
      <PdsDataTableInputColumn
        columnId="universeInput"
        dataSyncId="universe"
        onChange={(e: any) => action('pds-data-table-input-updated')(e.detail)}
      >
        <>
          <span>Universe</span>

          <PdsSelect name="mahselect" slot="input" size="sm" hideLabel>
            <span slot="label">Comic universe</span>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
          </PdsSelect>
        </>
      </PdsDataTableInputColumn>
      <PdsDataTableColumn columnId="active" hidden>
        Active
      </PdsDataTableColumn>
      <PdsDataTableInputColumn
        columnId="activeInput"
        dataSyncId="active"
        onChange={(e: any) => action('pds-data-table-input-updated')(e.detail)}
      >
        <>
          <span>Active</span>

          <PdsSwitch
            hideLabel
            name="active-switch"
            label="Active switch"
            slot="input"
          />
        </>
      </PdsDataTableInputColumn>
      <PdsDataTableColumn columnId="alterEgo">Alter ego</PdsDataTableColumn>

      <PdsDataTableInputColumn
        columnId="editSalary"
        dataSyncId="salary"
        width="200px"
      >
        Salary
        <PdsTextInput
          slot="input"
          hideLabel
          size="sm"
          label="edit salary"
          name=""
        />
      </PdsDataTableInputColumn>
    </PdsDataTableColumns>

    <PdsDataTableRows slot="rows">
      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Clark</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Kent</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="salary">100</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Superman</PdsDataTableCell>
        <PdsDataTableCell cellId="universe">DC</PdsDataTableCell>
        <PdsDataTableCell cellId="active">on</PdsDataTableCell>
      </PdsDataTableRow>

      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Bruce</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Wayne</PdsDataTableCell>
        <PdsDataTableCell cellId="age">40</PdsDataTableCell>
        <PdsDataTableCell cellId="salary">40</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">80</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Batman</PdsDataTableCell>
        <PdsDataTableCell cellId="universe">DC</PdsDataTableCell>
        <PdsDataTableCell cellId="active">on</PdsDataTableCell>
      </PdsDataTableRow>

      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Oliver</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Queen</PdsDataTableCell>
        <PdsDataTableCell cellId="age">24</PdsDataTableCell>
        <PdsDataTableCell cellId="salary">60</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">70</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Green Arrow</PdsDataTableCell>
        <PdsDataTableCell cellId="universe">DC</PdsDataTableCell>
        <PdsDataTableCell cellId="active">off</PdsDataTableCell>
      </PdsDataTableRow>

      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Arthur</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Curry</PdsDataTableCell>
        <PdsDataTableCell cellId="age">32</PdsDataTableCell>
        <PdsDataTableCell cellId="salary">10</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">90</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Aquaman</PdsDataTableCell>
        <PdsDataTableCell cellId="universe">DC</PdsDataTableCell>
        <PdsDataTableCell cellId="active">off</PdsDataTableCell>
      </PdsDataTableRow>

      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Diana</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Prince</PdsDataTableCell>
        <PdsDataTableCell cellId="age">36</PdsDataTableCell>
        <PdsDataTableCell cellId="salary">55</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">50</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Wonder Woman</PdsDataTableCell>
        <PdsDataTableCell cellId="universe">DC</PdsDataTableCell>
        <PdsDataTableCell cellId="active">off</PdsDataTableCell>
      </PdsDataTableRow>

      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="salary">20</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
        <PdsDataTableCell cellId="universe">Marvel</PdsDataTableCell>
        <PdsDataTableCell cellId="active">on</PdsDataTableCell>
      </PdsDataTableRow>

      <PdsDataTableRow>
        <PdsDataTableCell cellId="firstName">Not Tony</PdsDataTableCell>
        <PdsDataTableCell cellId="lastName">Stark</PdsDataTableCell>
        <PdsDataTableCell cellId="age">45</PdsDataTableCell>
        <PdsDataTableCell cellId="salary">20</PdsDataTableCell>
        <PdsDataTableCell cellId="progress">10</PdsDataTableCell>
        <PdsDataTableCell cellId="alterEgo">Iron Man</PdsDataTableCell>
        <PdsDataTableCell cellId="universe">Marvel</PdsDataTableCell>
        <PdsDataTableCell cellId="active">off</PdsDataTableCell>
      </PdsDataTableRow>
    </PdsDataTableRows>
  </PdsDataTable>
);

export const Default = Template.bind({});
Default.args = {};

export const StripedEven = Template.bind({});
StripedEven.storyName = 'Striped even';
StripedEven.args = { striped: 'even' };

export const HideFilter = Template.bind({});
HideFilter.storyName = 'Hide filter';
HideFilter.args = {
  hideFilter: true,
};

export const ExpandableRows = TemplateExpandable.bind({});
ExpandableRows.storyName = 'Expandable rows';

export const RemoveBorder = Template.bind({});
RemoveBorder.storyName = 'Remove border';
RemoveBorder.args = { removeBorder: true };

export const DataTableWithStickyHeader = Template.bind({});
DataTableWithStickyHeader.storyName = 'Sticky header';
DataTableWithStickyHeader.args = {
  stickyHeader: true,
  paginationVariant: 'none',
};

export const DataTableWithStickyColumn = Template.bind({});
DataTableWithStickyColumn.storyName = 'Sticky column';
DataTableWithStickyColumn.args = { stickyColumn: true };

export const DataTableWithFixedHeightAndStickyHeader = Template.bind({});
DataTableWithFixedHeightAndStickyHeader.storyName =
  'Fixed height and sticky header';
DataTableWithFixedHeightAndStickyHeader.args = {
  stickyHeader: true,
  fixedHeight: '300px',
  paginationVariant: 'none',
};

export const HidePagination = Template.bind({});
HidePagination.storyName = 'Hide pagination';
HidePagination.args = { paginationVariant: 'none' };

export const DisableAllSorting = Template.bind({});
DisableAllSorting.storyName = 'Disable all sorting';
DisableAllSorting.args = { disableAllSorting: true };

export const HideCaption = Template.bind({});
HideCaption.storyName = 'Hide caption';
HideCaption.args = { hideCaption: true };

export const LoadDataFromObject = TemplateLoadData.bind({});
LoadDataFromObject.storyName = 'Load data from object';

export const Loading = TemplateLoading.bind({});

export const HoverableRows = Template.bind({});
HoverableRows.storyName = 'Hoverable rows';
HoverableRows.args = { hoverableRows: true };

export const InputCells = TemplateInputCells.bind({});
InputCells.storyName = 'Input cells';
