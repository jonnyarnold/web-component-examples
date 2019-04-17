import { customElement, html, TrussleFormElement } from "./FormElement";

@customElement("t-number")
export class TrussleNumberInput extends TrussleFormElement<Number> {
  renderInput() {
    return html`
      <input type="number" />
    `;
  }

  get value() {
    return this.input.valueAsNumber;
  }
}
