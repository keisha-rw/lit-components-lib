import * as React from 'react';
export declare const PdsTable: React.FunctionComponent<Partial<{
    striped: "default" | "odd" | "even";
    removeBorder: boolean;
    hoverableRows: boolean;
    stickyHeader: boolean;
    stickyColumn: boolean;
    fixedHeight: string;
    expandAllOnLoad: boolean;
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
