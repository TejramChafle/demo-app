var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { getEmployee, updateEmployee, registerEmployee } from '../../redux/actions';
let Registration = class Registration extends connect(store)(LitElement) {
    /* stateChanged(appstate: any) {
        console.log(appstate);
        this.formdata = appstate.state.employee;
        if (this.formdata) {
            this.performUpdate();
        }
    } */
    constructor() {
        super();
        this.gender = ['Male', 'Female'];
        this.departments = ['Engineering', 'Human Respurce', 'Training', 'Maintenance', 'Support'];
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (this.id && this.formdata === undefined) {
            this.getEmployeeData();
        }
        return html `
            <link rel="stylesheet" href="../dist/theme/styles.css">
            <p>Employee Registration Form</p>
            <form id="registration" @submit="${this.onSubmit}">
                <div class="form-group">
                    <label>Name</label>
                    <input name="name" type="text" value="${((_a = this.formdata) === null || _a === void 0 ? void 0 : _a.name) || ''}" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <select name="gender" .value="${(_b = this.formdata) === null || _b === void 0 ? void 0 : _b.gender}" @change="${this.onChange}">
                        <option >Select Gender</option>
                        ${this.gender.map((gen) => html `<option value=${gen}>${gen}</option>`)}
                    </select>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value="${((_c = this.formdata) === null || _c === void 0 ? void 0 : _c.email) || ''}" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Joining Date</label>
                    <input name="joiningdate" type="date" value="${((_d = this.formdata) === null || _d === void 0 ? void 0 : _d.joiningdate) || ''}" @change="${this.onChange}">
                </div>
                <div class="form-group">
                    <label>Department</label>
                    <select name="department" .value="${(_e = this.formdata) === null || _e === void 0 ? void 0 : _e.department}" @change="${this.onChange}">
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
        if (this.formdata === undefined) {
            this.formdata = {};
        }
        this.formdata[event.target.name] = event.target.value;
    }
    async onSubmit(event) {
        event.preventDefault();
        // console.log(this.formdata);
        if (this.id) {
            const result = await store.dispatch(updateEmployee(this.formdata));
            console.log(result);
            if (!result.error) {
                alert('Employee record updated successfully.');
                window.history.back();
            }
        }
        else {
            const result = await store.dispatch(registerEmployee(this.formdata));
            console.log(result);
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
        });
    }
};
__decorate([
    property({ type: Object })
], Registration.prototype, "formdata", void 0);
__decorate([
    property({ type: String })
], Registration.prototype, "id", void 0);
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