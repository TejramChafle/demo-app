import { LitElement } from 'lit-element';
declare const AppMenu_base: (new (...args: any[]) => {
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
export declare class AppMenu extends AppMenu_base {
    activeRoute: string;
    auth: null;
    stateChanged(state: any): void;
    render(): import("lit-element").TemplateResult;
    onLogout(): void;
}
export {};
//# sourceMappingURL=menu.d.ts.map