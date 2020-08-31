import { LitElement } from 'lit-element';
import './components/menu';
import './pages/registration/registration';
import './pages/employees/employees';
import './pages/employees/employee';
import './pages/departments/departments';
export declare class AppRoot extends LitElement {
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot;
    }
}
//# sourceMappingURL=app.d.ts.map