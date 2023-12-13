import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsModal as PdsModalElement } from '@keisha/design-system';
import { PdsModalProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsModal = createPdsReactComponent<PdsModalProps>()({
  tagName: 'pds-modal',
  elementClass: PdsModalElement,
  react: React,
  events: {
    pdsModalOpen: 'pds-modal-open' as EventName<Event>,
    pdsModalClose: 'pds-modal-close' as EventName<Event>,
  },
});
