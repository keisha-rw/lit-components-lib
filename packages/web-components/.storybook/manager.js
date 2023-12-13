// .storybook/manager.js

import { addons } from '@storybook/addons';
import PfgTheme from '../../../.storybook/PfgTheme';

addons.setConfig({
  theme: PfgTheme,
});

addons.setConfig({
  enableShortcuts: false,
});
