import {profileSkills} from "./profileSkills.js";

export class profileCard extends HTMLElement {
    constructor() {
        super();
        this._title = this.getAttribute("title");
        this._textOne = this.getAttribute("textone");
        this._textTwo = this.getAttribute("texttwo");
        this._skills = this.getAttribute("skills");
        if (this._skills == "false") {
            this._skills = false;
        }  else {
            this._skills = true;
        }
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                div {
                    height: 100%;
                    width: 95%;
                    padding-left: .8rem;
                    padding-right: .8rem;
                    margin: 0 auto;
                    margin-top: 1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    border-radius: .3rem;
                    box-shadow: 0rem .3rem 0rem 0rem #bdc3c7;
                    background-color: #ecf0f1;
                }

                div:hover {
                    transition: all 1s;
                    box-shadow: 0rem .3rem 0rem 0rem #9b59b6;
                }

                h2 {
                    text-align: center;
                }

                p {
                    text-align: center;
                }

                span {
                    margin-top: .8rem;
                    margin-bottom: 1rem;
                    text-align: center;
                }

                profile--skills {
                    width: 100%;
                }

                @media only screen and (min-width: 768px) {
                    div {
                        width: 85%;
                    }
                }
            </style>
            <div>
                <h2>${this._title}</h2>
                <p>${this._textOne}</p>
                ${this._skills ? /* template */ `<profile--skills></profile--skills>` : ""}
                <span>${this._textTwo}</span>
            </div>
        `;
    }

    connectedCallback() {
        console.log(this._skills);
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["title", "textone", "skills", "texttwo"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case "title":
                this.template.content.querySelector("h2").textContent  = newValue;
                break;
            case "textone":
                this.template.content.querySelector("p").textContent = newValue;
                break;
            case "skills":
                break;
            case "texttwo":
                this.template.content.querySelector("span").textContent = newValue;
                break;
        }
    } 
}

customElements.define("profile--card", profileCard);