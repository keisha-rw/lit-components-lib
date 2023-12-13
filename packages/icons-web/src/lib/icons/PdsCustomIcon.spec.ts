/* eslint-disable max-classes-per-file */
import { fixture } from '@open-wc/testing';
import { html } from 'lit';
import { pdsCustomIconElement as customElement } from '../../decorators/pds-icon';
import { PdsCustomIcon } from './PdsCustomIcon';

describe('PdsCustomIcon', () => {
  @customElement('pds-icon-twitter')
  class PdsIconTwitter extends PdsCustomIcon {
    render() {
      return html`<svg
        width=${this.getSize(this.size)}
        height=${this.getSize(this.size)}
        viewBox="0 0 40 40"
        fill="none"
        strokeWidth="2"
        aria-hidden="true"
        display="block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.5777 12.5213C34.6002 12.8446 34.6002 13.1679 34.6002 13.494C34.6002 23.4339 27.0385 34.8974 13.1967 34.8974V34.8918C9.10921 34.8969 5.10656 33.7256 1.66667 31.5176C2.26092 31.5888 2.85883 31.6251 3.45732 31.6263C6.84536 31.6292 10.136 30.4929 12.8004 28.4001C11.2306 28.3706 9.70932 27.8512 8.44926 26.9146C7.1892 25.9779 6.25339 24.6709 5.77271 23.1762C6.89961 23.3936 8.06138 23.3494 9.16848 23.0469C7.46634 22.703 5.93557 21.7809 4.83585 20.4369C3.73614 19.093 3.1352 17.41 3.13499 15.6735V15.5798C4.18127 16.1627 5.35232 16.4857 6.5495 16.5215C4.95753 15.4577 3.83049 13.8276 3.3976 11.9625C2.96471 10.0974 3.25846 8.13748 4.21912 6.48127C6.10824 8.80423 8.46484 10.7039 11.1359 12.0568C13.8069 13.4098 16.7327 14.1858 19.7231 14.3345C19.3487 12.7219 19.5162 11.0309 20.1997 9.52306C20.8832 8.01527 22.0446 6.77478 23.5041 5.99357C24.9637 5.21237 26.64 4.93399 28.2737 5.20154C29.9075 5.46908 31.4075 6.26762 32.5416 7.47358C34.2268 7.14117 35.843 6.52355 37.3204 5.64732C36.758 7.38763 35.583 8.86463 34.0137 9.80396C35.5046 9.62965 36.9608 9.23196 38.3333 8.62424C37.3239 10.1362 36.0508 11.4559 34.5777 12.5213Z"
          fill="#333333"
        />
      </svg>`;
    }
  }

  let icon: PdsIconTwitter;

  beforeEach(async () => {
    icon = await fixture('<pds-icon-twitter />');
  });

  // Testing "getIconSize" switch statement
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

  it('icon should have default size value if nothing passed in', async () => {
    expect(icon.size).toBe('default');
    expect(icon.getSize('default')).toBe(20);
  });
});
