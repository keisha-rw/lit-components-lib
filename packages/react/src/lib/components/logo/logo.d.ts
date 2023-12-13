import * as React from 'react';
export declare const PdsLogo: React.FunctionComponent<Partial<{
    fullLogoVariants: ("default" | "p" | "white" | "default-p-white-font" | "p-gradient" | "p-white")[];
    pLogoVariants: ("default" | "p" | "white" | "default-p-white-font" | "p-gradient" | "p-white")[];
    pLogoFills: {
        name: string;
        fill: string;
    }[];
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    variant: "default" | "p" | "white" | "default-p-white-font" | "p-gradient" | "p-white";
}> & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
