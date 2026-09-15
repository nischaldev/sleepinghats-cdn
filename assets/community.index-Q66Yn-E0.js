import{dP as o}from"./mftsccs-browser-8J-t7mQ6.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{y as a,f as e}from"./index-Btm-G0Z6.js";import{N as s}from"./navbar.component-DEZ6HTIB.js";import"./codemirror-B6qdlLvx.js";import"./vendor-vUhUC0ZM.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-DvDzaSc0.js";class g extends i{constructor(t){super(t),this.setTitle("Community")}async getHtml(){const t=await a(),m=await new s(t).getHtml();return setTimeout(async()=>{const n=document.getElementById("communityContent");await o(e.discussion_community,n,"",!1)},0),`
                    ${m}
                    <div class="container py-5">
                        <div id="communityContent"></div>
                    </div>
                `}}export{g as default};
