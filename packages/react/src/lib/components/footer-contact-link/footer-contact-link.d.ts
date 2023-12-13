import * as React from 'react';
export declare const PdsFooterContactLink: React.FunctionComponent<Partial<{
    ariaLabel: string;
    variant: "inverted" | "default";
    href: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    linkCategory: "phone" | "email" | "help" | "fax";
}> & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
