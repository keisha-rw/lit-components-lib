// eslint-disable-next-line import/no-unresolved
import { themedefault } from '@keisha/design-system-tokens';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// eslint-disable-next-line import/no-unresolved
import { withActions } from '@storybook/addon-actions/decorator';
import { mockDateDecorator } from 'storybook-mock-date-decorator';
// eslint-disable-next-line import/no-relative-packages
import { languageDecorator } from '../../web-components/.storybook/languageSelector';
// eslint-disable-next-line import/no-unresolved
import '@keisha/design-system-tokens/pds-styles.min.css';
import 'happo-plugin-storybook/register';

const customViewports = {
  pdsXSmall: {
    name: 'PDS Extra Small',
    styles: {
      width: `${themedefault.BreakpointsPixelXs}px`,
      height: '100%',
    },
  },
  pdsSmall: {
    name: 'PDS Small',
    styles: {
      width: `${themedefault.BreakpointsPixelSm}px`,
      height: '100%',
    },
  },
  pdsMedium: {
    name: 'PDS Medium',
    styles: {
      width: `${themedefault.BreakpointsPixelMd}px`,
      height: '100%',
    },
  },
  pdsLarge: {
    name: 'PDS Large',
    styles: {
      width: `${themedefault.BreakpointsPixelLg}px`,
      height: '100%',
    },
  },
  pdsXLarge: {
    name: 'PDS Extra Large',
    styles: {
      width: `${themedefault.BreakpointsPixelXl}px`,
      height: '100%',
    },
  },
};

export const globalTypes = {
  lang: {
    name: 'Language',
    description: 'Internationalization language',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: ['en', 'es'],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  backgrounds: {
    default: 'Default',
    values: [
      { name: 'Default', value: themedefault.SemanticBackgroundDefault },
      {
        name: 'BrandDefault',
        value: themedefault.SemanticBackgroundBrandDefault,
      },
      {
        name: 'BrandStrong',
        value: themedefault.SemanticBackgroundBrandStrong,
      },
      {
        name: 'BrandXStrong',
        value: themedefault.SemanticBackgroundBrandXstrong,
      },
    ],
  },
  actions: { argTypesRegex: '^on.*' },
  docs: {
    source: {
      type: 'dynamic',
    },
  },
};

export const decorators = [
  languageDecorator,
  mockDateDecorator,
  withActions,
];
