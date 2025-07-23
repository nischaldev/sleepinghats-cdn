import{m as q}from"./mainView.class-C4NLGCWW.js";import{c as V,t as f,s as j,l as S,S as s,a as z,b as N,w as g,d as O,e as $,f as K,P as R,_ as J,n as Q,C as Y,g as x,h as _,i as G,j as U,T as X,r as Z,k as ee,m as te,o as ie,p as ae,q as se,u as oe,x as ne,y as le,z as re,A as de,B as ce}from"./modal.service-BbHzpjL1.js";import{A as me,C as pe,e as ue}from"./index-C9ZFvrEj.js";import{A as ge,N as ve}from"./navbar.component-BOX6Y7fV.js";import{f as he,y as be}from"./mftsccs-browser-DeTC_MD3.js";import"./vendor-Cs_0E_Xj.js";import"./codemirror-B3vgQINq.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./ckeditor-Cw9bcqxY.js";import"./loginModal.service-DKZ_IrRa.js";function we(){document.addEventListener("keydown",function(i){i.ctrlKey&&i.altKey&&i.key==="d"?(i.preventDefault(),ye()):i.ctrlKey&&i.altKey&&i.key==="c"?(i.preventDefault(),fe()):i.ctrlKey&&i.altKey&&i.key==="r"?(i.preventDefault(),xe()):i.ctrlKey&&i.altKey&&i.key==="f"&&(i.preventDefault(),_e())})}function ye(){const i=document.getElementById("designSplitViewButton"),e=new Event("click",{bubbles:!0,cancelable:!0});i&&i.dispatchEvent(e)}function fe(){const i=document.querySelector(".codeSplitViewButton"),e=new Event("click",{bubbles:!0,cancelable:!0});i&&i.dispatchEvent(e)}async function xe(){await V.synchronizeWidget("Widget Synchronized")}async function _e(){if(document.getElementById("codeBlocksContainer")?.classList.contains("visible")){const e=document.getElementById("widgetButtionCodeViewWrapper"),t="fullscreen";e?.classList.contains(t)?e?.classList.remove(t):e?.classList.add(t)}}function ke(){const i=document.getElementById("tour-container");i&&i.remove()}async function Se(){window.addEventListener("online",()=>k()),window.addEventListener("offline",()=>k())}const k=()=>{navigator.onLine?f.infoMessageToast("Internet is back. You are online now.",3):(j(),f.infoMessageToast("You are offline - changes will be saved locally.",3))};class Ce{constructor(){this.init()}init(){document.getElementById("wico_btn-toggle-rightPanel")?.addEventListener("click",t=>{this.toggleRightPanel(t)})}toggleRightPanel(e){const t=e?.target,o=document.getElementById("right-aside"),n=document.getElementById("column-right"),l=document.getElementById("midContent"),r=t?.querySelector("span");o&&(o?.classList.contains("d-none")?(o?.classList.remove("d-none"),n?.classList.add("col-md-3"),l?.classList.remove("col-md-12"),l?.classList.add("col-md-9"),r.textContent="start",t.title="Hide panel",t.classList.add("btn-togglePanel-close"),t.classList.remove("btn-togglePanel-open")):(o?.classList.add("d-none"),n?.classList.remove("col-md-3"),l?.classList.remove("col-md-9"),l?.classList.add("col-md-12"),r.textContent="keyboard_tab_rtl",t.title="Show panel",t.classList.remove("btn-togglePanel-close"),t.classList.add("btn-togglePanel-open")))}}class Te{convertingId=0;convertedData;constructor(e){this.convertingId=e}async init(){const e=await he(Number(this.convertingId)),t=e?.boomgpt?.data_type;this.convertedData=await new Promise(async o=>{switch(t){case"full_page":const n=e?.boomgpt?.full_text,r=new DOMParser().parseFromString(n,"text/html"),d=r.body,m=await Promise.all(Array.from(d.querySelectorAll("script[src]")).map((a,c)=>({order:c,url:a.src})));Array.from(d.querySelectorAll("script[src]"))?.forEach(a=>{a.remove()});const v=d.querySelectorAll("script:not([src])");let h="";v.forEach(a=>{h+=a.textContent}),Array.from(d.querySelectorAll("script:not([src])"))?.forEach(a=>{a.remove()});const C=Array.from(r.head.querySelectorAll("link[rel='stylesheet'")).map((a,c)=>({order:c,url:a.href})),T=r.head.querySelectorAll("style");let b="";T.forEach(a=>{b+=a.textContent}),s.staticWidgetTree.html=d.innerHTML,s.staticWidgetTree.css=b,s.staticWidgetTree.library.css=C,s.staticWidgetTree.library.js=m,s.staticWidgetTree.before_render="this.render();",s.staticWidgetTree.after_render=h;break;case"all":const E=e?.boomgpt?.visual_text,u=new DOMParser().parseFromString(E,"text/html"),p=u.body,M=await Promise.all(Array.from(p.querySelectorAll("script[src]")).map((a,c)=>({order:c,url:a.src})));Array.from(p.querySelectorAll("script[src]"))?.forEach(a=>{a.remove()});const L=p.querySelectorAll("script:not([src])");let w="";L.forEach(a=>{w+=a.textContent}),Array.from(p.querySelectorAll("script:not([src])"))?.forEach(a=>{a.remove()});const W=Array.from(u.head.querySelectorAll("link[rel='stylesheet'")).map((a,c)=>({order:c,url:a.href})),A=u.head.querySelectorAll("style");let y="";A.forEach(a=>{y+=a.textContent}),s.staticWidgetTree.html=p.innerHTML,s.staticWidgetTree.css=y,s.staticWidgetTree.library.css=W,s.staticWidgetTree.library.js=M,s.staticWidgetTree.before_render="this.render();",s.staticWidgetTree.after_render=w;break;case"plain_text":const I=e?.boomgpt?.visual_text,H=new DOMParser().parseFromString(I,"text/html").body;s.staticWidgetTree.html=H.innerHTML;break;case"only_images":const D=e?.boomgpt?.images?.map(a=>`
          <div class="cw_image-card">
            <div class="cw_card cw_image">
              <img src="${a.path}" alt='${a.title}' loading="lazy">
            </div>
          </div>
          `).join("");s.staticWidgetTree.html=D,s.staticWidgetTree.css=`
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
        `;break;case"sticky_note":const B=e?.boomgpt?.sticky_note,F=new DOMParser().parseFromString(B,"text/html").body;s.staticWidgetTree.html=F.innerHTML;break;case"widget":const P=new Event("loadWidget");await S(P,Number(e?.boomgpt?.widget_id));break}t!=="widget"&&(await z(s.staticWidgetTree),await N(s.staticWidgetTree,!1),g.enableWidgetButtons(),await O()),o("converted")}),console.log("convertedData --->",this.convertedData)}}class $e extends q{the_params;page_id;widget_id;_sideNavbar;_tourStatus=!1;_loginStatus=!1;_pagesTSCCSService;_authService;ctowData;constructor(e){super(e),this._sideNavbar=new $,K.navbar=this._sideNavbar,this.the_params=e,this.ctowData=e?.ctow,this.page_id=e?.["page-id"],this.widget_id=e?.["widget-id"],this._pagesTSCCSService=new R,this.setTitle("Home | Widget Conceptualizer"),window._dragService=J,this._authService=me.getInstance()}async componentDidMount(){if(this.page_id){const t=document.getElementById("midContent"),o=document.getElementById("right-aside"),n=await this._pagesTSCCSService.getPageById(Number(this.page_id));n?.error&&Q();const l=n.data?.[`the_${pe.PAGE_COMP_NAME}`],r={type:Y.page,data:l,page_id:this.page_id},d=new x(r),m=new _(r);o.innerHTML=await m.getHtml(),t.innerHTML="",d.mount(t)}if(this.widget_id){const t=new Event("loadWidget");await S(t,Number(this.widget_id))}else g.disableWidgetButtons();if(this._sideNavbar.initialize(),G.renderActionHistory(),we(),await Se(),await U(),new X,(await this._authService?.getLoginInfo()).isLoggedIn&&(new ge,new Ce,this.ctowData)){const t=document.getElementById("loading-text");t.textContent="Converting to Widget...";const o=JSON.parse(window.atob(this.ctowData)),n=new Te(Number(o));await n.init(),console.log("convertData.convertedData",n.convertedData)}}async getHtml(){s.resetWidgetTree(),Z(),ee();const e=await this._authService.getLoginInfo(),t=await te();if(this._tourStatus=e.tourStatus,this._loginStatus=e.isLoggedIn,e&&e.isLoggedIn){window.closeTour=ke,window.createWidgetModalOpen=ie,window.toggleElementMenu=ae,window.editElementModalOpen=se,window.deleteElement=oe,window.closeModal=ne,window.createNewElement=le,window.headerFunctions=re,window.uploadAttachment=de,window.removeMyWidgetFromPublic=g.removeMyWidgetFromPublic;let o="";this._loginStatus&&!this._tourStatus&&(o=`
            <div class="row" id="tour-container">
                <div class="col-md-8 mx-auto">
                <p class="tour-toast">
                    <span class="material-symbols-outlined icon-tour-handshake">handshake</span>
                    Welcome to Widget Conceptualizer! The place to create and discover new widgets. <span class="btn-tour" id="btn-take-tour">Take a tour</span>
                    <span class="material-symbols-outlined icon-tour-close" onclick="closeTour(event)">cancel</span>
                </p>
                </div>
            </div>
        `);const n=await this._sideNavbar.getHtml(),r=await new x().getHtml(),m=await new _().getHtml();return new ce().init(),`
      <header class="wico_top-header">
        <div class="wico_header-section">
          <router-link href="/" class="logo">${t}<sup>BETA</sup></router-link>
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
            ${e.loginInfoHTML}
          </div>
        </div>
      </header>
      <main class="app_builder" id="app_builder">
        <div class="container-fluid">
            ${o}
          <div class="row">

            <!-- LEFT Content floating -->
            <!-- <div class="col-md-3 d-flex flex-column gap-5 position-absolute" id="column-left"> -->
            <div class="w-auto d-flex px-0 flex-column gap-5 position-absolute" id="column-left">
              ${n}
            </div>

          <!-- MID Content -->
          <div class="col-md-9 midContent mx-auto" id="midContent">
            ${r}
          </div>
          <!-- RIGHT Content -->
          <div class="col-md-3 rightContent" id="column-right">
              <button class="btn-togglePanel-close" id="wico_btn-toggle-rightPanel" title="Hide panel">
                <span class="material-symbols-outlined">start</span>
              </button>
              <div class="right-aside" id="right-aside">
                ${m}
              </div>
          </div>
        </div>
        <div id="uiModel"></div>
        </div>
        </main>
      <footer>
      </footer>
    `}else{const n=await new ve(t).getHtml();return setTimeout(async()=>{const l=document.getElementById("widgetGeneratorWidgetContainer");l&&await be(ue.ai_widget,l)},0),`
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
`}}}export{$e as default};
