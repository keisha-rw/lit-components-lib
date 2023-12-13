import * as React from 'react';
export declare const PdsShowMore: React.FunctionComponent<Partial<{
    open: boolean;
    variant: "inverted" | "default";
    showMoreText: string;
    showLessText: string;
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
