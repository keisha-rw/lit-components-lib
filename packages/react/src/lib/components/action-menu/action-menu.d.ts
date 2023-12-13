import * as React from 'react';
export declare const PdsActionMenu: React.FunctionComponent<Partial<{
    ariaLabel: string;
    buttonVariant: import("@keisha/design-system").ButtonVariant;
    size: "default" | "sm";
    hideSeparator: boolean;
    label: string;
    buttonLabel: string;
    open: boolean;
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
