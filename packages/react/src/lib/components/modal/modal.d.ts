import * as React from 'react';
export declare const PdsModal: React.FunctionComponent<Partial<{
    size: "default" | "lg";
    openOnLoad: boolean;
    hideCloseButton: boolean;
    ariaLabelledBy: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Required<{
    modalTitle: string;
}> & Partial<{
    pdsModalOpen: (e: Event) => void;
    pdsModalClose: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
