var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property } from 'lit-element';
import { store } from '../../../redux/store';
import { login, authResult } from '../../../redux/actions';
import { connect } from 'pwa-helpers';
import { navigate } from 'lit-redux-router';
let Signin = class Signin extends connect(store)(LitElement) {
    constructor() {
        super(...arguments);
        this.hasError = false;
        this.formdata = {};
        /* shouldUpdate(changedProperties: any) {
            console.log(this.error);
            console.log(changedProperties);
            return !changedProperties.has('auth');
        } */
    }
    stateChanged(appstate) {
        console.log(appstate);
    }
    render() {
        console.log(localStorage.getItem('auth'));
        // Navigate to home page if already logged in
        if (localStorage.getItem('auth')) {
            store.dispatch(navigate('/'));
        }
        return html `
            <!-- External Style -->
            <link rel="stylesheet" href="../dist/theme/styles.css">

            <!-- Login Form -->
            <div class="auth">
                <form class="auth__form" @submit="${this.onSubmit}">
                    
                    <!-- Brand -->
                    <div class="auth__form--brand">LitElement Learnings</div>

                    <!-- Error Message -->
                    ${this.hasError ? html `<div class="auth__form--error">Username or password is incorrect!</div>` : html ``}
                    
                    <!-- Signin form -->
                    <div class="form-group">
                        <label>Username</label>
                        <input type="email" name="email" @change="${this.onChange}">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="password" @change="${this.onChange}">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" >Signin</button>
                    </div>
                </form>
            </div>    
        `;
    }
    onChange(event) {
        this.formdata[event.target.name] = event.target.value;
        console.log(this.formdata);
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.formdata);
        store.dispatch(login(this.formdata))
            .then((response) => {
            console.log(response);
            if (response.error) {
                this.hasError = true;
                this.error = response.error;
            }
            else {
                localStorage.setItem('auth', JSON.stringify(response));
                store.dispatch(authResult({ auth: response, error: false }));
                store.dispatch(navigate('/'));
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
__decorate([
    property({ type: Object })
], Signin.prototype, "error", void 0);
__decorate([
    property({ type: Object })
], Signin.prototype, "formdata", void 0);
Signin = __decorate([
    customElement('auth-signin')
], Signin);
export { Signin };
//# sourceMappingURL=signin.js.map