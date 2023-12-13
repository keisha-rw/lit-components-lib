import * as React from 'react';
export declare const PdsFileUpload: React.FunctionComponent<Partial<{
    size: number;
    label: string | undefined;
    disabled: boolean;
    value: string;
    hideLabel: boolean;
    fieldId: string | undefined;
    required: boolean;
    readonly: boolean;
    helpText: string | undefined;
    errorMessage: string;
    accept: String | undefined;
    multiple: Boolean;
    modalState: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    name: string;
}> & Partial<{
    pdsFileUploadChange: (e: Event) => void;
    pdsFileUploadRemove: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
