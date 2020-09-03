import { LitElement } from 'lit-element';
import './components/menu';
import './components/loading';
import './pages/registration/registration';
import './pages/employees/employees';
import './pages/employees/employee';
import './pages/departments/departments';
import './pages/auth/signin/signin';
declare const AppRoot_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: {
        employees: never[];
        employee: null;
        error: boolean;
        auth: null;
        isLoading: boolean;
    }): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class AppRoot extends AppRoot_base {
    static style: import("lit-element").CSSResult;
    auth: any;
    stateChanged(appState: any): void;
    render(): import("lit-element").TemplateResult;
    loadPage(): void;
    shouldUpdate(changedProperties: any): any;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot;
    }
}
export {};
//# sourceMappingURL=app.d.ts.map