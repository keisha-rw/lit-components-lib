import * as React from 'react';
export declare const PdsBoxButton: React.FunctionComponent<Partial<{
    variant: "default" | "strong";
    href: string;
    labelVariant: "default" | "sm" | "lg" | "xl";
    centerContentVertically: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    label: string;
}> & Partial<{
    onClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
