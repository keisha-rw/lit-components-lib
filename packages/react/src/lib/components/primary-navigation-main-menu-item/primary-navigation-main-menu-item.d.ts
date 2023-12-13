import * as React from 'react';
export declare const PdsPrimaryNavigationMainMenuItem: React.FunctionComponent<Partial<{
    arrow: boolean;
    href: string | undefined;
    isActive: boolean;
    dropdown: boolean;
    megamenu: boolean;
    text: string | undefined;
    divider: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onClick: (e: Event) => void;
    onDropdownOpen: (e: Event) => void;
    onDropdownClose: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
