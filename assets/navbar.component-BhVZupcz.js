import{m as M}from"./mainView.class-C4NLGCWW.js";import{f as q,N as T,F as f,o as C,g as I,t as x,A as B,H as D,O as R}from"./index-Dg7XQXlu.js";import{L as E,s as O,r as k,S as A,a as F}from"./loginModal.service-DZo4YBaQ.js";class _{constructor(){this.init()}init(){const r=this.getHtml();document.querySelector("body #app")?.insertAdjacentHTML("afterend",r);const e=document.getElementById("change-password-dialog");e&&e.querySelectorAll(".password-toggle").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-target"),s=e.querySelector(`#${i}`);s&&(s.type==="password"?(s.type="text",t.textContent="visibility"):(s.type="password",t.textContent="visibility_off"))})})}getHtml(){return`
     <dialog id="change-password-dialog" class="change-password-modal">
      <div class="change-password-container">
        <button class="close-button" type="button">
          <span class="material-symbols-outlined">close</span>
        </button>

        <div class="change-password-form-wrapper">
          <form class="form-header">
            <h1 class="title-text">Change Password</h1>
            <div class="subtitle-wrapper">
              <p>Enter your old password and create a new one.</p>
            </div>
            
            <div class="form-content">
              <!-- Old Password -->
              <div class="form-group floating">
                <div class="change-password-field-wrapper">
                  <input 
                    type="password" 
                    class="input-field" 
                    id="old-password"
                    name="oldPassword"
                    autocomplete="current-password"
                    placeholder=" "
                    required
                  >
                  <label class="floating-label">
                    Old Password <span class="required">*</span>
                  </label>
                  <span class="material-symbols-outlined password-toggle" data-target="old-password">
                    visibility_off
                  </span>
                </div>
              </div>

              <!-- New Password -->
              <div class="form-group floating">
                <div class="change-password-field-wrapper">
                  <input 
                    type="password" 
                    class="input-field" 
                    id="new-password"
                    name="newPassword"
                    autocomplete="new-password"
                    placeholder=" "
                    required
                  >
                  <label class="floating-label">
                    New Password <span class="required">*</span>
                  </label>
                  <span class="material-symbols-outlined password-toggle" data-target="new-password">
                    visibility_off
                  </span>
                </div>
              </div>

              <!-- Confirm Password -->
              <div class="form-group floating">
                <div class="password-field-wrapper">
                  <input 
                    type="password" 
                    class="input-field" 
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder=" "
                    required
                  >
                  <label class="floating-label">
                    Confirm Password <span class="required">*</span>
                  </label>
                  <span class="material-symbols-outlined password-toggle" data-target="confirm-password">
                    visibility_off
                  </span>
                </div>
              </div>

              <button type="submit" id="change-password-btn" class="change-password-button">
                Change Password
              </button>

              <div id="password-error-message" class="error-message"></div>
              <div id="password-success-message" class="success-message"></div>
            </div>
          </form>
        </div>
      </div>
    </dialog>
    `}}class j{constructor(){this.init()}init(){const r=this.getHtml();document.querySelector("body #app")?.insertAdjacentHTML("afterend",r);const e=document.getElementById("forgot-password-dialog");if(!e)return;e.showModal();const t=e.querySelector(".close-button");t&&t.addEventListener("click",()=>{e.close(),e.remove(),document.body.classList.remove("modal-open");const a=document.getElementById("login-dialog");a&&a.open&&(a.close(),a.remove())});const i=e.querySelector(".back-to-login-trigger");i&&i.addEventListener("click",()=>{e.close(),e.remove(),new E});const s=e.querySelector("#forgot-password-form"),l=e.querySelector("#reset-form-wrapper"),m=e.querySelector("#forgot-form-wrapper"),o=e.querySelector("#forgot-error-message"),d=e.querySelector("#forgot-success-message");e.addEventListener("click",a=>{const n=e.getBoundingClientRect();(a.clientX<n.left||a.clientX>n.right||a.clientY<n.top||a.clientY>n.bottom)&&(e.close(),e.remove())}),s.addEventListener("submit",async a=>{a.preventDefault();const n=e.querySelector("#forgot-email").value.trim();if(!n){o.textContent="Please enter your email.";return}o.textContent="",d.textContent="Sending reset link...";try{const y=`${q?.boomURL}/api/forgetpassword`,w=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}),u=await w.json();w.ok&&u.success?(d.textContent=u.message||"OTP sent to your email.",setTimeout(()=>{m&&l?(m.classList.add("hidden"),l.classList.remove("hidden")):console.error("Wrapper elements not found!"),e.querySelector("#reset-email").textContent=n},1500)):o.textContent=u.message||"Failed to send reset email."}catch(p){o.textContent="Something went wrong. Please try again.",console.error(p)}}),e.querySelector("#reset-password-form").addEventListener("submit",async a=>{a.preventDefault();const n=e.querySelector("#reset-email").textContent,p=e.querySelector("#new-password").value.trim(),y=e.querySelector("#confirm-password").value.trim(),w=e.querySelector("#otp").value.trim(),u=e.querySelector("#reset-error-message"),b=e.querySelector("#reset-success-message");if(u.textContent="",b.textContent="",!p||!y||!w){u.textContent="All fields are required.";return}if(p!==y){u.textContent="Passwords do not match.";return}try{const P=`${q?.boomURL}/api/changepassword`,v=await fetch(P,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,otp:w,newPassword:p})}),L=await v.json();v.ok&&L.success?(b.textContent=L.message||"Password reset successful!",setTimeout(()=>{new E},1500)):u.textContent=L.message||"Failed to reset password."}catch{u.textContent="Something went wrong. Try again."}})}getHtml(){return`
    <dialog id="forgot-password-dialog" class="forgot-password-modal">
      <div class="forgot-password-container">
        <!-- Close Button -->
        <button class="close-button" type="button">
          <span class="material-symbols-outlined">close</span>
        </button>

        <div class="forgot-password-form-wrapper">
          <!-- Step 1: Forgot Password -->
          <div id="forgot-form-wrapper">
            <form id="forgot-password-form" class="form-header">
              <h1 class="title-text">Forgot Password?</h1>
              <p class="subtitle-text">Enter your email and we’ll send you a reset link.</p>

              <div class="form-group floating">
                <input type="email" class="input-field" id="forgot-email" placeholder=" " required>
                <label class="floating-label">Email<span class="required">*</span></label>
              </div>

              <button type="submit" class="reset-button">Send OTP</button>
              <div id="forgot-error-message" class="text-danger mt-2"></div>
              <div id="forgot-success-message" class="text-success mt-2"></div>
            </form>
          </div>

          <!-- Step 2: Reset Password -->
          <div id="reset-form-wrapper" class="hidden">
            <form id="reset-password-form" class="form-header">
              <h1 class="title-text">Reset Password</h1>
              <p class="subtitle-text">Enter the OTP sent to <strong id="reset-email"></strong>.</p>

              <div class="form-group floating">
                <input type="password" class="input-field" id="new-password" placeholder=" " required>
                <label class="floating-label">New Password<span class="required">*</span></label>
              </div>

              <div class="form-group floating">
                <input type="password" class="input-field" id="confirm-password" placeholder=" " required>
                <label class="floating-label">Confirm Password<span class="required">*</span></label>
              </div>

              <div class="form-group floating">
                <input type="text" class="input-field" id="otp" placeholder=" " required>
                <label class="floating-label">OTP<span class="required">*</span></label>
              </div>

              <button type="submit" class="reset-button">Reset Password</button>

              <div id="reset-error-message" class="text-danger mt-2"></div>
              <div id="reset-success-message" class="text-success mt-2"></div>
            </form>
          </div>

          <div class="back-to-login">
            Remember your password?
            <span class="text-primary back-to-login-trigger" style="cursor:pointer;">Back to Login</span>
          </div>
        </div>

        <div class="image-section">
          <img src="./images/login.png" alt="Reset Illustration" class="hero-image">
        </div>
      </div>
    </dialog>
    `}}class H{constructor(){this.init()}init(){document.getElementById("change-password")?.addEventListener("click",i=>{i.preventDefault(),this.openChangePasswordModal()}),document.getElementById("wico_btn-logout")?.addEventListener("click",i=>{i.preventDefault(),this.logout()}),document.querySelectorAll(".wico_btn-openLoginModal")?.forEach(i=>{i?.addEventListener("click",s=>{s.preventDefault(),this.openLoginModal()})}),document.querySelectorAll(".wico_btn-openSignupModal")?.forEach(i=>{i?.addEventListener("click",s=>{s.preventDefault(),this.openSignupModal()})})}async logout(){localStorage.removeItem("profile"),localStorage.removeItem("unsaved_widget"),await T("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async openLoginModal(r,g){f("signup-dialog"),document.getElementById("login-dialog")?.remove(),new E;const t=document.getElementById("login-dialog");if(t){const s=t.querySelector(".subtitle-wrapper");if(g&&s){const c=document.createElement("p");c.textContent=g,s?.appendChild(c)}const l=t.querySelector(".password-toggle");l?.addEventListener("click",()=>{const c=t.querySelector("#password");c.type==="password"?(c.type="text",l.textContent="visibility"):(c.type="password",l.textContent="visibility_off")}),t.querySelector(".close-button")?.addEventListener("click",()=>{f("login-dialog"),document.body.classList.remove("modal-open")}),t.querySelector(".signup-trigger")?.addEventListener("click",()=>{this.openSignupModal(r)}),t.querySelector(".forgot-password")?.addEventListener("click",()=>{new j});const o=t.querySelector("#remember-me");if(o&&localStorage.getItem("remember-me")==="true"){o.checked=!0;const a=localStorage.getItem("remembered-email");a&&(t.querySelector("#email").value=a)}const d=t.querySelector("form");d&&d.addEventListener("submit",c=>{c.preventDefault(),c.stopPropagation(),O(c)})}C("login-dialog"),document.body.classList.add("modal-open"),document.querySelector("#login-dialog #email")?.focus(),k("google-sign-in-button-login")}async openSignupModal(r){f("login-dialog"),document.getElementById("signup-dialog")?.remove(),new A;const e=document.getElementById("signup-dialog");if(e){e.querySelectorAll(".password-toggle").forEach(l=>{l.addEventListener("click",()=>{const o=l.closest(".password-field-wrapper")?.querySelector("input");o.type==="password"?(o.type="text",l.textContent="visibility"):(o.type="password",l.textContent="visibility_off")})}),e.querySelector(".close-button")?.addEventListener("click",()=>{f("signup-dialog"),document.body.classList.remove("modal-open")}),e.querySelector(".login-trigger")?.addEventListener("click",()=>{this.openLoginModal(r)});const s=e.querySelector("form");s&&s.addEventListener("submit",l=>{l.preventDefault(),l.stopPropagation(),F(l)})}C("signup-dialog"),document.body.classList.add("modal-open"),k("google-sign-in-button-signup")}async openChangePasswordModal(r,g){f("change-password-dialog"),document.getElementById("change-password-dialog")?.remove(),new _;const t=document.getElementById("change-password-dialog");if(t){const s=t.querySelector(".subtitle-wrapper");if(g&&s){const o=document.createElement("p");o.textContent=g,s?.appendChild(o)}t.querySelector(".close-button")?.addEventListener("click",()=>{f("change-password-dialog"),document.body.classList.remove("modal-open")}),t.addEventListener("click",o=>{const d=t.getBoundingClientRect();(o.clientX<d.left||o.clientX>d.right||o.clientY<d.top||o.clientY>d.bottom)&&(f("change-password-dialog"),document.body.classList.remove("modal-open"))});const m=t.querySelector("form");m&&(m.addEventListener("submit",async o=>{o.preventDefault(),o.stopPropagation();const d=t.querySelector("#old-password").value,c=t.querySelector("#new-password").value,a=t.querySelector("#confirm-password").value,n=t.querySelector("#password-error-message"),p=t.querySelector("#password-success-message");if(c!==a){n.textContent="New passwords do not match!",p.textContent="";return}const u={email:(await I())?.email||"",oldPassword:d,newPassword:c};try{const S=`${q?.boomURL}/api/changepassword`,v=await(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).json();v.success?(p.textContent=v.message||"Password changed successfully!",n.textContent="",x.successfullToast(p.textContent??"Password changed successfully!"),setTimeout(()=>{f("change-password-dialog"),document.body.classList.remove("modal-open")},1e3)):(n.textContent=v.message||"Could not change password.",p.textContent="",x.errorToast(n.textContent??"Could not change password."))}catch(b){console.error("Change password error:",b),n.textContent="Something went wrong. Please try again.",p.textContent="",x.errorToast(n.textContent??"Something went wrong. Please try again.")}}),t.addEventListener("keydown",o=>{if(o.key==="Enter")if(o.preventDefault(),m.checkValidity()){const d=new Event("submit",{cancelable:!0});m.dispatchEvent(d)}else m.reportValidity()}))}C("change-password-dialog"),document.body.classList.add("modal-open"),document.querySelector("#change-password-dialog #old-password")?.focus()}}class $ extends M{appName;_authService;constructor(r){super({}),this.appName=r,this._authService=B.getInstance()}async getHtml(){window.headerFunctions=D,window.logout=this._authService.logout,window.scrollToSection=this.scrollToSection;const r=await this._authService.getLoginInfo();return setTimeout(()=>{new H},0),`
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
                                        <li><a class="nav-dropdown-item" href="/courses">Courses</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex flex-fill justify-content-end" id="login-info">
                            ${r?r.loginInfoHTML:`
                                <button onclick="openLoginModal()" class="btn btn-outline-light me-2">Login</button>
                                <button onclick="openSignupModal()" class="btn btn-light">Sign Up</button>
                            `}
                        </div>
                    </div>
                </div>
            </nav>
        `}scrollToSection=async r=>{window.location.pathname!=="/"&&await R("/"),document.getElementById(r)?.scrollIntoView({behavior:"smooth"})}}export{H as A,$ as N};
