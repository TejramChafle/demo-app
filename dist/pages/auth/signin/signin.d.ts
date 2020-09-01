import { LitElement } from 'lit-element';
declare const Signin_base: (new (...args: any[]) => {
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
export declare class Signin extends Signin_base {
    hasError: boolean;
    error: any;
    formdata: any;
    stateChanged(appstate: any): void;
    render(): import("lit-element").TemplateResult;
    onChange(event: any): void;
    onSubmit(event: Event): void;
}
export {};
//# sourceMappingURL=signin.d.ts.map