import{m as f}from"./mainView.class-C4NLGCWW.js";import{x as r,F as m,z as b}from"./modal.service-DnSGT_B3.js";import{u as y,A as w,r as h}from"./index-B1LvJ9lF.js";import{L as S,s as L,r as g,S as k,a as E}from"./loginModal.service-BLcSxIp4.js";class M{constructor(){this.init()}init(){document.getElementById("wico_btn-logout")?.addEventListener("click",e=>{e.preventDefault(),this.logout()}),document.querySelectorAll(".wico_btn-openLoginModal")?.forEach(e=>{e?.addEventListener("click",d=>{d.preventDefault(),this.openLoginModal()})}),document.querySelectorAll(".wico_btn-openSignupModal")?.forEach(e=>{e?.addEventListener("click",d=>{d.preventDefault(),this.openSignupModal()})})}async logout(){localStorage.removeItem("profile"),localStorage.removeItem("unsaved_widget"),await y("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async openLoginModal(n,c){r("signup-dialog"),document.getElementById("login-dialog")?.remove(),new S;const e=document.getElementById("login-dialog");if(e){const u=e.querySelector(".subtitle-wrapper");if(c&&u){const t=document.createElement("p");t.textContent=c,u?.appendChild(t)}const o=e.querySelector(".password-toggle");o?.addEventListener("click",()=>{const t=e.querySelector("#password");t.type==="password"?(t.type="text",o.textContent="visibility"):(t.type="password",o.textContent="visibility_off")}),e.querySelector(".close-button")?.addEventListener("click",()=>{r("login-dialog"),document.body.classList.remove("modal-open")}),e.addEventListener("click",t=>{const l=e.getBoundingClientRect();(t.clientX<l.left||t.clientX>l.right||t.clientY<l.top||t.clientY>l.bottom)&&(r("login-dialog"),document.body.classList.remove("modal-open"))}),e.querySelector(".signup-trigger")?.addEventListener("click",()=>{this.openSignupModal(n)});const s=e.querySelector("#remember-me");if(s&&localStorage.getItem("remember-me")==="true"){s.checked=!0;const l=localStorage.getItem("remembered-email");l&&(e.querySelector("#email").value=l)}const p=e.querySelector("form");p&&(p.addEventListener("submit",t=>{t.preventDefault(),t.stopPropagation(),L(t)}),e.addEventListener("keydown",t=>{if(t.key==="Enter")if(t.preventDefault(),p.checkValidity()){const l=new Event("submit",{cancelable:!0});p.dispatchEvent(l)}else p.reportValidity()}))}m("login-dialog"),document.body.classList.add("modal-open"),document.querySelector("#login-dialog #email")?.focus(),g("google-sign-in-button-login")}async openSignupModal(n){r("login-dialog"),document.getElementById("signup-dialog")?.remove(),new k;const i=document.getElementById("signup-dialog");if(i){i.querySelectorAll(".password-toggle").forEach(o=>{o.addEventListener("click",()=>{const s=o.closest(".password-field-wrapper")?.querySelector("input");s.type==="password"?(s.type="text",o.textContent="visibility"):(s.type="password",o.textContent="visibility_off")})}),i.querySelector(".close-button")?.addEventListener("click",()=>{r("signup-dialog"),document.body.classList.remove("modal-open")}),i.addEventListener("click",o=>{const a=i.getBoundingClientRect();(o.clientX<a.left||o.clientX>a.right||o.clientY<a.top||o.clientY>a.bottom)&&(r("signup-dialog"),document.body.classList.remove("modal-open"))}),i.querySelector(".login-trigger")?.addEventListener("click",()=>{this.openLoginModal(n)});const u=i.querySelector("form");u&&u.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),E(o)})}m("signup-dialog"),document.body.classList.add("modal-open"),g("google-sign-in-button-signup")}}class C extends f{appName;_authService;constructor(n){super({}),this.appName=n,this._authService=w.getInstance()}async getHtml(){window.headerFunctions=b,window.logout=this._authService.logout,window.scrollToSection=this.scrollToSection;const n=await this._authService.getLoginInfo();return setTimeout(()=>{new M},0),`
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
                            ${n?n.loginInfoHTML:`
                                <button onclick="openLoginModal()" class="btn btn-outline-light me-2">Login</button>
                                <button onclick="openSignupModal()" class="btn btn-light">Sign Up</button>
                            `}
                        </div>
                    </div>
                </div>
            </nav>
        `}scrollToSection=async n=>{window.location.pathname!=="/"&&await h("/"),document.getElementById(n)?.scrollIntoView({behavior:"smooth"})}}export{M as A,C as N};
