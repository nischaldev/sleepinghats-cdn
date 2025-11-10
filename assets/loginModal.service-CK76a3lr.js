import{w as I,L as M}from"./mftsccs-browser-kNLGvA95.js";import{B as g,L as y,H as b,N as w,A as h}from"./index-Dz4PTI4P.js";class S{constructor(){this.init()}init(){const s=this.getHtml();document.querySelector("body #app")?.insertAdjacentHTML("afterend",s)}getHtml(){return`
    <dialog id="login-dialog" class="login-modal">
      <div class="login-container">
        <button class="close-button" type="button">
          <span class="material-symbols-outlined">close</span>
        </button>
        <div class="login-form-wrapper">
          <form class="form-header">
            <h1 class="welcome-text">Welcome!</h1>
            <div class="subtitle-wrapper">
              <p>Let's get you started.</p>
            </div>
            
            <div class="form-content">
              <div class="form-group floating">
                <input 
                  type="email" 
                  class="input-field" 
                  id="email" 
                  name="email"
                  autocomplete="user-email"
                  placeholder=" "
                  required
                >
                <label class="floating-label">
                  Email
                  <span class="required">*</span>
                </label>
              </div>

              <div class="form-group floating">
                <div class="password-field-wrapper">
                  <input 
                    type="password" 
                    class="input-field" 
                    id="password"
                    name="password"
                    autocomplete="current-password"
                    placeholder=" "
                    required
                  >
                  <label class="floating-label">
                    Password
                    <span class="required">*</span>
                  </label>
                  <span class="material-symbols-outlined password-toggle">
                    visibility_off
                  </span>
                </div>
              </div>

              <div class="form-options">
                <div class="remember-wrapper">
                  <input type="checkbox" id="remember-me" class="form-check-input">
                  <label class="remember-text" for="remember-me">Remember me</label>
                </div>
                <!-- <a href="#" class="forgot-password">Forget your password?</a> -->
              </div>

              <button type="submit" id="login-btn" class="login-button">Log In</button>

              <div id="login-error-message"></div>
            </div>
          </form>

          <div class="divider">
            <div class="divider-line"></div>
            <span>Or login with</span>
            <div class="divider-line"></div>
          </div>

          <div id="google-sign-in-button-login" class="w-100 mb-4"></div>

          <div class="signup-prompt">
            Don't have an account? 
            <span class="text-primary signup-trigger" style="cursor: pointer;">Sign Up</span>
          </div>
        </div>

        <div class="image-section">
          <img src="./images/login.png" alt="Visual Development Environment" class="hero-image">
        </div>
      </div>
    </dialog>
    `}}class q{constructor(){this.init()}init(){const s=this.getHtml();document.querySelector("body #app")?.insertAdjacentHTML("afterend",s)}getHtml(){return`
    <dialog id="signup-dialog" class="signup-modal">
      <div class="signup-container">
        <button class="close-button">
          <span class="material-symbols-outlined">close</span>
        </button>
        
        <div class="signup-image-section">
          <img src="./images/signup.png" alt="Visual Development Environment" class="signup-hero-image">
        </div>

        <div class="signup-form-wrapper">
          <form method="dialog" class="form-header">
            <h1 class="welcome-text">Create an Account</h1>
            <div class="subtitle-wrapper">
              <p>Already have an account? <span class="text-primary login-trigger" style="cursor: pointer;">Log in</span></p>
            </div>
            
            <div class="form-content">
              <div class="form-group floating">
                <select class="input-field" id="type" name="type" required>
                  <option value="" selected></option>
                  <option value="person">Person</option>
                  <option value="company">Company</option>
                  <option value="student">Student</option>
                </select>
                <label class="floating-label">
                  Select Type
                  <span class="required">*</span>
                </label>
              </div>

              <div class="form-row">
                <div class="form-group floating flex-1">
                  <select class="input-field" id="title" name="title" required>
                    <option value="" selected></option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="miss">Miss</option>
                    <option value="others">Others</option>
                  </select>
                  <label class="floating-label">
                    Gender
                    <span class="required">*</span>
                  </label>
                </div>

                <div class="form-group floating flex-1">
                  <input type="text" class="input-field" id="username" name="username" placeholder=" " required>
                  <label class="floating-label">
                    Username
                    <span class="required">*</span>
                  </label>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group floating flex-1">
                  <input type="text" class="input-field" id="firstname" name="firstname" placeholder=" " required>
                  <label class="floating-label">
                    First Name
                    <span class="required">*</span>
                  </label>
                </div>

                <div class="form-group floating flex-1">
                  <input type="text" class="input-field" id="lastname" name="lastname" placeholder=" " required>
                  <label class="floating-label">
                    Last Name
                    <span class="required">*</span>
                  </label>
                </div>
              </div>

              <div class="form-group floating">
                <input type="email" class="input-field" id="signup-email" name="email" placeholder=" " required>
                <label class="floating-label">
                  Email
                  <span class="required">*</span>  
                </label>
              </div>

              <div class="form-group floating">
                <div class="password-field-wrapper">
                  <input type="password" class="input-field" id="signup-password" name="password" placeholder=" " required>
                  <label class="floating-label">
                    Password
                    <span class="required">*</span>
                  </label>
                  <span class="material-symbols-outlined password-toggle">
                    visibility_off
                  </span>
                </div>
              </div>

              <div class="form-group floating">
                <div class="password-field-wrapper">
                  <input type="password" class="input-field" id="confirm-password" name="confirm-password" placeholder=" " required>
                  <label class="floating-label">
                    Confirm password
                    <span class="required">*</span>
                  </label>
                  <span class="material-symbols-outlined password-toggle">
                    visibility_off
                  </span>
                </div>
              </div>

              <div class="form-group">
                <div class="remember-wrapper">
                  <input type="checkbox" id="privacyPolicy" name="privacyPolicy" class="form-check-input" required>
                  <label class="remember-text" for="privacyPolicy">
                    I agree to the <a href="#" class="text-primary">Terms & Conditions</a>
                    <span class="required">*</span>
                  </label>
                </div>
                <div id="privacyPolicyError" class="error-message" style="display: none;">
                  <span class="material-symbols-outlined">error</span>
                  Please accept the Terms & Conditions
                  <span class="required">*</span>
                </div>
              </div>

              <button type="submit" id="signup-btn" class="login-button">Create account</button>

              <div id="signup-error-message"></div>
            </div>
          </form>

          <div class="divider">
            <div class="divider-line"></div>
            <span>Or register with</span>
            <div class="divider-line"></div>
          </div>

          <div id="google-sign-in-button-signup" class="w-100 mb-1"></div>
        </div>
      </div>
    </dialog>
    `}}async function L(d,s){g("signup-dialog"),document.getElementById("login-dialog")?.remove(),new S;const e=document.getElementById("login-dialog");if(e){const r=e.querySelector(".subtitle-wrapper");if(s&&r){const o=document.createElement("p");o.textContent=s,r?.appendChild(o)}const a=e.querySelector(".password-toggle");a?.addEventListener("click",()=>{const o=e.querySelector("#password");o.type==="password"?(o.type="text",a.textContent="visibility"):(o.type="password",a.textContent="visibility_off")}),e.querySelector(".close-button")?.addEventListener("click",()=>{g("login-dialog"),document.body.classList.remove("modal-open")}),e.addEventListener("click",o=>{const l=e.getBoundingClientRect();(o.clientX<l.left||o.clientX>l.right||o.clientY<l.top||o.clientY>l.bottom)&&(g("login-dialog"),document.body.classList.remove("modal-open"))}),e.querySelector(".signup-trigger")?.addEventListener("click",()=>{P()});const p=e.querySelector("#remember-me");if(p&&localStorage.getItem("remember-me")==="true"){p.checked=!0;const l=localStorage.getItem("remembered-email");l&&(e.querySelector("#email").value=l)}const m=e.querySelector("form");m&&(m.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),H(o)}),e.addEventListener("keydown",o=>{if(o.key==="Enter")if(o.preventDefault(),m.checkValidity()){const l=new Event("submit",{cancelable:!0});m.dispatchEvent(l)}else m.reportValidity()}))}y("login-dialog"),document.body.classList.add("modal-open"),document.querySelector("#login-dialog #email")?.focus(),E("google-sign-in-button-login")}async function E(d){const s=document.getElementById(d);s?(google.accounts.id.initialize({client_id:b.CLIENT_ID,callback:x}),google.accounts.id.renderButton(s,{theme:"outline",size:"large"})):console.error("Google sign-in button container not found!")}async function x(d){const s=document.getElementById("login-error-message");try{const t=d.credential,e={accessToken:t},r=`${b?.baseNodeUrl}/api/v1/googleauth`,a=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(v=>v.json()),p=k(t)?.email,o=await new I().checkUniqueness("the_primary_email",p.trim()),l=new FormData;let u;if(o){if(g("login-dialog"),g("signup-dialog"),u=await T(),l.append("access_token",t),l.append("title",u.title),l.append("username",u.username),l.append("application","appBuilder"),!u){s.innerHTML='<p class="text-danger my-3">User details are required!</p>';return}}else l.append("access_token",t);if(a){g("login-dialog"),g("signup-dialog");const v=await fetch(`${b.boomURL}/api/google-login-v2`,{method:"POST",body:l}).then(i=>i.json());if(v){await w(v);const i=await h.getInstance().getLoginInfo(),f=document.getElementById("login-info");f.innerHTML=i,location.reload()}else s.innerHTML=`
          <div class="error-message">
            <span class="material-symbols-outlined">error</span>
            ${v?.message}
          </div>
        `,console.error("Google Login Failed:",v)}else console.error("Google Auth Failed:",a),s.innerHTML=`
      <div class="error-message">
        <span class="material-symbols-outlined">error</span>
        ${a?.message}
      </div>
    `}catch(t){console.error("Error during Google Sign-In:",t),s.innerHTML=`
      <div class="error-message">
        <span class="material-symbols-outlined">error</span>
        Error during Google Sign-In:${t}
      </div>
    `}}async function T(){return new Promise(d=>{document.body.insertAdjacentHTML("beforeend",`
<div id="user-details-modal" class="modal d-block" tabindex="-1" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content p-4 rounded-3">
      <h3 class="mb-4">Complete Your Profile</h3>
      <form id="user-details-form">
        <div class="mb-3">
          <label for="title" class="form-label">Select Title<span class="text-danger">*</span></label>
          <select id="title" name="title" class="form-select" required>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="miss">Miss</option>
            <option value="others">Others</option>
          </select>
          <span id="title-error" class="text-danger small"></span>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username<span class="text-danger">*</span></label>
          <input type="text" id="username-complete" name="username" class="form-control" required placeholder="username" />
          <span id="username-error" class="text-danger small"></span>
        </div>
        <div class="d-flex justify-content-end gap-2">
          <button class="btn btn-secondary cancel-btn" type="button" id="cancel-btn">Cancel</button>
          <button id="signup-btn" type="submit" class="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
  `);const t=document.getElementById("user-details-modal");document.getElementById("cancel-btn").addEventListener("click",function(){t?.remove()});const e=document.getElementById("user-details-form"),n=document.getElementById("title"),r=document.getElementById("username-complete"),a=document.getElementById("title-error"),c=document.getElementById("username-error");e.addEventListener("submit",async p=>{p.preventDefault();const m=n.value.trim(),o=r.value.trim();let l=!0;m?a.textContent="":(a.textContent="Title is required.",l=!1),o?await B(o)?(c.textContent="The username already exists. Please choose another.",l=!1):c.textContent="":(c.textContent="Username is required.",l=!1),l&&(t?.remove(),d({title:m,username:o}))})})}async function B(d){try{return!!(await(await fetch(`${b.baseNodeUrl}/api/v1/username/${d}`)).json())?.data?.username}catch(s){return console.error("Error checking username:",s),!0}}function k(d){try{const t=d.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(atob(t).split("").map(n=>`%${`00${n.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));return JSON.parse(e)}catch(s){return console.error("Invalid JWT token",s),null}}const C=async d=>{const t=`${b?.baseURL}/signin`;let e;const n=new Headers;n.append("Content-Type","application/json");try{const r=await fetch(t,{method:"POST",headers:n,body:JSON.stringify(d),redirect:"follow"}),a=await r.json();return r.ok?e={message:"success",status:!0,statusCode:200,data:a?.data}:e={message:"Invalid credentials",status:!1,statusCode:r.status,data:""},e}catch(r){return console.error("Sign in api error",r),e={message:"error",status:!1,statusCode:500,data:""},e}};async function H(d){d.preventDefault();const s=d.target,t=document.getElementById("login-error-message"),e=s.querySelector('button[type="submit"]');e.disabled=!0,e.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Logging in...';try{const n=new FormData(s),r={email:n.get("email"),password:n.get("password")};s.querySelector("#remember-me")?.checked?(localStorage.setItem("remember-me","true"),localStorage.setItem("remembered-email",r.email)):(localStorage.removeItem("remember-me"),localStorage.removeItem("remembered-email"));const c=await C(r);if(c?.statusCode===200){await w(c);const p=await h.getInstance().getLoginInfo(),m=document.getElementById("login-info");m.innerHTML=p,g("login-dialog"),location.reload()}else t&&(t.innerHTML=`
          <div class="error-message">
            <span class="material-symbols-outlined">error</span>
            ${c?.message}
          </div>
        `)}catch(n){console.error("Login error:",n),t&&(t.innerHTML=`
        <div class="error-message">
          <span class="material-symbols-outlined">error</span>
          An error occurred during login. Please try again.
        </div>
      `)}finally{e.disabled=!1,e.innerHTML="Log In"}}async function P(d){g("login-dialog"),document.getElementById("signup-dialog")?.remove(),new q;const t=document.getElementById("signup-dialog");if(t){t.querySelectorAll(".password-toggle").forEach(a=>{a.addEventListener("click",()=>{const p=a.closest(".password-field-wrapper")?.querySelector("input");p.type==="password"?(p.type="text",a.textContent="visibility"):(p.type="password",a.textContent="visibility_off")})}),t.querySelector(".close-button")?.addEventListener("click",()=>{g("signup-dialog"),document.body.classList.remove("modal-open")}),t.addEventListener("click",a=>{const c=t.getBoundingClientRect();(a.clientX<c.left||a.clientX>c.right||a.clientY<c.top||a.clientY>c.bottom)&&(g("signup-dialog"),document.body.classList.remove("modal-open"))}),t.querySelector(".login-trigger")?.addEventListener("click",()=>{L()});const r=t.querySelector("form");r&&r.addEventListener("submit",a=>{a.preventDefault(),a.stopPropagation(),D(a)})}y("signup-dialog"),document.body.classList.add("modal-open"),E("google-sign-in-button-signup")}async function D(d){d.preventDefault();const s=document.getElementById("signup-error-message");s.querySelector("p")?.remove();const e=d.target,n=e.elements;let r=!0;for(let i=0;i<n.length;i++)n[i].style.border="";for(let i=0;i<n.length;i++){const f=n[i];f.required&&f.value.trim()===""&&(f.style.border="1px solid red",r=!1)}const a=n.password.value,c=n["confirm-password"].value;if(a!==c){r=!1;const i=document.getElementById("confirm-password");i.style.border="1px solid red";const f=document.createElement("p");f.classList.add("text-danger"),f.innerText="Passwords do not match!",s.appendChild(f)}const p=document.getElementById("privacyPolicy"),m=document.getElementById("privacyPolicyError");if(p.checked?m.style.display="none":(r=!1,m.style.display="block"),!r)return;const o=document.getElementById("signup-btn");o.disabled=!0,o.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting';const l=new FormData(e),u=Object.fromEntries(l);for(let i=0;i<n.length;i++)n[i].disabled=!0;const v={entityType:u?.type,title:u?.title,fname:u?.firstname,lname:u?.lastname,timestamp:new Date().toISOString(),username:u?.username,email:u?.email,password:u?.password,application:"appBuilder"};try{(await M(v)).success?(g("signup-dialog"),L()):s.innerHTML='<p class="text-danger">Signup failed. Please try again.</p>'}catch(i){console.error("Signup API error:",i),s.innerHTML='<p class="text-danger">An unexpected error occurred. Please try again.</p>'}for(let i=0;i<n.length;i++)n[i].disabled=!1;o.disabled=!1,o.innerHTML="Save Now"}export{S as L,q as S,D as a,L as o,E as r,H as s};
