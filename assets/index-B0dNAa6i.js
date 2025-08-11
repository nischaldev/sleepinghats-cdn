const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home.index-THwRP7NR.js","assets/mainView.class-C4NLGCWW.js","assets/navbar.component-D54PO176.js","assets/loginModal.service-B7jK7aMT.js","assets/mftsccs-browser-DXjWFAtr.js","assets/loginModal-DGhNYttL.css","assets/vendor-DEYWGvhS.js","assets/ckeditor-Cw9bcqxY.js","assets/vendor-TRZluGMH.css","assets/codemirror-D1H9tReK.js","assets/eslint4b-BLWGvIOa.js","assets/prettier-ClL2wQep.js","assets/home-BRuQr2K9.css","assets/preview.index-Dm0XE7Q1.js","assets/page-preview.index-n8ywcK97.js","assets/page-preview-BJCVd99J.css","assets/documentation.index-iXOfYkii.js","assets/highlight-CFrhCzdo.js","assets/highlight-ZgkIHsf0.css","assets/documentation-Dc24vCVe.css","assets/subscription.index-B4UqVYeq.js","assets/video-tutorial.index-BfZCYm7I.js","assets/video-tutorial-Dg46rKRD.css","assets/community.index-tNkCpl1E.js","assets/community-tn0RQdqM.css","assets/initialLoadWICO-B1MgbOCJ.js"])))=>i.map(i=>d[i]);
import{h as X,f as Pn,W as $n,E as Ia,Z as P,y as bn,_ as ce,a as J,V as Ot,S as Ft,s as Pa,$ as pe,D as z,x as we,N as Zi,b as ra,c as $a,d as Oe,C as Yi,l as Ba,e as H,A as la,K as ee,F as de,P as Le,J as Xi,u as yt,t as ja,g as es,I as $e,i as re,j as Se,k as Me,n as Pe,Q as Fe,m as K,R as vn,o as Na,p as ca,q as Da,r as Ha,v as ts,w as ns}from"./mftsccs-browser-DXjWFAtr.js";import{E as se,b as Vt,o as Rt,j as qa,a as Ut,c as as,l as is,d as ss,e as os,f as Be,k as zt,h as rs,g as ls}from"./codemirror-D1H9tReK.js";import{J as Jt,n as cs}from"./vendor-DEYWGvhS.js";import{z as ds}from"./eslint4b-BLWGvIOa.js";import{l as wt,p as Bn,r as jn,a as us,b as ms}from"./prettier-ClL2wQep.js";import{C as gs}from"./ckeditor-Cw9bcqxY.js";const ps=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return qi},get addJSLibrary(){return Oi},get applyPageProperties(){return Ni},get applyPageProperty(){return ve},get filterChildrenByWrapper(){return Bi},get getAttributeType(){return Ol},get getAttributeValue(){return Vi},get getElementAttribute(){return Il},get getElementAttributeDetails(){return na},get getElementData(){return Pi},get getLayoutAttributeValue(){return Ri},get getPropertiesByIdFromStorage(){return _t},get handleDirectContentEdit(){return Pl},get handlePageProperties(){return ji},get initializeApp(){return ln},get initializeLibrary(){return aa},get listJSLibraries(){return Et},get removeCSSLibrariesFromHead(){return Ht},get removeJSLibrariesFromHead(){return ia},get setAttributeValue(){return Vl},get toggleSpacingBox(){return sa},get updateAttribute(){return Bl},get updateCSSLibrary(){return ze},get updateElementAttribute(){return on},get updateElementAttributeViaEditor(){return $l},get updateJSLibrary(){return Je},get updateMetaTag(){return ft},get updateMultipleElementAttribute(){return Di},get updateWidgetTypeValue(){return $i}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const G={baseURL:"https://boomconsole.com/api/v1",baseNodeUrl:"https://boomconsole.com",boomURL:"https://boomconsole.com",aiURL:"https://www.ai.freeschema.com/api",deployURL:"https://deploy.freeschema.com",CLIENT_ID:"636550695311-ctc09991hhu6iav4kkhnp1ge537nec2i.apps.googleusercontent.com",logserver:"https://logger.freeschema.com",enableSW:!1,discussion_community:101765915,ai_widget:101934087,visual_prototype_widget:101938499,video_tutorial_widget:102040172,subscriptionId:102121109,documentation_preview_widget:102097744,folder_widget:102400016,assets_widget:102410590,VITE_DEV_BASE:"http://localhost:5173",VITE_CDN_BASE:"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master"},hs=G?.boomURL;async function V(n,e,t){const a=await X(`the_${n}`,"",!0,e,4,999);for(const[i,s]of Object.entries(t)){let o=i;const r=await X(`${o}`,`${s}`,!1,e,4,999);await O(a,r,o)}return a}async function O(n,e,t){const a=n.userId,i=999,s=999,o=n.type?.characterValue,r=t,l=o+"_"+r,d=await Pn(l,i,s,a);await $n(n.id,e.id,d.id,1e3)}async function fs(n,e){try{const t=new Headers;return t.append("Content-Type","application/json"),t.append("Authorization",`Bearer ${e}`),await(await fetch(`${hs}/api/get-entity-from-user?userConceptId=${n}`,{method:"GET",headers:t,redirect:"follow"})).json()}catch(t){throw console.error(t),t}}async function fc(n){const e=await fs(n?.data?.userConcept,n?.data?.token);let t={token:n?.data?.token,refreshToken:n?.data?.refreshtoken,email:n?.data?.email,userId:n?.data?.entity?.[0]?.userId,userConcept:n?.data?.userConcept,entityId:e?.entity,amcode:btoa(JSON.stringify(n?.data?.roles))};return Ia(t.token),localStorage.setItem("profile",JSON.stringify(t)),!0}async function M(){return new Promise(n=>{let e=localStorage?.getItem("profile")||"";if(e){const t=JSON.parse(e);n(t)}else n()})}async function Oa(){return new Promise(n=>{let e=localStorage?.getItem("tempwidget")||"";if(e){const t=JSON.parse(e);n(t)}else n()})}const ys=G?.baseNodeUrl;class _e{static instance;static getInstance(){return _e.instance||(_e.instance=new _e),_e.instance}async getLoginInfo(){const e=await M(),t=await this.checkIfUserIsAdmin(e?.userConcept);let a="",i=!1,s=!1;if(e?.token){i=!0;let o="",r="";if(e?.entityId){let l=new P;l.typeConnection="the_entity_firstname",l.name="entity_firstname";let d=new P;d.typeConnection="the_entity_lastname",d.name="entity_lastname";let u=new P;u.typeConnection="the_entity_tour_status",u.name="entity_tour_status";let c=new P;c.type="the_entity",c.name="top",c.conceptIds=[e.entityId],c.freeschemaQueries=[l,d,u],c.outputFormat=bn;let g;await ce(c,"").subscribe(m=>{g=m}),o=g?.[0]?.the_entity?.the_entity_firstname?.the_firstname||"",r=g?.[0]?.the_entity?.the_entity_lastname?.the_lastname||"",s=g?.[0]?.the_entity?.the_entity_tour_status?.the_tour_status==="true"}a=`
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
      `;return{loginInfoHTML:a,isLoggedIn:i,isAdmin:t,tourStatus:s}}async checkIfUserIsAdmin(e){try{return(await J(e))?.accessId===3}catch(t){return console.error("Error fetching user concept:",t),!1}}async logout(){const e=await Oa();await Ot(e?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),location.reload()}async checkAndUpdateToken(){try{const e=await M();if(!e?.token){console.warn("No token found in local storage.");return}const t=e.token,a=e.refreshToken,i=new Headers;i.append("Content-Type","application/json");const s={accessToken:t,refreshToken:a},r=await(await fetch(`${ys}/api/Auth/refresh`,{method:"POST",headers:i,body:JSON.stringify(s)})).json();if(r.success&&r.data){const{accessToken:l,refreshToken:d}=r.data;e.token=l,e.refreshToken=d,localStorage.removeItem("profile"),localStorage.setItem("profile",JSON.stringify(e))}else this.logout()}catch(e){console.error("Error refreshing token:",e)}}}const ws=_e.getInstance();(function(){const e=window.fetch;window.fetch=async(...t)=>{const a=t[1]||{};try{const i=await e(...t);if(i.status===401){console.warn("401 Unauthorized - Refreshing token"),await ws.checkAndUpdateToken();const s=await M();if(!s?.token)return console.error("Token refresh failed. User not logged in."),i;if(a.headers){const o=new Headers(a.headers);o.set("Authorization",`Bearer ${s.token}`),o.has("Content-Type")||o.set("Content-Type","application/json"),a.headers=o}return e(t[0],a)}return i}catch(i){throw console.error("Intercepted Fetch Error:",i),i}}})();const bs="modulepreload",vs=function(n){return"https://cdn.jsdelivr.net/gh/nischaldev/sleepinghats-cdn@master/"+n},da={},ke=function(e,t,a){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=vs(l),l in da)return;da[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":bs,d||(c.as="script"),c.crossOrigin="",c.href=l,r&&c.setAttribute("nonce",r),document.head.appendChild(c),d)return new Promise((g,m)=>{c.addEventListener("load",g),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return i.then(o=>{for(const r of o||[])r.status==="rejected"&&s(r.reason);return e().catch(s)})};function _n(n,e=0){let t=`<ul style="list-style: none; margin: 10px 0px; ${e==0?" padding-left: 0px; ":""}" id="sortable-list">`;for(let a=0;a<n.length;a++){const i=n[a];i.edit?t+=`
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
                <li>${i.menus?`${_n(i.menus,e+1)}`:""}</li>
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
                <li>${i.menus?`${_n(i.menus,e+1)}`:""}</li>
            `}return t+="</ul>",t}function at(n){console.log("menus",n);const e=_n(n),t=document.getElementById("menu-items");t&&(t.innerHTML=e);let a=null;document.querySelectorAll("#sortable-list li").forEach(i=>{i.addEventListener("dragstart",s=>{a=i,s.dataTransfer.effectAllowed="move"}),i.addEventListener("dragover",s=>{s.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",s=>{s.preventDefault(),i.classList.remove("drag-over"),a!==i&&!i.contains(a)&&i?.parentNode?.insertBefore(a,i.nextSibling)}),i.addEventListener("dragend",()=>{document.querySelectorAll(".drag-over").forEach(s=>s.classList.remove("drag-over"))})})}async function Fa(n){console.log("projectId",n);let e;if(n||(e=Ua()),!n&&!e?.projectId)return console.log("Project Id not found"),[];if(!n&&e.projectId&&(n=e?.projectId),console.log("projectId 2",n),!n)return[];const t=["the_item_menu_name","the_item_menu_link","the_item_menu_action","the_item_menu_auth","the_item_menu_order","the_item_menu_page"],a=new P;a.typeConnection="the_menu_s_item",a.selectors=t;function i(u,c=5){if(c==5)return;const g=new P;g.typeConnection="the_menu_s_item",g.selectors=t,u.name=c.toString(),u.freeschemaQueries=[g];const m=c+1;i(g,m)}const s=new P;s.conceptIds=[n],i(s,1);const o=await Ft(s,"");console.log("valllu",o);const r=o?.[0]?.the_project?.the_menu_s_item||[],l=(u=[])=>{let c=[];for(let g=0;g<u.length;g++){const m=u[g];c.push({name:m?.the_item_menu?.the_item_menu_name?.the_name??"",link:m?.the_item_menu?.the_item_menu_link?.the_link??"",action:m?.the_item_menu?.the_item_menu_action?.the_action??"",page:m?.the_item_menu?.the_item_menu_page?.the_page?Number(m?.the_item_menu?.the_item_menu_page?.the_page):"",order:m?.the_item_menu?.the_item_menu_order?.the_order?Number(m?.the_item_menu?.the_item_menu_order?.the_order):0,auth:m?.the_item_menu?.the_item_menu_auth?.the_auth=="true",menus:l(m?.the_item_menu?.the_menu_s_item)??[]})}return c.sort((g,m)=>g.order-m.order)};return l(r)}async function _s(n,e=[]){console.log("menus",e);const t=await new Pa;try{await t.initialize();const a=await J(n);await pe(n,"the_menu_s_item"),await Va(a,e,t),await t.commitTransaction(),console.log("output concept",n)}catch(a){console.error(a),await t.rollbackTransaction()}}async function Va(n,e=[],t){for(let a=0;a<e.length;a++){const i=e[a],s=await t.MakeTheInstanceConceptLocal("the_item_menu","",!0,999,4);await t.CreateConnection(n,s,"the_menu_s_item");for(let[o,r]of Object.entries(i))if(console.log("key",o,r),!!["name","link","action","auth","order","page","menus"].includes(o)&&!(o=="menus"&&!Array.isArray(r)))if(o=="menus")await Va(s,r,t);else{const d=await t.MakeTheInstanceConceptLocal("the_"+o,r,!0,999,4);await t.CreateConnection(s,d,"the_item_menu_"+o)}}}const Es=async()=>{const n=G.enableSW;"serviceWorker"in navigator&&n&&await new Promise((e,t)=>{navigator.serviceWorker.register("/sw.js").then(a=>{a.addEventListener("updatefound",()=>{const i=a.installing;i?.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&(i.postMessage("skipWaiting"),setTimeout(()=>{confirm("A reload is required to update to latest")&&window.location.reload()},500))})}),e(void 0)}).catch(a=>{console.error("Service Worker Init error",a),t(a)}),setTimeout(()=>{t()},3e4)})},Ra="wico_site";function Ua(){const n=atob(localStorage.getItem(Ra)||"");return n?JSON.parse(n):{}}function za(n,e){const t=Ua();t[n]=e,localStorage.setItem(Ra,btoa(JSON.stringify(t)))}function Ja(){window.wico={fetchMenus:Fa}}async function Ts(){await Es()}const W={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"},ie={ENTITY_PAGE_LINKER:"s_page",PAGE_WIDGET_LINKER:"body",ENTITY_PROJECT_LINKER:"s_project",PROJECT_PAGE_LINKER:"s_page"},bt=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Nn=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],En=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],Ss=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let ua=[],ma=[];async function Ls(n){let e="";for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const a=n[t];e+=` ${t}="${a}" `}return e}async function Cs(n,e){const t=new z;t.composition=n,t.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const a=await we([t],e),i=a?.data?.the_widget?.the_widget_html?.[0]?.id,s=a?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,o=a?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!i)return{html:"",css:"",js:""};const r=await Zi(i,["contain_s"]);ua=await ra(r.externalConnections),ma=await ra(r.internalConnections);let l=await Ga(i,ua,ma);const d=document.createElement("div");return d.innerHTML=l,{html:(d?.querySelector(".widget-wrapper")).innerHTML,css:s||"",js:o||""}}async function Ga(n,e,t){try{let a="",s=Ws(e)[n];if(s!=null){let o=xs(s);const l=(await Ci())?.map(g=>{const m=g?.id,p=g?.data?.the_element?.the_element_name?.[0]?.data?.the_name,h=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,b=g?.data?.the_element?.the_element_void?.[0]?.data?.the_void,A=g?.data?.the_element?.the_element_s_attribute?.map(E=>{const w=E?.data?.the_attribute,y=w?.the_attribute_name?.[0]?.data?.the_name,_=w?.the_attribute_type?.[0]?.data?.the_type,S=w?.the_attribute_value?.[0]?.data?.the_value;return{name:y,type:_,value:S}});return{id:m,name:p,tag:h,void:b,attributes:A}}),d=[...Nn,...En],c=(await M())?.userId;for(let g=0;g<o.length;g++){const m=o[g];if(m.ofTheConceptId==n){const p=await As(m.toTheConceptId,t),h=Object.keys(p.data)[0],b=p.data[h],T=bt.includes(h),A=await Ls(b?.attributes||[]),E=l.find(y=>y.tag===h.toLowerCase().trim()),w=b?.attributes;for(const y in w){const _=d.find(L=>y===L?.name?.toLowerCase().trim()),S=w[y],v=_?.type;E.attributes=E?.attributes?.map(L=>(L?.name==="className"&&y==="class"?L.value=S:L?.name==="elementContent"?L.value=b?.innerText:y===L?.name&&(v==="array"?L.selected=S:v==="boolean"?L.value="":L.value=S),L))}if(h!="text"){const y=await $a(p.id,c);y?.length&&await Ot(y?.[0]?.id);const _={[`wdgt${p.id}`]:E},S=await Oe(_,null,null,null,c);console.log("elementAttributeComp ->",S),a+=`
            <div id="wdgt${p.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${E?.id}">
            <${h} data-cc-id="${p.id}" `+A+`${T?"/></div>":">"}`,a+=await Ga(m.toTheConceptId,e,t)}(b.contains=="false"||h=="text")&&(a+=" "+b.innerText+" "),!T&&h!="text"&&(a+=`</${h}></div>`)}}}return a}catch(a){console.error("error converting html",a)}}async function As(n,e){var t=[],a={},i=e;t=i;for(var s=[],o=0;o<t.length;o++)s.includes(t[o].ofTheConceptId)||s.push(t[o].ofTheConceptId);var r=await J(n);if(r.id==0&&n!=null&&n!=null){var l=await J(n);r=l}var d=await Yi(n,t,s),u=r?.type?.characterValue??"";a[u]=d;var c={};return c.data=a,c.id=n,c}function Ws(n){return n.reduce((e,t)=>{const{ofTheConceptId:a}=t;return e[a]||(e[a]=[]),e[a].push(t),e},{})}function xs(n){const e=new Map;n.forEach(s=>{e.set(s.id,s)});const t=[],a=new Set,i=s=>{if(!a.has(s.id)){a.add(s.id),t.push(s);for(const o of n)o.orderId==s.id&&i(o)}};return n.forEach(s=>{s.orderId==1e3&&i(s)}),t}async function yc(){return"WICO"}async function xe(){const n=await Oa();await Ot(n?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await Qi("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}async function ks(n,e){var t=[];try{var a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization",`Bearer ${e}`),a.append("Randomizer",Ba.BASE_RANDOMIZER.toString());const i=await fetch(G.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:a,body:JSON.stringify({id:n})});return i.ok?await i.json():(console.log("recursive search error ",i.status),t)}catch(i){console.log(i)}}async function Qa(n,e,t=1e3,a){const i=n.userId,l=await Pn("contain_s",999,999,i);return await $n(n.id,e.id,l.id,t)}const Ms="the_widget";async function Is(n,e,t){return await Ps(n,e,t)}async function Ps(n,e,t){const s=new DOMParser().parseFromString(n,"text/html").body,o=await Oe({[Ms]:{}});e&&await $s(e,o),t&&await Bs(t,o);const r=await Oe({widgetHTML:{}});await O(o,r,"html");const l=await Ka(s.children[0],r);return await Qa(r,l),await H.SyncDataOnline(),o}async function $s(n,e){const a=(await M())?.userId,s=await X("the_widgetCSS",n,!0,a,4,999);await O(e,s,"css")}async function Bs(n,e){const a=(await M())?.userId,s=await X("the_widgetJS",n,!0,a,4,999);await O(e,s,"js")}async function Ka(n,e){console.log("parentConcept ->",e);const t={};if(t.tagName=n?.tagName?.toLowerCase(),n?.attributes?.length>0){t.attributes={};for(let s of n.attributes)t.attributes[s.name]=s.value}n?.textContent?.trim()&&(t.text=n.textContent.trim());let a={[t.tagName?t.tagName:"text"]:{contains:n?.children?.length?"true":"false",attributes:t.attributes||"",innerText:n?.children?.length?"":t.text||""}};const i=await Oe(a);if(n?.childNodes?.length>0){t.children=[];let s=[],o=-1,r,l;for(let u of n.childNodes)if(!(u.nodeType===Node.TEXT_NODE&&u.textContent?.trim()==="")&&!(n.children.length===0&&u.nodeType===Node.TEXT_NODE)){if(u.nodeType===Node.TEXT_NODE){let c={text:{contains:!1,attributes:"",innerText:u.textContent?.trim()}};const g=await Oe(c);s.push({parentConcept:i,childConcept:g,orderId:l})}else u.nodeType===Node.ELEMENT_NODE&&(r=await Ka(u,i),s.push({parentConcept:i,childConcept:r,orderId:l}));o>=0&&(s[o]={...s[o],orderId:r?.id}),o++}let d=1e3;for(let u=0;u<s.length;u++){const c=s[u];d=(await Qa(c.parentConcept,c.childConcept,d)).id}}return i}const js="widget-conceptualizer",Ns="0.0.0",Ds="module",Hs={dev:"vite --config vite.config.js --force",build:"tsc && vite build --config vite.config.prod.js",preview:"vite preview"},qs={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},Os={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.157-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},ga={name:js,private:!0,version:Ns,type:Ds,scripts:Hs,devDependencies:qs,dependencies:Os};function Fs(n,e,t,a){switch(t){case"int":n=n.sort(function(i,s){return parseInt(i[e])>parseInt(s[e])?1:parseInt(i[e])<parseInt(s[e])?-1:0});break;default:n=n.sort(function(i,s){return i[e].toLowerCase()>s[e].toLowerCase()?1:i[e].toLowerCase()<s[e].toLowerCase()?-1:0})}}function Tn(n){let e={};for(let t=0;t<n.length;t++){const a=n[t];a?.type&&a?.type!=="submit"&&(e[a.name]=a?.value)}return e}function Vs(n){const e=ga.dependencies||{},t=ga.devDependencies||{};return e[n]||t[n]||null}async function Xe(n,e,t,a,i){await pe(n,e);const s=await X(t,a,!1,i,4,999);let o=await Pn(e,999,999,i);return await $n(n,s?.id,o.id,1e3,o.characterValue,i),"Delete and update completed"}class Ge{async generateSlug(e){const t=await M();let a=new z;a.composition=t?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new z;i.fullLinkers=["the_page_slug"],i.inpage=100;const s=[a,i];let o=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return await la(s,"",bn).subscribe(r=>{const l=r?.the_entity?.the_entity_s_page?.map(c=>c?.the_page?.the_page_slug?.[0]?.the_page_slug)||[];let d=o,u=o.match(/^(.*?)(?:-(\d+))?$/);if(u){d=u[1];let g=(u[2]?parseInt(u[2],10):0)+1;for(;l.includes(o);)o=`${d}-${g++}`}}),o}async checkSlugAvailablity(e){const t=await M();let a=new z;a.composition=t?.entityId,a.fullLinkers=["the_entity_s_page"],a.inpage=100;let i=new z;i.fullLinkers=["the_page_slug"],i.inpage=100;const s=[a,i];let o=!0;return await la(s,"",bn).subscribe(r=>{(r?.the_entity?.the_entity_s_page?.map(d=>d?.the_page?.the_page_slug?.[0]?.the_page_slug)||[]).includes(e)&&(o=!1)}),o}async savePage(e,t,a){const i=await V(W.PAGE_COMP_NAME,t,e),s=await ee(a);return await O(s,i,ie.ENTITY_PAGE_LINKER),i}async renamePage(e,t,a){return await Xe(Number(t),"the_page_title","title",e?.title,a),await Xe(Number(t),"the_page_slug","slug",e?.slug,a),"renamed"}async getAllPages(e){const t=await M(),a=t?.token;let i=new z;e?i.composition=e:i.composition=t.entityId,i.fullLinkers=[`the_entity_${ie.ENTITY_PAGE_LINKER}`],i.inpage=100;let s=new z;return s.fullLinkers=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_body`],s.inpage=100,(await we([i,s],a))?.data?.the_entity?.[`the_entity_${ie.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const t=await M();if(!t?.token)return null;const a=t?.token;let i=new z;i.composition=e,i.fullLinkers=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_meta_title`,`the_${W.PAGE_COMP_NAME}_meta_description`,`the_${W.PAGE_COMP_NAME}_meta_keywords`,`the_${W.PAGE_COMP_NAME}_width`,`the_${W.PAGE_COMP_NAME}_type`,`the_${W.PAGE_COMP_NAME}_font_family`,`the_${W.PAGE_COMP_NAME}_font_size`,`the_${W.PAGE_COMP_NAME}_body`],i.inpage=100;let s=new z;return s.fullLinkers=[`the_${W.WIDGET_COMP_NAME}_clean`],s.inpage=100,await we([i,s],a)}async getPageById(e){return new Promise(async t=>{const a=await M();if(!a?.token)return null;const i=a?.token;let s=new P;s.conceptIds=[e],s.outputFormat=de,s.selectors=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_meta_title`,`the_${W.PAGE_COMP_NAME}_meta_description`,`the_${W.PAGE_COMP_NAME}_meta_keywords`,`the_${W.PAGE_COMP_NAME}_width`,`the_${W.PAGE_COMP_NAME}_type`,`the_${W.PAGE_COMP_NAME}_font_family`,`the_${W.PAGE_COMP_NAME}_font_size`,`the_${W.PAGE_COMP_NAME}_body`,`the_${W.WIDGET_COMP_NAME}_clean`],s.inpage=100,ce(s,i).subscribe(async o=>{if(o.length)t(o?.[0]);else if(!Array.isArray(o)&&o?.data==null){const r="There is no data.";C.infoMessageToast(r,4),t({error:!0,message:r})}}).catch(o=>{const r=o?.message;C.errorToast(`${r}`,4),t({error:!0,message:r})})})}async updatePageField(e,t,a){const i=await M(),s=`the_${W.PAGE_COMP_NAME}_${e}`;await pe(a,s);const o=await J(a),r=await X(`${e}`,`${t}`,!1,i.userId,4,999);await O(o,r,e),await H.SyncDataOnline()}async deletePage(e){await Le(e)}}class Za{_pagesService;constructor(){this._pagesService=new Ge}async getPagesListHTML(){window.pageHandler=vr;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(a=>{let i=a?.data?.[`the_${W.PAGE_COMP_NAME}`],s=i?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,o=i?.[`the_${W.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
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
          `}catch(e){return console.error("error",e),e?.status===401&&xe(),`
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
    `}}const Rs=(()=>{const n=()=>{document.querySelectorAll("#navBarContainer > span").forEach(o=>{o.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(o=>{o.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(o=>{o.remove()})};return{toggle:i=>{const s=i.target,o=s?.dataset?.id;if(s.classList.contains("activeNavigationIcon")){n();return}if(o){document.querySelectorAll("#navBarContainer > span").forEach(c=>{c.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(c=>{c.classList.remove("navActive")});const d=document.getElementById(o);document.querySelector(`[data-id='${o}']`)?.classList.add("activeNavigationIcon"),d?.classList.add("navActive"),o=="fs-all-pages-list"&&new Un().initPagesSidebar()}},collapseNavbar:i=>{const s=i.target;document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.getElementById(s.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")})},checkForActiveNavigation:()=>{const i=document.querySelector(".activeNavigationIcon");if(i){const s=i.dataset?.id||"";document.getElementById(s)?.classList.remove("navActive")}},resetNavigationBar:n}})();function Lt(n){return new Promise(e=>{const t=document.createElement("div");t.className="custom-confirm-modal",t.innerHTML=`
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
        `,t.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(t),e(!0)}),t.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(t),e(!1)}),document.body.appendChild(t)})}class R{static staticElement;static previousSelectedStaticElement}function Ct(){const n=document.getElementById("select-box");n.style.display="none"}function pa(){const n=document.getElementById("select-box");Ze(),n.style.transition="none",At()}function At(){const n=R?.staticElement;if(n){const e=n.getBoundingClientRect(),t=e.left,a=e.top,i=document.getElementById("select-box");i.style.display="block",i.style.width=n.offsetWidth+"px",i.style.height=n.offsetHeight+"px",i.style.top=`calc(${a}px)`,i.style.left=`calc(${t}px)`}}function ye(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),t=a=>{a.removeEventListener("click",Ke),a.removeEventListener("mouseenter",lt),a.removeEventListener("mouseleave",Ze)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&t(a)}),e.forEach(a=>{a.classList.contains("fslayout-row")?(a.addEventListener("click",function(i){i.target===a&&(i.preventDefault(),i.stopPropagation(),Ke(i))}),a.addEventListener("mouseenter",lt),a.addEventListener("mouseleave",Ze)):a.classList.contains("fslayout-col")?a.addEventListener("click",function(i){if(i.target===a){i.preventDefault(),i.stopPropagation();const s=a.closest(".fslayout-row");if(s){const o=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(o,"target",{value:s}),Ke(o)}}}):a.closest(".fslayout-col")?(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Ke(i)}),a.addEventListener("mouseenter",lt),a.addEventListener("mouseleave",Ze)):(a.closest(".edited-widget-container")||!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&(a.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Ke(i)}),a.addEventListener("mouseenter",lt),a.addEventListener("mouseleave",Ze))})}function Us(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),t=a=>{a.removeEventListener("click",Ke),a.removeEventListener("mouseenter",lt),a.removeEventListener("mouseleave",Ze)};e.forEach(a=>{(!a.closest(".added-widget-container")||a.classList.contains("added-widget-container"))&&t(a)})}class Ae{static instance;static events=new Map;constructor(){}static getInstance(){return Ae.instance||(Ae.instance=new Ae),Ae.instance}static subscribe(e,t){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(t)}static publish(e,t){this.events.has(e)&&this.events.get(e).forEach(a=>a(t))}static unsubscribe(e,t){if(this.events.has(e)){const a=this.events.get(e),i=a.indexOf(t);i>-1&&a.splice(i,1)}}}class zs extends Xi{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=Ae.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),t=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(t),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),Ae.subscribe("page:elementClick",a=>{this.handlePageElementClick(a)}),Ae.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),t=this.buildTree(e);t&&this.treeRoot&&this.treeRoot.appendChild(t)}getHtml(){return""}handlePageElementClick(e){let t=e;for(;t&&!this.treeItems.has(t);)t=t.parentElement;if(t){const a=this.treeItems.get(t);if(a){document.querySelectorAll(".tree-item").forEach(s=>{s.classList.remove("active")}),a.classList.add("active"),a.scrollIntoView({behavior:"smooth",block:"center"});let i=a.closest(".tree-node")?.parentElement;for(;i;){if(i.classList.contains("children")&&i.classList.contains("hidden")){i.classList.remove("hidden");const s=i.previousElementSibling?.querySelector(".toggle-btn");s&&(s.innerHTML="▼")}i=i.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const t=document.createElement("div");t.className="tree-node";const a=document.createElement("div");a.className="tree-item",this.treeItems.set(e,a);const i=e.tagName.toLowerCase(),s=e.id?`#${e.id}`:"",o=Array.from(e.classList).map(l=>`.${l}`).join("");if(e.children.length>0){const l=document.createElement("button");l.className="toggle-btn",l.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',l.onclick=d=>{d.preventDefault(),d.stopPropagation();const u=t.querySelector(".children"),c=u.classList.contains("hidden");u.classList.toggle("hidden"),l.innerHTML=c?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},a.appendChild(l)}o.includes(".added-widget-container")&&a.classList.add("widget-tree-node");const r=document.createElement("div");if(r.classList.add("text-truncate"),r.innerHTML=`
      <span class="element-tag">${i}</span>
      <span class="element-id">${s}</span>
      <span class="element-class">${o}</span>
    `,a.appendChild(r),a.onmouseenter=()=>this.handleHover(e),a.onmouseleave=()=>this.handleHover(null),a.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},t.appendChild(a),e.children.length>0){const l=document.createElement("div");l.className="children hidden",Array.from(e.children).forEach(d=>{if(d instanceof HTMLElement){const u=this.buildTree(d);u&&l.appendChild(u)}}),t.appendChild(l)}return s!=="#widget-details"?t:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const t=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(t)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(a=>{this.isAllExpanded?a.classList.remove("hidden"):a.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(a=>{a.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function ue(){const n=document.getElementById("tree-root");n.innerHTML="";const e=f.staticWidgetTree.html,t=document.querySelector(".toggle-all-btn");e?(t.style.display="flex",new zs().mount(n)):(t.style.display="none",n.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class Sn{static navbar}function Js(n){return n?.widgetcodeId}async function Ya(n,e,t=!0,a){let i=new yt;i.html=n.html,i.widgetState={...a},i.widgetType=n.type,i.componentDidMountFunction=n.before_render,i.addEventFunction=n.after_render,i.mountChildWidgetsFunction=n.mount_child,e.innerHTML="";let s=e;if(t=!1,s&&(await i.mount(s),n.widget=i,n.children.length>0&&i.childWidgetElement?.length>0))for(let o=0;o<n.children?.length;o++){let r=n.children[o];for(let l=0;l<i.childWidgetElement.length;l++){let d=i.childWidgetElement[l];if(r.wrapper===d.id){const u=q.clearDraggedWidget(r),c=await Ya(u,d,t,i.widgetState);i.childWidgets.push(c),i.css=i.css+c.css+`#${r.wrapper} { ${r.css} }`,c.dataChange(g=>{let m=g?.type?.characterValue;m&&(i.childrenData[m]=g)})}}}return i}function un(n,e,t=!1,a){let i=Date.now();const s=document.createElement("div");return s.innerHTML=`<div id="wdgtcopy${i}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,t==!1&&e!=0&&e!=null&&e!=null?(n.insertBefore(s.firstChild,a),document.getElementById(`wdgtcopy${i}`)?document.getElementById(`wdgtcopy${i}`):n.querySelector(`#wdgtcopy${i}`)):n}const Ve=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],De=["span","a","img","button","input","label","textarea","select"],Gs=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],ha={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...De]},h2:{accepts:[...De]},h3:{accepts:[...De]},h4:{accepts:[...De]},h5:{accepts:[...De]},h6:{accepts:[...De]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...De]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},Qs=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function Wt(n,e){const t=n.target,a=n.target;let i=null;for(const l of a.children){const d=l.getBoundingClientRect();if(n.pageY<d.top+window.scrollY){i=l;break}}if(t.classList.remove("dragging-area"),Ks(t,"added-widget-container"))return{status:!1,message:"Cannot be dropped inside WIDGET!"};const o=e?.data_type||"",r=n?.target?.tagName?.toLowerCase();return bt.includes(r)?{status:!1,message:`${o} cannot be dropped inside ${r} tag.`}:Ve.includes(r)&&ha[r]?.accepts?.length&&!ha[r]?.accepts?.includes(o)?{status:!1,message:`${o} cannot be dropped inside ${r} tag.`}:{status:!0,message:"",elementBelowDrag:i}}function Ks(n,e){for(;n;){if(n.classList&&n.classList.contains(e))return!0;n=n.parentElement}return!1}class oe{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(t=>t.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const t=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${t}`)).slice(0,-1).forEach(i=>i.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(t),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const t=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,t.from-6),t.from)!=="tsccs.")return null;const i=Object.keys(ja).filter(s=>s.startsWith(t.text));return i.length>0?{from:t.from,to:t.to,options:i.map(s=>({label:s,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new se({doc:"/* Write your code here */",extensions:[Vt,Rt,qa(),Ut({activateOnTyping:!0}),as.data.of({autocomplete:this.tsccsCompletions}),is(),ss(os(new ds,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),se.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),zt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),se.updateListener.of(t=>{if(t.docChanged){const a=t?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=a;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=a;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=a;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=a;break;default:const s=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(o=>`${o.slug}-editor-split`===this.editorContainerId);s?.length&&(s[0].code=a)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function Xa(n){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",n)try{const t=await wt.format(n,{parser:"babel",plugins:[Bn,jn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=t}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function Zs(){const n=new oe("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function ei(n,e){const t=document.querySelector('.cm-content[data-language="css"]');if(t.innerHTML="/* Write your CSS here */",e){let a=document.querySelector(".child-widget-style");a||(a=document.createElement("style"),a.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",a)),a.textContent+=e}if(n)try{const i=(t.textContent+n).split("/* Write your CSS here */").join(" ");t.textContent=i;const s=await wt.format(i,{parser:"css",plugins:[us],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});t.textContent=s||"/* Write your CSS here */"}catch(a){console.error("CSS formatting error:",a),t.textContent=n}}async function ti(n){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",n)try{const t=await wt.format(n,{parser:"babel",plugins:[Bn,jn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=t}catch(t){console.error("JS formatting error:",t),e.textContent=n}}async function Ys(){const n=new oe("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function le(n){const e=document.querySelector('.cm-content[data-language="html"]'),t=document.getElementById("builder-workarea");if(t?.querySelector("#widget-details")?.remove(),e)try{const i=document.createElement("div");let s=n||t?.innerHTML||"";i.innerHTML=s;const o=i.firstChild;o&&o.nodeType===1&&o.classList.contains("mftsccs-marking-element")&&(s=o.innerHTML),i.innerHTML=s;async function r(d){if(d.dataset.widgetid){const u=await ee(Number(d.dataset.widgetid));u&&u.typeCharacter=="the_widget"&&(d.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let u=0;u<d.childNodes.length;u++){const c=d.childNodes[u];c instanceof HTMLElement&&await r(c)}}await r(i),s=i.innerHTML;const l=await wt.format(s,{parser:"html",plugins:[ms],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=l||"<!-- Write your HTML here -->"}catch(i){console.error("HTML formatting error:",i),e.textContent=n}else alert("widget html editor not found in dom")}async function Xs(n){const e=document.getElementById("widgetTypeValue");e&&(e.value=n||"");const t=document.getElementById("widgetType");t&&(t.value=n||"")}function Gt(n){if(!n)return;const e=document.getElementById("builder-workarea"),t=document.createElement("div");t.id="widget-details",t.innerHTML="",t.innerHTML=`
    <button onclick="openDocumentationModal(${n}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(t)}function Dn(){const n=document.querySelector(".content-target");n.innerHTML="",n.textContent="Widget Loading..."}function Hn(){return document.querySelectorAll(".content-target")[0]}function fa(n){const e={past:[],present:n,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(t){e.past.push(e.present),e.present=t,e.future=[]},undo(){if(e.past.length===0)return;const t=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=t,t},redo(){if(e.future.length===0)return;const t=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=t,t}}}class D{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),t=document.getElementById("redo-btn");e?.addEventListener("click",D.undoAction),t?.addEventListener("click",D.redoAction)}static renderActionHistory(){D.actionHistories=fa(JSON.stringify(f?.staticWidgetTree)),fa(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:t}=D.actionHistories.getState(),a=document.getElementById("undo-btn"),i=document.getElementById("redo-btn");a&&(a.disabled=!e),i&&(i.disabled=!t)}static async undoAction(){const e=D.actionHistories.undo();e!==void 0&&(Ea(e||""),D.updateButtonStates())}static async redoAction(){const e=D.actionHistories.redo();e!==void 0&&(Ea(e||""),D.updateButtonStates())}static updateActionHistories(){D.actionHistories.push(JSON.stringify(f.staticWidgetTree)),D.updateButtonStates()}}async function eo(){const n=document.getElementById("widget-prompt-modal");n&&n.remove()}async function to(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function no(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function ao(){const n=document.getElementById("prompt-text");n.addEventListener("input",()=>{n.style.height="auto";const e=Math.min(n.scrollHeight-8,120);n.style.height=`${e}px`,n.style.overflowY=e===120?"auto":"hidden"})}class ni{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const t=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],i=((s,o=3)=>{if(s.length<o)return[];const r=new Set;for(;r.size<o;){const l=Math.floor(Math.random()*s.length);r.add(l)}return[...r]})(t,2);this.randomSuggestionEl=i?.map(s=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${t[s]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),ao(),setTimeout(()=>{const t=document.querySelector(".aiAssistantTabs"),a=document.querySelectorAll("#aiChatContainer, #prototypeWidget");t.querySelector("button").classList.add("active"),a[0].classList.add("active"),t.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll("button").forEach(r=>r.classList.remove("active")),a.forEach(r=>r.classList.remove("active"));const s=i.dataset.id,o=document.getElementById(s);i.classList.add("active"),o?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=eo,window.minimizeAssistant=to,window.maximizeAssistant=no,`
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
    `}}async function io(n){const e=document.getElementById("widget-btn-wrapper");if(e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
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
          `;const a=e.querySelector("#updateDropDownArrow"),i=e.querySelector("#update-widget-btn");i&&a&&i.addEventListener("click",()=>{i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),a&&i&&a.addEventListener("click",()=>{i.classList.contains("d-none")?(i.classList.remove("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(i.classList.add("d-none"),a.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function so(){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function oo(){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class ai{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.main.empty?a({changes:{from:i.main.from,insert:"  "},selection:{anchor:i.main.from+2}}):a({changes:{from:i.main.from,to:i.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new se({doc:"<!-- Write your HTML here -->",extensions:[Vt,Rt,rs(),Ut(),se.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),se.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),zt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),se.updateListener.of(t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateHTML(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=ht;class ii{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(a=>a.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const t=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=t,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new se({doc:"/* Write your JavaScript here */",extensions:[Vt,Rt,qa(),Ut(),se.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),se.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),zt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),se.updateListener.of(async t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateJS(a)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function ya(){const n=document.getElementById("codeBlocksContainer"),e=n.querySelectorAll(".sub-tab-btn");if(!n.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const a=document.getElementById("onmount-editor-split");a&&a.classList.add("active")}}async function si(n){const e=n?.id,t=n?.code,a=n?.slug,i=n?.name,s=document.querySelectorAll(".custom-service-btn"),o=Array.from(s)?.filter(c=>c?.getAttribute("data-subtab")===a),r=document.getElementById("lifecycle"),l=r?.querySelector(".sub-tab-nav");if(!o.length){const c=document.createElement("button");c.classList.add("sub-tab-btn","custom-service-btn"),c.setAttribute("data-subtab",a),c.innerHTML=`
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
    `,l?.appendChild(c);const g=document.createElement("div");g.classList.add("sub-tab-content","custom-editor-content"),g.id=`${a}-editor-split`,g.setAttribute("data-subtab",a),r?.appendChild(g);const m=`${a}-editor-split`;ro(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(c=>{c.addEventListener("click",function(){const g=c.getAttribute("data-subtab"),m=c.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(p=>{p.classList.remove("active")}),c.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${g}"]`)?.classList.add("active")})}),setTimeout(async()=>{const c=document.querySelector(`#${a}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(c&&(c.textContent="/* Write your code here */",t))try{const g=await wt.format(t,{parser:"babel",plugins:[Bn,jn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});c.textContent=g}catch(g){console.error("JS formatting error:",g),c.textContent=t}},500)}async function ro(n){await new oe(n).initializeEditor()}async function lo(n,e,t){const a=e.trim().toLocaleLowerCase().split(" ").join("-"),i=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===n);i[0].name=e,i[0].slug=a;const s=document.querySelector(`button[data-subtab=${n}]`);s?.setAttribute("data-subtab",a),s.innerHTML=`
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
  `;const o=s?.querySelector("span.service-name");o&&(o.innerText=e);const r=document.getElementById(`${n}-editor-split`);r?.setAttribute("data-subtab",a),r.id=`${a}-editor-split`,await new oe(`${a}-editor-split`).initializeEditor();const d=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===a);si(d?.[0]),be("rename-custom-function-modal")}class co{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,t){this.customFunctionId=t,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const a=document.getElementById("rename-custom-function-modal").querySelector("form");a&&a.addEventListener("submit",i=>{i.preventDefault();const s=a.customFunctionName.value.trim(),o=/^[_A-Za-z][_A-Za-z ]*$/.test(s),r=document.getElementById("service-rename-error");o?(r.textContent="",r.classList.add("d-none"),lo(this.currentCustomFunctionSlug,s,this.customFunctionId)):(r.classList.remove("d-none"),r.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
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
    `}}const Qt="unsaved_widget";async function uo(){const n=go(),e={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},t=JSON.stringify(e),a=new Blob([t]).size,s=4.5*1024*1024-n;if(a<=s)try{localStorage.setItem(Qt,t),qn("save-widget")}catch(o){console.error("Error saving to localStorage:",o)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),Kt()}function mo(n){return new Blob([n]).size}function go(){let n=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const t=localStorage.getItem(e);n+=mo(e+t)}return n}async function Kt(){localStorage.removeItem(Qt),st()}const mn=async n=>{n?.preventDefault();const e=localStorage.getItem(Qt);if(e){const t=JSON.parse(e);f.widgetTree=t?.widgetTree;const a=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,i=new URLSearchParams(window.location.search).get("widget-id");a===Number(i)?(a||q.enableWidgetButtons(),await nt(),D.updateActionHistories(),C.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},qn=async(n="")=>{const e=document.querySelector("#widget-properties .row"),t=document.getElementById("btn-draft-widget"),a=localStorage.getItem(Qt),i=JSON.parse(a),s=i?.widgetTree?.origin||i?.widgetTree?.widgetId,o=new URLSearchParams(window.location.search).get("widget-id");if(a&&!t){if(s!==Number(o)){st();return}const r=document.createElement("div");r.id="draft-widget",r.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),r.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,e?.appendChild(r),document.getElementById("btn-draft-widget")?.addEventListener("click",d=>mn(d)),s===0&&!n&&setTimeout(()=>{mn()},0)}else a&&t?s!==Number(o)||s===Number(o)&&!n?st():t?.addEventListener("click",r=>mn(r)):!a&&t&&st()};function st(){document.getElementById("draft-widget")?.remove()}const ct=(()=>{function n(d){const u=d.target,c=document.getElementById("codeBlocksContainer");c&&c.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}function e(d){const u=d.target,c=document.getElementById("codeBlocksContainer");c&&c.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}async function t(d){q.enableWidgetButtons();try{await nt(),uo(),D.updateActionHistories(),C.infoMessageToast(d)}catch(u){C.errorToast("widget synchronization failed"),console.error(u)}}const a=()=>{const d=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),d.style.display="flex";const g=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});g&&g.dispatchEvent(m),dt.enableHeader()},i=()=>{const d=document.getElementById("widgetButtionCodeViewWrapper"),u=document.createElement("div");u.classList.add("codeSplitViewButton");const c=document.createElement("div");c.appendChild(u);const g=document.createElement("div");g.id="codeBlocksContainer",g.innerHTML=`
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
        <div class="sub-tab-content active" data-subtab="before-render" id="onmount-editor-split">
          
        </div>
        <div class="sub-tab-content" data-subtab="update" id="onupdate-editor-split">
          
        </div>
        <div class="sub-tab-content" data-subtab="after-render" id="addevents-editor-split">
          
        </div>
        <div class="sub-tab-content" data-subtab="mount-child" id="mountchildwidgets-editor-split">
          
        </div>
      </div>
    </div>
`,d?.appendChild(g),document.querySelectorAll(".tab-btn").forEach(y=>{y.addEventListener("click",function(){const _=y.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(S=>S.classList.remove("active")),y.classList.add("active"),document.getElementById(_)?.classList.add("active")})}),g.querySelectorAll(".sub-tab-btn").forEach(y=>{y.addEventListener("click",function(){const _=y.getAttribute("data-subtab"),S=y.closest(".tab-content");S?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(v=>{v.classList.remove("active")}),y.classList.add("active"),S?.querySelector(`.sub-tab-content[data-subtab="${_}"]`)?.classList.add("active")})});const h=document.querySelector(".fullscreenicon"),b=document.querySelector("#widgetButtionCodeViewWrapper");h?.addEventListener("click",()=>{b.classList.contains("fullscreen")?dt.enableHeader():dt.disableHeader(),b.classList.toggle("fullscreen")});const T=document.querySelector(".close-btn");T&&T.addEventListener("click",a),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>t("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(c.firstChild),setTimeout(()=>{const y=document.querySelector(".codeSplitViewButton");y&&(y.removeEventListener("click",n),y.addEventListener("click",n));const _=document.getElementById("designSplitViewButton");_&&(_.removeEventListener("click",e),_.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",y=>s(y))};function s(d){d.stopPropagation();try{const u="add-custom-service-dialog";document.getElementById(u)?.remove();const g=document.createElement("dialog");g.setAttribute("id",u),g.classList.add("col-md-3"),g.innerHTML=`
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
      `;const m=g.querySelector("form");return m&&m.addEventListener("submit",p=>{p.preventDefault();const h=m?.serviceName?.value.trim(),b=/^[_A-Za-z][_A-Za-z ]*$/.test(h),T=document.getElementById("service-name-error");b?(T.textContent="",T.classList.add("d-none"),l(p)):(T.classList.remove("d-none"),T.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(g),me(u),"OPENED"}catch(u){console.error("Failed to rename widget:",u)}}async function o(d,u,c){console.log("openRenameCustomFunction -->",d,u,c),new co(u,c),await me("rename-custom-function-modal")}async function r(d,u,c){d.preventDefault();try{if(confirm("Do you want to delete the Service?")){C.infoMessageToast("Deleting the service...",0),c&&await Le(Number(c));const m=`button[data-subtab=${u}]`;document.querySelector(m)?.remove(),document.getElementById(`${u}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(_=>_.slug!==u);const b=document.getElementById("codeBlocksContainer");return b?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),b?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),b?.querySelector(".sub-tab-content.active")?.classList.remove("active"),b?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(g){C.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",g)}}async function l(d){d.preventDefault();const u=d.target,g=new FormData(u).get("serviceName");let m=g?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const p=document.getElementById("lifecycle"),h=p?.querySelector("div.sub-tab-nav"),b=document.getElementById("codeBlocksContainer");b?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),b?.querySelector(".sub-tab-content.active")?.classList.remove("active");const E=document.createElement("button");E.classList.add("sub-tab-btn","custom-service-btn","active"),E.setAttribute("data-subtab",m),E.innerHTML=`
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
    `,h.appendChild(E);const w=document.createElement("div");w.classList.add("sub-tab-content","custom-editor-content","active"),w.setAttribute("data-subtab",m),w.setAttribute("id",`${m}-editor-split`),p.appendChild(w),await new oe(`${m}-editor-split`).initializeEditor();const _={name:g,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(_),document.querySelectorAll(".tab-btn").forEach(L=>{L.addEventListener("click",function(){const x=L.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(k=>k.classList.remove("active")),L.classList.add("active"),document.getElementById(x)?.classList.add("active")})}),(b?.querySelectorAll(".sub-tab-btn")).forEach(L=>{L.addEventListener("click",function(){const x=L.getAttribute("data-subtab"),k=L.closest(".tab-content");k?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(I=>{I.classList.remove("active")}),L.classList.add("active"),k?.querySelector(`.sub-tab-content[data-subtab="${x}"]`)?.classList.add("active")})}),be("add-custom-service-dialog")}return{initializeCodeBlock:i,closeCodeView:a,synchronizeWidget:t,openRenameCustomFunction:o,deleteCustomFunction:r}})();async function po(){await qn();const n=document.getElementById("select-box");if(n.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(v=>{v.remove()}),document.querySelectorAll(".custom-editor-content").forEach(v=>{v.remove()});const y=document.getElementById("codeBlocksContainer"),_=y?.querySelectorAll(".sub-tab-btn");y?.querySelector(".sub-tab-btn.active")||(_?.[0]?.classList.add("active"),y?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),D.renderActionHistory(),D.updateActionHistories(),ln(f.staticWidgetTree),document.head.querySelectorAll("link.vde-css")?.forEach(E=>E.remove()),ue();const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const i=document.getElementById("widget-builder");i.textContent="Widget Builder Panel",i.setAttribute("title","Widget Builder Panel"),q.disableWidgetButtons(),await new xi().initializeEditor(),await new ii().initializeEditor(),await new oe("onmount-editor-split").initializeEditor(),await new oe("onupdate-editor-split").initializeEditor(),await new oe("addevents-editor-split").initializeEditor(),await new oe("mountchildwidgets-editor-split").initializeEditor(),await new ai().initializeEditor();const g=document.getElementById("widgetNameValue");g.value="";const m=document.getElementById("widgetTypeValue");m&&(m.value="");const p=document.getElementById("widgetType");p&&(p.value=""),document.getElementById("widget-version").classList.add("d-none");const b=document.getElementById("element-attributes");b.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,aa(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function ho(){const n=new es;f.widgetTree=n,ct.synchronizeWidget("Workspace Cleared")}let Ie="",xt="";async function wa(n){try{const t=(await M())?.token,a=await fetch(`${G.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(n)});if(!a.ok){const d=await a?.text(),u=JSON.parse(d);throw C.errorToast(u.message),console.error(`API Error (${a.status}):`,d),kt(a.statusText,"error"),new Error(`API request failed with status ${a.status}`)}const i=a.body.getReader(),s=new TextDecoder("utf-8");let o="",r=null;for(;;){const{value:d,done:u}=await i.read();if(u)break;o+=s.decode(d,{stream:!0});const c=o.split(`

`);for(let g=0;g<c.length-1;g++){const m=c[g].trim();if(m.startsWith("data:")){const p=m?.slice(6).trim();try{const h=JSON.parse(p);if(h.status==="responding"&&await yo(h.message_str),h.status==="success"&&(r=h),h.status==="error")throw C.errorToast(h.message?.[0]||"AI Error"),new Error(h.message?.[0])}catch(h){console.warn("Stream parse error:",h)}}}o=c[c.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),r}catch(e){return console.error(e),null}}async function fo(n){await qe(n),f.resetWidgetTree(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new ni("");const a=document.getElementById("prompt-text");Ie="",a?.addEventListener("keydown",function(r){if(r.key==="Enter"&&!r.shiftKey){r.preventDefault();const l={text_input:a?.value,chat_id:"",widget_type:"",stream:!0};Ie&&(l.tag="followup",l.chat_id=Ie,l.widget_type=xt),gt(l)}}),document.querySelector(".button-send").addEventListener("click",function(r){r.preventDefault();const l={text_input:a?.value,chat_id:"",widget_type:"",stream:!0};Ie&&(l.tag="followup",l.chat_id=Ie,l.widget_type=xt),gt(l)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(r=>{r?.addEventListener("click",function(l){l.preventDefault(),a.value=r?.innerText})})}async function gt(n){if(n.text_input){oi(n.text_input),wo("Assistant is working");const e=await wa(n);if(bo("prompt-loader"),!e)return;Ie=e?.data?.chat_id,xt=e?.data?.widget_type;const t=e?.message;if(f.staticWidgetTree.assistant={input:e?.data?.user_prompt,id:Ie,type:xt},e?.status=="error")C.errorToast(t);else{if(n.widget_type!=="list"){n.widget_type==="form"&&ri(Ie);const s=new Function("tsccs",e.data.data_structure_prototype)(ja);let o=document.getElementById("prototypeWidget");$e(G.visual_prototype_widget,o,{prototype:s}).then(r=>{r.dataChange(async l=>{const d={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:l,type:"application/JSON",stream:!0};try{const u=await wa(d);await Ln(u)}catch(u){throw u}})})}await kt(t);const a=document.createElement("button");a.classList.add("clearWorkspaceButton"),a.textContent="Clear Workspace",a.classList.add("btn","btn-danger"),a.addEventListener("click",()=>{ho(),a.remove()}),await kt(a),Dn(),await Ln(e)}}}async function kt(n,e){const t=document.querySelector(".chat-content"),a=document.createElement("div");if(a.classList.add("message","message-bot"),n instanceof HTMLButtonElement){const i=document.querySelector(".clearWorkspaceButton");i&&i.remove(),a.appendChild(n)}else e==="error"&&a.classList.add("text-danger","my-0","text-center"),a.innerText=n;t?.scrollTo({top:t.scrollHeight,behavior:"smooth"}),t?.insertAdjacentElement("beforeend",a)}async function yo(n,e){const t=document.getElementById("response-status");if(t)t.innerHTML=n;else{const a=document.querySelector(".chat-content"),i=document.createElement("div");i.id="response-status",i.classList.add("message","message-bot"),i.innerHTML=n,a?.insertAdjacentElement("beforeend",i),a?.scrollTo({top:a.scrollHeight,behavior:"smooth"})}}function oi(n){const e=document.getElementById("default-message"),t=document.querySelector(".chat-content"),a=document.createElement("div");a.classList.add("message","message-user"),a.innerText=n,t?.insertAdjacentElement("beforeend",a),e?.remove();const i=document.getElementById("prompt-text");i.value="",i.style.height="44px"}function wo(n){vo("prompt-form");const e=document.getElementById("prompt-content"),t=document.createElement("div");t.id="prompt-loader",t.textContent=n,e?.insertAdjacentElement("beforeend",t)}function bo(n){document.getElementById(n)?.remove(),_o("prompt-form")}function vo(n){const e=document.getElementById(n);for(let t of e.elements)t.disabled=!0}function _o(n){const e=document.getElementById(n);for(let t of e.elements)t.disabled=!1}async function Ln(n){const e=n?.data?.ui?.html||"",t=n?.data?.ui?.css||"",a=n?.data?.ui?.js||"",i=n?.data?.before_render||"",s=n?.data?.after_render||"",o={html:e,css:t,js:a,before_render:i,after_render:s,assistant:{id:n?.data?.chat_id,input:n?.data?.user_prompt,type:n?.data?.widget_type}};await Eo(o)}async function Eo(n){f.staticWidgetTree.html=n.html,f.staticWidgetTree.css=n.css,f.staticWidgetTree.js=n.js,f.staticWidgetTree.before_render=n.before_render,f.staticWidgetTree.after_render=n.after_render,f.staticWidgetTree.assistant=n.assistant;const e=f.staticWidgetTree,t=document.getElementById("builder-workarea");t.innerHTML="";const a=await Ya(e,t);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await te(e,!1,a),D.renderActionHistory(),D.updateActionHistories(),ue(),ye()}async function ri(n){document.getElementById("prompt-suggestion")?.remove();const t={text_input:"create a list widget for it",chat_id:n,widget_type:"list",stream:!0},a=document.createElement("div");a.id="prompt-suggestion",a.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",a),document.getElementById("request-list-widget").addEventListener("click",async o=>{o.preventDefault(),gt(t),so(),oo()})}async function To(n){new ni(n?.id),oi(n?.input),await kt("Widget Generated Successfully!!"),n.type==="form"&&ri(n?.id);const e=document.getElementById("prompt-text"),t={text_input:e?.value,chat_id:n?.id||"",widget_type:n?.type||"",tag:n?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(i){i.key==="Enter"&&(i.shiftKey||(i.preventDefault(),t.text_input=e?.value,gt(t)))}),document.querySelector(".button-send").addEventListener("click",function(i){i.preventDefault(),t.text_input=e?.value,gt(t)})}async function te(n,e,t,a,i){Xs(n?.type);const s=e?"":n?.css,o=e?`div[data-widgetid="${n.id}"] {${n.css}}
${t?.css}`:t?.css;if(await ei(s,o),le(n?.html),await Xa(n?.after_render),await ti(n?.before_render),n?.custom_functions?.length){const r=document.querySelectorAll(".custom-service-btn"),l=Array.from(r)?.map(c=>c.getAttribute("data-subtab")??""),d=n.custom_functions?.map(c=>c.slug);(l?.filter(c=>!d.includes(c))).forEach(c=>{const g=document.querySelector(`.custom-service-btn[data-subtab="${c}"]`);g&&g.remove(),document.getElementById(`${c}-editor-split`)?.remove()}),ya(),n.custom_functions?.forEach(c=>{si(c)})}else document.querySelectorAll(".custom-service-btn").forEach(d=>{d.remove()}),document.querySelectorAll(".custom-editor-content").forEach(d=>{d.remove()}),ya();(a||i)&&Gt(n?.origin?n?.origin:n?.widgetId),a&&n?.assistant?.id&&To(n?.assistant)}const Cn="drop-indicator";function li(){let n=document.querySelector(`.${Cn}`);return n||(n=document.createElement("div"),n.className=Cn,document.body.appendChild(n)),n}function So(n,e){const t=li(),a=n.getBoundingClientRect();e==="top"?t.style.top=`${a.top-5}px`:e==="bottom"&&(t.style.top=`${a.bottom-5}px`),t.style.left=`${a.left}px`,t.style.width=`${a.width}px`,t.style.opacity="1",t.style.transform="scaleY(1)"}function Lo(){document.querySelectorAll(`.${Cn}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function Co(n,e,t){if(e.length===0)return{element:t,position:"top"};const a=n.clientY;let i=e[0],s=Math.abs(i.getBoundingClientRect().top-a);Math.abs(i.getBoundingClientRect().bottom-a);for(const d of e){const u=d.getBoundingClientRect(),c=Math.abs(u.top-a);Math.abs(u.bottom-a),c<s&&(i=d,s=c)}const o=i.getBoundingClientRect(),r=o.top+o.height/2,l=a<r?"top":"bottom";return{element:i,position:l}}let Q=null,N;function Zt(){const n=document.querySelector(".content-target > .mftsccs-marking-element");if(n){const e=document.querySelector(".content-target");Ee.fixContentTargetHeight(e,n)}}function Ao(n){Q=n.target;let e={data_type:n.target.getAttribute("data-type"),data_default:n.target.getAttribute("data-default"),data_void:n.target.getAttribute("data-void"),data_text:n.target.getAttribute("data-text"),elementId:n.target.getAttribute("data-elementId"),dataId:n.target.id,imageUrl:n.target.imageUrl,displayType:n.target.displayType};n.dataTransfer.setData("text",JSON.stringify(e)),n.dataTransfer.setData("id",n.target.id),n.dataTransfer.effectAllowed="move"}async function Wo(n){n.stopPropagation();const e={widgetcodeId:n.target.getAttribute("data-widgetId"),sourceElementId:n.target.id,className:n.target.className,imageUrl:n.target.imageUrl,displayType:n.target.displayType,type:n.target.Type};n.dataTransfer.setData("text",JSON.stringify(e)),n.dataTransfer.effectAllowed="move"}function xo(n){n.preventDefault(),n.stopPropagation(),n.target.classList.add("dragging-area"),vt.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",Us()}function ko(n){n.preventDefault(),n.stopPropagation(),n.target.classList.remove("dragging-area")}function Mo(n){n.preventDefault(),n.stopPropagation(),(!Q||!(n.currentTarget instanceof HTMLElement))&&(Q=n?.target);const e=n.target,t=Array.from(e.children).filter(i=>i!==Q);li();const a=Co(n,t,e);N=a,So(a.element,a.position)}function Io(){q.checkContent()?q.enableWidgetButtons():q.disableWidgetButtons()}async function Po(n){const e=await Yt(n);Q=null,Lo(),D.updateActionHistories(),vt.collapseNavbar(),Io(),Zt(),ue(),e&&(le(),Gt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),ye()}function Mt(n,e){return Array.isArray(n?.children)&&(n.children=n?.children.filter(t=>t?.wrapper!==e),n.children.forEach(t=>Mt(t,e))),n}function Re(n,e){let t;return Array.isArray(n?.children)&&(t=n?.children.filter(a=>a?.wrapper===e),n.children.forEach(a=>Re(a,e))),t?.[0]}async function $o(n){n.preventDefault(),n.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(c=>{const g=document.getElementById(`${c}-content`);if(g&&g.style.display==="block"){const m={target:g.previousElementSibling};ht(m,`${c}-content`)}});const t=document.getElementById("element-attributes");if(t&&t.style.display==="block"){const c={target:document.querySelector("#icon-attribute")};ht(c,"element-attributes")}const a=R.staticElement,i=a?.parentElement,s=i?.parentElement,o=s?.dataset?.widgetid,r=a?.parentElement?.closest(".added-widget-container")||a?.parentElement?.closest(".edited-widget-container"),l=a.querySelectorAll(".added-widget-container");if(a?.classList?.contains("added-widget-container")){const c=a?.id;Mt(f?.staticWidgetTree,c)}else l.length&&l.forEach(c=>{const g=c?.id;Mt(f?.staticWidgetTree,g)});if(r){const c=r.id;if(a?.remove(),R.staticElement.remove(),Ct(),a?.classList?.contains("added-widget-container")){const g=Re(f?.staticWidgetTree,c),m=r.querySelector(".mftsccs-marking-element");g.html=m?.innerHTML,te(g)}else{const m=document.getElementById(c).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,te(f.selectedStaticWidgetTreeInfo.widgetTree)}ue(),D.updateActionHistories();return}i?.classList.contains("mftsccs-marking-element")&&i.children.length===1&&i?.remove(),o&&(s?.children?.length||s?.remove()),a?.remove(),R.staticElement.remove(),Ct();const d=await Ye();return f.staticWidgetTree.html=d,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},Wl(),te(f?.staticWidgetTree),ue(),D.updateActionHistories(),q.checkContent()||(q.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}async function Bo(n){return"drag"}async function jo(n){return n.dataTransfer.setData("text",n.target.id),"start drag"}async function No(n){console.log("dragEndWidgetElement event ->",n)}async function Do(n){return n.preventDefault(),n.stopPropagation(),"dragOverWidgetElement"}async function Ho(n){Yt(n),le()}let It=null;async function ci(n,e){if(n.preventDefault(),n.stopPropagation(),!Q)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let a=n.target;if(!a.classList.contains("mftsccs-marking-element")&&!a.classList.contains("fslayout-col")&&a.id!=="builder-workarea"){const l=document.getElementById("builder-workarea"),d=a.closest(".mftsccs-marking-element"),u=a.closest(".fslayout-col");a=d||u||l}if((Q.contains(a)||Q===a)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),a=document.getElementById("builder-workarea")),!a)return console.error("Invalid dropzone"),!1;a?.classList.remove("dragging-area");let i=Wt(n,e);if(!i.status)return alert(i.message),Q=null,!1;const s=e.dataType||e.type||e.data_type,o=s==="photo"||s==="Image"||s==="img",r=s==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(o){let l,d=!1;if(Q&&Q.tagName&&Q.tagName.toLowerCase()==="img"){if(d=!0,l=Q,l.parentElement===a&&console.log("Image is already in this dropzone, just repositioning"),!(l instanceof Node))return console.error("draggedItem is not a valid DOM node:",l),Q=null,!1;(!l.hasAttribute("style")||!l.style.width)&&l.setAttribute("style","width: 200px;")}else{const p=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(a.querySelectorAll(`img[src="${p}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),Q=null,!1;l=document.createElement("img"),l.setAttribute("src",p),l.setAttribute("style","width: 200px;")}let u=Ee.generateUUID();l.setAttribute("element-info-id",u);const c=a.classList.contains("file-item")&&a.classList.contains("photo-file")&&a.classList.contains("dragging");let g=l;if(c){const p=document.createElement("div");p.appendChild(l),g=p}try{if(d){const p=c&&l.parentElement?.parentElement||l.parentElement,h=c?l.parentElement:l;p&&p!==a&&h&&p.removeChild(h)}N?.position==="top"&&a?.children?.length&&N?.element?a.contains(N.element)&&!g.contains(N.element)&&g!==N.element?a.insertBefore(g,N.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),a.appendChild(g)):N?.position==="bottom"&&N?.element?a.contains(N.element)&&!g.contains(N.element)&&g!==N.element?N.element.insertAdjacentElement("afterend",g):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),a.appendChild(g)):a.appendChild(g)}catch(p){console.error("Error positioning element:",p.message);try{a.appendChild(g)}catch(h){return console.error("Cannot append element:",h),Q=null,!1}}l.removeAttribute("element-info-id");const m=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(m){const p=m.id,h=Re(f?.staticWidgetTree,p),b=m.querySelector(".mftsccs-marking-element");return b&&(h.html=b.innerHTML,await te(h)),Q=null,!1}return qo(),Q=null,!0}else if(r){let l=Wt(n,e);if(!l.status)return alert(l.message),Q=null,!1;if(e.sourceElementId){const w=e.sourceElementId||e.fileId;console.log("sourceElement ->",w)}let d=e.widget_id;a.classList.remove("dragging-area");const u=document.createElement("div");u.classList.add("wb-initial-empty"),u.style.display="block",u.style.marginBottom="10px",u.setAttribute("data-widget-id",d);const c=Ee.generateUUID();u.id=`widget-${c}`;const g=await M();let m=a.classList.contains("publicWidgetRouter"),p=await re(d);if(!m){const w=await Te(d.id,g.token);p=await re(w?w.widgetId:Number(d))}p?.children?.length&&await Xt(p);const h=q.clearDraggedWidget(p),b=await Se(h,u);h.wrapper=u.id;try{N?.position==="top"&&a?.children?.length&&N?.element?a.contains(N.element)&&!u.contains(N.element)&&u!==N.element?a.insertBefore(u,N.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),a.appendChild(u)):N?.position==="bottom"&&N?.element&&a.contains(N.element)&&!u.contains(N.element)&&u!==N.element?N.element.insertAdjacentElement("afterend",u):a.appendChild(u)}catch(w){console.error("Error positioning widget container:",w.message);try{a.appendChild(u)}catch(y){return console.error("Cannot append widget container:",y),Q=null,!1}}const T=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(T){const w=T.id;Re(f?.staticWidgetTree,w).children.push(h);const S=document.getElementById(w).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=S?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=S?.style.cssText,await te(f.selectedStaticWidgetTreeInfo.widgetTree),Q=null,!1}const A=await pt();f.staticWidgetTree.html=A,f.staticWidgetTree?.children?.push(h);const E=f.widgetTree.children.indexOf(h);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[E],isChildWidget:!0,childWidgetIndex:E},await te(h,!1,b),q.enableWidgetButtons(),Q=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),Q=null,!1}function qo(){document.querySelectorAll(".mftsccs-marking-element img").forEach(n=>{n.setAttribute("draggable","true"),n.addEventListener("dragstart",e=>{e.stopPropagation(),It=Date.now()}),n.addEventListener("dragend",e=>{e.stopPropagation(),setTimeout(()=>{It=null},100)})})}function Oo(){It=null,Q=null,console.log("dragStartTime",It)}async function Yt(n,e=!1,t,a){if(!n&&e&&t&&a){const l=await re(Number(t)),d=un(a,t,!1,null);let u=await Se(l,d);l.wrapper=d?.id;const c=await Ye();f.staticWidgetTree.html=c,f.staticWidgetTree?.children?.push(l),te(l,!0,u);return}n.preventDefault(),n.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let s=n.dataTransfer.getData("text");if((l=>{try{return JSON.parse(l),!0}catch{return!1}})(s))if(Object.keys(JSON.parse(s)).includes("widgetcodeId")){const l=JSON.parse(s);let d=Wt(n,l);const u=l.className.split(" ");if(!d.status){alert(d.message);return}const c=JSON.parse(s);if(c.sourceElementId){const S=document.getElementById(c.sourceElementId.toString());if(S){n.target.insertBefore(S,d.elementBelowDrag);return}}let g=Js(c),m=n.target;m.classList.remove("dragging-area");const p=await M();let h=!1;u.includes("publicWidgetRouter")&&(h=!0);let b=null,T=null;if(h){b=await re(Number(g)),T=un(m,g,!1,d.elementBelowDrag);const S=document.getElementById("widgetNameValue");S&&b?.name&&(S.value=b?.name);const v=document.getElementById("widget-builder");v&&b?.name&&(v.textContent="Widget Builder Panel: "+b?.name)}else{const S=await Te(g,p.token);b=await re(S?S.widgetId:Number(g));const v=document.getElementById("widgetNameValue");v&&b?.name&&(v.value=b?.name);const L=document.getElementById("widget-builder");L&&b?.name&&(L.textContent="Widget Builder Panel: "+b?.name),b?.children?.length&&await Xt(b),T=un(m,S?S.widgetId:g,!1,d.elementBelowDrag)}const A=q.clearDraggedWidget(b);let E=await Se(A,T);A.wrapper=T?.id;const w=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(w){const S=w.id;Re(f?.staticWidgetTree,S).children.push(A);const x=document.getElementById(S).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=x?.innerHTML,te(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const y=await Ye();f.staticWidgetTree.html=y,f.staticWidgetTree?.children?.push(A);const _=f.widgetTree.children.indexOf(A);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[_],isChildWidget:!0,childWidgetIndex:_},te(A,!1,E),q.enableWidgetButtons()}else{const l=JSON.parse(s),d=n.target;let u=Wt(n,l);if(u.status){let h=Ee.generateUUID();const b=Cl(h,l),T=document.createElement("div");T.innerHTML=b,N?.position==="top"&&d?.children?.length?d.insertBefore(T.firstChild,N?.element):N?.position==="bottom"?N?.element?.insertAdjacentElement("afterend",T.firstChild):d.appendChild(T.firstChild),n.target.classList.remove("dragging-area");let E=d.querySelector(`[element-info-id='${h}']`);l.data_type=="layout"?E.querySelectorAll(".fslayout-col").forEach(y=>{y.classList.add("wb-initial-empty")}):(E.classList.add("wb-initial-empty"),l?.data_type==="img"&&(E?.setAttribute("src","/images/img-placeholder.jpg"),E?.setAttribute("style","width: 200px;"))),E.removeAttribute("element-info-id"),l?.data_type==="img"&&(E?.setAttribute("src","/images/img-placeholder.jpg"),E?.setAttribute("style","width: 200px;"))}else alert(u.message);const c=n.target?.parentElement?.closest(".added-widget-container")||n.target?.parentElement?.closest(".edited-widget-container");if(c){const h=c.id,b=Re(f?.staticWidgetTree,h),T=c.querySelector(".mftsccs-marking-element");return b.html=T?.innerHTML,await te(b),n.dataTransfer.clearData(),!1}const g=document.querySelector(".content-target"),p=(await Ce(g,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=p;try{n.dataTransfer.clearData()}catch(h){console.error("error in clearing data",h.message)}return!0}else{const l=R.staticElement,d=n.target;d.classList.remove("dragging-area"),N?.position==="top"&&d?.children?.length?d.insertBefore(l,N?.element):N?.position==="bottom"?N?.element?.insertAdjacentElement("afterend",l):d.appendChild(l),Ct();const u=await Ye();f.staticWidgetTree.html=u}}function Fo(n){const s=new DOMParser().parseFromString(n,"text/html").body.querySelector("div")?.id,r=document.getElementById(s)?.parentElement?.closest(".added-widget-container"),l=r?.id,d=r?.querySelectorAll(".widget_container_disabled");return d?.length&&d?.forEach(u=>{const c=Ee.generateUUID();u.id=`wdgt${c}`}),l?.toString()}async function Xt(n){return Array.isArray(n.children)&&n.children.forEach(e=>{di(e,n),e.children.length&&Xt(e)}),n}function di(n,e){const t=n.wrapper,s=new DOMParser().parseFromString(e?.html,"text/html").body,o=s.querySelector(`#${t}`);if(!o)return n;const l=`wdgtcopy${Ee.generateUUID()}`;return o.id=l,n.wrapper=l,e.html=s.innerHTML.toString(),n}const Vo=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:Zt,dragElement:Bo,dragEndWidgetElement:No,dragOverWidgetElement:Do,dragStartWidgetElement:jo,dropElement:Yt,dropFolderElement:ci,dropWidgetElement:Ho,findChildByWrapper:Re,getChildWrapperId:Fo,getChildrenWrapperId:di,onDragEnter:xo,onDragLeave:ko,onDragOver:Mo,onDragStart:Ao,onDrop:Po,onWidgetDragStart:Wo,removeChildByWrapper:Mt,removeElement:$o,resetDragState:Oo,updateAllChildWidgets:Xt},Symbol.toStringTag,{value:"Module"})),Ro=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],On=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class ui{constructor(){}async getLayoutListHTML(){return On.map(t=>`
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
      `).join("")}async getTemplateLayoutsHTML(){const e=await ll();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const t=await M(),a=t?.entityId===101651686||t?.entityId===101279491;return e.map(i=>i.id?`
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
      `:"").join("")}}async function Te(n,e){let t=new z;t.composition=n,t.fullLinkers=["the_widget_recent","the_widget_latest"],t.inpage=100;let a=new z;a.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],a.inpage=100;const s=await we([t,a],e),r=await Pe(n,"the_widget_recent"),l=s?.data?.the_widget?.the_widget_recent||s?.data?.the_widget?.the_widget_latest||[],d=s?.data?.the_widget?.the_widget_latest||null;if(l.length){const u=l[0],c=u?.data.the_widget.the_widget_name?.[0].data.the_name,g=u?.data.the_widget.the_widget_html?.[0].data.the_html,m=u?.id,p=u?.data.the_widget.the_widget_css?.[0].data.the_css,h=u?.data.the_widget.the_widget_js?.[0].data.the_js,b=u?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,T=u?.data.the_widget.the_widget_version?.[0].data.the_version,A=u?.data.the_widget.the_widget_origin?.[0].data.the_origin|n;return{widgetName:c,widgetHTML:g,widgetCSS:p,widgetJS:h,widgetTimestamp:b,widgetVersion:Number(T||d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||d.id,origin:Number(A),connectionIdLatest:r,publishedWidgetVersion:d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const q=(()=>{const n=async()=>{const w=document.getElementById("fslayout-template-container");if(w){w.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const _=await new ui().getTemplateLayoutsHTML();w.innerHTML=_}},e=async()=>{const w=document.getElementById("public-widget-list-container");if(w){const y=await Mn();!y||y.trim()===""?w.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:w.innerHTML=y||""}},t=async()=>{const w=document.getElementById("folder-widget-container");if(w){const y=await rl();!y||y.trim()===""?w.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:w.innerHTML=y||""}},a=async()=>{const w=await kn();Sn.navbar.setSavedWidgets(w);const y=document.getElementById("saved-widget-list-container");y&&(!w||w.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=w||"")},i=async()=>{const w=await kn();Sn.navbar.setSavedWidgets(w);const y=document.getElementById("folder-widget-container");y&&(!w||w.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=w||"")},s=async(w,y,_,S,v,L,x)=>{if(S&&!v&&!L||v&&!S&&!L||L&&!x){console.error("creating widget copy argument required.");return}let k=null;k=await re(w.id);let I=null,$=null,B=[],j=0;L||(I=await Te(w.id,_),$=I?.origin?I?.origin:w.id,j=I?.widgetVersion?I?.widgetVersion:0,B=I?.connectionIdLatest?I.connectionIdLatest:null);const U={type:v?v.mainWidgetTypevalue:k.type,after_render:v?v.addeventsScript:k.after_render,before_render:v?v.onmountScript:k.before_render,update:v?v.onupdateScript:k.update,mount_child:v?v.mountchildwidgetsScript:k.mount_child,name:L?x:k?.name,html:L?k.html:v?v.widgetHTMLToUpdate:k.html,clean:v?v.widgetCleanHTMLToUpdate:k?.clean,css:v?v.widgetCSSToUpdate:k?.css?.toString(),js:v?v.widgetJSToUpdate:k?.js?.toString(),timestamp:v?v.widgetTimestampToUpdate:new Date().toISOString(),...!L&&{version:j?j+1:1,origin:$}},ne=await J($),Z=await V("widget",y,U);if(v?.assistant?.id){const F=await V("assistant",y,v?.assistant);await O(Z,F,"assistant")}if(v?.library?.css?.length){const F=v?.library?.css;for(let Y=0;Y<F.length;Y++){const ae=await V("css_library",y,F[Y]);await O(Z,ae,"s_css_library")}}if(v?.library?.js?.length){const F=v?.library?.js;for(let Y=0;Y<F.length;Y++){const ae=await V("js_library",y,F[Y]);await O(Z,ae,"s_js_library")}}if(v?.custom_functions?.length){const F=v?.custom_functions;for(let Y=0;Y<F.length;Y++){const ae=await V("custom_function",y,F[Y]);await O(Z,ae,"s_custom_function")}}if(!S&&!v&&L&&k?.children.length&&f.createChildWidget(k.children,Z),await O(ne,Z,"s_copy"),B&&B.length)for(let F=0;F<B.length;F++)await Me(B[F].id);return await O(ne,Z,"recent"),Z},o=async w=>{w.stopPropagation();const y=Number(w.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(y){C.infoMessageToast("Deleting your widget from public...",0);const S=await Pe(y,"the_public_widget_s_widget",!0);await Me(S[0].id),await pe(y,"the_widget_description"),await pe(y,"the_widget_thumbnail"),await pe(y,"the_widget_public_name"),await e(),await t(),await a(),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{C.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Removing Failed"),new Error("Removing Failed")}},r=async w=>{w.stopPropagation();const y=prompt("What would you like to name this imported widget?");if(!y||!y.trim())return;const _=Number(w.target.dataset.pubwidid);if(_){C.infoMessageToast("Importing widget...",0);try{const S=document.querySelector(".infoMessageToast"),v=await re(_);f.widgetTree=v,await f.saveWidget(y),await a(),await i(),S?.remove(),C.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Saving Failed"),new Error("Saving Failed")}}},l=async w=>{w.stopPropagation();const y=Number(w.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(y){C.infoMessageToast("Deleting your widget from templates...",0);const S=await Pe(y,"the_template_widget_s_widget",!0);await Me(S[0].id),await pe(y,"the_widget_template_thumbnail"),await pe(y,"the_widget_template_name"),await n(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{C.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Removing Failed"),new Error("Removing Failed")}},d=()=>document.querySelector(".content-target").innerHTML.trim()!=="",u=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const _=document.querySelector(y);_&&_.classList.remove("disabled")})},c=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const _=document.querySelector(y);_?_.classList.add("disabled"):console.log("button not found",y)})},g=w=>{const y=document.createElement("div");y.innerHTML=w.html;const _=y.querySelectorAll("div[data-elementid]");return _?.length&&_.forEach(S=>{S.className="widget_container_disabled"}),w.html=y.innerHTML,w.html=w.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,S=>S.replace(/\btrue\b/g,"false").trim()),w.html=w.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,S=>S.replace(/\bhover-element\b/g,"").trim()),w.html=w.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,S=>S.replace(/\bwb-block\b/g,"").trim()),w.html=w.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,S=>S.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),w.html=w.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,S=>S.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),w};async function m(w){try{if(C.infoMessageToast("Updating your widget preference",0),w){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const _=await Pe(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(_.length!==1&&_.length>0)for(let S=1;S<_.length;S++){const v=_[S];await Me(v.id)}if(w){if(!_.length){const S=await J(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const v=await X("use_latest","true",!1,f.userId,999);await O(S,v,"use_latest"),await H.SyncDataOnline()}}else if(_.length>0)for(let S=0;S<_.length;S++){const v=_[S];await Me(v.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await E(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;C.successfullToast("Widget Preference Updated.")}catch(y){throw y}finally{document.querySelector(".infoMessageToast")?.remove()}}async function p(w,y,_){y.checked||_?(w.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(w.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),_||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const h=new Map,b=()=>{const w=document.getElementById("widget-version");if(!w)return;w.innerHTML="",w.classList.remove("d-none"),w.classList.add("d-flex","flex-column","gap-2");const y=document.createElement("div");y.classList.add("d-flex","justify-content-between","align-items-center");const _=document.createElement("label");_.setAttribute("for","widgetVersionValue"),_.textContent="Widget Versions:";const S=document.createElement("div");S.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",S.id="useLtsSwitch";const v=document.createElement("input");v.type="checkbox",v.className="form-check-input",v.id="alwaysUseLTS";const L=document.createElement("label");L.className="form-check-label ms-2",L.setAttribute("for","alwaysUseLTS"),L.textContent="Use LTS",S.appendChild(v),S.appendChild(L),y.appendChild(_),y.appendChild(S);const x=document.createElement("select");return x.name="input-widgetVersionValue",x.id="widgetVersionValue",x.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(w.appendChild(y),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(v.checked=!0,p(x,v,!0)),v.addEventListener("change",async()=>{try{await p(x,v,!1)}catch(k){console.error("useLtsError",k),k instanceof Error&&C.errorToast(k.message),v.checked=!v.checked}})):w.appendChild(_),w.appendChild(x),x},T=()=>{const w=document.getElementById("widget-version");if(!w){console.warn("Widget version container not found");return}const y=document.getElementById("widgetVersionValue");y&&(h.forEach(_=>{y.removeEventListener("change",_)}),h.clear()),w.innerHTML="",w.classList.remove("d-flex"),w.classList.add("d-none")},A=async(w,y,_)=>{try{const S=await M(),v=document.getElementById("widgetVersionValue");v&&h.forEach(j=>{v.removeEventListener("change",j)});const L=b();if(!L){console.error("Failed to create select element");return}const x=await Te(w,S?.token),k=x?.widgetVersion,I=new Date(x?.widgetTimestamp).toLocaleString();let $=new Date(_).toLocaleString();if($==="Invalid Date"&&($=new Date().toLocaleString()),x){const j=document.createElement("option");j.value="original",j.textContent=`Original ${y==="original"?`(Current) (${$})`:""}`,(!x||!x.publishedWidgetVersion)&&(j.textContent+=" (Published)"),L.appendChild(j);for(let U=0;U<x.widgetVersion;U++){const ne=document.createElement("option");ne.value=`${U+1}`,ne.textContent=`Version ${U+1} ${U+1==Number(y)?"(Current)"+(k===U+1?` (${I})`:` (${$})`):""}`,U+1==Number(y)&&(ne.selected=!0),x.publishedWidgetVersion&&U+1==Number(x.publishedWidgetVersion)&&(ne.textContent+=" (Published)"),L.appendChild(ne)}}else{const j=document.createElement("option");j.value="",j.textContent=`Original (current) (${$})`,j.selected=!0,L.appendChild(j)}if(h.has(w)){const j=h.get(w);L.removeEventListener("change",j),h.delete(w)}const B=E(w,S.entityId);h.set(w,B),L.addEventListener("change",B)}catch(S){console.error("Error initializing widget versions:",S)}},E=(w,y,_)=>{async function S(v){v&&v.preventDefault();let L="";if(_&&_===!0){f.token||await f.getUserDetails();const k=await Te(w,f.token);k&&(L=k.publishedWidgetVersion)}else{const I=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",y),L=I?.value||""}if(!L)return;if(f.selectedStaticWidgetTreeInfo.isChildWidget)try{let k;if(L==="original"){k=w;const $=await re(k);I($)}else{let $=new P;$.typeConnection="the_widget_version",$.name="version";let B=new Fe;B.type="the_version",B.search=L,B.logicoperator="=",B.name="versionFilter",B.operateon="version",B.composition=!1;const j=new P;j.typeConnection="the_widget_s_copy",j.name="copywidgets",j.freeschemaQueries=[$],j.selectors=["the_widget_name","the_widget_type","the_widget_html","the_widget_css","the_widget_js","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_origin","the_widget_version"];const U=new P;U.conceptIds=[w],U.freeschemaQueries=[j],U.inpage=100,U.filters=[B],U.filterLogic="( versionFilter )",U.outputFormat=de,ce(U,"").subscribe(async ne=>{try{const F=ne?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;if(!F){C.errorToast("Widget version not found");return}const Y=await re(F);I(Y)}catch(Z){console.error("Error in widget version callback:",Z),C.errorToast("Error updating widget version")}})}async function I($){const B=JSON.parse(JSON.stringify(f.staticWidgetTree)),U=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,ne={...$,wrapper:U};let Z=!1;const F=ae=>{for(let Ne=0;Ne<ae.length;Ne++){if(ae[Ne].wrapper===U){ae[Ne]=ne,Z=!0;break}if(ae[Ne].children&&ae[Ne].children.length>0&&(F(ae[Ne].children),Z))break}};if(F(B.children),!Z){console.error("Could not find child widget to update"),C.errorToast("Failed to update widget");return}f.widgetTree=B,f.selectedStaticWidgetTreeInfo.widgetTree=ne,_&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const Y=document.getElementById(U);if(Y){Y.innerHTML="",await Se(ne,Y);let ae;L==="original"?ae=w:ae=$.id,Y.setAttribute("data-widgetid",ae.toString()),te(ne,!1),ue(),C.successfullToast("Widget version updated")}}}catch(k){console.error("Error updating child widget version:",k),C.errorToast("Error updating widget version")}else if(L==="original")await Ue(null,w,w),ue();else{let k=new P;k.typeConnection="the_widget_version",k.name="version";let I=new Fe;I.type="the_version",I.search=`${L}`,I.logicoperator="=",I.name="versionFilter",I.operateon="version",I.composition=!1;const $=new P;$.typeConnection="the_widget_s_copy",$.name="copywidgets",$.freeschemaQueries=[k],$.selectors=["the_widget_name","the_widget_type"];const B=new P;B.conceptIds=[w],B.freeschemaQueries=[$],B.inpage=100,B.filters=[I],B.filterLogic="( versionFilter )",B.outputFormat=de;let j=0;await ce(B,"").subscribe(async U=>{const Z=U?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;Z?j=Z:C.errorToast("widget version not found")}),j&&await Ue(null,j,w)}}return S};return{createWidgetCopy:s,removeMyWidgetFromPublic:o,removeFromTemplate:l,renderSavedWidgets:a,renderBoomWidgets:i,renderPublicWidgets:e,renderTemplateLayouts:n,saveFromPublic:r,checkContent:d,enableWidgetButtons:u,disableWidgetButtons:c,clearDraggedWidget:g,initializeWidgetVersions:A,removeWidgetContainer:T,loadWidgetVersionWith:E}})(),Ee=(()=>{const n=async l=>{l.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const u=d?.parentElement;if(u&&d){const c=d.previousElementSibling;c?.classList.contains("mftsccs-marking-element")&&c.childNodes.length>1&&alert("insert into marker"),c&&u.insertBefore(d,c)}await t(),At(),D.updateActionHistories()},e=async l=>{l.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const u=d?.parentElement;if(u&&d){const c=d.nextElementSibling;c&&u.insertBefore(c,d)}await t(),At(),D.updateActionHistories()};async function t(){const l=f.widgetTree,d=f.selectedStaticWidgetTreeInfo.widgetTree;function u(g){for(const m of g.children){if(m===d)return g;const p=u(m);if(p)return p}return null}const c=u(l);if(c){let g=null;c.wrapper&&c.wrapper!="0"?g=document.getElementById(c.wrapper):g=document.getElementById("builder-workarea"),c.html=g.innerHTML}else await le()}function a(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(l){const d=Math.random()*16|0;return(l==="x"?d:d&3|8).toString(16)})}async function i(l,d,u){if(l.childNodes.length){if(l.dataset.widgetid){await Yt(null,!0,parseInt(l.dataset.widgetid),l.parentElement?l.parentElement:d),le(),ye(),l.remove();return}l.childNodes.forEach(c=>{i(c,d)})}}return{moveUp:n,moveDown:e,copyElement:async l=>{l.stopPropagation();const d=R.staticElement;if(d?.removeAttribute("draggable"),d.classList.contains("content-target"))return;const u=d?.parentElement,c=d.cloneNode(!0);await i(c,u),c.dataset.widgetid||u.insertBefore(c,d.nextSibling),ye(),await t(),ue(),D.updateActionHistories()},fixContentTargetHeight:(l,d)=>{const u=window.getComputedStyle(d);console.log("wrapper element computed height",u.height,l)},editWidget:async l=>{console.log("event.target",l.target);const d=document.getElementById("edit-widget");d.style.display="none";const c=R.staticElement.closest(".added-widget-container");c.classList.replace("added-widget-container","edited-widget-container");const g=c.querySelectorAll(".widget_container_disabled");g.length&&g.forEach(h=>{h.className="widget_container widget_selected"}),R.staticElement?.removeAttribute("draggable");let m=c.cloneNode(!0);const p=await Ce(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=p.innerHTML,f.editedWidgets[c.id]=f.selectedStaticWidgetTreeInfo.widgetTree,R.staticElement?.setAttribute("draggable","true"),ye()},generateUUID:a}})();class f{static newWidget=new yt;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await M();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const t=document.getElementById("widget-btn-wrapper");t&&t.querySelectorAll("button").forEach(a=>a.disabled=!0),await this.updateOwnerStatus(),this.#e&&t&&t.querySelectorAll("button").forEach(a=>a.disabled=!1)}}catch(t){console.error("error updating widget properties",t)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const t={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString()},a=await V("widget",this.userId,t),i=await ee(this.entityId);if(await K(i,a,"s_widget"),this.staticWidgetTree?.assistant?.id){const s=await V("assistant",this.userId,this.staticWidgetTree?.assistant);await K(a,s,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let o=0;o<s.length;o++){const r=await V("css_library",this.userId,s[o]);await K(a,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let o=0;o<s.length;o++){const r=await V("js_library",this.userId,s[o]);await K(a,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let o=0;o<s.length;o++){const r=await V("custom_function",this.userId,s[o]);await K(a,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let o=0;o<s.length;o++)await this.createChildWidget(s[o],a)}return await H.SyncDataOnline(),a}static async createChildWidget(e,t){const a={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper},i=await V("widget",this.userId,a),s={wrapper:e?.wrapper,type:e?.type,parent:i.id},o=await V("child_widget",this.userId,s);if(await K(t,o,"s_child"),await K(o,i,"info"),e.useLatest&&e.useLatest===!0){const r=await X("use_latest","true",!1,this.userId,999);await K(o,r,"use_latest")}if(e?.library?.css?.length){const r=e?.library?.css;for(let l=0;l<r.length;l++){const d=await V("css_library",this.userId,r[l]);await K(i,d,"s_css_library")}}if(e?.library?.js?.length){const r=e?.library?.js;for(let l=0;l<r.length;l++){const d=await V("js_library",this.userId,r[l]);await K(i,d,"s_js_library")}}if(e?.custom_functions?.length){const r=e?.custom_functions;for(let l=0;l<r.length;l++){const d=await V("custom_function",this.userId,r[l]);await K(i,d,"s_custom_function")}}if(e?.children?.length)for(let r=0;r<e?.children?.length;r++)await this.createChildWidget(e.children[r],i)}static async updateOwnerStatus(){try{const e=await J(this.entityId),t=await J(this.staticWidgetTree.origin||this.staticWidgetTree.id),a=await vn(e,t,"s_widget","the_entity_s_widget");if(console.log("updating canupdate status",a,e.id,t.id),a.length)this.#e=!0;else{const i=await Na(this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(console.log("canupdate connectionPage",i,"body widget id",this.staticWidgetTree.id),i.length){const s=await J(i[0].id);(await vn(e,s,"s_page","the_entity_s_page")).length&&(this.#e=!0),console.log("canupdate page",e.id,s.id)}}console.log("canupdate",this.#e)}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await J(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),t={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions},a=await q.createWidgetCopy(e,this.userId,this.token,!0,t);if(this.staticWidgetTree.children.length){const i=this.staticWidgetTree.children;for(let s=0;s<i.length;s++)await this.createChildWidget(i[s],a)}return await H.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},a}catch(e){throw e}}static async savePageWidget(e,t){const a={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:t,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString()},i=await V("widget",this.userId,a);if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let r=0;r<o.length;r++){const l=await V("css_library",this.userId,o[r]);await K(i,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let r=0;r<o.length;r++){const l=await V("js_library",this.userId,o[r]);await K(i,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let r=0;r<o.length;r++){const l=await V("custom_function",this.userId,o[r]);await K(i,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let r=0;r<o.length;r++)await this.createChildWidget(o[r],i)}const s=await J(e);return await K(s,i,ie.PAGE_WIDGET_LINKER),await H.SyncDataOnline(),!0}static async copyPageWidget(e,t,a){const i={after_render:a?.after_render,before_render:a?.before_render,name:t,html:a?.html,css:a?.css,js:a?.js,type:a?.type,timestamp:new Date().toISOString()},s=await V("widget",this.userId,i);if(a?.library?.css?.length){const o=a?.library?.css;for(let r=0;r<o.length;r++){const l=await V("css_library",this.userId,o[r]);await K(s,l,"s_css_library")}}if(a?.library?.js?.length){const o=a?.library?.js;for(let r=0;r<o.length;r++){const l=await V("js_library",this.userId,o[r]);await K(s,l,"s_js_library")}}if(a?.custom_functions?.length){const o=a?.custom_functions;for(let r=0;r<o.length;r++){const l=await V("custom_function",this.userId,o[r]);await K(s,l,"s_custom_function")}}if(a.children.length){const o=a.children;for(let r=0;r<o.length;r++)await this.createChildWidget(o[r],s)}return await K(e,s,ie.PAGE_WIDGET_LINKER),await H.SyncDataOnline(),!0}static async hasWidgetChanged(e){const t=["html","css","js","after_render","before_render","update","mount_child"],a=l=>l?l.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function i(l){let d=0;for(let u=0;u<l.length;u++){const c=l.charCodeAt(u);d=(d<<5)-d+c,d=d&d}return d}const s=(l,d)=>t.some(u=>{const c=a(l[u]),g=a(d[u]),m=i(c),p=i(g),h={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==p?(console.log("value changed",`
value 1
`,c,`
value 2
`,g),!(c==""||c==h[u])):!1}),o=(l,d)=>l.length!==d.length?!0:l.some((u,c)=>s(u,d[c])||o(u.children,d[c].children)),r={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0};return e?(console.log("checking tree static",this.staticWidgetTree,"to initial tree",this.initialWidgetTree),s(this.staticWidgetTree,this.initialWidgetTree)||o(this.staticWidgetTree.children,this.initialWidgetTree.children)):s(this.staticWidgetTree,r)||o(this.staticWidgetTree.children,r.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");C.infoMessageToast("Publishing Widget",0);let e=null;const t=await J(this.staticWidgetTree.origin),a=this.staticWidgetTree.origin||this.staticWidgetTree.id,i=await Pe(a,"the_widget_latest");if(i&&i.length){for(let o=0;o<i.length;o++)await Me(i[o].id);try{const o=await fetch(Ba.NODE_CACHE_URL+`/api/get-latest-widget?id=${t.id}`,{method:"DELETE"});o.ok||console.error("Failed to delete widget from cache server:",o.status)}catch(o){console.log("error removing widget from cache server",o)}}this.staticWidgetTree.origin&&(e=await J(this.staticWidgetTree.id),await K(t,e,"latest"),await H.SyncDataOnline()),await q.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),C.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,t=await Pe(e,"the_widget_latest");if(t.length){const i=t[0].toTheConceptId===this.staticWidgetTree.widgetId;console.log("ami?",i,this.staticWidgetTree),i?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1}const a=document.getElementById("publish-widget");a&&(a.style.display="block",this.staticWidgetTree.isPublished?(a.textContent="Published",a.disabled=!0,a.style.cursor="not-allowed"):(a.textContent="Publish This Version",a.disabled=!1,a.style.cursor="pointer"))}}var Fn=(n=>(n.page="page",n.widget="widget",n))(Fn||{});const Uo=Vs("mftsccs-browser"),zo=`
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
`,Jo=`
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
`,Go=`
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
    "mftsccs-browser": "${Uo}"
  }
}
`,Qo=`
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
`,Ko=`
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
`,Zo=`
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
  `,Yo=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${G.baseURL}",
    baseNodeUrl: "${G.baseNodeUrl}",
    boomURL: "${G.boomURL}",
    aiURL: "${G.aiURL}",
  }
`,Xo=`
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
`,en=n=>`
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
`,er=`
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
`,tr=`
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
}`,nr=`
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

`;class tn{async createProject(e,t,a){const i=await V(W.PROJECT_COMP_NAME,t,e),s=await ee(a);return await O(s,i,ie.ENTITY_PROJECT_LINKER),i}async getAllProjects(e){return new Promise(async(t,a)=>{const i=await M(),s=new P;s.typeConnection=`the_entity_${ie.ENTITY_PROJECT_LINKER}`,s.selectors=[`the_${W.PROJECT_COMP_NAME}_name`],s.name="first",s.inpage=100;const o=new P;o.conceptIds=[e||i.entityId],o.name="second",o.inpage=100,o.freeschemaQueries=[s],o.outputFormat=de,await ce(o,"").subscribe(async r=>{const l=r?.[0]?.data?.the_entity?.[`the_entity_${ie.ENTITY_PROJECT_LINKER}`];t(l)}).catch(r=>{console.error(r);const l=r?.message;C.errorToast(`${l}`,4),a({error:!0,message:l})})})}async getProjectById(e){const a=(await M())?.token;let i=new z;i.composition=e,i.fullLinkers=[`the_${W.PROJECT_COMP_NAME}_name`,`the_${W.PROJECT_COMP_NAME}_main_page`,`the_${W.PROJECT_COMP_NAME}_${ie.PROJECT_PAGE_LINKER}`],i.inpage=100;let s=new z;return s.fullLinkers=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_body`],s.inpage=100,await we([i,s],a)}async updateProjectField(e,t,a){const i=await M(),s=`the_${W.PROJECT_COMP_NAME}_${e}`;await pe(a,s);const o=await J(a),r=await X(`${e}`,`${t}`,!1,i.userId,4,999);await O(o,r,e)}async deleteProject(e){try{return await Le(e),!0}catch(t){return console.error("Failed to delete project:",t),!1}}async addPagesToProject(e,t){try{const a=await J(e);if(!a){console.error("Project not found");return}await pe(e,`the_project_${ie.PROJECT_PAGE_LINKER}`);for(const i of t){const s=await J(i);if(!s){console.error("Page not found");return}await O(a,s,ie.PROJECT_PAGE_LINKER)}await H.SyncDataOnline()}catch(a){console.error("Failed to add page to project:",a)}}async deletePageFromProject(e,t){try{const a=await J(e);if(!a){console.error("Project not found");return}const i=await J(t);if(!i){console.error("Page not found");return}const s=await vn(a,i,"",`the_project_${ie.PROJECT_PAGE_LINKER}`);if(!s){console.error("Connection not found");return}await Me(s?.[0]?.id),await H.SyncDataOnline()}catch(a){console.error("Failed to delete page from project:",a)}}async setMainPage(e,t){try{const a=await J(e);if(!a){console.error("Project not found");return}const i=await J(t);if(!i){console.error("Page not found");return}await pe(e,"the_project_main_page"),await O(a,i,"main_page"),await H.SyncDataOnline()}catch(a){console.error("Failed to set main page:",a)}}}let ge=!1;const ar=async()=>{if(ge)return;ge=!0;let n=new Jt;const e=await nn(n),t=e?.routesDir,a=e?.pagesDir;await sr(a,t),n.generateAsync({type:"blob"}).then(function(i){let s=document.createElement("a");s.href=URL.createObjectURL(i),s.download="my_files.zip",s.click()}),ge=!1},ir=async n=>{if(ge)return;ge=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],t=new Jt;const a=await nn(t),i=a?.widgetsDir,s=a?.pagesDir;i&&s&&await or(n,s,i),a?.routesDir?.file("routes.ts",en(e)),t.generateAsync({type:"blob"}).then(function(o){let r=document.createElement("a");r.href=URL.createObjectURL(o),r.download="my_files.zip",r.click()}),ge=!1},nn=async n=>{n.file("index.html",Qo),n.file("vite.config.js",zo),n.file(".gitignore",Jo),n.file("package.json",Go),n.file("tsconfig.json",Zo);let e=n.folder("public");if(!e){console.log("unable to create public folder");return}let t=n.folder("src");if(!t){console.log("unable to create src folder");return}t?.file("app.ts",Ko),t?.file("style.css","");let a=t?.folder("environments");if(!a){console.log("unable to create environments folder");return}a?.file("environment.dev.ts",Yo);let i=t?.folder("widgets");if(!i){console.log("unable to create widgets folder");return}let s=t?.folder("pages");if(!s){console.log("unable to create pages folder");return}let o=t?.folder("services");if(!o){console.log("unable to create services folder");return}o?.file("widget.service.ts",er),o?.file("drop.service.ts",tr),o?.file("validator.service.ts",nr);let r=t?.folder("routes");if(!r){console.log("unable to create routes folder");return}return r?.file("renderRoute.service.ts",Xo),{srcDir:t,pagesDir:s,servicesDir:o,publicDir:e,environmentsDir:a,widgetsDir:i,routesDir:r}},sr=async(n,e)=>{if(!n&&!e)return;let t=[];const a=await M(),i=a?.entityId,s=a?.token,o=new z;o.composition=i,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const r=new z;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await we([o,r],s);if(l?.data.the_entity?.the_entity_s_page?.length)for(let d=0;d<l?.data.the_entity?.the_entity_s_page?.length;d++){const u=l.data.the_entity.the_entity_s_page[d];let c={page:u?.data?.the_page?.the_page_body?.[0]?.id,title:u?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:u?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:u?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:u?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:u?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:u?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!c.page)continue;const g=`${c.slug.split("-").map((h,b)=>b===0?h.charAt(0).toLowerCase()+h.slice(1):h.charAt(0).toUpperCase()+h.slice(1)).join("")}`;t.push({path:`/${c.slug}`,content:`${g}Index`,importFrom:`/${c.slug}/${c.slug}.index.ts`});let m=n?.folder(c.slug);const p=`
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
`;m?.file(`${c.slug}.index.ts`,p)}e?.file("routes.ts",en(t))},or=async(n,e,t)=>{console.log("widgetsDir",t);const i=(await M())?.token,s=await Yn(n,i,!0);let o=e?.folder("home");const r=`
import * as tsccs from "mftsccs-browser";

${s?.css?'import "./home.style.css";':""}
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
`;o?.file("home.index.ts",r),s?.css&&o?.file("home.style.css",s?.css)},rr=async n=>{if(ge)return;ge=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],t=new Jt;const a=await nn(t),i=a?.widgetsDir,s=a?.pagesDir;let o="";i&&s&&(o=await lr(n,s)),a?.routesDir?.file("routes.ts",en(e)),t.generateAsync({type:"blob"}).then(function(r){let l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=`${o||"page"}.zip`,l.click()}),ge=!1},lr=async(n,e)=>{const t=await M(),a=t?.entityId,i=t?.token,s=await Yn(n,i,!0),o=new z;o.composition=a,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const r=new z;r.inpage=100,r.composition=n,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const d=(await we([o,r],i))?.data?.the_entity?.the_entity_s_page?.filter(p=>p?.id==n),u=d?.[0]?.data?.the_page?.the_page_body?.[0]?.id,c=d?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let g=e?.folder("home");const m=`
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
    `;return g?.file("home.index.ts",m),s?.css&&g?.file("home.style.css",s?.css),c},cr=async n=>{if(ge)return;if(!n){console.log("Project id is required");return}const i=(await new tn().getProjectById(n))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();ge=!0;let s=new Jt;const o=await nn(s),r=o?.routesDir,l=o?.pagesDir;await dr(l,r,n),s.generateAsync({type:"blob"}).then(function(d){let u=document.createElement("a");u.href=URL.createObjectURL(d),u.download=`the_${i}.zip`,u.click()}),ge=!1},dr=async(n,e,t)=>{if(!n&&!e)return;let a=[];const s=(await M())?.token,o=new z;o.composition=t,o.inpage=100,o.fullLinkers=["the_project_s_page","the_project_main_page"];const r=new z;r.inpage=100,r.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const l=await we([o,r],s),d=l?.data.the_project?.the_project_main_page?.[0]?.id;if(l?.data.the_project?.the_project_s_page?.length)for(let u=0;u<l?.data.the_project?.the_project_s_page?.length;u++){const c=l.data.the_project.the_project_s_page[u];let g={page:c?.id,title:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:c?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:c?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:c?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:c?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!g.page)continue;const m=`${g.slug.split("-").map((b,T)=>T===0?b.charAt(0).toLowerCase()+b.slice(1):b.charAt(0).toUpperCase()+b.slice(1)).join("")}`;a.push({path:`/${g.slug}`,content:`${m}Index`,importFrom:`/${g.slug}/${g.slug}.index.ts`}),g.page==d&&a.push({path:"/",content:`${m}Index`});let p=n?.folder(g.slug);const h=`
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
                }`;p?.file(`${g.slug}.index.ts`,h)}e?.file("routes.ts",en(a))};async function ur(){const n=new oe("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function mr(){const n=new oe("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await n.initializeEditor()}async function mi(){await ur(),await mr(),await Zs(),await Ys()}function gr(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function gi(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function An(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class pi{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const a=(await M())?.token;Dn(),gi(),document.querySelector("#widget-properties #widget-type input")?.remove(),gr(),await mi();let s=Hn(),o=await Te(e,a),r=await re(o?.widgetId??e),l=await Se(r,s);this.addPageUpdate(e),An(),f.resetWidgetTree(),f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),te(r,!1,l,!0),q.enableWidgetButtons(),Zt(),ue(),ye()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`
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
      `,this.isDroppedDown=!1,this.arrowBtn=t.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=t.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,t){ei(e.css,t?.css),Xa(e.after_render),ti(e.before_render)}}class pr{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
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
    `}}const ba={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},va=new Ge,hi=new pi;async function Vn(n){n.preventDefault();try{await je(),await nt();const e=document.getElementById("fspage-save-button"),t=Number(e?.getAttribute("data-pageid")),s="widget_"+(await va.getPageById(t)).data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_slug`].data.the_slug,o=document.querySelectorAll(".edited-widget-container");C.infoMessageToast("Saving page...",0),o?.length&&o.forEach(c=>{const g=c.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),c.classList.remove("edited-widget-container")});const r=await Ye();f.staticWidgetTree.html=r,await f.savePageWidget(t,s),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast(ba.PAGE_SAVE);const u=(await va.getPageById(t))?.data?.the_page?.the_page_body?.id;return await hi.LoadPageWidget(u),ba.PAGE_SAVE}catch(e){zn(e,"There is an error on saving widget")}}async function Rn(n,e,t){n.preventDefault();const a=document.getElementById("updateFsPagePublish"),i=document.getElementById("updateFsPage"),s=i?.innerHTML||"";try{const o=document.getElementById("updateFsPagexx");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating.."),o&&(o.classList.add("disabled"),o.textContent="Updating..");const r=document.querySelectorAll(".edited-widget-container");C.infoMessageToast("Updating Page...",0),r?.length&&(C.infoMessageToast("Updating page...",0),r.forEach(c=>{const g=c.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),c.classList.remove("edited-widget-container")}));const l=await Ye();f.staticWidgetTree.html=l;const d=await f.updateWidget();return console.log("updateWidgetResponse ->",d),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Page Updated Successfully"),await hi.LoadPageWidget(e),t&&t===!0&&await f.publish(),"updated widget successfully!"}catch(o){console.error("error updating page",o),o instanceof Error&&C.errorToast(o.message),document.querySelector(".infoMessageToast")?.remove()}finally{a&&a.classList.remove("disabled"),i&&(i.classList.remove("disabled"),i.innerHTML=s)}}function hr(n){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const t=`${window.location.origin}/page-preview/${e}`;window.open(t,"_blank")?.focus()}}function fr(n,e=0){return window.saveWidgetInFolders=wr,`
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
    `}let gn,ot;async function yr(n,e){gn=n;const t=fr(e,typeof n=="object"?0:n),a=document.createElement("div");a.innerHTML=t;const i=a.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(i),await me("folder-widget-container");const s=await M();if(!s)return;let o,r,d=(await et(gn,s.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(o=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),o&&(o.value=d),r=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(o=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),r=document.getElementById("folder-widget-container")?.querySelector("textarea#description"));const u=document.getElementById("widgetFolder");ot=await $e(G.folder_widget,u,{widgetName:o.value,widgetDescription:r?.value,widgetId:gn,showCheckbox:!0,showFiles:!1})}async function wr(n,e,t,a){n.preventDefault(),console.warn("asdfads",ot.selectedConceptIds);let i=[];ot&&ot?.selectedConceptIds?.length>0&&(i=ot.selectedConceptIds||[]);try{C.infoMessageToast("Saving Widget...",0),await je();const s=document.getElementById("folder-widget-container"),o=s?.querySelector('button[type="submit"]');o.textContent="Saving";const r=s?.querySelector("input"),l=s?.querySelectorAll("button"),u=(document.getElementById("save-to-folder-name")||document.getElementById("folder-name")).value;l&&l.forEach(E=>{E.disabled=!0}),r&&(r.disabled=!0),await nt();let c;if(!a){R.staticElement?.removeAttribute("draggable");const E=document.querySelectorAll(".edited-widget-container");E?.length&&E.forEach(async _=>{if(_.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[_.id]){const S=await Ce(_,"div.mftsccs-marking-element");f.editedWidgets[_.id].html=S.innerHTML}});const w=await Si();f.staticWidgetTree.html=w;const y=await f.saveWidget(u);c=await ee(y.id),t=c.id}const g=await M(),m=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,p=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,h={title:m,source_url:window.location.href,widget_id:t,short_desc:p,note:"",data_type:"widget",created_on:Date.now()};if(i.length==0){const E=g?.userConcept;c=await ee(Number(t));let w={...h,boom_folder:{name:"",parent:E}};const y=await Oe({boomgpt:w},void 0,void 0,void 0,g.userId,4);await ca(await ee(Number(E)),y,"the_boom_folder_s_contain"),await K(y,c,"the_refer")}else if(i?.length>0)for(let E=0;E<i.length;E++){const w=i[E];c=await ee(Number(t));const y=await ee(Number(w));if(!y)throw new Error("Selected folder concept not found!");let _={...h,boom_folder:{name:y.name||"",parent:w}};const S=await Oe({boomgpt:_},void 0,void 0,void 0,g.userId,4);await ca(await ee(Number(w)),S,"the_boom_folder_s_contain"),await K(S,c,"the_refer")}await H.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),be("folder-widget-container"),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Widget saved successfully!"),a||(await q.renderSavedWidgets(),Ue(n,Number(t)))}catch(s){document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Error in saving widget"),zn(s,"There is an error on saving widget")}}class fi extends yt{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";_pageBuilderService;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const t=M();if(t&&(this.saveBoomButtonHTML=`
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
    `,e){this.the_params=e,this._pageBuilderService=new pi;const a=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+a:"Widget Builder";const i=this.the_params?.page_id;t&&e.type==Fn.page&&(this.saveBoomButtonHTML=`
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
`}before_render(){this.render()}after_render(){if(this.the_params){document.getElementById("fspage-save-button").addEventListener("click",Vn);const t=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!t){Zt();return}this._pageBuilderService.LoadPageWidget(Number(t))}}getHtml(){return window.openSaveWidgetModal=Qn,window.saveWidget=Ti,window.updateWidget=Kn,window.newWidget=qe,window.previewWidget=Mr,window.downloadWebsite=ar,window.moveUp=Ee.moveUp,window.moveDown=Ee.moveDown,window.copyElement=Ee.copyElement,window.editWidget=Ee.editWidget,window.openConvertModal=$r,window.convertToWidget=Ir,window.updatePage=Rn,window.previewPage=hr,window.undoAction=D.undoAction,window.redoAction=D.redoAction,window.saveWidgetToFolderBtn=yr,window.openPromptModal=fo,window.refineAIData=Ln,`
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
    `}}function yi(){H.conceptsSyncArray=[],H.connectionSyncArray=[]}class br{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let t="",a="";return this.props.id==="fs-create-page-modal"?a=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?a=this.editPageModal():this.props.id==="create-project-modal"?(a=this.createNewProjectModal(),t="m-large"):this.props.id==="add-pages-project"&&(a=this.addPagesModalHtml(),t="m-large"),e.innerHTML=`
      <div class="m-content ${t}">
        <div id="closeModalBtn" class="close-modal">
            <img src="./images/icons/cross-close.svg" alt="" class="icon" />
        </div>
        <div class="m-header">
          <span id="modalHeader">${this.props.headerText}</span>
        </div>
        ${a}
      </div>
    `,e.querySelector("#closeModalBtn").addEventListener("click",this.handleClose.bind(this)),e}updateModal(){this.props.isOpen?this.modal.classList.add("open"):this.modal.classList.remove("open")}handleClose(){yi(),this.modal.remove()}createNewPageModal(){return`
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
    `}}function Pt(n){new br(n)}function _a(n){const e=document.getElementById(n);e&&e.remove()}class Un{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new Za,this._pagesTSCCSService=new Ge}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),t=document.getElementById("saved-page-list-container");t&&(t.innerHTML="",t.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-page-button");a?.removeEventListener("click",this.createButtonClickHandler),a?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(r=>{r.removeEventListener("click",this.deletePageButtonClickHandler),r.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(r=>{r.removeEventListener("click",this.editPageButtonClickHandler),r.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(r=>{r.removeEventListener("click",this.duplicatePageButtonClickHandler),r.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(a=>a.remove())}createButtonClickHandler=()=>{Pt({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const t=document.getElementById("fs-create-page-form"),a=t?.elements.namedItem("title");if(!a){console.error("page_title not found");return}const i=async()=>{const o=await this._pagesTSCCSService.generateSlug(a.value);t.elements.namedItem("slug")?.setAttribute("value",o)};a.addEventListener("keyup",i);const s=()=>{a.removeEventListener("keyup",i),document.getElementById("fs-create-page-modal")?.removeEventListener("close",s)};document.getElementById("fs-create-page-modal")?.addEventListener("close",s)};savePageButtonClickHandler=async()=>{const t=document.getElementById("fs-create-page-form").elements;if(!t.title.value){t.title.style.borderColor="red";return}C.infoMessageToast("Creating page...",0);const a=await Tn(t),i=await M();await this._pagesTSCCSService.savePage(a,i?.userId,i?.entityId),await H.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),_a("fs-create-page-modal"),setTimeout(()=>{C.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const t=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;Pt({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:a,slug:i}});const s=document.getElementById("fs-edit-page-form"),o=s?.elements.namedItem("title");if(!o){console.error("page_title not found");return}const r=async()=>{document.getElementById("fs-edit-page-button")?.removeAttribute("disabled");const c=await this._pagesTSCCSService.generateSlug(o.value);s.elements.namedItem("slug")?.setAttribute("value",c)};o.addEventListener("keyup",r);const l=()=>{o.removeEventListener("keyup",r),document.getElementById("fs-edit-page-modal")?.removeEventListener("close",l)};document.getElementById("fs-edit-page-modal")?.addEventListener("close",l),document.getElementById("fs-edit-page-button")?.addEventListener("click",()=>this.updatePageButtonClickHandler(t))};async PageInputElementChangeHandler(e,t){const a=e.target,i=a.name,s=a.value;let o=await this._pagesTSCCSService.checkSlugAvailablity(s);if(i==="slug"&&!o){document.getElementById("fs-update-page-button")?.setAttribute("disabled","true"),a.style.borderColor="red",a.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(a.getAttribute("name"),a.value,Number(t))}updatePageButtonClickHandler=async e=>{const t=document.getElementById("fs-edit-page-form"),a=t.elements.namedItem("title");if(!a.value.trim()){a.style.borderColor="red";return}const i=t.elements;if(!i.title.value){i.title.style.borderColor="red";return}C.infoMessageToast("Renaming page...",2);const s=await Tn(i),o=await M();await this._pagesTSCCSService.renamePage(s,e,o?.userId),await H.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Page renamed successfully");const l=new URLSearchParams(window.location.search).get("page-id");if(e===l){const d=document.getElementById("widget-builder");d.textContent=`Page Builder: ${s?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),_a("fs-edit-page-modal")};deletePageButtonClickHandler=async e=>{const t=e.target.getAttribute("data-id"),a=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${a}" with the slug "${i}"?`)?(C.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(t)),await H.SyncDataOnline(),Qi("/"),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const a=e?.target?.getAttribute("data-id"),s=(await this._pagesTSCCSService.getPageById(Number(a)))?.data?.the_page,o=s?.the_page_title?.data?.the_title?.trim()+" copy",r=s?.the_page_slug?.data?.the_slug?.trim()+"-copy",l=s?.the_page_meta_title?.data?.the_meta_title?.trim(),d=s?.the_page_meta_description?.data?.the_meta_description?.trim(),u=s?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),c=s?.the_page_width?.data?.the_width?.trim(),g=s?.the_page_type?.data?.the_type?.trim(),m=s?.the_page_font_family?.data?.the_font_family?.trim(),p=s?.the_page_font_size?.data?.the_font_size?.trim(),h={title:o,slug:r,meta_title:l,meta_description:d,meta_keywords:u,width:c,type:g,font_family:m,font_size:p},b={};for(const[_,S]of Object.entries(h))S&&(b[_]=S);const T=s?.the_page_body?.id,A=await M(),E=await Te(T,A?.token);let w=await re(E?E.widgetId:T);const y=await this._pagesTSCCSService.savePage(b,A?.userId,A?.entityId);await f.copyPageWidget(y,`widget_${r}`,w),this.initPagesSidebar(),C.successfullToast("Page duplicated successfully")}}async function vr(n){n?.preventDefault();const e=window.location.href,a=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(a))){await Lt("Do you want to save changes?")&&(e.includes("?page-id=")?a?await Rn(n,Number(a)):await Vn(n):a?await Kn(n,Number(a)):await Qn());const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}f.resetWidgetTree();const s=n.target.getAttribute("data-pageId");history.pushState({},"",`?page-id=${s}`);let r=await new Ge().getPageById(Number(s));r?.error&&qe();const l=document.getElementById("midContent"),d=document.getElementById("right-aside"),u={type:Fn.page,data:r.data?.[`the_${W.PAGE_COMP_NAME}`],page_id:s},c=new fi(u),g=new sn(u);d.innerHTML=await g.getHtml(),l.innerHTML="",c.mount(l),Rs.resetNavigationBar()}class wi{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new tn,this._pagesTsccsService=new Ge}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(a=>{let s=a?.data?.[`the_${W.PROJECT_COMP_NAME}`]?.[`the_${W.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
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
          `}catch(e){return console.error("error",e),e?.status===401&&xe(),`
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
    `,document.querySelector("body #app")?.appendChild(t),me("create-project-dialog"),"Create Project Modal"}async renameProjectModal(e,t){document.getElementById("rename-project-dialog")?.remove();const i=document.createElement("dialog");return i.setAttribute("id","rename-project-dialog"),i.classList.add("col-md-3"),i.innerHTML=`
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
    `,document.querySelector("body #app")?.appendChild(i),me("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const t=await this._projectsService.getProjectById(e),a=t?.data?.the_project?.[`the_project_${ie.PROJECT_PAGE_LINKER}`],i=t?.data?.the_project?.the_project_main_page?.[0]?.id;return a?.length?a?.map(o=>{let r=o?.data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const l=i==o.id,d=l?'<span class="material-symbols-outlined home-icon">home</span>':"",u=l?"":`<li class="d-flex align-items-center justify-content-between" 
              onclick="setMainPageHandler(event, ${o.id})" data-projectid="${e}">
                  <span class="px-2">Set as Main Page</span>
                  <span class="material-symbols-outlined">home</span>
                </li>`,c=Number(o.id)+Number(e);return`
            <li class="project-page-item" data-projectid="${e}">
              <router-link class="page_title" href="/?page-id=${o.id}" data-pageid="${o.id}" onclick="pageHandler(event)">
                <span class="material-symbols-outlined">description</span>
                ${r}
              </router-link>
              ${d}
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${c})" title="Options"> more_vert </span>
              <ul class="dropdown-menu" id="dropdown-menu-${c}">
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
          `}catch(t){return console.error("error",t),t?.status===401&&xe(),`
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
      `,document.body.appendChild(t),t.showModal(),t}catch(t){return console.error("Error:",t),""}}}function _r(n,e=[],t=[]){return`
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
                <a href="https://develop-${n}.develop.freeschema.com" class="btn btn-primary">
                  <b><i>https://develop-${n}.develop.freeschema.com</i></b>
                </a>
              </p>

              <div id="custom-domain-view-holder">
              </div>
            </div>

          </div>
        </div>
    </div>
  </div>

    `}const Er=async n=>{if(!n){console.log("Project id is required");return}const e=new tn;let[t,a]=await Promise.all([e.getProjectById(n),Fa(n)]);console.log("project detail",t),console.log("abc menus ",a);const i=t?.data?.the_project?.the_project_main_page?.[0]?.id??0,s=t?.data?.the_project?.the_project_s_page?.map(d=>({id:d.id,name:d?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:d?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:d?.id==i}))??[];console.log("pages",s),document.getElementById("project-setting-dialog")?.remove();const r=document.createElement("dialog");r.setAttribute("id","project-setting-dialog"),r.classList.add("col-md-8"),r.style.flexDirection="column",r.innerHTML=_r(n,s),document.querySelector("body #app")?.appendChild(r),await me("project-setting-dialog"),document.querySelectorAll(".accordion-header").forEach(d=>{d.addEventListener("click",async()=>{d.classList.toggle("active");const u=d.getAttribute("id");if(d.classList.contains("active"))switch(u){case"domain-viewer-btn":const c=document.getElementById("custom-domain-view-holder"),g=await Na(n,"the_project_custom_url");c&&$e(102462726,c,{projectId:n,storeUrl:`https://preview-${n}.develop.freeschema.com`,customUrl:g?.[0]?.data?.the_custom_url||""});break}else switch(u){case"domain-viewer-btn":const c=document.getElementById("custom-domain-view-holder");c&&(c.innerHTML="");break}})}),at(a);const l=document.getElementById("save-menu-items");l?.addEventListener("click",async d=>{l&&(l.disabled=!0),console.log("menus save",a),a=a.map(c=>(delete c.edit,c)),console.log("menus filtered save",a),d.target.disable=!0;const u=await _s(n,a);console.log("menu created",u),d.target.disable=!1,at(a),alert("Updated Menu"),l&&(l.disabled=!1)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",d=>{const u=d.target.closest(".custom-menu-item"),c=u?.querySelector("#nameElem"),g=u?.querySelector("#linkElem"),m=u?.querySelector("#actionElem"),p=u?.querySelector("#authElem");if(!c.value){alert("Menu Name is required");return}if(!g.value&&!m.value){alert("Link or Action is required");return}a.push({name:c.value??"",link:g.value??"",action:m.value??"",page:"",order:a.length,auth:!!p.checked,menus:[]}),c.value="",g.value="",m.value="",p.checked=!1,at(a)}),window.handleMenuAction=(d,u,c,g)=>{if(u=="remove")if(g){const m=document.getElementsByClassName("selected-menu-page");for(let p=0;p<m.length;p++){const h=m[p];Number(h.getAttribute("data-page-id"))==g&&h?.checked&&h.click()}}else a.splice(c,1)[0];else if(u=="edit")a[c].edit=!0;else if(u=="cancel")a[c].edit=!1;else if(u=="update"){a[c].edit=!1;const m=d?.target?.closest("li"),p=m?.querySelector("#menuName").value??"",h=m?.querySelector("#menuLink").value??"",b=m?.querySelector("#menuAction").value??"",T=!!m?.querySelector("#menuAuth").checked;a[c].name=p,a[c].link=h,a[c].action=b,a[c].auth=T}else if(u=="up"){const m=a.splice(c,1)[0];a.splice(c-1,0,m),a=a.map((p,h)=>({...p,order:h}))}else if(u=="down"){const m=a.splice(c,1)[0];a.splice(c+1,0,m),a=a.map((p,h)=>({...p,order:h}))}else console.warn("unacceptable action ",u);at(a)},document.querySelectorAll(".selected-menu-page").forEach(d=>{d.addEventListener("change",u=>{console.log("e.target.changed",u.currentTarget.checked);const c=parseInt(u.currentTarget.getAttribute("data-page-id"));if(u.currentTarget.checked){const g=s.find(m=>m.id==c);console.log("pages",g,s),a.push({name:g.name??"",link:g.slug??"",action:"",page:g.id??"",order:a.length,auth:!1,menus:[]})}else{const g=(m,p)=>{for(let h=0;h<m.length;h++){const b=m[h];b.menus&&b.menus.length>0&&(b.menus=g(b.menus,p))}return m.filter(h=>h.page!=p)};a=g(a,c)}at(a)})})};class bi{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new wi,this._projectsTSCCSService=new tn,this._pagesTSCCSService=new Ge}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),t=document.getElementById("saved-project-list-container");t&&(t.innerHTML="",t.insertAdjacentHTML("beforeend",e));const a=document.getElementById("fs-create-project-button");a?.removeEventListener("click",this.createProjectHandler),a?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(r=>{r.removeEventListener("click",this.getProjectPagesListHandler),r.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(r=>{r.removeEventListener("click",this.addPageToProjectHandler),r.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(r=>{r.removeEventListener("click",this.deleteProjectHandler),r.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=cr,window.showProjectSetting=Er,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{Pt({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,t)=>{try{const s=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",s,t),await H.SyncDataOnline(),this.initProjectsSidebar()}catch(a){console.error("Failed to rename project:",a)}};getProjectPagesListHandler=async e=>{const t=e.target.dataset.projectid,a=e.target.parentElement.querySelector(".project-pages-list");if(a){if(!a.classList.contains("d-none")){a.classList.add("d-none");return}a.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,a.classList.remove("d-none");const i=await this._projectsHTMLService.getProjectPagesListHTML(t);a.innerHTML=i}};deleteProjectHandler=async e=>{try{let t=e.target.dataset.projectid;t||(t=e.target.parentElement.dataset.projectid),await Lt("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(t),await H.SyncDataOnline(),C.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(t){console.error("Failed to delete project:",t),C.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,t)=>{try{let a=e.target.parentElement.parentElement.dataset.projectid;await Lt("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(a,t),await H.SyncDataOnline(),this.initProjectsSidebar())}catch(a){console.error("Failed to delete page from project:",a)}};setMainPageHandler=async(e,t)=>{e.preventDefault(),e.stopPropagation();try{let a=e.target.closest(".project-page-item").dataset.projectid;C.infoMessageToast("Setting page as main page...",0);const i=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(a,t),await H.SyncDataOnline();const s=await this._projectsHTMLService.getProjectPagesListHTML(a),o=e.target.closest(".project-pages-list");o&&(o.innerHTML=s,o.classList.remove("d-none")),i?.remove(),C.successfullToast("Main page set successfully!")}catch(a){console.error("Failed to set main page:",a),document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),Pt({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const t=e.target.previousElementSibling.dataset.projectid,i=(await this._projectsTSCCSService.getProjectById(t))?.data?.the_project?.[`the_project_${ie.PROJECT_PAGE_LINKER}`];let s=i?i.map(r=>({id:r.id,title:r?.data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const o=document.getElementById("add-pages-project");await this.addPageToProject(o,!1,t,s)}catch(t){console.error("Failed to add page to project:",t)}};addPageToProject=async(e,t,a,i=[])=>{try{const s=await this._pagesTSCCSService.getAllPages(),o=s?s.map(m=>({id:m.id,title:m?.data?.[`the_${W.PAGE_COMP_NAME}`]?.[`the_${W.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const r=e.querySelector("#selectedItems"),l=e.querySelector("#options"),d=(m="")=>{if(!o.length){l.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let p=o.filter(h=>h.title.toLowerCase().includes(m.toLowerCase()));u(),l.innerHTML=p.length?p.map(h=>`
            <li class="option" data-value="${h.id}">
              <input type="checkbox" id="page-${h.id}" ${i?.some(b=>b.id.toString()===h.id.toString())?"checked":""} />
              <span>${h.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},u=()=>{i&&i.length?r.innerHTML=i.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):r.innerHTML="<span>No pages selected!</span>"},c=(m,p)=>{i.push({id:m,title:p}),u()},g=m=>{i=i.filter(p=>p.id.toString()!==m.toString()),u()};r.addEventListener("click",m=>{const p=m.target;if(p.classList.contains("remove-item")){const h=p.closest(".selected-page");h&&g(h.dataset.value)}}),l.addEventListener("click",m=>{const p=m.target.closest(".option");if(!p)return;const h=p.querySelector("input[type='checkbox']");h&&(m.target!==h&&(h.checked=!h.checked),h.checked?c(p.dataset.value,p.querySelector("span").textContent.trim()):g(p.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(t&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){C.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),p=e.querySelector("#closeModal");m.disabled=!0,p.disabled=!0;const h=m.textContent;m.textContent="Adding...",C.infoMessageToast("Adding pages to project...",0);try{const b=i.map(y=>Number(y.id));if(!b.length){document.querySelector(".infoMessageToast")?.remove(),C.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}if(t){this.addPageToProjectHandler();const _=document.getElementById("create-project-form").elements,S=Tn(_),v=await M(),L=await this._projectsTSCCSService.createProject(S,v?.userId,v?.entityId);await H.SyncDataOnline(),a=(await ee(L.ghostId)).id}if(!a){document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Project ID not found."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}await this._projectsTSCCSService.addPagesToProject(a,b);const T=await this._projectsHTMLService.getProjectPagesListHTML(a),E=document.getElementById(`dropdown-menu-${a}`)?.nextElementSibling;E&&(E.innerHTML=T,E.classList.remove("d-none")),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Failed to add pages to prjects"),m.disabled=!1,p.disabled=!1,p.textContent=h}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const p=m.target;d(p.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{d()}),u()}catch(s){console.error("Failed to add page to project:",s)}}}const vt=(()=>{const n=()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})};return{toggle:o=>{const r=o.target,l=r?.dataset?.id;if(r.classList.contains("activeNavigationIcon")){n();return}if(l){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const c=document.getElementById(l);document.querySelector(`[data-id='${l}']`)?.classList.add("activeNavigationIcon"),c?.classList.add("navActive"),l=="fs-all-pages-list"&&new Un().initPagesSidebar(),l=="fs-all-projects-list"&&new bi().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(l=>{l.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(l=>{l.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(l=>{l.remove()})},checkForActiveNavigation:()=>{const o=document.querySelector(".activeNavigationIcon");if(o){const r=o.dataset?.id||"";document.getElementById(r)?.classList.remove("navActive")}},resetNavigationBar:n,disableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="none",o.style.pointerEvents="none",o.style.opacity="0"},enableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="block",o.style.pointerEvents="all",o.style.opacity="1"}}})(),dt=(()=>{const n=()=>{const i=document.querySelector("#profileDropdown");if(i.style.display&&i.style.display=="block"){e();return}i?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:n,closeUserActionModel:e,disableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="none",i.style.pointerEvents="none",i.style.opacity="0"},enableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="flex",i.style.pointerEvents="all",i.style.opacity="1"}}})(),C=(()=>{let n=0;const e=()=>{const l=document.createElement("span");return l.innerText="close",l.classList.add("material-symbols-outlined"),l.classList.add("crossButtonToast"),l.addEventListener("click",d=>{d.target instanceof HTMLElement&&d.target.parentNode instanceof HTMLElement&&console.log(d.target.parentNode.remove())}),l},t=l=>{const d=document.querySelector("#toasterContainer");d.style.display="flex";const u=document.createElement("div");u.classList.add("successFullToast");const c=document.createElement("span");c.classList.add("material-symbols-outlined"),c.innerText="check_circle";const g=document.createElement("span");g.innerText=l,u.appendChild(c),u.appendChild(g),u.appendChild(e()),d.appendChild(u),n=n+.5,s(u)},a=(l,d=1)=>{n=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("infoMessageToast","bg-info");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="info";const m=document.createElement("span");m.innerText=l,c.appendChild(g),c.appendChild(m),c.appendChild(e()),u.appendChild(c),d!=0&&(n=n+.5+(d||0),s(c))},i=(l,d)=>{n=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("failureToast");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="error";const m=document.createElement("span");m.innerText=l,c.appendChild(g),c.appendChild(m),c.appendChild(e()),u.appendChild(c),n=n+.5+(d||0),s(c)},s=l=>{l.style.animation=`animateToastMessage ${2+n}s forwards`,l.addEventListener("animationend",()=>{l.remove();const d=document.querySelector("#toasterContainer");d.innerHTML||(n=0,d.style.display="none")}),l.addEventListener("mouseenter",()=>{o()}),l.addEventListener("mouseleave",()=>{r()})},o=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="paused"})},r=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="running"})};return{successfullToast:t,infoMessageToast:a,errorToast:i}})();async function je(){const n=await M(),e=n?.entityId,t=n?.token,a=n?.userId,i=n?.userConcept,o=(await ee(e)).typeCharacter;let r=!1,l;const d=new P;if(d.conceptIds=[e],d.selectors=["the_entity_user"],d.outputFormat=de,d.inpage=100,await ce(d,t)?.subscribe(g=>{l=g}),l?.[0]?.data?.the_entity?.the_entity_user?.id===i&&(r=(await ee(i))?.userId===a),!r||!o||o!=="the_entity"||!t||t.trim()===""||!a)throw setTimeout(()=>xe(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function Tr(n){try{const e=await Pe(n,"the_entity_s_widget",!0);e.length?await Me(e[0].id):C.errorToast("already deleted")}catch(e){console.error(e)}}async function zn(n,e="Error"){console.error(n);const t=n;t&&(C.errorToast(t?.message?t.message:e),t.status===401&&xe())}let he=[],We=Nn;async function Jn(n){const e=document.getElementById("selected_attr_list"),t=document.querySelector(".row.attribute_single");he=[],We=Nn,e&&(e.innerHTML=""),t?.remove(),await be(n),n==="update-element-dialog"&&document.getElementById(n)?.remove()}async function wc(n,e){if(n.preventDefault(),!(await _e.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(n.target),i=Object.fromEntries(a),s=n.target.querySelector("[name='name']"),o=n.target.querySelector("[name='tag']");let r=!0;if(i?.name?.trim()?s.style.border="":(r=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),i?.tag?.trim()?o.style.border="":(r=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),!r)return;const d=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');d.textContent="Creating...";const u=n?.target;for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!0;const c=await vi(a,null);for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!1;await be(e);const g=await an();if(c){const m=document.getElementById("created-elements");m?!g||g.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=g||"":console.error("Widget list container not found in the DOM.")}return c}async function vi(n,e){const t=Object.fromEntries(n);delete t.attributes;const i=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let s=[];if(i.forEach(o=>{const r=o?.textContent?.split(" "),l=r[0],d=r[1].substr(1,r[1].length-7);let u="";switch(l){case"method":u="get,post,dialog";break;case"target":u="_blank,_self,_parent,_top";break;case"type":t?.tag==="button"?u="button,submit,reset":t?.tag==="input"&&(u="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":u="soft,hard";break}s.push({name:l,type:d,value:u})}),s=[...En,...s],e){const o=await na(e),r=o?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,l=new Set(En.map(m=>m.name)),d=o?.attributes?.filter(m=>m?.division!=="inline"&&!l.has(m?.name)&&m?.name!=="elementContent"),u=new Set(he.map(m=>m.name)),c=d?.filter(m=>!u.has(m?.name));if(c?.length){const m=await Promise.all(c?.map(async p=>await Le(p?.id)));console.log("deletedResponse ->",m)}let g=[{the_element_name:{name:t?.name}},{the_element_tag:{tag:t?.tag}},{the_element_void:{void:t?.void}},{the_element_icon:{icon:t?.icon.toString()}},{the_element_default:{default:t?.default}},{the_element_division:{division:t?.division}},{the_element_s_attribute:he}];return await Promise.all(g.map(async m=>await Promise.all(Object.entries(m).map(async([p,h])=>{const b=Object.keys(h)[0],T=h[b]||"";if(p==="the_element_s_attribute"){const A=await J(e);if(h?.length){const E=h.filter(w=>!w?.id);await Promise.all(E.map(async w=>{const y=await V("attribute",999,w);return await O(A,y,"s_attribute")}))}}else await Xe(e,p,b,T,999);if(p==="the_element_default"&&b==="default"&&r){const E=(await M())?.userId;await Xe(r,"the_attribute_value","value",T,E)}return"x"})))),await H.SyncDataOnline(),C.successfullToast("The element updated successfully"),e}else{const o=s;t?.void&&o.unshift({name:"elementContent",type:"string",value:""});const r=await V("element",999,t);return await Promise.all(o.map(async l=>{const d=await V("attribute",999,l);return await O(r,d,"s_attribute")})),await H.SyncDataOnline(),C.successfullToast("The element created successfully"),r}}function Sr(){const n=document.querySelectorAll(".attribute_single");n?.length&&n.forEach(i=>{i?.remove()});let e=String(Date.now());const t=Ar(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",t)}function _i(n){document.getElementById(n)?.remove()}async function Lr(){const n=document.getElementById("select_the_attribute");let e=We.filter(a=>a?.name==n?.value)[0];We=We.filter(a=>a?.name!=n?.value),he.push(e);const t=n.closest(".attribute_single");t?.id&&_i(t.id),Gn([])}function Cr(n){let e=he.filter(t=>t.name==n)[0];he=he.filter(t=>t.name!=n),We.push(e),Fs(We,"name","string"),Gn([])}function Gn(n){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(he.length>0)he.forEach(a=>{a.name!=="id"&&a.name!=="className"&&(e+=`<li>${a.name} (${a.type})`,e+=`<a onclick="removeSelectedAttribute('${a.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const a=n?.filter(s=>s?.division!=="inline"&&s.name!=="id"&&s.name!=="className"&&s.name!=="elementContent");he=a;const i=new Set(he.map(s=>s.name));We=We.filter(s=>!i?.has(s?.name)),a.map(function(s){e+=`<li>${s.name} (${s.type}) `,e+=`<a onclick="removeSelectedAttribute('${s.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const t=document.getElementById("element_attributes_entry");t&&(t.innerHTML=e)}function Ar(n){let e='<select id="select_the_attribute" class="form-select">';return We.forEach(t=>{e+=`<option value="${t?.name}">${t?.name}</option>`}),e+="</select>",`
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
  `}async function Wr(n,e){if(n.preventDefault(),!(await _e.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const a=new FormData(n.target),i=Object.fromEntries(a);console.log(i,"update formValues");const s=await vi(a,e);await Jn("update-element-dialog");const o=await an();if(s){const r=document.getElementById("created-elements");r?!o||o.trim()===""?r.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:r.innerHTML=o||"":console.error("Widget list container not found in the DOM.")}return s}class xr{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const t=await na(e);this.singleElement=t,this.createElemenModaltHTML=this.getHtml(),t&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await Gn(this.singleElement.attributes))}getHtml(){return window.updateNewElement=Wr,window.closeElementModal=Jn,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
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
      </dialog>`}}class kr{createElemenModaltHTML;constructor(){window._dragService=Vo,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=Sr,window.cancelAttributeRow=_i,window.addAttribute=Lr,window.removeSelectedAttribute=Cr,window.closeElementModal=Jn,`
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
    `}}async function me(n){document.getElementById(n).showModal()}async function be(n){const e=document.getElementById(n);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function Ei(n,e){n?.stopPropagation();const t=document.getElementById(`menu-${e}`),a=t?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),t&&!a&&t.classList.add("show")}async function bc(n){new kr,await me(n)}async function vc(n,e,t){n.stopPropagation(),console.log("modalId",e),Ei(n,Number(t)),new xr(t)}async function _c(n,e){Ei(n,e),confirm("Are you sure you want to delete the element?")&&(await Le(e),C.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const a=await an(),i=document.getElementById("created-elements");i?!a||a.trim()===""?i.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:i.innerHTML=a||"":console.error("Elements list container not found in the DOM.")}async function Qn(){Ct(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(e),me("save-widget-dialog"),new Promise((t,a)=>{const i=e.querySelector("#save-widget-form");i.onsubmit=async o=>{o.preventDefault();try{const r=new FormData(i),d=Object.fromEntries(r).widgetName,u=o.target;if(!d?.trim()){const c=u.querySelector("#widgetName");c?.focus(),c.style.border="2px solid red",c.style.outline="none",c.addEventListener("input",()=>{c.style.border=""});return}await Ti(o,d),be("save-widget-dialog"),t("Widget saved successfully")}catch(r){console.error("Error saving widget:",r),a("Error saving widget")}};const s=e.querySelector("button[type='button']");s.onclick=()=>{be("save-widget-dialog"),t("Widget saving canceled")}})}async function Ti(n,e){n.preventDefault();try{C.infoMessageToast("Saving Widget...",0),await je();const t=document.getElementById("save-widget-dialog"),a=t?.querySelector('button[type="submit"]');a.textContent="Saving";const i=t?.querySelector("input"),s=t?.querySelectorAll("button");s&&s.forEach(c=>{c.disabled=!0}),i&&(i.disabled=!0),await nt(),R.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async c=>{if(c.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[c.id]){const g=await Ce(c,"div.mftsccs-marking-element");f.editedWidgets[c.id].html=g.innerHTML}});const r=await Si();f.staticWidgetTree.html=r;const l=await f.saveWidget(e),d=await ee(l.id);be("save-widget-dialog"),Kt(),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Widget saved successfully!"),await q.renderSavedWidgets(),Ue(n,d.id);return}catch(t){document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Error in saving widget"),zn(t,"There is an error on saving widget")}}async function Kn(n,e,t){const a=document.getElementById("update-publish-widget-btn");try{const i=document.getElementById("update-widget-btn");a&&a.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating...",C.infoMessageToast("Updating Widget...",0)),await nt(),R.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async d=>{if(d.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[d.id]){const u=await Ce(d,"div.mftsccs-marking-element");f.editedWidgets[d.id].html=u.innerHTML}});const o=await Br();f.staticWidgetTree.html=o,await f.updateWidget(),Kt(),ye(),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Widget Updated Successfully"),await q.renderSavedWidgets(),await q.renderBoomWidgets();const l=document.getElementById("widget-builder");l.textContent="Widget Builder Panel",await Ue(n,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),t&&t===!0&&await f.publish();return}catch(i){document.querySelector(".infoMessageToast")?.remove();const o=document.getElementById("update-widget-btn");o&&(o.classList.remove("disabled"),o.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),i instanceof Error&&C.errorToast(i.message)}finally{a&&a.classList.remove("disabled")}}async function qe(n,e){const t=document.querySelector(".widgetStyle");t.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(d=>{d.textContent=""});const i=document.getElementById("publish-widget");i&&(i.style.display="none",i.disabled=!0);const s=document.querySelector(".content-target"),o=window.location.href,l=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(s){let d=!1;d=await f.hasWidgetChanged(Number(l));const c=document.getElementById("preview-btn").classList.value.includes("active");if((n?.target?.id==="preview-btn"||n?.target?.id==="save-widget-form"||n?.target?.id==="update-widget-btn"||n?.target?.id==="form-folder-modal"||n?.target?.id==="data-file-id")&&(d=!1),c&&(d=!1),d&&!e){await Lt("Do you want to save changes?")&&(o.includes("?page-id=")?l?await Rn(n,Number(l)):await Vn(n):l?await Kn(n,Number(l)):await Qn()),Kt();const p=document.getElementById("preview-btn");p.classList.remove("active"),p.removeAttribute("data-widgetid")}await po()}s.innerHTML="",yi(),n&&!e&&window.history.pushState({},"","/")}let pn="";async function Mr(n){const e=document.getElementById("preview-btn"),t=e.classList.value.includes("active");let a=n.target.getAttribute("data-widgetid");a&&history.pushState({},"",`?widget-id=${a}`);const i=document.querySelector(".content-target"),s=document.querySelector(".midContent .content"),o={...f.widgetTree},r=document.getElementById("undo-btn"),l=document.getElementById("redo-btn"),d=document.getElementById("ai-prompt-btn"),u=document.getElementById("widget-prompt-modal"),c=document.getElementById("widget-prompt-tab"),g=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(t){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,d.style.display="flex",pn&&pn!=="none"?(c.classList.add("d-none"),u.classList.remove("d-none"),u.classList.add("d-flex")):(c?.classList.remove("d-none"),u&&u.classList.add("d-none")),e.classList.remove("active"),r.classList.remove("d-none"),l.classList.remove("d-none"),m&&(m.style.display="block"),g&&(g.style.display="none"),i&&(i.style.width="100%",i.style.maxWidth="",i.style.margin="0 auto",i.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),i.classList.add("mode-desktop"));const p=Hn(),h=await Se(f.widgetTree,p,!0,void 0,!0);te(f.widgetTree,!1,h,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),s.classList.remove("preview"),ue(),ye(),dt.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,d.style.display="none",u&&(pn=window.getComputedStyle(u).display,u.classList.add("d-none")),c&&c.classList.add("d-none");const p=document.getElementById("select-box"),h=document.getElementById("element-info");p.style.display="none",h.style.display="none",r.classList.add("d-none"),l.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none");const b=await Se(f.widgetTree,i,!0,void 0,!1);te(o,!1,b),document.getElementById("column-left").classList.add("d-none");const A=document.createElement("script");A.setAttribute("type","text/javascript"),A.innerHTML=o?.js,i.appendChild(A),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),dt.disableHeader(),ct.closeCodeView(),s.classList.add("preview");const y=document.querySelector("header.wico_top-header");y.style.display="none"}return"PREVIEW WIDGET"}async function Ce(n,e){return n.querySelectorAll(e).forEach(a=>{for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.remove()}),n}async function Ir(n,e){n.preventDefault();try{const t=new FormData(n.target),i=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');i.textContent="Converting...";const s=n.target;for(let o=0,r=s.length;o<r;++o)s[o].disabled=!0;await Pr(t);for(let o=0,r=s.length;o<r;++o)s[o].disabled=!1;return await be(e),"completed conversion"}catch{C.errorToast("html conversion failed"),await be(e)}}async function Pr(n){const e=Object.fromEntries(n),t=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,a=await Is(t,e?.cssCode?.toString(),e?.jsCode.toString()),s=(await M())?.token,r=(await ks(a?.id,s))?.id,{html:l,css:d,js:u}=await Cs(r,s);await Ot(r);const c=document.querySelector(".content-target");c.innerHTML=l;const g=document.querySelector('.cm-content[data-language="css"]');g.textContent=d;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=u,"converted widget"}async function $r(n){return new pr().init(),me(n),"opened convert HTML to Widget!"}async function et(n,e){return new Promise(async(t,a)=>{try{let i=new z;i.composition=n,i.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function"],i.inpage=100;let s=new z;s.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],s.inpage=100;const r=await we([i,s],e);t(r)}catch(i){console.error("error",i),i?.status===401&&xe(),a(i)}})}async function Br(){R.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target"),e=n.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(o=>{o.classList.replace("edited-widget-container","added-widget-container")});const t=await Ce(n,"div.mftsccs-marking-element");return n?.querySelector("#widget-details")?.remove(),(n?.querySelectorAll(".mftsccs-marking-rendered")).forEach(o=>{o.remove()}),t.innerHTML.trim()}async function Si(){R.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target"),e=await Ce(n,"div.mftsccs-marking-element");return n?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function Ye(){const n=document.querySelector(".content-target");n?.querySelector("#widget-details")?.remove();const t=await Ce(n,"div.mftsccs-marking-element");return n?.querySelector(".widget_selected")?.classList.remove("widget_selected"),t.innerHTML.trim()}async function pt(){R.staticElement?.removeAttribute("draggable");const n=document.querySelector(".content-target")?.cloneNode(!0);n?.querySelector("#widget-details")?.remove();const a=(await Ce(n,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),a}async function $t(n){R.staticElement?.removeAttribute("draggable");const e=document.getElementById(n)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const i=(await Ce(e,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),i}const jr=["image/jpeg","image/jpg","image/png","image/webp"],Nr=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],Li=async n=>{try{const e=new FormData;let t;if(Nr.includes(n.type))e.append("file",n,n.name),t=await Hr(e);else if(jr.includes(n.type))e.append("image",n,n.name),t=await Dr(e);else return{message:"Invalid File Format",success:!1};return t?.data?{message:"Upload Success",success:!0,url:t.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},Dr=async(n,e="")=>{try{const t=await fetch(G.boomURL+"/api/Image/UploadImage",{method:"POST",body:n,headers:{Authorization:`Bearer ${e}`}});if(!t.ok){const a=t.headers.get("content-type");a&&a.includes("text/plain")&&console.info(t?.text());const i=await t?.text();return console.error(`${t.status} ${i}`),null}return await t.json()}catch(t){return console.error(t),null}},Hr=async(n,e="")=>{try{const t=await fetch(G.boomURL+"/api/Image/UploadFile",{method:"POST",body:n,headers:{Authorization:`Bearer ${e}`}});if(!t.ok){const a=t.headers.get("content-type");a&&a.includes("text/plain")&&console.info(t.text());const i=await t.text();return console.error(`${t.status} ${i}`),null}return await t.json()}catch(t){return console.error(t),null}};async function qr(n=""){try{const e=await M();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const t=await Da("public_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_public_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let s=new P;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new P;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let r=new P;r.typeConnection="the_public_widget_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,s,o];let l=new P;if(l.conceptIds=[t.id],l.outputFormat=de,l.name="top",l.freeschemaQueries=[r],n!=""){let d=new Fe;d.name="filterName",d.search=n,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let u=new Fe;u.name="filterPublicName",u.search=n,u.type="the_public_name",u.operateon="widgetPName",u.logicoperator="like",l.filters=[d,u],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{ce(l,"").subscribe(u=>{d(u)})})}catch(e){throw e}}async function Or(n=""){try{const e=await M();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const t=await Da("folder_widget","",!1,e.userId,4,999);let a=new P;a.typeConnection="the_widget_folder_name",a.name="widgetPName";let i=new P;i.typeConnection="the_widget_name",i.name="widgetName";let s=new P;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new P;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let r=new P;r.typeConnection="the_folder_s_widget",r.selectors=["the_widget_timestamp","the_widget_version"],r.name="widgetLevel",r.inpage=10,r.limit=!0,r.freeschemaQueries=[a,i,s,o];let l=new P;if(l.conceptIds=[t.id],l.outputFormat=de,l.name="top",l.freeschemaQueries=[r],n!=""){let d=new Fe;d.name="filterName",d.search=n,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let u=new Fe;u.name="filterFolderName",u.search=n,u.type="the_folder_name",u.operateon="widgetPName",u.logicoperator="like",l.filters=[d,u],l.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{ce(l,"").subscribe(u=>{d(u)})})}catch(e){throw e}}class tt{static staticElementList}async function Fr(n,e){const t=n?.target?.value,a=await M(),i=a?.userId,s=a?.token,o=await ee(e),d=(await et(e,s))?.data?.the_widget?.the_widget_before_render?.[0]?.id;d&&await Le(d);const u=await X("before_render",t,!1,i,4,999);await O(o,u,"before_render"),await H.SyncDataOnline(),new fi().before_render()}async function Vr(n,e){console.log("updateWidgetUpdate event",n),console.log("widgetId",e)}async function Rr(n,e){const t=n?.target?.value,a=await M(),i=a?.userId,s=a?.token,o=await ee(e),d=(await et(e,s))?.data?.the_widget?.the_widget_after_render?.[0]?.id;d&&await Le(d);const u=await X("after_render",t,!1,i,4,999);await O(o,u,"after_render"),await H.SyncDataOnline();const g=document.getElementById("mountInput")?.value,p=document.getElementById("mountChildWidgetsInput")?.value,h=new yt;h.componentDidMountFunction=g,h.addEventFunction=t,h.mountChildWidgetsFunction=p;const b=document.querySelector(".content-target"),T=await h.mount(b);console.log("appContentHTML",T)}async function Ur(n,e){const t=n?.target?.value,a=await M(),i=a?.userId,s=a?.token,o=await ee(e),d=(await et(e,s))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;d&&await Le(d);const u=await X("mount_child",t,!1,i,4,999);await O(o,u,"mount_child"),await H.SyncDataOnline()}class zr{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=Kr,`
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
    `}}class Jr{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return`
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
    `}}async function Gr(n,e){const t=document.getElementById("documentation-view");await $e(G.documentation_preview_widget,t,{currentWidgetId:e})}let ut,hn="",Wn,xn;async function Qr(n,e){Wn=n,e==="preview"?new Jr:new zr;const t=new P;t.typeConnection="the_widget_documentation",t.name="documentationText",t.selectors=["the_documentation_text"];const a=new P;a.typeConnection="the_widget_s_documentation",a.name="documentationBlank",a.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const i=new P;i.typeConnection="the_documentation_s_json_list",i.name="documentationJSON",i.selectors=["the_json_list_key","the_json_list_value"],a.freeschemaQueries=[i];const s=new P;s.conceptIds=[Wn],s.freeschemaQueries=[t,a],s.inpage=100,s.outputFormat=de,await ce(s,"").subscribe(async o=>{const r=o?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";r&&(hn=r);const l=o?.[0]?.data?.the_widget?.the_widget_s_documentation;l?.length&&(hn=l?.map(u=>{const c=u?.data?.the_documentation,g=c?.the_documentation_type?.data?.the_type,m=c?.the_documentation_content?.data?.the_content,p=c?.the_documentation_creator_email?.data?.the_creator_email,h=c?.the_documentation_doc_title?.data?.the_doc_title,b=c?.the_documentation_method?.data?.the_method,T=c?.the_documentation_method_url?.data?.the_method_url,A=c?.the_documentation_bearer_token?.data?.the_bearer_token,E=c?.the_documentation_username?.data?.the_username,w=c?.the_documentation_password?.data?.the_password,y=c?.the_documentation_auth_type?.data?.the_auth_type,_=c?.the_documentation_s_json_list,S=c?.the_documentation_api_script?.data?.the_api_script,v=c?.the_documentation_api_body?.data?.the_api_body,L=c?.the_documentation_language?.data?.the_language,x=c?.the_documentation_return?.data?.the_return,k=c?.the_documentation_code_editor?.data?.the_code_editor,I=c?.the_documentation_s_doc_url,$=c?.the_documentation_s_image_url,B=c?.the_documentation_s_video_link;let j={type:g,content:m,creatorEmail:p,title:h};if(g==="blank")j={...j};else if(g==="api"){const F=[];_?.length&&_?.forEach(Y=>{F.push({key:Y?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:Y?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),j={...j,method:b,methodURL:T,authType:y,username:E,password:w,bearerToken:A,json:F,script:S,body:v}}else g==="function"&&(j={...j,language:L,return:x,codeEditor:k});const U=[],ne=[],Z=[];return $?.length&&$?.forEach(F=>{U.push(F?.data?.the_image_url)}),B?.length&&B?.forEach(F=>{ne.push(F?.data?.the_video_link)}),I?.length&&I?.forEach(F=>{Z.push(F.data?.the_doc_url)}),j={...j,imageList:U,linkList:Z,videoList:ne},j})),xn=o?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&Zr(r)}),e==="preview"?(await me("widget-documentation-preview-modal"),Gr(hn,n)):await me("widget-documentation-modal")}async function Kr(){if(ut){const n=ut.getData(),e=await J(Wn),a=(await M())?.userId;if(xn)await Xe(xn,"the_documentation_text","text",n,a),await H.SyncDataOnline();else{const i=await V("documentation",a,{text:n});await K(e,i,"documentation"),await H.SyncDataOnline()}C.successfullToast("Documentation is saved."),ut.setData(n)}else console.error("Editor not initialized"),C.errorToast("Documentation couldn't saved.")}function Zr(n){const e=document.querySelector("#documentation-editor");e&&gs.create(e,{licenseKey:"GPL"}).then(t=>{ut=t;const a=n;ut.setData(a)}).catch(t=>{console.error("Error initializing CKEditor:",t)})}class Yr{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",t=>{if(t.target.matches(".btn-tour")){const a=t.target.dataset.tourStatus;this.startTour(a)}})}startTour(e){const t=new cs.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),a=[{classes:"back-button",text:"Back",action:t.back},{classes:"next-button",text:"Next",action:t.next}];t.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:t.complete},{text:"Next",classes:"next-button",action:()=>{t.next()}}]}),t.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".wico_header-section",on:"bottom-start"},buttons:a}),t.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:a}),t.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:a}),t.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const i=document.querySelector(".accordion-widget-properties a"),s=new Event("click",{bubbles:!0,cancelable:!0});return i.dispatchEvent(s),".right-aside"},on:"left"},buttons:a}),t.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:a}),t.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:a}),t.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:t.back},{classes:"next-button",text:"Finish",action:()=>{t.complete(),e||this.updateTourStatus()}}]}),t.start()}async updateTourStatus(){this.closeTour();const e=await M(),t=e?.userId,a=e?.entityId,i=await J(a),s=new Pa;try{await s.initialize();const o=await s.MakeTheInstanceConceptLocal("the_tour_status","true",!1,t,4,999);await s.CreateConnectionBetweenEntityLocal(i,o,"tour_status"),await s.commitTransaction()}catch{s.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}class Xr{_layoutWidgetHTMLService=new ui;_pagesHTMLService=new Za;_projectsService=new bi;_projectsHTMLService=new wi;_pagesService=new Un;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await _e.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,t={openRenameWidgetModal:cl,renameWidget:Ai,loadWidget:Ue,deleteWidget:il,postWidget:sl,saveFromPublic:q.saveFromPublic,removeFromTemplate:q.removeFromTemplate,downloadPage:rr,downloadWebpage:ir,updateWidgetMount:Fr,updateWidgetUpdate:Vr,updateWidgetEvents:Rr,updateMountChildWidgets:Ur,navbarFunctions:vt,DeleteConceptById:Le,uploadAssetsFile:dl,removeAssetFile:ul,clearSearch:ml,toggleClearButton:Wi,toggleDropdown:el,openDocumentationModal:Qr,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:a=>this.searchWidgets(a,"#saved-widget-list-container"),searchElements:a=>this.searchWidgets(a,"#created-elements"),searchPublicWidgets:a=>this.searchPublicWidgets(a),searchPages:a=>this.searchWidgets(a,"#saved-page-list-container"),searchProjects:a=>this.searchWidgets(a,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:a=>this.searchWidgets(a),switchLayoutType:a=>{const i=a.target,s=document.getElementById("fslayout-template-container"),o=document.getElementById("fslayout-list-container");i.value==="custom"?(o?.style.setProperty("display","flex"),s?.style.setProperty("display","none")):(o?.style.setProperty("display","none"),s?.style.setProperty("display","flex"))}};Object.assign(e,t)}async setupAssetListener(){const e=await M(),t=new P;t.typeConnection="the_entity_s_asset",t.name="itemname";const a=new P;a.conceptIds=[e.entityId],a.freeschemaQueries=[t],a.outputFormat=de,a.inpage=100,ce(a,"").subscribe(i=>{const s=i?.[0]?.data?.the_entity?.the_entity_s_asset,o=this.generateAssetHTML(s),r=document.getElementById("assets-library-list-container");r&&(r.innerHTML=o)})}generateAssetHTML(e){return e?.length?e.map(t=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${t.id})" /></span>
                    <img class="asset-img" src="${t?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${t?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,t){t||(t=`#${e.target?.dataset?.id}`||"");const i=e.target.value.toLowerCase();document.querySelectorAll(`${t} li`).forEach(o=>{const r=(o.textContent||"").toLowerCase();o.style.display=r.includes(i)?"":"none"})}searchPublicWidgets(e){const a=e.target.value.toLowerCase();Mn(a).then(i=>{Sn.navbar.setPublicWidgets(i),this.updatePopupMenu("publicWidgets",i)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        </svg>`,text:"Community",link:"/Community"}]},t=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(t),an().then(a=>{this._elemensHtml=a;const i=document.getElementById("created-elements");i&&(i.innerHTML=a||"")}),kn().then(a=>{this._savedWidgetsHtml=a;const i=document.getElementById("saved-widget-list-container");i&&(i.innerHTML=a||"")}),Mn().then(a=>{this._publicWidgetsHtml=a;const i=document.getElementById("public-widget-list-container");i&&(i.innerHTML=a||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const t=document.createElement("nav");t.className="sidebar sidebar-collapsed";let a=!0;const i=()=>{a=!a,t.classList.toggle("sidebar-collapsed",a),a||(this.removeSubSidebar(),this.removeActiveClass())};return t.appendChild(this.createSidebarHeader(i)),t.appendChild(this.createSidebarMenu(e.mainItems)),t.appendChild(this.createSection("Widgets")),t.appendChild(this.createSidebarMenu(e.widgetItems)),t.appendChild(this.createSection("Library")),t.appendChild(this.createSidebarMenu(e.libraryItems)),t.appendChild(this.createSection("Configuration")),t.appendChild(this.createSidebarMenu(e.configurationItems)),t}createSidebarHeader(e){const t=document.createElement("div");return t.className="menu-toggle",t.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,t.addEventListener("click",e),t}createSidebarMenu(e){const t=document.createElement("div");return t.className="sidebar-menu",e?.forEach(a=>t.appendChild(this.createMenuItem(a))),t}createMenuItem(e){const t=document.createElement("div");return t.id=e.id,t.onclick=a=>this.handleNavItemClick(a),e.id==="widget-tour"?(t.className="nav-item",t.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,t.onclick=()=>{new Yr().startTour(this._loginDetailObject?.tourStatus)}):e?.link?t.innerHTML=`
                <router-link href="${e.link}" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(t.className="nav-item",t.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),t}createSection(e){const t=document.createElement("div");return t.className="sidebar-section",t.innerHTML=`<hr /><span class="section-title">${e}</span>`,t}async handleNavItemClick(e){const t=document.querySelector(".sidebar"),a=t?.classList.contains("sidebar-collapsed"),i=e.target.closest(".nav-item"),s=i?.id,o=i?.classList.contains("active"),r=i?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!s||o){this.removeSubSidebar();return}if(a){this.removeSubSidebar(),i?.classList.add("active");const l=await this.createSubSidebarMenu(s,r);if(document.querySelector("#column-left")?.appendChild(l),s==="folderWidgets"){const d=await M(),u=document.getElementById("folder-widget-container");await $e(G.folder_widget,u,{showFiles:!0}).then(c=>{c.dataChange(async g=>{if(g.displayType==="photo"||g.type==="Image"||g.displayType==="widget"||g.type==="widget")await ci(e,g);else{let m=await Te(Number(g),d.token),p=await re(m?m.widgetId:Number(g));await Ue(null,p.id)}})})}if(s==="assets"){const d=document.getElementById("default-list-container");await $e(G.assets_widget,d)}}else t?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,t){if(e=="publicWidgets"){let a=document.querySelector("#public-widget-list-container");a&&(a.innerHTML=t)}if(e=="folderWidgets"){let a=document.querySelector("#folder-widget-container");a&&(a.innerHTML=t)}}async createSubSidebarMenu(e,t){const a=document.createElement("section");if(a.className="sub-sidebar",e==="layout")a.innerHTML=`
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
                </div>`}getListId(e){return{elements:"created-elements",savedWidgets:"saved-widget-list-container",publicWidgets:"public-widget-list-container",folderWidgets:"folder-widget-container",pages:"saved-page-list-container",projects:"saved-project-list-container",layout:"fslayout-list-container"}[e]||"default-list-container"}removeActiveClass(){document.querySelector(".nav-item.active")?.classList.remove("active")}removeSubSidebar(){document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(e=>{e.remove()})}async getHtml(){const e={mainItems:[{id:"elements",icon:'<img src="./images/icons/elements.svg" alt="" class="icon" />',text:"Elements"},{id:"layout",icon:'<img src="./images/icons/layouts.svg" alt="" class="icon" />',text:"Layout"},{id:"assets",icon:'<img src="./images/icons/assets.svg" alt="" class="icon" />',text:"Assets"}],widgetItems:[{id:"savedWidgets",icon:'<img src="./images/icons/saved widgets.svg" alt="" class="icon" />',text:"Saved Widgets"},{id:"publicWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="" class="icon" />',text:"Public Widgets"},{id:"folderWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="" class="icon" />',text:"Public Widgets"}],libraryItems:[{id:"pages",icon:'<img src="./images/icons/pages.svg" alt="" class="icon" />',text:"Pages"},{id:"projects",icon:'<img src="./images/icons/projects.svg" alt="" class="icon" />',text:"Projects"}],configurationItems:[{id:"documentation",icon:'<img src="./images/icons/documentation.svg" alt="" class="icon" />',text:"Documentation",link:"/documentation"},{id:"tutorials",icon:'<img src="./images/icons/tutorials.svg" alt="" class="icon" />',text:"Tutorials",link:"/video-tutorial"},{id:"community",icon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="none">
                        <path d="M360-400c0 33 23.5 56.5 56.5 56.5T473-400c0-33-23.5-56.5-56.5-56.5T360-400Zm240 0c0 33 23.5 56.5 56.5 56.5T713-400c0-33-23.5-56.5-56.5-56.5T600-400ZM480-600c0 33 23.5 56.5 56.5 56.5T593-600c0-33-23.5-56.5-56.5-56.5T480-600ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" stroke="#AAAAAA" stroke-width="2" fill="none"/>
                    </svg>`,text:"Community",link:"/Community"}]},t=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),t.outerHTML}}async function Zn(n){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(a=>{a.remove()});const t=document.querySelectorAll("script.vde-js");if(t?.length&&t?.forEach(a=>{a.remove()}),await ln(n),n?.children?.length)for(const a of n?.children){const i=a?.library;(i?.css?.length||i?.js.length)&&await Zn(a)}}class Bt{static staticTabName}async function el(n,e){n.stopPropagation();const t=document.getElementById(`dropdown-menu-${e}`),a=t?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),t&&!a&&t.classList.add("show")}document.addEventListener("click",n=>{document.querySelectorAll(".dropdown-menu").forEach(t=>{const a=n.target;a&&!t.contains(a)&&!a.closest(".dropdown-icon")&&t.classList.remove("show")})});async function ht(n,e){const t=document.getElementById(e),i=n.target.closest(".accordion-wrapper").querySelector("span");if(t){if(t.style.display==="block"||getComputedStyle(t).display==="block")t.style.display="none",i.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(t.style.display="block",i.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",t.tagName==="FORM"||t.id==="navigator-container"||t.id==="element-attributes"||t.id==="library-css"||t.id==="library-js"||t.id==="general-content"||t.id==="size-content"||t.id==="display-content"||t.id==="typography-content")return}}function tl(n){const e=document.getElementById(n);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function an(){const n=await _e.getInstance().getLoginInfo(),e=await Ci();return tt.staticElementList=e,Array.isArray(e)?e?.map(a=>{const i=a?.id,s=a?.data?.the_element?.the_element_name?.[0]?.data?.the_name,o=a?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=a?.data?.the_element?.the_element_void?.[0]?.data?.the_void,l=a?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",d=a?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${s}">${n.isAdmin?`<a data-elementid="${i}" data-type="${o}" data-default="${l}" data-void="${r}" data-text="${s}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

        <div class="element-details">
        <img src="${d}" class="element-icon">
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
          <img src="${d}" class="element-icon">
          <span>${s}</span>
          </div>
          </a>`}</li>`}).join(""):""}async function Ci(){const n=G?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],t=new Headers;t.append("Content-Type","application/json");const i=await(await fetch(`${n}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:t,body:JSON.stringify(e),redirect:"follow"})).json();return i?.sort((s,o)=>{s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const r=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),l=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return r<l?-1:r>l?1:0}),i}async function kn(){try{const n=await M();if(!n)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=n?.entityId;await je();const t=new Fe;t.type="the_public_widget",t.search="",t.operateon="public",t.name="publicfilter",t.logicoperator="=";const a=new P;a.typeConnection="the_public_widget_s_widget",a.freeschemaQueries=[],a.name="public",a.reverse=!0;const i=new P;i.typeConnection="the_widget_recent",i.name="copywidgets",i.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],i.freeschemaQueries=[a];const s=new P;s.typeConnection="the_entity_s_widget",s.name="mywidgets",s.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],s.freeschemaQueries=[i];const o=new P;return o.conceptIds=[e],o.freeschemaQueries=[s],o.inpage=100,o.outputFormat=de,await new Promise((l,d)=>{ce(o,"").subscribe(async u=>{console.log("widget data pub",u);const c=u?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!c.length)return l(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(c.map(async p=>{const h=p?.data?.the_widget,b=h?.the_widget_name?.data?.the_name,T=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:h?.the_widget_html?.data?.the_html,A=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:h?.the_widget_css?.data?.the_css,E=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:h?.the_widget_js?.data?.the_js,w=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:h?.the_widget_timestamp?.data?.the_timestamp,y=!!h?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:p?.id,name:b,html:T,css:A,js:E,timestamp:w,isPosted:y}}))).map(p=>`
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
              `).join("");l(m)})})}catch(n){console.error("Error in getMyWidgetsList:",n),C.errorToast(n?.message||"An error occurred while fetching widgets"),n?.status===401&&xe()}}async function nt(){try{const n=document.getElementById("builder-workarea");if(!n)return;n.innerHTML="",await Zn(f.widgetTree);const e=await Se(f.widgetTree,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await te(f.widgetTree,!1,e),ue(),ye()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function Ea(n){const e=n?JSON.parse(n):"";if(e)try{const t=document.getElementById("builder-workarea");t.innerHTML="";const a=await Se(e,t),i=document.getElementById("select-box");i.style.display="none";const s=document.getElementById("element-attributes");s.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await te(e,!1,a),ue(),ye()}catch(t){throw new Error(`error loading widget with widget tree ${t.message}`)}}async function Ue(n,e,t){try{if(n?.preventDefault(),n?.stopPropagation(),vt.collapseNavbar(),await je(),await qe(n),t&&typeof t!="number"||Number.isNaN(t)||e&&typeof e!="number"||Number.isNaN(e)){C.infoMessageToast("Widget id is in different format. Please check and update",4),qe(n);return}history.pushState({},"",`?widget-id=${t||e}`);const a=document.getElementById("preview-btn");a&&a.setAttribute("data-widgetid",e.toString()),nl(),al(),Dn(),gi(),await mi();let i=Hn();i.classList.contains("fspage")&&i.classList.remove("fspage");const o=(await M())?.token;let r=null;n&&(r=await Te(e,o));let l=await re(r?r.widgetId:e);const d=document.getElementById("widgetNameValue");d&&l?.name&&(d.value=l?.name);const u=document.getElementById("widget-builder");u&&l?.name&&(u.textContent="Widget Builder Panel: "+l?.name,u.setAttribute("title",`Widget Builder Panel: ${l?.name}`)),await Zn(l);const c=await Se(l,i);f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await te(l,!1,c,!0),await io(r?.widgetId??e);const g=document.getElementById("preview-btn");return g.setAttribute("onclick","previewWidget(event)"),g.setAttribute("data-widgetid",`${e}`),g.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),An(),q.enableWidgetButtons(),q.initializeWidgetVersions(t||e,l?.version?l.version.toString():"original",l?.timestamp),D.renderActionHistory(),D.updateActionHistories(),ue(),ye(),qn(),""}catch(a){console.error(a),C.errorToast(a?.message,4),An(),qe(n)}}function nl(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const t=document.getElementById("page-properties");t&&(t.style.display="none");const a=document.querySelector("button[data-tab-id='wico-tab-navigator']"),i=document.querySelector(`button[data-tab-id='${Bt.staticTabName}']`);Bt.staticTabName==="wico-tab-pageInfo"&&i.style.display==="none"?a&&a.click():i?i.click():a&&a.click()}function al(){document.title="Widget Conceptualizer",ft("description","Widget Conceptualizer"),ft("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection")}async function il(n,e){n.stopPropagation();try{const t=confirm("Do you want to delete the Widget?");if(await je(),t){C.infoMessageToast("Deleting the widget...",0),await Tr(e),await q.renderSavedWidgets();const a=new URLSearchParams(window.location.search).get("widget-id");return a&&parseInt(a)===e&&await qe(n),document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(t){document.querySelector(".infoMessageToast")?.remove(),C.successfullToast("Widget Deleted Successfully"),C.errorToast(t.message?t.message:"Failed to delete widget"),console.error("Failed to delete widget:",t)}}async function sl(n,e){n.stopPropagation();const t=document.getElementById("postWidgetModal");t&&t.remove();const a=await M(),i=a?.entityId===101651686||a?.entityId===101279491,s=document.createElement("dialog");s.id="postWidgetModal",s.className="col-md-6 a-dialog",s.innerHTML=`
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
  `,document.body.appendChild(s);const o=s.querySelector("#pasteArea"),r=s.querySelector("#widgetThumbnail"),l=s.querySelector("#imagePreview img"),d=s.querySelector("#imagePreview"),u=s.querySelector("#pasteText");function c(p){const h=new FileReader;h.onload=b=>{l&&b.target?.result&&(l.src=b.target.result,d.classList.remove("d-none"),u.classList.add("d-none"))},h.readAsDataURL(p)}r?.addEventListener("change",p=>{const h=p.target.files?.[0];h&&c(h)});function g(p){const h=p.clipboardData?.items;if(h){for(let b=0;b<h.length;b++)if(h[b].type.indexOf("image")!==-1){const T=h[b].getAsFile();if(T&&r){const A=new DataTransfer;A.items.add(T),r.files=A.files,c(T);break}}}}o?.addEventListener("paste",p=>g(p)),s.addEventListener("paste",p=>g(p)),s.querySelector("#post-widget-form")?.addEventListener("submit",p=>{p.preventDefault(),ol(e,s)}),s.showModal()}async function ol(n,e){const t=document.querySelector(`#spinner-${n}`),a=e.querySelector('button[type="submit"]');try{a&&(a.disabled=!0,a.textContent="Posting...",C.infoMessageToast("Posting Widget to Public...",0)),t&&t.classList.remove("d-none"),await je();const i=await M(),s=document.getElementById("widgetPublicName").value,o=document.getElementById("widgetDescription").value,r=document.getElementById("widgetThumbnail");if(!r?.files?.length)throw console.error("File validation failed:",{inputExists:!!r,filesLength:r?.files?.length}),new Error("Please provide a thumbnail image");const l=r.files?.[0];if(!l||!r.value)throw new Error("Please provide a thumbnail image");const d=await Li(l);if(!d.success)throw new Error("Failed to upload thumbnail");const u=await Te(n,i.token);if(u&&(await Pe(u.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),C.infoMessageToast("Widget is already public.");return}const c=document.getElementById("postAsTemplate")?.checked;let g=null;if(u)g=await J(u.widgetId);else{const A=await ee(n);g=await q.createWidgetCopy(A,i.userId,i.token)}const m=await X("public_name",s,!1,i.userId,4,999),p=await X("description",o,!1,i.userId,4,999),h=await X("thumbnail",d.url||"no attachment",!1,i.userId,4,999);await O(g,p,"description"),await O(g,h,"thumbnail"),await O(g,m,"public_name");const b=await X("public_widget","",!1,i.userId,4,999);if(await O(b,g,"s_widget"),c){const E=await X("template_name",s,!1,i.userId,4,999),w=await X("template_thumbnail",d.url||"no attachment",!1,i.userId,4,999);await O(g,w,"template_thumbnail"),await O(g,E,"template_name");const y=await X("template_widget","",!1,i.userId,4,999);await O(y,g,"s_widget")}await H.SyncDataOnline(),await q.renderPublicWidgets(),await q.renderSavedWidgets(),c&&await q.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{C.successfullToast(`Widget Posted to Public${c?" and Templates":""}`)},300)}catch(i){console.error("Error posting widget:",i),document.querySelector(".infoMessageToast")?.remove(),C.errorToast("Failed to post widget"),a&&(a.disabled=!1,a.textContent="Post Widget")}finally{t&&t.classList.add("d-none")}}async function Mn(n=""){try{const e=await M();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const a=(await qr(n))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],i=await Promise.all(a.map(async r=>{const l=r?.data?.the_widget,u=l?.the_widget_public_name?.data?.the_public_name||`${l?.the_widget_name?.data?.the_name} ${l?.the_widget_version?.data?.the_version>1?"v"+l?.the_widget_version?.data?.the_version:""}`,c=l?.the_widget_description?.data?.the_description,g=l?.the_widget_thumbnail?.data?.the_thumbnail,m=l?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:u,timestamp:m,description:c,thumbnail:g}}));return i?.length?(await Promise.all(i?.map(async r=>{const d=(await ee(r.id)).userId===e.userId,u=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link class="publicWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${r?.id}">
              <div class="d-flex align-items-center" style="min-width: 0;">
                <span class="material-symbols-outlined me-2">drag_indicator</span>
                <div class="widget-info" style="word-wrap: break-word; min-width: 0;">
                  <div class="widget-name pe-2">${r.name||"Unnamed Widget"}</div>
                </div>
              </div>
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
            </router-link>
          </li>
        `})||[])).join(""):`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `}catch(e){console.error("error",e),e?.status===401&&xe()}}async function rl(n=""){try{const e=await M();if(!e)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const a=(await Or(n))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[],i=await Promise.all(a.map(async l=>{const d=l?.data?.the_widget,c=d?.the_widget_folder_name?.data?.the_folder_name||`${d?.the_widget_name?.data?.the_name} ${d?.the_widget_version?.data?.the_version>1?"v"+d?.the_widget_version?.data?.the_version:""}`,g=d?.the_widget_description?.data?.the_description,m=d?.the_widget_thumbnail?.data?.the_thumbnail,p=d?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:c,timestamp:p,description:g,thumbnail:m}}));if(!i?.length){const l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",await $e(G.folder_widget,l)),`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `}const o=(await Promise.all(i?.map(async l=>{const u=(await ee(l.id)).userId===e.userId,c=l.description?l.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
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
        `})||[])).join(""),r=document.getElementById("folder-widget-container");return r&&(r.style.display="block",r.innerHTML=o),o}catch(e){console.error("error",e),e?.status===401&&xe()}}async function ll(){try{const n=await M();if(!n)return[];const e=await X("template_widget","",!1,n.userId,4,999);let t=new P;t.typeConnection="the_widget_template_name",t.name="widgetPName";let a=new P;a.typeConnection="the_widget_template_thumbnail",a.name="widgetThumbnail";let i=new P;i.typeConnection="the_template_widget_s_widget",i.name="widgetLevel",i.inpage=10,i.limit=!0,i.freeschemaQueries=[t,a];let s=new P;return s.conceptIds=[e.id],s.outputFormat=de,s.name="top",s.freeschemaQueries=[i],new Promise(o=>{ce(s,"").subscribe(r=>{const l=[];if(r&&r.length>0){const d=r[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const u of d)if(u?.data?.the_widget&&typeof u.data.the_widget=="object"){const c=u.data.the_widget?.the_widget_template_name?.data?.the_template_name,g=u.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(c||g)&&l.push({id:u.id||"",name:c||"Unnamed Template",thumbnail:g||""})}}o(l)})})}catch(n){return console.error("Error fetching templates:",n),[]}}async function cl(n,e){n.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const a=document.createElement("dialog");a.setAttribute("id","rename-widget-dialog"),a.classList.add("col-md-3"),a.innerHTML=`
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
        `;const i=a.querySelector("form");return i&&i.addEventListener("submit",s=>Ai(s,"",e)),document.querySelector("body #app")?.appendChild(a),me("rename-widget-dialog"),"OPENED"}catch(t){console.error("Failed to rename widget:",t)}}async function Ai(n,e="",t){n.preventDefault();let a="";if(e)a=e;else{const l=new FormData(n?.target);if(a=Object.fromEntries(l)?.widgetName,!a?.trim()){const u=n.target.querySelector("#widgetName");u?.focus(),u.style.border="2px solid red",u.style.outline="none",u.addEventListener("input",()=>{u.style.border=""});return}}const s=(await M())?.userId,o=document.getElementById("rename-widget-dialog"),r=o?.querySelector('button[type="submit"]');r.textContent="Saving";try{await je();const l=await Xe(t,"the_widget_name","name",a,s);await H.SyncDataOnline();const d=o?.querySelector("input"),u=o?.querySelectorAll("button");if(u&&u.forEach(c=>{c.disabled=!0}),d&&(d.disabled=!0),l){q.renderSavedWidgets(),be("rename-widget-dialog"),C.successfullToast("Widget Renamed Successfully");const c=new URLSearchParams(window.location.search).get("widget-id");if(t===Number(c)){const g=document.getElementById("widget-builder");g.textContent=`Widget Builder Panel: ${a}`}return"widget Renamed successfully"}}catch(l){C.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",l)}}const Yn=async(n,e,t=!1)=>{const a=await et(n,e),i=a?.data?.the_widget,s=i?.the_widget_name?.[0]?.data?.the_name,o=i?.the_widget_html?.[0]?.data?.the_html,r=i?.the_widget_clean?.[0]?.data?.the_clean,l=i?.the_widget_css?.[0]?.data?.the_css,d=i?.the_widget_js?.[0]?.data?.the_js,u=i?.the_widget_timestamp?.[0]?.data?.the_timestamp,c=i?.the_widget_widget?.[0].id,g=i?.the_widget_type?.[0]?.data?.the_type,m=i?.the_widget_after_render?.[0]?.data?.the_after_render,p=i?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,h=i?.the_widget_update?.[0]?.data?.the_update,b=i?.the_widget_mount_child?.[0]?.data?.the_mount_child;let T=[];const A=i?.the_widget_s_child;return A?.length&&(T=await Promise.all(A?.map(async w=>{const y=w?.data?.the_child_widget,_=y?.the_child_widget_type?.[0]?.data?.the_type,S=y?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,v=y?.the_child_widget_info?.[0]?.data?.id?y?.the_child_widget_info?.[0]?.data?.id:y?.the_child_widget_parent?.[0]?.data?.the_parent,L=await Yn(Number(v),e,t);return{id:w?.id,type:_,parent:v,wrapper:S,widget:L}}))),{id:a?.id,name:s,html:o,cleanHtml:r,css:l,js:d,timestamp:u,widgetId:c,typeValue:g,addEvent:m,onMount:p,onUpdate:h,mountChildWidgets:b,childs:T}},dl=async n=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await M(),t=e?.entityId,a=e?.userId,i=await ee(t);try{if(n.target?.files?.length>0){const s=[];for(let l=0;l<n.target?.files?.length;l++){const d=n.target?.files[l];if(d.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}s.push(Li(d))}const o=await Promise.all(s);for(let l=0;l<o.length;l++){const d=o[l];d.success||alert("Some file failed: "+d.message);const u=await X("the_asset",d.url||"",!1,a,4);await O(i,u,"s_asset")}await H.SyncDataOnline(),C.successfullToast(`Asset${o.length>1?"s":""} uploaded successfully`),new Xr().setupAssetListener()}else{alert("No file found");return}}catch(s){throw console.error(s),s}document.getElementById("assets-upload-loader")?.classList.add("d-none")},ul=async(n,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{n.target.closest(".asset-item").remove(),await Le(e),C.successfullToast("Asset deleted successfully")}catch(a){console.error("Error deleting asset:",a),C.errorToast("Failed to delete asset")}};function ml(n){const e=document.getElementById(n);if(e){e.value="";const t=new Event("keyup");e.dispatchEvent(t),Wi(n)}}function Wi(n){const e=document.getElementById(n),t=document.getElementById(`${n}-clear`);e&&t&&(t.style.display=e.value?"block":"none",t.style.cursor=e.value?"default":"")}async function gl(n,e,t,a){n.preventDefault(),n.stopPropagation();const i=a.replace(/\\n/g,`
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
  `,o=document.getElementById("widget-detail-modal");o&&o.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",s),me("widget-detail-modal")}window.viewPublicWidgetDetails=gl;window.openCSSEditor=ht;class xi{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let t=function(i){if(!i)return;const{wrapper:s}=i,o=s&&s!=="0"?`#${s}`:".content-target";a=a+`${o} { ${i.css} }`,i.children.forEach(r=>{t(r)})},a="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),t(f.widgetTree),this.styleElement.textContent=a}}async getWidgetHtml(e){let t=[];e.forEach(a=>{a.classList.forEach(i=>{t.push(i)})}),this.insertCSS(t)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:t,dispatch:a}=e,{selection:i}=t;return i.ranges.length===0?!1:(a({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new se({doc:"/* Write your CSS here */",extensions:[Vt,Rt,ls(),Ut(),se.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),se.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),zt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),se.updateListener.of(async t=>{if(t.docChanged){const a=this.editorView?.state.doc.toString()||"";this.updateCSS(a)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const t of e)if(this.editorView){const{state:a,dispatch:i}=this.editorView;i({changes:{from:0,to:a.doc.length,insert:`.${t} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const Ta=async n=>{const e=new Ha,t=hl(n);if(Object.keys(t).length>0){const a=await e.validateField(t),i=await In(a),s=In(i);return yl(n,s)}},pl=async n=>{const t=await new Ha().validateField(n);return Object.keys(t).length>0?{status:!1,details:In(t)}:{status:!0}},hl=n=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},t=n?.attributes;if(Array.isArray(t))t.forEach(a=>{const i=fl(a);switch(a.name){case"name":e.fieldName=i||"";break;case"value":e.value=i||null;break;case"fieldtype":e.fieldType=i?i.trim():null;break;case"pattern":e.pattern=i||null;break;case"datatype":e.dataType=i?i.trim():null;break;case"typeconcept":e.conceptType=i||null;break;case"maxlength":e.maxLength=i?parseInt(i):null;break;case"minlength":e.minLength=i?parseInt(i):null;break;case"max":e.maxValue=i?parseInt(i):null;break;case"min":e.minValue=i?parseInt(i):null;break;case"accept":e.accept=i||null;break;case"file":e.file=i||null;break;case"required":e.required=i===!0;break;case"unique":e.isUnique=i===!0;break}});else throw console.error('attributesData["attributes"] is not an array',n.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},fl=n=>{switch(n.type){case"boolean":return n.value==="on";case"array":return n.selected||null;case"string":return n.value||null;default:return null}},In=n=>({datatype:n.dataType,pattern:n.pattern,max:n.maxValue,min:n.minValue,minlength:n.minLength,maxlength:n.maxLength,accept:n.accept,file:n.file,required:n.required,unique:n.unique}),yl=(n,e)=>(n.attributes.forEach(t=>{const a=e[t.name];t.validationStatus=a?"invalid":"valid",t.validationErrorMessage=a||""}),n),wl=n=>({fieldName:n.getAttribute("name"),value:n instanceof HTMLInputElement?n.value:null,fieldType:n.getAttribute("fieldtype"),dataType:n.getAttribute("datatype"),pattern:n.getAttribute("pattern"),conceptType:n.getAttribute("typeconcept"),maxLength:n.getAttribute("maxlength"),minLength:n.getAttribute("minlength"),minValue:n.getAttribute("min"),maxValue:n.getAttribute("max"),file:n.hasAttribute("file"),accept:n.hasAttribute("accept"),required:n.hasAttribute("required"),isUnique:n.getAttribute("unique")==="on"});async function ki(n){let e=n.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",n.parentNode?.insertBefore(e,n.nextSibling)),e.innerHTML="";const t=wl(n),a=await pl(t);try{if(a.status)n.classList.remove("invalid"),n.classList.add("valid");else if(n.classList.remove("valid"),n.classList.add("invalid"),a.details&&typeof a.details=="object"){const i=document.createElement("span");i.className="error-message",i.style.color="red",i.style.fontSize="12px";const s=Object.values(a.details).filter(Boolean);i.innerHTML=s.join("<br>"),e.appendChild(i)}}catch(i){console.error("Validation error:",i);const s=document.createElement("span");s.className="error-message",s.style.color="red",s.textContent="Validation failed. Please try again.",e.appendChild(s)}}var Qe=(n=>(n.STYLE="style",n.BOOLEAN="boolean",n.FORM="form",n.SPECIAL="special",n))(Qe||{});const bl=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),Xn=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],ea=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],jt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],vl=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Nt=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],fe=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),_l=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),El=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),Tl=new Set(["elementContent","className","id"]),Mi=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function rt(n){return n.toLowerCase()==="type"?!0:Mi.has(n.toLowerCase())}function Tt(n,e,t){const a=n.toLowerCase();if(a==="type"){const i=t?bl.get(t.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):i}return Mi.get(a)||[]}class sn{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=ps}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,t){Bt.staticTabName=t;let a,i,s=document.getElementsByClassName("tabcontent");for(a=0;a<s.length;a++)s[a].style.display="none";for(i=document.getElementsByClassName("tablinks"),a=0;a<i.length;a++)i[a].className=i[a].className.replace(" active","");const o=document.getElementById(t);o.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let t=this;for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(s){const o=e[i].getAttribute("data-tab-id");t.openTab(s,o)});const a=document.querySelector(`button[data-tab-id='${Bt.staticTabName}']`);a?a.click():e[0].click()}sortAttributes(e){return e.sort((t,a)=>{if(!t?.name||!a?.name)return 0;const i=this.findAttributeInMap(t.name),s=this.findAttributeInMap(a.name);if(i==="Other"&&s!=="Other")return 1;if(i!=="Other"&&s==="Other")return-1;if(i===s){const o=this.categoryMap[i].findIndex(l=>l.toLowerCase()===t.name.toLowerCase()),r=this.categoryMap[s].findIndex(l=>l.toLowerCase()===a.name.toLowerCase());return o-r}return 0})}getCategoryForAttribute(e){if(!e)return"General";const t=e.toLowerCase();for(const[a,i]of Object.entries(this.categoryMap))if(a!=="Other"&&i.some(s=>s.toLowerCase()===t))return a;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,t){setTimeout(()=>{const a=document.getElementById("element-attributes");if(!a){this.setAttributes(e,t);return}a.innerHTML="";const i=document.createElement("div");if(i.className="row",a.appendChild(i),!e){i.innerHTML="";return}(async()=>await Ta(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const o=this.sortAttributes(e.attributes),r={};o.forEach(d=>{const u=this.getCategoryForAttribute(d.name);r[u]||(r[u]=[]),r[u].push(d)});let l="";Object.entries(r).forEach(([d,u])=>{const c=u.map(m=>{let p="";if(m.name.toLowerCase()==="float")p=`
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
                `;else if(m.name==="Alignment"){const h=e?.tag?.toLowerCase();Xn.includes(h)&&(p=`
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
                  `)}else if(m.name==="Font Family"){const h=e?.tag?.toLowerCase();if(ea.includes(h)&&rt(m.name)){const T=Tt(m.name,m.value,e?.tag).map(A=>{const E=A.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${A}" ${E?"selected":""}>${A}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${T}
                      </select>
                    `}}else if(m.name==="Font Weight"){const h=e?.tag?.toLowerCase();if(jt.includes(h)&&rt(m.name)){const T=Tt(m.name,m.value,e?.tag).map(A=>{const E=A.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${A}" ${E?"selected":""}>${A}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                        <option value="">Select ${m.name}</option>
                        ${T}
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
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const h=(m.value||"0 0 0 0").split(" ").map(w=>w.trim()).map(w=>/^\d+$/.test(w)?`${w}px`:w);for(;h.length<4;)h.push("0px");const[b,T,A,E]=h;return m.name==="Margin"?`
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
                          <div class="margin-edge top" data-value="${b}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${b}</span>
                            <input type="text" 
                              class="edge-input"
                              value="${b}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: [this.value, '${T}', '${A}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge right" data-value="${T}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${T}</span>
                            <input type="text"
                              class="edge-input"
                              value="${T}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${b}', this.value, '${A}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
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
                                  value: ['${b}', '${T}', this.value, '${E}'].join(' '),
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
                                  value: ['${b}', '${T}', '${A}', this.value].join(' '),
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
                          <div class="padding-edge top" data-value="${b}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${b}</span>
                            <input type="text" 
                              class="edge-input"
                              value="${b}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: [this.value, '${T}', '${A}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge right" data-value="${T}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${T}</span>
                            <input type="text"
                              class="edge-input"
                              value="${T}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${b}', this.value, '${A}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${t}', ${e?.id})"
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
                                  value: ['${b}', '${T}', this.value, '${E}'].join(' '),
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
                                  value: ['${b}', '${T}', '${A}', this.value].join(' '),
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
                    >${m?.value||""}</textarea>`;else if(rt(m.name)){const b=Tt(m.name,m.value,e?.tag).map(T=>`<option value="${T}" ${T===m?.value?"selected":""}>${T}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${b}
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
                  </div>`;else if(m?.type==="boolean")p=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${t}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(rt(m.name)){const b=Tt(m.name,m.value,e?.tag).map(T=>{const A=T.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${T}" ${A?"selected":""}>${T}</option>`}).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${b}
                    </select>
                  `}else{const b=(m?.value?.split(",")||[]).map(T=>`<option value="${T}" ${T===m?.selected||T===m?.value?"selected":""}>${T}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${t}', ${e?.id})">
                      ${b}
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
            `}),i.innerHTML=l}}),At()},0)}setAttributesForMultipleElements(e){const t=async()=>await Ta(e);if(!e){const i=document.getElementById("element-attributes").querySelector(".row");i.innerHTML="";return}t().then(()=>{if(e?.attributes&&e?.attributes?.length){const a={};e.attributes.forEach(o=>{const r=this.getCategoryForAttribute(o.name);a[r]||(a[r]=[]),a[r].push(o)});let i="";Object.entries(a).forEach(([o,r])=>{if(r.length){const l=r.map(u=>{let c="";return u?.type==="string"?c=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||""}">`:u?.type==="color"?c=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||"#000000"}">`:u?.type==="boolean"?c=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${u?.value&&u?.value!=="false"?"checked":""}>`:u?.type==="array"&&(c=`
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
              `}).join(""),d=o==="General"||o==="Display"||o==="Typography"||o==="Size"||o==="Spacing"||o==="Borders"||o==="Colors";i+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${o.toLowerCase()}-content')">
                  <div class="category-title">${o}</div>
                  <span class="material-symbols-outlined">${d?"expand_less":"expand_more"}</span>
                </div>
                <div class="category-content" id="${o.toLowerCase()}-content" style="display: ${d?"block":"none"}" data-category-state="${d?"open":"closed"}">
                  <div class="row">
                    ${l}
                  </div>
                </div>
              </div>
            `}});const s=document.getElementById("element-attributes");s&&(s.innerHTML=i)}})}async getHtml(){window.updateWidgetTypeValue=$i,window.toggleDisplay=ht,window.updateElementAttribute=on,window.updateMultipleElementAttribute=Di,window.handlePageProperties=ji,window.updateCSSLibrary=ze,window.updateJSLibrary=Je,window.addJSLibrary=Oi,window.addCSSLibrary=qi,window.openRenameCustomFunction=ct.openRenameCustomFunction,window.deleteCustomFunction=ct.deleteCustomFunction,setTimeout(async()=>{ct.initializeCodeBlock();const i=new xi,s=document.getElementById("css-editor-container");s.innerHTML=await i.getHtml(),await i.initializeEditor(),aa()},0),setTimeout(async()=>{await new ai().initializeEditor()},0),setTimeout(async()=>{const i=new ii,s=document.getElementById("js-editor-container");s.innerHTML=await i.getHtml(),await i.initializeEditor()},0),setTimeout(async()=>{await new oe("onmount-editor-split").initializeEditor(),await new oe("onupdate-editor-split").initializeEditor(),await new oe("addevents-editor-split").initializeEditor(),await new oe("mountchildwidgets-editor-split").initializeEditor();const l=document.getElementById("publish-widget");l&&l.addEventListener("click",async d=>{d.preventDefault();try{await f.publish()}catch(u){console.error("error publishing widget",u),u instanceof Error&&C.errorToast(u.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let t="",a="";if(this.the_params){const i=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";i&&ve("meta_title",i);const s=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";s&&ve("meta_description",s);const o=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";o&&ve("meta_keywords",o);const r=this.the_params?.data?.the_page_width?.data?.the_width||"";r&&ve("width",r);const l=this.the_params?.data?.the_page_font_size?.data?.the_font_size;l&&ve("font_size",l);const d=this.the_params?.data?.the_page_font_family?.data?.the_font_family;d&&ve("font_family",d);const u=this.the_params?.data?.the_page_type?.data?.the_type;u&&ve("type",u);const c=()=>Array.from({length:13},(p,h)=>12+h).map(p=>{const h=l==p?"selected":"";return`<option value="${p}" ${h}>${p}</option>`}).join(""),g=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(h=>{const b=d==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${b}>${h}</option>`}).join(""),m=()=>["Fluid","Fixed"].map(h=>{const b=u==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${b}>${h}</option>`}).join("");t=`
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
        ${t}
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
    `}}async function ta(n){let e=On.filter(a=>a.id==n)[0];return!n||n==="null"?void 0:{id:n,attributes:Ro,tag:"div",name:`Layout: ${e?.name}`}}async function Sl(){return{id:1,name:"Global",tag:"div",attributes:Ss}}class fn{static editor}function Ll(n,e,t){const a=t?.id,i=document.getElementById("editor");i?.setAttribute("wrapper-id",e),i?.setAttribute("element-id",a),i?.setAttribute("element-clicked","true"),fn.editor&&t?.void?fn.editor.setData(n):t?.void||fn.editor?.setData("")}window.showdWidgetProperties=Al;window.widgetSelected=kl;function Cl(n,e){let t;if(e.data_type=="layout"){const a=On.filter(l=>l.name==e.data_text)[0],r=new DOMParser().parseFromString(a?.html,"text/html").body.querySelector("div");r.setAttribute("element-info-id",n),t=r.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?t=`<${e?.data_type} element-info-id="${n}">${e?.data_default}</${e?.data_type}>`:t=`<${e?.data_type} element-info-id="${n}">`;return`${t}`}async function Al(n,e){const t=n.target.closest(".added-widget-container"),a=t.id,i=t.getAttribute("data-widgetid");if(i){const E=(await M())?.token,y=(await et(Number(i),E))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new sn().initializeView();const S=document.getElementById("widgetNameValue");S&&(S.value=y)}const o=(await M())?.userId,r=await $a(a,o);console.warn("savedWidgetProperties on widget Selected ->",r);let l="";r?.length&&(r?.length>1&&r?.sort((w,y)=>{const _=new Date(w?.created_at).getTime();return new Date(y?.created_at).getTime()-_}),l=r?.[0]?.data?.[a]?.properties?.filter(w=>w.name==="widget-type")?.[0]?.value);const d=document.getElementById("widgetTypeValue");d.setAttribute("data-widgetcontainerid",a),d.setAttribute("data-mainwidgetid",`${e}`),d.value=l;const c=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,h=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,b=document.querySelector(".content-target"),T=new yt;l&&await T.getTypeValueList(l),T.componentDidMountFunction=c,T.addEventFunction=m,T.mountChildWidgetsFunction=h,await T.mount(b)}function Wl(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(a=>{const i=document.querySelector(a);i&&(i.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const t=document.querySelector('.editor-container .cm-content[data-language="javascript"]');t.textContent="/* Write your JavaScript here */"}const Ze=async()=>{const n=document.getElementById("element-info");n.style.display="none"},lt=async n=>{const e=n?.target;let t=e?.tagName;const a=e?.classList?.contains("fslayout-row"),i=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))t="WIDGET",i.classList.add("widget-marker");else if(a)t="Layout Element",i.classList.remove("widget-marker");else if(e?.closest("#widget-details")){t="",i.classList.remove("widget-marker");return}else i.classList.remove("widget-marker");const s=e.getBoundingClientRect(),o=s.left,r=s.top;i.style.display="block",new ResizeObserver(()=>{i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.top=`calc(${r}px)`,i.style.left=`calc(${o}px)`}).observe(e);const d=document.getElementById("element-info_details");d.innerHTML=`<span>${t}</span>`;const u=document.getElementById("select-box"),c=document.getElementById("builder-workarea");c.addEventListener("scroll",pa),c.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");u.style.transition="0.2s ease all";const p=document.getElementById("element-info");m||(p.style.display="block"),p.style.height="0",p.style.width="0"}),c.addEventListener("resize",pa)},Ke=async n=>{n.preventDefault();const e=n.target;tl("navigator-container"),Ae.publish("page:elementClick",e);const t=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details"))return;const a=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",a);const i=e;R?.previousSelectedStaticElement?.removeAttribute("draggable"),R.staticElement=i,R.previousSelectedStaticElement=R.staticElement,R.staticElement.setAttribute("draggable","true");const s=i.getBoundingClientRect();xl(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),R.staticElement=e;const y=e?.tagName.toLowerCase(),v=tt.staticElementList?.filter(L=>{const x=L?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return y===x})?.[0]?.id;on(n,"",v)}));const r=s.left,l=s.top;vt.resetNavigationBar();const d=e;let u;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?u=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(u=e.closest(".edited-widget-container"));const c=e.classList.contains("added-widget-container");if(u||c){let y="";c?y=e?.id:u&&(y=u?.id);const _=[];let S=0;async function v(x,k){return x.reduce((I,$,B)=>($.wrapper===k&&(I.push($),S=B),$.children&&$.children.length>0&&v($.children,k),I),_)}const L=await v(f?.staticWidgetTree?.children,y);f.selectedStaticWidgetTreeInfo={widgetTree:L[0],isChildWidget:!0,childWidgetIndex:S},await te(L[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},te(f?.staticWidgetTree,!1);if(d?.id&&(f.updatedWidgets[d.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const y=document.getElementById("widgetType");y&&(y.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const g=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");g&&(!g?.style?.display||g?.style?.display==="none")&&m&&(g.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(y=>y.remove());let h=!1;if(n instanceof KeyboardEvent&&n.ctrlKey){if(d?.classList.contains("added-widget-container")){C.infoMessageToast("Widget can't be selected");return}d?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(_=>{const S=_.parentElement?.classList,v=_?.classList,L=_.firstChild?.classList,x=S&&S.contains("added-widget-container");let I=v&&v.contains("fslayout-row")||L&&L.contains("fslayout-row")?"Layout":_.tagName;if(x||h){h=!0;return}const $=document.createElement("div");$?.classList.add("tag-name"),$.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${I}
        </span>
      `,_?.parentElement?.appendChild($)}),h?(C.infoMessageToast("Widget can't be selected"),d?.classList.toggle("widget_selected"),d?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await Ii());return}const b=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const y=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;b&&y&&(b.value=y)}else b&&(b.value=f?.staticWidgetTree.name);const T=document.getElementById("select-box");T.style.display="block";const A=new ResizeObserver(()=>{T.style.width=e.offsetWidth+"px",T.style.height=e.offsetHeight+"px",T.style.top=`calc(${l}px)`,T.style.left=`calc(${r}px)`}),E=document.getElementById("publishWidgetBtnContainer");if(E){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(E.classList.remove("d-none"),E.classList.add("d-flex")):(E.classList.remove("d-flex"),E.classList.add("d-none")),console.log("prev selected widget",t,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const y=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,_=y.origin||y.id,S=y.version?y.version.toString():"original";typeof q.initializeWidgetVersions=="function"&&q.initializeWidgetVersions(_,S,y?.timestamp)}catch(y){console.error("Error showing widget versions:",y)}}A.observe(e);const w=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?w.style.display="block":w.style.display="none",(u||c)&&!e.closest(".edited-widget-container")){const _=document.getElementById("element-attributes").querySelector(".row");_.innerHTML="",Gt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await Dt(d)};function xl(n){return typeof n.contentEditable<"u"&&Qs.includes(n.tagName.toLowerCase())}async function kl(n){n.preventDefault(),n.stopPropagation()}async function Dt(n){let e;if(n?.dataset?.widgetid)return;const t=n?.tagName.toLowerCase(),i=tt.staticElementList?.filter(c=>{const g=c?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return t===g}),s=i?.[0]?.id,o=n.classList.contains("fslayout-row"),r=n?.firstChild?.classList?.contains("fslayout-row");if(o||r)e=await ta(s),e?.attributes?.length&&(e.attributes=e?.attributes.map(c=>({...c,selected:"",value:c.name==="class"?"":c.value})));else if(s)e=await _t(i);else if(Ve.includes(t)||bt.includes(t)){const c=Gs.map(g=>{const m=g.name.toLowerCase(),p=fe.get(m)||fe.get(g.name);return p?{...g,value:n.style[p.property]||""}:{...g,value:m==="classname"?n.className||"":m==="id"&&n.id||""}});t==="iframe"&&c.push({name:"src",type:"string",value:n.getAttribute("src")||""}),Ve.includes(t)&&c.push({name:"elementContent",type:"string",value:n.textContent||""}),e={tag:t,attributes:c}}e.attributes=e?.attributes?.map(c=>c?.name?(c.value=Vi(n,c.name),c):(console.warn("Found attribute without name:",c),c)).filter(Boolean);let l="";const d=e?.attributes;d?.length&&(l=d?.filter(g=>g?.name==="elementContent")?.[0]?.value,Ll(l,n?.id,e),Gt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new sn()?.setAttributes(e,n?.id)}async function Ii(){let n;n=await Sl(),n?.attributes?.length&&(n.attributes=n?.attributes.map(t=>({...t,value:""}))),new sn()?.setAttributesForMultipleElements(n)}const Ml=new Ge;async function Il(n){return new Promise(async e=>{const t=await Pi(n);e(t)})}async function Pi(n){return new Promise(async e=>{let t=new z;t.composition=n,t.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],t.inpage=100;let a=new z;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const r=(await we([t,a],""))?.data?.the_element?.the_element_s_attribute?.map(c=>{const g=c?.data?.the_attribute,m=g?.the_attribute_name?.[0]?.data?.the_name,p=g?.the_attribute_type?.[0]?.data?.the_type,h=g?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:p,value:h}}),l=r?.map(c=>{let g;return c?.type==="string"?g='<input type="text" class="form-control" onchange="updateAttribute(event)">':c?.type==="boolean"?g='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':c?.type==="array"&&(g=`
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
        `}).join("");let d,u=setInterval(async()=>{d&&(clearInterval(u),r?.forEach(c=>{c?.type!=="boolean"&&d?.setAttribute(c?.name,"")})),d=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(l)})}async function $i(n){const t=(n?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=t,D.updateActionHistories()}async function Pl(n){const e=n.target,t=e.closest(".widget_container"),a=t.getAttribute("data-elementId"),i=e.textContent?.trim(),s=document.querySelectorAll("#element-attributes .attribute-row");for(const o of s)if(o.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const l=o.querySelector("input");if(l&&l.value!==i){l.value=i||"",await on({target:e,type:"text",value:i,isDirectEdit:!0},t,a);break}}}async function $l(n,e,t,a){console.log("updateElementAttributeViaEditor ->",e,t),n?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),n=R.staticElement;let s;const o=n?.tagName.toLowerCase(),l=tt.staticElementList?.filter(g=>{const m=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return o===m});s=await _t(l),n?.classList.remove("wb-initial-empty");const d=a?.value,u=a?.attribute,c=R.staticElement;if(c){if(u==="className")c?.setAttribute("class",d);else if(u==="height"){const g=d?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;c.style.height=m}else if(u==="width"){const g=d?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;c.style.width=m}else if(u==="elementContent")if(!c?.childNodes?.length)c.innerHTML=d;else for(let g of c?.childNodes){const m=g;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=d;break}}else{const p=document.createTextNode(d);c.insertBefore(p,c.firstChild);break}}else c?.setAttribute(u,d?.trim());s.attributes=s?.attributes?.map(g=>(g?.name===u&&(g?.type==="array"?g.selected=d:g.value=d),g)),await Dt(n)}}async function on(n,e,t){try{const a=n.target.closest(".category-content"),i=a?.id,s=a?.style.display!=="none",r=document.getElementById("advanced-size")?.style.display==="block",u=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),c=document.querySelector(".margin-control")?.closest(".col-12"),g=document.querySelector(".padding-control")?.closest(".col-12"),m=!c?.classList.contains("hidden"),p=!g?.classList.contains("hidden");e=R.staticElement,e?.classList.remove("wb-initial-empty");const h=e?.tagName?.toLowerCase();let b;const T=e?.classList?.contains("fslayout-row"),A=e?.firstChild?.classList?.contains("fslayout-row");if(T||A)b=await ta(t);else{const L=tt.staticElementList?.filter(x=>{const k=x?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return h===k});if(L?.length)b=await _t(L);else if(Ve.includes(h)||bt.includes(h)){const x=n?.target?.value,k=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(k==="className")e.setAttribute("class",x);else if(k==="elementContent"&&Ve.includes(h))e.textContent=x;else if(k==="id")e.id=x;else if(k==="Height"){const I=x?.trim(),$=/^\d+$/.test(I)?`${I}px`:I;e.style.height=$}else if(k==="Width"){const I=x?.trim(),$=/^\d+$/.test(I)?`${I}px`:I;e.style.width=$}else if(k==="Margin"){const $=(x?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.margin=$}else if(k==="Padding"){const $=(x?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.padding=$}else k==="Background Color"?e.style.backgroundColor=x:k==="Float"?e.style.float=x:k==="Color"?e.style.color=x:e?.setAttribute(k,x?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const I=await $t(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=I,le(I)}else{const I=await pt();f.staticWidgetTree.html=I,le(I)}await Dt(e);return}}const E=n?.target?.value,w=n?.target?.type,y=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),_=e,S=_?.getAttribute("isvalidate")==="on";if(S&&_.setAttribute("onchange","applyValidation()"),S&&_?.addEventListener("change",v=>{const L=v.target;ki(L)}),y==="className")_?.setAttribute("class",E);else if(y==="Height"){const v=E?.trim(),L=/^\d+$/.test(v)?`${v}px`:v;_.style.height=L}else if(y==="Width"){const v=E?.trim(),L=/^\d+$/.test(v)?`${v}px`:v;_.style.width=L}else if(y==="Minimum-Height"){const v=E?.trim(),L=/^\d+$/.test(v)?`${v}px`:v;_.style.minHeight=L}else if(y==="Minimum-Width"){const v=E?.trim(),L=/^\d+$/.test(v)?`${v}px`:v;_.style.minWidth=L}else if(y==="Maximum-Height"){const v=E?.trim(),L=/^\d+$/.test(v)?`${v}px`:v;_.style.maxHeight=L}else if(y==="Maximum-Width"){const v=E?.trim(),L=/^\d+$/.test(v)?`${v}px`:v;_.style.maxWidth=L}else if(y==="Margin"){const L=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");_.style.margin=L}else if(y==="Padding"){const L=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");_.style.padding=L}else if(y==="Background Color")_.style.backgroundColor=E;else if(y==="Color")_.style.color=E;else if(y==="Float")_.style.float=E;else if(y==="Alignment")Xn.includes(e.tagName.toLowerCase())&&(_.style.textAlign=E);else if(y==="Font Family")ea.includes(e.tagName.toLowerCase())&&(_.style.fontFamily=E);else if(y==="Font Weight")jt.includes(e.tagName.toLowerCase())&&(_.style.fontWeight=E);else if(y==="Font Size"){if(jt.includes(e.tagName.toLowerCase())){const L=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");_.style.fontSize=L}}else if(y==="Opacity")_.style.opacity=E;else if(y==="Text Transform")e.tagName.toLowerCase()!=="img"&&(_.style.textTransform=E);else if(y==="Line Height"){if(Nt.includes(e.tagName.toLowerCase())){const L=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");_.style.lineHeight=L}}else if(y==="Letter Spacing"){if(Nt.includes(e.tagName.toLowerCase())){const L=(E?.trim().split(/\s+/)).map(x=>/^\d+$/.test(x)?`${x}px`:x).join(" ");_.style.letterSpacing=L}}else if(w==="checkbox"&&!n?.target?.checked)_?.removeAttribute(y),_.value="";else if(y==="elementContent")if(!_?.childNodes?.length)_.innerText=E;else{let v;e?.childNodes?.length&&(v=Array.from(_?.childNodes)?.filter(L=>L.nodeType===3),v?.length&&v.forEach((L,x)=>{x===0?L.nodeValue=E:L.nodeValue=""}))}else y==="align-items"?(_.style.display="flex",_.style.alignItems=E):y==="justify-content"?(_.style.display="flex",_.style.justifyContent=E):y==="text-align"?_.style.textAlign=E:y==="class"?(_.classList.forEach(v=>{v.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||_.classList.remove(v)}),_.classList.add(...E.split(" "))):y&&_?.setAttribute(y,E?.trim());if(b.attributes=b?.attributes?.map(v=>(v?.name===y&&(v?.type==="array"?v.selected=E:v?.type==="boolean"&&!n?.target?.checked?v.value="":v.value=E),v)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const v=await $t(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=v,le(v)}else{const v=await pt();f.staticWidgetTree.html=v,le(v)}D.updateActionHistories(),await Dt(e),setTimeout(()=>{if(i&&s){const k=document.getElementById(i);if(k){k.style.display="block";const I=k.previousElementSibling?.querySelector(".material-symbols-outlined");I&&(I.textContent="do_not_disturb_on")}}if(r){const k=document.getElementById("advanced-size");if(k){k.style.display="block";const I=k.previousElementSibling?.querySelector(".material-symbols-outlined");I&&(I.textContent="expand_less")}}const v=document.querySelector(".spacing-tabs");if(v&&u){const k=v.querySelector(`.${u}-tab`);k&&sa(k,u)}const L=document.querySelector(".margin-control")?.closest(".col-12"),x=document.querySelector(".padding-control")?.closest(".col-12");m?(L?.classList.remove("hidden"),x?.classList.add("hidden")):p&&(L?.classList.add("hidden"),x?.classList.remove("hidden"))},0)}catch(a){console.error("error updating attribute",a.message)}}function Bi(n,e){let t=[];return n.wrapper===e&&t.push(n),Array.isArray(n.children)&&n.children.forEach(a=>{t=t.concat(Bi(a,e))}),t}async function Bl(n){const e=n?.target?.value,t=n?.target?.type,a=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),i=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');a==="className"?i?.setAttribute("class",e):t==="checkbox"&&!n?.target?.checked?i?.removeAttribute(a):a==="elementContent"?i.innerText=e:i?.setAttribute(a,e)}async function na(n){return new Promise(async e=>{let t=new z;t.composition=n,t.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],t.inpage=100;let a=new z;a.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],a.inpage=100;const s=await we([t,a],""),o=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name,r=s?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=s?.data?.the_element?.the_element_void?.[0]?.data?.the_void,d=s?.data?.the_element?.the_element_default?.[0]?.data?.the_default,u=s?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,c=s?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=s?.data?.the_element?.the_element_s_attribute?.map(h=>{const b=h.id,T=h?.data?.the_attribute,A=T?.the_attribute_name?.[0]?.data?.the_name,E=T?.the_attribute_type?.[0]?.data?.the_type,w=T?.the_attribute_value?.[0]?.data?.the_value;return{id:b,name:A,type:E,value:w}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:n,name:o,tag:r,void:l,default:d,icon:u,division:c,attributes:m})})}async function _t(n){const e=n?.[0],t=e.id,a=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,i=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,s=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,o=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,r=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,l=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,u=e?.data?.the_element?.the_element_s_attribute?.map(g=>{const m=g.id,p=g?.data?.the_attribute,h=p?.the_attribute_name?.[0]?.data?.the_name,b=p?.the_attribute_type?.[0]?.data?.the_type,T=p?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:h,type:b,value:T}});return u?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),Xn.includes(i.toLowerCase())&&u.push({name:"Alignment",type:"array",value:"",division:"inline"}),ea.includes(i.toLowerCase())&&u.push({name:"Font Family",type:"array",value:"",division:"inline"}),jt.includes(i.toLowerCase())&&u.push({name:"Font Weight",type:"array",value:"",division:"inline"}),vl.includes(i.toLowerCase())&&u.push({name:"Font Size",type:"string",value:"",division:"inline"}),i.toLowerCase()!=="img"&&u.push({name:"Text Transform",type:"array",value:"",division:"inline"}),Nt.includes(i.toLowerCase())&&u.push({name:"Line Height",type:"string",value:"",division:"inline"}),Nt.includes(i.toLowerCase())&&u.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:t,name:a,tag:i,void:s,default:o,icon:r,division:l,attributes:u}}async function ji(n){const{id:e,value:t,dataset:{page_id:a}}=n.target;ve(e,t),await Ml.updatePageField(e,t,Number(a))}async function Ni(n){[{key:"meta_title",value:n?.[`the_${W.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:n?.[`the_${W.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:n?.[`the_${W.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:n?.[`the_${W.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:n?.[`the_${W.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:n?.[`the_${W.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:n?.[`the_${W.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(t=>{t.value&&ve(t.key,t.value)})}async function ve(n,e){const t=document.getElementById("fspage-properties")||jl();let a="";switch(n){case"width":it(".fspage { width: [^;]+ !important; }"),a=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":it(".fspage { font-size: [^;]+; }"),a=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":it(".fspage { font-family: [^;]+; }"),a=e?`.fspage { font-family: ${e}; }`:"";break;case"type":it(".fspage { width: 1200px; margin: 0 auto; }"),it(".fspage { width: 100%; padding: 0; }"),e==="fixed"?a=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?a=".fspage { width: 100%; padding: 0; }":a="";break;case"meta_title":document.title=e;break;case"meta_keywords":ft(n.replace("meta_",""),e);break;case"meta_description":ft(n.replace("meta_",""),e);return}t.textContent+=a}function it(n){const e=document.getElementById("fspage-properties");if(!e)return;let t=e?.textContent;t=t?t.replace(new RegExp(n,"g"),""):"",e.textContent=t}function jl(){const n=document.createElement("style");return n.id="fspage-properties",document.head.appendChild(n),n}function ft(n,e){let t=document.querySelector(`meta[name="${n}"]`);t||(t=document.createElement("meta"),t.setAttribute("name",n),document.head.appendChild(t)),t.setAttribute("content",e)}async function Di(n){try{document.querySelectorAll(".element-selected")?.forEach(async t=>{const a=t?.getAttribute("data-elementId"),i=t?.tagName?.toLowerCase();let s;const o=t?.classList?.contains("fslayout-row"),r=t?.firstChild?.classList?.contains("fslayout-row");if(o||r)s=await ta(a);else{const p=tt.staticElementList?.filter(h=>{const b=h?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return i===b});if(p?.length)s=await _t(p);else if(Ve.includes(i)||bt.includes(i)){const h=n?.target?.value,b=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(b==="className")t.setAttribute("class",h);else if(b==="elementContent"&&Ve.includes(i))t.textContent=h;else if(b==="id")t.id=h;else if(b==="Height"){const T=h?.trim(),A=/^\d+$/.test(T)?`${T}px`:T;t.style.height=A}else if(b==="Width"){const T=h?.trim(),A=/^\d+$/.test(T)?`${T}px`:T;t.style.width=A}else if(b==="Margin"){const A=(h?.trim().split(/\s+/)).map(E=>/^\d+$/.test(E)?`${E}px`:E).join(" ");t.style.margin=A}else if(b==="Padding"){const A=(h?.trim().split(/\s+/)).map(E=>/^\d+$/.test(E)?`${E}px`:E).join(" ");t.style.padding=A}else b==="Background Color"?t.style.backgroundColor=h:b==="Color"&&(t.style.color=h);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const T=await $t(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=T,le(T)}else{const T=await pt();f.staticWidgetTree.html=T,le(T)}await Ii();return}}const l=n?.target?.value,d=n?.target?.type,u=n?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),c=t,g=c?.getAttribute("isvalidate")==="on";if(g&&c.setAttribute("onchange","applyValidation()"),g&&c?.addEventListener("change",m=>{const p=m.target;ki(p)}),u==="className")c?.setAttribute("class",l);else if(u==="Height"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;c.style.height=p}else if(u==="Width"){const m=l?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;c.style.width=p}else if(u==="Margin"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");c.style.margin=p}else if(u==="Padding"){const p=(l?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");c.style.padding=p}else if(u==="Background Color")c.style.backgroundColor=l;else if(u==="Color")c.style.color=l;else if(d==="checkbox"&&!n?.target?.checked)c?.removeAttribute(u),c.value="";else if(u==="elementContent")if(!c?.childNodes?.length)c.innerText=l;else for(let m of c?.childNodes){const p=m;if(p.nodeValue){if(p.nodeType===3&&p.nodeValue.trim()){p.nodeValue=l;break}}else{const h=document.createTextNode(l);c.insertBefore(h,c.firstChild);break}}else u==="align-items"?(c.style.display="flex",c.style.alignItems=l):u==="justify-content"?(c.style.display="flex",c.style.justifyContent=l):u==="text-align"?c.style.textAlign=l:u==="class"?(c.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||c.classList.remove(m)}),c.classList.add(...l.split(" "))):c?.setAttribute(u,l?.trim());if(s.attributes=s?.attributes?.map(m=>(m?.name===u&&(m?.type==="array"?m.selected=l:m?.type==="boolean"&&!n?.target?.checked?m.value="":m.value=l),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await $t(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,le(m)}else{const m=await pt();f.staticWidgetTree.html=m,le(m)}D.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function ze(){const n=document.querySelectorAll("link.vde-css"),t=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),a=[];t?.length&&t.forEach((i,s)=>{const o=i.value,r=document.createElement("link");r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",o),document.head.appendChild(r),a.push({order:s,url:i.value})}),n?.length&&n?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=a,D.updateActionHistories()}async function Je(){const n=document.querySelectorAll("script.vde-js"),t=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),a=[];t?.length&&t.forEach(async(i,s)=>{await new Promise((o,r)=>{const l=i.value,d=document.createElement("script");d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{o()},d.onerror=u=>{console.error("Failed to load script:",l,u),r(new Error(`Failed to load script: ${l}`))},document.body.appendChild(d),a.push({order:s,url:i.value})})}),n?.length&&n?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=a,D.updateActionHistories()}function aa(){ln(f.staticWidgetTree)}async function Hi(n){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const t=document.createElement("span");t.className="material-symbols-outlined",t.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter CSS URL",a.addEventListener("change",async()=>{await ze()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await ze(),await rn(n)},e.appendChild(t),e.appendChild(a),e.appendChild(i),e}let Sa=0;async function Et(n){const e=++Sa,t=n?n?.library?.js:f.widgetTree?.library?.js,a=document.getElementById("sortable-js-list");a.innerHTML="",ia(),t?.length&&t?.sort((i,s)=>Number(i?.order)-Number(s?.order));for(const i of t){if(e!==Sa){console.log("Skipping outdated call for",i.url);return}await new Promise((s,o)=>{const r=document.createElement("li");r.className="list-item",r.draggable=!0;const l=document.createElement("span");l.className="material-symbols-outlined",l.innerText="drag_handle";const d=document.createElement("input");d.type="text",d.value=i?.url,d.addEventListener("change",async()=>{await Je()});const u=document.createElement("button");u.className="remove-button",u.innerHTML='<span class="material-symbols-outlined">delete</span>',u.onclick=async function(){r.remove(),await Je(),await Et(n)},r.appendChild(l),r.appendChild(d),r.appendChild(u),a?.appendChild(r);const c=document.createElement("script");return c.classList.add("vde-js"),c.setAttribute("type","text/javascript"),c.setAttribute("src",i.url),c.setAttribute("crossorigin","anonymous"),c.onload=()=>{s()},c.onerror=g=>{console.error("Failed to load script:",i.url,g),o(new Error(`Failed to load script: ${i.url}`))},document.body.appendChild(c),r})}}function Ht(){const n=document.querySelectorAll("link.vde-css");n?.length&&n?.forEach(e=>{e.remove()})}function ia(){const n=document.querySelectorAll("script.vde-js");n?.length&&n?.forEach(e=>{e.remove()})}async function rn(n){const e=n?n?.library?.css:f.widgetTree?.library?.css,t=document.getElementById("sortable-list");t.innerHTML="",Ht(),e?.length&&e?.sort((a,i)=>Number(a?.order)-Number(i?.order)),e?.forEach(a=>{const i=document.createElement("li");i.className="list-item",i.draggable=!0;const s=document.createElement("span");s.className="material-symbols-outlined",s.innerText="drag_handle";const o=document.createElement("input");o.type="text",o.value=a.url,o.addEventListener("change",async()=>{await ze()});const r=document.createElement("button");r.className="remove-button",r.innerHTML='<span class="material-symbols-outlined">delete</span>',r.onclick=async function(){i.remove(),Ht(),await ze(),await rn(n)},i.appendChild(s),i.appendChild(o),i.appendChild(r),t?.appendChild(i);const l=document.createElement("link");return l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",a.url),document.head.appendChild(l),i})}function Nl(n){const e=document.getElementById("sortable-list");if(!e)return;let t=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(t=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),Ht(),await ze(),await rn(f.widgetTree?.library?.css?.length?f.widgetTree:n))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!t)return;const i=Dl(e,a.clientY),s=t;i===null?e.appendChild(s):e.insertBefore(s,i)})}function Dl(n,e){return[...n.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const s=i.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>a.offset?{offset:o,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}async function ln(n){const e=document.getElementById("sortable-list");e.innerHTML="";const t=document.getElementById("add-list");if(!e||!t){console.error("Required elements not found");return}if(n?.library?.css?.length)await rn(n);else{const s=await Hi(n);e.appendChild(s)}Nl(n);const a=document.getElementById("sortable-js-list");a.innerHTML="";const i=document.getElementById("add-js-list");if(!a||!i){console.error("Required elements not found");return}if(n?.library?.js?.length)await Et(n);else{const s=await Fi(n);a.appendChild(s)}Hl(n)}async function qi(n){const e=document.getElementById("sortable-list"),t=await Hi(n);e.appendChild(t)}async function Oi(n){const e=document.getElementById("sortable-js-list"),t=await Fi(n);e.appendChild(t)}async function Fi(n){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const t=document.createElement("span");t.className="material-symbols-outlined",t.innerText="drag_handle";const a=document.createElement("input");a.type="text",a.placeholder="Enter JS URL",a.addEventListener("change",async()=>{await Je()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Je(),await Et(n)},e.appendChild(t),e.appendChild(a),e.appendChild(i),e}function Hl(n){const e=document.getElementById("sortable-js-list");if(!e)return;let t=null;e.addEventListener("dragstart",a=>{a.target instanceof HTMLElement&&(t=a.target,a.target.classList.add("dragging"))}),e.addEventListener("dragend",async a=>{a.target instanceof HTMLElement&&(a.target.classList.remove("dragging"),ia(),await Je(),await Et(f.widgetTree?.library?.js?.length?f.widgetTree:n))}),e.addEventListener("dragover",a=>{if(a.preventDefault(),!t)return;const i=ql(e,a.clientY),s=t;i===null?e.appendChild(s):e.insertBefore(s,i)})}function ql(n,e){return[...n.querySelectorAll(".list-item:not(.dragging)")].reduce((a,i)=>{const s=i.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>a.offset?{offset:o,element:i}:a},{offset:Number.NEGATIVE_INFINITY}).element}function Ol(n){const e=n.toLowerCase();return fe.has(e)?Qe.STYLE:_l.has(e)?Qe.BOOLEAN:El.has(e)?Qe.FORM:Tl.has(e)?Qe.SPECIAL:Qe.FORM}function Fl(n,e){if(!n&&e==="Background Color")return"#FFFFFF";if(!n)return"#000000";if(n.startsWith("#"))return n;const t=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(t){const[a,i,s,o]=t;return"#"+[i,s,o].map(r=>{const l=parseInt(r).toString(16);return l.length===1?"0"+l:l}).join("")}return"#000000"}function Vi(n,e){if(!e)return console.warn("Attribute name is undefined"),"";if(n.classList.contains("fslayout-row")||n.firstChild instanceof HTMLElement&&n.firstChild.classList?.contains("fslayout-row"))return Ri(n,e);const t=e.toLowerCase();if(fe.has(t)||fe.has(e)){const a=fe.get(t)||fe.get(e);if(!a)return"";const i=n.style[a.property]||n.getAttribute(`data-${t}`);return t==="color"||t==="background-color"||t==="bg-color"||e==="Color"||e==="Background Color"?Fl(i,e):i||""}if(t==="elementcontent"){let a,i;return n?.childNodes?.length&&(a=Array.from(n?.childNodes)?.filter(s=>s?.nodeType===3),a?.length&&(i=a?.map(s=>s?.nodeValue?.trim()).join(""))),i?i?.trim():n?.textContent||""}return t==="classname"?n.classList.value?.replace(/wb-initial-empty/g,"")||"":n.getAttribute(t)||""}function Ri(n,e){const t=e.toLowerCase();return t==="class"||t==="classname"?Array.from(n.classList).filter(a=>!a.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):t==="align-items"?n.style.alignItems||"":t==="text-align"?n.style.textAlign||"":n.getAttribute(t)||""}function Vl(n,e,t){const a=e.toLowerCase();if(n.id){const i=n.getAttribute("data-attributes");if(i){const s=JSON.parse(i),o=s.find(r=>r.name===e);o&&((o.type==="array"||rt(e))&&(o.selected=t),o.value=t),n.setAttribute("data-attributes",JSON.stringify(s))}}if(fe.has(a)||fe.has(e)){const i=fe.get(a)||fe.get(e);if(!i)return;n.setAttribute(`data-${a}`,t),i.needsUnit&&t&&/^\d+$/.test(t)?n.style[i.property]=`${t}px`:n.style[i.property]=t;return}t?n.setAttribute(a,t):n.removeAttribute(a)}function sa(n,e){const t=n.closest(".spacing-tabs");if(!t)return;t.querySelectorAll(".spacing-tab-btn").forEach(s=>s.classList.remove("active")),n.classList.add("active");const a=t.nextElementSibling,i=a?.nextElementSibling;e==="margin"?(a?.classList.remove("hidden"),i?.classList.add("hidden")):(a?.classList.add("hidden"),i?.classList.remove("hidden"))}window.toggleSpacingBox=sa;let He=[],qt,mt="",La=!1,Ca="";const St="storeOwner",cn=async n=>{Zl(n),await Promise.all([Xl(n),Kl(n)]),za("projectId",n),Ja(),Ui()},Rl=async n=>{document.title=n.storeName||"Store",Ji(n.storeLogo),qt=n.mainPageId,mt=n.projectName,He=n.pagesList,localStorage.setItem(St,btoa(n.entityId)),za("projectId",n.projectId),Ja(),Ui()},Ui=()=>{window.addEventListener("popstate",()=>yn(window.location.href)),document.addEventListener("click",n=>{const t=n.target.closest("a");if(!t||t.target==="_blank"||t.hasAttribute("download")||t.getAttribute("rel")==="external"||n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||t.origin!==location.origin)return;const a=t.getAttribute("href");!a||a.startsWith("#")||a.startsWith("mailto:")||(n.preventDefault(),history.pushState({},"",a),yn(a))},!0),yn(window.location.href)},yn=async n=>{const{pathname:e}=new URL(n,window.location.origin);if(Ca==e)return;Ca=e;const t=zl(e),a=Ul(n),i=document.head.querySelectorAll("style#mystyleid");if(console.log("abc",e,He,t),t){const s=He.find(o=>o.path==t.route);Aa(s,{params:t?.params,queryParams:a}).then(()=>{Array.from(i).forEach(o=>o.remove())})}else if(e==="/"&&qt){const s=He.find(o=>o.id==qt);Aa(s,{params:{},queryParams:a}).then(()=>{Array.from(i).forEach(o=>o.remove())})}else{const s=He.find(o=>o.path=="/404");s?zi(s.page):document.querySelector("#app").innerHTML="<h1>404</h1>",Array.from(i).forEach(o=>o.remove())}document.getElementById("global-loader")?.classList.add("d-none")},Aa=async(n,e)=>{Gl(n),n.page?await zi(n,e):console.warn("No page content Found")};function Ul(n){const{searchParams:e}=new URL(n,window.location.origin),t={};for(const[a,i]of e.entries())t[a]?t[a]=Array.isArray(t[a])?[...t[a],i]:[t[a],i]:t[a]=i;return t}const zl=n=>{const a=[...He.map(i=>i.path)].sort((i,s)=>{const o=i.split("/").filter(Boolean),r=s.split("/").filter(Boolean),l=o.filter(u=>u.startsWith(":")).length,d=r.filter(u=>u.startsWith(":")).length;return l!==d?l-d:r.length-o.length});console.log("routes",a);for(let i=0;i<a.length;i++){const o=(a[i]?.startsWith("/")?a[i]:`/${a[i]}`).split("/").filter(Boolean),r=n.split("/").filter(Boolean);if(o.length!==r.length)continue;const l={};if(o.every((u,c)=>u.startsWith(":")?(l[u.slice(1)]=r[c],!0):u===r[c]))return{route:a[i],params:l}}return null},zi=async(n,e)=>{const t=document.querySelector("#app");t&&await $e(n?.page,t,e);let a=await Jl(Number(n?.id));await Ni(a?.data?.[`the_${W.PAGE_COMP_NAME}`])};async function Jl(n){return new Promise(async e=>{const t=await M();if(!t?.token)return null;const a=t?.token;let i=new P;i.conceptIds=[n],i.outputFormat=de,i.selectors=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_meta_title`,`the_${W.PAGE_COMP_NAME}_meta_description`,`the_${W.PAGE_COMP_NAME}_meta_keywords`,`the_${W.PAGE_COMP_NAME}_width`,`the_${W.PAGE_COMP_NAME}_type`,`the_${W.PAGE_COMP_NAME}_font_family`,`the_${W.PAGE_COMP_NAME}_font_size`,`the_${W.PAGE_COMP_NAME}_body`,`the_${W.WIDGET_COMP_NAME}_clean`],i.inpage=100,ce(i,a).subscribe(async s=>{s.length?e(s?.[0]):!Array.isArray(s)&&s?.data==null&&e({error:!0,message:"There is no data."})}).catch(s=>{const o=s?.message;e({error:!0,message:o})})})}const Gl=n=>{if(La)return;const e=new URL(window.location.href).hostname.split(".")[0].split("-")[1],t=Ql(e,n),a=new Blob([JSON.stringify(t)],{type:"application/json"}),i=URL.createObjectURL(a),s=document.createElement("link");s.rel="manifest",s.href=i,document.head.appendChild(s),La=!0};function Ql(n,e){return{name:`${mt||e.title||e.slug||n} - ${n}`,short_name:`${mt||n}`,start_url:location.origin+"/index.html",display:"standalone",theme_color:n?"#ff6600":"#ffffff",icons:[{src:`${location.origin}/icons/icon-192x192.png`,sizes:"192x192",type:"image/png"},{src:`${location.origin}/icons/icon-512x512.png`,sizes:"512x512",type:"image/png"}]}}const Kl=async n=>{try{localStorage.removeItem(St);const e=new P;e.name="entity",e.typeConnection="the_entity_s_project",e.reverse=!0;const t=new P;t.name="project",t.conceptIds=[n],t.freeschemaQueries=[e],t.outputFormat=ts;const a=await Ft(t,"");if(!a?.[0]?.the_project?.the_entity_s_project_reverse?.[0]?.id)return;a?.[0]?.the_project?.the_entity_s_project_reverse?.length==1&&localStorage.setItem(St,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()));for(let i=0;i<a?.[0]?.the_project?.the_entity_s_project_reverse?.length;i++)(a?.[0]?.the_project?.the_entity_s_project_reverse[i]).id!=102176333&&localStorage.setItem(St,btoa(a[0].the_project.the_entity_s_project_reverse[0].id.toString()))}catch(e){console.error(e)}};async function Zl(n){try{const e=new P;e.name="store",e.typeConnection="the_project_refers",e.selectors=["the_store_name","the_store_logo"];const t=new P;t.name="project",t.conceptIds=[n],t.freeschemaQueries=[e];const i=(await Ft(t,""))?.[0]?.the_project?.the_project_refers?.the_store,s=i?.the_store_name?.the_name;document.title=s||"Store",Ji(i?.the_store_logo?.the_logo)}catch(e){console.error(e)}}function Yl(n){return new Promise((e,t)=>{const a=new Image;a.crossOrigin="anonymous",a.src=n,a.onload=()=>{const s=document.createElement("canvas");s.width=s.height=512;const o=s.getContext("2d");o?.clearRect(0,0,s.width,s.height);const r=a.width/a.height;let l=512,d=512;r>1?d=512/r:l=512*r;const u=(512-l)/2,c=(512-d)/2;o?.drawImage(a,u,c,l,d);const g=s.toDataURL("image/png");e(g)},a.onerror=()=>{t(new Error("Image failed to load. Check CORS."))}})}async function Xl(n){const t=(await M())?.token;let a=new P;a.name="page",a.typeConnection=`the_${W.PROJECT_COMP_NAME}_${ie.PROJECT_PAGE_LINKER}`,a.selectors=[`the_${W.PAGE_COMP_NAME}_title`,`the_${W.PAGE_COMP_NAME}_slug`,`the_${W.PAGE_COMP_NAME}_body`];let i=new P;i.name="project",i.conceptIds=[n],i.selectors=[`the_${W.PROJECT_COMP_NAME}_name`,`the_${W.PROJECT_COMP_NAME}_main_page`],i.freeschemaQueries=[a],i.outputFormat=de;const s=await Ft(i,t);let o={mainPageId:s?.[0]?.data?.the_project?.the_project_main_page?.id,name:s?.[0]?.data?.the_project?.the_project_name?.data.the_name||"",pages:s?.[0]?.data?.the_project?.the_project_s_page?.map(r=>({id:r?.id,title:r?.data?.the_page?.the_page_title?.data?.the_title||"",path:r?.data?.the_page?.the_page_slug?.data?.the_slug||"",page:r?.data?.the_page?.the_page_body?.id}))||[]};qt=o.mainPageId,mt=o.name,He=o.pages}function Ji(n=""){var e=document.querySelector("link[rel~='icon']");e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e),setTimeout(()=>e?.remove(),1e4)),n&&Yl(n).then(t=>{e.href=t}).catch(t=>{console.error(t),e.href="https://boomconcole.com/freeschema/127b5f42-f453-4904-bf4d-d2a6abc9327c.png"})}const wn=[{path:"/",linkLabel:"Home",content:async()=>(await ke(()=>import("./home.index-THwRP7NR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))).default},{path:"/preview",linkLabel:"Preview",content:async()=>(await ke(()=>import("./preview.index-Dm0XE7Q1.js"),__vite__mapDeps([13,4,1]))).default},{path:"/page-preview/:id",linkLabel:"Page Preview",content:async()=>(await ke(()=>import("./page-preview.index-n8ywcK97.js"),__vite__mapDeps([14,4,9,6,7,8,10,11,15]))).default,isAuthenticated:!0},{path:"/documentation",linkLabel:"Documentation",content:async()=>(await ke(()=>import("./documentation.index-iXOfYkii.js"),__vite__mapDeps([16,1,6,7,8,17,18,2,3,4,5,9,10,11,19]))).default},{path:"/subscription",linkLabel:"Subscription",content:async()=>(await ke(()=>import("./subscription.index-B4UqVYeq.js"),__vite__mapDeps([20,4,1,2,3,5,9,6,7,8,10,11,19]))).default,isAuthenticated:!0},{path:"/video-tutorial",linkLabel:"videos",content:async()=>(await ke(()=>import("./video-tutorial.index-BfZCYm7I.js"),__vite__mapDeps([21,1,2,3,4,5,9,6,7,8,10,11,22]))).default},{path:"/Community",linkLabel:"Community",content:async()=>(await ke(()=>import("./community.index-tNkCpl1E.js"),__vite__mapDeps([23,4,1,2,3,5,9,6,7,8,10,11,24]))).default}],Wa=document.getElementById("app"),ec=()=>{let n=localStorage?.getItem("profile")||"";return n?!!JSON.parse(n)?.token:!1},tc=n=>new RegExp("^"+n.replace(/:\w+/g,"(.+)")+"$"),xa=n=>{const e=n.result.slice(1),t=Array.from(n.route.path.matchAll(/:(\w+)/g)).map(a=>a[1]);return Object.fromEntries(t.map((a,i)=>[a,e[i]]))},ka=async()=>{const n=new URLSearchParams(location.search);return Object.fromEntries(n.entries())};async function oa(){let e=wn.map(i=>({route:i,result:location.pathname.match(tc(i.path))})).find(i=>i.result!==null);if(!e)e={route:wn.find(s=>s.path==="/404"),result:[location.pathname]};else if(e?.route?.isAuthenticated&&!ec()){const o=wn.find(r=>r.path==="/");e={route:o,result:o?.path},history.pushState(null,"",o?.path)}const t=await e.route.content({...await xa(e),...await ka()}),a=new t({...await xa(e),...await ka()});Wa.innerHTML="",await a?.mount(Wa)}const Gi=async n=>{const e=document.getElementById("global-loader");e?.classList.remove("d-none");try{history.pushState(null,"",n),await oa()}finally{e?.classList.add("d-none")}},Qi=async n=>{window.history.pushState({route:n},"",n),oa()},nc=()=>{const n=window.location.pathname+window.location.search;Gi(n)},ac=()=>{customElements.define("router-link",class extends HTMLElement{constructor(){super(),this.handleClick=this.handleClick.bind(this),this.href&&this.attachShadow({mode:"open"})}connectedCallback(){if(this.href){const n=document.createElement("a");n.href=this.href,this.forwardAttributes(n),n.setAttribute("part","link");const e=document.createElement("slot");n.appendChild(e),this.shadowRoot&&this.shadowRoot.appendChild(n),this.addEventListener("click",this.handleClick),n.href&&this.setAttribute("href",n.href)}else this.addEventListener("click",this.handleClick)}forwardAttributes(n){["target","download","rel","hreflang","type","title","tabindex","accesskey"].forEach(t=>{this.hasAttribute(t)&&n.setAttribute(t,this.getAttribute(t))})}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}handleClick(n){const e=this.getAttribute("target"),t=this.getAttribute("href");e==="_blank"||n.ctrlKey||n.metaKey||n.button===1||this.hasAttribute("download")||t&&!t.startsWith("http")&&!t.startsWith("//")&&(n.preventDefault(),Gi(t))}set href(n){this.setAttribute("href",n);const e=this.shadowRoot&&this.shadowRoot.querySelector("a");e&&(e.href=n)}get href(){return this.getAttribute("href")}set target(n){n&&this.setAttribute("target",n)}get target(){return this.getAttribute("target")}})};function ic(){nc(),ac(),window.addEventListener("popstate",oa)}const sc=async()=>{const n=["localhost","visualwidget.boomconcole.com","develop.freeschema.com"],e=window.location.hostname,t=e.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(t)cn(parseInt(t));else if(n.includes(e))await ke(()=>import("./initialLoadWICO-B1MgbOCJ.js"),__vite__mapDeps([25,4,3,5,9,6,7,8,10,11])),ic();else try{oc(e)}catch(a){console.error(a),dn()}};function dn(){const n=document.getElementById("global-loader");n&&n.setAttribute("style","display: none !important");const e=document.getElementById("app");e&&(e.innerHTML="<h1>404</h1>")}function oc(n=""){try{const e=JSON.parse(sessionStorage.getItem("cacheServers")??"[]")||[],t=e.length>0&&e?.[0]!="https://boomconsole.com"?e[0]:"https://deploy.freeschema.com",a=new URLSearchParams;a.append("url",n),console.log("server",t),fetch(t+"/api/project-deploy",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(async i=>{const s=await i.json();Rl(s.data)}).catch(i=>{console.error(i),Ma(n);try{const o=JSON.parse(sessionStorage.getItem("domainRecord")??"{}");if(o&&o.expiresAt>Date.now()){const r=o.value;r&&cn(parseInt(r));return}}catch(s){console.error(s),dn()}})}catch(e){console.error(e),Ma(n)}}function Ma(n=""){const e=new URLSearchParams;e.append("url",n),fetch(G.baseURL+"/dns/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}).then(async t=>{const a=await t.json();if(!a)rc();else{const i=a?.startsWith("http")?a:"http://"+a,o=new URL(i).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(o)cn(parseInt(o));else throw new Error("Path Not Valid")}}).catch(t=>{console.error(t),dn()})}function rc(){fetch(G.baseURL+"/cname").then(async n=>{const e=await n.json()||[];if(e?.[0]){const t=e[0]?.startsWith("http")?e[0]:"http://"+e[0],i=new URL(t).hostname?.split(".")?.[0]?.match(/preview-(\d+)/)?.[1];if(i)cn(parseInt(i));else throw new Error("Path Not Valid")}else throw new Error("Doamin Not Found")}).catch(n=>{console.error(n),dn()})}let Ki=null;window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Ki=n});const lc={activate:G.enableSW,scope:"/",pathToSW:"/serviceWorker.bundle.js",manual:!0};await Ts();ns(G?.boomURL,G?.aiURL,"",G?.baseNodeUrl,void 0,"widget_conceptualizer",lc,{logApplication:!1,logPackage:!1,isTest:!1,accessTracker:!1},{logserver:G.logserver});const cc=await M();Ia(cc?.token);sc();window.PWAInstallHandler=(()=>{let n=null,e=null,t=null;return{init:({onInstall:o,onDismiss:r})=>{e=o,t=r,n=Ki,window.addEventListener("appinstalled",()=>{console.log("PWA installed successfully!"),e&&e()})},isInstalled:()=>window.matchMedia("(display-mode: standalone)").matches||window.navigator?.standalone,showInstallPrompt:()=>{console.log("deferedPrompt",n),n&&(n.prompt(),n.userChoice.then(o=>{o.outcome==="accepted"?(console.log("User installed the PWA."),e&&e()):(console.log("User dismissed the install prompt."),t&&t()),n=null}))}}})();export{_e as A,be as B,W as C,wc as D,dt as E,Li as F,kr as G,G as H,Ni as I,Te as J,Qi as K,me as L,Gi as M,fc as N,Ge as P,f as S,Yr as T,Vo as _,ct as a,Zn as b,V as c,te as d,nt as e,Xr as f,M as g,Sn as h,Fn as i,fi as j,sn as k,Ue as l,D as m,qe as n,qn as o,ia as p,yc as q,Ht as r,uo as s,C as t,bc as u,je as v,q as w,Ei as x,vc as y,_c as z};
