import * as React from 'react';
import { EventName } from '@lit-labs/react';
import { PdsBreadcrumbsItem as PdsBreadcrumbsItemElement } from '@keisha/design-system';
import { PdsBreadcrumbsItemProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsBreadcrumbsItem =
  createPdsReactComponent<PdsBreadcrumbsItemProps>()({
    tagName: 'pds-breadcrumbs-item',
    elementClass: PdsBreadcrumbsItemElement,
    react: React,
    events: {
      onClick: 'pds-breadcrumbs-item-click' as EventName<CustomEvent>,
    },
  });
