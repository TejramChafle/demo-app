import { LitElement, html, customElement, css } from 'lit-element';
@customElement('app-root')
export class AppRoot extends LitElement {
    static styles = css`
       :host {
                height: 100vh;
                padding: 16px;
                font-size: 32px;
            .main {
                background-color: #FFCDD2;
                color: #9E9E9E;
                height: 100vh;
                padding: 16px;
            }
       }
    `;
    render() {
        return html`
            <main class="main">Welcome to LitElementLearnings</main>
            <app-menu>
				<p>This is child content</p>
			</app-menu>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot;
    }
}