import { LitElement, customElement, html, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { getEmployee, updateEmployee, registerEmployee, loading } from '../../redux/actions';

@customElement('employee-registration')
export class Registration extends connect(store)(LitElement) {
    // formdata: any = {};
    // Properties
    @property({ type: Object }) formdata: any;
    @property({ type: String }) id: any;
    @property({ type: Array }) gender = ['Male', 'Female'];
    @property({ type: Array }) departments = ['Engineering', 'Human Respurce', 'Training', 'Maintenance', 'Support'];
    @property({ type: Boolean }) isLoading = false;

    stateChanged(appstate: any) {
        console.log(appstate);
        // this.formdata = appstate.state.employee;
        this.isLoading = appstate.state.isLoading;
    }

    constructor() {
        super();
    }


    render() {
        if (this.id && this.formdata === undefined) {
            this.getEmployeeData();
        }

        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            <p>Employee Registration Form</p>
            <form id="registration" @submit="${this.onSubmit}">
                <div class="form-group">
                    <label>Name</label>
                    <input name="name" type="text" value="${this.formdata?.name || ''}" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <select name="gender" .value="${this.formdata?.gender}" @change="${this.onChange}">
                        <option >Select Gender</option>
                        ${this.gender.map((gen) => html`<option value=${gen}>${gen}</option>`)}
                    </select>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value="${this.formdata?.email || ''}" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Joining Date</label>
                    <input name="joiningdate" type="date" value="${this.formdata?.joiningdate || ''}" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Department</label>
                    <select name="department" .value="${this.formdata?.department}" @change="${this.onChange}">
                        <option >Select Department</option>
                        ${this.departments.map((department) => html`<option value=${department}>${department}</option>`)}
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" >
                        ${this.isLoading ? html`Saving..`: html`Submit`}
                    </button>
                    <button type="reset" class="btn btn-warning" @click="${this.onReset}">Reset</button>
                </div>     
            </form>
            <slot></slot>
        `;
    }

    onChange(event: any) {
        if (this.formdata === undefined) {
            this.formdata = {};
        }
        this.formdata[event.target.name] = event.target.value;
    }

    async onSubmit(event: Event) {
        event.preventDefault();
        // console.log(this.formdata);

        // Change application status to loading true
        store.dispatch(loading(true));

        if (this.id) {
            const result = await store.dispatch(updateEmployee({id: this.id, ...this.formdata}));
            console.log(result);
            if (!result.error) {

                // Application loading status to false
                store.dispatch(loading(false));

                alert('Employee record updated successfully.');
                window.history.back();
            }
        } else {
            const result = await store.dispatch(registerEmployee(this.formdata));
            console.log(result);
            
            // Application loading status to false
            store.dispatch(loading(false));

            alert('Employee registered successfully.');
            window.history.back();
        }
    }

    onReset() {
        // const el = document.getElementById('registration') as HTMLFormElement;
        // el.reset();
        this.formdata = {};
    }

    getEmployeeData() {
        store.dispatch(getEmployee(this.id)).then((response) => {
            this.formdata = response;
            // this.performUpdate();
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    shouldUpdate(changedProperties: any) {
        // console.log(this.id, this.formdata);
        // console.log(changedProperties);
        return changedProperties.has('formdata') || changedProperties.has('isLoading');
    }
}