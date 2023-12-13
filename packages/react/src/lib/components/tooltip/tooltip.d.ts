import * as React from 'react';
export declare const PdsTooltip: React.FunctionComponent<Partial<{
    variant: "default" | "subtle";
    placement: "top" | "right" | "bottom" | "left";
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
