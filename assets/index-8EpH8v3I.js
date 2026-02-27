const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home.index-Chnm9LuU.js","assets/mainView.class-C4NLGCWW.js","assets/navbar.component-D-uaVc4D.js","assets/loginModal.service-Bgq2YugW.js","assets/mftsccs-browser-D_uubYVV.js","assets/loginModal-DGhNYttL.css","assets/vendor-DEYWGvhS.js","assets/ckeditor-Cw9bcqxY.js","assets/vendor-TRZluGMH.css","assets/codemirror-D1H9tReK.js","assets/eslint4b-BLWGvIOa.js","assets/prettier-ClL2wQep.js","assets/home-Bdxyox52.css","assets/preview.index-DyiAZneH.js","assets/page-preview.index-B9AXejUq.js","assets/page-preview-BJCVd99J.css","assets/documentation.index-B71esXXE.js","assets/highlight-CFrhCzdo.js","assets/highlight-ZgkIHsf0.css","assets/documentation-CtKxHXjz.css","assets/subscription.index-lWlKrd-R.js","assets/subscription-Dc24vCVe.css","assets/video-tutorial.index-Bb1xivjn.js","assets/video-tutorial-Dg46rKRD.css","assets/community.index-DhDxFcsz.js","assets/community-CARjtQbC.css","assets/courses.index-BKgQG_Aw.js","assets/course.index-DAtEOF1n.js","assets/initialLoadWICO-UWIgBEOy.js"])))=>i.map(i=>d[i]);
import{p as X,v as Zn,G as Xn,U as ti,K as M,g as Pn,E as ye,a as D,V as en,l as ea,_ as Ae,b as Ct,H as oe,F as z,R as be,N as To,c as ka,d as ni,O as Ge,S as So,e as j,x as Ia,f as Y,h as se,M as We,J as Co,i as Lt,t as ai,j as Be,o as Lo,k as ge,m as fe,n as xo,q as Ne,r as je,s as J,D as Bn,Y as ii,u as Ao,I as Dt,w as oi,y as vt,z as si,A as Wo,Q as ta,B as ko}from"./mftsccs-browser-D_uubYVV.js";import{E as te,b as st,o as rt,j as tn,a as nn,c as Io,l as na,d as aa,e as Mo,f as xe,k as an,h as Po,g as Bo}from"./codemirror-D1H9tReK.js";import{J as on,n as $o}from"./vendor-DEYWGvhS.js";import{z as No}from"./eslint4b-BLWGvIOa.js";import{l as lt,p as sn,r as rn,a as Do,b as jo}from"./prettier-ClL2wQep.js";import{C as Ho}from"./ckeditor-Cw9bcqxY.js";const Oo=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return ro},get addJSLibrary(){return lo},get applyPageProperties(){return Kn},get applyPageProperty(){return Se},get filterChildrenByWrapper(){return ao},get getAttributeType(){return hc},get getAttributeValue(){return uo},get getElementAttribute(){return sc},get getElementAttributeDetails(){return Sa},get getElementData(){return to},get getLayoutAttributeValue(){return mo},get getPropertiesByIdFromStorage(){return It},get handleDirectContentEdit(){return rc},get handlePageProperties(){return io},get initializeApp(){return _n},get initializeLibrary(){return Ca},get listJSLibraries(){return Mt},get removeCSSLibrariesFromHead(){return Kt},get removeJSLibrariesFromHead(){return La},get setAttributeValue(){return yc},get toggleSpacingBox(){return xa},get updateAttribute(){return cc},get updateCSSLibrary(){return Ke},get updateElementAttribute(){return vn},get updateElementAttributeViaEditor(){return lc},get updateJSLibrary(){return Ze},get updateMetaTag(){return St},get updateMultipleElementAttribute(){return oo},get updateWidgetTypeValue(){return no}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const U={baseURL:"https://boomconsole.com/api/v1",baseNodeUrl:"https://boomconsole.com",boomURL:"https://boomconsole.com",aiURL:"https://www.ai.freeschema.com/api",deployURL:"https://deploy.freeschema.com",agentURL:"https://wico-ai.freeschema.com",CLIENT_ID:"636550695311-ctc09991hhu6iav4kkhnp1ge537nec2i.apps.googleusercontent.com",logserver:"https://logger.freeschema.com",enableSW:!1,courses_widget:103581935,course_widget:103503610,discussion_community:101765915,ai_widget:101934087,visual_widget:103478558,visual_prototype_widget:101938499,video_tutorial_widget:102040172,subscriptionId:102121109,documentation_preview_widget:102097744,folder_widget:102400016,assets_widget:102410590,VITE_DEV_BASE:"http://localhost:5173",VITE_CDN_BASE:"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master"},qo=U?.boomURL;async function q(n,e,t){const a=await X(`the_${n}`,"",!0,e,4,999);for(const[i,o]of Object.entries(t)){let s=i;const r=await X(`${s}`,`${o}`,!1,e,4,999);await H(a,r,s)}return a}async function H(n,e,t){const a=n.userId,i=999,o=999,s=n.type?.characterValue,r=t,l=s+"_"+r,u=await Zn(l,i,o,a);await Xn(n.id,e.id,u.id,1e3)}async function Fo(n,e){try{const t=new Headers;return t.append("Content-Type","application/json"),t.append("Authorization",`Bearer ${e}`),await(await fetch(`${qo}/api/get-entity-from-user?userConceptId=${n}`,{method:"GET",headers:t,redirect:"follow"})).json()}catch(t){throw console.error(t),t}}async function Zc(n){const e=await Fo(n?.data?.userConcept,n?.data?.token);let t={token:n?.data?.token,refreshToken:n?.data?.refreshtoken,email:n?.data?.email,userId:n?.data?.entity?.[0]?.userId,userConcept:n?.data?.userConcept,entityId:e?.entity,amcode:btoa(JSON.stringify(n?.data?.roles))};return ti(t.token),localStorage.setItem("profile",JSON.stringify(t)),!0}async function I(){return new Promise(n=>{let e=localStorage?.getItem("profile")||"";if(e){const t=JSON.parse(e);n(t)}else n()})}async function ri(){return new Promise(n=>{let e=localStorage?.getItem("tempwidget")||"";if(e){const t=JSON.parse(e);n(t)}else n()})}class Ce{static instance;static getInstance(){return Ce.instance||(Ce.instance=new Ce),Ce.instance}async getLoginInfo(){const e=await I(),t=await this.checkIfUserIsAdmin(e?.userConcept);let a="",i=!1,o=!1;if(e?.token){i=!0;let s="",r="";if(e?.entityId){let l=new M;l.typeConnection="the_entity_firstname",l.name="entity_firstname";let u=new M;u.typeConnection="the_entity_lastname",u.name="entity_lastname";let c=new M;c.typeConnection="the_entity_tour_status",c.name="entity_tour_status";let d=new M;d.type="the_entity",d.name="top",d.conceptIds=[e.entityId],d.freeschemaQueries=[l,u,c],d.outputFormat=Pn;let g;await ye(d,"").subscribe(m=>{g=m}),s=g?.[0]?.the_entity?.the_entity_firstname?.the_firstname||"",r=g?.[0]?.the_entity?.the_entity_lastname?.the_lastname||"",o=g?.[0]?.the_entity?.the_entity_tour_status?.the_tour_status==="true"}a=`
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
      `;return{loginInfoHTML:a,isLoggedIn:i,isAdmin:t,tourStatus:o}}async checkIfUserIsAdmin(e){try{return(await D(e))?.accessId===3}catch(t){return console.error("Error fetching user concept:",t),!1}}async logout(){const e=await ri();await en(e?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),location.reload()}async checkAndUpdateToken(){try{const e=await I();if(!e?.token){console.warn("No token found in local storage.");return}const t=e.token,a=e.refreshToken,i=new Headers;i.append("Content-Type","application/json");const o={accessToken:t,refreshToken:a},r=await(await fetch(`${ea.BASE_URL}/api/Auth/refresh`,{method:"POST",headers:i,body:JSON.stringify(o)})).json();if(r.success&&r.data){const{accessToken:l,refreshToken:u}=r.data;e.token=l,e.refreshToken=u,localStorage.removeItem("profile"),localStorage.setItem("profile",JSON.stringify(e))}else this.logout()}catch(e){console.error("Error refreshing token:",e)}}}const Vo=Ce.getInstance();(function(){const e=window.fetch;window.fetch=async(...t)=>{const a=t[1]||{};try{const i=await e(...t);if(i.status===401){console.warn("401 Unauthorized - Refreshing token"),await Vo.checkAndUpdateToken();const o=await I();if(!o?.token)return console.error("Token refresh failed. User not logged in."),i;if(a.headers){const s=new Headers(a.headers);s.set("Authorization",`Bearer ${o.token}`),s.has("Content-Type")||s.set("Content-Type","application/json"),a.headers=s}return e(t[0],a)}return i}catch(i){throw console.error("Intercepted Fetch Error:",i),i}}})();const Ro="modulepreload",Uo=function(n){return"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master/"+n},Ma={},ce=function(e,t,a){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=Uo(l),l in Ma)return;Ma[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Ro,u||(d.as="script"),d.crossOrigin="",d.href=l,r&&d.setAttribute("nonce",r),document.head.appendChild(d),u)return new Promise((g,m)=>{d.addEventListener("load",g),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return i.then(s=>{for(const r of s||[])r.status==="rejected"&&o(r.reason);return e().catch(o)})};function $n(n,e=0){let t=`<ul style="list-style: none; margin: 10px 0px; ${e==0?" padding-left: 0px; ":""}" id="sortable-list">`;for(let a=0;a<n.length;a++){const i=n[a];i.edit?t+=`
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
                <li>${i.menus?`${$n(i.menus,e+1)}`:""}</li>
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
                <li>${i.menus?`${$n(i.menus,e+1)}`:""}</li>
            `}return t+="</ul>",t}function ut(n){console.log("menus",n);const e=$n(n),t=document.getElementById("menu-items");t&&(t.innerHTML=e);let a=null;document.querySelectorAll("#sortable-list li").forEach(i=>{i.addEventListener("dragstart",o=>{a=i,o.dataTransfer.effectAllowed="move"}),i.addEventListener("dragover",o=>{o.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",o=>{o.preventDefault(),i.classList.remove("drag-over"),a!==i&&!i.contains(a)&&i?.parentNode?.insertBefore(a,i.nextSibling)}),i.addEventListener("dragend",()=>{document.querySelectorAll(".drag-over").forEach(o=>o.classList.remove("drag-over"))})})}async function li(n){console.log("projectId",n);let e;if(n||(e=ui()),!n&&!e?.projectId)return console.log("Project Id not found"),[];if(!n&&e.projectId&&(n=e?.projectId),console.log("projectId 2",n),!n)return[];const t=["the_item_menu_name","the_item_menu_link","the_item_menu_action","the_item_menu_auth","the_item_menu_order","the_item_menu_page"],a=new M;a.typeConnection="the_menu_s_item",a.selectors=t;function i(c,d=5){if(d==5)return;const g=new M;g.typeConnection="the_menu_s_item",g.selectors=t,c.name=d.toString(),c.freeschemaQueries=[g];const m=d+1;i(g,m)}const o=new M;o.conceptIds=[n],i(o,1);const s=await Ae(o,"");console.log("valllu",s);const r=s?.[0]?.the_project?.the_menu_s_item||[],l=(c=[])=>{let d=[];for(let g=0;g<c.length;g++){const m=c[g];d.push({name:m?.the_item_menu?.the_item_menu_name?.the_name??"",link:m?.the_item_menu?.the_item_menu_link?.the_link??"",action:m?.the_item_menu?.the_item_menu_action?.the_action??"",page:m?.the_item_menu?.the_item_menu_page?.the_page?Number(m?.the_item_menu?.the_item_menu_page?.the_page):"",order:m?.the_item_menu?.the_item_menu_order?.the_order?Number(m?.the_item_menu?.the_item_menu_order?.the_order):0,auth:m?.the_item_menu?.the_item_menu_auth?.the_auth=="true",menus:l(m?.the_item_menu?.the_menu_s_item)??[]})}return d.sort((g,m)=>g.order-m.order)};return l(r)}async function zo(n,e=[]){console.log("menus",e);const t=await new Ct;try{await t.initialize();const a=await D(n);await oe(n,"the_menu_s_item"),await ci(a,e,t),await t.commitTransaction(),console.log("output concept",n)}catch(a){console.error(a),await t.rollbackTransaction()}}async function ci(n,e=[],t){for(let a=0;a<e.length;a++){const i=e[a],o=await t.MakeTheInstanceConceptLocal("the_item_menu","",!0,999,4);await t.CreateConnection(n,o,"the_menu_s_item");for(let[s,r]of Object.entries(i))if(console.log("key",s,r),!!["name","link","action","auth","order","page","menus"].includes(s)&&!(s=="menus"&&!Array.isArray(r)))if(s=="menus")await ci(o,r,t);else{const u=await t.MakeTheInstanceConceptLocal("the_"+s,r,!0,999,4);await t.CreateConnection(o,u,"the_item_menu_"+s)}}}const Jo=async()=>{const n=U.enableSW;"serviceWorker"in navigator&&n&&await new Promise((e,t)=>{navigator.serviceWorker.register("/sw.js").then(a=>{a.addEventListener("updatefound",()=>{const i=a.installing;i?.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&(i.postMessage("skipWaiting"),setTimeout(()=>{confirm("A reload is required to update to latest")&&window.location.reload()},500))})}),e(void 0)}).catch(a=>{console.error("Service Worker Init error",a),t(a)}),setTimeout(()=>{t()},3e4)})},di="wico_site";function ui(){const n=atob(localStorage.getItem(di)||"");return n?JSON.parse(n):{}}function mi(n,e){const t=ui();t[n]=e,localStorage.setItem(di,btoa(JSON.stringify(t)))}function gi(){window.wico={fetchMenus:li}}async function Go(){await Jo()}const W={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"},ie={ENTITY_PAGE_LINKER:"s_page",PAGE_WIDGET_LINKER:"body",ENTITY_PROJECT_LINKER:"s_project",PROJECT_PAGE_LINKER:"s_page"},xt=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],ia=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],Nn=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],Qo=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let Pa=[],Ba=[];async function Yo(n){let e="";for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const a=n[t];e+=` ${t}="${a}" `}return e}async function Ko(n,e){const t=new z;t.composition=n,t.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const a=await be([t],e),i=a?.data?.the_widget?.the_widget_html?.[0]?.id,o=a?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,s=a?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!i)return{html:"",css:"",js:""};const r=await To(i,["contain_s"]);Pa=await ka(r.externalConnections),Ba=await ka(r.internalConnections);let l=await pi(i,Pa,Ba);const u=document.createElement("div");return u.innerHTML=l,{html:(u?.querySelector(".widget-wrapper")).innerHTML,css:o||"",js:s||""}}async function pi(n,e,t){try{let a="",o=Xo(e)[n];if(o!=null){let s=es(o);const l=(await Gi())?.map(g=>{const m=g?.id,p=g?.data?.the_element?.the_element_name?.[0]?.data?.the_name,h=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,w=g?.data?.the_element?.the_element_void?.[0]?.data?.the_void,C=g?.data?.the_element?.the_element_s_attribute?.map(T=>{const b=T?.data?.the_attribute,y=b?.the_attribute_name?.[0]?.data?.the_name,E=b?.the_attribute_type?.[0]?.data?.the_type,L=b?.the_attribute_value?.[0]?.data?.the_value;return{name:y,type:E,value:L}});return{id:m,name:p,tag:h,void:w,attributes:C}}),u=[...ia,...Nn],d=(await I())?.userId;for(let g=0;g<s.length;g++){const m=s[g];if(m.ofTheConceptId==n){const p=await Zo(m.toTheConceptId,t),h=Object.keys(p.data)[0],w=p.data[h],v=xt.includes(h),C=await Yo(w?.attributes||[]),T=l.find(y=>y.tag===h.toLowerCase().trim()),b=w?.attributes;for(const y in b){const E=u.find(S=>y===S?.name?.toLowerCase().trim()),L=b[y],_=E?.type;T.attributes=T?.attributes?.map(S=>(S?.name==="className"&&y==="class"?S.value=L:S?.name==="elementContent"?S.value=w?.innerText:y===S?.name&&(_==="array"?S.selected=L:_==="boolean"?S.value="":S.value=L),S))}if(h!="text"){const y=await ni(p.id,d);y?.length&&await en(y?.[0]?.id);const E={[`wdgt${p.id}`]:T},L=await Ge(E,null,null,null,d);console.log("elementAttributeComp ->",L),a+=`
            <div id="wdgt${p.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${T?.id}">
            <${h} data-cc-id="${p.id}" `+C+`${v?"/></div>":">"}`,a+=await pi(m.toTheConceptId,e,t)}(w.contains=="false"||h=="text")&&(a+=" "+w.innerText+" "),!v&&h!="text"&&(a+=`</${h}></div>`)}}}return a}catch(a){console.error("error converting html",a)}}async function Zo(n,e){var t=[],a={},i=e;t=i;for(var o=[],s=0;s<t.length;s++)o.includes(t[s].ofTheConceptId)||o.push(t[s].ofTheConceptId);var r=await D(n);if(r.id==0&&n!=null&&n!=null){var l=await D(n);r=l}var u=await So(n,t,o),c=r?.type?.characterValue??"";a[c]=u;var d={};return d.data=a,d.id=n,d}function Xo(n){return n.reduce((e,t)=>{const{ofTheConceptId:a}=t;return e[a]||(e[a]=[]),e[a].push(t),e},{})}function es(n){const e=new Map;n.forEach(o=>{e.set(o.id,o)});const t=[],a=new Set,i=o=>{if(!a.has(o.id)){a.add(o.id),t.push(o);for(const s of n)s.orderId==o.id&&i(s)}};return n.forEach(o=>{o.orderId==1e3&&i(o)}),t}async function Xc(){return"WICO"}async function $e(){const n=await ri();await en(n?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await _o("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async function ts(n,e){var t=[];try{var a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization",`Bearer ${e}`),a.append("Randomizer",ea.BASE_RANDOMIZER.toString());const i=await fetch(U.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:a,body:JSON.stringify({id:n})});return i.ok?await i.json():(console.log("recursive search error ",i.status),t)}catch(i){console.log(i)}}async function hi(n,e,t=1e3,a){const i=n.userId,l=await Zn("contain_s",999,999,i);return await Xn(n.id,e.id,l.id,t)}const ns="the_widget";async function as(n,e,t){return await is(n,e,t)}async function is(n,e,t){const o=new DOMParser().parseFromString(n,"text/html").body,s=await Ge({[ns]:{}});e&&await os(e,s),t&&await ss(t,s);const r=await Ge({widgetHTML:{}});await H(s,r,"html");const l=await fi(o.children[0],r);return await hi(r,l),await j.SyncDataOnline(),s}async function os(n,e){const a=(await I())?.userId,o=await X("the_widgetCSS",n,!0,a,4,999);await H(e,o,"css")}async function ss(n,e){const a=(await I())?.userId,o=await X("the_widgetJS",n,!0,a,4,999);await H(e,o,"js")}async function fi(n,e){console.log("parentConcept ->",e);const t={};if(t.tagName=n?.tagName?.toLowerCase(),n?.attributes?.length>0){t.attributes={};for(let o of n.attributes)t.attributes[o.name]=o.value}n?.textContent?.trim()&&(t.text=n.textContent.trim());let a={[t.tagName?t.tagName:"text"]:{contains:n?.children?.length?"true":"false",attributes:t.attributes||"",innerText:n?.children?.length?"":t.text||""}};const i=await Ge(a);if(n?.childNodes?.length>0){t.children=[];let o=[],s=-1,r,l;for(let c of n.childNodes)if(!(c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()==="")&&!(n.children.length===0&&c.nodeType===Node.TEXT_NODE)){if(c.nodeType===Node.TEXT_NODE){let d={text:{contains:!1,attributes:"",innerText:c.textContent?.trim()}};const g=await Ge(d);o.push({parentConcept:i,childConcept:g,orderId:l})}else c.nodeType===Node.ELEMENT_NODE&&(r=await fi(c,i),o.push({parentConcept:i,childConcept:r,orderId:l}));s>=0&&(o[s]={...o[s],orderId:r?.id}),s++}let u=1e3;for(let c=0;c<o.length;c++){const d=o[c];u=(await hi(d.parentConcept,d.childConcept,u)).id}}return i}const rs="widget-conceptualizer",ls="0.0.0",cs="module",ds={dev:"vite --config vite.config.js --force",build:"tsc && vite build --config vite.config.prod.js",preview:"vite preview"},us={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},ms={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.186-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},$a={name:rs,private:!0,version:ls,type:cs,scripts:ds,devDependencies:us,dependencies:ms};function gs(n,e,t,a){switch(t){case"int":n=n.sort(function(i,o){return parseInt(i[e])>parseInt(o[e])?1:parseInt(i[e])<parseInt(o[e])?-1:0});break;default:n=n.sort(function(i,o){return i[e].toLowerCase()>o[e].toLowerCase()?1:i[e].toLowerCase()<o[e].toLowerCase()?-1:0})}}function Dn(n){let e={};for(let t=0;t<n.length;t++){const a=n[t];a?.type&&a?.type!=="submit"&&(e[a.name]=a?.value)}return e}function ps(n){const e=$a.dependencies||{},t=$a.devDependencies||{};return e[n]||t[n]||null}async function ot(n,e,t,a,i){await oe(n,e);const o=await X(t,a,!1,i,4,999);let s=await Zn(e,999,999,i);return await Xn(n,o?.id,s.id,1e3,s.characterValue,i),"Delete and update completed"}class Xe{async generateSlug(e){const t=await I();let a=new z;a.composition=t?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new z;i.fullLinkers=["the_page_slug"],i.inpage=100;const o=[a,i];let s=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return await Ia(o,"",Pn).subscribe(r=>{const l=r?.the_entity?.the_entity_s_page?.map(d=>d?.the_page?.the_page_slug?.[0]?.the_page_slug)||[];let u=s,c=s.match(/^(.*?)(?:-(\d+))?$/);if(c){u=c[1];let g=(c[2]?parseInt(c[2],10):0)+1;for(;l.includes(s);)s=`${u}-${g++}`}}),s}async checkSlugAvailablity(e){const t=await I();let a=new z;a.composition=t?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new z;i.fullLinkers=["the_page_slug"],i.inpage=100;const o=[a,i];let s=!0;return await Ia(o,"",Pn).subscribe(r=>{(r?.the_entity?.the_entity_s_page?.map(u=>u?.the_page?.the_page_slug?.[0]?.the_page_slug)||[]).includes(e)&&(s=!1)}),s}async savePage(e,t,a){const i=await q(W.PAGE_COMP_NAME,t,e),o=await Y(a);return await H(o,i,ie.ENTITY_PAGE_LINKER),i}async renamePage(e,t,a){return await ot(Number(t),"the_page_title","title",e?.title,a),await ot(Number(t),"the_page_slug","slug",e?.slug,a),"renamed"}async getAllPages(e){const t=await I(),a=t?.token;let i=new z;e?i.composition=e:i.composition=t.entityId,i.fullLinkers=[`the_entity_${ie.ENTITY_PAGE_LINKER}`],i.inpage=100;let o=new z;return o.fullLinkers=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_body`],o.inpage=100,(await be([i,o],a))?.data?.the_entity?.[`the_entity_${ie.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const t=await I();if(!t?.token)return null;const a=t?.token;let i=new z;i.composition=e,i.fullLinkers=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_meta_title`,`the_${W.PAGE_COMP_NAME}_meta_description`,`the_${W.PAGE_COMP_NAME}_meta_keywords`,`the_${W.PAGE_COMP_NAME}_width`,`the_${W.PAGE_COMP_NAME}_type`,`the_${W.PAGE_COMP_NAME}_font_family`,`the_${W.PAGE_COMP_NAME}_font_size`,`the_${W.PAGE_COMP_NAME}_body`],i.inpage=100;let o=new z;return o.fullLinkers=[`the_${W.WIDGET_COMP_NAME}_clean`],o.inpage=100,await be([i,o],a)}async isPageTemplate(e){const t=new M;t.name="template",t.typeConnection="the_website_template_page",t.reverse=!0;const a=new M;return a.name="page",a.conceptIds=[e],a.freeschemaQueries=[t],a.outputFormat=se,((await Ae(a,""))?.[0]?.data?.the_website_template_page_count||0)>0}async getPageById(e){return new Promise(async t=>{const i=(await I())?.token||"";let o=new M;o.conceptIds=[e],o.outputFormat=se,o.selectors=[`the_${W.PAGE_COMP_NAME}_html_cache`,`the_${W.PAGE_COMP_NAME}_css_cache`,`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_meta_title`,`the_${W.PAGE_COMP_NAME}_meta_description`,`the_${W.PAGE_COMP_NAME}_meta_keywords`,`the_${W.PAGE_COMP_NAME}_width`,`the_${W.PAGE_COMP_NAME}_type`,`the_${W.PAGE_COMP_NAME}_font_family`,`the_${W.PAGE_COMP_NAME}_font_size`,`the_${W.PAGE_COMP_NAME}_body`,`the_${W.WIDGET_COMP_NAME}_clean`],o.inpage=100,ye(o,i).subscribe(async s=>{if(s.length)t(s?.[0]);else if(!Array.isArray(s)&&s?.data==null){const r="There is no data.";A.infoMessageToast(r,4),t({error:!0,message:r})}}).catch(s=>{const r=s?.message;A.errorToast(`${r}`,4),t({error:!0,message:r})})})}async updatePageField(e,t,a){const i=await I(),o=`the_${W.PAGE_COMP_NAME}_${e}`;await oe(a,o);const s=await D(a),r=await X(`${e}`,`${t}`,!1,i.userId,4,999);await H(s,r,e),await j.SyncDataOnline()}async deletePage(e){await We(e)}}class yi{_pagesService;constructor(){this._pagesService=new Xe}async getPagesListHTML(){window.pageHandler=Ur;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(a=>{let i=a?.data?.[`the_${W.PAGE_COMP_NAME}`],o=i?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,s=i?.[`the_${W.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
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
          `}catch(e){return console.error("error",e),e?.status===401&&$e(),`
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
    `}}const hs=(()=>{const n=()=>{document.querySelectorAll("#navBarContainer > span").forEach(s=>{s.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(s=>{s.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(s=>{s.remove()})};return{toggle:i=>{const o=i.target,s=o?.dataset?.id;if(o.classList.contains("activeNavigationIcon")){n();return}if(s){document.querySelectorAll("#navBarContainer > span").forEach(d=>{d.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(d=>{d.classList.remove("navActive")});const u=document.getElementById(s);document.querySelector(`[data-id='${s}']`)?.classList.add("activeNavigationIcon"),u?.classList.add("navActive"),s=="fs-all-pages-list"&&new ga().initPagesSidebar()}},collapseNavbar:i=>{const o=i.target;document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.getElementById(o.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")})},checkForActiveNavigation:()=>{const i=document.querySelector(".activeNavigationIcon");if(i){const o=i.dataset?.id||"";document.getElementById(o)?.classList.remove("navActive")}},resetNavigationBar:n}})();function jt(n){return new Promise(e=>{const t=document.createElement("div");t.className="custom-confirm-modal",t.innerHTML=`
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
        `,t.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(t),e(!0)}),t.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(t),e(!1)}),document.body.appendChild(t)})}class F{static staticElement;static previousSelectedStaticElement}function Ht(){const n=document.getElementById("select-box");n.style.display="none"}function Na(){const n=document.getElementById("select-box");nt(),n.style.transition="none",Ot()}function Ot(){const n=F?.staticElement;if(n){const e=n.getBoundingClientRect(),t=e.left,a=e.top,i=document.getElementById("select-box");i.style.display="block",i.style.width=n.offsetWidth+"px",i.style.height=n.offsetHeight+"px",i.style.top=`calc(${a}px)`,i.style.left=`calc(${t}px)`}}function pe(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),t=a=>{a.removeEventListener("click",tt),a.removeEventListener("mouseenter",ft),a.removeEventListener("mouseleave",nt)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&t(a)}),e.forEach(a=>{a.classList.contains("fslayout-row")?(a.addEventListener("click",function(i){i.target===a&&(i.preventDefault(),i.stopPropagation(),tt(i))}),a.addEventListener("mouseenter",ft),a.addEventListener("mouseleave",nt)):a.classList.contains("fslayout-col")?a.addEventListener("click",function(i){if(i.target===a){i.preventDefault(),i.stopPropagation();const o=a.closest(".fslayout-row");if(o){const s=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(s,"target",{value:o}),tt(s)}}}):a.closest(".fslayout-col")?(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),tt(i)}),a.addEventListener("mouseenter",ft),a.addEventListener("mouseleave",nt)):(a.closest(".edited-widget-container")||!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),tt(i)}),a.addEventListener("mouseenter",ft),a.addEventListener("mouseleave",nt))})}function fs(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),t=a=>{a.removeEventListener("click",tt),a.removeEventListener("mouseenter",ft),a.removeEventListener("mouseleave",nt)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&t(a)})}class Ie{static instance;static events=new Map;constructor(){}static getInstance(){return Ie.instance||(Ie.instance=new Ie),Ie.instance}static subscribe(e,t){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(t)}static publish(e,t){this.events.has(e)&&this.events.get(e).forEach(a=>a(t))}static unsubscribe(e,t){if(this.events.has(e)){const a=this.events.get(e),i=a.indexOf(t);i>-1&&a.splice(i,1)}}}class ys extends Co{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=Ie.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),t=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(t),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),Ie.subscribe("page:elementClick",a=>{this.handlePageElementClick(a)}),Ie.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),t=this.buildTree(e);t&&this.treeRoot&&this.treeRoot.appendChild(t)}getHtml(){return""}handlePageElementClick(e){let t=e;for(;t&&!this.treeItems.has(t);)t=t.parentElement;if(t){const a=this.treeItems.get(t);if(a){document.querySelectorAll(".tree-item").forEach(o=>{o.classList.remove("active")}),a.classList.add("active"),a.scrollIntoView({behavior:"smooth",block:"center"});let i=a.closest(".tree-node")?.parentElement;for(;i;){if(i.classList.contains("children")&&i.classList.contains("hidden")){i.classList.remove("hidden");const o=i.previousElementSibling?.querySelector(".toggle-btn");o&&(o.innerHTML="▼")}i=i.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const t=document.createElement("div");t.className="tree-node";const a=document.createElement("div");a.className="tree-item",this.treeItems.set(e,a);const i=e.tagName.toLowerCase(),o=e.id?`#${e.id}`:"",s=Array.from(e.classList).map(l=>`.${l}`).join("");if(e.children.length>0){const l=document.createElement("button");l.className="toggle-btn",l.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',l.onclick=u=>{u.preventDefault(),u.stopPropagation();const c=t.querySelector(".children"),d=c.classList.contains("hidden");c.classList.toggle("hidden"),l.innerHTML=d?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},a.appendChild(l)}s.includes(".added-widget-container")&&a.classList.add("widget-tree-node");const r=document.createElement("div");if(r.classList.add("text-truncate"),r.innerHTML=`
      <span class="element-tag">${i}</span>
      <span class="element-id">${o}</span>
      <span class="element-class">${s}</span>
    `,a.appendChild(r),a.onmouseenter=()=>this.handleHover(e),a.onmouseleave=()=>this.handleHover(null),a.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},t.appendChild(a),e.children.length>0){const l=document.createElement("div");l.className="children hidden",Array.from(e.children).forEach(u=>{if(u instanceof HTMLElement){const c=this.buildTree(u);c&&l.appendChild(c)}}),t.appendChild(l)}return o!=="#widget-details"?t:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const t=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(t)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(a=>{this.isAllExpanded?a.classList.remove("hidden"):a.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(a=>{a.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function de(){const n=document.getElementById("tree-root");n.innerHTML="";const e=f.staticWidgetTree.html,t=document.querySelector(".toggle-all-btn");e?(t.style.display="flex",new ys().mount(n)):(t.style.display="none",n.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class jn{static navbar}function ws(n){return n?.widgetcodeId}async function wi(n,e,t=!0,a,i,o=null){console.log("parentWidget",o);let s=new Lt;s.html=n.html,s.widgetState={...a},s.widgetType=n.type,s.componentDidMountFunction=n.before_render,s.addEventFunction=n.after_render,s.mountChildWidgetsFunction=n.mount_child,s.customFunctions=n.custom_functions,s.widgetDependenciesData=n.dependency,s.inDevelopment=!0,e.innerHTML="";let r=e;if(t=!1,r&&(await s.mount(r),n.widget=s,n.children.length>0&&s.childWidgetElement?.length>0))for(let l=0;l<n.children?.length;l++){let u=n.children[l];for(let c=0;c<s.childWidgetElement.length;c++){let d=s.childWidgetElement[c];if(u.wrapper===d.id){const g=B.clearDraggedWidget(u),m=await wi(g,d,t,s.widgetState,i,s);s.childWidgets.push(m),s.css=s.css+m.css+`#${u.wrapper} { ${u.css} }`,m.dataChange(p=>{let h=p?.type?.characterValue;h&&(s.childrenData[h]=p)})}}}return s}function $t(n,e,t=!1,a,i,o){let s=Date.now();const r=document.createElement("div");if(r.innerHTML=`<div id="wdgtcopy${s}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,t==!1)if(e!=0&&e!=null&&e!=null&&o){console.log("beforeElement -->",a),document.getElementById("builder-workarea")===n&&(i="inside");const u=n.parentElement,c=r.firstChild;if(i==="above")u.insertBefore(c,n);else if(i==="below"){const g=n.nextElementSibling;g?u.insertBefore(c,g):n.parentNode.appendChild(r.firstChild)}else if(i==="inside"){const g=la(n,o.clientY);g==null?n.appendChild(c):n.insertBefore(c,g)}return document.getElementById(`wdgtcopy${s}`)?document.getElementById(`wdgtcopy${s}`):n.querySelector(`#wdgtcopy${s}`)}else return n.insertBefore(r.firstChild,a),document.getElementById(`wdgtcopy${s}`)?document.getElementById(`wdgtcopy${s}`):n.querySelector(`#wdgtcopy${s}`);return n}const Qe=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],Re=["span","a","img","button","input","label","textarea","select"],vs=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],Da={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...Re]},h2:{accepts:[...Re]},h3:{accepts:[...Re]},h4:{accepts:[...Re]},h5:{accepts:[...Re]},h6:{accepts:[...Re]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...Re]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},bs=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function Hn(n,e){const t=n.target,a=n.target;let i=null;for(const d of a.children){const g=d.getBoundingClientRect();if(n.pageY<g.top+window.scrollY){i=d;break}}t.classList.remove("dragging-area");const o=_s(t,"added-widget-container"),s=n.clientY;let r,l;if(o){let d=function(g,m){const p=g.height,h=m-g.top;return h<p*.25?"above":h>p*.75?"below":"inside"};if(r=o.getBoundingClientRect(),l=d(r,s),l==="inside")return{status:!1,message:"Cannot be dropped inside WIDGET!"}}else r=t.getBoundingClientRect(),l=_t(r,s);const u=e?.data_type||"",c=n?.target?.tagName?.toLowerCase();return xt.includes(c)&&l==="inside"?{status:!1,message:`${u} cannot be dropped inside ${c} tag.`}:Qe.includes(c)&&Da[c]?.accepts?.length&&!Da[c]?.accepts?.includes(u)&&l==="inside"?{status:!1,message:`${u} cannot be dropped inside ${c} tag.`}:{status:!0,message:"",elementBelowDrag:i,dropzoneEl:o||t}}function _s(n,e){for(;n;){if(n.classList&&n.classList.contains(e))return n;n=n.parentElement}return!1}class ae{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(t=>t.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const t=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${t}`)).slice(0,-1).forEach(i=>i.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(t),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const t=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,t.from-6),t.from)!=="tsccs.")return null;const i=Object.keys(ai).filter(o=>o.startsWith(t.text));return i.length>0?{from:t.from,to:t.to,options:i.map(o=>({label:o,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new te({doc:"/* Write your code here */",extensions:[st,rt,tn(),nn({activateOnTyping:!0}),Io.data.of({autocomplete:this.tsccsCompletions}),na(),aa(Mo(new No,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),an.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(t=>{if(t.docChanged){const a=t?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=a;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=a;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=a;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=a;break;case"widgetDependencies-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.dependency=a;break;default:const o=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(s=>`${s.slug}-editor-split`===this.editorContainerId);o?.length&&(o[0].code=a)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function vi(n){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",n)try{const t=await lt.format(n,{parser:"babel",plugins:[sn,rn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=t}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function Es(){const n=new ae("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function bi(n,e){const t=document.querySelector('.cm-content[data-language="css"]');if(t.innerHTML="/* Write your CSS here */",e){let a=document.querySelector(".child-widget-style");a||(a=document.createElement("style"),a.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",a)),a.textContent+=e}if(n)try{const i=(t.textContent+n).split("/* Write your CSS here */").join(" ");t.textContent=i;const o=await lt.format(i,{parser:"css",plugins:[Do],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});t.textContent=o||"/* Write your CSS here */"}catch(a){console.error("CSS formatting error:",a),t.textContent=n}}async function _i(n){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",n)try{const t=await lt.format(n,{parser:"babel",plugins:[sn,rn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=t}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function Ts(){const n=new ae("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function me(n){const e=document.querySelector('.cm-content[data-language="html"]'),t=document.getElementById("builder-workarea");if(t?.querySelector("#widget-details")?.remove(),e)try{const i=document.createElement("div");let o=n||t?.innerHTML||"";i.innerHTML=o;const s=i.firstChild;s&&s.nodeType===1&&s.classList.contains("mftsccs-marking-element")&&(o=s.innerHTML),i.innerHTML=o;async function r(u){if(u.dataset.widgetid){const c=await Y(Number(u.dataset.widgetid));c&&c.typeCharacter=="the_widget"&&(u.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let c=0;c<u.childNodes.length;c++){const d=u.childNodes[c];d instanceof HTMLElement&&await r(d)}}await r(i),o=i.innerHTML;const l=await lt.format(o,{parser:"html",plugins:[jo],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=l||"<!-- Write your HTML here -->"}catch(i){console.error("HTML formatting error:",i),e.textContent=n}else alert("widget html editor not found in dom")}async function Ss(n){const e=document.getElementById("widgetTypeValue");e&&(e.value=n||"");const t=document.getElementById("widgetType");t&&(t.value=n||"")}function ln(n){if(!n)return;const e=document.getElementById("builder-workarea"),t=document.createElement("div");t.id="widget-details",t.innerHTML="",t.innerHTML=`
    <button onclick="openDocumentationModal(${n}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(t)}function oa(){const n=document.querySelector(".content-target");n.innerHTML="",n.textContent="Widget Loading..."}function cn(){return document.querySelectorAll(".content-target")[0]}function ja(n){const e={past:[],present:n,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(t){e.past.push(e.present),e.present=t,e.future=[]},undo(){if(e.past.length===0)return;const t=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=t,t},redo(){if(e.future.length===0)return;const t=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=t,t}}}class N{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),t=document.getElementById("redo-btn");e?.addEventListener("click",N.undoAction),t?.addEventListener("click",N.redoAction)}static renderActionHistory(){N.actionHistories=ja(JSON.stringify(f?.staticWidgetTree)),ja(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:t}=N.actionHistories.getState(),a=document.getElementById("undo-btn"),i=document.getElementById("redo-btn");a&&(a.disabled=!e),i&&(i.disabled=!t)}static async undoAction(){const e=N.actionHistories.undo();e!==void 0&&(Ua(e||""),N.updateButtonStates())}static async redoAction(){const e=N.actionHistories.redo();e!==void 0&&(Ua(e||""),N.updateButtonStates())}static updateActionHistories(){N.actionHistories.push(JSON.stringify(f.staticWidgetTree)),N.updateButtonStates()}}async function Cs(){const n=document.getElementById("widget-prompt-modal");n&&n.remove()}async function Ls(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function xs(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function As(){const n=document.getElementById("prompt-text");n.addEventListener("input",()=>{n.style.height="auto";const e=Math.min(n.scrollHeight-8,120);n.style.height=`${e}px`,n.style.overflowY=e===120?"auto":"hidden"})}class Ei{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const t=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],i=((o,s=3)=>{if(o.length<s)return[];const r=new Set;for(;r.size<s;){const l=Math.floor(Math.random()*o.length);r.add(l)}return[...r]})(t,2);this.randomSuggestionEl=i?.map(o=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${t[o]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),As(),setTimeout(()=>{const t=document.querySelector(".aiAssistantTabs"),a=document.querySelectorAll("#aiChatContainer, #prototypeWidget");t.querySelector("button").classList.add("active"),a[0].classList.add("active"),t.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll("button").forEach(r=>r.classList.remove("active")),a.forEach(r=>r.classList.remove("active"));const o=i.dataset.id,s=document.getElementById(o);i.classList.add("active"),s?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=Cs,window.minimizeAssistant=Ls,window.maximizeAssistant=xs,`
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
    `}}async function Ws(n){const e=document.getElementById("widget-btn-wrapper");if(e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
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
          `;const a=e.querySelector("#updateDropDownArrow"),i=e.querySelector("#update-widget-btn");i&&a&&i.addEventListener("click",()=>{i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),a&&i&&a.addEventListener("click",()=>{i.classList.contains("d-none")?(i.classList.remove("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function ks(){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function Is(){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class Ti{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.main.empty?a({changes:{from:i.main.from,insert:"  "},selection:{anchor:i.main.from+2}}):a({changes:{from:i.main.from,to:i.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new te({doc:"<!-- Write your HTML here -->",extensions:[st,rt,Po(),nn(),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),te.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),an.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateHTML(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=Tt;class Si{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(a=>a.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const t=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=t,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new te({doc:"/* Write your JavaScript here */",extensions:[st,rt,tn(),nn(),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),te.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),an.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(async t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateJS(a)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function Ha(){const n=document.getElementById("codeBlocksContainer"),e=n.querySelectorAll(".sub-tab-btn");if(!n.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const a=document.getElementById("onmount-editor-split");a&&a.classList.add("active")}}async function Ci(n){const e=n?.id,t=n?.code,a=n?.slug,i=n?.name,o=document.querySelectorAll(".custom-service-btn"),s=Array.from(o)?.filter(d=>d?.getAttribute("data-subtab")===a),r=document.getElementById("lifecycle"),l=r?.querySelector(".sub-tab-nav");if(!s.length){const d=document.createElement("button");d.classList.add("sub-tab-btn","custom-service-btn"),d.setAttribute("data-subtab",a),d.innerHTML=`
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
    `,l?.appendChild(d);const g=document.createElement("div");g.classList.add("sub-tab-content","custom-editor-content"),g.id=`${a}-editor-split`,g.setAttribute("data-subtab",a),r?.appendChild(g);const m=`${a}-editor-split`;Ms(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(d=>{d.addEventListener("click",function(){const g=d.getAttribute("data-subtab"),m=d.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(p=>{p.classList.remove("active")}),d.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${g}"]`)?.classList.add("active")})}),setTimeout(async()=>{const d=document.querySelector(`#${a}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(d&&(d.textContent="/* Write your code here */",t))try{const g=await lt.format(t,{parser:"babel",plugins:[sn,rn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});d.textContent=g}catch(g){console.error("JS formatting error:",g),d.textContent=t}},500)}async function Ms(n){await new ae(n).initializeEditor()}async function Ps(n,e,t){const a=e.trim().toLocaleLowerCase().split(" ").join("-"),i=f.staticWidgetTree?.custom_functions?.filter(c=>c.slug===n);i[0].name=e,i[0].slug=a;const o=document.querySelector(`button[data-subtab=${n}]`);o?.setAttribute("data-subtab",a),o.innerHTML=`
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
  `;const s=o?.querySelector("span.service-name");s&&(s.innerText=e);const r=document.getElementById(`${n}-editor-split`);r?.setAttribute("data-subtab",a),r.id=`${a}-editor-split`,await new ae(`${a}-editor-split`).initializeEditor();const u=f.staticWidgetTree?.custom_functions?.filter(c=>c.slug===a);Ci(u?.[0]),_e("rename-custom-function-modal")}class Bs{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,t){this.customFunctionId=t,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const a=document.getElementById("rename-custom-function-modal").querySelector("form");a&&a.addEventListener("submit",i=>{i.preventDefault();const o=a.customFunctionName.value.trim(),s=/^[_A-Za-z][_A-Za-z ]*$/.test(o),r=document.getElementById("service-rename-error");s?(r.textContent="",r.classList.add("d-none"),Ps(this.currentCustomFunctionSlug,o,this.customFunctionId)):(r.classList.remove("d-none"),r.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
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
    `}}const dn="unsaved_widget";async function On(){if(ra())return;const e=Ns(),t={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},a=JSON.stringify(t),i=new Blob([a]).size,s=4.5*1024*1024-e;if(i<=s)try{localStorage.setItem(dn,a),sa("save-widget")}catch(r){console.error("Error saving to localStorage:",r)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),At()}function $s(n){return new Blob([n]).size}function Ns(){let n=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const t=localStorage.getItem(e);n+=$s(e+t)}return n}async function At(){localStorage.removeItem(dn),gt()}const Ln=async n=>{if(ra())return;n?.preventDefault();const t=localStorage.getItem(dn);if(t){const a=JSON.parse(t);f.widgetTree=a?.widgetTree;const i=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,o=new URLSearchParams(window.location.search).get("widget-id");i===Number(o)?(i||B.enableWidgetButtons(),await Oe(),N.updateActionHistories(),A.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},sa=async(n="")=>{if(ra())return;const t=document.querySelector("#widget-properties .row"),a=document.getElementById("btn-draft-widget"),i=localStorage.getItem(dn),o=JSON.parse(i),s=o?.widgetTree?.origin||o?.widgetTree?.widgetId,r=new URLSearchParams(window.location.search).get("widget-id");if(i&&!a){if(s!==Number(r)){gt();return}const l=document.createElement("div");l.id="draft-widget",l.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),l.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,t?.appendChild(l);const u=document.getElementById("btn-draft-widget");u?.removeEventListener("click",c=>Ln(c)),u?.addEventListener("click",c=>Ln(c)),s===0&&!n&&setTimeout(()=>{Ln()},0)}else i&&a?(s!==Number(r)||s===Number(r)&&!n)&&gt():!i&&a&&gt()};function gt(){document.getElementById("draft-widget")?.remove()}function ra(){const n=window.location.href,t=new URL(n).searchParams.get("page-id");return t||""}class Ds{static concepts=[];static connections=[];static transactions;static renderVisualTree(){let e={concepts:this.concepts,connections:this.connections},t=document.getElementById("tree-root-vccs");t&&Be(U.visual_widget,t,e,!1)}static async getLocalConcepts(){this.renderVisualTree()}}const at=(()=>{function n(u){const c=u.target,d=document.getElementById("codeBlocksContainer");d&&d.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),c.classList.add("selected")}function e(u){const c=u.target,d=document.getElementById("codeBlocksContainer");d&&d.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),c.classList.add("selected")}async function t(u){B.enableWidgetButtons();try{await Oe(),On(),N.updateActionHistories(),Ds.getLocalConcepts(),A.infoMessageToast(u)}catch(c){A.errorToast("widget synchronization failed"),console.error(c)}}const a=()=>{const u=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),u.style.display="flex";const g=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});g&&g.dispatchEvent(m),ze.enableHeader()},i=()=>{const u=document.getElementById("widgetButtionCodeViewWrapper"),c=document.createElement("div");c.classList.add("codeSplitViewButton");const d=document.createElement("div");d.appendChild(c);const g=document.createElement("div");g.id="codeBlocksContainer",g.innerHTML=`
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
`,u?.appendChild(g),document.querySelectorAll(".tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(L=>L.classList.remove("active")),y.classList.add("active"),document.getElementById(E)?.classList.add("active")})}),g.querySelectorAll(".sub-tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-subtab"),L=y.closest(".tab-content");L?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(_=>{_.classList.remove("active")}),y.classList.add("active"),L?.querySelector(`.sub-tab-content[data-subtab="${E}"]`)?.classList.add("active")})});const h=document.querySelector(".fullscreenicon"),w=document.querySelector("#widgetButtionCodeViewWrapper");h?.addEventListener("click",()=>{w.classList.contains("fullscreen")?ze.enableHeader():ze.disableHeader(),w.classList.toggle("fullscreen")});const v=document.querySelector(".close-btn");v&&v.addEventListener("click",a),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>t("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(d.firstChild),setTimeout(()=>{const y=document.querySelector(".codeSplitViewButton");y&&(y.removeEventListener("click",n),y.addEventListener("click",n));const E=document.getElementById("designSplitViewButton");E&&(E.removeEventListener("click",e),E.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",y=>o(y))};function o(u){u.stopPropagation();try{const c="add-custom-service-dialog";document.getElementById(c)?.remove();const g=document.createElement("dialog");g.setAttribute("id",c),g.classList.add("col-md-3"),g.innerHTML=`
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
      `;const m=g.querySelector("form");return m&&m.addEventListener("submit",p=>{p.preventDefault();const h=m?.serviceName?.value.trim(),w=/^[_A-Za-z][_A-Za-z ]*$/.test(h),v=document.getElementById("service-name-error");w?(v.textContent="",v.classList.add("d-none"),l(p)):(v.classList.remove("d-none"),v.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(g),re(c),"OPENED"}catch(c){console.error("Failed to rename widget:",c)}}async function s(u,c,d){console.log("openRenameCustomFunction -->",u,c,d),new Bs(c,d),await re("rename-custom-function-modal")}async function r(u,c,d){u.preventDefault();try{if(confirm("Do you want to delete the Service?")){A.infoMessageToast("Deleting the service...",0),d&&await We(Number(d));const m=`button[data-subtab=${c}]`;document.querySelector(m)?.remove(),document.getElementById(`${c}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(E=>E.slug!==c);const w=document.getElementById("codeBlocksContainer");return w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(g){A.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",g)}}async function l(u){u.preventDefault();const c=u.target,g=new FormData(c).get("serviceName");let m=g?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const p=document.getElementById("lifecycle"),h=p?.querySelector("div.sub-tab-nav"),w=document.getElementById("codeBlocksContainer");w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active");const T=document.createElement("button");T.classList.add("sub-tab-btn","custom-service-btn","active"),T.setAttribute("data-subtab",m),T.innerHTML=`
      <span class="service-name">${g}</span>
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
    `,h.appendChild(T);const b=document.createElement("div");b.classList.add("sub-tab-content","custom-editor-content","active"),b.setAttribute("data-subtab",m),b.setAttribute("id",`${m}-editor-split`),p.appendChild(b),await new ae(`${m}-editor-split`).initializeEditor();const E={name:g,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(E),document.querySelectorAll(".tab-btn").forEach(S=>{S.addEventListener("click",function(){const x=S.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(k=>k.classList.remove("active")),S.classList.add("active"),document.getElementById(x)?.classList.add("active")})}),(w?.querySelectorAll(".sub-tab-btn")).forEach(S=>{S.addEventListener("click",function(){const x=S.getAttribute("data-subtab"),k=S.closest(".tab-content");k?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(P=>{P.classList.remove("active")}),S.classList.add("active"),k?.querySelector(`.sub-tab-content[data-subtab="${x}"]`)?.classList.add("active")})}),_e("add-custom-service-dialog")}return{initializeCodeBlock:i,closeCodeView:a,synchronizeWidget:t,openRenameCustomFunction:s,deleteCustomFunction:r}})();async function js(){await sa();const n=document.getElementById("select-box");if(n.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(S=>{S.remove()}),document.querySelectorAll(".custom-editor-content").forEach(S=>{S.remove()});const E=document.getElementById("codeBlocksContainer"),L=E?.querySelectorAll(".sub-tab-btn");E?.querySelector(".sub-tab-btn.active")||(L?.[0]?.classList.add("active"),E?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),N.renderActionHistory(),N.updateActionHistories(),_n(f.staticWidgetTree),document.head.querySelectorAll("link.vde-css")?.forEach(b=>b.remove()),de();const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const i=document.getElementById("widget-builder");i.textContent="Widget Builder Panel",i.setAttribute("title","Widget Builder Panel"),B.disableWidgetButtons(),await new Ki().initializeEditor(),await new Si().initializeEditor(),await new ae("onmount-editor-split").initializeEditor(),await new ae("onupdate-editor-split").initializeEditor(),await new ae("addevents-editor-split").initializeEditor(),await new ae("mountchildwidgets-editor-split").initializeEditor(),await new Ti().initializeEditor(),await new ae("widgetDependencies-editor-split").initializeEditor();const m=document.getElementById("widgetNameValue");m.value="";const p=document.getElementById("widgetTypeValue");p&&(p.value="");const h=document.getElementById("widgetType");h&&(h.value=""),document.getElementById("widget-version").classList.add("d-none");const v=document.getElementById("element-attributes");v.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,Ca(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function Hs(){const n=new Lo;f.widgetTree=n,at.synchronizeWidget("Workspace Cleared")}let De="",qt="";async function Oa(n){try{const t=(await I())?.token,a=await fetch(`${U.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(n)});if(!a.ok){const u=await a?.text(),c=JSON.parse(u);throw A.errorToast(c.message),console.error(`API Error (${a.status}):`,u),Ft(a.statusText,"error"),new Error(`API request failed with status ${a.status}`)}const i=a.body.getReader(),o=new TextDecoder("utf-8");let s="",r=null;for(;;){const{value:u,done:c}=await i.read();if(c)break;s+=o.decode(u,{stream:!0});const d=s.split(`

`);for(let g=0;g<d.length-1;g++){const m=d[g].trim();if(m.startsWith("data:")){const p=m?.slice(6).trim();try{const h=JSON.parse(p);if(h.status==="responding"&&await qs(h.message_str),h.status==="success"&&(r=h),h.status==="error")throw A.errorToast(h.message?.[0]||"AI Error"),new Error(h.message?.[0])}catch(h){console.warn("Stream parse error:",h)}}}s=d[d.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),r}catch(e){return console.error(e),null}}async function Li(n){try{const e=JSON.stringify(f.staticWidgetTree),t=await I(),a={query:n.text_input,widgetTree:f.staticWidgetTree},i=await fetch(`${U.agentURL}/widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.token}`},body:JSON.stringify(a)});console.log("response_data -->",i);const o=await i.json();console.log("tree_data -->",o,typeof o);let s=o.data.widgetTree.data||o.data.widgetTree;typeof s=="string"&&(s=JSON.parse(s)),f.staticWidgetTree=s,B.enableWidgetButtons(),await Oe(),On(),N.updateActionHistories();return}catch(e){throw Fn("prompt-loader"),console.error("AI model error",e),A.errorToast("There is some error"),e}}async function Os(n,e=""){e||(await Je(n),f.resetWidgetTree()),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new Ei("");const i=document.getElementById("prompt-text");De="",i.addEventListener("input",function(){const l=i.value.trim(),c=document.getElementById("prompt-form")?.querySelector(".button-send");c.disabled=l.length===0}),i?.addEventListener("keydown",function(l){if(l.key==="Enter"&&!l.shiftKey){l.preventDefault();const u={text_input:i?.value,chat_id:"",widget_type:"",stream:!0};De&&(u.tag="followup",u.chat_id=De,u.widget_type=qt),bt(u,e)}}),document.querySelector(".button-send").addEventListener("click",function(l){l.preventDefault();const u={text_input:i?.value,chat_id:"",widget_type:"",stream:!0};De&&(u.tag="followup",u.chat_id=De,u.widget_type=qt),bt(u,e)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(l=>{l?.addEventListener("click",function(u){u.preventDefault(),i.value=l?.innerText})})}async function bt(n,e){if(e)qn(n.text_input),qa("Assistant is working"),await Li(n),Fn("prompt-loader");else if(n.text_input){qn(n.text_input),qa("Assistant is working");const t=await Oa(n);if(Fn("prompt-loader"),!t)return;De=t?.data?.chat_id,qt=t?.data?.widget_type;const a=t?.message;if(f.staticWidgetTree.assistant={input:t?.data?.user_prompt,id:De,type:qt},t?.status=="error")A.errorToast(a);else{if(n.widget_type!=="list"){n.widget_type==="form"&&xi(De);const s=new Function("tsccs",t.data.data_structure_prototype)(ai);let r=document.getElementById("prototypeWidget");Be(U.visual_prototype_widget,r,{prototype:s}).then(l=>{l.dataChange(async u=>{const c={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:u,type:"application/JSON",stream:!0};try{const d=await Oa(c);await Vn(d)}catch(d){throw d}})})}await Ft(a);const i=document.createElement("button");i.classList.add("clearWorkspaceButton"),i.textContent="Clear Workspace",i.classList.add("btn","btn-danger"),i.addEventListener("click",()=>{Hs(),i.remove()}),await Ft(i),oa(),await Vn(t)}}}async function Ft(n,e){const t=document.querySelector(".chat-content"),a=document.createElement("div");if(a.classList.add("message","message-bot"),n instanceof HTMLButtonElement){const i=document.querySelector(".clearWorkspaceButton");i&&i.remove(),a.appendChild(n)}else e==="error"&&a.classList.add("text-danger","my-0","text-center"),a.innerText=n;t?.scrollTo({top:t.scrollHeight,behavior:"smooth"}),t?.insertAdjacentElement("beforeend",a)}async function qs(n,e){const t=document.getElementById("response-status");if(t)t.innerHTML=n;else{const a=document.querySelector(".chat-content"),i=document.createElement("div");i.id="response-status",i.classList.add("message","message-bot"),i.innerHTML=n,a?.insertAdjacentElement("beforeend",i),a?.scrollTo({top:a.scrollHeight,behavior:"smooth"})}}function qn(n){const e=document.getElementById("default-message"),t=document.querySelector(".chat-content"),a=document.createElement("div");a.classList.add("message","message-user"),a.innerText=n,t?.insertAdjacentElement("beforeend",a),e?.remove();const i=document.getElementById("prompt-text");i.value="",i.style.height="44px"}function qa(n){Fs("prompt-form");const e=document.getElementById("prompt-content"),t=document.createElement("div");t.id="prompt-loader",t.textContent=n,e?.insertAdjacentElement("beforeend",t)}function Fn(n){document.getElementById(n)?.remove(),Vs("prompt-form")}function Fs(n){const e=document.getElementById(n);for(let t of e.elements)t.disabled=!0}function Vs(n){const e=document.getElementById(n);for(let t of e.elements)t.disabled=!1}async function Vn(n){const e=n?.data?.ui?.html||"",t=n?.data?.ui?.css||"",a=n?.data?.ui?.js||"",i=n?.data?.before_render||"",o=n?.data?.after_render||"",s={html:e,css:t,js:a,before_render:i,after_render:o,assistant:{id:n?.data?.chat_id,input:n?.data?.user_prompt,type:n?.data?.widget_type}};await Rs(s)}async function Rs(n){f.staticWidgetTree.html=n.html,f.staticWidgetTree.css=n.css,f.staticWidgetTree.js=n.js,f.staticWidgetTree.before_render=n.before_render,f.staticWidgetTree.after_render=n.after_render,f.staticWidgetTree.assistant=n.assistant;const e=f.staticWidgetTree,t=document.getElementById("builder-workarea");t.innerHTML="";const a=await wi(e,t);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await K(e,!1,a),N.renderActionHistory(),N.updateActionHistories(),de(),pe()}async function xi(n){document.getElementById("prompt-suggestion")?.remove();const t={text_input:"create a list widget for it",chat_id:n,widget_type:"list",stream:!0},a=document.createElement("div");a.id="prompt-suggestion",a.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",a),document.getElementById("request-list-widget").addEventListener("click",async s=>{s.preventDefault(),bt(t,""),ks(),Is()})}async function Us(n){new Ei(n?.id),qn(n?.input),await Ft("Widget Generated Successfully!!"),n.type==="form"&&xi(n?.id);const e=document.getElementById("prompt-text"),t={text_input:e?.value,chat_id:n?.id||"",widget_type:n?.type||"",tag:n?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(i){i.key==="Enter"&&(i.shiftKey||(i.preventDefault(),t.text_input=e?.value,bt(t,"")))}),document.querySelector(".button-send").addEventListener("click",function(i){i.preventDefault(),t.text_input=e?.value,bt(t,"")})}async function zs(n){const e=document.querySelector("#widgetDependencies-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");e.textContent="/* Write your code here */";try{const a=n?.split("/* Write your code here */")?.join(" ");if(a){const i=await lt.format(a,{parser:"babel",plugins:[sn,rn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=i||"/* Write your code here */"}}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function K(n,e,t,a,i){Ss(n?.type),zs(n?.dependency);const o=e?"":n?.css,s=e?`div[data-widgetid="${n.id}"] {${n.css}}
${t?.css}`:t?.css;if(await bi(o,s),me(n?.html),await vi(n?.after_render),await _i(n?.before_render),n?.custom_functions?.length){const r=document.querySelectorAll(".custom-service-btn"),l=Array.from(r)?.map(d=>d.getAttribute("data-subtab")??""),u=n.custom_functions?.map(d=>d.slug);(l?.filter(d=>!u.includes(d))).forEach(d=>{const g=document.querySelector(`.custom-service-btn[data-subtab="${d}"]`);g&&g.remove(),document.getElementById(`${d}-editor-split`)?.remove()}),Ha(),n.custom_functions?.forEach(d=>{Ci(d)})}else document.querySelectorAll(".custom-service-btn").forEach(u=>{u.remove()}),document.querySelectorAll(".custom-editor-content").forEach(u=>{u.remove()}),Ha();(a||i)&&ln(n?.origin?n?.origin:n?.widgetId),a&&n?.assistant?.id&&Us(n?.assistant)}const Rn="drop-indicator";function Ai(){let n=document.querySelector(`.${Rn}`);return n||(n=document.createElement("div"),n.className=Rn,document.body.appendChild(n)),n}function Js(n,e){const t=Ai(),a=n.getBoundingClientRect();e==="top"?t.style.top=`${a.top-5}px`:e==="bottom"&&(t.style.top=`${a.bottom-5}px`),t.style.left=`${a.left}px`,t.style.width=`${a.width}px`,t.style.opacity="1",t.style.transform="scaleY(1)"}function Wi(){document.querySelectorAll(`.${Rn}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function Gs(n,e,t){if(e.length===0)return{element:t,position:"top"};const a=n.clientY;let i=e[0],o=Math.abs(i.getBoundingClientRect().top-a);Math.abs(i.getBoundingClientRect().bottom-a);for(const u of e){const c=u.getBoundingClientRect(),d=Math.abs(c.top-a);Math.abs(c.bottom-a),d<o&&(i=u,o=d)}const s=i.getBoundingClientRect(),r=s.top+s.height/2,l=a<r?"top":"bottom";return{element:i,position:l}}async function He(n){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(a=>{a.remove()});const t=document.querySelectorAll("script.vde-js");if(t?.length&&t?.forEach(a=>{a.remove()}),await _n(n),n?.children?.length)for(const a of n?.children){const i=a?.library;i?.css?.length&&i?.css?.forEach(o=>{const s=o?.url,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r)}),i?.js.length&&i?.js?.forEach(async o=>{await new Promise((s,r)=>{const l=o?.url,u=document.createElement("script");u.classList.add("vde-js"),u.setAttribute("type","text/javascript"),u.setAttribute("src",l),u.setAttribute("crossorigin","anonymous"),u.onload=()=>{s()},u.onerror=c=>{console.error("Failed to load script:",l,c),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(u)})})}}let G=null,ne;function un(){const n=document.querySelector(".content-target > .mftsccs-marking-element");if(n){const e=document.querySelector(".content-target");Le.fixContentTargetHeight(e,n)}}function Qs(n){G=n.target;const e=n.target;let t={data_type:n.target.getAttribute("data-type"),data_default:n.target.getAttribute("data-default"),data_void:n.target.getAttribute("data-void"),data_text:n.target.getAttribute("data-text"),elementId:n.target.getAttribute("data-elementId"),dataId:n.target.id,imageUrl:e.imageUrl,displayType:e.displayType};n.dataTransfer.setData("text",JSON.stringify(t)),n.dataTransfer.setData("id",n.target.id),n.dataTransfer.effectAllowed="move"}async function Ys(n){n.stopPropagation();const e=n.target,t={widgetcodeId:n.target.getAttribute("data-widgetId"),sourceElementId:n.target.id,className:n.target.className,imageUrl:e.imageUrl,displayType:e.displayType,type:e.Type};n.dataTransfer.setData("text",JSON.stringify(t)),n.dataTransfer.effectAllowed="move"}function Ks(n){n.preventDefault(),n.stopPropagation(),n.target.classList.add("dragging-area"),Wt.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",fs()}function Zs(n){n.preventDefault(),n.stopPropagation(),n.target.classList.remove("dragging-area")}function Xs(n){n.preventDefault(),n.stopPropagation(),(!G||!(n.currentTarget instanceof HTMLElement))&&(G=n?.target);const e=n.target,t=Array.from(e.children).filter(i=>i!==G);Ai();const a=Gs(n,t,e);ne=a,Js(a.element,a.position)}function er(){B.checkContent()?B.enableWidgetButtons():B.disableWidgetButtons()}async function tr(n){const e=await mn(n);G=null,Wi(),N.updateActionHistories(),Wt.collapseNavbar(),er(),un(),de(),e&&(me(),ln(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),pe()}function Vt(n,e){return Array.isArray(n?.children)&&(n.children=n?.children.filter(t=>t?.wrapper!==e),n.children.forEach(t=>Vt(t,e))),n}function Ye(n,e){let t;return Array.isArray(n?.children)&&(t=n?.children.filter(a=>a?.wrapper===e),n.children.forEach(a=>Ye(a,e))),t?.[0]}async function nr(n){n.preventDefault(),n.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(d=>{const g=document.getElementById(`${d}-content`);if(g&&g.style.display==="block"){const m={target:g.previousElementSibling};Tt(m,`${d}-content`)}});const t=document.getElementById("element-attributes");if(t&&t.style.display==="block"){const d={target:document.querySelector("#icon-attribute")};Tt(d,"element-attributes")}const a=F.staticElement,i=a?.parentElement,o=i?.parentElement,s=o?.dataset?.widgetid,r=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container"),l=a.querySelectorAll(".added-widget-container");if(a?.classList?.contains("added-widget-container")){const d=a?.id;Vt(f?.staticWidgetTree,d)}else l.length&&l.forEach(d=>{const g=d?.id;Vt(f?.staticWidgetTree,g)});if(r){const d=r.id;if(a?.remove(),F.staticElement.remove(),Ht(),a?.classList?.contains("added-widget-container")){const g=Ye(f?.staticWidgetTree,d);if(g){const m=r.querySelector(".mftsccs-marking-element");g.html=m?.innerHTML,K(g)}}else{const m=document.getElementById(d).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,K(f.selectedStaticWidgetTreeInfo.widgetTree)}de(),N.updateActionHistories();return}i?.classList.contains("mftsccs-marking-element")&&i.children.length===1&&i?.remove(),s&&(o?.children?.length||o?.remove()),a?.remove(),F.staticElement.remove(),Ht();const u=await it();return f.staticWidgetTree.html=u,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},nc(),K(f?.staticWidgetTree),de(),N.updateActionHistories(),B.checkContent()||(B.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}function ar(n){return"drag"}function ir(n){return n.dataTransfer.setData("text",n.target.id),"start drag"}function or(n){console.log("dragEndWidgetElement event ->",n)}function sr(n){return n.preventDefault(),n.stopPropagation(),"dragOverWidgetElement"}async function rr(n){await mn(n),me()}let Rt=null;async function ki(n,e){if(!n)return console.error("dropFolderElement called without event"),!1;(c=>"dataTransfer"in c&&c.dataTransfer!==null)(n)&&(n.preventDefault(),n.stopPropagation());const a=n.target instanceof HTMLElement?n.target:null;if(!G)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let o=n.target;if(!o.classList.contains("mftsccs-marking-element")&&!o.classList.contains("fslayout-col")&&o.id!=="builder-workarea"){const c=document.getElementById("builder-workarea"),d=o.closest(".mftsccs-marking-element"),g=o.closest(".fslayout-col");o=d||g||c}if((G.contains(o)||G===o)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),o=document.getElementById("builder-workarea")),!o)return console.error("Invalid dropzone"),!1;o?.classList.remove("dragging-area");let s=Hn(n,e);if(!s.status)return alert(s.message),G=null,!1;const r=e.dataType||e.type||e.data_type,l=r==="photo"||r==="Image"||r==="img",u=r==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(l){let c,d=!1;if(G&&G.tagName&&G.tagName.toLowerCase()==="img"){if(d=!0,c=G,c.parentElement===o&&console.log("Image is already in this dropzone, just repositioning"),!(c instanceof Node))return console.error("draggedItem is not a valid DOM node:",c),G=null,!1;(!c.hasAttribute("style")||!c.style.width)&&c.setAttribute("style","width: 200px;")}else{const w=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(o.querySelectorAll(`img[src="${w}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),G=null,!1;c=document.createElement("img"),c.setAttribute("src",w),c.setAttribute("style","width: 200px;")}let g=Le.generateUUID();c.setAttribute("element-info-id",g);const m=o.classList.contains("file-item")&&o.classList.contains("photo-file")&&o.classList.contains("dragging");let p=c;if(m){const w=document.createElement("div");w.appendChild(c),p=w}try{if(d){const w=m&&c.parentElement?.parentElement||c.parentElement,v=m?c.parentElement:c;w&&w!==o&&v&&w.removeChild(v)}ne?.position==="top"&&o?.children?.length&&ne?.element?o.contains(ne.element)&&!p.contains(ne.element)&&p!==ne.element?o.insertBefore(p,ne.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),o.appendChild(p)):ne?.position==="bottom"&&ne?.element?o.contains(ne.element)&&!p.contains(ne.element)&&p!==ne.element?ne.element.insertAdjacentElement("afterend",p):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),o.appendChild(p)):o.appendChild(p)}catch(w){console.error("Error positioning element:",w instanceof Error?w.message:w);try{o.appendChild(p)}catch(v){return console.error("Cannot append element:",v),G=null,!1}}c.removeAttribute("element-info-id");const h=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container");if(h){const w=h.id,v=Ye(f?.staticWidgetTree,w);if(v){const C=h.querySelector(".mftsccs-marking-element");C&&(v.html=C.innerHTML,await K(v))}return G=null,!1}return lr(),G=null,!0}else if(u){if(!s.status)return alert(s.message),G=null,!1;if(e.sourceElementId){const S=e.sourceElementId||e.fileId;console.log("sourceElement ->",S)}let c=e.widget_id;if(!c)return console.error("Widget ID is missing from data"),G=null,!1;o.classList.remove("dragging-area");const d=document.createElement("div");d.classList.add("wb-initial-empty"),d.style.display="block",d.style.marginBottom="10px",d.setAttribute("data-widget-id",c.toString());const g=Le.generateUUID();d.id=`widget-${g}`;const m=await I();let p=o.classList.contains("publicWidgetRouter"),h=await ge(Number(c));const w=n.clientY,v=o.getBoundingClientRect(),C=_t(v,w);let T;if(!p){const S=await Me(Number(c),m.token);h=await ge(S?S.widgetId:Number(c)),h?.children?.length&&await gn(h),T=$t(o,S?S.widgetId:c,!1,s.elementBelowDrag,C,n)}const b=B.clearDraggedWidget(h),y=await fe(b,T);b.wrapper=T?.id,Wi();const E=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container");if(E){const S=E.id,x=Ye(f?.staticWidgetTree,S);x&&x.children.push(b);const P=document.getElementById(S).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=P?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=P?.style.cssText,await K(f.selectedStaticWidgetTreeInfo.widgetTree),G=null,!1}const L=await Et();f.staticWidgetTree.html=L,f.staticWidgetTree?.children?.push(b);const _=f.widgetTree.children.indexOf(b);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[_],isChildWidget:!0,childWidgetIndex:_},await He(b),await K(b,!1,y),B.enableWidgetButtons(),G=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),G=null,!1}function lr(){document.querySelectorAll(".mftsccs-marking-element img").forEach(n=>{n.setAttribute("draggable","true"),n.addEventListener("dragstart",e=>{e.stopPropagation(),Rt=Date.now()}),n.addEventListener("dragend",e=>{e.stopPropagation(),setTimeout(()=>{Rt=null},100)})})}function cr(){Rt=null,G=null,console.log("dragStartTime",Rt)}async function mn(n,e=!1,t,a){if(!n&&e&&t&&a){const l=await ge(Number(t)),u=$t(a,t,!1,null,"below",n),c=B.clearDraggedWidget(l);let d=await fe(c,u);c.wrapper=u?.id;const g=await it();f.staticWidgetTree.html=g,f.staticWidgetTree?.children?.push(c);const m=f.widgetTree.children.indexOf(c);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[m],isChildWidget:!0,childWidgetIndex:m},await He(c),K(c,!1,d),B.enableWidgetButtons();return}if(!n){console.error("dropElement called without event");return}n.preventDefault(),n.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let o=n.dataTransfer.getData("text");if((l=>{try{return JSON.parse(l),!0}catch{return!1}})(o))if(Object.keys(JSON.parse(o)).includes("widgetcodeId")){const l=JSON.parse(o);let u=Hn(n,l);const c=l.className.split(" ");if(!u.status){alert(u.message);return}const d=JSON.parse(o);if(d.sourceElementId){const x=document.getElementById(d.sourceElementId.toString());if(x){n.target.insertBefore(x,u.elementBelowDrag??null);return}}let g=ws(d),m=u?.dropzoneEl;m.classList.remove("dragging-area");const p=await I();let h=!1;c.includes("publicWidgetRouter")&&(h=!0);let w=null,v=null;const C=n.clientY,T=m.getBoundingClientRect(),b=_t(T,C);if(h){w=await ge(Number(g)),v=$t(m,g,!1,u.elementBelowDrag,b,n);const x=document.getElementById("widgetNameValue");x&&w?.name&&(x.value=w?.name);const k=document.getElementById("widget-builder");k&&w?.name&&(k.textContent="Widget Builder Panel: "+w?.name)}else{const x=await Me(g,p.token);w=await ge(x?x.widgetId:Number(g));const k=document.getElementById("widgetNameValue");k&&w?.name&&(k.value=w?.name);const P=document.getElementById("widget-builder");P&&w?.name&&(P.textContent="Widget Builder Panel: "+w?.name),w?.children?.length&&await gn(w),v=$t(m,x?x.widgetId:g,!1,u.elementBelowDrag,b,n)}const y=B.clearDraggedWidget(w);let E=await fe(y,v);y.wrapper=v?.id;const L=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(L){const x=L.id,k=Ye(f?.staticWidgetTree,x);k&&k.children.push(y);const $=document.getElementById(x).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=$?.innerHTML,await He(f.selectedStaticWidgetTreeInfo.widgetTree),K(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const _=await it();f.staticWidgetTree.html=_,f.staticWidgetTree?.children?.push(y);const S=f.widgetTree.children.indexOf(y);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[S],isChildWidget:!0,childWidgetIndex:S},await He(y),K(y,!1,E),B.enableWidgetButtons()}else{let l=function(w,v){document.getElementById("builder-workarea")===w&&(v="inside");let T=Le.generateUUID();const b=ec(T,u),y=document.createElement("div");y.innerHTML=b;const E=y.firstChild,L=w.parentElement;if(v==="above")L.insertBefore(E,w);else if(v==="below"){const S=w.nextElementSibling;S?L.insertBefore(E,S):L.appendChild(E)}else if(v==="inside"){const S=la(w,n.clientY);S==null?w.appendChild(E):w.insertBefore(E,S)}n.target.classList.remove("dragging-area");let _=E;u.data_type=="layout"?_.querySelectorAll(".fslayout-col").forEach(x=>{x.classList.add("wb-initial-empty")}):(_.classList.add("wb-initial-empty"),u?.data_type==="img"&&(_?.setAttribute("src","/images/img-placeholder.jpg"),_?.setAttribute("style","width: 200px;"))),_.removeAttribute("element-info-id"),u?.data_type==="img"&&(_?.setAttribute("src","/images/img-placeholder.jpg"),_?.setAttribute("style","width: 200px;"))};const u=JSON.parse(o);let c=Hn(n,u);const d=c?.dropzoneEl;if(c.status){const w=n.clientY,v=d.getBoundingClientRect(),C=_t(v,w);l(d,C)}else alert(c.message);const g=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(g){const w=g.id,v=Ye(f?.staticWidgetTree,w);if(v){const C=g.querySelector(".mftsccs-marking-element");v.html=C?.innerHTML,await K(v)}return n.dataTransfer.clearData(),!1}const m=document.querySelector(".content-target"),h=(await ke(m,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=h;try{n.dataTransfer.clearData()}catch(w){console.error("error in clearing data",w instanceof Error?w.message:String(w))}return!0}else{const l=F.staticElement,u=n.target;u.classList.remove("dragging-area"),ne?.position==="top"&&u?.children?.length?u.insertBefore(l,ne?.element):ne?.position==="bottom"?ne?.element?.insertAdjacentElement("afterend",l):u.appendChild(l),Ht();const c=await it();f.staticWidgetTree.html=c}}function la(n,e){return Array.from(n.children)?.reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY,element:null}).element}function _t(n,e){const t=n.height,a=e-n.top;return a<t*.25?"above":a>t*.75?"below":"inside"}function dr(n){const o=new DOMParser().parseFromString(n,"text/html").body.querySelector("div")?.id,r=document.getElementById(o)?.parentElement?.closest(".added-widget-container"),l=r?.id,u=r?.querySelectorAll(".widget_container_disabled");return u?.length&&u?.forEach(c=>{const d=Le.generateUUID();c.id=`wdgt${d}`}),l?.toString()}async function gn(n){return Array.isArray(n.children)&&n.children.forEach(e=>{Ii(e,n),e.children.length&&gn(e)}),n}function Ii(n,e){const t=n.wrapper,o=new DOMParser().parseFromString(e?.html,"text/html").body,s=o.querySelector(`#${t}`);if(!s)return n;const l=`wdgtcopy${Le.generateUUID()}`;return s.id=l,n.wrapper=l,e.html=o.innerHTML.toString(),n}const ur=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:un,dragElement:ar,dragEndWidgetElement:or,dragOverWidgetElement:sr,dragStartWidgetElement:ir,dropElement:mn,dropFolderElement:ki,dropWidgetElement:rr,findChildByWrapper:Ye,getChildWrapperId:dr,getChildrenWrapperId:Ii,getDragAfterElement:la,getDropType:_t,onDragEnter:Ks,onDragLeave:Zs,onDragOver:Xs,onDragStart:Qs,onDrop:tr,onWidgetDragStart:Ys,removeChildByWrapper:Vt,removeElement:nr,resetDragState:cr,updateAllChildWidgets:gn},Symbol.toStringTag,{value:"Module"})),mr=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],ca=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class Mi{constructor(){}async getLayoutListHTML(){return ca.map(t=>`
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
      `).join("")}async getTemplateLayoutsHTML(){const e=await Nl();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const t=await I(),a=t?.entityId===101651686||t?.entityId===101279491;return e.map(i=>i.id?`
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
      `:"").join("")}}const gr=n=>{const e=n?.id;if(!e)return null;const t=n?.data?.the_widget;return{widgetId:e,widgetVersion:t?.the_widget_version?.[0]?.data?.the_version??null,widgetName:t?.the_widget_name?.[0]?.data?.the_name??"",widgetType:t?.the_widget_type?.[0]?.data?.the_type??""}},pr=async n=>{const e=new Map,t=new M;t.typeConnection="the_widget_version",t.name="version";const a=(r,l,u=!1)=>{const c=new M;return c.typeConnection=r,c.name=l,c.freeschemaQueries=[t],c.selectors=["the_widget_name","the_widget_type"],u&&(c.reverse=!0),c},i=a("the_widget_s_copy","copywidgets"),o=a("the_widget_root","rootwidgets",!0),s=new M;return s.conceptIds=[n],s.freeschemaQueries=[i,o],s.inpage=100,s.outputFormat=xo,await new Promise(r=>{ye(s,"").subscribe(l=>{const u=l?.[0]?.data?.the_widget;if(!u){console.warn("No widget data found."),r();return}const c=[...u?.the_widget_s_copy??[],...u?.the_widget_root_reverse??[]];for(let d=0;d<c.length;d++){const g=gr(c[d]);g&&e.set(g.widgetId,g)}r()})}),e};async function Me(n,e){let t=new z;t.composition=n,t.fullLinkers=["the_widget_recent","the_widget_latest"],t.inpage=100;let a=new z;a.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],a.inpage=100;const o=await be([t,a],e),r=await je(n,"the_widget_recent"),l=o?.data?.the_widget?.the_widget_recent||o?.data?.the_widget?.the_widget_latest||[],u=o?.data?.the_widget?.the_widget_latest||null;if(l.length){const c=l[0],d=c?.data.the_widget.the_widget_name?.[0].data.the_name,g=c?.data.the_widget.the_widget_html?.[0].data.the_html,m=c?.id,p=c?.data.the_widget.the_widget_css?.[0].data.the_css,h=c?.data.the_widget.the_widget_js?.[0].data.the_js,w=c?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,v=c?.data.the_widget.the_widget_version?.[0].data.the_version,C=c?.data.the_widget.the_widget_origin?.[0].data.the_origin|n;return{widgetName:d,widgetHTML:g,widgetCSS:p,widgetJS:h,widgetTimestamp:w,widgetVersion:Number(v||u?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||u.id,origin:Number(C),connectionIdLatest:r,publishedWidgetVersion:u?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const B=(()=>{const n=async()=>{const b=document.getElementById("fslayout-template-container");if(b){b.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const E=await new Mi().getTemplateLayoutsHTML();b.innerHTML=E}},e=async()=>{const b=document.getElementById("public-widget-list-container");if(b){const y=await Qn();!y||y.trim()===""?b.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:b.innerHTML=y||""}},t=async()=>{const b=document.getElementById("folder-widget-container");if(b){const y=await $l();!y||y.trim()===""?b.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:b.innerHTML=y||""}},a=async()=>{const b=await Gn();jn.navbar.setSavedWidgets(b);const y=document.getElementById("saved-widget-list-container");y&&(!b||b.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=b||"")},i=async()=>{const b=await Gn();jn.navbar.setSavedWidgets(b);const y=document.getElementById("folder-widget-container");y&&(!b||b.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=b||"")},o=async(b,y,E,L,_,S,x)=>{if(L&&!_&&!S||_&&!L&&!S||S&&!x){console.error("creating widget copy argument required.");return}let k=null;k=await ge(b.id);let P=null,$=null,V=[],O=0;S||(P=await Me(b.id,E),$=P?.origin?P?.origin:b.id,O=P?.widgetVersion?P?.widgetVersion:0,V=P?.connectionIdLatest?P.connectionIdLatest:null);const Ve={type:_?_.mainWidgetTypevalue:k.type,after_render:_?_.addeventsScript:k.after_render,before_render:_?_.onmountScript:k.before_render,dependency:_?_.dependency:k.dependency,update:_?_.onupdateScript:k.update,mount_child:_?_.mountchildwidgetsScript:k.mount_child,name:S?x:k?.name,html:S?k.html:_?_.widgetHTMLToUpdate:k.html,clean:_?_.widgetCleanHTMLToUpdate:k?.clean,css:_?_.widgetCSSToUpdate:k?.css?.toString(),js:_?_.widgetJSToUpdate:k?.js?.toString(),timestamp:_?_.widgetTimestampToUpdate:new Date().toISOString(),...!S&&{version:O?O+1:1,origin:$}},Ee=await D(k.id);let Te=k.root!==0?k.root:k.origin;const R=await D(Te||k.id),Q=await q("widget",y,Ve);if(_?.assistant?.id){const Z=await q("assistant",y,_?.assistant);await H(Q,Z,"assistant")}if(_?.library?.css?.length){const Z=_?.library?.css;for(let ee=0;ee<Z.length;ee++){const le=await q("css_library",y,Z[ee]);await H(Q,le,"s_css_library")}}if(_?.library?.js?.length){const Z=_?.library?.js;for(let ee=0;ee<Z.length;ee++){const le=await q("js_library",y,Z[ee]);await H(Q,le,"s_js_library")}}if(_?.custom_functions?.length){const Z=_?.custom_functions;for(let ee=0;ee<Z.length;ee++){const le=await q("custom_function",y,Z[ee]);await H(Q,le,"s_custom_function")}}if(!L&&!_&&S&&k?.children.length&&f.createChildWidget(k.children,Q),await H(R,Q,"s_copy"),await H(Q,Ee,"root"),V&&V.length)for(let Z=0;Z<V.length;Z++)await Ne(V[Z].id);return await H(R,Q,"recent"),Q},s=async b=>{b.stopPropagation();const y=Number(b.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(y){A.infoMessageToast("Deleting your widget from public...",0);const L=await je(y,"the_public_widget_s_widget",!0);await Ne(L[0].id),await oe(y,"the_widget_description"),await oe(y,"the_widget_thumbnail"),await oe(y,"the_widget_public_name"),await e(),await t(),await a(),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},r=async b=>{b.stopPropagation();const y=prompt("What would you like to name this imported widget?");if(!y||!y.trim())return;const E=Number(b.target.dataset.pubwidid);if(E){A.infoMessageToast("Importing widget...",0);try{const L=document.querySelector(".infoMessageToast"),_=await ge(E);f.widgetTree=_,await f.saveWidget(y),await a(),await i(),L?.remove(),A.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}},l=async b=>{b.stopPropagation();const y=Number(b.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(y){A.infoMessageToast("Deleting your widget from templates...",0);const L=await je(y,"the_template_widget_s_widget",!0);await Ne(L[0].id),await oe(y,"the_widget_template_thumbnail"),await oe(y,"the_widget_template_name"),await n(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},u=()=>document.querySelector(".content-target").innerHTML.trim()!=="",c=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E&&E.classList.remove("disabled")})},d=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E?E.classList.add("disabled"):console.log("button not found",y)})},g=b=>{const y=document.createElement("div");y.innerHTML=b.html;const E=y.querySelectorAll("div[data-elementid]");return E?.length&&E.forEach(L=>{L.className="widget_container_disabled"}),b.html=y.innerHTML,b.html=b.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,L=>L.replace(/\btrue\b/g,"false").trim()),b.html=b.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,L=>L.replace(/\bhover-element\b/g,"").trim()),b.html=b.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,L=>L.replace(/\bwb-block\b/g,"").trim()),b.html=b.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,L=>L.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),b.html=b.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,L=>L.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),b};async function m(b){try{if(A.infoMessageToast("Updating your widget preference",0),b){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const E=await je(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(E.length!==1&&E.length>0)for(let L=1;L<E.length;L++){const _=E[L];await Ne(_.id)}if(b){if(!E.length){const L=await D(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const _=await X("use_latest","true",!1,f.userId,999);await H(L,_,"use_latest"),await j.SyncDataOnline()}}else if(E.length>0)for(let L=0;L<E.length;L++){const _=E[L];await Ne(_.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await T(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;A.successfullToast("Widget Preference Updated.")}catch(y){throw y}finally{document.querySelector(".infoMessageToast")?.remove()}}async function p(b,y,E){y.checked||E?(b.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(b.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),E||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const h=new Map,w=()=>{const b=document.getElementById("widget-version");if(!b)return;b.innerHTML="",b.classList.remove("d-none"),b.classList.add("d-flex","flex-column","gap-2");const y=document.createElement("div");y.classList.add("d-flex","justify-content-between","align-items-center");const E=document.createElement("label");E.setAttribute("for","widgetVersionValue"),E.textContent="Widget Versions:";const L=document.createElement("div");L.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",L.id="useLtsSwitch";const _=document.createElement("input");_.type="checkbox",_.className="form-check-input",_.id="alwaysUseLTS";const S=document.createElement("label");S.className="form-check-label ms-2",S.setAttribute("for","alwaysUseLTS"),S.textContent="Use LTS",L.appendChild(_),L.appendChild(S),y.appendChild(E),y.appendChild(L);const x=document.createElement("select");return x.name="input-widgetVersionValue",x.id="widgetVersionValue",x.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(b.appendChild(y),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(_.checked=!0,p(x,_,!0)),_.addEventListener("change",async()=>{try{await p(x,_,!1)}catch(k){console.error("useLtsError",k),k instanceof Error&&A.errorToast(k.message),_.checked=!_.checked}})):b.appendChild(E),b.appendChild(x),x},v=()=>{const b=document.getElementById("widget-version");if(!b){console.warn("Widget version container not found");return}const y=document.getElementById("widgetVersionValue");y&&(h.forEach(E=>{y.removeEventListener("change",E)}),h.clear()),b.innerHTML="",b.classList.remove("d-flex"),b.classList.add("d-none")},C=async(b,y,E)=>{try{const L=await I(),_=document.getElementById("widgetVersionValue");_&&h.forEach(O=>{_.removeEventListener("change",O)});const S=w();if(!S){console.error("Failed to create select element");return}const x=await Me(b,L?.token),k=x?.widgetVersion,P=new Date(x?.widgetTimestamp).toLocaleString();let $=new Date(E).toLocaleString();if($==="Invalid Date"&&($=new Date().toLocaleString()),x){const O=document.createElement("option"),Ve=Math.random().toString(36).substring(2,8);O.value=btoa(`${Ve}/${b}`),O.textContent=`Original ${y==="original"?`(Current) (${$})`:""}`,(!x||!x.publishedWidgetVersion)&&(O.textContent+=" (Published)"),S.appendChild(O);const Ee=await pr(b);Array.from(Ee.values()).filter(R=>!!R.widgetVersion&&!isNaN(Number(R.widgetVersion))).sort((R,Q)=>Number(R.widgetVersion)-Number(Q.widgetVersion)).forEach(R=>{const Q=document.createElement("option"),Z=Math.random().toString(36).substring(2,8);Q.value=btoa(`${Z}/${R.widgetId}`),Q.textContent=`Version ${R.widgetVersion} ${Number(R.widgetVersion)==Number(y)?"(Current)"+(k===Number(R.widgetVersion)?` (${P})`:` (${$})`):""}`,Number(R.widgetVersion)==Number(y)&&(Q.selected=!0),x.publishedWidgetVersion&&Number(R.widgetVersion)===Number(x.publishedWidgetVersion)&&(Q.textContent+=" (Published)"),S.appendChild(Q)})}else{const O=document.createElement("option");O.value="",O.textContent=`Original (current) (${$})`,O.selected=!0,S.appendChild(O)}if(h.has(b)){const O=h.get(b);S.removeEventListener("change",O),h.delete(b)}const V=T(b,L.entityId);h.set(b,V),S.addEventListener("change",V)}catch(L){console.error("Error initializing widget versions:",L)}},T=(b,y,E)=>{async function L(_){_&&_.preventDefault();let S="";if(E&&E===!0){f.token||await f.getUserDetails();const $=await Me(b,f.token);$&&(S=$.publishedWidgetVersion)}else{const V=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",y),S=V?.value||""}if(!S)return;const k=atob(S).split("/");let P=k.length===2?parseInt(k[1],10):NaN;if(P)if(f.selectedStaticWidgetTreeInfo.isChildWidget){try{const V=await ge(P),O=JSON.parse(JSON.stringify(f.staticWidgetTree)),Ee=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,Te={...V,wrapper:Ee};let R=!1;const Q=ee=>{for(let le=0;le<ee.length;le++){if(ee[le].wrapper===Ee){ee[le]=Te,R=!0;break}if(ee[le].children&&ee[le].children.length>0&&(Q(ee[le].children),R))break}};if(Q(O.children),!R){console.error("Could not find child widget to update"),A.errorToast("Failed to update widget");return}f.widgetTree=O,f.selectedStaticWidgetTreeInfo.widgetTree=Te,E&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const Z=document.getElementById(Ee);if(Z){Z.innerHTML="",await fe(Te,Z);const ee=V.id||P;Z.setAttribute("data-widgetid",ee.toString()),K(Te,!1),de(),A.successfullToast("Widget version updated")}}catch(V){console.error("Error updating child widget version:",V),A.errorToast("Error updating widget version")}return}else{await kt(null,P,b);return}}return L};return{createWidgetCopy:o,removeMyWidgetFromPublic:s,removeFromTemplate:l,renderSavedWidgets:a,renderBoomWidgets:i,renderPublicWidgets:e,renderTemplateLayouts:n,saveFromPublic:r,checkContent:u,enableWidgetButtons:c,disableWidgetButtons:d,clearDraggedWidget:g,initializeWidgetVersions:C,removeWidgetContainer:v,loadWidgetVersionWith:T}})(),Le=(()=>{const n=async l=>{l.stopPropagation();const u=F?.staticElement;if(u?.classList.contains("content-target"))return;const c=u?.parentElement;if(c&&u){const d=u.previousElementSibling;d?.classList.contains("mftsccs-marking-element")&&d.childNodes.length>1&&alert("insert into marker"),d&&c.insertBefore(u,d)}await t(),Ot(),N.updateActionHistories()},e=async l=>{l.stopPropagation();const u=F?.staticElement;if(u?.classList.contains("content-target"))return;const c=u?.parentElement;if(c&&u){const d=u.nextElementSibling;d&&c.insertBefore(d,u)}await t(),Ot(),N.updateActionHistories()};async function t(){const l=f.widgetTree,u=f.selectedStaticWidgetTreeInfo.widgetTree;function c(g){for(const m of g.children){if(m===u)return g;const p=c(m);if(p)return p}return null}const d=c(l);if(d){let g=null;d.wrapper&&d.wrapper!="0"?g=document.getElementById(d.wrapper):g=document.getElementById("builder-workarea"),d.html=g.innerHTML}else await me()}function a(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(l){const u=Math.random()*16|0;return(l==="x"?u:u&3|8).toString(16)})}async function i(l,u,c){if(l.childNodes.length){if(l.dataset.widgetid){await mn(null,!0,parseInt(l.dataset.widgetid),l.parentElement?l.parentElement:u),pe(),l.remove();return}l.childNodes.forEach(d=>{i(d,u)})}}return{moveUp:n,moveDown:e,copyElement:async l=>{l.stopPropagation();const u=F.staticElement;if(u?.removeAttribute("draggable"),u.classList.contains("content-target"))return;const c=u?.parentElement,d=u.cloneNode(!0);await i(d,c),d.dataset.widgetid||c.insertBefore(d,u.nextSibling),pe(),await t(),de(),N.updateActionHistories()},fixContentTargetHeight:(l,u)=>{const c=window.getComputedStyle(u);console.log("wrapper element computed height",c.height,l)},editWidget:async l=>{console.log("event.target",l.target);const u=document.getElementById("edit-widget");u.style.display="none";const d=F.staticElement.closest(".added-widget-container");d.classList.replace("added-widget-container","edited-widget-container");const g=d.querySelectorAll(".widget_container_disabled");g.length&&g.forEach(h=>{h.className="widget_container widget_selected"}),F.staticElement?.removeAttribute("draggable");let m=d.cloneNode(!0);const p=await ke(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=p.innerHTML,f.editedWidgets[d.id]=f.selectedStaticWidgetTreeInfo.widgetTree,F.staticElement?.setAttribute("draggable","true"),pe()},generateUUID:a}})();class ue{static staticHTMLCache="";static staticCSSCache="";static staticHTMLOriginal="";static staticCSSOriginal=""}class f{static newWidget=new Lt;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await I();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const t=document.getElementById("widget-btn-wrapper");t&&t.querySelectorAll("button").forEach(a=>a.disabled=!0),await this.updateOwnerStatus(),this.#e&&t&&t.querySelectorAll("button").forEach(a=>a.disabled=!1)}}catch(t){console.error("error updating widget properties",t)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const t={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},a=await q("widget",this.userId,t),i=await Y(this.entityId);if(await J(i,a,"s_widget"),this.staticWidgetTree?.assistant?.id){const o=await q("assistant",this.userId,this.staticWidgetTree?.assistant);await J(a,o,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let s=0;s<o.length;s++){const r=await q("css_library",this.userId,o[s]);await J(a,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let s=0;s<o.length;s++){const r=await q("js_library",this.userId,o[s]);await J(a,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let s=0;s<o.length;s++){const r=await q("custom_function",this.userId,o[s]);await J(a,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let s=0;s<o.length;s++)await this.createChildWidget(o[s],a)}return await j.SyncDataOnline(),a}static async createChildWidget(e,t){const a={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper,dependency:e?.dependency},i=await q("widget",this.userId,a),o={wrapper:e?.wrapper,type:e?.type,parent:i.id},s=await q("child_widget",this.userId,o);if(await J(t,s,"s_child"),await J(s,i,"info"),e.useLatest&&e.useLatest===!0){const r=await X("use_latest","true",!1,this.userId,999);await J(s,r,"use_latest")}if(e?.library?.css?.length){const r=e?.library?.css;for(let l=0;l<r.length;l++){const u=await q("css_library",this.userId,r[l]);await J(i,u,"s_css_library")}}if(e?.library?.js?.length){const r=e?.library?.js;for(let l=0;l<r.length;l++){const u=await q("js_library",this.userId,r[l]);await J(i,u,"s_js_library")}}if(e?.custom_functions?.length){const r=e?.custom_functions;for(let l=0;l<r.length;l++){const u=await q("custom_function",this.userId,r[l]);await J(i,u,"s_custom_function")}}if(e?.children?.length)for(let r=0;r<e?.children?.length;r++)await this.createChildWidget(e.children[r],i)}static async updateOwnerStatus(){try{const e=await D(this.entityId),t=await D(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id);if((await Bn(e,t,"s_widget","the_entity_s_widget")).length||e.userId===t.userId)this.#e=!0;else{const i=await ii(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(i.length){const o=await D(i[0].id);((await Bn(e,o,"s_page","the_entity_s_page")).length||e.userId===o.userId)&&(this.#e=!0)}}}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await D(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),t={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions,dependency:this.staticWidgetTree.dependency};let a=this.staticWidgetTree.html,i=document.getElementsByClassName("mftsccs-css"),o=document.getElementsByClassName("widgetStyle"),s=this.staticWidgetTree.css;for(let u=0;u<i.length;u++)s+=i[u].innerHTML;for(let u=0;u<o.length;u++)s+=o[u].innerHTML;const r=await B.createWidgetCopy(e,this.userId,this.token,!0,t);if(this.staticWidgetTree.children.length){const u=this.staticWidgetTree.children;for(let c=0;c<u.length;c++)await this.createChildWidget(u[c],r)}const l=new URLSearchParams(window.location.search).get("page-id");if(l){const u=ue.staticHTMLCache||a,c=ue.staticCSSCache||s;let d=parseInt(l),g=await D(d);this.savePageCache(g,u,c)}return await j.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},r}catch(e){throw e}}static async savePageWidget(e,t){const a={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:t,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},i=await q("widget",this.userId,a);if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let r=0;r<s.length;r++){const l=await q("css_library",this.userId,s[r]);await J(i,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let r=0;r<s.length;r++){const l=await q("js_library",this.userId,s[r]);await J(i,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let r=0;r<s.length;r++){const l=await q("custom_function",this.userId,s[r]);await J(i,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],i)}const o=await D(e);return await J(o,i,ie.PAGE_WIDGET_LINKER),await j.SyncDataOnline(),!0}static async copyPageWidget(e,t,a){const i={after_render:a?.after_render,before_render:a?.before_render,name:t,html:a?.html,css:a?.css,js:a?.js,type:a?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},o=await q("widget",this.userId,i);if(a?.library?.css?.length){const s=a?.library?.css;for(let r=0;r<s.length;r++){const l=await q("css_library",this.userId,s[r]);await J(o,l,"s_css_library")}}if(a?.library?.js?.length){const s=a?.library?.js;for(let r=0;r<s.length;r++){const l=await q("js_library",this.userId,s[r]);await J(o,l,"s_js_library")}}if(a?.custom_functions?.length){const s=a?.custom_functions;for(let r=0;r<s.length;r++){const l=await q("custom_function",this.userId,s[r]);await J(o,l,"s_custom_function")}}if(a.children.length){const s=a.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],o)}return await J(e,o,ie.PAGE_WIDGET_LINKER),await j.SyncDataOnline(),!0}static async savePageCache(e,t,a){let i=new Ct,o=4,s=999;try{i.initialize();let r=await i.MakeTheInstanceConceptLocal("the_html_cache",t,!1,s,o),l=await i.MakeTheInstanceConceptLocal("the_css_cache",a,!1,s,o);await Ao(e.id,["the_page_html_cache","the_page_css_cache"]),await Dt(e,r,"the_page_html_cache"),await Dt(e,l,"the_page_css_cache"),await i.commitTransaction()}catch(r){i.rollbackTransaction(),console.error("cannot commit page cache",r)}}static async hasWidgetChanged(e){const t=["html","css","js","after_render","before_render","update","mount_child"],a=l=>l?l.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function i(l){let u=0;for(let c=0;c<l.length;c++){const d=l.charCodeAt(c);u=(u<<5)-u+d,u=u&u}return u}const o=(l,u)=>t.some(c=>{const d=a(l[c]),g=a(u[c]),m=i(d),p=i(g),h={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==p?!(d==""||d==h[c]):!1}),s=(l,u)=>l.length!==u.length?!0:l.some((c,d)=>o(c,u[d])||s(c.children,u[d].children)),r={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,root:0};return e?o(this.staticWidgetTree,this.initialWidgetTree)||s(this.staticWidgetTree.children,this.initialWidgetTree.children):o(this.staticWidgetTree,r)||s(this.staticWidgetTree.children,r.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");A.infoMessageToast("Publishing Widget",0);let e=null;const t=await D(this.staticWidgetTree.root||this.staticWidgetTree.origin),a=this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,i=await je(a,"the_widget_latest");if(i&&i.length){for(let s=0;s<i.length;s++)await Ne(i[s].id);try{const s=await fetch(ea.NODE_CACHE_URL+`/api/get-latest-widget?id=${t.id}`,{method:"DELETE"});s.ok||console.error("Failed to delete widget from cache server:",s.status)}catch(s){console.log("error removing widget from cache server",s)}}this.staticWidgetTree.origin&&(e=await D(this.staticWidgetTree.id),await J(t,e,"latest"),await j.SyncDataOnline()),await B.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),A.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,t=await je(e,"the_widget_latest");t.length&&(t[0].toTheConceptId===this.staticWidgetTree.widgetId?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1);const a=document.getElementById("publish-widget");a&&(a.style.display="block",this.staticWidgetTree.isPublished?(a.textContent="Published",a.disabled=!0,a.style.cursor="not-allowed"):(a.textContent="Publish This Version",a.disabled=!1,a.style.cursor="pointer"))}}var da=(n=>(n.page="page",n.widget="widget",n))(da||{});const hr=ps("mftsccs-browser"),fr=`
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
`,yr=`
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
`,wr=`
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
    "mftsccs-browser": "${hr}"
  }
}
`,vr=`
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
`,br=`
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
`,_r=`
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
  `,Er=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${U.baseURL}",
    baseNodeUrl: "${U.baseNodeUrl}",
    boomURL: "${U.boomURL}",
    aiURL: "${U.aiURL}",
  }
`,Tr=`
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
`,pn=n=>`
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
`,Sr=`
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
`,Cr=`
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
}`,Lr=`
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

`;class hn{async createProject(e,t,a){const i=await q(W.PROJECT_COMP_NAME,t,e),o=await Y(a);return await H(o,i,ie.ENTITY_PROJECT_LINKER),i}async getAllProjects(e){return new Promise(async(t,a)=>{const i=await I(),o=new M;o.typeConnection=`the_entity_${ie.ENTITY_PROJECT_LINKER}`,o.selectors=[`the_${W.PROJECT_COMP_NAME}_name`],o.name="first",o.inpage=100;const s=new M;s.conceptIds=[e||i.entityId],s.name="second",s.inpage=100,s.freeschemaQueries=[o],s.outputFormat=se,await ye(s,"").subscribe(async r=>{const l=r?.[0]?.data?.the_entity?.[`the_entity_${ie.ENTITY_PROJECT_LINKER}`];t(l)}).catch(r=>{console.error(r);const l=r?.message;A.errorToast(`${l}`,4),a({error:!0,message:l})})})}async getProjectById(e){const a=(await I())?.token;let i=new z;i.composition=e,i.fullLinkers=[`the_${W.PROJECT_COMP_NAME}_name`,`the_${W.PROJECT_COMP_NAME}_main_page`,`the_${W.PROJECT_COMP_NAME}_${ie.PROJECT_PAGE_LINKER}`],i.inpage=100;let o=new z;return o.fullLinkers=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_body`],o.inpage=100,await be([i,o],a)}async updateProjectField(e,t,a){const i=await I(),o=`the_${W.PROJECT_COMP_NAME}_${e}`;await oe(a,o);const s=await D(a),r=await X(`${e}`,`${t}`,!1,i.userId,4,999);await H(s,r,e)}async deleteProject(e){try{return await We(e),!0}catch(t){return console.error("Failed to delete project:",t),!1}}async addPagesToProject(e,t){try{const a=await D(e);if(!a){console.error("Project not found");return}await oe(e,`the_project_${ie.PROJECT_PAGE_LINKER}`);for(const i of t){const o=await D(i);if(!o){console.error("Page not found");return}await H(a,o,ie.PROJECT_PAGE_LINKER)}await j.SyncDataOnline()}catch(a){console.error("Failed to add page to project:",a)}}async deletePageFromProject(e,t){try{const a=await D(e);if(!a){console.error("Project not found");return}const i=await D(t);if(!i){console.error("Page not found");return}const o=await Bn(a,i,"",`the_project_${ie.PROJECT_PAGE_LINKER}`);if(!o){console.error("Connection not found");return}await Ne(o?.[0]?.id),await j.SyncDataOnline()}catch(a){console.error("Failed to delete page from project:",a)}}async setMainPage(e,t){try{const a=await D(e);if(!a){console.error("Project not found");return}const i=await D(t);if(!i){console.error("Page not found");return}await oe(e,"the_project_main_page"),await H(a,i,"main_page"),await j.SyncDataOnline()}catch(a){console.error("Failed to set main page:",a)}}}let he=!1;const xr=async()=>{if(he)return;he=!0;let n=new on;const e=await fn(n),t=e?.routesDir,a=e?.pagesDir;await Wr(a,t),n.generateAsync({type:"blob"}).then(function(i){let o=document.createElement("a");o.href=URL.createObjectURL(i),o.download="my_files.zip",o.click()}),he=!1},Ar=async n=>{if(he)return;he=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],t=new on;const a=await fn(t),i=a?.widgetsDir,o=a?.pagesDir;i&&o&&await kr(n,o,i),a?.routesDir?.file("routes.ts",pn(e)),t.generateAsync({type:"blob"}).then(function(s){let r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="my_files.zip",r.click()}),he=!1},fn=async n=>{n.file("index.html",vr),n.file("vite.config.js",fr),n.file(".gitignore",yr),n.file("package.json",wr),n.file("tsconfig.json",_r);let e=n.folder("public");if(!e){console.log("unable to create public folder");return}let t=n.folder("src");if(!t){console.log("unable to create src folder");return}t?.file("app.ts",br),t?.file("style.css","");let a=t?.folder("environments");if(!a){console.log("unable to create environments folder");return}a?.file("environment.dev.ts",Er);let i=t?.folder("widgets");if(!i){console.log("unable to create widgets folder");return}let o=t?.folder("pages");if(!o){console.log("unable to create pages folder");return}let s=t?.folder("services");if(!s){console.log("unable to create services folder");return}s?.file("widget.service.ts",Sr),s?.file("drop.service.ts",Cr),s?.file("validator.service.ts",Lr);let r=t?.folder("routes");if(!r){console.log("unable to create routes folder");return}return r?.file("renderRoute.service.ts",Tr),{srcDir:t,pagesDir:o,servicesDir:s,publicDir:e,environmentsDir:a,widgetsDir:i,routesDir:r}},Wr=async(n,e)=>{if(!n&&!e)return;let t=[];const a=await I(),i=a?.entityId,o=a?.token,s=new z;s.composition=i,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new z;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await be([s,r],o);if(l?.data.the_entity?.the_entity_s_page?.length)for(let u=0;u<l?.data.the_entity?.the_entity_s_page?.length;u++){const c=l.data.the_entity.the_entity_s_page[u];let d={page:c?.data?.the_page?.the_page_body?.[0]?.id,title:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:c?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:c?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:c?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:c?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!d.page)continue;const g=`${d.slug.split("-").map((h,w)=>w===0?h.charAt(0).toLowerCase()+h.slice(1):h.charAt(0).toUpperCase()+h.slice(1)).join("")}`;t.push({path:`/${d.slug}`,content:`${g}Index`,importFrom:`/${d.slug}/${d.slug}.index.ts`});let m=n?.folder(d.slug);const p=`
import { StatefulWidget, convertWidgetTreeToWidgetWithWrapper } from 'mftsccs-browser';
import { getWidgetFromId } from "../../services/drop.service.ts";

export default class ${g}Index extends StatefulWidget
{

    async  after_render() {   
        this.setTitle('${d.title}');
        let widgetTree = await getWidgetFromId(${d.page});
        const newWidget = await convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
        // apply newWidget css to the page
        const style = document.createElement('style');
        let pageStyle = \`@root { font-family: ${d.font_family}; 
 font-size: ${d.font_size} }\`;
        style.innerHTML = pageStyle + newWidget.css;
        document.head.appendChild(style);
        // apply newWidget js to the page
        const script = document.createElement('script');
        script.innerHTML = newWidget.js;
        document.head.appendChild(script);
    }
}
`;m?.file(`${d.slug}.index.ts`,p)}e?.file("routes.ts",pn(t))},kr=async(n,e,t)=>{console.log("widgetsDir",t);const i=(await I())?.token,o=await ba(n,i,!0);let s=e?.folder("home");const r=`
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
`;s?.file("home.index.ts",r),o?.css&&s?.file("home.style.css",o?.css)},Ir=async n=>{if(he)return;he=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],t=new on;const a=await fn(t),i=a?.widgetsDir,o=a?.pagesDir;let s="";i&&o&&(s=await Mr(n,o)),a?.routesDir?.file("routes.ts",pn(e)),t.generateAsync({type:"blob"}).then(function(r){let l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=`${s||"page"}.zip`,l.click()}),he=!1},Mr=async(n,e)=>{const t=await I(),a=t?.entityId,i=t?.token,o=await ba(n,i,!0),s=new z;s.composition=a,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new z;r.inpage=100,r.composition=n,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const u=(await be([s,r],i))?.data?.the_entity?.the_entity_s_page?.filter(p=>p?.id==n),c=u?.[0]?.data?.the_page?.the_page_body?.[0]?.id,d=u?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let g=e?.folder("home");const m=`
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
    `;return g?.file("home.index.ts",m),o?.css&&g?.file("home.style.css",o?.css),d},Pr=async n=>{if(he)return;if(!n){console.log("Project id is required");return}const i=(await new hn().getProjectById(n))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();he=!0;let o=new on;const s=await fn(o),r=s?.routesDir,l=s?.pagesDir;await Br(l,r,n),o.generateAsync({type:"blob"}).then(function(u){let c=document.createElement("a");c.href=URL.createObjectURL(u),c.download=`the_${i}.zip`,c.click()}),he=!1},Br=async(n,e,t)=>{if(!n&&!e)return;let a=[];const o=(await I())?.token,s=new z;s.composition=t,s.inpage=100,s.fullLinkers=["the_project_s_page","the_project_main_page"];const r=new z;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await be([s,r],o),u=l?.data.the_project?.the_project_main_page?.[0]?.id;if(l?.data.the_project?.the_project_s_page?.length)for(let c=0;c<l?.data.the_project?.the_project_s_page?.length;c++){const d=l.data.the_project.the_project_s_page[c];let g={page:d?.id,title:d?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:d?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:d?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:d?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:d?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:d?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!g.page)continue;const m=`${g.slug.split("-").map((w,v)=>v===0?w.charAt(0).toLowerCase()+w.slice(1):w.charAt(0).toUpperCase()+w.slice(1)).join("")}`;a.push({path:`/${g.slug}`,content:`${m}Index`,importFrom:`/${g.slug}/${g.slug}.index.ts`}),g.page==u&&a.push({path:"/",content:`${m}Index`});let p=n?.folder(g.slug);const h=`
                import { StatefulWidget, convertWidgetTreeToWidgetWithWrapper, renderPage, renderLatestWidget } from 'mftsccs-browser';
                // import { getWidgetFromId } from "../../services/drop.service.ts";

                export default class ${m}Index extends StatefulWidget
                {

                    async  after_render() {   
                        this.setTitle('${g.title}');
                        const appElement = document.querySelector<HTMLDivElement>("#app");
                        let widgetTree = await renderPage(${g.page}, appElement);
                        // let widgetTree = await renderLatestWidget(${g.page}, appElement);

                        // let widgetTree = await getWidgetFromId(${g.page});
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
                }`;p?.file(`${g.slug}.index.ts`,h)}e?.file("routes.ts",pn(a))};async function $r(){const n=new ae("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function Nr(){const n=new ae("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function Pi(){await $r(),await Nr(),await Es(),await Ts()}function Dr(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function Bi(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function Un(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class $i{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const a=(await I())?.token;oa(),Bi(),document.querySelector("#widget-properties #widget-type input")?.remove(),Dr(),await Pi();let o=cn(),s=await Me(e,a),r=await ge(s?.widgetId??e),l=await fe(r,o);this.addPageUpdate(e),Un(),f.resetWidgetTree(),f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),K(r,!1,l,!0),B.enableWidgetButtons(),un(),de(),pe()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`
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
      `,this.isDroppedDown=!1,this.arrowBtn=t.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=t.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,t){bi(e.css,t?.css),vi(e.after_render),_i(e.before_render)}}class jr{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
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
    `}}const Fa={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},Va=new Xe,Ni=new $i;async function ua(n){n.preventDefault();try{await Fe(),await Oe();const e=document.getElementById("fspage-save-button"),t=Number(e?.getAttribute("data-pageid")),o="widget_"+(await Va.getPageById(t)).data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_slug`].data.the_slug,s=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Saving page...",0),s?.length&&s.forEach(d=>{const g=d.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),d.classList.remove("edited-widget-container")});const r=await it();f.staticWidgetTree.html=r,await f.savePageWidget(t,o),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast(Fa.PAGE_SAVE);const c=(await Va.getPageById(t))?.data?.the_page?.the_page_body?.id;return await Ni.LoadPageWidget(c),Fa.PAGE_SAVE}catch(e){ha(e,"There is an error on saving widget")}}async function ma(n,e,t){n.preventDefault();const a=document.getElementById("updateFsPagePublish"),i=document.getElementById("updateFsPage"),o=i?.innerHTML||"";try{const s=document.getElementById("updateFsPagexx");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating.."),s&&(s.classList.add("disabled"),s.textContent="Updating..");const r=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Updating Page...",0),r?.length&&(A.infoMessageToast("Updating page...",0),r.forEach(d=>{const g=d.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),d.classList.remove("edited-widget-container")}));const l=await it();f.staticWidgetTree.html=l;const u=await f.updateWidget();return console.log("updateWidgetResponse ->",u),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page Updated Successfully"),await Ni.LoadPageWidget(e),t&&t===!0&&await f.publish(),"updated widget successfully!"}catch(s){console.error("error updating page",s),s instanceof Error&&A.errorToast(s.message),document.querySelector(".infoMessageToast")?.remove()}finally{a&&a.classList.remove("disabled"),i&&(i.classList.remove("disabled"),i.innerHTML=o)}}function Hr(n){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const t=Pc(`/page-preview/${e}`),a=`${window.location.origin.replace(/\/$/,"")}${t}`;window.open(a,"_blank")?.focus()}}async function Or(){const n=document.getElementById("preview-button-wrapper"),e=document.getElementById("preview-button-back"),t=n.classList.value.includes("d-none"),a=document.querySelector(".content-target"),i=document.querySelector(".midContent .content"),o=document.getElementById("widgetButtionCodeViewWrapper"),s=document.getElementById("undo-btn"),r=document.getElementById("redo-btn"),l=document.getElementById("ai-prompt-btn"),u=document.querySelector(".environment-selector-wrapper"),c=document.getElementById("select-box"),d=document.getElementById("element-info");if(t){n.classList.remove("d-none"),e.classList.add("d-none"),s.classList.remove("d-none"),r.classList.remove("d-none"),l.style.display="flex",o&&(o.style.display="block");const g=cn(),m={...f.widgetTree};m.html=ue.staticHTMLOriginal,m.css=ue.staticCSSOriginal;const p=await fe(m,g,!0,void 0,!0);K(m,!1,p,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),i.classList.remove("preview"),de(),pe(),ze.enableHeader()}else{n.classList.add("d-none"),e.classList.remove("d-none"),c.style.display="none",d.style.display="none",s.classList.add("d-none"),r.classList.add("d-none"),u.classList.add("d-none"),l.style.display="none",o&&(o.style.display="none");const g={...f.widgetTree};ue.staticHTMLOriginal=f.staticWidgetTree.html,ue.staticCSSOriginal=f.staticWidgetTree.css,g.html=ue.staticHTMLCache,g.css=ue.staticCSSCache;const m=await fe(g,a,!0,void 0,!1);K(g,!1,m),document.getElementById("column-left").classList.add("d-none"),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),ze.disableHeader(),at.closeCodeView(),i.classList.add("preview");const v=document.querySelector("header.wico_top-header");v.style.display="none"}}function qr(n,e=0){return window.saveWidgetInFolders=Vr,`
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
    `}let xn,pt;async function Fr(n,e){xn=n;const t=qr(e,typeof n=="object"?0:n),a=document.createElement("div");a.innerHTML=t;const i=a.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(i),await re("folder-widget-container");const o=await I();if(!o)return;let s,r,u=(await ct(xn,o.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(s=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),s&&(s.value=u),r=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(s=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),r=document.getElementById("folder-widget-container")?.querySelector("textarea#description"));const c=document.getElementById("widgetFolder");pt=await Be(U.folder_widget,c,{widgetName:s.value,widgetDescription:r?.value,widgetId:xn,showCheckbox:!0,showFiles:!1})}async function Vr(n,e,t,a){n.preventDefault(),console.warn("asdfads",pt.selectedConceptIds);let i=[];pt&&pt?.selectedConceptIds?.length>0&&(i=pt.selectedConceptIds||[]);try{A.infoMessageToast("Saving Widget...",0),await Fe();const o=document.getElementById("folder-widget-container"),s=o?.querySelector('button[type="submit"]');s.textContent="Saving";const r=o?.querySelector("input"),l=o?.querySelectorAll("button"),c=(document.getElementById("save-to-folder-name")||document.getElementById("folder-name")).value;l&&l.forEach(T=>{T.disabled=!0}),r&&(r.disabled=!0),await Oe();let d;if(!a){F.staticElement?.removeAttribute("draggable");const T=document.querySelectorAll(".edited-widget-container");T?.length&&T.forEach(async E=>{if(E.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[E.id]){const L=await ke(E,"div.mftsccs-marking-element");f.editedWidgets[E.id].html=L.innerHTML}});const b=await zi();f.staticWidgetTree.html=b;const y=await f.saveWidget(c);d=await Y(y.id),t=d.id}const g=await I(),m=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,p=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,h={title:m,source_url:window.location.href,widget_id:t,short_desc:p,note:"",data_type:"widget",created_on:Date.now()};if(i.length==0){const T=g?.userConcept;d=await Y(Number(t));let b={...h,boom_folder:{name:"",parent:T}};const y=await Ge({boomgpt:b},void 0,void 0,void 0,g.userId,4);await Dt(await Y(Number(T)),y,"the_boom_folder_s_contain"),await J(y,d,"the_refer")}else if(i?.length>0)for(let T=0;T<i.length;T++){const b=i[T];d=await Y(Number(t));const y=await Y(Number(b));if(!y)throw new Error("Selected folder concept not found!");let E={...h,boom_folder:{name:y.name||"",parent:b}};const L=await Ge({boomgpt:E},void 0,void 0,void 0,g.userId,4);await Dt(await Y(Number(b)),L,"the_boom_folder_s_contain"),await J(L,d,"the_refer")}await j.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),_e("folder-widget-container"),At(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),a||(await B.renderSavedWidgets(),kt(n,Number(t)))}catch(o){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),ha(o,"There is an error on saving widget")}}class Di extends Lt{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";environmentSelector="";_pageBuilderService;previewArrowButton=null;previewCacheButton=null;isPreviewDroppedDown=!1;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const t=I();if(t&&(this.environmentSelector=`
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
    `,e){this.the_params=e,this._pageBuilderService=new $i;const a=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+a:"Widget Builder";const i=this.the_params?.page_id;t&&e.type==da.page&&(this.saveBoomButtonHTML=`
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
`}before_render(){this.render()}after_render(){if(this.the_params){this.initializePreviewDropDown(),document.getElementById("fspage-save-button").addEventListener("click",ua);const t=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!t){un();return}this._pageBuilderService.LoadPageWidget(Number(t))}}initializePreviewDropDown(){this.previewArrowButton=document.getElementById("updateDropDownPagePreview"),this.previewCacheButton=document.getElementById("preview-cache-btn"),this.previewCacheButton.addEventListener("click",()=>{this.togglePreviewUpdate(!0)}),this.previewArrowButton.addEventListener("click",()=>{this.togglePreviewUpdate(!1)})}togglePreviewUpdate(e){this.previewCacheButton&&this.previewArrowButton&&(!this.isPreviewDroppedDown&&e!==!0?(this.previewCacheButton.classList.remove("d-none"),this.previewArrowButton.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.previewCacheButton.classList.add("d-none"),this.previewArrowButton.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isPreviewDroppedDown=!this.isPreviewDroppedDown)}getHtml(){return window.openSaveWidgetModal=wa,window.saveWidget=Ui,window.updateWidget=va,window.newWidget=Je,window.previewWidget=il,window.downloadWebsite=xr,window.moveUp=Le.moveUp,window.moveDown=Le.moveDown,window.copyElement=Le.copyElement,window.editWidget=Le.editWidget,window.openConvertModal=rl,window.convertToWidget=ol,window.updatePage=ma,window.previewPage=Hr,window.previewPageCahe=Or,window.undoAction=N.undoAction,window.redoAction=N.redoAction,window.saveWidgetToFolderBtn=Fr,window.openPromptModal=Os,window.openAIModal=Li,window.refineAIData=Vn,`
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
    `}}function ji(){j.conceptsSyncArray=[],j.connectionSyncArray=[]}class Rr{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let t="",a="";return this.props.id==="fs-create-page-modal"?a=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?a=this.editPageModal():this.props.id==="create-project-modal"?(a=this.createNewProjectModal(),t="m-large"):this.props.id==="add-pages-project"&&(a=this.addPagesModalHtml(),t="m-large"),e.innerHTML=`
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
    `,e.querySelector("#closeModalBtn").addEventListener("click",this.handleClose.bind(this)),e}updateModal(){this.props.isOpen?this.modal.classList.add("open"):this.modal.classList.remove("open")}handleClose(){ji(),this.modal.remove()}createNewPageModal(){return`
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
                <input id="slug" type="text" name="slug" placeholder="Enter page slug" required disabled value="${this.props.data.slug}">
            </form>
        </div>
        <div class="m-footer">
          <button id="fs-edit-page-button" class="m-submit-btn" disabled>
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
    `}}function Ut(n){new Rr(n)}function Ra(n){const e=document.getElementById(n);e&&e.remove()}class ga{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new yi,this._pagesTSCCSService=new Xe}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),t=document.getElementById("saved-page-list-container");t&&(t.innerHTML="",t.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-page-button");a?.removeEventListener("click",this.createButtonClickHandler),a?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(r=>{r.removeEventListener("click",this.deletePageButtonClickHandler),r.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(r=>{r.removeEventListener("click",this.editPageButtonClickHandler),r.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(r=>{r.removeEventListener("click",this.duplicatePageButtonClickHandler),r.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(a=>a.remove())}createButtonClickHandler=()=>{Ut({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const t=document.getElementById("fs-create-page-form"),a=t?.elements.namedItem("title");if(!a){console.error("page_title not found");return}const i=async()=>{const s=await this._pagesTSCCSService.generateSlug(a.value);t.elements.namedItem("slug")?.setAttribute("value",s)};a.addEventListener("keyup",i);const o=()=>{a.removeEventListener("keyup",i),document.getElementById("fs-create-page-modal")?.removeEventListener("close",o)};document.getElementById("fs-create-page-modal")?.addEventListener("close",o)};savePageButtonClickHandler=async()=>{const t=document.getElementById("fs-create-page-form").elements;if(!t.title.value){t.title.style.borderColor="red";return}A.infoMessageToast("Creating page...",0);const a=await Dn(t),i=await I();await this._pagesTSCCSService.savePage(a,i?.userId,i?.entityId),await j.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),Ra("fs-create-page-modal"),setTimeout(()=>{A.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const t=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;Ut({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:a,slug:i}});const o=document.getElementById("fs-edit-page-form"),s=o?.elements.namedItem("title");if(!s){console.error("page_title not found");return}const r=async()=>{document.getElementById("fs-edit-page-button")?.removeAttribute("disabled");const d=await this._pagesTSCCSService.generateSlug(s.value);o.elements.namedItem("slug")?.setAttribute("value",d)};s.addEventListener("keyup",r);const l=()=>{s.removeEventListener("keyup",r),document.getElementById("fs-edit-page-modal")?.removeEventListener("close",l)};document.getElementById("fs-edit-page-modal")?.addEventListener("close",l),document.getElementById("fs-edit-page-button")?.addEventListener("click",()=>this.updatePageButtonClickHandler(t))};async PageInputElementChangeHandler(e,t){const a=e.target,i=a.name,o=a.value;let s=await this._pagesTSCCSService.checkSlugAvailablity(o);if(i==="slug"&&!s){document.getElementById("fs-update-page-button")?.setAttribute("disabled","true"),a.style.borderColor="red",a.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(a.getAttribute("name"),a.value,Number(t))}updatePageButtonClickHandler=async e=>{const t=document.getElementById("fs-edit-page-form"),a=t.elements.namedItem("title");if(!a.value.trim()){a.style.borderColor="red";return}const i=t.elements;if(!i.title.value){i.title.style.borderColor="red";return}A.infoMessageToast("Renaming page...",2);const o=await Dn(i),s=await I();await this._pagesTSCCSService.renamePage(o,e,s?.userId),await j.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page renamed successfully");const l=new URLSearchParams(window.location.search).get("page-id");if(e===l){const u=document.getElementById("widget-builder");u.textContent=`Page Builder: ${o?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),Ra("fs-edit-page-modal")};deletePageButtonClickHandler=async e=>{const t=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${a}" with the slug "${i}"?`)?(A.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(t)),await j.SyncDataOnline(),_o("/"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const a=e?.target?.getAttribute("data-id"),o=(await this._pagesTSCCSService.getPageById(Number(a)))?.data?.the_page,s=o?.the_page_title?.data?.the_title?.trim()+" copy",r=o?.the_page_slug?.data?.the_slug?.trim()+"-copy",l=o?.the_page_meta_title?.data?.the_meta_title?.trim(),u=o?.the_page_meta_description?.data?.the_meta_description?.trim(),c=o?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),d=o?.the_page_width?.data?.the_width?.trim(),g=o?.the_page_type?.data?.the_type?.trim(),m=o?.the_page_font_family?.data?.the_font_family?.trim(),p=o?.the_page_font_size?.data?.the_font_size?.trim(),h={title:s,slug:r,meta_title:l,meta_description:u,meta_keywords:c,width:d,type:g,font_family:m,font_size:p},w={};for(const[E,L]of Object.entries(h))L&&(w[E]=L);const v=o?.the_page_body?.id,C=await I(),T=await Me(v,C?.token);let b=await ge(T?T.widgetId:v);const y=await this._pagesTSCCSService.savePage(w,C?.userId,C?.entityId);await f.copyPageWidget(y,`widget_${r}`,b),this.initPagesSidebar(),A.successfullToast("Page duplicated successfully")}}async function Ur(n){n?.preventDefault();const e=window.location.href,a=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(a))){await jt("Do you want to save changes?")&&(e.includes("?page-id=")?a?await ma(n,Number(a)):await ua(n):a?await va(n,Number(a)):await wa());const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}f.resetWidgetTree();const o=n.target.getAttribute("data-pageId");Pt(`?page-id=${o}`);let r=await new Xe().getPageById(Number(o));r?.error&&Je();const l=document.getElementById("midContent"),u=document.getElementById("right-aside"),c={type:da.page,data:r.data?.[`the_${W.PAGE_COMP_NAME}`],page_id:o},d=new Di(c),g=new wn(c);u.innerHTML=await g.getHtml(),l.innerHTML="",d.mount(l),hs.resetNavigationBar()}class Hi{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new hn,this._pagesTsccsService=new Xe}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(a=>{let o=a?.data?.[`the_${W.PROJECT_COMP_NAME}`]?.[`the_${W.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
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
          `}catch(e){return console.error("error",e),e?.status===401&&$e(),`
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
    `,document.querySelector("body #app")?.appendChild(t),re("create-project-dialog"),"Create Project Modal"}async renameProjectModal(e,t){document.getElementById("rename-project-dialog")?.remove();const i=document.createElement("dialog");return i.setAttribute("id","rename-project-dialog"),i.classList.add("col-md-3"),i.innerHTML=`
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
    `,document.querySelector("body #app")?.appendChild(i),re("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const t=await this._projectsService.getProjectById(e),a=t?.data?.the_project?.[`the_project_${ie.PROJECT_PAGE_LINKER}`],i=t?.data?.the_project?.the_project_main_page?.[0]?.id;return a?.length?a?.map(s=>{let r=s?.data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const l=i==s.id,u=l?'<span class="material-symbols-outlined home-icon">home</span>':"",c=l?"":`<li class="d-flex align-items-center justify-content-between" 
              onclick="setMainPageHandler(event, ${s.id})" data-projectid="${e}">
                  <span class="px-2">Set as Main Page</span>
                  <span class="material-symbols-outlined">home</span>
                </li>`,d=Number(s.id)+Number(e);return`
            <li class="project-page-item" data-projectid="${e}">
              <router-link class="page_title" href="/?page-id=${s.id}" data-pageid="${s.id}" onclick="pageHandler(event)">
                <span class="material-symbols-outlined">description</span>
                ${r}
              </router-link>
              ${u}
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${d})" title="Options"> more_vert </span>
              <ul class="dropdown-menu" id="dropdown-menu-${d}">
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
          `}catch(t){return console.error("error",t),t?.status===401&&$e(),`
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
      `,document.body.appendChild(t),t.showModal(),t}catch(t){return console.error("Error:",t),""}}}const pa=async n=>{let e="default",t={},a=null,i=null,o=null;if(n){let p=new M;p.typeConnection="the_project_environment",p.selectors=["the_environment_name","the_environment_value"];let h=new M;h.conceptIds=[n],h.freeschemaQueries=[p],h.outputFormat=se;let w=await Ae(h,"");for(let v=0;v<w.length;v++){let C=w[v]?.data?.the_project;if(C){let b=C?.the_project_environment?.data?.the_environment;if(b){a=C?.the_project_environment?.id,e=b?.the_environment_name?.data?.the_name||"default",i=b?.the_environment_name?.id,o=b?.the_environment_value?.id;let y=b?.the_environment_value?.data?.the_environment_value;if(y)try{t=JSON.parse(y)}catch(E){console.error("Error parsing environment values",E),t={}}}}}}const s="environment-editor-modal";document.getElementById(s)?.remove();const l=document.createElement("dialog");l.setAttribute("id",s),l.classList.add("col-md-8"),l.style.maxWidth="800px",l.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(l),await re(s);const u=document.getElementById("environment-editor-container");if(!u)return;const c=aa(p=>{const h=[],w=p.state.doc.toString();try{JSON.parse(w)}catch(v){const C=v,T=C.message.match(/position (\d+)/),b=T?parseInt(T[1]):0;h.push({from:Math.max(0,b-1),to:Math.min(w.length,b+1),severity:"error",message:C.message})}return h});let d=null;d=new te({doc:JSON.stringify(t,null,2),extensions:[st,rt,tn(),na(),c,te.lineWrapping,xe.tabSize.of(2)],parent:u}),document.getElementById("format-json-btn")?.addEventListener("click",()=>{try{const p=d?.state.doc.toString()||"{}",h=JSON.parse(p),w=JSON.stringify(h,null,2);d?.dispatch({changes:{from:0,to:d.state.doc.length,insert:w}}),alert("JSON formatted successfully!")}catch(p){alert("Invalid JSON: "+p.message)}});const m=document.getElementById("save-environment-btn");m?.addEventListener("click",async()=>{try{m.disabled=!0,m.textContent="Saving...";const h=document.getElementById("environment-name-input")?.value?.trim()||"default";if(!h){alert("Environment name is required"),m.disabled=!1,m.textContent="Save";return}const w=document.getElementById("save-to-entity-checkbox"),v=n?w?.checked||!1:!0,C=d?.state.doc.toString()||"{}";let T;try{T=JSON.parse(C)}catch(S){alert("Invalid JSON: "+S.message),m.disabled=!1,m.textContent="Save";return}const b=await new Ct;await b.initialize();let y;a?(console.log("Editing existing environment:",a),y=await D(a),i&&await oe(a,"the_environment_name"),o&&await oe(a,"the_environment_value")):(console.log("Creating new environment"),y=await b.MakeTheInstanceConceptLocal("the_environment","",!0,999,4));const E=await b.MakeTheInstanceConceptLocal("the_name",h,!1,999,4),L=await b.MakeTheInstanceConceptLocal("the_environment_value",JSON.stringify(T),!1,999,4);if(await b.CreateConnection(y,E,"the_environment_name"),await b.CreateConnection(y,L,"the_environment_value"),n&&!a){const S=await D(n);await b.CreateConnection(S,y,"the_project_environment")}if(v)try{const x=(await I())?.entityId;if(x){const k=await D(x);await b.CreateConnection(k,y,"the_entity_s_environment"),console.log(`Environment saved to entity ${x}`)}else console.warn("Entity ID not found in profile data. Environment not saved to entity.")}catch(S){console.error("Error saving to entity:",S)}await b.commitTransaction();try{const{refreshEnvironmentDropdown:S}=await ce(async()=>{const{refreshEnvironmentDropdown:x}=await Promise.resolve().then(()=>vo);return{refreshEnvironmentDropdown:x}},void 0);await S()}catch(S){console.log("Could not refresh environment dropdown:",S)}let _="Environment variables saved successfully!";n?v&&(_+=" (Also saved to your entity)"):_+=" (Saved to your entity)",alert(_),m.disabled=!1,m.textContent="Save",window.closeModal(s)}catch(p){console.error("Error saving environment:",p),alert("Failed to save environment variables: "+p),m.disabled=!1,m.textContent="Save"}})},zr=async(n,e,t,a,i)=>{const o="environment-editor-modal";document.getElementById(o)?.remove();const r=document.createElement("dialog");r.setAttribute("id",o),r.classList.add("col-md-8"),r.style.maxWidth="800px",r.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(r),await re(o);const l=document.getElementById("environment-editor-container");if(!l)return;const u=aa(m=>{const p=[],h=m.state.doc.toString();try{JSON.parse(h)}catch(w){const v=w,C=v.message.match(/position (\d+)/),T=C?parseInt(C[1]):0;p.push({from:Math.max(0,T-1),to:Math.min(h.length,T+1),severity:"error",message:v.message})}return p});let c=null;c=new te({doc:JSON.stringify(e,null,2),extensions:[st,rt,tn(),na(),u,te.lineWrapping,xe.tabSize.of(2)],parent:l}),document.getElementById("format-json-btn")?.addEventListener("click",()=>{try{const m=c?.state.doc.toString()||"{}",p=JSON.parse(m),h=JSON.stringify(p,null,2);c?.dispatch({changes:{from:0,to:c.state.doc.length,insert:h}}),alert("JSON formatted successfully!")}catch(m){alert("Invalid JSON: "+m.message)}});const g=document.getElementById("save-environment-btn");g?.addEventListener("click",async()=>{try{g.disabled=!0,g.textContent="Saving...";const p=document.getElementById("environment-name-input")?.value?.trim()||"default";if(!p){alert("Environment name is required"),g.disabled=!1,g.textContent="Save Changes";return}const h=c?.state.doc.toString()||"{}";let w;try{w=JSON.parse(h)}catch(y){alert("Invalid JSON: "+y.message),g.disabled=!1,g.textContent="Save Changes";return}const v=await new Ct;await v.initialize();let C;t?(console.log("Editing existing environment:",t),C=await D(t),a&&await oe(t,"the_environment_name"),i&&await oe(t,"the_environment_value")):(console.log("Creating new environment"),C=await v.MakeTheInstanceConceptLocal("the_environment","",!0,999,4));const T=await v.MakeTheInstanceConceptLocal("the_name",p,!1,999,4),b=await v.MakeTheInstanceConceptLocal("the_environment_value",JSON.stringify(w),!1,999,4);if(await v.CreateConnection(C,T,"the_environment_name"),await v.CreateConnection(C,b,"the_environment_value"),!t){const E=(await I())?.entityId;if(E){const L=await D(E);await v.CreateConnection(L,C,"the_entity_s_environment")}}await v.commitTransaction();try{const{refreshEnvironmentDropdown:y,saveEnvironmentToStorage:E}=await ce(async()=>{const{refreshEnvironmentDropdown:L,saveEnvironmentToStorage:_}=await Promise.resolve().then(()=>vo);return{refreshEnvironmentDropdown:L,saveEnvironmentToStorage:_}},void 0);if(await y(),t){const _=(window.__allEnvironments||[]).findIndex(S=>S.id===t);_!==-1&&(E(w,_),console.log(`Updated environment "${p}" in RAM and localStorage`))}}catch(y){console.log("Could not refresh environment dropdown:",y)}alert("Environment variables updated successfully!"),g.disabled=!1,g.textContent="Save Changes",window.closeModal(o)}catch(m){console.error("Error saving environment:",m),alert("Failed to save environment variables: "+m),g.disabled=!1,g.textContent="Save Changes"}})},Jr=Object.freeze(Object.defineProperty({__proto__:null,createEnvironmentEditor:pa,createEnvironmentEditorWithData:zr},Symbol.toStringTag,{value:"Module"}));function Gr(n,e=[],t=[]){return`
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
                            ${e?.map(a=>`
                                <div style="display: flex; align-items: start; gap: 8px; margin-bottom: 5px;">
                                    <input type="checkbox" class="selected-menu-page" data-page-id="${a.id}" ${t.find(i=>Number(i.page)==a.id)?" checked ":""} />
                                    <div>
                                        <p style="margin: 0px; line-height: 16px;">${a.name}</p>
                                        <p style="margin: 0px; line-height: 12px; color: gray;"><span style="font-size: 12px">${a.slug}</span></p>
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
    </div>
  </div>

    `}const Qr=async n=>{if(!n){console.log("Project id is required");return}const e=new hn;let[t,a]=await Promise.all([e.getProjectById(n),li(n)]);console.log("project detail",t),console.log("abc menus ",a);const i=t?.data?.the_project?.the_project_main_page?.[0]?.id??0,o=t?.data?.the_project?.the_project_s_page?.map(c=>({id:c.id,name:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:c?.id==i}))??[];console.log("pages",o),document.getElementById("project-setting-dialog")?.remove();const r=document.createElement("dialog");r.setAttribute("id","project-setting-dialog"),r.classList.add("col-md-8"),r.style.flexDirection="column",r.innerHTML=Gr(n,o),document.querySelector("body #app")?.appendChild(r),await re("project-setting-dialog"),document.querySelectorAll(".accordion-header").forEach(c=>{c.addEventListener("click",async()=>{c.classList.toggle("active");const d=c.getAttribute("id");if(c.classList.contains("active"))switch(d){case"domain-viewer-btn":const g=document.getElementById("custom-domain-view-holder"),m=await ii(n,"the_project_custom_url");g&&Be(102462726,g,{projectId:n,storeUrl:`https://preview-${n}.develop.freeschema.com`,customUrl:m?.[0]?.data?.the_custom_url||""});break}else switch(d){case"domain-viewer-btn":const g=document.getElementById("custom-domain-view-holder");g&&(g.innerHTML="");break}})}),ut(a);const l=document.getElementById("save-menu-items");l?.addEventListener("click",async c=>{l&&(l.disabled=!0),console.log("menus save",a),a=a.map(g=>(delete g.edit,g)),console.log("menus filtered save",a),c.target.disable=!0;const d=await zo(n,a);console.log("menu created",d),c.target.disable=!1,ut(a),alert("Updated Menu"),l&&(l.disabled=!1),Oi(n)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",c=>{const d=c.target.closest(".custom-menu-item"),g=d?.querySelector("#nameElem"),m=d?.querySelector("#linkElem"),p=d?.querySelector("#actionElem"),h=d?.querySelector("#authElem");if(!g.value){alert("Menu Name is required");return}if(!m.value&&!p.value){alert("Link or Action is required");return}a.push({name:g.value??"",link:m.value??"",action:p.value??"",page:"",order:a.length,auth:!!h.checked,menus:[]}),g.value="",m.value="",p.value="",h.checked=!1,ut(a)}),window.handleMenuAction=(c,d,g,m)=>{if(d=="remove")if(m){const p=document.getElementsByClassName("selected-menu-page");for(let h=0;h<p.length;h++){const w=p[h];Number(w.getAttribute("data-page-id"))==m&&w?.checked&&w.click()}}else a.splice(g,1)[0];else if(d=="edit")a[g].edit=!0;else if(d=="cancel")a[g].edit=!1;else if(d=="update"){a[g].edit=!1;const p=c?.target?.closest("li"),h=p?.querySelector("#menuName").value??"",w=p?.querySelector("#menuLink").value??"",v=p?.querySelector("#menuAction").value??"",C=!!p?.querySelector("#menuAuth").checked;a[g].name=h,a[g].link=w,a[g].action=v,a[g].auth=C}else if(d=="up"){const p=a.splice(g,1)[0];a.splice(g-1,0,p),a=a.map((h,w)=>({...h,order:w}))}else if(d=="down"){const p=a.splice(g,1)[0];a.splice(g+1,0,p),a=a.map((h,w)=>({...h,order:w}))}else console.warn("unacceptable action ",d);ut(a)},document.querySelectorAll(".selected-menu-page").forEach(c=>{c.addEventListener("change",d=>{console.log("e.target.changed",d.currentTarget.checked);const g=parseInt(d.currentTarget.getAttribute("data-page-id"));if(d.currentTarget.checked){const m=o.find(p=>p.id==g);console.log("pages",m,o),a.push({name:m.name??"",link:m.slug??"",action:"",page:m.id??"",order:a.length,auth:!1,menus:[]})}else{const m=(p,h)=>{for(let w=0;w<p.length;w++){const v=p[w];v.menus&&v.menus.length>0&&(v.menus=m(v.menus,h))}return p.filter(w=>w.page!=h)};a=m(a,g)}ut(a)})}),document.getElementById("open-environment-editor-btn")?.addEventListener("click",()=>{pa(n)})},Oi=n=>{const e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");const t=new URLSearchParams;t.append("invalidDomain","www.sleepinghats.com"),t.append("projectId",`${n}`);const a={method:"POST",headers:e,body:t,redirect:"follow"};fetch(`${U.deployURL}/api/project-deploy/invalidate`,a).then(i=>i.text()).then(i=>console.log("result -->",i)).catch(i=>console.error(i))};class qi{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new Hi,this._projectsTSCCSService=new hn,this._pagesTSCCSService=new Xe}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),t=document.getElementById("saved-project-list-container");t&&(t.innerHTML="",t.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-project-button");a?.removeEventListener("click",this.createProjectHandler),a?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(r=>{r.removeEventListener("click",this.getProjectPagesListHandler),r.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(r=>{r.removeEventListener("click",this.addPageToProjectHandler),r.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(r=>{r.removeEventListener("click",this.deleteProjectHandler),r.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=Pr,window.showProjectSetting=Qr,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{Ut({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,t)=>{try{const o=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",o,t),await j.SyncDataOnline(),this.initProjectsSidebar()}catch(a){console.error("Failed to rename project:",a)}};getProjectPagesListHandler=async e=>{const t=e.target.dataset.projectid,a=e.target.parentElement.querySelector(".project-pages-list");if(a){if(!a.classList.contains("d-none")){a.classList.add("d-none");return}a.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,a.classList.remove("d-none");const i=await this._projectsHTMLService.getProjectPagesListHTML(t);a.innerHTML=i}};deleteProjectHandler=async e=>{try{let t=e.target.dataset.projectid;t||(t=e.target.parentElement.dataset.projectid),await jt("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(t),await j.SyncDataOnline(),A.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(t){console.error("Failed to delete project:",t),A.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,t)=>{try{let a=e.target.parentElement.parentElement.dataset.projectid;await jt("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(a,t),await j.SyncDataOnline(),this.initProjectsSidebar())}catch(a){console.error("Failed to delete page from project:",a)}};setMainPageHandler=async(e,t)=>{e.preventDefault(),e.stopPropagation();try{let a=e.target.closest(".project-page-item").dataset.projectid;A.infoMessageToast("Setting page as main page...",0);const i=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(a,t),await j.SyncDataOnline();const o=await this._projectsHTMLService.getProjectPagesListHTML(a),s=e.target.closest(".project-pages-list");s&&(s.innerHTML=o,s.classList.remove("d-none")),i?.remove(),A.successfullToast("Main page set successfully!")}catch(a){console.error("Failed to set main page:",a),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),Ut({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const t=e.target.previousElementSibling.dataset.projectid,i=(await this._projectsTSCCSService.getProjectById(t))?.data?.the_project?.[`the_project_${ie.PROJECT_PAGE_LINKER}`];let o=i?i.map(r=>({id:r.id,title:r?.data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const s=document.getElementById("add-pages-project");await this.addPageToProject(s,!1,t,o)}catch(t){console.error("Failed to add page to project:",t)}};addPageToProject=async(e,t,a,i=[])=>{try{const o=await this._pagesTSCCSService.getAllPages(),s=o?o.map(m=>({id:m.id,title:m?.data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const r=e.querySelector("#selectedItems"),l=e.querySelector("#options"),u=(m="")=>{if(!s.length){l.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let p=s.filter(h=>h.title.toLowerCase().includes(m.toLowerCase()));c(),l.innerHTML=p.length?p.map(h=>`
            <li class="option" data-value="${h.id}">
              <input type="checkbox" id="page-${h.id}" ${i?.some(w=>w.id.toString()===h.id.toString())?"checked":""} />
              <span>${h.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},c=()=>{i&&i.length?r.innerHTML=i.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):r.innerHTML="<span>No pages selected!</span>"},d=(m,p)=>{i.push({id:m,title:p}),c()},g=m=>{i=i.filter(p=>p.id.toString()!==m.toString()),c()};r.addEventListener("click",m=>{const p=m.target;if(p.classList.contains("remove-item")){const h=p.closest(".selected-page");h&&g(h.dataset.value)}}),l.addEventListener("click",m=>{const p=m.target.closest(".option");if(!p)return;const h=p.querySelector("input[type='checkbox']");h&&(m.target!==h&&(h.checked=!h.checked),h.checked?d(p.dataset.value,p.querySelector("span").textContent.trim()):g(p.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(t&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){A.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),p=e.querySelector("#closeModal");m.disabled=!0,p.disabled=!0;const h=m.textContent;m.textContent="Adding...",A.infoMessageToast("Adding pages to project...",0);try{const w=i.map(y=>Number(y.id));if(!w.length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}if(t){this.addPageToProjectHandler();const E=document.getElementById("create-project-form").elements,L=Dn(E),_=await I(),S=await this._projectsTSCCSService.createProject(L,_?.userId,_?.entityId);await j.SyncDataOnline(),a=(await Y(S.ghostId)).id}if(!a){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Project ID not found."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}await this._projectsTSCCSService.addPagesToProject(a,w);const v=await this._projectsHTMLService.getProjectPagesListHTML(a),T=document.getElementById(`dropdown-menu-${a}`)?.nextElementSibling;T&&(T.innerHTML=v,T.classList.remove("d-none")),Oi(a),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to add pages to prjects"),m.disabled=!1,p.disabled=!1,p.textContent=h}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const p=m.target;u(p.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{u()}),c()}catch(o){console.error("Failed to add page to project:",o)}}}const Wt=(()=>{const n=()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})};return{toggle:s=>{const r=s.target,l=r?.dataset?.id;if(r.classList.contains("activeNavigationIcon")){n();return}if(l){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const d=document.getElementById(l);document.querySelector(`[data-id='${l}']`)?.classList.add("activeNavigationIcon"),d?.classList.add("navActive"),l=="fs-all-pages-list"&&new ga().initPagesSidebar(),l=="fs-all-projects-list"&&new qi().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})},checkForActiveNavigation:()=>{const s=document.querySelector(".activeNavigationIcon");if(s){const r=s.dataset?.id||"";document.getElementById(r)?.classList.remove("navActive")}},resetNavigationBar:n,disableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="none",s.style.pointerEvents="none",s.style.opacity="0"},enableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="block",s.style.pointerEvents="all",s.style.opacity="1"}}})(),ze=(()=>{const n=()=>{const i=document.querySelector("#profileDropdown");if(i.style.display&&i.style.display=="block"){e();return}i?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:n,closeUserActionModel:e,disableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="none",i.style.pointerEvents="none",i.style.opacity="0"},enableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="flex",i.style.pointerEvents="all",i.style.opacity="1"}}})(),A=(()=>{let n=0;const e=()=>{const l=document.createElement("span");return l.innerText="close",l.classList.add("material-symbols-outlined"),l.classList.add("crossButtonToast"),l.addEventListener("click",u=>{u.target instanceof HTMLElement&&u.target.parentNode instanceof HTMLElement&&console.log(u.target.parentNode.remove())}),l},t=l=>{const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("successFullToast");const d=document.createElement("span");d.classList.add("material-symbols-outlined"),d.innerText="check_circle";const g=document.createElement("span");g.innerText=l,c.appendChild(d),c.appendChild(g),c.appendChild(e()),u.appendChild(c),n=n+.5,o(c)},a=(l,u=1)=>{n=0;const c=document.querySelector("#toasterContainer");c.style.display="flex";const d=document.createElement("div");d.classList.add("infoMessageToast","bg-info");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="info";const m=document.createElement("span");m.innerText=l,d.appendChild(g),d.appendChild(m),d.appendChild(e()),c.appendChild(d),u!=0&&(n=n+.5+(u||0),o(d))},i=(l,u)=>{n=0;const c=document.querySelector("#toasterContainer");c.style.display="flex";const d=document.createElement("div");d.classList.add("failureToast");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="error";const m=document.createElement("span");m.innerText=l,d.appendChild(g),d.appendChild(m),d.appendChild(e()),c.appendChild(d),n=n+.5+(u||0),o(d)},o=l=>{l.style.animation=`animateToastMessage ${2+n}s forwards`,l.addEventListener("animationend",()=>{l.remove();const u=document.querySelector("#toasterContainer");u.innerHTML||(n=0,u.style.display="none")}),l.addEventListener("mouseenter",()=>{s()}),l.addEventListener("mouseleave",()=>{r()})},s=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(u=>{u.style.animationPlayState="paused"})},r=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(u=>{u.style.animationPlayState="running"})};return{successfullToast:t,infoMessageToast:a,errorToast:i}})();async function Fe(){const n=await I(),e=n?.entityId,t=n?.token,a=n?.userId,i=n?.userConcept,s=(await Y(e)).typeCharacter;let r=!1,l;const u=new M;u.conceptIds=[e],u.selectors=["the_entity_user"],u.outputFormat=se,u.inpage=100,await ye(u,t)?.subscribe(g=>{l=g});const c=l?.[0]?.data?.the_entity?.the_entity_user?.id;if(Number(c)===Number(i)&&(r=(await Y(i))?.userId===a),!r||!s||s!=="the_entity"||!t||t.trim()===""||!a)throw setTimeout(()=>$e(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function Yr(n){try{const e=await je(n,"the_entity_s_widget",!0);e.length?await Ne(e[0].id):A.errorToast("already deleted")}catch(e){console.error(e)}}async function ha(n,e="Error"){console.error(n);const t=n;t&&(A.errorToast(t?.message?t.message:e),t.status===401&&$e())}let we=[],Pe=ia;async function fa(n){const e=document.getElementById("selected_attr_list"),t=document.querySelector(".row.attribute_single");we=[],Pe=ia,e&&(e.innerHTML=""),t?.remove(),await _e(n),n==="update-element-dialog"&&document.getElementById(n)?.remove()}async function ed(n,e){if(n.preventDefault(),!(await Ce.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(n.target),i=Object.fromEntries(a),o=n.target.querySelector("[name='name']"),s=n.target.querySelector("[name='tag']");let r=!0;if(i?.name?.trim()?o.style.border="":(r=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),i?.tag?.trim()?s.style.border="":(r=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),!r)return;const u=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');u.textContent="Creating...";const c=n?.target;for(let m=0,p=c?.length;m<p;++m)c[m].disabled=!0;const d=await Fi(a,null);for(let m=0,p=c?.length;m<p;++m)c[m].disabled=!1;await _e(e);const g=await yn();if(d){const m=document.getElementById("created-elements");m?!g||g.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=g||"":console.error("Widget list container not found in the DOM.")}return d}async function Fi(n,e){const t=Object.fromEntries(n);delete t.attributes;const i=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let o=[];if(i.forEach(s=>{const r=s?.textContent?.split(" "),l=r[0],u=r[1].substr(1,r[1].length-7);let c="";switch(l){case"method":c="get,post,dialog";break;case"target":c="_blank,_self,_parent,_top";break;case"type":t?.tag==="button"?c="button,submit,reset":t?.tag==="input"&&(c="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":c="soft,hard";break}o.push({name:l,type:u,value:c})}),o=[...Nn,...o],e){const s=await Sa(e),r=s?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,l=new Set(Nn.map(m=>m.name)),u=s?.attributes?.filter(m=>m?.division!=="inline"&&!l.has(m?.name)&&m?.name!=="elementContent"),c=new Set(we.map(m=>m.name)),d=u?.filter(m=>!c.has(m?.name));if(d?.length){const m=await Promise.all(d?.map(async p=>await We(p?.id)));console.log("deletedResponse ->",m)}let g=[{the_element_name:{name:t?.name}},{the_element_tag:{tag:t?.tag}},{the_element_void:{void:t?.void}},{the_element_icon:{icon:t?.icon.toString()}},{the_element_default:{default:t?.default}},{the_element_division:{division:t?.division}},{the_element_s_attribute:we}];return await Promise.all(g.map(async m=>await Promise.all(Object.entries(m).map(async([p,h])=>{const w=Object.keys(h)[0],v=h[w]||"";if(p==="the_element_s_attribute"){const C=await D(e);if(h?.length){const T=h.filter(b=>!b?.id);await Promise.all(T.map(async b=>{const y=await q("attribute",999,b);return await H(C,y,"s_attribute")}))}}else await ot(e,p,w,v,999);if(p==="the_element_default"&&w==="default"&&r){const T=(await I())?.userId;await ot(r,"the_attribute_value","value",v,T)}return"x"})))),await j.SyncDataOnline(),A.successfullToast("The element updated successfully"),e}else{const s=o;t?.void&&s.unshift({name:"elementContent",type:"string",value:""});const r=await q("element",999,t);return await Promise.all(s.map(async l=>{const u=await q("attribute",999,l);return await H(r,u,"s_attribute")})),await j.SyncDataOnline(),A.successfullToast("The element created successfully"),r}}function Kr(){const n=document.querySelectorAll(".attribute_single");n?.length&&n.forEach(i=>{i?.remove()});let e=String(Date.now());const t=el(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",t)}function Vi(n){document.getElementById(n)?.remove()}async function Zr(){const n=document.getElementById("select_the_attribute");let e=Pe.filter(a=>a?.name==n?.value)[0];Pe=Pe.filter(a=>a?.name!=n?.value),we.push(e);const t=n.closest(".attribute_single");t?.id&&Vi(t.id),ya([])}function Xr(n){let e=we.filter(t=>t.name==n)[0];we=we.filter(t=>t.name!=n),Pe.push(e),gs(Pe,"name","string"),ya([])}function ya(n){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(we.length>0)we.forEach(a=>{a.name!=="id"&&a.name!=="className"&&(e+=`<li>${a.name} (${a.type})`,e+=`<a onclick="removeSelectedAttribute('${a.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const a=n?.filter(o=>o?.division!=="inline"&&o.name!=="id"&&o.name!=="className"&&o.name!=="elementContent");we=a;const i=new Set(we.map(o=>o.name));Pe=Pe.filter(o=>!i?.has(o?.name)),a.map(function(o){e+=`<li>${o.name} (${o.type}) `,e+=`<a onclick="removeSelectedAttribute('${o.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const t=document.getElementById("element_attributes_entry");t&&(t.innerHTML=e)}function el(n){let e='<select id="select_the_attribute" class="form-select">';return Pe.forEach(t=>{e+=`<option value="${t?.name}">${t?.name}</option>`}),e+="</select>",`
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
  `}async function tl(n,e){if(n.preventDefault(),!(await Ce.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(n.target),i=Object.fromEntries(a);console.log(i,"update formValues");const o=await Fi(a,e);await fa("update-element-dialog");const s=await yn();if(o){const r=document.getElementById("created-elements");r?!s||s.trim()===""?r.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:r.innerHTML=s||"":console.error("Widget list container not found in the DOM.")}return o}class nl{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const t=await Sa(e);this.singleElement=t,this.createElemenModaltHTML=this.getHtml(),t&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await ya(this.singleElement.attributes))}getHtml(){return window.updateNewElement=tl,window.closeElementModal=fa,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
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
      </dialog>`}}class al{createElemenModaltHTML;constructor(){window._dragService=ur,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=Kr,window.cancelAttributeRow=Vi,window.addAttribute=Zr,window.removeSelectedAttribute=Xr,window.closeElementModal=fa,`
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
    `}}async function re(n){document.getElementById(n).showModal()}async function _e(n){const e=document.getElementById(n);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function Ri(n,e){n?.stopPropagation();const t=document.getElementById(`menu-${e}`),a=t?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),t&&!a&&t.classList.add("show")}async function td(n){new al,await re(n)}async function nd(n,e,t){n.stopPropagation(),console.log("modalId",e),Ri(n,Number(t)),new nl(t)}async function ad(n,e){Ri(n,e),confirm("Are you sure you want to delete the element?")&&(await We(e),A.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const a=await yn(),i=document.getElementById("created-elements");i?!a||a.trim()===""?i.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:i.innerHTML=a||"":console.error("Elements list container not found in the DOM.")}async function wa(){Ht(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(e),re("save-widget-dialog"),new Promise((t,a)=>{const i=e.querySelector("#save-widget-form");i.onsubmit=async s=>{s.preventDefault();try{const r=new FormData(i),u=Object.fromEntries(r).widgetName,c=s.target;if(!u?.trim()){const d=c.querySelector("#widgetName");d?.focus(),d.style.border="2px solid red",d.style.outline="none",d.addEventListener("input",()=>{d.style.border=""});return}await Ui(s,u),_e("save-widget-dialog"),t("Widget saved successfully")}catch(r){console.error("Error saving widget:",r),a("Error saving widget")}};const o=e.querySelector("button[type='button']");o.onclick=()=>{_e("save-widget-dialog"),t("Widget saving canceled")}})}async function Ui(n,e){n.preventDefault();try{A.infoMessageToast("Saving Widget...",0),await Fe();const t=document.getElementById("save-widget-dialog"),a=t?.querySelector('button[type="submit"]');a.textContent="Saving";const i=t?.querySelector("input"),o=t?.querySelectorAll("button");o&&o.forEach(d=>{d.disabled=!0}),i&&(i.disabled=!0),await Oe(),F.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async d=>{if(d.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[d.id]){const g=await ke(d,"div.mftsccs-marking-element");f.editedWidgets[d.id].html=g.innerHTML}});const r=await zi();f.staticWidgetTree.html=r;const l=await f.saveWidget(e),u=await Y(l.id);_e("save-widget-dialog"),At(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),await B.renderSavedWidgets(),kt(n,u.id);return}catch(t){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),ha(t,"There is an error on saving widget")}}async function va(n,e,t){const a=document.getElementById("update-publish-widget-btn");try{const i=document.getElementById("update-widget-btn");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating...",A.infoMessageToast("Updating Widget...",0)),await Oe(),F.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async u=>{if(u.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[u.id]){const c=await ke(u,"div.mftsccs-marking-element");f.editedWidgets[u.id].html=c.innerHTML}});const s=await ll();f.staticWidgetTree.html=s,await f.updateWidget(),At(),pe(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Updated Successfully"),await B.renderSavedWidgets(),await B.renderBoomWidgets();const l=document.getElementById("widget-builder");l.textContent="Widget Builder Panel",await kt(n,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),t&&t===!0&&await f.publish();return}catch(i){document.querySelector(".infoMessageToast")?.remove();const s=document.getElementById("update-widget-btn");s&&(s.classList.remove("disabled"),s.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),i instanceof Error&&A.errorToast(i.message)}finally{a&&a.classList.remove("disabled")}}async function Je(n,e){const t=document.querySelector(".widgetStyle");t.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(u=>{u.textContent=""});const i=document.getElementById("publish-widget");i&&(i.style.display="none",i.disabled=!0);const o=document.querySelector(".content-target"),s=window.location.href,l=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(o){let u=!1;u=await f.hasWidgetChanged(Number(l));const d=document.getElementById("preview-btn").classList.value.includes("active");if((n?.target?.id==="preview-btn"||n?.target?.id==="save-widget-form"||n?.target?.id==="update-widget-btn"||n?.target?.id==="form-folder-modal"||n?.target?.id==="data-file-id")&&(u=!1),d&&(u=!1),u&&!e){await jt("Do you want to save changes?")&&(s.includes("?page-id=")?l?await ma(n,Number(l)):await ua(n):l?await va(n,Number(l)):await wa()),At();const p=document.getElementById("preview-btn");p.classList.remove("active"),p.removeAttribute("data-widgetid")}await js()}o.innerHTML="",ji(),n&&!e&&Pt("/")}let An="";async function il(n){const e=document.getElementById("preview-btn"),t=e.classList.value.includes("active");let a=n.target.getAttribute("data-widgetid");a&&Pt(`?widget-id=${a}`);const i=document.querySelector(".content-target"),o=document.querySelector(".midContent .content"),s={...f.widgetTree},r=document.getElementById("undo-btn"),l=document.getElementById("redo-btn"),u=document.getElementById("ai-prompt-btn"),c=document.getElementById("widget-prompt-modal"),d=document.getElementById("widget-prompt-tab"),g=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(t){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,u.style.display="flex",An&&An!=="none"?(d.classList.add("d-none"),c.classList.remove("d-none"),c.classList.add("d-flex")):(d?.classList.remove("d-none"),c&&c.classList.add("d-none")),e.classList.remove("active"),r.classList.remove("d-none"),l.classList.remove("d-none"),m&&(m.style.display="block"),g&&(g.style.display="none"),i&&(i.style.width="100%",i.style.maxWidth="",i.style.margin="0 auto",i.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),i.classList.add("mode-desktop"));const p=cn(),h=await fe(f.widgetTree,p,!0,void 0,!0);K(f.widgetTree,!1,h,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),o.classList.remove("preview"),de(),pe(),ze.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,u.style.display="none",c&&(An=window.getComputedStyle(c).display,c.classList.add("d-none")),d&&d.classList.add("d-none");const p=document.getElementById("select-box"),h=document.getElementById("element-info");p.style.display="none",h.style.display="none",r.classList.add("d-none"),l.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none");const w=await fe(f.widgetTree,i,!0,void 0,!1);K(s,!1,w),document.getElementById("column-left").classList.add("d-none");const C=document.createElement("script");C.setAttribute("type","text/javascript"),C.innerHTML=s?.js,i.appendChild(C),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),ze.disableHeader(),at.closeCodeView(),o.classList.add("preview");const y=document.querySelector("header.wico_top-header");y.style.display="none"}return"PREVIEW WIDGET"}async function ke(n,e){return n.querySelectorAll(e).forEach(a=>{for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.remove()}),n}async function ol(n,e){n.preventDefault();try{const t=new FormData(n.target),i=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');i.textContent="Converting...";const o=n.target;for(let s=0,r=o.length;s<r;++s)o[s].disabled=!0;await sl(t);for(let s=0,r=o.length;s<r;++s)o[s].disabled=!1;return await _e(e),"completed conversion"}catch{A.errorToast("html conversion failed"),await _e(e)}}async function sl(n){const e=Object.fromEntries(n),t=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,a=await as(t,e?.cssCode?.toString(),e?.jsCode.toString()),o=(await I())?.token,r=(await ts(a?.id,o))?.id,{html:l,css:u,js:c}=await Ko(r,o);await en(r);const d=document.querySelector(".content-target");d.innerHTML=l;const g=document.querySelector('.cm-content[data-language="css"]');g.textContent=u;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=c,"converted widget"}async function rl(n){return new jr().init(),re(n),"opened convert HTML to Widget!"}async function ct(n,e){return new Promise(async(t,a)=>{try{let i=new z;i.composition=n,i.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function","the_widget_dependency"],i.inpage=100;let o=new z;o.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],o.inpage=100;const r=await be([i,o],e);t(r)}catch(i){console.error("error",i),i?.status===401&&$e(),a(i)}})}async function ll(){F.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target"),e=n.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(s=>{s.classList.replace("edited-widget-container","added-widget-container")});const t=await ke(n,"div.mftsccs-marking-element");return n?.querySelector("#widget-details")?.remove(),(n?.querySelectorAll(".mftsccs-marking-rendered")).forEach(s=>{s.remove()}),t.innerHTML.trim()}async function zi(){F.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target"),e=await ke(n,"div.mftsccs-marking-element");return n?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function it(){const n=document.querySelector(".content-target");n?.querySelector("#widget-details")?.remove();const t=await ke(n,"div.mftsccs-marking-element");return n?.querySelector(".widget_selected")?.classList.remove("widget_selected"),t.innerHTML.trim()}async function Et(){F.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target")?.cloneNode(!0);n?.querySelector("#widget-details")?.remove();const a=(await ke(n,"div.mftsccs-marking-element")).innerHTML.trim();return F.staticElement?.setAttribute("draggable","true"),a}async function zt(n){F.staticElement?.removeAttribute("draggable");const e=document.getElementById(n)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const i=(await ke(e,"div.mftsccs-marking-element")).innerHTML.trim();return F.staticElement?.setAttribute("draggable","true"),i}const cl=["image/jpeg","image/jpg","image/png","image/webp"],dl=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],Ji=async n=>{try{const e=new FormData;let t;if(dl.includes(n.type))e.append("file",n,n.name),t=await ml(e);else if(cl.includes(n.type))e.append("image",n,n.name),t=await ul(e);else return{message:"Invalid File Format",success:!1};return t?.data?{message:"Upload Success",success:!0,url:t.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},ul=async(n,e="")=>{try{const t=await fetch(U.boomURL+"/api/Image/UploadImage",{method:"POST",body:n,headers:{Authorization:`Bearer ${e}`}});if(!t.ok){const a=t.headers.get("content-type");a&&a.includes("text/plain")&&console.info(t?.text());const i=await t?.text();return console.error(`${t.status} ${i}`),null}return await t.json()}catch(t){return console.error(t),null}},ml=async(n,e="")=>{try{const t=await fetch(U.boomURL+"/api/Image/UploadFile",{method:"POST",body:n,headers:{Authorization:`Bearer ${e}`}});if(!t.ok){const a=t.headers.get("content-type");a&&a.includes("text/plain")&&console.info(t.text());const i=await t.text();return console.error(`${t.status} ${i}`),null}return await t.json()}catch(t){return console.error(t),null}};async function gl(n=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const t=await oi("public_widget","",!1,e.userId,4,999);let a=new M;a.typeConnection="the_widget_public_name",a.name="widgetPName";let i=new M;i.typeConnection="the_widget_name",i.name="widgetName";let o=new M;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new M;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new M;r.typeConnection="the_public_widget_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new M;if(l.conceptIds=[t.id],l.outputFormat=se,l.name="top",l.freeschemaQueries=[r],n!=""){let u=new vt;u.name="filterName",u.search=n,u.type="the_name",u.operateon="widgetName",u.logicoperator="like";let c=new vt;c.name="filterPublicName",c.search=n,c.type="the_public_name",c.operateon="widgetPName",c.logicoperator="like",l.filters=[u,c],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(u=>{ye(l,"").subscribe(c=>{u(c)})})}catch(e){throw e}}async function pl(n=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const t=await oi("folder_widget","",!1,e.userId,4,999);let a=new M;a.typeConnection="the_widget_folder_name",a.name="widgetPName";let i=new M;i.typeConnection="the_widget_name",i.name="widgetName";let o=new M;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new M;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new M;r.typeConnection="the_folder_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new M;if(l.conceptIds=[t.id],l.outputFormat=se,l.name="top",l.freeschemaQueries=[r],n!=""){let u=new vt;u.name="filterName",u.search=n,u.type="the_name",u.operateon="widgetName",u.logicoperator="like";let c=new vt;c.name="filterFolderName",c.search=n,c.type="the_folder_name",c.operateon="widgetPName",c.logicoperator="like",l.filters=[u,c],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(u=>{ye(l,"").subscribe(c=>{u(c)})})}catch(e){throw e}}class dt{static staticElementList}async function hl(n,e){const t=n?.target?.value,a=await I(),i=a?.userId,o=a?.token,s=await Y(e),u=(await ct(e,o))?.data?.the_widget?.the_widget_before_render?.[0]?.id;u&&await We(u);const c=await X("before_render",t,!1,i,4,999);await H(s,c,"before_render"),await j.SyncDataOnline(),new Di().before_render()}async function fl(n,e){console.log("updateWidgetUpdate event",n),console.log("widgetId",e)}async function yl(n,e){const t=n?.target?.value,a=await I(),i=a?.userId,o=a?.token,s=await Y(e),u=(await ct(e,o))?.data?.the_widget?.the_widget_after_render?.[0]?.id;u&&await We(u);const c=await X("after_render",t,!1,i,4,999);await H(s,c,"after_render"),await j.SyncDataOnline();const g=document.getElementById("mountInput")?.value,p=document.getElementById("mountChildWidgetsInput")?.value,h=new Lt;h.componentDidMountFunction=g,h.addEventFunction=t,h.mountChildWidgetsFunction=p;const w=document.querySelector(".content-target"),v=await h.mount(w);console.log("appContentHTML",v)}async function wl(n,e){const t=n?.target?.value,a=await I(),i=a?.userId,o=a?.token,s=await Y(e),u=(await ct(e,o))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;u&&await We(u);const c=await X("mount_child",t,!1,i,4,999);await H(s,c,"mount_child"),await j.SyncDataOnline()}class vl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=Tl,`
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
    `}}class bl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return`
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
    `}}async function _l(n,e){const t=document.getElementById("documentation-view");await Be(U.documentation_preview_widget,t,{currentWidgetId:e})}let yt,Wn="",zn,Jn;async function El(n,e){zn=n,e==="preview"?new bl:new vl;const t=new M;t.typeConnection="the_widget_documentation",t.name="documentationText",t.selectors=["the_documentation_text"];const a=new M;a.typeConnection="the_widget_s_documentation",a.name="documentationBlank",a.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const i=new M;i.typeConnection="the_documentation_s_json_list",i.name="documentationJSON",i.selectors=["the_json_list_key","the_json_list_value"],a.freeschemaQueries=[i];const o=new M;o.conceptIds=[zn],o.freeschemaQueries=[t,a],o.inpage=100,o.outputFormat=se,await ye(o,"").subscribe(async s=>{const r=s?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";r&&(Wn=r);const l=s?.[0]?.data?.the_widget?.the_widget_s_documentation;l?.length&&(Wn=l?.map(c=>{const d=c?.data?.the_documentation,g=d?.the_documentation_type?.data?.the_type,m=d?.the_documentation_content?.data?.the_content,p=d?.the_documentation_creator_email?.data?.the_creator_email,h=d?.the_documentation_doc_title?.data?.the_doc_title,w=d?.the_documentation_method?.data?.the_method,v=d?.the_documentation_method_url?.data?.the_method_url,C=d?.the_documentation_bearer_token?.data?.the_bearer_token,T=d?.the_documentation_username?.data?.the_username,b=d?.the_documentation_password?.data?.the_password,y=d?.the_documentation_auth_type?.data?.the_auth_type,E=d?.the_documentation_s_json_list,L=d?.the_documentation_api_script?.data?.the_api_script,_=d?.the_documentation_api_body?.data?.the_api_body,S=d?.the_documentation_language?.data?.the_language,x=d?.the_documentation_return?.data?.the_return,k=d?.the_documentation_code_editor?.data?.the_code_editor,P=d?.the_documentation_s_doc_url,$=d?.the_documentation_s_image_url,V=d?.the_documentation_s_video_link;let O={type:g,content:m,creatorEmail:p,title:h};if(g==="blank")O={...O};else if(g==="api"){const R=[];E?.length&&E?.forEach(Q=>{R.push({key:Q?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:Q?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),O={...O,method:w,methodURL:v,authType:y,username:T,password:b,bearerToken:C,json:R,script:L,body:_}}else g==="function"&&(O={...O,language:S,return:x,codeEditor:k});const Ve=[],Ee=[],Te=[];return $?.length&&$?.forEach(R=>{Ve.push(R?.data?.the_image_url)}),V?.length&&V?.forEach(R=>{Ee.push(R?.data?.the_video_link)}),P?.length&&P?.forEach(R=>{Te.push(R.data?.the_doc_url)}),O={...O,imageList:Ve,linkList:Te,videoList:Ee},O})),Jn=s?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&Sl(r)}),e==="preview"?(await re("widget-documentation-preview-modal"),_l(Wn,n)):await re("widget-documentation-modal")}async function Tl(){if(yt){const n=yt.getData(),e=await D(zn),a=(await I())?.userId;if(Jn)await ot(Jn,"the_documentation_text","text",n,a),await j.SyncDataOnline();else{const i=await q("documentation",a,{text:n});await J(e,i,"documentation"),await j.SyncDataOnline()}A.successfullToast("Documentation is saved."),yt.setData(n)}else console.error("Editor not initialized"),A.errorToast("Documentation couldn't saved.")}function Sl(n){const e=document.querySelector("#documentation-editor");e&&Ho.create(e,{licenseKey:"GPL"}).then(t=>{yt=t;const a=n;yt.setData(a)}).catch(t=>{console.error("Error initializing CKEditor:",t)})}class Cl{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",t=>{if(t.target.matches(".btn-tour")){const a=t.target.dataset.tourStatus;this.startTour(a)}})}startTour(e){const t=new $o.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),a=[{classes:"back-button",text:"Back",action:t.back},{classes:"next-button",text:"Next",action:t.next}];t.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:t.complete},{text:"Next",classes:"next-button",action:()=>{t.next()}}]}),t.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".wico_header-section",on:"bottom-start"},buttons:a}),t.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:a}),t.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:a}),t.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const i=document.querySelector("#tab-container .tab button:nth-child(2)"),o=new Event("click",{bubbles:!0,cancelable:!0});return i.dispatchEvent(o),".right-aside"},on:"left"},buttons:a}),t.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:a}),t.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:a}),t.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:t.back},{classes:"next-button",text:"Finish",action:()=>{t.complete(),e||this.updateTourStatus()}}]}),t.start()}async updateTourStatus(){this.closeTour();const e=await I(),t=e?.userId,a=e?.entityId,i=await D(a),o=new Ct;try{await o.initialize();const s=await o.MakeTheInstanceConceptLocal("the_tour_status","true",!1,t,4,999);await o.CreateConnectionBetweenEntityLocal(i,s,"tour_status"),await o.commitTransaction()}catch{o.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}async function Ll(n){console.log("event",n),console.log("event.target",n.target);const e=n?.target?.getAttribute("data-pubwidid");console.log("widgetId -->",e);const t=prompt("What would you like to name this forked widget?");if(!t||!t.trim())return;const a=Number(n.target.dataset.pubwidid);if(a){A.infoMessageToast("Forking widget...",0);try{const i=document.querySelector(".infoMessageToast"),o=await ge(a);f.widgetTree=o;const s=await f.saveWidget(t),r=await Y(s.id);console.log("forkedWidget",r);const l=await D(e);await J(l,s,"s_fork"),await j.SyncDataOnline(),await B.renderSavedWidgets(),await B.renderBoomWidgets(),i?.remove(),A.successfullToast("Widget forked cuccessfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}}class xl{_layoutWidgetHTMLService=new Mi;_pagesHTMLService=new yi;_projectsService=new qi;_projectsHTMLService=new Hi;_pagesService=new ga;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await Ce.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,t={openRenameWidgetModal:Dl,renameWidget:Qi,loadWidget:kt,deleteWidget:Ml,postWidget:Pl,forkWidget:Ll,saveFromPublic:B.saveFromPublic,removeFromTemplate:B.removeFromTemplate,downloadPage:Ir,downloadWebpage:Ar,updateWidgetMount:hl,updateWidgetUpdate:fl,updateWidgetEvents:yl,updateMountChildWidgets:wl,navbarFunctions:Wt,DeleteConceptById:We,uploadAssetsFile:jl,removeAssetFile:Hl,clearSearch:Ol,toggleClearButton:Yi,toggleDropdown:Al,openDocumentationModal:El,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:a=>this.searchWidgets(a,"#saved-widget-list-container"),searchElements:a=>this.searchWidgets(a,"#created-elements"),searchPublicWidgets:a=>this.searchPublicWidgets(a),searchPages:a=>this.searchWidgets(a,"#saved-page-list-container"),searchProjects:a=>this.searchWidgets(a,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:a=>this.searchWidgets(a),switchLayoutType:a=>{const i=a.target,o=document.getElementById("fslayout-template-container"),s=document.getElementById("fslayout-list-container");i.value==="custom"?(s?.style.setProperty("display","flex"),o?.style.setProperty("display","none")):(s?.style.setProperty("display","none"),o?.style.setProperty("display","flex"))}};Object.assign(e,t)}async setupAssetListener(){const e=await I(),t=new M;t.typeConnection="the_entity_s_asset",t.name="itemname";const a=new M;a.conceptIds=[e.entityId],a.freeschemaQueries=[t],a.outputFormat=se,a.inpage=100,ye(a,"").subscribe(i=>{const o=i?.[0]?.data?.the_entity?.the_entity_s_asset,s=this.generateAssetHTML(o),r=document.getElementById("assets-library-list-container");r&&(r.innerHTML=s)})}generateAssetHTML(e){return e?.length?e.map(t=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${t.id})" /></span>
                    <img class="asset-img" src="${t?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${t?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,t){t||(t=`#${e.target?.dataset?.id}`||"");const i=e.target.value.toLowerCase();document.querySelectorAll(`${t} li`).forEach(s=>{const r=(s.textContent||"").toLowerCase();s.style.display=r.includes(i)?"":"none"})}searchPublicWidgets(e){const a=e.target.value.toLowerCase();Qn(a).then(i=>{jn.navbar.setPublicWidgets(i),this.updatePopupMenu("publicWidgets",i)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        </svg>`,text:"Course",link:"/courses"}]},t=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(t),yn().then(a=>{this._elemensHtml=a;const i=document.getElementById("created-elements");i&&(i.innerHTML=a||"")}),Gn().then(a=>{this._savedWidgetsHtml=a;const i=document.getElementById("saved-widget-list-container");i&&(i.innerHTML=a||"")}),Qn().then(a=>{this._publicWidgetsHtml=a;const i=document.getElementById("public-widget-list-container");i&&(i.innerHTML=a||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const t=document.createElement("nav");t.className="sidebar sidebar-collapsed";let a=!0;const i=()=>{a=!a,t.classList.toggle("sidebar-collapsed",a),a||(this.removeSubSidebar(),this.removeActiveClass())};return t.appendChild(this.createSidebarHeader(i)),t.appendChild(this.createSidebarMenu(e.mainItems)),t.appendChild(this.createSection("Widgets")),t.appendChild(this.createSidebarMenu(e.widgetItems)),t.appendChild(this.createSection("Library")),t.appendChild(this.createSidebarMenu(e.libraryItems)),t.appendChild(this.createSection("Configuration")),t.appendChild(this.createSidebarMenu(e.configurationItems)),t}createSidebarHeader(e){const t=document.createElement("div");return t.className="menu-toggle",t.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,t.addEventListener("click",e),t}createSidebarMenu(e){const t=document.createElement("div");return t.className="sidebar-menu",e?.forEach(a=>t.appendChild(this.createMenuItem(a))),t}createMenuItem(e){const t=document.createElement("div");return t.id=e.id,t.onclick=a=>this.handleNavItemClick(a),e.id==="widget-tour"?(t.className="nav-item",t.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,t.onclick=()=>{new Cl().startTour(this._loginDetailObject?.tourStatus)}):e?.link?t.innerHTML=`
                <router-link href="${e.link}" target="_blank" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(t.className="nav-item",t.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),t}createSection(e){const t=document.createElement("div");return t.className="sidebar-section",t.innerHTML=`<hr /><span class="section-title">${e}</span>`,t}async handleNavItemClick(e){const t=document.querySelector(".sidebar"),a=t?.classList.contains("sidebar-collapsed"),i=e.target.closest(".nav-item"),o=i?.id,s=i?.classList.contains("active"),r=i?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!o||s){this.removeSubSidebar();return}if(a){this.removeSubSidebar(),i?.classList.add("active");const l=await this.createSubSidebarMenu(o,r);if(document.querySelector("#column-left")?.appendChild(l),o==="folderWidgets"){const u=document.getElementById("folder-widget-container");await Be(U.folder_widget,u,{showFiles:!0}).then(c=>{c.dataChange(async d=>{(d.displayType==="photo"||d.type==="Image"||d.displayType==="widget"||d.type==="widget")&&await ki(e,d)})})}if(o==="assets"){const u=document.getElementById("default-list-container");await Be(U.assets_widget,u)}}else t?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,t){if(e=="publicWidgets"){let a=document.querySelector("#public-widget-list-container");a&&(a.innerHTML=t)}if(e=="folderWidgets"){let a=document.querySelector("#folder-widget-container");a&&(a.innerHTML=t)}}async createSubSidebarMenu(e,t){const a=document.createElement("section");if(a.className="sub-sidebar",e==="layout")a.innerHTML=`
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
                    </svg>`,text:"Community",link:"/Community"}]},t=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),t.outerHTML}}class Jt{static staticTabName}async function Al(n,e){n.stopPropagation();const t=document.getElementById(`dropdown-menu-${e}`),a=t?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),t&&!a&&t.classList.add("show")}document.addEventListener("click",n=>{document.querySelectorAll(".dropdown-menu").forEach(t=>{const a=n.target;a&&!t.contains(a)&&!a.closest(".dropdown-icon")&&t.classList.remove("show")})});async function Tt(n,e){const t=document.getElementById(e),i=n.target.closest(".accordion-wrapper").querySelector("span");if(t){if(t.style.display==="block"||getComputedStyle(t).display==="block")t.style.display="none",i.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(t.style.display="block",i.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",t.tagName==="FORM"||t.id==="navigator-container"||t.id==="element-attributes"||t.id==="library-css"||t.id==="library-js"||t.id==="general-content"||t.id==="size-content"||t.id==="display-content"||t.id==="typography-content")return}}function Wl(n){const e=document.getElementById(n);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function yn(){const n=await Ce.getInstance().getLoginInfo(),e=await Gi();return dt.staticElementList=e,Array.isArray(e)?e?.map(a=>{const i=a?.id,o=a?.data?.the_element?.the_element_name?.[0]?.data?.the_name,s=a?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=a?.data?.the_element?.the_element_void?.[0]?.data?.the_void,l=a?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",u=a?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${o}">${n.isAdmin?`<a data-elementid="${i}" data-type="${s}" data-default="${l}" data-void="${r}" data-text="${o}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

        <div class="element-details">
        <img src="${u}" class="element-icon">
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
          <img src="${u}" class="element-icon">
          <span>${o}</span>
          </div>
          </a>`}</li>`}).join(""):""}async function Gi(){const n=U?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],t=new Headers;t.append("Content-Type","application/json");const i=await(await fetch(`${n}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:t,body:JSON.stringify(e),redirect:"follow"})).json();return i?.sort((o,s)=>{o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const r=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),l=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return r<l?-1:r>l?1:0}),i}async function Gn(){try{const n=await I();if(!n)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=n?.entityId;await Fe();const t=new vt;t.type="the_public_widget",t.search="",t.operateon="public",t.name="publicfilter",t.logicoperator="=";const a=new M;a.typeConnection="the_public_widget_s_widget",a.freeschemaQueries=[],a.name="public",a.reverse=!0;const i=new M;i.typeConnection="the_widget_recent",i.name="copywidgets",i.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],i.freeschemaQueries=[a];const o=new M;o.typeConnection="the_entity_s_widget",o.name="mywidgets",o.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],o.freeschemaQueries=[i];const s=new M;return s.conceptIds=[e],s.freeschemaQueries=[o],s.inpage=100,s.outputFormat=se,await new Promise((l,u)=>{ye(s,"").subscribe(async c=>{console.log("widget data pub",c);const d=c?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!d.length)return l(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(d.map(async p=>{const h=p?.data?.the_widget,w=h?.the_widget_name?.data?.the_name,v=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:h?.the_widget_html?.data?.the_html,C=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:h?.the_widget_css?.data?.the_css,T=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:h?.the_widget_js?.data?.the_js,b=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:h?.the_widget_timestamp?.data?.the_timestamp,y=!!h?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:p?.id,name:w,html:v,css:C,js:T,timestamp:b,isPosted:y}}))).map(p=>`
                      <li class="widget-item" >

        <router-link href="/?widget-id=${p?.id}" class="savedWidgetRouter" onclick="loadWidget(event, ${p?.id})" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${p?.id}">
    <span class="material-symbols-outlined"> drag_indicator </span>
    ${p?.name}
  </router-link>

  <!-- Three-Dot Dropdown Icon -->
  <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${p?.id})" title="Options"> more_vert </span>

  <!-- Dropdown Menu -->
  <ul class="dropdown-menu" id="dropdown-menu-${p?.id}">


  <li class="d-flex align-items-center justify-content-between post-icon" onclick="${p.isPosted?"":`postWidget(event, ${p?.id})`}" title="${p.isPosted?"Posted":"Post widget"}" style="${p.isPosted?"color: green; cursor: default;":""}">
  <span>${p.isPosted?"Posted":"Post widget"}</span>
    <span class="material-symbols-outlined  ${p.isPosted?"posted":""}" >
      ${p.isPosted?"done":"post_add"}
    </span>
    </li>

    <li class="d-flex align-items-center justify-content-between "  onclick="openRenameWidgetModal(event, ${p?.id})">
    <span >Rename</span>
    <span class="material-symbols-outlined " >edit </span>
    </li>

    <router-link class="w-100 p-0" target="_blank" href="/preview?pageId=${p.id}">
    <li class="d-flex align-items-center justify-content-between w-100">
    <span>Preview</span>
    <span class="material-symbols-outlined">preview </span>
    </li>
    </router-link>

    <li class="d-flex align-items-center justify-content-between delete-icon"  onclick="deleteWidget(event, ${p?.id})">
    <span >Delete</span>
    <span class="material-symbols-outlined " >delete </span>
    </li>

    <li class="d-flex align-items-center justify-content-between" onclick="downloadWebpage(${p?.id})">
    <span>Download</span>
    <span class="material-symbols-outlined">download </span>
    </li>

    <li class="d-flex align-items-center justify-content-between" onclick="saveWidgetToFolderBtn(${p?.id}, true)">
    <span>Save To Folder</span>
    <span class="material-symbols-outlined">topic </span>
    </li>

    <!-- <li class="d-flex align-items-center justify-content-between"  onclick="openDocumentationModal(${p?.id})">
      <span>Documentation</span>
      <span class="material-symbols-outlined">description</span>
    </li> -->
  </ul>

  <div id="spinner-${p.id}" class="spinner-border spinner-border-sm text-primary position-absolute top-50 start-50 translate-middle d-none" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</li>
              `).join("");l(m)})})}catch(n){console.error("Error in getMyWidgetsList:",n),A.errorToast(n?.message||"An error occurred while fetching widgets"),n?.status===401&&$e()}}async function Oe(){try{const n=document.getElementById("builder-workarea");if(!n)return;n.innerHTML="",await He(f.widgetTree);const e=await fe(f.widgetTree,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await K(f.widgetTree,!1,e),de(),pe()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function Ua(n){const e=n?JSON.parse(n):"";if(e)try{const t=document.getElementById("builder-workarea");t.innerHTML="";const a=await fe(e,t),i=document.getElementById("select-box");i.style.display="none";const o=document.getElementById("element-attributes");o.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await K(e,!1,a),de(),pe()}catch(t){throw new Error(`error loading widget with widget tree ${t.message}`)}}async function kt(n,e,t){try{if(n?.preventDefault(),n?.stopPropagation(),Wt.collapseNavbar(),await Fe(),await Je(n),t&&typeof t!="number"||Number.isNaN(t)||e&&typeof e!="number"||Number.isNaN(e)){A.infoMessageToast("Widget id is in different format. Please check and update",4),Je(n);return}Pt(`?widget-id=${t||e}`);const a=document.getElementById("preview-btn");a&&a.setAttribute("data-widgetid",e.toString()),kl(),Il(),oa(),Bi(),await Pi();let i=cn();i.classList.contains("fspage")&&i.classList.remove("fspage");const s=(await I())?.token;let r=null;n&&(r=await Me(e,s));let l=await ge(r?r.widgetId:e);const u=document.getElementById("widgetNameValue");u&&l?.name&&(u.value=l?.name);const c=document.getElementById("widget-builder");c&&l?.name&&(c.textContent="Widget Builder Panel: "+l?.name,c.setAttribute("title",`Widget Builder Panel: ${l?.name}`)),await He(l);const d=await fe(l,i);f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await K(l,!1,d,!0),await Ws(r?.widgetId??e);const g=document.getElementById("preview-btn");return g.setAttribute("onclick","previewWidget(event)"),g.setAttribute("data-widgetid",`${e}`),g.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),Un(),B.enableWidgetButtons(),B.initializeWidgetVersions(t||e,l?.version?l.version.toString():"original",l?.timestamp),N.renderActionHistory(),N.updateActionHistories(),de(),pe(),sa(),""}catch(a){console.error(a),A.errorToast(a?.message,4),Un(),Je(n)}}function kl(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const t=document.getElementById("page-properties");t&&(t.style.display="none");const a=document.querySelector("button[data-tab-id='wico-tab-navigator']"),i=document.querySelector(`button[data-tab-id='${Jt.staticTabName}']`);Jt.staticTabName==="wico-tab-pageInfo"&&i.style.display==="none"?a&&a.click():i?i.click():a&&a.click()}function Il(){document.title="Widget Conceptualizer",St("description","Widget Conceptualizer"),St("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection")}async function Ml(n,e){n.stopPropagation();try{const t=confirm("Do you want to delete the Widget?");if(await Fe(),t){A.infoMessageToast("Deleting the widget...",0),await Yr(e),await B.renderSavedWidgets();const a=new URLSearchParams(window.location.search).get("widget-id");return a&&parseInt(a)===e&&await Je(n),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(t){document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),A.errorToast(t.message?t.message:"Failed to delete widget"),console.error("Failed to delete widget:",t)}}async function Pl(n,e){n.stopPropagation();const t=document.getElementById("postWidgetModal");t&&t.remove();const a=await I(),i=a?.entityId===101651686||a?.entityId===101279491,o=document.createElement("dialog");o.id="postWidgetModal",o.className="col-md-6 a-dialog",o.innerHTML=`
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
  `,document.body.appendChild(o);const s=o.querySelector("#pasteArea"),r=o.querySelector("#widgetThumbnail"),l=o.querySelector("#imagePreview img"),u=o.querySelector("#imagePreview"),c=o.querySelector("#pasteText");function d(p){const h=new FileReader;h.onload=w=>{l&&w.target?.result&&(l.src=w.target.result,u.classList.remove("d-none"),c.classList.add("d-none"))},h.readAsDataURL(p)}r?.addEventListener("change",p=>{const h=p.target.files?.[0];h&&d(h)});function g(p){const h=p.clipboardData?.items;if(h){for(let w=0;w<h.length;w++)if(h[w].type.indexOf("image")!==-1){const v=h[w].getAsFile();if(v&&r){const C=new DataTransfer;C.items.add(v),r.files=C.files,d(v);break}}}}s?.addEventListener("paste",p=>g(p)),o.addEventListener("paste",p=>g(p)),o.querySelector("#post-widget-form")?.addEventListener("submit",p=>{p.preventDefault(),Bl(e,o)}),o.showModal()}async function Bl(n,e){const t=document.querySelector(`#spinner-${n}`),a=e.querySelector('button[type="submit"]');try{a&&(a.disabled=!0,a.textContent="Posting...",A.infoMessageToast("Posting Widget to Public...",0)),t&&t.classList.remove("d-none"),await Fe();const i=await I(),o=document.getElementById("widgetPublicName").value,s=document.getElementById("widgetDescription").value,r=document.getElementById("widgetThumbnail");if(!r?.files?.length)throw console.error("File validation failed:",{inputExists:!!r,filesLength:r?.files?.length}),new Error("Please provide a thumbnail image");const l=r.files?.[0];if(!l||!r.value)throw new Error("Please provide a thumbnail image");const u=await Ji(l);if(!u.success)throw new Error("Failed to upload thumbnail");const c=await Me(n,i.token);if(c&&(await je(c.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Widget is already public.");return}const d=document.getElementById("postAsTemplate")?.checked;let g=null;if(c)g=await D(c.widgetId);else{const C=await Y(n);g=await B.createWidgetCopy(C,i.userId,i.token)}const m=await X("public_name",o,!1,i.userId,4,999),p=await X("description",s,!1,i.userId,4,999),h=await X("thumbnail",u.url||"no attachment",!1,i.userId,4,999);await H(g,p,"description"),await H(g,h,"thumbnail"),await H(g,m,"public_name");const w=await X("public_widget","",!1,i.userId,4,999);if(await H(w,g,"s_widget"),d){const T=await X("template_name",o,!1,i.userId,4,999),b=await X("template_thumbnail",u.url||"no attachment",!1,i.userId,4,999);await H(g,b,"template_thumbnail"),await H(g,T,"template_name");const y=await X("template_widget","",!1,i.userId,4,999);await H(y,g,"s_widget")}await j.SyncDataOnline(),await B.renderPublicWidgets(),await B.renderSavedWidgets(),d&&await B.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast(`Widget Posted to Public${d?" and Templates":""}`)},300)}catch(i){console.error("Error posting widget:",i),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to post widget"),a&&(a.disabled=!1,a.textContent="Post Widget")}finally{t&&t.classList.add("d-none")}}async function Qn(n=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const a=(await gl(n))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],i=await Promise.all(a.map(async r=>{const l=r?.data?.the_widget,c=l?.the_widget_public_name?.data?.the_public_name||`${l?.the_widget_name?.data?.the_name} ${l?.the_widget_version?.data?.the_version>1?"v"+l?.the_widget_version?.data?.the_version:""}`,d=l?.the_widget_description?.data?.the_description,g=l?.the_widget_thumbnail?.data?.the_thumbnail,m=l?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:c,timestamp:m,description:d,thumbnail:g}}));return i?.length?(await Promise.all(i?.map(async r=>{const u=(await Y(r.id)).userId===e.userId,c=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
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
                ${u?`
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
              ${u?`
                <li class="d-flex align-items-center justify-content-between delete-icon" data-pubwidid="${r.id}" onclick="removeMyWidgetFromPublic(event)">
                  <span>Remove</span>
                  <span class="material-symbols-outlined" title="Remove from public" type="button">
                    delete
                  </span>
                </li>`:""}
              <!-- ${u?"":`
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
    `}catch(e){console.error("error",e),e?.status===401&&$e()}}async function $l(n=""){try{const e=await I();if(!e)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const a=(await pl(n))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[],i=await Promise.all(a.map(async l=>{const u=l?.data?.the_widget,d=u?.the_widget_folder_name?.data?.the_folder_name||`${u?.the_widget_name?.data?.the_name} ${u?.the_widget_version?.data?.the_version>1?"v"+u?.the_widget_version?.data?.the_version:""}`,g=u?.the_widget_description?.data?.the_description,m=u?.the_widget_thumbnail?.data?.the_thumbnail,p=u?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:d,timestamp:p,description:g,thumbnail:m}}));if(!i?.length){const l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",await Be(U.folder_widget,l)),`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `}const s=(await Promise.all(i?.map(async l=>{const c=(await Y(l.id)).userId===e.userId,d=l.description?l.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link href="" class="folderWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${l?.id}">
              <div class="d-flex align-items-center" style="min-width: 0;">
                <span class="material-symbols-outlined me-2">drag_indicator</span>
                <div class="widget-info" style="word-wrap: break-word; min-width: 0;">
                  <div class="widget-name pe-2">${l.name||"Unnamed Widget"}</div>
                </div>
              </div>
              <div class="widget-actions d-flex align-items-center ms-auto" style="min-width: 100px;">
                <span class="material-symbols-outlined me-2" type="button" onclick="viewPublicWidgetDetails(event, '${l.name||"Unnamed Widget"}', '${l.thumbnail||""}', '${d||""}')" title="View Widget Details">
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
        `})||[])).join(""),r=document.getElementById("folder-widget-container");return r&&(r.style.display="block",r.innerHTML=s),s}catch(e){console.error("error",e),e?.status===401&&$e()}}async function Nl(){try{const n=await I();if(!n)return[];const e=await X("template_widget","",!1,n.userId,4,999);let t=new M;t.typeConnection="the_widget_template_name",t.name="widgetPName";let a=new M;a.typeConnection="the_widget_template_thumbnail",a.name="widgetThumbnail";let i=new M;i.typeConnection="the_template_widget_s_widget",i.name="widgetLevel",i.inpage=10,i.limit=!0,i.freeschemaQueries=[t,a];let o=new M;return o.conceptIds=[e.id],o.outputFormat=se,o.name="top",o.freeschemaQueries=[i],new Promise(s=>{ye(o,"").subscribe(r=>{const l=[];if(r&&r.length>0){const u=r[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const c of u)if(c?.data?.the_widget&&typeof c.data.the_widget=="object"){const d=c.data.the_widget?.the_widget_template_name?.data?.the_template_name,g=c.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(d||g)&&l.push({id:c.id||"",name:d||"Unnamed Template",thumbnail:g||""})}}s(l)})})}catch(n){return console.error("Error fetching templates:",n),[]}}async function Dl(n,e){n.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const a=document.createElement("dialog");a.setAttribute("id","rename-widget-dialog"),a.classList.add("col-md-3"),a.innerHTML=`
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
        `;const i=a.querySelector("form");return i&&i.addEventListener("submit",o=>Qi(o,"",e)),document.querySelector("body #app")?.appendChild(a),re("rename-widget-dialog"),"OPENED"}catch(t){console.error("Failed to rename widget:",t)}}async function Qi(n,e="",t){n.preventDefault();let a="";if(e)a=e;else{const l=new FormData(n?.target);if(a=Object.fromEntries(l)?.widgetName,!a?.trim()){const c=n.target.querySelector("#widgetName");c?.focus(),c.style.border="2px solid red",c.style.outline="none",c.addEventListener("input",()=>{c.style.border=""});return}}const o=(await I())?.userId,s=document.getElementById("rename-widget-dialog"),r=s?.querySelector('button[type="submit"]');r.textContent="Saving";try{await Fe();const l=await ot(t,"the_widget_name","name",a,o);await j.SyncDataOnline();const u=s?.querySelector("input"),c=s?.querySelectorAll("button");if(c&&c.forEach(d=>{d.disabled=!0}),u&&(u.disabled=!0),l){B.renderSavedWidgets(),_e("rename-widget-dialog"),A.successfullToast("Widget Renamed Successfully");const d=new URLSearchParams(window.location.search).get("widget-id");if(t===Number(d)){const g=document.getElementById("widget-builder");g.textContent=`Widget Builder Panel: ${a}`}return"widget Renamed successfully"}}catch(l){A.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",l)}}const ba=async(n,e,t=!1)=>{const a=await ct(n,e),i=a?.data?.the_widget,o=i?.the_widget_name?.[0]?.data?.the_name,s=i?.the_widget_html?.[0]?.data?.the_html,r=i?.the_widget_clean?.[0]?.data?.the_clean,l=i?.the_widget_css?.[0]?.data?.the_css,u=i?.the_widget_js?.[0]?.data?.the_js,c=i?.the_widget_timestamp?.[0]?.data?.the_timestamp,d=i?.the_widget_widget?.[0].id,g=i?.the_widget_type?.[0]?.data?.the_type,m=i?.the_widget_after_render?.[0]?.data?.the_after_render,p=i?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,h=i?.the_widget_update?.[0]?.data?.the_update,w=i?.the_widget_mount_child?.[0]?.data?.the_mount_child;let v=[];const C=i?.the_widget_s_child;return C?.length&&(v=await Promise.all(C?.map(async b=>{const y=b?.data?.the_child_widget,E=y?.the_child_widget_type?.[0]?.data?.the_type,L=y?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,_=y?.the_child_widget_info?.[0]?.data?.id?y?.the_child_widget_info?.[0]?.data?.id:y?.the_child_widget_parent?.[0]?.data?.the_parent,S=await ba(Number(_),e,t);return{id:b?.id,type:E,parent:_,wrapper:L,widget:S}}))),{id:a?.id,name:o,html:s,cleanHtml:r,css:l,js:u,timestamp:c,widgetId:d,typeValue:g,addEvent:m,onMount:p,onUpdate:h,mountChildWidgets:w,childs:v}},jl=async n=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await I(),t=e?.entityId,a=e?.userId,i=await Y(t);try{if(n.target?.files?.length>0){const o=[];for(let l=0;l<n.target?.files?.length;l++){const u=n.target?.files[l];if(u.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}o.push(Ji(u))}const s=await Promise.all(o);for(let l=0;l<s.length;l++){const u=s[l];u.success||alert("Some file failed: "+u.message);const c=await X("the_asset",u.url||"",!1,a,4);await H(i,c,"s_asset")}await j.SyncDataOnline(),A.successfullToast(`Asset${s.length>1?"s":""} uploaded successfully`),new xl().setupAssetListener()}else{alert("No file found");return}}catch(o){throw console.error(o),o}document.getElementById("assets-upload-loader")?.classList.add("d-none")},Hl=async(n,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{n.target.closest(".asset-item").remove(),await We(e),A.successfullToast("Asset deleted successfully")}catch(a){console.error("Error deleting asset:",a),A.errorToast("Failed to delete asset")}};function Ol(n){const e=document.getElementById(n);if(e){e.value="";const t=new Event("keyup");e.dispatchEvent(t),Yi(n)}}function Yi(n){const e=document.getElementById(n),t=document.getElementById(`${n}-clear`);e&&t&&(t.style.display=e.value?"block":"none",t.style.cursor=e.value?"default":"")}async function ql(n,e,t,a){n.preventDefault(),n.stopPropagation();const i=a.replace(/\\n/g,`
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
  `,s=document.getElementById("widget-detail-modal");s&&s.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",o),re("widget-detail-modal")}window.viewPublicWidgetDetails=ql;window.openCSSEditor=Tt;class Ki{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let t=function(i){if(!i)return;const{wrapper:o}=i,s=o&&o!=="0"?`#${o}`:".content-target";a=a+`${s} { ${i.css} }`,i.children.forEach(r=>{t(r)})},a="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),t(f.widgetTree),this.styleElement.textContent=a}}async getWidgetHtml(e){let t=[];e.forEach(a=>{a.classList.forEach(i=>{t.push(i)})}),this.insertCSS(t)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new te({doc:"/* Write your CSS here */",extensions:[st,rt,Bo(),nn(),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),te.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),an.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(async t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateCSS(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const t of e)if(this.editorView){const{state:a,dispatch:i}=this.editorView;i({changes:{from:0,to:a.doc.length,insert:`.${t} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const za=async n=>{const e=new si,t=Vl(n);if(Object.keys(t).length>0){const a=await e.validateField(t),i=await Yn(a),o=Yn(i);return Ul(n,o)}},Fl=async n=>{const t=await new si().validateField(n);return Object.keys(t).length>0?{status:!1,details:Yn(t)}:{status:!0}},Vl=n=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},t=n?.attributes;if(Array.isArray(t))t.forEach(a=>{const i=Rl(a);switch(a.name){case"name":e.fieldName=i||"";break;case"value":e.value=i||null;break;case"fieldtype":e.fieldType=i?i.trim():null;break;case"pattern":e.pattern=i||null;break;case"datatype":e.dataType=i?i.trim():null;break;case"typeconcept":e.conceptType=i||null;break;case"maxlength":e.maxLength=i?parseInt(i):null;break;case"minlength":e.minLength=i?parseInt(i):null;break;case"max":e.maxValue=i?parseInt(i):null;break;case"min":e.minValue=i?parseInt(i):null;break;case"accept":e.accept=i||null;break;case"file":e.file=i||null;break;case"required":e.required=i===!0;break;case"unique":e.isUnique=i===!0;break}});else throw console.error('attributesData["attributes"] is not an array',n.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},Rl=n=>{switch(n.type){case"boolean":return n.value==="on";case"array":return n.selected||null;case"string":return n.value||null;default:return null}},Yn=n=>({datatype:n.dataType,pattern:n.pattern,max:n.maxValue,min:n.minValue,minlength:n.minLength,maxlength:n.maxLength,accept:n.accept,file:n.file,required:n.required,unique:n.unique}),Ul=(n,e)=>(n.attributes.forEach(t=>{const a=e[t.name];t.validationStatus=a?"invalid":"valid",t.validationErrorMessage=a||""}),n),zl=n=>({fieldName:n.getAttribute("name"),value:n instanceof HTMLInputElement?n.value:null,fieldType:n.getAttribute("fieldtype"),dataType:n.getAttribute("datatype"),pattern:n.getAttribute("pattern"),conceptType:n.getAttribute("typeconcept"),maxLength:n.getAttribute("maxlength"),minLength:n.getAttribute("minlength"),minValue:n.getAttribute("min"),maxValue:n.getAttribute("max"),file:n.hasAttribute("file"),accept:n.hasAttribute("accept"),required:n.hasAttribute("required"),isUnique:n.getAttribute("unique")==="on"});async function Zi(n){let e=n.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",n.parentNode?.insertBefore(e,n.nextSibling)),e.innerHTML="";const t=zl(n),a=await Fl(t);try{if(a.status)n.classList.remove("invalid"),n.classList.add("valid");else if(n.classList.remove("valid"),n.classList.add("invalid"),a.details&&typeof a.details=="object"){const i=document.createElement("span");i.className="error-message",i.style.color="red",i.style.fontSize="12px";const o=Object.values(a.details).filter(Boolean);i.innerHTML=o.join("<br>"),e.appendChild(i)}}catch(i){console.error("Validation error:",i);const o=document.createElement("span");o.className="error-message",o.style.color="red",o.textContent="Validation failed. Please try again.",e.appendChild(o)}}var et=(n=>(n.STYLE="style",n.BOOLEAN="boolean",n.FORM="form",n.SPECIAL="special",n))(et||{});const Jl=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),_a=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],Ea=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],Gt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Gl=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Qt=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],ve=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),Ql=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),Yl=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),Kl=new Set(["elementContent","className","id"]),Xi=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function ht(n){return n.toLowerCase()==="type"?!0:Xi.has(n.toLowerCase())}function Bt(n,e,t){const a=n.toLowerCase();if(a==="type"){const i=t?Jl.get(t.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):i}return Xi.get(a)||[]}class wn{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=Oo}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,t){Jt.staticTabName=t;let a,i,o=document.getElementsByClassName("tabcontent");for(a=0;a<o.length;a++)o[a].style.display="none";for(i=document.getElementsByClassName("tablinks"),a=0;a<i.length;a++)i[a].className=i[a].className.replace(" active","");const s=document.getElementById(t);s.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let t=this;for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(o){const s=e[i].getAttribute("data-tab-id");t.openTab(o,s)});const a=document.querySelector(`button[data-tab-id='${Jt.staticTabName}']`);a?a.click():e[0].click()}sortAttributes(e){return e.sort((t,a)=>{if(!t?.name||!a?.name)return 0;const i=this.findAttributeInMap(t.name),o=this.findAttributeInMap(a.name);if(i==="Other"&&o!=="Other")return 1;if(i!=="Other"&&o==="Other")return-1;if(i===o){const s=this.categoryMap[i].findIndex(l=>l.toLowerCase()===t.name.toLowerCase()),r=this.categoryMap[o].findIndex(l=>l.toLowerCase()===a.name.toLowerCase());return s-r}return 0})}getCategoryForAttribute(e){if(!e)return"General";const t=e.toLowerCase();for(const[a,i]of Object.entries(this.categoryMap))if(a!=="Other"&&i.some(o=>o.toLowerCase()===t))return a;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,t){setTimeout(()=>{const a=document.getElementById("element-attributes");if(!a){this.setAttributes(e,t);return}a.innerHTML="";const i=document.createElement("div");if(i.className="row",a.appendChild(i),!e){i.innerHTML="";return}(async()=>await za(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const s=this.sortAttributes(e.attributes),r={};s.forEach(u=>{const c=this.getCategoryForAttribute(u.name);r[c]||(r[c]=[]),r[c].push(u)});let l="";Object.entries(r).forEach(([u,c])=>{const d=c.map(m=>{let p="";if(m.name.toLowerCase()==="float")p=`
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
                `;else if(m.name==="Alignment"){const h=e?.tag?.toLowerCase();_a.includes(h)&&(p=`
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
                  `)}else if(m.name==="Font Family"){const h=e?.tag?.toLowerCase();if(Ea.includes(h)&&ht(m.name)){const v=Bt(m.name,m.value,e?.tag).map(C=>{const T=C.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${C}" ${T?"selected":""}>${C}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${v}
                      </select>
                    `}}else if(m.name==="Font Weight"){const h=e?.tag?.toLowerCase();if(Gt.includes(h)&&ht(m.name)){const v=Bt(m.name,m.value,e?.tag).map(C=>{const T=C.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${C}" ${T?"selected":""}>${C}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                        <option value="">Select ${m.name}</option>
                        ${v}
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
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const h=(m.value||"0 0 0 0").split(" ").map(b=>b.trim()).map(b=>/^\d+$/.test(b)?`${b}px`:b);for(;h.length<4;)h.push("0px");const[w,v,C,T]=h;return m.name==="Margin"?`
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
                                  value: [this.value, '${v}', '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge right" data-value="${v}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${v}</span>
                            <input type="text"
                              class="edge-input"
                              value="${v}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge bottom" data-value="${C}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${C}</span>
                            <input type="text"
                              class="edge-input"
                              value="${C}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${v}', this.value, '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge left" data-value="${T}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${T}</span>
                            <input type="text"
                              class="edge-input"
                              value="${T}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${v}', '${C}', this.value].join(' '),
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
                                  value: [this.value, '${v}', '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge right" data-value="${v}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${v}</span>
                            <input type="text"
                              class="edge-input"
                              value="${v}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge bottom" data-value="${C}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${C}</span>
                            <input type="text"
                              class="edge-input"
                              value="${C}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${v}', this.value, '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge left" data-value="${T}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${T}</span>
                            <input type="text"
                              class="edge-input"
                              value="${T}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${v}', '${C}', this.value].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`:""}else if(m?.type==="string")if(m.name==="elementContent")p=`<textarea 
                    class="form-control" 
                    rows="4" 
                    onchange="updateElementAttribute(event, '${t}', ${e?.id})"
                    >${m?.value||""}</textarea>`;else if(ht(m.name)){const w=Bt(m.name,m.value,e?.tag).map(v=>`<option value="${v}" ${v===m?.value?"selected":""}>${v}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else p=`<input type="text" class="form-control" onchange="updateElementAttribute(event, '${t}', ${e?.id})" value="${m?.value||""}">`;else if(m?.type==="color")p=`
                  <div class="color-input-wrapper">
                    <input type="color" 
                      class="color-picker-input" 
                      onchange="updateElementAttribute(event, '${t}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                    <input type="text" 
                      class="form-control color-code-input" 
                      onchange="updateElementAttribute(event, '${t}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                  </div>`;else if(m?.type==="boolean")p=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${t}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(ht(m.name)){const w=Bt(m.name,m.value,e?.tag).map(v=>{const C=v.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${v}" ${C?"selected":""}>${v}</option>`}).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else{const w=(m?.value?.split(",")||[]).map(v=>`<option value="${v}" ${v===m?.selected||v===m?.value?"selected":""}>${v}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      ${w}
                    </select>
                  `}}return m.validationStatus==="invalid"&&(p+=`
                  <span style="color:red;font-size:12px;">${m.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${m.name}</div>
                    <div class="col-7">${p}</div>
                  </div>
                </div>
              `}).join(""),g=u==="General"||u==="Display"||u==="Typography"||u==="Size"||u==="Spacing"||u==="Borders"||u==="Colors"||u==="Other";l+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${u.toLowerCase()}-content')">
                  <div class="category-title">${u}</div>
                  <span class="material-symbols-outlined">${g?"do_not_disturb_on":"add_circle"}</span>
                </div>
                <div class="category-content" id="${u.toLowerCase()}-content" style="display: ${g?"block":"none"}" data-category-state="${g?"open":"closed"}">
                  <div class="row">
                    ${d}
                  </div>
                </div>
              </div>
            `}),i.innerHTML=l}}),Ot()},0)}setAttributesForMultipleElements(e){const t=async()=>await za(e);if(!e){const i=document.getElementById("element-attributes").querySelector(".row");i.innerHTML="";return}t().then(()=>{if(e?.attributes&&e?.attributes?.length){const a={};e.attributes.forEach(s=>{const r=this.getCategoryForAttribute(s.name);a[r]||(a[r]=[]),a[r].push(s)});let i="";Object.entries(a).forEach(([s,r])=>{if(r.length){const l=r.map(c=>{let d="";return c?.type==="string"?d=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${c?.value||""}">`:c?.type==="color"?d=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${c?.value||"#000000"}">`:c?.type==="boolean"?d=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${c?.value&&c?.value!=="false"?"checked":""}>`:c?.type==="array"&&(d=`
                  <select class="form-select" onchange="updateMultipleElementAttribute(event)">
                    ${c?.value?.split(",")?.map(p=>`<option value="${p}" ${p===c?.selected?"selected":""}>${p}</option>`).join("")}
                  </select>
                `),c.validationStatus==="invalid"&&(d+=`
                  <span style="color:red;font-size:12px;">${c.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${c.name}</div>
                    <div class="col-7">${d}</div>
                  </div>
                </div>
              `}).join(""),u=s==="General"||s==="Display"||s==="Typography"||s==="Size"||s==="Spacing"||s==="Borders"||s==="Colors";i+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${s.toLowerCase()}-content')">
                  <div class="category-title">${s}</div>
                  <span class="material-symbols-outlined">${u?"expand_less":"expand_more"}</span>
                </div>
                <div class="category-content" id="${s.toLowerCase()}-content" style="display: ${u?"block":"none"}" data-category-state="${u?"open":"closed"}">
                  <div class="row">
                    ${l}
                  </div>
                </div>
              </div>
            `}});const o=document.getElementById("element-attributes");o&&(o.innerHTML=i)}})}async getHtml(){window.updateWidgetTypeValue=no,window.toggleDisplay=Tt,window.updateElementAttribute=vn,window.updateMultipleElementAttribute=oo,window.handlePageProperties=io,window.updateCSSLibrary=Ke,window.updateJSLibrary=Ze,window.addJSLibrary=lo,window.addCSSLibrary=ro,window.openRenameCustomFunction=at.openRenameCustomFunction,window.deleteCustomFunction=at.deleteCustomFunction,setTimeout(async()=>{at.initializeCodeBlock();const i=new Ki,o=document.getElementById("css-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor(),Ca()},0),setTimeout(async()=>{await new Ti().initializeEditor()},0),setTimeout(async()=>{const i=new Si,o=document.getElementById("js-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor()},0),setTimeout(async()=>{await new ae("onmount-editor-split").initializeEditor(),await new ae("onupdate-editor-split").initializeEditor(),await new ae("addevents-editor-split").initializeEditor(),await new ae("mountchildwidgets-editor-split").initializeEditor(),await new ae("widgetDependencies-editor-split").initializeEditor();const u=document.getElementById("publish-widget");u&&u.addEventListener("click",async c=>{c.preventDefault();try{await f.publish()}catch(d){console.error("error publishing widget",d),d instanceof Error&&A.errorToast(d.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let t="",a="";if(this.the_params){const i=this.the_params?.data?.the_page_html_cache?.data?.the_html_cache||"",o=this.the_params?.data?.the_page_css_cache?.data?.the_css_cache||"";ue.staticHTMLCache=i,ue.staticCSSCache=o;const s=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";s&&Se("meta_title",s);const r=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";r&&Se("meta_description",r);const l=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";l&&Se("meta_keywords",l);const u=this.the_params?.data?.the_page_width?.data?.the_width||"";u&&Se("width",u);const c=this.the_params?.data?.the_page_font_size?.data?.the_font_size;c&&Se("font_size",c);const d=this.the_params?.data?.the_page_font_family?.data?.the_font_family;d&&Se("font_family",d);const g=this.the_params?.data?.the_page_type?.data?.the_type;g&&Se("type",g);const m=()=>Array.from({length:13},(w,v)=>12+v).map(w=>{const v=c==w?"selected":"";return`<option value="${w}" ${v}>${w}</option>`}).join(""),p=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(v=>{const C=d==v.toLowerCase()?"selected":"";return`<option value="${v.toLowerCase()}" ${C}>${v}</option>`}).join(""),h=()=>["Fluid","Fixed"].map(v=>{const C=g==v.toLowerCase()?"selected":"";return`<option value="${v.toLowerCase()}" ${C}>${v}</option>`}).join("");t=`
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
            <input type="text" name="input-page_width" id="width" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}" value="${u}">
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
              ${p()}
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
    `}}async function Ta(n){let e=ca.filter(a=>a.id==n)[0];return!n||n==="null"?void 0:{id:n,attributes:mr,tag:"div",name:`Layout: ${e?.name}`}}async function Zl(){return{id:1,name:"Global",tag:"div",attributes:Qo}}class kn{static editor}function Xl(n,e,t){const a=t?.id,i=document.getElementById("editor");i?.setAttribute("wrapper-id",e),i?.setAttribute("element-id",a),i?.setAttribute("element-clicked","true"),kn.editor&&t?.void?kn.editor.setData(n):t?.void||kn.editor?.setData("")}window.showdWidgetProperties=tc;window.widgetSelected=ic;function ec(n,e){let t;if(e.data_type=="layout"){const a=ca.filter(l=>l.name==e.data_text)[0],r=new DOMParser().parseFromString(a?.html,"text/html").body.querySelector("div");r.setAttribute("element-info-id",n),t=r.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?t=`<${e?.data_type} element-info-id="${n}">${e?.data_default}</${e?.data_type}>`:t=`<${e?.data_type} element-info-id="${n}">`;return`${t}`}async function tc(n,e){const t=n.target.closest(".added-widget-container"),a=t.id,i=t.getAttribute("data-widgetid");if(i){const T=(await I())?.token,y=(await ct(Number(i),T))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new wn().initializeView();const L=document.getElementById("widgetNameValue");L&&(L.value=y)}const s=(await I())?.userId,r=await ni(a,s);console.warn("savedWidgetProperties on widget Selected ->",r);let l="";r?.length&&(r?.length>1&&r?.sort((b,y)=>{const E=new Date(b?.created_at).getTime();return new Date(y?.created_at).getTime()-E}),l=r?.[0]?.data?.[a]?.properties?.filter(b=>b.name==="widget-type")?.[0]?.value);const u=document.getElementById("widgetTypeValue");u.setAttribute("data-widgetcontainerid",a),u.setAttribute("data-mainwidgetid",`${e}`),u.value=l;const d=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,h=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,w=document.querySelector(".content-target"),v=new Lt;l&&await v.getTypeValueList(l),v.componentDidMountFunction=d,v.addEventFunction=m,v.mountChildWidgetsFunction=h,await v.mount(w)}function nc(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(a=>{const i=document.querySelector(a);i&&(i.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const t=document.querySelector('.editor-container .cm-content[data-language="javascript"]');t.textContent="/* Write your JavaScript here */"}const nt=async()=>{const n=document.getElementById("element-info");n.style.display="none"},ft=async n=>{const e=n?.target;let t=e?.tagName;const a=e?.classList?.contains("fslayout-row"),i=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))t="WIDGET",i.classList.add("widget-marker");else if(a)t="Layout Element",i.classList.remove("widget-marker");else if(e?.closest("#widget-details")){t="",i.classList.remove("widget-marker");return}else i.classList.remove("widget-marker");const o=e.getBoundingClientRect(),s=o.left,r=o.top;i.style.display="block",new ResizeObserver(()=>{i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.top=`calc(${r}px)`,i.style.left=`calc(${s}px)`}).observe(e);const u=document.getElementById("element-info_details");u.innerHTML=`<span>${t}</span>`;const c=document.getElementById("select-box"),d=document.getElementById("builder-workarea");d.addEventListener("scroll",Na),d.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");c.style.transition="0.2s ease all";const p=document.getElementById("element-info");m||(p.style.display="block"),p.style.height="0",p.style.width="0"}),d.addEventListener("resize",Na)},tt=async n=>{n.preventDefault();const e=n.target;Wl("navigator-container"),Ie.publish("page:elementClick",e);const t=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details"))return;const a=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",a);const i=e;F?.previousSelectedStaticElement?.removeAttribute("draggable"),F.staticElement=i,F.previousSelectedStaticElement=F.staticElement,F.staticElement.setAttribute("draggable","true");const o=i.getBoundingClientRect();ac(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),F.staticElement=e;const y=e?.tagName.toLowerCase(),_=dt.staticElementList?.filter(S=>{const x=S?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return y===x})?.[0]?.id;vn(n,"",_)}));const r=o.left,l=o.top;Wt.resetNavigationBar();const u=e;let c;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?c=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(c=e.closest(".edited-widget-container"));const d=e.classList.contains("added-widget-container");if(c||d){let y="";d?y=e?.id:c&&(y=c?.id);const E=[];let L=0;async function _(x,k){return x.reduce((P,$,V)=>($.wrapper===k&&(P.push($),L=V),$.children&&$.children.length>0&&_($.children,k),P),E)}const S=await _(f?.staticWidgetTree?.children,y);f.selectedStaticWidgetTreeInfo={widgetTree:S[0],isChildWidget:!0,childWidgetIndex:L},await He(S[0]),await K(S[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await He(f?.staticWidgetTree),K(f?.staticWidgetTree,!1);if(u?.id&&(f.updatedWidgets[u.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const y=document.getElementById("widgetType");y&&(y.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const g=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");g&&(!g?.style?.display||g?.style?.display==="none")&&m&&(g.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(y=>y.remove());let h=!1;if(n instanceof KeyboardEvent&&n.ctrlKey){if(u?.classList.contains("added-widget-container")){A.infoMessageToast("Widget can't be selected");return}u?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(E=>{const L=E.parentElement?.classList,_=E?.classList,S=E.firstChild?.classList,x=L&&L.contains("added-widget-container");let P=_&&_.contains("fslayout-row")||S&&S.contains("fslayout-row")?"Layout":E.tagName;if(x||h){h=!0;return}const $=document.createElement("div");$?.classList.add("tag-name"),$.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${P}
        </span>
      `,E?.parentElement?.appendChild($)}),h?(A.infoMessageToast("Widget can't be selected"),u?.classList.toggle("widget_selected"),u?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await eo());return}const w=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const y=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;w&&y&&(w.value=y)}else w&&(w.value=f?.staticWidgetTree.name);const v=document.getElementById("select-box");v.style.display="block";const C=new ResizeObserver(()=>{v.style.width=e.offsetWidth+"px",v.style.height=e.offsetHeight+"px",v.style.top=`calc(${l}px)`,v.style.left=`calc(${r}px)`}),T=document.getElementById("publishWidgetBtnContainer");if(T){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(T.classList.remove("d-none"),T.classList.add("d-flex")):(T.classList.remove("d-flex"),T.classList.add("d-none")),console.log("prev selected widget",t,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const y=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,E=y.origin||y.id,L=y.version?y.version.toString():"original";typeof B.initializeWidgetVersions=="function"&&B.initializeWidgetVersions(E,L,y?.timestamp)}catch(y){console.error("Error showing widget versions:",y)}}C.observe(e);const b=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?b.style.display="block":b.style.display="none",(c||d)&&!e.closest(".edited-widget-container")){const E=document.getElementById("element-attributes").querySelector(".row");E.innerHTML="",ln(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await Yt(u)};function ac(n){return typeof n.contentEditable<"u"&&bs.includes(n.tagName.toLowerCase())}async function ic(n){n.preventDefault(),n.stopPropagation()}async function Yt(n){let e;if(n?.dataset?.widgetid)return;const t=n?.tagName.toLowerCase(),i=dt.staticElementList?.filter(d=>{const g=d?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return t===g}),o=i?.[0]?.id,s=n.classList.contains("fslayout-row"),r=n?.firstChild?.classList?.contains("fslayout-row");if(s||r)e=await Ta(o),e?.attributes?.length&&(e.attributes=e?.attributes.map(d=>({...d,selected:"",value:d.name==="class"?"":d.value})));else if(o)e=await It(i);else if(Qe.includes(t)||xt.includes(t)){const d=vs.map(g=>{const m=g.name.toLowerCase(),p=ve.get(m)||ve.get(g.name);return p?{...g,value:n.style[p.property]||""}:{...g,value:m==="classname"?n.className||"":m==="id"&&n.id||""}});t==="iframe"&&d.push({name:"src",type:"string",value:n.getAttribute("src")||""}),Qe.includes(t)&&d.push({name:"elementContent",type:"string",value:n.textContent||""}),e={tag:t,attributes:d}}e.attributes=e?.attributes?.map(d=>d?.name?(d.value=uo(n,d.name),d):(console.warn("Found attribute without name:",d),d)).filter(Boolean);let l="";const u=e?.attributes;u?.length&&(l=u?.filter(g=>g?.name==="elementContent")?.[0]?.value,Xl(l,n?.id,e),ln(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new wn()?.setAttributes(e,n?.id)}async function eo(){let n;n=await Zl(),n?.attributes?.length&&(n.attributes=n?.attributes.map(t=>({...t,value:""}))),new wn()?.setAttributesForMultipleElements(n)}const oc=new Xe;async function sc(n){return new Promise(async e=>{const t=await to(n);e(t)})}async function to(n){return new Promise(async e=>{let t=new z;t.composition=n,t.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],t.inpage=100;let a=new z;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const r=(await be([t,a],""))?.data?.the_element?.the_element_s_attribute?.map(d=>{const g=d?.data?.the_attribute,m=g?.the_attribute_name?.[0]?.data?.the_name,p=g?.the_attribute_type?.[0]?.data?.the_type,h=g?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:p,value:h}}),l=r?.map(d=>{let g;return d?.type==="string"?g='<input type="text" class="form-control" onchange="updateAttribute(event)">':d?.type==="boolean"?g='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':d?.type==="array"&&(g=`
            <select class="form-control" onchange="updateAttribute(event)">
              ${d?.value?.split(",")?.map(h=>`<option value="${h}">${h}</option>`)}
            </select>
          `),`
          <div class="col-6 my-2">
            <div class="row attribute-row">
            <div class="col-5 attribute-name">
              ${d.name}
            </div>
            <div class="col-7">
              ${g}
            </div>
            </div>
          </div>
        `}).join("");let u,c=setInterval(async()=>{u&&(clearInterval(c),r?.forEach(d=>{d?.type!=="boolean"&&u?.setAttribute(d?.name,"")})),u=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(l)})}async function no(n){const t=(n?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=t,N.updateActionHistories()}async function rc(n){const e=n.target,t=e.closest(".widget_container"),a=t.getAttribute("data-elementId"),i=e.textContent?.trim(),o=document.querySelectorAll("#element-attributes .attribute-row");for(const s of o)if(s.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const l=s.querySelector("input");if(l&&l.value!==i){l.value=i||"",await vn({target:e,type:"text",value:i,isDirectEdit:!0},t,a);break}}}async function lc(n,e,t,a){console.log("updateElementAttributeViaEditor ->",e,t),n?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),n=F.staticElement;let o;const s=n?.tagName.toLowerCase(),l=dt.staticElementList?.filter(g=>{const m=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return s===m});o=await It(l),n?.classList.remove("wb-initial-empty");const u=a?.value,c=a?.attribute,d=F.staticElement;if(d){if(c==="className")d?.setAttribute("class",u);else if(c==="height"){const g=u?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;d.style.height=m}else if(c==="width"){const g=u?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;d.style.width=m}else if(c==="elementContent")if(!d?.childNodes?.length)d.innerHTML=u;else for(let g of d?.childNodes){const m=g;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=u;break}}else{const p=document.createTextNode(u);d.insertBefore(p,d.firstChild);break}}else d?.setAttribute(c,u?.trim());o.attributes=o?.attributes?.map(g=>(g?.name===c&&(g?.type==="array"?g.selected=u:g.value=u),g)),await Yt(n)}}async function vn(n,e,t){try{const a=n.target.closest(".category-content"),i=a?.id,o=a?.style.display!=="none",r=document.getElementById("advanced-size")?.style.display==="block",c=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),d=document.querySelector(".margin-control")?.closest(".col-12"),g=document.querySelector(".padding-control")?.closest(".col-12"),m=!d?.classList.contains("hidden"),p=!g?.classList.contains("hidden");e=F.staticElement,e?.classList.remove("wb-initial-empty");const h=e?.tagName?.toLowerCase();let w;const v=e?.classList?.contains("fslayout-row"),C=e?.firstChild?.classList?.contains("fslayout-row");if(v||C)w=await Ta(t);else{const S=dt.staticElementList?.filter(x=>{const k=x?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return h===k});if(S?.length)w=await It(S);else if(Qe.includes(h)||xt.includes(h)){const x=n?.target?.value,k=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(k==="className")e.setAttribute("class",x);else if(k==="elementContent"&&Qe.includes(h))e.textContent=x;else if(k==="id")e.id=x;else if(k==="Height"){const P=x?.trim(),$=/^\d+$/.test(P)?`${P}px`:P;e.style.height=$}else if(k==="Width"){const P=x?.trim(),$=/^\d+$/.test(P)?`${P}px`:P;e.style.width=$}else if(k==="Margin"){const $=(x?.trim().split(/\s+/)).map(V=>/^\d+$/.test(V)?`${V}px`:V).join(" ");e.style.margin=$}else if(k==="Padding"){const $=(x?.trim().split(/\s+/)).map(V=>/^\d+$/.test(V)?`${V}px`:V).join(" ");e.style.padding=$}else k==="Background Color"?e.style.backgroundColor=x:k==="Float"?e.style.float=x:k==="Color"?e.style.color=x:e?.setAttribute(k,x?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const P=await zt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=P,me(P)}else{const P=await Et();f.staticWidgetTree.html=P,me(P)}await Yt(e);return}}const T=n?.target?.value,b=n?.target?.type,y=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),E=e,L=E?.getAttribute("isvalidate")==="on";if(L&&E.setAttribute("onchange","applyValidation()"),L&&E?.addEventListener("change",_=>{const S=_.target;Zi(S)}),y==="className")E?.setAttribute("class",T);else if(y==="Height"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.height=S}else if(y==="Width"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.width=S}else if(y==="Minimum-Height"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.minHeight=S}else if(y==="Minimum-Width"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.minWidth=S}else if(y==="Maximum-Height"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.maxHeight=S}else if(y==="Maximum-Width"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.maxWidth=S}else if(y==="Margin"){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.margin=S}else if(y==="Padding"){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.padding=S}else if(y==="Background Color")E.style.backgroundColor=T;else if(y==="Color")E.style.color=T;else if(y==="Float")E.style.float=T;else if(y==="Alignment")_a.includes(e.tagName.toLowerCase())&&(E.style.textAlign=T);else if(y==="Font Family")Ea.includes(e.tagName.toLowerCase())&&(E.style.fontFamily=T);else if(y==="Font Weight")Gt.includes(e.tagName.toLowerCase())&&(E.style.fontWeight=T);else if(y==="Font Size"){if(Gt.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.fontSize=S}}else if(y==="Opacity")E.style.opacity=T;else if(y==="Text Transform")e.tagName.toLowerCase()!=="img"&&(E.style.textTransform=T);else if(y==="Line Height"){if(Qt.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.lineHeight=S}}else if(y==="Letter Spacing"){if(Qt.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.letterSpacing=S}}else if(b==="checkbox"&&!n?.target?.checked)E?.removeAttribute(y),E.value="";else if(y==="elementContent")if(!E?.childNodes?.length)E.innerText=T;else{let _;e?.childNodes?.length&&(_=Array.from(E?.childNodes)?.filter(S=>S.nodeType===3),_?.length&&_.forEach((S,x)=>{x===0?S.nodeValue=T:S.nodeValue=""}))}else y==="align-items"?(E.style.display="flex",E.style.alignItems=T):y==="justify-content"?(E.style.display="flex",E.style.justifyContent=T):y==="text-align"?E.style.textAlign=T:y==="class"?(E.classList.forEach(_=>{_.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||E.classList.remove(_)}),E.classList.add(...T.split(" "))):y&&E?.setAttribute(y,T?.trim());if(w.attributes=w?.attributes?.map(_=>(_?.name===y&&(_?.type==="array"?_.selected=T:_?.type==="boolean"&&!n?.target?.checked?_.value="":_.value=T),_)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const _=await zt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=_,me(_)}else{const _=await Et();f.staticWidgetTree.html=_,me(_)}N.updateActionHistories(),await Yt(e),setTimeout(()=>{if(i&&o){const k=document.getElementById(i);if(k){k.style.display="block";const P=k.previousElementSibling?.querySelector(".material-symbols-outlined");P&&(P.textContent="do_not_disturb_on")}}if(r){const k=document.getElementById("advanced-size");if(k){k.style.display="block";const P=k.previousElementSibling?.querySelector(".material-symbols-outlined");P&&(P.textContent="expand_less")}}const _=document.querySelector(".spacing-tabs");if(_&&c){const k=_.querySelector(`.${c}-tab`);k&&xa(k,c)}const S=document.querySelector(".margin-control")?.closest(".col-12"),x=document.querySelector(".padding-control")?.closest(".col-12");m?(S?.classList.remove("hidden"),x?.classList.add("hidden")):p&&(S?.classList.add("hidden"),x?.classList.remove("hidden"))},0)}catch(a){console.error("error updating attribute",a.message)}}function ao(n,e){let t=[];return n.wrapper===e&&t.push(n),Array.isArray(n.children)&&n.children.forEach(a=>{t=t.concat(ao(a,e))}),t}async function cc(n){const e=n?.target?.value,t=n?.target?.type,a=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),i=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');a==="className"?i?.setAttribute("class",e):t==="checkbox"&&!n?.target?.checked?i?.removeAttribute(a):a==="elementContent"?i.innerText=e:i?.setAttribute(a,e)}async function Sa(n){return new Promise(async e=>{let t=new z;t.composition=n,t.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],t.inpage=100;let a=new z;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const o=await be([t,a],""),s=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name,r=o?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=o?.data?.the_element?.the_element_void?.[0]?.data?.the_void,u=o?.data?.the_element?.the_element_default?.[0]?.data?.the_default,c=o?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,d=o?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=o?.data?.the_element?.the_element_s_attribute?.map(h=>{const w=h.id,v=h?.data?.the_attribute,C=v?.the_attribute_name?.[0]?.data?.the_name,T=v?.the_attribute_type?.[0]?.data?.the_type,b=v?.the_attribute_value?.[0]?.data?.the_value;return{id:w,name:C,type:T,value:b}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:n,name:s,tag:r,void:l,default:u,icon:c,division:d,attributes:m})})}async function It(n){const e=n?.[0],t=e.id,a=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,i=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,o=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,s=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,r=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,l=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,c=e?.data?.the_element?.the_element_s_attribute?.map(g=>{const m=g.id,p=g?.data?.the_attribute,h=p?.the_attribute_name?.[0]?.data?.the_name,w=p?.the_attribute_type?.[0]?.data?.the_type,v=p?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:h,type:w,value:v}});return c?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),_a.includes(i.toLowerCase())&&c.push({name:"Alignment",type:"array",value:"",division:"inline"}),Ea.includes(i.toLowerCase())&&c.push({name:"Font Family",type:"array",value:"",division:"inline"}),Gt.includes(i.toLowerCase())&&c.push({name:"Font Weight",type:"array",value:"",division:"inline"}),Gl.includes(i.toLowerCase())&&c.push({name:"Font Size",type:"string",value:"",division:"inline"}),i.toLowerCase()!=="img"&&c.push({name:"Text Transform",type:"array",value:"",division:"inline"}),Qt.includes(i.toLowerCase())&&c.push({name:"Line Height",type:"string",value:"",division:"inline"}),Qt.includes(i.toLowerCase())&&c.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:t,name:a,tag:i,void:o,default:s,icon:r,division:l,attributes:c}}async function io(n){const{id:e,value:t,dataset:{page_id:a}}=n.target;Se(e,t),e!=="html_cache"&&e!=="css_cache"&&await oc.updatePageField(e,t,Number(a))}async function Kn(n){[{key:"meta_title",value:n?.[`the_${W.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:n?.[`the_${W.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:n?.[`the_${W.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:n?.[`the_${W.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:n?.[`the_${W.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:n?.[`the_${W.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:n?.[`the_${W.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(t=>{t.value&&Se(t.key,t.value)})}async function Se(n,e){const t=document.getElementById("fspage-properties")||dc();let a="";switch(n){case"html_cache":ue.staticHTMLCache=e;break;case"css_cache":ue.staticCSSCache=e;break;case"width":mt(".fspage { width: [^;]+ !important; }"),a=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":mt(".fspage { font-size: [^;]+; }"),a=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":mt(".fspage { font-family: [^;]+; }"),a=e?`.fspage { font-family: ${e}; }`:"";break;case"type":mt(".fspage { width: 1200px; margin: 0 auto; }"),mt(".fspage { width: 100%; padding: 0; }"),e==="fixed"?a=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?a=".fspage { width: 100%; padding: 0; }":a="";break;case"meta_title":document.title=e;break;case"meta_keywords":St(n.replace("meta_",""),e);break;case"meta_description":St(n.replace("meta_",""),e);return}t.textContent+=a}function mt(n){const e=document.getElementById("fspage-properties");if(!e)return;let t=e?.textContent;t=t?t.replace(new RegExp(n,"g"),""):"",e.textContent=t}function dc(){const n=document.createElement("style");return n.id="fspage-properties",document.head.appendChild(n),n}function St(n,e){let t=document.querySelector(`meta[name="${n}"]`);t||(t=document.createElement("meta"),t.setAttribute("name",n),document.head.appendChild(t)),t.setAttribute("content",e)}async function oo(n){try{document.querySelectorAll(".element-selected")?.forEach(async t=>{const a=t?.getAttribute("data-elementId"),i=t?.tagName?.toLowerCase();let o;const s=t?.classList?.contains("fslayout-row"),r=t?.firstChild?.classList?.contains("fslayout-row");if(s||r)o=await Ta(a);else{const p=dt.staticElementList?.filter(h=>{const w=h?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return i===w});if(p?.length)o=await It(p);else if(Qe.includes(i)||xt.includes(i)){const h=n?.target?.value,w=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(w==="className")t.setAttribute("class",h);else if(w==="elementContent"&&Qe.includes(i))t.textContent=h;else if(w==="id")t.id=h;else if(w==="Height"){const v=h?.trim(),C=/^\d+$/.test(v)?`${v}px`:v;t.style.height=C}else if(w==="Width"){const v=h?.trim(),C=/^\d+$/.test(v)?`${v}px`:v;t.style.width=C}else if(w==="Margin"){const C=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");t.style.margin=C}else if(w==="Padding"){const C=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");t.style.padding=C}else w==="Background Color"?t.style.backgroundColor=h:w==="Color"&&(t.style.color=h);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const v=await zt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=v,me(v)}else{const v=await Et();f.staticWidgetTree.html=v,me(v)}await eo();return}}const l=n?.target?.value,u=n?.target?.type,c=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),d=t,g=d?.getAttribute("isvalidate")==="on";if(g&&d.setAttribute("onchange","applyValidation()"),g&&d?.addEventListener("change",m=>{const p=m.target;Zi(p)}),c==="className")d?.setAttribute("class",l);else if(c==="Height"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;d.style.height=p}else if(c==="Width"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;d.style.width=p}else if(c==="Margin"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");d.style.margin=p}else if(c==="Padding"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");d.style.padding=p}else if(c==="Background Color")d.style.backgroundColor=l;else if(c==="Color")d.style.color=l;else if(u==="checkbox"&&!n?.target?.checked)d?.removeAttribute(c),d.value="";else if(c==="elementContent")if(!d?.childNodes?.length)d.innerText=l;else for(let m of d?.childNodes){const p=m;if(p.nodeValue){if(p.nodeType===3&&p.nodeValue.trim()){p.nodeValue=l;break}}else{const h=document.createTextNode(l);d.insertBefore(h,d.firstChild);break}}else c==="align-items"?(d.style.display="flex",d.style.alignItems=l):c==="justify-content"?(d.style.display="flex",d.style.justifyContent=l):c==="text-align"?d.style.textAlign=l:c==="class"?(d.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||d.classList.remove(m)}),d.classList.add(...l.split(" "))):d?.setAttribute(c,l?.trim());if(o.attributes=o?.attributes?.map(m=>(m?.name===c&&(m?.type==="array"?m.selected=l:m?.type==="boolean"&&!n?.target?.checked?m.value="":m.value=l),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await zt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,me(m)}else{const m=await Et();f.staticWidgetTree.html=m,me(m)}N.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function Ke(){const n=document.querySelectorAll("link.vde-css"),t=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),a=[];t?.length&&t.forEach((i,o)=>{const s=i.value,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r),a.push({order:o,url:i.value})}),n?.length&&n?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=a,N.updateActionHistories()}async function Ze(){const n=document.querySelectorAll("script.vde-js"),t=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),a=[];t?.length&&t.forEach(async(i,o)=>{await new Promise((s,r)=>{const l=i.value,u=document.createElement("script");u.classList.add("vde-js"),u.setAttribute("type","text/javascript"),u.setAttribute("src",l),u.setAttribute("crossorigin","anonymous"),u.onload=()=>{s()},u.onerror=c=>{console.error("Failed to load script:",l,c),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(u),a.push({order:o,url:i.value})})}),n?.length&&n?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=a,N.updateActionHistories()}function Ca(){_n(f.staticWidgetTree)}async function so(n){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const t=document.createElement("span");t.className="material-symbols-outlined",t.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter CSS URL",a.addEventListener("change",async()=>{await Ke()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Ke(),await bn(n)},e.appendChild(t),e.appendChild(a),e.appendChild(i),e}let Ja=0;async function Mt(n){const e=++Ja,t=n?n?.library?.js:f.widgetTree?.library?.js,a=document.getElementById("sortable-js-list");a.innerHTML="",La(),t?.length&&t?.sort((i,o)=>Number(i?.order)-Number(o?.order));for(const i of t){if(e!==Ja){console.log("Skipping outdated call for",i.url);return}await new Promise((o,s)=>{const r=document.createElement("li");r.className="list-item",r.draggable=!0;const l=document.createElement("span");l.className="material-symbols-outlined",l.innerText="drag_handle";const u=document.createElement("input");u.type="text",u.value=i?.url,u.addEventListener("change",async()=>{await Ze()});const c=document.createElement("button");c.className="remove-button",c.innerHTML='<span class="material-symbols-outlined">delete</span>',c.onclick=async function(){r.remove(),await Ze(),await Mt(n)},r.appendChild(l),r.appendChild(u),r.appendChild(c),a?.appendChild(r);const d=document.createElement("script");return d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",i.url),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{o()},d.onerror=g=>{console.error("Failed to load script:",i.url,g),s(new Error(`Failed to load script: ${i.url}`))},document.body.appendChild(d),r})}}function Kt(){const n=document.querySelectorAll("link.vde-css");n?.length&&n?.forEach(e=>{e.remove()})}function La(){const n=document.querySelectorAll("script.vde-js");n?.length&&n?.forEach(e=>{e.remove()})}async function bn(n){const e=n?n?.library?.css:f.widgetTree?.library?.css,t=document.getElementById("sortable-list");t.innerHTML="",Kt(),e?.length&&e?.sort((a,i)=>Number(a?.order)-Number(i?.order)),e?.forEach(a=>{const i=document.createElement("li");i.className="list-item",i.draggable=!0;const o=document.createElement("span");o.className="material-symbols-outlined",o.innerText="drag_handle";const s=document.createElement("input");s.type="text",s.value=a.url,s.addEventListener("change",async()=>{await Ke()});const r=document.createElement("button");r.className="remove-button",r.innerHTML='<span class="material-symbols-outlined">delete</span>',r.onclick=async function(){i.remove(),Kt(),await Ke(),await bn(n)},i.appendChild(o),i.appendChild(s),i.appendChild(r),t?.appendChild(i);const l=document.createElement("link");return l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",a.url),document.head.appendChild(l),i})}function uc(n){const e=document.getElementById("sortable-list");if(!e)return;let t=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(t=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),Kt(),await Ke(),await bn(f.widgetTree?.library?.css?.length?f.widgetTree:n))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!t)return;const i=mc(e,a.clientY),o=t;i===null?e.appendChild(o):e.insertBefore(o,i)})}function mc(n,e){return[...n.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}async function _n(n){const e=document.getElementById("sortable-list");e.innerHTML="";const t=document.getElementById("add-list");if(!e||!t){console.error("Required elements not found");return}if(n?.library?.css?.length)await bn(n);else{const o=await so(n);e.appendChild(o)}uc(n);const a=document.getElementById("sortable-js-list");a.innerHTML="";const i=document.getElementById("add-js-list");if(!a||!i){console.error("Required elements not found");return}if(n?.library?.js?.length)await Mt(n);else{const o=await co(n);a.appendChild(o)}gc(n)}async function ro(n){const e=document.getElementById("sortable-list"),t=await so(n);e.appendChild(t)}async function lo(n){const e=document.getElementById("sortable-js-list"),t=await co(n);e.appendChild(t)}async function co(n){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const t=document.createElement("span");t.className="material-symbols-outlined",t.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter JS URL",a.addEventListener("change",async()=>{await Ze()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Ze(),await Mt(n)},e.appendChild(t),e.appendChild(a),e.appendChild(i),e}function gc(n){const e=document.getElementById("sortable-js-list");if(!e)return;let t=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(t=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),La(),await Ze(),await Mt(f.widgetTree?.library?.js?.length?f.widgetTree:n))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!t)return;const i=pc(e,a.clientY),o=t;i===null?e.appendChild(o):e.insertBefore(o,i)})}function pc(n,e){return[...n.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function hc(n){const e=n.toLowerCase();return ve.has(e)?et.STYLE:Ql.has(e)?et.BOOLEAN:Yl.has(e)?et.FORM:Kl.has(e)?et.SPECIAL:et.FORM}function fc(n,e){if(!n&&e==="Background Color")return"#FFFFFF";if(!n)return"#000000";if(n.startsWith("#"))return n;const t=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(t){const[a,i,o,s]=t;return"#"+[i,o,s].map(r=>{const l=parseInt(r).toString(16);return l.length===1?"0"+l:l}).join("")}return"#000000"}function uo(n,e){if(!e)return console.warn("Attribute name is undefined"),"";if(n.classList.contains("fslayout-row")||n.firstChild instanceof HTMLElement&&n.firstChild.classList?.contains("fslayout-row"))return mo(n,e);const t=e.toLowerCase();if(ve.has(t)||ve.has(e)){const a=ve.get(t)||ve.get(e);if(!a)return"";const i=n.style[a.property]||n.getAttribute(`data-${t}`);return t==="color"||t==="background-color"||t==="bg-color"||e==="Color"||e==="Background Color"?fc(i,e):i||""}if(t==="elementcontent"){let a,i;return n?.childNodes?.length&&(a=Array.from(n?.childNodes)?.filter(o=>o?.nodeType===3),a?.length&&(i=a?.map(o=>o?.nodeValue?.trim()).join(""))),i?i?.trim():n?.textContent||""}return t==="classname"?n.classList.value?.replace(/wb-initial-empty/g,"")||"":n.getAttribute(t)||""}function mo(n,e){const t=e.toLowerCase();return t==="class"||t==="classname"?Array.from(n.classList).filter(a=>!a.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):t==="align-items"?n.style.alignItems||"":t==="text-align"?n.style.textAlign||"":n.getAttribute(t)||""}function yc(n,e,t){const a=e.toLowerCase();if(n.id){const i=n.getAttribute("data-attributes");if(i){const o=JSON.parse(i),s=o.find(r=>r.name===e);s&&((s.type==="array"||ht(e))&&(s.selected=t),s.value=t),n.setAttribute("data-attributes",JSON.stringify(o))}}if(ve.has(a)||ve.has(e)){const i=ve.get(a)||ve.get(e);if(!i)return;n.setAttribute(`data-${a}`,t),i.needsUnit&&t&&/^\d+$/.test(t)?n.style[i.property]=`${t}px`:n.style[i.property]=t;return}t?n.setAttribute(a,t):n.removeAttribute(a)}function xa(n,e){const t=n.closest(".spacing-tabs");if(!t)return;t.querySelectorAll(".spacing-tab-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active");const a=t.nextElementSibling,i=a?.nextElementSibling;e==="margin"?(a?.classList.remove("hidden"),i?.classList.add("hidden")):(a?.classList.add("hidden"),i?.classList.remove("hidden"))}window.toggleSpacingBox=xa;let Ue=[],Zt,wt="",Ga=!1,Qa="";const Nt="storeOwner",En=async n=>{Sc(n),await Promise.all([Lc(n),Tc(n)]),mi("projectId",n),gi(),go()},wc=async n=>{document.title=n.storeName||"Store",ho(n.storeLogo),Zt=n.mainPageId,wt=n.projectName,Ue=n.pagesList,localStorage.setItem(Nt,btoa(n.entityId)),mi("projectId",n.projectId),gi(),go()},go=()=>{window.addEventListener("popstate",()=>In(window.location.href)),document.addEventListener("click",n=>{const t=n.target.closest("a");if(!t||t.target==="_blank"||t.hasAttribute("download")||t.getAttribute("rel")==="external"||n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||t.origin!==location.origin)return;const a=t.getAttribute("href");!a||a.startsWith("#")||a.startsWith("mailto:")||(n.preventDefault(),Pt(a),In(a))},!0),In(window.location.href)},In=async n=>{const{pathname:e}=new URL(n,window.location.origin);if(Qa==e)return;Qa=e;const t=bc(e),a=vc(n),i=document.head.querySelectorAll("style#mystyleid");if(console.log("abc",e,Ue,t),t){const o=Ue.find(s=>s.path==t.route);Ya(o,{params:t?.params,queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await Ka(o?.id);Kn(s?.data?.[`the_${W.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else if(e==="/"&&Zt){const o=Ue.find(s=>s.id==Zt);Ya(o,{params:{},queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await Ka(o?.id);Kn(s?.data?.[`the_${W.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else{const o=Ue.find(s=>s.path=="/404");o?po(o.page):document.querySelector("#app").innerHTML="<h1>404</h1>",Array.from(i).forEach(s=>s.remove())}document.getElementById("global-loader")?.classList.add("d-none")},Ya=async(n,e)=>{_c(n),n.page?await po(n,e):console.warn("No page content Found")};function vc(n){const{searchParams:e}=new URL(n,window.location.origin),t={};for(const[a,i]of e.entries())t[a]?t[a]=Array.isArray(t[a])?[...t[a],i]:[t[a],i]:t[a]=i;return t}const bc=n=>{const a=[...Ue.map(i=>i.path)].sort((i,o)=>{const s=i.split("/").filter(Boolean),r=o.split("/").filter(Boolean),l=s.filter(c=>c.startsWith(":")).length,u=r.filter(c=>c.startsWith(":")).length;return l!==u?l-u:r.length-s.length});console.log("routes",a);for(let i=0;i<a.length;i++){const s=(a[i]?.startsWith("/")?a[i]:`/${a[i]}`).split("/").filter(Boolean),r=n.split("/").filter(Boolean);if(s.length!==r.length)continue;const l={};if(s.every((c,d)=>c.startsWith(":")?(l[c.slice(1)]=r[d],!0):c===r[d]))return{route:a[i],params:l}}return null},po=async(n,e)=>{const t=document.querySelector("#app");t&&await Be(n?.page,t,e)};async function Ka(n){return new Promise(async e=>{let t=new M;t.conceptIds=[n],t.outputFormat=se,t.selectors=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_meta_title`,`the_${W.PAGE_COMP_NAME}_meta_description`,`the_${W.PAGE_COMP_NAME}_meta_keywords`,`the_${W.PAGE_COMP_NAME}_width`,`the_${W.PAGE_COMP_NAME}_type`,`the_${W.PAGE_COMP_NAME}_font_family`,`the_${W.PAGE_COMP_NAME}_font_size`,`the_${W.PAGE_COMP_NAME}_body`,`the_${W.WIDGET_COMP_NAME}_clean`],t.inpage=100,ye(t,"").subscribe(async a=>{a.length?e(a?.[0]):!Array.isArray(a)&&a?.data==null&&e({error:!0,message:"There is no data."})}).catch(a=>{const i=a?.message;e({error:!0,message:i})})})}const _c=n=>{if(Ga)return;const e=new URL(window.location.href).hostname.split(".")[0].split("-")[1],t=Ec(e,n),a=new Blob([JSON.stringify(t)],{type:"application/json"}),i=URL.createObjectURL(a),o=document.createElement("link");o.rel="manifest",o.href=i,document.head.appendChild(o),Ga=!0};function Ec(n,e){let t="/icons/icon-192x192.png",a="/icons/icon-512x512.png",o=window.location.hostname;return o.startsWith("www.")&&(o=o.substring(4)),o==="sleepinghats.com"&&(t="/icons/sleepinghats/icon-192x192.png",a="/icons/sleepinghats/icon-152x152.png"),console.log("rootDomain",o),o==="preview-103071837.develop.freeschema.com"||o=="preview-103071837.localhost"?(t="/icons/lms_chat/icon-192x192.png",a="/icons/lms_chat/maskable-icon.png",document.title="",{name:"LMS Chat",short_name:"LMS",start_url:location.origin+"/index.html",display:"standalone",theme_color:"#19c37d",background_color:"#ffffff",icons:[{src:`${location.origin}${t}`,sizes:"192x192",type:"image/png",purpose:"any"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"maskable"}]}):{name:`${wt||e.title||e.slug||n} - ${n}`,short_name:`${wt||n}`,start_url:location.origin+"/index.html",display:"standalone",theme_color:n?"rgba(106, 27, 154, 1);":"#ffffff",background_color:"#eee",icons:[{src:`${location.origin}${t}`,sizes:"192x192",type:"image/png",purpose:"any maskable"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"any maskable"}],share_target:{action:`${location.origin}/captures`,method:"POST",enctype:"multipart/form-data",params:{title:"title",text:"text",url:"url",files:[{name:"media",accept:["image/*","video/*"]}]}}}}const Tc=async n=>{try{localStorage.removeItem(Nt);const e=new M;e.name="entity",e.typeConnection="the_entity_s_project",e.reverse=!0;const t=new M;t.name="project",t.conceptIds=[n],t.freeschemaQueries=[e],t.outputFormat=Wo;const a=await Ae(t,"");if(!a?.[0]?.the_project?.the_entity_s_project_reverse?.[0]?.id)return;a?.[0]?.the_project?.the_entity_s_project_reverse?.length==1&&localStorage.setItem(Nt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()));for(let i=0;i<a?.[0]?.the_project?.the_entity_s_project_reverse?.length;i++)(a?.[0]?.the_project?.the_entity_s_project_reverse[i]).id!=102176333&&localStorage.setItem(Nt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()))}catch(e){console.error(e)}};async function Sc(n){try{const e=new M;e.name="store",e.typeConnection="the_project_refers",e.selectors=["the_store_name","the_store_logo"];const t=new M;t.name="project",t.conceptIds=[n],t.freeschemaQueries=[e];const i=(await Ae(t,""))?.[0]?.the_project?.the_project_refers?.the_store,o=i?.the_store_name?.the_name;document.title=o||"Store",ho(i?.the_store_logo?.the_logo)}catch(e){console.error(e)}}function Cc(n){return new Promise((e,t)=>{const a=new Image;a.crossOrigin="anonymous",a.src=n,a.onload=()=>{const o=document.createElement("canvas");o.width=o.height=512;const s=o.getContext("2d");s?.clearRect(0,0,o.width,o.height);const r=a.width/a.height;let l=512,u=512;r>1?u=512/r:l=512*r;const c=(512-l)/2,d=(512-u)/2;s?.drawImage(a,c,d,l,u);const g=o.toDataURL("image/png");e(g)},a.onerror=()=>{t(new Error("Image failed to load. Check CORS."))}})}async function Lc(n){const t=(await I())?.token;let a=new M;a.name="page",a.typeConnection=`the_${W.PROJECT_COMP_NAME}_${ie.PROJECT_PAGE_LINKER}`,a.selectors=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_body`];let i=new M;i.name="project",i.conceptIds=[n],i.selectors=[`the_${W.PROJECT_COMP_NAME}_name`,`the_${W.PROJECT_COMP_NAME}_main_page`],i.freeschemaQueries=[a],i.outputFormat=se;const o=await Ae(i,t);let s={mainPageId:o?.[0]?.data?.the_project?.the_project_main_page?.id,name:o?.[0]?.data?.the_project?.the_project_name?.data.the_name||"",pages:o?.[0]?.data?.the_project?.the_project_s_page?.map(r=>({id:r?.id,title:r?.data?.the_page?.the_page_title?.data?.the_title||"",path:r?.data?.the_page?.the_page_slug?.data?.the_slug||"",page:r?.data?.the_page?.the_page_body?.id}))||[]};Zt=s.mainPageId,wt=s.name,Ue=s.pages}function ho(n=""){var e=document.querySelector("link[rel~='icon']");e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e),setTimeout(()=>e?.remove(),1e4)),n&&Cc(n).then(t=>{e.href=t}).catch(t=>{console.error(t),e.href="https://boomconcole.com/freeschema/127b5f42-f453-4904-bf4d-d2a6abc9327c.png"})}const xc=async n=>{let e=new M;e.typeConnection="the_project_environment",e.selectors=["the_environment_name","the_environment_value"];let t=new M;t.conceptIds=[n],t.freeschemaQueries=[e];let a=await Ae(t,""),i=null;for(let o=0;o<a.length;o++){let s=a[o]?.the_project;if(s){let l=s?.the_project_environment?.the_environment;if(l&&(i=l?.the_environment_value?.the_environment_value,i))try{i=JSON.parse(i)}catch(u){console.error("Error parsing environment values:",u),i=null}}}if(console.log("Environment values loaded:",i),i){for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)){const s=i[o];console.log("Setting environment variable:",o,s),ta.setValue(o,s)}}},Mn=[{path:"/",linkLabel:"Home",content:async()=>(await ce(()=>import("./home.index-Chnm9LuU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).default},{path:"/preview",linkLabel:"Preview",content:async()=>(await ce(()=>import("./preview.index-DyiAZneH.js"),__vite__mapDeps([13,4,1]))).default},{path:"/page-preview/:id",linkLabel:"Page Preview",content:async()=>(await ce(()=>import("./page-preview.index-B9AXejUq.js"),__vite__mapDeps([14,4,9,6,7,8,10,11,15]))).default},{path:"/documentation",linkLabel:"Documentation",content:async()=>(await ce(()=>import("./documentation.index-B71esXXE.js"),__vite__mapDeps([16,1,6,7,8,17,18,2,3,4,5,9,10,11,19]))).default},{path:"/subscription",linkLabel:"Subscription",content:async()=>(await ce(()=>import("./subscription.index-lWlKrd-R.js"),__vite__mapDeps([20,4,1,2,3,5,9,6,7,8,10,11,21]))).default,isAuthenticated:!0},{path:"/video-tutorial",linkLabel:"videos",content:async()=>(await ce(()=>import("./video-tutorial.index-Bb1xivjn.js"),__vite__mapDeps([22,1,2,3,4,5,9,6,7,8,10,11,23]))).default},{path:"/Community",linkLabel:"Community",content:async()=>(await ce(()=>import("./community.index-DhDxFcsz.js"),__vite__mapDeps([24,4,1,2,3,5,9,6,7,8,10,11,25]))).default},{path:"/courses",linkLabel:"courses",content:async()=>(await ce(()=>import("./courses.index-BKgQG_Aw.js"),__vite__mapDeps([26,4,1,2,3,5,9,6,7,8,10,11]))).default},{path:"/course/:id",linkLabel:"Page Preview",content:async()=>(await ce(()=>import("./course.index-DAtEOF1n.js"),__vite__mapDeps([27,4,1,2,3,5,9,6,7,8,10,11]))).default,isAuthenticated:!0}],fo="env_secret_key_2024";function Ac(n){try{const t=btoa(n)+fo,i=btoa(t).split("").reverse().join("");return btoa(i+"_salt_"+Date.now().toString(36))}catch(e){return console.error("Encryption error:",e),n}}function Wc(n){try{const e=atob(n),t=e.lastIndexOf("_salt_");if(t===-1)throw new Error("Invalid encrypted format");const i=e.substring(0,t).split("").reverse().join(""),o=atob(i),s=o.substring(0,o.length-fo.length);return atob(s)}catch(e){console.error("Decryption error:",e);try{return JSON.parse(n),n}catch{return"{}"}}}function Za(n){const e=JSON.stringify(n);return Ac(e)}function Tn(n){const e=Wc(n);try{return JSON.parse(e)}catch(t){return console.error("Error parsing decrypted object:",t),null}}const yo="selected_environment_values",Sn="selected_environment_index";function Xt(n,e){try{const t=Za(n);if(localStorage.setItem(yo,t),e!==void 0){const a=Za({index:e});localStorage.setItem(Sn,a)}for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&ta.setValue(a,n[a]);console.log("Environment values saved to encrypted localStorage")}catch(t){console.error("Error saving environment to localStorage:",t)}}function Aa(){try{const n=localStorage.getItem(yo);if(n){const e=Tn(n);if(e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&ta.setValue(t,e[t]);return console.log("Environment values loaded from encrypted localStorage to RAM"),e}}}catch(n){console.error("Error loading environment from localStorage:",n)}return null}async function kc(){const n=document.getElementById("select-environment-dropdown");if(!n){console.warn("Environment dropdown not found");return}const t=(await I())?.entityId;if(!t){console.warn("Entity ID not found in profile data");return}let a=new M;a.name="environment",a.typeConnection="the_entity_s_environment",a.selectors=["the_environment_name","the_environment_value"];let i=new M;i.name="entity",i.conceptIds=[t],i.freeschemaQueries=[a],i.outputFormat=se;let o=await Ae(i,""),s=[];for(let r=0;r<o.length;r++){let l=o[r]?.data?.the_entity;if(l){let u=l?.the_entity_s_environment;const c=Array.isArray(u)?u:[u].filter(Boolean);for(let d of c){let g=d?.data?.the_environment;if(g){let m=d?.id,p=g?.the_environment_name?.data?.the_name||"Unnamed",h=g?.the_environment_name?.id,w=g?.the_environment_value?.id,v=g?.the_environment_value?.data?.the_environment_value;if(v)try{v=JSON.parse(v)}catch(T){console.error("Error parsing environment values:",T),v=null}let C={id:m,name:p,values:v,nameConnectionId:h,valueConnectionId:w};s.push(C)}}}}n.innerHTML='<option value="">Select Environment</option>';for(let r=0;r<s.length;r++){let l=s[r]?.name;const u=document.createElement("option");u.value=r.toString(),u.textContent=l,n.appendChild(u)}window.__allEnvironments=s;try{const r=localStorage.getItem(Sn);if(r!==null){const l=Tn(r);l&&l.index!==void 0&&(n.value=l.index.toString())}}catch(r){console.error("Error restoring selected environment:",r)}}async function wo(){try{Aa();const e=(await I())?.entityId;if(!e){console.warn("Entity ID not found in profile data");return}let t=new M;t.name="environment",t.typeConnection="the_entity_s_environment",t.selectors=["the_environment_name","the_environment_value"];let a=new M;a.name="entity",a.conceptIds=[e],a.freeschemaQueries=[t];let i=await Ae(a,"");const o=localStorage.getItem(Sn);let s=null;if(o){const l=Tn(o);l&&l.index!==void 0&&(s=l.index)}let r=[];for(let l=0;l<i.length;l++){let u=i[l]?.the_entity;if(u){let c=u?.the_entity_s_environment;const d=Array.isArray(c)?c:[c].filter(Boolean);for(let g of d){let m=g?.the_environment;if(m){let p=m?.the_environment_name?.the_name||"Unnamed",h=m?.the_environment_value?.the_environment_value;if(h)try{h=JSON.parse(h)}catch(v){console.error("Error parsing environment values:",v),h=null}let w={name:p,values:h};r.push(w)}}}}if(s!==null&&r[s]){const l=r[s];l.values&&(Xt(l.values,s),console.log(`Environment "${l.name}" loaded successfully`))}else r.length>0&&r[0].values&&(Xt(r[0].values,0),console.log(`Default environment "${r[0].name}" loaded successfully`))}catch(n){console.error("Error initializing environment variables:",n)}}async function Ic(){const n=document.getElementById("select-environment-dropdown");if(!n||!n.value){console.warn("No environment selected");return}const e=Number(n.value),a=(window.__allEnvironments||[])[e];if(!a){console.warn("Selected environment not found");return}const{createEnvironmentEditorWithData:i}=await ce(async()=>{const{createEnvironmentEditorWithData:o}=await Promise.resolve().then(()=>Jr);return{createEnvironmentEditorWithData:o}},void 0);await i(a.name,a.values,a.id,a.nameConnectionId,a.valueConnectionId)}async function Mc(){Aa();let n=document.getElementById("select-environment-dropdown");if(!n){console.warn("Environment dropdown not found");return}const t=(await I())?.entityId;if(!t){console.warn("Entity ID not found in profile data");return}let a=new M;a.name="environment",a.typeConnection="the_entity_s_environment",a.selectors=["the_environment_name","the_environment_value"];let i=new M;i.name="entity",i.conceptIds=[t],i.freeschemaQueries=[a],i.outputFormat=se;let o=await Ae(i,""),s=[];for(let c=0;c<o.length;c++){let d=o[c]?.data?.the_entity;if(d){let g=d?.the_entity_s_environment;const m=Array.isArray(g)?g:[g].filter(Boolean);for(let p of m){let h=p?.data?.the_environment;if(h){let w=p?.id,v=h?.the_environment_name?.data?.the_name||"Unnamed",C=h?.the_environment_name?.id,T=h?.the_environment_value?.id,b=h?.the_environment_value?.data?.the_environment_value;if(b)try{b=JSON.parse(b)}catch(E){console.error("Error parsing environment values:",E),b=null}let y={id:w,name:v,values:b,nameConnectionId:C,valueConnectionId:T};s.push(y)}}}}window.__allEnvironments=s;for(let c=0;c<s.length;c++){let d=s[c]?.name;const g=document.createElement("option");g.value=c.toString(),g.textContent=d,n.appendChild(g)}const r=n.cloneNode(!0);n.parentNode?.replaceChild(r,n),n=r;try{const c=localStorage.getItem(Sn);if(c!==null){const d=Tn(c);d&&d.index!==void 0&&(r.value=d.index.toString())}}catch(c){console.error("Error restoring selected environment:",c)}const l=document.getElementById("add-environment-btn");l&&l.addEventListener("click",()=>{pa()});const u=document.getElementById("edit-environment-btn");u&&(u.disabled=!r.value,u.addEventListener("click",()=>{Ic()})),r.addEventListener("change",function(){const c=Number(this.value),g=(window.__allEnvironments||[])[c];if(u&&(u.disabled=!this.value),!g||!g.values){console.warn("No environment values found for selected environment");return}const m=g.values;Xt(m,c)})}const vo=Object.freeze(Object.defineProperty({__proto__:null,getEnvironmentFromDatabase:Mc,initializeEnvironmentVariables:wo,loadEnvironmentFromStorage:Aa,refreshEnvironmentDropdown:kc,saveEnvironmentToStorage:Xt},Symbol.toStringTag,{value:"Module"})),Xa=document.getElementById("app");function qe(){return""}function Pc(n){const e=qe();if(!n)return e||"/";if(e&&n.startsWith(e))return n;const t=n.startsWith("/")?n:"/"+n;return(e+t).replace(/\/+/g,"/")}const Bc=()=>{let n=localStorage?.getItem("profile")||"";return n?!!JSON.parse(n)?.token:!1},$c=n=>new RegExp("^"+n.replace(/:\w+/g,"(.+)")+"$"),Nc=n=>{const e=n.result.slice(1),t=Array.from(n.route.path.matchAll(/:(\w+)/g)).map(a=>a[1]);return Object.fromEntries(t.map((a,i)=>[a,e[i]]))},Dc=async()=>{const n=new URLSearchParams(location.search);return Object.fromEntries(n.entries())};async function Wa(){const n=qe();let e=window.location.pathname;n&&e.startsWith(n)&&(e=e.substring(n.length)||"/",e.startsWith("/")||(e="/"+e));let a=Mn.map(r=>({route:r,result:e.match($c(r.path))})).find(r=>r.result!==null);if(!a)a={route:Mn.find(l=>l.path==="/404"),result:[e]};else if(a.route.isAuthenticated&&!Bc()){const r=Mn.find(l=>l.path==="/");a={route:r,result:[r?.path]},history.replaceState(null,"",n+r?.path+window.location.search)}const i={...await Nc(a),...await Dc()},o=await a.route.content(i),s=new o(i);Xa.innerHTML="",await s?.mount(Xa)}const bo=async n=>{const e=document.getElementById("global-loader");e?.classList.remove("d-none");try{const t=qe(),a=n.startsWith(t)?n:t+n;history.pushState(null,"",a),await Wa()}finally{e?.classList.add("d-none")}},_o=async n=>{const e=qe();window.history.pushState({route:n},"",e+n),Wa()},Pt=n=>{const e=qe(),t=n.startsWith(e)?n:e+n;history.pushState(null,"",t)},jc=()=>{const n=qe(),e=window.location.pathname+window.location.search;let t=e;n&&e.startsWith(n)&&(t=e.substring(n.length)||"/",t.startsWith("/")||(t="/"+t)),bo(t)},Hc=()=>{customElements.define("router-link",class extends HTMLElement{constructor(){super(),this.handleClick=this.handleClick.bind(this),this.href&&this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("a"),e=qe();this.href&&(n.href=e+this.href),this.forwardAttributes(n),n.setAttribute("part","link");const t=document.createElement("slot");n.appendChild(t),this.shadowRoot&&this.shadowRoot.appendChild(n),this.addEventListener("click",this.handleClick)}forwardAttributes(n){["target","download","rel","hreflang","type","title","tabindex","accesskey"].forEach(t=>{this.hasAttribute(t)&&n.setAttribute(t,this.getAttribute(t))})}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}handleClick(n){const e=this.getAttribute("target"),t=this.getAttribute("href");e==="_blank"||n.ctrlKey||n.metaKey||n.button===1||this.hasAttribute("download")||t&&(n.preventDefault(),bo(t))}set href(n){const e=qe();this.setAttribute("href",n);const t=this.shadowRoot?.querySelector("a");t&&(t.href=e+n)}get href(){return this.getAttribute("href")}set target(n){n&&this.setAttribute("target",n)}get target(){return this.getAttribute("target")}})};function Oc(){jc(),Hc(),window.addEventListener("popstate",Wa)}const qc=async n=>{const e=["localhost","visualwidget.boomconcole.com","develop.freeschema.com","anilserver.freeschema.net","wico.freeschema.com"],t=["/wico"],a=window.location.pathname,i=t.some(r=>a===r||a.startsWith(r+"/")),o=window.location.hostname,s=o.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s&&xc(parseInt(s)),s)En(parseInt(s));else if(e.includes(o)||i)await ce(()=>import("./initialLoadWICO-UWIgBEOy.js"),__vite__mapDeps([28,4,3,5,9,6,7,8,10,11])),console.log("Adding the widget"),await wo(),Oc();else try{Fc(o)}catch(r){console.error(r),Cn()}};function Cn(){const n=document.getElementById("global-loader");n&&n.setAttribute("style","display: none !important");const e=document.getElementById("app");e&&(e.innerHTML="<h1>404</h1>")}function Fc(n=""){try{const e=JSON.parse(sessionStorage.getItem("cacheServers")??"[]")||[],t=e.length>0&&e?.[0]!="https://boomconsole.com"?e[0]:"https://deploy.freeschema.com",a=new URLSearchParams;a.append("url",n),console.log("server",t),fetch(t+"/api/project-deploy",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(async i=>{const o=await i.json();wc(o.data)}).catch(i=>{console.error(i),ei(n);try{const s=JSON.parse(sessionStorage.getItem("domainRecord")??"{}");if(s&&s.expiresAt>Date.now()){const r=s.value;r&&En(parseInt(r));return}}catch(o){console.error(o),Cn()}})}catch(e){console.error(e),ei(n)}}function ei(n=""){const e=new URLSearchParams;e.append("url",n),fetch(U.baseURL+"/dns/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}).then(async t=>{const a=await t.json();if(!a)Vc();else{const i=a?.startsWith("http")?a:"http://"+a,s=new URL(i).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s)En(parseInt(s));else throw new Error("Path Not Valid")}}).catch(t=>{console.error(t),Cn()})}function Vc(){fetch(U.baseURL+"/cname").then(async n=>{const e=await n.json()||[];if(e?.[0]){const t=e[0]?.startsWith("http")?e[0]:"http://"+e[0],i=new URL(t).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(i)En(parseInt(i));else throw new Error("Path Not Valid")}else throw new Error("Doamin Not Found")}).catch(n=>{console.error(n),Cn()})}let Eo=null;window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Eo=n});const Rc={activate:U.enableSW,scope:"/",pathToSW:"/serviceWorker.bundle.js",manual:!0};await Go();"serviceWorker"in navigator&&(navigator.serviceWorker.register("/sw.js").then(()=>{console.log("Service Worker registered")}),navigator.serviceWorker.addEventListener("message",n=>{const{title:e,text:t,url:a,file:i}=n.data;console.log("Shared data received:",{title:e,text:t,url:a,file:i})}));ko(U?.boomURL,U?.aiURL,"",U?.baseNodeUrl,void 0,"widget_conceptualizer",Rc,{logApplication:!0,logPackage:!1,isTest:!1,accessTracker:!1},{logserver:U.logserver});const Uc=await I();ti(Uc?.token);qc();window.PWAInstallHandler=(()=>{let n=null,e=null,t=null;return{init:({onInstall:s,onDismiss:r})=>{e=s,t=r,n=Eo,window.addEventListener("appinstalled",()=>{console.log("PWA installed successfully!"),localStorage.setItem("pwaInstalled","true"),e&&e()})},isInstalled:()=>window.matchMedia("(display-mode: standalone)").matches||window.navigator?.standalone,showInstallPrompt:()=>{console.log("deferedPrompt",n),n&&(n.prompt(),n.userChoice.then(s=>{s.outcome==="accepted"?(console.log("User installed the PWA."),e&&e()):(console.log("User dismissed the install prompt."),t&&t()),n=null}))}}})();export{Ce as A,ad as B,W as C,_e as D,ed as E,ze as F,Ji as G,al as H,U as I,Kn as J,Me as K,_o as L,re as M,bo as N,Zc as O,Xe as P,f as S,Cl as T,Ds as V,ur as _,at as a,He as b,q as c,K as d,Oe as e,xl as f,I as g,jn as h,da as i,Di as j,wn as k,kt as l,N as m,Je as n,sa as o,Mc as p,La as q,Kt as r,On as s,A as t,Xc as u,Fe as v,B as w,td as x,Ri as y,nd as z};
