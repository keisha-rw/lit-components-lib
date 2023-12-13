import * as React from 'react';
export declare const PdsLink: React.FunctionComponent<Partial<{
    ariaCurrent: "page" | "step" | "location" | "date" | "time" | "true";
    ariaLabel: string;
    role: string;
    rel: string | undefined;
    target: "_blank" | "_self" | "_parent" | "_top" | undefined;
    size: "default" | "sm" | "lg" | "xl";
    variant: "inverted" | "default" | "emphasis" | "emphasis-inverted";
    href: string;
    type: string | undefined;
    button: "" | "icon" | "default" | "default-inverted" | "primary" | "primary-inverted" | "icon-inverted";
    download: string | boolean | undefined;
    hreflang: string | undefined;
    hover: boolean;
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
