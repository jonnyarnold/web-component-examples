import {
  html,
  LitElement,
  property,
  TemplateResult
} from "/web_modules/lit-element";
import { unsafeHTML } from "/web_modules/lit-html/directives/unsafe-html";

export * from "/web_modules/lit-element";

import { TrussleForm } from "../Form";

// TrussleInput is an abstract base class
// that all other form elements are based on
export abstract class TrussleFormElement<TValue = any> extends LitElement {
  @property() name: string = "";

  private content: string;
  private form: TrussleForm | undefined;

  constructor() {
    super();
    this.content = this.innerHTML;
  }

  connectedCallback() {
    super.connectedCallback();

    // Find the form
    this.form = this.closest("t-form") as TrussleForm;
    this.form.attachInput(this);

    if (!this.name) {
      throw new Error("No name specified for TrussleFormElement");
    }
  }

  firstUpdated() {
    // Push all attributes from the FormElement
    // onto the <input>.
    const input = this.input;
    for (const attribute of this.attributes) {
      input.setAttribute(attribute.name, attribute.value);

      if (attribute.name === "name") {
        input.setAttribute("id", attribute.value);
      }
    }
  }

  // Don't use the Shadow DOM for form elements.
  // (Otherwise you can't get to their values!)
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        .question-container {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        label {
          padding-right: 1rem;
        }
      </style>
      <div class="question-container">
        <label for="${this.name}">${unsafeHTML(this.content)}</label>
        ${this.renderInput()}
      </div>
    `;
  }

  protected get input() {
    const input = this.querySelector("input");
    if (!input) {
      throw new Error("Input not found");
    }

    return input;
  }

  abstract renderInput(): TemplateResult;
  abstract value: TValue;
}
