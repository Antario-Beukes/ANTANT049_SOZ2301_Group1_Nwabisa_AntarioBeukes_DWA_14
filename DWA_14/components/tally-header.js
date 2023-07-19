import { html, css, LitElement } from '../Libs/lit-html.js';

class TallyHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      margin: 15px;
      justify-content: space-between;
      
    }
    h1 {
      margin: auto;
      font-size: 2rem;
      color: white;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Tally Count</h1>
      </header>
    `;
  }
}

customElements.define('tally-header', TallyHeader);