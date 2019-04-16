import { html, render } from "/web_modules/lit-html";

export class TrussleHello extends HTMLElement {
  static template(name) {
    return html`
      <style>
        h1 {
          color: red;
        }
      </style>

      <h1>Hello, ${name}</h1>
    `;
  }

  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "whoever you are";

    render(TrussleHello.template(name), this.root);
  }
}

customElements.define("trussle-hello", TrussleHello);
