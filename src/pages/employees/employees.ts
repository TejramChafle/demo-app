import { LitElement, html, customElement, property } from 'lit-element';

@customElement('app-employees')
export class Employees extends LitElement {

    @property()

    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            Employees working!
            <slot></slot>
        `;
    }
}