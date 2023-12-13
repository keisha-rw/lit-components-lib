import * as React from 'react';
export declare const PdsSkeletonLoader: React.FunctionComponent<Partial<{
    variant: "heading" | "default" | "image" | "area-chart";
    inverted: boolean;
    loadingText: string;
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
