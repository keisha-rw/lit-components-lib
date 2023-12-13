import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { useRef } from 'react';
import { action } from '@storybook/addon-actions';
import { PdsModal } from './modal';
import { PdsTextPassage } from '../text-passage/text-passage';
import { PdsButton } from '../button/button';

export default {
  title: 'Components/Modal',
  component: PdsModal,
  tags: ['autodocs'],
  parameters: {
    happo: {
      // @ts-expect-error
      waitFor: () => document.querySelector('pds-modal')?.updateComplete,
      delay: 1000,
    },
  },
};

const Template: StoryFn<typeof PdsModal> = (args) => (
  <PdsModal
    {...args}
    pdsModalOpen={(e: any) => action('pds-modal-open')(e.detail)}
    pdsModalClose={(e: any) => action('pds-modal-close')(e.detail)}
  >
    <PdsTextPassage lineLength="none">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </PdsTextPassage>
    <PdsButton variant="primary" slot="footer" onClick={() => {}}>
      Button
    </PdsButton>
  </PdsModal>
);

export const Default = Template.bind({});
Default.args = {
  modalTitle: 'Modal heading',
  openOnLoad: true,
};

export const Large = Template.bind({});
Large.args = {
  modalTitle: 'Modal heading',
  openOnLoad: true,
  size: 'lg',
};

export const NoCloseButton = Template.bind({});
NoCloseButton.storyName = 'No close button';
NoCloseButton.args = {
  modalTitle: 'Modal heading',
  openOnLoad: true,
  hideCloseButton: true,
};

export const LargeNoCloseButton = Template.bind({});
LargeNoCloseButton.storyName = 'Large w/ no close button';
LargeNoCloseButton.args = {
  modalTitle: 'Modal heading',
  openOnLoad: true,
  hideCloseButton: true,
  size: 'lg',
};

const ClosedByDefaultTemplate: StoryFn<typeof PdsModal> = (args) => {
  const modalRef = useRef<
    typeof PdsModal & { openModal: Function } & { closeModal: Function }
  >(null);

  return (
    <>
      <PdsButton
        variant="default"
        onClick={() => {
          modalRef?.current?.openModal();
        }}
      >
        Open modal
      </PdsButton>
      <PdsModal
        ref={modalRef}
        pdsModalOpen={(e: any) => action('pds-modal-open')(e.detail)}
        pdsModalClose={(e: any) => action('pds-modal-close')(e.detail)}
        {...args}
      >
        <PdsTextPassage lineLength="none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </PdsTextPassage>
        <PdsButton
          variant="primary"
          slot="footer"
          onClick={(e: any) => modalRef?.current?.closeModal(e)}
        >
          Button
        </PdsButton>
      </PdsModal>
    </>
  );
};

export const ClosedByDefault = ClosedByDefaultTemplate.bind({});
ClosedByDefault.storyName = 'Closed by default';
ClosedByDefault.args = {
  modalTitle: 'Modal heading',
};
