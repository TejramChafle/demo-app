import { LitElement } from 'lit-element';
declare const Employees_base: (new (...args: any[]) => {
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
export declare class Employees extends Employees_base {
    constructor();
    stateChanged(appstate: any): void;
    employees: never[];
    isLoading: boolean;
    render(): import("lit-element").TemplateResult;
    registerStudent(): void;
    getEmployees(): Promise<void>;
    shouldUpdate(changedProperties: any): any;
}
export {};
//# sourceMappingURL=employees.d.ts.map