class MyCounter extends HTMLElement {
    
    static get observedAttributes() {
      return ["count", "img"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.mount();
    }
  
    connectedCallback() {
      this.mount();
    }
  
    dissconnectedCallback() {
      this.removeEventListeners();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonClicked);
    }
  
    render() {
    console.log("render counter");
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/Src/Components/counter/counter.css">
        <button class="button">
            ${this.count || 0}
            <img src="${this.img}">
        </button>
      `;
    }
  
    removeEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked counter");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
  }
  
  customElements.define("my-counter", MyCounter);
  export default MyCounter;
  