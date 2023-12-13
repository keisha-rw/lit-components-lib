// declarations.d.ts
declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}
declare module '*.scss?inline' {
  const content: {[className: string]: string};
  export default content;
}
declare module '*.md';
declare module 'markdown-it';
