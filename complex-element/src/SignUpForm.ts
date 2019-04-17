import {
  customElement,
  html,
  LitElement
} from "/web_modules/lit-element";

@customElement("t-sign-up-form")
export class SignUpForm extends LitElement {

  render() {
    const nowDate = new Date().toISOString().split("T")[0];

    return html`
      <style>
        trussle-form {
          border: 1px solid red;
          padding: 1rem;
        }
      </style>

      <t-form .submit="${this.onSubmit}">
        <t-text name="name" required>What is your name?</t-text>
        <t-email name="email" required>What is your email address?</t-email>
        <t-date name="dob" max="${nowDate}">When were you born?</t-date>
        <t-number name="favouriteNumber">What is your favourite number?</t-number>
      </t-form>
    `;
  }

  onSubmit(data: any) {
    console.log(data);
  }
}
