const template = document.createElement('template')
template.innerHTML = `
  <style>
    h1 { color: red; }
  </style>
  <h1>Hello, <slot name="name">whoever you are</slot>!</h1>
`;

export { template };

export class TrussleHello extends HTMLElement {

  constructor() {
    super();

    const root = this.attachShadow({mode: 'open'});
    root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('trussle-hello', TrussleHello);
