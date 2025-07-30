import{I as n}from"./mftsccs-browser-BC2ihuhc.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{e as a}from"./index-Ku_gwIVJ.js";import{N as e}from"./navbar.component-4IHlI2xt.js";import{m as r}from"./modal.service-kUJVZJVy.js";import"./loginModal.service-BUutYCDg.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";class N extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await r(),m=await new e(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("communityContent");await n(a.discussion_community,o)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{N as default};
