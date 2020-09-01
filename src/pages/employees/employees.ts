import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { navigate } from 'lit-redux-router';
import { getEmployees } from '../../redux/actions';

@customElement('app-employees')
export class Employees extends connect(store)(LitElement) {

    constructor() {
        super();
        this.getEmployees();
    }

    stateChanged(appstate: any) {
        console.log(appstate);
        this.employees = appstate.state.employees;
    }

    @property({ type: Array }) employees = [];

    render() {
        return html`
            <!-- External Style -->
            <link rel="stylesheet" href="../dist/theme/styles.css">

            <!-- Page Header  -->
            Registered Employees
            <button type="reset" class="btn btn-dark" @click="${this.registerStudent}" style="float:right">Register Employee</button>
            <br><br><hr><br>

            <!-- Records & Records not found message -->
            ${this.employees && this.employees.length ? html`${this.employees.map((employee) => html`<app-employee .employee=${employee}></app-employee>`)}` : html`No employees registred`}

            <!-- Employee records -->

            <slot></slot>
        `;
    }

    registerStudent() {
        store.dispatch(navigate('/register-employee'));
    }

    async getEmployees() {
        // const result = await store.dispatch(getEmployees());
        // this.employees = result.employees;
        // store.dispatch(getEmployees()).then((response) => { console.log(response) });
        // console.log(store.dispatch(getEmployees()));
        store.dispatch(getEmployees());
    }

    shouldUpdate(changedProperties: any) {
        // console.log(this.employees);
        // console.log(changedProperties);
        return changedProperties.has('employees');
    }
}