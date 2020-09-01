import { LitElement, customElement, html, property } from 'lit-element';
import { store } from '../../../redux/store';
import { login } from '../../../redux/actions';

import { connect } from 'pwa-helpers';
import { navigate } from 'lit-redux-router';

@customElement('auth-signin')
export class Signin extends connect(store)(LitElement) {
    
    hasError = false;
    @property({ type: Object }) error: any;
    @property({ type: Object }) formdata: any = {};
      
    stateChanged(appstate: any) {
        console.log(appstate);
    }

    render() {
        console.log(localStorage.getItem('auth'));
        // Navigate to home page if already logged in
        if (localStorage.getItem('auth')) {
            store.dispatch(navigate('/'));
        }
        
        return html`
            <!-- External Style -->
            <link rel="stylesheet" href="../dist/theme/styles.css">

            <!-- Login Form -->
            <div class="auth">
                <form class="auth__form" @submit="${this.onSubmit}">
                    
                    <!-- Brand -->
                    <div class="auth__form--brand">LitElement Learnings</div>

                    <!-- Error Message -->
                    ${this.hasError ? html`<div class="auth__form--error">Username or password is incorrect!</div>`:html``}
                    
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

    onChange(event: any) {
        this.formdata[event.target.name] = event.target.value;
        console.log(this.formdata);
    }

    onSubmit(event: Event) {
        event.preventDefault();
        console.log(this.formdata);
        store.dispatch(login(this.formdata))
            .then((response) => { 
                console.log(response) 
                if (response.error) {
                    this.hasError = true;
                    this.error = response.error;
                } else {
                    localStorage.setItem('auth', JSON.stringify(response));
                    store.dispatch(navigate('/'));
                }
            })
            .catch((error: any) => { 
                console.log(error) 
            });
    }

    /* shouldUpdate(changedProperties: any) {
        console.log(this.error);
        console.log(changedProperties);
        return !changedProperties.has('auth');
    } */
}