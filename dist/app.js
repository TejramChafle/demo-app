var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import './components/menu';
import './components/loading';
import './pages/registration/registration';
import './pages/employees/employees';
import './pages/employees/employee';
import './pages/departments/departments';
import './pages/auth/signin/signin';
import { store } from './redux/store';
import { navigate } from 'lit-redux-router';
import { connect } from 'pwa-helpers';
import { authResult } from './redux/actions';
let AppRoot = class AppRoot extends connect(store)(LitElement) {
    stateChanged(appState) {
        // console.log(appState);
        if (appState.state.auth && localStorage.getItem('auth')) {
            this.auth = appState.state.auth;
        }
        else if (localStorage.getItem('auth')) {
            const auth = JSON.parse(localStorage.getItem('auth'));
            store.dispatch(authResult({ auth: auth, error: false }));
            this.auth = auth;
        }
        else {
            this.auth = appState.state.auth; // null
        }
    }
    render() {
        if (localStorage.getItem('auth')) {
            return html `
                <link rel="stylesheet" href="../dist/theme/styles.css">
                <!-- HEADER -->
                <header>LitElement Learnings</header>

                <!-- Main content of the page -->
                <main>
                    <!-- vertical navbar -->
                    <aside>
                        <app-menu></app-menu>
                    </aside>
                    <article>
                        <!-- Other application components/pages will be rendered inside the root -->
                        <lit-route path="/" active component="app-employees"></lit-route>
                        <lit-route path="/employees" component="app-employees"></lit-route>
                        <lit-route path="/employee" component="app-employee"></lit-route>
                        <lit-route path="/register-employee" component="employee-registration"></lit-route>
                        <lit-route path="/employee/:id" component="employee-registration"></lit-route>
                        <lit-route path="/departments" component="app-departments"></lit-route>
                        <lit-route><h1>404 Not found</h1></lit-route>
                    </article>
                </main>

                <!-- Footer -->
                <footer>&copy 2020. Developed in <a href="https://lit-element.polymer-project.org/" target="_blank">Lit Element</a></footer>
                
                <slot></slot>
            `;
        }
        else {
            return html `
                <lit-route path="auth/signin" component="auth-signin"></lit-route>
                ${this.auth ? html `<lit-route path="/" active component="app-employees"></lit-route>` : this.loadPage()}
                <!-- <lit-route path="auth/signup"></lit-route> -->
                <slot></slot>
            `;
        }
    }
    loadPage() {
        store.dispatch(navigate('auth/signin'));
    }
    shouldUpdate(changedProperties) {
        // console.log(this.auth, changedProperties.has('auth'));
        // console.log(changedProperties);
        return changedProperties.has('auth');
    }
};
AppRoot.style = css `
        :host {
            display: block;
            box-sizing: border-box;
        }
    `;
__decorate([
    property({ type: Object })
], AppRoot.prototype, "auth", void 0);
AppRoot = __decorate([
    customElement('app-root')
], AppRoot);
export { AppRoot };
//# sourceMappingURL=app.js.map