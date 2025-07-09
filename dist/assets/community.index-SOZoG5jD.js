import{y as n}from"./mftsccs-browser-DU86KKx4.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{e as a}from"./index-C4Kd4duQ.js";import{N as e}from"./navbar.component-DWbtBhLa.js";import{h as r}from"./modal.service-Ct6s_15E.js";import"./loginModal.service-CTV3TUA5.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";class N extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await r(),m=await new e(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("communityContent");await n(a.discussion_community,o)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{N as default};
