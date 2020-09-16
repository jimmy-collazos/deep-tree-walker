export class MyComponentElement extends HTMLElement {
  static get is() {
    return 'my-component'
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = '<span>shadow</span>';
  }
}

customElements.define(MyComponentElement.is, MyComponentElement);