import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../../src/lib/components/checkbox/checkbox';
import '../../../src/lib/components/radio/radio';
import '../../../src/lib/components/radio-group/radio-group';
import '../../../src/lib/components/select/select';
import '../../../src/lib/components/text-area/text-area';
import '../../../src/lib/components/text-input/text-input';
import '../../../src/lib/components/date-picker-input/date-picker-input';
import '../../../src/lib/components/date-picker/date-picker';
import '../../../src/lib/components/button/button';
import './form-example';
import './form-example.scss';

const meta: Meta = {
  title: 'Recipes/Form example',
  component: 'form-example',
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    actions: {
      handles: [
        'pds-select-change',
        'pds-text-input-input',
        'pds-text-input-change',
        'pds-radio-group-change',
        'pds-date-picker-select-date',
        'pds-date-picker-change-view',
        'pds-date-picker-escape',
        'pds-date-picker-input-change',
        'pds-date-picker-input-input',
      ],
    },
  },
};
export default meta;

export const Sample: StoryObj = {
  name: 'Sample',
  render() {
    return html`<form-example>
      <form>
        <pds-text-input
          name="name"
          label="Enter your name"
          value="Harry Potter"
          class="pds-u-padding-bottom-12"
        ></pds-text-input>
        <pds-date-picker-input
          class="pds-u-padding-vertical-12"
          name="start date"
          dateformat="MM/DD/YYYY"
          helptext="Please follow the MM/DD/YYYY format."
          label="Select a start date"
          ><pds-date-picker slot="datepicker"></pds-date-picker
        ></pds-date-picker-input>
        <pds-select
          name="house"
          label="Select a house"
          value="Hufflepuff"
          class="pds-u-padding-vertical-12"
        >
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Gryffindor">Gryffindor</option>
        </pds-select>
        <pds-radio-group
          class="pds-u-padding-vertical-12"
          name="pet"
          label="Select your pet"
          value="Frog"
        >
          <pds-radio value="Cat" label="Cat"></pds-radio>
          <pds-radio value="Frog" label="Frog"></pds-radio>
          <pds-radio value="Owl" label="Owl"></pds-radio>
        </pds-radio-group>
        <pds-text-area
          class="pds-u-padding-vertical-12"
          name="ingredients"
          label="List the ingredients for Polyjuice potion"
          value="Lacewing flies, etc..."
        ></pds-text-area>
        <pds-checkbox
          class="pds-u-padding-top-12 pds-u-padding-bottom-48"
          name="oath"
          label="I solemnly swear I'm up to no good."
          checked
        ></pds-checkbox>
        <pds-button type="submit" variant="primary">Submit</pds-button>
      </form>
    </form-example>`;
  },
};
