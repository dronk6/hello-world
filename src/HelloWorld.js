import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  __decrement() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }

  /*
  Added: 
    - Add a button that subtracts from the counter but won't allow going below 0.
    - Disable the subtract button when hitting 0; enable it when hitting anything other than 0.
  */
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <h4>${this.description}</h4>
      <h5>&nbsp;&nbsp;&nbsp;&nbsp;${this.bonus}</h5>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement} ?disabled=${this.counter === 0}>
        decrement
      </button>
    `;
  }
}
