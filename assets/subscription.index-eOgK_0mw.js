import{dP as s}from"./mftsccs-browser-8J-t7mQ6.js";import{m as e}from"./mainView.class-C4NLGCWW.js";import{y as n,f as o}from"./index-Btm-G0Z6.js";import{N as a}from"./navbar.component-DEZ6HTIB.js";import"./codemirror-B6qdlLvx.js";import"./vendor-vUhUC0ZM.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-DvDzaSc0.js";class N extends e{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await n(),i=await new a(t).getHtml();return setTimeout(async()=>{const r=document.getElementById("subscription-render");await s(o.subscriptionId,r,"",!1)},0),`
    ${i}
        <div id="subscription-render"></div>
        `}}export{N as default};
