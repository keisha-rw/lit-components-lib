import * as React from 'react';
export declare const PdsDataTable: React.FunctionComponent<Partial<{
    hideCaption: boolean;
    striped: "default" | "odd" | "even";
    removeBorder: boolean;
    hoverableRows: boolean;
    stickyHeader: boolean;
    stickyColumn: boolean;
    fixedHeight: string;
    hideFilter: boolean;
    globalFilter: string;
    paginationVariant: "default" | "none" | "arrows" | "no-arrows";
    pageSize: number;
    paginationSelectArray: number[];
    expandAllOnLoad: boolean;
    loadingColumnLength: number;
    disableAllSorting: boolean;
    pageIndex: number;
    options: {
        state: {
            globalFilter: string;
        };
        data: {}[];
        columns: import("@tanstack/table-core").ColumnDef<any>[];
        getCoreRowModel: (table: import("@tanstack/table-core").Table<unknown>) => () => import("@tanstack/table-core").RowModel<unknown>;
        getFilteredRowModel: (table: import("@tanstack/table-core").Table<unknown>) => () => import("@tanstack/table-core").RowModel<unknown>;
        getPaginationRowModel: (table: import("@tanstack/table-core").Table<unknown>) => () => import("@tanstack/table-core").RowModel<unknown>;
        getSortedRowModel: (table: import("@tanstack/table-core").Table<unknown>) => () => import("@tanstack/table-core").RowModel<unknown>;
        getSubRows: (row: {
            subRows: any;
        }) => any;
        renderFallbackValue: string;
        onStateChange: (updater: {}) => void;
    };
    paginatorMarkup: import("lit-html").TemplateResult[];
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    inputUpdated: (e: Event) => void;
    tableSorted: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
