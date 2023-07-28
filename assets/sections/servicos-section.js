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
                text-align: center;
            }

            img{
                height: 120%;
            } 

            img:first-child{
                width: 115%;
            }

            app-quadro {
                width: 298px;
                height: 364px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }

            swiper-container {
                width: 100%;
                height: 100%;
            }

            swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img {
                height: 100%;
            }

            @media (min-width: 768px) {
                :host {
                    padding: 3rem 0;
                }

                section {
                    align-self: center;
                }

                app-quadro {
                    width: 265px;
                    height: 520px;
                    border-radius: 8px;
                }

                .titulo {
                    width:330px;
                    font-size: 1.25rem;
                }

                article app-paragrafo:first-child {
                    font-size: 1.25rem;
                }
                
                .descricao {
                    font-size: 1rem;
                }

                aside {
                    padding: 176px 0px 16px 0px;   
                }
                
            }

            @media (min-width:1024px) {
                div {
                    display: none;
                }
            }

        `
    ];

    render() {
        return html`
        <app-paragrafo class="titulo" >Estilo, cuidado e excelência em cada <span> corte</span></app-paragrafo>

        <section>

            <app-quadro> 

                <swiper-container 

                effect="fade"
                simulate-touch="false"
                autoplay="true"
                disabled-on-interaction="false"
                loop="true"
                speed="750"
                >

                        <swiper-slide>
                            <img 
                                class="primeira-imagem"
                                loading="lazy" 
                                src="servicos-1.jpg" 
                                alt="cortando o cabelo"
                            /> 
                        </swiper-slide>

                        <swiper-slide>
                                <img loading="lazy" 
                                src="servicos-2.jpg" 
                                alt="cortando o cabelo"
                                /> 
                        </swiper-slide>

                </swiper-container>

            </app-quadro>

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
    