import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class ServicosSection extends LitElement {
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
        <app-paragrafo>Estilo, cuidado e excelência em cada corte </app-paragrafo>

        <section>

            <app-quadro> <img src="" alt="cortando o cabelo"> </app-quadro>
            <aside>
                <article>
                    <app-paragrafo>Corte</app-paragrafo>
                    <app-paragrafo>Social, degradê, surfista, militar, razor part, undercut</app-paragrafo> 
                </article>
                <app-botao> Ver mais </app-botao>
            </aside>

            <div>
                <app-bolinhas formato="fila-preenchida"></app-bolinhas>
                <app-bolinhas formato="fila-vazada"></app-bolinhas>
            </div>

        </section>
        
        
        `;
    }
}
customElements.define('servicos-section', ServicosSection);
