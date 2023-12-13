import '@lit-labs/ssr-react/enable-lit-ssr.js';
import type { LitElement } from 'lit';
import type { FC } from 'react';
import * as React from 'react';
type EventName<T extends Event = Event> = string & {
    __event_type: T;
};
type EventNames = Record<string, EventName | string>;
type EventListeners<R extends EventNames> = {
    [K in keyof R]: R[K] extends EventName ? (e: R[K]['__event_type']) => void : (e: Event) => void;
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
type PdsReactComponent<Props, Events extends EventNames> = FC<Props & Partial<EventListeners<Events>> & CommonProps>;
type CreateComponentOptions<PdsWebComponent extends typeof LitElement, Events extends Record<string, any> = {}> = {
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
export declare function createReactServerComponent(Component: string): <P extends Record<string, any>>(props: P) => JSX.Element;
/**
 * This function is a wrapper around the `createComponent` function from `@lit-labs/react`.
 * Its purpose is to provide a type definition for the React props of the created component.
 */
export declare function createPdsReactComponent<Props extends Record<string, any>>(): <PdsWebComponent extends typeof LitElement, Events extends EventNames = {}>(options: CreateComponentOptions<PdsWebComponent, Events>) => PdsReactComponent<Props, Events>;
export {};
