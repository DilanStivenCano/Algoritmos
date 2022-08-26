import * as Components from "./Components/Index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-post photoprofile="./fotos/profile.jpg" user="DilanCano" ubication="El culo de Cali" content="./fotos/content.jpg" 
        views="2003 views" description="Anasheee" coments="View all 777 coments" when="11 de Septiembre"></my-post>
        `;
    }
}

customElements.define("app-container",AppContainer);