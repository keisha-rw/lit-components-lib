import * as React from 'react';
export declare const PdsStepIndicatorItem: React.FunctionComponent<Partial<{
    inverted: boolean | undefined;
    href: string | undefined;
    active: boolean;
    status: "current" | "completed" | "incomplete";
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
