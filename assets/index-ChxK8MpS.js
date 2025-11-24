const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home.index-BwUGZKB2.js","assets/mainView.class-C4NLGCWW.js","assets/navbar.component-nEnymdJT.js","assets/loginModal.service-DAgNSL7B.js","assets/mftsccs-browser-CcapBeGk.js","assets/loginModal-DGhNYttL.css","assets/vendor-DEYWGvhS.js","assets/ckeditor-Cw9bcqxY.js","assets/vendor-TRZluGMH.css","assets/codemirror-D1H9tReK.js","assets/eslint4b-BLWGvIOa.js","assets/prettier-ClL2wQep.js","assets/home-BRuQr2K9.css","assets/preview.index-DCWzQofe.js","assets/page-preview.index-CwYpcpat.js","assets/page-preview-BJCVd99J.css","assets/documentation.index-DK-0ZeIH.js","assets/highlight-CFrhCzdo.js","assets/highlight-ZgkIHsf0.css","assets/documentation-CtKxHXjz.css","assets/subscription.index-CPK4xu-F.js","assets/subscription-Dc24vCVe.css","assets/video-tutorial.index-B_dsqKvK.js","assets/video-tutorial-Dg46rKRD.css","assets/community.index-oRMlz6GL.js","assets/community-CARjtQbC.css","assets/initialLoadWICO-C_7n05L5.js"])))=>i.map(i=>d[i]);
import{p as Z,v as On,G as Fn,P as qa,K as P,g as Ln,E as ge,a as O,V as Qt,_ as nt,b as Vn,H as ue,F as G,R as ve,N as oo,c as fa,d as Oa,O as Fe,k as so,l as Fa,e as D,f as ya,h as K,i as ce,M as Le,J as ro,j as Et,t as Va,o as lo,m as je,n as le,q as Ce,r as Pe,s as Be,Y as Ve,u as Q,D as An,w as Ra,I as wa,x as Ua,y as za,z as co,Q as uo,T as mo}from"./mftsccs-browser-CcapBeGk.js";import{E as oe,b as Tt,o as St,j as Rn,a as Yt,c as go,l as Ja,d as Ga,e as po,f as ke,k as Kt,h as ho,g as fo}from"./codemirror-D1H9tReK.js";import{J as Zt,n as yo}from"./vendor-DEYWGvhS.js";import{z as wo}from"./eslint4b-BLWGvIOa.js";import{l as at,p as Xt,r as en,a as vo,b as bo}from"./prettier-ClL2wQep.js";import{C as _o}from"./ckeditor-Cw9bcqxY.js";const Eo=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return Gi},get addJSLibrary(){return Qi},get applyPageProperties(){return qn},get applyPageProperty(){return _e},get filterChildrenByWrapper(){return Ri},get getAttributeType(){return Kl},get getAttributeValue(){return Ki},get getElementAttribute(){return Fl},get getElementAttributeDetails(){return ua},get getElementData(){return Fi},get getLayoutAttributeValue(){return Zi},get getPropertiesByIdFromStorage(){return At},get handleDirectContentEdit(){return Vl},get handlePageProperties(){return Ui},get initializeApp(){return hn},get initializeLibrary(){return ma},get listJSLibraries(){return Wt},get removeCSSLibrariesFromHead(){return Jt},get removeJSLibrariesFromHead(){return ga},get setAttributeValue(){return Xl},get toggleSpacingBox(){return pa},get updateAttribute(){return Ul},get updateCSSLibrary(){return Je},get updateElementAttribute(){return gn},get updateElementAttributeViaEditor(){return Rl},get updateJSLibrary(){return Ge},get updateMetaTag(){return _t},get updateMultipleElementAttribute(){return zi},get updateWidgetTypeValue(){return Vi}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const z={baseURL:"https://boomconsole.com/api/v1",baseNodeUrl:"https://boomconsole.com",boomURL:"https://boomconsole.com",aiURL:"https://www.ai.freeschema.com/api",deployURL:"https://deploy.freeschema.com",CLIENT_ID:"636550695311-ctc09991hhu6iav4kkhnp1ge537nec2i.apps.googleusercontent.com",logserver:"https://logger.freeschema.com",enableSW:!1,discussion_community:101765915,ai_widget:101934087,visual_prototype_widget:101938499,video_tutorial_widget:102040172,subscriptionId:102121109,documentation_preview_widget:102097744,folder_widget:102400016,assets_widget:102410590,VITE_DEV_BASE:"http://localhost:5173",VITE_CDN_BASE:"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master"},To=z?.boomURL;async function V(t,e,n){const a=await Z(`the_${t}`,"",!0,e,4,999);for(const[i,o]of Object.entries(n)){let s=i;const r=await Z(`${s}`,`${o}`,!1,e,4,999);await q(a,r,s)}return a}async function q(t,e,n){const a=t.userId,i=999,o=999,s=t.type?.characterValue,r=n,l=s+"_"+r,d=await On(l,i,o,a);await Fn(t.id,e.id,d.id,1e3)}async function So(t,e){try{const n=new Headers;return n.append("Content-Type","application/json"),n.append("Authorization",`Bearer ${e}`),await(await fetch(`${To}/api/get-entity-from-user?userConceptId=${t}`,{method:"GET",headers:n,redirect:"follow"})).json()}catch(n){throw console.error(n),n}}async function xc(t){const e=await So(t?.data?.userConcept,t?.data?.token);let n={token:t?.data?.token,refreshToken:t?.data?.refreshtoken,email:t?.data?.email,userId:t?.data?.entity?.[0]?.userId,userConcept:t?.data?.userConcept,entityId:e?.entity,amcode:btoa(JSON.stringify(t?.data?.roles))};return qa(n.token),localStorage.setItem("profile",JSON.stringify(n)),!0}async function I(){return new Promise(t=>{let e=localStorage?.getItem("profile")||"";if(e){const n=JSON.parse(e);t(n)}else t()})}async function Qa(){return new Promise(t=>{let e=localStorage?.getItem("tempwidget")||"";if(e){const n=JSON.parse(e);t(n)}else t()})}const Co=z?.baseNodeUrl;class Ee{static instance;static getInstance(){return Ee.instance||(Ee.instance=new Ee),Ee.instance}async getLoginInfo(){const e=await I(),n=await this.checkIfUserIsAdmin(e?.userConcept);let a="",i=!1,o=!1;if(e?.token){i=!0;let s="",r="";if(e?.entityId){let l=new P;l.typeConnection="the_entity_firstname",l.name="entity_firstname";let d=new P;d.typeConnection="the_entity_lastname",d.name="entity_lastname";let u=new P;u.typeConnection="the_entity_tour_status",u.name="entity_tour_status";let c=new P;c.type="the_entity",c.name="top",c.conceptIds=[e.entityId],c.freeschemaQueries=[l,d,u],c.outputFormat=Ln;let g;await ge(c,"").subscribe(m=>{g=m}),s=g?.[0]?.the_entity?.the_entity_firstname?.the_firstname||"",r=g?.[0]?.the_entity?.the_entity_lastname?.the_lastname||"",o=g?.[0]?.the_entity?.the_entity_tour_status?.the_tour_status==="true"}a=`
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
      `;return{loginInfoHTML:a,isLoggedIn:i,isAdmin:n,tourStatus:o}}async checkIfUserIsAdmin(e){try{return(await O(e))?.accessId===3}catch(n){return console.error("Error fetching user concept:",n),!1}}async logout(){const e=await Qa();await Qt(e?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),location.reload()}async checkAndUpdateToken(){try{const e=await I();if(!e?.token){console.warn("No token found in local storage.");return}const n=e.token,a=e.refreshToken,i=new Headers;i.append("Content-Type","application/json");const o={accessToken:n,refreshToken:a},r=await(await fetch(`${Co}/api/Auth/refresh`,{method:"POST",headers:i,body:JSON.stringify(o)})).json();if(r.success&&r.data){const{accessToken:l,refreshToken:d}=r.data;e.token=l,e.refreshToken=d,localStorage.removeItem("profile"),localStorage.setItem("profile",JSON.stringify(e))}else this.logout()}catch(e){console.error("Error refreshing token:",e)}}}const Lo=Ee.getInstance();(function(){const e=window.fetch;window.fetch=async(...n)=>{const a=n[1]||{};try{const i=await e(...n);if(i.status===401){console.warn("401 Unauthorized - Refreshing token"),await Lo.checkAndUpdateToken();const o=await I();if(!o?.token)return console.error("Token refresh failed. User not logged in."),i;if(a.headers){const s=new Headers(a.headers);s.set("Authorization",`Bearer ${o.token}`),s.has("Content-Type")||s.set("Content-Type","application/json"),a.headers=s}return e(n[0],a)}return i}catch(i){throw console.error("Intercepted Fetch Error:",i),i}}})();const Ao="modulepreload",Wo=function(t){return"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master/"+t},va={},Ie=function(e,n,a){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");i=Promise.allSettled(n.map(l=>{if(l=Wo(l),l in va)return;va[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":Ao,d||(c.as="script"),c.crossOrigin="",c.href=l,r&&c.setAttribute("nonce",r),document.head.appendChild(c),d)return new Promise((g,m)=>{c.addEventListener("load",g),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return i.then(s=>{for(const r of s||[])r.status==="rejected"&&o(r.reason);return e().catch(o)})};function Wn(t,e=0){let n=`<ul style="list-style: none; margin: 10px 0px; ${e==0?" padding-left: 0px; ":""}" id="sortable-list">`;for(let a=0;a<t.length;a++){const i=t[a];i.edit?n+=`
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
                <li>${i.menus?`${Wn(i.menus,e+1)}`:""}</li>
            `:n+=`
                <li style="border: 1px solid lightgray; padding: 5px 10px; margin-bottom: 5px;" data-page-id="${i.page}">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="flex: 1">${i.name}</span>
                        <span style="flex: 1">${i.link}</span>
                        <span style="width: 120px;">${i.action?"Action: <b>Yes</b>":""}</span>
                        <span style="width: 120px;">${i.auth?"Auth: <b>True</b>":"Auth: <b>False</b>"}</span>
                        <div style="width: 100px; display: flex; align-items: center; gap: 10px;">
                            ${a>0?`<a onclick="handleMenuAction(event, 'up', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/f0f13015-1d73-4268-987c-7d1bbb661ee7.png" height="16px" alt="up" /></a>`:""}
                            ${i.menus.length>0?'<a role="button"><img src="https://boomconcole.com/freeschema/05deeedc-b791-4ff4-8a25-751a1c7a4fe8.png" height="16px" alt="right" /></a>':""}
                            ${a<t.length-1?`<a onclick="handleMenuAction(event, 'down', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/3c5e1681-4e99-4dbe-b178-02dad7118c02.png" height="16px" alt="down" /></a>`:""}
                            ${e>0?'<a role="button"><img src="https://boomconcole.com/freeschema/2ad5cd15-e7fc-4578-9479-fe516e5fb9d5.png" height="16px" alt="left" /></a>':""}
                            <a onclick="handleMenuAction(event, 'remove', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/fbb325b1-911e-4ea2-9c6d-7510c62009e6.svg" height="16px" alt="remove" /></a>
                            <a onclick="handleMenuAction(event, 'edit', ${a}, ${i.page})" role="button"><img src="https://boomconcole.com/freeschema/98218250-6ad3-4d24-af6f-0f9d79895c44.png" height="16px" alt="remove" /></a>
                        </div>
                    </div>
                </li>
                <li>${i.menus?`${Wn(i.menus,e+1)}`:""}</li>
            `}return n+="</ul>",n}function lt(t){console.log("menus",t);const e=Wn(t),n=document.getElementById("menu-items");n&&(n.innerHTML=e);let a=null;document.querySelectorAll("#sortable-list li").forEach(i=>{i.addEventListener("dragstart",o=>{a=i,o.dataTransfer.effectAllowed="move"}),i.addEventListener("dragover",o=>{o.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",o=>{o.preventDefault(),i.classList.remove("drag-over"),a!==i&&!i.contains(a)&&i?.parentNode?.insertBefore(a,i.nextSibling)}),i.addEventListener("dragend",()=>{document.querySelectorAll(".drag-over").forEach(o=>o.classList.remove("drag-over"))})})}async function Ya(t){console.log("projectId",t);let e;if(t||(e=Xa()),!t&&!e?.projectId)return console.log("Project Id not found"),[];if(!t&&e.projectId&&(t=e?.projectId),console.log("projectId 2",t),!t)return[];const n=["the_item_menu_name","the_item_menu_link","the_item_menu_action","the_item_menu_auth","the_item_menu_order","the_item_menu_page"],a=new P;a.typeConnection="the_menu_s_item",a.selectors=n;function i(u,c=5){if(c==5)return;const g=new P;g.typeConnection="the_menu_s_item",g.selectors=n,u.name=c.toString(),u.freeschemaQueries=[g];const m=c+1;i(g,m)}const o=new P;o.conceptIds=[t],i(o,1);const s=await nt(o,"");console.log("valllu",s);const r=s?.[0]?.the_project?.the_menu_s_item||[],l=(u=[])=>{let c=[];for(let g=0;g<u.length;g++){const m=u[g];c.push({name:m?.the_item_menu?.the_item_menu_name?.the_name??"",link:m?.the_item_menu?.the_item_menu_link?.the_link??"",action:m?.the_item_menu?.the_item_menu_action?.the_action??"",page:m?.the_item_menu?.the_item_menu_page?.the_page?Number(m?.the_item_menu?.the_item_menu_page?.the_page):"",order:m?.the_item_menu?.the_item_menu_order?.the_order?Number(m?.the_item_menu?.the_item_menu_order?.the_order):0,auth:m?.the_item_menu?.the_item_menu_auth?.the_auth=="true",menus:l(m?.the_item_menu?.the_menu_s_item)??[]})}return c.sort((g,m)=>g.order-m.order)};return l(r)}async function xo(t,e=[]){console.log("menus",e);const n=await new Vn;try{await n.initialize();const a=await O(t);await ue(t,"the_menu_s_item"),await Ka(a,e,n),await n.commitTransaction(),console.log("output concept",t)}catch(a){console.error(a),await n.rollbackTransaction()}}async function Ka(t,e=[],n){for(let a=0;a<e.length;a++){const i=e[a],o=await n.MakeTheInstanceConceptLocal("the_item_menu","",!0,999,4);await n.CreateConnection(t,o,"the_menu_s_item");for(let[s,r]of Object.entries(i))if(console.log("key",s,r),!!["name","link","action","auth","order","page","menus"].includes(s)&&!(s=="menus"&&!Array.isArray(r)))if(s=="menus")await Ka(o,r,n);else{const d=await n.MakeTheInstanceConceptLocal("the_"+s,r,!0,999,4);await n.CreateConnection(o,d,"the_item_menu_"+s)}}}const ko=async()=>{const t=z.enableSW;"serviceWorker"in navigator&&t&&await new Promise((e,n)=>{navigator.serviceWorker.register("/sw.js").then(a=>{a.addEventListener("updatefound",()=>{const i=a.installing;i?.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&(i.postMessage("skipWaiting"),setTimeout(()=>{confirm("A reload is required to update to latest")&&window.location.reload()},500))})}),e(void 0)}).catch(a=>{console.error("Service Worker Init error",a),n(a)}),setTimeout(()=>{n()},3e4)})},Za="wico_site";function Xa(){const t=atob(localStorage.getItem(Za)||"");return t?JSON.parse(t):{}}function ei(t,e){const n=Xa();n[t]=e,localStorage.setItem(Za,btoa(JSON.stringify(n)))}function ti(){window.wico={fetchMenus:Ya}}async function Mo(){await ko()}const k={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"},se={ENTITY_PAGE_LINKER:"s_page",PAGE_WIDGET_LINKER:"body",ENTITY_PROJECT_LINKER:"s_project",PROJECT_PAGE_LINKER:"s_page"},Ct=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Un=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],xn=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],Io=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let ba=[],_a=[];async function Po(t){let e="";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const a=t[n];e+=` ${n}="${a}" `}return e}async function $o(t,e){const n=new G;n.composition=t,n.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const a=await ve([n],e),i=a?.data?.the_widget?.the_widget_html?.[0]?.id,o=a?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,s=a?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!i)return{html:"",css:"",js:""};const r=await oo(i,["contain_s"]);ba=await fa(r.externalConnections),_a=await fa(r.internalConnections);let l=await ni(i,ba,_a);const d=document.createElement("div");return d.innerHTML=l,{html:(d?.querySelector(".widget-wrapper")).innerHTML,css:o||"",js:s||""}}async function ni(t,e,n){try{let a="",o=jo(e)[t];if(o!=null){let s=No(o);const l=(await Bi())?.map(g=>{const m=g?.id,p=g?.data?.the_element?.the_element_name?.[0]?.data?.the_name,h=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,w=g?.data?.the_element?.the_element_void?.[0]?.data?.the_void,L=g?.data?.the_element?.the_element_s_attribute?.map(T=>{const v=T?.data?.the_attribute,y=v?.the_attribute_name?.[0]?.data?.the_name,E=v?.the_attribute_type?.[0]?.data?.the_type,C=v?.the_attribute_value?.[0]?.data?.the_value;return{name:y,type:E,value:C}});return{id:m,name:p,tag:h,void:w,attributes:L}}),d=[...Un,...xn],c=(await I())?.userId;for(let g=0;g<s.length;g++){const m=s[g];if(m.ofTheConceptId==t){const p=await Bo(m.toTheConceptId,n),h=Object.keys(p.data)[0],w=p.data[h],_=Ct.includes(h),L=await Po(w?.attributes||[]),T=l.find(y=>y.tag===h.toLowerCase().trim()),v=w?.attributes;for(const y in v){const E=d.find(S=>y===S?.name?.toLowerCase().trim()),C=v[y],b=E?.type;T.attributes=T?.attributes?.map(S=>(S?.name==="className"&&y==="class"?S.value=C:S?.name==="elementContent"?S.value=w?.innerText:y===S?.name&&(b==="array"?S.selected=C:b==="boolean"?S.value="":S.value=C),S))}if(h!="text"){const y=await Oa(p.id,c);y?.length&&await Qt(y?.[0]?.id);const E={[`wdgt${p.id}`]:T},C=await Fe(E,null,null,null,c);console.log("elementAttributeComp ->",C),a+=`
            <div id="wdgt${p.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${T?.id}">
            <${h} data-cc-id="${p.id}" `+L+`${_?"/></div>":">"}`,a+=await ni(m.toTheConceptId,e,n)}(w.contains=="false"||h=="text")&&(a+=" "+w.innerText+" "),!_&&h!="text"&&(a+=`</${h}></div>`)}}}return a}catch(a){console.error("error converting html",a)}}async function Bo(t,e){var n=[],a={},i=e;n=i;for(var o=[],s=0;s<n.length;s++)o.includes(n[s].ofTheConceptId)||o.push(n[s].ofTheConceptId);var r=await O(t);if(r.id==0&&t!=null&&t!=null){var l=await O(t);r=l}var d=await so(t,n,o),u=r?.type?.characterValue??"";a[u]=d;var c={};return c.data=a,c.id=t,c}function jo(t){return t.reduce((e,n)=>{const{ofTheConceptId:a}=n;return e[a]||(e[a]=[]),e[a].push(n),e},{})}function No(t){const e=new Map;t.forEach(o=>{e.set(o.id,o)});const n=[],a=new Set,i=o=>{if(!a.has(o.id)){a.add(o.id),n.push(o);for(const s of t)s.orderId==o.id&&i(s)}};return t.forEach(o=>{o.orderId==1e3&&i(o)}),n}async function kc(){return"WICO"}async function Me(){const t=await Qa();await Qt(t?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await ao("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async function Do(t,e){var n=[];try{var a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization",`Bearer ${e}`),a.append("Randomizer",Fa.BASE_RANDOMIZER.toString());const i=await fetch(z.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:a,body:JSON.stringify({id:t})});return i.ok?await i.json():(console.log("recursive search error ",i.status),n)}catch(i){console.log(i)}}async function ai(t,e,n=1e3,a){const i=t.userId,l=await On("contain_s",999,999,i);return await Fn(t.id,e.id,l.id,n)}const Ho="the_widget";async function qo(t,e,n){return await Oo(t,e,n)}async function Oo(t,e,n){const o=new DOMParser().parseFromString(t,"text/html").body,s=await Fe({[Ho]:{}});e&&await Fo(e,s),n&&await Vo(n,s);const r=await Fe({widgetHTML:{}});await q(s,r,"html");const l=await ii(o.children[0],r);return await ai(r,l),await D.SyncDataOnline(),s}async function Fo(t,e){const a=(await I())?.userId,o=await Z("the_widgetCSS",t,!0,a,4,999);await q(e,o,"css")}async function Vo(t,e){const a=(await I())?.userId,o=await Z("the_widgetJS",t,!0,a,4,999);await q(e,o,"js")}async function ii(t,e){console.log("parentConcept ->",e);const n={};if(n.tagName=t?.tagName?.toLowerCase(),t?.attributes?.length>0){n.attributes={};for(let o of t.attributes)n.attributes[o.name]=o.value}t?.textContent?.trim()&&(n.text=t.textContent.trim());let a={[n.tagName?n.tagName:"text"]:{contains:t?.children?.length?"true":"false",attributes:n.attributes||"",innerText:t?.children?.length?"":n.text||""}};const i=await Fe(a);if(t?.childNodes?.length>0){n.children=[];let o=[],s=-1,r,l;for(let u of t.childNodes)if(!(u.nodeType===Node.TEXT_NODE&&u.textContent?.trim()==="")&&!(t.children.length===0&&u.nodeType===Node.TEXT_NODE)){if(u.nodeType===Node.TEXT_NODE){let c={text:{contains:!1,attributes:"",innerText:u.textContent?.trim()}};const g=await Fe(c);o.push({parentConcept:i,childConcept:g,orderId:l})}else u.nodeType===Node.ELEMENT_NODE&&(r=await ii(u,i),o.push({parentConcept:i,childConcept:r,orderId:l}));s>=0&&(o[s]={...o[s],orderId:r?.id}),s++}let d=1e3;for(let u=0;u<o.length;u++){const c=o[u];d=(await ai(c.parentConcept,c.childConcept,d)).id}}return i}const Ro="widget-conceptualizer",Uo="0.0.0",zo="module",Jo={dev:"vite --config vite.config.js --force",build:"tsc && vite build --config vite.config.prod.js",preview:"vite preview"},Go={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},Qo={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.174-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},Ea={name:Ro,private:!0,version:Uo,type:zo,scripts:Jo,devDependencies:Go,dependencies:Qo};function Yo(t,e,n,a){switch(n){case"int":t=t.sort(function(i,o){return parseInt(i[e])>parseInt(o[e])?1:parseInt(i[e])<parseInt(o[e])?-1:0});break;default:t=t.sort(function(i,o){return i[e].toLowerCase()>o[e].toLowerCase()?1:i[e].toLowerCase()<o[e].toLowerCase()?-1:0})}}function kn(t){let e={};for(let n=0;n<t.length;n++){const a=t[n];a?.type&&a?.type!=="submit"&&(e[a.name]=a?.value)}return e}function Ko(t){const e=Ea.dependencies||{},n=Ea.devDependencies||{};return e[t]||n[t]||null}async function et(t,e,n,a,i){await ue(t,e);const o=await Z(n,a,!1,i,4,999);let s=await On(e,999,999,i);return await Fn(t,o?.id,s.id,1e3,s.characterValue,i),"Delete and update completed"}class Qe{async generateSlug(e){const n=await I();let a=new G;a.composition=n?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new G;i.fullLinkers=["the_page_slug"],i.inpage=100;const o=[a,i];let s=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return await ya(o,"",Ln).subscribe(r=>{const l=r?.the_entity?.the_entity_s_page?.map(c=>c?.the_page?.the_page_slug?.[0]?.the_page_slug)||[];let d=s,u=s.match(/^(.*?)(?:-(\d+))?$/);if(u){d=u[1];let g=(u[2]?parseInt(u[2],10):0)+1;for(;l.includes(s);)s=`${d}-${g++}`}}),s}async checkSlugAvailablity(e){const n=await I();let a=new G;a.composition=n?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new G;i.fullLinkers=["the_page_slug"],i.inpage=100;const o=[a,i];let s=!0;return await ya(o,"",Ln).subscribe(r=>{(r?.the_entity?.the_entity_s_page?.map(d=>d?.the_page?.the_page_slug?.[0]?.the_page_slug)||[]).includes(e)&&(s=!1)}),s}async savePage(e,n,a){const i=await V(k.PAGE_COMP_NAME,n,e),o=await K(a);return await q(o,i,se.ENTITY_PAGE_LINKER),i}async renamePage(e,n,a){return await et(Number(n),"the_page_title","title",e?.title,a),await et(Number(n),"the_page_slug","slug",e?.slug,a),"renamed"}async getAllPages(e){const n=await I(),a=n?.token;let i=new G;e?i.composition=e:i.composition=n.entityId,i.fullLinkers=[`the_entity_${se.ENTITY_PAGE_LINKER}`],i.inpage=100;let o=new G;return o.fullLinkers=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_body`],o.inpage=100,(await ve([i,o],a))?.data?.the_entity?.[`the_entity_${se.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const n=await I();if(!n?.token)return null;const a=n?.token;let i=new G;i.composition=e,i.fullLinkers=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_meta_title`,`the_${k.PAGE_COMP_NAME}_meta_description`,`the_${k.PAGE_COMP_NAME}_meta_keywords`,`the_${k.PAGE_COMP_NAME}_width`,`the_${k.PAGE_COMP_NAME}_type`,`the_${k.PAGE_COMP_NAME}_font_family`,`the_${k.PAGE_COMP_NAME}_font_size`,`the_${k.PAGE_COMP_NAME}_body`],i.inpage=100;let o=new G;return o.fullLinkers=[`the_${k.WIDGET_COMP_NAME}_clean`],o.inpage=100,await ve([i,o],a)}async getPageById(e){return new Promise(async n=>{const a=await I();if(!a?.token)return null;const i=a?.token;let o=new P;o.conceptIds=[e],o.outputFormat=ce,o.selectors=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_meta_title`,`the_${k.PAGE_COMP_NAME}_meta_description`,`the_${k.PAGE_COMP_NAME}_meta_keywords`,`the_${k.PAGE_COMP_NAME}_width`,`the_${k.PAGE_COMP_NAME}_type`,`the_${k.PAGE_COMP_NAME}_font_family`,`the_${k.PAGE_COMP_NAME}_font_size`,`the_${k.PAGE_COMP_NAME}_body`,`the_${k.WIDGET_COMP_NAME}_clean`],o.inpage=100,ge(o,i).subscribe(async s=>{if(s.length)n(s?.[0]);else if(!Array.isArray(s)&&s?.data==null){const r="There is no data.";A.infoMessageToast(r,4),n({error:!0,message:r})}}).catch(s=>{const r=s?.message;A.errorToast(`${r}`,4),n({error:!0,message:r})})})}async updatePageField(e,n,a){const i=await I(),o=`the_${k.PAGE_COMP_NAME}_${e}`;await ue(a,o);const s=await O(a),r=await Z(`${e}`,`${n}`,!1,i.userId,4,999);await q(s,r,e),await D.SyncDataOnline()}async deletePage(e){await Le(e)}}class oi{_pagesService;constructor(){this._pagesService=new Qe}async getPagesListHTML(){window.pageHandler=Wr;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(a=>{let i=a?.data?.[`the_${k.PAGE_COMP_NAME}`],o=i?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,s=i?.[`the_${k.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
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
          `}catch(e){return console.error("error",e),e?.status===401&&Me(),`
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
    `}getEditPageSidebarHTML(e,n,a){return`
      <div id="fs-page-edit-submenu" class="fs-page-edit-submenu">
        <div class="sidebar_submenu_title">
          <h4>${n.name}</h4>
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
              <input data-id="${n.id}" class="form-control" name="title" type="text" placeholder="page title" value="${n.name}" />
            </p>
            <p>
              <label>slug</label>
              <input data-id="${a.id}" class="form-control" name="slug" type="text" placeholder="page slug" value="${a.name}" />
            </p>
          </form>
        </div>
      </div>
    `}}const Zo=(()=>{const t=()=>{document.querySelectorAll("#navBarContainer > span").forEach(s=>{s.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(s=>{s.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(s=>{s.remove()})};return{toggle:i=>{const o=i.target,s=o?.dataset?.id;if(o.classList.contains("activeNavigationIcon")){t();return}if(s){document.querySelectorAll("#navBarContainer > span").forEach(c=>{c.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(c=>{c.classList.remove("navActive")});const d=document.getElementById(s);document.querySelector(`[data-id='${s}']`)?.classList.add("activeNavigationIcon"),d?.classList.add("navActive"),s=="fs-all-pages-list"&&new ta().initPagesSidebar()}},collapseNavbar:i=>{const o=i.target;document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.getElementById(o.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")})},checkForActiveNavigation:()=>{const i=document.querySelector(".activeNavigationIcon");if(i){const o=i.dataset?.id||"";document.getElementById(o)?.classList.remove("navActive")}},resetNavigationBar:t}})();function It(t){return new Promise(e=>{const n=document.createElement("div");n.className="custom-confirm-modal",n.innerHTML=`
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content h-50">
                    <div class="modal-body">
                        <p>${t}</p>
                    </div>
                    <div class="modal-footer p-2 justify-content-between">
                        <button type="button" id="confirm-yes" class="btn btn-primary mx-3">Yes</button>
                        <button type="button" id="confirm-no" class="btn btn-secondary mx-3" data-bs-dismiss="modal">No</button>
                    </div>
                    </div>
                </div>
        `,n.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(n),e(!0)}),n.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(n),e(!1)}),document.body.appendChild(n)})}class R{static staticElement;static previousSelectedStaticElement}function Pt(){const t=document.getElementById("select-box");t.style.display="none"}function Ta(){const t=document.getElementById("select-box");Ze(),t.style.transition="none",$t()}function $t(){const t=R?.staticElement;if(t){const e=t.getBoundingClientRect(),n=e.left,a=e.top,i=document.getElementById("select-box");i.style.display="block",i.style.width=t.offsetWidth+"px",i.style.height=t.offsetHeight+"px",i.style.top=`calc(${a}px)`,i.style.left=`calc(${n}px)`}}function we(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=a=>{a.removeEventListener("click",Ke),a.removeEventListener("mouseenter",gt),a.removeEventListener("mouseleave",Ze)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&n(a)}),e.forEach(a=>{a.classList.contains("fslayout-row")?(a.addEventListener("click",function(i){i.target===a&&(i.preventDefault(),i.stopPropagation(),Ke(i))}),a.addEventListener("mouseenter",gt),a.addEventListener("mouseleave",Ze)):a.classList.contains("fslayout-col")?a.addEventListener("click",function(i){if(i.target===a){i.preventDefault(),i.stopPropagation();const o=a.closest(".fslayout-row");if(o){const s=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(s,"target",{value:o}),Ke(s)}}}):a.closest(".fslayout-col")?(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Ke(i)}),a.addEventListener("mouseenter",gt),a.addEventListener("mouseleave",Ze)):(a.closest(".edited-widget-container")||!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Ke(i)}),a.addEventListener("mouseenter",gt),a.addEventListener("mouseleave",Ze))})}function Xo(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=a=>{a.removeEventListener("click",Ke),a.removeEventListener("mouseenter",gt),a.removeEventListener("mouseleave",Ze)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&n(a)})}class We{static instance;static events=new Map;constructor(){}static getInstance(){return We.instance||(We.instance=new We),We.instance}static subscribe(e,n){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(n)}static publish(e,n){this.events.has(e)&&this.events.get(e).forEach(a=>a(n))}static unsubscribe(e,n){if(this.events.has(e)){const a=this.events.get(e),i=a.indexOf(n);i>-1&&a.splice(i,1)}}}class es extends ro{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=We.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),n=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(n),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),We.subscribe("page:elementClick",a=>{this.handlePageElementClick(a)}),We.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),n=this.buildTree(e);n&&this.treeRoot&&this.treeRoot.appendChild(n)}getHtml(){return""}handlePageElementClick(e){let n=e;for(;n&&!this.treeItems.has(n);)n=n.parentElement;if(n){const a=this.treeItems.get(n);if(a){document.querySelectorAll(".tree-item").forEach(o=>{o.classList.remove("active")}),a.classList.add("active"),a.scrollIntoView({behavior:"smooth",block:"center"});let i=a.closest(".tree-node")?.parentElement;for(;i;){if(i.classList.contains("children")&&i.classList.contains("hidden")){i.classList.remove("hidden");const o=i.previousElementSibling?.querySelector(".toggle-btn");o&&(o.innerHTML="▼")}i=i.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const n=document.createElement("div");n.className="tree-node";const a=document.createElement("div");a.className="tree-item",this.treeItems.set(e,a);const i=e.tagName.toLowerCase(),o=e.id?`#${e.id}`:"",s=Array.from(e.classList).map(l=>`.${l}`).join("");if(e.children.length>0){const l=document.createElement("button");l.className="toggle-btn",l.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',l.onclick=d=>{d.preventDefault(),d.stopPropagation();const u=n.querySelector(".children"),c=u.classList.contains("hidden");u.classList.toggle("hidden"),l.innerHTML=c?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},a.appendChild(l)}s.includes(".added-widget-container")&&a.classList.add("widget-tree-node");const r=document.createElement("div");if(r.classList.add("text-truncate"),r.innerHTML=`
      <span class="element-tag">${i}</span>
      <span class="element-id">${o}</span>
      <span class="element-class">${s}</span>
    `,a.appendChild(r),a.onmouseenter=()=>this.handleHover(e),a.onmouseleave=()=>this.handleHover(null),a.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},n.appendChild(a),e.children.length>0){const l=document.createElement("div");l.className="children hidden",Array.from(e.children).forEach(d=>{if(d instanceof HTMLElement){const u=this.buildTree(d);u&&l.appendChild(u)}}),n.appendChild(l)}return o!=="#widget-details"?n:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const n=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(a=>{this.isAllExpanded?a.classList.remove("hidden"):a.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(a=>{a.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function pe(){const t=document.getElementById("tree-root");t.innerHTML="";const e=f.staticWidgetTree.html,n=document.querySelector(".toggle-all-btn");e?(n.style.display="flex",new es().mount(t)):(n.style.display="none",t.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class Mn{static navbar}function ts(t){return t?.widgetcodeId}async function si(t,e,n=!0,a,i,o=null){console.log("parentWidget",o);let s=new Et;s.html=t.html,s.widgetState={...a},s.widgetType=t.type,s.componentDidMountFunction=t.before_render,s.addEventFunction=t.after_render,s.mountChildWidgetsFunction=t.mount_child,s.customFunctions=t.custom_functions,s.widgetDependenciesData=t.dependency,s.inDevelopment=!0,e.innerHTML="";let r=e;if(n=!1,r&&(await s.mount(r),t.widget=s,t.children.length>0&&s.childWidgetElement?.length>0))for(let l=0;l<t.children?.length;l++){let d=t.children[l];for(let u=0;u<s.childWidgetElement.length;u++){let c=s.childWidgetElement[u];if(d.wrapper===c.id){const g=N.clearDraggedWidget(d),m=await si(g,c,n,s.widgetState,i,s);s.childWidgets.push(m),s.css=s.css+m.css+`#${d.wrapper} { ${d.css} }`,m.dataChange(p=>{let h=p?.type?.characterValue;h&&(s.childrenData[h]=p)})}}}return s}function wn(t,e,n=!1,a,i,o){let s=Date.now();const r=document.createElement("div");if(r.innerHTML=`<div id="wdgtcopy${s}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,n==!1&&e!=0&&e!=null&&e!=null){console.log("beforeElement -->",a),document.getElementById("builder-workarea")===t&&(i="inside");const d=t.parentElement,u=r;if(i==="above")d.insertBefore(u,t);else if(i==="below"){const g=t.nextElementSibling;g?d.insertBefore(u,g):t.parentNode.appendChild(r.firstChild)}else if(i==="inside"){const g=Yn(t,o.clientY);g==null?t.appendChild(u):t.insertBefore(u,g)}return document.getElementById(`wdgtcopy${s}`)?document.getElementById(`wdgtcopy${s}`):t.querySelector(`#wdgtcopy${s}`)}return t}const Re=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],He=["span","a","img","button","input","label","textarea","select"],ns=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],Sa={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...He]},h2:{accepts:[...He]},h3:{accepts:[...He]},h4:{accepts:[...He]},h5:{accepts:[...He]},h6:{accepts:[...He]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...He]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},as=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function Bt(t,e){const n=t.target,a=t.target;let i=null;for(const c of a.children){const g=c.getBoundingClientRect();if(t.pageY<g.top+window.scrollY){i=c;break}}n.classList.remove("dragging-area");const o=is(n,"added-widget-container"),s=t.clientY;let r,l;if(o){let c=function(g,m){const p=g.height,h=m-g.top;return h<p*.25?"above":h>p*.75?"below":"inside"};if(r=o.getBoundingClientRect(),l=c(r,s),l==="inside")return{status:!1,message:"Cannot be dropped inside WIDGET!"}}else r=n.getBoundingClientRect(),l=qt(r,s);const d=e?.data_type||"",u=t?.target?.tagName?.toLowerCase();return Ct.includes(u)&&l==="inside"?{status:!1,message:`${d} cannot be dropped inside ${u} tag.`}:Re.includes(u)&&Sa[u]?.accepts?.length&&!Sa[u]?.accepts?.includes(d)&&l==="inside"?{status:!1,message:`${d} cannot be dropped inside ${u} tag.`}:{status:!0,message:"",elementBelowDrag:i,dropzoneEl:o||n}}function is(t,e){for(;t;){if(t.classList&&t.classList.contains(e))return t;t=t.parentElement}return!1}class ie{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(n=>n.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const n=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${n}`)).slice(0,-1).forEach(i=>i.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(n),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const n=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,n.from-6),n.from)!=="tsccs.")return null;const i=Object.keys(Va).filter(o=>o.startsWith(n.text));return i.length>0?{from:n.from,to:n.to,options:i.map(o=>({label:o,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new oe({doc:"/* Write your code here */",extensions:[Tt,St,Rn(),Yt({activateOnTyping:!0}),go.data.of({autocomplete:this.tsccsCompletions}),Ja(),Ga(po(new wo,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),oe.lineWrapping,ke.tabSize.of(2),ke.allowMultipleSelections.of(!0),Kt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(n=>{if(n.docChanged){const a=n?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=a;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=a;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=a;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=a;break;case"widgetDependencies-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.dependency=a;break;default:const o=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(s=>`${s.slug}-editor-split`===this.editorContainerId);o?.length&&(o[0].code=a)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function ri(t){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",t)try{const n=await at.format(t,{parser:"babel",plugins:[Xt,en],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function os(){const t=new ie("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function li(t,e){const n=document.querySelector('.cm-content[data-language="css"]');if(n.innerHTML="/* Write your CSS here */",e){let a=document.querySelector(".child-widget-style");a||(a=document.createElement("style"),a.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",a)),a.textContent+=e}if(t)try{const i=(n.textContent+t).split("/* Write your CSS here */").join(" ");n.textContent=i;const o=await at.format(i,{parser:"css",plugins:[vo],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});n.textContent=o||"/* Write your CSS here */"}catch(a){console.error("CSS formatting error:",a),n.textContent=t}}async function ci(t){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",t)try{const n=await at.format(t,{parser:"babel",plugins:[Xt,en],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function ss(){const t=new ie("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function me(t){const e=document.querySelector('.cm-content[data-language="html"]'),n=document.getElementById("builder-workarea");if(n?.querySelector("#widget-details")?.remove(),e)try{const i=document.createElement("div");let o=t||n?.innerHTML||"";i.innerHTML=o;const s=i.firstChild;s&&s.nodeType===1&&s.classList.contains("mftsccs-marking-element")&&(o=s.innerHTML),i.innerHTML=o;async function r(d){if(d.dataset.widgetid){const u=await K(Number(d.dataset.widgetid));u&&u.typeCharacter=="the_widget"&&(d.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let u=0;u<d.childNodes.length;u++){const c=d.childNodes[u];c instanceof HTMLElement&&await r(c)}}await r(i),o=i.innerHTML;const l=await at.format(o,{parser:"html",plugins:[bo],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=l||"<!-- Write your HTML here -->"}catch(i){console.error("HTML formatting error:",i),e.textContent=t}else alert("widget html editor not found in dom")}async function rs(t){const e=document.getElementById("widgetTypeValue");e&&(e.value=t||"");const n=document.getElementById("widgetType");n&&(n.value=t||"")}function tn(t){if(!t)return;const e=document.getElementById("builder-workarea"),n=document.createElement("div");n.id="widget-details",n.innerHTML="",n.innerHTML=`
    <button onclick="openDocumentationModal(${t}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(n)}function zn(){const t=document.querySelector(".content-target");t.innerHTML="",t.textContent="Widget Loading..."}function Jn(){return document.querySelectorAll(".content-target")[0]}function Ca(t){const e={past:[],present:t,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(n){e.past.push(e.present),e.present=n,e.future=[]},undo(){if(e.past.length===0)return;const n=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=n,n},redo(){if(e.future.length===0)return;const n=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=n,n}}}class H{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),n=document.getElementById("redo-btn");e?.addEventListener("click",H.undoAction),n?.addEventListener("click",H.redoAction)}static renderActionHistory(){H.actionHistories=Ca(JSON.stringify(f?.staticWidgetTree)),Ca(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:n}=H.actionHistories.getState(),a=document.getElementById("undo-btn"),i=document.getElementById("redo-btn");a&&(a.disabled=!e),i&&(i.disabled=!n)}static async undoAction(){const e=H.actionHistories.undo();e!==void 0&&(Ma(e||""),H.updateButtonStates())}static async redoAction(){const e=H.actionHistories.redo();e!==void 0&&(Ma(e||""),H.updateButtonStates())}static updateActionHistories(){H.actionHistories.push(JSON.stringify(f.staticWidgetTree)),H.updateButtonStates()}}async function ls(){const t=document.getElementById("widget-prompt-modal");t&&t.remove()}async function cs(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function ds(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function us(){const t=document.getElementById("prompt-text");t.addEventListener("input",()=>{t.style.height="auto";const e=Math.min(t.scrollHeight-8,120);t.style.height=`${e}px`,t.style.overflowY=e===120?"auto":"hidden"})}class di{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const n=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],i=((o,s=3)=>{if(o.length<s)return[];const r=new Set;for(;r.size<s;){const l=Math.floor(Math.random()*o.length);r.add(l)}return[...r]})(n,2);this.randomSuggestionEl=i?.map(o=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${n[o]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),us(),setTimeout(()=>{const n=document.querySelector(".aiAssistantTabs"),a=document.querySelectorAll("#aiChatContainer, #prototypeWidget");n.querySelector("button").classList.add("active"),a[0].classList.add("active"),n.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{n.querySelectorAll("button").forEach(r=>r.classList.remove("active")),a.forEach(r=>r.classList.remove("active"));const o=i.dataset.id,s=document.getElementById(o);i.classList.add("active"),s?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=ls,window.minimizeAssistant=cs,window.maximizeAssistant=ds,`
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
            <textarea id="prompt-text" placeholder="Create a widget for..."></textarea>
            <button class="button-send" type="submit">
              <span class="material-symbols-outlined">
                arrow_upward
              </span>
            </button>
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
    `}}async function ms(t){const e=document.getElementById("widget-btn-wrapper");if(e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
            <div class="position-relative" style="z-index: 100;">
              <div class="w-100 d-flex justify-content-center">
                <button
                  id="update-publish-widget-btn"
                  onclick="updateWidget(event, ${t}, true)"
                  class="btn btn-primary btn-sm d-flex align-items-center gap-1"
                  style="border-radius: 0.2rem 0 0 0.2rem; border-right: 1px solid #A2A2A2;"
                  data-widgetid="${t}"
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
                onclick="updateWidget(event, ${t})"
                class="btn btn-primary btn-sm d-flex align-items-center gap-1 mx-1 position-absolute w-100 mt-1 shadow-sm d-none"
                data-widgetid="${t}"
              >
                <span class="material-symbols-outlined">update</span>
                Update Only
              </button>
            </div>
          `;const a=e.querySelector("#updateDropDownArrow"),i=e.querySelector("#update-widget-btn");i&&a&&i.addEventListener("click",()=>{i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),a&&i&&a.addEventListener("click",()=>{i.classList.contains("d-none")?(i.classList.remove("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function gs(){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function ps(){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class ui{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.main.empty?a({changes:{from:i.main.from,insert:"  "},selection:{anchor:i.main.from+2}}):a({changes:{from:i.main.from,to:i.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new oe({doc:"<!-- Write your HTML here -->",extensions:[Tt,St,ho(),Yt(),oe.lineWrapping,ke.tabSize.of(2),ke.allowMultipleSelections.of(!0),oe.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Kt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateHTML(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=bt;class mi{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(a=>a.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const n=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=n,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new oe({doc:"/* Write your JavaScript here */",extensions:[Tt,St,Rn(),Yt(),oe.lineWrapping,ke.tabSize.of(2),ke.allowMultipleSelections.of(!0),oe.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Kt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(async n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateJS(a)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function La(){const t=document.getElementById("codeBlocksContainer"),e=t.querySelectorAll(".sub-tab-btn");if(!t.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const a=document.getElementById("onmount-editor-split");a&&a.classList.add("active")}}async function gi(t){const e=t?.id,n=t?.code,a=t?.slug,i=t?.name,o=document.querySelectorAll(".custom-service-btn"),s=Array.from(o)?.filter(c=>c?.getAttribute("data-subtab")===a),r=document.getElementById("lifecycle"),l=r?.querySelector(".sub-tab-nav");if(!s.length){const c=document.createElement("button");c.classList.add("sub-tab-btn","custom-service-btn"),c.setAttribute("data-subtab",a),c.innerHTML=`
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
    `,l?.appendChild(c);const g=document.createElement("div");g.classList.add("sub-tab-content","custom-editor-content"),g.id=`${a}-editor-split`,g.setAttribute("data-subtab",a),r?.appendChild(g);const m=`${a}-editor-split`;hs(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(c=>{c.addEventListener("click",function(){const g=c.getAttribute("data-subtab"),m=c.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(p=>{p.classList.remove("active")}),c.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${g}"]`)?.classList.add("active")})}),setTimeout(async()=>{const c=document.querySelector(`#${a}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(c&&(c.textContent="/* Write your code here */",n))try{const g=await at.format(n,{parser:"babel",plugins:[Xt,en],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});c.textContent=g}catch(g){console.error("JS formatting error:",g),c.textContent=n}},500)}async function hs(t){await new ie(t).initializeEditor()}async function fs(t,e,n){const a=e.trim().toLocaleLowerCase().split(" ").join("-"),i=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===t);i[0].name=e,i[0].slug=a;const o=document.querySelector(`button[data-subtab=${t}]`);o?.setAttribute("data-subtab",a),o.innerHTML=`
    <span class="service-name">${e}</span>
    <span class="material-symbols-outlined" onclick="toggleDropdown(event, ${n})" title="Options"> more_vert </span>
    <!-- Dropdown Menu -->
    <ul class="dropdown-menu" id="dropdown-menu-${n}">
      <li class="d-flex align-items-center justify-content-between" onclick="openRenameCustomFunction(event, '${a}', ${n})">
        <span>Rename</span>
        <span class="material-symbols-outlined">edit</span>
      </li>
      <li class="d-flex align-items-center justify-content-between delete-icon" onclick="deleteCustomFunction(event, '${a}', ${n})">
        <span>Delete</span>
        <span class="material-symbols-outlined">delete</span>
      </li>
    </ul>
  `;const s=o?.querySelector("span.service-name");s&&(s.innerText=e);const r=document.getElementById(`${t}-editor-split`);r?.setAttribute("data-subtab",a),r.id=`${a}-editor-split`,await new ie(`${a}-editor-split`).initializeEditor();const d=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===a);gi(d?.[0]),be("rename-custom-function-modal")}class ys{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,n){this.customFunctionId=n,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const a=document.getElementById("rename-custom-function-modal").querySelector("form");a&&a.addEventListener("submit",i=>{i.preventDefault();const o=a.customFunctionName.value.trim(),s=/^[_A-Za-z][_A-Za-z ]*$/.test(o),r=document.getElementById("service-rename-error");s?(r.textContent="",r.classList.add("d-none"),fs(this.currentCustomFunctionSlug,o,this.customFunctionId)):(r.classList.remove("d-none"),r.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
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
    `}}const nn="unsaved_widget";async function ws(){if(Qn())return;const e=bs(),n={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},a=JSON.stringify(n),i=new Blob([a]).size,s=4.5*1024*1024-e;if(i<=s)try{localStorage.setItem(nn,a),Gn("save-widget")}catch(r){console.error("Error saving to localStorage:",r)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),an()}function vs(t){return new Blob([t]).size}function bs(){let t=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const n=localStorage.getItem(e);t+=vs(e+n)}return t}async function an(){localStorage.removeItem(nn),dt()}const vn=async t=>{if(Qn())return;t?.preventDefault();const n=localStorage.getItem(nn);if(n){const a=JSON.parse(n);f.widgetTree=a?.widgetTree;const i=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,o=new URLSearchParams(window.location.search).get("widget-id");i===Number(o)?(i||N.enableWidgetButtons(),await st(),H.updateActionHistories(),A.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},Gn=async(t="")=>{if(Qn())return;const n=document.querySelector("#widget-properties .row"),a=document.getElementById("btn-draft-widget"),i=localStorage.getItem(nn),o=JSON.parse(i),s=o?.widgetTree?.origin||o?.widgetTree?.widgetId,r=new URLSearchParams(window.location.search).get("widget-id");if(i&&!a){if(s!==Number(r)){dt();return}const l=document.createElement("div");l.id="draft-widget",l.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),l.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,n?.appendChild(l);const d=document.getElementById("btn-draft-widget");d?.removeEventListener("click",u=>vn(u)),d?.addEventListener("click",u=>vn(u)),s===0&&!t&&setTimeout(()=>{vn()},0)}else i&&a?(s!==Number(r)||s===Number(r)&&!t)&&dt():!i&&a&&dt()};function dt(){document.getElementById("draft-widget")?.remove()}function Qn(){const t=window.location.href,n=new URL(t).searchParams.get("page-id");return n||""}const pt=(()=>{function t(d){const u=d.target,c=document.getElementById("codeBlocksContainer");c&&c.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}function e(d){const u=d.target,c=document.getElementById("codeBlocksContainer");c&&c.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}async function n(d){N.enableWidgetButtons();try{await st(),ws(),H.updateActionHistories(),A.infoMessageToast(d)}catch(u){A.errorToast("widget synchronization failed"),console.error(u)}}const a=()=>{const d=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),d.style.display="flex";const g=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});g&&g.dispatchEvent(m),ht.enableHeader()},i=()=>{const d=document.getElementById("widgetButtionCodeViewWrapper"),u=document.createElement("div");u.classList.add("codeSplitViewButton");const c=document.createElement("div");c.appendChild(u);const g=document.createElement("div");g.id="codeBlocksContainer",g.innerHTML=`
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
`,d?.appendChild(g),document.querySelectorAll(".tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(C=>C.classList.remove("active")),y.classList.add("active"),document.getElementById(E)?.classList.add("active")})}),g.querySelectorAll(".sub-tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-subtab"),C=y.closest(".tab-content");C?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(b=>{b.classList.remove("active")}),y.classList.add("active"),C?.querySelector(`.sub-tab-content[data-subtab="${E}"]`)?.classList.add("active")})});const h=document.querySelector(".fullscreenicon"),w=document.querySelector("#widgetButtionCodeViewWrapper");h?.addEventListener("click",()=>{w.classList.contains("fullscreen")?ht.enableHeader():ht.disableHeader(),w.classList.toggle("fullscreen")});const _=document.querySelector(".close-btn");_&&_.addEventListener("click",a),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>n("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(c.firstChild),setTimeout(()=>{const y=document.querySelector(".codeSplitViewButton");y&&(y.removeEventListener("click",t),y.addEventListener("click",t));const E=document.getElementById("designSplitViewButton");E&&(E.removeEventListener("click",e),E.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",y=>o(y))};function o(d){d.stopPropagation();try{const u="add-custom-service-dialog";document.getElementById(u)?.remove();const g=document.createElement("dialog");g.setAttribute("id",u),g.classList.add("col-md-3"),g.innerHTML=`
        <h4>New Service</h4>
        <form method="dialog" class="mt-3">
          <div class="mb-3">
            <label for="serviceName" class="form-label">Service Name</label>
            <input type="text" class="form-control" autocomplete="
            " name="serviceName" id="serviceName" value="" placeholder="e.g. validation service">
          </div>
          <div class="d-none alert alert-danger" id="service-name-error"></div>
  
          <div class="text-end">
            <button class="btn btn-secondary" onclick="closeModal('${u}')" type="button">Cancel</button>
            <button type="submit" class="btn btn-info">Save Now</button>
          </div>
        </form>
      `;const m=g.querySelector("form");return m&&m.addEventListener("submit",p=>{p.preventDefault();const h=m?.serviceName?.value.trim(),w=/^[_A-Za-z][_A-Za-z ]*$/.test(h),_=document.getElementById("service-name-error");w?(_.textContent="",_.classList.add("d-none"),l(p)):(_.classList.remove("d-none"),_.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(g),de(u),"OPENED"}catch(u){console.error("Failed to rename widget:",u)}}async function s(d,u,c){console.log("openRenameCustomFunction -->",d,u,c),new ys(u,c),await de("rename-custom-function-modal")}async function r(d,u,c){d.preventDefault();try{if(confirm("Do you want to delete the Service?")){A.infoMessageToast("Deleting the service...",0),c&&await Le(Number(c));const m=`button[data-subtab=${u}]`;document.querySelector(m)?.remove(),document.getElementById(`${u}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(E=>E.slug!==u);const w=document.getElementById("codeBlocksContainer");return w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(g){A.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",g)}}async function l(d){d.preventDefault();const u=d.target,g=new FormData(u).get("serviceName");let m=g?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const p=document.getElementById("lifecycle"),h=p?.querySelector("div.sub-tab-nav"),w=document.getElementById("codeBlocksContainer");w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active");const T=document.createElement("button");T.classList.add("sub-tab-btn","custom-service-btn","active"),T.setAttribute("data-subtab",m),T.innerHTML=`
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
    `,h.appendChild(T);const v=document.createElement("div");v.classList.add("sub-tab-content","custom-editor-content","active"),v.setAttribute("data-subtab",m),v.setAttribute("id",`${m}-editor-split`),p.appendChild(v),await new ie(`${m}-editor-split`).initializeEditor();const E={name:g,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(E),document.querySelectorAll(".tab-btn").forEach(S=>{S.addEventListener("click",function(){const W=S.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(x=>x.classList.remove("active")),S.classList.add("active"),document.getElementById(W)?.classList.add("active")})}),(w?.querySelectorAll(".sub-tab-btn")).forEach(S=>{S.addEventListener("click",function(){const W=S.getAttribute("data-subtab"),x=S.closest(".tab-content");x?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(M=>{M.classList.remove("active")}),S.classList.add("active"),x?.querySelector(`.sub-tab-content[data-subtab="${W}"]`)?.classList.add("active")})}),be("add-custom-service-dialog")}return{initializeCodeBlock:i,closeCodeView:a,synchronizeWidget:n,openRenameCustomFunction:s,deleteCustomFunction:r}})();async function _s(){await Gn();const t=document.getElementById("select-box");if(t.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(S=>{S.remove()}),document.querySelectorAll(".custom-editor-content").forEach(S=>{S.remove()});const E=document.getElementById("codeBlocksContainer"),C=E?.querySelectorAll(".sub-tab-btn");E?.querySelector(".sub-tab-btn.active")||(C?.[0]?.classList.add("active"),E?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),H.renderActionHistory(),H.updateActionHistories(),hn(f.staticWidgetTree),document.head.querySelectorAll("link.vde-css")?.forEach(v=>v.remove()),pe();const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const i=document.getElementById("widget-builder");i.textContent="Widget Builder Panel",i.setAttribute("title","Widget Builder Panel"),N.disableWidgetButtons(),await new Di().initializeEditor(),await new mi().initializeEditor(),await new ie("onmount-editor-split").initializeEditor(),await new ie("onupdate-editor-split").initializeEditor(),await new ie("addevents-editor-split").initializeEditor(),await new ie("mountchildwidgets-editor-split").initializeEditor(),await new ui().initializeEditor(),await new ie("widgetDependencies-editor-split").initializeEditor();const m=document.getElementById("widgetNameValue");m.value="";const p=document.getElementById("widgetTypeValue");p&&(p.value="");const h=document.getElementById("widgetType");h&&(h.value=""),document.getElementById("widget-version").classList.add("d-none");const _=document.getElementById("element-attributes");_.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,ma(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function Es(){const t=new lo;f.widgetTree=t,pt.synchronizeWidget("Workspace Cleared")}let $e="",jt="";async function Aa(t){try{const n=(await I())?.token,a=await fetch(`${z.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)});if(!a.ok){const d=await a?.text(),u=JSON.parse(d);throw A.errorToast(u.message),console.error(`API Error (${a.status}):`,d),Nt(a.statusText,"error"),new Error(`API request failed with status ${a.status}`)}const i=a.body.getReader(),o=new TextDecoder("utf-8");let s="",r=null;for(;;){const{value:d,done:u}=await i.read();if(u)break;s+=o.decode(d,{stream:!0});const c=s.split(`

`);for(let g=0;g<c.length-1;g++){const m=c[g].trim();if(m.startsWith("data:")){const p=m?.slice(6).trim();try{const h=JSON.parse(p);if(h.status==="responding"&&await Ss(h.message_str),h.status==="success"&&(r=h),h.status==="error")throw A.errorToast(h.message?.[0]||"AI Error"),new Error(h.message?.[0])}catch(h){console.warn("Stream parse error:",h)}}}s=c[c.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),r}catch(e){return console.error(e),null}}async function Ts(t){await Oe(t),f.resetWidgetTree(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new di("");const a=document.getElementById("prompt-text");$e="",a?.addEventListener("keydown",function(r){if(r.key==="Enter"&&!r.shiftKey){r.preventDefault();const l={text_input:a?.value,chat_id:"",widget_type:"",stream:!0};$e&&(l.tag="followup",l.chat_id=$e,l.widget_type=jt),wt(l)}}),document.querySelector(".button-send").addEventListener("click",function(r){r.preventDefault();const l={text_input:a?.value,chat_id:"",widget_type:"",stream:!0};$e&&(l.tag="followup",l.chat_id=$e,l.widget_type=jt),wt(l)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(r=>{r?.addEventListener("click",function(l){l.preventDefault(),a.value=r?.innerText})})}async function wt(t){if(t.text_input){pi(t.text_input),Cs("Assistant is working");const e=await Aa(t);if(Ls("prompt-loader"),!e)return;$e=e?.data?.chat_id,jt=e?.data?.widget_type;const n=e?.message;if(f.staticWidgetTree.assistant={input:e?.data?.user_prompt,id:$e,type:jt},e?.status=="error")A.errorToast(n);else{if(t.widget_type!=="list"){t.widget_type==="form"&&hi($e);const o=new Function("tsccs",e.data.data_structure_prototype)(Va);let s=document.getElementById("prototypeWidget");je(z.visual_prototype_widget,s,{prototype:o}).then(r=>{r.dataChange(async l=>{const d={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:l,type:"application/JSON",stream:!0};try{const u=await Aa(d);await In(u)}catch(u){throw u}})})}await Nt(n);const a=document.createElement("button");a.classList.add("clearWorkspaceButton"),a.textContent="Clear Workspace",a.classList.add("btn","btn-danger"),a.addEventListener("click",()=>{Es(),a.remove()}),await Nt(a),zn(),await In(e)}}}async function Nt(t,e){const n=document.querySelector(".chat-content"),a=document.createElement("div");if(a.classList.add("message","message-bot"),t instanceof HTMLButtonElement){const i=document.querySelector(".clearWorkspaceButton");i&&i.remove(),a.appendChild(t)}else e==="error"&&a.classList.add("text-danger","my-0","text-center"),a.innerText=t;n?.scrollTo({top:n.scrollHeight,behavior:"smooth"}),n?.insertAdjacentElement("beforeend",a)}async function Ss(t,e){const n=document.getElementById("response-status");if(n)n.innerHTML=t;else{const a=document.querySelector(".chat-content"),i=document.createElement("div");i.id="response-status",i.classList.add("message","message-bot"),i.innerHTML=t,a?.insertAdjacentElement("beforeend",i),a?.scrollTo({top:a.scrollHeight,behavior:"smooth"})}}function pi(t){const e=document.getElementById("default-message"),n=document.querySelector(".chat-content"),a=document.createElement("div");a.classList.add("message","message-user"),a.innerText=t,n?.insertAdjacentElement("beforeend",a),e?.remove();const i=document.getElementById("prompt-text");i.value="",i.style.height="44px"}function Cs(t){As("prompt-form");const e=document.getElementById("prompt-content"),n=document.createElement("div");n.id="prompt-loader",n.textContent=t,e?.insertAdjacentElement("beforeend",n)}function Ls(t){document.getElementById(t)?.remove(),Ws("prompt-form")}function As(t){const e=document.getElementById(t);for(let n of e.elements)n.disabled=!0}function Ws(t){const e=document.getElementById(t);for(let n of e.elements)n.disabled=!1}async function In(t){const e=t?.data?.ui?.html||"",n=t?.data?.ui?.css||"",a=t?.data?.ui?.js||"",i=t?.data?.before_render||"",o=t?.data?.after_render||"",s={html:e,css:n,js:a,before_render:i,after_render:o,assistant:{id:t?.data?.chat_id,input:t?.data?.user_prompt,type:t?.data?.widget_type}};await xs(s)}async function xs(t){f.staticWidgetTree.html=t.html,f.staticWidgetTree.css=t.css,f.staticWidgetTree.js=t.js,f.staticWidgetTree.before_render=t.before_render,f.staticWidgetTree.after_render=t.after_render,f.staticWidgetTree.assistant=t.assistant;const e=f.staticWidgetTree,n=document.getElementById("builder-workarea");n.innerHTML="";const a=await si(e,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await X(e,!1,a),H.renderActionHistory(),H.updateActionHistories(),pe(),we()}async function hi(t){document.getElementById("prompt-suggestion")?.remove();const n={text_input:"create a list widget for it",chat_id:t,widget_type:"list",stream:!0},a=document.createElement("div");a.id="prompt-suggestion",a.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",a),document.getElementById("request-list-widget").addEventListener("click",async s=>{s.preventDefault(),wt(n),gs(),ps()})}async function ks(t){new di(t?.id),pi(t?.input),await Nt("Widget Generated Successfully!!"),t.type==="form"&&hi(t?.id);const e=document.getElementById("prompt-text"),n={text_input:e?.value,chat_id:t?.id||"",widget_type:t?.type||"",tag:t?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(i){i.key==="Enter"&&(i.shiftKey||(i.preventDefault(),n.text_input=e?.value,wt(n)))}),document.querySelector(".button-send").addEventListener("click",function(i){i.preventDefault(),n.text_input=e?.value,wt(n)})}async function Ms(t){const e=document.querySelector("#widgetDependencies-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");e.textContent="/* Write your code here */";try{const a=t?.split("/* Write your code here */")?.join(" ");if(a){const i=await at.format(a,{parser:"babel",plugins:[Xt,en],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=i||"/* Write your code here */"}}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function X(t,e,n,a,i){rs(t?.type),Ms(t?.dependency);const o=e?"":t?.css,s=e?`div[data-widgetid="${t.id}"] {${t.css}}
${n?.css}`:n?.css;if(await li(o,s),me(t?.html),await ri(t?.after_render),await ci(t?.before_render),t?.custom_functions?.length){const r=document.querySelectorAll(".custom-service-btn"),l=Array.from(r)?.map(c=>c.getAttribute("data-subtab")??""),d=t.custom_functions?.map(c=>c.slug);(l?.filter(c=>!d.includes(c))).forEach(c=>{const g=document.querySelector(`.custom-service-btn[data-subtab="${c}"]`);g&&g.remove(),document.getElementById(`${c}-editor-split`)?.remove()}),La(),t.custom_functions?.forEach(c=>{gi(c)})}else document.querySelectorAll(".custom-service-btn").forEach(d=>{d.remove()}),document.querySelectorAll(".custom-editor-content").forEach(d=>{d.remove()}),La();(a||i)&&tn(t?.origin?t?.origin:t?.widgetId),a&&t?.assistant?.id&&ks(t?.assistant)}const Pn="drop-indicator";function fi(){let t=document.querySelector(`.${Pn}`);return t||(t=document.createElement("div"),t.className=Pn,document.body.appendChild(t)),t}function Is(t,e){const n=fi(),a=t.getBoundingClientRect();e==="top"?n.style.top=`${a.top-5}px`:e==="bottom"&&(n.style.top=`${a.bottom-5}px`),n.style.left=`${a.left}px`,n.style.width=`${a.width}px`,n.style.opacity="1",n.style.transform="scaleY(1)"}function Ps(){document.querySelectorAll(`.${Pn}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function $s(t,e,n){if(e.length===0)return{element:n,position:"top"};const a=t.clientY;let i=e[0],o=Math.abs(i.getBoundingClientRect().top-a);Math.abs(i.getBoundingClientRect().bottom-a);for(const d of e){const u=d.getBoundingClientRect(),c=Math.abs(u.top-a);Math.abs(u.bottom-a),c<o&&(i=d,o=c)}const s=i.getBoundingClientRect(),r=s.top+s.height/2,l=a<r?"top":"bottom";return{element:i,position:l}}async function tt(t){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(a=>{a.remove()});const n=document.querySelectorAll("script.vde-js");if(n?.length&&n?.forEach(a=>{a.remove()}),await hn(t),t?.children?.length)for(const a of t?.children){const i=a?.library;i?.css?.length&&i?.css?.forEach(o=>{const s=o?.url,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r)}),i?.js.length&&i?.js?.forEach(async o=>{await new Promise((s,r)=>{const l=o?.url,d=document.createElement("script");d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{s()},d.onerror=u=>{console.error("Failed to load script:",l,u),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(d)})})}}let Y=null,F;function on(){const t=document.querySelector(".content-target > .mftsccs-marking-element");if(t){const e=document.querySelector(".content-target");Te.fixContentTargetHeight(e,t)}}function Bs(t){Y=t.target;let e={data_type:t.target.getAttribute("data-type"),data_default:t.target.getAttribute("data-default"),data_void:t.target.getAttribute("data-void"),data_text:t.target.getAttribute("data-text"),elementId:t.target.getAttribute("data-elementId"),dataId:t.target.id,imageUrl:t.target.imageUrl,displayType:t.target.displayType};t.dataTransfer.setData("text",JSON.stringify(e)),t.dataTransfer.setData("id",t.target.id),t.dataTransfer.effectAllowed="move"}async function js(t){t.stopPropagation();const e={widgetcodeId:t.target.getAttribute("data-widgetId"),sourceElementId:t.target.id,className:t.target.className,imageUrl:t.target.imageUrl,displayType:t.target.displayType,type:t.target.Type};t.dataTransfer.setData("text",JSON.stringify(e)),t.dataTransfer.effectAllowed="move"}function Ns(t){t.preventDefault(),t.stopPropagation(),t.target.classList.add("dragging-area"),Lt.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",Xo()}function Ds(t){t.preventDefault(),t.stopPropagation(),t.target.classList.remove("dragging-area")}function Hs(t){t.preventDefault(),t.stopPropagation(),(!Y||!(t.currentTarget instanceof HTMLElement))&&(Y=t?.target);const e=t.target,n=Array.from(e.children).filter(i=>i!==Y);fi();const a=$s(t,n,e);F=a,Is(a.element,a.position)}function qs(){N.checkContent()?N.enableWidgetButtons():N.disableWidgetButtons()}async function Os(t){const e=await sn(t);Y=null,Ps(),H.updateActionHistories(),Lt.collapseNavbar(),qs(),on(),pe(),e&&(me(),tn(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),we()}function Dt(t,e){return Array.isArray(t?.children)&&(t.children=t?.children.filter(n=>n?.wrapper!==e),t.children.forEach(n=>Dt(n,e))),t}function Ue(t,e){let n;return Array.isArray(t?.children)&&(n=t?.children.filter(a=>a?.wrapper===e),t.children.forEach(a=>Ue(a,e))),n?.[0]}async function Fs(t){t.preventDefault(),t.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(c=>{const g=document.getElementById(`${c}-content`);if(g&&g.style.display==="block"){const m={target:g.previousElementSibling};bt(m,`${c}-content`)}});const n=document.getElementById("element-attributes");if(n&&n.style.display==="block"){const c={target:document.querySelector("#icon-attribute")};bt(c,"element-attributes")}const a=R.staticElement,i=a?.parentElement,o=i?.parentElement,s=o?.dataset?.widgetid,r=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container"),l=a.querySelectorAll(".added-widget-container");if(a?.classList?.contains("added-widget-container")){const c=a?.id;Dt(f?.staticWidgetTree,c)}else l.length&&l.forEach(c=>{const g=c?.id;Dt(f?.staticWidgetTree,g)});if(r){const c=r.id;if(a?.remove(),R.staticElement.remove(),Pt(),a?.classList?.contains("added-widget-container")){const g=Ue(f?.staticWidgetTree,c),m=r.querySelector(".mftsccs-marking-element");g.html=m?.innerHTML,X(g)}else{const m=document.getElementById(c).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,X(f.selectedStaticWidgetTreeInfo.widgetTree)}pe(),H.updateActionHistories();return}i?.classList.contains("mftsccs-marking-element")&&i.children.length===1&&i?.remove(),s&&(o?.children?.length||o?.remove()),a?.remove(),R.staticElement.remove(),Pt();const d=await Xe();return f.staticWidgetTree.html=d,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},Dl(),X(f?.staticWidgetTree),pe(),H.updateActionHistories(),N.checkContent()||(N.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}async function Vs(t){return"drag"}async function Rs(t){return t.dataTransfer.setData("text",t.target.id),"start drag"}async function Us(t){console.log("dragEndWidgetElement event ->",t)}async function zs(t){return t.preventDefault(),t.stopPropagation(),"dragOverWidgetElement"}async function Js(t){sn(t),me()}let Ht=null;async function yi(t,e){if(t.preventDefault(),t.stopPropagation(),!Y)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let a=t.target;if(!a.classList.contains("mftsccs-marking-element")&&!a.classList.contains("fslayout-col")&&a.id!=="builder-workarea"){const l=document.getElementById("builder-workarea"),d=a.closest(".mftsccs-marking-element"),u=a.closest(".fslayout-col");a=d||u||l}if((Y.contains(a)||Y===a)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),a=document.getElementById("builder-workarea")),!a)return console.error("Invalid dropzone"),!1;a?.classList.remove("dragging-area");let i=Bt(t,e);if(!i.status)return alert(i.message),Y=null,!1;const o=e.dataType||e.type||e.data_type,s=o==="photo"||o==="Image"||o==="img",r=o==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(s){let l,d=!1;if(Y&&Y.tagName&&Y.tagName.toLowerCase()==="img"){if(d=!0,l=Y,l.parentElement===a&&console.log("Image is already in this dropzone, just repositioning"),!(l instanceof Node))return console.error("draggedItem is not a valid DOM node:",l),Y=null,!1;(!l.hasAttribute("style")||!l.style.width)&&l.setAttribute("style","width: 200px;")}else{const p=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(a.querySelectorAll(`img[src="${p}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),Y=null,!1;l=document.createElement("img"),l.setAttribute("src",p),l.setAttribute("style","width: 200px;")}let u=Te.generateUUID();l.setAttribute("element-info-id",u);const c=a.classList.contains("file-item")&&a.classList.contains("photo-file")&&a.classList.contains("dragging");let g=l;if(c){const p=document.createElement("div");p.appendChild(l),g=p}try{if(d){const p=c&&l.parentElement?.parentElement||l.parentElement,h=c?l.parentElement:l;p&&p!==a&&h&&p.removeChild(h)}F?.position==="top"&&a?.children?.length&&F?.element?a.contains(F.element)&&!g.contains(F.element)&&g!==F.element?a.insertBefore(g,F.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),a.appendChild(g)):F?.position==="bottom"&&F?.element?a.contains(F.element)&&!g.contains(F.element)&&g!==F.element?F.element.insertAdjacentElement("afterend",g):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),a.appendChild(g)):a.appendChild(g)}catch(p){console.error("Error positioning element:",p.message);try{a.appendChild(g)}catch(h){return console.error("Cannot append element:",h),Y=null,!1}}l.removeAttribute("element-info-id");const m=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(m){const p=m.id,h=Ue(f?.staticWidgetTree,p),w=m.querySelector(".mftsccs-marking-element");return w&&(h.html=w.innerHTML,await X(h)),Y=null,!1}return Gs(),Y=null,!0}else if(r){let l=Bt(t,e);if(!l.status)return alert(l.message),Y=null,!1;if(e.sourceElementId){const v=e.sourceElementId||e.fileId;console.log("sourceElement ->",v)}let d=e.widget_id;a.classList.remove("dragging-area");const u=document.createElement("div");u.classList.add("wb-initial-empty"),u.style.display="block",u.style.marginBottom="10px",u.setAttribute("data-widget-id",d);const c=Te.generateUUID();u.id=`widget-${c}`;const g=await I();let m=a.classList.contains("publicWidgetRouter"),p=await le(d);if(!m){const v=await Se(d.id,g.token);p=await le(v?v.widgetId:Number(d))}p?.children?.length&&await rn(p);const h=N.clearDraggedWidget(p),w=await Ce(h,u);h.wrapper=u.id;try{F?.position==="top"&&a?.children?.length&&F?.element?a.contains(F.element)&&!u.contains(F.element)&&u!==F.element?a.insertBefore(u,F.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),a.appendChild(u)):F?.position==="bottom"&&F?.element&&a.contains(F.element)&&!u.contains(F.element)&&u!==F.element?F.element.insertAdjacentElement("afterend",u):a.appendChild(u)}catch(v){console.error("Error positioning widget container:",v.message);try{a.appendChild(u)}catch(y){return console.error("Cannot append widget container:",y),Y=null,!1}}const _=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(_){const v=_.id;Ue(f?.staticWidgetTree,v).children.push(h);const C=document.getElementById(v).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=C?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=C?.style.cssText,await X(f.selectedStaticWidgetTreeInfo.widgetTree),Y=null,!1}const L=await vt();f.staticWidgetTree.html=L,f.staticWidgetTree?.children?.push(h);const T=f.widgetTree.children.indexOf(h);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[T],isChildWidget:!0,childWidgetIndex:T},await X(h,!1,w),N.enableWidgetButtons(),Y=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),Y=null,!1}function Gs(){document.querySelectorAll(".mftsccs-marking-element img").forEach(t=>{t.setAttribute("draggable","true"),t.addEventListener("dragstart",e=>{e.stopPropagation(),Ht=Date.now()}),t.addEventListener("dragend",e=>{e.stopPropagation(),setTimeout(()=>{Ht=null},100)})})}function Qs(){Ht=null,Y=null,console.log("dragStartTime",Ht)}async function sn(t,e=!1,n,a){if(!t&&e&&n&&a){const l=await le(Number(n)),d=wn(a,n,!1,null);let u=await Ce(l,d);l.wrapper=d?.id;const c=await Xe();f.staticWidgetTree.html=c,f.staticWidgetTree?.children?.push(l),X(l,!0,u);return}t.preventDefault(),t.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let o=t.dataTransfer.getData("text");if((l=>{try{return JSON.parse(l),!0}catch{return!1}})(o))if(Object.keys(JSON.parse(o)).includes("widgetcodeId")){const l=JSON.parse(o);let d=Bt(t,l);const u=l.className.split(" ");if(!d.status){alert(d.message);return}const c=JSON.parse(o);if(c.sourceElementId){const W=document.getElementById(c.sourceElementId.toString());if(W){t.target.insertBefore(W,d.elementBelowDrag);return}}let g=ts(c),m=d?.dropzoneEl;m.classList.remove("dragging-area");const p=await I();let h=!1;u.includes("publicWidgetRouter")&&(h=!0);let w=null,_=null;const L=t.clientY,T=m.getBoundingClientRect(),v=qt(T,L);if(h){w=await le(Number(g)),_=wn(m,g,!1,d.elementBelowDrag,v,t);const W=document.getElementById("widgetNameValue");W&&w?.name&&(W.value=w?.name);const x=document.getElementById("widget-builder");x&&w?.name&&(x.textContent="Widget Builder Panel: "+w?.name)}else{const W=await Se(g,p.token);w=await le(W?W.widgetId:Number(g));const x=document.getElementById("widgetNameValue");x&&w?.name&&(x.value=w?.name);const M=document.getElementById("widget-builder");M&&w?.name&&(M.textContent="Widget Builder Panel: "+w?.name),w?.children?.length&&await rn(w),_=wn(m,W?W.widgetId:g,!1,d.elementBelowDrag,v,t)}const y=N.clearDraggedWidget(w);let E=await Ce(y,_);y.wrapper=_?.id;const C=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(C){const W=C.id;Ue(f?.staticWidgetTree,W).children.push(y);const $=document.getElementById(W).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=$?.innerHTML,await tt(f.selectedStaticWidgetTreeInfo.widgetTree),X(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const b=await Xe();f.staticWidgetTree.html=b,f.staticWidgetTree?.children?.push(y);const S=f.widgetTree.children.indexOf(y);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[S],isChildWidget:!0,childWidgetIndex:S},await tt(y),X(y,!1,E),N.enableWidgetButtons()}else{let l=function(w,_){document.getElementById("builder-workarea")===w&&(_="inside");let T=Te.generateUUID();const v=jl(T,d),y=document.createElement("div");y.innerHTML=v;const E=y.firstChild,C=w.parentElement;if(_==="above")C.insertBefore(E,w);else if(_==="below"){const S=w.nextElementSibling;S?C.insertBefore(E,S):C.appendChild(E)}else if(_==="inside"){const S=Yn(w,t.clientY);S==null?w.appendChild(E):w.insertBefore(E,S)}t.target.classList.remove("dragging-area");let b=E;d.data_type=="layout"?b.querySelectorAll(".fslayout-col").forEach(W=>{W.classList.add("wb-initial-empty")}):(b.classList.add("wb-initial-empty"),d?.data_type==="img"&&(b?.setAttribute("src","/images/img-placeholder.jpg"),b?.setAttribute("style","width: 200px;"))),b.removeAttribute("element-info-id"),d?.data_type==="img"&&(b?.setAttribute("src","/images/img-placeholder.jpg"),b?.setAttribute("style","width: 200px;"))};const d=JSON.parse(o);let u=Bt(t,d);const c=u?.dropzoneEl;if(u.status){const w=t.clientY,_=c.getBoundingClientRect(),L=qt(_,w);l(c,L)}else alert(u.message);const g=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(g){const w=g.id,_=Ue(f?.staticWidgetTree,w),L=g.querySelector(".mftsccs-marking-element");return _.html=L?.innerHTML,await X(_),t.dataTransfer.clearData(),!1}const m=document.querySelector(".content-target"),h=(await Ae(m,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=h;try{t.dataTransfer.clearData()}catch(w){console.error("error in clearing data",w.message)}return!0}else{const l=R.staticElement,d=t.target;d.classList.remove("dragging-area"),F?.position==="top"&&d?.children?.length?d.insertBefore(l,F?.element):F?.position==="bottom"?F?.element?.insertAdjacentElement("afterend",l):d.appendChild(l),Pt();const u=await Xe();f.staticWidgetTree.html=u}}function Yn(t,e){return Array.from(t.children)?.reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function qt(t,e){const n=t.height,a=e-t.top;return a<n*.25?"above":a>n*.75?"below":"inside"}function Ys(t){const o=new DOMParser().parseFromString(t,"text/html").body.querySelector("div")?.id,r=document.getElementById(o)?.parentElement?.closest(".added-widget-container"),l=r?.id,d=r?.querySelectorAll(".widget_container_disabled");return d?.length&&d?.forEach(u=>{const c=Te.generateUUID();u.id=`wdgt${c}`}),l?.toString()}async function rn(t){return Array.isArray(t.children)&&t.children.forEach(e=>{wi(e,t),e.children.length&&rn(e)}),t}function wi(t,e){const n=t.wrapper,o=new DOMParser().parseFromString(e?.html,"text/html").body,s=o.querySelector(`#${n}`);if(!s)return t;const l=`wdgtcopy${Te.generateUUID()}`;return s.id=l,t.wrapper=l,e.html=o.innerHTML.toString(),t}const Ks=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:on,dragElement:Vs,dragEndWidgetElement:Us,dragOverWidgetElement:zs,dragStartWidgetElement:Rs,dropElement:sn,dropFolderElement:yi,dropWidgetElement:Js,findChildByWrapper:Ue,getChildWrapperId:Ys,getChildrenWrapperId:wi,getDragAfterElement:Yn,getDropType:qt,onDragEnter:Ns,onDragLeave:Ds,onDragOver:Hs,onDragStart:Bs,onDrop:Os,onWidgetDragStart:js,removeChildByWrapper:Dt,removeElement:Fs,resetDragState:Qs,updateAllChildWidgets:rn},Symbol.toStringTag,{value:"Module"})),Zs=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],Kn=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class vi{constructor(){}async getLayoutListHTML(){return Kn.map(n=>`
        <li id="fslayout-${n.id}" class="fslayout-icon"
            data-elementid="${n.id}" 
            data-type="${n.type}" 
            data-void="on" 
            data-text="${n.name}" 
            draggable="true" 
            ondragstart="_dragService.onDragStart(event)" 
        >
          <a 
            class="fslayout-icon-link" draggable="false" 
          >
           <img src="/images/${n.icon}" />
          </a>
        </li>
      `).join("")}async getTemplateLayoutsHTML(){const e=await wl();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const n=await I(),a=n?.entityId===101651686||n?.entityId===101279491;return e.map(i=>i.id?`
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
      `:"").join("")}}async function Se(t,e){let n=new G;n.composition=t,n.fullLinkers=["the_widget_recent","the_widget_latest"],n.inpage=100;let a=new G;a.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],a.inpage=100;const o=await ve([n,a],e),r=await Be(t,"the_widget_recent"),l=o?.data?.the_widget?.the_widget_recent||o?.data?.the_widget?.the_widget_latest||[],d=o?.data?.the_widget?.the_widget_latest||null;if(l.length){const u=l[0],c=u?.data.the_widget.the_widget_name?.[0].data.the_name,g=u?.data.the_widget.the_widget_html?.[0].data.the_html,m=u?.id,p=u?.data.the_widget.the_widget_css?.[0].data.the_css,h=u?.data.the_widget.the_widget_js?.[0].data.the_js,w=u?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,_=u?.data.the_widget.the_widget_version?.[0].data.the_version,L=u?.data.the_widget.the_widget_origin?.[0].data.the_origin|t;return{widgetName:c,widgetHTML:g,widgetCSS:p,widgetJS:h,widgetTimestamp:w,widgetVersion:Number(_||d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||d.id,origin:Number(L),connectionIdLatest:r,publishedWidgetVersion:d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const N=(()=>{const t=async()=>{const v=document.getElementById("fslayout-template-container");if(v){v.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const E=await new vi().getTemplateLayoutsHTML();v.innerHTML=E}},e=async()=>{const v=document.getElementById("public-widget-list-container");if(v){const y=await Dn();!y||y.trim()===""?v.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:v.innerHTML=y||""}},n=async()=>{const v=document.getElementById("folder-widget-container");if(v){const y=await yl();!y||y.trim()===""?v.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:v.innerHTML=y||""}},a=async()=>{const v=await Nn();Mn.navbar.setSavedWidgets(v);const y=document.getElementById("saved-widget-list-container");y&&(!v||v.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=v||"")},i=async()=>{const v=await Nn();Mn.navbar.setSavedWidgets(v);const y=document.getElementById("folder-widget-container");y&&(!v||v.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=v||"")},o=async(v,y,E,C,b,S,W)=>{if(C&&!b&&!S||b&&!C&&!S||S&&!W){console.error("creating widget copy argument required.");return}let x=null;x=await le(v.id);let M=null,$=null,B=[],j=0;S||(M=await Se(v.id,E),$=M?.origin?M?.origin:v.id,j=M?.widgetVersion?M?.widgetVersion:0,B=M?.connectionIdLatest?M.connectionIdLatest:null);const U={type:b?b.mainWidgetTypevalue:x.type,after_render:b?b.addeventsScript:x.after_render,before_render:b?b.onmountScript:x.before_render,dependency:b?b.dependency:x.dependency,update:b?b.onupdateScript:x.update,mount_child:b?b.mountchildwidgetsScript:x.mount_child,name:S?W:x?.name,html:S?x.html:b?b.widgetHTMLToUpdate:x.html,clean:b?b.widgetCleanHTMLToUpdate:x?.clean,css:b?b.widgetCSSToUpdate:x?.css?.toString(),js:b?b.widgetJSToUpdate:x?.js?.toString(),timestamp:b?b.widgetTimestampToUpdate:new Date().toISOString(),...!S&&{version:j?j+1:1,origin:$}},ne=await O(x.id);let re=x.root!==0?x.root:x.origin;const ae=await O(re||x.id),ee=await V("widget",y,U);if(b?.assistant?.id){const J=await V("assistant",y,b?.assistant);await q(ee,J,"assistant")}if(b?.library?.css?.length){const J=b?.library?.css;for(let te=0;te<J.length;te++){const rt=await V("css_library",y,J[te]);await q(ee,rt,"s_css_library")}}if(b?.library?.js?.length){const J=b?.library?.js;for(let te=0;te<J.length;te++){const rt=await V("js_library",y,J[te]);await q(ee,rt,"s_js_library")}}if(b?.custom_functions?.length){const J=b?.custom_functions;for(let te=0;te<J.length;te++){const rt=await V("custom_function",y,J[te]);await q(ee,rt,"s_custom_function")}}if(!C&&!b&&S&&x?.children.length&&f.createChildWidget(x.children,ee),await q(ae,ee,"s_copy"),await q(ee,ne,"root"),B&&B.length)for(let J=0;J<B.length;J++)await Pe(B[J].id);return await q(ae,ee,"recent"),ee},s=async v=>{v.stopPropagation();const y=Number(v.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(y){A.infoMessageToast("Deleting your widget from public...",0);const C=await Be(y,"the_public_widget_s_widget",!0);await Pe(C[0].id),await ue(y,"the_widget_description"),await ue(y,"the_widget_thumbnail"),await ue(y,"the_widget_public_name"),await e(),await n(),await a(),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},r=async v=>{v.stopPropagation();const y=prompt("What would you like to name this imported widget?");if(!y||!y.trim())return;const E=Number(v.target.dataset.pubwidid);if(E){A.infoMessageToast("Importing widget...",0);try{const C=document.querySelector(".infoMessageToast"),b=await le(E);f.widgetTree=b,await f.saveWidget(y),await a(),await i(),C?.remove(),A.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}},l=async v=>{v.stopPropagation();const y=Number(v.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(y){A.infoMessageToast("Deleting your widget from templates...",0);const C=await Be(y,"the_template_widget_s_widget",!0);await Pe(C[0].id),await ue(y,"the_widget_template_thumbnail"),await ue(y,"the_widget_template_name"),await t(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},d=()=>document.querySelector(".content-target").innerHTML.trim()!=="",u=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E&&E.classList.remove("disabled")})},c=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E?E.classList.add("disabled"):console.log("button not found",y)})},g=v=>{const y=document.createElement("div");y.innerHTML=v.html;const E=y.querySelectorAll("div[data-elementid]");return E?.length&&E.forEach(C=>{C.className="widget_container_disabled"}),v.html=y.innerHTML,v.html=v.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,C=>C.replace(/\btrue\b/g,"false").trim()),v.html=v.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,C=>C.replace(/\bhover-element\b/g,"").trim()),v.html=v.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,C=>C.replace(/\bwb-block\b/g,"").trim()),v.html=v.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,C=>C.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),v.html=v.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,C=>C.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),v};async function m(v){try{if(A.infoMessageToast("Updating your widget preference",0),v){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const E=await Be(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(E.length!==1&&E.length>0)for(let C=1;C<E.length;C++){const b=E[C];await Pe(b.id)}if(v){if(!E.length){const C=await O(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const b=await Z("use_latest","true",!1,f.userId,999);await q(C,b,"use_latest"),await D.SyncDataOnline()}}else if(E.length>0)for(let C=0;C<E.length;C++){const b=E[C];await Pe(b.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await T(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;A.successfullToast("Widget Preference Updated.")}catch(y){throw y}finally{document.querySelector(".infoMessageToast")?.remove()}}async function p(v,y,E){y.checked||E?(v.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(v.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),E||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const h=new Map,w=()=>{const v=document.getElementById("widget-version");if(!v)return;v.innerHTML="",v.classList.remove("d-none"),v.classList.add("d-flex","flex-column","gap-2");const y=document.createElement("div");y.classList.add("d-flex","justify-content-between","align-items-center");const E=document.createElement("label");E.setAttribute("for","widgetVersionValue"),E.textContent="Widget Versions:";const C=document.createElement("div");C.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",C.id="useLtsSwitch";const b=document.createElement("input");b.type="checkbox",b.className="form-check-input",b.id="alwaysUseLTS";const S=document.createElement("label");S.className="form-check-label ms-2",S.setAttribute("for","alwaysUseLTS"),S.textContent="Use LTS",C.appendChild(b),C.appendChild(S),y.appendChild(E),y.appendChild(C);const W=document.createElement("select");return W.name="input-widgetVersionValue",W.id="widgetVersionValue",W.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(v.appendChild(y),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(b.checked=!0,p(W,b,!0)),b.addEventListener("change",async()=>{try{await p(W,b,!1)}catch(x){console.error("useLtsError",x),x instanceof Error&&A.errorToast(x.message),b.checked=!b.checked}})):v.appendChild(E),v.appendChild(W),W},_=()=>{const v=document.getElementById("widget-version");if(!v){console.warn("Widget version container not found");return}const y=document.getElementById("widgetVersionValue");y&&(h.forEach(E=>{y.removeEventListener("change",E)}),h.clear()),v.innerHTML="",v.classList.remove("d-flex"),v.classList.add("d-none")},L=async(v,y,E)=>{try{const C=await I(),b=document.getElementById("widgetVersionValue");b&&h.forEach(j=>{b.removeEventListener("change",j)});const S=w();if(!S){console.error("Failed to create select element");return}const W=await Se(v,C?.token),x=W?.widgetVersion,M=new Date(W?.widgetTimestamp).toLocaleString();let $=new Date(E).toLocaleString();if($==="Invalid Date"&&($=new Date().toLocaleString()),W){const j=document.createElement("option");j.value="original",j.textContent=`Original ${y==="original"?`(Current) (${$})`:""}`,(!W||!W.publishedWidgetVersion)&&(j.textContent+=" (Published)"),S.appendChild(j);for(let U=0;U<W.widgetVersion;U++){const ne=document.createElement("option");ne.value=`${U+1}`,ne.textContent=`Version ${U+1} ${U+1==Number(y)?"(Current)"+(x===U+1?` (${M})`:` (${$})`):""}`,U+1==Number(y)&&(ne.selected=!0),W.publishedWidgetVersion&&U+1==Number(W.publishedWidgetVersion)&&(ne.textContent+=" (Published)"),S.appendChild(ne)}}else{const j=document.createElement("option");j.value="",j.textContent=`Original (current) (${$})`,j.selected=!0,S.appendChild(j)}if(h.has(v)){const j=h.get(v);S.removeEventListener("change",j),h.delete(v)}const B=T(v,C.entityId);h.set(v,B),S.addEventListener("change",B)}catch(C){console.error("Error initializing widget versions:",C)}},T=(v,y,E)=>{async function C(b){b&&b.preventDefault();let S="";if(E&&E===!0){f.token||await f.getUserDetails();const x=await Se(v,f.token);x&&(S=x.publishedWidgetVersion)}else{const M=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",y),S=M?.value||""}if(!S)return;if(f.selectedStaticWidgetTreeInfo.isChildWidget)try{let x;if(S==="original"){x=v;const $=await le(x);M($)}else{let $=new P;$.typeConnection="the_widget_version",$.name="version";let B=new Ve;B.type="the_version",B.search=S,B.logicoperator="=",B.name="versionFilter",B.operateon="version",B.composition=!1;const j=new P;j.typeConnection="the_widget_s_copy",j.name="copywidgets",j.freeschemaQueries=[$],j.selectors=["the_widget_name","the_widget_type","the_widget_html","the_widget_css","the_widget_js","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_origin","the_widget_version"];const U=new P;U.conceptIds=[v],U.freeschemaQueries=[j],U.inpage=100,U.filters=[B],U.filterLogic="( versionFilter )",U.outputFormat=ce,ge(U,"").subscribe(async ne=>{try{const ae=ne?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;if(!ae){A.errorToast("Widget version not found");return}const ee=await le(ae);M(ee)}catch(re){console.error("Error in widget version callback:",re),A.errorToast("Error updating widget version")}})}async function M($){const B=JSON.parse(JSON.stringify(f.staticWidgetTree)),U=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,ne={...$,wrapper:U};let re=!1;const ae=J=>{for(let te=0;te<J.length;te++){if(J[te].wrapper===U){J[te]=ne,re=!0;break}if(J[te].children&&J[te].children.length>0&&(ae(J[te].children),re))break}};if(ae(B.children),!re){console.error("Could not find child widget to update"),A.errorToast("Failed to update widget");return}f.widgetTree=B,f.selectedStaticWidgetTreeInfo.widgetTree=ne,E&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const ee=document.getElementById(U);if(ee){ee.innerHTML="",await Ce(ne,ee);let J;S==="original"?J=v:J=$.id,ee.setAttribute("data-widgetid",J.toString()),X(ne,!1),pe(),A.successfullToast("Widget version updated")}}}catch(x){console.error("Error updating child widget version:",x),A.errorToast("Error updating widget version")}else if(S==="original")await ze(null,v,v),pe();else{let x=new P;x.typeConnection="the_widget_version",x.name="version";let M=new Ve;M.type="the_version",M.search=`${S}`,M.logicoperator="=",M.name="versionFilter",M.operateon="version",M.composition=!1;const $=new P;$.typeConnection="the_widget_s_copy",$.name="copywidgets",$.freeschemaQueries=[x],$.selectors=["the_widget_name","the_widget_type"];const B=new P;B.conceptIds=[v],B.freeschemaQueries=[$],B.inpage=100,B.filters=[M],B.filterLogic="( versionFilter )",B.outputFormat=ce;let j=0;await ge(B,"").subscribe(async U=>{const re=U?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;re?j=re:A.errorToast("widget version not found")}),j&&await ze(null,j,v)}}return C};return{createWidgetCopy:o,removeMyWidgetFromPublic:s,removeFromTemplate:l,renderSavedWidgets:a,renderBoomWidgets:i,renderPublicWidgets:e,renderTemplateLayouts:t,saveFromPublic:r,checkContent:d,enableWidgetButtons:u,disableWidgetButtons:c,clearDraggedWidget:g,initializeWidgetVersions:L,removeWidgetContainer:_,loadWidgetVersionWith:T}})(),Te=(()=>{const t=async l=>{l.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const u=d?.parentElement;if(u&&d){const c=d.previousElementSibling;c?.classList.contains("mftsccs-marking-element")&&c.childNodes.length>1&&alert("insert into marker"),c&&u.insertBefore(d,c)}await n(),$t(),H.updateActionHistories()},e=async l=>{l.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const u=d?.parentElement;if(u&&d){const c=d.nextElementSibling;c&&u.insertBefore(c,d)}await n(),$t(),H.updateActionHistories()};async function n(){const l=f.widgetTree,d=f.selectedStaticWidgetTreeInfo.widgetTree;function u(g){for(const m of g.children){if(m===d)return g;const p=u(m);if(p)return p}return null}const c=u(l);if(c){let g=null;c.wrapper&&c.wrapper!="0"?g=document.getElementById(c.wrapper):g=document.getElementById("builder-workarea"),c.html=g.innerHTML}else await me()}function a(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(l){const d=Math.random()*16|0;return(l==="x"?d:d&3|8).toString(16)})}async function i(l,d,u){if(l.childNodes.length){if(l.dataset.widgetid){await sn(null,!0,parseInt(l.dataset.widgetid),l.parentElement?l.parentElement:d),me(),we(),l.remove();return}l.childNodes.forEach(c=>{i(c,d)})}}return{moveUp:t,moveDown:e,copyElement:async l=>{l.stopPropagation();const d=R.staticElement;if(d?.removeAttribute("draggable"),d.classList.contains("content-target"))return;const u=d?.parentElement,c=d.cloneNode(!0);await i(c,u),c.dataset.widgetid||u.insertBefore(c,d.nextSibling),we(),await n(),pe(),H.updateActionHistories()},fixContentTargetHeight:(l,d)=>{const u=window.getComputedStyle(d);console.log("wrapper element computed height",u.height,l)},editWidget:async l=>{console.log("event.target",l.target);const d=document.getElementById("edit-widget");d.style.display="none";const c=R.staticElement.closest(".added-widget-container");c.classList.replace("added-widget-container","edited-widget-container");const g=c.querySelectorAll(".widget_container_disabled");g.length&&g.forEach(h=>{h.className="widget_container widget_selected"}),R.staticElement?.removeAttribute("draggable");let m=c.cloneNode(!0);const p=await Ae(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=p.innerHTML,f.editedWidgets[c.id]=f.selectedStaticWidgetTreeInfo.widgetTree,R.staticElement?.setAttribute("draggable","true"),we()},generateUUID:a}})();class f{static newWidget=new Et;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await I();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const n=document.getElementById("widget-btn-wrapper");n&&n.querySelectorAll("button").forEach(a=>a.disabled=!0),await this.updateOwnerStatus(),this.#e&&n&&n.querySelectorAll("button").forEach(a=>a.disabled=!1)}}catch(n){console.error("error updating widget properties",n)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const n={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},a=await V("widget",this.userId,n),i=await K(this.entityId);if(await Q(i,a,"s_widget"),this.staticWidgetTree?.assistant?.id){const o=await V("assistant",this.userId,this.staticWidgetTree?.assistant);await Q(a,o,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let s=0;s<o.length;s++){const r=await V("css_library",this.userId,o[s]);await Q(a,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let s=0;s<o.length;s++){const r=await V("js_library",this.userId,o[s]);await Q(a,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let s=0;s<o.length;s++){const r=await V("custom_function",this.userId,o[s]);await Q(a,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let s=0;s<o.length;s++)await this.createChildWidget(o[s],a)}return await D.SyncDataOnline(),a}static async createChildWidget(e,n){const a={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper,dependency:e?.dependency},i=await V("widget",this.userId,a),o={wrapper:e?.wrapper,type:e?.type,parent:i.id},s=await V("child_widget",this.userId,o);if(await Q(n,s,"s_child"),await Q(s,i,"info"),e.useLatest&&e.useLatest===!0){const r=await Z("use_latest","true",!1,this.userId,999);await Q(s,r,"use_latest")}if(e?.library?.css?.length){const r=e?.library?.css;for(let l=0;l<r.length;l++){const d=await V("css_library",this.userId,r[l]);await Q(i,d,"s_css_library")}}if(e?.library?.js?.length){const r=e?.library?.js;for(let l=0;l<r.length;l++){const d=await V("js_library",this.userId,r[l]);await Q(i,d,"s_js_library")}}if(e?.custom_functions?.length){const r=e?.custom_functions;for(let l=0;l<r.length;l++){const d=await V("custom_function",this.userId,r[l]);await Q(i,d,"s_custom_function")}}if(e?.children?.length)for(let r=0;r<e?.children?.length;r++)await this.createChildWidget(e.children[r],i)}static async updateOwnerStatus(){try{const e=await O(this.entityId),n=await O(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id);if((await An(e,n,"s_widget","the_entity_s_widget")).length||e.userId===n.userId)this.#e=!0;else{const i=await Ra(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(i.length){const o=await O(i[0].id);((await An(e,o,"s_page","the_entity_s_page")).length||e.userId===o.userId)&&(this.#e=!0)}}}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await O(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),n={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions,dependency:this.staticWidgetTree.dependency},a=await N.createWidgetCopy(e,this.userId,this.token,!0,n);if(this.staticWidgetTree.children.length){const i=this.staticWidgetTree.children;for(let o=0;o<i.length;o++)await this.createChildWidget(i[o],a)}return await D.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},a}catch(e){throw e}}static async savePageWidget(e,n){const a={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:n,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},i=await V("widget",this.userId,a);if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let r=0;r<s.length;r++){const l=await V("css_library",this.userId,s[r]);await Q(i,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let r=0;r<s.length;r++){const l=await V("js_library",this.userId,s[r]);await Q(i,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let r=0;r<s.length;r++){const l=await V("custom_function",this.userId,s[r]);await Q(i,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],i)}const o=await O(e);return await Q(o,i,se.PAGE_WIDGET_LINKER),await D.SyncDataOnline(),!0}static async copyPageWidget(e,n,a){const i={after_render:a?.after_render,before_render:a?.before_render,name:n,html:a?.html,css:a?.css,js:a?.js,type:a?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},o=await V("widget",this.userId,i);if(a?.library?.css?.length){const s=a?.library?.css;for(let r=0;r<s.length;r++){const l=await V("css_library",this.userId,s[r]);await Q(o,l,"s_css_library")}}if(a?.library?.js?.length){const s=a?.library?.js;for(let r=0;r<s.length;r++){const l=await V("js_library",this.userId,s[r]);await Q(o,l,"s_js_library")}}if(a?.custom_functions?.length){const s=a?.custom_functions;for(let r=0;r<s.length;r++){const l=await V("custom_function",this.userId,s[r]);await Q(o,l,"s_custom_function")}}if(a.children.length){const s=a.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],o)}return await Q(e,o,se.PAGE_WIDGET_LINKER),await D.SyncDataOnline(),!0}static async hasWidgetChanged(e){const n=["html","css","js","after_render","before_render","update","mount_child"],a=l=>l?l.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function i(l){let d=0;for(let u=0;u<l.length;u++){const c=l.charCodeAt(u);d=(d<<5)-d+c,d=d&d}return d}const o=(l,d)=>n.some(u=>{const c=a(l[u]),g=a(d[u]),m=i(c),p=i(g),h={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==p?!(c==""||c==h[u]):!1}),s=(l,d)=>l.length!==d.length?!0:l.some((u,c)=>o(u,d[c])||s(u.children,d[c].children)),r={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,root:0};return e?o(this.staticWidgetTree,this.initialWidgetTree)||s(this.staticWidgetTree.children,this.initialWidgetTree.children):o(this.staticWidgetTree,r)||s(this.staticWidgetTree.children,r.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");A.infoMessageToast("Publishing Widget",0);let e=null;const n=await O(this.staticWidgetTree.root||this.staticWidgetTree.origin),a=this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,i=await Be(a,"the_widget_latest");if(i&&i.length){for(let s=0;s<i.length;s++)await Pe(i[s].id);try{const s=await fetch(Fa.NODE_CACHE_URL+`/api/get-latest-widget?id=${n.id}`,{method:"DELETE"});s.ok||console.error("Failed to delete widget from cache server:",s.status)}catch(s){console.log("error removing widget from cache server",s)}}this.staticWidgetTree.origin&&(e=await O(this.staticWidgetTree.id),await Q(n,e,"latest"),await D.SyncDataOnline()),await N.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),A.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,n=await Be(e,"the_widget_latest");n.length&&(n[0].toTheConceptId===this.staticWidgetTree.widgetId?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1);const a=document.getElementById("publish-widget");a&&(a.style.display="block",this.staticWidgetTree.isPublished?(a.textContent="Published",a.disabled=!0,a.style.cursor="not-allowed"):(a.textContent="Publish This Version",a.disabled=!1,a.style.cursor="pointer"))}}var Zn=(t=>(t.page="page",t.widget="widget",t))(Zn||{});const Xs=Ko("mftsccs-browser"),er=`
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
`,tr=`
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
`,nr=`
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
    "mftsccs-browser": "${Xs}"
  }
}
`,ar=`
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
`,ir=`
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
`,or=`
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
  `,sr=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${z.baseURL}",
    baseNodeUrl: "${z.baseNodeUrl}",
    boomURL: "${z.boomURL}",
    aiURL: "${z.aiURL}",
  }
`,rr=`
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
`,ln=t=>`
${t.map(e=>{if(e.importFrom)return`import ${e.content} from "../pages${e.importFrom}";`}).join(`
`)}

type RouteParams = {
  path: any;
  linkLabel?: string;
  content: any;
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  ${t.map(e=>`
    {
        path: "${e.path}",${e.linkLabel?`linkLabel: "${e.linkLabel}",`:""}
        content: ${e.content}
    },`).join(`
`)}
];

export default routes;
`,lr=`
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
`,cr=`
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
}`,dr=`
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

`;class cn{async createProject(e,n,a){const i=await V(k.PROJECT_COMP_NAME,n,e),o=await K(a);return await q(o,i,se.ENTITY_PROJECT_LINKER),i}async getAllProjects(e){return new Promise(async(n,a)=>{const i=await I(),o=new P;o.typeConnection=`the_entity_${se.ENTITY_PROJECT_LINKER}`,o.selectors=[`the_${k.PROJECT_COMP_NAME}_name`],o.name="first",o.inpage=100;const s=new P;s.conceptIds=[e||i.entityId],s.name="second",s.inpage=100,s.freeschemaQueries=[o],s.outputFormat=ce,await ge(s,"").subscribe(async r=>{const l=r?.[0]?.data?.the_entity?.[`the_entity_${se.ENTITY_PROJECT_LINKER}`];n(l)}).catch(r=>{console.error(r);const l=r?.message;A.errorToast(`${l}`,4),a({error:!0,message:l})})})}async getProjectById(e){const a=(await I())?.token;let i=new G;i.composition=e,i.fullLinkers=[`the_${k.PROJECT_COMP_NAME}_name`,`the_${k.PROJECT_COMP_NAME}_main_page`,`the_${k.PROJECT_COMP_NAME}_${se.PROJECT_PAGE_LINKER}`],i.inpage=100;let o=new G;return o.fullLinkers=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_body`],o.inpage=100,await ve([i,o],a)}async updateProjectField(e,n,a){const i=await I(),o=`the_${k.PROJECT_COMP_NAME}_${e}`;await ue(a,o);const s=await O(a),r=await Z(`${e}`,`${n}`,!1,i.userId,4,999);await q(s,r,e)}async deleteProject(e){try{return await Le(e),!0}catch(n){return console.error("Failed to delete project:",n),!1}}async addPagesToProject(e,n){try{const a=await O(e);if(!a){console.error("Project not found");return}await ue(e,`the_project_${se.PROJECT_PAGE_LINKER}`);for(const i of n){const o=await O(i);if(!o){console.error("Page not found");return}await q(a,o,se.PROJECT_PAGE_LINKER)}await D.SyncDataOnline()}catch(a){console.error("Failed to add page to project:",a)}}async deletePageFromProject(e,n){try{const a=await O(e);if(!a){console.error("Project not found");return}const i=await O(n);if(!i){console.error("Page not found");return}const o=await An(a,i,"",`the_project_${se.PROJECT_PAGE_LINKER}`);if(!o){console.error("Connection not found");return}await Pe(o?.[0]?.id),await D.SyncDataOnline()}catch(a){console.error("Failed to delete page from project:",a)}}async setMainPage(e,n){try{const a=await O(e);if(!a){console.error("Project not found");return}const i=await O(n);if(!i){console.error("Page not found");return}await ue(e,"the_project_main_page"),await q(a,i,"main_page"),await D.SyncDataOnline()}catch(a){console.error("Failed to set main page:",a)}}}let he=!1;const ur=async()=>{if(he)return;he=!0;let t=new Zt;const e=await dn(t),n=e?.routesDir,a=e?.pagesDir;await gr(a,n),t.generateAsync({type:"blob"}).then(function(i){let o=document.createElement("a");o.href=URL.createObjectURL(i),o.download="my_files.zip",o.click()}),he=!1},mr=async t=>{if(he)return;he=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new Zt;const a=await dn(n),i=a?.widgetsDir,o=a?.pagesDir;i&&o&&await pr(t,o,i),a?.routesDir?.file("routes.ts",ln(e)),n.generateAsync({type:"blob"}).then(function(s){let r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="my_files.zip",r.click()}),he=!1},dn=async t=>{t.file("index.html",ar),t.file("vite.config.js",er),t.file(".gitignore",tr),t.file("package.json",nr),t.file("tsconfig.json",or);let e=t.folder("public");if(!e){console.log("unable to create public folder");return}let n=t.folder("src");if(!n){console.log("unable to create src folder");return}n?.file("app.ts",ir),n?.file("style.css","");let a=n?.folder("environments");if(!a){console.log("unable to create environments folder");return}a?.file("environment.dev.ts",sr);let i=n?.folder("widgets");if(!i){console.log("unable to create widgets folder");return}let o=n?.folder("pages");if(!o){console.log("unable to create pages folder");return}let s=n?.folder("services");if(!s){console.log("unable to create services folder");return}s?.file("widget.service.ts",lr),s?.file("drop.service.ts",cr),s?.file("validator.service.ts",dr);let r=n?.folder("routes");if(!r){console.log("unable to create routes folder");return}return r?.file("renderRoute.service.ts",rr),{srcDir:n,pagesDir:o,servicesDir:s,publicDir:e,environmentsDir:a,widgetsDir:i,routesDir:r}},gr=async(t,e)=>{if(!t&&!e)return;let n=[];const a=await I(),i=a?.entityId,o=a?.token,s=new G;s.composition=i,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new G;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await ve([s,r],o);if(l?.data.the_entity?.the_entity_s_page?.length)for(let d=0;d<l?.data.the_entity?.the_entity_s_page?.length;d++){const u=l.data.the_entity.the_entity_s_page[d];let c={page:u?.data?.the_page?.the_page_body?.[0]?.id,title:u?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:u?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:u?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:u?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:u?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:u?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!c.page)continue;const g=`${c.slug.split("-").map((h,w)=>w===0?h.charAt(0).toLowerCase()+h.slice(1):h.charAt(0).toUpperCase()+h.slice(1)).join("")}`;n.push({path:`/${c.slug}`,content:`${g}Index`,importFrom:`/${c.slug}/${c.slug}.index.ts`});let m=t?.folder(c.slug);const p=`
import { StatefulWidget, convertWidgetTreeToWidgetWithWrapper } from 'mftsccs-browser';
import { getWidgetFromId } from "../../services/drop.service.ts";

export default class ${g}Index extends StatefulWidget
{

    async  after_render() {   
        this.setTitle('${c.title}');
        let widgetTree = await getWidgetFromId(${c.page});
        const newWidget = await convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
        // apply newWidget css to the page
        const style = document.createElement('style');
        let pageStyle = \`@root { font-family: ${c.font_family}; 
 font-size: ${c.font_size} }\`;
        style.innerHTML = pageStyle + newWidget.css;
        document.head.appendChild(style);
        // apply newWidget js to the page
        const script = document.createElement('script');
        script.innerHTML = newWidget.js;
        document.head.appendChild(script);
    }
}
`;m?.file(`${c.slug}.index.ts`,p)}e?.file("routes.ts",ln(n))},pr=async(t,e,n)=>{console.log("widgetsDir",n);const i=(await I())?.token,o=await ra(t,i,!0);let s=e?.folder("home");const r=`
import * as tsccs from "mftsccs-browser";

${o?.css?'import "./home.style.css";':""}
import { getWidgetFromId } from "../../services/drop.service.ts";
import { renderLatestWidget } from 'mftsccs-browser';

export default class homeIndex extends tsccs.StatefulWidget
{

    async  after_render() {        
        // let widgetTree = await getWidgetFromId(${t});
        // tsccs.convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
        const appElement = document.querySelector<HTMLDivElement>("#app");
        let widgetTree = await renderLatestWidget(${t}, appElement);
    }
        
     getHtml() {
        return '';
    }
}
`;s?.file("home.index.ts",r),o?.css&&s?.file("home.style.css",o?.css)},hr=async t=>{if(he)return;he=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new Zt;const a=await dn(n),i=a?.widgetsDir,o=a?.pagesDir;let s="";i&&o&&(s=await fr(t,o)),a?.routesDir?.file("routes.ts",ln(e)),n.generateAsync({type:"blob"}).then(function(r){let l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=`${s||"page"}.zip`,l.click()}),he=!1},fr=async(t,e)=>{const n=await I(),a=n?.entityId,i=n?.token,o=await ra(t,i,!0),s=new G;s.composition=a,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new G;r.inpage=100,r.composition=t,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const d=(await ve([s,r],i))?.data?.the_entity?.the_entity_s_page?.filter(p=>p?.id==t),u=d?.[0]?.data?.the_page?.the_page_body?.[0]?.id,c=d?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let g=e?.folder("home");const m=`
    import * as tsccs from "mftsccs-browser";
    
    ${o?.css?'import "./home.style.css";':""}
    import { getWidgetFromId } from "../../services/drop.service.ts";
    import { renderLatestWidget } from 'mftsccs-browser';

    export default class homeIndex extends tsccs.StatefulWidget
    {
        async  after_render() {        
            const appElement = document.querySelector<HTMLDivElement>("#app");
            let widgetTree = await renderLatestWidget(${u}, appElement);
        }
        getHtml() {
            return '';
        }
    }
    `;return g?.file("home.index.ts",m),o?.css&&g?.file("home.style.css",o?.css),c},yr=async t=>{if(he)return;if(!t){console.log("Project id is required");return}const i=(await new cn().getProjectById(t))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();he=!0;let o=new Zt;const s=await dn(o),r=s?.routesDir,l=s?.pagesDir;await wr(l,r,t),o.generateAsync({type:"blob"}).then(function(d){let u=document.createElement("a");u.href=URL.createObjectURL(d),u.download=`the_${i}.zip`,u.click()}),he=!1},wr=async(t,e,n)=>{if(!t&&!e)return;let a=[];const o=(await I())?.token,s=new G;s.composition=n,s.inpage=100,s.fullLinkers=["the_project_s_page","the_project_main_page"];const r=new G;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await ve([s,r],o),d=l?.data.the_project?.the_project_main_page?.[0]?.id;if(l?.data.the_project?.the_project_s_page?.length)for(let u=0;u<l?.data.the_project?.the_project_s_page?.length;u++){const c=l.data.the_project.the_project_s_page[u];let g={page:c?.id,title:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:c?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:c?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:c?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:c?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!g.page)continue;const m=`${g.slug.split("-").map((w,_)=>_===0?w.charAt(0).toLowerCase()+w.slice(1):w.charAt(0).toUpperCase()+w.slice(1)).join("")}`;a.push({path:`/${g.slug}`,content:`${m}Index`,importFrom:`/${g.slug}/${g.slug}.index.ts`}),g.page==d&&a.push({path:"/",content:`${m}Index`});let p=t?.folder(g.slug);const h=`
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
                }`;p?.file(`${g.slug}.index.ts`,h)}e?.file("routes.ts",ln(a))};async function vr(){const t=new ie("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function br(){const t=new ie("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function bi(){await vr(),await br(),await os(),await ss()}function _r(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function _i(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function $n(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class Ei{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const a=(await I())?.token;zn(),_i(),document.querySelector("#widget-properties #widget-type input")?.remove(),_r(),await bi();let o=Jn(),s=await Se(e,a),r=await le(s?.widgetId??e),l=await Ce(r,o);this.addPageUpdate(e),$n(),f.resetWidgetTree(),f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),X(r,!1,l,!0),N.enableWidgetButtons(),on(),pe(),we()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
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
      `,this.isDroppedDown=!1,this.arrowBtn=n.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=n.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,n){li(e.css,n?.css),ri(e.after_render),ci(e.before_render)}}class Er{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
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
    `}}const Wa={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},xa=new Qe,Ti=new Ei;async function Xn(t){t.preventDefault();try{await De(),await st();const e=document.getElementById("fspage-save-button"),n=Number(e?.getAttribute("data-pageid")),o="widget_"+(await xa.getPageById(n)).data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_slug`].data.the_slug,s=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Saving page...",0),s?.length&&s.forEach(c=>{const g=c.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),c.classList.remove("edited-widget-container")});const r=await Xe();f.staticWidgetTree.html=r,await f.savePageWidget(n,o),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast(Wa.PAGE_SAVE);const u=(await xa.getPageById(n))?.data?.the_page?.the_page_body?.id;return await Ti.LoadPageWidget(u),Wa.PAGE_SAVE}catch(e){na(e,"There is an error on saving widget")}}async function ea(t,e,n){t.preventDefault();const a=document.getElementById("updateFsPagePublish"),i=document.getElementById("updateFsPage"),o=i?.innerHTML||"";try{const s=document.getElementById("updateFsPagexx");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating.."),s&&(s.classList.add("disabled"),s.textContent="Updating..");const r=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Updating Page...",0),r?.length&&(A.infoMessageToast("Updating page...",0),r.forEach(c=>{const g=c.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),c.classList.remove("edited-widget-container")}));const l=await Xe();f.staticWidgetTree.html=l;const d=await f.updateWidget();return console.log("updateWidgetResponse ->",d),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page Updated Successfully"),await Ti.LoadPageWidget(e),n&&n===!0&&await f.publish(),"updated widget successfully!"}catch(s){console.error("error updating page",s),s instanceof Error&&A.errorToast(s.message),document.querySelector(".infoMessageToast")?.remove()}finally{a&&a.classList.remove("disabled"),i&&(i.classList.remove("disabled"),i.innerHTML=o)}}function Tr(t){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const n=dc(`/page-preview/${e}`),a=`${window.location.origin.replace(/\/$/,"")}${n}`;window.open(a,"_blank")?.focus()}}function Sr(t,e=0){return window.saveWidgetInFolders=Lr,`
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
                        <form method="dialog" onsubmit="saveWidgetInFolders(event, 'folder-widget-container', '${e||""}', ${t} )" id="form-folder-modal">
                            <div class="flex flex-col mb-2">
                                <label for="name" class="form-label">Name</label>
                                <input ${t?'id="save-to-folder-name"':'id="folder-name"'}  required ${t?"disabled":""} class="form-control" />
                            
                            </div>
                            <div class="flex flex-col mb-2">
                                <label for="description" class="form-label">Description</label>
                                <textarea rows="2"  ${t?'id="save-to-folder-description"':'id="description"'} class="form-control" placeholder="Description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END .a-dialog-body  -->
      </dialog>
    `}let bn,ut;async function Cr(t,e){bn=t;const n=Sr(e,typeof t=="object"?0:t),a=document.createElement("div");a.innerHTML=n;const i=a.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(i),await de("folder-widget-container");const o=await I();if(!o)return;let s,r,d=(await it(bn,o.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(s=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),s&&(s.value=d),r=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(s=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),r=document.getElementById("folder-widget-container")?.querySelector("textarea#description"));const u=document.getElementById("widgetFolder");ut=await je(z.folder_widget,u,{widgetName:s.value,widgetDescription:r?.value,widgetId:bn,showCheckbox:!0,showFiles:!1})}async function Lr(t,e,n,a){t.preventDefault(),console.warn("asdfads",ut.selectedConceptIds);let i=[];ut&&ut?.selectedConceptIds?.length>0&&(i=ut.selectedConceptIds||[]);try{A.infoMessageToast("Saving Widget...",0),await De();const o=document.getElementById("folder-widget-container"),s=o?.querySelector('button[type="submit"]');s.textContent="Saving";const r=o?.querySelector("input"),l=o?.querySelectorAll("button"),u=(document.getElementById("save-to-folder-name")||document.getElementById("folder-name")).value;l&&l.forEach(T=>{T.disabled=!0}),r&&(r.disabled=!0),await st();let c;if(!a){R.staticElement?.removeAttribute("draggable");const T=document.querySelectorAll(".edited-widget-container");T?.length&&T.forEach(async E=>{if(E.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[E.id]){const C=await Ae(E,"div.mftsccs-marking-element");f.editedWidgets[E.id].html=C.innerHTML}});const v=await Pi();f.staticWidgetTree.html=v;const y=await f.saveWidget(u);c=await K(y.id),n=c.id}const g=await I(),m=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,p=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,h={title:m,source_url:window.location.href,widget_id:n,short_desc:p,note:"",data_type:"widget",created_on:Date.now()};if(i.length==0){const T=g?.userConcept;c=await K(Number(n));let v={...h,boom_folder:{name:"",parent:T}};const y=await Fe({boomgpt:v},void 0,void 0,void 0,g.userId,4);await wa(await K(Number(T)),y,"the_boom_folder_s_contain"),await Q(y,c,"the_refer")}else if(i?.length>0)for(let T=0;T<i.length;T++){const v=i[T];c=await K(Number(n));const y=await K(Number(v));if(!y)throw new Error("Selected folder concept not found!");let E={...h,boom_folder:{name:y.name||"",parent:v}};const C=await Fe({boomgpt:E},void 0,void 0,void 0,g.userId,4);await wa(await K(Number(v)),C,"the_boom_folder_s_contain"),await Q(C,c,"the_refer")}await D.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),be("folder-widget-container"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),a||(await N.renderSavedWidgets(),ze(t,Number(n)))}catch(o){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),na(o,"There is an error on saving widget")}}class Si extends Et{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";environmentSelector="";_pageBuilderService;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const n=I();if(n&&(this.environmentSelector=`
      <select id="select-environment-dropdown">
        <option value="">Select Environment</option>
      </select>
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
    `,e){this.the_params=e,this._pageBuilderService=new Ei;const a=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+a:"Widget Builder";const i=this.the_params?.page_id;n&&e.type==Zn.page&&(this.saveBoomButtonHTML=`
         <div class="text-end d-flex flex-row" id="widget-btn-wrapper">
            <button data-pageid="${i}" id="fspage-save-button" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
              <span>Boom Page</span>
            </button>
          </div>
          `),this.previewButtonHTML=`
        <button id="preview-btn" onclick="previewPage(event)" class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1" title="Preview" data-pageId="${i}">
          <span class="material-symbols-outlined"> visibility </span> Preview
        </button>
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
`}before_render(){this.render()}after_render(){if(this.the_params){document.getElementById("fspage-save-button").addEventListener("click",Xn);const n=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!n){on();return}this._pageBuilderService.LoadPageWidget(Number(n))}}getHtml(){return window.openSaveWidgetModal=oa,window.saveWidget=Ii,window.updateWidget=sa,window.newWidget=Oe,window.previewWidget=qr,window.downloadWebsite=ur,window.moveUp=Te.moveUp,window.moveDown=Te.moveDown,window.copyElement=Te.copyElement,window.editWidget=Te.editWidget,window.openConvertModal=Vr,window.convertToWidget=Or,window.updatePage=ea,window.previewPage=Tr,window.undoAction=H.undoAction,window.redoAction=H.redoAction,window.saveWidgetToFolderBtn=Cr,window.openPromptModal=Ts,window.refineAIData=In,`
      <div class="content" onclick="  removeSubSidebar()">

        <div class="column-title d-flex justify-content-between align-items-center">
        <h3 id="widget-builder" title="${this.component_heading}">${this.component_heading}</h3>
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
    `}}function Ci(){D.conceptsSyncArray=[],D.connectionSyncArray=[]}class Ar{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let n="",a="";return this.props.id==="fs-create-page-modal"?a=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?a=this.editPageModal():this.props.id==="create-project-modal"?(a=this.createNewProjectModal(),n="m-large"):this.props.id==="add-pages-project"&&(a=this.addPagesModalHtml(),n="m-large"),e.innerHTML=`
      <div class="m-content ${n}">
        <div id="closeModalBtn" class="close-modal">
            <img src="./images/icons/cross-close.svg" alt="" class="icon" />
        </div>
        <div class="m-header">
          <span id="modalHeader">${this.props.headerText}</span>
        </div>
        ${a}
      </div>
    `,e.querySelector("#closeModalBtn").addEventListener("click",this.handleClose.bind(this)),e}updateModal(){this.props.isOpen?this.modal.classList.add("open"):this.modal.classList.remove("open")}handleClose(){Ci(),this.modal.remove()}createNewPageModal(){return`
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
    `}}function Ot(t){new Ar(t)}function ka(t){const e=document.getElementById(t);e&&e.remove()}class ta{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new oi,this._pagesTSCCSService=new Qe}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),n=document.getElementById("saved-page-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-page-button");a?.removeEventListener("click",this.createButtonClickHandler),a?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(r=>{r.removeEventListener("click",this.deletePageButtonClickHandler),r.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(r=>{r.removeEventListener("click",this.editPageButtonClickHandler),r.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(r=>{r.removeEventListener("click",this.duplicatePageButtonClickHandler),r.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(a=>a.remove())}createButtonClickHandler=()=>{Ot({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const n=document.getElementById("fs-create-page-form"),a=n?.elements.namedItem("title");if(!a){console.error("page_title not found");return}const i=async()=>{const s=await this._pagesTSCCSService.generateSlug(a.value);n.elements.namedItem("slug")?.setAttribute("value",s)};a.addEventListener("keyup",i);const o=()=>{a.removeEventListener("keyup",i),document.getElementById("fs-create-page-modal")?.removeEventListener("close",o)};document.getElementById("fs-create-page-modal")?.addEventListener("close",o)};savePageButtonClickHandler=async()=>{const n=document.getElementById("fs-create-page-form").elements;if(!n.title.value){n.title.style.borderColor="red";return}A.infoMessageToast("Creating page...",0);const a=await kn(n),i=await I();await this._pagesTSCCSService.savePage(a,i?.userId,i?.entityId),await D.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),ka("fs-create-page-modal"),setTimeout(()=>{A.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;Ot({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:a,slug:i}});const o=document.getElementById("fs-edit-page-form"),s=o?.elements.namedItem("title");if(!s){console.error("page_title not found");return}const r=async()=>{document.getElementById("fs-edit-page-button")?.removeAttribute("disabled");const c=await this._pagesTSCCSService.generateSlug(s.value);o.elements.namedItem("slug")?.setAttribute("value",c)};s.addEventListener("keyup",r);const l=()=>{s.removeEventListener("keyup",r),document.getElementById("fs-edit-page-modal")?.removeEventListener("close",l)};document.getElementById("fs-edit-page-modal")?.addEventListener("close",l),document.getElementById("fs-edit-page-button")?.addEventListener("click",()=>this.updatePageButtonClickHandler(n))};async PageInputElementChangeHandler(e,n){const a=e.target,i=a.name,o=a.value;let s=await this._pagesTSCCSService.checkSlugAvailablity(o);if(i==="slug"&&!s){document.getElementById("fs-update-page-button")?.setAttribute("disabled","true"),a.style.borderColor="red",a.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(a.getAttribute("name"),a.value,Number(n))}updatePageButtonClickHandler=async e=>{const n=document.getElementById("fs-edit-page-form"),a=n.elements.namedItem("title");if(!a.value.trim()){a.style.borderColor="red";return}const i=n.elements;if(!i.title.value){i.title.style.borderColor="red";return}A.infoMessageToast("Renaming page...",2);const o=await kn(i),s=await I();await this._pagesTSCCSService.renamePage(o,e,s?.userId),await D.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page renamed successfully");const l=new URLSearchParams(window.location.search).get("page-id");if(e===l){const d=document.getElementById("widget-builder");d.textContent=`Page Builder: ${o?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),ka("fs-edit-page-modal")};deletePageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${a}" with the slug "${i}"?`)?(A.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(n)),await D.SyncDataOnline(),ao("/"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const a=e?.target?.getAttribute("data-id"),o=(await this._pagesTSCCSService.getPageById(Number(a)))?.data?.the_page,s=o?.the_page_title?.data?.the_title?.trim()+" copy",r=o?.the_page_slug?.data?.the_slug?.trim()+"-copy",l=o?.the_page_meta_title?.data?.the_meta_title?.trim(),d=o?.the_page_meta_description?.data?.the_meta_description?.trim(),u=o?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),c=o?.the_page_width?.data?.the_width?.trim(),g=o?.the_page_type?.data?.the_type?.trim(),m=o?.the_page_font_family?.data?.the_font_family?.trim(),p=o?.the_page_font_size?.data?.the_font_size?.trim(),h={title:s,slug:r,meta_title:l,meta_description:d,meta_keywords:u,width:c,type:g,font_family:m,font_size:p},w={};for(const[E,C]of Object.entries(h))C&&(w[E]=C);const _=o?.the_page_body?.id,L=await I(),T=await Se(_,L?.token);let v=await le(T?T.widgetId:_);const y=await this._pagesTSCCSService.savePage(w,L?.userId,L?.entityId);await f.copyPageWidget(y,`widget_${r}`,v),this.initPagesSidebar(),A.successfullToast("Page duplicated successfully")}}async function Wr(t){t?.preventDefault();const e=window.location.href,a=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(a))){await It("Do you want to save changes?")&&(e.includes("?page-id=")?a?await ea(t,Number(a)):await Xn(t):a?await sa(t,Number(a)):await oa());const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}f.resetWidgetTree();const o=t.target.getAttribute("data-pageId");xt(`?page-id=${o}`);let r=await new Qe().getPageById(Number(o));r?.error&&Oe();const l=document.getElementById("midContent"),d=document.getElementById("right-aside"),u={type:Zn.page,data:r.data?.[`the_${k.PAGE_COMP_NAME}`],page_id:o},c=new Si(u),g=new mn(u);d.innerHTML=await g.getHtml(),l.innerHTML="",c.mount(l),Zo.resetNavigationBar()}class Li{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new cn,this._pagesTsccsService=new Qe}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(a=>{let o=a?.data?.[`the_${k.PROJECT_COMP_NAME}`]?.[`the_${k.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
            <li class="project-item">
              <router-link class="project_title" data-projectId="${a.id}">
                <span><img src="./images/icons/projects icon.svg" alt="" class="icon" /></span>
                ${o}
              </router-link>
              <span class="add-icon" title="Add Page" ><img src="./images/icons/add-page.svg" alt="" class="icon" /></span>
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
          `}catch(e){return console.error("error",e),e?.status===401&&Me(),`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">Sorry, couldn't connect to server.</p>
            </li>
          `}}async createProjectModal(){document.getElementById("create-project-dialog")?.remove();const n=document.createElement("dialog");return n.setAttribute("id","create-project-dialog"),n.classList.add("col-md-3"),n.innerHTML=`
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
    `,document.querySelector("body #app")?.appendChild(n),de("create-project-dialog"),"Create Project Modal"}async renameProjectModal(e,n){document.getElementById("rename-project-dialog")?.remove();const i=document.createElement("dialog");return i.setAttribute("id","rename-project-dialog"),i.classList.add("col-md-3"),i.innerHTML=`
      <h4>Rename Project</h4>
      <form method="dialog" class="mt-3" id="rename-project-form" onsubmit="renameProjectHandler(event, ${n})">
        <div class="mb-3">
          <label for="projectName" class="form-label">Project name</label>
          <input type="text" class="form-control" autocomplete="project-name" name="name" id="projectName" value="" placeholder="e.g. first project">
        </div>
        <div class="text-end">
          <button class="btn btn-secondary" onclick="closeModal('rename-project-dialog')" type="button">Cancel</button>
          <button type="submit" class="btn btn-info">Rename</button>
        </div>
      </form>
    `,document.querySelector("body #app")?.appendChild(i),de("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const n=await this._projectsService.getProjectById(e),a=n?.data?.the_project?.[`the_project_${se.PROJECT_PAGE_LINKER}`],i=n?.data?.the_project?.the_project_main_page?.[0]?.id;return a?.length?a?.map(s=>{let r=s?.data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const l=i==s.id,d=l?'<span class="material-symbols-outlined home-icon">home</span>':"",u=l?"":`<li class="d-flex align-items-center justify-content-between" 
              onclick="setMainPageHandler(event, ${s.id})" data-projectid="${e}">
                  <span class="px-2">Set as Main Page</span>
                  <span class="material-symbols-outlined">home</span>
                </li>`,c=Number(s.id)+Number(e);return`
            <li class="project-page-item" data-projectid="${e}">
              <router-link class="page_title" href="/?page-id=${s.id}" data-pageid="${s.id}" onclick="pageHandler(event)">
                <span class="material-symbols-outlined">description</span>
                ${r}
              </router-link>
              ${d}
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${c})" title="Options"> more_vert </span>
              <ul class="dropdown-menu" id="dropdown-menu-${c}">
                <li class="delete-project-page d-flex align-items-center justify-content-between delete-icon" 
                onclick="deletePageFromProjectHandler(event, ${s.id})">
                  <span class="px-2">Delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </li>
                ${u}
              </ul>
            </li>
          `}).join(""):`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No pages created yet!</p>
            </li>
          `}catch(n){return console.error("error",n),n?.status===401&&Me(),`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">Sorry, couldn't connect to server.</p>
            </li>
          `}}async addPageToProjectHTML(e){try{document.getElementById("add-page-project-dialog")?.remove();const n=document.createElement("dialog");return n.id="add-page-project-dialog",n.innerHTML=`
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
      `,document.body.appendChild(n),n.showModal(),n}catch(n){return console.error("Error:",n),""}}}const xr=async t=>{let e=new P;e.typeConnection="the_project_environment",e.selectors=["the_environment_name","the_environment_value"];let n=new P;n.conceptIds=[t],n.freeschemaQueries=[e],n.outputFormat=ce;let a=await nt(n,""),i="default",o={},s=null,r=null,l=null;for(let _=0;_<a.length;_++){let L=a[_]?.data?.the_project;if(L){let v=L?.the_project_environment?.data?.the_environment;if(v){s=L?.the_project_environment?.id,i=v?.the_environment_name?.data?.the_name||"default",r=v?.the_environment_name?.id,l=v?.the_environment_value?.id;let y=v?.the_environment_value?.data?.the_environment_value;if(y)try{o=JSON.parse(y)}catch(E){console.error("Error parsing environment values",E),o={}}}}}const d="environment-editor-modal";document.getElementById(d)?.remove();const c=document.createElement("dialog");c.setAttribute("id",d),c.classList.add("col-md-8"),c.style.maxWidth="800px",c.innerHTML=`
    <style>
      #${d} {
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
        <a role="button" onclick="closeModal('${d}')">
          <img height="30px" src="https://boomconcole.com/freeschema/0c54fca0-ed0b-483c-90a0-344dfbe3ee8f.svg" />
        </a>
      </div>

      <div class="env-form-group">
        <label for="environment-name-input">Environment Name:</label>
        <input
          type="text"
          id="environment-name-input"
          placeholder="e.g., production, development, staging"
          value="${i}"
        />
      </div>

      <div class="env-checkbox-group">
        <input type="checkbox" id="save-to-entity-checkbox" />
        <label for="save-to-entity-checkbox">Save to my entity (make it reusable across projects)</label>
      </div>

      <div class="env-editor-hint">
        Enter your environment variables as JSON key-value pairs:
      </div>

      <div id="environment-editor-container"></div>

      <div class="env-editor-actions">
        <button type="button" class="btn btn-secondary" onclick="closeModal('${d}')">Cancel</button>
        <button type="button" id="format-json-btn" class="btn btn-info">Format JSON</button>
        <button type="button" id="save-environment-btn" class="btn btn-primary">Save</button>
      </div>
    </div>
  `,document.querySelector("body #app")?.appendChild(c),await de(d);const g=document.getElementById("environment-editor-container");if(!g)return;const m=Ga(_=>{const L=[],T=_.state.doc.toString();try{JSON.parse(T)}catch(v){const y=v,E=y.message.match(/position (\d+)/),C=E?parseInt(E[1]):0;L.push({from:Math.max(0,C-1),to:Math.min(T.length,C+1),severity:"error",message:y.message})}return L});let p=null;p=new oe({doc:JSON.stringify(o,null,2),extensions:[Tt,St,Rn(),Ja(),m,oe.lineWrapping,ke.tabSize.of(2)],parent:g}),document.getElementById("format-json-btn")?.addEventListener("click",()=>{try{const _=p?.state.doc.toString()||"{}",L=JSON.parse(_),T=JSON.stringify(L,null,2);p?.dispatch({changes:{from:0,to:p.state.doc.length,insert:T}}),alert("JSON formatted successfully!")}catch(_){alert("Invalid JSON: "+_.message)}});const w=document.getElementById("save-environment-btn");w?.addEventListener("click",async()=>{try{w.disabled=!0,w.textContent="Saving...";const L=document.getElementById("environment-name-input")?.value?.trim()||"default";if(!L){alert("Environment name is required"),w.disabled=!1,w.textContent="Save";return}const v=document.getElementById("save-to-entity-checkbox")?.checked||!1,y=p?.state.doc.toString()||"{}";let E;try{E=JSON.parse(y)}catch(x){alert("Invalid JSON: "+x.message),w.disabled=!1,w.textContent="Save";return}const C=await new Vn;await C.initialize();let b;s?(console.log("Editing existing environment:",s),b=await O(s),r&&await ue(s,"the_environment_name"),l&&await ue(s,"the_environment_value")):(console.log("Creating new environment"),b=await C.MakeTheInstanceConceptLocal("the_environment","",!0,999,4));const S=await C.MakeTheInstanceConceptLocal("the_name",L,!0,999,4),W=await C.MakeTheInstanceConceptLocal("the_environment_value",JSON.stringify(E),!0,999,4);if(await C.CreateConnection(b,S,"the_environment_name"),await C.CreateConnection(b,W,"the_environment_value"),!s){const x=await O(t);await C.CreateConnection(x,b,"the_project_environment")}if(v)try{const M=(await I())?.entityId;if(M){const $=await O(M);await C.CreateConnection($,b,"the_entity_s_environment"),console.log(`Environment saved to entity ${M}`)}else console.warn("Entity ID not found in profile data. Environment not saved to entity.")}catch(x){console.error("Error saving to entity:",x)}await C.commitTransaction(),alert("Environment variables saved successfully!"+(v?" (Also saved to your entity)":"")),w.disabled=!1,w.textContent="Save",window.closeModal(d)}catch(_){console.error("Error saving environment:",_),alert("Failed to save environment variables: "+_),w.disabled=!1,w.textContent="Save"}})};function kr(t,e=[],n=[]){return`
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
                                    <input type="checkbox" class="selected-menu-page" data-page-id="${a.id}" ${n.find(i=>Number(i.page)==a.id)?" checked ":""} />
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
                <a href="https://preview-${t}.develop.freeschema.com">
                  <b><i>https://preview-${t}.develop.freeschema.com</i></b>
                </a>
              </p>
              <p>To Add a custom domain assign A record for your domain ==>  A record (107.209.91.179) and in txt record add the link with @ in hostname and value <a href="preview-${t}.develop.freeschema.com">preview-${t}.develop.freeschema.com</a>
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

    `}const Mr=async t=>{if(!t){console.log("Project id is required");return}const e=new cn;let[n,a]=await Promise.all([e.getProjectById(t),Ya(t)]);console.log("project detail",n),console.log("abc menus ",a);const i=n?.data?.the_project?.the_project_main_page?.[0]?.id??0,o=n?.data?.the_project?.the_project_s_page?.map(u=>({id:u.id,name:u?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:u?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:u?.id==i}))??[];console.log("pages",o),document.getElementById("project-setting-dialog")?.remove();const r=document.createElement("dialog");r.setAttribute("id","project-setting-dialog"),r.classList.add("col-md-8"),r.style.flexDirection="column",r.innerHTML=kr(t,o),document.querySelector("body #app")?.appendChild(r),await de("project-setting-dialog"),document.querySelectorAll(".accordion-header").forEach(u=>{u.addEventListener("click",async()=>{u.classList.toggle("active");const c=u.getAttribute("id");if(u.classList.contains("active"))switch(c){case"domain-viewer-btn":const g=document.getElementById("custom-domain-view-holder"),m=await Ra(t,"the_project_custom_url");g&&je(102462726,g,{projectId:t,storeUrl:`https://preview-${t}.develop.freeschema.com`,customUrl:m?.[0]?.data?.the_custom_url||""});break}else switch(c){case"domain-viewer-btn":const g=document.getElementById("custom-domain-view-holder");g&&(g.innerHTML="");break}})}),lt(a);const l=document.getElementById("save-menu-items");l?.addEventListener("click",async u=>{l&&(l.disabled=!0),console.log("menus save",a),a=a.map(g=>(delete g.edit,g)),console.log("menus filtered save",a),u.target.disable=!0;const c=await xo(t,a);console.log("menu created",c),u.target.disable=!1,lt(a),alert("Updated Menu"),l&&(l.disabled=!1),Ai(t)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",u=>{const c=u.target.closest(".custom-menu-item"),g=c?.querySelector("#nameElem"),m=c?.querySelector("#linkElem"),p=c?.querySelector("#actionElem"),h=c?.querySelector("#authElem");if(!g.value){alert("Menu Name is required");return}if(!m.value&&!p.value){alert("Link or Action is required");return}a.push({name:g.value??"",link:m.value??"",action:p.value??"",page:"",order:a.length,auth:!!h.checked,menus:[]}),g.value="",m.value="",p.value="",h.checked=!1,lt(a)}),window.handleMenuAction=(u,c,g,m)=>{if(c=="remove")if(m){const p=document.getElementsByClassName("selected-menu-page");for(let h=0;h<p.length;h++){const w=p[h];Number(w.getAttribute("data-page-id"))==m&&w?.checked&&w.click()}}else a.splice(g,1)[0];else if(c=="edit")a[g].edit=!0;else if(c=="cancel")a[g].edit=!1;else if(c=="update"){a[g].edit=!1;const p=u?.target?.closest("li"),h=p?.querySelector("#menuName").value??"",w=p?.querySelector("#menuLink").value??"",_=p?.querySelector("#menuAction").value??"",L=!!p?.querySelector("#menuAuth").checked;a[g].name=h,a[g].link=w,a[g].action=_,a[g].auth=L}else if(c=="up"){const p=a.splice(g,1)[0];a.splice(g-1,0,p),a=a.map((h,w)=>({...h,order:w}))}else if(c=="down"){const p=a.splice(g,1)[0];a.splice(g+1,0,p),a=a.map((h,w)=>({...h,order:w}))}else console.warn("unacceptable action ",c);lt(a)},document.querySelectorAll(".selected-menu-page").forEach(u=>{u.addEventListener("change",c=>{console.log("e.target.changed",c.currentTarget.checked);const g=parseInt(c.currentTarget.getAttribute("data-page-id"));if(c.currentTarget.checked){const m=o.find(p=>p.id==g);console.log("pages",m,o),a.push({name:m.name??"",link:m.slug??"",action:"",page:m.id??"",order:a.length,auth:!1,menus:[]})}else{const m=(p,h)=>{for(let w=0;w<p.length;w++){const _=p[w];_.menus&&_.menus.length>0&&(_.menus=m(_.menus,h))}return p.filter(w=>w.page!=h)};a=m(a,g)}lt(a)})}),document.getElementById("open-environment-editor-btn")?.addEventListener("click",()=>{xr(t)})},Ai=t=>{const e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");const n=new URLSearchParams;n.append("invalidDomain","www.sleepinghats.com"),n.append("projectId",`${t}`);const a={method:"POST",headers:e,body:n,redirect:"follow"};fetch(`${z.deployURL}/api/project-deploy/invalidate`,a).then(i=>i.text()).then(i=>console.log("result -->",i)).catch(i=>console.error(i))};class Wi{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new Li,this._projectsTSCCSService=new cn,this._pagesTSCCSService=new Qe}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),n=document.getElementById("saved-project-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-project-button");a?.removeEventListener("click",this.createProjectHandler),a?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(r=>{r.removeEventListener("click",this.getProjectPagesListHandler),r.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(r=>{r.removeEventListener("click",this.addPageToProjectHandler),r.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(r=>{r.removeEventListener("click",this.deleteProjectHandler),r.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=yr,window.showProjectSetting=Mr,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{Ot({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,n)=>{try{const o=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",o,n),await D.SyncDataOnline(),this.initProjectsSidebar()}catch(a){console.error("Failed to rename project:",a)}};getProjectPagesListHandler=async e=>{const n=e.target.dataset.projectid,a=e.target.parentElement.querySelector(".project-pages-list");if(a){if(!a.classList.contains("d-none")){a.classList.add("d-none");return}a.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,a.classList.remove("d-none");const i=await this._projectsHTMLService.getProjectPagesListHTML(n);a.innerHTML=i}};deleteProjectHandler=async e=>{try{let n=e.target.dataset.projectid;n||(n=e.target.parentElement.dataset.projectid),await It("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(n),await D.SyncDataOnline(),A.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(n){console.error("Failed to delete project:",n),A.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,n)=>{try{let a=e.target.parentElement.parentElement.dataset.projectid;await It("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(a,n),await D.SyncDataOnline(),this.initProjectsSidebar())}catch(a){console.error("Failed to delete page from project:",a)}};setMainPageHandler=async(e,n)=>{e.preventDefault(),e.stopPropagation();try{let a=e.target.closest(".project-page-item").dataset.projectid;A.infoMessageToast("Setting page as main page...",0);const i=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(a,n),await D.SyncDataOnline();const o=await this._projectsHTMLService.getProjectPagesListHTML(a),s=e.target.closest(".project-pages-list");s&&(s.innerHTML=o,s.classList.remove("d-none")),i?.remove(),A.successfullToast("Main page set successfully!")}catch(a){console.error("Failed to set main page:",a),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),Ot({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const n=e.target.previousElementSibling.dataset.projectid,i=(await this._projectsTSCCSService.getProjectById(n))?.data?.the_project?.[`the_project_${se.PROJECT_PAGE_LINKER}`];let o=i?i.map(r=>({id:r.id,title:r?.data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const s=document.getElementById("add-pages-project");await this.addPageToProject(s,!1,n,o)}catch(n){console.error("Failed to add page to project:",n)}};addPageToProject=async(e,n,a,i=[])=>{try{const o=await this._pagesTSCCSService.getAllPages(),s=o?o.map(m=>({id:m.id,title:m?.data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const r=e.querySelector("#selectedItems"),l=e.querySelector("#options"),d=(m="")=>{if(!s.length){l.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let p=s.filter(h=>h.title.toLowerCase().includes(m.toLowerCase()));u(),l.innerHTML=p.length?p.map(h=>`
            <li class="option" data-value="${h.id}">
              <input type="checkbox" id="page-${h.id}" ${i?.some(w=>w.id.toString()===h.id.toString())?"checked":""} />
              <span>${h.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},u=()=>{i&&i.length?r.innerHTML=i.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):r.innerHTML="<span>No pages selected!</span>"},c=(m,p)=>{i.push({id:m,title:p}),u()},g=m=>{i=i.filter(p=>p.id.toString()!==m.toString()),u()};r.addEventListener("click",m=>{const p=m.target;if(p.classList.contains("remove-item")){const h=p.closest(".selected-page");h&&g(h.dataset.value)}}),l.addEventListener("click",m=>{const p=m.target.closest(".option");if(!p)return;const h=p.querySelector("input[type='checkbox']");h&&(m.target!==h&&(h.checked=!h.checked),h.checked?c(p.dataset.value,p.querySelector("span").textContent.trim()):g(p.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(n&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){A.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),p=e.querySelector("#closeModal");m.disabled=!0,p.disabled=!0;const h=m.textContent;m.textContent="Adding...",A.infoMessageToast("Adding pages to project...",0);try{const w=i.map(y=>Number(y.id));if(!w.length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}if(n){this.addPageToProjectHandler();const E=document.getElementById("create-project-form").elements,C=kn(E),b=await I(),S=await this._projectsTSCCSService.createProject(C,b?.userId,b?.entityId);await D.SyncDataOnline(),a=(await K(S.ghostId)).id}if(!a){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Project ID not found."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}await this._projectsTSCCSService.addPagesToProject(a,w);const _=await this._projectsHTMLService.getProjectPagesListHTML(a),T=document.getElementById(`dropdown-menu-${a}`)?.nextElementSibling;T&&(T.innerHTML=_,T.classList.remove("d-none")),Ai(a),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to add pages to prjects"),m.disabled=!1,p.disabled=!1,p.textContent=h}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const p=m.target;d(p.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{d()}),u()}catch(o){console.error("Failed to add page to project:",o)}}}const Lt=(()=>{const t=()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})};return{toggle:s=>{const r=s.target,l=r?.dataset?.id;if(r.classList.contains("activeNavigationIcon")){t();return}if(l){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const c=document.getElementById(l);document.querySelector(`[data-id='${l}']`)?.classList.add("activeNavigationIcon"),c?.classList.add("navActive"),l=="fs-all-pages-list"&&new ta().initPagesSidebar(),l=="fs-all-projects-list"&&new Wi().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})},checkForActiveNavigation:()=>{const s=document.querySelector(".activeNavigationIcon");if(s){const r=s.dataset?.id||"";document.getElementById(r)?.classList.remove("navActive")}},resetNavigationBar:t,disableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="none",s.style.pointerEvents="none",s.style.opacity="0"},enableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="block",s.style.pointerEvents="all",s.style.opacity="1"}}})(),ht=(()=>{const t=()=>{const i=document.querySelector("#profileDropdown");if(i.style.display&&i.style.display=="block"){e();return}i?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:t,closeUserActionModel:e,disableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="none",i.style.pointerEvents="none",i.style.opacity="0"},enableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="flex",i.style.pointerEvents="all",i.style.opacity="1"}}})(),A=(()=>{let t=0;const e=()=>{const l=document.createElement("span");return l.innerText="close",l.classList.add("material-symbols-outlined"),l.classList.add("crossButtonToast"),l.addEventListener("click",d=>{d.target instanceof HTMLElement&&d.target.parentNode instanceof HTMLElement&&console.log(d.target.parentNode.remove())}),l},n=l=>{const d=document.querySelector("#toasterContainer");d.style.display="flex";const u=document.createElement("div");u.classList.add("successFullToast");const c=document.createElement("span");c.classList.add("material-symbols-outlined"),c.innerText="check_circle";const g=document.createElement("span");g.innerText=l,u.appendChild(c),u.appendChild(g),u.appendChild(e()),d.appendChild(u),t=t+.5,o(u)},a=(l,d=1)=>{t=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("infoMessageToast","bg-info");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="info";const m=document.createElement("span");m.innerText=l,c.appendChild(g),c.appendChild(m),c.appendChild(e()),u.appendChild(c),d!=0&&(t=t+.5+(d||0),o(c))},i=(l,d)=>{t=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("failureToast");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="error";const m=document.createElement("span");m.innerText=l,c.appendChild(g),c.appendChild(m),c.appendChild(e()),u.appendChild(c),t=t+.5+(d||0),o(c)},o=l=>{l.style.animation=`animateToastMessage ${2+t}s forwards`,l.addEventListener("animationend",()=>{l.remove();const d=document.querySelector("#toasterContainer");d.innerHTML||(t=0,d.style.display="none")}),l.addEventListener("mouseenter",()=>{s()}),l.addEventListener("mouseleave",()=>{r()})},s=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="paused"})},r=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="running"})};return{successfullToast:n,infoMessageToast:a,errorToast:i}})();async function De(){const t=await I(),e=t?.entityId,n=t?.token,a=t?.userId,i=t?.userConcept,s=(await K(e)).typeCharacter;let r=!1,l;const d=new P;d.conceptIds=[e],d.selectors=["the_entity_user"],d.outputFormat=ce,d.inpage=100,await ge(d,n)?.subscribe(g=>{l=g});const u=l?.[0]?.data?.the_entity?.the_entity_user?.id;if(Number(u)===Number(i)&&(r=(await K(i))?.userId===a),!r||!s||s!=="the_entity"||!n||n.trim()===""||!a)throw setTimeout(()=>Me(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function Ir(t){try{const e=await Be(t,"the_entity_s_widget",!0);e.length?await Pe(e[0].id):A.errorToast("already deleted")}catch(e){console.error(e)}}async function na(t,e="Error"){console.error(t);const n=t;n&&(A.errorToast(n?.message?n.message:e),n.status===401&&Me())}let fe=[],xe=Un;async function aa(t){const e=document.getElementById("selected_attr_list"),n=document.querySelector(".row.attribute_single");fe=[],xe=Un,e&&(e.innerHTML=""),n?.remove(),await be(t),t==="update-element-dialog"&&document.getElementById(t)?.remove()}async function Mc(t,e){if(t.preventDefault(),!(await Ee.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(t.target),i=Object.fromEntries(a),o=t.target.querySelector("[name='name']"),s=t.target.querySelector("[name='tag']");let r=!0;if(i?.name?.trim()?o.style.border="":(r=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),i?.tag?.trim()?s.style.border="":(r=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),!r)return;const d=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');d.textContent="Creating...";const u=t?.target;for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!0;const c=await xi(a,null);for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!1;await be(e);const g=await un();if(c){const m=document.getElementById("created-elements");m?!g||g.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=g||"":console.error("Widget list container not found in the DOM.")}return c}async function xi(t,e){const n=Object.fromEntries(t);delete n.attributes;const i=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let o=[];if(i.forEach(s=>{const r=s?.textContent?.split(" "),l=r[0],d=r[1].substr(1,r[1].length-7);let u="";switch(l){case"method":u="get,post,dialog";break;case"target":u="_blank,_self,_parent,_top";break;case"type":n?.tag==="button"?u="button,submit,reset":n?.tag==="input"&&(u="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":u="soft,hard";break}o.push({name:l,type:d,value:u})}),o=[...xn,...o],e){const s=await ua(e),r=s?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,l=new Set(xn.map(m=>m.name)),d=s?.attributes?.filter(m=>m?.division!=="inline"&&!l.has(m?.name)&&m?.name!=="elementContent"),u=new Set(fe.map(m=>m.name)),c=d?.filter(m=>!u.has(m?.name));if(c?.length){const m=await Promise.all(c?.map(async p=>await Le(p?.id)));console.log("deletedResponse ->",m)}let g=[{the_element_name:{name:n?.name}},{the_element_tag:{tag:n?.tag}},{the_element_void:{void:n?.void}},{the_element_icon:{icon:n?.icon.toString()}},{the_element_default:{default:n?.default}},{the_element_division:{division:n?.division}},{the_element_s_attribute:fe}];return await Promise.all(g.map(async m=>await Promise.all(Object.entries(m).map(async([p,h])=>{const w=Object.keys(h)[0],_=h[w]||"";if(p==="the_element_s_attribute"){const L=await O(e);if(h?.length){const T=h.filter(v=>!v?.id);await Promise.all(T.map(async v=>{const y=await V("attribute",999,v);return await q(L,y,"s_attribute")}))}}else await et(e,p,w,_,999);if(p==="the_element_default"&&w==="default"&&r){const T=(await I())?.userId;await et(r,"the_attribute_value","value",_,T)}return"x"})))),await D.SyncDataOnline(),A.successfullToast("The element updated successfully"),e}else{const s=o;n?.void&&s.unshift({name:"elementContent",type:"string",value:""});const r=await V("element",999,n);return await Promise.all(s.map(async l=>{const d=await V("attribute",999,l);return await q(r,d,"s_attribute")})),await D.SyncDataOnline(),A.successfullToast("The element created successfully"),r}}function Pr(){const t=document.querySelectorAll(".attribute_single");t?.length&&t.forEach(i=>{i?.remove()});let e=String(Date.now());const n=jr(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",n)}function ki(t){document.getElementById(t)?.remove()}async function $r(){const t=document.getElementById("select_the_attribute");let e=xe.filter(a=>a?.name==t?.value)[0];xe=xe.filter(a=>a?.name!=t?.value),fe.push(e);const n=t.closest(".attribute_single");n?.id&&ki(n.id),ia([])}function Br(t){let e=fe.filter(n=>n.name==t)[0];fe=fe.filter(n=>n.name!=t),xe.push(e),Yo(xe,"name","string"),ia([])}function ia(t){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(fe.length>0)fe.forEach(a=>{a.name!=="id"&&a.name!=="className"&&(e+=`<li>${a.name} (${a.type})`,e+=`<a onclick="removeSelectedAttribute('${a.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const a=t?.filter(o=>o?.division!=="inline"&&o.name!=="id"&&o.name!=="className"&&o.name!=="elementContent");fe=a;const i=new Set(fe.map(o=>o.name));xe=xe.filter(o=>!i?.has(o?.name)),a.map(function(o){e+=`<li>${o.name} (${o.type}) `,e+=`<a onclick="removeSelectedAttribute('${o.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const n=document.getElementById("element_attributes_entry");n&&(n.innerHTML=e)}function jr(t){let e='<select id="select_the_attribute" class="form-select">';return xe.forEach(n=>{e+=`<option value="${n?.name}">${n?.name}</option>`}),e+="</select>",`
      <div id="${t}_attribute" class="row attribute_single" >
          <div class="col-md-6">
              ${e}
          </div>
         <div class="col-md-4">
            <!-- <a class="add_attr attr_action" onclick="addAttribute(${t})"> -->
            <a class="add_attr attr_action" onclick="addAttribute()">
              <span class="material-symbols-outlined">
                check
              </span>
            </a>
            <a class="cancel_add_attr attr_action" onclick="cancelAttributeRow('${t}_attribute')">
              <span class="material-symbols-outlined">
                close
              </span>
            </a>
         </div>
      </div>
  `}async function Nr(t,e){if(t.preventDefault(),!(await Ee.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(t.target),i=Object.fromEntries(a);console.log(i,"update formValues");const o=await xi(a,e);await aa("update-element-dialog");const s=await un();if(o){const r=document.getElementById("created-elements");r?!s||s.trim()===""?r.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:r.innerHTML=s||"":console.error("Widget list container not found in the DOM.")}return o}class Dr{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const n=await ua(e);this.singleElement=n,this.createElemenModaltHTML=this.getHtml(),n&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await ia(this.singleElement.attributes))}getHtml(){return window.updateNewElement=Nr,window.closeElementModal=aa,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
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
      </dialog>`}}class Hr{createElemenModaltHTML;constructor(){window._dragService=Ks,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=Pr,window.cancelAttributeRow=ki,window.addAttribute=$r,window.removeSelectedAttribute=Br,window.closeElementModal=aa,`
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
    `}}async function de(t){document.getElementById(t).showModal()}async function be(t){const e=document.getElementById(t);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function Mi(t,e){t?.stopPropagation();const n=document.getElementById(`menu-${e}`),a=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),n&&!a&&n.classList.add("show")}async function Ic(t){new Hr,await de(t)}async function Pc(t,e,n){t.stopPropagation(),console.log("modalId",e),Mi(t,Number(n)),new Dr(n)}async function $c(t,e){Mi(t,e),confirm("Are you sure you want to delete the element?")&&(await Le(e),A.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const a=await un(),i=document.getElementById("created-elements");i?!a||a.trim()===""?i.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:i.innerHTML=a||"":console.error("Elements list container not found in the DOM.")}async function oa(){Pt(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(e),de("save-widget-dialog"),new Promise((n,a)=>{const i=e.querySelector("#save-widget-form");i.onsubmit=async s=>{s.preventDefault();try{const r=new FormData(i),d=Object.fromEntries(r).widgetName,u=s.target;if(!d?.trim()){const c=u.querySelector("#widgetName");c?.focus(),c.style.border="2px solid red",c.style.outline="none",c.addEventListener("input",()=>{c.style.border=""});return}await Ii(s,d),be("save-widget-dialog"),n("Widget saved successfully")}catch(r){console.error("Error saving widget:",r),a("Error saving widget")}};const o=e.querySelector("button[type='button']");o.onclick=()=>{be("save-widget-dialog"),n("Widget saving canceled")}})}async function Ii(t,e){t.preventDefault();try{A.infoMessageToast("Saving Widget...",0),await De();const n=document.getElementById("save-widget-dialog"),a=n?.querySelector('button[type="submit"]');a.textContent="Saving";const i=n?.querySelector("input"),o=n?.querySelectorAll("button");o&&o.forEach(c=>{c.disabled=!0}),i&&(i.disabled=!0),await st(),R.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async c=>{if(c.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[c.id]){const g=await Ae(c,"div.mftsccs-marking-element");f.editedWidgets[c.id].html=g.innerHTML}});const r=await Pi();f.staticWidgetTree.html=r;const l=await f.saveWidget(e),d=await K(l.id);be("save-widget-dialog"),an(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),await N.renderSavedWidgets(),ze(t,d.id);return}catch(n){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),na(n,"There is an error on saving widget")}}async function sa(t,e,n){const a=document.getElementById("update-publish-widget-btn");try{const i=document.getElementById("update-widget-btn");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating...",A.infoMessageToast("Updating Widget...",0)),await st(),R.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async d=>{if(d.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[d.id]){const u=await Ae(d,"div.mftsccs-marking-element");f.editedWidgets[d.id].html=u.innerHTML}});const s=await Rr();f.staticWidgetTree.html=s,await f.updateWidget(),an(),we(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Updated Successfully"),await N.renderSavedWidgets(),await N.renderBoomWidgets();const l=document.getElementById("widget-builder");l.textContent="Widget Builder Panel",await ze(t,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),n&&n===!0&&await f.publish();return}catch(i){document.querySelector(".infoMessageToast")?.remove();const s=document.getElementById("update-widget-btn");s&&(s.classList.remove("disabled"),s.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),i instanceof Error&&A.errorToast(i.message)}finally{a&&a.classList.remove("disabled")}}async function Oe(t,e){const n=document.querySelector(".widgetStyle");n.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(d=>{d.textContent=""});const i=document.getElementById("publish-widget");i&&(i.style.display="none",i.disabled=!0);const o=document.querySelector(".content-target"),s=window.location.href,l=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(o){let d=!1;d=await f.hasWidgetChanged(Number(l));const c=document.getElementById("preview-btn").classList.value.includes("active");if((t?.target?.id==="preview-btn"||t?.target?.id==="save-widget-form"||t?.target?.id==="update-widget-btn"||t?.target?.id==="form-folder-modal"||t?.target?.id==="data-file-id")&&(d=!1),c&&(d=!1),d&&!e){await It("Do you want to save changes?")&&(s.includes("?page-id=")?l?await ea(t,Number(l)):await Xn(t):l?await sa(t,Number(l)):await oa()),an();const p=document.getElementById("preview-btn");p.classList.remove("active"),p.removeAttribute("data-widgetid")}await _s()}o.innerHTML="",Ci(),t&&!e&&xt("/")}let _n="";async function qr(t){const e=document.getElementById("preview-btn"),n=e.classList.value.includes("active");let a=t.target.getAttribute("data-widgetid");a&&xt(`?widget-id=${a}`);const i=document.querySelector(".content-target"),o=document.querySelector(".midContent .content"),s={...f.widgetTree},r=document.getElementById("undo-btn"),l=document.getElementById("redo-btn"),d=document.getElementById("ai-prompt-btn"),u=document.getElementById("widget-prompt-modal"),c=document.getElementById("widget-prompt-tab"),g=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(n){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,d.style.display="flex",_n&&_n!=="none"?(c.classList.add("d-none"),u.classList.remove("d-none"),u.classList.add("d-flex")):(c?.classList.remove("d-none"),u&&u.classList.add("d-none")),e.classList.remove("active"),r.classList.remove("d-none"),l.classList.remove("d-none"),m&&(m.style.display="block"),g&&(g.style.display="none"),i&&(i.style.width="100%",i.style.maxWidth="",i.style.margin="0 auto",i.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),i.classList.add("mode-desktop"));const p=Jn(),h=await Ce(f.widgetTree,p,!0,void 0,!0);X(f.widgetTree,!1,h,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),o.classList.remove("preview"),pe(),we(),ht.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,d.style.display="none",u&&(_n=window.getComputedStyle(u).display,u.classList.add("d-none")),c&&c.classList.add("d-none");const p=document.getElementById("select-box"),h=document.getElementById("element-info");p.style.display="none",h.style.display="none",r.classList.add("d-none"),l.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none");const w=await Ce(f.widgetTree,i,!0,void 0,!1);X(s,!1,w),document.getElementById("column-left").classList.add("d-none");const L=document.createElement("script");L.setAttribute("type","text/javascript"),L.innerHTML=s?.js,i.appendChild(L),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),ht.disableHeader(),pt.closeCodeView(),o.classList.add("preview");const y=document.querySelector("header.wico_top-header");y.style.display="none"}return"PREVIEW WIDGET"}async function Ae(t,e){return t.querySelectorAll(e).forEach(a=>{for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.remove()}),t}async function Or(t,e){t.preventDefault();try{const n=new FormData(t.target),i=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');i.textContent="Converting...";const o=t.target;for(let s=0,r=o.length;s<r;++s)o[s].disabled=!0;await Fr(n);for(let s=0,r=o.length;s<r;++s)o[s].disabled=!1;return await be(e),"completed conversion"}catch{A.errorToast("html conversion failed"),await be(e)}}async function Fr(t){const e=Object.fromEntries(t),n=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,a=await qo(n,e?.cssCode?.toString(),e?.jsCode.toString()),o=(await I())?.token,r=(await Do(a?.id,o))?.id,{html:l,css:d,js:u}=await $o(r,o);await Qt(r);const c=document.querySelector(".content-target");c.innerHTML=l;const g=document.querySelector('.cm-content[data-language="css"]');g.textContent=d;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=u,"converted widget"}async function Vr(t){return new Er().init(),de(t),"opened convert HTML to Widget!"}async function it(t,e){return new Promise(async(n,a)=>{try{let i=new G;i.composition=t,i.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function","the_widget_dependency"],i.inpage=100;let o=new G;o.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],o.inpage=100;const r=await ve([i,o],e);n(r)}catch(i){console.error("error",i),i?.status===401&&Me(),a(i)}})}async function Rr(){R.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target"),e=t.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(s=>{s.classList.replace("edited-widget-container","added-widget-container")});const n=await Ae(t,"div.mftsccs-marking-element");return t?.querySelector("#widget-details")?.remove(),(t?.querySelectorAll(".mftsccs-marking-rendered")).forEach(s=>{s.remove()}),n.innerHTML.trim()}async function Pi(){R.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target"),e=await Ae(t,"div.mftsccs-marking-element");return t?.querySelector(".widget_selected")?.classList.remove("widget_selected"),t?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function Xe(){const t=document.querySelector(".content-target");t?.querySelector("#widget-details")?.remove();const n=await Ae(t,"div.mftsccs-marking-element");return t?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n.innerHTML.trim()}async function vt(){R.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target")?.cloneNode(!0);t?.querySelector("#widget-details")?.remove();const a=(await Ae(t,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),a}async function Ft(t){R.staticElement?.removeAttribute("draggable");const e=document.getElementById(t)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const i=(await Ae(e,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),i}const Ur=["image/jpeg","image/jpg","image/png","image/webp"],zr=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],$i=async t=>{try{const e=new FormData;let n;if(zr.includes(t.type))e.append("file",t,t.name),n=await Gr(e);else if(Ur.includes(t.type))e.append("image",t,t.name),n=await Jr(e);else return{message:"Invalid File Format",success:!1};return n?.data?{message:"Upload Success",success:!0,url:n.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},Jr=async(t,e="")=>{try{const n=await fetch(z.boomURL+"/api/Image/UploadImage",{method:"POST",body:t,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const a=n.headers.get("content-type");a&&a.includes("text/plain")&&console.info(n?.text());const i=await n?.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}},Gr=async(t,e="")=>{try{const n=await fetch(z.boomURL+"/api/Image/UploadFile",{method:"POST",body:t,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const a=n.headers.get("content-type");a&&a.includes("text/plain")&&console.info(n.text());const i=await n.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}};async function Qr(t=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const n=await Ua("public_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_public_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let o=new P;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new P;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new P;r.typeConnection="the_public_widget_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new P;if(l.conceptIds=[n.id],l.outputFormat=ce,l.name="top",l.freeschemaQueries=[r],t!=""){let d=new Ve;d.name="filterName",d.search=t,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let u=new Ve;u.name="filterPublicName",u.search=t,u.type="the_public_name",u.operateon="widgetPName",u.logicoperator="like",l.filters=[d,u],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{ge(l,"").subscribe(u=>{d(u)})})}catch(e){throw e}}async function Yr(t=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const n=await Ua("folder_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_folder_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let o=new P;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new P;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new P;r.typeConnection="the_folder_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new P;if(l.conceptIds=[n.id],l.outputFormat=ce,l.name="top",l.freeschemaQueries=[r],t!=""){let d=new Ve;d.name="filterName",d.search=t,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let u=new Ve;u.name="filterFolderName",u.search=t,u.type="the_folder_name",u.operateon="widgetPName",u.logicoperator="like",l.filters=[d,u],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{ge(l,"").subscribe(u=>{d(u)})})}catch(e){throw e}}class ot{static staticElementList}async function Kr(t,e){const n=t?.target?.value,a=await I(),i=a?.userId,o=a?.token,s=await K(e),d=(await it(e,o))?.data?.the_widget?.the_widget_before_render?.[0]?.id;d&&await Le(d);const u=await Z("before_render",n,!1,i,4,999);await q(s,u,"before_render"),await D.SyncDataOnline(),new Si().before_render()}async function Zr(t,e){console.log("updateWidgetUpdate event",t),console.log("widgetId",e)}async function Xr(t,e){const n=t?.target?.value,a=await I(),i=a?.userId,o=a?.token,s=await K(e),d=(await it(e,o))?.data?.the_widget?.the_widget_after_render?.[0]?.id;d&&await Le(d);const u=await Z("after_render",n,!1,i,4,999);await q(s,u,"after_render"),await D.SyncDataOnline();const g=document.getElementById("mountInput")?.value,p=document.getElementById("mountChildWidgetsInput")?.value,h=new Et;h.componentDidMountFunction=g,h.addEventFunction=n,h.mountChildWidgetsFunction=p;const w=document.querySelector(".content-target"),_=await h.mount(w);console.log("appContentHTML",_)}async function el(t,e){const n=t?.target?.value,a=await I(),i=a?.userId,o=a?.token,s=await K(e),d=(await it(e,o))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;d&&await Le(d);const u=await Z("mount_child",n,!1,i,4,999);await q(s,u,"mount_child"),await D.SyncDataOnline()}class tl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=ol,`
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
    `}}class nl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return`
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
    `}}async function al(t,e){const n=document.getElementById("documentation-view");await je(z.documentation_preview_widget,n,{currentWidgetId:e})}let ft,En="",Bn,jn;async function il(t,e){Bn=t,e==="preview"?new nl:new tl;const n=new P;n.typeConnection="the_widget_documentation",n.name="documentationText",n.selectors=["the_documentation_text"];const a=new P;a.typeConnection="the_widget_s_documentation",a.name="documentationBlank",a.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const i=new P;i.typeConnection="the_documentation_s_json_list",i.name="documentationJSON",i.selectors=["the_json_list_key","the_json_list_value"],a.freeschemaQueries=[i];const o=new P;o.conceptIds=[Bn],o.freeschemaQueries=[n,a],o.inpage=100,o.outputFormat=ce,await ge(o,"").subscribe(async s=>{const r=s?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";r&&(En=r);const l=s?.[0]?.data?.the_widget?.the_widget_s_documentation;l?.length&&(En=l?.map(u=>{const c=u?.data?.the_documentation,g=c?.the_documentation_type?.data?.the_type,m=c?.the_documentation_content?.data?.the_content,p=c?.the_documentation_creator_email?.data?.the_creator_email,h=c?.the_documentation_doc_title?.data?.the_doc_title,w=c?.the_documentation_method?.data?.the_method,_=c?.the_documentation_method_url?.data?.the_method_url,L=c?.the_documentation_bearer_token?.data?.the_bearer_token,T=c?.the_documentation_username?.data?.the_username,v=c?.the_documentation_password?.data?.the_password,y=c?.the_documentation_auth_type?.data?.the_auth_type,E=c?.the_documentation_s_json_list,C=c?.the_documentation_api_script?.data?.the_api_script,b=c?.the_documentation_api_body?.data?.the_api_body,S=c?.the_documentation_language?.data?.the_language,W=c?.the_documentation_return?.data?.the_return,x=c?.the_documentation_code_editor?.data?.the_code_editor,M=c?.the_documentation_s_doc_url,$=c?.the_documentation_s_image_url,B=c?.the_documentation_s_video_link;let j={type:g,content:m,creatorEmail:p,title:h};if(g==="blank")j={...j};else if(g==="api"){const ae=[];E?.length&&E?.forEach(ee=>{ae.push({key:ee?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:ee?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),j={...j,method:w,methodURL:_,authType:y,username:T,password:v,bearerToken:L,json:ae,script:C,body:b}}else g==="function"&&(j={...j,language:S,return:W,codeEditor:x});const U=[],ne=[],re=[];return $?.length&&$?.forEach(ae=>{U.push(ae?.data?.the_image_url)}),B?.length&&B?.forEach(ae=>{ne.push(ae?.data?.the_video_link)}),M?.length&&M?.forEach(ae=>{re.push(ae.data?.the_doc_url)}),j={...j,imageList:U,linkList:re,videoList:ne},j})),jn=s?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&sl(r)}),e==="preview"?(await de("widget-documentation-preview-modal"),al(En,t)):await de("widget-documentation-modal")}async function ol(){if(ft){const t=ft.getData(),e=await O(Bn),a=(await I())?.userId;if(jn)await et(jn,"the_documentation_text","text",t,a),await D.SyncDataOnline();else{const i=await V("documentation",a,{text:t});await Q(e,i,"documentation"),await D.SyncDataOnline()}A.successfullToast("Documentation is saved."),ft.setData(t)}else console.error("Editor not initialized"),A.errorToast("Documentation couldn't saved.")}function sl(t){const e=document.querySelector("#documentation-editor");e&&_o.create(e,{licenseKey:"GPL"}).then(n=>{ft=n;const a=t;ft.setData(a)}).catch(n=>{console.error("Error initializing CKEditor:",n)})}class rl{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",n=>{if(n.target.matches(".btn-tour")){const a=n.target.dataset.tourStatus;this.startTour(a)}})}startTour(e){const n=new yo.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),a=[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Next",action:n.next}];n.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:n.complete},{text:"Next",classes:"next-button",action:()=>{n.next()}}]}),n.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".wico_header-section",on:"bottom-start"},buttons:a}),n.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:a}),n.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:a}),n.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const i=document.querySelector("#tab-container .tab button:nth-child(2)"),o=new Event("click",{bubbles:!0,cancelable:!0});return i.dispatchEvent(o),".right-aside"},on:"left"},buttons:a}),n.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:a}),n.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:a}),n.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Finish",action:()=>{n.complete(),e||this.updateTourStatus()}}]}),n.start()}async updateTourStatus(){this.closeTour();const e=await I(),n=e?.userId,a=e?.entityId,i=await O(a),o=new Vn;try{await o.initialize();const s=await o.MakeTheInstanceConceptLocal("the_tour_status","true",!1,n,4,999);await o.CreateConnectionBetweenEntityLocal(i,s,"tour_status"),await o.commitTransaction()}catch{o.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}async function ll(t){console.log("event",t),console.log("event.target",t.target);const e=t?.target?.getAttribute("data-pubwidid");console.log("widgetId -->",e);const n=prompt("What would you like to name this forked widget?");if(!n||!n.trim())return;const a=Number(t.target.dataset.pubwidid);if(a){A.infoMessageToast("Forking widget...",0);try{const i=document.querySelector(".infoMessageToast"),o=await le(a);f.widgetTree=o;const s=await f.saveWidget(n),r=await K(s.id);console.log("forkedWidget",r);const l=await O(e);await Q(l,s,"s_fork"),await D.SyncDataOnline(),await N.renderSavedWidgets(),await N.renderBoomWidgets(),i?.remove(),A.successfullToast("Widget forked cuccessfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}}class cl{_layoutWidgetHTMLService=new vi;_pagesHTMLService=new oi;_projectsService=new Wi;_projectsHTMLService=new Li;_pagesService=new ta;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await Ee.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,n={openRenameWidgetModal:vl,renameWidget:ji,loadWidget:ze,deleteWidget:pl,postWidget:hl,forkWidget:ll,saveFromPublic:N.saveFromPublic,removeFromTemplate:N.removeFromTemplate,downloadPage:hr,downloadWebpage:mr,updateWidgetMount:Kr,updateWidgetUpdate:Zr,updateWidgetEvents:Xr,updateMountChildWidgets:el,navbarFunctions:Lt,DeleteConceptById:Le,uploadAssetsFile:bl,removeAssetFile:_l,clearSearch:El,toggleClearButton:Ni,toggleDropdown:dl,openDocumentationModal:il,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:a=>this.searchWidgets(a,"#saved-widget-list-container"),searchElements:a=>this.searchWidgets(a,"#created-elements"),searchPublicWidgets:a=>this.searchPublicWidgets(a),searchPages:a=>this.searchWidgets(a,"#saved-page-list-container"),searchProjects:a=>this.searchWidgets(a,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:a=>this.searchWidgets(a),switchLayoutType:a=>{const i=a.target,o=document.getElementById("fslayout-template-container"),s=document.getElementById("fslayout-list-container");i.value==="custom"?(s?.style.setProperty("display","flex"),o?.style.setProperty("display","none")):(s?.style.setProperty("display","none"),o?.style.setProperty("display","flex"))}};Object.assign(e,n)}async setupAssetListener(){const e=await I(),n=new P;n.typeConnection="the_entity_s_asset",n.name="itemname";const a=new P;a.conceptIds=[e.entityId],a.freeschemaQueries=[n],a.outputFormat=ce,a.inpage=100,ge(a,"").subscribe(i=>{const o=i?.[0]?.data?.the_entity?.the_entity_s_asset,s=this.generateAssetHTML(o),r=document.getElementById("assets-library-list-container");r&&(r.innerHTML=s)})}generateAssetHTML(e){return e?.length?e.map(n=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${n.id})" /></span>
                    <img class="asset-img" src="${n?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${n?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,n){n||(n=`#${e.target?.dataset?.id}`||"");const i=e.target.value.toLowerCase();document.querySelectorAll(`${n} li`).forEach(s=>{const r=(s.textContent||"").toLowerCase();s.style.display=r.includes(i)?"":"none"})}searchPublicWidgets(e){const a=e.target.value.toLowerCase();Dn(a).then(i=>{Mn.navbar.setPublicWidgets(i),this.updatePopupMenu("publicWidgets",i)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(n),un().then(a=>{this._elemensHtml=a;const i=document.getElementById("created-elements");i&&(i.innerHTML=a||"")}),Nn().then(a=>{this._savedWidgetsHtml=a;const i=document.getElementById("saved-widget-list-container");i&&(i.innerHTML=a||"")}),Dn().then(a=>{this._publicWidgetsHtml=a;const i=document.getElementById("public-widget-list-container");i&&(i.innerHTML=a||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const n=document.createElement("nav");n.className="sidebar sidebar-collapsed";let a=!0;const i=()=>{a=!a,n.classList.toggle("sidebar-collapsed",a),a||(this.removeSubSidebar(),this.removeActiveClass())};return n.appendChild(this.createSidebarHeader(i)),n.appendChild(this.createSidebarMenu(e.mainItems)),n.appendChild(this.createSection("Widgets")),n.appendChild(this.createSidebarMenu(e.widgetItems)),n.appendChild(this.createSection("Library")),n.appendChild(this.createSidebarMenu(e.libraryItems)),n.appendChild(this.createSection("Configuration")),n.appendChild(this.createSidebarMenu(e.configurationItems)),n}createSidebarHeader(e){const n=document.createElement("div");return n.className="menu-toggle",n.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,n.addEventListener("click",e),n}createSidebarMenu(e){const n=document.createElement("div");return n.className="sidebar-menu",e?.forEach(a=>n.appendChild(this.createMenuItem(a))),n}createMenuItem(e){const n=document.createElement("div");return n.id=e.id,n.onclick=a=>this.handleNavItemClick(a),e.id==="widget-tour"?(n.className="nav-item",n.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,n.onclick=()=>{new rl().startTour(this._loginDetailObject?.tourStatus)}):e?.link?n.innerHTML=`
                <router-link href="${e.link}" target="_blank" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(n.className="nav-item",n.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),n}createSection(e){const n=document.createElement("div");return n.className="sidebar-section",n.innerHTML=`<hr /><span class="section-title">${e}</span>`,n}async handleNavItemClick(e){const n=document.querySelector(".sidebar"),a=n?.classList.contains("sidebar-collapsed"),i=e.target.closest(".nav-item"),o=i?.id,s=i?.classList.contains("active"),r=i?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!o||s){this.removeSubSidebar();return}if(a){this.removeSubSidebar(),i?.classList.add("active");const l=await this.createSubSidebarMenu(o,r);if(document.querySelector("#column-left")?.appendChild(l),o==="folderWidgets"){const d=await I(),u=document.getElementById("folder-widget-container");await je(z.folder_widget,u,{showFiles:!0}).then(c=>{c.dataChange(async g=>{if(g.displayType==="photo"||g.type==="Image"||g.displayType==="widget"||g.type==="widget")await yi(e,g);else{let m=await Se(Number(g),d.token),p=await le(m?m.widgetId:Number(g));await ze(null,p.id)}})})}if(o==="assets"){const d=document.getElementById("default-list-container");await je(z.assets_widget,d)}}else n?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,n){if(e=="publicWidgets"){let a=document.querySelector("#public-widget-list-container");a&&(a.innerHTML=n)}if(e=="folderWidgets"){let a=document.querySelector("#folder-widget-container");a&&(a.innerHTML=n)}}async createSubSidebarMenu(e,n){const a=document.createElement("section");if(a.className="sub-sidebar",e==="layout")a.innerHTML=`
                <div class="sub-sidebar-header">
                    <span>${n}</span>
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
                    <span>${n}</span>
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
        </li>`,i="",o="";switch(e){case"elements":a=this._elemensHtml||a,i=this.generateSearchHtml("element-search","Search elements...","searchElements");break;case"savedWidgets":this._savedWidgetsHtml&&(a=this._savedWidgetsHtml),i=this.generateSearchHtml("myWidget-search","Search widgets...","searchMyWidgets");break;case"publicWidgets":a=this._publicWidgetsHtml||a,i=this.generateSearchHtml("publicWidget-search","Search public widgets...","searchPublicWidgets");break;case"pages":a=this._pagesHtml||a,i=this.generateSearchHtml("page-search","Search pages...","searchPages"),o=this.createNewHtml("fs-create-page-button",'<img src="./images/icons/add pages.svg" alt="" class="icon" />',"Create New Page");break;case"projects":a=this._projectsHtml||a,i=this.generateSearchHtml("project-search","Search projects...","searchProjects"),o=this.createNewHtml("fs-create-project-button",'<img src="./images/icons/add new projects icon.svg" alt="" class="icon" />',"Create New Project");break;case"layout":a=this._layoutsHtml||a;break;case"assets":a=`
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
        `}generateSearchHtml(e,n,a){return`
            <div class="search-widgets">
                <div class="search-input-wrapper">
                    <input type="text" id="${e}" 
                                 class="form-control" 
                                 placeholder="${n}" 
                                 onkeyup="${a}(event)" 
                                 oninput="toggleClearButton('${e}')">
                    <span id="${e}-clear" class="material-symbols-outlined" 
                                style="display:none;" 
                                onclick="clearSearch('${e}')">close</span>
                </div>
            </div>
        `}createNewHtml(e,n,a){return`<div class="create-new" id="${e}" >
                    <span class="create-new-icon" title="${a}">${n}</span>
                </div>`}getListId(e){return{elements:"created-elements",savedWidgets:"saved-widget-list-container",publicWidgets:"public-widget-list-container",folderWidgets:"folder-widget-container",pages:"saved-page-list-container",projects:"saved-project-list-container",layout:"fslayout-list-container"}[e]||"default-list-container"}removeActiveClass(){document.querySelector(".nav-item.active")?.classList.remove("active")}removeSubSidebar(){document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(e=>{e.remove()})}async getHtml(){const e={mainItems:[{id:"elements",icon:'<img src="./images/icons/elements.svg" alt="" class="icon" />',text:"Elements"},{id:"layout",icon:'<img src="./images/icons/layouts.svg" alt="" class="icon" />',text:"Layout"},{id:"assets",icon:'<img src="./images/icons/assets.svg" alt="" class="icon" />',text:"Assets"}],widgetItems:[{id:"savedWidgets",icon:'<img src="./images/icons/saved widgets.svg" alt="" class="icon" />',text:"Saved Widgets"},{id:"publicWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="" class="icon" />',text:"Public Widgets"},{id:"folderWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="" class="icon" />',text:"Public Widgets"}],libraryItems:[{id:"pages",icon:'<img src="./images/icons/pages.svg" alt="" class="icon" />',text:"Pages"},{id:"projects",icon:'<img src="./images/icons/projects.svg" alt="" class="icon" />',text:"Projects"}],configurationItems:[{id:"documentation",icon:'<img src="./images/icons/documentation.svg" alt="" class="icon" />',text:"Documentation",link:"/documentation"},{id:"tutorials",icon:'<img src="./images/icons/tutorials.svg" alt="" class="icon" />',text:"Tutorials",link:"/video-tutorial"},{id:"community",icon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="none">
                        <path d="M360-400c0 33 23.5 56.5 56.5 56.5T473-400c0-33-23.5-56.5-56.5-56.5T360-400Zm240 0c0 33 23.5 56.5 56.5 56.5T713-400c0-33-23.5-56.5-56.5-56.5T600-400ZM480-600c0 33 23.5 56.5 56.5 56.5T593-600c0-33-23.5-56.5-56.5-56.5T480-600ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" stroke="#AAAAAA" stroke-width="2" fill="none"/>
                    </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),n.outerHTML}}class Vt{static staticTabName}async function dl(t,e){t.stopPropagation();const n=document.getElementById(`dropdown-menu-${e}`),a=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),n&&!a&&n.classList.add("show")}document.addEventListener("click",t=>{document.querySelectorAll(".dropdown-menu").forEach(n=>{const a=t.target;a&&!n.contains(a)&&!a.closest(".dropdown-icon")&&n.classList.remove("show")})});async function bt(t,e){const n=document.getElementById(e),i=t.target.closest(".accordion-wrapper").querySelector("span");if(n){if(n.style.display==="block"||getComputedStyle(n).display==="block")n.style.display="none",i.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(n.style.display="block",i.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",n.tagName==="FORM"||n.id==="navigator-container"||n.id==="element-attributes"||n.id==="library-css"||n.id==="library-js"||n.id==="general-content"||n.id==="size-content"||n.id==="display-content"||n.id==="typography-content")return}}function ul(t){const e=document.getElementById(t);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function un(){const t=await Ee.getInstance().getLoginInfo(),e=await Bi();return ot.staticElementList=e,Array.isArray(e)?e?.map(a=>{const i=a?.id,o=a?.data?.the_element?.the_element_name?.[0]?.data?.the_name,s=a?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=a?.data?.the_element?.the_element_void?.[0]?.data?.the_void,l=a?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",d=a?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${o}">${t.isAdmin?`<a data-elementid="${i}" data-type="${s}" data-default="${l}" data-void="${r}" data-text="${o}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

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
          </a>`}</li>`}).join(""):""}async function Bi(){const t=z?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],n=new Headers;n.append("Content-Type","application/json");const i=await(await fetch(`${t}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:n,body:JSON.stringify(e),redirect:"follow"})).json();return i?.sort((o,s)=>{o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const r=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),l=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return r<l?-1:r>l?1:0}),i}async function Nn(){try{const t=await I();if(!t)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=t?.entityId;await De();const n=new Ve;n.type="the_public_widget",n.search="",n.operateon="public",n.name="publicfilter",n.logicoperator="=";const a=new P;a.typeConnection="the_public_widget_s_widget",a.freeschemaQueries=[],a.name="public",a.reverse=!0;const i=new P;i.typeConnection="the_widget_recent",i.name="copywidgets",i.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],i.freeschemaQueries=[a];const o=new P;o.typeConnection="the_entity_s_widget",o.name="mywidgets",o.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],o.freeschemaQueries=[i];const s=new P;return s.conceptIds=[e],s.freeschemaQueries=[o],s.inpage=100,s.outputFormat=ce,await new Promise((l,d)=>{ge(s,"").subscribe(async u=>{console.log("widget data pub",u);const c=u?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!c.length)return l(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(c.map(async p=>{const h=p?.data?.the_widget,w=h?.the_widget_name?.data?.the_name,_=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:h?.the_widget_html?.data?.the_html,L=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:h?.the_widget_css?.data?.the_css,T=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:h?.the_widget_js?.data?.the_js,v=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:h?.the_widget_timestamp?.data?.the_timestamp,y=!!h?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:p?.id,name:w,html:_,css:L,js:T,timestamp:v,isPosted:y}}))).map(p=>`
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
              `).join("");l(m)})})}catch(t){console.error("Error in getMyWidgetsList:",t),A.errorToast(t?.message||"An error occurred while fetching widgets"),t?.status===401&&Me()}}async function st(){try{const t=document.getElementById("builder-workarea");if(!t)return;t.innerHTML="",await tt(f.widgetTree);const e=await Ce(f.widgetTree,t);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await X(f.widgetTree,!1,e),pe(),we()}catch(t){throw new Error(`error loading widget with widget tree ${t.message}`)}}async function Ma(t){const e=t?JSON.parse(t):"";if(e)try{const n=document.getElementById("builder-workarea");n.innerHTML="";const a=await Ce(e,n),i=document.getElementById("select-box");i.style.display="none";const o=document.getElementById("element-attributes");o.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await X(e,!1,a),pe(),we()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function ze(t,e,n){try{if(t?.preventDefault(),t?.stopPropagation(),Lt.collapseNavbar(),await De(),await Oe(t),n&&typeof n!="number"||Number.isNaN(n)||e&&typeof e!="number"||Number.isNaN(e)){A.infoMessageToast("Widget id is in different format. Please check and update",4),Oe(t);return}xt(`?widget-id=${n||e}`);const a=document.getElementById("preview-btn");a&&a.setAttribute("data-widgetid",e.toString()),ml(),gl(),zn(),_i(),await bi();let i=Jn();i.classList.contains("fspage")&&i.classList.remove("fspage");const s=(await I())?.token;let r=null;t&&(r=await Se(e,s));let l=await le(r?r.widgetId:e);const d=document.getElementById("widgetNameValue");d&&l?.name&&(d.value=l?.name);const u=document.getElementById("widget-builder");u&&l?.name&&(u.textContent="Widget Builder Panel: "+l?.name,u.setAttribute("title",`Widget Builder Panel: ${l?.name}`)),await tt(l);const c=await Ce(l,i);f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await X(l,!1,c,!0),await ms(r?.widgetId??e);const g=document.getElementById("preview-btn");return g.setAttribute("onclick","previewWidget(event)"),g.setAttribute("data-widgetid",`${e}`),g.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),$n(),N.enableWidgetButtons(),N.initializeWidgetVersions(n||e,l?.version?l.version.toString():"original",l?.timestamp),H.renderActionHistory(),H.updateActionHistories(),pe(),we(),Gn(),""}catch(a){console.error(a),A.errorToast(a?.message,4),$n(),Oe(t)}}function ml(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const n=document.getElementById("page-properties");n&&(n.style.display="none");const a=document.querySelector("button[data-tab-id='wico-tab-navigator']"),i=document.querySelector(`button[data-tab-id='${Vt.staticTabName}']`);Vt.staticTabName==="wico-tab-pageInfo"&&i.style.display==="none"?a&&a.click():i?i.click():a&&a.click()}function gl(){document.title="Widget Conceptualizer",_t("description","Widget Conceptualizer"),_t("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection")}async function pl(t,e){t.stopPropagation();try{const n=confirm("Do you want to delete the Widget?");if(await De(),n){A.infoMessageToast("Deleting the widget...",0),await Ir(e),await N.renderSavedWidgets();const a=new URLSearchParams(window.location.search).get("widget-id");return a&&parseInt(a)===e&&await Oe(t),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(n){document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),A.errorToast(n.message?n.message:"Failed to delete widget"),console.error("Failed to delete widget:",n)}}async function hl(t,e){t.stopPropagation();const n=document.getElementById("postWidgetModal");n&&n.remove();const a=await I(),i=a?.entityId===101651686||a?.entityId===101279491,o=document.createElement("dialog");o.id="postWidgetModal",o.className="col-md-6 a-dialog",o.innerHTML=`
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
  `,document.body.appendChild(o);const s=o.querySelector("#pasteArea"),r=o.querySelector("#widgetThumbnail"),l=o.querySelector("#imagePreview img"),d=o.querySelector("#imagePreview"),u=o.querySelector("#pasteText");function c(p){const h=new FileReader;h.onload=w=>{l&&w.target?.result&&(l.src=w.target.result,d.classList.remove("d-none"),u.classList.add("d-none"))},h.readAsDataURL(p)}r?.addEventListener("change",p=>{const h=p.target.files?.[0];h&&c(h)});function g(p){const h=p.clipboardData?.items;if(h){for(let w=0;w<h.length;w++)if(h[w].type.indexOf("image")!==-1){const _=h[w].getAsFile();if(_&&r){const L=new DataTransfer;L.items.add(_),r.files=L.files,c(_);break}}}}s?.addEventListener("paste",p=>g(p)),o.addEventListener("paste",p=>g(p)),o.querySelector("#post-widget-form")?.addEventListener("submit",p=>{p.preventDefault(),fl(e,o)}),o.showModal()}async function fl(t,e){const n=document.querySelector(`#spinner-${t}`),a=e.querySelector('button[type="submit"]');try{a&&(a.disabled=!0,a.textContent="Posting...",A.infoMessageToast("Posting Widget to Public...",0)),n&&n.classList.remove("d-none"),await De();const i=await I(),o=document.getElementById("widgetPublicName").value,s=document.getElementById("widgetDescription").value,r=document.getElementById("widgetThumbnail");if(!r?.files?.length)throw console.error("File validation failed:",{inputExists:!!r,filesLength:r?.files?.length}),new Error("Please provide a thumbnail image");const l=r.files?.[0];if(!l||!r.value)throw new Error("Please provide a thumbnail image");const d=await $i(l);if(!d.success)throw new Error("Failed to upload thumbnail");const u=await Se(t,i.token);if(u&&(await Be(u.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Widget is already public.");return}const c=document.getElementById("postAsTemplate")?.checked;let g=null;if(u)g=await O(u.widgetId);else{const L=await K(t);g=await N.createWidgetCopy(L,i.userId,i.token)}const m=await Z("public_name",o,!1,i.userId,4,999),p=await Z("description",s,!1,i.userId,4,999),h=await Z("thumbnail",d.url||"no attachment",!1,i.userId,4,999);await q(g,p,"description"),await q(g,h,"thumbnail"),await q(g,m,"public_name");const w=await Z("public_widget","",!1,i.userId,4,999);if(await q(w,g,"s_widget"),c){const T=await Z("template_name",o,!1,i.userId,4,999),v=await Z("template_thumbnail",d.url||"no attachment",!1,i.userId,4,999);await q(g,v,"template_thumbnail"),await q(g,T,"template_name");const y=await Z("template_widget","",!1,i.userId,4,999);await q(y,g,"s_widget")}await D.SyncDataOnline(),await N.renderPublicWidgets(),await N.renderSavedWidgets(),c&&await N.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast(`Widget Posted to Public${c?" and Templates":""}`)},300)}catch(i){console.error("Error posting widget:",i),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to post widget"),a&&(a.disabled=!1,a.textContent="Post Widget")}finally{n&&n.classList.add("d-none")}}async function Dn(t=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const a=(await Qr(t))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],i=await Promise.all(a.map(async r=>{const l=r?.data?.the_widget,u=l?.the_widget_public_name?.data?.the_public_name||`${l?.the_widget_name?.data?.the_name} ${l?.the_widget_version?.data?.the_version>1?"v"+l?.the_widget_version?.data?.the_version:""}`,c=l?.the_widget_description?.data?.the_description,g=l?.the_widget_thumbnail?.data?.the_thumbnail,m=l?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:u,timestamp:m,description:c,thumbnail:g}}));return i?.length?(await Promise.all(i?.map(async r=>{const d=(await K(r.id)).userId===e.userId,u=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
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
                <span class="material-symbols-outlined me-2" type="button" onclick="viewPublicWidgetDetails(event, '${r.name||"Unnamed Widget"}', '${r.thumbnail||""}', '${u||""}')" title="View Widget Details">
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
              <li class="d-flex align-items-center justify-content-between" onclick="viewPublicWidgetDetails(event, '${r.name||"Unnamed Widget"}', '${r.thumbnail||""}', '${u||""}')" >
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
    `}catch(e){console.error("error",e),e?.status===401&&Me()}}async function yl(t=""){try{const e=await I();if(!e)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const a=(await Yr(t))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[],i=await Promise.all(a.map(async l=>{const d=l?.data?.the_widget,c=d?.the_widget_folder_name?.data?.the_folder_name||`${d?.the_widget_name?.data?.the_name} ${d?.the_widget_version?.data?.the_version>1?"v"+d?.the_widget_version?.data?.the_version:""}`,g=d?.the_widget_description?.data?.the_description,m=d?.the_widget_thumbnail?.data?.the_thumbnail,p=d?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:c,timestamp:p,description:g,thumbnail:m}}));if(!i?.length){const l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",await je(z.folder_widget,l)),`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `}const s=(await Promise.all(i?.map(async l=>{const u=(await K(l.id)).userId===e.userId,c=l.description?l.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link href="" class="folderWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${l?.id}">
              <div class="d-flex align-items-center" style="min-width: 0;">
                <span class="material-symbols-outlined me-2">drag_indicator</span>
                <div class="widget-info" style="word-wrap: break-word; min-width: 0;">
                  <div class="widget-name pe-2">${l.name||"Unnamed Widget"}</div>
                </div>
              </div>
              <div class="widget-actions d-flex align-items-center ms-auto" style="min-width: 100px;">
                <span class="material-symbols-outlined me-2" type="button" onclick="viewPublicWidgetDetails(event, '${l.name||"Unnamed Widget"}', '${l.thumbnail||""}', '${c||""}')" title="View Widget Details">
                  visibility
                </span>
                ${u?`
                  <span class="material-symbols-outlined me-2" data-pubwidid="${l.id}" onclick="removeMyWidgetFromPublic(event)" title="Remove from Public" type="button">
                    delete
                  </span>`:""}
                <span class="material-symbols-outlined" data-pubwidid="${l.id}" onclick="saveFromPublic(event)" title="Import Widget" type="button">
                  file_download
                </span>
              </div>
            </router-link>
          </li>
        `})||[])).join(""),r=document.getElementById("folder-widget-container");return r&&(r.style.display="block",r.innerHTML=s),s}catch(e){console.error("error",e),e?.status===401&&Me()}}async function wl(){try{const t=await I();if(!t)return[];const e=await Z("template_widget","",!1,t.userId,4,999);let n=new P;n.typeConnection="the_widget_template_name",n.name="widgetPName";let a=new P;a.typeConnection="the_widget_template_thumbnail",a.name="widgetThumbnail";let i=new P;i.typeConnection="the_template_widget_s_widget",i.name="widgetLevel",i.inpage=10,i.limit=!0,i.freeschemaQueries=[n,a];let o=new P;return o.conceptIds=[e.id],o.outputFormat=ce,o.name="top",o.freeschemaQueries=[i],new Promise(s=>{ge(o,"").subscribe(r=>{const l=[];if(r&&r.length>0){const d=r[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const u of d)if(u?.data?.the_widget&&typeof u.data.the_widget=="object"){const c=u.data.the_widget?.the_widget_template_name?.data?.the_template_name,g=u.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(c||g)&&l.push({id:u.id||"",name:c||"Unnamed Template",thumbnail:g||""})}}s(l)})})}catch(t){return console.error("Error fetching templates:",t),[]}}async function vl(t,e){t.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const a=document.createElement("dialog");a.setAttribute("id","rename-widget-dialog"),a.classList.add("col-md-3"),a.innerHTML=`
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
        `;const i=a.querySelector("form");return i&&i.addEventListener("submit",o=>ji(o,"",e)),document.querySelector("body #app")?.appendChild(a),de("rename-widget-dialog"),"OPENED"}catch(n){console.error("Failed to rename widget:",n)}}async function ji(t,e="",n){t.preventDefault();let a="";if(e)a=e;else{const l=new FormData(t?.target);if(a=Object.fromEntries(l)?.widgetName,!a?.trim()){const u=t.target.querySelector("#widgetName");u?.focus(),u.style.border="2px solid red",u.style.outline="none",u.addEventListener("input",()=>{u.style.border=""});return}}const o=(await I())?.userId,s=document.getElementById("rename-widget-dialog"),r=s?.querySelector('button[type="submit"]');r.textContent="Saving";try{await De();const l=await et(n,"the_widget_name","name",a,o);await D.SyncDataOnline();const d=s?.querySelector("input"),u=s?.querySelectorAll("button");if(u&&u.forEach(c=>{c.disabled=!0}),d&&(d.disabled=!0),l){N.renderSavedWidgets(),be("rename-widget-dialog"),A.successfullToast("Widget Renamed Successfully");const c=new URLSearchParams(window.location.search).get("widget-id");if(n===Number(c)){const g=document.getElementById("widget-builder");g.textContent=`Widget Builder Panel: ${a}`}return"widget Renamed successfully"}}catch(l){A.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",l)}}const ra=async(t,e,n=!1)=>{const a=await it(t,e),i=a?.data?.the_widget,o=i?.the_widget_name?.[0]?.data?.the_name,s=i?.the_widget_html?.[0]?.data?.the_html,r=i?.the_widget_clean?.[0]?.data?.the_clean,l=i?.the_widget_css?.[0]?.data?.the_css,d=i?.the_widget_js?.[0]?.data?.the_js,u=i?.the_widget_timestamp?.[0]?.data?.the_timestamp,c=i?.the_widget_widget?.[0].id,g=i?.the_widget_type?.[0]?.data?.the_type,m=i?.the_widget_after_render?.[0]?.data?.the_after_render,p=i?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,h=i?.the_widget_update?.[0]?.data?.the_update,w=i?.the_widget_mount_child?.[0]?.data?.the_mount_child;let _=[];const L=i?.the_widget_s_child;return L?.length&&(_=await Promise.all(L?.map(async v=>{const y=v?.data?.the_child_widget,E=y?.the_child_widget_type?.[0]?.data?.the_type,C=y?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,b=y?.the_child_widget_info?.[0]?.data?.id?y?.the_child_widget_info?.[0]?.data?.id:y?.the_child_widget_parent?.[0]?.data?.the_parent,S=await ra(Number(b),e,n);return{id:v?.id,type:E,parent:b,wrapper:C,widget:S}}))),{id:a?.id,name:o,html:s,cleanHtml:r,css:l,js:d,timestamp:u,widgetId:c,typeValue:g,addEvent:m,onMount:p,onUpdate:h,mountChildWidgets:w,childs:_}},bl=async t=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await I(),n=e?.entityId,a=e?.userId,i=await K(n);try{if(t.target?.files?.length>0){const o=[];for(let l=0;l<t.target?.files?.length;l++){const d=t.target?.files[l];if(d.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}o.push($i(d))}const s=await Promise.all(o);for(let l=0;l<s.length;l++){const d=s[l];d.success||alert("Some file failed: "+d.message);const u=await Z("the_asset",d.url||"",!1,a,4);await q(i,u,"s_asset")}await D.SyncDataOnline(),A.successfullToast(`Asset${s.length>1?"s":""} uploaded successfully`),new cl().setupAssetListener()}else{alert("No file found");return}}catch(o){throw console.error(o),o}document.getElementById("assets-upload-loader")?.classList.add("d-none")},_l=async(t,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{t.target.closest(".asset-item").remove(),await Le(e),A.successfullToast("Asset deleted successfully")}catch(a){console.error("Error deleting asset:",a),A.errorToast("Failed to delete asset")}};function El(t){const e=document.getElementById(t);if(e){e.value="";const n=new Event("keyup");e.dispatchEvent(n),Ni(t)}}function Ni(t){const e=document.getElementById(t),n=document.getElementById(`${t}-clear`);e&&n&&(n.style.display=e.value?"block":"none",n.style.cursor=e.value?"default":"")}async function Tl(t,e,n,a){t.preventDefault(),t.stopPropagation();const i=a.replace(/\\n/g,`
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
          ${n?`<div class="rounded overflow-hidden">
              <img src="${n}" alt="${e}" class="img-fluid" style="max-height: 300px; width: 100%; object-fit: contain;">
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
  `,s=document.getElementById("widget-detail-modal");s&&s.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",o),de("widget-detail-modal")}window.viewPublicWidgetDetails=Tl;window.openCSSEditor=bt;class Di{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let n=function(i){if(!i)return;const{wrapper:o}=i,s=o&&o!=="0"?`#${o}`:".content-target";a=a+`${s} { ${i.css} }`,i.children.forEach(r=>{n(r)})},a="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),n(f.widgetTree),this.styleElement.textContent=a}}async getWidgetHtml(e){let n=[];e.forEach(a=>{a.classList.forEach(i=>{n.push(i)})}),this.insertCSS(n)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new oe({doc:"/* Write your CSS here */",extensions:[Tt,St,fo(),Yt(),oe.lineWrapping,ke.tabSize.of(2),ke.allowMultipleSelections.of(!0),oe.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Kt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(async n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateCSS(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const n of e)if(this.editorView){const{state:a,dispatch:i}=this.editorView;i({changes:{from:0,to:a.doc.length,insert:`.${n} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const Ia=async t=>{const e=new za,n=Cl(t);if(Object.keys(n).length>0){const a=await e.validateField(n),i=await Hn(a),o=Hn(i);return Al(t,o)}},Sl=async t=>{const n=await new za().validateField(t);return Object.keys(n).length>0?{status:!1,details:Hn(n)}:{status:!0}},Cl=t=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},n=t?.attributes;if(Array.isArray(n))n.forEach(a=>{const i=Ll(a);switch(a.name){case"name":e.fieldName=i||"";break;case"value":e.value=i||null;break;case"fieldtype":e.fieldType=i?i.trim():null;break;case"pattern":e.pattern=i||null;break;case"datatype":e.dataType=i?i.trim():null;break;case"typeconcept":e.conceptType=i||null;break;case"maxlength":e.maxLength=i?parseInt(i):null;break;case"minlength":e.minLength=i?parseInt(i):null;break;case"max":e.maxValue=i?parseInt(i):null;break;case"min":e.minValue=i?parseInt(i):null;break;case"accept":e.accept=i||null;break;case"file":e.file=i||null;break;case"required":e.required=i===!0;break;case"unique":e.isUnique=i===!0;break}});else throw console.error('attributesData["attributes"] is not an array',t.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},Ll=t=>{switch(t.type){case"boolean":return t.value==="on";case"array":return t.selected||null;case"string":return t.value||null;default:return null}},Hn=t=>({datatype:t.dataType,pattern:t.pattern,max:t.maxValue,min:t.minValue,minlength:t.minLength,maxlength:t.maxLength,accept:t.accept,file:t.file,required:t.required,unique:t.unique}),Al=(t,e)=>(t.attributes.forEach(n=>{const a=e[n.name];n.validationStatus=a?"invalid":"valid",n.validationErrorMessage=a||""}),t),Wl=t=>({fieldName:t.getAttribute("name"),value:t instanceof HTMLInputElement?t.value:null,fieldType:t.getAttribute("fieldtype"),dataType:t.getAttribute("datatype"),pattern:t.getAttribute("pattern"),conceptType:t.getAttribute("typeconcept"),maxLength:t.getAttribute("maxlength"),minLength:t.getAttribute("minlength"),minValue:t.getAttribute("min"),maxValue:t.getAttribute("max"),file:t.hasAttribute("file"),accept:t.hasAttribute("accept"),required:t.hasAttribute("required"),isUnique:t.getAttribute("unique")==="on"});async function Hi(t){let e=t.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",t.parentNode?.insertBefore(e,t.nextSibling)),e.innerHTML="";const n=Wl(t),a=await Sl(n);try{if(a.status)t.classList.remove("invalid"),t.classList.add("valid");else if(t.classList.remove("valid"),t.classList.add("invalid"),a.details&&typeof a.details=="object"){const i=document.createElement("span");i.className="error-message",i.style.color="red",i.style.fontSize="12px";const o=Object.values(a.details).filter(Boolean);i.innerHTML=o.join("<br>"),e.appendChild(i)}}catch(i){console.error("Validation error:",i);const o=document.createElement("span");o.className="error-message",o.style.color="red",o.textContent="Validation failed. Please try again.",e.appendChild(o)}}var Ye=(t=>(t.STYLE="style",t.BOOLEAN="boolean",t.FORM="form",t.SPECIAL="special",t))(Ye||{});const xl=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),la=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],ca=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],Rt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],kl=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Ut=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],ye=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),Ml=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),Il=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),Pl=new Set(["elementContent","className","id"]),qi=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function mt(t){return t.toLowerCase()==="type"?!0:qi.has(t.toLowerCase())}function kt(t,e,n){const a=t.toLowerCase();if(a==="type"){const i=n?xl.get(n.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):i}return qi.get(a)||[]}class mn{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=Eo}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,n){Vt.staticTabName=n;let a,i,o=document.getElementsByClassName("tabcontent");for(a=0;a<o.length;a++)o[a].style.display="none";for(i=document.getElementsByClassName("tablinks"),a=0;a<i.length;a++)i[a].className=i[a].className.replace(" active","");const s=document.getElementById(n);s.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let n=this;for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(o){const s=e[i].getAttribute("data-tab-id");n.openTab(o,s)});const a=document.querySelector(`button[data-tab-id='${Vt.staticTabName}']`);a?a.click():e[0].click()}sortAttributes(e){return e.sort((n,a)=>{if(!n?.name||!a?.name)return 0;const i=this.findAttributeInMap(n.name),o=this.findAttributeInMap(a.name);if(i==="Other"&&o!=="Other")return 1;if(i!=="Other"&&o==="Other")return-1;if(i===o){const s=this.categoryMap[i].findIndex(l=>l.toLowerCase()===n.name.toLowerCase()),r=this.categoryMap[o].findIndex(l=>l.toLowerCase()===a.name.toLowerCase());return s-r}return 0})}getCategoryForAttribute(e){if(!e)return"General";const n=e.toLowerCase();for(const[a,i]of Object.entries(this.categoryMap))if(a!=="Other"&&i.some(o=>o.toLowerCase()===n))return a;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,n){setTimeout(()=>{const a=document.getElementById("element-attributes");if(!a){this.setAttributes(e,n);return}a.innerHTML="";const i=document.createElement("div");if(i.className="row",a.appendChild(i),!e){i.innerHTML="";return}(async()=>await Ia(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const s=this.sortAttributes(e.attributes),r={};s.forEach(d=>{const u=this.getCategoryForAttribute(d.name);r[u]||(r[u]=[]),r[u].push(d)});let l="";Object.entries(r).forEach(([d,u])=>{const c=u.map(m=>{let p="";if(m.name.toLowerCase()==="float")p=`
                  <div class="float-button-group">
                    <button type="button"
                            class="float-btn ${m.value==="none"?"active":""}"
                            onclick="updateElementAttribute(event, '${n}', ${e?.id})"
                            value="none" title="None">
                      <span class="material-symbols-outlined">close</span>
                    </button>
                    <button type="button" 
                            class="float-btn ${m.value==="left"?"active":""}"
                            onclick="updateElementAttribute(event, '${n}', ${e?.id})"
                            value="left" title="Left">
                      <span class="material-symbols-outlined">format_align_left</span>
                    </button>
                    <button type="button"
                            class="float-btn ${m.value==="right"?"active":""}"
                            onclick="updateElementAttribute(event, '${n}', ${e?.id})"
                            value="right" title="Right">
                      <span class="material-symbols-outlined">format_align_right</span>
                    </button>
                  </div>
                `;else if(m.name==="Alignment"){const h=e?.tag?.toLowerCase();la.includes(h)&&(p=`
                    <div class="align-button-group">
                      <button type="button" 
                              class="align-btn ${m.value==="left"?"active":""}"
                              onclick="updateElementAttribute(event, '${n}', ${e?.id})"
                              value="left" title="Left">
                        <span class="material-symbols-outlined">format_align_left</span>
                      </button>
                      <button type="button"
                              class="align-btn ${m.value==="center"?"active":""}"
                              onclick="updateElementAttribute(event, '${n}', ${e?.id})"
                              value="center" title="Center">
                        <span class="material-symbols-outlined">format_align_center</span>
                      </button>
                      <button type="button"
                              class="align-btn ${m.value==="right"?"active":""}"
                              onclick="updateElementAttribute(event, '${n}', ${e?.id})"
                              value="right" title="Right">
                        <span class="material-symbols-outlined">format_align_right</span>
                      </button>
                      <button type="button"
                              class="align-btn ${m.value==="justify"?"active":""}"
                              onclick="updateElementAttribute(event, '${n}', ${e?.id})"
                              value="justify" title="Justify">
                        <span class="material-symbols-outlined">format_align_justify</span>
                      </button>
                    </div>
                  `)}else if(m.name==="Font Family"){const h=e?.tag?.toLowerCase();if(ca.includes(h)&&mt(m.name)){const _=kt(m.name,m.value,e?.tag).map(L=>{const T=L.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${L}" ${T?"selected":""}>${L}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${_}
                      </select>
                    `}}else if(m.name==="Font Weight"){const h=e?.tag?.toLowerCase();if(Rt.includes(h)&&mt(m.name)){const _=kt(m.name,m.value,e?.tag).map(L=>{const T=L.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${L}" ${T?"selected":""}>${L}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select ${m.name}</option>
                        ${_}
                      </select>
                    `}}else{if(m.name==="Height"||m.name==="Width"||m.name==="Minimum-Height"||m.name==="Minimum-Width"||m.name==="Maximum-Height"||m.name==="Maximum-Width")return m.name==="Height"||m.name==="Width"?`
                    <div class="col-6 my-2">
                      <div class="attribute-row row">
                        <div class="col-12">
                          <div class="attribute-name mb-1">${m.name}</div>
                          <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${n}', ${e?.id})" value="${m?.value||""}">
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
                              <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${n}', ${e?.id})" value="${m?.value||""}">
                            </div>
                          </div>
                        </div>`:m.name==="Minimum-Width"?`
                    <div class="col-6">
                      <div class="attribute-row">
                        <div class="col-12">
                          <div class="attribute-name mb-1">${m.name}</div>
                          <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${n}', ${e?.id})" value="${m?.value||""}">
                        </div>
                      </div>
                    </div>
                  </div>`:m.name==="Maximum-Height"?`
                    <div class="row">
                      <div class="col-6">
                        <div class="attribute-row">
                          <div class="col-12">
                            <div class="attribute-name mb-1">${m.name}</div>
                            <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${n}', ${e?.id})" value="${m?.value||""}">
                          </div>
                        </div>
                      </div>`:m.name==="Maximum-Width"?`
                    <div class="col-6">
                      <div class="attribute-row">
                        <div class="col-12">
                          <div class="attribute-name mb-1">${m.name}</div>
                          <input type="text" class="form-control form-control-sm" onchange="updateElementAttribute(event, '${n}', ${e?.id})" value="${m?.value||""}">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const h=(m.value||"0 0 0 0").split(" ").map(v=>v.trim()).map(v=>/^\d+$/.test(v)?`${v}px`:v);for(;h.length<4;)h.push("0px");const[w,_,L,T]=h;return m.name==="Margin"?`
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
                                  value: [this.value, '${_}', '${L}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge right" data-value="${_}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${_}</span>
                            <input type="text"
                              class="edge-input"
                              value="${_}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${L}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge bottom" data-value="${L}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${L}</span>
                            <input type="text"
                              class="edge-input"
                              value="${L}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${_}', this.value, '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${w}', '${_}', '${L}', this.value].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: [this.value, '${_}', '${L}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge right" data-value="${_}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${_}</span>
                            <input type="text"
                              class="edge-input"
                              value="${_}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${L}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge bottom" data-value="${L}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${L}</span>
                            <input type="text"
                              class="edge-input"
                              value="${L}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${_}', this.value, '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${w}', '${_}', '${L}', this.value].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`:""}else if(m?.type==="string")if(m.name==="elementContent")p=`<textarea 
                    class="form-control" 
                    rows="4" 
                    onchange="updateElementAttribute(event, '${n}', ${e?.id})"
                    >${m?.value||""}</textarea>`;else if(mt(m.name)){const w=kt(m.name,m.value,e?.tag).map(_=>`<option value="${_}" ${_===m?.value?"selected":""}>${_}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else p=`<input type="text" class="form-control" onchange="updateElementAttribute(event, '${n}', ${e?.id})" value="${m?.value||""}">`;else if(m?.type==="color")p=`
                  <div class="color-input-wrapper">
                    <input type="color" 
                      class="color-picker-input" 
                      onchange="updateElementAttribute(event, '${n}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                    <input type="text" 
                      class="form-control color-code-input" 
                      onchange="updateElementAttribute(event, '${n}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                  </div>`;else if(m?.type==="boolean")p=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${n}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(mt(m.name)){const w=kt(m.name,m.value,e?.tag).map(_=>{const L=_.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${_}" ${L?"selected":""}>${_}</option>`}).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else{const w=(m?.value?.split(",")||[]).map(_=>`<option value="${_}" ${_===m?.selected||_===m?.value?"selected":""}>${_}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
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
              `}).join(""),g=d==="General"||d==="Display"||d==="Typography"||d==="Size"||d==="Spacing"||d==="Borders"||d==="Colors"||d==="Other";l+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${d.toLowerCase()}-content')">
                  <div class="category-title">${d}</div>
                  <span class="material-symbols-outlined">${g?"do_not_disturb_on":"add_circle"}</span>
                </div>
                <div class="category-content" id="${d.toLowerCase()}-content" style="display: ${g?"block":"none"}" data-category-state="${g?"open":"closed"}">
                  <div class="row">
                    ${c}
                  </div>
                </div>
              </div>
            `}),i.innerHTML=l}}),$t()},0)}setAttributesForMultipleElements(e){const n=async()=>await Ia(e);if(!e){const i=document.getElementById("element-attributes").querySelector(".row");i.innerHTML="";return}n().then(()=>{if(e?.attributes&&e?.attributes?.length){const a={};e.attributes.forEach(s=>{const r=this.getCategoryForAttribute(s.name);a[r]||(a[r]=[]),a[r].push(s)});let i="";Object.entries(a).forEach(([s,r])=>{if(r.length){const l=r.map(u=>{let c="";return u?.type==="string"?c=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||""}">`:u?.type==="color"?c=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||"#000000"}">`:u?.type==="boolean"?c=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${u?.value&&u?.value!=="false"?"checked":""}>`:u?.type==="array"&&(c=`
                  <select class="form-select" onchange="updateMultipleElementAttribute(event)">
                    ${u?.value?.split(",")?.map(p=>`<option value="${p}" ${p===u?.selected?"selected":""}>${p}</option>`).join("")}
                  </select>
                `),u.validationStatus==="invalid"&&(c+=`
                  <span style="color:red;font-size:12px;">${u.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${u.name}</div>
                    <div class="col-7">${c}</div>
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
            `}});const o=document.getElementById("element-attributes");o&&(o.innerHTML=i)}})}async getHtml(){window.updateWidgetTypeValue=Vi,window.toggleDisplay=bt,window.updateElementAttribute=gn,window.updateMultipleElementAttribute=zi,window.handlePageProperties=Ui,window.updateCSSLibrary=Je,window.updateJSLibrary=Ge,window.addJSLibrary=Qi,window.addCSSLibrary=Gi,window.openRenameCustomFunction=pt.openRenameCustomFunction,window.deleteCustomFunction=pt.deleteCustomFunction,setTimeout(async()=>{pt.initializeCodeBlock();const i=new Di,o=document.getElementById("css-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor(),ma()},0),setTimeout(async()=>{await new ui().initializeEditor()},0),setTimeout(async()=>{const i=new mi,o=document.getElementById("js-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor()},0),setTimeout(async()=>{await new ie("onmount-editor-split").initializeEditor(),await new ie("onupdate-editor-split").initializeEditor(),await new ie("addevents-editor-split").initializeEditor(),await new ie("mountchildwidgets-editor-split").initializeEditor(),await new ie("widgetDependencies-editor-split").initializeEditor();const d=document.getElementById("publish-widget");d&&d.addEventListener("click",async u=>{u.preventDefault();try{await f.publish()}catch(c){console.error("error publishing widget",c),c instanceof Error&&A.errorToast(c.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let n="",a="";if(this.the_params){const i=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";i&&_e("meta_title",i);const o=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";o&&_e("meta_description",o);const s=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";s&&_e("meta_keywords",s);const r=this.the_params?.data?.the_page_width?.data?.the_width||"";r&&_e("width",r);const l=this.the_params?.data?.the_page_font_size?.data?.the_font_size;l&&_e("font_size",l);const d=this.the_params?.data?.the_page_font_family?.data?.the_font_family;d&&_e("font_family",d);const u=this.the_params?.data?.the_page_type?.data?.the_type;u&&_e("type",u);const c=()=>Array.from({length:13},(p,h)=>12+h).map(p=>{const h=l==p?"selected":"";return`<option value="${p}" ${h}>${p}</option>`}).join(""),g=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(h=>{const w=d==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${w}>${h}</option>`}).join(""),m=()=>["Fluid","Fixed"].map(h=>{const w=u==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${w}>${h}</option>`}).join("");n=`
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
            <label for="meta_title">Meta Title:</label>
            <input type="text" name="input-meta_title" id="meta_title" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}" value="${i}">
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="meta_description">Meta Description:</label>
            <textarea name="input-meta_description" id="meta_description" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${o}</textarea>
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="meta_keywords">Meta Keywords:</label>
            <textarea name="input-meta_keywords" id="meta_keywords" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${s}</textarea>
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="width">Page Width:</label>
            <input type="text" name="input-page_width" id="width" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}" value="${r}">
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="type">Page Type:</label>
            <select name="type" id="type" class="form-select" onchange="handlePageProperties(event)" data-page_id="${e}">
              ${m()}
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
              ${c()}
            </select>
          </div>
        </div>
      </div>
    `}return`
    <div id="tab-container">
      <div class="tab">
        <button class="tablinks active" data-tab-id="wico-tab-navigator">Navigator</button>
        <button class="tablinks" data-tab-id="wico-tab-styles">Styles</button>
        <button class="tablinks" data-tab-id="wico-tab-widgetInfo">Widget info</button>
        <button class="tablinks" data-tab-id="wico-tab-libraries">Libraries</button>
        ${n}
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
    `}}async function da(t){let e=Kn.filter(a=>a.id==t)[0];return!t||t==="null"?void 0:{id:t,attributes:Zs,tag:"div",name:`Layout: ${e?.name}`}}async function $l(){return{id:1,name:"Global",tag:"div",attributes:Io}}class Tn{static editor}function Bl(t,e,n){const a=n?.id,i=document.getElementById("editor");i?.setAttribute("wrapper-id",e),i?.setAttribute("element-id",a),i?.setAttribute("element-clicked","true"),Tn.editor&&n?.void?Tn.editor.setData(t):n?.void||Tn.editor?.setData("")}window.showdWidgetProperties=Nl;window.widgetSelected=ql;function jl(t,e){let n;if(e.data_type=="layout"){const a=Kn.filter(l=>l.name==e.data_text)[0],r=new DOMParser().parseFromString(a?.html,"text/html").body.querySelector("div");r.setAttribute("element-info-id",t),n=r.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?n=`<${e?.data_type} element-info-id="${t}">${e?.data_default}</${e?.data_type}>`:n=`<${e?.data_type} element-info-id="${t}">`;return`${n}`}async function Nl(t,e){const n=t.target.closest(".added-widget-container"),a=n.id,i=n.getAttribute("data-widgetid");if(i){const T=(await I())?.token,y=(await it(Number(i),T))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new mn().initializeView();const C=document.getElementById("widgetNameValue");C&&(C.value=y)}const s=(await I())?.userId,r=await Oa(a,s);console.warn("savedWidgetProperties on widget Selected ->",r);let l="";r?.length&&(r?.length>1&&r?.sort((v,y)=>{const E=new Date(v?.created_at).getTime();return new Date(y?.created_at).getTime()-E}),l=r?.[0]?.data?.[a]?.properties?.filter(v=>v.name==="widget-type")?.[0]?.value);const d=document.getElementById("widgetTypeValue");d.setAttribute("data-widgetcontainerid",a),d.setAttribute("data-mainwidgetid",`${e}`),d.value=l;const c=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,h=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,w=document.querySelector(".content-target"),_=new Et;l&&await _.getTypeValueList(l),_.componentDidMountFunction=c,_.addEventFunction=m,_.mountChildWidgetsFunction=h,await _.mount(w)}function Dl(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(a=>{const i=document.querySelector(a);i&&(i.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const n=document.querySelector('.editor-container .cm-content[data-language="javascript"]');n.textContent="/* Write your JavaScript here */"}const Ze=async()=>{const t=document.getElementById("element-info");t.style.display="none"},gt=async t=>{const e=t?.target;let n=e?.tagName;const a=e?.classList?.contains("fslayout-row"),i=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))n="WIDGET",i.classList.add("widget-marker");else if(a)n="Layout Element",i.classList.remove("widget-marker");else if(e?.closest("#widget-details")){n="",i.classList.remove("widget-marker");return}else i.classList.remove("widget-marker");const o=e.getBoundingClientRect(),s=o.left,r=o.top;i.style.display="block",new ResizeObserver(()=>{i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.top=`calc(${r}px)`,i.style.left=`calc(${s}px)`}).observe(e);const d=document.getElementById("element-info_details");d.innerHTML=`<span>${n}</span>`;const u=document.getElementById("select-box"),c=document.getElementById("builder-workarea");c.addEventListener("scroll",Ta),c.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");u.style.transition="0.2s ease all";const p=document.getElementById("element-info");m||(p.style.display="block"),p.style.height="0",p.style.width="0"}),c.addEventListener("resize",Ta)},Ke=async t=>{t.preventDefault();const e=t.target;ul("navigator-container"),We.publish("page:elementClick",e);const n=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details"))return;const a=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",a);const i=e;R?.previousSelectedStaticElement?.removeAttribute("draggable"),R.staticElement=i,R.previousSelectedStaticElement=R.staticElement,R.staticElement.setAttribute("draggable","true");const o=i.getBoundingClientRect();Hl(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),R.staticElement=e;const y=e?.tagName.toLowerCase(),b=ot.staticElementList?.filter(S=>{const W=S?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return y===W})?.[0]?.id;gn(t,"",b)}));const r=o.left,l=o.top;Lt.resetNavigationBar();const d=e;let u;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?u=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(u=e.closest(".edited-widget-container"));const c=e.classList.contains("added-widget-container");if(u||c){let y="";c?y=e?.id:u&&(y=u?.id);const E=[];let C=0;async function b(W,x){return W.reduce((M,$,B)=>($.wrapper===x&&(M.push($),C=B),$.children&&$.children.length>0&&b($.children,x),M),E)}const S=await b(f?.staticWidgetTree?.children,y);f.selectedStaticWidgetTreeInfo={widgetTree:S[0],isChildWidget:!0,childWidgetIndex:C},await tt(S[0]),await X(S[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await tt(f?.staticWidgetTree),X(f?.staticWidgetTree,!1);if(d?.id&&(f.updatedWidgets[d.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const y=document.getElementById("widgetType");y&&(y.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const g=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");g&&(!g?.style?.display||g?.style?.display==="none")&&m&&(g.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(y=>y.remove());let h=!1;if(t instanceof KeyboardEvent&&t.ctrlKey){if(d?.classList.contains("added-widget-container")){A.infoMessageToast("Widget can't be selected");return}d?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(E=>{const C=E.parentElement?.classList,b=E?.classList,S=E.firstChild?.classList,W=C&&C.contains("added-widget-container");let M=b&&b.contains("fslayout-row")||S&&S.contains("fslayout-row")?"Layout":E.tagName;if(W||h){h=!0;return}const $=document.createElement("div");$?.classList.add("tag-name"),$.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${M}
        </span>
      `,E?.parentElement?.appendChild($)}),h?(A.infoMessageToast("Widget can't be selected"),d?.classList.toggle("widget_selected"),d?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await Oi());return}const w=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const y=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;w&&y&&(w.value=y)}else w&&(w.value=f?.staticWidgetTree.name);const _=document.getElementById("select-box");_.style.display="block";const L=new ResizeObserver(()=>{_.style.width=e.offsetWidth+"px",_.style.height=e.offsetHeight+"px",_.style.top=`calc(${l}px)`,_.style.left=`calc(${r}px)`}),T=document.getElementById("publishWidgetBtnContainer");if(T){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(T.classList.remove("d-none"),T.classList.add("d-flex")):(T.classList.remove("d-flex"),T.classList.add("d-none")),console.log("prev selected widget",n,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const y=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,E=y.origin||y.id,C=y.version?y.version.toString():"original";typeof N.initializeWidgetVersions=="function"&&N.initializeWidgetVersions(E,C,y?.timestamp)}catch(y){console.error("Error showing widget versions:",y)}}L.observe(e);const v=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?v.style.display="block":v.style.display="none",(u||c)&&!e.closest(".edited-widget-container")){const E=document.getElementById("element-attributes").querySelector(".row");E.innerHTML="",tn(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await zt(d)};function Hl(t){return typeof t.contentEditable<"u"&&as.includes(t.tagName.toLowerCase())}async function ql(t){t.preventDefault(),t.stopPropagation()}async function zt(t){let e;if(t?.dataset?.widgetid)return;const n=t?.tagName.toLowerCase(),i=ot.staticElementList?.filter(c=>{const g=c?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return n===g}),o=i?.[0]?.id,s=t.classList.contains("fslayout-row"),r=t?.firstChild?.classList?.contains("fslayout-row");if(s||r)e=await da(o),e?.attributes?.length&&(e.attributes=e?.attributes.map(c=>({...c,selected:"",value:c.name==="class"?"":c.value})));else if(o)e=await At(i);else if(Re.includes(n)||Ct.includes(n)){const c=ns.map(g=>{const m=g.name.toLowerCase(),p=ye.get(m)||ye.get(g.name);return p?{...g,value:t.style[p.property]||""}:{...g,value:m==="classname"?t.className||"":m==="id"&&t.id||""}});n==="iframe"&&c.push({name:"src",type:"string",value:t.getAttribute("src")||""}),Re.includes(n)&&c.push({name:"elementContent",type:"string",value:t.textContent||""}),e={tag:n,attributes:c}}e.attributes=e?.attributes?.map(c=>c?.name?(c.value=Ki(t,c.name),c):(console.warn("Found attribute without name:",c),c)).filter(Boolean);let l="";const d=e?.attributes;d?.length&&(l=d?.filter(g=>g?.name==="elementContent")?.[0]?.value,Bl(l,t?.id,e),tn(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new mn()?.setAttributes(e,t?.id)}async function Oi(){let t;t=await $l(),t?.attributes?.length&&(t.attributes=t?.attributes.map(n=>({...n,value:""}))),new mn()?.setAttributesForMultipleElements(t)}const Ol=new Qe;async function Fl(t){return new Promise(async e=>{const n=await Fi(t);e(n)})}async function Fi(t){return new Promise(async e=>{let n=new G;n.composition=t,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],n.inpage=100;let a=new G;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const r=(await ve([n,a],""))?.data?.the_element?.the_element_s_attribute?.map(c=>{const g=c?.data?.the_attribute,m=g?.the_attribute_name?.[0]?.data?.the_name,p=g?.the_attribute_type?.[0]?.data?.the_type,h=g?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:p,value:h}}),l=r?.map(c=>{let g;return c?.type==="string"?g='<input type="text" class="form-control" onchange="updateAttribute(event)">':c?.type==="boolean"?g='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':c?.type==="array"&&(g=`
            <select class="form-control" onchange="updateAttribute(event)">
              ${c?.value?.split(",")?.map(h=>`<option value="${h}">${h}</option>`)}
            </select>
          `),`
          <div class="col-6 my-2">
            <div class="row attribute-row">
            <div class="col-5 attribute-name">
              ${c.name}
            </div>
            <div class="col-7">
              ${g}
            </div>
            </div>
          </div>
        `}).join("");let d,u=setInterval(async()=>{d&&(clearInterval(u),r?.forEach(c=>{c?.type!=="boolean"&&d?.setAttribute(c?.name,"")})),d=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(l)})}async function Vi(t){const n=(t?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=n,H.updateActionHistories()}async function Vl(t){const e=t.target,n=e.closest(".widget_container"),a=n.getAttribute("data-elementId"),i=e.textContent?.trim(),o=document.querySelectorAll("#element-attributes .attribute-row");for(const s of o)if(s.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const l=s.querySelector("input");if(l&&l.value!==i){l.value=i||"",await gn({target:e,type:"text",value:i,isDirectEdit:!0},n,a);break}}}async function Rl(t,e,n,a){console.log("updateElementAttributeViaEditor ->",e,n),t?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),t=R.staticElement;let o;const s=t?.tagName.toLowerCase(),l=ot.staticElementList?.filter(g=>{const m=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return s===m});o=await At(l),t?.classList.remove("wb-initial-empty");const d=a?.value,u=a?.attribute,c=R.staticElement;if(c){if(u==="className")c?.setAttribute("class",d);else if(u==="height"){const g=d?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;c.style.height=m}else if(u==="width"){const g=d?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;c.style.width=m}else if(u==="elementContent")if(!c?.childNodes?.length)c.innerHTML=d;else for(let g of c?.childNodes){const m=g;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=d;break}}else{const p=document.createTextNode(d);c.insertBefore(p,c.firstChild);break}}else c?.setAttribute(u,d?.trim());o.attributes=o?.attributes?.map(g=>(g?.name===u&&(g?.type==="array"?g.selected=d:g.value=d),g)),await zt(t)}}async function gn(t,e,n){try{const a=t.target.closest(".category-content"),i=a?.id,o=a?.style.display!=="none",r=document.getElementById("advanced-size")?.style.display==="block",u=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),c=document.querySelector(".margin-control")?.closest(".col-12"),g=document.querySelector(".padding-control")?.closest(".col-12"),m=!c?.classList.contains("hidden"),p=!g?.classList.contains("hidden");e=R.staticElement,e?.classList.remove("wb-initial-empty");const h=e?.tagName?.toLowerCase();let w;const _=e?.classList?.contains("fslayout-row"),L=e?.firstChild?.classList?.contains("fslayout-row");if(_||L)w=await da(n);else{const S=ot.staticElementList?.filter(W=>{const x=W?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return h===x});if(S?.length)w=await At(S);else if(Re.includes(h)||Ct.includes(h)){const W=t?.target?.value,x=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(x==="className")e.setAttribute("class",W);else if(x==="elementContent"&&Re.includes(h))e.textContent=W;else if(x==="id")e.id=W;else if(x==="Height"){const M=W?.trim(),$=/^\d+$/.test(M)?`${M}px`:M;e.style.height=$}else if(x==="Width"){const M=W?.trim(),$=/^\d+$/.test(M)?`${M}px`:M;e.style.width=$}else if(x==="Margin"){const $=(W?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.margin=$}else if(x==="Padding"){const $=(W?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.padding=$}else x==="Background Color"?e.style.backgroundColor=W:x==="Float"?e.style.float=W:x==="Color"?e.style.color=W:e?.setAttribute(x,W?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const M=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=M,me(M)}else{const M=await vt();f.staticWidgetTree.html=M,me(M)}await zt(e);return}}const T=t?.target?.value,v=t?.target?.type,y=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),E=e,C=E?.getAttribute("isvalidate")==="on";if(C&&E.setAttribute("onchange","applyValidation()"),C&&E?.addEventListener("change",b=>{const S=b.target;Hi(S)}),y==="className")E?.setAttribute("class",T);else if(y==="Height"){const b=T?.trim(),S=/^\d+$/.test(b)?`${b}px`:b;E.style.height=S}else if(y==="Width"){const b=T?.trim(),S=/^\d+$/.test(b)?`${b}px`:b;E.style.width=S}else if(y==="Minimum-Height"){const b=T?.trim(),S=/^\d+$/.test(b)?`${b}px`:b;E.style.minHeight=S}else if(y==="Minimum-Width"){const b=T?.trim(),S=/^\d+$/.test(b)?`${b}px`:b;E.style.minWidth=S}else if(y==="Maximum-Height"){const b=T?.trim(),S=/^\d+$/.test(b)?`${b}px`:b;E.style.maxHeight=S}else if(y==="Maximum-Width"){const b=T?.trim(),S=/^\d+$/.test(b)?`${b}px`:b;E.style.maxWidth=S}else if(y==="Margin"){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");E.style.margin=S}else if(y==="Padding"){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");E.style.padding=S}else if(y==="Background Color")E.style.backgroundColor=T;else if(y==="Color")E.style.color=T;else if(y==="Float")E.style.float=T;else if(y==="Alignment")la.includes(e.tagName.toLowerCase())&&(E.style.textAlign=T);else if(y==="Font Family")ca.includes(e.tagName.toLowerCase())&&(E.style.fontFamily=T);else if(y==="Font Weight")Rt.includes(e.tagName.toLowerCase())&&(E.style.fontWeight=T);else if(y==="Font Size"){if(Rt.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");E.style.fontSize=S}}else if(y==="Opacity")E.style.opacity=T;else if(y==="Text Transform")e.tagName.toLowerCase()!=="img"&&(E.style.textTransform=T);else if(y==="Line Height"){if(Ut.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");E.style.lineHeight=S}}else if(y==="Letter Spacing"){if(Ut.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");E.style.letterSpacing=S}}else if(v==="checkbox"&&!t?.target?.checked)E?.removeAttribute(y),E.value="";else if(y==="elementContent")if(!E?.childNodes?.length)E.innerText=T;else{let b;e?.childNodes?.length&&(b=Array.from(E?.childNodes)?.filter(S=>S.nodeType===3),b?.length&&b.forEach((S,W)=>{W===0?S.nodeValue=T:S.nodeValue=""}))}else y==="align-items"?(E.style.display="flex",E.style.alignItems=T):y==="justify-content"?(E.style.display="flex",E.style.justifyContent=T):y==="text-align"?E.style.textAlign=T:y==="class"?(E.classList.forEach(b=>{b.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||E.classList.remove(b)}),E.classList.add(...T.split(" "))):y&&E?.setAttribute(y,T?.trim());if(w.attributes=w?.attributes?.map(b=>(b?.name===y&&(b?.type==="array"?b.selected=T:b?.type==="boolean"&&!t?.target?.checked?b.value="":b.value=T),b)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const b=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=b,me(b)}else{const b=await vt();f.staticWidgetTree.html=b,me(b)}H.updateActionHistories(),await zt(e),setTimeout(()=>{if(i&&o){const x=document.getElementById(i);if(x){x.style.display="block";const M=x.previousElementSibling?.querySelector(".material-symbols-outlined");M&&(M.textContent="do_not_disturb_on")}}if(r){const x=document.getElementById("advanced-size");if(x){x.style.display="block";const M=x.previousElementSibling?.querySelector(".material-symbols-outlined");M&&(M.textContent="expand_less")}}const b=document.querySelector(".spacing-tabs");if(b&&u){const x=b.querySelector(`.${u}-tab`);x&&pa(x,u)}const S=document.querySelector(".margin-control")?.closest(".col-12"),W=document.querySelector(".padding-control")?.closest(".col-12");m?(S?.classList.remove("hidden"),W?.classList.add("hidden")):p&&(S?.classList.add("hidden"),W?.classList.remove("hidden"))},0)}catch(a){console.error("error updating attribute",a.message)}}function Ri(t,e){let n=[];return t.wrapper===e&&n.push(t),Array.isArray(t.children)&&t.children.forEach(a=>{n=n.concat(Ri(a,e))}),n}async function Ul(t){const e=t?.target?.value,n=t?.target?.type,a=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),i=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');a==="className"?i?.setAttribute("class",e):n==="checkbox"&&!t?.target?.checked?i?.removeAttribute(a):a==="elementContent"?i.innerText=e:i?.setAttribute(a,e)}async function ua(t){return new Promise(async e=>{let n=new G;n.composition=t,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],n.inpage=100;let a=new G;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const o=await ve([n,a],""),s=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name,r=o?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=o?.data?.the_element?.the_element_void?.[0]?.data?.the_void,d=o?.data?.the_element?.the_element_default?.[0]?.data?.the_default,u=o?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,c=o?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=o?.data?.the_element?.the_element_s_attribute?.map(h=>{const w=h.id,_=h?.data?.the_attribute,L=_?.the_attribute_name?.[0]?.data?.the_name,T=_?.the_attribute_type?.[0]?.data?.the_type,v=_?.the_attribute_value?.[0]?.data?.the_value;return{id:w,name:L,type:T,value:v}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:t,name:s,tag:r,void:l,default:d,icon:u,division:c,attributes:m})})}async function At(t){const e=t?.[0],n=e.id,a=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,i=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,o=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,s=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,r=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,l=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,u=e?.data?.the_element?.the_element_s_attribute?.map(g=>{const m=g.id,p=g?.data?.the_attribute,h=p?.the_attribute_name?.[0]?.data?.the_name,w=p?.the_attribute_type?.[0]?.data?.the_type,_=p?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:h,type:w,value:_}});return u?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),la.includes(i.toLowerCase())&&u.push({name:"Alignment",type:"array",value:"",division:"inline"}),ca.includes(i.toLowerCase())&&u.push({name:"Font Family",type:"array",value:"",division:"inline"}),Rt.includes(i.toLowerCase())&&u.push({name:"Font Weight",type:"array",value:"",division:"inline"}),kl.includes(i.toLowerCase())&&u.push({name:"Font Size",type:"string",value:"",division:"inline"}),i.toLowerCase()!=="img"&&u.push({name:"Text Transform",type:"array",value:"",division:"inline"}),Ut.includes(i.toLowerCase())&&u.push({name:"Line Height",type:"string",value:"",division:"inline"}),Ut.includes(i.toLowerCase())&&u.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:n,name:a,tag:i,void:o,default:s,icon:r,division:l,attributes:u}}async function Ui(t){const{id:e,value:n,dataset:{page_id:a}}=t.target;_e(e,n),await Ol.updatePageField(e,n,Number(a))}async function qn(t){[{key:"meta_title",value:t?.[`the_${k.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:t?.[`the_${k.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:t?.[`the_${k.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:t?.[`the_${k.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:t?.[`the_${k.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:t?.[`the_${k.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:t?.[`the_${k.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(n=>{n.value&&_e(n.key,n.value)})}async function _e(t,e){const n=document.getElementById("fspage-properties")||zl();let a="";switch(t){case"width":ct(".fspage { width: [^;]+ !important; }"),a=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":ct(".fspage { font-size: [^;]+; }"),a=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":ct(".fspage { font-family: [^;]+; }"),a=e?`.fspage { font-family: ${e}; }`:"";break;case"type":ct(".fspage { width: 1200px; margin: 0 auto; }"),ct(".fspage { width: 100%; padding: 0; }"),e==="fixed"?a=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?a=".fspage { width: 100%; padding: 0; }":a="";break;case"meta_title":document.title=e;break;case"meta_keywords":_t(t.replace("meta_",""),e);break;case"meta_description":_t(t.replace("meta_",""),e);return}n.textContent+=a}function ct(t){const e=document.getElementById("fspage-properties");if(!e)return;let n=e?.textContent;n=n?n.replace(new RegExp(t,"g"),""):"",e.textContent=n}function zl(){const t=document.createElement("style");return t.id="fspage-properties",document.head.appendChild(t),t}function _t(t,e){let n=document.querySelector(`meta[name="${t}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",t),document.head.appendChild(n)),n.setAttribute("content",e)}async function zi(t){try{document.querySelectorAll(".element-selected")?.forEach(async n=>{const a=n?.getAttribute("data-elementId"),i=n?.tagName?.toLowerCase();let o;const s=n?.classList?.contains("fslayout-row"),r=n?.firstChild?.classList?.contains("fslayout-row");if(s||r)o=await da(a);else{const p=ot.staticElementList?.filter(h=>{const w=h?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return i===w});if(p?.length)o=await At(p);else if(Re.includes(i)||Ct.includes(i)){const h=t?.target?.value,w=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(w==="className")n.setAttribute("class",h);else if(w==="elementContent"&&Re.includes(i))n.textContent=h;else if(w==="id")n.id=h;else if(w==="Height"){const _=h?.trim(),L=/^\d+$/.test(_)?`${_}px`:_;n.style.height=L}else if(w==="Width"){const _=h?.trim(),L=/^\d+$/.test(_)?`${_}px`:_;n.style.width=L}else if(w==="Margin"){const L=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.margin=L}else if(w==="Padding"){const L=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.padding=L}else w==="Background Color"?n.style.backgroundColor=h:w==="Color"&&(n.style.color=h);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const _=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=_,me(_)}else{const _=await vt();f.staticWidgetTree.html=_,me(_)}await Oi();return}}const l=t?.target?.value,d=t?.target?.type,u=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),c=n,g=c?.getAttribute("isvalidate")==="on";if(g&&c.setAttribute("onchange","applyValidation()"),g&&c?.addEventListener("change",m=>{const p=m.target;Hi(p)}),u==="className")c?.setAttribute("class",l);else if(u==="Height"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;c.style.height=p}else if(u==="Width"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;c.style.width=p}else if(u==="Margin"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");c.style.margin=p}else if(u==="Padding"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");c.style.padding=p}else if(u==="Background Color")c.style.backgroundColor=l;else if(u==="Color")c.style.color=l;else if(d==="checkbox"&&!t?.target?.checked)c?.removeAttribute(u),c.value="";else if(u==="elementContent")if(!c?.childNodes?.length)c.innerText=l;else for(let m of c?.childNodes){const p=m;if(p.nodeValue){if(p.nodeType===3&&p.nodeValue.trim()){p.nodeValue=l;break}}else{const h=document.createTextNode(l);c.insertBefore(h,c.firstChild);break}}else u==="align-items"?(c.style.display="flex",c.style.alignItems=l):u==="justify-content"?(c.style.display="flex",c.style.justifyContent=l):u==="text-align"?c.style.textAlign=l:u==="class"?(c.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||c.classList.remove(m)}),c.classList.add(...l.split(" "))):c?.setAttribute(u,l?.trim());if(o.attributes=o?.attributes?.map(m=>(m?.name===u&&(m?.type==="array"?m.selected=l:m?.type==="boolean"&&!t?.target?.checked?m.value="":m.value=l),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,me(m)}else{const m=await vt();f.staticWidgetTree.html=m,me(m)}H.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function Je(){const t=document.querySelectorAll("link.vde-css"),n=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),a=[];n?.length&&n.forEach((i,o)=>{const s=i.value,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r),a.push({order:o,url:i.value})}),t?.length&&t?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=a,H.updateActionHistories()}async function Ge(){const t=document.querySelectorAll("script.vde-js"),n=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),a=[];n?.length&&n.forEach(async(i,o)=>{await new Promise((s,r)=>{const l=i.value,d=document.createElement("script");d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{s()},d.onerror=u=>{console.error("Failed to load script:",l,u),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(d),a.push({order:o,url:i.value})})}),t?.length&&t?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=a,H.updateActionHistories()}function ma(){hn(f.staticWidgetTree)}async function Ji(t){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter CSS URL",a.addEventListener("change",async()=>{await Je()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Je(),await pn(t)},e.appendChild(n),e.appendChild(a),e.appendChild(i),e}let Pa=0;async function Wt(t){const e=++Pa,n=t?t?.library?.js:f.widgetTree?.library?.js,a=document.getElementById("sortable-js-list");a.innerHTML="",ga(),n?.length&&n?.sort((i,o)=>Number(i?.order)-Number(o?.order));for(const i of n){if(e!==Pa){console.log("Skipping outdated call for",i.url);return}await new Promise((o,s)=>{const r=document.createElement("li");r.className="list-item",r.draggable=!0;const l=document.createElement("span");l.className="material-symbols-outlined",l.innerText="drag_handle";const d=document.createElement("input");d.type="text",d.value=i?.url,d.addEventListener("change",async()=>{await Ge()});const u=document.createElement("button");u.className="remove-button",u.innerHTML='<span class="material-symbols-outlined">delete</span>',u.onclick=async function(){r.remove(),await Ge(),await Wt(t)},r.appendChild(l),r.appendChild(d),r.appendChild(u),a?.appendChild(r);const c=document.createElement("script");return c.classList.add("vde-js"),c.setAttribute("type","text/javascript"),c.setAttribute("src",i.url),c.setAttribute("crossorigin","anonymous"),c.onload=()=>{o()},c.onerror=g=>{console.error("Failed to load script:",i.url,g),s(new Error(`Failed to load script: ${i.url}`))},document.body.appendChild(c),r})}}function Jt(){const t=document.querySelectorAll("link.vde-css");t?.length&&t?.forEach(e=>{e.remove()})}function ga(){const t=document.querySelectorAll("script.vde-js");t?.length&&t?.forEach(e=>{e.remove()})}async function pn(t){const e=t?t?.library?.css:f.widgetTree?.library?.css,n=document.getElementById("sortable-list");n.innerHTML="",Jt(),e?.length&&e?.sort((a,i)=>Number(a?.order)-Number(i?.order)),e?.forEach(a=>{const i=document.createElement("li");i.className="list-item",i.draggable=!0;const o=document.createElement("span");o.className="material-symbols-outlined",o.innerText="drag_handle";const s=document.createElement("input");s.type="text",s.value=a.url,s.addEventListener("change",async()=>{await Je()});const r=document.createElement("button");r.className="remove-button",r.innerHTML='<span class="material-symbols-outlined">delete</span>',r.onclick=async function(){i.remove(),Jt(),await Je(),await pn(t)},i.appendChild(o),i.appendChild(s),i.appendChild(r),n?.appendChild(i);const l=document.createElement("link");return l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",a.url),document.head.appendChild(l),i})}function Jl(t){const e=document.getElementById("sortable-list");if(!e)return;let n=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(n=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),Jt(),await Je(),await pn(f.widgetTree?.library?.css?.length?f.widgetTree:t))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!n)return;const i=Gl(e,a.clientY),o=n;i===null?e.appendChild(o):e.insertBefore(o,i)})}function Gl(t,e){return[...t.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}async function hn(t){const e=document.getElementById("sortable-list");e.innerHTML="";const n=document.getElementById("add-list");if(!e||!n){console.error("Required elements not found");return}if(t?.library?.css?.length)await pn(t);else{const o=await Ji(t);e.appendChild(o)}Jl(t);const a=document.getElementById("sortable-js-list");a.innerHTML="";const i=document.getElementById("add-js-list");if(!a||!i){console.error("Required elements not found");return}if(t?.library?.js?.length)await Wt(t);else{const o=await Yi(t);a.appendChild(o)}Ql(t)}async function Gi(t){const e=document.getElementById("sortable-list"),n=await Ji(t);e.appendChild(n)}async function Qi(t){const e=document.getElementById("sortable-js-list"),n=await Yi(t);e.appendChild(n)}async function Yi(t){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter JS URL",a.addEventListener("change",async()=>{await Ge()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Ge(),await Wt(t)},e.appendChild(n),e.appendChild(a),e.appendChild(i),e}function Ql(t){const e=document.getElementById("sortable-js-list");if(!e)return;let n=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(n=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),ga(),await Ge(),await Wt(f.widgetTree?.library?.js?.length?f.widgetTree:t))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!n)return;const i=Yl(e,a.clientY),o=n;i===null?e.appendChild(o):e.insertBefore(o,i)})}function Yl(t,e){return[...t.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function Kl(t){const e=t.toLowerCase();return ye.has(e)?Ye.STYLE:Ml.has(e)?Ye.BOOLEAN:Il.has(e)?Ye.FORM:Pl.has(e)?Ye.SPECIAL:Ye.FORM}function Zl(t,e){if(!t&&e==="Background Color")return"#FFFFFF";if(!t)return"#000000";if(t.startsWith("#"))return t;const n=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(n){const[a,i,o,s]=n;return"#"+[i,o,s].map(r=>{const l=parseInt(r).toString(16);return l.length===1?"0"+l:l}).join("")}return"#000000"}function Ki(t,e){if(!e)return console.warn("Attribute name is undefined"),"";if(t.classList.contains("fslayout-row")||t.firstChild instanceof HTMLElement&&t.firstChild.classList?.contains("fslayout-row"))return Zi(t,e);const n=e.toLowerCase();if(ye.has(n)||ye.has(e)){const a=ye.get(n)||ye.get(e);if(!a)return"";const i=t.style[a.property]||t.getAttribute(`data-${n}`);return n==="color"||n==="background-color"||n==="bg-color"||e==="Color"||e==="Background Color"?Zl(i,e):i||""}if(n==="elementcontent"){let a,i;return t?.childNodes?.length&&(a=Array.from(t?.childNodes)?.filter(o=>o?.nodeType===3),a?.length&&(i=a?.map(o=>o?.nodeValue?.trim()).join(""))),i?i?.trim():t?.textContent||""}return n==="classname"?t.classList.value?.replace(/wb-initial-empty/g,"")||"":t.getAttribute(n)||""}function Zi(t,e){const n=e.toLowerCase();return n==="class"||n==="classname"?Array.from(t.classList).filter(a=>!a.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):n==="align-items"?t.style.alignItems||"":n==="text-align"?t.style.textAlign||"":t.getAttribute(n)||""}function Xl(t,e,n){const a=e.toLowerCase();if(t.id){const i=t.getAttribute("data-attributes");if(i){const o=JSON.parse(i),s=o.find(r=>r.name===e);s&&((s.type==="array"||mt(e))&&(s.selected=n),s.value=n),t.setAttribute("data-attributes",JSON.stringify(o))}}if(ye.has(a)||ye.has(e)){const i=ye.get(a)||ye.get(e);if(!i)return;t.setAttribute(`data-${a}`,n),i.needsUnit&&n&&/^\d+$/.test(n)?t.style[i.property]=`${n}px`:t.style[i.property]=n;return}n?t.setAttribute(a,n):t.removeAttribute(a)}function pa(t,e){const n=t.closest(".spacing-tabs");if(!n)return;n.querySelectorAll(".spacing-tab-btn").forEach(o=>o.classList.remove("active")),t.classList.add("active");const a=n.nextElementSibling,i=a?.nextElementSibling;e==="margin"?(a?.classList.remove("hidden"),i?.classList.add("hidden")):(a?.classList.add("hidden"),i?.classList.remove("hidden"))}window.toggleSpacingBox=pa;let qe=[],Gt,yt="",$a=!1,Ba="";const Mt="storeOwner",fn=async t=>{sc(t),await Promise.all([lc(t),oc(t)]),ei("projectId",t),ti(),Xi()},ec=async t=>{document.title=t.storeName||"Store",to(t.storeLogo),Gt=t.mainPageId,yt=t.projectName,qe=t.pagesList,localStorage.setItem(Mt,btoa(t.entityId)),ei("projectId",t.projectId),ti(),Xi()},Xi=()=>{window.addEventListener("popstate",()=>Sn(window.location.href)),document.addEventListener("click",t=>{const n=t.target.closest("a");if(!n||n.target==="_blank"||n.hasAttribute("download")||n.getAttribute("rel")==="external"||t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||n.origin!==location.origin)return;const a=n.getAttribute("href");!a||a.startsWith("#")||a.startsWith("mailto:")||(t.preventDefault(),xt(a),Sn(a))},!0),Sn(window.location.href)},Sn=async t=>{const{pathname:e}=new URL(t,window.location.origin);if(Ba==e)return;Ba=e;const n=nc(e),a=tc(t),i=document.head.querySelectorAll("style#mystyleid");if(console.log("abc",e,qe,n),n){const o=qe.find(s=>s.path==n.route);ja(o,{params:n?.params,queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await Na(o?.id);qn(s?.data?.[`the_${k.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else if(e==="/"&&Gt){const o=qe.find(s=>s.id==Gt);ja(o,{params:{},queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await Na(o?.id);qn(s?.data?.[`the_${k.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else{const o=qe.find(s=>s.path=="/404");o?eo(o.page):document.querySelector("#app").innerHTML="<h1>404</h1>",Array.from(i).forEach(s=>s.remove())}document.getElementById("global-loader")?.classList.add("d-none")},ja=async(t,e)=>{ac(t),t.page?await eo(t,e):console.warn("No page content Found")};function tc(t){const{searchParams:e}=new URL(t,window.location.origin),n={};for(const[a,i]of e.entries())n[a]?n[a]=Array.isArray(n[a])?[...n[a],i]:[n[a],i]:n[a]=i;return n}const nc=t=>{const a=[...qe.map(i=>i.path)].sort((i,o)=>{const s=i.split("/").filter(Boolean),r=o.split("/").filter(Boolean),l=s.filter(u=>u.startsWith(":")).length,d=r.filter(u=>u.startsWith(":")).length;return l!==d?l-d:r.length-s.length});console.log("routes",a);for(let i=0;i<a.length;i++){const s=(a[i]?.startsWith("/")?a[i]:`/${a[i]}`).split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(s.length!==r.length)continue;const l={};if(s.every((u,c)=>u.startsWith(":")?(l[u.slice(1)]=r[c],!0):u===r[c]))return{route:a[i],params:l}}return null},eo=async(t,e)=>{const n=document.querySelector("#app");n&&await je(t?.page,n,e)};async function Na(t){return new Promise(async e=>{let n=new P;n.conceptIds=[t],n.outputFormat=ce,n.selectors=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_meta_title`,`the_${k.PAGE_COMP_NAME}_meta_description`,`the_${k.PAGE_COMP_NAME}_meta_keywords`,`the_${k.PAGE_COMP_NAME}_width`,`the_${k.PAGE_COMP_NAME}_type`,`the_${k.PAGE_COMP_NAME}_font_family`,`the_${k.PAGE_COMP_NAME}_font_size`,`the_${k.PAGE_COMP_NAME}_body`,`the_${k.WIDGET_COMP_NAME}_clean`],n.inpage=100,ge(n,"").subscribe(async a=>{a.length?e(a?.[0]):!Array.isArray(a)&&a?.data==null&&e({error:!0,message:"There is no data."})}).catch(a=>{const i=a?.message;e({error:!0,message:i})})})}const ac=t=>{if($a)return;const e=new URL(window.location.href).hostname.split(".")[0].split("-")[1],n=ic(e,t),a=new Blob([JSON.stringify(n)],{type:"application/json"}),i=URL.createObjectURL(a),o=document.createElement("link");o.rel="manifest",o.href=i,document.head.appendChild(o),$a=!0};function ic(t,e){let n="/icons/icon-192x192.png",a="/icons/icon-512x512.png",o=window.location.hostname;return o.startsWith("www.")&&(o=o.substring(4)),o==="sleepinghats.com"&&(n="/icons/sleepinghats/icon-192x192.png",a="/icons/sleepinghats/icon-152x152.png"),console.log("rootDomain",o),o==="preview-103071837.develop.freeschema.com"||o=="preview-103071837.localhost"?(n="/icons/lms_chat/icon-192x192.png",a="/icons/lms_chat/maskable-icon.png",document.title="",{name:"LMS Chat",short_name:"LMS",start_url:location.origin+"/index.html",display:"standalone",theme_color:"#19c37d",background_color:"#ffffff",icons:[{src:`${location.origin}${n}`,sizes:"192x192",type:"image/png",purpose:"any"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"maskable"}]}):{name:`${yt||e.title||e.slug||t} - ${t}`,short_name:`${yt||t}`,start_url:location.origin+"/index.html",display:"standalone",theme_color:t?"#ff6600":"#ffffff",background_color:"#eee",icons:[{src:`${location.origin}${n}`,sizes:"192x192",type:"image/png",purpose:"any maskable"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"any maskable"}],share_target:{action:`${location.origin}/captures`,method:"POST",enctype:"multipart/form-data",params:{title:"title",text:"text",url:"url",files:[{name:"media",accept:["image/*","video/*"]}]}}}}const oc=async t=>{try{localStorage.removeItem(Mt);const e=new P;e.name="entity",e.typeConnection="the_entity_s_project",e.reverse=!0;const n=new P;n.name="project",n.conceptIds=[t],n.freeschemaQueries=[e],n.outputFormat=co;const a=await nt(n,"");if(!a?.[0]?.the_project?.the_entity_s_project_reverse?.[0]?.id)return;a?.[0]?.the_project?.the_entity_s_project_reverse?.length==1&&localStorage.setItem(Mt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()));for(let i=0;i<a?.[0]?.the_project?.the_entity_s_project_reverse?.length;i++)(a?.[0]?.the_project?.the_entity_s_project_reverse[i]).id!=102176333&&localStorage.setItem(Mt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()))}catch(e){console.error(e)}};async function sc(t){try{const e=new P;e.name="store",e.typeConnection="the_project_refers",e.selectors=["the_store_name","the_store_logo"];const n=new P;n.name="project",n.conceptIds=[t],n.freeschemaQueries=[e];const i=(await nt(n,""))?.[0]?.the_project?.the_project_refers?.the_store,o=i?.the_store_name?.the_name;document.title=o||"Store",to(i?.the_store_logo?.the_logo)}catch(e){console.error(e)}}function rc(t){return new Promise((e,n)=>{const a=new Image;a.crossOrigin="anonymous",a.src=t,a.onload=()=>{const o=document.createElement("canvas");o.width=o.height=512;const s=o.getContext("2d");s?.clearRect(0,0,o.width,o.height);const r=a.width/a.height;let l=512,d=512;r>1?d=512/r:l=512*r;const u=(512-l)/2,c=(512-d)/2;s?.drawImage(a,u,c,l,d);const g=o.toDataURL("image/png");e(g)},a.onerror=()=>{n(new Error("Image failed to load. Check CORS."))}})}async function lc(t){const n=(await I())?.token;let a=new P;a.name="page",a.typeConnection=`the_${k.PROJECT_COMP_NAME}_${se.PROJECT_PAGE_LINKER}`,a.selectors=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_body`];let i=new P;i.name="project",i.conceptIds=[t],i.selectors=[`the_${k.PROJECT_COMP_NAME}_name`,`the_${k.PROJECT_COMP_NAME}_main_page`],i.freeschemaQueries=[a],i.outputFormat=ce;const o=await nt(i,n);let s={mainPageId:o?.[0]?.data?.the_project?.the_project_main_page?.id,name:o?.[0]?.data?.the_project?.the_project_name?.data.the_name||"",pages:o?.[0]?.data?.the_project?.the_project_s_page?.map(r=>({id:r?.id,title:r?.data?.the_page?.the_page_title?.data?.the_title||"",path:r?.data?.the_page?.the_page_slug?.data?.the_slug||"",page:r?.data?.the_page?.the_page_body?.id}))||[]};Gt=s.mainPageId,yt=s.name,qe=s.pages}function to(t=""){var e=document.querySelector("link[rel~='icon']");e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e),setTimeout(()=>e?.remove(),1e4)),t&&rc(t).then(n=>{e.href=n}).catch(n=>{console.error(n),e.href="https://boomconcole.com/freeschema/127b5f42-f453-4904-bf4d-d2a6abc9327c.png"})}const cc=async t=>{let e=new P;e.typeConnection="the_project_environment",e.selectors=["the_environment_name","the_environment_value"];let n=new P;n.conceptIds=[t],n.freeschemaQueries=[e];let a=await nt(n,""),i=null;for(let o=0;o<a.length;o++){let s=a[o]?.the_project;if(s){let l=s?.the_project_environment?.the_environment;if(l&&(i=l?.the_environment_value?.the_environment_value,i))try{i=JSON.parse(i)}catch(d){console.error("Error parsing environment values:",d),i=null}}}if(console.log("Environment values loaded:",i),i){for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)){const s=i[o];console.log("Setting environment variable:",o,s),uo.setValue(o,s)}}},Cn=[{path:"/",linkLabel:"Home",content:async()=>(await Ie(()=>import("./home.index-BwUGZKB2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).default},{path:"/preview",linkLabel:"Preview",content:async()=>(await Ie(()=>import("./preview.index-DCWzQofe.js"),__vite__mapDeps([13,4,1]))).default},{path:"/page-preview/:id",linkLabel:"Page Preview",content:async()=>(await Ie(()=>import("./page-preview.index-CwYpcpat.js"),__vite__mapDeps([14,4,9,6,7,8,10,11,15]))).default,isAuthenticated:!0},{path:"/documentation",linkLabel:"Documentation",content:async()=>(await Ie(()=>import("./documentation.index-DK-0ZeIH.js"),__vite__mapDeps([16,1,6,7,8,17,18,2,3,4,5,9,10,11,19]))).default},{path:"/subscription",linkLabel:"Subscription",content:async()=>(await Ie(()=>import("./subscription.index-CPK4xu-F.js"),__vite__mapDeps([20,4,1,2,3,5,9,6,7,8,10,11,21]))).default,isAuthenticated:!0},{path:"/video-tutorial",linkLabel:"videos",content:async()=>(await Ie(()=>import("./video-tutorial.index-B_dsqKvK.js"),__vite__mapDeps([22,1,2,3,4,5,9,6,7,8,10,11,23]))).default},{path:"/Community",linkLabel:"Community",content:async()=>(await Ie(()=>import("./community.index-oRMlz6GL.js"),__vite__mapDeps([24,4,1,2,3,5,9,6,7,8,10,11,25]))).default}],Da=document.getElementById("app");function Ne(){return""}function dc(t){const e=Ne();if(!t)return e||"/";if(e&&t.startsWith(e))return t;const n=t.startsWith("/")?t:"/"+t;return(e+n).replace(/\/+/g,"/")}const uc=()=>{let t=localStorage?.getItem("profile")||"";return t?!!JSON.parse(t)?.token:!1},mc=t=>new RegExp("^"+t.replace(/:\w+/g,"(.+)")+"$"),gc=t=>{const e=t.result.slice(1),n=Array.from(t.route.path.matchAll(/:(\w+)/g)).map(a=>a[1]);return Object.fromEntries(n.map((a,i)=>[a,e[i]]))},pc=async()=>{const t=new URLSearchParams(location.search);return Object.fromEntries(t.entries())};async function ha(){const t=Ne();let e=window.location.pathname;t&&e.startsWith(t)&&(e=e.substring(t.length)||"/",e.startsWith("/")||(e="/"+e));let a=Cn.map(r=>({route:r,result:e.match(mc(r.path))})).find(r=>r.result!==null);if(!a)a={route:Cn.find(l=>l.path==="/404"),result:[e]};else if(a.route.isAuthenticated&&!uc()){const r=Cn.find(l=>l.path==="/");a={route:r,result:[r?.path]},history.replaceState(null,"",t+r?.path+window.location.search)}const i={...await gc(a),...await pc()},o=await a.route.content(i),s=new o(i);Da.innerHTML="",await s?.mount(Da)}const no=async t=>{const e=document.getElementById("global-loader");e?.classList.remove("d-none");try{const n=Ne(),a=t.startsWith(n)?t:n+t;history.pushState(null,"",a),await ha()}finally{e?.classList.add("d-none")}},ao=async t=>{const e=Ne();window.history.pushState({route:t},"",e+t),ha()},xt=t=>{const e=Ne(),n=t.startsWith(e)?t:e+t;history.pushState(null,"",n)},hc=()=>{const t=Ne(),e=window.location.pathname+window.location.search;let n=e;t&&e.startsWith(t)&&(n=e.substring(t.length)||"/",n.startsWith("/")||(n="/"+n)),no(n)},fc=()=>{customElements.define("router-link",class extends HTMLElement{constructor(){super(),this.handleClick=this.handleClick.bind(this),this.href&&this.attachShadow({mode:"open"})}connectedCallback(){const t=document.createElement("a"),e=Ne();this.href&&(t.href=e+this.href),this.forwardAttributes(t),t.setAttribute("part","link");const n=document.createElement("slot");t.appendChild(n),this.shadowRoot&&this.shadowRoot.appendChild(t),this.addEventListener("click",this.handleClick)}forwardAttributes(t){["target","download","rel","hreflang","type","title","tabindex","accesskey"].forEach(n=>{this.hasAttribute(n)&&t.setAttribute(n,this.getAttribute(n))})}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}handleClick(t){const e=this.getAttribute("target"),n=this.getAttribute("href");e==="_blank"||t.ctrlKey||t.metaKey||t.button===1||this.hasAttribute("download")||n&&(t.preventDefault(),no(n))}set href(t){const e=Ne();this.setAttribute("href",t);const n=this.shadowRoot?.querySelector("a");n&&(n.href=e+t)}get href(){return this.getAttribute("href")}set target(t){t&&this.setAttribute("target",t)}get target(){return this.getAttribute("target")}})};function yc(){hc(),fc(),window.addEventListener("popstate",ha)}const wc=async t=>{const e=["localhost","visualwidget.boomconcole.com","develop.freeschema.com","anilserver.freeschema.net","wico.freeschema.com"],n=["/wico"],a=window.location.pathname,i=n.some(r=>a===r||a.startsWith(r+"/")),o=window.location.hostname,s=o.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s&&cc(parseInt(s)),s)fn(parseInt(s));else if(e.includes(o)||i)await Ie(()=>import("./initialLoadWICO-C_7n05L5.js"),__vite__mapDeps([26,4,3,5,9,6,7,8,10,11])),yc();else try{vc(o)}catch(r){console.error(r),yn()}};function yn(){const t=document.getElementById("global-loader");t&&t.setAttribute("style","display: none !important");const e=document.getElementById("app");e&&(e.innerHTML="<h1>404</h1>")}function vc(t=""){try{const e=JSON.parse(sessionStorage.getItem("cacheServers")??"[]")||[],n=e.length>0&&e?.[0]!="https://boomconsole.com"?e[0]:"https://deploy.freeschema.com",a=new URLSearchParams;a.append("url",t),console.log("server",n),fetch(n+"/api/project-deploy",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(async i=>{const o=await i.json();ec(o.data)}).catch(i=>{console.error(i),Ha(t);try{const s=JSON.parse(sessionStorage.getItem("domainRecord")??"{}");if(s&&s.expiresAt>Date.now()){const r=s.value;r&&fn(parseInt(r));return}}catch(o){console.error(o),yn()}})}catch(e){console.error(e),Ha(t)}}function Ha(t=""){const e=new URLSearchParams;e.append("url",t),fetch(z.baseURL+"/dns/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}).then(async n=>{const a=await n.json();if(!a)bc();else{const i=a?.startsWith("http")?a:"http://"+a,s=new URL(i).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s)fn(parseInt(s));else throw new Error("Path Not Valid")}}).catch(n=>{console.error(n),yn()})}function bc(){fetch(z.baseURL+"/cname").then(async t=>{const e=await t.json()||[];if(e?.[0]){const n=e[0]?.startsWith("http")?e[0]:"http://"+e[0],i=new URL(n).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(i)fn(parseInt(i));else throw new Error("Path Not Valid")}else throw new Error("Doamin Not Found")}).catch(t=>{console.error(t),yn()})}let io=null;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),io=t});const _c={activate:z.enableSW,scope:"/",pathToSW:"/serviceWorker.bundle.js",manual:!0};await Mo();"serviceWorker"in navigator&&(navigator.serviceWorker.register("/sw.js").then(()=>{console.log("Service Worker registered")}),navigator.serviceWorker.addEventListener("message",t=>{const{title:e,text:n,url:a,file:i}=t.data;console.log("Shared data received:",{title:e,text:n,url:a,file:i})}));mo(z?.boomURL,z?.aiURL,"",z?.baseNodeUrl,void 0,"widget_conceptualizer",_c,{logApplication:!0,logPackage:!1,isTest:!1,accessTracker:!1},{logserver:z.logserver});const Ec=await I();qa(Ec?.token);wc();window.PWAInstallHandler=(()=>{let t=null,e=null,n=null;return{init:({onInstall:s,onDismiss:r})=>{e=s,n=r,t=io,window.addEventListener("appinstalled",()=>{console.log("PWA installed successfully!"),localStorage.setItem("pwaInstalled","true"),e&&e()})},isInstalled:()=>window.matchMedia("(display-mode: standalone)").matches||window.navigator?.standalone,showInstallPrompt:()=>{console.log("deferedPrompt",t),t&&(t.prompt(),t.userChoice.then(s=>{s.outcome==="accepted"?(console.log("User installed the PWA."),e&&e()):(console.log("User dismissed the install prompt."),n&&n()),t=null}))}}})();export{Ee as A,be as B,k as C,Mc as D,ht as E,$i as F,Hr as G,z as H,qn as I,Se as J,ao as K,de as L,no as M,xc as N,Qe as P,f as S,rl as T,Ks as _,pt as a,tt as b,V as c,X as d,st as e,cl as f,I as g,Mn as h,Zn as i,Si as j,mn as k,ze as l,H as m,Oe as n,Gn as o,ga as p,kc as q,Jt as r,ws as s,A as t,Ic as u,De as v,N as w,Mi as x,Pc as y,$c as z};
