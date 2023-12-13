import * as React from 'react';
export declare const PdsDatePickerInput: React.FunctionComponent<Partial<{
    label: string | undefined;
    disabled: boolean;
    value: string;
    hideLabel: boolean;
    fieldId: string | undefined;
    required: boolean;
    readonly: boolean;
    helpText: string | undefined;
    errorMessage: string;
    dateFormat: "MM/DD/YYYY" | "DD/MM/YYYY" | "DD/MM/AAAA" | "MM/DD/AAAA";
    datePickerState: boolean;
    customInvalidDates: Function | undefined;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    name: string;
}> & Partial<{
    onChange: (e: Event) => void;
    onBlur: (e: Event) => void;
    onFocus: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
