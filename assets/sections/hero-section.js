import { LitElement, html, css } from 'lit';

export class HeroSection extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        
        <section> </section>

        <app-paragrafo> </app-paragrafo>





        `;
    }
}
customElements.define('hero-section', HeroSection);
