var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { connectRouter, navigate } from 'lit-redux-router';
import { store } from '../redux/store';
import { reducer } from '../redux/reducer';
connectRouter(store, reducer);
let AppMenu = class AppMenu extends connect(store)(LitElement) {
    constructor() {
        super(...arguments);
        this.activeroute = '';
    }
    stateChanged(state) {
        // console.log(state);
        // this.activeroute = state.router.activeRoute;
    }
    render() {
        if (localStorage.getItem('auth')) {
            return html `
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
        else {
            store.dispatch(navigate('auth/signin'));
        }
    }
};
__decorate([
    property({ type: String })
], AppMenu.prototype, "activeroute", void 0);
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