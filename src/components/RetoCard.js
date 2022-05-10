import "./SocialFooter.js";

class RetoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bg-color: #fafafa;
        --text-color: #7c7c7c;
      }

      .container {
        width: 450px;
        height: 600px;
        background-color: var(--bg-color);
        border-radius: 12px;
        box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.1);
        font-family: Montserrat, sans-serif;
        border-radius: 12px;
        position: relative;
      }

      .banner {
        border-radius: 12px 12px 0px 0px;
        border-bottom: 3px solid #000;
        filter: grayscale(100%);
      }

      .avatar {
        width: 128px;
        height: 128px;
        background-color: #fff;
        border: 3px solid #000;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 17%;
      }

      h1 {
        margin: 0;
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        margin-top: 3.5rem;
      }

      .location {
        display: flex;
        justify-content: center;
        font-family: Poppins, sans-serif;
        font-weight: 300;
        font-style: italic;
        font-size: 15px;
        color: var(--text-color);
        margin-top: 0.3rem;
      }
      .location img {
        padding-right: 6px;
      }

      .description {
        font-weight: 300;
        font-size: 15px;
        line-height: 20px;
        margin: 0 2.1rem;
        margin-top: 1.9rem;
      }
      .description strong {
        font-weight: 500;
        font-style: italic;
      }

      .btn-follow {
        text-decoration: none;
        border: 2px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 121px;
        height: 38px;
        border-radius: 19px;
        background-color: transparent;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 2rem;
        font-weight: 600;
        color: #000;
      }
      .btn-follow:hover {
        cursor: pointer;
        color: #fff;
        background-color: #000;
      }

      social-footer {
        width: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RetoCard.styles}</style>
    <div class="container">
      <header>
        <img src="images/banner.jpg" alt="banner" class="banner">
        <div class="avatar">
          <img src="icons/icon-avatar.svg" alt="avatar" class="icon-avatar">
        </div>
      </header>
      <main class="main">
        <h1>Pablo Cardozo</h1>
        <div class="location">
          <img src="icons/icon-location.svg" alt="icon location" class="icon-location">
          <span class="text-location">Cochabamba, Bolivia</span>
        </div>
        <p class="description">Pablo es un desarrollador web y electrónico, trabaja con tecnologías HTML, CSS, Javascript y Sistemas embebidos. Aficionado al diseño y al mundo maker. <strong>Aprendiz de todo, maestro de nada.</strong></p>
        <a href="https://twitter.com/pablocyc?ref_src=twsrc%5Etfw" class="btn-follow" data-show-count="false" target="_blank">Follow</a>
      </main>
      <social-footer></social-footer>
    </div>`;
  }
}

customElements.define("reto-card", RetoCard);
