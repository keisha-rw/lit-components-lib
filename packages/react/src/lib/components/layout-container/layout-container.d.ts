import * as React from 'react';
export declare const PdsLayoutContainer: React.FunctionComponent<Partial<{
    variant: "default" | "narrow";
    removePadding: "md" | "all";
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
