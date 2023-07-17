import { LitElement, html, css } from 'lit';

export class Botao extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            button {
                display: inline-flex;
                padding: 10px 24px;
                border: 0;
                justify-content: center;
                align-items: center;
                gap: 10px;

                border-radius: 8px;
                background: linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 0.2) 0%,
                    rgba(255, 255, 255, 0.2) 100%
                ),
                    var(--tom-2, #b38962);
                    box-shadow: 0px 2px 4px 0px #665e57;

                /* tipografia */
                
                color: var(--tom-3, #664e38);
                text-align: center;

                font-family: var(--fonte-titulo);
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: 10px;
            }
        `
    ];

    render() {
        return html`
        <button><slot>pressione</slot></button>
        `;
    }
}
customElements.define('app-botao', Botao);
