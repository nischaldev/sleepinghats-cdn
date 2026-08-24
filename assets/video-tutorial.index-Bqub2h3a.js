import{m as a}from"./mainView.class-C4NLGCWW.js";import{y as e,f as r}from"./index-DzL6aS5b.js";import{N as m}from"./navbar.component-DlDmHpmL.js";import{dT as s}from"./mftsccs-browser-H83tvbKv.js";import"./codemirror-B6qdlLvx.js";import"./vendor-vUhUC0ZM.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-b6roBAp9.js";class y extends a{constructor(t){super(t),this.setTitle("VideoTutorial")}async getHtml(){const t=await e(),o=await new m(t).getHtml();return setTimeout(async()=>{const i=document.getElementById("videoTutorial");i&&await s(r.video_tutorial_widget,i,"",!1)},0),`
           ${o}
            <div class="video-tutorial" id="videoTutorial">
              <!-- Video tutorial list -->
            </div>
        `}}export{y as default};
