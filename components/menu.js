var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
// import { render } from 'lit-html';
// import { AppRoot } from '../app'; 
let AppMenu = class AppMenu extends LitElement {
    render() {
        return html `
            This should be menu text;
        `;
    }
};
AppMenu.styles = css `
        :host {
            display: block;
            max-width: 20%;
            min-width: 200px;
            background-color: #F06292;
            color: #fff;
        }
    `;
AppMenu = __decorate([
    customElement('app-menu')
], AppMenu);
export { AppMenu };
//# sourceMappingURL=menu.js.map