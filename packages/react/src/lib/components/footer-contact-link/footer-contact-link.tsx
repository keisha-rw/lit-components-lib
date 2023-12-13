import * as React from 'react';
import { PdsFooterContactLink as PdsFooterContactLinkElement } from '@keisha/design-system';
import { PdsFooterContactLinkProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsFooterContactLink =
  createPdsReactComponent<PdsFooterContactLinkProps>()({
    tagName: 'pds-footer-contact-link',
    elementClass: PdsFooterContactLinkElement,
    react: React,
  });
