import { LitElement } from 'lit-element';
declare const Registration_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: {
        employees: never[];
        employee: null;
        error: boolean;
        auth: null;
    }): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class Registration extends Registration_base {
    formdata: any;
    id: any;
    gender: string[];
    departments: string[];
    constructor();
    render(): import("lit-element").TemplateResult;
    onChange(event: any): void;
    onSubmit(event: Event): Promise<void>;
    onReset(): void;
    getEmployeeData(): void;
}
export {};
//# sourceMappingURL=registration.d.ts.map