import{m as a}from"./mainView.class-C4NLGCWW.js";import{y as e,f as r}from"./index-a7TcZOMW.js";import{N as m}from"./navbar.component-CKMfAhAl.js";import{dP as s}from"./mftsccs-browser-8J-t7mQ6.js";import"./codemirror-B6qdlLvx.js";import"./vendor-vUhUC0ZM.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-DeAiSxrW.js";class y extends a{constructor(t){super(t),this.setTitle("VideoTutorial")}async getHtml(){const t=await e(),o=await new m(t).getHtml();return setTimeout(async()=>{const i=document.getElementById("videoTutorial");i&&await s(r.video_tutorial_widget,i,"",!1)},0),`
           ${o}
            <div class="video-tutorial" id="videoTutorial">
              <!-- Video tutorial list -->
            </div>
        `}}export{y as default};
