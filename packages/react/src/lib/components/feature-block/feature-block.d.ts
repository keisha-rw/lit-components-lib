import * as React from 'react';
export declare const PdsFeatureBlock: React.FunctionComponent<Partial<{
    fullWidth: boolean;
    behavior: "default" | "reversed";
    reverseMobileDisplay: boolean;
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
