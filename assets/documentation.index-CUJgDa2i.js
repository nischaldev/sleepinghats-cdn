import{m}from"./mainView.class-C4NLGCWW.js";import{u as r}from"./index-DvnFW6GV.js";import{o as e,q as c}from"./vendor-DEYWGvhS.js";import{H as n}from"./highlight-CFrhCzdo.js";import{N as l}from"./navbar.component-CB0OKW0-.js";import"./mftsccs-browser-CjbEkHW7.js";import"./codemirror-D1H9tReK.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./ckeditor-Cw9bcqxY.js";import"./loginModal.service-CLBQ11Vg.js";class C extends m{constructor(a){super(a),this.setTitle("Documentation"),e.use(c({langPrefix:"hljs language-",highlight(i,t){const o=n.getLanguage(t)?t:"plaintext";return n.highlight(i,{language:o}).value}}))}async getHtml(){const a=await fetch("/images/doc/docs.md").then(s=>s.text()),i=e(a),t=await r();return`
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
    `}}export{C as default};
