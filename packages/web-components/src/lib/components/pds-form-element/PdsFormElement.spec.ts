/* eslint-disable max-classes-per-file */
import { fixture } from '@open-wc/testing';
import { html, render } from 'lit';
// eslint-disable-next-line import/extensions
import { query } from 'lit/decorators.js';
import { pdsCustomElement } from '../../decorators/pds-custom-element';
import { PdsFormElement } from './PdsFormElement';

jest.mock('lit', () => ({
  ...jest.requireActual('lit'),
  isServer: false,
}));

describe('PdsFormElement', () => {
  @pdsCustomElement('pds-form-element-test', {
    category: 'component',
    type: 'component',
    styles: {},
  })
  class TestElement extends PdsFormElement {
    @query('input')
    field: HTMLElement;

    render() {
      return html`<input name="${this.name}" />`;
    }
  }

  beforeEach(() => {
    process.env.NODE_ENV = 'nottest';
  });

  afterEach(() => {
    process.env.NODE_ENV = 'test';
  });

  it('should associate the parent form to the element', async () => {
    const form: HTMLFormElement = await fixture(
      '<form><pds-form-element-test name="test" label="label"></pds-form-element-test></form>',
    );

    const element = form.querySelector('pds-form-element-test') as TestElement;

    expect(element.internals.form).toBe(form);
  });

  it('should set and get the PDS form element value', async () => {
    const form: HTMLFormElement = await fixture(
      '<form><pds-form-element-test name="test" label="label"></pds-form-element-test></form>',
    );

    const element = form.querySelector('pds-form-element-test') as TestElement;

    element.value = 'new value';

    expect(element.value).toBe('new value');
  });

  it('should reset the PDS form element value on form reset', async () => {
    const originalValue = 'original value';
    const newValue = 'new value';
    const form: HTMLFormElement = await fixture(
      `<form><pds-form-element-test name="test" label="label" value="${originalValue}"></pds-form-element-test></form>`,
    );

    const element = form.querySelector('pds-form-element-test') as TestElement;

    element.value = newValue;

    expect(element.value).toBe(newValue);

    form.reset();

    expect(element.value).toBe(originalValue);
  });

  it('should reset the PDS form element value on form reset, newValue is null', async () => {
    const originalValue = 'original value';
    const newValue = null;
    const form: HTMLFormElement = await fixture(
      `<form><pds-form-element-test name="test" label="label" value="${originalValue}"></pds-form-element-test></form>`,
    );

    const element = form.querySelector('pds-form-element-test') as TestElement;

    // @ts-expect-error
    element.value = newValue;

    expect(element.value).toBe(newValue);

    form.reset();

    expect(element.value).toBe(originalValue);
  });

  it('should set and get the PDS form element required property and set ariaRequired internals correctly', async () => {
    const element: TestElement = await fixture(
      '<pds-form-element-test name="test" label="label"></pds-form-element-test>',
    );

    expect(element.required).toBe(false);

    // if no required attribute is provided, the setter wouldn't get called
    // so ariaRequired would be null
    expect(element.internals.ariaRequired).toBeFalsy();

    element.required = true;

    expect(element.required).toBe(true);

    expect(element.internals.ariaRequired).toBe('true');

    element.required = false;

    expect(element.required).toBe(false);

    expect(element.internals.ariaRequired).toBe('false');

    // Unset aria required and make sure it still returns false
    // First we need to change the required value
    element.required = true;

    // @ts-expect-error
    element.internals = { ariaRequired: undefined };
    // Verify that the default catch worked
    expect(element.required).toBe(false);
  });

  it('should set and get the PDS form element disabled property and set ariaDisabled internals correctly', async () => {
    const element: TestElement = await fixture(
      '<pds-form-element-test name="test" label="label"></pds-form-element-test>',
    );

    expect(element.disabled).toBe(false);

    // if no disabled attribute is provided, the setter wouldn't get called
    // so ariadisabled would be null
    expect(element.internals.ariaDisabled).toBeFalsy();

    element.disabled = true;

    expect(element.disabled).toBe(true);

    expect(element.internals.ariaDisabled).toBe('true');

    element.disabled = false;

    expect(element.disabled).toBe(false);

    expect(element.internals.ariaDisabled).toBe('false');

    // Unset aria disabled and make sure it still returns false
    // First we need to change the disabled value
    element.disabled = true;

    // @ts-expect-error
    element.internals = { ariaDisabled: undefined };
    // Verify that the default catch worked
    expect(element.disabled).toBe(false);
  });

  it('should set and get the PDS form element readonly property and set ariaReadOnly internals correctly', async () => {
    const element: TestElement = await fixture(
      '<pds-form-element-test name="test" label="label"></pds-form-element-test>',
    );

    expect(element.readonly).toBe(false);

    // if no readonly property is provided, the setter wouldn't get called
    // so ariaReadOnly would be null
    expect(element.internals.ariaReadOnly).toBeFalsy();

    element.readonly = true;

    expect(element.readonly).toBe(true);

    expect(element.internals.ariaReadOnly).toBe('true');

    element.readonly = false;

    expect(element.readonly).toBe(false);

    expect(element.internals.ariaReadOnly).toBe('false');

    // Unset aria readonly and make sure it still returns false
    // First we need to change the readonly value
    element.readonly = true;

    // @ts-expect-error
    element.internals = { ariaReadonly: undefined };
    // Verify that the default catch worked
    expect(element.readonly).toBe(false);
  });

  describe('hasHelpText', () => {
    it('should return true when the helpText property is passed', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label one" helpText="help text"></pds-form-element-test>',
      );

      expect(element.hasHelpText()).toBe(true);
    });

    it('should return true when the helpText slot is present', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label one"><span slot="helpText">help text</span></pds-form-element-test>',
      );

      expect(element.hasHelpText()).toBe(true);
    });

    it('should return false when neither the helpText property nor the helpText slot are provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label one"></pds-form-element-test>',
      );

      expect(element.hasHelpText()).toBe(false);
    });
  });

  describe('getAriaDescribedBy', () => {
    it('should return an empty string if there is neither an error message nor a help text', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label one"></pds-form-element-test>',
      );

      expect(element.getAriaDescribedBy()).toBe('');
    });

    it('should return a string with the error message element id, if an error message provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" errorMessage="error message" label="label one"></pds-form-element-test>',
      );

      expect(element.getAriaDescribedBy()).toBe('test-error-message');
    });

    it('should return a string with the help text element id, if help text is provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" helpText="help text" label="label one"></pds-form-element-test>',
      );

      expect(element.getAriaDescribedBy()).toBe('test-help-text');
    });

    it('should return a string with the help text element id and error message element id, if both help text and an error message are provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" helpText="help text" errorMessage="error message" label="label one"></pds-form-element-test>',
      );

      expect(element.getAriaDescribedBy()).toBe(
        'test-help-text test-error-message',
      );
    });
  });

  describe('setInternalValidity', () => {
    it('should make checkValidity on the parent form element return true if the input has no error message ', async () => {
      const form: HTMLFormElement = await fixture(
        '<form><pds-form-element-test name="test" label="label one"></pds-form-element-test></form>',
      );

      const element = form.querySelector(
        'pds-form-element-test',
      ) as TestElement;

      expect(element.internals.form?.checkValidity()).toBe(true);
    });

    it('should make checkValidity on the parent form element return false if the input has an error message', async () => {
      const form: HTMLFormElement = await fixture(
        '<form><pds-form-element-test name="test" errorMessage="error message" label="label one"></pds-form-element-test></form>',
      );

      const element = form.querySelector(
        'pds-form-element-test',
      ) as TestElement;

      expect(element.internals.form?.checkValidity()).toBe(false);
    });
  });

  describe('verifyLabel', () => {
    it('should return true if a label property is provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" helpText="help text" label="label one"></pds-form-element-test>',
      );

      expect(element.verifyLabel()).toBe(true);
    });

    it('should return true if a label slot is provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" helpText="help text"><span slot="label">label text</span></pds-form-element-test>',
      );

      expect(element.verifyLabel()).toBe(true);
    });

    it('should return false and console log an error if neither a label property nor a label slot is provided', async () => {
      const consoleError = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      const element: TestElement = await fixture(
        '<pds-form-element-test name="test"></pds-form-element-test>',
      );
      const verifyLabel = element.verifyLabel();

      expect(consoleError).toBeCalledTimes(1);
      expect(verifyLabel).toBe(false);

      consoleError.mockRestore();
    });
  });

  describe('labelTemplate', () => {
    it('should produce the appropriate label markup when rendered', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label test"></pds-form-element-test>',
      );

      // @ts-ignore
      render(element.labelTemplate(), element);

      const label = element.querySelector('label');

      expect(label).toBeTruthy();
      expect(label?.htmlFor).toEqual('test-field');
      expect(label?.className).toEqual('pds-c-form-element-test__label');
      expect(label?.textContent).toContain('label test');
    });

    it('should include the required indicator if the required property is provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" required="true" label="label test"></pds-form-element-test>',
      );

      // @ts-ignore
      render(element.labelTemplate(), element);

      const requiredIndicator = element?.querySelector(
        '.pds-c-form-element-test__required-indicator',
      );

      expect(requiredIndicator).toBeTruthy();
      expect(requiredIndicator?.textContent).toContain('*');
    });
  });

  describe('helpTextTemplate', () => {
    it('should produce the appropriate help text markup when rendered, if help text exists', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label test" helpText="help text"></pds-form-element-test>',
      );

      // @ts-ignore
      render(element.helpTextTemplate(), element);

      const helpText = element.querySelector(
        '.pds-c-form-element-test__help-text',
      );

      expect(helpText).toBeTruthy();
      expect(helpText?.id).toBe('test-help-text');
      expect(helpText?.textContent).toContain('help text');
    });

    it('should produce nothing when rendered, if no help text is provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label test"></pds-form-element-test>',
      );

      // @ts-ignore
      render(element.helpTextTemplate(), element);

      const helpText = element.querySelector(
        '.pds-c-form-element-test__help-text',
      );

      expect(helpText).toBeFalsy();
    });
  });

  describe('errorMessageTemplate', () => {
    it('should produce the appropriate error message markup when rendered, if an error message exists', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label test" errorMessage="error message"></pds-form-element-test>',
      );

      // @ts-ignore
      render(element.errorMessageTemplate(), element);

      const errorMessage = element.querySelector(
        '.pds-c-form-element-test__error-message',
      );

      expect(errorMessage).toBeTruthy();
      expect(errorMessage?.id).toBe('test-error-message');
      expect(errorMessage?.textContent).toContain('error message');
    });

    it('should produce nothing when rendered, if no error message is provided', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label test"></pds-form-element-test>',
      );

      // @ts-ignore
      render(element.errorMessageTemplate(), element);

      const errorMessage = element.querySelector(
        '.pds-c-form-element-test__error-message',
      );

      expect(errorMessage).toBeFalsy();
    });
  });

  describe('formReset', () => {
    it('should reset the form values to their defaults when formResetCallback is called', async () => {
      const element: TestElement = await fixture(
        '<pds-form-element-test name="test" label="label test" errorMessage="error message"></pds-form-element-test>',
      );
      element.defaultValue = 'default value';
      element.value = 'new value';
      element.formResetCallback();

      expect(element.value).toStrictEqual('default value');
    });
  });
});
