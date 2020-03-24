import {getSkillsData} from "./data.js";

export class profileSkills extends HTMLElement {
    constructor(){
        super();
        this.data = getSkillsData();
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                ul {
                    width: 100%;
                    margin: 0rem;
                    padding: 0rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    list-style: none;
                }

                li {
                    padding: .4rem .3rem;
                    margin-right: .2rem;
                    border-radius: .3rem;
                    font-size: 1rem;
                }

                li:nth-child(odd) {
                    background-color: #3498db;
                }

                li:nth-child(even) {
                    background-color: #f39c12;
                }
            </style>
            <ul>
                ${
                    this.data.map((skill) => {
                        return /* template */ `<li>${skill}</li>`;
                    }).join("")
                }
            </ul>
        `;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}


customElements.define("profile--skills", profileSkills);