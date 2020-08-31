import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { navigate } from 'lit-redux-router';
import { getEmployees } from '../../redux/actions';

@customElement('app-employees')
export class Employees extends connect(store) (LitElement) {

    constructor() {
        super();
        this.getEmployees();
    }

    stateChanged(state: any) {
        console.log(state);
    }   

    @property({type: Array}) employees = [];

    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            Registered Employees
            <button type="reset" class="btn btn-dark" @click="${this.registerStudent}" style="float:right">Register Student</button>
            <br><br><hr><br>
            ${this.employees.map((employee)=>html`<app-employee .employee=${employee}></app-employee>`)}
            <slot></slot>
        `;
    }

    registerStudent() {
        store.dispatch(navigate('/register-employee'));
    }

    async getEmployees() {
        const result = await store.dispatch(getEmployees());
        this.employees = result.employees;
        // store.dispatch(getEmployees()).then((response) => { console.log(response) });
        // console.log(store.dispatch(getEmployees()));
    }
}