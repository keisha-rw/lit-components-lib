import * as React from 'react';
export declare const PdsSwitch: React.FunctionComponent<Partial<{
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
    labelRight: Boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    name: string;
}> & Partial<{
    onToggleOn: (e: Event) => void;
    onToggleOff: (e: Event) => void;
    onFocus: (e: Event) => void;
    onBlur: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
