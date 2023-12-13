import * as React from 'react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<Partial<{
        description: string;
        responsiveViewportSize: "xs" | "sm" | "md" | "lg" | "xl";
        navAriaLabel: string;
    }> & {
        ref?: React.Ref<any> | undefined;
    } & {
        style?: React.CSSProperties | undefined;
    } & Required<{
        title: string;
    }> & Partial<{
        onDropdownClose: (e: Event) => void;
        onDrodownOpen: (e: Event) => void;
        onDropdownLinkClick: (e: Event) => void;
        onLinkClick: (e: Event) => void;
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
    decorators: ((Story: JSX.IntrinsicAttributes) => JSX.Element)[];
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    description: string;
    responsiveViewportSize: "xs" | "sm" | "md" | "lg" | "xl";
    navAriaLabel: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    title: string;
}> & Partial<{
    onDropdownClose: (e: Event) => void;
    onDrodownOpen: (e: Event) => void;
    onDropdownLinkClick: (e: Event) => void;
    onLinkClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export declare const Logo: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    description: string;
    responsiveViewportSize: "xs" | "sm" | "md" | "lg" | "xl";
    navAriaLabel: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    title: string;
}> & Partial<{
    onDropdownClose: (e: Event) => void;
    onDrodownOpen: (e: Event) => void;
    onDropdownLinkClick: (e: Event) => void;
    onLinkClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export declare const SecondaryLinkActivePage: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, Partial<{
    description: string;
    responsiveViewportSize: "xs" | "sm" | "md" | "lg" | "xl";
    navAriaLabel: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    title: string;
}> & Partial<{
    onDropdownClose: (e: Event) => void;
    onDrodownOpen: (e: Event) => void;
    onDropdownLinkClick: (e: Event) => void;
    onLinkClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
