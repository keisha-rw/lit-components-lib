import * as React from 'react';
export declare const PdsSessionTimer: React.FunctionComponent<Partial<{
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
