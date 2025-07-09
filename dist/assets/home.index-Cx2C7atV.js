import{m as C}from"./mainView.class-C4NLGCWW.js";import{c as S,t as h,s as E,S as _,a as L,P as M,_ as z,n as T,C as I,b as v,d as b,l as W,w,e as H,i as B,T as A,f as F,r as P,g as N,h as V,j,k as D,m as q,o as O,p as $,q as K,u as R,x as Y,y as Q}from"./modal.service-Ct6s_15E.js";import{A as J,C as U,e as G}from"./index-C4Kd4duQ.js";import{A as X,N as Z}from"./navbar.component-DWbtBhLa.js";import{y as ee}from"./mftsccs-browser-DU86KKx4.js";import"./vendor-Cs_0E_Xj.js";import"./codemirror-B3vgQINq.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./ckeditor-Cw9bcqxY.js";import"./loginModal.service-CTV3TUA5.js";function te(){document.addEventListener("keydown",function(e){e.ctrlKey&&e.altKey&&e.key==="d"?(e.preventDefault(),ie()):e.ctrlKey&&e.altKey&&e.key==="c"?(e.preventDefault(),ae()):e.ctrlKey&&e.altKey&&e.key==="r"?(e.preventDefault(),se()):e.ctrlKey&&e.altKey&&e.key==="f"&&(e.preventDefault(),oe())})}function ie(){const e=document.getElementById("designSplitViewButton"),i=new Event("click",{bubbles:!0,cancelable:!0});e&&e.dispatchEvent(i)}function ae(){const e=document.querySelector(".codeSplitViewButton"),i=new Event("click",{bubbles:!0,cancelable:!0});e&&e.dispatchEvent(i)}async function se(){await S.synchronizeWidget("Widget Synchronized")}async function oe(){if(document.getElementById("codeBlocksContainer")?.classList.contains("visible")){const i=document.getElementById("widgetButtionCodeViewWrapper"),t="fullscreen";i?.classList.contains(t)?i?.classList.remove(t):i?.classList.add(t)}}function ne(){const e=document.getElementById("tour-container");e&&e.remove()}async function le(){window.addEventListener("online",()=>y()),window.addEventListener("offline",()=>y())}const y=()=>{const e=navigator.onLine;console.log("isOnline",e),e?h.infoMessageToast("Internet is back. You are online now.",3):(E(),h.infoMessageToast("You are offline - changes will be saved locally.",3))};class de{constructor(){this.init()}init(){document.getElementById("wico_btn-toggle-rightPanel")?.addEventListener("click",t=>{this.toggleRightPanel(t)})}toggleRightPanel(i){const t=i?.target,n=document.getElementById("right-aside"),o=document.getElementById("column-right"),s=document.getElementById("midContent"),l=t?.querySelector("span");n&&(n?.classList.contains("d-none")?(n?.classList.remove("d-none"),o?.classList.add("col-md-3"),s?.classList.remove("col-md-12"),s?.classList.add("col-md-9"),l.textContent="start",t.title="Hide panel",t.classList.add("btn-togglePanel-close"),t.classList.remove("btn-togglePanel-open")):(n?.classList.add("d-none"),o?.classList.remove("col-md-3"),s?.classList.remove("col-md-9"),s?.classList.add("col-md-12"),l.textContent="keyboard_tab_rtl",t.title="Show panel",t.classList.remove("btn-togglePanel-close"),t.classList.add("btn-togglePanel-open")))}}class Ce extends C{the_params;page_id;widget_id;_sideNavbar;_tourStatus=!1;_loginStatus=!1;_pagesTSCCSService;_authService;constructor(i){super(i),this._sideNavbar=new _,L.navbar=this._sideNavbar,this.the_params=i,this.page_id=i?.["page-id"],this.widget_id=i?.["widget-id"],this._pagesTSCCSService=new M,this.setTitle("Home | Widget Conceptualizer"),window._dragService=z,this._authService=J.getInstance()}async componentDidMount(){if(this.page_id){const t=document.getElementById("midContent"),n=document.getElementById("right-aside"),o=await this._pagesTSCCSService.getPageById(Number(this.page_id));o?.error&&T();const s=o.data?.[`the_${U.PAGE_COMP_NAME}`],l={type:I.page,data:s,page_id:this.page_id},p=new v(l),u=new b(l);n.innerHTML=await u.getHtml(),t.innerHTML="",p.mount(t)}if(this.widget_id){const t=new Event("loadWidget");await W(t,Number(this.widget_id))}else w.disableWidgetButtons();this._sideNavbar.initialize(),H.renderActionHistory(),te(),await le(),await B(),new A,(await this._authService?.getLoginInfo()).isLoggedIn&&(new X,new de)}async getHtml(){F.resetWidgetTree(),P(),N();const i=await this._authService.getLoginInfo(),t=await V();if(this._tourStatus=i.tourStatus,this._loginStatus=i.isLoggedIn,i&&i.isLoggedIn){let n=function(d,a){let r;return function(...c){clearTimeout(r),r=setTimeout(()=>d.apply(this,c),a)}},o=function(){const a=document.querySelector(".screen-size-overlay");window.innerWidth<768&&!a?s():window.innerWidth>=768&&a&&document.body.removeChild(a)},s=function(){const d=document.createElement("div");d.className="screen-size-overlay";const a=document.createElement("div");a.className="screen-size-popup",a.setAttribute("role","alertdialog"),a.setAttribute("aria-labelledby","screen-size-title"),a.setAttribute("aria-describedby","screen-size-message");const r=document.createElement("div");r.className="warning-icon",r.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
  `;const c=document.createElement("h3");c.className="title",c.id="screen-size-title",c.textContent="Small Screen Detected";const m=document.createElement("p");m.className="message",m.id="screen-size-message",m.textContent="This application is designed for larger screens. For the best experience, please use a device with a screen width of at least 768px.";const g=document.createElement("p");g.className="instructions",g.textContent="If you continue, some features may not display correctly on your device. Consider switching to a tablet, laptop, or desktop computer.",a.appendChild(r),a.appendChild(c),a.appendChild(m),a.appendChild(g),d.appendChild(a),document.body.appendChild(d)};window.closeTour=ne,window.createWidgetModalOpen=j,window.toggleElementMenu=D,window.editElementModalOpen=q,window.deleteElement=O,window.closeModal=$,window.createNewElement=K,window.headerFunctions=R,window.uploadAttachment=Y,window.removeMyWidgetFromPublic=w.removeMyWidgetFromPublic;let l="";this._loginStatus&&!this._tourStatus&&(l=`
            <div class="row" id="tour-container">
                <div class="col-md-8 mx-auto">
                <p class="tour-toast">
                    <span class="material-symbols-outlined icon-tour-handshake">handshake</span>
                    Welcome to Widget Conceptualizer! The place to create and discover new widgets. <span class="btn-tour" id="btn-take-tour">Take a tour</span>
                    <span class="material-symbols-outlined icon-tour-close" onclick="closeTour(event)">cancel</span>
                </p>
                </div>
            </div>
        `);const p=document.createElement("style");p.textContent=`
  .screen-size-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0 ;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    animation: fadeIn 0.3s ease-out;
  }

  .screen-size-popup {
    background: linear-gradient(145deg, #ffffff, #f0f0f0);
    padding: 32px;
    border-radius: 12px;
    max-width: 300px;
    width: 70%;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
    animation: slideUp 0.4s ease-out;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .screen-size-popup .warning-icon {
    margin-bottom: 20px;
    color: #dc3545;
    transition: transform 0.3s ease;
  }

  .screen-size-popup .warning-icon:hover {
    transform: scale(1.1);
  }

  .screen-size-popup .title {
    margin: 0 0 16px;
    color: #1a1a1a;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
  }

  .screen-size-popup .message {
    margin: 0 0 16px;
    color: #333;
    font-size: 16px;
    line-height: 1.6;
  }

  .screen-size-popup .instructions {
    margin: 0;
    color: #555;
    font-size: 14px;
    font-style: italic;
    line-height: 1.5;
    opacity: 0.9;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @media (max-width: 380px) {
    .screen-size-popup {
      padding: 24px;
      max-width: 60%;
    }

    .screen-size-popup .title {
      font-size: 15px;
    }

    .screen-size-popup .message {
      font-size: 13px;
    }

    .screen-size-popup .instructions {
      font-size: 12px;
    }
  }
`,document.head.appendChild(p);const u=n(o,200);window.addEventListener("resize",u),window.addEventListener("load",o);const f=await this._sideNavbar.getHtml(),x=await new v().getHtml(),k=await new b().getHtml();return new Q().init(),`
      <header class="top-header">
        <div class="header-section">
          <router-link href="/" class="logo">${t}<sup>BETA</sup></router-link>
          <button onclick="newWidget(event)" class="button-rounded" >
            <span class="material-symbols-outlined">
            add_circle
            </span> 
            Create New Widget
          </button>
        </div>
        <div class="header-section header-mid-section">
        <button type="button" class="button-rounded selected" id="designSplitViewButton" title="Ctrl + Alt + d">
          <span class="material-symbols-outlined">design_services</span>
          Design
        </button>
        <button type="button" class="button-rounded codeSplitViewButton" title="Ctrl + Alt + c">
          <span class="material-symbols-outlined">code</span>
          Code
        </button>
        </div>
        <div class="header-section header-bottom-section"
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
            ${i.loginInfoHTML}
          </div>
        </div>
      </header>
      <main class="app_builder" id="app_builder">
        <div class="container-fluid">
            ${l}
          <div class="row">

            <!-- LEFT Content floating -->
            <!-- <div class="col-md-3 d-flex flex-column gap-5 position-absolute" id="column-left"> -->
            <div class="w-auto d-flex px-0 flex-column gap-5 position-absolute" id="column-left">
              ${f}
            </div>

          <!-- MID Content -->
          <div class="col-md-9 midContent mx-auto" id="midContent">
            ${x}
          </div>
          <!-- RIGHT Content -->
          <div class="col-md-3 rightContent" id="column-right">
              <button class="btn-togglePanel-close" id="wico_btn-toggle-rightPanel" title="Hide panel">
                <span class="material-symbols-outlined">start</span>
              </button>
              <div class="right-aside" id="right-aside">
                ${k}
              </div>
          </div>
        </div>
        <div id="uiModel"></div>
        </div>
        </main>
      <footer>
      </footer>
    `}else{const o=await new Z(t).getHtml();return setTimeout(async()=>{const s=document.getElementById("widgetGeneratorWidgetContainer");s&&await ee(G.ai_widget,s)},0),`
    ${o}
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
                <p class="lead text-muted">Everything you need to know about ${t}</p>
            </div>

            <div class="accordion" id="faqAccordion">
                <!-- FAQ Item 1 -->
                <div class="accordion-item border-0 mb-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                            What is ${t}?
                        </button>
                    </h2>
                    <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            ${t} is a powerful drag-and-drop platform that allows you to create, customize, and share web components (widgets) without writing complex code. It features real-time preview, code editors, and a community marketplace.
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
                    <h3 class="h5 mb-4 text-white">${t}</h3>
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
                        <p class="text-white-50 mb-0">© 2025 ${t}. All rights reserved.</p>
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
`}}}export{Ce as default};
