import * as React from 'react';
export declare const PdsFooter: React.FunctionComponent<Partial<{
    variant: "default" | "subtle";
    layoutContainerVariant: "default" | "narrow";
    layoutContainerRemovePadding: "md" | "all" | undefined;
    behavior: "default" | "login" | "super";
    hideContactPhone: boolean;
    hideHelpLink: boolean;
    hideContactLink: boolean;
    loginSupportLink: "https://www.google.com/help";
    termsOfUseLink: string;
    disclosuresLink: String;
    privacyLink: string;
    securityLink: string;
    reportFraudLink: String;
    logoHref: string;
    logoAriaLabel: String;
    hideLogo: boolean;
    hideSocialIcons: boolean;
    hideLegalLinks: boolean;
    legalNavAriaLabel: String;
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
