import{m as s}from"./mftsccs-browser-MShQrN6O.js";import{m as n}from"./mainView.class-C4NLGCWW.js";import{q as o,H as e}from"./index--BR_FAre.js";import{N as a}from"./navbar.component-C9Hattws.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-DMDon9wD.js";class N extends n{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await o(),i=await new a(t).getHtml();return setTimeout(async()=>{const r=document.getElementById("subscription-render");await s(e.subscriptionId,r)},0),`
    ${i}
        <div id="subscription-render"></div>
        `}}export{N as default};
