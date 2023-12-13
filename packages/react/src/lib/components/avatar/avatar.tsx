import * as React from 'react';
import { PdsAvatar as PdsAvatarElement } from '@keisha/design-system';
import { PdsAvatarProps } from '../../built-component-props';
import { createPdsReactComponent } from '../../create-pds-react-component';

export const PdsAvatar = createPdsReactComponent<PdsAvatarProps>()({
  tagName: 'pds-avatar',
  elementClass: PdsAvatarElement,
  react: React,
});
