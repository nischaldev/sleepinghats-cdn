import{I as s}from"./mftsccs-browser-DXjWFAtr.js";import{m as n}from"./mainView.class-C4NLGCWW.js";import{q as o,H as e}from"./index-wjwk8akc.js";import{N as a}from"./navbar.component-D5v7REP8.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-CFL5TEPl.js";class I extends n{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await o(),i=await new a(t).getHtml();return setTimeout(async()=>{const r=document.getElementById("subscription-render");await s(e.subscriptionId,r)},0),`
    ${i}
        <div id="subscription-render"></div>
        `}}export{I as default};
