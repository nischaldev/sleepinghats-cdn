import{I as n}from"./mftsccs-browser-im9GysH2.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{e as a}from"./index-De2c36D-.js";import{N as e}from"./navbar.component-sFJMdjfO.js";import{m as r}from"./modal.service-DTb3Ms8v.js";import"./loginModal.service-DsNM4_WK.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";class N extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await r(),m=await new e(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("communityContent");await n(a.discussion_community,o)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{N as default};
