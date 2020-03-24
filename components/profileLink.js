
export class profileLink extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this._text = this.getAttribute("text");
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                span {
                    padding-top: .4rem;
                    padding-bottom: .4rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.1rem;
                    color: #1e8bc3;
                }

                span:hover {
                    transition: all 1s;
                    text-decoration: underline;
                    cursor: pointer;
                    color: #FFF;
                }
            </style>
            <span>
                ${this.getAttribute("text")}
            </span>
        `;
        console.log("first")
    }

    get text () {
        return this._text;
    }

    set text(value) {
        this.setAttribute("text", value);
        this._text = value;
    }

    connectedCallback() {
        console.log("second");
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["text"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("third");
        if (name === "text" && oldValue !== newValue) {
           this.template.content.querySelector("span").textContent = newValue;
        }
    }
}


customElements.define("profile--link", profileLink);