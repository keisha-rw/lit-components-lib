import * as React from 'react';
export declare const PdsDatePicker: React.FunctionComponent<Partial<{
    disabled: boolean;
    value: Date | Date[] | undefined;
    initialDate: string | undefined;
    initialDisplayedMonth: string;
    disableDate: string | undefined;
    elementClassName: string;
    firstDayOfWeek: number;
    isRange: boolean;
    labels: import("@keisha/design-system").WCDatepickerLabels | undefined;
    locale: string;
    showClearButton: boolean;
    hideMonthStepper: boolean;
    showTodayButton: boolean;
    hideYearStepper: boolean;
    todayButtonContent: string | undefined;
    clearButtonContent: string | undefined;
    disableFunction: (date: Date) => boolean;
}> & {
    ref?: React.Ref<any> | undefined;
} & {
    style?: React.CSSProperties | undefined;
} & Partial<{
    selectDate: (e: Event) => void;
    changeView: (e: Event) => void;
}> & {
    id?: string | undefined;
    slot?: string | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
}>;
