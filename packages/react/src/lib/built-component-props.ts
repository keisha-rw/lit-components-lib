import { Ref, CSSProperties } from 'react';
// this is a generated file from npm run create-react-props
// do not modify
import {
  PdsActionMenu,
  PdsActionMenuItem,
  PdsAlert,
  PdsAvatar,
  PdsBand,
  PdsBoxButton,
  PdsBreadcrumbs,
  PdsBreadcrumbsItem,
  PdsButton,
  PdsCard,
  PdsCheckbox,
  PdsCollapsible,
  PdsDataTable,
  PdsDataTableCell,
  PdsDataTableColumn,
  PdsDataTableColumns,
  PdsDataTableInputColumn,
  PdsDataTableRow,
  PdsDataTableRows,
  PdsDatePicker,
  PdsDatePickerInput,
  PdsDecorator,
  PdsErrorPage,
  PdsFeatureBlock,
  PdsFileUpload,
  PdsFooter,
  PdsFooterContactLink,
  PdsFooterNav,
  PdsFooterNavItem,
  PdsFootnote,
  PdsFootnoteItem,
  PdsFootnoteLink,
  PdsGrid,
  PdsGridItem,
  PdsHeading,
  PdsHr,
  PdsLayoutContainer,
  PdsLinelengthContainer,
  PdsLink,
  PdsList,
  PdsListItem,
  PdsLoadingPage,
  PdsLogo,
  PdsLogoutPage,
  PdsModal,
  PdsPagination,
  PdsPaginationItem,
  PdsPhoneNumberInput,
  PdsPrimaryNavigation,
  PdsPrimaryNavigationContainer,
  PdsPrimaryNavigationDropdownLink,
  PdsPrimaryNavigationMainMenu,
  PdsPrimaryNavigationMainMenuItem,
  PdsPrimaryNavigationUtilityMenu,
  PdsPrimaryNavigationUtilityMenuItem,
  PdsRadio,
  PdsRadioGroup,
  PdsSecondaryNavigation,
  PdsSecondaryNavigationLevelOne,
  PdsSecondaryNavigationLevelTwo,
  PdsSecondaryNavigationLink,
  PdsSegmentedControl,
  PdsSegmentedControlItem,
  PdsSelect,
  PdsSessionTimer,
  PdsSessionTimerCountdown,
  PdsShowMore,
  PdsSidebar,
  PdsSkeletonLoader,
  PdsStatusIndicator,
  PdsStepIndicator,
  PdsStepIndicatorItem,
  PdsSupportHeading,
  PdsSwitch,
  PdsTable,
  PdsTag,
  PdsTextArea,
  PdsTextInput,
  PdsTextPassage,
  PdsTooltip,
  PdsVideoPlayer,
} from '@keisha/design-system';

type PdsProps<
  Element extends HTMLElement,
  OptionalProps extends keyof Element | '' = '',
  RequiredProps extends keyof Element | '' = '',
> = ([OptionalProps] extends [keyof Element]
  ? Partial<{
      [OptionalKey in OptionalProps]: Element[OptionalKey];
    }>
  : {}) & { ref?: Ref<any> } & { style?: CSSProperties } & ([
    RequiredProps,
  ] extends [keyof Element]
    ? Required<{
        [RequiredKey in RequiredProps]: Element[RequiredKey];
      }>
    : {});

export type PdsActionMenuItemProps = PdsProps<
  PdsActionMenuItem,
  'ariaLabel' | 'rel' | 'target' | 'linkHref',
  ''
>;

export type PdsActionMenuProps = PdsProps<
  PdsActionMenu,
  | 'buttonVariant'
  | 'size'
  | 'hideSeparator'
  | 'ariaLabel'
  | 'label'
  | 'buttonLabel'
  | 'open',
  ''
>;

export type PdsAlertProps = PdsProps<
  PdsAlert,
  | 'variant'
  | 'layoutContainerVariant'
  | 'layoutContainerRemovePadding'
  | 'hideDismissButton'
  | 'hiddenOnPageLoad',
  ''
>;

export type PdsAvatarProps = PdsProps<
  PdsAvatar,
  'variant' | 'inverted' | 'align',
  ''
>;

export type PdsBandProps = PdsProps<
  PdsBand,
  'variant' | 'rounded' | 'spacing',
  ''
>;

export type PdsBoxButtonProps = PdsProps<
  PdsBoxButton,
  'variant' | 'href' | 'labelVariant' | 'centerContentVertically',
  'label'
>;

export type PdsBreadcrumbsItemProps = PdsProps<
  PdsBreadcrumbsItem,
  'active' | 'href',
  ''
>;

export type PdsBreadcrumbsProps = PdsProps<PdsBreadcrumbs, 'ariaLabel', ''>;

export type PdsButtonProps = PdsProps<
  PdsButton,
  | 'variant'
  | 'size'
  | 'disabled'
  | 'fullWidth'
  | 'type'
  | 'link'
  | 'removeLinkPadding'
  | 'ariaLabel'
  | 'ariaControls'
  | 'ariaDescribedby'
  | 'isActive',
  ''
>;

export type PdsCardProps = PdsProps<
  PdsCard,
  | 'variant'
  | 'borderRadiusSize'
  | 'centerContentVertically'
  | 'direction'
  | 'href'
  | 'target'
  | 'ariaLabel'
  | 'removePadding'
  | 'hasNoSlottedLinkContent',
  ''
>;

export type PdsCheckboxProps = PdsProps<
  PdsCheckbox,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'checked',
  'name'
>;

export type PdsCollapsibleProps = PdsProps<
  PdsCollapsible,
  'variant' | 'open',
  ''
>;

export type PdsDataTableCellProps = PdsProps<
  PdsDataTableCell,
  'cellId' | 'align',
  ''
>;

export type PdsDataTableColumnProps = PdsProps<
  PdsDataTableColumn,
  | 'type'
  | 'accessorKey'
  | 'align'
  | 'width'
  | 'disableSort'
  | 'hidden'
  | 'header'
  | 'cell',
  'columnId'
>;

export type PdsDataTableColumnsProps = PdsProps<PdsDataTableColumns, '', ''>;

export type PdsDataTableInputColumnProps = PdsProps<
  PdsDataTableInputColumn,
  'inputLabel' | 'type' | 'align' | 'width' | 'disableSort' | 'cell',
  'columnId' | 'dataSyncId'
>;

export type PdsDataTableProps = PdsProps<
  PdsDataTable,
  | 'hideCaption'
  | 'striped'
  | 'removeBorder'
  | 'hoverableRows'
  | 'stickyHeader'
  | 'stickyColumn'
  | 'fixedHeight'
  | 'hideFilter'
  | 'globalFilter'
  | 'paginationVariant'
  | 'pageSize'
  | 'paginationSelectArray'
  | 'expandAllOnLoad'
  | 'loadingColumnLength'
  | 'disableAllSorting'
  | 'pageIndex'
  | 'options'
  | 'paginatorMarkup',
  ''
>;

export type PdsDataTableRowProps = PdsProps<PdsDataTableRow, 'subRows', ''>;

export type PdsDataTableRowsProps = PdsProps<PdsDataTableRows, '', ''>;

export type PdsDatePickerInputProps = PdsProps<
  PdsDatePickerInput,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'dateFormat'
  | 'datePickerState'
  | 'customInvalidDates',
  'name'
>;

export type PdsDatePickerProps = PdsProps<
  PdsDatePicker,
  | 'initialDate'
  | 'initialDisplayedMonth'
  | 'disableDate'
  | 'elementClassName'
  | 'firstDayOfWeek'
  | 'isRange'
  | 'labels'
  | 'locale'
  | 'showClearButton'
  | 'hideMonthStepper'
  | 'showTodayButton'
  | 'hideYearStepper'
  | 'todayButtonContent'
  | 'value'
  | 'clearButtonContent'
  | 'disabled'
  | 'disableFunction',
  ''
>;

export type PdsDecoratorProps = PdsProps<PdsDecorator, 'variant' | 'size', ''>;

export type PdsErrorPageProps = PdsProps<
  PdsErrorPage,
  'errorCode' | 'linkText' | 'linkHref' | 'layoutContainerVariant',
  ''
>;

export type PdsFeatureBlockProps = PdsProps<
  PdsFeatureBlock,
  'behavior' | 'fullWidth' | 'reverseMobileDisplay',
  ''
>;

export type PdsFileUploadProps = PdsProps<
  PdsFileUpload,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'accept'
  | 'multiple'
  | 'size'
  | 'modalState',
  'name'
>;

export type PdsFooterContactLinkProps = PdsProps<
  PdsFooterContactLink,
  'variant' | 'href' | 'ariaLabel',
  'linkCategory'
>;

export type PdsFooterNavItemProps = PdsProps<
  PdsFooterNavItem,
  'variant' | 'label',
  ''
>;

export type PdsFooterNavProps = PdsProps<
  PdsFooterNav,
  'variant' | 'behavior',
  ''
>;

export type PdsFooterProps = PdsProps<
  PdsFooter,
  | 'variant'
  | 'hideContactPhone'
  | 'hideHelpLink'
  | 'hideContactLink'
  | 'loginSupportLink'
  | 'termsOfUseLink'
  | 'disclosuresLink'
  | 'privacyLink'
  | 'securityLink'
  | 'reportFraudLink'
  | 'behavior'
  | 'logoHref'
  | 'logoAriaLabel'
  | 'hideLogo'
  | 'hideSocialIcons'
  | 'hideLegalLinks'
  | 'legalNavAriaLabel'
  | 'layoutContainerVariant'
  | 'layoutContainerRemovePadding',
  ''
>;

export type PdsFootnoteItemProps = PdsProps<
  PdsFootnoteItem,
  'variant' | 'footnoteId' | 'href' | 'ariaLabel',
  ''
>;

export type PdsFootnoteLinkProps = PdsProps<
  PdsFootnoteLink,
  | 'variant'
  | 'size'
  | 'href'
  | 'download'
  | 'rel'
  | 'hreflang'
  | 'target'
  | 'ariaLabel'
  | 'ariaCurrent'
  | 'role'
  | 'type'
  | 'button'
  | 'hover'
  | 'footnoteNumber',
  'footnoteId'
>;

export type PdsFootnoteProps = PdsProps<PdsFootnote, '', ''>;

export type PdsGridItemProps = PdsProps<PdsGridItem, '', ''>;

export type PdsGridProps = PdsProps<PdsGrid, 'variant' | 'gap' | 'break', ''>;

export type PdsHeadingProps = PdsProps<
  PdsHeading,
  'variant' | 'inverted',
  'headingTag'
>;

export type PdsHrProps = PdsProps<PdsHr, '', ''>;

export type PdsLayoutContainerProps = PdsProps<
  PdsLayoutContainer,
  'variant' | 'removePadding',
  ''
>;

export type PdsLinelengthContainerProps = PdsProps<
  PdsLinelengthContainer,
  'size',
  ''
>;

export type PdsLinkProps = PdsProps<
  PdsLink,
  | 'variant'
  | 'size'
  | 'href'
  | 'download'
  | 'rel'
  | 'hreflang'
  | 'target'
  | 'ariaLabel'
  | 'ariaCurrent'
  | 'role'
  | 'type'
  | 'button'
  | 'hover',
  ''
>;

export type PdsListItemProps = PdsProps<PdsListItem, 'size' | 'variant', ''>;

export type PdsListProps = PdsProps<
  PdsList,
  'size' | 'variant' | 'spacing' | 'align' | 'orientation',
  ''
>;

export type PdsLoadingPageProps = PdsProps<PdsLoadingPage, '', ''>;

export type PdsLogoProps = PdsProps<
  PdsLogo,
  'fullLogoVariants' | 'pLogoVariants' | 'pLogoFills',
  'variant'
>;

export type PdsLogoutPageProps = PdsProps<
  PdsLogoutPage,
  'variant' | 'loginLink' | 'layoutContainerVariant',
  ''
>;

export type PdsModalProps = PdsProps<
  PdsModal,
  'openOnLoad' | 'size' | 'hideCloseButton' | 'ariaLabelledBy',
  'modalTitle'
>;

export type PdsPaginationItemProps = PdsProps<
  PdsPaginationItem,
  'variant' | 'active' | 'href' | 'hideFlyers',
  'pageNumber'
>;

export type PdsPaginationProps = PdsProps<
  PdsPagination,
  | 'variant'
  | 'backwardDisabled'
  | 'forwardDisabled'
  | 'hideFlyers'
  | 'ariaLabel'
  | 'flyFirstHref'
  | 'stepForwardHref'
  | 'flyLastHref'
  | 'stepBackwardHref',
  ''
>;

export type PdsPhoneNumberInputProps = PdsProps<
  PdsPhoneNumberInput,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'size'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'autocomplete',
  'name'
>;

export type PdsPrimaryNavigationContainerProps = PdsProps<
  PdsPrimaryNavigationContainer,
  'variant',
  ''
>;

export type PdsPrimaryNavigationDropdownLinkProps = PdsProps<
  PdsPrimaryNavigationDropdownLink,
  'href' | 'arrow' | 'variant',
  ''
>;

export type PdsPrimaryNavigationMainMenuItemProps = PdsProps<
  PdsPrimaryNavigationMainMenuItem,
  'dropdown' | 'megamenu' | 'isActive' | 'href' | 'text' | 'arrow' | 'divider',
  ''
>;

export type PdsPrimaryNavigationMainMenuProps = PdsProps<
  PdsPrimaryNavigationMainMenu,
  'variant' | 'ariaLabel',
  ''
>;

export type PdsPrimaryNavigationProps = PdsProps<
  PdsPrimaryNavigation,
  | 'variant'
  | 'includeAction'
  | 'layoutContainerVariant'
  | 'layoutContainerRemovePadding'
  | 'hideOtherAlerts'
  | 'messagesCount'
  | 'otherAlertsCount'
  | 'messagesHref'
  | 'otherAlertsHref'
  | 'skipToContentHref'
  | 'isActive'
  | 'isPanelActive'
  | 'logoHref'
  | 'logoAriaLabel'
  | 'loginLink'
  | 'loginLinkVariant'
  | 'loginLinkHref',
  ''
>;

export type PdsPrimaryNavigationUtilityMenuItemProps = PdsProps<
  PdsPrimaryNavigationUtilityMenuItem,
  '',
  'href'
>;

export type PdsPrimaryNavigationUtilityMenuProps = PdsProps<
  PdsPrimaryNavigationUtilityMenu,
  'variant',
  ''
>;

export type PdsRadioGroupProps = PdsProps<
  PdsRadioGroup,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'spacing',
  'name'
>;

export type PdsRadioProps = PdsProps<
  PdsRadio,
  | 'name'
  | 'fieldId'
  | 'checked'
  | 'disabled'
  | 'groupDisabled'
  | 'label'
  | 'hideLabel',
  'value'
>;

export type PdsSecondaryNavigationLevelOneProps = PdsProps<
  PdsSecondaryNavigationLevelOne,
  'title' | 'href' | 'columns' | 'activeSection' | 'activeSectionCallback',
  ''
>;

export type PdsSecondaryNavigationLevelTwoProps = PdsProps<
  PdsSecondaryNavigationLevelTwo,
  'title' | 'href' | 'activePage' | 'activePageCallback',
  ''
>;

export type PdsSecondaryNavigationLinkProps = PdsProps<
  PdsSecondaryNavigationLink,
  | 'variant'
  | 'size'
  | 'href'
  | 'download'
  | 'rel'
  | 'hreflang'
  | 'target'
  | 'ariaLabel'
  | 'ariaCurrent'
  | 'role'
  | 'type'
  | 'button'
  | 'hover'
  | 'activePage',
  ''
>;

export type PdsSecondaryNavigationProps = PdsProps<
  PdsSecondaryNavigation,
  'responsiveViewportSize' | 'navAriaLabel' | 'description',
  'title'
>;

export type PdsSegmentedControlItemProps = PdsProps<
  PdsSegmentedControlItem,
  'ariaLabel' | 'isSegmentActive' | 'disabled' | 'isNarrowContainer' | 'size',
  ''
>;

export type PdsSegmentedControlProps = PdsProps<
  PdsSegmentedControl,
  'size' | 'disabled' | 'ariaLabel' | 'controlWidth' | 'isNarrowContainer',
  ''
>;

export type PdsSelectProps = PdsProps<
  PdsSelect,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'size'
  | 'placeholder',
  'name'
>;

export type PdsSessionTimerCountdownProps = PdsProps<
  PdsSessionTimerCountdown,
  | 'timeInMs'
  | 'parentElement'
  | 'notificationThresholds'
  | 'displayedCountdownTime'
  | 'a11yCountdownTime'
  | 'intervalId',
  ''
>;

export type PdsSessionTimerProps = PdsProps<
  PdsSessionTimer,
  | 'setMillisecondsToTimeout'
  | 'maxSessionFlag'
  | 'customLogoutPage'
  | 'extendSessionApiEndpointFailure'
  | 'customNotificationThresholds'
  | 'alertDocumentTitle'
  | 'logSessionTimeRemaining'
  | 'timeout'
  | 'type',
  ''
>;

export type PdsShowMoreProps = PdsProps<
  PdsShowMore,
  'variant' | 'open' | 'showMoreText' | 'showLessText',
  ''
>;

export type PdsSidebarProps = PdsProps<PdsSidebar, 'break' | 'gap', ''>;

export type PdsSkeletonLoaderProps = PdsProps<
  PdsSkeletonLoader,
  'variant' | 'inverted' | 'loadingText',
  ''
>;

export type PdsStatusIndicatorProps = PdsProps<
  PdsStatusIndicator,
  'variant' | 'icon' | 'border',
  ''
>;

export type PdsStepIndicatorItemProps = PdsProps<
  PdsStepIndicatorItem,
  'status' | 'href' | 'active' | 'inverted',
  ''
>;

export type PdsStepIndicatorProps = PdsProps<
  PdsStepIndicator,
  'variant' | 'interactive' | 'inverted',
  ''
>;

export type PdsSupportHeadingProps = PdsProps<
  PdsSupportHeading,
  'headingVariant' | 'inverted',
  'headingTagName'
>;

export type PdsSwitchProps = PdsProps<
  PdsSwitch,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'labelRight'
  | 'checked',
  'name'
>;

export type PdsTableProps = PdsProps<
  PdsTable,
  | 'striped'
  | 'expandAllOnLoad'
  | 'removeBorder'
  | 'hoverableRows'
  | 'stickyHeader'
  | 'stickyColumn'
  | 'fixedHeight',
  ''
>;

export type PdsTagProps = PdsProps<PdsTag, 'href', ''>;

export type PdsTextAreaProps = PdsProps<
  PdsTextArea,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'size'
  | 'minLength'
  | 'maxLength'
  | 'resize',
  'name'
>;

export type PdsTextInputProps = PdsProps<
  PdsTextInput,
  | 'value'
  | 'label'
  | 'hideLabel'
  | 'fieldId'
  | 'required'
  | 'disabled'
  | 'readonly'
  | 'helpText'
  | 'errorMessage'
  | 'size'
  | 'type'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'step'
  | 'inputmode'
  | 'autocomplete'
  | 'maskType',
  'name'
>;

export type PdsTextPassageProps = PdsProps<
  PdsTextPassage,
  'lineLength' | 'size',
  ''
>;

export type PdsTooltipProps = PdsProps<PdsTooltip, 'variant' | 'placement', ''>;

export type PdsVideoPlayerProps = PdsProps<
  PdsVideoPlayer,
  | 'variant'
  | 'aspectRatio'
  | 'videoTitle'
  | 'videoDescription'
  | 'hideVideoDuration',
  'videoUrl' | 'videoPlayerTextTracks'
>;
