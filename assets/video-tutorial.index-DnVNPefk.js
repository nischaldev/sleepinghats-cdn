import{m as a}from"./mainView.class-C4NLGCWW.js";import{m as e}from"./modal.service-kUJVZJVy.js";import{N as r}from"./navbar.component-4IHlI2xt.js";import{e as m}from"./index-Ku_gwIVJ.js";import{I as s}from"./mftsccs-browser-BC2ihuhc.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-BUutYCDg.js";class x extends a{constructor(t){super(t),this.setTitle("VideoTutorial")}async getHtml(){const t=await e(),i=await new r(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("videoTutorial");o&&await s(m.video_tutorial_widget,o)},0),`
           ${i}
            <div class="video-tutorial" id="videoTutorial">
              <!-- Video tutorial list -->
            </div>
        `}}export{x as default};
