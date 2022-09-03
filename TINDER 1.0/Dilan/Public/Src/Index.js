import * as Components from "./Components/Index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        fetch('http://localhost:3000/cards')
        .then(response => response.json())
        .then(cards => this.cards = cards)
        .then(() => this.render());
    }

    render(){
        console.log(this.cards)
        let page = '';
        this.cards.forEach(card => {
            page += this.makeCard(card);
        });
        this.shadowRoot.innerHTML = page;
    }

    makeCard(card) {
        console.log("render container");
        return `<my-post style="padding: 1rem 3rem;" photo="${card.photo}" name="${card.name}" city="${card.city}" description="${card.description}"></my-post>`
    }
}

customElements.define("app-container", AppContainer);