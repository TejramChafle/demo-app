import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';

import { connectRouter, navigate } from 'lit-redux-router';
import { store } from '../redux/store';
import { reducer } from '../redux/reducer';

connectRouter(store, reducer);

@customElement('app-menu')
export class AppMenu extends connect(store)(LitElement) {

    @property({type: String}) activeroute = '';

    stateChanged(state: any) {
        // console.log(state);
        // this.activeroute = state.router.activeRoute;
    }  

    render() {
        if (localStorage.getItem('auth')) {
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
        } else {
            store.dispatch(navigate('auth/signin'));
        }
    }
}

// render(AppMenu, AppRoot as unknown as HTMLElement);
/* declare global {
    interface HTMLElementTagNameMap {
        'app-menu': AppMenu;
    }
} */

