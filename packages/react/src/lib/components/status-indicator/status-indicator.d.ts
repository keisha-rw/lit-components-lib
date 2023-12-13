import * as React from 'react';
export declare const PdsStatusIndicator: React.FunctionComponent<Partial<{
    variant: "default" | "warning" | "negative" | "neutral";
    icon: "moreHorizontal" | "alert" | "check" | "clock" | "minus" | "x" | undefined;
    border: boolean;
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
