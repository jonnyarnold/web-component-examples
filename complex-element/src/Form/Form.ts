import { customElement, html, LitElement, property } from "/web_modules/lit-element";
import { unsafeHTML } from "/web_modules/lit-html/directives/unsafe-html";
import { TrussleFormElement } from "./Input/FormElement";

// <t-form> wraps a <form> in a friendly wrapper.
@customElement("t-form")
export class TrussleForm extends LitElement {
  // the content of the tag in HTML.
  private content: string;

  private attachedInputs: TrussleFormElement[] = [];

  @property()
  submit: (data: any) => Promise<void> = () => Promise.resolve();

  constructor() {
    super();
    this.content = this.innerHTML;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        form {
          border: 1px solid red;
          display: inline-block;
          padding: 1rem;
        }
      </style>

      <form @submit="${this.onSubmit}">
        ${unsafeHTML(this.content)}
        <button type="submit">Submit</button>
      </form>
    `;
  }

  attachInput(input: TrussleFormElement) {
    this.attachedInputs.push(input);
  }

  detachInput(input: TrussleFormElement) {
    this.attachedInputs = this.attachedInputs.filter(i => i !== input);
  }

  get data() {
    return this.attachedInputs.reduce((memo, input) => {
      memo[input.name] = input.value;
      return memo;
    }, {} as { [name: string]: any });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    return this.submit(this.data);
  }
}
