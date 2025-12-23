import{m as f}from"./mainView.class-C4NLGCWW.js";import{L as b,D as c,M as p,A as y,F as w,N as S}from"./index-C4MEk9am.js";import{L as h,s as L,r as g,S as k,a as M}from"./loginModal.service-DpKgr70y.js";class E{constructor(){this.init()}init(){document.getElementById("wico_btn-logout")?.addEventListener("click",e=>{e.preventDefault(),this.logout()}),document.querySelectorAll(".wico_btn-openLoginModal")?.forEach(e=>{e?.addEventListener("click",s=>{s.preventDefault(),this.openLoginModal()})}),document.querySelectorAll(".wico_btn-openSignupModal")?.forEach(e=>{e?.addEventListener("click",s=>{s.preventDefault(),this.openSignupModal()})})}async logout(){localStorage.removeItem("profile"),localStorage.removeItem("unsaved_widget"),await b("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async openLoginModal(o,l){c("signup-dialog"),document.getElementById("login-dialog")?.remove(),new h;const e=document.getElementById("login-dialog");if(e){const r=e.querySelector(".subtitle-wrapper");if(l&&r){const n=document.createElement("p");n.textContent=l,r?.appendChild(n)}const t=e.querySelector(".password-toggle");t?.addEventListener("click",()=>{const n=e.querySelector("#password");n.type==="password"?(n.type="text",t.textContent="visibility"):(n.type="password",t.textContent="visibility_off")}),e.querySelector(".close-button")?.addEventListener("click",()=>{c("login-dialog"),document.body.classList.remove("modal-open")}),e.querySelector(".signup-trigger")?.addEventListener("click",()=>{this.openSignupModal(o)});const a=e.querySelector("#remember-me");if(a&&localStorage.getItem("remember-me")==="true"){a.checked=!0;const u=localStorage.getItem("remembered-email");u&&(e.querySelector("#email").value=u)}const d=e.querySelector("form");d&&d.addEventListener("submit",n=>{n.preventDefault(),n.stopPropagation(),L(n)})}p("login-dialog"),document.body.classList.add("modal-open"),document.querySelector("#login-dialog #email")?.focus(),g("google-sign-in-button-login")}async openSignupModal(o){c("login-dialog"),document.getElementById("signup-dialog")?.remove(),new k;const i=document.getElementById("signup-dialog");if(i){i.querySelectorAll(".password-toggle").forEach(t=>{t.addEventListener("click",()=>{const a=t.closest(".password-field-wrapper")?.querySelector("input");a.type==="password"?(a.type="text",t.textContent="visibility"):(a.type="password",t.textContent="visibility_off")})}),i.querySelector(".close-button")?.addEventListener("click",()=>{c("signup-dialog"),document.body.classList.remove("modal-open")}),i.querySelector(".login-trigger")?.addEventListener("click",()=>{this.openLoginModal(o)});const r=i.querySelector("form");r&&r.addEventListener("submit",t=>{t.preventDefault(),t.stopPropagation(),M(t)})}p("signup-dialog"),document.body.classList.add("modal-open"),g("google-sign-in-button-signup")}}class B extends f{appName;_authService;constructor(o){super({}),this.appName=o,this._authService=y.getInstance()}async getHtml(){window.headerFunctions=w,window.logout=this._authService.logout,window.scrollToSection=this.scrollToSection;const o=await this._authService.getLoginInfo();return setTimeout(()=>{new E},0),`
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-2">
                <div class="container-fluid px-4">
                    <div class="d-flex justify-content-center align-items-center w-100">
                        <router-link class="navbar-brand mx-auto flex-fill logo" href="/">${this.appName}<sup>BETA</sup></router-link>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <!-- <ul class="navbar-nav mx-auto flex-fill"> -->
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <router-link class="nav-link" href="/">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0)" onclick="scrollToSection('features')">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0)" onclick="scrollToSection('howItWorks')">How It Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0)" onclick="scrollToSection('faq')">FAQ</a>
                                </li>
                                <li class="nav-item nav-dropdown">
                                    <a class="nav-link" href="javascript:void(0)">
                                        Resources <span class="material-symbols-outlined">expand_more</span>
                                    </a>
                                    <ul class="nav-dropdown-menu">
                                        <li><a class="nav-dropdown-item" href="/documentation">Documentation</a></li>
                                        <li><a class="nav-dropdown-item" href="/video-tutorial">Videos</a></li>
                                        <li><a class="nav-dropdown-item" href="/Community">Community</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex flex-fill justify-content-end" id="login-info">
                            ${o?o.loginInfoHTML:`
                                <button onclick="openLoginModal()" class="btn btn-outline-light me-2">Login</button>
                                <button onclick="openSignupModal()" class="btn btn-light">Sign Up</button>
                            `}
                        </div>
                    </div>
                </div>
            </nav>
        `}scrollToSection=async o=>{window.location.pathname!=="/"&&await S("/"),document.getElementById(o)?.scrollIntoView({behavior:"smooth"})}}export{E as A,B as N};
