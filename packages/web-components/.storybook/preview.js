import { themedefault } from '@keisha/design-system-tokens';
import { setCustomElementsManifest } from '@storybook/web-components';
import { mockDateDecorator } from 'storybook-mock-date-decorator';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import customElements from './custom-elements.json';
import { languageDecorator } from './languageSelector';
import { themeDecorator } from './themeSelector';
import { withActions } from '@storybook/addon-actions/decorator';
import '@keisha/design-system-tokens/pds-styles.min.css';
import 'happo-plugin-storybook/register';

setCustomElementsManifest(customElements);

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
  theme: {
    name: 'Theme',
    description: 'PDS theme',
    defaultValue: 'Default',
    toolbar: {
      icon: 'paintbrush',
      items: ['Default', 'Company CoAM', 'FirstDentalHealth'],
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
  options: {
    storySort: {
      order: ['Documentation', 'Components', '*', 'Tracking'],
    },
  },
  controls: {
    expanded: true,
  },
  actions: { argTypesRegex: '^@.*' },
  happo: {
    afterScreenshot: ({ rootElement }) => {
      rootElement.innerHTML = '';
    },
  },
};

export const decorators = [
  mockDateDecorator,
  languageDecorator,
  themeDecorator,
  withActions,
];
