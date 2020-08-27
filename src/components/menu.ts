import { LitElement, html, customElement, css } from 'lit-element';
// import { render } from 'lit-html';

@customElement('app-menu')
export class AppMenu extends LitElement {

    static styles = css`
        :host {
            display: block;
            padding: 16px;
            font-size: 18px;
            max-width: 20%;
            min-width: 200px;
            background-color: #F06292;
            color: #fff;

            #nav-pane {
                a {
                    display: inline-block;
                    text-decoration: none;
                    padding: 5px;
                    color: #fff;
                    &:hover {
                        color: #F06292;
                        background-color: #fff;
                    }
                }
            }
        }
    `;

        

    render() {
        return html`
            This should be menu text;
            <div id="nav-pane">
                <a href="#">Home</a>
                <a href="#">Registration</a>
                <a href="#">Other function</a>
            </div>
            <slot></slot>
        `;
    }
}

// render(AppMenu, AppRoot as unknown as HTMLElement);
/* declare global {
    interface HTMLElementTagNameMap {
        'app-menu': AppMenu;
    }
} */

