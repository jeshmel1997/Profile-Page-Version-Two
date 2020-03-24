import {profileNav} from "./profileNav.js";
import {profileHeader} from "./profileHeader.js";
import {profileMain} from "./profileMain.js";
import {profileCard} from "./profileCard.js";
import {profileFooter} from "./profileFooter.js";

export class profileApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */`
            <style>
                div {
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: .5fr 3fr 5fr 1fr;
                    grid-template-areas: "nav"
                                         "header"
                                         "main"
                                         "footer";
                    background-color: #95a5a6;
                    justify-items: center;
                }

                nav {
                    height: 100%;
                    width: 100%;
                    position: sticky;
                    top: 0rem;
                    grid-area: nav;
                }

                header {
                    height: 100%;
                    width: 100%;
                    grid-area: header;
                }

                main {
                    height: 100%;
                    width: 100%;
                    margin-bottom: 1rem;
                    grid-area: main;
                }

                footer {
                    height: 100%;
                    width: 100%;
                    grid-area: footer;
                }

               

                @media only screen and (min-width: 768px) {
                    div {
                        grid-template-rows: .5fr 3fr 4fr 1fr;
                        grid-template-columns: 1fr 1fr;
                        grid-template-areas: "nav nav"
                                             "header header"
                                             "main main"
                                             "footer footer";

                    }
                }


            </style>
            <div>
                <nav>
                    <profile--nav></profile--nav>
                </nav>
                <header>
                    <profile--header></profile--header>
                </header>
                <main>
                    <profile--main></profile--main>
                </main>
                <footer>
                    <profile--footer></profile--footer>
                </footer>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

customElements.define("profile--app", profileApp);