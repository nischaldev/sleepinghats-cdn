import{y as n}from"./mftsccs-browser-DU86KKx4.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{e as a}from"./index-Ddo4waCg.js";import{N as e}from"./navbar.component-q-rucYW2.js";import{h as r}from"./modal.service-BTRBsJic.js";import"./loginModal.service-BxrS3yAv.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";class N extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await r(),m=await new e(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("communityContent");await n(a.discussion_community,o)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{N as default};
