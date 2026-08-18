import{el as s}from"./mftsccs-browser-fkDlgrMi.js";import{m as a}from"./mainView.class-C4NLGCWW.js";import{u as r,I as i}from"./index-Vufosqdv.js";import{N as n}from"./navbar.component-C2I7DYmt.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-D9xKDpD7.js";class y extends a{constructor(t){super(t),this.setTitle("Courses")}async getHtml(){const t=await r(),e=await new n(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("wico_courses_container");await s(i.courses_widget,o,"",!1)},0),`
      ${e}
      <div class="container py-5">
          <div id="wico_courses_container"></div>
      </div>
    `}}export{y as default};
