import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import { PdsStepIndicator } from './step-indicator';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Step indicator/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('StepIndicator unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-step-indicator> <pds-step-indicator-item> </pds-step-indicator-item> </pds-step-indicator>',
    );
  });

  it('is an instance of PdsStepIndicator', () => {
    expect(element).toBeInstanceOf(PdsStepIndicator);
  });

  it('renders a <nav> when interactive', async () => {
    element = await fixture('<pds-step-indicator interactive />');
    expect(element.shadowRoot?.querySelector('nav')).toBeTruthy();
  });

  it('renders Spanish aria label when interactive', async () => {
    element = await fixture('<pds-step-indicator interactive lang="es"/>');
    expect(
      element.shadowRoot?.querySelector('nav')?.getAttribute('aria-label'),
    ).toBe('progreso');
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('populates the step indicator item slot when it is type of pds-step-indicator-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      `<pds-step-indicator variant="horizontal" interactive>
        <pds-step-indicator-item status="completed" href="#">
          Step one
        </pds-step-indicator-item>
      </pds-step-indicator>`,
    );
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('does not populate the step indicator item slot when it is not type of pds-step-indicator-item', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    element = await fixture(
      `<pds-step-indicator variant="horizontal" interactive>
      <div status="completed" href="#">
        Step one
      </div>
    </pds-step-indicator>`,
    );
    expect(element).toMatchSnapshot();
    expect(consoleError).toBeCalledTimes(1);
    consoleError.mockRestore();
  });
});
