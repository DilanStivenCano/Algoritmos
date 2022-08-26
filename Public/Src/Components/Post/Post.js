class MyPost extends HTMLElement {
    static get observedAttributes(){
        return ['photoprofile', 'user', 'ubication', 'content', 'views', 'description', 'coments', 'when'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/Src/Components/Post/Style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
        <section>
            <div class="Header">
                <div class="user">
                    <img src="${this.photoprofile}" alt="PictureProfile">
                    <div class="username">
                        <h3>${this.user}</h3>
                        <h5>${this.ubication}</h5>
                    </div>
                </div>
                <img class="IconDots" src="https://cdn-icons-png.flaticon.com/512/512/512142.png">
            </div>
            <div class="Content">
                <img src="${this.content}" alt="Content">
            </div>
            <div class="Icons">
                <div class="Default">
                    <img class="Heart" src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png">
                    <img src="https://cdn-icons-png.flaticon.com/512/589/589671.png">
                    <img src="https://cdn-icons-png.flaticon.com/512/2099/2099085.png">
                </div>
                <img class="Save" src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png">
            </div>
            <div class="Description">
                <h3>${this.views}</h3>
                <div class="Caption">
                    <h3>${this.user}</h3>
                    <h4>${this.description}</h4>
                </div>
                <p>${this.coments}</p>
                <p>${this.when}</p>
            </div>
        </section>`;
    }
}

customElements.define("my-post", MyPost);
export default MyPost;