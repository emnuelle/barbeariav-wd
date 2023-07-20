import { LitElement, html, css } from 'lit';

export class Bolinhas extends LitElement {

    static get properties() {
        return {
            formato: { type: String },
        };
    }

    static styles = [
        css`
            :host {
                width: 100px;
                height: 100px;
                
                -webkit-mask-size: 100%;
                mask-size:100%;
                display: block;
            }

            .inteira {
                -webkit-mask: url('../../public/bolinhas.svg') no-repeat center;
                mask: url('../../public/') no-repeat center;
            }

            .fila-preenchida {
                -webkit-mask: url('../../public/fila-bolinhas-preenchida.svg') no-repeat center;
                mask: url('../../public/') no-repeat center;
            }

            .fila-vazada {
                -webkit-mask: url('../../public/fila-bolinhas-vazada.svg') no-repeat center;
                mask: url('../../public/') no-repeat center;
            }

            .metade {
                -webkit-mask: url('../../public/bolinhas-metade.svg') no-repeat center;
                mask: url('../../public/') no-repeat center;
            }

            .bolinhas {
                width: 100%;
                height: 100%;

                -webkit-mask-size: 100%;
                mask-size:100%;
                background-color: var(--cor-bolinha, black);
            }
        `
    ];

        /**
     * Define o formato das bolinhas
     * @returns Classe do formato
     */
    definirFormato() {
     if (this.formato === "fila-preenchida") {
        return "fila-preenchida";
        }
     if (this.formato === "fila-vazada") {
        return "fila-vazada";
        }
     if (this.formato === "metade") {
        return "metade";
        }
     return this.formato;
    }

    render() {
        return html`

            <div class=${`bolinhas ${this.definirFormato()}`}> </div>

        `;
    }
}
customElements.define('app-bolinhas', Bolinhas);
