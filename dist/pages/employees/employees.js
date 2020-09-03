var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { navigate } from 'lit-redux-router';
import { getEmployees, loading } from '../../redux/actions';
let Employees = class Employees extends connect(store)(LitElement) {
    constructor() {
        super();
        this.employees = [];
        this.isLoading = false;
        this.getEmployees();
    }
    stateChanged(appstate) {
        console.log(appstate);
        this.employees = appstate.state.employees;
        this.isLoading = appstate.state.isLoading;
    }
    render() {
        return html `
            <!-- External Style -->
            <link rel="stylesheet" href="../dist/theme/styles.css">

            <!-- Page Header  -->
            Registered Employees
            <button type="reset" class="btn btn-dark" @click="${this.registerStudent}" style="float:right">Register Employee</button>
            <br><br><hr><br>

            <!-- Records & Records not found message -->
            <!-- ${this.employees && this.employees.length ? html `${this.employees.map((employee) => html `<app-employee .employee=${employee}></app-employee>`)}` : html `No employees registred`} -->

            <!-- Employee records -->
            ${this.isLoading ? html `<app-loading></app-loading>` : html `
            ${this.employees && this.employees.length ? html `${this.employees.map((employee) => html `<app-employee .employee=${employee}></app-employee>`)}` : html `No employees registred`}`}
            <slot></slot>
        `;
    }
    registerStudent() {
        store.dispatch(navigate('/register-employee'));
    }
    async getEmployees() {
        // Show loading application
        store.dispatch(loading(true));
        store.dispatch(getEmployees()).then((response) => {
            store.dispatch(loading(false));
        });
    }
    shouldUpdate(changedProperties) {
        // console.log(this.employees);
        // console.log(changedProperties);
        // changedProperties.has('employees') || 
        return changedProperties.has('employees') || changedProperties.has('isLoading');
    }
};
__decorate([
    property({ type: Array })
], Employees.prototype, "employees", void 0);
__decorate([
    property({ type: Boolean })
], Employees.prototype, "isLoading", void 0);
Employees = __decorate([
    customElement('app-employees')
], Employees);
export { Employees };
//# sourceMappingURL=employees.js.map