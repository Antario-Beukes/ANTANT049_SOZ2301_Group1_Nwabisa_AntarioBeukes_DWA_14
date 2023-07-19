import { html, LitElement } from '../Libs/lit-html.js';
class TallyFooter extends LitElement { 
  render() {
    return html`
      <footer style ="text-align:left; margin:auto; padding-top:20px; font-size:25px; color:white">
        Inspired by
        <a style ="text-decoration:none; color:black" class="footer__link" href="https://tallycount.app/">Tally Count</a>.
      </footer>
    `;
  }
}
customElements.define('tally-footer', TallyFooter)
