import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';

import { connectRouter } from 'lit-redux-router';
import { store } from '../redux/store';

// connectRouter(store);

@customElement('app-menu')
export class AppMenu extends connect(store)(LitElement) {

    @property({type: String}) activeroute = '';

    stateChanged(state: any) {
        console.log(state);
        // this.activeroute = state.router.activeRoute;
    }  

    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            <div id="nav-pane">
                <a href="/">Home</a>
                <a href="/employees">Employees</a>
                <a href="/register-employee">Resitration</a>
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

