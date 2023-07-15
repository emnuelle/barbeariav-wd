import { LitElement, html, css } from 'lit';

export class Logo extends LitElement {
    static styles = [
        css`
            :host {
                width: 48px;
                height: 48px;
                flex-shrink: 0;

                background-color: black;
                -webkit-mask: url('../../public/logo.svg') no-repeat center;
                mask: url('../../public/') no-repeat center;

                -webkit-mask-size: 100%;
                mask-size:100%;

                display: block;
            }
        `
    ];
}
customElements.define('app-logo', Logo);
