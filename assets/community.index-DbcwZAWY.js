import{C as n}from"./mftsccs-browser-ChPbonHC.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{e as a}from"./index-CuHZtOBu.js";import{N as e}from"./navbar.component-DafCDXoM.js";import{m as r}from"./modal.service-C59QVTMZ.js";import"./loginModal.service-D8Xrav4j.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";class N extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await r(),m=await new e(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("communityContent");await n(a.discussion_community,o)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{N as default};
