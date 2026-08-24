import{dT as r}from"./mftsccs-browser-H83tvbKv.js";import{m as i}from"./mainView.class-C4NLGCWW.js";import{y as s,f as a}from"./index-DzL6aS5b.js";import{N as n}from"./navbar.component-DlDmHpmL.js";import"./codemirror-B6qdlLvx.js";import"./vendor-vUhUC0ZM.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-b6roBAp9.js";class y extends i{course_id;constructor(t){super(t),this.setTitle("Courses"),this.course_id=Number(t.id)}async getHtml(){const t=await s(),e=await new n(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("wico_course_container");await r(a.course_widget,o,{courseId:this.course_id},!1)},0),`
      ${e}
      <div class="container py-5">
          <div id="wico_course_container"></div>
      </div>
    `}}export{y as default};
