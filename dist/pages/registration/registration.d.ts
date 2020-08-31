import { LitElement } from 'lit-element';
export declare class Registration extends LitElement {
    formdata: any;
    id: any;
    gender: string[];
    departments: string[];
    constructor();
    render(): import("lit-element").TemplateResult;
    onChange(event: any): void;
    onSubmit(event: Event): Promise<void>;
    onReset(): void;
    getEmployeeData(): Promise<void>;
    shouldUpdate(changedProperties: any): boolean;
}
//# sourceMappingURL=registration.d.ts.map