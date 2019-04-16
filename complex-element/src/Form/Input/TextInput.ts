import { customElement, html, TrussleFormElement } from "./FormElement";

@customElement("t-text")
export class TrussleTextInput extends TrussleFormElement<string> {
  renderInput() {
    return html`
      <input type="text" name="${this.name}" />
    `;
  }

  get value() {
    return this.input.value;
  }
}
