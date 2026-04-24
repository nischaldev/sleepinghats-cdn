const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home.index-BSQq-lvi.js","assets/mainView.class-C4NLGCWW.js","assets/navbar.component-DCXyJD6E.js","assets/loginModal.service-DtHB5zsY.js","assets/mftsccs-browser-D_uubYVV.js","assets/loginModal-DGhNYttL.css","assets/vendor-DEYWGvhS.js","assets/ckeditor-Cw9bcqxY.js","assets/vendor-TRZluGMH.css","assets/codemirror-D1H9tReK.js","assets/eslint4b-BLWGvIOa.js","assets/prettier-ClL2wQep.js","assets/home-bXvBobv9.css","assets/preview.index-DyiAZneH.js","assets/page-preview.index-DFQimTe7.js","assets/page-preview-BJCVd99J.css","assets/documentation.index-D8EfmrTm.js","assets/highlight-CFrhCzdo.js","assets/highlight-ZgkIHsf0.css","assets/documentation-CtKxHXjz.css","assets/subscription.index-m9FH2f7H.js","assets/subscription-Dc24vCVe.css","assets/video-tutorial.index-DokiokQk.js","assets/video-tutorial-Dg46rKRD.css","assets/community.index-L7fVvQPD.js","assets/community-CARjtQbC.css","assets/courses.index-pdQUPk_C.js","assets/course.index-adgtlv4G.js","assets/initialLoadWICO-B3pBRuXC.js"])))=>i.map(i=>d[i]);
import{p as te,v as aa,G as ia,U as ci,K as M,g as jn,E as _e,a as O,V as on,l as oa,_ as ke,b as It,H as re,F as G,R as Se,N as Io,c as Na,d as di,O as Qe,S as ko,e as N,x as ja,f as Z,h as le,M as Me,J as Mo,i as kt,t as ui,j as Ne,o as Po,k as ge,m as be,n as Bo,q as He,r as qe,s as Y,D as Dn,Y as st,u as $o,I as Ft,w as mi,y as Tt,z as pi,A as No,Q as sa,B as jo}from"./mftsccs-browser-D_uubYVV.js";import{E as ae,b as dt,o as ut,j as sn,a as rn,c as Do,l as ra,d as la,e as Ho,f as Ie,k as ln,h as Oo,g as qo}from"./codemirror-D1H9tReK.js";import{J as cn,n as Fo}from"./vendor-DEYWGvhS.js";import{z as Vo}from"./eslint4b-BLWGvIOa.js";import{l as mt,p as dn,r as un,a as Ro,b as Uo}from"./prettier-ClL2wQep.js";import{C as zo}from"./ckeditor-Cw9bcqxY.js";const Jo=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return ho},get addJSLibrary(){return fo},get applyPageProperties(){return na},get applyPageProperty(){return Le},get filterChildrenByWrapper(){return uo},get getAttributeType(){return Bc},get getAttributeValue(){return vo},get getElementAttribute(){return Cc},get getElementAttributeDetails(){return Ia},get getElementData(){return lo},get getLayoutAttributeValue(){return wo},get getPropertiesByIdFromStorage(){return $t},get handleDirectContentEdit(){return Lc},get handlePageProperties(){return mo},get initializeApp(){return Sn},get initializeLibrary(){return ka},get listJSLibraries(){return Nt},get removeCSSLibrariesFromHead(){return tn},get removeJSLibrariesFromHead(){return Ma},get setAttributeValue(){return Nc},get toggleSpacingBox(){return Pa},get updateAttribute(){return Ac},get updateCSSLibrary(){return Xe},get updateElementAttribute(){return En},get updateElementAttributeViaEditor(){return xc},get updateJSLibrary(){return et},get updateMetaTag(){return Wt},get updateMultipleElementAttribute(){return po},get updateWidgetTypeValue(){return co}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const z={baseURL:"https://boomconsole.com/api/v1",baseNodeUrl:"https://boomconsole.com",boomURL:"https://boomconsole.com",aiURL:"https://www.ai.freeschema.com/api",deployURL:"https://deploy.freeschema.com",agentURL:"https://wico-ai.freeschema.com",CLIENT_ID:"636550695311-ctc09991hhu6iav4kkhnp1ge537nec2i.apps.googleusercontent.com",logserver:"https://logger.freeschema.com",enableSW:!1,courses_widget:103581935,course_widget:103503610,discussion_community:101765915,ai_widget:101934087,visual_widget:103478558,visual_prototype_widget:101938499,video_tutorial_widget:102040172,subscriptionId:102121109,documentation_preview_widget:102097744,folder_widget:102400016,assets_widget:102410590,VITE_DEV_BASE:"http://localhost:5173",VITE_CDN_BASE:"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master"},Go=z?.boomURL;async function V(n,e,t){const a=await te(`the_${n}`,"",!0,e,4,999);for(const[i,o]of Object.entries(t)){let s=i;const r=await te(`${s}`,`${o}`,!1,e,4,999);await F(a,r,s)}return a}async function F(n,e,t){const a=n.userId,i=999,o=999,s=n.type?.characterValue,r=t,l=s+"_"+r,d=await aa(l,i,o,a);await ia(n.id,e.id,d.id,1e3)}async function Yo(n,e){try{const t=new Headers;return t.append("Content-Type","application/json"),t.append("Authorization",`Bearer ${e}`),await(await fetch(`${Go}/api/get-entity-from-user?userConceptId=${n}`,{method:"GET",headers:t,redirect:"follow"})).json()}catch(t){throw console.error(t),t}}async function yd(n){const e=await Yo(n?.data?.userConcept,n?.data?.token);let t={token:n?.data?.token,refreshToken:n?.data?.refreshtoken,email:n?.data?.email,userId:n?.data?.entity?.[0]?.userId,userConcept:n?.data?.userConcept,entityId:e?.entity,amcode:btoa(JSON.stringify(n?.data?.roles))};return ci(t.token),localStorage.setItem("profile",JSON.stringify(t)),!0}async function k(){return new Promise(n=>{let e=localStorage?.getItem("profile")||"";if(e){const t=JSON.parse(e);n(t)}else n()})}async function gi(){return new Promise(n=>{let e=localStorage?.getItem("tempwidget")||"";if(e){const t=JSON.parse(e);n(t)}else n()})}class xe{static instance;static getInstance(){return xe.instance||(xe.instance=new xe),xe.instance}async getLoginInfo(){const e=await k(),t=await this.checkIfUserIsAdmin(e?.userConcept);let a="",i=!1,o=!1;if(e?.token){i=!0;let s="",r="";if(e?.entityId){let l=new M;l.typeConnection="the_entity_firstname",l.name="entity_firstname";let d=new M;d.typeConnection="the_entity_lastname",d.name="entity_lastname";let c=new M;c.typeConnection="the_entity_tour_status",c.name="entity_tour_status";let u=new M;u.type="the_entity",u.name="top",u.conceptIds=[e.entityId],u.freeschemaQueries=[l,d,c],u.outputFormat=jn;let p;await _e(u,"").subscribe(m=>{p=m}),s=p?.[0]?.the_entity?.the_entity_firstname?.the_firstname||"",r=p?.[0]?.the_entity?.the_entity_lastname?.the_lastname||"",o=p?.[0]?.the_entity?.the_entity_tour_status?.the_tour_status==="true"}a=`
        <div id="profileIcon" class="position-relative" onclick="headerFunctions.openUserActionModel()">
          ${e?.email?.slice(0,1)}
          <div id="profileDropdown">
            <div class="user-email">
              <span class="material-symbols-outlined">account_circle</span>
              <div class="user-info">
                <div class="full-name">${s} ${r}</div>
                <div class="email">${e?.email}</div>
              </div>
            </div>
            <!-- <router-link href="" class="dropdown-item danger" onclick="logout(event)">
              <span class="material-symbols-outlined">logout</span>
              Logout
            </router-link> -->
            <router-link class="dropdown-item danger" id="wico_btn-logout">
              <span class="material-symbols-outlined">logout</span>
              Logout
            </router-link>
          </div>
        </div>
      `}else i=!1,a=`
        <div class="d-flex flex-row gap-2">
          <!-- <router-link class="btn btn-primary" onclick="openLoginModal(event)">Login</router-link>
          <router-link class="btn btn-secondary" onclick="openSignupModal(event)">Signup</router-link> -->

          <router-link class="btn btn-primary wico_btn-openLoginModal">Login</router-link>
          <router-link class="btn btn-secondary wico_btn-openSignupModal">Signup</router-link>
        </div>
      `;return{loginInfoHTML:a,isLoggedIn:i,isAdmin:t,tourStatus:o}}async checkIfUserIsAdmin(e){try{return(await O(e))?.accessId===3}catch(t){return console.error("Error fetching user concept:",t),!1}}async logout(){const e=await gi();await on(e?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),location.reload()}async checkAndUpdateToken(){try{const e=await k();if(!e?.token){console.warn("No token found in local storage.");return}const t=e.token,a=e.refreshToken,i=new Headers;i.append("Content-Type","application/json");const o={accessToken:t,refreshToken:a},r=await(await fetch(`${oa.BASE_URL}/api/Auth/refresh`,{method:"POST",headers:i,body:JSON.stringify(o)})).json();if(r.success&&r.data){const{accessToken:l,refreshToken:d}=r.data;e.token=l,e.refreshToken=d,localStorage.removeItem("profile"),localStorage.setItem("profile",JSON.stringify(e))}else this.logout()}catch(e){console.error("Error refreshing token:",e)}}}const Qo=xe.getInstance();(function(){const e=window.fetch;window.fetch=async(...t)=>{const a=t[1]||{};try{const i=await e(...t);if(i.status===401){console.warn("401 Unauthorized - Refreshing token"),await Qo.checkAndUpdateToken();const o=await k();if(!o?.token)return console.error("Token refresh failed. User not logged in."),i;if(a.headers){const s=new Headers(a.headers);s.set("Authorization",`Bearer ${o.token}`),s.has("Content-Type")||s.set("Content-Type","application/json"),a.headers=s}return e(t[0],a)}return i}catch(i){throw console.error("Intercepted Fetch Error:",i),i}}})();const Ko="modulepreload",Zo=function(n){return"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master/"+n},Da={},pe=function(e,t,a){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=Zo(l),l in Da)return;Da[l]=!0;const d=l.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Ko,d||(u.as="script"),u.crossOrigin="",u.href=l,r&&u.setAttribute("nonce",r),document.head.appendChild(u),d)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return i.then(s=>{for(const r of s||[])r.status==="rejected"&&o(r.reason);return e().catch(o)})};function Hn(n,e=0){let t=`<ul style="list-style: none; margin: 10px 0px; ${e==0?" padding-left: 0px; ":""}" id="sortable-list">`;for(let a=0;a<n.length;a++){const i=n[a];i.edit?t+=`
                <li style="border: 1px solid lightgray; padding: 5px 10px; margin-bottom: 5px;" data-page-id="${i.page}">
                    <div style="display: flex; align-items: start; gap: 10px; justify-content: space-between;">
                        <textarea id="menuName" class="form-control form-control-sm" rows="1" placeholder="Name" style="flex:1">${i.name??""}</textarea>
                        <input id="menuLink" class="form-control form-control-sm" placeholder="link" value="${i.link??""}" ${typeof i.page=="number"?"disabled":""} style="flex: 1"/>
                        <textarea id="menuAction" class="form-control form-control-sm" rows="1" placeholder="Action Function" style="flex: 2">${i.action??""}</textarea>
                        <div style="dispaly: flex; align-items: center; justify-content: center; gap: 5px">
                            <input class="form-check-input" type="checkbox" id="menuAuth" ${i.auth==!0?"checked":""} />
                            <label class="form-check-label">Auth</label>
                        </div>
                        <div style="width: 100px; display: flex; align-items: center; gap: 10px;">
                            <a onclick="handleMenuAction(event, 'cancel', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/fbb325b1-911e-4ea2-9c6d-7510c62009e6.svg" height="16px" alt="remove" /></a>
                            <a onclick="handleMenuAction(event, 'update', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/32f26593-df4f-46bc-beef-9f8a7b96343f.png" height="16px" alt="remove" /></a>
                        </div>
                    </div>
                </li>
                <li>${i.menus?`${Hn(i.menus,e+1)}`:""}</li>
            `:t+=`
                <li style="border: 1px solid lightgray; padding: 5px 10px; margin-bottom: 5px;" data-page-id="${i.page}">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="flex: 1">${i.name}</span>
                        <span style="flex: 1">${i.link}</span>
                        <span style="width: 120px;">${i.action?"Action: <b>Yes</b>":""}</span>
                        <span style="width: 120px;">${i.auth?"Auth: <b>True</b>":"Auth: <b>False</b>"}</span>
                        <div style="width: 100px; display: flex; align-items: center; gap: 10px;">
                            ${a>0?`<a onclick="handleMenuAction(event, 'up', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/f0f13015-1d73-4268-987c-7d1bbb661ee7.png" height="16px" alt="up" /></a>`:""}
                            ${i.menus.length>0?'<a role="button"><img src="https://boomconcole.com/freeschema/05deeedc-b791-4ff4-8a25-751a1c7a4fe8.png" height="16px" alt="right" /></a>':""}
                            ${a<n.length-1?`<a onclick="handleMenuAction(event, 'down', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/3c5e1681-4e99-4dbe-b178-02dad7118c02.png" height="16px" alt="down" /></a>`:""}
                            ${e>0?'<a role="button"><img src="https://boomconcole.com/freeschema/2ad5cd15-e7fc-4578-9479-fe516e5fb9d5.png" height="16px" alt="left" /></a>':""}
                            <a onclick="handleMenuAction(event, 'remove', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/fbb325b1-911e-4ea2-9c6d-7510c62009e6.svg" height="16px" alt="remove" /></a>
                            <a onclick="handleMenuAction(event, 'edit', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/98218250-6ad3-4d24-af6f-0f9d79895c44.png" height="16px" alt="remove" /></a>
                        </div>
                    </div>
                </li>
                <li>${i.menus?`${Hn(i.menus,e+1)}`:""}</li>
            `}return t+="</ul>",t}function ht(n){console.log("menus",n);const e=Hn(n),t=document.getElementById("menu-items");t&&(t.innerHTML=e);let a=null;document.querySelectorAll("#sortable-list li").forEach(i=>{i.addEventListener("dragstart",o=>{a=i,o.dataTransfer.effectAllowed="move"}),i.addEventListener("dragover",o=>{o.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",o=>{o.preventDefault(),i.classList.remove("drag-over"),a!==i&&!i.contains(a)&&i?.parentNode?.insertBefore(a,i.nextSibling)}),i.addEventListener("dragend",()=>{document.querySelectorAll(".drag-over").forEach(o=>o.classList.remove("drag-over"))})})}async function hi(n){console.log("projectId",n);let e;if(n||(e=vi()),!n&&!e?.projectId)return console.log("Project Id not found"),[];if(!n&&e.projectId&&(n=e?.projectId),console.log("projectId 2",n),!n)return[];const t=["the_item_menu_name","the_item_menu_link","the_item_menu_action","the_item_menu_auth","the_item_menu_order","the_item_menu_page"],a=new M;a.typeConnection="the_menu_s_item",a.selectors=t;function i(c,u=5){if(u==5)return;const p=new M;p.typeConnection="the_menu_s_item",p.selectors=t,c.name=u.toString(),c.freeschemaQueries=[p];const m=u+1;i(p,m)}const o=new M;o.conceptIds=[n],i(o,1);const s=await ke(o,"");console.log("valllu",s);const r=s?.[0]?.the_project?.the_menu_s_item||[],l=(c=[])=>{let u=[];for(let p=0;p<c.length;p++){const m=c[p];u.push({name:m?.the_item_menu?.the_item_menu_name?.the_name??"",link:m?.the_item_menu?.the_item_menu_link?.the_link??"",action:m?.the_item_menu?.the_item_menu_action?.the_action??"",page:m?.the_item_menu?.the_item_menu_page?.the_page?Number(m?.the_item_menu?.the_item_menu_page?.the_page):"",order:m?.the_item_menu?.the_item_menu_order?.the_order?Number(m?.the_item_menu?.the_item_menu_order?.the_order):0,auth:m?.the_item_menu?.the_item_menu_auth?.the_auth=="true",menus:l(m?.the_item_menu?.the_menu_s_item)??[]})}return u.sort((p,m)=>p.order-m.order)};return l(r)}async function Xo(n,e=[]){console.log("menus",e);const t=await new It;try{await t.initialize();const a=await O(n);await re(n,"the_menu_s_item"),await fi(a,e,t),await t.commitTransaction(),console.log("output concept",n)}catch(a){console.error(a),await t.rollbackTransaction()}}async function fi(n,e=[],t){for(let a=0;a<e.length;a++){const i=e[a],o=await t.MakeTheInstanceConceptLocal("the_item_menu","",!0,999,4);await t.CreateConnection(n,o,"the_menu_s_item");for(let[s,r]of Object.entries(i))if(console.log("key",s,r),!!["name","link","action","auth","order","page","menus"].includes(s)&&!(s=="menus"&&!Array.isArray(r)))if(s=="menus")await fi(o,r,t);else{const d=await t.MakeTheInstanceConceptLocal("the_"+s,r,!0,999,4);await t.CreateConnection(o,d,"the_item_menu_"+s)}}}const es=async()=>{const n=z.enableSW;"serviceWorker"in navigator&&n&&await new Promise((e,t)=>{navigator.serviceWorker.register("/sw.js").then(a=>{a.addEventListener("updatefound",()=>{const i=a.installing;i?.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&(i.postMessage("skipWaiting"),setTimeout(()=>{confirm("A reload is required to update to latest")&&window.location.reload()},500))})}),e(void 0)}).catch(a=>{console.error("Service Worker Init error",a),t(a)}),setTimeout(()=>{t()},3e4)})},yi="wico_site";function vi(){const n=atob(localStorage.getItem(yi)||"");return n?JSON.parse(n):{}}function wi(n,e){const t=vi();t[n]=e,localStorage.setItem(yi,btoa(JSON.stringify(t)))}function bi(){window.wico={fetchMenus:hi}}async function ts(){await es()}const I={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"},se={ENTITY_PAGE_LINKER:"s_page",PAGE_WIDGET_LINKER:"body",ENTITY_PROJECT_LINKER:"s_project",PROJECT_PAGE_LINKER:"s_page"},Mt=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],ca=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],On=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],ns=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let Ha=[],Oa=[];async function as(n){let e="";for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const a=n[t];e+=` ${t}="${a}" `}return e}async function is(n,e){const t=new G;t.composition=n,t.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const a=await Se([t],e),i=a?.data?.the_widget?.the_widget_html?.[0]?.id,o=a?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,s=a?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!i)return{html:"",css:"",js:""};const r=await Io(i,["contain_s"]);Ha=await Na(r.externalConnections),Oa=await Na(r.internalConnections);let l=await _i(i,Ha,Oa);const d=document.createElement("div");return d.innerHTML=l,{html:(d?.querySelector(".widget-wrapper")).innerHTML,css:o||"",js:s||""}}async function _i(n,e,t){try{let a="",o=ss(e)[n];if(o!=null){let s=rs(o);const l=(await to())?.map(p=>{const m=p?.id,g=p?.data?.the_element?.the_element_name?.[0]?.data?.the_name,h=p?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,w=p?.data?.the_element?.the_element_void?.[0]?.data?.the_void,T=p?.data?.the_element?.the_element_s_attribute?.map(E=>{const b=E?.data?.the_attribute,v=b?.the_attribute_name?.[0]?.data?.the_name,S=b?.the_attribute_type?.[0]?.data?.the_type,L=b?.the_attribute_value?.[0]?.data?.the_value;return{name:v,type:S,value:L}});return{id:m,name:g,tag:h,void:w,attributes:T}}),d=[...ca,...On],u=(await k())?.userId;for(let p=0;p<s.length;p++){const m=s[p];if(m.ofTheConceptId==n){const g=await os(m.toTheConceptId,t),h=Object.keys(g.data)[0],w=g.data[h],y=Mt.includes(h),T=await as(w?.attributes||[]),E=l.find(v=>v.tag===h.toLowerCase().trim()),b=w?.attributes;for(const v in b){const S=d.find(C=>v===C?.name?.toLowerCase().trim()),L=b[v],_=S?.type;E.attributes=E?.attributes?.map(C=>(C?.name==="className"&&v==="class"?C.value=L:C?.name==="elementContent"?C.value=w?.innerText:v===C?.name&&(_==="array"?C.selected=L:_==="boolean"?C.value="":C.value=L),C))}if(h!="text"){const v=await di(g.id,u);v?.length&&await on(v?.[0]?.id);const S={[`wdgt${g.id}`]:E},L=await Qe(S,null,null,null,u);console.log("elementAttributeComp ->",L),a+=`
            <div id="wdgt${g.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${E?.id}">
            <${h} data-cc-id="${g.id}" `+T+`${y?"/></div>":">"}`,a+=await _i(m.toTheConceptId,e,t)}(w.contains=="false"||h=="text")&&(a+=" "+w.innerText+" "),!y&&h!="text"&&(a+=`</${h}></div>`)}}}return a}catch(a){console.error("error converting html",a)}}async function os(n,e){var t=[],a={},i=e;t=i;for(var o=[],s=0;s<t.length;s++)o.includes(t[s].ofTheConceptId)||o.push(t[s].ofTheConceptId);var r=await O(n);if(r.id==0&&n!=null&&n!=null){var l=await O(n);r=l}var d=await ko(n,t,o),c=r?.type?.characterValue??"";a[c]=d;var u={};return u.data=a,u.id=n,u}function ss(n){return n.reduce((e,t)=>{const{ofTheConceptId:a}=t;return e[a]||(e[a]=[]),e[a].push(t),e},{})}function rs(n){const e=new Map;n.forEach(o=>{e.set(o.id,o)});const t=[],a=new Set,i=o=>{if(!a.has(o.id)){a.add(o.id),t.push(o);for(const s of n)s.orderId==o.id&&i(s)}};return n.forEach(o=>{o.orderId==1e3&&i(o)}),t}async function vd(){return"WICO"}async function je(){const n=await gi();await on(n?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await Ao("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async function ls(n,e){var t=[];try{var a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization",`Bearer ${e}`),a.append("Randomizer",oa.BASE_RANDOMIZER.toString());const i=await fetch(z.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:a,body:JSON.stringify({id:n})});return i.ok?await i.json():(console.log("recursive search error ",i.status),t)}catch(i){console.log(i)}}async function Ei(n,e,t=1e3,a){const i=n.userId,l=await aa("contain_s",999,999,i);return await ia(n.id,e.id,l.id,t)}const cs="the_widget";async function ds(n,e,t){return await us(n,e,t)}async function us(n,e,t){const o=new DOMParser().parseFromString(n,"text/html").body,s=await Qe({[cs]:{}});e&&await ms(e,s),t&&await ps(t,s);const r=await Qe({widgetHTML:{}});await F(s,r,"html");const l=await Ti(o.children[0],r);return await Ei(r,l),await N.SyncDataOnline(),s}async function ms(n,e){const a=(await k())?.userId,o=await te("the_widgetCSS",n,!0,a,4,999);await F(e,o,"css")}async function ps(n,e){const a=(await k())?.userId,o=await te("the_widgetJS",n,!0,a,4,999);await F(e,o,"js")}async function Ti(n,e){console.log("parentConcept ->",e);const t={};if(t.tagName=n?.tagName?.toLowerCase(),n?.attributes?.length>0){t.attributes={};for(let o of n.attributes)t.attributes[o.name]=o.value}n?.textContent?.trim()&&(t.text=n.textContent.trim());let a={[t.tagName?t.tagName:"text"]:{contains:n?.children?.length?"true":"false",attributes:t.attributes||"",innerText:n?.children?.length?"":t.text||""}};const i=await Qe(a);if(n?.childNodes?.length>0){t.children=[];let o=[],s=-1,r,l;for(let c of n.childNodes)if(!(c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()==="")&&!(n.children.length===0&&c.nodeType===Node.TEXT_NODE)){if(c.nodeType===Node.TEXT_NODE){let u={text:{contains:!1,attributes:"",innerText:c.textContent?.trim()}};const p=await Qe(u);o.push({parentConcept:i,childConcept:p,orderId:l})}else c.nodeType===Node.ELEMENT_NODE&&(r=await Ti(c,i),o.push({parentConcept:i,childConcept:r,orderId:l}));s>=0&&(o[s]={...o[s],orderId:r?.id}),s++}let d=1e3;for(let c=0;c<o.length;c++){const u=o[c];d=(await Ei(u.parentConcept,u.childConcept,d)).id}}return i}const gs="widget-conceptualizer",hs="0.0.0",fs="module",ys={dev:"vite --config vite.config.js --force",build:"tsc && vite build --config vite.config.prod.js",preview:"vite preview"},vs={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},ws={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.186-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},qa={name:gs,private:!0,version:hs,type:fs,scripts:ys,devDependencies:vs,dependencies:ws};function bs(n,e,t,a){switch(t){case"int":n=n.sort(function(i,o){return parseInt(i[e])>parseInt(o[e])?1:parseInt(i[e])<parseInt(o[e])?-1:0});break;default:n=n.sort(function(i,o){return i[e].toLowerCase()>o[e].toLowerCase()?1:i[e].toLowerCase()<o[e].toLowerCase()?-1:0})}}function qn(n){let e={};for(let t=0;t<n.length;t++){const a=n[t];a?.type&&a?.type!=="submit"&&(e[a.name]=a?.value)}return e}function _s(n){const e=qa.dependencies||{},t=qa.devDependencies||{};return e[n]||t[n]||null}async function rt(n,e,t,a,i){await re(n,e);const o=await te(t,a,!1,i,4,999);let s=await aa(e,999,999,i);return await ia(n,o?.id,s.id,1e3,s.characterValue,i),"Delete and update completed"}function ue(n){return n?n.trim().replace(/^\/+/,"").replace(/\/+$/,"").replace(/\/{2,}/g,"/"):""}function Wn(n){if(!n)return{isValid:!1,message:"Slug is required"};if(/\s/.test(n))return{isValid:!1,message:"Slug cannot contain spaces"};if(/[^A-Za-z0-9\-/:_]/.test(n))return{isValid:!1,message:"Only letters, numbers, -, / and :param are allowed"};const e=n.split("/");if(e.some(t=>!t))return{isValid:!1,message:"Use single / between route segments"};for(const t of e){if(t.startsWith(":")){const a=t.slice(1);if(!/^[A-Za-z][A-Za-z0-9_]*$/.test(a))return{isValid:!1,message:"Route params must be like :id or :product_id"};continue}if(!/^[A-Za-z0-9-]+$/.test(t))return{isValid:!1,message:"Static route segments allow only letters, numbers and -"}}return{isValid:!0}}function Si(n){const e=ue(n);return e&&e.split("/").map(a=>a.startsWith(":")?`param-${a.slice(1).replace(/[^A-Za-z0-9_]/g,"").toLowerCase()}`:a.toLowerCase().replace(/[^a-z0-9-]/g,"-")).join("-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"page"}function Ci(n){const e=ue(n);if(!e)return"page";const t=e.split("/").filter(Boolean).map(i=>i.startsWith(":")?`${Fa(i.slice(1))}Param`:Fa(i)).join(""),a=/^[A-Za-z_]/.test(t)?t:`Page${t}`;return a.charAt(0).toLowerCase()+a.slice(1)}function Fa(n){return n.replace(/[^A-Za-z0-9]+/g," ").split(" ").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join("")}class tt{async generateSlug(e,t){const a=await k();let i=new G;i.composition=a?.entityId,i.fullLinkers=["the_entity_s_page"],i.inpage=100;let o=new G;o.fullLinkers=["the_page_slug"],o.inpage=100;const s=[i,o];let r=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return r=ue(r),await ja(s,"",jn).subscribe(l=>{const c=(l?.the_entity?.the_entity_s_page?.map(m=>({pageId:m?.id,slug:ue(m?.the_page?.the_page_slug?.[0]?.the_page_slug||"")}))||[]).filter(m=>t?m?.pageId!==Number(t):!0).map(m=>m?.slug).filter(Boolean);let u=r,p=r.match(/^(.*?)(?:-(\d+))?$/);if(p){u=p[1];let g=(p[2]?parseInt(p[2],10):0)+1;for(;c.includes(r);)r=`${u}-${g++}`}}),r}async checkSlugAvailablity(e,t){const a=await k();let i=new G;i.composition=a?.entityId,i.fullLinkers=["the_entity_s_page"],i.inpage=100;let o=new G;o.fullLinkers=["the_page_slug"],o.inpage=100;const s=[i,o],r=ue(e);let l=!0;return await ja(s,"",jn).subscribe(d=>{(d?.the_entity?.the_entity_s_page?.map(p=>({pageId:p?.id,slug:ue(p?.the_page?.the_page_slug?.[0]?.the_page_slug||"")}))||[]).find(p=>!p?.slug||t&&p?.pageId===Number(t)?!1:p?.slug===r)&&(l=!1)}),l}async savePage(e,t,a){const i=await V(I.PAGE_COMP_NAME,t,e),o=await Z(a);return await F(o,i,se.ENTITY_PAGE_LINKER),i}async renamePage(e,t,a){return await rt(Number(t),"the_page_title","title",e?.title,a),await rt(Number(t),"the_page_slug","slug",e?.slug,a),"renamed"}async getAllPages(e){const t=await k(),a=t?.token;let i=new G;e?i.composition=e:i.composition=t.entityId,i.fullLinkers=[`the_entity_${se.ENTITY_PAGE_LINKER}`],i.inpage=100;let o=new G;return o.fullLinkers=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_body`],o.inpage=100,(await Se([i,o],a))?.data?.the_entity?.[`the_entity_${se.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const t=await k();if(!t?.token)return null;const a=t?.token;let i=new G;i.composition=e,i.fullLinkers=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_meta_title`,`the_${I.PAGE_COMP_NAME}_meta_description`,`the_${I.PAGE_COMP_NAME}_meta_keywords`,`the_${I.PAGE_COMP_NAME}_width`,`the_${I.PAGE_COMP_NAME}_type`,`the_${I.PAGE_COMP_NAME}_font_family`,`the_${I.PAGE_COMP_NAME}_font_size`,`the_${I.PAGE_COMP_NAME}_body`],i.inpage=100;let o=new G;return o.fullLinkers=[`the_${I.WIDGET_COMP_NAME}_clean`],o.inpage=100,await Se([i,o],a)}async isPageTemplate(e){const t=new M;t.name="template",t.typeConnection="the_website_template_page",t.reverse=!0;const a=new M;return a.name="page",a.conceptIds=[e],a.freeschemaQueries=[t],a.outputFormat=le,((await ke(a,""))?.[0]?.data?.the_website_template_page_count||0)>0}async getPageById(e){return new Promise(async t=>{const i=(await k())?.token||"";let o=new M;o.conceptIds=[e],o.outputFormat=le,o.selectors=[`the_${I.PAGE_COMP_NAME}_html_cache`,`the_${I.PAGE_COMP_NAME}_css_cache`,`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_meta_title`,`the_${I.PAGE_COMP_NAME}_meta_description`,`the_${I.PAGE_COMP_NAME}_meta_keywords`,`the_${I.PAGE_COMP_NAME}_width`,`the_${I.PAGE_COMP_NAME}_type`,`the_${I.PAGE_COMP_NAME}_font_family`,`the_${I.PAGE_COMP_NAME}_font_size`,`the_${I.PAGE_COMP_NAME}_body`,`the_${I.WIDGET_COMP_NAME}_clean`],o.inpage=100,_e(o,i).subscribe(async s=>{if(s.length)t(s?.[0]);else if(!Array.isArray(s)&&s?.data==null){const r="There is no data.";A.infoMessageToast(r,4),t({error:!0,message:r})}}).catch(s=>{const r=s?.message;A.errorToast(`${r}`,4),t({error:!0,message:r})})})}async updatePageField(e,t,a){const i=await k(),o=`the_${I.PAGE_COMP_NAME}_${e}`;await re(a,o);const s=await O(a),r=await te(`${e}`,`${t}`,!1,i.userId,4,999);await F(s,r,e),await N.SyncDataOnline()}async deletePage(e){await Me(e)}}class Li{_pagesService;constructor(){this._pagesService=new tt}async getPagesListHTML(){window.pageHandler=Zr;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(a=>{let i=a?.data?.[`the_${I.PAGE_COMP_NAME}`],o=i?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,s=i?.[`the_${I.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
            <li class="page-item">
              <router-link class="page_title" href="?page-id=${a.id}" data-pageId="${a.id}" onclick="pageHandler(event)">
                <span><img src="./images/icons/pages-white.svg" alt="" class="icon" /></span>
                  ${o}
              </router-link>
                  <!-- Three-Dot Dropdown Icon -->
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${a?.id})" title="Options"> more_vert </span>

              <!-- Dropdown Menu -->
              <ul class="dropdown-menu" id="dropdown-menu-${a?.id}" data-slug="${s}", data-title="${o}">
                <li class="d-flex align-items-center justify-content-between " id="fs-rename-page-button" data-id=${a?.id}>
                  <span class="pe-none">Rename</span>
                  <span class="material-symbols-outlined pe-none">edit</span>
                </li>
                <li class="d-flex align-items-center justify-content-between" id="fs-duplicate-page-button" data-id=${a?.id}>
                  <span class="pe-none">Duplicate</span>
                  <span class="material-symbols-outlined pe-none">file_copy</span>
                </li>
                <li class="d-flex align-items-center justify-content-between delete-icon" id="fs-delete-page-button" data-id=${a?.id}>
                  <span >Delete</span>
                  <span class="material-symbols-outlined " >delete </span>
                </li>
                <li class="d-flex align-items-center justify-content-between"  onclick="downloadPage(${a?.id})">
                  <span>Download</span>
                  <span class="material-symbols-outlined">download </span>
                </li>
              </ul>
             </li>
          `}).join(""):`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No pages created yet!</p>
            </li>
          `}catch(e){return console.error("error",e),e?.status===401&&je(),`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">Sorry, couldn't connect to server.</p>
            </li>
          `}}getCreatePageSidebarHTML(){return`
      <div id="fs-page-create-submenu" class="fs-page-create-submenu">
        <div class="sidebar_submenu_title">
          <h4>Create New Page</h4>
          <button type="button" id="fs-save-page-button" class="btn btn-primary btn-xs fs-mini-action-button fs-save-page-button">
            <span class="material-symbols-outlined">
            save
            </span>
            Create Page
          </button>
        </div>
        <div class="sidebar_submenu_entry py-4">
          <form id="fs-create-page-form">
            <p>
              <label>Page title</label>
              <input class="form-control" name="title" type="text" placeholder="page title" />
            </p>
            <p>
              <label>slug</label>
              <input class="form-control" name="slug" type="text" placeholder="page slug" disabled/>
            </p>
          </form>
        </div>
      </div>
    `}getEditPageSidebarHTML(e,t,a){return`
      <div id="fs-page-edit-submenu" class="fs-page-edit-submenu">
        <div class="sidebar_submenu_title">
          <h4>${t.name}</h4>
            <div class="d-flex gap-2">
              <button type="button" id="fs-update-page-button" class="btn btn-primary btn-xs fs-mini-action-button fs-save-page-button">
                <span class="material-symbols-outlined">
                  save
                </span>
                Update Page
              </button>
              <button type="button" id="fs-delete-page-button" class="btn btn-danger btn-xs fs-mini-action-button fs-delete-page-button" data-id=${e}>
                <span class="material-symbols-outlined">
                  delete
                </span>
                Delete Page
              </button>
            </div>
        </div>
        <div class="sidebar_submenu_entry py-4">
          <form id="fs-create-page-form">
            <p>
              <label>Page title</label>
              <input data-id="${t.id}" class="form-control" name="title" type="text" placeholder="page title" value="${t.name}" />
            </p>
            <p>
              <label>slug</label>
              <input data-id="${a.id}" class="form-control" name="slug" type="text" placeholder="page slug" value="${a.name}" />
            </p>
          </form>
        </div>
      </div>
    `}}const Es=(()=>{const n=()=>{document.querySelectorAll("#navBarContainer > span").forEach(s=>{s.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(s=>{s.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(s=>{s.remove()})};return{toggle:i=>{const o=i.target,s=o?.dataset?.id;if(o.classList.contains("activeNavigationIcon")){n();return}if(s){document.querySelectorAll("#navBarContainer > span").forEach(u=>{u.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(u=>{u.classList.remove("navActive")});const d=document.getElementById(s);document.querySelector(`[data-id='${s}']`)?.classList.add("activeNavigationIcon"),d?.classList.add("navActive"),s=="fs-all-pages-list"&&new va().initPagesSidebar()}},collapseNavbar:i=>{const o=i.target;document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.getElementById(o.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")})},checkForActiveNavigation:()=>{const i=document.querySelector(".activeNavigationIcon");if(i){const o=i.dataset?.id||"";document.getElementById(o)?.classList.remove("navActive")}},resetNavigationBar:n}})();function Vt(n){return new Promise(e=>{const t=document.createElement("div");t.className="custom-confirm-modal",t.innerHTML=`
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content h-50">
                    <div class="modal-body">
                        <p>${n}</p>
                    </div>
                    <div class="modal-footer p-2 justify-content-between">
                        <button type="button" id="confirm-yes" class="btn btn-primary mx-3">Yes</button>
                        <button type="button" id="confirm-no" class="btn btn-secondary mx-3" data-bs-dismiss="modal">No</button>
                    </div>
                    </div>
                </div>
        `,t.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(t),e(!0)}),t.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(t),e(!1)}),document.body.appendChild(t)})}class R{static staticElement;static previousSelectedStaticElement}function St(){const n=document.getElementById("select-box");n.style.display="none"}function Va(){const n=document.getElementById("select-box");it(),n.style.transition="none",Rt()}function Rt(){const n=R?.staticElement;if(n){const e=n.getBoundingClientRect(),t=e.left,a=e.top,i=document.getElementById("select-box");i.style.display="block",i.style.width=n.offsetWidth+"px",i.style.height=n.offsetHeight+"px",i.style.top=`calc(${a}px)`,i.style.left=`calc(${t}px)`}}function ve(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),t=a=>{a.removeEventListener("click",at),a.removeEventListener("mouseenter",bt),a.removeEventListener("mouseleave",it)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&t(a)}),e.forEach(a=>{a.classList.contains("fslayout-row")?(a.addEventListener("click",function(i){i.target===a&&(i.preventDefault(),i.stopPropagation(),at(i))}),a.addEventListener("mouseenter",bt),a.addEventListener("mouseleave",it)):a.classList.contains("fslayout-col")?a.addEventListener("click",function(i){if(i.target===a){i.preventDefault(),i.stopPropagation();const o=a.closest(".fslayout-row");if(o){const s=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(s,"target",{value:o}),at(s)}}}):a.closest(".fslayout-col")?(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),at(i)}),a.addEventListener("mouseenter",bt),a.addEventListener("mouseleave",it)):(a.closest(".edited-widget-container")||!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),at(i)}),a.addEventListener("mouseenter",bt),a.addEventListener("mouseleave",it))})}function Ts(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),t=a=>{a.removeEventListener("click",at),a.removeEventListener("mouseenter",bt),a.removeEventListener("mouseleave",it)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&t(a)})}class Be{static instance;static events=new Map;constructor(){}static getInstance(){return Be.instance||(Be.instance=new Be),Be.instance}static subscribe(e,t){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(t)}static publish(e,t){this.events.has(e)&&this.events.get(e).forEach(a=>a(t))}static unsubscribe(e,t){if(this.events.has(e)){const a=this.events.get(e),i=a.indexOf(t);i>-1&&a.splice(i,1)}}}class Ss extends Mo{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=Be.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),t=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(t),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),Be.subscribe("page:elementClick",a=>{this.handlePageElementClick(a)}),Be.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),t=this.buildTree(e);t&&this.treeRoot&&this.treeRoot.appendChild(t)}getHtml(){return""}handlePageElementClick(e){let t=e;for(;t&&!this.treeItems.has(t);)t=t.parentElement;if(t){const a=this.treeItems.get(t);if(a){document.querySelectorAll(".tree-item").forEach(o=>{o.classList.remove("active")}),a.classList.add("active"),a.scrollIntoView({behavior:"smooth",block:"center"});let i=a.closest(".tree-node")?.parentElement;for(;i;){if(i.classList.contains("children")&&i.classList.contains("hidden")){i.classList.remove("hidden");const o=i.previousElementSibling?.querySelector(".toggle-btn");o&&(o.innerHTML="▼")}i=i.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const t=document.createElement("div");t.className="tree-node";const a=document.createElement("div");a.className="tree-item",this.treeItems.set(e,a);const i=e.tagName.toLowerCase(),o=e.id?`#${e.id}`:"",s=Array.from(e.classList).map(l=>`.${l}`).join("");if(e.children.length>0){const l=document.createElement("button");l.className="toggle-btn",l.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',l.onclick=d=>{d.preventDefault(),d.stopPropagation();const c=t.querySelector(".children"),u=c.classList.contains("hidden");c.classList.toggle("hidden"),l.innerHTML=u?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},a.appendChild(l)}s.includes(".added-widget-container")&&a.classList.add("widget-tree-node");const r=document.createElement("div");if(r.classList.add("text-truncate"),r.innerHTML=`
      <span class="element-tag">${i}</span>
      <span class="element-id">${o}</span>
      <span class="element-class">${s}</span>
    `,a.appendChild(r),a.onmouseenter=()=>this.handleHover(e),a.onmouseleave=()=>this.handleHover(null),a.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},t.appendChild(a),e.children.length>0){const l=document.createElement("div");l.className="children hidden",Array.from(e.children).forEach(d=>{if(d instanceof HTMLElement){const c=this.buildTree(d);c&&l.appendChild(c)}}),t.appendChild(l)}return o!=="#widget-details"?t:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const t=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(t)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(a=>{this.isAllExpanded?a.classList.remove("hidden"):a.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(a=>{a.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function he(){const n=document.getElementById("tree-root");n.innerHTML="";const e=f.staticWidgetTree.html,t=document.querySelector(".toggle-all-btn");e?(t.style.display="flex",new Ss().mount(n)):(t.style.display="none",n.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class Fn{static navbar}function Cs(n){return n?.widgetcodeId}async function xi(n,e,t=!0,a,i,o=null){console.log("parentWidget",o);let s=new kt;s.html=n.html,s.widgetState={...a},s.widgetType=n.type,s.componentDidMountFunction=n.before_render,s.addEventFunction=n.after_render,s.mountChildWidgetsFunction=n.mount_child,s.customFunctions=n.custom_functions,s.widgetDependenciesData=n.dependency,s.inDevelopment=!0,e.innerHTML="";let r=e;if(t=!1,r&&(await s.mount(r),n.widget=s,n.children.length>0&&s.childWidgetElement?.length>0))for(let l=0;l<n.children?.length;l++){let d=n.children[l];for(let c=0;c<s.childWidgetElement.length;c++){let u=s.childWidgetElement[c];if(d.wrapper===u.id){const p=$.clearDraggedWidget(d),m=await xi(p,u,t,s.widgetState,i,s);s.childWidgets.push(m),s.css=s.css+m.css+`#${d.wrapper} { ${d.css} }`,m.dataChange(g=>{let h=g?.type?.characterValue;h&&(s.childrenData[h]=g)})}}}return s}function Ht(n,e,t=!1,a,i,o){let s=Date.now();const r=document.createElement("div");if(r.innerHTML=`<div id="wdgtcopy${s}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,t==!1)if(e!=0&&e!=null&&e!=null&&o){console.log("beforeElement -->",a),document.getElementById("builder-workarea")===n&&(i="inside");const d=n.parentElement,c=r.firstChild;if(i==="above")d.insertBefore(c,n);else if(i==="below"){const p=n.nextElementSibling;p?d.insertBefore(c,p):n.parentNode.appendChild(r.firstChild)}else if(i==="inside"){const p=pa(n,o.clientY);p==null?n.appendChild(c):n.insertBefore(c,p)}return document.getElementById(`wdgtcopy${s}`)?document.getElementById(`wdgtcopy${s}`):n.querySelector(`#wdgtcopy${s}`)}else return n.insertBefore(r.firstChild,a),document.getElementById(`wdgtcopy${s}`)?document.getElementById(`wdgtcopy${s}`):n.querySelector(`#wdgtcopy${s}`);return n}const Ke=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],ze=["span","a","img","button","input","label","textarea","select"],Ls=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],Ra={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...ze]},h2:{accepts:[...ze]},h3:{accepts:[...ze]},h4:{accepts:[...ze]},h5:{accepts:[...ze]},h6:{accepts:[...ze]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...ze]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},xs=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function Vn(n,e){const t=n.target,a=n.target;let i=null;for(const u of a.children){const p=u.getBoundingClientRect();if(n.pageY<p.top+window.scrollY){i=u;break}}t.classList.remove("dragging-area");const o=As(t,"added-widget-container"),s=n.clientY;let r,l;if(o){let u=function(p,m){const g=p.height,h=m-p.top;return h<g*.25?"above":h>g*.75?"below":"inside"};if(r=o.getBoundingClientRect(),l=u(r,s),l==="inside")return{status:!1,message:"Cannot be dropped inside WIDGET!"}}else r=t.getBoundingClientRect(),l=Lt(r,s);const d=e?.data_type||"",c=n?.target?.tagName?.toLowerCase();return Mt.includes(c)&&l==="inside"?{status:!1,message:`${d} cannot be dropped inside ${c} tag.`}:Ke.includes(c)&&Ra[c]?.accepts?.length&&!Ra[c]?.accepts?.includes(d)&&l==="inside"?{status:!1,message:`${d} cannot be dropped inside ${c} tag.`}:{status:!0,message:"",elementBelowDrag:i,dropzoneEl:o||t}}function As(n,e){for(;n;){if(n.classList&&n.classList.contains(e))return n;n=n.parentElement}return!1}class ie{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(t=>t.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const t=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${t}`)).slice(0,-1).forEach(i=>i.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(t),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const t=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,t.from-6),t.from)!=="tsccs.")return null;const i=Object.keys(ui).filter(o=>o.startsWith(t.text));return i.length>0?{from:t.from,to:t.to,options:i.map(o=>({label:o,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your code here */",extensions:[dt,ut,sn(),rn({activateOnTyping:!0}),Do.data.of({autocomplete:this.tsccsCompletions}),ra(),la(Ho(new Vo,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),ln.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(t=>{if(t.docChanged){const a=t?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=a;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=a;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=a;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=a;break;case"widgetDependencies-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.dependency=a;break;default:const o=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(s=>`${s.slug}-editor-split`===this.editorContainerId);o?.length&&(o[0].code=a)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function Ai(n){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",n)try{const t=await mt.format(n,{parser:"babel",plugins:[dn,un],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=t}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function Ws(){const n=new ie("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function Wi(n,e){const t=document.querySelector('.cm-content[data-language="css"]');if(t.innerHTML="/* Write your CSS here */",e){let a=document.querySelector(".child-widget-style");a||(a=document.createElement("style"),a.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",a)),a.textContent+=e}if(n)try{const i=(t.textContent+n).split("/* Write your CSS here */").join(" ");t.textContent=i;const o=await mt.format(i,{parser:"css",plugins:[Ro],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});t.textContent=o||"/* Write your CSS here */"}catch(a){console.error("CSS formatting error:",a),t.textContent=n}}async function Ii(n){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",n)try{const t=await mt.format(n,{parser:"babel",plugins:[dn,un],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=t}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function Is(){const n=new ie("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function ye(n){const e=document.querySelector('.cm-content[data-language="html"]'),t=document.getElementById("builder-workarea");if(t?.querySelector("#widget-details")?.remove(),e)try{const i=document.createElement("div");let o=n||t?.innerHTML||"";i.innerHTML=o;const s=i.firstChild;s&&s.nodeType===1&&s.classList.contains("mftsccs-marking-element")&&(o=s.innerHTML),i.innerHTML=o;async function r(d){if(d.dataset.widgetid){const c=await Z(Number(d.dataset.widgetid));c&&c.typeCharacter=="the_widget"&&(d.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let c=0;c<d.childNodes.length;c++){const u=d.childNodes[c];u instanceof HTMLElement&&await r(u)}}await r(i),o=i.innerHTML;const l=await mt.format(o,{parser:"html",plugins:[Uo],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=l||"<!-- Write your HTML here -->"}catch(i){console.error("HTML formatting error:",i),e.textContent=n}else alert("widget html editor not found in dom")}async function ks(n){const e=document.getElementById("widgetTypeValue");e&&(e.value=n||"");const t=document.getElementById("widgetType");t&&(t.value=n||"")}function mn(n){if(!n)return;const e=document.getElementById("builder-workarea"),t=document.createElement("div");t.id="widget-details",t.innerHTML="",t.innerHTML=`
    <button onclick="openDocumentationModal(${n}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(t)}function da(){const n=document.querySelector(".content-target");n.innerHTML="",n.textContent="Widget Loading..."}function pn(){return document.querySelectorAll(".content-target")[0]}function Ua(n){const e={past:[],present:n,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(t){e.past.push(e.present),e.present=t,e.future=[]},undo(){if(e.past.length===0)return;const t=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=t,t},redo(){if(e.future.length===0)return;const t=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=t,t}}}class H{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),t=document.getElementById("redo-btn");e?.addEventListener("click",H.undoAction),t?.addEventListener("click",H.redoAction)}static renderActionHistory(){H.actionHistories=Ua(JSON.stringify(f?.staticWidgetTree)),Ua(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:t}=H.actionHistories.getState(),a=document.getElementById("undo-btn"),i=document.getElementById("redo-btn");a&&(a.disabled=!e),i&&(i.disabled=!t)}static async undoAction(){const e=H.actionHistories.undo();e!==void 0&&(Xa(e||""),H.updateButtonStates())}static async redoAction(){const e=H.actionHistories.redo();e!==void 0&&(Xa(e||""),H.updateButtonStates())}static updateActionHistories(){H.actionHistories.push(JSON.stringify(f.staticWidgetTree)),H.updateButtonStates()}}async function Ms(){const n=document.getElementById("widget-prompt-modal");n&&n.remove()}async function Ps(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function Bs(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function $s(){const n=document.getElementById("prompt-text");n.addEventListener("input",()=>{n.style.height="auto";const e=Math.min(n.scrollHeight-8,120);n.style.height=`${e}px`,n.style.overflowY=e===120?"auto":"hidden"})}class ki{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const t=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],i=((o,s=3)=>{if(o.length<s)return[];const r=new Set;for(;r.size<s;){const l=Math.floor(Math.random()*o.length);r.add(l)}return[...r]})(t,2);this.randomSuggestionEl=i?.map(o=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${t[o]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),$s(),setTimeout(()=>{const t=document.querySelector(".aiAssistantTabs"),a=document.querySelectorAll("#aiChatContainer, #prototypeWidget");t.querySelector("button").classList.add("active"),a[0].classList.add("active"),t.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll("button").forEach(r=>r.classList.remove("active")),a.forEach(r=>r.classList.remove("active"));const o=i.dataset.id,s=document.getElementById(o);i.classList.add("active"),s?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=Ms,window.minimizeAssistant=Ps,window.maximizeAssistant=Bs,`
      <div id="widget-prompt-modal" class="col-md-5 ${this.assistantChatId&&this.assistantChatId!==""?"d-none":"d-flex"}" >
        <div class="py-2 px-3 bg-secondary text-light d-flex justify-content-between align-items-center">
          <p class="mb-0 d-flex align-items-center gap-2">
            <span class="material-symbols-outlined text-light fs-5">
            wand_stars
            </span> WICO AI
          </p>
          <!-- <span class="material-symbols-outlined" style="cursor: pointer;"
            onclick="closeAssistant('widget-prompt-modal')">close</span> -->
          <span onclick="minimizeAssistant('widget-prompt-modal')" class="material-symbols-outlined icon-minimize" title="Miniimize">minimize</span>
        </div>

        <div class="aiAssistantTabs">
          <button data-id="aiChatContainer">Chat</button>
          <button data-id="prototypeWidget">Visual</button>
        </div>
        <div id="aiChatContainer">
          <div class="chat-content" id="prompt-content">
            <div id="default-message" class="text-center mt-4 mb-2">
              <div class="text-center">
                <span class="material-symbols-outlined text-light fs-2">
                  wand_stars
                </span>
              </div>
              <h5 class="mt-2 mb-4">What do you want to create?</h5>    
              <div id="suggestion-prompts-container">
                ${this.randomSuggestionEl}
              </div>
            </div>
          </div>

          <form class="prompt-container" id="prompt-form">
            <div class="prompt-section">
              <textarea id="prompt-text" placeholder="Create a widget for..."></textarea>
              <button class="button-send" type="submit" disabled>
                <span class="material-symbols-outlined">
                  arrow_upward
                </span>
              </button>
              </div>
              <!-- <select id="model-list" name="title" class="model-select" required>
                <option value="gpt-5-mini">gpt-5-mini</option>
                <option value="gpt-5-nano">gpt-5-nano</option>
                <option value="gpt-4.1-mini" selected>gpt-4.1-mini</option>
                <option value="gpt-4o-mini">gpt-4o-mini</option>
                <option value="gemini-2.5-flash">gemini-2.5-flash</option>
                <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite</option>
                <option value="gemini-2.0-flash">gemini-2.0-flash</option>
                <option value="gemini-2.0-flash-lite">gemini-2.0-flash-lite</option>
              </select> -->
          </form>
        </div>
        <div id="prototypeWidget">Visual Concept Connection here...</div>
      </div>
      <div id="widget-prompt-tab" class="col-md-2 ${this.assistantChatId===""?"d-none":""}">
        <div class="py-2 px-3 bg-secondary text-light d-flex justify-content-between align-items-center">
          <p class="mb-0 d-flex align-items-center gap-2">
            <span class="material-symbols-outlined text-light fs-5">
            wand_stars
            </span> WICO AI
          </p>
          <span onclick="maximizeAssistant('widget-prompt-modal')" class="material-symbols-outlined icon-maximize" title="Maximize">maximize</span>
        </div>
      </div>
    `}}async function Ns(n){const e=document.getElementById("widget-btn-wrapper");if(e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
            <div class="position-relative" style="z-index: 100;">
              <div class="w-100 d-flex justify-content-center">
                <button
                  id="update-publish-widget-btn"
                  onclick="updateWidget(event, ${n}, true)"
                  class="btn btn-primary btn-sm d-flex align-items-center gap-1"
                  style="border-radius: 0.2rem 0 0 0.2rem; border-right: 1px solid #A2A2A2;"
                  data-widgetid="${n}"
                >
                  <span class="material-symbols-outlined">article_shortcut</span>
                  Update & Publish
                </button>

                <div
                  id="updateDropDownArrow"
                  class="btn btn-primary btn-sm d-flex justify-content-center align-items-center";
                  style="width: 25px; border-radius: 0 0.2rem 0.2rem 0;"
                >
                  <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
              </div>

              <!-- Position and spacing fixed for dropdown-like button -->
              <button
                id="update-widget-btn"
                style="right: -4px; top: 90%;"
                onclick="updateWidget(event, ${n})"
                class="btn btn-primary btn-sm d-flex align-items-center gap-1 mx-1 position-absolute w-100 mt-1 shadow-sm d-none"
                data-widgetid="${n}"
              >
                <span class="material-symbols-outlined">update</span>
                Update Only
              </button>
            </div>
          `;const a=e.querySelector("#updateDropDownArrow"),i=e.querySelector("#update-widget-btn");i&&a&&i.addEventListener("click",()=>{i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),a&&i&&a.addEventListener("click",()=>{i.classList.contains("d-none")?(i.classList.remove("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function js(){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function Ds(){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class Mi{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.main.empty?a({changes:{from:i.main.from,insert:"  "},selection:{anchor:i.main.from+2}}):a({changes:{from:i.main.from,to:i.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"<!-- Write your HTML here -->",extensions:[dt,ut,Oo(),rn(),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),ln.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateHTML(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=At;class Pi{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(a=>a.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const t=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=t,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your JavaScript here */",extensions:[dt,ut,sn(),rn(),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),ln.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(async t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateJS(a)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function za(){const n=document.getElementById("codeBlocksContainer"),e=n.querySelectorAll(".sub-tab-btn");if(!n.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const a=document.getElementById("onmount-editor-split");a&&a.classList.add("active")}}async function Bi(n){const e=n?.id,t=n?.code,a=n?.slug,i=n?.name,o=document.querySelectorAll(".custom-service-btn"),s=Array.from(o)?.filter(u=>u?.getAttribute("data-subtab")===a),r=document.getElementById("lifecycle"),l=r?.querySelector(".sub-tab-nav");if(!s.length){const u=document.createElement("button");u.classList.add("sub-tab-btn","custom-service-btn"),u.setAttribute("data-subtab",a),u.innerHTML=`
      <span class="service-name">${i}</span>
      <span class="material-symbols-outlined" onclick="toggleDropdown(event, ${e})" title="Options"> more_vert </span>
      <!-- Dropdown Menu -->
      <ul class="dropdown-menu" id="dropdown-menu-${e}">
        <li class="d-flex align-items-center justify-content-between" onclick="openRenameCustomFunction(event, '${a}', ${e})">
          <span>Rename</span>
          <span class="material-symbols-outlined">edit</span>
        </li>
        <li class="d-flex align-items-center justify-content-between delete-icon" onclick="deleteCustomFunction(event, '${a}', ${e})">
          <span>Delete</span>
          <span class="material-symbols-outlined">delete</span>
        </li>
      </ul>
    `,l?.appendChild(u);const p=document.createElement("div");p.classList.add("sub-tab-content","custom-editor-content"),p.id=`${a}-editor-split`,p.setAttribute("data-subtab",a),r?.appendChild(p);const m=`${a}-editor-split`;Hs(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(u=>{u.addEventListener("click",function(){const p=u.getAttribute("data-subtab"),m=u.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(g=>{g.classList.remove("active")}),u.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${p}"]`)?.classList.add("active")})}),setTimeout(async()=>{const u=document.querySelector(`#${a}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(u&&(u.textContent="/* Write your code here */",t))try{const p=await mt.format(t,{parser:"babel",plugins:[dn,un],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});u.textContent=p}catch(p){console.error("JS formatting error:",p),u.textContent=t}},500)}async function Hs(n){await new ie(n).initializeEditor()}async function Os(n,e,t){const a=e.trim().toLocaleLowerCase().split(" ").join("-"),i=f.staticWidgetTree?.custom_functions?.filter(c=>c.slug===n);i[0].name=e,i[0].slug=a;const o=document.querySelector(`button[data-subtab=${n}]`);o?.setAttribute("data-subtab",a),o.innerHTML=`
    <span class="service-name">${e}</span>
    <span class="material-symbols-outlined" onclick="toggleDropdown(event, ${t})" title="Options"> more_vert </span>
    <!-- Dropdown Menu -->
    <ul class="dropdown-menu" id="dropdown-menu-${t}">
      <li class="d-flex align-items-center justify-content-between" onclick="openRenameCustomFunction(event, '${a}', ${t})">
        <span>Rename</span>
        <span class="material-symbols-outlined">edit</span>
      </li>
      <li class="d-flex align-items-center justify-content-between delete-icon" onclick="deleteCustomFunction(event, '${a}', ${t})">
        <span>Delete</span>
        <span class="material-symbols-outlined">delete</span>
      </li>
    </ul>
  `;const s=o?.querySelector("span.service-name");s&&(s.innerText=e);const r=document.getElementById(`${n}-editor-split`);r?.setAttribute("data-subtab",a),r.id=`${a}-editor-split`,await new ie(`${a}-editor-split`).initializeEditor();const d=f.staticWidgetTree?.custom_functions?.filter(c=>c.slug===a);Bi(d?.[0]),Ce("rename-custom-function-modal")}class qs{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,t){this.customFunctionId=t,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const a=document.getElementById("rename-custom-function-modal").querySelector("form");a&&a.addEventListener("submit",i=>{i.preventDefault();const o=a.customFunctionName.value.trim(),s=/^[_A-Za-z][_A-Za-z ]*$/.test(o),r=document.getElementById("service-rename-error");s?(r.textContent="",r.classList.add("d-none"),Os(this.currentCustomFunctionSlug,o,this.customFunctionId)):(r.classList.remove("d-none"),r.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
      <dialog id="rename-custom-function-modal" class="col-md-3">
        <h4>Rename Service</h4>
        <form method="dialog" class="mt-3">
          <div class="mb-3">
            <label for="customFunctionName" class="form-label">New Service Name</label>
            <input type="text" class="form-control" autocomplete="widget-service-name" name="customFunctionName" id="customFunctionName" value="" placeholder="e.g. new service">
          </div>
          <div class="d-none alert alert-danger" id="service-rename-error"></div>
  
          <div class="text-end">
            <button class="btn btn-secondary" onclick="closeModal('rename-custom-function-modal')" type="button">Cancel</button>
            <button type="submit" class="btn btn-info">Rename Now</button>
          </div>
        </form>
      </dialog>
    `}}const gn="unsaved_widget";async function Rn(){if(ma())return;const e=Vs(),t={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},a=JSON.stringify(t),i=new Blob([a]).size,s=4.5*1024*1024-e;if(i<=s)try{localStorage.setItem(gn,a),ua("save-widget")}catch(r){console.error("Error saving to localStorage:",r)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),Pt()}function Fs(n){return new Blob([n]).size}function Vs(){let n=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const t=localStorage.getItem(e);n+=Fs(e+t)}return n}async function Pt(){localStorage.removeItem(gn),yt()}const In=async n=>{if(ma())return;n?.preventDefault();const t=localStorage.getItem(gn);if(t){const a=JSON.parse(t);f.widgetTree=a?.widgetTree;const i=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,o=new URLSearchParams(window.location.search).get("widget-id");i===Number(o)?(i||$.enableWidgetButtons(),await De(),H.updateActionHistories(),A.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},ua=async(n="")=>{if(ma())return;const t=document.querySelector("#widget-properties .row"),a=document.getElementById("btn-draft-widget"),i=localStorage.getItem(gn),o=JSON.parse(i),s=o?.widgetTree?.origin||o?.widgetTree?.widgetId,r=new URLSearchParams(window.location.search).get("widget-id");if(i&&!a){if(s!==Number(r)){yt();return}const l=document.createElement("div");l.id="draft-widget",l.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),l.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,t?.appendChild(l);const d=document.getElementById("btn-draft-widget");d?.removeEventListener("click",c=>In(c)),d?.addEventListener("click",c=>In(c)),s===0&&!n&&setTimeout(()=>{In()},0)}else i&&a?(s!==Number(r)||s===Number(r)&&!n)&&yt():!i&&a&&yt()};function yt(){document.getElementById("draft-widget")?.remove()}function ma(){const n=window.location.href,t=new URL(n).searchParams.get("page-id");return t||""}class Rs{static concepts=[];static connections=[];static transactions;static renderVisualTree(){let e={concepts:this.concepts,connections:this.connections},t=document.getElementById("tree-root-vccs");t&&Ne(z.visual_widget,t,e,!1)}static async getLocalConcepts(){this.renderVisualTree()}}const ot=(()=>{function n(d){const c=d.target,u=document.getElementById("codeBlocksContainer");u&&u.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),c.classList.add("selected")}function e(d){const c=d.target,u=document.getElementById("codeBlocksContainer");u&&u.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),c.classList.add("selected")}async function t(d){$.enableWidgetButtons();try{await De(),Rn(),H.updateActionHistories(),Rs.getLocalConcepts(),A.infoMessageToast(d)}catch(c){A.errorToast("widget synchronization failed"),console.error(c)}}const a=()=>{const d=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),d.style.display="flex";const p=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});p&&p.dispatchEvent(m),Ge.enableHeader()},i=()=>{const d=document.getElementById("widgetButtionCodeViewWrapper"),c=document.createElement("div");c.classList.add("codeSplitViewButton");const u=document.createElement("div");u.appendChild(c);const p=document.createElement("div");p.id="codeBlocksContainer",p.innerHTML=`
    <nav class="tab-nav">
      <div>
        <button class="tab-btn active" data-tab="html">HTML</button>
        <button class="tab-btn" data-tab="css">CSS</button>
        <!-- <button class="tab-btn" data-tab="js">JavaScript</button> -->
        <button class="tab-btn" data-tab="lifecycle">Lifecycle (JavaScript)</button>
      </div>
      <div class="crossFullscreenIcon">
        <!-- <span class="material-symbols-outlined" title="Synchronize Widget" id="synchronizeWidgetBtn">
        upgrade
        </span> -->
        <button id="synchronizeWidgetBtn" title="Run Widget, Ctrl + Alt + r">
          <span class="material-symbols-outlined" >play_arrow</span>
          Run
        </button>
        <span class="material-symbols-outlined fullscreenicon cursor-pointer" title="Fullscreen, Ctrl + Alt + f">fullscreen</span>
        <button class="close-btn" title="Close Editor">&times;</button>
      </div>
    </nav>
    <div class="code-tabs">
      <div class="tab-content active" id="html">
        <div class="editor-container" id="editor-container-html-split" style="position: relative;"></div>
      </div>
      <div class="tab-content" id="css">
        <div class="editor-container" id="editor-container-css-split" style="position: relative;"></div>
      </div>
      <div class="tab-content" id="js">
        <div class="editor-container" id="editor-container-js-split" style="position: relative;"></div>
      </div>
      <div class="tab-content" id="lifecycle">
        <div class="life-cycle-button-wrapper">
        <div class="sub-tab-nav">
          <button class="sub-tab-btn active btn-tooltip" data-subtab="before-render" >
            <span>Before Render</span>
            <span class="material-symbols-outlined script-tooltip">
              info 
              <span class="script-tooltip-text">
              Any data that needs to be added before rendering the DOM. Currently we need to add this.render() inside it.
              </span>
            </span>
          </button>
          <button class="sub-tab-btn btn-tooltip" data-subtab="widget-dependencies">
            <span>Widget Dependencies</span>
            <span class="material-symbols-outlined script-tooltip">
              info 
              <span class="script-tooltip-text">
              Add the required widgets to dependencies before calling tsccs.renderLatestWidget().
              </span>
            </span>
          </button>
          <button class="sub-tab-btn btn-tooltip" data-subtab="after-render">
            <span>After Render</span>
            <span class="material-symbols-outlined script-tooltip">
              info 
              <span class="script-tooltip-text">
              It is called when the widget has been added to DOM and rendered. Add functionalities here.
              </span>
            </span>
          </button>
          <!-- <button class="sub-tab-btn" data-subtab="update">Update</button>
          <button class="sub-tab-btn" data-subtab="mount-child">Mount Child</button> -->
        </div>
          <div class="p-2">
            <button id="add-service-button" class="btn btn-primary me-2 btn-add-service">Add Service</button>
          </div>
        </div>
        <div class="sub-tab-content active" data-subtab="before-render" id="onmount-editor-split"></div>
        <div class="sub-tab-content" data-subtab="update" id="onupdate-editor-split"></div>
        <div class="sub-tab-content" data-subtab="after-render" id="addevents-editor-split"></div>
        <div class="sub-tab-content" data-subtab="mount-child" id="mountchildwidgets-editor-split"></div>
        <div class="sub-tab-content" data-subtab="widget-dependencies" id="widgetDependencies-editor-split"></div>
      </div>
    </div>
`,d?.appendChild(p),document.querySelectorAll(".tab-btn").forEach(v=>{v.addEventListener("click",function(){const S=v.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(L=>L.classList.remove("active")),v.classList.add("active"),document.getElementById(S)?.classList.add("active")})}),p.querySelectorAll(".sub-tab-btn").forEach(v=>{v.addEventListener("click",function(){const S=v.getAttribute("data-subtab"),L=v.closest(".tab-content");L?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(_=>{_.classList.remove("active")}),v.classList.add("active"),L?.querySelector(`.sub-tab-content[data-subtab="${S}"]`)?.classList.add("active")})});const h=document.querySelector(".fullscreenicon"),w=document.querySelector("#widgetButtionCodeViewWrapper");h?.addEventListener("click",()=>{w.classList.contains("fullscreen")?Ge.enableHeader():Ge.disableHeader(),w.classList.toggle("fullscreen")});const y=document.querySelector(".close-btn");y&&y.addEventListener("click",a),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>t("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(u.firstChild),setTimeout(()=>{const v=document.querySelector(".codeSplitViewButton");v&&(v.removeEventListener("click",n),v.addEventListener("click",n));const S=document.getElementById("designSplitViewButton");S&&(S.removeEventListener("click",e),S.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",v=>o(v))};function o(d){d.stopPropagation();try{const c="add-custom-service-dialog";document.getElementById(c)?.remove();const p=document.createElement("dialog");p.setAttribute("id",c),p.classList.add("col-md-3"),p.innerHTML=`
        <h4>New Service</h4>
        <form method="dialog" class="mt-3">
          <div class="mb-3">
            <label for="serviceName" class="form-label">Service Name</label>
            <input type="text" class="form-control" autocomplete="
            " name="serviceName" id="serviceName" value="" placeholder="e.g. validation service">
          </div>
          <div class="d-none alert alert-danger" id="service-name-error"></div>
  
          <div class="text-end">
            <button class="btn btn-secondary" onclick="closeModal('${c}')" type="button">Cancel</button>
            <button type="submit" class="btn btn-info">Save Now</button>
          </div>
        </form>
      `;const m=p.querySelector("form");return m&&m.addEventListener("submit",g=>{g.preventDefault();const h=m?.serviceName?.value.trim(),w=/^[_A-Za-z][_A-Za-z ]*$/.test(h),y=document.getElementById("service-name-error");w?(y.textContent="",y.classList.add("d-none"),l(g)):(y.classList.remove("d-none"),y.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(p),ce(c),"OPENED"}catch(c){console.error("Failed to rename widget:",c)}}async function s(d,c,u){console.log("openRenameCustomFunction -->",d,c,u),new qs(c,u),await ce("rename-custom-function-modal")}async function r(d,c,u){d.preventDefault();try{if(confirm("Do you want to delete the Service?")){A.infoMessageToast("Deleting the service...",0),u&&await Me(Number(u));const m=`button[data-subtab=${c}]`;document.querySelector(m)?.remove(),document.getElementById(`${c}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(S=>S.slug!==c);const w=document.getElementById("codeBlocksContainer");return w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(p){A.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",p)}}async function l(d){d.preventDefault();const c=d.target,p=new FormData(c).get("serviceName");let m=p?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const g=document.getElementById("lifecycle"),h=g?.querySelector("div.sub-tab-nav"),w=document.getElementById("codeBlocksContainer");w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active");const E=document.createElement("button");E.classList.add("sub-tab-btn","custom-service-btn","active"),E.setAttribute("data-subtab",m),E.innerHTML=`
      <span class="service-name">${p}</span>
      <span class="material-symbols-outlined" onclick="toggleDropdown(event, '${m}')" title="Options"> more_vert </span>

      <!-- Dropdown Menu -->
      <ul class="dropdown-menu" id="dropdown-menu-${m}">
        <li class="d-flex align-items-center justify-content-between" onclick="openRenameCustomFunction(event, '${m}')">
          <span>Rename</span>
          <span class="material-symbols-outlined">edit</span>
        </li>
        <li class="d-flex align-items-center justify-content-between delete-icon" onclick="deleteCustomFunction(event, '${m}')">
          <span>Delete</span>
          <span class="material-symbols-outlined">delete</span>
        </li>
      </ul>
    `,h.appendChild(E);const b=document.createElement("div");b.classList.add("sub-tab-content","custom-editor-content","active"),b.setAttribute("data-subtab",m),b.setAttribute("id",`${m}-editor-split`),g.appendChild(b),await new ie(`${m}-editor-split`).initializeEditor();const S={name:p,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(S),document.querySelectorAll(".tab-btn").forEach(C=>{C.addEventListener("click",function(){const x=C.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(W=>W.classList.remove("active")),C.classList.add("active"),document.getElementById(x)?.classList.add("active")})}),(w?.querySelectorAll(".sub-tab-btn")).forEach(C=>{C.addEventListener("click",function(){const x=C.getAttribute("data-subtab"),W=C.closest(".tab-content");W?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(P=>{P.classList.remove("active")}),C.classList.add("active"),W?.querySelector(`.sub-tab-content[data-subtab="${x}"]`)?.classList.add("active")})}),Ce("add-custom-service-dialog")}return{initializeCodeBlock:i,closeCodeView:a,synchronizeWidget:t,openRenameCustomFunction:s,deleteCustomFunction:r}})();async function Us(){await ua();const n=document.getElementById("select-box");if(n.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(C=>{C.remove()}),document.querySelectorAll(".custom-editor-content").forEach(C=>{C.remove()});const S=document.getElementById("codeBlocksContainer"),L=S?.querySelectorAll(".sub-tab-btn");S?.querySelector(".sub-tab-btn.active")||(L?.[0]?.classList.add("active"),S?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),H.renderActionHistory(),H.updateActionHistories(),Sn(f.staticWidgetTree),document.head.querySelectorAll("link.vde-css")?.forEach(b=>b.remove()),he();const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const i=document.getElementById("widget-builder");i.textContent="Widget Builder Panel",i.setAttribute("title","Widget Builder Panel"),$.disableWidgetButtons(),await new io().initializeEditor(),await new Pi().initializeEditor(),await new ie("onmount-editor-split").initializeEditor(),await new ie("onupdate-editor-split").initializeEditor(),await new ie("addevents-editor-split").initializeEditor(),await new ie("mountchildwidgets-editor-split").initializeEditor(),await new Mi().initializeEditor(),await new ie("widgetDependencies-editor-split").initializeEditor();const m=document.getElementById("widgetNameValue");m.value="";const g=document.getElementById("widgetTypeValue");g&&(g.value="");const h=document.getElementById("widgetType");h&&(h.value=""),document.getElementById("widget-version").classList.add("d-none");const y=document.getElementById("element-attributes");y.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,ka(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function zs(){const n=new Po;f.widgetTree=n,ot.synchronizeWidget("Workspace Cleared")}let Oe="",Ut="";async function Ja(n){try{const t=(await k())?.token,a=await fetch(`${z.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(n)});if(!a.ok){const d=await a?.text(),c=JSON.parse(d);throw A.errorToast(c.message),console.error(`API Error (${a.status}):`,d),zt(a.statusText,"error"),new Error(`API request failed with status ${a.status}`)}const i=a.body.getReader(),o=new TextDecoder("utf-8");let s="",r=null;for(;;){const{value:d,done:c}=await i.read();if(c)break;s+=o.decode(d,{stream:!0});const u=s.split(`

`);for(let p=0;p<u.length-1;p++){const m=u[p].trim();if(m.startsWith("data:")){const g=m?.slice(6).trim();try{const h=JSON.parse(g);if(h.status==="responding"&&await Gs(h.message_str),h.status==="success"&&(r=h),h.status==="error")throw A.errorToast(h.message?.[0]||"AI Error"),new Error(h.message?.[0])}catch(h){console.warn("Stream parse error:",h)}}}s=u[u.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),r}catch(e){return console.error(e),null}}async function $i(n){try{const e=JSON.stringify(f.staticWidgetTree),t=await k(),a={query:n.text_input,widgetTree:f.staticWidgetTree},i=await fetch(`${z.agentURL}/widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.token}`},body:JSON.stringify(a)});console.log("response_data -->",i);const o=await i.json();console.log("tree_data -->",o,typeof o);let s=o.data.widgetTree.data||o.data.widgetTree;typeof s=="string"&&(s=JSON.parse(s)),f.staticWidgetTree=s,$.enableWidgetButtons(),await De(),Rn(),H.updateActionHistories();return}catch(e){throw zn("prompt-loader"),console.error("AI model error",e),A.errorToast("There is some error"),e}}async function Js(n,e=""){e||(await Ye(n),f.resetWidgetTree()),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new ki("");const i=document.getElementById("prompt-text");Oe="",i.addEventListener("input",function(){const l=i.value.trim(),c=document.getElementById("prompt-form")?.querySelector(".button-send");c.disabled=l.length===0}),i?.addEventListener("keydown",function(l){if(l.key==="Enter"&&!l.shiftKey){l.preventDefault();const d={text_input:i?.value,chat_id:"",widget_type:"",stream:!0};Oe&&(d.tag="followup",d.chat_id=Oe,d.widget_type=Ut),Ct(d,e)}}),document.querySelector(".button-send").addEventListener("click",function(l){l.preventDefault();const d={text_input:i?.value,chat_id:"",widget_type:"",stream:!0};Oe&&(d.tag="followup",d.chat_id=Oe,d.widget_type=Ut),Ct(d,e)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(l=>{l?.addEventListener("click",function(d){d.preventDefault(),i.value=l?.innerText})})}async function Ct(n,e){if(e)Un(n.text_input),Ga("Assistant is working"),await $i(n),zn("prompt-loader");else if(n.text_input){Un(n.text_input),Ga("Assistant is working");const t=await Ja(n);if(zn("prompt-loader"),!t)return;Oe=t?.data?.chat_id,Ut=t?.data?.widget_type;const a=t?.message;if(f.staticWidgetTree.assistant={input:t?.data?.user_prompt,id:Oe,type:Ut},t?.status=="error")A.errorToast(a);else{if(n.widget_type!=="list"){n.widget_type==="form"&&Ni(Oe);const s=new Function("tsccs",t.data.data_structure_prototype)(ui);let r=document.getElementById("prototypeWidget");Ne(z.visual_prototype_widget,r,{prototype:s}).then(l=>{l.dataChange(async d=>{const c={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:d,type:"application/JSON",stream:!0};try{const u=await Ja(c);await Jn(u)}catch(u){throw u}})})}await zt(a);const i=document.createElement("button");i.classList.add("clearWorkspaceButton"),i.textContent="Clear Workspace",i.classList.add("btn","btn-danger"),i.addEventListener("click",()=>{zs(),i.remove()}),await zt(i),da(),await Jn(t)}}}async function zt(n,e){const t=document.querySelector(".chat-content"),a=document.createElement("div");if(a.classList.add("message","message-bot"),n instanceof HTMLButtonElement){const i=document.querySelector(".clearWorkspaceButton");i&&i.remove(),a.appendChild(n)}else e==="error"&&a.classList.add("text-danger","my-0","text-center"),a.innerText=n;t?.scrollTo({top:t.scrollHeight,behavior:"smooth"}),t?.insertAdjacentElement("beforeend",a)}async function Gs(n,e){const t=document.getElementById("response-status");if(t)t.innerHTML=n;else{const a=document.querySelector(".chat-content"),i=document.createElement("div");i.id="response-status",i.classList.add("message","message-bot"),i.innerHTML=n,a?.insertAdjacentElement("beforeend",i),a?.scrollTo({top:a.scrollHeight,behavior:"smooth"})}}function Un(n){const e=document.getElementById("default-message"),t=document.querySelector(".chat-content"),a=document.createElement("div");a.classList.add("message","message-user"),a.innerText=n,t?.insertAdjacentElement("beforeend",a),e?.remove();const i=document.getElementById("prompt-text");i.value="",i.style.height="44px"}function Ga(n){Ys("prompt-form");const e=document.getElementById("prompt-content"),t=document.createElement("div");t.id="prompt-loader",t.textContent=n,e?.insertAdjacentElement("beforeend",t)}function zn(n){document.getElementById(n)?.remove(),Qs("prompt-form")}function Ys(n){const e=document.getElementById(n);for(let t of e.elements)t.disabled=!0}function Qs(n){const e=document.getElementById(n);for(let t of e.elements)t.disabled=!1}async function Jn(n){const e=n?.data?.ui?.html||"",t=n?.data?.ui?.css||"",a=n?.data?.ui?.js||"",i=n?.data?.before_render||"",o=n?.data?.after_render||"",s={html:e,css:t,js:a,before_render:i,after_render:o,assistant:{id:n?.data?.chat_id,input:n?.data?.user_prompt,type:n?.data?.widget_type}};await Ks(s)}async function Ks(n){f.staticWidgetTree.html=n.html,f.staticWidgetTree.css=n.css,f.staticWidgetTree.js=n.js,f.staticWidgetTree.before_render=n.before_render,f.staticWidgetTree.after_render=n.after_render,f.staticWidgetTree.assistant=n.assistant;const e=f.staticWidgetTree,t=document.getElementById("builder-workarea");t.innerHTML="";const a=await xi(e,t);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await X(e,!1,a),H.renderActionHistory(),H.updateActionHistories(),he(),ve()}async function Ni(n){document.getElementById("prompt-suggestion")?.remove();const t={text_input:"create a list widget for it",chat_id:n,widget_type:"list",stream:!0},a=document.createElement("div");a.id="prompt-suggestion",a.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",a),document.getElementById("request-list-widget").addEventListener("click",async s=>{s.preventDefault(),Ct(t,""),js(),Ds()})}async function Zs(n){new ki(n?.id),Un(n?.input),await zt("Widget Generated Successfully!!"),n.type==="form"&&Ni(n?.id);const e=document.getElementById("prompt-text"),t={text_input:e?.value,chat_id:n?.id||"",widget_type:n?.type||"",tag:n?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(i){i.key==="Enter"&&(i.shiftKey||(i.preventDefault(),t.text_input=e?.value,Ct(t,"")))}),document.querySelector(".button-send").addEventListener("click",function(i){i.preventDefault(),t.text_input=e?.value,Ct(t,"")})}async function Xs(n){const e=document.querySelector("#widgetDependencies-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");e.textContent="/* Write your code here */";try{const a=n?.split("/* Write your code here */")?.join(" ");if(a){const i=await mt.format(a,{parser:"babel",plugins:[dn,un],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=i||"/* Write your code here */"}}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function X(n,e,t,a,i){ks(n?.type),Xs(n?.dependency);const o=e?"":n?.css,s=e?`div[data-widgetid="${n.id}"] {${n.css}}
${t?.css}`:t?.css;if(await Wi(o,s),ye(n?.html),await Ai(n?.after_render),await Ii(n?.before_render),n?.custom_functions?.length){const r=document.querySelectorAll(".custom-service-btn"),l=Array.from(r)?.map(u=>u.getAttribute("data-subtab")??""),d=n.custom_functions?.map(u=>u.slug);(l?.filter(u=>!d.includes(u))).forEach(u=>{const p=document.querySelector(`.custom-service-btn[data-subtab="${u}"]`);p&&p.remove(),document.getElementById(`${u}-editor-split`)?.remove()}),za(),n.custom_functions?.forEach(u=>{Bi(u)})}else document.querySelectorAll(".custom-service-btn").forEach(d=>{d.remove()}),document.querySelectorAll(".custom-editor-content").forEach(d=>{d.remove()}),za();(a||i)&&mn(n?.origin?n?.origin:n?.widgetId),a&&n?.assistant?.id&&Zs(n?.assistant)}const Gn="drop-indicator";function ji(){let n=document.querySelector(`.${Gn}`);return n||(n=document.createElement("div"),n.className=Gn,document.body.appendChild(n)),n}function er(n,e){const t=ji(),a=n.getBoundingClientRect();e==="top"?t.style.top=`${a.top-5}px`:e==="bottom"&&(t.style.top=`${a.bottom-5}px`),t.style.left=`${a.left}px`,t.style.width=`${a.width}px`,t.style.opacity="1",t.style.transform="scaleY(1)"}function Yn(){document.querySelectorAll(`.${Gn}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function tr(n,e,t){if(e.length===0)return{element:t,position:"top"};const a=n.clientY;let i=e[0],o=Math.abs(i.getBoundingClientRect().top-a);Math.abs(i.getBoundingClientRect().bottom-a);for(const d of e){const c=d.getBoundingClientRect(),u=Math.abs(c.top-a);Math.abs(c.bottom-a),u<o&&(i=d,o=u)}const s=i.getBoundingClientRect(),r=s.top+s.height/2,l=a<r?"top":"bottom";return{element:i,position:l}}async function Fe(n){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(a=>{a.remove()});const t=document.querySelectorAll("script.vde-js");if(t?.length&&t?.forEach(a=>{a.remove()}),await Sn(n),n?.children?.length)for(const a of n?.children){const i=a?.library;i?.css?.length&&i?.css?.forEach(o=>{const s=o?.url,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r)}),i?.js.length&&i?.js?.forEach(async o=>{await new Promise((s,r)=>{const l=o?.url,d=document.createElement("script");d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{s()},d.onerror=c=>{console.error("Failed to load script:",l,c),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(d)})})}}let Q=null,de;function hn(){const n=document.querySelector(".content-target > .mftsccs-marking-element");if(n){const e=document.querySelector(".content-target");Ae.fixContentTargetHeight(e,n)}}function nr(n){Q=n.target;const e=n.target;let t={data_type:n.target.getAttribute("data-type"),data_default:n.target.getAttribute("data-default"),data_void:n.target.getAttribute("data-void"),data_text:n.target.getAttribute("data-text"),elementId:n.target.getAttribute("data-elementId"),dataId:n.target.id,imageUrl:e.imageUrl,displayType:e.displayType};n.dataTransfer.setData("text",JSON.stringify(t)),n.dataTransfer.setData("id",n.target.id),n.dataTransfer.effectAllowed="move"}async function ar(n){n.stopPropagation();const e=n.target,t={widgetcodeId:n.target.getAttribute("data-widgetId"),sourceElementId:n.target.id,className:n.target.className,imageUrl:e.imageUrl,displayType:e.displayType,type:e.Type};n.dataTransfer.setData("text",JSON.stringify(t)),n.dataTransfer.effectAllowed="move"}function ir(n){n.preventDefault(),n.stopPropagation(),n.target.classList.add("dragging-area"),Bt.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",Ts()}function or(n){n.preventDefault(),n.stopPropagation(),n.target.classList.remove("dragging-area")}function sr(n){n.preventDefault(),n.stopPropagation(),(!Q||!(n.currentTarget instanceof HTMLElement))&&(Q=n?.target);const e=n.target,t=Array.from(e.children).filter(i=>i!==Q);ji();const a=tr(n,t,e);de=a,er(a.element,a.position)}function rr(){$.checkContent()?$.enableWidgetButtons():$.disableWidgetButtons()}async function lr(n){const e=await fn(n);Q=null,Yn(),H.updateActionHistories(),Bt.collapseNavbar(),rr(),hn(),he(),e&&(ye(),mn(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),ve()}function Jt(n,e){return Array.isArray(n?.children)&&(n.children=n?.children.filter(t=>t?.wrapper!==e),n.children.forEach(t=>Jt(t,e))),n}function Ze(n,e){let t;return Array.isArray(n?.children)&&(t=n?.children.filter(a=>a?.wrapper===e),n.children.forEach(a=>Ze(a,e))),t?.[0]}async function cr(n){n.preventDefault(),n.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(u=>{const p=document.getElementById(`${u}-content`);if(p&&p.style.display==="block"){const m={target:p.previousElementSibling};At(m,`${u}-content`)}});const t=document.getElementById("element-attributes");if(t&&t.style.display==="block"){const u={target:document.querySelector("#icon-attribute")};At(u,"element-attributes")}const a=R.staticElement,i=a?.parentElement,o=i?.parentElement,s=o?.dataset?.widgetid,r=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container"),l=a.querySelectorAll(".added-widget-container");if(a?.classList?.contains("added-widget-container")){const u=a?.id;Jt(f?.staticWidgetTree,u)}else l.length&&l.forEach(u=>{const p=u?.id;Jt(f?.staticWidgetTree,p)});if(r){const u=r.id;if(a?.remove(),R.staticElement.remove(),St(),a?.classList?.contains("added-widget-container")){const p=Ze(f?.staticWidgetTree,u);if(p){const m=r.querySelector(".mftsccs-marking-element");p.html=m?.innerHTML,X(p)}}else{const m=document.getElementById(u).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,X(f.selectedStaticWidgetTreeInfo.widgetTree)}he(),H.updateActionHistories();return}i?.classList.contains("mftsccs-marking-element")&&i.children.length===1&&i?.remove(),s&&(o?.children?.length||o?.remove()),a?.remove(),R.staticElement.remove(),St();const d=await Ot();return f.staticWidgetTree.html=d,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},_c(),X(f?.staticWidgetTree),he(),H.updateActionHistories(),$.checkContent()||($.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}function dr(n){return"drag"}function ur(n){return n.dataTransfer.setData("text",n.target.id),"start drag"}function mr(n){console.log("dragEndWidgetElement event ->",n)}function pr(n){return n.preventDefault(),n.stopPropagation(),"dragOverWidgetElement"}async function gr(n){await fn(n),ye()}let Gt=null;async function Di(n,e){if(!n)return console.error("dropFolderElement called without event"),!1;(c=>"dataTransfer"in c&&c.dataTransfer!==null)(n)&&(n.preventDefault(),n.stopPropagation());const a=n.target instanceof HTMLElement?n.target:null;if(!Q)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let o=n.target;if(!o.classList.contains("mftsccs-marking-element")&&!o.classList.contains("fslayout-col")&&o.id!=="builder-workarea"){const c=document.getElementById("builder-workarea"),u=o.closest(".mftsccs-marking-element"),p=o.closest(".fslayout-col");o=u||p||c}if((Q.contains(o)||Q===o)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),o=document.getElementById("builder-workarea")),!o)return console.error("Invalid dropzone"),!1;o?.classList.remove("dragging-area"),Yn();let s=Vn(n,e);if(!s.status)return alert(s.message),Q=null,!1;const r=e.dataType||e.type||e.data_type,l=r==="photo"||r==="Image"||r==="img",d=r==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(l){let c,u=!1;if(Q&&Q.tagName&&Q.tagName.toLowerCase()==="img"){if(u=!0,c=Q,c.parentElement===o&&console.log("Image is already in this dropzone, just repositioning"),!(c instanceof Node))return console.error("draggedItem is not a valid DOM node:",c),Q=null,!1;(!c.hasAttribute("style")||!c.style.width)&&c.setAttribute("style","width: 200px;")}else{const y=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(o.querySelectorAll(`img[src="${y}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),Q=null,!1;c=document.createElement("img"),c.setAttribute("src",y),c.setAttribute("style","width: 200px;")}let p=Ae.generateUUID();c.setAttribute("element-info-id",p);const m=o.classList.contains("file-item")&&o.classList.contains("photo-file")&&o.classList.contains("dragging");let g=c;if(m){const y=document.createElement("div");y.appendChild(c),g=y}try{if(u){const y=m&&c.parentElement?.parentElement||c.parentElement,T=m?c.parentElement:c;y&&y!==o&&T&&y.removeChild(T)}if(de?.position==="top"&&o?.children?.length&&de?.element)o.contains(de.element)&&!g.contains(de.element)&&g!==de.element?o.insertBefore(g,de.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),o.appendChild(g));else if(de?.position==="bottom"&&de?.element){const y=de.element,T=g;y.childElementCount===0&&y.classList.contains("mftsccs-marking-element")&&y===o.firstElementChild?y.appendChild(T):o.contains(y)&&y!==T&&!y.contains(T)&&!T.contains(y)?y.insertAdjacentElement("afterend",T):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),o!==T&&!T.contains(o)&&o.appendChild(T))}else o.appendChild(g)}catch(y){console.error("Error positioning element:",y instanceof Error?y.message:y);try{o.appendChild(g)}catch(T){return console.error("Cannot append element:",T),Q=null,!1}}c.removeAttribute("element-info-id");const h=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container");if(h){const y=h.id,T=Ze(f?.staticWidgetTree,y);if(T){const E=h.querySelector(".mftsccs-marking-element");E&&(T.html=E.innerHTML,await X(T))}return Q=null,!1}hr(),Q=null,St();const w=await lt();return f.staticWidgetTree.html=w,!0}else if(d){if(!s.status)return alert(s.message),Q=null,!1;if(e.sourceElementId){const C=e.sourceElementId||e.fileId;console.log("sourceElement ->",C)}let c=e.widget_id;if(!c)return console.error("Widget ID is missing from data"),Q=null,!1;o.classList.remove("dragging-area");const u=document.createElement("div");u.classList.add("wb-initial-empty"),u.style.display="block",u.style.marginBottom="10px",u.setAttribute("data-widget-id",c.toString());const p=Ae.generateUUID();u.id=`widget-${p}`;const m=await k();let g=o.classList.contains("publicWidgetRouter"),h=await ge(Number(c));const w=n.clientY,y=o.getBoundingClientRect(),T=Lt(y,w);let E;if(!g){const C=await We(Number(c),m.token);h=await ge(C?C.widgetId:Number(c)),h?.children?.length&&await yn(h),E=Ht(o,C?C.widgetId:c,!1,s.elementBelowDrag,T,n)}const b=$.clearDraggedWidget(h),v=await be(b,E);b.wrapper=E?.id,Yn();const S=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container");if(S){const C=S.id,x=Ze(f?.staticWidgetTree,C);x&&x.children.push(b);const P=document.getElementById(C).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=P?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=P?.style.cssText,await X(f.selectedStaticWidgetTreeInfo.widgetTree),Q=null,!1}const L=await lt();f.staticWidgetTree.html=L,f.staticWidgetTree?.children?.push(b);const _=f.widgetTree.children.indexOf(b);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[_],isChildWidget:!0,childWidgetIndex:_},await Fe(b),await X(b,!1,v),$.enableWidgetButtons(),Q=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),Q=null,!1}function hr(){document.querySelectorAll(".mftsccs-marking-element img").forEach(n=>{n.setAttribute("draggable","true"),n.addEventListener("dragstart",e=>{e.stopPropagation(),Gt=Date.now()}),n.addEventListener("dragend",e=>{e.stopPropagation(),setTimeout(()=>{Gt=null},100)})})}function fr(){Gt=null,Q=null,console.log("dragStartTime",Gt)}async function fn(n,e=!1,t,a){if(!n&&e&&t&&a){const l=await ge(Number(t)),d=Ht(a,t,!1,null,"below",n),c=$.clearDraggedWidget(l);let u=await be(c,d);c.wrapper=d?.id;const p=await Ot();f.staticWidgetTree.html=p,f.staticWidgetTree?.children?.push(c);const m=f.widgetTree.children.indexOf(c);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[m],isChildWidget:!0,childWidgetIndex:m},await Fe(c),X(c,!1,u),$.enableWidgetButtons();return}if(!n){console.error("dropElement called without event");return}n.preventDefault(),n.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let o=n.dataTransfer.getData("text");if((l=>{try{return JSON.parse(l),!0}catch{return!1}})(o))if(Object.keys(JSON.parse(o)).includes("widgetcodeId")){const l=JSON.parse(o);let d=Vn(n,l);const c=l.className.split(" ");if(!d.status){alert(d.message);return}const u=JSON.parse(o);if(u.sourceElementId){const x=document.getElementById(u.sourceElementId.toString());if(x){n.target.insertBefore(x,d.elementBelowDrag??null);return}}let p=Cs(u),m=d?.dropzoneEl;m.classList.remove("dragging-area");const g=await k();let h=!1;c.includes("publicWidgetRouter")&&(h=!0);let w=null,y=null;const T=n.clientY,E=m.getBoundingClientRect(),b=Lt(E,T);if(h){w=await ge(Number(p)),y=Ht(m,p,!1,d.elementBelowDrag,b,n);const x=document.getElementById("widgetNameValue");x&&w?.name&&(x.value=w?.name);const W=document.getElementById("widget-builder");W&&w?.name&&(W.textContent="Widget Builder Panel: "+w?.name)}else{const x=await We(p,g.token);w=await ge(x?x.widgetId:Number(p));const W=document.getElementById("widgetNameValue");W&&w?.name&&(W.value=w?.name);const P=document.getElementById("widget-builder");P&&w?.name&&(P.textContent="Widget Builder Panel: "+w?.name),w?.children?.length&&await yn(w),y=Ht(m,x?x.widgetId:p,!1,d.elementBelowDrag,b,n)}const v=$.clearDraggedWidget(w);let S=await be(v,y);v.wrapper=y?.id;const L=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(L){const x=L.id,W=Ze(f?.staticWidgetTree,x);W&&W.children.push(v);const B=document.getElementById(x).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=B?.innerHTML,await Fe(f.selectedStaticWidgetTreeInfo.widgetTree),X(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const _=await Ot();f.staticWidgetTree.html=_,f.staticWidgetTree?.children?.push(v);const C=f.widgetTree.children.indexOf(v);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[C],isChildWidget:!0,childWidgetIndex:C},await Fe(v),X(v,!1,S),$.enableWidgetButtons()}else{let l=function(w,y){document.getElementById("builder-workarea")===w&&(y="inside");let E=Ae.generateUUID();const b=wc(E,d),v=document.createElement("div");v.innerHTML=b;const S=v.firstChild,L=w.parentElement;if(y==="above")L.insertBefore(S,w);else if(y==="below"){const C=w.nextElementSibling;C?L.insertBefore(S,C):L.appendChild(S)}else if(y==="inside"){const C=pa(w,n.clientY);C==null?w.appendChild(S):w.insertBefore(S,C)}n.target.classList.remove("dragging-area");let _=S;d.data_type=="layout"?_.querySelectorAll(".fslayout-col").forEach(x=>{x.classList.add("wb-initial-empty")}):(_.classList.add("wb-initial-empty"),d?.data_type==="img"&&(_?.setAttribute("src","/images/img-placeholder.jpg"),_?.setAttribute("style","width: 200px;"))),_.removeAttribute("element-info-id"),d?.data_type==="img"&&(_?.setAttribute("src","/images/img-placeholder.jpg"),_?.setAttribute("style","width: 200px;"))};const d=JSON.parse(o);let c=Vn(n,d);const u=c?.dropzoneEl;if(c.status){const w=n.clientY,y=u.getBoundingClientRect(),T=Lt(y,w);l(u,T)}else alert(c.message);const p=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(p){const w=p.id,y=Ze(f?.staticWidgetTree,w);if(y){const T=p.querySelector(".mftsccs-marking-element");y.html=T?.innerHTML,await X(y)}return n.dataTransfer.clearData(),!1}const m=document.querySelector(".content-target"),h=(await Pe(m,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=h;try{n.dataTransfer.clearData()}catch(w){console.error("error in clearing data",w instanceof Error?w.message:String(w))}return!0}else{const l=R.staticElement,d=n.target;d.classList.remove("dragging-area"),de?.position==="top"&&d?.children?.length?d.insertBefore(l,de?.element):de?.position==="bottom"?de?.element?.insertAdjacentElement("afterend",l):d.appendChild(l),St();const c=await Ot();f.staticWidgetTree.html=c}}function pa(n,e){return Array.from(n.children)?.reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY,element:null}).element}function Lt(n,e){const t=n.height,a=e-n.top;return a<t*.25?"above":a>t*.75?"below":"inside"}function yr(n){const o=new DOMParser().parseFromString(n,"text/html").body.querySelector("div")?.id,r=document.getElementById(o)?.parentElement?.closest(".added-widget-container"),l=r?.id,d=r?.querySelectorAll(".widget_container_disabled");return d?.length&&d?.forEach(c=>{const u=Ae.generateUUID();c.id=`wdgt${u}`}),l?.toString()}async function yn(n){return Array.isArray(n.children)&&n.children.forEach(e=>{Hi(e,n),e.children.length&&yn(e)}),n}function Hi(n,e){const t=n.wrapper,o=new DOMParser().parseFromString(e?.html,"text/html").body,s=o.querySelector(`#${t}`);if(!s)return n;const l=`wdgtcopy${Ae.generateUUID()}`;return s.id=l,n.wrapper=l,e.html=o.innerHTML.toString(),n}const vr=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:hn,dragElement:dr,dragEndWidgetElement:mr,dragOverWidgetElement:pr,dragStartWidgetElement:ur,dropElement:fn,dropFolderElement:Di,dropWidgetElement:gr,findChildByWrapper:Ze,getChildWrapperId:yr,getChildrenWrapperId:Hi,getDragAfterElement:pa,getDropType:Lt,onDragEnter:ir,onDragLeave:or,onDragOver:sr,onDragStart:nr,onDrop:lr,onWidgetDragStart:ar,removeChildByWrapper:Jt,removeElement:cr,resetDragState:fr,updateAllChildWidgets:yn},Symbol.toStringTag,{value:"Module"})),wr=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],ga=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class Oi{constructor(){}async getLayoutListHTML(){return ga.map(t=>`
        <li id="fslayout-${t.id}" class="fslayout-icon"
            data-elementid="${t.id}" 
            data-type="${t.type}" 
            data-void="on" 
            data-text="${t.name}" 
            draggable="true" 
            ondragstart="_dragService.onDragStart(event)" 
        >
          <a 
            class="fslayout-icon-link" draggable="false" 
          >
           <img src="/images/${t.icon}" />
          </a>
        </li>
      `).join("")}async getTemplateLayoutsHTML(){const e=await tc();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const t=await k(),a=t?.entityId===101651686||t?.entityId===101279491;return e.map(i=>i.id?`
        <li class="template-item">
          <div class="template-card" 
               draggable="true" 
               ondragstart="_dragService.onWidgetDragStart(event)" 
               data-widgetId="${i.id}">
            <div class="template-image-container">
              <img src="${i.thumbnail||"/images/default-template.png"}" 
                   alt="${i.name}" 
                   class="template-image"
                   draggable="false">
            </div>
            <div class="template-name">
              ${i.name||"Unnamed Template"}
              ${a?`
                <span class="material-symbols-outlined delete-template-icon" 
                     data-templateid="${i.id}" 
                     onclick="removeFromTemplate(event)" 
                     title="Remove from Templates">
                  delete
                </span>`:""}
            </div>
          </div>
        </li>
      `:"").join("")}}const br=n=>{const e=n?.id;if(!e)return null;const t=n?.data?.the_widget;return{widgetId:e,widgetVersion:t?.the_widget_version?.[0]?.data?.the_version??null,widgetName:t?.the_widget_name?.[0]?.data?.the_name??"",widgetType:t?.the_widget_type?.[0]?.data?.the_type??""}},_r=async n=>{const e=new Map,t=new M;t.typeConnection="the_widget_version",t.name="version";const a=(r,l,d=!1)=>{const c=new M;return c.typeConnection=r,c.name=l,c.freeschemaQueries=[t],c.selectors=["the_widget_name","the_widget_type"],d&&(c.reverse=!0),c},i=a("the_widget_s_copy","copywidgets"),o=a("the_widget_root","rootwidgets",!0),s=new M;return s.conceptIds=[n],s.freeschemaQueries=[i,o],s.inpage=100,s.outputFormat=Bo,await new Promise(r=>{_e(s,"").subscribe(l=>{const d=l?.[0]?.data?.the_widget;if(!d){console.warn("No widget data found."),r();return}const c=[...d?.the_widget_s_copy??[],...d?.the_widget_root_reverse??[]];for(let u=0;u<c.length;u++){const p=br(c[u]);p&&e.set(p.widgetId,p)}r()})}),e};async function We(n,e){let t=new G;t.composition=n,t.fullLinkers=["the_widget_recent","the_widget_latest"],t.inpage=100;let a=new G;a.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],a.inpage=100;const o=await Se([t,a],e),r=await qe(n,"the_widget_recent"),l=o?.data?.the_widget?.the_widget_recent||o?.data?.the_widget?.the_widget_latest||[],d=o?.data?.the_widget?.the_widget_latest||null;if(l.length){const c=l[0],u=c?.data.the_widget.the_widget_name?.[0].data.the_name,p=c?.data.the_widget.the_widget_html?.[0].data.the_html,m=c?.id,g=c?.data.the_widget.the_widget_css?.[0].data.the_css,h=c?.data.the_widget.the_widget_js?.[0].data.the_js,w=c?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,y=c?.data.the_widget.the_widget_version?.[0].data.the_version,T=c?.data.the_widget.the_widget_origin?.[0].data.the_origin|n;return{widgetName:u,widgetHTML:p,widgetCSS:g,widgetJS:h,widgetTimestamp:w,widgetVersion:Number(y||d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||d.id,origin:Number(T),connectionIdLatest:r,publishedWidgetVersion:d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const $=(()=>{const n=async()=>{const b=document.getElementById("fslayout-template-container");if(b){b.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const S=await new Oi().getTemplateLayoutsHTML();b.innerHTML=S}},e=async()=>{const b=document.getElementById("public-widget-list-container");if(b){const v=await ea();!v||v.trim()===""?b.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:b.innerHTML=v||""}},t=async()=>{const b=document.getElementById("folder-widget-container");if(b){const v=await ec();!v||v.trim()===""?b.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:b.innerHTML=v||""}},a=async()=>{const b=await Xn();Fn.navbar.setSavedWidgets(b);const v=document.getElementById("saved-widget-list-container");v&&(!b||b.trim()===""?v.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:v.innerHTML=b||"")},i=async()=>{const b=await Xn();Fn.navbar.setSavedWidgets(b);const v=document.getElementById("folder-widget-container");v&&(!b||b.trim()===""?v.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:v.innerHTML=b||"")},o=async(b,v,S,L,_,C,x)=>{if(L&&!_&&!C||_&&!L&&!C||C&&!x){console.error("creating widget copy argument required.");return}let W=null;W=await ge(b.id);let P=null,B=null,q=[],D=0;C||(P=await We(b.id,S),B=P?.origin?P?.origin:b.id,D=P?.widgetVersion?P?.widgetVersion:0,q=P?.connectionIdLatest?P.connectionIdLatest:null);const j={type:_?_.mainWidgetTypevalue:W.type,after_render:_?_.addeventsScript:W.after_render,before_render:_?_.onmountScript:W.before_render,dependency:_?_.dependency:W.dependency,update:_?_.onupdateScript:W.update,mount_child:_?_.mountchildwidgetsScript:W.mount_child,name:C?x:W?.name,html:C?W.html:_?_.widgetHTMLToUpdate:W.html,clean:_?_.widgetCleanHTMLToUpdate:W?.clean,css:_?_.widgetCSSToUpdate:W?.css?.toString(),js:_?_.widgetJSToUpdate:W?.js?.toString(),timestamp:_?_.widgetTimestampToUpdate:new Date().toISOString(),...!C&&{version:D?D+1:1,origin:B}},K=await O(W.id);let oe=W.root!==0?W.root:W.origin;const U=await O(oe||W.id),J=await V("widget",v,j);if(_?.assistant?.id){const ee=await V("assistant",v,_?.assistant);await F(J,ee,"assistant")}if(_?.library?.css?.length){const ee=_?.library?.css;for(let ne=0;ne<ee.length;ne++){const me=await V("css_library",v,ee[ne]);await F(J,me,"s_css_library")}}if(_?.library?.js?.length){const ee=_?.library?.js;for(let ne=0;ne<ee.length;ne++){const me=await V("js_library",v,ee[ne]);await F(J,me,"s_js_library")}}if(_?.custom_functions?.length){const ee=_?.custom_functions;for(let ne=0;ne<ee.length;ne++){const me=await V("custom_function",v,ee[ne]);await F(J,me,"s_custom_function")}}if(!L&&!_&&C&&W?.children.length&&f.createChildWidget(W.children,J),await F(U,J,"s_copy"),await F(J,K,"root"),q&&q.length)for(let ee=0;ee<q.length;ee++)await He(q[ee].id);return await F(U,J,"recent"),J},s=async b=>{b.stopPropagation();const v=Number(b.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(v){A.infoMessageToast("Deleting your widget from public...",0);const L=await qe(v,"the_public_widget_s_widget",!0);await He(L[0].id),await re(v,"the_widget_description"),await re(v,"the_widget_thumbnail"),await re(v,"the_widget_public_name"),await e(),await t(),await a(),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},r=async b=>{b.stopPropagation();const v=prompt("What would you like to name this imported widget?");if(!v||!v.trim())return;const S=Number(b.target.dataset.pubwidid);if(S){A.infoMessageToast("Importing widget...",0);try{const L=document.querySelector(".infoMessageToast"),_=await ge(S);f.widgetTree=_,await f.saveWidget(v),await a(),await i(),L?.remove(),A.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}},l=async b=>{b.stopPropagation();const v=Number(b.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(v){A.infoMessageToast("Deleting your widget from templates...",0);const L=await qe(v,"the_template_widget_s_widget",!0);await He(L[0].id),await re(v,"the_widget_template_thumbnail"),await re(v,"the_widget_template_name"),await n(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},d=()=>document.querySelector(".content-target").innerHTML.trim()!=="",c=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(v=>{const S=document.querySelector(v);S&&S.classList.remove("disabled")})},u=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(v=>{const S=document.querySelector(v);S?S.classList.add("disabled"):console.log("button not found",v)})},p=b=>{const v=document.createElement("div");v.innerHTML=b.html;const S=v.querySelectorAll("div[data-elementid]");return S?.length&&S.forEach(L=>{L.className="widget_container_disabled"}),b.html=v.innerHTML,b.html=b.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,L=>L.replace(/\btrue\b/g,"false").trim()),b.html=b.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,L=>L.replace(/\bhover-element\b/g,"").trim()),b.html=b.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,L=>L.replace(/\bwb-block\b/g,"").trim()),b.html=b.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,L=>L.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),b.html=b.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,L=>L.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),b};async function m(b){try{if(A.infoMessageToast("Updating your widget preference",0),b){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const S=await qe(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(S.length!==1&&S.length>0)for(let L=1;L<S.length;L++){const _=S[L];await He(_.id)}if(b){if(!S.length){const L=await O(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const _=await te("use_latest","true",!1,f.userId,999);await F(L,_,"use_latest"),await N.SyncDataOnline()}}else if(S.length>0)for(let L=0;L<S.length;L++){const _=S[L];await He(_.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await E(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;A.successfullToast("Widget Preference Updated.")}catch(v){throw v}finally{document.querySelector(".infoMessageToast")?.remove()}}async function g(b,v,S){v.checked||S?(b.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(b.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),S||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const h=new Map,w=()=>{const b=document.getElementById("widget-version");if(!b)return;b.innerHTML="",b.classList.remove("d-none"),b.classList.add("d-flex","flex-column","gap-2");const v=document.createElement("div");v.classList.add("d-flex","justify-content-between","align-items-center");const S=document.createElement("label");S.setAttribute("for","widgetVersionValue"),S.textContent="Widget Versions:";const L=document.createElement("div");L.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",L.id="useLtsSwitch";const _=document.createElement("input");_.type="checkbox",_.className="form-check-input",_.id="alwaysUseLTS";const C=document.createElement("label");C.className="form-check-label ms-2",C.setAttribute("for","alwaysUseLTS"),C.textContent="Use LTS",L.appendChild(_),L.appendChild(C),v.appendChild(S),v.appendChild(L);const x=document.createElement("select");return x.name="input-widgetVersionValue",x.id="widgetVersionValue",x.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(b.appendChild(v),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(_.checked=!0,g(x,_,!0)),_.addEventListener("change",async()=>{try{await g(x,_,!1)}catch(W){console.error("useLtsError",W),W instanceof Error&&A.errorToast(W.message),_.checked=!_.checked}})):b.appendChild(S),b.appendChild(x),x},y=()=>{const b=document.getElementById("widget-version");if(!b){console.warn("Widget version container not found");return}const v=document.getElementById("widgetVersionValue");v&&(h.forEach(S=>{v.removeEventListener("change",S)}),h.clear()),b.innerHTML="",b.classList.remove("d-flex"),b.classList.add("d-none")},T=async(b,v,S)=>{try{const L=await k(),_=document.getElementById("widgetVersionValue");_&&h.forEach(D=>{_.removeEventListener("change",D)});const C=w();if(!C){console.error("Failed to create select element");return}const x=await We(b,L?.token),W=x?.widgetVersion,P=new Date(x?.widgetTimestamp).toLocaleString();let B=new Date(S).toLocaleString();if(B==="Invalid Date"&&(B=new Date().toLocaleString()),x){const D=document.createElement("option"),j=Math.random().toString(36).substring(2,8);D.value=btoa(`${j}/${b}`),D.textContent=`Original ${v==="original"?`(Current) (${B})`:""}`,(!x||!x.publishedWidgetVersion)&&(D.textContent+=" (Published)"),C.appendChild(D);const K=await _r(b);Array.from(K.values()).filter(U=>!!U.widgetVersion&&!isNaN(Number(U.widgetVersion))).sort((U,J)=>Number(U.widgetVersion)-Number(J.widgetVersion)).forEach(U=>{const J=document.createElement("option"),ee=Math.random().toString(36).substring(2,8);J.value=btoa(`${ee}/${U.widgetId}`),J.textContent=`Version ${U.widgetVersion} ${Number(U.widgetVersion)==Number(v)?"(Current)"+(W===Number(U.widgetVersion)?` (${P})`:` (${B})`):""}`,Number(U.widgetVersion)==Number(v)&&(J.selected=!0),x.publishedWidgetVersion&&Number(U.widgetVersion)===Number(x.publishedWidgetVersion)&&(J.textContent+=" (Published)"),C.appendChild(J)})}else{const D=document.createElement("option");D.value="",D.textContent=`Original (current) (${B})`,D.selected=!0,C.appendChild(D)}if(h.has(b)){const D=h.get(b);C.removeEventListener("change",D),h.delete(b)}const q=E(b,L.entityId);h.set(b,q),C.addEventListener("change",q)}catch(L){console.error("Error initializing widget versions:",L)}},E=(b,v,S)=>{async function L(_){_&&_.preventDefault();let C="";if(S&&S===!0){f.token||await f.getUserDetails();const B=await We(b,f.token);B&&(C=B.publishedWidgetVersion)}else{const q=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",v),C=q?.value||""}if(!C)return;const W=atob(C).split("/");let P=W.length===2?parseInt(W[1],10):NaN;if(P)if(f.selectedStaticWidgetTreeInfo.isChildWidget){try{const q=await ge(P),D=JSON.parse(JSON.stringify(f.staticWidgetTree)),K=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,oe={...q,wrapper:K};let U=!1;const J=ne=>{for(let me=0;me<ne.length;me++){if(ne[me].wrapper===K){ne[me]=oe,U=!0;break}if(ne[me].children&&ne[me].children.length>0&&(J(ne[me].children),U))break}};if(J(D.children),!U){console.error("Could not find child widget to update"),A.errorToast("Failed to update widget");return}f.widgetTree=D,f.selectedStaticWidgetTreeInfo.widgetTree=oe,S&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const ee=document.getElementById(K);if(ee){ee.innerHTML="",await be(oe,ee);const ne=q.id||P;ee.setAttribute("data-widgetid",ne.toString()),X(oe,!1),he(),A.successfullToast("Widget version updated")}}catch(q){console.error("Error updating child widget version:",q),A.errorToast("Error updating widget version")}return}else{await ct(null,P,b);return}}return L};return{createWidgetCopy:o,removeMyWidgetFromPublic:s,removeFromTemplate:l,renderSavedWidgets:a,renderBoomWidgets:i,renderPublicWidgets:e,renderTemplateLayouts:n,saveFromPublic:r,checkContent:d,enableWidgetButtons:c,disableWidgetButtons:u,clearDraggedWidget:p,initializeWidgetVersions:T,removeWidgetContainer:y,loadWidgetVersionWith:E}})(),Ae=(()=>{const n=async l=>{l.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const c=d?.parentElement;if(c&&d){const u=d.previousElementSibling;u?.classList.contains("mftsccs-marking-element")&&u.childNodes.length>1&&alert("insert into marker"),u&&c.insertBefore(d,u)}await t(),Rt(),H.updateActionHistories()},e=async l=>{l.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const c=d?.parentElement;if(c&&d){const u=d.nextElementSibling;u&&c.insertBefore(u,d)}await t(),Rt(),H.updateActionHistories()};async function t(){const l=f.widgetTree,d=f.selectedStaticWidgetTreeInfo.widgetTree;function c(p){for(const m of p.children){if(m===d)return p;const g=c(m);if(g)return g}return null}const u=c(l);if(u){let p=null;u.wrapper&&u.wrapper!="0"?p=document.getElementById(u.wrapper):p=document.getElementById("builder-workarea"),u.html=p.innerHTML}else await ye()}function a(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(l){const d=Math.random()*16|0;return(l==="x"?d:d&3|8).toString(16)})}async function i(l,d,c){if(l.childNodes.length){if(l.dataset.widgetid){await fn(null,!0,parseInt(l.dataset.widgetid),l.parentElement?l.parentElement:d),ve(),l.remove();return}l.childNodes.forEach(u=>{i(u,d)})}}return{moveUp:n,moveDown:e,copyElement:async l=>{l.stopPropagation();const d=R.staticElement;if(d?.removeAttribute("draggable"),d.classList.contains("content-target"))return;const c=d?.parentElement,u=d.cloneNode(!0);await i(u,c),u.dataset.widgetid||c.insertBefore(u,d.nextSibling),ve(),await t(),he(),H.updateActionHistories()},fixContentTargetHeight:(l,d)=>{const c=window.getComputedStyle(d);console.log("wrapper element computed height",c.height,l)},editWidget:async l=>{console.log("event.target",l.target);const d=document.getElementById("edit-widget");d.style.display="none";const u=R.staticElement.closest(".added-widget-container");u.classList.replace("added-widget-container","edited-widget-container");const p=u.querySelectorAll(".widget_container_disabled");p.length&&p.forEach(h=>{h.className="widget_container widget_selected"}),R.staticElement?.removeAttribute("draggable");let m=u.cloneNode(!0);const g=await Pe(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=g.innerHTML,f.editedWidgets[u.id]=f.selectedStaticWidgetTreeInfo.widgetTree,R.staticElement?.setAttribute("draggable","true"),ve()},generateUUID:a}})();class fe{static staticHTMLCache="";static staticCSSCache="";static staticHTMLOriginal="";static staticCSSOriginal=""}class f{static newWidget=new kt;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await k();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const t=document.getElementById("widget-btn-wrapper");t&&t.querySelectorAll("button").forEach(a=>a.disabled=!0),await this.updateOwnerStatus(),this.#e&&t&&t.querySelectorAll("button").forEach(a=>a.disabled=!1)}}catch(t){console.error("error updating widget properties",t)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const t={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},a=await V("widget",this.userId,t),i=await Z(this.entityId);if(await Y(i,a,"s_widget"),this.staticWidgetTree?.assistant?.id){const o=await V("assistant",this.userId,this.staticWidgetTree?.assistant);await Y(a,o,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let s=0;s<o.length;s++){const r=await V("css_library",this.userId,o[s]);await Y(a,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let s=0;s<o.length;s++){const r=await V("js_library",this.userId,o[s]);await Y(a,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let s=0;s<o.length;s++){const r=await V("custom_function",this.userId,o[s]);await Y(a,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let s=0;s<o.length;s++)await this.createChildWidget(o[s],a)}return await N.SyncDataOnline(),a}static async createChildWidget(e,t){const a={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper,dependency:e?.dependency},i=await V("widget",this.userId,a),o={wrapper:e?.wrapper,type:e?.type,parent:i.id},s=await V("child_widget",this.userId,o);if(await Y(t,s,"s_child"),await Y(s,i,"info"),e.useLatest&&e.useLatest===!0){const r=await te("use_latest","true",!1,this.userId,999);await Y(s,r,"use_latest")}if(e?.library?.css?.length){const r=e?.library?.css;for(let l=0;l<r.length;l++){const d=await V("css_library",this.userId,r[l]);await Y(i,d,"s_css_library")}}if(e?.library?.js?.length){const r=e?.library?.js;for(let l=0;l<r.length;l++){const d=await V("js_library",this.userId,r[l]);await Y(i,d,"s_js_library")}}if(e?.custom_functions?.length){const r=e?.custom_functions;for(let l=0;l<r.length;l++){const d=await V("custom_function",this.userId,r[l]);await Y(i,d,"s_custom_function")}}if(e?.children?.length)for(let r=0;r<e?.children?.length;r++)await this.createChildWidget(e.children[r],i)}static async updateOwnerStatus(){try{const e=await O(this.entityId),t=await O(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id);if((await Dn(e,t,"s_widget","the_entity_s_widget")).length||e.userId===t.userId)this.#e=!0;else{const i=await st(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(i.length){const o=await O(i[0].id);((await Dn(e,o,"s_page","the_entity_s_page")).length||e.userId===o.userId)&&(this.#e=!0)}}}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await O(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),t={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions,dependency:this.staticWidgetTree.dependency};let a=this.staticWidgetTree.html,i=document.getElementsByClassName("mftsccs-css"),o=document.getElementsByClassName("widgetStyle"),s=this.staticWidgetTree.css;for(let d=0;d<i.length;d++)s+=i[d].innerHTML;for(let d=0;d<o.length;d++)s+=o[d].innerHTML;const r=await $.createWidgetCopy(e,this.userId,this.token,!0,t);if(this.staticWidgetTree.children.length){const d=this.staticWidgetTree.children;for(let c=0;c<d.length;c++)await this.createChildWidget(d[c],r)}const l=new URLSearchParams(window.location.search).get("page-id");if(l){const d=fe.staticHTMLCache||a,c=fe.staticCSSCache||s;let u=parseInt(l),p=await O(u);this.savePageCache(p,d,c)}return await N.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},r}catch(e){throw e}}static async savePageWidget(e,t){const a={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:t,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},i=await V("widget",this.userId,a);if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let r=0;r<s.length;r++){const l=await V("css_library",this.userId,s[r]);await Y(i,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let r=0;r<s.length;r++){const l=await V("js_library",this.userId,s[r]);await Y(i,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let r=0;r<s.length;r++){const l=await V("custom_function",this.userId,s[r]);await Y(i,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],i)}const o=await O(e);return await Y(o,i,se.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async copyPageWidget(e,t,a){const i={after_render:a?.after_render,before_render:a?.before_render,name:t,html:a?.html,css:a?.css,js:a?.js,type:a?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},o=await V("widget",this.userId,i);if(a?.library?.css?.length){const s=a?.library?.css;for(let r=0;r<s.length;r++){const l=await V("css_library",this.userId,s[r]);await Y(o,l,"s_css_library")}}if(a?.library?.js?.length){const s=a?.library?.js;for(let r=0;r<s.length;r++){const l=await V("js_library",this.userId,s[r]);await Y(o,l,"s_js_library")}}if(a?.custom_functions?.length){const s=a?.custom_functions;for(let r=0;r<s.length;r++){const l=await V("custom_function",this.userId,s[r]);await Y(o,l,"s_custom_function")}}if(a.children.length){const s=a.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],o)}return await Y(e,o,se.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async savePageCache(e,t,a){let i=new It,o=4,s=999;try{i.initialize();let r=await i.MakeTheInstanceConceptLocal("the_html_cache",t,!1,s,o),l=await i.MakeTheInstanceConceptLocal("the_css_cache",a,!1,s,o);await $o(e.id,["the_page_html_cache","the_page_css_cache"]),await Ft(e,r,"the_page_html_cache"),await Ft(e,l,"the_page_css_cache"),await i.commitTransaction()}catch(r){i.rollbackTransaction(),console.error("cannot commit page cache",r)}}static async hasWidgetChanged(e){const t=["html","css","js","after_render","before_render","update","mount_child"],a=l=>l?l.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function i(l){let d=0;for(let c=0;c<l.length;c++){const u=l.charCodeAt(c);d=(d<<5)-d+u,d=d&d}return d}const o=(l,d)=>t.some(c=>{const u=a(l[c]),p=a(d[c]),m=i(u),g=i(p),h={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==g?!(u==""||u==h[c]):!1}),s=(l,d)=>l.length!==d.length?!0:l.some((c,u)=>o(c,d[u])||s(c.children,d[u].children)),r={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,root:0};return e?o(this.staticWidgetTree,this.initialWidgetTree)||s(this.staticWidgetTree.children,this.initialWidgetTree.children):o(this.staticWidgetTree,r)||s(this.staticWidgetTree.children,r.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");A.infoMessageToast("Publishing Widget",0);let e=null;const t=await O(this.staticWidgetTree.root||this.staticWidgetTree.origin),a=this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,i=await qe(a,"the_widget_latest");if(i&&i.length){for(let s=0;s<i.length;s++)await He(i[s].id);try{const s=await fetch(oa.NODE_CACHE_URL+`/api/get-latest-widget?id=${t.id}`,{method:"DELETE"});s.ok||console.error("Failed to delete widget from cache server:",s.status)}catch(s){console.log("error removing widget from cache server",s)}}this.staticWidgetTree.origin&&(e=await O(this.staticWidgetTree.id),await Y(t,e,"latest"),await N.SyncDataOnline()),await $.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),A.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,t=await qe(e,"the_widget_latest");t.length&&(t[0].toTheConceptId===this.staticWidgetTree.widgetId?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1);const a=document.getElementById("publish-widget");a&&(a.style.display="block",this.staticWidgetTree.isPublished?(a.textContent="Published",a.disabled=!0,a.style.cursor="not-allowed"):(a.textContent="Publish This Version",a.disabled=!1,a.style.cursor="pointer"))}}var ha=(n=>(n.page="page",n.widget="widget",n))(ha||{});const Er=_s("mftsccs-browser"),Tr=`
// vite.config.js
export default {
  // config options
  build: {
    target: "es2022",
  },
  esbuild: {
    target: "es2022",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    },
  },
};
`,Sr=`
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`,Cr=`
{
  "name": "project_name",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite --force",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "vite": "^5.3.1"
  },
  "dependencies": {
    "mftsccs-browser": "${Er}"
  }
}
`,Lr=`
<!DOCTYPE html>
<html lang="en" class="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App Builder</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <div id="app"></div>
    <script type="module" src="/src/app.ts"><\/script>
  </body>
</html>
`,xr=`
import "./style.css";

import { bootup } from "./routes/renderRoute.service.ts";
import { init, updateAccessToken } from "mftsccs-browser";
import { environment } from "./environments/environment.dev.ts";
import { applyValidation } from "./services/validator.service.ts";

export async function getLocalStorageProfileData() {
  return new Promise((resolve: any) => {
    let dataFromLocalStorage: string = localStorage?.getItem("profile") || "";
    if (dataFromLocalStorage) {
      const profileData = JSON.parse(dataFromLocalStorage);
      resolve(profileData);
    } else {
      resolve();
    }
  });
}
const profileStorageData: any = await getLocalStorageProfileData();

await init(environment?.boomURL, environment?.aiURL, "", environment?.baseNodeUrl);
updateAccessToken(profileStorageData?.token);
bootup();

(window as any).applyValidation = applyValidation;
`,Ar=`
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    /* Linting */
    /* "strict": true,
    "noFallthroughCasesInSwitch": true */

    "strict": false,  // Disable all strict type-checking options
    "noImplicitAny": false,  // Allow implicit 'any' types
    "strictNullChecks": false  // Disable strict null checks
  },
  "include": [
    "src"
  ]
}
  `,Wr=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${z.baseURL}",
    baseNodeUrl: "${z.baseNodeUrl}",
    boomURL: "${z.boomURL}",
    aiURL: "${z.aiURL}",
  }
`,Ir=`
import routes from "./routes";

const app = <HTMLElement>document.getElementById("app");

const checkAuthentication = () => {
  let dataFromLocalStorage: string = localStorage?.getItem("profile") || "";
  if (dataFromLocalStorage) {
    const profileData: any = JSON.parse(dataFromLocalStorage);
    return profileData?.token ? true : false;
  } else {
    return false;
  }
};

const pathToRegex = (path: any) =>
  new RegExp("^" + path.replace(/:w+/g, "(.+)") + "$");

const getParams = (match: any) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(w+)/g)).map(
    (result: any) => result[1]
  );
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

export async function checkRouting() {
  const potentialMatches = routes.map((route: any) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch: any) => potentialMatch.result !== null
  );

  // NOT FOUND PAGE
  if (!match) {
    const notFoundURL = routes.find((route: any) => route.path === "/404");
    match = {
      route: notFoundURL,
      result: [location.pathname],
    };
  } else {
    // check route authentication
    const routeInfo = match?.route;
    if (routeInfo?.isAuthenticated) {
      const isAuthenticationValid = checkAuthentication();
      if (!isAuthenticationValid) {
        const loginURL = routes.find((route: any) => route.path === "/login");
        match = {
          route: loginURL,
          result: loginURL?.path,
        };
        history.pushState(null, "", loginURL?.path);
      }
    }
  }

  // const view = new match.route.content(await getParams(match));
  // const htmlContentDetails = await view?.getHtml();
  // app.innerHTML = htmlContentDetails;

  const view = new match.route.content(await getParams(match));
  // if (Object.getPrototypeOf(view.constructor).name == "StatefulWidget") {
    await view?.mount(app);
  // } else {
  //  const htmlContentDetails = await view?.getHtml();
  //  app.innerHTML = htmlContentDetails;
  // }
}

export const renderContent = async (route: any) => {
  history.pushState(null, "", route);
  checkRouting();
};

export const updateContent = async (route: any) => {
  window.history.pushState({ route }, "", route);
  checkRouting();
};

const renderInitialPage = () => {
  const route = window.location.pathname;
  renderContent(route);
};

// <router-link> </router-link>
const initRouterLinks = () => {
  customElements.define(
    "router-link",
    class extends HTMLElement {
      constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
      }

      connectedCallback() {
        this.addEventListener("click", this.handleClick);
      }

      disconnectedCallback() {
        this.removeEventListener("click", this.handleClick);
      }

      handleClick(event: any) {
        event.preventDefault(); // Prevent default anchor tag behavior
        const href = this.getAttribute("href");
        if (href) renderContent(href);
      }

      // Optional: Set attributes through properties
      set href(val: any) {
        this.setAttribute("href", val);
      }

      get href() {
        return this.getAttribute("href");
      }
    }
  );
};

export const bootup = () => {
  renderInitialPage();
  initRouterLinks();
  window.addEventListener("popstate", checkRouting);
};
`,vn=n=>`
${n.map(e=>{if(e.importFrom)return`import ${e.content} from "../pages${e.importFrom}";`}).join(`
`)}

type RouteParams = {
  path: any;
  linkLabel?: string;
  content: any;
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  ${n.map(e=>`
    {
        path: "${e.path}",${e.linkLabel?`linkLabel: "${e.linkLabel}",`:""}
        content: ${e.content}
    },`).join(`
`)}
];

export default routes;
`,kr=`
import { SearchLinkMultipleAll, SearchQuery } from "mftsccs-browser";

export async function getWidgetCodeFromId(widgetId: number, token: string) {
  return new Promise(async (resolve: any, reject: any) => {
    try {
      let searchFirst = new SearchQuery();
      searchFirst.composition = widgetId;
      searchFirst.fullLinkers = [
        "the_widget",
        "the_widget_widget",
        "the_widget_name",
        "the_widget_html",
        "the_widget_css",
        "the_widget_js",
        "the_widget_timestamp",
        "the_widget_type",
        "the_widget_after_render",
        "the_widget_before_render",
        "the_widget_update",
        "the_widget_mount_child",
        "the_widget_clean",
        "the_widget_s_child",
      ];
      searchFirst.inpage = 100;

      let searchSecond = new SearchQuery();
      searchSecond.fullLinkers = [
        "the_child_widget",
        "the_child_widget_type",
        "the_child_widget_widget",
        "the_child_widget_wrapper",
        "the_child_widget_info",
      ];
      searchSecond.inpage = 100;

      const queryParams = [searchFirst, searchSecond];
      const output = await SearchLinkMultipleAll(queryParams, '');
      resolve(output);
      return output;
    } catch (error: any) {
      console.error("error", error);
      reject(error);
    }
  });
}
`,Mr=`
import { WidgetTree } from "mftsccs-browser";
import { getWidgetCodeFromId } from "./widget.service";

/**
 * This function builds a widget tree. This tree is built fully along with its children
 * This tree can then be used to build the whole dom for the widget.
 * This has recursive property so that the recursion can be used to build this tree.
 * @param widgetId the id of the widget
 * @returns WidgetTree.
 */
export async function getWidgetFromId(
  widgetId: number,
  visitedWidgets: number[] = []
) {
  try {
    let widgetNode = new WidgetTree();
    // if (visitedWidgets.includes(widgetId)) {
    //   return widgetNode;
    // }
    const output: any = await getWidgetCodeFromId(widgetId, '');

    visitedWidgets.push(widgetId);

    const widgetInfo = output?.data?.the_widget;
    widgetNode.name = widgetInfo?.the_widget_name?.[0]?.data?.the_name;
    widgetNode.html = widgetInfo?.the_widget_html?.[0]?.data?.the_html;
    widgetNode.css = widgetInfo?.the_widget_css?.[0]?.data?.the_css;
    widgetNode.js = widgetInfo?.the_widget_js?.[0]?.data?.the_js;
    widgetNode.clean =
      widgetInfo?.the_widget_clean?.[0]?.data?.the_clean;
    widgetNode.timestamp =
      widgetInfo?.the_widget_timestamp?.[0]?.data?.the_timestamp;
    widgetNode.id = output.id;
    let widgetTypeValue =
      widgetInfo?.the_widget_type?.[0]?.data?.the_type;
    if (widgetTypeValue == "null" || widgetTypeValue == null) {
      widgetNode.type = "the_element_name";
    } else {
      widgetNode.type = widgetTypeValue;
    }
    widgetNode.after_render =
      widgetInfo?.the_widget_after_render?.[0]?.data?.the_after_render;

    widgetNode.before_render =
      widgetInfo?.the_widget_before_render?.[0]?.data?.the_before_render;

    widgetNode.update =
      widgetInfo?.the_widget_update?.[0]?.data?.the_update;
    widgetNode.widgetId = widgetId;
    widgetNode.mount_child =
      widgetInfo?.the_widget_mount_child?.[0]?.data?.the_mount_child;
    const childWidgets = widgetInfo?.the_widget_s_child;
    // if there are children present in the widget then convert the children to widget and put it inside of the tree.
    if (childWidgets?.length) {
      for (let i = 0; i < childWidgets.length; i++) {
        const childWidgetId =
          childWidgets[i]?.data.the_child_widget?.the_child_widget_info?.[0]
            ?.id;
        let childWidget: WidgetTree = await getWidgetFromId(
          childWidgetId,
          visitedWidgets
        );
        const childWidgetTypeValue =
          childWidgets[i]?.data?.the_child_widget?.the_child_widget_type?.[0]
            ?.data?.the_type;
        const childWidgetWrapperId =
          childWidgets[i]?.data?.the_child_widget?.the_child_widget_wrapper?.[0]
            ?.data?.the_wrapper;
        if (childWidgetTypeValue == "null" || childWidgetTypeValue == null) {
          childWidget.type = "the_element_name";
        } else {
          childWidget.type = childWidgetTypeValue;
        }
        childWidget.wrapper = childWidgetWrapperId;
        widgetNode.children.push(childWidget);
      }
    }
    return widgetNode;
  } catch (ex) {
    console.error("error", ex);
    throw ex;
  }
}`,Pr=`
import { Validator } from "mftsccs-browser";

/**
 * Validates form field attributes using the Validator class.
 *
 * @param {object} attributesData - The input data containing the attributes to be validated.
 * @returns {Promise<object>} The updated attributesData with validation results.
 * @throws {Error} If attributesData["attributes"] is not an array.
 */
export const checkValidation = async (attributesData:any) => {
  const validatorObj = new Validator()
  const validationParams = buildValidationParams(attributesData)
  
  if(Object.keys(validationParams).length > 0) {
    // Validate the field using the Validator class and return the result
    const validationResult  = await validatorObj.validateField(validationParams); 

    // Structure and return the validation result
    const validateResult = await processValidationResult(validationResult);
    const structuredResult = processValidationResult(validateResult);

    return updateAttributesData(attributesData, structuredResult);
  }
}


/**
 * Validates form field attributes.
 *
 * @param {object} attributesData - The input data containing the attributes to be validated.
 * @returns {Promise<object>} Validation result with status and details.
 */
export const validate = async (attributesData:any) => {
  const validatorObj = new Validator()
  
  const validationResult = await validatorObj.validateField(attributesData)
  
  if (Object.keys(validationResult).length > 0) {
    const structuredResult = processValidationResult(validationResult);
    return {
        status: false,
        details: structuredResult,
    };
  }

  return { status: true };
};

/**
 * Builds validation parameters from attributes data.
 *
 * @param {object} attributesData - Input attributes data.
 * @returns {object} Validation parameters.
 * @throws {Error} If attributesData["attributes"] is not an array.
 */
const buildValidationParams = (attributesData: any): any => {
      // Default validation parameters
      const validationParams = {
        fieldName: '',
        value: null as string | null,
        fieldType: null as string | null,
        dataType: null as string | null,
        pattern: null as string | null,        
        conceptType: null as string | null,
        maxLength: null as number | null,
        minLength: null as number | null,
        maxValue: null as number | null,
        minValue: null as number | null,
        accept: null as string | null,
        file: null as File | null,
        required: false,
        isUnique: false,
      };
    
      // Ensure attributesData["attributes"] is an array
      const attributes = attributesData?.attributes;
      if (Array.isArray(attributes)) {
        attributes.forEach((attribute: any) => {
          const value = parseAttributeValue(attribute);
          
          // Assign values to corresponding validationParams based on field name
          switch (attribute.name) {
              case 'name':
                  validationParams.fieldName = value || '';
                  break;
              case 'value':
                  validationParams.value = value || null;
                  break;
              case 'fieldtype':
                  validationParams.fieldType = value ? value.trim() : null;
                  break;
              case 'pattern':
                  validationParams.pattern = value || null;
                  break;
              case 'datatype':
                  validationParams.dataType = value ? value.trim() : null;
                  break;
              case 'typeconcept':
                  validationParams.conceptType = value || null;
                  break;
              case 'maxlength':
                  validationParams.maxLength = value ? parseInt(value) : null;
                  break;
              case 'minlength':
                  validationParams.minLength = value ? parseInt(value) : null;
                  break;
              case 'max':
                  validationParams.maxValue = value ? parseInt(value) : null;
                  break;
              case 'min':
                  validationParams.minValue = value ? parseInt(value) : null;
                  break;
              case 'accept':
                  validationParams.accept = value || null;
                  break;
              case 'file':
                  validationParams.file = value || null;
                  break;
              case 'required':
                  validationParams.required = value === true;
                  break;
              case 'unique':
                  validationParams.isUnique = value === true;
                  break;
              default:
                  break;
            }
          });
  
      } else {
        console.error('attributesData["attributes"] is not an array', attributesData["attributes"]);
        throw new Error('Invalid input data format: attributesData["attributes"] should be an array.');
      }
  
      return validationParams
}

/**
 * Parses the attribute value based on its type.
 *
 * @param attribute - The attribute object to parse.
 * @returns The parsed value.
 */
const parseAttributeValue = (attribute: any): any => {
    switch (attribute.type) {
      case "boolean":
        return attribute.value === "on";
      case "array":
        return attribute.selected || null;
      case "string":
        return attribute.value || null;
      default:
        return null;
    }
};


/**
 * Processes the validation result into a structured format.
 *
 * @param {object} result - The validation result from the Validator.
 * @returns {object} Structured validation result.
 */
// const processValidationResult = (result: any): Record<string, any> => ({
const processValidationResult = (result:any) => ({
    datatype: result.dataType,
    pattern: result.pattern,
    max: result.maxValue,
    min: result.minValue,
    minlength: result.minLength,
    maxlength: result.maxLength,
    accept: result.accept,
    file: result.file,
    required: result.required,
    unique: result.unique,
});

/**
 * Updates the attributes data with validation results.
 *
 * @param {object} attributesData - Original attributes data.
 * @param {object} validationErrors - Validation errors.
 * @returns {object} Updated attributes data.
 */
const updateAttributesData = (attributesData:any, validationErrors:any) => {
  attributesData.attributes.forEach((attribute:any) => {
      const errorMessage = validationErrors[attribute.name];
      attribute.validationStatus = errorMessage ? 'invalid' : 'valid';
      attribute.validationErrorMessage = errorMessage || '';
  });
  return attributesData;
};


/**
 * Collects attributes from an HTML element.
 *
 * @param {HTMLElement} element - The HTML element.
 * @returns {object} Collected attributes.
 */
export const collectAttributes = (element:HTMLElement) => ({
  fieldName: element.getAttribute('name'),
  value: (element instanceof HTMLInputElement) ? element.value : null,
  fieldType: element.getAttribute('fieldtype'),
  dataType: element.getAttribute('datatype'),
  pattern: element.getAttribute('pattern'),
  conceptType: element.getAttribute('typeconcept'),
  maxLength: element.getAttribute('maxlength'),
  minLength: element.getAttribute('minlength'),
  minValue: element.getAttribute('min'),
  maxValue: element.getAttribute('max'),
  file: element.hasAttribute('file'),
  accept: element.hasAttribute('accept'),
  required: element.hasAttribute('required'),
  isUnique: element.getAttribute('unique') === 'on',
});


/**
 * Applies validation to a target HTML element.
 *
 * @param {HTMLElement} target - The target HTML element.
 */
export async function applyValidation(target:HTMLElement) {

  // Dynamically add a container for error messages if not already present
  let errorContainer = target.nextElementSibling as HTMLElement;

  // Check if the error container exists; if not, create it
  if (!errorContainer || !errorContainer.classList.contains('error-container')) {
    errorContainer = document.createElement('div');
    errorContainer.className = 'error-container';
    target.parentNode?.insertBefore(errorContainer, target.nextSibling);
  }

  // Clear any existing error messages from the container
  errorContainer.innerHTML = '';

  // Collect attributes and validate
  const getAttributes = collectAttributes(target);
  const result = await validate(getAttributes);

  try {
    if (result.status) {
      // Clear error message on valid input
      target.classList.remove('invalid');
      target.classList.add('valid');
    } else {
      // Show error message on invalid input
      target.classList.remove('valid');
      target.classList.add('invalid');
      
      if (result.details && typeof result.details === 'object') {
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.style.color = 'red';
        errorSpan.style.fontSize = '12px'
        const errorDetails = Object.values(result.details).filter(Boolean);
        errorSpan.innerHTML = errorDetails.join('<br>');
        errorContainer.appendChild(errorSpan);
      }
    }
  } catch (error) {
    console.error('Validation error:', error);
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.style.color = 'red';
    errorSpan.textContent = 'Validation failed. Please try again.';
    errorContainer.appendChild(errorSpan);
  }
  
}

`;class Re{async createProject(e,t,a){const i=await V(I.PROJECT_COMP_NAME,t,e),o=await Z(a);return await F(o,i,se.ENTITY_PROJECT_LINKER),i}async getAllProjects(e){return new Promise(async(t,a)=>{const i=await k(),o=new M;o.typeConnection=`the_entity_${se.ENTITY_PROJECT_LINKER}`,o.selectors=[`the_${I.PROJECT_COMP_NAME}_name`],o.name="first",o.inpage=100;const s=new M;s.conceptIds=[e||i.entityId],s.name="second",s.inpage=100,s.freeschemaQueries=[o],s.outputFormat=le,await _e(s,"").subscribe(async r=>{const l=r?.[0]?.data?.the_entity?.[`the_entity_${se.ENTITY_PROJECT_LINKER}`];t(l)}).catch(r=>{console.error(r);const l=r?.message;A.errorToast(`${l}`,4),a({error:!0,message:l})})})}async getProjectById(e){const a=(await k())?.token;let i=new G;i.composition=e,i.fullLinkers=[`the_${I.PROJECT_COMP_NAME}_name`,`the_${I.PROJECT_COMP_NAME}_main_page`,`the_${I.PROJECT_COMP_NAME}_${se.PROJECT_PAGE_LINKER}`],i.inpage=100;let o=new G;return o.fullLinkers=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_body`],o.inpage=100,await Se([i,o],a)}async updateProjectField(e,t,a){const i=await k(),o=`the_${I.PROJECT_COMP_NAME}_${e}`;await re(a,o);const s=await O(a),r=await te(`${e}`,`${t}`,!1,i.userId,4,999);await F(s,r,e)}async deleteProject(e){try{return await Me(e),!0}catch(t){return console.error("Failed to delete project:",t),!1}}async addPagesToProject(e,t){try{const a=await O(e);if(!a){console.error("Project not found");return}await re(e,`the_project_${se.PROJECT_PAGE_LINKER}`);for(const i of t){const o=await O(i);if(!o){console.error("Page not found");return}await F(a,o,se.PROJECT_PAGE_LINKER)}await N.SyncDataOnline()}catch(a){console.error("Failed to add page to project:",a)}}async deletePageFromProject(e,t){try{const a=await O(e);if(!a){console.error("Project not found");return}const i=await O(t);if(!i){console.error("Page not found");return}const o=await Dn(a,i,"",`the_project_${se.PROJECT_PAGE_LINKER}`);if(!o){console.error("Connection not found");return}await He(o?.[0]?.id),await N.SyncDataOnline()}catch(a){console.error("Failed to delete page from project:",a)}}async setMainPage(e,t){try{const a=await O(e);if(!a){console.error("Project not found");return}const i=await O(t);if(!i){console.error("Page not found");return}await re(e,"the_project_main_page"),await F(a,i,"main_page"),await N.SyncDataOnline()}catch(a){console.error("Failed to set main page:",a)}}}let we=!1;const Br=async()=>{if(we)return;we=!0;let n=new cn;const e=await wn(n),t=e?.routesDir,a=e?.pagesDir;await Nr(a,t),n.generateAsync({type:"blob"}).then(function(i){let o=document.createElement("a");o.href=URL.createObjectURL(i),o.download="my_files.zip",o.click()}),we=!1},$r=async n=>{if(we)return;we=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],t=new cn;const a=await wn(t),i=a?.widgetsDir,o=a?.pagesDir;i&&o&&await jr(n,o,i),a?.routesDir?.file("routes.ts",vn(e)),t.generateAsync({type:"blob"}).then(function(s){let r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="my_files.zip",r.click()}),we=!1},wn=async n=>{n.file("index.html",Lr),n.file("vite.config.js",Tr),n.file(".gitignore",Sr),n.file("package.json",Cr),n.file("tsconfig.json",Ar);let e=n.folder("public");if(!e){console.log("unable to create public folder");return}let t=n.folder("src");if(!t){console.log("unable to create src folder");return}t?.file("app.ts",xr),t?.file("style.css","");let a=t?.folder("environments");if(!a){console.log("unable to create environments folder");return}a?.file("environment.dev.ts",Wr);let i=t?.folder("widgets");if(!i){console.log("unable to create widgets folder");return}let o=t?.folder("pages");if(!o){console.log("unable to create pages folder");return}let s=t?.folder("services");if(!s){console.log("unable to create services folder");return}s?.file("widget.service.ts",kr),s?.file("drop.service.ts",Mr),s?.file("validator.service.ts",Pr);let r=t?.folder("routes");if(!r){console.log("unable to create routes folder");return}return r?.file("renderRoute.service.ts",Ir),{srcDir:t,pagesDir:o,servicesDir:s,publicDir:e,environmentsDir:a,widgetsDir:i,routesDir:r}},Nr=async(n,e)=>{if(!n&&!e)return;let t=[];const a=await k(),i=a?.entityId,o=a?.token,s=new G;s.composition=i,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new G;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await Se([s,r],o);if(l?.data.the_entity?.the_entity_s_page?.length)for(let d=0;d<l?.data.the_entity?.the_entity_s_page?.length;d++){const c=l.data.the_entity.the_entity_s_page[d];let u={page:c?.data?.the_page?.the_page_body?.[0]?.id,title:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:c?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:c?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:c?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:c?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!u.page)continue;const p=ue(u.slug||"");if(!p)continue;const m=Ci(p),g=Si(p);t.push({path:`/${p}`,content:`${m}Index`,importFrom:`/${g}/${g}.index.ts`});let h=n?.folder(g);const w=`
import { StatefulWidget, convertWidgetTreeToWidgetWithWrapper } from 'mftsccs-browser';
import { getWidgetFromId } from "../../services/drop.service.ts";

export default class ${m}Index extends StatefulWidget
{

    async  after_render() {   
        this.setTitle('${u.title}');
        let widgetTree = await getWidgetFromId(${u.page});
        const newWidget = await convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
        // apply newWidget css to the page
        const style = document.createElement('style');
        let pageStyle = \`@root { font-family: ${u.font_family}; 
 font-size: ${u.font_size} }\`;
        style.innerHTML = pageStyle + newWidget.css;
        document.head.appendChild(style);
        // apply newWidget js to the page
        const script = document.createElement('script');
        script.innerHTML = newWidget.js;
        document.head.appendChild(script);
    }
}
`;h?.file(`${g}.index.ts`,w)}e?.file("routes.ts",vn(t))},jr=async(n,e,t)=>{console.log("widgetsDir",t);const i=(await k())?.token,o=await La(n,i,!0);let s=e?.folder("home");const r=`
import * as tsccs from "mftsccs-browser";

${o?.css?'import "./home.style.css";':""}
import { getWidgetFromId } from "../../services/drop.service.ts";
import { renderLatestWidget } from 'mftsccs-browser';

export default class homeIndex extends tsccs.StatefulWidget
{

    async  after_render() {        
        // let widgetTree = await getWidgetFromId(${n});
        // tsccs.convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
        const appElement = document.querySelector<HTMLDivElement>("#app");
        let widgetTree = await renderLatestWidget(${n}, appElement);
    }
        
     getHtml() {
        return '';
    }
}
`;s?.file("home.index.ts",r),o?.css&&s?.file("home.style.css",o?.css)},Dr=async n=>{if(we)return;we=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],t=new cn;const a=await wn(t),i=a?.widgetsDir,o=a?.pagesDir;let s="";i&&o&&(s=await Hr(n,o)),a?.routesDir?.file("routes.ts",vn(e)),t.generateAsync({type:"blob"}).then(function(r){let l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=`${s||"page"}.zip`,l.click()}),we=!1},Hr=async(n,e)=>{const t=await k(),a=t?.entityId,i=t?.token,o=await La(n,i,!0),s=new G;s.composition=a,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new G;r.inpage=100,r.composition=n,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const d=(await Se([s,r],i))?.data?.the_entity?.the_entity_s_page?.filter(g=>g?.id==n),c=d?.[0]?.data?.the_page?.the_page_body?.[0]?.id,u=d?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let p=e?.folder("home");const m=`
    import * as tsccs from "mftsccs-browser";
    
    ${o?.css?'import "./home.style.css";':""}
    import { getWidgetFromId } from "../../services/drop.service.ts";
    import { renderLatestWidget } from 'mftsccs-browser';

    export default class homeIndex extends tsccs.StatefulWidget
    {
        async  after_render() {        
            const appElement = document.querySelector<HTMLDivElement>("#app");
            let widgetTree = await renderLatestWidget(${c}, appElement);
        }
        getHtml() {
            return '';
        }
    }
    `;return p?.file("home.index.ts",m),o?.css&&p?.file("home.style.css",o?.css),u},Or=async n=>{if(we)return;if(!n){console.log("Project id is required");return}const i=(await new Re().getProjectById(n))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();we=!0;let o=new cn;const s=await wn(o),r=s?.routesDir,l=s?.pagesDir;await qr(l,r,n),o.generateAsync({type:"blob"}).then(function(d){let c=document.createElement("a");c.href=URL.createObjectURL(d),c.download=`the_${i}.zip`,c.click()}),we=!1},qr=async(n,e,t)=>{if(!n&&!e)return;let a=[];const o=(await k())?.token,s=new G;s.composition=t,s.inpage=100,s.fullLinkers=["the_project_s_page","the_project_main_page"];const r=new G;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await Se([s,r],o),d=l?.data.the_project?.the_project_main_page?.[0]?.id;if(l?.data.the_project?.the_project_s_page?.length)for(let c=0;c<l?.data.the_project?.the_project_s_page?.length;c++){const u=l.data.the_project.the_project_s_page[c];let p={page:u?.id,title:u?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:u?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:u?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:u?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:u?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:u?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!p.page)continue;const m=ue(p.slug||"");if(!m)continue;const g=Ci(m),h=Si(m);a.push({path:`/${m}`,content:`${g}Index`,importFrom:`/${h}/${h}.index.ts`}),p.page==d&&a.push({path:"/",content:`${g}Index`});let w=n?.folder(h);const y=`
                import { StatefulWidget, convertWidgetTreeToWidgetWithWrapper, renderPage, renderLatestWidget } from 'mftsccs-browser';
                // import { getWidgetFromId } from "../../services/drop.service.ts";

                export default class ${g}Index extends StatefulWidget
                {

                    async  after_render() {   
                        this.setTitle('${p.title}');
                        const appElement = document.querySelector<HTMLDivElement>("#app");
                        let widgetTree = await renderPage(${p.page}, appElement);
                        // let widgetTree = await renderLatestWidget(${p.page}, appElement);

                        // let widgetTree = await getWidgetFromId(${p.page});
                        // const newWidget = await convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
                        // // apply newWidget css to the page
                        // const style = document.createElement('style');
                        // style.innerHTML = pageStyle + newWidget.css;
                        // document.head.appendChild(style);
                        // // apply newWidget js to the page
                        // const script = document.createElement('script');
                        // script.innerHTML = newWidget.js;
                        // document.head.appendChild(script);
                    }
                }`;w?.file(`${h}.index.ts`,y)}e?.file("routes.ts",vn(a))};async function Fr(){const n=new ie("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function Vr(){const n=new ie("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function qi(){await Fr(),await Vr(),await Ws(),await Is()}function Rr(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function Fi(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function Qn(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class Vi{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const a=(await k())?.token;da(),Fi(),document.querySelector("#widget-properties #widget-type input")?.remove(),Rr(),await qi();let o=pn(),s=await We(e,a),r=await ge(s?.widgetId??e),l=await be(r,o);this.addPageUpdate(e),Qn(),f.resetWidgetTree(),f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),X(r,!1,l,!0),$.enableWidgetButtons(),hn(),he(),ve()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`
        <div class="position-relative" style="z-index: 100;">
          <div class="w-100 d-flex justify-content-center">
            <button id="updateFsPagePublish" onclick="updatePage(event, ${e}, true)" 
              class="btn btn-primary btn-sm d-flex align-items-center gap-1"
              style="border-radius: 0.2rem 0 0 0.2rem; border-right: 1px solid #A2A2A2;"
              data-widgetid="${e}"
            >
              <span class="material-symbols-outlined">article_shortcut</span>
              Update & Publish
            </button>
            <div
                  id="updateDropDownArrowPage"
                  class="btn btn-primary btn-sm d-flex justify-content-center align-items-center";
                  style="width: 25px; border-radius: 0 0.2rem 0.2rem 0;"
                >
                  <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
        </div>
        <button id="updateFsPage" onclick="updatePage(event, ${e})" style="right: -4px; top: 90%;" class="btn btn-primary btn-sm d-flex align-items-center gap-1 mx-1 position-absolute w-100 mt-1 shadow-sm d-none" data-widgetid="${e}">
          <span class="material-symbols-outlined">save</span>
          Update Page
        </button>
        </div>
      `,this.isDroppedDown=!1,this.arrowBtn=t.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=t.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,t){Wi(e.css,t?.css),Ai(e.after_render),Ii(e.before_render)}}class Ur{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
    <dialog id="convert-dialog" class="col-md-4">
      <h4 class="mb-4">Convert your code to Widget</h4>
      <form method="dialog" onsubmit="convertToWidget(event, 'convert-dialog')" id="form-convert">
        <div class="mb-3 row">
          <label for="htmlCode" class="col-sm-4 col-form-label">HTML code: </label>
          <div class="col-sm-8">
            <textarea class="form-control" id="htmlCode" name="htmlCode" placeholder="Enter HTML code..."></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="cssCode" class="col-sm-4 col-form-label">CSS code: </label>
          <div class="col-sm-8">
            <textarea class="form-control" id="cssCode" name="cssCode" placeholder="Enter CSS code..."></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="jsCode" class="col-sm-4 col-form-label">JavaScript code: </label>
          <div class="col-sm-8">
            <textarea class="form-control" id="jsCode" name="jsCode" placeholder="Enter Script code..."></textarea>
          </div>
        </div>
        <!-- <div class="mb-3 row">
          <label for="widgetName" class="col-sm-4 col-form-label">Widget name: </label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="widgetName" name="widgetName" placeholder="e.g. form widget">
          </div>
        </div> -->

        <div class="text-end">
          <button class="btn btn-light" onclick="closeModal('convert-dialog')" type="button">Cancel</button>
          <button formmethod="dialog" class="btn btn-dark" type="submit">Convert Now</button>
        </div>
      </form>
    </dialog>
    `}}const Ya={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},Qa=new tt,Ri=new Vi;async function fa(n){n.preventDefault();try{await Ue();const e=document.getElementById("fspage-save-button"),t=Number(e?.getAttribute("data-pageid")),o="widget_"+(await Qa.getPageById(t)).data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_slug`].data.the_slug,s=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Saving page...",0),s?.length&&s.forEach(u=>{const p=u.querySelectorAll(".widget_container");p?.length&&p.forEach(m=>{m.className="widget_container_disabled"}),u.classList.remove("edited-widget-container")}),await De();const r=await Ca();f.staticWidgetTree.html=r,await f.savePageWidget(t,o),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast(Ya.PAGE_SAVE);const c=(await Qa.getPageById(t))?.data?.the_page?.the_page_body?.id;return await Ri.LoadPageWidget(c),Ya.PAGE_SAVE}catch(e){ba(e,"There is an error on saving widget")}}async function ya(n,e,t){n.preventDefault();const a=document.getElementById("updateFsPagePublish"),i=document.getElementById("updateFsPage"),o=i?.innerHTML||"";try{const s=document.getElementById("updateFsPagexx");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating.."),s&&(s.classList.add("disabled"),s.textContent="Updating..");const r=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Updating Page...",0),r?.length&&(A.infoMessageToast("Updating page...",0),r.forEach(u=>{const p=u.querySelectorAll(".widget_container");p?.length&&p.forEach(m=>{m.className="widget_container_disabled"}),u.classList.remove("edited-widget-container")})),await De();const l=await Ca();f.staticWidgetTree.html=l;const d=await f.updateWidget();return console.log("updateWidgetResponse ->",d),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page Updated Successfully"),await Ri.LoadPageWidget(e),t&&t===!0&&await f.publish(),"updated widget successfully!"}catch(s){console.error("error updating page",s),s instanceof Error&&A.errorToast(s.message),document.querySelector(".infoMessageToast")?.remove()}finally{a&&a.classList.remove("disabled"),i&&(i.classList.remove("disabled"),i.innerHTML=o)}}function zr(n){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const t=Zc(`/page-preview/${e}`),a=`${window.location.origin.replace(/\/$/,"")}${t}`;window.open(a,"_blank")?.focus()}}async function Jr(){const n=document.getElementById("preview-button-wrapper"),e=document.getElementById("preview-button-back"),t=n.classList.value.includes("d-none"),a=document.querySelector(".content-target"),i=document.querySelector(".midContent .content"),o=document.getElementById("widgetButtionCodeViewWrapper"),s=document.getElementById("undo-btn"),r=document.getElementById("redo-btn"),l=document.getElementById("ai-prompt-btn"),d=document.querySelector(".environment-selector-wrapper"),c=document.getElementById("select-box"),u=document.getElementById("element-info");if(t){n.classList.remove("d-none"),e.classList.add("d-none"),s.classList.remove("d-none"),r.classList.remove("d-none"),l.style.display="flex",o&&(o.style.display="block");const p=pn(),m={...f.widgetTree};m.html=fe.staticHTMLOriginal,m.css=fe.staticCSSOriginal;const g=await be(m,p,!0,void 0,!0);X(m,!1,g,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),i.classList.remove("preview"),he(),ve(),Ge.enableHeader()}else{n.classList.add("d-none"),e.classList.remove("d-none"),c.style.display="none",u.style.display="none",s.classList.add("d-none"),r.classList.add("d-none"),d.classList.add("d-none"),l.style.display="none",o&&(o.style.display="none");const p={...f.widgetTree};fe.staticHTMLOriginal=f.staticWidgetTree.html,fe.staticCSSOriginal=f.staticWidgetTree.css,p.html=fe.staticHTMLCache,p.css=fe.staticCSSCache;const m=await be(p,a,!0,void 0,!1);X(p,!1,m),document.getElementById("column-left").classList.add("d-none"),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),Ge.disableHeader(),ot.closeCodeView(),i.classList.add("preview");const y=document.querySelector("header.wico_top-header");y.style.display="none"}}function Gr(n,e=0){return window.saveWidgetInFolders=Qr,`
     <dialog id="folder-widget-container" class="col-md-6 a-dialog create-element-dialog">
            <!-- START .a-dialog-header  -->
            <div class="a-dialog-header d-flex justify-content-between">
                <span>Save Folder</span>
                <span class="material-symbols-outlined" style="cursor: pointer;" onclick="closeModal('folder-widget-container')">close</span>
            </div> 
            <!-- END .a-dialog-header  -->
            <!-- START .a-dialog-body  -->
            <div class="a-dialog-body">
                <div class="row">
                    <div class="col-md-5">
                        <div id="widgetFolder"></div>
                    </div>
                    <div class="col-md-7">
                        <form method="dialog" onsubmit="saveWidgetInFolders(event, 'folder-widget-container', '${e||""}', ${n} )" id="form-folder-modal">
                            <div class="flex flex-col mb-2">
                                <label for="name" class="form-label">Name</label>
                                <input ${n?'id="save-to-folder-name"':'id="folder-name"'}  required ${n?"disabled":""} class="form-control" />
                            
                            </div>
                            <div class="flex flex-col mb-2">
                                <label for="description" class="form-label">Description</label>
                                <textarea rows="2"  ${n?'id="save-to-folder-description"':'id="description"'} class="form-control" placeholder="Description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END .a-dialog-body  -->
      </dialog>
    `}let kn,vt;async function Yr(n,e){kn=n;const t=Gr(e,typeof n=="object"?0:n),a=document.createElement("div");a.innerHTML=t;const i=a.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(i),await ce("folder-widget-container");const o=await k();if(!o)return;let s,r,d=(await pt(kn,o.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(s=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),s&&(s.value=d),r=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(s=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),r=document.getElementById("folder-widget-container")?.querySelector("textarea#description"));const c=document.getElementById("widgetFolder");vt=await Ne(z.folder_widget,c,{widgetName:s.value,widgetDescription:r?.value,widgetId:kn,showCheckbox:!0,showFiles:!1})}async function Qr(n,e,t,a){n.preventDefault(),console.warn("asdfads",vt.selectedConceptIds);let i=[];vt&&vt?.selectedConceptIds?.length>0&&(i=vt.selectedConceptIds||[]);try{A.infoMessageToast("Saving Widget...",0),await Ue();const o=document.getElementById("folder-widget-container"),s=o?.querySelector('button[type="submit"]');s.textContent="Saving";const r=o?.querySelector("input"),l=o?.querySelectorAll("button"),c=(document.getElementById("save-to-folder-name")||document.getElementById("folder-name")).value;l&&l.forEach(E=>{E.disabled=!0}),r&&(r.disabled=!0),await De();let u;if(!a){R.staticElement?.removeAttribute("draggable");const E=document.querySelectorAll(".edited-widget-container");E?.length&&E.forEach(async S=>{if(S.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[S.id]){const L=await Pe(S,"div.mftsccs-marking-element");f.editedWidgets[S.id].html=L.innerHTML}});const b=await eo();f.staticWidgetTree.html=b;const v=await f.saveWidget(c);u=await Z(v.id),t=u.id}const p=await k(),m=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,g=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,h={title:m,source_url:window.location.href,widget_id:t,short_desc:g,note:"",data_type:"widget",created_on:Date.now()};if(i.length==0){const E=p?.userConcept;u=await Z(Number(t));let b={...h,boom_folder:{name:"",parent:E}};const v=await Qe({boomgpt:b},void 0,void 0,void 0,p.userId,4);await Ft(await Z(Number(E)),v,"the_boom_folder_s_contain"),await Y(v,u,"the_refer")}else if(i?.length>0)for(let E=0;E<i.length;E++){const b=i[E];u=await Z(Number(t));const v=await Z(Number(b));if(!v)throw new Error("Selected folder concept not found!");let S={...h,boom_folder:{name:v.name||"",parent:b}};const L=await Qe({boomgpt:S},void 0,void 0,void 0,p.userId,4);await Ft(await Z(Number(b)),L,"the_boom_folder_s_contain"),await Y(L,u,"the_refer")}await N.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),Ce("folder-widget-container"),Pt(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),a||(await $.renderSavedWidgets(),ct(n,Number(t)))}catch(o){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),ba(o,"There is an error on saving widget")}}class Ui extends kt{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";environmentSelector="";_pageBuilderService;previewArrowButton=null;previewCacheButton=null;isPreviewDroppedDown=!1;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const t=k();if(t&&(this.environmentSelector=`
      <style>
        .environment-selector-wrapper {
          display: flex;
          gap: 4px;
          align-items: center;
          background: transparent;
          padding: 4px 6px;
          border-radius: 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .environment-selector-wrapper select {
          flex: 1;
          padding: 4px 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.95);
          color: #333;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .environment-selector-wrapper select:hover {
          background: #fff;
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        }

        .environment-selector-wrapper select:focus {
          border-color: #fff;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
        }

        .env-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .env-action-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .env-action-btn:active {
          transform: translateY(0);
        }

        .env-action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .env-action-btn .material-symbols-outlined {
          font-size: 16px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .environment-selector-wrapper {
            padding: 3px 5px;
            border-radius: 5px;
          }

          .environment-selector-wrapper select {
            font-size: 11px;
            padding: 3px 6px;
          }

          .env-action-btn {
            width: 24px;
            height: 24px;
          }

          .env-action-btn .material-symbols-outlined {
            font-size: 14px;
          }
        }
      </style>
      <div class="environment-selector-wrapper">
        <select id="select-environment-dropdown">
          <option value="">Select Environment</option>
        </select>
        <button id="edit-environment-btn" class="env-action-btn" title="Edit selected environment" disabled>
          <span class="material-symbols-outlined">edit</span>
        </button>
        <button id="add-environment-btn" class="env-action-btn" title="Add new environment">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
      `,this.saveBoomButtonHTML=`
        <div class="text-end d-flex flex-row" id="widget-btn-wrapper">
          <button onclick="saveWidgetToFolderBtn(event,false)" class="btn btn-primary btn-sm d-flex align-items-center gap-1" title="Save to Folder">
            <span>Boom</span>
          </button>
          <!-- <button onclick="saveWidget(event)" class="btn btn-primary btn-md">Save Widget</button> -->
        </div>
      `),this.previewButtonHTML=`
      <button id="preview-btn" onclick="previewWidget(event)" class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1" title="Preview">
        <span class="material-symbols-outlined"> visibility </span> Preview
      </button>
    `,e){this.the_params=e,this._pageBuilderService=new Vi;const a=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+a:"Widget Builder";const i=this.the_params?.page_id;t&&e.type==ha.page&&(this.saveBoomButtonHTML=`
         <div class="text-end d-flex flex-row" id="widget-btn-wrapper">
            <button data-pageid="${i}" id="fspage-save-button" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
              <span>Boom Page</span>
            </button>
          </div>
          `),this.previewButtonHTML=`
        <div class="position-relative" style="z-index: 100;" id="preview-button-wrapper">
          <div class="w-100 d-flex justify-content-center">
            <button id="preview-btn" onclick="previewPage(event)"
              class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 rounded-0 rounded-start" title="Preview" data-pageId="${i}">
              <span class="material-symbols-outlined"> visibility </span> Preview Page
            </button>
            <div id="updateDropDownPagePreview" class="btn btn-secondary btn-sm d-flex justify-content-center align-items-center px-1 rounded-0 rounded-end">
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
          <button id="preview-cache-btn" onclick="previewPageCahe(event)"
            class="btn btn-secondary btn-sm d-flex align-items-center gap-1 position-absolute w-100 mt-1 shadow-sm d-none"
            data-pageId="${i}">
            <span class="material-symbols-outlined"> visibility </span> Preview Cache
          </button>
        </div>
        <div class="position-relative d-none" style="z-index: 100;" id="preview-button-back">
        <button onclick="previewPageCahe(event)"
            class="btn btn-outline-secondary btn-sm text-light d-flex align-items-center gap-1"
            data-pageId="${i}" ><span class="material-symbols-outlined">design_services</span> Develop</button>
        </div>
      `}this.tryAIButtonHTML=`
        <button id="ai-prompt-btn" onclick="openPromptModal(event)" class="btn btn-primary btn-sm gap-2" title="Preview">
          <span class="material-symbols-outlined text-light">
          wand_stars
          </span> 
          Create with WICO AI
        </button>
      `,this.responsiveButtonHTML=`
  <div class="dropdown-wrapper">
    <button type="button" class="button-rounded dropdown-toggle " id="device-btn">
      <span class="material-symbols-outlined laptop-icon">laptop_windows</span>
      <span id="device-text">Desktop</span>
    </button>
    <ul class="dropdowns-menu" id="device-menu">
      <li><a class="dropdown-items active" data-option="desktop">
        <span class="material-symbols-outlined laptop-icon">laptop_windows</span>
        <span>Desktop</span>
      </a></li>
      <li><a class="dropdown-items" data-option="tablet">
        <span class="material-symbols-outlined">tablet_mac</span>
        <span>Tablet</span>
      </a></li>
      <li><a class="dropdown-items" data-option="mobileL">
        <span class="material-symbols-outlined">mobile_landscape</span>
        <span>Mobile L</span>
      </a></li>
      <li><a class="dropdown-items" data-option="mobile">
        <span class="material-symbols-outlined">smartphone</span>
        <span>Mobile</span>
      </a></li>
    </ul>
  </div>
`}before_render(){this.render()}after_render(){if(this.the_params){this.initializePreviewDropDown(),document.getElementById("fspage-save-button").addEventListener("click",fa);const t=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!t){hn();return}this._pageBuilderService.LoadPageWidget(Number(t))}}initializePreviewDropDown(){this.previewArrowButton=document.getElementById("updateDropDownPagePreview"),this.previewCacheButton=document.getElementById("preview-cache-btn"),this.previewCacheButton.addEventListener("click",()=>{this.togglePreviewUpdate(!0)}),this.previewArrowButton.addEventListener("click",()=>{this.togglePreviewUpdate(!1)})}togglePreviewUpdate(e){this.previewCacheButton&&this.previewArrowButton&&(!this.isPreviewDroppedDown&&e!==!0?(this.previewCacheButton.classList.remove("d-none"),this.previewArrowButton.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.previewCacheButton.classList.add("d-none"),this.previewArrowButton.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isPreviewDroppedDown=!this.isPreviewDroppedDown)}getHtml(){return window.openSaveWidgetModal=Ta,window.saveWidget=Xi,window.updateWidget=Sa,window.newWidget=Ye,window.previewWidget=Al,window.downloadWebsite=Br,window.moveUp=Ae.moveUp,window.moveDown=Ae.moveDown,window.copyElement=Ae.copyElement,window.editWidget=Ae.editWidget,window.openConvertModal=kl,window.convertToWidget=Wl,window.updatePage=ya,window.previewPage=zr,window.previewPageCahe=Jr,window.undoAction=H.undoAction,window.redoAction=H.redoAction,window.saveWidgetToFolderBtn=Yr,window.openPromptModal=Js,window.openAIModal=$i,window.refineAIData=Jn,`
      <div class="content" onclick="  removeSubSidebar()">

        <div class="column-title d-flex justify-content-between align-items-center panel-properties">
        <h3 id="widget-builder" class="text-truncate" title="${this.component_heading}">${this.component_heading}</h3>
        ${this.responsiveButtonHTML}

        ${this.tryAIButtonHTML}
          ${this.environmentSelector}
          <div class="d-flex align-items-center gap-1">
            <button id="undo-btn" onclick="undoAction(event)" class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1" title="Undo, Ctrl + z">
              <span class="material-symbols-outlined">undo</span>
            </button>
            <button id="redo-btn" onclick="redoAction(event)" class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1" title="Redo, Ctrl + y">
              <span class="material-symbols-outlined">redo</span>
            </button>
            ${this.saveBoomButtonHTML}
            ${this.saveButtonHTML}
            <!-- <button onclick="openConvertModal('convert-dialog')" class="button-circle" title="Convert">
              <span class="material-symbols-outlined"> convert_to_text </span> 
            </button> 
            <button onclick="newWidget(event)" class="button-circle" title="New">
              <span class="material-symbols-outlined"> add </span>
            </button> -->
            <!-- <button id="download-wdgt-btn" onclick="downloadWebsite(event)" class="button-circle" title="Download">
              <span class="material-symbols-outlined"> download </span> Download
            </button> -->
           
           
          
            ${this.previewButtonHTML}
          </div>
          
        </div>

        <!-- <div class="column-title d-flex justify-content-between align-items-center ">
          <h3 id="widget-builder">${this.component_heading}</h3>
          <div class="d-flex flex-wrap align-items-center gap-3">
            <button onclick="openConvertModal('convert-dialog')" class="btn btn-outline-secondary d-flex gap-1 align-items-center">
              <span class="material-symbols-outlined"> convert_to_text </span> Convert
            </button>
            <button onclick="newWidget(event)" class="btn btn-outline-secondary d-flex gap-1 align-items-center">
              <span class="material-symbols-outlined"> add </span> New
            </button>
            <button id="download-wdgt-btn" onclick="downloadWebsite(event)" class="btn btn-outline-secondary d-flex gap-1 align-items-center">
              <span class="material-symbols-outlined"> download </span> Download
            </button>
            ${this.previewButtonHTML}
          </div>
        </div> -->
        <div id="contentTargetAndCodeViewWrapper">
        <div>
          <div id="select-box" class="select-box">
            <div class="element-options">
            <!-- <a onmousedown="updateElementAsDraggable(event)" onmouseup="updateElementAsDraggable(event)" onclick=" _dragService.dragElement(event)" class="drag_widget widget-toolbar" title="Move Element">
              <span class="material-symbols-outlined"> drag_indicator </span>
            </a> -->
              <a onclick="_dragService.removeElement(event)" class="delete_widget widget-toolbar" title="Remove Element">
                <span class="material-symbols-outlined"> delete </span>
              </a>
              <a onclick="moveUp(event)" class="move_up widget-toolbar" title="Move Up">
                <span class="material-symbols-outlined"> arrow_upward </span>
              </a>
              <a onclick="moveDown(event)" class="move_down widget-toolbar" title="Move Down">
                <span class="material-symbols-outlined"> arrow_downward </span>
              </a>
              <a onclick="copyElement(event)" class="copy_widget widget-toolbar" title="Duplicate">
                <span class="material-symbols-outlined"> content_copy </span>
              </a>
              <a onclick="editWidget(event)" id="edit-widget" class="widget-toolbar" title="Edit">
                <span class="material-symbols-outlined"> edit </span>
              </a>
            </div>
          </div>
          <div id="element-info">
            <div id="element-info_details">
            </div>
          </div>
        </div>
          <div id="builder-workarea" class="content-target" ondragenter="_dragService.onDragEnter(event)" ondragleave="_dragService.onDragLeave(event)" ondragover="_dragService.onDragOver(event)" ondrop="_dragService.onDrop(event)"></div>
          <div id="widgetButtionCodeViewWrapper"></div>
        </div>
      </div>
    `}}function zi(){N.conceptsSyncArray=[],N.connectionSyncArray=[]}class Kr{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let t="",a="";return this.props.id==="fs-create-page-modal"?a=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?a=this.editPageModal():this.props.id==="create-project-modal"?(a=this.createNewProjectModal(),t="m-large"):this.props.id==="add-pages-project"&&(a=this.addPagesModalHtml(),t="m-large"),e.innerHTML=`
      <div class="m-content ${t}">
        <div id="closeModalBtn" class="close-modal">
          <!-- <img src="./images/icons/cross-close.svg" alt="" class="icon" /> -->
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L1 11M1 1L11 11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="m-header">
          <span id="modalHeader">${this.props.headerText}</span>
        </div>
        ${a}
      </div>
    `,e.querySelector("#closeModalBtn").addEventListener("click",this.handleClose.bind(this)),e}updateModal(){this.props.isOpen?this.modal.classList.add("open"):this.modal.classList.remove("open")}handleClose(){zi(),this.modal.remove()}createNewPageModal(){return`
        <div class="m-body">
            <form id="fs-create-page-form">
                <label for="title">Page Title:</label>
                <input id="title" type="text" name="title" placeholder="Enter page title" required>
                <label for="slug">Slug:</label>
                <input id="slug" type="text" name="slug" placeholder="Enter page slug" required disabled>
            </form>
        </div>
        <div class="m-footer">
          <button id="fs-save-page-button" class="m-submit-btn">
            <img src="./images/icons/pages-white.svg" alt="" class="icon" />
            Create Page
          </button>
        </div>`}editPageModal(){return`
        <div class="m-body">
            <form id="fs-edit-page-form">
                <label for="title">Page Title:</label>
                <input id="title" type="text" name="title" placeholder="Enter page title" required value="${this.props.data.title}">
                <label for="slug">Slug:</label>
                <div class="slug-input-wrapper">
                  <input id="slug" type="text" name="slug" placeholder="Enter page slug" required value="${this.props.data.slug}" disabled>
                  <button id="fs-slug-edit-toggle" type="button" class="slug-edit-toggle" title="Edit slug">
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                </div>
            </form>
        </div>
        <div class="m-footer">
          <button id="fs-edit-page-button" class="m-submit-btn">
            Rename
          </button>
        </div>`}createNewProjectModal(){return`
        <div class="m-body">
            <form method="dialog" id="create-project-form" onsubmit="createProjectHandler(event)">
                <label for="projectName" class="project-label">Project name</label>
                <input type="text" class="form-control" autocomplete="project-name" name="name" id="projectName" value="" placeholder="Enter project name" required>
            </form>
        </div>
        <div class="add-pages-section">
            <div class="add-pages" id="addPages">Add pages</div>
            ${this.addPagesModalHtml()}
        </div>`}addPagesModalHtml(){return`
      <div class="m-body">
        <div class="search-pages">
            <input type="text" id="searchInput" 
              class="form-control" 
              placeholder="Search pages"  
              data-id="options">
        </div>
        <div class="options-container" id="options">
          <!-- Available pages will be dynamically added here -->
        </div>
        <div class="selected-pages-container">
          <div class="selected-pages-text">Selected pages:</div>
          <div class="selected-pages" id="selectedItems">
            <!-- Selected pages will be dynamically added here -->
          </div>
        </div>
        <div class="m-footer">
          <button type="button" id="closeModal" class="btn btn-secondary cancel-page">Cancel</button>
          <button type="button" id="submitSelection" class="btn btn-primary add-page">Add</button>
        </div>
      </div>
    `}}function Yt(n){new Kr(n)}function Ka(n){const e=document.getElementById(n);e&&e.remove()}class va{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new Li,this._pagesTSCCSService=new tt}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),t=document.getElementById("saved-page-list-container");t&&(t.innerHTML="",t.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-page-button");a?.removeEventListener("click",this.createButtonClickHandler),a?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(r=>{r.removeEventListener("click",this.deletePageButtonClickHandler),r.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(r=>{r.removeEventListener("click",this.editPageButtonClickHandler),r.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(r=>{r.removeEventListener("click",this.duplicatePageButtonClickHandler),r.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(a=>a.remove())}createButtonClickHandler=()=>{Yt({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const t=document.getElementById("fs-create-page-form"),a=t?.elements.namedItem("title");if(!a){console.error("page_title not found");return}const i=async()=>{const s=await this._pagesTSCCSService.generateSlug(a.value),r=t.elements.namedItem("slug");r&&(r.value=s)};a.addEventListener("keyup",i);const o=()=>{a.removeEventListener("keyup",i),document.getElementById("fs-create-page-modal")?.removeEventListener("close",o)};document.getElementById("fs-create-page-modal")?.addEventListener("close",o)};savePageButtonClickHandler=async()=>{const t=document.getElementById("fs-create-page-form").elements;if(!t.title.value){t.title.style.borderColor="red";return}A.infoMessageToast("Creating page...",0);const a=await qn(t),i=await k();await this._pagesTSCCSService.savePage(a,i?.userId,i?.entityId),await N.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),Ka("fs-create-page-modal"),setTimeout(()=>{A.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const t=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;Yt({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:a,slug:i}});const o=document.getElementById("fs-edit-page-form"),s=o?.elements.namedItem("title"),r=o?.elements.namedItem("slug"),l=document.getElementById("fs-slug-edit-toggle"),d=document.getElementById("fs-edit-page-button");if(!s||!r||!d){console.error("Required fields not found in edit page modal");return}const c=()=>{const g=ue(r.value),h=Wn(g);!!!s.value.trim()||!h.isValid?d?.setAttribute("disabled","true"):d?.removeAttribute("disabled")},u=async()=>{if(this.clearInputError(s),r.disabled){const g=await this._pagesTSCCSService.generateSlug(s.value,Number(t));r.value=g,this.clearInputError(r)}c()},p=()=>{const g=ue(r.value),h=Wn(g);h.isValid?this.clearInputError(r):this.setInputError(r,h.message||"Invalid slug format"),c()},m=()=>{r.disabled&&(r.removeAttribute("disabled"),r.focus(),l?.classList.add("active"),p())};s.addEventListener("keyup",u),r.addEventListener("input",p),l?.addEventListener("click",m),d?.addEventListener("click",()=>this.updatePageButtonClickHandler(t)),c()};async PageInputElementChangeHandler(e,t){const a=e.target,i=a.name,o=i==="slug"?ue(a.value):a.value;let s=await this._pagesTSCCSService.checkSlugAvailablity(o,Number(t));if(i==="slug"&&!s){document.getElementById("fs-edit-page-button")?.setAttribute("disabled","true"),a.style.borderColor="red",a.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(a.getAttribute("name"),o,Number(t))}updatePageButtonClickHandler=async e=>{const t=document.getElementById("fs-edit-page-form"),a=document.getElementById("fs-edit-page-button"),i=t.elements.namedItem("title"),o=t.elements.namedItem("slug");if(this.clearInputError(i),this.clearInputError(o),!i.value.trim()){this.setInputError(i,"Page title is required");return}const s=ue(o.value),r=Wn(s);if(!r.isValid){this.setInputError(o,r.message||"Invalid slug format");return}if(!await this._pagesTSCCSService.checkSlugAvailablity(s,Number(e))){this.setInputError(o,"Slug already exists");return}o.value=s,i.value=i.value.trim();const d=t.elements;a?.setAttribute("disabled","true");try{A.infoMessageToast("Renaming page...",2);const c=await qn(d),u=await k();await this._pagesTSCCSService.renamePage(c,e,u?.userId),await N.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page renamed successfully");const m=new URLSearchParams(window.location.search).get("page-id");if(e===m){const g=document.getElementById("widget-builder");g.textContent=`Page Builder: ${c?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),Ka("fs-edit-page-modal")}catch{document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to rename page")}finally{a?.removeAttribute("disabled")}};deletePageButtonClickHandler=async e=>{const t=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${a}" with the slug "${i}"?`)?(A.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(t)),await N.SyncDataOnline(),Ao("/"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const a=e?.target?.getAttribute("data-id"),o=(await this._pagesTSCCSService.getPageById(Number(a)))?.data?.the_page,s=o?.the_page_title?.data?.the_title?.trim()+" copy",r=ue(o?.the_page_slug?.data?.the_slug?.trim()||""),l=r?r.includes(":")?`${r}/copy`:`${r}-copy`:"page-copy",d=await this.getAvailablePageSlug(l),c=o?.the_page_meta_title?.data?.the_meta_title?.trim(),u=o?.the_page_meta_description?.data?.the_meta_description?.trim(),p=o?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),m=o?.the_page_width?.data?.the_width?.trim(),g=o?.the_page_type?.data?.the_type?.trim(),h=o?.the_page_font_family?.data?.the_font_family?.trim(),w=o?.the_page_font_size?.data?.the_font_size?.trim(),y={title:s,slug:d,meta_title:c,meta_description:u,meta_keywords:p,width:m,type:g,font_family:h,font_size:w},T={};for(const[_,C]of Object.entries(y))C&&(T[_]=C);const E=o?.the_page_body?.id,b=await k(),v=await We(E,b?.token);let S=await ge(v?v.widgetId:E);const L=await this._pagesTSCCSService.savePage(T,b?.userId,b?.entityId);await f.copyPageWidget(L,`widget_${d}`,S),this.initPagesSidebar(),A.successfullToast("Page duplicated successfully")};setInputError(e,t){if(!e)return;e.style.borderColor="red";const a=e.closest(".slug-input-wrapper")||e,i=a.nextElementSibling;if(i?.classList?.contains("fs-input-error")){i.textContent=t;return}a.insertAdjacentHTML("afterend",`<p class="fs-input-error">${t}</p>`)}clearInputError(e){if(!e)return;e.style.borderColor="";const a=(e.closest(".slug-input-wrapper")||e).nextElementSibling;a?.classList?.contains("fs-input-error")&&a.remove()}async getAvailablePageSlug(e){let t=ue(e);t||(t="page-copy");let a=t,i=1;for(;!await this._pagesTSCCSService.checkSlugAvailablity(a);)a=`${t}-${i++}`;return a}}async function Zr(n){n?.preventDefault();const e=window.location.href,a=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(a))){await Vt("Do you want to save changes?")&&(e.includes("?page-id=")?a?await ya(n,Number(a)):await fa(n):a?await Sa(n,Number(a)):await Ta());const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}f.resetWidgetTree();const o=n.target.getAttribute("data-pageId");jt(`?page-id=${o}`);let r=await new tt().getPageById(Number(o));r?.error&&Ye();const l=document.getElementById("midContent"),d=document.getElementById("right-aside"),c={type:ha.page,data:r.data?.[`the_${I.PAGE_COMP_NAME}`],page_id:o},u=new Ui(c),p=new _n(c);d.innerHTML=await p.getHtml(),l.innerHTML="",u.mount(l),Es.resetNavigationBar()}class Ji{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new Re,this._pagesTsccsService=new tt}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(a=>{let o=a?.data?.[`the_${I.PROJECT_COMP_NAME}`]?.[`the_${I.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
            <li class="project-item">
              <router-link class="project_title" data-projectId="${a.id}">
                <span><img src="./images/icons/projects icon.svg" alt="" class="icon" /></span>
                ${o}
              </router-link>
              <span class="add-icon" title="Add Page" ><img src="./images/icons/add-page.svg" alt="add icon" class="icon" /></span>
              <!-- <span class="add-icon" title="Add Page" ><svg width="14" height="18" viewBox="0 0 14 18" fill="none" class="icon" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M1.69138 17H11.3707C11.7374 17 12.0891 16.8314 12.3485 16.5314C12.6078 16.2313 12.7535 15.8243 12.7535 15.4V5L9.29656 1H3.07414C2.70741 1 2.3557 1.16857 2.09638 1.46863C1.83706 1.76869 1.69138 2.17565 1.69138 2.6V5.8M8.60518 1V4.2C8.60518 4.62435 8.75086 5.03131 9.01018 5.33137C9.2695 5.63143 9.62121 5.8 9.98794 5.8H12.7535M1 11.4H5.14828M3.07414 9V13.8" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span> -->
              <!-- Three-Dot Dropdown Icon -->
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${a?.id})" title="Options"> more_vert </span>

              <!-- Dropdown Menu -->
              <ul class="dropdown-menu" id="dropdown-menu-${a?.id}">
                <li class="d-flex align-items-center justify-content-between" onclick="renameProjectModal(event, ${a?.id})">
                  <span >Rename</span>
                  <span class="material-symbols-outlined">edit </span>
                </li>
                <li class="delete-project d-flex align-items-center justify-content-between delete-icon" data-projectid="${a.id}">
                  <span >Delete</span>
                  <span class="material-symbols-outlined">delete </span>
                </li>
                <li class="d-flex align-items-center justify-content-between" onclick="downloadProject(${a?.id})">
                  <span>Download</span>
                  <span class="material-symbols-outlined">download </span>
                </li>
                <li class="d-flex align-items-center justify-content-between" onclick="showProjectSetting(${a?.id})">
                  <span>Settings</span>
                  <span class="material-symbols-outlined">settings </span>
                </li>
                <li class="d-flex align-items-center justify-content-between" onclick="window.open('${location.protocol}//preview-${a?.id}.${location.host}', '_blank')">
                  <span>Visit</span>
                  <span class="material-symbols-outlined">cards_star </span>
                </li>
              </ul>
              <! -- Project Pages List -->
              <ul class="project-pages-list d-none">
              </ul>
            </li>
          `}).join(""):`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No projects created yet!</p>
            </li>
          `}catch(e){return console.error("error",e),e?.status===401&&je(),`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">Sorry, couldn't connect to server.</p>
            </li>
          `}}async createProjectModal(){document.getElementById("create-project-dialog")?.remove();const t=document.createElement("dialog");return t.setAttribute("id","create-project-dialog"),t.classList.add("col-md-3"),t.innerHTML=`
      <h4>Create Project</h4>
      <form method="dialog" class="mt-3" id="create-project-form" onsubmit="createProjectHandler(event)">
        <div class="mb-3">
          <label for="projectName" class="form-label">Project name</label>
          <input type="text" class="form-control" autocomplete="project-name" name="name" id="projectName" value="" placeholder="e.g. first project">
        </div>
  
        <div class="text-end">
          <button class="btn btn-secondary" onclick="closeModal('create-project-dialog')" type="button">Cancel</button>
          <button type="submit" class="btn btn-info">Create</button>
        </div>
      </form>
    `,document.querySelector("body #app")?.appendChild(t),ce("create-project-dialog"),"Create Project Modal"}async renameProjectModal(e,t){document.getElementById("rename-project-dialog")?.remove();const i=document.createElement("dialog");return i.setAttribute("id","rename-project-dialog"),i.classList.add("col-md-3"),i.innerHTML=`
      <h4>Rename Project</h4>
      <form method="dialog" class="mt-3" id="rename-project-form" onsubmit="renameProjectHandler(event, ${t})">
        <div class="mb-3">
          <label for="projectName" class="form-label">Project name</label>
          <input type="text" class="form-control" autocomplete="project-name" name="name" id="projectName" value="" placeholder="e.g. first project">
        </div>
        <div class="text-end">
          <button class="btn btn-secondary" onclick="closeModal('rename-project-dialog')" type="button">Cancel</button>
          <button type="submit" class="btn btn-info">Rename</button>
        </div>
      </form>
    `,document.querySelector("body #app")?.appendChild(i),ce("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const t=await this._projectsService.getProjectById(e),a=t?.data?.the_project?.[`the_project_${se.PROJECT_PAGE_LINKER}`],i=t?.data?.the_project?.the_project_main_page?.[0]?.id;return a?.length?a?.map(s=>{let r=s?.data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const l=i==s.id,d=l?'<span class="material-symbols-outlined home-icon">home</span>':"",c=l?"":`<li class="d-flex align-items-center justify-content-between" 
              onclick="setMainPageHandler(event, ${s.id})" data-projectid="${e}">
                  <span class="px-2">Set as Main Page</span>
                  <span class="material-symbols-outlined">home</span>
                </li>`,u=Number(s.id)+Number(e);return`
            <li class="project-page-item" data-projectid="${e}">
              <router-link class="page_title" href="/?page-id=${s.id}" data-pageid="${s.id}" onclick="pageHandler(event)">
                <span class="material-symbols-outlined">description</span>
                ${r}
              </router-link>
              ${d}
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${u})" title="Options"> more_vert </span>
              <ul class="dropdown-menu" id="dropdown-menu-${u}">
                <li class="delete-project-page d-flex align-items-center justify-content-between delete-icon" 
                onclick="deletePageFromProjectHandler(event, ${s.id})">
                  <span class="px-2">Delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </li>
                ${c}
              </ul>
            </li>
          `}).join(""):`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No pages created yet!</p>
            </li>
          `}catch(t){return console.error("error",t),t?.status===401&&je(),`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">Sorry, couldn't connect to server.</p>
            </li>
          `}}async addPageToProjectHTML(e){try{document.getElementById("add-page-project-dialog")?.remove();const t=document.createElement("dialog");return t.id="add-page-project-dialog",t.innerHTML=`
        <div class="d-flex justify-content-between">
          <h5>Add Pages For ${e}</h5>
          <span class="material-symbols-outlined close-icon" onclick="closeModal('add-page-project-dialog')">close</span>
        </div>
        <div class="multi-select" id="multiSelect">
          <div class="selected-items" id="selectedItems"></div>
          <div class="options" id="options"></div>
        </div>
        <div class="modal-buttons d-flex justify-content-between p-2">
          <button id="submitSelection">Submit</button>
          <button id="closeModal" style="margin-left: 10px;">Close</button>
        </div>
      `,document.body.appendChild(t),t.showModal(),t}catch(t){return console.error("Error:",t),""}}}const wa=async n=>{let e="default",t={},a=null,i=null,o=null;if(n){let g=new M;g.typeConnection="the_project_environment",g.selectors=["the_environment_name","the_environment_value"];let h=new M;h.conceptIds=[n],h.freeschemaQueries=[g],h.outputFormat=le;let w=await ke(h,"");for(let y=0;y<w.length;y++){let T=w[y]?.data?.the_project;if(T){let b=T?.the_project_environment?.data?.the_environment;if(b){a=T?.the_project_environment?.id,e=b?.the_environment_name?.data?.the_name||"default",i=b?.the_environment_name?.id,o=b?.the_environment_value?.id;let v=b?.the_environment_value?.data?.the_environment_value;if(v)try{t=JSON.parse(v)}catch(S){console.error("Error parsing environment values",S),t={}}}}}}const s="environment-editor-modal";document.getElementById(s)?.remove();const l=document.createElement("dialog");l.setAttribute("id",s),l.classList.add("col-md-8"),l.style.maxWidth="800px",l.innerHTML=`
    <style>
      #${s} {
        border-radius: 8px;
        border: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      #environment-editor-container {
        min-height: 350px;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
      }
      .env-editor-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }
      .env-editor-actions {
        display: flex;
        gap: 10px;
        margin-top: 1rem;
        justify-content: flex-end;
      }
      .env-editor-hint {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 0.5rem;
      }
      .env-form-group {
        margin-bottom: 1rem;
      }
      .env-form-group label {
        display: block;
        font-weight: 500;
        margin-bottom: 0.25rem;
        font-size: 0.9rem;
      }
      .env-form-group input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 0.9rem;
      }
      .env-checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      .env-checkbox-group input[type="checkbox"] {
        width: auto;
      }
      .env-checkbox-group label {
        margin: 0;
        font-size: 0.9rem;
        cursor: pointer;
      }
    </style>
    <div style="padding: 1.5rem;">
      <div class="env-editor-header">
        <h4>Environment Variables Editor</h4>
        <a role="button" onclick="closeModal('${s}')">
          <img height="30px" src="https://boomconcole.com/freeschema/0c54fca0-ed0b-483c-90a0-344dfbe3ee8f.svg" />
        </a>
      </div>

      <div class="env-form-group">
        <label for="environment-name-input">Environment Name:</label>
        <input
          type="text"
          id="environment-name-input"
          placeholder="e.g., production, development, staging"
          value="${e}"
        />
      </div>

      ${n?`
      <div class="env-checkbox-group">
        <input type="checkbox" id="save-to-entity-checkbox" />
        <label for="save-to-entity-checkbox">Save to my entity (make it reusable across projects)</label>
      </div>
      `:`
      <div class="env-editor-hint" style="background-color: #e3f2fd; padding: 0.75rem; border-radius: 4px; margin-bottom: 1rem;">
        <strong>Note:</strong> This environment will be saved to your entity and will be available across all your projects.
      </div>
      `}

      <div class="env-editor-hint">
        Enter your environment variables as JSON key-value pairs:
      </div>

      <div id="environment-editor-container"></div>

      <div class="env-editor-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal('${s}')">Cancel</button>
        <button type="button" id="format-json-btn" class="btn btn-info">Format JSON</button>
        <button type="button" id="save-environment-btn" class="btn btn-primary">Save</button>
      </div>
    </div>
  `,document.querySelector("body #app")?.appendChild(l),await ce(s);const d=document.getElementById("environment-editor-container");if(!d)return;const c=la(g=>{const h=[],w=g.state.doc.toString();try{JSON.parse(w)}catch(y){const T=y,E=T.message.match(/position (\d+)/),b=E?parseInt(E[1]):0;h.push({from:Math.max(0,b-1),to:Math.min(w.length,b+1),severity:"error",message:T.message})}return h});let u=null;u=new ae({doc:JSON.stringify(t,null,2),extensions:[dt,ut,sn(),ra(),c,ae.lineWrapping,Ie.tabSize.of(2)],parent:d}),document.getElementById("format-json-btn")?.addEventListener("click",()=>{try{const g=u?.state.doc.toString()||"{}",h=JSON.parse(g),w=JSON.stringify(h,null,2);u?.dispatch({changes:{from:0,to:u.state.doc.length,insert:w}}),alert("JSON formatted successfully!")}catch(g){alert("Invalid JSON: "+g.message)}});const m=document.getElementById("save-environment-btn");m?.addEventListener("click",async()=>{try{m.disabled=!0,m.textContent="Saving...";const h=document.getElementById("environment-name-input")?.value?.trim()||"default";if(!h){alert("Environment name is required"),m.disabled=!1,m.textContent="Save";return}const w=document.getElementById("save-to-entity-checkbox"),y=n?w?.checked||!1:!0,T=u?.state.doc.toString()||"{}";let E;try{E=JSON.parse(T)}catch(C){alert("Invalid JSON: "+C.message),m.disabled=!1,m.textContent="Save";return}const b=await new It;await b.initialize();let v;a?(console.log("Editing existing environment:",a),v=await O(a),i&&await re(a,"the_environment_name"),o&&await re(a,"the_environment_value")):(console.log("Creating new environment"),v=await b.MakeTheInstanceConceptLocal("the_environment","",!0,999,4));const S=await b.MakeTheInstanceConceptLocal("the_name",h,!1,999,4),L=await b.MakeTheInstanceConceptLocal("the_environment_value",JSON.stringify(E),!1,999,4);if(await b.CreateConnection(v,S,"the_environment_name"),await b.CreateConnection(v,L,"the_environment_value"),n&&!a){const C=await O(n);await b.CreateConnection(C,v,"the_project_environment")}if(y)try{const x=(await k())?.entityId;if(x){const W=await O(x);await b.CreateConnection(W,v,"the_entity_s_environment"),console.log(`Environment saved to entity ${x}`)}else console.warn("Entity ID not found in profile data. Environment not saved to entity.")}catch(C){console.error("Error saving to entity:",C)}await b.commitTransaction();try{const{refreshEnvironmentDropdown:C}=await pe(async()=>{const{refreshEnvironmentDropdown:x}=await Promise.resolve().then(()=>Lo);return{refreshEnvironmentDropdown:x}},void 0);await C()}catch(C){console.log("Could not refresh environment dropdown:",C)}let _="Environment variables saved successfully!";n?y&&(_+=" (Also saved to your entity)"):_+=" (Saved to your entity)",alert(_),m.disabled=!1,m.textContent="Save",window.closeModal(s)}catch(g){console.error("Error saving environment:",g),alert("Failed to save environment variables: "+g),m.disabled=!1,m.textContent="Save"}})},Xr=async(n,e,t,a,i)=>{const o="environment-editor-modal";document.getElementById(o)?.remove();const r=document.createElement("dialog");r.setAttribute("id",o),r.classList.add("col-md-8"),r.style.maxWidth="800px",r.innerHTML=`
    <style>
      #${o} {
        border-radius: 8px;
        border: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      #environment-editor-container {
        min-height: 350px;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
      }
      .env-editor-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }
      .env-editor-actions {
        display: flex;
        gap: 10px;
        margin-top: 1rem;
        justify-content: flex-end;
      }
      .env-editor-hint {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 0.5rem;
      }
      .env-form-group {
        margin-bottom: 1rem;
      }
      .env-form-group label {
        display: block;
        font-weight: 500;
        margin-bottom: 0.25rem;
        font-size: 0.9rem;
      }
      .env-form-group input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 0.9rem;
      }
    </style>
    <div style="padding: 1.5rem;">
      <div class="env-editor-header">
        <h4>Edit Environment Variables</h4>
        <a role="button" onclick="closeModal('${o}')">
          <img height="30px" src="https://boomconcole.com/freeschema/0c54fca0-ed0b-483c-90a0-344dfbe3ee8f.svg" />
        </a>
      </div>

      <div class="env-form-group">
        <label for="environment-name-input">Environment Name:</label>
        <input
          type="text"
          id="environment-name-input"
          placeholder="e.g., production, development, staging"
          value="${n}"
        />
      </div>

      <div class="env-editor-hint" style="background-color: #fff3cd; padding: 0.75rem; border-radius: 4px; margin-bottom: 1rem; border-left: 4px solid #ffc107;">
        <strong>Note:</strong> Editing this environment will update it across all projects where it's used.
      </div>

      <div class="env-editor-hint">
        Edit your environment variables as JSON key-value pairs:
      </div>

      <div id="environment-editor-container"></div>

      <div class="env-editor-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal('${o}')">Cancel</button>
        <button type="button" id="format-json-btn" class="btn btn-info">Format JSON</button>
        <button type="button" id="save-environment-btn" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  `,document.querySelector("body #app")?.appendChild(r),await ce(o);const l=document.getElementById("environment-editor-container");if(!l)return;const d=la(m=>{const g=[],h=m.state.doc.toString();try{JSON.parse(h)}catch(w){const y=w,T=y.message.match(/position (\d+)/),E=T?parseInt(T[1]):0;g.push({from:Math.max(0,E-1),to:Math.min(h.length,E+1),severity:"error",message:y.message})}return g});let c=null;c=new ae({doc:JSON.stringify(e,null,2),extensions:[dt,ut,sn(),ra(),d,ae.lineWrapping,Ie.tabSize.of(2)],parent:l}),document.getElementById("format-json-btn")?.addEventListener("click",()=>{try{const m=c?.state.doc.toString()||"{}",g=JSON.parse(m),h=JSON.stringify(g,null,2);c?.dispatch({changes:{from:0,to:c.state.doc.length,insert:h}}),alert("JSON formatted successfully!")}catch(m){alert("Invalid JSON: "+m.message)}});const p=document.getElementById("save-environment-btn");p?.addEventListener("click",async()=>{try{p.disabled=!0,p.textContent="Saving...";const g=document.getElementById("environment-name-input")?.value?.trim()||"default";if(!g){alert("Environment name is required"),p.disabled=!1,p.textContent="Save Changes";return}const h=c?.state.doc.toString()||"{}";let w;try{w=JSON.parse(h)}catch(v){alert("Invalid JSON: "+v.message),p.disabled=!1,p.textContent="Save Changes";return}const y=await new It;await y.initialize();let T;t?(console.log("Editing existing environment:",t),T=await O(t),a&&await re(t,"the_environment_name"),i&&await re(t,"the_environment_value")):(console.log("Creating new environment"),T=await y.MakeTheInstanceConceptLocal("the_environment","",!0,999,4));const E=await y.MakeTheInstanceConceptLocal("the_name",g,!1,999,4),b=await y.MakeTheInstanceConceptLocal("the_environment_value",JSON.stringify(w),!1,999,4);if(await y.CreateConnection(T,E,"the_environment_name"),await y.CreateConnection(T,b,"the_environment_value"),!t){const S=(await k())?.entityId;if(S){const L=await O(S);await y.CreateConnection(L,T,"the_entity_s_environment")}}await y.commitTransaction();try{const{refreshEnvironmentDropdown:v,saveEnvironmentToStorage:S}=await pe(async()=>{const{refreshEnvironmentDropdown:L,saveEnvironmentToStorage:_}=await Promise.resolve().then(()=>Lo);return{refreshEnvironmentDropdown:L,saveEnvironmentToStorage:_}},void 0);if(await v(),t){const _=(window.__allEnvironments||[]).findIndex(C=>C.id===t);_!==-1&&(S(w,_),console.log(`Updated environment "${g}" in RAM and localStorage`))}}catch(v){console.log("Could not refresh environment dropdown:",v)}alert("Environment variables updated successfully!"),p.disabled=!1,p.textContent="Save Changes",window.closeModal(o)}catch(m){console.error("Error saving environment:",m),alert("Failed to save environment variables: "+m),p.disabled=!1,p.textContent="Save Changes"}})},el=Object.freeze(Object.defineProperty({__proto__:null,createEnvironmentEditor:wa,createEnvironmentEditorWithData:Xr},Symbol.toStringTag,{value:"Module"})),tl=["image/jpeg","image/jpg","image/png","image/webp"],nl=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],xt=async n=>{try{const e=new FormData;let t;if(nl.includes(n.type))e.append("file",n,n.name),t=await il(e);else if(tl.includes(n.type))e.append("image",n,n.name),t=await al(e);else return{message:"Invalid File Format",success:!1};return t?.data?{message:"Upload Success",success:!0,url:t.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},al=async(n,e="")=>{try{const t=await fetch(z.boomURL+"/api/Image/UploadImage",{method:"POST",body:n,headers:{Authorization:`Bearer ${e}`}});if(!t.ok){const a=t.headers.get("content-type");a&&a.includes("text/plain")&&console.info(t?.text());const i=await t?.text();return console.error(`${t.status} ${i}`),null}return await t.json()}catch(t){return console.error(t),null}},il=async(n,e="")=>{try{const t=await fetch(z.boomURL+"/api/Image/UploadFile",{method:"POST",body:n,headers:{Authorization:`Bearer ${e}`}});if(!t.ok){const a=t.headers.get("content-type");a&&a.includes("text/plain")&&console.info(t.text());const i=await t.text();return console.error(`${t.status} ${i}`),null}return await t.json()}catch(t){return console.error(t),null}},ol={logo:{displayWidth:480,displayHeight:480,outputWidth:480,outputHeight:480,title:"Adjust Logo"},favicon:{displayWidth:192,displayHeight:192,outputWidth:64,outputHeight:64,title:"Adjust Favicon"}};function Za(n,e){return new Promise((t,a)=>{const i=ol[e],o=new Image,s=URL.createObjectURL(n);o.onload=()=>{URL.revokeObjectURL(s),sl(o,n,i,t,a)},o.onerror=()=>{URL.revokeObjectURL(s),a(new Error("Failed to load image"))},o.src=s})}function sl(n,e,t,a,i){const o=Math.max(t.displayWidth/n.naturalWidth,t.displayHeight/n.naturalHeight);let s=o;const r=o*.5,l=o*8;let d=(t.displayWidth-n.naturalWidth*s)/2,c=(t.displayHeight-n.naturalHeight*s)/2;const u=document.createElement("div");u.style.cssText=`
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.75);
        display: flex; align-items: center; justify-content: center;
    `;const p=document.createElement("div");p.style.cssText=`
        background: #fff; border-radius: 8px; padding: 20px;
        display: flex; flex-direction: column; align-items: center; gap: 14px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        user-select: none;
    `;const m=document.createElement("h5");m.textContent=t.title,m.style.cssText="margin: 0; font-size: 15px; font-weight: 600; align-self: flex-start;";const g=document.createElement("p");g.textContent="Drag to reposition · Scroll or use slider to zoom",g.style.cssText="margin: 0; font-size: 11px; color: #888; align-self: flex-start;";const h=document.createElement("canvas");h.width=t.displayWidth,h.height=t.displayHeight,h.style.cssText=`
        border: 2px solid #ddd; border-radius: 4px;
        cursor: grab; display: block;
        max-width: 90vw;
    `;const w=document.createElement("div");w.style.cssText="display: flex; align-items: center; gap: 8px; width: 100%;";const y=document.createElement("span");y.textContent="Zoom",y.style.cssText="font-size: 12px; color: #555; min-width: 36px;";const T=document.createElement("input");T.type="range",T.min=String(r*100),T.max=String(l*100),T.step="1",T.value=String(s*100),T.style.cssText="flex: 1;",w.append(y,T);const E=document.createElement("div");E.style.cssText="display: flex; gap: 10px; align-self: flex-end;";const b=document.createElement("button");b.textContent="Cancel",b.className="btn btn-sm btn-outline-secondary";const v=document.createElement("button");v.textContent="Apply",v.className="btn btn-sm btn-info",E.append(b,v),p.append(m,g,h,w,E),u.appendChild(p),(document.getElementById("project-setting-dialog")||document.body).appendChild(u);const L=h.getContext("2d");function _(){L.clearRect(0,0,t.displayWidth,t.displayHeight),rl(L,t.displayWidth,t.displayHeight),L.drawImage(n,d,c,n.naturalWidth*s,n.naturalHeight*s),L.save(),L.strokeStyle="rgba(255,255,255,0.9)",L.lineWidth=2,L.setLineDash([6,4]),L.strokeRect(1,1,t.displayWidth-2,t.displayHeight-2),L.restore()}_();let C=!1,x=0,W=0,P=0,B=0;h.addEventListener("mousedown",j=>{C=!0,x=j.clientX,W=j.clientY,P=d,B=c,h.style.cursor="grabbing"}),window.addEventListener("mousemove",j=>{C&&(d=P+(j.clientX-x),c=B+(j.clientY-W),_())}),window.addEventListener("mouseup",()=>{C&&(C=!1,h.style.cursor="grab")}),h.addEventListener("touchstart",j=>{const K=j.touches[0];C=!0,x=K.clientX,W=K.clientY,P=d,B=c,j.preventDefault()},{passive:!1}),h.addEventListener("touchmove",j=>{if(!C)return;const K=j.touches[0];d=P+(K.clientX-x),c=B+(K.clientY-W),_(),j.preventDefault()},{passive:!1}),h.addEventListener("touchend",()=>{C=!1}),h.addEventListener("wheel",j=>{j.preventDefault();const K=j.deltaY>0?-.05:.05;q(s+K*s)},{passive:!1}),T.addEventListener("input",()=>{q(Number(T.value)/100)});function q(j){j=Math.max(r,Math.min(l,j));const K=t.displayWidth/2,oe=t.displayHeight/2;d=K-(K-d)*(j/s),c=oe-(oe-c)*(j/s),s=j,T.value=String(s*100),_()}b.addEventListener("click",()=>{D(),i()}),u.addEventListener("click",j=>{j.target===u&&(D(),i())}),v.addEventListener("click",()=>{const j=document.createElement("canvas");j.width=t.outputWidth,j.height=t.outputHeight;const K=j.getContext("2d");t.outputWidth/t.displayWidth,t.outputHeight/t.displayHeight,K.drawImage(n,-d/s,-c/s,t.displayWidth/s,t.displayHeight/s,0,0,t.outputWidth,t.outputHeight),j.toBlob(oe=>{if(D(),!oe){i();return}const J=e.name.replace(/\.[^.]+$/,"")+"-adjusted.png";a(new File([oe],J,{type:"image/png"}))},"image/png")});function D(){window.removeEventListener("mousemove",()=>{}),window.removeEventListener("mouseup",()=>{}),u.remove()}}function rl(n,e,t,a=10){const i="#e0e0e0",o="#c8c8c8";for(let s=0;s<t;s+=a)for(let r=0;r<e;r+=a)n.fillStyle=(r/a+s/a)%2===0?i:o,n.fillRect(r,s,a,a)}async function ll(n){const[e,t]=await Promise.all([st(n,"the_project_logo"),st(n,"the_project_favicon")]);return{logoUrl:e?.[0]?.data?.the_logo||"",faviconUrl:t?.[0]?.data?.the_favicon||""}}async function cl(n,e){await new Re().updateProjectField("logo",e,n)}async function dl(n,e){await new Re().updateProjectField("favicon",e,n)}function ul(n,e,t){let a=e,i=t;const o=document.getElementById("logo-file-input"),s=document.getElementById("logo-preview"),r=document.getElementById("logo-file-name"),l=document.getElementById("favicon-file-input"),d=document.getElementById("favicon-preview"),c=document.getElementById("favicon-file-name");o?.addEventListener("change",async p=>{const m=p.target.files?.[0];if(!m)return;let g;try{g=await Za(m,"logo")}catch{o.value="";return}r&&(r.textContent=g.name);const h=await xt(g);h.success&&h.url&&(a=h.url,s&&(s.src=a,s.style.display="block"))}),l?.addEventListener("change",async p=>{const m=p.target.files?.[0];if(!m)return;let g;try{g=await Za(m,"favicon")}catch{l.value="";return}c&&(c.textContent=g.name);const h=await xt(g);h.success&&h.url&&(i=h.url,d&&(d.src=i,d.style.display="block"))});const u=document.getElementById("save-logos-btn");u?.addEventListener("click",async()=>{if(!a&&!i){alert("Please upload a logo or favicon first");return}u.disabled=!0,u.textContent="Saving...",await Promise.all([a?cl(n,a):Promise.resolve(),i?dl(n,i):Promise.resolve()]),await N.SyncDataOnline(),u.disabled=!1,u.textContent="Save",alert("Logo & Favicon saved")})}function ml(n,e=[],t=[],a="",i="",o="",s=""){return`
  <style>
  .accordion-header {
  background: gray;
  color: white;
  padding: 1rem;
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1.1rem;
  cursor: pointer;
}

.accordion-content {
  display: none;
  overflow: hidden;
  background: #f1f1f1;
  transition: max-height 0.3s ease-out;
  padding: 0 1rem;
}

.accordion-content p {
  margin: 1rem 0;
}

.accordion-header.active + .accordion-content {
  display: block;
//   max-height: 100px; /* adjust as needed */
}

// drag drop css
.accordion-content li {
cursor: move;
}
.drag-over {
  border: 2px dashed #007bff;
}

.custom-menu-item {
    display: flex;
    align-items: start;
    gap: 5px;
    margin: 20px 0px;
}

/* Logo & Favicon section */
.lf-section {
  padding: 20px 0;
}
.lf-intro {
  margin-bottom: 16px;
  color: #555;
}
.lf-cards {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
}
.lf-card {
  flex: 1;
  min-width: 200px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 16px;
  background: #fff;
}
.lf-card-title {
  margin: 0 0 12px 0;
}
.lf-preview-box {
  border: 1px dashed #aaa;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background: #fafafa;
  overflow: hidden;
}
.lf-preview-box--logo {
  width: 120px;
  height: 120px;
}
.lf-preview-box--favicon {
  width: 64px;
  height: 64px;
}
.lf-preview-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.lf-file-input {
  display: none;
}
.lf-file-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.lf-file-name {
  font-size: 12px;
  color: #666;
}
.lf-hint {
  font-size: 11px;
  color: #999;
  margin: 8px 0 0 0;
}
.lf-save-row {
  margin-top: 16px;
}

  </style>
  <div style="display: flex; align-items-center; justify-content: space-between; gap: 10px">
    <h4>Project Setting</h4>
    <a role="button" onclick="closeModal('project-setting-dialog')"><img height="30px" src="https://boomconcole.com/freeschema/0c54fca0-ed0b-483c-90a0-344dfbe3ee8f.svg" /></a>
  </div>

  <div>
    <div class="accordion">
        <div class="accordion-item">
            <button class="accordion-header active">Menu</button>
            <div class="accordion-content">
                <div style="display: flex; align-items: start; flex-direction: row; gap: 20px; padding: 20px 0px; overflow-y: auto;">
                    <div>
                        <h4 style="margin-bottom: 20px">Pages</h4>
                        <div>
                            ${e?.map(r=>`
                                <div style="display: flex; align-items: start; gap: 8px; margin-bottom: 5px;">
                                    <input type="checkbox" class="selected-menu-page" data-page-id="${r.id}" ${t.find(l=>Number(l.page)==r.id)?" checked ":""} />
                                    <div>
                                        <p style="margin: 0px; line-height: 16px;">${r.name}</p>
                                        <p style="margin: 0px; line-height: 12px; color: gray;"><span style="font-size: 12px">${r.slug}</span></p>
                                    </div>
                                </div>
                                `).join("")}
                            <!-- <div>
                                <a role="button" class="btn btn-sm btn-primary" style="margin-top: 10px;" id="add-custom-menu-item">Add Custom Menu</a>
                            </div> -->
                        </div>
                    </div>

                    <div style="flex: 1">
                        <h4>Menus</h4>
                        <div id="menu-items"></div>
                        <div class="custom-menu-item">
                            <input class="form-control form-control-sm" id="nameElem" required placeholder="Name" />
                            <input class="form-control form-control-sm" id="linkElem" placeholder="/link" />
                            <textarea class="form-control form-control-sm" rows="1" id="actionElem" placeholder="Action"></textarea>
                            <div style="display: flex; align-items: center; justify-content: center; gap: 5px">
                                <input id="authElem" class="form-check-input" type="checkbox" />
                                <label class="form-check-label">Auth</label>
                            </div>
                            <button class="btn btn-primary" id="add-custom-menu-item">Add</button>
                        </div>

                        <div class="text-end">
                            <button type="button" id="save-menu-items" class="btn btn-info">Save Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
          <button id="domain-viewer-btn" class="accordion-header">Domain</button>
          <div class="accordion-content">
            <div style="padding: 20px 0px;">

              <p>Website Url:
                <a href="https://preview-${n}.develop.freeschema.com">
                  <b><i>https://preview-${n}.develop.freeschema.com</i></b>
                </a>
              </p>
              <p>To Add a custom domain assign A record for your domain ==>  A record (107.209.91.179) and in txt record add the link with @ in hostname and value <a href="preview-${n}.develop.freeschema.com">preview-${n}.develop.freeschema.com</a>
              <div id="custom-domain-view-holder">
              </div>
            </div>

          </div>
        </div>
        <div class="accordion-item">
          <button id="environment-viewer-btn" class="accordion-header">Environment Variables</button>
          <div class="accordion-content">
            <div style="padding: 20px 0px;">
              <p>Configure environment variables for your project. These values will be available globally in your application.</p>
              <button type="button" class="btn btn-primary" id="open-environment-editor-btn">
                Edit Environment Variables
              </button>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button id="logo-viewer-btn" class="accordion-header">Logo & Favicon</button>
          <div class="accordion-content">
            <div class="lf-section">
              <p class="lf-intro">Upload your project logo and favicon. These will appear in the browser tab and site header.</p>
              <div class="lf-cards">

                <!-- Logo Upload -->
                <div class="lf-card">
                  <h5 class="lf-card-title">Logo</h5>
                  <div class="lf-preview-box lf-preview-box--logo">
                    <img id="logo-preview" src="${a}" alt="Logo preview"
                      class="lf-preview-img" style="${a?"":"display:none"}" />
                  </div>
                  <input type="file" id="logo-file-input" class="lf-file-input" accept="image/jpeg,image/jpg,image/png,image/webp" />
                  <div class="lf-file-row">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="document.getElementById('logo-file-input').click()">Choose File</button>
                    <span id="logo-file-name" class="lf-file-name">${a?"Current logo set":"No file chosen"}</span>
                  </div>
                  <p class="lf-hint">Recommended: PNG/WebP, transparent background. After selecting, you can adjust position &amp; zoom.</p>
                </div>

                <!-- Favicon Upload -->
                <div class="lf-card">
                  <h5 class="lf-card-title">Favicon</h5>
                  <div class="lf-preview-box lf-preview-box--favicon">
                    <img id="favicon-preview" src="${i}" alt="Favicon preview"
                      class="lf-preview-img" style="${i?"":"display:none"}" />
                  </div>
                  <input type="file" id="favicon-file-input" class="lf-file-input" accept="image/jpeg,image/jpg,image/png,image/webp" />
                  <div class="lf-file-row">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="document.getElementById('favicon-file-input').click()">Choose File</button>
                    <span id="favicon-file-name" class="lf-file-name">${i?"Current favicon set":"No file chosen"}</span>
                  </div>
                  <p class="lf-hint">Recommended: PNG/WebP, 32×32px square. After selecting, you can adjust position &amp; zoom.</p>
                </div>

              </div>
              <div class="text-end lf-save-row">
                <button type="button" id="save-logos-btn" class="btn btn-info">Save</button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button id="robots-viewer-btn" class="accordion-header">Robots.txt</button>
          <div class="accordion-content">
            <div style="padding: 20px 0px;">
              <p>Upload your <code>robots.txt</code> file. This controls search engine crawling for your project.</p>
              <div class="lf-file-row">
                <input type="file" id="robots-file-input" class="lf-file-input" accept=".txt,text/plain" />
                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="document.getElementById('robots-file-input').click()">Choose File</button>
                <span id="robots-file-name" class="lf-file-name">${o?"Current robots.txt set":"No file chosen"}</span>
              </div>
              <p class="lf-hint" style="margin-top: 8px;">
                Current:
                <a id="robots-current-link" href="${o}" target="_blank" style="${o?"":"display:none"}">View robots.txt</a>
                <span id="robots-no-file" style="${o?"display:none":""}">No file uploaded</span>
              </p>
              <div class="text-end lf-save-row">
                <button type="button" id="save-robots-btn" class="btn btn-info">Save</button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button id="sitemap-viewer-btn" class="accordion-header">Sitemap</button>
          <div class="accordion-content">
            <div style="padding: 20px 0px;">
              <p>Enter your sitemap content below. This will be served as your project's sitemap.</p>
              <textarea
                id="sitemap-textarea"
                class="form-control"
                rows="12"
                placeholder="Paste or type your sitemap XML / text here..."
                style="font-family: monospace; font-size: 13px; resize: vertical;"
              >${s}</textarea>
              <div class="text-end lf-save-row">
                <button type="button" id="save-sitemap-btn" class="btn btn-info">Save</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

    `}async function pl(n){return{robotsUrl:(await st(n,"the_project_robots"))?.[0]?.data?.the_robots||""}}async function gl(n,e){await new Re().updateProjectField("robots",e,n),await N.SyncDataOnline()}function hl(n,e){let t=e;const a=document.getElementById("robots-file-input"),i=document.getElementById("robots-file-name"),o=document.getElementById("robots-current-link"),s=document.getElementById("robots-no-file"),r=document.getElementById("save-robots-btn");a?.addEventListener("change",async l=>{const d=l.target.files?.[0];if(!d)return;if(d.type!=="text/plain"&&!d.name.endsWith(".txt")){alert("Only .txt files are accepted for robots.txt"),a.value="";return}i&&(i.textContent=d.name);const c=await xt(d);c.success&&c.url&&(t=c.url,o&&(o.href=t,o.style.display=""),s&&(s.style.display="none"))}),r?.addEventListener("click",async()=>{if(!t){alert("Please upload a robots.txt file first");return}r.disabled=!0,r.textContent="Saving...",await gl(n,t),r.disabled=!1,r.textContent="Save",alert("Robots.txt saved")})}async function fl(n){return{sitemapContent:(await st(n,"the_project_sitemap"))?.[0]?.data?.the_sitemap||""}}async function yl(n,e){await new Re().updateProjectField("sitemap",e,n),await N.SyncDataOnline()}function vl(n,e){const t=document.getElementById("sitemap-textarea"),a=document.getElementById("save-sitemap-btn");t&&e&&(t.value=e),a?.addEventListener("click",async()=>{const i=t?.value?.trim();if(!i){alert("Sitemap content cannot be empty");return}a.disabled=!0,a.textContent="Saving...",await yl(n,i),a.disabled=!1,a.textContent="Save",alert("Sitemap saved")})}const wl=async n=>{if(!n){console.log("Project id is required");return}const e=new Re;let[t,a,i,o,s]=await Promise.all([e.getProjectById(n),hi(n),ll(n),pl(n),fl(n)]);console.log("project detail",t),console.log("abc menus ",a);const r=t?.data?.the_project?.the_project_main_page?.[0]?.id??0,l=t?.data?.the_project?.the_project_s_page?.map(m=>({id:m.id,name:m?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:m?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:m?.id==r}))??[];console.log("pages",l),document.getElementById("project-setting-dialog")?.remove();const c=document.createElement("dialog");c.setAttribute("id","project-setting-dialog"),c.classList.add("col-md-8"),c.style.flexDirection="column",c.innerHTML=ml(n,l,a,i.logoUrl,i.faviconUrl,o.robotsUrl,s.sitemapContent),document.querySelector("body #app")?.appendChild(c),await ce("project-setting-dialog"),ul(n,i.logoUrl,i.faviconUrl),hl(n,o.robotsUrl),vl(n,s.sitemapContent),document.querySelectorAll(".accordion-header").forEach(m=>{m.addEventListener("click",async()=>{m.classList.toggle("active");const g=m.getAttribute("id");if(m.classList.contains("active"))switch(g){case"domain-viewer-btn":const h=document.getElementById("custom-domain-view-holder"),w=await st(n,"the_project_custom_url");h&&Ne(102462726,h,{projectId:n,storeUrl:`https://preview-${n}.develop.freeschema.com`,customUrl:w?.[0]?.data?.the_custom_url||""});break}else switch(g){case"domain-viewer-btn":const h=document.getElementById("custom-domain-view-holder");h&&(h.innerHTML="");break}})}),ht(a);const u=document.getElementById("save-menu-items");u?.addEventListener("click",async m=>{u&&(u.disabled=!0),console.log("menus save",a),a=a.map(h=>(delete h.edit,h)),console.log("menus filtered save",a),m.target.disable=!0;const g=await Xo(n,a);console.log("menu created",g),m.target.disable=!1,ht(a),alert("Updated Menu"),u&&(u.disabled=!1),Gi(n)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",m=>{const g=m.target.closest(".custom-menu-item"),h=g?.querySelector("#nameElem"),w=g?.querySelector("#linkElem"),y=g?.querySelector("#actionElem"),T=g?.querySelector("#authElem");if(!h.value){alert("Menu Name is required");return}if(!w.value&&!y.value){alert("Link or Action is required");return}a.push({name:h.value??"",link:w.value??"",action:y.value??"",page:"",order:a.length,auth:!!T.checked,menus:[]}),h.value="",w.value="",y.value="",T.checked=!1,ht(a)}),window.handleMenuAction=(m,g,h,w)=>{if(g=="remove")if(w){const y=document.getElementsByClassName("selected-menu-page");for(let T=0;T<y.length;T++){const E=y[T];Number(E.getAttribute("data-page-id"))==w&&E?.checked&&E.click()}}else a.splice(h,1)[0];else if(g=="edit")a[h].edit=!0;else if(g=="cancel")a[h].edit=!1;else if(g=="update"){a[h].edit=!1;const y=m?.target?.closest("li"),T=y?.querySelector("#menuName").value??"",E=y?.querySelector("#menuLink").value??"",b=y?.querySelector("#menuAction").value??"",v=!!y?.querySelector("#menuAuth").checked;a[h].name=T,a[h].link=E,a[h].action=b,a[h].auth=v}else if(g=="up"){const y=a.splice(h,1)[0];a.splice(h-1,0,y),a=a.map((T,E)=>({...T,order:E}))}else if(g=="down"){const y=a.splice(h,1)[0];a.splice(h+1,0,y),a=a.map((T,E)=>({...T,order:E}))}else console.warn("unacceptable action ",g);ht(a)},document.querySelectorAll(".selected-menu-page").forEach(m=>{m.addEventListener("change",g=>{console.log("e.target.changed",g.currentTarget.checked);const h=parseInt(g.currentTarget.getAttribute("data-page-id"));if(g.currentTarget.checked){const w=l.find(y=>y.id==h);console.log("pages",w,l),a.push({name:w.name??"",link:w.slug??"",action:"",page:w.id??"",order:a.length,auth:!1,menus:[]})}else{const w=(y,T)=>{for(let E=0;E<y.length;E++){const b=y[E];b.menus&&b.menus.length>0&&(b.menus=w(b.menus,T))}return y.filter(E=>E.page!=T)};a=w(a,h)}ht(a)})}),document.getElementById("open-environment-editor-btn")?.addEventListener("click",()=>{wa(n)})},Gi=n=>{const e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");const t=new URLSearchParams;t.append("invalidDomain","www.sleepinghats.com"),t.append("projectId",`${n}`);const a={method:"POST",headers:e,body:t,redirect:"follow"};fetch(`${z.deployURL}/api/project-deploy/invalidate`,a).then(i=>i.text()).then(i=>console.log("result -->",i)).catch(i=>console.error(i))};class Yi{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new Ji,this._projectsTSCCSService=new Re,this._pagesTSCCSService=new tt}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),t=document.getElementById("saved-project-list-container");t&&(t.innerHTML="",t.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-project-button");a?.removeEventListener("click",this.createProjectHandler),a?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(r=>{r.removeEventListener("click",this.getProjectPagesListHandler),r.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(r=>{r.removeEventListener("click",this.addPageToProjectHandler),r.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(r=>{r.removeEventListener("click",this.deleteProjectHandler),r.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=Or,window.showProjectSetting=wl,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{Yt({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,t)=>{try{const o=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",o,t),await N.SyncDataOnline(),this.initProjectsSidebar()}catch(a){console.error("Failed to rename project:",a)}};getProjectPagesListHandler=async e=>{const t=e.target.dataset.projectid,a=e.target.parentElement.querySelector(".project-pages-list");if(a){if(!a.classList.contains("d-none")){a.classList.add("d-none");return}a.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,a.classList.remove("d-none");const i=await this._projectsHTMLService.getProjectPagesListHTML(t);a.innerHTML=i}};deleteProjectHandler=async e=>{try{let t=e.target.dataset.projectid;t||(t=e.target.parentElement.dataset.projectid),await Vt("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(t),await N.SyncDataOnline(),A.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(t){console.error("Failed to delete project:",t),A.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,t)=>{try{let a=e.target.parentElement.parentElement.dataset.projectid;await Vt("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(a,t),await N.SyncDataOnline(),this.initProjectsSidebar())}catch(a){console.error("Failed to delete page from project:",a)}};setMainPageHandler=async(e,t)=>{e.preventDefault(),e.stopPropagation();try{let a=e.target.closest(".project-page-item").dataset.projectid;A.infoMessageToast("Setting page as main page...",0);const i=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(a,t),await N.SyncDataOnline();const o=await this._projectsHTMLService.getProjectPagesListHTML(a),s=e.target.closest(".project-pages-list");s&&(s.innerHTML=o,s.classList.remove("d-none")),i?.remove(),A.successfullToast("Main page set successfully!")}catch(a){console.error("Failed to set main page:",a),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),Yt({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const t=e.target.previousElementSibling.dataset.projectid,i=(await this._projectsTSCCSService.getProjectById(t))?.data?.the_project?.[`the_project_${se.PROJECT_PAGE_LINKER}`];let o=i?i.map(r=>({id:r.id,title:r?.data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const s=document.getElementById("add-pages-project");await this.addPageToProject(s,!1,t,o)}catch(t){console.error("Failed to add page to project:",t)}};addPageToProject=async(e,t,a,i=[])=>{try{const o=await this._pagesTSCCSService.getAllPages(),s=o?o.map(m=>({id:m.id,title:m?.data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const r=e.querySelector("#selectedItems"),l=e.querySelector("#options"),d=(m="")=>{if(!s.length){l.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let g=s.filter(h=>h.title.toLowerCase().includes(m.toLowerCase()));c(),l.innerHTML=g.length?g.map(h=>`
            <li class="option" data-value="${h.id}">
              <input type="checkbox" id="page-${h.id}" ${i?.some(w=>w.id.toString()===h.id.toString())?"checked":""} />
              <span>${h.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},c=()=>{i&&i.length?r.innerHTML=i.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):r.innerHTML="<span>No pages selected!</span>"},u=(m,g)=>{i.push({id:m,title:g}),c()},p=m=>{i=i.filter(g=>g.id.toString()!==m.toString()),c()};r.addEventListener("click",m=>{const g=m.target;if(g.classList.contains("remove-item")){const h=g.closest(".selected-page");h&&p(h.dataset.value)}}),l.addEventListener("click",m=>{const g=m.target.closest(".option");if(!g)return;const h=g.querySelector("input[type='checkbox']");h&&(m.target!==h&&(h.checked=!h.checked),h.checked?u(g.dataset.value,g.querySelector("span").textContent.trim()):p(g.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(t&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){A.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),g=e.querySelector("#closeModal");m.disabled=!0,g.disabled=!0;const h=m.textContent;m.textContent="Adding...",A.infoMessageToast("Adding pages to project...",0);try{const w=i.map(v=>Number(v.id));if(!w.length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,g.disabled=!1,m.textContent=h;return}if(t){this.addPageToProjectHandler();const S=document.getElementById("create-project-form").elements,L=qn(S),_=await k(),C=await this._projectsTSCCSService.createProject(L,_?.userId,_?.entityId);await N.SyncDataOnline(),a=(await Z(C.ghostId)).id}if(!a){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Project ID not found."),m.disabled=!1,g.disabled=!1,m.textContent=h;return}await this._projectsTSCCSService.addPagesToProject(a,w);const y=await this._projectsHTMLService.getProjectPagesListHTML(a),E=document.getElementById(`dropdown-menu-${a}`)?.nextElementSibling;E&&(E.innerHTML=y,E.classList.remove("d-none")),Gi(a),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to add pages to prjects"),m.disabled=!1,g.disabled=!1,g.textContent=h}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const g=m.target;d(g.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{d()}),c()}catch(o){console.error("Failed to add page to project:",o)}}}const Bt=(()=>{const n=()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})};return{toggle:s=>{const r=s.target,l=r?.dataset?.id;if(r.classList.contains("activeNavigationIcon")){n();return}if(l){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const u=document.getElementById(l);document.querySelector(`[data-id='${l}']`)?.classList.add("activeNavigationIcon"),u?.classList.add("navActive"),l=="fs-all-pages-list"&&new va().initPagesSidebar(),l=="fs-all-projects-list"&&new Yi().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})},checkForActiveNavigation:()=>{const s=document.querySelector(".activeNavigationIcon");if(s){const r=s.dataset?.id||"";document.getElementById(r)?.classList.remove("navActive")}},resetNavigationBar:n,disableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="none",s.style.pointerEvents="none",s.style.opacity="0"},enableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="block",s.style.pointerEvents="all",s.style.opacity="1"}}})(),Ge=(()=>{const n=()=>{const i=document.querySelector("#profileDropdown");if(i.style.display&&i.style.display=="block"){e();return}i?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:n,closeUserActionModel:e,disableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="none",i.style.pointerEvents="none",i.style.opacity="0"},enableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="flex",i.style.pointerEvents="all",i.style.opacity="1"}}})(),A=(()=>{let n=0;const e=()=>{const l=document.createElement("span");return l.innerText="close",l.classList.add("material-symbols-outlined"),l.classList.add("crossButtonToast"),l.addEventListener("click",d=>{d.target instanceof HTMLElement&&d.target.parentNode instanceof HTMLElement&&console.log(d.target.parentNode.remove())}),l},t=l=>{const d=document.querySelector("#toasterContainer");d.style.display="flex";const c=document.createElement("div");c.classList.add("successFullToast");const u=document.createElement("span");u.classList.add("material-symbols-outlined"),u.innerText="check_circle";const p=document.createElement("span");p.innerText=l,c.appendChild(u),c.appendChild(p),c.appendChild(e()),d.appendChild(c),n=n+.5,o(c)},a=(l,d=1)=>{n=0;const c=document.querySelector("#toasterContainer");c.style.display="flex";const u=document.createElement("div");u.classList.add("infoMessageToast","bg-info");const p=document.createElement("span");p.classList.add("material-symbols-outlined"),p.innerText="info";const m=document.createElement("span");m.innerText=l,u.appendChild(p),u.appendChild(m),u.appendChild(e()),c.appendChild(u),d!=0&&(n=n+.5+(d||0),o(u))},i=(l,d)=>{n=0;const c=document.querySelector("#toasterContainer");c.style.display="flex";const u=document.createElement("div");u.classList.add("failureToast");const p=document.createElement("span");p.classList.add("material-symbols-outlined"),p.innerText="error";const m=document.createElement("span");m.innerText=l,u.appendChild(p),u.appendChild(m),u.appendChild(e()),c.appendChild(u),n=n+.5+(d||0),o(u)},o=l=>{l.style.animation=`animateToastMessage ${2+n}s forwards`,l.addEventListener("animationend",()=>{l.remove();const d=document.querySelector("#toasterContainer");d.innerHTML||(n=0,d.style.display="none")}),l.addEventListener("mouseenter",()=>{s()}),l.addEventListener("mouseleave",()=>{r()})},s=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="paused"})},r=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="running"})};return{successfullToast:t,infoMessageToast:a,errorToast:i}})();async function Ue(){const n=await k(),e=n?.entityId,t=n?.token,a=n?.userId,i=n?.userConcept,s=(await Z(e)).typeCharacter;let r=!1,l;const d=new M;d.conceptIds=[e],d.selectors=["the_entity_user"],d.outputFormat=le,d.inpage=100,await _e(d,t)?.subscribe(p=>{l=p});const c=l?.[0]?.data?.the_entity?.the_entity_user?.id;if(Number(c)===Number(i)&&(r=(await Z(i))?.userId===a),!r||!s||s!=="the_entity"||!t||t.trim()===""||!a)throw setTimeout(()=>je(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function bl(n){try{const e=await qe(n,"the_entity_s_widget",!0);e.length?await He(e[0].id):A.errorToast("already deleted")}catch(e){console.error(e)}}async function ba(n,e="Error"){console.error(n);const t=n;t&&(A.errorToast(t?.message?t.message:e),t.status===401&&je())}let Ee=[],$e=ca;async function _a(n){const e=document.getElementById("selected_attr_list"),t=document.querySelector(".row.attribute_single");Ee=[],$e=ca,e&&(e.innerHTML=""),t?.remove(),await Ce(n),n==="update-element-dialog"&&document.getElementById(n)?.remove()}async function wd(n,e){if(n.preventDefault(),!(await xe.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(n.target),i=Object.fromEntries(a),o=n.target.querySelector("[name='name']"),s=n.target.querySelector("[name='tag']");let r=!0;if(i?.name?.trim()?o.style.border="":(r=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),i?.tag?.trim()?s.style.border="":(r=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),!r)return;const d=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');d.textContent="Creating...";const c=n?.target;for(let m=0,g=c?.length;m<g;++m)c[m].disabled=!0;const u=await Qi(a,null);for(let m=0,g=c?.length;m<g;++m)c[m].disabled=!1;await Ce(e);const p=await bn();if(u){const m=document.getElementById("created-elements");m?!p||p.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=p||"":console.error("Widget list container not found in the DOM.")}return u}async function Qi(n,e){const t=Object.fromEntries(n);delete t.attributes;const i=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let o=[];if(i.forEach(s=>{const r=s?.textContent?.split(" "),l=r[0],d=r[1].substr(1,r[1].length-7);let c="";switch(l){case"method":c="get,post,dialog";break;case"target":c="_blank,_self,_parent,_top";break;case"type":t?.tag==="button"?c="button,submit,reset":t?.tag==="input"&&(c="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":c="soft,hard";break}o.push({name:l,type:d,value:c})}),o=[...On,...o],e){const s=await Ia(e),r=s?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,l=new Set(On.map(m=>m.name)),d=s?.attributes?.filter(m=>m?.division!=="inline"&&!l.has(m?.name)&&m?.name!=="elementContent"),c=new Set(Ee.map(m=>m.name)),u=d?.filter(m=>!c.has(m?.name));if(u?.length){const m=await Promise.all(u?.map(async g=>await Me(g?.id)));console.log("deletedResponse ->",m)}let p=[{the_element_name:{name:t?.name}},{the_element_tag:{tag:t?.tag}},{the_element_void:{void:t?.void}},{the_element_icon:{icon:t?.icon.toString()}},{the_element_default:{default:t?.default}},{the_element_division:{division:t?.division}},{the_element_s_attribute:Ee}];return await Promise.all(p.map(async m=>await Promise.all(Object.entries(m).map(async([g,h])=>{const w=Object.keys(h)[0],y=h[w]||"";if(g==="the_element_s_attribute"){const T=await O(e);if(h?.length){const E=h.filter(b=>!b?.id);await Promise.all(E.map(async b=>{const v=await V("attribute",999,b);return await F(T,v,"s_attribute")}))}}else await rt(e,g,w,y,999);if(g==="the_element_default"&&w==="default"&&r){const E=(await k())?.userId;await rt(r,"the_attribute_value","value",y,E)}return"x"})))),await N.SyncDataOnline(),A.successfullToast("The element updated successfully"),e}else{const s=o;t?.void&&s.unshift({name:"elementContent",type:"string",value:""});const r=await V("element",999,t);return await Promise.all(s.map(async l=>{const d=await V("attribute",999,l);return await F(r,d,"s_attribute")})),await N.SyncDataOnline(),A.successfullToast("The element created successfully"),r}}function _l(){const n=document.querySelectorAll(".attribute_single");n?.length&&n.forEach(i=>{i?.remove()});let e=String(Date.now());const t=Sl(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",t)}function Ki(n){document.getElementById(n)?.remove()}async function El(){const n=document.getElementById("select_the_attribute");let e=$e.filter(a=>a?.name==n?.value)[0];$e=$e.filter(a=>a?.name!=n?.value),Ee.push(e);const t=n.closest(".attribute_single");t?.id&&Ki(t.id),Ea([])}function Tl(n){let e=Ee.filter(t=>t.name==n)[0];Ee=Ee.filter(t=>t.name!=n),$e.push(e),bs($e,"name","string"),Ea([])}function Ea(n){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(Ee.length>0)Ee.forEach(a=>{a.name!=="id"&&a.name!=="className"&&(e+=`<li>${a.name} (${a.type})`,e+=`<a onclick="removeSelectedAttribute('${a.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const a=n?.filter(o=>o?.division!=="inline"&&o.name!=="id"&&o.name!=="className"&&o.name!=="elementContent");Ee=a;const i=new Set(Ee.map(o=>o.name));$e=$e.filter(o=>!i?.has(o?.name)),a.map(function(o){e+=`<li>${o.name} (${o.type}) `,e+=`<a onclick="removeSelectedAttribute('${o.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const t=document.getElementById("element_attributes_entry");t&&(t.innerHTML=e)}function Sl(n){let e='<select id="select_the_attribute" class="form-select">';return $e.forEach(t=>{e+=`<option value="${t?.name}">${t?.name}</option>`}),e+="</select>",`
      <div id="${n}_attribute" class="row attribute_single" >
          <div class="col-md-6">
              ${e}
          </div>
         <div class="col-md-4">
            <!-- <a class="add_attr attr_action" onclick="addAttribute(${n})"> -->
            <a class="add_attr attr_action" onclick="addAttribute()">
              <span class="material-symbols-outlined">
                check
              </span>
            </a>
            <a class="cancel_add_attr attr_action" onclick="cancelAttributeRow('${n}_attribute')">
              <span class="material-symbols-outlined">
                close
              </span>
            </a>
         </div>
      </div>
  `}async function Cl(n,e){if(n.preventDefault(),!(await xe.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(n.target),i=Object.fromEntries(a);console.log(i,"update formValues");const o=await Qi(a,e);await _a("update-element-dialog");const s=await bn();if(o){const r=document.getElementById("created-elements");r?!s||s.trim()===""?r.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:r.innerHTML=s||"":console.error("Widget list container not found in the DOM.")}return o}class Ll{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const t=await Ia(e);this.singleElement=t,this.createElemenModaltHTML=this.getHtml(),t&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await Ea(this.singleElement.attributes))}getHtml(){return window.updateNewElement=Cl,window.closeElementModal=_a,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
      <!-- START .a-dialog-header  -->
        <div class="a-dialog-header">
            Update Element
        </div> 
        <!-- END .a-dialog-header  -->
        <!-- START .a-dialog-body  -->
        <div class="a-dialog-body">
            <form method="dialog" onsubmit="updateNewElement(event,${this.singleElement?.id})" id="form-create-element">
            <div class="mb-3 row">
              <label for="name" class="col-sm-4 col-form-label">Name: </label>
                <div class="col-sm-8">
                <input type="text" value="${this.singleElement?.name}" class="form-control" id="name" name="name" placeholder="Element Name">
                </div>
            </div>
            <div class="mb-3 row">
              <label for="tag" class="col-sm-4 col-form-label">Tag: </label>
                <div class="col-sm-8">
                <input type="text" value="${this.singleElement?.tag}" class="form-control" id="tag" name="tag" placeholder="Tag name">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="void" class="col-sm-4 col-form-label">Closing tag: </label>
                <div class="col-sm-8 d-flex align-items-center">
                <input type="checkbox" class="form-check-input" id="void" name="void" ${this.singleElement?.void?"checked":""}>
                </div>
            </div>
            <div class="mb-3 row">
              <label for="default" class="col-sm-4 col-form-label">Default value: </label>
              <div class="col-sm-8 d-flex align-items-center">
                <input type="text" value="${this.singleElement?.default||""}" class="form-control" id="default" name="default">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="icon" class="col-sm-4 col-form-label">Icon path: </label>
              <div class="col-sm-8 d-flex align-items-center">
                <input type="text" value="${this.singleElement?.icon||""}" class="form-control" id="icon" name="icon">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="division" class="col-sm-4 col-form-label">Division: </label>
              <div class="col-sm-8 d-flex align-items-center">
                <input type="text" value="${this.singleElement?.division||""}" class="form-control" id="division" name="division">
              </div>
            </div>

            <!--START Add Attribute -->
                <div id="create_element_modal_attribute_wrap" >
                    <div class="element_attributes_title">
                      <h4>Selected Attributes</h4>
                    </div>
                    <div id="element_attributes_entry" class="element_attributes_entry"></div>
                </div>
                <div class="mb-3 row">
                    <div class="col-md-12">
                      <button class="btn btn-info" onclick="addNewAttribute()" type="button">
                          Add New Attributes
                      </button>
                    </div>           
                </div>

            <!--END Add Attribute -->
            <div class="text-end">
            <button class="btn btn-light" onclick="closeElementModal('update-element-dialog')" type="button">Cancel</button>
            <button formmethod="dialog" class="btn btn-dark" type="submit">Update Element</button>
            </div>
            </form>
        </div>
        <!-- END .a-dialog-body  -->
      </dialog>`}}class xl{createElemenModaltHTML;constructor(){window._dragService=vr,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=_l,window.cancelAttributeRow=Ki,window.addAttribute=El,window.removeSelectedAttribute=Tl,window.closeElementModal=_a,`
      <dialog id="element-dialog" class="col-md-4 a-dialog create-element-dialog">
      <!-- START .a-dialog-header  -->
        <div class="a-dialog-header">
            Create Element
        </div> 
        <!-- END .a-dialog-header  -->
        <!-- START .a-dialog-body  -->
        <div class="a-dialog-body">
            <form method="dialog" onsubmit="createNewElement(event, 'element-dialog')" id="form-create-element">
            <div class="mb-3 row">
              <label for="name" class="col-sm-4 col-form-label">Name: </label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="name" name="name" placeholder="Element Name">
                </div>
            </div>
            <div class="mb-3 row">
              <label for="tag" class="col-sm-4 col-form-label">Tag: </label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="tag" name="tag" placeholder="Tag name">
                </div>
            </div>
            <div class="mb-3 row">
              <label for="void" class="col-sm-4 col-form-label">Closing tag: </label>
                <div class="col-sm-8 d-flex align-items-center">
                <input type="checkbox" class="form-check-input" id="void" name="void">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="default" class="col-sm-4 col-form-label">Default value: </label>
              <div class="col-sm-8 d-flex align-items-center">
                <input type="text" class="form-control" id="default" name="default">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="icon" class="col-sm-4 col-form-label">Icon path: </label>
              <div class="col-sm-8 d-flex align-items-center">
                <input type="text" class="form-control" id="icon" name="icon">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="division" class="col-sm-4 col-form-label">Division: </label>
              <div class="col-sm-8 d-flex align-items-center">
                <input type="text" class="form-control" id="division" name="division">
              </div>
            </div>
            <!--START Add Attribute -->
                <div id="create_element_modal_attribute_wrap" >
                    <div class="element_attributes_title">
                      <h4>Selected Attributes</h4>
                    </div>
                    <div id="element_attributes_entry" class="element_attributes_entry"></div>
                </div>
                <div class="mb-3 row">
                    <div class="col-md-12">
                      <button class="btn btn-info" onclick="addNewAttribute()" type="button">
                          Add New Attributes
                      </button>
                    </div>           
                </div>

            <!--END Add Attribute -->
            <div class="text-end">
            <button class="btn btn-light" onclick="closeElementModal('element-dialog')" type="button">Cancel</button>
            <button formmethod="dialog" class="btn btn-dark" type="submit">Create Element</button>
            </div>
            </form>
        </div>
        <!-- END .a-dialog-body  -->
      </dialog>
    `}}async function ce(n){document.getElementById(n).showModal()}async function Ce(n){const e=document.getElementById(n);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function Zi(n,e){n?.stopPropagation();const t=document.getElementById(`menu-${e}`),a=t?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),t&&!a&&t.classList.add("show")}async function bd(n){new xl,await ce(n)}async function _d(n,e,t){n.stopPropagation(),console.log("modalId",e),Zi(n,Number(t)),new Ll(t)}async function Ed(n,e){Zi(n,e),confirm("Are you sure you want to delete the element?")&&(await Me(e),A.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const a=await bn(),i=document.getElementById("created-elements");i?!a||a.trim()===""?i.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:i.innerHTML=a||"":console.error("Elements list container not found in the DOM.")}async function Ta(){St(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
    <h4>Widget details</h4>
    <form method="dialog" class="mt-3" id="save-widget-form">

      <div class="mb-3">
        <label for="widgetName" class="form-label">Widget name</label>
        <input type="text" class="form-control" autocomplete="widget-name" name="widgetName" id="widgetName" value="" placeholder="e.g. first widget">
      </div>

      <div class="text-end">
        <button class="btn btn-secondary" onclick="closeModal('save-widget-dialog')" type="button">Cancel</button>
        <button type="submit" class="btn btn-info">Save Now</button>
      </div>

    </form>
  `,document.querySelector("body #app")?.appendChild(e),ce("save-widget-dialog"),new Promise((t,a)=>{const i=e.querySelector("#save-widget-form");i.onsubmit=async s=>{s.preventDefault();try{const r=new FormData(i),d=Object.fromEntries(r).widgetName,c=s.target;if(!d?.trim()){const u=c.querySelector("#widgetName");u?.focus(),u.style.border="2px solid red",u.style.outline="none",u.addEventListener("input",()=>{u.style.border=""});return}await Xi(s,d),Ce("save-widget-dialog"),t("Widget saved successfully")}catch(r){console.error("Error saving widget:",r),a("Error saving widget")}};const o=e.querySelector("button[type='button']");o.onclick=()=>{Ce("save-widget-dialog"),t("Widget saving canceled")}})}async function Xi(n,e){n.preventDefault();try{A.infoMessageToast("Saving Widget...",0),await Ue();const t=document.getElementById("save-widget-dialog"),a=t?.querySelector('button[type="submit"]');a.textContent="Saving";const i=t?.querySelector("input"),o=t?.querySelectorAll("button");o&&o.forEach(u=>{u.disabled=!0}),i&&(i.disabled=!0),await De(),R.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async u=>{if(u.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[u.id]){const p=await Pe(u,"div.mftsccs-marking-element");f.editedWidgets[u.id].html=p.innerHTML}});const r=await eo();f.staticWidgetTree.html=r;const l=await f.saveWidget(e),d=await Z(l.id);Ce("save-widget-dialog"),Pt(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),await $.renderSavedWidgets(),ct(n,d.id);return}catch(t){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),ba(t,"There is an error on saving widget")}}async function Sa(n,e,t){const a=document.getElementById("update-publish-widget-btn");try{const i=document.getElementById("update-widget-btn");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating...",A.infoMessageToast("Updating Widget...",0)),await De(),R.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async d=>{if(d.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[d.id]){const c=await Pe(d,"div.mftsccs-marking-element");f.editedWidgets[d.id].html=c.innerHTML}});const s=await Ca();f.staticWidgetTree.html=s,await f.updateWidget(),Pt(),ve(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Updated Successfully"),await $.renderSavedWidgets(),await $.renderBoomWidgets();const l=document.getElementById("widget-builder");l.textContent="Widget Builder Panel",await ct(n,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),t&&t===!0&&await f.publish();return}catch(i){document.querySelector(".infoMessageToast")?.remove();const s=document.getElementById("update-widget-btn");s&&(s.classList.remove("disabled"),s.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),i instanceof Error&&A.errorToast(i.message)}finally{a&&a.classList.remove("disabled")}}async function Ye(n,e){const t=document.querySelector(".widgetStyle");t.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(d=>{d.textContent=""});const i=document.getElementById("publish-widget");i&&(i.style.display="none",i.disabled=!0);const o=document.querySelector(".content-target"),s=window.location.href,l=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(o){let d=!1;d=await f.hasWidgetChanged(Number(l));const u=document.getElementById("preview-btn").classList.value.includes("active");if((n?.target?.id==="preview-btn"||n?.target?.id==="save-widget-form"||n?.target?.id==="update-widget-btn"||n?.target?.id==="form-folder-modal"||n?.target?.id==="data-file-id")&&(d=!1),u&&(d=!1),d&&!e){await Vt("Do you want to save changes?")&&(s.includes("?page-id=")?l?await ya(n,Number(l)):await fa(n):l?await Sa(n,Number(l)):await Ta()),Pt();const g=document.getElementById("preview-btn");g.classList.remove("active"),g.removeAttribute("data-widgetid")}await Us()}o.innerHTML="",zi(),n&&!e&&jt("/")}let Mn="";async function Al(n){const e=document.getElementById("preview-btn"),t=e.classList.value.includes("active");let a=n.target.getAttribute("data-widgetid");a&&jt(`?widget-id=${a}`);const i=document.querySelector(".content-target"),o=document.querySelector(".midContent .content"),s={...f.widgetTree},r=document.getElementById("undo-btn"),l=document.getElementById("redo-btn"),d=document.getElementById("ai-prompt-btn"),c=document.getElementById("widget-prompt-modal"),u=document.getElementById("widget-prompt-tab"),p=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(t){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,d.style.display="flex",Mn&&Mn!=="none"?(u.classList.add("d-none"),c.classList.remove("d-none"),c.classList.add("d-flex")):(u?.classList.remove("d-none"),c&&c.classList.add("d-none")),e.classList.remove("active"),r.classList.remove("d-none"),l.classList.remove("d-none"),m&&(m.style.display="block"),p&&(p.style.display="none"),i&&(i.style.width="100%",i.style.maxWidth="",i.style.margin="0 auto",i.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),i.classList.add("mode-desktop"));const g=pn(),h=await be(f.widgetTree,g,!0,void 0,!0);X(f.widgetTree,!1,h,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),o.classList.remove("preview"),he(),ve(),Ge.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,d.style.display="none",c&&(Mn=window.getComputedStyle(c).display,c.classList.add("d-none")),u&&u.classList.add("d-none");const g=document.getElementById("select-box"),h=document.getElementById("element-info");g.style.display="none",h.style.display="none",r.classList.add("d-none"),l.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none");const w=await be(f.widgetTree,i,!0,void 0,!1);X(s,!1,w),document.getElementById("column-left").classList.add("d-none");const T=document.createElement("script");T.setAttribute("type","text/javascript"),T.innerHTML=s?.js,i.appendChild(T),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),Ge.disableHeader(),ot.closeCodeView(),o.classList.add("preview");const v=document.querySelector("header.wico_top-header");v.style.display="none"}return"PREVIEW WIDGET"}async function Pe(n,e){return n.querySelectorAll(e).forEach(a=>{for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.remove()}),n}async function Wl(n,e){n.preventDefault();try{const t=new FormData(n.target),i=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');i.textContent="Converting...";const o=n.target;for(let s=0,r=o.length;s<r;++s)o[s].disabled=!0;await Il(t);for(let s=0,r=o.length;s<r;++s)o[s].disabled=!1;return await Ce(e),"completed conversion"}catch{A.errorToast("html conversion failed"),await Ce(e)}}async function Il(n){const e=Object.fromEntries(n),t=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,a=await ds(t,e?.cssCode?.toString(),e?.jsCode.toString()),o=(await k())?.token,r=(await ls(a?.id,o))?.id,{html:l,css:d,js:c}=await is(r,o);await on(r);const u=document.querySelector(".content-target");u.innerHTML=l;const p=document.querySelector('.cm-content[data-language="css"]');p.textContent=d;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=c,"converted widget"}async function kl(n){return new Ur().init(),ce(n),"opened convert HTML to Widget!"}async function pt(n,e){return new Promise(async(t,a)=>{try{let i=new G;i.composition=n,i.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function","the_widget_dependency"],i.inpage=100;let o=new G;o.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],o.inpage=100;const r=await Se([i,o],e);t(r)}catch(i){console.error("error",i),i?.status===401&&je(),a(i)}})}async function Ca(){R.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target"),e=n.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(s=>{s.classList.replace("edited-widget-container","added-widget-container")});const t=await Pe(n,"div.mftsccs-marking-element");return n?.querySelector("#widget-details")?.remove(),(n?.querySelectorAll(".mftsccs-marking-rendered")).forEach(s=>{s.remove()}),t.innerHTML.trim()}async function eo(){R.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target"),e=await Pe(n,"div.mftsccs-marking-element");return n?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function Ot(){const n=document.querySelector(".content-target");n?.querySelector("#widget-details")?.remove();const t=await Pe(n,"div.mftsccs-marking-element");return n?.querySelector(".widget_selected")?.classList.remove("widget_selected"),t.innerHTML.trim()}async function lt(){R.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target")?.cloneNode(!0);n?.querySelector("#widget-details")?.remove();const a=(await Pe(n,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),a}async function Qt(n){R.staticElement?.removeAttribute("draggable");const e=document.getElementById(n)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const i=(await Pe(e,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),i}async function Ml(n=""){try{const e=await k();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const t=await mi("public_widget","",!1,e.userId,4,999);let a=new M;a.typeConnection="the_widget_public_name",a.name="widgetPName";let i=new M;i.typeConnection="the_widget_name",i.name="widgetName";let o=new M;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new M;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new M;r.typeConnection="the_public_widget_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new M;if(l.conceptIds=[t.id],l.outputFormat=le,l.name="top",l.freeschemaQueries=[r],n!=""){let d=new Tt;d.name="filterName",d.search=n,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let c=new Tt;c.name="filterPublicName",c.search=n,c.type="the_public_name",c.operateon="widgetPName",c.logicoperator="like",l.filters=[d,c],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{_e(l,"").subscribe(c=>{d(c)})})}catch(e){throw e}}async function Pl(n=""){try{const e=await k();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const t=await mi("folder_widget","",!1,e.userId,4,999);let a=new M;a.typeConnection="the_widget_folder_name",a.name="widgetPName";let i=new M;i.typeConnection="the_widget_name",i.name="widgetName";let o=new M;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new M;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new M;r.typeConnection="the_folder_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new M;if(l.conceptIds=[t.id],l.outputFormat=le,l.name="top",l.freeschemaQueries=[r],n!=""){let d=new Tt;d.name="filterName",d.search=n,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let c=new Tt;c.name="filterFolderName",c.search=n,c.type="the_folder_name",c.operateon="widgetPName",c.logicoperator="like",l.filters=[d,c],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{_e(l,"").subscribe(c=>{d(c)})})}catch(e){throw e}}class gt{static staticElementList}async function Bl(n,e){const t=n?.target?.value,a=await k(),i=a?.userId,o=a?.token,s=await Z(e),d=(await pt(e,o))?.data?.the_widget?.the_widget_before_render?.[0]?.id;d&&await Me(d);const c=await te("before_render",t,!1,i,4,999);await F(s,c,"before_render"),await N.SyncDataOnline(),new Ui().before_render()}async function $l(n,e){console.log("updateWidgetUpdate event",n),console.log("widgetId",e)}async function Nl(n,e){const t=n?.target?.value,a=await k(),i=a?.userId,o=a?.token,s=await Z(e),d=(await pt(e,o))?.data?.the_widget?.the_widget_after_render?.[0]?.id;d&&await Me(d);const c=await te("after_render",t,!1,i,4,999);await F(s,c,"after_render"),await N.SyncDataOnline();const p=document.getElementById("mountInput")?.value,g=document.getElementById("mountChildWidgetsInput")?.value,h=new kt;h.componentDidMountFunction=p,h.addEventFunction=t,h.mountChildWidgetsFunction=g;const w=document.querySelector(".content-target"),y=await h.mount(w);console.log("appContentHTML",y)}async function jl(n,e){const t=n?.target?.value,a=await k(),i=a?.userId,o=a?.token,s=await Z(e),d=(await pt(e,o))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;d&&await Me(d);const c=await te("mount_child",t,!1,i,4,999);await F(s,c,"mount_child"),await N.SyncDataOnline()}class Dl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=Fl,`
      <dialog id="widget-documentation-modal" class="col-md-8">
        <div class="py-2 px-3 bg-secondary text-light fs-4 d-flex justify-content-between">
          <span>Documentation</span>
          <span class="material-symbols-outlined" style="cursor: pointer;"
            onclick="closeModal('widget-documentation-modal')">close</span>
        </div>

        <div id="documentation-editor">
        </div>

        <div class="text-end mt-3">
          <button class="btn btn-primary" onclick="saveWidgetDocumentationEditor()">Save Documentation</button>
        </div>
      </dialog>
    `}}class Hl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return`
      <dialog id="widget-documentation-preview-modal">
        <div class="widget-documentation-heading">
          <h4>Documentation</h4>
          <!-- <span class="material-symbols-outlined" style="cursor: pointer;"
            onclick="closeModal('widget-documentation-preview-modal')">close</span> -->
          <button class="close-documentation-button" onclick="closeModal('widget-documentation-preview-modal')" title="Close">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
        </div>

        <!--<div id="documentation-preview"></div>-->
        <div id="documentation-view"></div>

        <div class="widget-documentation-footer">
          <button onclick="closeModal('widget-documentation-preview-modal')">Close</button>
        </div>

      </dialog>
    `}}async function Ol(n,e){const t=document.getElementById("documentation-view");await Ne(z.documentation_preview_widget,t,{currentWidgetId:e})}let _t,Pn="",Kn,Zn;async function ql(n,e){Kn=n,e==="preview"?new Hl:new Dl;const t=new M;t.typeConnection="the_widget_documentation",t.name="documentationText",t.selectors=["the_documentation_text"];const a=new M;a.typeConnection="the_widget_s_documentation",a.name="documentationBlank",a.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const i=new M;i.typeConnection="the_documentation_s_json_list",i.name="documentationJSON",i.selectors=["the_json_list_key","the_json_list_value"],a.freeschemaQueries=[i];const o=new M;o.conceptIds=[Kn],o.freeschemaQueries=[t,a],o.inpage=100,o.outputFormat=le,await _e(o,"").subscribe(async s=>{const r=s?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";r&&(Pn=r);const l=s?.[0]?.data?.the_widget?.the_widget_s_documentation;l?.length&&(Pn=l?.map(c=>{const u=c?.data?.the_documentation,p=u?.the_documentation_type?.data?.the_type,m=u?.the_documentation_content?.data?.the_content,g=u?.the_documentation_creator_email?.data?.the_creator_email,h=u?.the_documentation_doc_title?.data?.the_doc_title,w=u?.the_documentation_method?.data?.the_method,y=u?.the_documentation_method_url?.data?.the_method_url,T=u?.the_documentation_bearer_token?.data?.the_bearer_token,E=u?.the_documentation_username?.data?.the_username,b=u?.the_documentation_password?.data?.the_password,v=u?.the_documentation_auth_type?.data?.the_auth_type,S=u?.the_documentation_s_json_list,L=u?.the_documentation_api_script?.data?.the_api_script,_=u?.the_documentation_api_body?.data?.the_api_body,C=u?.the_documentation_language?.data?.the_language,x=u?.the_documentation_return?.data?.the_return,W=u?.the_documentation_code_editor?.data?.the_code_editor,P=u?.the_documentation_s_doc_url,B=u?.the_documentation_s_image_url,q=u?.the_documentation_s_video_link;let D={type:p,content:m,creatorEmail:g,title:h};if(p==="blank")D={...D};else if(p==="api"){const U=[];S?.length&&S?.forEach(J=>{U.push({key:J?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:J?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),D={...D,method:w,methodURL:y,authType:v,username:E,password:b,bearerToken:T,json:U,script:L,body:_}}else p==="function"&&(D={...D,language:C,return:x,codeEditor:W});const j=[],K=[],oe=[];return B?.length&&B?.forEach(U=>{j.push(U?.data?.the_image_url)}),q?.length&&q?.forEach(U=>{K.push(U?.data?.the_video_link)}),P?.length&&P?.forEach(U=>{oe.push(U.data?.the_doc_url)}),D={...D,imageList:j,linkList:oe,videoList:K},D})),Zn=s?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&Vl(r)}),e==="preview"?(await ce("widget-documentation-preview-modal"),Ol(Pn,n)):await ce("widget-documentation-modal")}async function Fl(){if(_t){const n=_t.getData(),e=await O(Kn),a=(await k())?.userId;if(Zn)await rt(Zn,"the_documentation_text","text",n,a),await N.SyncDataOnline();else{const i=await V("documentation",a,{text:n});await Y(e,i,"documentation"),await N.SyncDataOnline()}A.successfullToast("Documentation is saved."),_t.setData(n)}else console.error("Editor not initialized"),A.errorToast("Documentation couldn't saved.")}function Vl(n){const e=document.querySelector("#documentation-editor");e&&zo.create(e,{licenseKey:"GPL"}).then(t=>{_t=t;const a=n;_t.setData(a)}).catch(t=>{console.error("Error initializing CKEditor:",t)})}class Rl{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",t=>{if(t.target.matches(".btn-tour")){const a=t.target.dataset.tourStatus;this.startTour(a)}})}startTour(e){const t=new Fo.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),a=[{classes:"back-button",text:"Back",action:t.back},{classes:"next-button",text:"Next",action:t.next}];t.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:t.complete},{text:"Next",classes:"next-button",action:()=>{t.next()}}]}),t.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".wico_header-section",on:"bottom-start"},buttons:a}),t.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:a}),t.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:a}),t.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const i=document.querySelector("#tab-container .tab button:nth-child(2)"),o=new Event("click",{bubbles:!0,cancelable:!0});return i.dispatchEvent(o),".right-aside"},on:"left"},buttons:a}),t.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:a}),t.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:a}),t.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:t.back},{classes:"next-button",text:"Finish",action:()=>{t.complete(),e||this.updateTourStatus()}}]}),t.start()}async updateTourStatus(){this.closeTour();const e=await k(),t=e?.userId,a=e?.entityId,i=await O(a),o=new It;try{await o.initialize();const s=await o.MakeTheInstanceConceptLocal("the_tour_status","true",!1,t,4,999);await o.CreateConnectionBetweenEntityLocal(i,s,"tour_status"),await o.commitTransaction()}catch{o.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}async function Ul(n){console.log("event",n),console.log("event.target",n.target);const e=n?.target?.getAttribute("data-pubwidid");console.log("widgetId -->",e);const t=prompt("What would you like to name this forked widget?");if(!t||!t.trim())return;const a=Number(n.target.dataset.pubwidid);if(a){A.infoMessageToast("Forking widget...",0);try{const i=document.querySelector(".infoMessageToast"),o=await ge(a);f.widgetTree=o;const s=await f.saveWidget(t),r=await Z(s.id);console.log("forkedWidget",r);const l=await O(e);await Y(l,s,"s_fork"),await N.SyncDataOnline(),await $.renderSavedWidgets(),await $.renderBoomWidgets(),i?.remove(),A.successfullToast("Widget forked cuccessfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}}class zl{_layoutWidgetHTMLService=new Oi;_pagesHTMLService=new Li;_projectsService=new Yi;_projectsHTMLService=new Ji;_pagesService=new va;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await xe.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,t={openRenameWidgetModal:nc,renameWidget:no,loadWidget:ct,deleteWidget:Kl,postWidget:Zl,forkWidget:Ul,saveFromPublic:$.saveFromPublic,removeFromTemplate:$.removeFromTemplate,downloadPage:Dr,downloadWebpage:$r,updateWidgetMount:Bl,updateWidgetUpdate:$l,updateWidgetEvents:Nl,updateMountChildWidgets:jl,navbarFunctions:Bt,DeleteConceptById:Me,uploadAssetsFile:ac,removeAssetFile:ic,clearSearch:oc,toggleClearButton:ao,toggleDropdown:Jl,openDocumentationModal:ql,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:a=>this.searchWidgets(a,"#saved-widget-list-container"),searchElements:a=>this.searchWidgets(a,"#created-elements"),searchPublicWidgets:a=>this.searchPublicWidgets(a),searchPages:a=>this.searchWidgets(a,"#saved-page-list-container"),searchProjects:a=>this.searchWidgets(a,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:a=>this.searchWidgets(a),switchLayoutType:a=>{const i=a.target,o=document.getElementById("fslayout-template-container"),s=document.getElementById("fslayout-list-container");i.value==="custom"?(s?.style.setProperty("display","flex"),o?.style.setProperty("display","none")):(s?.style.setProperty("display","none"),o?.style.setProperty("display","flex"))}};Object.assign(e,t)}async setupAssetListener(){const e=await k(),t=new M;t.typeConnection="the_entity_s_asset",t.name="itemname";const a=new M;a.conceptIds=[e.entityId],a.freeschemaQueries=[t],a.outputFormat=le,a.inpage=100,_e(a,"").subscribe(i=>{const o=i?.[0]?.data?.the_entity?.the_entity_s_asset,s=this.generateAssetHTML(o),r=document.getElementById("assets-library-list-container");r&&(r.innerHTML=s)})}generateAssetHTML(e){return e?.length?e.map(t=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${t.id})" /></span>
                    <img class="asset-img" src="${t?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${t?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,t){t||(t=`#${e.target?.dataset?.id}`||"");const i=e.target.value.toLowerCase();document.querySelectorAll(`${t} li`).forEach(s=>{const r=(s.textContent||"").toLowerCase();s.style.display=r.includes(i)?"":"none"})}searchPublicWidgets(e){const a=e.target.value.toLowerCase();ea(a).then(i=>{Fn.navbar.setPublicWidgets(i),this.updatePopupMenu("publicWidgets",i)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7.55556 12H16.4444M12 7.55556V16.4444M4.22222 2H19.7778C21.0051 2 22 2.99492 22 4.22222V19.7778C22 21.0051 21.0051 22 19.7778 22H4.22222C2.99492 22 2 21.0051 2 19.7778V4.22222C2 2.99492 2.99492 2 4.22222 2Z" stroke="#0D6EFD" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,text:"Elements"},{id:"layout",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M2.11111 21L19.8889 21C20.5025 21 21 20.5025 21 19.8889L21 14.3333C21 13.7197 20.5025 13.2222 19.8889 13.2222L2.11111 13.2222C1.49746 13.2222 0.999998 13.7197 0.999998 14.3333L0.999999 19.8889C0.999999 20.5025 1.49746 21 2.11111 21Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.3333 8.77778L19.8889 8.77778C20.5025 8.77778 21 8.28032 21 7.66667L21 2.11111C21 1.49746 20.5025 0.999999 19.8889 0.999999L14.3333 1C13.7197 1 13.2222 1.49746 13.2222 2.11111L13.2222 7.66667C13.2222 8.28032 13.7197 8.77778 14.3333 8.77778Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.11111 8.77778L7.66666 8.77778C8.28031 8.77778 8.77778 8.28032 8.77778 7.66667L8.77778 2.11111C8.77778 1.49746 8.28031 1 7.66666 1L2.11111 1C1.49746 1 0.999997 1.49746 0.999997 2.11111L0.999998 7.66667C0.999998 8.28032 1.49746 8.77778 2.11111 8.77778Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Layout"},{id:"assets",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                        <path d="M9.11111 21.8421H3.22222C2.63285 21.8421 2.06762 21.5981 1.65087 21.1638C1.23413 20.7295 1 20.1405 1 19.5263V3.31579C1 2.7016 1.23413 2.11257 1.65087 1.67828C2.06762 1.24398 2.63285 1 3.22222 1H18.7778C19.3671 1 19.9324 1.24398 20.3491 1.67828C20.7659 2.11257 21 2.7016 21 3.31579V14.8947L17.5556 11.3053C17.1374 10.8782 16.5745 10.6404 15.989 10.6434C15.4036 10.6464 14.8429 10.8901 14.4289 11.3215L4.33333 21.8421M13.2222 20.1053L16.5556 16.6316M16.5556 16.6316L19.8889 20.1053M16.5556 16.6316V23M9.88889 7.94737C9.88889 9.22634 8.89397 10.2632 7.66667 10.2632C6.43937 10.2632 5.44444 9.22634 5.44444 7.94737C5.44444 6.66839 6.43937 5.63158 7.66667 5.63158C8.89397 5.63158 9.88889 6.66839 9.88889 7.94737Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Assets"}],widgetItems:[{id:"savedWidgets",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                        <path d="M19 23L10 18.1111L1 23V3.44444C1 2.79614 1.27092 2.17438 1.75315 1.71596C2.23539 1.25754 2.88944 1 3.57143 1H16.4286C17.1106 1 17.7646 1.25754 18.2468 1.71596C18.7291 2.17438 19 2.79614 19 3.44444V23Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Saved Widgets"},{id:"publicWidgets",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 0C18.6196 0 24 5.38035 24 12C24 18.6196 18.6196 24 12 24C5.38035 24 0 18.6196 0 12C0 5.38035 5.38035 0 12 0ZM3.89924 12.5441C3.44584 12.6952 3.23426 14.9622 4.26196 15.2947C4.83627 15.4761 4.4131 16.9572 5.68262 15.7179C6.31738 15.0831 4.0806 14.3577 5.04786 12.8766C5.16877 12.6952 4.89673 12.3023 3.89924 12.5441ZM8.46348 21.8237C7.28463 20.0705 6.86146 17.2897 9.8539 16.806C11.7582 16.5038 12.1511 20.6751 16.7758 18.7708C18.1662 18.1965 19.3149 18.529 19.6171 19.1335C21.068 17.5617 22.0655 15.5668 22.3375 13.33C18.8615 11.8791 20.3728 14.7506 18.6499 14.1461C17.7431 13.8438 18.4081 5.86398 13.5416 10.2166C11.7582 11.8186 4.98741 14.8413 8.55416 8.73552C10.2469 5.80353 4.56423 5.07809 5.83375 3.59698C3.26448 5.50126 1.57179 8.55416 1.57179 12C1.57179 16.534 4.44332 20.3728 8.46348 21.8237Z" fill="#AAAAAA"/>
                        </svg>`,text:"Public Widgets"},{id:"folderWidgets",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <!-- Folder outline -->
                                <path d="M3 6C3 4.89543 3.89543 4 5 4H9L11 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" stroke="#AAAAAA" stroke-width="2"/>
                                <!-- Checkmark for "save" -->
                                <path d="M10 12L12 14L16 10" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,text:"Folder Widgets"}],libraryItems:[{id:"pages",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                        <path d="M13 1V5.44444C13 6.03381 13.2107 6.59905 13.5858 7.01579C13.9609 7.43254 14.4696 7.66667 15 7.66667H19M14 1H3C2.46957 1 1.96086 1.23413 1.58579 1.65087C1.21071 2.06762 1 2.63285 1 3.22222V18.7778C1 19.3671 1.21071 19.9324 1.58579 20.3491C1.96086 20.7659 2.46957 21 3 21H17C17.5304 21 18.0391 20.7659 18.4142 20.3491C18.7893 19.9324 19 19.3671 19 18.7778V6.55556L14 1Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Pages"},{id:"projects",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                        <path d="M1 5.70588V18.6471C1 19.2711 1.25286 19.8696 1.70294 20.3108C2.15303 20.7521 2.76348 21 3.4 21H20.2M22.6 16.2941C23.2365 16.2941 23.847 16.0462 24.2971 15.605C24.7471 15.1637 25 14.5652 25 13.9412V6.88235C25 6.25831 24.7471 5.65983 24.2971 5.21857C23.847 4.77731 23.2365 4.52941 22.6 4.52941H17.92C17.5186 4.53327 17.1227 4.43837 16.7684 4.25339C16.4141 4.06841 16.1128 3.79927 15.892 3.47059L14.92 2.05882C14.7015 1.73349 14.404 1.46645 14.0542 1.28164C13.7044 1.09684 13.3133 1.00006 12.916 1H8.2C7.56348 1 6.95303 1.2479 6.50294 1.68916C6.05286 2.13042 5.8 2.7289 5.8 3.35294V13.9412C5.8 14.5652 6.05286 15.1637 6.50294 15.605C6.95303 16.0462 7.56348 16.2941 8.2 16.2941H22.6Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Projects"}],configurationItems:[{id:"widget-tour",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none">
                        <path d="M12.6923 17.0001L9 13.3078M12.6923 17.0001C14.4115 16.3463 16.0608 15.5216 17.6154 14.5386M12.6923 17.0001V23.1539C12.6923 23.1539 16.4215 22.477 17.6154 20.6924C18.9446 18.6985 17.6154 14.5386 17.6154 14.5386M9 13.3078C9.65495 11.6087 10.4796 9.97996 11.4615 8.44636C12.8956 6.15345 14.8925 4.26555 17.2622 2.96224C19.6319 1.65892 22.2956 0.983531 25 1.0003C25 4.34795 24.04 10.231 17.6154 14.5386M9 13.3078H2.84615C2.84615 13.3078 3.52308 9.57866 5.30769 8.38483C7.30154 7.05561 11.4615 8.38483 11.4615 8.38483M3.46154 18.8462C1.61538 20.397 1 25 1 25C1 25 5.60308 24.3846 7.15385 22.5385C8.02769 21.5047 8.01538 19.917 7.04308 18.957C6.56469 18.5004 5.93452 18.2366 5.27351 18.2161C4.6125 18.1957 3.96723 18.4201 3.46154 18.8462Z" stroke="#AAAAAA" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Widget Tour"},{id:"documentation",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                        <path d="M13.5 1V5.8C13.5 6.43652 13.7634 7.04697 14.2322 7.49706C14.7011 7.94714 15.337 8.2 16 8.2H21M8.5 9.4H6M16 14.2H6M16 19H6M14.75 1H3.5C2.83696 1 2.20107 1.25286 1.73223 1.70294C1.26339 2.15303 1 2.76348 1 3.4V22.6C1 23.2365 1.26339 23.847 1.73223 24.2971C2.20107 24.7471 2.83696 25 3.5 25H18.5C19.163 25 19.7989 24.7471 20.2678 24.2971C20.7366 23.847 21 23.2365 21 22.6V7L14.75 1Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Documentation",link:"/documentation"},{id:"tutorials",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <path d="M0 0L16 10L0 20V0Z" fill="#AAAAAA"/>
                        </svg>`,text:"Tutorials",link:"/video-tutorial"},{id:"community",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4Z" stroke="#AAAAAA" stroke-width="2"/>
                            <path d="M19 4C20.1046 4 21 4.89543 21 6C21 7.10457 20.1046 8 19 8C17.8954 8 17 7.10457 17 6C17 4.89543 17.8954 4 19 4Z" stroke="#AAAAAA" stroke-width="2"/>
                            <path d="M5 4C6.10457 4 7 4.89543 7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4Z" stroke="#AAAAAA" stroke-width="2"/>
                            <path d="M12 11C9.79086 11 8 12.7909 8 15V20H16V15C16 12.7909 14.2091 11 12 11Z" stroke="#AAAAAA" stroke-width="2"/>
                            <path d="M19 11C16.7909 11 15 12.7909 15 15V20H23V15C23 12.7909 21.2091 11 19 11Z" stroke="#AAAAAA" stroke-width="2"/>
                            <path d="M5 11C2.79086 11 1 12.7909 1 15V20H9V15C9 12.7909 7.20914 11 5 11Z" stroke="#AAAAAA" stroke-width="2"/>
                        </svg>`,text:"Community",link:"/Community"},{id:"courses",icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7V21M12 7C12 5.93913 11.5786 4.92172 10.8284 4.17157C10.0783 3.42143 9.06087 3 8 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H9C9.79565 18 10.5587 18.3161 11.1213 18.8787C11.6839 19.4413 12 20.2044 12 21M12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`,text:"Course",link:"/courses"}]},t=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(t),bn().then(a=>{this._elemensHtml=a;const i=document.getElementById("created-elements");i&&(i.innerHTML=a||"")}),Xn().then(a=>{this._savedWidgetsHtml=a;const i=document.getElementById("saved-widget-list-container");i&&(i.innerHTML=a||"")}),ea().then(a=>{this._publicWidgetsHtml=a;const i=document.getElementById("public-widget-list-container");i&&(i.innerHTML=a||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const t=document.createElement("nav");t.className="sidebar sidebar-collapsed";let a=!0;const i=()=>{a=!a,t.classList.toggle("sidebar-collapsed",a),a||(this.removeSubSidebar(),this.removeActiveClass())};return t.appendChild(this.createSidebarHeader(i)),t.appendChild(this.createSidebarMenu(e.mainItems)),t.appendChild(this.createSection("Widgets")),t.appendChild(this.createSidebarMenu(e.widgetItems)),t.appendChild(this.createSection("Library")),t.appendChild(this.createSidebarMenu(e.libraryItems)),t.appendChild(this.createSection("Configuration")),t.appendChild(this.createSidebarMenu(e.configurationItems)),t}createSidebarHeader(e){const t=document.createElement("div");return t.className="menu-toggle",t.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,t.addEventListener("click",e),t}createSidebarMenu(e){const t=document.createElement("div");return t.className="sidebar-menu",e?.forEach(a=>t.appendChild(this.createMenuItem(a))),t}createMenuItem(e){const t=document.createElement("div");return t.id=e.id,t.onclick=a=>this.handleNavItemClick(a),e.id==="widget-tour"?(t.className="nav-item",t.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,t.onclick=()=>{new Rl().startTour(this._loginDetailObject?.tourStatus)}):e?.link?t.innerHTML=`
                <router-link href="${e.link}" target="_blank" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(t.className="nav-item",t.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),t}createSection(e){const t=document.createElement("div");return t.className="sidebar-section",t.innerHTML=`<hr /><span class="section-title">${e}</span>`,t}async handleNavItemClick(e){const t=document.querySelector(".sidebar"),a=t?.classList.contains("sidebar-collapsed"),i=e.target.closest(".nav-item"),o=i?.id,s=i?.classList.contains("active"),r=i?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!o||s){this.removeSubSidebar();return}if(a){this.removeSubSidebar(),i?.classList.add("active");const l=await this.createSubSidebarMenu(o,r);if(document.querySelector("#column-left")?.appendChild(l),o==="folderWidgets"){const d=await k(),c=document.getElementById("folder-widget-container");await Ne(z.folder_widget,c,{showFiles:!0}).then(u=>{u.dataChange(async p=>{if(p.displayType==="photo"||p.type==="Image"||p.displayType==="widget"||p.type==="widget")await Di(e,p);else if(!Array.isArray(p)){let m=await We(Number(p),d.token),g=await ge(m?m.widgetId:Number(p));await ct(null,g.id)}})})}if(o==="assets"){const d=document.getElementById("default-list-container");await Ne(z.assets_widget,d)}}else t?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,t){if(e=="publicWidgets"){let a=document.querySelector("#public-widget-list-container");a&&(a.innerHTML=t)}if(e=="folderWidgets"){let a=document.querySelector("#folder-widget-container");a&&(a.innerHTML=t)}}async createSubSidebarMenu(e,t){const a=document.createElement("section");if(a.className="sub-sidebar",e==="layout")a.innerHTML=`
                <div class="sub-sidebar-header">
                    <span>${t}</span>
                </div>
                <div class="sub-sidebar-content">
                    <div class="sub-sidebar-search">
                        <div class="layout-type-selector w-100 px-2 py-2">
                            <select id="layout-type-selector" class="form-select" onchange="switchLayoutType(event)">
                                <option value="custom">Custom Layout</option>
                                <option value="template">Template Layout</option>
                            </select>
                        </div>
                    </div>
                    <div class="sub-sidebar-list-container">
                        <ul id="fslayout-list-container" class="fslayout-list-container">
                            ${this._layoutsHtml}
                        </ul>
                        <ul id="fslayout-template-container" class="fslayout-list-container" style="display: none;">
                            ${this._templateLayoutsHtml}
                        </ul>
                    </div>
                </div>`;else{let i="";e==="elements"&&this._loginDetailObject?.isAdmin&&(i=`
                    <button onclick="createWidgetModalOpen('element-dialog')" class="btn btn-primary d-flex" title="Create Element">
                        Add New <span class="material-symbols-outlined"> add </span>
                    </button>
                `),a.innerHTML=`
                <div class="sub-sidebar-header">
                    <span>${t}</span>
                    ${i}
                </div>
                ${await this.renderSubMenu(e)}
            `}return e==="projects"&&this._projectsService.initProjectsSidebar(),e==="pages"&&this._pagesService.initPagesSidebar(),e==="assets"&&this.setupAssetListener(),a}async renderSubMenu(e){let a=`
        <li class="list-unstyled">
        <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
        </div>
        </li>`,i="",o="";switch(e){case"elements":a=this._elemensHtml||a,i=this.generateSearchHtml("element-search","Search elements...","searchElements");break;case"savedWidgets":this._savedWidgetsHtml&&(a=this._savedWidgetsHtml),i=this.generateSearchHtml("myWidget-search","Search widgets...","searchMyWidgets");break;case"publicWidgets":a=this._publicWidgetsHtml||a,i=this.generateSearchHtml("publicWidget-search","Search public widgets...","searchPublicWidgets");break;case"pages":a=this._pagesHtml||a,i=this.generateSearchHtml("page-search","Search pages...","searchPages"),o=this.createNewHtml("fs-create-page-button",'<img src="./images/icons/add pages.svg" alt="add icon" class="icon" />',"Create New Page");break;case"projects":a=this._projectsHtml||a,i=this.generateSearchHtml("project-search","Search projects...","searchProjects"),o=this.createNewHtml("fs-create-project-button",`<svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="40" height="38" rx="3" stroke="white" stroke-width="2"/>
                    <path d="M21 18.2353V25.2941M17.7 21.7647H24.3M29.8 30C30.3835 30 30.9431 29.7521 31.3556 29.3108C31.7682 28.8696 32 28.2711 32 27.6471V15.8824C32 15.2583 31.7682 14.6598 31.3556 14.2186C30.9431 13.7773 30.3835 13.5294 29.8 13.5294H21.11C20.7421 13.5333 20.3791 13.4384 20.0543 13.2534C19.7296 13.0684 19.4534 12.7993 19.251 12.4706L18.36 11.0588C18.1597 10.7335 17.887 10.4664 17.5663 10.2816C17.2457 10.0968 16.8872 10.0001 16.523 10H12.2C11.6165 10 11.0569 10.2479 10.6444 10.6892C10.2318 11.1304 10 11.7289 10 12.3529V27.6471C10 28.2711 10.2318 28.8696 10.6444 29.3108C11.0569 29.7521 11.6165 30 12.2 30H29.8Z" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `,"Create New Project");break;case"layout":a=this._layoutsHtml||a;break;case"assets":a=`
                    <div class="asset-list"> 
                        <ul id="assets-library-list-container">
                            ${this.generateAssetHTML([])}
                        </ul>
                    </div>
                `,i="";break}return`
            <div class="sub-sidebar-content">
                <div class="sub-sidebar-search">${i}${o}</div>
                <div class="sub-sidebar-list-container">
                    <ul id="${this.getListId(e)}" class="${this.getListId(e)}" >
                        ${a}
                    </ul>
                </div>
            </div>
        `}generateSearchHtml(e,t,a){return`
            <div class="search-widgets">
                <div class="search-input-wrapper">
                    <input type="text" id="${e}" 
                                 class="form-control" 
                                 placeholder="${t}" 
                                 onkeyup="${a}(event)" 
                                 oninput="toggleClearButton('${e}')">
                    <span id="${e}-clear" class="material-symbols-outlined" 
                                style="display:none;" 
                                onclick="clearSearch('${e}')">close</span>
                </div>
            </div>
        `}createNewHtml(e,t,a){return`<div class="create-new" id="${e}" >
                    <span class="create-new-icon" title="${a}">${t}</span>
                </div>`}getListId(e){return{elements:"created-elements",savedWidgets:"saved-widget-list-container",publicWidgets:"public-widget-list-container",folderWidgets:"folder-widget-container",pages:"saved-page-list-container",projects:"saved-project-list-container",layout:"fslayout-list-container"}[e]||"default-list-container"}removeActiveClass(){document.querySelector(".nav-item.active")?.classList.remove("active")}removeSubSidebar(){document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(e=>{e.remove()})}async getHtml(){const e={mainItems:[{id:"elements",icon:'<img src="./images/icons/elements.svg" alt="elements icon" class="icon" />',text:"Elements"},{id:"layout",icon:'<img src="./images/icons/layouts.svg" alt="layouts icon" class="icon" />',text:"Layout"},{id:"assets",icon:'<img src="./images/icons/assets.svg" alt="assets icon" class="icon" />',text:"Assets"}],widgetItems:[{id:"savedWidgets",icon:'<img src="./images/icons/saved widgets.svg" alt="saved icons" class="icon" />',text:"Saved Widgets"},{id:"publicWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="icon" class="icon" />',text:"Public Widgets"},{id:"folderWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="icon" class="icon" />',text:"Public Widgets"}],libraryItems:[{id:"pages",icon:'<img src="./images/icons/pages.svg" alt="icon" class="icon" />',text:"Pages"},{id:"projects",icon:'<img src="./images/icons/projects.svg" alt="icon" class="icon" />',text:"Projects"}],configurationItems:[{id:"documentation",icon:'<img src="./images/icons/documentation.svg" alt="icon" class="icon" />',text:"Documentation",link:"/documentation"},{id:"tutorials",icon:'<img src="./images/icons/tutorials.svg" alt="icon" class="icon" />',text:"Tutorials",link:"/video-tutorial"},{id:"community",icon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="none">
                        <path d="M360-400c0 33 23.5 56.5 56.5 56.5T473-400c0-33-23.5-56.5-56.5-56.5T360-400Zm240 0c0 33 23.5 56.5 56.5 56.5T713-400c0-33-23.5-56.5-56.5-56.5T600-400ZM480-600c0 33 23.5 56.5 56.5 56.5T593-600c0-33-23.5-56.5-56.5-56.5T480-600ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" stroke="#AAAAAA" stroke-width="2" fill="none"/>
                    </svg>`,text:"Community",link:"/Community"}]},t=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),t.outerHTML}}class Kt{static staticTabName}async function Jl(n,e){n.stopPropagation();const t=document.getElementById(`dropdown-menu-${e}`),a=t?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),t&&!a&&t.classList.add("show")}document.addEventListener("click",n=>{document.querySelectorAll(".dropdown-menu").forEach(t=>{const a=n.target;a&&!t.contains(a)&&!a.closest(".dropdown-icon")&&t.classList.remove("show")})});async function At(n,e){const t=document.getElementById(e),i=n.target.closest(".accordion-wrapper").querySelector("span");if(t){if(t.style.display==="block"||getComputedStyle(t).display==="block")t.style.display="none",i.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(t.style.display="block",i.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",t.tagName==="FORM"||t.id==="navigator-container"||t.id==="element-attributes"||t.id==="library-css"||t.id==="library-js"||t.id==="general-content"||t.id==="size-content"||t.id==="display-content"||t.id==="typography-content")return}}function Gl(n){const e=document.getElementById(n);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function bn(){const n=await xe.getInstance().getLoginInfo(),e=await to();return gt.staticElementList=e,Array.isArray(e)?e?.map(a=>{const i=a?.id,o=a?.data?.the_element?.the_element_name?.[0]?.data?.the_name,s=a?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=a?.data?.the_element?.the_element_void?.[0]?.data?.the_void,l=a?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",d=a?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${o}">${n.isAdmin?`<a data-elementid="${i}" data-type="${s}" data-default="${l}" data-void="${r}" data-text="${o}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

        <div class="element-details">
        <img src="${d}" class="element-icon">
        <span>${o}</span>
        </div>
        <button class="btn-more-element" onclick="toggleElementMenu(event, ${i})" title="More">
          <span class="material-symbols-outlined">more_vert</span>
        </button>
        <!-- The dropdown menu (hidden by default) -->
        <!-- <div id="menu-${i}" class="dropdown-menu" style="display: none;">
          <ul>
            <li><button onclick="editElementModalOpen('update-element-dialog',${i})">Edit</button></li>
            <li><button onclick="deleteElement(${i})">Delete</button></li>
          </ul>
        </div>-->
        <ul id="menu-${i}" class="dropdown-menu">
          <li class="d-flex align-items-center justify-content-between "
            onclick="editElementModalOpen(event, 'update-element-dialog',${i})">
            <span>Edit</span>
            <span class="material-symbols-outlined ">edit </span>
          </li>
          <li class="d-flex align-items-center justify-content-between " onclick="deleteElement(event, ${i})">
            <span>Delete</span>
            <span class="material-symbols-outlined ">delete </span>
          </li>
        </ul>
        </a>`:`<a data-elementid="${i}" data-type="${s}" data-default="${l}" data-void="${r}" data-text="${o}" draggable="true" ondragstart="_dragService.onDragStart(event)">
          <!--  -->
          <div class="element-details">
          <img src="${d}" class="element-icon">
          <span>${o}</span>
          </div>
          </a>`}</li>`}).join(""):""}async function to(){const n=z?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],t=new Headers;t.append("Content-Type","application/json");const i=await(await fetch(`${n}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:t,body:JSON.stringify(e),redirect:"follow"})).json();return i?.sort((o,s)=>{o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const r=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),l=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return r<l?-1:r>l?1:0}),i}async function Xn(){try{const n=await k();if(!n)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=n?.entityId;await Ue();const t=new Tt;t.type="the_public_widget",t.search="",t.operateon="public",t.name="publicfilter",t.logicoperator="=";const a=new M;a.typeConnection="the_public_widget_s_widget",a.freeschemaQueries=[],a.name="public",a.reverse=!0;const i=new M;i.typeConnection="the_widget_recent",i.name="copywidgets",i.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],i.freeschemaQueries=[a];const o=new M;o.typeConnection="the_entity_s_widget",o.name="mywidgets",o.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],o.freeschemaQueries=[i];const s=new M;return s.conceptIds=[e],s.freeschemaQueries=[o],s.inpage=100,s.outputFormat=le,await new Promise((l,d)=>{_e(s,"").subscribe(async c=>{const u=c?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!u.length)return l(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(u.map(async g=>{const h=g?.data?.the_widget,w=h?.the_widget_name?.data?.the_name,y=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:h?.the_widget_html?.data?.the_html,T=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:h?.the_widget_css?.data?.the_css,E=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:h?.the_widget_js?.data?.the_js,b=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:h?.the_widget_timestamp?.data?.the_timestamp,v=!!h?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:g?.id,name:w,html:y,css:T,js:E,timestamp:b,isPosted:v}}))).map(g=>`
                      <li class="widget-item" >

        <router-link href="/?widget-id=${g?.id}" class="savedWidgetRouter" onclick="loadWidget(event, ${g?.id})" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${g?.id}">
    <span class="material-symbols-outlined"> drag_indicator </span>
    ${g?.name}
  </router-link>

  <!-- Three-Dot Dropdown Icon -->
  <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${g?.id})" title="Options"> more_vert </span>

  <!-- Dropdown Menu -->
  <ul class="dropdown-menu" id="dropdown-menu-${g?.id}">


  <li class="d-flex align-items-center justify-content-between post-icon" onclick="${g.isPosted?"":`postWidget(event, ${g?.id})`}" title="${g.isPosted?"Posted":"Post widget"}" style="${g.isPosted?"color: green; cursor: default;":""}">
  <span>${g.isPosted?"Posted":"Post widget"}</span>
    <span class="material-symbols-outlined  ${g.isPosted?"posted":""}" >
      ${g.isPosted?"done":"post_add"}
    </span>
    </li>

    <li class="d-flex align-items-center justify-content-between "  onclick="openRenameWidgetModal(event, ${g?.id})">
    <span >Rename</span>
    <span class="material-symbols-outlined " >edit </span>
    </li>

    <router-link class="w-100 p-0" target="_blank" href="/preview?pageId=${g.id}">
    <li class="d-flex align-items-center justify-content-between w-100">
    <span>Preview</span>
    <span class="material-symbols-outlined">preview </span>
    </li>
    </router-link>

    <li class="d-flex align-items-center justify-content-between delete-icon"  onclick="deleteWidget(event, ${g?.id})">
    <span >Delete</span>
    <span class="material-symbols-outlined " >delete </span>
    </li>

    <li class="d-flex align-items-center justify-content-between" onclick="downloadWebpage(${g?.id})">
    <span>Download</span>
    <span class="material-symbols-outlined">download </span>
    </li>

    <li class="d-flex align-items-center justify-content-between" onclick="saveWidgetToFolderBtn(${g?.id}, true)">
    <span>Save To Folder</span>
    <span class="material-symbols-outlined">topic </span>
    </li>

    <!-- <li class="d-flex align-items-center justify-content-between"  onclick="openDocumentationModal(${g?.id})">
      <span>Documentation</span>
      <span class="material-symbols-outlined">description</span>
    </li> -->
  </ul>

  <div id="spinner-${g.id}" class="spinner-border spinner-border-sm text-primary position-absolute top-50 start-50 translate-middle d-none" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</li>
              `).join("");l(m)})})}catch(n){console.error("Error in getMyWidgetsList:",n),A.errorToast(n?.message||"An error occurred while fetching widgets"),n?.status===401&&je()}}async function De(){try{const n=document.getElementById("builder-workarea");if(!n)return;n.innerHTML="",await Fe(f.widgetTree);const e=await be(f.widgetTree,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await X(f.widgetTree,!1,e),he(),ve()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function Xa(n){const e=n?JSON.parse(n):"";if(e)try{const t=document.getElementById("builder-workarea");t.innerHTML="";const a=await be(e,t),i=document.getElementById("select-box");i.style.display="none";const o=document.getElementById("element-attributes");o.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await X(e,!1,a),he(),ve()}catch(t){throw new Error(`error loading widget with widget tree ${t.message}`)}}async function ct(n,e,t){try{if(n?.preventDefault(),n?.stopPropagation(),Bt.collapseNavbar(),await Ue(),await Ye(n),t&&typeof t!="number"||Number.isNaN(t)||e&&typeof e!="number"||Number.isNaN(e)){A.infoMessageToast("Widget id is in different format. Please check and update",4),Ye(n);return}jt(`?widget-id=${t||e}`);const a=document.getElementById("preview-btn");a&&(a.setAttribute("data-widgetid",e.toString()),a.innerHTML='<span class="material-symbols-outlined"> visibility </span> Preview',a.classList.remove("rounded-0","rounded-start")),Yl(),Ql(),da(),Fi(),await qi();let i=pn();i.classList.contains("fspage")&&i.classList.remove("fspage");const s=(await k())?.token;let r=null;n&&(r=await We(e,s));let l=await ge(r?r.widgetId:e);const d=document.getElementById("widgetNameValue");d&&l?.name&&(d.value=l?.name);const c=document.getElementById("widget-builder");c&&l?.name&&(c.textContent="Widget Builder Panel: "+l?.name,c.setAttribute("title",`Widget Builder Panel: ${l?.name}`)),await Fe(l);const u=await be(l,i);f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await X(l,!1,u,!0),await Ns(r?.widgetId??e);const p=document.getElementById("preview-btn");return p.setAttribute("onclick","previewWidget(event)"),p.setAttribute("data-widgetid",`${e}`),p.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),Qn(),$.enableWidgetButtons(),$.initializeWidgetVersions(t||e,l?.version?l.version.toString():"original",l?.timestamp),H.renderActionHistory(),H.updateActionHistories(),he(),ve(),ua(),""}catch(a){console.error(a),A.errorToast(a?.message,4),Qn(),Ye(n)}}function Yl(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const t=document.getElementById("page-properties");t&&(t.style.display="none");const a=document.querySelector("button[data-tab-id='wico-tab-navigator']"),i=document.querySelector(`button[data-tab-id='${Kt.staticTabName}']`);Kt.staticTabName==="wico-tab-pageInfo"&&i.style.display==="none"?a&&a.click():i?i.click():a&&a.click()}function Ql(){document.title="Widget Conceptualizer",Wt("description","Widget Conceptualizer"),Wt("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection");const n=document.getElementById("updateDropDownPagePreview");n&&n.remove()}async function Kl(n,e){n.stopPropagation();try{const t=confirm("Do you want to delete the Widget?");if(await Ue(),t){A.infoMessageToast("Deleting the widget...",0),await bl(e),await $.renderSavedWidgets();const a=new URLSearchParams(window.location.search).get("widget-id");return a&&parseInt(a)===e&&await Ye(n),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(t){document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),A.errorToast(t.message?t.message:"Failed to delete widget"),console.error("Failed to delete widget:",t)}}async function Zl(n,e){n.stopPropagation();const t=document.getElementById("postWidgetModal");t&&t.remove();const a=await k(),i=a?.entityId===101651686||a?.entityId===101279491,o=document.createElement("dialog");o.id="postWidgetModal",o.className="col-md-6 a-dialog",o.innerHTML=`
    <div class="a-dialog-header d-flex justify-content-between">
      <span>Post Widget to Public</span>
      <span class="material-symbols-outlined" style="cursor: pointer;" onclick="this.closest('dialog').close()">close</span>
    </div>
    <div class="a-dialog-body">
      <form id="post-widget-form" method="dialog">
        <div class="mb-3">
          <label class="form-label">Widget Name
          <span class="text-danger">*</span>
          </label>
          <input id="widgetPublicName" class="form-control" rows="3" required></input>
        </div>
        <div class="mb-3">
          <label class="form-label">Widget Description
          <span class="text-danger">*</span>
          </label>
          <textarea id="widgetDescription" class="form-control" rows="3" required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Widget Thumbnail
          <span class="text-danger">*</span>
          </label>
          <div class="thumbnail-input-container border rounded p-2">
            <input type="file" id="widgetThumbnail" class="form-control" accept="image/*" required>
            <div id="pasteArea" class="mt-2 text-center text-muted" style="min-height: 120px; border: 1px dashed #ccc; cursor: pointer;">
              <div id="imagePreview" class="d-none">
                <img style="max-width: 100%; max-height: 200px; object-fit: contain;" />
              </div>
              <div id="pasteText">Or paste image from clipboard (Ctrl+V)</div>
            </div>
          </div>
        </div>
        ${i?`
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="postAsTemplate">
          <label class="form-check-label" for "postAsTemplate">Post as Template Layout</label>
        </div>
        `:""}
        <div class="d-flex justify-content-end gap-2 mt-4">
          <button type="button" class="btn btn-secondary" onclick="this.closest('dialog').close()">Cancel</button>
          <button type="submit" class="btn btn-primary">Post Widget</button>
        </div>
      </form>
    </div>
  `,document.body.appendChild(o);const s=o.querySelector("#pasteArea"),r=o.querySelector("#widgetThumbnail"),l=o.querySelector("#imagePreview img"),d=o.querySelector("#imagePreview"),c=o.querySelector("#pasteText");function u(g){const h=new FileReader;h.onload=w=>{l&&w.target?.result&&(l.src=w.target.result,d.classList.remove("d-none"),c.classList.add("d-none"))},h.readAsDataURL(g)}r?.addEventListener("change",g=>{const h=g.target.files?.[0];h&&u(h)});function p(g){const h=g.clipboardData?.items;if(h){for(let w=0;w<h.length;w++)if(h[w].type.indexOf("image")!==-1){const y=h[w].getAsFile();if(y&&r){const T=new DataTransfer;T.items.add(y),r.files=T.files,u(y);break}}}}s?.addEventListener("paste",g=>p(g)),o.addEventListener("paste",g=>p(g)),o.querySelector("#post-widget-form")?.addEventListener("submit",g=>{g.preventDefault(),Xl(e,o)}),o.showModal()}async function Xl(n,e){const t=document.querySelector(`#spinner-${n}`),a=e.querySelector('button[type="submit"]');try{a&&(a.disabled=!0,a.textContent="Posting...",A.infoMessageToast("Posting Widget to Public...",0)),t&&t.classList.remove("d-none"),await Ue();const i=await k(),o=document.getElementById("widgetPublicName").value,s=document.getElementById("widgetDescription").value,r=document.getElementById("widgetThumbnail");if(!r?.files?.length)throw console.error("File validation failed:",{inputExists:!!r,filesLength:r?.files?.length}),new Error("Please provide a thumbnail image");const l=r.files?.[0];if(!l||!r.value)throw new Error("Please provide a thumbnail image");const d=await xt(l);if(!d.success)throw new Error("Failed to upload thumbnail");const c=await We(n,i.token);if(c&&(await qe(c.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Widget is already public.");return}const u=document.getElementById("postAsTemplate")?.checked;let p=null;if(c)p=await O(c.widgetId);else{const T=await Z(n);p=await $.createWidgetCopy(T,i.userId,i.token)}const m=await te("public_name",o,!1,i.userId,4,999),g=await te("description",s,!1,i.userId,4,999),h=await te("thumbnail",d.url||"no attachment",!1,i.userId,4,999);await F(p,g,"description"),await F(p,h,"thumbnail"),await F(p,m,"public_name");const w=await te("public_widget","",!1,i.userId,4,999);if(await F(w,p,"s_widget"),u){const E=await te("template_name",o,!1,i.userId,4,999),b=await te("template_thumbnail",d.url||"no attachment",!1,i.userId,4,999);await F(p,b,"template_thumbnail"),await F(p,E,"template_name");const v=await te("template_widget","",!1,i.userId,4,999);await F(v,p,"s_widget")}await N.SyncDataOnline(),await $.renderPublicWidgets(),await $.renderSavedWidgets(),u&&await $.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast(`Widget Posted to Public${u?" and Templates":""}`)},300)}catch(i){console.error("Error posting widget:",i),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to post widget"),a&&(a.disabled=!1,a.textContent="Post Widget")}finally{t&&t.classList.add("d-none")}}async function ea(n=""){try{const e=await k();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const a=(await Ml(n))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],i=await Promise.all(a.map(async r=>{const l=r?.data?.the_widget,c=l?.the_widget_public_name?.data?.the_public_name||`${l?.the_widget_name?.data?.the_name} ${l?.the_widget_version?.data?.the_version>1?"v"+l?.the_widget_version?.data?.the_version:""}`,u=l?.the_widget_description?.data?.the_description,p=l?.the_widget_thumbnail?.data?.the_thumbnail,m=l?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:c,timestamp:m,description:u,thumbnail:p}}));return i?.length?(await Promise.all(i?.map(async r=>{const d=(await Z(r.id)).userId===e.userId,c=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link class="publicWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${r?.id}">
              <div class="d-flex align-items-center" style="min-width: 0;">
                <span class="material-symbols-outlined me-2">drag_indicator</span>
                <div class="widget-info" style="word-wrap: break-word; min-width: 0;">
                  <div class="widget-name pe-2">${r.name||"Unnamed Widget"}</div>
                </div>
              </div>
              <!--
              <div class="widget-actions d-flex align-items-center ms-auto" style="min-width: 100px;">
                <span class="material-symbols-outlined me-2" type="button" onclick="viewPublicWidgetDetails(event, '${r.name||"Unnamed Widget"}', '${r.thumbnail||""}', '${c||""}')" title="View Widget Details">
                  visibility
                </span>
                ${d?`
                  <span class="material-symbols-outlined me-2" data-pubwidid="${r.id}" onclick="removeMyWidgetFromPublic(event)" title="Remove from Public" type="button">
                    delete
                  </span>`:""}
                <span class="material-symbols-outlined" data-pubwidid="${r.id}" onclick="saveFromPublic(event)" title="Import Widget" type="button">
                  file_download
                </span>
              </div>
              -->
            </router-link>

            <!-- Three-Dot Dropdown Icon -->
            <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${r?.id})" title="Options"> more_vert </span>

            <!-- Dropdown Menu -->
            <ul class="dropdown-menu public-menu" id="dropdown-menu-${r?.id}">
              <li class="d-flex align-items-center justify-content-between" data-pubwidid="${r.id}" onclick="saveFromPublic(event)">
                <span>Import Widget</span>
                <span class="material-symbols-outlined" title="Import widget" type="button">
                  file_download
                </span>
              </li>
              ${d?`
                <li class="d-flex align-items-center justify-content-between delete-icon" data-pubwidid="${r.id}" onclick="removeMyWidgetFromPublic(event)">
                  <span>Remove</span>
                  <span class="material-symbols-outlined" title="Remove from public" type="button">
                    delete
                  </span>
                </li>`:""}
              <!-- ${d?"":`
                <li class="d-flex align-items-center justify-content-between" data-pubwidid="${r.id}" onclick="forkWidget(event)">
                  <span>Fork Widget</span>
                  <span class="material-symbols-outlined" title="Fork widget" type="button">
                    graph_1
                  </span>
                </li>
                `} -->
              <li class="d-flex align-items-center justify-content-between" onclick="viewPublicWidgetDetails(event, '${r.name||"Unnamed Widget"}', '${r.thumbnail||""}', '${c||""}')" >
                <span>View Details</span>
                <span class="material-symbols-outlined" type="button" title="View widget details">
                  visibility
                </span>
              </li>
            </ul>
          </li>
        `})||[])).join(""):`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `}catch(e){console.error("error",e),e?.status===401&&je()}}async function ec(n=""){try{const e=await k();if(!e)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const a=(await Pl(n))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[],i=await Promise.all(a.map(async l=>{const d=l?.data?.the_widget,u=d?.the_widget_folder_name?.data?.the_folder_name||`${d?.the_widget_name?.data?.the_name} ${d?.the_widget_version?.data?.the_version>1?"v"+d?.the_widget_version?.data?.the_version:""}`,p=d?.the_widget_description?.data?.the_description,m=d?.the_widget_thumbnail?.data?.the_thumbnail,g=d?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:u,timestamp:g,description:p,thumbnail:m}}));if(!i?.length){const l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",await Ne(z.folder_widget,l)),`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `}const s=(await Promise.all(i?.map(async l=>{const c=(await Z(l.id)).userId===e.userId,u=l.description?l.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link href="" class="folderWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${l?.id}">
              <div class="d-flex align-items-center" style="min-width: 0;">
                <span class="material-symbols-outlined me-2">drag_indicator</span>
                <div class="widget-info" style="word-wrap: break-word; min-width: 0;">
                  <div class="widget-name pe-2">${l.name||"Unnamed Widget"}</div>
                </div>
              </div>
              <div class="widget-actions d-flex align-items-center ms-auto" style="min-width: 100px;">
                <span class="material-symbols-outlined me-2" type="button" onclick="viewPublicWidgetDetails(event, '${l.name||"Unnamed Widget"}', '${l.thumbnail||""}', '${u||""}')" title="View Widget Details">
                  visibility
                </span>
                ${c?`
                  <span class="material-symbols-outlined me-2" data-pubwidid="${l.id}" onclick="removeMyWidgetFromPublic(event)" title="Remove from Public" type="button">
                    delete
                  </span>`:""}
                <span class="material-symbols-outlined" data-pubwidid="${l.id}" onclick="saveFromPublic(event)" title="Import Widget" type="button">
                  file_download
                </span>
              </div>
            </router-link>
          </li>
        `})||[])).join(""),r=document.getElementById("folder-widget-container");return r&&(r.style.display="block",r.innerHTML=s),s}catch(e){console.error("error",e),e?.status===401&&je()}}async function tc(){try{const n=await k();if(!n)return[];const e=await te("template_widget","",!1,n.userId,4,999);let t=new M;t.typeConnection="the_widget_template_name",t.name="widgetPName";let a=new M;a.typeConnection="the_widget_template_thumbnail",a.name="widgetThumbnail";let i=new M;i.typeConnection="the_template_widget_s_widget",i.name="widgetLevel",i.inpage=10,i.limit=!0,i.freeschemaQueries=[t,a];let o=new M;return o.conceptIds=[e.id],o.outputFormat=le,o.name="top",o.freeschemaQueries=[i],new Promise(s=>{_e(o,"").subscribe(r=>{const l=[];if(r&&r.length>0){const d=r[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const c of d)if(c?.data?.the_widget&&typeof c.data.the_widget=="object"){const u=c.data.the_widget?.the_widget_template_name?.data?.the_template_name,p=c.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(u||p)&&l.push({id:c.id||"",name:u||"Unnamed Template",thumbnail:p||""})}}s(l)})})}catch(n){return console.error("Error fetching templates:",n),[]}}async function nc(n,e){n.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const a=document.createElement("dialog");a.setAttribute("id","rename-widget-dialog"),a.classList.add("col-md-3"),a.innerHTML=`
          <h4>Rename Widget</h4>
          <form method="dialog" class="mt-3">
            <div class="mb-3">
              <label for="widgetName" class="form-label">New Widget Name</label>
              <input type="text" class="form-control" autocomplete="widget-name" name="widgetName" id="widgetName" value="" placeholder="e.g. first widget">
            </div>
    
            <div class="text-end">
              <button class="btn btn-secondary" onclick="closeModal('rename-widget-dialog')" type="button">Cancel</button>
              <button type="submit" class="btn btn-info">Save Now</button>
            </div>
          </form>
        `;const i=a.querySelector("form");return i&&i.addEventListener("submit",o=>no(o,"",e)),document.querySelector("body #app")?.appendChild(a),ce("rename-widget-dialog"),"OPENED"}catch(t){console.error("Failed to rename widget:",t)}}async function no(n,e="",t){n.preventDefault();let a="";if(e)a=e;else{const l=new FormData(n?.target);if(a=Object.fromEntries(l)?.widgetName,!a?.trim()){const c=n.target.querySelector("#widgetName");c?.focus(),c.style.border="2px solid red",c.style.outline="none",c.addEventListener("input",()=>{c.style.border=""});return}}const o=(await k())?.userId,s=document.getElementById("rename-widget-dialog"),r=s?.querySelector('button[type="submit"]');r.textContent="Saving";try{await Ue();const l=await rt(t,"the_widget_name","name",a,o);await N.SyncDataOnline();const d=s?.querySelector("input"),c=s?.querySelectorAll("button");if(c&&c.forEach(u=>{u.disabled=!0}),d&&(d.disabled=!0),l){$.renderSavedWidgets(),Ce("rename-widget-dialog"),A.successfullToast("Widget Renamed Successfully");const u=new URLSearchParams(window.location.search).get("widget-id");if(t===Number(u)){const p=document.getElementById("widget-builder");p.textContent=`Widget Builder Panel: ${a}`}return"widget Renamed successfully"}}catch(l){A.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",l)}}const La=async(n,e,t=!1)=>{const a=await pt(n,e),i=a?.data?.the_widget,o=i?.the_widget_name?.[0]?.data?.the_name,s=i?.the_widget_html?.[0]?.data?.the_html,r=i?.the_widget_clean?.[0]?.data?.the_clean,l=i?.the_widget_css?.[0]?.data?.the_css,d=i?.the_widget_js?.[0]?.data?.the_js,c=i?.the_widget_timestamp?.[0]?.data?.the_timestamp,u=i?.the_widget_widget?.[0].id,p=i?.the_widget_type?.[0]?.data?.the_type,m=i?.the_widget_after_render?.[0]?.data?.the_after_render,g=i?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,h=i?.the_widget_update?.[0]?.data?.the_update,w=i?.the_widget_mount_child?.[0]?.data?.the_mount_child;let y=[];const T=i?.the_widget_s_child;return T?.length&&(y=await Promise.all(T?.map(async b=>{const v=b?.data?.the_child_widget,S=v?.the_child_widget_type?.[0]?.data?.the_type,L=v?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,_=v?.the_child_widget_info?.[0]?.data?.id?v?.the_child_widget_info?.[0]?.data?.id:v?.the_child_widget_parent?.[0]?.data?.the_parent,C=await La(Number(_),e,t);return{id:b?.id,type:S,parent:_,wrapper:L,widget:C}}))),{id:a?.id,name:o,html:s,cleanHtml:r,css:l,js:d,timestamp:c,widgetId:u,typeValue:p,addEvent:m,onMount:g,onUpdate:h,mountChildWidgets:w,childs:y}},ac=async n=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await k(),t=e?.entityId,a=e?.userId,i=await Z(t);try{if(n.target?.files?.length>0){const o=[];for(let l=0;l<n.target?.files?.length;l++){const d=n.target?.files[l];if(d.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}o.push(xt(d))}const s=await Promise.all(o);for(let l=0;l<s.length;l++){const d=s[l];d.success||alert("Some file failed: "+d.message);const c=await te("the_asset",d.url||"",!1,a,4);await F(i,c,"s_asset")}await N.SyncDataOnline(),A.successfullToast(`Asset${s.length>1?"s":""} uploaded successfully`),new zl().setupAssetListener()}else{alert("No file found");return}}catch(o){throw console.error(o),o}document.getElementById("assets-upload-loader")?.classList.add("d-none")},ic=async(n,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{n.target.closest(".asset-item").remove(),await Me(e),A.successfullToast("Asset deleted successfully")}catch(a){console.error("Error deleting asset:",a),A.errorToast("Failed to delete asset")}};function oc(n){const e=document.getElementById(n);if(e){e.value="";const t=new Event("keyup");e.dispatchEvent(t),ao(n)}}function ao(n){const e=document.getElementById(n),t=document.getElementById(`${n}-clear`);e&&t&&(t.style.display=e.value?"block":"none",t.style.cursor=e.value?"default":"")}async function sc(n,e,t,a){n.preventDefault(),n.stopPropagation();const i=a.replace(/\\n/g,`
`).split(`
`).join("<br>"),o=`
    <dialog id="widget-detail-modal" class="col-md-6 a-dialog create-element-dialog">
      <div class="a-dialog-header d-flex justify-content-between">
        <span>Widget Details</span>
        <span class="material-symbols-outlined" style="cursor: pointer;" onclick="closeModal('widget-detail-modal')">close</span>
      </div>
      <div class="a-dialog-body">
        <div class="mb-3">
          <label class="form-label fw-bold">Widget Name</label>
          <p class="mb-0">${e||"Unnamed Widget"}</p>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Widget Preview</label>
          ${t?`<div class="rounded overflow-hidden">
              <img src="${t}" alt="${e}" class="img-fluid" style="max-height: 300px; width: 100%; object-fit: contain;">
             </div>`:`<div class="widget-placeholder p-5 text-center bg-light rounded">
              <span class="material-symbols-outlined fs-1 mb-2">image_not_supported</span>
              <p class="text-muted mb-0">No preview image available</p>
            </div>`}
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Description</label>
          ${i?`<p class="widget-description mb-0">${i}</p>`:'<div class="text-center p-3 bg-light rounded"><p class="text-muted mb-0">No description has been added for this widget</p></div>'}
        </div>
      </div>
    </dialog>
  `,s=document.getElementById("widget-detail-modal");s&&s.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",o),ce("widget-detail-modal")}window.viewPublicWidgetDetails=sc;window.openCSSEditor=At;class io{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let t=function(i){if(!i)return;const{wrapper:o}=i,s=o&&o!=="0"?`#${o}`:".content-target";a=a+`${s} { ${i.css} }`,i.children.forEach(r=>{t(r)})},a="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),t(f.widgetTree),this.styleElement.textContent=a}}async getWidgetHtml(e){let t=[];e.forEach(a=>{a.classList.forEach(i=>{t.push(i)})}),this.insertCSS(t)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your CSS here */",extensions:[dt,ut,qo(),rn(),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),ln.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(async t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateCSS(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const t of e)if(this.editorView){const{state:a,dispatch:i}=this.editorView;i({changes:{from:0,to:a.doc.length,insert:`.${t} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const ei=async n=>{const e=new pi,t=lc(n);if(Object.keys(t).length>0){const a=await e.validateField(t),i=await ta(a),o=ta(i);return dc(n,o)}},rc=async n=>{const t=await new pi().validateField(n);return Object.keys(t).length>0?{status:!1,details:ta(t)}:{status:!0}},lc=n=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},t=n?.attributes;if(Array.isArray(t))t.forEach(a=>{const i=cc(a);switch(a.name){case"name":e.fieldName=i||"";break;case"value":e.value=i||null;break;case"fieldtype":e.fieldType=i?i.trim():null;break;case"pattern":e.pattern=i||null;break;case"datatype":e.dataType=i?i.trim():null;break;case"typeconcept":e.conceptType=i||null;break;case"maxlength":e.maxLength=i?parseInt(i):null;break;case"minlength":e.minLength=i?parseInt(i):null;break;case"max":e.maxValue=i?parseInt(i):null;break;case"min":e.minValue=i?parseInt(i):null;break;case"accept":e.accept=i||null;break;case"file":e.file=i||null;break;case"required":e.required=i===!0;break;case"unique":e.isUnique=i===!0;break}});else throw console.error('attributesData["attributes"] is not an array',n.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},cc=n=>{switch(n.type){case"boolean":return n.value==="on";case"array":return n.selected||null;case"string":return n.value||null;default:return null}},ta=n=>({datatype:n.dataType,pattern:n.pattern,max:n.maxValue,min:n.minValue,minlength:n.minLength,maxlength:n.maxLength,accept:n.accept,file:n.file,required:n.required,unique:n.unique}),dc=(n,e)=>(n.attributes.forEach(t=>{const a=e[t.name];t.validationStatus=a?"invalid":"valid",t.validationErrorMessage=a||""}),n),uc=n=>({fieldName:n.getAttribute("name"),value:n instanceof HTMLInputElement?n.value:null,fieldType:n.getAttribute("fieldtype"),dataType:n.getAttribute("datatype"),pattern:n.getAttribute("pattern"),conceptType:n.getAttribute("typeconcept"),maxLength:n.getAttribute("maxlength"),minLength:n.getAttribute("minlength"),minValue:n.getAttribute("min"),maxValue:n.getAttribute("max"),file:n.hasAttribute("file"),accept:n.hasAttribute("accept"),required:n.hasAttribute("required"),isUnique:n.getAttribute("unique")==="on"});async function oo(n){let e=n.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",n.parentNode?.insertBefore(e,n.nextSibling)),e.innerHTML="";const t=uc(n),a=await rc(t);try{if(a.status)n.classList.remove("invalid"),n.classList.add("valid");else if(n.classList.remove("valid"),n.classList.add("invalid"),a.details&&typeof a.details=="object"){const i=document.createElement("span");i.className="error-message",i.style.color="red",i.style.fontSize="12px";const o=Object.values(a.details).filter(Boolean);i.innerHTML=o.join("<br>"),e.appendChild(i)}}catch(i){console.error("Validation error:",i);const o=document.createElement("span");o.className="error-message",o.style.color="red",o.textContent="Validation failed. Please try again.",e.appendChild(o)}}var nt=(n=>(n.STYLE="style",n.BOOLEAN="boolean",n.FORM="form",n.SPECIAL="special",n))(nt||{});const mc=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),xa=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],Aa=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],Zt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],pc=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Xt=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],Te=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),gc=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),hc=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),fc=new Set(["elementContent","className","id"]),so=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function wt(n){return n.toLowerCase()==="type"?!0:so.has(n.toLowerCase())}function Dt(n,e,t){const a=n.toLowerCase();if(a==="type"){const i=t?mc.get(t.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):i}return so.get(a)||[]}class _n{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=Jo}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,t){Kt.staticTabName=t;let a,i,o=document.getElementsByClassName("tabcontent");for(a=0;a<o.length;a++)o[a].style.display="none";for(i=document.getElementsByClassName("tablinks"),a=0;a<i.length;a++)i[a].className=i[a].className.replace(" active","");const s=document.getElementById(t);s.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let t=this;for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(o){const s=e[i].getAttribute("data-tab-id");t.openTab(o,s)});const a=document.querySelector(`button[data-tab-id='${Kt.staticTabName}']`);a?a.click():e?.[0]?.click()}sortAttributes(e){return e.sort((t,a)=>{if(!t?.name||!a?.name)return 0;const i=this.findAttributeInMap(t.name),o=this.findAttributeInMap(a.name);if(i==="Other"&&o!=="Other")return 1;if(i!=="Other"&&o==="Other")return-1;if(i===o){const s=this.categoryMap[i].findIndex(l=>l.toLowerCase()===t.name.toLowerCase()),r=this.categoryMap[o].findIndex(l=>l.toLowerCase()===a.name.toLowerCase());return s-r}return 0})}getCategoryForAttribute(e){if(!e)return"General";const t=e.toLowerCase();for(const[a,i]of Object.entries(this.categoryMap))if(a!=="Other"&&i.some(o=>o.toLowerCase()===t))return a;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,t){setTimeout(()=>{const a=document.getElementById("element-attributes");if(!a){this.setAttributes(e,t);return}a.innerHTML="";const i=document.createElement("div");if(i.className="row",a.appendChild(i),!e){i.innerHTML="";return}(async()=>await ei(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const s=this.sortAttributes(e.attributes),r={};s.forEach(d=>{const c=this.getCategoryForAttribute(d.name);r[c]||(r[c]=[]),r[c].push(d)});let l="";Object.entries(r).forEach(([d,c])=>{const u=c.map(m=>{let g="";if(m.name.toLowerCase()==="float")g=`
                  <div class="float-button-group">
                    <button type="button"
                            class="float-btn ${m.value==="none"?"active":""}"
                            onclick="updateElementAttribute(event, '${t}', ${e?.id})"
                            value="none" title="None">
                      <span class="material-symbols-outlined">close</span>
                    </button>
                    <button type="button" 
                            class="float-btn ${m.value==="left"?"active":""}"
                            onclick="updateElementAttribute(event, '${t}', ${e?.id})"
                            value="left" title="Left">
                      <span class="material-symbols-outlined">format_align_left</span>
                    </button>
                    <button type="button"
                            class="float-btn ${m.value==="right"?"active":""}"
                            onclick="updateElementAttribute(event, '${t}', ${e?.id})"
                            value="right" title="Right">
                      <span class="material-symbols-outlined">format_align_right</span>
                    </button>
                  </div>
                `;else if(m.name==="Alignment"){const h=e?.tag?.toLowerCase();xa.includes(h)&&(g=`
                    <div class="align-button-group">
                      <button type="button" 
                              class="align-btn ${m.value==="left"?"active":""}"
                              onclick="updateElementAttribute(event, '${t}', ${e?.id})"
                              value="left" title="Left">
                        <span class="material-symbols-outlined">format_align_left</span>
                      </button>
                      <button type="button"
                              class="align-btn ${m.value==="center"?"active":""}"
                              onclick="updateElementAttribute(event, '${t}', ${e?.id})"
                              value="center" title="Center">
                        <span class="material-symbols-outlined">format_align_center</span>
                      </button>
                      <button type="button"
                              class="align-btn ${m.value==="right"?"active":""}"
                              onclick="updateElementAttribute(event, '${t}', ${e?.id})"
                              value="right" title="Right">
                        <span class="material-symbols-outlined">format_align_right</span>
                      </button>
                      <button type="button"
                              class="align-btn ${m.value==="justify"?"active":""}"
                              onclick="updateElementAttribute(event, '${t}', ${e?.id})"
                              value="justify" title="Justify">
                        <span class="material-symbols-outlined">format_align_justify</span>
                      </button>
                    </div>
                  `)}else if(m.name==="Font Family"){const h=e?.tag?.toLowerCase();if(Aa.includes(h)&&wt(m.name)){const y=Dt(m.name,m.value,e?.tag).map(T=>{const E=T.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${T}" ${E?"selected":""}>${T}</option>`}).join("");g=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${y}
                      </select>
                    `}}else if(m.name==="Font Weight"){const h=e?.tag?.toLowerCase();if(Zt.includes(h)&&wt(m.name)){const y=Dt(m.name,m.value,e?.tag).map(T=>{const E=T.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${T}" ${E?"selected":""}>${T}</option>`}).join("");g=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                        <option value="">Select ${m.name}</option>
                        ${y}
                      </select>
                    `}}else{if(m.name==="Height"||m.name==="Width"||m.name==="Minimum-Height"||m.name==="Minimum-Width"||m.name==="Maximum-Height"||m.name==="Maximum-Width")return m.name==="Height"||m.name==="Width"?`
                    <div class="col-6 my-2">
                      <div class="attribute-row row">
                        <div class="col-12">
                          <div class="attribute-name mb-1">${m.name}</div>
                          <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${t}', ${e?.id})" value="${m?.value||""}">
                        </div>
                      </div>
                    </div>`:m.name==="Minimum-Height"?`
                    <div class="more-size-option accordion-wrapper">
                      <a onclick="toggleDisplay(event, 'advanced-size')" class="more-size-button">
                        <div>More Size options</div>
                        <span class="material-symbols-outlined">expand_more</span>
                      </a>
                    </div>
                    <div id="advanced-size" style="display: none;">
                      <div class="row">
                        <div class="col-6">
                          <div class="attribute-row">
                            <div class="col-12">
                              <div class="attribute-name mb-1">${m.name}</div>
                              <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${t}', ${e?.id})" value="${m?.value||""}">
                            </div>
                          </div>
                        </div>`:m.name==="Minimum-Width"?`
                    <div class="col-6">
                      <div class="attribute-row">
                        <div class="col-12">
                          <div class="attribute-name mb-1">${m.name}</div>
                          <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${t}', ${e?.id})" value="${m?.value||""}">
                        </div>
                      </div>
                    </div>
                  </div>`:m.name==="Maximum-Height"?`
                    <div class="row">
                      <div class="col-6">
                        <div class="attribute-row">
                          <div class="col-12">
                            <div class="attribute-name mb-1">${m.name}</div>
                            <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${t}', ${e?.id})" value="${m?.value||""}">
                          </div>
                        </div>
                      </div>`:m.name==="Maximum-Width"?`
                    <div class="col-6">
                      <div class="attribute-row">
                        <div class="col-12">
                          <div class="attribute-name mb-1">${m.name}</div>
                          <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${t}', ${e?.id})" value="${m?.value||""}">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const h=(m.value||"0 0 0 0").split(" ").map(b=>b.trim()).map(b=>/^\d+$/.test(b)?`${b}px`:b);for(;h.length<4;)h.push("0px");const[w,y,T,E]=h;return m.name==="Margin"?`
                  <div class="spacing-tabs">
                    <button type="button" class="spacing-tab-btn margin-tab active" onclick="toggleSpacingBox(this, 'margin')">
                      Margin
                    </button>
                    <button type="button" class="spacing-tab-btn padding-tab" onclick="toggleSpacingBox(this, 'padding')">
                      Padding
                    </button>
                  </div>
                  <div class="col-12 my-1">
                    <div class="attribute-row row">
                    <div class="attribute-name mb-1" style="display: none;">${m.name}</div>
                      <div class="margin-control">
                        <div class="margin-box">
                          <div class="margin-edge top" data-value="${w}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${w}</span>
                            <input type="text" 
                              class="edge-input"
                              value="${w}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: [this.value, '${y}', '${T}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge right" data-value="${y}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${y}</span>
                            <input type="text"
                              class="edge-input"
                              value="${y}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${T}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge bottom" data-value="${T}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${T}</span>
                            <input type="text"
                              class="edge-input"
                              value="${T}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${y}', this.value, '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge left" data-value="${E}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${E}</span>
                            <input type="text"
                              class="edge-input"
                              value="${E}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${y}', '${T}', this.value].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`:m.name==="Padding"?`
                  <div class="col-12 my-1 hidden">
                    <div class="attribute-row row">
                    <div class="attribute-name mb-1" style="display: none;">${m.name}</div>
                      <div class="padding-control">
                        <div class="padding-box">
                          <div class="padding-edge top" data-value="${w}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${w}</span>
                            <input type="text" 
                              class="edge-input"
                              value="${w}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: [this.value, '${y}', '${T}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge right" data-value="${y}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${y}</span>
                            <input type="text"
                              class="edge-input"
                              value="${y}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${T}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge bottom" data-value="${T}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${T}</span>
                            <input type="text"
                              class="edge-input"
                              value="${T}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${y}', this.value, '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge left" data-value="${E}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${E}</span>
                            <input type="text"
                              class="edge-input"
                              value="${E}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${y}', '${T}', this.value].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`:""}else if(m?.type==="string")if(m.name==="elementContent")g=`<textarea 
                    class="form-control" 
                    rows="4" 
                    onchange="updateElementAttribute(event, '${t}', ${e?.id})"
                    >${m?.value||""}</textarea>`;else if(wt(m.name)){const w=Dt(m.name,m.value,e?.tag).map(y=>`<option value="${y}" ${y===m?.value?"selected":""}>${y}</option>`).join("");g=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else g=`<input type="text" class="form-control" onchange="updateElementAttribute(event, '${t}', ${e?.id})" value="${m?.value||""}">`;else if(m?.type==="color")g=`
                  <div class="color-input-wrapper">
                    <input type="color" 
                      class="color-picker-input" 
                      onchange="updateElementAttribute(event, '${t}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                    <input type="text" 
                      class="form-control color-code-input" 
                      onchange="updateElementAttribute(event, '${t}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                  </div>`;else if(m?.type==="boolean")g=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${t}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(wt(m.name)){const w=Dt(m.name,m.value,e?.tag).map(y=>{const T=y.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${y}" ${T?"selected":""}>${y}</option>`}).join("");g=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else{const w=(m?.value?.split(",")||[]).map(y=>`<option value="${y}" ${y===m?.selected||y===m?.value?"selected":""}>${y}</option>`).join("");g=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      ${w}
                    </select>
                  `}}return m.validationStatus==="invalid"&&(g+=`
                  <span style="color:red;font-size:12px;">${m.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${m.name}</div>
                    <div class="col-7">${g}</div>
                  </div>
                </div>
              `}).join(""),p=d==="General"||d==="Display"||d==="Typography"||d==="Size"||d==="Spacing"||d==="Borders"||d==="Colors"||d==="Other";l+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${d.toLowerCase()}-content')">
                  <div class="category-title">${d}</div>
                  <span class="material-symbols-outlined">${p?"do_not_disturb_on":"add_circle"}</span>
                </div>
                <div class="category-content" id="${d.toLowerCase()}-content" style="display: ${p?"block":"none"}" data-category-state="${p?"open":"closed"}">
                  <div class="row">
                    ${u}
                  </div>
                </div>
              </div>
            `}),i.innerHTML=l}}),Rt()},0)}setAttributesForMultipleElements(e){const t=async()=>await ei(e);if(!e){const i=document.getElementById("element-attributes").querySelector(".row");i.innerHTML="";return}t().then(()=>{if(e?.attributes&&e?.attributes?.length){const a={};e.attributes.forEach(s=>{const r=this.getCategoryForAttribute(s.name);a[r]||(a[r]=[]),a[r].push(s)});let i="";Object.entries(a).forEach(([s,r])=>{if(r.length){const l=r.map(c=>{let u="";return c?.type==="string"?u=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${c?.value||""}">`:c?.type==="color"?u=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${c?.value||"#000000"}">`:c?.type==="boolean"?u=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${c?.value&&c?.value!=="false"?"checked":""}>`:c?.type==="array"&&(u=`
                  <select class="form-select" onchange="updateMultipleElementAttribute(event)">
                    ${c?.value?.split(",")?.map(g=>`<option value="${g}" ${g===c?.selected?"selected":""}>${g}</option>`).join("")}
                  </select>
                `),c.validationStatus==="invalid"&&(u+=`
                  <span style="color:red;font-size:12px;">${c.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${c.name}</div>
                    <div class="col-7">${u}</div>
                  </div>
                </div>
              `}).join(""),d=s==="General"||s==="Display"||s==="Typography"||s==="Size"||s==="Spacing"||s==="Borders"||s==="Colors";i+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${s.toLowerCase()}-content')">
                  <div class="category-title">${s}</div>
                  <span class="material-symbols-outlined">${d?"expand_less":"expand_more"}</span>
                </div>
                <div class="category-content" id="${s.toLowerCase()}-content" style="display: ${d?"block":"none"}" data-category-state="${d?"open":"closed"}">
                  <div class="row">
                    ${l}
                  </div>
                </div>
              </div>
            `}});const o=document.getElementById("element-attributes");o&&(o.innerHTML=i)}})}async getHtml(){window.updateWidgetTypeValue=co,window.toggleDisplay=At,window.updateElementAttribute=En,window.updateMultipleElementAttribute=po,window.handlePageProperties=mo,window.updateCSSLibrary=Xe,window.updateJSLibrary=et,window.addJSLibrary=fo,window.addCSSLibrary=ho,window.openRenameCustomFunction=ot.openRenameCustomFunction,window.deleteCustomFunction=ot.deleteCustomFunction,setTimeout(async()=>{ot.initializeCodeBlock();const i=new io,o=document.getElementById("css-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor(),ka()},0),setTimeout(async()=>{await new Mi().initializeEditor()},0),setTimeout(async()=>{const i=new Pi,o=document.getElementById("js-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor()},0),setTimeout(async()=>{await new ie("onmount-editor-split").initializeEditor(),await new ie("onupdate-editor-split").initializeEditor(),await new ie("addevents-editor-split").initializeEditor(),await new ie("mountchildwidgets-editor-split").initializeEditor(),await new ie("widgetDependencies-editor-split").initializeEditor();const d=document.getElementById("publish-widget");d&&d.addEventListener("click",async c=>{c.preventDefault();try{await f.publish()}catch(u){console.error("error publishing widget",u),u instanceof Error&&A.errorToast(u.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let t="",a="";if(this.the_params){const i=this.the_params?.data?.the_page_html_cache?.data?.the_html_cache||"",o=this.the_params?.data?.the_page_css_cache?.data?.the_css_cache||"";fe.staticHTMLCache=i,fe.staticCSSCache=o;const s=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";s&&Le("meta_title",s);const r=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";r&&Le("meta_description",r);const l=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";l&&Le("meta_keywords",l);const d=this.the_params?.data?.the_page_width?.data?.the_width||"";d&&Le("width",d);const c=this.the_params?.data?.the_page_font_size?.data?.the_font_size;c&&Le("font_size",c);const u=this.the_params?.data?.the_page_font_family?.data?.the_font_family;u&&Le("font_family",u);const p=this.the_params?.data?.the_page_type?.data?.the_type;p&&Le("type",p);const m=()=>Array.from({length:13},(w,y)=>12+y).map(w=>{const y=c==w?"selected":"";return`<option value="${w}" ${y}>${w}</option>`}).join(""),g=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(y=>{const T=u==y.toLowerCase()?"selected":"";return`<option value="${y.toLowerCase()}" ${T}>${y}</option>`}).join(""),h=()=>["Fluid","Fixed"].map(y=>{const T=p==y.toLowerCase()?"selected":"";return`<option value="${y.toLowerCase()}" ${T}>${y}</option>`}).join("");t=`
        <button class="tablinks" data-tab-id="wico-tab-pageInfo">Page info</button>
      `,a=`
      <!--<div class="column-title accordion-wrapper page-properties">
        <a onclick="toggleDisplay(event, 'page-properties')" class="open_css_editor">
          <h3>Page Properties</h3>
          <span class="material-symbols-outlined"> expand_more </span>
        </a>
      </div> -->
      <!-- <div class="right_sidebar p-3 sidebar_properties" id="page-properties" style="display: none;"> -->
      <div class="right_sidebar p-3 sidebar_properties" id="page-properties">
        <div class="row">
          <div class="d-flex flex-column gap-2">
            <label for="html_cache">HTML cache:</label>
            <textarea name="input-html_cache" id="html_cache" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${i}</textarea>
          </div>
          <div class="d-flex flex-column gap-2">
            <label for="css_cache">CSS cache:</label>
            <textarea name="input-css_cache" id="css_cache" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${o}</textarea>
          </div>
          <div class="d-flex flex-column gap-2">
            <label for="meta_title">Meta Title:</label>
            <input type="text" name="input-meta_title" id="meta_title" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}" value="${s}">
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="meta_description">Meta Description:</label>
            <textarea name="input-meta_description" id="meta_description" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${r}</textarea>
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="meta_keywords">Meta Keywords:</label>
            <textarea name="input-meta_keywords" id="meta_keywords" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${l}</textarea>
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="width">Page Width:</label>
            <input type="text" name="input-page_width" id="width" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}" value="${d}">
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="type">Page Type:</label>
            <select name="type" id="type" class="form-select" onchange="handlePageProperties(event)" data-page_id="${e}">
              ${h()}
            </select>
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="font_family">Font Family:</label>
            <select name="input-font_family" id="font_family" class="form-select" onchange="handlePageProperties(event)" data-page_id="${e}">
              <option value="">Select Font Family</option>  
              ${g()}
            </select>
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="font_size">Font Size:</label>
            <select name="input-font_size" id="font_size" class="form-select" onchange="handlePageProperties(event)" data-page_id="${e}">
              <option value="">Select Font Size</option>
              ${m()}
            </select>
          </div>
        </div>
      </div>
    `}return`
    <div id="tab-container">
      <div class="tab">
        <button class="tablinks" data-tab-id="wico-tab-vccs">Visual Aid</button>
        <button class="tablinks" data-tab-id="wico-tab-navigator">Navigator</button>
        <button class="tablinks" data-tab-id="wico-tab-styles">Styles</button>
        <button class="tablinks" data-tab-id="wico-tab-widgetInfo">Widget info</button>
        <button class="tablinks" data-tab-id="wico-tab-libraries">Libraries</button>
        ${t}
      </div>

      <div id="wico-tab-vccs" class="tabcontent" style="display: block;">
        <div class="overflow-auto px-0">
          <div class="dom-navigator">
            <div id="tree-root-vccs">
              <div class="text-center my-3 text-secondary">
                <p>The vccs panel is empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="wico-tab-navigator" class="tabcontent" style="display: block;">
        <div class="overflow-auto pt-2 pb-3" id="navigator-container">
          <!-- DOM Navigator -->
          <div class="dom-navigator">
            <button id="toggle-all" class="toggle-all-btn">
              <span class="material-symbols-outlined" title="Expand all">unfold_more</span>
            </button>
            <div id="tree-root">
              <div class="text-center my-3 text-secondary">
                <p>The builder panel is empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="wico-tab-pageInfo" class="tabcontent" style="display: none;">
        ${a}
      </div>

      <div id="wico-tab-widgetInfo" class="tabcontent" style="display: none;">
        <div class="right_sidebar p-3 sidebar_properties" id="widget-properties">
          <div class="row py-2">
            <div class="py-2 mb-0 d-flex flex-column gap-2" >
              <label for="widgetname" id="widget-name">Widget Name:</label>
              <input type="text" name="input-widgetNameValue" id="widgetNameValue" class="form-control" readonly>
            </div>
            <div class="py-2 mb-0 d-flex flex-column gap-2" id="widget-type">
              <label for="widgetTypeValue">Type value:</label>
              <input type="text" name="input-widgetTypeValue" id="widgetTypeValue" onchange="updateWidgetTypeValue(event)" class="form-control" placeholder="e.g. the_entity_type">
            </div>
            <div class="py-2 mb-0 flex-column gap-2 d-none" id="widget-version">
              <label for="widgetVersionValue">Widget Versions:</label>
            </div>
            <div class="py-2 mb-0 d-flex align-items-center justify-content-center gap-2" id="publishWidgetBtnContainer">
              <button id="publish-widget" class="btn btn-primary my-2" style="display: none" disabled=true></button>
            </div>
          </div>
        </div>
      </div>

      <div id="wico-tab-styles" class="tabcontent" style="display: none;">
        <div class="right_sidebar py-1 px-3 container sidebar_properties" id="element-attributes">
          <div class="row">
            <div class="text-center my-3 text-secondary">
              <p>Select an element to view and edit its attributes</p>
            </div>
          </div>
        </div>
      </div>
      
      <div id="wico-tab-libraries" class="tabcontent" style="display: none;">
        <div class="px-2" id="library-section">
          <div class="my-2 border-bottom">
            <div class="rounded mb-2 accordion-wrapper">
            <a class="p-2" onclick="toggleDisplay(event, 'library-css')">
              <p class="mb-0">CSS</p>
                <span class="material-symbols-outlined"> expand_more </span>
              </a>
            </div>
            <div id="library-css" class="css-library-container">
              <ul id="sortable-list" class="list"></ul>
              <button id="add-list" class="add-button" onclick="addCSSLibrary()">Add another CSS resource</button>
            </div>
          </div>
          <div class="mb-2">
            <div class="rounded accordion-wrapper">
            <a class="p-2" onclick="toggleDisplay(event, 'library-js')">
              <p class="mb-0">JavaScript</p>
                <span class="material-symbols-outlined"> expand_more </span>
              </a>
            </div>
            <div id="library-js" class="js-library-container">
              <ul id="sortable-js-list" class="list">
              </ul>
              <button id="add-js-list" class="add-button" onclick="addJSLibrary()">Add another JS resource</button>
            </div>
          </div>
        </div>
      </div>
    </div>

      <!-- <div class="column-title accordion-wrapper accordion-header-navigator">
        <a onclick="toggleDisplay(event, 'navigator-container')">
          <h3 id="nav-text">Navigator</h3>
          <span class="material-symbols-outlined"> expand_more </span>
        </a>
      </div>
      <div class="border overflow-auto pt-2 pb-3" id="navigator-container">
        <div class="dom-navigator">
          <button id="toggle-all" class="toggle-all-btn">
            <span class="material-symbols-outlined" title="Expand all">unfold_more</span>
          </button>
          <div id="tree-root">
            <div class="text-center my-3 text-secondary">
              <p>The builder panel is empty</p>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="column-title accordion-wrapper accordion-widget-properties">
        <a onclick="toggleDisplay(event, 'widget-properties')" class="open_css_editor">
          <h3>Widget Properties</h3>
          <span class="material-symbols-outlined"> expand_more </span>
        </a>
      </div>
      <div class="right_sidebar p-3 sidebar_properties" id="widget-properties">
        <div class="row py-2">
          <div class="py-2 mb-0 d-flex flex-column gap-2" >
            <label for="widgetname" id="widget-name">Widget Name:</label>
            <input type="text" name="input-widgetNameValue" id="widgetNameValue" class="form-control" readonly>
          </div>
          <div class="py-2 mb-0 d-flex flex-column gap-2" id="widget-type">
            <label for="widgetTypeValue">Type value:</label>
            <input type="text" name="input-widgetTypeValue" id="widgetTypeValue" onchange="updateWidgetTypeValue(event)" class="form-control" placeholder="e.g. the_entity_type">
          </div>
          <div class="py-2 mb-0 flex-column gap-2 d-none" id="widget-version">
            <label for="widgetVersionValue">Widget Versions:</label>
          </div>
          <div class="py-2 mb-0 d-flex align-items-center justify-content-center gap-2" id="publishWidgetBtnContainer">
            <button id="publish-widget" class="btn btn-primary my-2" style="display: none" disabled=true></button>
          </div>
        </div>
      </div> -->

      <!-- <div class="column-title accordion-wrapper">
        <a onclick="toggleDisplay(event, 'element-attributes')" class="open_css_editor" id="icon-attribute">
          <h3>Styles</h3>
          <span class="material-symbols-outlined"> expand_more </span>
        </a>
      </div>
      <div class="right_sidebar py-1 px-3 container sidebar_properties" id="element-attributes">
        <div class="row">
          <div class="text-center my-3 text-secondary">
            <p>Select an element to view and edit its attributes</p>
          </div>
        </div>
      </div> -->

      <!-- <div class="column-title accordion-wrapper">
        <a onclick="toggleDisplay(event, 'library-section')" class="open_css_editor">
          <h3>Libraries</h3>
          <span class="material-symbols-outlined"> expand_more </span>
        </a>
      </div>
      <div class="border px-2" id="library-section">
        <div class="my-2 border-bottom">
          <div class="rounded mb-2 accordion-wrapper">
          <a class="p-2" onclick="toggleDisplay(event, 'library-css')">
            <p class="mb-0">CSS</p>
              <span class="material-symbols-outlined"> expand_more </span>
            </a>
          </div>
          <div id="library-css" class="css-library-container">
            <ul id="sortable-list" class="list"></ul>
            <button id="add-list" class="add-button" onclick="addCSSLibrary()">Add another CSS resource</button>
          </div>
        </div>
        <div class="mb-2">
          <div class="rounded accordion-wrapper">
          <a class="p-2" onclick="toggleDisplay(event, 'library-js')">
            <p class="mb-0">JavaScript</p>
              <span class="material-symbols-outlined"> expand_more </span>
            </a>
          </div>
          <div id="library-js" class="js-library-container">
            <ul id="sortable-js-list" class="list">
            </ul>
            <button id="add-js-list" class="add-button" onclick="addJSLibrary()">Add another JS resource</button>
          </div>
        </div>
      </div> -->

      <div class="code_blocks">
        <div id="css-editor-container">
        </div>

        <div id="js-editor-container">
        </div>

        <!--
        <div class="column-title d-flex justify-content-between align-items-center">
          <h3>Element Content</h3>
        </div>
        
        <div id="editor">
        </div>
        -->
      </div>
    `}}async function Wa(n){let e=ga.filter(a=>a.id==n)[0];return!n||n==="null"?void 0:{id:n,attributes:wr,tag:"div",name:`Layout: ${e?.name}`}}async function yc(){return{id:1,name:"Global",tag:"div",attributes:ns}}class Bn{static editor}function vc(n,e,t){const a=t?.id,i=document.getElementById("editor");i?.setAttribute("wrapper-id",e),i?.setAttribute("element-id",a),i?.setAttribute("element-clicked","true"),Bn.editor&&t?.void?Bn.editor.setData(n):t?.void||Bn.editor?.setData("")}window.showdWidgetProperties=bc;window.widgetSelected=Tc;function wc(n,e){let t;if(e.data_type=="layout"){const a=ga.filter(l=>l.name==e.data_text)[0],r=new DOMParser().parseFromString(a?.html,"text/html").body.querySelector("div");r.setAttribute("element-info-id",n),t=r.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?t=`<${e?.data_type} element-info-id="${n}">${e?.data_default}</${e?.data_type}>`:t=`<${e?.data_type} element-info-id="${n}">`;return`${t}`}async function bc(n,e){const t=n.target.closest(".added-widget-container"),a=t.id,i=t.getAttribute("data-widgetid");if(i){const E=(await k())?.token,v=(await pt(Number(i),E))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new _n().initializeView();const L=document.getElementById("widgetNameValue");L&&(L.value=v)}const s=(await k())?.userId,r=await di(a,s);console.warn("savedWidgetProperties on widget Selected ->",r);let l="";r?.length&&(r?.length>1&&r?.sort((b,v)=>{const S=new Date(b?.created_at).getTime();return new Date(v?.created_at).getTime()-S}),l=r?.[0]?.data?.[a]?.properties?.filter(b=>b.name==="widget-type")?.[0]?.value);const d=document.getElementById("widgetTypeValue");d.setAttribute("data-widgetcontainerid",a),d.setAttribute("data-mainwidgetid",`${e}`),d.value=l;const u=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,h=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,w=document.querySelector(".content-target"),y=new kt;l&&await y.getTypeValueList(l),y.componentDidMountFunction=u,y.addEventFunction=m,y.mountChildWidgetsFunction=h,await y.mount(w)}function _c(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(a=>{const i=document.querySelector(a);i&&(i.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const t=document.querySelector('.editor-container .cm-content[data-language="javascript"]');t.textContent="/* Write your JavaScript here */"}const it=async()=>{const n=document.getElementById("element-info");n.style.display="none"},bt=async n=>{const e=n?.target;let t=e?.tagName;const a=e?.classList?.contains("fslayout-row"),i=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))t="WIDGET",i.classList.add("widget-marker");else if(a)t="Layout Element",i.classList.remove("widget-marker");else if(e?.closest("#widget-details")){t="",i.classList.remove("widget-marker");return}else i.classList.remove("widget-marker");const o=e.getBoundingClientRect(),s=o.left,r=o.top;i.style.display="block",new ResizeObserver(()=>{i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.top=`calc(${r}px)`,i.style.left=`calc(${s}px)`}).observe(e);const d=document.getElementById("element-info_details");d.innerHTML=`<span>${t}</span>`;const c=document.getElementById("select-box"),u=document.getElementById("builder-workarea");u.addEventListener("scroll",Va),u.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");c.style.transition="0.2s ease all";const g=document.getElementById("element-info");m||(g.style.display="block"),g.style.height="0",g.style.width="0"}),u.addEventListener("resize",Va)},at=async n=>{n.preventDefault();const e=n.target;Gl("navigator-container"),Be.publish("page:elementClick",e);const t=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details"))return;const a=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",a);const i=e;R?.previousSelectedStaticElement?.removeAttribute("draggable"),R.staticElement=i,R.previousSelectedStaticElement=R.staticElement,R.staticElement.setAttribute("draggable","true");const o=i.getBoundingClientRect();Ec(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),R.staticElement=e;const v=e?.tagName.toLowerCase(),_=gt.staticElementList?.filter(C=>{const x=C?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return v===x})?.[0]?.id;En(n,"",_)}));const r=o.left,l=o.top;Bt.resetNavigationBar();const d=e;let c;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?c=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(c=e.closest(".edited-widget-container"));const u=e.classList.contains("added-widget-container");if(c||u){let v="";u?v=e?.id:c&&(v=c?.id);const S=[];let L=0;async function _(x,W){return x.reduce((P,B,q)=>(B.wrapper===W&&(P.push(B),L=q),B.children&&B.children.length>0&&_(B.children,W),P),S)}const C=await _(f?.staticWidgetTree?.children,v);f.selectedStaticWidgetTreeInfo={widgetTree:C[0],isChildWidget:!0,childWidgetIndex:L},await Fe(C[0]),await X(C[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await Fe(f?.staticWidgetTree),X(f?.staticWidgetTree,!1);if(d?.id&&(f.updatedWidgets[d.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const v=document.getElementById("widgetType");v&&(v.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const p=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");p&&(!p?.style?.display||p?.style?.display==="none")&&m&&(p.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(v=>v.remove());let h=!1;if(n instanceof KeyboardEvent&&n.ctrlKey){if(d?.classList.contains("added-widget-container")){A.infoMessageToast("Widget can't be selected");return}d?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(S=>{const L=S.parentElement?.classList,_=S?.classList,C=S.firstChild?.classList,x=L&&L.contains("added-widget-container");let P=_&&_.contains("fslayout-row")||C&&C.contains("fslayout-row")?"Layout":S.tagName;if(x||h){h=!0;return}const B=document.createElement("div");B?.classList.add("tag-name"),B.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${P}
        </span>
      `,S?.parentElement?.appendChild(B)}),h?(A.infoMessageToast("Widget can't be selected"),d?.classList.toggle("widget_selected"),d?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await ro());return}const w=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const v=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;w&&v&&(w.value=v)}else w&&(w.value=f?.staticWidgetTree.name);const y=document.getElementById("select-box");y.style.display="block";const T=new ResizeObserver(()=>{y.style.width=e.offsetWidth+"px",y.style.height=e.offsetHeight+"px",y.style.top=`calc(${l}px)`,y.style.left=`calc(${r}px)`}),E=document.getElementById("publishWidgetBtnContainer");if(E){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(E.classList.remove("d-none"),E.classList.add("d-flex")):(E.classList.remove("d-flex"),E.classList.add("d-none")),console.log("prev selected widget",t,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const v=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,S=v.origin||v.id,L=v.version?v.version.toString():"original";typeof $.initializeWidgetVersions=="function"&&$.initializeWidgetVersions(S,L,v?.timestamp)}catch(v){console.error("Error showing widget versions:",v)}}T.observe(e);const b=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?b.style.display="block":b.style.display="none",(c||u)&&!e.closest(".edited-widget-container")){const S=document.getElementById("element-attributes").querySelector(".row");S.innerHTML="",mn(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await en(d)};function Ec(n){return typeof n.contentEditable<"u"&&xs.includes(n.tagName.toLowerCase())}async function Tc(n){n.preventDefault(),n.stopPropagation()}async function en(n){let e;if(n?.dataset?.widgetid)return;const t=n?.tagName.toLowerCase(),i=gt.staticElementList?.filter(u=>{const p=u?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return t===p}),o=i?.[0]?.id,s=n.classList.contains("fslayout-row"),r=n?.firstChild?.classList?.contains("fslayout-row");if(s||r)e=await Wa(o),e?.attributes?.length&&(e.attributes=e?.attributes.map(u=>({...u,selected:"",value:u.name==="class"?"":u.value})));else if(o)e=await $t(i);else if(Ke.includes(t)||Mt.includes(t)){const u=Ls.map(p=>{const m=p.name.toLowerCase(),g=Te.get(m)||Te.get(p.name);return g?{...p,value:n.style[g.property]||""}:{...p,value:m==="classname"?n.className||"":m==="id"&&n.id||""}});t==="iframe"&&u.push({name:"src",type:"string",value:n.getAttribute("src")||""}),Ke.includes(t)&&u.push({name:"elementContent",type:"string",value:n.textContent||""}),e={tag:t,attributes:u}}e.attributes=e?.attributes?.map(u=>u?.name?(u.value=vo(n,u.name),u):(console.warn("Found attribute without name:",u),u)).filter(Boolean);let l="";const d=e?.attributes;d?.length&&(l=d?.filter(p=>p?.name==="elementContent")?.[0]?.value,vc(l,n?.id,e),mn(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new _n()?.setAttributes(e,n?.id)}async function ro(){let n;n=await yc(),n?.attributes?.length&&(n.attributes=n?.attributes.map(t=>({...t,value:""}))),new _n()?.setAttributesForMultipleElements(n)}const Sc=new tt;async function Cc(n){return new Promise(async e=>{const t=await lo(n);e(t)})}async function lo(n){return new Promise(async e=>{let t=new G;t.composition=n,t.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],t.inpage=100;let a=new G;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const r=(await Se([t,a],""))?.data?.the_element?.the_element_s_attribute?.map(u=>{const p=u?.data?.the_attribute,m=p?.the_attribute_name?.[0]?.data?.the_name,g=p?.the_attribute_type?.[0]?.data?.the_type,h=p?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:g,value:h}}),l=r?.map(u=>{let p;return u?.type==="string"?p='<input type="text" class="form-control" onchange="updateAttribute(event)">':u?.type==="boolean"?p='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':u?.type==="array"&&(p=`
            <select class="form-control" onchange="updateAttribute(event)">
              ${u?.value?.split(",")?.map(h=>`<option value="${h}">${h}</option>`)}
            </select>
          `),`
          <div class="col-6 my-2">
            <div class="row attribute-row">
            <div class="col-5 attribute-name">
              ${u.name}
            </div>
            <div class="col-7">
              ${p}
            </div>
            </div>
          </div>
        `}).join("");let d,c=setInterval(async()=>{d&&(clearInterval(c),r?.forEach(u=>{u?.type!=="boolean"&&d?.setAttribute(u?.name,"")})),d=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(l)})}async function co(n){const t=(n?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=t,H.updateActionHistories()}async function Lc(n){const e=n.target,t=e.closest(".widget_container"),a=t.getAttribute("data-elementId"),i=e.textContent?.trim(),o=document.querySelectorAll("#element-attributes .attribute-row");for(const s of o)if(s.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const l=s.querySelector("input");if(l&&l.value!==i){l.value=i||"",await En({target:e,type:"text",value:i,isDirectEdit:!0},t,a);break}}}async function xc(n,e,t,a){console.log("updateElementAttributeViaEditor ->",e,t),n?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),n=R.staticElement;let o;const s=n?.tagName.toLowerCase(),l=gt.staticElementList?.filter(p=>{const m=p?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return s===m});o=await $t(l),n?.classList.remove("wb-initial-empty");const d=a?.value,c=a?.attribute,u=R.staticElement;if(u){if(c==="className")u?.setAttribute("class",d);else if(c==="height"){const p=d?.trim(),m=/^\d+$/.test(p)?`${p}px`:p;u.style.height=m}else if(c==="width"){const p=d?.trim(),m=/^\d+$/.test(p)?`${p}px`:p;u.style.width=m}else if(c==="elementContent")if(!u?.childNodes?.length)u.innerHTML=d;else for(let p of u?.childNodes){const m=p;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=d;break}}else{const g=document.createTextNode(d);u.insertBefore(g,u.firstChild);break}}else u?.setAttribute(c,d?.trim());o.attributes=o?.attributes?.map(p=>(p?.name===c&&(p?.type==="array"?p.selected=d:p.value=d),p)),await en(n)}}async function En(n,e,t){try{const a=n.target.closest(".category-content"),i=a?.id,o=a?.style.display!=="none",r=document.getElementById("advanced-size")?.style.display==="block",c=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),u=document.querySelector(".margin-control")?.closest(".col-12"),p=document.querySelector(".padding-control")?.closest(".col-12"),m=!u?.classList.contains("hidden"),g=!p?.classList.contains("hidden");e=R.staticElement,e?.classList.remove("wb-initial-empty");const h=e?.tagName?.toLowerCase();let w;const y=e?.classList?.contains("fslayout-row"),T=e?.firstChild?.classList?.contains("fslayout-row");if(y||T)w=await Wa(t);else{const C=gt.staticElementList?.filter(x=>{const W=x?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return h===W});if(C?.length)w=await $t(C);else if(Ke.includes(h)||Mt.includes(h)){const x=n?.target?.value,W=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(W==="className")e.setAttribute("class",x);else if(W==="elementContent"&&Ke.includes(h))e.textContent=x;else if(W==="id")e.id=x;else if(W==="Height"){const P=x?.trim(),B=/^\d+$/.test(P)?`${P}px`:P;e.style.height=B}else if(W==="Width"){const P=x?.trim(),B=/^\d+$/.test(P)?`${P}px`:P;e.style.width=B}else if(W==="Margin"){const B=(x?.trim().split(/\s+/)).map(q=>/^\d+$/.test(q)?`${q}px`:q).join(" ");e.style.margin=B}else if(W==="Padding"){const B=(x?.trim().split(/\s+/)).map(q=>/^\d+$/.test(q)?`${q}px`:q).join(" ");e.style.padding=B}else W==="Background Color"?e.style.backgroundColor=x:W==="Float"?e.style.float=x:W==="Color"?e.style.color=x:e?.setAttribute(W,x?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const P=await Qt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=P,ye(P)}else{const P=await lt();f.staticWidgetTree.html=P,ye(P)}await en(e);return}}const E=n?.target?.value,b=n?.target?.type,v=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),S=e,L=S?.getAttribute("isvalidate")==="on";if(L&&S.setAttribute("onchange","applyValidation()"),L&&S?.addEventListener("change",_=>{const C=_.target;oo(C)}),v==="className")S?.setAttribute("class",E);else if(v==="Height"){const _=E?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;S.style.height=C}else if(v==="Width"){const _=E?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;S.style.width=C}else if(v==="Minimum-Height"){const _=E?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;S.style.minHeight=C}else if(v==="Minimum-Width"){const _=E?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;S.style.minWidth=C}else if(v==="Maximum-Height"){const _=E?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;S.style.maxHeight=C}else if(v==="Maximum-Width"){const _=E?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;S.style.maxWidth=C}else if(v==="Margin"){const C=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");S.style.margin=C}else if(v==="Padding"){const C=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");S.style.padding=C}else if(v==="Background Color")S.style.backgroundColor=E;else if(v==="Color")S.style.color=E;else if(v==="Float")S.style.float=E;else if(v==="Alignment")xa.includes(e.tagName.toLowerCase())&&(S.style.textAlign=E);else if(v==="Font Family")Aa.includes(e.tagName.toLowerCase())&&(S.style.fontFamily=E);else if(v==="Font Weight")Zt.includes(e.tagName.toLowerCase())&&(S.style.fontWeight=E);else if(v==="Font Size"){if(Zt.includes(e.tagName.toLowerCase())){const C=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");S.style.fontSize=C}}else if(v==="Opacity")S.style.opacity=E;else if(v==="Text Transform")e.tagName.toLowerCase()!=="img"&&(S.style.textTransform=E);else if(v==="Line Height"){if(Xt.includes(e.tagName.toLowerCase())){const C=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");S.style.lineHeight=C}}else if(v==="Letter Spacing"){if(Xt.includes(e.tagName.toLowerCase())){const C=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");S.style.letterSpacing=C}}else if(b==="checkbox"&&!n?.target?.checked)S?.removeAttribute(v),S.value="";else if(v==="elementContent")if(!S?.childNodes?.length)S.innerText=E;else{let _;e?.childNodes?.length&&(_=Array.from(S?.childNodes)?.filter(C=>C.nodeType===3),_?.length&&_.forEach((C,x)=>{x===0?C.nodeValue=E:C.nodeValue=""}))}else v==="align-items"?(S.style.display="flex",S.style.alignItems=E):v==="justify-content"?(S.style.display="flex",S.style.justifyContent=E):v==="text-align"?S.style.textAlign=E:v==="class"?(S.classList.forEach(_=>{_.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||S.classList.remove(_)}),S.classList.add(...E.split(" "))):v&&S?.setAttribute(v,E?.trim());if(w.attributes=w?.attributes?.map(_=>(_?.name===v&&(_?.type==="array"?_.selected=E:_?.type==="boolean"&&!n?.target?.checked?_.value="":_.value=E),_)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const _=await Qt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=_,ye(_)}else{const _=await lt();f.staticWidgetTree.html=_,ye(_)}H.updateActionHistories(),await en(e),setTimeout(()=>{if(i&&o){const W=document.getElementById(i);if(W){W.style.display="block";const P=W.previousElementSibling?.querySelector(".material-symbols-outlined");P&&(P.textContent="do_not_disturb_on")}}if(r){const W=document.getElementById("advanced-size");if(W){W.style.display="block";const P=W.previousElementSibling?.querySelector(".material-symbols-outlined");P&&(P.textContent="expand_less")}}const _=document.querySelector(".spacing-tabs");if(_&&c){const W=_.querySelector(`.${c}-tab`);W&&Pa(W,c)}const C=document.querySelector(".margin-control")?.closest(".col-12"),x=document.querySelector(".padding-control")?.closest(".col-12");m?(C?.classList.remove("hidden"),x?.classList.add("hidden")):g&&(C?.classList.add("hidden"),x?.classList.remove("hidden"))},0)}catch(a){console.error("error updating attribute",a.message)}}function uo(n,e){let t=[];return n.wrapper===e&&t.push(n),Array.isArray(n.children)&&n.children.forEach(a=>{t=t.concat(uo(a,e))}),t}async function Ac(n){const e=n?.target?.value,t=n?.target?.type,a=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),i=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');a==="className"?i?.setAttribute("class",e):t==="checkbox"&&!n?.target?.checked?i?.removeAttribute(a):a==="elementContent"?i.innerText=e:i?.setAttribute(a,e)}async function Ia(n){return new Promise(async e=>{let t=new G;t.composition=n,t.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],t.inpage=100;let a=new G;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const o=await Se([t,a],""),s=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name,r=o?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=o?.data?.the_element?.the_element_void?.[0]?.data?.the_void,d=o?.data?.the_element?.the_element_default?.[0]?.data?.the_default,c=o?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,u=o?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=o?.data?.the_element?.the_element_s_attribute?.map(h=>{const w=h.id,y=h?.data?.the_attribute,T=y?.the_attribute_name?.[0]?.data?.the_name,E=y?.the_attribute_type?.[0]?.data?.the_type,b=y?.the_attribute_value?.[0]?.data?.the_value;return{id:w,name:T,type:E,value:b}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:n,name:s,tag:r,void:l,default:d,icon:c,division:u,attributes:m})})}async function $t(n){const e=n?.[0],t=e.id,a=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,i=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,o=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,s=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,r=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,l=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,c=e?.data?.the_element?.the_element_s_attribute?.map(p=>{const m=p.id,g=p?.data?.the_attribute,h=g?.the_attribute_name?.[0]?.data?.the_name,w=g?.the_attribute_type?.[0]?.data?.the_type,y=g?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:h,type:w,value:y}});return c?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),xa.includes(i.toLowerCase())&&c.push({name:"Alignment",type:"array",value:"",division:"inline"}),Aa.includes(i.toLowerCase())&&c.push({name:"Font Family",type:"array",value:"",division:"inline"}),Zt.includes(i.toLowerCase())&&c.push({name:"Font Weight",type:"array",value:"",division:"inline"}),pc.includes(i.toLowerCase())&&c.push({name:"Font Size",type:"string",value:"",division:"inline"}),i.toLowerCase()!=="img"&&c.push({name:"Text Transform",type:"array",value:"",division:"inline"}),Xt.includes(i.toLowerCase())&&c.push({name:"Line Height",type:"string",value:"",division:"inline"}),Xt.includes(i.toLowerCase())&&c.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:t,name:a,tag:i,void:o,default:s,icon:r,division:l,attributes:c}}async function mo(n){const{id:e,value:t,dataset:{page_id:a}}=n.target;Le(e,t),e!=="html_cache"&&e!=="css_cache"&&await Sc.updatePageField(e,t,Number(a))}async function na(n){[{key:"meta_title",value:n?.[`the_${I.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:n?.[`the_${I.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:n?.[`the_${I.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:n?.[`the_${I.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:n?.[`the_${I.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:n?.[`the_${I.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:n?.[`the_${I.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(t=>{t.value&&Le(t.key,t.value)})}async function Le(n,e){const t=document.getElementById("fspage-properties")||Wc();let a="";switch(n){case"html_cache":fe.staticHTMLCache=e;break;case"css_cache":fe.staticCSSCache=e;break;case"width":ft(".fspage { width: [^;]+ !important; }"),a=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":ft(".fspage { font-size: [^;]+; }"),a=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":ft(".fspage { font-family: [^;]+; }"),a=e?`.fspage { font-family: ${e}; }`:"";break;case"type":ft(".fspage { width: 1200px; margin: 0 auto; }"),ft(".fspage { width: 100%; padding: 0; }"),e==="fixed"?a=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?a=".fspage { width: 100%; padding: 0; }":a="";break;case"meta_title":document.title=e;break;case"meta_keywords":Wt(n.replace("meta_",""),e);break;case"meta_description":Wt(n.replace("meta_",""),e);return}t.textContent+=a}function ft(n){const e=document.getElementById("fspage-properties");if(!e)return;let t=e?.textContent;t=t?t.replace(new RegExp(n,"g"),""):"",e.textContent=t}function Wc(){const n=document.createElement("style");return n.id="fspage-properties",document.head.appendChild(n),n}function Wt(n,e){let t=document.querySelector(`meta[name="${n}"]`);t||(t=document.createElement("meta"),t.setAttribute("name",n),document.head.appendChild(t)),t.setAttribute("content",e)}async function po(n){try{document.querySelectorAll(".element-selected")?.forEach(async t=>{const a=t?.getAttribute("data-elementId"),i=t?.tagName?.toLowerCase();let o;const s=t?.classList?.contains("fslayout-row"),r=t?.firstChild?.classList?.contains("fslayout-row");if(s||r)o=await Wa(a);else{const g=gt.staticElementList?.filter(h=>{const w=h?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return i===w});if(g?.length)o=await $t(g);else if(Ke.includes(i)||Mt.includes(i)){const h=n?.target?.value,w=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(w==="className")t.setAttribute("class",h);else if(w==="elementContent"&&Ke.includes(i))t.textContent=h;else if(w==="id")t.id=h;else if(w==="Height"){const y=h?.trim(),T=/^\d+$/.test(y)?`${y}px`:y;t.style.height=T}else if(w==="Width"){const y=h?.trim(),T=/^\d+$/.test(y)?`${y}px`:y;t.style.width=T}else if(w==="Margin"){const T=(h?.trim().split(/\s+/)).map(E=>/^\d+$/.test(E)?`${E}px`:E).join(" ");t.style.margin=T}else if(w==="Padding"){const T=(h?.trim().split(/\s+/)).map(E=>/^\d+$/.test(E)?`${E}px`:E).join(" ");t.style.padding=T}else w==="Background Color"?t.style.backgroundColor=h:w==="Color"&&(t.style.color=h);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const y=await Qt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=y,ye(y)}else{const y=await lt();f.staticWidgetTree.html=y,ye(y)}await ro();return}}const l=n?.target?.value,d=n?.target?.type,c=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),u=t,p=u?.getAttribute("isvalidate")==="on";if(p&&u.setAttribute("onchange","applyValidation()"),p&&u?.addEventListener("change",m=>{const g=m.target;oo(g)}),c==="className")u?.setAttribute("class",l);else if(c==="Height"){const m=l?.trim(),g=/^\d+$/.test(m)?`${m}px`:m;u.style.height=g}else if(c==="Width"){const m=l?.trim(),g=/^\d+$/.test(m)?`${m}px`:m;u.style.width=g}else if(c==="Margin"){const g=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");u.style.margin=g}else if(c==="Padding"){const g=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");u.style.padding=g}else if(c==="Background Color")u.style.backgroundColor=l;else if(c==="Color")u.style.color=l;else if(d==="checkbox"&&!n?.target?.checked)u?.removeAttribute(c),u.value="";else if(c==="elementContent")if(!u?.childNodes?.length)u.innerText=l;else for(let m of u?.childNodes){const g=m;if(g.nodeValue){if(g.nodeType===3&&g.nodeValue.trim()){g.nodeValue=l;break}}else{const h=document.createTextNode(l);u.insertBefore(h,u.firstChild);break}}else c==="align-items"?(u.style.display="flex",u.style.alignItems=l):c==="justify-content"?(u.style.display="flex",u.style.justifyContent=l):c==="text-align"?u.style.textAlign=l:c==="class"?(u.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||u.classList.remove(m)}),u.classList.add(...l.split(" "))):u?.setAttribute(c,l?.trim());if(o.attributes=o?.attributes?.map(m=>(m?.name===c&&(m?.type==="array"?m.selected=l:m?.type==="boolean"&&!n?.target?.checked?m.value="":m.value=l),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await Qt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,ye(m)}else{const m=await lt();f.staticWidgetTree.html=m,ye(m)}H.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function Xe(){const n=document.querySelectorAll("link.vde-css"),t=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),a=[];t?.length&&t.forEach((i,o)=>{const s=i.value,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r),a.push({order:o,url:i.value})}),n?.length&&n?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=a,H.updateActionHistories()}async function et(){const n=document.querySelectorAll("script.vde-js"),t=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),a=[];t?.length&&t.forEach(async(i,o)=>{await new Promise((s,r)=>{const l=i.value,d=document.createElement("script");d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{s()},d.onerror=c=>{console.error("Failed to load script:",l,c),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(d),a.push({order:o,url:i.value})})}),n?.length&&n?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=a,H.updateActionHistories()}function ka(){Sn(f.staticWidgetTree)}async function go(n){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const t=document.createElement("span");t.className="material-symbols-outlined",t.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter CSS URL",a.addEventListener("change",async()=>{await Xe()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Xe(),await Tn(n)},e.appendChild(t),e.appendChild(a),e.appendChild(i),e}let ti=0;async function Nt(n){const e=++ti,t=n?n?.library?.js:f.widgetTree?.library?.js,a=document.getElementById("sortable-js-list");a.innerHTML="",Ma(),t?.length&&t?.sort((i,o)=>Number(i?.order)-Number(o?.order));for(const i of t){if(e!==ti){console.log("Skipping outdated call for",i.url);return}await new Promise((o,s)=>{const r=document.createElement("li");r.className="list-item",r.draggable=!0;const l=document.createElement("span");l.className="material-symbols-outlined",l.innerText="drag_handle";const d=document.createElement("input");d.type="text",d.value=i?.url,d.addEventListener("change",async()=>{await et()});const c=document.createElement("button");c.className="remove-button",c.innerHTML='<span class="material-symbols-outlined">delete</span>',c.onclick=async function(){r.remove(),await et(),await Nt(n)},r.appendChild(l),r.appendChild(d),r.appendChild(c),a?.appendChild(r);const u=document.createElement("script");return u.classList.add("vde-js"),u.setAttribute("type","text/javascript"),u.setAttribute("src",i.url),u.setAttribute("crossorigin","anonymous"),u.onload=()=>{o()},u.onerror=p=>{console.error("Failed to load script:",i.url,p),s(new Error(`Failed to load script: ${i.url}`))},document.body.appendChild(u),r})}}function tn(){const n=document.querySelectorAll("link.vde-css");n?.length&&n?.forEach(e=>{e.remove()})}function Ma(){const n=document.querySelectorAll("script.vde-js");n?.length&&n?.forEach(e=>{e.remove()})}async function Tn(n){const e=n?n?.library?.css:f.widgetTree?.library?.css,t=document.getElementById("sortable-list");t.innerHTML="",tn(),e?.length&&e?.sort((a,i)=>Number(a?.order)-Number(i?.order)),e?.forEach(a=>{const i=document.createElement("li");i.className="list-item",i.draggable=!0;const o=document.createElement("span");o.className="material-symbols-outlined",o.innerText="drag_handle";const s=document.createElement("input");s.type="text",s.value=a.url,s.addEventListener("change",async()=>{await Xe()});const r=document.createElement("button");r.className="remove-button",r.innerHTML='<span class="material-symbols-outlined">delete</span>',r.onclick=async function(){i.remove(),tn(),await Xe(),await Tn(n)},i.appendChild(o),i.appendChild(s),i.appendChild(r),t?.appendChild(i);const l=document.createElement("link");return l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",a.url),document.head.appendChild(l),i})}function Ic(n){const e=document.getElementById("sortable-list");if(!e)return;let t=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(t=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),tn(),await Xe(),await Tn(f.widgetTree?.library?.css?.length?f.widgetTree:n))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!t)return;const i=kc(e,a.clientY),o=t;i===null?e.appendChild(o):e.insertBefore(o,i)})}function kc(n,e){return[...n.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}async function Sn(n){const e=document.getElementById("sortable-list");e.innerHTML="";const t=document.getElementById("add-list");if(!e||!t){console.error("Required elements not found");return}if(n?.library?.css?.length)await Tn(n);else{const o=await go(n);e.appendChild(o)}Ic(n);const a=document.getElementById("sortable-js-list");a.innerHTML="";const i=document.getElementById("add-js-list");if(!a||!i){console.error("Required elements not found");return}if(n?.library?.js?.length)await Nt(n);else{const o=await yo(n);a.appendChild(o)}Mc(n)}async function ho(n){const e=document.getElementById("sortable-list"),t=await go(n);e.appendChild(t)}async function fo(n){const e=document.getElementById("sortable-js-list"),t=await yo(n);e.appendChild(t)}async function yo(n){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const t=document.createElement("span");t.className="material-symbols-outlined",t.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter JS URL",a.addEventListener("change",async()=>{await et()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await et(),await Nt(n)},e.appendChild(t),e.appendChild(a),e.appendChild(i),e}function Mc(n){const e=document.getElementById("sortable-js-list");if(!e)return;let t=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(t=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),Ma(),await et(),await Nt(f.widgetTree?.library?.js?.length?f.widgetTree:n))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!t)return;const i=Pc(e,a.clientY),o=t;i===null?e.appendChild(o):e.insertBefore(o,i)})}function Pc(n,e){return[...n.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function Bc(n){const e=n.toLowerCase();return Te.has(e)?nt.STYLE:gc.has(e)?nt.BOOLEAN:hc.has(e)?nt.FORM:fc.has(e)?nt.SPECIAL:nt.FORM}function $c(n,e){if(!n&&e==="Background Color")return"#FFFFFF";if(!n)return"#000000";if(n.startsWith("#"))return n;const t=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(t){const[a,i,o,s]=t;return"#"+[i,o,s].map(r=>{const l=parseInt(r).toString(16);return l.length===1?"0"+l:l}).join("")}return"#000000"}function vo(n,e){if(!e)return console.warn("Attribute name is undefined"),"";if(n.classList.contains("fslayout-row")||n.firstChild instanceof HTMLElement&&n.firstChild.classList?.contains("fslayout-row"))return wo(n,e);const t=e.toLowerCase();if(Te.has(t)||Te.has(e)){const a=Te.get(t)||Te.get(e);if(!a)return"";const i=n.style[a.property]||n.getAttribute(`data-${t}`);return t==="color"||t==="background-color"||t==="bg-color"||e==="Color"||e==="Background Color"?$c(i,e):i||""}if(t==="elementcontent"){let a,i;return n?.childNodes?.length&&(a=Array.from(n?.childNodes)?.filter(o=>o?.nodeType===3),a?.length&&(i=a?.map(o=>o?.nodeValue?.trim()).join(""))),i?i?.trim():n?.textContent||""}return t==="classname"?n.classList.value?.replace(/wb-initial-empty/g,"")||"":n.getAttribute(t)||""}function wo(n,e){const t=e.toLowerCase();return t==="class"||t==="classname"?Array.from(n.classList).filter(a=>!a.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):t==="align-items"?n.style.alignItems||"":t==="text-align"?n.style.textAlign||"":n.getAttribute(t)||""}function Nc(n,e,t){const a=e.toLowerCase();if(n.id){const i=n.getAttribute("data-attributes");if(i){const o=JSON.parse(i),s=o.find(r=>r.name===e);s&&((s.type==="array"||wt(e))&&(s.selected=t),s.value=t),n.setAttribute("data-attributes",JSON.stringify(o))}}if(Te.has(a)||Te.has(e)){const i=Te.get(a)||Te.get(e);if(!i)return;n.setAttribute(`data-${a}`,t),i.needsUnit&&t&&/^\d+$/.test(t)?n.style[i.property]=`${t}px`:n.style[i.property]=t;return}t?n.setAttribute(a,t):n.removeAttribute(a)}function Pa(n,e){const t=n.closest(".spacing-tabs");if(!t)return;t.querySelectorAll(".spacing-tab-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active");const a=t.nextElementSibling,i=a?.nextElementSibling;e==="margin"?(a?.classList.remove("hidden"),i?.classList.add("hidden")):(a?.classList.add("hidden"),i?.classList.remove("hidden"))}window.toggleSpacingBox=Pa;let Je=[],nn,Et="",ni=!1,ai="";const qt="storeOwner",Cn=async n=>{Vc(n),await Promise.all([Uc(n),Fc(n)]),wi("projectId",n),bi(),bo()},jc=async n=>{document.title=n.storeName||"Store",Eo(n.storeLogo),nn=n.mainPageId,Et=n.projectName,Je=n.pagesList,localStorage.setItem(qt,btoa(n.entityId)),wi("projectId",n.projectId),bi(),bo()},bo=()=>{window.addEventListener("popstate",()=>$n(window.location.href)),document.addEventListener("click",n=>{const t=n.target.closest("a");if(!t||t.target==="_blank"||t.hasAttribute("download")||t.getAttribute("rel")==="external"||n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||t.origin!==location.origin)return;const a=t.getAttribute("href");!a||a.startsWith("#")||a.startsWith("mailto:")||(n.preventDefault(),jt(a),$n(a))},!0),$n(window.location.href)},$n=async n=>{const{pathname:e}=new URL(n,window.location.origin);if(ai==e)return;ai=e;const t=Hc(e),a=Dc(n),i=document.head.querySelectorAll("style#mystyleid");if(console.log("abc",e,Je,t),t){const o=Je.find(s=>s.path==t.route);ii(o,{params:t?.params,queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await oi(o?.id);na(s?.data?.[`the_${I.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else if(e==="/"&&nn){const o=Je.find(s=>s.id==nn);ii(o,{params:{},queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await oi(o?.id);na(s?.data?.[`the_${I.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else{const o=Je.find(s=>s.path=="/404");o?_o(o.page):document.querySelector("#app").innerHTML="<h1>404</h1>",Array.from(i).forEach(s=>s.remove())}document.getElementById("global-loader")?.classList.add("d-none")},ii=async(n,e)=>{Oc(n),n.page?await _o(n,e):console.warn("No page content Found")};function Dc(n){const{searchParams:e}=new URL(n,window.location.origin),t={};for(const[a,i]of e.entries())t[a]?t[a]=Array.isArray(t[a])?[...t[a],i]:[t[a],i]:t[a]=i;return t}const Hc=n=>{const a=[...Je.map(i=>i.path)].sort((i,o)=>{const s=i.split("/").filter(Boolean),r=o.split("/").filter(Boolean),l=s.filter(c=>c.startsWith(":")).length,d=r.filter(c=>c.startsWith(":")).length;return l!==d?l-d:r.length-s.length});console.log("routes",a);for(let i=0;i<a.length;i++){const s=(a[i]?.startsWith("/")?a[i]:`/${a[i]}`).split("/").filter(Boolean),r=n.split("/").filter(Boolean);if(s.length!==r.length)continue;const l={};if(s.every((c,u)=>c.startsWith(":")?(l[c.slice(1)]=r[u],!0):c===r[u]))return{route:a[i],params:l}}return null},_o=async(n,e)=>{const t=document.querySelector("#app");t&&await Ne(n?.page,t,e)};async function oi(n){return new Promise(async e=>{let t=new M;t.conceptIds=[n],t.outputFormat=le,t.selectors=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_meta_title`,`the_${I.PAGE_COMP_NAME}_meta_description`,`the_${I.PAGE_COMP_NAME}_meta_keywords`,`the_${I.PAGE_COMP_NAME}_width`,`the_${I.PAGE_COMP_NAME}_type`,`the_${I.PAGE_COMP_NAME}_font_family`,`the_${I.PAGE_COMP_NAME}_font_size`,`the_${I.PAGE_COMP_NAME}_body`,`the_${I.WIDGET_COMP_NAME}_clean`],t.inpage=100,_e(t,"").subscribe(async a=>{a.length?e(a?.[0]):!Array.isArray(a)&&a?.data==null&&e({error:!0,message:"There is no data."})}).catch(a=>{const i=a?.message;e({error:!0,message:i})})})}const Oc=n=>{if(ni)return;const e=new URL(window.location.href).hostname.split(".")[0].split("-")[1],t=qc(e,n),a=new Blob([JSON.stringify(t)],{type:"application/json"}),i=URL.createObjectURL(a),o=document.createElement("link");o.rel="manifest",o.href=i,document.head.appendChild(o),ni=!0};function qc(n,e){let t="/icons/icon-192x192.png",a="/icons/icon-512x512.png",o=window.location.hostname;return o.startsWith("www.")&&(o=o.substring(4)),o==="sleepinghats.com"&&(t="/icons/sleepinghats/icon-192x192.png",a="/icons/sleepinghats/icon-152x152.png"),console.log("rootDomain",o),o==="preview-103071837.develop.freeschema.com"||o=="preview-103071837.localhost"?(t="/icons/lms_chat/icon-192x192.png",a="/icons/lms_chat/maskable-icon.png",document.title="",{name:"LMS Chat",short_name:"LMS",start_url:location.origin+"/index.html",display:"standalone",theme_color:"#19c37d",background_color:"#ffffff",icons:[{src:`${location.origin}${t}`,sizes:"192x192",type:"image/png",purpose:"any"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"maskable"}]}):{name:`${Et||e.title||e.slug||n} - ${n}`,short_name:`${Et||n}`,start_url:location.origin+"/index.html",display:"standalone",theme_color:n?"rgba(106, 27, 154, 1);":"#ffffff",background_color:"#eee",icons:[{src:`${location.origin}${t}`,sizes:"192x192",type:"image/png",purpose:"any maskable"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"any maskable"}],share_target:{action:`${location.origin}/captures`,method:"POST",enctype:"multipart/form-data",params:{title:"title",text:"text",url:"url",files:[{name:"media",accept:["image/*","video/*"]}]}}}}const Fc=async n=>{try{localStorage.removeItem(qt);const e=new M;e.name="entity",e.typeConnection="the_entity_s_project",e.reverse=!0;const t=new M;t.name="project",t.conceptIds=[n],t.freeschemaQueries=[e],t.outputFormat=No;const a=await ke(t,"");if(!a?.[0]?.the_project?.the_entity_s_project_reverse?.[0]?.id)return;a?.[0]?.the_project?.the_entity_s_project_reverse?.length==1&&localStorage.setItem(qt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()));for(let i=0;i<a?.[0]?.the_project?.the_entity_s_project_reverse?.length;i++)(a?.[0]?.the_project?.the_entity_s_project_reverse[i]).id!=102176333&&localStorage.setItem(qt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()))}catch(e){console.error(e)}};async function Vc(n){try{const e=new M;e.name="store",e.typeConnection="the_project_refers",e.selectors=["the_store_name","the_store_logo"];const t=new M;t.name="project",t.conceptIds=[n],t.freeschemaQueries=[e];const i=(await ke(t,""))?.[0]?.the_project?.the_project_refers?.the_store,o=i?.the_store_name?.the_name;document.title=o||"Store",Eo(i?.the_store_logo?.the_logo)}catch(e){console.error(e)}}function Rc(n){return new Promise((e,t)=>{const a=new Image;a.crossOrigin="anonymous",a.src=n,a.onload=()=>{const o=document.createElement("canvas");o.width=o.height=512;const s=o.getContext("2d");s?.clearRect(0,0,o.width,o.height);const r=a.width/a.height;let l=512,d=512;r>1?d=512/r:l=512*r;const c=(512-l)/2,u=(512-d)/2;s?.drawImage(a,c,u,l,d);const p=o.toDataURL("image/png");e(p)},a.onerror=()=>{t(new Error("Image failed to load. Check CORS."))}})}async function Uc(n){const t=(await k())?.token;let a=new M;a.name="page",a.typeConnection=`the_${I.PROJECT_COMP_NAME}_${se.PROJECT_PAGE_LINKER}`,a.selectors=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_body`];let i=new M;i.name="project",i.conceptIds=[n],i.selectors=[`the_${I.PROJECT_COMP_NAME}_name`,`the_${I.PROJECT_COMP_NAME}_main_page`],i.freeschemaQueries=[a],i.outputFormat=le;const o=await ke(i,t);let s={mainPageId:o?.[0]?.data?.the_project?.the_project_main_page?.id,name:o?.[0]?.data?.the_project?.the_project_name?.data.the_name||"",pages:o?.[0]?.data?.the_project?.the_project_s_page?.map(r=>({id:r?.id,title:r?.data?.the_page?.the_page_title?.data?.the_title||"",path:r?.data?.the_page?.the_page_slug?.data?.the_slug||"",page:r?.data?.the_page?.the_page_body?.id}))||[]};nn=s.mainPageId,Et=s.name,Je=s.pages}function Eo(n=""){var e=document.querySelector("link[rel~='icon']");e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e),setTimeout(()=>e?.remove(),1e4)),n&&Rc(n).then(t=>{e.href=t}).catch(t=>{console.error(t),e.href="https://boomconcole.com/freeschema/127b5f42-f453-4904-bf4d-d2a6abc9327c.png"})}const zc=async n=>{let e=new M;e.typeConnection="the_project_environment",e.selectors=["the_environment_name","the_environment_value"];let t=new M;t.conceptIds=[n],t.freeschemaQueries=[e];let a=await ke(t,""),i=null;for(let o=0;o<a.length;o++){let s=a[o]?.the_project;if(s){let l=s?.the_project_environment?.the_environment;if(l&&(i=l?.the_environment_value?.the_environment_value,i))try{i=JSON.parse(i)}catch(d){console.error("Error parsing environment values:",d),i=null}}}if(console.log("Environment values loaded:",i),i){for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)){const s=i[o];console.log("Setting environment variable:",o,s),sa.setValue(o,s)}}},Nn=[{path:"/",linkLabel:"Home",content:async()=>(await pe(()=>import("./home.index-BSQq-lvi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).default},{path:"/preview",linkLabel:"Preview",content:async()=>(await pe(()=>import("./preview.index-DyiAZneH.js"),__vite__mapDeps([13,4,1]))).default},{path:"/page-preview/:id",linkLabel:"Page Preview",content:async()=>(await pe(()=>import("./page-preview.index-DFQimTe7.js"),__vite__mapDeps([14,4,9,6,7,8,10,11,15]))).default},{path:"/documentation",linkLabel:"Documentation",content:async()=>(await pe(()=>import("./documentation.index-D8EfmrTm.js"),__vite__mapDeps([16,1,6,7,8,17,18,2,3,4,5,9,10,11,19]))).default},{path:"/subscription",linkLabel:"Subscription",content:async()=>(await pe(()=>import("./subscription.index-m9FH2f7H.js"),__vite__mapDeps([20,4,1,2,3,5,9,6,7,8,10,11,21]))).default,isAuthenticated:!0},{path:"/video-tutorial",linkLabel:"videos",content:async()=>(await pe(()=>import("./video-tutorial.index-DokiokQk.js"),__vite__mapDeps([22,1,2,3,4,5,9,6,7,8,10,11,23]))).default},{path:"/Community",linkLabel:"Community",content:async()=>(await pe(()=>import("./community.index-L7fVvQPD.js"),__vite__mapDeps([24,4,1,2,3,5,9,6,7,8,10,11,25]))).default},{path:"/courses",linkLabel:"courses",content:async()=>(await pe(()=>import("./courses.index-pdQUPk_C.js"),__vite__mapDeps([26,4,1,2,3,5,9,6,7,8,10,11]))).default},{path:"/course/:id",linkLabel:"Page Preview",content:async()=>(await pe(()=>import("./course.index-adgtlv4G.js"),__vite__mapDeps([27,4,1,2,3,5,9,6,7,8,10,11]))).default,isAuthenticated:!0}],To="env_secret_key_2024";function Jc(n){try{const t=btoa(n)+To,i=btoa(t).split("").reverse().join("");return btoa(i+"_salt_"+Date.now().toString(36))}catch(e){return console.error("Encryption error:",e),n}}function Gc(n){try{const e=atob(n),t=e.lastIndexOf("_salt_");if(t===-1)throw new Error("Invalid encrypted format");const i=e.substring(0,t).split("").reverse().join(""),o=atob(i),s=o.substring(0,o.length-To.length);return atob(s)}catch(e){console.error("Decryption error:",e);try{return JSON.parse(n),n}catch{return"{}"}}}function si(n){const e=JSON.stringify(n);return Jc(e)}function Ln(n){const e=Gc(n);try{return JSON.parse(e)}catch(t){return console.error("Error parsing decrypted object:",t),null}}const So="selected_environment_values",xn="selected_environment_index";function an(n,e){try{const t=si(n);if(localStorage.setItem(So,t),e!==void 0){const a=si({index:e});localStorage.setItem(xn,a)}for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&sa.setValue(a,n[a]);console.log("Environment values saved to encrypted localStorage")}catch(t){console.error("Error saving environment to localStorage:",t)}}function Ba(){try{const n=localStorage.getItem(So);if(n){const e=Ln(n);if(e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&sa.setValue(t,e[t]);return console.log("Environment values loaded from encrypted localStorage to RAM"),e}}}catch(n){console.error("Error loading environment from localStorage:",n)}return null}async function Yc(){const n=document.getElementById("select-environment-dropdown");if(!n){console.warn("Environment dropdown not found");return}const t=(await k())?.entityId;if(!t){console.warn("Entity ID not found in profile data");return}let a=new M;a.name="environment",a.typeConnection="the_entity_s_environment",a.selectors=["the_environment_name","the_environment_value"];let i=new M;i.name="entity",i.conceptIds=[t],i.freeschemaQueries=[a],i.outputFormat=le;let o=await ke(i,""),s=[];for(let r=0;r<o.length;r++){let l=o[r]?.data?.the_entity;if(l){let d=l?.the_entity_s_environment;const c=Array.isArray(d)?d:[d].filter(Boolean);for(let u of c){let p=u?.data?.the_environment;if(p){let m=u?.id,g=p?.the_environment_name?.data?.the_name||"Unnamed",h=p?.the_environment_name?.id,w=p?.the_environment_value?.id,y=p?.the_environment_value?.data?.the_environment_value;if(y)try{y=JSON.parse(y)}catch(E){console.error("Error parsing environment values:",E),y=null}let T={id:m,name:g,values:y,nameConnectionId:h,valueConnectionId:w};s.push(T)}}}}n.innerHTML='<option value="">Select Environment</option>';for(let r=0;r<s.length;r++){let l=s[r]?.name;const d=document.createElement("option");d.value=r.toString(),d.textContent=l,n.appendChild(d)}window.__allEnvironments=s;try{const r=localStorage.getItem(xn);if(r!==null){const l=Ln(r);l&&l.index!==void 0&&(n.value=l.index.toString())}}catch(r){console.error("Error restoring selected environment:",r)}}async function Co(){try{Ba();const e=(await k())?.entityId;if(!e){console.warn("Entity ID not found in profile data");return}let t=new M;t.name="environment",t.typeConnection="the_entity_s_environment",t.selectors=["the_environment_name","the_environment_value"];let a=new M;a.name="entity",a.conceptIds=[e],a.freeschemaQueries=[t];let i=await ke(a,"");const o=localStorage.getItem(xn);let s=null;if(o){const l=Ln(o);l&&l.index!==void 0&&(s=l.index)}let r=[];for(let l=0;l<i.length;l++){let d=i[l]?.the_entity;if(d){let c=d?.the_entity_s_environment;const u=Array.isArray(c)?c:[c].filter(Boolean);for(let p of u){let m=p?.the_environment;if(m){let g=m?.the_environment_name?.the_name||"Unnamed",h=m?.the_environment_value?.the_environment_value;if(h)try{h=JSON.parse(h)}catch(y){console.error("Error parsing environment values:",y),h=null}let w={name:g,values:h};r.push(w)}}}}if(s!==null&&r[s]){const l=r[s];l.values&&(an(l.values,s),console.log(`Environment "${l.name}" loaded successfully`))}else r.length>0&&r[0].values&&(an(r[0].values,0),console.log(`Default environment "${r[0].name}" loaded successfully`))}catch(n){console.error("Error initializing environment variables:",n)}}async function Qc(){const n=document.getElementById("select-environment-dropdown");if(!n||!n.value){console.warn("No environment selected");return}const e=Number(n.value),a=(window.__allEnvironments||[])[e];if(!a){console.warn("Selected environment not found");return}const{createEnvironmentEditorWithData:i}=await pe(async()=>{const{createEnvironmentEditorWithData:o}=await Promise.resolve().then(()=>el);return{createEnvironmentEditorWithData:o}},void 0);await i(a.name,a.values,a.id,a.nameConnectionId,a.valueConnectionId)}async function Kc(){Ba();let n=document.getElementById("select-environment-dropdown");if(!n){console.warn("Environment dropdown not found");return}const t=(await k())?.entityId;if(!t){console.warn("Entity ID not found in profile data");return}let a=new M;a.name="environment",a.typeConnection="the_entity_s_environment",a.selectors=["the_environment_name","the_environment_value"];let i=new M;i.name="entity",i.conceptIds=[t],i.freeschemaQueries=[a],i.outputFormat=le;let o=await ke(i,""),s=[];for(let c=0;c<o.length;c++){let u=o[c]?.data?.the_entity;if(u){let p=u?.the_entity_s_environment;const m=Array.isArray(p)?p:[p].filter(Boolean);for(let g of m){let h=g?.data?.the_environment;if(h){let w=g?.id,y=h?.the_environment_name?.data?.the_name||"Unnamed",T=h?.the_environment_name?.id,E=h?.the_environment_value?.id,b=h?.the_environment_value?.data?.the_environment_value;if(b)try{b=JSON.parse(b)}catch(S){console.error("Error parsing environment values:",S),b=null}let v={id:w,name:y,values:b,nameConnectionId:T,valueConnectionId:E};s.push(v)}}}}window.__allEnvironments=s;for(let c=0;c<s.length;c++){let u=s[c]?.name;const p=document.createElement("option");p.value=c.toString(),p.textContent=u,n.appendChild(p)}const r=n.cloneNode(!0);n.parentNode?.replaceChild(r,n),n=r;try{const c=localStorage.getItem(xn);if(c!==null){const u=Ln(c);u&&u.index!==void 0&&(r.value=u.index.toString())}}catch(c){console.error("Error restoring selected environment:",c)}const l=document.getElementById("add-environment-btn");l&&l.addEventListener("click",()=>{wa()});const d=document.getElementById("edit-environment-btn");d&&(d.disabled=!r.value,d.addEventListener("click",()=>{Qc()})),r.addEventListener("change",function(){const c=Number(this.value),p=(window.__allEnvironments||[])[c];if(d&&(d.disabled=!this.value),!p||!p.values){console.warn("No environment values found for selected environment");return}const m=p.values;an(m,c)})}const Lo=Object.freeze(Object.defineProperty({__proto__:null,getEnvironmentFromDatabase:Kc,initializeEnvironmentVariables:Co,loadEnvironmentFromStorage:Ba,refreshEnvironmentDropdown:Yc,saveEnvironmentToStorage:an},Symbol.toStringTag,{value:"Module"})),ri=document.getElementById("app");function Ve(){return""}function Zc(n){const e=Ve();if(!n)return e||"/";if(e&&n.startsWith(e))return n;const t=n.startsWith("/")?n:"/"+n;return(e+t).replace(/\/+/g,"/")}const Xc=()=>{let n=localStorage?.getItem("profile")||"";return n?!!JSON.parse(n)?.token:!1},ed=n=>new RegExp("^"+n.replace(/:\w+/g,"(.+)")+"$"),td=n=>{const e=n.result.slice(1),t=Array.from(n.route.path.matchAll(/:(\w+)/g)).map(a=>a[1]);return Object.fromEntries(t.map((a,i)=>[a,e[i]]))},nd=async()=>{const n=new URLSearchParams(location.search);return Object.fromEntries(n.entries())};async function $a(){const n=Ve();let e=window.location.pathname;n&&e.startsWith(n)&&(e=e.substring(n.length)||"/",e.startsWith("/")||(e="/"+e));let a=Nn.map(r=>({route:r,result:e.match(ed(r.path))})).find(r=>r.result!==null);if(!a)a={route:Nn.find(l=>l.path==="/404"),result:[e]};else if(a.route.isAuthenticated&&!Xc()){const r=Nn.find(l=>l.path==="/");a={route:r,result:[r?.path]},history.replaceState(null,"",n+r?.path+window.location.search)}const i={...await td(a),...await nd()},o=await a.route.content(i),s=new o(i);ri.innerHTML="",await s?.mount(ri)}const xo=async n=>{const e=document.getElementById("global-loader");e?.classList.remove("d-none");try{const t=Ve(),a=n.startsWith(t)?n:t+n;history.pushState(null,"",a),await $a()}finally{e?.classList.add("d-none")}},Ao=async n=>{const e=Ve();window.history.pushState({route:n},"",e+n),$a()},jt=n=>{const e=Ve(),t=n.startsWith(e)?n:e+n;history.pushState(null,"",t)},ad=()=>{const n=Ve(),e=window.location.pathname+window.location.search;let t=e;n&&e.startsWith(n)&&(t=e.substring(n.length)||"/",t.startsWith("/")||(t="/"+t)),xo(t)},id=()=>{customElements.define("router-link",class extends HTMLElement{constructor(){super(),this.handleClick=this.handleClick.bind(this),this.href&&this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("a"),e=Ve();this.href&&(n.href=e+this.href),this.forwardAttributes(n),n.setAttribute("part","link");const t=document.createElement("slot");n.appendChild(t),this.shadowRoot&&this.shadowRoot.appendChild(n),this.addEventListener("click",this.handleClick)}forwardAttributes(n){["target","download","rel","hreflang","type","title","tabindex","accesskey"].forEach(t=>{this.hasAttribute(t)&&n.setAttribute(t,this.getAttribute(t))})}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}handleClick(n){const e=this.getAttribute("target"),t=this.getAttribute("href");e==="_blank"||n.ctrlKey||n.metaKey||n.button===1||this.hasAttribute("download")||t&&(n.preventDefault(),xo(t))}set href(n){const e=Ve();this.setAttribute("href",n);const t=this.shadowRoot?.querySelector("a");t&&(t.href=e+n)}get href(){return this.getAttribute("href")}set target(n){n&&this.setAttribute("target",n)}get target(){return this.getAttribute("target")}})};function od(){ad(),id(),window.addEventListener("popstate",$a)}const sd=async n=>{const e=["localhost","visualwidget.boomconcole.com","develop.freeschema.com","anilserver.freeschema.net","wico.freeschema.com"],t=["/wico"],a=window.location.pathname,i=t.some(r=>a===r||a.startsWith(r+"/")),o=window.location.hostname,s=o.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s&&zc(parseInt(s)),s)Cn(parseInt(s));else if(e.includes(o)||i)await pe(()=>import("./initialLoadWICO-B3pBRuXC.js"),__vite__mapDeps([28,4,3,5,9,6,7,8,10,11])),console.log("Adding the widget"),await Co(),od();else try{rd(o)}catch(r){console.error(r),An()}};function An(){const n=document.getElementById("global-loader");n&&n.setAttribute("style","display: none !important");const e=document.getElementById("app");e&&(e.innerHTML="<h1>404</h1>")}function rd(n=""){try{const e=JSON.parse(sessionStorage.getItem("cacheServers")??"[]")||[],t=e.length>0&&e?.[0]!="https://boomconsole.com"?e[0]:"https://deploy.freeschema.com",a=new URLSearchParams;a.append("url",n),console.log("server",t),fetch(t+"/api/project-deploy",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(async i=>{const o=await i.json();jc(o.data)}).catch(i=>{console.error(i),li(n);try{const s=JSON.parse(sessionStorage.getItem("domainRecord")??"{}");if(s&&s.expiresAt>Date.now()){const r=s.value;r&&Cn(parseInt(r));return}}catch(o){console.error(o),An()}})}catch(e){console.error(e),li(n)}}function li(n=""){const e=new URLSearchParams;e.append("url",n),fetch(z.baseURL+"/dns/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}).then(async t=>{const a=await t.json();if(!a)ld();else{const i=a?.startsWith("http")?a:"http://"+a,s=new URL(i).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s)Cn(parseInt(s));else throw new Error("Path Not Valid")}}).catch(t=>{console.error(t),An()})}function ld(){fetch(z.baseURL+"/cname").then(async n=>{const e=await n.json()||[];if(e?.[0]){const t=e[0]?.startsWith("http")?e[0]:"http://"+e[0],i=new URL(t).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(i)Cn(parseInt(i));else throw new Error("Path Not Valid")}else throw new Error("Doamin Not Found")}).catch(n=>{console.error(n),An()})}let Wo=null;window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Wo=n});const cd={activate:z.enableSW,scope:"/",pathToSW:"/serviceWorker.bundle.js",manual:!0};await ts();"serviceWorker"in navigator&&(navigator.serviceWorker.register("/sw.js").then(()=>{console.log("Service Worker registered")}),navigator.serviceWorker.addEventListener("message",n=>{const{title:e,text:t,url:a,file:i}=n.data;console.log("Shared data received:",{title:e,text:t,url:a,file:i})}));jo(z?.boomURL,z?.aiURL,"",z?.baseNodeUrl,void 0,"widget_conceptualizer",cd,{logApplication:!0,logPackage:!1,isTest:!1,accessTracker:!1},{logserver:z.logserver});const dd=await k();ci(dd?.token);sd();window.PWAInstallHandler=(()=>{let n=null,e=null,t=null;return{init:({onInstall:s,onDismiss:r})=>{e=s,t=r,n=Wo,window.addEventListener("appinstalled",()=>{console.log("PWA installed successfully!"),localStorage.setItem("pwaInstalled","true"),e&&e()})},isInstalled:()=>window.matchMedia("(display-mode: standalone)").matches||window.navigator?.standalone,showInstallPrompt:()=>{console.log("deferedPrompt",n),n&&(n.prompt(),n.userChoice.then(s=>{s.outcome==="accepted"?(console.log("User installed the PWA."),e&&e()):(console.log("User dismissed the install prompt."),t&&t()),n=null}))}}})();export{xe as A,Ed as B,I as C,Ce as D,wd as E,Ge as F,xt as G,xl as H,z as I,na as J,We as K,Ao as L,ce as M,xo as N,yd as O,tt as P,f as S,Rl as T,Rs as V,vr as _,ot as a,Fe as b,V as c,X as d,De as e,zl as f,k as g,Fn as h,ha as i,Ui as j,_n as k,ct as l,H as m,Ye as n,ua as o,Kc as p,Ma as q,tn as r,Rn as s,A as t,vd as u,Ue as v,$ as w,bd as x,Zi as y,_d as z};
