import { customElement, html, TrussleFormElement } from "./FormElement";

@customElement("t-date")
export class TrussleDateInput extends TrussleFormElement<Date> {
  renderInput() {
    return html`
      <input type="date" name="${this.name}" />
    `;
  }

  get value() {
    return this.input.valueAsDate;
  }
}
