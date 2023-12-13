import * as React from 'react';
export declare const PdsErrorPage: React.FunctionComponent<Partial<{
    linkHref: String;
    layoutContainerVariant: "default" | "narrow" | undefined;
    errorCode: "403" | "404" | "500" | "503";
    linkText: String;
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
