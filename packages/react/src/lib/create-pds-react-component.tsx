// eslint-disable-next-line import/extensions
import '@lit-labs/ssr-react/enable-lit-ssr.js';

import { createComponent } from '@lit-labs/react';
import type { LitElement } from 'lit';
import { isServer } from 'lit';
import type { FC } from 'react';
import * as React from 'react';

// utility types for creating the event handler props
type EventName<T extends Event = Event> = string & {
  __event_type: T;
};

type EventNames = Record<string, EventName | string>;

type EventListeners<R extends EventNames> = {
  [K in keyof R]: R[K] extends EventName
    ? (e: R[K]['__event_type']) => void
    : (e: Event) => void;
};

/**
 * props that every component should take and pass down to the web component
 */
type CommonProps = {
  id?: string;
  slot?: string;
  className?: string;
  children?: React.ReactNode;
};

type PdsReactComponent<Props, Events extends EventNames> = FC<
  Props & Partial<EventListeners<Events>> & CommonProps
>;

type CreateComponentOptions<
  PdsWebComponent extends typeof LitElement,
  Events extends Record<string, any> = {},
> = {
  tagName: string;
  elementClass: PdsWebComponent;
  react: typeof React;
  events?: Events;
  displayName?: string;
};

/**
 *
 * @param Component
 * @returns
 */
export function createReactServerComponent(Component: string) {
  return <P extends Record<string, any>>(props: P) => <Component {...props} />;
}

/**
 * This function is a wrapper around the `createComponent` function from `@lit-labs/react`.
 * Its purpose is to provide a type definition for the React props of the created component.
 */
export function createPdsReactComponent<Props extends Record<string, any>>() {
  return <
    PdsWebComponent extends typeof LitElement,
    Events extends EventNames = {},
  >(
    options: CreateComponentOptions<PdsWebComponent, Events>,
  ): PdsReactComponent<Props, Events> => {
    // SSR
    if (isServer || typeof window === 'undefined') {
      const Component = options.tagName;

      // Lit's createComponent method's way of
      // adding props to the React component
      // does not work for SSR, so we need
      // to override it in that situation
      // this is a temporary fix until
      // we can use Lit's SSR solution
      return (props: Props) => {
        // rename `className` to `class` for SSR
        const ssrProps = {
          ...props,
          class: props['className'],
        };

        // remove `className`
        delete ssrProps['className'];

        // @ts-expect-error - TS doesn't like Component here
        return <Component {...ssrProps} />;
      };
    }

    const Component = createComponent(options as any);

    // Need to allow PDS React components to take a ref
    return React.forwardRef<any, Props>((props, ref) => (
      // React throws a hydration warning for PDS
      // components that were server-rendered
      // this is largely just noise, so suppressing
      <Component ref={ref} {...props} suppressHydrationWarning />
    )) as unknown as PdsReactComponent<Props, Events>;
  };
}
