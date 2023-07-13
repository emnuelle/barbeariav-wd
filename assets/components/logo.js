import { LitElement, html, css } from 'lit';

export class Logo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<img src="../../images/logo.svg" alt="Logo da barbearia Vanguarda" />`;
    }
}
customElements.define('app-logo', Logo);
