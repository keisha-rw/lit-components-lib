import * as React from 'react';
export declare const PdsBand: React.FunctionComponent<Partial<{
    variant: "default" | "strong" | "subtle" | "brand-default" | "brand-strong" | "brand-xstrong" | "brand-gradient-strong" | "brand-gradient-xstrong";
    rounded: boolean;
    spacing: "default" | "sm" | "lg" | "none";
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
