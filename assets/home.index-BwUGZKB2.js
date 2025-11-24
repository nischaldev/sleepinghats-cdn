import{m as j}from"./mainView.class-C4NLGCWW.js";import{a as V,g as z,t as S,s as O,l as M,S as r,b as $,d as K,w as f,e as Q,f as R,h as J,P as G,_ as Y,A as U,n as X,C as Z,i as ee,j as C,k as E,m as te,o as ie,T as ae,r as se,p as ne,q as oe,u as re,x as le,y as de,z as ce,B as me,D as ue,E as pe,F as ge,G as ve,H as he}from"./index-ChxK8MpS.js";import{A as be,N as we}from"./navbar.component-nEnymdJT.js";import{K as T,_ as ye,Q as fe,A as xe,m as _e}from"./mftsccs-browser-CcapBeGk.js";import"./vendor-DEYWGvhS.js";import"./codemirror-D1H9tReK.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./ckeditor-Cw9bcqxY.js";import"./loginModal.service-DAgNSL7B.js";function ke(){document.addEventListener("keydown",function(e){e.ctrlKey&&e.altKey&&e.key==="d"?(e.preventDefault(),Se()):e.ctrlKey&&e.altKey&&e.key==="c"?(e.preventDefault(),Ce()):e.ctrlKey&&e.altKey&&e.key==="r"?(e.preventDefault(),Ee()):e.ctrlKey&&e.altKey&&e.key==="f"&&(e.preventDefault(),Te())})}function Se(){const e=document.getElementById("designSplitViewButton"),t=new Event("click",{bubbles:!0,cancelable:!0});e&&e.dispatchEvent(t)}function Ce(){const e=document.querySelector(".codeSplitViewButton"),t=new Event("click",{bubbles:!0,cancelable:!0});e&&e.dispatchEvent(t)}async function Ee(){await V.synchronizeWidget("Widget Synchronized")}async function Te(){if(document.getElementById("codeBlocksContainer")?.classList.contains("visible")){const t=document.getElementById("widgetButtionCodeViewWrapper"),i="fullscreen";t?.classList.contains(i)?t?.classList.remove(i):t?.classList.add(i)}}function Le(){const e=document.getElementById("tour-container");e&&e.remove()}async function Me(){let e=document.getElementById("select-environment-dropdown");if(!e){console.warn("Environment dropdown not found");return}const i=(await z())?.entityId;if(!i){console.warn("Entity ID not found in profile data");return}let s=new T;s.name="environment",s.typeConnection="the_entity_s_environment",s.selectors=["the_environment_name","the_environment_value"];let n=new T;n.name="entity",n.conceptIds=[i],n.freeschemaQueries=[s];let d=await ye(n,""),l=[];for(let o=0;o<d.length;o++){let c=d[o]?.the_entity;if(c){let m=c?.the_entity_s_environment;const u=Array.isArray(m)?m:[m].filter(Boolean);for(let v of u){let h=v?.the_environment;if(h){let y=h?.the_environment_name?.the_name||"Unnamed",p=h?.the_environment_value?.the_environment_value;if(p)try{p=JSON.parse(p)}catch(b){console.error("Error parsing environment values:",b),p=null}let x={name:y,values:p};l.push(x)}}}}for(let o=0;o<l.length;o++){let c=l[o]?.name;const m=document.createElement("option");m.value=o.toString(),m.textContent=c,e.appendChild(m)}e.addEventListener("change",function(){const o=Number(this.value),c=l[o];if(!c||!c.values){console.warn("No environment values found for selected environment");return}const m=c.values;for(const u in m)if(Object.prototype.hasOwnProperty.call(m,u)){const v=m[u];fe.setValue(u,v),console.log(`Set ${u}:`,v)}})}async function We(){window.addEventListener("online",()=>L()),window.addEventListener("offline",()=>L())}const L=()=>{navigator.onLine?S.infoMessageToast("Internet is back. You are online now.",3):(O(),S.infoMessageToast("You are offline - changes will be saved locally.",3))};class Ae{constructor(){this.init()}init(){document.getElementById("wico_btn-toggle-rightPanel")?.addEventListener("click",i=>{this.toggleRightPanel(i)})}toggleRightPanel(t){const i=t?.target,s=document.getElementById("right-aside"),n=document.getElementById("column-right"),d=document.getElementById("midContent"),l=i?.querySelector("span");s&&(s?.classList.contains("d-none")?(s?.classList.remove("d-none"),n?.classList.add("col-md-3"),d?.classList.remove("col-md-12"),d?.classList.add("col-md-9"),l.textContent="start",i.title="Hide panel",i.classList.add("btn-togglePanel-close"),i.classList.remove("btn-togglePanel-open")):(s?.classList.add("d-none"),n?.classList.remove("col-md-3"),d?.classList.remove("col-md-9"),d?.classList.add("col-md-12"),l.textContent="keyboard_tab_rtl",i.title="Show panel",i.classList.remove("btn-togglePanel-close"),i.classList.add("btn-togglePanel-open")))}}class Ie{convertingId=0;convertedData;constructor(t){this.convertingId=t}async init(){const t=await xe(Number(this.convertingId)),i=t?.boomgpt?.data_type;this.convertedData=await new Promise(async s=>{switch(i){case"full_page":const n=t?.boomgpt?.full_text,l=new DOMParser().parseFromString(n,"text/html"),o=l.body,c=await Promise.all(Array.from(o.querySelectorAll("script[src]")).map((a,g)=>({order:g,url:a.src})));Array.from(o.querySelectorAll("script[src]"))?.forEach(a=>{a.remove()});const m=o.querySelectorAll("script:not([src])");let u="";m.forEach(a=>{u+=a.textContent}),Array.from(o.querySelectorAll("script:not([src])"))?.forEach(a=>{a.remove()});const v=Array.from(l.head.querySelectorAll("link[rel='stylesheet'")).map((a,g)=>({order:g,url:a.href})),h=l.head.querySelectorAll("style");let y="";h.forEach(a=>{y+=a.textContent}),r.staticWidgetTree.html=o.innerHTML,r.staticWidgetTree.css=y,r.staticWidgetTree.library.css=v,r.staticWidgetTree.library.js=c,r.staticWidgetTree.before_render="this.render();",r.staticWidgetTree.after_render=u;break;case"all":const p=t?.boomgpt?.visual_text,b=new DOMParser().parseFromString(p,"text/html"),w=b.body,W=await Promise.all(Array.from(w.querySelectorAll("script[src]")).map((a,g)=>({order:g,url:a.src})));Array.from(w.querySelectorAll("script[src]"))?.forEach(a=>{a.remove()});const A=w.querySelectorAll("script:not([src])");let _="";A.forEach(a=>{_+=a.textContent}),Array.from(w.querySelectorAll("script:not([src])"))?.forEach(a=>{a.remove()});const I=Array.from(b.head.querySelectorAll("link[rel='stylesheet'")).map((a,g)=>({order:g,url:a.href})),D=b.head.querySelectorAll("style");let k="";D.forEach(a=>{k+=a.textContent}),r.staticWidgetTree.html=w.innerHTML,r.staticWidgetTree.css=k,r.staticWidgetTree.library.css=I,r.staticWidgetTree.library.js=W,r.staticWidgetTree.before_render="this.render();",r.staticWidgetTree.after_render=_;break;case"plain_text":const H=t?.boomgpt?.visual_text,B=new DOMParser().parseFromString(H,"text/html").body;r.staticWidgetTree.html=B.innerHTML;break;case"only_images":const F=t?.boomgpt?.images?.map(a=>`
          <div class="cw_image-card">
            <div class="cw_card cw_image">
              <img src="${a.path}" alt='${a.title}' loading="lazy">
            </div>
          </div>
          `).join("");r.staticWidgetTree.html=F,r.staticWidgetTree.css=`
          .cw_image-card {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }
          .cw_image-card .cw_card {
            height: 100%;
          }
          .cw_image-card .cw_image {
            padding: 20px;
          }
          .cw_image-card .cw_image img {
           max-width: 100%;
          }
        `;break;case"sticky_note":const P=t?.boomgpt?.sticky_note,q=new DOMParser().parseFromString(P,"text/html").body;r.staticWidgetTree.html=q.innerHTML;break;case"widget":const N=new Event("loadWidget");await M(N,Number(t?.boomgpt?.widget_id));break}i!=="widget"&&(await $(r.staticWidgetTree),await K(r.staticWidgetTree,!1),f.enableWidgetButtons(),await Q()),s("converted")}),console.log("convertedData --->",this.convertedData)}}class Je extends j{the_params;page_id;widget_id;_sideNavbar;_tourStatus=!1;_loginStatus=!1;_pagesTSCCSService;_authService;ctowData;constructor(t){super(t),this._sideNavbar=new R,J.navbar=this._sideNavbar,this.the_params=t,this.ctowData=t?.ctow,this.page_id=t?.["page-id"],this.widget_id=t?.["widget-id"],this._pagesTSCCSService=new G,this.setTitle("Home | Widget Conceptualizer"),window._dragService=Y,this._authService=U.getInstance()}async componentDidMount(){if(this.page_id){const i=document.getElementById("midContent"),s=document.getElementById("right-aside"),n=await this._pagesTSCCSService.getPageById(Number(this.page_id));n?.error&&X();const d=n.data?.[`the_${Z.PAGE_COMP_NAME}`],l={type:ee.page,data:d,page_id:this.page_id},o=new C(l),c=new E(l);s.innerHTML=await c.getHtml(),i.innerHTML="",o.mount(i)}if(this.widget_id){const i=new Event("loadWidget");await M(i,Number(this.widget_id))}else f.disableWidgetButtons();if(this._sideNavbar.initialize(),te.renderActionHistory(),ke(),await We(),await ie(),Me(),new ae,(await this._authService?.getLoginInfo()).isLoggedIn&&(new be,new Ae,this.ctowData)){const i=document.getElementById("loading-text");i.textContent="Converting to Widget...";const s=JSON.parse(window.atob(this.ctowData)),n=new Ie(Number(s));await n.init(),console.log("convertData.convertedData",n.convertedData)}}async getHtml(){r.resetWidgetTree(),se(),ne();const t=await this._authService.getLoginInfo(),i=await oe();if(this._tourStatus=t.tourStatus,this._loginStatus=t.isLoggedIn,t&&t.isLoggedIn){window.closeTour=Le,window.createWidgetModalOpen=re,window.toggleElementMenu=le,window.editElementModalOpen=de,window.deleteElement=ce,window.closeModal=me,window.createNewElement=ue,window.headerFunctions=pe,window.uploadAttachment=ge,window.removeMyWidgetFromPublic=f.removeMyWidgetFromPublic;let s="";this._loginStatus&&!this._tourStatus&&(s=`
            <div class="row" id="tour-container">
                <div class="col-md-8 mx-auto">
                <p class="tour-toast">
                    <span class="material-symbols-outlined icon-tour-handshake">handshake</span>
                    Welcome to Widget Conceptualizer! The place to create and discover new widgets. <span class="btn-tour" id="btn-take-tour">Take a tour</span>
                    <span class="material-symbols-outlined icon-tour-close" onclick="closeTour(event)">cancel</span>
                </p>
                </div>
            </div>
        `);const n=await this._sideNavbar.getHtml(),l=await new C().getHtml(),c=await new E().getHtml();return new ve().init(),`
      <header class="wico_top-header">
        <div class="wico_header-section">
          <router-link href="/" class="logo">${i}<sup>BETA</sup></router-link>
          <button onclick="newWidget(event)" class="button-rounded" >
            <span class="material-symbols-outlined">
            add_circle
            </span> 
            Create New Widget
          </button>
        </div>
        <div class="wico_header-section header-mid-section">
        <button type="button" class="button-rounded selected" id="designSplitViewButton" title="Ctrl + Alt + d">
          <span class="material-symbols-outlined">design_services</span>
          Design
        </button>
        <button type="button" class="button-rounded codeSplitViewButton" title="Ctrl + Alt + c">
          <span class="material-symbols-outlined">code</span>
          Code
        </button>
        </div>
        <div class="wico_header-section header-bottom-section"
          </button> 
          <a href="/subscription" class="upgrade-button">Upgrade Plan</a>
          <button class="button-circle" title="Download" id="download-wdgt-btn" onclick="downloadWebsite(event)">
            <span class="material-symbols-outlined">
            download
            </span>
          </button>
          <!-- <button class="button-circle" title="Preview" id="preview-btn" onclick="previewWidget(event)">
            <span class="material-symbols-outlined">
            visibility
            </span>
          </button> -->
          <div id="login-info">
            ${t.loginInfoHTML}
          </div>
        </div>
      </header>
      <main class="app_builder" id="app_builder">
        <div class="container-fluid">
            ${s}
          <div class="row">

            <!-- LEFT Content floating -->
            <!-- <div class="col-md-3 d-flex flex-column gap-5 position-absolute" id="column-left"> -->
            <div class="w-auto d-flex px-0 flex-column gap-5 position-absolute" id="column-left">
              ${n}
            </div>

          <!-- MID Content -->
          <div class="col-md-9 midContent mx-auto" id="midContent">
            ${l}
          </div>
          <!-- RIGHT Content -->
          <div class="col-md-3 rightContent" id="column-right">
              <button class="btn-togglePanel-close" id="wico_btn-toggle-rightPanel" title="Hide panel">
                <span class="material-symbols-outlined">start</span>
              </button>
              <div class="right-aside" id="right-aside">
                ${c}
              </div>
          </div>
        </div>
        <div id="uiModel"></div>
        </div>
        </main>
      <footer>
      </footer>
    `}else{const n=await new we(i).getHtml();return setTimeout(async()=>{const d=document.getElementById("widgetGeneratorWidgetContainer");d&&await _e(he.ai_widget,d)},0),`
    ${n}
    <!-- Hero Section -->
    <section class="bg-dark text-white position-relative overflow-hidden min-vh-100 w-100 d-flex justify-content-center align-items-center">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-3 fw-bold mb-4 animate__animated animate__fadeIn">
                        Build Widgets Visually, <br>
                        <span class="text-primary">Code Effortlessly</span>
                    </h1>
                    <p class="lead fs-4 mb-5 animate__animated animate__fadeIn animate__delay-1s">
                        Create, customize, and share widgets with our intuitive drag-and-drop interface.
                    </p>
                    <div class="d-flex gap-3 justify-content-center justify-content-lg-start animate__animated animate__fadeIn animate__delay-2s">
                        <!-- <router-link href="" class="btn btn-primary btn-lg px-4 py-3" onclick="openSignupModal(event)">Start Building Free</router-link>
                        <router-link href="" class="btn btn-outline-light btn-lg px-4 py-3" onclick="openLoginModal(event)">Login</router-link>-->
                        <router-link class="btn btn-primary btn-lg px-4 py-3 wico_btn-openSignupModal">Start Building Free</router-link>
                        <router-link class="btn btn-outline-light btn-lg px-4 py-3 wico_btn-openLoginModal">Login</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="bg-light py-2" id="features">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold mb-4">Powerful Features</h2>
                <p class="lead text-muted">Everything you need to build amazing widgets</p>
            </div>

            <div class="row g-4">
                <!-- Feature 1 -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-3 mb-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z M16 11V4m-4 7V4"></path>
                                </svg>
                            </div>
                            <h3 class="h5">Drag-and-Drop Interface</h3>
                            <p class="text-muted">Build widgets visually by dragging elements onto the canvas. No coding required for basic layouts.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Feature 2 -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-3 mb-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                </svg>
                            </div>
                            <h3 class="h5">Nested Widgets</h3>
                            <p class="text-muted">Create complex layouts with parent-child relationships between widgets for maximum flexibility.</p>
                        </div>
                    </div>
                </div>

                <!-- Feature 3 -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-3 mb-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <h3 class="h5">Real-time Preview</h3>
                            <p class="text-muted">See changes instantly as you design, making it easy to refine your widgets in real-time.</p>
                        </div>
                    </div>
                </div>

                <!-- Feature 4 -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-3 mb-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 class="h5">Code Editor</h3>
                            <p class="text-muted">Built-in HTML, CSS, and JavaScript editors for advanced customization and control.</p>
                        </div>
                    </div>
                </div>

                <!-- Feature 5 -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-3 mb-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <h3 class="h5">Widget Management</h3>
                            <p class="text-muted">Save widgets privately or share them publicly with the community. Easy version control included.</p>
                        </div>
                    </div>
                </div>

                <!-- Feature 6 -->
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-3 mb-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                                </svg>
                            </div>
                            <h3 class="h5">Export & Import</h3>
                            <p class="text-muted">Export widgets as clean code or import existing components to enhance your library.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="bg-dark text-white py-5" id="howItWorks">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold mb-4">How It Works</h2>
                <p class="lead text-white-50">Build your widgets in three simple steps</p>
            </div>

            <div class="position-relative">
                <!-- Vertical Timeline Line -->
                <div class="position-absolute top-0 start-50 translate-middle-x d-none d-md-block" 
                     style="width: 2px; height: 100%; background-color: rgb(99, 102, 241); z-index: 1;"></div>

                <!-- Step 1 -->
                <div class="row mb-5 position-relative">
                    <div class="col-md-5 offset-md-1">
                        <div class="bg-dark bg-opacity-50 p-4 rounded-3">
                            <div class="text-primary h1 mb-3">01</div>
                            <h3 class="h4 mb-3 text-white">Design Your Widget</h3>
                            <p class="text-white-50">Start with our intuitive drag-and-drop interface. Select elements from our comprehensive library and arrange them on the canvas.</p>
                            <ul class="list-unstyled text-white-50">
                                <li class="d-flex align-items-center mb-2">
                                    <div class="me-2 text-primary">●</div>
                                    Drag and drop elements
                                </li>
                                <li class="d-flex align-items-center mb-2">
                                    <div class="me-2 text-primary">●</div>
                                    Customize properties
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="me-2 text-primary">●</div>
                                    Real-time preview
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Timeline Dot -->
                    <div class="position-absolute top-50 start-50 translate-middle d-none d-md-block" 
                         style="width: 24px; height: 24px; background-color: rgb(99, 102, 241); border-radius: 50%; z-index: 2;"></div>
                </div>

                <!-- Step 2 -->
                <div class="row mb-5 position-relative">
                    <div class="col-md-5 offset-md-6">
                        <div class="bg-dark bg-opacity-50 p-4 rounded-3">
                            <div class="text-primary h1 mb-3">02</div>
                            <h3 class="h4 mb-3 text-white">Customize Code</h3>
                            <p class="text-white-50">Fine-tune your widget with our built-in code editors for complete control over functionality and styling.</p>
                            <ul class="list-unstyled text-white-50">
                                <li class="d-flex align-items-center mb-2">
                                    <div class="me-2 text-primary">●</div>
                                    HTML structure
                                </li>
                                <li class="d-flex align-items-center mb-2">
                                    <div class="me-2 text-primary">●</div>
                                    CSS styling
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="me-2 text-primary">●</div>
                                    JavaScript functionality
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Timeline Dot -->
                    <div class="position-absolute top-50 start-50 translate-middle d-none d-md-block" 
                         style="width: 24px; height: 24px; background-color: rgb(99, 102, 241); border-radius: 50%; z-index: 2;"></div>
                </div>

                <!-- Step 3 -->
                <div class="row position-relative">
                    <div class="col-md-5 offset-md-1">
                        <div class="bg-dark bg-opacity-50 p-4 rounded-3">
                            <div class="text-primary h1 mb-3">03</div>
                            <h3 class="h4 mb-3 text-white">Export & Share</h3>
                            <p class="text-white-50">Export your widget as clean code or share it with the community. Import existing widgets to speed up development.</p>
                            <ul class="list-unstyled text-white-50">
                                <li class="d-flex align-items-center mb-2">
                                    <div class="me-2 text-primary">●</div>
                                    Export clean code
                                </li>
                                <li class="d-flex align-items-center mb-2">
                                    <div class="me-2 text-primary">●</div>
                                    Share with community
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="me-2 text-primary">●</div>
                                    Version control
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Timeline Dot -->
                    <div class="position-absolute top-50 start-50 translate-middle d-none d-md-block" 
                         style="width: 24px; height: 24px; background-color: rgb(99, 102, 241); border-radius: 50%; z-index: 2;"></div>
                </div>
            </div>
        </div>
    </section>

                    <!-- Try Our AI -->
   <section class="bg-light py-2" id="freeschema-AI">
     <div class="container py-5">
      <div class="text-center mb-5">
       <h2 class="display-5 fw-bold mb-4">Try FreeSCHEMA AI</h2>
      </div>
      <div id="widgetGeneratorWidgetContainer"></div>
   <div/>
   </section>

    <!-- FAQ Section -->
    <section class="bg-light py-5" id="faq">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold mb-4">Frequently Asked Questions</h2>
                <p class="lead text-muted">Everything you need to know about ${i}</p>
            </div>

            <div class="accordion" id="faqAccordion">
                <!-- FAQ Item 1 -->
                <div class="accordion-item border-0 mb-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                            What is ${i}?
                        </button>
                    </h2>
                    <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            ${i} is a powerful drag-and-drop platform that allows you to create, customize, and share web components (widgets) without writing complex code. It features real-time preview, code editors, and a community marketplace.
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="accordion-item border-0 mb-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                            Do I need coding experience to use it?
                        </button>
                    </h2>
                    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            No! Our drag-and-drop interface makes it easy for beginners to create widgets. However, if you know HTML, CSS, or JavaScript, you can use our code editors for advanced customization.
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="accordion-item border-0 mb-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                            Can I export my widgets?
                        </button>
                    </h2>
                    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Yes! You can export your widgets as clean, standalone HTML, CSS, and JavaScript code. This makes them portable and easy to use in any web project.
                        </div>
                    </div>
                </div>
                <!-- FAQ Item 4 -->
                <div class="accordion-item border-0 mb-3">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                        What about version control?
                      </button>
                  </h2>
                  <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        Every widget version is saved and can be accessed at any time. This makes it easy to track changes, roll back to previous versions, or create variations of your widgets.                      </div>
                  </div>
              </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-5">
        <div class="container">
            <div class="row g-4">
                <!-- Company Info -->
                <div class="col-lg-4">
                    <h3 class="h5 mb-4 text-white">${i}</h3>
                    <p class="text-white-50 mb-4">Create, customize, and share widgets visually. Built for everyone, by developers.</p>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-white-50 hover-text-white">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="#twitter"/>
                            </svg>
                        </a>
                        <a href="#" class="text-white-50 hover-text-white">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="#github"/>
                            </svg>
                        </a>
                        <a href="#" class="text-white-50 hover-text-white">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="#linkedin"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Product -->
                <div class="col-lg-2 offset-lg-2">
                    <h3 class="h5 mb-4 text-white">Product</h3>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#features" class="text-white-50 text-decoration-none">Features</a></li>
                        <li class="mb-2"><a href="/documentation" class="text-white-50 text-decoration-none">Documentation</a></li>
                    </ul>
                </div>

                <!-- Company -->
                <div class="col-lg-2">
                    <h3 class="h5 mb-4 text-white">Company</h3>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">About</a></li>
                        <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Blog</a></li>
                        <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Careers</a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div class="col-lg-2">
                    <h3 class="h5 mb-4 text-white">Legal</h3>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Privacy Policy</a></li>
                        <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Terms of Service</a></li>
                        <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-top border-secondary mt-4 pt-4">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        <p class="text-white-50 mb-0">© 2025 ${i}. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="d-flex justify-content-center justify-content-md-end gap-3">
                            <a href="#" class="text-white-50 text-decoration-none">Status</a>
                            <span class="text-white-50">•</span>
                            <a href="#" class="text-white-50 text-decoration-none">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`}}}export{Je as default};
