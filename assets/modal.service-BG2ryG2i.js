import{V as bn,x as z,m as he,w as fi,R as zn,y as da,p as He,Q,v as yi,l as ua,h as ma,W as ga,o as N,a as te,$ as be,I as Jn,u as Gn,X as K,Z as j,F as fe,A as ye,q as Se,j as wi,r as gt,s as pa,c as vi,C as De,e as re,n as Te,z as xe,D as ke,E as Ne,k as G,G as ln,J as ha,H as Qn,K as fa,i as bi,g as ya}from"./mftsccs-browser-CuLpDqs0.js";import{E as ae,b as $t,o as jt,j as wa,a as Ht,c as _i,l as Ei,d as Ti,e as Si,f as Ie,k as Dt,h as Ci,g as Li}from"./codemirror-B3vgQINq.js";import{a as Wi,u as va,g as I,e as ie,b as V,c as O,C as M,L as oe,f as Ai,d as et,h as xi,A as Nt}from"./index-BZ3rMnwJ.js";import{J as qt,q as Mi}from"./vendor-Cs_0E_Xj.js";import{z as ki}from"./eslint4b-BLWGvIOa.js";import{l as pt,p as _n,r as En,a as Ii,b as Pi}from"./prettier-ClL2wQep.js";import{C as Bi}from"./ckeditor-Cw9bcqxY.js";const $i=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return li},get addJSLibrary(){return ci},get applyPageProperties(){return Fr},get applyPageProperty(){return ve},get filterChildrenByWrapper(){return ii},get getAttributeType(){return Jr},get getAttributeValue(){return ui},get getElementAttribute(){return Hr},get getElementAttributeDetails(){return qn},get getElementData(){return ni},get getLayoutAttributeValue(){return mi},get getPropertiesByIdFromStorage(){return yt},get handleDirectContentEdit(){return Dr},get handlePageProperties(){return si},get initializeApp(){return en},get initializeLibrary(){return Fn},get listJSLibraries(){return wt},get removeCSSLibrariesFromHead(){return Bt},get removeJSLibrariesFromHead(){return On},get setAttributeValue(){return Qr},get toggleSpacingBox(){return Vn},get updateAttribute(){return qr},get updateCSSLibrary(){return Ve},get updateElementAttribute(){return Kt},get updateElementAttributeViaEditor(){return Nr},get updateJSLibrary(){return Re},get updateMetaTag(){return mt},get updateMultipleElementAttribute(){return oi},get updateWidgetTypeValue(){return ai}},Symbol.toStringTag,{value:"Module"}));async function dl(){return"WICO"}async function Ae(){const a=await Wi();await bn(a?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await va("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}const ht=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Tn=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],cn=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],ji=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let Zn=[],Yn=[];async function Hi(a){let e="";for(const n in a)if(Object.prototype.hasOwnProperty.call(a,n)){const t=a[n];e+=` ${n}="${t}" `}return e}async function Di(a,e){const n=new z;n.composition=a,n.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const t=await he([n],e),i=t?.data?.the_widget?.the_widget_html?.[0]?.id,s=t?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,o=t?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!i)return{html:"",css:"",js:""};const l=await fi(i,["contain_s"]);Zn=await zn(l.externalConnections),Yn=await zn(l.internalConnections);let r=await ba(i,Zn,Yn);const d=document.createElement("div");return d.innerHTML=r,{html:(d?.querySelector(".widget-wrapper")).innerHTML,css:s||"",js:o||""}}async function ba(a,e,n){try{let t="",s=qi(e)[a];if(s!=null){let o=Fi(s);const r=(await Qa())?.map(g=>{const m=g?.id,p=g?.data?.the_element?.the_element_name?.[0]?.data?.the_name,h=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,v=g?.data?.the_element?.the_element_void?.[0]?.data?.the_void,W=g?.data?.the_element?.the_element_s_attribute?.map(E=>{const w=E?.data?.the_attribute,y=w?.the_attribute_name?.[0]?.data?.the_name,_=w?.the_attribute_type?.[0]?.data?.the_type,S=w?.the_attribute_value?.[0]?.data?.the_value;return{name:y,type:_,value:S}});return{id:m,name:p,tag:h,void:v,attributes:W}}),d=[...Tn,...cn],c=(await I())?.userId;for(let g=0;g<o.length;g++){const m=o[g];if(m.ofTheConceptId==a){const p=await Ni(m.toTheConceptId,n),h=Object.keys(p.data)[0],v=p.data[h],T=ht.includes(h),W=await Hi(v?.attributes||[]),E=r.find(y=>y.tag===h.toLowerCase().trim()),w=v?.attributes;for(const y in w){const _=d.find(C=>y===C?.name?.toLowerCase().trim()),S=w[y],b=_?.type;E.attributes=E?.attributes?.map(C=>(C?.name==="className"&&y==="class"?C.value=S:C?.name==="elementContent"?C.value=v?.innerText:y===C?.name&&(b==="array"?C.selected=S:b==="boolean"?C.value="":C.value=S),C))}if(h!="text"){const y=await da(p.id,c);y?.length&&await bn(y?.[0]?.id);const _={[`wdgt${p.id}`]:E},S=await He(_,null,null,null,c);console.log("elementAttributeComp ->",S),t+=`
            <div id="wdgt${p.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${E?.id}">
            <${h} data-cc-id="${p.id}" `+W+`${T?"/></div>":">"}`,t+=await ba(m.toTheConceptId,e,n)}(v.contains=="false"||h=="text")&&(t+=" "+v.innerText+" "),!T&&h!="text"&&(t+=`</${h}></div>`)}}}return t}catch(t){console.error("error converting html",t)}}async function Ni(a,e){var n=[],t={},i=e;n=i;for(var s=[],o=0;o<n.length;o++)s.includes(n[o].ofTheConceptId)||s.push(n[o].ofTheConceptId);var l=await Q(a);if(l.id==0&&a!=null&&a!=null){var r=await Q(a);l=r}var d=await yi(a,n,s),u=l?.type?.characterValue??"";t[u]=d;var c={};return c.data=t,c.id=a,c}function qi(a){return a.reduce((e,n)=>{const{ofTheConceptId:t}=n;return e[t]||(e[t]=[]),e[t].push(n),e},{})}function Fi(a){const e=new Map;a.forEach(s=>{e.set(s.id,s)});const n=[],t=new Set,i=s=>{if(!t.has(s.id)){t.add(s.id),n.push(s);for(const o of a)o.orderId==s.id&&i(o)}};return a.forEach(s=>{s.orderId==1e3&&i(s)}),n}async function Oi(a,e){var n=[];try{var t=new Headers;t.append("Content-Type","application/json"),t.append("Authorization",`Bearer ${e}`),t.append("Randomizer",ua.BASE_RANDOMIZER.toString());const i=await fetch(ie.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:t,body:JSON.stringify({id:a})});return i.ok?await i.json():(console.log("recursive search error ",i.status),n)}catch(i){console.log(i)}}async function _a(a,e,n=1e3,t){const i=a.userId,r=await ma("contain_s",999,999,i);return await ga(a.id,e.id,r.id,n)}const Vi="the_widget";async function Ri(a,e,n){return await Ui(a,e,n)}async function Ui(a,e,n){const s=new DOMParser().parseFromString(a,"text/html").body,o=await He({[Vi]:{}});e&&await zi(e,o),n&&await Ji(n,o);const l=await He({widgetHTML:{}});await V(o,l,"html");const r=await Ea(s.children[0],l);return await _a(l,r),await N.SyncDataOnline(),o}async function zi(a,e){const t=(await I())?.userId,s=await te("the_widgetCSS",a,!0,t,4,999);await V(e,s,"css")}async function Ji(a,e){const t=(await I())?.userId,s=await te("the_widgetJS",a,!0,t,4,999);await V(e,s,"js")}async function Ea(a,e){console.log("parentConcept ->",e);const n={};if(n.tagName=a?.tagName?.toLowerCase(),a?.attributes?.length>0){n.attributes={};for(let s of a.attributes)n.attributes[s.name]=s.value}a?.textContent?.trim()&&(n.text=a.textContent.trim());let t={[n.tagName?n.tagName:"text"]:{contains:a?.children?.length?"true":"false",attributes:n.attributes||"",innerText:a?.children?.length?"":n.text||""}};const i=await He(t);if(a?.childNodes?.length>0){n.children=[];let s=[],o=-1,l,r;for(let u of a.childNodes)if(!(u.nodeType===Node.TEXT_NODE&&u.textContent?.trim()==="")&&!(a.children.length===0&&u.nodeType===Node.TEXT_NODE)){if(u.nodeType===Node.TEXT_NODE){let c={text:{contains:!1,attributes:"",innerText:u.textContent?.trim()}};const g=await He(c);s.push({parentConcept:i,childConcept:g,orderId:r})}else u.nodeType===Node.ELEMENT_NODE&&(l=await Ea(u,i),s.push({parentConcept:i,childConcept:l,orderId:r}));o>=0&&(s[o]={...s[o],orderId:l?.id}),o++}let d=1e3;for(let u=0;u<s.length;u++){const c=s[u];d=(await _a(c.parentConcept,c.childConcept,d)).id}}return i}class Gi{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
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
    `}}const Qi="widget-conceptualizer",Zi="0.0.0",Yi="module",Ki={dev:"vite --force",build:"tsc && vite build",preview:"vite preview"},Xi={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},es={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.144-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},Kn={name:Qi,private:!0,version:Zi,type:Yi,scripts:Ki,devDependencies:Xi,dependencies:es};function ts(a,e,n,t){switch(n){case"int":a=a.sort(function(i,s){return parseInt(i[e])>parseInt(s[e])?1:parseInt(i[e])<parseInt(s[e])?-1:0});break;default:a=a.sort(function(i,s){return i[e].toLowerCase()>s[e].toLowerCase()?1:i[e].toLowerCase()<s[e].toLowerCase()?-1:0})}}function dn(a){let e={};for(let n=0;n<a.length;n++){const t=a[n];t?.type&&t?.type!=="submit"&&(e[t.name]=t?.value)}return e}function ns(a){const e=Kn.dependencies||{},n=Kn.devDependencies||{};return e[a]||n[a]||null}async function Ze(a,e,n,t,i){await be(a,e);const s=await te(n,t,!1,i,4,999);let o=await ma(e,999,999,i);return await ga(a,s?.id,o.id,1e3,o.characterValue,i),"Delete and update completed"}class Ue{async generateSlug(e){const n=await I();let t=new z;t.composition=n?.entityId,t.fullLinkers=["the_entity_s_page"],t.inpage=100;let i=new z;i.fullLinkers=["the_page_slug"],i.inpage=100;const s=[t,i];let o=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return await Jn(s,"",Gn).subscribe(l=>{const r=l?.the_entity?.the_entity_s_page?.map(c=>c?.the_page?.the_page_slug?.[0]?.the_page_slug)||[];let d=o,u=o.match(/^(.*?)(?:-(\d+))?$/);if(u){d=u[1];let g=(u[2]?parseInt(u[2],10):0)+1;for(;r.includes(o);)o=`${d}-${g++}`}}),o}async checkSlugAvailablity(e){const n=await I();let t=new z;t.composition=n?.entityId,t.fullLinkers=["the_entity_s_page"],t.inpage=100;let i=new z;i.fullLinkers=["the_page_slug"],i.inpage=100;const s=[t,i];let o=!0;return await Jn(s,"",Gn).subscribe(l=>{(l?.the_entity?.the_entity_s_page?.map(d=>d?.the_page?.the_page_slug?.[0]?.the_page_slug)||[]).includes(e)&&(o=!1)}),o}async savePage(e,n,t){const i=await O(M.PAGE_COMP_NAME,n,e),s=await K(t);return await V(s,i,oe.ENTITY_PAGE_LINKER),i}async renamePage(e,n,t){return await Ze(Number(n),"the_page_title","title",e?.title,t),await Ze(Number(n),"the_page_slug","slug",e?.slug,t),"renamed"}async getAllPages(e){const n=await I(),t=n?.token;let i=new z;e?i.composition=e:i.composition=n.entityId,i.fullLinkers=[`the_entity_${oe.ENTITY_PAGE_LINKER}`],i.inpage=100;let s=new z;return s.fullLinkers=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_body`],s.inpage=100,(await he([i,s],t))?.data?.the_entity?.[`the_entity_${oe.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const n=await I();if(!n?.token)return null;const t=n?.token;let i=new z;i.composition=e,i.fullLinkers=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_meta_title`,`the_${M.PAGE_COMP_NAME}_meta_description`,`the_${M.PAGE_COMP_NAME}_meta_keywords`,`the_${M.PAGE_COMP_NAME}_width`,`the_${M.PAGE_COMP_NAME}_type`,`the_${M.PAGE_COMP_NAME}_font_family`,`the_${M.PAGE_COMP_NAME}_font_size`,`the_${M.PAGE_COMP_NAME}_body`],i.inpage=100;let s=new z;return s.fullLinkers=[`the_${M.WIDGET_COMP_NAME}_clean`],s.inpage=100,await he([i,s],t)}async getPageById(e){return new Promise(async n=>{const t=await I();if(!t?.token)return null;const i=t?.token;let s=new j;s.conceptIds=[e],s.outputFormat=fe,s.selectors=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_meta_title`,`the_${M.PAGE_COMP_NAME}_meta_description`,`the_${M.PAGE_COMP_NAME}_meta_keywords`,`the_${M.PAGE_COMP_NAME}_width`,`the_${M.PAGE_COMP_NAME}_type`,`the_${M.PAGE_COMP_NAME}_font_family`,`the_${M.PAGE_COMP_NAME}_font_size`,`the_${M.PAGE_COMP_NAME}_body`,`the_${M.WIDGET_COMP_NAME}_clean`],s.inpage=100,ye(s,i).subscribe(async o=>{if(o.length)n(o?.[0]);else if(!Array.isArray(o)&&o?.data==null){const l="There is no data.";L.infoMessageToast(l,4),n({error:!0,message:l})}}).catch(o=>{const l=o?.message;L.errorToast(`${l}`,4),n({error:!0,message:l})})})}async updatePageField(e,n,t){const i=await I(),s=`the_${M.PAGE_COMP_NAME}_${e}`;await be(t,s);const o=await Q(t),l=await te(`${e}`,`${n}`,!1,i.userId,4,999);await V(o,l,e),await N.SyncDataOnline()}async deletePage(e){await Se(e)}}class Ta{_pagesService;constructor(){this._pagesService=new Ue}async getPagesListHTML(){window.pageHandler=Io;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(t=>{let i=t?.data?.[`the_${M.PAGE_COMP_NAME}`],s=i?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,o=i?.[`the_${M.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
            <li class="page-item">
              <router-link class="page_title" href="?page-id=${t.id}" data-pageId="${t.id}" onclick="pageHandler(event)">
                <span><img src="./images/icons/pages-white.svg" alt="" class="icon" /></span>
                  ${s}
              </router-link>
                  <!-- Three-Dot Dropdown Icon -->
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${t?.id})" title="Options"> more_vert </span>

              <!-- Dropdown Menu -->
              <ul class="dropdown-menu" id="dropdown-menu-${t?.id}" data-slug="${o}", data-title="${s}">
                <li class="d-flex align-items-center justify-content-between " id="fs-rename-page-button" data-id=${t?.id}>
                  <span class="pe-none">Rename</span>
                  <span class="material-symbols-outlined pe-none">edit</span>
                </li>
                <li class="d-flex align-items-center justify-content-between" id="fs-duplicate-page-button" data-id=${t?.id}>
                  <span class="pe-none">Duplicate</span>
                  <span class="material-symbols-outlined pe-none">file_copy</span>
                </li>
                <li class="d-flex align-items-center justify-content-between delete-icon" id="fs-delete-page-button" data-id=${t?.id}>
                  <span >Delete</span>
                  <span class="material-symbols-outlined " >delete </span>
                </li>
                <li class="d-flex align-items-center justify-content-between"  onclick="downloadPage(${t?.id})">
                  <span>Download</span>
                  <span class="material-symbols-outlined">download </span>
                </li>
              </ul>
             </li>
          `}).join(""):`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No pages created yet!</p>
            </li>
          `}catch(e){return console.error("error",e),e?.status===401&&Ae(),`
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
    `}getEditPageSidebarHTML(e,n,t){return`
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
              <input data-id="${t.id}" class="form-control" name="slug" type="text" placeholder="page slug" value="${t.name}" />
            </p>
          </form>
        </div>
      </div>
    `}}const as=(()=>{const a=()=>{document.querySelectorAll("#navBarContainer > span").forEach(o=>{o.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(o=>{o.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(o=>{o.remove()})};return{toggle:i=>{const s=i.target,o=s?.dataset?.id;if(s.classList.contains("activeNavigationIcon")){a();return}if(o){document.querySelectorAll("#navBarContainer > span").forEach(c=>{c.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(c=>{c.classList.remove("navActive")});const d=document.getElementById(o);document.querySelector(`[data-id='${o}']`)?.classList.add("activeNavigationIcon"),d?.classList.add("navActive"),o=="fs-all-pages-list"&&new kn().initPagesSidebar()}},collapseNavbar:i=>{const s=i.target;document.querySelectorAll("#navBarContainer > span").forEach(r=>{r.classList.remove("activeNavigationIcon")}),document.getElementById(s.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(r=>{r.classList.remove("navActive")})},checkForActiveNavigation:()=>{const i=document.querySelector(".activeNavigationIcon");if(i){const s=i.dataset?.id||"";document.getElementById(s)?.classList.remove("navActive")}},resetNavigationBar:a}})();function bt(a){return new Promise(e=>{const n=document.createElement("div");n.className="custom-confirm-modal",n.innerHTML=`
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content h-50">
                    <div class="modal-body">
                        <p>${a}</p>
                    </div>
                    <div class="modal-footer p-2 justify-content-between">
                        <button type="button" id="confirm-yes" class="btn btn-primary mx-3">Yes</button>
                        <button type="button" id="confirm-no" class="btn btn-secondary mx-3" data-bs-dismiss="modal">No</button>
                    </div>
                    </div>
                </div>
        `,n.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(n),e(!0)}),n.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(n),e(!1)}),document.body.appendChild(n)})}class R{static staticElement;static previousSelectedStaticElement}function _t(){const a=document.getElementById("select-box");a.style.display="none"}function Xn(){const a=document.getElementById("select-box");Ge(),a.style.transition="none",Et()}function Et(){const a=R?.staticElement;if(a){const e=a.getBoundingClientRect(),n=e.left,t=e.top,i=document.getElementById("select-box");i.style.display="block",i.style.width=a.offsetWidth+"px",i.style.height=a.offsetHeight+"px",i.style.top=`calc(${t}px)`,i.style.left=`calc(${n}px)`}}function pe(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=t=>{t.removeEventListener("click",Je),t.removeEventListener("mouseenter",st),t.removeEventListener("mouseleave",Ge)};e.forEach(t=>{(!t.closest(".added-widget-container")||t.classList.contains("added-widget-container"))&&n(t)}),e.forEach(t=>{t.classList.contains("fslayout-row")?(t.addEventListener("click",function(i){i.target===t&&(i.preventDefault(),i.stopPropagation(),Je(i))}),t.addEventListener("mouseenter",st),t.addEventListener("mouseleave",Ge)):t.classList.contains("fslayout-col")?t.addEventListener("click",function(i){if(i.target===t){i.preventDefault(),i.stopPropagation();const s=t.closest(".fslayout-row");if(s){const o=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(o,"target",{value:s}),Je(o)}}}):t.closest(".fslayout-col")?(t.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Je(i)}),t.addEventListener("mouseenter",st),t.addEventListener("mouseleave",Ge)):(t.closest(".edited-widget-container")||!t.closest(".added-widget-container")||t.classList.contains("added-widget-container"))&&(t.addEventListener("click",function(i){i.preventDefault(),i.stopPropagation(),Je(i)}),t.addEventListener("mouseenter",st),t.addEventListener("mouseleave",Ge))})}function is(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=t=>{t.removeEventListener("click",Je),t.removeEventListener("mouseenter",st),t.removeEventListener("mouseleave",Ge)};e.forEach(t=>{(!t.closest(".added-widget-container")||t.classList.contains("added-widget-container"))&&n(t)})}class Le{static instance;static events=new Map;constructor(){}static getInstance(){return Le.instance||(Le.instance=new Le),Le.instance}static subscribe(e,n){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(n)}static publish(e,n){this.events.has(e)&&this.events.get(e).forEach(t=>t(n))}static unsubscribe(e,n){if(this.events.has(e)){const t=this.events.get(e),i=t.indexOf(n);i>-1&&t.splice(i,1)}}}class ss extends wi{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=Le.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),n=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(n),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),Le.subscribe("page:elementClick",t=>{this.handlePageElementClick(t)}),Le.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),n=this.buildTree(e);n&&this.treeRoot&&this.treeRoot.appendChild(n)}getHtml(){return""}handlePageElementClick(e){let n=e;for(;n&&!this.treeItems.has(n);)n=n.parentElement;if(n){const t=this.treeItems.get(n);if(t){document.querySelectorAll(".tree-item").forEach(s=>{s.classList.remove("active")}),t.classList.add("active"),t.scrollIntoView({behavior:"smooth",block:"center"});let i=t.closest(".tree-node")?.parentElement;for(;i;){if(i.classList.contains("children")&&i.classList.contains("hidden")){i.classList.remove("hidden");const s=i.previousElementSibling?.querySelector(".toggle-btn");s&&(s.innerHTML="▼")}i=i.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const n=document.createElement("div");n.className="tree-node";const t=document.createElement("div");t.className="tree-item",this.treeItems.set(e,t);const i=e.tagName.toLowerCase(),s=e.id?`#${e.id}`:"",o=Array.from(e.classList).map(r=>`.${r}`).join("");if(e.children.length>0){const r=document.createElement("button");r.className="toggle-btn",r.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',r.onclick=d=>{d.preventDefault(),d.stopPropagation();const u=n.querySelector(".children"),c=u.classList.contains("hidden");u.classList.toggle("hidden"),r.innerHTML=c?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},t.appendChild(r)}o.includes(".added-widget-container")&&t.classList.add("widget-tree-node");const l=document.createElement("div");if(l.classList.add("text-truncate"),l.innerHTML=`
      <span class="element-tag">${i}</span>
      <span class="element-id">${s}</span>
      <span class="element-class">${o}</span>
    `,t.appendChild(l),t.onmouseenter=()=>this.handleHover(e),t.onmouseleave=()=>this.handleHover(null),t.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},n.appendChild(t),e.children.length>0){const r=document.createElement("div");r.className="children hidden",Array.from(e.children).forEach(d=>{if(d instanceof HTMLElement){const u=this.buildTree(d);u&&r.appendChild(u)}}),n.appendChild(r)}return s!=="#widget-details"?n:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const n=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(t=>{this.isAllExpanded?t.classList.remove("hidden"):t.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(t=>{t.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function ce(){const a=document.getElementById("tree-root");a.innerHTML="";const e=f.staticWidgetTree.html,n=document.querySelector(".toggle-all-btn");e?(n.style.display="flex",new ss().mount(a)):(n.style.display="none",a.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class un{static navbar}function os(a){return a?.widgetcodeId}async function Sa(a,e,n=!0,t){let i=new gt;i.html=a.html,i.widgetState={...t},i.widgetType=a.type,i.componentDidMountFunction=a.before_render,i.addEventFunction=a.after_render,i.mountChildWidgetsFunction=a.mount_child,e.innerHTML="";let s=e;if(n=!1,s&&(await i.mount(s),a.widget=i,a.children.length>0&&i.childWidgetElement?.length>0))for(let o=0;o<a.children?.length;o++){let l=a.children[o];for(let r=0;r<i.childWidgetElement.length;r++){let d=i.childWidgetElement[r];if(l.wrapper===d.id){const u=q.clearDraggedWidget(l),c=await Sa(u,d,n,i.widgetState);i.childWidgets.push(c),i.css=i.css+c.css+`#${l.wrapper} { ${l.css} }`,c.dataChange(g=>{let m=g?.type?.characterValue;m&&(i.childrenData[m]=g)})}}}return i}function tn(a,e,n=!1,t){let i=Date.now();const s=document.createElement("div");return s.innerHTML=`<div id="wdgtcopy${i}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,n==!1&&e!=0&&e!=null&&e!=null?(a.insertBefore(s.firstChild,t),document.getElementById(`wdgtcopy${i}`)?document.getElementById(`wdgtcopy${i}`):a.querySelector(`#wdgtcopy${i}`)):a}const qe=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],$e=["span","a","img","button","input","label","textarea","select"],rs=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],ea={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...$e]},h2:{accepts:[...$e]},h3:{accepts:[...$e]},h4:{accepts:[...$e]},h5:{accepts:[...$e]},h6:{accepts:[...$e]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...$e]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},ls=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function Tt(a,e){const n=a.target,t=a.target;let i=null;for(const r of t.children){const d=r.getBoundingClientRect();if(a.pageY<d.top+window.scrollY){i=r;break}}if(n.classList.remove("dragging-area"),cs(n,"added-widget-container"))return{status:!1,message:"Cannot be dropped inside WIDGET!"};const o=e?.data_type||"",l=a?.target?.tagName?.toLowerCase();return ht.includes(l)?{status:!1,message:`${o} cannot be dropped inside ${l} tag.`}:qe.includes(l)&&ea[l]?.accepts?.length&&!ea[l]?.accepts?.includes(o)?{status:!1,message:`${o} cannot be dropped inside ${l} tag.`}:{status:!0,message:"",elementBelowDrag:i}}function cs(a,e){for(;a;){if(a.classList&&a.classList.contains(e))return!0;a=a.parentElement}return!1}class se{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(n=>n.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const n=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${n}`)).slice(0,-1).forEach(i=>i.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(n),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:i}=n;return i.ranges.length===0?!1:(t({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const n=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,n.from-6),n.from)!=="tsccs.")return null;const i=Object.keys(pa).filter(s=>s.startsWith(n.text));return i.length>0?{from:n.from,to:n.to,options:i.map(s=>({label:s,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your code here */",extensions:[$t,jt,wa(),Ht({activateOnTyping:!0}),_i.data.of({autocomplete:this.tsccsCompletions}),Ei(),Ti(Si(new ki,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),Dt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(n=>{if(n.docChanged){const t=n?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=t;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=t;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=t;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=t;break;default:const s=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(o=>`${o.slug}-editor-split`===this.editorContainerId);s?.length&&(s[0].code=t)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function Ca(a){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",a)try{const n=await pt.format(a,{parser:"babel",plugins:[_n,En],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=a}}async function ds(){const a=new se("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await a.initializeEditor()}async function La(a,e){const n=document.querySelector('.cm-content[data-language="css"]');if(n.innerHTML="/* Write your CSS here */",e){let t=document.querySelector(".child-widget-style");t||(t=document.createElement("style"),t.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",t)),t.textContent+=e}if(a)try{const i=(n.textContent+a).split("/* Write your CSS here */").join(" ");n.textContent=i;const s=await pt.format(i,{parser:"css",plugins:[Ii],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});n.textContent=s||"/* Write your CSS here */"}catch(t){console.error("CSS formatting error:",t),n.textContent=a}}async function Wa(a){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",a)try{const n=await pt.format(a,{parser:"babel",plugins:[_n,En],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=a}}async function us(){const a=new se("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await a.initializeEditor()}async function le(a){const e=document.querySelector('.cm-content[data-language="html"]'),n=document.getElementById("builder-workarea");if(n?.querySelector("#widget-details")?.remove(),e)try{const i=document.createElement("div");let s=a||n?.innerHTML||"";i.innerHTML=s;const o=i.firstChild;o&&o.nodeType===1&&o.classList.contains("mftsccs-marking-element")&&(s=o.innerHTML),i.innerHTML=s;async function l(d){if(d.dataset.widgetid){const u=await K(Number(d.dataset.widgetid));u&&u.typeCharacter=="the_widget"&&(d.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let u=0;u<d.childNodes.length;u++){const c=d.childNodes[u];c instanceof HTMLElement&&await l(c)}}await l(i),s=i.innerHTML;const r=await pt.format(s,{parser:"html",plugins:[Pi],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=r||"<!-- Write your HTML here -->"}catch(i){console.error("HTML formatting error:",i),e.textContent=a}else alert("widget html editor not found in dom")}async function ms(a){const e=document.getElementById("widgetTypeValue");e&&(e.value=a||"");const n=document.getElementById("widgetType");n&&(n.value=a||"")}function Ft(a){if(!a)return;const e=document.getElementById("builder-workarea"),n=document.createElement("div");n.id="widget-details",n.innerHTML="",n.innerHTML=`
    <button onclick="openDocumentationModal(${a}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(n)}function Sn(){const a=document.querySelector(".content-target");a.innerHTML="",a.textContent="Widget Loading..."}function Cn(){return document.querySelectorAll(".content-target")[0]}function ta(a){const e={past:[],present:a,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(n){e.past.push(e.present),e.present=n,e.future=[]},undo(){if(e.past.length===0)return;const n=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=n,n},redo(){if(e.future.length===0)return;const n=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=n,n}}}class D{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),n=document.getElementById("redo-btn");e?.addEventListener("click",D.undoAction),n?.addEventListener("click",D.redoAction)}static renderActionHistory(){D.actionHistories=ta(JSON.stringify(f?.staticWidgetTree)),ta(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:n}=D.actionHistories.getState(),t=document.getElementById("undo-btn"),i=document.getElementById("redo-btn");t&&(t.disabled=!e),i&&(i.disabled=!n)}static async undoAction(){const e=D.actionHistories.undo();e!==void 0&&(ra(e||""),D.updateButtonStates())}static async redoAction(){const e=D.actionHistories.redo();e!==void 0&&(ra(e||""),D.updateButtonStates())}static updateActionHistories(){D.actionHistories.push(JSON.stringify(f.staticWidgetTree)),D.updateButtonStates()}}async function gs(){const a=document.getElementById("widget-prompt-modal");a&&a.remove()}async function ps(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function hs(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function fs(){const a=document.getElementById("prompt-text");a.addEventListener("input",()=>{a.style.height="auto";const e=Math.min(a.scrollHeight-8,120);a.style.height=`${e}px`,a.style.overflowY=e===120?"auto":"hidden"})}class Aa{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const n=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],i=((s,o=3)=>{if(s.length<o)return[];const l=new Set;for(;l.size<o;){const r=Math.floor(Math.random()*s.length);l.add(r)}return[...l]})(n,2);this.randomSuggestionEl=i?.map(s=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${n[s]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),fs(),setTimeout(()=>{const n=document.querySelector(".aiAssistantTabs"),t=document.querySelectorAll("#aiChatContainer, #prototypeWidget");n.querySelector("button").classList.add("active"),t[0].classList.add("active"),n.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{n.querySelectorAll("button").forEach(l=>l.classList.remove("active")),t.forEach(l=>l.classList.remove("active"));const s=i.dataset.id,o=document.getElementById(s);i.classList.add("active"),o?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=gs,window.minimizeAssistant=ps,window.maximizeAssistant=hs,`
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
    `}}async function ys(a){const e=document.getElementById("widget-btn-wrapper");if(e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
            <div class="position-relative" style="z-index: 100;">
              <div class="w-100 d-flex justify-content-center">
                <button
                  id="update-publish-widget-btn"
                  onclick="updateWidget(event, ${a}, true)"
                  class="btn btn-primary btn-sm d-flex align-items-center gap-1"
                  style="border-radius: 0.2rem 0 0 0.2rem; border-right: 1px solid #A2A2A2;"
                  data-widgetid="${a}"
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
                onclick="updateWidget(event, ${a})"
                class="btn btn-primary btn-sm d-flex align-items-center gap-1 mx-1 position-absolute w-100 mt-1 shadow-sm d-none"
                data-widgetid="${a}"
              >
                <span class="material-symbols-outlined">update</span>
                Update Only
              </button>
            </div>
          `;const t=e.querySelector("#updateDropDownArrow"),i=e.querySelector("#update-widget-btn");i&&t&&i.addEventListener("click",()=>{i.classList.add("d-none"),t.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),t&&i&&t.addEventListener("click",()=>{i.classList.contains("d-none")?(i.classList.remove("d-none"),t.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(i.classList.add("d-none"),t.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function ws(){const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function vs(){const a=document.getElementById("widget-btn-wrapper");a.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class xa{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:i}=n;return i.main.empty?t({changes:{from:i.main.from,insert:"  "},selection:{anchor:i.main.from+2}}):t({changes:{from:i.main.from,to:i.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"<!-- Write your HTML here -->",extensions:[$t,jt,Ci(),Ht(),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Dt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(n=>{if(n.docChanged){const t=this.editorView?.state.doc.toString()||"";this.updateHTML(t)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=ut;class Ma{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(t=>t.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const n=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=n,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:i}=n;return i.ranges.length===0?!1:(t({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your JavaScript here */",extensions:[$t,jt,wa(),Ht(),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Dt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(async n=>{if(n.docChanged){const t=this.editorView?.state.doc.toString()||"";this.updateJS(t)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function na(){const a=document.getElementById("codeBlocksContainer"),e=a.querySelectorAll(".sub-tab-btn");if(!a.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const t=document.getElementById("onmount-editor-split");t&&t.classList.add("active")}}async function ka(a){const e=a?.id,n=a?.code,t=a?.slug,i=a?.name,s=document.querySelectorAll(".custom-service-btn"),o=Array.from(s)?.filter(c=>c?.getAttribute("data-subtab")===t),l=document.getElementById("lifecycle"),r=l?.querySelector(".sub-tab-nav");if(!o.length){const c=document.createElement("button");c.classList.add("sub-tab-btn","custom-service-btn"),c.setAttribute("data-subtab",t),c.innerHTML=`
      <span class="service-name">${i}</span>
      <span class="material-symbols-outlined" onclick="toggleDropdown(event, ${e})" title="Options"> more_vert </span>
      <!-- Dropdown Menu -->
      <ul class="dropdown-menu" id="dropdown-menu-${e}">
        <li class="d-flex align-items-center justify-content-between" onclick="openRenameCustomFunction(event, '${t}', ${e})">
          <span>Rename</span>
          <span class="material-symbols-outlined">edit</span>
        </li>
        <li class="d-flex align-items-center justify-content-between delete-icon" onclick="deleteCustomFunction(event, '${t}', ${e})">
          <span>Delete</span>
          <span class="material-symbols-outlined">delete</span>
        </li>
      </ul>
    `,r?.appendChild(c);const g=document.createElement("div");g.classList.add("sub-tab-content","custom-editor-content"),g.id=`${t}-editor-split`,g.setAttribute("data-subtab",t),l?.appendChild(g);const m=`${t}-editor-split`;bs(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(c=>{c.addEventListener("click",function(){const g=c.getAttribute("data-subtab"),m=c.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(p=>{p.classList.remove("active")}),c.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${g}"]`)?.classList.add("active")})}),setTimeout(async()=>{const c=document.querySelector(`#${t}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(c&&(c.textContent="/* Write your code here */",n))try{const g=await pt.format(n,{parser:"babel",plugins:[_n,En],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});c.textContent=g}catch(g){console.error("JS formatting error:",g),c.textContent=n}},500)}async function bs(a){await new se(a).initializeEditor()}async function _s(a,e,n){const t=e.trim().toLocaleLowerCase().split(" ").join("-"),i=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===a);i[0].name=e,i[0].slug=t;const s=document.querySelector(`button[data-subtab=${a}]`);s?.setAttribute("data-subtab",t),s.innerHTML=`
    <span class="service-name">${e}</span>
    <span class="material-symbols-outlined" onclick="toggleDropdown(event, ${n})" title="Options"> more_vert </span>
    <!-- Dropdown Menu -->
    <ul class="dropdown-menu" id="dropdown-menu-${n}">
      <li class="d-flex align-items-center justify-content-between" onclick="openRenameCustomFunction(event, '${t}', ${n})">
        <span>Rename</span>
        <span class="material-symbols-outlined">edit</span>
      </li>
      <li class="d-flex align-items-center justify-content-between delete-icon" onclick="deleteCustomFunction(event, '${t}', ${n})">
        <span>Delete</span>
        <span class="material-symbols-outlined">delete</span>
      </li>
    </ul>
  `;const o=s?.querySelector("span.service-name");o&&(o.innerText=e);const l=document.getElementById(`${a}-editor-split`);l?.setAttribute("data-subtab",t),l.id=`${t}-editor-split`,await new se(`${t}-editor-split`).initializeEditor();const d=f.staticWidgetTree?.custom_functions?.filter(u=>u.slug===t);ka(d?.[0]),we("rename-custom-function-modal")}class Es{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,n){this.customFunctionId=n,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const t=document.getElementById("rename-custom-function-modal").querySelector("form");t&&t.addEventListener("submit",i=>{i.preventDefault();const s=t.customFunctionName.value.trim(),o=/^[_A-Za-z][_A-Za-z ]*$/.test(s),l=document.getElementById("service-rename-error");o?(l.textContent="",l.classList.add("d-none"),_s(this.currentCustomFunctionSlug,s,this.customFunctionId)):(l.classList.remove("d-none"),l.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
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
    `}}const Ot="unsaved_widget";async function Ts(){const a=Cs(),e={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},n=JSON.stringify(e),t=new Blob([n]).size,s=4.5*1024*1024-a;if(t<=s)try{localStorage.setItem(Ot,n),Ln("save-widget")}catch(o){console.error("Error saving to localStorage:",o)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),Vt()}function Ss(a){return new Blob([a]).size}function Cs(){let a=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const n=localStorage.getItem(e);a+=Ss(e+n)}return a}async function Vt(){localStorage.removeItem(Ot),nt()}const nn=async a=>{a?.preventDefault();const e=localStorage.getItem(Ot);if(e){const n=JSON.parse(e);f.widgetTree=n?.widgetTree;const t=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,i=new URLSearchParams(window.location.search).get("widget-id");t===Number(i)?(t||q.enableWidgetButtons(),await Xe(),D.updateActionHistories(),L.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},Ln=async(a="")=>{const e=document.querySelector("#widget-properties .row"),n=document.getElementById("btn-draft-widget"),t=localStorage.getItem(Ot),i=JSON.parse(t),s=i?.widgetTree?.origin||i?.widgetTree?.widgetId,o=new URLSearchParams(window.location.search).get("widget-id");if(t&&!n){if(s!==Number(o)){nt();return}const l=document.createElement("div");l.id="draft-widget",l.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),l.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,e?.appendChild(l),document.getElementById("btn-draft-widget")?.addEventListener("click",d=>nn(d)),s===0&&!a&&setTimeout(()=>{nn()},0)}else t&&n?s!==Number(o)||s===Number(o)&&!a?nt():n?.addEventListener("click",l=>nn(l)):!t&&n&&nt()};function nt(){document.getElementById("draft-widget")?.remove()}const ot=(()=>{function a(d){const u=d.target,c=document.getElementById("codeBlocksContainer");c&&c.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}function e(d){const u=d.target,c=document.getElementById("codeBlocksContainer");c&&c.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),u.classList.add("selected")}async function n(d){q.enableWidgetButtons();try{await Xe(),Ts(),D.updateActionHistories(),L.infoMessageToast(d)}catch(u){L.errorToast("widget synchronization failed"),console.error(u)}}const t=()=>{const d=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),d.style.display="flex";const g=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});g&&g.dispatchEvent(m),rt.enableHeader()},i=()=>{const d=document.getElementById("widgetButtionCodeViewWrapper"),u=document.createElement("div");u.classList.add("codeSplitViewButton");const c=document.createElement("div");c.appendChild(u);const g=document.createElement("div");g.id="codeBlocksContainer",g.innerHTML=`
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
`,d?.appendChild(g),document.querySelectorAll(".tab-btn").forEach(y=>{y.addEventListener("click",function(){const _=y.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(S=>S.classList.remove("active")),y.classList.add("active"),document.getElementById(_)?.classList.add("active")})}),g.querySelectorAll(".sub-tab-btn").forEach(y=>{y.addEventListener("click",function(){const _=y.getAttribute("data-subtab"),S=y.closest(".tab-content");S?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(b=>{b.classList.remove("active")}),y.classList.add("active"),S?.querySelector(`.sub-tab-content[data-subtab="${_}"]`)?.classList.add("active")})});const h=document.querySelector(".fullscreenicon"),v=document.querySelector("#widgetButtionCodeViewWrapper");h?.addEventListener("click",()=>{v.classList.contains("fullscreen")?rt.enableHeader():rt.disableHeader(),v.classList.toggle("fullscreen")});const T=document.querySelector(".close-btn");T&&T.addEventListener("click",t),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>n("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(c.firstChild),setTimeout(()=>{const y=document.querySelector(".codeSplitViewButton");y&&(y.removeEventListener("click",a),y.addEventListener("click",a));const _=document.getElementById("designSplitViewButton");_&&(_.removeEventListener("click",e),_.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",y=>s(y))};function s(d){d.stopPropagation();try{const u="add-custom-service-dialog";document.getElementById(u)?.remove();const g=document.createElement("dialog");g.setAttribute("id",u),g.classList.add("col-md-3"),g.innerHTML=`
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
      `;const m=g.querySelector("form");return m&&m.addEventListener("submit",p=>{p.preventDefault();const h=m?.serviceName?.value.trim(),v=/^[_A-Za-z][_A-Za-z ]*$/.test(h),T=document.getElementById("service-name-error");v?(T.textContent="",T.classList.add("d-none"),r(p)):(T.classList.remove("d-none"),T.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(g),de(u),"OPENED"}catch(u){console.error("Failed to rename widget:",u)}}async function o(d,u,c){console.log("openRenameCustomFunction -->",d,u,c),new Es(u,c),await de("rename-custom-function-modal")}async function l(d,u,c){d.preventDefault();try{if(confirm("Do you want to delete the Service?")){L.infoMessageToast("Deleting the service...",0),c&&await Se(Number(c));const m=`button[data-subtab=${u}]`;document.querySelector(m)?.remove(),document.getElementById(`${u}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(_=>_.slug!==u);const v=document.getElementById("codeBlocksContainer");return v?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),v?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),v?.querySelector(".sub-tab-content.active")?.classList.remove("active"),v?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(g){L.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",g)}}async function r(d){d.preventDefault();const u=d.target,g=new FormData(u).get("serviceName");let m=g?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const p=document.getElementById("lifecycle"),h=p?.querySelector("div.sub-tab-nav"),v=document.getElementById("codeBlocksContainer");v?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),v?.querySelector(".sub-tab-content.active")?.classList.remove("active");const E=document.createElement("button");E.classList.add("sub-tab-btn","custom-service-btn","active"),E.setAttribute("data-subtab",m),E.innerHTML=`
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
    `,h.appendChild(E);const w=document.createElement("div");w.classList.add("sub-tab-content","custom-editor-content","active"),w.setAttribute("data-subtab",m),w.setAttribute("id",`${m}-editor-split`),p.appendChild(w),await new se(`${m}-editor-split`).initializeEditor();const _={name:g,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(_),document.querySelectorAll(".tab-btn").forEach(C=>{C.addEventListener("click",function(){const A=C.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(x=>x.classList.remove("active")),C.classList.add("active"),document.getElementById(A)?.classList.add("active")})}),(v?.querySelectorAll(".sub-tab-btn")).forEach(C=>{C.addEventListener("click",function(){const A=C.getAttribute("data-subtab"),x=C.closest(".tab-content");x?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(k=>{k.classList.remove("active")}),C.classList.add("active"),x?.querySelector(`.sub-tab-content[data-subtab="${A}"]`)?.classList.add("active")})}),we("add-custom-service-dialog")}return{initializeCodeBlock:i,closeCodeView:t,synchronizeWidget:n,openRenameCustomFunction:o,deleteCustomFunction:l}})();async function Ls(){await Ln();const a=document.getElementById("select-box");if(a.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(b=>{b.remove()}),document.querySelectorAll(".custom-editor-content").forEach(b=>{b.remove()});const y=document.getElementById("codeBlocksContainer"),_=y?.querySelectorAll(".sub-tab-btn");y?.querySelector(".sub-tab-btn.active")||(_?.[0]?.classList.add("active"),y?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),D.renderActionHistory(),D.updateActionHistories(),en(f.staticWidgetTree),document.head.querySelectorAll("link.vde-css")?.forEach(E=>E.remove()),ce();const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const t=document.getElementById("widget-btn-wrapper");t.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const i=document.getElementById("widget-builder");i.textContent="Widget Builder Panel",i.setAttribute("title","Widget Builder Panel"),q.disableWidgetButtons(),await new Ka().initializeEditor(),await new Ma().initializeEditor(),await new se("onmount-editor-split").initializeEditor(),await new se("onupdate-editor-split").initializeEditor(),await new se("addevents-editor-split").initializeEditor(),await new se("mountchildwidgets-editor-split").initializeEditor(),await new xa().initializeEditor();const g=document.getElementById("widgetNameValue");g.value="";const m=document.getElementById("widgetTypeValue");m&&(m.value="");const p=document.getElementById("widgetType");p&&(p.value=""),document.getElementById("widget-version").classList.add("d-none");const v=document.getElementById("element-attributes");v.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,Fn(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function Ws(){const a=new vi;f.widgetTree=a,ot.synchronizeWidget("Workspace Cleared")}let Me="",St="";async function aa(a){try{const n=(await I())?.token,t=await fetch(`${ie.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(a)});if(!t.ok){const d=await t?.text(),u=JSON.parse(d);throw L.errorToast(u.message),console.error(`API Error (${t.status}):`,d),Ct(t.statusText,"error"),new Error(`API request failed with status ${t.status}`)}const i=t.body.getReader(),s=new TextDecoder("utf-8");let o="",l=null;for(;;){const{value:d,done:u}=await i.read();if(u)break;o+=s.decode(d,{stream:!0});const c=o.split(`

`);for(let g=0;g<c.length-1;g++){const m=c[g].trim();if(m.startsWith("data:")){const p=m?.slice(6).trim();try{const h=JSON.parse(p);if(h.status==="responding"&&await xs(h.message_str),h.status==="success"&&(l=h),h.status==="error")throw L.errorToast(h.message?.[0]||"AI Error"),new Error(h.message?.[0])}catch(h){console.warn("Stream parse error:",h)}}}o=c[c.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),l}catch(e){return console.error(e),null}}async function As(a){await je(a),f.resetWidgetTree(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new Aa("");const t=document.getElementById("prompt-text");Me="",t?.addEventListener("keydown",function(l){if(l.key==="Enter"&&!l.shiftKey){l.preventDefault();const r={text_input:t?.value,chat_id:"",widget_type:"",stream:!0};Me&&(r.tag="followup",r.chat_id=Me,r.widget_type=St),ct(r)}}),document.querySelector(".button-send").addEventListener("click",function(l){l.preventDefault();const r={text_input:t?.value,chat_id:"",widget_type:"",stream:!0};Me&&(r.tag="followup",r.chat_id=Me,r.widget_type=St),ct(r)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(l=>{l?.addEventListener("click",function(r){r.preventDefault(),t.value=l?.innerText})})}async function ct(a){if(a.text_input){Ia(a.text_input),Ms("Assistant is working");const e=await aa(a);if(ks("prompt-loader"),!e)return;Me=e?.data?.chat_id,St=e?.data?.widget_type;const n=e?.message;if(f.staticWidgetTree.assistant={input:e?.data?.user_prompt,id:Me,type:St},e?.status=="error")L.errorToast(n);else{if(a.widget_type!=="list"){a.widget_type==="form"&&Pa(Me);const s=new Function("tsccs",e.data.data_structure_prototype)(pa);let o=document.getElementById("prototypeWidget");De(ie.visual_prototype_widget,o,{prototype:s}).then(l=>{l.dataChange(async r=>{const d={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:r,type:"application/JSON",stream:!0};try{const u=await aa(d);await mn(u)}catch(u){throw u}})})}await Ct(n);const t=document.createElement("button");t.classList.add("clearWorkspaceButton"),t.textContent="Clear Workspace",t.classList.add("btn","btn-danger"),t.addEventListener("click",()=>{Ws(),t.remove()}),await Ct(t),Sn(),await mn(e)}}}async function Ct(a,e){const n=document.querySelector(".chat-content"),t=document.createElement("div");if(t.classList.add("message","message-bot"),a instanceof HTMLButtonElement){const i=document.querySelector(".clearWorkspaceButton");i&&i.remove(),t.appendChild(a)}else e==="error"&&t.classList.add("text-danger","my-0","text-center"),t.innerText=a;n?.scrollTo({top:n.scrollHeight,behavior:"smooth"}),n?.insertAdjacentElement("beforeend",t)}async function xs(a,e){const n=document.getElementById("response-status");if(n)n.innerHTML=a;else{const t=document.querySelector(".chat-content"),i=document.createElement("div");i.id="response-status",i.classList.add("message","message-bot"),i.innerHTML=a,t?.insertAdjacentElement("beforeend",i),t?.scrollTo({top:t.scrollHeight,behavior:"smooth"})}}function Ia(a){const e=document.getElementById("default-message"),n=document.querySelector(".chat-content"),t=document.createElement("div");t.classList.add("message","message-user"),t.innerText=a,n?.insertAdjacentElement("beforeend",t),e?.remove();const i=document.getElementById("prompt-text");i.value="",i.style.height="44px"}function Ms(a){Is("prompt-form");const e=document.getElementById("prompt-content"),n=document.createElement("div");n.id="prompt-loader",n.textContent=a,e?.insertAdjacentElement("beforeend",n)}function ks(a){document.getElementById(a)?.remove(),Ps("prompt-form")}function Is(a){const e=document.getElementById(a);for(let n of e.elements)n.disabled=!0}function Ps(a){const e=document.getElementById(a);for(let n of e.elements)n.disabled=!1}async function mn(a){const e=a?.data?.ui?.html||"",n=a?.data?.ui?.css||"",t=a?.data?.ui?.js||"",i=a?.data?.before_render||"",s=a?.data?.after_render||"",o={html:e,css:n,js:t,before_render:i,after_render:s,assistant:{id:a?.data?.chat_id,input:a?.data?.user_prompt,type:a?.data?.widget_type}};await Bs(o)}async function Bs(a){f.staticWidgetTree.html=a.html,f.staticWidgetTree.css=a.css,f.staticWidgetTree.js=a.js,f.staticWidgetTree.before_render=a.before_render,f.staticWidgetTree.after_render=a.after_render,f.staticWidgetTree.assistant=a.assistant;const e=f.staticWidgetTree,n=document.getElementById("builder-workarea");n.innerHTML="";const t=await Sa(e,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await X(e,!1,t),D.renderActionHistory(),D.updateActionHistories(),ce(),pe()}async function Pa(a){document.getElementById("prompt-suggestion")?.remove();const n={text_input:"create a list widget for it",chat_id:a,widget_type:"list",stream:!0},t=document.createElement("div");t.id="prompt-suggestion",t.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",t),document.getElementById("request-list-widget").addEventListener("click",async o=>{o.preventDefault(),ct(n),ws(),vs()})}async function $s(a){new Aa(a?.id),Ia(a?.input),await Ct("Widget Generated Successfully!!"),a.type==="form"&&Pa(a?.id);const e=document.getElementById("prompt-text"),n={text_input:e?.value,chat_id:a?.id||"",widget_type:a?.type||"",tag:a?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(i){i.key==="Enter"&&(i.shiftKey||(i.preventDefault(),n.text_input=e?.value,ct(n)))}),document.querySelector(".button-send").addEventListener("click",function(i){i.preventDefault(),n.text_input=e?.value,ct(n)})}async function X(a,e,n,t,i){ms(a?.type);const s=e?"":a?.css,o=e?`div[data-widgetid="${a.id}"] {${a.css}}
${n?.css}`:n?.css;if(await La(s,o),le(a?.html),await Ca(a?.after_render),await Wa(a?.before_render),a?.custom_functions?.length){const l=document.querySelectorAll(".custom-service-btn"),r=Array.from(l)?.map(c=>c.getAttribute("data-subtab")??""),d=a.custom_functions?.map(c=>c.slug);(r?.filter(c=>!d.includes(c))).forEach(c=>{const g=document.querySelector(`.custom-service-btn[data-subtab="${c}"]`);g&&g.remove(),document.getElementById(`${c}-editor-split`)?.remove()}),na(),a.custom_functions?.forEach(c=>{ka(c)})}else document.querySelectorAll(".custom-service-btn").forEach(d=>{d.remove()}),document.querySelectorAll(".custom-editor-content").forEach(d=>{d.remove()}),na();(t||i)&&Ft(a?.origin?a?.origin:a?.widgetId),t&&a?.assistant?.id&&$s(a?.assistant)}const gn="drop-indicator";function Ba(){let a=document.querySelector(`.${gn}`);return a||(a=document.createElement("div"),a.className=gn,document.body.appendChild(a)),a}function js(a,e){const n=Ba(),t=a.getBoundingClientRect();e==="top"?n.style.top=`${t.top-5}px`:e==="bottom"&&(n.style.top=`${t.bottom-5}px`),n.style.left=`${t.left}px`,n.style.width=`${t.width}px`,n.style.opacity="1",n.style.transform="scaleY(1)"}function Hs(){document.querySelectorAll(`.${gn}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function Ds(a,e,n){if(e.length===0)return{element:n,position:"top"};const t=a.clientY;let i=e[0],s=Math.abs(i.getBoundingClientRect().top-t);Math.abs(i.getBoundingClientRect().bottom-t);for(const d of e){const u=d.getBoundingClientRect(),c=Math.abs(u.top-t);Math.abs(u.bottom-t),c<s&&(i=d,s=c)}const o=i.getBoundingClientRect(),l=o.top+o.height/2,r=t<l?"top":"bottom";return{element:i,position:r}}let J=null,H;function Rt(){const a=document.querySelector(".content-target > .mftsccs-marking-element");if(a){const e=document.querySelector(".content-target");_e.fixContentTargetHeight(e,a)}}function Ns(a){J=a.target;let e={data_type:a.target.getAttribute("data-type"),data_default:a.target.getAttribute("data-default"),data_void:a.target.getAttribute("data-void"),data_text:a.target.getAttribute("data-text"),elementId:a.target.getAttribute("data-elementId"),dataId:a.target.id,imageUrl:a.target.imageUrl,displayType:a.target.displayType};a.dataTransfer.setData("text",JSON.stringify(e)),a.dataTransfer.setData("id",a.target.id),a.dataTransfer.effectAllowed="move"}async function qs(a){a.stopPropagation();const e={widgetcodeId:a.target.getAttribute("data-widgetId"),sourceElementId:a.target.id,className:a.target.className,imageUrl:a.target.imageUrl,displayType:a.target.displayType,type:a.target.Type};a.dataTransfer.setData("text",JSON.stringify(e)),a.dataTransfer.effectAllowed="move"}function Fs(a){a.preventDefault(),a.stopPropagation(),a.target.classList.add("dragging-area"),ft.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",is()}function Os(a){a.preventDefault(),a.stopPropagation(),a.target.classList.remove("dragging-area")}function Vs(a){a.preventDefault(),a.stopPropagation(),(!J||!(a.currentTarget instanceof HTMLElement))&&(J=a?.target);const e=a.target,n=Array.from(e.children).filter(i=>i!==J);Ba();const t=Ds(a,n,e);H=t,js(t.element,t.position)}function Rs(){q.checkContent()?q.enableWidgetButtons():q.disableWidgetButtons()}async function Us(a){const e=await Ut(a);J=null,Hs(),D.updateActionHistories(),ft.collapseNavbar(),Rs(),Rt(),ce(),e&&(le(),Ft(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),pe()}function Lt(a,e){return Array.isArray(a?.children)&&(a.children=a?.children.filter(n=>n?.wrapper!==e),a.children.forEach(n=>Lt(n,e))),a}function Fe(a,e){let n;return Array.isArray(a?.children)&&(n=a?.children.filter(t=>t?.wrapper===e),a.children.forEach(t=>Fe(t,e))),n?.[0]}async function zs(a){a.preventDefault(),a.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(c=>{const g=document.getElementById(`${c}-content`);if(g&&g.style.display==="block"){const m={target:g.previousElementSibling};ut(m,`${c}-content`)}});const n=document.getElementById("element-attributes");if(n&&n.style.display==="block"){const c={target:document.querySelector("#icon-attribute")};ut(c,"element-attributes")}const t=R.staticElement,i=t?.parentElement,s=i?.parentElement,o=s?.dataset?.widgetid,l=t?.parentElement?.closest(".added-widget-container")||t?.parentElement?.closest(".edited-widget-container"),r=t.querySelectorAll(".added-widget-container");if(t?.classList?.contains("added-widget-container")){const c=t?.id;Lt(f?.staticWidgetTree,c)}else r.length&&r.forEach(c=>{const g=c?.id;Lt(f?.staticWidgetTree,g)});if(l){const c=l.id;if(t?.remove(),R.staticElement.remove(),_t(),t?.classList?.contains("added-widget-container")){const g=Fe(f?.staticWidgetTree,c),m=l.querySelector(".mftsccs-marking-element");g.html=m?.innerHTML,X(g)}else{const m=document.getElementById(c).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,X(f.selectedStaticWidgetTreeInfo.widgetTree)}ce(),D.updateActionHistories();return}i?.classList.contains("mftsccs-marking-element")&&i.children.length===1&&i?.remove(),o&&(s?.children?.length||s?.remove()),t?.remove(),R.staticElement.remove(),_t();const d=await Qe();return f.staticWidgetTree.html=d,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},Pr(),X(f?.staticWidgetTree),ce(),D.updateActionHistories(),q.checkContent()||(q.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}async function Js(a){return"drag"}async function Gs(a){return a.dataTransfer.setData("text",a.target.id),"start drag"}async function Qs(a){console.log("dragEndWidgetElement event ->",a)}async function Zs(a){return a.preventDefault(),a.stopPropagation(),"dragOverWidgetElement"}async function Ys(a){Ut(a),le()}let Wt=null;async function $a(a,e){if(a.preventDefault(),a.stopPropagation(),!J)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let t=a.target;if(!t.classList.contains("mftsccs-marking-element")&&!t.classList.contains("fslayout-col")&&t.id!=="builder-workarea"){const r=document.getElementById("builder-workarea"),d=t.closest(".mftsccs-marking-element"),u=t.closest(".fslayout-col");t=d||u||r}if((J.contains(t)||J===t)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),t=document.getElementById("builder-workarea")),!t)return console.error("Invalid dropzone"),!1;t?.classList.remove("dragging-area");let i=Tt(a,e);if(!i.status)return alert(i.message),J=null,!1;const s=e.dataType||e.type||e.data_type,o=s==="photo"||s==="Image"||s==="img",l=s==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(o){let r,d=!1;if(J&&J.tagName&&J.tagName.toLowerCase()==="img"){if(d=!0,r=J,r.parentElement===t&&console.log("Image is already in this dropzone, just repositioning"),!(r instanceof Node))return console.error("draggedItem is not a valid DOM node:",r),J=null,!1;(!r.hasAttribute("style")||!r.style.width)&&r.setAttribute("style","width: 200px;")}else{const p=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(t.querySelectorAll(`img[src="${p}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),J=null,!1;r=document.createElement("img"),r.setAttribute("src",p),r.setAttribute("style","width: 200px;")}let u=_e.generateUUID();r.setAttribute("element-info-id",u);const c=t.classList.contains("file-item")&&t.classList.contains("photo-file")&&t.classList.contains("dragging");let g=r;if(c){const p=document.createElement("div");p.appendChild(r),g=p}try{if(d){const p=c&&r.parentElement?.parentElement||r.parentElement,h=c?r.parentElement:r;p&&p!==t&&h&&p.removeChild(h)}H?.position==="top"&&t?.children?.length&&H?.element?t.contains(H.element)&&!g.contains(H.element)&&g!==H.element?t.insertBefore(g,H.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),t.appendChild(g)):H?.position==="bottom"&&H?.element?t.contains(H.element)&&!g.contains(H.element)&&g!==H.element?H.element.insertAdjacentElement("afterend",g):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),t.appendChild(g)):t.appendChild(g)}catch(p){console.error("Error positioning element:",p.message);try{t.appendChild(g)}catch(h){return console.error("Cannot append element:",h),J=null,!1}}r.removeAttribute("element-info-id");const m=a.target?.parentElement?.closest(".added-widget-container")||a.target?.parentElement?.closest(".edited-widget-container");if(m){const p=m.id,h=Fe(f?.staticWidgetTree,p),v=m.querySelector(".mftsccs-marking-element");return v&&(h.html=v.innerHTML,await X(h)),J=null,!1}return Ks(),J=null,!0}else if(l){let r=Tt(a,e);if(!r.status)return alert(r.message),J=null,!1;if(e.sourceElementId){const w=e.sourceElementId||e.fileId;console.log("sourceElement ->",w)}let d=e.widget_id;t.classList.remove("dragging-area");const u=document.createElement("div");u.classList.add("wb-initial-empty"),u.style.display="block",u.style.marginBottom="10px",u.setAttribute("data-widget-id",d);const c=_e.generateUUID();u.id=`widget-${c}`;const g=await I();let m=t.classList.contains("publicWidgetRouter"),p=await re(d);if(!m){const w=await Ee(d.id,g.token);p=await re(w?w.widgetId:Number(d))}p?.children?.length&&await zt(p);const h=q.clearDraggedWidget(p),v=await Te(h,u);h.wrapper=u.id;try{H?.position==="top"&&t?.children?.length&&H?.element?t.contains(H.element)&&!u.contains(H.element)&&u!==H.element?t.insertBefore(u,H.element):(console.warn("Invalid indicator element for top position, appending to dropzone"),t.appendChild(u)):H?.position==="bottom"&&H?.element&&t.contains(H.element)&&!u.contains(H.element)&&u!==H.element?H.element.insertAdjacentElement("afterend",u):t.appendChild(u)}catch(w){console.error("Error positioning widget container:",w.message);try{t.appendChild(u)}catch(y){return console.error("Cannot append widget container:",y),J=null,!1}}const T=a.target?.parentElement?.closest(".added-widget-container")||a.target?.parentElement?.closest(".edited-widget-container");if(T){const w=T.id;Fe(f?.staticWidgetTree,w).children.push(h);const S=document.getElementById(w).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=S?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=S?.style.cssText,await X(f.selectedStaticWidgetTreeInfo.widgetTree),J=null,!1}const W=await dt();f.staticWidgetTree.html=W,f.staticWidgetTree?.children?.push(h);const E=f.widgetTree.children.indexOf(h);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[E],isChildWidget:!0,childWidgetIndex:E},await X(h,!1,v),q.enableWidgetButtons(),J=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),J=null,!1}function Ks(){document.querySelectorAll(".mftsccs-marking-element img").forEach(a=>{a.setAttribute("draggable","true"),a.addEventListener("dragstart",e=>{e.stopPropagation(),Wt=Date.now()}),a.addEventListener("dragend",e=>{e.stopPropagation(),setTimeout(()=>{Wt=null},100)})})}function Xs(){Wt=null,J=null,console.log("dragStartTime",Wt)}async function Ut(a,e=!1,n,t){if(!a&&e&&n&&t){const r=await re(Number(n)),d=tn(t,n,!1,null);let u=await Te(r,d);r.wrapper=d?.id;const c=await Qe();f.staticWidgetTree.html=c,f.staticWidgetTree?.children?.push(r),X(r,!0,u);return}a.preventDefault(),a.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let s=a.dataTransfer.getData("text");if((r=>{try{return JSON.parse(r),!0}catch{return!1}})(s))if(Object.keys(JSON.parse(s)).includes("widgetcodeId")){const r=JSON.parse(s);let d=Tt(a,r);const u=r.className.split(" ");if(!d.status){alert(d.message);return}const c=JSON.parse(s);if(c.sourceElementId){const S=document.getElementById(c.sourceElementId.toString());if(S){a.target.insertBefore(S,d.elementBelowDrag);return}}let g=os(c),m=a.target;m.classList.remove("dragging-area");const p=await I();let h=!1;u.includes("publicWidgetRouter")&&(h=!0);let v=null,T=null;if(h){v=await re(Number(g)),T=tn(m,g,!1,d.elementBelowDrag);const S=document.getElementById("widgetNameValue");S&&v?.name&&(S.value=v?.name);const b=document.getElementById("widget-builder");b&&v?.name&&(b.textContent="Widget Builder Panel: "+v?.name)}else{const S=await Ee(g,p.token);v=await re(S?S.widgetId:Number(g));const b=document.getElementById("widgetNameValue");b&&v?.name&&(b.value=v?.name);const C=document.getElementById("widget-builder");C&&v?.name&&(C.textContent="Widget Builder Panel: "+v?.name),v?.children?.length&&await zt(v),T=tn(m,S?S.widgetId:g,!1,d.elementBelowDrag)}const W=q.clearDraggedWidget(v);let E=await Te(W,T);W.wrapper=T?.id;const w=a.target?.parentElement?.closest(".added-widget-container")||a.target?.parentElement?.closest(".edited-widget-container");if(w){const S=w.id;Fe(f?.staticWidgetTree,S).children.push(W);const A=document.getElementById(S).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=A?.innerHTML,X(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const y=await Qe();f.staticWidgetTree.html=y,f.staticWidgetTree?.children?.push(W);const _=f.widgetTree.children.indexOf(W);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[_],isChildWidget:!0,childWidgetIndex:_},X(W,!1,E),q.enableWidgetButtons()}else{const r=JSON.parse(s),d=a.target;let u=Tt(a,r);if(u.status){let h=_e.generateUUID();const v=kr(h,r),T=document.createElement("div");T.innerHTML=v,H?.position==="top"&&d?.children?.length?d.insertBefore(T.firstChild,H?.element):H?.position==="bottom"?H?.element?.insertAdjacentElement("afterend",T.firstChild):d.appendChild(T.firstChild),a.target.classList.remove("dragging-area");let E=d.querySelector(`[element-info-id='${h}']`);r.data_type=="layout"?E.querySelectorAll(".fslayout-col").forEach(y=>{y.classList.add("wb-initial-empty")}):(E.classList.add("wb-initial-empty"),r?.data_type==="img"&&(E?.setAttribute("src","/images/img-placeholder.jpg"),E?.setAttribute("style","width: 200px;"))),E.removeAttribute("element-info-id"),r?.data_type==="img"&&(E?.setAttribute("src","/images/img-placeholder.jpg"),E?.setAttribute("style","width: 200px;"))}else alert(u.message);const c=a.target?.parentElement?.closest(".added-widget-container")||a.target?.parentElement?.closest(".edited-widget-container");if(c){const h=c.id,v=Fe(f?.staticWidgetTree,h),T=c.querySelector(".mftsccs-marking-element");return v.html=T?.innerHTML,await X(v),a.dataTransfer.clearData(),!1}const g=document.querySelector(".content-target"),p=(await Ce(g,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=p;try{a.dataTransfer.clearData()}catch(h){console.error("error in clearing data",h.message)}return!0}else{const r=R.staticElement,d=a.target;d.classList.remove("dragging-area"),H?.position==="top"&&d?.children?.length?d.insertBefore(r,H?.element):H?.position==="bottom"?H?.element?.insertAdjacentElement("afterend",r):d.appendChild(r),_t();const u=await Qe();f.staticWidgetTree.html=u}}function eo(a){const s=new DOMParser().parseFromString(a,"text/html").body.querySelector("div")?.id,l=document.getElementById(s)?.parentElement?.closest(".added-widget-container"),r=l?.id,d=l?.querySelectorAll(".widget_container_disabled");return d?.length&&d?.forEach(u=>{const c=_e.generateUUID();u.id=`wdgt${c}`}),r?.toString()}async function zt(a){return Array.isArray(a.children)&&a.children.forEach(e=>{ja(e,a),e.children.length&&zt(e)}),a}function ja(a,e){const n=a.wrapper,s=new DOMParser().parseFromString(e?.html,"text/html").body,o=s.querySelector(`#${n}`);if(!o)return a;const r=`wdgtcopy${_e.generateUUID()}`;return o.id=r,a.wrapper=r,e.html=s.innerHTML.toString(),a}const to=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:Rt,dragElement:Js,dragEndWidgetElement:Qs,dragOverWidgetElement:Zs,dragStartWidgetElement:Gs,dropElement:Ut,dropFolderElement:$a,dropWidgetElement:Ys,findChildByWrapper:Fe,getChildWrapperId:eo,getChildrenWrapperId:ja,onDragEnter:Fs,onDragLeave:Os,onDragOver:Vs,onDragStart:Ns,onDrop:Us,onWidgetDragStart:qs,removeChildByWrapper:Lt,removeElement:zs,resetDragState:Xs,updateAllChildWidgets:zt},Symbol.toStringTag,{value:"Module"})),no=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],Wn=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class Ha{constructor(){}async getLayoutListHTML(){return Wn.map(n=>`
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
      `).join("")}async getTemplateLayoutsHTML(){const e=await gr();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const n=await I(),t=n?.entityId===101651686||n?.entityId===101279491;return e.map(i=>i.id?`
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
              ${t?`
                <span class="material-symbols-outlined delete-template-icon" 
                     data-templateid="${i.id}" 
                     onclick="removeFromTemplate(event)" 
                     title="Remove from Templates">
                  delete
                </span>`:""}
            </div>
          </div>
        </li>
      `:"").join("")}}async function Ee(a,e){let n=new z;n.composition=a,n.fullLinkers=["the_widget_recent","the_widget_latest"],n.inpage=100;let t=new z;t.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],t.inpage=100;const s=await he([n,t],e),l=await ke(a,"the_widget_recent"),r=s?.data?.the_widget?.the_widget_recent||s?.data?.the_widget?.the_widget_latest||[],d=s?.data?.the_widget?.the_widget_latest||null;if(r.length){const u=r[0],c=u?.data.the_widget.the_widget_name?.[0].data.the_name,g=u?.data.the_widget.the_widget_html?.[0].data.the_html,m=u?.id,p=u?.data.the_widget.the_widget_css?.[0].data.the_css,h=u?.data.the_widget.the_widget_js?.[0].data.the_js,v=u?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,T=u?.data.the_widget.the_widget_version?.[0].data.the_version,W=u?.data.the_widget.the_widget_origin?.[0].data.the_origin|a;return{widgetName:c,widgetHTML:g,widgetCSS:p,widgetJS:h,widgetTimestamp:v,widgetVersion:Number(T||d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||d.id,origin:Number(W),connectionIdLatest:l,publishedWidgetVersion:d?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const q=(()=>{const a=async()=>{const w=document.getElementById("fslayout-template-container");if(w){w.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const _=await new Ha().getTemplateLayoutsHTML();w.innerHTML=_}},e=async()=>{const w=document.getElementById("public-widget-list-container");if(w){const y=await wn();!y||y.trim()===""?w.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:w.innerHTML=y||""}},n=async()=>{const w=document.getElementById("folder-widget-container");if(w){const y=await mr();!y||y.trim()===""?w.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:w.innerHTML=y||""}},t=async()=>{const w=await yn();un.navbar.setSavedWidgets(w);const y=document.getElementById("saved-widget-list-container");y&&(!w||w.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=w||"")},i=async()=>{const w=await yn();un.navbar.setSavedWidgets(w);const y=document.getElementById("folder-widget-container");y&&(!w||w.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=w||"")},s=async(w,y,_,S,b,C,A)=>{if(S&&!b&&!C||b&&!S&&!C||C&&!A){console.error("creating widget copy argument required.");return}let x=null;x=await re(w.id);let k=null,P=null,B=[],$=0;C||(k=await Ee(w.id,_),P=k?.origin?k?.origin:w.id,$=k?.widgetVersion?k?.widgetVersion:0,B=k?.connectionIdLatest?k.connectionIdLatest:null);const U={type:b?b.mainWidgetTypevalue:x.type,after_render:b?b.addeventsScript:x.after_render,before_render:b?b.onmountScript:x.before_render,update:b?b.onupdateScript:x.update,mount_child:b?b.mountchildwidgetsScript:x.mount_child,name:C?A:x?.name,html:C?x.html:b?b.widgetHTMLToUpdate:x.html,clean:b?b.widgetCleanHTMLToUpdate:x?.clean,css:b?b.widgetCSSToUpdate:x?.css?.toString(),js:b?b.widgetJSToUpdate:x?.js?.toString(),timestamp:b?b.widgetTimestampToUpdate:new Date().toISOString(),...!C&&{version:$?$+1:1,origin:P}},ee=await Q(P),Z=await O("widget",y,U);if(b?.assistant?.id){const F=await O("assistant",y,b?.assistant);await V(Z,F,"assistant")}if(b?.library?.css?.length){const F=b?.library?.css;for(let Y=0;Y<F.length;Y++){const ne=await O("css_library",y,F[Y]);await V(Z,ne,"s_css_library")}}if(b?.library?.js?.length){const F=b?.library?.js;for(let Y=0;Y<F.length;Y++){const ne=await O("js_library",y,F[Y]);await V(Z,ne,"s_js_library")}}if(b?.custom_functions?.length){const F=b?.custom_functions;for(let Y=0;Y<F.length;Y++){const ne=await O("custom_function",y,F[Y]);await V(Z,ne,"s_custom_function")}}if(!S&&!b&&C&&x?.children.length&&f.createChildWidget(x.children,Z),await V(ee,Z,"s_copy"),B&&B.length)for(let F=0;F<B.length;F++)await xe(B[F].id);return await V(ee,Z,"recent"),Z},o=async w=>{w.stopPropagation();const y=Number(w.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(y){L.infoMessageToast("Deleting your widget from public...",0);const S=await ke(y,"the_public_widget_s_widget",!0);await xe(S[0].id),await be(y,"the_widget_description"),await be(y,"the_widget_thumbnail"),await be(y,"the_widget_public_name"),await e(),await n(),await t(),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{L.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Removing Failed"),new Error("Removing Failed")}},l=async w=>{w.stopPropagation();const y=prompt("What would you like to name this imported widget?");if(!y||!y.trim())return;const _=Number(w.target.dataset.pubwidid);if(_){L.infoMessageToast("Importing widget...",0);try{const S=document.querySelector(".infoMessageToast"),b=await re(_);f.widgetTree=b,await f.saveWidget(y),await t(),await i(),S?.remove(),L.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Saving Failed"),new Error("Saving Failed")}}},r=async w=>{w.stopPropagation();const y=Number(w.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(y){L.infoMessageToast("Deleting your widget from templates...",0);const S=await ke(y,"the_template_widget_s_widget",!0);await xe(S[0].id),await be(y,"the_widget_template_thumbnail"),await be(y,"the_widget_template_name"),await a(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{L.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Removing Failed"),new Error("Removing Failed")}},d=()=>document.querySelector(".content-target").innerHTML.trim()!=="",u=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const _=document.querySelector(y);_&&_.classList.remove("disabled")})},c=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const _=document.querySelector(y);_?_.classList.add("disabled"):console.log("button not found",y)})},g=w=>{const y=document.createElement("div");y.innerHTML=w.html;const _=y.querySelectorAll("div[data-elementid]");return _?.length&&_.forEach(S=>{S.className="widget_container_disabled"}),w.html=y.innerHTML,w.html=w.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,S=>S.replace(/\btrue\b/g,"false").trim()),w.html=w.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,S=>S.replace(/\bhover-element\b/g,"").trim()),w.html=w.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,S=>S.replace(/\bwb-block\b/g,"").trim()),w.html=w.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,S=>S.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),w.html=w.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,S=>S.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),w};async function m(w){try{if(L.infoMessageToast("Updating your widget preference",0),w){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const _=await ke(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(_.length!==1&&_.length>0)for(let S=1;S<_.length;S++){const b=_[S];await xe(b.id)}if(w){if(!_.length){const S=await Q(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const b=await te("use_latest","true",!1,f.userId,999);await V(S,b,"use_latest"),await N.SyncDataOnline()}}else if(_.length>0)for(let S=0;S<_.length;S++){const b=_[S];await xe(b.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await E(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;L.successfullToast("Widget Preference Updated.")}catch(y){throw y}finally{document.querySelector(".infoMessageToast")?.remove()}}async function p(w,y,_){y.checked||_?(w.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(w.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),_||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const h=new Map,v=()=>{const w=document.getElementById("widget-version");if(!w)return;w.innerHTML="",w.classList.remove("d-none"),w.classList.add("d-flex","flex-column","gap-2");const y=document.createElement("div");y.classList.add("d-flex","justify-content-between","align-items-center");const _=document.createElement("label");_.setAttribute("for","widgetVersionValue"),_.textContent="Widget Versions:";const S=document.createElement("div");S.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",S.id="useLtsSwitch";const b=document.createElement("input");b.type="checkbox",b.className="form-check-input",b.id="alwaysUseLTS";const C=document.createElement("label");C.className="form-check-label ms-2",C.setAttribute("for","alwaysUseLTS"),C.textContent="Use LTS",S.appendChild(b),S.appendChild(C),y.appendChild(_),y.appendChild(S);const A=document.createElement("select");return A.name="input-widgetVersionValue",A.id="widgetVersionValue",A.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(w.appendChild(y),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(b.checked=!0,p(A,b,!0)),b.addEventListener("change",async()=>{try{await p(A,b,!1)}catch(x){console.error("useLtsError",x),x instanceof Error&&L.errorToast(x.message),b.checked=!b.checked}})):w.appendChild(_),w.appendChild(A),A},T=()=>{const w=document.getElementById("widget-version");if(!w){console.warn("Widget version container not found");return}const y=document.getElementById("widgetVersionValue");y&&(h.forEach(_=>{y.removeEventListener("change",_)}),h.clear()),w.innerHTML="",w.classList.remove("d-flex"),w.classList.add("d-none")},W=async(w,y,_)=>{try{const S=await I(),b=document.getElementById("widgetVersionValue");b&&h.forEach($=>{b.removeEventListener("change",$)});const C=v();if(!C){console.error("Failed to create select element");return}const A=await Ee(w,S?.token),x=A?.widgetVersion,k=new Date(A?.widgetTimestamp).toLocaleString();let P=new Date(_).toLocaleString();if(P==="Invalid Date"&&(P=new Date().toLocaleString()),A){const $=document.createElement("option");$.value="original",$.textContent=`Original ${y==="original"?`(Current) (${P})`:""}`,(!A||!A.publishedWidgetVersion)&&($.textContent+=" (Published)"),C.appendChild($);for(let U=0;U<A.widgetVersion;U++){const ee=document.createElement("option");ee.value=`${U+1}`,ee.textContent=`Version ${U+1} ${U+1==Number(y)?"(Current)"+(x===U+1?` (${k})`:` (${P})`):""}`,U+1==Number(y)&&(ee.selected=!0),A.publishedWidgetVersion&&U+1==Number(A.publishedWidgetVersion)&&(ee.textContent+=" (Published)"),C.appendChild(ee)}}else{const $=document.createElement("option");$.value="",$.textContent=`Original (current) (${P})`,$.selected=!0,C.appendChild($)}if(h.has(w)){const $=h.get(w);C.removeEventListener("change",$),h.delete(w)}const B=E(w,S.entityId);h.set(w,B),C.addEventListener("change",B)}catch(S){console.error("Error initializing widget versions:",S)}},E=(w,y,_)=>{async function S(b){b&&b.preventDefault();let C="";if(_&&_===!0){f.token||await f.getUserDetails();const x=await Ee(w,f.token);x&&(C=x.publishedWidgetVersion)}else{const k=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",y),C=k?.value||""}if(!C)return;if(f.selectedStaticWidgetTreeInfo.isChildWidget)try{let x;if(C==="original"){x=w;const P=await re(x);k(P)}else{let P=new j;P.typeConnection="the_widget_version",P.name="version";let B=new Ne;B.type="the_version",B.search=C,B.logicoperator="=",B.name="versionFilter",B.operateon="version",B.composition=!1;const $=new j;$.typeConnection="the_widget_s_copy",$.name="copywidgets",$.freeschemaQueries=[P],$.selectors=["the_widget_name","the_widget_type","the_widget_html","the_widget_css","the_widget_js","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_origin","the_widget_version"];const U=new j;U.conceptIds=[w],U.freeschemaQueries=[$],U.inpage=100,U.filters=[B],U.filterLogic="( versionFilter )",U.outputFormat=fe,ye(U,"").subscribe(async ee=>{try{const F=ee?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;if(!F){L.errorToast("Widget version not found");return}const Y=await re(F);k(Y)}catch(Z){console.error("Error in widget version callback:",Z),L.errorToast("Error updating widget version")}})}async function k(P){const B=JSON.parse(JSON.stringify(f.staticWidgetTree)),U=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,ee={...P,wrapper:U};let Z=!1;const F=ne=>{for(let Be=0;Be<ne.length;Be++){if(ne[Be].wrapper===U){ne[Be]=ee,Z=!0;break}if(ne[Be].children&&ne[Be].children.length>0&&(F(ne[Be].children),Z))break}};if(F(B.children),!Z){console.error("Could not find child widget to update"),L.errorToast("Failed to update widget");return}f.widgetTree=B,f.selectedStaticWidgetTreeInfo.widgetTree=ee,_&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const Y=document.getElementById(U);if(Y){Y.innerHTML="",await Te(ee,Y);let ne;C==="original"?ne=w:ne=P.id,Y.setAttribute("data-widgetid",ne.toString()),X(ee,!1),ce(),L.successfullToast("Widget version updated")}}}catch(x){console.error("Error updating child widget version:",x),L.errorToast("Error updating widget version")}else if(C==="original")await Oe(null,w,w),ce();else{let x=new j;x.typeConnection="the_widget_version",x.name="version";let k=new Ne;k.type="the_version",k.search=`${C}`,k.logicoperator="=",k.name="versionFilter",k.operateon="version",k.composition=!1;const P=new j;P.typeConnection="the_widget_s_copy",P.name="copywidgets",P.freeschemaQueries=[x],P.selectors=["the_widget_name","the_widget_type"];const B=new j;B.conceptIds=[w],B.freeschemaQueries=[P],B.inpage=100,B.filters=[k],B.filterLogic="( versionFilter )",B.outputFormat=fe;let $=0;await ye(B,"").subscribe(async U=>{const Z=U?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;Z?$=Z:L.errorToast("widget version not found")}),$&&await Oe(null,$,w)}}return S};return{createWidgetCopy:s,removeMyWidgetFromPublic:o,removeFromTemplate:r,renderSavedWidgets:t,renderBoomWidgets:i,renderPublicWidgets:e,renderTemplateLayouts:a,saveFromPublic:l,checkContent:d,enableWidgetButtons:u,disableWidgetButtons:c,clearDraggedWidget:g,initializeWidgetVersions:W,removeWidgetContainer:T,loadWidgetVersionWith:E}})(),_e=(()=>{const a=async r=>{r.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const u=d?.parentElement;if(u&&d){const c=d.previousElementSibling;c?.classList.contains("mftsccs-marking-element")&&c.childNodes.length>1&&alert("insert into marker"),c&&u.insertBefore(d,c)}await n(),Et(),D.updateActionHistories()},e=async r=>{r.stopPropagation();const d=R?.staticElement;if(d?.classList.contains("content-target"))return;const u=d?.parentElement;if(u&&d){const c=d.nextElementSibling;c&&u.insertBefore(c,d)}await n(),Et(),D.updateActionHistories()};async function n(){const r=f.widgetTree,d=f.selectedStaticWidgetTreeInfo.widgetTree;function u(g){for(const m of g.children){if(m===d)return g;const p=u(m);if(p)return p}return null}const c=u(r);if(c){let g=null;c.wrapper&&c.wrapper!="0"?g=document.getElementById(c.wrapper):g=document.getElementById("builder-workarea"),c.html=g.innerHTML}else await le()}function t(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(r){const d=Math.random()*16|0;return(r==="x"?d:d&3|8).toString(16)})}async function i(r,d,u){if(r.childNodes.length){if(r.dataset.widgetid){await Ut(null,!0,parseInt(r.dataset.widgetid),r.parentElement?r.parentElement:d),le(),pe(),r.remove();return}r.childNodes.forEach(c=>{i(c,d)})}}return{moveUp:a,moveDown:e,copyElement:async r=>{r.stopPropagation();const d=R.staticElement;if(d?.removeAttribute("draggable"),d.classList.contains("content-target"))return;const u=d?.parentElement,c=d.cloneNode(!0);await i(c,u),c.dataset.widgetid||u.insertBefore(c,d.nextSibling),pe(),await n(),ce(),D.updateActionHistories()},fixContentTargetHeight:(r,d)=>{const u=window.getComputedStyle(d);console.log("wrapper element computed height",u.height,r)},editWidget:async r=>{console.log("event.target",r.target);const d=document.getElementById("edit-widget");d.style.display="none";const c=R.staticElement.closest(".added-widget-container");c.classList.replace("added-widget-container","edited-widget-container");const g=c.querySelectorAll(".widget_container_disabled");g.length&&g.forEach(h=>{h.className="widget_container widget_selected"}),R.staticElement?.removeAttribute("draggable");let m=c.cloneNode(!0);const p=await Ce(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=p.innerHTML,f.editedWidgets[c.id]=f.selectedStaticWidgetTreeInfo.widgetTree,R.staticElement?.setAttribute("draggable","true"),pe()},generateUUID:t}})();class f{static newWidget=new gt;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await I();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const n=document.getElementById("widget-btn-wrapper");n&&n.querySelectorAll("button").forEach(t=>t.disabled=!0),await this.updateOwnerStatus(),this.#e&&n&&n.querySelectorAll("button").forEach(t=>t.disabled=!1)}}catch(n){console.error("error updating widget properties",n)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const n={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString()},t=await O("widget",this.userId,n),i=await K(this.entityId);if(await G(i,t,"s_widget"),this.staticWidgetTree?.assistant?.id){const s=await O("assistant",this.userId,this.staticWidgetTree?.assistant);await G(t,s,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let o=0;o<s.length;o++){const l=await O("css_library",this.userId,s[o]);await G(t,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let o=0;o<s.length;o++){const l=await O("js_library",this.userId,s[o]);await G(t,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let o=0;o<s.length;o++){const l=await O("custom_function",this.userId,s[o]);await G(t,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let o=0;o<s.length;o++)await this.createChildWidget(s[o],t)}return await N.SyncDataOnline(),t}static async createChildWidget(e,n){const t={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper},i=await O("widget",this.userId,t),s={wrapper:e?.wrapper,type:e?.type,parent:i.id},o=await O("child_widget",this.userId,s);if(await G(n,o,"s_child"),await G(o,i,"info"),e.useLatest&&e.useLatest===!0){const l=await te("use_latest","true",!1,this.userId,999);await G(o,l,"use_latest")}if(e?.library?.css?.length){const l=e?.library?.css;for(let r=0;r<l.length;r++){const d=await O("css_library",this.userId,l[r]);await G(i,d,"s_css_library")}}if(e?.library?.js?.length){const l=e?.library?.js;for(let r=0;r<l.length;r++){const d=await O("js_library",this.userId,l[r]);await G(i,d,"s_js_library")}}if(e?.custom_functions?.length){const l=e?.custom_functions;for(let r=0;r<l.length;r++){const d=await O("custom_function",this.userId,l[r]);await G(i,d,"s_custom_function")}}if(e?.children?.length)for(let l=0;l<e?.children?.length;l++)await this.createChildWidget(e.children[l],i)}static async updateOwnerStatus(){try{const e=await Q(this.entityId),n=await Q(this.staticWidgetTree.origin||this.staticWidgetTree.id),t=await ln(e,n,"s_widget","the_entity_s_widget");if(console.log("updating canupdate status",t,e.id,n.id),t.length)this.#e=!0;else{const i=await ha(this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(console.log("canupdate connectionPage",i,"body widget id",this.staticWidgetTree.id),i.length){const s=await Q(i[0].id);(await ln(e,s,"s_page","the_entity_s_page")).length&&(this.#e=!0),console.log("canupdate page",e.id,s.id)}}console.log("canupdate",this.#e)}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await Q(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),n={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions},t=await q.createWidgetCopy(e,this.userId,this.token,!0,n);if(this.staticWidgetTree.children.length){const i=this.staticWidgetTree.children;for(let s=0;s<i.length;s++)await this.createChildWidget(i[s],t)}return await N.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},t}catch(e){throw e}}static async savePageWidget(e,n){const t={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:n,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString()},i=await O("widget",this.userId,t);if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let l=0;l<o.length;l++){const r=await O("css_library",this.userId,o[l]);await G(i,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let l=0;l<o.length;l++){const r=await O("js_library",this.userId,o[l]);await G(i,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let l=0;l<o.length;l++){const r=await O("custom_function",this.userId,o[l]);await G(i,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let l=0;l<o.length;l++)await this.createChildWidget(o[l],i)}const s=await Q(e);return await G(s,i,oe.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async copyPageWidget(e,n,t){const i={after_render:t?.after_render,before_render:t?.before_render,name:n,html:t?.html,css:t?.css,js:t?.js,type:t?.type,timestamp:new Date().toISOString()},s=await O("widget",this.userId,i);if(t?.library?.css?.length){const o=t?.library?.css;for(let l=0;l<o.length;l++){const r=await O("css_library",this.userId,o[l]);await G(s,r,"s_css_library")}}if(t?.library?.js?.length){const o=t?.library?.js;for(let l=0;l<o.length;l++){const r=await O("js_library",this.userId,o[l]);await G(s,r,"s_js_library")}}if(t?.custom_functions?.length){const o=t?.custom_functions;for(let l=0;l<o.length;l++){const r=await O("custom_function",this.userId,o[l]);await G(s,r,"s_custom_function")}}if(t.children.length){const o=t.children;for(let l=0;l<o.length;l++)await this.createChildWidget(o[l],s)}return await G(e,s,oe.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async hasWidgetChanged(e){const n=["html","css","js","after_render","before_render","update","mount_child"],t=r=>r?r.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function i(r){let d=0;for(let u=0;u<r.length;u++){const c=r.charCodeAt(u);d=(d<<5)-d+c,d=d&d}return d}const s=(r,d)=>n.some(u=>{const c=t(r[u]),g=t(d[u]),m=i(c),p=i(g),h={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==p?(console.log("value changed",`
value 1
`,c,`
value 2
`,g),!(c==""||c==h[u])):!1}),o=(r,d)=>r.length!==d.length?!0:r.some((u,c)=>s(u,d[c])||o(u.children,d[c].children)),l={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0};return e?(console.log("checking tree static",this.staticWidgetTree,"to initial tree",this.initialWidgetTree),s(this.staticWidgetTree,this.initialWidgetTree)||o(this.staticWidgetTree.children,this.initialWidgetTree.children)):s(this.staticWidgetTree,l)||o(this.staticWidgetTree.children,l.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");L.infoMessageToast("Publishing Widget",0);let e=null;const n=await Q(this.staticWidgetTree.origin),t=this.staticWidgetTree.origin||this.staticWidgetTree.id,i=await ke(t,"the_widget_latest");if(i&&i.length){for(let o=0;o<i.length;o++)await xe(i[o].id);try{const o=await fetch(ua.NODE_CACHE_URL+`/api/get-latest-widget?id=${n.id}`,{method:"DELETE"});o.ok||console.error("Failed to delete widget from cache server:",o.status)}catch(o){console.log("error removing widget from cache server",o)}}this.staticWidgetTree.origin&&(e=await Q(this.staticWidgetTree.id),await G(n,e,"latest"),await N.SyncDataOnline()),await q.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),L.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,n=await ke(e,"the_widget_latest");if(n.length){const i=n[0].toTheConceptId===this.staticWidgetTree.widgetId;console.log("ami?",i,this.staticWidgetTree),i?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1}const t=document.getElementById("publish-widget");t&&(t.style.display="block",this.staticWidgetTree.isPublished?(t.textContent="Published",t.disabled=!0,t.style.cursor="not-allowed"):(t.textContent="Publish This Version",t.disabled=!1,t.style.cursor="pointer"))}}var An=(a=>(a.page="page",a.widget="widget",a))(An||{});const ao=ns("mftsccs-browser"),io=`
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
`,so=`
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
`,oo=`
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
    "mftsccs-browser": "${ao}"
  }
}
`,ro=`
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
`,lo=`
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
`,co=`
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
  `,uo=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${ie.baseURL}",
    baseNodeUrl: "${ie.baseNodeUrl}",
    boomURL: "${ie.boomURL}",
    aiURL: "${ie.aiURL}",
  }
`,mo=`
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
`,Jt=a=>`
${a.map(e=>{if(e.importFrom)return`import ${e.content} from "../pages${e.importFrom}";`}).join(`
`)}

type RouteParams = {
  path: any;
  linkLabel?: string;
  content: any;
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  ${a.map(e=>`
    {
        path: "${e.path}",${e.linkLabel?`linkLabel: "${e.linkLabel}",`:""}
        content: ${e.content}
    },`).join(`
`)}
];

export default routes;
`,go=`
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
`,po=`
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
}`,ho=`
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

`;class Gt{async createProject(e,n,t){const i=await O(M.PROJECT_COMP_NAME,n,e),s=await K(t);return await V(s,i,oe.ENTITY_PROJECT_LINKER),i}async getAllProjects(e){return new Promise(async(n,t)=>{const i=await I(),s=new j;s.typeConnection=`the_entity_${oe.ENTITY_PROJECT_LINKER}`,s.selectors=[`the_${M.PROJECT_COMP_NAME}_name`],s.name="first",s.inpage=100;const o=new j;o.conceptIds=[e||i.entityId],o.name="second",o.inpage=100,o.freeschemaQueries=[s],o.outputFormat=fe,await ye(o,"").subscribe(async l=>{const r=l?.[0]?.data?.the_entity?.[`the_entity_${oe.ENTITY_PROJECT_LINKER}`];n(r)}).catch(l=>{console.error(l);const r=l?.message;L.errorToast(`${r}`,4),t({error:!0,message:r})})})}async getProjectById(e){const t=(await I())?.token;let i=new z;i.composition=e,i.fullLinkers=[`the_${M.PROJECT_COMP_NAME}_name`,`the_${M.PROJECT_COMP_NAME}_main_page`,`the_${M.PROJECT_COMP_NAME}_${oe.PROJECT_PAGE_LINKER}`],i.inpage=100;let s=new z;return s.fullLinkers=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_body`],s.inpage=100,await he([i,s],t)}async updateProjectField(e,n,t){const i=await I(),s=`the_${M.PROJECT_COMP_NAME}_${e}`;await be(t,s);const o=await Q(t),l=await te(`${e}`,`${n}`,!1,i.userId,4,999);await V(o,l,e)}async deleteProject(e){try{return await Se(e),!0}catch(n){return console.error("Failed to delete project:",n),!1}}async addPagesToProject(e,n){try{const t=await Q(e);if(!t){console.error("Project not found");return}await be(e,`the_project_${oe.PROJECT_PAGE_LINKER}`);for(const i of n){const s=await Q(i);if(!s){console.error("Page not found");return}await V(t,s,oe.PROJECT_PAGE_LINKER)}await N.SyncDataOnline()}catch(t){console.error("Failed to add page to project:",t)}}async deletePageFromProject(e,n){try{const t=await Q(e);if(!t){console.error("Project not found");return}const i=await Q(n);if(!i){console.error("Page not found");return}const s=await ln(t,i,"",`the_project_${oe.PROJECT_PAGE_LINKER}`);if(!s){console.error("Connection not found");return}await xe(s?.[0]?.id),await N.SyncDataOnline()}catch(t){console.error("Failed to delete page from project:",t)}}async setMainPage(e,n){try{const t=await Q(e);if(!t){console.error("Project not found");return}const i=await Q(n);if(!i){console.error("Page not found");return}await be(e,"the_project_main_page"),await V(t,i,"main_page"),await N.SyncDataOnline()}catch(t){console.error("Failed to set main page:",t)}}}let ue=!1;const fo=async()=>{if(ue)return;ue=!0;let a=new qt;const e=await Qt(a),n=e?.routesDir,t=e?.pagesDir;await wo(t,n),a.generateAsync({type:"blob"}).then(function(i){let s=document.createElement("a");s.href=URL.createObjectURL(i),s.download="my_files.zip",s.click()}),ue=!1},yo=async a=>{if(ue)return;ue=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new qt;const t=await Qt(n),i=t?.widgetsDir,s=t?.pagesDir;i&&s&&await vo(a,s,i),t?.routesDir?.file("routes.ts",Jt(e)),n.generateAsync({type:"blob"}).then(function(o){let l=document.createElement("a");l.href=URL.createObjectURL(o),l.download="my_files.zip",l.click()}),ue=!1},Qt=async a=>{a.file("index.html",ro),a.file("vite.config.js",io),a.file(".gitignore",so),a.file("package.json",oo),a.file("tsconfig.json",co);let e=a.folder("public");if(!e){console.log("unable to create public folder");return}let n=a.folder("src");if(!n){console.log("unable to create src folder");return}n?.file("app.ts",lo),n?.file("style.css","");let t=n?.folder("environments");if(!t){console.log("unable to create environments folder");return}t?.file("environment.dev.ts",uo);let i=n?.folder("widgets");if(!i){console.log("unable to create widgets folder");return}let s=n?.folder("pages");if(!s){console.log("unable to create pages folder");return}let o=n?.folder("services");if(!o){console.log("unable to create services folder");return}o?.file("widget.service.ts",go),o?.file("drop.service.ts",po),o?.file("validator.service.ts",ho);let l=n?.folder("routes");if(!l){console.log("unable to create routes folder");return}return l?.file("renderRoute.service.ts",mo),{srcDir:n,pagesDir:s,servicesDir:o,publicDir:e,environmentsDir:t,widgetsDir:i,routesDir:l}},wo=async(a,e)=>{if(!a&&!e)return;let n=[];const t=await I(),i=t?.entityId,s=t?.token,o=new z;o.composition=i,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const l=new z;l.inpage=100,l.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const r=await he([o,l],s);if(r?.data.the_entity?.the_entity_s_page?.length)for(let d=0;d<r?.data.the_entity?.the_entity_s_page?.length;d++){const u=r.data.the_entity.the_entity_s_page[d];let c={page:u?.data?.the_page?.the_page_body?.[0]?.id,title:u?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:u?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:u?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:u?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:u?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:u?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!c.page)continue;const g=`${c.slug.split("-").map((h,v)=>v===0?h.charAt(0).toLowerCase()+h.slice(1):h.charAt(0).toUpperCase()+h.slice(1)).join("")}`;n.push({path:`/${c.slug}`,content:`${g}Index`,importFrom:`/${c.slug}/${c.slug}.index.ts`});let m=a?.folder(c.slug);const p=`
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
`;m?.file(`${c.slug}.index.ts`,p)}e?.file("routes.ts",Jt(n))},vo=async(a,e,n)=>{console.log("widgetsDir",n);const i=(await I())?.token,s=await jn(a,i,!0);let o=e?.folder("home");const l=`
import * as tsccs from "mftsccs-browser";

${s?.css?'import "./home.style.css";':""}
import { getWidgetFromId } from "../../services/drop.service.ts";
import { renderLatestWidget } from 'mftsccs-browser';

export default class homeIndex extends tsccs.StatefulWidget
{

    async  after_render() {        
        // let widgetTree = await getWidgetFromId(${a});
        // tsccs.convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
        const appElement = document.querySelector<HTMLDivElement>("#app");
        let widgetTree = await renderLatestWidget(${a}, appElement);
    }
        
     getHtml() {
        return '';
    }
}
`;o?.file("home.index.ts",l),s?.css&&o?.file("home.style.css",s?.css)},bo=async a=>{if(ue)return;ue=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new qt;const t=await Qt(n),i=t?.widgetsDir,s=t?.pagesDir;let o="";i&&s&&(o=await _o(a,s)),t?.routesDir?.file("routes.ts",Jt(e)),n.generateAsync({type:"blob"}).then(function(l){let r=document.createElement("a");r.href=URL.createObjectURL(l),r.download=`${o||"page"}.zip`,r.click()}),ue=!1},_o=async(a,e)=>{const n=await I(),t=n?.entityId,i=n?.token,s=await jn(a,i,!0),o=new z;o.composition=t,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const l=new z;l.inpage=100,l.composition=a,l.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const d=(await he([o,l],i))?.data?.the_entity?.the_entity_s_page?.filter(p=>p?.id==a),u=d?.[0]?.data?.the_page?.the_page_body?.[0]?.id,c=d?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let g=e?.folder("home");const m=`
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
    `;return g?.file("home.index.ts",m),s?.css&&g?.file("home.style.css",s?.css),c},Eo=async a=>{if(ue)return;if(!a){console.log("Project id is required");return}const i=(await new Gt().getProjectById(a))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();ue=!0;let s=new qt;const o=await Qt(s),l=o?.routesDir,r=o?.pagesDir;await To(r,l,a),s.generateAsync({type:"blob"}).then(function(d){let u=document.createElement("a");u.href=URL.createObjectURL(d),u.download=`the_${i}.zip`,u.click()}),ue=!1},To=async(a,e,n)=>{if(!a&&!e)return;let t=[];const s=(await I())?.token,o=new z;o.composition=n,o.inpage=100,o.fullLinkers=["the_project_s_page","the_project_main_page"];const l=new z;l.inpage=100,l.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const r=await he([o,l],s),d=r?.data.the_project?.the_project_main_page?.[0]?.id;if(r?.data.the_project?.the_project_s_page?.length)for(let u=0;u<r?.data.the_project?.the_project_s_page?.length;u++){const c=r.data.the_project.the_project_s_page[u];let g={page:c?.id,title:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:c?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:c?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:c?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:c?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!g.page)continue;const m=`${g.slug.split("-").map((v,T)=>T===0?v.charAt(0).toLowerCase()+v.slice(1):v.charAt(0).toUpperCase()+v.slice(1)).join("")}`;t.push({path:`/${g.slug}`,content:`${m}Index`,importFrom:`/${g.slug}/${g.slug}.index.ts`}),g.page==d&&t.push({path:"/",content:`${m}Index`});let p=a?.folder(g.slug);const h=`
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
                }`;p?.file(`${g.slug}.index.ts`,h)}e?.file("routes.ts",Jt(t))};async function So(){const a=new se("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await a.initializeEditor()}async function Co(){const a=new se("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await a.initializeEditor()}async function Da(){await So(),await Co(),await ds(),await us()}function Lo(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function Na(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function pn(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class qa{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const t=(await I())?.token;Sn(),Na(),document.querySelector("#widget-properties #widget-type input")?.remove(),Lo(),await Da();let s=Cn(),o=await Ee(e,t),l=await re(o?.widgetId??e),r=await Te(l,s);this.addPageUpdate(e),pn(),f.resetWidgetTree(),f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),X(l,!1,r,!0),q.enableWidgetButtons(),Rt(),ce(),pe()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
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
      `,this.isDroppedDown=!1,this.arrowBtn=n.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=n.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,n){La(e.css,n?.css),Ca(e.after_render),Wa(e.before_render)}}const ia={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},sa=new Ue,Fa=new qa;async function xn(a){a.preventDefault();try{await Pe(),await Xe();const e=document.getElementById("fspage-save-button"),n=Number(e?.getAttribute("data-pageid")),s="widget_"+(await sa.getPageById(n)).data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_slug`].data.the_slug,o=document.querySelectorAll(".edited-widget-container");L.infoMessageToast("Saving page...",0),o?.length&&o.forEach(c=>{const g=c.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),c.classList.remove("edited-widget-container")});const l=await Qe();f.staticWidgetTree.html=l,await f.savePageWidget(n,s),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast(ia.PAGE_SAVE);const u=(await sa.getPageById(n))?.data?.the_page?.the_page_body?.id;return await Fa.LoadPageWidget(u),ia.PAGE_SAVE}catch(e){In(e,"There is an error on saving widget")}}async function Mn(a,e,n){a.preventDefault();const t=document.getElementById("updateFsPagePublish"),i=document.getElementById("updateFsPage"),s=i?.innerHTML||"";try{const o=document.getElementById("updateFsPagexx");t&&t.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating.."),o&&(o.classList.add("disabled"),o.textContent="Updating..");const l=document.querySelectorAll(".edited-widget-container");L.infoMessageToast("Updating Page...",0),l?.length&&(L.infoMessageToast("Updating page...",0),l.forEach(c=>{const g=c.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),c.classList.remove("edited-widget-container")}));const r=await Qe();f.staticWidgetTree.html=r;const d=await f.updateWidget();return console.log("updateWidgetResponse ->",d),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Page Updated Successfully"),await Fa.LoadPageWidget(e),n&&n===!0&&await f.publish(),"updated widget successfully!"}catch(o){console.error("error updating page",o),o instanceof Error&&L.errorToast(o.message),document.querySelector(".infoMessageToast")?.remove()}finally{t&&t.classList.remove("disabled"),i&&(i.classList.remove("disabled"),i.innerHTML=s)}}function Wo(a){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const n=`${window.location.origin}/page-preview/${e}`;window.open(n,"_blank")?.focus()}}function Ao(a,e=0){return window.saveWidgetInFolders=Mo,`
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
                        <form method="dialog" onsubmit="saveWidgetInFolders(event, 'folder-widget-container', '${e||""}', ${a} )" id="form-folder-modal">
                            <div class="flex flex-col mb-2">
                                <label for="name" class="form-label">Name</label>
                                <input ${a?'id="save-to-folder-name"':'id="folder-name"'}  required ${a?"disabled":""} class="form-control" />
                            
                            </div>
                            <div class="flex flex-col mb-2">
                                <label for="description" class="form-label">Description</label>
                                <textarea rows="2"  ${a?'id="save-to-folder-description"':'id="description"'} class="form-control" placeholder="Description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END .a-dialog-body  -->
      </dialog>
    `}let an,at;async function xo(a,e){an=a;const n=Ao(e,typeof a=="object"?0:a),t=document.createElement("div");t.innerHTML=n;const i=t.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(i),await de("folder-widget-container");const s=await I();if(!s)return;let o,l,d=(await Ye(an,s.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(o=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),o&&(o.value=d),l=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(o=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),l=document.getElementById("folder-widget-container")?.querySelector("textarea#description"));const u=document.getElementById("widgetFolder");at=await De(ie.folder_widget,u,{widgetName:o.value,widgetDescription:l?.value,widgetId:an,showCheckbox:!0,showFiles:!1})}async function Mo(a,e,n,t){a.preventDefault(),console.warn("asdfads",at.selectedConceptIds);let i=[];at&&at?.selectedConceptIds?.length>0&&(i=at.selectedConceptIds||[]);try{L.infoMessageToast("Saving Widget...",0),await Pe();const s=document.getElementById("folder-widget-container"),o=s?.querySelector('button[type="submit"]');o.textContent="Saving";const l=s?.querySelector("input"),r=s?.querySelectorAll("button"),u=(document.getElementById("save-to-folder-name")||document.getElementById("folder-name")).value;r&&r.forEach(E=>{E.disabled=!0}),l&&(l.disabled=!0),await Xe();let c;if(!t){R.staticElement?.removeAttribute("draggable");const E=document.querySelectorAll(".edited-widget-container");E?.length&&E.forEach(async _=>{if(_.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[_.id]){const S=await Ce(_,"div.mftsccs-marking-element");f.editedWidgets[_.id].html=S.innerHTML}});const w=await Ja();f.staticWidgetTree.html=w;const y=await f.saveWidget(u);c=await K(y.id),n=c.id}const g=await I(),m=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,p=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,h={title:m,source_url:window.location.href,widget_id:n,short_desc:p,note:"",data_type:"widget",created_on:Date.now()};if(i.length==0){const E=g?.userConcept;c=await K(Number(n));let w={...h,boom_folder:{name:"",parent:E}};const y=await He({boomgpt:w},void 0,void 0,void 0,g.userId,4);await Qn(await K(Number(E)),y,"the_boom_folder_s_contain"),await G(y,c,"the_refer")}else if(i?.length>0)for(let E=0;E<i.length;E++){const w=i[E];c=await K(Number(n));const y=await K(Number(w));if(!y)throw new Error("Selected folder concept not found!");let _={...h,boom_folder:{name:y.name||"",parent:w}};const S=await He({boomgpt:_},void 0,void 0,void 0,g.userId,4);await Qn(await K(Number(w)),S,"the_boom_folder_s_contain"),await G(S,c,"the_refer")}await N.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),we("folder-widget-container"),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget saved successfully!"),t||(await q.renderSavedWidgets(),Oe(a,Number(n)))}catch(s){document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Error in saving widget"),In(s,"There is an error on saving widget")}}class Oa extends gt{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";_pageBuilderService;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const n=I();if(n&&(this.saveBoomButtonHTML=`
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
    `,e){this.the_params=e,this._pageBuilderService=new qa;const t=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+t:"Widget Builder";const i=this.the_params?.page_id;n&&e.type==An.page&&(this.saveBoomButtonHTML=`
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
`}before_render(){this.render()}after_render(){if(this.the_params){document.getElementById("fspage-save-button").addEventListener("click",xn);const n=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!n){Rt();return}this._pageBuilderService.LoadPageWidget(Number(n))}}getHtml(){return window.openSaveWidgetModal=Pn,window.saveWidget=za,window.updateWidget=Bn,window.newWidget=je,window.previewWidget=jo,window.downloadWebsite=fo,window.moveUp=_e.moveUp,window.moveDown=_e.moveDown,window.copyElement=_e.copyElement,window.editWidget=_e.editWidget,window.openConvertModal=No,window.convertToWidget=Ho,window.updatePage=Mn,window.previewPage=Wo,window.undoAction=D.undoAction,window.redoAction=D.redoAction,window.saveWidgetToFolderBtn=xo,window.openPromptModal=As,window.refineAIData=mn,`
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
    `}}function Va(){N.conceptsSyncArray=[],N.connectionSyncArray=[]}class ko{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let n="",t="";return this.props.id==="fs-create-page-modal"?t=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?t=this.editPageModal():this.props.id==="create-project-modal"?(t=this.createNewProjectModal(),n="m-large"):this.props.id==="add-pages-project"&&(t=this.addPagesModalHtml(),n="m-large"),e.innerHTML=`
      <div class="m-content ${n}">
        <div id="closeModalBtn" class="close-modal">
            <img src="./images/icons/cross-close.svg" alt="" class="icon" />
        </div>
        <div class="m-header">
          <span id="modalHeader">${this.props.headerText}</span>
        </div>
        ${t}
      </div>
    `,e.querySelector("#closeModalBtn").addEventListener("click",this.handleClose.bind(this)),e}updateModal(){this.props.isOpen?this.modal.classList.add("open"):this.modal.classList.remove("open")}handleClose(){Va(),this.modal.remove()}createNewPageModal(){return`
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
    `}}function At(a){new ko(a)}function oa(a){const e=document.getElementById(a);e&&e.remove()}class kn{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new Ta,this._pagesTSCCSService=new Ue}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),n=document.getElementById("saved-page-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const t=document.getElementById("fs-create-page-button");t?.removeEventListener("click",this.createButtonClickHandler),t?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(l=>{l.removeEventListener("click",this.deletePageButtonClickHandler),l.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(l=>{l.removeEventListener("click",this.editPageButtonClickHandler),l.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(l=>{l.removeEventListener("click",this.duplicatePageButtonClickHandler),l.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(t=>t.remove())}createButtonClickHandler=()=>{At({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const n=document.getElementById("fs-create-page-form"),t=n?.elements.namedItem("title");if(!t){console.error("page_title not found");return}const i=async()=>{const o=await this._pagesTSCCSService.generateSlug(t.value);n.elements.namedItem("slug")?.setAttribute("value",o)};t.addEventListener("keyup",i);const s=()=>{t.removeEventListener("keyup",i),document.getElementById("fs-create-page-modal")?.removeEventListener("close",s)};document.getElementById("fs-create-page-modal")?.addEventListener("close",s)};savePageButtonClickHandler=async()=>{const n=document.getElementById("fs-create-page-form").elements;if(!n.title.value){n.title.style.borderColor="red";return}L.infoMessageToast("Creating page...",0);const t=await dn(n),i=await I();await this._pagesTSCCSService.savePage(t,i?.userId,i?.entityId),await N.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),oa("fs-create-page-modal"),setTimeout(()=>{L.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),t=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;At({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:t,slug:i}});const s=document.getElementById("fs-edit-page-form"),o=s?.elements.namedItem("title");if(!o){console.error("page_title not found");return}const l=async()=>{document.getElementById("fs-edit-page-button")?.removeAttribute("disabled");const c=await this._pagesTSCCSService.generateSlug(o.value);s.elements.namedItem("slug")?.setAttribute("value",c)};o.addEventListener("keyup",l);const r=()=>{o.removeEventListener("keyup",l),document.getElementById("fs-edit-page-modal")?.removeEventListener("close",r)};document.getElementById("fs-edit-page-modal")?.addEventListener("close",r),document.getElementById("fs-edit-page-button")?.addEventListener("click",()=>this.updatePageButtonClickHandler(n))};async PageInputElementChangeHandler(e,n){const t=e.target,i=t.name,s=t.value;let o=await this._pagesTSCCSService.checkSlugAvailablity(s);if(i==="slug"&&!o){document.getElementById("fs-update-page-button")?.setAttribute("disabled","true"),t.style.borderColor="red",t.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(t.getAttribute("name"),t.value,Number(n))}updatePageButtonClickHandler=async e=>{const n=document.getElementById("fs-edit-page-form"),t=n.elements.namedItem("title");if(!t.value.trim()){t.style.borderColor="red";return}const i=n.elements;if(!i.title.value){i.title.style.borderColor="red";return}L.infoMessageToast("Renaming page...",2);const s=await dn(i),o=await I();await this._pagesTSCCSService.renamePage(s,e,o?.userId),await N.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Page renamed successfully");const r=new URLSearchParams(window.location.search).get("page-id");if(e===r){const d=document.getElementById("widget-builder");d.textContent=`Page Builder: ${s?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),oa("fs-edit-page-modal")};deletePageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),t=e.target.closest(".dropdown-menu").dataset.title,i=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${t}" with the slug "${i}"?`)?(L.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(n)),await N.SyncDataOnline(),va("/"),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const t=e?.target?.getAttribute("data-id"),s=(await this._pagesTSCCSService.getPageById(Number(t)))?.data?.the_page,o=s?.the_page_title?.data?.the_title?.trim()+" copy",l=s?.the_page_slug?.data?.the_slug?.trim()+"-copy",r=s?.the_page_meta_title?.data?.the_meta_title?.trim(),d=s?.the_page_meta_description?.data?.the_meta_description?.trim(),u=s?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),c=s?.the_page_width?.data?.the_width?.trim(),g=s?.the_page_type?.data?.the_type?.trim(),m=s?.the_page_font_family?.data?.the_font_family?.trim(),p=s?.the_page_font_size?.data?.the_font_size?.trim(),h={title:o,slug:l,meta_title:r,meta_description:d,meta_keywords:u,width:c,type:g,font_family:m,font_size:p},v={};for(const[_,S]of Object.entries(h))S&&(v[_]=S);const T=s?.the_page_body?.id,W=await I(),E=await Ee(T,W?.token);let w=await re(E?E.widgetId:T);const y=await this._pagesTSCCSService.savePage(v,W?.userId,W?.entityId);await f.copyPageWidget(y,`widget_${l}`,w),this.initPagesSidebar(),L.successfullToast("Page duplicated successfully")}}async function Io(a){a?.preventDefault();const e=window.location.href,t=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(t))){await bt("Do you want to save changes?")&&(e.includes("?page-id=")?t?await Mn(a,Number(t)):await xn(a):t?await Bn(a,Number(t)):await Pn());const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}f.resetWidgetTree();const s=a.target.getAttribute("data-pageId");history.pushState({},"",`?page-id=${s}`);let l=await new Ue().getPageById(Number(s));l?.error&&je();const r=document.getElementById("midContent"),d=document.getElementById("right-aside"),u={type:An.page,data:l.data?.[`the_${M.PAGE_COMP_NAME}`],page_id:s},c=new Oa(u),g=new Yt(u);d.innerHTML=await g.getHtml(),r.innerHTML="",c.mount(r),as.resetNavigationBar()}class Ra{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new Gt,this._pagesTsccsService=new Ue}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(t=>{let s=t?.data?.[`the_${M.PROJECT_COMP_NAME}`]?.[`the_${M.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
            <li class="project-item">
              <router-link class="project_title" data-projectId="${t.id}">
                <span><img src="./images/icons/projects icon.svg" alt="" class="icon" /></span>
                ${s}
              </router-link>
              <span class="add-icon" title="Add Page" ><img src="./images/icons/add-page.svg" alt="" class="icon" /></span>
              <!-- Three-Dot Dropdown Icon -->
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${t?.id})" title="Options"> more_vert </span>

              <!-- Dropdown Menu -->
              <ul class="dropdown-menu" id="dropdown-menu-${t?.id}">
                <li class="d-flex align-items-center justify-content-between" onclick="renameProjectModal(event, ${t?.id})">
                  <span >Rename</span>
                  <span class="material-symbols-outlined">edit </span>
                </li>
                <li class="delete-project d-flex align-items-center justify-content-between delete-icon" data-projectid="${t.id}">
                  <span >Delete</span>
                  <span class="material-symbols-outlined">delete </span>
                </li>
                <li class="d-flex align-items-center justify-content-between" onclick="downloadProject(${t?.id})">
                  <span>Download</span>
                  <span class="material-symbols-outlined">download </span>
                </li>
                <li class="d-flex align-items-center justify-content-between" onclick="showProjectSetting(${t?.id})">
                  <span>Settings</span>
                  <span class="material-symbols-outlined">settings </span>
                </li>
                <li class="d-flex align-items-center justify-content-between" onclick="window.open('${location.protocol}//preview-${t?.id}.${location.host}', '_blank')">
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
          `}catch(e){return console.error("error",e),e?.status===401&&Ae(),`
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
    `,document.querySelector("body #app")?.appendChild(i),de("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const n=await this._projectsService.getProjectById(e),t=n?.data?.the_project?.[`the_project_${oe.PROJECT_PAGE_LINKER}`],i=n?.data?.the_project?.the_project_main_page?.[0]?.id;return t?.length?t?.map(o=>{let l=o?.data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const r=i==o.id,d=r?'<span class="material-symbols-outlined home-icon">home</span>':"",u=r?"":`<li class="d-flex align-items-center justify-content-between" 
              onclick="setMainPageHandler(event, ${o.id})" data-projectid="${e}">
                  <span class="px-2">Set as Main Page</span>
                  <span class="material-symbols-outlined">home</span>
                </li>`,c=Number(o.id)+Number(e);return`
            <li class="project-page-item" data-projectid="${e}">
              <router-link class="page_title" href="/?page-id=${o.id}" data-pageid="${o.id}" onclick="pageHandler(event)">
                <span class="material-symbols-outlined">description</span>
                ${l}
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
          `}catch(n){return console.error("error",n),n?.status===401&&Ae(),`
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
      `,document.body.appendChild(n),n.showModal(),n}catch(n){return console.error("Error:",n),""}}}function Po(a,e=[],n=[]){return`
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
                            ${e?.map(t=>`
                                <div style="display: flex; align-items: start; gap: 8px; margin-bottom: 5px;">
                                    <input type="checkbox" class="selected-menu-page" data-page-id="${t.id}" ${n.find(i=>Number(i.page)==t.id)?" checked ":""} />
                                    <div>
                                        <p style="margin: 0px; line-height: 16px;">${t.name}</p>
                                        <p style="margin: 0px; line-height: 12px; color: gray;"><span style="font-size: 12px">${t.slug}</span></p>
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
                <a href="https://develop-${a}.develop.freeschema.com" class="btn btn-primary">
                  <b><i>https://develop-${a}.develop.freeschema.com</i></b>
                </a>
              </p>

              <div id="custom-domain-view-holder">
              </div>
            </div>

          </div>
        </div>
    </div>
  </div>

    `}const Bo=async a=>{if(!a){console.log("Project id is required");return}const e=new Gt;let[n,t]=await Promise.all([e.getProjectById(a),Ai(a)]);console.log("project detail",n),console.log("abc menus ",t);const i=n?.data?.the_project?.the_project_main_page?.[0]?.id??0,s=n?.data?.the_project?.the_project_s_page?.map(d=>({id:d.id,name:d?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:d?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:d?.id==i}))??[];console.log("pages",s),document.getElementById("project-setting-dialog")?.remove();const l=document.createElement("dialog");l.setAttribute("id","project-setting-dialog"),l.classList.add("col-md-8"),l.style.flexDirection="column",l.innerHTML=Po(a,s),document.querySelector("body #app")?.appendChild(l),await de("project-setting-dialog"),document.querySelectorAll(".accordion-header").forEach(d=>{d.addEventListener("click",async()=>{d.classList.toggle("active");const u=d.getAttribute("id");if(d.classList.contains("active"))switch(u){case"domain-viewer-btn":const c=document.getElementById("custom-domain-view-holder"),g=await ha(a,"the_project_custom_url");c&&De(102462726,c,{projectId:a,storeUrl:`https://preview-${a}.develop.freeschema.com`,customUrl:g?.[0]?.data?.the_custom_url||""});break}else switch(u){case"domain-viewer-btn":const c=document.getElementById("custom-domain-view-holder");c&&(c.innerHTML="");break}})}),et(t);const r=document.getElementById("save-menu-items");r?.addEventListener("click",async d=>{r&&(r.disabled=!0),console.log("menus save",t),t=t.map(c=>(delete c.edit,c)),console.log("menus filtered save",t),d.target.disable=!0;const u=await xi(a,t);console.log("menu created",u),d.target.disable=!1,et(t),alert("Updated Menu"),r&&(r.disabled=!1)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",d=>{const u=d.target.closest(".custom-menu-item"),c=u?.querySelector("#nameElem"),g=u?.querySelector("#linkElem"),m=u?.querySelector("#actionElem"),p=u?.querySelector("#authElem");if(!c.value){alert("Menu Name is required");return}if(!g.value&&!m.value){alert("Link or Action is required");return}t.push({name:c.value??"",link:g.value??"",action:m.value??"",page:"",order:t.length,auth:!!p.checked,menus:[]}),c.value="",g.value="",m.value="",p.checked=!1,et(t)}),window.handleMenuAction=(d,u,c,g)=>{if(u=="remove")if(g){const m=document.getElementsByClassName("selected-menu-page");for(let p=0;p<m.length;p++){const h=m[p];Number(h.getAttribute("data-page-id"))==g&&h?.checked&&h.click()}}else t.splice(c,1)[0];else if(u=="edit")t[c].edit=!0;else if(u=="cancel")t[c].edit=!1;else if(u=="update"){t[c].edit=!1;const m=d?.target?.closest("li"),p=m?.querySelector("#menuName").value??"",h=m?.querySelector("#menuLink").value??"",v=m?.querySelector("#menuAction").value??"",T=!!m?.querySelector("#menuAuth").checked;t[c].name=p,t[c].link=h,t[c].action=v,t[c].auth=T}else if(u=="up"){const m=t.splice(c,1)[0];t.splice(c-1,0,m),t=t.map((p,h)=>({...p,order:h}))}else if(u=="down"){const m=t.splice(c,1)[0];t.splice(c+1,0,m),t=t.map((p,h)=>({...p,order:h}))}else console.warn("unacceptable action ",u);et(t)},document.querySelectorAll(".selected-menu-page").forEach(d=>{d.addEventListener("change",u=>{console.log("e.target.changed",u.currentTarget.checked);const c=parseInt(u.currentTarget.getAttribute("data-page-id"));if(u.currentTarget.checked){const g=s.find(m=>m.id==c);console.log("pages",g,s),t.push({name:g.name??"",link:g.slug??"",action:"",page:g.id??"",order:t.length,auth:!1,menus:[]})}else{const g=(m,p)=>{for(let h=0;h<m.length;h++){const v=m[h];v.menus&&v.menus.length>0&&(v.menus=g(v.menus,p))}return m.filter(h=>h.page!=p)};t=g(t,c)}et(t)})})};class Ua{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new Ra,this._projectsTSCCSService=new Gt,this._pagesTSCCSService=new Ue}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),n=document.getElementById("saved-project-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const t=document.getElementById("fs-create-project-button");t?.removeEventListener("click",this.createProjectHandler),t?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(l=>{l.removeEventListener("click",this.getProjectPagesListHandler),l.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(l=>{l.removeEventListener("click",this.addPageToProjectHandler),l.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(l=>{l.removeEventListener("click",this.deleteProjectHandler),l.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=Eo,window.showProjectSetting=Bo,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{At({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,n)=>{try{const s=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",s,n),await N.SyncDataOnline(),this.initProjectsSidebar()}catch(t){console.error("Failed to rename project:",t)}};getProjectPagesListHandler=async e=>{const n=e.target.dataset.projectid,t=e.target.parentElement.querySelector(".project-pages-list");if(t){if(!t.classList.contains("d-none")){t.classList.add("d-none");return}t.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,t.classList.remove("d-none");const i=await this._projectsHTMLService.getProjectPagesListHTML(n);t.innerHTML=i}};deleteProjectHandler=async e=>{try{let n=e.target.dataset.projectid;n||(n=e.target.parentElement.dataset.projectid),await bt("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(n),await N.SyncDataOnline(),L.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(n){console.error("Failed to delete project:",n),L.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,n)=>{try{let t=e.target.parentElement.parentElement.dataset.projectid;await bt("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(t,n),await N.SyncDataOnline(),this.initProjectsSidebar())}catch(t){console.error("Failed to delete page from project:",t)}};setMainPageHandler=async(e,n)=>{e.preventDefault(),e.stopPropagation();try{let t=e.target.closest(".project-page-item").dataset.projectid;L.infoMessageToast("Setting page as main page...",0);const i=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(t,n),await N.SyncDataOnline();const s=await this._projectsHTMLService.getProjectPagesListHTML(t),o=e.target.closest(".project-pages-list");o&&(o.innerHTML=s,o.classList.remove("d-none")),i?.remove(),L.successfullToast("Main page set successfully!")}catch(t){console.error("Failed to set main page:",t),document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),At({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const n=e.target.previousElementSibling.dataset.projectid,i=(await this._projectsTSCCSService.getProjectById(n))?.data?.the_project?.[`the_project_${oe.PROJECT_PAGE_LINKER}`];let s=i?i.map(l=>({id:l.id,title:l?.data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const o=document.getElementById("add-pages-project");await this.addPageToProject(o,!1,n,s)}catch(n){console.error("Failed to add page to project:",n)}};addPageToProject=async(e,n,t,i=[])=>{try{const s=await this._pagesTSCCSService.getAllPages(),o=s?s.map(m=>({id:m.id,title:m?.data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const l=e.querySelector("#selectedItems"),r=e.querySelector("#options"),d=(m="")=>{if(!o.length){r.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let p=o.filter(h=>h.title.toLowerCase().includes(m.toLowerCase()));u(),r.innerHTML=p.length?p.map(h=>`
            <li class="option" data-value="${h.id}">
              <input type="checkbox" id="page-${h.id}" ${i?.some(v=>v.id.toString()===h.id.toString())?"checked":""} />
              <span>${h.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},u=()=>{i&&i.length?l.innerHTML=i.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):l.innerHTML="<span>No pages selected!</span>"},c=(m,p)=>{i.push({id:m,title:p}),u()},g=m=>{i=i.filter(p=>p.id.toString()!==m.toString()),u()};l.addEventListener("click",m=>{const p=m.target;if(p.classList.contains("remove-item")){const h=p.closest(".selected-page");h&&g(h.dataset.value)}}),r.addEventListener("click",m=>{const p=m.target.closest(".option");if(!p)return;const h=p.querySelector("input[type='checkbox']");h&&(m.target!==h&&(h.checked=!h.checked),h.checked?c(p.dataset.value,p.querySelector("span").textContent.trim()):g(p.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(n&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){L.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),p=e.querySelector("#closeModal");m.disabled=!0,p.disabled=!0;const h=m.textContent;m.textContent="Adding...",L.infoMessageToast("Adding pages to project...",0);try{const v=i.map(y=>Number(y.id));if(!v.length){document.querySelector(".infoMessageToast")?.remove(),L.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}if(n){this.addPageToProjectHandler();const _=document.getElementById("create-project-form").elements,S=dn(_),b=await I(),C=await this._projectsTSCCSService.createProject(S,b?.userId,b?.entityId);await N.SyncDataOnline(),t=(await K(C.ghostId)).id}if(!t){document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Project ID not found."),m.disabled=!1,p.disabled=!1,m.textContent=h;return}await this._projectsTSCCSService.addPagesToProject(t,v);const T=await this._projectsHTMLService.getProjectPagesListHTML(t),E=document.getElementById(`dropdown-menu-${t}`)?.nextElementSibling;E&&(E.innerHTML=T,E.classList.remove("d-none")),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Failed to add pages to prjects"),m.disabled=!1,p.disabled=!1,p.textContent=h}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const p=m.target;d(p.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{d()}),u()}catch(s){console.error("Failed to add page to project:",s)}}}const ft=(()=>{const a=()=>{document.querySelectorAll("#navBarContainer > span").forEach(r=>{r.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(r=>{r.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(r=>{r.remove()})};return{toggle:o=>{const l=o.target,r=l?.dataset?.id;if(l.classList.contains("activeNavigationIcon")){a();return}if(r){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const c=document.getElementById(r);document.querySelector(`[data-id='${r}']`)?.classList.add("activeNavigationIcon"),c?.classList.add("navActive"),r=="fs-all-pages-list"&&new kn().initPagesSidebar(),r=="fs-all-projects-list"&&new Ua().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(r=>{r.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(r=>{r.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(r=>{r.remove()})},checkForActiveNavigation:()=>{const o=document.querySelector(".activeNavigationIcon");if(o){const l=o.dataset?.id||"";document.getElementById(l)?.classList.remove("navActive")}},resetNavigationBar:a,disableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="none",o.style.pointerEvents="none",o.style.opacity="0"},enableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="block",o.style.pointerEvents="all",o.style.opacity="1"}}})(),rt=(()=>{const a=()=>{const i=document.querySelector("#profileDropdown");if(i.style.display&&i.style.display=="block"){e();return}i?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:a,closeUserActionModel:e,disableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="none",i.style.pointerEvents="none",i.style.opacity="0"},enableHeader:()=>{const i=document.querySelector(".wico_top-header");i.style.display="flex",i.style.pointerEvents="all",i.style.opacity="1"}}})(),L=(()=>{let a=0;const e=()=>{const r=document.createElement("span");return r.innerText="close",r.classList.add("material-symbols-outlined"),r.classList.add("crossButtonToast"),r.addEventListener("click",d=>{d.target instanceof HTMLElement&&d.target.parentNode instanceof HTMLElement&&console.log(d.target.parentNode.remove())}),r},n=r=>{const d=document.querySelector("#toasterContainer");d.style.display="flex";const u=document.createElement("div");u.classList.add("successFullToast");const c=document.createElement("span");c.classList.add("material-symbols-outlined"),c.innerText="check_circle";const g=document.createElement("span");g.innerText=r,u.appendChild(c),u.appendChild(g),u.appendChild(e()),d.appendChild(u),a=a+.5,s(u)},t=(r,d=1)=>{a=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("infoMessageToast","bg-info");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="info";const m=document.createElement("span");m.innerText=r,c.appendChild(g),c.appendChild(m),c.appendChild(e()),u.appendChild(c),d!=0&&(a=a+.5+(d||0),s(c))},i=(r,d)=>{a=0;const u=document.querySelector("#toasterContainer");u.style.display="flex";const c=document.createElement("div");c.classList.add("failureToast");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="error";const m=document.createElement("span");m.innerText=r,c.appendChild(g),c.appendChild(m),c.appendChild(e()),u.appendChild(c),a=a+.5+(d||0),s(c)},s=r=>{r.style.animation=`animateToastMessage ${2+a}s forwards`,r.addEventListener("animationend",()=>{r.remove();const d=document.querySelector("#toasterContainer");d.innerHTML||(a=0,d.style.display="none")}),r.addEventListener("mouseenter",()=>{o()}),r.addEventListener("mouseleave",()=>{l()})},o=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="paused"})},l=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(d=>{d.style.animationPlayState="running"})};return{successfullToast:n,infoMessageToast:t,errorToast:i}})();async function Pe(){const a=await I(),e=a?.entityId,n=a?.token,t=a?.userId,i=a?.userConcept,o=(await K(e)).typeCharacter;let l=!1,r;const d=new j;if(d.conceptIds=[e],d.selectors=["the_entity_user"],d.outputFormat=fe,d.inpage=100,await ye(d,n)?.subscribe(g=>{r=g}),r?.[0]?.data?.the_entity?.the_entity_user?.id===i&&(l=(await K(i))?.userId===t),!l||!o||o!=="the_entity"||!n||n.trim()===""||!t)throw setTimeout(()=>Ae(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function $o(a){try{const e=await ke(a,"the_entity_s_widget",!0);e.length?await xe(e[0].id):L.errorToast("already deleted")}catch(e){console.error(e)}}async function In(a,e="Error"){console.error(a);const n=a;n&&(L.errorToast(n?.message?n.message:e),n.status===401&&Ae())}async function Pn(){_t(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(e),de("save-widget-dialog"),new Promise((n,t)=>{const i=e.querySelector("#save-widget-form");i.onsubmit=async o=>{o.preventDefault();try{const l=new FormData(i),d=Object.fromEntries(l).widgetName,u=o.target;if(!d?.trim()){const c=u.querySelector("#widgetName");c?.focus(),c.style.border="2px solid red",c.style.outline="none",c.addEventListener("input",()=>{c.style.border=""});return}await za(o,d),we("save-widget-dialog"),n("Widget saved successfully")}catch(l){console.error("Error saving widget:",l),t("Error saving widget")}};const s=e.querySelector("button[type='button']");s.onclick=()=>{we("save-widget-dialog"),n("Widget saving canceled")}})}async function za(a,e){a.preventDefault();try{L.infoMessageToast("Saving Widget...",0),await Pe();const n=document.getElementById("save-widget-dialog"),t=n?.querySelector('button[type="submit"]');t.textContent="Saving";const i=n?.querySelector("input"),s=n?.querySelectorAll("button");s&&s.forEach(c=>{c.disabled=!0}),i&&(i.disabled=!0),await Xe(),R.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async c=>{if(c.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[c.id]){const g=await Ce(c,"div.mftsccs-marking-element");f.editedWidgets[c.id].html=g.innerHTML}});const l=await Ja();f.staticWidgetTree.html=l;const r=await f.saveWidget(e),d=await K(r.id);we("save-widget-dialog"),Vt(),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget saved successfully!"),await q.renderSavedWidgets(),Oe(a,d.id);return}catch(n){document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Error in saving widget"),In(n,"There is an error on saving widget")}}async function Bn(a,e,n){const t=document.getElementById("update-publish-widget-btn");try{const i=document.getElementById("update-widget-btn");t&&t.classList.add("disabled"),i&&(i.classList.add("disabled"),i.textContent="Updating...",L.infoMessageToast("Updating Widget...",0)),await Xe(),R.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async d=>{if(d.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[d.id]){const u=await Ce(d,"div.mftsccs-marking-element");f.editedWidgets[d.id].html=u.innerHTML}});const o=await qo();f.staticWidgetTree.html=o,await f.updateWidget(),Vt(),pe(),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget Updated Successfully"),await q.renderSavedWidgets(),await q.renderBoomWidgets();const r=document.getElementById("widget-builder");r.textContent="Widget Builder Panel",await Oe(a,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),n&&n===!0&&await f.publish();return}catch(i){document.querySelector(".infoMessageToast")?.remove();const o=document.getElementById("update-widget-btn");o&&(o.classList.remove("disabled"),o.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),i instanceof Error&&L.errorToast(i.message)}finally{t&&t.classList.remove("disabled")}}async function je(a,e){const n=document.querySelector(".widgetStyle");n.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(d=>{d.textContent=""});const i=document.getElementById("publish-widget");i&&(i.style.display="none",i.disabled=!0);const s=document.querySelector(".content-target"),o=window.location.href,r=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(s){let d=!1;d=await f.hasWidgetChanged(Number(r));const c=document.getElementById("preview-btn").classList.value.includes("active");if((a?.target?.id==="preview-btn"||a?.target?.id==="save-widget-form"||a?.target?.id==="update-widget-btn"||a?.target?.id==="form-folder-modal"||a?.target?.id==="data-file-id")&&(d=!1),c&&(d=!1),d&&!e){await bt("Do you want to save changes?")&&(o.includes("?page-id=")?r?await Mn(a,Number(r)):await xn(a):r?await Bn(a,Number(r)):await Pn()),Vt();const p=document.getElementById("preview-btn");p.classList.remove("active"),p.removeAttribute("data-widgetid")}await Ls()}s.innerHTML="",Va(),a&&!e&&window.history.pushState({},"","/")}let sn="";async function jo(a){const e=document.getElementById("preview-btn"),n=e.classList.value.includes("active");let t=a.target.getAttribute("data-widgetid");t&&history.pushState({},"",`?widget-id=${t}`);const i=document.querySelector(".content-target"),s=document.querySelector(".midContent .content"),o={...f.widgetTree},l=document.getElementById("undo-btn"),r=document.getElementById("redo-btn"),d=document.getElementById("ai-prompt-btn"),u=document.getElementById("widget-prompt-modal"),c=document.getElementById("widget-prompt-tab"),g=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(n){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,d.style.display="flex",sn&&sn!=="none"?(c.classList.add("d-none"),u.classList.remove("d-none"),u.classList.add("d-flex")):(c?.classList.remove("d-none"),u&&u.classList.add("d-none")),e.classList.remove("active"),l.classList.remove("d-none"),r.classList.remove("d-none"),m&&(m.style.display="block"),g&&(g.style.display="none"),i&&(i.style.width="100%",i.style.maxWidth="",i.style.margin="0 auto",i.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),i.classList.add("mode-desktop"));const p=Cn(),h=await Te(f.widgetTree,p,!0,void 0,!0);X(f.widgetTree,!1,h,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),s.classList.remove("preview"),ce(),pe(),rt.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,d.style.display="none",u&&(sn=window.getComputedStyle(u).display,u.classList.add("d-none")),c&&c.classList.add("d-none");const p=document.getElementById("select-box"),h=document.getElementById("element-info");p.style.display="none",h.style.display="none",l.classList.add("d-none"),r.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none");const v=await Te(f.widgetTree,i,!0,void 0,!1);X(o,!1,v),document.getElementById("column-left").classList.add("d-none");const W=document.createElement("script");W.setAttribute("type","text/javascript"),W.innerHTML=o?.js,i.appendChild(W),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),rt.disableHeader(),ot.closeCodeView(),s.classList.add("preview");const y=document.querySelector("header.wico_top-header");y.style.display="none"}return"PREVIEW WIDGET"}async function Ce(a,e){return a.querySelectorAll(e).forEach(t=>{for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.remove()}),a}async function Ho(a,e){a.preventDefault();try{const n=new FormData(a.target),i=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');i.textContent="Converting...";const s=a.target;for(let o=0,l=s.length;o<l;++o)s[o].disabled=!0;await Do(n);for(let o=0,l=s.length;o<l;++o)s[o].disabled=!1;return await we(e),"completed conversion"}catch{L.errorToast("html conversion failed"),await we(e)}}async function Do(a){const e=Object.fromEntries(a),n=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,t=await Ri(n,e?.cssCode?.toString(),e?.jsCode.toString()),s=(await I())?.token,l=(await Oi(t?.id,s))?.id,{html:r,css:d,js:u}=await Di(l,s);await bn(l);const c=document.querySelector(".content-target");c.innerHTML=r;const g=document.querySelector('.cm-content[data-language="css"]');g.textContent=d;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=u,"converted widget"}async function No(a){return new Gi().init(),de(a),"opened convert HTML to Widget!"}async function Ye(a,e){return new Promise(async(n,t)=>{try{let i=new z;i.composition=a,i.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function"],i.inpage=100;let s=new z;s.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],s.inpage=100;const l=await he([i,s],e);n(l)}catch(i){console.error("error",i),i?.status===401&&Ae(),t(i)}})}async function qo(){R.staticElement?.removeAttribute("draggable");const a=document.querySelector(".content-target"),e=a.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(o=>{o.classList.replace("edited-widget-container","added-widget-container")});const n=await Ce(a,"div.mftsccs-marking-element");return a?.querySelector("#widget-details")?.remove(),(a?.querySelectorAll(".mftsccs-marking-rendered")).forEach(o=>{o.remove()}),n.innerHTML.trim()}async function Ja(){R.staticElement?.removeAttribute("draggable");const a=document.querySelector(".content-target"),e=await Ce(a,"div.mftsccs-marking-element");return a?.querySelector(".widget_selected")?.classList.remove("widget_selected"),a?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function Qe(){const a=document.querySelector(".content-target");a?.querySelector("#widget-details")?.remove();const n=await Ce(a,"div.mftsccs-marking-element");return a?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n.innerHTML.trim()}async function dt(){R.staticElement?.removeAttribute("draggable");const a=document.querySelector(".content-target")?.cloneNode(!0);a?.querySelector("#widget-details")?.remove();const t=(await Ce(a,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),t}async function xt(a){R.staticElement?.removeAttribute("draggable");const e=document.getElementById(a)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const i=(await Ce(e,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),i}const Fo=["image/jpeg","image/jpg","image/png","image/webp"],Oo=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],Ga=async a=>{try{const e=new FormData;let n;if(Oo.includes(a.type))e.append("file",a,a.name),n=await Ro(e);else if(Fo.includes(a.type))e.append("image",a,a.name),n=await Vo(e);else return{message:"Invalid File Format",success:!1};return n?.data?{message:"Upload Success",success:!0,url:n.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},Vo=async(a,e="")=>{try{const n=await fetch(ie.boomURL+"/api/Image/UploadImage",{method:"POST",body:a,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const t=n.headers.get("content-type");t&&t.includes("text/plain")&&console.info(n?.text());const i=await n?.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}},Ro=async(a,e="")=>{try{const n=await fetch(ie.boomURL+"/api/Image/UploadFile",{method:"POST",body:a,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const t=n.headers.get("content-type");t&&t.includes("text/plain")&&console.info(n.text());const i=await n.text();return console.error(`${n.status} ${i}`),null}return await n.json()}catch(n){return console.error(n),null}};async function Uo(a=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const n=await fa("public_widget","",!1,e.userId,4,999);let t=new j;t.typeConnection="the_widget_public_name",t.name="widgetPName";let i=new j;i.typeConnection="the_widget_name",i.name="widgetName";let s=new j;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new j;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let l=new j;l.typeConnection="the_public_widget_s_widget",l.selectors=["the_widget_timestamp","the_widget_version"],l.name="widgetLevel",l.inpage=10,l.limit=!0,l.freeschemaQueries=[t,i,s,o];let r=new j;if(r.conceptIds=[n.id],r.outputFormat=fe,r.name="top",r.freeschemaQueries=[l],a!=""){let d=new Ne;d.name="filterName",d.search=a,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let u=new Ne;u.name="filterPublicName",u.search=a,u.type="the_public_name",u.operateon="widgetPName",u.logicoperator="like",r.filters=[d,u],r.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{ye(r,"").subscribe(u=>{d(u)})})}catch(e){throw e}}async function zo(a=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const n=await fa("folder_widget","",!1,e.userId,4,999);let t=new j;t.typeConnection="the_widget_folder_name",t.name="widgetPName";let i=new j;i.typeConnection="the_widget_name",i.name="widgetName";let s=new j;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new j;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let l=new j;l.typeConnection="the_folder_s_widget",l.selectors=["the_widget_timestamp","the_widget_version"],l.name="widgetLevel",l.inpage=10,l.limit=!0,l.freeschemaQueries=[t,i,s,o];let r=new j;if(r.conceptIds=[n.id],r.outputFormat=fe,r.name="top",r.freeschemaQueries=[l],a!=""){let d=new Ne;d.name="filterName",d.search=a,d.type="the_name",d.operateon="widgetName",d.logicoperator="like";let u=new Ne;u.name="filterFolderName",u.search=a,u.type="the_folder_name",u.operateon="widgetPName",u.logicoperator="like",r.filters=[d,u],r.filterLogic="( filterName OR filterPublicName )"}return new Promise(d=>{ye(r,"").subscribe(u=>{d(u)})})}catch(e){throw e}}class Ke{static staticElementList}async function Jo(a,e){const n=a?.target?.value,t=await I(),i=t?.userId,s=t?.token,o=await K(e),d=(await Ye(e,s))?.data?.the_widget?.the_widget_before_render?.[0]?.id;d&&await Se(d);const u=await te("before_render",n,!1,i,4,999);await V(o,u,"before_render"),await N.SyncDataOnline(),new Oa().before_render()}async function Go(a,e){console.log("updateWidgetUpdate event",a),console.log("widgetId",e)}async function Qo(a,e){const n=a?.target?.value,t=await I(),i=t?.userId,s=t?.token,o=await K(e),d=(await Ye(e,s))?.data?.the_widget?.the_widget_after_render?.[0]?.id;d&&await Se(d);const u=await te("after_render",n,!1,i,4,999);await V(o,u,"after_render"),await N.SyncDataOnline();const g=document.getElementById("mountInput")?.value,p=document.getElementById("mountChildWidgetsInput")?.value,h=new gt;h.componentDidMountFunction=g,h.addEventFunction=n,h.mountChildWidgetsFunction=p;const v=document.querySelector(".content-target"),T=await h.mount(v);console.log("appContentHTML",T)}async function Zo(a,e){const n=a?.target?.value,t=await I(),i=t?.userId,s=t?.token,o=await K(e),d=(await Ye(e,s))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;d&&await Se(d);const u=await te("mount_child",n,!1,i,4,999);await V(o,u,"mount_child"),await N.SyncDataOnline()}class Yo{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=tr,`
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
    `}}class Ko{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return`
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
    `}}async function Xo(a,e){const n=document.getElementById("documentation-view");await De(ie.documentation_preview_widget,n,{currentWidgetId:e})}let lt,on="",hn,fn;async function er(a,e){hn=a,e==="preview"?new Ko:new Yo;const n=new j;n.typeConnection="the_widget_documentation",n.name="documentationText",n.selectors=["the_documentation_text"];const t=new j;t.typeConnection="the_widget_s_documentation",t.name="documentationBlank",t.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const i=new j;i.typeConnection="the_documentation_s_json_list",i.name="documentationJSON",i.selectors=["the_json_list_key","the_json_list_value"],t.freeschemaQueries=[i];const s=new j;s.conceptIds=[hn],s.freeschemaQueries=[n,t],s.inpage=100,s.outputFormat=fe,await ye(s,"").subscribe(async o=>{const l=o?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";l&&(on=l);const r=o?.[0]?.data?.the_widget?.the_widget_s_documentation;r?.length&&(on=r?.map(u=>{const c=u?.data?.the_documentation,g=c?.the_documentation_type?.data?.the_type,m=c?.the_documentation_content?.data?.the_content,p=c?.the_documentation_creator_email?.data?.the_creator_email,h=c?.the_documentation_doc_title?.data?.the_doc_title,v=c?.the_documentation_method?.data?.the_method,T=c?.the_documentation_method_url?.data?.the_method_url,W=c?.the_documentation_bearer_token?.data?.the_bearer_token,E=c?.the_documentation_username?.data?.the_username,w=c?.the_documentation_password?.data?.the_password,y=c?.the_documentation_auth_type?.data?.the_auth_type,_=c?.the_documentation_s_json_list,S=c?.the_documentation_api_script?.data?.the_api_script,b=c?.the_documentation_api_body?.data?.the_api_body,C=c?.the_documentation_language?.data?.the_language,A=c?.the_documentation_return?.data?.the_return,x=c?.the_documentation_code_editor?.data?.the_code_editor,k=c?.the_documentation_s_doc_url,P=c?.the_documentation_s_image_url,B=c?.the_documentation_s_video_link;let $={type:g,content:m,creatorEmail:p,title:h};if(g==="blank")$={...$};else if(g==="api"){const F=[];_?.length&&_?.forEach(Y=>{F.push({key:Y?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:Y?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),$={...$,method:v,methodURL:T,authType:y,username:E,password:w,bearerToken:W,json:F,script:S,body:b}}else g==="function"&&($={...$,language:C,return:A,codeEditor:x});const U=[],ee=[],Z=[];return P?.length&&P?.forEach(F=>{U.push(F?.data?.the_image_url)}),B?.length&&B?.forEach(F=>{ee.push(F?.data?.the_video_link)}),k?.length&&k?.forEach(F=>{Z.push(F.data?.the_doc_url)}),$={...$,imageList:U,linkList:Z,videoList:ee},$})),fn=o?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&nr(l)}),e==="preview"?(await de("widget-documentation-preview-modal"),Xo(on,a)):await de("widget-documentation-modal")}async function tr(){if(lt){const a=lt.getData(),e=await Q(hn),t=(await I())?.userId;if(fn)await Ze(fn,"the_documentation_text","text",a,t),await N.SyncDataOnline();else{const i=await O("documentation",t,{text:a});await G(e,i,"documentation"),await N.SyncDataOnline()}L.successfullToast("Documentation is saved."),lt.setData(a)}else console.error("Editor not initialized"),L.errorToast("Documentation couldn't saved.")}function nr(a){const e=document.querySelector("#documentation-editor");e&&Bi.create(e,{licenseKey:"GPL"}).then(n=>{lt=n;const t=a;lt.setData(t)}).catch(n=>{console.error("Error initializing CKEditor:",n)})}class ar{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",n=>{if(n.target.matches(".btn-tour")){const t=n.target.dataset.tourStatus;this.startTour(t)}})}startTour(e){const n=new Mi.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),t=[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Next",action:n.next}];n.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:n.complete},{text:"Next",classes:"next-button",action:()=>{n.next()}}]}),n.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".wico_header-section",on:"bottom-start"},buttons:t}),n.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:t}),n.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:t}),n.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const i=document.querySelector(".accordion-widget-properties a"),s=new Event("click",{bubbles:!0,cancelable:!0});return i.dispatchEvent(s),".right-aside"},on:"left"},buttons:t}),n.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:t}),n.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:t}),n.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Finish",action:()=>{n.complete(),e||this.updateTourStatus()}}]}),n.start()}async updateTourStatus(){this.closeTour();const e=await I(),n=e?.userId,t=e?.entityId,i=await Q(t),s=new bi;try{await s.initialize();const o=await s.MakeTheInstanceConceptLocal("the_tour_status","true",!1,n,4,999);await s.CreateConnectionBetweenEntityLocal(i,o,"tour_status"),await s.commitTransaction()}catch{s.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}class ir{_layoutWidgetHTMLService=new Ha;_pagesHTMLService=new Ta;_projectsService=new Ua;_projectsHTMLService=new Ra;_pagesService=new kn;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await Nt.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,n={openRenameWidgetModal:pr,renameWidget:Za,loadWidget:Oe,deleteWidget:cr,postWidget:dr,saveFromPublic:q.saveFromPublic,removeFromTemplate:q.removeFromTemplate,downloadPage:bo,downloadWebpage:yo,updateWidgetMount:Jo,updateWidgetUpdate:Go,updateWidgetEvents:Qo,updateMountChildWidgets:Zo,navbarFunctions:ft,DeleteConceptById:Se,uploadAssetsFile:hr,removeAssetFile:fr,clearSearch:yr,toggleClearButton:Ya,toggleDropdown:sr,openDocumentationModal:er,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:t=>this.searchWidgets(t,"#saved-widget-list-container"),searchElements:t=>this.searchWidgets(t,"#created-elements"),searchPublicWidgets:t=>this.searchPublicWidgets(t),searchPages:t=>this.searchWidgets(t,"#saved-page-list-container"),searchProjects:t=>this.searchWidgets(t,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:t=>this.searchWidgets(t),switchLayoutType:t=>{const i=t.target,s=document.getElementById("fslayout-template-container"),o=document.getElementById("fslayout-list-container");i.value==="custom"?(o?.style.setProperty("display","flex"),s?.style.setProperty("display","none")):(o?.style.setProperty("display","none"),s?.style.setProperty("display","flex"))}};Object.assign(e,n)}async setupAssetListener(){const e=await I(),n=new j;n.typeConnection="the_entity_s_asset",n.name="itemname";const t=new j;t.conceptIds=[e.entityId],t.freeschemaQueries=[n],t.outputFormat=fe,t.inpage=100,ye(t,"").subscribe(i=>{const s=i?.[0]?.data?.the_entity?.the_entity_s_asset,o=this.generateAssetHTML(s),l=document.getElementById("assets-library-list-container");l&&(l.innerHTML=o)})}generateAssetHTML(e){return e?.length?e.map(n=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${n.id})" /></span>
                    <img class="asset-img" src="${n?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${n?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,n){n||(n=`#${e.target?.dataset?.id}`||"");const i=e.target.value.toLowerCase();document.querySelectorAll(`${n} li`).forEach(o=>{const l=(o.textContent||"").toLowerCase();o.style.display=l.includes(i)?"":"none"})}searchPublicWidgets(e){const t=e.target.value.toLowerCase();wn(t).then(i=>{un.navbar.setPublicWidgets(i),this.updatePopupMenu("publicWidgets",i)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(n),Zt().then(t=>{this._elemensHtml=t;const i=document.getElementById("created-elements");i&&(i.innerHTML=t||"")}),yn().then(t=>{this._savedWidgetsHtml=t;const i=document.getElementById("saved-widget-list-container");i&&(i.innerHTML=t||"")}),wn().then(t=>{this._publicWidgetsHtml=t;const i=document.getElementById("public-widget-list-container");i&&(i.innerHTML=t||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const n=document.createElement("nav");n.className="sidebar sidebar-collapsed";let t=!0;const i=()=>{t=!t,n.classList.toggle("sidebar-collapsed",t),t||(this.removeSubSidebar(),this.removeActiveClass())};return n.appendChild(this.createSidebarHeader(i)),n.appendChild(this.createSidebarMenu(e.mainItems)),n.appendChild(this.createSection("Widgets")),n.appendChild(this.createSidebarMenu(e.widgetItems)),n.appendChild(this.createSection("Library")),n.appendChild(this.createSidebarMenu(e.libraryItems)),n.appendChild(this.createSection("Configuration")),n.appendChild(this.createSidebarMenu(e.configurationItems)),n}createSidebarHeader(e){const n=document.createElement("div");return n.className="menu-toggle",n.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,n.addEventListener("click",e),n}createSidebarMenu(e){const n=document.createElement("div");return n.className="sidebar-menu",e?.forEach(t=>n.appendChild(this.createMenuItem(t))),n}createMenuItem(e){const n=document.createElement("div");return n.id=e.id,n.onclick=t=>this.handleNavItemClick(t),e.id==="widget-tour"?(n.className="nav-item",n.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,n.onclick=()=>{new ar().startTour(this._loginDetailObject?.tourStatus)}):e?.link?n.innerHTML=`
                <router-link href="${e.link}" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(n.className="nav-item",n.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),n}createSection(e){const n=document.createElement("div");return n.className="sidebar-section",n.innerHTML=`<hr /><span class="section-title">${e}</span>`,n}async handleNavItemClick(e){const n=document.querySelector(".sidebar"),t=n?.classList.contains("sidebar-collapsed"),i=e.target.closest(".nav-item"),s=i?.id,o=i?.classList.contains("active"),l=i?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!s||o){this.removeSubSidebar();return}if(t){this.removeSubSidebar(),i?.classList.add("active");const r=await this.createSubSidebarMenu(s,l);if(document.querySelector("#column-left")?.appendChild(r),s==="folderWidgets"){const d=await I(),u=document.getElementById("folder-widget-container");await De(ie.folder_widget,u,{showFiles:!0}).then(c=>{c.dataChange(async g=>{if(g.displayType==="photo"||g.type==="Image"||g.displayType==="widget"||g.type==="widget")await $a(e,g);else{let m=await Ee(Number(g),d.token),p=await re(m?m.widgetId:Number(g));await Oe(null,p.id)}})})}if(s==="assets"){const d=document.getElementById("default-list-container");await De(ie.assets_widget,d)}}else n?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,n){if(e=="publicWidgets"){let t=document.querySelector("#public-widget-list-container");t&&(t.innerHTML=n)}if(e=="folderWidgets"){let t=document.querySelector("#folder-widget-container");t&&(t.innerHTML=n)}}async createSubSidebarMenu(e,n){const t=document.createElement("section");if(t.className="sub-sidebar",e==="layout")t.innerHTML=`
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
                `),t.innerHTML=`
                <div class="sub-sidebar-header">
                    <span>${n}</span>
                    ${i}
                </div>
                ${await this.renderSubMenu(e)}
            `}return e==="projects"&&this._projectsService.initProjectsSidebar(),e==="pages"&&this._pagesService.initPagesSidebar(),e==="assets"&&this.setupAssetListener(),t}async renderSubMenu(e){let t=`
        <li class="list-unstyled">
        <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
        </div>
        </li>`,i="",s="";switch(e){case"elements":t=this._elemensHtml||t,i=this.generateSearchHtml("element-search","Search elements...","searchElements");break;case"savedWidgets":this._savedWidgetsHtml&&(t=this._savedWidgetsHtml),i=this.generateSearchHtml("myWidget-search","Search widgets...","searchMyWidgets");break;case"publicWidgets":t=this._publicWidgetsHtml||t,i=this.generateSearchHtml("publicWidget-search","Search public widgets...","searchPublicWidgets");break;case"pages":t=this._pagesHtml||t,i=this.generateSearchHtml("page-search","Search pages...","searchPages"),s=this.createNewHtml("fs-create-page-button",'<img src="./images/icons/add pages.svg" alt="" class="icon" />',"Create New Page");break;case"projects":t=this._projectsHtml||t,i=this.generateSearchHtml("project-search","Search projects...","searchProjects"),s=this.createNewHtml("fs-create-project-button",'<img src="./images/icons/add new projects icon.svg" alt="" class="icon" />',"Create New Project");break;case"layout":t=this._layoutsHtml||t;break;case"assets":t=`
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
                        ${t}
                    </ul>
                </div>
            </div>
        `}generateSearchHtml(e,n,t){return`
            <div class="search-widgets">
                <div class="search-input-wrapper">
                    <input type="text" id="${e}" 
                                 class="form-control" 
                                 placeholder="${n}" 
                                 onkeyup="${t}(event)" 
                                 oninput="toggleClearButton('${e}')">
                    <span id="${e}-clear" class="material-symbols-outlined" 
                                style="display:none;" 
                                onclick="clearSearch('${e}')">close</span>
                </div>
            </div>
        `}createNewHtml(e,n,t){return`<div class="create-new" id="${e}" >
                    <span class="create-new-icon" title="${t}">${n}</span>
                </div>`}getListId(e){return{elements:"created-elements",savedWidgets:"saved-widget-list-container",publicWidgets:"public-widget-list-container",folderWidgets:"folder-widget-container",pages:"saved-page-list-container",projects:"saved-project-list-container",layout:"fslayout-list-container"}[e]||"default-list-container"}removeActiveClass(){document.querySelector(".nav-item.active")?.classList.remove("active")}removeSubSidebar(){document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(e=>{e.remove()})}async getHtml(){const e={mainItems:[{id:"elements",icon:'<img src="./images/icons/elements.svg" alt="" class="icon" />',text:"Elements"},{id:"layout",icon:'<img src="./images/icons/layouts.svg" alt="" class="icon" />',text:"Layout"},{id:"assets",icon:'<img src="./images/icons/assets.svg" alt="" class="icon" />',text:"Assets"}],widgetItems:[{id:"savedWidgets",icon:'<img src="./images/icons/saved widgets.svg" alt="" class="icon" />',text:"Saved Widgets"},{id:"publicWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="" class="icon" />',text:"Public Widgets"},{id:"folderWidgets",icon:'<img src="./images/icons/public widgets.svg" alt="" class="icon" />',text:"Public Widgets"}],libraryItems:[{id:"pages",icon:'<img src="./images/icons/pages.svg" alt="" class="icon" />',text:"Pages"},{id:"projects",icon:'<img src="./images/icons/projects.svg" alt="" class="icon" />',text:"Projects"}],configurationItems:[{id:"documentation",icon:'<img src="./images/icons/documentation.svg" alt="" class="icon" />',text:"Documentation",link:"/documentation"},{id:"tutorials",icon:'<img src="./images/icons/tutorials.svg" alt="" class="icon" />',text:"Tutorials",link:"/video-tutorial"},{id:"community",icon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="none">
                        <path d="M360-400c0 33 23.5 56.5 56.5 56.5T473-400c0-33-23.5-56.5-56.5-56.5T360-400Zm240 0c0 33 23.5 56.5 56.5 56.5T713-400c0-33-23.5-56.5-56.5-56.5T600-400ZM480-600c0 33 23.5 56.5 56.5 56.5T593-600c0-33-23.5-56.5-56.5-56.5T480-600ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" stroke="#AAAAAA" stroke-width="2" fill="none"/>
                    </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),n.outerHTML}}async function $n(a){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(t=>{t.remove()});const n=document.querySelectorAll("script.vde-js");if(n?.length&&n?.forEach(t=>{t.remove()}),await en(a),a?.children?.length)for(const t of a?.children){const i=t?.library;(i?.css?.length||i?.js.length)&&await $n(t)}}class Mt{static staticTabName}async function sr(a,e){a.stopPropagation();const n=document.getElementById(`dropdown-menu-${e}`),t=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),n&&!t&&n.classList.add("show")}document.addEventListener("click",a=>{document.querySelectorAll(".dropdown-menu").forEach(n=>{const t=a.target;t&&!n.contains(t)&&!t.closest(".dropdown-icon")&&n.classList.remove("show")})});async function ut(a,e){const n=document.getElementById(e),i=a.target.closest(".accordion-wrapper").querySelector("span");if(n){if(n.style.display==="block"||getComputedStyle(n).display==="block")n.style.display="none",i.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(n.style.display="block",i.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",n.tagName==="FORM"||n.id==="navigator-container"||n.id==="element-attributes"||n.id==="library-css"||n.id==="library-js"||n.id==="general-content"||n.id==="size-content"||n.id==="display-content"||n.id==="typography-content")return}}function or(a){const e=document.getElementById(a);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function Zt(){const a=await Nt.getInstance().getLoginInfo(),e=await Qa();return Ke.staticElementList=e,Array.isArray(e)?e?.map(t=>{const i=t?.id,s=t?.data?.the_element?.the_element_name?.[0]?.data?.the_name,o=t?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=t?.data?.the_element?.the_element_void?.[0]?.data?.the_void,r=t?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",d=t?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${s}">${a.isAdmin?`<a data-elementid="${i}" data-type="${o}" data-default="${r}" data-void="${l}" data-text="${s}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

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
        </a>`:`<a data-elementid="${i}" data-type="${o}" data-default="${r}" data-void="${l}" data-text="${s}" draggable="true" ondragstart="_dragService.onDragStart(event)">
          <!--  -->
          <div class="element-details">
          <img src="${d}" class="element-icon">
          <span>${s}</span>
          </div>
          </a>`}</li>`}).join(""):""}async function Qa(){const a=ie?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],n=new Headers;n.append("Content-Type","application/json");const i=await(await fetch(`${a}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:n,body:JSON.stringify(e),redirect:"follow"})).json();return i?.sort((s,o)=>{s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const l=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),r=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return l<r?-1:l>r?1:0}),i}async function yn(){try{const a=await I();if(!a)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=a?.entityId;await Pe();const n=new Ne;n.type="the_public_widget",n.search="",n.operateon="public",n.name="publicfilter",n.logicoperator="=";const t=new j;t.typeConnection="the_public_widget_s_widget",t.freeschemaQueries=[],t.name="public",t.reverse=!0;const i=new j;i.typeConnection="the_widget_recent",i.name="copywidgets",i.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],i.freeschemaQueries=[t];const s=new j;s.typeConnection="the_entity_s_widget",s.name="mywidgets",s.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],s.freeschemaQueries=[i];const o=new j;return o.conceptIds=[e],o.freeschemaQueries=[s],o.inpage=100,o.outputFormat=fe,await new Promise((r,d)=>{ye(o,"").subscribe(async u=>{console.log("widget data pub",u);const c=u?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!c.length)return r(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(c.map(async p=>{const h=p?.data?.the_widget,v=h?.the_widget_name?.data?.the_name,T=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:h?.the_widget_html?.data?.the_html,W=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:h?.the_widget_css?.data?.the_css,E=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:h?.the_widget_js?.data?.the_js,w=h?.the_widget_recent?h?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:h?.the_widget_timestamp?.data?.the_timestamp,y=!!h?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:p?.id,name:v,html:T,css:W,js:E,timestamp:w,isPosted:y}}))).map(p=>`
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
              `).join("");r(m)})})}catch(a){console.error("Error in getMyWidgetsList:",a),L.errorToast(a?.message||"An error occurred while fetching widgets"),a?.status===401&&Ae()}}async function Xe(){try{const a=document.getElementById("builder-workarea");if(!a)return;a.innerHTML="",await $n(f.widgetTree);const e=await Te(f.widgetTree,a);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await X(f.widgetTree,!1,e),ce(),pe()}catch(a){throw new Error(`error loading widget with widget tree ${a.message}`)}}async function ra(a){const e=a?JSON.parse(a):"";if(e)try{const n=document.getElementById("builder-workarea");n.innerHTML="";const t=await Te(e,n),i=document.getElementById("select-box");i.style.display="none";const s=document.getElementById("element-attributes");s.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await X(e,!1,t),ce(),pe()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function Oe(a,e,n){try{if(a?.preventDefault(),a?.stopPropagation(),ft.collapseNavbar(),await Pe(),await je(a),n&&typeof n!="number"||Number.isNaN(n)||e&&typeof e!="number"||Number.isNaN(e)){L.infoMessageToast("Widget id is in different format. Please check and update",4),je(a);return}history.pushState({},"",`?widget-id=${n||e}`);const t=document.getElementById("preview-btn");t&&t.setAttribute("data-widgetid",e.toString()),rr(),lr(),Sn(),Na(),await Da();let i=Cn();i.classList.contains("fspage")&&i.classList.remove("fspage");const o=(await I())?.token;let l=null;a&&(l=await Ee(e,o));let r=await re(l?l.widgetId:e);const d=document.getElementById("widgetNameValue");d&&r?.name&&(d.value=r?.name);const u=document.getElementById("widget-builder");u&&r?.name&&(u.textContent="Widget Builder Panel: "+r?.name,u.setAttribute("title",`Widget Builder Panel: ${r?.name}`)),await $n(r);const c=await Te(r,i);f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await X(r,!1,c,!0),await ys(l?.widgetId??e);const g=document.getElementById("preview-btn");return g.setAttribute("onclick","previewWidget(event)"),g.setAttribute("data-widgetid",`${e}`),g.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),pn(),q.enableWidgetButtons(),q.initializeWidgetVersions(n||e,r?.version?r.version.toString():"original",r?.timestamp),D.renderActionHistory(),D.updateActionHistories(),ce(),pe(),Ln(),""}catch(t){console.error(t),L.errorToast(t?.message,4),pn(),je(a)}}function rr(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const n=document.getElementById("page-properties");n&&(n.style.display="none");const t=document.querySelector("button[data-tab-id='wico-tab-navigator']"),i=document.querySelector(`button[data-tab-id='${Mt.staticTabName}']`);Mt.staticTabName==="wico-tab-pageInfo"&&i.style.display==="none"?t&&t.click():i?i.click():t&&t.click()}function lr(){document.title="Widget Conceptualizer",mt("description","Widget Conceptualizer"),mt("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection")}async function cr(a,e){a.stopPropagation();try{const n=confirm("Do you want to delete the Widget?");if(await Pe(),n){L.infoMessageToast("Deleting the widget...",0),await $o(e),await q.renderSavedWidgets();const t=new URLSearchParams(window.location.search).get("widget-id");return t&&parseInt(t)===e&&await je(a),document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(n){document.querySelector(".infoMessageToast")?.remove(),L.successfullToast("Widget Deleted Successfully"),L.errorToast(n.message?n.message:"Failed to delete widget"),console.error("Failed to delete widget:",n)}}async function dr(a,e){a.stopPropagation();const n=document.getElementById("postWidgetModal");n&&n.remove();const t=await I(),i=t?.entityId===101651686||t?.entityId===101279491,s=document.createElement("dialog");s.id="postWidgetModal",s.className="col-md-6 a-dialog",s.innerHTML=`
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
  `,document.body.appendChild(s);const o=s.querySelector("#pasteArea"),l=s.querySelector("#widgetThumbnail"),r=s.querySelector("#imagePreview img"),d=s.querySelector("#imagePreview"),u=s.querySelector("#pasteText");function c(p){const h=new FileReader;h.onload=v=>{r&&v.target?.result&&(r.src=v.target.result,d.classList.remove("d-none"),u.classList.add("d-none"))},h.readAsDataURL(p)}l?.addEventListener("change",p=>{const h=p.target.files?.[0];h&&c(h)});function g(p){const h=p.clipboardData?.items;if(h){for(let v=0;v<h.length;v++)if(h[v].type.indexOf("image")!==-1){const T=h[v].getAsFile();if(T&&l){const W=new DataTransfer;W.items.add(T),l.files=W.files,c(T);break}}}}o?.addEventListener("paste",p=>g(p)),s.addEventListener("paste",p=>g(p)),s.querySelector("#post-widget-form")?.addEventListener("submit",p=>{p.preventDefault(),ur(e,s)}),s.showModal()}async function ur(a,e){const n=document.querySelector(`#spinner-${a}`),t=e.querySelector('button[type="submit"]');try{t&&(t.disabled=!0,t.textContent="Posting...",L.infoMessageToast("Posting Widget to Public...",0)),n&&n.classList.remove("d-none"),await Pe();const i=await I(),s=document.getElementById("widgetPublicName").value,o=document.getElementById("widgetDescription").value,l=document.getElementById("widgetThumbnail");if(!l?.files?.length)throw console.error("File validation failed:",{inputExists:!!l,filesLength:l?.files?.length}),new Error("Please provide a thumbnail image");const r=l.files?.[0];if(!r||!l.value)throw new Error("Please provide a thumbnail image");const d=await Ga(r);if(!d.success)throw new Error("Failed to upload thumbnail");const u=await Ee(a,i.token);if(u&&(await ke(u.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),L.infoMessageToast("Widget is already public.");return}const c=document.getElementById("postAsTemplate")?.checked;let g=null;if(u)g=await Q(u.widgetId);else{const W=await K(a);g=await q.createWidgetCopy(W,i.userId,i.token)}const m=await te("public_name",s,!1,i.userId,4,999),p=await te("description",o,!1,i.userId,4,999),h=await te("thumbnail",d.url||"no attachment",!1,i.userId,4,999);await V(g,p,"description"),await V(g,h,"thumbnail"),await V(g,m,"public_name");const v=await te("public_widget","",!1,i.userId,4,999);if(await V(v,g,"s_widget"),c){const E=await te("template_name",s,!1,i.userId,4,999),w=await te("template_thumbnail",d.url||"no attachment",!1,i.userId,4,999);await V(g,w,"template_thumbnail"),await V(g,E,"template_name");const y=await te("template_widget","",!1,i.userId,4,999);await V(y,g,"s_widget")}await N.SyncDataOnline(),await q.renderPublicWidgets(),await q.renderSavedWidgets(),c&&await q.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{L.successfullToast(`Widget Posted to Public${c?" and Templates":""}`)},300)}catch(i){console.error("Error posting widget:",i),document.querySelector(".infoMessageToast")?.remove(),L.errorToast("Failed to post widget"),t&&(t.disabled=!1,t.textContent="Post Widget")}finally{n&&n.classList.add("d-none")}}async function wn(a=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const t=(await Uo(a))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],i=await Promise.all(t.map(async l=>{const r=l?.data?.the_widget,u=r?.the_widget_public_name?.data?.the_public_name||`${r?.the_widget_name?.data?.the_name} ${r?.the_widget_version?.data?.the_version>1?"v"+r?.the_widget_version?.data?.the_version:""}`,c=r?.the_widget_description?.data?.the_description,g=r?.the_widget_thumbnail?.data?.the_thumbnail,m=r?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:u,timestamp:m,description:c,thumbnail:g}}));return i?.length?(await Promise.all(i?.map(async l=>{const d=(await K(l.id)).userId===e.userId,u=l.description?l.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link class="publicWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${l?.id}">
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
                ${d?`
                  <span class="material-symbols-outlined me-2" data-pubwidid="${l.id}" onclick="removeMyWidgetFromPublic(event)" title="Remove from Public" type="button">
                    delete
                  </span>`:""}
                <span class="material-symbols-outlined" data-pubwidid="${l.id}" onclick="saveFromPublic(event)" title="Import Widget" type="button">
                  file_download
                </span>
              </div>
            </router-link>
          </li>
        `})||[])).join(""):`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `}catch(e){console.error("error",e),e?.status===401&&Ae()}}async function mr(a=""){try{const e=await I();if(!e)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const t=(await zo(a))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[],i=await Promise.all(t.map(async r=>{const d=r?.data?.the_widget,c=d?.the_widget_folder_name?.data?.the_folder_name||`${d?.the_widget_name?.data?.the_name} ${d?.the_widget_version?.data?.the_version>1?"v"+d?.the_widget_version?.data?.the_version:""}`,g=d?.the_widget_description?.data?.the_description,m=d?.the_widget_thumbnail?.data?.the_thumbnail,p=d?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:c,timestamp:p,description:g,thumbnail:m}}));if(!i?.length){const r=document.getElementById("folder-widget-container");return r&&(r.style.display="block",await De(ie.folder_widget,r)),`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `}const o=(await Promise.all(i?.map(async r=>{const u=(await K(r.id)).userId===e.userId,c=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link href="" class="folderWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${r?.id}">
              <div class="d-flex align-items-center" style="min-width: 0;">
                <span class="material-symbols-outlined me-2">drag_indicator</span>
                <div class="widget-info" style="word-wrap: break-word; min-width: 0;">
                  <div class="widget-name pe-2">${r.name||"Unnamed Widget"}</div>
                </div>
              </div>
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
            </router-link>
          </li>
        `})||[])).join(""),l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",l.innerHTML=o),o}catch(e){console.error("error",e),e?.status===401&&Ae()}}async function gr(){try{const a=await I();if(!a)return[];const e=await te("template_widget","",!1,a.userId,4,999);let n=new j;n.typeConnection="the_widget_template_name",n.name="widgetPName";let t=new j;t.typeConnection="the_widget_template_thumbnail",t.name="widgetThumbnail";let i=new j;i.typeConnection="the_template_widget_s_widget",i.name="widgetLevel",i.inpage=10,i.limit=!0,i.freeschemaQueries=[n,t];let s=new j;return s.conceptIds=[e.id],s.outputFormat=fe,s.name="top",s.freeschemaQueries=[i],new Promise(o=>{ye(s,"").subscribe(l=>{const r=[];if(l&&l.length>0){const d=l[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const u of d)if(u?.data?.the_widget&&typeof u.data.the_widget=="object"){const c=u.data.the_widget?.the_widget_template_name?.data?.the_template_name,g=u.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(c||g)&&r.push({id:u.id||"",name:c||"Unnamed Template",thumbnail:g||""})}}o(r)})})}catch(a){return console.error("Error fetching templates:",a),[]}}async function pr(a,e){a.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const t=document.createElement("dialog");t.setAttribute("id","rename-widget-dialog"),t.classList.add("col-md-3"),t.innerHTML=`
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
        `;const i=t.querySelector("form");return i&&i.addEventListener("submit",s=>Za(s,"",e)),document.querySelector("body #app")?.appendChild(t),de("rename-widget-dialog"),"OPENED"}catch(n){console.error("Failed to rename widget:",n)}}async function Za(a,e="",n){a.preventDefault();let t="";if(e)t=e;else{const r=new FormData(a?.target);if(t=Object.fromEntries(r)?.widgetName,!t?.trim()){const u=a.target.querySelector("#widgetName");u?.focus(),u.style.border="2px solid red",u.style.outline="none",u.addEventListener("input",()=>{u.style.border=""});return}}const s=(await I())?.userId,o=document.getElementById("rename-widget-dialog"),l=o?.querySelector('button[type="submit"]');l.textContent="Saving";try{await Pe();const r=await Ze(n,"the_widget_name","name",t,s);await N.SyncDataOnline();const d=o?.querySelector("input"),u=o?.querySelectorAll("button");if(u&&u.forEach(c=>{c.disabled=!0}),d&&(d.disabled=!0),r){q.renderSavedWidgets(),we("rename-widget-dialog"),L.successfullToast("Widget Renamed Successfully");const c=new URLSearchParams(window.location.search).get("widget-id");if(n===Number(c)){const g=document.getElementById("widget-builder");g.textContent=`Widget Builder Panel: ${t}`}return"widget Renamed successfully"}}catch(r){L.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",r)}}const jn=async(a,e,n=!1)=>{const t=await Ye(a,e),i=t?.data?.the_widget,s=i?.the_widget_name?.[0]?.data?.the_name,o=i?.the_widget_html?.[0]?.data?.the_html,l=i?.the_widget_clean?.[0]?.data?.the_clean,r=i?.the_widget_css?.[0]?.data?.the_css,d=i?.the_widget_js?.[0]?.data?.the_js,u=i?.the_widget_timestamp?.[0]?.data?.the_timestamp,c=i?.the_widget_widget?.[0].id,g=i?.the_widget_type?.[0]?.data?.the_type,m=i?.the_widget_after_render?.[0]?.data?.the_after_render,p=i?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,h=i?.the_widget_update?.[0]?.data?.the_update,v=i?.the_widget_mount_child?.[0]?.data?.the_mount_child;let T=[];const W=i?.the_widget_s_child;return W?.length&&(T=await Promise.all(W?.map(async w=>{const y=w?.data?.the_child_widget,_=y?.the_child_widget_type?.[0]?.data?.the_type,S=y?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,b=y?.the_child_widget_info?.[0]?.data?.id?y?.the_child_widget_info?.[0]?.data?.id:y?.the_child_widget_parent?.[0]?.data?.the_parent,C=await jn(Number(b),e,n);return{id:w?.id,type:_,parent:b,wrapper:S,widget:C}}))),{id:t?.id,name:s,html:o,cleanHtml:l,css:r,js:d,timestamp:u,widgetId:c,typeValue:g,addEvent:m,onMount:p,onUpdate:h,mountChildWidgets:v,childs:T}},hr=async a=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await I(),n=e?.entityId,t=e?.userId,i=await K(n);try{if(a.target?.files?.length>0){const s=[];for(let r=0;r<a.target?.files?.length;r++){const d=a.target?.files[r];if(d.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}s.push(Ga(d))}const o=await Promise.all(s);for(let r=0;r<o.length;r++){const d=o[r];d.success||alert("Some file failed: "+d.message);const u=await te("the_asset",d.url||"",!1,t,4);await V(i,u,"s_asset")}await N.SyncDataOnline(),L.successfullToast(`Asset${o.length>1?"s":""} uploaded successfully`),new ir().setupAssetListener()}else{alert("No file found");return}}catch(s){throw console.error(s),s}document.getElementById("assets-upload-loader")?.classList.add("d-none")},fr=async(a,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{a.target.closest(".asset-item").remove(),await Se(e),L.successfullToast("Asset deleted successfully")}catch(t){console.error("Error deleting asset:",t),L.errorToast("Failed to delete asset")}};function yr(a){const e=document.getElementById(a);if(e){e.value="";const n=new Event("keyup");e.dispatchEvent(n),Ya(a)}}function Ya(a){const e=document.getElementById(a),n=document.getElementById(`${a}-clear`);e&&n&&(n.style.display=e.value?"block":"none",n.style.cursor=e.value?"default":"")}async function wr(a,e,n,t){a.preventDefault(),a.stopPropagation();const i=t.replace(/\\n/g,`
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
  `,o=document.getElementById("widget-detail-modal");o&&o.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",s),de("widget-detail-modal")}window.viewPublicWidgetDetails=wr;window.openCSSEditor=ut;class Ka{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let n=function(i){if(!i)return;const{wrapper:s}=i,o=s&&s!=="0"?`#${s}`:".content-target";t=t+`${o} { ${i.css} }`,i.children.forEach(l=>{n(l)})},t="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),n(f.widgetTree),this.styleElement.textContent=t}}async getWidgetHtml(e){let n=[];e.forEach(t=>{t.classList.forEach(i=>{n.push(i)})}),this.insertCSS(n)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:i}=n;return i.ranges.length===0?!1:(t({changes:{from:i.ranges[0].from,to:i.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your CSS here */",extensions:[$t,jt,Li(),Ht(),ae.lineWrapping,Ie.tabSize.of(2),Ie.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),Dt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(async n=>{if(n.docChanged){const t=this.editorView?.state.doc.toString()||"";this.updateCSS(t)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const n of e)if(this.editorView){const{state:t,dispatch:i}=this.editorView;i({changes:{from:0,to:t.doc.length,insert:`.${n} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const la=async a=>{const e=new ya,n=br(a);if(Object.keys(n).length>0){const t=await e.validateField(n),i=await vn(t),s=vn(i);return Er(a,s)}},vr=async a=>{const n=await new ya().validateField(a);return Object.keys(n).length>0?{status:!1,details:vn(n)}:{status:!0}},br=a=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},n=a?.attributes;if(Array.isArray(n))n.forEach(t=>{const i=_r(t);switch(t.name){case"name":e.fieldName=i||"";break;case"value":e.value=i||null;break;case"fieldtype":e.fieldType=i?i.trim():null;break;case"pattern":e.pattern=i||null;break;case"datatype":e.dataType=i?i.trim():null;break;case"typeconcept":e.conceptType=i||null;break;case"maxlength":e.maxLength=i?parseInt(i):null;break;case"minlength":e.minLength=i?parseInt(i):null;break;case"max":e.maxValue=i?parseInt(i):null;break;case"min":e.minValue=i?parseInt(i):null;break;case"accept":e.accept=i||null;break;case"file":e.file=i||null;break;case"required":e.required=i===!0;break;case"unique":e.isUnique=i===!0;break}});else throw console.error('attributesData["attributes"] is not an array',a.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},_r=a=>{switch(a.type){case"boolean":return a.value==="on";case"array":return a.selected||null;case"string":return a.value||null;default:return null}},vn=a=>({datatype:a.dataType,pattern:a.pattern,max:a.maxValue,min:a.minValue,minlength:a.minLength,maxlength:a.maxLength,accept:a.accept,file:a.file,required:a.required,unique:a.unique}),Er=(a,e)=>(a.attributes.forEach(n=>{const t=e[n.name];n.validationStatus=t?"invalid":"valid",n.validationErrorMessage=t||""}),a),Tr=a=>({fieldName:a.getAttribute("name"),value:a instanceof HTMLInputElement?a.value:null,fieldType:a.getAttribute("fieldtype"),dataType:a.getAttribute("datatype"),pattern:a.getAttribute("pattern"),conceptType:a.getAttribute("typeconcept"),maxLength:a.getAttribute("maxlength"),minLength:a.getAttribute("minlength"),minValue:a.getAttribute("min"),maxValue:a.getAttribute("max"),file:a.hasAttribute("file"),accept:a.hasAttribute("accept"),required:a.hasAttribute("required"),isUnique:a.getAttribute("unique")==="on"});async function Xa(a){let e=a.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",a.parentNode?.insertBefore(e,a.nextSibling)),e.innerHTML="";const n=Tr(a),t=await vr(n);try{if(t.status)a.classList.remove("invalid"),a.classList.add("valid");else if(a.classList.remove("valid"),a.classList.add("invalid"),t.details&&typeof t.details=="object"){const i=document.createElement("span");i.className="error-message",i.style.color="red",i.style.fontSize="12px";const s=Object.values(t.details).filter(Boolean);i.innerHTML=s.join("<br>"),e.appendChild(i)}}catch(i){console.error("Validation error:",i);const s=document.createElement("span");s.className="error-message",s.style.color="red",s.textContent="Validation failed. Please try again.",e.appendChild(s)}}var ze=(a=>(a.STYLE="style",a.BOOLEAN="boolean",a.FORM="form",a.SPECIAL="special",a))(ze||{});const Sr=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),Hn=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],Dn=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],kt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Cr=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],It=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],me=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),Lr=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),Wr=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),Ar=new Set(["elementContent","className","id"]),ei=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function it(a){return a.toLowerCase()==="type"?!0:ei.has(a.toLowerCase())}function vt(a,e,n){const t=a.toLowerCase();if(t==="type"){const i=n?Sr.get(n.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):i}return ei.get(t)||[]}class Yt{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=$i}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,n){Mt.staticTabName=n;let t,i,s=document.getElementsByClassName("tabcontent");for(t=0;t<s.length;t++)s[t].style.display="none";for(i=document.getElementsByClassName("tablinks"),t=0;t<i.length;t++)i[t].className=i[t].className.replace(" active","");const o=document.getElementById(n);o.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let n=this;for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(s){const o=e[i].getAttribute("data-tab-id");n.openTab(s,o)});const t=document.querySelector(`button[data-tab-id='${Mt.staticTabName}']`);t?t.click():e[0].click()}sortAttributes(e){return e.sort((n,t)=>{if(!n?.name||!t?.name)return 0;const i=this.findAttributeInMap(n.name),s=this.findAttributeInMap(t.name);if(i==="Other"&&s!=="Other")return 1;if(i!=="Other"&&s==="Other")return-1;if(i===s){const o=this.categoryMap[i].findIndex(r=>r.toLowerCase()===n.name.toLowerCase()),l=this.categoryMap[s].findIndex(r=>r.toLowerCase()===t.name.toLowerCase());return o-l}return 0})}getCategoryForAttribute(e){if(!e)return"General";const n=e.toLowerCase();for(const[t,i]of Object.entries(this.categoryMap))if(t!=="Other"&&i.some(s=>s.toLowerCase()===n))return t;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,n){setTimeout(()=>{const t=document.getElementById("element-attributes");if(!t){this.setAttributes(e,n);return}t.innerHTML="";const i=document.createElement("div");if(i.className="row",t.appendChild(i),!e){i.innerHTML="";return}(async()=>await la(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const o=this.sortAttributes(e.attributes),l={};o.forEach(d=>{const u=this.getCategoryForAttribute(d.name);l[u]||(l[u]=[]),l[u].push(d)});let r="";Object.entries(l).forEach(([d,u])=>{const c=u.map(m=>{let p="";if(m.name.toLowerCase()==="float")p=`
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
                `;else if(m.name==="Alignment"){const h=e?.tag?.toLowerCase();Hn.includes(h)&&(p=`
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
                  `)}else if(m.name==="Font Family"){const h=e?.tag?.toLowerCase();if(Dn.includes(h)&&it(m.name)){const T=vt(m.name,m.value,e?.tag).map(W=>{const E=W.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${W}" ${E?"selected":""}>${W}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${T}
                      </select>
                    `}}else if(m.name==="Font Weight"){const h=e?.tag?.toLowerCase();if(kt.includes(h)&&it(m.name)){const T=vt(m.name,m.value,e?.tag).map(W=>{const E=W.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${W}" ${E?"selected":""}>${W}</option>`}).join("");p=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select ${m.name}</option>
                        ${T}
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
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const h=(m.value||"0 0 0 0").split(" ").map(w=>w.trim()).map(w=>/^\d+$/.test(w)?`${w}px`:w);for(;h.length<4;)h.push("0px");const[v,T,W,E]=h;return m.name==="Margin"?`
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
                          <div class="margin-edge top" data-value="${v}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${v}</span>
                            <input type="text" 
                              class="edge-input"
                              value="${v}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: [this.value, '${T}', '${W}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${v}', this.value, '${W}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="margin-edge bottom" data-value="${W}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${W}</span>
                            <input type="text"
                              class="edge-input"
                              value="${W}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${v}', '${T}', this.value, '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${v}', '${T}', '${W}', this.value].join(' '),
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
                          <div class="padding-edge top" data-value="${v}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${v}</span>
                            <input type="text" 
                              class="edge-input"
                              value="${v}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: [this.value, '${T}', '${W}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${v}', this.value, '${W}', '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                          <div class="padding-edge bottom" data-value="${W}" onclick="this.classList.add('editing')">
                            <span class="edge-value">${W}</span>
                            <input type="text"
                              class="edge-input"
                              value="${W}"
                              onchange="updateElementAttribute({
                                target: {
                                  value: ['${v}', '${T}', this.value, '${E}'].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
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
                                  value: ['${v}', '${T}', '${W}', this.value].join(' '),
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
                    >${m?.value||""}</textarea>`;else if(it(m.name)){const v=vt(m.name,m.value,e?.tag).map(T=>`<option value="${T}" ${T===m?.value?"selected":""}>${T}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${v}
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
                  </div>`;else if(m?.type==="boolean")p=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${n}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(it(m.name)){const v=vt(m.name,m.value,e?.tag).map(T=>{const W=T.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${T}" ${W?"selected":""}>${T}</option>`}).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${v}
                    </select>
                  `}else{const v=(m?.value?.split(",")||[]).map(T=>`<option value="${T}" ${T===m?.selected||T===m?.value?"selected":""}>${T}</option>`).join("");p=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      ${v}
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
              `}).join(""),g=d==="General"||d==="Display"||d==="Typography"||d==="Size"||d==="Spacing"||d==="Borders"||d==="Colors"||d==="Other";r+=`
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
            `}),i.innerHTML=r}}),Et()},0)}setAttributesForMultipleElements(e){const n=async()=>await la(e);if(!e){const i=document.getElementById("element-attributes").querySelector(".row");i.innerHTML="";return}n().then(()=>{if(e?.attributes&&e?.attributes?.length){const t={};e.attributes.forEach(o=>{const l=this.getCategoryForAttribute(o.name);t[l]||(t[l]=[]),t[l].push(o)});let i="";Object.entries(t).forEach(([o,l])=>{if(l.length){const r=l.map(u=>{let c="";return u?.type==="string"?c=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||""}">`:u?.type==="color"?c=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${u?.value||"#000000"}">`:u?.type==="boolean"?c=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${u?.value&&u?.value!=="false"?"checked":""}>`:u?.type==="array"&&(c=`
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
                    ${r}
                  </div>
                </div>
              </div>
            `}});const s=document.getElementById("element-attributes");s&&(s.innerHTML=i)}})}async getHtml(){window.updateWidgetTypeValue=ai,window.toggleDisplay=ut,window.updateElementAttribute=Kt,window.updateMultipleElementAttribute=oi,window.handlePageProperties=si,window.updateCSSLibrary=Ve,window.updateJSLibrary=Re,window.addJSLibrary=ci,window.addCSSLibrary=li,window.openRenameCustomFunction=ot.openRenameCustomFunction,window.deleteCustomFunction=ot.deleteCustomFunction,setTimeout(async()=>{ot.initializeCodeBlock();const i=new Ka,s=document.getElementById("css-editor-container");s.innerHTML=await i.getHtml(),await i.initializeEditor(),Fn()},0),setTimeout(async()=>{await new xa().initializeEditor()},0),setTimeout(async()=>{const i=new Ma,s=document.getElementById("js-editor-container");s.innerHTML=await i.getHtml(),await i.initializeEditor()},0),setTimeout(async()=>{await new se("onmount-editor-split").initializeEditor(),await new se("onupdate-editor-split").initializeEditor(),await new se("addevents-editor-split").initializeEditor(),await new se("mountchildwidgets-editor-split").initializeEditor();const r=document.getElementById("publish-widget");r&&r.addEventListener("click",async d=>{d.preventDefault();try{await f.publish()}catch(u){console.error("error publishing widget",u),u instanceof Error&&L.errorToast(u.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let n="",t="";if(this.the_params){const i=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";i&&ve("meta_title",i);const s=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";s&&ve("meta_description",s);const o=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";o&&ve("meta_keywords",o);const l=this.the_params?.data?.the_page_width?.data?.the_width||"";l&&ve("width",l);const r=this.the_params?.data?.the_page_font_size?.data?.the_font_size;r&&ve("font_size",r);const d=this.the_params?.data?.the_page_font_family?.data?.the_font_family;d&&ve("font_family",d);const u=this.the_params?.data?.the_page_type?.data?.the_type;u&&ve("type",u);const c=()=>Array.from({length:13},(p,h)=>12+h).map(p=>{const h=r==p?"selected":"";return`<option value="${p}" ${h}>${p}</option>`}).join(""),g=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(h=>{const v=d==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${v}>${h}</option>`}).join(""),m=()=>["Fluid","Fixed"].map(h=>{const v=u==h.toLowerCase()?"selected":"";return`<option value="${h.toLowerCase()}" ${v}>${h}</option>`}).join("");n=`
        <button class="tablinks" data-tab-id="wico-tab-pageInfo">Page info</button>
      `,t=`
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
            <input type="text" name="input-page_width" id="width" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}" value="${l}">
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
        ${t}
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
    `}}async function Nn(a){let e=Wn.filter(t=>t.id==a)[0];return!a||a==="null"?void 0:{id:a,attributes:no,tag:"div",name:`Layout: ${e?.name}`}}async function xr(){return{id:1,name:"Global",tag:"div",attributes:ji}}class rn{static editor}function Mr(a,e,n){const t=n?.id,i=document.getElementById("editor");i?.setAttribute("wrapper-id",e),i?.setAttribute("element-id",t),i?.setAttribute("element-clicked","true"),rn.editor&&n?.void?rn.editor.setData(a):n?.void||rn.editor?.setData("")}window.showdWidgetProperties=Ir;window.widgetSelected=$r;function kr(a,e){let n;if(e.data_type=="layout"){const t=Wn.filter(r=>r.name==e.data_text)[0],l=new DOMParser().parseFromString(t?.html,"text/html").body.querySelector("div");l.setAttribute("element-info-id",a),n=l.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?n=`<${e?.data_type} element-info-id="${a}">${e?.data_default}</${e?.data_type}>`:n=`<${e?.data_type} element-info-id="${a}">`;return`${n}`}async function Ir(a,e){const n=a.target.closest(".added-widget-container"),t=n.id,i=n.getAttribute("data-widgetid");if(i){const E=(await I())?.token,y=(await Ye(Number(i),E))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new Yt().initializeView();const S=document.getElementById("widgetNameValue");S&&(S.value=y)}const o=(await I())?.userId,l=await da(t,o);console.warn("savedWidgetProperties on widget Selected ->",l);let r="";l?.length&&(l?.length>1&&l?.sort((w,y)=>{const _=new Date(w?.created_at).getTime();return new Date(y?.created_at).getTime()-_}),r=l?.[0]?.data?.[t]?.properties?.filter(w=>w.name==="widget-type")?.[0]?.value);const d=document.getElementById("widgetTypeValue");d.setAttribute("data-widgetcontainerid",t),d.setAttribute("data-mainwidgetid",`${e}`),d.value=r;const c=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,h=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,v=document.querySelector(".content-target"),T=new gt;r&&await T.getTypeValueList(r),T.componentDidMountFunction=c,T.addEventFunction=m,T.mountChildWidgetsFunction=h,await T.mount(v)}function Pr(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(t=>{const i=document.querySelector(t);i&&(i.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const n=document.querySelector('.editor-container .cm-content[data-language="javascript"]');n.textContent="/* Write your JavaScript here */"}const Ge=async()=>{const a=document.getElementById("element-info");a.style.display="none"},st=async a=>{const e=a?.target;let n=e?.tagName;const t=e?.classList?.contains("fslayout-row"),i=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))n="WIDGET",i.classList.add("widget-marker");else if(t)n="Layout Element",i.classList.remove("widget-marker");else if(e?.closest("#widget-details")){n="",i.classList.remove("widget-marker");return}else i.classList.remove("widget-marker");const s=e.getBoundingClientRect(),o=s.left,l=s.top;i.style.display="block",new ResizeObserver(()=>{i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.top=`calc(${l}px)`,i.style.left=`calc(${o}px)`}).observe(e);const d=document.getElementById("element-info_details");d.innerHTML=`<span>${n}</span>`;const u=document.getElementById("select-box"),c=document.getElementById("builder-workarea");c.addEventListener("scroll",Xn),c.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");u.style.transition="0.2s ease all";const p=document.getElementById("element-info");m||(p.style.display="block"),p.style.height="0",p.style.width="0"}),c.addEventListener("resize",Xn)},Je=async a=>{a.preventDefault();const e=a.target;or("navigator-container"),Le.publish("page:elementClick",e);const n=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details"))return;const t=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",t);const i=e;R?.previousSelectedStaticElement?.removeAttribute("draggable"),R.staticElement=i,R.previousSelectedStaticElement=R.staticElement,R.staticElement.setAttribute("draggable","true");const s=i.getBoundingClientRect();Br(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),R.staticElement=e;const y=e?.tagName.toLowerCase(),b=Ke.staticElementList?.filter(C=>{const A=C?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return y===A})?.[0]?.id;Kt(a,"",b)}));const l=s.left,r=s.top;ft.resetNavigationBar();const d=e;let u;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?u=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(u=e.closest(".edited-widget-container"));const c=e.classList.contains("added-widget-container");if(u||c){let y="";c?y=e?.id:u&&(y=u?.id);const _=[];let S=0;async function b(A,x){return A.reduce((k,P,B)=>(P.wrapper===x&&(k.push(P),S=B),P.children&&P.children.length>0&&b(P.children,x),k),_)}const C=await b(f?.staticWidgetTree?.children,y);f.selectedStaticWidgetTreeInfo={widgetTree:C[0],isChildWidget:!0,childWidgetIndex:S},await X(C[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},X(f?.staticWidgetTree,!1);if(d?.id&&(f.updatedWidgets[d.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const y=document.getElementById("widgetType");y&&(y.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const g=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");g&&(!g?.style?.display||g?.style?.display==="none")&&m&&(g.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(y=>y.remove());let h=!1;if(a instanceof KeyboardEvent&&a.ctrlKey){if(d?.classList.contains("added-widget-container")){L.infoMessageToast("Widget can't be selected");return}d?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(_=>{const S=_.parentElement?.classList,b=_?.classList,C=_.firstChild?.classList,A=S&&S.contains("added-widget-container");let k=b&&b.contains("fslayout-row")||C&&C.contains("fslayout-row")?"Layout":_.tagName;if(A||h){h=!0;return}const P=document.createElement("div");P?.classList.add("tag-name"),P.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${k}
        </span>
      `,_?.parentElement?.appendChild(P)}),h?(L.infoMessageToast("Widget can't be selected"),d?.classList.toggle("widget_selected"),d?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await ti());return}const v=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const y=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;v&&y&&(v.value=y)}else v&&(v.value=f?.staticWidgetTree.name);const T=document.getElementById("select-box");T.style.display="block";const W=new ResizeObserver(()=>{T.style.width=e.offsetWidth+"px",T.style.height=e.offsetHeight+"px",T.style.top=`calc(${r}px)`,T.style.left=`calc(${l}px)`}),E=document.getElementById("publishWidgetBtnContainer");if(E){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(E.classList.remove("d-none"),E.classList.add("d-flex")):(E.classList.remove("d-flex"),E.classList.add("d-none")),console.log("prev selected widget",n,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const y=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,_=y.origin||y.id,S=y.version?y.version.toString():"original";typeof q.initializeWidgetVersions=="function"&&q.initializeWidgetVersions(_,S,y?.timestamp)}catch(y){console.error("Error showing widget versions:",y)}}W.observe(e);const w=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?w.style.display="block":w.style.display="none",(u||c)&&!e.closest(".edited-widget-container")){const _=document.getElementById("element-attributes").querySelector(".row");_.innerHTML="",Ft(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await Pt(d)};function Br(a){return typeof a.contentEditable<"u"&&ls.includes(a.tagName.toLowerCase())}async function $r(a){a.preventDefault(),a.stopPropagation()}async function Pt(a){let e;if(a?.dataset?.widgetid)return;const n=a?.tagName.toLowerCase(),i=Ke.staticElementList?.filter(c=>{const g=c?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return n===g}),s=i?.[0]?.id,o=a.classList.contains("fslayout-row"),l=a?.firstChild?.classList?.contains("fslayout-row");if(o||l)e=await Nn(s),e?.attributes?.length&&(e.attributes=e?.attributes.map(c=>({...c,selected:"",value:c.name==="class"?"":c.value})));else if(s)e=await yt(i);else if(qe.includes(n)||ht.includes(n)){const c=rs.map(g=>{const m=g.name.toLowerCase(),p=me.get(m)||me.get(g.name);return p?{...g,value:a.style[p.property]||""}:{...g,value:m==="classname"?a.className||"":m==="id"&&a.id||""}});n==="iframe"&&c.push({name:"src",type:"string",value:a.getAttribute("src")||""}),qe.includes(n)&&c.push({name:"elementContent",type:"string",value:a.textContent||""}),e={tag:n,attributes:c}}e.attributes=e?.attributes?.map(c=>c?.name?(c.value=ui(a,c.name),c):(console.warn("Found attribute without name:",c),c)).filter(Boolean);let r="";const d=e?.attributes;d?.length&&(r=d?.filter(g=>g?.name==="elementContent")?.[0]?.value,Mr(r,a?.id,e),Ft(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new Yt()?.setAttributes(e,a?.id)}async function ti(){let a;a=await xr(),a?.attributes?.length&&(a.attributes=a?.attributes.map(n=>({...n,value:""}))),new Yt()?.setAttributesForMultipleElements(a)}const jr=new Ue;async function Hr(a){return new Promise(async e=>{const n=await ni(a);e(n)})}async function ni(a){return new Promise(async e=>{let n=new z;n.composition=a,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],n.inpage=100;let t=new z;t.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],t.inpage=100;const l=(await he([n,t],""))?.data?.the_element?.the_element_s_attribute?.map(c=>{const g=c?.data?.the_attribute,m=g?.the_attribute_name?.[0]?.data?.the_name,p=g?.the_attribute_type?.[0]?.data?.the_type,h=g?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:p,value:h}}),r=l?.map(c=>{let g;return c?.type==="string"?g='<input type="text" class="form-control" onchange="updateAttribute(event)">':c?.type==="boolean"?g='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':c?.type==="array"&&(g=`
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
        `}).join("");let d,u=setInterval(async()=>{d&&(clearInterval(u),l?.forEach(c=>{c?.type!=="boolean"&&d?.setAttribute(c?.name,"")})),d=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(r)})}async function ai(a){const n=(a?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=n,D.updateActionHistories()}async function Dr(a){const e=a.target,n=e.closest(".widget_container"),t=n.getAttribute("data-elementId"),i=e.textContent?.trim(),s=document.querySelectorAll("#element-attributes .attribute-row");for(const o of s)if(o.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const r=o.querySelector("input");if(r&&r.value!==i){r.value=i||"",await Kt({target:e,type:"text",value:i,isDirectEdit:!0},n,t);break}}}async function Nr(a,e,n,t){console.log("updateElementAttributeViaEditor ->",e,n),a?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),a=R.staticElement;let s;const o=a?.tagName.toLowerCase(),r=Ke.staticElementList?.filter(g=>{const m=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return o===m});s=await yt(r),a?.classList.remove("wb-initial-empty");const d=t?.value,u=t?.attribute,c=R.staticElement;if(c){if(u==="className")c?.setAttribute("class",d);else if(u==="height"){const g=d?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;c.style.height=m}else if(u==="width"){const g=d?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;c.style.width=m}else if(u==="elementContent")if(!c?.childNodes?.length)c.innerHTML=d;else for(let g of c?.childNodes){const m=g;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=d;break}}else{const p=document.createTextNode(d);c.insertBefore(p,c.firstChild);break}}else c?.setAttribute(u,d?.trim());s.attributes=s?.attributes?.map(g=>(g?.name===u&&(g?.type==="array"?g.selected=d:g.value=d),g)),await Pt(a)}}async function Kt(a,e,n){try{const t=a.target.closest(".category-content"),i=t?.id,s=t?.style.display!=="none",l=document.getElementById("advanced-size")?.style.display==="block",u=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),c=document.querySelector(".margin-control")?.closest(".col-12"),g=document.querySelector(".padding-control")?.closest(".col-12"),m=!c?.classList.contains("hidden"),p=!g?.classList.contains("hidden");e=R.staticElement,e?.classList.remove("wb-initial-empty");const h=e?.tagName?.toLowerCase();let v;const T=e?.classList?.contains("fslayout-row"),W=e?.firstChild?.classList?.contains("fslayout-row");if(T||W)v=await Nn(n);else{const C=Ke.staticElementList?.filter(A=>{const x=A?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return h===x});if(C?.length)v=await yt(C);else if(qe.includes(h)||ht.includes(h)){const A=a?.target?.value,x=a?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(x==="className")e.setAttribute("class",A);else if(x==="elementContent"&&qe.includes(h))e.textContent=A;else if(x==="id")e.id=A;else if(x==="Height"){const k=A?.trim(),P=/^\d+$/.test(k)?`${k}px`:k;e.style.height=P}else if(x==="Width"){const k=A?.trim(),P=/^\d+$/.test(k)?`${k}px`:k;e.style.width=P}else if(x==="Margin"){const P=(A?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.margin=P}else if(x==="Padding"){const P=(A?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.padding=P}else x==="Background Color"?e.style.backgroundColor=A:x==="Float"?e.style.float=A:x==="Color"?e.style.color=A:e?.setAttribute(x,A?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const k=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=k,le(k)}else{const k=await dt();f.staticWidgetTree.html=k,le(k)}await Pt(e);return}}const E=a?.target?.value,w=a?.target?.type,y=a?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),_=e,S=_?.getAttribute("isvalidate")==="on";if(S&&_.setAttribute("onchange","applyValidation()"),S&&_?.addEventListener("change",b=>{const C=b.target;Xa(C)}),y==="className")_?.setAttribute("class",E);else if(y==="Height"){const b=E?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;_.style.height=C}else if(y==="Width"){const b=E?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;_.style.width=C}else if(y==="Minimum-Height"){const b=E?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;_.style.minHeight=C}else if(y==="Minimum-Width"){const b=E?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;_.style.minWidth=C}else if(y==="Maximum-Height"){const b=E?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;_.style.maxHeight=C}else if(y==="Maximum-Width"){const b=E?.trim(),C=/^\d+$/.test(b)?`${b}px`:b;_.style.maxWidth=C}else if(y==="Margin"){const C=(E?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");_.style.margin=C}else if(y==="Padding"){const C=(E?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");_.style.padding=C}else if(y==="Background Color")_.style.backgroundColor=E;else if(y==="Color")_.style.color=E;else if(y==="Float")_.style.float=E;else if(y==="Alignment")Hn.includes(e.tagName.toLowerCase())&&(_.style.textAlign=E);else if(y==="Font Family")Dn.includes(e.tagName.toLowerCase())&&(_.style.fontFamily=E);else if(y==="Font Weight")kt.includes(e.tagName.toLowerCase())&&(_.style.fontWeight=E);else if(y==="Font Size"){if(kt.includes(e.tagName.toLowerCase())){const C=(E?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");_.style.fontSize=C}}else if(y==="Opacity")_.style.opacity=E;else if(y==="Text Transform")e.tagName.toLowerCase()!=="img"&&(_.style.textTransform=E);else if(y==="Line Height"){if(It.includes(e.tagName.toLowerCase())){const C=(E?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");_.style.lineHeight=C}}else if(y==="Letter Spacing"){if(It.includes(e.tagName.toLowerCase())){const C=(E?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");_.style.letterSpacing=C}}else if(w==="checkbox"&&!a?.target?.checked)_?.removeAttribute(y),_.value="";else if(y==="elementContent")if(!_?.childNodes?.length)_.innerText=E;else{let b;e?.childNodes?.length&&(b=Array.from(_?.childNodes)?.filter(C=>C.nodeType===3),b?.length&&b.forEach((C,A)=>{A===0?C.nodeValue=E:C.nodeValue=""}))}else y==="align-items"?(_.style.display="flex",_.style.alignItems=E):y==="justify-content"?(_.style.display="flex",_.style.justifyContent=E):y==="text-align"?_.style.textAlign=E:y==="class"?(_.classList.forEach(b=>{b.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||_.classList.remove(b)}),_.classList.add(...E.split(" "))):y&&_?.setAttribute(y,E?.trim());if(v.attributes=v?.attributes?.map(b=>(b?.name===y&&(b?.type==="array"?b.selected=E:b?.type==="boolean"&&!a?.target?.checked?b.value="":b.value=E),b)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const b=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=b,le(b)}else{const b=await dt();f.staticWidgetTree.html=b,le(b)}D.updateActionHistories(),await Pt(e),setTimeout(()=>{if(i&&s){const x=document.getElementById(i);if(x){x.style.display="block";const k=x.previousElementSibling?.querySelector(".material-symbols-outlined");k&&(k.textContent="do_not_disturb_on")}}if(l){const x=document.getElementById("advanced-size");if(x){x.style.display="block";const k=x.previousElementSibling?.querySelector(".material-symbols-outlined");k&&(k.textContent="expand_less")}}const b=document.querySelector(".spacing-tabs");if(b&&u){const x=b.querySelector(`.${u}-tab`);x&&Vn(x,u)}const C=document.querySelector(".margin-control")?.closest(".col-12"),A=document.querySelector(".padding-control")?.closest(".col-12");m?(C?.classList.remove("hidden"),A?.classList.add("hidden")):p&&(C?.classList.add("hidden"),A?.classList.remove("hidden"))},0)}catch(t){console.error("error updating attribute",t.message)}}function ii(a,e){let n=[];return a.wrapper===e&&n.push(a),Array.isArray(a.children)&&a.children.forEach(t=>{n=n.concat(ii(t,e))}),n}async function qr(a){const e=a?.target?.value,n=a?.target?.type,t=a?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),i=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');t==="className"?i?.setAttribute("class",e):n==="checkbox"&&!a?.target?.checked?i?.removeAttribute(t):t==="elementContent"?i.innerText=e:i?.setAttribute(t,e)}async function qn(a){return new Promise(async e=>{let n=new z;n.composition=a,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],n.inpage=100;let t=new z;t.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],t.inpage=100;const s=await he([n,t],""),o=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name,l=s?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=s?.data?.the_element?.the_element_void?.[0]?.data?.the_void,d=s?.data?.the_element?.the_element_default?.[0]?.data?.the_default,u=s?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,c=s?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=s?.data?.the_element?.the_element_s_attribute?.map(h=>{const v=h.id,T=h?.data?.the_attribute,W=T?.the_attribute_name?.[0]?.data?.the_name,E=T?.the_attribute_type?.[0]?.data?.the_type,w=T?.the_attribute_value?.[0]?.data?.the_value;return{id:v,name:W,type:E,value:w}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:a,name:o,tag:l,void:r,default:d,icon:u,division:c,attributes:m})})}async function yt(a){const e=a?.[0],n=e.id,t=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,i=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,s=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,o=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,l=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,r=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,u=e?.data?.the_element?.the_element_s_attribute?.map(g=>{const m=g.id,p=g?.data?.the_attribute,h=p?.the_attribute_name?.[0]?.data?.the_name,v=p?.the_attribute_type?.[0]?.data?.the_type,T=p?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:h,type:v,value:T}});return u?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),Hn.includes(i.toLowerCase())&&u.push({name:"Alignment",type:"array",value:"",division:"inline"}),Dn.includes(i.toLowerCase())&&u.push({name:"Font Family",type:"array",value:"",division:"inline"}),kt.includes(i.toLowerCase())&&u.push({name:"Font Weight",type:"array",value:"",division:"inline"}),Cr.includes(i.toLowerCase())&&u.push({name:"Font Size",type:"string",value:"",division:"inline"}),i.toLowerCase()!=="img"&&u.push({name:"Text Transform",type:"array",value:"",division:"inline"}),It.includes(i.toLowerCase())&&u.push({name:"Line Height",type:"string",value:"",division:"inline"}),It.includes(i.toLowerCase())&&u.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:n,name:t,tag:i,void:s,default:o,icon:l,division:r,attributes:u}}async function si(a){const{id:e,value:n,dataset:{page_id:t}}=a.target;ve(e,n),await jr.updatePageField(e,n,Number(t))}async function Fr(a){[{key:"meta_title",value:a?.[`the_${M.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:a?.[`the_${M.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:a?.[`the_${M.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:a?.[`the_${M.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:a?.[`the_${M.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:a?.[`the_${M.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:a?.[`the_${M.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(n=>{n.value&&ve(n.key,n.value)})}async function ve(a,e){const n=document.getElementById("fspage-properties")||Or();let t="";switch(a){case"width":tt(".fspage { width: [^;]+ !important; }"),t=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":tt(".fspage { font-size: [^;]+; }"),t=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":tt(".fspage { font-family: [^;]+; }"),t=e?`.fspage { font-family: ${e}; }`:"";break;case"type":tt(".fspage { width: 1200px; margin: 0 auto; }"),tt(".fspage { width: 100%; padding: 0; }"),e==="fixed"?t=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?t=".fspage { width: 100%; padding: 0; }":t="";break;case"meta_title":document.title=e;break;case"meta_keywords":mt(a.replace("meta_",""),e);break;case"meta_description":mt(a.replace("meta_",""),e);return}n.textContent+=t}function tt(a){const e=document.getElementById("fspage-properties");if(!e)return;let n=e?.textContent;n=n?n.replace(new RegExp(a,"g"),""):"",e.textContent=n}function Or(){const a=document.createElement("style");return a.id="fspage-properties",document.head.appendChild(a),a}function mt(a,e){let n=document.querySelector(`meta[name="${a}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",a),document.head.appendChild(n)),n.setAttribute("content",e)}async function oi(a){try{document.querySelectorAll(".element-selected")?.forEach(async n=>{const t=n?.getAttribute("data-elementId"),i=n?.tagName?.toLowerCase();let s;const o=n?.classList?.contains("fslayout-row"),l=n?.firstChild?.classList?.contains("fslayout-row");if(o||l)s=await Nn(t);else{const p=Ke.staticElementList?.filter(h=>{const v=h?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return i===v});if(p?.length)s=await yt(p);else if(qe.includes(i)||ht.includes(i)){const h=a?.target?.value,v=a?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(v==="className")n.setAttribute("class",h);else if(v==="elementContent"&&qe.includes(i))n.textContent=h;else if(v==="id")n.id=h;else if(v==="Height"){const T=h?.trim(),W=/^\d+$/.test(T)?`${T}px`:T;n.style.height=W}else if(v==="Width"){const T=h?.trim(),W=/^\d+$/.test(T)?`${T}px`:T;n.style.width=W}else if(v==="Margin"){const W=(h?.trim().split(/\s+/)).map(E=>/^\d+$/.test(E)?`${E}px`:E).join(" ");n.style.margin=W}else if(v==="Padding"){const W=(h?.trim().split(/\s+/)).map(E=>/^\d+$/.test(E)?`${E}px`:E).join(" ");n.style.padding=W}else v==="Background Color"?n.style.backgroundColor=h:v==="Color"&&(n.style.color=h);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const T=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=T,le(T)}else{const T=await dt();f.staticWidgetTree.html=T,le(T)}await ti();return}}const r=a?.target?.value,d=a?.target?.type,u=a?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),c=n,g=c?.getAttribute("isvalidate")==="on";if(g&&c.setAttribute("onchange","applyValidation()"),g&&c?.addEventListener("change",m=>{const p=m.target;Xa(p)}),u==="className")c?.setAttribute("class",r);else if(u==="Height"){const m=r?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;c.style.height=p}else if(u==="Width"){const m=r?.trim(),p=/^\d+$/.test(m)?`${m}px`:m;c.style.width=p}else if(u==="Margin"){const p=(r?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");c.style.margin=p}else if(u==="Padding"){const p=(r?.trim().split(/\s+/)).map(h=>/^\d+$/.test(h)?`${h}px`:h).join(" ");c.style.padding=p}else if(u==="Background Color")c.style.backgroundColor=r;else if(u==="Color")c.style.color=r;else if(d==="checkbox"&&!a?.target?.checked)c?.removeAttribute(u),c.value="";else if(u==="elementContent")if(!c?.childNodes?.length)c.innerText=r;else for(let m of c?.childNodes){const p=m;if(p.nodeValue){if(p.nodeType===3&&p.nodeValue.trim()){p.nodeValue=r;break}}else{const h=document.createTextNode(r);c.insertBefore(h,c.firstChild);break}}else u==="align-items"?(c.style.display="flex",c.style.alignItems=r):u==="justify-content"?(c.style.display="flex",c.style.justifyContent=r):u==="text-align"?c.style.textAlign=r:u==="class"?(c.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||c.classList.remove(m)}),c.classList.add(...r.split(" "))):c?.setAttribute(u,r?.trim());if(s.attributes=s?.attributes?.map(m=>(m?.name===u&&(m?.type==="array"?m.selected=r:m?.type==="boolean"&&!a?.target?.checked?m.value="":m.value=r),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,le(m)}else{const m=await dt();f.staticWidgetTree.html=m,le(m)}D.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function Ve(){const a=document.querySelectorAll("link.vde-css"),n=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),t=[];n?.length&&n.forEach((i,s)=>{const o=i.value,l=document.createElement("link");l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",o),document.head.appendChild(l),t.push({order:s,url:i.value})}),a?.length&&a?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=t,D.updateActionHistories()}async function Re(){const a=document.querySelectorAll("script.vde-js"),n=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),t=[];n?.length&&n.forEach(async(i,s)=>{await new Promise((o,l)=>{const r=i.value,d=document.createElement("script");d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",r),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{o()},d.onerror=u=>{console.error("Failed to load script:",r,u),l(new Error(`Failed to load script: ${r}`))},document.body.appendChild(d),t.push({order:s,url:i.value})})}),a?.length&&a?.forEach(i=>{i.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=t,D.updateActionHistories()}function Fn(){en(f.staticWidgetTree)}async function ri(a){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const t=document.createElement("input");t.type="text",t.placeholder="Enter CSS URL",t.addEventListener("change",async()=>{await Ve()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Ve(),await Xt(a)},e.appendChild(n),e.appendChild(t),e.appendChild(i),e}let ca=0;async function wt(a){const e=++ca,n=a?a?.library?.js:f.widgetTree?.library?.js,t=document.getElementById("sortable-js-list");t.innerHTML="",On(),n?.length&&n?.sort((i,s)=>Number(i?.order)-Number(s?.order));for(const i of n){if(e!==ca){console.log("Skipping outdated call for",i.url);return}await new Promise((s,o)=>{const l=document.createElement("li");l.className="list-item",l.draggable=!0;const r=document.createElement("span");r.className="material-symbols-outlined",r.innerText="drag_handle";const d=document.createElement("input");d.type="text",d.value=i?.url,d.addEventListener("change",async()=>{await Re()});const u=document.createElement("button");u.className="remove-button",u.innerHTML='<span class="material-symbols-outlined">delete</span>',u.onclick=async function(){l.remove(),await Re(),await wt(a)},l.appendChild(r),l.appendChild(d),l.appendChild(u),t?.appendChild(l);const c=document.createElement("script");return c.classList.add("vde-js"),c.setAttribute("type","text/javascript"),c.setAttribute("src",i.url),c.setAttribute("crossorigin","anonymous"),c.onload=()=>{s()},c.onerror=g=>{console.error("Failed to load script:",i.url,g),o(new Error(`Failed to load script: ${i.url}`))},document.body.appendChild(c),l})}}function Bt(){const a=document.querySelectorAll("link.vde-css");a?.length&&a?.forEach(e=>{e.remove()})}function On(){const a=document.querySelectorAll("script.vde-js");a?.length&&a?.forEach(e=>{e.remove()})}async function Xt(a){const e=a?a?.library?.css:f.widgetTree?.library?.css,n=document.getElementById("sortable-list");n.innerHTML="",Bt(),e?.length&&e?.sort((t,i)=>Number(t?.order)-Number(i?.order)),e?.forEach(t=>{const i=document.createElement("li");i.className="list-item",i.draggable=!0;const s=document.createElement("span");s.className="material-symbols-outlined",s.innerText="drag_handle";const o=document.createElement("input");o.type="text",o.value=t.url,o.addEventListener("change",async()=>{await Ve()});const l=document.createElement("button");l.className="remove-button",l.innerHTML='<span class="material-symbols-outlined">delete</span>',l.onclick=async function(){i.remove(),Bt(),await Ve(),await Xt(a)},i.appendChild(s),i.appendChild(o),i.appendChild(l),n?.appendChild(i);const r=document.createElement("link");return r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",t.url),document.head.appendChild(r),i})}function Vr(a){const e=document.getElementById("sortable-list");if(!e)return;let n=null;e.addEventListener("dragstart",t=>{t.target instanceof HTMLElement&&(n=t.target,t.target.classList.add("dragging"))}),e.addEventListener("dragend",async t=>{t.target instanceof HTMLElement&&(t.target.classList.remove("dragging"),Bt(),await Ve(),await Xt(f.widgetTree?.library?.css?.length?f.widgetTree:a))}),e.addEventListener("dragover",t=>{if(t.preventDefault(),!n)return;const i=Rr(e,t.clientY),s=n;i===null?e.appendChild(s):e.insertBefore(s,i)})}function Rr(a,e){return[...a.querySelectorAll(".list-item:not(.dragging)")].reduce((t,i)=>{const s=i.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>t.offset?{offset:o,element:i}:t},{offset:Number.NEGATIVE_INFINITY}).element}async function en(a){const e=document.getElementById("sortable-list");e.innerHTML="";const n=document.getElementById("add-list");if(!e||!n){console.error("Required elements not found");return}if(a?.library?.css?.length)await Xt(a);else{const s=await ri(a);e.appendChild(s)}Vr(a);const t=document.getElementById("sortable-js-list");t.innerHTML="";const i=document.getElementById("add-js-list");if(!t||!i){console.error("Required elements not found");return}if(a?.library?.js?.length)await wt(a);else{const s=await di(a);t.appendChild(s)}Ur(a)}async function li(a){const e=document.getElementById("sortable-list"),n=await ri(a);e.appendChild(n)}async function ci(a){const e=document.getElementById("sortable-js-list"),n=await di(a);e.appendChild(n)}async function di(a){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const t=document.createElement("input");t.type="text",t.placeholder="Enter JS URL",t.addEventListener("change",async()=>{await Re()});const i=document.createElement("button");return i.className="remove-button",i.innerHTML='<span class="material-symbols-outlined">delete</span>',i.onclick=async function(){e.remove(),await Re(),await wt(a)},e.appendChild(n),e.appendChild(t),e.appendChild(i),e}function Ur(a){const e=document.getElementById("sortable-js-list");if(!e)return;let n=null;e.addEventListener("dragstart",t=>{t.target instanceof HTMLElement&&(n=t.target,t.target.classList.add("dragging"))}),e.addEventListener("dragend",async t=>{t.target instanceof HTMLElement&&(t.target.classList.remove("dragging"),On(),await Re(),await wt(f.widgetTree?.library?.js?.length?f.widgetTree:a))}),e.addEventListener("dragover",t=>{if(t.preventDefault(),!n)return;const i=zr(e,t.clientY),s=n;i===null?e.appendChild(s):e.insertBefore(s,i)})}function zr(a,e){return[...a.querySelectorAll(".list-item:not(.dragging)")].reduce((t,i)=>{const s=i.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>t.offset?{offset:o,element:i}:t},{offset:Number.NEGATIVE_INFINITY}).element}function Jr(a){const e=a.toLowerCase();return me.has(e)?ze.STYLE:Lr.has(e)?ze.BOOLEAN:Wr.has(e)?ze.FORM:Ar.has(e)?ze.SPECIAL:ze.FORM}function Gr(a,e){if(!a&&e==="Background Color")return"#FFFFFF";if(!a)return"#000000";if(a.startsWith("#"))return a;const n=a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(n){const[t,i,s,o]=n;return"#"+[i,s,o].map(l=>{const r=parseInt(l).toString(16);return r.length===1?"0"+r:r}).join("")}return"#000000"}function ui(a,e){if(!e)return console.warn("Attribute name is undefined"),"";if(a.classList.contains("fslayout-row")||a.firstChild instanceof HTMLElement&&a.firstChild.classList?.contains("fslayout-row"))return mi(a,e);const n=e.toLowerCase();if(me.has(n)||me.has(e)){const t=me.get(n)||me.get(e);if(!t)return"";const i=a.style[t.property]||a.getAttribute(`data-${n}`);return n==="color"||n==="background-color"||n==="bg-color"||e==="Color"||e==="Background Color"?Gr(i,e):i||""}if(n==="elementcontent"){let t,i;return a?.childNodes?.length&&(t=Array.from(a?.childNodes)?.filter(s=>s?.nodeType===3),t?.length&&(i=t?.map(s=>s?.nodeValue?.trim()).join(""))),i?i?.trim():a?.textContent||""}return n==="classname"?a.classList.value?.replace(/wb-initial-empty/g,"")||"":a.getAttribute(n)||""}function mi(a,e){const n=e.toLowerCase();return n==="class"||n==="classname"?Array.from(a.classList).filter(t=>!t.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):n==="align-items"?a.style.alignItems||"":n==="text-align"?a.style.textAlign||"":a.getAttribute(n)||""}function Qr(a,e,n){const t=e.toLowerCase();if(a.id){const i=a.getAttribute("data-attributes");if(i){const s=JSON.parse(i),o=s.find(l=>l.name===e);o&&((o.type==="array"||it(e))&&(o.selected=n),o.value=n),a.setAttribute("data-attributes",JSON.stringify(s))}}if(me.has(t)||me.has(e)){const i=me.get(t)||me.get(e);if(!i)return;a.setAttribute(`data-${t}`,n),i.needsUnit&&n&&/^\d+$/.test(n)?a.style[i.property]=`${n}px`:a.style[i.property]=n;return}n?a.setAttribute(t,n):a.removeAttribute(t)}function Vn(a,e){const n=a.closest(".spacing-tabs");if(!n)return;n.querySelectorAll(".spacing-tab-btn").forEach(s=>s.classList.remove("active")),a.classList.add("active");const t=n.nextElementSibling,i=t?.nextElementSibling;e==="margin"?(t?.classList.remove("hidden"),i?.classList.add("hidden")):(t?.classList.add("hidden"),i?.classList.remove("hidden"))}window.toggleSpacingBox=Vn;let ge=[],We=Tn;async function Rn(a){const e=document.getElementById("selected_attr_list"),n=document.querySelector(".row.attribute_single");ge=[],We=Tn,e&&(e.innerHTML=""),n?.remove(),await we(a),a==="update-element-dialog"&&document.getElementById(a)?.remove()}async function ul(a,e){if(a.preventDefault(),!(await Nt.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const t=new FormData(a.target),i=Object.fromEntries(t),s=a.target.querySelector("[name='name']"),o=a.target.querySelector("[name='tag']");let l=!0;if(i?.name?.trim()?s.style.border="":(l=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),i?.tag?.trim()?o.style.border="":(l=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),!l)return;const d=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');d.textContent="Creating...";const u=a?.target;for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!0;const c=await gi(t,null);for(let m=0,p=u?.length;m<p;++m)u[m].disabled=!1;await we(e);const g=await Zt();if(c){const m=document.getElementById("created-elements");m?!g||g.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=g||"":console.error("Widget list container not found in the DOM.")}return c}async function gi(a,e){const n=Object.fromEntries(a);delete n.attributes;const i=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let s=[];if(i.forEach(o=>{const l=o?.textContent?.split(" "),r=l[0],d=l[1].substr(1,l[1].length-7);let u="";switch(r){case"method":u="get,post,dialog";break;case"target":u="_blank,_self,_parent,_top";break;case"type":n?.tag==="button"?u="button,submit,reset":n?.tag==="input"&&(u="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":u="soft,hard";break}s.push({name:r,type:d,value:u})}),s=[...cn,...s],e){const o=await qn(e),l=o?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,r=new Set(cn.map(m=>m.name)),d=o?.attributes?.filter(m=>m?.division!=="inline"&&!r.has(m?.name)&&m?.name!=="elementContent"),u=new Set(ge.map(m=>m.name)),c=d?.filter(m=>!u.has(m?.name));if(c?.length){const m=await Promise.all(c?.map(async p=>await Se(p?.id)));console.log("deletedResponse ->",m)}let g=[{the_element_name:{name:n?.name}},{the_element_tag:{tag:n?.tag}},{the_element_void:{void:n?.void}},{the_element_icon:{icon:n?.icon.toString()}},{the_element_default:{default:n?.default}},{the_element_division:{division:n?.division}},{the_element_s_attribute:ge}];return await Promise.all(g.map(async m=>await Promise.all(Object.entries(m).map(async([p,h])=>{const v=Object.keys(h)[0],T=h[v]||"";if(p==="the_element_s_attribute"){const W=await Q(e);if(h?.length){const E=h.filter(w=>!w?.id);await Promise.all(E.map(async w=>{const y=await O("attribute",999,w);return await V(W,y,"s_attribute")}))}}else await Ze(e,p,v,T,999);if(p==="the_element_default"&&v==="default"&&l){const E=(await I())?.userId;await Ze(l,"the_attribute_value","value",T,E)}return"x"})))),await N.SyncDataOnline(),L.successfullToast("The element updated successfully"),e}else{const o=s;n?.void&&o.unshift({name:"elementContent",type:"string",value:""});const l=await O("element",999,n);return await Promise.all(o.map(async r=>{const d=await O("attribute",999,r);return await V(l,d,"s_attribute")})),await N.SyncDataOnline(),L.successfullToast("The element created successfully"),l}}function Zr(){const a=document.querySelectorAll(".attribute_single");a?.length&&a.forEach(i=>{i?.remove()});let e=String(Date.now());const n=Xr(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",n)}function pi(a){document.getElementById(a)?.remove()}async function Yr(){const a=document.getElementById("select_the_attribute");let e=We.filter(t=>t?.name==a?.value)[0];We=We.filter(t=>t?.name!=a?.value),ge.push(e);const n=a.closest(".attribute_single");n?.id&&pi(n.id),Un([])}function Kr(a){let e=ge.filter(n=>n.name==a)[0];ge=ge.filter(n=>n.name!=a),We.push(e),ts(We,"name","string"),Un([])}function Un(a){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(ge.length>0)ge.forEach(t=>{t.name!=="id"&&t.name!=="className"&&(e+=`<li>${t.name} (${t.type})`,e+=`<a onclick="removeSelectedAttribute('${t.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const t=a?.filter(s=>s?.division!=="inline"&&s.name!=="id"&&s.name!=="className"&&s.name!=="elementContent");ge=t;const i=new Set(ge.map(s=>s.name));We=We.filter(s=>!i?.has(s?.name)),t.map(function(s){e+=`<li>${s.name} (${s.type}) `,e+=`<a onclick="removeSelectedAttribute('${s.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const n=document.getElementById("element_attributes_entry");n&&(n.innerHTML=e)}function Xr(a){let e='<select id="select_the_attribute" class="form-select">';return We.forEach(n=>{e+=`<option value="${n?.name}">${n?.name}</option>`}),e+="</select>",`
      <div id="${a}_attribute" class="row attribute_single" >
          <div class="col-md-6">
              ${e}
          </div>
         <div class="col-md-4">
            <!-- <a class="add_attr attr_action" onclick="addAttribute(${a})"> -->
            <a class="add_attr attr_action" onclick="addAttribute()">
              <span class="material-symbols-outlined">
                check
              </span>
            </a>
            <a class="cancel_add_attr attr_action" onclick="cancelAttributeRow('${a}_attribute')">
              <span class="material-symbols-outlined">
                close
              </span>
            </a>
         </div>
      </div>
  `}async function el(a,e){if(a.preventDefault(),!(await Nt.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const t=new FormData(a.target),i=Object.fromEntries(t);console.log(i,"update formValues");const s=await gi(t,e);await Rn("update-element-dialog");const o=await Zt();if(s){const l=document.getElementById("created-elements");l?!o||o.trim()===""?l.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:l.innerHTML=o||"":console.error("Widget list container not found in the DOM.")}return s}class tl{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const n=await qn(e);this.singleElement=n,this.createElemenModaltHTML=this.getHtml(),n&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await Un(this.singleElement.attributes))}getHtml(){return window.updateNewElement=el,window.closeElementModal=Rn,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
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
      </dialog>`}}class nl{createElemenModaltHTML;constructor(){window._dragService=to,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=Zr,window.cancelAttributeRow=pi,window.addAttribute=Yr,window.removeSelectedAttribute=Kr,window.closeElementModal=Rn,`
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
    `}}async function de(a){document.getElementById(a).showModal()}async function we(a){const e=document.getElementById(a);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function hi(a,e){a?.stopPropagation();const n=document.getElementById(`menu-${e}`),t=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),n&&!t&&n.classList.add("show")}async function ml(a){new nl,await de(a)}async function gl(a,e,n){a.stopPropagation(),console.log("modalId",e),hi(a,Number(n)),new tl(n)}async function pl(a,e){hi(a,e),confirm("Are you sure you want to delete the element?")&&(await Se(e),L.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const t=await Zt(),i=document.getElementById("created-elements");i?!t||t.trim()===""?i.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:i.innerHTML=t||"":console.error("Elements list container not found in the DOM.")}export{Ga as A,nl as B,An as C,Fr as D,Ee as E,de as F,Ue as P,f as S,ar as T,to as _,$n as a,X as b,ot as c,Xe as d,ir as e,un as f,Oa as g,Yt as h,D as i,Ln as j,On as k,Oe as l,dl as m,je as n,ml as o,hi as p,gl as q,Bt as r,Ts as s,L as t,pl as u,Pe as v,q as w,we as x,ul as y,rt as z};
