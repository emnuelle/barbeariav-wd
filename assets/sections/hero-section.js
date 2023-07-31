import { LitElement, html, css } from 'lit';
import { animate } from '../styles/animate-style';
import { section } from '../styles/section-style';

export class HeroSection extends LitElement {
    static styles = [
        section, animate,
        css`
            :host {
                --animate-delay: 300ms;
            }

            section {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }

            span {
                display: inline-block;
            }

            .vanguarda {
                color: var(--tom-3);
                font-weight: 900;
            }

            app-titulo {
                display: flex;
                align-items: center;
                align-self: stretch;

                position: relative;
            }

            app-logo {
                width: 160px;
                height: 160px;
                opacity: 0.75;

                position: absolute;
                right: -72px;
                top: -39px;
                z-index: 10;
            }

            img {
                width: auto;
                height: 100%;
            }

            app-paragrafo {
                font-size: 1.25rem;
            }

            swiper-container {
                width: 100%;
                height: 100%;
            }

            app-quadro {
                background-color: transparent;
            }

            @keyframes slideInUp {
            0% {
                transform: translate3d(0px, 200%, 0px);
                visibility: visible;
            }
            100% {
                transform: translate(0px);
            }
            }

            @media (min-width: 760px) {
                app-logo {
                    width: 220px;
                    height: 220px;
                }
            }

            @media (min-width: 1024px) {
                app-paragrafo {
                    display: none;
                }

            }

        `,
    ];

    render() {
        return html`
        <section>

            <app-titulo class="animate__animated" data-toggle-class="animate__slideInUp"> 
                <h1>
                    <span> Barbearia </span>
                    <span class="vanguarda"> Vanguarda </span> 
                </h1> 
                <app-logo></app-logo>
            </app-titulo>

            <app-quadro>
            <swiper-container 
            loop="true" 
            autoplay="true" 
            speed="500"
            disable-on-interaction="false"
            effect="coverflow" 
            simulate-touch="false" 
            centered-slides="true"
            overflow-effect-rotate="50" 
            coverflow-effect-stretch="0" 
            coverflow-effect-depth="100"
            coverflow-effect-modifier="1" 
            coverflow-effect-slide-shadows="true"
            >
                <swiper-slide>
                    <img src="slider-1.jpg" alt="Imagem slider 1"/>
                </swiper-slide>
                <swiper-slide>
                    <img src="slider-2.jpg" alt="Imagem slider 1"/>
                </swiper-slide>
                <swiper-slide>
                    <img src="slider-3.jpg" alt="Imagem slider 1"/>
                </swiper-slide>
            </swiper-container>
            </app-quadro>

        </section>

        <app-paragrafo  class="animate__animated animated__delay-2s" data-toggle-class="animate__fadeInUp">
            Obtenha um estilo impecável, do cabelo à barba.
        </app-paragrafo>


        `;
    }
}
customElements.define('hero-section', HeroSection);
