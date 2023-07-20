import { LitElement, html, css } from 'lit';

export class Mapa extends LitElement {
    static styles = [
        css`
            * {
                margin: 0;

            }

            :host {
                /* Layout */
                display: flex;
                width: 270px;
                height: 200px;
                flex-direction: column;
                align-items: flex-start;

                /* Estilos */
                border-radius: 8px;
                color: #FFF;
                font-family: var(--fonte-titulo);
                text-align: center;
                line-height: normal;
                box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);
            }

            address{
                /* layout */
                display: flex;
                padding: 10px 12px;
                padding-top: 5px;
                flex-direction: column;
                align-items: flex-start;
                align-self: stretch;

                /* estilos */
                border-radius: 0px 0px 8px 8px;
                background: var(--cor-secundaria, #665e57); 
                font-style: normal;
            }

            .titulo{
                font-size: 1rem;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.64px;
            }

            .subtitulo {
                text-align: center;
                font-size: .5rem;
                font-weight: 400;
                line-height: 100%; 
                letter-spacing: 0.32px;
            }

            figure {
               flex: 1 0 0;
               align-self: stretch;

               display: flex;
               align-items: center;
               overflow: hidden;

               border-radius: 8px 8px 0px 0px;
               border: 4px solid var(--cor-secundaria, #665e57);
            }

            .imagem{
                width: 100%;
            }
        `
    ];

    render() {
        return html`
        
        <figure>
            <img class="imagem" src="../../public/mapa-1.png" alt="imagem da sede barbearia vanguarda">
        </figure>

        <address>
            <h2 class="titulo">
                Av. Marechal Tito 2960
            </h2>

            <h3 class="subtitulo" >
            São Miguel Paulista, São Paulo
            </h3>

        </address>

        `;
    }
}
customElements.define('app-mapa', Mapa);
