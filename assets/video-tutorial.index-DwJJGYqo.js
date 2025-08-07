import{m as a}from"./mainView.class-C4NLGCWW.js";import{m as e}from"./modal.service-DnSGT_B3.js";import{N as r}from"./navbar.component-CWJ4U2Bc.js";import{e as m}from"./index-B1LvJ9lF.js";import{I as s}from"./mftsccs-browser-B6Jck0kQ.js";import"./codemirror-B3vgQINq.js";import"./vendor-Cs_0E_Xj.js";import"./ckeditor-Cw9bcqxY.js";import"./eslint4b-BLWGvIOa.js";import"./prettier-ClL2wQep.js";import"./loginModal.service-BLcSxIp4.js";class x extends a{constructor(t){super(t),this.setTitle("VideoTutorial")}async getHtml(){const t=await e(),i=await new r(t).getHtml();return setTimeout(async()=>{const o=document.getElementById("videoTutorial");o&&await s(m.video_tutorial_widget,o)},0),`
           ${i}
            <div class="video-tutorial" id="videoTutorial">
              <!-- Video tutorial list -->
            </div>
        `}}export{x as default};
