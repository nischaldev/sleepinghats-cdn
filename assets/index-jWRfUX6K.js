const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home.index-CTQWf9TF.js","assets/mainView.class-C4NLGCWW.js","assets/navbar.component-BYIWK0cF.js","assets/loginModal.service-CqMH5naL.js","assets/mftsccs-browser-kNLGvA95.js","assets/loginModal-DGhNYttL.css","assets/vendor-DEYWGvhS.js","assets/ckeditor-Cw9bcqxY.js","assets/vendor-TRZluGMH.css","assets/codemirror-D1H9tReK.js","assets/eslint4b-BLWGvIOa.js","assets/prettier-ClL2wQep.js","assets/home-BRuQr2K9.css","assets/preview.index-Bd9QIm9G.js","assets/page-preview.index-BIE5CUdj.js","assets/page-preview-BJCVd99J.css","assets/documentation.index-PQIac77t.js","assets/highlight-CFrhCzdo.js","assets/highlight-ZgkIHsf0.css","assets/documentation-CtKxHXjz.css","assets/subscription.index-BpEfAwIJ.js","assets/subscription-Dc24vCVe.css","assets/video-tutorial.index-D644wU37.js","assets/video-tutorial-Dg46rKRD.css","assets/community.index-dHGuK3UD.js","assets/community-CARjtQbC.css","assets/initialLoadWICO-DnSc-AZm.js"])))=>i.map(i=>d[i]);
import{h as ee,y as Nn,G as Hn,a as Da,Z as P,v as Tn,_ as de,b as U,V as Vt,c as Rt,d as Na,H as he,e as J,B as be,A as ns,D as ua,f as Ha,O as Oe,T as as,l as qa,s as N,g as ma,K as X,F as ue,M as Le,z as is,i as bt,t as Oa,n as ss,j as Be,k as re,m as Ce,o as Ie,p as $e,Q as Fe,q as K,R as Sn,r as Fa,I as ga,u as Va,w as Ra,x as os,C as rs}from"./mftsccs-browser-kNLGvA95.js";import{E as oe,b as Ut,o as zt,j as Ua,a as Jt,c as ls,l as cs,d as ds,e as us,f as je,k as Gt,h as ms,g as gs}from"./codemirror-D1H9tReK.js";import{J as Qt,n as ps}from"./vendor-DEYWGvhS.js";import{z as hs}from"./eslint4b-BLWGvIOa.js";import{l as tt,p as Kt,r as Yt,a as fs,b as ys}from"./prettier-ClL2wQep.js";import{C as ws}from"./ckeditor-Cw9bcqxY.js";const bs=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return Ui},get addJSLibrary(){return zi},get applyPageProperties(){return Dn},get applyPageProperty(){return _e},get filterChildrenByWrapper(){return Oi},get getAttributeType(){return Gl},get getAttributeValue(){return Gi},get getElementAttribute(){return Hl},get getElementAttributeDetails(){return oa},get getElementData(){return Hi},get getLayoutAttributeValue(){return Qi},get getPropertiesByIdFromStorage(){return Et},get handleDirectContentEdit(){return ql},get handlePageProperties(){return Fi},get initializeApp(){return mn},get initializeLibrary(){return ra},get listJSLibraries(){return Tt},get removeCSSLibrariesFromHead(){return Ot},get removeJSLibrariesFromHead(){return la},get setAttributeValue(){return Kl},get toggleSpacingBox(){return ca},get updateAttribute(){return Fl},get updateCSSLibrary(){return ze},get updateElementAttribute(){return dn},get updateElementAttributeViaEditor(){return Ol},get updateJSLibrary(){return Je},get updateMetaTag(){return wt},get updateMultipleElementAttribute(){return Vi},get updateWidgetTypeValue(){return qi}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const z={baseURL:"https://boomconsole.com/api/v1",baseNodeUrl:"https://boomconsole.com",boomURL:"https://boomconsole.com",aiURL:"https://www.ai.freeschema.com/api",deployURL:"https://deploy.freeschema.com",CLIENT_ID:"636550695311-ctc09991hhu6iav4kkhnp1ge537nec2i.apps.googleusercontent.com",logserver:"https://logger.freeschema.com",enableSW:!1,discussion_community:101765915,ai_widget:101934087,visual_prototype_widget:101938499,video_tutorial_widget:102040172,subscriptionId:102121109,documentation_preview_widget:102097744,folder_widget:102400016,assets_widget:102410590,VITE_DEV_BASE:"http://localhost:5173",VITE_CDN_BASE:"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master"},vs=z?.boomURL;async function F(t,e,n){const a=await ee(`the_${t}`,"",!0,e,4,999);for(const[i,s]of Object.entries(n)){let o=i;const r=await ee(`${o}`,`${s}`,!1,e,4,999);await q(a,r,o)}return a}async function q(t,e,n){const a=t.userId,i=999,s=999,o=t.type?.characterValue,r=n,l=o+"_"+r,c=await Nn(l,i,s,a);await Hn(t.id,e.id,c.id,1e3)}async function _s(t,e){try{const n=new Headers;return n.append("Content-Type","application/json"),n.append("Authorization",`Bearer ${e}`),await(await fetch(`${vs}/api/get-entity-from-user?userConceptId=${t}`,{method:"GET",headers:n,redirect:"follow"})).json()}catch(n){throw console.error(n),n}}async function Ec(t){const e=await _s(t?.data?.userConcept,t?.data?.token);let n={token:t?.data?.token,refreshToken:t?.data?.refreshtoken,email:t?.data?.email,userId:t?.data?.entity?.[0]?.userId,userConcept:t?.data?.userConcept,entityId:e?.entity,amcode:btoa(JSON.stringify(t?.data?.roles))};return Da(n.token),localStorage.setItem("profile",JSON.stringify(n)),!0}async function I(){return new Promise(t=>{let e=localStorage?.getItem("profile")||"";if(e){const n=JSON.parse(e);t(n)}else t()})}async function za(){return new Promise(t=>{let e=localStorage?.getItem("tempwidget")||"";if(e){const n=JSON.parse(e);t(n)}else t()})}const Es=z?.baseNodeUrl;class Ee{static instance;static getInstance(){return Ee.instance||(Ee.instance=new Ee),Ee.instance}async getLoginInfo(){const e=await I(),n=await this.checkIfUserIsAdmin(e?.userConcept);let a="",i=!1,s=!1;if(e?.token){i=!0;let o="",r="";if(e?.entityId){let l=new P;l.typeConnection="the_entity_firstname",l.name="entity_firstname";let c=new P;c.typeConnection="the_entity_lastname",c.name="entity_lastname";let u=new P;u.typeConnection="the_entity_tour_status",u.name="entity_tour_status";let d=new P;d.type="the_entity",d.name="top",d.conceptIds=[e.entityId],d.freeschemaQueries=[l,c,u],d.outputFormat=Tn;let g;await de(d,"").subscribe(m=>{g=m}),o=g?.[0]?.the_entity?.the_entity_firstname?.the_firstname||"",r=g?.[0]?.the_entity?.the_entity_lastname?.the_lastname||"",s=g?.[0]?.the_entity?.the_entity_tour_status?.the_tour_status==="true"}a=`
        <div id="profileIcon" class="position-relative" onclick="headerFunctions.openUserActionModel()">
          ${e?.email?.slice(0,1)}
          <div id="profileDropdown">
            <div class="user-email">
              <span class="material-symbols-outlined">account_circle</span>
              <div class="user-info">
                <div class="full-name">${o} ${r}</div>
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
      `;return{loginInfoHTML:a,isLoggedIn:i,isAdmin:n,tourStatus:s}}async checkIfUserIsAdmin(e){try{return(await U(e))?.accessId===3}catch(n){return console.error("Error fetching user concept:",n),!1}}async logout(){const e=await za();await Vt(e?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),location.reload()}async checkAndUpdateToken(){try{const e=await I();if(!e?.token){console.warn("No token found in local storage.");return}const n=e.token,a=e.refreshToken,i=new Headers;i.append("Content-Type","application/json");const s={accessToken:n,refreshToken:a},r=await(await fetch(`${Es}/api/Auth/refresh`,{method:"POST",headers:i,body:JSON.stringify(s)})).json();if(r.success&&r.data){const{accessToken:l,refreshToken:c}=r.data;e.token=l,e.refreshToken=c,localStorage.removeItem("profile"),localStorage.setItem("profile",JSON.stringify(e))}else this.logout()}catch(e){console.error("Error refreshing token:",e)}}}const Ts=Ee.getInstance();(function(){const e=window.fetch;window.fetch=async(...n)=>{const a=n[1]||{};try{const i=await e(...n);if(i.status===401){console.warn("401 Unauthorized - Refreshing token"),await Ts.checkAndUpdateToken();const s=await I();if(!s?.token)return console.error("Token refresh failed. User not logged in."),i;if(a.headers){const o=new Headers(a.headers);o.set("Authorization",`Bearer ${s.token}`),o.has("Content-Type")||o.set("Content-Type","application/json"),a.headers=o}return e(n[0],a)}return i}catch(i){throw console.error("Intercepted Fetch Error:",i),i}}})();const Ss="modulepreload",Cs=function(t){return"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master/"+t},pa={},Me=function(e,n,a){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(n.map(l=>{if(l=Cs(l),l in pa)return;pa[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Ss,c||(d.as="script"),d.crossOrigin="",d.href=l,r&&d.setAttribute("nonce",r),document.head.appendChild(d),c)return new Promise((g,m)=>{d.addEventListener("load",g),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return i.then(o=>{for(const r of o||[])r.status==="rejected"&&s(r.reason);return e().catch(s)})};function Cn(t,e=0){let n=`<ul style="list-style: none; margin: 10px 0px; ${e==0?" padding-left: 0px; ":""}" id="sortable-list">`;for(let a=0;a<t.length;a++){const i=t[a];i.edit?n+=`
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
                <li>${i.menus?`${Cn(i.menus,e+1)}`:""}</li>
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
                <li>${i.menus?`${Cn(i.menus,e+1)}`:""}</li>
            `}return n+="</ul>",n}function st(t){console.log("menus",t);const e=Cn(t),n=document.getElementById("menu-items");n&&(n.innerHTML=e);let a=null;document.querySelectorAll("#sortable-list li").forEach(i=>{i.addEventListener("dragstart",s=>{a=i,s.dataTransfer.effectAllowed="move"}),i.addEventListener("dragover",s=>{s.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",s=>{s.preventDefault(),i.classList.remove("drag-over"),a!==i&&!i.contains(a)&&i?.parentNode?.insertBefore(a,i.nextSibling)}),i.addEventListener("dragend",()=>{document.querySelectorAll(".drag-over").forEach(s=>s.classList.remove("drag-over"))})})}async function Ja(t){console.log("projectId",t);let e;if(t||(e=Ka()),!t&&!e?.projectId)return console.log("Project Id not found"),[];if(!t&&e.projectId&&(t=e?.projectId),console.log("projectId 2",t),!t)return[];const n=["the_item_menu_name","the_item_menu_link","the_item_menu_action","the_item_menu_auth","the_item_menu_order","the_item_menu_page"],a=new P;a.typeConnection="the_menu_s_item",a.selectors=n;function i(u,d=5){if(d==5)return;const g=new P;g.typeConnection="the_menu_s_item",g.selectors=n,u.name=d.toString(),u.freeschemaQueries=[g];const m=d+1;i(g,m)}const s=new P;s.conceptIds=[t],i(s,1);const o=await Rt(s,"");console.log("valllu",o);const r=o?.[0]?.the_project?.the_menu_s_item||[],l=(u=[])=>{let d=[];for(let g=0;g<u.length;g++){const m=u[g];d.push({name:m?.the_item_menu?.the_item_menu_name?.the_name??"",link:m?.the_item_menu?.the_item_menu_link?.the_link??"",action:m?.the_item_menu?.the_item_menu_action?.the_action??"",page:m?.the_item_menu?.the_item_menu_page?.the_page?Number(m?.the_item_menu?.the_item_menu_page?.the_page):"",order:m?.the_item_menu?.the_item_menu_order?.the_order?Number(m?.the_item_menu?.the_item_menu_order?.the_order):0,auth:m?.the_item_menu?.the_item_menu_auth?.the_auth=="true",menus:l(m?.the_item_menu?.the_menu_s_item)??[]})}return d.sort((g,m)=>g.order-m.order)};return l(r)}async function Ls(t,e=[]){console.log("menus",e);const n=await new Na;try{await n.initialize();const a=await U(t);await he(t,"the_menu_s_item"),await Ga(a,e,n),await n.commitTransaction(),console.log("output concept",t)}catch(a){console.error(a),await n.rollbackTransaction()}}async function Ga(t,e=[],n){for(let a=0;a<e.length;a++){const i=e[a],s=await n.MakeTheInstanceConceptLocal("the_item_menu","",!0,999,4);await n.CreateConnection(t,s,"the_menu_s_item");for(let[o,r]of Object.entries(i))if(console.log("key",o,r),!!["name","link","action","auth","order","page","menus"].includes(o)&&!(o=="menus"&&!Array.isArray(r)))if(o=="menus")await Ga(s,r,n);else{const c=await n.MakeTheInstanceConceptLocal("the_"+o,r,!0,999,4);await n.CreateConnection(s,c,"the_item_menu_"+o)}}}const As=async()=>{const t=z.enableSW;"serviceWorker"in navigator&&t&&await new Promise((e,n)=>{navigator.serviceWorker.register("/sw.js").then(a=>{a.addEventListener("updatefound",()=>{const i=a.installing;i?.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&(i.postMessage("skipWaiting"),setTimeout(()=>{confirm("A reload is required to update to latest")&&window.location.reload()},500))})}),e(void 0)}).catch(a=>{console.error("Service Worker Init error",a),n(a)}),setTimeout(()=>{n()},3e4)})},Qa="wico_site";function Ka(){const t=atob(localStorage.getItem(Qa)||"");return t?JSON.parse(t):{}}function Ya(t,e){const n=Ka();n[t]=e,localStorage.setItem(Qa,btoa(JSON.stringify(n)))}function Za(){window.wico={fetchMenus:Ja}}async function Ws(){await As()}const k={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"},se={ENTITY_PAGE_LINKER:"s_page",PAGE_WIDGET_LINKER:"body",ENTITY_PROJECT_LINKER:"s_project",PROJECT_PAGE_LINKER:"s_page"},vt=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],qn=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],Ln=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],xs=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let ha=[],fa=[];async function ks(t){let e="";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const a=t[n];e+=` ${n}="${a}" `}return e}async function Ms(t,e){const n=new J;n.composition=t,n.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const a=await be([n],e),i=a?.data?.the_widget?.the_widget_html?.[0]?.id,s=a?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,o=a?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!i)return{html:"",css:"",js:""};const r=await ns(i,["contain_s"]);ha=await ua(r.externalConnections),fa=await ua(r.internalConnections);let l=await Xa(i,ha,fa);const c=document.createElement("div");return c.innerHTML=l,{html:(c?.querySelector(".widget-wrapper")).innerHTML,css:s||"",js:o||""}}async function Xa(t,e,n){try{let a="",s=Ps(e)[t];if(s!=null){let o=$s(s);const l=(await Ii())?.map(g=>{const m=g?.id,p=g?.data?.the_element?.the_element_name?.[0]?.data?.the_name,h=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,w=g?.data?.the_element?.the_element_void?.[0]?.data?.the_void,A=g?.data?.the_element?.the_element_s_attribute?.map(T=>{const b=T?.data?.the_attribute,y=b?.the_attribute_name?.[0]?.data?.the_name,_=b?.the_attribute_type?.[0]?.data?.the_type,C=b?.the_attribute_value?.[0]?.data?.the_value;return{name:y,type:_,value:C}});return{id:m,name:p,tag:h,void:w,attributes:A}}),c=[...qn,...Ln],d=(await I())?.userId;for(let g=0;g<o.length;g++){const m=o[g];if(m.ofTheConceptId==t){const p=await Is(m.toTheConceptId,n),h=Object.keys(p.data)[0],w=p.data[h],E=vt.includes(h),A=await ks(w?.attributes||[]),T=l.find(y=>y.tag===h.toLowerCase().trim()),b=w?.attributes;for(const y in b){const _=c.find(S=>y===S?.name?.toLowerCase().trim()),C=b[y],v=_?.type;T.attributes=T?.attributes?.map(S=>(S?.name==="className"&&y==="class"?S.value=C:S?.name==="elementContent"?S.value=w?.innerText:y===S?.name&&(v==="array"?S.selected=C:v==="boolean"?S.value="":S.value=C),S))}if(h!="text"){const y=await Ha(p.id,d);y?.length&&await Vt(y?.[0]?.id);const _={[`wdgt${p.id}`]:T},C=await Oe(_,null,null,null,d);console.log("elementAttributeComp ->",C),a+=`
            <div id="wdgt${p.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${T?.id}">
            <${h} data-cc-id="${p.id}" `+A+`${E?"/></div>":">"}`,a+=await Xa(m.toTheConceptId,e,n)}(w.contains=="false"||h=="text")&&(a+=" "+w.innerText+" "),!E&&h!="text"&&(a+=`</${h}></div>`)}}}return a}catch(a){console.error("error converting html",a)}}async function Is(t,e){var n=[],a={},i=e;n=i;for(var s=[],o=0;o<n.length;o++)s.includes(n[o].ofTheConceptId)||s.push(n[o].ofTheConceptId);var r=await U(t);if(r.id==0&&t!=null&&t!=null){var l=await U(t);r=l}var c=await as(t,n,s),u=r?.type?.characterValue??"";a[u]=c;var d={};return d.data=a,d.id=t,d}function Ps(t){return t.reduce((e,n)=>{const{ofTheConceptId:a}=n;return e[a]||(e[a]=[]),e[a].push(n),e},{})}function $s(t){const e=new Map;t.forEach(s=>{e.set(s.id,s)});const n=[],a=new Set,i=s=>{if(!a.has(s.id)){a.add(s.id),n.push(s);for(const o of t)o.orderId==s.id&&i(o)}};return t.forEach(s=>{s.orderId==1e3&&i(s)}),n}async function Tc(){return"WICO"}async function ke(){const t=await za();await Vt(t?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await es("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async function Bs(t,e){var n=[];try{var a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization",`Bearer ${e}`),a.append("Randomizer",qa.BASE_RANDOMIZER.toString());const i=await fetch(z.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:a,body:JSON.stringify({id:t})});return i.ok?await i.json():(console.log("recursive search error ",i.status),n)}catch(i){console.log(i)}}async function ei(t,e,n=1e3,a){const i=t.userId,l=await Nn("contain_s",999,999,i);return await Hn(t.id,e.id,l.id,n)}const js="the_widget";async function Ds(t,e,n){return await Ns(t,e,n)}async function Ns(t,e,n){const s=new DOMParser().parseFromString(t,"text/html").body,o=await Oe({[js]:{}});e&&await Hs(e,o),n&&await qs(n,o);const r=await Oe({widgetHTML:{}});await q(o,r,"html");const l=await ti(s.children[0],r);return await ei(r,l),await N.SyncDataOnline(),o}async function Hs(t,e){const a=(await I())?.userId,s=await ee("the_widgetCSS",t,!0,a,4,999);await q(e,s,"css")}async function qs(t,e){const a=(await I())?.userId,s=await ee("the_widgetJS",t,!0,a,4,999);await q(e,s,"js")}async function ti(t,e){console.log("parentConcept ->",e);const n={};if(n.tagName=t?.tagName?.toLowerCase(),t?.attributes?.length>0){n.attributes={};for(let s of t.attributes)n.attributes[s.name]=s.value}t?.textContent?.trim()&&(n.text=t.textContent.trim());let a={[n.tagName?n.tagName:"text"]:{contains:t?.children?.length?"true":"false",attributes:n.attributes||"",innerText:t?.children?.length?"":n.text||""}};const i=await Oe(a);if(t?.childNodes?.length>0){n.children=[];let s=[],o=-1,r,l;for(let u of t.childNodes)if(!(u.nodeType===Node.TEXT_NODE&&u.textContent?.trim()==="")&&!(t.children.length===0&&u.nodeType===Node.TEXT_NODE)){if(u.nodeType===Node.TEXT_NODE){let d={text:{contains:!1,attributes:"",innerText:u.textContent?.trim()}};const g=await Oe(d);s.push({parentConcept:i,childConcept:g,orderId:l})}else u.nodeType===Node.ELEMENT_NODE&&(r=await ti(u,i),s.push({parentConcept:i,childConcept:r,orderId:l}));o>=0&&(s[o]={...s[o],orderId:r?.id}),o++}let c=1e3;for(let u=0;u<s.length;u++){const d=s[u];c=(await ei(d.parentConcept,d.childConcept,c)).id}}return i}const Os="widget-conceptualizer",Fs="0.0.0",Vs="module",Rs={dev:"vite --config vite.config.js --force",build:"tsc && vite build --config vite.config.prod.js",preview:"vite preview"},Us={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},zs={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.168-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},ya={name:Os,private:!0,version:Fs,type:Vs,scripts:Rs,devDependencies:Us,dependencies:zs};function Js(t,e,n,a){switch(n){case"int":t=t.sort(function(i,s){return parseInt(i[e])>parseInt(s[e])?1:parseInt(i[e])<parseInt(s[e])?-1:0});break;default:t=t.sort(function(i,s){return i[e].toLowerCase()>s[e].toLowerCase()?1:i[e].toLowerCase()<s[e].toLowerCase()?-1:0})}}function An(t){let e={};for(let n=0;n<t.length;n++){const a=t[n];a?.type&&a?.type!=="submit"&&(e[a.name]=a?.value)}return e}function Gs(t){const e=ya.dependencies||{},n=ya.devDependencies||{};return e[t]||n[t]||null}async function Xe(t,e,n,a,i){await he(t,e);const s=await ee(n,a,!1,i,4,999);let o=await Nn(e,999,999,i);return await Hn(t,s?.id,o.id,1e3,o.characterValue,i),"Delete and update completed"}class Ge{async generateSlug(e){const n=await I();let a=new J;a.composition=n?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new J;i.fullLinkers=["the_page_slug"],i.inpage=100;const s=[a,i];let o=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return await ma(s,"",Tn).subscribe(r=>{const l=r?.the_entity?.the_entity_s_page?.map(d=>d?.the_page?.the_page_slug?.[0]?.the_page_slug)||[];let c=o,u=o.match(/^(.*?)(?:-(\d+))?$/);if(u){c=u[1];let g=(u[2]?parseInt(u[2],10):0)+1;for(;l.includes(o);)o=`${c}-${g++}`}}),o}async checkSlugAvailablity(e){const n=await I();let a=new J;a.composition=n?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new J;i.fullLinkers=["the_page_slug"],i.inpage=100;const s=[a,i];let o=!0;return await ma(s,"",Tn).subscribe(r=>{(r?.the_entity?.the_entity_s_page?.map(c=>c?.the_page?.the_page_slug?.[0]?.the_page_slug)||[]).includes(e)&&(o=!1)}),o}async savePage(e,n,a){const i=await F(k.PAGE_COMP_NAME,n,e),s=await X(a);return await q(s,i,se.ENTITY_PAGE_LINKER),i}async renamePage(e,n,a){return await Xe(Number(n),"the_page_title","title",e?.title,a),await Xe(Number(n),"the_page_slug","slug",e?.slug,a),"renamed"}async getAllPages(e){const n=await I(),a=n?.token;let i=new J;e?i.composition=e:i.composition=n.entityId,i.fullLinkers=[`the_entity_${se.ENTITY_PAGE_LINKER}`],i.inpage=100;let s=new J;return s.fullLinkers=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_body`],s.inpage=100,(await be([i,s],a))?.data?.the_entity?.[`the_entity_${se.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const n=await I();if(!n?.token)return null;const a=n?.token;let i=new J;i.composition=e,i.fullLinkers=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_meta_title`,`the_${k.PAGE_COMP_NAME}_meta_description`,`the_${k.PAGE_COMP_NAME}_meta_keywords`,`the_${k.PAGE_COMP_NAME}_width`,`the_${k.PAGE_COMP_NAME}_type`,`the_${k.PAGE_COMP_NAME}_font_family`,`the_${k.PAGE_COMP_NAME}_font_size`,`the_${k.PAGE_COMP_NAME}_body`],i.inpage=100;let s=new J;return s.fullLinkers=[`the_${k.WIDGET_COMP_NAME}_clean`],s.inpage=100,await be([i,s],a)}async getPageById(e){return new Promise(async n=>{const a=await I();if(!a?.token)return null;const i=a?.token;let s=new P;s.conceptIds=[e],s.outputFormat=ue,s.selectors=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_meta_title`,`the_${k.PAGE_COMP_NAME}_meta_description`,`the_${k.PAGE_COMP_NAME}_meta_keywords`,`the_${k.PAGE_COMP_NAME}_width`,`the_${k.PAGE_COMP_NAME}_type`,`the_${k.PAGE_COMP_NAME}_font_family`,`the_${k.PAGE_COMP_NAME}_font_size`,`the_${k.PAGE_COMP_NAME}_body`,`the_${k.WIDGET_COMP_NAME}_clean`],s.inpage=100,de(s,i).subscribe(async o=>{if(o.length)n(o?.[0]);else if(!Array.isArray(o)&&o?.data==null){const r="There is no data.";L.infoMessageToast(r,4),n({error:!0,message:r})}}).catch(o=>{const r=o?.message;L.errorToast(`${r}`,4),n({error:!0,message:r})})})}async updatePageField(e,n,a){const i=await I(),s=`the_${k.PAGE_COMP_NAME}_${e}`;await he(a,s);const o=await U(a),r=await ee(`${e}`,`${n}`,!1,i.userId,4,999);await q(o,r,e),await N.SyncDataOnline()}async deletePage(e){await Le(e)}}class ni{_pagesService;constructor(){this._pagesService=new Ge}async getPagesListHTML(){window.pageHandler=Lr;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(a=>{let i=a?.data?.[`the_${k.PAGE_COMP_NAME}`],s=i?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,o=i?.[`the_${k.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
            <li class="page-item">
              <router-link class="page_title" href="?page-id=${a.id}" data-pageId="${a.id}" onclick="pageHandler(event)">
                <span><img src="./images/icons/pages-white.svg" alt="" class="icon" /></span>
                  ${s}
              </router-link>
                  <!-- Three-Dot Dropdown Icon -->
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${a?.id})" title="Options"> more_vert </span>

              <!-- Dropdown Menu -->
              <ul class="dropdown-menu" id="dropdown-menu-${a?.id}" data-slug="${o}", data-title="${s}">
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
          `}catch(e){return console.error("error",e),e?.status===401&&ke(),`
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
    `}}const Qs=(()=>{const t=()=>{document.querySelectorAll("#navBarContainer > span").forEach(o=>{o.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(o=>{o.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(o=>{o.remove()})};return{toggle:i=>{const s=i.target,o=s?.dataset?.id;if(s.classList.contains("activeNavigationIcon")){t();return}if(o){document.querySelectorAll("#navBarContainer > span").forEach(d=>{d.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(d=>{d.classList.remove("navActive")});const c=document.getElementById(o);document.querySelector(`[data-id='${o}']`)?.classList.add("activeNavigationIcon"),c?.classList.add("navActive"),o=="fs-all-pages-list"&&new Kn().initPagesSidebar()}},collapseNavbar:i=>{const s=i.target;document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.getElementById(s.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")})},checkForActiveNavigation:()=>{const i=document.querySelector(".activeNavigationIcon");if(i){const s=i.dataset?.id||"";document.getElementById(s)?.classList.remove("navActive")}},resetNavigationBar:t}})();function Lt(t){return new Promise(e=>{const n=document.createElement("div");n.className="custom-confirm-modal",n.innerHTML=`
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
        `,n.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(n),e(!0)}),n.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(n),e(!1)}),document.body.appendChild(n)})}class V{static staticElement;static previousSelectedStaticElement}function At(){const t=document.getElementById("select-box");t.style.display="none"}function wa(){const t=document.getElementById("select-box");Ye(),t.style.transition="none",Wt()}function Wt(){const t=V?.staticElement;if(t){const e=t.getBoundingClientRect(),n=e.left,a=e.top,i=document.getElementById("select-box");i.style.display="block",i.style.width=t.offsetWidth+"px",i.style.height=t.offsetHeight+"px",i.style.top=`calc(${a}px)`,i.style.left=`calc(${n}px)`}}function we(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=a=>{a.removeEventListener("click",Ke),a.removeEventListener("mouseenter",dt),a.removeEventListener("mouseleave",Ye)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&n(a)}),e.forEach(a=>{a.classList.contains("fslayout-row")?(a.addEventListener("click",function(i){i.target===a&&(i.preventDefault(),i.stopPropagation(),Ke(i))}),a.addEventListener("mouseenter",dt),a.addEventListener("mouseleave",Ye)):a.classList.contains("fslayout-col")?a.addEventListener("click",function(i){if(i.target===a){i.preventDefault(),i.stopPropagation();const s=a.closest(".fslayout-row");if(s){const o=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(o,"target",{value:s}),Ke(o)}}}):a.closest(".fslayout-col")?(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Ke(i)}),a.addEventListener("mouseenter",dt),a.addEventListener("mouseleave",Ye)):(a.closest(".edited-widget-container")||!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Ke(i)}),a.addEventListener("mouseenter",dt),a.addEventListener("mouseleave",Ye))})}function Ks(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=a=>{a.removeEventListener("click",Ke),a.removeEventListener("mouseenter",dt),a.removeEventListener("mouseleave",Ye)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&n(a)})}class We{static instance;static events=new Map;constructor(){}static getInstance(){return We.instance||(We.instance=new We),We.instance}static subscribe(e,n){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(n)}static publish(e,n){this.events.has(e)&&this.events.get(e).forEach(a=>a(n))}static unsubscribe(e,n){if(this.events.has(e)){const a=this.events.get(e),i=a.indexOf(n);i>-1&&a.splice(i,1)}}}class Ys extends is{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=We.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),n=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(n),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),We.subscribe("page:elementClick",a=>{this.handlePageElementClick(a)}),We.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),n=this.buildTree(e);n&&this.treeRoot&&this.treeRoot.appendChild(n)}getHtml(){return""}handlePageElementClick(e){let n=e;for(;n&&!this.treeItems.has(n);)n=n.parentElement;if(n){const a=this.treeItems.get(n);if(a){document.querySelectorAll(".tree-item").forEach(s=>{s.classList.remove("active")}),a.classList.add("active"),a.scrollIntoView({behavior:"smooth",block:"center"});let i=a.closest(".tree-node")?.parentElement;for(;i;){if(i.classList.contains("children")&&i.classList.contains("hidden")){i.classList.remove("hidden");const s=i.previousElementSibling?.querySelector(".toggle-btn");s&&(s.innerHTML="▼")}i=i.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const n=document.createElement("div");n.className="tree-node";const a=document.createElement("div");a.className="tree-item",this.treeItems.set(e,a);const i=e.tagName.toLowerCase(),s=e.id?`#${e.id}`:"",o=Array.from(e.classList).map(l=>`.${l}`).join("");if(e.children.length>0){const l=document.createElement("button");l.className="toggle-btn",l.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',l.onclick=c=>{c.preventDefault(),c.stopPropagation();const u=n.querySelector(".children"),d=u.classList.contains("hidden");u.classList.toggle("hidden"),l.innerHTML=d?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},a.appendChild(l)}o.includes(".added-widget-container")&&a.classList.add("widget-tree-node");const r=document.createElement("div");if(r.classList.add("text-truncate"),r.innerHTML=`
      <span class="element-tag">${i}</span>
      <span class="element-id">${s}</span>
      <span class="element-class">${o}</span>
    `,a.appendChild(r),a.onmouseenter=()=>this.handleHover(e),a.onmouseleave=()=>this.handleHover(null),a.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},n.appendChild(a),e.children.length>0){const l=document.createElement("div");l.className="children hidden",Array.from(e.children).forEach(c=>{if(c instanceof HTMLElement){const u=this.buildTree(c);u&&l.appendChild(u)}}),n.appendChild(l)}return s!=="#widget-details"?n:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const n=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(a=>{this.isAllExpanded?a.classList.remove("hidden"):a.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(a=>{a.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function me(){const t=document.getElementById("tree-root");t.innerHTML="";const e=f.staticWidgetTree.html,n=document.querySelector(".toggle-all-btn");e?(n.style.display="flex",new Ys().mount(t)):(n.style.display="none",t.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class Wn{static navbar}function Zs(t){return t?.widgetcodeId}async function ai(t,e,n=!0,a,i,s=null){console.log("parentWidget",s);let o=new bt;o.html=t.html,o.widgetState={...a},o.widgetType=t.type,o.componentDidMountFunction=t.before_render,o.addEventFunction=t.after_render,o.mountChildWidgetsFunction=t.mount_child,o.customFunctions=t.custom_functions,o.widgetDependenciesData=t.dependency,o.inDevelopment=!0,e.innerHTML="";let r=e;if(n=!1,r&&(await o.mount(r),t.widget=o,t.children.length>0&&o.childWidgetElement?.length>0))for(let l=0;l<t.children?.length;l++){let c=t.children[l];for(let u=0;u<o.childWidgetElement.length;u++){let d=o.childWidgetElement[u];if(c.wrapper===d.id){const g=D.clearDraggedWidget(c),m=await ai(g,d,n,o.widgetState,i,o);o.childWidgets.push(m),o.css=o.css+m.css+`#${c.wrapper} { ${c.css} }`,m.dataChange(p=>{let h=p?.type?.characterValue;h&&(o.childrenData[h]=p)})}}}return o}function hn(t,e,n=!1,a,i,s){let o=Date.now();const r=document.createElement("div");if(r.innerHTML=`<div id="wdgtcopy${o}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,n==!1&&e!=0&&e!=null&&e!=null){console.log("beforeElement -->",a),document.getElementById("builder-workarea")===t&&(i="inside");const c=t.parentElement,u=r;if(i==="above")c.insertBefore(u,t);else if(i==="below"){const g=t.nextElementSibling;g?c.insertBefore(u,g):t.parentNode.appendChild(r.firstChild)}else if(i==="inside"){const g=Un(t,s.clientY);g==null?t.appendChild(u):t.insertBefore(u,g)}return document.getElementById(`wdgtcopy${o}`)?document.getElementById(`wdgtcopy${o}`):t.querySelector(`#wdgtcopy${o}`)}return t}const Ve=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],Ne=["span","a","img","button","input","label","textarea","select"],Xs=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],ba={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...Ne]},h2:{accepts:[...Ne]},h3:{accepts:[...Ne]},h4:{accepts:[...Ne]},h5:{accepts:[...Ne]},h6:{accepts:[...Ne]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...Ne]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},eo=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function xt(t,e){const n=t.target,a=t.target;let i=null;for(const d of a.children){const g=d.getBoundingClientRect();if(t.pageY<g.top+window.scrollY){i=d;break}}n.classList.remove("dragging-area");const s=to(n,"added-widget-container"),o=t.clientY;let r,l;if(s){let d=function(g,m){const p=g.height,h=m-g.top;return h<p*.25?"above":h>p*.75?"below":"inside"};if(r=s.getBoundingClientRect(),l=d(r,o),l==="inside")return{status:!1,message:"Cannot be dropped inside WIDGET!"}}else r=n.getBoundingClientRect(),l=$t(r,o);const c=e?.data_type||"",u=t?.target?.tagName?.toLowerCase();return vt.includes(u)&&l==="inside"?{status:!1,message:`${c} cannot be dropped inside ${u} tag.`}:Ve.includes(u)&&ba[u]?.accepts?.length&&!ba[u]?.accepts?.includes(c)&&l==="inside"?{status:!1,message:`${c} cannot be dropped inside ${u} tag.`}:{status:!0,message:"",elementBelowDrag:i,dropzoneEl:s||n}}function to(t,e){for(;t;){if(t.classList&&t.classList.contains(e))return t;t=t.parentElement}return!1}class ae{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(n=>n.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const n=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${n}`)).slice(0,-1).forEach(i=>i.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(n),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const n=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,n.from-6),n.from)!=="tsccs.")return null;const i=Object.keys(Oa).filter(s=>s.startsWith(n.text));return i.length>0?{from:n.from,to:n.to,options:i.map(s=>({label:s,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new oe({doc:"/* Write your code here */",extensions:[Ut,zt,Ua(),Jt({activateOnTyping:!0}),ls.data.of({autocomplete:this.tsccsCompletions}),cs(),ds(us(new hs,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),oe.lineWrapping,je.tabSize.of(2),je.allowMultipleSelections.of(!0),Gt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(n=>{if(n.docChanged){const a=n?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=a;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=a;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=a;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=a;break;case"widgetDependencies-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.dependency=a;break;default:const s=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(o=>`${o.slug}-editor-split`===this.editorContainerId);s?.length&&(s[0].code=a)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function ii(t){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",t)try{const n=await tt.format(t,{parser:"babel",plugins:[Kt,Yt],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function no(){const t=new ae("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function si(t,e){const n=document.querySelector('.cm-content[data-language="css"]');if(n.innerHTML="/* Write your CSS here */",e){let a=document.querySelector(".child-widget-style");a||(a=document.createElement("style"),a.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",a)),a.textContent+=e}if(t)try{const i=(n.textContent+t).split("/* Write your CSS here */").join(" ");n.textContent=i;const s=await tt.format(i,{parser:"css",plugins:[fs],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});n.textContent=s||"/* Write your CSS here */"}catch(a){console.error("CSS formatting error:",a),n.textContent=t}}async function oi(t){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",t)try{const n=await tt.format(t,{parser:"babel",plugins:[Kt,Yt],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function ao(){const t=new ae("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function ce(t){const e=document.querySelector('.cm-content[data-language="html"]'),n=document.getElementById("builder-workarea");if(n?.querySelector("#widget-details")?.remove(),e)try{const i=document.createElement("div");let s=t||n?.innerHTML||"";i.innerHTML=s;const o=i.firstChild;o&&o.nodeType===1&&o.classList.contains("mftsccs-marking-element")&&(s=o.innerHTML),i.innerHTML=s;async function r(c){if(c.dataset.widgetid){const u=await X(Number(c.dataset.widgetid));u&&u.typeCharacter=="the_widget"&&(c.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let u=0;u<c.childNodes.length;u++){const d=c.childNodes[u];d instanceof HTMLElement&&await r(d)}}await r(i),s=i.innerHTML;const l=await tt.format(s,{parser:"html",plugins:[ys],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=l||"<!-- Write your HTML here -->"}catch(i){console.error("HTML formatting error:",i),e.textContent=t}else alert("widget html editor not found in dom")}async function io(t){const e=document.getElementById("widgetTypeValue");e&&(e.value=t||"");const n=document.getElementById("widgetType");n&&(n.value=t||"")}function Zt(t){if(!t)return;const e=document.getElementById("builder-workarea"),n=document.createElement("div");n.id="widget-details",n.innerHTML="",n.innerHTML=`
    <button onclick="openDocumentationModal(${t}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(n)}function On(){const t=document.querySelector(".content-target");t.innerHTML="",t.textContent="Widget Loading..."}function Fn(){return document.querySelectorAll(".content-target")[0]}function va(t){const e={past:[],present:t,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(n){e.past.push(e.present),e.present=n,e.future=[]},undo(){if(e.past.length===0)return;const n=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=n,n},redo(){if(e.future.length===0)return;const n=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=n,n}}}class H{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),n=document.getElementById("redo-btn");e?.addEventListener("click",H.undoAction),n?.addEventListener("click",H.redoAction)}static renderActionHistory(){H.actionHistories=va(JSON.stringify(f?.staticWidgetTree)),va(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:n}=H.actionHistories.getState(),a=document.getElementById("undo-btn"),i=document.getElementById("redo-btn");a&&(a.disabled=!e),i&&(i.disabled=!n)}static async undoAction(){const e=H.actionHistories.undo();e!==void 0&&(La(e||""),H.updateButtonStates())}static async redoAction(){const e=H.actionHistories.redo();e!==void 0&&(La(e||""),H.updateButtonStates())}static updateActionHistories(){H.actionHistories.push(JSON.stringify(f.staticWidgetTree)),H.updateButtonStates()}}async function so(){const t=document.getElementById("widget-prompt-modal");t&&t.remove()}async function oo(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function ro(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function lo(){const t=document.getElementById("prompt-text");t.addEventListener("input",()=>{t.style.height="auto";const e=Math.min(t.scrollHeight-8,120);t.style.height=`${e}px`,t.style.overflowY=e===120?"auto":"hidden"})}class ri{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const n=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],i=((s,o=3)=>{if(s.length<o)return[];const r=new Set;for(;r.size<o;){const l=Math.floor(Math.random()*s.length);r.add(l)}return[...r]})(n,2);this.randomSuggestionEl=i?.map(s=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${n[s]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),lo(),setTimeout(()=>{const n=document.querySelector(".aiAssistantTabs"),a=document.querySelectorAll("#aiChatContainer, #prototypeWidget");n.querySelector("button").classList.add("active"),a[0].classList.add("active"),n.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{n.querySelectorAll("button").forEach(r=>r.classList.remove("active")),a.forEach(r=>r.classList.remove("active"));const s=i.dataset.id,o=document.getElementById(s);i.classList.add("active"),o?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=so,window.minimizeAssistant=oo,window.maximizeAssistant=ro,`
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
    `}}async function co(t){const e=document.getElementById("widget-btn-wrapper");if(e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
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
          `;const a=e.querySelector("#updateDropDownArrow"),i=e.querySelector("#update-widget-btn");i&&a&&i.addEventListener("click",()=>{i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),a&&i&&a.addEventListener("click",()=>{i.classList.contains("d-none")?(i.classList.remove("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function uo(){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function mo(){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class li{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.main.empty?a({changes:{from:i.main.from,insert:"  "},selection:{anchor:i.main.from+2}}):a({changes:{from:i.main.from,to:i.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new oe({doc:"<!-- Write your HTML here -->",extensions:[Ut,zt,ms(),Jt(),oe.lineWrapping,je.tabSize.of(2),je.allowMultipleSelections.of(!0),oe.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Gt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateHTML(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=yt;class ci{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(a=>a.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const n=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=n,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new oe({doc:"/* Write your JavaScript here */",extensions:[Ut,zt,Ua(),Jt(),oe.lineWrapping,je.tabSize.of(2),je.allowMultipleSelections.of(!0),oe.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Gt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(async n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateJS(a)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function _a(){const t=document.getElementById("codeBlocksContainer"),e=t.querySelectorAll(".sub-tab-btn");if(!t.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const a=document.getElementById("onmount-editor-split");a&&a.classList.add("active")}}async function di(t){const e=t?.id,n=t?.code,a=t?.slug,i=t?.name,s=document.querySelectorAll(".custom-service-btn"),o=Array.from(s)?.filter(d=>d?.getAttribute("data-subtab")===a),r=document.getElementById("lifecycle"),l=r?.querySelector(".sub-tab-nav");if(!o.length){const d=document.createElement("button");d.classList.add("sub-tab-btn","custom-service-btn"),d.setAttribute("data-subtab",a),d.innerHTML=`
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
    `,l?.appendChild(d);const g=document.createElement("div");g.classList.add("sub-tab-content","custom-editor-content"),g.id=`${a}-editor-split`,g.setAttribute("data-subtab",a),r?.appendChild(g);const m=`${a}-editor-split`;go(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(d=>{d.addEventListener("click",function(){const g=d.getAttribute("data-subtab"),m=d.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(p=>{p.classList.remove("active")}),d.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${g}"]`)?.classList.add("active")})}),setTimeout(async()=>{const d=document.querySelector(`#${a}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(d&&(d.textContent="/* Write your code here */",n))try{const g=await tt.format(n,{parser:"babel",plugins:[Kt,Yt],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});d.textContent=g}catch(g){console.error("JS formatting error:",g),d.textContent=n}},500)}async function go(t){await new ae(t).initializeEditor()}async function po(t,e,n){const a=e.trim().toLocaleLowerCase().split(" ").join("-"),i=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===t);i[0].name=e,i[0].slug=a;const s=document.querySelector(`button[data-subtab=${t}]`);s?.setAttribute("data-subtab",a),s.innerHTML=`
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
  `;const o=s?.querySelector("span.service-name");o&&(o.innerText=e);const r=document.getElementById(`${t}-editor-split`);r?.setAttribute("data-subtab",a),r.id=`${a}-editor-split`,await new ae(`${a}-editor-split`).initializeEditor();const c=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===a);di(c?.[0]),ve("rename-custom-function-modal")}class ho{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,n){this.customFunctionId=n,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const a=document.getElementById("rename-custom-function-modal").querySelector("form");a&&a.addEventListener("submit",i=>{i.preventDefault();const s=a.customFunctionName.value.trim(),o=/^[_A-Za-z][_A-Za-z ]*$/.test(s),r=document.getElementById("service-rename-error");o?(r.textContent="",r.classList.add("d-none"),po(this.currentCustomFunctionSlug,s,this.customFunctionId)):(r.classList.remove("d-none"),r.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
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
    `}}const Xt="unsaved_widget";async function fo(){if(Rn())return;const e=wo(),n={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},a=JSON.stringify(n),i=new Blob([a]).size,o=4.5*1024*1024-e;if(i<=o)try{localStorage.setItem(Xt,a),Vn("save-widget")}catch(r){console.error("Error saving to localStorage:",r)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),en()}function yo(t){return new Blob([t]).size}function wo(){let t=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const n=localStorage.getItem(e);t+=yo(e+n)}return t}async function en(){localStorage.removeItem(Xt),rt()}const fn=async t=>{if(Rn())return;t?.preventDefault();const n=localStorage.getItem(Xt);if(n){const a=JSON.parse(n);f.widgetTree=a?.widgetTree;const i=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,s=new URLSearchParams(window.location.search).get("widget-id");i===Number(s)?(i||D.enableWidgetButtons(),await it(),H.updateActionHistories(),L.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},Vn=async(t="")=>{if(Rn())return;const n=document.querySelector("#widget-properties .row"),a=document.getElementById("btn-draft-widget"),i=localStorage.getItem(Xt),s=JSON.parse(i),o=s?.widgetTree?.origin||s?.widgetTree?.widgetId,r=new URLSearchParams(window.location.search).get("widget-id");if(i&&!a){if(o!==Number(r)){rt();return}const l=document.createElement("div");l.id="draft-widget",l.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),l.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,n?.appendChild(l);const c=document.getElementById("btn-draft-widget");c?.removeEventListener("click",u=>fn(u)),c?.addEventListener("click",u=>fn(u)),o===0&&!t&&setTimeout(()=>{fn()},0)}else i&&a?(o!==Number(r)||o===Number(r)&&!t)&&rt():!i&&a&&rt()};function rt(){document.getElementById("draft-widget")?.remove()}function Rn(){const t=window.location.href,n=new URL(t).searchParams.get("page-id");return n||""}const ut=(()=>{function t(c){const u=c.target,d=document.getElementById("codeBlocksContainer");d&&d.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}function e(c){const u=c.target,d=document.getElementById("codeBlocksContainer");d&&d.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}async function n(c){D.enableWidgetButtons();try{await it(),fo(),H.updateActionHistories(),L.infoMessageToast(c)}catch(u){L.errorToast("widget synchronization failed"),console.error(u)}}const a=()=>{const c=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),c.style.display="flex";const g=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});g&&g.dispatchEvent(m),mt.enableHeader()},i=()=>{const c=document.getElementById("widgetButtionCodeViewWrapper"),u=document.createElement("div");u.classList.add("codeSplitViewButton");const d=document.createElement("div");d.appendChild(u);const g=document.createElement("div");g.id="codeBlocksContainer",g.innerHTML=`
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
`,c?.appendChild(g),document.querySelectorAll(".tab-btn").forEach(y=>{y.addEventListener("click",function(){const _=y.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(C=>C.classList.remove("active")),y.classList.add("active"),document.getElementById(_)?.classList.add("active")})}),g.querySelectorAll(".sub-tab-btn").forEach(y=>{y.addEventListener("click",function(){const _=y.getAttribute("data-subtab"),C=y.closest(".tab-content");C?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(v=>{v.classList.remove("active")}),y.classList.add("active"),C?.querySelector(`.sub-tab-content[data-subtab="${_}"]`)?.classList.add("active")})});const h=document.querySelector(".fullscreenicon"),w=document.querySelector("#widgetButtionCodeViewWrapper");h?.addEventListener("click",()=>{w.classList.contains("fullscreen")?mt.enableHeader():mt.disableHeader(),w.classList.toggle("fullscreen")});const E=document.querySelector(".close-btn");E&&E.addEventListener("click",a),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>n("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(d.firstChild),setTimeout(()=>{const y=document.querySelector(".codeSplitViewButton");y&&(y.removeEventListener("click",t),y.addEventListener("click",t));const _=document.getElementById("designSplitViewButton");_&&(_.removeEventListener("click",e),_.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",y=>s(y))};function s(c){c.stopPropagation();try{const u="add-custom-service-dialog";document.getElementById(u)?.remove();const g=document.createElement("dialog");g.setAttribute("id",u),g.classList.add("col-md-3"),g.innerHTML=`
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
      `;const m=g.querySelector("form");return m&&m.addEventListener("submit",p=>{p.preventDefault();const h=m?.serviceName?.value.trim(),w=/^[_A-Za-z][_A-Za-z ]*$/.test(h),E=document.getElementById("service-name-error");w?(E.textContent="",E.classList.add("d-none"),l(p)):(E.classList.remove("d-none"),E.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(g),ge(u),"OPENED"}catch(u){console.error("Failed to rename widget:",u)}}async function o(c,u,d){console.log("openRenameCustomFunction -->",c,u,d),new ho(u,d),await ge("rename-custom-function-modal")}async function r(c,u,d){c.preventDefault();try{if(confirm("Do you want to delete the Service?")){L.infoMessageToast("Deleting the service...",0),d&&await Le(Number(d));const m=`button[data-subtab=${u}]`;document.querySelector(m)?.remove(),document.getElementById(`${u}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(_=>_.slug!==u);const w=document.getElementById("codeBlocksContainer");return w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(g){L.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",g)}}async function l(c){c.preventDefault();const u=c.target,g=new FormData(u).get("serviceName");let m=g?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const p=document.getElementById("lifecycle"),h=p?.querySelector("div.sub-tab-nav"),w=document.getElementById("codeBlocksContainer");w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active");const T=document.createElement("button");T.classList.add("sub-tab-btn","custom-service-btn","active"),T.setAttribute("data-subtab",m),T.innerHTML=`
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
    `,h.appendChild(T);const b=document.createElement("div");b.classList.add("sub-tab-content","custom-editor-content","active"),b.setAttribute("data-subtab",m),b.setAttribute("id",`${m}-editor-split`),p.appendChild(b),await new ae(`${m}-editor-split`).initializeEditor();const _={name:g,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(_),document.querySelectorAll(".tab-btn").forEach(S=>{S.addEventListener("click",function(){const W=S.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(x=>x.classList.remove("active")),S.classList.add("active"),document.getElementById(W)?.classList.add("active")})}),(w?.querySelectorAll(".sub-tab-btn")).forEach(S=>{S.addEventListener("click",function(){const W=S.getAttribute("data-subtab"),x=S.closest(".tab-content");x?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(M=>{M.classList.remove("active")}),S.classList.add("active"),x?.querySelector(`.sub-tab-content[data-subtab="${W}"]`)?.classList.add("active")})}),ve("add-custom-service-dialog")}return{initializeCodeBlock:i,closeCodeView:a,synchronizeWidget:n,openRenameCustomFunction:o,deleteCustomFunction:r}})();async function bo(){await Vn();const t=document.getElementById("select-box");if(t.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(S=>{S.remove()}),document.querySelectorAll(".custom-editor-content").forEach(S=>{S.remove()});const _=document.getElementById("codeBlocksContainer"),C=_?.querySelectorAll(".sub-tab-btn");_?.querySelector(".sub-tab-btn.active")||(C?.[0]?.classList.add("active"),_?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),H.renderActionHistory(),H.updateActionHistories(),mn(f.staticWidgetTree),document.head.querySelectorAll("link.vde-css")?.forEach(b=>b.remove()),me();const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const i=document.getElementById("widget-builder");i.textContent="Widget Builder Panel",i.setAttribute("title","Widget Builder Panel"),D.disableWidgetButtons(),await new Bi().initializeEditor(),await new ci().initializeEditor(),await new ae("onmount-editor-split").initializeEditor(),await new ae("onupdate-editor-split").initializeEditor(),await new ae("addevents-editor-split").initializeEditor(),await new ae("mountchildwidgets-editor-split").initializeEditor(),await new li().initializeEditor(),await new ae("widgetDependencies-editor-split").initializeEditor();const m=document.getElementById("widgetNameValue");m.value="";const p=document.getElementById("widgetTypeValue");p&&(p.value="");const h=document.getElementById("widgetType");h&&(h.value=""),document.getElementById("widget-version").classList.add("d-none");const E=document.getElementById("element-attributes");E.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,ra(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function vo(){const t=new ss;f.widgetTree=t,ut.synchronizeWidget("Workspace Cleared")}let Pe="",kt="";async function Ea(t){try{const n=(await I())?.token,a=await fetch(`${z.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)});if(!a.ok){const c=await a?.text(),u=JSON.parse(c);throw L.errorToast(u.message),console.error(`API Error (${a.status}):`,c),Mt(a.statusText,"error"),new Error(`API request failed with status ${a.status}`)}const i=a.body.getReader(),s=new TextDecoder("utf-8");let o="",r=null;for(;;){const{value:c,done:u}=await i.read();if(u)break;o+=s.decode(c,{stream:!0});const d=o.split(`

`);for(let g=0;g<d.length-1;g++){const m=d[g].trim();if(m.startsWith("data:")){const p=m?.slice(6).trim();try{const h=JSON.parse(p);if(h.status==="responding"&&await Eo(h.message_str),h.status==="success"&&(r=h),h.status==="error")throw L.errorToast(h.message?.[0]||"AI Error"),new Error(h.message?.[0])}catch(h){console.warn("Stream parse error:",h)}}}o=d[d.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),r}catch(e){return console.error(e),null}}async function _o(t){await qe(t),f.resetWidgetTree(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new ri("");const a=document.getElementById("prompt-text");Pe="",a?.addEventListener("keydown",function(r){if(r.key==="Enter"&&!r.shiftKey){r.preventDefault();const l={text_input:a?.value,chat_id:"",widget_type:"",stream:!0};Pe&&(l.tag="followup",l.chat_id=Pe,l.widget_type=kt),ht(l)}}),document.querySelector(".button-send").addEventListener("click",function(r){r.preventDefault();const l={text_input:a?.value,chat_id:"",widget_type:"",stream:!0};Pe&&(l.tag="followup",l.chat_id=Pe,l.widget_type=kt),ht(l)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(r=>{r?.addEventListener("click",function(l){l.preventDefault(),a.value=r?.innerText})})}async function ht(t){if(t.text_input){ui(t.text_input),To("Assistant is working");const e=await Ea(t);if(So("prompt-loader"),!e)return;Pe=e?.data?.chat_id,kt=e?.data?.widget_type;const n=e?.message;if(f.staticWidgetTree.assistant={input:e?.data?.user_prompt,id:Pe,type:kt},e?.status=="error")L.errorToast(n);else{if(t.widget_type!=="list"){t.widget_type==="form"&&mi(Pe);const s=new Function("tsccs",e.data.data_structure_prototype)(Oa);let o=document.getElementById("prototypeWidget");Be(z.visual_prototype_widget,o,{prototype:s}).then(r=>{r.dataChange(async l=>{const c={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:l,type:"application/JSON",stream:!0};try{const u=await Ea(c);await xn(u)}catch(u){throw u}})})}await Mt(n);const a=document.createElement("button");a.classList.add("clearWorkspaceButton"),a.textContent="Clear Workspace",a.classList.add("btn","btn-danger"),a.addEventListener("click",()=>{vo(),a.remove()}),await Mt(a),On(),await xn(e)}}}async function Mt(t,e){const n=document.querySelector(".chat-content"),a=document.createElement("div");if(a.classList.add("message","message-bot"),t instanceof HTMLButtonElement){const i=document.querySelector(".clearWorkspaceButton");i&&i.remove(),a.appendChild(t)}else e==="error"&&a.classList.add("text-danger","my-0","text-center"),a.innerText=t;n?.scrollTo({top:n.scrollHeight,behavior:"smooth"}),n?.insertAdjacentElement("beforeend",a)}async function Eo(t,e){const n=document.getElementById("response-status");if(n)n.innerHTML=t;else{const a=document.querySelector(".chat-content"),i=document.createElement("div");i.id="response-status",i.classList.add("message","message-bot"),i.innerHTML=t,a?.insertAdjacentElement("beforeend",i),a?.scrollTo({top:a.scrollHeight,behavior:"smooth"})}}function ui(t){const e=document.getElementById("default-message"),n=document.querySelector(".chat-content"),a=document.createElement("div");a.classList.add("message","message-user"),a.innerText=t,n?.insertAdjacentElement("beforeend",a),e?.remove();const i=document.getElementById("prompt-text");i.value="",i.style.height="44px"}function To(t){Co("prompt-form");const e=document.getElementById("prompt-content"),n=document.createElement("div");n.id="prompt-loader",n.textContent=t,e?.insertAdjacentElement("beforeend",n)}function So(t){document.getElementById(t)?.remove(),Lo("prompt-form")}function Co(t){const e=document.getElementById(t);for(let n of e.elements)n.disabled=!0}function Lo(t){const e=document.getElementById(t);for(let n of e.elements)n.disabled=!1}async function xn(t){const e=t?.data?.ui?.html||"",n=t?.data?.ui?.css||"",a=t?.data?.ui?.js||"",i=t?.data?.before_render||"",s=t?.data?.after_render||"",o={html:e,css:n,js:a,before_render:i,after_render:s,assistant:{id:t?.data?.chat_id,input:t?.data?.user_prompt,type:t?.data?.widget_type}};await Ao(o)}async function Ao(t){f.staticWidgetTree.html=t.html,f.staticWidgetTree.css=t.css,f.staticWidgetTree.js=t.js,f.staticWidgetTree.before_render=t.before_render,f.staticWidgetTree.after_render=t.after_render,f.staticWidgetTree.assistant=t.assistant;const e=f.staticWidgetTree,n=document.getElementById("builder-workarea");n.innerHTML="";const a=await ai(e,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await te(e,!1,a),H.renderActionHistory(),H.updateActionHistories(),me(),we()}async function mi(t){document.getElementById("prompt-suggestion")?.remove();const n={text_input:"create a list widget for it",chat_id:t,widget_type:"list",stream:!0},a=document.createElement("div");a.id="prompt-suggestion",a.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",a),document.getElementById("request-list-widget").addEventListener("click",async o=>{o.preventDefault(),ht(n),uo(),mo()})}async function Wo(t){new ri(t?.id),ui(t?.input),await Mt("Widget Generated Successfully!!"),t.type==="form"&&mi(t?.id);const e=document.getElementById("prompt-text"),n={text_input:e?.value,chat_id:t?.id||"",widget_type:t?.type||"",tag:t?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(i){i.key==="Enter"&&(i.shiftKey||(i.preventDefault(),n.text_input=e?.value,ht(n)))}),document.querySelector(".button-send").addEventListener("click",function(i){i.preventDefault(),n.text_input=e?.value,ht(n)})}async function xo(t){const e=document.querySelector("#widgetDependencies-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");e.textContent="/* Write your code here */";try{const a=t?.split("/* Write your code here */")?.join(" ");if(a){const i=await tt.format(a,{parser:"babel",plugins:[Kt,Yt],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=i||"/* Write your code here */"}}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function te(t,e,n,a,i){io(t?.type),xo(t?.dependency);const s=e?"":t?.css,o=e?`div[data-widgetid="${t.id}"] {${t.css}}
${n?.css}`:n?.css;if(await si(s,o),ce(t?.html),await ii(t?.after_render),await oi(t?.before_render),t?.custom_functions?.length){const r=document.querySelectorAll(".custom-service-btn"),l=Array.from(r)?.map(d=>d.getAttribute("data-subtab")??""),c=t.custom_functions?.map(d=>d.slug);(l?.filter(d=>!c.includes(d))).forEach(d=>{const g=document.querySelector(`.custom-service-btn[data-subtab="${d}"]`);g&&g.remove(),document.getElementById(`${d}-editor-split`)?.remove()}),_a(),t.custom_functions?.forEach(d=>{di(d)})}else document.querySelectorAll(".custom-service-btn").forEach(c=>{c.remove()}),document.querySelectorAll(".custom-editor-content").forEach(c=>{c.remove()}),_a();(a||i)&&Zt(t?.origin?t?.origin:t?.widgetId),a&&t?.assistant?.id&&Wo(t?.assistant)}const kn="drop-indicator";function gi(){let t=document.querySelector(`.${kn}`);return t||(t=document.createElement("div"),t.className=kn,document.body.appendChild(t)),t}function ko(t,e){const n=gi(),a=t.getBoundingClientRect();e==="top"?n.style.top=`${a.top-5}px`:e==="bottom"&&(n.style.top=`${a.bottom-5}px`),n.style.left=`${a.left}px`,n.style.width=`${a.width}px`,n.style.opacity="1",n.style.transform="scaleY(1)"}function Mo(){document.querySelectorAll(`.${kn}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function Io(t,e,n){if(e.length===0)return{element:n,position:"top"};const a=t.clientY;let i=e[0],s=Math.abs(i.getBoundingClientRect().top-a);Math.abs(i.getBoundingClientRect().bottom-a);for(const c of e){const u=c.getBoundingClientRect(),d=Math.abs(u.top-a);Math.abs(u.bottom-a),d<s&&(i=c,s=d)}const o=i.getBoundingClientRect(),r=o.top+o.height/2,l=a<r?"top":"bottom";return{element:i,position:l}}async function et(t){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(a=>{a.remove()});const n=document.querySelectorAll("script.vde-js");if(n?.length&&n?.forEach(a=>{a.remove()}),await mn(t),t?.children?.length)for(const a of t?.children){const i=a?.library;i?.css?.length&&i?.css?.forEach(s=>{const o=s?.url,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",o),document.head.appendChild(r)}),i?.js.length&&i?.js?.forEach(async s=>{await new Promise((o,r)=>{const l=s?.url,c=document.createElement("script");c.classList.add("vde-js"),c.setAttribute("type","text/javascript"),c.setAttribute("src",l),c.setAttribute("crossorigin","anonymous"),c.onload=()=>{o()},c.onerror=u=>{console.error("Failed to load script:",l,u),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(c)})})}}let Y=null,O;function tn(){const t=document.querySelector(".content-target > .mftsccs-marking-element");if(t){const e=document.querySelector(".content-target");Te.fixContentTargetHeight(e,t)}}function Po(t){Y=t.target;let e={data_type:t.target.getAttribute("data-type"),data_default:t.target.getAttribute("data-default"),data_void:t.target.getAttribute("data-void"),data_text:t.target.getAttribute("data-text"),elementId:t.target.getAttribute("data-elementId"),dataId:t.target.id,imageUrl:t.target.imageUrl,displayType:t.target.displayType};t.dataTransfer.setData("text",JSON.stringify(e)),t.dataTransfer.setData("id",t.target.id),t.dataTransfer.effectAllowed="move"}async function $o(t){t.stopPropagation();const e={widgetcodeId:t.target.getAttribute("data-widgetId"),sourceElementId:t.target.id,className:t.target.className,imageUrl:t.target.imageUrl,displayType:t.target.displayType,type:t.target.Type};t.dataTransfer.setData("text",JSON.stringify(e)),t.dataTransfer.effectAllowed="move"}function Bo(t){t.preventDefault(),t.stopPropagation(),t.target.classList.add("dragging-area"),_t.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",Ks()}function jo(t){t.preventDefault(),t.stopPropagation(),t.target.classList.remove("dragging-area")}function Do(t){t.preventDefault(),t.stopPropagation(),(!Y||!(t.currentTarget instanceof HTMLElement))&&(Y=t?.target);const e=t.target,n=Array.from(e.children).filter(i=>i!==Y);gi();const a=Io(t,n,e);O=a,ko(a.element,a.position)}function No(){D.checkContent()?D.enableWidgetButtons():D.disableWidgetButtons()}async function Ho(t){const e=await nn(t);Y=null,Mo(),H.updateActionHistories(),_t.collapseNavbar(),No(),tn(),me(),e&&(ce(),Zt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),we()}function It(t,e){return Array.isArray(t?.children)&&(t.children=t?.children.filter(n=>n?.wrapper!==e),t.children.forEach(n=>It(n,e))),t}function Re(t,e){let n;return Array.isArray(t?.children)&&(n=t?.children.filter(a=>a?.wrapper===e),t.children.forEach(a=>Re(a,e))),n?.[0]}async function qo(t){t.preventDefault(),t.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(d=>{const g=document.getElementById(`${d}-content`);if(g&&g.style.display==="block"){const m={target:g.previousElementSibling};yt(m,`${d}-content`)}});const n=document.getElementById("element-attributes");if(n&&n.style.display==="block"){const d={target:document.querySelector("#icon-attribute")};yt(d,"element-attributes")}const a=V.staticElement,i=a?.parentElement,s=i?.parentElement,o=s?.dataset?.widgetid,r=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container"),l=a.querySelectorAll(".added-widget-container");if(a?.classList?.contains("added-widget-container")){const d=a?.id;It(f?.staticWidgetTree,d)}else l.length&&l.forEach(d=>{const g=d?.id;It(f?.staticWidgetTree,g)});if(r){const d=r.id;if(a?.remove(),V.staticElement.remove(),At(),a?.classList?.contains("added-widget-container")){const g=Re(f?.staticWidgetTree,d),m=r.querySelector(".mftsccs-marking-element");g.html=m?.innerHTML,te(g)}else{const m=document.getElementById(d).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,te(f.selectedStaticWidgetTreeInfo.widgetTree)}me(),H.updateActionHistories();return}i?.classList.contains("mftsccs-marking-element")&&i.children.length===1&&i?.remove(),o&&(s?.children?.length||s?.remove()),a?.remove(),V.staticElement.remove(),At();const c=await Ze();return f.staticWidgetTree.html=c,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},Bl(),te(f?.staticWidgetTree),me(),H.updateActionHistories(),D.checkContent()||(D.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}async function Oo(t){return"drag"}async function Fo(t){return t.dataTransfer.setData("text",t.target.id),"start drag"}async function Vo(t){console.log("dragEndWidgetElement event ->",t)}async function Ro(t){return t.preventDefault(),t.stopPropagation(),"dragOverWidgetElement"}async function Uo(t){nn(t),ce()}let Pt=null;async function pi(t,e){if(t.preventDefault(),t.stopPropagation(),!Y)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let a=t.target;if(!a.classList.contains("mftsccs-marking-element")&&!a.classList.contains("fslayout-col")&&a.id!=="builder-workarea"){const l=document.getElementById("builder-workarea"),c=a.closest(".mftsccs-marking-element"),u=a.closest(".fslayout-col");a=c||u||l}if((Y.contains(a)||Y===a)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),a=document.getElementById("builder-workarea")),!a)return console.error("Invalid dropzone"),!1;a?.classList.remove("dragging-area");let i=xt(t,e);if(!i.status)return alert(i.message),Y=null,!1;const s=e.dataType||e.type||e.data_type,o=s==="photo"||s==="Image"||s==="img",r=s==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(o){let l,c=!1;if(Y&&Y.tagName&&Y.tagName.toLowerCase()==="img"){if(c=!0,l=Y,l.parentElement===a&&console.log("Image is already in this dropzone, just repositioning"),!(l instanceof Node))return console.error("draggedItem is not a valid DOM node:",l),Y=null,!1;(!l.hasAttribute("style")||!l.style.width)&&l.setAttribute("style","width: 200px;")}else{const p=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(a.querySelectorAll(`img[src="${p}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),Y=null,!1;l=document.createElement("img"),l.setAttribute("src",p),l.setAttribute("style","width: 200px;")}let u=Te.generateUUID();l.setAttribute("element-info-id",u);const d=a.classList.contains("file-item")&&a.classList.contains("photo-file")&&a.classList.contains("dragging");let g=l;if(d){const p=document.createElement("div");p.appendChild(l),g=p}try{if(c){const p=d&&l.parentElement?.parentElement||l.parentElement,h=d?l.parentElement:l;p&&p!==a&&h&&p.removeChild(h)}O?.position==="top"&&a?.children?.length&&O?.element?a.contains(O.element)&&!g.contains(O.element)&&g!==O.element?a.insertBefore(g,O.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),a.appendChild(g)):O?.position==="bottom"&&O?.element?a.contains(O.element)&&!g.contains(O.element)&&g!==O.element?O.element.insertAdjacentElement("afterend",g):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),a.appendChild(g)):a.appendChild(g)}catch(p){console.error("Error positioning element:",p.message);try{a.appendChild(g)}catch(h){return console.error("Cannot append element:",h),Y=null,!1}}l.removeAttribute("element-info-id");const m=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(m){const p=m.id,h=Re(f?.staticWidgetTree,p),w=m.querySelector(".mftsccs-marking-element");return w&&(h.html=w.innerHTML,await te(h)),Y=null,!1}return zo(),Y=null,!0}else if(r){let l=xt(t,e);if(!l.status)return alert(l.message),Y=null,!1;if(e.sourceElementId){const b=e.sourceElementId||e.fileId;console.log("sourceElement ->",b)}let c=e.widget_id;a.classList.remove("dragging-area");const u=document.createElement("div");u.classList.add("wb-initial-empty"),u.style.display="block",u.style.marginBottom="10px",u.setAttribute("data-widget-id",c);const d=Te.generateUUID();u.id=`widget-${d}`;const g=await I();let m=a.classList.contains("publicWidgetRouter"),p=await re(c);if(!m){const b=await Se(c.id,g.token);p=await re(b?b.widgetId:Number(c))}p?.children?.length&&await an(p);const h=D.clearDraggedWidget(p),w=await Ce(h,u);h.wrapper=u.id;try{O?.position==="top"&&a?.children?.length&&O?.element?a.contains(O.element)&&!u.contains(O.element)&&u!==O.element?a.insertBefore(u,O.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),a.appendChild(u)):O?.position==="bottom"&&O?.element&&a.contains(O.element)&&!u.contains(O.element)&&u!==O.element?O.element.insertAdjacentElement("afterend",u):a.appendChild(u)}catch(b){console.error("Error positioning widget container:",b.message);try{a.appendChild(u)}catch(y){return console.error("Cannot append widget container:",y),Y=null,!1}}const E=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(E){const b=E.id;Re(f?.staticWidgetTree,b).children.push(h);const C=document.getElementById(b).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=C?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=C?.style.cssText,await te(f.selectedStaticWidgetTreeInfo.widgetTree),Y=null,!1}const A=await ft();f.staticWidgetTree.html=A,f.staticWidgetTree?.children?.push(h);const T=f.widgetTree.children.indexOf(h);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[T],isChildWidget:!0,childWidgetIndex:T},await te(h,!1,w),D.enableWidgetButtons(),Y=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),Y=null,!1}function zo(){document.querySelectorAll(".mftsccs-marking-element img").forEach(t=>{t.setAttribute("draggable","true"),t.addEventListener("dragstart",e=>{e.stopPropagation(),Pt=Date.now()}),t.addEventListener("dragend",e=>{e.stopPropagation(),setTimeout(()=>{Pt=null},100)})})}function Jo(){Pt=null,Y=null,console.log("dragStartTime",Pt)}async function nn(t,e=!1,n,a){if(!t&&e&&n&&a){const l=await re(Number(n)),c=hn(a,n,!1,null);let u=await Ce(l,c);l.wrapper=c?.id;const d=await Ze();f.staticWidgetTree.html=d,f.staticWidgetTree?.children?.push(l),te(l,!0,u);return}t.preventDefault(),t.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let s=t.dataTransfer.getData("text");if((l=>{try{return JSON.parse(l),!0}catch{return!1}})(s))if(Object.keys(JSON.parse(s)).includes("widgetcodeId")){const l=JSON.parse(s);let c=xt(t,l);const u=l.className.split(" ");if(!c.status){alert(c.message);return}const d=JSON.parse(s);if(d.sourceElementId){const W=document.getElementById(d.sourceElementId.toString());if(W){t.target.insertBefore(W,c.elementBelowDrag);return}}let g=Zs(d),m=c?.dropzoneEl;m.classList.remove("dragging-area");const p=await I();let h=!1;u.includes("publicWidgetRouter")&&(h=!0);let w=null,E=null;const A=t.clientY,T=m.getBoundingClientRect(),b=$t(T,A);if(h){w=await re(Number(g)),E=hn(m,g,!1,c.elementBelowDrag,b,t);const W=document.getElementById("widgetNameValue");W&&w?.name&&(W.value=w?.name);const x=document.getElementById("widget-builder");x&&w?.name&&(x.textContent="Widget Builder Panel: "+w?.name)}else{const W=await Se(g,p.token);w=await re(W?W.widgetId:Number(g));const x=document.getElementById("widgetNameValue");x&&w?.name&&(x.value=w?.name);const M=document.getElementById("widget-builder");M&&w?.name&&(M.textContent="Widget Builder Panel: "+w?.name),w?.children?.length&&await an(w),E=hn(m,W?W.widgetId:g,!1,c.elementBelowDrag,b,t)}const y=D.clearDraggedWidget(w);let _=await Ce(y,E);y.wrapper=E?.id;const C=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(C){const W=C.id;Re(f?.staticWidgetTree,W).children.push(y);const $=document.getElementById(W).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=$?.innerHTML,await et(f.selectedStaticWidgetTreeInfo.widgetTree),te(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const v=await Ze();f.staticWidgetTree.html=v,f.staticWidgetTree?.children?.push(y);const S=f.widgetTree.children.indexOf(y);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[S],isChildWidget:!0,childWidgetIndex:S},await et(y),te(y,!1,_),D.enableWidgetButtons()}else{let l=function(w,E){document.getElementById("builder-workarea")===w&&(E="inside");let T=Te.generateUUID();const b=Pl(T,c),y=document.createElement("div");y.innerHTML=b;const _=y.firstChild,C=w.parentElement;if(E==="above")C.insertBefore(_,w);else if(E==="below"){const S=w.nextElementSibling;S?C.insertBefore(_,S):C.appendChild(_)}else if(E==="inside"){const S=Un(w,t.clientY);S==null?w.appendChild(_):w.insertBefore(_,S)}t.target.classList.remove("dragging-area");let v=_;c.data_type=="layout"?v.querySelectorAll(".fslayout-col").forEach(W=>{W.classList.add("wb-initial-empty")}):(v.classList.add("wb-initial-empty"),c?.data_type==="img"&&(v?.setAttribute("src","/images/img-placeholder.jpg"),v?.setAttribute("style","width: 200px;"))),v.removeAttribute("element-info-id"),c?.data_type==="img"&&(v?.setAttribute("src","/images/img-placeholder.jpg"),v?.setAttribute("style","width: 200px;"))};const c=JSON.parse(s);let u=xt(t,c);const d=u?.dropzoneEl;if(u.status){const w=t.clientY,E=d.getBoundingClientRect(),A=$t(E,w);l(d,A)}else alert(u.message);const g=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(g){const w=g.id,E=Re(f?.staticWidgetTree,w),A=g.querySelector(".mftsccs-marking-element");return E.html=A?.innerHTML,await te(E),t.dataTransfer.clearData(),!1}const m=document.querySelector(".content-target"),h=(await Ae(m,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=h;try{t.dataTransfer.clearData()}catch(w){console.error("error in clearing data",w.message)}return!0}else{const l=V.staticElement,c=t.target;c.classList.remove("dragging-area"),O?.position==="top"&&c?.children?.length?c.insertBefore(l,O?.element):O?.position==="bottom"?O?.element?.insertAdjacentElement("afterend",l):c.appendChild(l),At();const u=await Ze();f.staticWidgetTree.html=u}}function Un(t,e){return Array.from(t.children)?.reduce((a,i)=>{const s=i.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>a.offset?{offset:o,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function $t(t,e){const n=t.height,a=e-t.top;return a<n*.25?"above":a>n*.75?"below":"inside"}function Go(t){const s=new DOMParser().parseFromString(t,"text/html").body.querySelector("div")?.id,r=document.getElementById(s)?.parentElement?.closest(".added-widget-container"),l=r?.id,c=r?.querySelectorAll(".widget_container_disabled");return c?.length&&c?.forEach(u=>{const d=Te.generateUUID();u.id=`wdgt${d}`}),l?.toString()}async function an(t){return Array.isArray(t.children)&&t.children.forEach(e=>{hi(e,t),e.children.length&&an(e)}),t}function hi(t,e){const n=t.wrapper,s=new DOMParser().parseFromString(e?.html,"text/html").body,o=s.querySelector(`#${n}`);if(!o)return t;const l=`wdgtcopy${Te.generateUUID()}`;return o.id=l,t.wrapper=l,e.html=s.innerHTML.toString(),t}const Qo=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:tn,dragElement:Oo,dragEndWidgetElement:Vo,dragOverWidgetElement:Ro,dragStartWidgetElement:Fo,dropElement:nn,dropFolderElement:pi,dropWidgetElement:Uo,findChildByWrapper:Re,getChildWrapperId:Go,getChildrenWrapperId:hi,getDragAfterElement:Un,getDropType:$t,onDragEnter:Bo,onDragLeave:jo,onDragOver:Do,onDragStart:Po,onDrop:Ho,onWidgetDragStart:$o,removeChildByWrapper:It,removeElement:qo,resetDragState:Jo,updateAllChildWidgets:an},Symbol.toStringTag,{value:"Module"})),Ko=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],zn=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class fi{constructor(){}async getLayoutListHTML(){return zn.map(n=>`
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
      `).join("")}async getTemplateLayoutsHTML(){const e=await hl();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const n=await I(),a=n?.entityId===101651686||n?.entityId===101279491;return e.map(i=>i.id?`
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
      `:"").join("")}}async function Se(t,e){let n=new J;n.composition=t,n.fullLinkers=["the_widget_recent","the_widget_latest"],n.inpage=100;let a=new J;a.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],a.inpage=100;const s=await be([n,a],e),r=await $e(t,"the_widget_recent"),l=s?.data?.the_widget?.the_widget_recent||s?.data?.the_widget?.the_widget_latest||[],c=s?.data?.the_widget?.the_widget_latest||null;if(l.length){const u=l[0],d=u?.data.the_widget.the_widget_name?.[0].data.the_name,g=u?.data.the_widget.the_widget_html?.[0].data.the_html,m=u?.id,p=u?.data.the_widget.the_widget_css?.[0].data.the_css,h=u?.data.the_widget.the_widget_js?.[0].data.the_js,w=u?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,E=u?.data.the_widget.the_widget_version?.[0].data.the_version,A=u?.data.the_widget.the_widget_origin?.[0].data.the_origin|t;return{widgetName:d,widgetHTML:g,widgetCSS:p,widgetJS:h,widgetTimestamp:w,widgetVersion:Number(E||c?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||c.id,origin:Number(A),connectionIdLatest:r,publishedWidgetVersion:c?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const D=(()=>{const t=async()=>{const b=document.getElementById("fslayout-template-container");if(b){b.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const _=await new fi().getTemplateLayoutsHTML();b.innerHTML=_}},e=async()=>{const b=document.getElementById("public-widget-list-container");if(b){const y=await Bn();!y||y.trim()===""?b.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:b.innerHTML=y||""}},n=async()=>{const b=document.getElementById("folder-widget-container");if(b){const y=await pl();!y||y.trim()===""?b.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:b.innerHTML=y||""}},a=async()=>{const b=await $n();Wn.navbar.setSavedWidgets(b);const y=document.getElementById("saved-widget-list-container");y&&(!b||b.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=b||"")},i=async()=>{const b=await $n();Wn.navbar.setSavedWidgets(b);const y=document.getElementById("folder-widget-container");y&&(!b||b.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=b||"")},s=async(b,y,_,C,v,S,W)=>{if(C&&!v&&!S||v&&!C&&!S||S&&!W){console.error("creating widget copy argument required.");return}let x=null;x=await re(b.id);let M=null,$=null,B=[],j=0;S||(M=await Se(b.id,_),$=M?.origin?M?.origin:b.id,j=M?.widgetVersion?M?.widgetVersion:0,B=M?.connectionIdLatest?M.connectionIdLatest:null);const R={type:v?v.mainWidgetTypevalue:x.type,after_render:v?v.addeventsScript:x.after_render,before_render:v?v.onmountScript:x.before_render,dependency:v?v.dependency:x.dependency,update:v?v.onupdateScript:x.update,mount_child:v?v.mountchildwidgetsScript:x.mount_child,name:S?W:x?.name,html:S?x.html:v?v.widgetHTMLToUpdate:x.html,clean:v?v.widgetCleanHTMLToUpdate:x?.clean,css:v?v.widgetCSSToUpdate:x?.css?.toString(),js:v?v.widgetJSToUpdate:x?.js?.toString(),timestamp:v?v.widgetTimestampToUpdate:new Date().toISOString(),...!S&&{version:j?j+1:1,origin:$}},ne=await U(x.id),ie=await U($),G=await F("widget",y,R);if(v?.assistant?.id){const Q=await F("assistant",y,v?.assistant);await q(G,Q,"assistant")}if(v?.library?.css?.length){const Q=v?.library?.css;for(let Z=0;Z<Q.length;Z++){const le=await F("css_library",y,Q[Z]);await q(G,le,"s_css_library")}}if(v?.library?.js?.length){const Q=v?.library?.js;for(let Z=0;Z<Q.length;Z++){const le=await F("js_library",y,Q[Z]);await q(G,le,"s_js_library")}}if(v?.custom_functions?.length){const Q=v?.custom_functions;for(let Z=0;Z<Q.length;Z++){const le=await F("custom_function",y,Q[Z]);await q(G,le,"s_custom_function")}}if(!C&&!v&&S&&x?.children.length&&f.createChildWidget(x.children,G),await q(ie,G,"s_copy"),await q(G,ne,"root"),B&&B.length)for(let Q=0;Q<B.length;Q++)await Ie(B[Q].id);return await q(ie,G,"recent"),G},o=async b=>{b.stopPropagation();const y=Number(b.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(y){L.infoMessageToast("Deleting your widget from public...",0);const C=await $e(y,"the_public_widget_s_widget",!0);await Ie(C[0].id),await he(y,"the_widget_description"),await he(y,"the_widget_thumbnail"),await he(y,"the_widget_public_name"),await e(),await n(),await a(),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{L.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Removing Failed"),new Error("Removing Failed")}},r=async b=>{b.stopPropagation();const y=prompt("What would you like to name this imported widget?");if(!y||!y.trim())return;const _=Number(b.target.dataset.pubwidid);if(_){L.infoMessageToast("Importing widget...",0);try{const C=document.querySelector(".infoMessageToast"),v=await re(_);f.widgetTree=v,await f.saveWidget(y),await a(),await i(),C?.remove(),L.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Saving Failed"),new Error("Saving Failed")}}},l=async b=>{b.stopPropagation();const y=Number(b.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(y){L.infoMessageToast("Deleting your widget from templates...",0);const C=await $e(y,"the_template_widget_s_widget",!0);await Ie(C[0].id),await he(y,"the_widget_template_thumbnail"),await he(y,"the_widget_template_name"),await t(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{L.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Removing Failed"),new Error("Removing Failed")}},c=()=>document.querySelector(".content-target").innerHTML.trim()!=="",u=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const _=document.querySelector(y);_&&_.classList.remove("disabled")})},d=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const _=document.querySelector(y);_?_.classList.add("disabled"):console.log("button not found",y)})},g=b=>{const y=document.createElement("div");y.innerHTML=b.html;const _=y.querySelectorAll("div[data-elementid]");return _?.length&&_.forEach(C=>{C.className="widget_container_disabled"}),b.html=y.innerHTML,b.html=b.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,C=>C.replace(/\btrue\b/g,"false").trim()),b.html=b.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,C=>C.replace(/\bhover-element\b/g,"").trim()),b.html=b.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,C=>C.replace(/\bwb-block\b/g,"").trim()),b.html=b.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,C=>C.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),b.html=b.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,C=>C.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),b};async function m(b){try{if(L.infoMessageToast("Updating your widget preference",0),b){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const _=await $e(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(_.length!==1&&_.length>0)for(let C=1;C<_.length;C++){const v=_[C];await Ie(v.id)}if(b){if(!_.length){const C=await U(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const v=await ee("use_latest","true",!1,f.userId,999);await q(C,v,"use_latest"),await N.SyncDataOnline()}}else if(_.length>0)for(let C=0;C<_.length;C++){const v=_[C];await Ie(v.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await T(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;L.successfullToast("Widget Preference Updated.")}catch(y){throw y}finally{document.querySelector(".infoMessageToast")?.remove()}}async function p(b,y,_){y.checked||_?(b.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(b.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),_||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const h=new Map,w=()=>{const b=document.getElementById("widget-version");if(!b)return;b.innerHTML="",b.classList.remove("d-none"),b.classList.add("d-flex","flex-column","gap-2");const y=document.createElement("div");y.classList.add("d-flex","justify-content-between","align-items-center");const _=document.createElement("label");_.setAttribute("for","widgetVersionValue"),_.textContent="Widget Versions:";const C=document.createElement("div");C.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",C.id="useLtsSwitch";const v=document.createElement("input");v.type="checkbox",v.className="form-check-input",v.id="alwaysUseLTS";const S=document.createElement("label");S.className="form-check-label ms-2",S.setAttribute("for","alwaysUseLTS"),S.textContent="Use LTS",C.appendChild(v),C.appendChild(S),y.appendChild(_),y.appendChild(C);const W=document.createElement("select");return W.name="input-widgetVersionValue",W.id="widgetVersionValue",W.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(b.appendChild(y),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(v.checked=!0,p(W,v,!0)),v.addEventListener("change",async()=>{try{await p(W,v,!1)}catch(x){console.error("useLtsError",x),x instanceof Error&&L.errorToast(x.message),v.checked=!v.checked}})):b.appendChild(_),b.appendChild(W),W},E=()=>{const b=document.getElementById("widget-version");if(!b){console.warn("Widget version container not found");return}const y=document.getElementById("widgetVersionValue");y&&(h.forEach(_=>{y.removeEventListener("change",_)}),h.clear()),b.innerHTML="",b.classList.remove("d-flex"),b.classList.add("d-none")},A=async(b,y,_)=>{try{const C=await I(),v=document.getElementById("widgetVersionValue");v&&h.forEach(j=>{v.removeEventListener("change",j)});const S=w();if(!S){console.error("Failed to create select element");return}const W=await Se(b,C?.token),x=W?.widgetVersion,M=new Date(W?.widgetTimestamp).toLocaleString();let $=new Date(_).toLocaleString();if($==="Invalid Date"&&($=new Date().toLocaleString()),W){const j=document.createElement("option");j.value="original",j.textContent=`Original ${y==="original"?`(Current) (${$})`:""}`,(!W||!W.publishedWidgetVersion)&&(j.textContent+=" (Published)"),S.appendChild(j);for(let R=0;R<W.widgetVersion;R++){const ne=document.createElement("option");ne.value=`${R+1}`,ne.textContent=`Version ${R+1} ${R+1==Number(y)?"(Current)"+(x===R+1?` (${M})`:` (${$})`):""}`,R+1==Number(y)&&(ne.selected=!0),W.publishedWidgetVersion&&R+1==Number(W.publishedWidgetVersion)&&(ne.textContent+=" (Published)"),S.appendChild(ne)}}else{const j=document.createElement("option");j.value="",j.textContent=`Original (current) (${$})`,j.selected=!0,S.appendChild(j)}if(h.has(b)){const j=h.get(b);S.removeEventListener("change",j),h.delete(b)}const B=T(b,C.entityId);h.set(b,B),S.addEventListener("change",B)}catch(C){console.error("Error initializing widget versions:",C)}},T=(b,y,_)=>{async function C(v){v&&v.preventDefault();let S="";if(_&&_===!0){f.token||await f.getUserDetails();const x=await Se(b,f.token);x&&(S=x.publishedWidgetVersion)}else{const M=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",y),S=M?.value||""}if(!S)return;if(f.selectedStaticWidgetTreeInfo.isChildWidget)try{let x;if(S==="original"){x=b;const $=await re(x);M($)}else{let $=new P;$.typeConnection="the_widget_version",$.name="version";let B=new Fe;B.type="the_version",B.search=S,B.logicoperator="=",B.name="versionFilter",B.operateon="version",B.composition=!1;const j=new P;j.typeConnection="the_widget_s_copy",j.name="copywidgets",j.freeschemaQueries=[$],j.selectors=["the_widget_name","the_widget_type","the_widget_html","the_widget_css","the_widget_js","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_origin","the_widget_version"];const R=new P;R.conceptIds=[b],R.freeschemaQueries=[j],R.inpage=100,R.filters=[B],R.filterLogic="( versionFilter )",R.outputFormat=ue,de(R,"").subscribe(async ne=>{try{const G=ne?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;if(!G){L.errorToast("Widget version not found");return}const Q=await re(G);M(Q)}catch(ie){console.error("Error in widget version callback:",ie),L.errorToast("Error updating widget version")}})}async function M($){const B=JSON.parse(JSON.stringify(f.staticWidgetTree)),R=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,ne={...$,wrapper:R};let ie=!1;const G=Z=>{for(let le=0;le<Z.length;le++){if(Z[le].wrapper===R){Z[le]=ne,ie=!0;break}if(Z[le].children&&Z[le].children.length>0&&(G(Z[le].children),ie))break}};if(G(B.children),!ie){console.error("Could not find child widget to update"),L.errorToast("Failed to update widget");return}f.widgetTree=B,f.selectedStaticWidgetTreeInfo.widgetTree=ne,_&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const Q=document.getElementById(R);if(Q){Q.innerHTML="",await Ce(ne,Q);let Z;S==="original"?Z=b:Z=$.id,Q.setAttribute("data-widgetid",Z.toString()),te(ne,!1),me(),L.successfullToast("Widget version updated")}}}catch(x){console.error("Error updating child widget version:",x),L.errorToast("Error updating widget version")}else if(S==="original")await Ue(null,b,b),me();else{let x=new P;x.typeConnection="the_widget_version",x.name="version";let M=new Fe;M.type="the_version",M.search=`${S}`,M.logicoperator="=",M.name="versionFilter",M.operateon="version",M.composition=!1;const $=new P;$.typeConnection="the_widget_s_copy",$.name="copywidgets",$.freeschemaQueries=[x],$.selectors=["the_widget_name","the_widget_type"];const B=new P;B.conceptIds=[b],B.freeschemaQueries=[$],B.inpage=100,B.filters=[M],B.filterLogic="( versionFilter )",B.outputFormat=ue;let j=0;await de(B,"").subscribe(async R=>{const ie=R?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;ie?j=ie:L.errorToast("widget version not found")}),j&&await Ue(null,j,b)}}return C};return{createWidgetCopy:s,removeMyWidgetFromPublic:o,removeFromTemplate:l,renderSavedWidgets:a,renderBoomWidgets:i,renderPublicWidgets:e,renderTemplateLayouts:t,saveFromPublic:r,checkContent:c,enableWidgetButtons:u,disableWidgetButtons:d,clearDraggedWidget:g,initializeWidgetVersions:A,removeWidgetContainer:E,loadWidgetVersionWith:T}})(),Te=(()=>{const t=async l=>{l.stopPropagation();const c=V?.staticElement;if(c?.classList.contains("content-target"))return;const u=c?.parentElement;if(u&&c){const d=c.previousElementSibling;d?.classList.contains("mftsccs-marking-element")&&d.childNodes.length>1&&alert("insert into marker"),d&&u.insertBefore(c,d)}await n(),Wt(),H.updateActionHistories()},e=async l=>{l.stopPropagation();const c=V?.staticElement;if(c?.classList.contains("content-target"))return;const u=c?.parentElement;if(u&&c){const d=c.nextElementSibling;d&&u.insertBefore(d,c)}await n(),Wt(),H.updateActionHistories()};async function n(){const l=f.widgetTree,c=f.selectedStaticWidgetTreeInfo.widgetTree;function u(g){for(const m of g.children){if(m===c)return g;const p=u(m);if(p)return p}return null}const d=u(l);if(d){let g=null;d.wrapper&&d.wrapper!="0"?g=document.getElementById(d.wrapper):g=document.getElementById("builder-workarea"),d.html=g.innerHTML}else await ce()}function a(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(l){const c=Math.random()*16|0;return(l==="x"?c:c&3|8).toString(16)})}async function i(l,c,u){if(l.childNodes.length){if(l.dataset.widgetid){await nn(null,!0,parseInt(l.dataset.widgetid),l.parentElement?l.parentElement:c),ce(),we(),l.remove();return}l.childNodes.forEach(d=>{i(d,c)})}}return{moveUp:t,moveDown:e,copyElement:async l=>{l.stopPropagation();const c=V.staticElement;if(c?.removeAttribute("draggable"),c.classList.contains("content-target"))return;const u=c?.parentElement,d=c.cloneNode(!0);await i(d,u),d.dataset.widgetid||u.insertBefore(d,c.nextSibling),we(),await n(),me(),H.updateActionHistories()},fixContentTargetHeight:(l,c)=>{const u=window.getComputedStyle(c);console.log("wrapper element computed height",u.height,l)},editWidget:async l=>{console.log("event.target",l.target);const c=document.getElementById("edit-widget");c.style.display="none";const d=V.staticElement.closest(".added-widget-container");d.classList.replace("added-widget-container","edited-widget-container");const g=d.querySelectorAll(".widget_container_disabled");g.length&&g.forEach(h=>{h.className="widget_container widget_selected"}),V.staticElement?.removeAttribute("draggable");let m=d.cloneNode(!0);const p=await Ae(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=p.innerHTML,f.editedWidgets[d.id]=f.selectedStaticWidgetTreeInfo.widgetTree,V.staticElement?.setAttribute("draggable","true"),we()},generateUUID:a}})();class f{static newWidget=new bt;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:""};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:""};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await I();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:""},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const n=document.getElementById("widget-btn-wrapper");n&&n.querySelectorAll("button").forEach(a=>a.disabled=!0),await this.updateOwnerStatus(),this.#e&&n&&n.querySelectorAll("button").forEach(a=>a.disabled=!1)}}catch(n){console.error("error updating widget properties",n)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const n={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},a=await F("widget",this.userId,n),i=await X(this.entityId);if(await K(i,a,"s_widget"),this.staticWidgetTree?.assistant?.id){const s=await F("assistant",this.userId,this.staticWidgetTree?.assistant);await K(a,s,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let o=0;o<s.length;o++){const r=await F("css_library",this.userId,s[o]);await K(a,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let o=0;o<s.length;o++){const r=await F("js_library",this.userId,s[o]);await K(a,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let o=0;o<s.length;o++){const r=await F("custom_function",this.userId,s[o]);await K(a,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let o=0;o<s.length;o++)await this.createChildWidget(s[o],a)}return await N.SyncDataOnline(),a}static async createChildWidget(e,n){const a={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper,dependency:e?.dependency},i=await F("widget",this.userId,a),s={wrapper:e?.wrapper,type:e?.type,parent:i.id},o=await F("child_widget",this.userId,s);if(await K(n,o,"s_child"),await K(o,i,"info"),e.useLatest&&e.useLatest===!0){const r=await ee("use_latest","true",!1,this.userId,999);await K(o,r,"use_latest")}if(e?.library?.css?.length){const r=e?.library?.css;for(let l=0;l<r.length;l++){const c=await F("css_library",this.userId,r[l]);await K(i,c,"s_css_library")}}if(e?.library?.js?.length){const r=e?.library?.js;for(let l=0;l<r.length;l++){const c=await F("js_library",this.userId,r[l]);await K(i,c,"s_js_library")}}if(e?.custom_functions?.length){const r=e?.custom_functions;for(let l=0;l<r.length;l++){const c=await F("custom_function",this.userId,r[l]);await K(i,c,"s_custom_function")}}if(e?.children?.length)for(let r=0;r<e?.children?.length;r++)await this.createChildWidget(e.children[r],i)}static async updateOwnerStatus(){try{const e=await U(this.entityId),n=await U(this.staticWidgetTree.origin||this.staticWidgetTree.id),a=await Sn(e,n,"s_widget","the_entity_s_widget");if(console.log("updating canupdate status",a,e.id,n.id),a.length)this.#e=!0;else{const i=await Fa(this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(console.log("canupdate connectionPage",i,"body widget id",this.staticWidgetTree.id),i.length){const s=await U(i[0].id);(await Sn(e,s,"s_page","the_entity_s_page")).length&&(this.#e=!0),console.log("canupdate page",e.id,s.id)}}console.log("canupdate",this.#e)}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await U(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),n={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions,dependency:this.staticWidgetTree.dependency},a=await D.createWidgetCopy(e,this.userId,this.token,!0,n);if(this.staticWidgetTree.children.length){const i=this.staticWidgetTree.children;for(let s=0;s<i.length;s++)await this.createChildWidget(i[s],a)}return await N.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},a}catch(e){throw e}}static async savePageWidget(e,n){const a={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:n,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},i=await F("widget",this.userId,a);if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let r=0;r<o.length;r++){const l=await F("css_library",this.userId,o[r]);await K(i,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let r=0;r<o.length;r++){const l=await F("js_library",this.userId,o[r]);await K(i,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let r=0;r<o.length;r++){const l=await F("custom_function",this.userId,o[r]);await K(i,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let r=0;r<o.length;r++)await this.createChildWidget(o[r],i)}const s=await U(e);return await K(s,i,se.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async copyPageWidget(e,n,a){const i={after_render:a?.after_render,before_render:a?.before_render,name:n,html:a?.html,css:a?.css,js:a?.js,type:a?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},s=await F("widget",this.userId,i);if(a?.library?.css?.length){const o=a?.library?.css;for(let r=0;r<o.length;r++){const l=await F("css_library",this.userId,o[r]);await K(s,l,"s_css_library")}}if(a?.library?.js?.length){const o=a?.library?.js;for(let r=0;r<o.length;r++){const l=await F("js_library",this.userId,o[r]);await K(s,l,"s_js_library")}}if(a?.custom_functions?.length){const o=a?.custom_functions;for(let r=0;r<o.length;r++){const l=await F("custom_function",this.userId,o[r]);await K(s,l,"s_custom_function")}}if(a.children.length){const o=a.children;for(let r=0;r<o.length;r++)await this.createChildWidget(o[r],s)}return await K(e,s,se.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async hasWidgetChanged(e){const n=["html","css","js","after_render","before_render","update","mount_child"],a=l=>l?l.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function i(l){let c=0;for(let u=0;u<l.length;u++){const d=l.charCodeAt(u);c=(c<<5)-c+d,c=c&c}return c}const s=(l,c)=>n.some(u=>{const d=a(l[u]),g=a(c[u]),m=i(d),p=i(g),h={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==p?(console.log("value changed",`
value 1
`,d,`
value 2
`,g),!(d==""||d==h[u])):!1}),o=(l,c)=>l.length!==c.length?!0:l.some((u,d)=>s(u,c[d])||o(u.children,c[d].children)),r={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0};return e?(console.log("checking tree static",this.staticWidgetTree,"to initial tree",this.initialWidgetTree),s(this.staticWidgetTree,this.initialWidgetTree)||o(this.staticWidgetTree.children,this.initialWidgetTree.children)):s(this.staticWidgetTree,r)||o(this.staticWidgetTree.children,r.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");L.infoMessageToast("Publishing Widget",0);let e=null;const n=await U(this.staticWidgetTree.origin),a=this.staticWidgetTree.origin||this.staticWidgetTree.id,i=await $e(a,"the_widget_latest");if(i&&i.length){for(let o=0;o<i.length;o++)await Ie(i[o].id);try{const o=await fetch(qa.NODE_CACHE_URL+`/api/get-latest-widget?id=${n.id}`,{method:"DELETE"});o.ok||console.error("Failed to delete widget from cache server:",o.status)}catch(o){console.log("error removing widget from cache server",o)}}this.staticWidgetTree.origin&&(e=await U(this.staticWidgetTree.id),await K(n,e,"latest"),await N.SyncDataOnline()),await D.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),L.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,n=await $e(e,"the_widget_latest");if(n.length){const i=n[0].toTheConceptId===this.staticWidgetTree.widgetId;console.log("ami?",i,this.staticWidgetTree),i?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1}const a=document.getElementById("publish-widget");a&&(a.style.display="block",this.staticWidgetTree.isPublished?(a.textContent="Published",a.disabled=!0,a.style.cursor="not-allowed"):(a.textContent="Publish This Version",a.disabled=!1,a.style.cursor="pointer"))}}var Jn=(t=>(t.page="page",t.widget="widget",t))(Jn||{});const Yo=Gs("mftsccs-browser"),Zo=`
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
`,Xo=`
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
`,er=`
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
    "mftsccs-browser": "${Yo}"
  }
}
`,tr=`
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
`,nr=`
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
`,ar=`
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
  `,ir=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${z.baseURL}",
    baseNodeUrl: "${z.baseNodeUrl}",
    boomURL: "${z.boomURL}",
    aiURL: "${z.aiURL}",
  }
`,sr=`
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
`,sn=t=>`
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
`,or=`
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
`,rr=`
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
}`,lr=`
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

`;class on{async createProject(e,n,a){const i=await F(k.PROJECT_COMP_NAME,n,e),s=await X(a);return await q(s,i,se.ENTITY_PROJECT_LINKER),i}async getAllProjects(e){return new Promise(async(n,a)=>{const i=await I(),s=new P;s.typeConnection=`the_entity_${se.ENTITY_PROJECT_LINKER}`,s.selectors=[`the_${k.PROJECT_COMP_NAME}_name`],s.name="first",s.inpage=100;const o=new P;o.conceptIds=[e||i.entityId],o.name="second",o.inpage=100,o.freeschemaQueries=[s],o.outputFormat=ue,await de(o,"").subscribe(async r=>{const l=r?.[0]?.data?.the_entity?.[`the_entity_${se.ENTITY_PROJECT_LINKER}`];n(l)}).catch(r=>{console.error(r);const l=r?.message;L.errorToast(`${l}`,4),a({error:!0,message:l})})})}async getProjectById(e){const a=(await I())?.token;let i=new J;i.composition=e,i.fullLinkers=[`the_${k.PROJECT_COMP_NAME}_name`,`the_${k.PROJECT_COMP_NAME}_main_page`,`the_${k.PROJECT_COMP_NAME}_${se.PROJECT_PAGE_LINKER}`],i.inpage=100;let s=new J;return s.fullLinkers=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_body`],s.inpage=100,await be([i,s],a)}async updateProjectField(e,n,a){const i=await I(),s=`the_${k.PROJECT_COMP_NAME}_${e}`;await he(a,s);const o=await U(a),r=await ee(`${e}`,`${n}`,!1,i.userId,4,999);await q(o,r,e)}async deleteProject(e){try{return await Le(e),!0}catch(n){return console.error("Failed to delete project:",n),!1}}async addPagesToProject(e,n){try{const a=await U(e);if(!a){console.error("Project not found");return}await he(e,`the_project_${se.PROJECT_PAGE_LINKER}`);for(const i of n){const s=await U(i);if(!s){console.error("Page not found");return}await q(a,s,se.PROJECT_PAGE_LINKER)}await N.SyncDataOnline()}catch(a){console.error("Failed to add page to project:",a)}}async deletePageFromProject(e,n){try{const a=await U(e);if(!a){console.error("Project not found");return}const i=await U(n);if(!i){console.error("Page not found");return}const s=await Sn(a,i,"",`the_project_${se.PROJECT_PAGE_LINKER}`);if(!s){console.error("Connection not found");return}await Ie(s?.[0]?.id),await N.SyncDataOnline()}catch(a){console.error("Failed to delete page from project:",a)}}async setMainPage(e,n){try{const a=await U(e);if(!a){console.error("Project not found");return}const i=await U(n);if(!i){console.error("Page not found");return}await he(e,"the_project_main_page"),await q(a,i,"main_page"),await N.SyncDataOnline()}catch(a){console.error("Failed to set main page:",a)}}}let pe=!1;const cr=async()=>{if(pe)return;pe=!0;let t=new Qt;const e=await rn(t),n=e?.routesDir,a=e?.pagesDir;await ur(a,n),t.generateAsync({type:"blob"}).then(function(i){let s=document.createElement("a");s.href=URL.createObjectURL(i),s.download="my_files.zip",s.click()}),pe=!1},dr=async t=>{if(pe)return;pe=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new Qt;const a=await rn(n),i=a?.widgetsDir,s=a?.pagesDir;i&&s&&await mr(t,s,i),a?.routesDir?.file("routes.ts",sn(e)),n.generateAsync({type:"blob"}).then(function(o){let r=document.createElement("a");r.href=URL.createObjectURL(o),r.download="my_files.zip",r.click()}),pe=!1},rn=async t=>{t.file("index.html",tr),t.file("vite.config.js",Zo),t.file(".gitignore",Xo),t.file("package.json",er),t.file("tsconfig.json",ar);let e=t.folder("public");if(!e){console.log("unable to create public folder");return}let n=t.folder("src");if(!n){console.log("unable to create src folder");return}n?.file("app.ts",nr),n?.file("style.css","");let a=n?.folder("environments");if(!a){console.log("unable to create environments folder");return}a?.file("environment.dev.ts",ir);let i=n?.folder("widgets");if(!i){console.log("unable to create widgets folder");return}let s=n?.folder("pages");if(!s){console.log("unable to create pages folder");return}let o=n?.folder("services");if(!o){console.log("unable to create services folder");return}o?.file("widget.service.ts",or),o?.file("drop.service.ts",rr),o?.file("validator.service.ts",lr);let r=n?.folder("routes");if(!r){console.log("unable to create routes folder");return}return r?.file("renderRoute.service.ts",sr),{srcDir:n,pagesDir:s,servicesDir:o,publicDir:e,environmentsDir:a,widgetsDir:i,routesDir:r}},ur=async(t,e)=>{if(!t&&!e)return;let n=[];const a=await I(),i=a?.entityId,s=a?.token,o=new J;o.composition=i,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const r=new J;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await be([o,r],s);if(l?.data.the_entity?.the_entity_s_page?.length)for(let c=0;c<l?.data.the_entity?.the_entity_s_page?.length;c++){const u=l.data.the_entity.the_entity_s_page[c];let d={page:u?.data?.the_page?.the_page_body?.[0]?.id,title:u?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:u?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:u?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:u?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:u?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:u?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!d.page)continue;const g=`${d.slug.split("-").map((h,w)=>w===0?h.charAt(0).toLowerCase()+h.slice(1):h.charAt(0).toUpperCase()+h.slice(1)).join("")}`;n.push({path:`/${d.slug}`,content:`${g}Index`,importFrom:`/${d.slug}/${d.slug}.index.ts`});let m=t?.folder(d.slug);const p=`
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
`;m?.file(`${d.slug}.index.ts`,p)}e?.file("routes.ts",sn(n))},mr=async(t,e,n)=>{console.log("widgetsDir",n);const i=(await I())?.token,s=await na(t,i,!0);let o=e?.folder("home");const r=`
import * as tsccs from "mftsccs-browser";

${s?.css?'import "./home.style.css";':""}
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
`;o?.file("home.index.ts",r),s?.css&&o?.file("home.style.css",s?.css)},gr=async t=>{if(pe)return;pe=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new Qt;const a=await rn(n),i=a?.widgetsDir,s=a?.pagesDir;let o="";i&&s&&(o=await pr(t,s)),a?.routesDir?.file("routes.ts",sn(e)),n.generateAsync({type:"blob"}).then(function(r){let l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=`${o||"page"}.zip`,l.click()}),pe=!1},pr=async(t,e)=>{const n=await I(),a=n?.entityId,i=n?.token,s=await na(t,i,!0),o=new J;o.composition=a,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const r=new J;r.inpage=100,r.composition=t,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const c=(await be([o,r],i))?.data?.the_entity?.the_entity_s_page?.filter(p=>p?.id==t),u=c?.[0]?.data?.the_page?.the_page_body?.[0]?.id,d=c?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let g=e?.folder("home");const m=`
    import * as tsccs from "mftsccs-browser";
    
    ${s?.css?'import "./home.style.css";':""}
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
    `;return g?.file("home.index.ts",m),s?.css&&g?.file("home.style.css",s?.css),d},hr=async t=>{if(pe)return;if(!t){console.log("Project id is required");return}const i=(await new on().getProjectById(t))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();pe=!0;let s=new Qt;const o=await rn(s),r=o?.routesDir,l=o?.pagesDir;await fr(l,r,t),s.generateAsync({type:"blob"}).then(function(c){let u=document.createElement("a");u.href=URL.createObjectURL(c),u.download=`the_${i}.zip`,u.click()}),pe=!1},fr=async(t,e,n)=>{if(!t&&!e)return;let a=[];const s=(await I())?.token,o=new J;o.composition=n,o.inpage=100,o.fullLinkers=["the_project_s_page","the_project_main_page"];const r=new J;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await be([o,r],s),c=l?.data.the_project?.the_project_main_page?.[0]?.id;if(l?.data.the_project?.the_project_s_page?.length)for(let u=0;u<l?.data.the_project?.the_project_s_page?.length;u++){const d=l.data.the_project.the_project_s_page[u];let g={page:d?.id,title:d?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:d?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:d?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:d?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:d?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:d?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!g.page)continue;const m=`${g.slug.split("-").map((w,E)=>E===0?w.charAt(0).toLowerCase()+w.slice(1):w.charAt(0).toUpperCase()+w.slice(1)).join("")}`;a.push({path:`/${g.slug}`,content:`${m}Index`,importFrom:`/${g.slug}/${g.slug}.index.ts`}),g.page==c&&a.push({path:"/",content:`${m}Index`});let p=t?.folder(g.slug);const h=`
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
                }`;p?.file(`${g.slug}.index.ts`,h)}e?.file("routes.ts",sn(a))};async function yr(){const t=new ae("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function wr(){const t=new ae("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function yi(){await yr(),await wr(),await no(),await ao()}function br(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function wi(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function Mn(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class bi{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const a=(await I())?.token;On(),wi(),document.querySelector("#widget-properties #widget-type input")?.remove(),br(),await yi();let s=Fn(),o=await Se(e,a),r=await re(o?.widgetId??e),l=await Ce(r,s);this.addPageUpdate(e),Mn(),f.resetWidgetTree(),f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),te(r,!1,l,!0),D.enableWidgetButtons(),tn(),me(),we()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
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
      `,this.isDroppedDown=!1,this.arrowBtn=n.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=n.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,n){si(e.css,n?.css),ii(e.after_render),oi(e.before_render)}}class vr{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
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
    `}}const Ta={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},Sa=new Ge,vi=new bi;async function Gn(t){t.preventDefault();try{await De(),await it();const e=document.getElementById("fspage-save-button"),n=Number(e?.getAttribute("data-pageid")),s="widget_"+(await Sa.getPageById(n)).data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_slug`].data.the_slug,o=document.querySelectorAll(".edited-widget-container");L.infoMessageToast("Saving page...",0),o?.length&&o.forEach(d=>{const g=d.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),d.classList.remove("edited-widget-container")});const r=await Ze();f.staticWidgetTree.html=r,await f.savePageWidget(n,s),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast(Ta.PAGE_SAVE);const u=(await Sa.getPageById(n))?.data?.the_page?.the_page_body?.id;return await vi.LoadPageWidget(u),Ta.PAGE_SAVE}catch(e){Yn(e,"There is an error on saving widget")}}async function Qn(t,e,n){t.preventDefault();const a=document.getElementById("updateFsPagePublish"),i=document.getElementById("updateFsPage"),s=i?.innerHTML||"";try{const o=document.getElementById("updateFsPagexx");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating.."),o&&(o.classList.add("disabled"),o.textContent="Updating..");const r=document.querySelectorAll(".edited-widget-container");L.infoMessageToast("Updating Page...",0),r?.length&&(L.infoMessageToast("Updating page...",0),r.forEach(d=>{const g=d.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),d.classList.remove("edited-widget-container")}));const l=await Ze();f.staticWidgetTree.html=l;const c=await f.updateWidget();return console.log("updateWidgetResponse ->",c),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Page Updated Successfully"),await vi.LoadPageWidget(e),n&&n===!0&&await f.publish(),"updated widget successfully!"}catch(o){console.error("error updating page",o),o instanceof Error&&L.errorToast(o.message),document.querySelector(".infoMessageToast")?.remove()}finally{a&&a.classList.remove("disabled"),i&&(i.classList.remove("disabled"),i.innerHTML=s)}}function _r(t){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const n=`${window.location.origin}/page-preview/${e}`;window.open(n,"_blank")?.focus()}}function Er(t,e=0){return window.saveWidgetInFolders=Sr,`
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
    `}let yn,lt;async function Tr(t,e){yn=t;const n=Er(e,typeof t=="object"?0:t),a=document.createElement("div");a.innerHTML=n;const i=a.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(i),await ge("folder-widget-container");const s=await I();if(!s)return;let o,r,c=(await nt(yn,s.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(o=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),o&&(o.value=c),r=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(o=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),r=document.getElementById("folder-widget-container")?.querySelector("textarea#description"));const u=document.getElementById("widgetFolder");lt=await Be(z.folder_widget,u,{widgetName:o.value,widgetDescription:r?.value,widgetId:yn,showCheckbox:!0,showFiles:!1})}async function Sr(t,e,n,a){t.preventDefault(),console.warn("asdfads",lt.selectedConceptIds);let i=[];lt&&lt?.selectedConceptIds?.length>0&&(i=lt.selectedConceptIds||[]);try{L.infoMessageToast("Saving Widget...",0),await De();const s=document.getElementById("folder-widget-container"),o=s?.querySelector('button[type="submit"]');o.textContent="Saving";const r=s?.querySelector("input"),l=s?.querySelectorAll("button"),u=(document.getElementById("save-to-folder-name")||document.getElementById("folder-name")).value;l&&l.forEach(T=>{T.disabled=!0}),r&&(r.disabled=!0),await it();let d;if(!a){V.staticElement?.removeAttribute("draggable");const T=document.querySelectorAll(".edited-widget-container");T?.length&&T.forEach(async _=>{if(_.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[_.id]){const C=await Ae(_,"div.mftsccs-marking-element");f.editedWidgets[_.id].html=C.innerHTML}});const b=await ki();f.staticWidgetTree.html=b;const y=await f.saveWidget(u);d=await X(y.id),n=d.id}const g=await I(),m=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,p=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,h={title:m,source_url:window.location.href,widget_id:n,short_desc:p,note:"",data_type:"widget",created_on:Date.now()};if(i.length==0){const T=g?.userConcept;d=await X(Number(n));let b={...h,boom_folder:{name:"",parent:T}};const y=await Oe({boomgpt:b},void 0,void 0,void 0,g.userId,4);await ga(await X(Number(T)),y,"the_boom_folder_s_contain"),await K(y,d,"the_refer")}else if(i?.length>0)for(let T=0;T<i.length;T++){const b=i[T];d=await X(Number(n));const y=await X(Number(b));if(!y)throw new Error("Selected folder concept not found!");let _={...h,boom_folder:{name:y.name||"",parent:b}};const C=await Oe({boomgpt:_},void 0,void 0,void 0,g.userId,4);await ga(await X(Number(b)),C,"the_boom_folder_s_contain"),await K(C,d,"the_refer")}await N.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),ve("folder-widget-container"),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget saved successfully!"),a||(await D.renderSavedWidgets(),Ue(t,Number(n)))}catch(s){document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Error in saving widget"),Yn(s,"There is an error on saving widget")}}class _i extends bt{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";_pageBuilderService;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const n=I();if(n&&(this.saveBoomButtonHTML=`
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
    `,e){this.the_params=e,this._pageBuilderService=new bi;const a=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+a:"Widget Builder";const i=this.the_params?.page_id;n&&e.type==Jn.page&&(this.saveBoomButtonHTML=`
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
`}before_render(){this.render()}after_render(){if(this.the_params){document.getElementById("fspage-save-button").addEventListener("click",Gn);const n=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!n){tn();return}this._pageBuilderService.LoadPageWidget(Number(n))}}getHtml(){return window.openSaveWidgetModal=ea,window.saveWidget=xi,window.updateWidget=ta,window.newWidget=qe,window.previewWidget=Dr,window.downloadWebsite=cr,window.moveUp=Te.moveUp,window.moveDown=Te.moveDown,window.copyElement=Te.copyElement,window.editWidget=Te.editWidget,window.openConvertModal=qr,window.convertToWidget=Nr,window.updatePage=Qn,window.previewPage=_r,window.undoAction=H.undoAction,window.redoAction=H.redoAction,window.saveWidgetToFolderBtn=Tr,window.openPromptModal=_o,window.refineAIData=xn,`
      <div class="content" onclick="  removeSubSidebar()">

        <div class="column-title d-flex justify-content-between align-items-center">
        <h3 id="widget-builder" title="${this.component_heading}">${this.component_heading}</h3>
        ${this.responsiveButtonHTML}

        ${this.tryAIButtonHTML}
          
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
    `}}function Ei(){N.conceptsSyncArray=[],N.connectionSyncArray=[]}class Cr{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let n="",a="";return this.props.id==="fs-create-page-modal"?a=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?a=this.editPageModal():this.props.id==="create-project-modal"?(a=this.createNewProjectModal(),n="m-large"):this.props.id==="add-pages-project"&&(a=this.addPagesModalHtml(),n="m-large"),e.innerHTML=`
      <div class="m-content ${n}">
        <div id="closeModalBtn" class="close-modal">
            <img src="./images/icons/cross-close.svg" alt="" class="icon" />
        </div>
        <div class="m-header">
          <span id="modalHeader">${this.props.headerText}</span>
        </div>
        ${a}
      </div>
    `,e.querySelector("#closeModalBtn").addEventListener("click",this.handleClose.bind(this)),e}updateModal(){this.props.isOpen?this.modal.classList.add("open"):this.modal.classList.remove("open")}handleClose(){Ei(),this.modal.remove()}createNewPageModal(){return`
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
    `}}function Bt(t){new Cr(t)}function Ca(t){const e=document.getElementById(t);e&&e.remove()}class Kn{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new ni,this._pagesTSCCSService=new Ge}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),n=document.getElementById("saved-page-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-page-button");a?.removeEventListener("click",this.createButtonClickHandler),a?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(r=>{r.removeEventListener("click",this.deletePageButtonClickHandler),r.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(r=>{r.removeEventListener("click",this.editPageButtonClickHandler),r.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(r=>{r.removeEventListener("click",this.duplicatePageButtonClickHandler),r.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(a=>a.remove())}createButtonClickHandler=()=>{Bt({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const n=document.getElementById("fs-create-page-form"),a=n?.elements.namedItem("title");if(!a){console.error("page_title not found");return}const i=async()=>{const o=await this._pagesTSCCSService.generateSlug(a.value);n.elements.namedItem("slug")?.setAttribute("value",o)};a.addEventListener("keyup",i);const s=()=>{a.removeEventListener("keyup",i),document.getElementById("fs-create-page-modal")?.removeEventListener("close",s)};document.getElementById("fs-create-page-modal")?.addEventListener("close",s)};savePageButtonClickHandler=async()=>{const n=document.getElementById("fs-create-page-form").elements;if(!n.title.value){n.title.style.borderColor="red";return}L.infoMessageToast("Creating page...",0);const a=await An(n),i=await I();await this._pagesTSCCSService.savePage(a,i?.userId,i?.entityId),await N.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),Ca("fs-create-page-modal"),setTimeout(()=>{L.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;Bt({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:a,slug:i}});const s=document.getElementById("fs-edit-page-form"),o=s?.elements.namedItem("title");if(!o){console.error("page_title not found");return}const r=async()=>{document.getElementById("fs-edit-page-button")?.removeAttribute("disabled");const d=await this._pagesTSCCSService.generateSlug(o.value);s.elements.namedItem("slug")?.setAttribute("value",d)};o.addEventListener("keyup",r);const l=()=>{o.removeEventListener("keyup",r),document.getElementById("fs-edit-page-modal")?.removeEventListener("close",l)};document.getElementById("fs-edit-page-modal")?.addEventListener("close",l),document.getElementById("fs-edit-page-button")?.addEventListener("click",()=>this.updatePageButtonClickHandler(n))};async PageInputElementChangeHandler(e,n){const a=e.target,i=a.name,s=a.value;let o=await this._pagesTSCCSService.checkSlugAvailablity(s);if(i==="slug"&&!o){document.getElementById("fs-update-page-button")?.setAttribute("disabled","true"),a.style.borderColor="red",a.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(a.getAttribute("name"),a.value,Number(n))}updatePageButtonClickHandler=async e=>{const n=document.getElementById("fs-edit-page-form"),a=n.elements.namedItem("title");if(!a.value.trim()){a.style.borderColor="red";return}const i=n.elements;if(!i.title.value){i.title.style.borderColor="red";return}L.infoMessageToast("Renaming page...",2);const s=await An(i),o=await I();await this._pagesTSCCSService.renamePage(s,e,o?.userId),await N.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Page renamed successfully");const l=new URLSearchParams(window.location.search).get("page-id");if(e===l){const c=document.getElementById("widget-builder");c.textContent=`Page Builder: ${s?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),Ca("fs-edit-page-modal")};deletePageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${a}" with the slug "${i}"?`)?(L.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(n)),await N.SyncDataOnline(),es("/"),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const a=e?.target?.getAttribute("data-id"),s=(await this._pagesTSCCSService.getPageById(Number(a)))?.data?.the_page,o=s?.the_page_title?.data?.the_title?.trim()+" copy",r=s?.the_page_slug?.data?.the_slug?.trim()+"-copy",l=s?.the_page_meta_title?.data?.the_meta_title?.trim(),c=s?.the_page_meta_description?.data?.the_meta_description?.trim(),u=s?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),d=s?.the_page_width?.data?.the_width?.trim(),g=s?.the_page_type?.data?.the_type?.trim(),m=s?.the_page_font_family?.data?.the_font_family?.trim(),p=s?.the_page_font_size?.data?.the_font_size?.trim(),h={title:o,slug:r,meta_title:l,meta_description:c,meta_keywords:u,width:d,type:g,font_family:m,font_size:p},w={};for(const[_,C]of Object.entries(h))C&&(w[_]=C);const E=s?.the_page_body?.id,A=await I(),T=await Se(E,A?.token);let b=await re(T?T.widgetId:E);const y=await this._pagesTSCCSService.savePage(w,A?.userId,A?.entityId);await f.copyPageWidget(y,`widget_${r}`,b),this.initPagesSidebar(),L.successfullToast("Page duplicated successfully")}}async function Lr(t){t?.preventDefault();const e=window.location.href,a=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(a))){await Lt("Do you want to save changes?")&&(e.includes("?page-id=")?a?await Qn(t,Number(a)):await Gn(t):a?await ta(t,Number(a)):await ea());const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}f.resetWidgetTree();const s=t.target.getAttribute("data-pageId");history.pushState({},"",`?page-id=${s}`);let r=await new Ge().getPageById(Number(s));r?.error&&qe();const l=document.getElementById("midContent"),c=document.getElementById("right-aside"),u={type:Jn.page,data:r.data?.[`the_${k.PAGE_COMP_NAME}`],page_id:s},d=new _i(u),g=new cn(u);c.innerHTML=await g.getHtml(),l.innerHTML="",d.mount(l),Qs.resetNavigationBar()}class Ti{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new on,this._pagesTsccsService=new Ge}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(a=>{let s=a?.data?.[`the_${k.PROJECT_COMP_NAME}`]?.[`the_${k.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
            <li class="project-item">
              <router-link class="project_title" data-projectId="${a.id}">
                <span><img src="./images/icons/projects icon.svg" alt="" class="icon" /></span>
                ${s}
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
          `}catch(e){return console.error("error",e),e?.status===401&&ke(),`
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
    `,document.querySelector("body #app")?.appendChild(n),ge("create-project-dialog"),"Create Project Modal"}async renameProjectModal(e,n){document.getElementById("rename-project-dialog")?.remove();const i=document.createElement("dialog");return i.setAttribute("id","rename-project-dialog"),i.classList.add("col-md-3"),i.innerHTML=`
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
    `,document.querySelector("body #app")?.appendChild(i),ge("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const n=await this._projectsService.getProjectById(e),a=n?.data?.the_project?.[`the_project_${se.PROJECT_PAGE_LINKER}`],i=n?.data?.the_project?.the_project_main_page?.[0]?.id;return a?.length?a?.map(o=>{let r=o?.data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const l=i==o.id,c=l?'<span class="material-symbols-outlined home-icon">home</span>':"",u=l?"":`<li class="d-flex align-items-center justify-content-between" 
              onclick="setMainPageHandler(event, ${o.id})" data-projectid="${e}">
                  <span class="px-2">Set as Main Page</span>
                  <span class="material-symbols-outlined">home</span>
                </li>`,d=Number(o.id)+Number(e);return`
            <li class="project-page-item" data-projectid="${e}">
              <router-link class="page_title" href="/?page-id=${o.id}" data-pageid="${o.id}" onclick="pageHandler(event)">
                <span class="material-symbols-outlined">description</span>
                ${r}
              </router-link>
              ${c}
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${d})" title="Options"> more_vert </span>
              <ul class="dropdown-menu" id="dropdown-menu-${d}">
                <li class="delete-project-page d-flex align-items-center justify-content-between delete-icon" 
                onclick="deletePageFromProjectHandler(event, ${o.id})">
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
          `}catch(n){return console.error("error",n),n?.status===401&&ke(),`
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
      `,document.body.appendChild(n),n.showModal(),n}catch(n){return console.error("Error:",n),""}}}function Ar(t,e=[],n=[]){return`
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
    </div>
  </div>

    `}const Wr=async t=>{if(!t){console.log("Project id is required");return}const e=new on;let[n,a]=await Promise.all([e.getProjectById(t),Ja(t)]);console.log("project detail",n),console.log("abc menus ",a);const i=n?.data?.the_project?.the_project_main_page?.[0]?.id??0,s=n?.data?.the_project?.the_project_s_page?.map(c=>({id:c.id,name:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:c?.id==i}))??[];console.log("pages",s),document.getElementById("project-setting-dialog")?.remove();const r=document.createElement("dialog");r.setAttribute("id","project-setting-dialog"),r.classList.add("col-md-8"),r.style.flexDirection="column",r.innerHTML=Ar(t,s),document.querySelector("body #app")?.appendChild(r),await ge("project-setting-dialog"),document.querySelectorAll(".accordion-header").forEach(c=>{c.addEventListener("click",async()=>{c.classList.toggle("active");const u=c.getAttribute("id");if(c.classList.contains("active"))switch(u){case"domain-viewer-btn":const d=document.getElementById("custom-domain-view-holder"),g=await Fa(t,"the_project_custom_url");d&&Be(102462726,d,{projectId:t,storeUrl:`https://preview-${t}.develop.freeschema.com`,customUrl:g?.[0]?.data?.the_custom_url||""});break}else switch(u){case"domain-viewer-btn":const d=document.getElementById("custom-domain-view-holder");d&&(d.innerHTML="");break}})}),st(a);const l=document.getElementById("save-menu-items");l?.addEventListener("click",async c=>{l&&(l.disabled=!0),console.log("menus save",a),a=a.map(d=>(delete d.edit,d)),console.log("menus filtered save",a),c.target.disable=!0;const u=await Ls(t,a);console.log("menu created",u),c.target.disable=!1,st(a),alert("Updated Menu"),l&&(l.disabled=!1),Si(t)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",c=>{const u=c.target.closest(".custom-menu-item"),d=u?.querySelector("#nameElem"),g=u?.querySelector("#linkElem"),m=u?.querySelector("#actionElem"),p=u?.querySelector("#authElem");if(!d.value){alert("Menu Name is required");return}if(!g.value&&!m.value){alert("Link or Action is required");return}a.push({name:d.value??"",link:g.value??"",action:m.value??"",page:"",order:a.length,auth:!!p.checked,menus:[]}),d.value="",g.value="",m.value="",p.checked=!1,st(a)}),window.handleMenuAction=(c,u,d,g)=>{if(u=="remove")if(g){const m=document.getElementsByClassName("selected-menu-page");for(let p=0;p<m.length;p++){const h=m[p];Number(h.getAttribute("data-page-id"))==g&&h?.checked&&h.click()}}else a.splice(d,1)[0];else if(u=="edit")a[d].edit=!0;else if(u=="cancel")a[d].edit=!1;else if(u=="update"){a[d].edit=!1;const m=c?.target?.closest("li"),p=m?.querySelector("#menuName").value??"",h=m?.querySelector("#menuLink").value??"",w=m?.querySelector("#menuAction").value??"",E=!!m?.querySelector("#menuAuth").checked;a[d].name=p,a[d].link=h,a[d].action=w,a[d].auth=E}else if(u=="up"){const m=a.splice(d,1)[0];a.splice(d-1,0,m),a=a.map((p,h)=>({...p,order:h}))}else if(u=="down"){const m=a.splice(d,1)[0];a.splice(d+1,0,m),a=a.map((p,h)=>({...p,order:h}))}else console.warn("unacceptable action ",u);st(a)},document.querySelectorAll(".selected-menu-page").forEach(c=>{c.addEventListener("change",u=>{console.log("e.target.changed",u.currentTarget.checked);const d=parseInt(u.currentTarget.getAttribute("data-page-id"));if(u.currentTarget.checked){const g=s.find(m=>m.id==d);console.log("pages",g,s),a.push({name:g.name??"",link:g.slug??"",action:"",page:g.id??"",order:a.length,auth:!1,menus:[]})}else{const g=(m,p)=>{for(let h=0;h<m.length;h++){const w=m[h];w.menus&&w.menus.length>0&&(w.menus=g(w.menus,p))}return m.filter(h=>h.page!=p)};a=g(a,d)}st(a)})})},Si=t=>{const e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");const n=new URLSearchParams;n.append("invalidDomain","www.sleepinghats.com"),n.append("projectId",`${t}`);const a={method:"POST",headers:e,body:n,redirect:"follow"};fetch(`${z.deployURL}/api/project-deploy/invalidate`,a).then(i=>i.text()).then(i=>console.log("result -->",i)).catch(i=>console.error(i))};class Ci{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new Ti,this._projectsTSCCSService=new on,this._pagesTSCCSService=new Ge}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),n=document.getElementById("saved-project-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-project-button");a?.removeEventListener("click",this.createProjectHandler),a?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(r=>{r.removeEventListener("click",this.getProjectPagesListHandler),r.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(r=>{r.removeEventListener("click",this.addPageToProjectHandler),r.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(r=>{r.removeEventListener("click",this.deleteProjectHandler),r.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=hr,window.showProjectSetting=Wr,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{Bt({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,n)=>{try{const s=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",s,n),await N.SyncDataOnline(),this.initProjectsSidebar()}catch(a){console.error("Failed to rename project:",a)}};getProjectPagesListHandler=async e=>{const n=e.target.dataset.projectid,a=e.target.parentElement.querySelector(".project-pages-list");if(a){if(!a.classList.contains("d-none")){a.classList.add("d-none");return}a.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,a.classList.remove("d-none");const i=await this._projectsHTMLService.getProjectPagesListHTML(n);a.innerHTML=i}};deleteProjectHandler=async e=>{try{let n=e.target.dataset.projectid;n||(n=e.target.parentElement.dataset.projectid),await Lt("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(n),await N.SyncDataOnline(),L.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(n){console.error("Failed to delete project:",n),L.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,n)=>{try{let a=e.target.parentElement.parentElement.dataset.projectid;await Lt("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(a,n),await N.SyncDataOnline(),this.initProjectsSidebar())}catch(a){console.error("Failed to delete page from project:",a)}};setMainPageHandler=async(e,n)=>{e.preventDefault(),e.stopPropagation();try{let a=e.target.closest(".project-page-item").dataset.projectid;L.infoMessageToast("Setting page as main page...",0);const i=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(a,n),await N.SyncDataOnline();const s=await this._projectsHTMLService.getProjectPagesListHTML(a),o=e.target.closest(".project-pages-list");o&&(o.innerHTML=s,o.classList.remove("d-none")),i?.remove(),L.successfullToast("Main page set successfully!")}catch(a){console.error("Failed to set main page:",a),document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),Bt({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const n=e.target.previousElementSibling.dataset.projectid,i=(await this._projectsTSCCSService.getProjectById(n))?.data?.the_project?.[`the_project_${se.PROJECT_PAGE_LINKER}`];let s=i?i.map(r=>({id:r.id,title:r?.data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const o=document.getElementById("add-pages-project");await this.addPageToProject(o,!1,n,s)}catch(n){console.error("Failed to add page to project:",n)}};addPageToProject=async(e,n,a,i=[])=>{try{const s=await this._pagesTSCCSService.getAllPages(),o=s?s.map(m=>({id:m.id,title:m?.data?.[`the_${k.PAGE_COMP_NAME}`]?.[`the_${k.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const r=e.querySelector("#selectedItems"),l=e.querySelector("#options"),c=(m="")=>{if(!o.length){l.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let p=o.filter(h=>h.title.toLowerCase().includes(m.toLowerCase()));u(),l.innerHTML=p.length?p.map(h=>`
            <li class="option" data-value="${h.id}">
              <input type="checkbox" id="page-${h.id}" ${i?.some(w=>w.id.toString()===h.id.toString())?"checked":""} />
              <span>${h.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},u=()=>{i&&i.length?r.innerHTML=i.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):r.innerHTML="<span>No pages selected!</span>"},d=(m,p)=>{i.push({id:m,title:p}),u()},g=m=>{i=i.filter(p=>p.id.toString()!==m.toString()),u()};r.addEventListener("click",m=>{const p=m.target;if(p.classList.contains("remove-item")){const h=p.closest(".selected-page");h&&g(h.dataset.value)}}),l.addEventListener("click",m=>{const p=m.target.closest(".option");if(!p)return;const h=p.querySelector("input[type='checkbox']");h&&(m.target!==h&&(h.checked=!h.checked),h.checked?d(p.dataset.value,p.querySelector("span").textContent.trim()):g(p.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(n&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){L.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),p=e.querySelector("#closeModal");m.disabled=!0,p.disabled=!0;const h=m.textContent;m.textContent="Adding...",L.infoMessageToast("Adding pages to project...",0);try{const w=i.map(y=>Number(y.id));if(!w.length){document.querySelector(".infoMessageToast")?.remove(),L.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}if(n){this.addPageToProjectHandler();const _=document.getElementById("create-project-form").elements,C=An(_),v=await I(),S=await this._projectsTSCCSService.createProject(C,v?.userId,v?.entityId);await N.SyncDataOnline(),a=(await X(S.ghostId)).id}if(!a){document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Project ID not found."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}await this._projectsTSCCSService.addPagesToProject(a,w);const E=await this._projectsHTMLService.getProjectPagesListHTML(a),T=document.getElementById(`dropdown-menu-${a}`)?.nextElementSibling;T&&(T.innerHTML=E,T.classList.remove("d-none")),Si(a),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Failed to add pages to prjects"),m.disabled=!1,p.disabled=!1,p.textContent=h}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const p=m.target;c(p.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{c()}),u()}catch(s){console.error("Failed to add page to project:",s)}}}const _t=(()=>{const t=()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})};return{toggle:o=>{const r=o.target,l=r?.dataset?.id;if(r.classList.contains("activeNavigationIcon")){t();return}if(l){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const d=document.getElementById(l);document.querySelector(`[data-id='${l}']`)?.classList.add("activeNavigationIcon"),d?.classList.add("navActive"),l=="fs-all-pages-list"&&new Kn().initPagesSidebar(),l=="fs-all-projects-list"&&new Ci().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})},checkForActiveNavigation:()=>{const o=document.querySelector(".activeNavigationIcon");if(o){const r=o.dataset?.id||"";document.getElementById(r)?.classList.remove("navActive")}},resetNavigationBar:t,disableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="none",o.style.pointerEvents="none",o.style.opacity="0"},enableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="block",o.style.pointerEvents="all",o.style.opacity="1"}}})(),mt=(()=>{const t=()=>{const i=document.querySelector("#profileDropdown");if(i.style.display&&i.style.display=="block"){e();return}i?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:t,closeUserActionModel:e,disableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="none",i.style.pointerEvents="none",i.style.opacity="0"},enableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="flex",i.style.pointerEvents="all",i.style.opacity="1"}}})(),L=(()=>{let t=0;const e=()=>{const l=document.createElement("span");return l.innerText="close",l.classList.add("material-symbols-outlined"),l.classList.add("crossButtonToast"),l.addEventListener("click",c=>{c.target instanceof HTMLElement&&c.target.parentNode instanceof HTMLElement&&console.log(c.target.parentNode.remove())}),l},n=l=>{const c=document.querySelector("#toasterContainer");c.style.display="flex";const u=document.createElement("div");u.classList.add("successFullToast");const d=document.createElement("span");d.classList.add("material-symbols-outlined"),d.innerText="check_circle";const g=document.createElement("span");g.innerText=l,u.appendChild(d),u.appendChild(g),u.appendChild(e()),c.appendChild(u),t=t+.5,s(u)},a=(l,c=1)=>{t=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const d=document.createElement("div");d.classList.add("infoMessageToast","bg-info");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="info";const m=document.createElement("span");m.innerText=l,d.appendChild(g),d.appendChild(m),d.appendChild(e()),u.appendChild(d),c!=0&&(t=t+.5+(c||0),s(d))},i=(l,c)=>{t=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const d=document.createElement("div");d.classList.add("failureToast");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="error";const m=document.createElement("span");m.innerText=l,d.appendChild(g),d.appendChild(m),d.appendChild(e()),u.appendChild(d),t=t+.5+(c||0),s(d)},s=l=>{l.style.animation=`animateToastMessage ${2+t}s forwards`,l.addEventListener("animationend",()=>{l.remove();const c=document.querySelector("#toasterContainer");c.innerHTML||(t=0,c.style.display="none")}),l.addEventListener("mouseenter",()=>{o()}),l.addEventListener("mouseleave",()=>{r()})},o=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(c=>{c.style.animationPlayState="paused"})},r=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(c=>{c.style.animationPlayState="running"})};return{successfullToast:n,infoMessageToast:a,errorToast:i}})();async function De(){const t=await I(),e=t?.entityId,n=t?.token,a=t?.userId,i=t?.userConcept,o=(await X(e)).typeCharacter;let r=!1,l;const c=new P;c.conceptIds=[e],c.selectors=["the_entity_user"],c.outputFormat=ue,c.inpage=100,await de(c,n)?.subscribe(g=>{l=g});const u=l?.[0]?.data?.the_entity?.the_entity_user?.id;if(Number(u)===Number(i)&&(r=(await X(i))?.userId===a),!r||!o||o!=="the_entity"||!n||n.trim()===""||!a)throw setTimeout(()=>ke(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function xr(t){try{const e=await $e(t,"the_entity_s_widget",!0);e.length?await Ie(e[0].id):L.errorToast("already deleted")}catch(e){console.error(e)}}async function Yn(t,e="Error"){console.error(t);const n=t;n&&(L.errorToast(n?.message?n.message:e),n.status===401&&ke())}let fe=[],xe=qn;async function Zn(t){const e=document.getElementById("selected_attr_list"),n=document.querySelector(".row.attribute_single");fe=[],xe=qn,e&&(e.innerHTML=""),n?.remove(),await ve(t),t==="update-element-dialog"&&document.getElementById(t)?.remove()}async function Sc(t,e){if(t.preventDefault(),!(await Ee.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(t.target),i=Object.fromEntries(a),s=t.target.querySelector("[name='name']"),o=t.target.querySelector("[name='tag']");let r=!0;if(i?.name?.trim()?s.style.border="":(r=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),i?.tag?.trim()?o.style.border="":(r=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),!r)return;const c=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');c.textContent="Creating...";const u=t?.target;for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!0;const d=await Li(a,null);for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!1;await ve(e);const g=await ln();if(d){const m=document.getElementById("created-elements");m?!g||g.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=g||"":console.error("Widget list container not found in the DOM.")}return d}async function Li(t,e){const n=Object.fromEntries(t);delete n.attributes;const i=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let s=[];if(i.forEach(o=>{const r=o?.textContent?.split(" "),l=r[0],c=r[1].substr(1,r[1].length-7);let u="";switch(l){case"method":u="get,post,dialog";break;case"target":u="_blank,_self,_parent,_top";break;case"type":n?.tag==="button"?u="button,submit,reset":n?.tag==="input"&&(u="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":u="soft,hard";break}s.push({name:l,type:c,value:u})}),s=[...Ln,...s],e){const o=await oa(e),r=o?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,l=new Set(Ln.map(m=>m.name)),c=o?.attributes?.filter(m=>m?.division!=="inline"&&!l.has(m?.name)&&m?.name!=="elementContent"),u=new Set(fe.map(m=>m.name)),d=c?.filter(m=>!u.has(m?.name));if(d?.length){const m=await Promise.all(d?.map(async p=>await Le(p?.id)));console.log("deletedResponse ->",m)}let g=[{the_element_name:{name:n?.name}},{the_element_tag:{tag:n?.tag}},{the_element_void:{void:n?.void}},{the_element_icon:{icon:n?.icon.toString()}},{the_element_default:{default:n?.default}},{the_element_division:{division:n?.division}},{the_element_s_attribute:fe}];return await Promise.all(g.map(async m=>await Promise.all(Object.entries(m).map(async([p,h])=>{const w=Object.keys(h)[0],E=h[w]||"";if(p==="the_element_s_attribute"){const A=await U(e);if(h?.length){const T=h.filter(b=>!b?.id);await Promise.all(T.map(async b=>{const y=await F("attribute",999,b);return await q(A,y,"s_attribute")}))}}else await Xe(e,p,w,E,999);if(p==="the_element_default"&&w==="default"&&r){const T=(await I())?.userId;await Xe(r,"the_attribute_value","value",E,T)}return"x"})))),await N.SyncDataOnline(),L.successfullToast("The element updated successfully"),e}else{const o=s;n?.void&&o.unshift({name:"elementContent",type:"string",value:""});const r=await F("element",999,n);return await Promise.all(o.map(async l=>{const c=await F("attribute",999,l);return await q(r,c,"s_attribute")})),await N.SyncDataOnline(),L.successfullToast("The element created successfully"),r}}function kr(){const t=document.querySelectorAll(".attribute_single");t?.length&&t.forEach(i=>{i?.remove()});let e=String(Date.now());const n=Pr(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",n)}function Ai(t){document.getElementById(t)?.remove()}async function Mr(){const t=document.getElementById("select_the_attribute");let e=xe.filter(a=>a?.name==t?.value)[0];xe=xe.filter(a=>a?.name!=t?.value),fe.push(e);const n=t.closest(".attribute_single");n?.id&&Ai(n.id),Xn([])}function Ir(t){let e=fe.filter(n=>n.name==t)[0];fe=fe.filter(n=>n.name!=t),xe.push(e),Js(xe,"name","string"),Xn([])}function Xn(t){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(fe.length>0)fe.forEach(a=>{a.name!=="id"&&a.name!=="className"&&(e+=`<li>${a.name} (${a.type})`,e+=`<a onclick="removeSelectedAttribute('${a.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const a=t?.filter(s=>s?.division!=="inline"&&s.name!=="id"&&s.name!=="className"&&s.name!=="elementContent");fe=a;const i=new Set(fe.map(s=>s.name));xe=xe.filter(s=>!i?.has(s?.name)),a.map(function(s){e+=`<li>${s.name} (${s.type}) `,e+=`<a onclick="removeSelectedAttribute('${s.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const n=document.getElementById("element_attributes_entry");n&&(n.innerHTML=e)}function Pr(t){let e='<select id="select_the_attribute" class="form-select">';return xe.forEach(n=>{e+=`<option value="${n?.name}">${n?.name}</option>`}),e+="</select>",`
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
  `}async function $r(t,e){if(t.preventDefault(),!(await Ee.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(t.target),i=Object.fromEntries(a);console.log(i,"update formValues");const s=await Li(a,e);await Zn("update-element-dialog");const o=await ln();if(s){const r=document.getElementById("created-elements");r?!o||o.trim()===""?r.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:r.innerHTML=o||"":console.error("Widget list container not found in the DOM.")}return s}class Br{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const n=await oa(e);this.singleElement=n,this.createElemenModaltHTML=this.getHtml(),n&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await Xn(this.singleElement.attributes))}getHtml(){return window.updateNewElement=$r,window.closeElementModal=Zn,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
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
      </dialog>`}}class jr{createElemenModaltHTML;constructor(){window._dragService=Qo,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=kr,window.cancelAttributeRow=Ai,window.addAttribute=Mr,window.removeSelectedAttribute=Ir,window.closeElementModal=Zn,`
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
    `}}async function ge(t){document.getElementById(t).showModal()}async function ve(t){const e=document.getElementById(t);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function Wi(t,e){t?.stopPropagation();const n=document.getElementById(`menu-${e}`),a=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),n&&!a&&n.classList.add("show")}async function Cc(t){new jr,await ge(t)}async function Lc(t,e,n){t.stopPropagation(),console.log("modalId",e),Wi(t,Number(n)),new Br(n)}async function Ac(t,e){Wi(t,e),confirm("Are you sure you want to delete the element?")&&(await Le(e),L.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const a=await ln(),i=document.getElementById("created-elements");i?!a||a.trim()===""?i.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:i.innerHTML=a||"":console.error("Elements list container not found in the DOM.")}async function ea(){At(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(e),ge("save-widget-dialog"),new Promise((n,a)=>{const i=e.querySelector("#save-widget-form");i.onsubmit=async o=>{o.preventDefault();try{const r=new FormData(i),c=Object.fromEntries(r).widgetName,u=o.target;if(!c?.trim()){const d=u.querySelector("#widgetName");d?.focus(),d.style.border="2px solid red",d.style.outline="none",d.addEventListener("input",()=>{d.style.border=""});return}await xi(o,c),ve("save-widget-dialog"),n("Widget saved successfully")}catch(r){console.error("Error saving widget:",r),a("Error saving widget")}};const s=e.querySelector("button[type='button']");s.onclick=()=>{ve("save-widget-dialog"),n("Widget saving canceled")}})}async function xi(t,e){t.preventDefault();try{L.infoMessageToast("Saving Widget...",0),await De();const n=document.getElementById("save-widget-dialog"),a=n?.querySelector('button[type="submit"]');a.textContent="Saving";const i=n?.querySelector("input"),s=n?.querySelectorAll("button");s&&s.forEach(d=>{d.disabled=!0}),i&&(i.disabled=!0),await it(),V.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async d=>{if(d.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[d.id]){const g=await Ae(d,"div.mftsccs-marking-element");f.editedWidgets[d.id].html=g.innerHTML}});const r=await ki();f.staticWidgetTree.html=r;const l=await f.saveWidget(e),c=await X(l.id);ve("save-widget-dialog"),en(),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget saved successfully!"),await D.renderSavedWidgets(),Ue(t,c.id);return}catch(n){document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Error in saving widget"),Yn(n,"There is an error on saving widget")}}async function ta(t,e,n){const a=document.getElementById("update-publish-widget-btn");try{const i=document.getElementById("update-widget-btn");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating...",L.infoMessageToast("Updating Widget...",0)),await it(),V.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async c=>{if(c.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[c.id]){const u=await Ae(c,"div.mftsccs-marking-element");f.editedWidgets[c.id].html=u.innerHTML}});const o=await Or();f.staticWidgetTree.html=o,await f.updateWidget(),en(),we(),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget Updated Successfully"),await D.renderSavedWidgets(),await D.renderBoomWidgets();const l=document.getElementById("widget-builder");l.textContent="Widget Builder Panel",await Ue(t,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),n&&n===!0&&await f.publish();return}catch(i){document.querySelector(".infoMessageToast")?.remove();const o=document.getElementById("update-widget-btn");o&&(o.classList.remove("disabled"),o.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),i instanceof Error&&L.errorToast(i.message)}finally{a&&a.classList.remove("disabled")}}async function qe(t,e){const n=document.querySelector(".widgetStyle");n.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(c=>{c.textContent=""});const i=document.getElementById("publish-widget");i&&(i.style.display="none",i.disabled=!0);const s=document.querySelector(".content-target"),o=window.location.href,l=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(s){let c=!1;c=await f.hasWidgetChanged(Number(l));const d=document.getElementById("preview-btn").classList.value.includes("active");if((t?.target?.id==="preview-btn"||t?.target?.id==="save-widget-form"||t?.target?.id==="update-widget-btn"||t?.target?.id==="form-folder-modal"||t?.target?.id==="data-file-id")&&(c=!1),d&&(c=!1),c&&!e){await Lt("Do you want to save changes?")&&(o.includes("?page-id=")?l?await Qn(t,Number(l)):await Gn(t):l?await ta(t,Number(l)):await ea()),en();const p=document.getElementById("preview-btn");p.classList.remove("active"),p.removeAttribute("data-widgetid")}await bo()}s.innerHTML="",Ei(),t&&!e&&window.history.pushState({},"","/")}let wn="";async function Dr(t){const e=document.getElementById("preview-btn"),n=e.classList.value.includes("active");let a=t.target.getAttribute("data-widgetid");a&&history.pushState({},"",`?widget-id=${a}`);const i=document.querySelector(".content-target"),s=document.querySelector(".midContent .content"),o={...f.widgetTree},r=document.getElementById("undo-btn"),l=document.getElementById("redo-btn"),c=document.getElementById("ai-prompt-btn"),u=document.getElementById("widget-prompt-modal"),d=document.getElementById("widget-prompt-tab"),g=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(n){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,c.style.display="flex",wn&&wn!=="none"?(d.classList.add("d-none"),u.classList.remove("d-none"),u.classList.add("d-flex")):(d?.classList.remove("d-none"),u&&u.classList.add("d-none")),e.classList.remove("active"),r.classList.remove("d-none"),l.classList.remove("d-none"),m&&(m.style.display="block"),g&&(g.style.display="none"),i&&(i.style.width="100%",i.style.maxWidth="",i.style.margin="0 auto",i.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),i.classList.add("mode-desktop"));const p=Fn(),h=await Ce(f.widgetTree,p,!0,void 0,!0);te(f.widgetTree,!1,h,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),s.classList.remove("preview"),me(),we(),mt.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,c.style.display="none",u&&(wn=window.getComputedStyle(u).display,u.classList.add("d-none")),d&&d.classList.add("d-none");const p=document.getElementById("select-box"),h=document.getElementById("element-info");p.style.display="none",h.style.display="none",r.classList.add("d-none"),l.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none");const w=await Ce(f.widgetTree,i,!0,void 0,!1);te(o,!1,w),document.getElementById("column-left").classList.add("d-none");const A=document.createElement("script");A.setAttribute("type","text/javascript"),A.innerHTML=o?.js,i.appendChild(A),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),mt.disableHeader(),ut.closeCodeView(),s.classList.add("preview");const y=document.querySelector("header.wico_top-header");y.style.display="none"}return"PREVIEW WIDGET"}async function Ae(t,e){return t.querySelectorAll(e).forEach(a=>{for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.remove()}),t}async function Nr(t,e){t.preventDefault();try{const n=new FormData(t.target),i=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');i.textContent="Converting...";const s=t.target;for(let o=0,r=s.length;o<r;++o)s[o].disabled=!0;await Hr(n);for(let o=0,r=s.length;o<r;++o)s[o].disabled=!1;return await ve(e),"completed conversion"}catch{L.errorToast("html conversion failed"),await ve(e)}}async function Hr(t){const e=Object.fromEntries(t),n=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,a=await Ds(n,e?.cssCode?.toString(),e?.jsCode.toString()),s=(await I())?.token,r=(await Bs(a?.id,s))?.id,{html:l,css:c,js:u}=await Ms(r,s);await Vt(r);const d=document.querySelector(".content-target");d.innerHTML=l;const g=document.querySelector('.cm-content[data-language="css"]');g.textContent=c;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=u,"converted widget"}async function qr(t){return new vr().init(),ge(t),"opened convert HTML to Widget!"}async function nt(t,e){return new Promise(async(n,a)=>{try{let i=new J;i.composition=t,i.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function","the_widget_dependency"],i.inpage=100;let s=new J;s.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],s.inpage=100;const r=await be([i,s],e);n(r)}catch(i){console.error("error",i),i?.status===401&&ke(),a(i)}})}async function Or(){V.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target"),e=t.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(o=>{o.classList.replace("edited-widget-container","added-widget-container")});const n=await Ae(t,"div.mftsccs-marking-element");return t?.querySelector("#widget-details")?.remove(),(t?.querySelectorAll(".mftsccs-marking-rendered")).forEach(o=>{o.remove()}),n.innerHTML.trim()}async function ki(){V.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target"),e=await Ae(t,"div.mftsccs-marking-element");return t?.querySelector(".widget_selected")?.classList.remove("widget_selected"),t?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function Ze(){const t=document.querySelector(".content-target");t?.querySelector("#widget-details")?.remove();const n=await Ae(t,"div.mftsccs-marking-element");return t?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n.innerHTML.trim()}async function ft(){V.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target")?.cloneNode(!0);t?.querySelector("#widget-details")?.remove();const a=(await Ae(t,"div.mftsccs-marking-element")).innerHTML.trim();return V.staticElement?.setAttribute("draggable","true"),a}async function jt(t){V.staticElement?.removeAttribute("draggable");const e=document.getElementById(t)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const i=(await Ae(e,"div.mftsccs-marking-element")).innerHTML.trim();return V.staticElement?.setAttribute("draggable","true"),i}const Fr=["image/jpeg","image/jpg","image/png","image/webp"],Vr=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],Mi=async t=>{try{const e=new FormData;let n;if(Vr.includes(t.type))e.append("file",t,t.name),n=await Ur(e);else if(Fr.includes(t.type))e.append("image",t,t.name),n=await Rr(e);else return{message:"Invalid File Format",success:!1};return n?.data?{message:"Upload Success",success:!0,url:n.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},Rr=async(t,e="")=>{try{const n=await fetch(z.boomURL+"/api/Image/UploadImage",{method:"POST",body:t,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const a=n.headers.get("content-type");a&&a.includes("text/plain")&&console.info(n?.text());const i=await n?.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}},Ur=async(t,e="")=>{try{const n=await fetch(z.boomURL+"/api/Image/UploadFile",{method:"POST",body:t,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const a=n.headers.get("content-type");a&&a.includes("text/plain")&&console.info(n.text());const i=await n.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}};async function zr(t=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const n=await Va("public_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_public_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let s=new P;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new P;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let r=new P;r.typeConnection="the_public_widget_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,s,o];let l=new P;if(l.conceptIds=[n.id],l.outputFormat=ue,l.name="top",l.freeschemaQueries=[r],t!=""){let c=new Fe;c.name="filterName",c.search=t,c.type="the_name",c.operateon="widgetName",c.logicoperator="like";let u=new Fe;u.name="filterPublicName",u.search=t,u.type="the_public_name",u.operateon="widgetPName",u.logicoperator="like",l.filters=[c,u],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(c=>{de(l,"").subscribe(u=>{c(u)})})}catch(e){throw e}}async function Jr(t=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const n=await Va("folder_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_folder_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let s=new P;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new P;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let r=new P;r.typeConnection="the_folder_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,s,o];let l=new P;if(l.conceptIds=[n.id],l.outputFormat=ue,l.name="top",l.freeschemaQueries=[r],t!=""){let c=new Fe;c.name="filterName",c.search=t,c.type="the_name",c.operateon="widgetName",c.logicoperator="like";let u=new Fe;u.name="filterFolderName",u.search=t,u.type="the_folder_name",u.operateon="widgetPName",u.logicoperator="like",l.filters=[c,u],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(c=>{de(l,"").subscribe(u=>{c(u)})})}catch(e){throw e}}class at{static staticElementList}async function Gr(t,e){const n=t?.target?.value,a=await I(),i=a?.userId,s=a?.token,o=await X(e),c=(await nt(e,s))?.data?.the_widget?.the_widget_before_render?.[0]?.id;c&&await Le(c);const u=await ee("before_render",n,!1,i,4,999);await q(o,u,"before_render"),await N.SyncDataOnline(),new _i().before_render()}async function Qr(t,e){console.log("updateWidgetUpdate event",t),console.log("widgetId",e)}async function Kr(t,e){const n=t?.target?.value,a=await I(),i=a?.userId,s=a?.token,o=await X(e),c=(await nt(e,s))?.data?.the_widget?.the_widget_after_render?.[0]?.id;c&&await Le(c);const u=await ee("after_render",n,!1,i,4,999);await q(o,u,"after_render"),await N.SyncDataOnline();const g=document.getElementById("mountInput")?.value,p=document.getElementById("mountChildWidgetsInput")?.value,h=new bt;h.componentDidMountFunction=g,h.addEventFunction=n,h.mountChildWidgetsFunction=p;const w=document.querySelector(".content-target"),E=await h.mount(w);console.log("appContentHTML",E)}async function Yr(t,e){const n=t?.target?.value,a=await I(),i=a?.userId,s=a?.token,o=await X(e),c=(await nt(e,s))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;c&&await Le(c);const u=await ee("mount_child",n,!1,i,4,999);await q(o,u,"mount_child"),await N.SyncDataOnline()}class Zr{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=nl,`
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
    `}}class Xr{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return`
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
    `}}async function el(t,e){const n=document.getElementById("documentation-view");await Be(z.documentation_preview_widget,n,{currentWidgetId:e})}let gt,bn="",In,Pn;async function tl(t,e){In=t,e==="preview"?new Xr:new Zr;const n=new P;n.typeConnection="the_widget_documentation",n.name="documentationText",n.selectors=["the_documentation_text"];const a=new P;a.typeConnection="the_widget_s_documentation",a.name="documentationBlank",a.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const i=new P;i.typeConnection="the_documentation_s_json_list",i.name="documentationJSON",i.selectors=["the_json_list_key","the_json_list_value"],a.freeschemaQueries=[i];const s=new P;s.conceptIds=[In],s.freeschemaQueries=[n,a],s.inpage=100,s.outputFormat=ue,await de(s,"").subscribe(async o=>{const r=o?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";r&&(bn=r);const l=o?.[0]?.data?.the_widget?.the_widget_s_documentation;l?.length&&(bn=l?.map(u=>{const d=u?.data?.the_documentation,g=d?.the_documentation_type?.data?.the_type,m=d?.the_documentation_content?.data?.the_content,p=d?.the_documentation_creator_email?.data?.the_creator_email,h=d?.the_documentation_doc_title?.data?.the_doc_title,w=d?.the_documentation_method?.data?.the_method,E=d?.the_documentation_method_url?.data?.the_method_url,A=d?.the_documentation_bearer_token?.data?.the_bearer_token,T=d?.the_documentation_username?.data?.the_username,b=d?.the_documentation_password?.data?.the_password,y=d?.the_documentation_auth_type?.data?.the_auth_type,_=d?.the_documentation_s_json_list,C=d?.the_documentation_api_script?.data?.the_api_script,v=d?.the_documentation_api_body?.data?.the_api_body,S=d?.the_documentation_language?.data?.the_language,W=d?.the_documentation_return?.data?.the_return,x=d?.the_documentation_code_editor?.data?.the_code_editor,M=d?.the_documentation_s_doc_url,$=d?.the_documentation_s_image_url,B=d?.the_documentation_s_video_link;let j={type:g,content:m,creatorEmail:p,title:h};if(g==="blank")j={...j};else if(g==="api"){const G=[];_?.length&&_?.forEach(Q=>{G.push({key:Q?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:Q?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),j={...j,method:w,methodURL:E,authType:y,username:T,password:b,bearerToken:A,json:G,script:C,body:v}}else g==="function"&&(j={...j,language:S,return:W,codeEditor:x});const R=[],ne=[],ie=[];return $?.length&&$?.forEach(G=>{R.push(G?.data?.the_image_url)}),B?.length&&B?.forEach(G=>{ne.push(G?.data?.the_video_link)}),M?.length&&M?.forEach(G=>{ie.push(G.data?.the_doc_url)}),j={...j,imageList:R,linkList:ie,videoList:ne},j})),Pn=o?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&al(r)}),e==="preview"?(await ge("widget-documentation-preview-modal"),el(bn,t)):await ge("widget-documentation-modal")}async function nl(){if(gt){const t=gt.getData(),e=await U(In),a=(await I())?.userId;if(Pn)await Xe(Pn,"the_documentation_text","text",t,a),await N.SyncDataOnline();else{const i=await F("documentation",a,{text:t});await K(e,i,"documentation"),await N.SyncDataOnline()}L.successfullToast("Documentation is saved."),gt.setData(t)}else console.error("Editor not initialized"),L.errorToast("Documentation couldn't saved.")}function al(t){const e=document.querySelector("#documentation-editor");e&&ws.create(e,{licenseKey:"GPL"}).then(n=>{gt=n;const a=t;gt.setData(a)}).catch(n=>{console.error("Error initializing CKEditor:",n)})}class il{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",n=>{if(n.target.matches(".btn-tour")){const a=n.target.dataset.tourStatus;this.startTour(a)}})}startTour(e){const n=new ps.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),a=[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Next",action:n.next}];n.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:n.complete},{text:"Next",classes:"next-button",action:()=>{n.next()}}]}),n.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".wico_header-section",on:"bottom-start"},buttons:a}),n.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:a}),n.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:a}),n.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const i=document.querySelector("#tab-container .tab button:nth-child(2)"),s=new Event("click",{bubbles:!0,cancelable:!0});return i.dispatchEvent(s),".right-aside"},on:"left"},buttons:a}),n.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:a}),n.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:a}),n.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Finish",action:()=>{n.complete(),e||this.updateTourStatus()}}]}),n.start()}async updateTourStatus(){this.closeTour();const e=await I(),n=e?.userId,a=e?.entityId,i=await U(a),s=new Na;try{await s.initialize();const o=await s.MakeTheInstanceConceptLocal("the_tour_status","true",!1,n,4,999);await s.CreateConnectionBetweenEntityLocal(i,o,"tour_status"),await s.commitTransaction()}catch{s.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}async function sl(t){console.log("event",t),console.log("event.target",t.target);const e=t?.target?.getAttribute("data-pubwidid");console.log("widgetId -->",e);const n=prompt("What would you like to name this forked widget?");if(!n||!n.trim())return;const a=Number(t.target.dataset.pubwidid);if(a){L.infoMessageToast("Forking widget...",0);try{const i=document.querySelector(".infoMessageToast"),s=await re(a);f.widgetTree=s;const o=await f.saveWidget(n),r=await X(o.id);console.log("forkedWidget",r);const l=await U(e);await K(l,o,"s_fork"),await N.SyncDataOnline(),await D.renderSavedWidgets(),await D.renderBoomWidgets(),i?.remove(),L.successfullToast("Widget forked cuccessfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Saving Failed"),new Error("Saving Failed")}}}class ol{_layoutWidgetHTMLService=new fi;_pagesHTMLService=new ni;_projectsService=new Ci;_projectsHTMLService=new Ti;_pagesService=new Kn;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await Ee.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,n={openRenameWidgetModal:fl,renameWidget:Pi,loadWidget:Ue,deleteWidget:ul,postWidget:ml,forkWidget:sl,saveFromPublic:D.saveFromPublic,removeFromTemplate:D.removeFromTemplate,downloadPage:gr,downloadWebpage:dr,updateWidgetMount:Gr,updateWidgetUpdate:Qr,updateWidgetEvents:Kr,updateMountChildWidgets:Yr,navbarFunctions:_t,DeleteConceptById:Le,uploadAssetsFile:yl,removeAssetFile:wl,clearSearch:bl,toggleClearButton:$i,toggleDropdown:rl,openDocumentationModal:tl,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:a=>this.searchWidgets(a,"#saved-widget-list-container"),searchElements:a=>this.searchWidgets(a,"#created-elements"),searchPublicWidgets:a=>this.searchPublicWidgets(a),searchPages:a=>this.searchWidgets(a,"#saved-page-list-container"),searchProjects:a=>this.searchWidgets(a,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:a=>this.searchWidgets(a),switchLayoutType:a=>{const i=a.target,s=document.getElementById("fslayout-template-container"),o=document.getElementById("fslayout-list-container");i.value==="custom"?(o?.style.setProperty("display","flex"),s?.style.setProperty("display","none")):(o?.style.setProperty("display","none"),s?.style.setProperty("display","flex"))}};Object.assign(e,n)}async setupAssetListener(){const e=await I(),n=new P;n.typeConnection="the_entity_s_asset",n.name="itemname";const a=new P;a.conceptIds=[e.entityId],a.freeschemaQueries=[n],a.outputFormat=ue,a.inpage=100,de(a,"").subscribe(i=>{const s=i?.[0]?.data?.the_entity?.the_entity_s_asset,o=this.generateAssetHTML(s),r=document.getElementById("assets-library-list-container");r&&(r.innerHTML=o)})}generateAssetHTML(e){return e?.length?e.map(n=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${n.id})" /></span>
                    <img class="asset-img" src="${n?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${n?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,n){n||(n=`#${e.target?.dataset?.id}`||"");const i=e.target.value.toLowerCase();document.querySelectorAll(`${n} li`).forEach(o=>{const r=(o.textContent||"").toLowerCase();o.style.display=r.includes(i)?"":"none"})}searchPublicWidgets(e){const a=e.target.value.toLowerCase();Bn(a).then(i=>{Wn.navbar.setPublicWidgets(i),this.updatePopupMenu("publicWidgets",i)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(n),ln().then(a=>{this._elemensHtml=a;const i=document.getElementById("created-elements");i&&(i.innerHTML=a||"")}),$n().then(a=>{this._savedWidgetsHtml=a;const i=document.getElementById("saved-widget-list-container");i&&(i.innerHTML=a||"")}),Bn().then(a=>{this._publicWidgetsHtml=a;const i=document.getElementById("public-widget-list-container");i&&(i.innerHTML=a||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const n=document.createElement("nav");n.className="sidebar sidebar-collapsed";let a=!0;const i=()=>{a=!a,n.classList.toggle("sidebar-collapsed",a),a||(this.removeSubSidebar(),this.removeActiveClass())};return n.appendChild(this.createSidebarHeader(i)),n.appendChild(this.createSidebarMenu(e.mainItems)),n.appendChild(this.createSection("Widgets")),n.appendChild(this.createSidebarMenu(e.widgetItems)),n.appendChild(this.createSection("Library")),n.appendChild(this.createSidebarMenu(e.libraryItems)),n.appendChild(this.createSection("Configuration")),n.appendChild(this.createSidebarMenu(e.configurationItems)),n}createSidebarHeader(e){const n=document.createElement("div");return n.className="menu-toggle",n.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,n.addEventListener("click",e),n}createSidebarMenu(e){const n=document.createElement("div");return n.className="sidebar-menu",e?.forEach(a=>n.appendChild(this.createMenuItem(a))),n}createMenuItem(e){const n=document.createElement("div");return n.id=e.id,n.onclick=a=>this.handleNavItemClick(a),e.id==="widget-tour"?(n.className="nav-item",n.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,n.onclick=()=>{new il().startTour(this._loginDetailObject?.tourStatus)}):e?.link?n.innerHTML=`
                <router-link href="${e.link}" target="_blank" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(n.className="nav-item",n.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),n}createSection(e){const n=document.createElement("div");return n.className="sidebar-section",n.innerHTML=`<hr /><span class="section-title">${e}</span>`,n}async handleNavItemClick(e){const n=document.querySelector(".sidebar"),a=n?.classList.contains("sidebar-collapsed"),i=e.target.closest(".nav-item"),s=i?.id,o=i?.classList.contains("active"),r=i?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!s||o){this.removeSubSidebar();return}if(a){this.removeSubSidebar(),i?.classList.add("active");const l=await this.createSubSidebarMenu(s,r);if(document.querySelector("#column-left")?.appendChild(l),s==="folderWidgets"){const c=await I(),u=document.getElementById("folder-widget-container");await Be(z.folder_widget,u,{showFiles:!0}).then(d=>{d.dataChange(async g=>{if(g.displayType==="photo"||g.type==="Image"||g.displayType==="widget"||g.type==="widget")await pi(e,g);else{let m=await Se(Number(g),c.token),p=await re(m?m.widgetId:Number(g));await Ue(null,p.id)}})})}if(s==="assets"){const c=document.getElementById("default-list-container");await Be(z.assets_widget,c)}}else n?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,n){if(e=="publicWidgets"){let a=document.querySelector("#public-widget-list-container");a&&(a.innerHTML=n)}if(e=="folderWidgets"){let a=document.querySelector("#folder-widget-container");a&&(a.innerHTML=n)}}async createSubSidebarMenu(e,n){const a=document.createElement("section");if(a.className="sub-sidebar",e==="layout")a.innerHTML=`
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
        </li>`,i="",s="";switch(e){case"elements":a=this._elemensHtml||a,i=this.generateSearchHtml("element-search","Search elements...","searchElements");break;case"savedWidgets":this._savedWidgetsHtml&&(a=this._savedWidgetsHtml),i=this.generateSearchHtml("myWidget-search","Search widgets...","searchMyWidgets");break;case"publicWidgets":a=this._publicWidgetsHtml||a,i=this.generateSearchHtml("publicWidget-search","Search public widgets...","searchPublicWidgets");break;case"pages":a=this._pagesHtml||a,i=this.generateSearchHtml("page-search","Search pages...","searchPages"),s=this.createNewHtml("fs-create-page-button",'<img src="./images/icons/add pages.svg" alt="" class="icon" />',"Create New Page");break;case"projects":a=this._projectsHtml||a,i=this.generateSearchHtml("project-search","Search projects...","searchProjects"),s=this.createNewHtml("fs-create-project-button",'<img src="./images/icons/add new projects icon.svg" alt="" class="icon" />',"Create New Project");break;case"layout":a=this._layoutsHtml||a;break;case"assets":a=`
                    <div class="asset-list"> 
                        <ul id="assets-library-list-container">
                            ${this.generateAssetHTML([])}
                        </ul>
                    </div>
                `,i="";break}return`
            <div class="sub-sidebar-content">
                <div class="sub-sidebar-search">${i}${s}</div>
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
                    </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),n.outerHTML}}class Dt{static staticTabName}async function rl(t,e){t.stopPropagation();const n=document.getElementById(`dropdown-menu-${e}`),a=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),n&&!a&&n.classList.add("show")}document.addEventListener("click",t=>{document.querySelectorAll(".dropdown-menu").forEach(n=>{const a=t.target;a&&!n.contains(a)&&!a.closest(".dropdown-icon")&&n.classList.remove("show")})});async function yt(t,e){const n=document.getElementById(e),i=t.target.closest(".accordion-wrapper").querySelector("span");if(n){if(n.style.display==="block"||getComputedStyle(n).display==="block")n.style.display="none",i.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(n.style.display="block",i.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",n.tagName==="FORM"||n.id==="navigator-container"||n.id==="element-attributes"||n.id==="library-css"||n.id==="library-js"||n.id==="general-content"||n.id==="size-content"||n.id==="display-content"||n.id==="typography-content")return}}function ll(t){const e=document.getElementById(t);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function ln(){const t=await Ee.getInstance().getLoginInfo(),e=await Ii();return at.staticElementList=e,Array.isArray(e)?e?.map(a=>{const i=a?.id,s=a?.data?.the_element?.the_element_name?.[0]?.data?.the_name,o=a?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=a?.data?.the_element?.the_element_void?.[0]?.data?.the_void,l=a?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",c=a?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${s}">${t.isAdmin?`<a data-elementid="${i}" data-type="${o}" data-default="${l}" data-void="${r}" data-text="${s}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

        <div class="element-details">
        <img src="${c}" class="element-icon">
        <span>${s}</span>
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
        </a>`:`<a data-elementid="${i}" data-type="${o}" data-default="${l}" data-void="${r}" data-text="${s}" draggable="true" ondragstart="_dragService.onDragStart(event)">
          <!--  -->
          <div class="element-details">
          <img src="${c}" class="element-icon">
          <span>${s}</span>
          </div>
          </a>`}</li>`}).join(""):""}async function Ii(){const t=z?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],n=new Headers;n.append("Content-Type","application/json");const i=await(await fetch(`${t}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:n,body:JSON.stringify(e),redirect:"follow"})).json();return i?.sort((s,o)=>{s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const r=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),l=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return r<l?-1:r>l?1:0}),i}async function $n(){try{const t=await I();if(!t)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=t?.entityId;await De();const n=new Fe;n.type="the_public_widget",n.search="",n.operateon="public",n.name="publicfilter",n.logicoperator="=";const a=new P;a.typeConnection="the_public_widget_s_widget",a.freeschemaQueries=[],a.name="public",a.reverse=!0;const i=new P;i.typeConnection="the_widget_recent",i.name="copywidgets",i.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],i.freeschemaQueries=[a];const s=new P;s.typeConnection="the_entity_s_widget",s.name="mywidgets",s.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],s.freeschemaQueries=[i];const o=new P;return o.conceptIds=[e],o.freeschemaQueries=[s],o.inpage=100,o.outputFormat=ue,await new Promise((l,c)=>{de(o,"").subscribe(async u=>{console.log("widget data pub",u);const d=u?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!d.length)return l(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(d.map(async p=>{const h=p?.data?.the_widget,w=h?.the_widget_name?.data?.the_name,E=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:h?.the_widget_html?.data?.the_html,A=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:h?.the_widget_css?.data?.the_css,T=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:h?.the_widget_js?.data?.the_js,b=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:h?.the_widget_timestamp?.data?.the_timestamp,y=!!h?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:p?.id,name:w,html:E,css:A,js:T,timestamp:b,isPosted:y}}))).map(p=>`
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
              `).join("");l(m)})})}catch(t){console.error("Error in getMyWidgetsList:",t),L.errorToast(t?.message||"An error occurred while fetching widgets"),t?.status===401&&ke()}}async function it(){try{const t=document.getElementById("builder-workarea");if(!t)return;t.innerHTML="",await et(f.widgetTree);const e=await Ce(f.widgetTree,t);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await te(f.widgetTree,!1,e),me(),we()}catch(t){throw new Error(`error loading widget with widget tree ${t.message}`)}}async function La(t){const e=t?JSON.parse(t):"";if(e)try{const n=document.getElementById("builder-workarea");n.innerHTML="";const a=await Ce(e,n),i=document.getElementById("select-box");i.style.display="none";const s=document.getElementById("element-attributes");s.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await te(e,!1,a),me(),we()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function Ue(t,e,n){try{if(t?.preventDefault(),t?.stopPropagation(),_t.collapseNavbar(),await De(),await qe(t),n&&typeof n!="number"||Number.isNaN(n)||e&&typeof e!="number"||Number.isNaN(e)){L.infoMessageToast("Widget id is in different format. Please check and update",4),qe(t);return}history.pushState({},"",`?widget-id=${n||e}`);const a=document.getElementById("preview-btn");a&&a.setAttribute("data-widgetid",e.toString()),cl(),dl(),On(),wi(),await yi();let i=Fn();i.classList.contains("fspage")&&i.classList.remove("fspage");const o=(await I())?.token;let r=null;t&&(r=await Se(e,o));let l=await re(r?r.widgetId:e);const c=document.getElementById("widgetNameValue");c&&l?.name&&(c.value=l?.name);const u=document.getElementById("widget-builder");u&&l?.name&&(u.textContent="Widget Builder Panel: "+l?.name,u.setAttribute("title",`Widget Builder Panel: ${l?.name}`)),await et(l);const d=await Ce(l,i);f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await te(l,!1,d,!0),await co(r?.widgetId??e);const g=document.getElementById("preview-btn");return g.setAttribute("onclick","previewWidget(event)"),g.setAttribute("data-widgetid",`${e}`),g.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),Mn(),D.enableWidgetButtons(),D.initializeWidgetVersions(n||e,l?.version?l.version.toString():"original",l?.timestamp),H.renderActionHistory(),H.updateActionHistories(),me(),we(),Vn(),""}catch(a){console.error(a),L.errorToast(a?.message,4),Mn(),qe(t)}}function cl(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const n=document.getElementById("page-properties");n&&(n.style.display="none");const a=document.querySelector("button[data-tab-id='wico-tab-navigator']"),i=document.querySelector(`button[data-tab-id='${Dt.staticTabName}']`);Dt.staticTabName==="wico-tab-pageInfo"&&i.style.display==="none"?a&&a.click():i?i.click():a&&a.click()}function dl(){document.title="Widget Conceptualizer",wt("description","Widget Conceptualizer"),wt("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection")}async function ul(t,e){t.stopPropagation();try{const n=confirm("Do you want to delete the Widget?");if(await De(),n){L.infoMessageToast("Deleting the widget...",0),await xr(e),await D.renderSavedWidgets();const a=new URLSearchParams(window.location.search).get("widget-id");return a&&parseInt(a)===e&&await qe(t),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(n){document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget Deleted Successfully"),L.errorToast(n.message?n.message:"Failed to delete widget"),console.error("Failed to delete widget:",n)}}async function ml(t,e){t.stopPropagation();const n=document.getElementById("postWidgetModal");n&&n.remove();const a=await I(),i=a?.entityId===101651686||a?.entityId===101279491,s=document.createElement("dialog");s.id="postWidgetModal",s.className="col-md-6 a-dialog",s.innerHTML=`
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
  `,document.body.appendChild(s);const o=s.querySelector("#pasteArea"),r=s.querySelector("#widgetThumbnail"),l=s.querySelector("#imagePreview img"),c=s.querySelector("#imagePreview"),u=s.querySelector("#pasteText");function d(p){const h=new FileReader;h.onload=w=>{l&&w.target?.result&&(l.src=w.target.result,c.classList.remove("d-none"),u.classList.add("d-none"))},h.readAsDataURL(p)}r?.addEventListener("change",p=>{const h=p.target.files?.[0];h&&d(h)});function g(p){const h=p.clipboardData?.items;if(h){for(let w=0;w<h.length;w++)if(h[w].type.indexOf("image")!==-1){const E=h[w].getAsFile();if(E&&r){const A=new DataTransfer;A.items.add(E),r.files=A.files,d(E);break}}}}o?.addEventListener("paste",p=>g(p)),s.addEventListener("paste",p=>g(p)),s.querySelector("#post-widget-form")?.addEventListener("submit",p=>{p.preventDefault(),gl(e,s)}),s.showModal()}async function gl(t,e){const n=document.querySelector(`#spinner-${t}`),a=e.querySelector('button[type="submit"]');try{a&&(a.disabled=!0,a.textContent="Posting...",L.infoMessageToast("Posting Widget to Public...",0)),n&&n.classList.remove("d-none"),await De();const i=await I(),s=document.getElementById("widgetPublicName").value,o=document.getElementById("widgetDescription").value,r=document.getElementById("widgetThumbnail");if(!r?.files?.length)throw console.error("File validation failed:",{inputExists:!!r,filesLength:r?.files?.length}),new Error("Please provide a thumbnail image");const l=r.files?.[0];if(!l||!r.value)throw new Error("Please provide a thumbnail image");const c=await Mi(l);if(!c.success)throw new Error("Failed to upload thumbnail");const u=await Se(t,i.token);if(u&&(await $e(u.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),L.infoMessageToast("Widget is already public.");return}const d=document.getElementById("postAsTemplate")?.checked;let g=null;if(u)g=await U(u.widgetId);else{const A=await X(t);g=await D.createWidgetCopy(A,i.userId,i.token)}const m=await ee("public_name",s,!1,i.userId,4,999),p=await ee("description",o,!1,i.userId,4,999),h=await ee("thumbnail",c.url||"no attachment",!1,i.userId,4,999);await q(g,p,"description"),await q(g,h,"thumbnail"),await q(g,m,"public_name");const w=await ee("public_widget","",!1,i.userId,4,999);if(await q(w,g,"s_widget"),d){const T=await ee("template_name",s,!1,i.userId,4,999),b=await ee("template_thumbnail",c.url||"no attachment",!1,i.userId,4,999);await q(g,b,"template_thumbnail"),await q(g,T,"template_name");const y=await ee("template_widget","",!1,i.userId,4,999);await q(y,g,"s_widget")}await N.SyncDataOnline(),await D.renderPublicWidgets(),await D.renderSavedWidgets(),d&&await D.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{L.successfullToast(`Widget Posted to Public${d?" and Templates":""}`)},300)}catch(i){console.error("Error posting widget:",i),document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Failed to post widget"),a&&(a.disabled=!1,a.textContent="Post Widget")}finally{n&&n.classList.add("d-none")}}async function Bn(t=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const a=(await zr(t))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],i=await Promise.all(a.map(async r=>{const l=r?.data?.the_widget,u=l?.the_widget_public_name?.data?.the_public_name||`${l?.the_widget_name?.data?.the_name} ${l?.the_widget_version?.data?.the_version>1?"v"+l?.the_widget_version?.data?.the_version:""}`,d=l?.the_widget_description?.data?.the_description,g=l?.the_widget_thumbnail?.data?.the_thumbnail,m=l?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:u,timestamp:m,description:d,thumbnail:g}}));return i?.length?(await Promise.all(i?.map(async r=>{const c=(await X(r.id)).userId===e.userId,u=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
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
                ${c?`
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
              ${c?`
                <li class="d-flex align-items-center justify-content-between delete-icon" data-pubwidid="${r.id}" onclick="removeMyWidgetFromPublic(event)">
                  <span>Remove</span>
                  <span class="material-symbols-outlined" title="Remove from public" type="button">
                    delete
                  </span>
                </li>`:""}
              <!-- ${c?"":`
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
    `}catch(e){console.error("error",e),e?.status===401&&ke()}}async function pl(t=""){try{const e=await I();if(!e)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const a=(await Jr(t))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[],i=await Promise.all(a.map(async l=>{const c=l?.data?.the_widget,d=c?.the_widget_folder_name?.data?.the_folder_name||`${c?.the_widget_name?.data?.the_name} ${c?.the_widget_version?.data?.the_version>1?"v"+c?.the_widget_version?.data?.the_version:""}`,g=c?.the_widget_description?.data?.the_description,m=c?.the_widget_thumbnail?.data?.the_thumbnail,p=c?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:d,timestamp:p,description:g,thumbnail:m}}));if(!i?.length){const l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",await Be(z.folder_widget,l)),`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `}const o=(await Promise.all(i?.map(async l=>{const u=(await X(l.id)).userId===e.userId,d=l.description?l.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
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
        `})||[])).join(""),r=document.getElementById("folder-widget-container");return r&&(r.style.display="block",r.innerHTML=o),o}catch(e){console.error("error",e),e?.status===401&&ke()}}async function hl(){try{const t=await I();if(!t)return[];const e=await ee("template_widget","",!1,t.userId,4,999);let n=new P;n.typeConnection="the_widget_template_name",n.name="widgetPName";let a=new P;a.typeConnection="the_widget_template_thumbnail",a.name="widgetThumbnail";let i=new P;i.typeConnection="the_template_widget_s_widget",i.name="widgetLevel",i.inpage=10,i.limit=!0,i.freeschemaQueries=[n,a];let s=new P;return s.conceptIds=[e.id],s.outputFormat=ue,s.name="top",s.freeschemaQueries=[i],new Promise(o=>{de(s,"").subscribe(r=>{const l=[];if(r&&r.length>0){const c=r[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const u of c)if(u?.data?.the_widget&&typeof u.data.the_widget=="object"){const d=u.data.the_widget?.the_widget_template_name?.data?.the_template_name,g=u.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(d||g)&&l.push({id:u.id||"",name:d||"Unnamed Template",thumbnail:g||""})}}o(l)})})}catch(t){return console.error("Error fetching templates:",t),[]}}async function fl(t,e){t.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const a=document.createElement("dialog");a.setAttribute("id","rename-widget-dialog"),a.classList.add("col-md-3"),a.innerHTML=`
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
        `;const i=a.querySelector("form");return i&&i.addEventListener("submit",s=>Pi(s,"",e)),document.querySelector("body #app")?.appendChild(a),ge("rename-widget-dialog"),"OPENED"}catch(n){console.error("Failed to rename widget:",n)}}async function Pi(t,e="",n){t.preventDefault();let a="";if(e)a=e;else{const l=new FormData(t?.target);if(a=Object.fromEntries(l)?.widgetName,!a?.trim()){const u=t.target.querySelector("#widgetName");u?.focus(),u.style.border="2px solid red",u.style.outline="none",u.addEventListener("input",()=>{u.style.border=""});return}}const s=(await I())?.userId,o=document.getElementById("rename-widget-dialog"),r=o?.querySelector('button[type="submit"]');r.textContent="Saving";try{await De();const l=await Xe(n,"the_widget_name","name",a,s);await N.SyncDataOnline();const c=o?.querySelector("input"),u=o?.querySelectorAll("button");if(u&&u.forEach(d=>{d.disabled=!0}),c&&(c.disabled=!0),l){D.renderSavedWidgets(),ve("rename-widget-dialog"),L.successfullToast("Widget Renamed Successfully");const d=new URLSearchParams(window.location.search).get("widget-id");if(n===Number(d)){const g=document.getElementById("widget-builder");g.textContent=`Widget Builder Panel: ${a}`}return"widget Renamed successfully"}}catch(l){L.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",l)}}const na=async(t,e,n=!1)=>{const a=await nt(t,e),i=a?.data?.the_widget,s=i?.the_widget_name?.[0]?.data?.the_name,o=i?.the_widget_html?.[0]?.data?.the_html,r=i?.the_widget_clean?.[0]?.data?.the_clean,l=i?.the_widget_css?.[0]?.data?.the_css,c=i?.the_widget_js?.[0]?.data?.the_js,u=i?.the_widget_timestamp?.[0]?.data?.the_timestamp,d=i?.the_widget_widget?.[0].id,g=i?.the_widget_type?.[0]?.data?.the_type,m=i?.the_widget_after_render?.[0]?.data?.the_after_render,p=i?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,h=i?.the_widget_update?.[0]?.data?.the_update,w=i?.the_widget_mount_child?.[0]?.data?.the_mount_child;let E=[];const A=i?.the_widget_s_child;return A?.length&&(E=await Promise.all(A?.map(async b=>{const y=b?.data?.the_child_widget,_=y?.the_child_widget_type?.[0]?.data?.the_type,C=y?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,v=y?.the_child_widget_info?.[0]?.data?.id?y?.the_child_widget_info?.[0]?.data?.id:y?.the_child_widget_parent?.[0]?.data?.the_parent,S=await na(Number(v),e,n);return{id:b?.id,type:_,parent:v,wrapper:C,widget:S}}))),{id:a?.id,name:s,html:o,cleanHtml:r,css:l,js:c,timestamp:u,widgetId:d,typeValue:g,addEvent:m,onMount:p,onUpdate:h,mountChildWidgets:w,childs:E}},yl=async t=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await I(),n=e?.entityId,a=e?.userId,i=await X(n);try{if(t.target?.files?.length>0){const s=[];for(let l=0;l<t.target?.files?.length;l++){const c=t.target?.files[l];if(c.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}s.push(Mi(c))}const o=await Promise.all(s);for(let l=0;l<o.length;l++){const c=o[l];c.success||alert("Some file failed: "+c.message);const u=await ee("the_asset",c.url||"",!1,a,4);await q(i,u,"s_asset")}await N.SyncDataOnline(),L.successfullToast(`Asset${o.length>1?"s":""} uploaded successfully`),new ol().setupAssetListener()}else{alert("No file found");return}}catch(s){throw console.error(s),s}document.getElementById("assets-upload-loader")?.classList.add("d-none")},wl=async(t,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{t.target.closest(".asset-item").remove(),await Le(e),L.successfullToast("Asset deleted successfully")}catch(a){console.error("Error deleting asset:",a),L.errorToast("Failed to delete asset")}};function bl(t){const e=document.getElementById(t);if(e){e.value="";const n=new Event("keyup");e.dispatchEvent(n),$i(t)}}function $i(t){const e=document.getElementById(t),n=document.getElementById(`${t}-clear`);e&&n&&(n.style.display=e.value?"block":"none",n.style.cursor=e.value?"default":"")}async function vl(t,e,n,a){t.preventDefault(),t.stopPropagation();const i=a.replace(/\\n/g,`
`).split(`
`).join("<br>"),s=`
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
  `,o=document.getElementById("widget-detail-modal");o&&o.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",s),ge("widget-detail-modal")}window.viewPublicWidgetDetails=vl;window.openCSSEditor=yt;class Bi{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let n=function(i){if(!i)return;const{wrapper:s}=i,o=s&&s!=="0"?`#${s}`:".content-target";a=a+`${o} { ${i.css} }`,i.children.forEach(r=>{n(r)})},a="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),n(f.widgetTree),this.styleElement.textContent=a}}async getWidgetHtml(e){let n=[];e.forEach(a=>{a.classList.forEach(i=>{n.push(i)})}),this.insertCSS(n)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new oe({doc:"/* Write your CSS here */",extensions:[Ut,zt,gs(),Jt(),oe.lineWrapping,je.tabSize.of(2),je.allowMultipleSelections.of(!0),oe.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Gt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),oe.updateListener.of(async n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateCSS(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const n of e)if(this.editorView){const{state:a,dispatch:i}=this.editorView;i({changes:{from:0,to:a.doc.length,insert:`.${n} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const Aa=async t=>{const e=new Ra,n=El(t);if(Object.keys(n).length>0){const a=await e.validateField(n),i=await jn(a),s=jn(i);return Sl(t,s)}},_l=async t=>{const n=await new Ra().validateField(t);return Object.keys(n).length>0?{status:!1,details:jn(n)}:{status:!0}},El=t=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},n=t?.attributes;if(Array.isArray(n))n.forEach(a=>{const i=Tl(a);switch(a.name){case"name":e.fieldName=i||"";break;case"value":e.value=i||null;break;case"fieldtype":e.fieldType=i?i.trim():null;break;case"pattern":e.pattern=i||null;break;case"datatype":e.dataType=i?i.trim():null;break;case"typeconcept":e.conceptType=i||null;break;case"maxlength":e.maxLength=i?parseInt(i):null;break;case"minlength":e.minLength=i?parseInt(i):null;break;case"max":e.maxValue=i?parseInt(i):null;break;case"min":e.minValue=i?parseInt(i):null;break;case"accept":e.accept=i||null;break;case"file":e.file=i||null;break;case"required":e.required=i===!0;break;case"unique":e.isUnique=i===!0;break}});else throw console.error('attributesData["attributes"] is not an array',t.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},Tl=t=>{switch(t.type){case"boolean":return t.value==="on";case"array":return t.selected||null;case"string":return t.value||null;default:return null}},jn=t=>({datatype:t.dataType,pattern:t.pattern,max:t.maxValue,min:t.minValue,minlength:t.minLength,maxlength:t.maxLength,accept:t.accept,file:t.file,required:t.required,unique:t.unique}),Sl=(t,e)=>(t.attributes.forEach(n=>{const a=e[n.name];n.validationStatus=a?"invalid":"valid",n.validationErrorMessage=a||""}),t),Cl=t=>({fieldName:t.getAttribute("name"),value:t instanceof HTMLInputElement?t.value:null,fieldType:t.getAttribute("fieldtype"),dataType:t.getAttribute("datatype"),pattern:t.getAttribute("pattern"),conceptType:t.getAttribute("typeconcept"),maxLength:t.getAttribute("maxlength"),minLength:t.getAttribute("minlength"),minValue:t.getAttribute("min"),maxValue:t.getAttribute("max"),file:t.hasAttribute("file"),accept:t.hasAttribute("accept"),required:t.hasAttribute("required"),isUnique:t.getAttribute("unique")==="on"});async function ji(t){let e=t.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",t.parentNode?.insertBefore(e,t.nextSibling)),e.innerHTML="";const n=Cl(t),a=await _l(n);try{if(a.status)t.classList.remove("invalid"),t.classList.add("valid");else if(t.classList.remove("valid"),t.classList.add("invalid"),a.details&&typeof a.details=="object"){const i=document.createElement("span");i.className="error-message",i.style.color="red",i.style.fontSize="12px";const s=Object.values(a.details).filter(Boolean);i.innerHTML=s.join("<br>"),e.appendChild(i)}}catch(i){console.error("Validation error:",i);const s=document.createElement("span");s.className="error-message",s.style.color="red",s.textContent="Validation failed. Please try again.",e.appendChild(s)}}var Qe=(t=>(t.STYLE="style",t.BOOLEAN="boolean",t.FORM="form",t.SPECIAL="special",t))(Qe||{});const Ll=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),aa=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],ia=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],Nt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Al=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Ht=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],ye=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),Wl=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),xl=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),kl=new Set(["elementContent","className","id"]),Di=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function ct(t){return t.toLowerCase()==="type"?!0:Di.has(t.toLowerCase())}function St(t,e,n){const a=t.toLowerCase();if(a==="type"){const i=n?Ll.get(n.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):i}return Di.get(a)||[]}class cn{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=bs}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,n){Dt.staticTabName=n;let a,i,s=document.getElementsByClassName("tabcontent");for(a=0;a<s.length;a++)s[a].style.display="none";for(i=document.getElementsByClassName("tablinks"),a=0;a<i.length;a++)i[a].className=i[a].className.replace(" active","");const o=document.getElementById(n);o.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let n=this;for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(s){const o=e[i].getAttribute("data-tab-id");n.openTab(s,o)});const a=document.querySelector(`button[data-tab-id='${Dt.staticTabName}']`);a?a.click():e[0].click()}sortAttributes(e){return e.sort((n,a)=>{if(!n?.name||!a?.name)return 0;const i=this.findAttributeInMap(n.name),s=this.findAttributeInMap(a.name);if(i==="Other"&&s!=="Other")return 1;if(i!=="Other"&&s==="Other")return-1;if(i===s){const o=this.categoryMap[i].findIndex(l=>l.toLowerCase()===n.name.toLowerCase()),r=this.categoryMap[s].findIndex(l=>l.toLowerCase()===a.name.toLowerCase());return o-r}return 0})}getCategoryForAttribute(e){if(!e)return"General";const n=e.toLowerCase();for(const[a,i]of Object.entries(this.categoryMap))if(a!=="Other"&&i.some(s=>s.toLowerCase()===n))return a;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,n){setTimeout(()=>{const a=document.getElementById("element-attributes");if(!a){this.setAttributes(e,n);return}a.innerHTML="";const i=document.createElement("div");if(i.className="row",a.appendChild(i),!e){i.innerHTML="";return}(async()=>await Aa(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const o=this.sortAttributes(e.attributes),r={};o.forEach(c=>{const u=this.getCategoryForAttribute(c.name);r[u]||(r[u]=[]),r[u].push(c)});let l="";Object.entries(r).forEach(([c,u])=>{const d=u.map(m=>{let p="";if(m.name.toLowerCase()==="float")p=`
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
                `;else if(m.name==="Alignment"){const h=e?.tag?.toLowerCase();aa.includes(h)&&(p=`
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
                  `)}else if(m.name==="Font Family"){const h=e?.tag?.toLowerCase();if(ia.includes(h)&&ct(m.name)){const E=St(m.name,m.value,e?.tag).map(A=>{const T=A.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${A}" ${T?"selected":""}>${A}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${E}
                      </select>
                    `}}else if(m.name==="Font Weight"){const h=e?.tag?.toLowerCase();if(Nt.includes(h)&&ct(m.name)){const E=St(m.name,m.value,e?.tag).map(A=>{const T=A.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${A}" ${T?"selected":""}>${A}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select ${m.name}</option>
                        ${E}
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
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const h=(m.value||"0 0 0 0").split(" ").map(b=>b.trim()).map(b=>/^\d+$/.test(b)?`${b}px`:b);for(;h.length<4;)h.push("0px");const[w,E,A,T]=h;return m.name==="Margin"?`
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
                                  value: [this.value, '${E}', '${A}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge right" data-value="${E}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${E}</span>
                            <input type="text"
                              class="edge-input"
                              value="${E}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${A}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge bottom" data-value="${A}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${A}</span>
                            <input type="text"
                              class="edge-input"
                              value="${A}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${E}', this.value, '${T}'].join(' '),
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
                                  value: ['${w}', '${E}', '${A}', this.value].join(' '),
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
                                  value: [this.value, '${E}', '${A}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge right" data-value="${E}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${E}</span>
                            <input type="text"
                              class="edge-input"
                              value="${E}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${A}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge bottom" data-value="${A}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${A}</span>
                            <input type="text"
                              class="edge-input"
                              value="${A}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', '${E}', this.value, '${T}'].join(' '),
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
                                  value: ['${w}', '${E}', '${A}', this.value].join(' '),
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
                    >${m?.value||""}</textarea>`;else if(ct(m.name)){const w=St(m.name,m.value,e?.tag).map(E=>`<option value="${E}" ${E===m?.value?"selected":""}>${E}</option>`).join("");p=`
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
                  </div>`;else if(m?.type==="boolean")p=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${n}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(ct(m.name)){const w=St(m.name,m.value,e?.tag).map(E=>{const A=E.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${E}" ${A?"selected":""}>${E}</option>`}).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else{const w=(m?.value?.split(",")||[]).map(E=>`<option value="${E}" ${E===m?.selected||E===m?.value?"selected":""}>${E}</option>`).join("");p=`
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
              `}).join(""),g=c==="General"||c==="Display"||c==="Typography"||c==="Size"||c==="Spacing"||c==="Borders"||c==="Colors"||c==="Other";l+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${c.toLowerCase()}-content')">
                  <div class="category-title">${c}</div>
                  <span class="material-symbols-outlined">${g?"do_not_disturb_on":"add_circle"}</span>
                </div>
                <div class="category-content" id="${c.toLowerCase()}-content" style="display: ${g?"block":"none"}" data-category-state="${g?"open":"closed"}">
                  <div class="row">
                    ${d}
                  </div>
                </div>
              </div>
            `}),i.innerHTML=l}}),Wt()},0)}setAttributesForMultipleElements(e){const n=async()=>await Aa(e);if(!e){const i=document.getElementById("element-attributes").querySelector(".row");i.innerHTML="";return}n().then(()=>{if(e?.attributes&&e?.attributes?.length){const a={};e.attributes.forEach(o=>{const r=this.getCategoryForAttribute(o.name);a[r]||(a[r]=[]),a[r].push(o)});let i="";Object.entries(a).forEach(([o,r])=>{if(r.length){const l=r.map(u=>{let d="";return u?.type==="string"?d=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||""}">`:u?.type==="color"?d=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||"#000000"}">`:u?.type==="boolean"?d=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${u?.value&&u?.value!=="false"?"checked":""}>`:u?.type==="array"&&(d=`
                  <select class="form-select" onchange="updateMultipleElementAttribute(event)">
                    ${u?.value?.split(",")?.map(p=>`<option value="${p}" ${p===u?.selected?"selected":""}>${p}</option>`).join("")}
                  </select>
                `),u.validationStatus==="invalid"&&(d+=`
                  <span style="color:red;font-size:12px;">${u.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${u.name}</div>
                    <div class="col-7">${d}</div>
                  </div>
                </div>
              `}).join(""),c=o==="General"||o==="Display"||o==="Typography"||o==="Size"||o==="Spacing"||o==="Borders"||o==="Colors";i+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${o.toLowerCase()}-content')">
                  <div class="category-title">${o}</div>
                  <span class="material-symbols-outlined">${c?"expand_less":"expand_more"}</span>
                </div>
                <div class="category-content" id="${o.toLowerCase()}-content" style="display: ${c?"block":"none"}" data-category-state="${c?"open":"closed"}">
                  <div class="row">
                    ${l}
                  </div>
                </div>
              </div>
            `}});const s=document.getElementById("element-attributes");s&&(s.innerHTML=i)}})}async getHtml(){window.updateWidgetTypeValue=qi,window.toggleDisplay=yt,window.updateElementAttribute=dn,window.updateMultipleElementAttribute=Vi,window.handlePageProperties=Fi,window.updateCSSLibrary=ze,window.updateJSLibrary=Je,window.addJSLibrary=zi,window.addCSSLibrary=Ui,window.openRenameCustomFunction=ut.openRenameCustomFunction,window.deleteCustomFunction=ut.deleteCustomFunction,setTimeout(async()=>{ut.initializeCodeBlock();const i=new Bi,s=document.getElementById("css-editor-container");s.innerHTML=await i.getHtml(),await i.initializeEditor(),ra()},0),setTimeout(async()=>{await new li().initializeEditor()},0),setTimeout(async()=>{const i=new ci,s=document.getElementById("js-editor-container");s.innerHTML=await i.getHtml(),await i.initializeEditor()},0),setTimeout(async()=>{await new ae("onmount-editor-split").initializeEditor(),await new ae("onupdate-editor-split").initializeEditor(),await new ae("addevents-editor-split").initializeEditor(),await new ae("mountchildwidgets-editor-split").initializeEditor(),await new ae("widgetDependencies-editor-split").initializeEditor();const c=document.getElementById("publish-widget");c&&c.addEventListener("click",async u=>{u.preventDefault();try{await f.publish()}catch(d){console.error("error publishing widget",d),d instanceof Error&&L.errorToast(d.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let n="",a="";if(this.the_params){const i=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";i&&_e("meta_title",i);const s=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";s&&_e("meta_description",s);const o=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";o&&_e("meta_keywords",o);const r=this.the_params?.data?.the_page_width?.data?.the_width||"";r&&_e("width",r);const l=this.the_params?.data?.the_page_font_size?.data?.the_font_size;l&&_e("font_size",l);const c=this.the_params?.data?.the_page_font_family?.data?.the_font_family;c&&_e("font_family",c);const u=this.the_params?.data?.the_page_type?.data?.the_type;u&&_e("type",u);const d=()=>Array.from({length:13},(p,h)=>12+h).map(p=>{const h=l==p?"selected":"";return`<option value="${p}" ${h}>${p}</option>`}).join(""),g=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(h=>{const w=c==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${w}>${h}</option>`}).join(""),m=()=>["Fluid","Fixed"].map(h=>{const w=u==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${w}>${h}</option>`}).join("");n=`
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
            <textarea name="input-meta_description" id="meta_description" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${s}</textarea>
          </div>
          <div class="my-3 d-flex flex-column gap-2">
            <label for="meta_keywords">Meta Keywords:</label>
            <textarea name="input-meta_keywords" id="meta_keywords" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}">${o}</textarea>
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
              ${d()}
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
    `}}async function sa(t){let e=zn.filter(a=>a.id==t)[0];return!t||t==="null"?void 0:{id:t,attributes:Ko,tag:"div",name:`Layout: ${e?.name}`}}async function Ml(){return{id:1,name:"Global",tag:"div",attributes:xs}}class vn{static editor}function Il(t,e,n){const a=n?.id,i=document.getElementById("editor");i?.setAttribute("wrapper-id",e),i?.setAttribute("element-id",a),i?.setAttribute("element-clicked","true"),vn.editor&&n?.void?vn.editor.setData(t):n?.void||vn.editor?.setData("")}window.showdWidgetProperties=$l;window.widgetSelected=Dl;function Pl(t,e){let n;if(e.data_type=="layout"){const a=zn.filter(l=>l.name==e.data_text)[0],r=new DOMParser().parseFromString(a?.html,"text/html").body.querySelector("div");r.setAttribute("element-info-id",t),n=r.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?n=`<${e?.data_type} element-info-id="${t}">${e?.data_default}</${e?.data_type}>`:n=`<${e?.data_type} element-info-id="${t}">`;return`${n}`}async function $l(t,e){const n=t.target.closest(".added-widget-container"),a=n.id,i=n.getAttribute("data-widgetid");if(i){const T=(await I())?.token,y=(await nt(Number(i),T))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new cn().initializeView();const C=document.getElementById("widgetNameValue");C&&(C.value=y)}const o=(await I())?.userId,r=await Ha(a,o);console.warn("savedWidgetProperties on widget Selected ->",r);let l="";r?.length&&(r?.length>1&&r?.sort((b,y)=>{const _=new Date(b?.created_at).getTime();return new Date(y?.created_at).getTime()-_}),l=r?.[0]?.data?.[a]?.properties?.filter(b=>b.name==="widget-type")?.[0]?.value);const c=document.getElementById("widgetTypeValue");c.setAttribute("data-widgetcontainerid",a),c.setAttribute("data-mainwidgetid",`${e}`),c.value=l;const d=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,h=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,w=document.querySelector(".content-target"),E=new bt;l&&await E.getTypeValueList(l),E.componentDidMountFunction=d,E.addEventFunction=m,E.mountChildWidgetsFunction=h,await E.mount(w)}function Bl(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(a=>{const i=document.querySelector(a);i&&(i.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const n=document.querySelector('.editor-container .cm-content[data-language="javascript"]');n.textContent="/* Write your JavaScript here */"}const Ye=async()=>{const t=document.getElementById("element-info");t.style.display="none"},dt=async t=>{const e=t?.target;let n=e?.tagName;const a=e?.classList?.contains("fslayout-row"),i=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))n="WIDGET",i.classList.add("widget-marker");else if(a)n="Layout Element",i.classList.remove("widget-marker");else if(e?.closest("#widget-details")){n="",i.classList.remove("widget-marker");return}else i.classList.remove("widget-marker");const s=e.getBoundingClientRect(),o=s.left,r=s.top;i.style.display="block",new ResizeObserver(()=>{i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.top=`calc(${r}px)`,i.style.left=`calc(${o}px)`}).observe(e);const c=document.getElementById("element-info_details");c.innerHTML=`<span>${n}</span>`;const u=document.getElementById("select-box"),d=document.getElementById("builder-workarea");d.addEventListener("scroll",wa),d.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");u.style.transition="0.2s ease all";const p=document.getElementById("element-info");m||(p.style.display="block"),p.style.height="0",p.style.width="0"}),d.addEventListener("resize",wa)},Ke=async t=>{t.preventDefault();const e=t.target;ll("navigator-container"),We.publish("page:elementClick",e);const n=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details"))return;const a=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",a);const i=e;V?.previousSelectedStaticElement?.removeAttribute("draggable"),V.staticElement=i,V.previousSelectedStaticElement=V.staticElement,V.staticElement.setAttribute("draggable","true");const s=i.getBoundingClientRect();jl(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),V.staticElement=e;const y=e?.tagName.toLowerCase(),v=at.staticElementList?.filter(S=>{const W=S?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return y===W})?.[0]?.id;dn(t,"",v)}));const r=s.left,l=s.top;_t.resetNavigationBar();const c=e;let u;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?u=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(u=e.closest(".edited-widget-container"));const d=e.classList.contains("added-widget-container");if(u||d){let y="";d?y=e?.id:u&&(y=u?.id);const _=[];let C=0;async function v(W,x){return W.reduce((M,$,B)=>($.wrapper===x&&(M.push($),C=B),$.children&&$.children.length>0&&v($.children,x),M),_)}const S=await v(f?.staticWidgetTree?.children,y);f.selectedStaticWidgetTreeInfo={widgetTree:S[0],isChildWidget:!0,childWidgetIndex:C},await et(S[0]),await te(S[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await et(f?.staticWidgetTree),te(f?.staticWidgetTree,!1);if(c?.id&&(f.updatedWidgets[c.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const y=document.getElementById("widgetType");y&&(y.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const g=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");g&&(!g?.style?.display||g?.style?.display==="none")&&m&&(g.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(y=>y.remove());let h=!1;if(t instanceof KeyboardEvent&&t.ctrlKey){if(c?.classList.contains("added-widget-container")){L.infoMessageToast("Widget can't be selected");return}c?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(_=>{const C=_.parentElement?.classList,v=_?.classList,S=_.firstChild?.classList,W=C&&C.contains("added-widget-container");let M=v&&v.contains("fslayout-row")||S&&S.contains("fslayout-row")?"Layout":_.tagName;if(W||h){h=!0;return}const $=document.createElement("div");$?.classList.add("tag-name"),$.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${M}
        </span>
      `,_?.parentElement?.appendChild($)}),h?(L.infoMessageToast("Widget can't be selected"),c?.classList.toggle("widget_selected"),c?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await Ni());return}const w=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const y=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;w&&y&&(w.value=y)}else w&&(w.value=f?.staticWidgetTree.name);const E=document.getElementById("select-box");E.style.display="block";const A=new ResizeObserver(()=>{E.style.width=e.offsetWidth+"px",E.style.height=e.offsetHeight+"px",E.style.top=`calc(${l}px)`,E.style.left=`calc(${r}px)`}),T=document.getElementById("publishWidgetBtnContainer");if(T){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(T.classList.remove("d-none"),T.classList.add("d-flex")):(T.classList.remove("d-flex"),T.classList.add("d-none")),console.log("prev selected widget",n,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const y=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,_=y.origin||y.id,C=y.version?y.version.toString():"original";typeof D.initializeWidgetVersions=="function"&&D.initializeWidgetVersions(_,C,y?.timestamp)}catch(y){console.error("Error showing widget versions:",y)}}A.observe(e);const b=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?b.style.display="block":b.style.display="none",(u||d)&&!e.closest(".edited-widget-container")){const _=document.getElementById("element-attributes").querySelector(".row");_.innerHTML="",Zt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await qt(c)};function jl(t){return typeof t.contentEditable<"u"&&eo.includes(t.tagName.toLowerCase())}async function Dl(t){t.preventDefault(),t.stopPropagation()}async function qt(t){let e;if(t?.dataset?.widgetid)return;const n=t?.tagName.toLowerCase(),i=at.staticElementList?.filter(d=>{const g=d?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return n===g}),s=i?.[0]?.id,o=t.classList.contains("fslayout-row"),r=t?.firstChild?.classList?.contains("fslayout-row");if(o||r)e=await sa(s),e?.attributes?.length&&(e.attributes=e?.attributes.map(d=>({...d,selected:"",value:d.name==="class"?"":d.value})));else if(s)e=await Et(i);else if(Ve.includes(n)||vt.includes(n)){const d=Xs.map(g=>{const m=g.name.toLowerCase(),p=ye.get(m)||ye.get(g.name);return p?{...g,value:t.style[p.property]||""}:{...g,value:m==="classname"?t.className||"":m==="id"&&t.id||""}});n==="iframe"&&d.push({name:"src",type:"string",value:t.getAttribute("src")||""}),Ve.includes(n)&&d.push({name:"elementContent",type:"string",value:t.textContent||""}),e={tag:n,attributes:d}}e.attributes=e?.attributes?.map(d=>d?.name?(d.value=Gi(t,d.name),d):(console.warn("Found attribute without name:",d),d)).filter(Boolean);let l="";const c=e?.attributes;c?.length&&(l=c?.filter(g=>g?.name==="elementContent")?.[0]?.value,Il(l,t?.id,e),Zt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new cn()?.setAttributes(e,t?.id)}async function Ni(){let t;t=await Ml(),t?.attributes?.length&&(t.attributes=t?.attributes.map(n=>({...n,value:""}))),new cn()?.setAttributesForMultipleElements(t)}const Nl=new Ge;async function Hl(t){return new Promise(async e=>{const n=await Hi(t);e(n)})}async function Hi(t){return new Promise(async e=>{let n=new J;n.composition=t,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],n.inpage=100;let a=new J;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const r=(await be([n,a],""))?.data?.the_element?.the_element_s_attribute?.map(d=>{const g=d?.data?.the_attribute,m=g?.the_attribute_name?.[0]?.data?.the_name,p=g?.the_attribute_type?.[0]?.data?.the_type,h=g?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:p,value:h}}),l=r?.map(d=>{let g;return d?.type==="string"?g='<input type="text" class="form-control" onchange="updateAttribute(event)">':d?.type==="boolean"?g='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':d?.type==="array"&&(g=`
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
        `}).join("");let c,u=setInterval(async()=>{c&&(clearInterval(u),r?.forEach(d=>{d?.type!=="boolean"&&c?.setAttribute(d?.name,"")})),c=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(l)})}async function qi(t){const n=(t?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=n,H.updateActionHistories()}async function ql(t){const e=t.target,n=e.closest(".widget_container"),a=n.getAttribute("data-elementId"),i=e.textContent?.trim(),s=document.querySelectorAll("#element-attributes .attribute-row");for(const o of s)if(o.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const l=o.querySelector("input");if(l&&l.value!==i){l.value=i||"",await dn({target:e,type:"text",value:i,isDirectEdit:!0},n,a);break}}}async function Ol(t,e,n,a){console.log("updateElementAttributeViaEditor ->",e,n),t?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),t=V.staticElement;let s;const o=t?.tagName.toLowerCase(),l=at.staticElementList?.filter(g=>{const m=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return o===m});s=await Et(l),t?.classList.remove("wb-initial-empty");const c=a?.value,u=a?.attribute,d=V.staticElement;if(d){if(u==="className")d?.setAttribute("class",c);else if(u==="height"){const g=c?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;d.style.height=m}else if(u==="width"){const g=c?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;d.style.width=m}else if(u==="elementContent")if(!d?.childNodes?.length)d.innerHTML=c;else for(let g of d?.childNodes){const m=g;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=c;break}}else{const p=document.createTextNode(c);d.insertBefore(p,d.firstChild);break}}else d?.setAttribute(u,c?.trim());s.attributes=s?.attributes?.map(g=>(g?.name===u&&(g?.type==="array"?g.selected=c:g.value=c),g)),await qt(t)}}async function dn(t,e,n){try{const a=t.target.closest(".category-content"),i=a?.id,s=a?.style.display!=="none",r=document.getElementById("advanced-size")?.style.display==="block",u=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),d=document.querySelector(".margin-control")?.closest(".col-12"),g=document.querySelector(".padding-control")?.closest(".col-12"),m=!d?.classList.contains("hidden"),p=!g?.classList.contains("hidden");e=V.staticElement,e?.classList.remove("wb-initial-empty");const h=e?.tagName?.toLowerCase();let w;const E=e?.classList?.contains("fslayout-row"),A=e?.firstChild?.classList?.contains("fslayout-row");if(E||A)w=await sa(n);else{const S=at.staticElementList?.filter(W=>{const x=W?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return h===x});if(S?.length)w=await Et(S);else if(Ve.includes(h)||vt.includes(h)){const W=t?.target?.value,x=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(x==="className")e.setAttribute("class",W);else if(x==="elementContent"&&Ve.includes(h))e.textContent=W;else if(x==="id")e.id=W;else if(x==="Height"){const M=W?.trim(),$=/^\d+$/.test(M)?`${M}px`:M;e.style.height=$}else if(x==="Width"){const M=W?.trim(),$=/^\d+$/.test(M)?`${M}px`:M;e.style.width=$}else if(x==="Margin"){const $=(W?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.margin=$}else if(x==="Padding"){const $=(W?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.padding=$}else x==="Background Color"?e.style.backgroundColor=W:x==="Float"?e.style.float=W:x==="Color"?e.style.color=W:e?.setAttribute(x,W?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const M=await jt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=M,ce(M)}else{const M=await ft();f.staticWidgetTree.html=M,ce(M)}await qt(e);return}}const T=t?.target?.value,b=t?.target?.type,y=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),_=e,C=_?.getAttribute("isvalidate")==="on";if(C&&_.setAttribute("onchange","applyValidation()"),C&&_?.addEventListener("change",v=>{const S=v.target;ji(S)}),y==="className")_?.setAttribute("class",T);else if(y==="Height"){const v=T?.trim(),S=/^\d+$/.test(v)?`${v}px`:v;_.style.height=S}else if(y==="Width"){const v=T?.trim(),S=/^\d+$/.test(v)?`${v}px`:v;_.style.width=S}else if(y==="Minimum-Height"){const v=T?.trim(),S=/^\d+$/.test(v)?`${v}px`:v;_.style.minHeight=S}else if(y==="Minimum-Width"){const v=T?.trim(),S=/^\d+$/.test(v)?`${v}px`:v;_.style.minWidth=S}else if(y==="Maximum-Height"){const v=T?.trim(),S=/^\d+$/.test(v)?`${v}px`:v;_.style.maxHeight=S}else if(y==="Maximum-Width"){const v=T?.trim(),S=/^\d+$/.test(v)?`${v}px`:v;_.style.maxWidth=S}else if(y==="Margin"){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");_.style.margin=S}else if(y==="Padding"){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");_.style.padding=S}else if(y==="Background Color")_.style.backgroundColor=T;else if(y==="Color")_.style.color=T;else if(y==="Float")_.style.float=T;else if(y==="Alignment")aa.includes(e.tagName.toLowerCase())&&(_.style.textAlign=T);else if(y==="Font Family")ia.includes(e.tagName.toLowerCase())&&(_.style.fontFamily=T);else if(y==="Font Weight")Nt.includes(e.tagName.toLowerCase())&&(_.style.fontWeight=T);else if(y==="Font Size"){if(Nt.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");_.style.fontSize=S}}else if(y==="Opacity")_.style.opacity=T;else if(y==="Text Transform")e.tagName.toLowerCase()!=="img"&&(_.style.textTransform=T);else if(y==="Line Height"){if(Ht.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");_.style.lineHeight=S}}else if(y==="Letter Spacing"){if(Ht.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(W=>/^\d+$/.test(W)?`${W}px`:W).join(" ");_.style.letterSpacing=S}}else if(b==="checkbox"&&!t?.target?.checked)_?.removeAttribute(y),_.value="";else if(y==="elementContent")if(!_?.childNodes?.length)_.innerText=T;else{let v;e?.childNodes?.length&&(v=Array.from(_?.childNodes)?.filter(S=>S.nodeType===3),v?.length&&v.forEach((S,W)=>{W===0?S.nodeValue=T:S.nodeValue=""}))}else y==="align-items"?(_.style.display="flex",_.style.alignItems=T):y==="justify-content"?(_.style.display="flex",_.style.justifyContent=T):y==="text-align"?_.style.textAlign=T:y==="class"?(_.classList.forEach(v=>{v.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||_.classList.remove(v)}),_.classList.add(...T.split(" "))):y&&_?.setAttribute(y,T?.trim());if(w.attributes=w?.attributes?.map(v=>(v?.name===y&&(v?.type==="array"?v.selected=T:v?.type==="boolean"&&!t?.target?.checked?v.value="":v.value=T),v)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const v=await jt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=v,ce(v)}else{const v=await ft();f.staticWidgetTree.html=v,ce(v)}H.updateActionHistories(),await qt(e),setTimeout(()=>{if(i&&s){const x=document.getElementById(i);if(x){x.style.display="block";const M=x.previousElementSibling?.querySelector(".material-symbols-outlined");M&&(M.textContent="do_not_disturb_on")}}if(r){const x=document.getElementById("advanced-size");if(x){x.style.display="block";const M=x.previousElementSibling?.querySelector(".material-symbols-outlined");M&&(M.textContent="expand_less")}}const v=document.querySelector(".spacing-tabs");if(v&&u){const x=v.querySelector(`.${u}-tab`);x&&ca(x,u)}const S=document.querySelector(".margin-control")?.closest(".col-12"),W=document.querySelector(".padding-control")?.closest(".col-12");m?(S?.classList.remove("hidden"),W?.classList.add("hidden")):p&&(S?.classList.add("hidden"),W?.classList.remove("hidden"))},0)}catch(a){console.error("error updating attribute",a.message)}}function Oi(t,e){let n=[];return t.wrapper===e&&n.push(t),Array.isArray(t.children)&&t.children.forEach(a=>{n=n.concat(Oi(a,e))}),n}async function Fl(t){const e=t?.target?.value,n=t?.target?.type,a=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),i=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');a==="className"?i?.setAttribute("class",e):n==="checkbox"&&!t?.target?.checked?i?.removeAttribute(a):a==="elementContent"?i.innerText=e:i?.setAttribute(a,e)}async function oa(t){return new Promise(async e=>{let n=new J;n.composition=t,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],n.inpage=100;let a=new J;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const s=await be([n,a],""),o=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name,r=s?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=s?.data?.the_element?.the_element_void?.[0]?.data?.the_void,c=s?.data?.the_element?.the_element_default?.[0]?.data?.the_default,u=s?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,d=s?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=s?.data?.the_element?.the_element_s_attribute?.map(h=>{const w=h.id,E=h?.data?.the_attribute,A=E?.the_attribute_name?.[0]?.data?.the_name,T=E?.the_attribute_type?.[0]?.data?.the_type,b=E?.the_attribute_value?.[0]?.data?.the_value;return{id:w,name:A,type:T,value:b}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:t,name:o,tag:r,void:l,default:c,icon:u,division:d,attributes:m})})}async function Et(t){const e=t?.[0],n=e.id,a=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,i=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,s=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,o=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,r=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,l=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,u=e?.data?.the_element?.the_element_s_attribute?.map(g=>{const m=g.id,p=g?.data?.the_attribute,h=p?.the_attribute_name?.[0]?.data?.the_name,w=p?.the_attribute_type?.[0]?.data?.the_type,E=p?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:h,type:w,value:E}});return u?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),aa.includes(i.toLowerCase())&&u.push({name:"Alignment",type:"array",value:"",division:"inline"}),ia.includes(i.toLowerCase())&&u.push({name:"Font Family",type:"array",value:"",division:"inline"}),Nt.includes(i.toLowerCase())&&u.push({name:"Font Weight",type:"array",value:"",division:"inline"}),Al.includes(i.toLowerCase())&&u.push({name:"Font Size",type:"string",value:"",division:"inline"}),i.toLowerCase()!=="img"&&u.push({name:"Text Transform",type:"array",value:"",division:"inline"}),Ht.includes(i.toLowerCase())&&u.push({name:"Line Height",type:"string",value:"",division:"inline"}),Ht.includes(i.toLowerCase())&&u.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:n,name:a,tag:i,void:s,default:o,icon:r,division:l,attributes:u}}async function Fi(t){const{id:e,value:n,dataset:{page_id:a}}=t.target;_e(e,n),await Nl.updatePageField(e,n,Number(a))}async function Dn(t){[{key:"meta_title",value:t?.[`the_${k.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:t?.[`the_${k.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:t?.[`the_${k.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:t?.[`the_${k.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:t?.[`the_${k.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:t?.[`the_${k.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:t?.[`the_${k.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(n=>{n.value&&_e(n.key,n.value)})}async function _e(t,e){const n=document.getElementById("fspage-properties")||Vl();let a="";switch(t){case"width":ot(".fspage { width: [^;]+ !important; }"),a=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":ot(".fspage { font-size: [^;]+; }"),a=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":ot(".fspage { font-family: [^;]+; }"),a=e?`.fspage { font-family: ${e}; }`:"";break;case"type":ot(".fspage { width: 1200px; margin: 0 auto; }"),ot(".fspage { width: 100%; padding: 0; }"),e==="fixed"?a=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?a=".fspage { width: 100%; padding: 0; }":a="";break;case"meta_title":document.title=e;break;case"meta_keywords":wt(t.replace("meta_",""),e);break;case"meta_description":wt(t.replace("meta_",""),e);return}n.textContent+=a}function ot(t){const e=document.getElementById("fspage-properties");if(!e)return;let n=e?.textContent;n=n?n.replace(new RegExp(t,"g"),""):"",e.textContent=n}function Vl(){const t=document.createElement("style");return t.id="fspage-properties",document.head.appendChild(t),t}function wt(t,e){let n=document.querySelector(`meta[name="${t}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",t),document.head.appendChild(n)),n.setAttribute("content",e)}async function Vi(t){try{document.querySelectorAll(".element-selected")?.forEach(async n=>{const a=n?.getAttribute("data-elementId"),i=n?.tagName?.toLowerCase();let s;const o=n?.classList?.contains("fslayout-row"),r=n?.firstChild?.classList?.contains("fslayout-row");if(o||r)s=await sa(a);else{const p=at.staticElementList?.filter(h=>{const w=h?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return i===w});if(p?.length)s=await Et(p);else if(Ve.includes(i)||vt.includes(i)){const h=t?.target?.value,w=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(w==="className")n.setAttribute("class",h);else if(w==="elementContent"&&Ve.includes(i))n.textContent=h;else if(w==="id")n.id=h;else if(w==="Height"){const E=h?.trim(),A=/^\d+$/.test(E)?`${E}px`:E;n.style.height=A}else if(w==="Width"){const E=h?.trim(),A=/^\d+$/.test(E)?`${E}px`:E;n.style.width=A}else if(w==="Margin"){const A=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.margin=A}else if(w==="Padding"){const A=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.padding=A}else w==="Background Color"?n.style.backgroundColor=h:w==="Color"&&(n.style.color=h);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const E=await jt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=E,ce(E)}else{const E=await ft();f.staticWidgetTree.html=E,ce(E)}await Ni();return}}const l=t?.target?.value,c=t?.target?.type,u=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),d=n,g=d?.getAttribute("isvalidate")==="on";if(g&&d.setAttribute("onchange","applyValidation()"),g&&d?.addEventListener("change",m=>{const p=m.target;ji(p)}),u==="className")d?.setAttribute("class",l);else if(u==="Height"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;d.style.height=p}else if(u==="Width"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;d.style.width=p}else if(u==="Margin"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");d.style.margin=p}else if(u==="Padding"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");d.style.padding=p}else if(u==="Background Color")d.style.backgroundColor=l;else if(u==="Color")d.style.color=l;else if(c==="checkbox"&&!t?.target?.checked)d?.removeAttribute(u),d.value="";else if(u==="elementContent")if(!d?.childNodes?.length)d.innerText=l;else for(let m of d?.childNodes){const p=m;if(p.nodeValue){if(p.nodeType===3&&p.nodeValue.trim()){p.nodeValue=l;break}}else{const h=document.createTextNode(l);d.insertBefore(h,d.firstChild);break}}else u==="align-items"?(d.style.display="flex",d.style.alignItems=l):u==="justify-content"?(d.style.display="flex",d.style.justifyContent=l):u==="text-align"?d.style.textAlign=l:u==="class"?(d.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||d.classList.remove(m)}),d.classList.add(...l.split(" "))):d?.setAttribute(u,l?.trim());if(s.attributes=s?.attributes?.map(m=>(m?.name===u&&(m?.type==="array"?m.selected=l:m?.type==="boolean"&&!t?.target?.checked?m.value="":m.value=l),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await jt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,ce(m)}else{const m=await ft();f.staticWidgetTree.html=m,ce(m)}H.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function ze(){const t=document.querySelectorAll("link.vde-css"),n=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),a=[];n?.length&&n.forEach((i,s)=>{const o=i.value,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",o),document.head.appendChild(r),a.push({order:s,url:i.value})}),t?.length&&t?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=a,H.updateActionHistories()}async function Je(){const t=document.querySelectorAll("script.vde-js"),n=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),a=[];n?.length&&n.forEach(async(i,s)=>{await new Promise((o,r)=>{const l=i.value,c=document.createElement("script");c.classList.add("vde-js"),c.setAttribute("type","text/javascript"),c.setAttribute("src",l),c.setAttribute("crossorigin","anonymous"),c.onload=()=>{o()},c.onerror=u=>{console.error("Failed to load script:",l,u),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(c),a.push({order:s,url:i.value})})}),t?.length&&t?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=a,H.updateActionHistories()}function ra(){mn(f.staticWidgetTree)}async function Ri(t){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter CSS URL",a.addEventListener("change",async()=>{await ze()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await ze(),await un(t)},e.appendChild(n),e.appendChild(a),e.appendChild(i),e}let Wa=0;async function Tt(t){const e=++Wa,n=t?t?.library?.js:f.widgetTree?.library?.js,a=document.getElementById("sortable-js-list");a.innerHTML="",la(),n?.length&&n?.sort((i,s)=>Number(i?.order)-Number(s?.order));for(const i of n){if(e!==Wa){console.log("Skipping outdated call for",i.url);return}await new Promise((s,o)=>{const r=document.createElement("li");r.className="list-item",r.draggable=!0;const l=document.createElement("span");l.className="material-symbols-outlined",l.innerText="drag_handle";const c=document.createElement("input");c.type="text",c.value=i?.url,c.addEventListener("change",async()=>{await Je()});const u=document.createElement("button");u.className="remove-button",u.innerHTML='<span class="material-symbols-outlined">delete</span>',u.onclick=async function(){r.remove(),await Je(),await Tt(t)},r.appendChild(l),r.appendChild(c),r.appendChild(u),a?.appendChild(r);const d=document.createElement("script");return d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",i.url),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{s()},d.onerror=g=>{console.error("Failed to load script:",i.url,g),o(new Error(`Failed to load script: ${i.url}`))},document.body.appendChild(d),r})}}function Ot(){const t=document.querySelectorAll("link.vde-css");t?.length&&t?.forEach(e=>{e.remove()})}function la(){const t=document.querySelectorAll("script.vde-js");t?.length&&t?.forEach(e=>{e.remove()})}async function un(t){const e=t?t?.library?.css:f.widgetTree?.library?.css,n=document.getElementById("sortable-list");n.innerHTML="",Ot(),e?.length&&e?.sort((a,i)=>Number(a?.order)-Number(i?.order)),e?.forEach(a=>{const i=document.createElement("li");i.className="list-item",i.draggable=!0;const s=document.createElement("span");s.className="material-symbols-outlined",s.innerText="drag_handle";const o=document.createElement("input");o.type="text",o.value=a.url,o.addEventListener("change",async()=>{await ze()});const r=document.createElement("button");r.className="remove-button",r.innerHTML='<span class="material-symbols-outlined">delete</span>',r.onclick=async function(){i.remove(),Ot(),await ze(),await un(t)},i.appendChild(s),i.appendChild(o),i.appendChild(r),n?.appendChild(i);const l=document.createElement("link");return l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",a.url),document.head.appendChild(l),i})}function Rl(t){const e=document.getElementById("sortable-list");if(!e)return;let n=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(n=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),Ot(),await ze(),await un(f.widgetTree?.library?.css?.length?f.widgetTree:t))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!n)return;const i=Ul(e,a.clientY),s=n;i===null?e.appendChild(s):e.insertBefore(s,i)})}function Ul(t,e){return[...t.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const s=i.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>a.offset?{offset:o,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}async function mn(t){const e=document.getElementById("sortable-list");e.innerHTML="";const n=document.getElementById("add-list");if(!e||!n){console.error("Required elements not found");return}if(t?.library?.css?.length)await un(t);else{const s=await Ri(t);e.appendChild(s)}Rl(t);const a=document.getElementById("sortable-js-list");a.innerHTML="";const i=document.getElementById("add-js-list");if(!a||!i){console.error("Required elements not found");return}if(t?.library?.js?.length)await Tt(t);else{const s=await Ji(t);a.appendChild(s)}zl(t)}async function Ui(t){const e=document.getElementById("sortable-list"),n=await Ri(t);e.appendChild(n)}async function zi(t){const e=document.getElementById("sortable-js-list"),n=await Ji(t);e.appendChild(n)}async function Ji(t){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter JS URL",a.addEventListener("change",async()=>{await Je()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Je(),await Tt(t)},e.appendChild(n),e.appendChild(a),e.appendChild(i),e}function zl(t){const e=document.getElementById("sortable-js-list");if(!e)return;let n=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(n=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),la(),await Je(),await Tt(f.widgetTree?.library?.js?.length?f.widgetTree:t))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!n)return;const i=Jl(e,a.clientY),s=n;i===null?e.appendChild(s):e.insertBefore(s,i)})}function Jl(t,e){return[...t.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const s=i.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>a.offset?{offset:o,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function Gl(t){const e=t.toLowerCase();return ye.has(e)?Qe.STYLE:Wl.has(e)?Qe.BOOLEAN:xl.has(e)?Qe.FORM:kl.has(e)?Qe.SPECIAL:Qe.FORM}function Ql(t,e){if(!t&&e==="Background Color")return"#FFFFFF";if(!t)return"#000000";if(t.startsWith("#"))return t;const n=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(n){const[a,i,s,o]=n;return"#"+[i,s,o].map(r=>{const l=parseInt(r).toString(16);return l.length===1?"0"+l:l}).join("")}return"#000000"}function Gi(t,e){if(!e)return console.warn("Attribute name is undefined"),"";if(t.classList.contains("fslayout-row")||t.firstChild instanceof HTMLElement&&t.firstChild.classList?.contains("fslayout-row"))return Qi(t,e);const n=e.toLowerCase();if(ye.has(n)||ye.has(e)){const a=ye.get(n)||ye.get(e);if(!a)return"";const i=t.style[a.property]||t.getAttribute(`data-${n}`);return n==="color"||n==="background-color"||n==="bg-color"||e==="Color"||e==="Background Color"?Ql(i,e):i||""}if(n==="elementcontent"){let a,i;return t?.childNodes?.length&&(a=Array.from(t?.childNodes)?.filter(s=>s?.nodeType===3),a?.length&&(i=a?.map(s=>s?.nodeValue?.trim()).join(""))),i?i?.trim():t?.textContent||""}return n==="classname"?t.classList.value?.replace(/wb-initial-empty/g,"")||"":t.getAttribute(n)||""}function Qi(t,e){const n=e.toLowerCase();return n==="class"||n==="classname"?Array.from(t.classList).filter(a=>!a.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):n==="align-items"?t.style.alignItems||"":n==="text-align"?t.style.textAlign||"":t.getAttribute(n)||""}function Kl(t,e,n){const a=e.toLowerCase();if(t.id){const i=t.getAttribute("data-attributes");if(i){const s=JSON.parse(i),o=s.find(r=>r.name===e);o&&((o.type==="array"||ct(e))&&(o.selected=n),o.value=n),t.setAttribute("data-attributes",JSON.stringify(s))}}if(ye.has(a)||ye.has(e)){const i=ye.get(a)||ye.get(e);if(!i)return;t.setAttribute(`data-${a}`,n),i.needsUnit&&n&&/^\d+$/.test(n)?t.style[i.property]=`${n}px`:t.style[i.property]=n;return}n?t.setAttribute(a,n):t.removeAttribute(a)}function ca(t,e){const n=t.closest(".spacing-tabs");if(!n)return;n.querySelectorAll(".spacing-tab-btn").forEach(s=>s.classList.remove("active")),t.classList.add("active");const a=n.nextElementSibling,i=a?.nextElementSibling;e==="margin"?(a?.classList.remove("hidden"),i?.classList.add("hidden")):(a?.classList.add("hidden"),i?.classList.remove("hidden"))}window.toggleSpacingBox=ca;let He=[],Ft,pt="",xa=!1,ka="";const Ct="storeOwner",gn=async t=>{ac(t),await Promise.all([sc(t),nc(t)]),Ya("projectId",t),Za(),Ki()},Yl=async t=>{document.title=t.storeName||"Store",Zi(t.storeLogo),Ft=t.mainPageId,pt=t.projectName,He=t.pagesList,localStorage.setItem(Ct,btoa(t.entityId)),Ya("projectId",t.projectId),Za(),Ki()},Ki=()=>{window.addEventListener("popstate",()=>_n(window.location.href)),document.addEventListener("click",t=>{const n=t.target.closest("a");if(!n||n.target==="_blank"||n.hasAttribute("download")||n.getAttribute("rel")==="external"||t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||n.origin!==location.origin)return;const a=n.getAttribute("href");!a||a.startsWith("#")||a.startsWith("mailto:")||(t.preventDefault(),history.pushState({},"",a),_n(a))},!0),_n(window.location.href)},_n=async t=>{const{pathname:e}=new URL(t,window.location.origin);if(ka==e)return;ka=e;const n=Xl(e),a=Zl(t),i=document.head.querySelectorAll("style#mystyleid");if(console.log("abc",e,He,n),n){const s=He.find(o=>o.path==n.route);Ma(s,{params:n?.params,queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const o=await Ia(s?.id);Dn(o?.data?.[`the_${k.PAGE_COMP_NAME}`])}).catch(o=>{console.error("Error during page route chain:",o)})}else if(e==="/"&&Ft){const s=He.find(o=>o.id==Ft);Ma(s,{params:{},queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const o=await Ia(s?.id);Dn(o?.data?.[`the_${k.PAGE_COMP_NAME}`])}).catch(o=>{console.error("Error during page route chain:",o)})}else{const s=He.find(o=>o.path=="/404");s?Yi(s.page):document.querySelector("#app").innerHTML="<h1>404</h1>",Array.from(i).forEach(o=>o.remove())}document.getElementById("global-loader")?.classList.add("d-none")},Ma=async(t,e)=>{ec(t),t.page?await Yi(t,e):console.warn("No page content Found")};function Zl(t){const{searchParams:e}=new URL(t,window.location.origin),n={};for(const[a,i]of e.entries())n[a]?n[a]=Array.isArray(n[a])?[...n[a],i]:[n[a],i]:n[a]=i;return n}const Xl=t=>{const a=[...He.map(i=>i.path)].sort((i,s)=>{const o=i.split("/").filter(Boolean),r=s.split("/").filter(Boolean),l=o.filter(u=>u.startsWith(":")).length,c=r.filter(u=>u.startsWith(":")).length;return l!==c?l-c:r.length-o.length});console.log("routes",a);for(let i=0;i<a.length;i++){const o=(a[i]?.startsWith("/")?a[i]:`/${a[i]}`).split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(o.length!==r.length)continue;const l={};if(o.every((u,d)=>u.startsWith(":")?(l[u.slice(1)]=r[d],!0):u===r[d]))return{route:a[i],params:l}}return null},Yi=async(t,e)=>{const n=document.querySelector("#app");n&&await Be(t?.page,n,e)};async function Ia(t){return new Promise(async e=>{let n=new P;n.conceptIds=[t],n.outputFormat=ue,n.selectors=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_meta_title`,`the_${k.PAGE_COMP_NAME}_meta_description`,`the_${k.PAGE_COMP_NAME}_meta_keywords`,`the_${k.PAGE_COMP_NAME}_width`,`the_${k.PAGE_COMP_NAME}_type`,`the_${k.PAGE_COMP_NAME}_font_family`,`the_${k.PAGE_COMP_NAME}_font_size`,`the_${k.PAGE_COMP_NAME}_body`,`the_${k.WIDGET_COMP_NAME}_clean`],n.inpage=100,de(n,"").subscribe(async a=>{a.length?e(a?.[0]):!Array.isArray(a)&&a?.data==null&&e({error:!0,message:"There is no data."})}).catch(a=>{const i=a?.message;e({error:!0,message:i})})})}const ec=t=>{if(xa)return;const e=new URL(window.location.href).hostname.split(".")[0].split("-")[1],n=tc(e,t),a=new Blob([JSON.stringify(n)],{type:"application/json"}),i=URL.createObjectURL(a),s=document.createElement("link");s.rel="manifest",s.href=i,document.head.appendChild(s),xa=!0};function tc(t,e){let n="/icons/icon-192x192.png",a="/icons/icon-512x512.png",s=window.location.hostname;return s.startsWith("www.")&&(s=s.substring(4)),s==="sleepinghats.com"&&(n="/icons/sleepinghats/icon-192x192.png",a="/icons/sleepinghats/icon-152x152.png"),console.log("rootDomain",s),s==="preview-103071837.develop.freeschema.com"||s=="preview-103071837.localhost"?(n="/icons/lms_chat/icon-192x192.png",a="/icons/lms_chat/maskable-icon.png",document.title="",{name:"LMS Chat",short_name:"LMS",start_url:location.origin+"/index.html",display:"standalone",theme_color:"#19c37d",background_color:"#ffffff",icons:[{src:`${location.origin}${n}`,sizes:"192x192",type:"image/png",purpose:"any"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"maskable"}]}):{name:`${pt||e.title||e.slug||t} - ${t}`,short_name:`${pt||t}`,start_url:location.origin+"/index.html",display:"standalone",theme_color:t?"#ff6600":"#ffffff",background_color:"#eee",icons:[{src:`${location.origin}${n}`,sizes:"192x192",type:"image/png",purpose:"any maskable"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"any maskable"}],share_target:{action:`${location.origin}/captures`,method:"POST",enctype:"multipart/form-data",params:{title:"title",text:"text",url:"url",files:[{name:"media",accept:["image/*","video/*"]}]}}}}const nc=async t=>{try{localStorage.removeItem(Ct);const e=new P;e.name="entity",e.typeConnection="the_entity_s_project",e.reverse=!0;const n=new P;n.name="project",n.conceptIds=[t],n.freeschemaQueries=[e],n.outputFormat=os;const a=await Rt(n,"");if(!a?.[0]?.the_project?.the_entity_s_project_reverse?.[0]?.id)return;a?.[0]?.the_project?.the_entity_s_project_reverse?.length==1&&localStorage.setItem(Ct,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()));for(let i=0;i<a?.[0]?.the_project?.the_entity_s_project_reverse?.length;i++)(a?.[0]?.the_project?.the_entity_s_project_reverse[i]).id!=102176333&&localStorage.setItem(Ct,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()))}catch(e){console.error(e)}};async function ac(t){try{const e=new P;e.name="store",e.typeConnection="the_project_refers",e.selectors=["the_store_name","the_store_logo"];const n=new P;n.name="project",n.conceptIds=[t],n.freeschemaQueries=[e];const i=(await Rt(n,""))?.[0]?.the_project?.the_project_refers?.the_store,s=i?.the_store_name?.the_name;document.title=s||"Store",Zi(i?.the_store_logo?.the_logo)}catch(e){console.error(e)}}function ic(t){return new Promise((e,n)=>{const a=new Image;a.crossOrigin="anonymous",a.src=t,a.onload=()=>{const s=document.createElement("canvas");s.width=s.height=512;const o=s.getContext("2d");o?.clearRect(0,0,s.width,s.height);const r=a.width/a.height;let l=512,c=512;r>1?c=512/r:l=512*r;const u=(512-l)/2,d=(512-c)/2;o?.drawImage(a,u,d,l,c);const g=s.toDataURL("image/png");e(g)},a.onerror=()=>{n(new Error("Image failed to load. Check CORS."))}})}async function sc(t){const n=(await I())?.token;let a=new P;a.name="page",a.typeConnection=`the_${k.PROJECT_COMP_NAME}_${se.PROJECT_PAGE_LINKER}`,a.selectors=[`the_${k.PAGE_COMP_NAME}_title`,`the_${k.PAGE_COMP_NAME}_slug`,`the_${k.PAGE_COMP_NAME}_body`];let i=new P;i.name="project",i.conceptIds=[t],i.selectors=[`the_${k.PROJECT_COMP_NAME}_name`,`the_${k.PROJECT_COMP_NAME}_main_page`],i.freeschemaQueries=[a],i.outputFormat=ue;const s=await Rt(i,n);let o={mainPageId:s?.[0]?.data?.the_project?.the_project_main_page?.id,name:s?.[0]?.data?.the_project?.the_project_name?.data.the_name||"",pages:s?.[0]?.data?.the_project?.the_project_s_page?.map(r=>({id:r?.id,title:r?.data?.the_page?.the_page_title?.data?.the_title||"",path:r?.data?.the_page?.the_page_slug?.data?.the_slug||"",page:r?.data?.the_page?.the_page_body?.id}))||[]};Ft=o.mainPageId,pt=o.name,He=o.pages}function Zi(t=""){var e=document.querySelector("link[rel~='icon']");e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e),setTimeout(()=>e?.remove(),1e4)),t&&ic(t).then(n=>{e.href=n}).catch(n=>{console.error(n),e.href="https://boomconcole.com/freeschema/127b5f42-f453-4904-bf4d-d2a6abc9327c.png"})}const En=[{path:"/",linkLabel:"Home",content:async()=>(await Me(()=>import("./home.index-CTQWf9TF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).default},{path:"/preview",linkLabel:"Preview",content:async()=>(await Me(()=>import("./preview.index-Bd9QIm9G.js"),__vite__mapDeps([13,4,1]))).default},{path:"/page-preview/:id",linkLabel:"Page Preview",content:async()=>(await Me(()=>import("./page-preview.index-BIE5CUdj.js"),__vite__mapDeps([14,4,9,6,7,8,10,11,15]))).default,isAuthenticated:!0},{path:"/documentation",linkLabel:"Documentation",content:async()=>(await Me(()=>import("./documentation.index-PQIac77t.js"),__vite__mapDeps([16,1,6,7,8,17,18,2,3,4,5,9,10,11,19]))).default},{path:"/subscription",linkLabel:"Subscription",content:async()=>(await Me(()=>import("./subscription.index-BpEfAwIJ.js"),__vite__mapDeps([20,4,1,2,3,5,9,6,7,8,10,11,21]))).default,isAuthenticated:!0},{path:"/video-tutorial",linkLabel:"videos",content:async()=>(await Me(()=>import("./video-tutorial.index-D644wU37.js"),__vite__mapDeps([22,1,2,3,4,5,9,6,7,8,10,11,23]))).default},{path:"/Community",linkLabel:"Community",content:async()=>(await Me(()=>import("./community.index-dHGuK3UD.js"),__vite__mapDeps([24,4,1,2,3,5,9,6,7,8,10,11,25]))).default}],Pa=document.getElementById("app"),oc=()=>{let t=localStorage?.getItem("profile")||"";return t?!!JSON.parse(t)?.token:!1},rc=t=>new RegExp("^"+t.replace(/:\w+/g,"(.+)")+"$"),$a=t=>{const e=t.result.slice(1),n=Array.from(t.route.path.matchAll(/:(\w+)/g)).map(a=>a[1]);return Object.fromEntries(n.map((a,i)=>[a,e[i]]))},Ba=async()=>{const t=new URLSearchParams(location.search);return Object.fromEntries(t.entries())};async function da(){let e=En.map(i=>({route:i,result:location.pathname.match(rc(i.path))})).find(i=>i.result!==null);if(!e)e={route:En.find(s=>s.path==="/404"),result:[location.pathname]};else if(e?.route?.isAuthenticated&&!oc()){const o=En.find(r=>r.path==="/");e={route:o,result:o?.path},history.pushState(null,"",o?.path)}const n=await e.route.content({...await $a(e),...await Ba()}),a=new n({...await $a(e),...await Ba()});Pa.innerHTML="",await a?.mount(Pa)}const Xi=async t=>{const e=document.getElementById("global-loader");e?.classList.remove("d-none");try{history.pushState(null,"",t),await da()}finally{e?.classList.add("d-none")}},es=async t=>{window.history.pushState({route:t},"",t),da()},lc=()=>{const t=window.location.pathname+window.location.search;Xi(t)},cc=()=>{customElements.define("router-link",class extends HTMLElement{constructor(){super(),this.handleClick=this.handleClick.bind(this),this.href&&this.attachShadow({mode:"open"})}connectedCallback(){if(this.href){const t=document.createElement("a");t.href=this.href,this.forwardAttributes(t),t.setAttribute("part","link");const e=document.createElement("slot");t.appendChild(e),this.shadowRoot&&this.shadowRoot.appendChild(t),this.addEventListener("click",this.handleClick),t.href&&this.setAttribute("href",t.href)}else this.addEventListener("click",this.handleClick)}forwardAttributes(t){["target","download","rel","hreflang","type","title","tabindex","accesskey"].forEach(n=>{this.hasAttribute(n)&&t.setAttribute(n,this.getAttribute(n))})}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}handleClick(t){const e=this.getAttribute("target"),n=this.getAttribute("href");e==="_blank"||t.ctrlKey||t.metaKey||t.button===1||this.hasAttribute("download")||n&&!n.startsWith("http")&&!n.startsWith("//")&&(t.preventDefault(),Xi(n))}set href(t){this.setAttribute("href",t);const e=this.shadowRoot&&this.shadowRoot.querySelector("a");e&&(e.href=t)}get href(){return this.getAttribute("href")}set target(t){t&&this.setAttribute("target",t)}get target(){return this.getAttribute("target")}})};function dc(){lc(),cc(),window.addEventListener("popstate",da)}const uc=async()=>{const t=["localhost","visualwidget.boomconcole.com","develop.freeschema.com","anilserver.freeschema.net"],e=window.location.hostname,n=e.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(n)gn(parseInt(n));else if(t.includes(e))await Me(()=>import("./initialLoadWICO-DnSc-AZm.js"),__vite__mapDeps([26,4,3,5,9,6,7,8,10,11])),dc();else try{mc(e)}catch(a){console.error(a),pn()}};function pn(){const t=document.getElementById("global-loader");t&&t.setAttribute("style","display: none !important");const e=document.getElementById("app");e&&(e.innerHTML="<h1>404</h1>")}function mc(t=""){try{const e=JSON.parse(sessionStorage.getItem("cacheServers")??"[]")||[],n=e.length>0&&e?.[0]!="https://boomconsole.com"?e[0]:"https://deploy.freeschema.com",a=new URLSearchParams;a.append("url",t),console.log("server",n),fetch(n+"/api/project-deploy",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(async i=>{const s=await i.json();Yl(s.data)}).catch(i=>{console.error(i),ja(t);try{const o=JSON.parse(sessionStorage.getItem("domainRecord")??"{}");if(o&&o.expiresAt>Date.now()){const r=o.value;r&&gn(parseInt(r));return}}catch(s){console.error(s),pn()}})}catch(e){console.error(e),ja(t)}}function ja(t=""){const e=new URLSearchParams;e.append("url",t),fetch(z.baseURL+"/dns/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}).then(async n=>{const a=await n.json();if(!a)gc();else{const i=a?.startsWith("http")?a:"http://"+a,o=new URL(i).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(o)gn(parseInt(o));else throw new Error("Path Not Valid")}}).catch(n=>{console.error(n),pn()})}function gc(){fetch(z.baseURL+"/cname").then(async t=>{const e=await t.json()||[];if(e?.[0]){const n=e[0]?.startsWith("http")?e[0]:"http://"+e[0],i=new URL(n).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(i)gn(parseInt(i));else throw new Error("Path Not Valid")}else throw new Error("Doamin Not Found")}).catch(t=>{console.error(t),pn()})}let ts=null;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),ts=t});const pc={activate:z.enableSW,scope:"/",pathToSW:"/serviceWorker.bundle.js",manual:!0};await Ws();"serviceWorker"in navigator&&(navigator.serviceWorker.register("/sw.js").then(()=>{console.log("Service Worker registered")}),navigator.serviceWorker.addEventListener("message",t=>{const{title:e,text:n,url:a,file:i}=t.data;console.log("Shared data received:",{title:e,text:n,url:a,file:i})}));rs(z?.boomURL,z?.aiURL,"",z?.baseNodeUrl,void 0,"widget_conceptualizer",pc,{logApplication:!0,logPackage:!1,isTest:!1,accessTracker:!1},{logserver:z.logserver});const hc=await I();Da(hc?.token);uc();window.PWAInstallHandler=(()=>{let t=null,e=null,n=null;return{init:({onInstall:o,onDismiss:r})=>{e=o,n=r,t=ts,window.addEventListener("appinstalled",()=>{console.log("PWA installed successfully!"),localStorage.setItem("pwaInstalled","true"),e&&e()})},isInstalled:()=>window.matchMedia("(display-mode: standalone)").matches||window.navigator?.standalone,showInstallPrompt:()=>{console.log("deferedPrompt",t),t&&(t.prompt(),t.userChoice.then(o=>{o.outcome==="accepted"?(console.log("User installed the PWA."),e&&e()):(console.log("User dismissed the install prompt."),n&&n()),t=null}))}}})();export{Ee as A,ve as B,k as C,Sc as D,mt as E,Mi as F,jr as G,z as H,Dn as I,Se as J,es as K,ge as L,Xi as M,Ec as N,Ge as P,f as S,il as T,Qo as _,ut as a,et as b,F as c,te as d,it as e,ol as f,I as g,Wn as h,Jn as i,_i as j,cn as k,Ue as l,H as m,qe as n,Vn as o,la as p,Tc as q,Ot as r,fo as s,L as t,Cc as u,De as v,D as w,Wi as x,Lc as y,Ac as z};
