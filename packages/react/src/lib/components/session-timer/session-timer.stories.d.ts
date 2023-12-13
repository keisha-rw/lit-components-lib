import * as React from 'react';
import type { Meta } from '@storybook/react';
import { PdsSessionTimer } from './session-timer';
declare const meta: Meta<typeof PdsSessionTimer>;
export default meta;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    type: "timeout" | "max" | "wait";
    setMillisecondsToTimeout: number;
    maxSessionFlag: boolean;
    customLogoutPage: string;
    extendSessionApiEndpointFailure: boolean;
    customNotificationThresholds: number[];
    alertDocumentTitle: string;
    logSessionTimeRemaining: boolean;
    timeout: number;
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
export declare const ExtendSessionApiEndpointFailureAndExtraThresholdSet: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    type: "timeout" | "max" | "wait";
    setMillisecondsToTimeout: number;
    maxSessionFlag: boolean;
    customLogoutPage: string;
    extendSessionApiEndpointFailure: boolean;
    customNotificationThresholds: number[];
    alertDocumentTitle: string;
    logSessionTimeRemaining: boolean;
    timeout: number;
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
export declare const MaxTimer: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    type: "timeout" | "max" | "wait";
    setMillisecondsToTimeout: number;
    maxSessionFlag: boolean;
    customLogoutPage: string;
    extendSessionApiEndpointFailure: boolean;
    customNotificationThresholds: number[];
    alertDocumentTitle: string;
    logSessionTimeRemaining: boolean;
    timeout: number;
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
