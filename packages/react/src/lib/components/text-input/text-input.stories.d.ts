import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
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
    tags: string[];
    parameters: {
        actions: {
            handles: string[];
        };
    };
};
export default _default;
export declare const Basic: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const Required: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const DefaultValue: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const Error: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const HelpText: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const Disabled: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const Readonly: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const Small: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const HiddenLabel: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const NumberInput: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const PrefixedInput: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const SuffixedInput: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const SSNMask: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
export declare const TaxId: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
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
