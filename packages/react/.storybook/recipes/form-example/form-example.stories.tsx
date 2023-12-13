import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { PdsTextArea } from '@keisha/design-system-react';
import { PdsCheckbox } from '../../../src/lib/components/checkbox/checkbox';
import { PdsRadioGroup } from '../../../src/lib/components/radio-group/radio-group';
import { PdsRadio } from '../../../src/lib/components/radio/radio';
import { PdsSelect } from '../../../src/lib/components/select/select';
import { PdsTextInput } from '../../../src/lib/components/text-input/text-input';
import { PdsDatePicker } from '../../../src/lib/components/date-picker/date-picker';
import { PdsDatePickerInput } from '../../../src/lib/components/date-picker-input/date-picker-input';
import { PdsButton } from '../../../src/lib/components/button/button';
import './form-example.scss';

export default {
  title: 'Recipes/Form example',
  component: 'form-example',
  parameters: {
    options: { showPanel: false },
  },
  tags: ['autodocs'],
  argTypes: null,
};

export const Sample = () => (
  <form>
    <PdsTextInput
      name="name"
      label="Enter your name"
      value="Harry Potter"
      className="pds-u-padding-bottom-12"
      onChange={(e: any) => action('pds-text-input-input')(e.detail)}
    />
    <PdsDatePickerInput
      className="pds-u-padding-vertical-12"
      label="Select a start date"
      name="start date"
      onChange={(e: any) => action('pds-date-picker-input-change')(e.detail)}
    >
      <PdsDatePicker slot="datepicker" />
    </PdsDatePickerInput>
    <PdsSelect
      className="pds-u-padding-vertical-12"
      name="house"
      label="Select a house"
      value="Hufflepuff"
      onChange={(e: any) => action('pds-select-change')(e.detail)}
    >
      <option value="Slytherin">Slytherin</option>
      <option value="Hufflepuff">Hufflepuff</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Gryffindor">Gryffindor</option>
    </PdsSelect>
    <PdsRadioGroup
      className="pds-u-padding-vertical-12"
      name="pet"
      label="Select your pet"
      value="Frog"
      onChange={(e: any) => action('pds-radio-group-change')(e.detail)}
    >
      <PdsRadio value="Cat" label="Cat" />
      <PdsRadio value="Frog" label="Frog" />
      <PdsRadio value="Owl" label="Owl" />
    </PdsRadioGroup>
    <PdsTextArea
      className="pds-u-padding-vertical-12"
      name="ingredients"
      label="List the ingredients for Polyjuice potion"
      value="Lacewing flies, etc..."
    />
    <PdsCheckbox
      className="pds-u-padding-top-12 pds-u-padding-bottom-48"
      name="oath"
      label="I solemnly swear I'm up to no good."
      checked
      onChange={(e: any) => action('pds-checkbox-change')(e.detail)}
    />
    <PdsButton type="submit" variant="primary">
      Submit
    </PdsButton>
  </form>
);
Sample.storyName = 'Sample';
