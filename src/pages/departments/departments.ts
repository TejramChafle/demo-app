import { LitElement, html, customElement, property } from 'lit-element';

@customElement('app-departments')
export class Departments extends LitElement {

    @property()

    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            Departments working!
            <slot></slot>
        `;
    }
}