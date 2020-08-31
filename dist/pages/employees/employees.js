var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { store } from '../../redux/store';
import { navigate } from 'lit-redux-router';
let Employees = class Employees extends LitElement {
    constructor() {
        super();
        this.employees = [];
        this.getEmployees();
    }
    render() {
        return html `
            <link rel="stylesheet" href="../dist/theme/styles.css">
            Registered Employees
            <button type="reset" class="btn btn-dark" @click="${this.registerStudent}" style="float:right">Register Student</button>
            <br><br><hr><br>
            ${this.employees.map((employee) => html `<app-employee .employee=${employee}></app-employee>`)}
            <slot></slot>
        `;
    }
    registerStudent() {
        store.dispatch(navigate('/register-employee'));
    }
    async getEmployees() {
        // const result = await store.dispatch(getEmployees());
        // this.employees = result.employees;
        const result = await new Promise((resolve, reject) => {
            // resolve(store.dispatch(getEmployees()));
            setTimeout(() => resolve("done!"), 5000);
        });
        console.log(result);
        /* result.then((response)=>{
            console.log(response);
        }); */
    }
};
__decorate([
    property({ type: Array })
], Employees.prototype, "employees", void 0);
Employees = __decorate([
    customElement('app-employees')
], Employees);
export { Employees };
//# sourceMappingURL=employees.js.map