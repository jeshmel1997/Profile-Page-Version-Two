import {getHeaderData} from "./data.js";

export class profileHeader extends HTMLElement {
    constructor(){
        super();
        this.data = getHeaderData();
        this.attachShadow({mode: "open"});
        this.template = document.createElement("template");
        this.template.innerHTML = /* template */ `
            <style>
                div {
                    height: 100%;
                    width: 100%;
                    padding-top: .8rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    background-image: url("/images/portland.jpg");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                img {
                    height: auto;
                    width: 40%;
                    border-radius: 50%;
                    border: solid .2rem #fff;
                    animation-duration: 1s;
                    animation-iteration-count: 1;
                    animation-direction: alternate;
                    animation-timing-function: ease-in;
                }

                img:hover {
                    animation-name: rotate;
                    transition: all 1s;
                }

                h1 {
                    padding: .2rem .4rem;
                    font-size: 2rem;
                    background-color: #e8e8e8;
                    border-radius: .3rem;
                }

                p {
                    padding: .3rem .5rem;
                    background-color: #2c3e50;
                    border-radius: .3rem;
                    font-size: 1.2rem;
                    color: #f1c40f;
                }

                @keyframes rotate {
                    0% {
                        transform: scale(1) rotate(0deg)
                    }

                    100% {
                        transform: scale(1.3) rotate(360deg);
                    }
                }

                
                @media only screen and (min-width: 768px) {
                    img {
                        height: auto;
                        width: 15%;
                    }
                }
            </style>
            <div>
                <img src="/images/${this.data.img}" alt="profile picture" />
                <h1>${this.data.title}</h1>
                <p>${this.data.subtitle}</p>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}


customElements.define("profile--header", profileHeader);