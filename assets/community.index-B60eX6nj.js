import{C as n}from"./mftsccs-browser-CuLpDqs0.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{e as a}from"./index-BZ3rMnwJ.js";import{N as e}from"./navbar.component-DxiA8thq.js";import{m as r}from"./modal.service-BG2ryG2i.js";import"./loginModal.service-DJdDNh_D.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";class N extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await r(),m=await new e(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("communityContent");await n(a.discussion_community,o)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{N as default};
