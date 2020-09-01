import { LitElement, html, customElement, css } from 'lit-element';

@customElement('app-loading')
export class Loading extends LitElement {
    static styles = css`
        :host {
            text-align: center;
        }
    `;
    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            <div class="loader"></div>
        `;
    }
}