import{dP as s}from"./mftsccs-browser-8J-t7mQ6.js";import{m as a}from"./mainView.class-C4NLGCWW.js";import{y as r,f as i}from"./index-Dg7XQXlu.js";import{N as n}from"./navbar.component-BhVZupcz.js";import"./codemirror-B6qdlLvx.js";import"./vendor-vUhUC0ZM.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-DZo4YBaQ.js";class b extends a{constructor(t){super(t),this.setTitle("Courses")}async getHtml(){const t=await r(),o=await new n(t).getHtml();return setTimeout(async()=>{const e=document.getElementById("wico_courses_container");await s(i.courses_widget,e,"",!1)},0),`
      ${o}
      <div class="container py-5">
          <div id="wico_courses_container"></div>
      </div>
    `}}export{b as default};
