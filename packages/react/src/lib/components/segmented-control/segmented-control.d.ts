import * as React from 'react';
export declare const PdsSegmentedControl: React.FunctionComponent<Partial<{
    ariaLabel: string;
    size: "default" | "sm";
    disabled: boolean;
    isNarrowContainer: boolean;
    controlWidth: number;
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
