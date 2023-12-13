import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { msg, localized } from '@lit/localize';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import { PdsElement } from '../PdsElement';
import styles from './table.scss?inline';
import shadowStyles from './table-shadow-styles.scss?inline';

/**
 * @summary A table wrapper that accepts table as its children
 *
 * @example
 * <pds-table>
 *  <table> ... </table>
 * </pds-table>
 *
 * @event pds-table-collapse-all Can be fired on the .pds-c-table__wrapper element if you need to manually collapse all rows
 * @event pds-table-expand-all Can be fired on the .pds-c-table__wrapper element if you need to manually expand all rows
 * @event change Can be fired on the .pds-c-table__wrapper element if you need to manually state that the HTML has changed
 * @event pds-table-changed Fired after the change event has been triggered
 *
 * @warn
 * pds-c-table css can affect other components
 */
@customElement('pds-table', {
  category: 'component',
  type: 'component',
  styles: shadowStyles,
})
@localized()
export class PdsTable extends PdsElement {
  /**
   * Boolean to determine if the table should have "zebra" striping
   */
  @property()
  striped: 'odd' | 'even' | 'default' = 'default';

  /**
   * Boolean to expand all rows on a collapsible table on initial page load
   */
  @property({ type: Boolean })
  expandAllOnLoad: boolean = false;

  /**
   * Boolean to remove the borders and rounded corners of the table.  Default is false.
   */
  @property({ type: Boolean })
  removeBorder: boolean = false;

  /**
   * Boolean to add hoverable rows functionality to the table.  Default is false.
   */
  @property({ type: Boolean })
  hoverableRows: boolean = false;

  /**
   * Boolean to set the header row to sticky, default is false.
   *
   * Sticky row header will stick to the top of the page when scrolled away unless the table is fixed height, in which case it will stick to the top of the scrollable container.
   */
  @property({ type: Boolean })
  stickyHeader: boolean = false;

  /**
   * Boolean to set the first column to sticky, default is false.
   */
  @property({ type: Boolean })
  stickyColumn: boolean = false;

  /**
   * String to set a fixed height for the table. Example values: 300px, .25vh, 25%
   */
  @property()
  fixedHeight: string;

  /** @internal */
  get classNames() {
    return {
      'striped-even': this.striped === 'even',
      'striped-odd': this.striped === 'odd',
      'hoverable-rows': this.hoverableRows,
    };
  }

  /** @internal */
  @query('.pds-c-table__wrapper')
  wrapper: HTMLElement;

  table: HTMLTableElement;

  /** @internal */
  @state()
  ResizeObserver =
    window && window.ResizeObserver
      ? window.ResizeObserver
      : ResizeObserverPolyfill;

  /** @internal */
  @state()
  childNodeObserver = new MutationObserver(() =>
    this.childNodeObserverCallback(this),
  );

  /** @internal */
  @state()
  // We can't actually call the observer, because Jest has no concept of element width
  /* istanbul ignore next */
  resizeObserver = new this.ResizeObserver((entries: ResizeObserverEntry[]) => {
    /* istanbul ignore next */
    entries.forEach(() => this.resizedCallback());
  });

  connectedCallback() {
    super.connectedCallback();
    this.setLocale();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.childNodeObserver.disconnect();
  }

  childNodeObserverCallback(currentTable: PdsElement): void {
    // When child nodes change, we need to reapply the classes for them to be styled appropriately
    // @ts-expect-error applyClasses does exist, because we're calling it on this component
    currentTable.applyClasses();
    this.applyScrollClasses();
    // @ts-expect-error prepareExpandableRows does exist, because we're calling it on this component
    currentTable.prepareExpandableRows({ initialLoad: false });
  }

  async firstUpdated(): Promise<void> {
    const lightDomExists = document.head.querySelector('#pds-table-styles');

    if (!lightDomExists) {
      const lightDomStyle = document.createElement('style');

      lightDomStyle.id = 'pds-table-styles';
      lightDomStyle.innerHTML = styles.toString();
      document.head.appendChild(lightDomStyle);
    }

    this.table = this.querySelector('table')!;
    /**
     * Search for table and its element
     * and add the pds class to its respective element
     *
     * For Example
     * <tbody> => <tbody class='pds-c-table__body'>
     */
    this.applyClasses();
    this.applyScrollClasses();
    // We need to wait for the update to complete to get accurate height measurements
    // on our expandable rows
    // See https://lit.dev/docs/components/lifecycle/#updatecomplete for more information
    // on why this is necessary
    await this.updateComplete;
    // Do not worry about hydration for Jest tests
    if (
      typeof window !== 'undefined' &&
      window.navigator &&
      window.navigator.userAgent &&
      window.navigator.userAgent.includes('jsdom')
    ) {
      this.prepareExpandableRows({ initialLoad: true });
    } else {
      // This fixes the hydration error with the table component
      // TODO: review this code after we update to lit v3 to see if they've fixed the issue
      // where these hooks are fired during hydration (though they should only occur after render)
      // 85ms was the smallest value that consistently worked
      setTimeout(() => {
        this.prepareExpandableRows({ initialLoad: true });
      }, 85);
    }

    // Watch border-box for changes in our resize observer
    const observerOptions = {
      box: 'border-box',
    };

    if (this.table) {
      // @ts-expect-error there's a ts bug on the observer options object in @juggle/resize-observer
      this.resizeObserver.observe(this.table, observerOptions);
    }

    this.wrapper.addEventListener('scroll', () => {
      this.applyScrollClasses();
    });

    // Options for the observer (which mutations to observe)
    const config = { childList: true, subtree: true };

    // Start observing the target node for configured mutations
    if (this.table) {
      this.childNodeObserver.observe(this.table, config);
    }
  }

  updated() {
    if (!this.removeBorder) {
      this.classList.add(this.classMod('with-border'));
    }

    // listen for sticky headers
    if (this.stickyHeader) {
      this.classList.add(`${this.classMod('sticky-header')}`);
      const firstTableRow = this.querySelector(
        `.pds-c-table > .${this.classEl('tbody')} > .${this.classEl('tr')}`,
      );
      let options: IntersectionObserverInit = {
        rootMargin: '-150px',
        threshold: [0],
      };
      if (this.stickyHeader && this.fixedHeight) {
        options = { ...options, root: this.wrapper, rootMargin: '-110px' };
      }
      const observer = new IntersectionObserver(
        // Jest won't allow us to get into this function
        /* istanbul ignore next */
        ([e]) => {
          /* istanbul ignore next */
          e.target
            .closest(`.pds-c-table`)
            ?.querySelector(`.${this.classEl('thead')}`)
            ?.classList.toggle(
              `${this.classMod('is-pinned')}`,
              !e.isIntersecting,
            );
        },
        options,
      );

      if (firstTableRow) {
        observer.observe(firstTableRow);
      }
    }
  }

  handleChange() {
    this.applyClasses();
    this.prepareExpandableRows({ initialLoad: false });
    const event = new Event('pds-table-changed', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  handleCollapseAll() {
    const expandableRegions = Array.from(
      this.querySelectorAll('.pds-c-table__expandable-row'),
    ) as HTMLElement[];

    expandableRegions.forEach((region: HTMLElement) => {
      const trigger = region.querySelector(
        '.pds-c-table__toggle',
      ) as HTMLElement;
      const wrapper = region.querySelector(
        '.pds-c-table__expandable-row-wrapper',
      ) as HTMLElement;
      wrapper.classList.add('pds-c-table__expandable-row--is-collapsed');
      this.resetRegionHeight(region, trigger, wrapper);
      this.adjustKeyboardFocus(wrapper);
    });
  }

  handleExpandAll() {
    const expandableRegions = Array.from(
      this.querySelectorAll('.pds-c-table__expandable-row'),
    ) as HTMLElement[];

    expandableRegions.forEach((region: HTMLElement) => {
      const trigger = region.querySelector(
        '.pds-c-table__toggle',
      ) as HTMLElement;
      const wrapper = region.querySelector(
        '.pds-c-table__expandable-row-wrapper',
      ) as HTMLElement;
      wrapper.classList.remove('pds-c-table__expandable-row--is-collapsed');
      this.resetRegionHeight(region, trigger, wrapper);
      this.adjustKeyboardFocus(wrapper);
    });
  }

  getRandomId(): string {
    if (window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID();
    }

    return '';
  }

  /**
   * Set the child elements to be focusable or remove them from the tab order, based on if they're shown/hidden
   */
  adjustKeyboardFocus(wrapper: HTMLElement) {
    const tableBody = wrapper.querySelector('tbody');
    const focusableElements = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      'details',
    ];
    const isRowExpanded = !wrapper.classList.contains(
      'pds-c-table__expandable-row--is-collapsed',
    );

    if (tableBody) {
      if (isRowExpanded) {
        // If expanded, set aria-hidden on the tbody to true
        tableBody.setAttribute('aria-hidden', 'true');
      } else {
        // If collapsed, set aria-hidden on the tbody to false
        tableBody.setAttribute('aria-hidden', 'false');
      }
    }

    // Get all rows to loop through, but we'll skip the expandable ones because they're always visible
    const wrapperRows = Array.from(
      wrapper.querySelectorAll('tr'),
    ) as HTMLElement[];
    wrapperRows.forEach((wrapperRow: HTMLElement, index: number) => {
      if (index !== 0) {
        // Not on the first row, so now we can get all the child elements
        const allRowChildren = Array.from(
          wrapperRow.querySelectorAll('*'),
        ) as HTMLElement[];
        allRowChildren.forEach((rowChildElement: HTMLElement) => {
          // If the child is a keyboard focusable element, add or remove tabindex
          if (
            focusableElements.includes(rowChildElement.tagName.toLowerCase())
          ) {
            if (isRowExpanded) {
              // If the row is expanded, add the element back into the natural tab order
              rowChildElement.removeAttribute('tabindex');
            } else {
              // If the row is closed, remove this element from the tab order by setting tabindex = -1
              rowChildElement.setAttribute('tabindex', '-1');
            }
          }
          // The above will work for all non-web components, but for web components we need to check their shadow dom
          if (rowChildElement.shadowRoot) {
            const shadowFocusableElements = Array.from(
              rowChildElement.shadowRoot.querySelectorAll(
                'a[href], button, input, textarea, select, details',
              ),
            ) as HTMLElement[];

            // Loop through all the focuable elements in shadowRoot and add/remove tabindex
            shadowFocusableElements.forEach((element: HTMLElement) => {
              if (isRowExpanded) {
                // If the row is expanded, add the elements back into the natural tab order
                element.removeAttribute('tabindex');
              } else {
                // If the row is collapsed, remove these elements from the tab order by setting tabindex = -1
                element.setAttribute('tabindex', '-1');
              }
            });
          }
        });
      }
    });
  }

  setCssCustomProps() {
    // set css custom properties
    const verticalAdjust =
      this.wrapper.offsetHeight - this.wrapper.clientHeight - 1;
    const horizontalAdjust =
      this.wrapper.offsetWidth - this.wrapper.clientWidth - 1;
    const pinnedAdjust = this.querySelector('thead')?.offsetHeight;
    this.style.setProperty(
      '--pds-table-horizontal-scroller-offset',
      `${horizontalAdjust}px`,
    );
    this.style.setProperty(
      '--pds-table-vertical-scroller-offset',
      `${verticalAdjust}px`,
    );
    this.style.setProperty('--pds-table-pinned-offset', `${pinnedAdjust}px`);
    if (this.fixedHeight) {
      this.style.setProperty('--pds-table-fixed-height', `${this.fixedHeight}`);
    }
  }

  applyScrollClasses(): void {
    // if we can scroll any direction, we need a tabindex=0 on the wrapper for a11y
    if (
      this.wrapper.scrollLeft > 0 ||
      this.wrapper.scrollTop > 0 ||
      ((!this.stickyHeader || this.fixedHeight) &&
        this.wrapper.scrollLeft <
          this.wrapper.scrollWidth - this.wrapper.clientWidth) ||
      this.wrapper.scrollTop <
        this.wrapper.scrollHeight - this.wrapper.clientHeight
    ) {
      this.wrapper.setAttribute('tabindex', '0');
    } else {
      this.wrapper.removeAttribute('tabindex');
    }

    if (this.wrapper.scrollLeft > 0) {
      this.classList.add(this.classMod('can-be-scrolled-left'));
    } else {
      this.classList.remove(this.classMod('can-be-scrolled-left'));
    }

    if (this.wrapper.scrollTop > 0) {
      this.classList.add(this.classMod('can-be-scrolled-up'));
    } else {
      this.classList.remove(this.classMod('can-be-scrolled-up'));
    }

    if (
      (!this.stickyHeader || this.fixedHeight) &&
      Math.ceil(this.wrapper.scrollLeft) <
        this.wrapper.scrollWidth - this.wrapper.clientWidth
    ) {
      this.wrapper.classList.add(this.classMod('can-be-scrolled-right'));
    } else {
      this.wrapper.classList.remove(this.classMod('can-be-scrolled-right'));
    }

    if (
      this.wrapper.scrollTop <
      this.wrapper.scrollHeight - this.wrapper.clientHeight
    ) {
      this.wrapper.classList.add(this.classMod('can-be-scrolled-down'));
    } else {
      this.wrapper.classList.remove(this.classMod('can-be-scrolled-down'));
    }
  }

  resizedCallback() {
    // If the wrapper isn't as wide as the table itself, it must be scrollable
    if (
      ((this.wrapper && this.wrapper.clientWidth) || 0) < this.table.clientWidth
    ) {
      // So we'll add the scroll classes
      this.applyScrollClasses();
    } else {
      // Remove the scroll classes if it's not scrollable anymore
      this.classList.remove(this.classMod('can-be-scrolled-left'));
      this.wrapper.classList.remove(this.classMod('can-be-scrolled-left'));
      this.classList.remove(this.classMod('can-be-scrolled-right'));
      this.wrapper.classList.remove(this.classMod('can-be-scrolled-right'));
    }

    this.setCssCustomProps();
  }

  /**
   * Apply the pds class to the table and its elements inside
   */
  applyClasses(): void {
    const classMap = this.getClass() as {
      values: [{ [key: string]: boolean }];
    };
    const tableClasses = classMap.values.reduce((prev, curr) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(curr)) {
        if (value) {
          prev.push(key);
        }
      }
      return prev;
    }, [] as string[]);

    this.querySelector('table')?.classList.add(...tableClasses);

    ['th', 'tr', 'td', 'thead', 'tbody', 'tfoot'].forEach((element) => {
      this.querySelectorAll(element).forEach((el) => {
        el.classList.add(`pds-c-table__${element}`);
      });
    });
  }

  /**
   * Add classes, attributes and trigger buttons to the expandable rows
   */
  prepareExpandableRows(options: { initialLoad: boolean }): void {
    const expandableRegions = Array.from(
      this.querySelectorAll('.pds-c-table__expandable-row'),
    ) as HTMLElement[];

    if (expandableRegions.length > 0) {
      this.classList.add('pds-c-table__has-collapsible-rows');
    }
    const headers = this.querySelectorAll(
      '.pds-c-table > .pds-c-table__thead > .pds-c-table__tr > .pds-c-table__th',
    ).length;
    this.querySelectorAll('.pds-c-table__expandable-row > td').forEach((td) => {
      td.setAttribute('colspan', headers.toString());
    });
    this.style.setProperty(
      '--pds-table-column-percentage',
      `${100 / headers}%`,
    );

    expandableRegions.forEach((region: HTMLElement) => {
      const wrapper = region.querySelector(
        '.pds-c-table__expandable-row-wrapper',
      ) as HTMLElement;
      wrapper.classList.add('pds-c-table__expandable-row--is-expandable');
      if (options.initialLoad) {
        // If first update and expandAllOnLoad is true, don't add the collapsed class
        // but if it's the first update and expandAllOnLoad is false, we want to add it in
        if (!this.expandAllOnLoad) {
          wrapper.classList.add('pds-c-table__expandable-row--is-collapsed');
        }
      }
      // If it's not first update, don't mess with the class because we're just repainting

      const id = `pds-table__expandable-row--row${this.getRandomId()}`;
      region.setAttribute('id', id);
      const triggerButton = this.createTriggerButton(region);
      // Target the first td and add the toggle button in
      const firstTd = region.querySelector(
        '.pds-c-table__expandable-row-wrapper td',
      );

      // If firstTd exists and has a child, and that child is our cell wrapper,
      // we've already done this and we don't need to run it again
      // If firstTd exists but doesn't have a child, or that child does not have our cell wrapper,
      // we need to add it
      if (
        firstTd &&
        ((firstTd.firstElementChild &&
          !firstTd.firstElementChild.classList.contains(
            'pds-c-table__expandable-row__cell-wrapper',
          )) ||
          !firstTd.firstElementChild)
      ) {
        // Create a wrapper div and move everything in the td inside it
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('pds-c-table__expandable-row__cell-wrapper');
        while (firstTd.firstChild) {
          wrapperDiv.appendChild(firstTd.firstChild);
        }
        firstTd.appendChild(wrapperDiv);

        wrapperDiv.prepend(triggerButton);
      }

      if (
        wrapper.classList.contains('pds-c-table__expandable-row--is-collapsed')
      ) {
        // If collapsed, height is just the expandable TR height
        const regionsTR = region.querySelector('tr') as HTMLElement;
        const initialHeight = regionsTR.scrollHeight;
        wrapper.style.setProperty('height', `${initialHeight}px`);
      } else {
        // If open, height is the expandable TR height + TR height of every contained row
        const allRowsInExpandable = wrapper.querySelectorAll(
          '.pds-c-table__expandable-row-table > tbody > tr',
        );
        let totalHeight = 0;
        allRowsInExpandable.forEach((row) => {
          totalHeight += row.scrollHeight;
        });

        wrapper.style.setProperty('height', `${totalHeight}px`);
      }
      // Determine if elements should be within the natural tab flow or not, based on whether they are shown/hidden
      this.adjustKeyboardFocus(wrapper);
    });
  }

  createTriggerButton(region: HTMLElement): HTMLButtonElement {
    const triggerButton = document.createElement('button');
    triggerButton.setAttribute('aria-expanded', 'false');
    triggerButton.setAttribute('aria-controls', region.id);
    triggerButton.setAttribute('aria-label', msg('Expand/collapse row'));
    triggerButton.classList.add('pds-c-table__toggle');
    triggerButton.innerHTML = this.getToggleChevron();
    triggerButton.addEventListener('click', () => {
      this.toggleRegionCollapse(region, triggerButton);
    });
    return triggerButton;
  }

  getToggleChevron(): string {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15" stroke="#0076CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  }

  toggleRegionCollapse(region: HTMLElement, triggerButton: HTMLElement) {
    const wrapper = region.querySelector(
      '.pds-c-table__expandable-row-wrapper',
    ) as HTMLElement;
    wrapper.classList.toggle('pds-c-table__expandable-row--is-collapsed');
    this.resetRegionHeight(region, triggerButton, wrapper);
    this.adjustKeyboardFocus(wrapper);
  }

  // Readjust the expandable region's height after an expand/collapse event
  // This forces the open/close animation to occur because we have a height transition animation in css
  resetRegionHeight(
    region: HTMLElement,
    triggerButton: HTMLElement,
    wrapper: HTMLElement,
  ) {
    if (
      wrapper.classList.contains('pds-c-table__expandable-row--is-collapsed') &&
      triggerButton
    ) {
      const regionTR = region.querySelector('tr') as HTMLElement;
      const initialHeight = regionTR.scrollHeight;
      wrapper.style.setProperty('height', `${initialHeight}px`);
      triggerButton.setAttribute('aria-expanded', 'false');
    } else if (triggerButton) {
      const initialHeight = wrapper.scrollHeight;
      wrapper.style.setProperty('height', `${initialHeight}px`);
      triggerButton.setAttribute('aria-expanded', 'true');
    }
  }

  render() {
    return html`<div
      class="${this.classEl('wrapper')} ${this.removeBorder
        ? ''
        : this.classMod('with-border')} ${this.stickyHeader
        ? this.classMod('sticky-header')
        : ''} ${this.fixedHeight ? this.classMod('fixed-height') : ''}"
      @change=${this.handleChange}
      part="wrapper"
      @pds-table-collapse-all=${this.handleCollapseAll}
      @pds-table-expand-all=${this.handleExpandAll}
    >
      <slot></slot>
    </div>`;
  }
}
