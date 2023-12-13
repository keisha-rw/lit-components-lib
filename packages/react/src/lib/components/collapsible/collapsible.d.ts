import * as React from 'react';
export declare const PdsCollapsible: React.FunctionComponent<Partial<{
    open: boolean;
    variant: "inverted" | "default" | "strong";
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onOpen: (e: Event) => void;
    onClose: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
