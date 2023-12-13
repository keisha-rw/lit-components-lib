import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
        open: boolean;
        variant: "inverted" | "default";
        showMoreText: string;
        showLessText: string;
    }> & {
        ref?: React.Ref<any> | undefined;
    } & {
        style?: React.CSSProperties | undefined;
    } & Partial<{
        onOpen: (e: Event) => void;
        onClose: (e: Event) => void;
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
    open: boolean;
    variant: "inverted" | "default";
    showMoreText: string;
    showLessText: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onOpen: (e: Event) => void;
    onClose: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export declare const Inverted: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    open: boolean;
    variant: "inverted" | "default";
    showMoreText: string;
    showLessText: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onOpen: (e: Event) => void;
    onClose: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
