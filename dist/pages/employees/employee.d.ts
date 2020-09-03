import { LitElement } from 'lit-element';
declare const Employee_base: (new (...args: any[]) => {
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
export declare class Employee extends Employee_base {
    employee: any;
    isLoading: boolean;
    render(): import("lit-element").TemplateResult;
    toggleDetail(): void;
    onEdit(): void;
    onDelete(): void;
}
export {};
//# sourceMappingURL=employee.d.ts.map