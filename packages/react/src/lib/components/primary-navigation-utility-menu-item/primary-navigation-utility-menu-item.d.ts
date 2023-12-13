import * as React from 'react';
export declare const PdsPrimaryNavigationUtilityMenuItem: React.FunctionComponent<{
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    href: string;
}> & Partial<{
    onHandleClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
