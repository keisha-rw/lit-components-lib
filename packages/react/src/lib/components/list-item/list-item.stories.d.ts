import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
        size: "sm" | "md";
        variant: "description" | "default" | "description-reverse";
    }> & {
        ref?: React.Ref<any> | undefined;
    } & {
        style?: React.CSSProperties | undefined;
    } & Partial<{}> & {
        id?: string | undefined;
        slot?: string | undefined;
        className?: string | undefined;
        children?: React.ReactNode;
    }>;
    tags: string[];
    argTypes: {
        variant: {
            control: string;
            options: string[];
        };
    };
    parameters: {
        happo: boolean;
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    size: "sm" | "md";
    variant: "description" | "default" | "description-reverse";
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export declare const Descriptiondefault: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    size: "sm" | "md";
    variant: "description" | "default" | "description-reverse";
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export declare const Descriptionreverse: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    size: "sm" | "md";
    variant: "description" | "default" | "description-reverse";
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
