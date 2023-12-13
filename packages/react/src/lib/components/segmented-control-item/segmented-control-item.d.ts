import * as React from 'react';
export declare const PdsSegmentedControlItem: React.FunctionComponent<Partial<{
    ariaLabel: string;
    size: "default" | "sm";
    disabled: boolean;
    isSegmentActive: boolean | undefined;
    isNarrowContainer: boolean | undefined;
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
