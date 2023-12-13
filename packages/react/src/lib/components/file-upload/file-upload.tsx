import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsFileUpload as PdsFileUploadElement } from '@keisha/design-system';
import { PdsFileUploadProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFileUpload = createPdsReactComponent<PdsFileUploadProps>()({
  tagName: 'pds-file-upload',
  elementClass: PdsFileUploadElement,
  react: React,
  events: {
    pdsFileUploadChange: 'pds-file-upload-change' as EventName<CustomEvent>,
    pdsFileUploadRemove: 'pds-file-upload-remove' as EventName<CustomEvent>,
  },
});
