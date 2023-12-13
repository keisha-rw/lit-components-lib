import * as React from 'react';
export declare const PdsCheckbox: React.FunctionComponent<Partial<{
    label: string | undefined;
    disabled: boolean;
    value: string;
    hideLabel: boolean;
    fieldId: string | undefined;
    required: boolean;
    readonly: boolean;
    helpText: string | undefined;
    errorMessage: string;
    checked: boolean;
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
