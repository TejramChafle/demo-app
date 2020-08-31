var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { connectRouter } from 'lit-redux-router';
import { store } from '../redux/store';
connectRouter(store);
let AppMenu = class AppMenu extends LitElement {
    render() {
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
};
__decorate([
    property()
], AppMenu.prototype, "render", null);
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