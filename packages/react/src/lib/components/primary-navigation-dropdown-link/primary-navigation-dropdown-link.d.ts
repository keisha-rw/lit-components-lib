import * as React from 'react';
export declare const PdsPrimaryNavigationDropdownLink: React.FunctionComponent<Partial<{
    arrow: boolean;
    variant: "inverted" | "default";
    href: string | undefined;
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
