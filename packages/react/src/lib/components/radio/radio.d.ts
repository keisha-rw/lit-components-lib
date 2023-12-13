import * as React from 'react';
export declare const PdsRadio: React.FunctionComponent<Partial<{
    label: string | undefined;
    disabled: boolean;
    hideLabel: boolean;
    fieldId: string | undefined;
    checked: boolean;
    name: string | undefined;
    groupDisabled: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    value: string;
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
