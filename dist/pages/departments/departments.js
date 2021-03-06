var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let Departments = class Departments extends LitElement {
    render() {
        return html `
            <link rel="stylesheet" href="../dist/theme/styles.css">
            Departments working!
            <slot></slot>
        `;
    }
};
__decorate([
    property()
], Departments.prototype, "render", null);
Departments = __decorate([
    customElement('app-departments')
], Departments);
export { Departments };
//# sourceMappingURL=departments.js.map