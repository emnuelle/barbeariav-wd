import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class ContatoSection extends LitElement {
    static styles = [ 
        section,
        css`
           
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <app-titulo>Entre em contato conosco</app-titulo>

        <app-quadro></app-quadro>

        <div>
        <app-botao>Nos envie um email</app-botao>
        <app-botao>Fale conosco</app-botao>
        </div>
        

        `;
    }
}
customElements.define('contato-section', ContatoSection);
