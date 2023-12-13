import * as React from 'react';
export declare const PdsSecondaryNavigation: React.FunctionComponent<Partial<{
    description: string;
    responsiveViewportSize: "xs" | "sm" | "md" | "lg" | "xl";
    navAriaLabel: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    title: string;
}> & Partial<{
    onDropdownClose: (e: Event) => void;
    onDrodownOpen: (e: Event) => void;
    onDropdownLinkClick: (e: Event) => void;
    onLinkClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
