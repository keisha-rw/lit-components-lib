import * as React from 'react';
import './placeholder-element.scss';
export interface PlaceholderElementProps {
    /**
     * Child node(s) that can be nested inside component
     */
    children?: React.ReactNode;
    /**
     * Reduces the padding within the placeholder element block
     */
    tight?: boolean;
    /**
     * CSS class names that can be appended to the component.
     */
    styleModifier?: string;
    /**
     * CSS inline styles that can be appended to the component.
     */
    inlineStyle?: any;
}
/**
 * Primary UI component for user interaction
 */
export declare const PlaceholderElement: ({ styleModifier, tight, children, inlineStyle, }: PlaceholderElementProps) => JSX.Element;
