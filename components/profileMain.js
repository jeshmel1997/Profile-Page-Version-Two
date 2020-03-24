import {getCardData} from "./data.js";

export class profileMain extends HTMLElement {
    constructor() {
        super();
        this.data = getCardData();
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                div {
                    height: 100%;
                    width: 100%;
                    margin-top: .3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }

                profile--card {
                    height: 50%;
                    width: 80%;
                    margin-bottom: 1rem;
                    margin-left: 0rem;
                    margin-right: 0rem;
                }

                @media only screen and (min-width: 768px) {
                    div {
                        display: flex;
                        flex-direction: row;
                    }

                    profile--card {
                        height: 50%;
                        width: 50%;
                    }
                }
            </style>
            <div>
                ${
                    this.data.map(({title, textOne, skills, textTwo}) => {
                        return /* template */ `<profile--card title="${title}" textone="${textOne}" skills="${skills}" texttwo="${textTwo}"></profile--card>`;
                    }).join("")
                }
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

customElements.define("profile--main", profileMain);