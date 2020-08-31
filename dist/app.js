var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
import './components/menu';
import './pages/registration/registration';
import './pages/employees/employees';
import './pages/employees/employee';
import './pages/departments/departments';
let AppRoot = class AppRoot extends LitElement {
    render() {
        return html `
            <lit-route path="/" active component="app-employees"></lit-route>
            <lit-route path="/employees" component="app-employees"></lit-route>
            <lit-route path="/employee" component="app-employee"></lit-route>
            <lit-route path="/register-employee" component="employee-registration"></lit-route>
            <lit-route path="/employee/:id" component="employee-registration"></lit-route>
            <lit-route path="/departments" component="app-departments"></lit-route>
            <slot></slot>
        `;
    }
};
AppRoot.styles = css `
       :host {
            height: 100vh;
       }
    `;
AppRoot = __decorate([
    customElement('app-root')
], AppRoot);
export { AppRoot };
//# sourceMappingURL=app.js.map