import{m}from"./mainView.class-C4NLGCWW.js";import{y as r}from"./index-F3rzlyVL.js";import{o as e,q as c}from"./vendor-vUhUC0ZM.js";import{H as n}from"./highlight-CFrhCzdo.js";import{N as l}from"./navbar.component-DwdNqluC.js";import"./mftsccs-browser-8J-t7mQ6.js";import"./codemirror-B6qdlLvx.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./ckeditor-Cw9bcqxY.js";import"./loginModal.service-DN3hCsFI.js";class y extends m{constructor(a){super(a),this.setTitle("Documentation"),e.use(c({langPrefix:"hljs language-",highlight(i,t){const o=n.getLanguage(t)?t:"plaintext";return n.highlight(i,{language:o}).value}}))}async getHtml(){const a=await fetch("/images/doc/docs.md").then(s=>s.text()),i=e(a),t=await r();return`
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
    `}}export{y as default};
