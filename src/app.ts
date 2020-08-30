import { LitElement, html, customElement, css } from 'lit-element';
import './components/menu';
import './pages/registration/registration';
import './pages/employees/employees';

@customElement('app-root')
export class AppRoot extends LitElement {
    static styles = css`
       :host {
                height: 100vh;
       }
    `;
    render() {
        return html`
            <employee-registration></employee-registration>
            <app-employees></app-employees>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot;
    }
}