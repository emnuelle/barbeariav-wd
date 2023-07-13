import { LitElement, html, css } from 'lit';

export class titulo extends LitElement {
    static styles = [
        css`
            :host {
                display: block

            }
        `
    ];

    render() {
        return html `Título`;
    }
}
customElements.define('app-titulo', titulo);