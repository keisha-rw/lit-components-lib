import * as React from 'react';
export declare const PdsSupportHeading: React.FunctionComponent<Partial<{
    inverted: boolean;
    headingVariant: "headline-default" | "meta-sm" | "meta-default";
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    headingTagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}> & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
