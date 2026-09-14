import{m as j,dX as D,h as F,dV as $}from"./mftsccs-browser-8J-t7mQ6.js";import{S as M,g as B,o as W,R as O,U as P,W as I,t as k,l as J}from"./index-a7TcZOMW.js";import{r as R,u as U}from"./vendor-vUhUC0ZM.js";import"./codemirror-B6qdlLvx.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./ckeditor-Cw9bcqxY.js";const z=["html","css","js","after_render","before_render","update","mount_child"],N=(s,n)=>z.map(e=>{const i=s?.[e]||"",t=n?.[e]||"",r=R(i,t);return{field:e,changed:r.some(o=>o.added||o.removed),changes:r}});async function X(s,n,e){M.staticWidgetTree={...M.staticWidgetTree,...e};const i=await M.updateWidget(n);if(!i)throw new Error("Failed to save the merged version.");const t=await B(),r=await j("merged_from",String(s),!1,t?.userId,4,999);return await D(i,r,"merged_from"),await F.SyncDataOnline(),i}const K=["html","css","js","after_render","before_render","update","mount_child"],Q=["library","assistant","custom_functions","children","type","dependency"],C=s=>s.slice(1);function Y(s,n,e,i,t){const r=U(n,e,s);let o=!1;const f=[],d=m=>m.startsWith("\\"),c=m=>m.startsWith("-");for(const m of r.hunks)for(const l of m.lines)if(typeof l=="string"){if(c(l)||d(l))continue;f.push(C(l))}else if(l?.conflict){o=!0;const g=l.mine.filter(a=>!c(a)&&!d(a)).map(C),u=l.theirs.filter(a=>!c(a)&&!d(a)).map(C);f.push(`<<<<<<< current (v${i})`,...g,"=======",...u,`>>>>>>> incoming (v${t})`)}return{text:f.join(`
`),hasConflict:o}}async function H(s){const n=[],e=new Set;let i=s;for(;i&&!e.has(i);)e.add(i),n.push(i),i=(await $(i))?.root||0;return n}async function G(s,n){if(s===n)return s;const e=await H(s),i=new Set(e),t=await H(n);for(const r of t)if(i.has(r))return r;return null}function q(s){const{currentValue:n,sourceValue:e}=s;if(s.kind==="text"){const i=String(n??""),t=String(e??"");return[i,t].filter(Boolean).join(`

`)}if(Array.isArray(n)&&Array.isArray(e)){const i=o=>o?.id??o?.slug??o?.url??JSON.stringify(o),t=new Set,r=[];for(const o of[...n,...e]){const f=String(i(o));t.has(f)||(t.add(f),r.push(o))}return r}return n&&e&&typeof n=="object"&&typeof e=="object"&&!Array.isArray(n)?"css"in n||"js"in n?{css:q({...s,currentValue:n.css||[],sourceValue:e.css||[]}),js:q({...s,currentValue:n.js||[],sourceValue:e.js||[]})}:{...n,...e}:e??n}const x=(s,n)=>{if(s===n)return!0;try{return JSON.stringify(s??null)===JSON.stringify(n??null)}catch{return!1}};async function Z(s,n,e="current",i="incoming"){const t=await G(s,n);if(t==null)throw new Error("Could not find a common ancestor between these versions.");if(t===n)return{status:"up-to-date",merged:{},conflicts:[],ancestorId:t};const[r,o,f]=await Promise.all([$(t),$(s),$(n)]),d={},c=[];for(const l of K){const g=r?.[l]||"",u=o?.[l]||"",a=f?.[l]||"",h=u!==g;if(!(a!==g))d[l]=u;else if(!h)d[l]=a;else if(u===a)d[l]=u;else{const y=Y(g,u,a,e,i);y.hasConflict?c.push({field:l,kind:"text",currentValue:u,sourceValue:a,lineMergedPreview:y.text}):d[l]=y.text}}for(const l of Q){const g=r?.[l],u=o?.[l],a=f?.[l],h=!x(u,g);!x(a,g)?h?x(u,a)?d[l]=u:c.push({field:l,kind:"opaque",currentValue:u,sourceValue:a}):d[l]=a:d[l]=u}return{status:t===s?"fast-forward":c.length?"conflict":"merged",merged:d,conflicts:c,ancestorId:t}}function ee(){return window.toggleVersionSelection=ne,window.compareSelectedVersions=se,window.openMergePanel=re,window.closeMergePanel=ce,window.scrollToVersion=te,`
    <dialog id="version-history-container" class="col-md-8 a-dialog create-element-dialog">
      <div class="a-dialog-header">
        <div class="vh-title">
          <span>Version history</span>
          <span class="vh-subtitle">Every save is kept — restore or merge any older version back in</span>
        </div>
        <span class="material-symbols-outlined" style="cursor: pointer;" onclick="closeModal('version-history-container')">close</span>
      </div>
      <div class="a-dialog-body">
        <div class="vh-toolbar">
          <small class="text-secondary">Select two versions to compare</small>
          <button type="button" class="btn btn-sm btn-primary" id="compare-versions-btn" disabled onclick="compareSelectedVersions(event)">Compare</button>
        </div>
        <ul id="version-history-list" class="version-timeline mb-3">
          <li class="text-secondary">Loading...</li>
        </ul>
        <div id="version-diff-view" class="d-none"></div>
      </div>
    </dialog>
  `}let w=[],S=new Map;async function we(){const s=M.staticWidgetTree,n=s.origin||s.id;w=[];const e=ee(),i=document.createElement("div");i.innerHTML=e;const t=i.querySelector("#version-history-container");document.querySelector("body #app")?.appendChild(t),await W("version-history-container"),await _(n,s.id)}async function _(s,n){const e=document.getElementById("version-history-list");if(e)try{const i=await O(s),t=Array.from(i.values()).sort((r,o)=>Number(o.widgetVersion||0)-Number(r.widgetVersion||0));if(S=new Map(t.map(r=>[r.widgetId,r])),!t.length){e.innerHTML=`
        <li class="vh-empty-state">
          <span class="material-symbols-outlined">history</span>
          <span>No version history yet</span>
        </li>
      `;return}e.innerHTML=t.map(r=>{const o=r.widgetId===n,f=r.entryTimestamp?de(r.entryTimestamp):"",d=r.entryTimestamp?new Date(r.entryTimestamp).toLocaleString():"",c=r.updatedByEmail||"Unknown",m=P(c),l=I(c),g=r.mergedFromWidgetId?S.get(r.mergedFromWidgetId):null,u=!!r.mergedFromWidgetId;return`
          <li class="version-row ${o?"is-current":""} ${u?"is-merge":""}" id="version-row-${r.widgetId}">
            <div class="version-rail">
              <div class="version-dot">${u?'<span class="material-symbols-outlined">call_merge</span>':""}</div>
              <div class="version-line"></div>
            </div>
            <div class="version-card">
              <div class="version-card-head">
                <span class="version-badge">v${r.widgetVersion??"-"}</span>
                ${o?'<span class="version-current-pill">Current</span>':""}
                <span class="version-timestamp" title="${v(d)}">${v(f)}</span>
              </div>
              <div class="version-author-row">
                <span class="version-author-avatar" style="background-color:${l};">${v(m)}</span>
                <span class="version-author-email">${v(c)}</span>
              </div>
              ${u?`<button type="button" class="merge-source-chip" onclick="scrollToVersion(event, ${r.mergedFromWidgetId})">
                      <span class="material-symbols-outlined">call_merge</span>
                      Merged from v${g?.widgetVersion??"?"}
                    </button>`:""}
              ${r.commitMessage?`<div class="version-commit-message">${v(r.commitMessage)}</div>`:""}
              <div class="version-card-actions">
                <label class="version-compare-check">
                  <input type="checkbox" class="form-check-input" value="${r.widgetId}" onchange="toggleVersionSelection(event, ${r.widgetId})" />
                  Compare
                </label>
                ${o?"":`<button type="button" class="version-merge-btn" onclick="openMergePanel(event, ${s}, ${r.widgetId}, '${ue(String(r.widgetVersion??""))}')">
                        <span class="material-symbols-outlined">call_merge</span> Merge into current
                      </button>`}
              </div>
              <div id="merge-panel-${r.widgetId}"></div>
            </div>
          </li>
        `}).join("")}catch(i){e.innerHTML='<li class="text-danger">Failed to load version history</li>',console.error("error loading version history",i)}}function te(s,n){s.preventDefault();const e=document.getElementById(`version-row-${n}`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.classList.add("is-jump-highlight"),setTimeout(()=>e.classList.remove("is-jump-highlight"),1400))}function ne(s,n){if(s.target.checked){if(w.length>=2){s.target.checked=!1,k.errorToast("You can only compare two versions at a time");return}w.push(n)}else w=w.filter(t=>t!==n);document.querySelectorAll(".version-row").forEach(t=>{const r=Number(t.id.replace("version-row-",""));t.classList.toggle("is-selected",w.includes(r))});const i=document.getElementById("compare-versions-btn");i&&(i.disabled=w.length!==2)}async function se(s){if(s.preventDefault(),w.length!==2)return;const n=document.getElementById("version-diff-view");if(n){n.classList.remove("d-none"),n.innerHTML='<p class="text-secondary">Loading diff...</p>';try{const[e,i]=w,t=Number(S.get(e)?.widgetVersion??0),r=Number(S.get(i)?.widgetVersion??0),[o,f]=t<=r?[e,i]:[i,e],[d,c]=await Promise.all([$(o),$(f)]),m=N(d,c);n.innerHTML=A(m)}catch(e){n.innerHTML='<p class="text-danger">Failed to compute diff</p>',console.error("error comparing versions",e)}}}async function re(s,n,e,i){s.preventDefault(),document.querySelectorAll('[id^="merge-panel-"]').forEach(r=>r.innerHTML="");const t=document.getElementById(`merge-panel-${e}`);if(t){t.innerHTML='<div class="merge-confirm-panel"><p class="text-secondary mb-0">Computing merge with current...</p></div>';try{const r=document.querySelector(".version-row.is-current"),o=r?Number(r.id.replace("version-row-","")):n,f=String(S.get(o)?.widgetVersion??""),d=`v${i} merged with v${f}`,c=await Z(o,e,f,i);if(c.status==="up-to-date"){t.innerHTML=`
        <div class="merge-confirm-panel">
          <div class="merge-status-banner merge-status-clean">
            <span class="material-symbols-outlined">check_circle</span>
            v${v(f)} already contains everything from v${v(i)} — nothing to merge.
          </div>
          <div class="merge-confirm-actions">
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="closeMergePanel(event, ${e})">Close</button>
          </div>
        </div>
      `;return}const m=c.conflicts.length>0,l=await $(o),g=N(l,c.merged).filter(a=>a.changed&&Object.prototype.hasOwnProperty.call(c.merged,a.field));let u="";m?(u+=`
        <div class="merge-status-banner merge-status-conflict">
          <span class="material-symbols-outlined">warning</span>
          ${c.conflicts.length} field${c.conflicts.length>1?"s":""} changed on both sides — choose how to resolve each one below.
        </div>
      `,g.length&&(u+=`
          <div class="merge-section-label">Other changes — merged automatically, no action needed</div>
          ${A(g,!0)}
        `),u+=`
        <div class="merge-section-label">Conflicts to resolve</div>
        <div class="conflict-resolver-list">
          ${c.conflicts.map(a=>le(a,e,i,f)).join("")}
        </div>
      `):u+=A(g,!0),t.innerHTML=`
      <div class="merge-confirm-panel">
        ${u}
        <label for="merge-message-${e}">Commit message</label>
        <input type="text" id="merge-message-${e}" class="form-control form-control-sm" value="${v(d)}" />
        <div class="merge-confirm-actions">
          <button type="button" class="btn btn-sm btn-outline-secondary" id="merge-cancel-${e}">Cancel</button>
          <button type="button" class="btn btn-sm ${m?"btn-confirm-merge-conflict":"btn-confirm-merge"}" id="confirm-merge-btn-${e}">
            <span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle;">call_merge</span> ${m?"Merge with resolved conflicts":"Merge into current"}
          </button>
        </div>
      </div>
    `,t.querySelector(`#merge-cancel-${e}`)?.addEventListener("click",a=>{a.preventDefault(),t.innerHTML=""}),c.conflicts.forEach(a=>oe(t,a,e,()=>E(t,e))),E(t,e),t.querySelector(`#merge-message-${e}`)?.addEventListener("keydown",a=>{const h=a;if(h.key!=="Enter")return;h.preventDefault();const p=t.querySelector(`#confirm-merge-btn-${e}`);p&&!p.disabled&&p.click()}),t.querySelector(`#confirm-merge-btn-${e}`)?.addEventListener("click",async()=>{const a=t.querySelector(`#confirm-merge-btn-${e}`),p=t.querySelector(`#merge-message-${e}`)?.value?.trim()||d,y={},V=[];for(const b of c.conflicts){const L=`conflict-editor-${e}-${b.field}`,T=t.querySelector(`#${L}`)?.value??"";if(b.kind==="text"){if(T.includes("<<<<<<<")){V.push(b.field);continue}y[b.field]=T}else try{y[b.field]=JSON.parse(T)}catch{V.push(b.field)}}if(V.length){k.errorToast(`Resolve remaining conflict markers in ${V.join(", ")} before merging`);return}a&&(a.disabled=!0,a.innerHTML="Merging...");try{const b=await X(e,p,{...c.merged,...y});await ae(n,b,m,c.conflicts.map(L=>L.field))}catch(b){k.errorToast("Failed to merge version"),console.error("error merging version",b),a&&(a.disabled=!1),E(t,e)}})}catch(r){t.innerHTML='<div class="merge-confirm-panel"><p class="text-danger mb-0">Failed to compute merge</p></div>',console.error("error preparing merge panel",r)}}}function ie(s,n){const e=/<<<<<<< current \([^)]*\)\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> incoming \([^)]*\)/;return s.replace(e,(i,t,r)=>n==="current"?t:n==="incoming"?r:`${t}
${r}`)}function oe(s,n,e,i){const t=`conflict-editor-${e}-${n.field}`,r=s.querySelector(`#${t}`),o=s.querySelector(`#${t}-status`);if(!r||!o)return;const f=()=>{if(n.kind!=="text"){o.textContent="";return}const d=(r.value.match(/<<<<<<</g)||[]).length;o.textContent=d?`${d} conflict${d>1?"s":""} remaining`:"All conflicts resolved",o.classList.toggle("conflict-status-pending",d>0),o.classList.toggle("conflict-status-clear",d===0),i()};f(),r.addEventListener("input",f),s.querySelectorAll(`.conflict-quick-btn[data-editor="${t}"]`).forEach(d=>{d.addEventListener("click",()=>{const c=d.dataset.action;if(n.kind==="text")r.value=ie(r.value,c);else{const m=c==="current"?n.currentValue:c==="incoming"?n.sourceValue:q(n);r.value=JSON.stringify(m,null,2)}f()})}),s.querySelector(`.conflict-expand-btn[data-editor="${t}"]`)?.addEventListener("click",()=>{r.classList.toggle("is-expanded")})}function E(s,n){const e=s.querySelector(`#confirm-merge-btn-${n}`);if(!e)return;const i=Array.from(s.querySelectorAll(".conflict-full-editor")).some(t=>t.value.includes("<<<<<<<"));e.classList.toggle("btn-confirm-merge-conflict",i),e.classList.toggle("btn-confirm-merge",!i),e.innerHTML=`<span class="material-symbols-outlined" style="font-size:15px;vertical-align:middle;">call_merge</span> ${i?"Merge with resolved conflicts":"Merge into current"}`}async function ae(s,n,e,i){k.successfullToast(e?`Merged — resolved conflicts in ${i.join(", ")}`:"Merged into current version");const t=M.staticWidgetTree;(t.origin||t.id)===s&&n?.id&&await J(null,n.id,s),w=[];const o=document.getElementById("version-diff-view");o&&o.classList.add("d-none"),await _(s,n?.id||s)}function ce(s,n){s.preventDefault();const e=document.getElementById(`merge-panel-${n}`);e&&(e.innerHTML="")}function le(s,n,e,i){const t=`conflict-editor-${n}-${s.field}`,r=s.kind==="text"?s.lineMergedPreview??String(s.currentValue??""):JSON.stringify(s.currentValue,null,2);return`
    <div class="conflict-editor-card">
      <div class="conflict-editor-toolbar">
        <div class="conflict-editor-title">
          <span class="material-symbols-outlined">warning</span>
          <strong>${v(s.field)}</strong>
        </div>
        <div class="conflict-quick-actions">
          <button type="button" class="conflict-quick-btn" data-action="current" data-editor="${t}" title="Accept current (v${v(i)})">Accept Current</button>
          <button type="button" class="conflict-quick-btn" data-action="incoming" data-editor="${t}" title="Accept incoming (v${v(e)})">Accept Incoming</button>
          <button type="button" class="conflict-quick-btn" data-action="both" data-editor="${t}">Accept Both</button>
          <button type="button" class="conflict-expand-btn" data-editor="${t}" title="Expand editor">
            <span class="material-symbols-outlined">open_in_full</span>
          </button>
        </div>
      </div>
      <textarea class="conflict-full-editor" id="${t}" spellcheck="false">${v(r)}</textarea>
      <div class="conflict-status" id="${t}-status"></div>
    </div>
  `}function A(s,n=!1){const e=s.filter(f=>f.changed);if(!e.length)return'<p class="text-secondary">No differences in html/css/js/lifecycle code between these versions.</p>';let i=0,t=0;const r=e.map(f=>{let d=1,c=1,m=0,l=0;const g=[];for(const u of f.changes){const a=u.value.split(`
`).filter((h,p,y)=>!(p===y.length-1&&y[p]===""));for(const h of a){const p=v(h);u.added?(m++,g.push(`<div class="diff-row diff-row-add"><span class="diff-gutter"></span><span class="diff-gutter">${c++}</span><span class="diff-marker">+</span><span class="diff-code">${p}</span></div>`)):u.removed?(l++,g.push(`<div class="diff-row diff-row-remove"><span class="diff-gutter">${d++}</span><span class="diff-gutter"></span><span class="diff-marker">-</span><span class="diff-code">${p}</span></div>`)):g.push(`<div class="diff-row"><span class="diff-gutter">${d++}</span><span class="diff-gutter">${c++}</span><span class="diff-marker"></span><span class="diff-code">${p}</span></div>`)}}return i+=m,t+=l,`
      <div class="diff-card">
        <div class="diff-card-header">
          <span class="material-symbols-outlined diff-file-icon">description</span>
          <span class="diff-file-name">${v(f.field)}</span>
          <span class="diff-stat-add">+${m}</span>
          <span class="diff-stat-remove">-${l}</span>
        </div>
        <div class="diff-card-body" style="${n?"max-height:200px;":""}">
          ${g.join("")}
        </div>
      </div>
    `});return`
    <div class="diff-summary">
      <strong>${e.length}</strong> field${e.length>1?"s":""} changed
      <span class="diff-stat-add">+${i}</span>
      <span class="diff-stat-remove">-${t}</span>
    </div>
  `+r.join("")}function de(s){const n=new Date(s);if(Number.isNaN(n.getTime()))return"";const e=Date.now()-n.getTime(),i=Math.round(e/1e3),t=Math.round(i/60),r=Math.round(t/60),o=Math.round(r/24);return i<60?"just now":t<60?`${t}m ago`:r<24?`${r}h ago`:o<7?`${o}d ago`:n.toLocaleDateString()}function v(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ue(s){return s.replace(/\\/g,"\\\\").replace(/'/g,"\\'")}export{ce as closeMergePanel,se as compareSelectedVersions,re as openMergePanel,we as openWidgetHistory,te as scrollToVersion,ne as toggleVersionSelection};
