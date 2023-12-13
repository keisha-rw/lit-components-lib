import { makeDecorator } from '@storybook/addons';
import { addons } from '@storybook/preview-api';
import { FORCE_REMOUNT } from '@storybook/core-events';

export const languageDecorator = makeDecorator({
  name: "language",
  parameterName: "date",
  wrapper: (storyFn, context) => {
    const lang = context.parameters.lang || context.globals.lang || 'en';
    document.documentElement.setAttribute('lang', lang);

    // Re-render on change
    if (lang !== localStorage.getItem('pds-language') && context.viewMode === 'story') {
      // Invokes Storybook's addon API method (with the FORCE_REMOUNT) event to trigger a UI refresh
      addons.getChannel().emit(FORCE_REMOUNT, { storyId: context.id });
    }
    // put the lang value into local storage
    localStorage.setItem(`pds-language`, lang);

    return storyFn(context);
  },
});
