import * as React from 'react';
export declare const PdsDataTableInputColumn: React.FunctionComponent<Partial<{
    align: "center" | "right" | "left";
    type: "display";
    width: string;
    disableSort: boolean;
    cell: import("@tanstack/table-core").ColumnDefTemplate<import("@tanstack/table-core").CellContext<any, unknown>>;
    inputLabel: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    columnId: string;
    dataSyncId: string;
}> & Partial<{
    onChange: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
