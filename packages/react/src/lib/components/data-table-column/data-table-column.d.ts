import * as React from 'react';
export declare const PdsDataTableColumn: React.FunctionComponent<Partial<{
    hidden: boolean;
    align: "center" | "right" | "left";
    type: "accessor" | "display";
    accessorKey: string | number | symbol | (string & {});
    width: string;
    disableSort: boolean;
    header: import("@tanstack/table-core").ColumnDefTemplate<import("@tanstack/table-core").HeaderContext<any, unknown>> | undefined;
    cell: import("@tanstack/table-core").ColumnDefTemplate<import("@tanstack/table-core").CellContext<any, unknown>> | undefined;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    columnId: string;
}> & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
