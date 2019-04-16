import { customElement, html, TrussleFormElement } from "./FormElement";

@customElement("t-number")
export class TrussleNumberInput extends TrussleFormElement<Number> {
  renderInput() {
    return html`
      <input type="number" name="${this.name}" />
    `;
  }

  get value() {
    return this.input.valueAsNumber;
  }
}
