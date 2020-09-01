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
    }): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class AppMenu extends AppMenu_base {
    activeroute: string;
    stateChanged(state: any): void;
    render(): import("lit-element").TemplateResult | undefined;
}
export {};
//# sourceMappingURL=menu.d.ts.map