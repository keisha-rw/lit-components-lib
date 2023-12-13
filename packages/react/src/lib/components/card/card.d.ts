import * as React from 'react';
export declare const PdsCard: React.FunctionComponent<Partial<{
    ariaLabel: string;
    target: string | undefined;
    variant: "default" | "bare";
    href: string | undefined;
    centerContentVertically: boolean;
    borderRadiusSize: "default" | "sm";
    direction: "default" | "horizontal";
    removePadding: boolean;
    hasNoSlottedLinkContent: boolean;
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
