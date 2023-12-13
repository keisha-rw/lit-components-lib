/* eslint-disable import/no-duplicates */
import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import * as tabbableLib from 'tabbable';
import { PdsDataTableInputColumn } from './data-table-input-column';
import createSnapshots from '../../../../test/utils/snapshots';
import { PdsDataTable } from '../data-table/data-table';
import '../data-table/data-table';
import { PdsTextInput } from '../text-input/text-input';
import { PdsSelect } from '../select/select';
import { PdsSwitch } from '../switch/switch';

initStoryshots({
  storyKindRegex: /Data table input column/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('DataTableInputColumn unit tests', () => {
  let element: PdsDataTableInputColumn;

  beforeEach(async () => {
    element = await fixture(
      '<pds-data-table-input-column columnId="test" dataSyncId="testSync">Test<div>Testing</div></pds-data-table-input-column>',
    );
  });

  it('is an instance of PdsDataTableInputColumn', () => {
    expect(element).toBeInstanceOf(PdsDataTableInputColumn);
  });

  it('can get dynamic slot text', () => {
    expect(element.getDynamicSlotText()).toBe('Test Testing');
  });

  it('can update table data when using table inputs', async () => {
    const fullTableExample = (await fixture(
      `<pds-data-table>
        <div slot="caption">Caption</div>
        <!-- Column definitions begin -->
        <pds-data-table-columns slot="columns">
          <pds-data-table-column columnId="firstName">
            First name
          </pds-data-table-column>

          <pds-data-table-input-column
            columnId="editFirstName"
            dataSyncId="firstName"
            inputLabel="Edit first name"
            width="200px"
          ><pds-text-input slot="input" hideLabel size="sm" label="edit first name" name="First name">
          </pds-text-input>
          </pds-data-table-input-column>

          <pds-data-table-input-column
            columnId="editLastName"
            dataSyncId="lastName"
            width="200px"
          >Edit last name
            <pds-text-input slot="input" hideLabel size="sm" label="edit last name" name="Last name">
            </pds-text-input>
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
              >Universe<pds-tooltip variant="subtle">
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
            ></pds-text-input>
          </pds-data-table-input-column>
        </pds-data-table-columns>
        <!-- Column definitions end -->
        <!-- Row definitions begin -->
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
        <!-- Row definitions end -->
      </pds-data-table>`,
    )) as PdsDataTable;

    // Test default text input built from subcomponent
    const textInputWC = fullTableExample.shadowRoot?.querySelector(
      '[value=Diana]',
    ) as PdsTextInput;
    const textInputEl = textInputWC?.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    textInputEl.value = 'Nick';
    textInputEl.dispatchEvent(new Event('change'));
    textInputWC.dispatchEvent(new Event('blur'));
    // @ts-expect-error Typescript doesn't know about object structure for data
    expect(fullTableExample.data[0].firstName).toEqual('Nick');

    // Test slotted select input
    const selectInputWC = fullTableExample.shadowRoot?.querySelector(
      'pds-select',
    ) as PdsSelect;
    selectInputWC.value = 'Marvel';
    selectInputWC.dispatchEvent(new Event('pds-select-change'));
    selectInputWC.dispatchEvent(new Event('pds-select-blur'));
    // @ts-expect-error Typescript doesn't know about object structure for data
    expect(fullTableExample.data[0].universe).toEqual('Marvel');

    // Test slotted input
    const slottedTextInputWC = fullTableExample.shadowRoot?.querySelector(
      '[value="$50,000"]',
    ) as PdsTextInput;
    const slottedTextInputEl = slottedTextInputWC?.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    slottedTextInputEl.value = '$50,001';
    slottedTextInputEl.dispatchEvent(new Event('change'));
    slottedTextInputWC.dispatchEvent(new Event('blur'));
    // @ts-expect-error Typescript doesn't know about object structure for data
    expect(fullTableExample.data[0].salary).toEqual('$50,001');

    // Test slotted switch
    const slottedSwitchWC = fullTableExample.shadowRoot?.querySelectorAll(
      'pds-switch',
    )[0] as PdsSwitch;

    // cell value = "on" initializes switch state properly
    expect(slottedSwitchWC.getAttribute('checked')).toEqual('true');

    // changing switch to "off" properly sets the table cell value
    slottedSwitchWC.dispatchEvent(new Event('pds-switch-toggle-off'));
    slottedSwitchWC.dispatchEvent(new Event('pds-switch-blur'));

    expect(slottedSwitchWC.getAttribute('checked')).toBeNull();

    // @ts-expect-error Typescript doesn't know about object structure for data
    expect(fullTableExample.data[0].active).toEqual('off');

    // changing switch back to "on" properly sets the table cell value
    slottedSwitchWC.dispatchEvent(new Event('pds-switch-toggle-on'));
    slottedSwitchWC.dispatchEvent(new Event('pds-switch-blur'));

    expect(slottedSwitchWC.getAttribute('checked')).toEqual('true');

    // @ts-expect-error Typescript doesn't know about object structure for data
    expect(fullTableExample.data[0].active).toEqual('on');
  });

  it('sets focus correctly after updating a field by clicking out', async () => {
    const fullTableExample = (await fixture(
      `<pds-data-table>
        <div slot="caption">Caption</div>
        <!-- Column definitions begin -->
        <pds-data-table-columns slot="columns">
          <pds-data-table-column columnId="firstName">
            First name
          </pds-data-table-column>

          <pds-data-table-input-column
            columnId="editFirstName"
            dataSyncId="firstName"
            inputLabel="Edit first name"
            width="200px"
          >Edit first name
            <pds-text-input slot="input" hideLabel size="sm" label="edit first name" name="First name">
          </pds-text-input>
          </pds-data-table-input-column>

          <pds-data-table-input-column
            columnId="editLastName"
            dataSyncId="lastName"
            width="200px"
          >Edit last name
            <pds-text-input slot="input" hideLabel size="sm" label="edit last name" name="Last name">
          </pds-text-input>
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
              >Universe<pds-tooltip variant="subtle">
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
            ></pds-text-input>
          </pds-data-table-input-column>
        </pds-data-table-columns>
        <!-- Column definitions end -->
        <!-- Row definitions begin -->
        <pds-data-table-rows slot="rows">
          <pds-data-table-row>
            <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
            <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
            <pds-data-table-cell cellId="universe">DC</pds-data-table-cell>
            <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
            <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
          </pds-data-table-row>
          <pds-data-table-row>
            <pds-data-table-cell cellId="firstName">Tony</pds-data-table-cell>
            <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
            <pds-data-table-cell cellId="universe">Marvel</pds-data-table-cell>
            <pds-data-table-cell cellId="salary">$10,000,000</pds-data-table-cell>
            <pds-data-table-cell cellId="alterEgo">Iron Man</pds-data-table-cell>
          </pds-data-table-row>
        </pds-data-table-rows>
        <!-- Row definitions end -->
      </pds-data-table>`,
    )) as PdsDataTable;

    const editFirstNameSubcomponent = fullTableExample.querySelector(
      '[columnId="editFirstName"]',
    ) as PdsDataTableInputColumn;

    const textInputWC = fullTableExample.shadowRoot?.querySelector(
      '[value=Diana]',
    ) as PdsTextInput;
    const textInputEl = textInputWC?.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    const clickedWC = fullTableExample.shadowRoot?.querySelector(
      '[value="$50,000"]',
    ) as PdsTextInput;
    const clickedTextInput = clickedWC?.shadowRoot?.querySelector('input');

    if (clickedTextInput) {
      jest.spyOn(clickedTextInput, 'focus');
      // Mock out the call to tabbable so it returns the same objects every time
      jest.spyOn(tabbableLib, 'tabbable').mockReturnValue([clickedTextInput]);
      editFirstNameSubcomponent.elementBeingClicked = clickedTextInput;
      textInputEl.value = 'Nick';
      textInputEl.dispatchEvent(new Event('change'));
      textInputWC.dispatchEvent(new Event('blur'));

      await waitFor(() => {
        expect(clickedTextInput.focus).toHaveBeenCalledTimes(1);
      });
    }
  });

  it('sets focus correctly after updating a field by tabbing out', async () => {
    const fullTableExample = (await fixture(
      `<pds-data-table>
        <div slot="caption">Caption</div>
        <!-- Column definitions begin -->
        <pds-data-table-columns slot="columns">
          <pds-data-table-column columnId="firstName">
            First name
          </pds-data-table-column>

          <pds-data-table-input-column
            columnId="editFirstName"
            dataSyncId="firstName"
            inputLabel="Edit first name"
            width="200px"
          >Edit first name             <pds-text-input slot="input" hideLabel size="sm" label="edit first name" name="first name">
          </pds-text-input>
          </pds-data-table-input-column>

          <pds-data-table-input-column
            columnId="editLastName"
            dataSyncId="lastName"
            width="200px"
          >Edit last name            <pds-text-input slot="input" hideLabel size="sm" label="edit last name" name="Last name">
          </pds-text-input>
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
              >Universe<pds-tooltip variant="subtle">
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
            ></pds-text-input>
          </pds-data-table-input-column>
        </pds-data-table-columns>
        <!-- Column definitions end -->
        <!-- Row definitions begin -->
        <pds-data-table-rows slot="rows">
          <pds-data-table-row>
            <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
            <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
            <pds-data-table-cell cellId="universe">DC</pds-data-table-cell>
            <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
            <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
          </pds-data-table-row>
          <pds-data-table-row>
            <pds-data-table-cell cellId="firstName">Tony</pds-data-table-cell>
            <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
            <pds-data-table-cell cellId="universe">Marvel</pds-data-table-cell>
            <pds-data-table-cell cellId="salary">$10,000,000</pds-data-table-cell>
            <pds-data-table-cell cellId="alterEgo">Iron Man</pds-data-table-cell>
          </pds-data-table-row>
        </pds-data-table-rows>
        <!-- Row definitions end -->
      </pds-data-table>`,
    )) as PdsDataTable;

    const editFirstNameSubcomponent = fullTableExample.querySelector(
      '[columnId="editFirstName"]',
    ) as PdsDataTableInputColumn;

    const textInputWC = fullTableExample.shadowRoot?.querySelector(
      '[value=Diana]',
    ) as PdsTextInput;
    const textInputEl = textInputWC?.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    const tabbedWC = fullTableExample.shadowRoot?.querySelector(
      '[value="$50,000"]',
    ) as PdsTextInput;
    const tabbedTextInput = tabbedWC?.shadowRoot?.querySelector('input');

    const nextTabbedWC = fullTableExample.shadowRoot?.querySelector(
      '[value="Tony"]',
    ) as PdsTextInput;
    const nextTextInput = nextTabbedWC?.shadowRoot?.querySelector('input');

    if (tabbedTextInput && nextTextInput) {
      jest.spyOn(tabbedTextInput, 'focus');
      // Mock out the call to tabbable so it returns the same objects every time
      jest
        .spyOn(tabbableLib, 'tabbable')
        .mockReturnValue([tabbedTextInput, nextTextInput]);
      editFirstNameSubcomponent.tabKeyPressed = true;
      textInputEl.value = 'Nick';
      textInputEl.dispatchEvent(new Event('change'));
      textInputWC.dispatchEvent(new Event('blur'));

      await waitFor(() => {
        expect(tabbedTextInput.focus).toHaveBeenCalledTimes(1);
      });
    }
  });

  it('sets focus correctly after updating a field by shift tabbing out', async () => {
    const fullTableExample = (await fixture(
      `<pds-data-table>
        <div slot="caption">Caption</div>
        <!-- Column definitions begin -->
        <pds-data-table-columns slot="columns">
          <pds-data-table-column columnId="firstName">
            First name
          </pds-data-table-column>

          <pds-data-table-input-column
            columnId="editFirstName"
            dataSyncId="firstName"
            inputLabel="Edit first name"
            width="200px"
          >Edit first name <pds-text-input slot="input" hideLabel size="sm" label="edit first name" name="First name">
          </pds-text-input>
          </pds-data-table-input-column>

          <pds-data-table-input-column
            columnId="editLastName"
            dataSyncId="lastName"
            width="200px"
          >Edit last name            <pds-text-input slot="input" hideLabel size="sm" label="edit last name" name="Last name">
          </pds-text-input>
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
              >Universe<pds-tooltip variant="subtle">
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
            ></pds-text-input>
          </pds-data-table-input-column>
        </pds-data-table-columns>
        <!-- Column definitions end -->
        <!-- Row definitions begin -->
        <pds-data-table-rows slot="rows">
          <pds-data-table-row>
            <pds-data-table-cell cellId="firstName">Diana</pds-data-table-cell>
            <pds-data-table-cell cellId="lastName">Prince</pds-data-table-cell>
            <pds-data-table-cell cellId="universe">DC</pds-data-table-cell>
            <pds-data-table-cell cellId="salary">$50,000</pds-data-table-cell>
            <pds-data-table-cell cellId="alterEgo">Wonder Woman</pds-data-table-cell>
          </pds-data-table-row>
          <pds-data-table-row>
            <pds-data-table-cell cellId="firstName">Tony</pds-data-table-cell>
            <pds-data-table-cell cellId="lastName">Stark</pds-data-table-cell>
            <pds-data-table-cell cellId="universe">Marvel</pds-data-table-cell>
            <pds-data-table-cell cellId="salary">$10,000,000</pds-data-table-cell>
            <pds-data-table-cell cellId="alterEgo">Iron Man</pds-data-table-cell>
          </pds-data-table-row>
        </pds-data-table-rows>
        <!-- Row definitions end -->
      </pds-data-table>`,
    )) as PdsDataTable;

    const editLastNameSubcomponent = fullTableExample.querySelector(
      '[columnId="editLastName"]',
    ) as PdsDataTableInputColumn;

    const textInputWC = fullTableExample.shadowRoot?.querySelector(
      '[value=Prince]',
    ) as PdsTextInput;
    const textInputEl = textInputWC?.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;

    const shiftTabbedWC = fullTableExample.shadowRoot?.querySelector(
      '[value="Diana"]',
    ) as PdsTextInput;
    const shiftTabbedTextInput =
      shiftTabbedWC?.shadowRoot?.querySelector('input');

    if (shiftTabbedTextInput) {
      jest.spyOn(shiftTabbedTextInput, 'focus');
      // Mock out the call to tabbable so it returns the same objects every time
      jest
        .spyOn(tabbableLib, 'tabbable')
        .mockReturnValue([shiftTabbedTextInput, textInputEl]);
      editLastNameSubcomponent.shiftKeyPressed = true;
      editLastNameSubcomponent.tabKeyPressed = true;
      textInputEl.value = 'Petersen';
      textInputEl.dispatchEvent(new Event('change'));
      textInputWC.dispatchEvent(new Event('blur'));

      await waitFor(() => {
        expect(shiftTabbedTextInput.focus).toHaveBeenCalledTimes(1);
      });
    }
  });

  it('returns console error if more than one input element is slotted', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const erroredElement = await fixture(`<pds-data-table-input-column
    columnId="editUniverse"
    dataSyncId="universe"
    width="175px"
    ><span
      >Universe</span
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
  </pds-data-table-input-column>`);

    expect(consoleError).toBeCalledTimes(1);

    consoleError.mockRestore();
  });

  it('does not fire setCustomInput if inputTypeSlotted is not supported', async () => {
    const erroredElement = (await fixture(`<pds-data-table-input-column
    columnId="editUniverse"
    dataSyncId="universe"
    width="175px"
    ><span
      >Universe</span
    >
    <span slot="input">
      <pds-select
        name="select-field"
        label="Comic universe"
        size="sm"
        hideLabel
      >
        <option value="DC">DC</option>
        <option value="Marvel">Marvel</option>
      </pds-select>
      <pds-select
        name="select-field"
        label="Comic universe"
        size="sm"
        hideLabel
      >
        <option value="DC">DC</option>
        <option value="Marvel">Marvel</option>
      </pds-select>
    </span>
  </pds-data-table-input-column>`)) as PdsDataTableInputColumn;

    const mockSetCustomInput = jest.spyOn(erroredElement, 'setCustomInput');
    expect(mockSetCustomInput).not.toHaveBeenCalled();

    mockSetCustomInput.mockRestore();
  });

  it('sets shiftKeyPressed state', async () => {
    document.body.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'Shift',
        key: 'Shift',
        charCode: 16,
        keyCode: 16,
        view: window,
        bubbles: true,
      }),
    );
    expect(element.shiftKeyPressed).toBeTruthy();
    document.body.dispatchEvent(
      new KeyboardEvent('keyup', {
        code: 'Shift',
        key: 'Shift',
        charCode: 16,
        keyCode: 16,
        view: window,
        bubbles: true,
      }),
    );
    expect(element.shiftKeyPressed).toBeFalsy();
  });

  it('sets tabKeyPressed state', async () => {
    document.body.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'Tab',
        key: 'Tab',
        charCode: 9,
        keyCode: 9,
        view: window,
        bubbles: true,
      }),
    );
    expect(element.tabKeyPressed).toBeTruthy();
    document.body.dispatchEvent(
      new KeyboardEvent('keyup', {
        code: 'Tab',
        key: 'Tab',
        charCode: 9,
        keyCode: 9,
        view: window,
        bubbles: true,
      }),
    );
    expect(element.tabKeyPressed).toBeFalsy();
  });

  it('sets elementBeingClicked state', async () => {
    document.body.dispatchEvent(
      new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
      }),
    );
    expect(element.elementBeingClicked).toBeTruthy();
    document.body.dispatchEvent(
      new MouseEvent('mouseup', {
        view: window,
        bubbles: true,
      }),
    );
    expect(element.elementBeingClicked).toBeFalsy();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });
});
