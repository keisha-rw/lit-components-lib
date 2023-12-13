import * as React from 'react';
export declare const PdsPaginationItem: React.FunctionComponent<Partial<{
    variant: "no-arrows-first" | "no-arrows-last" | "no-arrows-one-item";
    href: string;
    active: boolean;
    hideFlyers: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    pageNumber: Number;
}> & Partial<{
    onClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
