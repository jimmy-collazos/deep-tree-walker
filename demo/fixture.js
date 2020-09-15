export class MyComponentElement extends HTMLElement {
  static get is() {
    return 'my-component'
  }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
}

customElements.define(MyComponentElement.is, MyComponentElement);