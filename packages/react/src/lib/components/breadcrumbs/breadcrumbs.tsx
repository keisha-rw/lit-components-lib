import * as React from 'react';
import { PdsBreadcrumbs as PdsBreadcrumbsElement } from '@keisha/design-system';
import { PdsBreadcrumbsProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsBreadcrumbs = createPdsReactComponent<PdsBreadcrumbsProps>()({
  tagName: 'pds-breadcrumbs',
  elementClass: PdsBreadcrumbsElement,
  react: React,
});
