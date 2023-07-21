import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class ServicosSection extends LitElement {
    static styles = [
        section,
        css`

            app-bolinhas {
                --cor-bolinha: var(--tom-3);

                width: 270px;
                height: 23px;
            }

            app-bolinhas:first-child{ /*pseudoclasse (seleciona a primeira bolinha)*/ 
                transform: rotate(180deg);
            }

            div{

                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            span {
                color: var(--tom-3, #664E38);
                font-weight: 600; /*semibold*/ 
            }

            .titulo {
                width: 270px;
            }

            section {
                display: flex;
                align-items: center;
                gap: 36px;
                align-self: stretch;
            }

            aside {
                display: flex;
                padding: 96px 0px 8px 0px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                align-self: stretch;
            }

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 16px;
            }

            article app-paragrafo:first-child {
                font-weight: 700; /* negrito */
                color: var(--tom-3, #664E38);
            }

            .descricao {
                width: 108px;
                font-size: .875rem;
            }

            img{
                height: 120%;
            } 

            app-quadro {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }

        `
    ];

    render() {
        return html`
        <app-paragrafo class="titulo" >Estilo, cuidado e excelência em cada <span> corte</span></app-paragrafo>

        <section>

            <app-quadro> <img src="../../public/servicos-1.jpg" alt="cortando o cabelo"> </app-quadro>

            <aside>
                <article>
                    <app-paragrafo  >Corte</app-paragrafo>
                    <app-paragrafo class="descricao" >Social, degradê, surfista, militar, razor part, undercut</app-paragrafo> 
                </article>
                <app-botao><a href="serviços"> Ver mais </a></app-botao>
            </aside>

        </section>

        <div>

            <app-bolinhas formato="fila-vazada"></app-bolinhas>
            <app-bolinhas formato="fila-preenchida"></app-bolinhas>

        </div>
        
        `;
    }
}
customElements.define('servicos-section', ServicosSection);
    