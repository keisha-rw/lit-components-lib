import { EventName } from '@lit-labs/react';
import { PdsTextArea as PdsTextAreaElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsTextAreaProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsTextArea = createPdsReactComponent<PdsTextAreaProps>()({
  tagName: 'pds-text-area',
  elementClass: PdsTextAreaElement,
  react: React,
  events: {
    // In React, onChange is really the input event
    onChange: 'pds-text-area-input' as EventName<CustomEvent>,
    onBlur: 'pds-text-area-blur' as EventName<CustomEvent>,
    onFocus: 'pds-text-area-focus' as EventName<CustomEvent>,
  },
});
