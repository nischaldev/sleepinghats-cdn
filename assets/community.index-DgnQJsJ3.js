import{k as o}from"./mftsccs-browser-BCqLwk7v.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{q as a,H as e}from"./index-DNihHO4H.js";import{N as s}from"./navbar.component-D3t09-f9.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-DXk_5cX_.js";class g extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await a(),m=await new s(t).getHtml();return setTimeout(async()=>{const n=document.getElementById("communityContent");await o(e.discussion_community,n)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{g as default};
