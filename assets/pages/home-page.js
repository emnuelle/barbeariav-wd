import { LitElement, html, css } from 'lit';

export class homePage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<p>Barbearia Vanguarda</p>`;
    }
}
customElements.define('app-home-page', homePage);
