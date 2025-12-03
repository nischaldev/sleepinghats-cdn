const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home.index-i62EXbeG.js","assets/mainView.class-C4NLGCWW.js","assets/navbar.component-CJUbog0D.js","assets/loginModal.service-BMh74nTH.js","assets/mftsccs-browser-CcapBeGk.js","assets/loginModal-DGhNYttL.css","assets/vendor-DEYWGvhS.js","assets/ckeditor-Cw9bcqxY.js","assets/vendor-TRZluGMH.css","assets/codemirror-D1H9tReK.js","assets/eslint4b-BLWGvIOa.js","assets/prettier-ClL2wQep.js","assets/home-YrckE8O1.css","assets/preview.index-DCWzQofe.js","assets/page-preview.index-RJCpVORg.js","assets/page-preview-BJCVd99J.css","assets/documentation.index-DPpQ6t5P.js","assets/highlight-CFrhCzdo.js","assets/highlight-ZgkIHsf0.css","assets/documentation-CtKxHXjz.css","assets/subscription.index-BQJCREmJ.js","assets/subscription-Dc24vCVe.css","assets/video-tutorial.index-DeE7ewab.js","assets/video-tutorial-Dg46rKRD.css","assets/community.index-CtAZZeM6.js","assets/community-CARjtQbC.css","assets/initialLoadWICO-CV9nVOtL.js"])))=>i.map(i=>d[i]);
import{p as K,v as Gn,G as Qn,P as Xa,K as P,g as In,E as me,a as O,V as Yt,_ as Pe,b as Kt,H as le,F as J,R as be,N as Eo,c as La,d as ei,O as Ue,k as To,l as ti,e as H,f as xa,h as Y,i as se,M as Ae,J as So,j as Ct,t as ni,o as Co,m as De,n as ue,q as Le,r as $e,s as Ne,Y as ze,u as G,D as kn,w as ai,I as Aa,x as ii,y as oi,z as Lo,Q as Yn,T as xo}from"./mftsccs-browser-CcapBeGk.js";import{E as te,b as it,o as ot,j as Zt,a as Xt,c as Ao,l as Kn,d as Zn,e as Wo,f as xe,k as en,h as Io,g as ko}from"./codemirror-D1H9tReK.js";import{J as tn,n as Mo}from"./vendor-DEYWGvhS.js";import{z as Po}from"./eslint4b-BLWGvIOa.js";import{l as st,p as nn,r as an,a as $o,b as Bo}from"./prettier-ClL2wQep.js";import{C as No}from"./ckeditor-Cw9bcqxY.js";const jo=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return so},get addJSLibrary(){return ro},get applyPageProperties(){return Jn},get applyPageProperty(){return Ee},get filterChildrenByWrapper(){return no},get getAttributeType(){return cc},get getAttributeValue(){return co},get getElementAttribute(){return ec},get getElementAttributeDetails(){return ba},get getElementData(){return eo},get getLayoutAttributeValue(){return uo},get getPropertiesByIdFromStorage(){return At},get handleDirectContentEdit(){return tc},get handlePageProperties(){return ao},get initializeApp(){return wn},get initializeLibrary(){return _a},get listJSLibraries(){return Wt},get removeCSSLibrariesFromHead(){return Jt},get removeJSLibrariesFromHead(){return Ea},get setAttributeValue(){return uc},get toggleSpacingBox(){return Ta},get updateAttribute(){return ac},get updateCSSLibrary(){return Ye},get updateElementAttribute(){return fn},get updateElementAttributeViaEditor(){return nc},get updateJSLibrary(){return Ke},get updateMetaTag(){return St},get updateMultipleElementAttribute(){return io},get updateWidgetTypeValue(){return to}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const U={baseURL:"https://boomconsole.com/api/v1",baseNodeUrl:"https://boomconsole.com",boomURL:"https://boomconsole.com",aiURL:"https://www.ai.freeschema.com/api",deployURL:"https://deploy.freeschema.com",agentURL:"https://wico-ai.freeschema.com",CLIENT_ID:"636550695311-ctc09991hhu6iav4kkhnp1ge537nec2i.apps.googleusercontent.com",logserver:"https://logger.freeschema.com",enableSW:!1,discussion_community:101765915,ai_widget:101934087,visual_prototype_widget:101938499,video_tutorial_widget:102040172,subscriptionId:102121109,documentation_preview_widget:102097744,folder_widget:102400016,assets_widget:102410590,VITE_DEV_BASE:"http://localhost:5173",VITE_CDN_BASE:"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master"},Do=U?.boomURL;async function F(t,e,n){const a=await K(`the_${t}`,"",!0,e,4,999);for(const[i,o]of Object.entries(n)){let s=i;const r=await K(`${s}`,`${o}`,!1,e,4,999);await q(a,r,s)}return a}async function q(t,e,n){const a=t.userId,i=999,o=999,s=t.type?.characterValue,r=n,l=s+"_"+r,u=await Gn(l,i,o,a);await Qn(t.id,e.id,u.id,1e3)}async function Ho(t,e){try{const n=new Headers;return n.append("Content-Type","application/json"),n.append("Authorization",`Bearer ${e}`),await(await fetch(`${Do}/api/get-entity-from-user?userConceptId=${t}`,{method:"GET",headers:n,redirect:"follow"})).json()}catch(n){throw console.error(n),n}}async function zc(t){const e=await Ho(t?.data?.userConcept,t?.data?.token);let n={token:t?.data?.token,refreshToken:t?.data?.refreshtoken,email:t?.data?.email,userId:t?.data?.entity?.[0]?.userId,userConcept:t?.data?.userConcept,entityId:e?.entity,amcode:btoa(JSON.stringify(t?.data?.roles))};return Xa(n.token),localStorage.setItem("profile",JSON.stringify(n)),!0}async function k(){return new Promise(t=>{let e=localStorage?.getItem("profile")||"";if(e){const n=JSON.parse(e);t(n)}else t()})}async function si(){return new Promise(t=>{let e=localStorage?.getItem("tempwidget")||"";if(e){const n=JSON.parse(e);t(n)}else t()})}const Oo=U?.baseNodeUrl;class Te{static instance;static getInstance(){return Te.instance||(Te.instance=new Te),Te.instance}async getLoginInfo(){const e=await k(),n=await this.checkIfUserIsAdmin(e?.userConcept);let a="",i=!1,o=!1;if(e?.token){i=!0;let s="",r="";if(e?.entityId){let l=new P;l.typeConnection="the_entity_firstname",l.name="entity_firstname";let u=new P;u.typeConnection="the_entity_lastname",u.name="entity_lastname";let c=new P;c.typeConnection="the_entity_tour_status",c.name="entity_tour_status";let d=new P;d.type="the_entity",d.name="top",d.conceptIds=[e.entityId],d.freeschemaQueries=[l,u,c],d.outputFormat=In;let g;await me(d,"").subscribe(m=>{g=m}),s=g?.[0]?.the_entity?.the_entity_firstname?.the_firstname||"",r=g?.[0]?.the_entity?.the_entity_lastname?.the_lastname||"",o=g?.[0]?.the_entity?.the_entity_tour_status?.the_tour_status==="true"}a=`
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
      `;return{loginInfoHTML:a,isLoggedIn:i,isAdmin:n,tourStatus:o}}async checkIfUserIsAdmin(e){try{return(await O(e))?.accessId===3}catch(n){return console.error("Error fetching user concept:",n),!1}}async logout(){const e=await si();await Yt(e?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),location.reload()}async checkAndUpdateToken(){try{const e=await k();if(!e?.token){console.warn("No token found in local storage.");return}const n=e.token,a=e.refreshToken,i=new Headers;i.append("Content-Type","application/json");const o={accessToken:n,refreshToken:a},r=await(await fetch(`${Oo}/api/Auth/refresh`,{method:"POST",headers:i,body:JSON.stringify(o)})).json();if(r.success&&r.data){const{accessToken:l,refreshToken:u}=r.data;e.token=l,e.refreshToken=u,localStorage.removeItem("profile"),localStorage.setItem("profile",JSON.stringify(e))}else this.logout()}catch(e){console.error("Error refreshing token:",e)}}}const qo=Te.getInstance();(function(){const e=window.fetch;window.fetch=async(...n)=>{const a=n[1]||{};try{const i=await e(...n);if(i.status===401){console.warn("401 Unauthorized - Refreshing token"),await qo.checkAndUpdateToken();const o=await k();if(!o?.token)return console.error("Token refresh failed. User not logged in."),i;if(a.headers){const s=new Headers(a.headers);s.set("Authorization",`Bearer ${o.token}`),s.has("Content-Type")||s.set("Content-Type","application/json"),a.headers=s}return e(n[0],a)}return i}catch(i){throw console.error("Intercepted Fetch Error:",i),i}}})();const Fo="modulepreload",Vo=function(t){return"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master/"+t},Wa={},fe=function(e,n,a){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");i=Promise.allSettled(n.map(l=>{if(l=Vo(l),l in Wa)return;Wa[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Fo,u||(d.as="script"),d.crossOrigin="",d.href=l,r&&d.setAttribute("nonce",r),document.head.appendChild(d),u)return new Promise((g,m)=>{d.addEventListener("load",g),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return i.then(s=>{for(const r of s||[])r.status==="rejected"&&o(r.reason);return e().catch(o)})};function Mn(t,e=0){let n=`<ul style="list-style: none; margin: 10px 0px; ${e==0?" padding-left: 0px; ":""}" id="sortable-list">`;for(let a=0;a<t.length;a++){const i=t[a];i.edit?n+=`
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
                <li>${i.menus?`${Mn(i.menus,e+1)}`:""}</li>
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
                <li>${i.menus?`${Mn(i.menus,e+1)}`:""}</li>
            `}return n+="</ul>",n}function dt(t){console.log("menus",t);const e=Mn(t),n=document.getElementById("menu-items");n&&(n.innerHTML=e);let a=null;document.querySelectorAll("#sortable-list li").forEach(i=>{i.addEventListener("dragstart",o=>{a=i,o.dataTransfer.effectAllowed="move"}),i.addEventListener("dragover",o=>{o.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",o=>{o.preventDefault(),i.classList.remove("drag-over"),a!==i&&!i.contains(a)&&i?.parentNode?.insertBefore(a,i.nextSibling)}),i.addEventListener("dragend",()=>{document.querySelectorAll(".drag-over").forEach(o=>o.classList.remove("drag-over"))})})}async function ri(t){console.log("projectId",t);let e;if(t||(e=di()),!t&&!e?.projectId)return console.log("Project Id not found"),[];if(!t&&e.projectId&&(t=e?.projectId),console.log("projectId 2",t),!t)return[];const n=["the_item_menu_name","the_item_menu_link","the_item_menu_action","the_item_menu_auth","the_item_menu_order","the_item_menu_page"],a=new P;a.typeConnection="the_menu_s_item",a.selectors=n;function i(c,d=5){if(d==5)return;const g=new P;g.typeConnection="the_menu_s_item",g.selectors=n,c.name=d.toString(),c.freeschemaQueries=[g];const m=d+1;i(g,m)}const o=new P;o.conceptIds=[t],i(o,1);const s=await Pe(o,"");console.log("valllu",s);const r=s?.[0]?.the_project?.the_menu_s_item||[],l=(c=[])=>{let d=[];for(let g=0;g<c.length;g++){const m=c[g];d.push({name:m?.the_item_menu?.the_item_menu_name?.the_name??"",link:m?.the_item_menu?.the_item_menu_link?.the_link??"",action:m?.the_item_menu?.the_item_menu_action?.the_action??"",page:m?.the_item_menu?.the_item_menu_page?.the_page?Number(m?.the_item_menu?.the_item_menu_page?.the_page):"",order:m?.the_item_menu?.the_item_menu_order?.the_order?Number(m?.the_item_menu?.the_item_menu_order?.the_order):0,auth:m?.the_item_menu?.the_item_menu_auth?.the_auth=="true",menus:l(m?.the_item_menu?.the_menu_s_item)??[]})}return d.sort((g,m)=>g.order-m.order)};return l(r)}async function Ro(t,e=[]){console.log("menus",e);const n=await new Kt;try{await n.initialize();const a=await O(t);await le(t,"the_menu_s_item"),await li(a,e,n),await n.commitTransaction(),console.log("output concept",t)}catch(a){console.error(a),await n.rollbackTransaction()}}async function li(t,e=[],n){for(let a=0;a<e.length;a++){const i=e[a],o=await n.MakeTheInstanceConceptLocal("the_item_menu","",!0,999,4);await n.CreateConnection(t,o,"the_menu_s_item");for(let[s,r]of Object.entries(i))if(console.log("key",s,r),!!["name","link","action","auth","order","page","menus"].includes(s)&&!(s=="menus"&&!Array.isArray(r)))if(s=="menus")await li(o,r,n);else{const u=await n.MakeTheInstanceConceptLocal("the_"+s,r,!0,999,4);await n.CreateConnection(o,u,"the_item_menu_"+s)}}}const Uo=async()=>{const t=U.enableSW;"serviceWorker"in navigator&&t&&await new Promise((e,n)=>{navigator.serviceWorker.register("/sw.js").then(a=>{a.addEventListener("updatefound",()=>{const i=a.installing;i?.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&(i.postMessage("skipWaiting"),setTimeout(()=>{confirm("A reload is required to update to latest")&&window.location.reload()},500))})}),e(void 0)}).catch(a=>{console.error("Service Worker Init error",a),n(a)}),setTimeout(()=>{n()},3e4)})},ci="wico_site";function di(){const t=atob(localStorage.getItem(ci)||"");return t?JSON.parse(t):{}}function ui(t,e){const n=di();n[t]=e,localStorage.setItem(ci,btoa(JSON.stringify(n)))}function mi(){window.wico={fetchMenus:ri}}async function zo(){await Uo()}const I={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"},re={ENTITY_PAGE_LINKER:"s_page",PAGE_WIDGET_LINKER:"body",ENTITY_PROJECT_LINKER:"s_project",PROJECT_PAGE_LINKER:"s_page"},Lt=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Xn=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],Pn=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],Jo=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let Ia=[],ka=[];async function Go(t){let e="";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const a=t[n];e+=` ${n}="${a}" `}return e}async function Qo(t,e){const n=new J;n.composition=t,n.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const a=await be([n],e),i=a?.data?.the_widget?.the_widget_html?.[0]?.id,o=a?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,s=a?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!i)return{html:"",css:"",js:""};const r=await Eo(i,["contain_s"]);Ia=await La(r.externalConnections),ka=await La(r.internalConnections);let l=await gi(i,Ia,ka);const u=document.createElement("div");return u.innerHTML=l,{html:(u?.querySelector(".widget-wrapper")).innerHTML,css:o||"",js:s||""}}async function gi(t,e,n){try{let a="",o=Ko(e)[t];if(o!=null){let s=Zo(o);const l=(await Ji())?.map(g=>{const m=g?.id,p=g?.data?.the_element?.the_element_name?.[0]?.data?.the_name,h=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,w=g?.data?.the_element?.the_element_void?.[0]?.data?.the_void,C=g?.data?.the_element?.the_element_s_attribute?.map(T=>{const v=T?.data?.the_attribute,y=v?.the_attribute_name?.[0]?.data?.the_name,E=v?.the_attribute_type?.[0]?.data?.the_type,L=v?.the_attribute_value?.[0]?.data?.the_value;return{name:y,type:E,value:L}});return{id:m,name:p,tag:h,void:w,attributes:C}}),u=[...Xn,...Pn],d=(await k())?.userId;for(let g=0;g<s.length;g++){const m=s[g];if(m.ofTheConceptId==t){const p=await Yo(m.toTheConceptId,n),h=Object.keys(p.data)[0],w=p.data[h],b=Lt.includes(h),C=await Go(w?.attributes||[]),T=l.find(y=>y.tag===h.toLowerCase().trim()),v=w?.attributes;for(const y in v){const E=u.find(S=>y===S?.name?.toLowerCase().trim()),L=v[y],_=E?.type;T.attributes=T?.attributes?.map(S=>(S?.name==="className"&&y==="class"?S.value=L:S?.name==="elementContent"?S.value=w?.innerText:y===S?.name&&(_==="array"?S.selected=L:_==="boolean"?S.value="":S.value=L),S))}if(h!="text"){const y=await ei(p.id,d);y?.length&&await Yt(y?.[0]?.id);const E={[`wdgt${p.id}`]:T},L=await Ue(E,null,null,null,d);console.log("elementAttributeComp ->",L),a+=`
            <div id="wdgt${p.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${T?.id}">
            <${h} data-cc-id="${p.id}" `+C+`${b?"/></div>":">"}`,a+=await gi(m.toTheConceptId,e,n)}(w.contains=="false"||h=="text")&&(a+=" "+w.innerText+" "),!b&&h!="text"&&(a+=`</${h}></div>`)}}}return a}catch(a){console.error("error converting html",a)}}async function Yo(t,e){var n=[],a={},i=e;n=i;for(var o=[],s=0;s<n.length;s++)o.includes(n[s].ofTheConceptId)||o.push(n[s].ofTheConceptId);var r=await O(t);if(r.id==0&&t!=null&&t!=null){var l=await O(t);r=l}var u=await To(t,n,o),c=r?.type?.characterValue??"";a[c]=u;var d={};return d.data=a,d.id=t,d}function Ko(t){return t.reduce((e,n)=>{const{ofTheConceptId:a}=n;return e[a]||(e[a]=[]),e[a].push(n),e},{})}function Zo(t){const e=new Map;t.forEach(o=>{e.set(o.id,o)});const n=[],a=new Set,i=o=>{if(!a.has(o.id)){a.add(o.id),n.push(o);for(const s of t)s.orderId==o.id&&i(s)}};return t.forEach(o=>{o.orderId==1e3&&i(o)}),n}async function Jc(){return"WICO"}async function Me(){const t=await si();await Yt(t?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await bo("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async function Xo(t,e){var n=[];try{var a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization",`Bearer ${e}`),a.append("Randomizer",ti.BASE_RANDOMIZER.toString());const i=await fetch(U.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:a,body:JSON.stringify({id:t})});return i.ok?await i.json():(console.log("recursive search error ",i.status),n)}catch(i){console.log(i)}}async function pi(t,e,n=1e3,a){const i=t.userId,l=await Gn("contain_s",999,999,i);return await Qn(t.id,e.id,l.id,n)}const es="the_widget";async function ts(t,e,n){return await ns(t,e,n)}async function ns(t,e,n){const o=new DOMParser().parseFromString(t,"text/html").body,s=await Ue({[es]:{}});e&&await as(e,s),n&&await is(n,s);const r=await Ue({widgetHTML:{}});await q(s,r,"html");const l=await hi(o.children[0],r);return await pi(r,l),await H.SyncDataOnline(),s}async function as(t,e){const a=(await k())?.userId,o=await K("the_widgetCSS",t,!0,a,4,999);await q(e,o,"css")}async function is(t,e){const a=(await k())?.userId,o=await K("the_widgetJS",t,!0,a,4,999);await q(e,o,"js")}async function hi(t,e){console.log("parentConcept ->",e);const n={};if(n.tagName=t?.tagName?.toLowerCase(),t?.attributes?.length>0){n.attributes={};for(let o of t.attributes)n.attributes[o.name]=o.value}t?.textContent?.trim()&&(n.text=t.textContent.trim());let a={[n.tagName?n.tagName:"text"]:{contains:t?.children?.length?"true":"false",attributes:n.attributes||"",innerText:t?.children?.length?"":n.text||""}};const i=await Ue(a);if(t?.childNodes?.length>0){n.children=[];let o=[],s=-1,r,l;for(let c of t.childNodes)if(!(c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()==="")&&!(t.children.length===0&&c.nodeType===Node.TEXT_NODE)){if(c.nodeType===Node.TEXT_NODE){let d={text:{contains:!1,attributes:"",innerText:c.textContent?.trim()}};const g=await Ue(d);o.push({parentConcept:i,childConcept:g,orderId:l})}else c.nodeType===Node.ELEMENT_NODE&&(r=await hi(c,i),o.push({parentConcept:i,childConcept:r,orderId:l}));s>=0&&(o[s]={...o[s],orderId:r?.id}),s++}let u=1e3;for(let c=0;c<o.length;c++){const d=o[c];u=(await pi(d.parentConcept,d.childConcept,u)).id}}return i}const os="widget-conceptualizer",ss="0.0.0",rs="module",ls={dev:"vite --config vite.config.js --force",build:"tsc && vite build --config vite.config.prod.js",preview:"vite preview"},cs={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},ds={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.174-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},Ma={name:os,private:!0,version:ss,type:rs,scripts:ls,devDependencies:cs,dependencies:ds};function us(t,e,n,a){switch(n){case"int":t=t.sort(function(i,o){return parseInt(i[e])>parseInt(o[e])?1:parseInt(i[e])<parseInt(o[e])?-1:0});break;default:t=t.sort(function(i,o){return i[e].toLowerCase()>o[e].toLowerCase()?1:i[e].toLowerCase()<o[e].toLowerCase()?-1:0})}}function $n(t){let e={};for(let n=0;n<t.length;n++){const a=t[n];a?.type&&a?.type!=="submit"&&(e[a.name]=a?.value)}return e}function ms(t){const e=Ma.dependencies||{},n=Ma.devDependencies||{};return e[t]||n[t]||null}async function at(t,e,n,a,i){await le(t,e);const o=await K(n,a,!1,i,4,999);let s=await Gn(e,999,999,i);return await Qn(t,o?.id,s.id,1e3,s.characterValue,i),"Delete and update completed"}class Ze{async generateSlug(e){const n=await k();let a=new J;a.composition=n?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new J;i.fullLinkers=["the_page_slug"],i.inpage=100;const o=[a,i];let s=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return await xa(o,"",In).subscribe(r=>{const l=r?.the_entity?.the_entity_s_page?.map(d=>d?.the_page?.the_page_slug?.[0]?.the_page_slug)||[];let u=s,c=s.match(/^(.*?)(?:-(\d+))?$/);if(c){u=c[1];let g=(c[2]?parseInt(c[2],10):0)+1;for(;l.includes(s);)s=`${u}-${g++}`}}),s}async checkSlugAvailablity(e){const n=await k();let a=new J;a.composition=n?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new J;i.fullLinkers=["the_page_slug"],i.inpage=100;const o=[a,i];let s=!0;return await xa(o,"",In).subscribe(r=>{(r?.the_entity?.the_entity_s_page?.map(u=>u?.the_page?.the_page_slug?.[0]?.the_page_slug)||[]).includes(e)&&(s=!1)}),s}async savePage(e,n,a){const i=await F(I.PAGE_COMP_NAME,n,e),o=await Y(a);return await q(o,i,re.ENTITY_PAGE_LINKER),i}async renamePage(e,n,a){return await at(Number(n),"the_page_title","title",e?.title,a),await at(Number(n),"the_page_slug","slug",e?.slug,a),"renamed"}async getAllPages(e){const n=await k(),a=n?.token;let i=new J;e?i.composition=e:i.composition=n.entityId,i.fullLinkers=[`the_entity_${re.ENTITY_PAGE_LINKER}`],i.inpage=100;let o=new J;return o.fullLinkers=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_body`],o.inpage=100,(await be([i,o],a))?.data?.the_entity?.[`the_entity_${re.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const n=await k();if(!n?.token)return null;const a=n?.token;let i=new J;i.composition=e,i.fullLinkers=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_meta_title`,`the_${I.PAGE_COMP_NAME}_meta_description`,`the_${I.PAGE_COMP_NAME}_meta_keywords`,`the_${I.PAGE_COMP_NAME}_width`,`the_${I.PAGE_COMP_NAME}_type`,`the_${I.PAGE_COMP_NAME}_font_family`,`the_${I.PAGE_COMP_NAME}_font_size`,`the_${I.PAGE_COMP_NAME}_body`],i.inpage=100;let o=new J;return o.fullLinkers=[`the_${I.WIDGET_COMP_NAME}_clean`],o.inpage=100,await be([i,o],a)}async getPageById(e){return new Promise(async n=>{const a=await k();if(!a?.token)return null;const i=a?.token;let o=new P;o.conceptIds=[e],o.outputFormat=se,o.selectors=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_meta_title`,`the_${I.PAGE_COMP_NAME}_meta_description`,`the_${I.PAGE_COMP_NAME}_meta_keywords`,`the_${I.PAGE_COMP_NAME}_width`,`the_${I.PAGE_COMP_NAME}_type`,`the_${I.PAGE_COMP_NAME}_font_family`,`the_${I.PAGE_COMP_NAME}_font_size`,`the_${I.PAGE_COMP_NAME}_body`,`the_${I.WIDGET_COMP_NAME}_clean`],o.inpage=100,me(o,i).subscribe(async s=>{if(s.length)n(s?.[0]);else if(!Array.isArray(s)&&s?.data==null){const r="There is no data.";A.infoMessageToast(r,4),n({error:!0,message:r})}}).catch(s=>{const r=s?.message;A.errorToast(`${r}`,4),n({error:!0,message:r})})})}async updatePageField(e,n,a){const i=await k(),o=`the_${I.PAGE_COMP_NAME}_${e}`;await le(a,o);const s=await O(a),r=await K(`${e}`,`${n}`,!1,i.userId,4,999);await q(s,r,e),await H.SyncDataOnline()}async deletePage(e){await Ae(e)}}class fi{_pagesService;constructor(){this._pagesService=new Ze}async getPagesListHTML(){window.pageHandler=Hr;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(a=>{let i=a?.data?.[`the_${I.PAGE_COMP_NAME}`],o=i?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,s=i?.[`the_${I.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
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
    `}}const gs=(()=>{const t=()=>{document.querySelectorAll("#navBarContainer > span").forEach(s=>{s.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(s=>{s.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(s=>{s.remove()})};return{toggle:i=>{const o=i.target,s=o?.dataset?.id;if(o.classList.contains("activeNavigationIcon")){t();return}if(s){document.querySelectorAll("#navBarContainer > span").forEach(d=>{d.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(d=>{d.classList.remove("navActive")});const u=document.getElementById(s);document.querySelector(`[data-id='${s}']`)?.classList.add("activeNavigationIcon"),u?.classList.add("navActive"),s=="fs-all-pages-list"&&new ca().initPagesSidebar()}},collapseNavbar:i=>{const o=i.target;document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.getElementById(o.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")})},checkForActiveNavigation:()=>{const i=document.querySelector(".activeNavigationIcon");if(i){const o=i.dataset?.id||"";document.getElementById(o)?.classList.remove("navActive")}},resetNavigationBar:t}})();function $t(t){return new Promise(e=>{const n=document.createElement("div");n.className="custom-confirm-modal",n.innerHTML=`
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
        `,n.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(n),e(!0)}),n.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(n),e(!1)}),document.body.appendChild(n)})}class V{static staticElement;static previousSelectedStaticElement}function Bt(){const t=document.getElementById("select-box");t.style.display="none"}function Pa(){const t=document.getElementById("select-box");tt(),t.style.transition="none",Nt()}function Nt(){const t=V?.staticElement;if(t){const e=t.getBoundingClientRect(),n=e.left,a=e.top,i=document.getElementById("select-box");i.style.display="block",i.style.width=t.offsetWidth+"px",i.style.height=t.offsetHeight+"px",i.style.top=`calc(${a}px)`,i.style.left=`calc(${n}px)`}}function ve(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=a=>{a.removeEventListener("click",et),a.removeEventListener("mouseenter",ht),a.removeEventListener("mouseleave",tt)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&n(a)}),e.forEach(a=>{a.classList.contains("fslayout-row")?(a.addEventListener("click",function(i){i.target===a&&(i.preventDefault(),i.stopPropagation(),et(i))}),a.addEventListener("mouseenter",ht),a.addEventListener("mouseleave",tt)):a.classList.contains("fslayout-col")?a.addEventListener("click",function(i){if(i.target===a){i.preventDefault(),i.stopPropagation();const o=a.closest(".fslayout-row");if(o){const s=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(s,"target",{value:o}),et(s)}}}):a.closest(".fslayout-col")?(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),et(i)}),a.addEventListener("mouseenter",ht),a.addEventListener("mouseleave",tt)):(a.closest(".edited-widget-container")||!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),et(i)}),a.addEventListener("mouseenter",ht),a.addEventListener("mouseleave",tt))})}function ps(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=a=>{a.removeEventListener("click",et),a.removeEventListener("mouseenter",ht),a.removeEventListener("mouseleave",tt)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&n(a)})}class Ie{static instance;static events=new Map;constructor(){}static getInstance(){return Ie.instance||(Ie.instance=new Ie),Ie.instance}static subscribe(e,n){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(n)}static publish(e,n){this.events.has(e)&&this.events.get(e).forEach(a=>a(n))}static unsubscribe(e,n){if(this.events.has(e)){const a=this.events.get(e),i=a.indexOf(n);i>-1&&a.splice(i,1)}}}class hs extends So{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=Ie.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),n=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(n),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),Ie.subscribe("page:elementClick",a=>{this.handlePageElementClick(a)}),Ie.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),n=this.buildTree(e);n&&this.treeRoot&&this.treeRoot.appendChild(n)}getHtml(){return""}handlePageElementClick(e){let n=e;for(;n&&!this.treeItems.has(n);)n=n.parentElement;if(n){const a=this.treeItems.get(n);if(a){document.querySelectorAll(".tree-item").forEach(o=>{o.classList.remove("active")}),a.classList.add("active"),a.scrollIntoView({behavior:"smooth",block:"center"});let i=a.closest(".tree-node")?.parentElement;for(;i;){if(i.classList.contains("children")&&i.classList.contains("hidden")){i.classList.remove("hidden");const o=i.previousElementSibling?.querySelector(".toggle-btn");o&&(o.innerHTML="▼")}i=i.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const n=document.createElement("div");n.className="tree-node";const a=document.createElement("div");a.className="tree-item",this.treeItems.set(e,a);const i=e.tagName.toLowerCase(),o=e.id?`#${e.id}`:"",s=Array.from(e.classList).map(l=>`.${l}`).join("");if(e.children.length>0){const l=document.createElement("button");l.className="toggle-btn",l.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',l.onclick=u=>{u.preventDefault(),u.stopPropagation();const c=n.querySelector(".children"),d=c.classList.contains("hidden");c.classList.toggle("hidden"),l.innerHTML=d?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},a.appendChild(l)}s.includes(".added-widget-container")&&a.classList.add("widget-tree-node");const r=document.createElement("div");if(r.classList.add("text-truncate"),r.innerHTML=`
      <span class="element-tag">${i}</span>
      <span class="element-id">${o}</span>
      <span class="element-class">${s}</span>
    `,a.appendChild(r),a.onmouseenter=()=>this.handleHover(e),a.onmouseleave=()=>this.handleHover(null),a.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},n.appendChild(a),e.children.length>0){const l=document.createElement("div");l.className="children hidden",Array.from(e.children).forEach(u=>{if(u instanceof HTMLElement){const c=this.buildTree(u);c&&l.appendChild(c)}}),n.appendChild(l)}return o!=="#widget-details"?n:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const n=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(a=>{this.isAllExpanded?a.classList.remove("hidden"):a.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(a=>{a.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function ge(){const t=document.getElementById("tree-root");t.innerHTML="";const e=f.staticWidgetTree.html,n=document.querySelector(".toggle-all-btn");e?(n.style.display="flex",new hs().mount(t)):(n.style.display="none",t.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class Bn{static navbar}function fs(t){return t?.widgetcodeId}async function yi(t,e,n=!0,a,i,o=null){console.log("parentWidget",o);let s=new Ct;s.html=t.html,s.widgetState={...a},s.widgetType=t.type,s.componentDidMountFunction=t.before_render,s.addEventFunction=t.after_render,s.mountChildWidgetsFunction=t.mount_child,s.customFunctions=t.custom_functions,s.widgetDependenciesData=t.dependency,s.inDevelopment=!0,e.innerHTML="";let r=e;if(n=!1,r&&(await s.mount(r),t.widget=s,t.children.length>0&&s.childWidgetElement?.length>0))for(let l=0;l<t.children?.length;l++){let u=t.children[l];for(let c=0;c<s.childWidgetElement.length;c++){let d=s.childWidgetElement[c];if(u.wrapper===d.id){const g=j.clearDraggedWidget(u),m=await yi(g,d,n,s.widgetState,i,s);s.childWidgets.push(m),s.css=s.css+m.css+`#${u.wrapper} { ${u.css} }`,m.dataChange(p=>{let h=p?.type?.characterValue;h&&(s.childrenData[h]=p)})}}}return s}function Mt(t,e,n=!1,a,i,o){let s=Date.now();const r=document.createElement("div");if(r.innerHTML=`<div id="wdgtcopy${s}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,n==!1)if(e!=0&&e!=null&&e!=null&&o){console.log("beforeElement -->",a),document.getElementById("builder-workarea")===t&&(i="inside");const u=t.parentElement,c=r.firstChild;if(i==="above")u.insertBefore(c,t);else if(i==="below"){const g=t.nextElementSibling;g?u.insertBefore(c,g):t.parentNode.appendChild(r.firstChild)}else if(i==="inside"){const g=ia(t,o.clientY);g==null?t.appendChild(c):t.insertBefore(c,g)}return document.getElementById(`wdgtcopy${s}`)?document.getElementById(`wdgtcopy${s}`):t.querySelector(`#wdgtcopy${s}`)}else return t.insertBefore(r.firstChild,a),document.getElementById(`wdgtcopy${s}`)?document.getElementById(`wdgtcopy${s}`):t.querySelector(`#wdgtcopy${s}`);return t}const Je=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],Fe=["span","a","img","button","input","label","textarea","select"],ys=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],$a={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...Fe]},h2:{accepts:[...Fe]},h3:{accepts:[...Fe]},h4:{accepts:[...Fe]},h5:{accepts:[...Fe]},h6:{accepts:[...Fe]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...Fe]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},ws=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function Nn(t,e){const n=t.target,a=t.target;let i=null;for(const d of a.children){const g=d.getBoundingClientRect();if(t.pageY<g.top+window.scrollY){i=d;break}}n.classList.remove("dragging-area");const o=vs(n,"added-widget-container"),s=t.clientY;let r,l;if(o){let d=function(g,m){const p=g.height,h=m-g.top;return h<p*.25?"above":h>p*.75?"below":"inside"};if(r=o.getBoundingClientRect(),l=d(r,s),l==="inside")return{status:!1,message:"Cannot be dropped inside WIDGET!"}}else r=n.getBoundingClientRect(),l=_t(r,s);const u=e?.data_type||"",c=t?.target?.tagName?.toLowerCase();return Lt.includes(c)&&l==="inside"?{status:!1,message:`${u} cannot be dropped inside ${c} tag.`}:Je.includes(c)&&$a[c]?.accepts?.length&&!$a[c]?.accepts?.includes(u)&&l==="inside"?{status:!1,message:`${u} cannot be dropped inside ${c} tag.`}:{status:!0,message:"",elementBelowDrag:i,dropzoneEl:o||n}}function vs(t,e){for(;t;){if(t.classList&&t.classList.contains(e))return t;t=t.parentElement}return!1}class oe{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(n=>n.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const n=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${n}`)).slice(0,-1).forEach(i=>i.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(n),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const n=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,n.from-6),n.from)!=="tsccs.")return null;const i=Object.keys(ni).filter(o=>o.startsWith(n.text));return i.length>0?{from:n.from,to:n.to,options:i.map(o=>({label:o,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new te({doc:"/* Write your code here */",extensions:[it,ot,Zt(),Xt({activateOnTyping:!0}),Ao.data.of({autocomplete:this.tsccsCompletions}),Kn(),Zn(Wo(new Po,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),en.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(n=>{if(n.docChanged){const a=n?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=a;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=a;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=a;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=a;break;case"widgetDependencies-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.dependency=a;break;default:const o=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(s=>`${s.slug}-editor-split`===this.editorContainerId);o?.length&&(o[0].code=a)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function wi(t){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",t)try{const n=await st.format(t,{parser:"babel",plugins:[nn,an],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function bs(){const t=new oe("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function vi(t,e){const n=document.querySelector('.cm-content[data-language="css"]');if(n.innerHTML="/* Write your CSS here */",e){let a=document.querySelector(".child-widget-style");a||(a=document.createElement("style"),a.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",a)),a.textContent+=e}if(t)try{const i=(n.textContent+t).split("/* Write your CSS here */").join(" ");n.textContent=i;const o=await st.format(i,{parser:"css",plugins:[$o],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});n.textContent=o||"/* Write your CSS here */"}catch(a){console.error("CSS formatting error:",a),n.textContent=t}}async function bi(t){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",t)try{const n=await st.format(t,{parser:"babel",plugins:[nn,an],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function _s(){const t=new oe("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function pe(t){const e=document.querySelector('.cm-content[data-language="html"]'),n=document.getElementById("builder-workarea");if(n?.querySelector("#widget-details")?.remove(),e)try{const i=document.createElement("div");let o=t||n?.innerHTML||"";i.innerHTML=o;const s=i.firstChild;s&&s.nodeType===1&&s.classList.contains("mftsccs-marking-element")&&(o=s.innerHTML),i.innerHTML=o;async function r(u){if(u.dataset.widgetid){const c=await Y(Number(u.dataset.widgetid));c&&c.typeCharacter=="the_widget"&&(u.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let c=0;c<u.childNodes.length;c++){const d=u.childNodes[c];d instanceof HTMLElement&&await r(d)}}await r(i),o=i.innerHTML;const l=await st.format(o,{parser:"html",plugins:[Bo],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=l||"<!-- Write your HTML here -->"}catch(i){console.error("HTML formatting error:",i),e.textContent=t}else alert("widget html editor not found in dom")}async function Es(t){const e=document.getElementById("widgetTypeValue");e&&(e.value=t||"");const n=document.getElementById("widgetType");n&&(n.value=t||"")}function on(t){if(!t)return;const e=document.getElementById("builder-workarea"),n=document.createElement("div");n.id="widget-details",n.innerHTML="",n.innerHTML=`
    <button onclick="openDocumentationModal(${t}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(n)}function ea(){const t=document.querySelector(".content-target");t.innerHTML="",t.textContent="Widget Loading..."}function ta(){return document.querySelectorAll(".content-target")[0]}function Ba(t){const e={past:[],present:t,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(n){e.past.push(e.present),e.present=n,e.future=[]},undo(){if(e.past.length===0)return;const n=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=n,n},redo(){if(e.future.length===0)return;const n=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=n,n}}}class D{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),n=document.getElementById("redo-btn");e?.addEventListener("click",D.undoAction),n?.addEventListener("click",D.redoAction)}static renderActionHistory(){D.actionHistories=Ba(JSON.stringify(f?.staticWidgetTree)),Ba(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:n}=D.actionHistories.getState(),a=document.getElementById("undo-btn"),i=document.getElementById("redo-btn");a&&(a.disabled=!e),i&&(i.disabled=!n)}static async undoAction(){const e=D.actionHistories.undo();e!==void 0&&(Va(e||""),D.updateButtonStates())}static async redoAction(){const e=D.actionHistories.redo();e!==void 0&&(Va(e||""),D.updateButtonStates())}static updateActionHistories(){D.actionHistories.push(JSON.stringify(f.staticWidgetTree)),D.updateButtonStates()}}async function Ts(){const t=document.getElementById("widget-prompt-modal");t&&t.remove()}async function Ss(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function Cs(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function Ls(){const t=document.getElementById("prompt-text");t.addEventListener("input",()=>{t.style.height="auto";const e=Math.min(t.scrollHeight-8,120);t.style.height=`${e}px`,t.style.overflowY=e===120?"auto":"hidden"})}class _i{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const n=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],i=((o,s=3)=>{if(o.length<s)return[];const r=new Set;for(;r.size<s;){const l=Math.floor(Math.random()*o.length);r.add(l)}return[...r]})(n,2);this.randomSuggestionEl=i?.map(o=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${n[o]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),Ls(),setTimeout(()=>{const n=document.querySelector(".aiAssistantTabs"),a=document.querySelectorAll("#aiChatContainer, #prototypeWidget");n.querySelector("button").classList.add("active"),a[0].classList.add("active"),n.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{n.querySelectorAll("button").forEach(r=>r.classList.remove("active")),a.forEach(r=>r.classList.remove("active"));const o=i.dataset.id,s=document.getElementById(o);i.classList.add("active"),s?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=Ts,window.minimizeAssistant=Ss,window.maximizeAssistant=Cs,`
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
    `}}async function xs(t){const e=document.getElementById("widget-btn-wrapper");if(e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
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
          `;const a=e.querySelector("#updateDropDownArrow"),i=e.querySelector("#update-widget-btn");i&&a&&i.addEventListener("click",()=>{i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),a&&i&&a.addEventListener("click",()=>{i.classList.contains("d-none")?(i.classList.remove("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function As(){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function Ws(){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class Ei{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.main.empty?a({changes:{from:i.main.from,insert:"  "},selection:{anchor:i.main.from+2}}):a({changes:{from:i.main.from,to:i.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new te({doc:"<!-- Write your HTML here -->",extensions:[it,ot,Io(),Xt(),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),te.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),en.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateHTML(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=Tt;class Ti{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(a=>a.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const n=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=n,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new te({doc:"/* Write your JavaScript here */",extensions:[it,ot,Zt(),Xt(),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),te.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),en.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(async n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateJS(a)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function Na(){const t=document.getElementById("codeBlocksContainer"),e=t.querySelectorAll(".sub-tab-btn");if(!t.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const a=document.getElementById("onmount-editor-split");a&&a.classList.add("active")}}async function Si(t){const e=t?.id,n=t?.code,a=t?.slug,i=t?.name,o=document.querySelectorAll(".custom-service-btn"),s=Array.from(o)?.filter(d=>d?.getAttribute("data-subtab")===a),r=document.getElementById("lifecycle"),l=r?.querySelector(".sub-tab-nav");if(!s.length){const d=document.createElement("button");d.classList.add("sub-tab-btn","custom-service-btn"),d.setAttribute("data-subtab",a),d.innerHTML=`
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
    `,l?.appendChild(d);const g=document.createElement("div");g.classList.add("sub-tab-content","custom-editor-content"),g.id=`${a}-editor-split`,g.setAttribute("data-subtab",a),r?.appendChild(g);const m=`${a}-editor-split`;Is(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(d=>{d.addEventListener("click",function(){const g=d.getAttribute("data-subtab"),m=d.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(p=>{p.classList.remove("active")}),d.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${g}"]`)?.classList.add("active")})}),setTimeout(async()=>{const d=document.querySelector(`#${a}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(d&&(d.textContent="/* Write your code here */",n))try{const g=await st.format(n,{parser:"babel",plugins:[nn,an],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});d.textContent=g}catch(g){console.error("JS formatting error:",g),d.textContent=n}},500)}async function Is(t){await new oe(t).initializeEditor()}async function ks(t,e,n){const a=e.trim().toLocaleLowerCase().split(" ").join("-"),i=f.staticWidgetTree?.custom_functions?.filter(c=>c.slug===t);i[0].name=e,i[0].slug=a;const o=document.querySelector(`button[data-subtab=${t}]`);o?.setAttribute("data-subtab",a),o.innerHTML=`
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
  `;const s=o?.querySelector("span.service-name");s&&(s.innerText=e);const r=document.getElementById(`${t}-editor-split`);r?.setAttribute("data-subtab",a),r.id=`${a}-editor-split`,await new oe(`${a}-editor-split`).initializeEditor();const u=f.staticWidgetTree?.custom_functions?.filter(c=>c.slug===a);Si(u?.[0]),_e("rename-custom-function-modal")}class Ms{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,n){this.customFunctionId=n,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const a=document.getElementById("rename-custom-function-modal").querySelector("form");a&&a.addEventListener("submit",i=>{i.preventDefault();const o=a.customFunctionName.value.trim(),s=/^[_A-Za-z][_A-Za-z ]*$/.test(o),r=document.getElementById("service-rename-error");s?(r.textContent="",r.classList.add("d-none"),ks(this.currentCustomFunctionSlug,o,this.customFunctionId)):(r.classList.remove("d-none"),r.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
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
    `}}const sn="unsaved_widget";async function jn(){if(aa())return;const e=$s(),n={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},a=JSON.stringify(n),i=new Blob([a]).size,s=4.5*1024*1024-e;if(i<=s)try{localStorage.setItem(sn,a),na("save-widget")}catch(r){console.error("Error saving to localStorage:",r)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),rn()}function Ps(t){return new Blob([t]).size}function $s(){let t=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const n=localStorage.getItem(e);t+=Ps(e+n)}return t}async function rn(){localStorage.removeItem(sn),mt()}const Tn=async t=>{if(aa())return;t?.preventDefault();const n=localStorage.getItem(sn);if(n){const a=JSON.parse(n);f.widgetTree=a?.widgetTree;const i=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,o=new URLSearchParams(window.location.search).get("widget-id");i===Number(o)?(i||j.enableWidgetButtons(),await He(),D.updateActionHistories(),A.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},na=async(t="")=>{if(aa())return;const n=document.querySelector("#widget-properties .row"),a=document.getElementById("btn-draft-widget"),i=localStorage.getItem(sn),o=JSON.parse(i),s=o?.widgetTree?.origin||o?.widgetTree?.widgetId,r=new URLSearchParams(window.location.search).get("widget-id");if(i&&!a){if(s!==Number(r)){mt();return}const l=document.createElement("div");l.id="draft-widget",l.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),l.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,n?.appendChild(l);const u=document.getElementById("btn-draft-widget");u?.removeEventListener("click",c=>Tn(c)),u?.addEventListener("click",c=>Tn(c)),s===0&&!t&&setTimeout(()=>{Tn()},0)}else i&&a?(s!==Number(r)||s===Number(r)&&!t)&&mt():!i&&a&&mt()};function mt(){document.getElementById("draft-widget")?.remove()}function aa(){const t=window.location.href,n=new URL(t).searchParams.get("page-id");return n||""}const ft=(()=>{function t(u){const c=u.target,d=document.getElementById("codeBlocksContainer");d&&d.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),c.classList.add("selected")}function e(u){const c=u.target,d=document.getElementById("codeBlocksContainer");d&&d.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),c.classList.add("selected")}async function n(u){j.enableWidgetButtons();try{await He(),jn(),D.updateActionHistories(),A.infoMessageToast(u)}catch(c){A.errorToast("widget synchronization failed"),console.error(c)}}const a=()=>{const u=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),u.style.display="flex";const g=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});g&&g.dispatchEvent(m),yt.enableHeader()},i=()=>{const u=document.getElementById("widgetButtionCodeViewWrapper"),c=document.createElement("div");c.classList.add("codeSplitViewButton");const d=document.createElement("div");d.appendChild(c);const g=document.createElement("div");g.id="codeBlocksContainer",g.innerHTML=`
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
`,u?.appendChild(g),document.querySelectorAll(".tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(L=>L.classList.remove("active")),y.classList.add("active"),document.getElementById(E)?.classList.add("active")})}),g.querySelectorAll(".sub-tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-subtab"),L=y.closest(".tab-content");L?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(_=>{_.classList.remove("active")}),y.classList.add("active"),L?.querySelector(`.sub-tab-content[data-subtab="${E}"]`)?.classList.add("active")})});const h=document.querySelector(".fullscreenicon"),w=document.querySelector("#widgetButtionCodeViewWrapper");h?.addEventListener("click",()=>{w.classList.contains("fullscreen")?yt.enableHeader():yt.disableHeader(),w.classList.toggle("fullscreen")});const b=document.querySelector(".close-btn");b&&b.addEventListener("click",a),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>n("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(d.firstChild),setTimeout(()=>{const y=document.querySelector(".codeSplitViewButton");y&&(y.removeEventListener("click",t),y.addEventListener("click",t));const E=document.getElementById("designSplitViewButton");E&&(E.removeEventListener("click",e),E.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",y=>o(y))};function o(u){u.stopPropagation();try{const c="add-custom-service-dialog";document.getElementById(c)?.remove();const g=document.createElement("dialog");g.setAttribute("id",c),g.classList.add("col-md-3"),g.innerHTML=`
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
      `;const m=g.querySelector("form");return m&&m.addEventListener("submit",p=>{p.preventDefault();const h=m?.serviceName?.value.trim(),w=/^[_A-Za-z][_A-Za-z ]*$/.test(h),b=document.getElementById("service-name-error");w?(b.textContent="",b.classList.add("d-none"),l(p)):(b.classList.remove("d-none"),b.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(g),ce(c),"OPENED"}catch(c){console.error("Failed to rename widget:",c)}}async function s(u,c,d){console.log("openRenameCustomFunction -->",u,c,d),new Ms(c,d),await ce("rename-custom-function-modal")}async function r(u,c,d){u.preventDefault();try{if(confirm("Do you want to delete the Service?")){A.infoMessageToast("Deleting the service...",0),d&&await Ae(Number(d));const m=`button[data-subtab=${c}]`;document.querySelector(m)?.remove(),document.getElementById(`${c}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(E=>E.slug!==c);const w=document.getElementById("codeBlocksContainer");return w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active"),w?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(g){A.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",g)}}async function l(u){u.preventDefault();const c=u.target,g=new FormData(c).get("serviceName");let m=g?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const p=document.getElementById("lifecycle"),h=p?.querySelector("div.sub-tab-nav"),w=document.getElementById("codeBlocksContainer");w?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),w?.querySelector(".sub-tab-content.active")?.classList.remove("active");const T=document.createElement("button");T.classList.add("sub-tab-btn","custom-service-btn","active"),T.setAttribute("data-subtab",m),T.innerHTML=`
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
    `,h.appendChild(T);const v=document.createElement("div");v.classList.add("sub-tab-content","custom-editor-content","active"),v.setAttribute("data-subtab",m),v.setAttribute("id",`${m}-editor-split`),p.appendChild(v),await new oe(`${m}-editor-split`).initializeEditor();const E={name:g,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(E),document.querySelectorAll(".tab-btn").forEach(S=>{S.addEventListener("click",function(){const x=S.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(W=>W.classList.remove("active")),S.classList.add("active"),document.getElementById(x)?.classList.add("active")})}),(w?.querySelectorAll(".sub-tab-btn")).forEach(S=>{S.addEventListener("click",function(){const x=S.getAttribute("data-subtab"),W=S.closest(".tab-content");W?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(M=>{M.classList.remove("active")}),S.classList.add("active"),W?.querySelector(`.sub-tab-content[data-subtab="${x}"]`)?.classList.add("active")})}),_e("add-custom-service-dialog")}return{initializeCodeBlock:i,closeCodeView:a,synchronizeWidget:n,openRenameCustomFunction:s,deleteCustomFunction:r}})();async function Bs(){await na();const t=document.getElementById("select-box");if(t.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(S=>{S.remove()}),document.querySelectorAll(".custom-editor-content").forEach(S=>{S.remove()});const E=document.getElementById("codeBlocksContainer"),L=E?.querySelectorAll(".sub-tab-btn");E?.querySelector(".sub-tab-btn.active")||(L?.[0]?.classList.add("active"),E?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),D.renderActionHistory(),D.updateActionHistories(),wn(f.staticWidgetTree),document.head.querySelectorAll("link.vde-css")?.forEach(v=>v.remove()),ge();const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const i=document.getElementById("widget-builder");i.textContent="Widget Builder Panel",i.setAttribute("title","Widget Builder Panel"),j.disableWidgetButtons(),await new Yi().initializeEditor(),await new Ti().initializeEditor(),await new oe("onmount-editor-split").initializeEditor(),await new oe("onupdate-editor-split").initializeEditor(),await new oe("addevents-editor-split").initializeEditor(),await new oe("mountchildwidgets-editor-split").initializeEditor(),await new Ei().initializeEditor(),await new oe("widgetDependencies-editor-split").initializeEditor();const m=document.getElementById("widgetNameValue");m.value="";const p=document.getElementById("widgetTypeValue");p&&(p.value="");const h=document.getElementById("widgetType");h&&(h.value=""),document.getElementById("widget-version").classList.add("d-none");const b=document.getElementById("element-attributes");b.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,_a(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function Ns(){const t=new Co;f.widgetTree=t,ft.synchronizeWidget("Workspace Cleared")}let Be="",jt="";async function ja(t){try{const n=(await k())?.token,a=await fetch(`${U.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)});if(!a.ok){const u=await a?.text(),c=JSON.parse(u);throw A.errorToast(c.message),console.error(`API Error (${a.status}):`,u),Dt(a.statusText,"error"),new Error(`API request failed with status ${a.status}`)}const i=a.body.getReader(),o=new TextDecoder("utf-8");let s="",r=null;for(;;){const{value:u,done:c}=await i.read();if(c)break;s+=o.decode(u,{stream:!0});const d=s.split(`

`);for(let g=0;g<d.length-1;g++){const m=d[g].trim();if(m.startsWith("data:")){const p=m?.slice(6).trim();try{const h=JSON.parse(p);if(h.status==="responding"&&await Ds(h.message_str),h.status==="success"&&(r=h),h.status==="error")throw A.errorToast(h.message?.[0]||"AI Error"),new Error(h.message?.[0])}catch(h){console.warn("Stream parse error:",h)}}}s=d[d.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),r}catch(e){return console.error(e),null}}async function Ci(t){try{const e=JSON.stringify(f.staticWidgetTree),n=await k(),a={query:t.text_input,widgetTree:f.staticWidgetTree},i=await fetch(`${U.agentURL}/widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.token}`},body:JSON.stringify(a)});console.log("response_data -->",i);const o=await i.json();console.log("tree_data -->",o,typeof o);let s=o.data.widgetTree.data||o.data.widgetTree;typeof s=="string"&&(s=JSON.parse(s)),f.widgetTree=s,j.enableWidgetButtons(),await He(),jn(),D.updateActionHistories();return}catch(e){throw console.error("AI model error",e),A.errorToast("There is some error"),e}}async function js(t,e=""){e||(await Re(t),f.resetWidgetTree()),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new _i("");const i=document.getElementById("prompt-text");Be="",i?.addEventListener("keydown",function(l){if(l.key==="Enter"&&!l.shiftKey){l.preventDefault();const u={text_input:i?.value,chat_id:"",widget_type:"",stream:!0};Be&&(u.tag="followup",u.chat_id=Be,u.widget_type=jt),bt(u,e)}}),document.querySelector(".button-send").addEventListener("click",function(l){l.preventDefault();const u={text_input:i?.value,chat_id:"",widget_type:"",stream:!0};Be&&(u.tag="followup",u.chat_id=Be,u.widget_type=jt),bt(u,e)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(l=>{l?.addEventListener("click",function(u){u.preventDefault(),i.value=l?.innerText})})}async function bt(t,e){if(e)Dn(t.text_input),Da("Assistant is working"),await Ci(t),Ha("prompt-loader");else if(t.text_input){Dn(t.text_input),Da("Assistant is working");const n=await ja(t);if(Ha("prompt-loader"),!n)return;Be=n?.data?.chat_id,jt=n?.data?.widget_type;const a=n?.message;if(f.staticWidgetTree.assistant={input:n?.data?.user_prompt,id:Be,type:jt},n?.status=="error")A.errorToast(a);else{if(t.widget_type!=="list"){t.widget_type==="form"&&Li(Be);const s=new Function("tsccs",n.data.data_structure_prototype)(ni);let r=document.getElementById("prototypeWidget");De(U.visual_prototype_widget,r,{prototype:s}).then(l=>{l.dataChange(async u=>{const c={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:u,type:"application/JSON",stream:!0};try{const d=await ja(c);await Hn(d)}catch(d){throw d}})})}await Dt(a);const i=document.createElement("button");i.classList.add("clearWorkspaceButton"),i.textContent="Clear Workspace",i.classList.add("btn","btn-danger"),i.addEventListener("click",()=>{Ns(),i.remove()}),await Dt(i),ea(),await Hn(n)}}}async function Dt(t,e){const n=document.querySelector(".chat-content"),a=document.createElement("div");if(a.classList.add("message","message-bot"),t instanceof HTMLButtonElement){const i=document.querySelector(".clearWorkspaceButton");i&&i.remove(),a.appendChild(t)}else e==="error"&&a.classList.add("text-danger","my-0","text-center"),a.innerText=t;n?.scrollTo({top:n.scrollHeight,behavior:"smooth"}),n?.insertAdjacentElement("beforeend",a)}async function Ds(t,e){const n=document.getElementById("response-status");if(n)n.innerHTML=t;else{const a=document.querySelector(".chat-content"),i=document.createElement("div");i.id="response-status",i.classList.add("message","message-bot"),i.innerHTML=t,a?.insertAdjacentElement("beforeend",i),a?.scrollTo({top:a.scrollHeight,behavior:"smooth"})}}function Dn(t){const e=document.getElementById("default-message"),n=document.querySelector(".chat-content"),a=document.createElement("div");a.classList.add("message","message-user"),a.innerText=t,n?.insertAdjacentElement("beforeend",a),e?.remove();const i=document.getElementById("prompt-text");i.value="",i.style.height="44px"}function Da(t){Hs("prompt-form");const e=document.getElementById("prompt-content"),n=document.createElement("div");n.id="prompt-loader",n.textContent=t,e?.insertAdjacentElement("beforeend",n)}function Ha(t){document.getElementById(t)?.remove(),Os("prompt-form")}function Hs(t){const e=document.getElementById(t);for(let n of e.elements)n.disabled=!0}function Os(t){const e=document.getElementById(t);for(let n of e.elements)n.disabled=!1}async function Hn(t){const e=t?.data?.ui?.html||"",n=t?.data?.ui?.css||"",a=t?.data?.ui?.js||"",i=t?.data?.before_render||"",o=t?.data?.after_render||"",s={html:e,css:n,js:a,before_render:i,after_render:o,assistant:{id:t?.data?.chat_id,input:t?.data?.user_prompt,type:t?.data?.widget_type}};await qs(s)}async function qs(t){f.staticWidgetTree.html=t.html,f.staticWidgetTree.css=t.css,f.staticWidgetTree.js=t.js,f.staticWidgetTree.before_render=t.before_render,f.staticWidgetTree.after_render=t.after_render,f.staticWidgetTree.assistant=t.assistant;const e=f.staticWidgetTree,n=document.getElementById("builder-workarea");n.innerHTML="";const a=await yi(e,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await Z(e,!1,a),D.renderActionHistory(),D.updateActionHistories(),ge(),ve()}async function Li(t){document.getElementById("prompt-suggestion")?.remove();const n={text_input:"create a list widget for it",chat_id:t,widget_type:"list",stream:!0},a=document.createElement("div");a.id="prompt-suggestion",a.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",a),document.getElementById("request-list-widget").addEventListener("click",async s=>{s.preventDefault(),bt(n,""),As(),Ws()})}async function Fs(t){new _i(t?.id),Dn(t?.input),await Dt("Widget Generated Successfully!!"),t.type==="form"&&Li(t?.id);const e=document.getElementById("prompt-text"),n={text_input:e?.value,chat_id:t?.id||"",widget_type:t?.type||"",tag:t?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(i){i.key==="Enter"&&(i.shiftKey||(i.preventDefault(),n.text_input=e?.value,bt(n,"")))}),document.querySelector(".button-send").addEventListener("click",function(i){i.preventDefault(),n.text_input=e?.value,bt(n,"")})}async function Vs(t){const e=document.querySelector("#widgetDependencies-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");e.textContent="/* Write your code here */";try{const a=t?.split("/* Write your code here */")?.join(" ");if(a){const i=await st.format(a,{parser:"babel",plugins:[nn,an],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=i||"/* Write your code here */"}}catch(n){console.error("JS formatting error:",n),e.textContent=t}}async function Z(t,e,n,a,i){Es(t?.type),Vs(t?.dependency);const o=e?"":t?.css,s=e?`div[data-widgetid="${t.id}"] {${t.css}}
${n?.css}`:n?.css;if(await vi(o,s),pe(t?.html),await wi(t?.after_render),await bi(t?.before_render),t?.custom_functions?.length){const r=document.querySelectorAll(".custom-service-btn"),l=Array.from(r)?.map(d=>d.getAttribute("data-subtab")??""),u=t.custom_functions?.map(d=>d.slug);(l?.filter(d=>!u.includes(d))).forEach(d=>{const g=document.querySelector(`.custom-service-btn[data-subtab="${d}"]`);g&&g.remove(),document.getElementById(`${d}-editor-split`)?.remove()}),Na(),t.custom_functions?.forEach(d=>{Si(d)})}else document.querySelectorAll(".custom-service-btn").forEach(u=>{u.remove()}),document.querySelectorAll(".custom-editor-content").forEach(u=>{u.remove()}),Na();(a||i)&&on(t?.origin?t?.origin:t?.widgetId),a&&t?.assistant?.id&&Fs(t?.assistant)}const On="drop-indicator";function xi(){let t=document.querySelector(`.${On}`);return t||(t=document.createElement("div"),t.className=On,document.body.appendChild(t)),t}function Rs(t,e){const n=xi(),a=t.getBoundingClientRect();e==="top"?n.style.top=`${a.top-5}px`:e==="bottom"&&(n.style.top=`${a.bottom-5}px`),n.style.left=`${a.left}px`,n.style.width=`${a.width}px`,n.style.opacity="1",n.style.transform="scaleY(1)"}function Ai(){document.querySelectorAll(`.${On}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function Us(t,e,n){if(e.length===0)return{element:n,position:"top"};const a=t.clientY;let i=e[0],o=Math.abs(i.getBoundingClientRect().top-a);Math.abs(i.getBoundingClientRect().bottom-a);for(const u of e){const c=u.getBoundingClientRect(),d=Math.abs(c.top-a);Math.abs(c.bottom-a),d<o&&(i=u,o=d)}const s=i.getBoundingClientRect(),r=s.top+s.height/2,l=a<r?"top":"bottom";return{element:i,position:l}}async function je(t){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(a=>{a.remove()});const n=document.querySelectorAll("script.vde-js");if(n?.length&&n?.forEach(a=>{a.remove()}),await wn(t),t?.children?.length)for(const a of t?.children){const i=a?.library;i?.css?.length&&i?.css?.forEach(o=>{const s=o?.url,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r)}),i?.js.length&&i?.js?.forEach(async o=>{await new Promise((s,r)=>{const l=o?.url,u=document.createElement("script");u.classList.add("vde-js"),u.setAttribute("type","text/javascript"),u.setAttribute("src",l),u.setAttribute("crossorigin","anonymous"),u.onload=()=>{s()},u.onerror=c=>{console.error("Failed to load script:",l,c),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(u)})})}}let Q=null,ie;function ln(){const t=document.querySelector(".content-target > .mftsccs-marking-element");if(t){const e=document.querySelector(".content-target");Se.fixContentTargetHeight(e,t)}}function zs(t){Q=t.target;const e=t.target;let n={data_type:t.target.getAttribute("data-type"),data_default:t.target.getAttribute("data-default"),data_void:t.target.getAttribute("data-void"),data_text:t.target.getAttribute("data-text"),elementId:t.target.getAttribute("data-elementId"),dataId:t.target.id,imageUrl:e.imageUrl,displayType:e.displayType};t.dataTransfer.setData("text",JSON.stringify(n)),t.dataTransfer.setData("id",t.target.id),t.dataTransfer.effectAllowed="move"}async function Js(t){t.stopPropagation();const e=t.target,n={widgetcodeId:t.target.getAttribute("data-widgetId"),sourceElementId:t.target.id,className:t.target.className,imageUrl:e.imageUrl,displayType:e.displayType,type:e.Type};t.dataTransfer.setData("text",JSON.stringify(n)),t.dataTransfer.effectAllowed="move"}function Gs(t){t.preventDefault(),t.stopPropagation(),t.target.classList.add("dragging-area"),xt.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",ps()}function Qs(t){t.preventDefault(),t.stopPropagation(),t.target.classList.remove("dragging-area")}function Ys(t){t.preventDefault(),t.stopPropagation(),(!Q||!(t.currentTarget instanceof HTMLElement))&&(Q=t?.target);const e=t.target,n=Array.from(e.children).filter(i=>i!==Q);xi();const a=Us(t,n,e);ie=a,Rs(a.element,a.position)}function Ks(){j.checkContent()?j.enableWidgetButtons():j.disableWidgetButtons()}async function Zs(t){const e=await cn(t);Q=null,Ai(),D.updateActionHistories(),xt.collapseNavbar(),Ks(),ln(),ge(),e&&(pe(),on(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),ve()}function Ht(t,e){return Array.isArray(t?.children)&&(t.children=t?.children.filter(n=>n?.wrapper!==e),t.children.forEach(n=>Ht(n,e))),t}function Ge(t,e){let n;return Array.isArray(t?.children)&&(n=t?.children.filter(a=>a?.wrapper===e),t.children.forEach(a=>Ge(a,e))),n?.[0]}async function Xs(t){t.preventDefault(),t.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(d=>{const g=document.getElementById(`${d}-content`);if(g&&g.style.display==="block"){const m={target:g.previousElementSibling};Tt(m,`${d}-content`)}});const n=document.getElementById("element-attributes");if(n&&n.style.display==="block"){const d={target:document.querySelector("#icon-attribute")};Tt(d,"element-attributes")}const a=V.staticElement,i=a?.parentElement,o=i?.parentElement,s=o?.dataset?.widgetid,r=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container"),l=a.querySelectorAll(".added-widget-container");if(a?.classList?.contains("added-widget-container")){const d=a?.id;Ht(f?.staticWidgetTree,d)}else l.length&&l.forEach(d=>{const g=d?.id;Ht(f?.staticWidgetTree,g)});if(r){const d=r.id;if(a?.remove(),V.staticElement.remove(),Bt(),a?.classList?.contains("added-widget-container")){const g=Ge(f?.staticWidgetTree,d);if(g){const m=r.querySelector(".mftsccs-marking-element");g.html=m?.innerHTML,Z(g)}}else{const m=document.getElementById(d).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,Z(f.selectedStaticWidgetTreeInfo.widgetTree)}ge(),D.updateActionHistories();return}i?.classList.contains("mftsccs-marking-element")&&i.children.length===1&&i?.remove(),s&&(o?.children?.length||o?.remove()),a?.remove(),V.staticElement.remove(),Bt();const u=await nt();return f.staticWidgetTree.html=u,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},Yl(),Z(f?.staticWidgetTree),ge(),D.updateActionHistories(),j.checkContent()||(j.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}function er(t){return"drag"}function tr(t){return t.dataTransfer.setData("text",t.target.id),"start drag"}function nr(t){console.log("dragEndWidgetElement event ->",t)}function ar(t){return t.preventDefault(),t.stopPropagation(),"dragOverWidgetElement"}async function ir(t){await cn(t),pe()}let Ot=null;async function Wi(t,e){if(!t)return console.error("dropFolderElement called without event"),!1;(c=>"dataTransfer"in c&&c.dataTransfer!==null)(t)&&(t.preventDefault(),t.stopPropagation());const a=t.target instanceof HTMLElement?t.target:null;if(!Q)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let o=t.target;if(!o.classList.contains("mftsccs-marking-element")&&!o.classList.contains("fslayout-col")&&o.id!=="builder-workarea"){const c=document.getElementById("builder-workarea"),d=o.closest(".mftsccs-marking-element"),g=o.closest(".fslayout-col");o=d||g||c}if((Q.contains(o)||Q===o)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),o=document.getElementById("builder-workarea")),!o)return console.error("Invalid dropzone"),!1;o?.classList.remove("dragging-area");let s=Nn(t,e);if(!s.status)return alert(s.message),Q=null,!1;const r=e.dataType||e.type||e.data_type,l=r==="photo"||r==="Image"||r==="img",u=r==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(l){let c,d=!1;if(Q&&Q.tagName&&Q.tagName.toLowerCase()==="img"){if(d=!0,c=Q,c.parentElement===o&&console.log("Image is already in this dropzone, just repositioning"),!(c instanceof Node))return console.error("draggedItem is not a valid DOM node:",c),Q=null,!1;(!c.hasAttribute("style")||!c.style.width)&&c.setAttribute("style","width: 200px;")}else{const w=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(o.querySelectorAll(`img[src="${w}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),Q=null,!1;c=document.createElement("img"),c.setAttribute("src",w),c.setAttribute("style","width: 200px;")}let g=Se.generateUUID();c.setAttribute("element-info-id",g);const m=o.classList.contains("file-item")&&o.classList.contains("photo-file")&&o.classList.contains("dragging");let p=c;if(m){const w=document.createElement("div");w.appendChild(c),p=w}try{if(d){const w=m&&c.parentElement?.parentElement||c.parentElement,b=m?c.parentElement:c;w&&w!==o&&b&&w.removeChild(b)}ie?.position==="top"&&o?.children?.length&&ie?.element?o.contains(ie.element)&&!p.contains(ie.element)&&p!==ie.element?o.insertBefore(p,ie.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),o.appendChild(p)):ie?.position==="bottom"&&ie?.element?o.contains(ie.element)&&!p.contains(ie.element)&&p!==ie.element?ie.element.insertAdjacentElement("afterend",p):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),o.appendChild(p)):o.appendChild(p)}catch(w){console.error("Error positioning element:",w instanceof Error?w.message:w);try{o.appendChild(p)}catch(b){return console.error("Cannot append element:",b),Q=null,!1}}c.removeAttribute("element-info-id");const h=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container");if(h){const w=h.id,b=Ge(f?.staticWidgetTree,w);if(b){const C=h.querySelector(".mftsccs-marking-element");C&&(b.html=C.innerHTML,await Z(b))}return Q=null,!1}return or(),Q=null,!0}else if(u){if(!s.status)return alert(s.message),Q=null,!1;if(e.sourceElementId){const S=e.sourceElementId||e.fileId;console.log("sourceElement ->",S)}let c=e.widget_id;if(!c)return console.error("Widget ID is missing from data"),Q=null,!1;o.classList.remove("dragging-area");const d=document.createElement("div");d.classList.add("wb-initial-empty"),d.style.display="block",d.style.marginBottom="10px",d.setAttribute("data-widget-id",c.toString());const g=Se.generateUUID();d.id=`widget-${g}`;const m=await k();let p=o.classList.contains("publicWidgetRouter"),h=await ue(Number(c));const w=t.clientY,b=o.getBoundingClientRect(),C=_t(b,w);let T;if(!p){const S=await Ce(Number(c),m.token);h=await ue(S?S.widgetId:Number(c)),h?.children?.length&&await dn(h),T=Mt(o,S?S.widgetId:c,!1,s.elementBelowDrag,C,t)}const v=j.clearDraggedWidget(h),y=await Le(v,T);v.wrapper=T?.id,Ai();const E=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container");if(E){const S=E.id,x=Ge(f?.staticWidgetTree,S);x&&x.children.push(v);const M=document.getElementById(S).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=M?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=M?.style.cssText,await Z(f.selectedStaticWidgetTreeInfo.widgetTree),Q=null,!1}const L=await Et();f.staticWidgetTree.html=L,f.staticWidgetTree?.children?.push(v);const _=f.widgetTree.children.indexOf(v);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[_],isChildWidget:!0,childWidgetIndex:_},await je(v),await Z(v,!1,y),j.enableWidgetButtons(),Q=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),Q=null,!1}function or(){document.querySelectorAll(".mftsccs-marking-element img").forEach(t=>{t.setAttribute("draggable","true"),t.addEventListener("dragstart",e=>{e.stopPropagation(),Ot=Date.now()}),t.addEventListener("dragend",e=>{e.stopPropagation(),setTimeout(()=>{Ot=null},100)})})}function sr(){Ot=null,Q=null,console.log("dragStartTime",Ot)}async function cn(t,e=!1,n,a){if(!t&&e&&n&&a){const l=await ue(Number(n)),u=Mt(a,n,!1,null,"below",t),c=j.clearDraggedWidget(l);let d=await Le(c,u);c.wrapper=u?.id;const g=await nt();f.staticWidgetTree.html=g,f.staticWidgetTree?.children?.push(c);const m=f.widgetTree.children.indexOf(c);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[m],isChildWidget:!0,childWidgetIndex:m},await je(c),Z(c,!1,d),j.enableWidgetButtons();return}if(!t){console.error("dropElement called without event");return}t.preventDefault(),t.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let o=t.dataTransfer.getData("text");if((l=>{try{return JSON.parse(l),!0}catch{return!1}})(o))if(Object.keys(JSON.parse(o)).includes("widgetcodeId")){const l=JSON.parse(o);let u=Nn(t,l);const c=l.className.split(" ");if(!u.status){alert(u.message);return}const d=JSON.parse(o);if(d.sourceElementId){const x=document.getElementById(d.sourceElementId.toString());if(x){t.target.insertBefore(x,u.elementBelowDrag??null);return}}let g=fs(d),m=u?.dropzoneEl;m.classList.remove("dragging-area");const p=await k();let h=!1;c.includes("publicWidgetRouter")&&(h=!0);let w=null,b=null;const C=t.clientY,T=m.getBoundingClientRect(),v=_t(T,C);if(h){w=await ue(Number(g)),b=Mt(m,g,!1,u.elementBelowDrag,v,t);const x=document.getElementById("widgetNameValue");x&&w?.name&&(x.value=w?.name);const W=document.getElementById("widget-builder");W&&w?.name&&(W.textContent="Widget Builder Panel: "+w?.name)}else{const x=await Ce(g,p.token);w=await ue(x?x.widgetId:Number(g));const W=document.getElementById("widgetNameValue");W&&w?.name&&(W.value=w?.name);const M=document.getElementById("widget-builder");M&&w?.name&&(M.textContent="Widget Builder Panel: "+w?.name),w?.children?.length&&await dn(w),b=Mt(m,x?x.widgetId:g,!1,u.elementBelowDrag,v,t)}const y=j.clearDraggedWidget(w);let E=await Le(y,b);y.wrapper=b?.id;const L=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(L){const x=L.id,W=Ge(f?.staticWidgetTree,x);W&&W.children.push(y);const $=document.getElementById(x).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=$?.innerHTML,await je(f.selectedStaticWidgetTreeInfo.widgetTree),Z(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const _=await nt();f.staticWidgetTree.html=_,f.staticWidgetTree?.children?.push(y);const S=f.widgetTree.children.indexOf(y);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[S],isChildWidget:!0,childWidgetIndex:S},await je(y),Z(y,!1,E),j.enableWidgetButtons()}else{let l=function(w,b){document.getElementById("builder-workarea")===w&&(b="inside");let T=Se.generateUUID();const v=Gl(T,u),y=document.createElement("div");y.innerHTML=v;const E=y.firstChild,L=w.parentElement;if(b==="above")L.insertBefore(E,w);else if(b==="below"){const S=w.nextElementSibling;S?L.insertBefore(E,S):L.appendChild(E)}else if(b==="inside"){const S=ia(w,t.clientY);S==null?w.appendChild(E):w.insertBefore(E,S)}t.target.classList.remove("dragging-area");let _=E;u.data_type=="layout"?_.querySelectorAll(".fslayout-col").forEach(x=>{x.classList.add("wb-initial-empty")}):(_.classList.add("wb-initial-empty"),u?.data_type==="img"&&(_?.setAttribute("src","/images/img-placeholder.jpg"),_?.setAttribute("style","width: 200px;"))),_.removeAttribute("element-info-id"),u?.data_type==="img"&&(_?.setAttribute("src","/images/img-placeholder.jpg"),_?.setAttribute("style","width: 200px;"))};const u=JSON.parse(o);let c=Nn(t,u);const d=c?.dropzoneEl;if(c.status){const w=t.clientY,b=d.getBoundingClientRect(),C=_t(b,w);l(d,C)}else alert(c.message);const g=t.target?.parentElement?.closest(".added-widget-container")||t.target?.parentElement?.closest(".edited-widget-container");if(g){const w=g.id,b=Ge(f?.staticWidgetTree,w);if(b){const C=g.querySelector(".mftsccs-marking-element");b.html=C?.innerHTML,await Z(b)}return t.dataTransfer.clearData(),!1}const m=document.querySelector(".content-target"),h=(await We(m,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=h;try{t.dataTransfer.clearData()}catch(w){console.error("error in clearing data",w instanceof Error?w.message:String(w))}return!0}else{const l=V.staticElement,u=t.target;u.classList.remove("dragging-area"),ie?.position==="top"&&u?.children?.length?u.insertBefore(l,ie?.element):ie?.position==="bottom"?ie?.element?.insertAdjacentElement("afterend",l):u.appendChild(l),Bt();const c=await nt();f.staticWidgetTree.html=c}}function ia(t,e){return Array.from(t.children)?.reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY,element:null}).element}function _t(t,e){const n=t.height,a=e-t.top;return a<n*.25?"above":a>n*.75?"below":"inside"}function rr(t){const o=new DOMParser().parseFromString(t,"text/html").body.querySelector("div")?.id,r=document.getElementById(o)?.parentElement?.closest(".added-widget-container"),l=r?.id,u=r?.querySelectorAll(".widget_container_disabled");return u?.length&&u?.forEach(c=>{const d=Se.generateUUID();c.id=`wdgt${d}`}),l?.toString()}async function dn(t){return Array.isArray(t.children)&&t.children.forEach(e=>{Ii(e,t),e.children.length&&dn(e)}),t}function Ii(t,e){const n=t.wrapper,o=new DOMParser().parseFromString(e?.html,"text/html").body,s=o.querySelector(`#${n}`);if(!s)return t;const l=`wdgtcopy${Se.generateUUID()}`;return s.id=l,t.wrapper=l,e.html=o.innerHTML.toString(),t}const lr=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:ln,dragElement:er,dragEndWidgetElement:nr,dragOverWidgetElement:ar,dragStartWidgetElement:tr,dropElement:cn,dropFolderElement:Wi,dropWidgetElement:ir,findChildByWrapper:Ge,getChildWrapperId:rr,getChildrenWrapperId:Ii,getDragAfterElement:ia,getDropType:_t,onDragEnter:Gs,onDragLeave:Qs,onDragOver:Ys,onDragStart:zs,onDrop:Zs,onWidgetDragStart:Js,removeChildByWrapper:Ht,removeElement:Xs,resetDragState:sr,updateAllChildWidgets:dn},Symbol.toStringTag,{value:"Module"})),cr=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],oa=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class ki{constructor(){}async getLayoutListHTML(){return oa.map(n=>`
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
      `).join("")}async getTemplateLayoutsHTML(){const e=await Il();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const n=await k(),a=n?.entityId===101651686||n?.entityId===101279491;return e.map(i=>i.id?`
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
      `:"").join("")}}async function Ce(t,e){let n=new J;n.composition=t,n.fullLinkers=["the_widget_recent","the_widget_latest"],n.inpage=100;let a=new J;a.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],a.inpage=100;const o=await be([n,a],e),r=await Ne(t,"the_widget_recent"),l=o?.data?.the_widget?.the_widget_recent||o?.data?.the_widget?.the_widget_latest||[],u=o?.data?.the_widget?.the_widget_latest||null;if(l.length){const c=l[0],d=c?.data.the_widget.the_widget_name?.[0].data.the_name,g=c?.data.the_widget.the_widget_html?.[0].data.the_html,m=c?.id,p=c?.data.the_widget.the_widget_css?.[0].data.the_css,h=c?.data.the_widget.the_widget_js?.[0].data.the_js,w=c?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,b=c?.data.the_widget.the_widget_version?.[0].data.the_version,C=c?.data.the_widget.the_widget_origin?.[0].data.the_origin|t;return{widgetName:d,widgetHTML:g,widgetCSS:p,widgetJS:h,widgetTimestamp:w,widgetVersion:Number(b||u?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||u.id,origin:Number(C),connectionIdLatest:r,publishedWidgetVersion:u?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const j=(()=>{const t=async()=>{const v=document.getElementById("fslayout-template-container");if(v){v.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const E=await new ki().getTemplateLayoutsHTML();v.innerHTML=E}},e=async()=>{const v=document.getElementById("public-widget-list-container");if(v){const y=await Un();!y||y.trim()===""?v.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:v.innerHTML=y||""}},n=async()=>{const v=document.getElementById("folder-widget-container");if(v){const y=await Wl();!y||y.trim()===""?v.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:v.innerHTML=y||""}},a=async()=>{const v=await Rn();Bn.navbar.setSavedWidgets(v);const y=document.getElementById("saved-widget-list-container");y&&(!v||v.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=v||"")},i=async()=>{const v=await Rn();Bn.navbar.setSavedWidgets(v);const y=document.getElementById("folder-widget-container");y&&(!v||v.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=v||"")},o=async(v,y,E,L,_,S,x)=>{if(L&&!_&&!S||_&&!L&&!S||S&&!x){console.error("creating widget copy argument required.");return}let W=null;W=await ue(v.id);let M=null,$=null,B=[],N=0;S||(M=await Ce(v.id,E),$=M?.origin?M?.origin:v.id,N=M?.widgetVersion?M?.widgetVersion:0,B=M?.connectionIdLatest?M.connectionIdLatest:null);const R={type:_?_.mainWidgetTypevalue:W.type,after_render:_?_.addeventsScript:W.after_render,before_render:_?_.onmountScript:W.before_render,dependency:_?_.dependency:W.dependency,update:_?_.onupdateScript:W.update,mount_child:_?_.mountchildwidgetsScript:W.mount_child,name:S?x:W?.name,html:S?W.html:_?_.widgetHTMLToUpdate:W.html,clean:_?_.widgetCleanHTMLToUpdate:W?.clean,css:_?_.widgetCSSToUpdate:W?.css?.toString(),js:_?_.widgetJSToUpdate:W?.js?.toString(),timestamp:_?_.widgetTimestampToUpdate:new Date().toISOString(),...!S&&{version:N?N+1:1,origin:$}},ne=await O(W.id);let de=W.root!==0?W.root:W.origin;const ae=await O(de||W.id),X=await F("widget",y,R);if(_?.assistant?.id){const z=await F("assistant",y,_?.assistant);await q(X,z,"assistant")}if(_?.library?.css?.length){const z=_?.library?.css;for(let ee=0;ee<z.length;ee++){const ct=await F("css_library",y,z[ee]);await q(X,ct,"s_css_library")}}if(_?.library?.js?.length){const z=_?.library?.js;for(let ee=0;ee<z.length;ee++){const ct=await F("js_library",y,z[ee]);await q(X,ct,"s_js_library")}}if(_?.custom_functions?.length){const z=_?.custom_functions;for(let ee=0;ee<z.length;ee++){const ct=await F("custom_function",y,z[ee]);await q(X,ct,"s_custom_function")}}if(!L&&!_&&S&&W?.children.length&&f.createChildWidget(W.children,X),await q(ae,X,"s_copy"),await q(X,ne,"root"),B&&B.length)for(let z=0;z<B.length;z++)await $e(B[z].id);return await q(ae,X,"recent"),X},s=async v=>{v.stopPropagation();const y=Number(v.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(y){A.infoMessageToast("Deleting your widget from public...",0);const L=await Ne(y,"the_public_widget_s_widget",!0);await $e(L[0].id),await le(y,"the_widget_description"),await le(y,"the_widget_thumbnail"),await le(y,"the_widget_public_name"),await e(),await n(),await a(),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},r=async v=>{v.stopPropagation();const y=prompt("What would you like to name this imported widget?");if(!y||!y.trim())return;const E=Number(v.target.dataset.pubwidid);if(E){A.infoMessageToast("Importing widget...",0);try{const L=document.querySelector(".infoMessageToast"),_=await ue(E);f.widgetTree=_,await f.saveWidget(y),await a(),await i(),L?.remove(),A.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}},l=async v=>{v.stopPropagation();const y=Number(v.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(y){A.infoMessageToast("Deleting your widget from templates...",0);const L=await Ne(y,"the_template_widget_s_widget",!0);await $e(L[0].id),await le(y,"the_widget_template_thumbnail"),await le(y,"the_widget_template_name"),await t(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Removing Failed"),new Error("Removing Failed")}},u=()=>document.querySelector(".content-target").innerHTML.trim()!=="",c=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E&&E.classList.remove("disabled")})},d=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E?E.classList.add("disabled"):console.log("button not found",y)})},g=v=>{const y=document.createElement("div");y.innerHTML=v.html;const E=y.querySelectorAll("div[data-elementid]");return E?.length&&E.forEach(L=>{L.className="widget_container_disabled"}),v.html=y.innerHTML,v.html=v.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,L=>L.replace(/\btrue\b/g,"false").trim()),v.html=v.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,L=>L.replace(/\bhover-element\b/g,"").trim()),v.html=v.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,L=>L.replace(/\bwb-block\b/g,"").trim()),v.html=v.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,L=>L.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),v.html=v.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,L=>L.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),v};async function m(v){try{if(A.infoMessageToast("Updating your widget preference",0),v){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const E=await Ne(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(E.length!==1&&E.length>0)for(let L=1;L<E.length;L++){const _=E[L];await $e(_.id)}if(v){if(!E.length){const L=await O(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const _=await K("use_latest","true",!1,f.userId,999);await q(L,_,"use_latest"),await H.SyncDataOnline()}}else if(E.length>0)for(let L=0;L<E.length;L++){const _=E[L];await $e(_.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await T(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;A.successfullToast("Widget Preference Updated.")}catch(y){throw y}finally{document.querySelector(".infoMessageToast")?.remove()}}async function p(v,y,E){y.checked||E?(v.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(v.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),E||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const h=new Map,w=()=>{const v=document.getElementById("widget-version");if(!v)return;v.innerHTML="",v.classList.remove("d-none"),v.classList.add("d-flex","flex-column","gap-2");const y=document.createElement("div");y.classList.add("d-flex","justify-content-between","align-items-center");const E=document.createElement("label");E.setAttribute("for","widgetVersionValue"),E.textContent="Widget Versions:";const L=document.createElement("div");L.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",L.id="useLtsSwitch";const _=document.createElement("input");_.type="checkbox",_.className="form-check-input",_.id="alwaysUseLTS";const S=document.createElement("label");S.className="form-check-label ms-2",S.setAttribute("for","alwaysUseLTS"),S.textContent="Use LTS",L.appendChild(_),L.appendChild(S),y.appendChild(E),y.appendChild(L);const x=document.createElement("select");return x.name="input-widgetVersionValue",x.id="widgetVersionValue",x.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(v.appendChild(y),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(_.checked=!0,p(x,_,!0)),_.addEventListener("change",async()=>{try{await p(x,_,!1)}catch(W){console.error("useLtsError",W),W instanceof Error&&A.errorToast(W.message),_.checked=!_.checked}})):v.appendChild(E),v.appendChild(x),x},b=()=>{const v=document.getElementById("widget-version");if(!v){console.warn("Widget version container not found");return}const y=document.getElementById("widgetVersionValue");y&&(h.forEach(E=>{y.removeEventListener("change",E)}),h.clear()),v.innerHTML="",v.classList.remove("d-flex"),v.classList.add("d-none")},C=async(v,y,E)=>{try{const L=await k(),_=document.getElementById("widgetVersionValue");_&&h.forEach(N=>{_.removeEventListener("change",N)});const S=w();if(!S){console.error("Failed to create select element");return}const x=await Ce(v,L?.token),W=x?.widgetVersion,M=new Date(x?.widgetTimestamp).toLocaleString();let $=new Date(E).toLocaleString();if($==="Invalid Date"&&($=new Date().toLocaleString()),x){const N=document.createElement("option");N.value="original",N.textContent=`Original ${y==="original"?`(Current) (${$})`:""}`,(!x||!x.publishedWidgetVersion)&&(N.textContent+=" (Published)"),S.appendChild(N);for(let R=0;R<x.widgetVersion;R++){const ne=document.createElement("option");ne.value=`${R+1}`,ne.textContent=`Version ${R+1} ${R+1==Number(y)?"(Current)"+(W===R+1?` (${M})`:` (${$})`):""}`,R+1==Number(y)&&(ne.selected=!0),x.publishedWidgetVersion&&R+1==Number(x.publishedWidgetVersion)&&(ne.textContent+=" (Published)"),S.appendChild(ne)}}else{const N=document.createElement("option");N.value="",N.textContent=`Original (current) (${$})`,N.selected=!0,S.appendChild(N)}if(h.has(v)){const N=h.get(v);S.removeEventListener("change",N),h.delete(v)}const B=T(v,L.entityId);h.set(v,B),S.addEventListener("change",B)}catch(L){console.error("Error initializing widget versions:",L)}},T=(v,y,E)=>{async function L(_){_&&_.preventDefault();let S="";if(E&&E===!0){f.token||await f.getUserDetails();const W=await Ce(v,f.token);W&&(S=W.publishedWidgetVersion)}else{const M=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",y),S=M?.value||""}if(!S)return;if(f.selectedStaticWidgetTreeInfo.isChildWidget)try{let W;if(S==="original"){W=v;const $=await ue(W);M($)}else{let $=new P;$.typeConnection="the_widget_version",$.name="version";let B=new ze;B.type="the_version",B.search=S,B.logicoperator="=",B.name="versionFilter",B.operateon="version",B.composition=!1;const N=new P;N.typeConnection="the_widget_s_copy",N.name="copywidgets",N.freeschemaQueries=[$],N.selectors=["the_widget_name","the_widget_type","the_widget_html","the_widget_css","the_widget_js","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_origin","the_widget_version"];const R=new P;R.conceptIds=[v],R.freeschemaQueries=[N],R.inpage=100,R.filters=[B],R.filterLogic="( versionFilter )",R.outputFormat=se,me(R,"").subscribe(async ne=>{try{const ae=ne?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;if(!ae){A.errorToast("Widget version not found");return}const X=await ue(ae);M(X)}catch(de){console.error("Error in widget version callback:",de),A.errorToast("Error updating widget version")}})}async function M($){const B=JSON.parse(JSON.stringify(f.staticWidgetTree)),R=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,ne={...$,wrapper:R};let de=!1;const ae=z=>{for(let ee=0;ee<z.length;ee++){if(z[ee].wrapper===R){z[ee]=ne,de=!0;break}if(z[ee].children&&z[ee].children.length>0&&(ae(z[ee].children),de))break}};if(ae(B.children),!de){console.error("Could not find child widget to update"),A.errorToast("Failed to update widget");return}f.widgetTree=B,f.selectedStaticWidgetTreeInfo.widgetTree=ne,E&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const X=document.getElementById(R);if(X){X.innerHTML="",await Le(ne,X);let z;S==="original"?z=v:z=$.id,X.setAttribute("data-widgetid",z.toString()),Z(ne,!1),ge(),A.successfullToast("Widget version updated")}}}catch(W){console.error("Error updating child widget version:",W),A.errorToast("Error updating widget version")}else if(S==="original")await Qe(null,v,v),ge();else{let W=new P;W.typeConnection="the_widget_version",W.name="version";let M=new ze;M.type="the_version",M.search=`${S}`,M.logicoperator="=",M.name="versionFilter",M.operateon="version",M.composition=!1;const $=new P;$.typeConnection="the_widget_s_copy",$.name="copywidgets",$.freeschemaQueries=[W],$.selectors=["the_widget_name","the_widget_type"];const B=new P;B.conceptIds=[v],B.freeschemaQueries=[$],B.inpage=100,B.filters=[M],B.filterLogic="( versionFilter )",B.outputFormat=se;let N=0;await me(B,"").subscribe(async R=>{const de=R?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;de?N=de:A.errorToast("widget version not found")}),N&&await Qe(null,N,v)}}return L};return{createWidgetCopy:o,removeMyWidgetFromPublic:s,removeFromTemplate:l,renderSavedWidgets:a,renderBoomWidgets:i,renderPublicWidgets:e,renderTemplateLayouts:t,saveFromPublic:r,checkContent:u,enableWidgetButtons:c,disableWidgetButtons:d,clearDraggedWidget:g,initializeWidgetVersions:C,removeWidgetContainer:b,loadWidgetVersionWith:T}})(),Se=(()=>{const t=async l=>{l.stopPropagation();const u=V?.staticElement;if(u?.classList.contains("content-target"))return;const c=u?.parentElement;if(c&&u){const d=u.previousElementSibling;d?.classList.contains("mftsccs-marking-element")&&d.childNodes.length>1&&alert("insert into marker"),d&&c.insertBefore(u,d)}await n(),Nt(),D.updateActionHistories()},e=async l=>{l.stopPropagation();const u=V?.staticElement;if(u?.classList.contains("content-target"))return;const c=u?.parentElement;if(c&&u){const d=u.nextElementSibling;d&&c.insertBefore(d,u)}await n(),Nt(),D.updateActionHistories()};async function n(){const l=f.widgetTree,u=f.selectedStaticWidgetTreeInfo.widgetTree;function c(g){for(const m of g.children){if(m===u)return g;const p=c(m);if(p)return p}return null}const d=c(l);if(d){let g=null;d.wrapper&&d.wrapper!="0"?g=document.getElementById(d.wrapper):g=document.getElementById("builder-workarea"),d.html=g.innerHTML}else await pe()}function a(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(l){const u=Math.random()*16|0;return(l==="x"?u:u&3|8).toString(16)})}async function i(l,u,c){if(l.childNodes.length){if(l.dataset.widgetid){await cn(null,!0,parseInt(l.dataset.widgetid),l.parentElement?l.parentElement:u),ve(),l.remove();return}l.childNodes.forEach(d=>{i(d,u)})}}return{moveUp:t,moveDown:e,copyElement:async l=>{l.stopPropagation();const u=V.staticElement;if(u?.removeAttribute("draggable"),u.classList.contains("content-target"))return;const c=u?.parentElement,d=u.cloneNode(!0);await i(d,c),d.dataset.widgetid||c.insertBefore(d,u.nextSibling),ve(),await n(),ge(),D.updateActionHistories()},fixContentTargetHeight:(l,u)=>{const c=window.getComputedStyle(u);console.log("wrapper element computed height",c.height,l)},editWidget:async l=>{console.log("event.target",l.target);const u=document.getElementById("edit-widget");u.style.display="none";const d=V.staticElement.closest(".added-widget-container");d.classList.replace("added-widget-container","edited-widget-container");const g=d.querySelectorAll(".widget_container_disabled");g.length&&g.forEach(h=>{h.className="widget_container widget_selected"}),V.staticElement?.removeAttribute("draggable");let m=d.cloneNode(!0);const p=await We(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=p.innerHTML,f.editedWidgets[d.id]=f.selectedStaticWidgetTreeInfo.widgetTree,V.staticElement?.setAttribute("draggable","true"),ve()},generateUUID:a}})();class f{static newWidget=new Ct;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await k();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""},dependency:"",root:0},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const n=document.getElementById("widget-btn-wrapper");n&&n.querySelectorAll("button").forEach(a=>a.disabled=!0),await this.updateOwnerStatus(),this.#e&&n&&n.querySelectorAll("button").forEach(a=>a.disabled=!1)}}catch(n){console.error("error updating widget properties",n)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const n={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},a=await F("widget",this.userId,n),i=await Y(this.entityId);if(await G(i,a,"s_widget"),this.staticWidgetTree?.assistant?.id){const o=await F("assistant",this.userId,this.staticWidgetTree?.assistant);await G(a,o,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let s=0;s<o.length;s++){const r=await F("css_library",this.userId,o[s]);await G(a,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let s=0;s<o.length;s++){const r=await F("js_library",this.userId,o[s]);await G(a,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let s=0;s<o.length;s++){const r=await F("custom_function",this.userId,o[s]);await G(a,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let s=0;s<o.length;s++)await this.createChildWidget(o[s],a)}return await H.SyncDataOnline(),a}static async createChildWidget(e,n){const a={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper,dependency:e?.dependency},i=await F("widget",this.userId,a),o={wrapper:e?.wrapper,type:e?.type,parent:i.id},s=await F("child_widget",this.userId,o);if(await G(n,s,"s_child"),await G(s,i,"info"),e.useLatest&&e.useLatest===!0){const r=await K("use_latest","true",!1,this.userId,999);await G(s,r,"use_latest")}if(e?.library?.css?.length){const r=e?.library?.css;for(let l=0;l<r.length;l++){const u=await F("css_library",this.userId,r[l]);await G(i,u,"s_css_library")}}if(e?.library?.js?.length){const r=e?.library?.js;for(let l=0;l<r.length;l++){const u=await F("js_library",this.userId,r[l]);await G(i,u,"s_js_library")}}if(e?.custom_functions?.length){const r=e?.custom_functions;for(let l=0;l<r.length;l++){const u=await F("custom_function",this.userId,r[l]);await G(i,u,"s_custom_function")}}if(e?.children?.length)for(let r=0;r<e?.children?.length;r++)await this.createChildWidget(e.children[r],i)}static async updateOwnerStatus(){try{const e=await O(this.entityId),n=await O(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id);if((await kn(e,n,"s_widget","the_entity_s_widget")).length||e.userId===n.userId)this.#e=!0;else{const i=await ai(this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(i.length){const o=await O(i[0].id);((await kn(e,o,"s_page","the_entity_s_page")).length||e.userId===o.userId)&&(this.#e=!0)}}}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await O(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),n={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions,dependency:this.staticWidgetTree.dependency},a=await j.createWidgetCopy(e,this.userId,this.token,!0,n);if(this.staticWidgetTree.children.length){const i=this.staticWidgetTree.children;for(let o=0;o<i.length;o++)await this.createChildWidget(i[o],a)}return await H.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},a}catch(e){throw e}}static async savePageWidget(e,n){const a={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:n,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},i=await F("widget",this.userId,a);if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let r=0;r<s.length;r++){const l=await F("css_library",this.userId,s[r]);await G(i,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let r=0;r<s.length;r++){const l=await F("js_library",this.userId,s[r]);await G(i,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let r=0;r<s.length;r++){const l=await F("custom_function",this.userId,s[r]);await G(i,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],i)}const o=await O(e);return await G(o,i,re.PAGE_WIDGET_LINKER),await H.SyncDataOnline(),!0}static async copyPageWidget(e,n,a){const i={after_render:a?.after_render,before_render:a?.before_render,name:n,html:a?.html,css:a?.css,js:a?.js,type:a?.type,timestamp:new Date().toISOString(),dependency:this.staticWidgetTree.dependency},o=await F("widget",this.userId,i);if(a?.library?.css?.length){const s=a?.library?.css;for(let r=0;r<s.length;r++){const l=await F("css_library",this.userId,s[r]);await G(o,l,"s_css_library")}}if(a?.library?.js?.length){const s=a?.library?.js;for(let r=0;r<s.length;r++){const l=await F("js_library",this.userId,s[r]);await G(o,l,"s_js_library")}}if(a?.custom_functions?.length){const s=a?.custom_functions;for(let r=0;r<s.length;r++){const l=await F("custom_function",this.userId,s[r]);await G(o,l,"s_custom_function")}}if(a.children.length){const s=a.children;for(let r=0;r<s.length;r++)await this.createChildWidget(s[r],o)}return await G(e,o,re.PAGE_WIDGET_LINKER),await H.SyncDataOnline(),!0}static async hasWidgetChanged(e){const n=["html","css","js","after_render","before_render","update","mount_child"],a=l=>l?l.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function i(l){let u=0;for(let c=0;c<l.length;c++){const d=l.charCodeAt(c);u=(u<<5)-u+d,u=u&u}return u}const o=(l,u)=>n.some(c=>{const d=a(l[c]),g=a(u[c]),m=i(d),p=i(g),h={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==p?!(d==""||d==h[c]):!1}),s=(l,u)=>l.length!==u.length?!0:l.some((c,d)=>o(c,u[d])||s(c.children,u[d].children)),r={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,root:0};return e?o(this.staticWidgetTree,this.initialWidgetTree)||s(this.staticWidgetTree.children,this.initialWidgetTree.children):o(this.staticWidgetTree,r)||s(this.staticWidgetTree.children,r.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");A.infoMessageToast("Publishing Widget",0);let e=null;const n=await O(this.staticWidgetTree.root||this.staticWidgetTree.origin),a=this.staticWidgetTree.root||this.staticWidgetTree.origin||this.staticWidgetTree.id,i=await Ne(a,"the_widget_latest");if(i&&i.length){for(let s=0;s<i.length;s++)await $e(i[s].id);try{const s=await fetch(ti.NODE_CACHE_URL+`/api/get-latest-widget?id=${n.id}`,{method:"DELETE"});s.ok||console.error("Failed to delete widget from cache server:",s.status)}catch(s){console.log("error removing widget from cache server",s)}}this.staticWidgetTree.origin&&(e=await O(this.staticWidgetTree.id),await G(n,e,"latest"),await H.SyncDataOnline()),await j.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),A.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,n=await Ne(e,"the_widget_latest");n.length&&(n[0].toTheConceptId===this.staticWidgetTree.widgetId?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1);const a=document.getElementById("publish-widget");a&&(a.style.display="block",this.staticWidgetTree.isPublished?(a.textContent="Published",a.disabled=!0,a.style.cursor="not-allowed"):(a.textContent="Publish This Version",a.disabled=!1,a.style.cursor="pointer"))}}var sa=(t=>(t.page="page",t.widget="widget",t))(sa||{});const dr=ms("mftsccs-browser"),ur=`
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
`,mr=`
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
`,gr=`
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
    "mftsccs-browser": "${dr}"
  }
}
`,pr=`
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
`,hr=`
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
`,fr=`
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
  `,yr=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${U.baseURL}",
    baseNodeUrl: "${U.baseNodeUrl}",
    boomURL: "${U.boomURL}",
    aiURL: "${U.aiURL}",
  }
`,wr=`
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
`,un=t=>`
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
`,vr=`
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
`,br=`
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
}`,_r=`
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

`;class mn{async createProject(e,n,a){const i=await F(I.PROJECT_COMP_NAME,n,e),o=await Y(a);return await q(o,i,re.ENTITY_PROJECT_LINKER),i}async getAllProjects(e){return new Promise(async(n,a)=>{const i=await k(),o=new P;o.typeConnection=`the_entity_${re.ENTITY_PROJECT_LINKER}`,o.selectors=[`the_${I.PROJECT_COMP_NAME}_name`],o.name="first",o.inpage=100;const s=new P;s.conceptIds=[e||i.entityId],s.name="second",s.inpage=100,s.freeschemaQueries=[o],s.outputFormat=se,await me(s,"").subscribe(async r=>{const l=r?.[0]?.data?.the_entity?.[`the_entity_${re.ENTITY_PROJECT_LINKER}`];n(l)}).catch(r=>{console.error(r);const l=r?.message;A.errorToast(`${l}`,4),a({error:!0,message:l})})})}async getProjectById(e){const a=(await k())?.token;let i=new J;i.composition=e,i.fullLinkers=[`the_${I.PROJECT_COMP_NAME}_name`,`the_${I.PROJECT_COMP_NAME}_main_page`,`the_${I.PROJECT_COMP_NAME}_${re.PROJECT_PAGE_LINKER}`],i.inpage=100;let o=new J;return o.fullLinkers=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_body`],o.inpage=100,await be([i,o],a)}async updateProjectField(e,n,a){const i=await k(),o=`the_${I.PROJECT_COMP_NAME}_${e}`;await le(a,o);const s=await O(a),r=await K(`${e}`,`${n}`,!1,i.userId,4,999);await q(s,r,e)}async deleteProject(e){try{return await Ae(e),!0}catch(n){return console.error("Failed to delete project:",n),!1}}async addPagesToProject(e,n){try{const a=await O(e);if(!a){console.error("Project not found");return}await le(e,`the_project_${re.PROJECT_PAGE_LINKER}`);for(const i of n){const o=await O(i);if(!o){console.error("Page not found");return}await q(a,o,re.PROJECT_PAGE_LINKER)}await H.SyncDataOnline()}catch(a){console.error("Failed to add page to project:",a)}}async deletePageFromProject(e,n){try{const a=await O(e);if(!a){console.error("Project not found");return}const i=await O(n);if(!i){console.error("Page not found");return}const o=await kn(a,i,"",`the_project_${re.PROJECT_PAGE_LINKER}`);if(!o){console.error("Connection not found");return}await $e(o?.[0]?.id),await H.SyncDataOnline()}catch(a){console.error("Failed to delete page from project:",a)}}async setMainPage(e,n){try{const a=await O(e);if(!a){console.error("Project not found");return}const i=await O(n);if(!i){console.error("Page not found");return}await le(e,"the_project_main_page"),await q(a,i,"main_page"),await H.SyncDataOnline()}catch(a){console.error("Failed to set main page:",a)}}}let he=!1;const Er=async()=>{if(he)return;he=!0;let t=new tn;const e=await gn(t),n=e?.routesDir,a=e?.pagesDir;await Sr(a,n),t.generateAsync({type:"blob"}).then(function(i){let o=document.createElement("a");o.href=URL.createObjectURL(i),o.download="my_files.zip",o.click()}),he=!1},Tr=async t=>{if(he)return;he=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new tn;const a=await gn(n),i=a?.widgetsDir,o=a?.pagesDir;i&&o&&await Cr(t,o,i),a?.routesDir?.file("routes.ts",un(e)),n.generateAsync({type:"blob"}).then(function(s){let r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="my_files.zip",r.click()}),he=!1},gn=async t=>{t.file("index.html",pr),t.file("vite.config.js",ur),t.file(".gitignore",mr),t.file("package.json",gr),t.file("tsconfig.json",fr);let e=t.folder("public");if(!e){console.log("unable to create public folder");return}let n=t.folder("src");if(!n){console.log("unable to create src folder");return}n?.file("app.ts",hr),n?.file("style.css","");let a=n?.folder("environments");if(!a){console.log("unable to create environments folder");return}a?.file("environment.dev.ts",yr);let i=n?.folder("widgets");if(!i){console.log("unable to create widgets folder");return}let o=n?.folder("pages");if(!o){console.log("unable to create pages folder");return}let s=n?.folder("services");if(!s){console.log("unable to create services folder");return}s?.file("widget.service.ts",vr),s?.file("drop.service.ts",br),s?.file("validator.service.ts",_r);let r=n?.folder("routes");if(!r){console.log("unable to create routes folder");return}return r?.file("renderRoute.service.ts",wr),{srcDir:n,pagesDir:o,servicesDir:s,publicDir:e,environmentsDir:a,widgetsDir:i,routesDir:r}},Sr=async(t,e)=>{if(!t&&!e)return;let n=[];const a=await k(),i=a?.entityId,o=a?.token,s=new J;s.composition=i,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new J;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await be([s,r],o);if(l?.data.the_entity?.the_entity_s_page?.length)for(let u=0;u<l?.data.the_entity?.the_entity_s_page?.length;u++){const c=l.data.the_entity.the_entity_s_page[u];let d={page:c?.data?.the_page?.the_page_body?.[0]?.id,title:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:c?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:c?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:c?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:c?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!d.page)continue;const g=`${d.slug.split("-").map((h,w)=>w===0?h.charAt(0).toLowerCase()+h.slice(1):h.charAt(0).toUpperCase()+h.slice(1)).join("")}`;n.push({path:`/${d.slug}`,content:`${g}Index`,importFrom:`/${d.slug}/${d.slug}.index.ts`});let m=t?.folder(d.slug);const p=`
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
`;m?.file(`${d.slug}.index.ts`,p)}e?.file("routes.ts",un(n))},Cr=async(t,e,n)=>{console.log("widgetsDir",n);const i=(await k())?.token,o=await fa(t,i,!0);let s=e?.folder("home");const r=`
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
`;s?.file("home.index.ts",r),o?.css&&s?.file("home.style.css",o?.css)},Lr=async t=>{if(he)return;he=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new tn;const a=await gn(n),i=a?.widgetsDir,o=a?.pagesDir;let s="";i&&o&&(s=await xr(t,o)),a?.routesDir?.file("routes.ts",un(e)),n.generateAsync({type:"blob"}).then(function(r){let l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=`${s||"page"}.zip`,l.click()}),he=!1},xr=async(t,e)=>{const n=await k(),a=n?.entityId,i=n?.token,o=await fa(t,i,!0),s=new J;s.composition=a,s.inpage=100,s.fullLinkers=["the_entity_s_page"];const r=new J;r.inpage=100,r.composition=t,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const u=(await be([s,r],i))?.data?.the_entity?.the_entity_s_page?.filter(p=>p?.id==t),c=u?.[0]?.data?.the_page?.the_page_body?.[0]?.id,d=u?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let g=e?.folder("home");const m=`
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
    `;return g?.file("home.index.ts",m),o?.css&&g?.file("home.style.css",o?.css),d},Ar=async t=>{if(he)return;if(!t){console.log("Project id is required");return}const i=(await new mn().getProjectById(t))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();he=!0;let o=new tn;const s=await gn(o),r=s?.routesDir,l=s?.pagesDir;await Wr(l,r,t),o.generateAsync({type:"blob"}).then(function(u){let c=document.createElement("a");c.href=URL.createObjectURL(u),c.download=`the_${i}.zip`,c.click()}),he=!1},Wr=async(t,e,n)=>{if(!t&&!e)return;let a=[];const o=(await k())?.token,s=new J;s.composition=n,s.inpage=100,s.fullLinkers=["the_project_s_page","the_project_main_page"];const r=new J;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await be([s,r],o),u=l?.data.the_project?.the_project_main_page?.[0]?.id;if(l?.data.the_project?.the_project_s_page?.length)for(let c=0;c<l?.data.the_project?.the_project_s_page?.length;c++){const d=l.data.the_project.the_project_s_page[c];let g={page:d?.id,title:d?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:d?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:d?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:d?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:d?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:d?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!g.page)continue;const m=`${g.slug.split("-").map((w,b)=>b===0?w.charAt(0).toLowerCase()+w.slice(1):w.charAt(0).toUpperCase()+w.slice(1)).join("")}`;a.push({path:`/${g.slug}`,content:`${m}Index`,importFrom:`/${g.slug}/${g.slug}.index.ts`}),g.page==u&&a.push({path:"/",content:`${m}Index`});let p=t?.folder(g.slug);const h=`
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
                }`;p?.file(`${g.slug}.index.ts`,h)}e?.file("routes.ts",un(a))};async function Ir(){const t=new oe("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function kr(){const t=new oe("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await t.initializeEditor()}async function Mi(){await Ir(),await kr(),await bs(),await _s()}function Mr(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function Pi(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function qn(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class $i{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const a=(await k())?.token;ea(),Pi(),document.querySelector("#widget-properties #widget-type input")?.remove(),Mr(),await Mi();let o=ta(),s=await Ce(e,a),r=await ue(s?.widgetId??e),l=await Le(r,o);this.addPageUpdate(e),qn(),f.resetWidgetTree(),f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),Z(r,!1,l,!0),j.enableWidgetButtons(),ln(),ge(),ve()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
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
      `,this.isDroppedDown=!1,this.arrowBtn=n.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=n.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,n){vi(e.css,n?.css),wi(e.after_render),bi(e.before_render)}}class Pr{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
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
    `}}const Oa={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},qa=new Ze,Bi=new $i;async function ra(t){t.preventDefault();try{await qe(),await He();const e=document.getElementById("fspage-save-button"),n=Number(e?.getAttribute("data-pageid")),o="widget_"+(await qa.getPageById(n)).data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_slug`].data.the_slug,s=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Saving page...",0),s?.length&&s.forEach(d=>{const g=d.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),d.classList.remove("edited-widget-container")});const r=await nt();f.staticWidgetTree.html=r,await f.savePageWidget(n,o),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast(Oa.PAGE_SAVE);const c=(await qa.getPageById(n))?.data?.the_page?.the_page_body?.id;return await Bi.LoadPageWidget(c),Oa.PAGE_SAVE}catch(e){ua(e,"There is an error on saving widget")}}async function la(t,e,n){t.preventDefault();const a=document.getElementById("updateFsPagePublish"),i=document.getElementById("updateFsPage"),o=i?.innerHTML||"";try{const s=document.getElementById("updateFsPagexx");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating.."),s&&(s.classList.add("disabled"),s.textContent="Updating..");const r=document.querySelectorAll(".edited-widget-container");A.infoMessageToast("Updating Page...",0),r?.length&&(A.infoMessageToast("Updating page...",0),r.forEach(d=>{const g=d.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),d.classList.remove("edited-widget-container")}));const l=await nt();f.staticWidgetTree.html=l;const u=await f.updateWidget();return console.log("updateWidgetResponse ->",u),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page Updated Successfully"),await Bi.LoadPageWidget(e),n&&n===!0&&await f.publish(),"updated widget successfully!"}catch(s){console.error("error updating page",s),s instanceof Error&&A.errorToast(s.message),document.querySelector(".infoMessageToast")?.remove()}finally{a&&a.classList.remove("disabled"),i&&(i.classList.remove("disabled"),i.innerHTML=o)}}function $r(t){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const n=xc(`/page-preview/${e}`),a=`${window.location.origin.replace(/\/$/,"")}${n}`;window.open(a,"_blank")?.focus()}}function Br(t,e=0){return window.saveWidgetInFolders=jr,`
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
    `}let Sn,gt;async function Nr(t,e){Sn=t;const n=Br(e,typeof t=="object"?0:t),a=document.createElement("div");a.innerHTML=n;const i=a.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(i),await ce("folder-widget-container");const o=await k();if(!o)return;let s,r,u=(await rt(Sn,o.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(s=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),s&&(s.value=u),r=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(s=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),r=document.getElementById("folder-widget-container")?.querySelector("textarea#description"));const c=document.getElementById("widgetFolder");gt=await De(U.folder_widget,c,{widgetName:s.value,widgetDescription:r?.value,widgetId:Sn,showCheckbox:!0,showFiles:!1})}async function jr(t,e,n,a){t.preventDefault(),console.warn("asdfads",gt.selectedConceptIds);let i=[];gt&&gt?.selectedConceptIds?.length>0&&(i=gt.selectedConceptIds||[]);try{A.infoMessageToast("Saving Widget...",0),await qe();const o=document.getElementById("folder-widget-container"),s=o?.querySelector('button[type="submit"]');s.textContent="Saving";const r=o?.querySelector("input"),l=o?.querySelectorAll("button"),c=(document.getElementById("save-to-folder-name")||document.getElementById("folder-name")).value;l&&l.forEach(T=>{T.disabled=!0}),r&&(r.disabled=!0),await He();let d;if(!a){V.staticElement?.removeAttribute("draggable");const T=document.querySelectorAll(".edited-widget-container");T?.length&&T.forEach(async E=>{if(E.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[E.id]){const L=await We(E,"div.mftsccs-marking-element");f.editedWidgets[E.id].html=L.innerHTML}});const v=await Ui();f.staticWidgetTree.html=v;const y=await f.saveWidget(c);d=await Y(y.id),n=d.id}const g=await k(),m=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,p=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,h={title:m,source_url:window.location.href,widget_id:n,short_desc:p,note:"",data_type:"widget",created_on:Date.now()};if(i.length==0){const T=g?.userConcept;d=await Y(Number(n));let v={...h,boom_folder:{name:"",parent:T}};const y=await Ue({boomgpt:v},void 0,void 0,void 0,g.userId,4);await Aa(await Y(Number(T)),y,"the_boom_folder_s_contain"),await G(y,d,"the_refer")}else if(i?.length>0)for(let T=0;T<i.length;T++){const v=i[T];d=await Y(Number(n));const y=await Y(Number(v));if(!y)throw new Error("Selected folder concept not found!");let E={...h,boom_folder:{name:y.name||"",parent:v}};const L=await Ue({boomgpt:E},void 0,void 0,void 0,g.userId,4);await Aa(await Y(Number(v)),L,"the_boom_folder_s_contain"),await G(L,d,"the_refer")}await H.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),_e("folder-widget-container"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),a||(await j.renderSavedWidgets(),Qe(t,Number(n)))}catch(o){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),ua(o,"There is an error on saving widget")}}class Ni extends Ct{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";environmentSelector="";_pageBuilderService;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const n=k();if(n&&(this.environmentSelector=`
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
    `,e){this.the_params=e,this._pageBuilderService=new $i;const a=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+a:"Widget Builder";const i=this.the_params?.page_id;n&&e.type==sa.page&&(this.saveBoomButtonHTML=`
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
`}before_render(){this.render()}after_render(){if(this.the_params){document.getElementById("fspage-save-button").addEventListener("click",ra);const n=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!n){ln();return}this._pageBuilderService.LoadPageWidget(Number(n))}}getHtml(){return window.openSaveWidgetModal=pa,window.saveWidget=Ri,window.updateWidget=ha,window.newWidget=Re,window.previewWidget=Zr,window.downloadWebsite=Er,window.moveUp=Se.moveUp,window.moveDown=Se.moveDown,window.copyElement=Se.copyElement,window.editWidget=Se.editWidget,window.openConvertModal=tl,window.convertToWidget=Xr,window.updatePage=la,window.previewPage=$r,window.undoAction=D.undoAction,window.redoAction=D.redoAction,window.saveWidgetToFolderBtn=Nr,window.openPromptModal=js,window.openAIModal=Ci,window.refineAIData=Hn,`
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
    `}}function ji(){H.conceptsSyncArray=[],H.connectionSyncArray=[]}class Dr{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let n="",a="";return this.props.id==="fs-create-page-modal"?a=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?a=this.editPageModal():this.props.id==="create-project-modal"?(a=this.createNewProjectModal(),n="m-large"):this.props.id==="add-pages-project"&&(a=this.addPagesModalHtml(),n="m-large"),e.innerHTML=`
      <div class="m-content ${n}">
        <div id="closeModalBtn" class="close-modal">
            <img src="./images/icons/cross-close.svg" alt="" class="icon" />
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
    `}}function qt(t){new Dr(t)}function Fa(t){const e=document.getElementById(t);e&&e.remove()}class ca{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new fi,this._pagesTSCCSService=new Ze}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),n=document.getElementById("saved-page-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-page-button");a?.removeEventListener("click",this.createButtonClickHandler),a?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(r=>{r.removeEventListener("click",this.deletePageButtonClickHandler),r.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(r=>{r.removeEventListener("click",this.editPageButtonClickHandler),r.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(r=>{r.removeEventListener("click",this.duplicatePageButtonClickHandler),r.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(a=>a.remove())}createButtonClickHandler=()=>{qt({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const n=document.getElementById("fs-create-page-form"),a=n?.elements.namedItem("title");if(!a){console.error("page_title not found");return}const i=async()=>{const s=await this._pagesTSCCSService.generateSlug(a.value);n.elements.namedItem("slug")?.setAttribute("value",s)};a.addEventListener("keyup",i);const o=()=>{a.removeEventListener("keyup",i),document.getElementById("fs-create-page-modal")?.removeEventListener("close",o)};document.getElementById("fs-create-page-modal")?.addEventListener("close",o)};savePageButtonClickHandler=async()=>{const n=document.getElementById("fs-create-page-form").elements;if(!n.title.value){n.title.style.borderColor="red";return}A.infoMessageToast("Creating page...",0);const a=await $n(n),i=await k();await this._pagesTSCCSService.savePage(a,i?.userId,i?.entityId),await H.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),Fa("fs-create-page-modal"),setTimeout(()=>{A.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;qt({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:a,slug:i}});const o=document.getElementById("fs-edit-page-form"),s=o?.elements.namedItem("title");if(!s){console.error("page_title not found");return}const r=async()=>{document.getElementById("fs-edit-page-button")?.removeAttribute("disabled");const d=await this._pagesTSCCSService.generateSlug(s.value);o.elements.namedItem("slug")?.setAttribute("value",d)};s.addEventListener("keyup",r);const l=()=>{s.removeEventListener("keyup",r),document.getElementById("fs-edit-page-modal")?.removeEventListener("close",l)};document.getElementById("fs-edit-page-modal")?.addEventListener("close",l),document.getElementById("fs-edit-page-button")?.addEventListener("click",()=>this.updatePageButtonClickHandler(n))};async PageInputElementChangeHandler(e,n){const a=e.target,i=a.name,o=a.value;let s=await this._pagesTSCCSService.checkSlugAvailablity(o);if(i==="slug"&&!s){document.getElementById("fs-update-page-button")?.setAttribute("disabled","true"),a.style.borderColor="red",a.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(a.getAttribute("name"),a.value,Number(n))}updatePageButtonClickHandler=async e=>{const n=document.getElementById("fs-edit-page-form"),a=n.elements.namedItem("title");if(!a.value.trim()){a.style.borderColor="red";return}const i=n.elements;if(!i.title.value){i.title.style.borderColor="red";return}A.infoMessageToast("Renaming page...",2);const o=await $n(i),s=await k();await this._pagesTSCCSService.renamePage(o,e,s?.userId),await H.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page renamed successfully");const l=new URLSearchParams(window.location.search).get("page-id");if(e===l){const u=document.getElementById("widget-builder");u.textContent=`Page Builder: ${o?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),Fa("fs-edit-page-modal")};deletePageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${a}" with the slug "${i}"?`)?(A.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(n)),await H.SyncDataOnline(),bo("/"),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const a=e?.target?.getAttribute("data-id"),o=(await this._pagesTSCCSService.getPageById(Number(a)))?.data?.the_page,s=o?.the_page_title?.data?.the_title?.trim()+" copy",r=o?.the_page_slug?.data?.the_slug?.trim()+"-copy",l=o?.the_page_meta_title?.data?.the_meta_title?.trim(),u=o?.the_page_meta_description?.data?.the_meta_description?.trim(),c=o?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),d=o?.the_page_width?.data?.the_width?.trim(),g=o?.the_page_type?.data?.the_type?.trim(),m=o?.the_page_font_family?.data?.the_font_family?.trim(),p=o?.the_page_font_size?.data?.the_font_size?.trim(),h={title:s,slug:r,meta_title:l,meta_description:u,meta_keywords:c,width:d,type:g,font_family:m,font_size:p},w={};for(const[E,L]of Object.entries(h))L&&(w[E]=L);const b=o?.the_page_body?.id,C=await k(),T=await Ce(b,C?.token);let v=await ue(T?T.widgetId:b);const y=await this._pagesTSCCSService.savePage(w,C?.userId,C?.entityId);await f.copyPageWidget(y,`widget_${r}`,v),this.initPagesSidebar(),A.successfullToast("Page duplicated successfully")}}async function Hr(t){t?.preventDefault();const e=window.location.href,a=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(a))){await $t("Do you want to save changes?")&&(e.includes("?page-id=")?a?await la(t,Number(a)):await ra(t):a?await ha(t,Number(a)):await pa());const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}f.resetWidgetTree();const o=t.target.getAttribute("data-pageId");It(`?page-id=${o}`);let r=await new Ze().getPageById(Number(o));r?.error&&Re();const l=document.getElementById("midContent"),u=document.getElementById("right-aside"),c={type:sa.page,data:r.data?.[`the_${I.PAGE_COMP_NAME}`],page_id:o},d=new Ni(c),g=new hn(c);u.innerHTML=await g.getHtml(),l.innerHTML="",d.mount(l),gs.resetNavigationBar()}class Di{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new mn,this._pagesTsccsService=new Ze}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(a=>{let o=a?.data?.[`the_${I.PROJECT_COMP_NAME}`]?.[`the_${I.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
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
    `,document.querySelector("body #app")?.appendChild(n),ce("create-project-dialog"),"Create Project Modal"}async renameProjectModal(e,n){document.getElementById("rename-project-dialog")?.remove();const i=document.createElement("dialog");return i.setAttribute("id","rename-project-dialog"),i.classList.add("col-md-3"),i.innerHTML=`
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
    `,document.querySelector("body #app")?.appendChild(i),ce("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const n=await this._projectsService.getProjectById(e),a=n?.data?.the_project?.[`the_project_${re.PROJECT_PAGE_LINKER}`],i=n?.data?.the_project?.the_project_main_page?.[0]?.id;return a?.length?a?.map(s=>{let r=s?.data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const l=i==s.id,u=l?'<span class="material-symbols-outlined home-icon">home</span>':"",c=l?"":`<li class="d-flex align-items-center justify-content-between" 
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
      `,document.body.appendChild(n),n.showModal(),n}catch(n){return console.error("Error:",n),""}}}const da=async t=>{let e="default",n={},a=null,i=null,o=null;if(t){let p=new P;p.typeConnection="the_project_environment",p.selectors=["the_environment_name","the_environment_value"];let h=new P;h.conceptIds=[t],h.freeschemaQueries=[p],h.outputFormat=se;let w=await Pe(h,"");for(let b=0;b<w.length;b++){let C=w[b]?.data?.the_project;if(C){let v=C?.the_project_environment?.data?.the_environment;if(v){a=C?.the_project_environment?.id,e=v?.the_environment_name?.data?.the_name||"default",i=v?.the_environment_name?.id,o=v?.the_environment_value?.id;let y=v?.the_environment_value?.data?.the_environment_value;if(y)try{n=JSON.parse(y)}catch(E){console.error("Error parsing environment values",E),n={}}}}}}const s="environment-editor-modal";document.getElementById(s)?.remove();const l=document.createElement("dialog");l.setAttribute("id",s),l.classList.add("col-md-8"),l.style.maxWidth="800px",l.innerHTML=`
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

      ${t?`
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
  `,document.querySelector("body #app")?.appendChild(l),await ce(s);const u=document.getElementById("environment-editor-container");if(!u)return;const c=Zn(p=>{const h=[],w=p.state.doc.toString();try{JSON.parse(w)}catch(b){const C=b,T=C.message.match(/position (\d+)/),v=T?parseInt(T[1]):0;h.push({from:Math.max(0,v-1),to:Math.min(w.length,v+1),severity:"error",message:C.message})}return h});let d=null;d=new te({doc:JSON.stringify(n,null,2),extensions:[it,ot,Zt(),Kn(),c,te.lineWrapping,xe.tabSize.of(2)],parent:u}),document.getElementById("format-json-btn")?.addEventListener("click",()=>{try{const p=d?.state.doc.toString()||"{}",h=JSON.parse(p),w=JSON.stringify(h,null,2);d?.dispatch({changes:{from:0,to:d.state.doc.length,insert:w}}),alert("JSON formatted successfully!")}catch(p){alert("Invalid JSON: "+p.message)}});const m=document.getElementById("save-environment-btn");m?.addEventListener("click",async()=>{try{m.disabled=!0,m.textContent="Saving...";const h=document.getElementById("environment-name-input")?.value?.trim()||"default";if(!h){alert("Environment name is required"),m.disabled=!1,m.textContent="Save";return}const w=document.getElementById("save-to-entity-checkbox"),b=t?w?.checked||!1:!0,C=d?.state.doc.toString()||"{}";let T;try{T=JSON.parse(C)}catch(S){alert("Invalid JSON: "+S.message),m.disabled=!1,m.textContent="Save";return}const v=await new Kt;await v.initialize();let y;a?(console.log("Editing existing environment:",a),y=await O(a),i&&await le(a,"the_environment_name"),o&&await le(a,"the_environment_value")):(console.log("Creating new environment"),y=await v.MakeTheInstanceConceptLocal("the_environment","",!0,999,4));const E=await v.MakeTheInstanceConceptLocal("the_name",h,!0,999,4),L=await v.MakeTheInstanceConceptLocal("the_environment_value",JSON.stringify(T),!0,999,4);if(await v.CreateConnection(y,E,"the_environment_name"),await v.CreateConnection(y,L,"the_environment_value"),t&&!a){const S=await O(t);await v.CreateConnection(S,y,"the_project_environment")}if(b)try{const x=(await k())?.entityId;if(x){const W=await O(x);await v.CreateConnection(W,y,"the_entity_s_environment"),console.log(`Environment saved to entity ${x}`)}else console.warn("Entity ID not found in profile data. Environment not saved to entity.")}catch(S){console.error("Error saving to entity:",S)}await v.commitTransaction();try{const{refreshEnvironmentDropdown:S}=await fe(async()=>{const{refreshEnvironmentDropdown:x}=await Promise.resolve().then(()=>wo);return{refreshEnvironmentDropdown:x}},void 0);await S()}catch(S){console.log("Could not refresh environment dropdown:",S)}let _="Environment variables saved successfully!";t?b&&(_+=" (Also saved to your entity)"):_+=" (Saved to your entity)",alert(_),m.disabled=!1,m.textContent="Save",window.closeModal(s)}catch(p){console.error("Error saving environment:",p),alert("Failed to save environment variables: "+p),m.disabled=!1,m.textContent="Save"}})},Or=async(t,e,n,a,i)=>{const o="environment-editor-modal";document.getElementById(o)?.remove();const r=document.createElement("dialog");r.setAttribute("id",o),r.classList.add("col-md-8"),r.style.maxWidth="800px",r.innerHTML=`
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
          value="${t}"
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
  `,document.querySelector("body #app")?.appendChild(r),await ce(o);const l=document.getElementById("environment-editor-container");if(!l)return;const u=Zn(m=>{const p=[],h=m.state.doc.toString();try{JSON.parse(h)}catch(w){const b=w,C=b.message.match(/position (\d+)/),T=C?parseInt(C[1]):0;p.push({from:Math.max(0,T-1),to:Math.min(h.length,T+1),severity:"error",message:b.message})}return p});let c=null;c=new te({doc:JSON.stringify(e,null,2),extensions:[it,ot,Zt(),Kn(),u,te.lineWrapping,xe.tabSize.of(2)],parent:l}),document.getElementById("format-json-btn")?.addEventListener("click",()=>{try{const m=c?.state.doc.toString()||"{}",p=JSON.parse(m),h=JSON.stringify(p,null,2);c?.dispatch({changes:{from:0,to:c.state.doc.length,insert:h}}),alert("JSON formatted successfully!")}catch(m){alert("Invalid JSON: "+m.message)}});const g=document.getElementById("save-environment-btn");g?.addEventListener("click",async()=>{try{g.disabled=!0,g.textContent="Saving...";const p=document.getElementById("environment-name-input")?.value?.trim()||"default";if(!p){alert("Environment name is required"),g.disabled=!1,g.textContent="Save Changes";return}const h=c?.state.doc.toString()||"{}";let w;try{w=JSON.parse(h)}catch(y){alert("Invalid JSON: "+y.message),g.disabled=!1,g.textContent="Save Changes";return}const b=await new Kt;await b.initialize();let C;n?(console.log("Editing existing environment:",n),C=await O(n),a&&await le(n,"the_environment_name"),i&&await le(n,"the_environment_value")):(console.log("Creating new environment"),C=await b.MakeTheInstanceConceptLocal("the_environment","",!0,999,4));const T=await b.MakeTheInstanceConceptLocal("the_name",p,!0,999,4),v=await b.MakeTheInstanceConceptLocal("the_environment_value",JSON.stringify(w),!0,999,4);if(await b.CreateConnection(C,T,"the_environment_name"),await b.CreateConnection(C,v,"the_environment_value"),!n){const E=(await k())?.entityId;if(E){const L=await O(E);await b.CreateConnection(L,C,"the_entity_s_environment")}}await b.commitTransaction();try{const{refreshEnvironmentDropdown:y,saveEnvironmentToStorage:E}=await fe(async()=>{const{refreshEnvironmentDropdown:L,saveEnvironmentToStorage:_}=await Promise.resolve().then(()=>wo);return{refreshEnvironmentDropdown:L,saveEnvironmentToStorage:_}},void 0);if(await y(),n){const _=(window.__allEnvironments||[]).findIndex(S=>S.id===n);_!==-1&&(E(w,_),console.log(`Updated environment "${p}" in RAM and localStorage`))}}catch(y){console.log("Could not refresh environment dropdown:",y)}alert("Environment variables updated successfully!"),g.disabled=!1,g.textContent="Save Changes",window.closeModal(o)}catch(m){console.error("Error saving environment:",m),alert("Failed to save environment variables: "+m),g.disabled=!1,g.textContent="Save Changes"}})},qr=Object.freeze(Object.defineProperty({__proto__:null,createEnvironmentEditor:da,createEnvironmentEditorWithData:Or},Symbol.toStringTag,{value:"Module"}));function Fr(t,e=[],n=[]){return`
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

    `}const Vr=async t=>{if(!t){console.log("Project id is required");return}const e=new mn;let[n,a]=await Promise.all([e.getProjectById(t),ri(t)]);console.log("project detail",n),console.log("abc menus ",a);const i=n?.data?.the_project?.the_project_main_page?.[0]?.id??0,o=n?.data?.the_project?.the_project_s_page?.map(c=>({id:c.id,name:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:c?.id==i}))??[];console.log("pages",o),document.getElementById("project-setting-dialog")?.remove();const r=document.createElement("dialog");r.setAttribute("id","project-setting-dialog"),r.classList.add("col-md-8"),r.style.flexDirection="column",r.innerHTML=Fr(t,o),document.querySelector("body #app")?.appendChild(r),await ce("project-setting-dialog"),document.querySelectorAll(".accordion-header").forEach(c=>{c.addEventListener("click",async()=>{c.classList.toggle("active");const d=c.getAttribute("id");if(c.classList.contains("active"))switch(d){case"domain-viewer-btn":const g=document.getElementById("custom-domain-view-holder"),m=await ai(t,"the_project_custom_url");g&&De(102462726,g,{projectId:t,storeUrl:`https://preview-${t}.develop.freeschema.com`,customUrl:m?.[0]?.data?.the_custom_url||""});break}else switch(d){case"domain-viewer-btn":const g=document.getElementById("custom-domain-view-holder");g&&(g.innerHTML="");break}})}),dt(a);const l=document.getElementById("save-menu-items");l?.addEventListener("click",async c=>{l&&(l.disabled=!0),console.log("menus save",a),a=a.map(g=>(delete g.edit,g)),console.log("menus filtered save",a),c.target.disable=!0;const d=await Ro(t,a);console.log("menu created",d),c.target.disable=!1,dt(a),alert("Updated Menu"),l&&(l.disabled=!1),Hi(t)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",c=>{const d=c.target.closest(".custom-menu-item"),g=d?.querySelector("#nameElem"),m=d?.querySelector("#linkElem"),p=d?.querySelector("#actionElem"),h=d?.querySelector("#authElem");if(!g.value){alert("Menu Name is required");return}if(!m.value&&!p.value){alert("Link or Action is required");return}a.push({name:g.value??"",link:m.value??"",action:p.value??"",page:"",order:a.length,auth:!!h.checked,menus:[]}),g.value="",m.value="",p.value="",h.checked=!1,dt(a)}),window.handleMenuAction=(c,d,g,m)=>{if(d=="remove")if(m){const p=document.getElementsByClassName("selected-menu-page");for(let h=0;h<p.length;h++){const w=p[h];Number(w.getAttribute("data-page-id"))==m&&w?.checked&&w.click()}}else a.splice(g,1)[0];else if(d=="edit")a[g].edit=!0;else if(d=="cancel")a[g].edit=!1;else if(d=="update"){a[g].edit=!1;const p=c?.target?.closest("li"),h=p?.querySelector("#menuName").value??"",w=p?.querySelector("#menuLink").value??"",b=p?.querySelector("#menuAction").value??"",C=!!p?.querySelector("#menuAuth").checked;a[g].name=h,a[g].link=w,a[g].action=b,a[g].auth=C}else if(d=="up"){const p=a.splice(g,1)[0];a.splice(g-1,0,p),a=a.map((h,w)=>({...h,order:w}))}else if(d=="down"){const p=a.splice(g,1)[0];a.splice(g+1,0,p),a=a.map((h,w)=>({...h,order:w}))}else console.warn("unacceptable action ",d);dt(a)},document.querySelectorAll(".selected-menu-page").forEach(c=>{c.addEventListener("change",d=>{console.log("e.target.changed",d.currentTarget.checked);const g=parseInt(d.currentTarget.getAttribute("data-page-id"));if(d.currentTarget.checked){const m=o.find(p=>p.id==g);console.log("pages",m,o),a.push({name:m.name??"",link:m.slug??"",action:"",page:m.id??"",order:a.length,auth:!1,menus:[]})}else{const m=(p,h)=>{for(let w=0;w<p.length;w++){const b=p[w];b.menus&&b.menus.length>0&&(b.menus=m(b.menus,h))}return p.filter(w=>w.page!=h)};a=m(a,g)}dt(a)})}),document.getElementById("open-environment-editor-btn")?.addEventListener("click",()=>{da(t)})},Hi=t=>{const e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");const n=new URLSearchParams;n.append("invalidDomain","www.sleepinghats.com"),n.append("projectId",`${t}`);const a={method:"POST",headers:e,body:n,redirect:"follow"};fetch(`${U.deployURL}/api/project-deploy/invalidate`,a).then(i=>i.text()).then(i=>console.log("result -->",i)).catch(i=>console.error(i))};class Oi{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new Di,this._projectsTSCCSService=new mn,this._pagesTSCCSService=new Ze}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),n=document.getElementById("saved-project-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-project-button");a?.removeEventListener("click",this.createProjectHandler),a?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(r=>{r.removeEventListener("click",this.getProjectPagesListHandler),r.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(r=>{r.removeEventListener("click",this.addPageToProjectHandler),r.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(r=>{r.removeEventListener("click",this.deleteProjectHandler),r.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=Ar,window.showProjectSetting=Vr,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{qt({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,n)=>{try{const o=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",o,n),await H.SyncDataOnline(),this.initProjectsSidebar()}catch(a){console.error("Failed to rename project:",a)}};getProjectPagesListHandler=async e=>{const n=e.target.dataset.projectid,a=e.target.parentElement.querySelector(".project-pages-list");if(a){if(!a.classList.contains("d-none")){a.classList.add("d-none");return}a.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,a.classList.remove("d-none");const i=await this._projectsHTMLService.getProjectPagesListHTML(n);a.innerHTML=i}};deleteProjectHandler=async e=>{try{let n=e.target.dataset.projectid;n||(n=e.target.parentElement.dataset.projectid),await $t("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(n),await H.SyncDataOnline(),A.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(n){console.error("Failed to delete project:",n),A.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,n)=>{try{let a=e.target.parentElement.parentElement.dataset.projectid;await $t("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(a,n),await H.SyncDataOnline(),this.initProjectsSidebar())}catch(a){console.error("Failed to delete page from project:",a)}};setMainPageHandler=async(e,n)=>{e.preventDefault(),e.stopPropagation();try{let a=e.target.closest(".project-page-item").dataset.projectid;A.infoMessageToast("Setting page as main page...",0);const i=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(a,n),await H.SyncDataOnline();const o=await this._projectsHTMLService.getProjectPagesListHTML(a),s=e.target.closest(".project-pages-list");s&&(s.innerHTML=o,s.classList.remove("d-none")),i?.remove(),A.successfullToast("Main page set successfully!")}catch(a){console.error("Failed to set main page:",a),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),qt({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const n=e.target.previousElementSibling.dataset.projectid,i=(await this._projectsTSCCSService.getProjectById(n))?.data?.the_project?.[`the_project_${re.PROJECT_PAGE_LINKER}`];let o=i?i.map(r=>({id:r.id,title:r?.data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const s=document.getElementById("add-pages-project");await this.addPageToProject(s,!1,n,o)}catch(n){console.error("Failed to add page to project:",n)}};addPageToProject=async(e,n,a,i=[])=>{try{const o=await this._pagesTSCCSService.getAllPages(),s=o?o.map(m=>({id:m.id,title:m?.data?.[`the_${I.PAGE_COMP_NAME}`]?.[`the_${I.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const r=e.querySelector("#selectedItems"),l=e.querySelector("#options"),u=(m="")=>{if(!s.length){l.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let p=s.filter(h=>h.title.toLowerCase().includes(m.toLowerCase()));c(),l.innerHTML=p.length?p.map(h=>`
            <li class="option" data-value="${h.id}">
              <input type="checkbox" id="page-${h.id}" ${i?.some(w=>w.id.toString()===h.id.toString())?"checked":""} />
              <span>${h.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},c=()=>{i&&i.length?r.innerHTML=i.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):r.innerHTML="<span>No pages selected!</span>"},d=(m,p)=>{i.push({id:m,title:p}),c()},g=m=>{i=i.filter(p=>p.id.toString()!==m.toString()),c()};r.addEventListener("click",m=>{const p=m.target;if(p.classList.contains("remove-item")){const h=p.closest(".selected-page");h&&g(h.dataset.value)}}),l.addEventListener("click",m=>{const p=m.target.closest(".option");if(!p)return;const h=p.querySelector("input[type='checkbox']");h&&(m.target!==h&&(h.checked=!h.checked),h.checked?d(p.dataset.value,p.querySelector("span").textContent.trim()):g(p.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(n&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){A.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),p=e.querySelector("#closeModal");m.disabled=!0,p.disabled=!0;const h=m.textContent;m.textContent="Adding...",A.infoMessageToast("Adding pages to project...",0);try{const w=i.map(y=>Number(y.id));if(!w.length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}if(n){this.addPageToProjectHandler();const E=document.getElementById("create-project-form").elements,L=$n(E),_=await k(),S=await this._projectsTSCCSService.createProject(L,_?.userId,_?.entityId);await H.SyncDataOnline(),a=(await Y(S.ghostId)).id}if(!a){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Project ID not found."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}await this._projectsTSCCSService.addPagesToProject(a,w);const b=await this._projectsHTMLService.getProjectPagesListHTML(a),T=document.getElementById(`dropdown-menu-${a}`)?.nextElementSibling;T&&(T.innerHTML=b,T.classList.remove("d-none")),Hi(a),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to add pages to prjects"),m.disabled=!1,p.disabled=!1,p.textContent=h}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const p=m.target;u(p.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{u()}),c()}catch(o){console.error("Failed to add page to project:",o)}}}const xt=(()=>{const t=()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})};return{toggle:s=>{const r=s.target,l=r?.dataset?.id;if(r.classList.contains("activeNavigationIcon")){t();return}if(l){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const d=document.getElementById(l);document.querySelector(`[data-id='${l}']`)?.classList.add("activeNavigationIcon"),d?.classList.add("navActive"),l=="fs-all-pages-list"&&new ca().initPagesSidebar(),l=="fs-all-projects-list"&&new Oi().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})},checkForActiveNavigation:()=>{const s=document.querySelector(".activeNavigationIcon");if(s){const r=s.dataset?.id||"";document.getElementById(r)?.classList.remove("navActive")}},resetNavigationBar:t,disableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="none",s.style.pointerEvents="none",s.style.opacity="0"},enableNavbar:()=>{const s=document.getElementById("column-left");s.style.display="block",s.style.pointerEvents="all",s.style.opacity="1"}}})(),yt=(()=>{const t=()=>{const i=document.querySelector("#profileDropdown");if(i.style.display&&i.style.display=="block"){e();return}i?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:t,closeUserActionModel:e,disableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="none",i.style.pointerEvents="none",i.style.opacity="0"},enableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="flex",i.style.pointerEvents="all",i.style.opacity="1"}}})(),A=(()=>{let t=0;const e=()=>{const l=document.createElement("span");return l.innerText="close",l.classList.add("material-symbols-outlined"),l.classList.add("crossButtonToast"),l.addEventListener("click",u=>{u.target instanceof HTMLElement&&u.target.parentNode instanceof HTMLElement&&console.log(u.target.parentNode.remove())}),l},n=l=>{const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("successFullToast");const d=document.createElement("span");d.classList.add("material-symbols-outlined"),d.innerText="check_circle";const g=document.createElement("span");g.innerText=l,c.appendChild(d),c.appendChild(g),c.appendChild(e()),u.appendChild(c),t=t+.5,o(c)},a=(l,u=1)=>{t=0;const c=document.querySelector("#toasterContainer");c.style.display="flex";const d=document.createElement("div");d.classList.add("infoMessageToast","bg-info");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="info";const m=document.createElement("span");m.innerText=l,d.appendChild(g),d.appendChild(m),d.appendChild(e()),c.appendChild(d),u!=0&&(t=t+.5+(u||0),o(d))},i=(l,u)=>{t=0;const c=document.querySelector("#toasterContainer");c.style.display="flex";const d=document.createElement("div");d.classList.add("failureToast");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="error";const m=document.createElement("span");m.innerText=l,d.appendChild(g),d.appendChild(m),d.appendChild(e()),c.appendChild(d),t=t+.5+(u||0),o(d)},o=l=>{l.style.animation=`animateToastMessage ${2+t}s forwards`,l.addEventListener("animationend",()=>{l.remove();const u=document.querySelector("#toasterContainer");u.innerHTML||(t=0,u.style.display="none")}),l.addEventListener("mouseenter",()=>{s()}),l.addEventListener("mouseleave",()=>{r()})},s=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(u=>{u.style.animationPlayState="paused"})},r=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(u=>{u.style.animationPlayState="running"})};return{successfullToast:n,infoMessageToast:a,errorToast:i}})();async function qe(){const t=await k(),e=t?.entityId,n=t?.token,a=t?.userId,i=t?.userConcept,s=(await Y(e)).typeCharacter;let r=!1,l;const u=new P;u.conceptIds=[e],u.selectors=["the_entity_user"],u.outputFormat=se,u.inpage=100,await me(u,n)?.subscribe(g=>{l=g});const c=l?.[0]?.data?.the_entity?.the_entity_user?.id;if(Number(c)===Number(i)&&(r=(await Y(i))?.userId===a),!r||!s||s!=="the_entity"||!n||n.trim()===""||!a)throw setTimeout(()=>Me(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function Rr(t){try{const e=await Ne(t,"the_entity_s_widget",!0);e.length?await $e(e[0].id):A.errorToast("already deleted")}catch(e){console.error(e)}}async function ua(t,e="Error"){console.error(t);const n=t;n&&(A.errorToast(n?.message?n.message:e),n.status===401&&Me())}let ye=[],ke=Xn;async function ma(t){const e=document.getElementById("selected_attr_list"),n=document.querySelector(".row.attribute_single");ye=[],ke=Xn,e&&(e.innerHTML=""),n?.remove(),await _e(t),t==="update-element-dialog"&&document.getElementById(t)?.remove()}async function Gc(t,e){if(t.preventDefault(),!(await Te.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(t.target),i=Object.fromEntries(a),o=t.target.querySelector("[name='name']"),s=t.target.querySelector("[name='tag']");let r=!0;if(i?.name?.trim()?o.style.border="":(r=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),i?.tag?.trim()?s.style.border="":(r=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),!r)return;const u=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');u.textContent="Creating...";const c=t?.target;for(let m=0,p=c?.length;m<p;++m)c[m].disabled=!0;const d=await qi(a,null);for(let m=0,p=c?.length;m<p;++m)c[m].disabled=!1;await _e(e);const g=await pn();if(d){const m=document.getElementById("created-elements");m?!g||g.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=g||"":console.error("Widget list container not found in the DOM.")}return d}async function qi(t,e){const n=Object.fromEntries(t);delete n.attributes;const i=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let o=[];if(i.forEach(s=>{const r=s?.textContent?.split(" "),l=r[0],u=r[1].substr(1,r[1].length-7);let c="";switch(l){case"method":c="get,post,dialog";break;case"target":c="_blank,_self,_parent,_top";break;case"type":n?.tag==="button"?c="button,submit,reset":n?.tag==="input"&&(c="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":c="soft,hard";break}o.push({name:l,type:u,value:c})}),o=[...Pn,...o],e){const s=await ba(e),r=s?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,l=new Set(Pn.map(m=>m.name)),u=s?.attributes?.filter(m=>m?.division!=="inline"&&!l.has(m?.name)&&m?.name!=="elementContent"),c=new Set(ye.map(m=>m.name)),d=u?.filter(m=>!c.has(m?.name));if(d?.length){const m=await Promise.all(d?.map(async p=>await Ae(p?.id)));console.log("deletedResponse ->",m)}let g=[{the_element_name:{name:n?.name}},{the_element_tag:{tag:n?.tag}},{the_element_void:{void:n?.void}},{the_element_icon:{icon:n?.icon.toString()}},{the_element_default:{default:n?.default}},{the_element_division:{division:n?.division}},{the_element_s_attribute:ye}];return await Promise.all(g.map(async m=>await Promise.all(Object.entries(m).map(async([p,h])=>{const w=Object.keys(h)[0],b=h[w]||"";if(p==="the_element_s_attribute"){const C=await O(e);if(h?.length){const T=h.filter(v=>!v?.id);await Promise.all(T.map(async v=>{const y=await F("attribute",999,v);return await q(C,y,"s_attribute")}))}}else await at(e,p,w,b,999);if(p==="the_element_default"&&w==="default"&&r){const T=(await k())?.userId;await at(r,"the_attribute_value","value",b,T)}return"x"})))),await H.SyncDataOnline(),A.successfullToast("The element updated successfully"),e}else{const s=o;n?.void&&s.unshift({name:"elementContent",type:"string",value:""});const r=await F("element",999,n);return await Promise.all(s.map(async l=>{const u=await F("attribute",999,l);return await q(r,u,"s_attribute")})),await H.SyncDataOnline(),A.successfullToast("The element created successfully"),r}}function Ur(){const t=document.querySelectorAll(".attribute_single");t?.length&&t.forEach(i=>{i?.remove()});let e=String(Date.now());const n=Gr(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",n)}function Fi(t){document.getElementById(t)?.remove()}async function zr(){const t=document.getElementById("select_the_attribute");let e=ke.filter(a=>a?.name==t?.value)[0];ke=ke.filter(a=>a?.name!=t?.value),ye.push(e);const n=t.closest(".attribute_single");n?.id&&Fi(n.id),ga([])}function Jr(t){let e=ye.filter(n=>n.name==t)[0];ye=ye.filter(n=>n.name!=t),ke.push(e),us(ke,"name","string"),ga([])}function ga(t){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(ye.length>0)ye.forEach(a=>{a.name!=="id"&&a.name!=="className"&&(e+=`<li>${a.name} (${a.type})`,e+=`<a onclick="removeSelectedAttribute('${a.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const a=t?.filter(o=>o?.division!=="inline"&&o.name!=="id"&&o.name!=="className"&&o.name!=="elementContent");ye=a;const i=new Set(ye.map(o=>o.name));ke=ke.filter(o=>!i?.has(o?.name)),a.map(function(o){e+=`<li>${o.name} (${o.type}) `,e+=`<a onclick="removeSelectedAttribute('${o.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const n=document.getElementById("element_attributes_entry");n&&(n.innerHTML=e)}function Gr(t){let e='<select id="select_the_attribute" class="form-select">';return ke.forEach(n=>{e+=`<option value="${n?.name}">${n?.name}</option>`}),e+="</select>",`
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
  `}async function Qr(t,e){if(t.preventDefault(),!(await Te.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(t.target),i=Object.fromEntries(a);console.log(i,"update formValues");const o=await qi(a,e);await ma("update-element-dialog");const s=await pn();if(o){const r=document.getElementById("created-elements");r?!s||s.trim()===""?r.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:r.innerHTML=s||"":console.error("Widget list container not found in the DOM.")}return o}class Yr{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const n=await ba(e);this.singleElement=n,this.createElemenModaltHTML=this.getHtml(),n&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await ga(this.singleElement.attributes))}getHtml(){return window.updateNewElement=Qr,window.closeElementModal=ma,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
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
      </dialog>`}}class Kr{createElemenModaltHTML;constructor(){window._dragService=lr,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=Ur,window.cancelAttributeRow=Fi,window.addAttribute=zr,window.removeSelectedAttribute=Jr,window.closeElementModal=ma,`
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
    `}}async function ce(t){document.getElementById(t).showModal()}async function _e(t){const e=document.getElementById(t);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function Vi(t,e){t?.stopPropagation();const n=document.getElementById(`menu-${e}`),a=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),n&&!a&&n.classList.add("show")}async function Qc(t){new Kr,await ce(t)}async function Yc(t,e,n){t.stopPropagation(),console.log("modalId",e),Vi(t,Number(n)),new Yr(n)}async function Kc(t,e){Vi(t,e),confirm("Are you sure you want to delete the element?")&&(await Ae(e),A.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const a=await pn(),i=document.getElementById("created-elements");i?!a||a.trim()===""?i.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:i.innerHTML=a||"":console.error("Elements list container not found in the DOM.")}async function pa(){Bt(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(e),ce("save-widget-dialog"),new Promise((n,a)=>{const i=e.querySelector("#save-widget-form");i.onsubmit=async s=>{s.preventDefault();try{const r=new FormData(i),u=Object.fromEntries(r).widgetName,c=s.target;if(!u?.trim()){const d=c.querySelector("#widgetName");d?.focus(),d.style.border="2px solid red",d.style.outline="none",d.addEventListener("input",()=>{d.style.border=""});return}await Ri(s,u),_e("save-widget-dialog"),n("Widget saved successfully")}catch(r){console.error("Error saving widget:",r),a("Error saving widget")}};const o=e.querySelector("button[type='button']");o.onclick=()=>{_e("save-widget-dialog"),n("Widget saving canceled")}})}async function Ri(t,e){t.preventDefault();try{A.infoMessageToast("Saving Widget...",0),await qe();const n=document.getElementById("save-widget-dialog"),a=n?.querySelector('button[type="submit"]');a.textContent="Saving";const i=n?.querySelector("input"),o=n?.querySelectorAll("button");o&&o.forEach(d=>{d.disabled=!0}),i&&(i.disabled=!0),await He(),V.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async d=>{if(d.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[d.id]){const g=await We(d,"div.mftsccs-marking-element");f.editedWidgets[d.id].html=g.innerHTML}});const r=await Ui();f.staticWidgetTree.html=r;const l=await f.saveWidget(e),u=await Y(l.id);_e("save-widget-dialog"),rn(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget saved successfully!"),await j.renderSavedWidgets(),Qe(t,u.id);return}catch(n){document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Error in saving widget"),ua(n,"There is an error on saving widget")}}async function ha(t,e,n){const a=document.getElementById("update-publish-widget-btn");try{const i=document.getElementById("update-widget-btn");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating...",A.infoMessageToast("Updating Widget...",0)),await He(),V.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async u=>{if(u.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[u.id]){const c=await We(u,"div.mftsccs-marking-element");f.editedWidgets[u.id].html=c.innerHTML}});const s=await nl();f.staticWidgetTree.html=s,await f.updateWidget(),rn(),ve(),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Updated Successfully"),await j.renderSavedWidgets(),await j.renderBoomWidgets();const l=document.getElementById("widget-builder");l.textContent="Widget Builder Panel",await Qe(t,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),n&&n===!0&&await f.publish();return}catch(i){document.querySelector(".infoMessageToast")?.remove();const s=document.getElementById("update-widget-btn");s&&(s.classList.remove("disabled"),s.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),i instanceof Error&&A.errorToast(i.message)}finally{a&&a.classList.remove("disabled")}}async function Re(t,e){const n=document.querySelector(".widgetStyle");n.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(u=>{u.textContent=""});const i=document.getElementById("publish-widget");i&&(i.style.display="none",i.disabled=!0);const o=document.querySelector(".content-target"),s=window.location.href,l=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(o){let u=!1;u=await f.hasWidgetChanged(Number(l));const d=document.getElementById("preview-btn").classList.value.includes("active");if((t?.target?.id==="preview-btn"||t?.target?.id==="save-widget-form"||t?.target?.id==="update-widget-btn"||t?.target?.id==="form-folder-modal"||t?.target?.id==="data-file-id")&&(u=!1),d&&(u=!1),u&&!e){await $t("Do you want to save changes?")&&(s.includes("?page-id=")?l?await la(t,Number(l)):await ra(t):l?await ha(t,Number(l)):await pa()),rn();const p=document.getElementById("preview-btn");p.classList.remove("active"),p.removeAttribute("data-widgetid")}await Bs()}o.innerHTML="",ji(),t&&!e&&It("/")}let Cn="";async function Zr(t){const e=document.getElementById("preview-btn"),n=e.classList.value.includes("active");let a=t.target.getAttribute("data-widgetid");a&&It(`?widget-id=${a}`);const i=document.querySelector(".content-target"),o=document.querySelector(".midContent .content"),s={...f.widgetTree},r=document.getElementById("undo-btn"),l=document.getElementById("redo-btn"),u=document.getElementById("ai-prompt-btn"),c=document.getElementById("widget-prompt-modal"),d=document.getElementById("widget-prompt-tab"),g=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(n){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,u.style.display="flex",Cn&&Cn!=="none"?(d.classList.add("d-none"),c.classList.remove("d-none"),c.classList.add("d-flex")):(d?.classList.remove("d-none"),c&&c.classList.add("d-none")),e.classList.remove("active"),r.classList.remove("d-none"),l.classList.remove("d-none"),m&&(m.style.display="block"),g&&(g.style.display="none"),i&&(i.style.width="100%",i.style.maxWidth="",i.style.margin="0 auto",i.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),i.classList.add("mode-desktop"));const p=ta(),h=await Le(f.widgetTree,p,!0,void 0,!0);Z(f.widgetTree,!1,h,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),o.classList.remove("preview"),ge(),ve(),yt.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,u.style.display="none",c&&(Cn=window.getComputedStyle(c).display,c.classList.add("d-none")),d&&d.classList.add("d-none");const p=document.getElementById("select-box"),h=document.getElementById("element-info");p.style.display="none",h.style.display="none",r.classList.add("d-none"),l.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none");const w=await Le(f.widgetTree,i,!0,void 0,!1);Z(s,!1,w),document.getElementById("column-left").classList.add("d-none");const C=document.createElement("script");C.setAttribute("type","text/javascript"),C.innerHTML=s?.js,i.appendChild(C),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),yt.disableHeader(),ft.closeCodeView(),o.classList.add("preview");const y=document.querySelector("header.wico_top-header");y.style.display="none"}return"PREVIEW WIDGET"}async function We(t,e){return t.querySelectorAll(e).forEach(a=>{for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.remove()}),t}async function Xr(t,e){t.preventDefault();try{const n=new FormData(t.target),i=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');i.textContent="Converting...";const o=t.target;for(let s=0,r=o.length;s<r;++s)o[s].disabled=!0;await el(n);for(let s=0,r=o.length;s<r;++s)o[s].disabled=!1;return await _e(e),"completed conversion"}catch{A.errorToast("html conversion failed"),await _e(e)}}async function el(t){const e=Object.fromEntries(t),n=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,a=await ts(n,e?.cssCode?.toString(),e?.jsCode.toString()),o=(await k())?.token,r=(await Xo(a?.id,o))?.id,{html:l,css:u,js:c}=await Qo(r,o);await Yt(r);const d=document.querySelector(".content-target");d.innerHTML=l;const g=document.querySelector('.cm-content[data-language="css"]');g.textContent=u;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=c,"converted widget"}async function tl(t){return new Pr().init(),ce(t),"opened convert HTML to Widget!"}async function rt(t,e){return new Promise(async(n,a)=>{try{let i=new J;i.composition=t,i.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function","the_widget_dependency"],i.inpage=100;let o=new J;o.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],o.inpage=100;const r=await be([i,o],e);n(r)}catch(i){console.error("error",i),i?.status===401&&Me(),a(i)}})}async function nl(){V.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target"),e=t.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(s=>{s.classList.replace("edited-widget-container","added-widget-container")});const n=await We(t,"div.mftsccs-marking-element");return t?.querySelector("#widget-details")?.remove(),(t?.querySelectorAll(".mftsccs-marking-rendered")).forEach(s=>{s.remove()}),n.innerHTML.trim()}async function Ui(){V.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target"),e=await We(t,"div.mftsccs-marking-element");return t?.querySelector(".widget_selected")?.classList.remove("widget_selected"),t?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function nt(){const t=document.querySelector(".content-target");t?.querySelector("#widget-details")?.remove();const n=await We(t,"div.mftsccs-marking-element");return t?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n.innerHTML.trim()}async function Et(){V.staticElement?.removeAttribute("draggable");const t=document.querySelector(".content-target")?.cloneNode(!0);t?.querySelector("#widget-details")?.remove();const a=(await We(t,"div.mftsccs-marking-element")).innerHTML.trim();return V.staticElement?.setAttribute("draggable","true"),a}async function Ft(t){V.staticElement?.removeAttribute("draggable");const e=document.getElementById(t)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const i=(await We(e,"div.mftsccs-marking-element")).innerHTML.trim();return V.staticElement?.setAttribute("draggable","true"),i}const al=["image/jpeg","image/jpg","image/png","image/webp"],il=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],zi=async t=>{try{const e=new FormData;let n;if(il.includes(t.type))e.append("file",t,t.name),n=await sl(e);else if(al.includes(t.type))e.append("image",t,t.name),n=await ol(e);else return{message:"Invalid File Format",success:!1};return n?.data?{message:"Upload Success",success:!0,url:n.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},ol=async(t,e="")=>{try{const n=await fetch(U.boomURL+"/api/Image/UploadImage",{method:"POST",body:t,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const a=n.headers.get("content-type");a&&a.includes("text/plain")&&console.info(n?.text());const i=await n?.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}},sl=async(t,e="")=>{try{const n=await fetch(U.boomURL+"/api/Image/UploadFile",{method:"POST",body:t,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const a=n.headers.get("content-type");a&&a.includes("text/plain")&&console.info(n.text());const i=await n.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}};async function rl(t=""){try{const e=await k();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const n=await ii("public_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_public_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let o=new P;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new P;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new P;r.typeConnection="the_public_widget_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new P;if(l.conceptIds=[n.id],l.outputFormat=se,l.name="top",l.freeschemaQueries=[r],t!=""){let u=new ze;u.name="filterName",u.search=t,u.type="the_name",u.operateon="widgetName",u.logicoperator="like";let c=new ze;c.name="filterPublicName",c.search=t,c.type="the_public_name",c.operateon="widgetPName",c.logicoperator="like",l.filters=[u,c],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(u=>{me(l,"").subscribe(c=>{u(c)})})}catch(e){throw e}}async function ll(t=""){try{const e=await k();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const n=await ii("folder_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_folder_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let o=new P;o.typeConnection="the_widget_description",o.name="widgetDescription";let s=new P;s.typeConnection="the_widget_thumbnail",s.name="widgetThumbnail";let r=new P;r.typeConnection="the_folder_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,o,s];let l=new P;if(l.conceptIds=[n.id],l.outputFormat=se,l.name="top",l.freeschemaQueries=[r],t!=""){let u=new ze;u.name="filterName",u.search=t,u.type="the_name",u.operateon="widgetName",u.logicoperator="like";let c=new ze;c.name="filterFolderName",c.search=t,c.type="the_folder_name",c.operateon="widgetPName",c.logicoperator="like",l.filters=[u,c],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(u=>{me(l,"").subscribe(c=>{u(c)})})}catch(e){throw e}}class lt{static staticElementList}async function cl(t,e){const n=t?.target?.value,a=await k(),i=a?.userId,o=a?.token,s=await Y(e),u=(await rt(e,o))?.data?.the_widget?.the_widget_before_render?.[0]?.id;u&&await Ae(u);const c=await K("before_render",n,!1,i,4,999);await q(s,c,"before_render"),await H.SyncDataOnline(),new Ni().before_render()}async function dl(t,e){console.log("updateWidgetUpdate event",t),console.log("widgetId",e)}async function ul(t,e){const n=t?.target?.value,a=await k(),i=a?.userId,o=a?.token,s=await Y(e),u=(await rt(e,o))?.data?.the_widget?.the_widget_after_render?.[0]?.id;u&&await Ae(u);const c=await K("after_render",n,!1,i,4,999);await q(s,c,"after_render"),await H.SyncDataOnline();const g=document.getElementById("mountInput")?.value,p=document.getElementById("mountChildWidgetsInput")?.value,h=new Ct;h.componentDidMountFunction=g,h.addEventFunction=n,h.mountChildWidgetsFunction=p;const w=document.querySelector(".content-target"),b=await h.mount(w);console.log("appContentHTML",b)}async function ml(t,e){const n=t?.target?.value,a=await k(),i=a?.userId,o=a?.token,s=await Y(e),u=(await rt(e,o))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;u&&await Ae(u);const c=await K("mount_child",n,!1,i,4,999);await q(s,c,"mount_child"),await H.SyncDataOnline()}class gl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=yl,`
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
    `}}class pl{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return`
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
    `}}async function hl(t,e){const n=document.getElementById("documentation-view");await De(U.documentation_preview_widget,n,{currentWidgetId:e})}let wt,Ln="",Fn,Vn;async function fl(t,e){Fn=t,e==="preview"?new pl:new gl;const n=new P;n.typeConnection="the_widget_documentation",n.name="documentationText",n.selectors=["the_documentation_text"];const a=new P;a.typeConnection="the_widget_s_documentation",a.name="documentationBlank",a.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const i=new P;i.typeConnection="the_documentation_s_json_list",i.name="documentationJSON",i.selectors=["the_json_list_key","the_json_list_value"],a.freeschemaQueries=[i];const o=new P;o.conceptIds=[Fn],o.freeschemaQueries=[n,a],o.inpage=100,o.outputFormat=se,await me(o,"").subscribe(async s=>{const r=s?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";r&&(Ln=r);const l=s?.[0]?.data?.the_widget?.the_widget_s_documentation;l?.length&&(Ln=l?.map(c=>{const d=c?.data?.the_documentation,g=d?.the_documentation_type?.data?.the_type,m=d?.the_documentation_content?.data?.the_content,p=d?.the_documentation_creator_email?.data?.the_creator_email,h=d?.the_documentation_doc_title?.data?.the_doc_title,w=d?.the_documentation_method?.data?.the_method,b=d?.the_documentation_method_url?.data?.the_method_url,C=d?.the_documentation_bearer_token?.data?.the_bearer_token,T=d?.the_documentation_username?.data?.the_username,v=d?.the_documentation_password?.data?.the_password,y=d?.the_documentation_auth_type?.data?.the_auth_type,E=d?.the_documentation_s_json_list,L=d?.the_documentation_api_script?.data?.the_api_script,_=d?.the_documentation_api_body?.data?.the_api_body,S=d?.the_documentation_language?.data?.the_language,x=d?.the_documentation_return?.data?.the_return,W=d?.the_documentation_code_editor?.data?.the_code_editor,M=d?.the_documentation_s_doc_url,$=d?.the_documentation_s_image_url,B=d?.the_documentation_s_video_link;let N={type:g,content:m,creatorEmail:p,title:h};if(g==="blank")N={...N};else if(g==="api"){const ae=[];E?.length&&E?.forEach(X=>{ae.push({key:X?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:X?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),N={...N,method:w,methodURL:b,authType:y,username:T,password:v,bearerToken:C,json:ae,script:L,body:_}}else g==="function"&&(N={...N,language:S,return:x,codeEditor:W});const R=[],ne=[],de=[];return $?.length&&$?.forEach(ae=>{R.push(ae?.data?.the_image_url)}),B?.length&&B?.forEach(ae=>{ne.push(ae?.data?.the_video_link)}),M?.length&&M?.forEach(ae=>{de.push(ae.data?.the_doc_url)}),N={...N,imageList:R,linkList:de,videoList:ne},N})),Vn=s?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&wl(r)}),e==="preview"?(await ce("widget-documentation-preview-modal"),hl(Ln,t)):await ce("widget-documentation-modal")}async function yl(){if(wt){const t=wt.getData(),e=await O(Fn),a=(await k())?.userId;if(Vn)await at(Vn,"the_documentation_text","text",t,a),await H.SyncDataOnline();else{const i=await F("documentation",a,{text:t});await G(e,i,"documentation"),await H.SyncDataOnline()}A.successfullToast("Documentation is saved."),wt.setData(t)}else console.error("Editor not initialized"),A.errorToast("Documentation couldn't saved.")}function wl(t){const e=document.querySelector("#documentation-editor");e&&No.create(e,{licenseKey:"GPL"}).then(n=>{wt=n;const a=t;wt.setData(a)}).catch(n=>{console.error("Error initializing CKEditor:",n)})}class vl{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",n=>{if(n.target.matches(".btn-tour")){const a=n.target.dataset.tourStatus;this.startTour(a)}})}startTour(e){const n=new Mo.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),a=[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Next",action:n.next}];n.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:n.complete},{text:"Next",classes:"next-button",action:()=>{n.next()}}]}),n.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".wico_header-section",on:"bottom-start"},buttons:a}),n.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:a}),n.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:a}),n.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const i=document.querySelector("#tab-container .tab button:nth-child(2)"),o=new Event("click",{bubbles:!0,cancelable:!0});return i.dispatchEvent(o),".right-aside"},on:"left"},buttons:a}),n.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:a}),n.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:a}),n.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Finish",action:()=>{n.complete(),e||this.updateTourStatus()}}]}),n.start()}async updateTourStatus(){this.closeTour();const e=await k(),n=e?.userId,a=e?.entityId,i=await O(a),o=new Kt;try{await o.initialize();const s=await o.MakeTheInstanceConceptLocal("the_tour_status","true",!1,n,4,999);await o.CreateConnectionBetweenEntityLocal(i,s,"tour_status"),await o.commitTransaction()}catch{o.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}async function bl(t){console.log("event",t),console.log("event.target",t.target);const e=t?.target?.getAttribute("data-pubwidid");console.log("widgetId -->",e);const n=prompt("What would you like to name this forked widget?");if(!n||!n.trim())return;const a=Number(t.target.dataset.pubwidid);if(a){A.infoMessageToast("Forking widget...",0);try{const i=document.querySelector(".infoMessageToast"),o=await ue(a);f.widgetTree=o;const s=await f.saveWidget(n),r=await Y(s.id);console.log("forkedWidget",r);const l=await O(e);await G(l,s,"s_fork"),await H.SyncDataOnline(),await j.renderSavedWidgets(),await j.renderBoomWidgets(),i?.remove(),A.successfullToast("Widget forked cuccessfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Saving Failed"),new Error("Saving Failed")}}}class _l{_layoutWidgetHTMLService=new ki;_pagesHTMLService=new fi;_projectsService=new Oi;_projectsHTMLService=new Di;_pagesService=new ca;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await Te.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,n={openRenameWidgetModal:kl,renameWidget:Gi,loadWidget:Qe,deleteWidget:Ll,postWidget:xl,forkWidget:bl,saveFromPublic:j.saveFromPublic,removeFromTemplate:j.removeFromTemplate,downloadPage:Lr,downloadWebpage:Tr,updateWidgetMount:cl,updateWidgetUpdate:dl,updateWidgetEvents:ul,updateMountChildWidgets:ml,navbarFunctions:xt,DeleteConceptById:Ae,uploadAssetsFile:Ml,removeAssetFile:Pl,clearSearch:$l,toggleClearButton:Qi,toggleDropdown:El,openDocumentationModal:fl,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:a=>this.searchWidgets(a,"#saved-widget-list-container"),searchElements:a=>this.searchWidgets(a,"#created-elements"),searchPublicWidgets:a=>this.searchPublicWidgets(a),searchPages:a=>this.searchWidgets(a,"#saved-page-list-container"),searchProjects:a=>this.searchWidgets(a,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:a=>this.searchWidgets(a),switchLayoutType:a=>{const i=a.target,o=document.getElementById("fslayout-template-container"),s=document.getElementById("fslayout-list-container");i.value==="custom"?(s?.style.setProperty("display","flex"),o?.style.setProperty("display","none")):(s?.style.setProperty("display","none"),o?.style.setProperty("display","flex"))}};Object.assign(e,n)}async setupAssetListener(){const e=await k(),n=new P;n.typeConnection="the_entity_s_asset",n.name="itemname";const a=new P;a.conceptIds=[e.entityId],a.freeschemaQueries=[n],a.outputFormat=se,a.inpage=100,me(a,"").subscribe(i=>{const o=i?.[0]?.data?.the_entity?.the_entity_s_asset,s=this.generateAssetHTML(o),r=document.getElementById("assets-library-list-container");r&&(r.innerHTML=s)})}generateAssetHTML(e){return e?.length?e.map(n=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${n.id})" /></span>
                    <img class="asset-img" src="${n?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${n?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,n){n||(n=`#${e.target?.dataset?.id}`||"");const i=e.target.value.toLowerCase();document.querySelectorAll(`${n} li`).forEach(s=>{const r=(s.textContent||"").toLowerCase();s.style.display=r.includes(i)?"":"none"})}searchPublicWidgets(e){const a=e.target.value.toLowerCase();Un(a).then(i=>{Bn.navbar.setPublicWidgets(i),this.updatePopupMenu("publicWidgets",i)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(n),pn().then(a=>{this._elemensHtml=a;const i=document.getElementById("created-elements");i&&(i.innerHTML=a||"")}),Rn().then(a=>{this._savedWidgetsHtml=a;const i=document.getElementById("saved-widget-list-container");i&&(i.innerHTML=a||"")}),Un().then(a=>{this._publicWidgetsHtml=a;const i=document.getElementById("public-widget-list-container");i&&(i.innerHTML=a||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const n=document.createElement("nav");n.className="sidebar sidebar-collapsed";let a=!0;const i=()=>{a=!a,n.classList.toggle("sidebar-collapsed",a),a||(this.removeSubSidebar(),this.removeActiveClass())};return n.appendChild(this.createSidebarHeader(i)),n.appendChild(this.createSidebarMenu(e.mainItems)),n.appendChild(this.createSection("Widgets")),n.appendChild(this.createSidebarMenu(e.widgetItems)),n.appendChild(this.createSection("Library")),n.appendChild(this.createSidebarMenu(e.libraryItems)),n.appendChild(this.createSection("Configuration")),n.appendChild(this.createSidebarMenu(e.configurationItems)),n}createSidebarHeader(e){const n=document.createElement("div");return n.className="menu-toggle",n.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,n.addEventListener("click",e),n}createSidebarMenu(e){const n=document.createElement("div");return n.className="sidebar-menu",e?.forEach(a=>n.appendChild(this.createMenuItem(a))),n}createMenuItem(e){const n=document.createElement("div");return n.id=e.id,n.onclick=a=>this.handleNavItemClick(a),e.id==="widget-tour"?(n.className="nav-item",n.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,n.onclick=()=>{new vl().startTour(this._loginDetailObject?.tourStatus)}):e?.link?n.innerHTML=`
                <router-link href="${e.link}" target="_blank" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(n.className="nav-item",n.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),n}createSection(e){const n=document.createElement("div");return n.className="sidebar-section",n.innerHTML=`<hr /><span class="section-title">${e}</span>`,n}async handleNavItemClick(e){const n=document.querySelector(".sidebar"),a=n?.classList.contains("sidebar-collapsed"),i=e.target.closest(".nav-item"),o=i?.id,s=i?.classList.contains("active"),r=i?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!o||s){this.removeSubSidebar();return}if(a){this.removeSubSidebar(),i?.classList.add("active");const l=await this.createSubSidebarMenu(o,r);if(document.querySelector("#column-left")?.appendChild(l),o==="folderWidgets"){const u=await k(),c=document.getElementById("folder-widget-container");await De(U.folder_widget,c,{showFiles:!0}).then(d=>{d.dataChange(async g=>{if(g.displayType==="photo"||g.type==="Image"||g.displayType==="widget"||g.type==="widget")await Wi(e,g);else{let m=await Ce(Number(g),u.token),p=await ue(m?m.widgetId:Number(g));await Qe(null,p.id)}})})}if(o==="assets"){const u=document.getElementById("default-list-container");await De(U.assets_widget,u)}}else n?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,n){if(e=="publicWidgets"){let a=document.querySelector("#public-widget-list-container");a&&(a.innerHTML=n)}if(e=="folderWidgets"){let a=document.querySelector("#folder-widget-container");a&&(a.innerHTML=n)}}async createSubSidebarMenu(e,n){const a=document.createElement("section");if(a.className="sub-sidebar",e==="layout")a.innerHTML=`
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
                    </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),n.outerHTML}}class Vt{static staticTabName}async function El(t,e){t.stopPropagation();const n=document.getElementById(`dropdown-menu-${e}`),a=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(o=>{o.classList.remove("show")}),n&&!a&&n.classList.add("show")}document.addEventListener("click",t=>{document.querySelectorAll(".dropdown-menu").forEach(n=>{const a=t.target;a&&!n.contains(a)&&!a.closest(".dropdown-icon")&&n.classList.remove("show")})});async function Tt(t,e){const n=document.getElementById(e),i=t.target.closest(".accordion-wrapper").querySelector("span");if(n){if(n.style.display==="block"||getComputedStyle(n).display==="block")n.style.display="none",i.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(n.style.display="block",i.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",n.tagName==="FORM"||n.id==="navigator-container"||n.id==="element-attributes"||n.id==="library-css"||n.id==="library-js"||n.id==="general-content"||n.id==="size-content"||n.id==="display-content"||n.id==="typography-content")return}}function Tl(t){const e=document.getElementById(t);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function pn(){const t=await Te.getInstance().getLoginInfo(),e=await Ji();return lt.staticElementList=e,Array.isArray(e)?e?.map(a=>{const i=a?.id,o=a?.data?.the_element?.the_element_name?.[0]?.data?.the_name,s=a?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=a?.data?.the_element?.the_element_void?.[0]?.data?.the_void,l=a?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",u=a?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${o}">${t.isAdmin?`<a data-elementid="${i}" data-type="${s}" data-default="${l}" data-void="${r}" data-text="${o}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

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
          </a>`}</li>`}).join(""):""}async function Ji(){const t=U?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],n=new Headers;n.append("Content-Type","application/json");const i=await(await fetch(`${t}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:n,body:JSON.stringify(e),redirect:"follow"})).json();return i?.sort((o,s)=>{o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const r=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),l=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return r<l?-1:r>l?1:0}),i}async function Rn(){try{const t=await k();if(!t)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=t?.entityId;await qe();const n=new ze;n.type="the_public_widget",n.search="",n.operateon="public",n.name="publicfilter",n.logicoperator="=";const a=new P;a.typeConnection="the_public_widget_s_widget",a.freeschemaQueries=[],a.name="public",a.reverse=!0;const i=new P;i.typeConnection="the_widget_recent",i.name="copywidgets",i.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],i.freeschemaQueries=[a];const o=new P;o.typeConnection="the_entity_s_widget",o.name="mywidgets",o.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],o.freeschemaQueries=[i];const s=new P;return s.conceptIds=[e],s.freeschemaQueries=[o],s.inpage=100,s.outputFormat=se,await new Promise((l,u)=>{me(s,"").subscribe(async c=>{console.log("widget data pub",c);const d=c?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!d.length)return l(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(d.map(async p=>{const h=p?.data?.the_widget,w=h?.the_widget_name?.data?.the_name,b=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:h?.the_widget_html?.data?.the_html,C=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:h?.the_widget_css?.data?.the_css,T=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:h?.the_widget_js?.data?.the_js,v=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:h?.the_widget_timestamp?.data?.the_timestamp,y=!!h?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:p?.id,name:w,html:b,css:C,js:T,timestamp:v,isPosted:y}}))).map(p=>`
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
              `).join("");l(m)})})}catch(t){console.error("Error in getMyWidgetsList:",t),A.errorToast(t?.message||"An error occurred while fetching widgets"),t?.status===401&&Me()}}async function He(){try{const t=document.getElementById("builder-workarea");if(!t)return;t.innerHTML="",await je(f.widgetTree);const e=await Le(f.widgetTree,t);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await Z(f.widgetTree,!1,e),ge(),ve()}catch(t){throw new Error(`error loading widget with widget tree ${t.message}`)}}async function Va(t){const e=t?JSON.parse(t):"";if(e)try{const n=document.getElementById("builder-workarea");n.innerHTML="";const a=await Le(e,n),i=document.getElementById("select-box");i.style.display="none";const o=document.getElementById("element-attributes");o.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await Z(e,!1,a),ge(),ve()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function Qe(t,e,n){try{if(t?.preventDefault(),t?.stopPropagation(),xt.collapseNavbar(),await qe(),await Re(t),n&&typeof n!="number"||Number.isNaN(n)||e&&typeof e!="number"||Number.isNaN(e)){A.infoMessageToast("Widget id is in different format. Please check and update",4),Re(t);return}It(`?widget-id=${n||e}`);const a=document.getElementById("preview-btn");a&&a.setAttribute("data-widgetid",e.toString()),Sl(),Cl(),ea(),Pi(),await Mi();let i=ta();i.classList.contains("fspage")&&i.classList.remove("fspage");const s=(await k())?.token;let r=null;t&&(r=await Ce(e,s));let l=await ue(r?r.widgetId:e);const u=document.getElementById("widgetNameValue");u&&l?.name&&(u.value=l?.name);const c=document.getElementById("widget-builder");c&&l?.name&&(c.textContent="Widget Builder Panel: "+l?.name,c.setAttribute("title",`Widget Builder Panel: ${l?.name}`)),await je(l);const d=await Le(l,i);f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await Z(l,!1,d,!0),await xs(r?.widgetId??e);const g=document.getElementById("preview-btn");return g.setAttribute("onclick","previewWidget(event)"),g.setAttribute("data-widgetid",`${e}`),g.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),qn(),j.enableWidgetButtons(),j.initializeWidgetVersions(n||e,l?.version?l.version.toString():"original",l?.timestamp),D.renderActionHistory(),D.updateActionHistories(),ge(),ve(),na(),""}catch(a){console.error(a),A.errorToast(a?.message,4),qn(),Re(t)}}function Sl(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const n=document.getElementById("page-properties");n&&(n.style.display="none");const a=document.querySelector("button[data-tab-id='wico-tab-navigator']"),i=document.querySelector(`button[data-tab-id='${Vt.staticTabName}']`);Vt.staticTabName==="wico-tab-pageInfo"&&i.style.display==="none"?a&&a.click():i?i.click():a&&a.click()}function Cl(){document.title="Widget Conceptualizer",St("description","Widget Conceptualizer"),St("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection")}async function Ll(t,e){t.stopPropagation();try{const n=confirm("Do you want to delete the Widget?");if(await qe(),n){A.infoMessageToast("Deleting the widget...",0),await Rr(e),await j.renderSavedWidgets();const a=new URLSearchParams(window.location.search).get("widget-id");return a&&parseInt(a)===e&&await Re(t),document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(n){document.querySelector(".infoMessageToast")?.remove(),A.successfullToast("Widget Deleted Successfully"),A.errorToast(n.message?n.message:"Failed to delete widget"),console.error("Failed to delete widget:",n)}}async function xl(t,e){t.stopPropagation();const n=document.getElementById("postWidgetModal");n&&n.remove();const a=await k(),i=a?.entityId===101651686||a?.entityId===101279491,o=document.createElement("dialog");o.id="postWidgetModal",o.className="col-md-6 a-dialog",o.innerHTML=`
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
  `,document.body.appendChild(o);const s=o.querySelector("#pasteArea"),r=o.querySelector("#widgetThumbnail"),l=o.querySelector("#imagePreview img"),u=o.querySelector("#imagePreview"),c=o.querySelector("#pasteText");function d(p){const h=new FileReader;h.onload=w=>{l&&w.target?.result&&(l.src=w.target.result,u.classList.remove("d-none"),c.classList.add("d-none"))},h.readAsDataURL(p)}r?.addEventListener("change",p=>{const h=p.target.files?.[0];h&&d(h)});function g(p){const h=p.clipboardData?.items;if(h){for(let w=0;w<h.length;w++)if(h[w].type.indexOf("image")!==-1){const b=h[w].getAsFile();if(b&&r){const C=new DataTransfer;C.items.add(b),r.files=C.files,d(b);break}}}}s?.addEventListener("paste",p=>g(p)),o.addEventListener("paste",p=>g(p)),o.querySelector("#post-widget-form")?.addEventListener("submit",p=>{p.preventDefault(),Al(e,o)}),o.showModal()}async function Al(t,e){const n=document.querySelector(`#spinner-${t}`),a=e.querySelector('button[type="submit"]');try{a&&(a.disabled=!0,a.textContent="Posting...",A.infoMessageToast("Posting Widget to Public...",0)),n&&n.classList.remove("d-none"),await qe();const i=await k(),o=document.getElementById("widgetPublicName").value,s=document.getElementById("widgetDescription").value,r=document.getElementById("widgetThumbnail");if(!r?.files?.length)throw console.error("File validation failed:",{inputExists:!!r,filesLength:r?.files?.length}),new Error("Please provide a thumbnail image");const l=r.files?.[0];if(!l||!r.value)throw new Error("Please provide a thumbnail image");const u=await zi(l);if(!u.success)throw new Error("Failed to upload thumbnail");const c=await Ce(t,i.token);if(c&&(await Ne(c.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),A.infoMessageToast("Widget is already public.");return}const d=document.getElementById("postAsTemplate")?.checked;let g=null;if(c)g=await O(c.widgetId);else{const C=await Y(t);g=await j.createWidgetCopy(C,i.userId,i.token)}const m=await K("public_name",o,!1,i.userId,4,999),p=await K("description",s,!1,i.userId,4,999),h=await K("thumbnail",u.url||"no attachment",!1,i.userId,4,999);await q(g,p,"description"),await q(g,h,"thumbnail"),await q(g,m,"public_name");const w=await K("public_widget","",!1,i.userId,4,999);if(await q(w,g,"s_widget"),d){const T=await K("template_name",o,!1,i.userId,4,999),v=await K("template_thumbnail",u.url||"no attachment",!1,i.userId,4,999);await q(g,v,"template_thumbnail"),await q(g,T,"template_name");const y=await K("template_widget","",!1,i.userId,4,999);await q(y,g,"s_widget")}await H.SyncDataOnline(),await j.renderPublicWidgets(),await j.renderSavedWidgets(),d&&await j.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{A.successfullToast(`Widget Posted to Public${d?" and Templates":""}`)},300)}catch(i){console.error("Error posting widget:",i),document.querySelector(".infoMessageToast")?.remove(),A.errorToast("Failed to post widget"),a&&(a.disabled=!1,a.textContent="Post Widget")}finally{n&&n.classList.add("d-none")}}async function Un(t=""){try{const e=await k();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const a=(await rl(t))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],i=await Promise.all(a.map(async r=>{const l=r?.data?.the_widget,c=l?.the_widget_public_name?.data?.the_public_name||`${l?.the_widget_name?.data?.the_name} ${l?.the_widget_version?.data?.the_version>1?"v"+l?.the_widget_version?.data?.the_version:""}`,d=l?.the_widget_description?.data?.the_description,g=l?.the_widget_thumbnail?.data?.the_thumbnail,m=l?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:c,timestamp:m,description:d,thumbnail:g}}));return i?.length?(await Promise.all(i?.map(async r=>{const u=(await Y(r.id)).userId===e.userId,c=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
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
    `}catch(e){console.error("error",e),e?.status===401&&Me()}}async function Wl(t=""){try{const e=await k();if(!e)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const a=(await ll(t))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[],i=await Promise.all(a.map(async l=>{const u=l?.data?.the_widget,d=u?.the_widget_folder_name?.data?.the_folder_name||`${u?.the_widget_name?.data?.the_name} ${u?.the_widget_version?.data?.the_version>1?"v"+u?.the_widget_version?.data?.the_version:""}`,g=u?.the_widget_description?.data?.the_description,m=u?.the_widget_thumbnail?.data?.the_thumbnail,p=u?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:d,timestamp:p,description:g,thumbnail:m}}));if(!i?.length){const l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",await De(U.folder_widget,l)),`
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
        `})||[])).join(""),r=document.getElementById("folder-widget-container");return r&&(r.style.display="block",r.innerHTML=s),s}catch(e){console.error("error",e),e?.status===401&&Me()}}async function Il(){try{const t=await k();if(!t)return[];const e=await K("template_widget","",!1,t.userId,4,999);let n=new P;n.typeConnection="the_widget_template_name",n.name="widgetPName";let a=new P;a.typeConnection="the_widget_template_thumbnail",a.name="widgetThumbnail";let i=new P;i.typeConnection="the_template_widget_s_widget",i.name="widgetLevel",i.inpage=10,i.limit=!0,i.freeschemaQueries=[n,a];let o=new P;return o.conceptIds=[e.id],o.outputFormat=se,o.name="top",o.freeschemaQueries=[i],new Promise(s=>{me(o,"").subscribe(r=>{const l=[];if(r&&r.length>0){const u=r[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const c of u)if(c?.data?.the_widget&&typeof c.data.the_widget=="object"){const d=c.data.the_widget?.the_widget_template_name?.data?.the_template_name,g=c.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(d||g)&&l.push({id:c.id||"",name:d||"Unnamed Template",thumbnail:g||""})}}s(l)})})}catch(t){return console.error("Error fetching templates:",t),[]}}async function kl(t,e){t.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const a=document.createElement("dialog");a.setAttribute("id","rename-widget-dialog"),a.classList.add("col-md-3"),a.innerHTML=`
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
        `;const i=a.querySelector("form");return i&&i.addEventListener("submit",o=>Gi(o,"",e)),document.querySelector("body #app")?.appendChild(a),ce("rename-widget-dialog"),"OPENED"}catch(n){console.error("Failed to rename widget:",n)}}async function Gi(t,e="",n){t.preventDefault();let a="";if(e)a=e;else{const l=new FormData(t?.target);if(a=Object.fromEntries(l)?.widgetName,!a?.trim()){const c=t.target.querySelector("#widgetName");c?.focus(),c.style.border="2px solid red",c.style.outline="none",c.addEventListener("input",()=>{c.style.border=""});return}}const o=(await k())?.userId,s=document.getElementById("rename-widget-dialog"),r=s?.querySelector('button[type="submit"]');r.textContent="Saving";try{await qe();const l=await at(n,"the_widget_name","name",a,o);await H.SyncDataOnline();const u=s?.querySelector("input"),c=s?.querySelectorAll("button");if(c&&c.forEach(d=>{d.disabled=!0}),u&&(u.disabled=!0),l){j.renderSavedWidgets(),_e("rename-widget-dialog"),A.successfullToast("Widget Renamed Successfully");const d=new URLSearchParams(window.location.search).get("widget-id");if(n===Number(d)){const g=document.getElementById("widget-builder");g.textContent=`Widget Builder Panel: ${a}`}return"widget Renamed successfully"}}catch(l){A.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",l)}}const fa=async(t,e,n=!1)=>{const a=await rt(t,e),i=a?.data?.the_widget,o=i?.the_widget_name?.[0]?.data?.the_name,s=i?.the_widget_html?.[0]?.data?.the_html,r=i?.the_widget_clean?.[0]?.data?.the_clean,l=i?.the_widget_css?.[0]?.data?.the_css,u=i?.the_widget_js?.[0]?.data?.the_js,c=i?.the_widget_timestamp?.[0]?.data?.the_timestamp,d=i?.the_widget_widget?.[0].id,g=i?.the_widget_type?.[0]?.data?.the_type,m=i?.the_widget_after_render?.[0]?.data?.the_after_render,p=i?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,h=i?.the_widget_update?.[0]?.data?.the_update,w=i?.the_widget_mount_child?.[0]?.data?.the_mount_child;let b=[];const C=i?.the_widget_s_child;return C?.length&&(b=await Promise.all(C?.map(async v=>{const y=v?.data?.the_child_widget,E=y?.the_child_widget_type?.[0]?.data?.the_type,L=y?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,_=y?.the_child_widget_info?.[0]?.data?.id?y?.the_child_widget_info?.[0]?.data?.id:y?.the_child_widget_parent?.[0]?.data?.the_parent,S=await fa(Number(_),e,n);return{id:v?.id,type:E,parent:_,wrapper:L,widget:S}}))),{id:a?.id,name:o,html:s,cleanHtml:r,css:l,js:u,timestamp:c,widgetId:d,typeValue:g,addEvent:m,onMount:p,onUpdate:h,mountChildWidgets:w,childs:b}},Ml=async t=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await k(),n=e?.entityId,a=e?.userId,i=await Y(n);try{if(t.target?.files?.length>0){const o=[];for(let l=0;l<t.target?.files?.length;l++){const u=t.target?.files[l];if(u.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}o.push(zi(u))}const s=await Promise.all(o);for(let l=0;l<s.length;l++){const u=s[l];u.success||alert("Some file failed: "+u.message);const c=await K("the_asset",u.url||"",!1,a,4);await q(i,c,"s_asset")}await H.SyncDataOnline(),A.successfullToast(`Asset${s.length>1?"s":""} uploaded successfully`),new _l().setupAssetListener()}else{alert("No file found");return}}catch(o){throw console.error(o),o}document.getElementById("assets-upload-loader")?.classList.add("d-none")},Pl=async(t,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{t.target.closest(".asset-item").remove(),await Ae(e),A.successfullToast("Asset deleted successfully")}catch(a){console.error("Error deleting asset:",a),A.errorToast("Failed to delete asset")}};function $l(t){const e=document.getElementById(t);if(e){e.value="";const n=new Event("keyup");e.dispatchEvent(n),Qi(t)}}function Qi(t){const e=document.getElementById(t),n=document.getElementById(`${t}-clear`);e&&n&&(n.style.display=e.value?"block":"none",n.style.cursor=e.value?"default":"")}async function Bl(t,e,n,a){t.preventDefault(),t.stopPropagation();const i=a.replace(/\\n/g,`
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
  `,s=document.getElementById("widget-detail-modal");s&&s.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",o),ce("widget-detail-modal")}window.viewPublicWidgetDetails=Bl;window.openCSSEditor=Tt;class Yi{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let n=function(i){if(!i)return;const{wrapper:o}=i,s=o&&o!=="0"?`#${o}`:".content-target";a=a+`${s} { ${i.css} }`,i.children.forEach(r=>{n(r)})},a="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),n(f.widgetTree),this.styleElement.textContent=a}}async getWidgetHtml(e){let n=[];e.forEach(a=>{a.classList.forEach(i=>{n.push(i)})}),this.insertCSS(n)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:n,dispatch:a}=e,{selection:i}=n;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new te({doc:"/* Write your CSS here */",extensions:[it,ot,ko(),Xt(),te.lineWrapping,xe.tabSize.of(2),xe.allowMultipleSelections.of(!0),te.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),en.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),te.updateListener.of(async n=>{if(n.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateCSS(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const n of e)if(this.editorView){const{state:a,dispatch:i}=this.editorView;i({changes:{from:0,to:a.doc.length,insert:`.${n} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const Ra=async t=>{const e=new oi,n=jl(t);if(Object.keys(n).length>0){const a=await e.validateField(n),i=await zn(a),o=zn(i);return Hl(t,o)}},Nl=async t=>{const n=await new oi().validateField(t);return Object.keys(n).length>0?{status:!1,details:zn(n)}:{status:!0}},jl=t=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},n=t?.attributes;if(Array.isArray(n))n.forEach(a=>{const i=Dl(a);switch(a.name){case"name":e.fieldName=i||"";break;case"value":e.value=i||null;break;case"fieldtype":e.fieldType=i?i.trim():null;break;case"pattern":e.pattern=i||null;break;case"datatype":e.dataType=i?i.trim():null;break;case"typeconcept":e.conceptType=i||null;break;case"maxlength":e.maxLength=i?parseInt(i):null;break;case"minlength":e.minLength=i?parseInt(i):null;break;case"max":e.maxValue=i?parseInt(i):null;break;case"min":e.minValue=i?parseInt(i):null;break;case"accept":e.accept=i||null;break;case"file":e.file=i||null;break;case"required":e.required=i===!0;break;case"unique":e.isUnique=i===!0;break}});else throw console.error('attributesData["attributes"] is not an array',t.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},Dl=t=>{switch(t.type){case"boolean":return t.value==="on";case"array":return t.selected||null;case"string":return t.value||null;default:return null}},zn=t=>({datatype:t.dataType,pattern:t.pattern,max:t.maxValue,min:t.minValue,minlength:t.minLength,maxlength:t.maxLength,accept:t.accept,file:t.file,required:t.required,unique:t.unique}),Hl=(t,e)=>(t.attributes.forEach(n=>{const a=e[n.name];n.validationStatus=a?"invalid":"valid",n.validationErrorMessage=a||""}),t),Ol=t=>({fieldName:t.getAttribute("name"),value:t instanceof HTMLInputElement?t.value:null,fieldType:t.getAttribute("fieldtype"),dataType:t.getAttribute("datatype"),pattern:t.getAttribute("pattern"),conceptType:t.getAttribute("typeconcept"),maxLength:t.getAttribute("maxlength"),minLength:t.getAttribute("minlength"),minValue:t.getAttribute("min"),maxValue:t.getAttribute("max"),file:t.hasAttribute("file"),accept:t.hasAttribute("accept"),required:t.hasAttribute("required"),isUnique:t.getAttribute("unique")==="on"});async function Ki(t){let e=t.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",t.parentNode?.insertBefore(e,t.nextSibling)),e.innerHTML="";const n=Ol(t),a=await Nl(n);try{if(a.status)t.classList.remove("invalid"),t.classList.add("valid");else if(t.classList.remove("valid"),t.classList.add("invalid"),a.details&&typeof a.details=="object"){const i=document.createElement("span");i.className="error-message",i.style.color="red",i.style.fontSize="12px";const o=Object.values(a.details).filter(Boolean);i.innerHTML=o.join("<br>"),e.appendChild(i)}}catch(i){console.error("Validation error:",i);const o=document.createElement("span");o.className="error-message",o.style.color="red",o.textContent="Validation failed. Please try again.",e.appendChild(o)}}var Xe=(t=>(t.STYLE="style",t.BOOLEAN="boolean",t.FORM="form",t.SPECIAL="special",t))(Xe||{});const ql=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),ya=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],wa=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],Rt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Fl=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Ut=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],we=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),Vl=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),Rl=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),Ul=new Set(["elementContent","className","id"]),Zi=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function pt(t){return t.toLowerCase()==="type"?!0:Zi.has(t.toLowerCase())}function kt(t,e,n){const a=t.toLowerCase();if(a==="type"){const i=n?ql.get(n.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):i}return Zi.get(a)||[]}class hn{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=jo}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,n){Vt.staticTabName=n;let a,i,o=document.getElementsByClassName("tabcontent");for(a=0;a<o.length;a++)o[a].style.display="none";for(i=document.getElementsByClassName("tablinks"),a=0;a<i.length;a++)i[a].className=i[a].className.replace(" active","");const s=document.getElementById(n);s.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let n=this;for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(o){const s=e[i].getAttribute("data-tab-id");n.openTab(o,s)});const a=document.querySelector(`button[data-tab-id='${Vt.staticTabName}']`);a?a.click():e[0].click()}sortAttributes(e){return e.sort((n,a)=>{if(!n?.name||!a?.name)return 0;const i=this.findAttributeInMap(n.name),o=this.findAttributeInMap(a.name);if(i==="Other"&&o!=="Other")return 1;if(i!=="Other"&&o==="Other")return-1;if(i===o){const s=this.categoryMap[i].findIndex(l=>l.toLowerCase()===n.name.toLowerCase()),r=this.categoryMap[o].findIndex(l=>l.toLowerCase()===a.name.toLowerCase());return s-r}return 0})}getCategoryForAttribute(e){if(!e)return"General";const n=e.toLowerCase();for(const[a,i]of Object.entries(this.categoryMap))if(a!=="Other"&&i.some(o=>o.toLowerCase()===n))return a;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,n){setTimeout(()=>{const a=document.getElementById("element-attributes");if(!a){this.setAttributes(e,n);return}a.innerHTML="";const i=document.createElement("div");if(i.className="row",a.appendChild(i),!e){i.innerHTML="";return}(async()=>await Ra(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const s=this.sortAttributes(e.attributes),r={};s.forEach(u=>{const c=this.getCategoryForAttribute(u.name);r[c]||(r[c]=[]),r[c].push(u)});let l="";Object.entries(r).forEach(([u,c])=>{const d=c.map(m=>{let p="";if(m.name.toLowerCase()==="float")p=`
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
                `;else if(m.name==="Alignment"){const h=e?.tag?.toLowerCase();ya.includes(h)&&(p=`
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
                  `)}else if(m.name==="Font Family"){const h=e?.tag?.toLowerCase();if(wa.includes(h)&&pt(m.name)){const b=kt(m.name,m.value,e?.tag).map(C=>{const T=C.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${C}" ${T?"selected":""}>${C}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${b}
                      </select>
                    `}}else if(m.name==="Font Weight"){const h=e?.tag?.toLowerCase();if(Rt.includes(h)&&pt(m.name)){const b=kt(m.name,m.value,e?.tag).map(C=>{const T=C.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${C}" ${T?"selected":""}>${C}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select ${m.name}</option>
                        ${b}
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
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const h=(m.value||"0 0 0 0").split(" ").map(v=>v.trim()).map(v=>/^\d+$/.test(v)?`${v}px`:v);for(;h.length<4;)h.push("0px");const[w,b,C,T]=h;return m.name==="Margin"?`
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
                                  value: [this.value, '${b}', '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge right" data-value="${b}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${b}</span>
                            <input type="text"
                              class="edge-input"
                              value="${b}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${w}', '${b}', this.value, '${T}'].join(' '),
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
                                  value: ['${w}', '${b}', '${C}', this.value].join(' '),
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
                                  value: [this.value, '${b}', '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge right" data-value="${b}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${b}</span>
                            <input type="text"
                              class="edge-input"
                              value="${b}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${w}', this.value, '${C}', '${T}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${w}', '${b}', this.value, '${T}'].join(' '),
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
                                  value: ['${w}', '${b}', '${C}', this.value].join(' '),
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
                    >${m?.value||""}</textarea>`;else if(pt(m.name)){const w=kt(m.name,m.value,e?.tag).map(b=>`<option value="${b}" ${b===m?.value?"selected":""}>${b}</option>`).join("");p=`
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
                  </div>`;else if(m?.type==="boolean")p=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${n}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(pt(m.name)){const w=kt(m.name,m.value,e?.tag).map(b=>{const C=b.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${b}" ${C?"selected":""}>${b}</option>`}).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${w}
                    </select>
                  `}else{const w=(m?.value?.split(",")||[]).map(b=>`<option value="${b}" ${b===m?.selected||b===m?.value?"selected":""}>${b}</option>`).join("");p=`
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
            `}),i.innerHTML=l}}),Nt()},0)}setAttributesForMultipleElements(e){const n=async()=>await Ra(e);if(!e){const i=document.getElementById("element-attributes").querySelector(".row");i.innerHTML="";return}n().then(()=>{if(e?.attributes&&e?.attributes?.length){const a={};e.attributes.forEach(s=>{const r=this.getCategoryForAttribute(s.name);a[r]||(a[r]=[]),a[r].push(s)});let i="";Object.entries(a).forEach(([s,r])=>{if(r.length){const l=r.map(c=>{let d="";return c?.type==="string"?d=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${c?.value||""}">`:c?.type==="color"?d=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${c?.value||"#000000"}">`:c?.type==="boolean"?d=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${c?.value&&c?.value!=="false"?"checked":""}>`:c?.type==="array"&&(d=`
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
            `}});const o=document.getElementById("element-attributes");o&&(o.innerHTML=i)}})}async getHtml(){window.updateWidgetTypeValue=to,window.toggleDisplay=Tt,window.updateElementAttribute=fn,window.updateMultipleElementAttribute=io,window.handlePageProperties=ao,window.updateCSSLibrary=Ye,window.updateJSLibrary=Ke,window.addJSLibrary=ro,window.addCSSLibrary=so,window.openRenameCustomFunction=ft.openRenameCustomFunction,window.deleteCustomFunction=ft.deleteCustomFunction,setTimeout(async()=>{ft.initializeCodeBlock();const i=new Yi,o=document.getElementById("css-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor(),_a()},0),setTimeout(async()=>{await new Ei().initializeEditor()},0),setTimeout(async()=>{const i=new Ti,o=document.getElementById("js-editor-container");o.innerHTML=await i.getHtml(),await i.initializeEditor()},0),setTimeout(async()=>{await new oe("onmount-editor-split").initializeEditor(),await new oe("onupdate-editor-split").initializeEditor(),await new oe("addevents-editor-split").initializeEditor(),await new oe("mountchildwidgets-editor-split").initializeEditor(),await new oe("widgetDependencies-editor-split").initializeEditor();const u=document.getElementById("publish-widget");u&&u.addEventListener("click",async c=>{c.preventDefault();try{await f.publish()}catch(d){console.error("error publishing widget",d),d instanceof Error&&A.errorToast(d.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let n="",a="";if(this.the_params){const i=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";i&&Ee("meta_title",i);const o=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";o&&Ee("meta_description",o);const s=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";s&&Ee("meta_keywords",s);const r=this.the_params?.data?.the_page_width?.data?.the_width||"";r&&Ee("width",r);const l=this.the_params?.data?.the_page_font_size?.data?.the_font_size;l&&Ee("font_size",l);const u=this.the_params?.data?.the_page_font_family?.data?.the_font_family;u&&Ee("font_family",u);const c=this.the_params?.data?.the_page_type?.data?.the_type;c&&Ee("type",c);const d=()=>Array.from({length:13},(p,h)=>12+h).map(p=>{const h=l==p?"selected":"";return`<option value="${p}" ${h}>${p}</option>`}).join(""),g=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(h=>{const w=u==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${w}>${h}</option>`}).join(""),m=()=>["Fluid","Fixed"].map(h=>{const w=c==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${w}>${h}</option>`}).join("");n=`
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
    `}}async function va(t){let e=oa.filter(a=>a.id==t)[0];return!t||t==="null"?void 0:{id:t,attributes:cr,tag:"div",name:`Layout: ${e?.name}`}}async function zl(){return{id:1,name:"Global",tag:"div",attributes:Jo}}class xn{static editor}function Jl(t,e,n){const a=n?.id,i=document.getElementById("editor");i?.setAttribute("wrapper-id",e),i?.setAttribute("element-id",a),i?.setAttribute("element-clicked","true"),xn.editor&&n?.void?xn.editor.setData(t):n?.void||xn.editor?.setData("")}window.showdWidgetProperties=Ql;window.widgetSelected=Zl;function Gl(t,e){let n;if(e.data_type=="layout"){const a=oa.filter(l=>l.name==e.data_text)[0],r=new DOMParser().parseFromString(a?.html,"text/html").body.querySelector("div");r.setAttribute("element-info-id",t),n=r.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?n=`<${e?.data_type} element-info-id="${t}">${e?.data_default}</${e?.data_type}>`:n=`<${e?.data_type} element-info-id="${t}">`;return`${n}`}async function Ql(t,e){const n=t.target.closest(".added-widget-container"),a=n.id,i=n.getAttribute("data-widgetid");if(i){const T=(await k())?.token,y=(await rt(Number(i),T))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new hn().initializeView();const L=document.getElementById("widgetNameValue");L&&(L.value=y)}const s=(await k())?.userId,r=await ei(a,s);console.warn("savedWidgetProperties on widget Selected ->",r);let l="";r?.length&&(r?.length>1&&r?.sort((v,y)=>{const E=new Date(v?.created_at).getTime();return new Date(y?.created_at).getTime()-E}),l=r?.[0]?.data?.[a]?.properties?.filter(v=>v.name==="widget-type")?.[0]?.value);const u=document.getElementById("widgetTypeValue");u.setAttribute("data-widgetcontainerid",a),u.setAttribute("data-mainwidgetid",`${e}`),u.value=l;const d=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,h=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,w=document.querySelector(".content-target"),b=new Ct;l&&await b.getTypeValueList(l),b.componentDidMountFunction=d,b.addEventFunction=m,b.mountChildWidgetsFunction=h,await b.mount(w)}function Yl(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(a=>{const i=document.querySelector(a);i&&(i.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const n=document.querySelector('.editor-container .cm-content[data-language="javascript"]');n.textContent="/* Write your JavaScript here */"}const tt=async()=>{const t=document.getElementById("element-info");t.style.display="none"},ht=async t=>{const e=t?.target;let n=e?.tagName;const a=e?.classList?.contains("fslayout-row"),i=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))n="WIDGET",i.classList.add("widget-marker");else if(a)n="Layout Element",i.classList.remove("widget-marker");else if(e?.closest("#widget-details")){n="",i.classList.remove("widget-marker");return}else i.classList.remove("widget-marker");const o=e.getBoundingClientRect(),s=o.left,r=o.top;i.style.display="block",new ResizeObserver(()=>{i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.top=`calc(${r}px)`,i.style.left=`calc(${s}px)`}).observe(e);const u=document.getElementById("element-info_details");u.innerHTML=`<span>${n}</span>`;const c=document.getElementById("select-box"),d=document.getElementById("builder-workarea");d.addEventListener("scroll",Pa),d.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");c.style.transition="0.2s ease all";const p=document.getElementById("element-info");m||(p.style.display="block"),p.style.height="0",p.style.width="0"}),d.addEventListener("resize",Pa)},et=async t=>{t.preventDefault();const e=t.target;Tl("navigator-container"),Ie.publish("page:elementClick",e);const n=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details"))return;const a=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",a);const i=e;V?.previousSelectedStaticElement?.removeAttribute("draggable"),V.staticElement=i,V.previousSelectedStaticElement=V.staticElement,V.staticElement.setAttribute("draggable","true");const o=i.getBoundingClientRect();Kl(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),V.staticElement=e;const y=e?.tagName.toLowerCase(),_=lt.staticElementList?.filter(S=>{const x=S?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return y===x})?.[0]?.id;fn(t,"",_)}));const r=o.left,l=o.top;xt.resetNavigationBar();const u=e;let c;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?c=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(c=e.closest(".edited-widget-container"));const d=e.classList.contains("added-widget-container");if(c||d){let y="";d?y=e?.id:c&&(y=c?.id);const E=[];let L=0;async function _(x,W){return x.reduce((M,$,B)=>($.wrapper===W&&(M.push($),L=B),$.children&&$.children.length>0&&_($.children,W),M),E)}const S=await _(f?.staticWidgetTree?.children,y);f.selectedStaticWidgetTreeInfo={widgetTree:S[0],isChildWidget:!0,childWidgetIndex:L},await je(S[0]),await Z(S[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await je(f?.staticWidgetTree),Z(f?.staticWidgetTree,!1);if(u?.id&&(f.updatedWidgets[u.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const y=document.getElementById("widgetType");y&&(y.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const g=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");g&&(!g?.style?.display||g?.style?.display==="none")&&m&&(g.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(y=>y.remove());let h=!1;if(t instanceof KeyboardEvent&&t.ctrlKey){if(u?.classList.contains("added-widget-container")){A.infoMessageToast("Widget can't be selected");return}u?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(E=>{const L=E.parentElement?.classList,_=E?.classList,S=E.firstChild?.classList,x=L&&L.contains("added-widget-container");let M=_&&_.contains("fslayout-row")||S&&S.contains("fslayout-row")?"Layout":E.tagName;if(x||h){h=!0;return}const $=document.createElement("div");$?.classList.add("tag-name"),$.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${M}
        </span>
      `,E?.parentElement?.appendChild($)}),h?(A.infoMessageToast("Widget can't be selected"),u?.classList.toggle("widget_selected"),u?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await Xi());return}const w=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const y=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;w&&y&&(w.value=y)}else w&&(w.value=f?.staticWidgetTree.name);const b=document.getElementById("select-box");b.style.display="block";const C=new ResizeObserver(()=>{b.style.width=e.offsetWidth+"px",b.style.height=e.offsetHeight+"px",b.style.top=`calc(${l}px)`,b.style.left=`calc(${r}px)`}),T=document.getElementById("publishWidgetBtnContainer");if(T){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(T.classList.remove("d-none"),T.classList.add("d-flex")):(T.classList.remove("d-flex"),T.classList.add("d-none")),console.log("prev selected widget",n,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const y=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,E=y.origin||y.id,L=y.version?y.version.toString():"original";typeof j.initializeWidgetVersions=="function"&&j.initializeWidgetVersions(E,L,y?.timestamp)}catch(y){console.error("Error showing widget versions:",y)}}C.observe(e);const v=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?v.style.display="block":v.style.display="none",(c||d)&&!e.closest(".edited-widget-container")){const E=document.getElementById("element-attributes").querySelector(".row");E.innerHTML="",on(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await zt(u)};function Kl(t){return typeof t.contentEditable<"u"&&ws.includes(t.tagName.toLowerCase())}async function Zl(t){t.preventDefault(),t.stopPropagation()}async function zt(t){let e;if(t?.dataset?.widgetid)return;const n=t?.tagName.toLowerCase(),i=lt.staticElementList?.filter(d=>{const g=d?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return n===g}),o=i?.[0]?.id,s=t.classList.contains("fslayout-row"),r=t?.firstChild?.classList?.contains("fslayout-row");if(s||r)e=await va(o),e?.attributes?.length&&(e.attributes=e?.attributes.map(d=>({...d,selected:"",value:d.name==="class"?"":d.value})));else if(o)e=await At(i);else if(Je.includes(n)||Lt.includes(n)){const d=ys.map(g=>{const m=g.name.toLowerCase(),p=we.get(m)||we.get(g.name);return p?{...g,value:t.style[p.property]||""}:{...g,value:m==="classname"?t.className||"":m==="id"&&t.id||""}});n==="iframe"&&d.push({name:"src",type:"string",value:t.getAttribute("src")||""}),Je.includes(n)&&d.push({name:"elementContent",type:"string",value:t.textContent||""}),e={tag:n,attributes:d}}e.attributes=e?.attributes?.map(d=>d?.name?(d.value=co(t,d.name),d):(console.warn("Found attribute without name:",d),d)).filter(Boolean);let l="";const u=e?.attributes;u?.length&&(l=u?.filter(g=>g?.name==="elementContent")?.[0]?.value,Jl(l,t?.id,e),on(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new hn()?.setAttributes(e,t?.id)}async function Xi(){let t;t=await zl(),t?.attributes?.length&&(t.attributes=t?.attributes.map(n=>({...n,value:""}))),new hn()?.setAttributesForMultipleElements(t)}const Xl=new Ze;async function ec(t){return new Promise(async e=>{const n=await eo(t);e(n)})}async function eo(t){return new Promise(async e=>{let n=new J;n.composition=t,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],n.inpage=100;let a=new J;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const r=(await be([n,a],""))?.data?.the_element?.the_element_s_attribute?.map(d=>{const g=d?.data?.the_attribute,m=g?.the_attribute_name?.[0]?.data?.the_name,p=g?.the_attribute_type?.[0]?.data?.the_type,h=g?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:p,value:h}}),l=r?.map(d=>{let g;return d?.type==="string"?g='<input type="text" class="form-control" onchange="updateAttribute(event)">':d?.type==="boolean"?g='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':d?.type==="array"&&(g=`
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
        `}).join("");let u,c=setInterval(async()=>{u&&(clearInterval(c),r?.forEach(d=>{d?.type!=="boolean"&&u?.setAttribute(d?.name,"")})),u=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(l)})}async function to(t){const n=(t?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=n,D.updateActionHistories()}async function tc(t){const e=t.target,n=e.closest(".widget_container"),a=n.getAttribute("data-elementId"),i=e.textContent?.trim(),o=document.querySelectorAll("#element-attributes .attribute-row");for(const s of o)if(s.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const l=s.querySelector("input");if(l&&l.value!==i){l.value=i||"",await fn({target:e,type:"text",value:i,isDirectEdit:!0},n,a);break}}}async function nc(t,e,n,a){console.log("updateElementAttributeViaEditor ->",e,n),t?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),t=V.staticElement;let o;const s=t?.tagName.toLowerCase(),l=lt.staticElementList?.filter(g=>{const m=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return s===m});o=await At(l),t?.classList.remove("wb-initial-empty");const u=a?.value,c=a?.attribute,d=V.staticElement;if(d){if(c==="className")d?.setAttribute("class",u);else if(c==="height"){const g=u?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;d.style.height=m}else if(c==="width"){const g=u?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;d.style.width=m}else if(c==="elementContent")if(!d?.childNodes?.length)d.innerHTML=u;else for(let g of d?.childNodes){const m=g;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=u;break}}else{const p=document.createTextNode(u);d.insertBefore(p,d.firstChild);break}}else d?.setAttribute(c,u?.trim());o.attributes=o?.attributes?.map(g=>(g?.name===c&&(g?.type==="array"?g.selected=u:g.value=u),g)),await zt(t)}}async function fn(t,e,n){try{const a=t.target.closest(".category-content"),i=a?.id,o=a?.style.display!=="none",r=document.getElementById("advanced-size")?.style.display==="block",c=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),d=document.querySelector(".margin-control")?.closest(".col-12"),g=document.querySelector(".padding-control")?.closest(".col-12"),m=!d?.classList.contains("hidden"),p=!g?.classList.contains("hidden");e=V.staticElement,e?.classList.remove("wb-initial-empty");const h=e?.tagName?.toLowerCase();let w;const b=e?.classList?.contains("fslayout-row"),C=e?.firstChild?.classList?.contains("fslayout-row");if(b||C)w=await va(n);else{const S=lt.staticElementList?.filter(x=>{const W=x?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return h===W});if(S?.length)w=await At(S);else if(Je.includes(h)||Lt.includes(h)){const x=t?.target?.value,W=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(W==="className")e.setAttribute("class",x);else if(W==="elementContent"&&Je.includes(h))e.textContent=x;else if(W==="id")e.id=x;else if(W==="Height"){const M=x?.trim(),$=/^\d+$/.test(M)?`${M}px`:M;e.style.height=$}else if(W==="Width"){const M=x?.trim(),$=/^\d+$/.test(M)?`${M}px`:M;e.style.width=$}else if(W==="Margin"){const $=(x?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.margin=$}else if(W==="Padding"){const $=(x?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.padding=$}else W==="Background Color"?e.style.backgroundColor=x:W==="Float"?e.style.float=x:W==="Color"?e.style.color=x:e?.setAttribute(W,x?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const M=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=M,pe(M)}else{const M=await Et();f.staticWidgetTree.html=M,pe(M)}await zt(e);return}}const T=t?.target?.value,v=t?.target?.type,y=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),E=e,L=E?.getAttribute("isvalidate")==="on";if(L&&E.setAttribute("onchange","applyValidation()"),L&&E?.addEventListener("change",_=>{const S=_.target;Ki(S)}),y==="className")E?.setAttribute("class",T);else if(y==="Height"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.height=S}else if(y==="Width"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.width=S}else if(y==="Minimum-Height"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.minHeight=S}else if(y==="Minimum-Width"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.minWidth=S}else if(y==="Maximum-Height"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.maxHeight=S}else if(y==="Maximum-Width"){const _=T?.trim(),S=/^\d+$/.test(_)?`${_}px`:_;E.style.maxWidth=S}else if(y==="Margin"){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.margin=S}else if(y==="Padding"){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.padding=S}else if(y==="Background Color")E.style.backgroundColor=T;else if(y==="Color")E.style.color=T;else if(y==="Float")E.style.float=T;else if(y==="Alignment")ya.includes(e.tagName.toLowerCase())&&(E.style.textAlign=T);else if(y==="Font Family")wa.includes(e.tagName.toLowerCase())&&(E.style.fontFamily=T);else if(y==="Font Weight")Rt.includes(e.tagName.toLowerCase())&&(E.style.fontWeight=T);else if(y==="Font Size"){if(Rt.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.fontSize=S}}else if(y==="Opacity")E.style.opacity=T;else if(y==="Text Transform")e.tagName.toLowerCase()!=="img"&&(E.style.textTransform=T);else if(y==="Line Height"){if(Ut.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.lineHeight=S}}else if(y==="Letter Spacing"){if(Ut.includes(e.tagName.toLowerCase())){const S=(T?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");E.style.letterSpacing=S}}else if(v==="checkbox"&&!t?.target?.checked)E?.removeAttribute(y),E.value="";else if(y==="elementContent")if(!E?.childNodes?.length)E.innerText=T;else{let _;e?.childNodes?.length&&(_=Array.from(E?.childNodes)?.filter(S=>S.nodeType===3),_?.length&&_.forEach((S,x)=>{x===0?S.nodeValue=T:S.nodeValue=""}))}else y==="align-items"?(E.style.display="flex",E.style.alignItems=T):y==="justify-content"?(E.style.display="flex",E.style.justifyContent=T):y==="text-align"?E.style.textAlign=T:y==="class"?(E.classList.forEach(_=>{_.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||E.classList.remove(_)}),E.classList.add(...T.split(" "))):y&&E?.setAttribute(y,T?.trim());if(w.attributes=w?.attributes?.map(_=>(_?.name===y&&(_?.type==="array"?_.selected=T:_?.type==="boolean"&&!t?.target?.checked?_.value="":_.value=T),_)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const _=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=_,pe(_)}else{const _=await Et();f.staticWidgetTree.html=_,pe(_)}D.updateActionHistories(),await zt(e),setTimeout(()=>{if(i&&o){const W=document.getElementById(i);if(W){W.style.display="block";const M=W.previousElementSibling?.querySelector(".material-symbols-outlined");M&&(M.textContent="do_not_disturb_on")}}if(r){const W=document.getElementById("advanced-size");if(W){W.style.display="block";const M=W.previousElementSibling?.querySelector(".material-symbols-outlined");M&&(M.textContent="expand_less")}}const _=document.querySelector(".spacing-tabs");if(_&&c){const W=_.querySelector(`.${c}-tab`);W&&Ta(W,c)}const S=document.querySelector(".margin-control")?.closest(".col-12"),x=document.querySelector(".padding-control")?.closest(".col-12");m?(S?.classList.remove("hidden"),x?.classList.add("hidden")):p&&(S?.classList.add("hidden"),x?.classList.remove("hidden"))},0)}catch(a){console.error("error updating attribute",a.message)}}function no(t,e){let n=[];return t.wrapper===e&&n.push(t),Array.isArray(t.children)&&t.children.forEach(a=>{n=n.concat(no(a,e))}),n}async function ac(t){const e=t?.target?.value,n=t?.target?.type,a=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),i=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');a==="className"?i?.setAttribute("class",e):n==="checkbox"&&!t?.target?.checked?i?.removeAttribute(a):a==="elementContent"?i.innerText=e:i?.setAttribute(a,e)}async function ba(t){return new Promise(async e=>{let n=new J;n.composition=t,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],n.inpage=100;let a=new J;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const o=await be([n,a],""),s=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name,r=o?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=o?.data?.the_element?.the_element_void?.[0]?.data?.the_void,u=o?.data?.the_element?.the_element_default?.[0]?.data?.the_default,c=o?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,d=o?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=o?.data?.the_element?.the_element_s_attribute?.map(h=>{const w=h.id,b=h?.data?.the_attribute,C=b?.the_attribute_name?.[0]?.data?.the_name,T=b?.the_attribute_type?.[0]?.data?.the_type,v=b?.the_attribute_value?.[0]?.data?.the_value;return{id:w,name:C,type:T,value:v}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:t,name:s,tag:r,void:l,default:u,icon:c,division:d,attributes:m})})}async function At(t){const e=t?.[0],n=e.id,a=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,i=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,o=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,s=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,r=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,l=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,c=e?.data?.the_element?.the_element_s_attribute?.map(g=>{const m=g.id,p=g?.data?.the_attribute,h=p?.the_attribute_name?.[0]?.data?.the_name,w=p?.the_attribute_type?.[0]?.data?.the_type,b=p?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:h,type:w,value:b}});return c?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),ya.includes(i.toLowerCase())&&c.push({name:"Alignment",type:"array",value:"",division:"inline"}),wa.includes(i.toLowerCase())&&c.push({name:"Font Family",type:"array",value:"",division:"inline"}),Rt.includes(i.toLowerCase())&&c.push({name:"Font Weight",type:"array",value:"",division:"inline"}),Fl.includes(i.toLowerCase())&&c.push({name:"Font Size",type:"string",value:"",division:"inline"}),i.toLowerCase()!=="img"&&c.push({name:"Text Transform",type:"array",value:"",division:"inline"}),Ut.includes(i.toLowerCase())&&c.push({name:"Line Height",type:"string",value:"",division:"inline"}),Ut.includes(i.toLowerCase())&&c.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:n,name:a,tag:i,void:o,default:s,icon:r,division:l,attributes:c}}async function ao(t){const{id:e,value:n,dataset:{page_id:a}}=t.target;Ee(e,n),await Xl.updatePageField(e,n,Number(a))}async function Jn(t){[{key:"meta_title",value:t?.[`the_${I.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:t?.[`the_${I.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:t?.[`the_${I.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:t?.[`the_${I.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:t?.[`the_${I.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:t?.[`the_${I.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:t?.[`the_${I.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(n=>{n.value&&Ee(n.key,n.value)})}async function Ee(t,e){const n=document.getElementById("fspage-properties")||ic();let a="";switch(t){case"width":ut(".fspage { width: [^;]+ !important; }"),a=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":ut(".fspage { font-size: [^;]+; }"),a=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":ut(".fspage { font-family: [^;]+; }"),a=e?`.fspage { font-family: ${e}; }`:"";break;case"type":ut(".fspage { width: 1200px; margin: 0 auto; }"),ut(".fspage { width: 100%; padding: 0; }"),e==="fixed"?a=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?a=".fspage { width: 100%; padding: 0; }":a="";break;case"meta_title":document.title=e;break;case"meta_keywords":St(t.replace("meta_",""),e);break;case"meta_description":St(t.replace("meta_",""),e);return}n.textContent+=a}function ut(t){const e=document.getElementById("fspage-properties");if(!e)return;let n=e?.textContent;n=n?n.replace(new RegExp(t,"g"),""):"",e.textContent=n}function ic(){const t=document.createElement("style");return t.id="fspage-properties",document.head.appendChild(t),t}function St(t,e){let n=document.querySelector(`meta[name="${t}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",t),document.head.appendChild(n)),n.setAttribute("content",e)}async function io(t){try{document.querySelectorAll(".element-selected")?.forEach(async n=>{const a=n?.getAttribute("data-elementId"),i=n?.tagName?.toLowerCase();let o;const s=n?.classList?.contains("fslayout-row"),r=n?.firstChild?.classList?.contains("fslayout-row");if(s||r)o=await va(a);else{const p=lt.staticElementList?.filter(h=>{const w=h?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return i===w});if(p?.length)o=await At(p);else if(Je.includes(i)||Lt.includes(i)){const h=t?.target?.value,w=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(w==="className")n.setAttribute("class",h);else if(w==="elementContent"&&Je.includes(i))n.textContent=h;else if(w==="id")n.id=h;else if(w==="Height"){const b=h?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;n.style.height=C}else if(w==="Width"){const b=h?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;n.style.width=C}else if(w==="Margin"){const C=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.margin=C}else if(w==="Padding"){const C=(h?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.padding=C}else w==="Background Color"?n.style.backgroundColor=h:w==="Color"&&(n.style.color=h);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const b=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=b,pe(b)}else{const b=await Et();f.staticWidgetTree.html=b,pe(b)}await Xi();return}}const l=t?.target?.value,u=t?.target?.type,c=t?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),d=n,g=d?.getAttribute("isvalidate")==="on";if(g&&d.setAttribute("onchange","applyValidation()"),g&&d?.addEventListener("change",m=>{const p=m.target;Ki(p)}),c==="className")d?.setAttribute("class",l);else if(c==="Height"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;d.style.height=p}else if(c==="Width"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;d.style.width=p}else if(c==="Margin"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");d.style.margin=p}else if(c==="Padding"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");d.style.padding=p}else if(c==="Background Color")d.style.backgroundColor=l;else if(c==="Color")d.style.color=l;else if(u==="checkbox"&&!t?.target?.checked)d?.removeAttribute(c),d.value="";else if(c==="elementContent")if(!d?.childNodes?.length)d.innerText=l;else for(let m of d?.childNodes){const p=m;if(p.nodeValue){if(p.nodeType===3&&p.nodeValue.trim()){p.nodeValue=l;break}}else{const h=document.createTextNode(l);d.insertBefore(h,d.firstChild);break}}else c==="align-items"?(d.style.display="flex",d.style.alignItems=l):c==="justify-content"?(d.style.display="flex",d.style.justifyContent=l):c==="text-align"?d.style.textAlign=l:c==="class"?(d.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||d.classList.remove(m)}),d.classList.add(...l.split(" "))):d?.setAttribute(c,l?.trim());if(o.attributes=o?.attributes?.map(m=>(m?.name===c&&(m?.type==="array"?m.selected=l:m?.type==="boolean"&&!t?.target?.checked?m.value="":m.value=l),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await Ft(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,pe(m)}else{const m=await Et();f.staticWidgetTree.html=m,pe(m)}D.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function Ye(){const t=document.querySelectorAll("link.vde-css"),n=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),a=[];n?.length&&n.forEach((i,o)=>{const s=i.value,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",s),document.head.appendChild(r),a.push({order:o,url:i.value})}),t?.length&&t?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=a,D.updateActionHistories()}async function Ke(){const t=document.querySelectorAll("script.vde-js"),n=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),a=[];n?.length&&n.forEach(async(i,o)=>{await new Promise((s,r)=>{const l=i.value,u=document.createElement("script");u.classList.add("vde-js"),u.setAttribute("type","text/javascript"),u.setAttribute("src",l),u.setAttribute("crossorigin","anonymous"),u.onload=()=>{s()},u.onerror=c=>{console.error("Failed to load script:",l,c),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(u),a.push({order:o,url:i.value})})}),t?.length&&t?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=a,D.updateActionHistories()}function _a(){wn(f.staticWidgetTree)}async function oo(t){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter CSS URL",a.addEventListener("change",async()=>{await Ye()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Ye(),await yn(t)},e.appendChild(n),e.appendChild(a),e.appendChild(i),e}let Ua=0;async function Wt(t){const e=++Ua,n=t?t?.library?.js:f.widgetTree?.library?.js,a=document.getElementById("sortable-js-list");a.innerHTML="",Ea(),n?.length&&n?.sort((i,o)=>Number(i?.order)-Number(o?.order));for(const i of n){if(e!==Ua){console.log("Skipping outdated call for",i.url);return}await new Promise((o,s)=>{const r=document.createElement("li");r.className="list-item",r.draggable=!0;const l=document.createElement("span");l.className="material-symbols-outlined",l.innerText="drag_handle";const u=document.createElement("input");u.type="text",u.value=i?.url,u.addEventListener("change",async()=>{await Ke()});const c=document.createElement("button");c.className="remove-button",c.innerHTML='<span class="material-symbols-outlined">delete</span>',c.onclick=async function(){r.remove(),await Ke(),await Wt(t)},r.appendChild(l),r.appendChild(u),r.appendChild(c),a?.appendChild(r);const d=document.createElement("script");return d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",i.url),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{o()},d.onerror=g=>{console.error("Failed to load script:",i.url,g),s(new Error(`Failed to load script: ${i.url}`))},document.body.appendChild(d),r})}}function Jt(){const t=document.querySelectorAll("link.vde-css");t?.length&&t?.forEach(e=>{e.remove()})}function Ea(){const t=document.querySelectorAll("script.vde-js");t?.length&&t?.forEach(e=>{e.remove()})}async function yn(t){const e=t?t?.library?.css:f.widgetTree?.library?.css,n=document.getElementById("sortable-list");n.innerHTML="",Jt(),e?.length&&e?.sort((a,i)=>Number(a?.order)-Number(i?.order)),e?.forEach(a=>{const i=document.createElement("li");i.className="list-item",i.draggable=!0;const o=document.createElement("span");o.className="material-symbols-outlined",o.innerText="drag_handle";const s=document.createElement("input");s.type="text",s.value=a.url,s.addEventListener("change",async()=>{await Ye()});const r=document.createElement("button");r.className="remove-button",r.innerHTML='<span class="material-symbols-outlined">delete</span>',r.onclick=async function(){i.remove(),Jt(),await Ye(),await yn(t)},i.appendChild(o),i.appendChild(s),i.appendChild(r),n?.appendChild(i);const l=document.createElement("link");return l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",a.url),document.head.appendChild(l),i})}function oc(t){const e=document.getElementById("sortable-list");if(!e)return;let n=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(n=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),Jt(),await Ye(),await yn(f.widgetTree?.library?.css?.length?f.widgetTree:t))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!n)return;const i=sc(e,a.clientY),o=n;i===null?e.appendChild(o):e.insertBefore(o,i)})}function sc(t,e){return[...t.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}async function wn(t){const e=document.getElementById("sortable-list");e.innerHTML="";const n=document.getElementById("add-list");if(!e||!n){console.error("Required elements not found");return}if(t?.library?.css?.length)await yn(t);else{const o=await oo(t);e.appendChild(o)}oc(t);const a=document.getElementById("sortable-js-list");a.innerHTML="";const i=document.getElementById("add-js-list");if(!a||!i){console.error("Required elements not found");return}if(t?.library?.js?.length)await Wt(t);else{const o=await lo(t);a.appendChild(o)}rc(t)}async function so(t){const e=document.getElementById("sortable-list"),n=await oo(t);e.appendChild(n)}async function ro(t){const e=document.getElementById("sortable-js-list"),n=await lo(t);e.appendChild(n)}async function lo(t){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter JS URL",a.addEventListener("change",async()=>{await Ke()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Ke(),await Wt(t)},e.appendChild(n),e.appendChild(a),e.appendChild(i),e}function rc(t){const e=document.getElementById("sortable-js-list");if(!e)return;let n=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(n=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),Ea(),await Ke(),await Wt(f.widgetTree?.library?.js?.length?f.widgetTree:t))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!n)return;const i=lc(e,a.clientY),o=n;i===null?e.appendChild(o):e.insertBefore(o,i)})}function lc(t,e){return[...t.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const o=i.getBoundingClientRect(),s=e-o.top-o.height/2;return s<0&&s>a.offset?{offset:s,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function cc(t){const e=t.toLowerCase();return we.has(e)?Xe.STYLE:Vl.has(e)?Xe.BOOLEAN:Rl.has(e)?Xe.FORM:Ul.has(e)?Xe.SPECIAL:Xe.FORM}function dc(t,e){if(!t&&e==="Background Color")return"#FFFFFF";if(!t)return"#000000";if(t.startsWith("#"))return t;const n=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(n){const[a,i,o,s]=n;return"#"+[i,o,s].map(r=>{const l=parseInt(r).toString(16);return l.length===1?"0"+l:l}).join("")}return"#000000"}function co(t,e){if(!e)return console.warn("Attribute name is undefined"),"";if(t.classList.contains("fslayout-row")||t.firstChild instanceof HTMLElement&&t.firstChild.classList?.contains("fslayout-row"))return uo(t,e);const n=e.toLowerCase();if(we.has(n)||we.has(e)){const a=we.get(n)||we.get(e);if(!a)return"";const i=t.style[a.property]||t.getAttribute(`data-${n}`);return n==="color"||n==="background-color"||n==="bg-color"||e==="Color"||e==="Background Color"?dc(i,e):i||""}if(n==="elementcontent"){let a,i;return t?.childNodes?.length&&(a=Array.from(t?.childNodes)?.filter(o=>o?.nodeType===3),a?.length&&(i=a?.map(o=>o?.nodeValue?.trim()).join(""))),i?i?.trim():t?.textContent||""}return n==="classname"?t.classList.value?.replace(/wb-initial-empty/g,"")||"":t.getAttribute(n)||""}function uo(t,e){const n=e.toLowerCase();return n==="class"||n==="classname"?Array.from(t.classList).filter(a=>!a.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):n==="align-items"?t.style.alignItems||"":n==="text-align"?t.style.textAlign||"":t.getAttribute(n)||""}function uc(t,e,n){const a=e.toLowerCase();if(t.id){const i=t.getAttribute("data-attributes");if(i){const o=JSON.parse(i),s=o.find(r=>r.name===e);s&&((s.type==="array"||pt(e))&&(s.selected=n),s.value=n),t.setAttribute("data-attributes",JSON.stringify(o))}}if(we.has(a)||we.has(e)){const i=we.get(a)||we.get(e);if(!i)return;t.setAttribute(`data-${a}`,n),i.needsUnit&&n&&/^\d+$/.test(n)?t.style[i.property]=`${n}px`:t.style[i.property]=n;return}n?t.setAttribute(a,n):t.removeAttribute(a)}function Ta(t,e){const n=t.closest(".spacing-tabs");if(!n)return;n.querySelectorAll(".spacing-tab-btn").forEach(o=>o.classList.remove("active")),t.classList.add("active");const a=n.nextElementSibling,i=a?.nextElementSibling;e==="margin"?(a?.classList.remove("hidden"),i?.classList.add("hidden")):(a?.classList.add("hidden"),i?.classList.remove("hidden"))}window.toggleSpacingBox=Ta;let Ve=[],Gt,vt="",za=!1,Ja="";const Pt="storeOwner",vn=async t=>{wc(t),await Promise.all([bc(t),yc(t)]),ui("projectId",t),mi(),mo()},mc=async t=>{document.title=t.storeName||"Store",po(t.storeLogo),Gt=t.mainPageId,vt=t.projectName,Ve=t.pagesList,localStorage.setItem(Pt,btoa(t.entityId)),ui("projectId",t.projectId),mi(),mo()},mo=()=>{window.addEventListener("popstate",()=>An(window.location.href)),document.addEventListener("click",t=>{const n=t.target.closest("a");if(!n||n.target==="_blank"||n.hasAttribute("download")||n.getAttribute("rel")==="external"||t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||n.origin!==location.origin)return;const a=n.getAttribute("href");!a||a.startsWith("#")||a.startsWith("mailto:")||(t.preventDefault(),It(a),An(a))},!0),An(window.location.href)},An=async t=>{const{pathname:e}=new URL(t,window.location.origin);if(Ja==e)return;Ja=e;const n=pc(e),a=gc(t),i=document.head.querySelectorAll("style#mystyleid");if(console.log("abc",e,Ve,n),n){const o=Ve.find(s=>s.path==n.route);Ga(o,{params:n?.params,queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await Qa(o?.id);Jn(s?.data?.[`the_${I.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else if(e==="/"&&Gt){const o=Ve.find(s=>s.id==Gt);Ga(o,{params:{},queryParams:a}).then(async()=>{Array.from(i).forEach(r=>r.remove());const s=await Qa(o?.id);Jn(s?.data?.[`the_${I.PAGE_COMP_NAME}`])}).catch(s=>{console.error("Error during page route chain:",s)})}else{const o=Ve.find(s=>s.path=="/404");o?go(o.page):document.querySelector("#app").innerHTML="<h1>404</h1>",Array.from(i).forEach(s=>s.remove())}document.getElementById("global-loader")?.classList.add("d-none")},Ga=async(t,e)=>{hc(t),t.page?await go(t,e):console.warn("No page content Found")};function gc(t){const{searchParams:e}=new URL(t,window.location.origin),n={};for(const[a,i]of e.entries())n[a]?n[a]=Array.isArray(n[a])?[...n[a],i]:[n[a],i]:n[a]=i;return n}const pc=t=>{const a=[...Ve.map(i=>i.path)].sort((i,o)=>{const s=i.split("/").filter(Boolean),r=o.split("/").filter(Boolean),l=s.filter(c=>c.startsWith(":")).length,u=r.filter(c=>c.startsWith(":")).length;return l!==u?l-u:r.length-s.length});console.log("routes",a);for(let i=0;i<a.length;i++){const s=(a[i]?.startsWith("/")?a[i]:`/${a[i]}`).split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(s.length!==r.length)continue;const l={};if(s.every((c,d)=>c.startsWith(":")?(l[c.slice(1)]=r[d],!0):c===r[d]))return{route:a[i],params:l}}return null},go=async(t,e)=>{const n=document.querySelector("#app");n&&await De(t?.page,n,e)};async function Qa(t){return new Promise(async e=>{let n=new P;n.conceptIds=[t],n.outputFormat=se,n.selectors=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_meta_title`,`the_${I.PAGE_COMP_NAME}_meta_description`,`the_${I.PAGE_COMP_NAME}_meta_keywords`,`the_${I.PAGE_COMP_NAME}_width`,`the_${I.PAGE_COMP_NAME}_type`,`the_${I.PAGE_COMP_NAME}_font_family`,`the_${I.PAGE_COMP_NAME}_font_size`,`the_${I.PAGE_COMP_NAME}_body`,`the_${I.WIDGET_COMP_NAME}_clean`],n.inpage=100,me(n,"").subscribe(async a=>{a.length?e(a?.[0]):!Array.isArray(a)&&a?.data==null&&e({error:!0,message:"There is no data."})}).catch(a=>{const i=a?.message;e({error:!0,message:i})})})}const hc=t=>{if(za)return;const e=new URL(window.location.href).hostname.split(".")[0].split("-")[1],n=fc(e,t),a=new Blob([JSON.stringify(n)],{type:"application/json"}),i=URL.createObjectURL(a),o=document.createElement("link");o.rel="manifest",o.href=i,document.head.appendChild(o),za=!0};function fc(t,e){let n="/icons/icon-192x192.png",a="/icons/icon-512x512.png",o=window.location.hostname;return o.startsWith("www.")&&(o=o.substring(4)),o==="sleepinghats.com"&&(n="/icons/sleepinghats/icon-192x192.png",a="/icons/sleepinghats/icon-152x152.png"),console.log("rootDomain",o),o==="preview-103071837.develop.freeschema.com"||o=="preview-103071837.localhost"?(n="/icons/lms_chat/icon-192x192.png",a="/icons/lms_chat/maskable-icon.png",document.title="",{name:"LMS Chat",short_name:"LMS",start_url:location.origin+"/index.html",display:"standalone",theme_color:"#19c37d",background_color:"#ffffff",icons:[{src:`${location.origin}${n}`,sizes:"192x192",type:"image/png",purpose:"any"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"maskable"}]}):{name:`${vt||e.title||e.slug||t} - ${t}`,short_name:`${vt||t}`,start_url:location.origin+"/index.html",display:"standalone",theme_color:t?"rgba(106, 27, 154, 1);":"#ffffff",background_color:"#eee",icons:[{src:`${location.origin}${n}`,sizes:"192x192",type:"image/png",purpose:"any maskable"},{src:`${location.origin}${a}`,sizes:"512x512",type:"image/png",purpose:"any maskable"}],share_target:{action:`${location.origin}/captures`,method:"POST",enctype:"multipart/form-data",params:{title:"title",text:"text",url:"url",files:[{name:"media",accept:["image/*","video/*"]}]}}}}const yc=async t=>{try{localStorage.removeItem(Pt);const e=new P;e.name="entity",e.typeConnection="the_entity_s_project",e.reverse=!0;const n=new P;n.name="project",n.conceptIds=[t],n.freeschemaQueries=[e],n.outputFormat=Lo;const a=await Pe(n,"");if(!a?.[0]?.the_project?.the_entity_s_project_reverse?.[0]?.id)return;a?.[0]?.the_project?.the_entity_s_project_reverse?.length==1&&localStorage.setItem(Pt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()));for(let i=0;i<a?.[0]?.the_project?.the_entity_s_project_reverse?.length;i++)(a?.[0]?.the_project?.the_entity_s_project_reverse[i]).id!=102176333&&localStorage.setItem(Pt,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()))}catch(e){console.error(e)}};async function wc(t){try{const e=new P;e.name="store",e.typeConnection="the_project_refers",e.selectors=["the_store_name","the_store_logo"];const n=new P;n.name="project",n.conceptIds=[t],n.freeschemaQueries=[e];const i=(await Pe(n,""))?.[0]?.the_project?.the_project_refers?.the_store,o=i?.the_store_name?.the_name;document.title=o||"Store",po(i?.the_store_logo?.the_logo)}catch(e){console.error(e)}}function vc(t){return new Promise((e,n)=>{const a=new Image;a.crossOrigin="anonymous",a.src=t,a.onload=()=>{const o=document.createElement("canvas");o.width=o.height=512;const s=o.getContext("2d");s?.clearRect(0,0,o.width,o.height);const r=a.width/a.height;let l=512,u=512;r>1?u=512/r:l=512*r;const c=(512-l)/2,d=(512-u)/2;s?.drawImage(a,c,d,l,u);const g=o.toDataURL("image/png");e(g)},a.onerror=()=>{n(new Error("Image failed to load. Check CORS."))}})}async function bc(t){const n=(await k())?.token;let a=new P;a.name="page",a.typeConnection=`the_${I.PROJECT_COMP_NAME}_${re.PROJECT_PAGE_LINKER}`,a.selectors=[`the_${I.PAGE_COMP_NAME}_title`,`the_${I.PAGE_COMP_NAME}_slug`,`the_${I.PAGE_COMP_NAME}_body`];let i=new P;i.name="project",i.conceptIds=[t],i.selectors=[`the_${I.PROJECT_COMP_NAME}_name`,`the_${I.PROJECT_COMP_NAME}_main_page`],i.freeschemaQueries=[a],i.outputFormat=se;const o=await Pe(i,n);let s={mainPageId:o?.[0]?.data?.the_project?.the_project_main_page?.id,name:o?.[0]?.data?.the_project?.the_project_name?.data.the_name||"",pages:o?.[0]?.data?.the_project?.the_project_s_page?.map(r=>({id:r?.id,title:r?.data?.the_page?.the_page_title?.data?.the_title||"",path:r?.data?.the_page?.the_page_slug?.data?.the_slug||"",page:r?.data?.the_page?.the_page_body?.id}))||[]};Gt=s.mainPageId,vt=s.name,Ve=s.pages}function po(t=""){var e=document.querySelector("link[rel~='icon']");e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e),setTimeout(()=>e?.remove(),1e4)),t&&vc(t).then(n=>{e.href=n}).catch(n=>{console.error(n),e.href="https://boomconcole.com/freeschema/127b5f42-f453-4904-bf4d-d2a6abc9327c.png"})}const _c=async t=>{let e=new P;e.typeConnection="the_project_environment",e.selectors=["the_environment_name","the_environment_value"];let n=new P;n.conceptIds=[t],n.freeschemaQueries=[e];let a=await Pe(n,""),i=null;for(let o=0;o<a.length;o++){let s=a[o]?.the_project;if(s){let l=s?.the_project_environment?.the_environment;if(l&&(i=l?.the_environment_value?.the_environment_value,i))try{i=JSON.parse(i)}catch(u){console.error("Error parsing environment values:",u),i=null}}}if(console.log("Environment values loaded:",i),i){for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)){const s=i[o];console.log("Setting environment variable:",o,s),Yn.setValue(o,s)}}},Wn=[{path:"/",linkLabel:"Home",content:async()=>(await fe(()=>import("./home.index-i62EXbeG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).default},{path:"/preview",linkLabel:"Preview",content:async()=>(await fe(()=>import("./preview.index-DCWzQofe.js"),__vite__mapDeps([13,4,1]))).default},{path:"/page-preview/:id",linkLabel:"Page Preview",content:async()=>(await fe(()=>import("./page-preview.index-RJCpVORg.js"),__vite__mapDeps([14,4,9,6,7,8,10,11,15]))).default,isAuthenticated:!0},{path:"/documentation",linkLabel:"Documentation",content:async()=>(await fe(()=>import("./documentation.index-DPpQ6t5P.js"),__vite__mapDeps([16,1,6,7,8,17,18,2,3,4,5,9,10,11,19]))).default},{path:"/subscription",linkLabel:"Subscription",content:async()=>(await fe(()=>import("./subscription.index-BQJCREmJ.js"),__vite__mapDeps([20,4,1,2,3,5,9,6,7,8,10,11,21]))).default,isAuthenticated:!0},{path:"/video-tutorial",linkLabel:"videos",content:async()=>(await fe(()=>import("./video-tutorial.index-DeE7ewab.js"),__vite__mapDeps([22,1,2,3,4,5,9,6,7,8,10,11,23]))).default},{path:"/Community",linkLabel:"Community",content:async()=>(await fe(()=>import("./community.index-CtAZZeM6.js"),__vite__mapDeps([24,4,1,2,3,5,9,6,7,8,10,11,25]))).default}],ho="env_secret_key_2024";function Ec(t){try{const n=btoa(t)+ho,i=btoa(n).split("").reverse().join("");return btoa(i+"_salt_"+Date.now().toString(36))}catch(e){return console.error("Encryption error:",e),t}}function Tc(t){try{const e=atob(t),n=e.lastIndexOf("_salt_");if(n===-1)throw new Error("Invalid encrypted format");const i=e.substring(0,n).split("").reverse().join(""),o=atob(i),s=o.substring(0,o.length-ho.length);return atob(s)}catch(e){console.error("Decryption error:",e);try{return JSON.parse(t),t}catch{return"{}"}}}function Ya(t){const e=JSON.stringify(t);return Ec(e)}function bn(t){const e=Tc(t);try{return JSON.parse(e)}catch(n){return console.error("Error parsing decrypted object:",n),null}}const fo="selected_environment_values",_n="selected_environment_index";function Qt(t,e){try{const n=Ya(t);if(localStorage.setItem(fo,n),e!==void 0){const a=Ya({index:e});localStorage.setItem(_n,a)}for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&Yn.setValue(a,t[a]);console.log("Environment values saved to encrypted localStorage")}catch(n){console.error("Error saving environment to localStorage:",n)}}function Sa(){try{const t=localStorage.getItem(fo);if(t){const e=bn(t);if(e){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&Yn.setValue(n,e[n]);return console.log("Environment values loaded from encrypted localStorage to RAM"),e}}}catch(t){console.error("Error loading environment from localStorage:",t)}return null}async function Sc(){const t=document.getElementById("select-environment-dropdown");if(!t){console.warn("Environment dropdown not found");return}const n=(await k())?.entityId;if(!n){console.warn("Entity ID not found in profile data");return}let a=new P;a.name="environment",a.typeConnection="the_entity_s_environment",a.selectors=["the_environment_name","the_environment_value"];let i=new P;i.name="entity",i.conceptIds=[n],i.freeschemaQueries=[a],i.outputFormat=se;let o=await Pe(i,""),s=[];for(let r=0;r<o.length;r++){let l=o[r]?.data?.the_entity;if(l){let u=l?.the_entity_s_environment;const c=Array.isArray(u)?u:[u].filter(Boolean);for(let d of c){let g=d?.data?.the_environment;if(g){let m=d?.id,p=g?.the_environment_name?.data?.the_name||"Unnamed",h=g?.the_environment_name?.id,w=g?.the_environment_value?.id,b=g?.the_environment_value?.data?.the_environment_value;if(b)try{b=JSON.parse(b)}catch(T){console.error("Error parsing environment values:",T),b=null}let C={id:m,name:p,values:b,nameConnectionId:h,valueConnectionId:w};s.push(C)}}}}t.innerHTML='<option value="">Select Environment</option>';for(let r=0;r<s.length;r++){let l=s[r]?.name;const u=document.createElement("option");u.value=r.toString(),u.textContent=l,t.appendChild(u)}window.__allEnvironments=s;try{const r=localStorage.getItem(_n);if(r!==null){const l=bn(r);l&&l.index!==void 0&&(t.value=l.index.toString())}}catch(r){console.error("Error restoring selected environment:",r)}}async function yo(){try{Sa();const e=(await k())?.entityId;if(!e){console.warn("Entity ID not found in profile data");return}let n=new P;n.name="environment",n.typeConnection="the_entity_s_environment",n.selectors=["the_environment_name","the_environment_value"];let a=new P;a.name="entity",a.conceptIds=[e],a.freeschemaQueries=[n];let i=await Pe(a,"");const o=localStorage.getItem(_n);let s=null;if(o){const l=bn(o);l&&l.index!==void 0&&(s=l.index)}let r=[];for(let l=0;l<i.length;l++){let u=i[l]?.the_entity;if(u){let c=u?.the_entity_s_environment;const d=Array.isArray(c)?c:[c].filter(Boolean);for(let g of d){let m=g?.the_environment;if(m){let p=m?.the_environment_name?.the_name||"Unnamed",h=m?.the_environment_value?.the_environment_value;if(h)try{h=JSON.parse(h)}catch(b){console.error("Error parsing environment values:",b),h=null}let w={name:p,values:h};r.push(w)}}}}if(s!==null&&r[s]){const l=r[s];l.values&&(Qt(l.values,s),console.log(`Environment "${l.name}" loaded successfully`))}else r.length>0&&r[0].values&&(Qt(r[0].values,0),console.log(`Default environment "${r[0].name}" loaded successfully`))}catch(t){console.error("Error initializing environment variables:",t)}}async function Cc(){const t=document.getElementById("select-environment-dropdown");if(!t||!t.value){console.warn("No environment selected");return}const e=Number(t.value),a=(window.__allEnvironments||[])[e];if(!a){console.warn("Selected environment not found");return}const{createEnvironmentEditorWithData:i}=await fe(async()=>{const{createEnvironmentEditorWithData:o}=await Promise.resolve().then(()=>qr);return{createEnvironmentEditorWithData:o}},void 0);await i(a.name,a.values,a.id,a.nameConnectionId,a.valueConnectionId)}async function Lc(){Sa();let t=document.getElementById("select-environment-dropdown");if(!t){console.warn("Environment dropdown not found");return}const n=(await k())?.entityId;if(!n){console.warn("Entity ID not found in profile data");return}let a=new P;a.name="environment",a.typeConnection="the_entity_s_environment",a.selectors=["the_environment_name","the_environment_value"];let i=new P;i.name="entity",i.conceptIds=[n],i.freeschemaQueries=[a],i.outputFormat=se;let o=await Pe(i,""),s=[];for(let c=0;c<o.length;c++){let d=o[c]?.data?.the_entity;if(d){let g=d?.the_entity_s_environment;const m=Array.isArray(g)?g:[g].filter(Boolean);for(let p of m){let h=p?.data?.the_environment;if(h){let w=p?.id,b=h?.the_environment_name?.data?.the_name||"Unnamed",C=h?.the_environment_name?.id,T=h?.the_environment_value?.id,v=h?.the_environment_value?.data?.the_environment_value;if(v)try{v=JSON.parse(v)}catch(E){console.error("Error parsing environment values:",E),v=null}let y={id:w,name:b,values:v,nameConnectionId:C,valueConnectionId:T};s.push(y)}}}}window.__allEnvironments=s;for(let c=0;c<s.length;c++){let d=s[c]?.name;const g=document.createElement("option");g.value=c.toString(),g.textContent=d,t.appendChild(g)}const r=t.cloneNode(!0);t.parentNode?.replaceChild(r,t),t=r;try{const c=localStorage.getItem(_n);if(c!==null){const d=bn(c);d&&d.index!==void 0&&(r.value=d.index.toString())}}catch(c){console.error("Error restoring selected environment:",c)}const l=document.getElementById("add-environment-btn");l&&l.addEventListener("click",()=>{da()});const u=document.getElementById("edit-environment-btn");u&&(u.disabled=!r.value,u.addEventListener("click",()=>{Cc()})),r.addEventListener("change",function(){const c=Number(this.value),g=(window.__allEnvironments||[])[c];if(u&&(u.disabled=!this.value),!g||!g.values){console.warn("No environment values found for selected environment");return}const m=g.values;Qt(m,c)})}const wo=Object.freeze(Object.defineProperty({__proto__:null,getEnvironmentFromDatabase:Lc,initializeEnvironmentVariables:yo,loadEnvironmentFromStorage:Sa,refreshEnvironmentDropdown:Sc,saveEnvironmentToStorage:Qt},Symbol.toStringTag,{value:"Module"})),Ka=document.getElementById("app");function Oe(){return""}function xc(t){const e=Oe();if(!t)return e||"/";if(e&&t.startsWith(e))return t;const n=t.startsWith("/")?t:"/"+t;return(e+n).replace(/\/+/g,"/")}const Ac=()=>{let t=localStorage?.getItem("profile")||"";return t?!!JSON.parse(t)?.token:!1},Wc=t=>new RegExp("^"+t.replace(/:\w+/g,"(.+)")+"$"),Ic=t=>{const e=t.result.slice(1),n=Array.from(t.route.path.matchAll(/:(\w+)/g)).map(a=>a[1]);return Object.fromEntries(n.map((a,i)=>[a,e[i]]))},kc=async()=>{const t=new URLSearchParams(location.search);return Object.fromEntries(t.entries())};async function Ca(){const t=Oe();let e=window.location.pathname;t&&e.startsWith(t)&&(e=e.substring(t.length)||"/",e.startsWith("/")||(e="/"+e));let a=Wn.map(r=>({route:r,result:e.match(Wc(r.path))})).find(r=>r.result!==null);if(!a)a={route:Wn.find(l=>l.path==="/404"),result:[e]};else if(a.route.isAuthenticated&&!Ac()){const r=Wn.find(l=>l.path==="/");a={route:r,result:[r?.path]},history.replaceState(null,"",t+r?.path+window.location.search)}const i={...await Ic(a),...await kc()},o=await a.route.content(i),s=new o(i);Ka.innerHTML="",await s?.mount(Ka)}const vo=async t=>{const e=document.getElementById("global-loader");e?.classList.remove("d-none");try{const n=Oe(),a=t.startsWith(n)?t:n+t;history.pushState(null,"",a),await Ca()}finally{e?.classList.add("d-none")}},bo=async t=>{const e=Oe();window.history.pushState({route:t},"",e+t),Ca()},It=t=>{const e=Oe(),n=t.startsWith(e)?t:e+t;history.pushState(null,"",n)},Mc=()=>{const t=Oe(),e=window.location.pathname+window.location.search;let n=e;t&&e.startsWith(t)&&(n=e.substring(t.length)||"/",n.startsWith("/")||(n="/"+n)),vo(n)},Pc=()=>{customElements.define("router-link",class extends HTMLElement{constructor(){super(),this.handleClick=this.handleClick.bind(this),this.href&&this.attachShadow({mode:"open"})}connectedCallback(){const t=document.createElement("a"),e=Oe();this.href&&(t.href=e+this.href),this.forwardAttributes(t),t.setAttribute("part","link");const n=document.createElement("slot");t.appendChild(n),this.shadowRoot&&this.shadowRoot.appendChild(t),this.addEventListener("click",this.handleClick)}forwardAttributes(t){["target","download","rel","hreflang","type","title","tabindex","accesskey"].forEach(n=>{this.hasAttribute(n)&&t.setAttribute(n,this.getAttribute(n))})}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}handleClick(t){const e=this.getAttribute("target"),n=this.getAttribute("href");e==="_blank"||t.ctrlKey||t.metaKey||t.button===1||this.hasAttribute("download")||n&&(t.preventDefault(),vo(n))}set href(t){const e=Oe();this.setAttribute("href",t);const n=this.shadowRoot?.querySelector("a");n&&(n.href=e+t)}get href(){return this.getAttribute("href")}set target(t){t&&this.setAttribute("target",t)}get target(){return this.getAttribute("target")}})};function $c(){Mc(),Pc(),window.addEventListener("popstate",Ca)}const Bc=async t=>{const e=["localhost","visualwidget.boomconcole.com","develop.freeschema.com","anilserver.freeschema.net","wico.freeschema.com"],n=["/wico"],a=window.location.pathname,i=n.some(r=>a===r||a.startsWith(r+"/")),o=window.location.hostname,s=o.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s&&_c(parseInt(s)),s)vn(parseInt(s));else if(e.includes(o)||i)await fe(()=>import("./initialLoadWICO-CV9nVOtL.js"),__vite__mapDeps([26,4,3,5,9,6,7,8,10,11])),console.log("Adding the widget"),await yo(),$c();else try{Nc(o)}catch(r){console.error(r),En()}};function En(){const t=document.getElementById("global-loader");t&&t.setAttribute("style","display: none !important");const e=document.getElementById("app");e&&(e.innerHTML="<h1>404</h1>")}function Nc(t=""){try{const e=JSON.parse(sessionStorage.getItem("cacheServers")??"[]")||[],n=e.length>0&&e?.[0]!="https://boomconsole.com"?e[0]:"https://deploy.freeschema.com",a=new URLSearchParams;a.append("url",t),console.log("server",n),fetch(n+"/api/project-deploy",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(async i=>{const o=await i.json();mc(o.data)}).catch(i=>{console.error(i),Za(t);try{const s=JSON.parse(sessionStorage.getItem("domainRecord")??"{}");if(s&&s.expiresAt>Date.now()){const r=s.value;r&&vn(parseInt(r));return}}catch(o){console.error(o),En()}})}catch(e){console.error(e),Za(t)}}function Za(t=""){const e=new URLSearchParams;e.append("url",t),fetch(U.baseURL+"/dns/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}).then(async n=>{const a=await n.json();if(!a)jc();else{const i=a?.startsWith("http")?a:"http://"+a,s=new URL(i).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(s)vn(parseInt(s));else throw new Error("Path Not Valid")}}).catch(n=>{console.error(n),En()})}function jc(){fetch(U.baseURL+"/cname").then(async t=>{const e=await t.json()||[];if(e?.[0]){const n=e[0]?.startsWith("http")?e[0]:"http://"+e[0],i=new URL(n).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(i)vn(parseInt(i));else throw new Error("Path Not Valid")}else throw new Error("Doamin Not Found")}).catch(t=>{console.error(t),En()})}let _o=null;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),_o=t});const Dc={activate:U.enableSW,scope:"/",pathToSW:"/serviceWorker.bundle.js",manual:!0};await zo();"serviceWorker"in navigator&&(navigator.serviceWorker.register("/sw.js").then(()=>{console.log("Service Worker registered")}),navigator.serviceWorker.addEventListener("message",t=>{const{title:e,text:n,url:a,file:i}=t.data;console.log("Shared data received:",{title:e,text:n,url:a,file:i})}));xo(U?.boomURL,U?.aiURL,"",U?.baseNodeUrl,void 0,"widget_conceptualizer",Dc,{logApplication:!0,logPackage:!1,isTest:!1,accessTracker:!1},{logserver:U.logserver});const Hc=await k();Xa(Hc?.token);Bc();window.PWAInstallHandler=(()=>{let t=null,e=null,n=null;return{init:({onInstall:s,onDismiss:r})=>{e=s,n=r,t=_o,window.addEventListener("appinstalled",()=>{console.log("PWA installed successfully!"),localStorage.setItem("pwaInstalled","true"),e&&e()})},isInstalled:()=>window.matchMedia("(display-mode: standalone)").matches||window.navigator?.standalone,showInstallPrompt:()=>{console.log("deferedPrompt",t),t&&(t.prompt(),t.userChoice.then(s=>{s.outcome==="accepted"?(console.log("User installed the PWA."),e&&e()):(console.log("User dismissed the install prompt."),n&&n()),t=null}))}}})();export{Te as A,Kc as B,I as C,_e as D,Gc as E,yt as F,zi as G,Kr as H,U as I,Jn as J,Ce as K,bo as L,ce as M,vo as N,zc as O,Ze as P,f as S,vl as T,lr as _,ft as a,je as b,F as c,Z as d,He as e,_l as f,k as g,Bn as h,sa as i,Ni as j,hn as k,Qe as l,D as m,Re as n,na as o,Lc as p,Ea as q,Jt as r,jn as s,A as t,Jc as u,qe as v,j as w,Qc as x,Vi as y,Yc as z};
