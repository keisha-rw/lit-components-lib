import * as React from 'react';
export declare const PdsSecondaryNavigationLevelOne: React.FunctionComponent<Partial<{
    title: string;
    href: string;
    columns: "3col" | "4col" | "2col" | "1col";
    activeSection: boolean;
    activeSectionCallback: Function | undefined;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onDropdownClose: (e: Event) => void;
    onDrodownOpen: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
