import { customElement, html, TrussleFormElement } from "./FormElement";

@customElement("t-email")
export class TrussleEmailInput extends TrussleFormElement<string> {
  renderInput() {
    return html`
      <input type="email" />
    `;
  }

  get value() {
    return this.input.value;
  }
}
