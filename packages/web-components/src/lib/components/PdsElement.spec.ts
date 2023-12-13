/* eslint-disable max-classes-per-file */
import { fixture } from '@open-wc/testing';
import { html } from 'lit';
// eslint-disable-next-line import/extensions
import { customElement, property } from 'lit/decorators.js';
import { ComponentType, ComponentCategory, PdsElement } from './PdsElement';

jest.mock('lit', () => ({
  ...jest.requireActual('lit'),
  isServer: false,
}));

describe('PdsElement - with custom class names', () => {
  @customElement('pds-test')
  class TestElement extends PdsElement {
    componentName = 'test';

    componentCategory: ComponentCategory = 'component';

    componentType: ComponentType = 'component';

    // eslint-disable-next-line class-methods-use-this
    get classNames() {
      return {
        primary: true,
        'is-active': true,
      };
    }

    render() {
      return html`<div class=${this.getClass()}></div>`;
    }
  }
  let element: TestElement;

  beforeEach(async () => {
    element = await fixture('<pds-test />');
  });

  it("should construct class names in the BEM style based on the component's category and name", async () => {
    expect(element.classNamespaceAndPrefix).toBe('pds-c-test');
    expect(element.classMod('mod')).toBe('pds-c-test--mod');
    expect(element.classEl('el')).toBe('pds-c-test__el');
    expect(element.shadowRoot?.querySelector('div')?.className.trim()).toBe(
      'pds-c-test pds-c-test--primary pds-is-active',
    );
  });
});

describe('PdsElement - without custom class names', () => {
  @customElement('pds-test-sans-classes')
  class TestElementSansClasses extends PdsElement {
    componentName = 'test-sans-classes';

    componentCategory: ComponentCategory = 'component';

    componentType: ComponentType = 'component';

    render() {
      // Call slotEmpty without slotName and call getLocale to get full test coverage
      return html`<div class=${this.getClass()}>
        ${this.slotEmpty()} ${this.getLocale()}
        <slot name="inner"></slot>
      </div>`;
    }
  }
  let element: TestElementSansClasses;

  beforeEach(async () => {
    element = await fixture(
      '<pds-test-sans-classes><div slot="inner">Body text goes here</div></pds-test-sans-classes>',
    );
  });

  it("should construct class names in the BEM style based on the component's category and name", async () => {
    expect(element.classNamespaceAndPrefix).toBe('pds-c-test-sans-classes');
    expect(element.classMod('mod')).toBe('pds-c-test-sans-classes--mod');
    expect(element.classEl('el')).toBe('pds-c-test-sans-classes__el');
    expect(element.shadowRoot?.querySelector('div')?.className.trim()).toBe(
      'pds-c-test-sans-classes',
    );
  });
});

describe('PdsElement - without pds- in element and class names', () => {
  @customElement('test-sans-classes')
  class TestElementSansClasses extends PdsElement {
    componentName = 'test-sans-classes';

    componentCategory: ComponentCategory = 'component';

    componentType: ComponentType = 'recipe';

    @property({ type: Boolean })
    testTrueBoolean = true;

    @property({ type: Boolean })
    testFalseBoolean = false;

    @property({ type: Boolean })
    testChangedBoolean = false;

    @property()
    testProp: string;

    render() {
      // Call slotEmpty without slotName to get full test coverage
      return html`<div class=${this.getClass()}>
        ${this.slotEmpty()}
        <slot name="inner"></slot>
      </div>`;
    }
  }
  let element: TestElementSansClasses;

  beforeEach(async () => {
    element = await fixture(
      '<test-sans-classes testProp="value" testChangedBoolean><div slot="inner">Body text goes here</div></test-sans-classes>',
    );
  });

  it("should construct class names in the BEM style based on the component's category and name", async () => {
    expect(element.classNamespaceAndPrefix).toBe('c-test-sans-classes');
    expect(element.getClassNamespace('c')).toBe('');
    expect(element.classMod('mod')).toBe('c-test-sans-classes--mod');
    expect(element.classEl('el')).toBe('c-test-sans-classes__el');
    expect(element.shadowRoot?.querySelector('div')?.className.trim()).toBe(
      'c-test-sans-classes',
    );
  });

  it('should return viewport size when setWindowResizeHandler is called', async () => {
    expect(element.responsiveViewportSize).toBeUndefined();
    global.innerWidth = 180;
    element.setWindowResizeHandler();
    expect(element.responsiveViewportSize).toBe('xs');
    global.innerWidth = 600;
    element.setWindowResizeHandler();
    expect(element.responsiveViewportSize).toBe('sm');
    global.innerWidth = 900;
    element.setWindowResizeHandler();
    expect(element.responsiveViewportSize).toBe('md');
    global.innerWidth = 1100;
    element.setWindowResizeHandler();
    expect(element.responsiveViewportSize).toBe('lg');
    global.innerWidth = 1500;
    element.setWindowResizeHandler();
    expect(element.responsiveViewportSize).toBe('xl');
  });

  it('should return the clone when running cloneLitElement on a web component', async () => {
    const clonedEl = element.cloneLitElement(element);

    expect(clonedEl.getAttribute('testChangedBoolean')).toStrictEqual('');
    expect(clonedEl.getAttribute('testProp')).toStrictEqual('value');
  });

  it('should apply the correct attributes on the clone when running cloneLitElement on a React component', async () => {
    // Build out a fake React element (we can't actually use JSX here)
    const fakeReactElement = await fixture('<pds-test />');
    // @ts-expect-error Nothing to see here.
    // eslint-disable-next-line @typescript-eslint/dot-notation
    fakeReactElement['__reactFiber$abc123'] = {
      return: {
        pendingProps: {
          children: 'ignore me',
          pay: 'attention',
          testChangedBoolean: true,
          testProp: 'tada',
          _$G5: 'ignore me too',
        },
      },
    };
    // @ts-expect-error Nothing to see here
    const clonedEl = fakeReactElement.cloneLitElement(fakeReactElement);

    expect(clonedEl.getAttribute('testChangedBoolean')).toStrictEqual('true');
    expect(clonedEl.getAttribute('testProp')).toStrictEqual('tada');
  });
});

describe('PdsElement - slot content validation', () => {
  @customElement('test-slot-validation')
  class TestSlotValidation extends PdsElement {
    componentName = 'test-slot-validation';

    componentCategory: ComponentCategory = 'component';

    componentType: ComponentType = 'component';

    getSlotContent(): HTMLSlotElement {
      const slot = this.shadowRoot?.querySelector('slot');
      const slotContent = slot?.assignedNodes()[0] as HTMLSlotElement;

      return slotContent;
    }

    render() {
      return html`<div>
        ${this.slotEmpty()}
        <slot
          allowed-elements="pds-foo, svg"
          name="foo"
          @slotchange=${(e: Event) => this.handleSlotValidation(e)}
        ></slot>
      </div>`;
    }
  }
  let element: TestSlotValidation;

  it('should render valid slot content for an exact match tag name', async () => {
    element = await fixture(
      '<test-slot-validation><pds-foo slot="foo" /></test-slot-validation>',
    );

    const slotContent = element.getSlotContent();
    expect(slotContent.tagName).toEqual('PDS-FOO');
  });

  it('should render valid slot content for a tag name including the allowed elements string', async () => {
    element = await fixture(
      '<test-slot-validation><pds-foo-icon slot="foo" /></test-slot-validation>',
    );

    const slotContent = element.getSlotContent();
    expect(slotContent.tagName).toEqual('PDS-FOO-ICON');
  });

  it('should not render invalid slot content', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      '<test-slot-validation><span slot="foo">Hi I\'m in a slot</span></test-slot-validation>',
    );

    const slotContent = element.getSlotContent();
    expect(slotContent).not.toBeDefined();
    expect(consoleError).toBeCalledTimes(1);

    consoleError.mockRestore();
  });
});

describe('PdsElement - no slot content validation', () => {
  @customElement('test-no-slot-validation')
  class TestNoSlotValidation extends PdsElement {
    componentName = 'test-no-slot-validation';

    componentCategory: ComponentCategory = 'component';

    componentType: ComponentType = 'component';

    render() {
      return html`<div>
        ${this.slotEmpty()}
        <slot
          name="foo"
          @slotchange=${(e: Event) => this.handleSlotValidation(e)}
        ></slot>
      </div>`;
    }
  }
  let element: TestNoSlotValidation;

  it('should not try to validate a slot that does not have element restrictions', async () => {
    element = await fixture(
      '<test-no-slot-validation><pds-foo slot="foo" /></test-no-slot-validation>',
    );

    const mockValidateSlottedElements = jest.spyOn(
      element,
      'validateSlottedElements',
    );

    expect(mockValidateSlottedElements).not.toHaveBeenCalled();

    mockValidateSlottedElements.mockRestore();
  });

  it('should not try to validate if there is no slotted element', async () => {
    element = await fixture('<test-no-slot-validation />');

    const mockHandleSlotValidation = jest.spyOn(
      element,
      'handleSlotValidation',
    );

    expect(mockHandleSlotValidation).not.toHaveBeenCalled();

    mockHandleSlotValidation.mockRestore();
  });
});
