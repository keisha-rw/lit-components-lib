import * as React from 'react';
export declare const PdsAlert: React.FunctionComponent<Partial<{
    variant: "information" | "success" | "error" | "warning" | "banner";
    layoutContainerVariant: "default" | "narrow" | undefined;
    layoutContainerRemovePadding: "md" | "all" | undefined;
    hideDismissButton: boolean;
    hiddenOnPageLoad: boolean;
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
