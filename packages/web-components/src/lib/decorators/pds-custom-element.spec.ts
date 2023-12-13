/* eslint-disable max-classes-per-file */
import { fixture } from '@open-wc/testing';
import { PdsElement } from '../components/PdsElement';
import { pdsCustomElement } from './pds-custom-element';

describe('The pdsCustomElement decorator', () => {
  @pdsCustomElement('pds-test', {
    category: 'component',
    type: 'component',
    styles: {},
  })
  class TestElement extends PdsElement {}
  it('should set appropriate properties on the element', async () => {
    const element: TestElement = await fixture('<pds-test></pds-test>');

    expect(element.tagName).toBe('PDS-TEST');
    expect(element.componentCategory).toBe('component');
    expect(element.componentName).toBe('test');
    expect(element.componentType).toBe('component');
    expect(element.componentState).toBe('beta');

    expect(TestElement.elementStyles).toBeDefined();
  });

  it('should only register the element once', async () => {
    // Creating this class a second time should only add it to the registry once
    // This second element has a category of layout instead of component
    // so we'll verify that the one returned is the initial element
    // with a category of component
    @pdsCustomElement('pds-test', {
      category: 'layout',
      type: 'component',
      styles: {},
    })
    class TestElement2 extends PdsElement {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const element: TestElement2 = await fixture('<pds-test></pds-test>');

    expect(element.componentCategory).toBe('component');
  });

  it('should not console warn on components if they are stable', async () => {
    const originalConsoleWarn = console.warn;
    const originalUserAgent = window.navigator.userAgent;
    console.warn = jest.fn();
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: 'browser',
    });
    // Using a stable element
    @pdsCustomElement('pds-test', {
      category: 'layout',
      type: 'component',
      state: 'stable',
      styles: {},
    })
    class TestElement2 extends PdsElement {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const element: TestElement2 = await fixture('<pds-test></pds-test>');

    expect(element.componentCategory).toBe('component');

    expect(console.warn).not.toHaveBeenCalled();

    console.warn = originalConsoleWarn;
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: originalUserAgent,
    });
  });

  it('should not console warn on beta components if the environment is jsdom', async () => {
    const originalConsoleWarn = console.warn;
    const originalUserAgent = window.navigator.userAgent;
    console.warn = jest.fn();
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: 'jsdom',
    });
    // Creating this class a second time should only add it to the registry once
    // This second element has a category of layout instead of component
    // so we'll verify that the one returned is the initial element
    // with a category of component
    @pdsCustomElement('pds-test', {
      category: 'layout',
      type: 'component',
      state: 'beta',
      styles: {},
    })
    class TestElement2 extends PdsElement {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const element: TestElement2 = await fixture('<pds-test></pds-test>');

    expect(element.componentCategory).toBe('component');

    expect(console.warn).not.toHaveBeenCalled();

    console.warn = originalConsoleWarn;
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: originalUserAgent,
    });
  });

  it('should console warn on beta components if the env does not include jsdom', async () => {
    const originalConsoleWarn = console.warn;
    const originalUserAgent = window.navigator.userAgent;
    console.warn = jest.fn();
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: 'browser',
    });
    // Creating this class a second time should only add it to the registry once
    // This second element has a category of layout instead of component
    // so we'll verify that the one returned is the initial element
    // with a category of component
    @pdsCustomElement('pds-test', {
      category: 'layout',
      type: 'component',
      state: 'beta',
      styles: {},
    })
    class TestElement2 extends PdsElement {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const element: TestElement2 = await fixture('<pds-test></pds-test>');

    expect(element.componentCategory).toBe('component');

    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      'pds-test is a beta component and may introduce breaking changes into your environment until it becomes stable.',
    );

    console.warn = originalConsoleWarn;
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: originalUserAgent,
    });
  });

  it('should console warn on beta components if there is no navigator.userAgent', async () => {
    const originalConsoleWarn = console.warn;
    const originalUserAgent = window.navigator.userAgent;
    console.warn = jest.fn();
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: null,
    });
    // Creating this class a second time should only add it to the registry once
    // This second element has a category of layout instead of component
    // so we'll verify that the one returned is the initial element
    // with a category of component
    @pdsCustomElement('pds-test', {
      category: 'layout',
      type: 'component',
      state: 'beta',
      styles: {},
    })
    class TestElement2 extends PdsElement {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const element: TestElement2 = await fixture('<pds-test></pds-test>');

    expect(element.componentCategory).toBe('component');

    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      'pds-test is a beta component and may introduce breaking changes into your environment until it becomes stable.',
    );

    console.warn = originalConsoleWarn;
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: originalUserAgent,
    });
  });
});
