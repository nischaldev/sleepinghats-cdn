import{C as o}from"./mftsccs-browser-Bt3uP0Zt.js";import{m as s}from"./mainView.class-C4NLGCWW.js";import{e}from"./index-5VTuY4tF.js";import{m as n}from"./modal.service-BFNKBt7K.js";import{N as m}from"./navbar.component-0p58DF01.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-CxzzP8ld.js";class x extends s{constructor(t){super(t),this.setTitle("Subscription")}async getHtml(){const t=await n(),r=await new m(t).getHtml();return setTimeout(async()=>{const i=document.getElementById("subscription-render");await o(e.subscriptionId,i)},0),`
    ${r}
        <div id="subscription-render"></div>
        `}}export{x as default};
