import {
  customElement,
  html,
  LitElement,
  property
} from "/web_modules/lit-element";

@customElement("trussle-hello")
export class TrussleHello extends LitElement {
  @property() name = "whoever you are";

  render() {
    return html`
      <style>
        h1 {
          color: red;
        }
      </style>

      <h1>Hello, ${this.name}</h1>
    `;
  }
}
