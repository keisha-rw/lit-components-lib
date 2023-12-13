import * as React from 'react';
export declare const PdsSidebar: React.FunctionComponent<Partial<{
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
