var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
let AppRoot = class AppRoot extends LitElement {
    render() {
        return html `
            <main class="main">Welcome to LitElementLearnings</main>
            <app-menu>
				<p>This is child content</p>
			</app-menu>
            <slot></slot>
        `;
    }
};
AppRoot.styles = css `
       :host {
                height: 100vh;
                padding: 16px;
                font-size: 32px;
            .main {
                background-color: #FFCDD2;
                color: #9E9E9E;
                height: 100vh;
                padding: 16px;
            }
       }
    `;
AppRoot = __decorate([
    customElement('app-root')
], AppRoot);
export { AppRoot };
//# sourceMappingURL=app.js.map