import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class ABarbeariaSection extends LitElement {
    static styles = [ 
        section, 
        css`
            :host {
                justify-content: space-between;
                align-items: flex-start;
            }

            article {
                display: flex;
                padding: 8px 12px 0px 0px;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                
                background: var(--tom-1, #ead8c7);

                border: 3px solid;
                border-image-source: linear-gradient(
                    25deg, 
                    rgba(102,78,56,0) 50%, 
                    rgba(102,78,56,1) 100%
                    );
                border-image-slice: 1;

                border-left: 0;
                border-bottom: 0;
            }

            app-paragrafo {
                width: 270px;

                /* color: var(--cor-secundaria, #665E57); */
                text-align: justify;
                /* font-family: var(--fonte-corpo);
                font-size: 1rem;
                font-style: normal; */
                font-weight: 400;
                line-height: 140%; /* 22.4px */
                letter-spacing: -1.424px;
            }

            app-quadro {
                width: 335px;
                height: 335px;
                border-radius: 100%;

                position: absolute;
                right: -82px;
                top: 106px;
                z-index: -10;
            }

            app-bolinhas {
                display: flex;
                width: 300px;
                height: 300px;
                align-items: flex-start;
                gap: 10px;
                z-index: -20;

                position: absolute;
                left: -150px;
                top: 72px;

                --cor-bolinha: var(--tom-3);
            }

            img {
                width: 100%;
            }

            app-botao {
                display: var(--display-botao);
            }

            /* tablet */
            @media (min-width:768px){
                app-quadro{
                    width: 600px;
                    height: 600px;

                    right: -182px;
                    top: 200px;
                }

                app-bolinhas {
                    width: 300px;
                    height: 300px;

                    left: -150px;
                    top: 272px;
                    
                }

                app-paragrafo {
                    width: 100%;
                }

                article {
                    width: 100%;
                }

                /* desktop */
                @media (min-width:1024px){
                app-quadro{
                    top: 100px;
                }

                app-bolinhas {
                    width: 400px;
                    height: 400px;

                    left: -20px;
                    top: 112px;
                    
                }

                article {
                    width: 70%;
                }

            };



        `
    ];

    render() {
        return html`
            <app-titulo>A Barbearia</app-titulo>
            <app-bolinhas formato="inteira"></app-bolinhas>
            <app-quadro> <img loading="lazy" src="../../public/a-barbearia.jpg" alt="a barbearia"> </app-quadro>
            <article>            
                <app-paragrafo>Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se encontram para proporcionar cortes de cabelo e barbas impecáveis. Com uma equipe de barbeiros especializados, combinamos técnicas tradicionais com as últimas tendências, garantindo um atendimento personalizado em um ambiente acolhedor.</app-paragrafo>
                <app-botao><a>Leia Mais</a></app-botao>
            </article>
            
        `;
    }
}
customElements.define('a-barbearia-section', ABarbeariaSection);
