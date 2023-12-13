import * as React from 'react';
export declare const PdsPrimaryNavigation: React.FunctionComponent<Partial<{
    variant: "inverted" | "default";
    layoutContainerVariant: "default" | "narrow" | undefined;
    layoutContainerRemovePadding: "md" | "all" | undefined;
    isActive: boolean;
    logoHref: string;
    logoAriaLabel: String;
    loginLink: "none" | "login" | "logout" | "customLogout";
    includeAction: "search" | "notification" | undefined;
    hideOtherAlerts: boolean;
    messagesCount: number;
    otherAlertsCount: number;
    messagesHref: string;
    otherAlertsHref: string;
    skipToContentHref: string;
    isPanelActive: boolean;
    loginLinkVariant: string;
    loginLinkHref: string;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    onHandleClick: (e: Event) => void;
    onNotificationLinkClick: (e: Event) => void;
    onPanelOpen: (e: Event) => void;
    onPanelClose: (e: Event) => void;
    onButtonOpen: (e: Event) => void;
    onButtonClose: (e: Event) => void;
    onMainMenuDropdownOpen: (e: Event) => void;
    onMainMenuDropdownClose: (e: Event) => void;
    onMainMenuLinkClick: (e: Event) => void;
    onUtilityMenuItemClick: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
