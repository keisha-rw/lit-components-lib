import * as React from 'react';
export declare const PdsDecorator: React.FunctionComponent<Partial<{
    size: "default" | "sm";
    variant: "inverted" | "default";
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
