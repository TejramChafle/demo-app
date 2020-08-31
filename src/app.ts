import { LitElement, html, customElement, css } from 'lit-element';
import './components/menu';
import './pages/registration/registration';
import './pages/employees/employees';
import './pages/employees/employee';
import './pages/departments/departments';

@customElement('app-root')
export class AppRoot extends LitElement {
    static styles = css`
       :host {
            height: 100vh;
       }
    `;
    render() {
        return html`
            <lit-route path="/" active component="app-employees"></lit-route>
            <lit-route path="/employees" component="app-employees"></lit-route>
            <lit-route path="/employee" component="app-employee"></lit-route>
            <lit-route path="/register-employee" component="employee-registration"></lit-route>
            <lit-route path="/employee/:id" component="employee-registration"></lit-route>
            <lit-route path="/departments" component="app-departments"></lit-route>

            <app-employees></app-employees>

            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot;
    }
}