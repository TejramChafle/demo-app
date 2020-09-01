import { LitElement, html, customElement, property } from 'lit-element';
import { store } from '../../redux/store';
import { navigate } from 'lit-redux-router';
import { deleteEmployee } from '../../redux/actions';

@customElement('app-employee')
export class Employee extends LitElement {

    @property({type: Object}) employee: any;

    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            <div class="employee">
                <div class="employee__brief">
                    ${this.employee.name}
                    <button class="employee__brief--button" @click="${this.toggleDetail}">${this.employee.show ? html`Hide` : html`Show`}</button>
                </div>
                ${this.employee.show ? html`
                    <div class="employee__detail">
                        <table class="employee__detail--table">
                            <tr><th>Department</th><td>${this.employee.department}</td><tr>
                            <tr><th>Gender</th><td>${this.employee.gender}</td><tr>
                            <tr><th>Email</th><td>${this.employee.email}</td><tr>
                            <tr><th>Joining Date</th><td>${this.employee.joiningdate}</td><tr>
                        </table>
                        <div class="employee__detail--actions">
                            <button class="btn btn-secondary" @click="${this.onEdit}">Edit</button>
                            <button class="btn btn-danger" @click="${this.onDelete}">Delete</button>
                        </div>
                    </div>` 
                    : html``
                }
            </div>
            <slot></slot>
        `;
    }

    toggleDetail() {
        // Toggle empployee detail
        this.employee.show = !this.employee.show;
        // Perform screen rendering update
        this.performUpdate();
    }

    onEdit() {
        store.dispatch(navigate('/employee/'+this.employee.id));
    }

    async onDelete() {
        if (confirm('Are you sure you want to delete?')) {
            const result = await store.dispatch(deleteEmployee(this.employee));
            console.log(result);
            if (result.isDeleted) {
                alert('Employee Record deleted successfully.');
                // store.dispatch(navigate('/employees'));
            }
        }
    }
}