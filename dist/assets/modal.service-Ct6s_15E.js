import{M as wn,k as z,m as he,n as ha,E as Un,p as ci,G as De,J as Q,u as fa,b as di,a as ui,D as mi,e as N,r as te,j as be,o as zn,l as Jn,z as Y,X as H,W as fe,I as ye,O as Se,g as ya,q as gt,s as gi,c as wa,y as Pe,f as re,K as Te,P as Me,v as Ie,x as Ne,d as G,A as on,B as pi,C as Gn,F as hi,t as va,i as fi}from"./mftsccs-browser-DU86KKx4.js";import{E as ae,b as Bt,o as $t,j as yi,a as Ht,c as ba,l as _a,d as Ea,e as Ta,f as Be,k as jt,h as Sa,g as La}from"./codemirror-B3vgQINq.js";import{a as Ca,u as wi,g as I,e as ie,b as V,c as O,C as M,L as oe,f as Wa,d as tt,h as Aa,A as Dt}from"./index-C4Kd4duQ.js";import{J as Nt,q as xa}from"./vendor-Cs_0E_Xj.js";import{z as Ma}from"./eslint4b-BLWGvIOa.js";import{l as pt,p as vn,r as bn,a as ka,b as Ia}from"./prettier-ClL2wQep.js";import{C as Pa}from"./ckeditor-Cw9bcqxY.js";const Ba=Object.freeze(Object.defineProperty({__proto__:null,get addCSSLibrary(){return ra},get addJSLibrary(){return la},get applyPageProperties(){return qr},get applyPageProperty(){return ve},get filterChildrenByWrapper(){return ia},get getAttributeType(){return zr},get getAttributeValue(){return da},get getElementAttribute(){return Hr},get getElementAttributeDetails(){return Nn},get getElementData(){return ta},get getLayoutAttributeValue(){return ua},get getPropertiesByIdFromStorage(){return yt},get handleDirectContentEdit(){return jr},get handlePageProperties(){return aa},get initializeApp(){return Xt},get initializeLibrary(){return qn},get listJSLibraries(){return wt},get removeCSSLibrariesFromHead(){return Pt},get removeJSLibrariesFromHead(){return Fn},get setAttributeValue(){return Gr},get toggleSpacingBox(){return On},get updateAttribute(){return Nr},get updateCSSLibrary(){return Ve},get updateElementAttribute(){return Kt},get updateElementAttributeViaEditor(){return Dr},get updateJSLibrary(){return Re},get updateMetaTag(){return mt},get updateMultipleElementAttribute(){return sa},get updateWidgetTypeValue(){return na}},Symbol.toStringTag,{value:"Module"}));async function cl(){return"WICO"}async function Ae(){const i=await Ca();await wn(i?.id),localStorage.removeItem("profile"),localStorage.removeItem("tempwidget"),await wi("/"),setTimeout(()=>{document.body.style.overflow=""},1e3)}const ht=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],_n=[{name:"accept",type:"string"},{name:"action",type:"string"},{name:"alt",type:"string"},{name:"autocomplete",type:"boolean",value:"on"},{name:"checked",type:"boolean"},{name:"cols",type:"string"},{name:"disabled",type:"boolean"},{name:"download",type:"string"},{name:"draggable",type:"boolean"},{name:"for",type:"string"},{name:"hidden",type:"boolean"},{name:"href",type:"string"},{name:"label",type:"string"},{name:"loading",type:"array",value:"eager,lazy",default:"eager"},{name:"max",type:"string"},{name:"maxlength",type:"string"},{name:"media",type:"string"},{name:"method",type:"array",value:"get,post,dialog"},{name:"min",type:"string"},{name:"minlength",type:"string"},{name:"multiple",type:"boolean"},{name:"muted",type:"boolean"},{name:"name",type:"string"},{name:"pattern",type:"string"},{name:"placeholder",type:"string"},{name:"readonly",type:"boolean"},{name:"rel",type:"string"},{name:"required",type:"boolean"},{name:"rows",type:"string"},{name:"selected",type:"boolean"},{name:"size",type:"string"},{name:"src",type:"string",value:""},{name:"start",type:"string"},{name:"style",type:"string"},{name:"title",type:"string"},{name:"target",type:"array",value:"_blank,_self,_parent,_top"},{name:"type",type:"array"},{name:"value",type:"string"},{name:"wrap",type:"array",value:"soft, hard"},{name:"width",type:"string",value:""}],rn=[{name:"className",type:"string",value:""},{name:"id",type:"string",value:""}],$a=[{name:"className",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Background Color",type:"color",value:"#FFFFFF"},{name:"Color",type:"color",value:"#000000"},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""}];let Qn=[],Zn=[];async function Ha(i){let e="";for(const n in i)if(Object.prototype.hasOwnProperty.call(i,n)){const t=i[n];e+=` ${n}="${t}" `}return e}async function ja(i,e){const n=new z;n.composition=i,n.fullLinkers=["the_widget_html","the_widget_css","the_widget_js"];const t=await he([n],e),a=t?.data?.the_widget?.the_widget_html?.[0]?.id,s=t?.data?.the_widget?.the_widget_css?.[0]?.data.the_widgetCSS,o=t?.data?.the_widget?.the_widget_js?.[0]?.data.the_widgetJS;if(!a)return{html:"",css:"",js:""};const l=await ha(a,["contain_s"]);Qn=await Un(l.externalConnections),Zn=await Un(l.internalConnections);let r=await vi(a,Qn,Zn);const c=document.createElement("div");return c.innerHTML=r,{html:(c?.querySelector(".widget-wrapper")).innerHTML,css:s||"",js:o||""}}async function vi(i,e,n){try{let t="",s=Na(e)[i];if(s!=null){let o=qa(s);const r=(await Gi())?.map(g=>{const m=g?.id,h=g?.data?.the_element?.the_element_name?.[0]?.data?.the_name,p=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,v=g?.data?.the_element?.the_element_void?.[0]?.data?.the_void,C=g?.data?.the_element?.the_element_s_attribute?.map(T=>{const w=T?.data?.the_attribute,y=w?.the_attribute_name?.[0]?.data?.the_name,E=w?.the_attribute_type?.[0]?.data?.the_type,S=w?.the_attribute_value?.[0]?.data?.the_value;return{name:y,type:E,value:S}});return{id:m,name:h,tag:p,void:v,attributes:C}}),c=[..._n,...rn],u=(await I())?.userId;for(let g=0;g<o.length;g++){const m=o[g];if(m.ofTheConceptId==i){const h=await Da(m.toTheConceptId,n),p=Object.keys(h.data)[0],v=h.data[p],_=ht.includes(p),C=await Ha(v?.attributes||[]),T=r.find(y=>y.tag===p.toLowerCase().trim()),w=v?.attributes;for(const y in w){const E=c.find(L=>y===L?.name?.toLowerCase().trim()),S=w[y],b=E?.type;T.attributes=T?.attributes?.map(L=>(L?.name==="className"&&y==="class"?L.value=S:L?.name==="elementContent"?L.value=v?.innerText:y===L?.name&&(b==="array"?L.selected=S:b==="boolean"?L.value="":L.value=S),L))}if(p!="text"){const y=await ci(h.id,u);y?.length&&await wn(y?.[0]?.id);const E={[`wdgt${h.id}`]:T},S=await De(E,null,null,null,u);console.log("elementAttributeComp ->",S),t+=`
            <div id="wdgt${h.id}" class="widget_container" onclick="widgetSelected(event)" draggable="true"
  ondragover="_dragService.dragOverWidgetElement(event)" ondrop="_dragService.dropWidgetElement(event)"
  ondragstart="_dragService.dragStartWidgetElement(event)" data-elementid="${T?.id}">
            <${p} data-cc-id="${h.id}" `+C+`${_?"/></div>":">"}`,t+=await vi(m.toTheConceptId,e,n)}(v.contains=="false"||p=="text")&&(t+=" "+v.innerText+" "),!_&&p!="text"&&(t+=`</${p}></div>`)}}}return t}catch(t){console.error("error converting html",t)}}async function Da(i,e){var n=[],t={},a=e;n=a;for(var s=[],o=0;o<n.length;o++)s.includes(n[o].ofTheConceptId)||s.push(n[o].ofTheConceptId);var l=await Q(i);if(l.id==0&&i!=null&&i!=null){var r=await Q(i);l=r}var c=await fa(i,n,s),d=l?.type?.characterValue??"";t[d]=c;var u={};return u.data=t,u.id=i,u}function Na(i){return i.reduce((e,n)=>{const{ofTheConceptId:t}=n;return e[t]||(e[t]=[]),e[t].push(n),e},{})}function qa(i){const e=new Map;i.forEach(s=>{e.set(s.id,s)});const n=[],t=new Set,a=s=>{if(!t.has(s.id)){t.add(s.id),n.push(s);for(const o of i)o.orderId==s.id&&a(o)}};return i.forEach(s=>{s.orderId==1e3&&a(s)}),n}async function Fa(i,e){var n=[];try{var t=new Headers;t.append("Content-Type","application/json"),t.append("Authorization",`Bearer ${e}`),t.append("Randomizer",di.BASE_RANDOMIZER.toString());const a=await fetch(ie.baseNodeUrl+"/api/v1/local-concepts-translate",{method:"POST",headers:t,body:JSON.stringify({id:i})});return a.ok?await a.json():(console.log("recursive search error ",a.status),n)}catch(a){console.log(a)}}async function bi(i,e,n=1e3,t){const a=i.userId,r=await ui("contain_s",999,999,a);return await mi(i.id,e.id,r.id,n)}const Oa="the_widget";async function Va(i,e,n){return await Ra(i,e,n)}async function Ra(i,e,n){const s=new DOMParser().parseFromString(i,"text/html").body,o=await De({[Oa]:{}});e&&await Ua(e,o),n&&await za(n,o);const l=await De({widgetHTML:{}});await V(o,l,"html");const r=await _i(s.children[0],l);return await bi(l,r),await N.SyncDataOnline(),o}async function Ua(i,e){const t=(await I())?.userId,s=await te("the_widgetCSS",i,!0,t,4,999);await V(e,s,"css")}async function za(i,e){const t=(await I())?.userId,s=await te("the_widgetJS",i,!0,t,4,999);await V(e,s,"js")}async function _i(i,e){console.log("parentConcept ->",e);const n={};if(n.tagName=i?.tagName?.toLowerCase(),i?.attributes?.length>0){n.attributes={};for(let s of i.attributes)n.attributes[s.name]=s.value}i?.textContent?.trim()&&(n.text=i.textContent.trim());let t={[n.tagName?n.tagName:"text"]:{contains:i?.children?.length?"true":"false",attributes:n.attributes||"",innerText:i?.children?.length?"":n.text||""}};const a=await De(t);if(i?.childNodes?.length>0){n.children=[];let s=[],o=-1,l,r;for(let d of i.childNodes)if(!(d.nodeType===Node.TEXT_NODE&&d.textContent?.trim()==="")&&!(i.children.length===0&&d.nodeType===Node.TEXT_NODE)){if(d.nodeType===Node.TEXT_NODE){let u={text:{contains:!1,attributes:"",innerText:d.textContent?.trim()}};const g=await De(u);s.push({parentConcept:a,childConcept:g,orderId:r})}else d.nodeType===Node.ELEMENT_NODE&&(l=await _i(d,a),s.push({parentConcept:a,childConcept:l,orderId:r}));o>=0&&(s[o]={...s[o],orderId:l?.id}),o++}let c=1e3;for(let d=0;d<s.length;d++){const u=s[d];c=(await bi(u.parentConcept,u.childConcept,c)).id}}return a}async function En(){}class Ja{convertModalHTML;constructor(){this.init()}init(){this.convertModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.convertModalHTML)}getHtml(){return`
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
    `}}const Ga="widget-conceptualizer",Qa="0.0.0",Za="module",Ka={dev:"vite --force",build:"tsc && vite build",preview:"vite preview"},Ya={"@types/codemirror":"^5.60.15",codemirror:"^6.0.1",typescript:"^5.2.2",vite:"^5.3.1","vite-plugin-commonjs":"^0.10.4","vite-plugin-compression":"^0.5.1"},Xa={"@ckeditor/ckeditor5-build-classic":"^44.0.0","@codemirror/autocomplete":"^6.18.0","@codemirror/lang-css":"^6.3.1","@codemirror/lang-html":"^6.4.9","@codemirror/lang-javascript":"^6.2.3","@codemirror/lint":"^6.8.4","@codemirror/state":"^6.5.2","@codemirror/theme-one-dark":"^6.1.2","@codemirror/view":"^6.36.3","@react-oauth/google":"^0.12.1","eslint4b-prebuilt":"^6.7.2","highlight.js":"^11.11.1",jszip:"^3.10.1",marked:"^15.0.6","marked-highlight":"^2.2.1","mftsccs-browser":"^2.1.141-beta",prettier:"^3.3.3","shepherd.js":"^14.5.0"},Kn={name:Ga,private:!0,version:Qa,type:Za,scripts:Ka,devDependencies:Ya,dependencies:Xa};function es(i,e,n,t){switch(n){case"int":i=i.sort(function(a,s){return parseInt(a[e])>parseInt(s[e])?1:parseInt(a[e])<parseInt(s[e])?-1:0});break;default:i=i.sort(function(a,s){return a[e].toLowerCase()>s[e].toLowerCase()?1:a[e].toLowerCase()<s[e].toLowerCase()?-1:0})}}function ln(i){let e={};for(let n=0;n<i.length;n++){const t=i[n];t?.type&&t?.type!=="submit"&&(e[t.name]=t?.value)}return e}function ts(i){const e=Kn.dependencies||{},n=Kn.devDependencies||{};return e[i]||n[i]||null}async function Ke(i,e,n,t,a){await be(i,e);const s=await te(n,t,!1,a,4,999);let o=await ui(e,999,999,a);return await mi(i,s?.id,o.id,1e3,o.characterValue,a),"Delete and update completed"}class Ue{async generateSlug(e){const n=await I();let t=new z;t.composition=n?.entityId,t.fullLinkers=["the_entity_s_page"],t.inpage=100;let a=new z;a.fullLinkers=["the_page_slug"],a.inpage=100;const s=[t,a];let o=e.toLowerCase().replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");return await zn(s,"",Jn).subscribe(l=>{const r=l?.the_entity?.the_entity_s_page?.map(u=>u?.the_page?.the_page_slug?.[0]?.the_page_slug)||[];let c=o,d=o.match(/^(.*?)(?:-(\d+))?$/);if(d){c=d[1];let g=(d[2]?parseInt(d[2],10):0)+1;for(;r.includes(o);)o=`${c}-${g++}`}}),o}async checkSlugAvailablity(e){const n=await I();let t=new z;t.composition=n?.entityId,t.fullLinkers=["the_entity_s_page"],t.inpage=100;let a=new z;a.fullLinkers=["the_page_slug"],a.inpage=100;const s=[t,a];let o=!0;return await zn(s,"",Jn).subscribe(l=>{(l?.the_entity?.the_entity_s_page?.map(c=>c?.the_page?.the_page_slug?.[0]?.the_page_slug)||[]).includes(e)&&(o=!1)}),o}async savePage(e,n,t){const a=await O(M.PAGE_COMP_NAME,n,e),s=await Y(t);return await V(s,a,oe.ENTITY_PAGE_LINKER),a}async renamePage(e,n,t){return await Ke(Number(n),"the_page_title","title",e?.title,t),await Ke(Number(n),"the_page_slug","slug",e?.slug,t),"renamed"}async getAllPages(e){const n=await I(),t=n?.token;let a=new z;e?a.composition=e:a.composition=n.entityId,a.fullLinkers=[`the_entity_${oe.ENTITY_PAGE_LINKER}`],a.inpage=100;let s=new z;return s.fullLinkers=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_body`],s.inpage=100,(await he([a,s],t))?.data?.the_entity?.[`the_entity_${oe.ENTITY_PAGE_LINKER}`]}async _getPageById(e){const n=await I();if(!n?.token)return null;const t=n?.token;let a=new z;a.composition=e,a.fullLinkers=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_meta_title`,`the_${M.PAGE_COMP_NAME}_meta_description`,`the_${M.PAGE_COMP_NAME}_meta_keywords`,`the_${M.PAGE_COMP_NAME}_width`,`the_${M.PAGE_COMP_NAME}_type`,`the_${M.PAGE_COMP_NAME}_font_family`,`the_${M.PAGE_COMP_NAME}_font_size`,`the_${M.PAGE_COMP_NAME}_body`],a.inpage=100;let s=new z;return s.fullLinkers=[`the_${M.WIDGET_COMP_NAME}_clean`],s.inpage=100,await he([a,s],t)}async getPageById(e){return new Promise(async n=>{const t=await I();if(!t?.token)return null;const a=t?.token;let s=new H;s.conceptIds=[e],s.outputFormat=fe,s.selectors=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_meta_title`,`the_${M.PAGE_COMP_NAME}_meta_description`,`the_${M.PAGE_COMP_NAME}_meta_keywords`,`the_${M.PAGE_COMP_NAME}_width`,`the_${M.PAGE_COMP_NAME}_type`,`the_${M.PAGE_COMP_NAME}_font_family`,`the_${M.PAGE_COMP_NAME}_font_size`,`the_${M.PAGE_COMP_NAME}_body`,`the_${M.WIDGET_COMP_NAME}_clean`],s.inpage=100,ye(s,a).subscribe(async o=>{if(o.length)n(o?.[0]);else if(!Array.isArray(o)&&o?.data==null){const l="There is no data.";W.infoMessageToast(l,4),n({error:!0,message:l})}}).catch(o=>{const l=o?.message;W.errorToast(`${l}`,4),n({error:!0,message:l})})})}async updatePageField(e,n,t){const a=await I(),s=`the_${M.PAGE_COMP_NAME}_${e}`;await be(t,s);const o=await Q(t),l=await te(`${e}`,`${n}`,!1,a.userId,4,999);await V(o,l,e),await N.SyncDataOnline()}async deletePage(e){await Se(e)}}class Ei{_pagesService;constructor(){this._pagesService=new Ue}async getPagesListHTML(){window.pageHandler=ko;try{let e=await this._pagesService.getAllPages();return e?.length?e?.map(t=>{let a=t?.data?.[`the_${M.PAGE_COMP_NAME}`],s=a?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title,o=a?.[`the_${M.PAGE_COMP_NAME}_slug`]?.[0].data?.the_slug;return`
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
    `}}const ns=(()=>{const i=()=>{document.querySelectorAll("#navBarContainer > span").forEach(o=>{o.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(o=>{o.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(o=>{o.remove()})};return{toggle:a=>{const s=a.target,o=s?.dataset?.id;if(s.classList.contains("activeNavigationIcon")){i();return}if(o){document.querySelectorAll("#navBarContainer > span").forEach(u=>{u.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(u=>{u.classList.remove("navActive")});const c=document.getElementById(o);document.querySelector(`[data-id='${o}']`)?.classList.add("activeNavigationIcon"),c?.classList.add("navActive"),o=="fs-all-pages-list"&&new Mn().initPagesSidebar()}},collapseNavbar:a=>{const s=a.target;document.querySelectorAll("#navBarContainer > span").forEach(r=>{r.classList.remove("activeNavigationIcon")}),document.getElementById(s.id)?.classList.add("activeNavigationIcon"),document.querySelectorAll("#widgets > div").forEach(r=>{r.classList.remove("navActive")})},checkForActiveNavigation:()=>{const a=document.querySelector(".activeNavigationIcon");if(a){const s=a.dataset?.id||"";document.getElementById(s)?.classList.remove("navActive")}},resetNavigationBar:i}})();function bt(i){return new Promise(e=>{const n=document.createElement("div");n.className="custom-confirm-modal",n.innerHTML=`
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content h-50">
                    <div class="modal-body">
                        <p>${i}</p>
                    </div>
                    <div class="modal-footer p-2 justify-content-between">
                        <button type="button" id="confirm-yes" class="btn btn-primary mx-3">Yes</button>
                        <button type="button" id="confirm-no" class="btn btn-secondary mx-3" data-bs-dismiss="modal">No</button>
                    </div>
                    </div>
                </div>
        `,n.querySelector("#confirm-yes")?.addEventListener("click",()=>{document.body.removeChild(n),e(!0)}),n.querySelector("#confirm-no")?.addEventListener("click",()=>{document.body.removeChild(n),e(!1)}),document.body.appendChild(n)})}class R{static staticElement;static previousSelectedStaticElement}function _t(){const i=document.getElementById("select-box");i.style.display="none"}function Yn(){const i=document.getElementById("select-box");Qe(),i.style.transition="none",Et()}function Et(){const i=R?.staticElement;if(i){const e=i.getBoundingClientRect(),n=e.left,t=e.top,a=document.getElementById("select-box");a.style.display="block",a.style.width=i.offsetWidth+"px",a.style.height=i.offsetHeight+"px",a.style.top=`calc(${t}px)`,a.style.left=`calc(${n}px)`}}function pe(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=t=>{t.removeEventListener("click",Ge),t.removeEventListener("mouseenter",st),t.removeEventListener("mouseleave",Qe)};e.forEach(t=>{(!t.closest(".added-widget-container")||t.classList.contains("added-widget-container"))&&n(t)}),e.forEach(t=>{t.classList.contains("fslayout-row")?(t.addEventListener("click",function(a){a.target===t&&(a.preventDefault(),a.stopPropagation(),Ge(a))}),t.addEventListener("mouseenter",st),t.addEventListener("mouseleave",Qe)):t.classList.contains("fslayout-col")?t.addEventListener("click",function(a){if(a.target===t){a.preventDefault(),a.stopPropagation();const s=t.closest(".fslayout-row");if(s){const o=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window});Object.defineProperty(o,"target",{value:s}),Ge(o)}}}):t.closest(".fslayout-col")?(t.addEventListener("click",function(a){a.preventDefault(),a.stopPropagation(),Ge(a)}),t.addEventListener("mouseenter",st),t.addEventListener("mouseleave",Qe)):(t.closest(".edited-widget-container")||!t.closest(".added-widget-container")||t.classList.contains("added-widget-container"))&&(t.addEventListener("click",function(a){a.preventDefault(),a.stopPropagation(),Ge(a)}),t.addEventListener("mouseenter",st),t.addEventListener("mouseleave",Qe))})}function is(){const e=document.getElementById("builder-workarea").querySelectorAll("*"),n=t=>{t.removeEventListener("click",Ge),t.removeEventListener("mouseenter",st),t.removeEventListener("mouseleave",Qe)};e.forEach(t=>{(!t.closest(".added-widget-container")||t.classList.contains("added-widget-container"))&&n(t)})}class Ce{static instance;static events=new Map;constructor(){}static getInstance(){return Ce.instance||(Ce.instance=new Ce),Ce.instance}static subscribe(e,n){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(n)}static publish(e,n){this.events.has(e)&&this.events.get(e).forEach(t=>t(n))}static unsubscribe(e,n){if(this.events.has(e)){const t=this.events.get(e),a=t.indexOf(n);a>-1&&t.splice(a,1)}}}class as extends ya{widgetTreeHTML="";hoveredElement=null;treeRoot=null;toggleAllBtn=null;isAllExpanded=!1;iconDownArrow='<span class="material-symbols-outlined">keyboard_arrow_down</span>';iconRightArrow='<span class="material-symbols-outlined">chevron_right</span>';treeItems;eventBus;constructor(){super(),this.treeItems=new Map,this.eventBus=Ce.getInstance(),this.treeRoot=document.getElementById("tree-root")}before_render(){this.hoveredElement=null,this.isAllExpanded=!1,this.toggleAllBtn=document.getElementById("toggle-all"),this.render()}after_render(){const e=document.querySelector(".content-target"),n=this.buildTree(e);this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeRoot&&this.treeRoot.appendChild(n),this.toggleAllBtn&&this.toggleAllBtn.addEventListener("click",()=>this.toggleAll()),Ce.subscribe("page:elementClick",t=>{this.handlePageElementClick(t)}),Ce.subscribe("page:domUpdated",()=>{this.rebuildNavigator()})}rebuildNavigator(){this.treeRoot&&(this.treeRoot.innerHTML=""),this.treeItems.clear(),this.buildNavigator()}buildNavigator(){const e=document.getElementById("builder-workarea"),n=this.buildTree(e);n&&this.treeRoot&&this.treeRoot.appendChild(n)}getHtml(){return""}handlePageElementClick(e){let n=e;for(;n&&!this.treeItems.has(n);)n=n.parentElement;if(n){const t=this.treeItems.get(n);if(t){document.querySelectorAll(".tree-item").forEach(s=>{s.classList.remove("active")}),t.classList.add("active"),t.scrollIntoView({behavior:"smooth",block:"center"});let a=t.closest(".tree-node")?.parentElement;for(;a;){if(a.classList.contains("children")&&a.classList.contains("hidden")){a.classList.remove("hidden");const s=a.previousElementSibling?.querySelector(".toggle-btn");s&&(s.innerHTML="▼")}a=a.parentElement}}}}buildTree(e){if(e?.classList?.contains("dom-navigator"))return null;const n=document.createElement("div");n.className="tree-node";const t=document.createElement("div");t.className="tree-item",this.treeItems.set(e,t);const a=e.tagName.toLowerCase(),s=e.id?`#${e.id}`:"",o=Array.from(e.classList).map(r=>`.${r}`).join("");if(e.children.length>0){const r=document.createElement("button");r.className="toggle-btn",r.innerHTML='<span class="material-symbols-outlined">chevron_right</span>',r.onclick=c=>{c.preventDefault(),c.stopPropagation();const d=n.querySelector(".children"),u=d.classList.contains("hidden");d.classList.toggle("hidden"),r.innerHTML=u?'<span class="material-symbols-outlined">keyboard_arrow_down</span>':'<span class="material-symbols-outlined">chevron_right</span>'},t.appendChild(r)}o.includes(".added-widget-container")&&t.classList.add("widget-tree-node");const l=document.createElement("div");if(l.classList.add("text-truncate"),l.innerHTML=`
      <span class="element-tag">${a}</span>
      <span class="element-id">${s}</span>
      <span class="element-class">${o}</span>
    `,t.appendChild(l),t.onmouseenter=()=>this.handleHover(e),t.onmouseleave=()=>this.handleHover(null),t.onclick=()=>{e.id==="builder-workarea"||e.classList.contains("content-target")||this.handleClick(e)},n.appendChild(t),e.children.length>0){const r=document.createElement("div");r.className="children hidden",Array.from(e.children).forEach(c=>{if(c instanceof HTMLElement){const d=this.buildTree(c);d&&r.appendChild(d)}}),n.appendChild(r)}return s!=="#widget-details"?n:""}handleHover(e){this.hoveredElement&&(this.hoveredElement.style.outline=""),e&&(e.style.outline="2px solid #c034f3"),this.hoveredElement=e}handleClick(e){e.scrollIntoView({behavior:"smooth",block:"center"}),this.triggerEventOnElement(e)}triggerEventOnElement(e){const n=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}toggleAll(){this.isAllExpanded=!this.isAllExpanded,this.toggleAllBtn&&(this.toggleAllBtn.innerHTML=this.isAllExpanded?'<span class="material-symbols-outlined" title="Collapse all">collapse_all</span>':'<span class="material-symbols-outlined" title="Expand all">unfold_more</span>'),this.treeRoot?.querySelectorAll(".children")?.forEach(t=>{this.isAllExpanded?t.classList.remove("hidden"):t.classList.add("hidden")}),this.treeRoot?.querySelectorAll(".toggle-btn")?.forEach(t=>{t.innerHTML=this.isAllExpanded?this.iconDownArrow:this.iconRightArrow})}}function ce(){const i=document.getElementById("tree-root");i.innerHTML="";const e=f.staticWidgetTree.html,n=document.querySelector(".toggle-all-btn");e?(n.style.display="flex",new as().mount(i)):(n.style.display="none",i.innerHTML=`
      <div class="text-center my-3 text-secondary">
        <p>The builder panel is empty</p>
      </div>
    `)}class cn{static navbar}function ss(i){return i?.widgetcodeId}async function Ti(i,e,n=!0,t){let a=new gt;a.html=i.html,a.widgetState={...t},a.widgetType=i.type,a.componentDidMountFunction=i.before_render,a.addEventFunction=i.after_render,a.mountChildWidgetsFunction=i.mount_child,e.innerHTML="";let s=e;if(n=!1,s&&(await a.mount(s),i.widget=a,i.children.length>0&&a.childWidgetElement?.length>0))for(let o=0;o<i.children?.length;o++){let l=i.children[o];for(let r=0;r<a.childWidgetElement.length;r++){let c=a.childWidgetElement[r];if(l.wrapper===c.id){const d=q.clearDraggedWidget(l),u=await Ti(d,c,n,a.widgetState);a.childWidgets.push(u),a.css=a.css+u.css+`#${l.wrapper} { ${l.css} }`,u.dataChange(g=>{let m=g?.type?.characterValue;m&&(a.childrenData[m]=g)})}}}return a}function en(i,e,n=!1,t){let a=Date.now();const s=document.createElement("div");return s.innerHTML=`<div id="wdgtcopy${a}" class="added-widget-container widget_container " draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetid="${e}"></div>`,n==!1&&e!=0&&e!=null&&e!=null?(i.insertBefore(s.firstChild,t),document.getElementById(`wdgtcopy${a}`)?document.getElementById(`wdgtcopy${a}`):i.querySelector(`#wdgtcopy${a}`)):i}const qe=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","datalist","del","details","dfn","dialog","div","em","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","li","main","mark","menu","meter","nav","ol","option","output","p","picture","pre","progress","q","ruby","samp","section","select","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"],He=["span","a","img","button","input","label","textarea","select"],os=[{name:"id",type:"string",value:""},{name:"className",type:"string",value:""},{name:"Height",type:"string",value:""},{name:"Width",type:"string",value:""},{name:"Margin",type:"string",value:""},{name:"Padding",type:"string",value:""},{name:"Background Color",type:"color",value:""},{name:"Color",type:"color",value:""},{name:"Float",type:"string",value:""}],Xn={a:{},abbr:{},address:{},article:{},aside:{},audio:{},b:{},bdi:{},bdo:{},blockquote:{},body:{},button:{accepts:["span","img"]},canvas:{},caption:{},cite:{},code:{},datalist:{},del:{},details:{},dfn:{},dialog:{},div:{},em:{},figcaption:{},figure:{},footer:{},form:{},h1:{accepts:[...He]},h2:{accepts:[...He]},h3:{accepts:[...He]},h4:{accepts:[...He]},h5:{accepts:[...He]},h6:{accepts:[...He]},head:{},header:{},html:{},i:{},iframe:{},ins:{},kbd:{},label:{accepts:["span"]},li:{},main:{},mark:{},menu:{},meter:{},nav:{},ol:{accepts:["li"]},option:{},output:{},p:{accepts:[...He]},picture:{},pre:{},progress:{},q:{},ruby:{},samp:{},section:{},select:{accepts:["option","optgroup"]},small:{},span:{},strong:{},style:{},sub:{},summary:{},sup:{},table:{},tbody:{},td:{},template:{},textarea:{},tfoot:{},th:{},thead:{},time:{},title:{},tr:{},u:{},ul:{accepts:["li"]},var:{},video:{accepts:["source"]}},rs=["div","span","p","a","section","article","header","footer","nav","aside","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","pre","strong","em","table","th","tr","td","label"];function Tt(i,e){const n=i.target,t=i.target;let a=null;for(const r of t.children){const c=r.getBoundingClientRect();if(i.pageY<c.top+window.scrollY){a=r;break}}if(n.classList.remove("dragging-area"),ls(n,"added-widget-container"))return{status:!1,message:"Cannot be dropped inside WIDGET!"};const o=e?.data_type||"",l=i?.target?.tagName?.toLowerCase();return ht.includes(l)?{status:!1,message:`${o} cannot be dropped inside ${l} tag.`}:qe.includes(l)&&Xn[l]?.accepts?.length&&!Xn[l]?.accepts?.includes(o)?{status:!1,message:`${o} cannot be dropped inside ${l} tag.`}:{status:!0,message:"",elementBelowDrag:a}}function ls(i,e){for(;i;){if(i.classList&&i.classList.contains(e))return!0;i=i.parentElement}return!1}class se{scriptElement=null;editorView=null;editorContainerId="";editorInitialized=!1;constructor(e){document.querySelectorAll(`.${e}`).forEach(n=>n.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(e),this.scriptElement.setAttribute("type","text/javascript"),document.head.appendChild(this.scriptElement),this.editorContainerId=e}updateJS(e){const n=this.scriptElement?.classList[this.scriptElement.classList.length-1];this.scriptElement&&Array.from(document.querySelectorAll(`.${n}`)).slice(0,-1).forEach(a=>a.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add(n),this.scriptElement.setAttribute("type","text/javascript"),this.scriptElement.textContent=e}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),`
      <div id="${this.editorContainerId}">
      </div>
    `}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:a}=n;return a.ranges.length===0?!1:(t({changes:{from:a.ranges[0].from,to:a.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};tsccsCompletions(e){const n=e.matchBefore(/\w*/);if(e.state.sliceDoc(Math.max(0,n.from-6),n.from)!=="tsccs.")return null;const a=Object.keys(gi).filter(s=>s.startsWith(n.text));return a.length>0?{from:n.from,to:n.to,options:a.map(s=>({label:s,type:"function"}))}:null}async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById(this.editorContainerId);e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your code here */",extensions:[Bt,$t,yi(),Ht({activateOnTyping:!0}),ba.data.of({autocomplete:this.tsccsCompletions}),_a(),Ea(Ta(new Ma,{globals:{tsccs:!0},env:{browser:!0},parserOptions:{ecmaVersion:2020},rules:{"no-undef":"error","no-unused-vars":"warn",semi:"error"}})),ae.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),jt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(n=>{if(n.docChanged){const t=n?.state?.doc?.toString();switch(this.editorContainerId){case"onmount-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.before_render=t;break;case"onupdate-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.update=t;break;case"addevents-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.after_render=t;break;case"mountchildwidgets-editor-split":f.selectedStaticWidgetTreeInfo.widgetTree.mount_child=t;break;default:const s=f.selectedStaticWidgetTreeInfo.widgetTree.custom_functions?.filter(o=>`${o.slug}-editor-split`===this.editorContainerId);s?.length&&(s[0].code=t)}f.updateWidgetTree(),this.updateJS(this.editorView?.state.doc.toString()||"")}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function Si(i){const e=document.querySelector("#addevents-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",i)try{const n=await pt.format(i,{parser:"babel",plugins:[vn,bn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=i}}async function cs(){const i=new se("addevents-editor-split"),e=document.getElementById("addevents-editor-split");e&&(e.innerHTML=""),await i.initializeEditor()}async function Li(i,e){const n=document.querySelector('.cm-content[data-language="css"]');if(n.innerHTML="/* Write your CSS here */",e){let t=document.querySelector(".child-widget-style");t||(t=document.createElement("style"),t.className="child-widget-style",document.head.insertAdjacentElement("afterbegin",t)),t.textContent+=e}if(i)try{const a=(n.textContent+i).split("/* Write your CSS here */").join(" ");n.textContent=a;const s=await pt.format(a,{parser:"css",plugins:[ka],tabWidth:2,printWidth:80,useTabs:!1,bracketSameLine:!1});n.textContent=s||"/* Write your CSS here */"}catch(t){console.error("CSS formatting error:",t),n.textContent=i}}async function Ci(i){const e=document.querySelector("#onmount-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping");if(e.textContent="/* Write your code here */",i)try{const n=await pt.format(i,{parser:"babel",plugins:[vn,bn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});e.textContent=n}catch(n){console.error("JS formatting error:",n),e.textContent=i}}async function ds(){const i=new se("onmount-editor-split"),e=document.getElementById("onmount-editor-split");e&&(e.innerHTML=""),await i.initializeEditor()}async function le(i){const e=document.querySelector('.cm-content[data-language="html"]'),n=document.getElementById("builder-workarea");if(n?.querySelector("#widget-details")?.remove(),e)try{const a=document.createElement("div");let s=i||n?.innerHTML||"";a.innerHTML=s;const o=a.firstChild;o&&o.nodeType===1&&o.classList.contains("mftsccs-marking-element")&&(s=o.innerHTML),a.innerHTML=s;async function l(c){if(c.dataset.widgetid){const d=await Y(Number(c.dataset.widgetid));d&&d.typeCharacter=="the_widget"&&(c.innerHTML="<!-- CHILD WIDGET HERE -->")}for(let d=0;d<c.childNodes.length;d++){const u=c.childNodes[d];u instanceof HTMLElement&&await l(u)}}await l(a),s=a.innerHTML;const r=await pt.format(s,{parser:"html",plugins:[Ia],tabWidth:2,printWidth:80,useTabs:!0,bracketSameLine:!1});e.textContent=r||"<!-- Write your HTML here -->"}catch(a){console.error("HTML formatting error:",a),e.textContent=i}else alert("widget html editor not found in dom")}async function us(i){const e=document.getElementById("widgetTypeValue");e&&(e.value=i||"");const n=document.getElementById("widgetType");n&&(n.value=i||"")}function qt(i){if(!i)return;const e=document.getElementById("builder-workarea"),n=document.createElement("div");n.id="widget-details",n.innerHTML="",n.innerHTML=`
    <button onclick="openDocumentationModal(${i}, 'preview')" title="Documentation">
      <!-- <span class="material-symbols-outlined"> visibility </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
    </button>
  `,e?.appendChild(n)}function Tn(){const i=document.querySelector(".content-target");i.innerHTML="",i.textContent="Widget Loading..."}function Sn(){return document.querySelectorAll(".content-target")[0]}function ei(i){const e={past:[],present:i,future:[]};return{getState(){return{current:e.present,canUndo:e.past.length>0,canRedo:e.future.length>0}},push(n){e.past.push(e.present),e.present=n,e.future=[]},undo(){if(e.past.length===0)return;const n=e.past[e.past.length-1];return e.past=e.past.slice(0,-1),e.future=[e.present,...e.future],e.present=n,n},redo(){if(e.future.length===0)return;const n=e.future[0];return e.future=e.future.slice(1),e.past=[...e.past,e.present],e.present=n,n}}}class D{static actionHistories;static renderActionButtons(){const e=document.getElementById("undo-btn"),n=document.getElementById("redo-btn");e?.addEventListener("click",D.undoAction),n?.addEventListener("click",D.redoAction)}static renderActionHistory(){D.actionHistories=ei(JSON.stringify(f?.staticWidgetTree)),ei(JSON.stringify(f?.staticWidgetTree))}static updateButtonStates(){const{canUndo:e,canRedo:n}=D.actionHistories.getState(),t=document.getElementById("undo-btn"),a=document.getElementById("redo-btn");t&&(t.disabled=!e),a&&(a.disabled=!n)}static async undoAction(){const e=D.actionHistories.undo();e!==void 0&&(ri(e||""),D.updateButtonStates())}static async redoAction(){const e=D.actionHistories.redo();e!==void 0&&(ri(e||""),D.updateButtonStates())}static updateActionHistories(){D.actionHistories.push(JSON.stringify(f.staticWidgetTree)),D.updateButtonStates()}}async function ms(){const i=document.getElementById("widget-prompt-modal");i&&i.remove()}async function gs(){document.getElementById("widget-prompt-modal").classList.add("d-none");const e=document.getElementById("widget-prompt-tab");e.classList.remove("d-none"),e.classList.add("d-flex")}async function ps(){document.getElementById("widget-prompt-tab").classList.add("d-none");const e=document.getElementById("widget-prompt-modal");e.classList.remove("d-none"),e.classList.add("d-flex")}function hs(){const i=document.getElementById("prompt-text");i.addEventListener("input",()=>{i.style.height="auto";const e=Math.min(i.scrollHeight-8,120);i.style.height=`${e}px`,i.style.overflowY=e===120?"auto":"hidden"})}class Wi{widgetPromptHTML;assistantChatId;randomSuggestionEl;constructor(e){this.assistantChatId=e,this.randomSuggestionEl="",this.init()}init(){if(!this.assistantChatId){const n=["Newsletter signup form with email validation","Create a header section for portfolio website","Quick contact form with name, email, and message fields","Create a customer satisfaction survey form","Countdown timer for upcoming events or launches","Currency converter widget with real-time exchange rates","Task list widget with checkboxes and progress tracking"],a=((s,o=3)=>{if(s.length<o)return[];const l=new Set;for(;l.size<o;){const r=Math.floor(Math.random()*s.length);l.add(r)}return[...l]})(n,2);this.randomSuggestionEl=a?.map(s=>`<div class="suggestion-prompt">
            <button class="btn btn-outline-secondary rounded-pill py-2">${n[s]}</button>
          </div>`).join("")}this.widgetPromptHTML=this.getHtml(),document.querySelector("body #contentTargetAndCodeViewWrapper")?.insertAdjacentHTML("beforeend",this.widgetPromptHTML),hs(),setTimeout(()=>{const n=document.querySelector(".aiAssistantTabs"),t=document.querySelectorAll("#aiChatContainer, #prototypeWidget");n.querySelector("button").classList.add("active"),t[0].classList.add("active"),n.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{n.querySelectorAll("button").forEach(l=>l.classList.remove("active")),t.forEach(l=>l.classList.remove("active"));const s=a.dataset.id,o=document.getElementById(s);console.log("this is the target id and doc",s,o),a.classList.add("active"),o?.classList.add("active")})})},0)}getHtml(){return window.closeAssistant=ms,window.minimizeAssistant=gs,window.maximizeAssistant=ps,`
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
    `}}async function fs(i){const e=document.getElementById("widget-btn-wrapper");if(console.log("addWidgetUpdate",i),e.querySelector("#updateFsPage")||e.querySelector("#fspage-save-button"))return;e.innerHTML=`
            <div class="position-relative" style="z-index: 100;">
              <div class="w-100 d-flex justify-content-center">
                <button
                  id="update-publish-widget-btn"
                  onclick="updateWidget(event, ${i}, true)"
                  class="btn btn-primary btn-sm d-flex align-items-center gap-1"
                  style="border-radius: 0.2rem 0 0 0.2rem; border-right: 1px solid #A2A2A2;"
                  data-widgetid="${i}"
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
                onclick="updateWidget(event, ${i})"
                class="btn btn-primary btn-sm d-flex align-items-center gap-1 mx-1 position-absolute w-100 mt-1 shadow-sm d-none"
                data-widgetid="${i}"
              >
                <span class="material-symbols-outlined">update</span>
                Update Only
              </button>
            </div>
          `;const t=e.querySelector("#updateDropDownArrow"),a=e.querySelector("#update-widget-btn");a&&t&&a.addEventListener("click",()=>{a.classList.add("d-none"),t.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'}),t&&a&&t.addEventListener("click",()=>{a.classList.contains("d-none")?(a.classList.remove("d-none"),t.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(a.classList.add("d-none"),t.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>')})}function ys(){const i=document.getElementById("widget-btn-wrapper");i.innerHTML=`<button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Save
          </button>`}function ws(){const i=document.getElementById("widget-btn-wrapper");i.innerHTML=`<button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
            <span class="material-symbols-outlined">save</span>
            Boom
          </button>`}class Ai{workspace=null;editorView=null;editorInitialized=!1;constructor(){this.workspace=document.getElementById("builder-workarea")}updateHTML(e){this.workspace&&(f.selectedStaticWidgetTreeInfo.widgetTree.html=e,f.selectedStaticWidgetTreeInfo.widgetTree.widget.html=e,this.workspace.innerHTML)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),this.getEditorContentJS()}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:a}=n;return a.main.empty?t({changes:{from:a.main.from,insert:"  "},selection:{anchor:a.main.from+2}}):t({changes:{from:a.main.from,to:a.main.to,insert:"  "}}),!0};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-html-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"<!-- Write your HTML here -->",extensions:[Bt,$t,Sa(),Ht(),ae.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),jt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(n=>{if(n.docChanged){const t=this.editorView?.state.doc.toString()||"";this.updateHTML(t)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContentJS(){return this.editorView?.state.doc.toString()||""}}window.openJSEditor=ut;class xi{scriptElement=null;editorView=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetScript").forEach(e=>e.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript"),document.body.appendChild(this.scriptElement)}updateJS(e){this.scriptElement&&document.querySelectorAll(".widgetScript").forEach(t=>t.remove()),this.scriptElement=document.createElement("script"),this.scriptElement.classList.add("widgetScript"),this.scriptElement.setAttribute("type","text/javascript");const n=`(function() {
      try {
        ${e}
       } 
      catch(error) {
        console.error('JS error:', error);
      }
      })();`;this.scriptElement.textContent=n,document.body.appendChild(this.scriptElement),f.selectedStaticWidgetTreeInfo?.widgetTree&&(f.selectedStaticWidgetTreeInfo.widgetTree.js=e)}async getHtml(){return window.getEditorContentJS=this.getEditorContentJS.bind(this),""}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:a}=n;return a.ranges.length===0?!1:(t({changes:{from:a.ranges[0].from,to:a.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){this.editorInitialized=!0;const e=document.getElementById("editor-container-js-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your JavaScript here */",extensions:[Bt,$t,yi(),Ht(),ae.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),jt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(async n=>{if(n.docChanged){const t=this.editorView?.state.doc.toString()||"";this.updateJS(t)}})],parent:e}))}getEditorContentJS(){return this.editorView?this.editorView.state.doc.toString():""}}async function ti(){const i=document.getElementById("codeBlocksContainer"),e=i.querySelectorAll(".sub-tab-btn");if(!i.querySelector(".sub-tab-btn.active")){e?.[0]?.classList.add("active");const t=document.getElementById("onmount-editor-split");t&&t.classList.add("active")}}async function Mi(i){const e=i?.id,n=i?.code,t=i?.slug,a=i?.name,s=document.querySelectorAll(".custom-service-btn"),o=Array.from(s)?.filter(u=>u?.getAttribute("data-subtab")===t),l=document.getElementById("lifecycle"),r=l?.querySelector(".sub-tab-nav");if(!o.length){const u=document.createElement("button");u.classList.add("sub-tab-btn","custom-service-btn"),u.setAttribute("data-subtab",t),u.innerHTML=`
      <span class="service-name">${a}</span>
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
    `,r?.appendChild(u);const g=document.createElement("div");g.classList.add("sub-tab-content","custom-editor-content"),g.id=`${t}-editor-split`,g.setAttribute("data-subtab",t),l?.appendChild(g);const m=`${t}-editor-split`;vs(m)}document.getElementById("codeBlocksContainer").querySelectorAll(".sub-tab-btn").forEach(u=>{u.addEventListener("click",function(){const g=u.getAttribute("data-subtab"),m=u.closest(".tab-content");m?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(h=>{h.classList.remove("active")}),u.classList.add("active"),m?.querySelector(`.sub-tab-content[data-subtab="${g}"]`)?.classList.add("active")})}),setTimeout(async()=>{const u=document.querySelector(`#${t}-editor-split .cm-editor .cm-scroller .cm-content.cm-lineWrapping`);if(u&&(u.textContent="/* Write your code here */",n))try{const g=await pt.format(n,{parser:"babel",plugins:[vn,bn],tabWidth:2,semi:!0,singleQuote:!0,bracketSpacing:!0,printWidth:80});u.textContent=g}catch(g){console.error("JS formatting error:",g),u.textContent=n}},500)}async function vs(i){await new se(i).initializeEditor()}async function bs(i,e,n){const t=e.trim().toLocaleLowerCase().split(" ").join("-"),a=f.staticWidgetTree?.custom_functions?.filter(d=>d.slug===i);a[0].name=e,a[0].slug=t,console.log("updated static widget tree",f.staticWidgetTree);const s=document.querySelector(`button[data-subtab=${i}]`);s?.setAttribute("data-subtab",t),s.innerHTML=`
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
  `;const o=s?.querySelector("span.service-name");o&&(o.innerText=e);const l=document.getElementById(`${i}-editor-split`);l?.setAttribute("data-subtab",t),l.id=`${t}-editor-split`,await new se(`${t}-editor-split`).initializeEditor();const c=f.staticWidgetTree?.custom_functions?.filter(d=>d.slug===t);Mi(c?.[0]),we("rename-custom-function-modal")}class _s{renameCustomFunctionModalHTML="";currentCustomFunctionSlug;customFunctionId;constructor(e,n){this.customFunctionId=n,this.currentCustomFunctionSlug=e,this.init()}init(){this.renameCustomFunctionModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.renameCustomFunctionModalHTML);const t=document.getElementById("rename-custom-function-modal").querySelector("form");t&&t.addEventListener("submit",a=>{a.preventDefault();const s=t.customFunctionName.value.trim(),o=/^[_A-Za-z][_A-Za-z ]*$/.test(s),l=document.getElementById("service-rename-error");o?(l.textContent="",l.classList.add("d-none"),bs(this.currentCustomFunctionSlug,s,this.customFunctionId)):(l.classList.remove("d-none"),l.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")})}getHtml(){return`
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
    `}}const Ft="unsaved_widget";async function Es(){const i=Ss(),e={widgetTree:f.staticWidgetTree,timestamp:new Date().toISOString()},n=JSON.stringify(e),t=new Blob([n]).size,s=4.5*1024*1024-i;if(t<=s)try{localStorage.setItem(Ft,n),Ln("save-widget")}catch(o){console.error("Error saving to localStorage:",o)}else console.warn("Data too large to save in localStorage. Consider compressing or using IndexedDB."),Ot()}function Ts(i){return new Blob([i]).size}function Ss(){let i=0;for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;const n=localStorage.getItem(e);i+=Ts(e+n)}return i}async function Ot(){localStorage.removeItem(Ft),at()}const tn=async i=>{i?.preventDefault();const e=localStorage.getItem(Ft);if(e){const n=JSON.parse(e);f.widgetTree=n?.widgetTree;const t=f.staticWidgetTree?.origin||f.staticWidgetTree?.widgetId,a=new URLSearchParams(window.location.search).get("widget-id");t===Number(a)?(t||q.enableWidgetButtons(),await et(),D.updateActionHistories(),W.infoMessageToast("Draft widget has been stored",3)):console.info("draft widget and load widget are different");return}},Ln=async(i="")=>{const e=document.querySelector("#widget-properties .row"),n=document.getElementById("btn-draft-widget"),t=localStorage.getItem(Ft),a=JSON.parse(t),s=a?.widgetTree?.origin||a?.widgetTree?.widgetId,o=new URLSearchParams(window.location.search).get("widget-id");if(t&&!n){if(s!==Number(o)){at();return}const l=document.createElement("div");l.id="draft-widget",l.classList.add("py-2","mb-0","d-flex","flex-column","gap-2"),l.innerHTML=`
      <label for="draft-widget" >Drafted Widget:</label>
      <button class="btn btn-primary" id="btn-draft-widget">Load Draft Widget</button>
    `,e?.appendChild(l),document.getElementById("btn-draft-widget")?.addEventListener("click",c=>tn(c)),s===0&&!i&&setTimeout(()=>{tn()},0)}else t&&n?s!==Number(o)||s===Number(o)&&!i?at():n?.addEventListener("click",l=>tn(l)):!t&&n&&at()};function at(){document.getElementById("draft-widget")?.remove()}const ot=(()=>{function i(c){const d=c.target,u=document.getElementById("codeBlocksContainer");u&&u.classList.add("visible"),document.getElementById("designSplitViewButton")?.classList.remove("selected"),d.classList.add("selected")}function e(c){const d=c.target,u=document.getElementById("codeBlocksContainer");u&&u.classList.remove("visible"),document.querySelector(".codeSplitViewButton")?.classList.remove("selected"),d.classList.add("selected")}async function n(c){q.enableWidgetButtons();try{await et(),Es(),D.updateActionHistories(),W.infoMessageToast(c)}catch(d){W.errorToast("widget synchronization failed"),console.error(d)}}const t=()=>{const c=document.querySelector(".codeSplitViewButton");document.querySelector("#widgetButtionCodeViewWrapper").classList.remove("fullscreen"),document.createElement("div").classList.remove("visible"),c.style.display="flex";const g=document.getElementById("designSplitViewButton"),m=new Event("click",{bubbles:!0,cancelable:!0});g&&g.dispatchEvent(m),rt.enableHeader()},a=()=>{const c=document.getElementById("widgetButtionCodeViewWrapper"),d=document.createElement("div");d.classList.add("codeSplitViewButton");const u=document.createElement("div");u.appendChild(d);const g=document.createElement("div");g.id="codeBlocksContainer",g.innerHTML=`
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
`,c?.appendChild(g),document.querySelectorAll(".tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(S=>S.classList.remove("active")),y.classList.add("active"),document.getElementById(E)?.classList.add("active")})}),g.querySelectorAll(".sub-tab-btn").forEach(y=>{y.addEventListener("click",function(){const E=y.getAttribute("data-subtab"),S=y.closest(".tab-content");S?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(b=>{b.classList.remove("active")}),y.classList.add("active"),S?.querySelector(`.sub-tab-content[data-subtab="${E}"]`)?.classList.add("active")})});const p=document.querySelector(".fullscreenicon"),v=document.querySelector("#widgetButtionCodeViewWrapper");p?.addEventListener("click",()=>{v.classList.contains("fullscreen")?rt.enableHeader():rt.disableHeader(),v.classList.toggle("fullscreen")});const _=document.querySelector(".close-btn");_&&_.addEventListener("click",t),document.getElementById("synchronizeWidgetBtn").addEventListener("click",()=>n("Widget Synchronized")),document.getElementById("contentTargetAndCodeViewWrapper")?.prepend(u.firstChild),setTimeout(()=>{const y=document.querySelector(".codeSplitViewButton");y&&(y.removeEventListener("click",i),y.addEventListener("click",i));const E=document.getElementById("designSplitViewButton");E&&(E.removeEventListener("click",e),E.addEventListener("click",e))},0),document.getElementById("add-service-button")?.addEventListener("click",y=>s(y))};function s(c){c.stopPropagation();try{const d="add-custom-service-dialog";document.getElementById(d)?.remove();const g=document.createElement("dialog");g.setAttribute("id",d),g.classList.add("col-md-3"),g.innerHTML=`
        <h4>New Service</h4>
        <form method="dialog" class="mt-3">
          <div class="mb-3">
            <label for="serviceName" class="form-label">Service Name</label>
            <input type="text" class="form-control" autocomplete="
            " name="serviceName" id="serviceName" value="" placeholder="e.g. validation service">
          </div>
          <div class="d-none alert alert-danger" id="service-name-error"></div>
  
          <div class="text-end">
            <button class="btn btn-secondary" onclick="closeModal('${d}')" type="button">Cancel</button>
            <button type="submit" class="btn btn-info">Save Now</button>
          </div>
        </form>
      `;const m=g.querySelector("form");return m&&m.addEventListener("submit",h=>{h.preventDefault();const p=m?.serviceName?.value.trim(),v=/^[_A-Za-z][_A-Za-z ]*$/.test(p),_=document.getElementById("service-name-error");v?(_.textContent="",_.classList.add("d-none"),r(h)):(_.classList.remove("d-none"),_.textContent="Invalid name. Must not start with a number or '--', and contain only letters, numbers, hyphens or underscores.")}),document.querySelector("body #app")?.appendChild(g),de(d),"OPENED"}catch(d){console.error("Failed to rename widget:",d)}}async function o(c,d,u){console.log("openRenameCustomFunction -->",c,d,u),new _s(d,u),await de("rename-custom-function-modal")}async function l(c,d,u){c.preventDefault(),console.log("deleteCustomFunction -->",c,d,u);try{if(confirm("Do you want to delete the Service?")){W.infoMessageToast("Deleting the service...",0),u&&await Se(Number(u));const m=`button[data-subtab=${d}]`;document.querySelector(m)?.remove(),document.getElementById(`${d}-editor-split`)?.remove(),f.staticWidgetTree.custom_functions=f.staticWidgetTree.custom_functions.filter(E=>E.slug!==d),console.log("after deleteCustomFunction staticWidgetTree",f.staticWidgetTree);const v=document.getElementById("codeBlocksContainer");return v?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),v?.querySelectorAll(".sub-tab-btn")?.[0]?.classList.add("active"),v?.querySelector(".sub-tab-content.active")?.classList.remove("active"),v?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Service is deleted successfully"),"Service is deleted successfully!"}else return}catch(g){W.errorToast("Failed to delete widget"),console.error("Failed to delete widget:",g)}}async function r(c){c.preventDefault();const d=c.target,g=new FormData(d).get("serviceName");let m=g?.toLowerCase();m.includes(" ")&&(m=m.split(" ").join("-"));const h=document.getElementById("lifecycle"),p=h?.querySelector("div.sub-tab-nav"),v=document.getElementById("codeBlocksContainer");v?.querySelector(".sub-tab-btn.active")?.classList.remove("active"),v?.querySelector(".sub-tab-content.active")?.classList.remove("active");const T=document.createElement("button");T.classList.add("sub-tab-btn","custom-service-btn","active"),T.setAttribute("data-subtab",m),T.innerHTML=`
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
    `,p.appendChild(T);const w=document.createElement("div");w.classList.add("sub-tab-content","custom-editor-content","active"),w.setAttribute("data-subtab",m),w.setAttribute("id",`${m}-editor-split`),h.appendChild(w),await new se(`${m}-editor-split`).initializeEditor();const E={name:g,slug:m,code:""};f.staticWidgetTree.custom_functions||(f.staticWidgetTree.custom_functions=[]),f.staticWidgetTree.custom_functions?.push(E),console.log("StaticWidgetClass.staticWidgetTree -->",f.staticWidgetTree),document.querySelectorAll(".tab-btn").forEach(L=>{L.addEventListener("click",function(){const A=L.getAttribute("data-tab");document.querySelectorAll(".tab-btn, .tab-content").forEach(x=>x.classList.remove("active")),L.classList.add("active"),document.getElementById(A)?.classList.add("active")})}),(v?.querySelectorAll(".sub-tab-btn")).forEach(L=>{L.addEventListener("click",function(){const A=L.getAttribute("data-subtab"),x=L.closest(".tab-content");x?.querySelectorAll(".sub-tab-btn, .sub-tab-content").forEach(k=>{k.classList.remove("active")}),L.classList.add("active"),x?.querySelector(`.sub-tab-content[data-subtab="${A}"]`)?.classList.add("active")})}),we("add-custom-service-dialog")}return{initializeCodeBlock:a,closeCodeView:t,synchronizeWidget:n,openRenameCustomFunction:o,deleteCustomFunction:l}})();async function Ls(){await Ln();const i=document.getElementById("select-box");if(i.style.display="none",f.staticWidgetTree?.custom_functions?.length){document.querySelectorAll(".custom-service-btn").forEach(S=>{S.remove()}),document.querySelectorAll(".custom-editor-content").forEach(S=>{S.remove()});const w=document.getElementById("codeBlocksContainer"),y=w?.querySelectorAll(".sub-tab-btn");w?.querySelector(".sub-tab-btn.active")||(y?.[0]?.classList.add("active"),w?.querySelectorAll(".sub-tab-content")?.[0]?.classList.add("active"))}f.resetWidgetTree(),D.renderActionHistory(),D.updateActionHistories(),Xt(f.staticWidgetTree),ce();const e=document.getElementById("widget-btn-wrapper");e.innerHTML=`
    <button onclick="openSaveWidgetModal(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span class="material-symbols-outlined">save</span>
      Save
    </button>
  `;const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
    <button onclick="saveWidgetToFolderBtn(event)" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
      <span>Boom</span>
    </button>
  `;const t=document.getElementById("widget-builder");t.textContent="Widget Builder Panel",t.setAttribute("title","Widget Builder Panel"),q.disableWidgetButtons(),await new Ki().initializeEditor(),await new xi().initializeEditor(),await new se("onmount-editor-split").initializeEditor(),await new se("onupdate-editor-split").initializeEditor(),await new se("addevents-editor-split").initializeEditor(),await new se("mountchildwidgets-editor-split").initializeEditor(),await new Ai().initializeEditor();const u=document.getElementById("widgetNameValue");u.value="";const g=document.getElementById("widgetTypeValue");g&&(g.value="");const m=document.getElementById("widgetType");m&&(m.value=""),document.getElementById("widget-version").classList.add("d-none");const p=document.getElementById("element-attributes");p.innerHTML=`
    <div class="row">
      <div class="text-center my-3 text-secondary">
        <p>Select an element to view and edit its attributes</p>
      </div>
    </div>
  `,qn(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove()}function Cs(){const i=new wa;f.widgetTree=i,ot.synchronizeWidget("Workspace Cleared")}let ke="",St="";async function ni(i){try{const n=(await I())?.token,t=await fetch(`${ie.aiURL}/generate-widget`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(i)});if(!t.ok){const c=await t?.text(),d=JSON.parse(c);throw W.errorToast(d.message),console.error(`API Error (${t.status}):`,c),Lt(t.statusText,"error"),new Error(`API request failed with status ${t.status}`)}const a=t.body.getReader(),s=new TextDecoder("utf-8");let o="",l=null;for(;;){const{value:c,done:d}=await a.read();if(d)break;o+=s.decode(c,{stream:!0});const u=o.split(`

`);for(let g=0;g<u.length-1;g++){const m=u[g].trim();if(m.startsWith("data:")){const h=m?.slice(6).trim();try{const p=JSON.parse(h);if(p.status==="responding"&&await As(p.message_str),p.status==="success"&&(l=p),p.status==="error")throw W.errorToast(p.message?.[0]||"AI Error"),new Error(p.message?.[0])}catch(p){console.warn("Stream parse error:",p)}}}o=u[u.length-1]}return document.getElementById("response-status")?.removeAttribute("id"),console.log("finalData",l),l}catch(e){return console.error(e),null}}async function Ws(i){await je(i),f.resetWidgetTree(),document.getElementById("widget-prompt-modal")?.remove(),document.getElementById("widget-prompt-tab")?.remove(),new Wi("");const t=document.getElementById("prompt-text");ke="",t?.addEventListener("keydown",function(l){if(l.key==="Enter"&&!l.shiftKey){l.preventDefault();const r={text_input:t?.value,chat_id:"",widget_type:"",stream:!0};ke&&(r.tag="followup",r.chat_id=ke,r.widget_type=St),ct(r)}}),document.querySelector(".button-send").addEventListener("click",function(l){l.preventDefault();const r={text_input:t?.value,chat_id:"",widget_type:"",stream:!0};ke&&(r.tag="followup",r.chat_id=ke,r.widget_type=St),ct(r)}),document.getElementById("suggestion-prompts-container")?.querySelectorAll(".suggestion-prompt button")?.forEach(l=>{l?.addEventListener("click",function(r){r.preventDefault(),t.value=l?.innerText})}),console.log("openPromptModal staticWidgetTree",f.staticWidgetTree)}async function ct(i){if(console.log("requestPromptData ->",i),i.text_input){ki(i.text_input),xs("Assistant is working");const e=await ni(i);if(console.log("submitPrompt response",e),Ms("prompt-loader"),!e)return;ke=e?.data?.chat_id,St=e?.data?.widget_type;const n=e?.message;if(f.staticWidgetTree.assistant={input:e?.data?.user_prompt,id:ke,type:St},console.log("submitPrompt StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),e?.status=="error")W.errorToast(n);else{if(i.widget_type!=="list"){i.widget_type==="form"&&Ii(ke),console.log("this the prototype data",e.data.data_structure_prototype);const s=new Function("tsccs",e.data.data_structure_prototype)(gi);console.log(s,"this the prototype after eval");let o=document.getElementById("prototypeWidget");Pe(ie.visual_prototype_widget,o,{prototype:s}).then(l=>{l.dataChange(async r=>{console.log("this is the value for data change",r);const c={text_input:f.staticWidgetTree.assistant.input,chat_id:f.staticWidgetTree.assistant.id,widget_type:"",payload:r,type:"application/JSON",stream:!0};try{const d=await ni(c);console.log("this is the response",d),await dn(d)}catch(d){throw d}})})}await Lt(n);const t=document.createElement("button");t.classList.add("clearWorkspaceButton"),t.textContent="Clear Workspace",t.classList.add("btn","btn-danger"),t.addEventListener("click",()=>{Cs(),t.remove()}),await Lt(t),Tn(),await dn(e)}}}async function Lt(i,e){const n=document.querySelector(".chat-content"),t=document.createElement("div");if(t.classList.add("message","message-bot"),i instanceof HTMLButtonElement){const a=document.querySelector(".clearWorkspaceButton");a&&a.remove(),t.appendChild(i)}else e==="error"&&t.classList.add("text-danger","my-0","text-center"),t.innerText=i;n?.scrollTo({top:n.scrollHeight,behavior:"smooth"}),n?.insertAdjacentElement("beforeend",t)}async function As(i,e){const n=document.getElementById("response-status");if(n)n.innerHTML=i;else{const t=document.querySelector(".chat-content"),a=document.createElement("div");a.id="response-status",a.classList.add("message","message-bot"),a.innerHTML=i,t?.insertAdjacentElement("beforeend",a),t?.scrollTo({top:t.scrollHeight,behavior:"smooth"})}}function ki(i){const e=document.getElementById("default-message"),n=document.querySelector(".chat-content"),t=document.createElement("div");t.classList.add("message","message-user"),t.innerText=i,n?.insertAdjacentElement("beforeend",t),e?.remove();const a=document.getElementById("prompt-text");a.value="",a.style.height="44px"}function xs(i){ks("prompt-form");const e=document.getElementById("prompt-content"),n=document.createElement("div");n.id="prompt-loader",n.textContent=i,e?.insertAdjacentElement("beforeend",n)}function Ms(i){document.getElementById(i)?.remove(),Is("prompt-form")}function ks(i){const e=document.getElementById(i);for(let n of e.elements)n.disabled=!0}function Is(i){const e=document.getElementById(i);for(let n of e.elements)n.disabled=!1}async function dn(i){const e=i?.data?.ui?.html||"",n=i?.data?.ui?.css||"",t=i?.data?.ui?.js||"",a=i?.data?.before_render||"",s=i?.data?.after_render||"",o={html:e,css:n,js:t,before_render:a,after_render:s,assistant:{id:i?.data?.chat_id,input:i?.data?.user_prompt,type:i?.data?.widget_type}};await Ps(o)}async function Ps(i){f.staticWidgetTree.html=i.html,f.staticWidgetTree.css=i.css,f.staticWidgetTree.js=i.js,f.staticWidgetTree.before_render=i.before_render,f.staticWidgetTree.after_render=i.after_render,f.staticWidgetTree.assistant=i.assistant;const e=f.staticWidgetTree,n=document.getElementById("builder-workarea");n.innerHTML="";const t=await Ti(e,n);f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},console.log("StaticWidgetClass ->",f.widgetTree),await X(e,!1,t),D.renderActionHistory(),D.updateActionHistories(),ce(),pe()}async function Ii(i){document.getElementById("prompt-suggestion")?.remove();const n={text_input:"create a list widget for it",chat_id:i,widget_type:"list",stream:!0},t=document.createElement("div");t.id="prompt-suggestion",t.innerHTML=`
    <div class="text-center my-1">
      <button type="button" id="request-list-widget" class="btn btn-outline-secondary rounded-pill py-1">create a list widget for it?</button>
    </div>
  `,document.getElementById("prompt-content")?.insertAdjacentElement("afterend",t),document.getElementById("request-list-widget").addEventListener("click",async o=>{o.preventDefault(),ct(n),ys(),ws()})}async function Bs(i){new Wi(i?.id),ki(i?.input),await Lt("Widget Generated Successfully!!"),i.type==="form"&&Ii(i?.id);const e=document.getElementById("prompt-text"),n={text_input:e?.value,chat_id:i?.id||"",widget_type:i?.type||"",tag:i?.id?"followup":"",stream:!0};e?.addEventListener("keydown",function(a){a.key==="Enter"&&(a.shiftKey||(a.preventDefault(),n.text_input=e?.value,ct(n)))}),document.querySelector(".button-send").addEventListener("click",function(a){a.preventDefault(),n.text_input=e?.value,ct(n)})}async function X(i,e,n,t,a){us(i?.type);const s=e?"":i?.css,o=e?`div[data-widgetid="${i.id}"] {${i.css}}
${n?.css}`:n?.css;if(await Li(s,o),le(i?.html),await Si(i?.after_render),await Ci(i?.before_render),i?.custom_functions?.length){const l=document.querySelectorAll(".custom-service-btn"),r=Array.from(l)?.map(u=>u.getAttribute("data-subtab")??""),c=i.custom_functions?.map(u=>u.slug);(r?.filter(u=>!c.includes(u))).forEach(u=>{const g=document.querySelector(`.custom-service-btn[data-subtab="${u}"]`);g&&g.remove(),document.getElementById(`${u}-editor-split`)?.remove()}),ti(),i.custom_functions?.forEach(u=>{Mi(u)})}else document.querySelectorAll(".custom-service-btn").forEach(c=>{c.remove()}),document.querySelectorAll(".custom-editor-content").forEach(c=>{c.remove()}),ti();(t||a)&&qt(i?.origin?i?.origin:i?.widgetId),t&&i?.assistant?.id&&Bs(i?.assistant)}const un="drop-indicator";function Pi(){let i=document.querySelector(`.${un}`);return i||(i=document.createElement("div"),i.className=un,document.body.appendChild(i)),i}function $s(i,e){const n=Pi(),t=i.getBoundingClientRect();e==="top"?n.style.top=`${t.top-5}px`:e==="bottom"&&(n.style.top=`${t.bottom-5}px`),n.style.left=`${t.left}px`,n.style.width=`${t.width}px`,n.style.opacity="1",n.style.transform="scaleY(1)"}function Hs(){document.querySelectorAll(`.${un}`).forEach(e=>{e.classList.add("hiding"),setTimeout(()=>{e.remove()},100)})}function js(i,e,n){if(e.length===0)return{element:n,position:"top"};const t=i.clientY;let a=e[0],s=Math.abs(a.getBoundingClientRect().top-t);Math.abs(a.getBoundingClientRect().bottom-t);for(const c of e){const d=c.getBoundingClientRect(),u=Math.abs(d.top-t);Math.abs(d.bottom-t),u<s&&(a=c,s=u)}const o=a.getBoundingClientRect(),l=o.top+o.height/2,r=t<l?"top":"bottom";return{element:a,position:r}}let J=null,j;function Vt(){const i=document.querySelector(".content-target > .mftsccs-marking-element");if(i){const e=document.querySelector(".content-target");_e.fixContentTargetHeight(e,i)}}function Ds(i){J=i.target;let e={data_type:i.target.getAttribute("data-type"),data_default:i.target.getAttribute("data-default"),data_void:i.target.getAttribute("data-void"),data_text:i.target.getAttribute("data-text"),elementId:i.target.getAttribute("data-elementId"),dataId:i.target.id,imageUrl:i.target.imageUrl,displayType:i.target.displayType};i.dataTransfer.setData("text",JSON.stringify(e)),i.dataTransfer.setData("id",i.target.id),i.dataTransfer.effectAllowed="move"}async function Ns(i){i.stopPropagation();const e={widgetcodeId:i.target.getAttribute("data-widgetId"),sourceElementId:i.target.id,className:i.target.className,imageUrl:i.target.imageUrl,displayType:i.target.displayType,type:i.target.Type};console.log("widgetcodeData ->",e),i.dataTransfer.setData("text",JSON.stringify(e)),i.dataTransfer.effectAllowed="move"}function qs(i){i.preventDefault(),i.stopPropagation(),i.target.classList.add("dragging-area"),ft.collapseNavbar();const e=document.getElementById("select-box");e.style.display="none",is()}function Fs(i){i.preventDefault(),i.stopPropagation(),i.target.classList.remove("dragging-area")}function Os(i){i.preventDefault(),i.stopPropagation(),(!J||!(i.currentTarget instanceof HTMLElement))&&(J=i?.target);const e=i.target,n=Array.from(e.children).filter(a=>a!==J);Pi();const t=js(i,n,e);j=t,$s(t.element,t.position)}function Vs(){q.checkContent()?q.enableWidgetButtons():q.disableWidgetButtons()}async function Rs(i){const e=await Rt(i);J=null,Hs(),D.updateActionHistories(),ft.collapseNavbar(),Vs(),Vt(),ce(),e&&(le(),qt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),pe()}function Ct(i,e){return Array.isArray(i?.children)&&(i.children=i?.children.filter(n=>n?.wrapper!==e),i.children.forEach(n=>Ct(n,e))),i}function Fe(i,e){let n;return Array.isArray(i?.children)&&(n=i?.children.filter(t=>t?.wrapper===e),i.children.forEach(t=>Fe(t,e))),n?.[0]}async function Us(i){i.preventDefault(),i.stopPropagation(),["general","size","spacing","display","typography","borders","colors"].forEach(u=>{const g=document.getElementById(`${u}-content`);if(g&&g.style.display==="block"){const m={target:g.previousElementSibling};ut(m,`${u}-content`)}});const n=document.getElementById("element-attributes");if(n&&n.style.display==="block"){const u={target:document.querySelector("#icon-attribute")};ut(u,"element-attributes")}const t=R.staticElement,a=t?.parentElement,s=a?.parentElement,o=s?.dataset?.widgetid,l=t?.parentElement?.closest(".added-widget-container")||t?.parentElement?.closest(".edited-widget-container"),r=t.querySelectorAll(".added-widget-container");if(t?.classList?.contains("added-widget-container")){const u=t?.id;Ct(f?.staticWidgetTree,u)}else r.length&&r.forEach(u=>{const g=u?.id;Ct(f?.staticWidgetTree,g)});if(l){const u=l.id;if(t?.remove(),R.staticElement.remove(),_t(),t?.classList?.contains("added-widget-container")){const g=Fe(f?.staticWidgetTree,u),m=l.querySelector(".mftsccs-marking-element");g.html=m?.innerHTML,X(g)}else{const m=document.getElementById(u).querySelector(".mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=m?.innerHTML,X(f.selectedStaticWidgetTreeInfo.widgetTree)}ce(),D.updateActionHistories();return}a?.classList.contains("mftsccs-marking-element")&&a.children.length===1&&a?.remove(),o&&(s?.children?.length||s?.remove()),t?.remove(),R.staticElement.remove(),_t();const c=await Ze();return f.staticWidgetTree.html=c,f.selectedStaticWidgetTreeInfo={widgetTree:f?.widgetTree,isChildWidget:!1,childWidgetIndex:0},Ir(),X(f?.staticWidgetTree),ce(),D.updateActionHistories(),q.checkContent()||(q.disableWidgetButtons(),document.querySelector(".content-target")?.removeAttribute("style")),"Removed Element"}async function zs(i){return"drag"}async function Js(i){return i.dataTransfer.setData("text",i.target.id),"start drag"}async function Gs(i){console.log("dragEndWidgetElement event ->",i)}async function Qs(i){return i.preventDefault(),i.stopPropagation(),"dragOverWidgetElement"}async function Zs(i){Rt(i),le()}let Wt=null;async function Bi(i,e){if(i.preventDefault(),i.stopPropagation(),console.log("dropFolderElement event ->",e.widget_id),!J)return console.log("No dragged item found, skipping drop"),!1;document.querySelector(".file-description.dragging-area")?.classList.remove("dragging-area");let t=i.target;if(!t.classList.contains("mftsccs-marking-element")&&!t.classList.contains("fslayout-col")&&t.id!=="builder-workarea"){const r=document.getElementById("builder-workarea"),c=t.closest(".mftsccs-marking-element"),d=t.closest(".fslayout-col");t=c||d||r}if((J.contains(t)||J===t)&&(console.warn("Dropzone is the dragged item or its descendant, falling back to builder-workarea"),t=document.getElementById("builder-workarea")),!t)return console.error("Invalid dropzone"),!1;console.log("dropzone ->",t),t?.classList.remove("dragging-area");let a=Tt(i,e);if(!a.status)return alert(a.message),J=null,!1;const s=e.dataType||e.type||e.data_type,o=s==="photo"||s==="Image"||s==="img",l=s==="widget"||e.type==="widget"||e.fileId||e.sourceElementId;if(o){let r,c=!1;if(J&&J.tagName&&J.tagName.toLowerCase()==="img"){if(console.log("Moving existing image element"),c=!0,r=J,r.parentElement===t&&console.log("Image is already in this dropzone, just repositioning"),!(r instanceof Node))return console.error("draggedItem is not a valid DOM node:",r),J=null,!1;(!r.hasAttribute("style")||!r.style.width)&&r.setAttribute("style","width: 200px;")}else{console.log("Creating new image element from data");const h=e?.imageUrl||e?.src||e?.url||"/images/img-placeholder.jpg";if(t.querySelectorAll(`img[src="${h}"]`).length>0)return console.log("Image already exists in dropzone, preventing duplicate"),J=null,!1;r=document.createElement("img"),r.setAttribute("src",h),r.setAttribute("style","width: 200px;")}let d=_e.generateUUID();r.setAttribute("element-info-id",d);const u=t.classList.contains("file-item")&&t.classList.contains("photo-file")&&t.classList.contains("dragging");let g=r;if(u){console.log("Dropzone is photo-file container, wrapping image in div");const h=document.createElement("div");h.appendChild(r),g=h}try{if(c){console.log("Repositioning existing image element");const h=u&&r.parentElement?.parentElement||r.parentElement,p=u?r.parentElement:r;h&&h!==t&&p&&h.removeChild(p)}j?.position==="top"&&t?.children?.length&&j?.element?t.contains(j.element)&&!g.contains(j.element)&&g!==j.element?(t.insertBefore(g,j.element),console.log("Inserted element before indicator element (top position)")):(console.warn("Invalid indicator element for top position, appending to dropzone"),t.appendChild(g)):j?.position==="bottom"&&j?.element?t.contains(j.element)&&!g.contains(j.element)&&g!==j.element?(j.element.insertAdjacentElement("afterend",g),console.log("Inserted element after indicator element (bottom position)")):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),t.appendChild(g)):(console.log("Appending element to dropzone (default position)"),t.appendChild(g)),console.log("Element successfully positioned in dropzone:",t)}catch(h){console.error("Error positioning element:",h.message);try{t.appendChild(g),console.log("Fallback: Element appended to dropzone")}catch(p){return console.error("Cannot append element:",p),J=null,!1}}r.removeAttribute("element-info-id");const m=i.target?.parentElement?.closest(".added-widget-container")||i.target?.parentElement?.closest(".edited-widget-container");if(console.log("parentWidgetOfSelectedElement ->",m),m){const h=m.id,p=Fe(f?.staticWidgetTree,h),v=m.querySelector(".mftsccs-marking-element");return v&&(p.html=v.innerHTML,await X(p)),J=null,!1}return Ks(),J=null,!0}else if(l){let r=Tt(i,e);if(console.log("isDropValid ->",r),!r.status)return alert(r.message),J=null,!1;if(e.sourceElementId){const w=e.sourceElementId||e.fileId;console.log("sourceElement ->",w)}let c=e.widget_id;t.classList.remove("dragging-area");const d=document.createElement("div");d.classList.add("wb-initial-empty"),d.style.display="block",d.style.marginBottom="10px",d.setAttribute("data-widget-id",c);const u=_e.generateUUID();d.id=`widget-${u}`;const g=await I();console.log("profileData ->",g);let m=t.classList.contains("publicWidgetRouter"),h=await re(c);if(console.log("widgetTree ->",h),!m){const w=await Ee(c.id,g.token);console.log("latestVersionOfWidget ->",w),h=await re(w?w.widgetId:Number(c)),console.log("widgetTree ->",h)}h?.children?.length&&await Ut(h);const p=q.clearDraggedWidget(h),v=await Te(p,d);p.wrapper=d.id;try{j?.position==="top"&&t?.children?.length&&j?.element?t.contains(j.element)&&!d.contains(j.element)&&d!==j.element?(t.insertBefore(d,j.element),console.log("Inserted widget container before indicator element (top position)")):(console.warn("Invalid indicator element for top position, appending to dropzone"),t.appendChild(d)):j?.position==="bottom"&&j?.element?t.contains(j.element)&&!d.contains(j.element)&&d!==j.element?(j.element.insertAdjacentElement("afterend",d),console.log("Inserted widget container after indicator element (bottom position)")):(console.warn("Invalid indicator element for bottom position, appending to dropzone"),t.appendChild(d)):(console.log("Appending widget container to dropzone (default position)"),t.appendChild(d))}catch(w){console.error("Error positioning widget container:",w.message);try{t.appendChild(d),console.log("Fallback: Widget container appended to dropzone")}catch(y){return console.error("Cannot append widget container:",y),J=null,!1}}const _=i.target?.parentElement?.closest(".added-widget-container")||i.target?.parentElement?.closest(".edited-widget-container");if(console.log("parentWidgetOfSelectedElement ->",_),_){const w=_.id;Fe(f?.staticWidgetTree,w).children.push(p);const S=document.getElementById(w).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=S?.innerHTML,f.selectedStaticWidgetTreeInfo.widgetTree.css=S?.style.cssText,await X(f.selectedStaticWidgetTreeInfo.widgetTree),J=null,!1}const C=await dt();console.log("widgetHTMLToUpdate ->",C),f.staticWidgetTree.html=C,f.staticWidgetTree?.children?.push(p);const T=f.widgetTree.children.indexOf(p);return f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[T],isChildWidget:!0,childWidgetIndex:T},await X(p,!1,v),q.enableWidgetButtons(),J=null,!0}else return console.error("Unsupported data type, skipping drop. Data:",JSON.stringify(e,null,2)),J=null,!1}function Ks(){document.querySelectorAll(".mftsccs-marking-element img").forEach(i=>{i.setAttribute("draggable","true"),i.addEventListener("dragstart",e=>{e.stopPropagation(),Wt=Date.now(),console.log("Drag started for image:",i)}),i.addEventListener("dragend",e=>{e.stopPropagation(),console.log("Drag ended for image:",i),setTimeout(()=>{Wt=null},100)})})}function Ys(){Wt=null,J=null,console.log("dragStartTime",Wt)}async function Rt(i,e=!1,n,t){if(!i&&e&&n&&t){const r=await re(Number(n)),c=en(t,n,!1,null);let d=await Te(r,c);r.wrapper=c?.id;const u=await Ze();f.staticWidgetTree.html=u,f.staticWidgetTree?.children?.push(r),X(r,!0,d);return}i.preventDefault(),i.stopPropagation(),document.querySelector(".content-target")?.classList.remove("dragging-area");let s=i.dataTransfer.getData("text");if((r=>{try{return JSON.parse(r),!0}catch{return!1}})(s))if(Object.keys(JSON.parse(s)).includes("widgetcodeId")){const r=JSON.parse(s);let c=Tt(i,r);const d=r.className.split(" ");if(!c.status){alert(c.message);return}const u=JSON.parse(s);if(u.sourceElementId){const S=document.getElementById(u.sourceElementId.toString());if(S){i.target.insertBefore(S,c.elementBelowDrag);return}}let g=ss(u),m=i.target;m.classList.remove("dragging-area");const h=await I();let p=!1;d.includes("publicWidgetRouter")&&(p=!0);let v=null,_=null;if(p){v=await re(Number(g)),_=en(m,g,!1,c.elementBelowDrag);const S=document.getElementById("widgetNameValue");S&&v?.name&&(S.value=v?.name);const b=document.getElementById("widget-builder");b&&v?.name&&(b.textContent="Widget Builder Panel: "+v?.name)}else{const S=await Ee(g,h.token);v=await re(S?S.widgetId:Number(g));const b=document.getElementById("widgetNameValue");b&&v?.name&&(b.value=v?.name);const L=document.getElementById("widget-builder");L&&v?.name&&(L.textContent="Widget Builder Panel: "+v?.name),v?.children?.length&&await Ut(v),_=en(m,S?S.widgetId:g,!1,c.elementBelowDrag),console.log("newDropzone ->",_)}const C=q.clearDraggedWidget(v);let T=await Te(C,_);C.wrapper=_?.id;const w=i.target?.parentElement?.closest(".added-widget-container")||i.target?.parentElement?.closest(".edited-widget-container");if(w){const S=w.id;Fe(f?.staticWidgetTree,S).children.push(C);const A=document.getElementById(S).querySelector(".mftsccs-marking-element");return f.selectedStaticWidgetTreeInfo.widgetTree.html=A?.innerHTML,X(f.selectedStaticWidgetTreeInfo.widgetTree),!1}const y=await Ze();f.staticWidgetTree.html=y,f.staticWidgetTree?.children?.push(C);const E=f.widgetTree.children.indexOf(C);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree.children[E],isChildWidget:!0,childWidgetIndex:E},X(C,!1,T),q.enableWidgetButtons()}else{const r=JSON.parse(s);console.log("objData ->",r);const c=i.target;let d=Tt(i,r);if(d.status){let p=_e.generateUUID();const v=Mr(p,r),_=document.createElement("div");_.innerHTML=v,j?.position==="top"&&c?.children?.length?c.insertBefore(_.firstChild,j?.element):j?.position==="bottom"?j?.element?.insertAdjacentElement("afterend",_.firstChild):c.appendChild(_.firstChild),i.target.classList.remove("dragging-area");let T=c.querySelector(`[element-info-id='${p}']`);r.data_type=="layout"?T.querySelectorAll(".fslayout-col").forEach(y=>{y.classList.add("wb-initial-empty")}):(T.classList.add("wb-initial-empty"),r?.data_type==="img"&&(T?.setAttribute("src","/images/img-placeholder.jpg"),T?.setAttribute("style","width: 200px;"))),T.removeAttribute("element-info-id"),r?.data_type==="img"&&(T?.setAttribute("src","/images/img-placeholder.jpg"),T?.setAttribute("style","width: 200px;"))}else alert(d.message);const u=i.target?.parentElement?.closest(".added-widget-container")||i.target?.parentElement?.closest(".edited-widget-container");if(u){const p=u.id,v=Fe(f?.staticWidgetTree,p),_=u.querySelector(".mftsccs-marking-element");return v.html=_?.innerHTML,await X(v),i.dataTransfer.clearData(),!1}const g=document.querySelector(".content-target"),h=(await Le(g,"div.mftsccs-marking-element")).innerHTML.trim();f.widgetTree.html=h;try{i.dataTransfer.clearData()}catch(p){console.error("error in clearing data",p.message)}return!0}else{const r=R.staticElement,c=i.target;c.classList.remove("dragging-area"),j?.position==="top"&&c?.children?.length?c.insertBefore(r,j?.element):j?.position==="bottom"?j?.element?.insertAdjacentElement("afterend",r):c.appendChild(r),_t();const d=await Ze();f.staticWidgetTree.html=d}}function Xs(i){const s=new DOMParser().parseFromString(i,"text/html").body.querySelector("div")?.id,l=document.getElementById(s)?.parentElement?.closest(".added-widget-container"),r=l?.id,c=l?.querySelectorAll(".widget_container_disabled");return c?.length&&c?.forEach(d=>{const u=_e.generateUUID();d.id=`wdgt${u}`}),r?.toString()}async function Ut(i){return Array.isArray(i.children)&&i.children.forEach(e=>{$i(e,i),e.children.length&&Ut(e)}),i}function $i(i,e){const n=i.wrapper,s=new DOMParser().parseFromString(e?.html,"text/html").body,o=s.querySelector(`#${n}`);if(!o)return i;const r=`wdgtcopy${_e.generateUUID()}`;return o.id=r,i.wrapper=r,e.html=s.innerHTML.toString(),i}const eo=Object.freeze(Object.defineProperty({__proto__:null,checkWrapper:Vt,dragElement:zs,dragEndWidgetElement:Gs,dragOverWidgetElement:Qs,dragStartWidgetElement:Js,dropElement:Rt,dropFolderElement:Bi,dropWidgetElement:Zs,findChildByWrapper:Fe,getChildWrapperId:Xs,getChildrenWrapperId:$i,onDragEnter:qs,onDragLeave:Fs,onDragOver:Os,onDragStart:Ds,onDrop:Rs,onWidgetDragStart:Ns,removeChildByWrapper:Ct,removeElement:Us,resetDragState:Ys,updateAllChildWidgets:Ut},Symbol.toStringTag,{value:"Module"})),to=[{name:"align-items",type:"array",value:"start, center, end",ref:"Align Items"},{name:"text-align",value:"left, right, center",type:"array",validationErrorMessage:"",validationStatus:"valid",ref:"Text Align"},{name:"class",value:"",type:"string",validationErrorMessage:"",validationStatus:"valid",ref:"Class"}],Cn=[{id:1,name:"1",type:"layout",icon:"1.png",html:'<div class="row fslayout-row fslayout-row-1"><div class="fslayout-col col col-md-12"></div></div>'},{id:2,name:"1-1",type:"layout",icon:"1-1.png",html:'<div class="row fslayout-row fslayout-row-2"><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-6"></div></div>'},{id:3,name:"1-2",type:"layout",icon:"1-2.png",html:'<div class="row fslayout-row fslayout-row-3"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-8"></div></div>'},{id:4,name:"2-1",type:"layout",icon:"2-1.png",html:'<div class="row fslayout-row fslayout-row-4"><div class="fslayout-col col col-md-8"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:5,name:"1-1-1",type:"layout",icon:"1-1-1.png",html:'<div class="row fslayout-row fslayout-row-5"><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div><div class="fslayout-col col col-md-4"></div></div>'},{id:6,name:"1-2-1",type:"layout",icon:"1-2-1.png",html:'<div class="row fslayout-row fslayout-row-6"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-6"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:7,name:"1-1-1-1",type:"layout",icon:"1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-7"><div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div> <div class="fslayout-col col col-md-3"></div><div class="fslayout-col col col-md-3"></div></div>'},{id:8,name:"1-1-1-1-1",type:"layout",icon:"1-1-1-1-1.png",html:'<div class="row fslayout-row fslayout-row-8"><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div><div class="fslayout-col col"></div></div>'}];class Hi{constructor(){}async getLayoutListHTML(){return Cn.map(n=>`
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
      `).join("")}async getTemplateLayoutsHTML(){const e=await mr();if(!e||e.length===0)return'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No templates available</p></li>';const n=await I(),t=n?.entityId===101651686||n?.entityId===101279491;return e.map(a=>a.id?`
        <li class="template-item">
          <div class="template-card" 
               draggable="true" 
               ondragstart="_dragService.onWidgetDragStart(event)" 
               data-widgetId="${a.id}">
            <div class="template-image-container">
              <img src="${a.thumbnail||"/images/default-template.png"}" 
                   alt="${a.name}" 
                   class="template-image"
                   draggable="false">
            </div>
            <div class="template-name">
              ${a.name||"Unnamed Template"}
              ${t?`
                <span class="material-symbols-outlined delete-template-icon" 
                     data-templateid="${a.id}" 
                     onclick="removeFromTemplate(event)" 
                     title="Remove from Templates">
                  delete
                </span>`:""}
            </div>
          </div>
        </li>
      `:"").join("")}}async function Ee(i,e){let n=new z;n.composition=i,n.fullLinkers=["the_widget_recent","the_widget_latest"],n.inpage=100;let t=new z;t.fullLinkers=["the_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_version","the_widget_origin"],t.inpage=100;const s=await he([n,t],e),l=await Ie(i,"the_widget_recent"),r=s?.data?.the_widget?.the_widget_recent||s?.data?.the_widget?.the_widget_latest||[],c=s?.data?.the_widget?.the_widget_latest||null;if(r.length){const d=r[0],u=d?.data.the_widget.the_widget_name?.[0].data.the_name,g=d?.data.the_widget.the_widget_html?.[0].data.the_html,m=d?.id,h=d?.data.the_widget.the_widget_css?.[0].data.the_css,p=d?.data.the_widget.the_widget_js?.[0].data.the_js,v=d?.data.the_widget.the_widget_timestamp?.[0].data.the_timestamp,_=d?.data.the_widget.the_widget_version?.[0].data.the_version,C=d?.data.the_widget.the_widget_origin?.[0].data.the_origin|i;return{widgetName:u,widgetHTML:g,widgetCSS:h,widgetJS:p,widgetTimestamp:v,widgetVersion:Number(_||c?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version),widgetId:m||c.id,origin:Number(C),connectionIdLatest:l,publishedWidgetVersion:c?.[0]?.data?.the_widget?.the_widget_version?.[0]?.data?.the_version}}else return null}const q=(()=>{const i=async()=>{const w=document.getElementById("fslayout-template-container");if(w){w.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading...</span>
          </div>
        </li>`;const E=await new Hi().getTemplateLayoutsHTML();w.innerHTML=E}},e=async()=>{const w=document.getElementById("public-widget-list-container");if(w){const y=await fn();!y||y.trim()===""?w.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No public widgets</p>
            </li>
          `:w.innerHTML=y||""}},n=async()=>{const w=document.getElementById("folder-widget-container");if(w){const y=await ur();!y||y.trim()===""?w.innerHTML=`
            <li class="list-unstyled">
              <p class="text-center my-3 text-secondary">No folder widgets</p>
            </li>
          `:w.innerHTML=y||""}},t=async()=>{const w=await hn();cn.navbar.setSavedWidgets(w);const y=document.getElementById("saved-widget-list-container");y&&(!w||w.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=w||"")},a=async()=>{const w=await hn();cn.navbar.setSavedWidgets(w);const y=document.getElementById("folder-widget-container");y&&(!w||w.trim()===""?y.innerHTML=`
                  <li class="list-unstyled">
                    <p class="text-center my-3 text-secondary">No saved widgets</p>
                  </li>
                `:y.innerHTML=w||"")},s=async(w,y,E,S,b,L,A)=>{if(S&&!b&&!L||b&&!S&&!L||L&&!A){console.error("creating widget copy argument required.");return}let x=null;x=await re(w.id);let k=null,P=null,B=[],$=0;L||(k=await Ee(w.id,E),console.log("latestVersionWidgetInfo",k),P=k?.origin?k?.origin:w.id,$=k?.widgetVersion?k?.widgetVersion:0,B=k?.connectionIdLatest?k.connectionIdLatest:null);const U={type:b?b.mainWidgetTypevalue:x.type,after_render:b?b.addeventsScript:x.after_render,before_render:b?b.onmountScript:x.before_render,update:b?b.onupdateScript:x.update,mount_child:b?b.mountchildwidgetsScript:x.mount_child,name:L?A:x?.name,html:L?x.html:b?b.widgetHTMLToUpdate:x.html,clean:b?b.widgetCleanHTMLToUpdate:x?.clean,css:b?b.widgetCSSToUpdate:x?.css?.toString(),js:b?b.widgetJSToUpdate:x?.js?.toString(),timestamp:b?b.widgetTimestampToUpdate:new Date().toISOString(),...!L&&{version:$?$+1:1,origin:P}},ee=await Q(P),Z=await O("widget",y,U);if(b?.assistant?.id){const F=await O("assistant",y,b?.assistant);await V(Z,F,"assistant")}if(b?.library?.css?.length){const F=b?.library?.css;for(let K=0;K<F.length;K++){const ne=await O("css_library",y,F[K]);await V(Z,ne,"s_css_library")}}if(b?.library?.js?.length){const F=b?.library?.js;for(let K=0;K<F.length;K++){const ne=await O("js_library",y,F[K]);await V(Z,ne,"s_js_library")}}if(b?.custom_functions?.length){const F=b?.custom_functions;for(let K=0;K<F.length;K++){const ne=await O("custom_function",y,F[K]);await V(Z,ne,"s_custom_function")}}if(!S&&!b&&L&&x?.children.length&&f.createChildWidget(x.children,Z),await V(ee,Z,"s_copy"),B&&B.length)for(let F=0;F<B.length;F++)await Me(B[F].id);return await V(ee,Z,"recent"),Z},o=async w=>{w.stopPropagation();const y=Number(w.target.dataset.pubwidid);if(confirm("do you want to remove your widget from public?"))try{if(y){W.infoMessageToast("Deleting your widget from public...",0);const S=await Ie(y,"the_public_widget_s_widget",!0);await Me(S[0].id),await be(y,"the_widget_description"),await be(y,"the_widget_thumbnail"),await be(y,"the_widget_public_name"),await e(),await n(),await t(),await a(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{W.successfullToast("Widget Removed From Public")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Removing Failed"),new Error("Removing Failed")}},l=async w=>{w.stopPropagation();const y=prompt("What would you like to name this imported widget?");if(!y||!y.trim())return;const E=Number(w.target.dataset.pubwidid);if(E){W.infoMessageToast("Importing widget...",0);try{const S=document.querySelector(".infoMessageToast"),b=await re(E);f.widgetTree=b,await f.saveWidget(y),await t(),await a(),S?.remove(),W.successfullToast("Widget Imported Successfully")}catch{throw document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Saving Failed"),new Error("Saving Failed")}}},r=async w=>{w.stopPropagation();const y=Number(w.target.dataset.templateid);if(confirm("Do you want to remove your widget from Templates?"))try{if(y){W.infoMessageToast("Deleting your widget from templates...",0);const S=await Ie(y,"the_template_widget_s_widget",!0);await Me(S[0].id),await be(y,"the_widget_template_thumbnail"),await be(y,"the_widget_template_name"),await i(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{W.successfullToast("Widget Removed From Templates")},300)}}catch{throw document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Removing Failed"),new Error("Removing Failed")}},c=()=>document.querySelector(".content-target").innerHTML.trim()!=="",d=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E&&E.classList.remove("disabled")})},u=()=>{["#preview-btn","#download-wdgt-btn","#widget-btn-wrapper > button"].forEach(y=>{const E=document.querySelector(y);E?E.classList.add("disabled"):console.log("button not found",y)})},g=w=>{const y=document.createElement("div");y.innerHTML=w.html;const E=y.querySelectorAll("div[data-elementid]");return E?.length&&E.forEach(S=>{S.className="widget_container_disabled"}),w.html=y.innerHTML,w.html=w.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,S=>S.replace(/\btrue\b/g,"false").trim()),w.html=w.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,S=>S.replace(/\bhover-element\b/g,"").trim()),w.html=w.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,S=>S.replace(/\bwb-block\b/g,"").trim()),w.html=w.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,S=>S.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),w.html=w.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,S=>S.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),w};async function m(w){try{if(W.infoMessageToast("Updating your widget preference",0),w){if(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId){const E=await Ie(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId,"the_child_widget_use_latest");if(E.length!==1&&E.length>0)for(let S=1;S<E.length;S++){const b=E[S];await Me(b.id)}if(w){if(!E.length){const S=await Q(f.selectedStaticWidgetTreeInfo.widgetTree.sChildId);f.userId||await f.getUserDetails();const b=await te("use_latest","true",!1,f.userId,999);await V(S,b,"use_latest"),await N.SyncDataOnline()}}else if(E.length>0)for(let S=0;S<E.length;S++){const b=E[S];await Me(b.id)}}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0;await T(f.selectedStaticWidgetTreeInfo.widgetTree.origin,f.entityId,!0)()}else f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1;W.successfullToast("Widget Preference Updated.")}catch(y){throw y}finally{document.querySelector(".infoMessageToast")?.remove()}}async function h(w,y,E){y.checked||E?(w.style.display="none",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0):(w.style.display="block",f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!1),E||await m(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest)}const p=new Map,v=()=>{const w=document.getElementById("widget-version");if(!w)return;w.innerHTML="",w.classList.remove("d-none"),w.classList.add("d-flex","flex-column","gap-2");const y=document.createElement("div");y.classList.add("d-flex","justify-content-between","align-items-center");const E=document.createElement("label");E.setAttribute("for","widgetVersionValue"),E.textContent="Widget Versions:";const S=document.createElement("div");S.className="form-check form-switch mb-0 d-flex justify-content-center align-items-center",S.id="useLtsSwitch";const b=document.createElement("input");b.type="checkbox",b.className="form-check-input",b.id="alwaysUseLTS";const L=document.createElement("label");L.className="form-check-label ms-2",L.setAttribute("for","alwaysUseLTS"),L.textContent="Use LTS",S.appendChild(b),S.appendChild(L),y.appendChild(E),y.appendChild(S);const A=document.createElement("select");return A.name="input-widgetVersionValue",A.id="widgetVersionValue",A.classList.add("form-control"),f.widgetTree!==f.selectedStaticWidgetTreeInfo.widgetTree?(w.appendChild(y),f.selectedStaticWidgetTreeInfo.widgetTree.useLatest&&(b.checked=!0,h(A,b,!0)),b.addEventListener("change",async()=>{try{await h(A,b,!1)}catch(x){console.error("useLtsError",x),x instanceof Error&&W.errorToast(x.message),b.checked=!b.checked}})):w.appendChild(E),w.appendChild(A),A},_=()=>{const w=document.getElementById("widget-version");if(!w){console.warn("Widget version container not found");return}const y=document.getElementById("widgetVersionValue");y&&(p.forEach(E=>{y.removeEventListener("change",E)}),p.clear()),w.innerHTML="",w.classList.remove("d-flex"),w.classList.add("d-none")},C=async(w,y,E)=>{try{const S=await I(),b=document.getElementById("widgetVersionValue");b&&p.forEach($=>{b.removeEventListener("change",$)});const L=v();if(!L){console.error("Failed to create select element");return}const A=await Ee(w,S?.token),x=A?.widgetVersion,k=new Date(A?.widgetTimestamp).toLocaleString(),P=new Date(E).toLocaleString();if(console.log("this is the latest version",A),A){const $=document.createElement("option");$.value="original",$.textContent=`Original ${y==="original"?`(Current) (${P})`:""}`,console.log("latest version initializewidgetversions"),(!A||!A.publishedWidgetVersion)&&($.textContent+=" (Published)"),L.appendChild($);for(let U=0;U<A.widgetVersion;U++){const ee=document.createElement("option");ee.value=`${U+1}`,ee.textContent=`Version ${U+1} ${U+1==Number(y)?"(Current)"+(x===U+1?` (${k})`:` (${P})`):""}`,U+1==Number(y)&&(ee.selected=!0),A.publishedWidgetVersion&&U+1==Number(A.publishedWidgetVersion)&&(ee.textContent+=" (Published)"),L.appendChild(ee)}}else{const $=document.createElement("option");$.value="",$.textContent=`Original (current) (${P})`,$.selected=!0,L.appendChild($)}if(p.has(w)){const $=p.get(w);L.removeEventListener("change",$),p.delete(w)}const B=T(w,S.entityId);p.set(w,B),L.addEventListener("change",B),console.log(`Initialized widget version for widget ID: ${w}`)}catch(S){console.error("Error initializing widget versions:",S)}},T=(w,y,E)=>{async function S(b){console.log(`CHECK: ${w}`),b&&b.preventDefault();let L="";if(E&&E===!0){f.token||await f.getUserDetails();const x=await Ee(w,f.token);x&&(L=x.publishedWidgetVersion)}else{const k=document.getElementById("widget-version").querySelector("select");console.log("entity id for version",y),L=k?.value||""}if(!L)return;if(f.selectedStaticWidgetTreeInfo.isChildWidget)try{let x;if(L==="original"){x=w;const P=await re(x);k(P)}else{let P=new H;P.typeConnection="the_widget_version",P.name="version";let B=new Ne;B.type="the_version",B.search=L,B.logicoperator="=",B.name="versionFilter",B.operateon="version",B.composition=!1;const $=new H;$.typeConnection="the_widget_s_copy",$.name="copywidgets",$.freeschemaQueries=[P],$.selectors=["the_widget_name","the_widget_type","the_widget_html","the_widget_css","the_widget_js","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_origin","the_widget_version"];const U=new H;U.conceptIds=[w],U.freeschemaQueries=[$],U.inpage=100,U.filters=[B],U.filterLogic="( versionFilter )",U.outputFormat=fe,ye(U,"").subscribe(async ee=>{try{const F=ee?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;if(!F){W.errorToast("Widget version not found");return}const K=await re(F);k(K)}catch(Z){console.error("Error in widget version callback:",Z),W.errorToast("Error updating widget version")}})}async function k(P){const B=JSON.parse(JSON.stringify(f.staticWidgetTree)),U=f.selectedStaticWidgetTreeInfo.widgetTree.wrapper,ee={...P,wrapper:U};let Z=!1;const F=ne=>{for(let xe=0;xe<ne.length;xe++){if(ne[xe].wrapper===U){console.log("check: ",ne[xe].wrapper,U),ne[xe]=ee,Z=!0;break}if(ne[xe].children&&ne[xe].children.length>0&&(F(ne[xe].children),Z))break}};if(F(B.children),!Z){console.error("Could not find child widget to update"),W.errorToast("Failed to update widget");return}f.widgetTree=B,f.selectedStaticWidgetTreeInfo.widgetTree=ee,E&&(f.selectedStaticWidgetTreeInfo.widgetTree.useLatest=!0);const K=document.getElementById(U);if(K){K.innerHTML="",await Te(ee,K);let ne;L==="original"?ne=w:ne=P.id,K.setAttribute("data-widgetid",ne.toString()),X(ee,!1),ce(),W.successfullToast("Widget version updated")}}}catch(x){console.error("Error updating child widget version:",x),W.errorToast("Error updating widget version")}else if(L==="original")await Oe(null,w,w),ce();else{let x=new H;x.typeConnection="the_widget_version",x.name="version";let k=new Ne;k.type="the_version",k.search=`${L}`,k.logicoperator="=",k.name="versionFilter",k.operateon="version",k.composition=!1;const P=new H;P.typeConnection="the_widget_s_copy",P.name="copywidgets",P.freeschemaQueries=[x],P.selectors=["the_widget_name","the_widget_type"];const B=new H;B.conceptIds=[w],B.freeschemaQueries=[P],B.inpage=100,B.filters=[k],B.filterLogic="( versionFilter )",B.outputFormat=fe;let $=0;await ye(B,"").subscribe(async U=>{const Z=U?.[0]?.data?.the_widget?.the_widget_s_copy?.[0]?.id;Z?$=Z:W.errorToast("widget version not found")}),$&&await Oe(null,$,w)}}return S};return{createWidgetCopy:s,removeMyWidgetFromPublic:o,removeFromTemplate:r,renderSavedWidgets:t,renderBoomWidgets:a,renderPublicWidgets:e,renderTemplateLayouts:i,saveFromPublic:l,checkContent:c,enableWidgetButtons:d,disableWidgetButtons:u,clearDraggedWidget:g,initializeWidgetVersions:C,removeWidgetContainer:_,loadWidgetVersionWith:T}})(),_e=(()=>{const i=async r=>{r.stopPropagation();const c=R?.staticElement;if(c?.classList.contains("content-target"))return;const d=c?.parentElement;if(d&&c){const u=c.previousElementSibling;u?.classList.contains("mftsccs-marking-element")&&u.childNodes.length>1&&alert("insert into marker"),u&&d.insertBefore(c,u)}await n(),Et(),D.updateActionHistories()},e=async r=>{r.stopPropagation();const c=R?.staticElement;if(c?.classList.contains("content-target"))return;const d=c?.parentElement;if(d&&c){const u=c.nextElementSibling;u&&d.insertBefore(u,c)}await n(),Et(),D.updateActionHistories()};async function n(){const r=f.widgetTree,c=f.selectedStaticWidgetTreeInfo.widgetTree;function d(g){for(const m of g.children){if(m===c)return g;const h=d(m);if(h)return h}return null}const u=d(r);if(u){let g=null;u.wrapper&&u.wrapper!="0"?g=document.getElementById(u.wrapper):g=document.getElementById("builder-workarea"),u.html=g.innerHTML}else await le()}function t(){return"xxxxxxxxuuid4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(r){const c=Math.random()*16|0;return(r==="x"?c:c&3|8).toString(16)})}async function a(r,c,d){if(r.childNodes.length){if(r.dataset.widgetid){console.log(parseInt(r.dataset.widgetid),r,r.parentElement,"parameter for widget copy"),await Rt(null,!0,parseInt(r.dataset.widgetid),r.parentElement?r.parentElement:c),le(),pe(),r.remove();return}r.childNodes.forEach(u=>{a(u,c)})}}return{moveUp:i,moveDown:e,copyElement:async r=>{r.stopPropagation();const c=R.staticElement;if(c?.removeAttribute("draggable"),c.classList.contains("content-target"))return;const d=c?.parentElement,u=c.cloneNode(!0);console.log("copied element",u),await a(u,d),u.dataset.widgetid||d.insertBefore(u,c.nextSibling),pe(),await n(),ce(),D.updateActionHistories()},fixContentTargetHeight:(r,c)=>{const d=window.getComputedStyle(c);console.log("wrapper element computed height",d.height,r)},editWidget:async r=>{console.log("event.target",r.target);const c=document.getElementById("edit-widget");c.style.display="none";const u=R.staticElement.closest(".added-widget-container");u.classList.replace("added-widget-container","edited-widget-container");const g=u.querySelectorAll(".widget_container_disabled");g.length&&g.forEach(p=>{p.className="widget_container widget_selected"}),R.staticElement?.removeAttribute("draggable");let m=u.cloneNode(!0);const h=await Le(m,"div.mftsccs-marking-element");f.selectedStaticWidgetTreeInfo.widgetTree.html=h.innerHTML,f.editedWidgets[u.id]=f.selectedStaticWidgetTreeInfo.widgetTree,R.staticElement?.setAttribute("draggable","true"),pe()},generateUUID:t}})();class f{static newWidget=new gt;static staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}};static initialWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}};static selectedStaticWidgetTree;static selectedStaticWidgetTreeInfo;static editedWidgets;static updatedWidgets;static userId;static entityId;static token;static#e=!1;static async getUserDetails(){const e=await I();this.userId=e?.userId,this.entityId=e?.entityId,this.token=e?.token}static resetWidgetTree(){this.staticWidgetTree={id:0,name:"",html:"",css:"",js:"",library:{css:[],js:[]},timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",custom_functions:[],update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0,assistant:{id:"",input:"",type:""}},this.selectedStaticWidgetTreeInfo={widgetTree:this.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},this.editedWidgets={},this.updatedWidgets={}}static get widgetTree(){return this.staticWidgetTree}static set widgetTree(e){this.staticWidgetTree=e,this.initialWidgetTree={...e},(async()=>{try{if(await this.getUserDetails(),this.widgetTree.id>0){const n=document.getElementById("widget-btn-wrapper");n&&n.querySelectorAll("button").forEach(t=>t.disabled=!0),await this.updateOwnerStatus(),this.#e&&n&&n.querySelectorAll("button").forEach(t=>t.disabled=!1)}}catch(n){console.error("error updating widget properties",n)}})()}static async updateWidgetTree(){this.selectedStaticWidgetTreeInfo.isChildWidget&&(this.staticWidgetTree.children[this.selectedStaticWidgetTreeInfo.childWidgetIndex]=this.selectedStaticWidgetTreeInfo.widgetTree)}static async saveWidget(e){await this.getUserDetails();const n={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:e,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString()},t=await O("widget",this.userId,n),a=await Y(this.entityId);if(await G(a,t,"s_widget"),this.staticWidgetTree?.assistant?.id){const s=await O("assistant",this.userId,this.staticWidgetTree?.assistant);await G(t,s,"assistant")}if(this.staticWidgetTree?.library?.css?.length){const s=this.staticWidgetTree?.library?.css;for(let o=0;o<s.length;o++){const l=await O("css_library",this.userId,s[o]);await G(t,l,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const s=this.staticWidgetTree?.library?.js;for(let o=0;o<s.length;o++){const l=await O("js_library",this.userId,s[o]);await G(t,l,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const s=this.staticWidgetTree?.custom_functions;for(let o=0;o<s.length;o++){const l=await O("custom_function",this.userId,s[o]);await G(t,l,"s_custom_function")}}if(this.staticWidgetTree.children.length){const s=this.staticWidgetTree.children;for(let o=0;o<s.length;o++)await this.createChildWidget(s[o],t)}return await N.SyncDataOnline(),t}static async createChildWidget(e,n){const t={after_render:e?.after_render,before_render:e?.before_render,update:e?.update,mount_child:e?.mount_child,css:e?.css,html:e?.html,id:e?.id,js:e?.js,name:e?.name,timestamp:new Date().toISOString(),origin:e?.origin,type:e?.type,version:e?.version,wrapper:e?.wrapper},a=await O("widget",this.userId,t),s={wrapper:e?.wrapper,type:e?.type,parent:a.id},o=await O("child_widget",this.userId,s);if(await G(n,o,"s_child"),await G(o,a,"info"),e.useLatest&&e.useLatest===!0){const l=await te("use_latest","true",!1,this.userId,999);await G(o,l,"use_latest")}if(e?.library?.css?.length){const l=e?.library?.css;for(let r=0;r<l.length;r++){const c=await O("css_library",this.userId,l[r]);await G(a,c,"s_css_library")}}if(e?.library?.js?.length){const l=e?.library?.js;for(let r=0;r<l.length;r++){const c=await O("js_library",this.userId,l[r]);await G(a,c,"s_js_library")}}if(e?.custom_functions?.length){const l=e?.custom_functions;for(let r=0;r<l.length;r++){const c=await O("custom_function",this.userId,l[r]);await G(a,c,"s_custom_function")}}if(e?.children?.length)for(let l=0;l<e?.children?.length;l++)await this.createChildWidget(e.children[l],a)}static async updateOwnerStatus(){try{const e=await Q(this.entityId),n=await Q(this.staticWidgetTree.origin||this.staticWidgetTree.id),t=await on(e,n,"s_widget","the_entity_s_widget");if(console.log("updating canupdate status",t,e.id,n.id),t.length)this.#e=!0;else{const a=await pi(this.staticWidgetTree.origin||this.staticWidgetTree.id,"the_page_body",void 0,void 0,!0);if(console.log("canupdate connectionPage",a,"body widget id",this.staticWidgetTree.id),a.length){const s=await Q(a[0].id);(await on(e,s,"s_page","the_entity_s_page")).length&&(this.#e=!0),console.log("canupdate page",e.id,s.id)}}console.log("canupdate",this.#e)}catch(e){throw e}}static async updateWidget(){await this.getUserDetails();try{if(!this.#e)throw new Error("You cannot update this widget.");const e=await Q(this.staticWidgetTree.origin?this.staticWidgetTree.origin:this.staticWidgetTree.id),n={mainWidgetTypevalue:this.staticWidgetTree.type,widgetHTMLToUpdate:this.staticWidgetTree.html,widgetCSSToUpdate:this.staticWidgetTree.css,widgetJSToUpdate:this.staticWidgetTree.js,widgetTimestampToUpdate:new Date().toISOString(),widgetCleanHTMLToUpdate:"",mountchildwidgetsScript:this.staticWidgetTree.mount_child,addeventsScript:this.staticWidgetTree.after_render,onupdateScript:this.staticWidgetTree.update,onmountScript:this.staticWidgetTree.before_render,library:this.staticWidgetTree?.library,assistant:this.staticWidgetTree?.assistant,custom_functions:this.staticWidgetTree?.custom_functions},t=await q.createWidgetCopy(e,this.userId,this.token,!0,n);if(this.staticWidgetTree.children.length){const a=this.staticWidgetTree.children;for(let s=0;s<a.length;s++)await this.createChildWidget(a[s],t)}return await N.SyncDataOnline(),this.initialWidgetTree={...this.widgetTree},t}catch(e){throw e}}static async savePageWidget(e,n){const t={after_render:this.staticWidgetTree?.after_render,before_render:this.staticWidgetTree?.before_render,update:this.staticWidgetTree?.update,mount_child:this.staticWidgetTree?.mount_child,name:n,html:this.staticWidgetTree?.html,css:this.staticWidgetTree?.css,js:this.staticWidgetTree?.js,type:this.staticWidgetTree?.type,timestamp:new Date().toISOString()},a=await O("widget",this.userId,t);if(this.staticWidgetTree?.library?.css?.length){const o=this.staticWidgetTree?.library?.css;for(let l=0;l<o.length;l++){const r=await O("css_library",this.userId,o[l]);await G(a,r,"s_css_library")}}if(this.staticWidgetTree?.library?.js?.length){const o=this.staticWidgetTree?.library?.js;for(let l=0;l<o.length;l++){const r=await O("js_library",this.userId,o[l]);await G(a,r,"s_js_library")}}if(this.staticWidgetTree?.custom_functions?.length){const o=this.staticWidgetTree?.custom_functions;for(let l=0;l<o.length;l++){const r=await O("custom_function",this.userId,o[l]);await G(a,r,"s_custom_function")}}if(this.staticWidgetTree.children.length){const o=this.staticWidgetTree.children;for(let l=0;l<o.length;l++)await this.createChildWidget(o[l],a)}const s=await Q(e);return await G(s,a,oe.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async copyPageWidget(e,n,t){const a={after_render:t?.after_render,before_render:t?.before_render,name:n,html:t?.html,css:t?.css,js:t?.js,type:t?.type,timestamp:new Date().toISOString()},s=await O("widget",this.userId,a);if(t?.library?.css?.length){const o=t?.library?.css;for(let l=0;l<o.length;l++){const r=await O("css_library",this.userId,o[l]);await G(s,r,"s_css_library")}}if(t?.library?.js?.length){const o=t?.library?.js;for(let l=0;l<o.length;l++){const r=await O("js_library",this.userId,o[l]);await G(s,r,"s_js_library")}}if(t?.custom_functions?.length){const o=t?.custom_functions;for(let l=0;l<o.length;l++){const r=await O("custom_function",this.userId,o[l]);await G(s,r,"s_custom_function")}}if(t.children.length){const o=t.children;for(let l=0;l<o.length;l++)await this.createChildWidget(o[l],s)}return await G(e,s,oe.PAGE_WIDGET_LINKER),await N.SyncDataOnline(),!0}static async hasWidgetChanged(e){const n=["html","css","js","after_render","before_render","update","mount_child"],t=r=>r?r.replace(/'/g,'"').replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s+>/g,">").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/\s*([={},;:!\(\)\[\]{}])\s*/g,"$1").replace(/=""/g,"").replace(/\s*\/>/g,">").replace(/\s*;\s*/g,";").replace(/\s*,\s*/g,",").replace(/\s*:\s*/g,":").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/required="(.*?)"/g,"required").replace(/\t/g," ").trim():"";function a(r){let c=0;for(let d=0;d<r.length;d++){const u=r.charCodeAt(d);c=(c<<5)-c+u,c=c&c}return c}const s=(r,c)=>n.some(d=>{const u=t(r[d]),g=t(c[d]),m=a(u),h=a(g),p={js:"/* Write your JavaScript here */",html:"<!-- Write your HTML here -->",css:"/* Write your CSS here */",after_render:"/* Write your code here */",before_render:"/* Write your code here */",update:"/* Write your code here */",mount_child:"/* Write your code here */"};return m!==h?(console.log("value changed",`
value 1
`,u,`
value 2
`,g),!(u==""||u==p[d])):!1}),o=(r,c)=>r.length!==c.length?!0:r.some((d,u)=>s(d,c[u])||o(d.children,c[u].children)),l={id:0,name:"",html:"",css:"",js:"",timestamp:"",widgetId:0,type:"",clean:"",after_render:"",before_render:"",update:"",mount_child:"",children:[],wrapper:"",widget:this.newWidget,origin:0,version:0};return e?(console.log("checking tree static",this.staticWidgetTree,"to initial tree",this.initialWidgetTree),s(this.staticWidgetTree,this.initialWidgetTree)||o(this.staticWidgetTree.children,this.initialWidgetTree.children)):s(this.staticWidgetTree,l)||o(this.staticWidgetTree.children,l.children)}static async publish(){try{if(!this.#e)throw new Error("You cannot publish this widget.");W.infoMessageToast("Publishing Widget",0);let e=null;const n=await Q(this.staticWidgetTree.origin),t=this.staticWidgetTree.origin||this.staticWidgetTree.id,a=await Ie(t,"the_widget_latest");if(a&&a.length){for(let o=0;o<a.length;o++)await Me(a[o].id);try{const o=await fetch(di.NODE_CACHE_URL+`/api/get-latest-widget?id=${n.id}`,{method:"DELETE"});o.ok||console.error("Failed to delete widget from cache server:",o.status)}catch(o){console.log("error removing widget from cache server",o)}}this.staticWidgetTree.origin&&(e=await Q(this.staticWidgetTree.id),await G(n,e,"latest"),await N.SyncDataOnline()),await q.initializeWidgetVersions(this.staticWidgetTree.origin||this.staticWidgetTree.id,this.staticWidgetTree.version?.toString()||"original",this.widgetTree?.timestamp),document.querySelector(".infoMessageToast")?.remove(),await this.updatePublishedStatus(),W.successfullToast("Widget Published")}catch(e){throw e}}static async updatePublishedStatus(){const e=typeof this.staticWidgetTree.origin=="number"&&!Number.isNaN(this.staticWidgetTree.origin)?this.staticWidgetTree.origin:this.staticWidgetTree.widgetId,n=await Ie(e,"the_widget_latest");if(n.length){const a=n[0].toTheConceptId===this.staticWidgetTree.widgetId;console.log("ami?",a,this.staticWidgetTree),a?this.staticWidgetTree.isPublished=!0:this.staticWidgetTree.isPublished=!1}const t=document.getElementById("publish-widget");t&&(t.style.display="block",this.staticWidgetTree.isPublished?(t.textContent="Published",t.disabled=!0,t.style.cursor="not-allowed"):(t.textContent="Publish This Version",t.disabled=!1,t.style.cursor="pointer"))}}var Wn=(i=>(i.page="page",i.widget="widget",i))(Wn||{});const no=ts("mftsccs-browser"),io=`
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
`,ao=`
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
`,so=`
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
    "mftsccs-browser": "${no}"
  }
}
`,oo=`
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
`,ro=`
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
`,lo=`
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
  `,co=`
  /**
   * This is the environment urls that is needed for the application to get and post data.
   */
  export const environment = {
    baseURL: "${ie.baseURL}",
    baseNodeUrl: "${ie.baseNodeUrl}",
    boomURL: "${ie.boomURL}",
    aiURL: "${ie.aiURL}",
  }
`,uo=`
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
`,zt=i=>`
${i.map(e=>{if(e.importFrom)return`import ${e.content} from "../pages${e.importFrom}";`}).join(`
`)}

type RouteParams = {
  path: any;
  linkLabel?: string;
  content: any;
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  ${i.map(e=>`
    {
        path: "${e.path}",${e.linkLabel?`linkLabel: "${e.linkLabel}",`:""}
        content: ${e.content}
    },`).join(`
`)}
];

export default routes;
`,mo=`
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
`,go=`
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
}`,po=`
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

`;class Jt{async createProject(e,n,t){const a=await O(M.PROJECT_COMP_NAME,n,e),s=await Y(t);return await V(s,a,oe.ENTITY_PROJECT_LINKER),a}async getAllProjects(e){return new Promise(async(n,t)=>{const a=await I(),s=new H;s.typeConnection=`the_entity_${oe.ENTITY_PROJECT_LINKER}`,s.selectors=[`the_${M.PROJECT_COMP_NAME}_name`],s.name="first",s.inpage=100;const o=new H;o.conceptIds=[e||a.entityId],o.name="second",o.inpage=100,o.freeschemaQueries=[s],o.outputFormat=fe,await ye(o,"").subscribe(async l=>{const r=l?.[0]?.data?.the_entity?.[`the_entity_${oe.ENTITY_PROJECT_LINKER}`];n(r)}).catch(l=>{console.error(l);const r=l?.message;W.errorToast(`${r}`,4),t({error:!0,message:r})})})}async getProjectById(e){const t=(await I())?.token;let a=new z;a.composition=e,a.fullLinkers=[`the_${M.PROJECT_COMP_NAME}_name`,`the_${M.PROJECT_COMP_NAME}_main_page`,`the_${M.PROJECT_COMP_NAME}_${oe.PROJECT_PAGE_LINKER}`],a.inpage=100;let s=new z;return s.fullLinkers=[`the_${M.PAGE_COMP_NAME}_title`,`the_${M.PAGE_COMP_NAME}_slug`,`the_${M.PAGE_COMP_NAME}_body`],s.inpage=100,await he([a,s],t)}async updateProjectField(e,n,t){const a=await I(),s=`the_${M.PROJECT_COMP_NAME}_${e}`;await be(t,s);const o=await Q(t),l=await te(`${e}`,`${n}`,!1,a.userId,4,999);await V(o,l,e)}async deleteProject(e){try{return await Se(e),!0}catch(n){return console.error("Failed to delete project:",n),!1}}async addPagesToProject(e,n){try{const t=await Q(e);if(!t){console.error("Project not found");return}await be(e,`the_project_${oe.PROJECT_PAGE_LINKER}`);for(const a of n){const s=await Q(a);if(!s){console.error("Page not found");return}await V(t,s,oe.PROJECT_PAGE_LINKER)}await N.SyncDataOnline()}catch(t){console.error("Failed to add page to project:",t)}}async deletePageFromProject(e,n){try{const t=await Q(e);if(!t){console.error("Project not found");return}const a=await Q(n);if(!a){console.error("Page not found");return}const s=await on(t,a,"",`the_project_${oe.PROJECT_PAGE_LINKER}`);if(!s){console.error("Connection not found");return}await Me(s?.[0]?.id),await N.SyncDataOnline()}catch(t){console.error("Failed to delete page from project:",t)}}async setMainPage(e,n){try{const t=await Q(e);if(!t){console.error("Project not found");return}const a=await Q(n);if(!a){console.error("Page not found");return}await be(e,"the_project_main_page"),await V(t,a,"main_page"),await N.SyncDataOnline()}catch(t){console.error("Failed to set main page:",t)}}}let ue=!1;const ho=async()=>{if(ue)return;ue=!0;let i=new Nt;const e=await Gt(i),n=e?.routesDir,t=e?.pagesDir;await yo(t,n),i.generateAsync({type:"blob"}).then(function(a){let s=document.createElement("a");s.href=URL.createObjectURL(a),s.download="my_files.zip",s.click()}),ue=!1},fo=async i=>{if(ue)return;ue=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new Nt;const t=await Gt(n),a=t?.widgetsDir,s=t?.pagesDir;a&&s&&await wo(i,s,a),t?.routesDir?.file("routes.ts",zt(e)),n.generateAsync({type:"blob"}).then(function(o){let l=document.createElement("a");l.href=URL.createObjectURL(o),l.download="my_files.zip",l.click()}),ue=!1},Gt=async i=>{i.file("index.html",oo),i.file("vite.config.js",io),i.file(".gitignore",ao),i.file("package.json",so),i.file("tsconfig.json",lo);let e=i.folder("public");if(!e){console.log("unable to create public folder");return}let n=i.folder("src");if(!n){console.log("unable to create src folder");return}n?.file("app.ts",ro),n?.file("style.css","");let t=n?.folder("environments");if(!t){console.log("unable to create environments folder");return}t?.file("environment.dev.ts",co);let a=n?.folder("widgets");if(!a){console.log("unable to create widgets folder");return}let s=n?.folder("pages");if(!s){console.log("unable to create pages folder");return}let o=n?.folder("services");if(!o){console.log("unable to create services folder");return}o?.file("widget.service.ts",mo),o?.file("drop.service.ts",go),o?.file("validator.service.ts",po);let l=n?.folder("routes");if(!l){console.log("unable to create routes folder");return}return l?.file("renderRoute.service.ts",uo),{srcDir:n,pagesDir:s,servicesDir:o,publicDir:e,environmentsDir:t,widgetsDir:a,routesDir:l}},yo=async(i,e)=>{if(!i&&!e)return;let n=[];const t=await I(),a=t?.entityId,s=t?.token,o=new z;o.composition=a,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const l=new z;l.inpage=100,l.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const r=await he([o,l],s);if(r?.data.the_entity?.the_entity_s_page?.length)for(let c=0;c<r?.data.the_entity?.the_entity_s_page?.length;c++){const d=r.data.the_entity.the_entity_s_page[c];let u={page:d?.data?.the_page?.the_page_body?.[0]?.id,title:d?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:d?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:d?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:d?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:d?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:d?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!u.page)continue;const g=`${u.slug.split("-").map((p,v)=>v===0?p.charAt(0).toLowerCase()+p.slice(1):p.charAt(0).toUpperCase()+p.slice(1)).join("")}`;n.push({path:`/${u.slug}`,content:`${g}Index`,importFrom:`/${u.slug}/${u.slug}.index.ts`});let m=i?.folder(u.slug);const h=`
import { StatefulWidget, convertWidgetTreeToWidgetWithWrapper } from 'mftsccs-browser';
import { getWidgetFromId } from "../../services/drop.service.ts";

export default class ${g}Index extends StatefulWidget
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
`;m?.file(`${u.slug}.index.ts`,h)}e?.file("routes.ts",zt(n))},wo=async(i,e,n)=>{console.log("widgetsDir",n);const a=(await I())?.token,s=await $n(i,a,!0);let o=e?.folder("home");const l=`
import * as tsccs from "mftsccs-browser";

${s?.css?'import "./home.style.css";':""}
import { getWidgetFromId } from "../../services/drop.service.ts";
import { renderLatestWidget } from 'mftsccs-browser';

export default class homeIndex extends tsccs.StatefulWidget
{

    async  after_render() {        
        // let widgetTree = await getWidgetFromId(${i});
        // tsccs.convertWidgetTreeToWidgetWithWrapper(widgetTree, document.getElementById('app'));
        const appElement = document.querySelector<HTMLDivElement>("#app");
        let widgetTree = await renderLatestWidget(${i}, appElement);
    }
        
     getHtml() {
        return '';
    }
}
`;o?.file("home.index.ts",l),s?.css&&o?.file("home.style.css",s?.css)},vo=async i=>{if(ue)return;ue=!0;let e=[{path:"/",linkLabel:"Home",content:"homeIndex",importFrom:"/home/home.index.ts"}],n=new Nt;const t=await Gt(n),a=t?.widgetsDir,s=t?.pagesDir;let o="";a&&s&&(o=await bo(i,s)),t?.routesDir?.file("routes.ts",zt(e)),n.generateAsync({type:"blob"}).then(function(l){let r=document.createElement("a");r.href=URL.createObjectURL(l),r.download=`${o||"page"}.zip`,r.click()}),ue=!1},bo=async(i,e)=>{const n=await I(),t=n?.entityId,a=n?.token,s=await $n(i,a,!0),o=new z;o.composition=t,o.inpage=100,o.fullLinkers=["the_entity_s_page"];const l=new z;l.inpage=100,l.composition=i,l.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const c=(await he([o,l],a))?.data?.the_entity?.the_entity_s_page?.filter(h=>h?.id==i),d=c?.[0]?.data?.the_page?.the_page_body?.[0]?.id,u=c?.[0]?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug;let g=e?.folder("home");const m=`
    import * as tsccs from "mftsccs-browser";
    
    ${s?.css?'import "./home.style.css";':""}
    import { getWidgetFromId } from "../../services/drop.service.ts";
    import { renderLatestWidget } from 'mftsccs-browser';

    export default class homeIndex extends tsccs.StatefulWidget
    {
        async  after_render() {        
            const appElement = document.querySelector<HTMLDivElement>("#app");
            let widgetTree = await renderLatestWidget(${d}, appElement);
        }
        getHtml() {
            return '';
        }
    }
    `;return g?.file("home.index.ts",m),s?.css&&g?.file("home.style.css",s?.css),u},_o=async i=>{if(ue)return;if(!i){console.log("Project id is required");return}const a=(await new Jt().getProjectById(i))?.data?.the_project?.the_project_name?.[0]?.data?.the_name?.replace(/\s/g,"_").toLowerCase();ue=!0;let s=new Nt;const o=await Gt(s),l=o?.routesDir,r=o?.pagesDir;await Eo(r,l,i),s.generateAsync({type:"blob"}).then(function(c){let d=document.createElement("a");d.href=URL.createObjectURL(c),d.download=`the_${a}.zip`,d.click()}),ue=!1},Eo=async(i,e,n)=>{if(!i&&!e)return;let t=[];const s=(await I())?.token,o=new z;o.composition=n,o.inpage=100,o.fullLinkers=["the_project_s_page","the_project_main_page"];const l=new z;l.inpage=100,l.fullLinkers=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type"];const r=await he([o,l],s),c=r?.data.the_project?.the_project_main_page?.[0]?.id;if(r?.data.the_project?.the_project_s_page?.length)for(let d=0;d<r?.data.the_project?.the_project_s_page?.length;d++){const u=r.data.the_project.the_project_s_page[d];let g={page:u?.id,title:u?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:u?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,font_family:u?.data?.the_page?.the_page_font_family?.[0]?.data?.the_font_family,font_size:u?.data?.the_page?.the_page_font_size?.[0]?.data?.the_font_size,width:u?.data?.the_page?.the_page_width?.[0]?.data?.the_width,type:u?.data?.the_page?.the_page_type?.[0]?.data?.the_type};if(!g.page)continue;const m=`${g.slug.split("-").map((v,_)=>_===0?v.charAt(0).toLowerCase()+v.slice(1):v.charAt(0).toUpperCase()+v.slice(1)).join("")}`;t.push({path:`/${g.slug}`,content:`${m}Index`,importFrom:`/${g.slug}/${g.slug}.index.ts`}),g.page==c&&t.push({path:"/",content:`${m}Index`});let h=i?.folder(g.slug);const p=`
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
                }`;h?.file(`${g.slug}.index.ts`,p)}e?.file("routes.ts",zt(t))};async function To(){const i=new se("mountchildwidgets-editor-split"),e=document.getElementById("mountchildwidgets-editor-split");e&&(e.innerHTML=""),await i.initializeEditor()}async function So(){const i=new se("onupdate-editor-split"),e=document.getElementById("onupdate-editor-split");e&&(e.innerHTML=""),await i.initializeEditor()}async function ji(){await To(),await So(),await cs(),await ds()}function Lo(){document.getElementById("widget-lifecycle-form")?.remove(),document.createElement("div").setAttribute("id","widget-lifecycle-form")}function Di(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.add("saveWidgetDisabled")})}function mn(){Array.from(document.querySelectorAll(".widget-item")).forEach(e=>{e.classList.remove("saveWidgetDisabled")})}class Ni{arrowBtn=null;updateOnlyButton=null;isDroppedDown=!1;constructor(){}async LoadPageWidget(e){const t=(await I())?.token;Tn(),Di(),document.querySelector("#widget-properties #widget-type input")?.remove(),Lo(),await ji();let s=Sn(),o=await Ee(e,t),l=await re(o?.widgetId??e);console.log("page widget tree",l);let r=await Te(l,s);this.addPageUpdate(e),mn(),f.resetWidgetTree(),f.widgetTree=l,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),X(l,!1,r,!0),q.enableWidgetButtons(),Vt(),ce(),pe()}toggleUpdate(e){this.updateOnlyButton&&this.arrowBtn&&(this.isDroppedDown&&e!==!0?(this.updateOnlyButton.classList.remove("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_up</span>'):(this.updateOnlyButton.classList.add("d-none"),this.arrowBtn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down</span>'),this.isDroppedDown=!this.isDroppedDown)}addPageUpdate(e){const n=document.getElementById("widget-btn-wrapper");n.innerHTML=`
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
      `,this.isDroppedDown=!1,this.arrowBtn=n.querySelector("#updateDropDownArrowPage"),this.updateOnlyButton=n.querySelector("#updateFsPage"),this.updateOnlyButton.addEventListener("click",()=>{this.toggleUpdate(!0)}),this.arrowBtn.addEventListener("click",()=>{this.toggleUpdate(!1)})}addCodeToDom(e,n){Li(e.css,n?.css),Si(e.after_render),Ci(e.before_render),En()}}const ii={PAGE_SAVE:"Page saved Successfully!",WIDGET_SAVE:"Widget saved Successfully!",NO_SAVED_WIDGET:"No saved widgets!",NO_WIDGET_CONTAINER:"Widget list container not found in the DOM."},ai=new Ue,qi=new Ni;async function An(i){i.preventDefault();try{await $e(),await et();const e=document.getElementById("fspage-save-button"),n=Number(e?.getAttribute("data-pageid")),s="widget_"+(await ai.getPageById(n)).data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_slug`].data.the_slug,o=document.querySelectorAll(".edited-widget-container");W.infoMessageToast("Saving page...",0),o?.length&&o.forEach(u=>{const g=u.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),u.classList.remove("edited-widget-container")});const l=await Ze();f.staticWidgetTree.html=l,await f.savePageWidget(n,s),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast(ii.PAGE_SAVE);const d=(await ai.getPageById(n))?.data?.the_page?.the_page_body?.id;return await qi.LoadPageWidget(d),ii.PAGE_SAVE}catch(e){kn(e,"There is an error on saving widget")}}async function xn(i,e,n){i.preventDefault();const t=document.getElementById("updateFsPagePublish"),a=document.getElementById("updateFsPage"),s=a?.innerHTML||"";try{const o=document.getElementById("updateFsPagexx");t&&t.classList.add("disabled"),a&&(a.classList.add("disabled"),a.textContent="Updating.."),o&&(o.classList.add("disabled"),o.textContent="Updating..");const l=document.querySelectorAll(".edited-widget-container");W.infoMessageToast("Updating Page...",0),l?.length&&(W.infoMessageToast("Updating page...",0),l.forEach(u=>{const g=u.querySelectorAll(".widget_container");g?.length&&g.forEach(m=>{m.className="widget_container_disabled"}),u.classList.remove("edited-widget-container")}));const r=await Ze();f.staticWidgetTree.html=r;const c=await f.updateWidget();return console.log("updateWidgetResponse ->",c),En(),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Page Updated Successfully"),await qi.LoadPageWidget(e),n&&n===!0&&await f.publish(),"updated widget successfully!"}catch(o){console.error("error updating page",o),o instanceof Error&&W.errorToast(o.message),document.querySelector(".infoMessageToast")?.remove()}finally{t&&t.classList.remove("disabled"),a&&(a.classList.remove("disabled"),a.innerHTML=s)}}function Co(i){const e=new URLSearchParams(window.location.search).get("page-id");if(e){const n=`${window.location.origin}/page-preview/${e}`;window.open(n,"_blank")?.focus()}}function Wo(i,e=0){return window.saveWidgetInFolders=xo,`
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
                        <form method="dialog" onsubmit="saveWidgetInFolders(event, 'folder-widget-container', '${e||""}', ${i} )" id="form-folder-modal">
                            <div class="flex flex-col mb-2">
                                <label for="name" class="form-label">Name</label>
                                <input ${i?'id="save-to-folder-name"':'id="folder-name"'}  required ${i?"disabled":""} class="form-control" />
                            
                            </div>
                            <div class="flex flex-col mb-2">
                                <label for="description" class="form-label">Description</label>
                                <textarea rows="2"  ${i?'id="save-to-folder-description"':'id="description"'} class="form-control" placeholder="Description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END .a-dialog-body  -->
      </dialog>
    `}let nt;async function Ao(i,e){nt=i,console.log("selectedWidgetId -->",nt);const n=Wo(e,typeof i=="object"?0:i),t=document.createElement("div");t.innerHTML=n;const a=t.querySelector("#folder-widget-container");document.querySelector("body #app")?.appendChild(a),await de("folder-widget-container");const s=await I();if(!s)return;let o,l,c=(await Ye(nt,s.token))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name;e===!0?(o=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name"),console.log("nameInput -->",o),o&&(o.value=c),l=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")):(o=document.getElementById("folder-widget-container")?.querySelector("input#folder-name"),l=document.getElementById("folder-widget-container")?.querySelector("textarea#description")),console.log("nameInput -->",o);const d=document.getElementById("widgetFolder");console.log("xyzEl -->",d),e===!0?await Pe(ie.folder_widget,d,{widgetName:o.value,widgetDescription:l?.value,widgetId:nt}):(console.log("nameInput.value -->",o.value),await Pe(ie.folder_widget,d,{widgetName:o.value,widgetDescription:l?.value,widgetId:nt}))}async function xo(i,e,n,t){i.preventDefault();try{W.infoMessageToast("Saving Widget...",0),await $e();const a=document.getElementById("folder-widget-container"),s=a?.querySelector('button[type="submit"]');s.textContent="Saving";const o=a?.querySelector("input"),l=a?.querySelectorAll("button"),r=document.getElementById("save-to-folder-name")||document.getElementById("folder-name");console.log("nameInputEl -->",r);const c=r.value;console.log("widgetNamex -->",c),l&&l.forEach(w=>{w.disabled=!0}),o&&(o.disabled=!0),await et();let d;if(!t){R.staticElement?.removeAttribute("draggable");const w=document.querySelectorAll(".edited-widget-container");w?.length&&w.forEach(async S=>{if(S.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[S.id]){const b=await Le(S,"div.mftsccs-marking-element");f.editedWidgets[S.id].html=b.innerHTML}});const y=await zi();f.staticWidgetTree.html=y,console.log("widgetNamex -->",c);const E=await f.saveWidget(c);d=await Y(E.id),n=d.id,console.log("Saved Widget ID:",n)}const u=await I(),g=document.getElementById("folder-widget-container")?.querySelector("input#save-to-folder-name")?.value||document.getElementById("folder-widget-container")?.querySelector("input#folder-name")?.value,m=document.getElementById("folder-widget-container")?.querySelector("textarea#save-to-folder-description")?.value,p=new URLSearchParams(window.location.search).get("concept"),v={title:g,source_url:window.location.href,widget_id:n,short_desc:m,note:"",data_type:"widget",created_on:Date.now()};if(p){d=await Y(Number(n));const w=await Y(Number(p));if(!w)throw new Error("Selected folder concept not found!");let y={...v,boom_folder:{name:w.name||"",parent:p}};const E=await De({boomgpt:y},void 0,void 0,void 0,u.userId,4);await Gn(await Y(Number(p)),E,"the_boom_folder_s_contain"),await G(E,d,"the_refer")}else{const w=u?.userConcept;d=await Y(Number(n));let y={...v,boom_folder:{name:"",parent:w}};const E=await De({boomgpt:y},void 0,void 0,void 0,u.userId,4);await Gn(await Y(Number(w)),E,"the_boom_folder_s_contain"),await G(E,d,"the_refer")}await N.SyncDataOnline(),document.getElementById(e)?.querySelector("form")?.reset(),we("folder-widget-container"),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Widget saved successfully!"),t||(await q.renderSavedWidgets(),Oe(i,Number(n)))}catch(a){document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Error in saving widget"),kn(a,"There is an error on saving widget")}}class Fi extends gt{mainConcept=0;mainData;data=0;phonebooks=[];the_params;component_heading;saveButtonHTML;saveBoomButtonHTML;previewButtonHTML;tryAIButtonHTML="";responsiveButtonHTML="";_pageBuilderService;constructor(e){super(),this.component_heading="Widget Builder Panel",this.saveButtonHTML="",this.saveBoomButtonHTML="";const n=I();if(n&&(this.saveBoomButtonHTML=`
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
    `,e){this.the_params=e,this._pageBuilderService=new Ni;const t=this.the_params?.data?.the_page_title?.data?.the_title;this.component_heading=this.the_params.type?"Page Builder: "+t:"Widget Builder";const a=this.the_params?.page_id;n&&e.type==Wn.page&&(this.saveBoomButtonHTML=`
         <div class="text-end d-flex flex-row" id="widget-btn-wrapper">
            <button data-pageid="${a}" id="fspage-save-button" class="btn btn-primary btn-sm d-flex align-items-center gap-1">
              <span>Boom Page</span>
            </button>
          </div>
          `),this.previewButtonHTML=`
        <button id="preview-btn" onclick="previewPage(event)" class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1" title="Preview" data-pageId="${a}">
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
`}before_render(){this.render()}after_render(){if(this.the_params){document.getElementById("fspage-save-button").addEventListener("click",An);const n=this.the_params.data?.the_page_body?.id;if(document.querySelector(".content-target").classList.add("fspage"),!n){Vt();return}this._pageBuilderService.LoadPageWidget(Number(n))}}getHtml(){return window.openSaveWidgetModal=In,window.saveWidget=Ui,window.updateWidget=Pn,window.newWidget=je,window.previewWidget=$o,window.downloadWebsite=ho,window.moveUp=_e.moveUp,window.moveDown=_e.moveDown,window.copyElement=_e.copyElement,window.editWidget=_e.editWidget,window.openConvertModal=Do,window.convertToWidget=Ho,window.updatePage=xn,window.previewPage=Co,window.undoAction=D.undoAction,window.redoAction=D.redoAction,window.saveWidgetToFolderBtn=Ao,window.openPromptModal=Ws,window.refineAIData=dn,`
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
    `}}function Oi(){N.conceptsSyncArray=[],N.connectionSyncArray=[]}class Mo{constructor(e){this.props=e,this.modal=this.createModalElement(),document.body.appendChild(this.modal),this.updateModal()}modal;createModalElement(){const e=document.createElement("div");e.id=this.props.id,e.className="modal";let n="",t="";return this.props.id==="fs-create-page-modal"?t=this.createNewPageModal():this.props.id==="fs-edit-page-modal"?t=this.editPageModal():this.props.id==="create-project-modal"?(t=this.createNewProjectModal(),n="m-large"):this.props.id==="add-pages-project"&&(t=this.addPagesModalHtml(),n="m-large"),e.innerHTML=`
      <div class="m-content ${n}">
        <div id="closeModalBtn" class="close-modal">
            <img src="./images/icons/cross-close.svg" alt="" class="icon" />
        </div>
        <div class="m-header">
          <span id="modalHeader">${this.props.headerText}</span>
        </div>
        ${t}
      </div>
    `,e.querySelector("#closeModalBtn").addEventListener("click",this.handleClose.bind(this)),e}updateModal(){this.props.isOpen?this.modal.classList.add("open"):this.modal.classList.remove("open")}handleClose(){Oi(),this.modal.remove()}createNewPageModal(){return`
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
    `}}function At(i){new Mo(i)}function si(i){const e=document.getElementById(i);e&&e.remove()}class Mn{_pagesHTMLService;_pagesTSCCSService;constructor(){this._pagesHTMLService=new Ei,this._pagesTSCCSService=new Ue}async initPagesSidebar(){this.closePagesSubSidebar(".fs-page-create-submenu"),this.closePagesSubSidebar(".fs-page-edit-submenu");const e=await this._pagesHTMLService.getPagesListHTML(),n=document.getElementById("saved-page-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const t=document.getElementById("fs-create-page-button");t?.removeEventListener("click",this.createButtonClickHandler),t?.addEventListener("click",this.createButtonClickHandler),document.querySelectorAll("#fs-delete-page-button").forEach(l=>{l.removeEventListener("click",this.deletePageButtonClickHandler),l.addEventListener("click",this.deletePageButtonClickHandler)}),document.querySelectorAll("#fs-rename-page-button").forEach(l=>{l.removeEventListener("click",this.editPageButtonClickHandler),l.addEventListener("click",this.editPageButtonClickHandler)}),document.querySelectorAll("#fs-duplicate-page-button").forEach(l=>{l.removeEventListener("click",this.duplicatePageButtonClickHandler),l.addEventListener("click",this.duplicatePageButtonClickHandler)})}closePagesSubSidebar(e){Array.from(document.querySelectorAll(e)).forEach(t=>t.remove())}createButtonClickHandler=()=>{At({id:"fs-create-page-modal",isOpen:!0,headerText:"Create New Page"}),document.getElementById("fs-save-page-button")?.addEventListener("click",this.savePageButtonClickHandler);const n=document.getElementById("fs-create-page-form"),t=n?.elements.namedItem("title");if(!t){console.error("page_title not found");return}const a=async()=>{const o=await this._pagesTSCCSService.generateSlug(t.value);n.elements.namedItem("slug")?.setAttribute("value",o)};t.addEventListener("keyup",a);const s=()=>{t.removeEventListener("keyup",a),document.getElementById("fs-create-page-modal")?.removeEventListener("close",s)};document.getElementById("fs-create-page-modal")?.addEventListener("close",s)};savePageButtonClickHandler=async()=>{const n=document.getElementById("fs-create-page-form").elements;if(!n.title.value){n.title.style.borderColor="red";return}W.infoMessageToast("Creating page...",0);const t=await ln(n),a=await I();await this._pagesTSCCSService.savePage(t,a?.userId,a?.entityId),await N.SyncDataOnline(),this.initPagesSidebar(),document.querySelector(".infoMessageToast")?.remove(),si("fs-create-page-modal"),setTimeout(()=>{W.successfullToast("Page created successfully")},300)};editPageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),t=e.target.closest(".dropdown-menu").dataset.title,a=e.target.closest(".dropdown-menu").dataset.slug;At({id:"fs-edit-page-modal",isOpen:!0,headerText:"Rename Page",data:{title:t,slug:a}});const s=document.getElementById("fs-edit-page-form"),o=s?.elements.namedItem("title");if(!o){console.error("page_title not found");return}const l=async()=>{document.getElementById("fs-edit-page-button")?.removeAttribute("disabled");const u=await this._pagesTSCCSService.generateSlug(o.value);s.elements.namedItem("slug")?.setAttribute("value",u)};o.addEventListener("keyup",l);const r=()=>{o.removeEventListener("keyup",l),document.getElementById("fs-edit-page-modal")?.removeEventListener("close",r)};document.getElementById("fs-edit-page-modal")?.addEventListener("close",r),document.getElementById("fs-edit-page-button")?.addEventListener("click",()=>this.updatePageButtonClickHandler(n))};async PageInputElementChangeHandler(e,n){const t=e.target,a=t.name,s=t.value;let o=await this._pagesTSCCSService.checkSlugAvailablity(s);if(a==="slug"&&!o){document.getElementById("fs-update-page-button")?.setAttribute("disabled","true"),t.style.borderColor="red",t.insertAdjacentHTML("afterend",'<p style="color:red">Slug already exist</p>');return}await this._pagesTSCCSService.updatePageField(t.getAttribute("name"),t.value,Number(n))}updatePageButtonClickHandler=async e=>{const n=document.getElementById("fs-edit-page-form"),t=n.elements.namedItem("title");if(!t.value.trim()){t.style.borderColor="red";return}const a=n.elements;if(!a.title.value){a.title.style.borderColor="red";return}W.infoMessageToast("Renaming page...",2);const s=await ln(a),o=await I();await this._pagesTSCCSService.renamePage(s,e,o?.userId),await N.SyncDataOnline(),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Page renamed successfully");const r=new URLSearchParams(window.location.search).get("page-id");if(e===r){const c=document.getElementById("widget-builder");c.textContent=`Page Builder: ${s?.title}`}this.initPagesSidebar(),this.closePagesSubSidebar("#fs-page-edit-submenu"),si("fs-edit-page-modal")};deletePageButtonClickHandler=async e=>{const n=e.target.getAttribute("data-id"),t=e.target.closest(".dropdown-menu").dataset.title,a=e.target.closest(".dropdown-menu").dataset.slug;confirm(`Are you sure you want to delete the page titled "${t}" with the slug "${a}"?`)?(W.infoMessageToast("Deleting page...",0),await this._pagesTSCCSService.deletePage(Number(n)),await N.SyncDataOnline(),wi("/"),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Page deleted successfully")):document.activeElement?.blur()};duplicatePageButtonClickHandler=async e=>{const t=e?.target?.getAttribute("data-id"),s=(await this._pagesTSCCSService.getPageById(Number(t)))?.data?.the_page,o=s?.the_page_title?.data?.the_title?.trim()+" copy",l=s?.the_page_slug?.data?.the_slug?.trim()+"-copy",r=s?.the_page_meta_title?.data?.the_meta_title?.trim(),c=s?.the_page_meta_description?.data?.the_meta_description?.trim(),d=s?.the_page_meta_keywords?.data?.the_meta_keywords?.trim(),u=s?.the_page_width?.data?.the_width?.trim(),g=s?.the_page_type?.data?.the_type?.trim(),m=s?.the_page_font_family?.data?.the_font_family?.trim(),h=s?.the_page_font_size?.data?.the_font_size?.trim(),p={title:o,slug:l,meta_title:r,meta_description:c,meta_keywords:d,width:u,type:g,font_family:m,font_size:h},v={};for(const[E,S]of Object.entries(p))S&&(v[E]=S);const _=s?.the_page_body?.id,C=await I(),T=await Ee(_,C?.token);let w=await re(T?T.widgetId:_);const y=await this._pagesTSCCSService.savePage(v,C?.userId,C?.entityId);await f.copyPageWidget(y,`widget_${l}`,w),this.initPagesSidebar(),W.successfullToast("Page duplicated successfully")}}async function ko(i){i?.preventDefault();const e=window.location.href,t=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(await f.hasWidgetChanged(Number(t))){await bt("Do you want to save changes?")&&(e.includes("?page-id=")?t?await xn(i,Number(t)):await An(i):t?await Pn(i,Number(t)):await In());const p=document.getElementById("preview-btn");p.classList.remove("active"),p.removeAttribute("data-widgetid")}f.resetWidgetTree();const s=i.target.getAttribute("data-pageId");history.pushState({},"",`?page-id=${s}`);let l=await new Ue().getPageById(Number(s));l?.error&&je();const r=document.getElementById("midContent"),c=document.getElementById("right-aside"),d={type:Wn.page,data:l.data?.[`the_${M.PAGE_COMP_NAME}`],page_id:s},u=new Fi(d),g=new Zt(d);c.innerHTML=await g.getHtml(),r.innerHTML="",u.mount(r),ns.resetNavigationBar()}class Vi{_projectsService;_pagesTsccsService;constructor(){this._projectsService=new Jt,this._pagesTsccsService=new Ue}async getProjectsListHTML(){try{const e=await this._projectsService.getAllProjects();return e?.length?e?.map(t=>{let s=t?.data?.[`the_${M.PROJECT_COMP_NAME}`]?.[`the_${M.PROJECT_COMP_NAME}_name`]?.data?.the_name;return`
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
    `,document.querySelector("body #app")?.appendChild(n),de("create-project-dialog"),"Create Project Modal"}async renameProjectModal(e,n){document.getElementById("rename-project-dialog")?.remove();const a=document.createElement("dialog");return a.setAttribute("id","rename-project-dialog"),a.classList.add("col-md-3"),a.innerHTML=`
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
    `,document.querySelector("body #app")?.appendChild(a),de("rename-project-dialog"),"Rename Project Modal"}async getProjectPagesListHTML(e){try{const n=await this._projectsService.getProjectById(e),t=n?.data?.the_project?.[`the_project_${oe.PROJECT_PAGE_LINKER}`],a=n?.data?.the_project?.the_project_main_page?.[0]?.id;return t?.length?t?.map(o=>{let l=o?.data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title;const r=a==o.id,c=r?'<span class="material-symbols-outlined home-icon">home</span>':"",d=r?"":`<li class="d-flex align-items-center justify-content-between" 
              onclick="setMainPageHandler(event, ${o.id})" data-projectid="${e}">
                  <span class="px-2">Set as Main Page</span>
                  <span class="material-symbols-outlined">home</span>
                </li>`,u=Number(o.id)+Number(e);return`
            <li class="project-page-item" data-projectid="${e}">
              <router-link class="page_title" href="/?page-id=${o.id}" data-pageid="${o.id}" onclick="pageHandler(event)">
                <span class="material-symbols-outlined">description</span>
                ${l}
              </router-link>
              ${c}
              <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${u})" title="Options"> more_vert </span>
              <ul class="dropdown-menu" id="dropdown-menu-${u}">
                <li class="delete-project-page d-flex align-items-center justify-content-between delete-icon" 
                onclick="deletePageFromProjectHandler(event, ${o.id})">
                  <span class="px-2">Delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </li>
                ${d}
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
      `,document.body.appendChild(n),n.showModal(),n}catch(n){return console.error("Error:",n),""}}}function Io(i,e=[],n=[]){return`
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
                                    <input type="checkbox" class="selected-menu-page" data-page-id="${t.id}" ${n.find(a=>Number(a.page)==t.id)?" checked ":""} />
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
                <a href="https://develop-${i}.develop.freeschema.com" class="btn btn-primary">
                  <b><i>https://develop-${i}.develop.freeschema.com</i></b>
                </a>
              </p>

              <div id="custom-domain-view-holder">
              </div>
            </div>

          </div>
        </div>
    </div>
  </div>

    `}const Po=async i=>{if(!i){console.log("Project id is required");return}const e=new Jt;let[n,t]=await Promise.all([e.getProjectById(i),Wa(i)]);console.log("project detail",n),console.log("abc menus ",t);const a=n?.data?.the_project?.the_project_main_page?.[0]?.id??0,s=n?.data?.the_project?.the_project_s_page?.map(c=>({id:c.id,name:c?.data?.the_page?.the_page_title?.[0]?.data?.the_title,slug:c?.data?.the_page?.the_page_slug?.[0]?.data?.the_slug,home:c?.id==a}))??[];console.log("pages",s),document.getElementById("project-setting-dialog")?.remove();const l=document.createElement("dialog");l.setAttribute("id","project-setting-dialog"),l.classList.add("col-md-8"),l.style.flexDirection="column",l.innerHTML=Io(i,s),document.querySelector("body #app")?.appendChild(l),await de("project-setting-dialog"),document.querySelectorAll(".accordion-header").forEach(c=>{c.addEventListener("click",async()=>{c.classList.toggle("active");const d=c.getAttribute("id");if(c.classList.contains("active"))switch(d){case"domain-viewer-btn":const u=document.getElementById("custom-domain-view-holder"),g=await pi(i,"the_project_custom_url");u&&Pe(102462726,u,{projectId:i,storeUrl:`https://preview-${i}.develop.freeschema.com`,customUrl:g?.[0]?.data?.the_custom_url||""});break}else switch(d){case"domain-viewer-btn":const u=document.getElementById("custom-domain-view-holder");u&&(u.innerHTML="");break}})}),tt(t);const r=document.getElementById("save-menu-items");r?.addEventListener("click",async c=>{r&&(r.disabled=!0),console.log("menus save",t),t=t.map(u=>(delete u.edit,u)),console.log("menus filtered save",t),c.target.disable=!0;const d=await Aa(i,t);console.log("menu created",d),c.target.disable=!1,tt(t),alert("Updated Menu"),r&&(r.disabled=!1)}),document.getElementById("add-custom-menu-item")?.addEventListener("click",c=>{const d=c.target.closest(".custom-menu-item"),u=d?.querySelector("#nameElem"),g=d?.querySelector("#linkElem"),m=d?.querySelector("#actionElem"),h=d?.querySelector("#authElem");if(!u.value){alert("Menu Name is required");return}if(!g.value&&!m.value){alert("Link or Action is required");return}t.push({name:u.value??"",link:g.value??"",action:m.value??"",page:"",order:t.length,auth:!!h.checked,menus:[]}),u.value="",g.value="",m.value="",h.checked=!1,tt(t)}),window.handleMenuAction=(c,d,u,g)=>{if(d=="remove")if(g){const m=document.getElementsByClassName("selected-menu-page");for(let h=0;h<m.length;h++){const p=m[h];Number(p.getAttribute("data-page-id"))==g&&p?.checked&&p.click()}}else t.splice(u,1)[0];else if(d=="edit")t[u].edit=!0;else if(d=="cancel")t[u].edit=!1;else if(d=="update"){t[u].edit=!1;const m=c?.target?.closest("li"),h=m?.querySelector("#menuName").value??"",p=m?.querySelector("#menuLink").value??"",v=m?.querySelector("#menuAction").value??"",_=!!m?.querySelector("#menuAuth").checked;t[u].name=h,t[u].link=p,t[u].action=v,t[u].auth=_}else if(d=="up"){const m=t.splice(u,1)[0];t.splice(u-1,0,m),t=t.map((h,p)=>({...h,order:p}))}else if(d=="down"){const m=t.splice(u,1)[0];t.splice(u+1,0,m),t=t.map((h,p)=>({...h,order:p}))}else console.warn("unacceptable action ",d);tt(t)},document.querySelectorAll(".selected-menu-page").forEach(c=>{c.addEventListener("change",d=>{console.log("e.target.changed",d.currentTarget.checked);const u=parseInt(d.currentTarget.getAttribute("data-page-id"));if(d.currentTarget.checked){const g=s.find(m=>m.id==u);console.log("pages",g,s),t.push({name:g.name??"",link:g.slug??"",action:"",page:g.id??"",order:t.length,auth:!1,menus:[]})}else{const g=(m,h)=>{for(let p=0;p<m.length;p++){const v=m[p];v.menus&&v.menus.length>0&&(v.menus=g(v.menus,h))}return m.filter(p=>p.page!=h)};t=g(t,u)}tt(t)})})};class Ri{_projectsHTMLService;_projectsTSCCSService;_pagesTSCCSService;constructor(){this._projectsHTMLService=new Vi,this._projectsTSCCSService=new Jt,this._pagesTSCCSService=new Ue}async initProjectsSidebar(){try{const e=await this._projectsHTMLService.getProjectsListHTML(),n=document.getElementById("saved-project-list-container");n&&(n.innerHTML="",n.insertAdjacentHTML("beforeend",e));const t=document.getElementById("fs-create-project-button");t?.removeEventListener("click",this.createProjectHandler),t?.addEventListener("click",this.createProjectHandler),document.querySelectorAll(".project-item").forEach(l=>{l.removeEventListener("click",this.getProjectPagesListHandler),l.addEventListener("click",this.getProjectPagesListHandler)}),document.querySelectorAll(".add-icon").forEach(l=>{l.removeEventListener("click",this.addPageToProjectHandler),l.addEventListener("click",this.addPageToProjectHandler)}),document.querySelectorAll(".delete-project").forEach(l=>{l.removeEventListener("click",this.deleteProjectHandler),l.addEventListener("click",this.deleteProjectHandler)}),window.createProjectHandler=this.createProjectHandler,window.setMainPageHandler=this.setMainPageHandler,window.deletePageFromProjectHandler=this.deletePageFromProjectHandler,window.downloadProject=_o,window.showProjectSetting=Po,window.renameProjectModal=this._projectsHTMLService.renameProjectModal,window.renameProjectHandler=this.renameProjectHandler}catch(e){console.error("Failed to initialize projects sidebar:",e)}}createProjectHandler=async()=>{At({id:"create-project-modal",headerText:"Create New Project:",isOpen:!0});try{const e=document.getElementById("create-project-modal");await this.addPageToProject(e,!0),this.initProjectsSidebar()}catch(e){console.error("Failed to create project:",e)}};renameProjectHandler=async(e,n)=>{try{const s=document.getElementById("rename-project-form").elements.namedItem("name").value;await this._projectsTSCCSService.updateProjectField("name",s,n),await N.SyncDataOnline(),this.initProjectsSidebar()}catch(t){console.error("Failed to rename project:",t)}};getProjectPagesListHandler=async e=>{const n=e.target.dataset.projectid,t=e.target.parentElement.querySelector(".project-pages-list");if(t){if(!t.classList.contains("d-none")){t.classList.add("d-none");return}t.innerHTML=`
        <li class="list-unstyled">
          <div class="d-flex justify-content-center align-items-center py-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading pages...</span>
          </div>
        </li>
      `,t.classList.remove("d-none");const a=await this._projectsHTMLService.getProjectPagesListHTML(n);t.innerHTML=a}};deleteProjectHandler=async e=>{try{let n=e.target.dataset.projectid;n||(n=e.target.parentElement.dataset.projectid),await bt("Are you sure you want to delete this project?")&&(await this._projectsTSCCSService.deleteProject(n),await N.SyncDataOnline(),W.successfullToast("Project deleted successfully!"),this.initProjectsSidebar())}catch(n){console.error("Failed to delete project:",n),W.errorToast("Failed to delete project")}};deletePageFromProjectHandler=async(e,n)=>{try{let t=e.target.parentElement.parentElement.dataset.projectid;await bt("Are you sure you want to delete this page from the project?")&&(await this._projectsTSCCSService.deletePageFromProject(t,n),await N.SyncDataOnline(),this.initProjectsSidebar())}catch(t){console.error("Failed to delete page from project:",t)}};setMainPageHandler=async(e,n)=>{e.preventDefault(),e.stopPropagation();try{let t=e.target.closest(".project-page-item").dataset.projectid;W.infoMessageToast("Setting page as main page...",0);const a=document.querySelector(".infoMessageToast");await this._projectsTSCCSService.setMainPage(t,n),await N.SyncDataOnline();const s=await this._projectsHTMLService.getProjectPagesListHTML(t),o=e.target.closest(".project-pages-list");o&&(o.innerHTML=s,o.classList.remove("d-none")),a?.remove(),W.successfullToast("Main page set successfully!")}catch(t){console.error("Failed to set main page:",t),document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Failed to set main page")}};addPageToProjectHandler=async e=>{e.preventDefault(),e.stopPropagation(),At({id:"add-pages-project",headerText:"Add Pages:",isOpen:!0});try{const n=e.target.previousElementSibling.dataset.projectid,a=(await this._projectsTSCCSService.getProjectById(n))?.data?.the_project?.[`the_project_${oe.PROJECT_PAGE_LINKER}`];let s=a?a.map(l=>({id:l.id,title:l?.data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];const o=document.getElementById("add-pages-project");await this.addPageToProject(o,!1,n,s)}catch(n){console.error("Failed to add page to project:",n)}};addPageToProject=async(e,n,t,a=[])=>{try{const s=await this._pagesTSCCSService.getAllPages(),o=s?s.map(m=>({id:m.id,title:m?.data?.[`the_${M.PAGE_COMP_NAME}`]?.[`the_${M.PAGE_COMP_NAME}_title`]?.[0]?.data?.the_title})):[];if(!e)return;const l=e.querySelector("#selectedItems"),r=e.querySelector("#options"),c=(m="")=>{if(!o.length){r.innerHTML='<li class="option"><span>No pages found!</span></li>';return}let h=o.filter(p=>p.title.toLowerCase().includes(m.toLowerCase()));d(),r.innerHTML=h.length?h.map(p=>`
            <li class="option" data-value="${p.id}">
              <input type="checkbox" id="page-${p.id}" ${a?.some(v=>v.id.toString()===p.id.toString())?"checked":""} />
              <span>${p.title}</span>
            </li>
          `).join(""):'<li class="option"><span>No pages match your search!</span></li>'},d=()=>{a&&a.length?l.innerHTML=a.map(m=>`
            <div class="selected-page" data-value="${m.id}">
              ${m.title}
              <img src="./images/icons/cross-close.svg" alt="" class="remove-page remove-item" />
            </div>
          `).join(""):l.innerHTML="<span>No pages selected!</span>"},u=(m,h)=>{a.push({id:m,title:h}),d()},g=m=>{a=a.filter(h=>h.id.toString()!==m.toString()),d()};l.addEventListener("click",m=>{const h=m.target;if(h.classList.contains("remove-item")){const p=h.closest(".selected-page");p&&g(p.dataset.value)}}),r.addEventListener("click",m=>{const h=m.target.closest(".option");if(!h)return;const p=h.querySelector("input[type='checkbox']");p&&(m.target!==p&&(p.checked=!p.checked),p.checked?u(h.dataset.value,h.querySelector("span").textContent.trim()):g(h.dataset.value))}),e.querySelector("#submitSelection")?.addEventListener("click",async()=>{if(n&&!document.getElementById("create-project-form").elements.namedItem("name")?.value){W.errorToast("Enter the project name");return}const m=e.querySelector("#submitSelection"),h=e.querySelector("#closeModal");m.disabled=!0,h.disabled=!0;const p=m.textContent;m.textContent="Adding...",W.infoMessageToast("Adding pages to project...",0);try{const v=a.map(y=>Number(y.id));if(!v.length){document.querySelector(".infoMessageToast")?.remove(),W.infoMessageToast("Please add at least one page to the project."),m.disabled=!1,h.disabled=!1,m.textContent=p;return}if(n){this.addPageToProjectHandler();const E=document.getElementById("create-project-form").elements,S=ln(E),b=await I(),L=await this._projectsTSCCSService.createProject(S,b?.userId,b?.entityId);await N.SyncDataOnline(),t=(await Y(L.ghostId)).id}if(!t){document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Project ID not found."),m.disabled=!1,h.disabled=!1,m.textContent=p;return}await this._projectsTSCCSService.addPagesToProject(t,v);const _=await this._projectsHTMLService.getProjectPagesListHTML(t),T=document.getElementById(`dropdown-menu-${t}`)?.nextElementSibling;T&&(T.innerHTML=_,T.classList.remove("d-none")),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Pages added successfully to the project!"),e.remove()}catch{document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Failed to add pages to prjects"),m.disabled=!1,h.disabled=!1,h.textContent=p}}),e.querySelector("#closeModal")?.addEventListener("click",()=>{const m=e.querySelector("#closeModal");m.disabled=!0,e.remove()}),e.querySelector("#searchInput")?.addEventListener("keyup",m=>{const h=m.target;c(h.value)}),e.querySelector("#searchInput")?.addEventListener("click",m=>{c()}),d()}catch(s){console.error("Failed to add page to project:",s)}}}const ft=(()=>{const i=()=>{document.querySelectorAll("#navBarContainer > span").forEach(r=>{r.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(r=>{r.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(r=>{r.remove()})};return{toggle:o=>{const l=o.target,r=l?.dataset?.id;if(l.classList.contains("activeNavigationIcon")){i();return}if(r){document.querySelectorAll("#navBarContainer > span").forEach(m=>{m.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(m=>{m.classList.remove("navActive")});const u=document.getElementById(r);document.querySelector(`[data-id='${r}']`)?.classList.add("activeNavigationIcon"),u?.classList.add("navActive"),r=="fs-all-pages-list"&&new Mn().initPagesSidebar(),r=="fs-all-projects-list"&&new Ri().initProjectsSidebar()}},collapseNavbar:()=>{document.querySelectorAll("#navBarContainer > span").forEach(r=>{r.classList.remove("activeNavigationIcon")}),document.querySelectorAll("#widgets > div").forEach(r=>{r.classList.remove("navActive")}),document.querySelector(".nav-item.active")?.classList.remove("active"),document.querySelectorAll(".sub-sidebar").forEach(r=>{r.remove()})},checkForActiveNavigation:()=>{const o=document.querySelector(".activeNavigationIcon");if(o){const l=o.dataset?.id||"";document.getElementById(l)?.classList.remove("navActive")}},resetNavigationBar:i,disableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="none",o.style.pointerEvents="none",o.style.opacity="0"},enableNavbar:()=>{const o=document.getElementById("column-left");o.style.display="block",o.style.pointerEvents="all",o.style.opacity="1"}}})(),rt=(()=>{const i=()=>{const a=document.querySelector("#profileDropdown");if(a.style.display&&a.style.display=="block"){e();return}a?.setAttribute("style","display: block;")},e=()=>{document.querySelector("#profileDropdown")?.setAttribute("style","display: none;")};return{openUserActionModel:i,closeUserActionModel:e,disableHeader:()=>{const a=document.querySelector(".top-header");a.style.display="none",a.style.pointerEvents="none",a.style.opacity="0"},enableHeader:()=>{const a=document.querySelector(".top-header");a.style.display="flex",a.style.pointerEvents="all",a.style.opacity="1"}}})(),W=(()=>{let i=0;const e=()=>{const r=document.createElement("span");return r.innerText="close",r.classList.add("material-symbols-outlined"),r.classList.add("crossButtonToast"),r.addEventListener("click",c=>{c.target instanceof HTMLElement&&c.target.parentNode instanceof HTMLElement&&console.log(c.target.parentNode.remove())}),r},n=r=>{const c=document.querySelector("#toasterContainer");c.style.display="flex";const d=document.createElement("div");d.classList.add("successFullToast");const u=document.createElement("span");u.classList.add("material-symbols-outlined"),u.innerText="check_circle";const g=document.createElement("span");g.innerText=r,d.appendChild(u),d.appendChild(g),d.appendChild(e()),c.appendChild(d),i=i+.5,s(d)},t=(r,c=1)=>{i=0;const d=document.querySelector("#toasterContainer");d.style.display="flex";const u=document.createElement("div");u.classList.add("infoMessageToast","bg-info");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="info";const m=document.createElement("span");m.innerText=r,u.appendChild(g),u.appendChild(m),u.appendChild(e()),d.appendChild(u),c!=0&&(i=i+.5+(c||0),s(u))},a=(r,c)=>{i=0;const d=document.querySelector("#toasterContainer");d.style.display="flex";const u=document.createElement("div");u.classList.add("failureToast");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.innerText="error";const m=document.createElement("span");m.innerText=r,u.appendChild(g),u.appendChild(m),u.appendChild(e()),d.appendChild(u),i=i+.5+(c||0),s(u)},s=r=>{r.style.animation=`animateToastMessage ${2+i}s forwards`,r.addEventListener("animationend",()=>{r.remove();const c=document.querySelector("#toasterContainer");c.innerHTML||(i=0,c.style.display="none")}),r.addEventListener("mouseenter",()=>{o()}),r.addEventListener("mouseleave",()=>{l()})},o=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(c=>{c.style.animationPlayState="paused"})},l=()=>{Array.from(document.querySelectorAll("#toasterContainer > div")).forEach(c=>{c.style.animationPlayState="running"})};return{successfullToast:n,infoMessageToast:t,errorToast:a}})();async function $e(){const i=await I(),e=i?.entityId,n=i?.token,t=i?.userId,a=i?.userConcept,o=(await Y(e)).typeCharacter;let l=!1,r;const c=new H;if(c.conceptIds=[e],c.selectors=["the_entity_user"],c.outputFormat=fe,c.inpage=100,await ye(c,n)?.subscribe(g=>{r=g}),r?.[0]?.data?.the_entity?.the_entity_user?.id===a&&(l=(await Y(a))?.userId===t),!l||!o||o!=="the_entity"||!n||n.trim()===""||!t)throw setTimeout(()=>Ae(),3e3),sessionStorage.removeItem("cacheServers"),new Error("Corrupt user session. Logging out.");return!0}async function Bo(i){try{const e=await Ie(i,"the_entity_s_widget",!0);e.length?await Me(e[0].id):W.errorToast("already deleted")}catch(e){console.error(e)}}async function kn(i,e="Error"){console.error(i);const n=i;n&&(W.errorToast(n?.message?n.message:e),n.status===401&&Ae())}async function In(){_t(),document.getElementById("save-widget-dialog")?.remove();const e=document.createElement("dialog");return e.setAttribute("id","save-widget-dialog"),e.classList.add("col-md-3"),e.innerHTML=`
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
  `,document.querySelector("body #app")?.appendChild(e),de("save-widget-dialog"),new Promise((n,t)=>{const a=e.querySelector("#save-widget-form");a.onsubmit=async o=>{o.preventDefault();try{const l=new FormData(a),c=Object.fromEntries(l).widgetName,d=o.target;if(!c?.trim()){const u=d.querySelector("#widgetName");u?.focus(),u.style.border="2px solid red",u.style.outline="none",u.addEventListener("input",()=>{u.style.border=""});return}await Ui(o,c),we("save-widget-dialog"),n("Widget saved successfully")}catch(l){console.error("Error saving widget:",l),t("Error saving widget")}};const s=e.querySelector("button[type='button']");s.onclick=()=>{we("save-widget-dialog"),n("Widget saving canceled")}})}async function Ui(i,e){i.preventDefault();try{W.infoMessageToast("Saving Widget...",0),await $e();const n=document.getElementById("save-widget-dialog"),t=n?.querySelector('button[type="submit"]');t.textContent="Saving";const a=n?.querySelector("input"),s=n?.querySelectorAll("button");s&&s.forEach(u=>{u.disabled=!0}),a&&(a.disabled=!0),await et(),R.staticElement?.removeAttribute("draggable");const o=document.querySelectorAll(".edited-widget-container");o?.length&&o.forEach(async u=>{if(u.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[u.id]){const g=await Le(u,"div.mftsccs-marking-element");f.editedWidgets[u.id].html=g.innerHTML}});const l=await zi();f.staticWidgetTree.html=l;const r=await f.saveWidget(e),c=await Y(r.id);we("save-widget-dialog"),Ot(),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Widget saved successfully!"),await q.renderSavedWidgets(),Oe(i,c.id);return}catch(n){document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Error in saving widget"),kn(n,"There is an error on saving widget")}}async function Pn(i,e,n){const t=document.getElementById("update-publish-widget-btn");try{const a=document.getElementById("update-widget-btn");t&&t.classList.add("disabled"),a&&(a.classList.add("disabled"),a.textContent="Updating...",W.infoMessageToast("Updating Widget...",0)),await et(),R.staticElement?.removeAttribute("draggable");const s=document.querySelectorAll(".edited-widget-container");s?.length&&s.forEach(async c=>{if(c.classList.replace("edited-widget-container","added-widget-container"),f.editedWidgets[c.id]){const d=await Le(c,"div.mftsccs-marking-element");f.editedWidgets[c.id].html=d.innerHTML}});const o=await No();f.staticWidgetTree.html=o,await f.updateWidget(),Ot(),pe(),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Widget Updated Successfully"),await q.renderSavedWidgets(),await q.renderBoomWidgets();const r=document.getElementById("widget-builder");r.textContent="Widget Builder Panel",await Oe(i,f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:e),n&&n===!0&&await f.publish();return}catch(a){document.querySelector(".infoMessageToast")?.remove();const o=document.getElementById("update-widget-btn");o&&(o.classList.remove("disabled"),o.innerHTML=`
      <span class="material-symbols-outlined"></span>
      Update`),a instanceof Error&&W.errorToast(a.message)}finally{t&&t.classList.remove("disabled")}}async function je(i,e){const n=document.querySelector(".widgetStyle");n.textContent="",document.querySelectorAll(".child-widget-css")?.forEach(c=>{c.textContent=""});const a=document.getElementById("publish-widget");a&&(a.style.display="none",a.disabled=!0);const s=document.querySelector(".content-target"),o=window.location.href,r=document.querySelector("#widget-btn-wrapper button")?.getAttribute("data-widgetid");if(s){let c=!1;c=await f.hasWidgetChanged(Number(r));const u=document.getElementById("preview-btn").classList.value.includes("active");if((i?.target?.id==="preview-btn"||i?.target?.id==="save-widget-form"||i?.target?.id==="update-widget-btn"||i?.target?.id==="form-folder-modal"||i?.target?.id==="data-file-id")&&(c=!1),u&&(c=!1),c&&!e){await bt("Do you want to save changes?")&&(o.includes("?page-id=")?r?await xn(i,Number(r)):await An(i):r?await Pn(i,Number(r)):await In()),Ot();const h=document.getElementById("preview-btn");h.classList.remove("active"),h.removeAttribute("data-widgetid")}await Ls()}s.innerHTML="",Oi(),i&&!e&&window.history.pushState({},"","/")}let nn="";async function $o(i){const e=document.getElementById("preview-btn"),n=e.classList.value.includes("active");let t=i.target.getAttribute("data-widgetid");t&&history.pushState({},"",`?widget-id=${t}`);const a=document.querySelector(".content-target"),s=document.querySelector(".midContent .content"),o={...f.widgetTree},l=document.getElementById("undo-btn"),r=document.getElementById("redo-btn"),c=document.getElementById("ai-prompt-btn"),d=document.getElementById("widget-prompt-modal"),u=document.getElementById("widget-prompt-tab"),g=document.querySelector(".dropdown-wrapper"),m=document.getElementById("widgetButtionCodeViewWrapper");if(n){e.innerHTML=`
        <span class="material-symbols-outlined"> visibility </span> Preview
      `,g&&(g.style.display="none",await oi()),c.style.display="flex",nn&&nn!=="none"?(u.classList.add("d-none"),d.classList.remove("d-none"),d.classList.add("d-flex")):(u?.classList.remove("d-none"),d&&d.classList.add("d-none")),e.classList.remove("active"),l.classList.remove("d-none"),r.classList.remove("d-none"),m&&(m.style.display="block"),g&&(g.style.display="none"),a&&(a.style.width="100%",a.style.maxWidth="",a.style.margin="0 auto",a.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),a.classList.add("mode-desktop"));const h=Sn(),p=await Te(f.widgetTree,h,!0,void 0,!0);X(f.widgetTree,!1,p,!1,!0),document.getElementById("column-left").classList.remove("d-none"),document.getElementById("column-right").classList.remove("d-none"),document.getElementById("widget-btn-wrapper").classList.remove("d-none"),s.classList.remove("preview"),ce(),pe(),rt.enableHeader()}else{e.innerHTML=`
        <span class="material-symbols-outlined">design_services</span> Develop
      `,c.style.display="none",d&&(nn=window.getComputedStyle(d).display,d.classList.add("d-none")),u&&u.classList.add("d-none");const h=document.getElementById("select-box"),p=document.getElementById("element-info");h.style.display="none",p.style.display="none",l.classList.add("d-none"),r.classList.add("d-none"),e.classList.add("active"),m&&(m.style.display="none"),g&&(g.style.display="block",await oi());const v=await Te(f.widgetTree,a,!0,void 0,!1);X(o,!1,v),document.getElementById("column-left").classList.add("d-none");const C=document.createElement("script");C.setAttribute("type","text/javascript"),C.innerHTML=o?.js,a.appendChild(C),document.getElementById("column-right").classList.add("d-none"),document.getElementById("widget-btn-wrapper").classList.add("d-none"),rt.disableHeader(),ot.closeCodeView(),s.classList.add("preview");const y=document.querySelector("header.top-header");y.style.display="none"}return"PREVIEW WIDGET"}async function Le(i,e){return i.querySelectorAll(e).forEach(t=>{for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.remove()}),i}async function Ho(i,e){i.preventDefault();try{const n=new FormData(i.target),a=document.getElementById("convert-dialog")?.querySelector('button[type="submit"]');a.textContent="Converting...";const s=i.target;for(let o=0,l=s.length;o<l;++o)s[o].disabled=!0;await jo(n);for(let o=0,l=s.length;o<l;++o)s[o].disabled=!1;return await we(e),"completed conversion"}catch{W.errorToast("html conversion failed"),await we(e)}}async function jo(i){const e=Object.fromEntries(i),n=`
      <div class="widget-wrapper">
        ${e.htmlCode}
      </div>
    `,t=await Va(n,e?.cssCode?.toString(),e?.jsCode.toString()),s=(await I())?.token,l=(await Fa(t?.id,s))?.id,{html:r,css:c,js:d}=await ja(l,s);await wn(l);const u=document.querySelector(".content-target");u.innerHTML=r;const g=document.querySelector('.cm-content[data-language="css"]');g.textContent=c;const m=document.querySelector('.editor-container .cm-content[data-language="javascript"]');return m.textContent=d,En(),"converted widget"}async function Do(i){return new Ja().init(),de(i),"opened convert HTML to Widget!"}async function oi(){console.log("responsiveModeSwitch called");const i=document.getElementById("device-btn"),e=document.getElementById("device-menu"),n=document.getElementById("device-text"),t=i?.querySelector(".material-symbols-outlined"),a=document.querySelector(".content-target"),s=()=>{i.removeEventListener("click",o),e.removeEventListener("click",l),document.removeEventListener("click",r)},o=u=>{u.stopPropagation();const g=document.getElementById("device-menu");console.log("deviceMenu",g),console.log("Device button clicked, toggling menu. Current show:",g.classList.contains("show")),g.classList.toggle("show"),document.removeEventListener("click",r)},l=u=>{console.log("Menu item clicked");const g=u.target.closest(".dropdown-items");if(g){e.querySelectorAll(".dropdown-items").forEach(T=>{T.classList.remove("active")}),g.classList.add("active");const m=g.querySelector(".material-symbols-outlined")?.textContent?.trim()||"",h=g.querySelector("span:nth-child(2)")?.textContent?.trim()||"";n.textContent=h,t.textContent=m;const p=g.getAttribute("data-option")||"desktop",_=["desktop","tablet","mobileL","mobile"].includes(p)?p:"desktop";console.log("Selected mode:",_);const C={desktop:{width:"100%",margin:"0 auto"},tablet:{maxWidth:"768px",width:"100%",margin:"0 auto"},mobileL:{maxWidth:"578px",width:"100%",margin:"0 auto"},mobile:{maxWidth:"320px",width:"100%",margin:"0 auto"}};a.style.width=C[_].width||"",a.style.maxWidth=C[_].maxWidth||"",a.style.margin=C[_].margin||"",a.style.transition="width 0.4s ease, max-width 0.4s ease",a.classList.remove("mode-desktop","mode-tablet","mode-mobileL","mode-mobile"),a.classList.add(`mode-${_}`),e.classList.remove("show")}},r=u=>{!i.contains(u.target)&&!e.contains(u.target)&&(console.log("Clicked outside, closing dropdown"),e.classList.remove("show"))},c="desktop",d=e.querySelector(`[data-option="${c}"]`);if(d){e.querySelectorAll(".dropdown-items").forEach(h=>h.classList.remove("active")),d.classList.add("active");const u=d.querySelector("span:nth-child(2)")?.textContent?.trim()||"Desktop",g=d.querySelector(".material-symbols-outlined")?.textContent?.trim()||"laptop_windows";n.textContent=u,t.textContent=g;const m={desktop:{width:"100%",margin:"0 auto"},tablet:{maxWidth:"768px",width:"100%",margin:"0 auto"},mobileL:{maxWidth:"568px",width:"100%",margin:"0 auto"},mobile:{maxWidth:"320px",width:"100%",margin:"0 auto"}};a.style.width=m[c].width,a.style.maxWidth=m[c].maxWidth||"",a.style.margin=m[c].margin,a.classList.add(`mode-${c}`)}s(),i.addEventListener("click",o),e.addEventListener("click",l),document.addEventListener("click",r),console.log("responsiveModeSwitch initialized successfully")}async function Ye(i,e){return new Promise(async(n,t)=>{try{let a=new z;a.composition=i,a.fullLinkers=["the_widget","the_widget_widget","the_widget_name","the_widget_html","the_widget_css","the_widget_js","the_widget_timestamp","the_widget_type","the_widget_after_render","the_widget_before_render","the_widget_update","the_widget_mount_child","the_widget_clean","the_widget_s_child","the_widget_version","the_widget_origin","the_widget_s_css_library","the_widget_s_js_library","the_widget_assistant","the_widget_s_custom_function"],a.inpage=100;let s=new z;s.fullLinkers=["the_child_widget","the_child_widget_type","the_child_widget_parent","the_child_widget_wrapper","the_child_widget_info","the_css_library_order","the_css_library_url","the_js_library_order","the_js_library_url","the_assistant_id","the_assistant_input","the_assistant_type","the_custom_function_slug","the_custom_function_code","the_custom_function_name"],s.inpage=100;const l=await he([a,s],e);n(l)}catch(a){console.error("error",a),a?.status===401&&Ae(),t(a)}})}async function No(){R.staticElement?.removeAttribute("draggable");const i=document.querySelector(".content-target"),e=i.querySelectorAll(".edited-widget-container");e?.length&&e.forEach(o=>{o.classList.replace("edited-widget-container","added-widget-container")});const n=await Le(i,"div.mftsccs-marking-element");return i?.querySelector("#widget-details")?.remove(),(i?.querySelectorAll(".mftsccs-marking-rendered")).forEach(o=>{o.remove()}),n.innerHTML.trim()}async function zi(){R.staticElement?.removeAttribute("draggable");const i=document.querySelector(".content-target"),e=await Le(i,"div.mftsccs-marking-element");return i?.querySelector(".widget_selected")?.classList.remove("widget_selected"),i?.querySelector("#widget-details")?.remove(),e.innerHTML.trim()}async function Ze(){const i=document.querySelector(".content-target");i?.querySelector("#widget-details")?.remove();const n=await Le(i,"div.mftsccs-marking-element");return i?.querySelector(".widget_selected")?.classList.remove("widget_selected"),n.innerHTML.trim()}async function dt(){R.staticElement?.removeAttribute("draggable");const i=document.querySelector(".content-target")?.cloneNode(!0);i?.querySelector("#widget-details")?.remove();const t=(await Le(i,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),t}async function xt(i){R.staticElement?.removeAttribute("draggable");const e=document.getElementById(i)?.cloneNode(!0);e?.querySelector("#widget-details")?.remove();const a=(await Le(e,"div.mftsccs-marking-element")).innerHTML.trim();return R.staticElement?.setAttribute("draggable","true"),a}const qo=["image/jpeg","image/jpg","image/png","image/webp"],Fo=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"],Ji=async i=>{try{const e=new FormData;let n;if(Fo.includes(i.type))e.append("file",i,i.name),n=await Vo(e);else if(qo.includes(i.type))e.append("image",i,i.name),n=await Oo(e);else return{message:"Invalid File Format",success:!1};return n?.data?{message:"Upload Success",success:!0,url:n.data}:(alert("File Upload Failed"),{message:"File Upload Failed",success:!1})}catch(e){throw console.error(e),e}},Oo=async(i,e="")=>{try{const n=await fetch(ie.boomURL+"/api/Image/UploadImage",{method:"POST",body:i,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const t=n.headers.get("content-type");t&&t.includes("text/plain")&&console.info(n?.text());const a=await n?.text();return console.error(`${n.status} ${a}`),null}return await n.json()}catch(n){return console.error(n),null}},Vo=async(i,e="")=>{try{const n=await fetch(ie.boomURL+"/api/Image/UploadFile",{method:"POST",body:i,headers:{Authorization:`Bearer ${e}`}});if(!n.ok){const t=n.headers.get("content-type");t&&t.includes("text/plain")&&console.info(n.text());const a=await n.text();return console.error(`${n.status} ${a}`),null}return await n.json()}catch(n){return console.error(n),null}};async function Ro(i=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const n=await hi("public_widget","",!1,e.userId,4,999);let t=new H;t.typeConnection="the_widget_public_name",t.name="widgetPName";let a=new H;a.typeConnection="the_widget_name",a.name="widgetName";let s=new H;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new H;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let l=new H;l.typeConnection="the_public_widget_s_widget",l.selectors=["the_widget_timestamp","the_widget_version"],l.name="widgetLevel",l.inpage=10,l.limit=!0,l.freeschemaQueries=[t,a,s,o];let r=new H;if(r.conceptIds=[n.id],r.outputFormat=fe,r.name="top",r.freeschemaQueries=[l],i!=""){let c=new Ne;c.name="filterName",c.search=i,c.type="the_name",c.operateon="widgetName",c.logicoperator="like";let d=new Ne;d.name="filterPublicName",d.search=i,d.type="the_public_name",d.operateon="widgetPName",d.logicoperator="like",r.filters=[c,d],r.filterLogic="( filterName OR filterPublicName )"}return new Promise(c=>{ye(r,"").subscribe(d=>{c(d)})})}catch(e){throw e}}async function Uo(i=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Folder widget</p>
      </li>
    `;const n=await hi("folder_widget","",!1,e.userId,4,999);let t=new H;t.typeConnection="the_widget_folder_name",t.name="widgetPName";let a=new H;a.typeConnection="the_widget_name",a.name="widgetName";let s=new H;s.typeConnection="the_widget_description",s.name="widgetDescription";let o=new H;o.typeConnection="the_widget_thumbnail",o.name="widgetThumbnail";let l=new H;l.typeConnection="the_folder_s_widget",l.selectors=["the_widget_timestamp","the_widget_version"],l.name="widgetLevel",l.inpage=10,l.limit=!0,l.freeschemaQueries=[t,a,s,o];let r=new H;if(r.conceptIds=[n.id],r.outputFormat=fe,r.name="top",r.freeschemaQueries=[l],i!=""){let c=new Ne;c.name="filterName",c.search=i,c.type="the_name",c.operateon="widgetName",c.logicoperator="like";let d=new Ne;d.name="filterFolderName",d.search=i,d.type="the_folder_name",d.operateon="widgetPName",d.logicoperator="like",r.filters=[c,d],r.filterLogic="( filterName OR filterPublicName )"}return new Promise(c=>{ye(r,"").subscribe(d=>{c(d)})})}catch(e){throw e}}class Xe{static staticElementList}async function zo(i,e){const n=i?.target?.value,t=await I(),a=t?.userId,s=t?.token,o=await Y(e),c=(await Ye(e,s))?.data?.the_widget?.the_widget_before_render?.[0]?.id;c&&await Se(c);const d=await te("before_render",n,!1,a,4,999);await V(o,d,"before_render"),await N.SyncDataOnline(),new Fi().before_render()}async function Jo(i,e){console.log("updateWidgetUpdate event",i),console.log("widgetId",e)}async function Go(i,e){const n=i?.target?.value,t=await I(),a=t?.userId,s=t?.token,o=await Y(e),c=(await Ye(e,s))?.data?.the_widget?.the_widget_after_render?.[0]?.id;c&&await Se(c);const d=await te("after_render",n,!1,a,4,999);await V(o,d,"after_render"),await N.SyncDataOnline();const g=document.getElementById("mountInput")?.value,h=document.getElementById("mountChildWidgetsInput")?.value,p=new gt;p.componentDidMountFunction=g,p.addEventFunction=n,p.mountChildWidgetsFunction=h;const v=document.querySelector(".content-target"),_=await p.mount(v);console.log("appContentHTML",_)}async function Qo(i,e){const n=i?.target?.value,t=await I(),a=t?.userId,s=t?.token,o=await Y(e),c=(await Ye(e,s))?.data?.the_widget?.the_widget_mount_child?.[0]?.id;c&&await Se(c);const d=await te("mount_child",n,!1,a,4,999);await V(o,d,"mount_child"),await N.SyncDataOnline()}class Zo{widgetDocumentationModalHTML;constructor(){this.init()}init(){this.widgetDocumentationModalHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.widgetDocumentationModalHTML)}getHtml(){return window.saveWidgetDocumentationEditor=er,`
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
    `}}async function Yo(i,e){const n=document.getElementById("documentation-view");await Pe(ie.documentation_preview_widget,n,{currentWidgetId:e})}let lt,an="",gn,pn;async function Xo(i,e){gn=i,e==="preview"?new Ko:new Zo;const n=new H;n.typeConnection="the_widget_documentation",n.name="documentationText",n.selectors=["the_documentation_text"];const t=new H;t.typeConnection="the_widget_s_documentation",t.name="documentationBlank",t.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const a=new H;a.typeConnection="the_documentation_s_json_list",a.name="documentationJSON",a.selectors=["the_json_list_key","the_json_list_value"],t.freeschemaQueries=[a];const s=new H;s.conceptIds=[gn],s.freeschemaQueries=[n,t],s.inpage=100,s.outputFormat=fe,await ye(s,"").subscribe(async o=>{console.log("documentation data ->",o);const l=o?.[0]?.data?.the_widget?.the_widget_documentation?.data?.the_documentation?.the_documentation_text?.data?.the_text||"";l&&(an=l);const r=o?.[0]?.data?.the_widget?.the_widget_s_documentation;if(r?.length){const c=r?.map(d=>{const u=d?.data?.the_documentation,g=u?.the_documentation_type?.data?.the_type,m=u?.the_documentation_content?.data?.the_content,h=u?.the_documentation_creator_email?.data?.the_creator_email,p=u?.the_documentation_doc_title?.data?.the_doc_title,v=u?.the_documentation_method?.data?.the_method,_=u?.the_documentation_method_url?.data?.the_method_url,C=u?.the_documentation_bearer_token?.data?.the_bearer_token,T=u?.the_documentation_username?.data?.the_username,w=u?.the_documentation_password?.data?.the_password,y=u?.the_documentation_auth_type?.data?.the_auth_type,E=u?.the_documentation_s_json_list,S=u?.the_documentation_api_script?.data?.the_api_script,b=u?.the_documentation_api_body?.data?.the_api_body,L=u?.the_documentation_language?.data?.the_language,A=u?.the_documentation_return?.data?.the_return,x=u?.the_documentation_code_editor?.data?.the_code_editor,k=u?.the_documentation_s_doc_url,P=u?.the_documentation_s_image_url,B=u?.the_documentation_s_video_link;let $={type:g,content:m,creatorEmail:h,title:p};if(g==="blank")$={...$};else if(g==="api"){const F=[];E?.length&&E?.forEach(K=>{F.push({key:K?.data?.the_json_list?.the_json_list_key?.data?.the_key,value:K?.data?.the_json_list?.the_json_list_value?.data?.the_value})}),$={...$,method:v,methodURL:_,authType:y,username:T,password:w,bearerToken:C,json:F,script:S,body:b}}else g==="function"&&($={...$,language:L,return:A,codeEditor:x});const U=[],ee=[],Z=[];return P?.length&&P?.forEach(F=>{U.push(F?.data?.the_image_url)}),B?.length&&B?.forEach(F=>{ee.push(F?.data?.the_video_link)}),k?.length&&k?.forEach(F=>{Z.push(F.data?.the_doc_url)}),$={...$,imageList:U,linkList:Z,videoList:ee},$});console.log("documentationDataList",c),an=c}pn=o?.[0]?.data?.the_widget?.the_widget_documentation?.id,e!=="preview"&&tr(l)}),e==="preview"?(await de("widget-documentation-preview-modal"),Yo(an,i)):await de("widget-documentation-modal")}async function er(){if(lt){const i=lt.getData(),e=await Q(gn),t=(await I())?.userId;if(pn)await Ke(pn,"the_documentation_text","text",i,t),await N.SyncDataOnline();else{const a=await O("documentation",t,{text:i});await G(e,a,"documentation"),await N.SyncDataOnline()}W.successfullToast("Documentation is saved."),lt.setData(i)}else console.error("Editor not initialized"),W.errorToast("Documentation couldn't saved.")}function tr(i){const e=document.querySelector("#documentation-editor");e&&Pa.create(e,{licenseKey:"GPL"}).then(n=>{lt=n;const t=i;lt.setData(t)}).catch(n=>{console.error("Error initializing CKEditor:",n)})}class nr{constructor(){this.init()}init(){document.getElementById("btn-take-tour")?.addEventListener("click",n=>{if(n.target.matches(".btn-tour")){const t=n.target.dataset.tourStatus;this.startTour(t)}})}startTour(e){const n=new xa.Tour({defaultStepOptions:{classes:"wico",scrollTo:!0,cancelIcon:{enabled:!0}},useModalOverlay:!0}),t=[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Next",action:n.next}];n.addStep({id:"welcome",title:"👋 Welcome to Widget Conceptualizer",text:["This short tour will walk you through the essentials. Let's begin. Start building widgets today!"],buttons:[{text:"Remind me later",classes:"back-button",action:n.complete},{text:"Next",classes:"next-button",action:()=>{n.next()}}]}),n.addStep({id:"step-create-widget",title:"Create a New Widget",text:["Start by creating a new widget."],classes:"onboarding-boomconsole",highlightClass:"highlight",attachTo:{element:".header-section",on:"bottom-start"},buttons:t}),n.addStep({id:"step-widget-panel",classes:"tour-widget-panel",title:"Workspace Area",text:"This is your creative canvas. Drag and drop elements, build widgets, apps, or full pages—right in the workspace.",attachTo:{element:".content-target",on:"top"},buttons:t}),n.addStep({id:"step-builder-meu",title:"Builder Menu",text:"This menu provides essential navigation tools. Use it to manage projects, access assets, open pages, and explore saved widgets.",attachTo:{element:".sidebar-collapsed",on:"left"},buttons:t}),n.addStep({id:"step-properties",title:"Properties Panel",text:"Adjust Styling, add properties like layout, colors, fonts, and more.",attachTo:{element:()=>{const a=document.querySelector(".accordion-widget-properties a"),s=new Event("click",{bubbles:!0,cancelable:!0});return a.dispatchEvent(s),".right-aside"},on:"left"},buttons:t}),n.addStep({id:"step-design-code-mode",title:"Design & Code Modes",text:[`
          <ul>
            <li><strong>Design Panel</strong>: Focus purely on design. Perfect for layout and styling.</li>
            <br>
            <li><strong>Code Panel</strong>: Switch here to write or edit your widget's HTML, CSS, and lifecycle code.</li>
          </ul>
          `],attachTo:{element:".header-mid-section",on:"bottom"},buttons:t}),n.addStep({id:"step-preview",title:"Preview Your Widget",text:[" Click <strong>Preview</strong> to see how your widget looks live. "],attachTo:{element:"#preview-btn",on:"bottom"},buttons:t}),n.addStep({id:"step-save",title:"Save your widget",text:"After you finish, save and update your widget. Saved widgets are listed in the 'Saved Widgets' menu of the left sidebar.",attachTo:{element:"#widget-btn-wrapper button",on:"bottom"},buttons:[{classes:"back-button",text:"Back",action:n.back},{classes:"next-button",text:"Finish",action:()=>{n.complete(),e||this.updateTourStatus()}}]}),n.start()}async updateTourStatus(){this.closeTour();const e=await I(),n=e?.userId,t=e?.entityId,a=await Q(t),s=new va;try{await s.initialize();const o=await s.MakeTheInstanceConceptLocal("the_tour_status","true",!1,n,4,999);await s.CreateConnectionBetweenEntityLocal(a,o,"tour_status"),await s.commitTransaction()}catch{s.rollbackTransaction()}}closeTour(){const e=document.getElementById("tour-container");e&&e.remove()}}class ir{_layoutWidgetHTMLService=new Hi;_pagesHTMLService=new Ei;_projectsService=new Ri;_projectsHTMLService=new Vi;_pagesService=new Mn;_elemensHtml="";_savedWidgetsHtml="";_layoutsHtml="";_templateLayoutsHtml="";_publicWidgetsHtml="";_projectsHtml="";_pagesHtml="";_loginDetailObject={};constructor(){}async initialize(){const e=await Dt.getInstance().getLoginInfo();this._loginDetailObject=e,this.registerGlobalFunctions(),e.isLoggedIn&&(await this.setupAssetListener(),await this.responsiveSidebar())}setPublicWidgets(e){this._publicWidgetsHtml=e}setSavedWidgets(e){this._savedWidgetsHtml=e}registerGlobalFunctions(){const e=window,n={openRenameWidgetModal:gr,renameWidget:Qi,loadWidget:Oe,deleteWidget:lr,postWidget:cr,saveFromPublic:q.saveFromPublic,removeFromTemplate:q.removeFromTemplate,downloadPage:vo,downloadWebpage:fo,updateWidgetMount:zo,updateWidgetUpdate:Jo,updateWidgetEvents:Go,updateMountChildWidgets:Qo,navbarFunctions:ft,DeleteConceptById:Se,uploadAssetsFile:pr,removeAssetFile:hr,clearSearch:fr,toggleClearButton:Zi,toggleDropdown:ar,openDocumentationModal:Xo,removeSubSidebar:this.removeSubSidebar,searchMyWidgets:t=>this.searchWidgets(t,"#saved-widget-list-container"),searchElements:t=>this.searchWidgets(t,"#created-elements"),searchPublicWidgets:t=>this.searchPublicWidgets(t),searchPages:t=>this.searchWidgets(t,"#saved-page-list-container"),searchProjects:t=>this.searchWidgets(t,"#saved-project-list-container"),createProjectModal:()=>{this._projectsHTMLService.createProjectModal()},searchWidgets:t=>this.searchWidgets(t),switchLayoutType:t=>{const a=t.target,s=document.getElementById("fslayout-template-container"),o=document.getElementById("fslayout-list-container");a.value==="custom"?(o?.style.setProperty("display","flex"),s?.style.setProperty("display","none")):(o?.style.setProperty("display","none"),s?.style.setProperty("display","flex"))}};Object.assign(e,n)}async setupAssetListener(){const e=await I(),n=new H;n.typeConnection="the_entity_s_asset",n.name="itemname";const t=new H;t.conceptIds=[e.entityId],t.freeschemaQueries=[n],t.outputFormat=fe,t.inpage=100,ye(t,"").subscribe(a=>{const s=a?.[0]?.data?.the_entity?.the_entity_s_asset,o=this.generateAssetHTML(s),l=document.getElementById("assets-library-list-container");l&&(l.innerHTML=o)})}generateAssetHTML(e){return e?.length?e.map(n=>`
            <div class="asset-item">
                <div class="asset-file border w-100 h-100 position-relative asset-hover-shadow">
                    <span class="delete-asset"><img src="./images/icons/cross-close.svg" alt="" class="icon" onclick="removeAssetFile(event, ${n.id})" /></span>
                    <img class="asset-img" src="${n?.data?.the_asset}" 
                             class="img-fluid" 
                             title="Copy Path" 
                             onclick="navigator.clipboard.writeText('${n?.data?.the_asset}'); alert('copied');" />
                </div>
            </div>
        `).join(""):'<li class="list-unstyled"><p class="text-center my-3 text-secondary">No Saved Assets</p></li>'}searchWidgets(e,n){n||(n=`#${e.target?.dataset?.id}`||"");const a=e.target.value.toLowerCase();document.querySelectorAll(`${n} li`).forEach(o=>{const l=(o.textContent||"").toLowerCase();o.style.display=l.includes(a)?"":"none"})}searchPublicWidgets(e){const t=e.target.value.toLowerCase();fn(t).then(a=>{cn.navbar.setPublicWidgets(a),this.updatePopupMenu("publicWidgets",a)})}async responsiveSidebar(){const e={mainItems:[{id:"elements",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);document.querySelector(".sidebar")?.remove(),document.querySelector("#column-left")?.appendChild(n),Qt().then(t=>{this._elemensHtml=t;const a=document.getElementById("created-elements");a&&(a.innerHTML=t||"")}),hn().then(t=>{this._savedWidgetsHtml=t;const a=document.getElementById("saved-widget-list-container");a&&(console.log("container adding"),a.innerHTML=t||"")}),fn().then(t=>{this._publicWidgetsHtml=t;const a=document.getElementById("public-widget-list-container");a&&(a.innerHTML=t||"")}),this._layoutsHtml=await this._layoutWidgetHTMLService.getLayoutListHTML()||"",this._templateLayoutsHtml=await this._layoutWidgetHTMLService.getTemplateLayoutsHTML()||"",this._projectsHtml=await this._projectsHTMLService.getProjectsListHTML()||"",this._pagesHtml=await this._pagesHTMLService.getPagesListHTML()||""}async createSidebar(e){this.removeSubSidebar();const n=document.createElement("nav");n.className="sidebar sidebar-collapsed";let t=!0;const a=()=>{t=!t,n.classList.toggle("sidebar-collapsed",t),t||(this.removeSubSidebar(),this.removeActiveClass())};return n.appendChild(this.createSidebarHeader(a)),n.appendChild(this.createSidebarMenu(e.mainItems)),n.appendChild(this.createSection("Widgets")),n.appendChild(this.createSidebarMenu(e.widgetItems)),n.appendChild(this.createSection("Library")),n.appendChild(this.createSidebarMenu(e.libraryItems)),n.appendChild(this.createSection("Configuration")),n.appendChild(this.createSidebarMenu(e.configurationItems)),n}createSidebarHeader(e){const n=document.createElement("div");return n.className="menu-toggle",n.innerHTML=`<span class="toggle-icon">
            <!-- <img src="./images/icons/menu-nav.svg" alt="" class="icon" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15.3333 9H2M17.5556 16H2M22 2H2" stroke="#AAAAAA" stroke-width="2.22222" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>`,n.addEventListener("click",e),n}createSidebarMenu(e){const n=document.createElement("div");return n.className="sidebar-menu",e?.forEach(t=>n.appendChild(this.createMenuItem(t))),n}createMenuItem(e){const n=document.createElement("div");return n.id=e.id,n.onclick=t=>this.handleNavItemClick(t),e.id==="widget-tour"?(n.className="nav-item",n.innerHTML=`
                <span class="nav-icon" title="${e.text}">${e.icon}</span>
                <span class="nav-text">${e.text}</span>
            `,n.onclick=()=>{new nr().startTour(this._loginDetailObject?.tourStatus)}):e?.link?n.innerHTML=`
                <router-link href="${e.link}" class="nav-item">
                    <span class="nav-icon" title="${e.text}">${e.icon}</span>
                    <span class="nav-text">${e.text}</span>
                </router-link>
            `:(n.className="nav-item",n.innerHTML=`
            <span class="nav-icon" title="${e.text}">${e.icon}</span>
            <span class="nav-text">${e.text}</span>
        `),n}createSection(e){const n=document.createElement("div");return n.className="sidebar-section",n.innerHTML=`<hr /><span class="section-title">${e}</span>`,n}async handleNavItemClick(e){console.log("handleNavItemClick");const n=document.querySelector(".sidebar"),t=n?.classList.contains("sidebar-collapsed"),a=e.target.closest(".nav-item"),s=a?.id,o=a?.classList.contains("active"),l=a?.querySelector(".nav-icon")?.getAttribute("title")||"";if(!s||o){this.removeSubSidebar();return}if(t){this.removeSubSidebar(),a?.classList.add("active");const r=await this.createSubSidebarMenu(s,l);if(document.querySelector("#column-left")?.appendChild(r),s==="folderWidgets"){const c=await I(),d=document.getElementById("folder-widget-container");console.log("containerEl",d);const u=await Pe(ie.folder_widget,d).then(g=>{g.dataChange(async m=>{if(console.log("dataChange",m),m.displayType==="photo"||m.type==="Image"||m.displayType==="widget"||m.type==="widget"){let h=await Bi(e,m);console.log("asdff",h)}else{let h=await Ee(Number(m),c.token),p=await re(h?h.widgetId:Number(m));console.log("widgetTree",p),await Oe(null,p.id)}}),console.log("output",g)});console.log("xyz",u)}if(s==="assets"){const c=document.getElementById("default-list-container");await Pe(ie.assets_widget,c)}}else n?.classList.add("sidebar-collapsed"),this.handleNavItemClick(e)}async updatePopupMenu(e,n){if(e=="publicWidgets"){let t=document.querySelector("#public-widget-list-container");t&&(t.innerHTML=n)}if(e=="folderWidgets"){let t=document.querySelector("#folder-widget-container");t&&(t.innerHTML=n)}}async createSubSidebarMenu(e,n){const t=document.createElement("section");if(t.className="sub-sidebar",e==="layout")t.innerHTML=`
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
                </div>`;else{let a="";e==="elements"&&this._loginDetailObject?.isAdmin&&(a=`
                    <button onclick="createWidgetModalOpen('element-dialog')" class="btn btn-primary d-flex" title="Create Element">
                        Add New <span class="material-symbols-outlined"> add </span>
                    </button>
                `),t.innerHTML=`
                <div class="sub-sidebar-header">
                    <span>${n}</span>
                    ${a}
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
        </li>`,a="",s="";switch(e){case"elements":t=this._elemensHtml||t,a=this.generateSearchHtml("element-search","Search elements...","searchElements");break;case"savedWidgets":this._savedWidgetsHtml&&(t=this._savedWidgetsHtml),a=this.generateSearchHtml("myWidget-search","Search widgets...","searchMyWidgets");break;case"publicWidgets":t=this._publicWidgetsHtml||t,a=this.generateSearchHtml("publicWidget-search","Search public widgets...","searchPublicWidgets");break;case"pages":t=this._pagesHtml||t,a=this.generateSearchHtml("page-search","Search pages...","searchPages"),s=this.createNewHtml("fs-create-page-button",'<img src="./images/icons/add pages.svg" alt="" class="icon" />',"Create New Page");break;case"projects":t=this._projectsHtml||t,a=this.generateSearchHtml("project-search","Search projects...","searchProjects"),s=this.createNewHtml("fs-create-project-button",'<img src="./images/icons/add new projects icon.svg" alt="" class="icon" />',"Create New Project");break;case"layout":t=this._layoutsHtml||t;break;case"assets":t=`
                    <div class="asset-list"> 
                        <ul id="assets-library-list-container">
                            ${this.generateAssetHTML([])}
                        </ul>
                    </div>
                `,a="";break}return`
            <div class="sub-sidebar-content">
                <div class="sub-sidebar-search">${a}${s}</div>
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
                    </svg>`,text:"Community",link:"/Community"}]},n=await this.createSidebar(e);return document.querySelector(".sidebar")?.remove(),n.outerHTML}}async function Bn(i){const e=document.querySelectorAll("link.vde-css");e?.length&&e?.forEach(t=>{t.remove()});const n=document.querySelectorAll("script.vde-js");if(n?.length&&n?.forEach(t=>{t.remove()}),await Xt(i),i?.children?.length)for(const t of i?.children){const a=t?.library;(a?.css?.length||a?.js.length)&&await Bn(t)}}async function ar(i,e){i.stopPropagation();const n=document.getElementById(`dropdown-menu-${e}`),t=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),n&&!t&&n.classList.add("show")}document.addEventListener("click",i=>{document.querySelectorAll(".dropdown-menu").forEach(n=>{const t=i.target;t&&!n.contains(t)&&!t.closest(".dropdown-icon")&&n.classList.remove("show")})});async function ut(i,e){const n=document.getElementById(e),a=i.target.closest(".accordion-wrapper").querySelector("span");if(n){if(n.style.display==="block"||getComputedStyle(n).display==="block")n.style.display="none",a.textContent=e.endsWith("-content")?"add_circle":"expand_more";else if(n.style.display="block",a.textContent=e.endsWith("-content")?"do_not_disturb_on":"expand_less",n.tagName==="FORM"||n.id==="navigator-container"||n.id==="element-attributes"||n.id==="library-css"||n.id==="library-js"||n.id==="general-content"||n.id==="size-content"||n.id==="display-content"||n.id==="typography-content")return}}function sr(i){const e=document.getElementById(i);e&&(e.style.display!=="block"||getComputedStyle(e).display!=="block")&&(e.style.display="block")}async function Qt(){const i=await Dt.getInstance().getLoginInfo(),e=await Gi();return Xe.staticElementList=e,Array.isArray(e)?e?.map(t=>{const a=t?.id,s=t?.data?.the_element?.the_element_name?.[0]?.data?.the_name,o=t?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,l=t?.data?.the_element?.the_element_void?.[0]?.data?.the_void,r=t?.data?.the_element?.the_element_default?.[0]?.data?.the_default||"",c=t?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon||"https://static.thenounproject.com/png/7422318-512.png";return`<li class="element-item" title="${s}">${i.isAdmin?`<a data-elementid="${a}" data-type="${o}" data-default="${r}" data-void="${l}" data-text="${s}" draggable="true" ondragstart="_dragService.onDragStart(event)" class="element-li">

        <div class="element-details">
        <img src="${c}" class="element-icon">
        <span>${s}</span>
        </div>
        <button class="btn-more-element" onclick="toggleElementMenu(event, ${a})" title="More">
          <span class="material-symbols-outlined">more_vert</span>
        </button>
        <!-- The dropdown menu (hidden by default) -->
        <!-- <div id="menu-${a}" class="dropdown-menu" style="display: none;">
          <ul>
            <li><button onclick="editElementModalOpen('update-element-dialog',${a})">Edit</button></li>
            <li><button onclick="deleteElement(${a})">Delete</button></li>
          </ul>
        </div>-->
        <ul id="menu-${a}" class="dropdown-menu">
          <li class="d-flex align-items-center justify-content-between "
            onclick="editElementModalOpen(event, 'update-element-dialog',${a})">
            <span>Edit</span>
            <span class="material-symbols-outlined ">edit </span>
          </li>
          <li class="d-flex align-items-center justify-content-between " onclick="deleteElement(event, ${a})">
            <span>Delete</span>
            <span class="material-symbols-outlined ">delete </span>
          </li>
        </ul>
        </a>`:`<a data-elementid="${a}" data-type="${o}" data-default="${r}" data-void="${l}" data-text="${s}" draggable="true" ondragstart="_dragService.onDragStart(event)">
          <!--  -->
          <div class="element-details">
          <img src="${c}" class="element-icon">
          <span>${s}</span>
          </div>
          </a>`}</li>`}).join(""):""}async function Gi(){const i=ie?.boomURL,e=[{type:"the_element",fullLinkers:["the_element_s_attribute"],inpage:100,page:1,logic:"or",filterSearches:[],selectors:["the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division"]},{fullLinkers:["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],inpage:100,page:1,logic:"or",filterSearches:[]}],n=new Headers;n.append("Content-Type","application/json");const a=await(await fetch(`${i}/api/search-all-without-auth-with-linker?inpage=100&page=1`,{method:"POST",headers:n,body:JSON.stringify(e),redirect:"follow"})).json();return a?.sort((s,o)=>{s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();const l=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase(),r=o?.data?.the_element?.the_element_name?.[0]?.data?.the_name?.toLowerCase();return l<r?-1:l>r?1:0}),a}async function hn(){try{const i=await I();if(!i)return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No saved widget</p>
        </li>
      `;const e=i?.entityId;await $e();const n=new Ne;n.type="the_public_widget",n.search="",n.operateon="public",n.name="publicfilter",n.logicoperator="=";const t=new H;t.typeConnection="the_public_widget_s_widget",t.freeschemaQueries=[],t.name="public",t.reverse=!0;const a=new H;a.typeConnection="the_widget_recent",a.name="copywidgets",a.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_version","the_widget_origin"],a.freeschemaQueries=[t];const s=new H;s.typeConnection="the_entity_s_widget",s.name="mywidgets",s.selectors=["the_widget","the_widget_name","the_widget_timestamp","the_widget_recent"],s.freeschemaQueries=[a];const o=new H;return o.conceptIds=[e],o.freeschemaQueries=[s],o.inpage=100,o.outputFormat=fe,await new Promise((r,c)=>{ye(o,"").subscribe(async d=>{console.log("widget data pub",d);const u=d?.[0]?.data?.the_entity?.the_entity_s_widget||[];if(!u.length)return r(`
              <li class="list-unstyled">
                <p class="text-center my-3 text-secondary">No saved widget</p>
              </li>
            `);const m=(await Promise.all(u.map(async h=>{const p=h?.data?.the_widget,v=p?.the_widget_name?.data?.the_name,_=p?.the_widget_recent?p?.the_widget_recent?.data?.the_widget?.the_widget_html?.data?.the_html:p?.the_widget_html?.data?.the_html,C=p?.the_widget_recent?p?.the_widget_recent?.data?.the_widget?.the_widget_css?.data?.the_css:p?.the_widget_css?.data?.the_css,T=p?.the_widget_recent?p?.the_widget_recent?.data?.the_widget?.the_widget_js?.data?.the_js:p?.the_widget_js?.data?.the_js,w=p?.the_widget_recent?p?.the_widget_recent?.data?.the_widget?.the_widget_timestamp?.data?.the_timestamp:p?.the_widget_timestamp?.data?.the_timestamp,y=!!p?.the_widget_recent?.data?.the_widget?.the_public_widget_s_widget_reverse;return{id:h?.id,name:v,html:_,css:C,js:T,timestamp:w,isPosted:y}}))).map(h=>`
                      <li class="widget-item" >

        <router-link href="/?widget-id=${h?.id}" class="savedWidgetRouter" onclick="loadWidget(event, ${h?.id})" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${h?.id}">
    <span class="material-symbols-outlined"> drag_indicator </span>
    ${h?.name}
  </router-link>

  <!-- Three-Dot Dropdown Icon -->
  <span class="material-symbols-outlined dropdown-icon" onclick="toggleDropdown(event, ${h?.id})" title="Options"> more_vert </span>

  <!-- Dropdown Menu -->
  <ul class="dropdown-menu" id="dropdown-menu-${h?.id}">

  <li class="d-flex align-items-center justify-content-between post-icon" onclick="${h.isPosted?"":`postWidget(event, ${h?.id})`}" title="${h.isPosted?"Posted":"Post widget"}" style="${h.isPosted?"color: green; cursor: default;":""}">
  <span>${h.isPosted?"Posted":"Post widget"}</span>
    <span class="material-symbols-outlined  ${h.isPosted?"posted":""}" >
      ${h.isPosted?"done":"post_add"}
    </span>
    </li>

    <li class="d-flex align-items-center justify-content-between "  onclick="openRenameWidgetModal(event, ${h?.id})">
    <span >Rename</span>
    <span class="material-symbols-outlined " >edit </span>
    </li>

    <router-link class="w-100 p-0" target="_blank" href="/preview?pageId=${h.id}">
    <li class="d-flex align-items-center justify-content-between w-100">
    <span>Preview</span>
    <span class="material-symbols-outlined">preview </span>
    </li>
    </router-link>

    <li class="d-flex align-items-center justify-content-between delete-icon"  onclick="deleteWidget(event, ${h?.id})">
    <span >Delete</span>
    <span class="material-symbols-outlined " >delete </span>
    </li>

    <li class="d-flex align-items-center justify-content-between" onclick="downloadWebpage(${h?.id})">
    <span>Download</span>
    <span class="material-symbols-outlined">download </span>
    </li>

    <li class="d-flex align-items-center justify-content-between" onclick="saveWidgetToFolderBtn(${h?.id}, true)">
    <span>Save To Folder</span>
    <span class="material-symbols-outlined">topic </span>
    </li>

    <!-- <li class="d-flex align-items-center justify-content-between"  onclick="openDocumentationModal(${h?.id})">
      <span>Documentation</span>
      <span class="material-symbols-outlined">description</span>
    </li> -->
  </ul>

  <div id="spinner-${h.id}" class="spinner-border spinner-border-sm text-primary position-absolute top-50 start-50 translate-middle d-none" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</li>
              `).join("");r(m)})})}catch(i){console.error("Error in getMyWidgetsList:",i),W.errorToast(i?.message||"An error occurred while fetching widgets"),i?.status===401&&Ae()}}async function et(){try{const i=document.getElementById("builder-workarea");if(!i)return;i.innerHTML="",await Bn(f.widgetTree);const e=await Te(f.widgetTree,i);f.selectedStaticWidgetTreeInfo={widgetTree:f.widgetTree,isChildWidget:!1,childWidgetIndex:0},await X(f.widgetTree,!1,e),ce(),pe()}catch(i){throw new Error(`error loading widget with widget tree ${i.message}`)}}async function ri(i){const e=i?JSON.parse(i):"";if(e)try{const n=document.getElementById("builder-workarea");n.innerHTML="";const t=await Te(e,n),a=document.getElementById("select-box");a.style.display="none";const s=document.getElementById("element-attributes");s.innerHTML=`
      <div class="row">
        <div class="text-center my-3 text-secondary">
          <p>Select an element to view and edit its attributes</p>
        </div>
      </div>
    `,await X(e,!1,t),ce(),pe()}catch(n){throw new Error(`error loading widget with widget tree ${n.message}`)}}async function Oe(i,e,n){try{if(i?.preventDefault(),i?.stopPropagation(),ft.collapseNavbar(),await $e(),await je(i),n&&typeof n!="number"||Number.isNaN(n)||e&&typeof e!="number"||Number.isNaN(e)){W.infoMessageToast("Widget id is in different format. Please check and update",4),je(i);return}history.pushState({},"",`?widget-id=${n||e}`);const t=document.getElementById("preview-btn");t&&t.setAttribute("data-widgetid",e.toString()),or(),rr(),Tn(),Di(),await ji();let a=Sn();a.classList.contains("fspage")&&a.classList.remove("fspage");const o=(await I())?.token;let l=null;i&&(l=await Ee(e,o),console.log("latestVersionKnown",l));let r=await re(l?l.widgetId:e);const c=document.getElementById("widgetNameValue");c&&r?.name&&(c.value=r?.name);const d=document.getElementById("widget-builder");d&&r?.name&&(d.textContent="Widget Builder Panel: "+r?.name,d.setAttribute("title",`Widget Builder Panel: ${r?.name}`)),await Bn(r);const u=await Te(r,a);f.widgetTree=r,f.selectedStaticWidgetTreeInfo={widgetTree:f.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},await f.updatePublishedStatus(),await X(r,!1,u,!0),await fs(l?.widgetId??e);const g=document.getElementById("preview-btn");return g.setAttribute("onclick","previewWidget(event)"),g.setAttribute("data-widgetid",`${e}`),g.removeAttribute("data-pageid"),console.log("load StaticWidgetClass.staticWidgetTree ->",f.staticWidgetTree),mn(),q.enableWidgetButtons(),q.initializeWidgetVersions(n||e,r?.version?r.version.toString():"original",r?.timestamp),D.renderActionHistory(),D.updateActionHistories(),ce(),pe(),Ln(),""}catch(t){console.error(t),W.errorToast(t?.message,4),mn(),je(i)}}function or(){const e=document.getElementById("tab-container")?.querySelector("button[data-tab-id='wico-tab-pageInfo']");e&&(e.style.display="none");const n=document.getElementById("page-properties");n&&(n.style.display="none");const t=document.querySelector("button[data-tab-id='wico-tab-navigator']");t&&t.click()}function rr(){document.title="Widget Conceptualizer",mt("description","Widget Conceptualizer"),mt("keywords","widget conceptualizer, widget conceptualiser, widget builder, widget, conecept, connection")}async function lr(i,e){i.stopPropagation();try{const n=confirm("Do you want to delete the Widget?");if(await $e(),n){W.infoMessageToast("Deleting the widget...",0),await Bo(e),await q.renderSavedWidgets();const t=new URLSearchParams(window.location.search).get("widget-id");return t&&parseInt(t)===e&&await je(i),document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Widget Deleted Successfully"),"Widget is deleted successfully!"}else return}catch(n){document.querySelector(".infoMessageToast")?.remove(),W.successfullToast("Widget Deleted Successfully"),W.errorToast(n.message?n.message:"Failed to delete widget"),console.error("Failed to delete widget:",n)}}async function cr(i,e){i.stopPropagation();const n=document.getElementById("postWidgetModal");n&&n.remove();const t=await I(),a=t?.entityId===101651686||t?.entityId===101279491,s=document.createElement("dialog");s.id="postWidgetModal",s.className="col-md-6 a-dialog",s.innerHTML=`
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
        ${a?`
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
  `,document.body.appendChild(s);const o=s.querySelector("#pasteArea"),l=s.querySelector("#widgetThumbnail"),r=s.querySelector("#imagePreview img"),c=s.querySelector("#imagePreview"),d=s.querySelector("#pasteText");function u(h){const p=new FileReader;p.onload=v=>{r&&v.target?.result&&(r.src=v.target.result,c.classList.remove("d-none"),d.classList.add("d-none"))},p.readAsDataURL(h)}l?.addEventListener("change",h=>{const p=h.target.files?.[0];p&&u(p)});function g(h){const p=h.clipboardData?.items;if(p){for(let v=0;v<p.length;v++)if(p[v].type.indexOf("image")!==-1){const _=p[v].getAsFile();if(_&&l){const C=new DataTransfer;C.items.add(_),l.files=C.files,u(_);break}}}}o?.addEventListener("paste",h=>g(h)),s.addEventListener("paste",h=>g(h)),s.querySelector("#post-widget-form")?.addEventListener("submit",h=>{h.preventDefault(),dr(e,s)}),s.showModal()}async function dr(i,e){const n=document.querySelector(`#spinner-${i}`),t=e.querySelector('button[type="submit"]');try{t&&(t.disabled=!0,t.textContent="Posting...",W.infoMessageToast("Posting Widget to Public...",0)),n&&n.classList.remove("d-none"),await $e();const a=await I(),s=document.getElementById("widgetPublicName").value,o=document.getElementById("widgetDescription").value,l=document.getElementById("widgetThumbnail");if(console.log("File Input Debug:",{inputExists:!!l,filesExists:!!l?.files,filesLength:l?.files?.length,value:l?.value,firstFile:l?.files?.[0],description:o}),!l?.files?.length)throw console.error("File validation failed:",{inputExists:!!l,filesLength:l?.files?.length}),new Error("Please provide a thumbnail image");const r=l.files?.[0];if(console.log("Thumbnail file:",{name:r.name,type:r.type,size:r.size}),!r||!l.value)throw new Error("Please provide a thumbnail image");const c=await Ji(r);if(!c.success)throw new Error("Failed to upload thumbnail");const d=await Ee(i,a.token);if(d&&(await Ie(d.widgetId,"the_public_widget_s_widget",!0)).length){document.querySelector(".infoMessageToast")?.remove(),W.infoMessageToast("Widget is already public.");return}const u=document.getElementById("postAsTemplate")?.checked;let g=null;if(d)g=await Q(d.widgetId);else{const C=await Y(i);g=await q.createWidgetCopy(C,a.userId,a.token)}const m=await te("public_name",s,!1,a.userId,4,999),h=await te("description",o,!1,a.userId,4,999),p=await te("thumbnail",c.url||"no attachment",!1,a.userId,4,999);await V(g,h,"description"),await V(g,p,"thumbnail"),await V(g,m,"public_name");const v=await te("public_widget","",!1,a.userId,4,999);if(await V(v,g,"s_widget"),u){const T=await te("template_name",s,!1,a.userId,4,999),w=await te("template_thumbnail",c.url||"no attachment",!1,a.userId,4,999);await V(g,w,"template_thumbnail"),await V(g,T,"template_name");const y=await te("template_widget","",!1,a.userId,4,999);await V(y,g,"s_widget")}await N.SyncDataOnline(),await q.renderPublicWidgets(),await q.renderSavedWidgets(),u&&await q.renderTemplateLayouts(),e.close(),document.querySelector(".infoMessageToast")?.remove(),setTimeout(()=>{W.successfullToast(`Widget Posted to Public${u?" and Templates":""}`)},300)}catch(a){console.error("Error posting widget:",a),document.querySelector(".infoMessageToast")?.remove(),W.errorToast("Failed to post widget"),t&&(t.disabled=!1,t.textContent="Post Widget")}finally{n&&n.classList.add("d-none")}}async function fn(i=""){try{const e=await I();if(!e)return`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `;const t=(await Ro(i))[0]?.data?.the_public_widget?.the_public_widget_s_widget||[],a=await Promise.all(t.map(async l=>{const r=l?.data?.the_widget,d=r?.the_widget_public_name?.data?.the_public_name||`${r?.the_widget_name?.data?.the_name} ${r?.the_widget_version?.data?.the_version>1?"v"+r?.the_widget_version?.data?.the_version:""}`,u=r?.the_widget_description?.data?.the_description,g=r?.the_widget_thumbnail?.data?.the_thumbnail,m=r?.the_widget_timestamp?.data?.the_timestamp;return{id:l?.id,name:d,timestamp:m,description:u,thumbnail:g}}));return a?.length?(await Promise.all(a?.map(async l=>{const c=(await Y(l.id)).userId===e.userId,d=l.description?l.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link class="publicWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${l?.id}">
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
        `})||[])).join(""):`
      <li class="list-unstyled">
        <p class="text-center my-3 text-secondary">No Public widget</p>
      </li>
    `}catch(e){console.error("error",e),e?.status===401&&Ae()}}async function ur(i=""){console.log("getFolderWidgetsList called with searchTerm:",i);try{const e=await I();if(!e)return console.log("No profile data found, returning empty list"),`

        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `;const t=(await Uo(i))[0]?.data?.the_folder_widget?.the_folder_widget_s_widget||[];console.log("Widgets data fetched:",t);const a=await Promise.all(t.map(async r=>{const c=r?.data?.the_widget,u=c?.the_widget_folder_name?.data?.the_folder_name||`${c?.the_widget_name?.data?.the_name} ${c?.the_widget_version?.data?.the_version>1?"v"+c?.the_widget_version?.data?.the_version:""}`,g=c?.the_widget_description?.data?.the_description,m=c?.the_widget_thumbnail?.data?.the_thumbnail,h=c?.the_widget_timestamp?.data?.the_timestamp;return{id:r?.id,name:u,timestamp:h,description:g,thumbnail:m}}));if(console.log("Processed folder widgets list:",a),!a?.length){const r=document.getElementById("folder-widget-container");if(r){console.log("No folder widgets found, rendering fallback widget"),r.style.display="block";const c=await Pe(ie.folder_widget,r);console.log("Fallback widget result:",c)}return`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary">No Folder widget</p>
        </li>
      `}const o=(await Promise.all(a?.map(async r=>{const d=(await Y(r.id)).userId===e.userId,u=r.description?r.description.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\f/g,"\\f").replace(/\v/g,"\\v"):"";return`
          <li class="public-widget-item">
            <router-link href="" class="folderWidgetRouter d-flex" draggable="true" ondragstart="_dragService.onWidgetDragStart(event)" data-widgetId="${r?.id}">
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
        `})||[])).join("");console.log("Returning folderWidgetsListHTMLString:",o);const l=document.getElementById("folder-widget-container");return l&&(l.style.display="block",l.innerHTML=o),o}catch(e){console.error("error",e),e?.status===401&&Ae()}}async function mr(){try{const i=await I();if(!i)return[];const e=await te("template_widget","",!1,i.userId,4,999);let n=new H;n.typeConnection="the_widget_template_name",n.name="widgetPName";let t=new H;t.typeConnection="the_widget_template_thumbnail",t.name="widgetThumbnail";let a=new H;a.typeConnection="the_template_widget_s_widget",a.name="widgetLevel",a.inpage=10,a.limit=!0,a.freeschemaQueries=[n,t];let s=new H;return s.conceptIds=[e.id],s.outputFormat=fe,s.name="top",s.freeschemaQueries=[a],new Promise(o=>{ye(s,"").subscribe(l=>{console.log("Template widgets list:",l);const r=[];if(l&&l.length>0){const c=l[0]?.data?.the_template_widget?.the_template_widget_s_widget||[];for(const d of c)if(d?.data?.the_widget&&typeof d.data.the_widget=="object"){const u=d.data.the_widget?.the_widget_template_name?.data?.the_template_name,g=d.data.the_widget?.the_widget_template_thumbnail?.data?.the_template_thumbnail;(u||g)&&r.push({id:d.id||"",name:u||"Unnamed Template",thumbnail:g||""})}}o(r)})})}catch(i){return console.error("Error fetching templates:",i),[]}}async function gr(i,e){i.stopPropagation();try{document.getElementById("rename-widget-dialog")?.remove();const t=document.createElement("dialog");t.setAttribute("id","rename-widget-dialog"),t.classList.add("col-md-3"),t.innerHTML=`
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
        `;const a=t.querySelector("form");return a&&a.addEventListener("submit",s=>Qi(s,"",e)),document.querySelector("body #app")?.appendChild(t),de("rename-widget-dialog"),"OPENED"}catch(n){console.error("Failed to rename widget:",n)}}async function Qi(i,e="",n){i.preventDefault();let t="";if(e)t=e;else{const r=new FormData(i?.target);if(t=Object.fromEntries(r)?.widgetName,!t?.trim()){const d=i.target.querySelector("#widgetName");d?.focus(),d.style.border="2px solid red",d.style.outline="none",d.addEventListener("input",()=>{d.style.border=""});return}}const s=(await I())?.userId,o=document.getElementById("rename-widget-dialog"),l=o?.querySelector('button[type="submit"]');l.textContent="Saving";try{await $e();const r=await Ke(n,"the_widget_name","name",t,s);await N.SyncDataOnline();const c=o?.querySelector("input"),d=o?.querySelectorAll("button");if(d&&d.forEach(u=>{u.disabled=!0}),c&&(c.disabled=!0),r){q.renderSavedWidgets(),we("rename-widget-dialog"),W.successfullToast("Widget Renamed Successfully");const u=new URLSearchParams(window.location.search).get("widget-id");if(n===Number(u)){const g=document.getElementById("widget-builder");g.textContent=`Widget Builder Panel: ${t}`}return"widget Renamed successfully"}}catch(r){W.errorToast("Widget Rename Failed"),console.error("An error occurred during the rename operation:",r)}}const $n=async(i,e,n=!1)=>{const t=await Ye(i,e),a=t?.data?.the_widget,s=a?.the_widget_name?.[0]?.data?.the_name,o=a?.the_widget_html?.[0]?.data?.the_html,l=a?.the_widget_clean?.[0]?.data?.the_clean,r=a?.the_widget_css?.[0]?.data?.the_css,c=a?.the_widget_js?.[0]?.data?.the_js,d=a?.the_widget_timestamp?.[0]?.data?.the_timestamp,u=a?.the_widget_widget?.[0].id,g=a?.the_widget_type?.[0]?.data?.the_type,m=a?.the_widget_after_render?.[0]?.data?.the_after_render,h=a?.the_widget_before_render?.[0]?.data?.the_bthe_widget_before_render,p=a?.the_widget_update?.[0]?.data?.the_update,v=a?.the_widget_mount_child?.[0]?.data?.the_mount_child;let _=[];const C=a?.the_widget_s_child;return C?.length&&(_=await Promise.all(C?.map(async w=>{const y=w?.data?.the_child_widget,E=y?.the_child_widget_type?.[0]?.data?.the_type,S=y?.the_child_widget_wrapper?.[0]?.data?.the_wrapper,b=y?.the_child_widget_info?.[0]?.data?.id?y?.the_child_widget_info?.[0]?.data?.id:y?.the_child_widget_parent?.[0]?.data?.the_parent,L=await $n(Number(b),e,n);return{id:w?.id,type:E,parent:b,wrapper:S,widget:L}}))),{id:t?.id,name:s,html:o,cleanHtml:l,css:r,js:c,timestamp:d,widgetId:u,typeValue:g,addEvent:m,onMount:h,onUpdate:p,mountChildWidgets:v,childs:_}},pr=async i=>{document.getElementById("assets-upload-loader")?.classList.remove("d-none");const e=await I(),n=e?.entityId,t=e?.userId,a=await Y(n);try{if(i.target?.files?.length>0){const s=[];for(let r=0;r<i.target?.files?.length;r++){const c=i.target?.files[r];if(c.size>2*1024*1024){alert("Max Allowed Size is 2MB");continue}s.push(Ji(c))}const o=await Promise.all(s);for(let r=0;r<o.length;r++){const c=o[r];c.success||alert("Some file failed: "+c.message);const d=await te("the_asset",c.url||"",!1,t,4);await V(a,d,"s_asset")}await N.SyncDataOnline(),W.successfullToast(`Asset${o.length>1?"s":""} uploaded successfully`),new ir().setupAssetListener()}else{alert("No file found");return}}catch(s){throw console.error(s),s}document.getElementById("assets-upload-loader")?.classList.add("d-none")},hr=async(i,e)=>{if(confirm("Are you sure you want to delete this asset?"))try{i.target.closest(".asset-item").remove(),await Se(e),W.successfullToast("Asset deleted successfully")}catch(t){console.error("Error deleting asset:",t),W.errorToast("Failed to delete asset")}};function fr(i){const e=document.getElementById(i);if(e){e.value="";const n=new Event("keyup");e.dispatchEvent(n),Zi(i)}}function Zi(i){const e=document.getElementById(i),n=document.getElementById(`${i}-clear`);e&&n&&(n.style.display=e.value?"block":"none",n.style.cursor=e.value?"default":"")}async function yr(i,e,n,t){i.preventDefault(),i.stopPropagation();const a=t.replace(/\\n/g,`
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
          ${a?`<p class="widget-description mb-0">${a}</p>`:'<div class="text-center p-3 bg-light rounded"><p class="text-muted mb-0">No description has been added for this widget</p></div>'}
        </div>
      </div>
    </dialog>
  `,o=document.getElementById("widget-detail-modal");o&&o.remove(),document.querySelector("body #app")?.insertAdjacentHTML("beforeend",s),de("widget-detail-modal")}window.viewPublicWidgetDetails=yr;window.openCSSEditor=ut;class Ki{editorView=null;styleElement=null;editorInitialized=!1;constructor(){document.querySelectorAll(".widgetStyle").forEach(e=>e.remove()),this.styleElement=document.createElement("style"),this.styleElement.classList.add("widgetStyle"),document.head.insertAdjacentElement("beforeend",this.styleElement)}updateCSS(e){if(this.styleElement){let n=function(a){if(!a)return;const{wrapper:s}=a,o=s&&s!=="0"?`#${s}`:".content-target";t=t+`${o} { ${a.css} }`,a.children.forEach(l=>{n(l)})},t="";f.selectedStaticWidgetTreeInfo.widgetTree.css?f.selectedStaticWidgetTreeInfo.widgetTree.css=e:(f.widgetTree.children.length===0||f.selectedStaticWidgetTreeInfo.widgetTree.widgetId===f.widgetTree.widgetId)&&(f.widgetTree.css=e),n(f.widgetTree),this.styleElement.textContent=t}}async getWidgetHtml(e){let n=[];e.forEach(t=>{t.classList.forEach(a=>{n.push(a)})}),this.insertCSS(n)}async getHtml(){return window.getEditorContent=this.getEditorContent.bind(this),""}handleTab=e=>{const{state:n,dispatch:t}=e,{selection:a}=n;return a.ranges.length===0?!1:(t({changes:{from:a.ranges[0].from,to:a.ranges[0].to,insert:"  "},scrollIntoView:!0}),!0)};async initializeEditor(){const e=document.getElementById("editor-container-css-split");e&&(e.innerHTML="",this.editorView=new ae({doc:"/* Write your CSS here */",extensions:[Bt,$t,La(),Ht(),ae.lineWrapping,Be.tabSize.of(2),Be.allowMultipleSelections.of(!0),ae.theme({"&":{fontSize:"14px"},".cm-content":{padding:"10px 0"},".cm-line":{padding:"0 9px"}}),jt.of([{key:"Tab",run:this.handleTab,preventDefault:!0}]),ae.updateListener.of(async n=>{if(n.docChanged){const t=this.editorView?.state.doc.toString()||"";this.updateCSS(t)}})],parent:e}),this.editorView&&navigator.userAgent.toLowerCase().includes("firefox")&&this.editorView.scrollDOM.addEventListener("scroll",()=>{this.editorView?.requestMeasure()}))}getEditorContent(){return this.editorView?this.editorView.state.doc.toString():""}async insertCSS(e){if(this.editorInitialized||await this.initializeEditor(),this.editorView){for(const n of e)if(this.editorView){const{state:t,dispatch:a}=this.editorView;a({changes:{from:0,to:t.doc.length,insert:`.${n} {}`},scrollIntoView:!0})}}else console.error("Editor view is null. Ensure initializeEditor() has been called.")}}const li=async i=>{const e=new fi,n=vr(i);if(Object.keys(n).length>0){const t=await e.validateField(n),a=await yn(t),s=yn(a);return _r(i,s)}},wr=async i=>{const n=await new fi().validateField(i);return Object.keys(n).length>0?{status:!1,details:yn(n)}:{status:!0}},vr=i=>{const e={fieldName:"",value:null,fieldType:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,maxValue:null,minValue:null,accept:null,file:null,required:!1,isUnique:!1},n=i?.attributes;if(Array.isArray(n))n.forEach(t=>{const a=br(t);switch(t.name){case"name":e.fieldName=a||"";break;case"value":e.value=a||null;break;case"fieldtype":e.fieldType=a?a.trim():null;break;case"pattern":e.pattern=a||null;break;case"datatype":e.dataType=a?a.trim():null;break;case"typeconcept":e.conceptType=a||null;break;case"maxlength":e.maxLength=a?parseInt(a):null;break;case"minlength":e.minLength=a?parseInt(a):null;break;case"max":e.maxValue=a?parseInt(a):null;break;case"min":e.minValue=a?parseInt(a):null;break;case"accept":e.accept=a||null;break;case"file":e.file=a||null;break;case"required":e.required=a===!0;break;case"unique":e.isUnique=a===!0;break}});else throw console.error('attributesData["attributes"] is not an array',i.attributes),new Error('Invalid input data format: attributesData["attributes"] should be an array.');return e},br=i=>{switch(i.type){case"boolean":return i.value==="on";case"array":return i.selected||null;case"string":return i.value||null;default:return null}},yn=i=>({datatype:i.dataType,pattern:i.pattern,max:i.maxValue,min:i.minValue,minlength:i.minLength,maxlength:i.maxLength,accept:i.accept,file:i.file,required:i.required,unique:i.unique}),_r=(i,e)=>(i.attributes.forEach(n=>{const t=e[n.name];n.validationStatus=t?"invalid":"valid",n.validationErrorMessage=t||""}),i),Er=i=>({fieldName:i.getAttribute("name"),value:i instanceof HTMLInputElement?i.value:null,fieldType:i.getAttribute("fieldtype"),dataType:i.getAttribute("datatype"),pattern:i.getAttribute("pattern"),conceptType:i.getAttribute("typeconcept"),maxLength:i.getAttribute("maxlength"),minLength:i.getAttribute("minlength"),minValue:i.getAttribute("min"),maxValue:i.getAttribute("max"),file:i.hasAttribute("file"),accept:i.hasAttribute("accept"),required:i.hasAttribute("required"),isUnique:i.getAttribute("unique")==="on"});async function Yi(i){let e=i.nextElementSibling;(!e||!e.classList.contains("error-container"))&&(e=document.createElement("div"),e.className="error-container",i.parentNode?.insertBefore(e,i.nextSibling)),e.innerHTML="";const n=Er(i),t=await wr(n);try{if(t.status)i.classList.remove("invalid"),i.classList.add("valid");else if(i.classList.remove("valid"),i.classList.add("invalid"),t.details&&typeof t.details=="object"){const a=document.createElement("span");a.className="error-message",a.style.color="red",a.style.fontSize="12px";const s=Object.values(t.details).filter(Boolean);a.innerHTML=s.join("<br>"),e.appendChild(a)}}catch(a){console.error("Validation error:",a);const s=document.createElement("span");s.className="error-message",s.style.color="red",s.textContent="Validation failed. Please try again.",e.appendChild(s)}}var ze=(i=>(i.STYLE="style",i.BOOLEAN="boolean",i.FORM="form",i.SPECIAL="special",i))(ze||{});const Tr=new Map([["button",["button","submit","reset"]],["input",["button","checkbox","color","date","datetime","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]]]),Hn=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a"],jn=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var"],Mt=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],Sr=["p","h1","h2","h3","h4","h5","h6","div","span","td","th","label","li","button","a","strong","em","mark","small","sub","sup","blockquote","code","pre","b","i","address","footer","header","section","article","nav","aside","details","summary","time","var","del","ins","cite","q","dfn","abbr","bdi","bdo","s","u","kbd","samp","output","progress","meter"],kt=["div","p","h1","h2","h3","h4","h5","h6","span","a","strong","em","b","i","code","abbr","acronym","mark","small","big","sub","sup","q","cite","dfn","var","s","u","time","bdi","bdo","ruby","rt","rp","button","label","textarea","input","select","option","blockquote"],me=new Map([["height",{property:"height",needsUnit:!0}],["width",{property:"width",needsUnit:!0}],["margin",{property:"margin",needsUnit:!0}],["padding",{property:"padding",needsUnit:!0}],["background-color",{property:"backgroundColor",needsUnit:!1}],["Background Color",{property:"backgroundColor",needsUnit:!1}],["bg-color",{property:"backgroundColor",needsUnit:!1}],["color",{property:"color",needsUnit:!1}],["Color",{property:"color",needsUnit:!1}],["font-size",{property:"fontSize",needsUnit:!0}],["border",{property:"border",needsUnit:!1}],["float",{property:"float",needsUnit:!1}],["Alignment",{property:"textAlign",needsUnit:!1}],["Font Family",{property:"fontFamily",needsUnit:!1}],["Font Weight",{property:"fontWeight",needsUnit:!1}],["Font Size",{property:"fontSize",needsUnit:!1}],["Minimum-Height",{property:"minHeight",needsUnit:!1}],["Minimum-Width",{property:"minWidth",needsUnit:!1}],["Maximum-Height",{property:"maxHeight",needsUnit:!1}],["Maximum-Width",{property:"maxWidth",needsUnit:!1}],["Opacity",{property:"opacity",needsUnit:!1}],["Text Transform",{property:"textTransform",needsUnit:!1}],["Line Height",{property:"lineHeight",needsUnit:!1}],["Letter Spacing",{property:"letterSpacing",needsUnit:!1}]]),Lr=new Set(["disabled","required","readonly","checked","selected","multiple","autofocus","hidden"]),Cr=new Set(["value","placeholder","pattern","min","max","step","maxlength","name","type","src","href","target","alt"]),Wr=new Set(["elementContent","className","id"]),Xi=new Map([["method",["get","post"]],["target",["_blank","_self","_parent","_top"]],["autocomplete",["on","off"]],["enctype",["application/x-www-form-urlencoded","multipart/form-data","text/plain"]],["rel",["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"]],["align-items",["start","center","end"]],["text-align",["left","center","right"]],["loading",["eager","lazy"]],["wrap",["soft","hard"]],["float",["none","left","right"]],["font family",["Arial","Helvetica","Times New Roman","Courier New","Georgia","Verdana","sans-serif"]],["font weight",["normal","bold","100","200","300","400","500","600","700","800","900"]],["text transform",["none","capitalize","uppercase","lowercase"]]]);function Je(i){return i.toLowerCase()==="type"?!0:Xi.has(i.toLowerCase())}function vt(i,e,n){const t=i.toLowerCase();if(t==="type"){const a=n?Tr.get(n.toLowerCase())||[]:[];return e&&e.includes(",")?e.split(","):a}return Xi.get(t)||[]}class Zt{the_params;widgetProperties=[];categoryMap={General:["id","className","elementContent","onclick","type","name","disabled","value"],Display:["Background Color","background-color","display","visibility","Opacity","position","z-index","float"],Typography:["Color","color","Alignment","Font Family","Font Weight","Font Size","Text Transform","Line Height","Letter Spacing"],Size:["Height","height","Width","width","Minimum-Height","Minimum-Width","Maximum-Height","Maximum-Width"],Spacing:["margin","padding","Margin","Padding"],Borders:["border-style","border-width","border-color","border-radius"],Colors:["bg-color","Background Color","background-color"],Other:[]};constructor(e=null){this.the_params=e,window._attributeService=Ba}async initializeView(){const e=document.querySelector(".right-aside");e&&(e.innerHTML=await this.getHtml())}openTab(e,n){let t,a,s=document.getElementsByClassName("tabcontent");for(t=0;t<s.length;t++)s[t].style.display="none";for(a=document.getElementsByClassName("tablinks"),t=0;t<a.length;t++)a[t].className=a[t].className.replace(" active","");const o=document.getElementById(n);o.style.display="block",e.currentTarget.className+=" active"}initializeTabs(){const e=document.getElementsByClassName("tablinks");let n=this;for(let t=0;t<e.length;t++)e[t].addEventListener("click",function(a){console.log("buttons[i] -->",e[t]);const s=e[t].getAttribute("data-tab-id");console.log("tabName -->",s),n.openTab(a,s)});e[0].click()}sortAttributes(e){return e.sort((n,t)=>{if(!n?.name||!t?.name)return 0;const a=this.findAttributeInMap(n.name),s=this.findAttributeInMap(t.name);if(a==="Other"&&s!=="Other")return 1;if(a!=="Other"&&s==="Other")return-1;if(a===s){const o=this.categoryMap[a].findIndex(r=>r.toLowerCase()===n.name.toLowerCase()),l=this.categoryMap[s].findIndex(r=>r.toLowerCase()===t.name.toLowerCase());return o-l}return 0})}getCategoryForAttribute(e){if(!e)return"General";const n=e.toLowerCase();for(const[t,a]of Object.entries(this.categoryMap))if(t!=="Other"&&a.some(s=>s.toLowerCase()===n))return t;return"Other"}findAttributeInMap(e){return this.getCategoryForAttribute(e)}setAttributes(e,n){setTimeout(()=>{const t=document.getElementById("element-attributes");if(!t){console.warn("Attribute container not found, retrying..."),this.setAttributes(e,n);return}t.innerHTML="";const a=document.createElement("div");if(a.className="row",t.appendChild(a),!e){a.innerHTML="";return}(async()=>await li(e))().then(()=>{if(e?.attributes&&e?.attributes?.length){const o=this.sortAttributes(e.attributes),l={};o.forEach(c=>{const d=this.getCategoryForAttribute(c.name);l[d]||(l[d]=[]),l[d].push(c)});let r="";Object.entries(l).forEach(([c,d])=>{const u=d.map(m=>{let h="";if(m.name.toLowerCase()==="float")h=`
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
                `;else if(m.name==="Alignment"){const p=e?.tag?.toLowerCase();Hn.includes(p)&&(h=`
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
                  `)}else if(m.name==="Font Family"){const p=e?.tag?.toLowerCase();if(jn.includes(p)&&(console.log("Font Family attribute detected:",m.name),Je(m.name))){console.log("Using predefined options for:",m.name);const v=vt(m.name,m.value,e?.tag);console.log("Options for dropdown:",v);const _=v.map(C=>{const T=C.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${C}" ${T?"selected":""}>${C}</option>`}).join("");h=`
                      <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                        <option value="">Select Font Family</option>
                        ${_}
                      </select>
                    `}}else if(m.name==="Font Weight"){const p=e?.tag?.toLowerCase();if(Mt.includes(p)&&(console.log("Font Weight attribute detected:",m.name),Je(m.name))){console.log("Using predefined options for:",m.name);const v=vt(m.name,m.value,e?.tag);console.log("Options for dropdown:",v);const _=v.map(C=>{const T=C.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${C}" ${T?"selected":""}>${C}</option>`}).join("");h=`
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
                </div>`:"";if(m.name==="Margin"||m.name==="Padding"){const p=(m.value||"0 0 0 0").split(" ").map(w=>w.trim()).map(w=>/^\d+$/.test(w)?`${w}px`:w);for(;p.length<4;)p.push("0px");const[v,_,C,T]=p;return m.name==="Margin"?`
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
                                  value: [this.value, '${_}', '${C}', '${T}'].join(' '),
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
                                  value: ['${v}', this.value, '${C}', '${T}'].join(' '),
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
                                  value: ['${v}', '${_}', this.value, '${T}'].join(' '),
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
                                  value: ['${v}', '${_}', '${C}', this.value].join(' '),
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
                                  value: [this.value, '${_}', '${C}', '${T}'].join(' '),
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
                                  value: ['${v}', this.value, '${C}', '${T}'].join(' '),
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
                                  value: ['${v}', '${_}', this.value, '${T}'].join(' '),
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
                                  value: ['${v}', '${_}', '${C}', this.value].join(' '),
                                  closest: () => this.closest('.attribute-row')
                                }
                              }, '${n}', ${e?.id})"
                              onblur="this.parentElement.classList.remove('editing')"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`:""}else if(m?.type==="string")if(m.name==="elementContent")h=`<textarea 
                    class="form-control" 
                    rows="4" 
                    onchange="updateElementAttribute(event, '${n}', ${e?.id})"
                    >${m?.value||""}</textarea>`;else if(Je(m.name)){console.log("Dropdown attribute detected:",m.name);const p=vt(m.name,m.value,e?.tag);console.log("Options:",p);const v=p.map(_=>`<option value="${_}" ${_===m?.value?"selected":""}>${_}</option>`).join("");h=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${v}
                    </select>
                  `}else h=`<input type="text" class="form-control" onchange="updateElementAttribute(event, '${n}', ${e?.id})" value="${m?.value||""}">`;else if(m?.type==="color")h=`
                  <div class="color-input-wrapper">
                    <input type="color" 
                      class="color-picker-input" 
                      onchange="updateElementAttribute(event, '${n}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                    <input type="text" 
                      class="form-control color-code-input" 
                      onchange="updateElementAttribute(event, '${n}', ${e?.id})" 
                      value="${m?.value||"#000000"}">
                  </div>`;else if(m?.type==="boolean")h=`<input type="checkbox" class="form-check-input" onchange="updateElementAttribute(event, '${n}', ${e?.id})" ${m?.value&&m?.value!=="false"?"checked":""}>`;else if(m?.type==="array")if(console.log("Array attribute detected:",m.name),Je(m.name)){console.log("Using predefined options for:",m.name),console.log("Is dropdown attribute check:",m.name,Je(m.name));const p=vt(m.name,m.value,e?.tag);console.log("Options for dropdown:",p);const v=p.map(_=>{const C=_.toLowerCase()===(m?.value||"").replace(/"/g,"").trim().toLowerCase();return`<option value="${_}" ${C?"selected":""}>${_}</option>`}).join("");h=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      <option value="">Select ${m.name}</option>
                      ${v}
                    </select>
                  `}else{const v=(m?.value?.split(",")||[]).map(_=>`<option value="${_}" ${_===m?.selected||_===m?.value?"selected":""}>${_}</option>`).join("");h=`
                    <select class="form-select" onchange="updateElementAttribute(event, '${n}', ${e?.id})">
                      ${v}
                    </select>
                  `}}return m.validationStatus==="invalid"&&(h+=`
                  <span style="color:red;font-size:12px;">${m.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${m.name}</div>
                    <div class="col-7">${h}</div>
                  </div>
                </div>
              `}).join(""),g=c==="General"||c==="Display"||c==="Typography"||c==="Size"||c==="Spacing"||c==="Borders"||c==="Colors"||c==="Other";r+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${c.toLowerCase()}-content')">
                  <div class="category-title">${c}</div>
                  <span class="material-symbols-outlined">${g?"do_not_disturb_on":"add_circle"}</span>
                </div>
                <div class="category-content" id="${c.toLowerCase()}-content" style="display: ${g?"block":"none"}" data-category-state="${g?"open":"closed"}">
                  <div class="row">
                    ${u}
                  </div>
                </div>
              </div>
            `}),a.innerHTML=r}}),Et()},0)}setAttributesForMultipleElements(e){const n=async()=>await li(e);if(!e){const a=document.getElementById("element-attributes").querySelector(".row");a.innerHTML="";return}n().then(()=>{if(e?.attributes&&e?.attributes?.length){const t={};e.attributes.forEach(o=>{const l=this.getCategoryForAttribute(o.name);t[l]||(t[l]=[]),t[l].push(o)});let a="";Object.entries(t).forEach(([o,l])=>{if(l.length){const r=l.map(d=>{let u="";return d?.type==="string"?u=`<input type="text" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${d?.value||""}">`:d?.type==="color"?u=`<input type="color" class="form-control" onchange="updateMultipleElementAttribute(event)" value="${d?.value||"#000000"}">`:d?.type==="boolean"?u=`<input type="checkbox" class="form-check-input" onchange="updateMultipleElementAttribute(event)" ${d?.value&&d?.value!=="false"?"checked":""}>`:d?.type==="array"&&(u=`
                  <select class="form-select" onchange="updateMultipleElementAttribute(event)">
                    ${d?.value?.split(",")?.map(h=>`<option value="${h}" ${h===d?.selected?"selected":""}>${h}</option>`).join("")}
                  </select>
                `),d.validationStatus==="invalid"&&(u+=`
                  <span style="color:red;font-size:12px;">${d.validationErrorMessage}</span>
                `),`
                <div class="col-12">
                  <div class="attribute-row row">
                    <div class="col-5 attribute-name mb-2 mt-1">${d.name}</div>
                    <div class="col-7">${u}</div>
                  </div>
                </div>
              `}).join(""),c=o==="General"||o==="Display"||o==="Typography"||o==="Size"||o==="Spacing"||o==="Borders"||o==="Colors";a+=`
              <div class="style-category">
                <div class="category-header accordion-wrapper" onclick="toggleDisplay(event, '${o.toLowerCase()}-content')">
                  <div class="category-title">${o}</div>
                  <span class="material-symbols-outlined">${c?"expand_less":"expand_more"}</span>
                </div>
                <div class="category-content" id="${o.toLowerCase()}-content" style="display: ${c?"block":"none"}" data-category-state="${c?"open":"closed"}">
                  <div class="row">
                    ${r}
                  </div>
                </div>
              </div>
            `}});const s=document.getElementById("element-attributes");s&&(s.innerHTML=a)}})}async getHtml(){window.updateWidgetTypeValue=na,window.toggleDisplay=ut,window.updateElementAttribute=Kt,window.updateMultipleElementAttribute=sa,window.handlePageProperties=aa,window.updateCSSLibrary=Ve,window.updateJSLibrary=Re,window.addJSLibrary=la,window.addCSSLibrary=ra,window.openRenameCustomFunction=ot.openRenameCustomFunction,window.deleteCustomFunction=ot.deleteCustomFunction,setTimeout(async()=>{ot.initializeCodeBlock();const a=new Ki,s=document.getElementById("css-editor-container");s.innerHTML=await a.getHtml(),await a.initializeEditor(),qn()},0),setTimeout(async()=>{await new Ai().initializeEditor()},0),setTimeout(async()=>{const a=new xi,s=document.getElementById("js-editor-container");s.innerHTML=await a.getHtml(),await a.initializeEditor()},0),setTimeout(async()=>{await new se("onmount-editor-split").initializeEditor(),await new se("onupdate-editor-split").initializeEditor(),await new se("addevents-editor-split").initializeEditor(),await new se("mountchildwidgets-editor-split").initializeEditor();const r=document.getElementById("publish-widget");r&&r.addEventListener("click",async c=>{c.preventDefault();try{await f.publish()}catch(d){console.error("error publishing widget",d),d instanceof Error&&W.errorToast(d.message)}})},0),setTimeout(()=>{this.initializeTabs()},0);const e=this.the_params?.page_id;let n="",t="";if(this.the_params){const a=this.the_params?.data?.the_page_meta_title?.data?.the_meta_title||"";a&&ve("meta_title",a);const s=this.the_params?.data?.the_page_meta_description?.data?.the_meta_description||"";s&&ve("meta_description",s);const o=this.the_params?.data?.the_page_meta_keywords?.data?.the_meta_keywords||"";o&&ve("meta_keywords",o);const l=this.the_params?.data?.the_page_width?.data?.the_width||"";l&&ve("width",l);const r=this.the_params?.data?.the_page_font_size?.data?.the_font_size;r&&ve("font_size",r);const c=this.the_params?.data?.the_page_font_family?.data?.the_font_family;c&&ve("font_family",c);const d=this.the_params?.data?.the_page_type?.data?.the_type;d&&ve("type",d);const u=()=>Array.from({length:13},(h,p)=>12+p).map(h=>{const p=r==h?"selected":"";return`<option value="${h}" ${p}>${h}</option>`}).join(""),g=()=>["Arial","Verdana","Times New Roman","Courier New","Georgia"].map(p=>{const v=c==p.toLowerCase()?"selected":"";return`<option value="${p.toLowerCase()}" ${v}>${p}</option>`}).join(""),m=()=>["Fluid","Fixed"].map(p=>{const v=d==p.toLowerCase()?"selected":"";return`<option value="${p.toLowerCase()}" ${v}>${p}</option>`}).join("");n=`
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
            <input type="text" name="input-meta_title" id="meta_title" class="form-control" onchange="handlePageProperties(event)" data-page_id="${e}" value="${a}">
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
              ${u()}
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
    `}}async function Dn(i){let e=Cn.filter(t=>t.id==i)[0];return!i||i==="null"?void 0:{id:i,attributes:to,tag:"div",name:`Layout: ${e?.name}`}}async function Ar(){return{id:1,name:"Global",tag:"div",attributes:$a}}class sn{static editor}function xr(i,e,n){const t=n?.id,a=document.getElementById("editor");a?.setAttribute("wrapper-id",e),a?.setAttribute("element-id",t),a?.setAttribute("element-clicked","true"),sn.editor&&n?.void?sn.editor.setData(i):n?.void||sn.editor?.setData("")}window.showdWidgetProperties=kr;window.widgetSelected=Br;function Mr(i,e){let n;if(e.data_type=="layout"){const t=Cn.filter(r=>r.name==e.data_text)[0],l=new DOMParser().parseFromString(t?.html,"text/html").body.querySelector("div");l.setAttribute("element-info-id",i),n=l.outerHTML}else e?.data_void&&e?.data_void!=="undefined"?n=`<${e?.data_type} element-info-id="${i}">${e?.data_default}</${e?.data_type}>`:n=`<${e?.data_type} element-info-id="${i}">`;return`${n}`}async function kr(i,e){const n=i.target.closest(".added-widget-container"),t=n.id,a=n.getAttribute("data-widgetid");if(a){const T=(await I())?.token,y=(await Ye(Number(a),T))?.data?.the_widget?.the_widget_name?.[0]?.data?.the_name||"";await new Zt().initializeView();const S=document.getElementById("widgetNameValue");S&&(S.value=y)}const o=(await I())?.userId,l=await ci(t,o);console.warn("savedWidgetProperties on widget Selected ->",l);let r="";l?.length&&(l?.length>1&&l?.sort((w,y)=>{const E=new Date(w?.created_at).getTime();return new Date(y?.created_at).getTime()-E}),r=l?.[0]?.data?.[t]?.properties?.filter(w=>w.name==="widget-type")?.[0]?.value);const c=document.getElementById("widgetTypeValue");c.setAttribute("data-widgetcontainerid",t),c.setAttribute("data-mainwidgetid",`${e}`),c.value=r;const u=document.querySelector('#onmount-editor .cm-content[data-language="javascript"]')?.textContent,m=document.querySelector('#addevents-editor .cm-content[data-language="javascript"]')?.textContent,p=document.querySelector('#mountchildwidgets-editor .cm-content[data-language="javascript"]')?.textContent,v=document.querySelector(".content-target"),_=new gt;r&&await _.getTypeValueList(r),_.componentDidMountFunction=u,_.addEventFunction=m,_.mountChildWidgetsFunction=p,await _.mount(v)}function Ir(){['#onmount-editor .cm-content[data-language="javascript"]','#onupdate-editor .cm-content[data-language="javascript"]','#addevents-editor .cm-content[data-language="javascript"]','#mountchildwidgets-editor .cm-content[data-language="javascript"]'].forEach(t=>{const a=document.querySelector(t);a&&(a.textContent="/* Write your code here */")});const e=document.querySelector('.cm-content[data-language="css"]');e.textContent="/* Write your CSS here */";const n=document.querySelector('.editor-container .cm-content[data-language="javascript"]');n.textContent="/* Write your JavaScript here */"}const Qe=async()=>{const i=document.getElementById("element-info");i.style.display="none"},st=async i=>{const e=i?.target;let n=e?.tagName;const t=e?.classList?.contains("fslayout-row"),a=document.getElementById("element-info");if(!e?.closest(".edited-widget-container")&&e?.closest(".added-widget-container")||e?.classList.contains("added-widget-container"))n="WIDGET",a.classList.add("widget-marker");else if(t)n="Layout Element",a.classList.remove("widget-marker");else if(e?.closest("#widget-details")){n="",a.classList.remove("widget-marker");return}else a.classList.remove("widget-marker");const s=e.getBoundingClientRect(),o=s.left,l=s.top;a.style.display="block",new ResizeObserver(()=>{a.style.width=e.offsetWidth+"px",a.style.height=e.offsetHeight+"px",a.style.top=`calc(${l}px)`,a.style.left=`calc(${o}px)`}).observe(e);const c=document.getElementById("element-info_details");c.innerHTML=`<span>${n}</span>`;const d=document.getElementById("select-box"),u=document.getElementById("builder-workarea");u.addEventListener("scroll",Yn),u.addEventListener("scrollend",()=>{const m=document.getElementById("preview-btn")?.classList.contains("active");d.style.transition="0.2s ease all";const h=document.getElementById("element-info");m||(h.style.display="block"),h.style.height="0",h.style.width="0"}),u.addEventListener("resize",Yn)},Ge=async i=>{i.preventDefault();const e=i.target;sr("navigator-container"),Ce.publish("page:elementClick",e);const n=f.selectedStaticWidgetTreeInfo?.widgetTree?f.selectedStaticWidgetTreeInfo?.widgetTree:null;if(e.classList.contains("fslayout-col")||e.classList.contains("mftsccs-marking-element")||e.closest("#widget-details")){console.log("Skipping column selection");return}const t=e.classList.contains("fslayout-row")?e:e.closest(".fslayout-row");console.log("Layout container found:",t);const a=e;console.log("Element to select:",a),R?.previousSelectedStaticElement?.removeAttribute("draggable"),R.staticElement=a,R.previousSelectedStaticElement=R.staticElement,R.staticElement.setAttribute("draggable","true");const s=a.getBoundingClientRect();Pr(e)&&(e.addEventListener("dblclick",()=>{e.contentEditable="true",e.focus()}),e.addEventListener("blur",async()=>{e.contentEditable="false",e.removeAttribute("contentEditable"),R.staticElement=e;const y=e?.tagName.toLowerCase(),b=Xe.staticElementList?.filter(L=>{const A=L?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return y===A})?.[0]?.id;Kt(i,"",b)}));const l=s.left,r=s.top;ft.resetNavigationBar();const c=e;let d;e.closest(".added-widget-container")&&!e.closest(".edited-widget-container")?d=e.closest(".added-widget-container"):e.closest(".edited-widget-container")&&(d=e.closest(".edited-widget-container"));const u=e.classList.contains("added-widget-container");if(d||u){let y="";u?y=e?.id:d&&(y=d?.id);const E=[];let S=0;async function b(A,x){return A.reduce((k,P,B)=>(P.wrapper===x&&(k.push(P),S=B),P.children&&P.children.length>0&&b(P.children,x),k),E)}const L=await b(f?.staticWidgetTree?.children,y);f.selectedStaticWidgetTreeInfo={widgetTree:L[0],isChildWidget:!0,childWidgetIndex:S},await X(L[0],!1)}else f.selectedStaticWidgetTreeInfo={widgetTree:f?.staticWidgetTree,isChildWidget:!1,childWidgetIndex:0},X(f?.staticWidgetTree,!1);if(c?.id&&(f.updatedWidgets[c.id]=f.selectedStaticWidgetTreeInfo.widgetTree),f.selectedStaticWidgetTreeInfo?.widgetTree?.type){const y=document.getElementById("widgetType");y&&(y.value=f.selectedStaticWidgetTreeInfo?.widgetTree?.type)}const g=document.getElementById("element-attributes"),m=document.querySelector("#icon-attribute span");g&&(!g?.style?.display||g?.style?.display==="none")&&m&&(g.style.display="block",m.textContent="expand_less"),document.querySelectorAll(".tag-name").forEach(y=>y.remove());let p=!1;if(i instanceof KeyboardEvent&&i.ctrlKey){if(c?.classList.contains("added-widget-container")){W.infoMessageToast("Widget can't be selected");return}c?.classList.toggle("widget_selected"),document.querySelectorAll(".widget_selected > *").forEach(E=>{const S=E.parentElement?.classList,b=E?.classList,L=E.firstChild?.classList,A=S&&S.contains("added-widget-container");let k=b&&b.contains("fslayout-row")||L&&L.contains("fslayout-row")?"Layout":E.tagName;if(A||p){p=!0;return}const P=document.createElement("div");P?.classList.add("tag-name"),P.innerHTML=`
        <span class="widget-toolbar" title="tag name">
          ${k}
        </span>
      `,E?.parentElement?.appendChild(P)}),p?(W.infoMessageToast("Widget can't be selected"),c?.classList.toggle("widget_selected"),c?.querySelector(".tag-name")?.remove()):(document.querySelector(".element-options")?.remove(),await ea());return}const v=document.getElementById("widgetNameValue");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget){const y=f?.selectedStaticWidgetTreeInfo?.widgetTree?.name;v&&y&&(v.value=y)}else v&&(v.value=f?.staticWidgetTree.name);const _=document.getElementById("select-box");_.style.display="block";const C=new ResizeObserver(()=>{_.style.width=e.offsetWidth+"px",_.style.height=e.offsetHeight+"px",_.style.top=`calc(${r}px)`,_.style.left=`calc(${l}px)`}),T=document.getElementById("publishWidgetBtnContainer");if(T){f.widgetTree===f.selectedStaticWidgetTreeInfo.widgetTree?(T.classList.remove("d-none"),T.classList.add("d-flex")):(T.classList.remove("d-flex"),T.classList.add("d-none")),console.log("prev selected widget",n,"now",f.selectedStaticWidgetTreeInfo.widgetTree);try{const y=f.selectedStaticWidgetTreeInfo?.widgetTree||f.widgetTree,E=y.origin||y.id,S=y.version?y.version.toString():"original";typeof q.initializeWidgetVersions=="function"&&q.initializeWidgetVersions(E,S,y?.timestamp)}catch(y){console.error("Error showing widget versions:",y)}}C.observe(e);const w=document.getElementById("edit-widget");if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&!e.closest(".edited-widget-container")||e.classList.contains("added-widget-container")?w.style.display="block":w.style.display="none",(d||u)&&!e.closest(".edited-widget-container")){const E=document.getElementById("element-attributes").querySelector(".row");E.innerHTML="",qt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId);return}await It(c)};function Pr(i){return typeof i.contentEditable<"u"&&rs.includes(i.tagName.toLowerCase())}async function Br(i){i.preventDefault(),i.stopPropagation()}async function It(i){let e;if(i?.dataset?.widgetid)return;const n=i?.tagName.toLowerCase(),a=Xe.staticElementList?.filter(u=>{const g=u?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return n===g}),s=a?.[0]?.id,o=i.classList.contains("fslayout-row"),l=i?.firstChild?.classList?.contains("fslayout-row");if(o||l)e=await Dn(s),e?.attributes?.length&&(e.attributes=e?.attributes.map(u=>({...u,selected:"",value:u.name==="class"?"":u.value})));else if(s)e=await yt(a);else if(qe.includes(n)||ht.includes(n)){const u=os.map(g=>{const m=g.name.toLowerCase(),h=me.get(m)||me.get(g.name);return h?{...g,value:i.style[h.property]||""}:{...g,value:m==="classname"?i.className||"":m==="id"&&i.id||""}});n==="iframe"&&u.push({name:"src",type:"string",value:i.getAttribute("src")||""}),qe.includes(n)&&u.push({name:"elementContent",type:"string",value:i.textContent||""}),e={tag:n,attributes:u}}e.attributes=e?.attributes?.map(u=>u?.name?(u.value=da(i,u.name),u):(console.warn("Found attribute without name:",u),u)).filter(Boolean);let r="";const c=e?.attributes;c?.length&&(r=c?.filter(g=>g?.name==="elementContent")?.[0]?.value,xr(r,i?.id,e),qt(f.staticWidgetTree?.origin?f.staticWidgetTree?.origin:f.staticWidgetTree?.widgetId)),new Zt()?.setAttributes(e,i?.id)}async function ea(){let i;i=await Ar(),i?.attributes?.length&&(i.attributes=i?.attributes.map(n=>({...n,value:""}))),new Zt()?.setAttributesForMultipleElements(i)}const $r=new Ue;async function Hr(i){return new Promise(async e=>{const n=await ta(i);e(n)})}async function ta(i){return new Promise(async e=>{let n=new z;n.composition=i,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_s_attribute"],n.inpage=100;let t=new z;t.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],t.inpage=100;const l=(await he([n,t],""))?.data?.the_element?.the_element_s_attribute?.map(u=>{const g=u?.data?.the_attribute,m=g?.the_attribute_name?.[0]?.data?.the_name,h=g?.the_attribute_type?.[0]?.data?.the_type,p=g?.the_attribute_value?.[0]?.data?.the_value;return{name:m,type:h,value:p}}),r=l?.map(u=>{let g;return u?.type==="string"?g='<input type="text" class="form-control" onchange="updateAttribute(event)">':u?.type==="boolean"?g='<input type="checkbox" class="form-check-input" onchange="updateAttribute(event)">':u?.type==="array"&&(g=`
            <select class="form-control" onchange="updateAttribute(event)">
              ${u?.value?.split(",")?.map(p=>`<option value="${p}">${p}</option>`)}
            </select>
          `),`
          <div class="col-6 my-2">
            <div class="row attribute-row">
            <div class="col-5 attribute-name">
              ${u.name}
            </div>
            <div class="col-7">
              ${g}
            </div>
            </div>
          </div>
        `}).join("");let c,d=setInterval(async()=>{c&&(clearInterval(d),l?.forEach(u=>{u?.type!=="boolean"&&c?.setAttribute(u?.name,"")})),c=document.querySelector('.content .content-target button[data-element-id="xyzButton"]')},100);e(r)})}async function na(i){const n=(i?.target).value;f.selectedStaticWidgetTreeInfo.widgetTree.type=n,D.updateActionHistories()}async function jr(i){const e=i.target,n=e.closest(".widget_container"),t=n.getAttribute("data-elementId"),a=e.textContent?.trim(),s=document.querySelectorAll("#element-attributes .attribute-row");for(const o of s)if(o.querySelector(".attribute-name")?.textContent?.trim()==="elementContent"){const r=o.querySelector("input");if(r&&r.value!==a){r.value=a||"",await Kt({target:e,type:"text",value:a,isDirectEdit:!0},n,t);break}}}async function Dr(i,e,n,t){console.log("updateElementAttributeViaEditor ->",e,n),i?.querySelector(".wb-initial-empty")?.classList.remove("wb-initial-empty"),i=R.staticElement;let s;const o=i?.tagName.toLowerCase(),r=Xe.staticElementList?.filter(g=>{const m=g?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return o===m});s=await yt(r),i?.classList.remove("wb-initial-empty");const c=t?.value,d=t?.attribute,u=R.staticElement;if(u){if(d==="className")u?.setAttribute("class",c);else if(d==="height"){const g=c?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;u.style.height=m}else if(d==="width"){const g=c?.trim(),m=/^\d+$/.test(g)?`${g}px`:g;u.style.width=m}else if(d==="elementContent")if(!u?.childNodes?.length)u.innerHTML=c;else for(let g of u?.childNodes){const m=g;if(m.nodeValue){if(m.nodeType===3&&m.nodeValue.trim()){m.nodeValue=c;break}}else{const h=document.createTextNode(c);u.insertBefore(h,u.firstChild);break}}else u?.setAttribute(d,c?.trim());s.attributes=s?.attributes?.map(g=>(g?.name===d&&(g?.type==="array"?g.selected=c:g.value=c),g)),await It(i)}}async function Kt(i,e,n){try{const t=i.target.closest(".category-content"),a=t?.id,s=t?.style.display!=="none",l=document.getElementById("advanced-size")?.style.display==="block",d=document.querySelector(".spacing-tabs")?.querySelector(".spacing-tab-btn.active")?.textContent?.toLowerCase().trim(),u=document.querySelector(".margin-control")?.closest(".col-12"),g=document.querySelector(".padding-control")?.closest(".col-12"),m=!u?.classList.contains("hidden"),h=!g?.classList.contains("hidden");e=R.staticElement,e?.classList.remove("wb-initial-empty");const p=e?.tagName?.toLowerCase();let v;const _=e?.classList?.contains("fslayout-row"),C=e?.firstChild?.classList?.contains("fslayout-row");if(_||C)v=await Dn(n);else{const L=Xe.staticElementList?.filter(A=>{const x=A?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return p===x});if(L?.length)v=await yt(L);else if(qe.includes(p)||ht.includes(p)){const A=i?.target?.value,x=i?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(x==="className")e.setAttribute("class",A);else if(x==="elementContent"&&qe.includes(p))e.textContent=A;else if(x==="id")e.id=A;else if(x==="Height"){const k=A?.trim(),P=/^\d+$/.test(k)?`${k}px`:k;e.style.height=P}else if(x==="Width"){const k=A?.trim(),P=/^\d+$/.test(k)?`${k}px`:k;e.style.width=P}else if(x==="Margin"){const P=(A?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.margin=P}else if(x==="Padding"){const P=(A?.trim().split(/\s+/)).map(B=>/^\d+$/.test(B)?`${B}px`:B).join(" ");e.style.padding=P}else x==="Background Color"?e.style.backgroundColor=A:x==="Float"?e.style.float=A:x==="Color"?e.style.color=A:e?.setAttribute(x,A?.trim());if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const k=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=k,le(k)}else{const k=await dt();f.staticWidgetTree.html=k,le(k)}await It(e);return}}const T=i?.target?.value,w=i?.target?.type,y=i?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),E=e,S=E?.getAttribute("isvalidate")==="on";if(S&&E.setAttribute("onchange","applyValidation()"),S&&E?.addEventListener("change",b=>{const L=b.target;Yi(L)}),y==="className")E?.setAttribute("class",T);else if(y==="Height"){const b=T?.trim(),L=/^\d+$/.test(b)?`${b}px`:b;E.style.height=L}else if(y==="Width"){const b=T?.trim(),L=/^\d+$/.test(b)?`${b}px`:b;E.style.width=L}else if(y==="Minimum-Height"){const b=T?.trim(),L=/^\d+$/.test(b)?`${b}px`:b;E.style.minHeight=L}else if(y==="Minimum-Width"){const b=T?.trim(),L=/^\d+$/.test(b)?`${b}px`:b;E.style.minWidth=L}else if(y==="Maximum-Height"){const b=T?.trim(),L=/^\d+$/.test(b)?`${b}px`:b;E.style.maxHeight=L}else if(y==="Maximum-Width"){const b=T?.trim(),L=/^\d+$/.test(b)?`${b}px`:b;E.style.maxWidth=L}else if(y==="Margin"){const L=(T?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");E.style.margin=L}else if(y==="Padding"){const L=(T?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");E.style.padding=L}else if(y==="Background Color")E.style.backgroundColor=T;else if(y==="Color")E.style.color=T;else if(y==="Float")E.style.float=T;else if(y==="Alignment")Hn.includes(e.tagName.toLowerCase())&&(E.style.textAlign=T);else if(y==="Font Family")jn.includes(e.tagName.toLowerCase())&&(E.style.fontFamily=T);else if(y==="Font Weight")Mt.includes(e.tagName.toLowerCase())&&(E.style.fontWeight=T);else if(y==="Font Size"){if(Mt.includes(e.tagName.toLowerCase())){const L=(T?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");E.style.fontSize=L}}else if(y==="Opacity")E.style.opacity=T;else if(y==="Text Transform")e.tagName.toLowerCase()!=="img"&&(E.style.textTransform=T);else if(y==="Line Height"){if(kt.includes(e.tagName.toLowerCase())){const L=(T?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");E.style.lineHeight=L}}else if(y==="Letter Spacing"){if(kt.includes(e.tagName.toLowerCase())){const L=(T?.trim().split(/\s+/)).map(A=>/^\d+$/.test(A)?`${A}px`:A).join(" ");E.style.letterSpacing=L}}else if(w==="checkbox"&&!i?.target?.checked)E?.removeAttribute(y),E.value="";else if(y==="elementContent")if(!E?.childNodes?.length)E.innerText=T;else{let b;e?.childNodes?.length&&(b=Array.from(E?.childNodes)?.filter(L=>L.nodeType===3),b?.length&&b.forEach((L,A)=>{A===0?L.nodeValue=T:L.nodeValue=""}))}else y==="align-items"?(E.style.display="flex",E.style.alignItems=T):y==="justify-content"?(E.style.display="flex",E.style.justifyContent=T):y==="text-align"?E.style.textAlign=T:y==="class"?(E.classList.forEach(b=>{b.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||E.classList.remove(b)}),E.classList.add(...T.split(" "))):y&&E?.setAttribute(y,T?.trim());if(v.attributes=v?.attributes?.map(b=>(b?.name===y&&(b?.type==="array"?b.selected=T:b?.type==="boolean"&&!i?.target?.checked?b.value="":b.value=T),b)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const b=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=b,le(b)}else{const b=await dt();f.staticWidgetTree.html=b,le(b)}D.updateActionHistories(),await It(e),setTimeout(()=>{if(a&&s){const x=document.getElementById(a);if(x){x.style.display="block";const k=x.previousElementSibling?.querySelector(".material-symbols-outlined");k&&(k.textContent="do_not_disturb_on")}}if(l){const x=document.getElementById("advanced-size");if(x){x.style.display="block";const k=x.previousElementSibling?.querySelector(".material-symbols-outlined");k&&(k.textContent="expand_less")}}const b=document.querySelector(".spacing-tabs");if(b&&d){const x=b.querySelector(`.${d}-tab`);x&&On(x,d)}const L=document.querySelector(".margin-control")?.closest(".col-12"),A=document.querySelector(".padding-control")?.closest(".col-12");m?(L?.classList.remove("hidden"),A?.classList.add("hidden")):h&&(L?.classList.add("hidden"),A?.classList.remove("hidden"))},0)}catch(t){console.error("error updating attribute",t.message)}}function ia(i,e){let n=[];return i.wrapper===e&&n.push(i),Array.isArray(i.children)&&i.children.forEach(t=>{n=n.concat(ia(t,e))}),n}async function Nr(i){const e=i?.target?.value,n=i?.target?.type,t=i?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),a=document.querySelector('.content .content-target button[data-element-id="xyzButton"]');t==="className"?a?.setAttribute("class",e):n==="checkbox"&&!i?.target?.checked?a?.removeAttribute(t):t==="elementContent"?a.innerText=e:a?.setAttribute(t,e)}async function Nn(i){return new Promise(async e=>{let n=new z;n.composition=i,n.fullLinkers=["the_element","the_element_name","the_element_void","the_element_tag","the_element_default","the_element_icon","the_element_division","the_element_s_attribute"],n.inpage=100;let t=new z;t.fullLinkers=["the_attribute","the_attribute_type","the_attribute_name","the_attribute_value"],t.inpage=100;const s=await he([n,t],""),o=s?.data?.the_element?.the_element_name?.[0]?.data?.the_name,l=s?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,r=s?.data?.the_element?.the_element_void?.[0]?.data?.the_void,c=s?.data?.the_element?.the_element_default?.[0]?.data?.the_default,d=s?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,u=s?.data?.the_element?.the_element_division?.[0]?.data?.the_division,m=s?.data?.the_element?.the_element_s_attribute?.map(p=>{const v=p.id,_=p?.data?.the_attribute,C=_?.the_attribute_name?.[0]?.data?.the_name,T=_?.the_attribute_type?.[0]?.data?.the_type,w=_?.the_attribute_value?.[0]?.data?.the_value;return{id:v,name:C,type:T,value:w}});m?.push({name:"height",type:"string",value:"",division:"inline"},{name:"width",type:"string",value:"",division:"inline"},{name:"margin",type:"string",value:"",division:"inline"},{name:"padding",type:"string",value:"",division:"inline"},{name:"background-color",type:"color",value:"#FFFFFF",division:"inline"},{name:"color",type:"color",value:"",division:"inline"}),e({id:i,name:o,tag:l,void:r,default:c,icon:d,division:u,attributes:m})})}async function yt(i){const e=i?.[0],n=e.id,t=e?.data?.the_element?.the_element_name?.[0]?.data?.the_name,a=e?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag,s=e?.data?.the_element?.the_element_void?.[0]?.data?.the_void,o=e?.data?.the_element?.the_element_default?.[0]?.data?.the_default,l=e?.data?.the_element?.the_element_icon?.[0]?.data?.the_icon,r=e?.data?.the_element?.the_element_division?.[0]?.data?.the_division,d=e?.data?.the_element?.the_element_s_attribute?.map(g=>{const m=g.id,h=g?.data?.the_attribute,p=h?.the_attribute_name?.[0]?.data?.the_name,v=h?.the_attribute_type?.[0]?.data?.the_type,_=h?.the_attribute_value?.[0]?.data?.the_value;return{id:m,name:p,type:v,value:_}});return d?.push({name:"Height",type:"string",value:"",division:"inline"},{name:"Width",type:"string",value:"",division:"inline"},{name:"Margin",type:"string",value:"",division:"inline"},{name:"Padding",type:"string",value:"",division:"inline"},{name:"Background Color",type:"color",value:"#FFFFFF",division:"inline"},{name:"Color",type:"color",value:"",division:"inline"},{name:"Float",type:"array",value:"",division:"inline"},{name:"Minimum-Height",type:"string",value:"",division:"inline"},{name:"Minimum-Width",type:"string",value:"",division:"inline"},{name:"Maximum-Height",type:"string",value:"",division:"inline"},{name:"Maximum-Width",type:"string",value:"",division:"inline"},{name:"Opacity",type:"string",value:"",division:"inline"}),Hn.includes(a.toLowerCase())&&d.push({name:"Alignment",type:"array",value:"",division:"inline"}),jn.includes(a.toLowerCase())&&d.push({name:"Font Family",type:"array",value:"",division:"inline"}),Mt.includes(a.toLowerCase())&&d.push({name:"Font Weight",type:"array",value:"",division:"inline"}),Sr.includes(a.toLowerCase())&&d.push({name:"Font Size",type:"string",value:"",division:"inline"}),a.toLowerCase()!=="img"&&d.push({name:"Text Transform",type:"array",value:"",division:"inline"}),kt.includes(a.toLowerCase())&&d.push({name:"Line Height",type:"string",value:"",division:"inline"}),kt.includes(a.toLowerCase())&&d.push({name:"Letter Spacing",type:"string",value:"",division:"inline"}),{id:n,name:t,tag:a,void:s,default:o,icon:l,division:r,attributes:d}}async function aa(i){const{id:e,value:n,dataset:{page_id:t}}=i.target;ve(e,n),await $r.updatePageField(e,n,Number(t))}async function qr(i){[{key:"meta_title",value:i?.[`the_${M.PAGE_COMP_NAME}_meta_title`]?.data?.the_meta_title},{key:"meta_description",value:i?.[`the_${M.PAGE_COMP_NAME}_meta_description`]?.data?.the_meta_description},{key:"meta_keywords",value:i?.[`the_${M.PAGE_COMP_NAME}_meta_keywords`]?.data?.the_meta_keywords},{key:"width",value:i?.[`the_${M.PAGE_COMP_NAME}_width`]?.data?.the_width},{key:"font_size",value:i?.[`the_${M.PAGE_COMP_NAME}_font_size`]?.data?.the_font_size},{key:"font_family",value:i?.[`the_${M.PAGE_COMP_NAME}_font_family`]?.data?.the_font_family},{key:"type",value:i?.[`the_${M.PAGE_COMP_NAME}_type`]?.data?.the_type}].forEach(n=>{n.value&&ve(n.key,n.value)})}async function ve(i,e){const n=document.getElementById("fspage-properties")||Fr();let t="";switch(i){case"width":it(".fspage { width: [^;]+ !important; }"),t=e?`.fspage { width: ${e} !important; }`:"";break;case"font_size":it(".fspage { font-size: [^;]+; }"),t=e?`.fspage { font-size: ${e}px; }`:"";break;case"font_family":it(".fspage { font-family: [^;]+; }"),t=e?`.fspage { font-family: ${e}; }`:"";break;case"type":it(".fspage { width: 1200px; margin: 0 auto; }"),it(".fspage { width: 100%; padding: 0; }"),e==="fixed"?t=".fspage { width: 1200px; margin: 0 auto; }":e==="fluid"?t=".fspage { width: 100%; padding: 0; }":t="";break;case"meta_title":document.title=e;break;case"meta_keywords":mt(i.replace("meta_",""),e);break;case"meta_description":mt(i.replace("meta_",""),e);return}n.textContent+=t}function it(i){const e=document.getElementById("fspage-properties");if(!e)return;let n=e?.textContent;n=n?n.replace(new RegExp(i,"g"),""):"",e.textContent=n}function Fr(){const i=document.createElement("style");return i.id="fspage-properties",document.head.appendChild(i),i}function mt(i,e){let n=document.querySelector(`meta[name="${i}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",i),document.head.appendChild(n)),n.setAttribute("content",e)}async function sa(i){try{document.querySelectorAll(".element-selected")?.forEach(async n=>{const t=n?.getAttribute("data-elementId"),a=n?.tagName?.toLowerCase();let s;const o=n?.classList?.contains("fslayout-row"),l=n?.firstChild?.classList?.contains("fslayout-row");if(o||l)s=await Dn(t);else{const h=Xe.staticElementList?.filter(p=>{const v=p?.data?.the_element?.the_element_tag?.[0]?.data?.the_tag;return a===v});if(h?.length)s=await yt(h);else if(qe.includes(a)||ht.includes(a)){const p=i?.target?.value,v=i?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim();if(v==="className")n.setAttribute("class",p);else if(v==="elementContent"&&qe.includes(a))n.textContent=p;else if(v==="id")n.id=p;else if(v==="Height"){const _=p?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;n.style.height=C}else if(v==="Width"){const _=p?.trim(),C=/^\d+$/.test(_)?`${_}px`:_;n.style.width=C}else if(v==="Margin"){const C=(p?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.margin=C}else if(v==="Padding"){const C=(p?.trim().split(/\s+/)).map(T=>/^\d+$/.test(T)?`${T}px`:T).join(" ");n.style.padding=C}else v==="Background Color"?n.style.backgroundColor=p:v==="Color"&&(n.style.color=p);if(f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const _=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=_,le(_)}else{const _=await dt();f.staticWidgetTree.html=_,le(_)}await ea();return}}const r=i?.target?.value,c=i?.target?.type,d=i?.target?.closest(".attribute-row")?.querySelector(".attribute-name")?.textContent?.trim(),u=n,g=u?.getAttribute("isvalidate")==="on";if(g&&u.setAttribute("onchange","applyValidation()"),g&&u?.addEventListener("change",m=>{const h=m.target;Yi(h)}),d==="className")u?.setAttribute("class",r);else if(d==="Height"){const m=r?.trim(),h=/^\d+$/.test(m)?`${m}px`:m;u.style.height=h}else if(d==="Width"){const m=r?.trim(),h=/^\d+$/.test(m)?`${m}px`:m;u.style.width=h}else if(d==="Margin"){const h=(r?.trim().split(/\s+/)).map(p=>/^\d+$/.test(p)?`${p}px`:p).join(" ");u.style.margin=h}else if(d==="Padding"){const h=(r?.trim().split(/\s+/)).map(p=>/^\d+$/.test(p)?`${p}px`:p).join(" ");u.style.padding=h}else if(d==="Background Color")u.style.backgroundColor=r;else if(d==="Color")u.style.color=r;else if(c==="checkbox"&&!i?.target?.checked)u?.removeAttribute(d),u.value="";else if(d==="elementContent")if(!u?.childNodes?.length)u.innerText=r;else for(let m of u?.childNodes){const h=m;if(h.nodeValue){if(h.nodeType===3&&h.nodeValue.trim()){h.nodeValue=r;break}}else{const p=document.createTextNode(r);u.insertBefore(p,u.firstChild);break}}else d==="align-items"?(u.style.display="flex",u.style.alignItems=r):d==="justify-content"?(u.style.display="flex",u.style.justifyContent=r):d==="text-align"?u.style.textAlign=r:d==="class"?(u.classList.forEach(m=>{m.match(/^(row|fslayout-row|fslayout-row-\d+)$/)||u.classList.remove(m)}),u.classList.add(...r.split(" "))):u?.setAttribute(d,r?.trim());if(s.attributes=s?.attributes?.map(m=>(m?.name===d&&(m?.type==="array"?m.selected=r:m?.type==="boolean"&&!i?.target?.checked?m.value="":m.value=r),m)),f?.selectedStaticWidgetTreeInfo?.isChildWidget&&f.selectedStaticWidgetTreeInfo.widgetTree){const m=await xt(f.selectedStaticWidgetTreeInfo.widgetTree.wrapper);f.selectedStaticWidgetTreeInfo.widgetTree.html=m,le(m)}else{const m=await dt();f.staticWidgetTree.html=m,le(m)}D.updateActionHistories()})}catch(e){console.error("error updating attribute",e.message)}}async function Ve(){const i=document.querySelectorAll("link.vde-css"),n=document.getElementById("sortable-list")?.querySelectorAll("li.list-item input"),t=[];n?.length&&n.forEach((a,s)=>{const o=a.value,l=document.createElement("link");l.classList.add("vde-css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href",o),document.head.appendChild(l),t.push({order:s,url:a.value})}),i?.length&&i?.forEach(a=>{a.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.css=t,D.updateActionHistories()}async function Re(){const i=document.querySelectorAll("script.vde-js"),n=document.getElementById("sortable-js-list")?.querySelectorAll("li.list-item input"),t=[];n?.length&&n.forEach(async(a,s)=>{await new Promise((o,l)=>{const r=a.value,c=document.createElement("script");c.classList.add("vde-js"),c.setAttribute("type","text/javascript"),c.setAttribute("src",r),c.setAttribute("crossorigin","anonymous"),c.onload=()=>{o()},c.onerror=d=>{console.error("Failed to load script:",r,d),l(new Error(`Failed to load script: ${r}`))},document.body.appendChild(c),t.push({order:s,url:a.value})})}),i?.length&&i?.forEach(a=>{a.remove()}),f.selectedStaticWidgetTreeInfo.widgetTree.library.js=t,D.updateActionHistories()}function qn(){Xt(f.staticWidgetTree)}async function oa(i){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const t=document.createElement("input");t.type="text",t.placeholder="Enter CSS URL",t.addEventListener("change",async()=>{await Ve()});const a=document.createElement("button");return a.className="remove-button",a.innerHTML='<span class="material-symbols-outlined">delete</span>',a.onclick=async function(){e.remove(),await Ve(),await Yt(i)},e.appendChild(n),e.appendChild(t),e.appendChild(a),e}async function wt(i){const e=i?i?.library?.js:f.widgetTree?.library?.js,n=document.getElementById("sortable-js-list");n.innerHTML="",Fn(),e?.length&&e?.sort((t,a)=>Number(t?.order)-Number(a?.order)),e?.forEach(async t=>{await new Promise((a,s)=>{const o=document.createElement("li");o.className="list-item",o.draggable=!0;const l=document.createElement("span");l.className="material-symbols-outlined",l.innerText="drag_handle";const r=document.createElement("input");r.type="text",r.value=t?.url,r.addEventListener("change",async()=>{await Re()});const c=document.createElement("button");c.className="remove-button",c.innerHTML='<span class="material-symbols-outlined">delete</span>',c.onclick=async function(){o.remove(),await Re(),await wt(i)},o.appendChild(l),o.appendChild(r),o.appendChild(c),n?.appendChild(o);const d=document.createElement("script");return d.classList.add("vde-js"),d.setAttribute("type","text/javascript"),d.setAttribute("src",t.url),d.setAttribute("crossorigin","anonymous"),d.onload=()=>{a()},d.onerror=u=>{console.error("Failed to load script:",t.url,u),s(new Error(`Failed to load script: ${t.url}`))},document.body.appendChild(d),o})})}function Pt(){const i=document.querySelectorAll("link.vde-css");i?.length&&i?.forEach(e=>{e.remove()})}function Fn(){const i=document.querySelectorAll("script.vde-js");i?.length&&i?.forEach(e=>{e.remove()})}async function Yt(i){const e=i?i?.library?.css:f.widgetTree?.library?.css,n=document.getElementById("sortable-list");n.innerHTML="",Pt(),e?.length&&e?.sort((t,a)=>Number(t?.order)-Number(a?.order)),e?.forEach(t=>{const a=document.createElement("li");a.className="list-item",a.draggable=!0;const s=document.createElement("span");s.className="material-symbols-outlined",s.innerText="drag_handle";const o=document.createElement("input");o.type="text",o.value=t.url,o.addEventListener("change",async()=>{await Ve()});const l=document.createElement("button");l.className="remove-button",l.innerHTML='<span class="material-symbols-outlined">delete</span>',l.onclick=async function(){a.remove(),Pt(),await Ve(),await Yt(i)},a.appendChild(s),a.appendChild(o),a.appendChild(l),n?.appendChild(a);const r=document.createElement("link");return r.classList.add("vde-css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",t.url),document.head.appendChild(r),a})}function Or(i){const e=document.getElementById("sortable-list");if(!e)return;let n=null;e.addEventListener("dragstart",t=>{t.target instanceof HTMLElement&&(n=t.target,t.target.classList.add("dragging"))}),e.addEventListener("dragend",async t=>{t.target instanceof HTMLElement&&(t.target.classList.remove("dragging"),Pt(),await Ve(),await Yt(f.widgetTree?.library?.css?.length?f.widgetTree:i))}),e.addEventListener("dragover",t=>{if(t.preventDefault(),!n)return;const a=Vr(e,t.clientY),s=n;a===null?e.appendChild(s):e.insertBefore(s,a)})}function Vr(i,e){return[...i.querySelectorAll(".list-item:not(.dragging)")].reduce((t,a)=>{const s=a.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>t.offset?{offset:o,element:a}:t},{offset:Number.NEGATIVE_INFINITY}).element}async function Xt(i){const e=document.getElementById("sortable-list");e.innerHTML="";const n=document.getElementById("add-list");if(!e||!n){console.error("Required elements not found");return}if(i?.library?.css?.length)await Yt(i);else{const s=await oa(i);e.appendChild(s)}Or(i);const t=document.getElementById("sortable-js-list");t.innerHTML="";const a=document.getElementById("add-js-list");if(!t||!a){console.error("Required elements not found");return}i?.library?.js?.length?await wt(i):t.appendChild(ca(i)),Rr(i)}async function ra(i){const e=document.getElementById("sortable-list"),n=await oa(i);e.appendChild(n)}function la(i){document.getElementById("sortable-js-list").appendChild(ca(i))}function ca(i){const e=document.createElement("li");e.className="list-item",e.draggable=!0;const n=document.createElement("span");n.className="material-symbols-outlined",n.innerText="drag_handle";const t=document.createElement("input");t.type="text",t.placeholder="Enter JS URL",t.addEventListener("change",async()=>{await Re()});const a=document.createElement("button");return a.className="remove-button",a.innerHTML='<span class="material-symbols-outlined">delete</span>',a.onclick=async function(){e.remove(),await Re(),await wt(i)},e.appendChild(n),e.appendChild(t),e.appendChild(a),e}function Rr(i){const e=document.getElementById("sortable-js-list");if(!e)return;let n=null;e.addEventListener("dragstart",t=>{t.target instanceof HTMLElement&&(n=t.target,t.target.classList.add("dragging"))}),e.addEventListener("dragend",async t=>{t.target instanceof HTMLElement&&(t.target.classList.remove("dragging"),Fn(),await Re(),await wt(f.widgetTree?.library?.js?.length?f.widgetTree:i))}),e.addEventListener("dragover",t=>{if(t.preventDefault(),!n)return;const a=Ur(e,t.clientY),s=n;a===null?e.appendChild(s):e.insertBefore(s,a)})}function Ur(i,e){return[...i.querySelectorAll(".list-item:not(.dragging)")].reduce((t,a)=>{const s=a.getBoundingClientRect(),o=e-s.top-s.height/2;return o<0&&o>t.offset?{offset:o,element:a}:t},{offset:Number.NEGATIVE_INFINITY}).element}function zr(i){const e=i.toLowerCase();return me.has(e)?ze.STYLE:Lr.has(e)?ze.BOOLEAN:Cr.has(e)?ze.FORM:Wr.has(e)?ze.SPECIAL:ze.FORM}function Jr(i,e){if(!i&&e==="Background Color")return"#FFFFFF";if(!i)return"#000000";if(i.startsWith("#"))return i;const n=i.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(n){const[t,a,s,o]=n;return"#"+[a,s,o].map(l=>{const r=parseInt(l).toString(16);return r.length===1?"0"+r:r}).join("")}return"#000000"}function da(i,e){if(!e)return console.warn("Attribute name is undefined"),"";if(i.classList.contains("fslayout-row")||i.firstChild instanceof HTMLElement&&i.firstChild.classList?.contains("fslayout-row"))return ua(i,e);const n=e.toLowerCase();if(me.has(n)||me.has(e)){const t=me.get(n)||me.get(e);if(!t)return"";const a=i.style[t.property]||i.getAttribute(`data-${n}`);return n==="color"||n==="background-color"||n==="bg-color"||e==="Color"||e==="Background Color"?Jr(a,e):a||""}if(n==="elementcontent"){let t,a;return i?.childNodes?.length&&(t=Array.from(i?.childNodes)?.filter(s=>s?.nodeType===3),t?.length&&(a=t?.map(s=>s?.nodeValue?.trim()).join(""))),a?a?.trim():i?.textContent||""}return n==="classname"?i.classList.value?.replace(/wb-initial-empty/g,"")||"":i.getAttribute(n)||""}function ua(i,e){const n=e.toLowerCase();return n==="class"||n==="classname"?Array.from(i.classList).filter(t=>!t.match(/^(row|fslayout-row|fslayout-row-\d+)$/)).join(" "):n==="align-items"?i.style.alignItems||"":n==="text-align"?i.style.textAlign||"":i.getAttribute(n)||""}function Gr(i,e,n){const t=e.toLowerCase();if(i.id){const a=i.getAttribute("data-attributes");if(a){const s=JSON.parse(a),o=s.find(l=>l.name===e);o&&((o.type==="array"||Je(e))&&(o.selected=n),o.value=n),i.setAttribute("data-attributes",JSON.stringify(s))}}if(me.has(t)||me.has(e)){const a=me.get(t)||me.get(e);if(!a)return;i.setAttribute(`data-${t}`,n),a.needsUnit&&n&&/^\d+$/.test(n)?i.style[a.property]=`${n}px`:i.style[a.property]=n;return}n?i.setAttribute(t,n):i.removeAttribute(t)}function On(i,e){const n=i.closest(".spacing-tabs");if(!n)return;n.querySelectorAll(".spacing-tab-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active");const t=n.nextElementSibling,a=t?.nextElementSibling;e==="margin"?(t?.classList.remove("hidden"),a?.classList.add("hidden")):(t?.classList.add("hidden"),a?.classList.remove("hidden"))}window.toggleSpacingBox=On;let ge=[],We=_n;async function Vn(i){const e=document.getElementById("selected_attr_list"),n=document.querySelector(".row.attribute_single");ge=[],We=_n,e&&(e.innerHTML=""),n?.remove(),await we(i),i==="update-element-dialog"&&document.getElementById(i)?.remove()}async function dl(i,e){if(i.preventDefault(),!(await Dt.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const t=new FormData(i.target),a=Object.fromEntries(t),s=i.target.querySelector("[name='name']"),o=i.target.querySelector("[name='tag']");let l=!0;if(a?.name?.trim()?s.style.border="":(l=!1,s?.focus(),s.style.border="2px solid red",s.style.outline="none"),a?.tag?.trim()?o.style.border="":(l=!1,o?.focus(),o.style.border="2px solid red",o.style.outline="none"),!l)return;const c=document.getElementById("element-dialog")?.querySelector('button[type="submit"]');c.textContent="Creating...";const d=i?.target;for(let m=0,h=d?.length;m<h;++m)d[m].disabled=!0;const u=await ma(t,null);for(let m=0,h=d?.length;m<h;++m)d[m].disabled=!1;await we(e);const g=await Qt();if(u){const m=document.getElementById("created-elements");m?!g||g.trim()===""?m.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:m.innerHTML=g||"":console.error("Widget list container not found in the DOM.")}return u}async function ma(i,e){const n=Object.fromEntries(i);delete n.attributes;const a=document.getElementById("element_attributes_entry")?.querySelectorAll("ul li");let s=[];if(a.forEach(o=>{const l=o?.textContent?.split(" "),r=l[0],c=l[1].substr(1,l[1].length-7);let d="";switch(r){case"method":d="get,post,dialog";break;case"target":d="_blank,_self,_parent,_top";break;case"type":n?.tag==="button"?d="button,submit,reset":n?.tag==="input"&&(d="button,checkbox,color,date,datetime,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week");break;case"wrap":d="soft,hard";break}s.push({name:r,type:c,value:d})}),s=[...rn,...s],e){const o=await Nn(e),l=o?.attributes?.filter(m=>m?.name==="elementContent")?.[0]?.id,r=new Set(rn.map(m=>m.name)),c=o?.attributes?.filter(m=>m?.division!=="inline"&&!r.has(m?.name)&&m?.name!=="elementContent"),d=new Set(ge.map(m=>m.name)),u=c?.filter(m=>!d.has(m?.name));if(u?.length){const m=await Promise.all(u?.map(async h=>await Se(h?.id)));console.log("deletedResponse ->",m)}let g=[{the_element_name:{name:n?.name}},{the_element_tag:{tag:n?.tag}},{the_element_void:{void:n?.void}},{the_element_icon:{icon:n?.icon.toString()}},{the_element_default:{default:n?.default}},{the_element_division:{division:n?.division}},{the_element_s_attribute:ge}];return await Promise.all(g.map(async m=>await Promise.all(Object.entries(m).map(async([h,p])=>{const v=Object.keys(p)[0],_=p[v]||"";if(h==="the_element_s_attribute"){const C=await Q(e);if(p?.length){const T=p.filter(w=>!w?.id);await Promise.all(T.map(async w=>{const y=await O("attribute",999,w);return await V(C,y,"s_attribute")}))}}else await Ke(e,h,v,_,999);if(h==="the_element_default"&&v==="default"&&l){const T=(await I())?.userId;await Ke(l,"the_attribute_value","value",_,T)}return"x"})))),await N.SyncDataOnline(),W.successfullToast("The element updated successfully"),e}else{const o=s;n?.void&&o.unshift({name:"elementContent",type:"string",value:""});const l=await O("element",999,n);return await Promise.all(o.map(async r=>{const c=await O("attribute",999,r);return await V(l,c,"s_attribute")})),await N.SyncDataOnline(),W.successfullToast("The element created successfully"),l}}function Qr(){const i=document.querySelectorAll(".attribute_single");i?.length&&i.forEach(a=>{a?.remove()});let e=String(Date.now());const n=Yr(e);document.getElementById("create_element_modal_attribute_wrap")?.insertAdjacentHTML("beforeend",n)}function ga(i){document.getElementById(i)?.remove()}async function Zr(){const i=document.getElementById("select_the_attribute");let e=We.filter(t=>t?.name==i?.value)[0];We=We.filter(t=>t?.name!=i?.value),ge.push(e);const n=i.closest(".attribute_single");n?.id&&ga(n.id),Rn([])}function Kr(i){let e=ge.filter(n=>n.name==i)[0];ge=ge.filter(n=>n.name!=i),We.push(e),es(We,"name","string"),Rn([])}function Rn(i){let e='<ul id="selected_attr_list" class="selected_attr_list">';if(ge.length>0)ge.forEach(t=>{t.name!=="id"&&t.name!=="className"&&(e+=`<li>${t.name} (${t.type})`,e+=`<a onclick="removeSelectedAttribute('${t.name}')"><span class="material-symbols-outlined">close</span></a></li>`)});else{const t=i?.filter(s=>s?.division!=="inline"&&s.name!=="id"&&s.name!=="className"&&s.name!=="elementContent");ge=t;const a=new Set(ge.map(s=>s.name));We=We.filter(s=>!a?.has(s?.name)),t.map(function(s){e+=`<li>${s.name} (${s.type}) `,e+=`<a onclick="removeSelectedAttribute('${s.name}')"><span class="material-symbols-outlined">close</span></a></li>`},[])}e+="</ul>";const n=document.getElementById("element_attributes_entry");n&&(n.innerHTML=e)}function Yr(i){let e='<select id="select_the_attribute" class="form-select">';return We.forEach(n=>{e+=`<option value="${n?.name}">${n?.name}</option>`}),e+="</select>",`
      <div id="${i}_attribute" class="row attribute_single" >
          <div class="col-md-6">
              ${e}
          </div>
         <div class="col-md-4">
            <!-- <a class="add_attr attr_action" onclick="addAttribute(${i})"> -->
            <a class="add_attr attr_action" onclick="addAttribute()">
              <span class="material-symbols-outlined">
                check
              </span>
            </a>
            <a class="cancel_add_attr attr_action" onclick="cancelAttributeRow('${i}_attribute')">
              <span class="material-symbols-outlined">
                close
              </span>
            </a>
         </div>
      </div>
  `}async function Xr(i,e){if(i.preventDefault(),!(await Dt.getInstance().getLoginInfo()).isAdmin)return"Sorry You Do Not Have Access To Create Element";const t=new FormData(i.target),a=Object.fromEntries(t);console.log(a,"update formValues");const s=await ma(t,e);await Vn("update-element-dialog");const o=await Qt();if(s){const l=document.getElementById("created-elements");l?!o||o.trim()===""?l.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:l.innerHTML=o||"":console.error("Widget list container not found in the DOM.")}return s}class el{createElemenModaltHTML;singleElement;constructor(e){e&&this.init(e)}async init(e){this.getSingleElementDetails(e)}async getSingleElementDetails(e){const n=await Nn(e);this.singleElement=n,this.createElemenModaltHTML=this.getHtml(),n&&(document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML),document.getElementById("update-element-dialog").showModal(),await Rn(this.singleElement.attributes))}getHtml(){return window.updateNewElement=Xr,window.closeElementModal=Vn,`<dialog id="update-element-dialog" class="col-md-4 a-dialog update-element-dialog">
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
      </dialog>`}}class tl{createElemenModaltHTML;constructor(){window._dragService=eo,this.init()}init(){this.createElemenModaltHTML=this.getHtml(),document.querySelector("body #app")?.insertAdjacentHTML("afterend",this.createElemenModaltHTML)}getHtml(){return window.addNewAttribute=Qr,window.cancelAttributeRow=ga,window.addAttribute=Zr,window.removeSelectedAttribute=Kr,window.closeElementModal=Vn,`
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
    `}}async function de(i){document.getElementById(i).showModal()}async function we(i){const e=document.getElementById(i);e?.querySelector("form")?.reset(),e?.close(),e?.remove()}async function pa(i,e){i?.stopPropagation();const n=document.getElementById(`menu-${e}`),t=n?.classList.contains("show");document.querySelectorAll(".dropdown-menu").forEach(s=>{s.classList.remove("show")}),n&&!t&&n.classList.add("show")}async function ul(i){new tl,await de(i)}async function ml(i,e,n){i.stopPropagation(),console.log("modalId",e),pa(i,Number(n)),new el(n)}async function gl(i,e){pa(i,e),confirm("Are you sure you want to delete the element?")&&(await Se(e),W.successfullToast("The element deleted successfully")),console.warn("element Deleted sucessfully");const t=await Qt(),a=document.getElementById("created-elements");a?!t||t.trim()===""?a.innerHTML=`
        <li class="list-unstyled">
          <p class="text-center my-3 text-secondary" >No Elements</p>
        </li>
      `:a.innerHTML=t||"":console.error("Elements list container not found in the DOM.")}export{Ee as A,de as B,Wn as C,Ue as P,ir as S,nr as T,eo as _,cn as a,Fi as b,ot as c,Zt as d,D as e,f,Fn as g,cl as h,Ln as i,ul as j,pa as k,Oe as l,ml as m,je as n,gl as o,we as p,dl as q,Pt as r,Es as s,W as t,rt as u,$e as v,q as w,Ji as x,tl as y,qr as z};
