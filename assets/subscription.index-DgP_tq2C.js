import{j as s}from"./mftsccs-browser-D_uubYVV.js";import{m as n}from"./mainView.class-C4NLGCWW.js";import{u as o,I as e}from"./index-B2npdIj-.js";import{N as a}from"./navbar.component-Bq2tBitt.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-CTHFYKh_.js";class x extends n{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await o(),i=await new a(t).getHtml();return setTimeout(async()=>{const r=document.getElementById("subscription-render");await s(e.subscriptionId,r)},0),`
    ${i}
        <div id="subscription-render"></div>
        `}}export{x as default};
