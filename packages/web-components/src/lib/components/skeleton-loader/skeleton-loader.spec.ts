import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture, html, expect } from '@open-wc/testing';
import { PdsSkeletonLoader } from './skeleton-loader';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Skeleton loader/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('SkeletonLoader unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture('<pds-skeleton-loader/>');
  });

  it('is an instance of PdsSkeletonLoader', () => {
    expect(element).to.be.instanceOf(PdsSkeletonLoader);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('updates default loadingText to spanish', async () => {
    const spanishSkeletonLoader = await fixture(
      html`<pds-skeleton-loader lang="es"> </pds-skeleton-loader>`,
    );
    const span = spanishSkeletonLoader.shadowRoot?.querySelector(
      'span',
    ) as HTMLElement;

    expect(span).to.contain.text('cargando...');
  });
});
