import{j as s}from"./mftsccs-browser-D_uubYVV.js";import{m as a}from"./mainView.class-C4NLGCWW.js";import{u as r,I as i}from"./index-2GkZ8P6N.js";import{N as n}from"./navbar.component-DlCFklZP.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-Bp9gXxAD.js";class y extends a{constructor(t){super(t),this.setTitle("Courses")}async getHtml(){const t=await r(),o=await new n(t).getHtml();return setTimeout(async()=>{const e=document.getElementById("wico_courses_container");await s(i.courses_widget,e,"",!1)},0),`
      ${o}
      <div class="container py-5">
          <div id="wico_courses_container"></div>
      </div>
    `}}export{y as default};
