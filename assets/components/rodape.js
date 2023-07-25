import { LitElement, html, css } from 'lit';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;

                font-family: var(--fonte-titulo);
                font-size: .75rem;
                color: white;

            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                height: 2rem;
                font-size: .5rem;
                background-color: color-mix(in srgb, black 40%, var(--tom-3));


            }

            footer {
                display: flex;
                justify-content: space-between; 
                align-items: center;
                padding: 2rem;
                background-color: color-mix(in srgb, black 20%, var(--tom-3));
            }

            nav {
                display: flex;
                flex-direction: column; 
                align-items: flex-end;
                gap: 1rem;
                
            }

            app-logo {
                width: 4rem;
                height: 4rem;
                background-color: white;
                opacity: .9;
            }

            a {
                color: white;
                text-decoration: none;
                opacity: .9;
            }
        `
    ];

    render() {
        return html`
        <footer>
            <app-logo>

            </app-logo>
            <nav>
                <a href="">Unidades</a>
                <a href="">Contato</a>
                <a href="servicos">Serviços</a>
                <a href="a-barberia">A Barbearia</a>
                <a href="-">Home</a>
            </nav>
        </footer>
        <span>
            © Barbearia Vanguarda - Todos os direitos reservados desde 2023.
        </span>
        `;
    }
}
customElements.define('app-rodape', Rodape);