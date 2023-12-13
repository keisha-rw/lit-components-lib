import * as React from 'react';
export declare const PdsList: React.FunctionComponent<Partial<{
    size: "sm" | "md";
    variant: "description" | "default" | "description-reverse";
    align: "default" | "center";
    spacing: "sm" | "md" | "lg" | "none";
    orientation: "default" | "horizontal";
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
