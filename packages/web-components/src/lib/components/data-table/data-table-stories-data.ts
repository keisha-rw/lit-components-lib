import { html } from 'lit';

export const columnsModelOne = html`<!-- Column definitions begin -->
  <pds-data-table-columns slot="columns">
    <pds-data-table-column columnId="firstName">
      First name</pds-data-table-column
    >

    <pds-data-table-column columnId="lastName">Last name</pds-data-table-column>

    <pds-data-table-column columnId="alterEgo">
      Alter ego
    </pds-data-table-column>

    <pds-data-table-column columnId="salary" align="right">
      Salary
    </pds-data-table-column>

    <pds-data-table-column
      header="Action"
      width="150px"
      align="center"
      columnId="actionMenu"
      type="display"
      disableSort
    >
      <pds-action-menu label="I want to...">
        <pds-action-menu-item
          arialabel="Action 1"
          onClick="console.log('Click from ' + event.target.textContent + ' in row index  ' + event.target.closest('.pds-c-table__tr').getAttribute('key'))"
          >Action 1</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 2"
          onClick="console.log('Click from ' + event.target.textContent + ' in row index  ' + event.target.closest('.pds-c-table__tr').getAttribute('key'))"
          >Action 2</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 3"
          onClick="console.log('Click from ' + event.target.textContent + ' in row index  ' + event.target.closest('.pds-c-table__tr').getAttribute('key'))"
          >Action 3</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 4"
          linkhref="https://www.google.com"
          target="_blank"
          slot="footer"
          >Action 4</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 4"
          linkhref="https://www.google.com"
          target="_blank"
          slot="footer"
          >Action 5</pds-action-menu-item
        >
      </pds-action-menu>
    </pds-data-table-column>
  </pds-data-table-columns>
  <!-- Column definitions end -->`;

export const columnsModelTwo = html`<!-- Column definitions begin -->
  <pds-data-table-columns slot="columns">
    <pds-data-table-column columnId="firstName">
      First name
    </pds-data-table-column>

    <pds-data-table-column columnId="lastName">
      Last name
    </pds-data-table-column>

    <pds-data-table-column columnId="alterEgo">
      Alter ego
    </pds-data-table-column>

    <pds-data-table-column
      width="200px"
      align="center"
      header="Action"
      columnId="actionMenu"
      type="display"
      disableSort
    >
      <pds-action-menu label="I want to...">
        <pds-action-menu-item
          arialabel="Action 1"
          onClick="console.log('Click from ' + event.target.textContent + ' in row index  ' + event.target.closest('.pds-c-table__tr').getAttribute('key'))"
          >Action 1</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 2"
          onClick="console.log('Click from ' + event.target.textContent + ' in row index  ' + event.target.closest('.pds-c-table__tr').getAttribute('key'))"
          >Action 2</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 3"
          onClick="console.log('Click from ' + event.target.textContent + ' in row index  ' + event.target.closest('.pds-c-table__tr').getAttribute('key'))"
          >Action 3</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 4"
          linkhref="https://www.google.com"
          target="_blank"
          slot="footer"
          >Action 4</pds-action-menu-item
        >
        <pds-action-menu-item
          arialabel="Action 4"
          linkhref="https://www.google.com"
          target="_blank"
          slot="footer"
          >Action 5</pds-action-menu-item
        >
      </pds-action-menu>
    </pds-data-table-column>
  </pds-data-table-columns>
  <!-- Column definitions end -->`;

export const columnsModelThree = html`<!-- Column definitions begin -->
  <pds-data-table-columns slot="columns">
    <pds-data-table-column columnId="firstName">
      First name
    </pds-data-table-column>

    <pds-data-table-column columnId="lastName">
      Last name
    </pds-data-table-column>

    <pds-data-table-column columnId="alterEgo">
      Alter ego
    </pds-data-table-column>

    <pds-data-table-column
      columnId="action"
      header="Action"
      disableSort
      type="display"
      width="110px"
    >
      <pds-button
        link="default"
        removeLinkPadding
        onClick="console.log('Click from row index ' + this.closest('.pds-c-table__tr').getAttribute('key'))"
        >Download</pds-button
      >
    </pds-data-table-column>
  </pds-data-table-columns>
  <!-- Column definitions end -->`;

export const columnsModelFour = html`<!-- Column definitions begin -->
  <pds-data-table-columns slot="columns">
    <pds-data-table-column columnId="firstName">
      First name
    </pds-data-table-column>

    <pds-data-table-input-column
      columnId="editFirstName"
      dataSyncId="firstName"
      width="200px"
      >First name<pds-text-input
        slot="input"
        hideLabel
        size="sm"
        label="edit first name"
        name="First name"
      ></pds-text-input>
    </pds-data-table-input-column>

    <pds-data-table-column columnId="lastName">
      Last name
    </pds-data-table-column>

    <pds-data-table-column hidden columnId="salary"
      >Salary</pds-data-table-column
    >

    <pds-data-table-column hidden columnId="universe"></pds-data-table-column>

    <pds-data-table-input-column
      columnId="editUniverse"
      dataSyncId="universe"
      width="175px"
      ><span
        >Universe<pds-tooltip variant="subtle" placement="bottom">
          <pds-button
            slot="trigger"
            variant="icon"
            size="sm"
            arialabel="This is help for this input column"
          >
            <pds-icon-help-circle></pds-icon-help-circle
          ></pds-button>
          What comic universe is this individual from</pds-tooltip
        ></span
      >
      <pds-select
        slot="input"
        name="select-field"
        label="Comic universe"
        size="sm"
        hideLabel
      >
        <option value="DC">DC</option>
        <option value="Marvel">Marvel</option>
      </pds-select>
    </pds-data-table-input-column>
    <pds-data-table-input-column
      columnId="editActive"
      dataSyncId="active"
      width="175px"
      ><span>Active</span>
      <pds-switch
        slot="input"
        name="active-field"
        label="Active"
        hideLabel
      ></pds-switch>
    </pds-data-table-input-column>
    <pds-data-table-column columnId="alterEgo">
      Alter ego
    </pds-data-table-column>

    <pds-data-table-input-column
      columnId="editSalary"
      dataSyncId="salary"
      width="200px"
      >Salary<pds-text-input
        slot="input"
        hideLabel
        size="sm"
        label="edit salary"
        name="Salary"
      ></pds-text-input>
    </pds-data-table-input-column>
  </pds-data-table-columns>
  <!-- Column definitions end -->`;

export const rowsModelOne = html`<!-- Row definitions begin -->
  <pds-data-table-rows slot="rows">
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
      <pds-data-table-cell cellId="universe">DC</pds-data-table-cell>
      <pds-data-table-cell cellId="active">on</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Tony</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
      <pds-data-table-cell cellId="universe">Marvel</pds-data-table-cell>
      <pds-data-table-cell cellId="active">off</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$10,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Iron Man</pds-data-table-cell>
    </pds-data-table-row>
  </pds-data-table-rows>
  <!-- Row definitions end -->`;

export const rowsModelCollapsible = html`<!-- Row definitions begin -->
  <pds-data-table-rows slot="rows">
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row> </pds-data-table-row
    ><pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row> </pds-data-table-row
    ><pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row> </pds-data-table-row
    ><pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row> </pds-data-table-row
    ><pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row> </pds-data-table-row
    ><pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row> </pds-data-table-row
    ><pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row> </pds-data-table-row
    ><pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$100,000,000</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of Michael
        Jordan</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of Michael
          Jordan</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of Michael
              Jordan</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
      <pds-data-table-cell cellId="filterableContent"
        >This is a full width table cell touting the career of
        Aquaman</pds-data-table-cell
      >
      <pds-data-table-row>
        <pds-data-table-cell cellId="filterableContent"
          >This is a full width table cell touting the career of
          Aquaman</pds-data-table-cell
        >
        <pds-data-table-cell cellId="fullWidth"
          ><pds-card direction="horizontal">
            <div slot="header">
              <img
                alt="basketball"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve' height='100px' width='100px'%3E%250A%3Cg%3E%250A%2509%3Cpath d='M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z'/%3E%250A%2509%3Cpath d='M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z'/%3E%250A%2509%3Cpath d='M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z'/%3E%250A%2509%3Cpath d='M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6 c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z'/%3E%250A%2509%3Cpath d='M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z'/%3E%250A%2509%3Cpath d='M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7 c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z'/%3E%250A%2509%3Cpath d='M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7 C20.6,84.2,23.2,86.3,26.2,88.2z'/%3E%250A%2509%3Cpath d='M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6 c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z'/%3E%250A%3C/g%3E%250A%3C/svg%3E"
              />
            </div>
            <span
              >This is a full width table cell touting the career of
              Aquaman</span
            >
          </pds-card>
        </pds-data-table-cell>
      </pds-data-table-row>
    </pds-data-table-row>
  </pds-data-table-rows>
  <!-- Row definitions end -->`;

export const rowsModelPagination = html`<!-- Row definitions begin -->
  <pds-data-table-rows slot="rows">
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName"
        ><span data-info="to demonstrate data within a node">Michael</span
        ><span>J</span></pds-data-table-cell
      >
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="status">single</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
      <pds-data-table-cell cellId="status">single</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Tony</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
      <pds-data-table-cell cellId="status">complicated</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Iron Man</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Not Tony</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
      <pds-data-table-cell cellId="status">complicated</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Not Iron Man</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
      <pds-data-table-cell cellId="status">single</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Tony</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
      <pds-data-table-cell cellId="status">complicated</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Iron Man</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Scott</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Michael Scarn</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Junie B</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jones</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo"
        >Junie Beatrice Jones</pds-data-table-cell
      >
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">David</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Bowie</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo"
        >Ziggy Stardust</pds-data-table-cell
      >
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Clark</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Kent</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Superman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Doctor</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jekyll</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Mr. Hyde</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Miley</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Cyrus</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo"
        >Hannah Montana</pds-data-table-cell
      >
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Bruce</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Wayne</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Batman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Not Bruce</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Wayne</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Batman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Michael</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Scott</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Michael Scarn</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName"
        ><span data-info="to demonstrate data within a node">Michael</span
        ><span>J</span></pds-data-table-cell
      >
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="status">single</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
      <pds-data-table-cell cellId="status">single</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Tony</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
      <pds-data-table-cell cellId="status">complicated</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Iron Man</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Clark</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Kent</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Superman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Doctor</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Jekyll</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Mr. Hyde</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName"
        ><span data-info="to demonstrate data within a node">Michael</span
        ><span>J</span></pds-data-table-cell
      >
      <pds-data-table-cell cellId="lastName">Jordan</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Air Jordan</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Arthur</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Curry</pds-data-table-cell>
      <pds-data-table-cell cellId="status">single</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Aquaman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
      <pds-data-table-cell cellId="status">single</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
    </pds-data-table-row>
    <pds-data-table-row>
      <pds-data-table-cell cellId="firstName">Miley</pds-data-table-cell>
      <pds-data-table-cell cellId="lastName">Cyrus</pds-data-table-cell>
      <pds-data-table-cell cellId="status">relationship</pds-data-table-cell>
      <pds-data-table-cell cellId="alterEgo"
        >Hannah Montana</pds-data-table-cell
      >
    </pds-data-table-row>
  </pds-data-table-rows>
  <!-- Row definitions end -->`;
