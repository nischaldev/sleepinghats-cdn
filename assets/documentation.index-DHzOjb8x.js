import{m as r}from"./mainView.class-C4NLGCWW.js";import{m as s}from"./modal.service-DmW5Dpcr.js";import{n,o as c}from"./vendor-Cs_0E_Xj.js";import{H as e}from"./highlight-CFrhCzdo.js";import{N as l}from"./navbar.component-uiiuH7Mc.js";import"./mftsccs-browser-CTK435WQ.js";import"./codemirror-B3vgQINq.js";import"./index-CaOJQQDH.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./ckeditor-Cw9bcqxY.js";import"./loginModal.service-HxkADuKI.js";class D extends r{constructor(a){super(a),this.setTitle("Documentation"),n.use(c({langPrefix:"hljs language-",highlight(i,t){const o=e.getLanguage(t)?t:"plaintext";return e.highlight(i,{language:o}).value}}))}async getHtml(){const a=await fetch("/images/doc/docs.md").then(m=>m.text()),i=n(a),t=await s();return`
      ${await new l(t).getHtml()}
      <div class="container pt-1">
        <div class="row">
          <div class="col-12">
            <div class="documentation-content">
              ${i}
            </div>
          </div>
        </div>
      </div>
    `}}export{D as default};
