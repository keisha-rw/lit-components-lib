import * as React from 'react';
export declare const PdsGrid: React.FunctionComponent<Partial<{
    variant: "default" | "2up" | "3up" | "1-3up" | "1-2-4up" | "side-by-side";
    gap: "default" | "sm" | "lg" | "none";
    break: "default" | "faster" | "slower";
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
