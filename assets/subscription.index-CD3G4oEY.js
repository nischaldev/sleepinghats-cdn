import{ej as s}from"./mftsccs-browser-DqtqSosg.js";import{m as e}from"./mainView.class-C4NLGCWW.js";import{u as n,I as o}from"./index-B-kZ959M.js";import{N as a}from"./navbar.component-CsDjYAtY.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-1Fv7QTmU.js";class x extends e{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await n(),i=await new a(t).getHtml();return setTimeout(async()=>{const r=document.getElementById("subscription-render");await s(o.subscriptionId,r)},0),`
    ${i}
        <div id="subscription-render"></div>
        `}}export{x as default};
