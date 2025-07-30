import{I as o}from"./mftsccs-browser-BC2ihuhc.js";import{m as s}from"./mainView.class-C4NLGCWW.js";import{e}from"./index-Ku_gwIVJ.js";import{m as n}from"./modal.service-kUJVZJVy.js";import{N as m}from"./navbar.component-4IHlI2xt.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-BUutYCDg.js";class x extends s{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await n(),r=await new m(t).getHtml();return setTimeout(async()=>{const i=document.getElementById("subscription-render");await o(e.subscriptionId,i)},0),`
    ${r}
        <div id="subscription-render"></div>
        `}}export{x as default};
