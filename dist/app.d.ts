import { LitElement } from 'lit-element';
import './components/menu';
import './components/loading';
import './pages/registration/registration';
import './pages/employees/employees';
import './pages/employees/employee';
import './pages/departments/departments';
import './pages/auth/signin/signin';
export declare class AppRoot extends LitElement {
    render(): import("lit-element").TemplateResult;
    loadPage(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot;
    }
}
//# sourceMappingURL=app.d.ts.map