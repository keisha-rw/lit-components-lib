import * as React from 'react';
import { PdsSkeletonLoader as PdsSkeletonLoaderElement } from '@keisha/design-system';
import { PdsSkeletonLoaderProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsSkeletonLoader =
  createPdsReactComponent<PdsSkeletonLoaderProps>()({
    tagName: 'pds-skeleton-loader',
    elementClass: PdsSkeletonLoaderElement,
    react: React,
  });
