import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
        variant: "default" | "strong";
        href: string;
        labelVariant: "default" | "sm" | "lg" | "xl";
        centerContentVertically: boolean;
    }> & {
        ref?: React.Ref<any> | undefined;
    } & {
        style?: React.CSSProperties | undefined;
    } & Required<{
        label: string;
    }> & Partial<{
        onClick: (e: Event) => void;
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
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    variant: "default" | "strong";
    href: string;
    labelVariant: "default" | "sm" | "lg" | "xl";
    centerContentVertically: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    label: string;
}> & Partial<{
    onClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export declare const Strong: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    variant: "default" | "strong";
    href: string;
    labelVariant: "default" | "sm" | "lg" | "xl";
    centerContentVertically: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    label: string;
}> & Partial<{
    onClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export declare const CenterContentVertically: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    variant: "default" | "strong";
    href: string;
    labelVariant: "default" | "sm" | "lg" | "xl";
    centerContentVertically: boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    label: string;
}> & Partial<{
    onClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
