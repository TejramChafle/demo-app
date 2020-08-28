var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css, property } from 'lit-element';
// import { render } from 'lit-html';
let AppMenu = class AppMenu extends LitElement {
    render() {
        return html `
            This should be menu text;
            <div id="nav-pane">
                <a href="#">Home</a>
                <a href="#">Registration</a>
                <a href="#">Other function</a>
            </div>
            <slot></slot>
        `;
    }
};
AppMenu.styles = css `
        :host {
            display: block;
            padding: 16px;
            font-size: 18px;
            max-width: 20%;
            min-width: 200px;
            background-color: #F06292;
            color: #fff;

            #nav-pane {
                a {
                    display: inline-block;
                    text-decoration: none;
                    padding: 5px;
                    color: #fff;
                    &:hover {
                        color: #F06292;
                        background-color: #fff;
                    }
                }
            }
        }
    `;
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