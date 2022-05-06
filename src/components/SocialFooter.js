class SocialFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        
      }

      .container {
        height: 68px;
        font-weight: 600;
        border-top: 2px solid #0003;
        color: #0004;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      p {
        margin: 0;
        text-align: center;
        margin-bottom: 0.5rem;
      }

      span {
        color: #0008;
      }

      .line {
        height: 100%;
        border: 1.1px solid #0003;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SocialFooter.styles}</style>
    <div class="container">
      <div class="posts">
        <p>Posts</p>
        <img src="icons/icon-edit.svg" alt="icon edit" class="icon">
        <span>1,042</span>
      </div>
      <div class="line"></div>
      <div class="followers">
      <p>Followers</p>
      <img src="icons/icon-user.svg" alt="icon followers" class="icon">
        <span>34,205</span>
      </div>
      <div class="line"></div>
      <div class="following">
        <p>Following</p>
        <img src="icons/icon-user.svg" alt="icon following" class="icon">
        <span>1,308</span>
      </div>
    </div>`;
  }
}

customElements.define("social-footer", SocialFooter);
