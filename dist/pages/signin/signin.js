var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property } from 'lit-element';
let Signin = class Signin extends LitElement {
    constructor() {
        super(...arguments);
        this.formdata = {};
    }
    render() {
        return html `
            <!-- External Style -->
            <link rel="stylesheet" href="../dist/theme/styles.css">

            <!-- Login Form -->
            <div class="auth">
                <form>
                    <div class="form-group">
                        <label>Username</label>
                        <input type="email" name="email" @change="${this.onChange}">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="password" @change="${this.onChange}">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" @click="${this.onSubmit}">Signin</button>
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
    }
};
__decorate([
    property({ type: Object })
], Signin.prototype, "formdata", void 0);
Signin = __decorate([
    customElement('auth-signin')
], Signin);
export { Signin };
//# sourceMappingURL=signin.js.map