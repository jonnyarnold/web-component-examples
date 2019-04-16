import {
  customElement,
  html,
  LitElement
} from "/web_modules/lit-element";

@customElement("t-sign-up-form")
export class SignUpForm extends LitElement {

  render() {
    return html`
      <style>
        trussle-form {
          border: 1px solid red;
          padding: 1rem;
        }
      </style>

      <t-form .submit="${this.onSubmit}">
        <t-text name="firstName">What is your first name?</t-text>
        <t-text name="surname">What is your surname?</t-text>
        <t-date name="dob">When were you born?</t-date>
        <t-number name="favouriteNumber">What is your favourite number?</t-number>
      </t-form>
    `;
  }

  onSubmit(data: any) {
    console.log(data);
  }
}
