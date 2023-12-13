import { PdsDecorator as PdsDecoratorElement } from '@keisha/design-system';
import * as React from 'react';
import { PdsDecoratorProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsDecorator = createPdsReactComponent<PdsDecoratorProps>()({
  tagName: 'pds-decorator',
  elementClass: PdsDecoratorElement,
  react: React,
});
