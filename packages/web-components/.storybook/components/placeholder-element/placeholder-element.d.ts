import { LitElement } from 'lit';
export declare class PLACEHOLDERELEMENT extends LitElement {
    static get styles(): import("lit").CSSResult;
    styleModifier?: string;
    inlineStyle?: string;
    tight?: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'placeholder-element': PLACEHOLDERELEMENT;
    }
}
