import * as React from 'react';
export declare const PdsListItem: React.FunctionComponent<Partial<{
    size: "sm" | "md";
    variant: "description" | "default" | "description-reverse";
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
