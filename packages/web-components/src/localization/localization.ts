import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from './locale-codes';

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale: string) => import(`./locales/${locale}.ts`),
});

/**
 * Set the locale for language localization from lang attribute in DOM
 */
export const setLocaleFromLangAttr = async (element: HTMLElement) => {
  let langAttribute = element.closest('[lang]')?.getAttribute('lang');

  /**
   * If the lang attribute reutrns null or undefined then it checks for
   * its rootNode
   */
  if (!langAttribute) {
    const rootNode = element.getRootNode({composed:true}) as Document;
    langAttribute = rootNode.documentElement.getAttribute('lang');
  }
  if (langAttribute === 'es') {
    await setLocale('es-419');
  } else {
    await setLocale(sourceLocale);
  }
};
