import * as React from 'react';
export declare const PdsActionMenuItem: React.FunctionComponent<Partial<{
    ariaLabel: string;
    rel: string | undefined;
    target: "_blank" | "_self" | "_parent" | "_top" | undefined;
    linkHref: string;
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
