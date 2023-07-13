import { LitElement, html, css } from 'lit';

export class Logo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 48px;
                height: 48px;
                flex-shrink: 0;
            }
        `
    ];

    render() {
        return html`<img src="../../images/logo.svg" alt="Logo da barbearia Vanguarda" />`;
    }
}
customElements.define('app-logo', Logo);
