import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './modal';
import type { PdsModal } from './modal';
import '../text-passage/text-passage';
import '../button/button';

export default {
  title: 'Components/Modal',
  component: 'pds-modal',
  parameters: {
    happo: {
      // @ts-expect-error
      waitFor: () => document.querySelector('pds-modal')?.updateComplete,
      delay: 1000,
    },
    actions: { handles: ['pds-modal-open', 'pds-modal-close'] },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'lg'],
    },
  },
  render: (args) => html`
    <pds-modal
      size=${args.size || nothing}
      ?hideCloseButton=${args.hideCloseButton}
      modalTitle="This is a heading"
      openOnLoad
    >
      <pds-text-passage linelength="none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </pds-text-passage>
      <pds-button variant="primary" slot="footer">Button</pds-button>
    </pds-modal>
  `,
} as Meta;

// span element is needed to wrap plain text slots https://github.com/storybookjs/storybook/issues/15963

export const Default: StoryObj = {
  name: 'Default',
  args: {},
};

export const Large: StoryObj = {
  name: 'Large',
  args: {
    size: 'lg',
  },
};

export const NoCloseButton: StoryObj = {
  name: 'No close button',
  args: {
    hideCloseButton: true,
  },
};

export const LargeNoCloseButton: StoryObj = {
  name: 'Large w/ no close button',
  args: {
    hideCloseButton: true,
    size: 'lg',
  },
};

export const ModalClosedByDefault: StoryObj = {
  name: 'Closed by default',
  args: {},
  parameters: {
    happo: false,
  },
  render: () =>
    html`<pds-button
        @click=${() =>
          document.querySelector<PdsModal>('pds-modal')?.openModal()}
        >Open modal</pds-button
      ><pds-modal size="default" modalTitle="Modal heading">
        <pds-text-passage linelength="none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </pds-text-passage>
        <pds-button
          variant="primary"
          slot="footer"
          @click=${(e: MouseEvent) =>
            document.querySelector<PdsModal>('pds-modal')?.closeModal(e)}
          >Button</pds-button
        >
      </pds-modal>`,
};
