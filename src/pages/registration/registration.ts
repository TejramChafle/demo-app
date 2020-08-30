import { LitElement, customElement, html, property } from 'lit-element';

@customElement('employee-registration')
export class Registration extends LitElement {
    formdata: any = {};
    // Properties
    @property({ type: Object }) employeedata = {};
    @property({ type: Array }) gender = ['Male', 'Female'];
    @property({ type: Array }) departments = ['Engineering', 'Human Respurce', 'Training', 'Maintenance', 'Support'];


    render() {
        return html`
            <link rel="stylesheet" href="../dist/theme/styles.css">
            <p>Employee Registration Form</p>
            <form id="registration" @submit="${this.onSubmit}">
                <div class="form-group">
                    <label>Name</label>
                    <input name="name" type="text" value="" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <select name="gender" @change="${this.onChange}">
                        <option >Select Gender</option>
                        ${this.gender.map((gen) => html`<option value=${gen}>${gen}</option>`)}
                    </select>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value="" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Joining Date</label>
                    <input name="joningdate" type="date" value="" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Department</label>
                    <select name="department" @change="${this.onChange}">
                        <option >Select Department</option>
                        ${this.departments.map((department) => html`<option value=${department}>${department}</option>`)}
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" >Submit</button>
                    <button type="reset" class="btn btn-warning" @click="${this.onReset}">Reset</button>
                </div>     
            </form>
            <slot></slot>
        `;
    }

    onChange(event: any) {
        this.formdata[event.target.name] = event.target.value;
    }

    onSubmit(event: Event) {
        event.preventDefault();
        console.log(this.formdata);
    }

    onReset() {
        // const el = document.getElementById('registration') as HTMLFormElement;
        // el.reset();
        this.formdata = {};
    }
}