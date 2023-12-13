/// <reference types="node" />
import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
        parentElement: HTMLElement;
        timeInMs: number;
        notificationThresholds: number[];
        displayedCountdownTime: string;
        a11yCountdownTime: string;
        intervalId: NodeJS.Timer | undefined;
    }> & {
        ref?: React.Ref<any> | undefined;
    } & {
        style?: React.CSSProperties | undefined;
    } & Partial<{}> & {
        id?: string | undefined;
        slot?: string | undefined;
        className?: string | undefined;
        children?: React.ReactNode;
    }>;
    tags: string[];
    parameters: {
        happo: boolean;
        actions: {
            handles: string[];
        };
    };
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    parentElement: HTMLElement;
    timeInMs: number;
    notificationThresholds: number[];
    displayedCountdownTime: string;
    a11yCountdownTime: string;
    intervalId: NodeJS.Timer | undefined;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
