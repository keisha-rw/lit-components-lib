import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
        href: string;
    }> & {
        ref?: React.Ref<any> | undefined;
    } & {
        style?: React.CSSProperties | undefined;
    } & Partial<{
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
    href: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
