/// <reference types="node" />
import * as React from 'react';
export declare const PdsSessionTimerCountdown: React.FunctionComponent<Partial<{
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
