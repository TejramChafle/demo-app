import { LitElement, html, customElement, property } from 'lit-element';

@customElement('app-menu')
export class AppMenu extends LitElement {

    @property()

    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            <div id="nav-pane">
                <a href="/">Home</a>
                <a href="/employees">Employees</a>
                <a href="/registration">Resitration</a>
                <a href="/departments">Departments</a>
            </div>
            <slot></slot>
        `;
    }
}

// render(AppMenu, AppRoot as unknown as HTMLElement);
/* declare global {
    interface HTMLElementTagNameMap {
        'app-menu': AppMenu;
    }
} */

