const l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(o){if(o.ep)return;o.ep=!0;const e=a(o);fetch(o.href,e)}};l();class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
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
    </div>`}}customElements.define("social-footer",i);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        
      }

      .container {
        width: 450px;
        height: 600px;
        background-color: #fafafa;
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
        color: #7C7C7C;
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
        width: 121px;
        height: 38px;
        border-radius: 19px;
        background-color: transparent;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 2rem;
        font-weight: 600;
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
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
        <p class="description">Pablo es un desarrollador web y electr\xF3nico, trabaja con tecnolog\xEDas HTML, CSS, Javascript y Sistemas embebidos. Aficionado al dise\xF1o y al mundo maker. <strong>Aprendiz de todo, maestro de nada.</strong></p>
        <button class="btn-follow">FOLLOW</button>
      </main>
      <social-footer></social-footer>
    </div>`}}customElements.define("reto-card",n);
