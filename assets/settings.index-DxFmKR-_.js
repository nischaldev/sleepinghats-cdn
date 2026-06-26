import{m as _}from"./mainView.class-C4NLGCWW.js";import{u as B,g as h,t as r,L as g}from"./index-CwsLmDGx.js";import{N as S}from"./navbar.component-CnsoU2bN.js";import{l as v,Z as f,C as x,P as T,t as L,H as E,m as C,e as P}from"./mftsccs-browser-ByWnpJPJ.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-CE23DveZ.js";class G extends _{constructor(a){super(a),this.setTitle("Settings")}async getHtml(){const a=await B(),i=await new S(a).getHtml(),n=await h(),c=n?.email?.slice(0,1)?.toUpperCase()||"?";return`
      ${i}
      <div class="sp-page">
        <div class="sp-container">

          <!-- Header -->
          <div class="sp-header">
            <div class="sp-header-avatar" id="sp-avatar">${c}</div>
            <div class="sp-header-info">
              <h1 class="sp-page-title">Account Settings</h1>
              <p class="sp-page-subtitle" id="sp-user-email">${n?.email||""}</p>
            </div>
          </div>

          <!-- Layout -->
          <div class="sp-layout">

            <!-- Left nav -->
            <nav class="sp-nav">
              <button class="sp-nav-item active" data-section="sp-profile">
                <span class="material-symbols-outlined">person</span>
                <span>Profile</span>
              </button>
              <button class="sp-nav-item" data-section="sp-security">
                <span class="material-symbols-outlined">lock</span>
                <span>Security</span>
              </button>
              <button class="sp-nav-item" data-section="sp-token">
                <span class="material-symbols-outlined">key</span>
                <span>Access Token</span>
              </button>
            </nav>

            <!-- Content -->
            <div class="sp-content">

              <!-- ── Profile ──────────────────────────────────── -->
              <div class="sp-section active" id="sp-profile">
                <div class="sp-card">
                  <div class="sp-card-header">
                    <p class="sp-card-title">Edit Profile</p>
                    <p class="sp-card-desc">Update your display name.</p>
                  </div>
                  <div class="sp-card-body">
                    <div class="sp-row">
                      <div class="sp-field">
                        <label class="sp-label">First Name</label>
                        <input type="text" class="sp-input" id="sp-firstname" placeholder="Enter first name" />
                      </div>
                      <div class="sp-field">
                        <label class="sp-label">Last Name</label>
                        <input type="text" class="sp-input" id="sp-lastname" placeholder="Enter last name" />
                      </div>
                    </div>
                    <div class="sp-field">
                      <label class="sp-label">Email</label>
                      <input type="email" class="sp-input" id="sp-email" value="${n?.email||""}" readonly />
                    </div>
                    <div class="sp-btn-row">
                      <button class="sp-btn-primary" id="sp-save-profile-btn">Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ── Security ─────────────────────────────────── -->
              <div class="sp-section" id="sp-security">
                <div class="sp-card">
                  <div class="sp-card-header">
                    <p class="sp-card-title">Change Password</p>
                    <p class="sp-card-desc">Choose a strong password you don't use elsewhere.</p>
                  </div>
                  <div class="sp-card-body">
                    <div class="sp-field">
                      <label class="sp-label">Current Password</label>
                      <input type="password" class="sp-input" id="sp-current-password" placeholder="••••••••" autocomplete="current-password" />
                    </div>
                    <div class="sp-row">
                      <div class="sp-field">
                        <label class="sp-label">New Password</label>
                        <input type="password" class="sp-input" id="sp-new-password" placeholder="••••••••" autocomplete="new-password" />
                      </div>
                      <div class="sp-field">
                        <label class="sp-label">Confirm Password</label>
                        <input type="password" class="sp-input" id="sp-confirm-password" placeholder="••••••••" autocomplete="new-password" />
                      </div>
                    </div>
                    <div class="sp-btn-row">
                      <button class="sp-btn-primary" id="sp-change-password-btn">Update Password</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ── Access Token ─────────────────────────────── -->
              <div class="sp-section" id="sp-token">
                <div class="sp-card">
                  <div class="sp-card-header">
                    <p class="sp-card-title">OAuth Credentials</p>
                    <p class="sp-card-desc">Use these to generate short-lived tokens for API access.</p>
                  </div>
                  <div class="sp-card-body">
                    <div class="sp-field">
                      <label class="sp-label">Client ID</label>
                      <div class="sp-secret-row">
                        <input id="sp-client-id" type="password" readonly class="sp-input" />
                        <button type="button" class="sp-icon-btn" id="sp-client-id-copy" title="Copy">
                          <span class="material-symbols-outlined">content_copy</span>
                        </button>
                        <button type="button" class="sp-icon-btn" id="sp-client-id-show" title="Show / Hide">
                          <span class="material-symbols-outlined">visibility</span>
                        </button>
                      </div>
                    </div>
                    <div class="sp-field">
                      <label class="sp-label">Client Secret</label>
                      <div class="sp-secret-row">
                        <input id="sp-client-secret" type="password" readonly class="sp-input" placeholder="Click Generate →" />
                        <button type="button" class="sp-icon-btn" id="sp-secret-copy" title="Copy" disabled>
                          <span class="material-symbols-outlined">content_copy</span>
                        </button>
                        <button type="button" class="sp-gen-btn" id="sp-generate-secret">
                          <span class="material-symbols-outlined">autorenew</span>
                          <span>Generate</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sp-card">
                  <div class="sp-card-header">
                    <p class="sp-card-title">Usage</p>
                    <p class="sp-card-desc">Exchange your credentials for a short-lived access token.</p>
                  </div>
                  <div class="sp-card-body">
                    <div class="sp-token-url-row">
                      <span class="sp-token-url-label">Token URL</span>
                      <span id="sp-token-url" class="sp-token-url-badge"></span>
                    </div>
                    <div class="sp-code-block">
                      <div class="sp-code-header">
                        <span class="sp-code-lang">javascript</span>
                        <button class="sp-code-copy-btn" id="sp-code-copy">
                          <span class="material-symbols-outlined">content_copy</span>
                          Copy
                        </button>
                      </div>
                      <pre id="sp-code-snippet"></pre>
                    </div>
                  </div>
                </div>
              </div>

            </div><!-- /.sp-content -->
          </div><!-- /.sp-layout -->
        </div><!-- /.sp-container -->
      </div><!-- /.sp-page -->
    `}async componentDidMount(){const a=await h();if(!a)return;const o=document.getElementById("sp-client-id"),i=document.getElementById("sp-token-url"),n=document.getElementById("sp-code-snippet");if(o&&(o.value=String(a.entityId||"")),i&&(i.textContent=`${v.BASE_URL}/api/oauth/token`),n&&(n.textContent=`const form = new FormData();
form.append("client_id", "${a.entityId}");
form.append("client_secret", "YOUR_CLIENT_SECRET");

const res = await fetch("${v.BASE_URL}/api/oauth/token", {
  method: "POST",
  body: form,
});
const { token } = await res.json();
console.log(token); // short-lived access token`),a.entityId)try{const e=new f;e.typeConnection="the_entity_firstname",e.name="entity_firstname";const s=new f;s.typeConnection="the_entity_lastname",s.name="entity_lastname";const t=new f;t.type="the_entity",t.name="top",t.conceptIds=[a.entityId],t.freeschemaQueries=[e,s],t.outputFormat=x,await T(t,"").subscribe(m=>{const I=m?.[0]?.the_entity?.the_entity_firstname?.the_firstname||"",k=m?.[0]?.the_entity?.the_entity_lastname?.the_lastname||"",b=document.getElementById("sp-firstname"),w=document.getElementById("sp-lastname");b&&(b.value=I),w&&(w.value=k)})}catch(e){console.error("Failed to load profile name:",e)}document.querySelectorAll(".sp-nav-item").forEach(e=>{e.addEventListener("click",()=>{const s=e.dataset.section;s&&(document.querySelectorAll(".sp-nav-item").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".sp-section").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(s)?.classList.add("active"))})});const c=(e,s)=>{const t=e.querySelector(".material-symbols-outlined");t&&(t.textContent="check",t.style.color="#4ade80",setTimeout(()=>{t.textContent="content_copy",t.style.color=""},1500))};document.getElementById("sp-client-id-copy")?.addEventListener("click",e=>{const s=o?.value||"";navigator.clipboard.writeText(s).then(()=>c(e.currentTarget)).catch(()=>{})}),document.getElementById("sp-client-id-show")?.addEventListener("click",e=>{this.toggleVisibility("sp-client-id",e.currentTarget)});const l=document.getElementById("sp-generate-secret"),d=document.getElementById("sp-client-secret"),p=document.getElementById("sp-secret-copy");l?.addEventListener("click",async()=>{const e=l.querySelector(".material-symbols-outlined"),s=l.querySelector("span:last-child");l.disabled=!0,e&&e.classList.add("sp-spinning"),s&&(s.textContent="Generating…");try{const t=await this.generateSecret(a.token);d&&(d.value=t),p&&(p.disabled=!1,p.onclick=()=>{navigator.clipboard.writeText(t).then(()=>c(p,!0)).catch(()=>{})}),d&&(d.type="text"),setTimeout(()=>{d&&(d.type="password")},8e3)}catch{r.errorToast("Failed to generate secret")}finally{e&&e.classList.remove("sp-spinning"),s&&(s.textContent="Generate"),l.disabled=!1}}),document.getElementById("sp-code-copy")?.addEventListener("click",e=>{navigator.clipboard.writeText(n?.textContent||"").then(()=>{const s=e.currentTarget;s.style.color="#4ade80";const t=s.querySelector(".material-symbols-outlined");t&&(t.textContent="check"),setTimeout(()=>{s.style.color="",t&&(t.textContent="content_copy")},1500)}).catch(()=>{})});const u=document.getElementById("sp-save-profile-btn");u?.addEventListener("click",async()=>{const e=document.getElementById("sp-firstname")?.value?.trim(),s=document.getElementById("sp-lastname")?.value?.trim();u.disabled=!0,u.textContent="Saving…";try{await this.saveProfile(e,s,a),r.successfullToast("Profile updated!")}catch{r.errorToast("Failed to update profile")}finally{u.textContent="Save Changes",u.disabled=!1}});const y=document.getElementById("sp-change-password-btn");y?.addEventListener("click",async()=>{const e=document.getElementById("sp-current-password")?.value,s=document.getElementById("sp-new-password")?.value,t=document.getElementById("sp-confirm-password")?.value;if(!e||!s||!t){r.errorToast("Please fill in all password fields");return}if(s!==t){r.errorToast("New passwords do not match");return}y.disabled=!0,y.textContent="Updating…";try{await this.changePassword(e,s,a.token,a.email),r.successfullToast("Password changed!"),["sp-current-password","sp-new-password","sp-confirm-password"].forEach(m=>{document.getElementById(m).value=""})}catch(m){r.errorToast(m.message||"Failed to change password")}finally{y.textContent="Update Password",y.disabled=!1}})}toggleVisibility(a,o){const i=document.getElementById(a);if(!i)return;const n=o.querySelector(".material-symbols-outlined");i.type==="password"?(i.type="text",n&&(n.textContent="visibility_off")):(i.type="password",n&&(n.textContent="visibility"))}async saveProfile(a,o,i){const n=i.entityId,c=i.userId,l=await L(n);await E(n,"the_entity_firstname");const d=await C("the_firstname",a,!1,c,4,999);await g(l,d,"firstname"),await E(n,"the_entity_lastname");const p=await C("the_lastname",o,!1,c,4,999);await g(l,p,"lastname"),await P.SyncDataOnline()}async changePassword(a,o,i,n){const c=await fetch(`${v.BASE_URL}/api/Auth/change-password`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({email:n,currentPassword:a,newPassword:o})}),l=await c.json();if(!c.ok||l.success===!1)throw new Error(l.message||"Failed to change password")}async generateSecret(a){const o=await fetch(`${v.BASE_URL}/api/client-secret`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}),i=await o.json();if(!o.ok)throw new Error(i.message||"Failed to generate secret");return i.message}}export{G as default};
