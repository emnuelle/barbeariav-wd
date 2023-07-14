import { LitElement, html, css } from 'lit';

export class Paragrafo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 270px;
                height: 47px;
                flex-shrink: 0;
                color: var(--cor-secundaria, #665E57);
                font-family: Source Serif 4;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 20px */
            }
        `
    ];

    render() {
        return html`Obtenha um estilo impecável, do cabelo à barba.`;
    }
}
customElements.define('app-paragrafo', Paragrafo);
