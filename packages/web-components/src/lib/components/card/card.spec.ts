import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { PdsCard } from './card';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /Card/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('Card unit tests', () => {
  let element: Element;

  beforeEach(async () => {
    element = await fixture(
      '<pds-card target="_blank" href="https://www.google.com" ariaLabel="testing"><span>This is a PDS card</span></pds-card>',
    );
  });

  it('is an instance of PdsCard', () => {
    expect(element).toBeInstanceOf(PdsCard);
  });

  it('populates the header slot when provided', async () => {
    element = await fixture(
      '<pds-card><div slot="header">header text and stuff</div></pds-card>',
    );
    expect(element).toMatchSnapshot();
  });

  it('populates the footer slot when provided', async () => {
    element = await fixture(
      '<pds-card><div slot="footer">Footer text and stuff</div></pds-card>',
    );
    expect(element).toMatchSnapshot();
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('fires the pds-card-click event if a clickable card is clicked', async () => {
    const handlePdsCardClick = jest.fn();

    const configuredElement = (await fixture(
      `<pds-card target="_blank" href="https://www.google.com" ariaLabel="Test label">
      <span id="test">This is a PDS card</span></pds-card>`,
    )) as PdsCard;
    configuredElement.addEventListener('pds-card-click', handlePdsCardClick);

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Fire a click event on the card
    await userEventWithoutDelay.click(
      configuredElement.shadowRoot?.querySelector('article')!,
    );

    expect(handlePdsCardClick).toHaveBeenCalledTimes(1);
  });

  it('fires the pds-card-click event if a clickable card is clicked without a target', async () => {
    const handlePdsCardClick = jest.fn();

    const configuredElement = (await fixture(
      `<pds-card href="#">
      <span id="test"><pds-link href="#">This is a PDS card</pds-link></span></pds-card>`,
    )) as PdsCard;
    configuredElement.addEventListener('pds-card-click', handlePdsCardClick);

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Fire a click event on the card
    await userEventWithoutDelay.click(
      configuredElement.shadowRoot?.querySelector('article')!,
    );

    expect(handlePdsCardClick).toHaveBeenCalledTimes(1);
  });

  it('fires the pds-card-click event if a clickable card is clicked and there is no target', async () => {
    const handlePdsCardClick = jest.fn();

    const configuredElement = (await fixture(
      `<pds-card href="https://www.google.com" ariaLabel="Test label">
      <span id="test">This is a PDS card</span></pds-card>`,
    )) as PdsCard;
    const articleElement =
      configuredElement.shadowRoot?.querySelector('article')!;
    configuredElement.addEventListener('pds-card-click', handlePdsCardClick);

    const userEventWithoutDelay = userEvent.setup({ delay: null });

    // Fire a click event on the card
    await userEventWithoutDelay.click(articleElement);

    expect(handlePdsCardClick).toHaveBeenCalledTimes(1);
  });

  it('fires the pds-card-click event if a clickable card is clicked with Enter Key', async () => {
    const pdsCardClickOnKeydownHandler = jest.fn();

    const testFixture = (await fixture(
      `<pds-card target="_blank" href="https://www.google.com" ariaLabel="Test label">
      <span id="test">This is a PDS card</span></pds-card>`,
    )) as PdsCard;
    const articleElement = testFixture.shadowRoot?.querySelector('article')!;
    testFixture.addEventListener(
      'pds-card-click',
      pdsCardClickOnKeydownHandler,
    );

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Focus on the card
    articleElement.focus();
    // Hit enter while focused on the card
    await userEventWithoutDelay.keyboard('{enter}');

    expect(pdsCardClickOnKeydownHandler).toHaveBeenCalledTimes(1);
  });

  it('fires the pds-card-click event and sets window location if a clickable card is clicked with Enter Key without a target', async () => {
    const pdsCardClickOnKeydownHandler = jest.fn();

    const testFixture = (await fixture(
      `<pds-card href="www.google.com" ariaLabel="test">
      <span href="#">This is a PDS card</span></pds-card>`,
    )) as PdsCard;
    const articleElement = testFixture.shadowRoot?.querySelector('article')!;
    testFixture.addEventListener(
      'pds-card-click',
      pdsCardClickOnKeydownHandler,
    );

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Focus on the card
    articleElement.focus();
    // Hit enter while focused on the card
    await userEventWithoutDelay.keyboard('{enter}');

    expect(pdsCardClickOnKeydownHandler).toHaveBeenCalledTimes(1);
  });

  it('does not fire the pds-card-click event if a clickable card is clicked with space Key', async () => {
    const pdsCardClickOnKeydownHandler = jest.fn();

    const testFixture = (await fixture(
      `<pds-card target="_blank" href="https://www.google.com" ariaLabel="Test label">
      <span id="test">This is a PDS card</span></pds-card>`,
    )) as PdsCard;
    const articleElement = testFixture.shadowRoot?.querySelector('article')!;
    testFixture.addEventListener(
      'pds-card-click',
      pdsCardClickOnKeydownHandler,
    );

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Focus on the card
    articleElement.focus();
    // Hit enter while focused on the card
    await userEventWithoutDelay.keyboard(' ');

    expect(pdsCardClickOnKeydownHandler).not.toHaveBeenCalled();
  });

  it('fires the pds-card-click event if a clickable card is clicked with Enter Key and there is no target', async () => {
    const handlePdsCardKeydown = jest.fn();

    const testFixture = (await fixture(
      `<pds-card href="https://www.google.com" ariaLabel="Test label">
      <span id="test">This is a PDS card</span></pds-card>`,
    )) as PdsCard;
    const articleElement = testFixture.shadowRoot?.querySelector('article')!;
    testFixture.addEventListener('pds-card-click', handlePdsCardKeydown);

    const userEventWithoutDelay = userEvent.setup({ delay: null });
    // Focus on the card
    articleElement.focus();
    // Hit enter while focused on the card
    await userEventWithoutDelay.keyboard('{Enter}');

    expect(handlePdsCardKeydown).toHaveBeenCalledTimes(1);
  });

  it('sets hover attribute if a mouseover event occurs on clickable card', async () => {
    const configuredElement = (await fixture(
      `<pds-card href="#">
      <div slot="header"><pds-link href="#" id="testThree" class="pds-c-card__element-with-hover-state">
      This is a link</pds-link></div>
      <span id="test" class="pds-c-card__element-with-hover-state">This is a PDS card</span>
      <div slot="footer"><span id="testTwo" class="pds-c-card__element-with-hover-state">
      This is a PDS card</span></div>
      </pds-card>`,
    )) as PdsCard;

    configuredElement.handleMouseover();

    expect(
      configuredElement.querySelector('#test')?.getAttribute('hover'),
    ).toEqual('');

    expect(
      configuredElement.querySelector('#testTwo')?.getAttribute('hover'),
    ).toEqual('');

    expect(
      configuredElement.querySelector('#testThree')?.getAttribute('hover'),
    ).toEqual('');
  });

  it('does not set the hover attribute if a mouseover event occurs on a card without the href prop', async () => {
    const configuredElement = (await fixture(
      `<pds-card>
      <div slot="header"><pds-link id="testThree" class="pds-c-card__element-with-hover-state">
      This is a link</pds-link></div>
      <span id="test" class="pds-c-card__element-with-hover-state">This is a PDS card</span>
      <div slot="footer"><span id="testTwo" class="pds-c-card__element-with-hover-state">
      This is a PDS card</span></div>
      </pds-card>`,
    )) as PdsCard;

    configuredElement.handleMouseover();

    expect(
      configuredElement.querySelector('#test')?.getAttribute('hover'),
    ).toBeFalsy();
    expect(
      configuredElement.querySelector('#testTwo')?.getAttribute('hover'),
    ).toBeFalsy();
    expect(
      configuredElement.querySelector('#testThree')?.getAttribute('hover'),
    ).toBeFalsy();
  });

  it('removes hover attribute if a mouseout event occurs on clickable card', async () => {
    const configuredElement = (await fixture(
      '<pds-card href="www.google.com" ariaLabel="Test label"><div slot="header"><span hover="" id="testTwo" class="pds-c-card__element-with-hover-state">This is a PDS card</span></div><span hover="" id="test" class="pds-c-card__element-with-hover-state">This is a PDS card</span><div slot="footer"><a href="#" id="testThree" hover>This is an anchor tag link</a></div></pds-card>',
    )) as PdsCard;

    configuredElement.handleMouseout();

    expect(
      configuredElement.querySelector('#test')?.getAttribute('hover'),
    ).toBeFalsy();
    expect(
      configuredElement.querySelector('#testTwo')?.getAttribute('hover'),
    ).toBeFalsy();
    expect(
      configuredElement.querySelector('#testThree')?.getAttribute('hover'),
    ).toBeFalsy();
  });

  it('slot change updates hasNoSlottedLinkContent and adds proper class for clickable card when pds-link is included in a slot', async () => {
    const configuredElement = (await fixture(
      `<pds-card href="#" ariaLabel="Test label"><div slot="header">
      <pds-link href="#" id="test" class="pds-c-card__element-with-hover-state">This is a PDS link</pds-link>
    </div><pds-link href="#" id="testTwo" class="pds-c-card__element-with-hover-state">This is a PDS link</pds-link><div slot="footer">
    <pds-link href="#" id="testThree" class="pds-c-card__element-with-hover-state">This is a PDS tag link</pds-link>
  </div></pds-card>`,
    )) as PdsCard;

    expect(configuredElement.hasNoSlottedLinkContent).toBe(false);

    expect(
      configuredElement
        .querySelector('#test')
        ?.classList.contains('pds-c-card__element-with-hover-state'),
    ).toBeTruthy();

    expect(
      configuredElement
        .querySelector('#testTwo')
        ?.classList.contains('pds-c-card__element-with-hover-state'),
    ).toBeTruthy();

    expect(
      configuredElement
        .querySelector('#testThree')
        ?.classList.contains('pds-c-card__element-with-hover-state'),
    ).toBeTruthy();
  });

  it('should render nothing when href is provided, there is no slotted link, and no aria label', async () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const configuredElement = await fixture('<pds-card href="#"/>');

    const card = configuredElement.shadowRoot?.querySelector('.pds-c-card');

    expect(card).toBeFalsy();
    expect(console.error).toHaveBeenCalledTimes(1);

    consoleError.mockRestore();
  });

  it('should console warn when an ariaLabel is provided but there is no clickable', async () => {
    const consoleError = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const configuredElement = await fixture(
      '<pds-card ariaLabel="Test"></pds-card>',
    );

    expect(consoleError).toBeCalledTimes(1);

    consoleError.mockRestore();
  });

  it('should console warn when a target is provided but there is no href', async () => {
    const consoleError = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const configuredElement = await fixture(
      '<pds-card target="_blank"></pds-card>',
    );

    expect(consoleError).toBeCalledTimes(1);

    consoleError.mockRestore();
  });

  it('should console warn when a direction is horizontal and centerContentVertically is provided', async () => {
    const consoleError = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const configuredElement = await fixture(
      '<pds-card direction="horizontal" centerContentVertically></pds-card>',
    );

    expect(consoleError).toBeCalledTimes(1);

    consoleError.mockRestore();
  });

  it('should return an empty string from getSummaryText if textContent is null', async () => {
    const typedElement = element as PdsCard;

    expect(typedElement.getSummaryText(null)).toEqual('');
  });

  it('adds the appropriate class when centerContentVertically prop is passed in', async () => {
    const element1 = await fixture(
      `<pds-card
      variant="default"
      centerContentVertically="true">
      <div slot="header">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card header slot</placeholder-element
        >
      </div>
      <placeholder-element style="--placeholder-element-margin-bottom: 0;"
        >Card body slot</placeholder-element
      >
      <div slot="footer">
        <placeholder-element style="--placeholder-element-margin-bottom: 0;"
          >Card footer slot</placeholder-element
        >
      </div>
    </pds-card>`,
    );
    const card1 = element1.shadowRoot?.querySelector(
      '.pds-c-card',
    ) as HTMLElement;

    expect(card1?.classList.contains('pds-c-card--center-vertically')).toBe(
      true,
    );
  });

  it('does not add the appropriate class when centerContentVertically prop is passed in when direction is horizontal', async () => {
    const configuredElement = await fixture(
      '<pds-card direction="horizontal" centerContentVertically></pds-card>',
    );
    const card = configuredElement.shadowRoot?.querySelector(
      '.pds-c-card',
    ) as HTMLElement;

    expect(card?.classList.contains('pds-c-card--center-vertically')).toBe(
      false,
    );
  });
});
