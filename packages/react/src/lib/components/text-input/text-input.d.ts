import * as React from 'react';
export declare const PdsTextInput: React.FunctionComponent<Partial<{
    size: "default" | "sm";
    label: string | undefined;
    disabled: boolean;
    type: "number" | "search" | "text" | "email" | "password" | "url";
    value: string;
    hideLabel: boolean;
    fieldId: string | undefined;
    required: boolean;
    readonly: boolean;
    helpText: string | undefined;
    errorMessage: string;
    step: string | number | undefined;
    minLength: string | number | undefined;
    maxLength: string | number | undefined;
    pattern: string | undefined;
    autocomplete: "name" | "email" | "url" | "off" | "on" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "impp" | "photo";
    min: string | number | undefined;
    max: string | number | undefined;
    inputmode: "search" | "text" | "none" | "email" | "url" | "tel" | "decimal" | "numeric" | undefined;
    maskType: "ssn" | "tax-id" | undefined;
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
