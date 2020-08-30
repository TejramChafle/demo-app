var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property } from 'lit-element';
let Registration = class Registration extends LitElement {
    constructor() {
        super(...arguments);
        this.formdata = {};
        // Properties
        this.employeedata = {};
        this.gender = ['Male', 'Female'];
        this.departments = ['Engineering', 'Human Respurce', 'Training', 'Maintenance', 'Support'];
    }
    render() {
        return html `
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
                        ${this.gender.map((gen) => html `<option value=${gen}>${gen}</option>`)}
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
                        ${this.departments.map((department) => html `<option value=${department}>${department}</option>`)}
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
    onChange(event) {
        this.formdata[event.target.name] = event.target.value;
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.formdata);
    }
    onReset() {
        // const el = document.getElementById('registration') as HTMLFormElement;
        // el.reset();
        this.formdata = {};
    }
};
__decorate([
    property({ type: Object })
], Registration.prototype, "employeedata", void 0);
__decorate([
    property({ type: Array })
], Registration.prototype, "gender", void 0);
__decorate([
    property({ type: Array })
], Registration.prototype, "departments", void 0);
Registration = __decorate([
    customElement('employee-registration')
], Registration);
export { Registration };
//# sourceMappingURL=registration.js.map