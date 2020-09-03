var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { connectRouter } from 'lit-redux-router';
import { store } from '../redux/store';
import { reducer } from '../redux/reducer';
import { logout } from '../redux/actions';
connectRouter(store, reducer);
let AppMenu = class AppMenu extends connect(store)(LitElement) {
    constructor() {
        super(...arguments);
        this.activeRoute = '';
        this.auth = null;
        /* shouldUpdate(changedProperties: any) {
            return changedProperties.has('auth') || changedProperties.has('activeRoute');
        } */
    }
    stateChanged(state) {
        console.log(state);
        this.activeRoute = state.router.activeRoute;
        this.auth = state.state.auth;
    }
    render() {
        if (this.auth) {
            return html `
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
        }
        else {
            return html `
                <lit-route path="auth/signin" component="auth-signin"></lit-route>
            `;
        }
    }
    onLogout() {
        this.auth = null;
        this.performUpdate();
        // store.dispatch(navigate('/'));
        store.dispatch(logout());
    }
};
__decorate([
    property({ type: String })
], AppMenu.prototype, "activeRoute", void 0);
__decorate([
    property({ type: Object })
], AppMenu.prototype, "auth", void 0);
AppMenu = __decorate([
    customElement('app-menu')
], AppMenu);
export { AppMenu };
// render(AppMenu, AppRoot as unknown as HTMLElement);
/* declare global {
    interface HTMLElementTagNameMap {
        'app-menu': AppMenu;
    }
} */
//# sourceMappingURL=menu.js.map