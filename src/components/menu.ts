import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';

import { connectRouter, navigate } from 'lit-redux-router';
import { store } from '../redux/store';
import { reducer } from '../redux/reducer';
import { logout, authResult } from '../redux/actions';

connectRouter(store, reducer);

@customElement('app-menu')
export class AppMenu extends connect(store)(LitElement) {

    @property({type: String}) activeRoute = '';
    @property({type: Object}) auth = null;

    stateChanged(state: any) {
        console.log(state);
        this.activeRoute = state.router.activeRoute;
        this.auth = state.state.auth;
    }  

    render() {
        if (this.auth) {
            return html`
                <link rel="stylesheet" href="../dist/theme/styles.css">
                <div id="nav-pane">
                    <a href="/">Home</a>
                    <a href="/employees">Employees</a>
                    <a href="/register-employee">Resitration</a>
                    <a href="/departments">Departments</a>
                    <br>
                    <button class="btn btn-primary btn-block" @click="${this.onLogout}">Logout</button>
                </div>
                <lit-route path="auth/signin" component="auth-signin"></lit-route>
                <slot></slot>
            `;
        } else {
            return html`
                <lit-route path="auth/signin" component="auth-signin"></lit-route>
            `
        }
    }

    onLogout() {
        this.auth = null;
        this.performUpdate();
        // store.dispatch(navigate('/'));
        store.dispatch(logout());
    }

    /* shouldUpdate(changedProperties: any) {
        return changedProperties.has('auth') || changedProperties.has('activeRoute');
    } */
}

// render(AppMenu, AppRoot as unknown as HTMLElement);
/* declare global {
    interface HTMLElementTagNameMap {
        'app-menu': AppMenu;
    }
} */

