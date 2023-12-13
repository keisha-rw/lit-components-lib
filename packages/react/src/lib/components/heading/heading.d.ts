import * as React from 'react';
export declare const PdsHeading: React.FunctionComponent<Partial<{
    variant: "label-default" | "display-default" | "display-sm" | "headline-lg" | "headline-default" | "headline-sm" | "title-lg" | "title-default" | "title-sm" | "title-xs" | "label-lg" | "label-sm" | "meta-sm" | "meta-default";
    inverted: boolean | undefined;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}> & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
