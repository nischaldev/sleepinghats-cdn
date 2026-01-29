import{j as r}from"./mftsccs-browser-D_uubYVV.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{u as s,I as a}from"./index-B2npdIj-.js";import{N as n}from"./navbar.component-Bq2tBitt.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-CTHFYKh_.js";class N extends i{course_id;constructor(t){super(t),this.setTitle("Courses"),this.course_id=Number(t.id)}async getHtml(){const t=await s(),e=await new n(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("wico_course_container");await r(a.course_widget,o,{courseId:this.course_id},!1)},0),`
      ${e}
      <div class="container py-5">
          <div id="wico_course_container"></div>
      </div>
    `}}export{N as default};
