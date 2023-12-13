import * as React from 'react';
export declare const PdsPrimaryNavigationMainMenu: React.FunctionComponent<Partial<{
    ariaLabel: string;
    variant: "inverted" | "default";
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onMainMenuDropdownOpen: (e: Event) => void;
    onMainMenuDropdownClose: (e: Event) => void;
    onMainMenuLinkClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
