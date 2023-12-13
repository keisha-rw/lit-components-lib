import * as React from 'react';
export declare const PdsButton: React.FunctionComponent<Partial<{
    ariaLabel: string;
    link: "" | "inverted" | "default" | "emphasis" | "emphasis-inverted" | "icon-left" | "icon-right";
    size: "default" | "sm";
    variant: import("@keisha/design-system").ButtonVariant;
    disabled: boolean;
    fullWidth: boolean;
    type: "button" | "submit" | "reset";
    removeLinkPadding: boolean;
    ariaControls: string;
    ariaDescribedby: string;
    isActive: boolean;
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
