import{y as o}from"./mftsccs-browser-DeTC_MD3.js";import{m as s}from"./mainView.class-C4NLGCWW.js";import{e}from"./index-DBKCTHLF.js";import{m as n}from"./modal.service-PEdXa2SE.js";import{N as m}from"./navbar.component-BO24rMOv.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-D9eG0NBF.js";class x extends s{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await n(),r=await new m(t).getHtml();return setTimeout(async()=>{const i=document.getElementById("subscription-render");await o(e.subscriptionId,i)},0),`
    ${r}
        <div id="subscription-render"></div>
        `}}export{x as default};
