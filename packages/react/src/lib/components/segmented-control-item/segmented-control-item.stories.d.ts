import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
        ariaLabel: string;
        size: "default" | "sm";
        disabled: boolean;
        isSegmentActive: boolean | undefined;
        isNarrowContainer: boolean | undefined;
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
    parameters: {
        happo: boolean;
        action: {
            handles: string[];
        };
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    ariaLabel: string;
    size: "default" | "sm";
    disabled: boolean;
    isSegmentActive: boolean | undefined;
    isNarrowContainer: boolean | undefined;
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
export declare const Disabled: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    ariaLabel: string;
    size: "default" | "sm";
    disabled: boolean;
    isSegmentActive: boolean | undefined;
    isNarrowContainer: boolean | undefined;
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
