import {getNavData} from "./data.js";
import {profileLink} from "./profileLink.js";

export class profileNav extends HTMLElement {
    constructor() {
        super();
        this.data = getNavData();
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                div {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    padding-top: .4rem;
                    padding-bottom: .3rem;
                    background-color: #000;
                }
            </style>
            <div>
                ${
                    this.data.map(data => {
                        return /* template */ `<profile--link text="${data}"></profile--link>`
                    }).join("")
                }
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

customElements.define("profile--nav", profileNav);