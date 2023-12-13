import sanitizeHTML from 'sanitize-html';

export const ALLOWED_TAGS_LIST = sanitizeHTML.defaults.allowedTags.concat([
  'pds-link',
  'pds-button',
]);
