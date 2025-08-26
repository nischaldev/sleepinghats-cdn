import{m as a}from"./mainView.class-C4NLGCWW.js";import{q as e,H as r}from"./index-C0k7-DdF.js";import{N as m}from"./navbar.component-Bh7MbKWz.js";import{m as s}from"./mftsccs-browser-Cj5m6_BU.js";import"./codemirror-D1H9tReK.js";import"./vendor-DEYWGvhS.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-DiYjVE88.js";class H extends a{constructor(t){super(t),this.setTitle("VideoTutorial")}async getHtml(){const t=await e(),o=await new m(t).getHtml();return setTimeout(async()=>{const i=document.getElementById("videoTutorial");i&&await s(r.video_tutorial_widget,i)},0),`
           ${o}
            <div class="video-tutorial" id="videoTutorial">
              <!-- Video tutorial list -->
            </div>
        `}}export{H as default};
