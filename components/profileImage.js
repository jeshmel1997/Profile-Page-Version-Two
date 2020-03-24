export class profileImage extends HTMLElement {
    constructor(){
        super();
        this._src = this.getAttribute("src");
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                img {
                    margin-top: .8rem;
                    height: auto;
                    width: 35%;
                    display: block;
                    margin: 0 auto;
                }

                img:hover {
                    cursor: pointer;
                }
            </style>
            <img src="images/${this._src}" alt="social media logo" />
        `;
    }

    connectedCallback(){
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    get src() {
        return this.getAttribute("src");
    }

    set src(value) {
        this.setAttribute("src", value);
        this._src = value;
    }

    static get observedAttributes() {
        return ["src"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if (oldValue != newValue){
            this[name] = newValue;
        }
    }
}

customElements.define("profile--image", profileImage);