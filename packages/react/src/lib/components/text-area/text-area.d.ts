import * as React from 'react';
export declare const PdsTextArea: React.FunctionComponent<Partial<{
    size: "default" | "sm";
    label: string | undefined;
    disabled: boolean;
    value: string;
    hideLabel: boolean;
    fieldId: string | undefined;
    required: boolean;
    readonly: boolean;
    helpText: string | undefined;
    errorMessage: string;
    minLength: number | undefined;
    maxLength: number | undefined;
    resize: "none" | "horizontal" | "vertical" | "smart" | "manual";
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
