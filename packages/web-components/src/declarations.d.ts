// declarations.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss?inline' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@brightcove/player-loader' {
  export default function (parameters: unknown): RefNode;
}

// We could clean this up after the tokens build is complete if we add types to it
declare module '@keisha/design-system-tokens';
