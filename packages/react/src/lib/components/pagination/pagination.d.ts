import * as React from 'react';
export declare const PdsPagination: React.FunctionComponent<Partial<{
    ariaLabel: string;
    variant: "default" | "arrows" | "no-arrows";
    hideFlyers: boolean;
    backwardDisabled: boolean;
    forwardDisabled: boolean;
    flyFirstHref: string;
    stepForwardHref: string;
    flyLastHref: string;
    stepBackwardHref: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onHandleClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
