import { LitElement, html, customElement, property } from 'lit-element';

@customElement('app-employee')
export class Employee extends LitElement {

    @property()

    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            Employee working!
            <slot></slot>
        `;
    }
}