/* eslint-disable max-classes-per-file */
import { fixture } from '@open-wc/testing';
import { html } from 'lit';
import { createElement, Check } from 'lucide';
import { waitFor } from '@testing-library/dom';
import { pdsCustomIconElement as customElement } from '../../decorators/pds-icon';
import { PdsIcon } from './PdsIcon';

describe('PdsIcon', () => {
  @customElement('pds-icon-check')
  class PdsIconCheck extends PdsIcon {
    // eslint-disable-next-line class-methods-use-this
    createIconElement(): SVGElement {
      return createElement(Check);
    }

    render() {
      return html`${this.icon}`;
    }
  }
  let icon: PdsIconCheck;

  beforeEach(async () => {
    icon = await fixture('<pds-icon-check />');
  });

  // Testing "getSize" switch statement
  it('getSize() should return the correct number value for xs', () => {
    icon.setAttribute('size', 'xs');
    expect(icon.size).toBe('xs');
    expect(icon.getSize('xs')).toBe(12);
  });

  it('getSize() should return the correct number value for sm', async () => {
    expect(icon.getSize('sm')).toBe(16);
  });

  it('getSize() should return the correct number value for lg', async () => {
    expect(icon.getSize('lg')).toBe(24);
  });

  it('getSize() should return the correct number value for xl', async () => {
    expect(icon.getSize('xl')).toBe(32);
  });

  it('getSize() should return the correct number value for xxl', async () => {
    expect(icon.getSize('xxl')).toBe(40);
  });

  it('isValidColor() should return true when using a valid border color', async () => {
    expect(icon.isValidColor('#ffffff')).toStrictEqual(true);
  });

  it('isValidColor() should return false when using an invalid border color', async () => {
    expect(icon.isValidColor('#000000')).toStrictEqual(false);
  });

  it('icon should have default size value if nothing passed in', async () => {
    expect(icon.size).toBe('default');
    expect(icon.getSize('default')).toBe(20);
  });

  it('updated() should set the stroke value on a valid icon color', async () => {
    icon.setAttribute('color', '#ffffff');
    await waitFor(() => {
      expect(
        icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke'),
      ).toStrictEqual('#ffffff');
    });
  });

  it('updated() should not set the stroke value on an invalid icon color', () => {
    icon.setAttribute('color', '#000000');
    expect(
      icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke'),
    ).toStrictEqual('currentColor');
  });

  it('setIconAttributes() should not set the stroke value on an invalid icon color', () => {
    icon.setAttribute('color', '#000000');
    icon.connectedCallback();
    expect(
      icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke'),
    ).toStrictEqual('currentColor');
  });

  it('setIconAttributes() should set the stroke value on a valid icon color', async () => {
    icon.setAttribute('color', '#ffffff');
    icon.connectedCallback();
    await waitFor(() => {
      expect(
        icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke'),
      ).toStrictEqual('#ffffff');
    });
  });

  it('should not reset the color when it changes to an invalid color', async () => {
    icon.color = '#000000';
    await waitFor(() => {
      expect(
        icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke'),
      ).toStrictEqual('currentColor');
    });
  });
});
