import * as Components from "../Index.js"

class MyPost extends HTMLElement {
    static get observedAttributes(){
        return ['name','city', 'photo', 'description'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
    this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
    }

    render(){
        console.log("render post");
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/Src/Components/Post/post.css">
        <div class="card">
            <img src="${this.photo}" alt="photo">
            <div class="contenido-card">
                <h3>${this.name}</h3>
                <h4>${this.city}</h4>
                <p>${this.description}</p>
                <div class="contenido-buttons">
                    <my-counter img="/fotos/dislike.png"></my-counter>
                    <my-counter img="/fotos/like.webp"></my-counter>
                </div>  
            </div>
        </div>
        `;
    }
}

customElements.define("my-post", MyPost);
export default MyPost;