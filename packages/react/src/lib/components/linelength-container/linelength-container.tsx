import { PdsLinelengthContainer as PdsLinelengthContainerElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsLinelengthContainerProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsLinelengthContainer =
  createPdsReactComponent<PdsLinelengthContainerProps>()({
    tagName: 'pds-linelength-container',
    elementClass: PdsLinelengthContainerElement,
    react: React,
  });
