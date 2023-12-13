const fs = require('fs');
const { globSync } = require('glob')
const { JSDOM } = require('jsdom');
const prettier = require('prettier');

// set up globals for lit
global.window = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = window.document;
global.Document = window.Document;
global.HTMLElement = window.HTMLElement;
global.CSSStyleSheet = window.CSSStyleSheet;
global.customElements = window.customElements;
global.MutationObserver = window.MutationObserver;
global.Element = window.Element;
global.HTMLFormElement = window.HTMLFormElement;

// find all components with types
const files = globSync('./dist/packages/web-components/lib/components/**/*.d.ts')
  .filter(
    (name) => !/\.stories\.d\.ts$/.test(name) && !name.includes('PdsElement')
  );

const allClasses = [];
const allTypes = [];

Promise.all(
  files.map(async (name) => {
    const kebabName = name.match(/([a-z-]+)\.d.ts/)[1];
    const className = `Pds${
      kebabName[0].toUpperCase() +
      kebabName.slice(1).replace(/-([a-z])/g, (_, match) => match.toUpperCase())
    }`;

    try {
      const componentExport = await import(
        `../dist/packages/web-components/es/${kebabName}.js`
      );

      allClasses.push(className);

      const Element = componentExport[className];
      const requiredProps = [
        ...(Element.prototype.pdsRequiredProperties?.keys() || []),
      ];
      let optionalProps = [...Element.elementProperties.keys()].filter(
        (prop) =>
          !requiredProps.includes(prop) &&
          !Element.elementProperties.get(prop).state
      );

      allTypes.push(
        `export type ${className}Props = PdsProps<
  ${className},
  ${optionalProps.map((x) => `'${x}'`).join(' | ') || "''"},
  ${requiredProps.map((x) => `'${x}'`).join(' | ') || "''"}
>`
      );
    } catch (e) {}
  })
).then(async () => {
  allClasses.sort();

  const output = `import { Ref, CSSProperties } from 'react';
  // this is a generated file from npm run create-react-props
  // do not modify
  import {
    ${allClasses.join(',\n  ')}
  } from '@keisha/design-system';

  type PdsProps<
    Element extends HTMLElement,
    OptionalProps extends keyof Element | '' = '',
    RequiredProps extends keyof Element | '' = '',
  > = ([OptionalProps] extends [keyof Element]
    ? Partial<{
        [OptionalKey in OptionalProps]: Element[OptionalKey];
      }>
    : {}) & { ref?: Ref<any> } & { style?: CSSProperties } &
    ([RequiredProps] extends [keyof Element]
      ? Required<{
          [RequiredKey in RequiredProps]: Element[RequiredKey];
        }>
      : {});

  ${allTypes.sort().join('\n\n')}
`;

  const formattedOutput = await prettier.format(output, {
    parser: 'babel-ts',
    singleQuote: true,
  });

  fs.writeFileSync(
    './packages/react/src/lib/built-component-props.ts',
    formattedOutput
  );
});
