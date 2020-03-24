import {getFooterData} from "./data.js";
import {profileImage} from "./profileImage.js";

 export class profileFooter extends HTMLElement {
    constructor(){
        super();
        this.data = getFooterData();
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                div {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }
                span {
                    margin-top: 1.8rem;
                    width: 65%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }

                p {
                    margin-top: 1.3rem;
                }
            </style>
            <div>
                <span>
                    ${
                        this.data.images.map((img) => {
                            return /* template */ `<profile--image src="${img}"></profile--image>`;
                        }).join("")
                    }
                </span>
                <p>${this.data.text}</p>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

customElements.define("profile--footer", profileFooter);