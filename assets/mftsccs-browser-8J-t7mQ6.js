var ks={};/*! For license information please see main.bundle.js.LICENSE.txt */var Ua={38:Y=>{class R{constructor(_,L={}){if(this.type="warning",this.text=_,L.node&&L.node.source){let r=L.node.rangeBy(L);this.line=r.start.line,this.column=r.start.column,this.endLine=r.end.line,this.endColumn=r.end.column}for(let r in L)this[r]=L[r]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}}Y.exports=R,R.default=R},71:(Y,R)=>{R.__esModule=!0,R.word=R.tilde=R.tab=R.str=R.space=R.slash=R.singleQuote=R.semicolon=R.plus=R.pipe=R.openSquare=R.openParenthesis=R.newline=R.greaterThan=R.feed=R.equals=R.doubleQuote=R.dollar=R.cr=R.comment=R.comma=R.combinator=R.colon=R.closeSquare=R.closeParenthesis=R.caret=R.bang=R.backslash=R.at=R.asterisk=R.ampersand=void 0,R.ampersand=38,R.asterisk=42,R.at=64,R.comma=44,R.colon=58,R.semicolon=59,R.openParenthesis=40,R.closeParenthesis=41,R.openSquare=91,R.closeSquare=93,R.dollar=36,R.tilde=126,R.caret=94,R.plus=43,R.equals=61,R.pipe=124,R.greaterThan=62,R.space=32,R.singleQuote=39,R.doubleQuote=34,R.slash=47,R.bang=33,R.backslash=92,R.cr=13,R.feed=12,R.newline=10,R.tab=9,R.str=39,R.comment=-1,R.word=-2,R.combinator=-3},127:(Y,R,v)=>{v.d(R,{NK:()=>a,Ve:()=>f,cf:()=>t,vw:()=>C,y8:()=>o});var _=v(8635),L=v(6931),r=v(4244),h=v(5760),k=v(3246),w=v(3076),p=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,u||[])).next())})};function t(A){var u=arguments;return p(this,arguments,void 0,function*(c,i="",d=null,g=L.y0){var y,b,x,N,B,O,G,F;const M=r.Logger.logfunction("SearchLinkMultipleAll",u)||{};try{try{if(r.serviceWorker){M.serviceWorker=!0;const ce=yield(0,r.sendMessage)("SearchLinkMultipleAll",{searchQuery:c,token:i,caller:d,format:g});return r.Logger.logUpdate(M),ce.data}}catch(ce){(0,h.ey)(M,"SearchLinkMultipleAll",ce),(0,r.handleServiceWorkerException)(ce)}let j=[],W=[],$=[],K=[],te=c[0].composition,ae={},z={};d?.isDataLoaded?(ae.compositionIds=(y=d.conceptIds)===null||y===void 0?void 0:y.slice(),ae.internalConnections=(b=d.internalConnections)===null||b===void 0?void 0:b.slice(),ae.linkers=(x=d.linkers)===null||x===void 0?void 0:x.slice(),ae.reverse=(N=d.reverse)===null||N===void 0?void 0:N.slice(),z=ae,j=z.compositionIds,$=z.internalConnections,W=z.linkers,K=z.reverse):(ae=yield(0,_.j)(c,i),d&&(d.conceptIds=(B=ae.compositionIds)===null||B===void 0?void 0:B.slice(),d.internalConnections=(O=ae.internalConnections)===null||O===void 0?void 0:O.slice(),d.linkers=(G=ae.linkers)===null||G===void 0?void 0:G.slice(),d.reverse=(F=ae.reverse)===null||F===void 0?void 0:F.slice(),d.isDataLoaded=!0),z=ae,j=z.compositionIds,$=z.internalConnections,W=z.linkers,K=z.reverse);let ie=yield function(ce,oe,J,ee,ne,H){return p(this,arguments,void 0,function*(re,le,me,Ce,Te,ye,ge=L.y0){try{let _e,Le,ve=yield(0,k.QL)(re);return ge==L.ZJ?(_e=yield(0,k.MT)(le,me),Le=yield C(re,_e,Te,Ce)):ge==L.yv?(_e=yield(0,k.D)(le,me),Le=yield C(re,_e,Te,Ce)):ge==100?(_e=yield(0,k.nr)(le,me),Le=yield o(ve,_e,Te,Ce)):ge==L.SL?Le=yield(0,w._W)(re,le,me,ye.ofCompositions,Ce):(_e=yield(0,k.rv)(le,me),Le=yield o(ve,_e,Te,Ce)),Le}catch{return}})}(W,j,$,K,te,c[0],g);return r.Logger.logUpdate(M),ie}catch(j){throw(0,h.ey)(M,"SearchLinkMultipleAll",j),j}})}function o(A,u,c){return p(this,arguments,void 0,function*(i,d,g,y=[]){new Date().getTime();let b={},x=[];for(let N=0;N<i.length;N++)x.push(i[N].toTheConceptId),x.push(i[N].ofTheConceptId),x.push(i[N].typeId);i.sort(function(N,B){return B.id-N.id});for(let N=0;N<i.length;N++){let B=!1;if(y.includes(i[N].id)&&(B=!0),B==1){if(d[i[N].ofTheConceptId]&&d[i[N].toTheConceptId]){let O=d[i[N].toTheConceptId],G=yield(0,r.GetTheConcept)(i[N].typeId),F=O?.data,M=Object.keys(F)[0];try{let j=G.characterValue+"_reverse";typeof F=="string"&&(F={}),Array.isArray(F[M][j])||(typeof F[M]=="string"&&(F[M]={}),F[M][j]=[]),F[M][j].push(d[i[N].ofTheConceptId])}catch{}}}else if(d[i[N].ofTheConceptId]&&d[i[N].toTheConceptId]){let O=d[i[N].ofTheConceptId],G=yield(0,r.GetTheConcept)(i[N].typeId),F=O?.data,M=Object.keys(F)[0];try{typeof F=="string"&&(F={}),Array.isArray(F[M][G.characterValue])||(typeof F[M]=="string"&&(F[M]={}),F[M][G.characterValue]=[]),F[M][G.characterValue].push(d[i[N].toTheConceptId])}catch{}}}return b=d[g],b})}function a(A,u,c){return p(this,arguments,void 0,function*(i,d,g,y=[]){let b=[],x=[];for(let N=0;N<i.length;N++)x.push(i[N].toTheConceptId),x.push(i[N].ofTheConceptId),x.push(i[N].typeId);i.sort(function(N,B){return B.id-N.id});for(let N=0;N<i.length;N++){let B=!1;if(y.includes(i[N].id)&&(B=!0),B==1){if(d[i[N].ofTheConceptId]&&d[i[N].toTheConceptId]){let O=d[i[N].toTheConceptId],G=yield(0,r.GetTheConcept)(i[N].typeId),F=Object.keys(O)[0];try{let M=G.characterValue+"_reverse";typeof O=="string"&&(O={}),Array.isArray(O[F][M])||(typeof O[F]=="string"&&(O[F]={}),O[F][M]=[]),O[F][M].push(d[i[N].ofTheConceptId])}catch{}}}else if(d[i[N].ofTheConceptId]&&d[i[N].toTheConceptId]){let O=d[i[N].ofTheConceptId],G=yield(0,r.GetTheConcept)(i[N].typeId),F=Object.keys(O)[0];try{typeof O=="string"&&(O={}),Array.isArray(O[F][G.characterValue])||(typeof O[F]=="string"&&(O[F]={}),O[F][G.characterValue]=[]),O[F][G.characterValue].push(d[i[N].toTheConceptId])}catch{}}}for(let N=0;N<g.length;N++){let B=d[g[N]];B&&b.push(B)}return b})}function f(A,u,c,i){return p(this,arguments,void 0,function*(d,g,y,b,x=[]){new Date().getTime();let N=[],B=[];for(let O=0;O<d.length;O++)B.push(d[O].toTheConceptId),B.push(d[O].ofTheConceptId),B.push(d[O].typeId);d.sort(function(O,G){return G.id-O.id});for(let O=0;O<d.length;O++){let G=!1;if(x.includes(d[O].id)&&(G=!0),G==1){if(g[d[O].ofTheConceptId]&&g[d[O].toTheConceptId]){let F=g[d[O].toTheConceptId],M=yield(0,r.GetTheConcept)(d[O].typeId),j=F?.data,W=Object.keys(j)[0];try{let $=M.characterValue+"_reverse";typeof j=="string"&&(j={}),Array.isArray(j[W][$])||(typeof j[W]=="string"&&(j[W]={}),j[W][$]=[]),j[W][$].push(g[d[O].ofTheConceptId])}catch{}}}else if(g[d[O].ofTheConceptId]&&g[d[O].toTheConceptId]){let F=g[d[O].ofTheConceptId],M=yield(0,r.GetTheConcept)(d[O].typeId),j=F?.data,W=Object.keys(j)[0];try{typeof j=="string"&&(j={}),Array.isArray(j[W][M.characterValue])||(typeof j[W]=="string"&&(j[W]={}),j[W][M.characterValue]=[]),j[W][M.characterValue].push(g[d[O].toTheConceptId])}catch{}}}for(let O=0;O<b.length;O++){let G=g[b[O]];G&&N.push(G)}return N})}function C(A,u,c){return p(this,arguments,void 0,function*(i,d,g,y=[]){let b={},x=yield(0,r.GetConnectionBulk)(i),N=[];for(let B=0;B<x.length;B++)N.push(x[B].toTheConceptId),N.push(x[B].ofTheConceptId),N.push(x[B].typeId);yield(0,r.GetConceptBulk)(N),x.sort(function(B,O){return O.id-B.id});for(let B=0;B<x.length;B++){let O=!1;if(y.includes(x[B].id)&&(O=!0),O==1){if(d[x[B].ofTheConceptId]&&d[x[B].toTheConceptId]){let G=d[x[B].toTheConceptId],F=yield(0,r.GetTheConcept)(x[B].typeId),M=G,j=Object.keys(M)[0];try{let W=F.characterValue+"_reverse";typeof M=="string"&&(M={}),Array.isArray(M[j][W])||(typeof M[j]=="string"&&(M[j]={}),M[j][W]=[]),M[j][W].push(d[x[B].ofTheConceptId])}catch{}}}else if(d[x[B].ofTheConceptId]&&d[x[B].toTheConceptId]){let G=d[x[B].ofTheConceptId],F=yield(0,r.GetTheConcept)(x[B].typeId),M=G,j=Object.keys(M)[0];try{typeof M=="string"&&(M={}),Array.isArray(M[j][F.characterValue])||(typeof M[j]=="string"&&(M[j]={}),M[j][F.characterValue]=[]),M[j][F.characterValue].push(d[x[B].toTheConceptId])}catch{}}}return b=d[g],b})}},145:(Y,R,v)=>{let _,L,r=v(7793);class h extends r{constructor(w){super({type:"document",...w}),this.nodes||(this.nodes=[])}toResult(w={}){return new _(new L,this,w).stringify()}}h.registerLazyResult=k=>{_=k},h.registerProcessor=k=>{L=k},Y.exports=h,h.default=h},197:()=>{},198:(Y,R,v)=>{v.d(R,{R:()=>h});var _=v(7258),L=v(6580),r=function(k,w,p,t){return new(p||(p=Promise))(function(o,a){function f(u){try{A(t.next(u))}catch(c){a(c)}}function C(u){try{A(t.throw(u))}catch(c){a(c)}}function A(u){var c;u.done?o(u.value):(c=u.value,c instanceof p?c:new p(function(i){i(c)})).then(f,C)}A((t=t.apply(k,[])).next())})};class h{static AddConceptId(w){this.localId=w.value,(0,_.kH)("localid",w)}static getConceptId(){return r(this,void 0,void 0,function*(){try{if(this.localId){if(this.ReservedLocalId.length<5){yield(0,L.EO)().then(()=>{let p=this.localId;for(let t=1;t<10;t++){let o=this.localId-t;this.ReservedLocalId.push(o),p=o}this.AddConceptId({id:0,value:p})}).catch(p=>-Math.floor(1e8*Math.random()));let w=this.ReservedLocalId[0];return this.ReservedLocalId.shift(),w}{let w=this.ReservedLocalId[0];return this.ReservedLocalId.shift(),w}}return yield(0,L.EO)().then(()=>{let w=this.localId;for(let p=1;p<10;p++){let t=this.localId-p;this.ReservedLocalId.push(t),w=t}this.AddConceptId({id:0,value:w})}),this.getConceptId()}catch{return-Math.floor(1e8*Math.random())}})}static AddConnectionId(w){this.localConnectionId=w.value}static getConnectionId(){return r(this,void 0,void 0,function*(){try{if(this.localConnectionId){if(this.ReservedConnectionId.length<5){yield(0,L.xd)().then(()=>{let p=this.localConnectionId;for(let t=1;t<10;t++){let o=this.localConnectionId-t;this.ReservedConnectionId.push(o),p=o}}).catch(p=>-Math.floor(1e8*Math.random()));let w=this.ReservedConnectionId[0];return this.ReservedConnectionId.shift(),w}{let w=this.ReservedConnectionId[0];return this.ReservedConnectionId.shift(),w}}return yield(0,L.xd)().then(()=>{let w=this.localConnectionId;for(let p=1;p<10;p++){let t=this.localConnectionId-p;this.ReservedConnectionId.push(t),w=t}this.AddConnectionId({id:1,value:w})}),this.getConnectionId()}catch{return-Math.floor(1e8*Math.random())}})}}h.ReservedLocalId=[],h.ReservedConnectionId=[]},263:(Y,R)=>{R.__esModule=!0,R.default=function(v){return v.sort(function(_,L){return _-L})},Y.exports=R.default},339:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(3631))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.SELECTOR,f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o}(L.default);R.default=k,Y.exports=R.default},370:(Y,R,v)=>{v.d(R,{B:()=>_});class _{static setRandomizer(r){this.BASE_RANDOMIZER=r}static getRandomizer(){return this.BASE_RANDOMIZER}static GetConceptUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/getConcept":this.NODE_CACHE_URL+"/api/getConcept"}static GetConnectionUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get-connection-by-id":this.NODE_CACHE_URL+"/api/get-connection-by-id"}static GetConceptBulkUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get_concept_bulk":this.NODE_CACHE_URL+"/api/get_concept_bulk"}static GetConnectionBulkUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get_connection_bulk":this.NODE_CACHE_URL+"/api/get_connection_bulk"}static GetAllConceptsOfUserUrl(){return this.BASE_URL+"/api/get_all_concepts_of_user"}static GetAllConnectionsOfUserUrl(){return this.BASE_URL+"/api/get_all_connections_of_user"}static GetAllConnectionsOfCompositionUrl(){return this.BASE_URL+"/api/get_all_connections_of_composition"}static GetAllConnectionsOfCompositionBulkUrl(){return this.BASE_URL+"/api/get_all_connections_of_composition_bulk"}static GetConceptByCharacterValueUrl(){return this.BASE_URL+"/api/get_concept_by_character_value"}static GetConceptByCharacterAndTypeUrl(){return this.BASE_URL+"/api/get_concept_by_character_and_type"}static GetConceptByCharacterAndCategoryUrl(){return this.BASE_URL+"/api/get_concept_by_character_and_category"}static GetInstanceConceptByCharacterTypeUrl(){return this.BASE_URL+"/api/get_instance_concept_by_character_type"}static GetConceptByCharacterAndCategoryDirectUrl(){return this.BASE_URL+"/api/get_concept_by_character_and_category_direct"}static GetCharacterByCharacterUrl(){return this.BASE_URL+"/api/get_character_by_character"}static GetAllConceptsByTypeUrl(){return this.BASE_URL+"/api/get_all_concepts_by_type"}static GetAllConnectionsOfConceptUrl(){return this.BASE_URL+"/api/get-link-connections"}static GetAllConnectionsToConceptUrl(){return this.BASE_URL+"/api/get-link-reverse-connections"}static GetAllAiData(){return this.BASE_URL+"/api/get-preloaded-concepts"}static getAppConfig(){return this.NODE_URL+"/api/v1/config"}static PostPrefetchConceptConnections(){return this.NODE_URL+"/api/v1/access-tracker/sync-access-tracker"}static GetSuggestedConcepts(){return this.NODE_URL+"/api/v1/access-tracker/list-concepts-file"}static GetSuggestedConnections(){return this.NODE_URL+"/api/v1/access-tracker/list-connections-file"}static PostLogger(){return this.LOG_SERVER+"/api/logger"}static LogHealth(){return this.LOG_SERVER+"/api/check"}static GetAllPrefetchConnectionsUrl(){return this.BASE_URL+"/api/get_all_connections_of_user?inpage=500"}static GetAllLinkerConnectionOfConceptUrl(){return this.BASE_URL+"/api/get-all-linkers-from-concept"}static GetAllLinkerConnectionToConceptUrl(){return this.BASE_URL+"/api/get-all-linkers-to-concept"}static DeleteConceptUrl(){return this.BASE_URL+"/api/delete_concept"}static DeleteUserUrl(){return this.BASE_URL+"/api/deleteuser"}static RecursiveSearchUrl(){return this.BASE_URL+"/api/recursivesearch-concept-connection"}static SearchLinkMultipleAllApiUrl(){return this.BASE_URL+"/api/Connection/search-link-multiple-all-ccs"}static MakeTheNameInBackendUrl(){return this.BASE_URL+"/api/make-name-from-frontend"}static SearchAllTypeWithLinker(r=!0){return r?this.BASE_URL+"/api/search-all-with-linker-ccs":this.BASE_URL+"/api-search-compositions-internal-clean-ccs"}static LoginUrl(){return this.BASE_URL+"/api/auth/login"}static RefreshTokenUrl(){return this.BASE_URL+"/api/auth/refresh"}static SignupUrl(){return this.BASE_URL+"/api/auth/signup"}static GetCompositionConnectionBetweenTwoConceptsUrl(){return this.BASE_URL+"/api/get-composition-connection-between-two-concepts"}static SearchCompositionsUrl(){return this.BASE_URL+"/api/search-compositions"}static SearchLinkMultipleAll(){return this.BASE_URL+"/api/Connection/search-link-multiple-all"}static CreateSessionId(){return this.BASE_URL+"/api/create-session-id-remote"}static CreateSessionVisitUrl(){return this.BASE_URL+"/api/create-remote-session-visit"}static ViewInternalDataUrl(){return this.BASE_URL+"/api/view-api-internal-data-ccs-id-bulk"}static SearchInternalWithAuthenticatedCcsUrl(){return this.BASE_URL+"/api/search-composition-internal-authenticated-ccs"}static SearchInternalWithCcsUrl(){return this.BASE_URL+"/api-search-compositions-internal-clean-ccs"}static CreateGhostConceptApiUrl(r=!0){return r?_.NODE_URL+"/api/v1/local-concepts":_.NODE_URL+"/api/v1/local-concepts-without-auth"}static CreateGhostConnectionApiUrl(){return _.NODE_URL+"/api/v1/local-connections"}static GetRealConceptById(){return _.NODE_URL+"/api/v1/local-concepts-translate"}static GetReservedIdUrl(){return this.BASE_URL+"/api/get_reserved_ids"}static GetReservedConnectionIdUrl(){return this.BASE_URL+"/api/get_reserved_connection_ids"}static CreateTheTextDataUrl(){return this.BASE_URL+"/api/create_text_data"}static CreateTheCharacterDataUrl(){return this.BASE_URL+"/api/create_character_data"}static CreateTheConceptUrl(){return this.BASE_URL+"/api/create_the_concept"}static CreateTheConnectionUrl(){return this.BASE_URL+"/api/create_the_connection"}static CreateTheConnectionNewUrl(){return this.BASE_URL+"/api/create_the_connection_new"}static MakeTheTypeConceptUrl(){return this.BASE_URL+"/api/make_the_type_concept"}static DeleteTheConnectionUrl(){return this.BASE_URL+"/api/delete_connection"}static DeleteTheConnectionBulkUrl(){return this.BASE_URL+"/api/delete_connection_bulk"}static GetTypeConceptBulk(){return this.BASE_URL+"/api/get_type_concept_by_character_bulk"}static UploadFileLimitUrl(){return this.BASE_URL+"/api/upload/limit"}static FreeschemaQueryUrl(){return this.BASE_URL+"/api/freeschema-query"}static uploadImageUrl(){return this.uploadR2StorageUrl()}static uploadImageUrlWithSmall(){return this.BASE_URL+"/api/Image/UploadImageV2"}static uploadFileUrl(){return this.uploadR2StorageUrl()}static uploadR2StorageUrl(){return this.BASE_URL+"/api/R2Storage/upload"}static r2PresignedUploadUrl(){return this.BASE_URL+"/api/R2Storage/presigned-upload-url"}static sendMail(){return this.BASE_URL+"/api/sendmail"}static sendBulkMail(){return this.BASE_URL+"/api/sendmail/bulk"}static sendPersonalMail(){return this.BASE_URL+"/api/sendmail/personal"}static getWidgetData(){return this.BASE_URL+"/api/get-widget"}static getLatestWidgetData(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get-latest-widget":this.NODE_CACHE_URL+"/api/get-latest-widget"}static getRecentWidgetData(){return this.BASE_URL+"/api/get-recent-widget"}static getConnectionsByTypes(){return this.BASE_URL+"/api/get-connection-by-types"}static GetConnectionsBetweenUrl(){return this.BASE_URL+"/api/get-connection-between"}static CreatePrototypeUrl(){return this.BASE_URL+"/api/create-prototype"}static GetCachedImage(r){return"https://cdn.boomconcole.com/freeschema/"+r}}_.BASE_URL="https://localhost:7053/",_.NODE_CACHE_URL="",_.AI_URL="https://ai.freeschema.com",_.MQTT_URL="192.168.1.249",_.NODE_URL="http://localhost:5001",_.LOG_SERVER="https://logdev.freeschema.com",_.BASE_APPLICATION="",_.DOCUMENTATION_WIDGET=0,_.isNearestCache=!0,_.ACCESS_CONTROL_BASE_URL="http://localhost:5001",_.isPwa=!1,_.FLAGS={logApplication:!1,logPackage:!1,accessTracker:!1,isTest:!1},_.RECAPTCHA_SITE_KEY="",_.RECAPTCHA_ACTION="send_mail",_.BASE_RANDOMIZER=999},388:(Y,R,v)=>{v.d(R,{gt:()=>h,nm:()=>L,vo:()=>_,wS:()=>r}),v(4990),v(6047);function _(k=[],w){var p,t;let o=[],a=(p=w.type)===null||p===void 0?void 0:p.characterValue;if(a?.startsWith("the_")||(a="the_"+a),Array.isArray(k))for(let f=0;f<k.length;f++){let C=(t=k[f].type)===null||t===void 0?void 0:t.characterValue;C?.startsWith("the_")||(C="the_"+C),w.typeId!=k[f].typeId&&a!=C||o.push(k[f])}return o}function L(k=[],w){let p=[],t=w.typeCharacter;if(t?.startsWith("the_")||(t="the_"+t),Array.isArray(k))for(let o=0;o<k.length;o++){let a=k[o].typeCharacter;a?.startsWith("the_")||(a="the_"+a),w.typeId!=k[o].typeId&&t!=a||p.push(k[o])}return p}function r(k=[],w){let p=[];if(Array.isArray(k)){const t=k.find(a=>a.toTheConceptId==w);t&&p.push(t);const o=k.find(a=>a.ofTheConceptId==w);o&&p.push(o)}return p}function h(k=[],w){let p=[];if(Array.isArray(k)){const t=k.find(a=>a.toTheConceptId==w);t&&p.push(t);const o=k.find(a=>a.ofTheConceptId==w);o&&p.push(o)}return p}},396:(Y,R,v)=>{let _=v(7793);class L extends _{constructor(h){super(h),this.type="atrule"}append(...h){return this.proxyOf.nodes||(this.nodes=[]),super.append(...h)}prepend(...h){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...h)}}Y.exports=L,L.default=L,_.registerAtRule(L)},413:(Y,R,v)=>{v.d(R,{O:()=>k});var _=v(830),L=v(4244);class r{constructor(p,t,o,a){this.leftNode=null,this.rightNode=null,this.variants=[],this.height=1,this.key=p,this.value=t,this.leftNode=o,this.rightNode=a,this.currentNode=null}addCurrentNode(p,t){return t==null?t=p:(p.value.typeId!=t.value.typeId&&(t.currentNode=this.addCurrentNode(p,t.currentNode)),t)}addCurrentNodeType(p,t){if(t==null)return t=p;let o=!1;p.value.id==t.value.id&&(o=!0);for(let a=0;a<t.variants.length;a++)t.variants[a].value.id==p.value.id&&(o=!0);return o||t.variants.push(p),t}getMax(p,t){return p>t?p:t}addNode(p,t,o){if(t==null)return(0,L.dispatchIdEvent)(p.value.ofTheConceptId),p;let a=t.leftNode,f=t.rightNode;if(p.key<t.key)t.leftNode=this.addNode(p,a,o);else{if(!(p.key>t.key))return t;t.rightNode=this.addNode(p,f,o)}t.height=1+this.getMax(this.getHeight(t.leftNode),this.getHeight(t.rightNode));let C=this.getBalanceFactor(t);if(C>1&&t.leftNode){if(this.getBalanceFactor(t.leftNode)>=0)return this.rightRotate(t);if(this.getBalanceFactor(t.leftNode)<0)return t.leftNode=this.leftRotate(t.leftNode),this.rightRotate(t)}if(C<-1&&t.rightNode){if(this.getBalanceFactor(t.rightNode)<=0)return this.leftRotate(t);if(this.getBalanceFactor(t.rightNode)>0)return t.rightNode=this.rightRotate(t.rightNode),this.leftRotate(t)}return t}addTypeNode(p,t,o){if(p.value.typeId!=0){if(t==null)return t=p;let a=t.leftNode,f=t.rightNode;if(t.key>p.key)t.leftNode=this.addTypeNode(p,a,o);else{if(!(t.key<p.key))return t.key==p.key&&t.key!=0&&t.addCurrentNodeType(p,t),t;t.rightNode=this.addTypeNode(p,f,o)}t.height=1+this.getMax(this.getHeight(t.leftNode),this.getHeight(t.rightNode));let C=this.getBalanceFactor(t);if(C>1&&t.leftNode){if(p.key<t.leftNode.key)return this.rightRotate(t);if(p.key>t.leftNode.key)return t.leftNode=this.leftRotate(t.leftNode),this.rightRotate(t)}if(C<-1&&t.rightNode){if(p.key>t.rightNode.key)return this.leftRotate(t);if(p.key<t.rightNode.key)return t.rightNode=this.rightRotate(t.rightNode),this.leftRotate(t)}}return t}rightRotate(p){if(p){let t=p.leftNode;if(t){let o=t.rightNode;return p.leftNode=o,t.rightNode=p,p.height=this.getMax(this.getHeight(p.leftNode),this.getHeight(p.rightNode))+1,t.height=this.getMax(this.getHeight(t.leftNode),this.getHeight(t.rightNode))+1,t}throw new Error("Cannot perform right rotation: left node is null.")}return p}leftRotate(p){if(p){let t=p.rightNode;if(t){let o=t.leftNode;return t.leftNode=p,p.rightNode=o,p.height=this.getMax(this.getHeight(p.leftNode),this.getHeight(p.rightNode))+1,t.height=this.getMax(this.getHeight(t.leftNode),this.getHeight(p.rightNode))+1,t}throw new Error("Cannot perform left rotation: right node is null.")}return p}getHeight(p){return p?p.height:0}getBalanceFactor(p){return p==null?0:this.getHeight(p.leftNode)-this.getHeight(p.rightNode)}getFromNode(p,t){try{if(t)return p==t.key?(t.value.count?t.value.count++:t.value.count=1,t):p<t.key?this.getFromNode(p,t.leftNode):p>t.key?this.getFromNode(p,t.rightNode):t}catch{}return t}getCharacterFromNode(p,t){return t&&(p==t.key?t:p<t.key?this.getCharacterFromNode(p,t.leftNode):p>t.key?this.getCharacterFromNode(p,t.rightNode):t)}checkIfIdsInNode(p,t,o,a){if(p){if(t.includes(p.key)){o.push(p.value);let f=t.indexOf(p.key);t.splice(f,1)}p.leftNode&&this.checkIfIdsInNode(p.leftNode,t,o,a),p.rightNode&&this.checkIfIdsInNode(p.rightNode,t,o,a)}}traverse(p){let t=0;return p&&(t+=1,p?.leftNode&&(t+=this.traverse(p.leftNode)),p.rightNode&&(t+=this.traverse(p.rightNode))),t}removeNode(p,t){if(p==null)return p;if(p.key>t)return p.leftNode=this.removeNode(p.leftNode,t),p;if(p.key<t)return p.rightNode=this.removeNode(p.rightNode,t),p;if(new Event(`${p.value.ofTheConceptId}`),(0,L.dispatchIdEvent)(p.value.ofTheConceptId),p.leftNode==null){let o=p.rightNode;return p=null,o}if(p.rightNode==null){let o=p.leftNode;return p=null,o}{let o=this.inOrderSuccessor(p.rightNode);return p.value=o.value,p.key=o.key,p.variants=o.variants,p.currentNode=o.currentNode,p.rightNode=this.removeNode(p.rightNode,o.key),p}}removeNodeWithVariants(p,t,o){if(p==null)return p;if(p.key>t)return p.leftNode=this.removeNodeWithVariants(p.leftNode,t,o),p;if(p.key<t)return p.rightNode=this.removeNodeWithVariants(p.rightNode,t,o),p;if(p.variants.length>0){if(p.value.id==o){let a=p.variants[0];if(a)return p.value=a.value,p.key=a.key,p.currentNode=a.currentNode,p.variants.splice(0,1),p}else for(let a=0;a<p.variants.length;a++)if(o==p.variants[a].value.id)return p.variants.splice(a,1),p}if(p.leftNode==null){let a=p.rightNode;return p=null,a}if(p.rightNode==null){let a=p.leftNode;return p=null,a}{let a=this.inOrderSuccessor(p.rightNode);return p.value=a.value,p.key=a.key,p.variants=a.variants,p.currentNode=a.currentNode,p.rightNode=this.removeNodeWithVariants(p.rightNode,a.key,o),p}}inOrderSuccessor(p){for(;p.leftNode!=null;)p=p.leftNode;return p}}var h=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,[])).next())})};class k{static addNodeToTree(p){try{this.connectionMap.set(p.key,p.value),this.connectionroot===null&&(this.connectionroot=p)}catch(t){throw t}}static addConnectionToTree(p){this.connectionMap.has(p.id)||(0,L.dispatchIdEvent)(p.ofTheConceptId),this.connectionMap.set(p.id,p),this.connectionroot===null&&(this.connectionroot=new r(p.id,p,null,null))}static traverse(){return this.connectionMap.size}static waitForDataToLoad(){return h(this,void 0,void 0,function*(){return new Promise((p,t)=>{this.checkFlag(p),setTimeout(()=>{t("not")},25e3)})})}static checkFlag(p){if(_.B.isConnectionLoaded)return p("done");setTimeout(k.checkFlag,1e3,p)}static removeNodeFromTree(p){return h(this,void 0,void 0,function*(){const t=this.connectionMap.get(p);t&&((0,L.dispatchIdEvent)(t.ofTheConceptId),this.connectionMap.delete(p),this.connectionMap.size===0&&(this.connectionroot=null))})}static getNodeFromTree(p){return h(this,void 0,void 0,function*(){try{const t=this.connectionMap.get(p);return t?(t.count?t.count++:t.count=1,{key:p,value:t}):null}catch{return}})}static getConnectionListFromIds(p,t,o){return h(this,void 0,void 0,function*(){for(let a=p.length-1;a>=0;a--){const f=this.connectionMap.get(p[a]);f&&(t.push(f),p.splice(a,1))}})}}k.connectionroot=null,k.connectionMap=new Map},425:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(4646))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.COMMENT,f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o}(L.default);R.default=k,Y.exports=R.default},507:(Y,R,v)=>{v.d(R,{_:()=>A,A:()=>C});var _=v(370),L=v(1833),r=v(5760),h=v(1317),k=v(4244),w=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,[])).next())})},p=v(6812);class t{}t.isUpdated=!1,t.isOnlineSync=!1;var o=v(6948),a=v(7258),f=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,c||[])).next())})};function C(){return f(this,arguments,void 0,function*(u=!0){try{if(yield(0,o.qI)("concepts"),yield(0,a.qI)("concepts"),u){if((yield(0,o.b8)()).isOnlineSync)return!0;yield function(){return w(this,void 0,void 0,function*(){const c=k.Logger.logfunction("GetAiData");try{new Date().getTime();var i=yield(0,h.ab)("application/x-www-form-urlencoded");const g=yield(0,h.Hh)(_.B.GetAllAiData(),{method:"GET",headers:i});g.ok||(0,r.ry)(g);const y=yield g.json();for(var d=0;d<y.length;d++)L.I.AddConcept(y[d]);A(),new Date().getTime(),k.Logger.logUpdate(c)}catch(g){(0,r.Mb)(g,_.B.GetAllAiData())}})}()}return!0}catch{return!0}})}function A(){return f(this,void 0,void 0,function*(){t.isOnlineSync=!0;var u=new p.B(t.isOnlineSync);(0,o.El)(u)})}},518:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(3631))&&_.__esModule?_:{default:_},r=v(1581);function h(p,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function k(p,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},k(p,t)}var w=function(p){var t,o;function a(u){var c;return(c=p.call(this,u)||this).type=r.ROOT,c}o=p,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,k(t,o);var f,C,A=a.prototype;return A.toString=function(){var u=this.reduce(function(c,i){return c.push(String(i)),c},[]).join(",");return this.trailingComma?u+",":u},A.error=function(u,c){return this._error?this._error(u,c):new Error(u)},f=a,(C=[{key:"errorGenerator",set:function(u){this._error=u}}])&&h(f.prototype,C),Object.defineProperty(f,"prototype",{writable:!1}),a}(L.default);R.default=w,Y.exports=R.default},592:(Y,R,v)=>{v.d(R,{h:()=>k});var _=v(4244),L=v(9097),r=v(5760),h=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,p||[])).next())})};function k(w,p,t){var o=arguments;return h(this,arguments,void 0,function*(a,f,C,A=!1,u={concepts:[],connections:[]}){var c,i,d,g,y,b;const x=L.V.logfunction("CreateConnectionBetweenTwoConceptsLocal",o)||{};let N=performance.now();try{if(_.serviceWorker){x.serviceWorker=!0;try{const M=yield(0,_.sendMessage)("CreateConnectionBetweenTwoConceptsLocal",{ofTheConcept:a,toTheConcept:f,linker:C,both:A,actions:u});return!((i=(c=M?.actions)===null||c===void 0?void 0:c.concepts)===null||i===void 0)&&i.length&&(u.concepts=JSON.parse(JSON.stringify(M.actions.concepts))),!((g=(d=M?.actions)===null||d===void 0?void 0:d.connections)===null||g===void 0)&&g.length&&(u.connections=JSON.parse(JSON.stringify(M.actions.connections))),L.V.logUpdate(x),M.data}catch(M){(0,r.ey)(x,"CreateConnectionBetweenTwoConceptsLocal",M),(0,_.handleServiceWorkerException)(M)}}if(a.userId,A){let M=((y=f.type)===null||y===void 0?void 0:y.characterValue)+"_s_"+(C+"_by");var B=yield(0,_.MakeTheInstanceConceptLocal)("connection",M,!1,999,999,999,0,u);yield(0,_.CreateTheConnectionLocal)(f.id,a.id,B.id,1e3,void 0,void 0,u)}let G=((b=a.type)===null||b===void 0?void 0:b.characterValue)+"_s_"+(C+"_s");var O=yield(0,_.MakeTheInstanceConceptLocal)("connection",G,!1,999,999,999,void 0,u);let F=yield(0,_.CreateTheConnectionLocal)(a.id,f.id,O.id,1e3,void 0,void 0,u);return L.V.logUpdate(x),F}catch(G){throw L.V.logError(N,a.userId,"create",void 0,void 0,500,G,"CreateConnectionBetweenTwoConceptsLocal",[a,f,C,A],void 0,void 0),(0,r.ey)(x,"CreateConnectionBetweenTwoConceptsLocal",G),G}})}},680:(Y,R,v)=>{R.__esModule=!0;var _=v(1581);Object.keys(_).forEach(function(h){h!=="default"&&h!=="__esModule"&&(h in R&&R[h]===_[h]||(R[h]=_[h]))});var L=v(4451);Object.keys(L).forEach(function(h){h!=="default"&&h!=="__esModule"&&(h in R&&R[h]===L[h]||(R[h]=L[h]))});var r=v(8500);Object.keys(r).forEach(function(h){h!=="default"&&h!=="__esModule"&&(h in R&&R[h]===r[h]||(R[h]=r[h]))})},830:(Y,R,v)=>{v.d(R,{B:()=>_});class _{}_.isTypeLoaded=!1,_.isCharacterLoaded=!1,_.isDataLoaded=!1,_.isLocalDataLoaded=!1,_.isLocalCharacterLoaded=!1,_.isLocalTypeLoaded=!1,_.isConnectionLoaded=!1,_.isConnectionTypeLoaded=!1,_.isLocalConnectionLoaded=!1},838:(Y,R,v)=>{v.d(R,{l:()=>k});var _=v(5760),L=v(1317),r=v(4244),h=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,[])).next())})};function k(w){var p=arguments;return h(this,void 0,void 0,function*(){r.Logger.logfunction("GetAllLinkerConnectionsFromTheConcept",p);var t=[];try{new Date().getTime();var o=yield(0,L.Xr)("application/x-www-form-urlencoded");const C=yield(0,L.Hh)(r.BaseUrl.GetAllLinkerConnectionOfConceptUrl()+`?conceptId=${w}`,{method:"GET",headers:o});if(C.ok){const A=yield C.json();for(var a=0;a<A.length;a++){var f=A[a];t.push(f)}}else(0,_.ry)(C)}catch(C){(0,_.Mb)(C,r.BaseUrl.GetAllLinkerConnectionOfConceptUrl())}return t})}},903:(Y,R,v)=>{v.d(R,{W:()=>w});var _=v(1804),L=v(8278),r=v(830),h=v(4244),k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,[])).next())})};class w{static normalizeId(t){return Number(t)}static addNodeToTree(t){this.conceptMap.set(this.normalizeId(t.key),t.value),this.root===null&&(this.root=t)}static waitForDataToLoad(){return k(this,void 0,void 0,function*(){return new Promise((t,o)=>{this.checkFlag(t),setTimeout(()=>{o("not")},25e3)})})}static checkFlag(t){if(r.B.isDataLoaded)return t("done");setTimeout(w.checkFlag,1e3,t)}static addConceptToTree(t){let o=new L.b(t.characterValue,t,null,null);_.f.addNodeToTree(o);const a=this.normalizeId(t.id);this.conceptMap.set(a,t),this.root===null&&(this.root=new L.b(a,t,null,null))}static getNodeFromTree(t){return k(this,void 0,void 0,function*(){const o=this.normalizeId(t),a=this.conceptMap.get(o);return a?{key:o,value:a}:null})}static removeNodeFromTree(t){return k(this,void 0,void 0,function*(){const o=this.normalizeId(t);this.conceptMap.has(o)&&((0,h.dispatchIdEvent)(o),this.conceptMap.delete(o),this.conceptMap.size===0&&(this.root=null))})}static getConceptListFromIds(t,o,a){return k(this,void 0,void 0,function*(){for(let f=t.length-1;f>=0;f--){const C=this.conceptMap.get(this.normalizeId(t[f]));C&&(o.push(C),t.splice(f,1))}})}static countNumberOfNodes(){return this.conceptMap.size}}w.root=null,w.conceptMap=new Map},939:(Y,R,v)=>{v.d(R,{y:()=>_});class _{constructor(){this.conceptId=0,this.connectionTypeId=0,this.connectionType="",this.count=0}}},957:(Y,R,v)=>{v.d(R,{A:()=>o});var _=v(4244),L=v(6948),r=v(370),h=v(1833),k=v(830),w=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})};const p=500;function t(){return new Promise(a=>setTimeout(a,0))}function o(){return w(this,void 0,void 0,function*(){try{let a=[];if(r.B.isPwa&&(a=yield(0,L.D3)("concept")),Array.isArray(a))for(let f=0;f<a.length;f++)h.I.AddConceptToMemory(a[f]),f>0&&f%p===0&&(yield t());k.B.isDataLoaded=!0,k.B.isCharacterLoaded=!0,k.B.isTypeLoaded=!0}catch(a){throw yield(0,_.DelayFunctionExecution)(2e3,o()),{message:"Cannot create Binary Tree Concept",ok:!1,status:400,data:a}}})}},993:(Y,R,v)=>{v.d(R,{Ay:()=>p,N:()=>t});var _=v(6700),L=v(3008),r=v(9775),h=v(7015),k=v(4244),w=function(o,a,f,C){return new(f||(f=Promise))(function(A,u){function c(g){try{d(C.next(g))}catch(y){u(y)}}function i(g){try{d(C.throw(g))}catch(y){u(y)}}function d(g){var y;g.done?A(g.value):(y=g.value,y instanceof f?y:new f(function(b){b(y)})).then(c,i)}d((C=C.apply(o,[])).next())})};function p(o,a,f,C,A,u,c){return w(this,void 0,void 0,function*(){let i=yield r.B.getId(),d=new Date,g=new Date,y=new L.j(i,a,C,f,A,o,u,!0,d,g,c);return y.isTemp=!1,h.Y.AddConcept(y),y})}function t(o,a,f,C,A,u,c){return w(this,void 0,void 0,function*(){let i=yield r.B.getId(),d=new Date,g=new Date,y=new L.j(i,a,C,f,A,o,u,!1,d,g,c);return k.ConceptsData.AddConcept(y),(0,_.Y)([y]),y})}},1106:(Y,R,v)=>{let{nanoid:_}=v(5042),{isAbsolute:L,resolve:r}=v(197),{SourceMapConsumer:h,SourceMapGenerator:k}=v(1866),{fileURLToPath:w,pathToFileURL:p}=v(2739),t=v(3614),o=v(3878),a=v(9746),f=Symbol("lineToIndexCache"),C=!!(h&&k),A=!!(r&&L);function u(i){if(i[f])return i[f];let d=i.css.split(`
`),g=new Array(d.length),y=0;for(let b=0,x=d.length;b<x;b++)g[b]=y,y+=d[b].length+1;return i[f]=g,g}class c{get from(){return this.file||this.id}constructor(d,g={}){if(d==null||typeof d=="object"&&!d.toString)throw new Error(`PostCSS received ${d} instead of CSS string`);if(this.css=d.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,this.document=this.css,g.document&&(this.document=g.document.toString()),g.from&&(!A||/^\w+:\/\//.test(g.from)||L(g.from)?this.file=g.from:this.file=r(g.from)),A&&C){let y=new o(this.css,g);if(y.text){this.map=y;let b=y.consumer().file;!this.file&&b&&(this.file=this.mapResolve(b))}}this.file||(this.id="<input css "+_(6)+">"),this.map&&(this.map.file=this.from)}error(d,g,y,b={}){let x,N,B,O,G;if(g&&typeof g=="object"){let M=g,j=y;if(typeof M.offset=="number"){O=M.offset;let W=this.fromOffset(O);g=W.line,y=W.col}else g=M.line,y=M.column,O=this.fromLineAndColumn(g,y);if(typeof j.offset=="number"){B=j.offset;let W=this.fromOffset(B);N=W.line,x=W.col}else N=j.line,x=j.column,B=this.fromLineAndColumn(j.line,j.column)}else if(y)O=this.fromLineAndColumn(g,y);else{O=g;let M=this.fromOffset(O);g=M.line,y=M.col}let F=this.origin(g,y,N,x);return G=F?new t(d,F.endLine===void 0?F.line:{column:F.column,line:F.line},F.endLine===void 0?F.column:{column:F.endColumn,line:F.endLine},F.source,F.file,b.plugin):new t(d,N===void 0?g:{column:y,line:g},N===void 0?y:{column:x,line:N},this.css,this.file,b.plugin),G.input={column:y,endColumn:x,endLine:N,endOffset:B,line:g,offset:O,source:this.css},this.file&&(p&&(G.input.url=p(this.file).toString()),G.input.file=this.file),G}fromLineAndColumn(d,g){return u(this)[d-1]+g-1}fromOffset(d){let g=u(this),y=0;if(d>=g[g.length-1])y=g.length-1;else{let b,x=g.length-2;for(;y<x;)if(b=y+(x-y>>1),d<g[b])x=b-1;else{if(!(d>=g[b+1])){y=b;break}y=b+1}}return{col:d-g[y]+1,line:y+1}}mapResolve(d){return/^\w+:\/\//.test(d)?d:r(this.map.consumer().sourceRoot||this.map.root||".",d)}origin(d,g,y,b){if(!this.map)return!1;let x,N,B=this.map.consumer(),O=B.originalPositionFor({column:g,line:d});if(!O.source)return!1;typeof y=="number"&&(x=B.originalPositionFor({column:b,line:y})),N=L(O.source)?p(O.source):new URL(O.source,this.map.consumer().sourceRoot||p(this.map.mapFile));let G={column:O.column,endColumn:x&&x.column,endLine:x&&x.line,line:O.line,url:N.toString()};if(N.protocol==="file:"){if(!w)throw new Error("file: protocol is not available in this PostCSS build");G.file=w(N)}let F=B.sourceContentFor(O.source);return F&&(G.source=F),G}toJSON(){let d={};for(let g of["hasBOM","css","file","id"])this[g]!=null&&(d[g]=this[g]);return this.map&&(d.map={...this.map},d.map.consumerCache&&(d.map.consumerCache=void 0)),d}}Y.exports=c,c.default=c,a&&a.registerInput&&a.registerInput(c)},1317:(Y,R,v)=>{v.d(R,{BZ:()=>f,Hh:()=>C,Xr:()=>o,ab:()=>a,uX:()=>A});var _=v(370),L=v(8444),r=v(5330),h=function(d,g,y,b){return new(y||(y=Promise))(function(x,N){function B(F){try{G(b.next(F))}catch(M){N(M)}}function O(F){try{G(b.throw(F))}catch(M){N(M)}}function G(F){var M;F.done?x(F.value):(M=F.value,M instanceof y?M:new y(function(j){j(M)})).then(B,O)}G((b=b.apply(d,g||[])).next())})};const k=60,w=new Set([401]),p=new Set([400,401,406]);let t=null;function o(){return h(this,arguments,void 0,function*(d="application/json",g="application/json"){return u(d,g,yield A())})}function a(){return h(this,arguments,void 0,function*(d="application/json",g="",y="application/json"){return u(d,y,yield A(g))})}function f(){return h(this,void 0,void 0,function*(){var d,g;const y=yield A(),b=(g=(d=L.b.sessionId)===null||d===void 0?void 0:d.toString())!==null&&g!==void 0?g:"",x=new Headers;return y&&x.append("Authorization","Bearer "+y),x.append("X-Session-Id",b),x})}function C(d){return h(this,arguments,void 0,function*(g,y={}){const b=yield fetch(g,y);if(!w.has(b.status)||!L.b.refreshToken)return b;try{const x=yield c(L.b.BearerAccessToken),N=new Headers(y.headers);return x&&N.set("Authorization","Bearer "+x),yield fetch(g,Object.assign(Object.assign({},y),{headers:N}))}catch{return b}})}function A(){return h(this,arguments,void 0,function*(d=""){yield L.b.hydrateProfile();const g=d||L.b.BearerAccessToken;return!g&&L.b.refreshToken||g&&function(y){const b=function(N){try{const B=N.split(".")[1];if(!B)return null;const O=JSON.parse(function(G){const F=G.replace(/-/g,"+").replace(/_/g,"/"),M=F.padEnd(F.length+(4-F.length%4)%4,"=");return atob(M)}(B));return typeof O.exp!="number"?null:1e3*O.exp}catch{return null}}(y);if(!b)return!1;const x=b-1e3*k;return Date.now()>=x}(g)&&L.b.refreshToken?c(g):g})}function u(d,g,y=""){var b,x;const N={Accept:g,"X-Session-id":(x=(b=L.b.sessionId)===null||b===void 0?void 0:b.toString())!==null&&x!==void 0?x:""};return d&&(N["Content-Type"]=d),y&&(N.Authorization="Bearer "+y),N}function c(){return h(this,arguments,void 0,function*(d=""){return t||(t=function(){return h(this,arguments,void 0,function*(g=""){var y,b,x,N,B;const O=L.b.refreshToken;if(!O)return L.b.BearerAccessToken;const G=yield fetch(_.B.RefreshTokenUrl(),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({accessToken:g||L.b.BearerAccessToken,refreshToken:O})}),F=yield G.json().catch(()=>({}));if(!G.ok){p.has(G.status)&&i();const $=new Error(`Refresh token request failed with status ${G.status}`);throw $.status=G.status,$}const M=(y=F?.data)!==null&&y!==void 0?y:F,j=(x=(b=M?.accessToken)!==null&&b!==void 0?b:M?.token)!==null&&x!==void 0?x:"",W=(B=(N=M?.refreshToken)!==null&&N!==void 0?N:M?.refreshtoken)!==null&&B!==void 0?B:O;if(!j){i();const $=new Error("Refresh token response did not include an access token");throw $.status=401,$}return yield L.b.updateTokens(j,W),j})}(d).finally(()=>{t=null})),t})}function i(){L.b.logout();try{r.x.postMessage({type:"AUTH_LOGOUT",payload:{reason:"refresh-failed"}})}catch{}}},1402:(Y,R,v)=>{v.d(R,{J:()=>h});var _=v(4244),L=v(1317),r=function(k,w,p,t){return new(p||(p=Promise))(function(o,a){function f(u){try{A(t.next(u))}catch(c){a(c)}}function C(u){try{A(t.throw(u))}catch(c){a(c)}}function A(u){var c;u.done?o(u.value):(c=u.value,c instanceof p?c:new p(function(i){i(c)})).then(f,C)}A((t=t.apply(k,[])).next())})};class h{static incrementConcept(w){try{w&&(this.conceptsData[w]=(this.conceptsData[w]||0)+1)}catch{}}static incrementConnection(w){try{w&&(this.connectionsData[w]=(this.connectionsData[w]||0)+1)}catch{}}static getTopConcepts(w){return Object.entries(this.conceptsData).map(([p,t])=>[parseInt(p),t]).sort((p,t)=>t[1]-p[1]).slice(0,w)}static getTopConnections(w){return Object.entries(this.connectionsData).map(([p,t])=>[parseInt(p),t]).sort((p,t)=>t[1]-p[1]).slice(0,w)}static saveDataToLocalStorage(){const w={concepts:this.conceptsData,connections:this.connectionsData};localStorage?.setItem(this.accessData,JSON.stringify(w))}static loadDataFromLocalStorage(){const w=localStorage==null?void 0:localStorage.getItem(this.accessData);if(w){const p=JSON.parse(w);this.conceptsData=p.concepts||{},this.connectionsData=p.connections||{}}}static sendToServer(){return r(this,void 0,void 0,function*(){try{yield this.syncToServer()}catch{}})}static syncToServer(){return r(this,void 0,void 0,function*(){try{if(!Object.keys(this.conceptsData).length&&!Object.keys(this.connectionsData).length)return;const w=yield(0,L.Xr)();if(!w.Authorization)return;const p=this.conceptsData&&Object.keys(this.conceptsData).length>0?this.conceptsData:{},t=this.connectionsData&&Object.keys(this.connectionsData).length>0?this.connectionsData:{},o=yield(0,L.Hh)(_.BaseUrl.PostPrefetchConceptConnections(),{method:"POST",headers:w,body:JSON.stringify({concepts:p,connections:t})});if(!o.ok)throw new Error("Failed to sync data to the server.");yield o.json(),this.conceptsData={},this.connectionsData={},this.setNextSyncTime()}catch{}})}static setNextSyncTime(){this.nextSyncTime=Date.now()+this.SYNC_INTERVAL_MS}static startAutoSync(){this.autoSyncInterval||(this.setNextSyncTime(),this.autoSyncInterval=setInterval(()=>{const w=Date.now();this.nextSyncTime&&w>=this.nextSyncTime&&this.syncNow().catch(console.error)},6e4))}static stopAutoSync(){this.autoSyncInterval!==null&&(clearInterval(this.autoSyncInterval),this.autoSyncInterval=null)}static syncNow(){return r(this,void 0,void 0,function*(){try{this.activateStatus&&(yield this.syncToServer())}catch{}})}static GetSuggestedConcepts(w){return r(this,void 0,void 0,function*(){try{const p=yield(0,L.Xr)(),t=new URL(_.BaseUrl.GetSuggestedConcepts());w!==void 0&&t.searchParams.append("top",w.toString());const o=yield(0,L.Hh)(t.toString(),{method:"GET",headers:p});if(!o.ok){const f=yield o.text();throw new Error(`Failed to load concepts: ${o.status} ${o.statusText}. Details: ${f}`)}const a=(yield o.json())||[];return yield this.addConceptToBinaryTree(a.data),a}catch(p){throw p instanceof Error?new Error("Unable to fetch suggested concepts. Please try again later."):new Error("An unexpected error occurred while fetching suggested concepts.")}})}static GetSuggestedConnections(w){return r(this,void 0,void 0,function*(){try{const p=yield(0,L.Xr)(),t=new URL(_.BaseUrl.GetSuggestedConnections());w!==void 0&&t.searchParams.append("top",w.toString());const o=yield(0,L.Hh)(t.toString(),{method:"GET",headers:p});if(!o.ok){const f=yield o.text();throw new Error(`Failed to load connections: ${o.status} ${o.statusText}. Details: ${f}`)}const a=(yield o.json())||[];return yield this.addConnectionToBinaryTree(a.data),a}catch(p){throw p instanceof Error?new Error("Unable to fetch suggested connections. Please try again later."):new Error("An unexpected error occurred while fetching suggested Connections.")}})}static addConceptToBinaryTree(w){return r(this,void 0,void 0,function*(){try{w.forEach(p=>{_.ConceptsData.AddConcept(p)})}catch{}})}static addConnectionToBinaryTree(w){return r(this,void 0,void 0,function*(){try{w.forEach(p=>{_.ConnectionData.AddConnection(p)})}catch{}})}}h.conceptsData={},h.connectionsData={},h.SYNC_INTERVAL_MS=12e4,h.nextSyncTime=Date.now(),h.activateStatus=!1,h.accessData="Access Data",h.autoSyncInterval=null},1534:(Y,R,v)=>{let _=v(7793),L=v(1752);class r extends _{get selectors(){return L.comma(this.selector)}set selectors(k){let w=this.selector?this.selector.match(/,\s*/):null,p=w?w[0]:","+this.raw("between","beforeOpen");this.selector=k.join(p)}constructor(k){super(k),this.type="rule",this.nodes||(this.nodes=[])}}Y.exports=r,r.default=r,_.registerRule(r)},1549:(Y,R,v)=>{v.d(R,{G:()=>h});var _=v(830),L=v(9196),r=function(k,w,p,t){return new(p||(p=Promise))(function(o,a){function f(u){try{A(t.next(u))}catch(c){a(c)}}function C(u){try{A(t.throw(u))}catch(c){a(c)}}function A(u){var c;u.done?o(u.value):(c=u.value,c instanceof p?c:new p(function(i){i(c)})).then(f,C)}A((t=t.apply(k,[])).next())})};class h{static addNodeToTree(w){if(this.root==null)return this.root=w,this.root;this.root=this.root.addNode(w,this.root,this.root.height)}static addConceptToTree(w){var p=new L.x(w.ghostId,w,null,null);this.addNodeToTree(p)}static waitForDataToLoad(){return r(this,void 0,void 0,function*(){return new Promise((w,p)=>{this.checkFlag(w),setTimeout(()=>{p("not")},25e3)})})}static checkFlag(w){if(_.B.isLocalDataLoaded)return w("done");setTimeout(h.checkFlag,1e3,w)}static getNodeFromTree(w){return r(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(w,this.root):null})}static removeNodeFromTree(w){return r(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,w))})}}h.root=null},1557:(Y,R)=>{R.__esModule=!0,R.default=function(v){for(var _=arguments.length,L=new Array(_>1?_-1:0),r=1;r<_;r++)L[r-1]=arguments[r];for(;L.length>0;){var h=L.shift();v[h]||(v[h]={}),v=v[h]}},Y.exports=R.default},1581:(Y,R)=>{R.__esModule=!0,R.UNIVERSAL=R.TAG=R.STRING=R.SELECTOR=R.ROOT=R.PSEUDO=R.NESTING=R.ID=R.COMMENT=R.COMBINATOR=R.CLASS=R.ATTRIBUTE=void 0,R.TAG="tag",R.STRING="string",R.SELECTOR="selector",R.ROOT="root",R.PSEUDO="pseudo",R.NESTING="nesting",R.ID="id",R.COMMENT="comment",R.COMBINATOR="combinator",R.CLASS="class",R.ATTRIBUTE="attribute",R.UNIVERSAL="universal"},1669:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(3295))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.UNIVERSAL,f.value="*",f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o}(L.default);R.default=k,Y.exports=R.default},1704:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(4646))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.COMBINATOR,f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o}(L.default);R.default=k,Y.exports=R.default},1752:Y=>{let R={comma:v=>R.split(v,[","],!0),space:v=>R.split(v,[" ",`
`,"	"]),split(v,_,L){let r=[],h="",k=!1,w=0,p=!1,t="",o=!1;for(let a of v)o?o=!1:a==="\\"?o=!0:p?a===t&&(p=!1):a==='"'||a==="'"?(p=!0,t=a):a==="("?w+=1:a===")"?w>0&&(w-=1):w===0&&_.includes(a)&&(k=!0),k?(h!==""&&r.push(h.trim()),h="",k=!1):h+=a;return(L||h!=="")&&r.push(h.trim()),r}};Y.exports=R,R.default=R},1804:(Y,R,v)=>{v.d(R,{f:()=>h});var _=v(830),L=v(8278),r=function(k,w,p,t){return new(p||(p=Promise))(function(o,a){function f(u){try{A(t.next(u))}catch(c){a(c)}}function C(u){try{A(t.throw(u))}catch(c){a(c)}}function A(u){var c;u.done?o(u.value):(c=u.value,c instanceof p?c:new p(function(i){i(c)})).then(f,C)}A((t=t.apply(k,[])).next())})};class h{static waitForDataToLoad(){return r(this,void 0,void 0,function*(){return new Promise((w,p)=>{this.checkFlag(w),setTimeout(()=>{p("not")},25e3)})})}static checkFlag(w){if(_.B.isCharacterLoaded)return w("done");setTimeout(h.checkFlag,1e3,w)}static addNodeToTree(w){return r(this,void 0,void 0,function*(){return this.characterRoot==null?(this.characterRoot=w,this.characterRoot):(this.characterRoot=this.characterRoot.addCharacterNode(w,this.characterRoot,this.characterRoot.height),this.characterRoot)})}static removeNodeByCharacter(w,p){return r(this,void 0,void 0,function*(){this.characterRoot&&this.characterRoot.removeNodeWithVariants(this.characterRoot,w,p)})}static countNumberOfNodes(){return this.characterRoot?this.characterRoot.countNodeBelow(this.characterRoot):0}static addConceptToTree(w){if(w.characterValue!=""){var p=new L.b(w.characterValue,w,null,null);this.addNodeToTree(p)}}static getNodeFromTree(w){return this.characterRoot?this.characterRoot.getCharacterFromNode(w,this.characterRoot):this.characterRoot}static getNodeFromTreeUpdated(w){return this.characterRoot?this.characterRoot.getCharacterFromNode(w,this.characterRoot):this.characterRoot}static getCharacterAndTypeFromTree(w,p){return r(this,void 0,void 0,function*(){return this.characterRoot?this.characterRoot.getFromNodeWithCharacterAndType(w,p,this.characterRoot):this.characterRoot})}static getCharacterAndCategoryFromTree(w,p){return r(this,void 0,void 0,function*(){return this.characterRoot?this.characterRoot.getFromNodeWithCharacterAndCategory(w,p,this.characterRoot):this.characterRoot})}static removeConceptCharacter(w){this.characterRoot&&(this.characterRoot=this.characterRoot.removeNode(this.characterRoot,w))}}h.characterRoot=null},1833:(Y,R,v)=>{v.d(R,{I:()=>C});var _=v(6948),L=v(903),r=v(1804),h=v(3796),k=v(6047),w=v(4244);class p{constructor(u,c,i,d){this.height=1,this.key=u,this.value=c,this.leftNode=i,this.rightNode=d}addNode(u,c,i){if(c==null)return c=u;let d=c.leftNode,g=c.rightNode;if(c.key>u.key)c.leftNode=this.addNode(u,d,i);else{if(!(c.key<u.key))return c;c.rightNode=this.addNode(u,g,i)}c.height=1+Math.max(this.getHeight(c.leftNode),this.getHeight(c.rightNode));let y=this.getBalanceFactor(c);if(y>1&&c.leftNode){if(u.key<c.leftNode.key)return this.rightRotate(c);if(u.key>c.leftNode.key)return c.leftNode=this.leftRotate(c.leftNode),this.rightRotate(c)}if(y<-1&&c.rightNode){if(u.key>c.rightNode.key)return this.leftRotate(c);if(u.key<c.rightNode.key)return c.rightNode=this.rightRotate(c.rightNode),this.leftRotate(c)}return c}rightRotate(u){if(u){let c=u.leftNode;if(c){let i=c.rightNode;return u.leftNode=i,c.rightNode=u,u.height=Math.max(this.getHeight(u.leftNode),this.getHeight(u.rightNode))+1,c.height=Math.max(this.getHeight(c.leftNode),this.getHeight(c.rightNode))+1,c}}return u}leftRotate(u){if(u){let c=u.rightNode;if(c){let i=c.leftNode;return c.leftNode=u,u.rightNode=i,u.height=Math.max(this.getHeight(u.leftNode),this.getHeight(u.rightNode))+1,c.height=Math.max(this.getHeight(c.leftNode),this.getHeight(u.rightNode))+1,c}}return u}getHeight(u){return u?u.height:0}getBalanceFactor(u){return u==null?0:this.getHeight(u.leftNode)-this.getHeight(u.rightNode)}getFromNode(u,c){return c&&(u==c.key?c:u<c.key?this.getFromNode(u,c.leftNode):u>c.key?this.getFromNode(u,c.rightNode):c)}removeNode(u,c){if(u==null)return u;if(u.key>c)return u.leftNode=this.removeNode(u.leftNode,c),u;if(u.key<c)return u.rightNode=this.removeNode(u.rightNode,c),u;if(u.leftNode==null){let i=u.rightNode;return u=null,i}if(u.rightNode==null){let i=u.leftNode;return u=null,i}{let i=this.inOrderSuccessor(u.rightNode);return u.value=i.value,u.key=i.key,u.rightNode=this.removeNode(u.rightNode,i.key),u}}countNodeBelow(u){return u==null?0:1+this.countNodeBelow(u.leftNode)+this.countNodeBelow(u.rightNode)}inOrderSuccessor(u){for(;u.leftNode!=null;)u=u.leftNode;return u}}var t=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,[])).next())})};class o{static addNodeToTree(u){if(this.root==null)return this.root=u,this.root;this.root=this.root.addNode(u,this.root,this.root.height)}static addWidgetToTree(u){let c=new p(u.widgetId,u,null,null);this.addNodeToTree(c)}static getNodeFromTree(u){return t(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(u,this.root):null})}static removeNodeFromTree(u){return t(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,u))})}static countNumberOfNodes(){return this.root?this.root.countNodeBelow(this.root):0}}o.root=null;class a{constructor(){this.widgetId=0,this.mainId=0,this.conceptIds=[],this.linkers=[],this.reverse=[],this.mainCompositionIds=[],this.countinfo=[]}}var f=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,[])).next())})};class C{constructor(){this.name="conceptsArray"}static CheckContains(u){for(var c=!1,i=0;i<this.conceptsArray.length;i++)this.conceptsArray[i].id==u.id&&(c=!0);return c}static AddNpc(u){this.NPC.includes(u)||(this.NPC.length>10&&(this.NPC=[]),this.NPC.push(u))}static GetNpc(u){return!!this.NPC.includes(u)}static AddConceptToStorage(u){u.id>0&&(0,_.kH)("concept",u)}static GetConceptBulkData(u,c,i){return f(this,void 0,void 0,function*(){yield L.W.getConceptListFromIds(u,c,i)})}static AddWidget(u){if(w.serviceWorker)try{(0,w.sendMessage)("ConceptsData__AddWidget",{widgetDetails:u})}catch(c){(0,w.handleServiceWorkerException)(c)}u.widgetId>0&&o.addWidgetToTree(u)}static AddConcept(u){if(w.serviceWorker)try{(0,w.sendMessage)("ConceptsData__AddConcept",{concept:u})}catch(c){(0,w.handleServiceWorkerException)(c)}u.id>0&&(L.W.addConceptToTree(u),h.c.addConceptToTree(u))}static AddConceptToMemory(u){u.id>0&&(L.W.addConceptToTree(u),h.c.addConceptToTree(u))}static AddConceptTemporary(u){var c=this.CheckContains(u);this.conceptDictionary[u.id]=u,c&&this.RemoveConcept(u),this.conceptsArray.push(u)}static RemoveConcept(u){for(var c=0;c<this.conceptsArray.length;c++)this.conceptsArray[c].id==u.id&&this.conceptsArray.splice(c,1);(0,_.wh)("concept",u.id)}static GetWidget(u){return f(this,void 0,void 0,function*(){let c=new a;if(w.serviceWorker)try{return(yield(0,w.sendMessage)("ConceptsData__GetWidget",{id:u})).data}catch(d){(0,w.handleServiceWorkerException)(d)}let i=yield o.getNodeFromTree(u);return i!=null&&(c=i.value),c})}static RemoveWidget(u){return f(this,void 0,void 0,function*(){if(w.serviceWorker)try{return(yield(0,w.sendMessage)("ConceptsData__RemoveWidget",{id:u})).data}catch(c){(0,w.handleServiceWorkerException)(c)}yield o.removeNodeFromTree(u)})}static GetConcept(u){return f(this,void 0,void 0,function*(){if(w.serviceWorker)try{return(yield(0,w.sendMessage)("ConceptsData__GetConcept",{id:u})).data}catch(g){(0,w.handleServiceWorkerException)(g)}if(u==0||u==null||u==null)return(0,k.o)();var c=(0,k.o)(),i=yield L.W.getNodeFromTree(u);if(i?.value){var d=i.value;d&&(c=d)}return c})}static GetConceptByCharacter(u){return f(this,void 0,void 0,function*(){var c=(0,k.o)(),i=r.f.getNodeFromTree(u);return i&&(c=i.value),c})}static GetConceptByCharacterUpdated(u){return f(this,void 0,void 0,function*(){var c=(0,k.o)(),i=r.f.getNodeFromTree(u);return i&&(c=i.value),c})}static GetConceptByCharacterAndTypeLocal(u,c){return f(this,void 0,void 0,function*(){return(0,k.o)(),yield h.c.getTypeVariantsWithCharacterValueNew(u,c)})}static GetConceptByCharacterAndCategoryLocal(u,c){return f(this,void 0,void 0,function*(){var i=(0,k.o)(),d=yield r.f.getCharacterAndCategoryFromTree(u,c);return d&&(i=d.value),i})}static GetConceptsByTypeId(u){let c=[];for(var i=0;i<this.conceptsArray.length;i++)this.conceptsArray[i].typeId==u&&c.push(this.conceptsArray[i]);return c}static GetConceptsByTypeIdAndUser(u,c){var i=arguments;return f(this,void 0,void 0,function*(){if(w.Logger.logfunction("ConceptsData.GetConceptsByTypeIdAndUser",i),w.serviceWorker)try{return(yield(0,w.sendMessage)("ConceptsData__GetConceptsByTypeIdAndUser",{typeId:u,userId:c})).data}catch(g){(0,w.handleServiceWorkerException)(g)}let d=[];return d=yield h.c.getTypeVariantsFromTreeWithUserIdNew(u,c),d})}static GetBinaryCharacterTree(){return r.f.characterRoot}getName(){return this.name}}C.conceptsArray=[],C.NPC=[],C.conceptDictionary=[]},1866:()=>{},1974:(Y,R,v)=>{v.d(R,{z:()=>L});var _=v(370);class L{constructor(h,k,w,p){this.url=_.B.BASE_URL,this.message=h,this.ok=k,this.status=w,this.data=p}getMessage(){return this.message}setMessage(h){return this.message=h,this}getStatus(){return this.status}setStatus(h){return this.status=h,this}getData(){return this.data}setData(h){return this.data=h,this}getOk(){return this.ok}setOk(h){return this.ok=h,this}getUrl(){return this.url}setUrl(h){return this.url=h,this}}},2051:(Y,R,v)=>{v.d(R,{k:()=>p});var _=v(3890),L=v(3424),r=v(7154),h=v(4244),k=v(5760),w=function(t,o,a,f){return new(a||(a=Promise))(function(C,A){function u(d){try{i(f.next(d))}catch(g){A(g)}}function c(d){try{i(f.throw(d))}catch(g){A(g)}}function i(d){var g;d.done?C(d.value):(g=d.value,g instanceof a?g:new a(function(y){y(g)})).then(u,c)}i((f=f.apply(t,o||[])).next())})};function p(t,o){var a=arguments;return w(this,arguments,void 0,function*(f,C,A=!1,u,c,i=999,d=0,g={concepts:[],connections:[]}){var y,b,x,N;A==0&&(u=999);const B=h.Logger.logfunction("MakeTheInstanceConceptLocal",a)||{};if(h.serviceWorker){B.serviceWorker=!0;try{const O=yield(0,h.sendMessage)("MakeTheInstanceConceptLocal",{type:f,referent:C,composition:A,userId:u,accessId:c,sessionInformationId:i,referentId:d,actions:g});return!((b=(y=O?.actions)===null||y===void 0?void 0:y.concepts)===null||b===void 0)&&b.length&&(g.concepts=JSON.parse(JSON.stringify(O.actions.concepts))),!((N=(x=O?.actions)===null||x===void 0?void 0:x.connections)===null||N===void 0)&&N.length&&(g.connections=JSON.parse(JSON.stringify(O.actions.connections))),h.Logger.logUpdate(B),O.data}catch(O){(0,k.ey)(B,"MakeTheInstanceConceptLocal",O),(0,h.handleServiceWorkerException)(O)}}try{let O,G,F=999,M=4,j=u,W=4,$="",K=C.length;if($=f.startsWith("the_")?f:"the_"+f,A)O=yield(0,L.$)(f,F,u,u,g),G=yield(0,_.A)(C,f,u,M,O.id,W,!0,d,g);else if(K>255)O=yield(0,L.$)($,F,j,u,g),G=yield(0,_.A)(C,$,u,M,O.id,W,void 0,void 0,g);else{O=yield(0,L.$)($,F,j,u,g);let te=yield r.v.GetConceptByCharacterAndTypeLocal(C,O.id);G=te,te.id==0&&te.userId==0&&(G=yield(0,_.A)(C,$,u,M,O.id,W,void 0,void 0,g))}return G.type=O,h.LocalSyncData.AddConcept(G),g.concepts.push(G),h.Logger.logUpdate(B),G}catch(O){throw(0,k.ey)(B,"MakeTheInstanceConceptLocal",O),O}})}},2110:(Y,R,v)=>{const{AtRule:_,Rule:L}=v(2895);let r=v(7149);function h(c,i){let d;try{r(g=>{d=g}).processSync(c)}catch(g){throw c.includes(":")?i?i.error("Missed semicolon"):g:i?i.error(g.message):g}return d.at(0)}function k(c,i){let d=!1;return c.each(g=>{if(g.type==="nesting"){let y=i.clone({});g.value!=="&"?g.replaceWith(h(g.value.replace("&",y.toString()))):g.replaceWith(y),d=!0}else"nodes"in g&&g.nodes&&k(g,i)&&(d=!0)}),d}function w(c,i){let d=[];for(let g of c.selectors){let y=h(g,c);for(let b of i.selectors){if(!b)continue;let x=h(b,i);k(x,y)||(x.prepend(r.combinator({value:" "})),x.prepend(y.clone({}))),d.push(x.toString())}}return d}function p(c,i){if(c.prev()?.type!=="comment")return i.after(c),c;let d=c.prev();return c.parent.toString().match(/[*]\/ *\n.*{/)?i.after(c).after(d):i.after(c),c}function t(c,i,d,g=!0){return i.length?(d=function(y,b,x){let N=new L({nodes:[],selector:y});return N.append(b),x.after(N),N}(c,i,d),g&&(i=[]),[d,i]):[d,i]}function o(c,i=""){let d=c.concat(i),g={};for(let y of d)g[y.replace(/^@/,"")]=!0;return g}function a(c){let i=c[C];if(i){let d,g,y,b,x=c.nodes,N=-1,B=function(O){let G=[],F=O.parent;for(;F&&F instanceof _;)G.push(F),F=F.parent;return G}(c);if(B.forEach((O,G)=>{if(i(O.name))d=O,N=G,y=b;else{let F=b;b=O.clone({nodes:[]}),F&&b.append(F),g=g||b}}),d?y?(g.append(x),d.after(y)):d.after(x):c.after(x),c.next()&&d){let O;B.slice(0,N+1).forEach((G,F,M)=>{let j=O;O=G.clone({nodes:[]}),j&&O.append(j);let W=[],$=(M[F-1]||c).next();for(;$;)W.push($),$=$.next();O.append(W)}),O&&(y||x[x.length-1]).after(O)}}else c.after(c.nodes);c.remove()}const f=Symbol("rootRuleMergeSel"),C=Symbol("rootRuleEscapes");function A(c){let{params:i}=c,{escapes:d,selector:g,type:y}=function(b){let x=(b=b.trim()).match(/^\((.*)\)$/);if(!x)return{selector:b,type:"basic"};let N=x[1].match(/^(with(?:out)?):(.+)$/);if(N){let B=N[1]==="with",O=Object.fromEntries(N[2].trim().split(/\s+/).map(F=>[F,!0]));if(B&&O.all)return{type:"noop"};let G=F=>!!O[F];return O.all?G=()=>!0:B&&(G=F=>F!=="all"&&!O[F]),{escapes:G,type:"withrules"}}return{type:"unknown"}}(i);if(y==="unknown")throw c.error(`Unknown @${c.name} parameter ${JSON.stringify(i)}`);if(y==="basic"&&g){let b=new L({nodes:c.nodes,selector:g});c.removeAll(),c.append(b)}c[C]=d,c[f]=d?!d("all"):y==="noop"}const u=Symbol("hasRootRule");Y.exports=(c={})=>{let i=o(["media","supports","layer","container","starting-style"],c.bubble),d=function(x){return function N(B,O,G,F=G){let M=[];if(O.each(j=>{j.type==="rule"&&G?F&&(j.selectors=w(B,j)):j.type==="atrule"&&j.nodes?x[j.name]?N(B,j,F):O[f]!==!1&&M.push(j):M.push(j)}),G&&M.length){let j=B.clone({nodes:[]});for(let W of M)j.append(W);O.prepend(j)}}}(i),g=o(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],c.unwrap),y=(c.rootRuleName||"at-root").replace(/^@/,""),b=c.preserveEmpty;return{Once(x){x.walkAtRules(y,N=>{A(N),x[u]=!0})},postcssPlugin:"postcss-nested",RootExit(x){x[u]&&(x.walkAtRules(y,a),x[u]=!1)},Rule(x){let N=!1,B=x,O=!1,G=[];x.each(F=>{switch(F.type){case"atrule":[B,G]=t(x.selector,G,B),F.name===y?(N=!0,d(x,F,!0,F[f]),B=p(F,B)):i[F.name]?(O=!0,N=!0,d(x,F,!0),B=p(F,B)):g[F.name]?(O=!0,N=!0,d(x,F,!1),B=p(F,B)):O&&G.push(F);break;case"decl":O&&G.push(F);break;case"rule":[B,G]=t(x.selector,G,B),O=!0,N=!0,F.selectors=w(x,F),B=p(F,B)}}),t(x.selector,G,B,!1),N&&b!==!0&&(x.raws.semicolon=!0,x.nodes.length===0&&x.remove())}}},Y.exports.postcss=!0},2371:(Y,R,v)=>{v.d(R,{s:()=>h});var _=v(9368),L=v(4244),r=function(k,w,p,t){return new(p||(p=Promise))(function(o,a){function f(u){try{A(t.next(u))}catch(c){a(c)}}function C(u){try{A(t.throw(u))}catch(c){a(c)}}function A(u){var c;u.done?o(u.value):(c=u.value,c instanceof p?c:new p(function(i){i(c)})).then(f,C)}A((t=t.apply(k,w||[])).next())})};function h(){return r(this,arguments,void 0,function*(k=[]){const w=L.Logger.logfunction("FindConceptsFromConnections",[k.length]);let p=[];if(k.length>0){for(let t=0;t<k.length;t++)p.includes(k[t].ofTheConceptId)||p.push(Number(k[t].ofTheConceptId)),p.includes(k[t].toTheConceptId)||p.push(Number(k[t].toTheConceptId)),p.includes(k[t].typeId)||p.push(Number(k[t].typeId));yield(0,_.r)(p)}L.Logger.logUpdate(w)})}},2404:(Y,R,v)=>{v.d(R,{A:()=>C});var _=v(370),L=v(1317),r=v(5760),h=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,[])).next())})},k=v(6297),w=v(4244),p=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,[])).next())})};class t{constructor(u,c,i,d,g,y,b,x,N,B){this.id=0,this.userId=u,this.data=c,this.securityId=i,this.securityUserId=d,this.accessId=g,this.accessUserId=y,this.sessionId=b,this.sessionUserId=x,this.entryTimestamp=N,this.isNew=B}}var o=v(6047),a=v(993),f=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,u||[])).next())})};function C(A,u){var c=arguments;return f(this,arguments,void 0,function*(i,d,g=!1,y,b=4,x=999,N=0){y=g?y:999;const B=w.Logger.logfunction("MakeTheInstanceConcept",c)||{};if(w.serviceWorker){B.serviceWorker=!0;try{const ae=yield(0,w.sendMessage)("MakeTheInstanceConcept",{type:i,referent:d,composition:g,userId:y,passedAccessId:b,passedSessionId:x,referentId:N});return w.Logger.logUpdate(B),ae.data}catch(ae){(0,r.ey)(B,"MakeTheInstanceConcept",ae),(0,w.handleServiceWorkerException)(ae)}}let O,G=x,F=y,M=y,j=b,W=y,$="",K=d.length,te=(0,o.o)();if($=i.startsWith("the_")?i:"the_"+i,g)te=yield(0,w.MakeTheTypeConceptApi)(i,y),O=yield(0,a.Ay)(d,y,4,te.id,N,j,i);else if(K>255)te=yield(0,w.MakeTheTypeConceptApi)($,y),O=yield(0,a.Ay)(d,y,4,te.id,N,j,$),function(ae){h(this,void 0,void 0,function*(){try{var z=yield(0,L.Xr)();const ie=yield(0,L.Hh)(_.B.CreateTheTextDataUrl(),{method:"POST",headers:z,body:JSON.stringify(ae)});if(!ie.ok)throw(0,r.ry)(ie),new Error(`Error! status: ${ie.status}`);return yield ie.json()}catch(ie){throw ie}})}(new t(y,d,999,F,j,W,G,M,Date.now().toString(),!0));else{te=yield(0,w.MakeTheTypeConceptApi)($,y);let ae=yield(0,k.A)(d,te.id);O=ae,ae.id==0&&ae.userId==0&&(O=yield(0,a.N)(d,y,4,te.id,12,j,$),function(z,ie,ce,oe){var J=arguments;p(this,void 0,void 0,function*(){const ee=w.Logger.logfunction("MakeTheNameInBackend",J);try{let ne={newConceptId:z,referent:ie,typeId:ce,typeUserId:oe},H=yield(0,L.Xr)(),re=JSON.stringify(ne);const le=yield(0,L.Hh)(_.B.MakeTheNameInBackendUrl(),{method:"POST",headers:H,body:re});w.Logger.logUpdate(ee),le.ok||(0,r.ry)(le)}catch(ne){(0,r.Mb)(ne,_.B.MakeTheNameInBackendUrl()),(0,r.ey)(ee,"MakeTheNameInBackend",ne)}})}(O.id,`${d}`,te.id,y))}return O.type=te,w.Logger.logUpdate(B),O})}},2617:(Y,R,v)=>{v.d(R,{i:()=>_});class _{constructor(r,h,k,w){this.key="",this.value=[],this.height=1,this.key=r,this.value=h,this.leftNode=k,this.rightNode=w}getFromNode(r,h){return h&&(r==h.key?h:r<h.key?this.getFromNode(r,h.leftNode):r>h.key?this.getFromNode(r,h.rightNode):h)}rightRotate(r){if(r){let h=r.leftNode;if(h){let k=h.rightNode;return r.leftNode=k,h.rightNode=r,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,h.height=Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode))+1,h}}return r}leftRotate(r){if(r){let h=r.rightNode;if(h){let k=h.leftNode;return h.leftNode=r,r.rightNode=k,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,h.height=Math.max(this.getHeight(h.leftNode),this.getHeight(r.rightNode))+1,h}}return r}getHeight(r){return r?r.height:0}getBalanceFactor(r){return r==null?0:this.getHeight(r.leftNode)-this.getHeight(r.rightNode)}removeNode(r,h){if(r==null)return r;if(r.key>h)return r.leftNode=this.removeNode(r.leftNode,h),r;if(r.key<h)return r.rightNode=this.removeNode(r.rightNode,h),r;if(r.leftNode==null){let k=r.rightNode;return r=null,k}if(r.rightNode==null){let k=r.leftNode;return r=null,k}{let k=this.inOrderSuccessor(r.rightNode);return r.value=k.value,r.key=k.key,r.variants=k.variants,r.currentNode=k.currentNode,r.rightNode=this.removeNode(r.rightNode,k.key),r}}inOrderSuccessor(r){for(;r.leftNode!=null;)r=r.leftNode;return r}}},2625:(Y,R,v)=>{v.d(R,{F4:()=>h,P6:()=>w,dp:()=>k});var _=v(4990),L=v(6047),r=v(9911);function h(p){var t,o;const a=(0,r.u)();return a.id=p.id,a.ghostId=p.ghostId,a.userId=p.userId,a.accessId=p.accessId,a.categoryId=p.categoryId,a.characterValue=p.characterValue,a.entryTimeStamp=p.entryTimeStamp,a.typeId=p.typeId,a.type=p.type,a.isTemp=!1,a.typeCharacter=(o=(t=p?.type)===null||t===void 0?void 0:t.characterValue)!==null&&o!==void 0?o:"",a}function k(p){const t=(0,L.o)();return t.id=p.id,t.ghostId=p.ghostId,t.userId=p.userId,t.accessId=p.accessId,t.entryTimeStamp=p.entryTimeStamp,t.typeId=p.typeId,t.categoryId=p.categoryId,t}function w(p){const t=new _.N(0,0,0,0,0,0,0);return t.id=p.id,t.ghostId=p.ghostId,t.accessId=p.accessId,t.ofTheConceptId=p.ofTheConceptId,t.toTheConceptId=p.toTheConceptId,t.entryTimeStamp=p.entryTimeStamp,t.typeId=p.typeId,t.isTemp=!1,t}},2635:(Y,R,v)=>{v.d(R,{V:()=>w,w:()=>k});var _=v(9536),L=v(4244),r=v(939),h=function(t,o,a,f){return new(a||(a=Promise))(function(C,A){function u(d){try{i(f.next(d))}catch(g){A(g)}}function c(d){try{i(f.throw(d))}catch(g){A(g)}}function i(d){var g;d.done?C(d.value):(g=d.value,g instanceof a?g:new a(function(y){y(g)})).then(u,c)}i((f=f.apply(t,[])).next())})};function k(t=[]){let o=[];if(t.length>0)for(let a=0;a<t.length;a++){let f=p(t[a]);o.push(f)}return o}function w(t){var o=arguments;return h(this,void 0,void 0,function*(){const a=L.Logger.logfunction("GetConnectionTypeForCount",o);let f={};for(let C=0;C<t.length;C++){let A=yield(0,_.r)(t[C].connectionTypeId);t[C].connectionType=A.characterValue,f[t[C].conceptId]=t[C]}return L.Logger.logUpdate(a),f})}function p(t){const o=t.split("_");if(o.length===3){let a=new r.y;return a.conceptId=Number(o[0]),a.connectionTypeId=Number(o[1]),a.count=Number(o[2]),a}throw new Error("Input string must contain exactly three parts separated by underscores.")}},2648:(Y,R,v)=>{R.__esModule=!0,R.FIELDS=void 0,R.default=function(C){var A,u,c,i,d,g,y,b,x,N,B,O,G=[],F=C.css.valueOf(),M=F.length,j=-1,W=1,$=0,K=0;function te(ae,z){if(!C.safe)throw C.error("Unclosed "+ae,W,$-j,$);b=(F+=z).length-1}for(;$<M;){switch((A=F.charCodeAt($))===r.newline&&(j=$,W+=1),A){case r.space:case r.tab:case r.newline:case r.cr:case r.feed:b=$;do b+=1,(A=F.charCodeAt(b))===r.newline&&(j=b,W+=1);while(A===r.space||A===r.newline||A===r.tab||A===r.cr||A===r.feed);O=r.space,c=W,u=b-j-1,K=b;break;case r.plus:case r.greaterThan:case r.tilde:case r.pipe:b=$;do b+=1,A=F.charCodeAt(b);while(A===r.plus||A===r.greaterThan||A===r.tilde||A===r.pipe);O=r.combinator,c=W,u=$-j,K=b;break;case r.asterisk:case r.ampersand:case r.bang:case r.comma:case r.equals:case r.dollar:case r.caret:case r.openSquare:case r.closeSquare:case r.colon:case r.semicolon:case r.openParenthesis:case r.closeParenthesis:O=A,c=W,u=$-j,K=(b=$)+1;break;case r.singleQuote:case r.doubleQuote:B=A===r.singleQuote?"'":'"',b=$;do for(i=!1,(b=F.indexOf(B,b+1))===-1&&te("quote",B),d=b;F.charCodeAt(d-1)===r.backslash;)d-=1,i=!i;while(i);O=r.str,c=W,u=$-j,K=b+1;break;default:A===r.slash&&F.charCodeAt($+1)===r.asterisk?((b=F.indexOf("*/",$+2)+1)===0&&te("comment","*/"),(g=(y=F.slice($,b+1).split(`
`)).length-1)>0?(x=W+g,N=b-y[g].length):(x=W,N=j),O=r.comment,W=x,c=x,u=b-N):A===r.slash?(O=A,c=W,u=$-j,K=(b=$)+1):(b=a(F,$),O=r.word,c=W,u=b-j),K=b+1}G.push([O,W,$-j,c,u,$,K]),N&&(j=N,N=null),$=K}return G};var _,L,r=function(C,A){if(C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var u=h(A);if(u&&u.has(C))return u.get(C);var c={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in C)if(d!=="default"&&Object.prototype.hasOwnProperty.call(C,d)){var g=i?Object.getOwnPropertyDescriptor(C,d):null;g&&(g.get||g.set)?Object.defineProperty(c,d,g):c[d]=C[d]}return c.default=C,u&&u.set(C,c),c}(v(71));function h(C){if(typeof WeakMap!="function")return null;var A=new WeakMap,u=new WeakMap;return(h=function(c){return c?u:A})(C)}for(var k=((_={})[r.tab]=!0,_[r.newline]=!0,_[r.cr]=!0,_[r.feed]=!0,_),w=((L={})[r.space]=!0,L[r.tab]=!0,L[r.newline]=!0,L[r.cr]=!0,L[r.feed]=!0,L[r.ampersand]=!0,L[r.asterisk]=!0,L[r.bang]=!0,L[r.comma]=!0,L[r.colon]=!0,L[r.semicolon]=!0,L[r.openParenthesis]=!0,L[r.closeParenthesis]=!0,L[r.openSquare]=!0,L[r.closeSquare]=!0,L[r.singleQuote]=!0,L[r.doubleQuote]=!0,L[r.plus]=!0,L[r.pipe]=!0,L[r.tilde]=!0,L[r.greaterThan]=!0,L[r.equals]=!0,L[r.dollar]=!0,L[r.caret]=!0,L[r.slash]=!0,L),p={},t="0123456789abcdefABCDEF",o=0;o<22;o++)p[t.charCodeAt(o)]=!0;function a(C,A){var u,c=A;do{if(u=C.charCodeAt(c),w[u])return c-1;u===r.backslash?c=f(C,c)+1:c++}while(c<C.length);return c-1}function f(C,A){var u=A,c=C.charCodeAt(u+1);if(!k[c])if(p[c]){var i=0;do u++,i++,c=C.charCodeAt(u+1);while(p[c]&&i<6);i<6&&c===r.space&&u++}else u++;return u}R.FIELDS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6}},2739:()=>{},2801:(Y,R,v)=>{function _(L,r){return L.indexOf(r)===-1&&L.push(r),L}v.d(R,{A:()=>_})},2814:(Y,R,v)=>{v.d(R,{A:()=>w,w:()=>p});var _=v(6397),L=v(4244),r=v(1833),h=v(5760),k=function(t,o,a,f){return new(a||(a=Promise))(function(C,A){function u(d){try{i(f.next(d))}catch(g){A(g)}}function c(d){try{i(f.throw(d))}catch(g){A(g)}}function i(d){var g;d.done?C(d.value):(g=d.value,g instanceof a?g:new a(function(y){y(g)})).then(u,c)}i((f=f.apply(t,[])).next())})};function w(t){var o=arguments;return k(this,void 0,void 0,function*(){const a=L.Logger.logfunction("GetConceptByCharacter",o)||{};if(L.serviceWorker){a.serviceWorker=!0;try{const A=yield(0,L.sendMessage)("GetConceptByCharacter",{characterValue:t});return L.Logger.logUpdate(a),A.data}catch(A){(0,h.ey)(a,"GetConceptByCharacter",A),(0,L.handleServiceWorkerException)(A)}}let f=yield r.I.GetConceptByCharacter(t),C=`${t}`;return f!=null&&f?.id!=0||!C||(yield(0,_.Y)(t),f=yield r.I.GetConceptByCharacterAndTypeLocal(t,51),f.id==0&&(f=yield r.I.GetConceptByCharacter(t))),L.Logger.logUpdate(a),f})}function p(t){var o=arguments;return k(this,void 0,void 0,function*(){const a=L.Logger.logfunction("GetConceptByCharacterUpdated",o)||{};if(L.serviceWorker){a.serviceWorker=!0;try{const A=yield(0,L.sendMessage)("GetConceptByCharacterUpdated",{characterValue:t});return L.Logger.logUpdate(a),A.data}catch(A){(0,h.ey)(a,"GetConceptByCharacterUpdated",A),(0,L.handleServiceWorkerException)(A)}}let f=yield r.I.GetConceptByCharacter(t),C=`${t}`;return f!=null&&f?.id!=0||!C||(yield(0,_.Y)(t),f=yield r.I.GetConceptByCharacter(t)),L.Logger.logUpdate(a),f})}},2895:(Y,R,v)=>{let _=v(396),L=v(9371),r=v(7793),h=v(3614),k=v(5238),w=v(145),p=v(3438),t=v(1106),o=v(6966),a=v(1752),f=v(3152),C=v(9577),A=v(6846),u=v(3717),c=v(5644),i=v(1534),d=v(3303),g=v(38);function y(...b){return b.length===1&&Array.isArray(b[0])&&(b=b[0]),new A(b)}y.plugin=function(b,x){let N,B=!1;function O(...G){console&&console.warn&&!B&&(B=!0,ks.LANG&&ks.LANG.startsWith("cn"));let F=x(...G);return F.postcssPlugin=b,F.postcssVersion=new A().version,F}return Object.defineProperty(O,"postcss",{get:()=>(N||(N=O()),N)}),O.process=function(G,F,M){return y([O(M)]).process(G,F)},O},y.stringify=d,y.parse=C,y.fromJSON=p,y.list=a,y.comment=b=>new L(b),y.atRule=b=>new _(b),y.decl=b=>new k(b),y.rule=b=>new i(b),y.root=b=>new c(b),y.document=b=>new w(b),y.CssSyntaxError=h,y.Declaration=k,y.Container=r,y.Processor=A,y.Document=w,y.Comment=L,y.Warning=g,y.AtRule=_,y.Result=u,y.Input=t,y.Rule=i,y.Root=c,y.Node=f,o.registerPostcss(y),Y.exports=y,y.default=y},2918:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(4646))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.NESTING,f.value="&",f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o}(L.default);R.default=k,Y.exports=R.default},3008:(Y,R,v)=>{v.d(R,{j:()=>L});var _=v(4244);class L{constructor(h,k,w,p,t,o,a,f=!1,C,A,u){this.count=0,this.typeCharacter="",this.referent=null,this.isComposition=!1,this.isTemp=!1,this.isSynced=!1,this.applicationId=_.BaseUrl.getRandomizer(),this.x=0,this.y=0,this.id=h,this.userId=k,this.typeId=w,this.ghostId=h,this.categoryId=p,this.referentId=t,this.characterValue=`${o}`,this.accessId=a,this.typeCharacter=u,this.type=null,this.isNew=f,this.entryTimeStamp=C,this.updatedTimeStamp=A}getType(){}}},3076:(Y,R,v)=>{v.d(R,{zl:()=>c,b6:()=>g,e$:()=>b,y6:()=>y,rq:()=>x,yV:()=>i,_W:()=>d});var _=v(4244),L=v(3246);function r(N){return N.startsWith("the_")?N.slice(4):N}var h=function(N,B,O,G){return new(O||(O=Promise))(function(F,M){function j(K){try{$(G.next(K))}catch(te){M(te)}}function W(K){try{$(G.throw(K))}catch(te){M(te)}}function $(K){var te;K.done?F(K.value):(te=K.value,te instanceof O?te:new O(function(ae){ae(te)})).then(j,W)}$((G=G.apply(N,B||[])).next())})};function k(N,B,O){return h(this,void 0,void 0,function*(){var G,F,M,j,W,$,K,te;let ae=[];for(let z=0;z<N.length;z++)ae.push(N[z].toTheConceptId),ae.push(N[z].ofTheConceptId),ae.push(N[z].typeId);for(let z=0;z<N.length;z++){let ie=!1;O.includes(N[z].id)&&(ie=!0);let ce=yield(0,_.GetTheConcept)(N[z].ofTheConceptId),oe=yield(0,_.GetTheConcept)(N[z].toTheConceptId);if(ie==1&&ce.id!=0&&oe.id!=0){let J,ee=(F=(G=oe.type)===null||G===void 0?void 0:G.characterValue)!==null&&F!==void 0?F:"self";N[z].toTheConceptId in B?J=B[N[z].toTheConceptId]:(J={},J[ee]={},B[N[z].toTheConceptId]=J);let ne=yield(0,_.GetTheConcept)(N[z].typeId);try{let H=(j=(M=ce?.type)===null||M===void 0?void 0:M.characterValue)!==null&&j!==void 0?j:"none",re=ce.characterValue;ne.characterValue,ne.characterValue.includes("_s_")&&(ce.id in B||(B[ce.id]={}),B[ce.id][H]=re),B[oe.id]={}}catch{}}if(ce.id!=0&&oe.id!=0){let J,ee=($=(W=ce.type)===null||W===void 0?void 0:W.characterValue)!==null&&$!==void 0?$:"self";N[z].ofTheConceptId in B?J=B[N[z].ofTheConceptId]:(J={},J[ee]={},B[N[z].ofTheConceptId]=J);let ne=yield(0,_.GetTheConcept)(N[z].typeId);try{let H=(te=(K=oe?.type)===null||K===void 0?void 0:K.characterValue)!==null&&te!==void 0?te:"none",re=oe.characterValue;ne.characterValue.includes("_s_")&&(oe.id in B||(B[oe.id]={}),B[oe.id][H]=re),B[ce.id]={}}catch{}}}return B})}var w=v(127),p=v(5747),t=function(N,B,O,G){return new(O||(O=Promise))(function(F,M){function j(K){try{$(G.next(K))}catch(te){M(te)}}function W(K){try{$(G.throw(K))}catch(te){M(te)}}function $(K){var te;K.done?F(K.value):(te=K.value,te instanceof O?te:new O(function(ae){ae(te)})).then(j,W)}$((G=G.apply(N,B||[])).next())})};function o(N,B,O){if(N in B){let G=B[N];G&&(O[G.connectionType+"_count"]=G.count)}}var a=function(N,B,O,G){return new(O||(O=Promise))(function(F,M){function j(K){try{$(G.next(K))}catch(te){M(te)}}function W(K){try{$(G.throw(K))}catch(te){M(te)}}function $(K){var te;K.done?F(K.value):(te=K.value,te instanceof O?te:new O(function(ae){ae(te)})).then(j,W)}$((G=G.apply(N,B||[])).next())})},f=v(2635),C=v(7762),A=function(N,B,O,G){return new(O||(O=Promise))(function(F,M){function j(K){try{$(G.next(K))}catch(te){M(te)}}function W(K){try{$(G.throw(K))}catch(te){M(te)}}function $(K){var te;K.done?F(K.value):(te=K.value,te instanceof O?te:new O(function(ae){ae(te)})).then(j,W)}$((G=G.apply(N,B||[])).next())})},u=function(N,B,O,G){return new(O||(O=Promise))(function(F,M){function j(K){try{$(G.next(K))}catch(te){M(te)}}function W(K){try{$(G.throw(K))}catch(te){M(te)}}function $(K){var te;K.done?F(K.value):(te=K.value,te instanceof O?te:new O(function(ae){ae(te)})).then(j,W)}$((G=G.apply(N,B||[])).next())})};function c(N,B){return u(this,arguments,void 0,function*(O,G,F=""){let M=yield(0,_.SearchWithTypeAndLinkerApi)(O,G,F),j=M.compositionIds,W=M.internalConnections,$=M.linkers,K=M.reverse,te=M.mainCompositionIds,ae=yield(0,L.QL)($),z=yield(0,L.MT)(j,W);return yield(0,w.NK)(ae,z,te,K)})}function i(N,B,O,G,F){return u(this,void 0,void 0,function*(){let M=yield(0,L.QL)(N),j=yield(0,L.rv)(B,O);return yield(0,w.Ve)(M,j,B,G,F)})}function d(N,B,O,G,F){return u(this,void 0,void 0,function*(){let M=yield(0,L.QL)(N),j=yield(0,L.D)(B,O);return yield(0,w.NK)(M,j,G,F)})}function g(N,B,O,G,F){return u(this,void 0,void 0,function*(){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnections",{linkers:N,conceptIds:B,mainCompositionIds:O,reverse:G,countInfos:F})).data}catch($){(0,_.handleServiceWorkerException)($)}let M=yield(0,L.QL)(N);M=(0,C.X)(M);let j=[];return j=yield k(M,j,G),j=yield function($,K,te){return h(this,void 0,void 0,function*(){var ae,z,ie,ce,oe,J,ee,ne;let H=[];for(let re=0;re<$.length;re++)H.push($[re].toTheConceptId),H.push($[re].ofTheConceptId),H.push($[re].typeId);$.sort(function(re,le){return le.id-re.id});for(let re=0;re<$.length;re++){let le=!1;te.includes($[re].id)&&(le=!0);let me=yield(0,_.GetTheConcept)($[re].ofTheConceptId),Ce=yield(0,_.GetTheConcept)($[re].toTheConceptId);if(le==1&&me.id!=0&&Ce.id!=0){let Te,ye=(z=(ae=Ce.type)===null||ae===void 0?void 0:ae.characterValue)!==null&&z!==void 0?z:"self";$[re].toTheConceptId in K?(Te=K[$[re].toTheConceptId],ye in Te||(Te[ye]={})):(Te={},Te[ye]={},K[$[re].toTheConceptId]=Te);let ge=yield(0,_.GetTheConcept)($[re].typeId);try{let _e=(ce=(ie=me?.type)===null||ie===void 0?void 0:ie.characterValue)!==null&&ce!==void 0?ce:"none",Le=me.characterValue,ve=ge.characterValue;ve==""&&(ve=_e,ve=r(ve));let De={[_e]:Le},we=ve+"_reverse";ge.characterValue.includes("_s_")||(typeof Te[ye]=="string"&&(Te[ye]={}),Te[ye][we]=De)}catch{}}if(me.id!=0&&Ce.id!=0){let Te,ye=(J=(oe=me.type)===null||oe===void 0?void 0:oe.characterValue)!==null&&J!==void 0?J:"self";$[re].ofTheConceptId in K?(Te=K[$[re].ofTheConceptId],ye in Te||(Te[ye]={})):(Te={},Te[ye]={},K[$[re].ofTheConceptId]=Te);let ge=yield(0,_.GetTheConcept)($[re].typeId);try{let _e=(ne=(ee=Ce?.type)===null||ee===void 0?void 0:ee.characterValue)!==null&&ne!==void 0?ne:"none",Le=Ce.characterValue,ve=ge.characterValue,De=(ge.characterValue,!1);ve==""&&(ve=_e,ve=r(ve),De=!0);let we={[_e]:Le};isNaN(Number(ve))?ge.characterValue.includes("_s_")||(typeof Te[ye]=="string"&&(Te[ye]={}),Te[ye][ve]=De?Le:we):(Array.isArray(Te[ye])||(Te[ye]=[]),Te[ye].push(Le))}catch{}}}return K})}(M,j,G),yield function($,K,te,ae){return h(this,arguments,void 0,function*(z,ie,ce,oe,J=[]){var ee,ne,H,re,le,me;let Ce=[],Te=[];for(let ye=0;ye<z.length;ye++)Te.push(z[ye].toTheConceptId),Te.push(z[ye].ofTheConceptId),Te.push(z[ye].typeId);z.sort(function(ye,ge){return ge.id-ye.id});for(let ye=0;ye<z.length;ye++){let ge=!1;J.includes(z[ye].id)&&(ge=!0);let _e=yield(0,_.GetTheConcept)(z[ye].ofTheConceptId),Le=yield(0,_.GetTheConcept)(z[ye].toTheConceptId);if(ge==1&&_e.id!=0&&Le.id!=0&&Le.id in ie){let ve,De=(ne=(ee=Le.type)===null||ee===void 0?void 0:ee.characterValue)!==null&&ne!==void 0?ne:"self";z[ye].toTheConceptId in ie?ve=ie[z[ye].toTheConceptId]:(ve={},ve[De]={},ie[z[ye].toTheConceptId]=ve);let we=yield(0,_.GetTheConcept)(z[ye].typeId);try{let fe=we.characterValue+"_reverse",Ae=ie[z[ye].ofTheConceptId];Ae&&(Array.isArray(ve[De][fe])?ve[De][fe].push(Ae):we.characterValue.includes("_s_")?(ve[De][fe]=[],ve[De][fe].push(Ae)):ve[De][fe]=Ae)}catch{}}if(_e.id!=0&&Le.id!=0&&_e.id in ie){let ve,De=(re=(H=_e.type)===null||H===void 0?void 0:H.characterValue)!==null&&re!==void 0?re:"self";z[ye].ofTheConceptId in ie?(ve=ie[z[ye].ofTheConceptId],typeof ve[De]=="string"&&(ve[De]={})):(ve={},ve[De]={},ie[z[ye].ofTheConceptId]=ve);let we=!1,fe=(yield(0,_.GetTheConcept)(z[ye].typeId)).characterValue;fe==""&&(fe=Le.characterValue,we=!0),fe==""&&(fe=(me=(le=Le?.type)===null||le===void 0?void 0:le.characterValue)!==null&&me!==void 0?me:"");try{let Ae=ie[z[ye].toTheConceptId];Ae&&(Array.isArray(ve[De])?we?ve[De].push(Ae[fe]):ve[De].push(Ae):Array.isArray(ve[De][fe])?ve[De][fe].push(Ae):fe.includes("_s_")?(ve[De][fe]=[],we?ve[De][fe].push(Ae[fe]):ve[De][fe].push(Ae)):ve[De][fe]=we?Ae[fe]:Ae)}catch{}}}for(let ye=0;ye<ce.length;ye++){let ge=ie[ce[ye]];ge?(ge.id=ce[ye],Ce.push(ge)):(yield _.ConceptsData.GetConcept(ce[ye])).id!=0&&(ge={},ge.id=ce[ye],Ce.push(ge))}return Ce})}(M,j,O,[],G)})}function y(N,B,O,G,F){return u(this,arguments,void 0,function*(M,j,W,$,K,te="DESC"){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnectionsJustId",{linkers:M,conceptIds:j,mainCompositionIds:W,reverse:$,countInfos:K,order:te})).data}catch(oe){(0,_.handleServiceWorkerException)(oe)}let ae=yield(0,L.QL)(M),z=yield(0,f.V)(K);ae=(0,C.X)(ae,te);let ie=[];return ie=yield k(ae,ie,$),ie=yield function(oe,J){return t(this,arguments,void 0,function*(ee,ne,H=[]){var re,le,me,Ce,Te,ye,ge,_e;let Le=[];for(let ve=0;ve<ee.length;ve++)Le.push(ee[ve].toTheConceptId),Le.push(ee[ve].ofTheConceptId),Le.push(ee[ve].typeId);for(let ve=0;ve<ee.length;ve++){let De=!1,we=yield(0,p.A)(ee[ve].ofTheConceptId),fe=yield(0,p.A)(ee[ve].toTheConceptId);if(H.includes(ee[ve].id)&&(De=!0),De==1&&we.id!=0&&fe.id!=0){let Ae,Ee=yield(0,p.A)(ee[ve].typeId),Ne=(le=(re=fe.type)===null||re===void 0?void 0:re.characterValue)!==null&&le!==void 0?le:"self";ee[ve].toTheConceptId in ne?(Ae=ne[ee[ve].toTheConceptId],Ne in Ae||(Ae[Ne]={})):(Ae={},Ae[Ne]={},ne[ee[ve].toTheConceptId]=Ae);try{let be=(Ce=(me=we?.type)===null||me===void 0?void 0:me.characterValue)!==null&&Ce!==void 0?Ce:"none",Re=we.characterValue,Be=Ee.characterValue;Be==""&&(Be=be,Be=r(Be));let Me={id:we.id,[be]:Re,created_on:ee[ve].entryTimeStamp},xe=Be+"_reverse";xe.includes("_s_")||(typeof Ae[Ne]=="string"&&(Ae[Ne]={}),Ae[Ne][xe]=Me)}catch{}}if(we.id!=0&&fe.id!=0){let Ae,Ee=yield(0,p.A)(ee[ve].typeId),Ne=(ye=(Te=we.type)===null||Te===void 0?void 0:Te.characterValue)!==null&&ye!==void 0?ye:"self";ee[ve].ofTheConceptId in ne?(Ae=ne[ee[ve].ofTheConceptId],Ne in Ae||(Ae[Ne]={})):(Ae={},Ae[Ne]={},ne[ee[ve].ofTheConceptId]=Ae);try{let be=(_e=(ge=fe?.type)===null||ge===void 0?void 0:ge.characterValue)!==null&&_e!==void 0?_e:"none",Re=fe.characterValue,Be=Ee.characterValue,Me=!1;Be==""&&(Be=be,Be=r(Be),Me=!0);let xe={};xe[be]={id:fe.id,data:Re,created_on:ee[ve].entryTimeStamp},isNaN(Number(Be))?Be.includes("_s_")||(typeof Ae[Ne]=="string"&&(Ae[Ne]={}),Ae[Ne][Be]=Me?xe[be]:xe):(Array.isArray(Ae[Ne])||(Ae[Ne]=[]),Ae[Ne].push(xe[be]))}catch{}}}return ne})}(ae,ie,$),yield function(oe,J,ee){return t(this,arguments,void 0,function*(ne,H,re,le=[],me){var Ce,Te,ye,ge,_e,Le,ve;new Date().getTime();let De=[],we=[];for(let fe=0;fe<ne.length;fe++)we.push(ne[fe].toTheConceptId),we.push(ne[fe].ofTheConceptId),we.push(ne[fe].typeId);for(let fe=0;fe<ne.length;fe++){let Ae=!1,Ee=yield(0,p.A)(ne[fe].ofTheConceptId),Ne=yield(0,p.A)(ne[fe].toTheConceptId);if(le.includes(ne[fe].id)&&(Ae=!0),Ae==1&&Ee.id!=0&&Ne.id!=0&&Ne.id in H){let be,Re=yield(0,p.A)(ne[fe].typeId),Be=(Te=(Ce=Ne.type)===null||Ce===void 0?void 0:Ce.characterValue)!==null&&Te!==void 0?Te:"self";ne[fe].toTheConceptId in H,ne[fe].toTheConceptId in H?(be=H[ne[fe].toTheConceptId],typeof be[Be]=="string"&&(be[Be]={})):(be={},be[Be]={},H[ne[fe].toTheConceptId]=be);try{if(H[ne[fe].ofTheConceptId]){let Me=H[ne[fe].ofTheConceptId];Me&&(Me.id=Ee.id,Me.created_on=Ee.entryTimeStamp);let xe=Re.characterValue+"_reverse";Array.isArray(be[Be][xe])?be[Be][xe].push(Me):xe.includes("_s_")?(be[Be][xe]=[],be[Be][xe].push(Me)):be[Be][xe]=Me}}catch{}}if(Ee.id!=0&&Ne.id!=0&&Ee.id in H){let be,Re=yield(0,p.A)(ne[fe].typeId),Be=(ge=(ye=Ee.type)===null||ye===void 0?void 0:ye.characterValue)!==null&&ge!==void 0?ge:"self";ne[fe].toTheConceptId in H,ne[fe].ofTheConceptId in H?(be=H[ne[fe].ofTheConceptId],typeof be[Be]=="string"&&(be[Be]={})):(be={},be[Be]={},H[ne[fe].ofTheConceptId]=be),o(Ee.id,me,be);let Me=!1,xe=Re.characterValue;xe==""&&(xe=Ne.characterValue,Me=!0),xe==""&&(xe=((_e=Ne?.type)===null||_e===void 0?void 0:_e.characterValue)||"");try{let Je=(ve=(Le=Ne?.type)===null||Le===void 0?void 0:Le.characterValue)!==null&&ve!==void 0?ve:"none",ze=H[ne[fe].toTheConceptId];if(ze){let ft={};ft[Je]={data:ze[Je],id:Ne.id,created_on:ne[fe].entryTimeStamp},Array.isArray(be[Be])?Me?be[Be].push(ze[xe]):be[Be].push(ze):Array.isArray(be[Be][xe])?be[Be][xe].push(ft):xe.includes("_s_")?(be[Be][xe]=[],Me?be[Be][xe].push(ft[Je]):be[Be][xe].push(ft)):be[Be][xe]=Me?ft[Je]:ft,o(Ne.id,me,ft)}}catch{}}}for(let fe=0;fe<re.length;fe++){let Ae={};Ae=H[re[fe]],Ae?Ae.id=re[fe]:(yield _.ConceptsData.GetConcept(re[fe])).id!=0&&(Ae={},Ae.id=re[fe]),De.push(Ae)}return De})}(ae,ie,W,$,z)})}function b(N,B,O,G,F){return u(this,arguments,void 0,function*(M,j,W,$,K,te="DESC"){try{if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnectionsDataId",{linkers:M,conceptIds:j,mainCompositionIds:W,reverse:$,countInfos:K,order:te})).data}catch(J){(0,_.handleServiceWorkerException)(J)}let ae,z;try{ae=yield(0,L.QL)(M)}catch(J){throw new Error(`Failed to prefetch connections: ${J instanceof Error?J.message:String(J)}`)}try{z=yield(0,f.V)(K)}catch(J){throw new Error(`Failed to get connection type for count: ${J instanceof Error?J.message:String(J)}`)}try{ae=(0,C.X)(ae,te)}catch(J){throw new Error(`Failed to order connections: ${J instanceof Error?J.message:String(J)}`)}let ie,ce=[],oe=[];try{ce=yield function(J,ee){var ne=arguments;return a(this,arguments,void 0,function*(H,re,le=[]){var me,Ce,Te,ye,ge,_e,Le,ve;try{const De=_.Logger.logfunction("FormatFunctionData",ne);let we=[];for(let fe=0;fe<H.length;fe++)we.push(H[fe].toTheConceptId),we.push(H[fe].ofTheConceptId),we.push(H[fe].typeId);for(let fe=0;fe<H.length;fe++)try{let Ae=!1,Ee=yield(0,_.GetTheConcept)(H[fe].ofTheConceptId),Ne=yield(0,_.GetTheConcept)(H[fe].toTheConceptId);if(le.includes(H[fe].id)&&(Ae=!0),Ae==1&&Ee.id!=0&&Ne.id!=0){let be,Re=yield(0,_.GetTheConcept)(H[fe].typeId),Be=(Ce=(me=Ne.type)===null||me===void 0?void 0:me.characterValue)!==null&&Ce!==void 0?Ce:"self";H[fe].toTheConceptId in re?be=re[H[fe].toTheConceptId]:(be={},be[Be]={},re[H[fe].toTheConceptId]=be);try{let Me=(ye=(Te=Ee?.type)===null||Te===void 0?void 0:Te.characterValue)!==null&&ye!==void 0?ye:"none",xe=Ee.characterValue;(Re.characterValue+"_reverse").includes("_s_")&&(Ee.id in re||(re[Ee.id]={}),re[Ee.id][Me]=xe),re[Ne.id]={}}catch{}}if(Ee.id!=0&&Ne.id!=0){let be,Re=yield(0,_.GetTheConcept)(H[fe].typeId),Be=(_e=(ge=Ee.type)===null||ge===void 0?void 0:ge.characterValue)!==null&&_e!==void 0?_e:"self";H[fe].ofTheConceptId in re?be=re[H[fe].ofTheConceptId]:(be={},be[Be]={},re[H[fe].ofTheConceptId]=be);try{let Me=(ve=(Le=Ne?.type)===null||Le===void 0?void 0:Le.characterValue)!==null&&ve!==void 0?ve:"none",xe=Ne.characterValue;Re.characterValue.includes("_s_")&&(Ne.id in re||(re[Ne.id]={}),re[Ne.id][Me]=xe),re[Ee.id]={}}catch{}}}catch{}return _.Logger.logUpdate(De),re}catch(De){throw De}})}(ae,ce,$)}catch(J){throw new Error(`Failed to format function data: ${J instanceof Error?J.message:String(J)}`)}try{ce=yield function(J){var ee=arguments;return a(this,arguments,void 0,function*(ne,H=[],re=[]){var le,me,Ce,Te,ye,ge,_e,Le;try{const ve=_.Logger.logfunction("FormatFunctionDataForData",ee);let De=[];for(let we=0;we<ne.length;we++)De.push(ne[we].toTheConceptId),De.push(ne[we].ofTheConceptId),De.push(ne[we].typeId);for(let we=0;we<ne.length;we++)try{let fe=!1,Ae=yield(0,_.GetTheConcept)(ne[we].ofTheConceptId),Ee=yield(0,_.GetTheConcept)(ne[we].toTheConceptId);if(re.includes(ne[we].id)&&(fe=!0),fe==1&&Ae.id!=0&&Ee.id!=0){let Ne,be=yield(0,_.GetTheConcept)(ne[we].typeId),Re=(me=(le=Ee.type)===null||le===void 0?void 0:le.characterValue)!==null&&me!==void 0?me:"self";ne[we].toTheConceptId in H?(Ne=H[ne[we].toTheConceptId],Re in Ne||(Ne[Re]={})):(Ne={},Ne[Re]={},H[ne[we].toTheConceptId]=Ne);try{let Be=(Te=(Ce=Ae?.type)===null||Ce===void 0?void 0:Ce.characterValue)!==null&&Te!==void 0?Te:"none",Me=Ae.characterValue,xe=be.characterValue;xe==""&&(xe=Be,xe=r(xe));let Je={id:Ae.id,data:{[Be]:Me}},ze=xe+"_reverse";ze.includes("_s_")||(typeof Ne[Re]=="string"&&(Ne[Re]={}),Ne[Re][ze]=Je)}catch{}}if(Ae.id!=0&&Ee.id!=0){let Ne,be=yield(0,_.GetTheConcept)(ne[we].typeId),Re=(ge=(ye=Ae.type)===null||ye===void 0?void 0:ye.characterValue)!==null&&ge!==void 0?ge:"self";ne[we].ofTheConceptId in H?(Ne=H[ne[we].ofTheConceptId],Re in Ne||(Ne[Re]={})):(Ne={},Ne[Re]={},H[ne[we].ofTheConceptId]=Ne);try{let Be=(Le=(_e=Ee?.type)===null||_e===void 0?void 0:_e.characterValue)!==null&&Le!==void 0?Le:"none",Me=Ee.characterValue,xe=be.characterValue,Je=!1;xe==""&&(xe=Be,xe=r(xe),Je=!0);let ze={id:Ee.id,data:{[Be]:Me}};isNaN(Number(xe))?xe.includes("_s_")||(typeof Ne[Re]=="string"&&(Ne[Re]={}),Ne[Re][xe]=ze):(Array.isArray(Ne[Re])||(Ne[Re]=[]),Ne[Re].push(ze))}catch{}}}catch{}return _.Logger.logUpdate(ve),H}catch(ve){throw ve}})}(ae,ce,$)}catch(J){throw new Error(`Failed to format function data for data: ${J instanceof Error?J.message:String(J)}`)}try{ie=yield function(J,ee,ne,H){var re=arguments;return a(this,arguments,void 0,function*(le,me,Ce,Te,ye=[],ge){var _e,Le,ve,De,we,fe;try{const Ae=_.Logger.logfunction("FormatFromConnectionsAlteredArrayExternal",re);let Ee=[],Ne=[];for(let be=0;be<le.length;be++)Ne.push(le[be].toTheConceptId),Ne.push(le[be].ofTheConceptId),Ne.push(le[be].typeId);for(let be=0;be<le.length;be++)try{let Re=!1,Be=yield(0,_.GetTheConcept)(le[be].ofTheConceptId),Me=yield(0,_.GetTheConcept)(le[be].toTheConceptId);if(ye.includes(le[be].id)&&(Re=!0),Re==1&&Be.id!=0&&Me.id!=0&&Me.id in me){let xe,Je=yield(0,_.GetTheConcept)(le[be].typeId),ze=(Le=(_e=Me.type)===null||_e===void 0?void 0:_e.characterValue)!==null&&Le!==void 0?Le:"self",ft=!1;le[be].toTheConceptId in me&&(ft=!0),le[be].toTheConceptId in me?(xe=me[le[be].toTheConceptId],typeof xe[ze]=="string"&&(xe[ze]={})):(xe={},xe[ze]={},me[le[be].toTheConceptId]=xe),o(Me.id,ge,xe);try{if(me[le[be].ofTheConceptId]){let Rt={id:Be.id,data:me[le[be].ofTheConceptId],created_on:le[be].entryTimeStamp},ut=Je.characterValue+"_reverse";Array.isArray(xe[ze][ut])?xe[ze][ut].push(Rt):ut.includes("_s_")?(xe[ze][ut]=[],xe[ze][ut].push(Rt)):xe[ze][ut]=Rt}}catch{}}if(Be.id!=0&&Me.id!=0&&Be.id in me){let xe,Je=yield(0,_.GetTheConcept)(le[be].typeId),ze=(De=(ve=Be.type)===null||ve===void 0?void 0:ve.characterValue)!==null&&De!==void 0?De:"self",ft=!1;le[be].toTheConceptId in me&&(ft=!0),le[be].ofTheConceptId in me?(xe=me[le[be].ofTheConceptId],typeof xe[ze]=="string"&&(xe[ze]={})):(xe={},xe[ze]={},me[le[be].ofTheConceptId]=xe),o(Be.id,ge,xe);let Rt=!0,ut=Je.characterValue;ut==""&&(ut=Me.characterValue,Rt=!0),ut==""&&(ut=((we=Me?.type)===null||we===void 0?void 0:we.characterValue)||"");try{(fe=Me?.type)===null||fe===void 0||fe.characterValue;let Gt=me[le[be].toTheConceptId];if(Gt){let bn={id:Me.id,data:me[le[be].toTheConceptId],created_on:le[be].entryTimeStamp};Array.isArray(xe[ze])?xe[ze].push(Gt):Array.isArray(xe[ze][ut])?xe[ze][Je.characterValue].push(bn):ut.includes("_s_")?(xe[ze][ut]=[],xe[ze][ut].push(bn)):xe[ze][ut]=bn,o(Me.id,ge,bn)}}catch{}}}catch{}for(let be=0;be<Te.length;be++)try{let Re={};Re.id=Te[be];let Be=yield(0,_.GetTheConcept)(Re.id);Re.data=me[Te[be]],Re.created_on=Be.entryTimeStamp,Ee.push(Re)}catch{}return _.Logger.logUpdate(Ae),Ee}catch(Ae){throw Ae}})}(ae,ce,oe,W,$,z)}catch(J){throw new Error(`Failed to format from connections altered array external: ${J instanceof Error?J.message:String(J)}`)}return ie}catch(ae){throw ae}})}function x(N,B,O,G,F){return u(this,arguments,void 0,function*(M,j,W,$,K,te="DESC"){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnectionsV2",{linkers:M,conceptIds:j,mainCompositionIds:W,reverse:$,countInfos:K,order:te})).data}catch(oe){(0,_.handleServiceWorkerException)(oe)}let ae=yield(0,L.QL)(M),z=yield(0,f.V)(K);ae=(0,C.X)(ae,te);let ie={};return ie=yield function(oe){var J=arguments;return A(this,arguments,void 0,function*(ee,ne={},H=[]){var re,le,me,Ce,Te;const ye=_.Logger.logfunction("FormatFunctionDataV2",J);for(const ge of ee){const _e=H.includes(ge.id),Le=yield(0,_.GetTheConcept)(ge.ofTheConceptId),ve=yield(0,_.GetTheConcept)(ge.toTheConceptId),De=yield(0,_.GetTheConcept)(ge.typeId);if(Le.id===0||ve.id===0)continue;const we=_e?ve:Le,fe=_e?Le:ve,Ae=(le=(re=we.type)===null||re===void 0?void 0:re.characterValue)!==null&&le!==void 0?le:"self",Ee=(Ce=(me=fe.type)===null||me===void 0?void 0:me.characterValue)!==null&&Ce!==void 0?Ce:"none",Ne=fe.characterValue;(Te=De.characterValue)===null||Te===void 0||Te.includes("_s_"),ne[we.id]||(ne[we.id]={}),ne[we.id][Ae]||(ne[we.id][Ae]={}),ne[fe.id]||(ne[fe.id]={}),ne[fe.id][Ee]=Ne}return _.Logger.logUpdate(ye),ne})}(ae,ie,$),ie=yield function(oe){var J=arguments;return A(this,arguments,void 0,function*(ee,ne={},H=[]){var re,le,me,Ce,Te;const ye=_.Logger.logfunction("FormatFunctionDataForDataV2",J);for(const ge of ee){const _e=H.includes(ge.id),Le=yield(0,_.GetTheConcept)(ge.ofTheConceptId),ve=yield(0,_.GetTheConcept)(ge.toTheConceptId),De=yield(0,_.GetTheConcept)(ge.typeId);if(Le.id===0||ve.id===0)continue;const we=_e?ve:Le,fe=_e?Le:ve,Ae=(le=(re=we.type)===null||re===void 0?void 0:re.characterValue)!==null&&le!==void 0?le:"self",Ee=(Ce=(me=fe.type)===null||me===void 0?void 0:me.characterValue)!==null&&Ce!==void 0?Ce:"none",Ne=fe.characterValue,be=(Te=De.characterValue)!==null&&Te!==void 0?Te:"";let Re=be===""?r(Ee):be;const Be=Re.includes("_s_"),Me=!isNaN(Number(Re)),xe={id:fe.id,data:{[Ee]:Ne}};ne[we.id]||(ne[we.id]={}),Ae in ne[we.id]&&typeof ne[we.id][Ae]!="string"||(ne[we.id][Ae]=Me?[]:{});try{if(Be)continue;Me?ne[we.id][Ae].push(xe):ne[we.id][Ae][_e?`${Re}_reverse`:Re]=xe}catch{}}return _.Logger.logUpdate(ye),ne})}(ae,ie,$),yield function(oe,J,ee){var ne=arguments;return A(this,arguments,void 0,function*(H,re,le,me=[],Ce){var Te,ye,ge;const _e=_.Logger.logfunction("FormatFromConnectionsAlteredArrayExternal",ne),Le=[];for(const ve of H){const De=me.includes(ve.id),we=yield(0,_.GetTheConcept)(ve.ofTheConceptId),fe=yield(0,_.GetTheConcept)(ve.toTheConceptId),Ae=yield(0,_.GetTheConcept)(ve.typeId);if(we.id===0||fe.id===0)continue;const Ee=De?fe:we,Ne=De?we:fe,be=Ee.id,Re=Ne.id,Be=(ye=(Te=Ee.type)===null||Te===void 0?void 0:Te.characterValue)!==null&&ye!==void 0?ye:"self",Me=Ae.characterValue+"_reverse",xe=Ae.characterValue||Ne.characterValue||((ge=Ne.type)===null||ge===void 0?void 0:ge.characterValue)||"";if(re[be]){const Je=re[be][Be],ze=re[Re],ft={id:Ne.id,data:ze,created_on:ve.entryTimeStamp};o(be,Ce,re[be]);try{De?Array.isArray(Je[Me])?Je[Me].push(ft):Je[Me]=[ft]:Array.isArray(Je)?Je.push(ze):Array.isArray(Je[xe])?Je[xe].push(ft):xe.includes("_s_")?(Je[xe]=[],Je[xe].push(ft)):Je[xe]=[ft],o(Re,Ce,ft)}catch{}}}for(const ve of le){const De=yield(0,_.GetTheConcept)(ve);Le.push({id:ve,data:re[ve],created_on:De.entryTimeStamp})}return _.Logger.logUpdate(_e),Le})}(ae,ie,W,$,z)})}},3152:(Y,R,v)=>{let _=v(3614),L=v(7668),r=v(3303),{isClean:h,my:k}=v(4151);function w(o,a){let f=new o.constructor;for(let C in o){if(!Object.prototype.hasOwnProperty.call(o,C)||C==="proxyCache")continue;let A=o[C],u=typeof A;C==="parent"&&u==="object"?a&&(f[C]=a):C==="source"?f[C]=A:Array.isArray(A)?f[C]=A.map(c=>w(c,f)):(u==="object"&&A!==null&&(A=w(A)),f[C]=A)}return f}function p(o,a){if(a&&a.offset!==void 0)return a.offset;let f=1,C=1,A=0;for(let u=0;u<o.length;u++){if(C===a.line&&f===a.column){A=u;break}o[u]===`
`?(f=1,C+=1):f+=1}return A}class t{get proxyOf(){return this}constructor(a={}){this.raws={},this[h]=!1,this[k]=!0;for(let f in a)if(f==="nodes"){this.nodes=[];for(let C of a[f])typeof C.clone=="function"?this.append(C.clone()):this.append(C)}else this[f]=a[f]}addToError(a){if(a.postcssNode=this,a.stack&&this.source&&/\n\s{4}at /.test(a.stack)){let f=this.source;a.stack=a.stack.replace(/\n\s{4}at /,`$&${f.input.from}:${f.start.line}:${f.start.column}$&`)}return a}after(a){return this.parent.insertAfter(this,a),this}assign(a={}){for(let f in a)this[f]=a[f];return this}before(a){return this.parent.insertBefore(this,a),this}cleanRaws(a){delete this.raws.before,delete this.raws.after,a||delete this.raws.between}clone(a={}){let f=w(this);for(let C in a)f[C]=a[C];return f}cloneAfter(a={}){let f=this.clone(a);return this.parent.insertAfter(this,f),f}cloneBefore(a={}){let f=this.clone(a);return this.parent.insertBefore(this,f),f}error(a,f={}){if(this.source){let{end:C,start:A}=this.rangeBy(f);return this.source.input.error(a,{column:A.column,line:A.line},{column:C.column,line:C.line},f)}return new _(a)}getProxyProcessor(){return{get:(a,f)=>f==="proxyOf"?a:f==="root"?()=>a.root().toProxy():a[f],set:(a,f,C)=>(a[f]===C||(a[f]=C,f!=="prop"&&f!=="value"&&f!=="name"&&f!=="params"&&f!=="important"&&f!=="text"||a.markDirty()),!0)}}markClean(){this[h]=!0}markDirty(){if(this[h]){this[h]=!1;let a=this;for(;a=a.parent;)a[h]=!1}}next(){if(!this.parent)return;let a=this.parent.index(this);return this.parent.nodes[a+1]}positionBy(a={}){let f=this.source.start;if(a.index)f=this.positionInside(a.index);else if(a.word){let C="document"in this.source.input?this.source.input.document:this.source.input.css,A=C.slice(p(C,this.source.start),p(C,this.source.end)).indexOf(a.word);A!==-1&&(f=this.positionInside(A))}return f}positionInside(a){let f=this.source.start.column,C=this.source.start.line,A="document"in this.source.input?this.source.input.document:this.source.input.css,u=p(A,this.source.start),c=u+a;for(let i=u;i<c;i++)A[i]===`
`?(f=1,C+=1):f+=1;return{column:f,line:C,offset:c}}prev(){if(!this.parent)return;let a=this.parent.index(this);return this.parent.nodes[a-1]}rangeBy(a={}){let f="document"in this.source.input?this.source.input.document:this.source.input.css,C={column:this.source.start.column,line:this.source.start.line,offset:p(f,this.source.start)},A=this.source.end?{column:this.source.end.column+1,line:this.source.end.line,offset:typeof this.source.end.offset=="number"?this.source.end.offset:p(f,this.source.end)+1}:{column:C.column+1,line:C.line,offset:C.offset+1};if(a.word){let u=f.slice(p(f,this.source.start),p(f,this.source.end)).indexOf(a.word);u!==-1&&(C=this.positionInside(u),A=this.positionInside(u+a.word.length))}else a.start?C={column:a.start.column,line:a.start.line,offset:p(f,a.start)}:a.index&&(C=this.positionInside(a.index)),a.end?A={column:a.end.column,line:a.end.line,offset:p(f,a.end)}:typeof a.endIndex=="number"?A=this.positionInside(a.endIndex):a.index&&(A=this.positionInside(a.index+1));return(A.line<C.line||A.line===C.line&&A.column<=C.column)&&(A={column:C.column+1,line:C.line,offset:C.offset+1}),{end:A,start:C}}raw(a,f){return new L().raw(this,a,f)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...a){if(this.parent){let f=this,C=!1;for(let A of a)A===this?C=!0:C?(this.parent.insertAfter(f,A),f=A):this.parent.insertBefore(f,A);C||this.remove()}return this}root(){let a=this;for(;a.parent&&a.parent.type!=="document";)a=a.parent;return a}toJSON(a,f){let C={},A=f==null;f=f||new Map;let u=0;for(let c in this){if(!Object.prototype.hasOwnProperty.call(this,c)||c==="parent"||c==="proxyCache")continue;let i=this[c];if(Array.isArray(i))C[c]=i.map(d=>typeof d=="object"&&d.toJSON?d.toJSON(null,f):d);else if(typeof i=="object"&&i.toJSON)C[c]=i.toJSON(null,f);else if(c==="source"){if(i==null)continue;let d=f.get(i.input);d==null&&(d=u,f.set(i.input,u),u++),C[c]={end:i.end,inputId:d,start:i.start}}else C[c]=i}return A&&(C.inputs=[...f.keys()].map(c=>c.toJSON())),C}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(a=r){a.stringify&&(a=a.stringify);let f="";return a(this,C=>{f+=C}),f}warn(a,f,C={}){let A={node:this};for(let u in C)A[u]=C[u];return a.warn(f,A)}}Y.exports=t,t.default=t},3229:(Y,R,v)=>{v.d(R,{q:()=>h});var _=v(4990),L=v(7015),r=v(5760);function h(k,w,p,t){var o=w,a=new _.N(0,k,p,o,t,1,4);if(k==p)return a.ofTheConceptId=0,a.toTheConceptId=1,a;try{a.isTemp=!0,a.id=Math.floor(1e8*Math.random()),L.Y.AddConnection(a)}catch(f){(0,r.Mb)(f)}return a}},3246:(Y,R,v)=>{v.d(R,{D:()=>y,MT:()=>g,Nt:()=>C,QL:()=>c,as:()=>A,cw:()=>o,dF:()=>t,hG:()=>u,km:()=>f,nr:()=>d,p8:()=>a,rv:()=>i});var _=v(6797),L=v(4622),r=v(4244),h=v(5760),k=v(4437),w=v(4174),p=function(b,x,N,B){return new(N||(N=Promise))(function(O,G){function F(W){try{j(B.next(W))}catch($){G($)}}function M(W){try{j(B.throw(W))}catch($){G($)}}function j(W){var $;W.done?O(W.value):($=W.value,$ instanceof N?$:new N(function(K){K($)})).then(F,M)}j((B=B.apply(b,x||[])).next())})};function t(){return p(this,arguments,void 0,function*(b=[]){yield(0,_.Y)(b);let x=[];for(let N=0;N<b.length;N++){let B=yield(0,w.kx)(b[N]);x.push(B)}return x})}function o(){return p(this,arguments,void 0,function*(b=[]){yield(0,_.Y)(b);let x=[];for(let N=0;N<b.length;N++){let B=yield(0,w.RW)(b[N]);x.push(B)}return x})}function a(){return p(this,arguments,void 0,function*(b=[],x=[]){const N=r.Logger.logfunction("GetCompositionFromConnectionsWithDataId",[b])||{};if(r.serviceWorker){N.serviceWorker=!0;try{const O=yield(0,r.sendMessage)("GetCompositionFromConnectionsWithDataId",{conceptIds:b,connectionIds:x});return r.Logger.logUpdate(N),O.data}catch(O){(0,h.ey)(N,"GetCompositionFromConnectionsWithDataId",O),(0,r.handleServiceWorkerException)(O)}}let B=[];yield(0,r.GetConceptBulk)(b);for(let O=0;O<b.length;O++){let G=yield(0,w.RW)(b[O]);B.push(G)}return r.Logger.logUpdate(N),B})}function f(){var b=arguments;return p(this,arguments,void 0,function*(x=[],N=[]){const B=r.Logger.logfunction("GetCompositionFromConnectionsWithDataIdFromConnections",b)||{};if(r.serviceWorker){B.serviceWorker=!0;try{const F=yield(0,r.sendMessage)("GetCompositionFromConnectionsWithDataIdFromConnections",{conceptIds:x,connectionIds:N});return r.Logger.logUpdate(B),F.data}catch(F){(0,h.ey)(B,"GetCompositionFromConnectionsWithDataIdFromConnections",F),(0,r.handleServiceWorkerException)(F)}}let O=yield(0,L.j)(N);yield(0,r.GetConceptBulk)(x);let G=[];for(let F=0;F<x.length;F++){let M=yield(0,w.PT)(x[F],O);G.push(M)}return r.Logger.logUpdate(B),G})}function C(){var b=arguments;return p(this,arguments,void 0,function*(x=[],N=[]){const B=r.Logger.logfunction("GetCompositionFromConnectionsWithDataIdIndex",b)||{};if(r.serviceWorker){B.serviceWorker=!0;try{const G=yield(0,r.sendMessage)("GetCompositionFromConnectionsWithDataIdIndex",{conceptIds:x,connectionIds:N});return r.Logger.logUpdate(B),G.data}catch(G){(0,h.ey)(B,"GetCompositionFromConnectionsWithDataIdIndex",G),(0,r.handleServiceWorkerException)(G)}}yield(0,L.j)(N),yield(0,k.B)(x);let O={};for(let G=0;G<x.length;G++){let F=yield(0,w.RW)(x[G]);O[x[G]]=F}return r.Logger.logUpdate(B),O})}function A(){return p(this,arguments,void 0,function*(b=[],x=[]){yield(0,L.j)(x),yield(0,k.B)(b);let N={};for(let B=0;B<b.length;B++){let O=yield(0,w.kx)(b[B]);N[b[B]]=O}return N})}function u(){return p(this,arguments,void 0,function*(b=[],x=[]){if(r.serviceWorker)try{return(yield(0,r.sendMessage)("GetCompositionFromConnectionsWithIndexFromConnections",{conceptIds:b,connectionIds:x})).data}catch(O){(0,r.handleServiceWorkerException)(O)}let N=yield(0,L.j)(x),B=[];for(let O=0;O<b.length;O++){let G=yield(0,w.JA)(b[O],N);B[b[O]]=G}return B})}function c(b){var x=arguments;return p(this,void 0,void 0,function*(){const N=r.Logger.logfunction("GetConnectionDataPrefetch",x)||{};if(r.serviceWorker){N.serviceWorker=!0;try{const W=yield(0,r.sendMessage)("GetConnectionDataPrefetch",{connectionIds:b});return r.Logger.logUpdate(N),W.data}catch(W){(0,h.ey)(N,"GetConnectionDataPrefetch",W),(0,r.handleServiceWorkerException)(W)}}const B=yield Promise.all(b.map(W=>r.ConnectionData.GetConnection(W))),O=[],G=[];for(let W=0;W<B.length;W++){const $=B[W];$?.id===0?G.push(b[W]):O.push($)}const F=yield(0,L.j)(G),M=[...O,...F],j=new Set;for(const W of M)j.add(W.ofTheConceptId),j.add(W.toTheConceptId),j.add(W.typeId);return yield(0,r.GetConceptBulk)([...j]),r.Logger.logUpdate(N),M})}function i(){var b=arguments;return p(this,arguments,void 0,function*(x=[],N=[]){const B=r.Logger.logfunction("GetCompositionFromConnectionsWithDataIdInObject",b);yield(0,L.j)(N);let O={};for(let G=0;G<x.length;G++){let F=yield(0,w.RW)(x[G]);O[x[G]]=F}return r.Logger.logUpdate(B),O})}function d(){return p(this,arguments,void 0,function*(b=[],x=[]){yield(0,L.j)(x);let N={};for(let B=0;B<b.length;B++){let O=yield(0,w.$N)(b[B]);N[b[B]]=O}return N})}function g(){return p(this,arguments,void 0,function*(b=[],x=[]){yield(0,L.j)(x);let N={};for(let B=0;B<b.length;B++){let O=yield(0,w.kx)(b[B]);N[b[B]]=O}return N})}function y(){return p(this,arguments,void 0,function*(b=[],x=[]){yield(0,L.j)(x);let N={};for(let B=0;B<b.length;B++){let O=yield(0,w.XI)(b[B]);N[b[B]]=O}return N})}},3295:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _=r(v(8937)),L=v(9606);function r(p){return p&&p.__esModule?p:{default:p}}function h(p,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function k(p,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},k(p,t)}var w=function(p){var t,o;function a(){return p.apply(this,arguments)||this}o=p,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,k(t,o);var f,C,A=a.prototype;return A.qualifiedName=function(u){return this.namespace?this.namespaceString+"|"+u:u},A.valueToString=function(){return this.qualifiedName(p.prototype.valueToString.call(this))},f=a,(C=[{key:"namespace",get:function(){return this._namespace},set:function(u){if(u===!0||u==="*"||u==="&")return this._namespace=u,void(this.raws&&delete this.raws.namespace);var c=(0,_.default)(u,{isIdentifier:!0});this._namespace=u,c!==u?((0,L.ensureObject)(this,"raws"),this.raws.namespace=c):this.raws&&delete this.raws.namespace}},{key:"ns",get:function(){return this._namespace},set:function(u){this.namespace=u}},{key:"namespaceString",get:function(){if(this.namespace){var u=this.stringifyProperty("namespace");return u===!0?"":u}return""}}])&&h(f.prototype,C),Object.defineProperty(f,"prototype",{writable:!1}),a}(r(v(4646)).default);R.default=w,Y.exports=R.default},3303:(Y,R,v)=>{let _=v(7668);function L(r,h){new _(h).stringify(r)}Y.exports=L,L.default=L},3379:(Y,R,v)=>{v.d(R,{$I:()=>k,Ay:()=>h});var _=v(7154),L=(v(370),v(1317),v(4244));v(5760);var r=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,[])).next())})};function h(w){return r(this,void 0,void 0,function*(){return yield _.v.GetConceptByCharacterAndTypeLocal(w,51)})}function k(w){return r(this,void 0,void 0,function*(){if(L.serviceWorker)try{return(yield(0,L.sendMessage)("GetConceptByCharacterAndCategoryLocal",{character:w})).data}catch(o){(0,L.handleServiceWorkerException)(o)}let p=(0,L.CreateDefaultLConcept)();if(w=="the")return p.id=1,p.typeId=5,p.characterValue="the",p;let t=(0,L.SplitStrings)(w);if(t.length>1){let o=1,a=yield k(t[0]);a.id!=0&&(o=a.id),p=yield function(f,C){return r(this,void 0,void 0,function*(){return _.v.GetConceptByCharacterAndCategoryLocal(f,C)})}(w,o)}else t[0]==w&&(p=yield h(w));return p})}},3424:(Y,R,v)=>{v.d(R,{$:()=>t});var _=v(3890),L=v(3379),r=v(8206),h=v(6832),k=v(4244),w=v(5760),p=function(o,a,f,C){return new(f||(f=Promise))(function(A,u){function c(g){try{d(C.next(g))}catch(y){u(y)}}function i(g){try{d(C.throw(g))}catch(y){u(y)}}function d(g){var y;g.done?A(g.value):(y=g.value,y instanceof f?y:new f(function(b){b(y)})).then(c,i)}d((C=C.apply(o,a||[])).next())})};function t(o,a,f,C){var A=arguments;return p(this,arguments,void 0,function*(u,c,i,d,g={concepts:[],connections:[]}){var y,b,x,N;const B=k.Logger.logfunction("MakeTheTypeConceptLocal",A)||{};if(k.serviceWorker){B.serviceWorker=!0;try{const G=yield(0,k.sendMessage)("MakeTheTypeConceptLocal",{typeString:u,sessionId:c,sessionUserId:i,userId:d,actions:g});return!((b=(y=G?.actions)===null||y===void 0?void 0:y.concepts)===null||b===void 0)&&b.length&&(g.concepts=JSON.parse(JSON.stringify(G.actions.concepts))),!((N=(x=G?.actions)===null||x===void 0?void 0:x.connections)===null||N===void 0)&&N.length&&(g.connections=JSON.parse(JSON.stringify(G.actions.connections))),k.Logger.logUpdate(B),G.data}catch(G){(0,w.ey)(B,"MakeTheTypeConceptLocal",G),(0,k.handleServiceWorkerException)(G)}}let O=yield(0,L.$I)(u);if(O&&(O.id==0||O.userId==0)){let G=(0,r.f)(u);if(G[0]==u)O=yield(0,h.A)(u,"the",d,1,51,g);else{let F=yield t(G[0],c,i,d,g),M=yield t(G[1],c,i,d,g);O=yield(0,_.A)(u,G[1],d,F.id,M.id,4,void 0,null,g)}}return k.Logger.logUpdate(B),O})}},3438:(Y,R,v)=>{let _=v(396),L=v(9371),r=v(5238),h=v(1106),k=v(3878),w=v(5644),p=v(1534);function t(o,a){if(Array.isArray(o))return o.map(A=>t(A));let{inputs:f,...C}=o;if(f){a=[];for(let A of f){let u={...A,__proto__:h.prototype};u.map&&(u.map={...u.map,__proto__:k.prototype}),a.push(u)}}if(C.nodes&&(C.nodes=o.nodes.map(A=>t(A,a))),C.source){let{inputId:A,...u}=C.source;C.source=u,A!=null&&(C.source.input=a[A])}if(C.type==="root")return new w(C);if(C.type==="decl")return new r(C);if(C.type==="rule")return new p(C);if(C.type==="comment")return new L(C);if(C.type==="atrule")return new _(C);throw new Error("Unknown node type: "+o.type)}Y.exports=t,t.default=t},3604:(Y,R,v)=>{let{dirname:_,relative:L,resolve:r,sep:h}=v(197),{SourceMapConsumer:k,SourceMapGenerator:w}=v(1866),{pathToFileURL:p}=v(2739),t=v(1106),o=!!(k&&w),a=!!(_&&r&&L&&h);Y.exports=class{constructor(f,C,A,u){this.stringify=f,this.mapOpts=A.map||{},this.root=C,this.opts=A,this.css=u,this.originalCSS=u,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let f;f=this.isInline()?"data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?this.mapOpts.annotation(this.opts.to,this.root):this.outputFile()+".map";let C=`
`;this.css.includes(`\r
`)&&(C=`\r
`),this.css+=C+"/*# sourceMappingURL="+f+" */"}applyPrevMaps(){for(let f of this.previous()){let C,A=this.toUrl(this.path(f.file)),u=f.root||_(f.file);this.mapOpts.sourcesContent===!1?(C=new k(f.text),C.sourcesContent&&(C.sourcesContent=null)):C=f.consumer(),this.map.applySourceMap(C,A,this.toUrl(this.path(u)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let f;for(let C=this.root.nodes.length-1;C>=0;C--)f=this.root.nodes[C],f.type==="comment"&&f.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(C)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),a&&o&&this.isMap())return this.generateMap();{let f="";return this.stringify(this.root,C=>{f+=C}),[f]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let f=this.previous()[0].consumer();f.file=this.outputFile(),this.map=w.fromSourceMap(f,{ignoreInvalidMapping:!0})}else this.map=new w({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new w({file:this.outputFile(),ignoreInvalidMapping:!0});let f,C,A=1,u=1,c="<no source>",i={generated:{column:0,line:0},original:{column:0,line:0},source:""};this.stringify(this.root,(d,g,y)=>{if(this.css+=d,g&&y!=="end"&&(i.generated.line=A,i.generated.column=u-1,g.source&&g.source.start?(i.source=this.sourcePath(g),i.original.line=g.source.start.line,i.original.column=g.source.start.column-1,this.map.addMapping(i)):(i.source=c,i.original.line=1,i.original.column=0,this.map.addMapping(i))),C=d.match(/\n/g),C?(A+=C.length,f=d.lastIndexOf(`
`),u=d.length-f):u+=d.length,g&&y!=="start"){let b=g.parent||{raws:{}};(g.type==="decl"||g.type==="atrule"&&!g.nodes)&&g===b.last&&!b.raws.semicolon||(g.source&&g.source.end?(i.source=this.sourcePath(g),i.original.line=g.source.end.line,i.original.column=g.source.end.column-1,i.generated.line=A,i.generated.column=u-2,this.map.addMapping(i)):(i.source=c,i.original.line=1,i.original.column=0,i.generated.line=A,i.generated.column=u-1,this.map.addMapping(i)))}})}isAnnotation(){return!!this.isInline()||(this.mapOpts.annotation!==void 0?this.mapOpts.annotation:!this.previous().length||this.previous().some(f=>f.annotation))}isInline(){if(this.mapOpts.inline!==void 0)return this.mapOpts.inline;let f=this.mapOpts.annotation;return(f===void 0||f===!0)&&(!this.previous().length||this.previous().some(C=>C.inline))}isMap(){return this.opts.map!==void 0?!!this.opts.map:this.previous().length>0}isSourcesContent(){return this.mapOpts.sourcesContent!==void 0?this.mapOpts.sourcesContent:!this.previous().length||this.previous().some(f=>f.withContent())}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(f){if(this.mapOpts.absolute||f.charCodeAt(0)===60||/^\w+:\/\//.test(f))return f;let C=this.memoizedPaths.get(f);if(C)return C;let A=this.opts.to?_(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(A=_(r(A,this.mapOpts.annotation)));let u=L(A,f);return this.memoizedPaths.set(f,u),u}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(f=>{if(f.source&&f.source.input.map){let C=f.source.input.map;this.previousMaps.includes(C)||this.previousMaps.push(C)}});else{let f=new t(this.originalCSS,this.opts);f.map&&this.previousMaps.push(f.map)}return this.previousMaps}setSourcesContent(){let f={};if(this.root)this.root.walk(C=>{if(C.source){let A=C.source.input.from;if(A&&!f[A]){f[A]=!0;let u=this.usesFileUrls?this.toFileUrl(A):this.toUrl(this.path(A));this.map.setSourceContent(u,C.source.input.css)}}});else if(this.css){let C=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(C,this.css)}}sourcePath(f){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(f.source.input.from):this.toUrl(this.path(f.source.input.from))}toBase64(f){return Buffer?Buffer.from(f).toString("base64"):window.btoa(unescape(encodeURIComponent(f)))}toFileUrl(f){let C=this.memoizedFileURLs.get(f);if(C)return C;if(p){let A=p(f).toString();return this.memoizedFileURLs.set(f,A),A}throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(f){let C=this.memoizedURLs.get(f);if(C)return C;h==="\\"&&(f=f.replace(/\\/g,"/"));let A=encodeURI(f).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(f,A),A}}},3614:(Y,R,v)=>{let _=v(8633),L=v(9746);class r extends Error{constructor(k,w,p,t,o,a){super(k),this.name="CssSyntaxError",this.reason=k,o&&(this.file=o),t&&(this.source=t),a&&(this.plugin=a),w!==void 0&&p!==void 0&&(typeof w=="number"?(this.line=w,this.column=p):(this.line=w.line,this.column=w.column,this.endLine=p.line,this.endColumn=p.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,r)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",this.line!==void 0&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(k){if(!this.source)return"";let w=this.source;k==null&&(k=_.isColorSupported);let p=u=>u,t=u=>u,o=u=>u;if(k){let{bold:u,gray:c,red:i}=_.createColors(!0);t=d=>u(i(d)),p=d=>c(d),L&&(o=d=>L(d))}let a=w.split(/\r?\n/),f=Math.max(this.line-3,0),C=Math.min(this.line+2,a.length),A=String(C).length;return a.slice(f,C).map((u,c)=>{let i=f+1+c,d=" "+(" "+i).slice(-A)+" | ";if(i===this.line){if(u.length>160){let y=20,b=Math.max(0,this.column-y),x=Math.max(this.column+y,this.endColumn+y),N=u.slice(b,x),B=p(d.replace(/\d/g," "))+u.slice(0,Math.min(this.column-1,y-1)).replace(/[^\t]/g," ");return t(">")+p(d)+o(N)+`
 `+B+t("^")}let g=p(d.replace(/\d/g," "))+u.slice(0,this.column-1).replace(/[^\t]/g," ");return t(">")+p(d)+o(u)+`
 `+g+t("^")}return" "+p(d)+o(u)}).join(`
`)}toString(){let k=this.showSourceCode();return k&&(k=`

`+k+`
`),this.name+": "+this.message+k}}Y.exports=r,r.default=r},3631:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(4646))&&_.__esModule?_:{default:_},r=function(a,f){if(a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var C=h(f);if(C&&C.has(a))return C.get(a);var A={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in a)if(c!=="default"&&Object.prototype.hasOwnProperty.call(a,c)){var i=u?Object.getOwnPropertyDescriptor(a,c):null;i&&(i.get||i.set)?Object.defineProperty(A,c,i):A[c]=a[c]}return A.default=a,C&&C.set(a,A),A}(v(1581));function h(a){if(typeof WeakMap!="function")return null;var f=new WeakMap,C=new WeakMap;return(h=function(A){return A?C:f})(a)}function k(a,f){var C=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(C)return(C=C.call(a)).next.bind(C);if(Array.isArray(a)||(C=function(u,c){if(u){if(typeof u=="string")return w(u,c);var i=Object.prototype.toString.call(u).slice(8,-1);if(i==="Object"&&u.constructor&&(i=u.constructor.name),i==="Map"||i==="Set")return Array.from(u);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return w(u,c)}}(a))||f){C&&(a=C);var A=0;return function(){return A>=a.length?{done:!0}:{done:!1,value:a[A++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(a,f){(f==null||f>a.length)&&(f=a.length);for(var C=0,A=new Array(f);C<f;C++)A[C]=a[C];return A}function p(a,f){for(var C=0;C<f.length;C++){var A=f[C];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(a,A.key,A)}}function t(a,f){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(C,A){return C.__proto__=A,C},t(a,f)}var o=function(a){var f,C;function A(d){var g;return(g=a.call(this,d)||this).nodes||(g.nodes=[]),g}C=a,(f=A).prototype=Object.create(C.prototype),f.prototype.constructor=f,t(f,C);var u,c,i=A.prototype;return i.append=function(d){return d.parent=this,this.nodes.push(d),this},i.prepend=function(d){for(var g in d.parent=this,this.nodes.unshift(d),this.indexes)this.indexes[g]++;return this},i.at=function(d){return this.nodes[d]},i.index=function(d){return typeof d=="number"?d:this.nodes.indexOf(d)},i.removeChild=function(d){var g;for(var y in d=this.index(d),this.at(d).parent=void 0,this.nodes.splice(d,1),this.indexes)(g=this.indexes[y])>=d&&(this.indexes[y]=g-1);return this},i.removeAll=function(){for(var d,g=k(this.nodes);!(d=g()).done;)d.value.parent=void 0;return this.nodes=[],this},i.empty=function(){return this.removeAll()},i.insertAfter=function(d,g){var y;g.parent=this;for(var b,x=this.index(d),N=[],B=2;B<arguments.length;B++)N.push(arguments[B]);for(var O in(y=this.nodes).splice.apply(y,[x+1,0,g].concat(N)),g.parent=this,this.indexes)x<(b=this.indexes[O])&&(this.indexes[O]=b+arguments.length-1);return this},i.insertBefore=function(d,g){var y;g.parent=this;for(var b,x=this.index(d),N=[],B=2;B<arguments.length;B++)N.push(arguments[B]);for(var O in(y=this.nodes).splice.apply(y,[x,0,g].concat(N)),g.parent=this,this.indexes)(b=this.indexes[O])>=x&&(this.indexes[O]=b+arguments.length-1);return this},i._findChildAtPosition=function(d,g){var y=void 0;return this.each(function(b){if(b.atPosition){var x=b.atPosition(d,g);if(x)return y=x,!1}else if(b.isAtPosition(d,g))return y=b,!1}),y},i.atPosition=function(d,g){return this.isAtPosition(d,g)?this._findChildAtPosition(d,g)||this:void 0},i._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},i.each=function(d){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var g=this.lastEach;if(this.indexes[g]=0,this.length){for(var y,b;this.indexes[g]<this.length&&(y=this.indexes[g],(b=d(this.at(y),y))!==!1);)this.indexes[g]+=1;return delete this.indexes[g],b!==!1&&void 0}},i.walk=function(d){return this.each(function(g,y){var b=d(g,y);if(b!==!1&&g.length&&(b=g.walk(d)),b===!1)return!1})},i.walkAttributes=function(d){var g=this;return this.walk(function(y){if(y.type===r.ATTRIBUTE)return d.call(g,y)})},i.walkClasses=function(d){var g=this;return this.walk(function(y){if(y.type===r.CLASS)return d.call(g,y)})},i.walkCombinators=function(d){var g=this;return this.walk(function(y){if(y.type===r.COMBINATOR)return d.call(g,y)})},i.walkComments=function(d){var g=this;return this.walk(function(y){if(y.type===r.COMMENT)return d.call(g,y)})},i.walkIds=function(d){var g=this;return this.walk(function(y){if(y.type===r.ID)return d.call(g,y)})},i.walkNesting=function(d){var g=this;return this.walk(function(y){if(y.type===r.NESTING)return d.call(g,y)})},i.walkPseudos=function(d){var g=this;return this.walk(function(y){if(y.type===r.PSEUDO)return d.call(g,y)})},i.walkTags=function(d){var g=this;return this.walk(function(y){if(y.type===r.TAG)return d.call(g,y)})},i.walkUniversals=function(d){var g=this;return this.walk(function(y){if(y.type===r.UNIVERSAL)return d.call(g,y)})},i.split=function(d){var g=this,y=[];return this.reduce(function(b,x,N){var B=d.call(g,x);return y.push(x),B?(b.push(y),y=[]):N===g.length-1&&b.push(y),b},[])},i.map=function(d){return this.nodes.map(d)},i.reduce=function(d,g){return this.nodes.reduce(d,g)},i.every=function(d){return this.nodes.every(d)},i.some=function(d){return this.nodes.some(d)},i.filter=function(d){return this.nodes.filter(d)},i.sort=function(d){return this.nodes.sort(d)},i.toString=function(){return this.map(String).join("")},u=A,(c=[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}])&&p(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),A}(L.default);R.default=o,Y.exports=R.default},3693:(Y,R,v)=>{v.d(R,{g:()=>k});var _=v(4244),L=v(8444),r=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,[])).next())})};function h(){const w=_.BaseUrl.NODE_CACHE_URL;let p=_.BaseUrl.BASE_APPLICATION+"_cacheServers";if(w===_.BaseUrl.BASE_URL)throw new Error("Base Server Down");let t=function(a){try{const f=sessionStorage.getItem(a),C=JSON.parse(f??"[]");return Array.isArray(C)?C:[]}catch{return[]}}(p);const o=t.indexOf(w);if(_.BaseUrl.isNearestCache=!1,t.includes(w)&&o!==-1&&t.splice(o,1),sessionStorage.setItem(p,JSON.stringify(t)),t.length){const a=t[0];_.BaseUrl.NODE_CACHE_URL=a}else _.BaseUrl.NODE_CACHE_URL=_.BaseUrl.BASE_URL;typeof navigator<"u"&&navigator.serviceWorker&&navigator.serviceWorker.controller&&(0,_.sendMessage)("SESSION_DATA",{type:"SESSION_DATA",data:_.BaseUrl.NODE_CACHE_URL,session:L.b.sessionId})}function k(w,p){return r(this,void 0,void 0,function*(){if(typeof self<"u"&&typeof ServiceWorkerGlobalScope<"u"&&self instanceof ServiceWorkerGlobalScope)throw new Error("Cannot switch server from service worker");try{h();try{return yield fetch(`${_.BaseUrl.NODE_CACHE_URL}${p}`,w)}catch{return yield k(w,p)}}catch(t){throw t}})}},3717:(Y,R,v)=>{let _=v(38);class L{get content(){return this.css}constructor(h,k,w){this.processor=h,this.messages=[],this.root=k,this.opts=w,this.css="",this.map=void 0}toString(){return this.css}warn(h,k={}){k.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(k.plugin=this.lastPlugin.postcssPlugin);let w=new _(h,k);return this.messages.push(w),w}warnings(){return this.messages.filter(h=>h.type==="warning")}}Y.exports=L,L.default=L},3726:(Y,R,v)=>{v.d(R,{F:()=>p,d:()=>t});var _=v(4990),L=v(3967),r=v(198),h=v(9097),k=v(4244),w=function(o,a,f,C){return new(f||(f=Promise))(function(A,u){function c(g){try{d(C.next(g))}catch(y){u(y)}}function i(g){try{d(C.throw(g))}catch(y){u(y)}}function d(g){var y;g.done?A(g.value):(y=g.value,y instanceof f?y:new f(function(b){b(y)})).then(c,i)}d((C=C.apply(o,a||[])).next())})};function p(o,a,f){return w(this,arguments,void 0,function*(C,A,u,c=1,i="",d=999,g={concepts:[],connections:[]}){var y,b,x,N;let B=performance.now();if(k.serviceWorker)try{const O=yield(0,k.sendMessage)("CreateTheConnectionLocal",{ofTheConceptId:C,toTheConceptId:A,typeId:u,orderId:c,typeString:i,userId:d,actions:g});return!((b=(y=O?.actions)===null||y===void 0?void 0:y.concepts)===null||b===void 0)&&b.length&&(g.concepts=JSON.parse(JSON.stringify(O.actions.concepts))),!((N=(x=O?.actions)===null||x===void 0?void 0:x.connections)===null||N===void 0)&&N.length&&(g.connections=JSON.parse(JSON.stringify(O.actions.connections))),O.data}catch(O){(0,k.handleServiceWorkerException)(O)}try{let O=4,G=yield r.R.getConnectionId(),F=0,M=0,j=0;F=C,M=A,j=u;let W=new _.N(0,0,0,0,0,0,0);return C!=A&&(W=new _.N(G,F,M,d,u,c,O),W.isTemp=!0,W.typeCharacter=i,k.LocalSyncData.AddConnection(W),L.G.AddConnection(W),g.connections.push(W)),W}catch(O){throw h.V.logError(B,d,"create","Unknown","Unknown",500,void 0,"CreateTheConnectionLocal",[C,A,u,c,i,d],"UnknownUserAgent",[]),O}})}function t(o,a,f){return w(this,arguments,void 0,function*(C,A,u,c={concepts:[],connections:[]}){var i,d,g,y;if(k.serviceWorker)try{const N=yield(0,k.sendMessage)("CreateConnection",{ofTheConcept:C,toTheConcept:A,connectionTypeString:u,actions:c});return!((d=(i=N?.actions)===null||i===void 0?void 0:i.concepts)===null||d===void 0)&&d.length&&(c.concepts=JSON.parse(JSON.stringify(N.actions.concepts))),!((y=(g=N?.actions)===null||g===void 0?void 0:g.connections)===null||y===void 0)&&y.length&&(c.connections=JSON.parse(JSON.stringify(N.actions.connections))),N.data}catch(N){(0,k.handleServiceWorkerException)(N)}let b=yield(0,k.MakeTheTypeConceptLocal)(u,999,999,999),x=C.userId;return yield p(C.id,A.id,b.id,1e3,u,x,c)})}},3796:(Y,R,v)=>{v.d(R,{c:()=>w});var _=v(4244),L=v(6047),r=v(830);class h{constructor(t,o){this.value=[],this.height=1,this.key=t,this.value.push(o),this.leftNode=null,this.rightNode=null,this.currentNode=null}addType(t,o,a){var f,C,A,u;if(t==null)return(0,_.dispatchIdEvent)(o,{detail:a}),new h(o,a);if(o<t.key)t.leftNode=this.addType(t.leftNode,o,a);else{if(!(o>t.key))return t.value.includes(a)||((0,_.dispatchIdEvent)(o,{detail:a}),t.value.push(a)),t;t.rightNode=this.addType(t.rightNode,o,a)}t.height=Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode))+1;const c=this.getBalanceFactor(t);return c>1&&o<((f=t.leftNode)===null||f===void 0?void 0:f.key)?this.rightRotate(t):c<-1&&o>((C=t.rightNode)===null||C===void 0?void 0:C.key)?this.leftRotate(t):c>1&&o>((A=t.leftNode)===null||A===void 0?void 0:A.key)?(t.leftNode=this.leftRotate(t.leftNode),this.rightRotate(t)):c<-1&&o<((u=t.rightNode)===null||u===void 0?void 0:u.key)?(t.rightNode=this.rightRotate(t.rightNode),this.leftRotate(t)):t}rightRotate(t){if(t){let o=t.leftNode;if(o){let a=o.rightNode;return t.leftNode=a,o.rightNode=t,t.height=Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode))+1,o.height=Math.max(this.getHeight(o.leftNode),this.getHeight(o.rightNode))+1,o}}return t}leftRotate(t){if(t){let o=t.rightNode;if(o){let a=o.leftNode;return o.leftNode=t,t.rightNode=a,t.height=Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode))+1,o.height=Math.max(this.getHeight(o.leftNode),this.getHeight(t.rightNode))+1,o}}return t}getHeight(t){return t?t.height:0}getBalanceFactor(t){return t==null?0:this.getHeight(t.leftNode)-this.getHeight(t.rightNode)}getFromNode(t,o){return o&&(t==o.key?o:t<o.key?this.getFromNode(t,o.leftNode):t>o.key?this.getFromNode(t,o.rightNode):o)}removeNodeWithVariants(t,o,a){if(t==null)return t;if(t.key>o)return t.leftNode=this.removeNodeWithVariants(t.leftNode,o,a),t;if(t.key<o)return t.rightNode=this.removeNodeWithVariants(t.rightNode,o,a),t;if(t.value.length>0){for(let f=0;f<t.value.length;f++)if(a==t.value[f])return t.value.splice(f,1),t}if(t.leftNode==null){let f=t.rightNode;return t=null,f}if(t.rightNode==null){let f=t.leftNode;return t=null,f}{let f=this.inOrderSuccessor(t.rightNode);return t.value=f.value,t.key=f.key,t.currentNode=f.currentNode,t.rightNode=this.removeNodeWithVariants(t.rightNode,f.key,a),t}}countNodeBelow(t){return t==null?0:1+this.countNodeBelow(t.leftNode)+this.countNodeBelow(t.rightNode)}inOrderSuccessor(t){for(;t.leftNode!=null;)t=t.leftNode;return t}}var k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,[])).next())})};class w{static addType(t){return k(this,void 0,void 0,function*(){return this.root==null?(this.root=t,new CustomEvent(`${t.key}`,{detail:t.value[0]}),(0,_.dispatchIdEvent)(t.key,{detail:t.value[0]}),this.root):(this.root=this.root.addType(this.root,t.key,t.value[0]),this.root)})}static addConceptToTree(t){if(t.typeId!=0){let o=new h(t.typeId,t.id);this.addType(o)}}static removeTypeConcept(t,o){this.root&&(this.root=this.root.removeNodeWithVariants(this.root,t,o))}static getNodeFromTreeNew(t){return this.root?this.root.getFromNode(t,this.root):this.root}static getTypeVariantsFromTreeNew(t){return k(this,void 0,void 0,function*(){let o=this.getNodeFromTreeNew(t),a=[],f=[];if(o){a=o.value;for(let C=0;C<a.length;C++){let A=!1;for(let u=0;u<f.length;u++)f[u].id==a[C]&&(A=!0);A||f.push(yield(0,_.GetTheConcept)(a[C]))}}return f})}static waitForDataToLoad(){return k(this,void 0,void 0,function*(){return new Promise((t,o)=>{this.checkFlag(t),setTimeout(()=>{o("not")},25e3)})})}static checkFlag(t){if(r.B.isTypeLoaded)return t("done");setTimeout(w.checkFlag,1e3,t)}static getTypeVariantsFromTreeWithUserIdNew(t,o){return k(this,void 0,void 0,function*(){let a=[],f=yield this.getTypeVariantsFromTreeNew(t);for(let C=0;C<f.length;C++)f[C].userId==o&&a.push(f[C]);return a})}static getTypeVariantsWithCharacterValueNew(t,o){return k(this,void 0,void 0,function*(){let a=yield this.getTypeVariantsFromTreeNew(o),f=(0,L.o)();for(let C=0;C<a.length;C++)a[C].characterValue==t&&(f=a[C]);return f})}static countNumberOfNodes(){return this.typeRoot?this.typeRoot.countNodeBelow(this.typeRoot):0}}w.typeRoot=null,w.root=null},3878:(Y,R,v)=>{let{existsSync:_,readFileSync:L}=v(9977),{dirname:r,join:h}=v(197),{SourceMapConsumer:k,SourceMapGenerator:w}=v(1866);class p{constructor(o,a){if(a.map===!1)return;this.loadAnnotation(o),this.inline=this.startWith(this.annotation,"data:");let f=a.map?a.map.prev:void 0,C=this.loadMap(a.from,f);!this.mapFile&&a.from&&(this.mapFile=a.from),this.mapFile&&(this.root=r(this.mapFile)),C&&(this.text=C)}consumer(){return this.consumerCache||(this.consumerCache=new k(this.text)),this.consumerCache}decodeInline(o){let a=o.match(/^data:application\/json;charset=utf-?8,/)||o.match(/^data:application\/json,/);if(a)return decodeURIComponent(o.substr(a[0].length));let f=o.match(/^data:application\/json;charset=utf-?8;base64,/)||o.match(/^data:application\/json;base64,/);if(f)return C=o.substr(f[0].length),Buffer?Buffer.from(C,"base64").toString():window.atob(C);var C;let A=o.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+A)}getAnnotationURL(o){return o.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(o){return typeof o=="object"&&(typeof o.mappings=="string"||typeof o._mappings=="string"||Array.isArray(o.sections))}loadAnnotation(o){let a=o.match(/\/\*\s*# sourceMappingURL=/g);if(!a)return;let f=o.lastIndexOf(a.pop()),C=o.indexOf("*/",f);f>-1&&C>-1&&(this.annotation=this.getAnnotationURL(o.substring(f,C)))}loadFile(o){if(this.root=r(o),_(o))return this.mapFile=o,L(o,"utf-8").toString().trim()}loadMap(o,a){if(a===!1)return!1;if(a){if(typeof a=="string")return a;if(typeof a!="function"){if(a instanceof k)return w.fromSourceMap(a).toString();if(a instanceof w)return a.toString();if(this.isMap(a))return JSON.stringify(a);throw new Error("Unsupported previous source map format: "+a.toString())}{let f=a(o);if(f){let C=this.loadFile(f);if(!C)throw new Error("Unable to load previous source map: "+f.toString());return C}}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let f=this.annotation;return o&&(f=h(r(o),f)),this.loadFile(f)}}}startWith(o,a){return!!o&&o.substr(0,a.length)===a}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}}Y.exports=p,p.default=p},3890:(Y,R,v)=>{v.d(R,{A:()=>p});var _=v(4244),L=v(3008),r=v(7154),h=v(198),k=v(9097),w=function(t,o,a,f){return new(a||(a=Promise))(function(C,A){function u(d){try{i(f.next(d))}catch(g){A(g)}}function c(d){try{i(f.throw(d))}catch(g){A(g)}}function i(d){var g;d.done?C(d.value):(g=d.value,g instanceof a?g:new a(function(y){y(g)})).then(u,c)}i((f=f.apply(t,o||[])).next())})};function p(t,o,a,f,C,A){return w(this,arguments,void 0,function*(u,c,i,d,g,y,b=!1,x=0,N={concepts:[],connections:[]}){var B,O,G,F;let M=performance.now();try{if(_.serviceWorker)try{const ae=yield(0,_.sendMessage)("CreateTheConceptLocal",{referent:u,typecharacter:c,userId:i,categoryId:d,typeId:g,accessId:y,isComposition:b,referentId:x});return!((O=(B=ae?.actions)===null||B===void 0?void 0:B.concepts)===null||O===void 0)&&O.length&&(N.concepts=JSON.parse(JSON.stringify(ae.actions.concepts))),!((F=(G=ae?.actions)===null||G===void 0?void 0:G.connections)===null||F===void 0)&&F.length&&(N.connections=JSON.parse(JSON.stringify(ae.actions.connections))),ae.data}catch(ae){(0,_.handleServiceWorkerException)(ae)}let j=yield h.R.getConceptId(),W=!0,$=new Date,K=new Date;if(u=="the")return new L.j(1,999,5,5,x,u,y,W,$,K,c);let te=new L.j(j,i,g,d,x,u,y,W,$,K,c);return te.isTemp=!0,te.isComposition=b,r.v.AddConcept(te),N.concepts.push(te),te}catch(j){throw k.V.logError(M,i,"create","unknown","unknown",500,void 0,"createTheConceptLocal",[u,c,i,d,g,y,b],void 0),j}})}},3967:(Y,R,v)=>{v.d(R,{G:()=>w});var _=v(4990),L=v(6715),r=v(830),h=v(7580),k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,[])).next())})};class w{constructor(){this.name="Connection Array"}static CheckContains(t){for(var o=!1,a=0;a<this.connectionArray.length;a++)this.connectionArray[a].id==t.id&&(o=!0);return o}static AddConnection(t){this.CheckContains(t)&&this.RemoveConnection(t),t.id,this.connectionArray.push(t)}static AddConnectionToMemory(t){this.CheckContains(t)&&this.RemoveConnection(t),this.connectionArray.push(t)}static AddToDictionary(t){this.connectionDictionary[t.id]=t}static RemoveConnection(t){for(var o=0;o<this.connectionArray.length;o++)this.connectionArray[o].id==t.id&&this.connectionArray.splice(o,1);t.id}static RemoveConnectionById(t){for(var o=0;o<this.connectionArray.length;o++)this.connectionArray[o].id==t&&this.connectionArray.splice(o,1);h.H.RemoveConnectionById(t)}static AddPermanentConnection(t){t.id>0&&L.d.AddConnection(function(o){let a=new _.N(0,0,0,0,0,0,0);return a.ofTheConceptId=o.ofTheConceptId,a.toTheConceptId=o.toTheConceptId,a.typeId=o.typeId,a.orderId=o.orderId,a.id=o.id,a}(t))}static GetConnection(t){var o;o=null;for(var a=0;a<this.connectionArray.length;a++)this.connectionArray[a].id==t&&(o=this.connectionArray[a]);return o}static waitForDataToLoad(){return k(this,void 0,void 0,function*(){return new Promise((t,o)=>{this.checkFlag(t),setTimeout(()=>{o("not")},25e3)})})}static checkFlag(t){if(r.B.isLocalConnectionLoaded)return t("done");setTimeout(w.checkFlag,1e3,t)}static GetConnectionsOfCompositionLocal(t){return k(this,void 0,void 0,function*(){var o=[];try{for(var a=0;a<this.connectionArray.length;a++)this.connectionArray[a].typeId==t&&o.push(this.connectionArray[a]);return o}catch{return o}})}static GetConnectionOfCompositionAndTypeLocal(t,o){return k(this,void 0,void 0,function*(){var a=[];try{for(var f=0;f<this.connectionArray.length;f++)this.connectionArray[f].typeId==t&&this.connectionArray[f].ofTheConceptId==o&&a.push(this.connectionArray[f]);return a}catch{return a}})}getName(){return this.name}}w.connectionArray=[],w.connectionDictionary=[]},4151:Y=>{Y.exports.isClean=Symbol("isClean"),Y.exports.my=Symbol("my")},4174:(Y,R,v)=>{v.d(R,{$N:()=>y,$V:()=>a,Ez:()=>b,JA:()=>d,Mb:()=>A,Nj:()=>C,PT:()=>g,RW:()=>i,XI:()=>c,ay:()=>o,hL:()=>t,kx:()=>u,re:()=>f,yz:()=>x,zN:()=>O});var _=v(9536),L=v(5793),r=v(1833),h=v(6715),k=v(4244),w=v(5760),p=function(F,M,j,W){return new(j||(j=Promise))(function($,K){function te(ie){try{z(W.next(ie))}catch(ce){K(ce)}}function ae(ie){try{z(W.throw(ie))}catch(ce){K(ce)}}function z(ie){var ce;ie.done?$(ie.value):(ce=ie.value,ce instanceof j?ce:new j(function(oe){oe(ce)})).then(te,ae)}z((W=W.apply(F,M||[])).next())})};function t(F){return p(this,void 0,void 0,function*(){let M={connectionList:[],compositionList:[]};try{if(k.serviceWorker)try{return(yield(0,k.sendMessage)("GetCompositionById",{id:F})).data}catch(W){(0,k.handleServiceWorkerException)(W)}let j=yield(0,L.s)(F);M.connectionList=j;for(let W=0;W<M.connectionList.length;W++)M.compositionList.includes(M.connectionList[W].ofTheConceptId)||M.compositionList.push(M.connectionList[W].ofTheConceptId);return M}catch{return M}})}function o(F,M,j){return p(this,void 0,void 0,function*(){var W,$;let K={},te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield O(F,M,j);return K[($=(W=te?.type)===null||W===void 0?void 0:W.characterValue)!==null&&$!==void 0?$:""]=ae,K})}function a(F,M,j){return p(this,void 0,void 0,function*(){var W,$;let K={},te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield O(F,M,j);K[($=(W=te?.type)===null||W===void 0?void 0:W.characterValue)!==null&&$!==void 0?$:""]=ae;let z={};return z.created_at=te.entryTimeStamp,z.data=K,z.id=F,z})}function f(F,M,j){return p(this,void 0,void 0,function*(){var W,$;let K={},te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield B(te,M,j);return K[($=(W=te?.type)===null||W===void 0?void 0:W.characterValue)!==null&&$!==void 0?$:""]=ae,K})}function C(F){return p(this,void 0,void 0,function*(){var M,j;if(k.serviceWorker)try{return(yield(0,k.sendMessage)("GetComposition",{id:F})).data}catch(z){(0,k.handleServiceWorkerException)(z)}let W=[],$={};W=yield(0,L.s)(F);let K=[];for(let z=0;z<W.length;z++)K.includes(W[z].ofTheConceptId)||K.push(W[z].ofTheConceptId);let te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield O(F,W,K);return $[(j=(M=te?.type)===null||M===void 0?void 0:M.characterValue)!==null&&j!==void 0?j:""]=ae,$})}function A(F){return p(this,void 0,void 0,function*(){var M,j;let W=[],$={};W=yield(0,L.s)(F);let K=[];for(let z=0;z<W.length;z++)K.includes(W[z].ofTheConceptId)||K.push(W[z].ofTheConceptId);let te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield G(F,W,K);return $[(j=(M=te?.type)===null||M===void 0?void 0:M.characterValue)!==null&&j!==void 0?j:""]=ae,$})}function u(F){return p(this,void 0,void 0,function*(){var M,j;if(k.serviceWorker)try{return(yield(0,k.sendMessage)("GetCompositionFromMemory",{id:F})).data}catch(z){(0,k.handleServiceWorkerException)(z)}let W=[],$={};W=yield h.d.GetConnectionsOfCompositionLocal(F);let K=[];for(let z=0;z<W.length;z++)K.includes(W[z].ofTheConceptId)||K.push(W[z].ofTheConceptId);let te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield N(te,W,K);return $[(j=(M=te?.type)===null||M===void 0?void 0:M.characterValue)!==null&&j!==void 0?j:""]=ae,$})}function c(F){return p(this,void 0,void 0,function*(){var M,j;if(k.serviceWorker)try{return(yield(0,k.sendMessage)("GetCompositionFromMemoryNormal",{id:F})).data}catch(z){(0,k.handleServiceWorkerException)(z)}let W=[],$={};W=yield h.d.GetConnectionsOfCompositionLocal(F);let K=[];for(let z=0;z<W.length;z++)K.includes(W[z].ofTheConceptId)||K.push(W[z].ofTheConceptId);let te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield B(te,W,K);return $[(j=(M=te?.type)===null||M===void 0?void 0:M.characterValue)!==null&&j!==void 0?j:""]=ae,$})}function i(F){var M=arguments;return p(this,void 0,void 0,function*(){var j,W;const $=k.Logger.logfunction("GetCompositionWithIdFromMemory",M)||{};if(k.serviceWorker){$.serviceWorker=!0;try{const z=yield(0,k.sendMessage)("GetCompositionWithIdFromMemory",{id:F});return k.Logger.logUpdate($),z.data}catch(z){(0,w.ey)($,"GetCompositionWithIdFromMemory",z),(0,k.handleServiceWorkerException)(z)}}let K={},te=[],ae={};try{te=yield h.d.GetConnectionsOfCompositionLocal(F);let z=[];for(let oe=0;oe<te.length;oe++)z.includes(te[oe].ofTheConceptId)||z.push(te[oe].ofTheConceptId);let ie=yield r.I.GetConcept(F);ie.id==0&&F!=null&&F!=null&&(ie=yield(0,_.r)(F));let ce=yield N(ie,te,z);ae[(W=(j=ie?.type)===null||j===void 0?void 0:j.characterValue)!==null&&W!==void 0?W:""]=ce,K.created_at=ie.entryTimeStamp,K.data=ae,K.id=F}catch(z){(0,w.ey)($,"GetCompositionWithIdFromMemory",z)}return k.Logger.logUpdate($),K})}function d(F,M){var j=arguments;return p(this,void 0,void 0,function*(){var W,$;const K=k.Logger.logfunction("GetCompositionFromMemoryWithConnections",j)||{};if(k.serviceWorker){K.serviceWorker=!0;try{const oe=yield(0,k.sendMessage)("GetCompositionFromMemoryWithConnections",{id:F,connectionList:M});return k.Logger.logUpdate(K),oe.data}catch(oe){(0,w.ey)(K,"GetCompositionFromMemoryWithConnections",oe),(0,k.handleServiceWorkerException)(oe)}}let te={},ae=[];for(let oe=0;oe<M.length;oe++)ae.includes(M[oe].ofTheConceptId)||ae.push(M[oe].ofTheConceptId);let z=yield r.I.GetConcept(F);z.id==0&&F!=null&&F!=null&&(z=yield(0,_.r)(F));let ie=yield N(z,M,ae);te[($=(W=z?.type)===null||W===void 0?void 0:W.characterValue)!==null&&$!==void 0?$:""]=ie;let ce={};return ce.created_at=z.entryTimeStamp,ce.data=te,ce.id=F,k.Logger.logUpdate(K),ce})}function g(F,M){return p(this,void 0,void 0,function*(){var j,W;const $=k.Logger.logfunction("GetCompositionWithIdFromMemoryFromConnection",[F])||{};if(k.serviceWorker){$.serviceWorker=!0;try{const ce=yield(0,k.sendMessage)("GetCompositionWithIdFromMemory",{id:F});return k.Logger.logUpdate($),ce.data}catch(ce){(0,w.ey)($,"GetCompositionWithIdFromMemoryFromConnection",ce),(0,k.handleServiceWorkerException)(ce)}}let K={},te=[];for(let ce=0;ce<M.length;ce++)te.includes(M[ce].ofTheConceptId)||te.push(M[ce].ofTheConceptId);let ae=yield r.I.GetConcept(F);ae.id==0&&F!=null&&F!=null&&(ae=yield(0,_.r)(F));let z=yield N(ae,M,te);K[(W=(j=ae?.type)===null||j===void 0?void 0:j.characterValue)!==null&&W!==void 0?W:""]=z;let ie={};return ie.created_at=ae.entryTimeStamp,ie.data=K,ie.id=F,k.Logger.logUpdate($),ie})}function y(F){return p(this,void 0,void 0,function*(){var M;if(k.serviceWorker)try{return(yield(0,k.sendMessage)("GetCompositionWithIdFromMemoryNew",{id:F})).data}catch(z){(0,k.handleServiceWorkerException)(z)}let j=[],W={};j=yield h.d.GetConnectionsOfCompositionLocal(F);let $=[];for(let z=0;z<j.length;z++)$.includes(j[z].ofTheConceptId)||$.push(j[z].ofTheConceptId);let K=yield r.I.GetConcept(F);K.id==0&&F!=null&&F!=null&&(K=yield(0,_.r)(F)),new Date().getTime();let te=yield function(z,ie,ce){return p(this,arguments,void 0,function*(oe,J,ee,ne=[]){var H,re,le,me,Ce,Te,ye,ge;let _e={},Le=oe.id,ve=(new Date().getTime(),(re=(H=oe?.type)===null||H===void 0?void 0:H.characterValue)!==null&&re!==void 0?re:"");if(!ee.includes(Le))return{[ve]:oe?.characterValue};if(ne.includes(Le))return"";ne.push(Le);for(let we=0;we<J.length;we++){let fe=yield(0,k.GetTheConcept)(J[we].ofTheConceptId),Ae=yield(0,k.GetTheConcept)(J[we].toTheConceptId);J[we].ofConcept=fe,J[we].toConcept=Ae;let Ee=fe.id,Ne="the_",be=((me=(le=Ae?.type)===null||le===void 0?void 0:le.characterValue)!==null&&me!==void 0?me:"").replace(Ne,"");_e[Ee]!=null&&_e[Ee]!=null||(_e[Ee]={}),_e[Ee][be]=Ae.characterValue}let De={};for(let we=0;we<J.length;we++){let fe=J[we].ofConcept,Ae=J[we].toConcept,Ee=(Te=(Ce=fe?.type)===null||Ce===void 0?void 0:Ce.characterValue)!==null&&Te!==void 0?Te:"",Ne="the_",be=((ge=(ye=Ae?.type)===null||ye===void 0?void 0:ye.characterValue)!==null&&ge!==void 0?ge:"").replace(Ne,"");De[fe.id]!=null&&De[fe.id]!=null||(De[fe.id]={});let Re=De[fe.id];Re[Ee]!=null&&Re[Ee]!=null||(Re[Ee]={}),_e[J[we].ofTheConceptId]!=null&&_e[J[we].toTheConceptId]!=null?Re[Ee][be]=_e[Ae.id]:Re[Ee][be]=Ae.characterValue}return De[oe.id]})}(K,j,$);(M=K?.type)===null||M===void 0||M.characterValue,W=te;let ae={};return ae.created_at=K.entryTimeStamp,ae.data=W,ae.id=F,ae})}function b(F){return p(this,void 0,void 0,function*(){var M,j;if(k.serviceWorker)try{return(yield(0,k.sendMessage)("GetCompositionWithIdAndDateFromMemory",{id:F})).data}catch(ie){(0,k.handleServiceWorkerException)(ie)}let W=[],$={};W=yield h.d.GetConnectionsOfCompositionLocal(F);let K=[];for(let ie=0;ie<W.length;ie++)K.includes(W[ie].ofTheConceptId)||K.push(W[ie].ofTheConceptId);let te=yield r.I.GetConcept(F);te.id==0&&F!=null&&F!=null&&(te=yield(0,_.r)(F));let ae=yield O(F,W,K);$[(j=(M=te?.type)===null||M===void 0?void 0:M.characterValue)!==null&&j!==void 0?j:""]=ae;let z={};return z.data=$,z.id=F,z.created_at=te.entryTimeStamp,z})}function x(F){var M=arguments;return p(this,void 0,void 0,function*(){var j,W;const $=k.Logger.logfunction("GetCompositionWithId",M)||{};if(k.serviceWorker){$.serviceWorker=!0;try{const oe=yield(0,k.sendMessage)("GetCompositionWithId",{id:F});return k.Logger.logUpdate($),oe.data}catch(oe){(0,w.ey)($,"GetCompositionWithId",oe),(0,k.handleServiceWorkerException)(oe)}}let K=[],te={};K=yield(0,L.s)(F);let ae=[];for(let oe=0;oe<K.length;oe++)ae.includes(K[oe].ofTheConceptId)||ae.push(K[oe].ofTheConceptId);let z=yield r.I.GetConcept(F);z.id==0&&F!=null&&F!=null&&(z=yield(0,_.r)(F));let ie=yield O(F,K,ae);te[(W=(j=z?.type)===null||j===void 0?void 0:j.characterValue)!==null&&W!==void 0?W:""]=ie;let ce={};return ce.data=te,ce.id=F,k.Logger.logUpdate($),ce})}function N(F,M,j){return p(this,arguments,void 0,function*(W,$,K,te=[]){var ae,z,ie;let ce={},oe=[],J=W.id;if((ae=W?.type)===null||ae===void 0||ae.characterValue,!K.includes(J))return W?.characterValue;if(te.includes(J))return"";te.push(J);for(let ee=0;ee<$.length;ee++)if($[ee].ofTheConceptId==J&&J!=$[ee].toTheConceptId){let ne=$[ee].toTheConceptId,H=yield r.I.GetConcept(ne);if((H==null||H.id==0)&&ne!=null&&ne!=null&&(H=yield(0,_.r)(ne)),H.id!=0&&H?.type==null){let me=H.typeId,Ce=yield r.I.GetConcept(me);H.type=Ce,Ce==null&&me!=null&&me!=null&&(Ce=yield(0,_.r)(me),H.type=Ce)}let re="the_",le=((ie=(z=H?.type)===null||z===void 0?void 0:z.characterValue)!==null&&ie!==void 0?ie:"").replace(re,"");if(isNaN(Number(le))){if(le){const me=yield N(H,$,K,te);ce[le]=me}}else{const me=yield N(H,$,K,te);oe[le]=me,ce=oe}}return ce})}function B(F,M,j){return p(this,arguments,void 0,function*(W,$,K,te=[]){var ae,z,ie;const ce=k.Logger.logfunction("recursiveFetchConceptNormal",[W]);new Date().getTime();let oe={},J=[],ee=W.id;if(oe.id=ee,(ae=W?.type)===null||ae===void 0||ae.characterValue,!K.includes(ee))return W?.characterValue;if(te.includes(ee))return"";te.push(ee);for(let ne=0;ne<$.length;ne++)if($[ne].ofTheConceptId==ee&&ee!=$[ne].toTheConceptId){let H=$[ne].toTheConceptId,re=yield r.I.GetConcept(H);if((re==null||re.id==0)&&H!=null&&H!=null&&(re=yield(0,_.r)(H)),re.id!=0&&re?.type==null){let Ce=re.typeId,Te=yield r.I.GetConcept(Ce);re.type=Te,Te==null&&Ce!=null&&Ce!=null&&(Te=yield(0,_.r)(Ce),re.type=Te)}let le="the_",me=((ie=(z=re?.type)===null||z===void 0?void 0:z.characterValue)!==null&&ie!==void 0?ie:"").replace(le,"");if(isNaN(Number(me))){if(me){const Ce=yield N(re,$,K,te);oe[me]=Ce}}else{const Ce=yield N(re,$,K,te);J[me]=Ce,oe=J}}return k.Logger.logUpdate(ce),oe})}function O(F,M,j){return p(this,arguments,void 0,function*(W,$,K,te=[]){var ae,z,ie;let ce={},oe=[];if(W==0)return null;let J=yield r.I.GetConcept(W);if((J==null||J.id==0)&&W!=null&&W!=null&&(J=yield(0,_.r)(W)),J.id!=0&&J.type==null){let ee=J.typeId,ne=yield r.I.GetConcept(ee);J.type=ne,ne==null&&ee!=null&&ee!=null&&(ne=yield(0,_.r)(ee),J.type=ne)}if((ae=J?.type)===null||ae===void 0||ae.characterValue,!K.includes(W))return J?.characterValue;if(te.includes(W))return"";te.push(W);for(let ee=0;ee<$.length;ee++)if(new Date().getTime(),$[ee].ofTheConceptId==W&&W!=$[ee].toTheConceptId){let ne=$[ee].toTheConceptId,H=yield r.I.GetConcept(ne);if((H==null||H.id==0)&&ne!=null&&ne!=null&&(H=yield(0,_.r)(ne)),H.id!=0&&H?.type==null){let me=H.typeId,Ce=yield r.I.GetConcept(me);H.type=Ce,Ce==null&&me!=null&&me!=null&&(Ce=yield(0,_.r)(me),H.type=Ce)}let re="the_",le=((ie=(z=H?.type)===null||z===void 0?void 0:z.characterValue)!==null&&ie!==void 0?ie:"").replace(re,"");if(isNaN(Number(le))){if(le){const me=yield O(ne,$,K,te);ce[le]=me}}else{const me=yield O(ne,$,K,te);oe[le]=me,ce=oe}}return ce})}function G(F,M,j){return p(this,arguments,void 0,function*(W,$,K,te=[]){var ae,z,ie;let ce={},oe=[];if(W==0)return null;let J=yield r.I.GetConcept(W);if((J==null||J.id==0)&&W!=null&&W!=null&&(J=yield(0,_.r)(W)),J.id!=0&&J.type==null){let ee=J.typeId,ne=yield r.I.GetConcept(ee);J.type=ne,ne==null&&ee!=null&&ee!=null&&(ne=yield(0,_.r)(ee),J.type=ne)}if((ae=J?.type)===null||ae===void 0||ae.characterValue,!K.includes(W))return J?.characterValue;if(te.includes(W))return"";te.push(W),ce.id=W;for(let ee=0;ee<$.length;ee++)if($[ee].ofTheConceptId==W){let ne=$[ee].toTheConceptId,H=yield r.I.GetConcept(ne);if((H==null||H.id==0)&&ne!=null&&ne!=null&&(H=yield(0,_.r)(ne)),H&&H?.type==null){let me=H.typeId,Ce=yield r.I.GetConcept(me);H.type=Ce,Ce==null&&me!=null&&me!=null&&(Ce=yield(0,_.r)(me),H.type=Ce)}let re="the_",le=((ie=(z=H?.type)===null||z===void 0?void 0:z.characterValue)!==null&&ie!==void 0?ie:"").replace(re,"");if(isNaN(Number(le))){if(le){const me=yield G(ne,$,K);ce[le]=me}}else{const me=yield G(ne,$,K);oe[le]=me,ce=oe}}return ce})}},4195:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _=k(v(8937)),L=v(9606),r=k(v(4646)),h=v(1581);function k(o){return o&&o.__esModule?o:{default:o}}function w(o,a){for(var f=0;f<a.length;f++){var C=a[f];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(o,C.key,C)}}function p(o,a){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,C){return f.__proto__=C,f},p(o,a)}var t=function(o){var a,f,C,A;function u(c){var i;return(i=o.call(this,c)||this).type=h.CLASS,i._constructed=!0,i}return f=o,(a=u).prototype=Object.create(f.prototype),a.prototype.constructor=a,p(a,f),u.prototype.valueToString=function(){return"."+o.prototype.valueToString.call(this)},C=u,(A=[{key:"value",get:function(){return this._value},set:function(c){if(this._constructed){var i=(0,_.default)(c,{isIdentifier:!0});i!==c?((0,L.ensureObject)(this,"raws"),this.raws.value=i):this.raws&&delete this.raws.value}this._value=c}}])&&w(C.prototype,A),Object.defineProperty(C,"prototype",{writable:!1}),u}(r.default);R.default=t,Y.exports=R.default},4211:(Y,R,v)=>{let _=v(3604),L=v(9577);const r=v(3717);let h=v(3303);v(6156);class k{get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let p,t=L;try{p=t(this._css,this._opts)}catch(o){this.error=o}if(this.error)throw this.error;return this._root=p,p}get[Symbol.toStringTag](){return"NoWorkResult"}constructor(p,t,o){let a;t=t.toString(),this.stringified=!1,this._processor=p,this._css=t,this._opts=o,this._map=void 0;let f=h;this.result=new r(this._processor,a,this._opts),this.result.css=t;let C=this;Object.defineProperty(this.result,"root",{get:()=>C.root});let A=new _(f,a,this._opts,t);if(A.isMap()){let[u,c]=A.generate();u&&(this.result.css=u),c&&(this.result.map=c)}else A.clearAnnotation(),this.result.css=A.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(p){return this.async().catch(p)}finally(p){return this.async().then(p,p)}sync(){if(this.error)throw this.error;return this.result}then(p,t){return this.async().then(p,t)}toString(){return this._css}warnings(){return[]}}Y.exports=k,k.default=k},4238:(Y,R,v)=>{v.d(R,{i:()=>k});var _=v(6288),L=v(9789),r=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,[])).next())})},h=function(w,p){var t={};for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&p.indexOf(o)<0&&(t[o]=w[o]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function"){var a=0;for(o=Object.getOwnPropertySymbols(w);a<o.length;a++)p.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(w,o[a])&&(t[o[a]]=w[o[a]])}return t};class k{static init(){return r(this,void 0,void 0,function*(){if(L.B.getValue("enableCache",!0))try{const[p,t,o]=yield Promise.all([(0,_.ou)(_.L2),(0,_.ou)(_.Ou),(0,_.ou)(_.cL)]);for(const a of p)if(a&&a.id!=null){const{id:f}=a,C=h(a,["id"]);this.widgetMap.set(f,C)}for(const a of t)if(a&&a.id!=null){const{id:f}=a,C=h(a,["id"]);this.latestMap.set(f,C)}for(const a of o)if(a&&a.id!=null){const{id:f}=a,C=h(a,["id"]);this.recentMap.set(f,C)}}catch{}})}static getWidget(p){var t;return L.B.getValue("enableCache",!0)&&(t=this.widgetMap.get(p))!==null&&t!==void 0?t:null}static setWidget(p,t){L.B.getValue("enableCache",!0)&&(this._isDuplicate(this.widgetMap,p,t)||(this.widgetMap.set(p,t),(0,_.eH)(_.L2,Object.assign({id:p},t)).catch(()=>{})))}static removeWidget(p){this.widgetMap.delete(p),(0,_.kM)(_.L2,p).catch(()=>{})}static getLatest(p){var t;return L.B.getValue("enableCache",!0)&&(t=this.latestMap.get(p))!==null&&t!==void 0?t:null}static setLatest(p,t){L.B.getValue("enableCache",!0)&&(this._isDuplicate(this.latestMap,p,t)||(this.latestMap.set(p,t),(0,_.eH)(_.Ou,Object.assign({id:p},t)).catch(()=>{})))}static removeLatest(p){this.latestMap.delete(p),(0,_.kM)(_.Ou,p).catch(()=>{})}static getRecent(p){var t;return L.B.getValue("enableCache",!0)&&(t=this.recentMap.get(p))!==null&&t!==void 0?t:null}static setRecent(p,t){L.B.getValue("enableCache",!0)&&(this._isDuplicate(this.recentMap,p,t)||(this.recentMap.set(p,t),(0,_.eH)(_.cL,Object.assign({id:p},t)).catch(()=>{})))}static removeRecent(p){this.recentMap.delete(p),(0,_.kM)(_.cL,p).catch(()=>{})}static clearAll(){this.widgetMap.clear(),this.latestMap.clear(),this.recentMap.clear(),Promise.all([(0,_.sg)(_.L2),(0,_.sg)(_.Ou),(0,_.sg)(_.cL)]).catch(()=>{})}static _isDuplicate(p,t,o){const a=p.get(t);return!!a&&JSON.stringify(a)===JSON.stringify(o)}}k.widgetMap=new Map,k.latestMap=new Map,k.recentMap=new Map},4244:(Y,R,v)=>{v.d(R,{ADMIN:()=>ar,ALLID:()=>je.BG,AccessControlService:()=>Ft,AccessTracker:()=>Qt.J,AddGhostConcept:()=>Ji,Anomaly:()=>rt,BaseUrl:()=>o.B,BinaryTree:()=>ho.W,BuildWidgetFromId:()=>Wt.Cp,BuilderStatefulWidget:()=>Dn,Composition:()=>xn,CompositionBinaryTree:()=>Yt,CompositionNode:()=>To,Concept:()=>Qn.j,ConceptsData:()=>t.I,Connection:()=>ee.N,ConnectionData:()=>qt.d,CountInfo:()=>Gr.y,CreateComposition:()=>ie.A,CreateConnection:()=>Mt.d,CreateConnectionBetweenEntityLocal:()=>Vo,CreateConnectionBetweenTwoConcepts:()=>Le,CreateConnectionBetweenTwoConceptsGeneral:()=>De,CreateConnectionBetweenTwoConceptsLocal:()=>Po.h,CreateData:()=>lo,CreateDefaultConcept:()=>H.o,CreateDefaultLConcept:()=>So.u,CreateSession:()=>Mi,CreateSessionVisit:()=>Wi,CreateTheCompositionLocal:()=>ce.R,CreateTheCompositionWithCache:()=>Nn,CreateTheConnection:()=>be.q,CreateTheConnectionGeneral:()=>Ce,CreateTheConnectionLocal:()=>Mt.F,DATAID:()=>je.y0,DATAIDDATE:()=>je.iw,DATAV2:()=>je.pU,DelayFunctionExecution:()=>ir,DeleteConceptById:()=>po,DeleteConceptLocal:()=>tr,DeleteConnectionById:()=>Te.m,DeleteConnectionByIdBulk:()=>Te.E,DeleteConnectionByType:()=>kn.$S,DeleteConnectionByTypeBulk:()=>kn.L0,DeleteUser:()=>hi,DependencyObserver:()=>Xt.w,Environments:()=>Oo.B,FilterSearch:()=>Zn,FormatFromConnections:()=>sn.vw,FormatFromConnectionsAltered:()=>sn.y8,FreeschemaQuery:()=>Pt,FreeschemaQueryApi:()=>io,GetAllConnectionsOfComposition:()=>z.s,GetAllConnectionsOfCompositionBulk:()=>u.Y,GetAllLinkerConnectionsFromTheConcept:()=>Gt.l,GetAllTheConnectionsByTypeAndOfTheConcept:()=>kn.WC,GetComposition:()=>i.Nj,GetCompositionBulk:()=>mt.dF,GetCompositionBulkWithDataId:()=>mt.cw,GetCompositionFromConnectionsWithDataId:()=>mt.p8,GetCompositionFromConnectionsWithDataIdFromConnections:()=>mt.km,GetCompositionFromConnectionsWithDataIdInObject:()=>mt.rv,GetCompositionFromConnectionsWithDataIdIndex:()=>mt.Nt,GetCompositionFromConnectionsWithIndex:()=>mt.as,GetCompositionFromConnectionsWithIndexFromConnections:()=>mt.hG,GetCompositionFromMemoryWithConnections:()=>i.JA,GetCompositionList:()=>b,GetCompositionListAll:()=>x,GetCompositionListAllWithId:()=>N,GetCompositionListListener:()=>fr,GetCompositionListLocal:()=>te,GetCompositionListLocalWithId:()=>ae,GetCompositionListWithId:()=>B,GetCompositionListWithIdUpdated:()=>O,GetCompositionListener:()=>hr,GetCompositionLocal:()=>j,GetCompositionLocalWithId:()=>W,GetCompositionWithAllIds:()=>i.Mb,GetCompositionWithCache:()=>Oi,GetCompositionWithDataIdBulk:()=>Ui,GetCompositionWithDataIdWithCache:()=>Ao,GetCompositionWithId:()=>i.yz,GetCompositionWithIdAndDateFromMemory:()=>i.Ez,GetConceptBulk:()=>on.r,GetConceptByCharacter:()=>d.A,GetConceptByCharacterAndCategoryLocal:()=>g.$I,GetConceptByCharacterAndType:()=>Re.A,GetConnectionBetweenTwoConceptsLinker:()=>or,GetConnectionBulk:()=>$n.j,GetConnectionById:()=>mi,GetConnectionDataPrefetch:()=>mt.QL,GetConnectionOfTheConcept:()=>J,GetConnectionTypeForCount:()=>Eo.V,GetConnectionsBetweenApi:()=>Uo,GetFreeschemaImage:()=>hs,GetFreeschemaImageUrl:()=>ps,GetImageApi:()=>Qo,GetInstanceConceptByCharacterType:()=>sr,GetLink:()=>Me,GetLinkListListener:()=>gr,GetLinkListener:()=>mr.d,GetLinkRaw:()=>xe,GetLinkerConnectionFromConcepts:()=>li,GetLinkerConnectionToConcepts:()=>di,GetRelation:()=>Vi,GetRelationLocal:()=>Yi,GetRelationNew:()=>qi,GetRelationRaw:()=>Hi,GetTheConcept:()=>ye.A,GetTheConceptLocal:()=>No.f,GetUserGhostId:()=>zi,JUSTDATA:()=>je.ZJ,LConcept:()=>Cr,LConnection:()=>br,LISTNORMAL:()=>je.SL,LocalConceptsData:()=>c.v,LocalSyncData:()=>an.H,LocalTransaction:()=>Mo,LogEvent:()=>Mr,Logger:()=>he.V,LoginToBackend:()=>Si,MakeTheInstanceConcept:()=>ge.A,MakeTheInstanceConceptLocal:()=>we.k,MakeTheTimestamp:()=>yi,MakeTheTypeConceptApi:()=>ut,MakeTheTypeConceptLocal:()=>Je.$,NORMAL:()=>je.yv,PRIVATE:()=>cr,PUBLIC:()=>lr,PatcherStructure:()=>Ir,Prototype:()=>ls,RAW:()=>je.XZ,RecursiveSearchApi:()=>gi,RecursiveSearchApiNewRawFullLinker:()=>bi,RecursiveSearchApiRaw:()=>fo,RecursiveSearchApiRawFullLinker:()=>Ci,RecursiveSearchApiWithInternalConnections:()=>vi,RecursiveSearchListener:()=>yr,SchemaQuery:()=>ro,SchemaQueryListener:()=>Rn,SearchAllConcepts:()=>Ri,SearchLinkInternal:()=>Zi,SearchLinkInternalAll:()=>er,SearchLinkMultipleAll:()=>sn.cf,SearchLinkMultipleAllObservable:()=>Bo,SearchLinkMultipleApi:()=>w.j,SearchQuery:()=>nn,SearchStructure:()=>Tr,SearchWithLinker:()=>Bi,SearchWithTypeAndLinker:()=>Kt.zl,SearchWithTypeAndLinkerApi:()=>Ro,Selector:()=>Wr,SessionData:()=>wr,Signin:()=>Li,Signup:()=>xi,SignupEntity:()=>Ni,SplitStrings:()=>p.f,StatefulWidget:()=>no,SyncData:()=>ne.Y,TokenStorage:()=>Ve.b,TrashTheConcept:()=>pi,UpdateComposition:()=>Pi,UpdateCompositionLocal:()=>Qi.D,UserBinaryTree:()=>rn,Validator:()=>Br,ViewInternalData:()=>Do,ViewInternalDataApi:()=>Lo,WidgetTree:()=>jo,buildFetchConnection:()=>Go,clearAllCaches:()=>Ur,convertFromConceptToLConcept:()=>Jn.F4,convertFromLConceptToConcept:()=>Jn.dp,convertWidgetTreeToWidget:()=>En,convertWidgetTreeToWidgetWithWrapper:()=>$o,createFormFieldData:()=>Er,createPrototypeLocal:()=>Jo,dispatchIdEvent:()=>Ts,getFromDatabaseWithType:()=>Ee,getObjectsFromIndexDb:()=>Ne,getR2PresignedUploadUrl:()=>Co,getUploadFileLimit:()=>_i,getUserDetails:()=>oo,getUserDetailsWithRefresh:()=>Pr,getWidgetBulkFromId:()=>cn,getWidgetFromId:()=>ts,handleServiceWorkerException:()=>tt,hasActivatedSW:()=>Ko,importLatestWidget:()=>Qr,importRecentWidget:()=>Yr,init:()=>Is,orderTheConnections:()=>vr.X,recursiveFetch:()=>i.zN,recursiveFetchNew:()=>In,removeAllChildren:()=>qo,renderImportedWidget:()=>Xr,renderLatestWidget:()=>ao,renderPage:()=>Jr,renderWidget:()=>Kr,searchLinkMultipleListener:()=>dr,sendEmail:()=>Fo,sendMessage:()=>Ye,sendPersonalEmail:()=>Dr,serviceWorker:()=>We,setHasActivatedSW:()=>bs,storeToDatabase:()=>Ae,subscribedListeners:()=>Yo,unwrapContainers:()=>zo,updateAccessToken:()=>un,uploadAttachment:()=>wi,uploadFile:()=>Ai,uploadImage:()=>Ti,uploadImageV2:()=>ki,uploadR2Storage:()=>vo,uploadToR2PresignedUrl:()=>bo,uploadWithR2PresignedUrl:()=>Hn,validDocumentFormats:()=>yo,validImageFormats:()=>mo}),v.r(R);var _={};v.r(_),v.d(_,{ADMIN:()=>ar,ALLID:()=>je.BG,AccessControlService:()=>Ft,AccessTracker:()=>Qt.J,AddGhostConcept:()=>Ji,Anomaly:()=>rt,BaseUrl:()=>o.B,BinaryTree:()=>ho.W,BuildWidgetFromId:()=>Wt.Cp,BuilderStatefulWidget:()=>Dn,Composition:()=>xn,CompositionBinaryTree:()=>Yt,CompositionNode:()=>To,Concept:()=>Qn.j,ConceptsData:()=>t.I,Connection:()=>ee.N,ConnectionData:()=>qt.d,CountInfo:()=>Gr.y,CreateComposition:()=>ie.A,CreateConnection:()=>Mt.d,CreateConnectionBetweenEntityLocal:()=>Vo,CreateConnectionBetweenTwoConcepts:()=>Le,CreateConnectionBetweenTwoConceptsGeneral:()=>De,CreateConnectionBetweenTwoConceptsLocal:()=>Po.h,CreateData:()=>lo,CreateDefaultConcept:()=>H.o,CreateDefaultLConcept:()=>So.u,CreateSession:()=>Mi,CreateSessionVisit:()=>Wi,CreateTheCompositionLocal:()=>ce.R,CreateTheCompositionWithCache:()=>Nn,CreateTheConnection:()=>be.q,CreateTheConnectionGeneral:()=>Ce,CreateTheConnectionLocal:()=>Mt.F,DATAID:()=>je.y0,DATAIDDATE:()=>je.iw,DATAV2:()=>je.pU,DelayFunctionExecution:()=>ir,DeleteConceptById:()=>po,DeleteConceptLocal:()=>tr,DeleteConnectionById:()=>Te.m,DeleteConnectionByIdBulk:()=>Te.E,DeleteConnectionByType:()=>kn.$S,DeleteConnectionByTypeBulk:()=>kn.L0,DeleteUser:()=>hi,DependencyObserver:()=>Xt.w,Environments:()=>Oo.B,FilterSearch:()=>Zn,FormatFromConnections:()=>sn.vw,FormatFromConnectionsAltered:()=>sn.y8,FreeschemaQuery:()=>Pt,FreeschemaQueryApi:()=>io,GetAllConnectionsOfComposition:()=>z.s,GetAllConnectionsOfCompositionBulk:()=>u.Y,GetAllLinkerConnectionsFromTheConcept:()=>Gt.l,GetAllTheConnectionsByTypeAndOfTheConcept:()=>kn.WC,GetComposition:()=>i.Nj,GetCompositionBulk:()=>mt.dF,GetCompositionBulkWithDataId:()=>mt.cw,GetCompositionFromConnectionsWithDataId:()=>mt.p8,GetCompositionFromConnectionsWithDataIdFromConnections:()=>mt.km,GetCompositionFromConnectionsWithDataIdInObject:()=>mt.rv,GetCompositionFromConnectionsWithDataIdIndex:()=>mt.Nt,GetCompositionFromConnectionsWithIndex:()=>mt.as,GetCompositionFromConnectionsWithIndexFromConnections:()=>mt.hG,GetCompositionFromMemoryWithConnections:()=>i.JA,GetCompositionList:()=>b,GetCompositionListAll:()=>x,GetCompositionListAllWithId:()=>N,GetCompositionListListener:()=>fr,GetCompositionListLocal:()=>te,GetCompositionListLocalWithId:()=>ae,GetCompositionListWithId:()=>B,GetCompositionListWithIdUpdated:()=>O,GetCompositionListener:()=>hr,GetCompositionLocal:()=>j,GetCompositionLocalWithId:()=>W,GetCompositionWithAllIds:()=>i.Mb,GetCompositionWithCache:()=>Oi,GetCompositionWithDataIdBulk:()=>Ui,GetCompositionWithDataIdWithCache:()=>Ao,GetCompositionWithId:()=>i.yz,GetCompositionWithIdAndDateFromMemory:()=>i.Ez,GetConceptBulk:()=>on.r,GetConceptByCharacter:()=>d.A,GetConceptByCharacterAndCategoryLocal:()=>g.$I,GetConceptByCharacterAndType:()=>Re.A,GetConnectionBetweenTwoConceptsLinker:()=>or,GetConnectionBulk:()=>$n.j,GetConnectionById:()=>mi,GetConnectionDataPrefetch:()=>mt.QL,GetConnectionOfTheConcept:()=>J,GetConnectionTypeForCount:()=>Eo.V,GetConnectionsBetweenApi:()=>Uo,GetFreeschemaImage:()=>hs,GetFreeschemaImageUrl:()=>ps,GetImageApi:()=>Qo,GetInstanceConceptByCharacterType:()=>sr,GetLink:()=>Me,GetLinkListListener:()=>gr,GetLinkListener:()=>mr.d,GetLinkRaw:()=>xe,GetLinkerConnectionFromConcepts:()=>li,GetLinkerConnectionToConcepts:()=>di,GetRelation:()=>Vi,GetRelationLocal:()=>Yi,GetRelationNew:()=>qi,GetRelationRaw:()=>Hi,GetTheConcept:()=>ye.A,GetTheConceptLocal:()=>No.f,GetUserGhostId:()=>zi,JUSTDATA:()=>je.ZJ,LConcept:()=>Cr,LConnection:()=>br,LISTNORMAL:()=>je.SL,LocalConceptsData:()=>c.v,LocalSyncData:()=>an.H,LocalTransaction:()=>Mo,LogEvent:()=>Mr,Logger:()=>he.V,LoginToBackend:()=>Si,MakeTheInstanceConcept:()=>ge.A,MakeTheInstanceConceptLocal:()=>we.k,MakeTheTimestamp:()=>yi,MakeTheTypeConceptApi:()=>ut,MakeTheTypeConceptLocal:()=>Je.$,NORMAL:()=>je.yv,PRIVATE:()=>cr,PUBLIC:()=>lr,PatcherStructure:()=>Ir,Prototype:()=>ls,RAW:()=>je.XZ,RecursiveSearchApi:()=>gi,RecursiveSearchApiNewRawFullLinker:()=>bi,RecursiveSearchApiRaw:()=>fo,RecursiveSearchApiRawFullLinker:()=>Ci,RecursiveSearchApiWithInternalConnections:()=>vi,RecursiveSearchListener:()=>yr,SchemaQuery:()=>ro,SchemaQueryListener:()=>Rn,SearchAllConcepts:()=>Ri,SearchLinkInternal:()=>Zi,SearchLinkInternalAll:()=>er,SearchLinkMultipleAll:()=>sn.cf,SearchLinkMultipleAllObservable:()=>Bo,SearchLinkMultipleApi:()=>w.j,SearchQuery:()=>nn,SearchStructure:()=>Tr,SearchWithLinker:()=>Bi,SearchWithTypeAndLinker:()=>Kt.zl,SearchWithTypeAndLinkerApi:()=>Ro,Selector:()=>Wr,SessionData:()=>wr,Signin:()=>Li,Signup:()=>xi,SignupEntity:()=>Ni,SplitStrings:()=>p.f,StatefulWidget:()=>no,SyncData:()=>ne.Y,TokenStorage:()=>Ve.b,TrashTheConcept:()=>pi,UpdateComposition:()=>Pi,UpdateCompositionLocal:()=>Qi.D,UserBinaryTree:()=>rn,Validator:()=>Br,ViewInternalData:()=>Do,ViewInternalDataApi:()=>Lo,WidgetTree:()=>jo,buildFetchConnection:()=>Go,clearAllCaches:()=>Ur,convertFromConceptToLConcept:()=>Jn.F4,convertFromLConceptToConcept:()=>Jn.dp,convertWidgetTreeToWidget:()=>En,convertWidgetTreeToWidgetWithWrapper:()=>$o,createFormFieldData:()=>Er,createPrototypeLocal:()=>Jo,dispatchIdEvent:()=>Ts,getFromDatabaseWithType:()=>Ee,getObjectsFromIndexDb:()=>Ne,getR2PresignedUploadUrl:()=>Co,getUploadFileLimit:()=>_i,getUserDetails:()=>oo,getUserDetailsWithRefresh:()=>Pr,getWidgetBulkFromId:()=>cn,getWidgetFromId:()=>ts,handleServiceWorkerException:()=>tt,hasActivatedSW:()=>Ko,importLatestWidget:()=>Qr,importRecentWidget:()=>Yr,init:()=>Is,orderTheConnections:()=>vr.X,recursiveFetch:()=>i.zN,recursiveFetchNew:()=>In,removeAllChildren:()=>qo,renderImportedWidget:()=>Xr,renderLatestWidget:()=>ao,renderPage:()=>Jr,renderWidget:()=>Kr,searchLinkMultipleListener:()=>dr,sendEmail:()=>Fo,sendMessage:()=>Ye,sendPersonalEmail:()=>Dr,serviceWorker:()=>We,setHasActivatedSW:()=>bs,storeToDatabase:()=>Ae,subscribedListeners:()=>Yo,unwrapContainers:()=>zo,updateAccessToken:()=>un,uploadAttachment:()=>wi,uploadFile:()=>Ai,uploadImage:()=>Ti,uploadImageV2:()=>ki,uploadR2Storage:()=>vo,uploadToR2PresignedUrl:()=>bo,uploadWithR2PresignedUrl:()=>Hn,validDocumentFormats:()=>yo,validImageFormats:()=>mo});var L=v(957),r=v(4238),h=v(6759),k=v(830),w=v(8635),p=v(8206),t=v(1833),o=v(370),a=v(1317),f=v(5760),C=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function A(P,n){var e=arguments;return C(this,void 0,void 0,function*(){const s=he.V.logfunction("GetAllConceptsByType",e);try{var I=new URLSearchParams;I.append("type",P),I.append("user_id",n.toString());var T=yield(0,a.Xr)("application/x-www-form-urlencoded");const E=yield(0,a.Hh)(o.B.GetAllConceptsByTypeUrl(),{method:"POST",headers:T,body:I});if(E.ok){const S=yield E.json();for(var D=0;D<S.length;D++)t.I.AddConcept(S[D])}else(0,f.ry)(E)}catch(E){(0,f.Mb)(E,o.B.GetAllConceptsByTypeUrl()),(0,f.ey)(s,"GetAllConceptsByType",E)}})}var u=v(6797),c=v(7154),i=v(4174),d=v(2814),g=v(3379),y=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function b(P,n){var e=arguments;return y(this,arguments,void 0,function*(s,I,T=10,D=1){const E=he.V.logfunction("GetCompositionList",e)||{};if(We){E.serviceWorker=!0;try{const l=yield Ye("GetCompositionList",{compositionName:s,userId:I,inpage:T,page:D});return he.V.logUpdate(E),l.data}catch(l){(0,f.ey)(E,"GetCompositionList",l),tt(l)}}let S=yield(0,d.A)(s),m=[];if(S){yield A(s,I);let l=yield t.I.GetConceptsByTypeIdAndUser(S.id,I),U=T*(D-1),V=[];for(let Q=U;Q<U+T;Q++)l[Q]&&V.push(l[Q].id);yield(0,u.Y)(V);for(let Q=U;Q<U+T;Q++)if(l[Q]){let q=yield(0,i.kx)(l[Q].id);m.push(q)}}return he.V.logUpdate(E),m})}function x(P,n){return y(this,arguments,void 0,function*(e,s,I=10,T=1){let D=te(e,s),E=b(e,s),S=[];return Promise.race([D,E]).then(m=>{S.push(...m)}).catch(m=>{}),E.then(m=>{S.push(...m)}),S})}function N(P,n){return y(this,arguments,void 0,function*(e,s,I=10,T=1){if(We)try{return(yield Ye("GetCompositionListAllWithId",{compositionName:e,userId:s,inpage:I,page:T})).data}catch(Q){tt(Q)}let D=yield(0,g.Ay)(e),E=yield(0,d.A)(e),S=[],m=[],l=[],U=[];D.id!=0&&(m=yield c.v.GetConceptsByTypeIdAndUser(D.id,s)),E.id!=0&&(yield A(e,s),U=yield t.I.GetConceptsByTypeIdAndUser(E.id,s),S=U);for(let Q=0;Q<m.length;Q++){let q=!1;for(let X=0;X<U.length;X++)m[Q].ghostId==U[X].ghostId&&(q=!0);q||l.push(m[Q])}let V=[];return V=yield function(Q,q){return y(this,arguments,void 0,function*(X,se,de=10,pe=1){let ue=[],Ie=de*(pe-1),Fe=[],Ue=se.length;for(let Se=Ie;Se<Ie+de-Ue;Se++)X[Se]&&Fe.push(X[Se].id);for(let Se=0;Se<se.length;Se++){let ke=yield W(se[Se].id);ue.push(ke)}yield(0,u.Y)(Fe);for(let Se=Ie;Se<Ie+de-Ue;Se++)if(X[Se]){let ke=yield(0,i.RW)(X[Se].id);ue.push(ke)}return ue})}(S,l,I,T),V})}function B(P,n){return y(this,arguments,void 0,function*(e,s,I=10,T=1){if(We)try{return(yield Ye("GetCompositionListWithId",{compositionName:e,userId:s,inpage:I,page:T})).data}catch(S){tt(S)}let D=yield(0,d.A)(e),E=[];if(D){yield A(e,s);let S=yield t.I.GetConceptsByTypeIdAndUser(D.id,s),m=I*(T-1),l=[];for(let U=m;U<m+I;U++)S[U]&&l.push(S[U].id);yield(0,u.Y)(l);for(let U=m;U<m+I;U++)if(S[U]){let V=yield(0,i.RW)(S[U].id);E.push(V)}}return E})}function O(P,n){return y(this,arguments,void 0,function*(e,s,I=10,T=1){let D=yield(0,d.w)(e),E=[];if(D){yield A(e,s);let S=yield t.I.GetConceptsByTypeIdAndUser(D.id,s),m=I*(T-1),l=[];for(let U=m;U<m+I;U++)S[U]&&l.push(S[U].id);yield(0,u.Y)(l);for(let U=m;U<m+I;U++)if(S[U]){let V=yield(0,i.RW)(S[U].id);E.push(V)}}return E})}var G=v(3967),F=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})},M=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function j(P){return M(this,void 0,void 0,function*(){var n,e;try{if(We)try{return(yield Ye("GetCompositionLocal",{id:P})).data}catch(S){tt(S)}let s=[],I={};s=yield G.G.GetConnectionsOfCompositionLocal(P);let T=[];for(let S=0;S<s.length;S++)T.includes(s[S].ofTheConceptId)||T.push(s[S].ofTheConceptId);let D=yield c.v.GetConcept(P);if(D.id==0){let S=yield function(m){var l=arguments;return F(this,void 0,void 0,function*(){const U=he.V.logfunction("TranslateLocalToReal",l);let V=(0,H.o)();try{var Q=yield(0,a.ab)("application/x-www-form-urlencoded");const q=yield(0,a.Hh)(o.B.GetRealConceptById(),{method:"POST",headers:Q,body:`id=${m}`});if(q.ok)return V=yield q.json(),V.id>0&&t.I.AddConcept(V),V;(0,f.ry)(q),he.V.logUpdate(U)}catch(q){(0,f.Mb)(q,o.B.GetRealConceptById()),(0,f.ey)(U,"TranslateLocalToReal",q)}return V})}(P);if(S.id>0)return yield(0,i.Nj)(S.id)}let E=yield $(P,s,T);return I[(e=(n=D?.type)===null||n===void 0?void 0:n.characterValue)!==null&&e!==void 0?e:"top"]=E,I}catch(s){throw s}})}function W(P){return M(this,void 0,void 0,function*(){var n,e;try{if(We)try{return(yield Ye("GetCompositionLocalWithId",{id:P})).data}catch(S){tt(S)}let s=[],I={},T={};s=yield G.G.GetConnectionsOfCompositionLocal(P);let D=[];for(let S=0;S<s.length;S++)D.includes(s[S].ofTheConceptId)||D.push(s[S].ofTheConceptId);let E=yield c.v.GetConcept(P);if(E.id!=0){let S=yield $(P,s,D);I[(e=(n=E?.type)===null||n===void 0?void 0:n.characterValue)!==null&&e!==void 0?e:"top"]=S}return T.data=I,T.id=P,T}catch(s){throw s}})}function $(P,n,e){return M(this,arguments,void 0,function*(s,I,T,D=[]){var E,S,m;let l={},U=[],V=yield c.v.GetConcept(s);if(V.id!=0&&V.type==null){let Q=V.typeId,q=yield c.v.GetConcept(Q);V.type=q}if((E=V?.type)===null||E===void 0||E.characterValue,!T.includes(s))return V?.characterValue;if(D.includes(s))return"";D.push(s);for(let Q=0;Q<I.length;Q++)if(I[Q].ofTheConceptId==s){let q=I[Q].toTheConceptId,X=yield c.v.GetConcept(q);if(X.id!=0&&X?.type==null){let pe=X.typeId,ue=yield c.v.GetConcept(pe);X.type=ue}let se="the_",de=((m=(S=X?.type)===null||S===void 0?void 0:S.characterValue)!==null&&m!==void 0?m:"top").replace(se,"");if(isNaN(Number(de))){if(de){const pe=yield $(q,I,T);l[de]=pe}}else{const pe=yield $(q,I,T);U[de]=pe,l=U}}return l})}var K=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function te(P,n){return K(this,void 0,void 0,function*(){if(We)try{return(yield Ye("GetCompositionListLocal",{compositionName:P,userId:n})).data}catch(e){tt(e)}try{let e=yield(0,g.Ay)(P),s=[];if(e.id!=0){let I=yield c.v.GetConceptsByTypeIdAndUser(e.id,n);for(let T=0;T<I.length;T++){let D=yield j(I[T].id);s.push(D)}}return s}catch(e){throw e}})}function ae(P,n){return K(this,void 0,void 0,function*(){if(We)try{return(yield Ye("GetCompositionListLocalWithId",{compositionName:P,userId:n})).data}catch(e){tt(e)}try{let e=yield(0,g.Ay)(P),s=[];if(e.id!=0){let I=yield c.v.GetConceptsByTypeIdAndUser(e.id,n);for(let T=0;T<I.length;T++){let D=yield W(I[T].id);s.push(D)}}return s}catch(e){throw e}})}var z=v(5793),ie=v(6927),ce=v(8196),oe=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function J(P,n,e){var s=arguments;return oe(this,arguments,void 0,function*(I,T,D,E=10,S=1){const m=he.V.logfunction("GetConnectionOfTheConcept",s)||{};let l=[];try{if(We){m.serviceWorker=!0;try{const q=yield Ye("GetConnectionOfTheConcept",{typeId:I,ofTheConceptId:T,userId:D,inpage:E,page:S});return he.V.logUpdate(m),q.data}catch(q){(0,f.ey)(m,"GetConnectionOfTheConcept",q),tt(q)}}let U=new URLSearchParams;U.append("typeId",`${I}`),U.append("ofTheConceptId",`${T}`),U.append("userId",`${D}`),U.append("inpage",`${E}`),U.append("page",`${S}`);let V=yield(0,a.Xr)("application/x-www-form-urlencoded");const Q=yield(0,a.Hh)(o.B.GetAllConnectionsOfConceptUrl(),{method:"POST",headers:V,body:U});return Q.ok?l=yield Q.json():((0,f.ey)(m,"GetConnectionOfTheConcept",Q.status),(0,f.ry)(Q)),he.V.logUpdate(m),l}catch(U){(0,f.Mb)(U,o.B.GetAllConnectionsOfConceptUrl()),(0,f.ey)(m,"GetConnectionOfTheConcept",U)}})}var ee=v(4990),ne=v(7015),H=v(6047),re=v(9775),le=v(1974),me=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Ce(P,n,e,s){return me(this,arguments,void 0,function*(I,T,D,E,S=1,m=4){if(I>0&&D>0){var l=T,U=yield re.p.getId(),V=new ee.N(U,I,D,l,E,S,m);return I==D?(V.ofTheConceptId=0,V.toTheConceptId=1,V):(V.toUpdate=!0,V.isTemp=!1,ne.Y.AddConnection(V),V)}throw new le.z("cannot create connection because id are negative ",!1,400,"")})}var Te=v(9858),ye=v(5747),ge=v(2404),_e=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Le(P,n,e){return _e(this,arguments,void 0,function*(s,I,T,D=!1,E=!1){var S,m;if(We)try{return(yield Ye("CreateConnectionBetweenTwoConcepts",{ofTheConcept:s,toTheConcept:I,linker:T,both:D,count:E})).data}catch(X){tt(X)}let l=s.userId;if(D){let X=T+"_by",se=((S=I.type)===null||S===void 0?void 0:S.characterValue)+"_s_"+X;E&&(yield ve(X,I,l));let de=yield(0,ge.A)("connection",se,!1,999,999,999),pe=new ee.N(0,I.id,s.id,l,de.id,1e3,4);ne.Y.AddConnection(pe)}let U=T+"_s",V=((m=s.type)===null||m===void 0?void 0:m.characterValue)+"_s_"+U;E&&(yield ve(U,s,l));let Q=yield(0,ge.A)("connection",V,!1,999,999,999),q=new ee.N(0,s.id,I.id,l,Q.id,1e3,4);return ne.Y.AddConnection(q),q})}function ve(P,n){return _e(this,arguments,void 0,function*(e,s,I=null){var T;let D=s,E=I??s.userId,S=e+"_count",m=((T=s.type)===null||T===void 0?void 0:T.characterValue)+"_s_"+S,l=yield(0,ge.A)("connection",m,!1,E,4,999),U=yield J(l.id,s.id,E,10,1),V=[],Q=(0,H.o)();for(let X=0;X<U.length;X++){let se=yield(0,ye.A)(U[X].toTheConceptId);V.push(se)}if(V.length<1)Q=yield(0,ge.A)("count","1",!1,E,4,999);else{let X=V[0],se=0;try{se=Number(X.characterValue)}catch{se=0}se+=1,Q=yield(0,ge.A)("count",se.toString(),!1,E,4,999);for(let de=0;de<U.length;de++)(0,Te.m)(U[de].id)}let q=new ee.N(0,D.id,Q.id,D.userId,l.id,1e3,4);yield ne.Y.AddConnection(q)})}function De(P,n,e){return _e(this,arguments,void 0,function*(s,I,T,D=!1,E=!1){var S,m;let l=s.userId;if(D){let q=T+"_by",X=((S=I.type)===null||S===void 0?void 0:S.characterValue)+"_s_"+q;E&&(yield ve(q,I,l));let se=yield(0,ge.A)("connection",X,!1,999,999,999),de=new ee.N(0,I.id,s.id,l,se.id,1e3,4);ne.Y.AddConnection(de)}let U=T+"_s",V=((m=s.type)===null||m===void 0?void 0:m.characterValue)+"_s_"+U;E&&(yield ve(U,s,l));let Q=yield(0,ge.A)("connection",V,!1,999,999,999);return yield Ce(s.id,s.userId,I.id,Q.id,1e3,4)})}var we=v(2051),fe=(v(6948),function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})});function Ae(P,n){const e=he.V.logfunction("storeToDatabase",[P,"noindexdb"]);he.V.logUpdate(e)}function Ee(P,n,e){return fe(this,void 0,void 0,function*(){const s=he.V.logfunction("getFromDatabaseWithType",[P,"noindexdb"]);he.V.logUpdate(s)})}function Ne(P){return fe(this,void 0,void 0,function*(){const n=he.V.logfunction("getObjectsFromIndexDb",[P,"noindexdb"]);he.V.logUpdate(n)})}var be=v(3229),Re=v(6297),Be=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Me(P,n){var e=arguments;return Be(this,arguments,void 0,function*(s,I,T=10,D=1){var E;const S=he.V.logfunction("GetLink",e)||{};if(We){S.serviceWorker=!0;try{const Q=yield Ye("GetLink",{id:s,linker:I,inpage:T,page:D});return he.V.logUpdate(S),Q.data}catch(Q){(0,f.ey)(S,"GetLink",Q),tt(Q)}}let m=[],l=yield(0,ye.A)(s),U=((E=l.type)===null||E===void 0?void 0:E.characterValue)+"_s_"+I,V=yield(0,Re.A)(U,16);if(V.id>0){let Q=yield J(V.id,l.id,l.userId,T,D),q=[];for(let X=0;X<Q.length;X++)q.push(Q[X].toTheConceptId);yield(0,u.Y)(q);for(let X=0;X<Q.length;X++){let se=Q[X].toTheConceptId,de=yield(0,ye.A)(se),pe=yield(0,i.Ez)(de.id);m.push(pe)}}return he.V.logUpdate(S),m})}function xe(P,n){var e=arguments;return Be(this,arguments,void 0,function*(s,I,T=10,D=1){var E;const S=he.V.logfunction("GetLinkRaw",e);let m=[],l=yield(0,ye.A)(s),U=((E=l.type)===null||E===void 0?void 0:E.characterValue)+"_s_"+I,V=yield(0,Re.A)(U,16);if(V.id>0){let Q=yield J(V.id,l.id,l.userId,T,D),q=[];for(let X=0;X<Q.length;X++)q.push(Q[X].toTheConceptId);for(let X=0;X<Q.length;X++){let se=Q[X].toTheConceptId,de=yield(0,ye.A)(se);m.push(de)}}return he.V.logUpdate(S),m})}var Je=v(3424),ze=v(6757),ft=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};const Rt=new Map;function ut(P,n){var e=arguments;return ft(this,void 0,void 0,function*(){const s=he.V.logfunction("MakeTheTypeConceptApi",e);let I=(0,H.o)();if(Rt.has(P))return Rt.get(P)||I;const T=ft(this,void 0,void 0,function*(){try{if(I=yield(0,ze.Az)(P),I.id==0||I.typeId==4){let D=yield(0,a.Xr)("application/x-www-form-urlencoded");const E=yield(0,a.Hh)(o.B.MakeTheTypeConceptUrl(),{method:"POST",headers:D,body:`type=${P}`});if(!E.ok)throw(0,f.ry)(E),new Error(`Error! status: ${E.status}`);I=yield E.json(),he.V.logUpdate(s)}}catch(D){(0,f.Mb)(D,o.B.MakeTheTypeConceptUrl()),(0,f.ey)(s,"MakeTheTypeConceptApi",D)}finally{Rt.delete(P)}return I});return Rt.set(P,T),T})}var Gt=v(838),bn=v(4647),ci=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function li(P){var n=arguments;return ci(this,void 0,void 0,function*(){const e=he.V.logfunction("GetLinkerConnectionFromConcepts",n);let s=yield(0,Gt.l)(P);for(let I=0;I<s.length;I++){let T=s[I],D=T.typeId,E=yield(0,ye.A)(D);T.type=E}return he.V.logUpdate(e),s})}function di(P){var n=arguments;return ci(this,void 0,void 0,function*(){const e=he.V.logfunction("GetLinkerConnectionToConcepts",n);let s=yield(0,bn.W)(P);for(let I=0;I<s.length;I++){let T=s[I],D=T.typeId,E=yield(0,ye.A)(D);T.type=E}return he.V.logUpdate(e),s})}var _s=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})},Ss=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})},xs=v(1804),ho=v(903),Ns=v(3796),Ls=v(5978),ui=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function po(P){var n=arguments;return ui(this,void 0,void 0,function*(){const e=he.V.logfunction("DeleteConceptById",n);if(We)try{return(yield Ye("DeleteConceptById",{id:P})).data}catch(D){tt(D)}if(P>0){var s=yield t.I.GetConcept(P);if(s.id>0){var I=s.typeId,T=s.characterValue;yield Ns.c.removeTypeConcept(I,P),yield xs.f.removeNodeByCharacter(T,P),yield function(D){var E=arguments;return Ss(this,void 0,void 0,function*(){let S=!1;const m=he.V.logfunction("DeleteTheConcept",E);try{const l=new FormData;l.append("id",D.toString());let U=yield(0,a.BZ)();const V=yield(0,a.Hh)(o.B.DeleteConceptUrl(),{method:"POST",headers:U,body:l});V.ok?S=(yield V.json()).success:(0,f.ry)(V),S&&t.I.AddNpc(D),he.V.logUpdate(m)}catch(l){(0,f.Mb)(l,o.B.DeleteConceptUrl()),(0,f.ey)(m,"DeleteTheConcept",l)}return S})}(P),yield ho.W.removeNodeFromTree(P),yield Ls.H.removeNodeFromTree(P)}}else c.v.RemoveConceptById(P);he.V.logUpdate(e)})}function hi(P){return ui(this,void 0,void 0,function*(){if(We)try{return(yield Ye("DeleteUser",{id:P})).data}catch(n){tt(n)}P>0?function(n){var e=arguments;_s(this,void 0,void 0,function*(){const s=he.V.logfunction("DeleteUserInBackend",e);try{var I=yield(0,a.ab)("application/json","");let T=o.B.DeleteUserUrl();T=T+"?conceptId="+n+"&apiKey=freeschema";const D=yield(0,a.Hh)(T,{method:"POST",headers:I});if(D.ok){let E=yield D.json(),S=Number(E.data);return po(S),he.V.logUpdate(s),S}throw(0,f.ry)(D),new Error(`Delete composition Error! status: ${D.status}`)}catch(T){(0,f.Mb)(T,o.B.DeleteConceptUrl()),(0,f.ey)(s,"DeleteUserInBackend",T)}})}(P):c.v.RemoveConceptById(P)})}var Ds=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function pi(P,n){return Ds(this,void 0,void 0,function*(){try{const e=yield(0,a.ab)(null,n),s=new FormData;s.append("id",P.toString());const I=yield(0,a.Hh)(o.B.DeleteConceptUrl(),{method:"POST",body:s,headers:e});if(!I.ok)throw(0,f.ry)(I),new Error(`Delete composition Error! status: ${I.status}`)}catch(e){(0,f.Mb)(e,o.B.DeleteConceptUrl())}})}var Qt=v(1402),qt=v(6715),Ps=v(3693),fi=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Rs(P){var n=arguments;return fi(this,void 0,void 0,function*(){const e=he.V.logfunction("GetConnection",n);let s=yield qt.d.GetConnection(P);try{if(s.id!=0)return s;{const I=new FormData;I.append("id",P.toString());const T={method:"POST",headers:yield(0,a.BZ)(),body:I};let D;try{D=yield(0,a.Hh)(o.B.GetConnectionUrl(),T)}catch{D=yield(0,Ps.g)(T,"/api/get-connection-by-id")}return yield function(E,S){return fi(this,void 0,void 0,function*(){E.ok?(S=yield E.json(),qt.d.AddConnection(S)):(0,f.ry)(E)})}(D,s),he.V.logUpdate(e),s}}catch(I){(0,f.Mb)(I,o.B.GetConnectionUrl()),(0,f.ey)(e,"GetConnection",I)}})}var Bs=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function mi(P){var n=arguments;return Bs(this,void 0,void 0,function*(){const e=he.V.logfunction("GetConnectionById",n);if(Qt.J.activateStatus===!0)try{Qt.J.incrementConnection(P)}catch{he.V.log("ERROR","Error Adding Connection")}if(We)try{return(yield Ye("GetConnectionById",{id:P})).data}catch(I){tt(I)}let s=yield qt.d.GetConnection(P);return(s==null||s.id==0)&&P!=null&&P!=null&&(s=yield Rs(P)),he.V.logUpdate(e),s})}var Es=v(993),Os=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})},Fs=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function yi(P,n,e){return Fs(this,arguments,void 0,function*(s,I,T,D=4,E=999){const S=he.V.logfunction("MakeTheTimestamp")||{};if(We){S.serviceWorker=!0;try{const q=yield Ye("MakeTheTimestamp",{type:s,referent:I,userId:T,accessId:D,sessionInformationId:E});return he.V.logUpdate(S),q.data}catch(q){(0,f.ey)(S,"MakeTheTimestamp",q),tt(q)}}let m,l="",U=s.startsWith("the_"),V=(0,H.o)();return l=U?s:"the_"+s,V=yield ut(l,T),m=yield function(q,X,se,de,pe,ue,Ie){return Os(this,void 0,void 0,function*(){let Fe=yield(0,Re.A)(q,de),Ue=Fe;return Ue.id==0&&(Fe=yield(0,Es.Ay)(q,X,se,de,pe,ue,Ie),Ue=Fe),Ue})}(I,T,4,V.id,0,D,l),he.V.logUpdate(S),m})}class nn{constructor(){this.composition=0,this.type="",this.linker="",this.inpage=10,this.page=1,this.listLinkers=[],this.fullLinkers=[],this.textSearch="",this.logic="or",this.reverse=!1,this.doFilter=!1,this.filterSearches=[],this.selectors=[],this.ofCompositions=[]}}var mt=v(3246),Sn=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function gi(){var P=arguments;return Sn(this,arguments,void 0,function*(n=0,e=[],s="",I=[]){const T=he.V.logfunction("RecursiveSearchApi",P)||{};let D=[];try{if(We){T.serviceWorker=!0;try{const U=yield Ye("RecursiveSearchApi",{composition:n,listLinkers:e,textSearch:s,fullLinkers:I});return he.V.logUpdate(T),U.data}catch(U){(0,f.ey)(T,"RecursiveSearchApi",U),tt(U)}}let E=new nn;E.composition=n,E.listLinkers=e,E.fullLinkers=I,E.textSearch=s;let S=JSON.stringify(E),m=yield(0,a.Xr)();const l=yield(0,a.Hh)(o.B.RecursiveSearchUrl(),{method:"POST",headers:m,body:S});if(l.ok){const U=yield l.json();let V=U.compositionIds,Q=U.internalConnections;U.externalConnections,D=yield(0,mt.p8)(V,Q)}else(0,f.ey)(T,"RecursiveSearchApi",l.status),(0,f.ry)(l);he.V.logUpdate(T)}catch(E){(0,f.ey)(T,"RecursiveSearchApi",E),(0,f.Mb)(E,o.B.RecursiveSearchUrl())}return D})}function vi(){var P=arguments;return Sn(this,arguments,void 0,function*(n=0,e=[],s=""){const I=he.V.logfunction("RecursiveSearchApiWithInternalConnections",P)||{};let T=[];try{if(We){I.serviceWorker=!0;try{const l=yield Ye("RecursiveSearchApiWithInternalConnections",{composition:n,listLinkers:e,textSearch:s});return he.V.logUpdate(I),l.data}catch(l){(0,f.ey)(I,"RecursiveSearchApiWithInternalConnections",l),tt(l)}}let D=new nn;D.composition=n,D.listLinkers=e,D.textSearch=s;let E=JSON.stringify(D),S=yield(0,a.Xr)();const m=yield(0,a.Hh)(o.B.RecursiveSearchUrl(),{method:"POST",headers:S,body:E});if(m.ok){const l=yield m.json();let U=l.compositionIds,V=l.internalConnections;l.externalConnections,T=yield(0,mt.km)(U,V),he.V.logUpdate(I)}else(0,f.ey)(I,"GetCompositionConnectionsBetweenTwoConcepts",m.status),(0,f.ry)(m)}catch(D){(0,f.ey)(I,"GetCompositionConnectionsBetweenTwoConcepts",D),(0,f.Mb)(D,o.B.RecursiveSearchUrl())}return T})}function fo(){var P=arguments;return Sn(this,arguments,void 0,function*(n=0,e=[],s="",I=[]){const T=he.V.logfunction("RecursiveSearchApiRaw",P)||{};try{if(We){T.serviceWorker=!0;try{const l=yield Ye("RecursiveSearchApiRaw",{composition:n,listLinkers:e,textSearch:s,fullLinkers:I});return he.V.logUpdate(T),l.data}catch(l){(0,f.ey)(T,"RecursiveSearchApiRaw",l),tt(l)}}let D=new nn;D.composition=n,D.listLinkers=e,D.textSearch=s,D.fullLinkers=I;let E=JSON.stringify(D),S=yield(0,a.Xr)();const m=yield(0,a.Hh)(o.B.RecursiveSearchUrl(),{method:"POST",headers:S,body:E});if(m.ok){const l=yield m.json();return l.compositionIds,l.internalConnections,l.externalConnections,he.V.logUpdate(T),l}return(0,f.ey)(T,"RecursiveSearchApiRaw",m.status),(0,f.ry)(m),he.V.logUpdate(T),[]}catch(D){(0,f.ey)(T,"RecursiveSearchApiRaw",D),(0,f.Mb)(D,o.B.RecursiveSearchUrl())}})}function Ci(){var P=arguments;return Sn(this,arguments,void 0,function*(n=0,e=[],s=""){const I=he.V.logfunction("RecursiveSearchApiRawFullLinker",P)||{};try{if(We){I.serviceWorker=!0;try{const m=yield Ye("RecursiveSearchApiRawFullLinker",{composition:n,fullLinkers:e,textSearch:s});return he.V.logUpdate(I),m.data}catch(m){(0,f.ey)(I,"RecursiveSearchApiRawFullLinker",m),tt(m)}}let T=new nn;T.composition=n,T.fullLinkers=e,T.textSearch=s;let D=JSON.stringify(T),E=yield(0,a.Xr)();const S=yield(0,a.Hh)(o.B.RecursiveSearchUrl(),{method:"POST",headers:E,body:D});if(S.ok){const m=yield S.json();return m.compositionIds,m.internalConnections,m.externalConnections,he.V.logUpdate(I),m}return(0,f.ey)(I,"RecursiveSearchApiRawFullLinker",S.status),(0,f.ry)(S),he.V.logUpdate(I),[]}catch(T){(0,f.Mb)(T,o.B.RecursiveSearchUrl()),(0,f.ey)(I,"RecursiveSearchApiRawFullLinker",T)}})}function bi(){var P=arguments;return Sn(this,arguments,void 0,function*(n=0,e=[],s=""){const I=he.V.logfunction("RecursiveSearchApiRawFullLinker",P)||{};try{if(We)try{I.serviceWorker=!0;const m=yield Ye("RecursiveSearchApiNewRawFullLinker",{composition:n,fullLinkers:e,textSearch:s});return he.V.logUpdate(I),m.data}catch(m){(0,f.ey)(I,"RecursiveSearchApiNewRawFullLinker",m),tt(m)}let T=new nn;T.composition=n,T.fullLinkers=e,T.textSearch=s;let D=JSON.stringify(T),E=yield(0,a.Xr)();const S=yield(0,a.Hh)(o.B.RecursiveSearchUrl(),{method:"POST",headers:E,body:D});if(S.ok){const m=yield S.json();return m.compositionIds,m.internalConnections,m.externalConnections,he.V.logUpdate(I),m}return(0,f.ey)(I,"RecursiveSearchApiNewRawFullLinker",S.status),(0,f.ry)(S),he.V.logUpdate(I),[]}catch(T){(0,f.Mb)(T,o.B.RecursiveSearchUrl()),(0,f.ey)(I,"RecursiveSearchApiNewRawFullLinker",T)}})}var Bt=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};const mo=["image/jpeg","image/jpg","image/png","image/webp"],yo=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"];function go(P,n){return typeof P.get=="function"?P.get(n):void 0}function Ii(P,n){return Bt(this,arguments,void 0,function*(e,s,I=""){try{const T=yield(0,a.ab)(null,I),D=yield(0,a.Hh)(e,{method:"POST",body:s,headers:T});return D.ok?yield D.json():(yield D.text(),null)}catch{return null}})}function Us(P,n){if(n.fileName)return n.fileName;if(typeof P?.name=="string"&&P.name)return P.name;if(typeof P?.uri=="string"){const[e]=P.uri.split("?"),s=e.split("/").pop();if(s)return s}return"upload"}function Gs(P){return Bt(this,void 0,void 0,function*(){if(function(n){return typeof Blob<"u"&&n instanceof Blob}(P)||typeof P=="string"||P instanceof ArrayBuffer)return P;if(typeof P?.uri=="string")try{const n=yield fetch(P.uri);if(n.ok)return yield n.blob()}catch{}return P})}function wi(P,n){return Bt(this,void 0,void 0,function*(){const e=he.V.logfunction("uploadAttachment");try{const s=yo.includes(P.type)||P.name.toLowerCase().endsWith(".md"),I=mo.includes(P.type);if(!s&&!I)return{message:"Invalid File Format",success:!1};const T=yield Hn(P,{},n),D=function(E){const S=E?.data;return typeof S=="string"?S:S&&typeof S.url=="string"?S.url:typeof E?.url=="string"?E.url:void 0}(T);return D?(he.V.logUpdate(e),{message:T.message||"Upload Success",success:!0,url:D}):{message:T.message||"File Upload Failed",success:!1}}catch(s){throw(0,f.ey)(e,"uploadAttachment",s),s}})}function vo(P){return Bt(this,arguments,void 0,function*(n,e=""){return Ii(o.B.uploadR2StorageUrl(),function(s){if(function(T,D){return typeof T.has=="function"&&T.has(D)}(s,"file"))return s;const I=go(s,"image");return I!=null&&function(T,D){const E=typeof D=="object"&&D?D.name:void 0;E?T.append("file",D,E):T.append("file",D)}(s,I),s}(n),e)})}function Co(P){return Bt(this,arguments,void 0,function*(n,e=""){return function(s,I){return Bt(this,arguments,void 0,function*(T,D,E=""){try{const S=yield(0,a.Hh)(T,{method:"POST",body:JSON.stringify(D),headers:yield(0,a.ab)("application/json",E)});return S.ok?yield S.json():(yield S.text(),null)}catch{return null}})}(o.B.r2PresignedUploadUrl(),n,e)})}function bo(P,n,e){return Bt(this,void 0,void 0,function*(){return fetch(P,{method:"PUT",headers:{"Content-Type":e},body:yield Gs(n)})})}function Hn(P){return Bt(this,arguments,void 0,function*(n,e={},s=""){var I,T,D,E;const S=function(U,V){return V.contentType||U?.type||"application/octet-stream"}(n,e),m=yield Co({fileName:Us(n,e),contentType:S,folder:(I=e.folder)!==null&&I!==void 0?I:"",expiresInSeconds:(T=e.expiresInSeconds)!==null&&T!==void 0?T:900},s);if(!m?.success||!(!((D=m.data)===null||D===void 0)&&D.uploadUrl))return{message:(E=m?.message)!==null&&E!==void 0?E:"Unable to create pre-signed R2 upload URL.",success:!1};const l=yield bo(m.data.uploadUrl,n,m.data.contentType||S);if(!l.ok){let U="";try{U=yield l.text()}catch{U=""}return{message:`R2 upload failed with HTTP ${l.status}${U?`: ${U}`:""}`,success:!1,data:m.data}}return{message:"Upload Success",success:!0,url:m.data.publicUrl,data:m.data,eTag:l.headers.get("etag")}})}function Ti(P){return Bt(this,arguments,void 0,function*(n,e=""){const s=he.V.logfunction("uploadImage");try{const I=function(D){var E;return(E=go(D,"file"))!==null&&E!==void 0?E:go(D,"image")}(n);if(I==null)return he.V.logUpdate(s),{message:"Missing image file",success:!1};const T=yield Hn(I,{},e);return he.V.logUpdate(s),T}catch(I){return(0,f.ey)(s,"uploadImage",I),{message:"File Upload Failed",success:!1}}})}function ki(P){return Bt(this,arguments,void 0,function*(n,e=""){const s=he.V.logfunction("uploadImageV2");try{const I=yield Ii(o.B.uploadImageUrlWithSmall(),n,e);return he.V.logUpdate(s),I}catch(I){return(0,f.ey)(s,"uploadImageV2",I),null}})}function Ai(P){return Bt(this,arguments,void 0,function*(n,e=""){const s=he.V.logfunction("uploadFile");try{const I=yield vo(n,e);return he.V.logUpdate(s),I}catch(I){return(0,f.ey)(s,"uploadFile",I),null}})}function _i(){return Bt(this,void 0,void 0,function*(){let P=yield(0,a.Xr)(),n={};try{const e=yield(0,a.Hh)(o.B.UploadFileLimitUrl(),{method:"GET",headers:P});e.ok&&(n=yield e.json())}catch(e){throw e}return n})}var on=v(9368),$n=v(4622),Ve=v(8444),Ms=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Si(P,n){var e=arguments;return Ms(this,arguments,void 0,function*(s,I,T="boomconsole.com"){const D=he.V.logfunction("LoginToBackend",e);try{let E={email:s,password:I,application:T},S=new Headers;S.append("Content-Type","application/json");let m=JSON.stringify(E);const l=yield fetch(o.B.LoginUrl(),{method:"POST",headers:S,body:m}),U=yield l.json();if(l.ok)return yield Ve.b.saveUserProfile(U),un(Ve.b.BearerAccessToken,void 0,Ve.b.refreshToken),he.V.logUpdate(D),U;(0,f.ER)(l,U)}catch(E){(0,f.Mb)(E,o.B.LoginUrl()),(0,f.ey)(D,"LoginToBackend",E)}})}var Io=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function xi(P){return Io(this,void 0,void 0,function*(){return yield function(){return Io(this,arguments,void 0,function*(e="",s={}){let I={message:"success",status:!1,statusCode:200,data:"cannot signup"};try{const T=yield fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(s)}),D=yield T.json();return T.ok?I={message:"success",status:!0,statusCode:200,data:D}:(0,f.ER)(T,D),I}catch(T){(0,f.Mb)(T,e)}})}(o.B.SignupUrl(),P)})}function Ni(P){return Io(this,void 0,void 0,function*(){const n=o.B.NODE_URL,e=yield fetch(`${n}/api/v1/entity/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(e.ok)return e.json();{if(e.status===404)throw new Error("404, Not found");if(e.status===500)throw new Error("500, internal server error");let s=yield e.json();throw new Error(s.message)}})}var Ws=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Li(P){return Ws(this,void 0,void 0,function*(){const n=JSON.stringify({email:P.email,password:P.password});let e={message:"success",status:!1,statusCode:200,data:""};const s=new Headers;s.append("Content-Type","application/json");const I=o.B.LoginUrl();try{const T=yield fetch(I,{method:"POST",headers:s,body:n,redirect:"follow"}),D=yield T.json();if(T.ok){const E=D?.data;e={message:"success",status:!0,statusCode:200,data:E},un(E.token)}else(0,f.ER)(T,D);return e}catch(T){(0,f.Mb)(T,I)}})}var wo=v(2801),zn=v(388);function js(P=[],n){Array.isArray(P)&&P.splice(P.findIndex(function(e){return e.id===n.id}),1)}function Vs(P=[],n){Array.isArray(P)&&P.splice(P.findIndex(function(e){return e.id===n.id}),1)}class To{constructor(n,e,s,I){this.expiryTime=new Date(Date.now()+6e5),this.height=1,this.key=n,this.value=e,this.leftNode=s,this.rightNode=I}isValid(){const n=new Date(Date.now());return!(this.expiryTime<n)||(Yt.removeNodeFromTree(this.key),!1)}saveToCache(n){this.value.cached=n}addNode(n,e,s){if(e==null)return e=n;const I=e.leftNode,T=e.rightNode;if(e.key>n.key)e.leftNode=this.addNode(n,I,s);else{if(!(e.key<n.key))return this.isValid(),e=n;e.rightNode=this.addNode(n,T,s)}e.height=1+Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode));const D=this.getBalanceFactor(e);if(D>1&&e.leftNode){if(n.key<e.leftNode.key)return this.rightRotate(e);if(n.key>e.leftNode.key)return e.leftNode=this.leftRotate(e.leftNode),this.rightRotate(e)}if(D<-1&&e.rightNode){if(n.key>e.rightNode.key)return this.leftRotate(e);if(n.key<e.rightNode.key)return e.rightNode=this.rightRotate(e.rightNode),this.leftRotate(e)}return this.isValid(),e}rightRotate(n){if(n){const e=n.leftNode;if(e){const s=e.rightNode;return n.leftNode=s,e.rightNode=n,n.height=Math.max(this.getHeight(n.leftNode),this.getHeight(n.rightNode))+1,e.height=Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode))+1,e}}return n}leftRotate(n){if(n){const e=n.rightNode;if(e){const s=e.leftNode;return e.leftNode=n,n.rightNode=s,n.height=Math.max(this.getHeight(n.leftNode),this.getHeight(n.rightNode))+1,e.height=Math.max(this.getHeight(e.leftNode),this.getHeight(n.rightNode))+1,e}}return n}getHeight(n){return n?n.height:0}getBalanceFactor(n){return n==null?0:this.getHeight(n.leftNode)-this.getHeight(n.rightNode)}getFromNode(n,e){return e&&(n==e.key&&e.isValid()?e:n<e.key?this.getFromNode(n,e.leftNode):n>e.key?this.getFromNode(n,e.rightNode):e)}removeNode(n,e){if(n==null)return n;if(n.key>e)return n.leftNode=this.removeNode(n.leftNode,e),n;if(n.key<e)return n.rightNode=this.removeNode(n.rightNode,e),n;if(n.leftNode==null){const s=n.rightNode;return n=null,s}if(n.rightNode==null){const s=n.leftNode;return n=null,s}{const s=this.inOrderSuccessor(n.rightNode);return n.value=s.value,n.key=s.key,n.rightNode=this.removeNode(n.rightNode,s.key),n}}countNodeBelow(n){return n==null?0:1+this.countNodeBelow(n.leftNode)+this.countNodeBelow(n.rightNode)}inOrderSuccessor(n){for(;n.leftNode!=null;)n=n.leftNode;return n}}var Di=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class Yt{static addNodeToTree(n){if(this.root==null)return this.root=n,this.root;this.root=this.root.addNode(n,this.root,this.root.height)}static addCompositionToTree(n){const e=new To(n.id,n,null,null);this.addNodeToTree(e)}static getNodeFromTree(n){return Di(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(n,this.root):null})}static removeNodeFromTree(n){return Di(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,n))})}static countNumberOfNodes(){return this.root?this.root.countNodeBelow(this.root):0}}Yt.root=null;var qs=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function In(P,n,e,s){return qs(this,arguments,void 0,function*(I,T,D,E,S=[]){var m,l;let U={};const V=[];if(I==0)return"";let Q=ko(D,I);if((Q==null||Q.id==0)&&I!=null&&I!=null&&(Q=yield(0,ye.A)(I)),Q.id!=0&&Q.type==null){const q=Q.typeId;let X=ko(D,q);Q.type=X,X==null&&q!=null&&q!=null&&(X=yield(0,ye.A)(q),Q.type=X)}if(!E.includes(I))return Q?.characterValue;if(S.includes(I))return"";S.push(I);for(let q=0;q<T.length;q++)if(T[q].ofTheConceptId==I){const X=T[q].toTheConceptId;if(E.includes(I)){let se=ko(D,X);if((se==null||se.id==0)&&X!=null&&X!=null&&(se=yield(0,ye.A)(X)),se.id!=0&&se?.type==null){const ue=se.typeId;let Ie=yield t.I.GetConcept(ue);se.type=Ie,Ie==null&&ue!=null&&ue!=null&&(Ie=yield(0,ye.A)(ue),se.type=Ie)}const de="the_",pe=((l=(m=se?.type)===null||m===void 0?void 0:m.characterValue)!==null&&l!==void 0?l:"").replace(de,"");if(isNaN(Number(pe))){if(pe){const ue=yield In(X,T,D,E,S);U[pe]=ue}}else{const ue=yield In(X,T,D,E,S);V[pe]=ue,U=V}}}return U})}function ko(P,n){let e=(0,H.o)();for(let s=0;s<P.length;s++)if(n==P[s].id)return e=P[s],e;return e}var Hs=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class xn{constructor(){this.id=0,this.mainConcept=(0,H.o)(),this.connections=[],this.concepts=[],this.subcompositions=[],this.cached={}}updateCache(){return Hs(this,void 0,void 0,function*(){if(this.mainConcept.id==0)for(let n=0;n<this.concepts.length;n++)this.concepts[n].id==this.id&&(this.mainConcept=this.concepts[n]);this.cached=yield In(this.id,this.connections,this.concepts,this.subcompositions,[])})}UpdateAcrossDistributedSystem(){var n,e,s;try{this.id!=0&&(e="compositionUpdate",s=(n=this.id)===null||n===void 0?void 0:n.toString(),o.B.MQTT_CONNECTION&&o.B.MQTT_CONNECTION.publish(e,s))}catch{}}isUpdating(){this.UpdateAcrossDistributedSystem()}GetDataCache(){var n,e,s;const I={};I[(s=(e=(n=this.mainConcept)===null||n===void 0?void 0:n.type)===null||e===void 0?void 0:e.characterValue)!==null&&s!==void 0?s:""]=this.cached;const T={};return T.data=I,T.id=this.id,T}}var $s=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Nn(P){return $s(this,arguments,void 0,function*(n,e=null,s=null,I=null,T=null,D=null,E=null,S=null){const m=T??999,l=D??4,U=E??999;let V=I??0,Q=(0,H.o)();S==null&&(S=new xn);for(const q in n)if(typeof n[q]=="object"||Array.isArray(n[q])){const X=yield(0,ge.A)(q,"",!0,m,l,U);if(e==null&&s==null){let se=V;Q=X,se=X.id,V=X.id,S.concepts.push(X),S.id=X.id,yield Nn(n[q],X.id,X.userId,se,T,D,E,S)}else{const se=e??999,de=s??999,pe=V;Q=X,S.concepts.push(X);const ue=yield(0,be.q)(se,de,X.id,pe);S.connections.push(ue),yield Nn(n[q],X.id,X.userId,pe,T,D,E,S)}n[q]!=null&&n[q]!=null&&S.subcompositions.push(X.id)}else{const X=e??999,se=s??999,de=V,pe=yield(0,ge.A)(q,n[q],!1,m,l,U);S.concepts.push(pe);const ue=yield(0,be.q)(X,se,pe.id,de);S.connections.push(ue)}return Q})}var zs=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Pi(P){return zs(this,void 0,void 0,function*(){const n=he.V.logfunction("UpdateComposition")||{};if(We){n.serviceWorker=!0;try{const ue=yield Ye("UpdateComposition",{patcherStructure:P});return he.V.logUpdate(n),ue.data}catch(ue){(0,f.ey)(n,"UpdateComposition",ue),tt(ue)}}const e=P.userId,s=P.sessionId,I=P.accessId;let T=[];const D=[];let E=(0,H.o)(),S=(0,H.o)();const m=[];let l=P.compositionId;const U=P.ofTheCompositionId;let V=[];if(l<0){let ue=yield(0,ye.A)(l,e);if(!(ue.id>0))return null;l=ue.id}T=yield(0,z.s)(l);const Q=[],q=new xn,X=[];q.id=l,q.isUpdating();let se=[];for(let ue=0;ue<T.length;ue++)(0,wo.A)(X,T[ue].ofTheConceptId),(0,wo.A)(Q,T[ue].ofTheConceptId),(0,wo.A)(Q,T[ue].toTheConceptId),se.push(T[ue].ofTheConceptId);q.subcompositions=X,q.connections=T;for(let ue=0;ue<Q.length;ue++){const Ie=yield(0,ye.A)(Q[ue]);l==Q[ue]&&(E=Ie),U==Q[ue]&&(S=Ie),D.push(Ie)}const de=P.patchObject;for(const ue in de){let Ie=(0,H.o)();const Fe=de[ue];let Ue=E;if(S.id>0&&(Ue=S),Array.isArray(Fe)||typeof Fe=="object"){Ie=yield(0,ge.A)(ue,"",!0,E.userId,4,999),q.subcompositions.push(Ie.id);const ke=(0,zn.vo)(D,Ie);for(let Pe=0;Pe<ke.length;Pe++)if(ke[Pe].id>0){const Oe=(0,zn.wS)(q.connections,ke[Pe].id);V=V.concat(Oe),m.push(ke[Pe])}yield Nn(de[ue],Ie.id,Ie.userId,E.id,E.userId,4,999,q)}else{Ie=yield(0,ge.A)(ue,Fe,!1,e,I,s);const ke=(0,zn.vo)(D,Ie);for(let Pe=0;Pe<ke.length;Pe++)if(ke[Pe].id>0){const Oe=(0,zn.wS)(q.connections,ke[Pe].id);V=V.concat(Oe),m.push(ke[Pe])}}const Se=(0,be.q)(Ue.id,Ue.userId,Ie.id,E.id);D.push(Ie),q.connections.push(Se)}for(let ue=0;ue<V.length;ue++)Vs(q.connections,V[ue]),(0,Te.m)(V[ue].id);for(let ue=0;ue<m.length;ue++)js(D,m[ue]);q.concepts=q.concepts.concat(D),q.mainConcept=E,q.id=E.id,yield q.updateCache(),Yt.addCompositionToTree(q),ne.Y.SyncDataOnline();let pe=q.GetDataCache();return he.V.logUpdate(n),pe})}var Js=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Ri(P,n,e,s){return Js(this,arguments,void 0,function*(I,T,D,E,S=10,m=1){var l=yield(0,a.ab)("application/x-www-form-urlencoded",E),U=new URLSearchParams;U.append("type",I),U.append("search",T),U.append("composition",D),U.append("inpage",S.toString()),U.append("page",m.toString());const V=o.B.SearchCompositionsUrl()+"?"+U.toString();try{const Q=yield(0,a.Hh)(V,{method:"GET",headers:l});return Q.ok?yield Q.json():((0,f.ry)(Q),[])}catch(Q){(0,f.Mb)(Q,V)}})}var Qs=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Bi(P){return Qs(this,arguments,void 0,function*(n,e=""){var s=yield(0,a.ab)("application/json",e);const I=o.B.SearchLinkMultipleAll(),T=JSON.stringify(n);try{const D=yield(0,a.Hh)(I,{method:"POST",headers:s,body:T});return D.ok?yield D.json():((0,f.ry)(D),[])}catch(D){(0,f.Mb)(D,I)}})}var Ei=v(9536),Ln=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Oi(P){return Ln(this,arguments,void 0,function*(n,e=[]){var s,I;let T=[];const D=[];let E={},S={};const m=yield Yt.getNodeFromTree(n),l=[];let U=yield t.I.GetConcept(n);if(U.id==0&&n!=null&&n!=null&&(U=yield(0,Ei.r)(n)),m==null){let V=[];V=e.length>0?Fi(n,e):yield(0,z.s)(n),T=V;for(let q=0;q<T.length;q++)l.includes(T[q].ofTheConceptId)||(l.push(T[q].ofTheConceptId),D.push(T[q].ofTheConceptId)),D.includes(T[q].toTheConceptId)||D.push(T[q].toTheConceptId);Gi(U,T,D,l);let Q=[];S=yield(0,i.zN)(n,T,l,Q),E[(I=(s=U?.type)===null||s===void 0?void 0:s.characterValue)!==null&&I!==void 0?I:""]=S}else S=m.value.GetDataCache(),E=S;return U.id==0?"":E})}function Fi(P,n){const e=[];for(let s=0;s<n.length;s++)n[s].typeId==P&&e.push(n[s]);return e}function Ao(P){return Ln(this,arguments,void 0,function*(n,e=[]){var s,I;let T={},D=[];const E=[];let S;const m={},l=yield Yt.getNodeFromTree(n),U=[];let V=yield t.I.GetConcept(n);if(V.id==0&&n!=null&&n!=null&&(V=yield(0,Ei.r)(n)),l==null){let Q=[];Q=e.length>0?Fi(n,e):yield(0,z.s)(n),D=Q;for(let q=0;q<D.length;q++)U.includes(D[q].ofTheConceptId)||(U.push(D[q].ofTheConceptId),E.push(D[q].ofTheConceptId)),E.includes(D[q].toTheConceptId)||E.push(D[q].toTheConceptId);Gi(V,D,E,U),S=yield(0,i.zN)(n,D,U),m[(I=(s=V?.type)===null||s===void 0?void 0:s.characterValue)!==null&&I!==void 0?I:""]=S,T.created_at=V.entryTimeStamp,T.data=m,T.id=n}else S=l.value.GetDataCache(),T=S;return V.id==0?"":T})}function Ui(P,n){return Ln(this,void 0,void 0,function*(){let e=[];const s=[];e=yield(0,$n.j)(n);for(let I=0;I<P.length;I++){const T=yield Ao(P[I],e);T&&s.push(T)}return s})}function Gi(P,n,e,s){return Ln(this,void 0,void 0,function*(){const I=new xn,T=yield function(E){return Ln(this,void 0,void 0,function*(){let S=[];const m=[];for(let l=0;l<E?.length;l++){const U=yield t.I.GetConcept(E[l]);U.id==0?m.push(E[l]):S.push(U)}return m?.length==0||(S=yield(0,on.I)(m)),S})}(e);I.connections=n,I.concepts=T,I.id=P.id,I.subcompositions=s,I.mainConcept=P;const D=yield In(P.id,n,T,s,[]);I.cached=D,Yt.addCompositionToTree(I)})}var Ys=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Mi(P){return Ys(this,void 0,void 0,function*(){try{var n=yield(0,a.Xr)();const e=JSON.stringify(P),s=yield(0,a.Hh)(o.B.CreateSessionId(),{method:"POST",headers:n,body:e});return s.ok?s.json():((0,f.ry)(s),null)}catch(e){(0,f.Mb)(e,o.B.CreateSessionId())}})}var Xs=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Wi(P,n){return Xs(this,void 0,void 0,function*(){try{var e=yield(0,a.Xr)("application/x-www-form-urlencoded");const s=new URLSearchParams;s.append("sessionId",P.toString()),s.append("url",n);const I=yield(0,a.Hh)(o.B.CreateSessionVisitUrl(),{method:"POST",headers:e,body:s});return I.ok?I.json():((0,f.ry)(I),null)}catch(s){(0,f.Mb)(s,o.B.CreateSessionVisitUrl())}})}var Ks=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function ji(P,n,e){return Ks(this,arguments,void 0,function*(s,I,T,D=10,E=1){let S=[];try{var m=new URLSearchParams;m.append("typeId",`${s}`),m.append("toTheConceptId",`${I}`),m.append("userId",`${T}`),m.append("inpage",`${D}`),m.append("page",`${E}`);var l=yield(0,a.Xr)("application/x-www-form-urlencoded");const U=yield(0,a.Hh)(o.B.GetAllConnectionsToConceptUrl(),{method:"POST",headers:l,body:m});return U.ok?S=yield U.json():(0,f.ry)(U),S}catch(U){throw U}})}var _o=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Vi(P,n){var e=arguments;return _o(this,arguments,void 0,function*(s,I,T=10,D=1,E=!1){const S=he.V.logfunction("GetRelation",e)||{};if(We){S.serviceWorker=!0;try{const q=yield Ye("GetRelation",{id:s,relation:I,inpage:T,page:D,reverse:E});return he.V.logUpdate(S),q.data}catch(q){(0,f.ey)(S,"GetRelation",q),tt(q)}}let m=[],l=yield(0,ye.A)(s),U=yield(0,ze.Az)(I),V=[];if(U.id>0)if(E){V=yield ji(U.id,l.id,l.userId,T,D);let q=[];for(var Q=0;Q<V.length;Q++)q.push(V[Q].ofTheConceptId);yield(0,u.Y)(q);for(let X=0;X<V.length;X++){let se=V[X].ofTheConceptId,de=yield(0,ye.A)(se),pe=yield(0,i.Ez)(de.id);m.push(pe)}}else{V=yield J(U.id,l.id,l.userId,T,D);let q=[];for(let X=0;X<V.length;X++)q.push(V[X].toTheConceptId);yield(0,u.Y)(q);for(let X=0;X<V.length;X++){let se=V[X].toTheConceptId,de=yield(0,ye.A)(se),pe=yield(0,i.Ez)(de.id);m.push(pe)}}return he.V.logUpdate(S),m})}function qi(P,n){return _o(this,arguments,void 0,function*(e,s,I=10,T=1,D=!1){let E=new Pt;return E.conceptIds=[e],E.selectors=[s],E.outputFormat=je.y0,E.inpage=I,E.page=T,E.limit=!0,yield ro(E,"")})}function Hi(P,n){var e=arguments;return _o(this,arguments,void 0,function*(s,I,T=10,D=1,E=!1){const S=he.V.logfunction("GetRelationRaw",e)||{};if(We){S.serviceWorker=!0;try{const X=yield Ye("GetRelationRaw",{id:s,relation:I,inpage:T,page:D,reverse:E});return he.V.logUpdate(S),X.data}catch(X){(0,f.ey)(S,"GetRelationRaw",X),tt(X)}}let m=[],l=yield(0,ye.A)(s),U=yield(0,ze.Az)(I),V=[],Q=[];if(U.id>0){if(E){V=yield ji(U.id,l.id,l.userId,T,D);for(var q=0;q<V.length;q++)Q.push(V[q].ofTheConceptId)}else{V=yield J(U.id,l.id,l.userId,T,D);for(let X=0;X<V.length;X++)Q.push(V[X].toTheConceptId)}m=yield(0,on.r)(Q)}return he.V.logUpdate(S),m})}var So=v(9911),Mt=v(3726);class Zs{constructor(n,e,s,I){this.value=[],this.height=1,this.key=n,this.value.push(e),this.leftNode=s,this.rightNode=I}addNode(n,e,s){if(e==null)return e=n;var I=e.leftNode,T=e.rightNode;if(e.key>n.key)e.leftNode=this.addNode(n,I,s);else{if(!(e.key<n.key))return e.value.push(...n.value),e;e.rightNode=this.addNode(n,T,s)}e.height=1+Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode));let D=this.getBalanceFactor(e);if(D>1&&e.leftNode){if(n.key<e.leftNode.key)return this.rightRotate(e);if(n.key>e.leftNode.key)return e.leftNode=this.leftRotate(e.leftNode),this.rightRotate(e)}if(D<-1&&e.rightNode){if(n.key>e.rightNode.key)return this.leftRotate(e);if(n.key<e.rightNode.key)return e.rightNode=this.rightRotate(e.rightNode),this.leftRotate(e)}return e}rightRotate(n){if(n){let e=n.leftNode;if(e){let s=e.rightNode;return n.leftNode=s,e.rightNode=n,n.height=Math.max(this.getHeight(n.leftNode),this.getHeight(n.rightNode))+1,e.height=Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode))+1,e}}return n}leftRotate(n){if(n){let e=n.rightNode;if(e){let s=e.leftNode;return e.leftNode=n,n.rightNode=s,n.height=Math.max(this.getHeight(n.leftNode),this.getHeight(n.rightNode))+1,e.height=Math.max(this.getHeight(e.leftNode),this.getHeight(n.rightNode))+1,e}}return n}getHeight(n){return n?n.height:0}getBalanceFactor(n){return n==null?0:this.getHeight(n.leftNode)-this.getHeight(n.rightNode)}getFromNode(n,e){return e&&(n==e.key?e:n<e.key?this.getFromNode(n,e.leftNode):n>e.key?this.getFromNode(n,e.rightNode):e)}removeNode(n,e){if(n==null)return n;if(n.key>e)return n.leftNode=this.removeNode(n.leftNode,e),n;if(n.key<e)return n.rightNode=this.removeNode(n.rightNode,e),n;if(n.leftNode==null){let I=n.rightNode;return n=null,I}if(n.rightNode==null){let I=n.leftNode;return n=null,I}var s=this.inOrderSuccessor(n.rightNode);return n.value=s.value,n.key=s.key,n.rightNode=this.removeNode(n.rightNode,s.key),n}countNodeBelow(n){return n==null?0:1+this.countNodeBelow(n.leftNode)+this.countNodeBelow(n.rightNode)}inOrderSuccessor(n){for(;n.leftNode!=null;)n=n.leftNode;return n}}var xo=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};class rn{static compositeKey(n,e){return("0000"+n.toString(16).toUpperCase()).slice(-4)+("0000"+e.toString(16).toUpperCase()).slice(-4)}static addNodeToTree(n){if(this.root==null)return this.root=n,this.root;this.root=this.root.addNode(n,this.root,this.root.height)}static waitForDataToLoad(){return xo(this,void 0,void 0,function*(){return new Promise((n,e)=>{this.checkFlag(n),setTimeout(()=>{e("not")},25e3)})})}static checkFlag(n){if(k.B.isDataLoaded)return n("done");setTimeout(rn.checkFlag,1e3,n)}static addConceptToTree(n,e,s=999){let I=this.compositeKey(e,s);var T=new Zs(I,n,null,null);this.addNodeToTree(T)}static getNodeFromTree(n,e){return xo(this,void 0,void 0,function*(){let s=this.compositeKey(n,e);return this.root?this.root.getFromNode(s,this.root):null})}static removeNodeFromTree(n){return xo(this,arguments,void 0,function*(e,s=999){if(this.root){let I=this.compositeKey(e,s);this.root=this.root.removeNode(this.root,I)}})}static countNumberOfNodes(){return this.root?this.root.countNodeBelow(this.root):0}}rn.root=null;var $i=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function zi(P,n){return $i(this,arguments,void 0,function*(e,s,I=999){let T=yield rn.getNodeFromTree(e,I),D=(0,So.u)();if(T)for(let E=0;E<T.value.length;E++){let S=T.value[E];S.ghostId==s&&(D=S)}return D})}function Ji(P,n){return $i(this,arguments,void 0,function*(e,s,I=999){rn.addConceptToTree(e,s,I)})}var sn=v(127),No=v(8552),Qi=v(7812),ea=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})},ta=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Yi(P,n,e){return ta(this,void 0,void 0,function*(){try{if(We)try{return(yield Ye("GetRelationLocal",{id:P,relation:n,userId:e})).data}catch(D){tt(D)}let s=yield(0,g.$I)(n),I=[];s.id!=0&&(I=yield function(D,E){return ea(this,void 0,void 0,function*(){try{return yield G.G.GetConnectionOfCompositionAndTypeLocal(E,D)}catch(S){throw S}})}(P,s.id));let T=[];for(let D=0;D<I.length;D++){let E=yield j(I[D].toTheConceptId);T.push(E)}return T}catch(s){throw s}})}var na=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Lo(P){return na(this,void 0,void 0,function*(){let n=[];try{var e=yield(0,a.Xr)();const s=yield(0,a.Hh)(o.B.ViewInternalDataUrl(),{method:"POST",headers:e,body:JSON.stringify(P)});if(s.ok){let I=yield s.json(),T={};for(let D=0;D<I.length;D++){let E=I[D].concepts;n=I[D].connections;let S=I[D].id;(0,on.r)(E),T[S]=n}return T}return(0,f.ry)(s),n}catch(s){throw s}})}var oa=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Do(P){return oa(this,void 0,void 0,function*(){var n;try{let e=yield Lo(P),s=[];for(let I=0;I<P.length;I++){let T=P[I],D=e[T];if(T&&D){let E=[],S={};for(let l=0;l<D.length;l++)E.includes(D[l].ofTheConceptId)||E.push(D[l].ofTheConceptId);let m=yield(0,i.zN)(T,D,E);S.data=m,S.id=T,s.push(S)}else{let E={};E.id=T;let S=yield(0,ye.A)(T),m={};S.type&&(m[(n=S?.type)===null||n===void 0?void 0:n.characterValue]=S.characterValue,E.data=m,s.push(E))}}return s}catch(e){throw e}})}var Jn=v(2625),Xi=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})},Ki=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Zi(P){return Ki(this,arguments,void 0,function*(n,e=""){try{let s=yield function(I){return Xi(this,arguments,void 0,function*(T,D=""){var E=yield(0,a.ab)("application/json",D);let S=o.B.SearchInternalWithAuthenticatedCcsUrl();S=S+"?composition="+T.composition+"&search="+T.search+"&internalComposition="+T.internalComposition+"&type="+T.type+"&inpage="+T.inpage+"&page="+T.page;try{const m=yield(0,a.Hh)(S,{method:"GET",headers:E});return m.ok?yield m.json():((0,f.ry)(m),[])}catch(m){(0,f.Mb)(m,S)}})}(n,e);return yield Do(s)}catch(s){throw s}})}function er(P){return Ki(this,arguments,void 0,function*(n,e=""){try{return yield function(s){return Xi(this,void 0,void 0,function*(){var I=yield(0,a.ab)("application/json","");let T=o.B.SearchInternalWithCcsUrl();T=T+"?composition="+s.composition+"&search="+s.search+"&internalComposition="+s.internalComposition+"&type="+s.type+"&inpage="+s.inpage+"&page="+s.page;try{const D=yield(0,a.Hh)(T,{method:"GET",headers:I});return D.ok?yield D.json():((0,f.ry)(D),[])}catch(D){(0,f.Mb)(D,T)}})}(n)}catch(s){throw s}})}var Po=v(592),ia=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function tr(P){return ia(this,void 0,void 0,function*(){if(We)try{return(yield Ye("DeleteConceptLocal",{id:P})).data}catch(e){tt(e)}let n=yield(0,No.f)(P);c.v.RemoveConcept(n)})}var nr=v(8382),ra=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function or(P,n,e,s){return ra(this,arguments,void 0,function*(I,T,D,E,S=!0){var m,l;const U=he.V.logfunction("GetConnectionBetweenTwoConceptsLinker")||{};if(We){U.serviceWorker=!0;try{const q=yield Ye("GetConnectionBetweenTwoConceptsLinker",{ofTheConcept:I,toTheConcept:T,linker:D,fullLinker:E,forward:S});return he.V.logUpdate(U),q.data}catch(q){(0,f.ey)(U,"GetConnectionBetweenTwoConceptsLinker",q),tt(q)}}let V=(0,H.o)();if(D!=""){let q="";S?q=((m=I.type)===null||m===void 0?void 0:m.characterValue)+"_s_"+(D+"_s"):q=((l=T.type)===null||l===void 0?void 0:l.characterValue)+"_s_"+(D+"_by"),V=yield(0,ge.A)("connection",q,!1,999)}E!=""&&(V=yield ut(E,999));let Q=[];return Q=S?yield(0,nr.x)(I.id,T.id,V.id):yield(0,nr.x)(T.id,I.id,V.id),he.V.logUpdate(U),Q})}function ir(P,n){return new Promise((e,s)=>{setTimeout(()=>{e(n)},P)})}var Qn=v(3008),sa=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function rr(P,n){return Object.prototype.hasOwnProperty.call(P,n)}function Yn(){const P=new Date;return new Qn.j(0,0,0,0,0,"",0,!1,P,P,"")}function sr(P,n){return sa(this,void 0,void 0,function*(){let e=Yn();if(!P||!n)return e;try{const s=yield(0,a.Hh)(o.B.GetInstanceConceptByCharacterTypeUrl(),{method:"POST",headers:yield(0,a.Xr)("application/json"),body:JSON.stringify({characterValue:P,type:n})});s.status===200&&(e=function(I){var T,D,E,S,m,l,U,V,Q,q,X;if(!I||typeof I!="object"||Array.isArray(I))return Yn();try{const se=I,de=Yn(),pe=new Qn.j((T=se.id)!==null&&T!==void 0?T:0,(D=se.userId)!==null&&D!==void 0?D:0,(E=se.typeId)!==null&&E!==void 0?E:0,(S=se.categoryId)!==null&&S!==void 0?S:0,rr(se,"referentId")?(m=se.referentId)!==null&&m!==void 0?m:null:0,(l=se.characterValue)!==null&&l!==void 0?l:"",(U=se.accessId)!==null&&U!==void 0?U:4,!1,(V=se.entryTimeStamp)!==null&&V!==void 0?V:de.entryTimeStamp,(Q=se.updatedTimeStamp)!==null&&Q!==void 0?Q:de.updatedTimeStamp,"");return pe.typeCharacter=(q=se.typeCharacter)!==null&&q!==void 0?q:"",pe.isComposition=(X=se.isComposition)!==null&&X!==void 0&&X,rr(se,"ghostId")&&(pe.ghostId=se.ghostId),pe}catch{return Yn()}}(yield s.json()))}catch(s){s instanceof Error&&s.message}return e})}var je=v(6931);const ar=3,cr=4,lr=5;var aa=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Ro(P,n){return aa(this,arguments,void 0,function*(e,s,I=""){let T=o.B.SearchAllTypeWithLinker(e.auth);var D=yield(0,a.ab)("application/json",I);T=T+"?search="+e.search+"&type="+e.type+"&inpage="+e.inpage+"&page="+e.page;const E=JSON.stringify(s);try{const S=yield(0,a.Hh)(T,{method:"POST",headers:D,body:E});return S.ok?yield S.json():((0,f.ry)(S),[])}catch(S){(0,f.Mb)(S,T)}})}var Xt=v(8800),ca=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class Bo extends Xt.w{constructor(n,e,s=je.y0){super(),this.searchQuery=[],this.format=je.y0,this.searchQuery=n,this.format=s}bind(){return ca(this,void 0,void 0,function*(){return this.data=yield(0,sn.cf)(this.searchQuery,"",this,this.format),this.mainConcept=this.searchQuery[0].composition,this.listenToEvent(this.mainConcept),this.data})}}function dr(P,n,e=je.y0){return new Bo(P,n??"",e)}var ur=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class la extends Xt.w{constructor(n,e=je.ZJ){super(),this.id=n,this.format=e}bind(){return ur(this,void 0,void 0,function*(){if(!this.isDataLoaded){let n=yield(0,i.hL)(this.id);this.mainConcept=this.id,this.compositionIds=n.compositionList;let e=n.connectionList;for(let s=0;s<e.length;s++)this.internalConnections.push(e[s].id);this.isDataLoaded=!0,this.listenToEvent(this.mainConcept)}return yield this.build()})}build(){return ur(this,void 0,void 0,function*(){let n=[],e=this.internalConnections;for(let s=0;s<e.length;s++)n.push(yield qt.d.GetConnection(e[s]));return this.format==je.ZJ?this.data=yield(0,i.ay)(this.mainConcept,n,this.compositionIds):this.format==je.y0?this.data=yield(0,i.$V)(this.mainConcept,n,this.compositionIds):this.format==je.yv?this.data=yield(0,i.re)(this.mainConcept,n,this.compositionIds):this.data=yield(0,i.ay)(this.mainConcept,n,this.compositionIds),this.data})}}function hr(P,n=je.ZJ){return new la(P,n)}var pr=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class da extends Xt.w{constructor(n,e,s,I,T){super(),this.data=[],this.startPage=0,this.compositionName=n,this.userId=e,this.inpage=s,this.page=I,this.format=T}bind(){return pr(this,void 0,void 0,function*(){if(!this.isDataLoaded){var n=yield(0,d.A)(this.compositionName);if(n){yield A(this.compositionName,this.userId);let I=yield t.I.GetConceptsByTypeIdAndUser(n.id,this.userId);for(var e=this.inpage*(this.page-1),s=e;s<e+this.inpage;s++)I[s]&&this.compositionIds.push(I[s].id)}yield(0,u.Y)(this.compositionIds),this.isDataLoaded=!0,this.listenToEventType(n.id);for(let I=0;I<this.compositionIds.length;I++)this.listenToEvent(this.compositionIds[I])}return yield this.build()})}build(){return pr(this,void 0,void 0,function*(){if(this.data=[],this.format==je.ZJ){for(let n=this.startPage;n<this.startPage+this.inpage;n++)if(this.compositionIds[n]){let e=yield(0,i.kx)(this.compositionIds[n]);this.data.push(e)}}else if(this.format==je.y0){for(let n=this.startPage;n<this.startPage+this.inpage;n++)if(this.compositionIds[n]){let e=yield(0,i.RW)(this.compositionIds[n]);this.data.push(e)}}else if(this.format==je.yv){for(let n=this.startPage;n<this.startPage+this.inpage;n++)if(this.compositionIds[n]){let e=yield(0,i.XI)(this.compositionIds[n]);this.data.push(e)}}else for(let n=this.startPage;n<this.startPage+this.inpage;n++)if(this.compositionIds[n]){let e=yield(0,i.kx)(this.compositionIds[n]);this.data.push(e)}return this.data})}}function fr(P,n,e,s,I=je.ZJ){return new da(P,n,e,s,I)}var Kt=v(3076),mr=v(9783),Xn=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class ua extends Xt.w{constructor(n,e,s="",I){super(),this.searchText="",this.connections=[],this.externalConnectionIds=[],this.data=[],this.mainConcept=n,this.searchLinkers=e,this.textSearch=s,I&&(this.format=I)}listenToEvent(n){const e=`concept:${n}`;this.eventHandlers[e]||this.addTrackedEventListener(e,n,s=>Xn(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let I=this;setTimeout(function(){return Xn(this,void 0,void 0,function*(){try{let T=yield qt.d.GetConnectionByOfTheConceptAndType(n,n);for(let D=0;D<T.length;D++)yield qt.d.GetConnection(T[D]).then(E=>{E.typeId==I.mainConcept?I.internalConnections.includes(E.id)||I.internalConnections.push(E.id):I.linkers.includes(E.id)||I.linkers.push(E.id),I.conceptIds.includes(E.toTheConceptId)||I.conceptIds.push(E.toTheConceptId),I.compositionIds.includes(E.ofTheConceptId)||I.compositionIds.push(E.ofTheConceptId),I.compositionIds.includes(E.toTheConceptId)||I.compositionIds.push(E.toTheConceptId)});I.isUpdating=!1,yield I.bind(),I.notify()}catch(T){throw I.isUpdating=!1,T}})},200)}}))}bind(){return Xn(this,void 0,void 0,function*(){if(!this.isDataLoaded){this.isDataLoaded=!0;const n=yield fo(this.mainConcept,this.searchLinkers,this.textSearch);this.compositionIds=n.compositionIds||[],this.internalConnections=n.internalConnections||[],this.externalConnectionIds=n.externalConnections||[],this.linkers=this.externalConnectionIds,this.connections=yield(0,$n.j)(this.externalConnectionIds);for(let e=0;e<this.compositionIds.length;e++)this.listenToEvent(this.compositionIds[e]);this.listenToEvent(this.mainConcept)}return yield this.build()})}build(){return Xn(this,void 0,void 0,function*(){return this.externalConnectionIds=this.linkers,this.format&&this.format==je.XZ?this.data={compositionIds:this.compositionIds,internalConnections:this.internalConnections,externalConnections:this.externalConnectionIds}:this.data=yield(0,mt.p8)(this.compositionIds,this.internalConnections),this.data})}}function yr(P,n,e="",s){return new ua(P,n,e,s)}var Kn=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class ha extends Xt.w{constructor(n,e,s,I=je.y0){super(),this.searchQuery=[],this.format=je.y0,this.mainCompositionIds=[],this.searchCharacter="",this.token="",this.searchStructure=n,this.searchQuery=e,this.searchQuery[0].type=n.composition,this.searchCharacter=n.composition,this.format=I,this.token=Ve.b.BearerAccessToken}listenToEventType(n){const e=`type:${n}`;this.eventHandlers[e]||this.addTrackedEventListener(e,n,s=>Kn(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let I=this;setTimeout(function(){return Kn(this,void 0,void 0,function*(){try{let T=s;I.mainCompositionIds.includes(T?.detail)||(I.mainCompositionIds.unshift(T?.detail),I.conceptIds.push(T?.detail),I.listenToEvent(T?.detail),qt.d.GetConnectionsOfConcept(T?.detail).then(D=>{for(let E=0;E<D.length;E++)I.linkers.push(D[E].id)})),I.isUpdating=!1,yield I.bind(),I.notify()}catch(T){throw I.isUpdating=!1,T}})},200)}}))}bind(){return Kn(this,void 0,void 0,function*(){if(!this.isDataLoaded){this.isDataLoaded=!0;var n=yield(0,d.A)(this.searchCharacter);let e=yield Ro(this.searchStructure,this.searchQuery,this.token);this.conceptIds=e.compositionIds,this.internalConnections=e.internalConnections,this.linkers=e.linkers,this.reverse=e.reverse,this.mainCompositionIds=e.mainCompositionIds,this.listenToEventType(n.id);for(let s=0;s<this.mainCompositionIds.length;s++)this.listenToEvent(this.mainCompositionIds[s])}return yield this.build()})}build(){return Kn(this,void 0,void 0,function*(){return yield(0,on.r)(this.conceptIds),this.format==je.y0?this.data=yield(0,Kt.yV)(this.linkers,this.conceptIds,this.internalConnections,this.mainCompositionIds,this.reverse):this.data=yield(0,Kt._W)(this.linkers,this.conceptIds,this.internalConnections,this.mainCompositionIds,this.reverse),this.data})}}function gr(P,n,e,s=je.y0){return new ha(P,n,e,s)}var Eo=v(2635),vr=v(7762);class Cr{constructor(n,e,s,I,T,D,E,S=!1,m,l,U){this.structureType="lconcept",this.isComposition=!1,this.isTemp=!1,this.isSynced=!1,this.applicationId=o.B.getRandomizer(),this.id=n,this.userId=e,this.typeId=s,this.ghostId=n,this.categoryId=I,this.characterValue=D,this.accessId=T,this.type=null,this.isNew=S,this.typeCharacter=E,this.entryTimeStamp=m,this.updatedTimeStamp=l,this.isSynced=!1,this.referentId=U}getType(){}}class br{constructor(n,e,s,I,T,D){this.isTemp=!1,this.applicationId=o.B.getRandomizer(),this.type=(0,H.o)(),this.id=n,this.ofTheConceptId=e,this.toTheConceptId=s,this.typeId=I,this.ghostId=n,this.orderId=T,this.typeCharacter="",this.accessId=D,this.typeCharacter="",this.entryTimeStamp=(0,H.Y)(new Date),this.terminationDateTime=new Date,this.localSyncTime=new Date}}class Ir{constructor(){this.compositionId=0,this.userId=999,this.sessionId=999,this.accessId=4,this.ofTheCompositionId=0,this.patchObject={}}}class wr{constructor(){this.id="0",this.remote_address="",this.server_port="",this.server_address="",this.server_name="",this.server_software="",this.http_user_agent="",this.self="",this.port="",this.userId="",this.email=""}}var an=v(7580);class Zn{constructor(){this.type="",this.search="",this.logicoperator="=",this.index=0,this.composition=!0,this.name="",this.operateon=""}}class Tr{constructor(){this.type="",this.search="",this.composition="",this.internalComposition="",this.userId=999,this.inpage=10,this.page=1,this.auth=!0}}var kr=v(6750),Ar=v(6580),pa=v(507),Oo=v(9789),_r=v(5330),he=v(9097),fa=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class Dt{static initialize(){try{if(!this.isBrowser())return;this.initGlobalErrorHandlers(),this.logCatchError(),this.logErrorEvent(),this.logUnhandledError(),this.logUserInteractions(),this.logNetworkRequests(),this.logRouteChanges()}catch{}}static initGlobalErrorHandlers(){try{if(!this.isBrowser()||this.globalErrorHandlersInitialized)return;this.globalErrorHandlersInitialized=!0,window.onerror=(n,e,s,I,T)=>{const D=Ve.b.sessionId||"unknown",E={message:n,source:e,lineno:s,colno:I,stack:T?.stack||"undefined",requestFrom:o.B.BASE_APPLICATION,sessionId:D};he.V.logApplication("ERROR","Runtime Error",E),he.V.log("ERROR","Runtime Error",E)},window.onunhandledrejection=n=>{const e=Ve.b.sessionId||"unknown";he.V.logApplication("ERROR","Unhandled Promise Rejection",{message:n.reason?n.reason.message:n.reason,stack:n.reason?n.reason.stack:null,requestFrom:o.B.BASE_APPLICATION,sessionId:e}),he.V.log("ERROR","Unhandled Promise Rejection",{message:n.reason?n.reason.message:n.reason,stack:n.reason?n.reason.stack:null,requestFrom:o.B.BASE_APPLICATION,sessionId:e})}}catch{}}static logCatchError(){try{if(this.consoleErrorPatched)return;this.consoleErrorPatched=!0;const n=console.error;console.error=function(...e){if(e?.[0]=="Intercepted Fetch Error:")return;const s="Console Error",I=Ve.b.sessionId||"unknown",T={arguments:e.map(D=>Sr(D)),requestFrom:o.B.BASE_APPLICATION,sessionId:I};he.V.logApplication("ERROR",s,T),he.V.log("ERROR",s,T),n.apply(console,e)}}catch{}}static logErrorEvent(){try{if(!this.isBrowser()||this.errorEventListenerRegistered)return;this.errorEventListenerRegistered=!0,window.addEventListener("error",n=>{var e;const s=Ve.b.sessionId||"unknown",I={error:((e=n.error)===null||e===void 0?void 0:e.message)||n.message,source:n.filename,line:n.lineno,column:n.colno,stack:n.error?Sr(n.error.stack):void 0,requestFrom:o.B.BASE_APPLICATION,sessionId:s},T="Unhandled Error";he.V.logApplication("ERROR",T,I),he.V.log("ERROR",T,I)})}catch{}}static logUnhandledError(){try{if(!this.isBrowser()||this.unhandledErrorListenerRegistered)return;this.unhandledErrorListenerRegistered=!0,window.addEventListener("unhandledrejection",n=>{var e,s;const I=Ve.b.sessionId||"unknown",T={reason:((e=n.reason)===null||e===void 0?void 0:e.message)||String(n.reason),stack:((s=n.reason)===null||s===void 0?void 0:s.stack)||"No stack trace available",requestFrom:o.B.BASE_APPLICATION,sessionId:I};he.V.logApplication("ERROR","Unhandled Promise Rejection",T),he.V.log("ERROR","Unhandled Promise Rejection",T)})}catch{}}static logUserInteractions(){this.isBrowser()&&typeof document<"u"&&!this.userInteractionListenersRegistered&&(this.userInteractionListenersRegistered=!0,document.addEventListener("click",n=>{var e;const s=Ve.b.sessionId||"unknown",I=n.target,T={element:I.tagName,id:I.id,classes:I.className,text:(e=I.innerText)===null||e===void 0?void 0:e.slice(0,50),requestFrom:o.B.BASE_APPLICATION,sessionId:s};he.V.logApplication("INFO","User Click",T)}),document.addEventListener("input",n=>{const e=n.target;Ve.b.sessionId,e.tagName,e.id,e.value,o.B.BASE_APPLICATION}),document.addEventListener("scroll",()=>{Ve.b.sessionId,o.B.BASE_APPLICATION}))}static logNetworkRequests(){try{if(!this.isBrowser()||this.networkRequestsPatched)return;this.networkRequestsPatched=!0;const n=window?.fetch;if(!n)throw new Error("Original fetch is not available.");const e=[o.B.PostLogger(),o.B.PostPrefetchConceptConnections()];window.fetch=(...s)=>fa(this,void 0,void 0,function*(){const I=Ve.b.sessionId||"unknown",[T,D]=s,E=T instanceof Request?T.url:T instanceof URL?T.toString():T;if(e.includes(E))return n(...s);let S={request:{type:"REQUEST",message:"Network Request",method:D?.method||"GET",url:E,body:D?.body,requestFrom:o.B.BASE_APPLICATION,sessionId:I}};try{const m=yield n(...s);return S.response={type:"RESPONSE",message:"Network Response",url:E,status:m.status,requestFrom:o.B.BASE_APPLICATION,sessionId:I},m}catch(m){throw S.response={type:"ERROR",message:"Network Request Failed",url:E,error:m instanceof Error?m.message:String(m),requestFrom:o.B.BASE_APPLICATION,sessionId:I},he.V.logApplication("ERROR","Failed Network Request",S),new Error(`Network request failed for ${E}: ${m.message}`)}})}catch{}}static logPerformanceMetrics(){this.isBrowser()&&!this.performanceMetricsRegistered&&(this.performanceMetricsRegistered=!0,window?.addEventListener("load",()=>{const n=performance.timing;Ve.b.sessionId,n.loadEventEnd,n.navigationStart,n.domContentLoadedEventEnd,n.navigationStart,o.B.BASE_APPLICATION}))}static logRouteChanges(){if(!this.isBrowser()||typeof history>"u"||this.routeChangeListenersRegistered)return;this.routeChangeListenersRegistered=!0;const n=history.pushState;this.initialLoadTimeout=setTimeout(()=>{Dt.logOnWindowLoad()},3e3),history.pushState=function(...e){const s=Ve.b.sessionId||"unknown";let I=document.referrer;const T={url:e[2]?new URL(e[2],location.origin).href:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:s,referrer:I};return he.V.logApplication("ROUTE","Route Change",T),n.apply(this,e)},window?.addEventListener("beforeunload",()=>{const e=Ve.b.sessionId||"unknown",s={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:e};he.V.logApplication("ROUTE","Unload",s)}),window?.addEventListener("popstate",()=>{const e=Ve.b.sessionId||"unknown";let s=document.referrer;const I={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:e,referrer:s};he.V.logApplication("ROUTE","Route Changed (Back/Forward)",I)})}static logOnWindowLoad(){if(!this.isBrowser()||typeof localStorage>"u")return;const n=Ve.b.sessionId||"unknown";let e=document.referrer;const s=JSON.stringify(Object.entries(localStorage)),I={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:n,referrer:e,localdata:s};he.V.logApplication("ROUTE","Initial Load",I)}static logSample(){if(!this.isBrowser())return;const n=Ve.b.sessionId||"unknown",e={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:n};he.V.logApplication("ROUTE","Sample",e)}static logWebSocketEvents(){if(!this.isBrowser()||typeof WebSocket>"u"||this.webSocketEventsPatched)return;this.webSocketEventsPatched=!0;const n=Ve.b.sessionId||"unknown",e=WebSocket;window.WebSocket=class extends e{constructor(s,I){super(s,I);const T={url:s.toString(),requestFrom:o.B.BASE_APPLICATION,sessionId:n};he.V.logApplication("INFO","WebSocket Open",T),this.addEventListener("message",D=>{const E=Ve.b.sessionId||"unknown",S={url:s,data:D.data,requestFrom:o.B.BASE_APPLICATION,sessionId:E};he.V.logApplication("INFO","WebSocket Message",S)}),this.addEventListener("error",D=>{const E=Ve.b.sessionId||"unknown",S={url:s,error:D instanceof Error?D.message:String(D),requestFrom:o.B.BASE_APPLICATION,sessionId:E};he.V.logApplication("ERROR","WebSocket Error",S)}),this.addEventListener("close",()=>{const D=Ve.b.sessionId||"unknown",E={url:s,requestFrom:o.B.BASE_APPLICATION,sessionId:D};he.V.logApplication("INFO","WebSocket Closed",E)})}}}static isBrowser(){return typeof window<"u"}}function Sr(P){try{return JSON.stringify(P,(n,e)=>e&&typeof e=="object"&&e instanceof Error?{message:e.message,stack:e.stack}:e)}catch{return"Error while serializing value"}}Dt.globalErrorHandlersInitialized=!1,Dt.consoleErrorPatched=!1,Dt.errorEventListenerRegistered=!1,Dt.unhandledErrorListenerRegistered=!1,Dt.userInteractionListenersRegistered=!1,Dt.networkRequestsPatched=!1,Dt.performanceMetricsRegistered=!1,Dt.routeChangeListenersRegistered=!1,Dt.webSocketEventsPatched=!1,Dt.initialLoadTimeout=null;var eo=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};const xr="CaptchaToken",Nr="recaptchaAction";let to=null;function Lr(){if(typeof window<"u")return window.grecaptcha}function ma(P,n){return eo(this,void 0,void 0,function*(){yield function(s){return Lr()?Promise.resolve():typeof document>"u"?Promise.reject(new Error("reCAPTCHA requires a browser document")):(to||(to=new Promise((T,D)=>{const E=document.createElement("script");E.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(s)}`,E.async=!0,E.defer=!0,E.onload=()=>T(),E.onerror=()=>D(new Error("Failed to load reCAPTCHA script")),document.head.appendChild(E)}).catch(T=>{throw to=null,T})),to)}(P);const e=Lr();if(!e)throw new Error("reCAPTCHA is not available");return yield new Promise(s=>{e.ready(s)}),e.execute(P,{action:n})})}function ya(P,n){var e,s,I,T;if(P instanceof FormData){if(!n?.token)return P;const E=(e=n.fieldName)!==null&&e!==void 0?e:xr,S=(s=n.actionFieldName)!==null&&s!==void 0?s:Nr;return P.has(E)||P.append(E,n.token),n.action&&!P.has(S)&&P.append(S,n.action),P}const D=Object.assign({},P);if(n?.token){const E=(I=n.fieldName)!==null&&I!==void 0?I:xr,S=(T=n.actionFieldName)!==null&&T!==void 0?T:Nr;D[E]===void 0&&(D[E]=n.token),n.action&&D[S]===void 0&&(D[S]=n.action)}return JSON.stringify(D)}function ga(P,n,e){var s;const I={};return n&&(I.Authorization=`Bearer ${n}`),P||(I["Content-Type"]="application/json"),e?.token&&(I[(s=e.headerName)!==null&&s!==void 0?s:"X-Recaptcha-Token"]=e.token),I}const Fo=(P,n,...e)=>eo(void 0,[P,n,...e],void 0,function*(s,I,T=!1,D){var E;try{const S=function(q=!1,X){var se;return typeof q=="boolean"?{bulk:q,recaptcha:X}:Object.assign(Object.assign({},q),{recaptcha:(se=q.recaptcha)!==null&&se!==void 0?se:X})}(T,D),m=yield function(q){return eo(this,void 0,void 0,function*(){var X;if(q?.token||!o.B.RECAPTCHA_SITE_KEY)return q;const se=(X=q?.action)!==null&&X!==void 0?X:o.B.RECAPTCHA_ACTION,de=yield ma(o.B.RECAPTCHA_SITE_KEY,se);return Object.assign(Object.assign({},q),{token:de,action:se})})}(function(q){return q?typeof q=="string"?{token:q}:q:null}(S.recaptcha)),l=s instanceof FormData,U=function(q){return q.personal?o.B.sendPersonalMail():q.bulk?o.B.sendBulkMail():o.B.sendMail()}(S);(function(q){q?.token})(m);const V=yield fetch(U,{method:"POST",body:ya(s,m),headers:ga(l,I,m)}),Q=(E=V.headers.get("content-type"))!==null&&E!==void 0?E:"";return V.ok?Q.includes("text/plain")?yield V.text():yield V.json():(Q.includes("application/json")?yield V.json():yield V.text(),null)}catch{return null}}),Dr=(P,n,...e)=>eo(void 0,[P,n,...e],void 0,function*(s,I,T={}){return Fo(s,I,Object.assign(Object.assign({},T),{personal:!0}))});class va{constructor(){this.inDevelopment=!1,this.subscribers=[]}notify(n=null){this.subscribers.map(e=>{e(n||this.data)})}dataChange(n){this.subscribers.push(n)}}class Ca extends va{constructor(){super(...arguments),this.element=null,this.elementIdentifier=0,this.widgetMounted=!1}getComponent(){return this.element}getElementById(n){let e=this.getComponent(),s=document.body;if(e){let I=e.querySelector("#"+n);if(I)return s=I,s}return null}createWidgetWrapperIdentifier(){return this.elementIdentifier=1e4*Math.random(),this.elementIdentifier.toString()}}var ba=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class no extends Ca{constructor(){super(...arguments),this.html="",this.css="",this.js="",this.state={},this.previousState={},this.childWidgets=[],this.childWidgetElement=[],this.widgetState={},this.parentElement=""}querySelector(n){return this.element?this.element.querySelector(n):null}querySelectorAll(n){return this.element?this.element.querySelectorAll(n):null}getElement(){return this.element}setTitle(n){document.title=n}getHtml(){return this.html}UpdateChildData(n,e){let s=e;s.data=n,s.render(),s.update()}update(){}setState(n){this.previousState=Object.assign({},this),this.data=n,this.state=Object.assign({},this),this.hasStateChanged()&&(this.notify(),this.render())}setStateProperty(n){this.previousState=Object.assign({},this),Object.assign(this,n),this.state=Object.assign({},this),this.hasStateChanged()&&(this.notify(),this.render())}hasStateChanged(){return!this.isPropertyEqual(this.state,this.previousState)}isPropertyEqual(n,e){if(n===e)return!0;if(typeof n!="object"||typeof e!="object"||n===null||e===null)return!1;const s=Object.keys(n),I=Object.keys(e);if(s.length!==I.length)return!1;for(let T of s){if(!I.includes(T))return!1;for(let D of I)if(T==D&&T!="state"&&T!="previousState"&&n[T]!=e[T])return!1}return!0}loadChildWidgets(){this.childWidgets.map(n=>{let e=this.getElementById(n.parentElement);e&&(e.innerHTML=""),n.mount(e)})}render(){this.element&&(this.element.innerHTML=this.getHtml()),this.loadChildWidgets(),this.after_render()}getElementByClassName(n){let e=this.getComponent();return e?e?.querySelectorAll("."+n):[]}mount_child(){}mount(n){return ba(this,void 0,void 0,function*(){n&&(this.element=document.createElement("div"),this.element.id=this.createWidgetWrapperIdentifier(),this.element.innerHTML=this.getHtml(),this.element.classList.add("mftsccs-marking-rendered"),n.appendChild(this.element),this.parentElement=n.id,this.before_render(),this.mount_child(),this.widgetMounted=!0)})}before_render(){this.render()}after_render(){}renderChildWidgets(){function n(e){var s;e&&((s=e.childWidgets)===null||s===void 0||s.forEach(I=>{n(I)}),e.render())}this.childWidgets.forEach(e=>{n(e)})}setWidgetState(n,e){this.widgetState[n]=e,function s(I){I&&Array.isArray(I.childWidgets)&&I.childWidgets.forEach(T=>{T.widgetState=Object.assign(Object.assign({},T.widgetState),I.widgetState),s(T)})}(this),this.renderChildWidgets()}getWidgetState(n,e){return Object.keys.length&&this.widgetState[n]?this.widgetState[n]:e}}var Ia=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function oo(){var P,n,e,s,I,T,D,E,S,m,l,U;let V={entity:0,userConcept:0,userId:0,token:Ve.b.BearerAccessToken,email:"",amcode:"",roles:[]};const Q=Ve.b.profileCache;if(Q)return V.entity=(P=Q.entityId)!==null&&P!==void 0?P:0,V.userConcept=(n=Q.userConcept)!==null&&n!==void 0?n:0,V.userId=(e=Q.userId)!==null&&e!==void 0?e:0,V.token=Ve.b.BearerAccessToken||Q.token||"",V.email=(s=Q.email)!==null&&s!==void 0?s:"",V.amcode=(I=Q.amcode)!==null&&I!==void 0?I:"",V.roles=(T=Q.roles)!==null&&T!==void 0?T:[],V;try{const q=(localStorage==null?void 0:localStorage.getItem("profile"))||"";if(q){const X=JSON.parse(q);V.entity=(D=X?.entityId)!==null&&D!==void 0?D:0,V.userConcept=(E=X?.userConcept)!==null&&E!==void 0?E:0,V.userId=(S=X?.userId)!==null&&S!==void 0?S:0,V.email=(m=X?.email)!==null&&m!==void 0?m:"",V.amcode=(l=X?.amcode)!==null&&l!==void 0?l:"",V.token||(V.token=(U=X?.token)!==null&&U!==void 0?U:"")}}catch{}return V}function Pr(){return Ia(this,void 0,void 0,function*(){const P=yield(0,a.uX)(),n=oo();return n.token=P,n})}var wn=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};class Dn extends no{constructor(){super(...arguments),this.childComponents=[],this.componentMounted=!1,this.oldHtml=null,this.phonebooks=[],this.childrenData={},this.childWidgets=[],this.typeValueList=[],this.widgetType="the_element_name",this.parentConceptList=[],this.customFunctions=[],this.widgetDependenciesData=""}getUserId(){return oo().userId}getTypeValueList(){return wn(this,arguments,void 0,function*(n=""){return new Promise(e=>wn(this,void 0,void 0,function*(){const s=(n=this.widgetType)==null?void 0:n.match(/^[a-z0-9]+_[a-z0-9]+/i),I=s?s[0]:"",T=n?.match(/^([a-z0-9]+).*_([a-z0-9]+)$/i),D=T?`${T[1]}_${T[2]}`:"";let E=[],S=new Zn;S.type=D,S.search="1",S.logicoperator=">",S.name="emailfilter",S.operateon="entityEmail",S.composition=!1,E.push(S);let m=new Pt;m.typeConnection=n,m.name="entityEmail";let l=new Pt;l.type=I,l.filterLogic="( emailfilter )",l.filters=E,l.name="top",l.inpage=100,l.freeschemaQueries=[m],l.outputFormat=je.y0,Rn(l,"").subscribe(U=>{if(U?.length){const V=U?.map(Q=>{var q,X,se,de,pe,ue,Ie;const Fe=(de=(se=(X=(q=Q.data)===null||q===void 0?void 0:q[I])===null||X===void 0?void 0:X[n])===null||se===void 0?void 0:se.data)===null||de===void 0?void 0:de[D];return{id:(Ie=(ue=(pe=Q.data)===null||pe===void 0?void 0:pe[I])===null||ue===void 0?void 0:ue[n])===null||Ie===void 0?void 0:Ie.id,name:Fe,text:Fe}});return this.typeValueList=V,e(V),V}})}))})}setTitle(n){document.title=n}getHtml(){return this.html}createRandomNumber(){return this.elementIdentifier=1e4*Math.random(),this.elementIdentifier}mount_child(){return wn(this,void 0,void 0,function*(){try{new Function("tsccs",`
        return (async function() {
          ${this.mountChildWidgetsFunction}
        }).call(this);
      `).bind(this)(_)}catch(n){throw n}})}setProperty(n){return wn(this,void 0,void 0,function*(){return this.widgetType=n,this.getTypeValueList(this.widgetType).then(()=>{var e,s,I;(e=this.element)===null||e===void 0||e.setAttribute("data-type-value",this.widgetType),(I=(s=this.element)===null||s===void 0?void 0:s.parentElement)===null||I===void 0||I.setAttribute("data-type-value",this.widgetType),this.render()}),this})}createTypeEditor(n){(function(e,s){if(e){const I=document.querySelector("#widget-properties #widget-type"),T=I?.querySelectorAll("input");T?.forEach(l=>{l?.remove()});const D=e.target.closest(".added-widget-container"),E=e.target.closest("div");D?D?.getAttribute("data-type-value"):E&&E?.getAttribute("data-type-value");const S=document.createElement("input");S.setAttribute("type","text"),S.setAttribute("name","input-widgetTypeValue"),S.setAttribute("of",s.elementIdentifier.toString()),S.setAttribute("class","form-control"),S.setAttribute("id","widgetType"),S.setAttribute("onchange","updateWidgetTypeValue(event)"),s.widgetType?S.value=s.widgetType:S.setAttribute("placeholder","e.g. the_entity");let m=s;S.addEventListener("change",function(l){var U,V,Q;const q=(U=l?.target)===null||U===void 0?void 0:U.value;m.widgetType=q,m.before_render(),m.loadChildWidgets(),(Q=(V=m.element)===null||V===void 0?void 0:V.parentElement)===null||Q===void 0||Q.setAttribute("data-type-value",m.widgetType)}),I?.appendChild(S)}})(n,this)}mount(n){return wn(this,void 0,void 0,function*(){if(n){this.element=document.createElement("div"),this.element.id=this.createWidgetWrapperIdentifier();let e=this;this.inDevelopment?(this.element.onclick=function(s){s.preventDefault(),e.createTypeEditor(s)},this.element.className="mftsccs-marking-element"):this.element.classList.add("mftsccs-marking-rendered"),this.element.innerHTML=this.getHtml(),n?.setAttribute("data-type-value",e.widgetType),n.appendChild(this.element),this.parentElement=n.id,this.componentMounted==0||this.widgetMounted==0?(this.render_custom_functions(),this.render_widgetDependencies(),this.before_render(),this.mount_child(),this.widgetMounted=!0,this.componentMounted=!0):this.render(),this.childWidgetElement=this.getElementByClassName("added-widget-container")}})}render_widgetDependencies(){try{new Function("tsccs",`
        return (async function() {
          ${this.widgetDependenciesData}
        }).call(this);
      `).bind(this)(_)}catch(n){throw n}}render_custom_functions(){var n;const e=(n=this.customFunctions)===null||n===void 0?void 0:n.map(s=>s?.code).join("");try{new Function("tsccs",`
          return (async function() {
            ${e}
          }).call(this);
        `).bind(this)(_)}catch(s){throw s}}before_render(){try{new Function("tsccs",`
        return (async function() {
          ${this.componentDidMountFunction}
        }).call(this);
      `).bind(this)(_)}catch(n){throw n}}after_render(){try{new Function("tsccs",`
        return (async function() {
          ${this.addEventFunction}
        }).call(this);
      `).bind(this)(_)}catch(n){throw n}}CreateConnectionBetweenEntityLocal(n,e,s){return wn(this,void 0,void 0,function*(){var I;const T=n.userId,D=((I=n.type)===null||I===void 0?void 0:I.characterValue)+"_"+s,E=yield(0,Je.$)(D,999,999,T);return yield(0,Mt.F)(n.id,e.id,E.id,1e3),"connection created"})}}var wa=v(3890),Ta=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Uo(P){var n=arguments;return Ta(this,void 0,void 0,function*(){const e=he.V.logfunction("GetConnectionsBetweenApi",n);let s=[];try{const I=yield(0,a.Xr)(),T=yield(0,a.Hh)(o.B.GetConnectionsBetweenUrl(),{method:"POST",headers:I,body:JSON.stringify(P)});if(!T.ok)throw(0,f.ry)(T),new Error(`GetConnectionsBetweenApi error: ${T.status}`);return s=yield T.json(),he.V.logUpdate(e),s}catch(I){return(0,f.Mb)(I,o.B.GetConnectionsBetweenUrl()),(0,f.ey)(e,"GetConnectionsBetweenApi",I),s}})}function Go(P){var n,e,s,I,T,D,E;return{ofTheConceptId:(n=P.ofTheConceptId)!==null&&n!==void 0?n:0,toTheConceptId:(e=P.toTheConceptId)!==null&&e!==void 0?e:0,typeId:(s=P.typeId)!==null&&s!==void 0?s:0,type:(I=P.type)!==null&&I!==void 0?I:"",oldType:(T=P.oldType)!==null&&T!==void 0?T:"",reverse:(D=P.reverse)!==null&&D!==void 0&&D,isComposition:(E=P.isComposition)!==null&&E!==void 0&&E,connectionIds:[]}}var wt=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};class Mo{constructor(){this.actions={concepts:[],connections:[]},this.success=!0,this.pendingConnectionDeletions=[],this.transactionId=Math.random().toString().substring(5)}initialize(){return wt(this,void 0,void 0,function*(){yield an.H.initializeTransaction(this.transactionId)})}commitTransaction(){return wt(this,void 0,void 0,function*(){if(!this.success)throw Error("Query Transaction Expired");yield an.H.SyncDataOnline(this.transactionId),yield this.flushPendingConnectionDeletions(),this.actions={concepts:[],connections:[]},this.pendingConnectionDeletions=[],this.success=!1})}commitTransactionWithoutAuth(){return wt(this,void 0,void 0,function*(){if(!this.success)throw Error("Query Transaction Expired");yield an.H.SyncDataOnlineWithoutAuth(this.transactionId),yield this.flushPendingConnectionDeletions(),this.actions={concepts:[],connections:[]},this.pendingConnectionDeletions=[],this.success=!1})}rollbackTransaction(){return wt(this,void 0,void 0,function*(){this.success=!1,this.actions={concepts:[],connections:[]},this.pendingConnectionDeletions=[],yield an.H.rollbackTransaction(this.transactionId,this.actions)})}markAction(){return wt(this,void 0,void 0,function*(){yield an.H.markTransactionActions(this.transactionId,this.actions)})}flushPendingConnectionDeletions(){return wt(this,void 0,void 0,function*(){for(let n=0;n<this.pendingConnectionDeletions.length;n+=300){const e=this.pendingConnectionDeletions.slice(n,n+300);yield(0,Te.E)(e)}})}DeleteConnectionsBetween(n){return wt(this,void 0,void 0,function*(){return this.DeleteConnectionsBetweenBulk([n])})}DeleteConnectionsBetweenBulk(n){return wt(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const e=n.map(Go),s=yield Uo(e),I=[];for(const T of s)I.push(...T.connectionIds);return this.pendingConnectionDeletions.push(...I),I}catch(e){throw this.success=!1,e}})}MakeTheInstanceConceptLocal(n,e){return wt(this,arguments,void 0,function*(s,I,T=!1,D,E,S=999,m=0){try{if(!this.success)throw Error("Query Transaction Expired");const l=yield(0,we.k)(s,I,T,D,E,S,m,this.actions);return yield this.markAction(),l}catch(l){throw this.success=!1,l}})}MakeTheTypeConceptLocal(n,e,s,I){return wt(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const T=yield(0,Je.$)(n,e,s,I,this.actions);return yield this.markAction(),T}catch(T){throw this.success=!1,T}})}CreateTheConceptLocal(n,e,s,I,T,D){return wt(this,arguments,void 0,function*(E,S,m,l,U,V,Q=!1,q=0,X={concepts:[],connections:[]}){try{if(!this.success)throw Error("Query Transaction Expired");const se=yield(0,wa.A)(E,S,m,l,U,V,Q,q,this.actions);return yield this.markAction(),se}catch(se){throw this.success=!1,se}})}CreateConnectionBetweenTwoConceptsLocal(n,e,s){return wt(this,arguments,void 0,function*(I,T,D,E=!1){try{if(!this.success)throw Error("Query Transaction Expired");const S=yield(0,Po.h)(I,T,D,E,this.actions);return yield this.markAction(),S}catch(S){throw this.success=!1,S}})}CreateTheConnectionLocal(n,e,s){return wt(this,arguments,void 0,function*(I,T,D,E=1,S="",m=999){try{if(!this.success)throw Error("Query Transaction Expired");const l=yield(0,Mt.F)(I,T,D,E,S,m,this.actions);return yield this.markAction(),l}catch(l){throw this.success=!1,l}})}CreateConnection(n,e,s){return wt(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const I=yield(0,Mt.d)(n,e,s,this.actions);return yield this.markAction(),I}catch(I){throw this.success=!1,I}})}CreateConnectionBetweenEntityLocal(n,e,s){return wt(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const I=yield Vo(n,e,s,this.actions);return yield this.markAction(),I}catch(I){throw this.success=!1,I}})}CreateTheCompositionLocal(n){return wt(this,arguments,void 0,function*(e,s=null,I=null,T=null,D=null,E=null,S=null,m=!1){try{if(!this.success)throw Error("Query Transaction Expired");const l=yield(0,ce.R)(e,s,I,T,D,E,S,m,this.actions);return yield this.markAction(),l}catch(l){throw this.success=!1,l}})}}const Rr={number:/^\d+(\.\d+)?$/,text:/^[\s\S]*$/,textOnly:/^[A-Za-z\s]+$/,email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,document:/\.(pdf|docx?|pptx?|xlsx?)$/i,sound:/\.(mp3|wav|ogg|flac)$/i,image:/\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i,video:/\.(mp4|avi|mov|mkv|flv|webm)$/i,url:/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,date:/^\d{4}-\d{2}-\d{2}$/,time:/^(?:[01]\d|2[0-3]):[0-5]\d$/,password:/^.{6,}$/,ipaddress:/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/,uuid:/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/};var Tn=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class rt{constructor(){rt.cacheInitialized||rt.initializeAnomalyParameters()}static initializeAnomalyParameters(){return Tn(this,void 0,void 0,function*(){try{yield rt.getAnomalyParameters(),rt.refreshCache(),rt.cacheInitialized=!0}catch{}})}static getAnomalyParameters(){return Tn(this,void 0,void 0,function*(){const n=Date.now();if(rt.anomalyParamsCache&&n-rt.lastFetchedTime<rt.cacheExpiryThreshold)return rt.anomalyParamsCache;try{return yield rt.fetchAnomalyParameters()}catch(e){throw e}})}static fetchAnomalyParameters(){return Tn(this,void 0,void 0,function*(){try{const n=yield fetch("https://devai.freeschema.com/v1/get-frontend-anomaly-parameters",{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)throw new Error("Failed to fetch anomaly parameters");const e=yield n.json();return rt.anomalyParamsCache=e.data,rt.lastFetchedTime=Date.now(),e.data}catch(n){throw n}})}static refreshCache(){return Tn(this,void 0,void 0,function*(){try{Date.now()-rt.lastFetchedTime>rt.cacheExpiryThreshold&&(yield rt.getAnomalyParameters())}catch{}})}detectDataType(n){for(const[e,s]of Object.entries(Rr))if(s.test(n))return e;return null}checkConceptAnomaly(n,e){return Tn(this,void 0,void 0,function*(){const s=[];try{if(!e)return s.push("Null value"),{valid:!1,warnings:s};const I=rt.anomalyParamsCache;n.startsWith("the_")||(n=`the_${n}`);const T=I[n];if(!T)return s.push(`No concept details found for type: ${n}`),{valid:!1,warnings:s};const D=e.length,{min_length:E,max_length:S,data_types:m}=T,l=D>=E&&D<=S,U=this.detectDataType(e),V=m.includes(U);return l||s.push(`Length of '${e}' is outside the allowed range (min: ${E}, max: ${S}). Current length: ${D}.`),V||s.push(`Type mismatch for '${e}'. Expected types: ${m.join(", ")}, detected type: ${U}.`),l&&V&&s.push(`Concept ${n} is valid. Length: ${D}, Type: ${U}`),{valid:l&&V,warnings:s}}catch{return{valid:!1,warnings:s}}})}static checkAnomalyInBulk(n){return Tn(this,void 0,void 0,function*(){rt.cacheInitialized||(yield rt.initializeAnomalyParameters());try{const e={};for(const[s,I]of Object.entries(n)){const T=I.value,{valid:D,warnings:E}=yield new rt().checkConceptAnomaly(s,T);e[s]={valid:D,warnings:E}}return e}catch(e){throw e}})}static getExportedFunction(){return Object.keys(_)}static getFunctionaAnomalyParameters(){}}rt.anomalyParamsCache=null,rt.cacheInitialized=!1,rt.lastFetchedTime=0,rt.cacheExpiryThreshold=6e5;var Wo=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class Br{checkUniqueness(n,e){return Wo(this,void 0,void 0,function*(){const s=he.V.logfunction("checkUniqueness");n.startsWith("the_")||(n="the_"+n);let I=(yield ut(n,999)).id;return!((yield(0,Re.A)(e,I)).id>0)&&(he.V.logUpdate(s),!0)})}validateField(n){return Wo(this,void 0,void 0,function*(){var e;const s=he.V.logfunction("validateField");try{performance.now();const I={},{name:T,value:D,type:E,dataType:S,pattern:m,conceptType:l,maxLength:U,minLength:V,minValue:Q,maxValue:q,accept:X,file:se,required:de,isUnique:pe}=n;if(!de||D!==null&&D!==""||(I.required=`The field ${T} is required.`),S&&D){let ue=Rr[S];ue&&D!==""&&!ue.test(D)&&(I.dataType=`Invalid value for ${S}`)}if(m&&D){const ue=typeof m=="string"?new RegExp(m):m;D===""||ue.test(D)||(I.pattern="Pattern doesn't match with value")}if(D&&U!=null&&D.length>U&&(I.maxLength=`Length exceeds the maximum length of ${U}`),D&&V!=null&&D.length<V&&(I.minLength=`Length must be at least ${V} characters long`),Q!=null&&D&&!isNaN(Number(D))&&Number(D)<Q&&(I.minValue=`Value must be greater than or equal to ${Q}`),q!=null&&D&&!isNaN(Number(D))&&Number(D)>q&&(I.maxValue=`Value must be less than or equal to ${q}`),se&&E&&X){const ue=X.split(",").map(Fe=>Fe.trim().toLowerCase()),Ie=(e=se.name.split(".").pop())===null||e===void 0?void 0:e.toLowerCase();Ie&&!ue.includes(Ie)&&(I.accept=`File must be a valid file type: ${ue.join(", ")}`)}return l&&pe&&D&&((yield this.checkUniqueness(l,D))||(I.unique="Value is not unique")),he.V.logUpdate(s),I}catch(I){throw(0,f.ey)(s,"Validator.validateField",I),I}})}validateForm(n){return Wo(this,void 0,void 0,function*(){const e=he.V.logfunction("validateForm");try{performance.now();const s={};for(const I in n){const T=yield this.validateField(n[I]);Object.keys(T).length>0&&(s[I]=T)}return he.V.logUpdate(e),s}catch(s){throw(0,f.ey)(e,"Validator.validateForm",s),s}})}validate(n){const e=he.V.logfunction("validate");try{let s={};return this.validateField(n).then(I=>{Object.keys(I).length>0?(s.status=!1,s.details=I):s.status=!0}),he.V.logUpdate(e),s}catch(s){(0,f.ey)(e,"Validator.validate",s)}}}const Er=P=>{var n;const e=document.getElementsByName(P)[0];if(!e)return{name:null,value:null,type:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,minValue:null,maxValue:null,accept:null,file:null,required:!1,isUnique:!0};const s=e.hasAttribute("required")||e.getAttribute("data-required")==="true",I=e.hasAttribute("isUnique")&&e.getAttribute("isUnique")==="true";return{name:e.name,value:e.value,type:e.type,dataType:e.getAttribute("data-type"),pattern:e.getAttribute("data-pattern"),conceptType:e.getAttribute("concept-type"),maxLength:e.getAttribute("maxlength")?parseInt(e.getAttribute("maxlength")):null,minLength:e.getAttribute("minlength")?parseInt(e.getAttribute("minlength")):null,minValue:e.getAttribute("min")?parseInt(e.getAttribute("min")):null,maxValue:e.getAttribute("max")?parseInt(e.getAttribute("max")):null,accept:e.getAttribute("accept")||null,file:e.type==="file"&&((n=e.files)===null||n===void 0?void 0:n[0])||null,required:s,isUnique:I}};var kn=v(8545);class Pt{constructor(){this.type="",this.inpage=10,this.page=1,this.concepts=[],this.conceptIds=[],this.selectors=[],this.freeschemaQueries=[],this.filters=[],this.filterLogic="",this.typeConnection="",this.order="DESC",this.outputFormat=je.yv,this.name="",this.filterAncestor="",this.reverse=!1,this.limit=!1,this.isSecure=!0,this.includeInFilter=!1,this.isOldConnectionType=!1,this.cache=!0,this.usePipelineQuery=!1}}var Or=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function io(P){var n=arguments;return Or(this,arguments,void 0,function*(e,s=""){const I=he.V.logfunction("FreeschemaQueryApi",n);var T=yield(0,a.ab)("application/json",s);const D=o.B.FreeschemaQueryUrl(),E=JSON.stringify(e),S=yield h.a.getHash(e),m=e.cache!==!1?h.a.get(S):null;if(m)return(0,a.Hh)(D,{method:"POST",headers:T,body:E}).then(l=>Or(this,void 0,void 0,function*(){if(l.ok){const U=yield l.json();h.a.set(S,U)}else(0,f.ry)(l)})).catch(l=>{(0,f.Mb)(l,D),(0,f.ey)(I,"FreeschemaQueryApi",l)}),m;try{const l=yield(0,a.Hh)(D,{method:"POST",headers:T,body:E});if(l.ok){let U=yield l.json();return h.a.set(S,U),he.V.logUpdate(I),U}return(0,f.ry)(l),[]}catch(l){(0,f.Mb)(l,D),(0,f.ey)(I,"FreeschemaQueryApi",l)}})}var Pn=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class Fr extends Xt.w{constructor(n,e){super(),this.query=new Pt,this.countInfoStrings=[],this.order="DESC",this.totalCount=0,this.unsubscribeCache=null,this.cacheSubscriptionStarted=!1,this.query=n,this.format=n.outputFormat,this.order=n.order}ensureCacheSubscription(){this.cacheSubscriptionStarted||(this.cacheSubscriptionStarted=!0,h.a.getHash(this.query).then(n=>{this.isDisposed||(this.unsubscribeCache=h.a.subscribe(n,e=>Pn(this,void 0,void 0,function*(){this.isDataLoaded=!1,yield this.bind(),this.notify()})))}))}onDispose(){this.unsubscribeCache&&(this.unsubscribeCache(),this.unsubscribeCache=null),this.cacheSubscriptionStarted=!1}run(){return Pn(this,void 0,void 0,function*(){var n,e;try{this.query.outputFormat=je.BG,this.compositionIds=[];let s=yield io(this.query,"");return this.conceptIds=s.conceptIds,this.internalConnections=(n=s.internalConnections)!==null&&n!==void 0?n:[],this.linkers=(e=s.linkers)!==null&&e!==void 0?e:[],this.reverse=s.reverse,this.compositionIds=s.mainCompositionIds,this.totalCount=s.mainCount,this.countInfoStrings=s.countinfo,yield this.build()}catch(s){throw s}})}bind(){return Pn(this,void 0,void 0,function*(){var n,e;try{if(this.ensureCacheSubscription(),this.compositionIds.length>0)for(let I=0;I<this.compositionIds.length;I++)this.removeListenToEvent(this.compositionIds[I]);if(this.isDataLoaded)for(let I=0;I<this.compositionIds.length;I++)this.listenToEvent(this.compositionIds[I]);else{this.query.outputFormat=je.BG,this.compositionIds=[];let I=yield io(this.query,"");this.conceptIds=I.conceptIds,this.internalConnections=(n=I.internalConnections)!==null&&n!==void 0?n:[],this.linkers=(e=I.linkers)!==null&&e!==void 0?e:[],this.reverse=I.reverse,this.compositionIds=I.mainCompositionIds,this.totalCount=I.mainCount,this.countInfoStrings=I.countinfo}let s=yield this.build();if(!this.isDataLoaded){this.isDataLoaded=!0;for(let I=0;I<this.compositionIds.length;I++)this.listenToEvent(this.compositionIds[I]);if(this.query.type!=""){let I=yield ut(this.query.type,999);I.id>0&&this.listenToEventType(I.id)}}for(let I=0;I<this.newIds.length;I++)this.listenToEvent(this.newIds[I]);return this.newIds=[],s}catch(s){throw s}})}build(){return Pn(this,void 0,void 0,function*(){try{he.V.logfunction("build",["schemaquery",this.compositionIds]);let n=(0,Eo.w)(this.countInfoStrings);return this.format==je.y0?this.data=yield(0,Kt.e$)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,n,this.order):this.format==je.ZJ?this.data=yield(0,Kt.y6)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,n,this.order):this.format==je.pU?this.data=yield(0,Kt.rq)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,n,this.order):this.format==je.XZ?(this.data={},this.data.linkers=this.linkers,this.data.conceptIds=this.conceptIds,this.data.compositionIds=this.compositionIds,this.data.reverse=this.reverse,this.data.countInfos=n,this.data.order=this.order):this.data=yield(0,Kt.b6)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,n),this.data}catch(n){throw n}})}}function Rn(P,n){return new Fr(P,n)}function ro(P,n){return Pn(this,void 0,void 0,function*(){const e=new Fr(P,n);try{return yield e.execute()}finally{e.dispose()}})}class jo{constructor(){this.id=0,this.name="",this.html="",this.css="",this.js="",this.library={css:[],js:[]},this.assistant={id:"",input:"",type:""},this.timestamp="",this.widgetId=0,this.type="",this.clean="",this.after_render="",this.before_render="",this.custom_functions=[],this.update="",this.origin=0,this.version=0,this.mount_child="",this.children=[],this.wrapper="0",this.widget=new Dn,this.dependency="",this.root=0}}var ka=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Vo(P,n,e){return ka(this,arguments,void 0,function*(s,I,T,D={concepts:[],connections:[]}){var E,S,m,l,U;const V=he.V.logfunction("CreateConnectionBetweenEntityLocal",[s.id,I.id,T]);if(We)try{const de=yield Ye("CreateConnectionBetweenEntityLocal",{concept1Data:s,concept2Data:I,linker:T,actions:D});return!((S=(E=de?.actions)===null||E===void 0?void 0:E.concepts)===null||S===void 0)&&S.length&&(D.concepts=JSON.parse(JSON.stringify(de.actions.concepts))),!((l=(m=de?.actions)===null||m===void 0?void 0:m.connections)===null||l===void 0)&&l.length&&(D.connections=JSON.parse(JSON.stringify(de.actions.connections))),de.data}catch(de){tt(de)}const Q=s.userId,q=((U=s.type)===null||U===void 0?void 0:U.characterValue)+"_"+T,X=yield(0,Je.$)(q,999,999,Q,D);if(!X)return;const se=yield(0,Mt.F)(s.id,I.id,X.id,1e3,void 0,void 0,D);return he.V.logUpdate(V),se})}var Wt=v(6443);function Ur(){r.i.clearAll(),h.a.clearAll()}function qo(P){for(;P.firstChild;)P.removeChild(P.firstChild)}var Gr=v(939);function Mr(P,n,e){const s=Ve.b.sessionId||"unknown",I={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:s,description:n};he.V.logApplication("USER_EVENT",P,I)}class Wr extends no{constructor(n,e,s,I="",T=10){super(),this.inpage=10,this.selector=e,this.mainType=n,this.filterType=I,this.inpage=T,this.parentDomElement=s,this.mount(this.parentDomElement)}before_render(){this.render()}addFilter(n){if(n!=""){let e=new Zn;e.search=n,e.type=this.filterType,e.logicoperator="like",e.operateon="selector",e.name="selector_filter";let s="( selector_filter )";this.query.filters=[e],this.query.filterLogic=s}else this.query.filters=[],this.query.filterLogic=""}after_render(){let n=this.getElementById("selector"),e=this.getElementById("search-bar"),s=this;e.onchange=()=>{s.addFilter(e.value),s.mainDetails.update()};let I=new Pt;I.type=this.mainType,I.inpage=this.inpage;let T=new Pt;T.typeConnection=this.selector,T.name="selector",I.freeschemaQueries=[T],this.query=I,Rn(this.query,"").subscribe((D,E)=>{let S={};this.mainDetails=E;for(let m=0;m<D.length;m++){let l=D[m],U=l.id,V=l[this.mainType];if(V){let Q=V[this.selector];if(Q){const q=Object.values(Q)[0];S[U]=q}}}qo(n);for(const[m,l]of Object.entries(S)){const U=document.createElement("option");U.value=m,U.textContent=l,n.appendChild(U)}})}getHtml(){const n=document.createElement("style");return n.textContent=`
.search-select-wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: Arial, sans-serif;
}

#search-bar {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

#selector {
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
`,document.head.prepend(n),this.html=`
        <div class="search-select-wrapper">
        <input type="text" placeholder="Select or type..." id='search-bar'>
        <select id='selector'>
        </div>`,this.html}}var Ke=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};class et{static get baseUrl(){return o.B.ACCESS_CONTROL_BASE_URL}static getAsync(n){return Ke(this,void 0,void 0,function*(){const e=yield(0,a.Hh)(`${this.baseUrl}${n}`,{method:"GET",headers:yield(0,a.Xr)()});if(!e.ok)throw new Error(`GET '${n}' failed with status ${e.status}`);const s=yield e.json();if(s==null)throw new Error(`The response for GET '${n}' returned null.`);return s})}static postAsync(n,e){return Ke(this,void 0,void 0,function*(){const s=yield(0,a.Hh)(`${this.baseUrl}${n}`,{method:"POST",headers:yield(0,a.Xr)(),body:JSON.stringify(e)});if(!s.ok)throw new Error(`POST '${n}' failed with status ${s.status}`);const I=yield s.json();if(I==null)throw new Error(`The response for POST '${n}' returned null.`);return I})}static deleteAsync(n,e){return Ke(this,void 0,void 0,function*(){const s={method:"DELETE",headers:yield(0,a.Xr)()};e!=null&&(s.body=JSON.stringify(e));const I=yield(0,a.Hh)(`${this.baseUrl}${n}`,s);if(!I.ok)throw new Error(`DELETE '${n}' failed with status ${I.status}`);const T=yield I.json();if(T==null)throw new Error(`The response for DELETE '${n}' returned null.`);return T})}assignAccessAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/assign",n)})}checkAccessAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/check",n)})}revokeAccessAsync(n){return Ke(this,void 0,void 0,function*(){return et.deleteAsync("/access/revoke",n)})}assignAccessBulkAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/assign/bulk",n)})}revokeAccessBulkAsync(n){return Ke(this,void 0,void 0,function*(){return et.deleteAsync("/access/revoke/bulk",n)})}checkAccessBulkAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/check/bulk",n)})}getAccessByIdAsync(n){return Ke(this,void 0,void 0,function*(){return et.getAsync(`/access/${n}`)})}setAccessInheritanceAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/inheritance",n)})}getAccessInheritanceStatusAsync(n){return Ke(this,arguments,void 0,function*(e,s=999){return et.getAsync(`/access/inheritance/status?accessId=${e}&connectionTypeId=${s}`)})}assignSuperAdminAccessAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/super-admin",n)})}revokeSuperAdminAccessAsync(n){return Ke(this,void 0,void 0,function*(){return et.deleteAsync("/access/super-admin",n)})}checkSuperAdminStatusAsync(n){return Ke(this,void 0,void 0,function*(){return et.getAsync(`/access/super-admin?accessId=${n}`)})}assignConceptAccessAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/concept/assign",n)})}assignConceptAccessBulkAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/concept/assign/bulk",n)})}revokeConceptAccessBulkAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/concept/revoke/bulk",n)})}setParentAccessInheritanceAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/inheritance/parent",n)})}removeParentAccessInheritanceAsync(n,e){return Ke(this,void 0,void 0,function*(){let s=`/access/inheritance/parent?accessId=${n}`;return e!=null&&(s+=`&parentAccessId=${e}`),et.deleteAsync(s)})}hasParentAccessInheritanceAsync(n,e){return Ke(this,void 0,void 0,function*(){let s=`/access/inheritance/parent/status?accessId=${n}`;return e!=null&&(s+=`&parentAccessId=${e}`),et.getAsync(s)})}getParentAccessIdAsync(n){return Ke(this,void 0,void 0,function*(){return et.getAsync(`/access/inheritance/parent?accessId=${n}`)})}setParentAccessInheritanceByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/inheritance/parent/concept",n)})}setParentAccessInheritanceBulkByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/inheritance/parent/concept/bulk",n)})}removeParentAccessInheritanceByConceptAsync(n,e){return Ke(this,void 0,void 0,function*(){let s=`/access/inheritance/parent/concept?childConceptId=${n}`;return e!=null&&(s+=`&parentConceptId=${e}`),et.deleteAsync(s)})}removeParentAccessInheritanceBulkByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.deleteAsync("/access/inheritance/parent/concept/bulk",n)})}hasParentAccessInheritanceByConceptAsync(n,e){return Ke(this,void 0,void 0,function*(){let s=`/access/inheritance/parent/concept/status?childConceptId=${n}`;return e!=null&&(s+=`&parentConceptId=${e}`),et.getAsync(s)})}getParentAccessIdByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.getAsync(`/access/inheritance/parent/concept?childConceptId=${n}`)})}assignSuperAdminByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/super-admin/concept",n)})}revokeSuperAdminByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.deleteAsync("/access/super-admin/concept",n)})}checkSuperAdminByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.getAsync(`/access/super-admin/concept?conceptId=${n}`)})}setAccessInheritanceByConceptAsync(n){return Ke(this,void 0,void 0,function*(){return et.postAsync("/access/inheritance/concept",n)})}getAccessInheritanceStatusByConceptAsync(n){return Ke(this,arguments,void 0,function*(e,s=999){return et.getAsync(`/access/inheritance/concept/status?conceptId=${e}&connectionTypeId=${s}`)})}}var Qe=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};class Ft{constructor(n){this.apiClient=n||new et}checkAccess(n,e,s){return Qe(this,void 0,void 0,function*(){var I;if(!e||e.trim()==="")throw new Error("Permission is required");return(I=(yield this.checkAccessBulk([n],e.toLowerCase(),s)).get(n))!==null&&I!==void 0&&I})}checkAccessBulk(n,e,s){return Qe(this,void 0,void 0,function*(){var I,T,D,E,S,m;if(!e||e.trim()==="")throw new Error("Permission is required");e=e.toLowerCase();const l=new Map;if(!n||n.length===0)return l;if(!o.B.FLAGS||!o.B.FLAGS.accessControl){for(const Se of n)l.set(Se,!0);return l}if(s!=null&&s>0)try{if(yield this.isSuperAdmin(s)){for(const Se of n)l.set(Se,!0);return l}}catch{}const U=[],V=new Set,Q=new Map;let q=null;if(s!=null&&s>0)try{q=yield(0,ye.A)(s)}catch{}const X=yield(0,on.r)(n),se=new Map;for(const Se of X)se.set(Se.id,Se);const de=new Map;for(const Se of n){const ke=(I=se.get(Se))!==null&&I!==void 0?I:yield(0,ye.A)(Se);if(!ke||ke.id===0){l.set(Se,!1);continue}const Pe=(T=ke.accessId)!==null&&T!==void 0?T:0,Oe=(D=ke.typeId)!==null&&D!==void 0?D:0;if(q&&q.userId&&q.userId===ke.userId){l.set(Se,!0);continue}if(ke.referentId===null||ke.referentId===void 0||ke.referentId===0){l.set(Se,!0);continue}if(Pe<1e4){l.set(Se,!0);continue}let Ge=0;if(Oe>0){let Xe=de.get(Oe);if(!Xe)try{Xe=yield(0,ye.A)(Oe),de.set(Oe,Xe)}catch{}Xe&&(Ge=(E=Xe.accessId)!==null&&E!==void 0?E:0)}U.push({conceptId:Se,accessId:Pe,typeAccessId:Ge}),Pe>0&&(V.add(Pe),Q.set(Pe,Se)),Ge>0&&V.add(Ge)}if(U.length===0)return l;const pe=yield this.resolveBulkInheritanceGraph(V,0,Q),ue=[],Ie=new Set;for(const Se of pe.values())for(const ke of Se)Ie.has(ke)||(Ie.add(ke),ue.push(ke));const Fe=yield this.resolveSubjects(s),Ue=yield this.resolveBulkDecisions(ue,e,Fe);for(const Se of U){const ke=(S=pe.get(Se.accessId))!==null&&S!==void 0?S:[Se.accessId],Pe=Se.typeAccessId>0?(m=pe.get(Se.typeAccessId))!==null&&m!==void 0?m:[Se.typeAccessId]:[];l.set(Se.conceptId,this.hasAnyGrant(ke,Pe,Fe,Ue))}return l})}getConceptIdsWithPermission(n,e,s){return Qe(this,void 0,void 0,function*(){if(!n||n.trim()==="")throw new Error("Permission is required");if(!e||e.length===0)return[];const I=yield this.checkAccessBulk(e,n.toLowerCase(),s);return e.filter(T=>I.get(T)===!0)})}resolveBulkInheritanceGraph(n,e,s){return Qe(this,void 0,void 0,function*(){var I,T,D,E,S,m,l,U,V,Q,q,X,se,de;const pe=new Map,ue=new Set;let Ie=new Set(n),Fe=0;for(;Ie.size>0&&!(Fe>=10);){Fe++;const Se=new Set;for(const Pe of Ie)ue.add(Pe);const ke=Array.from(Ie);for(const Pe of ke)try{const Oe=(I=yield(0,Gt.l)(Pe))!==null&&I!==void 0?I:[];for(const Ge of Oe){if(((S=(D=(T=Ge.connectionTypeName)!==null&&T!==void 0?T:Ge.typeName)!==null&&D!==void 0?D:(E=Ge.type)===null||E===void 0?void 0:E.characterValue)!==null&&S!==void 0?S:"").toString().toLowerCase()!=="the_parent_access_inheritance")continue;const Xe=(l=(m=Ge.toTheConceptId)!==null&&m!==void 0?m:Ge.toConceptId)!==null&&l!==void 0?l:0;Xe>0&&!ue.has(Xe)&&(pe.has(Pe)||pe.set(Pe,[]),pe.get(Pe).push(Xe),Se.add(Xe))}}catch{}for(const Pe of ke)try{const Oe=yield this.apiClient.getParentAccessIdAsync(Pe);if(Oe?.status===!0&&Oe.data!==void 0&&Oe.data!==null){const Ge=Ft.parseIntData(Oe);Ge!==null&&Ge>0&&!ue.has(Ge)&&(pe.has(Pe)||pe.set(Pe,[]),pe.get(Pe).push(Ge),Se.add(Ge))}}catch{}for(const Pe of ke)try{const Oe=yield this.apiClient.getAccessInheritanceStatusAsync(Pe);if(!Ft.parseBoolData(Oe))continue;const Ge=s.get(Pe);if(!Ge||Ge===0)continue;const Xe=(U=yield(0,Gt.l)(Ge))!==null&&U!==void 0?U:[];for(const Ze of Xe){if(((Q=(V=Ze.ofTheConceptId)!==null&&V!==void 0?V:Ze.ofConceptId)!==null&&Q!==void 0?Q:0)!==Ge||e>0&&((q=Ze.typeId)!==null&&q!==void 0?q:0)!==e)continue;const nt=(se=(X=Ze.toTheConceptId)!==null&&X!==void 0?X:Ze.toConceptId)!==null&&se!==void 0?se:0;if(nt)try{const st=yield(0,ye.A)(nt),$e=(de=st?.accessId)!==null&&de!==void 0?de:0;$e>0&&!ue.has($e)&&(pe.has(Pe)||pe.set(Pe,[]),pe.get(Pe).push($e),s.set($e,nt),Se.add($e))}catch{}}}catch{}for(const Pe of ue)Se.delete(Pe);Ie=Se}const Ue=new Map;for(const Se of n){const ke=[Se],Pe=new Set([Se]),Oe=[Se];for(;Oe.length>0&&ke.length<100;){const Ge=Oe.shift(),Xe=pe.get(Ge);if(Xe)for(const Ze of Xe)Pe.has(Ze)||(Pe.add(Ze),ke.push(Ze),Oe.push(Ze))}Ue.set(Se,ke)}return Ue})}resolveBulkDecisions(n,e,s){return Qe(this,void 0,void 0,function*(){var I;const T=new Map;for(const D of s)try{const E={accessIds:n,permission:e,entityId:D},S=yield this.apiClient.checkAccessBulkAsync(E);if(S?.status===!0&&S.data&&Array.isArray(S.data)){const m=new Map;for(const l of S.data)m.set(l.accessId,l.hasAccess);for(const l of n)T.set(`${l}:${D??0}`,(I=m.get(l))!==null&&I!==void 0&&I)}else for(const m of n)T.set(`${m}:${D??0}`,!1)}catch{for(const S of n)T.set(`${S}:${D??0}`,!1)}return T})}resolveSubjects(n){return Qe(this,void 0,void 0,function*(){var e,s,I,T,D,E,S;const m=[null];if(n!=null&&n>0){m.push(n);try{const l=(e=yield(0,Gt.l)(n))!==null&&e!==void 0?e:[];for(const U of l){if(((D=(I=(s=U.connectionTypeName)!==null&&s!==void 0?s:U.typeName)!==null&&I!==void 0?I:(T=U.type)===null||T===void 0?void 0:T.characterValue)!==null&&D!==void 0?D:"").toString().toLowerCase()!=="the_entity_s_group")continue;const V=(S=(E=U.toTheConceptId)!==null&&E!==void 0?E:U.toConceptId)!==null&&S!==void 0?S:0;V>0&&m.push(V)}}catch{}}return m})}hasAnyGrant(n,e,s,I){for(const T of n)for(const D of s)if(I.get(`${T}:${D??0}`)===!0)return!0;for(const T of e)for(const D of s)if(I.get(`${T}:${D??0}`)===!0)return!0;return!1}assignAccess(n){return Qe(this,void 0,void 0,function*(){if(!n||!n.conceptIds||n.conceptIds.length===0)throw new Error("Request must contain at least one conceptId");try{const e=yield this.apiClient.assignConceptAccessBulkAsync(n);if(e?.status!==!0)throw new Error(e?.message||"Failed to assign bulk access");return e?.data&&Array.isArray(e.data)?e.data:[]}catch(e){throw e}})}revokeAccess(n,e,s){return Qe(this,void 0,void 0,function*(){var I;try{const T=(I=(yield(0,ye.A)(n)).accessId)!==null&&I!==void 0?I:0;if(T===0)throw new Error(`Concept with ID ${n} does not have a valid accessId`);const D=yield this.apiClient.revokeAccessAsync({accessId:T,permission:e,entityId:s});return D?.status===!0}catch(T){throw new Error(`Error revoking access for concept ${n}, permission '${e}', entityId ${s}: ${T}`)}})}revokeAccessBulk(n){return Qe(this,void 0,void 0,function*(){if(!n||!n.conceptIds||n.conceptIds.length===0)throw new Error("Request must contain at least one conceptId");try{const e=yield this.apiClient.revokeConceptAccessBulkAsync(n);if(e?.status!==!0)throw new Error(e?.message||"Failed to revoke bulk concept access");return e?.data&&Array.isArray(e.data)?e.data:[]}catch(e){throw e}})}setAccessInheritance(n){return Qe(this,void 0,void 0,function*(){var e;try{const s=yield this.apiClient.setAccessInheritanceByConceptAsync({conceptId:n,connectionTypeId:999});return(e=s?.status)!==null&&e!==void 0&&e}catch(s){throw new Error(`Error setting access inheritance for conceptId ${n}: ${s}`)}})}getAccessInheritanceStatus(n){return Qe(this,arguments,void 0,function*(e,s=999){try{const I=yield this.apiClient.getAccessInheritanceStatusByConceptAsync(e,s);return Ft.parseBoolData(I)}catch(I){throw new Error(`Error getting access inheritance status for conceptId ${e}: ${I}`)}})}setAccessInheritanceStatus(n,e){return Qe(this,arguments,void 0,function*(s,I,T=999){var D;try{const E=yield this.apiClient.setAccessInheritanceByConceptAsync({conceptId:s,enable:I,connectionTypeId:T});return(D=E?.status)!==null&&D!==void 0&&D}catch(E){throw new Error(`Error setting access inheritance status for conceptId ${s}: ${E}`)}})}setParentAccessInheritance(n,e){return Qe(this,void 0,void 0,function*(){try{const s=yield this.apiClient.setParentAccessInheritanceByConceptAsync({parentConceptId:e,childConceptId:n});if(s?.status===!0){const I=Ft.parseIntData(s);if(I!==null&&I>0)return I}return 0}catch(s){throw new Error(`Error setting parent access inheritance for conceptId ${n}: ${s}`)}})}setParentAccessInheritanceBulk(n,e){return Qe(this,void 0,void 0,function*(){try{const s=yield this.apiClient.setParentAccessInheritanceBulkByConceptAsync({parentConceptId:e,childConceptIds:n});return s?.status===!0&&Array.isArray(s.data)?s.data:[]}catch(s){throw new Error(`Error setting bulk parent access inheritance for parentConceptId ${e}: ${s}`)}})}removeParentAccessInheritance(n,e){return Qe(this,void 0,void 0,function*(){var s;try{const I=yield this.apiClient.removeParentAccessInheritanceByConceptAsync(n,e);return(s=I?.message)!==null&&s!==void 0?s:"Parent access inheritance removal failed"}catch(I){throw new Error(`Error removing parent access inheritance for conceptId ${n}: ${I}`)}})}removeParentAccessInheritanceBulk(n,e){return Qe(this,void 0,void 0,function*(){try{const s=yield this.apiClient.removeParentAccessInheritanceBulkByConceptAsync({parentConceptId:e??0,childConceptIds:n});return s?.status===!0&&Array.isArray(s.data)?s.data:[]}catch(s){throw new Error(`Error removing bulk parent access inheritance: ${s}`)}})}hasParentAccessInheritance(n,e){return Qe(this,void 0,void 0,function*(){try{const s=yield this.apiClient.hasParentAccessInheritanceByConceptAsync(n,e);return Ft.parseBoolData(s)}catch(s){throw new Error(`Error checking parent access inheritance for conceptId ${n}: ${s}`)}})}getParentAccessId(n){return Qe(this,void 0,void 0,function*(){try{const e=yield this.apiClient.getParentAccessIdByConceptAsync(n);return Ft.parseIntData(e)}catch(e){throw new Error(`Error getting parent access ID for conceptId ${n}: ${e}`)}})}isSuperAdmin(n){return Qe(this,void 0,void 0,function*(){try{if(n===0)return!1;if(!o.B.FLAGS||!o.B.FLAGS.accessControl)return!0;const e=yield this.apiClient.checkSuperAdminByConceptAsync(n);return Ft.parseBoolData(e)}catch(e){throw new Error(`Error checking super admin status for entityId ${n}: ${e}`)}})}assignSuperAdmin(n){return Qe(this,void 0,void 0,function*(){try{const e=yield this.apiClient.assignSuperAdminByConceptAsync({conceptId:n});return e?.status===!0&&e.data!==void 0?n:0}catch(e){throw new Error(`Failed to assign super admin for entityId ${n}: ${e}`)}})}revokeSuperAdmin(n){return Qe(this,void 0,void 0,function*(){try{const e=yield this.apiClient.revokeSuperAdminByConceptAsync({conceptId:n});return e?.status===!0&&e.message?e.message:"Super admin access deletion failed"}catch(e){throw new Error(`Failed to revoke super admin for entityId ${n}: ${e}`)}})}makeConceptPrivate(n){return Qe(this,void 0,void 0,function*(){var e,s,I,T,D,E,S,m;try{if(!n)throw new Error("conceptId is required");const l=yield(0,ye.A)(n);if(!l||l.id===0)throw new Error(`Concept with ID ${n} not found`);const U=typeof globalThis.getUserDetails=="function"?globalThis.getUserDetails():null;let V=Number((T=(I=(s=(e=U?.entity)!==null&&e!==void 0?e:U?.entityId)!==null&&s!==void 0?s:U?.userConcept)!==null&&I!==void 0?I:U?.userId)!==null&&T!==void 0?T:0)||0;if(!V)throw new Error("Logged-in entity id not found");if(l.userId!==V)throw new Error("Only the owner may make the concept private");const Q=["read","write","execute","delete"];let q=(D=l.accessId)!==null&&D!==void 0?D:0;const X={conceptIds:[n],permissions:Q,entityId:V},se=yield this.apiClient.assignConceptAccessBulkAsync(X);if(!se||se.status!==!0)throw new Error(`Failed to assign permissions for entity ${V} via bulk API`);if(Array.isArray(se.data))for(const de of se.data){const pe=(S=(E=de.accessId)!==null&&E!==void 0?E:de.data)!==null&&S!==void 0?S:0;typeof pe=="number"&&pe>q&&(q=pe)}else typeof se.data=="number"&&se.data>q&&(q=se.data);return q&&q!==((m=l.accessId)!==null&&m!==void 0?m:0)&&(l.accessId=q,t.I.AddConcept(l)),!0}catch(l){throw new Error(`Error making concept ${n} private: ${l}`)}})}static parseBoolData(n){if(!n?.status||n.data===void 0||n.data===null)return!1;const e=n.data;if(typeof e=="boolean")return e;if(typeof e=="string")return e.toLowerCase()==="true";if(typeof e=="number")return e!==0;if(typeof e=="object"){for(const s of["enabled","Enabled","isEnabled","IsEnabled","status","Status","hasAccess","HasAccess"])if(s in e){const I=e[s];if(typeof I=="boolean")return I;if(typeof I=="string")return I.toLowerCase()==="true"}}return!1}static parseIntData(n){if(!n?.status||n.data===void 0||n.data===null)return null;const e=n.data;if(typeof e=="number")return e;if(typeof e=="string"){const s=parseInt(e,10);return isNaN(s)?null:s}if(typeof e=="object"){for(const s of["id","Id","accessId","AccessId","parentAccessId","ParentAccessId"])if(s in e){const I=e[s];if(typeof I=="number")return I;if(typeof I=="string"){const T=parseInt(I,10);if(!isNaN(T))return T}}}return null}static isSuperAdmin(n){return Qe(this,void 0,void 0,function*(){return St().isSuperAdmin(n)})}static assignSuperAdmin(n){return Qe(this,void 0,void 0,function*(){return St().assignSuperAdmin(n)})}static revokeSuperAdmin(n){return Qe(this,void 0,void 0,function*(){return St().revokeSuperAdmin(n)})}static checkAccess(n,e,s){return Qe(this,void 0,void 0,function*(){return St().checkAccess(n,e,s)})}static checkAccessBulk(n,e,s){return Qe(this,void 0,void 0,function*(){return St().checkAccessBulk(n,e,s)})}static assignAccess(n){return Qe(this,void 0,void 0,function*(){return St().assignAccess(n)})}static revokeAccess(n,e,s){return Qe(this,void 0,void 0,function*(){return St().revokeAccess(n,e,s)})}static revokeAccessBulk(n){return Qe(this,void 0,void 0,function*(){return St().revokeAccessBulk(n)})}static setParentAccessInheritance(n,e){return Qe(this,void 0,void 0,function*(){return St().setParentAccessInheritance(n,e)})}static setParentAccessInheritanceBulk(n,e){return Qe(this,void 0,void 0,function*(){return St().setParentAccessInheritanceBulk(n,e)})}static removeParentAccessInheritance(n,e){return Qe(this,void 0,void 0,function*(){return St().removeParentAccessInheritance(n,e)})}static removeParentAccessInheritanceBulk(n,e){return Qe(this,void 0,void 0,function*(){return St().removeParentAccessInheritanceBulk(n,e)})}static hasParentAccessInheritance(n,e){return Qe(this,void 0,void 0,function*(){return St().hasParentAccessInheritance(n,e)})}static getParentAccessId(n){return Qe(this,void 0,void 0,function*(){return St().getParentAccessId(n)})}}let Ho=null;function St(){return Ho||(Ho=new Ft),Ho}const jr=`
/* CKEditor content styles */
.ck-content {
  /* Container styles */
  max-width: 100%;
  margin: 0 auto;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  line-height: 1.5;
  padding: 0.75rem;
  background: #fff;
  color: #333;
  border: 1px solid #ccced1;
}

/* Headings */
.ck-content h1, .ck-content h2, .ck-content h3, 
.ck-content h4, .ck-content h5, .ck-content h6 {
  font-weight: 700;
  line-height: 1.2;
  margin: 1em 0 0.5em;
}

.ck-content h1 { font-size: 2.5em; }
.ck-content h2 { font-size: 2em; }
.ck-content h3 { font-size: 1.75em; }
.ck-content h4 { font-size: 1.5em; }
.ck-content h5 { font-size: 1.25em; }
.ck-content h6 { font-size: 1em; }

/* Paragraphs and spacing */
.ck-content p {
  margin: 1em 0;
  line-height: 1.6;
}

/* Links */
.ck-content a {
  color: #1a73e8;
  text-decoration: none;
}

.ck-content a:hover {
  text-decoration: underline;
}

/* Lists */
.ck-content ul,
.ck-content ol {
  padding-left: 2em;
  margin: 1em 0;
}

.ck-content ul {
  list-style: disc;
}

.ck-content ol {
  list-style: decimal;
}

.ck-content li {
  margin: 0.5em 0;
}

/* Blockquotes */
.ck-content blockquote {
  margin: 1em 0;
  padding-left: 1em;
  border-left: 5px solid #ccc;
  font-style: italic;
  color: #666;
}

/* Code blocks */
.ck-content pre {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1em;
  margin: 1em 0;
  overflow-x: auto;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

.ck-content code {
  background: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

/* Tables */
.ck-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 1em 0;
}

.ck-content table th,
.ck-content table td {
  border: 1px solid #ddd;
  padding: 0.75em;
  text-align: left;
}

.ck-content table th {
  background: #f5f5f5;
  font-weight: bold;
}

/* Images */
.ck-content img {
  max-width: 100%;
  height: auto;
  margin: 1em 0;
}

.ck-content figure {
  margin: 1em 0;
  text-align: center;
}

.ck-content figure img {
  margin: 0;
}

.ck-content figcaption {
  color: #666;
  font-size: 0.9em;
  margin-top: 0.5em;
}

/* Dark mode */
/*
@media (prefers-color-scheme: dark) {
  .ck-content {
    background: #1a1a1a;
    color: #e0e0e0;
  }

  .ck-content a {
    color: #64b5f6;
  }

  .ck-content blockquote {
    border-left-color: #404040;
    color: #b0b0b0;
  }

  .ck-content pre,
  .ck-content code {
    background: #2d2d2d;
    border-color: #404040;
  }

  .ck-content table th,
  .ck-content table td {
    border-color: #404040;
  }

  .ck-content table th {
    background: #2d2d2d;
  }

  .ck-content figcaption {
    color: #b0b0b0;
  }
}
*/

/* CUSTOM DOCUMENTATION CSS */

#documentation-preview {
  border: 1px solid #ccc;
  padding: 1rem;
}

#documentation-preview h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.pre-wrapper {
  background: #f2f5f9;
  border: 1px solid #cecece;
  display: block;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.pre-wrapper pre {
  margin: 0;
  color: #e87aa2;
}

.widget-doc-section pre {
  background-color: transparent;
}

.widget-doc-section p {
  margin: 0;
}

.widget-doc-section code {
  color: #e87aa2;
  font-size: 0.875rem;
}

.mv-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.pv-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

  .widget-documentation-heading {
    background-color: #6e757d;
    color: #eee;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .widget-documentation-heading h4 {
    margin-bottom: 0;
  }

  .close-documentation-button {
    border: none;
    outline: none;
    background-color: transparent;
    line-height: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .close-documentation-button:hover,
  .close-documentation-button:focus  {
    background-color: transparent;
  }

  .documentation-creator {
    text-align: right;
    color: #666;
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .documentation-creator span {
    font-style: italic;
  }

  .documentation-attachments {
    display: flex;
    flex-wrap: wrap;
  }

  .documentation-attachments img {
    width: 25%;
    height: auto;
    border: 1px solid #ccc;
    padding: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .documentation-attachments iframe {
    width: 50%;
    border: 1px solid #ccc;
    padding: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .widget-documentation-footer {
    text-align: right;
    margin-top: 1rem;
  }

  .widget-documentation-footer button {
    border-radius: 0;
    border: none;
    padding: 0.5rem 1.5rem;
    text-align: center;
    background: #6e757d;
    color: #eee;
  }

  #widget-details {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 9999;
  }

  #widget-details button {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 0 0 0 0.25rem;
    height: auto;
    width: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  #widget-details button:hover, 
  #widget-details button:focus {
    opacity: 0.75;
  }

  #widget-details button span {
    pointer-events: none;
    font-size: 1rem;
  }

  #widget-details button svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
    fill: #999;
  }

  #widget-documentation-preview-modal {
    border: none;
  }

  @media (min-width: 768px) {
    #widget-documentation-preview-modal {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
  }

`,Zt={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"};var Vr=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};class dt{static get(n,e){return Vr(this,void 0,void 0,function*(){if(dt.cache.has(n))return dt.cache.get(n);if(dt.promises.has(n))return dt.promises.get(n);const s=e().then(I=>(dt.cache.set(n,I),dt.promises.delete(n),I)).catch(I=>{throw dt.promises.delete(n),I});return dt.promises.set(n,s),s})}static has(n){return dt.cache.has(n)}static peek(n){return dt.cache.get(n)}static invalidate(n){dt.cache.delete(n),dt.promises.delete(n)}static clear(){dt.cache.clear(),dt.promises.clear()}static set(n,e){return Vr(this,void 0,void 0,function*(){return dt.promises.delete(n),dt.cache.set(n,e),e})}static stats(){return{cacheSize:dt.cache.size,pendingRequests:dt.promises.size,keys:Array.from(dt.cache.keys())}}}dt.cache=new Map,dt.promises=new Map;var ct=v(2895);const Aa=ct;ct.stringify,ct.fromJSON,ct.plugin,ct.parse,ct.list,ct.document,ct.comment,ct.atRule,ct.rule,ct.decl,ct.root,ct.CssSyntaxError,ct.Declaration,ct.Container,ct.Processor,ct.Document,ct.Comment,ct.Warning,ct.AtRule,ct.Result,ct.Input,ct.Rule,ct.Root,ct.Node;var _a=v(2110),Sa=v.n(_a),xa=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function qr(P){return xa(this,void 0,void 0,function*(){try{return(yield Aa([Sa()()]).process(P,{from:void 0})).css}catch{return null}})}var Hr=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Na(P){return Hr(this,void 0,void 0,function*(){var n,e,s,I,T,D,E,S,m,l,U,V,Q,q;[{key:"meta_title",value:(e=(n=P?.[`the_${Zt.PAGE_COMP_NAME}_meta_title`])===null||n===void 0?void 0:n.data)===null||e===void 0?void 0:e.the_meta_title},{key:"meta_description",value:(I=(s=P?.[`the_${Zt.PAGE_COMP_NAME}_meta_description`])===null||s===void 0?void 0:s.data)===null||I===void 0?void 0:I.the_meta_description},{key:"meta_keywords",value:(D=(T=P?.[`the_${Zt.PAGE_COMP_NAME}_meta_keywords`])===null||T===void 0?void 0:T.data)===null||D===void 0?void 0:D.the_meta_keywords},{key:"width",value:(S=(E=P?.[`the_${Zt.PAGE_COMP_NAME}_width`])===null||E===void 0?void 0:E.data)===null||S===void 0?void 0:S.the_width},{key:"font_size",value:(l=(m=P?.[`the_${Zt.PAGE_COMP_NAME}_font_size`])===null||m===void 0?void 0:m.data)===null||l===void 0?void 0:l.the_font_size},{key:"font_family",value:(V=(U=P?.[`the_${Zt.PAGE_COMP_NAME}_font_family`])===null||U===void 0?void 0:U.data)===null||V===void 0?void 0:V.the_font_family},{key:"type",value:(q=(Q=P?.[`the_${Zt.PAGE_COMP_NAME}_type`])===null||Q===void 0?void 0:Q.data)===null||q===void 0?void 0:q.the_type}].forEach(X=>{X.value&&function(se,de){Hr(this,void 0,void 0,function*(){const pe=document.getElementById("fspage-properties")||function(){const Ie=document.createElement("style");return Ie.id="fspage-properties",document.head.appendChild(Ie),Ie}();let ue="";switch(se){case"width":Bn(".fspage { width: [^;]+ !important; }"),ue=de?`.fspage { width: ${de} !important; }`:"";break;case"font_size":Bn(".fspage { font-size: [^;]+; }"),ue=de?`.fspage { font-size: ${de}px; }`:"";break;case"font_family":Bn(".fspage { font-family: [^;]+; }"),ue=de?`.fspage { font-family: ${de}; }`:"";break;case"type":Bn(".fspage { width: 1200px; margin: 0 auto; }"),Bn(".fspage { width: 100%; padding: 0; }"),ue=de==="fixed"?".fspage { width: 1200px; margin: 0 auto; }":de==="fluid"?".fspage { width: 100%; padding: 0; }":"";break;case"meta_title":document.title=de;break;case"meta_keywords":$r(se.replace("meta_",""),de);break;case"meta_description":return void $r(se.replace("meta_",""),de)}pe.textContent+=ue})}(X.key,X.value)})})}function Bn(P){const n=document.getElementById("fspage-properties");if(!n)return;let e=n?.textContent;e=e?e.replace(new RegExp(P,"g"),""):"",n.textContent=e}function $r(P,n){let e=document.querySelector(`meta[name="${P}"]`);e||(e=document.createElement("meta"),e.setAttribute("name",P),document.head.appendChild(e)),e.setAttribute("content",n)}var zr=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function so(P){return zr(this,void 0,void 0,function*(){var n,e,s,I;!((e=(n=P?.library)===null||n===void 0?void 0:n.css)===null||e===void 0)&&e.length&&function(T){var D;const E=(D=T?.library)===null||D===void 0?void 0:D.css,S=`vde-css-${T?.origin?T?.origin:T?.widgetId}`;(function(m){const l=`link.${m}`,U=document.querySelectorAll(l);U?.length&&U?.forEach(V=>{V.remove()})})(S),E?.length&&E?.sort((m,l)=>Number(m?.order)-Number(l?.order)),E?.forEach(m=>{const l=document.createElement("link");l.classList.add(S),l.setAttribute("rel","stylesheet"),l.setAttribute("href",m.url),document.head.appendChild(l)})}(P),!((I=(s=P?.library)===null||s===void 0?void 0:s.js)===null||I===void 0)&&I.length&&(yield function(T){return zr(this,void 0,void 0,function*(){var D;const E=(D=T?.library)===null||D===void 0?void 0:D.js,S=`vde-js-${T?.origin?T?.origin:T?.widgetId}`;if(function(m){const l=`script.${m}`,U=document.querySelectorAll(l);U?.length&&U?.forEach(V=>{V.remove()})}(S),E?.length){E.sort((m,l)=>Number(m?.order)-Number(l?.order));for(const m of E)m?.url&&(document.querySelector(`script[src="${m.url}"]`)||(yield new Promise((l,U)=>{const V=document.createElement("script");V.classList.add(S),V.setAttribute("type","text/javascript"),V.setAttribute("src",m.url),V.setAttribute("crossorigin","anonymous"),V.onload=()=>{l()},V.onerror=Q=>{U(new Error(`Failed to load script: ${m.url}`))},document.head.appendChild(V)})))}})}(P))})}var yt=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Jr(P,n,e,s){return yt(this,void 0,void 0,function*(){var I,T,D,E,S,m,l,U,V,Q;const q=new Pt;q.conceptIds=[P],q.inpage=100,q.outputFormat=je.y0,q.selectors=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type","the_page_meta_title","the_page_meta_description","the_page_meta_keywords"];let X=yield ro(q,"");Na((T=(I=X?.[0])===null||I===void 0?void 0:I.data)===null||T===void 0?void 0:T[`the_${Zt.PAGE_COMP_NAME}`]),document.getElementById("app").classList.add("fspage");const se=document.head.querySelectorAll("style#mystyleid");Array.from(se).forEach(de=>de.remove()),!((m=(S=(E=(D=X?.[0])===null||D===void 0?void 0:D.data)===null||E===void 0?void 0:E.the_page)===null||S===void 0?void 0:S.the_page_body)===null||m===void 0)&&m.id?yield ao((Q=(V=(U=(l=X?.[0])===null||l===void 0?void 0:l.data)===null||U===void 0?void 0:U.the_page)===null||V===void 0?void 0:V.the_page_body)===null||Q===void 0?void 0:Q.id,n,e,s):n.innerHTML="<h4>Invalid or Page doesn't exist</h4> "+P})}function Qr(P,n,e,s){return yt(this,void 0,void 0,function*(){try{let I=yield(0,Wt.qj)(P),T=I.mainId,D=I.data;const E=yield co(D,T),S=yield cn(T,[],E);return dt.cache.set(`wdgt_${T}`,S),S}catch{}})}function Yr(P,n,e,s){return yt(this,void 0,void 0,function*(){try{let I=yield(0,Wt.ml)(P),T=I.mainId,D=I.data;const E=yield co(D,T);return yield cn(T,[],E)}catch{}})}function Xr(P,n,e,s){return yt(this,void 0,void 0,function*(){let I=(yield(0,Wt.qj)(P)).mainId;const T=dt.cache.get(`wdgt_${I}`);if(!T.name)return void(n.innerHTML="<h4>Invalid or Widget doesn't exist</h4>"+P);const D=n;yield so(T);const E=yield En(T,D,void 0,e),S=Array.from({length:32},()=>"abcdef"[Math.floor(6*Math.random())]).join("");n.classList.add(`${S}`),n.style.position="relative";const m=document.createElement("style");m.id="mystyleid",m.classList.add("mftsccs-css");const l=`
        .${S} {
          ${T.css+E.css+jr} 
        }
      `,U=(yield qr(l))||"";if(m.innerHTML=U,document.head.appendChild(m),T.children.length&&T?.children.forEach(V=>{var Q;const q=V?.library;(!((Q=q?.css)===null||Q===void 0)&&Q.length||q?.js.length)&&so(V)}),s){const V=document.createElement("div");V.id="widget-details",V.innerHTML="",V.innerHTML=`
        <button class="widget-documentation-btn" widget-id="${T?.origin||T?.widgetId}" class="d-flex align-items-center gap-1" title="Documentation">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
        </button>
      `,D.appendChild(V);const Q=document.createElement("dialog");Q.id="widget-documentation-preview-modal",Q.className="col-md-8",Q.innerHTML="",Q.innerHTML=`
        <div class="widget-documentation-heading">
          <h4>Documentation</h4>
          <button class="close-documentation-button document-preview-close-button" title="Close">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
        </div>

        <div id="documentation-view" class="ck-content"></div>

        <div class="widget-documentation-footer">
          <button class="document-preview-close-button">Close</button>
        </div>
      `,D.appendChild(Q);const q=D.querySelectorAll(".widget-documentation-btn");q?.forEach(se=>{se.addEventListener("click",de=>{const pe=de?.target;is(pe?.getAttribute("widget-id"))})});const X=D.querySelectorAll(".document-preview-close-button");X?.forEach(se=>{se.addEventListener("click",()=>{rs("widget-documentation-preview-modal")})})}return D.querySelectorAll(".wb-initial-empty").forEach(V=>{V.classList.remove("wb-initial-empty")}),document.querySelectorAll('[onclick="widgetSelected(event)"]').forEach(V=>{V.removeAttribute("onclick")}),E})}function ao(P,n,e,s){return yt(this,void 0,void 0,function*(){try{let I=yield(0,Wt.qj)(P),T=I.mainId,D=I.data;const E=yield co(D,T);return yield Zr(T,E,n,e,s)}catch(I){n.textContent=`Error: ${I.message}`}})}function Kr(P,n,e,s){return yt(this,void 0,void 0,function*(){try{const I=yield(0,Wt.Cp)(P);return yield Zr(P,I,n,e,s)}catch{}})}function Zr(P,n,e,s){return yt(this,arguments,void 0,function*(I,T,D,E,S=!0){const m=yield cn(I,[],T);if(!m.name)return void(D.innerHTML="<h4>Invalid or Widget doesn't exist</h4>"+I);const l=D;yield so(m);const U=yield En(m,l,void 0,E),V=Array.from({length:32},()=>"abcdef"[Math.floor(6*Math.random())]).join("");D.classList.add(`${V}`),D.style.position="relative";const Q=document.createElement("style");Q.id="mystyleid",Q.classList.add("mftsccs-css");const q=`
        .${V} {
          ${m.css+U.css+jr} 
        }
      `,X=(yield qr(q))||"";Q.innerHTML=X,m.children.length&&m?.children.forEach(de=>{var pe;const ue=de?.library;(!((pe=ue?.css)===null||pe===void 0)&&pe.length||ue?.js.length)&&so(de)}),document.head.appendChild(Q);const se=document.createElement("script");if(se.innerHTML=m.js,l.appendChild(se),S){const de=document.createElement("div");de.id="widget-details",de.innerHTML="",de.innerHTML=`
        <button class="widget-documentation-btn" widget-id="${m?.origin||m?.widgetId}" class="d-flex align-items-center gap-1" title="Documentation">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
        </button>
      `,l.appendChild(de);const pe=document.createElement("dialog");pe.id="widget-documentation-preview-modal",pe.className="col-md-8",pe.innerHTML="",pe.innerHTML=`
        <div class="widget-documentation-heading">
          <h4>Documentation</h4>
          <button class="close-documentation-button document-preview-close-button" title="Close">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
        </div>

        <!-- <div id="documentation-preview" class="ck-content"></div> -->
        <div id="documentation-view" class="ck-content"></div>

        <div class="widget-documentation-footer">
          <button class="document-preview-close-button">Close</button>
        </div>
      `,l.appendChild(pe);const ue=l.querySelectorAll(".widget-documentation-btn");ue?.forEach(Fe=>{Fe.addEventListener("click",Ue=>{const Se=Ue?.target;is(Se?.getAttribute("widget-id"))})});const Ie=l.querySelectorAll(".document-preview-close-button");Ie?.forEach(Fe=>{Fe.addEventListener("click",()=>{rs("widget-documentation-preview-modal")})})}return l.querySelectorAll(".wb-initial-empty").forEach(de=>{de.classList.remove("wb-initial-empty")}),document.querySelectorAll('[onclick="widgetSelected(event)"]').forEach(de=>{de.removeAttribute("onclick")}),U})}function es(P,n){return yt(this,void 0,void 0,function*(){var e,s,I,T,D,E,S,m,l,U,V;const Q=(s=(e=P?.data)===null||e===void 0?void 0:e.the_widget)===null||s===void 0?void 0:s.the_widget_s_child;if(n.push(P),Q&&Q.length)for(let q=0;q<Q.length;q++){const X=Q[q];let se=(S=(E=(D=(T=(I=X?.data.the_child_widget)===null||I===void 0?void 0:I.the_child_widget_info)===null||T===void 0?void 0:T.data)===null||D===void 0?void 0:D.the_widget)===null||E===void 0?void 0:E.the_widget_root)===null||S===void 0?void 0:S.id;const de=!!(!((U=(l=(m=X?.data)===null||m===void 0?void 0:m.the_child_widget)===null||l===void 0?void 0:l.the_child_widget_use_latest)===null||U===void 0)&&U.data);se=Number(se)||!1;let pe=null;if(de&&se){const ue=yield(0,Wt.qj)(se);pe=((V=ue?.data)===null||V===void 0?void 0:V[0])||[],pe.useLatest=!0,X.data.the_child_widget.the_child_widget_info=pe}X.data.the_child_widget.the_child_widget_info.sChildId=X.id,yield es(X.data.the_child_widget.the_child_widget_info,n)}})}function co(P,n){return yt(this,void 0,void 0,function*(){const e=[],s=[...P];try{const I=s.find(T=>T.id===n);yield es(I,e)}catch{}return e})}function ts(P){return yt(this,arguments,void 0,function*(n,e=[],s=""){let I=yield(0,Wt.Cp)(n);const T=yield co(I,n);return yield cn(n,[],T)})}function cn(P){return yt(this,arguments,void 0,function*(n,e=[],s,I=""){var T,D,E,S,m,l,U,V,Q,q,X,se,de,pe,ue,Ie,Fe,Ue,Se,ke,Pe,Oe,Ge,Xe,Ze,nt,st,$e,kt,xt,gt,At,Ht,$t,zt,vt,Et,Nt,_t,Ot,hn,pn,fn,mn,yn,gn,vn,Cn,He,en,Fn,Un,Gn,Mn,Wn,jn,Vn;try{const ot=new jo,Ut=(0,Wt.ix)(s,n);e.push(n);const qe=(T=Ut?.data)===null||T===void 0?void 0:T.the_widget;ot.name=(E=(D=qe?.the_widget_name)===null||D===void 0?void 0:D.data)===null||E===void 0?void 0:E.the_name,ot.html=(m=(S=qe?.the_widget_html)===null||S===void 0?void 0:S.data)===null||m===void 0?void 0:m.the_html,ot.css=(U=(l=qe?.the_widget_css)===null||l===void 0?void 0:l.data)===null||U===void 0?void 0:U.the_css,ot.js=(Q=(V=qe?.the_widget_js)===null||V===void 0?void 0:V.data)===null||Q===void 0?void 0:Q.the_js,ot.root=Number((X=(q=qe?.the_widget_root)===null||q===void 0?void 0:q.id)!==null&&X!==void 0?X:0),ot.origin=ot.root,ot.version=(de=(se=qe?.the_widget_version)===null||se===void 0?void 0:se.data)===null||de===void 0?void 0:de.the_version,ot.clean=(ue=(pe=qe?.the_widget_clean)===null||pe===void 0?void 0:pe.data)===null||ue===void 0?void 0:ue.the_clean,ot.timestamp=(Fe=(Ie=qe?.the_widget_timestamp)===null||Ie===void 0?void 0:Ie.data)===null||Fe===void 0?void 0:Fe.the_timestamp,ot.id=Ut?.id;const qn=(Se=(Ue=qe?.the_widget_type)===null||Ue===void 0?void 0:Ue.data)===null||Se===void 0?void 0:Se.the_type;ot.type=qn=="null"||qn==null?"the_element_name":qn,ot.after_render=(Pe=(ke=qe?.the_widget_after_render)===null||ke===void 0?void 0:ke.data)===null||Pe===void 0?void 0:Pe.the_after_render,ot.before_render=(Ge=(Oe=qe?.the_widget_before_render)===null||Oe===void 0?void 0:Oe.data)===null||Ge===void 0?void 0:Ge.the_before_render,ot.dependency=(Ze=(Xe=qe?.the_widget_dependency)===null||Xe===void 0?void 0:Xe.data)===null||Ze===void 0?void 0:Ze.the_dependency,ot.update=(st=(nt=qe?.the_widget_update)===null||nt===void 0?void 0:nt.data)===null||st===void 0?void 0:st.the_update,ot.widgetId=n,ot.mount_child=(kt=($e=qe?.the_widget_mount_child)===null||$e===void 0?void 0:$e.data)===null||kt===void 0?void 0:kt.the_mount_child;const Jt=qe?.the_widget_s_child;Ut?.useLatest&&(ot.useLatest=!0),Ut?.sChildId&&(ot.sChildId=Ut.sChildId);const Zo=(xt=qe?.the_widget_s_css_library)===null||xt===void 0?void 0:xt.map(at=>{var Ct,lt,bt,Tt,Lt,pt,it,It;return{order:(Tt=(bt=(lt=(Ct=at?.data)===null||Ct===void 0?void 0:Ct.the_css_library)===null||lt===void 0?void 0:lt.the_css_library_order)===null||bt===void 0?void 0:bt.data)===null||Tt===void 0?void 0:Tt.the_order,url:(It=(it=(pt=(Lt=at?.data)===null||Lt===void 0?void 0:Lt.the_css_library)===null||pt===void 0?void 0:pt.the_css_library_url)===null||it===void 0?void 0:it.data)===null||It===void 0?void 0:It.the_url}}),ei=(gt=qe?.the_widget_s_js_library)===null||gt===void 0?void 0:gt.map(at=>{var Ct,lt,bt,Tt,Lt,pt,it,It;return{order:(Tt=(bt=(lt=(Ct=at?.data)===null||Ct===void 0?void 0:Ct.the_js_library)===null||lt===void 0?void 0:lt.the_js_library_order)===null||bt===void 0?void 0:bt.data)===null||Tt===void 0?void 0:Tt.the_order,url:(It=(it=(pt=(Lt=at?.data)===null||Lt===void 0?void 0:Lt.the_js_library)===null||pt===void 0?void 0:pt.the_js_library_url)===null||it===void 0?void 0:it.data)===null||It===void 0?void 0:It.the_url}});ot.library={css:Zo||[],js:ei||[]};const tn=(Ht=(At=qe?.the_widget_assistant)===null||At===void 0?void 0:At.data)===null||Ht===void 0?void 0:Ht.the_assistant;ot.assistant={id:(zt=($t=tn?.the_assistant_id)===null||$t===void 0?void 0:$t.data)===null||zt===void 0?void 0:zt.the_id,input:(Et=(vt=tn?.the_assistant_input)===null||vt===void 0?void 0:vt.data)===null||Et===void 0?void 0:Et.the_input,type:(_t=(Nt=tn?.the_assistant_type)===null||Nt===void 0?void 0:Nt.data)===null||_t===void 0?void 0:_t.the_type};const _n=(Ot=qe?.the_widget_s_custom_function)===null||Ot===void 0?void 0:Ot.map(at=>{var Ct,lt,bt,Tt,Lt,pt,it;const It=(Ct=at?.data)===null||Ct===void 0?void 0:Ct.the_custom_function;return{id:at?.id,name:(bt=(lt=It?.the_custom_function_name)===null||lt===void 0?void 0:lt.data)===null||bt===void 0?void 0:bt.the_name,slug:(Lt=(Tt=It?.the_custom_function_slug)===null||Tt===void 0?void 0:Tt.data)===null||Lt===void 0?void 0:Lt.the_slug,code:(it=(pt=It?.the_custom_function_code)===null||pt===void 0?void 0:pt.data)===null||it===void 0?void 0:it.the_code}});if(ot.custom_functions=_n,Jt?.length)for(let at=0;at<Jt.length;at++){const Ct=((fn=(pn=(hn=Jt[at])===null||hn===void 0?void 0:hn.data.the_child_widget)===null||pn===void 0?void 0:pn.the_child_widget_info)===null||fn===void 0?void 0:fn.id)||((vn=(gn=(yn=(mn=Jt[at])===null||mn===void 0?void 0:mn.data.the_child_widget)===null||yn===void 0?void 0:yn.the_child_widget_parent)===null||gn===void 0?void 0:gn.data)===null||vn===void 0?void 0:vn.the_parent),lt=yield cn(Ct,e,s,I),bt=(Un=(Fn=(en=(He=(Cn=Jt[at])===null||Cn===void 0?void 0:Cn.data)===null||He===void 0?void 0:He.the_child_widget)===null||en===void 0?void 0:en.the_child_widget_type)===null||Fn===void 0?void 0:Fn.data)===null||Un===void 0?void 0:Un.the_type,Tt=(Vn=(jn=(Wn=(Mn=(Gn=Jt[at])===null||Gn===void 0?void 0:Gn.data)===null||Mn===void 0?void 0:Mn.the_child_widget)===null||Wn===void 0?void 0:Wn.the_child_widget_wrapper)===null||jn===void 0?void 0:jn.data)===null||Vn===void 0?void 0:Vn.the_wrapper;lt.type=bt=="null"||bt==null?"the_element_name":bt,lt.wrapper=Tt,ot.children.push(lt)}return ot}catch(ot){throw ot}})}function En(P,n){return yt(this,arguments,void 0,function*(e,s,I=!0,T,D,E=null){var S,m;const l=new Dn;l.html=e.html,E&&(l.parentWidget=ns(E)),l.widgetType=e.type,l.componentDidMountFunction=e.before_render,l.addEventFunction=e.after_render,l.mountChildWidgetsFunction=e.mount_child,l.widgetState=Object.assign({},D),l.customFunctions=e.custom_functions,l.widgetDependenciesData=e.dependency,T&&(l.data=T),s.innerHTML="";const U=s;if(U&&(yield l.mount(U),e.widget=l,e.children.length>0&&((S=l.childWidgetElement)===null||S===void 0?void 0:S.length)>0))for(let V=0;V<((m=e.children)===null||m===void 0?void 0:m.length);V++){const Q=e.children[V];for(let q=0;q<l.childWidgetElement.length;q++){const X=l.childWidgetElement[q];if(Q.wrapper===X.id){const se=os(Q);Q.html=`<div id="${Q.wrapper}">${Q.html}</div>`;const de=yield En(se,X,!1,l.data,l.widgetState,l);l.childWidgets.push(de),l.css=l.css+de.css+`#${X.id} { ${Q.css} }`,de.dataChange(pe=>{var ue;const Ie=(ue=pe?.type)===null||ue===void 0?void 0:ue.characterValue;Ie&&(l.childrenData[Ie]=pe)})}}}return yield zo(s,".widget_container"),l})}function ns(P){const n={};for(const[e,s]of Object.entries(P))typeof s=="object"&&s!==null&&Array.isArray(s)||(n[e]=s);return n}function $o(P,n){return yt(this,arguments,void 0,function*(e,s,I=!0,T,D,E=null){var S,m;let l=new Dn;l.html=e.html,E&&(l.parentWidget=ns(E)),l.widgetState=Object.assign({},T),l.widgetType=e.type,l.componentDidMountFunction=e.before_render,l.addEventFunction=e.after_render,l.mountChildWidgetsFunction=e.mount_child,l.customFunctions=e.custom_functions,l.widgetDependenciesData=e.dependency,l.inDevelopment=D!==!1,s.innerHTML="";let U=s;if(U&&(yield l.mount(U),e.widget=l,e.children.length>0&&((S=l.childWidgetElement)===null||S===void 0?void 0:S.length)>0))for(let V=0;V<((m=e.children)===null||m===void 0?void 0:m.length);V++){let Q=e.children[V];for(let q=0;q<l.childWidgetElement.length;q++){let X=l.childWidgetElement[q];if(Q.wrapper===X.id){const se=os(Q),de=yield $o(se,X,!1,l.widgetState,D,l);l.childWidgets.push(de),l.css=l.css+de.css+`#${X.id} { ${Q.css} }`,de.dataChange(pe=>{var ue;let Ie=(ue=pe?.type)===null||ue===void 0?void 0:ue.characterValue;Ie&&(l.childrenData[Ie]=pe)})}}}return l})}function os(P){return P.html=P.html.replace(/<[^>]*\bclass=["'][^"']*\bwidget_container\b[^"']*["'][^>]*>/g,n=>n.replace(/\bwidget_container\b/g,"").trim()),P.html=P.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,n=>n.replace(/\btrue\b/g,"false").trim()),P.html=P.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,n=>n.replace(/\bhover-element\b/g,"").trim()),P.html=P.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,n=>n.replace(/\bwb-block\b/g,"").trim()),P.html=P.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,n=>n.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),P.html=P.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,n=>n.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),P}function La(P,n){return yt(this,void 0,void 0,function*(){return P&&P.nodeType===1&&P.querySelectorAll(n).forEach(e=>{for(;e.firstChild;)e.parentNode.insertBefore(e.firstChild,e);e.remove()}),P})}function zo(P,n){return yt(this,void 0,void 0,function*(){const e=P.querySelectorAll(n);for(const s of e){const I=s.parentElement;if(I){for(;s.firstChild;){const T=yield La(s.firstChild,n);I.insertBefore(T,s)}I.removeChild(s)}}})}function is(P){return yt(this,void 0,void 0,function*(){const n=new Pt;n.typeConnection="the_widget_documentation",n.name="documentationText",n.selectors=["the_documentation_text"];const e=new Pt;e.typeConnection="the_widget_s_documentation",e.name="documentationBlank",e.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const s=new Pt;s.typeConnection="the_documentation_s_json_list",s.name="documentationJSON",s.selectors=["the_json_list_key","the_json_list_value"],e.freeschemaQueries=[s];const I=new Pt;I.conceptIds=[P],I.freeschemaQueries=[n,e],I.inpage=100,I.outputFormat=je.y0,yield Rn(I,"").subscribe(T=>yt(this,void 0,void 0,function*(){var D,E,S,m,l,U,V,Q,q,X,se;let de;const pe=((Q=(V=(U=(l=(m=(S=(E=(D=T?.[0])===null||D===void 0?void 0:D.data)===null||E===void 0?void 0:E.the_widget)===null||S===void 0?void 0:S.the_widget_documentation)===null||m===void 0?void 0:m.data)===null||l===void 0?void 0:l.the_documentation)===null||U===void 0?void 0:U.the_documentation_text)===null||V===void 0?void 0:V.data)===null||Q===void 0?void 0:Q.the_text)||"";pe&&(de=pe);const ue=(se=(X=(q=T?.[0])===null||q===void 0?void 0:q.data)===null||X===void 0?void 0:X.the_widget)===null||se===void 0?void 0:se.the_widget_s_documentation;ue?.length&&(de=ue?.map(Fe=>{var Ue,Se,ke,Pe,Oe,Ge,Xe,Ze,nt,st,$e,kt,xt,gt,At,Ht,$t,zt,vt,Et,Nt,_t,Ot,hn,pn,fn,mn,yn,gn,vn,Cn;const He=(Ue=Fe?.data)===null||Ue===void 0?void 0:Ue.the_documentation,en=(ke=(Se=He?.the_documentation_type)===null||Se===void 0?void 0:Se.data)===null||ke===void 0?void 0:ke.the_type,Fn=(Oe=(Pe=He?.the_documentation_content)===null||Pe===void 0?void 0:Pe.data)===null||Oe===void 0?void 0:Oe.the_content,Un=(Xe=(Ge=He?.the_documentation_creator_email)===null||Ge===void 0?void 0:Ge.data)===null||Xe===void 0?void 0:Xe.the_creator_email,Gn=(nt=(Ze=He?.the_documentation_doc_title)===null||Ze===void 0?void 0:Ze.data)===null||nt===void 0?void 0:nt.the_doc_title,Mn=($e=(st=He?.the_documentation_method)===null||st===void 0?void 0:st.data)===null||$e===void 0?void 0:$e.the_method,Wn=(xt=(kt=He?.the_documentation_method_url)===null||kt===void 0?void 0:kt.data)===null||xt===void 0?void 0:xt.the_method_url,jn=(At=(gt=He?.the_documentation_bearer_token)===null||gt===void 0?void 0:gt.data)===null||At===void 0?void 0:At.the_bearer_token,Vn=($t=(Ht=He?.the_documentation_username)===null||Ht===void 0?void 0:Ht.data)===null||$t===void 0?void 0:$t.the_username,ot=(vt=(zt=He?.the_documentation_password)===null||zt===void 0?void 0:zt.data)===null||vt===void 0?void 0:vt.the_password,Ut=(Nt=(Et=He?.the_documentation_auth_type)===null||Et===void 0?void 0:Et.data)===null||Nt===void 0?void 0:Nt.the_auth_type,qe=He?.the_documentation_s_json_list,qn=(Ot=(_t=He?.the_documentation_api_script)===null||_t===void 0?void 0:_t.data)===null||Ot===void 0?void 0:Ot.the_api_script,Jt=(pn=(hn=He?.the_documentation_api_body)===null||hn===void 0?void 0:hn.data)===null||pn===void 0?void 0:pn.the_api_body,Zo=(mn=(fn=He?.the_documentation_language)===null||fn===void 0?void 0:fn.data)===null||mn===void 0?void 0:mn.the_language,ei=(gn=(yn=He?.the_documentation_return)===null||yn===void 0?void 0:yn.data)===null||gn===void 0?void 0:gn.the_return,tn=(Cn=(vn=He?.the_documentation_code_editor)===null||vn===void 0?void 0:vn.data)===null||Cn===void 0?void 0:Cn.the_code_editor,_n=He?.the_documentation_s_doc_url,at=He?.the_documentation_s_image_url,Ct=He?.the_documentation_s_video_link;let lt={type:en,content:Fn,creatorEmail:Un,title:Gn};if(en==="blank")lt=Object.assign({},lt);else if(en==="api"){const pt=[];qe?.length&&qe?.forEach(it=>{var It,ti,ni,oi,ii,ri,si,ai;pt.push({key:(oi=(ni=(ti=(It=it?.data)===null||It===void 0?void 0:It.the_json_list)===null||ti===void 0?void 0:ti.the_json_list_key)===null||ni===void 0?void 0:ni.data)===null||oi===void 0?void 0:oi.the_key,value:(ai=(si=(ri=(ii=it?.data)===null||ii===void 0?void 0:ii.the_json_list)===null||ri===void 0?void 0:ri.the_json_list_value)===null||si===void 0?void 0:si.data)===null||ai===void 0?void 0:ai.the_value})}),lt=Object.assign(Object.assign({},lt),{method:Mn,methodURL:Wn,authType:Ut,username:Vn,password:ot,bearerToken:jn,json:pt,script:qn,body:Jt})}else en==="function"&&(lt=Object.assign(Object.assign({},lt),{language:Zo,return:ei,codeEditor:tn}));const bt=[],Tt=[],Lt=[];return at?.length&&at?.forEach(pt=>{var it;bt.push((it=pt?.data)===null||it===void 0?void 0:it.the_image_url)}),Ct?.length&&Ct?.forEach(pt=>{var it;Tt.push((it=pt?.data)===null||it===void 0?void 0:it.the_video_link)}),_n?.length&&_n?.forEach(pt=>{var it;Lt.push((it=pt.data)===null||it===void 0?void 0:it.the_doc_url)}),lt=Object.assign(Object.assign({},lt),{imageList:bt,linkList:Lt,videoList:Tt}),lt})),yield function(Ie){return yt(this,void 0,void 0,function*(){document.getElementById(Ie).showModal()})}("widget-documentation-preview-modal"),function(Ie,Fe){yt(this,void 0,void 0,function*(){const Ue=document.getElementById("documentation-view");if(o.B.DOCUMENTATION_WIDGET!=0)return void(yield ao(o.B.DOCUMENTATION_WIDGET,Ue,{currentWidgetId:Fe}));const Se=document.getElementById("documentation-preview");Se.innerHTML="",Ie&&Ie?.length&&typeof Ie!="string"?Ie?.forEach(ke=>{var Pe,Oe,Ge,Xe;const Ze=document.createElement("h3");let nt="";switch(ke?.type){case"api":nt="API";break;case"function":nt="Functions and Classes";break;case"imgAndLink":nt="Images and Links";break;default:nt=""}Ze.innerHTML=`
        ${ke?.title} ${nt?"("+nt+")":""}
      `,Se?.appendChild(Ze);const st=document.createElement("div");st.classList.add("widget-doc-content"),ke?.content&&(st.innerHTML=ke.content,Se?.appendChild(st));const $e=document.createElement("div");if($e.classList.add("widget-doc-section"),ke.type==="api"){let vt="";vt=ke.authType==="basicAuth"?`
            <p>username: <code>${ke?.username}</code></p>
            <p>password: <code>${ke?.password}</code></p>
          `:ke.authType==="bearerToken"?`
          <h6>Token: <code>${ke?.bearerToken}</code></h6>
          `:"None";const Et=ke.json.map(Ot=>`${Ot?.key}: ${Ot?.value}`).join(", "),Nt=document.createElement("pre");Nt.textContent=Et,$e.innerHTML=`
          <div class="pv-3">
            <h6>Method Type: <code>${ke?.method.toUpperCase()}</code></h6>
            <h6>Endpoint: <code>${ke?.methodURL}</code></h6>
          </div>
          <div class="pv-3">
            <h6>Auth Type: <code>${((Pe=ke?.authType)===null||Pe===void 0?void 0:Pe.toUpperCase())||""}</code></h6>
            ${vt}
          </div>
          <div class="pv-3">
            <h6>JSON</h6>
            <code class="pre-wrapper" id="json-list-pre"></code>
          </div>
          <div class="pv-3">
            <h6>Body</h6>
            ${ke.body}
          </div>
          <div class="pv-3">
            <h6>Scripts</h6>
            ${ke.script}
          </div>
        `;const _t=$e.querySelector("#json-list-pre");_t&&(_t.appendChild(Nt),_t.removeAttribute("id"))}else if(ke.type==="function"){const vt=document.createElement("pre");vt.textContent=ke?.codeEditor;const Et=document.createElement("pre");Et.textContent=ke?.return,$e.innerHTML=`
          <div class="mv-3">
            <h6>Parameter</h6>
            <p>Language: ${ke?.language}</p>
            <code class="pre-wrapper" id="editor-pre"></pre></code>
            <h6>Returns</h6>
            <code class="pre-wrapper" id="return-pre"></code>
          </div>
        `;const Nt=$e.querySelector("#editor-pre");Nt&&(Nt.appendChild(vt),Nt.removeAttribute("id"));const _t=$e.querySelector("#return-pre");_t&&(_t.appendChild(Et),_t.removeAttribute("id"))}const kt=document.createElement("div");kt.classList.add("mv-3");const xt=(Oe=ke?.linkList)===null||Oe===void 0?void 0:Oe.map(vt=>`
            <p>${vt}</p>
          `).join(""),gt=(Ge=ke?.imageList)===null||Ge===void 0?void 0:Ge.map(vt=>`
          <img src="${vt}">
        `).join(""),At=(Xe=ke?.videoList)===null||Xe===void 0?void 0:Xe.map(vt=>`
            <iframe width="560" height="315" src="${vt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `).join(""),Ht=xt?.length?`
          <div class="mv-3">
          <h6>Web links</h6>
          ${xt}
          </div>
        `:"",$t=gt?.length?`
          <h6>Attachments</h6>
          <div class="documentation-attachments">
            ${gt}
          </div>
        `:"",zt=At?.length?`
            <h6>Videos</h6>
            <div class="documentation-attachments">
              ${At}
            </div>
            `:"";kt.innerHTML=`
        <div class="mv-3">
          ${Ht}
          ${$t}
          ${zt}
        </div>
        <p class="documentation-creator">- added by: <span>${ke?.creatorEmail}</span></p>
      `,$e?.appendChild(kt),Se?.appendChild($e)}):Ie!==void 0&&(Se.innerHTML=Ie)})}(de,P)}))})}function rs(P){return yt(this,void 0,void 0,function*(){const n=document.getElementById(P),e=n?.querySelector("form");e?.reset(),n?.close()})}var Da=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function lo(P){return Da(this,arguments,void 0,function*(n,e=null,s="",I={concepts:[],connections:[]}){var T,D,E,S;if(We)try{const V=yield Ye("CreateData",{json:n,ofConcept:e,typeConcept:s,actions:I});return!((D=(T=V?.actions)===null||T===void 0?void 0:T.concepts)===null||D===void 0)&&D.length&&(I.concepts=JSON.parse(JSON.stringify(V.actions.concepts))),!((S=(E=V?.actions)===null||E===void 0?void 0:E.connections)===null||S===void 0)&&S.length&&(I.connections=JSON.parse(JSON.stringify(V.actions.connections))),V.data}catch(V){tt(V)}let m=999,l=999,U=(0,H.o)();for(const V in n){let Q=Pa(V);if(typeof n[V]!="string"&&typeof n[V]!="number")if(e==null||e.id==0)U=yield(0,we.k)(Q,"",!0,m,4,l,void 0,I),Array.isArray(n[V])&&(Q=ss(Q)),yield lo(n[V],U,Q,I);else{Array.isArray(n[V])&&(Q=as(Q));let q=as(V),X=yield(0,we.k)(Q,"",!0,m,4,l,void 0,I);U=X;let se=cs(s,q),de=yield(0,Je.$)(se,l,m,m,I);yield(0,Mt.F)(e.id,X.id,de.id,1e3,de.characterValue,m,I),Array.isArray(n[V])&&(Q=ss(Q)),yield lo(n[V],X,Q,I)}else{let q=cs(s,V),X=yield(0,Je.$)(q,l,m,m,I),se=yield(0,we.k)(V,n[V].toString(),!1,m,4,l,void 0,I);e!=null&&(yield(0,Mt.F)(e.id,se.id,X.id,1e3,q,m,I))}}return U})}function Pa(P){return P.startsWith("the_")?P:"the_"+P}function ss(P){return P.endsWith("_s")?P:P+"_s"}function as(P){return P.replace(/_s$/,"")}const Ra=P=>/^[+-]?\d+(\.\d+)?$/.test(P);function cs(P,n){return Ra(n)?P+"_":P+"_"+function(e){return e.startsWith("the_")?e.slice(4):e}(n)}class ls{constructor(){this.prototype="",this.required=[],this.optional=[],this.field="string",this.childPrototypes=[],this.isCompositional=!1,this.options=[],this.isQueryType=!1,this.querySelector=null,this.concepts=[],this.connections=[],this.addedConcepts=[],this.addedConnections=[]}}function jt(P,n){if(Array.isArray(P)&&Array.isArray(n))for(let e=0;e<n.length;e++)P.push(n[e]);return P}var ln=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function Jo(P){return ln(this,arguments,void 0,function*(n,e=null){let s=[],I=[],T=[],D=(0,H.o)();try{e==null&&(e=new Mo,yield e.initialize());let E=[];if(n.isCompositional){if(D=yield function(l,U,V,Q){return ln(this,void 0,void 0,function*(){let q=(0,H.o)(),X=yield Q.MakeTheInstanceConceptLocal("the_composition","",!0,999,999,999),se=yield Q.MakeTheTypeConceptLocal("the_composition_type",999,999,999),de=yield Q.MakeTheTypeConceptLocal(l,999,999,999),pe=yield Q.CreateTheConnectionLocal(X.id,de.id,se.id,1e3,"the_composition_type");return q=X,U.push(se),U.push(de),V.push(pe),q})}(n.prototype,s,I,e),n.isQueryType){let l=yield function(V,Q,q){return ln(this,void 0,void 0,function*(){let X=[],se=[],de=function(){return"the_composition_filter_type"}(0,!0),pe=function(){return"the_composition_selector"}(0,!0),ue=yield q.MakeTheTypeConceptLocal(de,999,999,999),Ie=yield q.MakeTheTypeConceptLocal(pe,999,999,999);if(V!=null){let Fe=yield q.MakeTheTypeConceptLocal(V.selector,999,999,999);X.push(Fe);let Ue=yield q.MakeTheTypeConceptLocal(V.filterType,999,999,999);X.push(Fe),X.push(Ue);let Se=yield q.CreateTheConnectionLocal(Q.id,Fe.id,Ie.id,1e3,pe,999);se.push(Se);let ke=yield q.CreateTheConnectionLocal(Q.id,Ue.id,ue.id,1e3,de,999);se.push(ke)}return{concepts:X,connections:se}})}(n.querySelector,D,e),U=l.concepts;jt(T,l.connections),jt(s,U)}if(n.options.length>0){let l=yield function(V,Q,q){return ln(this,void 0,void 0,function*(){let X=[],se=[],de=function(){return"the_composition_s_option"}(0,!0),pe=yield q.MakeTheTypeConceptLocal(de,999,999,999);for(let ue=0;ue<V.length;ue++){let Ie=V[ue].type,Fe=V[ue].value,Ue=yield q.MakeTheInstanceConceptLocal(Ie,Fe,!1,999,999,999);X.push(Ue);let Se=yield q.CreateTheConnectionLocal(Q.id,Ue.id,pe.id,1e3,de,999);se.push(Se)}return{concepts:X,connections:se}})}(n.options,D,e),U=l.concepts;jt(T,l.connections),jt(s,U)}}else D=yield function(l,U){return ln(this,void 0,void 0,function*(){let V=yield(0,ye.A)(5124),Q=yield U.MakeTheTypeConceptLocal(l,999,999,999);return yield function(X,se,de,pe){return ln(this,void 0,void 0,function*(){let ue=yield pe.CreateTheConceptLocal("",se.characterValue,999,X.id,se.id,4,!1);return ue.characterValue=se.characterValue,ue.typeCharacter=se.characterValue,ue.isComposition=!0,ue.type=se,ue})}(V,Q,0,U)})}(n.prototype,e),T=yield us(n.required,D,s,e,!0),E=yield us(n.optional,D,s,e),s.push(D);let S=ds(D,!0,!0),m=yield e.MakeTheTypeConceptLocal(S,999,999,999);if(s.push(m),n.childPrototypes.length>0)for(let l=0;l<n.childPrototypes.length;l++){let U=yield Jo(n.childPrototypes[l]),V=U.mainConcept,Q=U.connections,q=U.concepts,X=yield e.CreateTheConnectionLocal(D.id,V.id,m.id,1e3,S,999);T.push(X),jt(T,Q),jt(s,q),s.push(V)}jt(T,E),jt(T,I),jt(s,n.addedConcepts),jt(T,n.addedConnections),n.concepts=s,n.connections=T}catch{e?.rollbackTransaction()}return{concepts:s,connections:T,mainConcept:D}})}function ds(P,n=!0,e=!1){var s;let I="the_prototype_of_"+((s=P.type)===null||s===void 0?void 0:s.characterValue);return I+=n?"_requires":"_optional",e&&(I+="_the_composition"),I}function us(P,n,e,s){return ln(this,arguments,void 0,function*(I,T,D,E,S=!1,m=!1){let l=[],U=[],V=ds(T,S,m),Q=yield E.MakeTheTypeConceptLocal(V,999,999,999);D.push(Q);for(let q=0;q<I.length;q++){let X=yield E.MakeTheTypeConceptLocal(I[q],999,999,999);l.push(X)}for(let q=0;q<l.length;q++){let X=yield E.CreateTheConnectionLocal(T.id,l[q].id,Q.id,1e3,V,999);U.push(X)}for(let q=0;q<l.length;q++)D.push(l[q]);return U})}var Ba=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,[])).next())})};function Qo(P){return Ba(this,void 0,void 0,function*(){let n;try{const e=yield fetch(o.B.GetCachedImage(P),{method:"GET"});return e.ok?n=e.body:(0,f.ry)(e),n}catch{throw n}})}var Ea=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};function hs(P){return Ea(this,arguments,void 0,function*(n,e="normal"){let s,I=n.split("/").pop();if(e=="small"){let T=I?.split(".");T&&(I=T[0]+"_small."+T[1])}return I&&(s=yield Qo(I)),s})}function ps(P,n="normal"){let e=P;try{if(P){let s=P.split("/").pop();if(n=="small"){let I=s?.split(".");I&&(s=I[0]+"_small."+I[1])}s&&(e=o.B.GetCachedImage(s))}}catch{}return e}var We,ht=function(P,n,e,s){return new(e||(e=Promise))(function(I,T){function D(m){try{S(s.next(m))}catch(l){T(l)}}function E(m){try{S(s.throw(m))}catch(l){T(l)}}function S(m){var l;m.done?I(m.value):(l=m.value,l instanceof e?l:new e(function(U){U(l)})).then(D,E)}S((s=s.apply(P,n||[])).next())})};const fs=Date.now().toString(36)+Math.random().toString(36).substring(2);let Yo=[],dn=[],ms=!1,ys=!1,gs=null,Xo=!1,vs=!1;const Cs=new WeakSet;let Ko=!1;function bs(P){Ko=P}function un(P="",n,e=""){Ve.b.BearerAccessToken=P,arguments.length>=3&&(Ve.b.refreshToken=e),We&&Ye("updateAccessToken",{accessToken:P,refreshToken:Ve.b.refreshToken,session:Ve.b.sessionId})}function Is(){return ht(this,arguments,void 0,function*(P="",n="",e="",s="",I=!0,T="",D=void 0,E={},S={},m=""){var l,U,V,Q,q;try{o.B.BASE_URL=P,o.B.AI_URL=n,o.B.NODE_URL=s,o.B.BASE_APPLICATION=T,o.B.LOG_SERVER=(l=S.logserver)!==null&&l!==void 0?l:"https://logdev.freeschema.com",o.B.RECAPTCHA_SITE_KEY=(U=S.recaptchaSiteKey)!==null&&U!==void 0?U:"",o.B.RECAPTCHA_ACTION=(V=S.recaptchaAction)!==null&&V!==void 0?V:"send_mail",un(e),o.B.ACCESS_CONTROL_BASE_URL=m;const X=(e??"").trim();X&&un(X),yield Ve.b.hydrateProfile(),!X&&Ve.b.BearerAccessToken&&un(Ve.b.BearerAccessToken);let se=Math.floor(1e8*Math.random());o.B.setRandomizer(se),o.B.isPwa=(Q=S.isPwa)!==null&&Q!==void 0&&Q,Oo.B.setValue("enableCache",(q=S.enableCache)===null||q===void 0||q);const de={logApplication:!1,logPackage:!1,accessTracker:!1,isTest:!1,accessControl:!1};if(o.B.FLAGS=de,o.B.FLAGS=Object.assign(Object.assign({},de),E),function(pe){const ue=he.V.logfunction("initializeFlags",arguments);try{return pe.logApplication?(Dt.initialize(),he.V.logApplicationActivationStatus=!0,he.V.startAutoSync()):he.V.logApplicationActivationStatus=!1,pe.logPackage?(he.V.logPackageActivationStatus=!0,he.V.startAutoSync()):he.V.logPackageActivationStatus=!1,pe.logApplication||pe.logPackage||he.V.stopAutoSync(),pe.accessTracker?(Qt.J.activateStatus=!0,Qt.J.startAutoSync()):(Qt.J.activateStatus=!1,Qt.J.stopAutoSync()),pe.isTest&&(k.B.isDataLoaded=!0,k.B.isCharacterLoaded=!0,k.B.isTypeLoaded=!0,k.B.isLocalDataLoaded=!0,k.B.isLocalTypeLoaded=!0,k.B.isLocalCharacterLoaded=!0,k.B.isConnectionLoaded=!0,k.B.isConnectionTypeLoaded=!0,k.B.isLocalConnectionLoaded=!0),he.V.logUpdate(ue),pe}catch(Ie){throw(0,f.ey)(ue,"initializeFlags",Ie),Ie}}(o.B.FLAGS),o.B.FLAGS&&o.B.FLAGS.accessControl&&o.B.ACCESS_CONTROL_BASE_URL,!("serviceWorker"in navigator))return void(yield On());if(yield function(){return ht(this,void 0,void 0,function*(){var pe;let ue=o.B.BASE_APPLICATION+"_cacheServers",Ie=o.B.BASE_APPLICATION+"_config",Fe=o.B.BASE_APPLICATION+"_session",Ue=sessionStorage.getItem(ue),Se=sessionStorage.getItem(Ie),ke=(pe=sessionStorage.getItem(Fe))!==null&&pe!==void 0?pe:"999",Pe=parseInt(ke);Ue!==void 0&&Ue!=="undefined"||(o.B.NODE_CACHE_URL=o.B.BASE_URL),Ue=JSON.parse(Ue);const Oe=JSON.parse(Se);function Ge(){return ht(this,arguments,void 0,function*(Xe=!0){var Ze;let nt;try{let st=(Ze=o.B.BASE_APPLICATION)!==null&&Ze!==void 0?Ze:"boomconsole";if(nt=yield fetch(o.B.getAppConfig()+"?application="+st,{method:"POST"}),!nt.ok)throw new Error("Failed to sync data to the server.");const $e=yield nt.json();$e.success&&(sessionStorage.setItem(ue,JSON.stringify($e.servers)),sessionStorage.setItem(Ie,JSON.stringify($e.config)),Xe&&(sessionStorage.setItem(Fe,$e.session),Ve.b.setSession($e.session)),$e.servers?o.B.NODE_CACHE_URL=$e.servers[0]:o.B.NODE_CACHE_URL=o.B.BASE_URL,$e.config&&(o.B.DOCUMENTATION_WIDGET=$e.config.documentationWidget))}catch{}})}Ue&&Oe&&Oe.documentationWidget&&Pe!=999?(Array.isArray(Ue)&&Ue.length?o.B.NODE_CACHE_URL=Ue[0]:o.B.NODE_CACHE_URL=o.B.BASE_URL,Ve.b.setSession(Pe),o.B.DOCUMENTATION_WIDGET=Oe.documentationWidget,Ge(!1)):yield Ge(),navigator.serviceWorker&&navigator.serviceWorker.controller&&Ye("SESSION_DATA",{type:"SESSION_DATA",data:o.B.NODE_CACHE_URL,session:Ve.b.sessionId}).catch(Xe=>{})})}(),function(){ys||(navigator.serviceWorker.addEventListener("message",Fa),ys=!0)}(),function(){ms||(_r.x.addEventListener("message",Oa),ms=!0)}(),D&&D.activate&&D.manual)yield new Promise((pe,ue)=>{navigator.serviceWorker.ready.then(Ie=>ht(this,void 0,void 0,function*(){We=Ie.active,yield An(),pe("done")})).catch(Ie=>{ue(Ie)}).finally(()=>{}),setTimeout(()=>ue("Timeout ready"),3e4)});else if(D&&D?.activate)try{yield function(pe){var ue=arguments;return ht(this,void 0,void 0,function*(){const Ie=he.V.logfunction("handleRegisterServiceWorker",ue);yield new Promise((Fe,Ue)=>{var Se,ke;let Pe=!1;navigator.serviceWorker.register((Se=pe.pathToSW)!==null&&Se!==void 0?Se:"./serviceWorker.bundle.js",{scope:(ke=pe.scope)!==null&&ke!==void 0?ke:"/"}).then(Oe=>ht(this,void 0,void 0,function*(){(function(){gs||(gs=setInterval(()=>{dn.length&&uo().catch(Ge=>{})},2e3))})(),Oe.onupdatefound=()=>{const Ge=Oe.installing;Ge&&(Ge.onstatechange=()=>ht(this,void 0,void 0,function*(){Ge.state==="installing"&&(We=void 0),Ge.state!=="activated"&&Ge.state!=="redundant"||!navigator.serviceWorker.controller||(We=Ge,setTimeout(()=>{uo()},5e3),yield An(),Pe=!0,uo(),Fe())}))},function(){vs||(navigator.serviceWorker.addEventListener("controllerchange",()=>ht(this,void 0,void 0,function*(){navigator.serviceWorker.controller&&(We=navigator.serviceWorker.controller,yield An())})),vs=!0)}(),function(Ge){[Ge.installing,Ge.waiting,Ge.active].forEach(Ze=>{Ze&&!Cs.has(Ze)&&(Cs.add(Ze),Ze.addEventListener("statechange",nt=>ht(this,void 0,void 0,function*(){var st;((st=nt?.target)===null||st===void 0?void 0:st.state)==="activating"&&(We=navigator.serviceWorker.controller,yield An())})))})}(Oe),Oe.active?(We=Oe.active,yield An(),uo(),Fe()):setTimeout(()=>{Pe||Ue("Not Completed Initialization")},1e4)})).catch(Oe=>ht(this,void 0,void 0,function*(){yield On(),Ue(Oe),(0,f.ey)(Ie,"handleRegisterServiceWorker",Oe)}))})})}(D)}catch{yield On()}else yield On();return!0}catch{yield On()}})}function Ye(P,n){return ht(this,arguments,void 0,function*(e,s,I=0){let T=!1;const D=e!=="checkProcess"&&e!=="SESSION_DATA"&&e!=="updateAccessToken",E=Math.random().toString(36).substring(2);s.messageId=E,s.TABID=fs;const S=JSON.parse(JSON.stringify(s));let m;return new Promise((l,U)=>{let V,Q,q,X=!1;const se=()=>{m&&(clearInterval(m),m=void 0),V&&(clearTimeout(V),V=void 0),Q&&(clearTimeout(Q),Q=void 0),q&&navigator?.serviceWorker&&(navigator.serviceWorker.removeEventListener("message",q),q=void 0)},de=Ie=>{X||(X=!0,se(),l(Ie))},pe=Ie=>{X||(X=!0,se(),U(Ie))},ue=()=>{!D||I>0||(m=setInterval(()=>ht(this,void 0,void 0,function*(){T||(yield function(Ie){return ht(this,void 0,void 0,function*(){var Fe;try{const Ue=yield function(Se,ke,Pe=1500){var Oe;const Ge=((Oe=navigator.serviceWorker)===null||Oe===void 0?void 0:Oe.controller)||We;if(!Ge)return Promise.resolve(null);const Xe=Math.random().toString(36).substring(2),Ze=Object.assign(Object.assign({},ke),{messageId:Xe,TABID:fs});return new Promise(nt=>{var st;let $e;const kt=()=>{var gt;$e&&(clearTimeout($e),$e=void 0),(gt=navigator.serviceWorker)===null||gt===void 0||gt.removeEventListener("message",xt)},xt=gt=>{var At;((At=gt?.data)===null||At===void 0?void 0:At.messageId)===Xe&&(kt(),nt(gt.data))};(st=navigator.serviceWorker)===null||st===void 0||st.addEventListener("message",xt),$e=setTimeout(()=>{kt(),nt(null)},Pe);try{Ge.postMessage({type:Se,payload:Ze})}catch{kt(),nt(null)}})}("checkProcess",{checkMessageId:Ie});return!Ue||!!(!((Fe=Ue?.data)===null||Fe===void 0)&&Fe.processing)}catch{return!0}})}(E))||T||(se(),I==0&&D?Ye(e,s,I+1).then(de).catch(pe):pe(`Failed to handle type ${e} ${E}`))}),2e3))};if(navigator.serviceWorker.controller,navigator.serviceWorker.controller||We){if(q=Ie=>{var Fe,Ue,Se,ke,Pe,Oe;if(((Fe=Ie?.data)===null||Fe===void 0?void 0:Fe.messageId)==E){if(T=!0,!Ie.data.success)return void(((Ue=Ie?.data)===null||Ue===void 0?void 0:Ue.status)==401?pe((0,f.ry)(new Response("Unauthorized",{status:401,statusText:(Se=Ie?.data)===null||Se===void 0?void 0:Se.statusText}))):((ke=Ie?.data)===null||ke===void 0?void 0:ke.status)==500?pe((0,f.Mb)(new Response("Internal Server Error",{status:500,statusText:(Pe=Ie?.data)===null||Pe===void 0?void 0:Pe.statusText}))):pe(`Failed to handle action ${e} ${JSON.stringify(s)}, Response: ${JSON.stringify(Ie.data)}`));!((Oe=Ie.data)===null||Oe===void 0)&&Oe.actions&&(s.actions=JSON.parse(JSON.stringify(Ie.data.actions))),de(Ie.data)}},navigator.serviceWorker.addEventListener("message",q),ue(),navigator.serviceWorker.controller)navigator.serviceWorker.controller.postMessage({type:e,payload:S});else if(We)try{We.postMessage({type:e,payload:S})}catch{We.postMessage({type:e,payload:S})}else Q=setTimeout(()=>{We?We?.postMessage({type:e,payload:s}):pe("Service worker not ready")},3e4);V=setTimeout(()=>{pe(`No response from service worker after timeout: ${e}`)},21e4)}else dn.push({message:{type:e,payload:S},resolve:de,reject:pe}),e=="init"&&de(null)})})}const ws={GetLinkListener:P=>ht(void 0,void 0,void 0,function*(){const n=Yo.find(e=>e.listenerId==P.listenerId);return n?.callback(P.data),{success:!0}}),AUTH_LOGOUT:()=>ht(void 0,void 0,void 0,function*(){if(Ve.b.logout(),We)try{yield Ye("updateAccessToken",{accessToken:"",refreshToken:"",session:Ve.b.sessionId})}catch{}return{success:!0}}),dispatchEvent:P=>ht(void 0,void 0,void 0,function*(){if(We){let n=new CustomEvent(P.id||"",P.data);dispatchEvent(n)}return{success:!0}}),checkInit:P=>ht(void 0,void 0,void 0,function*(){return navigator.serviceWorker.controller&&(We=navigator.serviceWorker.controller),yield An(),{success:!0}})};function Oa(P){return ht(this,void 0,void 0,function*(){const{type:n,payload:e}=P.data;n&&ws[n]&&(yield ws[n](e))})}function Fa(P){return ht(this,void 0,void 0,function*(){var n,e,s,I;try{if(P.data&&P.data.type==="API_401"){const{requestDetails:T}=P.data,D={method:T.method,headers:new Headers(T.headers),body:T.body},E=yield fetch(T.url,D),S=yield E?.json();(e=(n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)===null||e===void 0||e.postMessage({type:"API_RESPONSE",messageId:P.data.messageId,response:new Response(S,{status:E.status,statusText:E.statusText,headers:E.headers})})}}catch{(I=(s=navigator?.serviceWorker)===null||s===void 0?void 0:s.controller)===null||I===void 0||I.postMessage({type:"API_RESPONSE",messageId:P.data.messageId})}})}function On(){return ht(this,void 0,void 0,function*(){yield(0,pa.A)(),new Date().getTime(),yield Promise.all([(0,L.A)().then(()=>{}),(0,Ar.Ay)().then(()=>{}),(0,kr.a)().then(()=>{k.B.isConnectionLoaded=!0,k.B.isConnectionTypeLoaded=!0}),(0,kr.p)().then(()=>{k.B.isLocalConnectionLoaded=!0}),(0,Ar.xd)().catch(P=>{throw P}),r.i.init(),h.a.init()]).catch(P=>{})})}function Ts(P,n={}){if(We||typeof window<"u"){let e=new CustomEvent(`${P}`,n);dispatchEvent(e)}else _r.x.postMessage({type:"dispatchEvent",payload:{id:P,data:n}})}function uo(){return ht(this,void 0,void 0,function*(){if(!Xo){Xo=!0;try{const P=dn.find(n=>{var e;return((e=n?.message)===null||e===void 0?void 0:e.type)=="init"});if(P){const n=dn.indexOf(P);n>-1&&dn.splice(n,1),yield Ye(P.message.type,P.message.payload).then(P.resolve).catch(P.reject)}for(;dn.length>0;){const n=dn.shift();if(!n)continue;const{message:e,resolve:s,reject:I}=n;yield Ye(e.type,e.payload).then(s).catch(I)}}finally{Xo=!1}}})}const tt=P=>{if(P instanceof le.z)throw P};function An(){return ht(this,void 0,void 0,function*(){yield Ye("init",{url:o.B.BASE_URL,aiurl:o.B.AI_URL,accessToken:Ve.b.BearerAccessToken,refreshToken:Ve.b.refreshToken,nodeUrl:o.B.NODE_URL,enableAi:!1,applicationName:o.B.BASE_APPLICATION,flags:o.B.FLAGS,accessControlUrl:o.B.ACCESS_CONTROL_BASE_URL})})}},4437:(Y,R,v)=>{v.d(R,{B:()=>k});var _=v(4244),L=v(6715),r=v(5760),h=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,p||[])).next())})};function k(){return h(this,arguments,void 0,function*(w=[]){const p=_.Logger.logfunction("FindConnectionsOfCompositionsBulkInMemory",[w.length])||{};let t=[];try{if(_.serviceWorker){p.serviceWorker=!0;try{const o=yield(0,_.sendMessage)("FindConnectionsOfCompositionsBulkInMemory",{composition_ids:w});return _.Logger.logUpdate(p),o.data}catch(o){(0,r.ey)(p,"FindConnectionsOfCompositionsBulkInMemory",o),(0,_.handleServiceWorkerException)(o)}}for(let o=0;o<w.length;o++){let a=yield L.d.GetConnectionsOfConcept(w[o]);t.push(...a)}return _.Logger.logUpdate(p),t}catch(o){return(0,r.ey)(p,"FindConnectionsOfCompositionsBulkInMemory",o),t}})}},4451:(Y,R,v)=>{R.__esModule=!0,R.universal=R.tag=R.string=R.selector=R.root=R.pseudo=R.nesting=R.id=R.comment=R.combinator=R.className=R.attribute=void 0;var _=A(v(5588)),L=A(v(4195)),r=A(v(1704)),h=A(v(425)),k=A(v(7071)),w=A(v(2918)),p=A(v(7324)),t=A(v(518)),o=A(v(339)),a=A(v(5799)),f=A(v(9720)),C=A(v(1669));function A(u){return u&&u.__esModule?u:{default:u}}R.attribute=function(u){return new _.default(u)},R.className=function(u){return new L.default(u)},R.combinator=function(u){return new r.default(u)},R.comment=function(u){return new h.default(u)},R.id=function(u){return new k.default(u)},R.nesting=function(u){return new w.default(u)},R.pseudo=function(u){return new p.default(u)},R.root=function(u){return new t.default(u)},R.selector=function(u){return new o.default(u)},R.string=function(u){return new a.default(u)},R.tag=function(u){return new f.default(u)},R.universal=function(u){return new C.default(u)}},4622:(Y,R,v)=>{v.d(R,{j:()=>o});var _=v(6715),L=v(370),r=v(2371),h=v(1317),k=v(5760),w=v(4244),p=v(3693),t=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,f||[])).next())})};function o(){return t(this,arguments,void 0,function*(a=[]){const f=w.Logger.logfunction("GetConnectionBulk",a.length)||{};let C=[];try{if(w.serviceWorker){f.serviceWorker=!0;try{const A=yield(0,w.sendMessage)("GetConnectionBulk",{connectionIds:a});return w.Logger.logUpdate(f),A.data}catch(A){(0,k.ey)(f,"GetConnectionBulk",A),(0,w.handleServiceWorkerException)(A)}}if(a.length>0){let A=[];for(let u=0;u<a.length;u++)if(!_.d.GetNpConn(a[u])){let c=yield _.d.GetConnection(a[u]);c.id==0?A.push(a[u]):C.push(c)}if(A.length==0)return w.Logger.logUpdate(f),yield(0,r.s)(C),C;{let u;const c={method:"POST",headers:yield(0,h.Xr)(),body:JSON.stringify(A)};try{u=yield(0,h.Hh)(L.B.GetConnectionBulkUrl(),c)}catch{u=yield(0,p.g)(c,"/api/get_connection_bulk")}yield function(i,d,g){return t(this,void 0,void 0,function*(){if(i.ok){const y=yield i.json();if(y.length>0)for(let b=0;b<y.length;b++){let x=y[b];d.push(x),_.d.AddConnection(x)}}else(0,k.ey)(g,"GetConnectionBulk",i.status),(0,k.ry)(i)})}(u,C,f),w.Logger.logUpdate(f)}}}catch(A){(0,k.ey)(f,"GetConnectionBulk",A),(0,k.Mb)(A,L.B.GetConnectionBulkUrl())}return yield(0,r.s)(C),C})}},4643:(Y,R,v)=>{function _(L){try{if(!v.g.localStorage)return!1}catch{return!1}var r=v.g.localStorage[L];return r!=null&&String(r).toLowerCase()==="true"}Y.exports=function(L,r){if(_("noDeprecation"))return L;var h=!1;return function(){if(!h){if(_("throwDeprecation"))throw new Error(r);_("traceDeprecation"),h=!0}return L.apply(this,arguments)}}},4646:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _=v(9606);function L(k,w){for(var p=0;p<w.length;p++){var t=w[p];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(k,t.key,t)}}var r=function k(w,p){if(typeof w!="object"||w===null)return w;var t=new w.constructor;for(var o in w)if(w.hasOwnProperty(o)){var a=w[o];o==="parent"&&typeof a=="object"?p&&(t[o]=p):t[o]=a instanceof Array?a.map(function(f){return k(f,t)}):k(a,t)}return t},h=function(){function k(o){o===void 0&&(o={}),Object.assign(this,o),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var w,p,t=k.prototype;return t.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},t.replaceWith=function(){if(this.parent){for(var o in arguments)this.parent.insertBefore(this,arguments[o]);this.remove()}return this},t.next=function(){return this.parent.at(this.parent.index(this)+1)},t.prev=function(){return this.parent.at(this.parent.index(this)-1)},t.clone=function(o){o===void 0&&(o={});var a=r(this);for(var f in o)a[f]=o[f];return a},t.appendToPropertyAndEscape=function(o,a,f){this.raws||(this.raws={});var C=this[o],A=this.raws[o];this[o]=C+a,A||f!==a?this.raws[o]=(A||C)+f:delete this.raws[o]},t.setPropertyAndEscape=function(o,a,f){this.raws||(this.raws={}),this[o]=a,this.raws[o]=f},t.setPropertyWithoutEscape=function(o,a){this[o]=a,this.raws&&delete this.raws[o]},t.isAtPosition=function(o,a){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>o)&&!(this.source.end.line<o)&&!(this.source.start.line===o&&this.source.start.column>a)&&!(this.source.end.line===o&&this.source.end.column<a)},t.stringifyProperty=function(o){return this.raws&&this.raws[o]||this[o]},t.valueToString=function(){return String(this.stringifyProperty("value"))},t.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},w=k,(p=[{key:"rawSpaceBefore",get:function(){var o=this.raws&&this.raws.spaces&&this.raws.spaces.before;return o===void 0&&(o=this.spaces&&this.spaces.before),o||""},set:function(o){(0,_.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=o}},{key:"rawSpaceAfter",get:function(){var o=this.raws&&this.raws.spaces&&this.raws.spaces.after;return o===void 0&&(o=this.spaces.after),o||""},set:function(o){(0,_.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=o}}])&&L(w.prototype,p),Object.defineProperty(w,"prototype",{writable:!1}),k}();R.default=h,Y.exports=R.default},4647:(Y,R,v)=>{v.d(R,{W:()=>k});var _=v(5760),L=v(1317),r=v(4244),h=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,[])).next())})};function k(w){var p=arguments;return h(this,void 0,void 0,function*(){const t=r.Logger.logfunction("GetAllLinkerConnectionsToTheConcept",p);var o=[];try{new Date().getTime();var a=yield(0,L.Xr)("application/x-www-form-urlencoded");const A=yield(0,L.Hh)(r.BaseUrl.GetAllLinkerConnectionToConceptUrl()+`?conceptId=${w}`,{method:"GET",headers:a});if(A.ok){const u=yield A.json();for(var f=0;f<u.length;f++){var C=u[f];o.push(C)}r.Logger.logUpdate(t)}else(0,_.ry)(A)}catch(A){(0,_.Mb)(A,r.BaseUrl.GetAllLinkerConnectionToConceptUrl()),(0,_.ey)(t,"GetAllLinkerConnectionsToTheConcept",A)}return o})}},4990:(Y,R,v)=>{v.d(R,{N:()=>r});var _=v(6047),L=v(370);class r{constructor(k=0,w,p,t,o,a,f){this.count=0,this.isTemp=!1,this.toUpdate=!1,this.applicationId=L.B.getRandomizer(),this.type=(0,_.o)(),this.ofConcept=(0,_.o)(),this.toConcept=(0,_.o)(),this.id=k,this.ofTheConceptId=w,this.toTheConceptId=p,this.userId=t,this.typeId=o,this.ghostId=k,this.orderId=a,this.accessId=f,this.entryTimeStamp=(0,_.Y)(new Date),this.terminationDateTime=new Date,this.localSyncTime=new Date,this.typeCharacter=""}}},5042:Y=>{Y.exports={nanoid:(R=21)=>{let v="",_=0|R;for(;_--;)v+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return v},customAlphabet:(R,v=21)=>(_=v)=>{let L="",r=0|_;for(;r--;)L+=R[Math.random()*R.length|0];return L}}},5170:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L,r=N(v(518)),h=N(v(339)),k=N(v(4195)),w=N(v(425)),p=N(v(7071)),t=N(v(9720)),o=N(v(5799)),a=N(v(7324)),f=x(v(5588)),C=N(v(1669)),A=N(v(1704)),u=N(v(2918)),c=N(v(263)),i=x(v(2648)),d=x(v(71)),g=x(v(1581)),y=v(9606);function b(z){if(typeof WeakMap!="function")return null;var ie=new WeakMap,ce=new WeakMap;return(b=function(oe){return oe?ce:ie})(z)}function x(z,ie){if(z&&z.__esModule)return z;if(z===null||typeof z!="object"&&typeof z!="function")return{default:z};var ce=b(ie);if(ce&&ce.has(z))return ce.get(z);var oe={},J=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ee in z)if(ee!=="default"&&Object.prototype.hasOwnProperty.call(z,ee)){var ne=J?Object.getOwnPropertyDescriptor(z,ee):null;ne&&(ne.get||ne.set)?Object.defineProperty(oe,ee,ne):oe[ee]=z[ee]}return oe.default=z,ce&&ce.set(z,oe),oe}function N(z){return z&&z.__esModule?z:{default:z}}function B(z,ie){for(var ce=0;ce<ie.length;ce++){var oe=ie[ce];oe.enumerable=oe.enumerable||!1,oe.configurable=!0,"value"in oe&&(oe.writable=!0),Object.defineProperty(z,oe.key,oe)}}var O=((_={})[d.space]=!0,_[d.cr]=!0,_[d.feed]=!0,_[d.newline]=!0,_[d.tab]=!0,_),G=Object.assign({},O,((L={})[d.comment]=!0,L));function F(z){return{line:z[i.FIELDS.START_LINE],column:z[i.FIELDS.START_COL]}}function M(z){return{line:z[i.FIELDS.END_LINE],column:z[i.FIELDS.END_COL]}}function j(z,ie,ce,oe){return{start:{line:z,column:ie},end:{line:ce,column:oe}}}function W(z){return j(z[i.FIELDS.START_LINE],z[i.FIELDS.START_COL],z[i.FIELDS.END_LINE],z[i.FIELDS.END_COL])}function $(z,ie){if(z)return j(z[i.FIELDS.START_LINE],z[i.FIELDS.START_COL],ie[i.FIELDS.END_LINE],ie[i.FIELDS.END_COL])}function K(z,ie){var ce=z[ie];if(typeof ce=="string")return ce.indexOf("\\")!==-1&&((0,y.ensureObject)(z,"raws"),z[ie]=(0,y.unesc)(ce),z.raws[ie]===void 0&&(z.raws[ie]=ce)),z}function te(z,ie){for(var ce=-1,oe=[];(ce=z.indexOf(ie,ce+1))!==-1;)oe.push(ce);return oe}var ae=function(){function z(J,ee){ee===void 0&&(ee={}),this.rule=J,this.options=Object.assign({lossy:!1,safe:!1},ee),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,i.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var ne=$(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new r.default({source:ne}),this.root.errorGenerator=this._errorGenerator();var H=new h.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(H),this.current=H,this.loop()}var ie,ce,oe=z.prototype;return oe._errorGenerator=function(){var J=this;return function(ee,ne){return typeof J.rule=="string"?new Error(ee):J.rule.error(ee,ne)}},oe.attribute=function(){var J=[],ee=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[i.FIELDS.TYPE]!==d.closeSquare;)J.push(this.currToken),this.position++;if(this.currToken[i.FIELDS.TYPE]!==d.closeSquare)return this.expected("closing square bracket",this.currToken[i.FIELDS.START_POS]);var ne=J.length,H={source:j(ee[1],ee[2],this.currToken[3],this.currToken[4]),sourceIndex:ee[i.FIELDS.START_POS]};if(ne===1&&!~[d.word].indexOf(J[0][i.FIELDS.TYPE]))return this.expected("attribute",J[0][i.FIELDS.START_POS]);for(var re=0,le="",me="",Ce=null,Te=!1;re<ne;){var ye=J[re],ge=this.content(ye),_e=J[re+1];switch(ye[i.FIELDS.TYPE]){case d.space:if(Te=!0,this.options.lossy)break;if(Ce){(0,y.ensureObject)(H,"spaces",Ce);var Le=H.spaces[Ce].after||"";H.spaces[Ce].after=Le+ge;var ve=(0,y.getProp)(H,"raws","spaces",Ce,"after")||null;ve&&(H.raws.spaces[Ce].after=ve+ge)}else le+=ge,me+=ge;break;case d.asterisk:_e[i.FIELDS.TYPE]===d.equals?(H.operator=ge,Ce="operator"):(!H.namespace||Ce==="namespace"&&!Te)&&_e&&(le&&((0,y.ensureObject)(H,"spaces","attribute"),H.spaces.attribute.before=le,le=""),me&&((0,y.ensureObject)(H,"raws","spaces","attribute"),H.raws.spaces.attribute.before=le,me=""),H.namespace=(H.namespace||"")+ge,(0,y.getProp)(H,"raws","namespace")&&(H.raws.namespace+=ge),Ce="namespace"),Te=!1;break;case d.dollar:if(Ce==="value"){var De=(0,y.getProp)(H,"raws","value");H.value+="$",De&&(H.raws.value=De+"$");break}case d.caret:_e[i.FIELDS.TYPE]===d.equals&&(H.operator=ge,Ce="operator"),Te=!1;break;case d.combinator:if(ge==="~"&&_e[i.FIELDS.TYPE]===d.equals&&(H.operator=ge,Ce="operator"),ge!=="|"){Te=!1;break}_e[i.FIELDS.TYPE]===d.equals?(H.operator=ge,Ce="operator"):H.namespace||H.attribute||(H.namespace=!0),Te=!1;break;case d.word:if(_e&&this.content(_e)==="|"&&J[re+2]&&J[re+2][i.FIELDS.TYPE]!==d.equals&&!H.operator&&!H.namespace)H.namespace=ge,Ce="namespace";else if(!H.attribute||Ce==="attribute"&&!Te)le&&((0,y.ensureObject)(H,"spaces","attribute"),H.spaces.attribute.before=le,le=""),me&&((0,y.ensureObject)(H,"raws","spaces","attribute"),H.raws.spaces.attribute.before=me,me=""),H.attribute=(H.attribute||"")+ge,(0,y.getProp)(H,"raws","attribute")&&(H.raws.attribute+=ge),Ce="attribute";else if(!H.value&&H.value!==""||Ce==="value"&&!Te&&!H.quoteMark){var we=(0,y.unesc)(ge),fe=(0,y.getProp)(H,"raws","value")||"",Ae=H.value||"";H.value=Ae+we,H.quoteMark=null,(we!==ge||fe)&&((0,y.ensureObject)(H,"raws"),H.raws.value=(fe||Ae)+ge),Ce="value"}else{var Ee=ge==="i"||ge==="I";!H.value&&H.value!==""||!H.quoteMark&&!Te?(H.value||H.value==="")&&(Ce="value",H.value+=ge,H.raws.value&&(H.raws.value+=ge)):(H.insensitive=Ee,Ee&&ge!=="I"||((0,y.ensureObject)(H,"raws"),H.raws.insensitiveFlag=ge),Ce="insensitive",le&&((0,y.ensureObject)(H,"spaces","insensitive"),H.spaces.insensitive.before=le,le=""),me&&((0,y.ensureObject)(H,"raws","spaces","insensitive"),H.raws.spaces.insensitive.before=me,me=""))}Te=!1;break;case d.str:if(!H.attribute||!H.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:ye[i.FIELDS.START_POS]});var Ne=(0,f.unescapeValue)(ge),be=Ne.unescaped,Re=Ne.quoteMark;H.value=be,H.quoteMark=Re,Ce="value",(0,y.ensureObject)(H,"raws"),H.raws.value=ge,Te=!1;break;case d.equals:if(!H.attribute)return this.expected("attribute",ye[i.FIELDS.START_POS],ge);if(H.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:ye[i.FIELDS.START_POS]});H.operator=H.operator?H.operator+ge:ge,Ce="operator",Te=!1;break;case d.comment:if(Ce)if(Te||_e&&_e[i.FIELDS.TYPE]===d.space||Ce==="insensitive"){var Be=(0,y.getProp)(H,"spaces",Ce,"after")||"",Me=(0,y.getProp)(H,"raws","spaces",Ce,"after")||Be;(0,y.ensureObject)(H,"raws","spaces",Ce),H.raws.spaces[Ce].after=Me+ge}else{var xe=H[Ce]||"",Je=(0,y.getProp)(H,"raws",Ce)||xe;(0,y.ensureObject)(H,"raws"),H.raws[Ce]=Je+ge}else me+=ge;break;default:return this.error('Unexpected "'+ge+'" found.',{index:ye[i.FIELDS.START_POS]})}re++}K(H,"attribute"),K(H,"namespace"),this.newNode(new f.default(H)),this.position++},oe.parseWhitespaceEquivalentTokens=function(J){J<0&&(J=this.tokens.length);var ee=this.position,ne=[],H="",re=void 0;do if(O[this.currToken[i.FIELDS.TYPE]])this.options.lossy||(H+=this.content());else if(this.currToken[i.FIELDS.TYPE]===d.comment){var le={};H&&(le.before=H,H=""),re=new w.default({value:this.content(),source:W(this.currToken),sourceIndex:this.currToken[i.FIELDS.START_POS],spaces:le}),ne.push(re)}while(++this.position<J);if(H){if(re)re.spaces.after=H;else if(!this.options.lossy){var me=this.tokens[ee],Ce=this.tokens[this.position-1];ne.push(new o.default({value:"",source:j(me[i.FIELDS.START_LINE],me[i.FIELDS.START_COL],Ce[i.FIELDS.END_LINE],Ce[i.FIELDS.END_COL]),sourceIndex:me[i.FIELDS.START_POS],spaces:{before:H,after:""}}))}}return ne},oe.convertWhitespaceNodesToSpace=function(J,ee){var ne=this;ee===void 0&&(ee=!1);var H="",re="";return J.forEach(function(le){var me=ne.lossySpace(le.spaces.before,ee),Ce=ne.lossySpace(le.rawSpaceBefore,ee);H+=me+ne.lossySpace(le.spaces.after,ee&&me.length===0),re+=me+le.value+ne.lossySpace(le.rawSpaceAfter,ee&&Ce.length===0)}),re===H&&(re=void 0),{space:H,rawSpace:re}},oe.isNamedCombinator=function(J){return J===void 0&&(J=this.position),this.tokens[J+0]&&this.tokens[J+0][i.FIELDS.TYPE]===d.slash&&this.tokens[J+1]&&this.tokens[J+1][i.FIELDS.TYPE]===d.word&&this.tokens[J+2]&&this.tokens[J+2][i.FIELDS.TYPE]===d.slash},oe.namedCombinator=function(){if(this.isNamedCombinator()){var J=this.content(this.tokens[this.position+1]),ee=(0,y.unesc)(J).toLowerCase(),ne={};ee!==J&&(ne.value="/"+J+"/");var H=new A.default({value:"/"+ee+"/",source:j(this.currToken[i.FIELDS.START_LINE],this.currToken[i.FIELDS.START_COL],this.tokens[this.position+2][i.FIELDS.END_LINE],this.tokens[this.position+2][i.FIELDS.END_COL]),sourceIndex:this.currToken[i.FIELDS.START_POS],raws:ne});return this.position=this.position+3,H}this.unexpected()},oe.combinator=function(){var J=this;if(this.content()==="|")return this.namespace();var ee=this.locateNextMeaningfulToken(this.position);if(!(ee<0||this.tokens[ee][i.FIELDS.TYPE]===d.comma||this.tokens[ee][i.FIELDS.TYPE]===d.closeParenthesis)){var ne,H=this.currToken,re=void 0;if(ee>this.position&&(re=this.parseWhitespaceEquivalentTokens(ee)),this.isNamedCombinator()?ne=this.namedCombinator():this.currToken[i.FIELDS.TYPE]===d.combinator?(ne=new A.default({value:this.content(),source:W(this.currToken),sourceIndex:this.currToken[i.FIELDS.START_POS]}),this.position++):O[this.currToken[i.FIELDS.TYPE]]||re||this.unexpected(),ne){if(re){var le=this.convertWhitespaceNodesToSpace(re),me=le.space,Ce=le.rawSpace;ne.spaces.before=me,ne.rawSpaceBefore=Ce}}else{var Te=this.convertWhitespaceNodesToSpace(re,!0),ye=Te.space,ge=Te.rawSpace;ge||(ge=ye);var _e={},Le={spaces:{}};ye.endsWith(" ")&&ge.endsWith(" ")?(_e.before=ye.slice(0,ye.length-1),Le.spaces.before=ge.slice(0,ge.length-1)):ye.startsWith(" ")&&ge.startsWith(" ")?(_e.after=ye.slice(1),Le.spaces.after=ge.slice(1)):Le.value=ge,ne=new A.default({value:" ",source:$(H,this.tokens[this.position-1]),sourceIndex:H[i.FIELDS.START_POS],spaces:_e,raws:Le})}return this.currToken&&this.currToken[i.FIELDS.TYPE]===d.space&&(ne.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(ne)}var ve=this.parseWhitespaceEquivalentTokens(ee);if(ve.length>0){var De=this.current.last;if(De){var we=this.convertWhitespaceNodesToSpace(ve),fe=we.space,Ae=we.rawSpace;Ae!==void 0&&(De.rawSpaceAfter+=Ae),De.spaces.after+=fe}else ve.forEach(function(Ee){return J.newNode(Ee)})}},oe.comma=function(){if(this.position===this.tokens.length-1)return this.root.trailingComma=!0,void this.position++;this.current._inferEndPosition();var J=new h.default({source:{start:F(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][i.FIELDS.START_POS]});this.current.parent.append(J),this.current=J,this.position++},oe.comment=function(){var J=this.currToken;this.newNode(new w.default({value:this.content(),source:W(J),sourceIndex:J[i.FIELDS.START_POS]})),this.position++},oe.error=function(J,ee){throw this.root.error(J,ee)},oe.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[i.FIELDS.START_POS]})},oe.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[i.FIELDS.START_POS])},oe.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[i.FIELDS.START_POS])},oe.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[i.FIELDS.START_POS])},oe.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[i.FIELDS.START_POS])},oe.namespace=function(){var J=this.prevToken&&this.content(this.prevToken)||!0;return this.nextToken[i.FIELDS.TYPE]===d.word?(this.position++,this.word(J)):this.nextToken[i.FIELDS.TYPE]===d.asterisk?(this.position++,this.universal(J)):void this.unexpectedPipe()},oe.nesting=function(){if(this.nextToken&&this.content(this.nextToken)==="|")return void this.position++;var J=this.currToken;this.newNode(new u.default({value:this.content(),source:W(J),sourceIndex:J[i.FIELDS.START_POS]})),this.position++},oe.parentheses=function(){var J=this.current.last,ee=1;if(this.position++,J&&J.type===g.PSEUDO){var ne=new h.default({source:{start:F(this.tokens[this.position])},sourceIndex:this.tokens[this.position][i.FIELDS.START_POS]}),H=this.current;for(J.append(ne),this.current=ne;this.position<this.tokens.length&&ee;)this.currToken[i.FIELDS.TYPE]===d.openParenthesis&&ee++,this.currToken[i.FIELDS.TYPE]===d.closeParenthesis&&ee--,ee?this.parse():(this.current.source.end=M(this.currToken),this.current.parent.source.end=M(this.currToken),this.position++);this.current=H}else{for(var re,le=this.currToken,me="(";this.position<this.tokens.length&&ee;)this.currToken[i.FIELDS.TYPE]===d.openParenthesis&&ee++,this.currToken[i.FIELDS.TYPE]===d.closeParenthesis&&ee--,re=this.currToken,me+=this.parseParenthesisToken(this.currToken),this.position++;J?J.appendToPropertyAndEscape("value",me,me):this.newNode(new o.default({value:me,source:j(le[i.FIELDS.START_LINE],le[i.FIELDS.START_COL],re[i.FIELDS.END_LINE],re[i.FIELDS.END_COL]),sourceIndex:le[i.FIELDS.START_POS]}))}if(ee)return this.expected("closing parenthesis",this.currToken[i.FIELDS.START_POS])},oe.pseudo=function(){for(var J=this,ee="",ne=this.currToken;this.currToken&&this.currToken[i.FIELDS.TYPE]===d.colon;)ee+=this.content(),this.position++;return this.currToken?this.currToken[i.FIELDS.TYPE]!==d.word?this.expected(["pseudo-class","pseudo-element"],this.currToken[i.FIELDS.START_POS]):void this.splitWord(!1,function(H,re){ee+=H,J.newNode(new a.default({value:ee,source:$(ne,J.currToken),sourceIndex:ne[i.FIELDS.START_POS]})),re>1&&J.nextToken&&J.nextToken[i.FIELDS.TYPE]===d.openParenthesis&&J.error("Misplaced parenthesis.",{index:J.nextToken[i.FIELDS.START_POS]})}):this.expected(["pseudo-class","pseudo-element"],this.position-1)},oe.space=function(){var J=this.content();this.position===0||this.prevToken[i.FIELDS.TYPE]===d.comma||this.prevToken[i.FIELDS.TYPE]===d.openParenthesis||this.current.nodes.every(function(ee){return ee.type==="comment"})?(this.spaces=this.optionalSpace(J),this.position++):this.position===this.tokens.length-1||this.nextToken[i.FIELDS.TYPE]===d.comma||this.nextToken[i.FIELDS.TYPE]===d.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(J),this.position++):this.combinator()},oe.string=function(){var J=this.currToken;this.newNode(new o.default({value:this.content(),source:W(J),sourceIndex:J[i.FIELDS.START_POS]})),this.position++},oe.universal=function(J){var ee=this.nextToken;if(ee&&this.content(ee)==="|")return this.position++,this.namespace();var ne=this.currToken;this.newNode(new C.default({value:this.content(),source:W(ne),sourceIndex:ne[i.FIELDS.START_POS]}),J),this.position++},oe.splitWord=function(J,ee){for(var ne=this,H=this.nextToken,re=this.content();H&&~[d.dollar,d.caret,d.equals,d.word].indexOf(H[i.FIELDS.TYPE]);){this.position++;var le=this.content();if(re+=le,le.lastIndexOf("\\")===le.length-1){var me=this.nextToken;me&&me[i.FIELDS.TYPE]===d.space&&(re+=this.requiredSpace(this.content(me)),this.position++)}H=this.nextToken}var Ce=te(re,".").filter(function(_e){var Le=re[_e-1]==="\\",ve=/^\d+\.\d+%$/.test(re);return!Le&&!ve}),Te=te(re,"#").filter(function(_e){return re[_e-1]!=="\\"}),ye=te(re,"#{");ye.length&&(Te=Te.filter(function(_e){return!~ye.indexOf(_e)}));var ge=(0,c.default)(function(){var _e=Array.prototype.concat.apply([],arguments);return _e.filter(function(Le,ve){return ve===_e.indexOf(Le)})}([0].concat(Ce,Te)));ge.forEach(function(_e,Le){var ve,De=ge[Le+1]||re.length,we=re.slice(_e,De);if(Le===0&&ee)return ee.call(ne,we,ge.length);var fe=ne.currToken,Ae=fe[i.FIELDS.START_POS]+ge[Le],Ee=j(fe[1],fe[2]+_e,fe[3],fe[2]+(De-1));if(~Ce.indexOf(_e)){var Ne={value:we.slice(1),source:Ee,sourceIndex:Ae};ve=new k.default(K(Ne,"value"))}else if(~Te.indexOf(_e)){var be={value:we.slice(1),source:Ee,sourceIndex:Ae};ve=new p.default(K(be,"value"))}else{var Re={value:we,source:Ee,sourceIndex:Ae};K(Re,"value"),ve=new t.default(Re)}ne.newNode(ve,J),J=null}),this.position++},oe.word=function(J){var ee=this.nextToken;return ee&&this.content(ee)==="|"?(this.position++,this.namespace()):this.splitWord(J)},oe.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},oe.parse=function(J){switch(this.currToken[i.FIELDS.TYPE]){case d.space:this.space();break;case d.comment:this.comment();break;case d.openParenthesis:this.parentheses();break;case d.closeParenthesis:J&&this.missingParenthesis();break;case d.openSquare:this.attribute();break;case d.dollar:case d.caret:case d.equals:case d.word:this.word();break;case d.colon:this.pseudo();break;case d.comma:this.comma();break;case d.asterisk:this.universal();break;case d.ampersand:this.nesting();break;case d.slash:case d.combinator:this.combinator();break;case d.str:this.string();break;case d.closeSquare:this.missingSquareBracket();case d.semicolon:this.missingBackslash();default:this.unexpected()}},oe.expected=function(J,ee,ne){if(Array.isArray(J)){var H=J.pop();J=J.join(", ")+" or "+H}var re=/^[aeiou]/.test(J[0])?"an":"a";return ne?this.error("Expected "+re+" "+J+', found "'+ne+'" instead.',{index:ee}):this.error("Expected "+re+" "+J+".",{index:ee})},oe.requiredSpace=function(J){return this.options.lossy?" ":J},oe.optionalSpace=function(J){return this.options.lossy?"":J},oe.lossySpace=function(J,ee){return this.options.lossy?ee?" ":"":J},oe.parseParenthesisToken=function(J){var ee=this.content(J);return J[i.FIELDS.TYPE]===d.space?this.requiredSpace(ee):ee},oe.newNode=function(J,ee){return ee&&(/^ +$/.test(ee)&&(this.options.lossy||(this.spaces=(this.spaces||"")+ee),ee=!0),J.namespace=ee,K(J,"namespace")),this.spaces&&(J.spaces.before=this.spaces,this.spaces=""),this.current.append(J)},oe.content=function(J){return J===void 0&&(J=this.currToken),this.css.slice(J[i.FIELDS.START_POS],J[i.FIELDS.END_POS])},oe.locateNextMeaningfulToken=function(J){J===void 0&&(J=this.position+1);for(var ee=J;ee<this.tokens.length;){if(!G[this.tokens[ee][i.FIELDS.TYPE]])return ee;ee++}return-1},ie=z,(ce=[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}])&&B(ie.prototype,ce),Object.defineProperty(ie,"prototype",{writable:!1}),z}();R.default=ae,Y.exports=R.default},5238:(Y,R,v)=>{let _=v(3152);class L extends _{get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}constructor(h){h&&h.value!==void 0&&typeof h.value!="string"&&(h={...h,value:String(h.value)}),super(h),this.type="decl"}}Y.exports=L,L.default=L},5286:(Y,R)=>{function v(L){for(var r=L.toLowerCase(),h="",k=!1,w=0;w<6&&r[w]!==void 0;w++){var p=r.charCodeAt(w);if(k=p===32,!(p>=97&&p<=102||p>=48&&p<=57))break;h+=r[w]}if(h.length!==0){var t=parseInt(h,16);return t>=55296&&t<=57343||t===0||t>1114111?["�",h.length+(k?1:0)]:[String.fromCodePoint(t),h.length+(k?1:0)]}}R.__esModule=!0,R.default=function(L){if(!_.test(L))return L;for(var r="",h=0;h<L.length;h++)if(L[h]!=="\\")r+=L[h];else{var k=v(L.slice(h+1,h+7));if(k!==void 0){r+=k[0],h+=k[1];continue}if(L[h+1]==="\\"){r+="\\",h++;continue}L.length===h+1&&(r+=L[h])}return r};var _=/\\/;Y.exports=R.default},5330:(Y,R,v)=>{v.d(R,{x:()=>r});let _=null;function L(){return _||(_=new BroadcastChannel("Freeschema_mftsccs_browser_channel")),_}const r={addEventListener(h,k){L().addEventListener(h,k)},removeEventListener(h,k){L().removeEventListener(h,k)},postMessage(h){L().postMessage(h)},close(){_&&(_.close(),_=null)}}},5588:(Y,R,v)=>{R.__esModule=!0,R.default=void 0,R.unescapeValue=u;var _,L=w(v(8937)),r=w(v(5286)),h=w(v(3295)),k=v(1581);function w(g){return g&&g.__esModule?g:{default:g}}function p(g,y){for(var b=0;b<y.length;b++){var x=y[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}function t(g,y){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,x){return b.__proto__=x,b},t(g,y)}var o=v(4643),a=/^('|")([^]*)\1$/,f=o(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),C=o(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),A=o(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function u(g){var y=!1,b=null,x=g,N=x.match(a);return N&&(b=N[1],x=N[2]),(x=(0,r.default)(x))!==g&&(y=!0),{deprecatedUsage:y,unescaped:x,quoteMark:b}}var c=function(g){var y,b;function x(G){var F;return G===void 0&&(G={}),F=g.call(this,function(M){if(M.quoteMark!==void 0||M.value===void 0)return M;A();var j=u(M.value),W=j.quoteMark,$=j.unescaped;return M.raws||(M.raws={}),M.raws.value===void 0&&(M.raws.value=M.value),M.value=$,M.quoteMark=W,M}(G))||this,F.type=k.ATTRIBUTE,F.raws=F.raws||{},Object.defineProperty(F.raws,"unquoted",{get:o(function(){return F.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:o(function(){return F.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),F._constructed=!0,F}b=g,(y=x).prototype=Object.create(b.prototype),y.prototype.constructor=y,t(y,b);var N,B,O=x.prototype;return O.getQuotedValue=function(G){G===void 0&&(G={});var F=this._determineQuoteMark(G),M=i[F];return(0,L.default)(this._value,M)},O._determineQuoteMark=function(G){return G.smart?this.smartQuoteMark(G):this.preferredQuoteMark(G)},O.setValue=function(G,F){F===void 0&&(F={}),this._value=G,this._quoteMark=this._determineQuoteMark(F),this._syncRawValue()},O.smartQuoteMark=function(G){var F=this.value,M=F.replace(/[^']/g,"").length,j=F.replace(/[^"]/g,"").length;if(M+j===0){var W=(0,L.default)(F,{isIdentifier:!0});if(W===F)return x.NO_QUOTE;var $=this.preferredQuoteMark(G);if($===x.NO_QUOTE){var K=this.quoteMark||G.quoteMark||x.DOUBLE_QUOTE,te=i[K];if((0,L.default)(F,te).length<W.length)return K}return $}return j===M?this.preferredQuoteMark(G):j<M?x.DOUBLE_QUOTE:x.SINGLE_QUOTE},O.preferredQuoteMark=function(G){var F=G.preferCurrentQuoteMark?this.quoteMark:G.quoteMark;return F===void 0&&(F=G.preferCurrentQuoteMark?G.quoteMark:this.quoteMark),F===void 0&&(F=x.DOUBLE_QUOTE),F},O._syncRawValue=function(){var G=(0,L.default)(this._value,i[this.quoteMark]);G===this._value?this.raws&&delete this.raws.value:this.raws.value=G},O._handleEscapes=function(G,F){if(this._constructed){var M=(0,L.default)(F,{isIdentifier:!0});M!==F?this.raws[G]=M:delete this.raws[G]}},O._spacesFor=function(G){var F=this.spaces[G]||{},M=this.raws.spaces&&this.raws.spaces[G]||{};return Object.assign({before:"",after:""},F,M)},O._stringFor=function(G,F,M){F===void 0&&(F=G),M===void 0&&(M=d);var j=this._spacesFor(F);return M(this.stringifyProperty(G),j)},O.offsetOf=function(G){var F=1,M=this._spacesFor("attribute");if(F+=M.before.length,G==="namespace"||G==="ns")return this.namespace?F:-1;if(G==="attributeNS"||(F+=this.namespaceString.length,this.namespace&&(F+=1),G==="attribute"))return F;F+=this.stringifyProperty("attribute").length,F+=M.after.length;var j=this._spacesFor("operator");F+=j.before.length;var W=this.stringifyProperty("operator");if(G==="operator")return W?F:-1;F+=W.length,F+=j.after.length;var $=this._spacesFor("value");F+=$.before.length;var K=this.stringifyProperty("value");return G==="value"?K?F:-1:(F+=K.length,F+=$.after.length,F+=this._spacesFor("insensitive").before.length,G==="insensitive"&&this.insensitive?F:-1)},O.toString=function(){var G=this,F=[this.rawSpaceBefore,"["];return F.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(F.push(this._stringFor("operator")),F.push(this._stringFor("value")),F.push(this._stringFor("insensitiveFlag","insensitive",function(M,j){return!(M.length>0)||G.quoted||j.before.length!==0||G.spaces.value&&G.spaces.value.after||(j.before=" "),d(M,j)}))),F.push("]"),F.push(this.rawSpaceAfter),F.join("")},N=x,(B=[{key:"quoted",get:function(){var G=this.quoteMark;return G==="'"||G==='"'},set:function(G){C()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(G){this._constructed?this._quoteMark!==G&&(this._quoteMark=G,this._syncRawValue()):this._quoteMark=G}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(G){if(this._constructed){var F=u(G),M=F.deprecatedUsage,j=F.unescaped,W=F.quoteMark;if(M&&f(),j===this._value&&W===this._quoteMark)return;this._value=j,this._quoteMark=W,this._syncRawValue()}else this._value=G}},{key:"insensitive",get:function(){return this._insensitive},set:function(G){G||(this._insensitive=!1,!this.raws||this.raws.insensitiveFlag!=="I"&&this.raws.insensitiveFlag!=="i"||(this.raws.insensitiveFlag=void 0)),this._insensitive=G}},{key:"attribute",get:function(){return this._attribute},set:function(G){this._handleEscapes("attribute",G),this._attribute=G}}])&&p(N.prototype,B),Object.defineProperty(N,"prototype",{writable:!1}),x}(h.default);R.default=c,c.NO_QUOTE=null,c.SINGLE_QUOTE="'",c.DOUBLE_QUOTE='"';var i=((_={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}}).null={isIdentifier:!0},_);function d(g,y){return""+y.before+g+y.after}},5644:(Y,R,v)=>{let _,L,r=v(7793);class h extends r{constructor(w){super(w),this.type="root",this.nodes||(this.nodes=[])}normalize(w,p,t){let o=super.normalize(w);if(p){if(t==="prepend")this.nodes.length>1?p.raws.before=this.nodes[1].raws.before:delete p.raws.before;else if(this.first!==p)for(let a of o)a.raws.before=p.raws.before}return o}removeChild(w,p){let t=this.index(w);return!p&&t===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[t].raws.before),super.removeChild(w)}toResult(w={}){return new _(new L,this,w).stringify()}}h.registerLazyResult=k=>{_=k},h.registerProcessor=k=>{L=k},Y.exports=h,h.default=h,r.registerRoot(h)},5747:(Y,R,v)=>{v.d(R,{A:()=>o,K:()=>a});var _=v(1402),L=v(9536),r=v(4244),h=v(1833),k=v(6047),w=function(f,C,A,u){return new(A||(A=Promise))(function(c,i){function d(b){try{y(u.next(b))}catch(x){i(x)}}function g(b){try{y(u.throw(b))}catch(x){i(x)}}function y(b){var x;b.done?c(b.value):(x=b.value,x instanceof A?x:new A(function(N){N(x)})).then(d,g)}y((u=u.apply(f,C||[])).next())})};const p=new Map;function t(f){return w(this,void 0,void 0,function*(){if(f.type==null){let C=yield h.I.GetConcept(f.typeId);if(C.id==0&&f.typeId!=null&&f.typeId!=0&&f.typeId!=999){let A=yield(0,L.r)(f.typeId);f.type=A}else f.type=C}})}function o(f){return w(this,arguments,void 0,function*(C,A=999){C=Number(C);let u=performance.now();if(_.J.activateStatus)try{_.J.incrementConcept(C)}catch{r.Logger.log("ERROR","Error Adding Connection")}if(C>0){const d=yield r.BinaryTree.getNodeFromTree(C);if(d?.value&&d.value.id>0)return yield t(d.value),d.value}let c=(0,k.o)();if(p.has(C))return p.get(C)||c;const i=w(this,void 0,void 0,function*(){try{if(r.serviceWorker)try{const d=(yield(0,r.sendMessage)("GetTheConcept",{id:C,userId:A})).data;return d&&d.id>0&&h.I.AddConceptToMemory(d),d}catch(d){(0,r.handleServiceWorkerException)(d)}return C<0?yield r.LocalConceptsData.GetConceptByGhostId(C):(c=yield h.I.GetConcept(C),(c==null||c.id==0)&&C!=null&&C!=null&&(c=yield(0,L.r)(C)),c.id!=0&&(yield t(c)),c)}catch(d){throw r.Logger.logError(u,A,"read","unknown",void 0,500,d,"GetTheConcept",[C,A],"unknown",void 0),d}finally{p.delete(C)}});return p.set(C,i),i})}function a(f){return w(this,void 0,void 0,function*(){if(r.serviceWorker)try{return(yield(0,r.sendMessage)("AddTypeConcept",{concept:f})).data}catch(C){(0,r.handleServiceWorkerException)(C)}yield t(f)})}},5760:(Y,R,v)=>{v.d(R,{ER:()=>h,Mb:()=>k,ey:()=>w,ry:()=>r});var _=v(4244),L=v(1974);function r(p){if(_.Logger.log("ERROR",p.statusText,{code:p.status,data:p.statusText}),p.status==401||p.status==406){let t=new L.z(p.statusText,!1,p.status,"");throw t.setUrl(p.url),t}if(p.status==500){let t=new L.z(p.statusText,!1,p.status,"");throw t.setUrl(p.url),t}}function h(p,t={}){if(_.Logger.log("ERROR",t.statusText,{code:p.status,data:p.status}),p.status==401||p.status==406){let o=new L.z(t.statusText,!1,p.status,"");throw o.setUrl(p.url),o}if(p.status==500){let o=new L.z(t.statusText,!1,p.status,"");throw o.setUrl(p.url),o}}function k(p,t=""){if(_.Logger.log("ERROR",p.message,{code:p.status,data:p.stack}),p.status){let o=new L.z(p.message,!1,p.status,p.stack);throw o.setUrl(t),o}{let o=new L.z(p.message,!1,500,p.stack);throw o.setUrl(t),o}}function w(p,t,o){var a;try{if(!p)return;const f=Date.now();p.startTime=(a=p.startTime)!==null&&a!==void 0?a:f,p.responseTime=f-p.startTime+" ms",p.level="ERROR",p.errorMessage=o?.message||"Unknown error occurred"}catch{}}},5781:Y=>{const g=/[\t\n\f\r "#'()/;[\\\]{}]/g,y=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,b=/.[\r\n"'(/\\]/,x=/[\da-f]/i;Y.exports=function(N,B={}){let O,G,F,M,j,W,$,K,te,ae,z=N.css.valueOf(),ie=B.ignoreErrors,ce=z.length,oe=0,J=[],ee=[];function ne(H){throw N.error("Unclosed "+H,oe)}return{back:function(H){ee.push(H)},endOfFile:function(){return ee.length===0&&oe>=ce},nextToken:function(H){if(ee.length)return ee.pop();if(oe>=ce)return;let re=!!H&&H.ignoreUnclosed;switch(O=z.charCodeAt(oe),O){case 10:case 32:case 9:case 13:case 12:M=oe;do M+=1,O=z.charCodeAt(M);while(O===32||O===10||O===9||O===13||O===12);W=["space",z.slice(oe,M)],oe=M-1;break;case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let le=String.fromCharCode(O);W=[le,le,oe];break}case 40:if(ae=J.length?J.pop()[1]:"",te=z.charCodeAt(oe+1),ae==="url"&&te!==39&&te!==34&&te!==32&&te!==10&&te!==9&&te!==12&&te!==13){M=oe;do{if($=!1,M=z.indexOf(")",M+1),M===-1){if(ie||re){M=oe;break}ne("bracket")}for(K=M;z.charCodeAt(K-1)===92;)K-=1,$=!$}while($);W=["brackets",z.slice(oe,M+1),oe,M],oe=M}else M=z.indexOf(")",oe+1),G=z.slice(oe,M+1),M===-1||b.test(G)?W=["(","(",oe]:(W=["brackets",G,oe,M],oe=M);break;case 39:case 34:j=O===39?"'":'"',M=oe;do{if($=!1,M=z.indexOf(j,M+1),M===-1){if(ie||re){M=oe+1;break}ne("string")}for(K=M;z.charCodeAt(K-1)===92;)K-=1,$=!$}while($);W=["string",z.slice(oe,M+1),oe,M],oe=M;break;case 64:g.lastIndex=oe+1,g.test(z),M=g.lastIndex===0?z.length-1:g.lastIndex-2,W=["at-word",z.slice(oe,M+1),oe,M],oe=M;break;case 92:for(M=oe,F=!0;z.charCodeAt(M+1)===92;)M+=1,F=!F;if(O=z.charCodeAt(M+1),F&&O!==47&&O!==32&&O!==10&&O!==9&&O!==13&&O!==12&&(M+=1,x.test(z.charAt(M)))){for(;x.test(z.charAt(M+1));)M+=1;z.charCodeAt(M+1)===32&&(M+=1)}W=["word",z.slice(oe,M+1),oe,M],oe=M;break;default:O===47&&z.charCodeAt(oe+1)===42?(M=z.indexOf("*/",oe+2)+1,M===0&&(ie||re?M=z.length:ne("comment")),W=["comment",z.slice(oe,M+1),oe,M],oe=M):(y.lastIndex=oe+1,y.test(z),M=y.lastIndex===0?z.length-1:y.lastIndex-2,W=["word",z.slice(oe,M+1),oe,M],J.push(W),oe=M)}return oe++,W},position:function(){return oe}}}},5793:(Y,R,v)=>{v.d(R,{s:()=>t});var _=v(6715),L=v(370),r=v(6089),h=v(1317),k=v(5760),w=v(4244),p=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})};function t(a){var f=arguments;return p(this,void 0,void 0,function*(){const C=w.Logger.logfunction("GetAllConnectionsOfComposition",f);var A=[];if((A=yield _.d.GetConnectionsOfConcept(a)).length==0)A=yield o(a);else{var u=yield o(a);(0,r.e)(u,A),A=u}return w.Logger.logUpdate(C),A})}function o(a){var f=arguments;return p(this,void 0,void 0,function*(){const C=w.Logger.logfunction("GetAllConnectionsOfCompositionOnline",f);var A=[];try{var u=yield(0,h.Xr)(null);const i=new FormData;i.append("composition_id",a.toString());const d=yield(0,h.Hh)(L.B.GetAllConnectionsOfCompositionUrl(),{method:"POST",headers:u,body:i});if(!d.ok)throw(0,k.ry)(d),new Error(`Error! status: ${d.status}`);const g=yield d.json();for(var c=0;c<g.length;c++)_.d.AddConnection(g[c]),A.push(g[c]);return w.Logger.logUpdate(C),A}catch(i){(0,k.Mb)(i,L.B.GetAllConnectionsOfCompositionUrl()),(0,k.ey)(C,"GetAllConnectionsOfCompositionOnline",i)}})}},5799:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(4646))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.STRING,f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o}(L.default);R.default=k,Y.exports=R.default},5978:(Y,R,v)=>{v.d(R,{H:()=>k});var _=v(4244),L=v(2617);class r extends L.i{constructor(p,t,o,a){super(p,t,o,a),this.key="",this.value=[],this.height=1,this.key=p,this.value=t,this.leftNode=o,this.rightNode=a}addNode(p,t,o){if(t==null)return p;let a=t.leftNode,f=t.rightNode;if(t.key>p.key)t.leftNode=this.addNode(p,a,o);else{if(!(t.key<p.key))return t;t.rightNode=this.addNode(p,f,o)}t.height=1+Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode));let C=this.getBalanceFactor(t);if(C>1&&t.leftNode){if(this.getBalanceFactor(t.leftNode)>=0)return this.rightRotate(t);if(this.getBalanceFactor(t.leftNode)<0)return t.leftNode=this.leftRotate(t.leftNode),this.rightRotate(t)}if(C<-1&&t.rightNode){if(this.getBalanceFactor(t.rightNode)<=0)return this.leftRotate(t);if(this.getBalanceFactor(t.rightNode)>0)return t.rightNode=this.rightRotate(t.rightNode),this.leftRotate(t)}return t}}var h=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,[])).next())})};class k{static CreateCompositionKey(p,t){return p}static GetConnectionByOfTheConceptAndTypeId(p,t){let o=this.CreateCompositionKey(p,t);if(this.node){let a=this.node.getFromNode(o,this.node);if(a)return a.value}return null}static addConnection(p){if(p.id>0){let t=this.CreateCompositionKey(p.ofTheConceptId,p.typeId);if(this.node){let o=this.node.getFromNode(t,this.node);if(o){let a=o?.value;a.length==0&&(o.value=[]),a.includes(p.id)||a.push(p.id)}else{let a=[];a.push(p.id);let f=new r(t,a,null,null);this.addNodeToTree(f)}}else{let o=[];o.push(p.id);let a=new r(t,o,null,null);this.addNodeToTree(a)}new Event(`${t}`)}}static addNodeToTree(p){return h(this,void 0,void 0,function*(){return this.node==null?(this.node=p,(0,_.dispatchIdEvent)(p.key),this.node):(this.node=this.node.addNode(p,this.node,this.node.height),this.node)})}static removeNodeFromTree(p){return h(this,void 0,void 0,function*(){this.node&&(this.node=this.node.removeNode(this.node,p))})}}k.node=null},6047:(Y,R,v)=>{v.d(R,{Y:()=>r,o:()=>L});var _=v(3008);function L(){let h=r(new Date),k=r(new Date);return new _.j(0,0,0,0,0,"0",0,!1,h,k,"0")}function r(h){const k=h.getMonth()+1,w=h.getDate(),p=h.getFullYear();let t=h.getHours();const o=h.getMinutes(),a=h.getSeconds(),f=t>=12?"PM":"AM";t%=12,t=t||12;const C=A=>A.toString().padStart(2,"0");return`${k}/${w}/${p} ${t}:${C(o)}:${C(a)} ${f}`}},6089:(Y,R,v)=>{function _(L=[],r=[]){}v.d(R,{e:()=>_})},6156:Y=>{let R={};Y.exports=function(v){R[v]||(R[v]=!0,typeof console<"u")}},6288:(Y,R,v)=>{v.d(R,{Al:()=>o,L2:()=>h,Ou:()=>k,cL:()=>w,eH:()=>a,kM:()=>f,l8:()=>p,ou:()=>A,sg:()=>C});var _=v(370),L=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,[])).next())})};const r=1,h="widgetCache",k="latestWidgetCache",w="recentWidgetCache",p="queryCache";let t=null;function o(){return new Promise((u,c)=>{if(t)return void u(t);const i=_.B.BASE_URL+"_CacheStore"+_.B.BASE_APPLICATION,d=indexedDB.open(i,r);d.onupgradeneeded=g=>{const y=g.target.result;y.objectStoreNames.contains(h)||y.createObjectStore(h,{keyPath:"id"}),y.objectStoreNames.contains(k)||y.createObjectStore(k,{keyPath:"id"}),y.objectStoreNames.contains(w)||y.createObjectStore(w,{keyPath:"id"}),y.objectStoreNames.contains(p)||y.createObjectStore(p)},d.onsuccess=g=>{t=g.target.result,u(t)},d.onerror=g=>{c(g)}})}function a(u,c,i){return L(this,void 0,void 0,function*(){const d=yield o();return new Promise((g,y)=>{const b=d.transaction(u,"readwrite").objectStore(u),x=i!==void 0?b.put(c,i):b.put(c);x.onsuccess=()=>g(),x.onerror=N=>{y(N)}})})}function f(u,c){return L(this,void 0,void 0,function*(){const i=yield o();return new Promise((d,g)=>{const y=i.transaction(u,"readwrite").objectStore(u).delete(c);y.onsuccess=()=>d(),y.onerror=b=>{g(b)}})})}function C(u){return L(this,void 0,void 0,function*(){const c=yield o();return new Promise((i,d)=>{const g=c.transaction(u,"readwrite").objectStore(u).clear();g.onsuccess=()=>i(),g.onerror=y=>{d(y)}})})}function A(u){return L(this,void 0,void 0,function*(){const c=yield o();return new Promise((i,d)=>{const g=c.transaction(u,"readonly").objectStore(u).getAll();g.onsuccess=()=>{var y;i((y=g.result)!==null&&y!==void 0?y:[])},g.onerror=y=>{d(y)}})})}},6291:(Y,R)=>{R.__esModule=!0,R.default=function(v){for(var _=arguments.length,L=new Array(_>1?_-1:0),r=1;r<_;r++)L[r-1]=arguments[r];for(;L.length>0;){var h=L.shift();if(!v[h])return;v=v[h]}return v},Y.exports=R.default},6297:(Y,R,v)=>{v.d(R,{A:()=>t});var _=v(1833),L=v(370),r=v(1317),h=v(5760),k=v(4244),w=v(5747),p=function(o,a,f,C){return new(f||(f=Promise))(function(A,u){function c(g){try{d(C.next(g))}catch(y){u(y)}}function i(g){try{d(C.throw(g))}catch(y){u(y)}}function d(g){var y;g.done?A(g.value):(y=g.value,y instanceof f?y:new f(function(b){b(y)})).then(c,i)}d((C=C.apply(o,[])).next())})};function t(o,a){var f=arguments;return p(this,void 0,void 0,function*(){const C=k.Logger.logfunction("GetConceptByCharacterAndType",f);try{if(k.serviceWorker)try{return(yield(0,k.sendMessage)("GetConceptByCharacterAndType",{characterValue:o,typeId:a})).data}catch(d){(0,k.handleServiceWorkerException)(d)}let i=yield _.I.GetConceptByCharacterAndTypeLocal(o,a);if(i==null||i.id==0){var A={character_value:`${o}`,type_id:a},u=JSON.stringify(A),c=yield(0,r.Xr)();const d=yield(0,r.Hh)(L.B.GetConceptByCharacterAndTypeUrl(),{method:"POST",headers:c,body:u});d.ok?(i=yield d.json(),(0,w.K)(i).then(y=>{_.I.AddConcept(i)})):(0,h.ry)(d)}return k.Logger.logUpdate(C),i}catch(i){(0,h.Mb)(i,L.B.GetConceptByCharacterAndTypeUrl()),(0,h.ey)(C,"GetConceptByCharacterAndType",i)}})}},6397:(Y,R,v)=>{v.d(R,{Y:()=>t});var _=v(1833),L=v(370),r=v(1317),h=v(4244),k=v(5760),w=v(5747),p=function(o,a,f,C){return new(f||(f=Promise))(function(A,u){function c(g){try{d(C.next(g))}catch(y){u(y)}}function i(g){try{d(C.throw(g))}catch(y){u(y)}}function d(g){var y;g.done?A(g.value):(y=g.value,y instanceof f?y:new f(function(b){b(y)})).then(c,i)}d((C=C.apply(o,[])).next())})};function t(o){var a=arguments;return p(this,void 0,void 0,function*(){const f=h.Logger.logfunction("GetConceptByCharacterValue",a);let C=(0,h.CreateDefaultConcept)();try{const A=yield(0,r.Xr)(null,"application/json"),u=new FormData;u.append("character_value",o);const c=yield(0,r.Hh)(L.B.GetConceptByCharacterValueUrl(),{method:"POST",headers:A,body:u});c.ok?(C=yield c.json(),C.id>0&&(0,w.K)(C).then(i=>{_.I.AddConcept(C)}),h.Logger.logUpdate(f)):(0,k.ry)(c)}catch(A){(0,k.Mb)(A,L.B.GetConceptByCharacterValueUrl()),(0,k.ey)(f,"GetConceptByCharacterValue",A)}return C})}},6443:(Y,R,v)=>{v.d(R,{Cp:()=>u,ix:()=>d,ml:()=>i,qj:()=>c});var _=v(4244),L=v(6948),r=v(3693),h=v(2635),k=v(5760),w=v(3076),p=v(1317),t=v(4238),o=function(g,y,b,x){return new(b||(b=Promise))(function(N,B){function O(M){try{F(x.next(M))}catch(j){B(j)}}function G(M){try{F(x.throw(M))}catch(j){B(j)}}function F(M){var j;M.done?N(M.value):(j=M.value,j instanceof b?j:new b(function(W){W(j)})).then(O,G)}F((x=x.apply(g,[])).next())})};const a=new Map,f=new Map,C=new Map;function A(g,y){_.BaseUrl.isPwa&&o(this,void 0,void 0,function*(){const b=new Set(y);for(const x of g){const N=yield _.ConnectionData.GetConnection(x);N&&N?.id>0&&(b.add(N.ofTheConceptId),b.add(N.toTheConceptId),b.add(N.typeId),(0,L.kH)("connection",N))}for(const x of b)if(x>0){const N=yield _.ConceptsData.GetConcept(x);N&&N.id>0&&(0,L.kH)("concept",N)}}).catch(()=>{})}function u(g){var y=arguments;return o(this,void 0,void 0,function*(){_.Logger.logfunction("BuildWidgetFromId",y);try{if(_.serviceWorker)return(yield(0,_.sendMessage)("BuildWidgetFromId",{id:g})).data}catch(G){(0,_.handleServiceWorkerException)(G)}let b={};if(a.has(g))return a.get(g)||b;let x=yield(0,p.Xr)("application/json"),N=_.BaseUrl.getWidgetData()+"?id="+g;const B=t.i.getWidget(g);if(B){(0,p.Hh)(N,{method:"GET",headers:x}).then(M=>o(this,void 0,void 0,function*(){if(M.ok){const j=yield M.json();t.i.setWidget(g,j)}else(0,k.ry)(M)})).catch(()=>{});let G=(0,h.w)(B.countinfo),F=yield(0,w.e$)(B.linkers,B.conceptIds,B.mainCompositionIds,B.reverse,G,"DESC");return A(B.linkers,B.conceptIds),F}const O=o(this,void 0,void 0,function*(){try{const G=yield(0,p.Hh)(N,{method:"GET",headers:x});if(G.ok){let F=yield G.json();t.i.setWidget(g,F);let M=(0,h.w)(F.countinfo);return b=yield(0,w.e$)(F.linkers,F.conceptIds,F.mainCompositionIds,F.reverse,M,"DESC"),A(F.linkers,F.conceptIds),b}return(0,k.ry)(G),[]}catch(G){throw G}finally{a.delete(g)}});return a.set(g,O),O})}function c(g){var y=arguments;return o(this,void 0,void 0,function*(){_.Logger.logfunction("BuildWidgetFromIdForLatest",y);try{if(_.serviceWorker)return(yield(0,_.sendMessage)("BuildWidgetFromIdForLatest",{id:g})).data}catch(O){(0,_.handleServiceWorkerException)(O)}let b={};if(f.has(g))return f.get(g)||b;let x=yield(0,p.Xr)("application/json");const N=t.i.getLatest(g);if(N){o(this,void 0,void 0,function*(){let F;try{let M=_.BaseUrl.getLatestWidgetData()+"?id="+g;F=yield(0,p.Hh)(M,{method:"GET",headers:x})}catch{F=yield(0,r.g)({method:"GET",headers:x},"?id="+g)}if(F.ok){const M=yield F.json();t.i.setLatest(g,M)}else(0,k.ry)(F)}).catch(()=>{});let O=(0,h.w)(N.countinfo),G=yield(0,w.e$)(N.linkers,N.conceptIds,N.mainCompositionIds,N.reverse,O,"DESC");return A(N.linkers,N.conceptIds),{data:G,mainId:N.mainId}}const B=o(this,void 0,void 0,function*(){try{let O;try{let G=_.BaseUrl.getLatestWidgetData()+"?id="+g;O=yield(0,p.Hh)(G,{method:"GET",headers:x})}catch{O=yield(0,r.g)({method:"GET",headers:x},"?id="+g)}if(O.ok){let G=yield O.json();t.i.setLatest(g,G);let F=(0,h.w)(G.countinfo);return b=yield(0,w.e$)(G.linkers,G.conceptIds,G.mainCompositionIds,G.reverse,F,"DESC"),A(G.linkers,G.conceptIds),{data:b,mainId:G.mainId}}return(0,k.ry)(O),[]}catch(O){throw O}finally{f.delete(g)}});return f.set(g,B),B})}function i(g){var y=arguments;return o(this,void 0,void 0,function*(){_.Logger.logfunction("BuildWidgetFromIdForRecent",y);try{if(_.serviceWorker)return(yield(0,_.sendMessage)("BuildWidgetFromIdForRecent",{id:g})).data}catch(O){(0,_.handleServiceWorkerException)(O)}let b={};if(C.has(g))return C.get(g)||b;let x=yield(0,p.Xr)("application/json");const N=t.i.getRecent(g);if(N){o(this,void 0,void 0,function*(){let F;try{let M=_.BaseUrl.getRecentWidgetData()+"?id="+g;F=yield(0,p.Hh)(M,{method:"GET",headers:x})}catch{F=yield(0,r.g)({method:"GET",headers:x},"?id="+g)}if(F.ok){const M=yield F.json();t.i.setRecent(g,M)}else(0,k.ry)(F)}).catch(()=>{});let O=(0,h.w)(N.countinfo),G=yield(0,w.e$)(N.linkers,N.conceptIds,N.mainCompositionIds,N.reverse,O,"DESC");return A(N.linkers,N.conceptIds),{data:G,mainId:N.mainId}}const B=o(this,void 0,void 0,function*(){try{let O;try{let G=_.BaseUrl.getRecentWidgetData()+"?id="+g;O=yield(0,p.Hh)(G,{method:"GET",headers:x})}catch{O=yield(0,r.g)({method:"GET",headers:x},"?id="+g)}if(O.ok){let G=yield O.json();t.i.setRecent(g,G);let F=(0,h.w)(G.countinfo);return b=yield(0,w.e$)(G.linkers,G.conceptIds,G.mainCompositionIds,G.reverse,F,"DESC"),A(G.linkers,G.conceptIds),{data:b,mainId:G.mainId}}return(0,k.ry)(O),[]}catch(O){throw O}finally{C.delete(g)}});return C.set(g,B),B})}function d(g,y){for(let b=0;b<g.length;b++)if(g[b].id==y)return g[b]}},6580:(Y,R,v)=>{v.d(R,{Ay:()=>t,EO:()=>o,xd:()=>a});var _=v(830),L=v(7154),r=v(198),h=v(7258),k=v(4244),w=v(5760),p=function(f,C,A,u){return new(A||(A=Promise))(function(c,i){function d(b){try{y(u.next(b))}catch(x){i(x)}}function g(b){try{y(u.throw(b))}catch(x){i(x)}}function y(b){var x;b.done?c(b.value):(x=b.value,x instanceof A?x:new A(function(N){N(x)})).then(d,g)}y((u=u.apply(f,[])).next())})};function t(){return p(this,void 0,void 0,function*(){const f=k.Logger.logfunction("CreateLocalBinaryTreeFromIndexDb");try{let C=[];if(Array.isArray(C))for(let A=0;A<C.length;A++){let u=C[A];L.v.AddConceptToMemory(u)}_.B.isLocalDataLoaded=!0,_.B.isLocalTypeLoaded=!0,_.B.isLocalCharacterLoaded=!0,k.Logger.logUpdate(f)}catch(C){yield(0,k.DelayFunctionExecution)(2e3,t());let A={message:"Cannot create local binary tree from index db",data:C,ok:!1,status:400};throw(0,w.ey)(f,"CreateLocalBinaryTreeFromIndexDb",C),A}})}function o(){return p(this,void 0,void 0,function*(){var f;const C=k.Logger.logfunction("PopulateTheLocalConceptsToMemory");try{yield(f=navigator.locks)===null||f===void 0?void 0:f.request("dblock",A=>p(this,void 0,void 0,function*(){let u=yield(0,h.S5)("localid");if(Array.isArray(u)){if(u[0]){let c=u[0].value;if(c)r.R.AddConceptId(u[0]),yield(0,h.kH)("localid",{id:0,value:c-10});else{c=-Math.floor(1e8*Math.random());let i={id:0,value:c},d={id:0,value:c-10};r.R.AddConceptId(i),yield(0,h.kH)("localid",d)}}u[2]}})),k.Logger.logUpdate(C)}catch(A){let u={message:"Cannot populate Local Ids from the Index Db",data:A,ok:!1,status:400};throw(0,w.ey)(C,"PopulateTheLocalConceptsToMemory",A),u}})}function a(){return p(this,void 0,void 0,function*(){var f;const C=k.Logger.logfunction("PopulateTheLocalConnectionToMemory");try{yield(f=navigator.locks)===null||f===void 0?void 0:f.request("dblock",A=>p(this,void 0,void 0,function*(){let u=yield(0,h.S5)("localid");if(Array.isArray(u)){if(u[1]){let c=u[1].value;if(c)r.R.AddConnectionId(u[1]),yield(0,h.kH)("localid",{id:1,value:c-10});else{c=-Math.floor(1e8*Math.random());let i={id:0,value:c},d={id:0,value:c-10};r.R.AddConnectionId(i),yield(0,h.kH)("localid",d)}}u[2]}})),k.Logger.logUpdate(C)}catch(A){let u={message:"Cannot populate Local Ids from the Index Db",data:A,ok:!1,status:400};throw(0,w.ey)(C,"PopulateTheLocalConnectionToMemory",A),u}})}},6700:(Y,R,v)=>{v.d(R,{Y:()=>w});var _=v(370),L=v(1317),r=v(4244),h=v(5760),k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,[])).next())})};function w(p){return k(this,void 0,void 0,function*(){const t=r.Logger.logfunction("CreateTheConceptApi",p);let o=(0,r.CreateDefaultConcept)();try{var a=yield(0,L.Xr)();const f=yield(0,L.Hh)(_.B.CreateTheConceptUrl(),{method:"POST",headers:a,body:JSON.stringify(p)});if(!f.ok)throw(0,h.ry)(f),new Error(`Error! status: ${f.status}`);return o=yield f.json(),r.Logger.logUpdate(t),o}catch(f){(0,h.Mb)(f,_.B.CreateTheConceptUrl()),(0,h.ey)(t,"CreateTheConceptApi",f)}})}},6715:(Y,R,v)=>{v.d(R,{d:()=>A});var _=v(1402),L=v(4244),r=v(6948),h=v(5760),k=v(4990),w=v(413),p=v(5978),t=v(2617);class o extends t.i{constructor(c,i,d,g){super(c,i,d,g),this.key="",this.value=[],this.height=1,this.key=c,this.value=i,this.leftNode=d,this.rightNode=g}addNode(c,i,d){if(i==null)return i=c;let g=i.leftNode,y=i.rightNode;if(i.key>c.key)i.leftNode=this.addNode(c,g,d);else{if(!(i.key<c.key))return i;i.rightNode=this.addNode(c,y,d)}i.height=1+Math.max(this.getHeight(i.leftNode),this.getHeight(i.rightNode));let b=this.getBalanceFactor(i);if(b>1&&i.leftNode){if(c.key<i.leftNode.key)return this.rightRotate(i);if(c.key>i.leftNode.key)return i.leftNode=this.leftRotate(i.leftNode),this.rightRotate(i)}if(b<-1&&i.rightNode){if(c.key>i.rightNode.key)return this.leftRotate(i);if(c.key<i.rightNode.key)return i.rightNode=this.rightRotate(i.rightNode),this.leftRotate(i)}return i}}var a=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,[])).next())})};class f{static CreateCompositionKey(c){return c}static addNodeToTree(c){return a(this,void 0,void 0,function*(){return this.connectionTypeRoot==null?(this.connectionTypeRoot=c,this.connectionTypeRoot):(this.connectionTypeRoot=this.connectionTypeRoot.addNode(c,this.connectionTypeRoot,this.connectionTypeRoot.height),this.connectionTypeRoot)})}static addConnectionToTree(c){if(c.id>0){let i=this.CreateCompositionKey(c.typeId);if(this.connectionTypeRoot){let d=this.connectionTypeRoot.getFromNode(i,this.connectionTypeRoot);if(d){let g=d?.value;g.length==0&&(d.value=[]),g.includes(c.id)||g.push(c.id)}else{let g=[];g.push(c.id);let y=new o(i,g,null,null);this.addNodeToTree(y)}}else{let d=[];d.push(c.id);let g=new o(i,d,null,null);this.addNodeToTree(g)}}}static GetConnectionByOfTheConceptAndTypeId(c,i){let d=this.CreateCompositionKey(i);if(this.connectionTypeRoot){let g=this.connectionTypeRoot.getFromNode(d,this.connectionTypeRoot);if(g)return g.value}return null}}f.connectionTypeRoot=null;var C=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,[])).next())})};class A{constructor(){this.name="Connection Array"}static CheckContains(c){let i=!1;for(let d=0;d<this.connectionArray.length;d++)this.connectionArray[d].id==c.id&&(i=!0);return i}static AddConnectionToStorage(c){(0,r.kH)("connection",c)}static AddNpConn(c){this.deletedConnections.includes(c)||this.deletedConnections.push(c)}static GetNpConn(c){return!!this.deletedConnections.includes(c)}static AddConnection(c){try{w.O.addConnectionToTree(c),f.addConnectionToTree(c),p.H.addConnection(c)}catch(i){throw i}}static AddConnectionToMemory(c){c.isTemp||(w.O.addConnectionToTree(c),f.addConnectionToTree(c),p.H.addConnection(c))}static AddToDictionary(c){this.connectionDictionary[c.id]=c}static RemoveConnection(c){c.id!=0&&((0,r.wh)("connection",c.id),w.O.removeNodeFromTree(c.id),p.H.removeNodeFromTree(c.id))}static GetConnectionTypeOfTree(){p.H.node}static GetConnectionByOfTheConceptAndType(c,i){return C(this,void 0,void 0,function*(){try{if(L.serviceWorker)try{return(yield(0,L.sendMessage)("ConnectionData__GetConnectionByOfTheConceptAndType",{ofTheConceptId:c,typeId:i})).data}catch(g){(0,L.handleServiceWorkerException)(g)}return p.H.GetConnectionByOfTheConceptAndTypeId(c,i)||[]}catch{return[]}})}static GetConnectionByOfType(c,i){const d=L.Logger.logfunction("ConnectionData.GetConnectionByOfType",arguments);let g=f.GetConnectionByOfTheConceptAndTypeId(c,i);return g?(L.Logger.logUpdate(d),g):(L.Logger.logUpdate(d),[])}static GetConnectionTree(){return w.O.connectionroot}static GetConnectionTypeTree(){return f.connectionTypeRoot}static GetConnectionBulkData(c,i,d){return C(this,void 0,void 0,function*(){yield w.O.getConnectionListFromIds(c,i,d)})}static GetConnection(c){return C(this,void 0,void 0,function*(){_.J.incrementConnection(c);let i=new k.N(0,0,0,0,0,0,0);try{if(L.serviceWorker)try{return(yield(0,L.sendMessage)("ConnectionData__GetConnection",{id:c})).data}catch(g){(0,L.handleServiceWorkerException)(g)}let d=yield w.O.getNodeFromTree(c);if(d?.value){let g=d.value;g&&(i=g)}return i}catch{return i}})}static GetConnectionsOfCompositionLocal(c){var i=arguments;return C(this,void 0,void 0,function*(){const d=L.Logger.logfunction("ConnectionData.GetConnectionsOfCompositionLocal",i)||{};let g=[];try{if(L.serviceWorker){d.serviceWorker=!0;try{const b=yield(0,L.sendMessage)("ConnectionData__GetConnectionsOfCompositionLocal",{id:c});return L.Logger.logUpdate(d),b.data}catch(b){(0,h.ey)(d,"GetConnectionsOfCompositionLocal",b),(0,L.handleServiceWorkerException)(b)}}let y=[];y=A.GetConnectionByOfType(c,c);for(let b=0;b<y.length;b++){let x=yield w.O.getNodeFromTree(y[b]);x&&g.push(x.value),L.Logger.logUpdate(d)}}catch(y){(0,h.ey)(d,"ConnectionData.GetConnectionsOfCompositionLocal",y)}return g})}static GetConnectionsOfConcept(c){return C(this,void 0,void 0,function*(){let i=[],d=[];try{if(L.serviceWorker)try{return(yield(0,L.sendMessage)("ConnectionData__GetConnectionsOfConcept",{id:c})).data}catch(g){(0,L.handleServiceWorkerException)(g)}i=yield A.GetConnectionByOfTheConceptAndType(c,c);for(let g=0;g<i.length;g++){let y=yield w.O.getNodeFromTree(i[g]);y&&d.push(y.value)}return d}catch{return d}})}getName(){return this.name}}A.deletedConnections=[],A.connectionArray=[],A.connectionDictionary=[]},6750:(Y,R,v)=>{v.d(R,{a:()=>t,p:()=>o});var _=v(6715),L=v(3967),r=v(6948),h=v(370),k=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})};const w=500;function p(){return new Promise(a=>setTimeout(a,0))}function t(){return k(this,void 0,void 0,function*(){try{let a=[];if(h.B.isPwa&&(a=yield(0,r.D3)("connection")),Array.isArray(a))for(let f=0;f<a.length;f++)_.d.AddConnectionToMemory(a[f]),f>0&&f%w===0&&(yield p())}catch(a){throw{message:"Cannot create Connection Binary Tree Concept",ok:!1,status:400,data:a}}})}function o(){return k(this,void 0,void 0,function*(){try{let a=[];if(Array.isArray(a))for(let f=0;f<a.length;f++)L.G.AddConnectionToMemory(a[f])}catch(a){throw{message:"Cannot create Local Connection Binary Tree Concept",ok:!1,status:400,data:a}}})}},6757:(Y,R,v)=>{v.d(R,{Az:()=>C,Hi:()=>A});var _=v(6397),L=v(1833),r=v(370),h=v(1317),k=v(4244),w=v(5760),p=v(5747),t=v(6948),o=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,[])).next())})},a=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,[])).next())})},f=function(u,c,i,d){return new(i||(i=Promise))(function(g,y){function b(B){try{N(d.next(B))}catch(O){y(O)}}function x(B){try{N(d.throw(B))}catch(O){y(O)}}function N(B){var O;B.done?g(B.value):(O=B.value,O instanceof i?O:new i(function(G){G(O)})).then(b,x)}N((d=d.apply(u,[])).next())})};function C(u){return f(this,void 0,void 0,function*(){const c=k.Logger.logfunction("GetConceptByCharacterAndCategory",u);let i=(0,k.CreateDefaultConcept)();if(u=="the")return i.id=1,i.typeId=5,i.characterValue="the",i;let d=(0,k.SplitStrings)(u);if(d.length>1){let g=1,y=yield C(d[0]);y.id!=0&&(g=y.id),i=yield function(b,x){var N=arguments;return f(this,void 0,void 0,function*(){const B=k.Logger.logfunction("GetConceptByCharacterAndCategoryFromMemory",N);let O=yield k.ConceptsData.GetConceptByCharacterAndCategoryLocal(b,x);return O.id==0&&(O=yield function(G,F){var M=arguments;return o(this,void 0,void 0,function*(){const j=k.Logger.logfunction("GetConceptByCharacterAndCategoryDirectApi",M);let W=(0,k.CreateDefaultConcept)();try{var $=yield(0,h.Xr)("application/x-www-form-urlencoded");const K=yield(0,h.Hh)(r.B.GetConceptByCharacterAndCategoryDirectUrl(),{method:"POST",headers:$,body:`character_value=${G}&category_id=${F}`});K.ok?(W=yield K.json(),(0,p.K)(W).then(()=>{L.I.AddConcept(W),(0,t.kH)("concept",W).catch(()=>{})})):(0,w.ry)(K),k.Logger.logUpdate(j)}catch(K){(0,w.Mb)(K,r.B.GetConceptByCharacterAndCategoryDirectUrl()),(0,w.ey)(j,"GetConceptByCharacterAndCategoryDirectApi",K)}return W})}(b,x)),k.Logger.logUpdate(B),O})}(u,g)}else d[0]==u&&(i=yield function(g){var y=arguments;return f(this,void 0,void 0,function*(){const b=k.Logger.logfunction("GetConceptByCharacter",y);let x=yield k.ConceptsData.GetConceptByCharacterAndTypeLocal(g,51);return x.id==0&&(x=yield(0,_.Y)(g)),k.Logger.logUpdate(b),x})}(u));return k.Logger.logUpdate(c),i})}function A(u){return f(this,void 0,void 0,function*(){let c=[];try{c=yield function(i){return a(this,void 0,void 0,function*(){let d=[];try{let g=JSON.stringify(i),y=yield(0,h.Xr)();const b=yield(0,h.Hh)(k.BaseUrl.GetTypeConceptBulk(),{method:"POST",headers:y,body:g});if(b.ok){let x=yield b.json();d=yield(0,k.GetConceptBulk)(x)}else(0,w.ry)(b)}catch(g){(0,w.Mb)(g,k.BaseUrl.GetConceptByCharacterAndCategoryDirectUrl())}return d})}(u)}catch{}return c})}},6759:(Y,R,v)=>{v.d(R,{a:()=>h});var _=v(6288),L=v(9789),r=function(k,w,p,t){return new(p||(p=Promise))(function(o,a){function f(u){try{A(t.next(u))}catch(c){a(c)}}function C(u){try{A(t.throw(u))}catch(c){a(c)}}function A(u){var c;u.done?o(u.value):(c=u.value,c instanceof p?c:new p(function(i){i(c)})).then(f,C)}A((t=t.apply(k,[])).next())})};class h{static init(){return r(this,void 0,void 0,function*(){if(L.B.getValue("enableCache",!0))try{const w=yield function(p){return r(this,void 0,void 0,function*(){const t=yield(0,_.Al)();return new Promise((o,a)=>{const f=t.transaction(p,"readonly").objectStore(p),C=[],A=f.openCursor();A.onsuccess=()=>{const u=A.result;u?(C.push({key:u.key,value:u.value}),u.continue()):o(C)},A.onerror=u=>{a(u)}})})}(_.l8);for(const{key:p,value:t}of w)this.cacheMap.set(p,t)}catch{}})}static getHash(w){return r(this,void 0,void 0,function*(){return yield function(p){return r(this,void 0,void 0,function*(){const t=JSON.stringify(p,(f,C)=>C&&typeof C=="object"&&!Array.isArray(C)?Object.keys(C).sort().reduce((A,u)=>(A[u]=C[u],A),{}):C),o=new TextEncoder().encode(t),a=yield crypto.subtle.digest("SHA-256",o);return Array.from(new Uint8Array(a)).map(f=>f.toString(16).padStart(2,"0")).join("")})}(w)})}static get(w){var p;return L.B.getValue("enableCache",!0)&&(p=this.cacheMap.get(w))!==null&&p!==void 0?p:null}static set(w,p){if(!L.B.getValue("enableCache",!0))return;const t=this.cacheMap.get(w),o=JSON.stringify(p);t&&JSON.stringify(t)===o||(this.cacheMap.set(w,p),(0,_.eH)(_.l8,p,w).catch(()=>{}),window.dispatchEvent(new CustomEvent(this.prefix+w,{detail:p})))}static subscribe(w,p){const t=o=>{p(o.detail)};return window.addEventListener(this.prefix+w,t),()=>{window.removeEventListener(this.prefix+w,t)}}static remove(w){this.cacheMap.delete(w),(0,_.kM)(_.l8,w).catch(()=>{})}static clearAll(){this.cacheMap.clear(),(0,_.sg)(_.l8).catch(()=>{})}}h.prefix="FREESCHEMA_CACHE_",h.cacheMap=new Map},6797:(Y,R,v)=>{v.d(R,{Y:()=>a});var _=v(6715),L=v(370),r=v(2371),h=v(4437),k=v(6089),w=v(1317),p=v(5760),t=v(4244),o=function(f,C,A,u){return new(A||(A=Promise))(function(c,i){function d(b){try{y(u.next(b))}catch(x){i(x)}}function g(b){try{y(u.throw(b))}catch(x){i(x)}}function y(b){var x;b.done?c(b.value):(x=b.value,x instanceof A?x:new A(function(N){N(x)})).then(d,g)}y((u=u.apply(f,C||[])).next())})};function a(){var f=arguments;return o(this,arguments,void 0,function*(C=[]){const A=t.Logger.logfunction("GetAllConnectionsOfCompositionBulk",f)||{};if(t.serviceWorker){A.serviceWorker=!0;try{const d=yield(0,t.sendMessage)("GetAllConnectionsOfCompositionBulk",{composition_ids:C});return t.Logger.logUpdate(A),d.data}catch(d){(0,p.ey)(A,"GetAllConnectionsOfCompositionBulk",d),(0,t.handleServiceWorkerException)(d)}}var u=[];if(C.length<=0)return u;var c=yield(0,h.B)(C),i=yield function(){var d=arguments;return o(this,arguments,void 0,function*(g=[]){const y=t.Logger.logfunction("GetAllConnectionsOfCompositionOnline",d);var b=[];try{var x=yield(0,w.Xr)();const B=yield(0,w.Hh)(L.B.GetAllConnectionsOfCompositionBulkUrl(),{method:"POST",headers:x,body:JSON.stringify(g)});if(B.ok){const O=yield B.json();for(var N=0;N<O.length;N++)_.d.AddConnection(O[N]),b.push(O[N])}else(0,p.ry)(B);return t.Logger.logUpdate(y),b}catch(B){(0,p.Mb)(B,L.B.GetAllConnectionsOfCompositionBulkUrl()),(0,p.ey)(y,"GetAllConnectionsOfCompositionOnline",B)}})}(C);return u=i,(0,k.e)(u,c),yield(0,r.s)(u),t.Logger.logUpdate(A),u})}},6812:(Y,R,v)=>{v.d(R,{B:()=>_});class _{constructor(r){this.id=1,this.isOnlineSync=!1,this.isOnlineSync=r}}},6832:(Y,R,v)=>{v.d(R,{A:()=>k});var _=v(4244),L=v(7154),r=v(3890),h=function(w,p,t,o){return new(t||(t=Promise))(function(a,f){function C(c){try{u(o.next(c))}catch(i){f(i)}}function A(c){try{u(o.throw(c))}catch(i){f(i)}}function u(c){var i;c.done?a(c.value):(i=c.value,i instanceof t?i:new t(function(d){d(i)})).then(C,A)}u((o=o.apply(w,p||[])).next())})};function k(w,p,t,o,a){return h(this,arguments,void 0,function*(f,C,A,u,c,i={concepts:[],connections:[]}){var d,g,y,b;if(_.serviceWorker)try{const B=yield(0,_.sendMessage)("MakeTheConceptLocal",{referent:f,typeCharacter:C,userId:A,categoryId:u,typeId:c,actions:i});return!((g=(d=B?.actions)===null||d===void 0?void 0:d.concepts)===null||g===void 0)&&g.length&&(i.concepts=JSON.parse(JSON.stringify(B.actions.concepts))),!((b=(y=B?.actions)===null||y===void 0?void 0:y.connections)===null||b===void 0)&&b.length&&(i.connections=JSON.parse(JSON.stringify(B.actions.connections))),B.data}catch(B){(0,_.handleServiceWorkerException)(B)}let x=yield L.v.GetConceptByCharacterAndTypeLocal(f,c),N=x;return C=="the"&&(u=1),N.id==0&&(x=yield(0,r.A)(f,C,A,u,c,4,void 0,null,i),N=x),N})}},6846:(Y,R,v)=>{let _=v(145),L=v(6966),r=v(4211),h=v(5644);class k{constructor(p=[]){this.version="8.5.6",this.plugins=this.normalize(p)}normalize(p){let t=[];for(let o of p)if(o.postcss===!0?o=o():o.postcss&&(o=o.postcss),typeof o=="object"&&Array.isArray(o.plugins))t=t.concat(o.plugins);else if(typeof o=="object"&&o.postcssPlugin)t.push(o);else if(typeof o=="function")t.push(o);else if(typeof o!="object"||!o.parse&&!o.stringify)throw new Error(o+" is not a PostCSS plugin");return t}process(p,t={}){return this.plugins.length||t.parser||t.stringifier||t.syntax?new L(this,p,t):new r(this,p,t)}use(p){return this.plugins=this.plugins.concat(this.normalize([p])),this}}Y.exports=k,k.default=k,h.registerProcessor(k),_.registerProcessor(k)},6927:(Y,R,v)=>{v.d(R,{A:()=>w});var _=v(4244),L=v(6047),r=v(3229),h=v(2404),k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,t||[])).next())})};function w(p){return k(this,arguments,void 0,function*(t,o=null,a=null,f=null,C=null,A=null,u=null){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("CreateTheComposition",{json:t,ofTheConceptId:o,ofTheConceptUserId:a,mainKey:f,userId:C,accessId:A,sessionInformationId:u})).data}catch(b){(0,_.handleServiceWorkerException)(b)}let c=C??999,i=A??4,d=u??999,g=f??0,y=(0,L.o)();for(const b in t)if(typeof t[b]!="string"&&typeof t[b]!="number")if(o==null&&a==null){let x=g,N=yield(0,h.A)(b,"",!0,c,i,d);y=N,x=N.id,g=N.id,yield w(t[b],N.id,N.userId,x,C,A,u)}else{let x=o??999,N=a??999,B=g,O=yield(0,h.A)(b,"",!0,c,i,d);y=O,yield(0,r.q)(x,N,O.id,B),yield w(t[b],O.id,O.userId,B,C,A,u)}else{let x=o??999,N=a??10267,B=g,O=yield(0,h.A)(b,t[b].toString(),!1,c,i,d);yield(0,r.q)(x,N,O.id,B)}return y})}},6931:(Y,R,v)=>{v.d(R,{BG:()=>w,SL:()=>p,XZ:()=>k,ZJ:()=>r,iw:()=>h,pU:()=>t,y0:()=>L,yv:()=>_});const _=1,L=2,r=3,h=4,k=5,w=6,p=7,t=8},6948:(Y,R,v)=>{v.d(R,{D3:()=>A,El:()=>C,b8:()=>f,kH:()=>a,qI:()=>o,wh:()=>u});var _=v(6812),L=v(370),r=v(4244),h=v(5760),k=function(c,i,d,g){return new(d||(d=Promise))(function(y,b){function x(O){try{B(g.next(O))}catch(G){b(G)}}function N(O){try{B(g.throw(O))}catch(G){b(G)}}function B(O){var G;O.done?y(O.value):(G=O.value,G instanceof d?G:new d(function(F){F(G)})).then(x,N)}B((g=g.apply(c,[])).next())})};let w=10;class p{}let t=null;function o(c){const i=r.Logger.logfunction("openDatabase",[c,"indexdb"]);return p.db?(r.Logger.logUpdate(i),Promise.resolve(p.db)):t||(t=new Promise(function(d,g){let y=L.B.BASE_URL+"_FreeSchema"+L.B.BASE_APPLICATION;const b=indexedDB.open(y,w);b.onupgradeneeded=x=>{let N=x.target.result,B="concept",O="connection",G="settings";N.objectStoreNames.contains(B)&&N.deleteObjectStore(B),N.objectStoreNames.contains(O)&&N.deleteObjectStore(O),N.objectStoreNames.contains(G)&&N.deleteObjectStore(G),N.createObjectStore(B,{keyPath:"id"}),N.createObjectStore(O,{keyPath:"id"}),N.createObjectStore(G,{keyPath:"id"})},b.onsuccess=function(x){let N=x.target;p.db=N.result,r.Logger.logUpdate(i),d(p.db)},b.onerror=x=>{t=null,(0,h.ey)(i,"openDatabase",x),g(x)}}),t)}function a(c,i){const d=r.Logger.logfunction("UpdateToDatabase",[c,"indexdb"]);return new Promise(function(g,y){o(c).then(b=>{const x=b.transaction(c,"readwrite").objectStore(c).put(i);x.onsuccess=N=>{r.Logger.logUpdate(d),g(i)},x.onerror=N=>{let B={status:400,ok:!1,message:"Cannot Update to the database"+c,data:N,body:i};(0,h.ey)(d,"UpdateToDatabase",B),y(B)}}).catch(b=>{let x={status:400,ok:!1,message:"Cannot update to database because you cannot open the database",data:b};(0,h.ey)(d,"UpdateToDatabase",x),y(x)})})}function f(){const c=r.Logger.logfunction("GetLastSettingsFromDatabase",["indexdb"]);return new Promise(function(i,d){let g="settings";o(g).then(y=>{let b=y.transaction(g,"readwrite").objectStore(g).getAll();b.onsuccess=()=>{let x=new _.B(!1),N=b.result;for(let B=0;B<N.length;B++)x=N[B];r.Logger.logUpdate(c),i(x)},b.onerror=x=>{(0,h.ey)(c,"GetLastSettingsFromDatabase",x),d(x)}}).catch(y=>{let b={status:400,ok:!1,message:"Cannot get last object from database because you cannot open the database",data:y};(0,h.ey)(c,"GetLastSettingsFromDatabase",b),d(b)})})}function C(c){const i=r.Logger.logfunction("AiUpdateFlag",["indexdb"]);return new Promise(function(d,g){let y="settings";o(y).then(b=>{const x=b.transaction(y,"readwrite").objectStore(y).put(c);x.onsuccess=N=>{r.Logger.logUpdate(i),d(c)},x.onerror=N=>{let B={status:400,ok:!1,message:"Cannot update AI flag",data:N,body:c};(0,h.ey)(i,"AiUpdateFlag",B),g(B)}}).catch(b=>{let x={status:400,ok:!1,message:"Cannot update AI flag because you cannot open the database",data:b};(0,h.ey)(i,"AiUpdateFlag",x),g(x)})})}function A(c){return k(this,void 0,void 0,function*(){const i=r.Logger.logfunction("getObjectsFromIndexDb",[c,"indexdb"]);return new Promise(function(d,g){o(c).then(y=>{let b=[],x=y.transaction(c,"readwrite").objectStore(c).getAll();x.onsuccess=()=>{const N=x.result;for(let B=0;B<N.length;B++)b.push(N[B]);r.Logger.logUpdate(i),d(b)}}).catch(y=>{let b={status:400,ok:!1,message:"Cannot get objects from the database because you cannot open the database",data:y};(0,h.ey)(i,"getObjectsFromIndexDb",b),g(b)})})})}function u(c,i){const d=r.Logger.logfunction("removeFromDatabase",[c,"indexdb"]);return new Promise(function(g,y){o(c).then(b=>{const x=b.transaction(c,"readwrite").objectStore(c).delete(Number(i));x.onsuccess=function(N){r.Logger.logUpdate(d),g(i)},x.onerror=N=>{let B={status:400,ok:!1,message:"Cannot remove from the database"+c,data:N};(0,h.ey)(d,"removeFromDatabase",B),y(B)}}).catch(b=>{let x={status:400,ok:!1,message:"Cannot remove from the database because you cannot open the database",data:b,body:i};(0,h.ey)(d,"removeFromDatabase",x),y(x)})})}},6966:(Y,R,v)=>{let _=v(7793),L=v(145),r=v(3604),h=v(9577),k=v(3717),w=v(5644),p=v(3303),{isClean:t,my:o}=v(4151);v(6156);const a={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},f={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},C={Once:!0,postcssPlugin:!0,prepare:!0};function A(y){return typeof y=="object"&&typeof y.then=="function"}function u(y){let b=!1,x=a[y.type];return y.type==="decl"?b=y.prop.toLowerCase():y.type==="atrule"&&(b=y.name.toLowerCase()),b&&y.append?[x,x+"-"+b,0,x+"Exit",x+"Exit-"+b]:b?[x,x+"-"+b,x+"Exit",x+"Exit-"+b]:y.append?[x,0,x+"Exit"]:[x,x+"Exit"]}function c(y){let b;return b=y.type==="document"?["Document",0,"DocumentExit"]:y.type==="root"?["Root",0,"RootExit"]:u(y),{eventIndex:0,events:b,iterator:0,node:y,visitorIndex:0,visitors:[]}}function i(y){return y[t]=!1,y.nodes&&y.nodes.forEach(b=>i(b)),y}let d={};class g{get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}constructor(b,x,N){let B;if(this.stringified=!1,this.processed=!1,typeof x!="object"||x===null||x.type!=="root"&&x.type!=="document")if(x instanceof g||x instanceof k)B=i(x.root),x.map&&(N.map===void 0&&(N.map={}),N.map.inline||(N.map.inline=!1),N.map.prev=x.map);else{let O=h;N.syntax&&(O=N.syntax.parse),N.parser&&(O=N.parser),O.parse&&(O=O.parse);try{B=O(x,N)}catch(G){this.processed=!0,this.error=G}B&&!B[o]&&_.rebuild(B)}else B=i(x);this.result=new k(b,B,N),this.helpers={...d,postcss:d,result:this.result},this.plugins=this.processor.plugins.map(O=>typeof O=="object"&&O.prepare?{...O,...O.prepare(this.result)}:O)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(b){return this.async().catch(b)}finally(b){return this.async().then(b,b)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(b,x){let N=this.result.lastPlugin;try{x&&x.addToError(b),this.error=b,b.name!=="CssSyntaxError"||b.plugin?N.postcssVersion:(b.plugin=N.postcssPlugin,b.setMessage())}catch{}return b}prepareVisitors(){this.listeners={};let b=(x,N,B)=>{this.listeners[N]||(this.listeners[N]=[]),this.listeners[N].push([x,B])};for(let x of this.plugins)if(typeof x=="object")for(let N in x){if(!f[N]&&/^[A-Z]/.test(N))throw new Error(`Unknown event ${N} in ${x.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!C[N])if(typeof x[N]=="object")for(let B in x[N])b(x,B==="*"?N:N+"-"+B.toLowerCase(),x[N][B]);else typeof x[N]=="function"&&b(x,N,x[N])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let b=0;b<this.plugins.length;b++){let x=this.plugins[b],N=this.runOnRoot(x);if(A(N))try{await N}catch(B){throw this.handleError(B)}}if(this.prepareVisitors(),this.hasListener){let b=this.result.root;for(;!b[t];){b[t]=!0;let x=[c(b)];for(;x.length>0;){let N=this.visitTick(x);if(A(N))try{await N}catch(B){let O=x[x.length-1].node;throw this.handleError(B,O)}}}if(this.listeners.OnceExit)for(let[x,N]of this.listeners.OnceExit){this.result.lastPlugin=x;try{if(b.type==="document"){let B=b.nodes.map(O=>N(O,this.helpers));await Promise.all(B)}else await N(b,this.helpers)}catch(B){throw this.handleError(B)}}}return this.processed=!0,this.stringify()}runOnRoot(b){this.result.lastPlugin=b;try{if(typeof b=="object"&&b.Once){if(this.result.root.type==="document"){let x=this.result.root.nodes.map(N=>b.Once(N,this.helpers));return A(x[0])?Promise.all(x):x}return b.Once(this.result.root,this.helpers)}if(typeof b=="function")return b(this.result.root,this.result)}catch(x){throw this.handleError(x)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let b=this.result.opts,x=p;b.syntax&&(x=b.syntax.stringify),b.stringifier&&(x=b.stringifier),x.stringify&&(x=x.stringify);let N=new r(x,this.result.root,this.result.opts).generate();return this.result.css=N[0],this.result.map=N[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let b of this.plugins)if(A(this.runOnRoot(b)))throw this.getAsyncError();if(this.prepareVisitors(),this.hasListener){let b=this.result.root;for(;!b[t];)b[t]=!0,this.walkSync(b);if(this.listeners.OnceExit)if(b.type==="document")for(let x of b.nodes)this.visitSync(this.listeners.OnceExit,x);else this.visitSync(this.listeners.OnceExit,b)}return this.result}then(b,x){return this.async().then(b,x)}toString(){return this.css}visitSync(b,x){for(let[N,B]of b){let O;this.result.lastPlugin=N;try{O=B(x,this.helpers)}catch(G){throw this.handleError(G,x.proxyOf)}if(x.type!=="root"&&x.type!=="document"&&!x.parent)return!0;if(A(O))throw this.getAsyncError()}}visitTick(b){let x=b[b.length-1],{node:N,visitors:B}=x;if(N.type!=="root"&&N.type!=="document"&&!N.parent)return void b.pop();if(B.length>0&&x.visitorIndex<B.length){let[G,F]=B[x.visitorIndex];x.visitorIndex+=1,x.visitorIndex===B.length&&(x.visitors=[],x.visitorIndex=0),this.result.lastPlugin=G;try{return F(N.toProxy(),this.helpers)}catch(M){throw this.handleError(M,N)}}if(x.iterator!==0){let G,F=x.iterator;for(;G=N.nodes[N.indexes[F]];)if(N.indexes[F]+=1,!G[t])return G[t]=!0,void b.push(c(G));x.iterator=0,delete N.indexes[F]}let O=x.events;for(;x.eventIndex<O.length;){let G=O[x.eventIndex];if(x.eventIndex+=1,G===0)return void(N.nodes&&N.nodes.length&&(N[t]=!0,x.iterator=N.getIterator()));if(this.listeners[G])return void(x.visitors=this.listeners[G])}b.pop()}walkSync(b){b[t]=!0;let x=u(b);for(let N of x)if(N===0)b.nodes&&b.each(B=>{B[t]||this.walkSync(B)});else{let B=this.listeners[N];if(B&&this.visitSync(B,b.toProxy()))return}}warnings(){return this.sync().warnings()}}g.registerPostcss=y=>{d=y},Y.exports=g,g.default=g,w.registerLazyResult(g),L.registerLazyResult(g)},7015:(Y,R,v)=>{v.d(R,{Y:()=>C});var _=v(6700),L=v(4990),r=v(370),h=v(1317),k=v(5760),w=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,[])).next())})},p=v(1833),t=v(6715),o=v(4244),a=v(6759),f=function(A,u,c,i){return new(c||(c=Promise))(function(d,g){function y(N){try{x(i.next(N))}catch(B){g(B)}}function b(N){try{x(i.throw(N))}catch(B){g(B)}}function x(N){var B;N.done?d(N.value):(B=N.value,B instanceof c?B:new c(function(O){O(B)})).then(y,b)}x((i=i.apply(A,[])).next())})};class C{static CheckContains(u){for(var c=!1,i=0;i<this.conceptsSyncArray.length;i++)this.conceptsSyncArray[i].id==u.id&&(c=!0);return c}static SyncDataDelete(u){for(var c=0;c<this.conceptsSyncArray.length;c++)u==this.conceptsSyncArray[c].id&&this.conceptsSyncArray.splice(c,1);for(c=0;c<this.connectionSyncArray.length;c++)this.connectionSyncArray[c].ofTheConceptId!=u&&this.connectionSyncArray[c].toTheConceptId!=u&&this.connectionSyncArray[c].typeId!=u||this.connectionSyncArray.splice(c,1)}static CheckContainsConnection(u){for(var c=!1,i=0;i<this.connectionSyncArray.length;i++)this.connectionSyncArray[i].id==u.id&&(c=!0);return c}static AddConcept(u){this.conceptsSyncArray.push(u)}static RemoveConcept(u){for(var c=0;c<this.conceptsSyncArray.length;c++)this.conceptsSyncArray[c].id==u.id&&this.conceptsSyncArray.splice(c,1)}static AddConnection(u){this.connectionSyncArray.push(u)}static RemoveConnection(u){for(var c=0;c<this.connectionSyncArray.length;c++)this.connectionSyncArray[c].id==u.id&&this.connectionSyncArray.splice(c,1)}static SyncDataOnline(){return f(this,void 0,void 0,function*(){if(o.serviceWorker)try{return(yield(0,o.sendMessage)("SyncData__SyncDataOnline",{})).data}catch(u){(0,o.handleServiceWorkerException)(u)}for(let u=0;u<this.conceptsSyncArray.length;u++)p.I.AddConcept(this.conceptsSyncArray[u]);for(let u=0;u<this.connectionSyncArray.length;u++)t.d.AddConnection(this.connectionSyncArray[u]);if(this.conceptsSyncArray.length>0){let u=this.conceptsSyncArray.slice();this.conceptsSyncArray=[],(0,_.Y)(u)}if(this.connectionSyncArray.length>0){let u=this.connectionSyncArray.slice();this.connectionSyncArray=[],yield function(c){return w(this,void 0,void 0,function*(){let i=new L.N(0,0,0,0,0,0,0);try{var d=yield(0,h.Xr)(),g=JSON.stringify(c);const y=yield(0,h.Hh)(r.B.CreateTheConnectionUrl(),{method:"POST",headers:d,body:g});return y.ok?yield y.json():(0,k.ry)(y),i}catch(y){throw y}})}(u)}return a.a.clearAll(),"done"})}}C.conceptsSyncArray=[],C.connectionSyncArray=[]},7071:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(4646))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.ID,f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o.prototype.valueToString=function(){return"#"+w.prototype.valueToString.call(this)},o}(L.default);R.default=k,Y.exports=R.default},7149:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(8349))&&_.__esModule?_:{default:_},r=function(p,t){if(p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var o=h(t);if(o&&o.has(p))return o.get(p);var a={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in p)if(C!=="default"&&Object.prototype.hasOwnProperty.call(p,C)){var A=f?Object.getOwnPropertyDescriptor(p,C):null;A&&(A.get||A.set)?Object.defineProperty(a,C,A):a[C]=p[C]}return a.default=p,o&&o.set(p,a),a}(v(680));function h(p){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(h=function(a){return a?o:t})(p)}var k=function(p){return new L.default(p)};Object.assign(k,r),delete k.__esModule;var w=k;R.default=w,Y.exports=R.default},7154:(Y,R,v)=>{v.d(R,{v:()=>d});var _=v(830),L=v(9196),r=function(g,y,b,x){return new(b||(b=Promise))(function(N,B){function O(M){try{F(x.next(M))}catch(j){B(j)}}function G(M){try{F(x.throw(M))}catch(j){B(j)}}function F(M){var j;M.done?N(M.value):(j=M.value,j instanceof b?j:new b(function(W){W(j)})).then(O,G)}F((x=x.apply(g,[])).next())})};class h{static addNodeToTree(y){if(this.root==null)return this.root=y,this.root;this.root=this.root.addNode(y,this.root,this.root.height)}static addConceptToTree(y){var b=new L.x(y.id,y,null,null);new L.x(y.characterValue,y,null,null),this.addNodeToTree(b)}static waitForDataToLoad(){return r(this,void 0,void 0,function*(){return new Promise((y,b)=>{this.checkFlag(y),setTimeout(()=>{b("not")},25e3)})})}static checkFlag(y){if(_.B.isLocalDataLoaded)return y("done");setTimeout(h.checkFlag,1e3,y)}static getNodeFromTree(y){return r(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(y,this.root):null})}static getCharacterAndTypeFromTree(y,b){return this.root?this.root.getFromNodeWithCharacterAndType(y,b,this.root):this.root}static updateSyncStatus(y){return this.root?this.root.updateNodeSyncStatus(y,!0,this.root):this.root}static removeNodeFromTree(y){return r(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,y))})}}h.root=null;var k=function(g,y,b,x){return new(b||(b=Promise))(function(N,B){function O(M){try{F(x.next(M))}catch(j){B(j)}}function G(M){try{F(x.throw(M))}catch(j){B(j)}}function F(M){var j;M.done?N(M.value):(j=M.value,j instanceof b?j:new b(function(W){W(j)})).then(O,G)}F((x=x.apply(g,[])).next())})};class w{static waitForDataToLoad(){return k(this,void 0,void 0,function*(){return new Promise((y,b)=>{this.checkFlag(y),setTimeout(()=>{b("not")},25e3)})})}static checkFlag(y){if(_.B.isLocalCharacterLoaded)return y("done");setTimeout(w.checkFlag,1e3,y)}static addNodeToTree(y){return k(this,void 0,void 0,function*(){return this.LocalCharacterRoot==null?(this.LocalCharacterRoot=y,this.LocalCharacterRoot):(this.LocalCharacterRoot=this.LocalCharacterRoot.addCharacterNode(y,this.LocalCharacterRoot,this.LocalCharacterRoot.height),this.LocalCharacterRoot)})}static addConceptToTree(y){if(y.characterValue!=""){var b=new L.x(y.characterValue,y,null,null);this.addNodeToTree(b)}}static getNodeFromTree(y){return this.LocalCharacterRoot?this.LocalCharacterRoot.getCharacterFromNode(y,this.LocalCharacterRoot):this.LocalCharacterRoot}static getCharacterAndTypeFromTree(y,b){return k(this,void 0,void 0,function*(){return this.LocalCharacterRoot?this.LocalCharacterRoot.getFromNodeWithCharacterAndType(y,b,this.LocalCharacterRoot):this.LocalCharacterRoot})}static getCharacterAndCategoryFromTree(y,b){return k(this,void 0,void 0,function*(){return this.LocalCharacterRoot?this.LocalCharacterRoot.getFromNodeWithCharacterAndCategory(y,b,this.LocalCharacterRoot):this.LocalCharacterRoot})}static removeConceptType(y,b){this.LocalCharacterRoot&&(this.LocalCharacterRoot=this.LocalCharacterRoot.removeNodeWithVariants(this.LocalCharacterRoot,y,b))}}w.LocalCharacterRoot=null;var p=function(g,y,b,x){return new(b||(b=Promise))(function(N,B){function O(M){try{F(x.next(M))}catch(j){B(j)}}function G(M){try{F(x.throw(M))}catch(j){B(j)}}function F(M){var j;M.done?N(M.value):(j=M.value,j instanceof b?j:new b(function(W){W(j)})).then(O,G)}F((x=x.apply(g,[])).next())})};class t{static addNodeToTree(y){return p(this,void 0,void 0,function*(){return this.LocalTypeRoot==null?(this.LocalTypeRoot=y,this.LocalTypeRoot):(this.LocalTypeRoot=this.LocalTypeRoot.addTypeNode(y,this.LocalTypeRoot,this.LocalTypeRoot.height),this.LocalTypeRoot)})}static addConceptToTree(y){if(y.typeId!=0){var b=new L.x(y.typeId,y,null,null);this.addNodeToTree(b)}}static removeConceptType(y,b){this.LocalTypeRoot&&(this.LocalTypeRoot=this.LocalTypeRoot.removeNodeWithVariants(this.LocalTypeRoot,y,b))}static getNodeFromTree(y){return this.LocalTypeRoot?this.LocalTypeRoot.getFromNode(y,this.LocalTypeRoot):this.LocalTypeRoot}static getTypeVariantsFromTree(y){var b=this.getNodeFromTree(y),x=[];if(b){x.push(b?.value);for(let N=0;N<b.variants.length;N++)x.push(b.variants[N].value);return x}}static waitForDataToLoad(){return p(this,void 0,void 0,function*(){return new Promise((y,b)=>{this.checkFlag(y),setTimeout(()=>{b("not")},25e3)})})}static checkFlag(y){if(_.B.isLocalTypeLoaded)return y("done");setTimeout(t.checkFlag,1e3,y)}static getTypeVariantsFromTreeWithUserId(y,b){return p(this,void 0,void 0,function*(){var x=[],N=this.getNodeFromTree(y);if(N){N.value.userId!=b&&N.value.userId!=999||x.push(N?.value);for(let B=0;B<N.variants.length;B++)N.variants[B].value.userId!=b&&N.value.userId!=999||x.push(N.variants[B].value)}return x})}}t.LocalTypeRoot=null;var o=v(9911),a=v(1833),f=v(1549),C=v(3967),A=v(7580),u=v(4244),c=v(8444),i=function(g,y,b,x){return new(b||(b=Promise))(function(N,B){function O(M){try{F(x.next(M))}catch(j){B(j)}}function G(M){try{F(x.throw(M))}catch(j){B(j)}}function F(M){var j;M.done?N(M.value):(j=M.value,j instanceof b?j:new b(function(W){W(j)})).then(O,G)}F((x=x.apply(g,[])).next())})};class d{constructor(){this.name="conceptsArray"}static AddConcept(y){y.id!=0&&(h.addConceptToTree(y),w.addConceptToTree(y),t.addConceptToTree(y),this.localconceptsArray.push(y))}static AddPermanentConcept(y){y.id!=0&&(h.removeNodeFromTree(y.ghostId),w.removeConceptType(y.characterValue,y.ghostId),t.removeConceptType(y.typeId,y.ghostId),f.G.addConceptToTree(y),a.I.AddConcept(y),(0,u.AddGhostConcept)(y,y.userId,c.b.sessionId))}static RemoveConcept(y){return i(this,void 0,void 0,function*(){try{y.id!=0&&(h.removeNodeFromTree(y.ghostId),w.removeConceptType(y.characterValue,y.ghostId),t.removeConceptType(y.typeId,y.ghostId))}catch(b){throw b}})}static RemoveConceptById(y){return i(this,void 0,void 0,function*(){try{let b=yield d.GetConcept(y);b.id!=0&&(h.removeNodeFromTree(y),w.removeConceptType(b.characterValue,b.ghostId),t.removeConceptType(b.typeId,b.ghostId),A.H.RemoveConcept(b))}catch(b){throw b}})}static AddConceptToMemory(y){y.id!=0&&(h.addConceptToTree(y),w.addConceptToTree(y),t.addConceptToTree(y))}static GetConcept(y){return i(this,void 0,void 0,function*(){var b=(0,o.u)(),x=yield h.getNodeFromTree(y);if(x?.value){var N=x.value;N&&(b=N)}return b})}static UpdateConceptSyncStatus(y){return i(this,void 0,void 0,function*(){h.updateSyncStatus(y)})}static GetConceptByGhostId(y){return i(this,void 0,void 0,function*(){var b=(0,o.u)(),x=yield f.G.getNodeFromTree(y);if(x?.value){var N=x.value;N&&(b=N)}return b})}static GetConceptByCharacter(y){return i(this,void 0,void 0,function*(){var b=(0,o.u)(),x=w.getNodeFromTree(y);return x&&(b=x.value),b})}static GetConceptByCharacterAndTypeLocal(y,b){return i(this,void 0,void 0,function*(){var x=(0,o.u)(),N=yield w.getCharacterAndTypeFromTree(y,b);return N&&(x=N.value),x})}static GetConceptByCharacterAndCategoryLocal(y,b){return i(this,void 0,void 0,function*(){var x=(0,o.u)(),N=yield w.getCharacterAndCategoryFromTree(y,b);return N&&(x=N.value),x})}static GetConceptsByTypeId(y){let b=[];for(var x=0;x<this.localconceptsArray.length;x++)this.localconceptsArray[x].typeId==y&&b.push(this.localconceptsArray[x]);return b}static GetConceptsByTypeIdAndUser(y,b){return i(this,void 0,void 0,function*(){let x=[];return x=yield t.getTypeVariantsFromTreeWithUserId(y,b),x})}static ClearData(){return i(this,void 0,void 0,function*(){this.localconceptsArray=[],C.G.connectionArray=[]})}getName(){return this.name}}d.localconceptsArray=[]},7258:(Y,R,v)=>{v.d(R,{S5:()=>p,kH:()=>o,qI:()=>w});var _=v(5760),L=v(4244),r=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})};let h=10;class k{}function w(a){const f=L.Logger.logfunction("openDatabase",arguments);return new Promise(function(C,A){k.db&&(L.Logger.logUpdate(f),C(k.db));let u=L.BaseUrl.BASE_URL+"_FreeSchemaLocal"+L.BaseUrl.BASE_APPLICATION;const c=indexedDB.open(u,h);c.onupgradeneeded=i=>{var d=i.target.result,g="localconcept",y="localconnection",b="localid";d.objectStoreNames.contains(g)&&d.deleteObjectStore(g),d.objectStoreNames.contains(y)&&d.deleteObjectStore(y),d.objectStoreNames.contains(b)&&d.deleteObjectStore(b),!d.objectStoreNames.contains(g)&&(d.createObjectStore(g,{keyPath:"id"}).transaction.oncomplete=x=>{}),d.objectStoreNames.contains(y)||(d.createObjectStore(y,{keyPath:"id"}).transaction.oncomplete=x=>{}),d.objectStoreNames.contains(b)||(d.createObjectStore(b,{keyPath:"id"}).transaction.oncomplete=x=>{t(b,{id:0,value:-100}),t(b,{id:1,value:-200}),t(b,{id:3,value:L.BaseUrl.getRandomizer()})}),C(d)},c.onerror=i=>{indexedDB.deleteDatabase(u),w(a),(0,_.ey)(f,"openDatabase",i),A(i)},c.onsuccess=function(i){var d=i.target;k.db=d.result,L.Logger.logUpdate(f),C(k.db)}})}function p(a){var f=arguments;return r(this,void 0,void 0,function*(){const C=L.Logger.logfunction("getObjectsFromLocalIndexDb",f);return new Promise(function(A,u){w(a).then(c=>{var i=[],d=c.transaction(a,"readwrite").objectStore(a).getAll();d.onsuccess=()=>{const g=d.result;for(var y=0;y<g.length;y++)i.push(g[y]);L.Logger.logUpdate(C),A(i)}}).catch(c=>{let i={status:400,ok:!1,message:"Cannot get objects from database because you cannot open the Local database",data:c};(0,_.ey)(C,"getObjectsFromLocalIndexDb",i),u(i)})})})}function t(a,f){const C=L.Logger.logfunction("storeToDatabase",[a,"localindexdb"]);return new Promise(function(A,u){w(a).then(c=>{const i=c.transaction(a,"readwrite").objectStore(a).add(f);i.onsuccess=d=>{L.Logger.logUpdate(C),A(f)},i.onerror=d=>{let g={status:400,ok:!1,message:"Cannot store to the Local database "+a,data:d,body:f};(0,_.ey)(C,"storeToDatabase",g),u(g)}}).catch(c=>{let i={status:400,ok:!1,message:"Cannot store to database because you cannot open the Local database",data:c};(0,_.ey)(C,"storeToDatabase",i),u(i)})})}function o(a,f){const C=L.Logger.logfunction("UpdateToDatabase",arguments);return new Promise(function(A,u){w(a).then(c=>{const i=c.transaction(a,"readwrite").objectStore(a).put(f);i.onsuccess=d=>{L.Logger.logUpdate(C),A(f)},i.onerror=d=>{let g={status:400,ok:!1,message:"Cannot Update to the Local database"+a,data:d,body:f};(0,_.ey)(C,"UpdateToDatabase",g),u(g)}}).catch(c=>{let i={status:400,ok:!1,message:"Cannot update to database because you cannot open the Local database",data:c};(0,_.ey)(C,"UpdateToDatabase",i),u(i)})})}},7324:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(3631))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.PSEUDO,f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o.prototype.toString=function(){var a=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),a,this.rawSpaceAfter].join("")},o}(L.default);R.default=k,Y.exports=R.default},7580:(Y,R,v)=>{v.d(R,{H:()=>c});var _=v(370),L=v(1317),r=v(8444),h=v(4244),k=v(5760),w=function(i,d,g,y){return new(g||(g=Promise))(function(b,x){function N(G){try{O(y.next(G))}catch(F){x(F)}}function B(G){try{O(y.throw(G))}catch(F){x(F)}}function O(G){var F;G.done?b(G.value):(F=G.value,F instanceof g?F:new g(function(M){M(F)})).then(N,B)}O((y=y.apply(i,d||[])).next())})};const p=(i,d,...g)=>w(void 0,[i,d,...g],void 0,function*(y,b,x=!0){let N={concepts:[],connections:[]};try{let B={concepts:y,connections:b};const O=yield(0,L.ab)("application/json",r.b.BearerAccessToken);O.Randomizer=_.B.getRandomizer().toString();const G=yield(0,L.Hh)(_.B.CreateGhostConceptApiUrl(x),{method:"POST",headers:O,body:JSON.stringify(B)});if(!G.ok)throw(0,k.ry)(G),new Error(`Error! status: ${G.status}`);const F=yield G.json();return N.concepts=F.concepts,N.connections=F.connections,N}catch(B){throw B}});function t(i,d){const g=[];for(let y=0;y<i.length;y+=d){const b=i.slice(y,y+d);g.push(b)}return g}const o=(...i)=>w(void 0,[...i],void 0,function*(d=[]){return yield Promise.all(d.map(g=>{let y=JSON.parse(JSON.stringify(g));return delete y.type,delete y.ofConcept,delete y.toConcept,y}))});var a=v(7258),f=v(7154),C=v(3967),A=v(6759),u=function(i,d,g,y){return new(g||(g=Promise))(function(b,x){function N(G){try{O(y.next(G))}catch(F){x(F)}}function B(G){try{O(y.throw(G))}catch(F){x(F)}}function O(G){var F;G.done?b(G.value):(F=G.value,F instanceof g?F:new g(function(M){M(F)})).then(N,B)}O((y=y.apply(i,d||[])).next())})};class c{static CheckContains(d){for(var g=!1,y=0;y<this.conceptsSyncArray.length;y++)this.conceptsSyncArray[y].id==d.id&&(g=!0);return g}static SyncDataDelete(d){for(var g=0;g<this.conceptsSyncArray.length;g++)d==this.conceptsSyncArray[g].id&&this.conceptsSyncArray.splice(g,1);for(g=0;g<this.connectionSyncArray.length;g++)this.connectionSyncArray[g].ofTheConceptId!=d&&this.connectionSyncArray[g].toTheConceptId!=d&&this.connectionSyncArray[g].typeId!=d||this.connectionSyncArray.splice(g,1)}static CheckContainsConnection(d){for(var g=!1,y=0;y<this.connectionSyncArray.length;y++)this.connectionSyncArray[y].id==d.id&&(g=!0);return g}static AddConcept(d){try{let g=!1;c.CheckIfTheConceptIdExists(d.id,this.conceptsSyncArray).id!=0&&(g=!0),g||this.conceptsSyncArray.push(d)}catch(g){throw g}}static RemoveConcept(d){for(var g=0;g<this.conceptsSyncArray.length;g++)this.conceptsSyncArray[g].id==d.id&&this.conceptsSyncArray.splice(g,1)}static SyncDataOnlineWithoutAuth(d,g){return u(this,arguments,void 0,function*(y,b,x=!1){return c.SyncDataOnline(y,b,x)})}static SyncDataOnline(d,g){return u(this,arguments,void 0,function*(y,b,x=!0){let N=performance.now();setTimeout(()=>{},5e3);try{if(h.serviceWorker)try{return(yield(0,h.sendMessage)("LocalSyncData__SyncDataOnline",{transactionId:y,withAuth:x})).data}catch(W){(0,h.handleServiceWorkerException)(W)}let B=[],O=[];if(y&&this.transactionCollections.some(W=>W.id==y)){const W=this.transactionCollections.find($=>$.id==y);if(this.transactionCollections=this.transactionCollections.filter($=>$.id!=y),this.transactionCollections=this.transactionCollections.filter($=>new Date($.createdDate).getTime()>new Date().getTime()-6048e5),!W)return;B=W.data.concepts.slice(),O=W.data.connections.slice()}else Array.isArray(b?.concepts)&&Array.isArray(b?.connections)?(B=b.concepts.slice(),O=b.connections.slice(),this.conceptsSyncArray=this.conceptsSyncArray.filter(W=>b.concepts.some(K=>W.id==K.id||W.ghostId==K.ghostId)),this.connectionSyncArray=this.connectionSyncArray.filter(W=>b.connections.some(K=>W.id==K.id||W.ghostId==K.ghostId))):(B=this.conceptsSyncArray.slice()||[],O=this.connectionSyncArray.slice()||[],this.connectionSyncArray=[],this.conceptsSyncArray=[]);let G=[];for(let W=0;W<B.length;W++)G.push(B[W]),yield f.v.UpdateConceptSyncStatus(B[W].id);if(G.length===0&&O.length===0)return B;yield this.UpdateConceptListToIncludeRelatedConcepts(O,G);let F=yield function(W,$){return w(this,arguments,void 0,function*(K,te,ae=!0){const z=h.Logger.logfunction("CreateTheGhostConceptApi",[K.length,te.length]);try{let ce={concepts:[],connections:[]};if(K.length===0&&te.length===0)return h.Logger.logUpdate(z),ce;const oe=yield o(K),J=yield o(te);if(K.length+te.length<=300){const H=yield p(oe,J,ae);return Array.isArray(H?.concepts)&&(ce.concepts=[...ce.concepts,...H.concepts]),Array.isArray(H?.connections)&&(ce.connections=[...ce.connections,...H.connections]),h.Logger.logUpdate(z),ce}const ee=t(oe,300),ne=t(J,300);for(let H=0;H<ee.length;H++){const re=ee[H],le=yield p(re,[],ae);Array.isArray(le?.concepts)&&(ce.concepts=[...ce.concepts,...le.concepts]),Array.isArray(le?.connections)&&(ce.connections=[...ce.connections,...le.connections])}for(let H=0;H<ne.length;H++){const re=ne[H],le=yield p([],re,ae);Array.isArray(le?.concepts)&&(ce.concepts=[...ce.concepts,...le.concepts]),Array.isArray(le?.connections)&&(ce.connections=[...ce.connections,...le.connections])}return h.Logger.logUpdate(z),ce}catch(ie){throw(0,k.ey)(z,"CreateTheGhostConceptApi",ie),ie}})}(G,O,x),M=F.concepts,j=F.connections;for(let W=0;W<M.length;W++)f.v.AddPermanentConcept(M[W]);for(let W=0;W<j.length;W++)C.G.AddPermanentConnection(j[W]);return A.a.clearAll(),B}catch(B){throw h.Logger.logError(N,"unknown",void 0,"unknown",void 0,500,B,"SyncDataOnline",[],"unknown",void 0),B}})}static ConvertGhostIdsInConnections(d){var g,y,b;for(let x=0;x<d.length;x++){let N=d[x].ofTheConceptId,B=d[x].toTheConceptId,O=d[x].typeId,G=(g=c.ghostIdMap.get(N))!==null&&g!==void 0?g:N,F=(y=c.ghostIdMap.get(B))!==null&&y!==void 0?y:B,M=(b=c.ghostIdMap.get(O))!==null&&b!==void 0?b:O;d[x].ofTheConceptId=G,d[x].toTheConceptId=F,d[x].typeId=M}}static UpdateConceptListToIncludeRelatedConcepts(d,g){return u(this,void 0,void 0,function*(){for(let y=0;y<d.length;y++){let b=d[y].ofTheConceptId,x=d[y].toTheConceptId,N=d[y].typeId;if(b<0){let B=this.CheckIfTheConceptIdExists(b,g);B.id==0&&(B=yield f.v.GetConceptByGhostId(b),B.id!=0?B.id!=B.ghostId&&(d[y].ofTheConceptId=B.id):(B=yield f.v.GetConcept(b),this.AddConceptIfDoesNotExist(B,g)))}if(x<0){let B=this.CheckIfTheConceptIdExists(x,g);B.id==0&&(B=yield f.v.GetConceptByGhostId(x),B.id!=0?B.id!=B.ghostId&&(d[y].toTheConceptId=B.id):(B=yield f.v.GetConcept(x),this.AddConceptIfDoesNotExist(B,g)))}if(N<0){let B=this.CheckIfTheConceptIdExists(N,g);B.id==0&&(B=yield f.v.GetConceptByGhostId(N),B.id!=0?B.id!=B.ghostId&&(d[y].typeId=B.id):(B=yield f.v.GetConcept(N),this.AddConceptIfDoesNotExist(B,g)))}}})}static AddConceptIfDoesNotExist(d,g=[]){let y=!1;for(let b=0;b<g.length;b++)d.ghostId==g[b].ghostId&&(y=!0);y||g.push(d)}static CheckIfTheConceptIdExists(d,g=[]){let y=(0,h.CreateDefaultLConcept)();for(let b=0;b<g.length;b++)d!=g[b].ghostId&&d!=g[b].id||(y=g[b]);return y}static AddConnection(d){this.connectionSyncArray.push(d)}static RemoveConnection(d){for(var g=0;g<this.connectionSyncArray.length;g++)this.connectionSyncArray[g].id==d.id&&this.connectionSyncArray.splice(g,1)}static RemoveConnectionById(d){for(var g=0;g<this.connectionSyncArray.length;g++)this.connectionSyncArray[g].id==d&&this.connectionSyncArray.splice(g,1)}static syncDataLocalDb(){return u(this,void 0,void 0,function*(){if(this.conceptsSyncArray.length>0){for(let d=0;d<this.conceptsSyncArray.length;d++)(0,a.kH)("localconcept",this.conceptsSyncArray[d]);this.conceptsSyncArray=[]}if(this.connectionSyncArray.length>0){for(let d=0;d<this.connectionSyncArray.length;d++)(0,a.kH)("localconnection",this.connectionSyncArray[d]);this.connectionSyncArray=[]}return"done"})}static initializeTransaction(d){return u(this,void 0,void 0,function*(){try{if(h.serviceWorker)try{return(yield(0,h.sendMessage)("LocalSyncData__initializeTransaction",{transactionId:d})).data}catch(g){(0,h.handleServiceWorkerException)(g)}if(this.transactionCollections.some(g=>g.id==d))return;this.transactionCollections.push({id:d,data:{concepts:[],connections:[]},createdDate:new Date().toISOString()})}catch{}})}static markTransactionActions(d,g){return u(this,void 0,void 0,function*(){try{if(h.serviceWorker)try{return(yield(0,h.sendMessage)("LocalSyncData__markTransactionActions",{transactionId:d,actions:g})).data}catch(y){(0,h.handleServiceWorkerException)(y)}this.transactionCollections=this.transactionCollections.map(y=>y.id==d?Object.assign(Object.assign({},y),{data:JSON.parse(JSON.stringify(g))}):y),this.conceptsSyncArray=this.conceptsSyncArray.filter(y=>!g.concepts.some(b=>b.id==y.id||b.ghostId==y.id)),this.connectionSyncArray=this.connectionSyncArray.filter(y=>!g.connections.some(b=>b.id==y.id||b.ghostId==y.id))}catch{}})}static rollbackTransaction(d,g){return u(this,void 0,void 0,function*(){try{if(h.serviceWorker)try{return(yield(0,h.sendMessage)("LocalSyncData__rollbackTransaction",{transactionId:d,actions:g})).data}catch(y){(0,h.handleServiceWorkerException)(y)}if(this.transactionCollections.some(y=>y.id==d))return;this.transactionCollections=this.transactionCollections.filter(y=>y.id!=d)}catch{}})}}c.conceptsSyncArray=[],c.connectionSyncArray=[],c.ghostIdMap=new Map,c.transactionCollections=[]},7668:Y=>{const R={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};class v{constructor(L){this.builder=L}atrule(L,r){let h="@"+L.name,k=L.params?this.rawValue(L,"params"):"";if(L.raws.afterName!==void 0?h+=L.raws.afterName:k&&(h+=" "),L.nodes)this.block(L,h+k);else{let w=(L.raws.between||"")+(r?";":"");this.builder(h+k+w,L)}}beforeAfter(L,r){let h;h=L.type==="decl"?this.raw(L,null,"beforeDecl"):L.type==="comment"?this.raw(L,null,"beforeComment"):r==="before"?this.raw(L,null,"beforeRule"):this.raw(L,null,"beforeClose");let k=L.parent,w=0;for(;k&&k.type!=="root";)w+=1,k=k.parent;if(h.includes(`
`)){let p=this.raw(L,null,"indent");if(p.length)for(let t=0;t<w;t++)h+=p}return h}block(L,r){let h,k=this.raw(L,"between","beforeOpen");this.builder(r+k+"{",L,"start"),L.nodes&&L.nodes.length?(this.body(L),h=this.raw(L,"after")):h=this.raw(L,"after","emptyBody"),h&&this.builder(h),this.builder("}",L,"end")}body(L){let r=L.nodes.length-1;for(;r>0&&L.nodes[r].type==="comment";)r-=1;let h=this.raw(L,"semicolon");for(let k=0;k<L.nodes.length;k++){let w=L.nodes[k],p=this.raw(w,"before");p&&this.builder(p),this.stringify(w,r!==k||h)}}comment(L){let r=this.raw(L,"left","commentLeft"),h=this.raw(L,"right","commentRight");this.builder("/*"+r+L.text+h+"*/",L)}decl(L,r){let h=this.raw(L,"between","colon"),k=L.prop+h+this.rawValue(L,"value");L.important&&(k+=L.raws.important||" !important"),r&&(k+=";"),this.builder(k,L)}document(L){this.body(L)}raw(L,r,h){let k;if(h||(h=r),r&&(k=L.raws[r],k!==void 0))return k;let w=L.parent;if(h==="before"&&(!w||w.type==="root"&&w.first===L||w&&w.type==="document"))return"";if(!w)return R[h];let p=L.root();if(p.rawCache||(p.rawCache={}),p.rawCache[h]!==void 0)return p.rawCache[h];if(h==="before"||h==="after")return this.beforeAfter(L,h);{let o="raw"+((t=h)[0].toUpperCase()+t.slice(1));this[o]?k=this[o](p,L):p.walk(a=>{if(k=a.raws[r],k!==void 0)return!1})}var t;return k===void 0&&(k=R[h]),p.rawCache[h]=k,k}rawBeforeClose(L){let r;return L.walk(h=>{if(h.nodes&&h.nodes.length>0&&h.raws.after!==void 0)return r=h.raws.after,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawBeforeComment(L,r){let h;return L.walkComments(k=>{if(k.raws.before!==void 0)return h=k.raws.before,h.includes(`
`)&&(h=h.replace(/[^\n]+$/,"")),!1}),h===void 0?h=this.raw(r,null,"beforeDecl"):h&&(h=h.replace(/\S/g,"")),h}rawBeforeDecl(L,r){let h;return L.walkDecls(k=>{if(k.raws.before!==void 0)return h=k.raws.before,h.includes(`
`)&&(h=h.replace(/[^\n]+$/,"")),!1}),h===void 0?h=this.raw(r,null,"beforeRule"):h&&(h=h.replace(/\S/g,"")),h}rawBeforeOpen(L){let r;return L.walk(h=>{if(h.type!=="decl"&&(r=h.raws.between,r!==void 0))return!1}),r}rawBeforeRule(L){let r;return L.walk(h=>{if(h.nodes&&(h.parent!==L||L.first!==h)&&h.raws.before!==void 0)return r=h.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),r&&(r=r.replace(/\S/g,"")),r}rawColon(L){let r;return L.walkDecls(h=>{if(h.raws.between!==void 0)return r=h.raws.between.replace(/[^\s:]/g,""),!1}),r}rawEmptyBody(L){let r;return L.walk(h=>{if(h.nodes&&h.nodes.length===0&&(r=h.raws.after,r!==void 0))return!1}),r}rawIndent(L){if(L.raws.indent)return L.raws.indent;let r;return L.walk(h=>{let k=h.parent;if(k&&k!==L&&k.parent&&k.parent===L&&h.raws.before!==void 0){let w=h.raws.before.split(`
`);return r=w[w.length-1],r=r.replace(/\S/g,""),!1}}),r}rawSemicolon(L){let r;return L.walk(h=>{if(h.nodes&&h.nodes.length&&h.last.type==="decl"&&(r=h.raws.semicolon,r!==void 0))return!1}),r}rawValue(L,r){let h=L[r],k=L.raws[r];return k&&k.value===h?k.raw:h}root(L){this.body(L),L.raws.after&&this.builder(L.raws.after)}rule(L){this.block(L,this.rawValue(L,"selector")),L.raws.ownSemicolon&&this.builder(L.raws.ownSemicolon,L,"end")}stringify(L,r){if(!this[L.type])throw new Error("Unknown AST node type "+L.type+". Maybe you need to change PostCSS stringifier.");this[L.type](L,r)}}Y.exports=v,v.default=v},7762:(Y,R,v)=>{function _(L,r="DESC"){return r=="ASC"?L.sort(function(h,k){return h.id-k.id}):L.sort(function(h,k){return k.id-h.id}),L}v.d(R,{X:()=>_})},7793:(Y,R,v)=>{let _,L,r,h,k=v(9371),w=v(5238),p=v(3152),{isClean:t,my:o}=v(4151);function a(A){return A.map(u=>(u.nodes&&(u.nodes=a(u.nodes)),delete u.source,u))}function f(A){if(A[t]=!1,A.proxyOf.nodes)for(let u of A.proxyOf.nodes)f(u)}class C extends p{get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}append(...u){for(let c of u){let i=this.normalize(c,this.last);for(let d of i)this.proxyOf.nodes.push(d)}return this.markDirty(),this}cleanRaws(u){if(super.cleanRaws(u),this.nodes)for(let c of this.nodes)c.cleanRaws(u)}each(u){if(!this.proxyOf.nodes)return;let c,i,d=this.getIterator();for(;this.indexes[d]<this.proxyOf.nodes.length&&(c=this.indexes[d],i=u(this.proxyOf.nodes[c],c),i!==!1);)this.indexes[d]+=1;return delete this.indexes[d],i}every(u){return this.nodes.every(u)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let u=this.lastEach;return this.indexes[u]=0,u}getProxyProcessor(){return{get:(u,c)=>c==="proxyOf"?u:u[c]?c==="each"||typeof c=="string"&&c.startsWith("walk")?(...i)=>u[c](...i.map(d=>typeof d=="function"?(g,y)=>d(g.toProxy(),y):d)):c==="every"||c==="some"?i=>u[c]((d,...g)=>i(d.toProxy(),...g)):c==="root"?()=>u.root().toProxy():c==="nodes"?u.nodes.map(i=>i.toProxy()):c==="first"||c==="last"?u[c].toProxy():u[c]:u[c],set:(u,c,i)=>(u[c]===i||(u[c]=i,c!=="name"&&c!=="params"&&c!=="selector"||u.markDirty()),!0)}}index(u){return typeof u=="number"?u:(u.proxyOf&&(u=u.proxyOf),this.proxyOf.nodes.indexOf(u))}insertAfter(u,c){let i,d=this.index(u),g=this.normalize(c,this.proxyOf.nodes[d]).reverse();d=this.index(u);for(let y of g)this.proxyOf.nodes.splice(d+1,0,y);for(let y in this.indexes)i=this.indexes[y],d<i&&(this.indexes[y]=i+g.length);return this.markDirty(),this}insertBefore(u,c){let i,d=this.index(u),g=d===0&&"prepend",y=this.normalize(c,this.proxyOf.nodes[d],g).reverse();d=this.index(u);for(let b of y)this.proxyOf.nodes.splice(d,0,b);for(let b in this.indexes)i=this.indexes[b],d<=i&&(this.indexes[b]=i+y.length);return this.markDirty(),this}normalize(u,c){if(typeof u=="string")u=a(L(u).nodes);else if(u===void 0)u=[];else if(Array.isArray(u)){u=u.slice(0);for(let i of u)i.parent&&i.parent.removeChild(i,"ignore")}else if(u.type==="root"&&this.type!=="document"){u=u.nodes.slice(0);for(let i of u)i.parent&&i.parent.removeChild(i,"ignore")}else if(u.type)u=[u];else if(u.prop){if(u.value===void 0)throw new Error("Value field is missed in node creation");typeof u.value!="string"&&(u.value=String(u.value)),u=[new w(u)]}else if(u.selector||u.selectors)u=[new h(u)];else if(u.name)u=[new _(u)];else{if(!u.text)throw new Error("Unknown node type in node creation");u=[new k(u)]}return u.map(i=>(i[o]||C.rebuild(i),(i=i.proxyOf).parent&&i.parent.removeChild(i),i[t]&&f(i),i.raws||(i.raws={}),i.raws.before===void 0&&c&&c.raws.before!==void 0&&(i.raws.before=c.raws.before.replace(/\S/g,"")),i.parent=this.proxyOf,i))}prepend(...u){u=u.reverse();for(let c of u){let i=this.normalize(c,this.first,"prepend").reverse();for(let d of i)this.proxyOf.nodes.unshift(d);for(let d in this.indexes)this.indexes[d]=this.indexes[d]+i.length}return this.markDirty(),this}push(u){return u.parent=this,this.proxyOf.nodes.push(u),this}removeAll(){for(let u of this.proxyOf.nodes)u.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(u){let c;u=this.index(u),this.proxyOf.nodes[u].parent=void 0,this.proxyOf.nodes.splice(u,1);for(let i in this.indexes)c=this.indexes[i],c>=u&&(this.indexes[i]=c-1);return this.markDirty(),this}replaceValues(u,c,i){return i||(i=c,c={}),this.walkDecls(d=>{c.props&&!c.props.includes(d.prop)||c.fast&&!d.value.includes(c.fast)||(d.value=d.value.replace(u,i))}),this.markDirty(),this}some(u){return this.nodes.some(u)}walk(u){return this.each((c,i)=>{let d;try{d=u(c,i)}catch(g){throw c.addToError(g)}return d!==!1&&c.walk&&(d=c.walk(u)),d})}walkAtRules(u,c){return c?u instanceof RegExp?this.walk((i,d)=>{if(i.type==="atrule"&&u.test(i.name))return c(i,d)}):this.walk((i,d)=>{if(i.type==="atrule"&&i.name===u)return c(i,d)}):(c=u,this.walk((i,d)=>{if(i.type==="atrule")return c(i,d)}))}walkComments(u){return this.walk((c,i)=>{if(c.type==="comment")return u(c,i)})}walkDecls(u,c){return c?u instanceof RegExp?this.walk((i,d)=>{if(i.type==="decl"&&u.test(i.prop))return c(i,d)}):this.walk((i,d)=>{if(i.type==="decl"&&i.prop===u)return c(i,d)}):(c=u,this.walk((i,d)=>{if(i.type==="decl")return c(i,d)}))}walkRules(u,c){return c?u instanceof RegExp?this.walk((i,d)=>{if(i.type==="rule"&&u.test(i.selector))return c(i,d)}):this.walk((i,d)=>{if(i.type==="rule"&&i.selector===u)return c(i,d)}):(c=u,this.walk((i,d)=>{if(i.type==="rule")return c(i,d)}))}}C.registerParse=A=>{L=A},C.registerRule=A=>{h=A},C.registerAtRule=A=>{_=A},C.registerRoot=A=>{r=A},Y.exports=C,C.default=C,C.rebuild=A=>{A.type==="atrule"?Object.setPrototypeOf(A,_.prototype):A.type==="rule"?Object.setPrototypeOf(A,h.prototype):A.type==="decl"?Object.setPrototypeOf(A,w.prototype):A.type==="comment"?Object.setPrototypeOf(A,k.prototype):A.type==="root"&&Object.setPrototypeOf(A,r.prototype),A[o]=!0,A.nodes&&A.nodes.forEach(u=>{C.rebuild(u)})}},7812:(Y,R,v)=>{v.d(R,{D:()=>f});var _=v(2801),L=v(388),r=v(5793),h=v(5747),k=v(9858),w=v(8196),p=v(2051),t=v(4244),o=v(2625),a=function(C,A,u,c){return new(u||(u=Promise))(function(i,d){function g(x){try{b(c.next(x))}catch(N){d(N)}}function y(x){try{b(c.throw(x))}catch(N){d(N)}}function b(x){var N;x.done?i(x.value):(N=x.value,N instanceof u?N:new u(function(B){B(N)})).then(g,y)}b((c=c.apply(C,A||[])).next())})};function f(C){return a(this,arguments,void 0,function*(A,u={concepts:[],connections:[]}){var c,i,d,g;if(performance.now(),t.serviceWorker)try{const ie=yield(0,t.sendMessage)("UpdateCompositionLocal",{patcherStructure:A,actions:u});return!((i=(c=ie?.actions)===null||c===void 0?void 0:c.concepts)===null||i===void 0)&&i.length&&(u.concepts=JSON.parse(JSON.stringify(ie.actions.concepts))),!((g=(d=ie?.actions)===null||d===void 0?void 0:d.connections)===null||g===void 0)&&g.length&&(u.connections=JSON.parse(JSON.stringify(ie.actions.connections))),ie.data}catch(ie){(0,t.handleServiceWorkerException)(ie)}const y=A.userId,b=A.sessionId,x=A.accessId;let N=[];const B=[];let O=(0,t.CreateDefaultLConcept)(),G=(0,t.CreateDefaultLConcept)();const F=[],M=A.compositionId,j=A.ofTheCompositionId;let W=[],$=yield(0,r.s)(M);for(let ie=0;ie<$.length;ie++)N.push((0,o.P6)($[ie]));const K=[],te=[];let ae=[];for(let ie=0;ie<N.length;ie++)(0,_.A)(te,N[ie].ofTheConceptId),(0,_.A)(K,N[ie].ofTheConceptId),(0,_.A)(K,N[ie].toTheConceptId),ae.push(N[ie].ofTheConceptId);for(let ie=0;ie<K.length;ie++){const ce=yield(0,h.A)(K[ie]);M==K[ie]&&(O=(0,o.F4)(ce)),j==K[ie]&&(G=(0,o.F4)(ce)),B.push((0,o.F4)(ce))}const z=A.patchObject;for(const ie in z){let ce=(0,t.CreateDefaultLConcept)();const oe=z[ie];let J=O;G.id>0&&(J=G),Array.isArray(oe)||typeof oe=="object"?(ce=yield(0,p.k)(ie,"",!0,O.userId,4,999,void 0,u),yield(0,w.R)(z[ie],ce.id,ce.userId,O.id,O.userId,4,999,void 0,u)):ce=yield(0,p.k)(ie,oe,!1,y,x,b,void 0,u);const ee=(0,L.nm)(B,ce);for(let ne=0;ne<ee.length;ne++)if(ee[ne].id>0){const H=(0,L.gt)(N,ee[ne].id);W=W.concat(H),F.push(ee[ne])}yield(0,t.CreateTheConnectionLocal)(J.id,ce.id,O.id,2,void 0,void 0,u),B.push(ce)}for(let ie=0;ie<W.length;ie++)yield(0,k.m)(W[ie].id);yield t.LocalSyncData.SyncDataOnline(void 0,u)})}},8196:(Y,R,v)=>{v.d(R,{R:()=>p});var _=v(4244),L=v(5760),r=v(9911),h=v(3726),k=v(2051),w=function(t,o,a,f){return new(a||(a=Promise))(function(C,A){function u(d){try{i(f.next(d))}catch(g){A(g)}}function c(d){try{i(f.throw(d))}catch(g){A(g)}}function i(d){var g;d.done?C(d.value):(g=d.value,g instanceof a?g:new a(function(y){y(g)})).then(u,c)}i((f=f.apply(t,o||[])).next())})};function p(t){return w(this,arguments,void 0,function*(o,a=null,f=null,C=null,A=null,u=null,c=null,i=!1,d={concepts:[],connections:[]}){var g,y,b,x;const N=_.Logger.logfunction("CreateTheCompositionLocal")||{};if(_.serviceWorker){N.serviceWorker=!0;try{const j=yield(0,_.sendMessage)("CreateTheCompositionLocal",{json:o,ofTheConceptId:a,ofTheConceptUserId:f,mainKey:C,userId:A,accessId:u,sessionInformationId:c,actions:d});return!((y=(g=j?.actions)===null||g===void 0?void 0:g.concepts)===null||y===void 0)&&y.length&&(d.concepts=JSON.parse(JSON.stringify(j.actions.concepts))),!((x=(b=j?.actions)===null||b===void 0?void 0:b.connections)===null||x===void 0)&&x.length&&(d.connections=JSON.parse(JSON.stringify(j.actions.connections))),_.Logger.logUpdate(N),j.data}catch(j){(0,L.ey)(N,"CreateTheCompositionLocal",j),(0,_.handleServiceWorkerException)(j)}}let B=A??999,O=u??999,G=c??999,F=C??0,M=(0,r.u)();for(const j in o)if(typeof o[j]!="string"&&typeof o[j]!="number")if(a==null&&f==null){let W=F,$=yield(0,k.k)(j,"",!0,B,O,G,void 0,d);M=$,W=$.id,F=$.id,yield p(o[j],$.id,$.userId,W,A,u,c,void 0,d)}else{let W=a??999,$=F,K=yield(0,k.k)(j,"",!0,B,O,G,void 0,d);yield(0,h.F)(W,K.id,$,void 0,void 0,void 0,d),yield p(o[j],K.id,K.userId,$,A,u,c,void 0,d)}else{let W=a??999,$=F,K=yield(0,k.k)(j,o[j].toString(),!1,B,O,G,void 0,d);yield(0,h.F)(W,K.id,$,void 0,void 0,void 0,d)}return _.Logger.logUpdate(N),M})}},8206:(Y,R,v)=>{function _(L){const r=L.lastIndexOf("_");let h=[];return r>0?h=[L.substring(0,r),L.substring(r+1,L.length)]:h=[L],h}v.d(R,{f:()=>_})},8278:(Y,R,v)=>{v.d(R,{b:()=>_});class _{constructor(r,h,k,w){this.variants=[],this.height=1,this.key=r,this.value=h,this.leftNode=k,this.rightNode=w,this.currentNode=null}addCurrentNode(r,h){return h==null?h=r:(r.value.typeId!=h.value.typeId&&(h.currentNode=this.addCurrentNode(r,h.currentNode)),h)}addCurrentNodeType(r,h){if(h==null)return h=r;let k=!1;for(let w=0;w<h.variants.length;w++)h.variants[w].value.id==r.value.id&&(k=!0);return k||h.variants.push(r),h}addNode(r,h,k){if(h==null)return h=r;let w=h.leftNode,p=h.rightNode;if(h.key>r.key)h.leftNode=this.addNode(r,w,k);else{if(!(h.key<r.key))return h;h.rightNode=this.addNode(r,p,k)}h.height=1+Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode));let t=this.getBalanceFactor(h);if(t>1&&h.leftNode){if(r.key<h.leftNode.key)return this.rightRotate(h);if(r.key>h.leftNode.key)return h.leftNode=this.leftRotate(h.leftNode),this.rightRotate(h)}if(t<-1&&h.rightNode){if(r.key>h.rightNode.key)return this.leftRotate(h);if(r.key<h.rightNode.key)return h.rightNode=this.rightRotate(h.rightNode),this.leftRotate(h)}return h}checkIfIdsInNode(r,h,k,w){if(r){if(h.includes(r.key)){k.push(r.value);let p=h.indexOf(r.key);h.splice(p,1)}r.leftNode&&this.checkIfIdsInNode(r.leftNode,h,k,w),r.rightNode&&this.checkIfIdsInNode(r.rightNode,h,k,w)}}addCharacterNode(r,h,k){if(r.value.characterValue!=""){if(h==null)return h=r;let w=h.leftNode,p=h.rightNode;if(h.key>r.key)h.leftNode=this.addCharacterNode(r,w,k);else{if(!(h.key<r.key))return h.key==r.key&&h.key!=""&&h.value.id!=r.value.id&&h.addCurrentNodeType(r,h),h;h.rightNode=this.addCharacterNode(r,p,k)}h.height=1+Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode));let t=this.getBalanceFactor(h);if(t>1&&h.leftNode){if(r.key<h.leftNode.key)return this.rightRotate(h);if(r.key>h.leftNode.key)return h.leftNode=this.leftRotate(h.leftNode),this.rightRotate(h)}if(t<-1&&h.rightNode){if(r.key>h.rightNode.key)return this.leftRotate(h);if(r.key<h.rightNode.key)return h.rightNode=this.rightRotate(h.rightNode),this.leftRotate(h)}}return h}addTypeNode(r,h,k){if(r.value.typeId!=0){if(h==null)return h=r;let w=h.leftNode,p=h.rightNode;if(h.key>r.key)h.leftNode=this.addTypeNode(r,w,k);else{if(!(h.key<r.key))return h.key==r.key&&h.key!=0&&h.value.id!=r.value.id&&h.addCurrentNodeType(r,h),h;h.rightNode=this.addTypeNode(r,p,k)}h.height=1+Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode));let t=this.getBalanceFactor(h);if(t>1&&h.leftNode){if(r.key<h.leftNode.key)return this.rightRotate(h);if(r.key>h.leftNode.key)return h.leftNode=this.leftRotate(h.leftNode),this.rightRotate(h)}if(t<-1&&h.rightNode){if(r.key>h.rightNode.key)return this.leftRotate(h);if(r.key<h.rightNode.key)return h.rightNode=this.rightRotate(h.rightNode),this.leftRotate(h)}}return h}rightRotate(r){if(r){let h=r.leftNode;if(h){let k=h.rightNode;return r.leftNode=k,h.rightNode=r,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,h.height=Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode))+1,h}}return r}leftRotate(r){if(r){let h=r.rightNode;if(h){let k=h.leftNode;return h.leftNode=r,r.rightNode=k,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,h.height=Math.max(this.getHeight(h.leftNode),this.getHeight(r.rightNode))+1,h}}return r}getHeight(r){return r?r.height:0}getBalanceFactor(r){return r==null?0:this.getHeight(r.leftNode)-this.getHeight(r.rightNode)}getFromNode(r,h){return h&&(r==h.key?h:r<h.key?this.getFromNode(r,h.leftNode):r>h.key?this.getFromNode(r,h.rightNode):h)}getCharacterFromNode(r,h){return h&&(r==h.key?h:r<h.key?this.getCharacterFromNode(r,h.leftNode):r>h.key?this.getCharacterFromNode(r,h.rightNode):h)}getCharacterFromNodeUpdated(r,h){var k;return h&&(r==h.key||((k=h.value)===null||k===void 0?void 0:k.typeId)==51?h:r<h.key?this.getCharacterFromNode(r,h.leftNode):r>h.key?this.getCharacterFromNode(r,h.rightNode):h)}getFromNodeWithCharacterAndType(r,h,k){if(r=`${r}`,k){if(r==k.key){if(r==k.value.characterValue&&h==k.value.typeId)return k;for(let w=0;w<k.variants.length;w++)if(k.variants[w].value.typeId==h)return k.variants[w]}else{if(r<k.key)return this.getFromNodeWithCharacterAndType(r,h,k.leftNode);if(r>k.key)return this.getFromNodeWithCharacterAndType(r,h,k.rightNode)}return null}return k}getFromNodeWithCharacterAndCategory(r,h,k){if(r=`${r}`,k){if(r==k.key){if(r==k.value.characterValue&&h==k.value.categoryId)return k;for(let w=0;w<k.variants.length;w++)if(k.variants[w].value.categoryId==h)return k.variants[w]}else{if(r<k.key)return this.getFromNodeWithCharacterAndCategory(r,h,k.leftNode);if(r>k.key)return this.getFromNodeWithCharacterAndCategory(r,h,k.rightNode)}return null}return k}removeNode(r,h){if(r==null)return r;if(r.key>h)return r.leftNode=this.removeNode(r.leftNode,h),r;if(r.key<h)return r.rightNode=this.removeNode(r.rightNode,h),r;if(r.leftNode==null){let k=r.rightNode;return r=null,k}if(r.rightNode==null){let k=r.leftNode;return r=null,k}{let k=this.inOrderSuccessor(r.rightNode);return r.value=k.value,r.key=k.key,r.variants=k.variants,r.currentNode=k.currentNode,r.rightNode=this.removeNode(r.rightNode,k.key),r}}removeNodeWithVariants(r,h,k){if(r==null)return r;if(r.key>h)return r.leftNode=this.removeNodeWithVariants(r.leftNode,h,k),r;if(r.key<h)return r.rightNode=this.removeNodeWithVariants(r.rightNode,h,k),r;if(r.variants.length>0){if(r.value.id==k){let w=r.variants[0];if(w)return r.value=w.value,r.key=w.key,r.currentNode=w.currentNode,r.variants.splice(0,1),r}else for(let w=0;w<r.variants.length;w++)if(k==r.variants[w].value.id)return r.variants.splice(w,1),r}if(r.leftNode==null){let w=r.rightNode;return r=null,w}if(r.rightNode==null){let w=r.leftNode;return r=null,w}{let w=this.inOrderSuccessor(r.rightNode);return r.value=w.value,r.key=w.key,r.variants=w.variants,r.currentNode=w.currentNode,r.rightNode=this.removeNodeWithVariants(r.rightNode,w.key,k),r}}countNodeBelow(r){return r==null?0:1+this.countNodeBelow(r.leftNode)+this.countNodeBelow(r.rightNode)}inOrderSuccessor(r){for(;r.leftNode!=null;)r=r.leftNode;return r}}},8339:(Y,R,v)=>{let _=v(396),L=v(9371),r=v(5238),h=v(5644),k=v(1534),w=v(5781);const p={empty:!0,space:!0};Y.exports=class{constructor(t){this.input=t,this.root=new h,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:t,start:{column:1,line:1,offset:0}}}atrule(t){let o,a,f,C=new _;C.name=t[1].slice(1),C.name===""&&this.unnamedAtrule(C,t),this.init(C,t[2]);let A=!1,u=!1,c=[],i=[];for(;!this.tokenizer.endOfFile();){if(o=(t=this.tokenizer.nextToken())[0],o==="("||o==="["?i.push(o==="("?")":"]"):o==="{"&&i.length>0?i.push("}"):o===i[i.length-1]&&i.pop(),i.length===0){if(o===";"){C.source.end=this.getPosition(t[2]),C.source.end.offset++,this.semicolon=!0;break}if(o==="{"){u=!0;break}if(o==="}"){if(c.length>0){for(f=c.length-1,a=c[f];a&&a[0]==="space";)a=c[--f];a&&(C.source.end=this.getPosition(a[3]||a[2]),C.source.end.offset++)}this.end(t);break}c.push(t)}else c.push(t);if(this.tokenizer.endOfFile()){A=!0;break}}C.raws.between=this.spacesAndCommentsFromEnd(c),c.length?(C.raws.afterName=this.spacesAndCommentsFromStart(c),this.raw(C,"params",c),A&&(t=c[c.length-1],C.source.end=this.getPosition(t[3]||t[2]),C.source.end.offset++,this.spaces=C.raws.between,C.raws.between="")):(C.raws.afterName="",C.params=""),u&&(C.nodes=[],this.current=C)}checkMissedSemicolon(t){let o=this.colon(t);if(o===!1)return;let a,f=0;for(let C=o-1;C>=0&&(a=t[C],a[0]==="space"||(f+=1,f!==2));C--);throw this.input.error("Missed semicolon",a[0]==="word"?a[3]+1:a[2])}colon(t){let o,a,f,C=0;for(let[A,u]of t.entries()){if(a=u,f=a[0],f==="("&&(C+=1),f===")"&&(C-=1),C===0&&f===":"){if(o){if(o[0]==="word"&&o[1]==="progid")continue;return A}this.doubleColon(a)}o=a}return!1}comment(t){let o=new L;this.init(o,t[2]),o.source.end=this.getPosition(t[3]||t[2]),o.source.end.offset++;let a=t[1].slice(2,-2);if(/^\s*$/.test(a))o.text="",o.raws.left=a,o.raws.right="";else{let f=a.match(/^(\s*)([^]*\S)(\s*)$/);o.text=f[2],o.raws.left=f[1],o.raws.right=f[3]}}createTokenizer(){this.tokenizer=w(this.input)}decl(t,o){let a=new r;this.init(a,t[0][2]);let f,C=t[t.length-1];for(C[0]===";"&&(this.semicolon=!0,t.pop()),a.source.end=this.getPosition(C[3]||C[2]||function(c){for(let i=c.length-1;i>=0;i--){let d=c[i],g=d[3]||d[2];if(g)return g}}(t)),a.source.end.offset++;t[0][0]!=="word";)t.length===1&&this.unknownWord(t),a.raws.before+=t.shift()[1];for(a.source.start=this.getPosition(t[0][2]),a.prop="";t.length;){let c=t[0][0];if(c===":"||c==="space"||c==="comment")break;a.prop+=t.shift()[1]}for(a.raws.between="";t.length;){if(f=t.shift(),f[0]===":"){a.raws.between+=f[1];break}f[0]==="word"&&/\w/.test(f[1])&&this.unknownWord([f]),a.raws.between+=f[1]}a.prop[0]!=="_"&&a.prop[0]!=="*"||(a.raws.before+=a.prop[0],a.prop=a.prop.slice(1));let A,u=[];for(;t.length&&(A=t[0][0],A==="space"||A==="comment");)u.push(t.shift());this.precheckMissedSemicolon(t);for(let c=t.length-1;c>=0;c--){if(f=t[c],f[1].toLowerCase()==="!important"){a.important=!0;let i=this.stringFrom(t,c);i=this.spacesFromEnd(t)+i,i!==" !important"&&(a.raws.important=i);break}if(f[1].toLowerCase()==="important"){let i=t.slice(0),d="";for(let g=c;g>0;g--){let y=i[g][0];if(d.trim().startsWith("!")&&y!=="space")break;d=i.pop()[1]+d}d.trim().startsWith("!")&&(a.important=!0,a.raws.important=d,t=i)}if(f[0]!=="space"&&f[0]!=="comment")break}t.some(c=>c[0]!=="space"&&c[0]!=="comment")&&(a.raws.between+=u.map(c=>c[1]).join(""),u=[]),this.raw(a,"value",u.concat(t),o),a.value.includes(":")&&!o&&this.checkMissedSemicolon(t)}doubleColon(t){throw this.input.error("Double colon",{offset:t[2]},{offset:t[2]+t[1].length})}emptyRule(t){let o=new k;this.init(o,t[2]),o.selector="",o.raws.between="",this.current=o}end(t){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(t[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(t)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(t){if(this.spaces+=t[1],this.current.nodes){let o=this.current.nodes[this.current.nodes.length-1];o&&o.type==="rule"&&!o.raws.ownSemicolon&&(o.raws.ownSemicolon=this.spaces,this.spaces="",o.source.end=this.getPosition(t[2]),o.source.end.offset+=o.raws.ownSemicolon.length)}}getPosition(t){let o=this.input.fromOffset(t);return{column:o.col,line:o.line,offset:t}}init(t,o){this.current.push(t),t.source={input:this.input,start:this.getPosition(o)},t.raws.before=this.spaces,this.spaces="",t.type!=="comment"&&(this.semicolon=!1)}other(t){let o=!1,a=null,f=!1,C=null,A=[],u=t[1].startsWith("--"),c=[],i=t;for(;i;){if(a=i[0],c.push(i),a==="("||a==="[")C||(C=i),A.push(a==="("?")":"]");else if(u&&f&&a==="{")C||(C=i),A.push("}");else if(A.length===0){if(a===";"){if(f)return void this.decl(c,u);break}if(a==="{")return void this.rule(c);if(a==="}"){this.tokenizer.back(c.pop()),o=!0;break}a===":"&&(f=!0)}else a===A[A.length-1]&&(A.pop(),A.length===0&&(C=null));i=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(o=!0),A.length>0&&this.unclosedBracket(C),o&&f){if(!u)for(;c.length&&(i=c[c.length-1][0],i==="space"||i==="comment");)this.tokenizer.back(c.pop());this.decl(c,u)}else this.unknownWord(c)}parse(){let t;for(;!this.tokenizer.endOfFile();)switch(t=this.tokenizer.nextToken(),t[0]){case"space":this.spaces+=t[1];break;case";":this.freeSemicolon(t);break;case"}":this.end(t);break;case"comment":this.comment(t);break;case"at-word":this.atrule(t);break;case"{":this.emptyRule(t);break;default:this.other(t)}this.endFile()}precheckMissedSemicolon(){}raw(t,o,a,f){let C,A,u,c,i=a.length,d="",g=!0;for(let y=0;y<i;y+=1)C=a[y],A=C[0],A!=="space"||y!==i-1||f?A==="comment"?(c=a[y-1]?a[y-1][0]:"empty",u=a[y+1]?a[y+1][0]:"empty",p[c]||p[u]||d.slice(-1)===","?g=!1:d+=C[1]):d+=C[1]:g=!1;if(!g){let y=a.reduce((b,x)=>b+x[1],"");t.raws[o]={raw:y,value:d}}t[o]=d}rule(t){t.pop();let o=new k;this.init(o,t[0][2]),o.raws.between=this.spacesAndCommentsFromEnd(t),this.raw(o,"selector",t),this.current=o}spacesAndCommentsFromEnd(t){let o,a="";for(;t.length&&(o=t[t.length-1][0],o==="space"||o==="comment");)a=t.pop()[1]+a;return a}spacesAndCommentsFromStart(t){let o,a="";for(;t.length&&(o=t[0][0],o==="space"||o==="comment");)a+=t.shift()[1];return a}spacesFromEnd(t){let o,a="";for(;t.length&&(o=t[t.length-1][0],o==="space");)a=t.pop()[1]+a;return a}stringFrom(t,o){let a="";for(let f=o;f<t.length;f++)a+=t[f][1];return t.splice(o,t.length-o),a}unclosedBlock(){let t=this.current.source.start;throw this.input.error("Unclosed block",t.line,t.column)}unclosedBracket(t){throw this.input.error("Unclosed bracket",{offset:t[2]},{offset:t[2]+1})}unexpectedClose(t){throw this.input.error("Unexpected }",{offset:t[2]},{offset:t[2]+1})}unknownWord(t){throw this.input.error("Unknown word "+t[0][1],{offset:t[0][2]},{offset:t[0][2]+t[0][1].length})}unnamedAtrule(t,o){throw this.input.error("At-rule without name",{offset:o[2]},{offset:o[2]+o[1].length})}}},8349:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(5170))&&_.__esModule?_:{default:_},r=function(){function h(w,p){this.func=w||function(){},this.funcRes=null,this.options=p}var k=h.prototype;return k._shouldUpdateSelector=function(w,p){return p===void 0&&(p={}),Object.assign({},this.options,p).updateSelector!==!1&&typeof w!="string"},k._isLossy=function(w){return w===void 0&&(w={}),Object.assign({},this.options,w).lossless===!1},k._root=function(w,p){return p===void 0&&(p={}),new L.default(w,this._parseOptions(p)).root},k._parseOptions=function(w){return{lossy:this._isLossy(w)}},k._run=function(w,p){var t=this;return p===void 0&&(p={}),new Promise(function(o,a){try{var f=t._root(w,p);Promise.resolve(t.func(f)).then(function(C){var A=void 0;return t._shouldUpdateSelector(w,p)&&(A=f.toString(),w.selector=A),{transform:C,root:f,string:A}}).then(o,a)}catch(C){return void a(C)}})},k._runSync=function(w,p){p===void 0&&(p={});var t=this._root(w,p),o=this.func(t);if(o&&typeof o.then=="function")throw new Error("Selector processor returned a promise to a synchronous call.");var a=void 0;return p.updateSelector&&typeof w!="string"&&(a=t.toString(),w.selector=a),{transform:o,root:t,string:a}},k.ast=function(w,p){return this._run(w,p).then(function(t){return t.root})},k.astSync=function(w,p){return this._runSync(w,p).root},k.transform=function(w,p){return this._run(w,p).then(function(t){return t.transform})},k.transformSync=function(w,p){return this._runSync(w,p).transform},k.process=function(w,p){return this._run(w,p).then(function(t){return t.string||t.root.toString()})},k.processSync=function(w,p){var t=this._runSync(w,p);return t.string||t.root.toString()},h}();R.default=r,Y.exports=R.default},8354:(Y,R)=>{R.__esModule=!0,R.default=function(v){for(var _="",L=v.indexOf("/*"),r=0;L>=0;){_+=v.slice(r,L);var h=v.indexOf("*/",L+2);if(h<0)return _;r=h+2,L=v.indexOf("/*",r)}return _+=v.slice(r)},Y.exports=R.default},8382:(Y,R,v)=>{v.d(R,{x:()=>p});var _=v(6715),L=v(370),r=v(1317),h=v(5760),k=v(4244),w=function(t,o,a,f){return new(a||(a=Promise))(function(C,A){function u(d){try{i(f.next(d))}catch(g){A(g)}}function c(d){try{i(f.throw(d))}catch(g){A(g)}}function i(d){var g;d.done?C(d.value):(g=d.value,g instanceof a?g:new a(function(y){y(g)})).then(u,c)}i((f=f.apply(t,[])).next())})};function p(t,o,a){var f=arguments;return w(this,void 0,void 0,function*(){const C=k.Logger.logfunction("GetCompositionConnectionsBetweenTwoConcepts",f)||{};var A=[];try{if(k.serviceWorker){C.serviceWorker=!0;try{const g=yield(0,k.sendMessage)("GetCompositionConnectionsBetweenTwoConcepts",{ofConceptId:t,toConcept:o,mainKey:a});return k.Logger.logUpdate(C),g.data}catch(g){(0,h.ey)(C,"GetCompositionConnectionsBetweenTwoConcepts",g),(0,k.handleServiceWorkerException)(g)}}var u=new FormData;u.append("ofConceptId",t.toString()),u.append("mainKey",a.toString()),u.append("toConceptId",o.toString());const i=yield(0,r.Xr)(null,"application/json"),d=yield(0,r.Hh)(L.B.GetCompositionConnectionBetweenTwoConceptsUrl(),{method:"POST",headers:i,body:u,redirect:"follow"});if(d.ok){const g=yield d.json();for(var c=0;c<g.length;c++)_.d.AddConnection(g[c]),A.push(g[c]);k.Logger.logUpdate(C)}else(0,h.ry)(d)}catch(i){(0,h.Mb)(i,L.B.GetCompositionConnectionBetweenTwoConceptsUrl()),(0,h.ey)(C,"GetCompositionConnectionsBetweenTwoConcepts",i)}return A})}},8444:(Y,R,v)=>{v.d(R,{b:()=>o});var _=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})};const L="ccs_profile",r="AES-GCM";function h(a){return _(this,void 0,void 0,function*(){const f=new TextEncoder().encode("mftsccs-browser-v1"),C=yield crypto.subtle.importKey("raw",f.buffer,"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:a.buffer,iterations:1e5,hash:"SHA-256"},C,{name:r,length:256},!1,["encrypt","decrypt"])})}function k(a){return _(this,void 0,void 0,function*(){if(typeof localStorage>"u"||typeof crypto>"u"||!crypto.subtle)return;const f=new TextEncoder,C=crypto.getRandomValues(new Uint8Array(16)),A=crypto.getRandomValues(new Uint8Array(12)),u=yield h(C),c=f.encode(JSON.stringify(a)),i=yield crypto.subtle.encrypt({name:r,iv:A.buffer},u,c.buffer),d=new Uint8Array(C.length+A.length+new Uint8Array(i).length);d.set(C,0),d.set(A,C.length),d.set(new Uint8Array(i),C.length+A.length);try{localStorage.setItem(L,function(g){let y="";for(let b=0;b<g.length;b++)y+=String.fromCharCode(g[b]);return btoa(y)}(d))}catch{}})}function w(){return _(this,void 0,void 0,function*(){if(typeof localStorage>"u"||typeof crypto>"u"||!crypto.subtle)return null;const a=localStorage.getItem(L);if(!a)return null;let f;try{if(f=function(C){const A=atob(C),u=new Uint8Array(A.length);for(let c=0;c<A.length;c++)u[c]=A.charCodeAt(c);return u}(a),f.length<29)throw new Error("too short")}catch{return p(),null}try{const C=f.slice(0,16),A=f.slice(16,28),u=f.slice(28),c=yield h(C),i=yield crypto.subtle.decrypt({name:r,iv:A.buffer},c,u.buffer);return JSON.parse(new TextDecoder().decode(i))}catch{return p(),null}})}function p(){typeof localStorage<"u"&&localStorage.removeItem(L)}var t=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,f||[])).next())})};class o{static setSession(f){f&&(o.sessionId=f)}static saveUserProfile(f){return t(this,void 0,void 0,function*(){var C,A,u,c,i,d,g,y,b,x,N,B,O,G,F,M,j,W,$,K,te,ae,z,ie,ce,oe,J;try{const ee=(C=f?.data)!==null&&C!==void 0?C:f,ne=(c=(u=(A=ee?.token)!==null&&A!==void 0?A:ee?.accessToken)!==null&&u!==void 0?u:o.BearerAccessToken)!==null&&c!==void 0?c:"",H=(d=(i=ee?.refreshtoken)!==null&&i!==void 0?i:ee?.refreshToken)!==null&&d!==void 0?d:"",re=(g=o.profileCache)!==null&&g!==void 0?g:{};o.BearerAccessToken=ne,o.refreshToken=H||o.refreshToken;const le={token:ne,refreshToken:o.refreshToken,email:(b=(y=ee?.email)!==null&&y!==void 0?y:re.email)!==null&&b!==void 0?b:"",userId:(F=(G=(O=(B=(N=(x=ee?.entity)===null||x===void 0?void 0:x[0])===null||N===void 0?void 0:N.userId)!==null&&B!==void 0?B:ee?.userId)!==null&&O!==void 0?O:ee?.theUserId)!==null&&G!==void 0?G:re.userId)!==null&&F!==void 0?F:0,userConcept:(j=(M=ee?.userConcept)!==null&&M!==void 0?M:re.userConcept)!==null&&j!==void 0?j:0,entityId:(te=(K=($=(W=ee?.entityDetails)===null||W===void 0?void 0:W.id)!==null&&$!==void 0?$:ee?.entityId)!==null&&K!==void 0?K:re.entityId)!==null&&te!==void 0?te:0,roles:(z=(ae=ee?.roles)!==null&&ae!==void 0?ae:re.roles)!==null&&z!==void 0?z:[],amcode:(ce=(ie=ee?.amcode)!==null&&ie!==void 0?ie:re.amcode)!==null&&ce!==void 0?ce:btoa(JSON.stringify((J=(oe=ee?.roles)!==null&&oe!==void 0?oe:re.roles)!==null&&J!==void 0?J:[]))};return o.profileCache=le,yield k(le),!0}catch{return!1}})}static updateTokens(){return t(this,arguments,void 0,function*(f="",C=""){f&&(o.BearerAccessToken=f),C&&(o.refreshToken=C),o.profileCache&&(o.profileCache=Object.assign(Object.assign({},o.profileCache),{token:o.BearerAccessToken,refreshToken:o.refreshToken}),yield k(o.profileCache))})}static hydrateProfile(){return t(this,void 0,void 0,function*(){var f,C;if(!o.profileCache){const A=yield w();A&&(o.profileCache=A,o.BearerAccessToken||(o.BearerAccessToken=(f=A.token)!==null&&f!==void 0?f:""),o.refreshToken||(o.refreshToken=(C=A.refreshToken)!==null&&C!==void 0?C:""))}})}static logout(){o.BearerAccessToken="",o.refreshToken="",o.profileCache=null,p()}}o.BearerAccessToken="",o.refreshToken="",o.sessionId=998,o.profileCache=null},8500:(Y,R,v)=>{R.__esModule=!0,R.isComment=R.isCombinator=R.isClassName=R.isAttribute=void 0,R.isContainer=function(y){return!(!h(y)||!y.walk)},R.isIdentifier=void 0,R.isNamespace=function(y){return w(y)||i(y)},R.isNesting=void 0,R.isNode=h,R.isPseudo=void 0,R.isPseudoClass=function(y){return C(y)&&!g(y)},R.isPseudoElement=g,R.isUniversal=R.isTag=R.isString=R.isSelector=R.isRoot=void 0;var _,L=v(1581),r=((_={})[L.ATTRIBUTE]=!0,_[L.CLASS]=!0,_[L.COMBINATOR]=!0,_[L.COMMENT]=!0,_[L.ID]=!0,_[L.NESTING]=!0,_[L.PSEUDO]=!0,_[L.ROOT]=!0,_[L.SELECTOR]=!0,_[L.STRING]=!0,_[L.TAG]=!0,_[L.UNIVERSAL]=!0,_);function h(y){return typeof y=="object"&&r[y.type]}function k(y,b){return h(b)&&b.type===y}var w=k.bind(null,L.ATTRIBUTE);R.isAttribute=w;var p=k.bind(null,L.CLASS);R.isClassName=p;var t=k.bind(null,L.COMBINATOR);R.isCombinator=t;var o=k.bind(null,L.COMMENT);R.isComment=o;var a=k.bind(null,L.ID);R.isIdentifier=a;var f=k.bind(null,L.NESTING);R.isNesting=f;var C=k.bind(null,L.PSEUDO);R.isPseudo=C;var A=k.bind(null,L.ROOT);R.isRoot=A;var u=k.bind(null,L.SELECTOR);R.isSelector=u;var c=k.bind(null,L.STRING);R.isString=c;var i=k.bind(null,L.TAG);R.isTag=i;var d=k.bind(null,L.UNIVERSAL);function g(y){return C(y)&&y.value&&(y.value.startsWith("::")||y.value.toLowerCase()===":before"||y.value.toLowerCase()===":after"||y.value.toLowerCase()===":first-letter"||y.value.toLowerCase()===":first-line")}R.isUniversal=d},8545:(Y,R,v)=>{v.d(R,{$S:()=>t,L0:()=>o,WC:()=>a});var _=v(838),L=v(4647),r=v(4244),h=v(5760);v(1317);var k=v(6757),w=v(9858),p=function(f,C,A,u){return new(A||(A=Promise))(function(c,i){function d(b){try{y(u.next(b))}catch(x){i(x)}}function g(b){try{y(u.throw(b))}catch(x){i(x)}}function y(b){var x;b.done?c(b.value):(x=b.value,x instanceof A?x:new A(function(N){N(x)})).then(d,g)}y((u=u.apply(f,C||[])).next())})};function t(f,C){var A=arguments;return p(this,void 0,void 0,function*(){const u=r.Logger.logfunction("DeleteConnectionByType",A)||{};if(r.serviceWorker){u.serviceWorker=!0;try{const b=yield(0,r.sendMessage)("DeleteConnectionByType",{id:f,linker:C});return r.Logger.logUpdate(u),b.data}catch(b){(0,h.ey)(u,"DeleteConnectionByType",b),(0,r.handleServiceWorkerException)(b)}}let c=yield(0,_.l)(f);for(let b=0;b<c.length;b++)r.ConnectionData.AddConnection(c[b]);let i=yield r.ConnectionData.GetConnectionsOfConcept(f),d=yield(0,r.GetConceptByCharacter)(C),g=[];for(let b=0;b<i.length;b++)i[b].typeId==d.id&&g.push(i[b]);let y=!1;for(let b=0;b<g.length;b++)y=yield(0,r.DeleteConnectionById)(g[b].id);return r.Logger.logUpdate(u),y})}function o(f,C){var A=arguments;return p(this,void 0,void 0,function*(){const u=r.Logger.logfunction("DeleteConnectionByTypeBulk",A)||{};if(r.serviceWorker){u.serviceWorker=!0;try{const y=yield(0,r.sendMessage)("DeleteConnectionByTypeBulk",{id:f,linkers:C});return r.Logger.logUpdate(u),y.data}catch(y){(0,h.ey)(u,"DeleteConnectionByTypeBulk",y),(0,r.handleServiceWorkerException)(y)}}let c=yield(0,_.l)(f);for(let y=0;y<c.length;y++)r.ConnectionData.AddConnection(c[y]);let i=yield r.ConnectionData.GetConnectionsOfConcept(f),d=[];d=yield(0,k.Hi)(C);let g=[];for(let y=0;y<i.length;y++)for(let b=0;b<d.length;b++)i[y].typeId==d[b].id&&g.push(i[y].id);return r.Logger.logUpdate(u),yield(0,w.E)(g)})}function a(f,C){return p(this,arguments,void 0,function*(A,u,c=!1){if(r.serviceWorker)try{return(yield(0,r.sendMessage)("GetAllTheConnectionsByTypeAndOfTheConcept",{id:A,linker:u,reverse:c})).data}catch(d){(0,r.handleServiceWorkerException)(d)}let i=[];if(c){let d=yield(0,L.W)(A),g=yield(0,r.MakeTheTypeConceptApi)(u,999);for(let y=0;y<d.length;y++)d[y].typeId==g.id&&i.push(d[y])}else{let d=yield(0,_.l)(A);for(let b=0;b<d.length;b++)r.ConnectionData.AddConnection(d[b]);let g=yield r.ConnectionData.GetConnectionsOfConcept(A),y=yield(0,r.GetConceptByCharacter)(u);for(let b=0;b<g.length;b++)g[b].typeId==y.id&&i.push(g[b])}return i})}},8552:(Y,R,v)=>{v.d(R,{f:()=>w});var _=v(7154),L=v(1549),r=v(4244),h=v(2625),k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,[])).next())})};function w(p){return k(this,void 0,void 0,function*(){let t=performance.now();try{if(r.serviceWorker)try{return(yield(0,r.sendMessage)("GetTheConceptLocal",{id:p})).data}catch(a){(0,r.handleServiceWorkerException)(a)}let o=(0,r.CreateDefaultLConcept)();if(p<0){if(o=yield _.v.GetConcept(p),o.id==0){let a=yield L.G.getNodeFromTree(p);if(a?.value){let f=a.value;f&&(o=f)}}}else{let a=yield(0,r.GetTheConcept)(p);o=(0,h.F4)(a)}return o}catch(o){throw r.Logger.logError(t,"unknown","read","unknown",void 0,200,void 0,"GetTheConceptLocal",[p],"unknown",void 0),o}})}},8633:Y=>{var R=String,v=function(){return{isColorSupported:!1,reset:R,bold:R,dim:R,italic:R,underline:R,inverse:R,hidden:R,strikethrough:R,black:R,red:R,green:R,yellow:R,blue:R,magenta:R,cyan:R,white:R,gray:R,bgBlack:R,bgRed:R,bgGreen:R,bgYellow:R,bgBlue:R,bgMagenta:R,bgCyan:R,bgWhite:R,blackBright:R,redBright:R,greenBright:R,yellowBright:R,blueBright:R,magentaBright:R,cyanBright:R,whiteBright:R,bgBlackBright:R,bgRedBright:R,bgGreenBright:R,bgYellowBright:R,bgBlueBright:R,bgMagentaBright:R,bgCyanBright:R,bgWhiteBright:R}};Y.exports=v(),Y.exports.createColors=v},8635:(Y,R,v)=>{v.d(R,{j:()=>w});var _=v(4244),L=v(370),r=v(5760),h=v(1317),k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,t||[])).next())})};function w(p){var t=arguments;return k(this,arguments,void 0,function*(o,a=""){const f=_.Logger.logfunction("SearchLinkMultipleApi",t);let C=performance.now();var A=yield(0,h.ab)("application/json",a);const u=L.B.SearchLinkMultipleAllApiUrl(),c=JSON.stringify(o);try{const i=yield(0,h.Hh)(u,{method:"POST",headers:A,body:c});if(i.ok){let d=yield i.json();return _.Logger.logUpdate(f),d}return(0,r.ry)(i),_.Logger.logError(C,"unknown","search","unknown",void 0,i.status,i,"SearchLinkMultipleApi",[o,a],"unknown",void 0),[]}catch(i){_.Logger.logError(C,"unknown","search","unknown",void 0,500,i,"SearchLinkMultipleApi",[o,a],"unknown",void 0),(0,r.Mb)(i,u),(0,r.ey)(f,"SearchLinkMultipleApi",i)}})}},8800:(Y,R,v)=>{v.d(R,{w:()=>h});var _=v(4244),L=v(6931),r=function(k,w,p,t){return new(p||(p=Promise))(function(o,a){function f(u){try{A(t.next(u))}catch(c){a(c)}}function C(u){try{A(t.throw(u))}catch(c){a(c)}}function A(u){var c;u.done?o(u.value):(c=u.value,c instanceof p?c:new p(function(i){i(c)})).then(f,C)}A((t=t.apply(k,[])).next())})};class h{constructor(){this.subscribers=[],this.mainConcept=0,this.compositionIds=[],this.conceptIds=[],this.internalConnections=[],this.reverse=[],this.linkers=[],this.newIds=[],this.dependency=[],this.isDataLoaded=!1,this.isUpdating=!1,this.fetched=!1,this.format=L.yv,this.eventHandlers={},this.eventNames={},this.isDisposed=!1}addTrackedEventListener(w,p,t){const o=`${w}`;if(this.eventHandlers[o])return;const a=`${p}`;this.eventHandlers[o]=t,this.eventNames[o]=a,window.addEventListener(a,t)}removeTrackedEventListener(w){var p;const t=`${w}`,o=this.eventHandlers[t];o&&(window.removeEventListener((p=this.eventNames[t])!==null&&p!==void 0?p:t,o),delete this.eventHandlers[t],delete this.eventNames[t])}onDispose(){}dispose(){for(const w of Object.keys(this.eventHandlers))this.removeTrackedEventListener(w);this.isDataLoaded=!1,this.isDisposed=!0,this.onDispose()}listenToEventType(w){const p=`type:${w}`;this.eventHandlers[p]||this.addTrackedEventListener(p,w,t=>r(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let o=this;setTimeout(function(){return r(this,void 0,void 0,function*(){try{let a=t;if(!o.compositionIds.includes(a?.detail)){o.compositionIds.unshift(a?.detail),o.listenToEvent(a?.detail);let f=a?.detail,C=yield _.ConnectionData.GetConnectionByOfTheConceptAndType(f,f);for(let A=0;A<C.length;A++)yield _.ConnectionData.GetConnection(C[A]).then(u=>{u.typeId==o.mainConcept?o.internalConnections.includes(u.id)||o.internalConnections.push(u.id):o.linkers.includes(u.id)||o.linkers.push(u.id),o.conceptIds.includes(u.toTheConceptId)||o.conceptIds.push(u.toTheConceptId),o.compositionIds.includes(u.ofTheConceptId)||o.compositionIds.push(u.ofTheConceptId)})}o.isUpdating=!1,yield o.bind(),o.notify()}catch(a){throw o.isUpdating=!1,a}})},200)}}))}listenToEvent(w){const p=`concept:${w}`;this.eventHandlers[p]||this.addTrackedEventListener(p,w,t=>r(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let o=this;setTimeout(function(){return r(this,void 0,void 0,function*(){try{let a=yield _.ConnectionData.GetConnectionByOfTheConceptAndType(w,w);for(let f=0;f<a.length;f++)yield _.ConnectionData.GetConnection(a[f]).then(C=>{C.typeId==o.mainConcept?o.internalConnections.includes(C.id)||o.internalConnections.push(C.id):o.linkers.includes(C.id)||o.linkers.push(C.id),o.conceptIds.includes(C.toTheConceptId)||o.conceptIds.push(C.toTheConceptId),o.compositionIds.includes(C.ofTheConceptId)||(o.compositionIds.push(C.ofTheConceptId),o.newIds.includes(C.ofTheConceptId)||o.newIds.push(C.ofTheConceptId))});o.isUpdating=!1,yield o.bind(),o.notify()}catch(a){throw o.isUpdating=!1,a}})},200)}}))}removeListenToEvent(w){this.removeTrackedEventListener(`concept:${w}`),this.removeTrackedEventListener(w)}listenToEventConnectionType(w,p){const t=`concept:${w}:type:${p}`;this.eventHandlers[t]||this.addTrackedEventListener(t,w,o=>r(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let a=this;setTimeout(function(){return r(this,void 0,void 0,function*(){try{let f=yield _.ConnectionData.GetConnectionByOfTheConceptAndType(w,w);for(let C=0;C<f.length;C++)f[C].typeId==p&&(yield _.ConnectionData.GetConnection(f[C]).then(A=>{A.typeId==a.mainConcept?a.internalConnections.includes(A.id)||a.internalConnections.push(A.id):a.linkers.includes(A.id)||a.linkers.push(A.id),a.conceptIds.includes(A.toTheConceptId)||a.conceptIds.push(A.toTheConceptId),a.compositionIds.includes(A.ofTheConceptId)||a.compositionIds.push(A.ofTheConceptId)}));a.isUpdating=!1,yield a.bind(),a.notify()}catch(f){throw a.isUpdating=!1,f}})},200)}}))}bind(){return r(this,void 0,void 0,function*(){})}run(){return r(this,void 0,void 0,function*(){})}update(){return r(this,void 0,void 0,function*(){this.isDataLoaded=!1,yield this.bind(),this.notify()})}subscribe(w,p){this.isDisposed=!1,this.subscribers.length===0&&Object.keys(this.eventHandlers).length===0&&(this.isDataLoaded=!1),this.subscribers.push(w);const t=()=>this.unsubscribe(w),o=this.bind().then(()=>r(this,void 0,void 0,function*(){return yield w(this.data,this),{unsubscribe:t}})).catch(a=>{throw p&&p(a),a});return o.unsubscribe=t,o}execute(){return r(this,void 0,void 0,function*(){return yield this.run()})}unsubscribe(w){return this.subscribers=this.subscribers.filter(p=>p!=w),this.subscribers.length===0&&this.dispose(),this.subscribers.length}notify(){this.subscribers.map(w=>{w(this.data,this)})}}},8937:Y=>{var R={}.hasOwnProperty,v=/[ -,\.\/:-@\[-\^`\{-~]/,_=/[ -,\.\/:-@\[\]\^`\{-~]/,L=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,r=function h(k,w){(w=function(d,g){if(!d)return g;var y={};for(var b in g)y[b]=R.call(d,b)?d[b]:g[b];return y}(w,h.options)).quotes!="single"&&w.quotes!="double"&&(w.quotes="single");for(var p=w.quotes=="double"?'"':"'",t=w.isIdentifier,o=k.charAt(0),a="",f=0,C=k.length;f<C;){var A=k.charAt(f++),u=A.charCodeAt(),c=void 0;if(u<32||u>126){if(u>=55296&&u<=56319&&f<C){var i=k.charCodeAt(f++);(64512&i)==56320?u=((1023&u)<<10)+(1023&i)+65536:f--}c="\\"+u.toString(16).toUpperCase()+" "}else c=w.escapeEverything?v.test(A)?"\\"+A:"\\"+u.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(A)?"\\"+u.toString(16).toUpperCase()+" ":A=="\\"||!t&&(A=='"'&&p==A||A=="'"&&p==A)||t&&_.test(A)?"\\"+A:A;a+=c}return t&&(/^-[-\d]/.test(a)?a="\\-"+a.slice(1):/\d/.test(o)&&(a="\\3"+o+" "+a.slice(1))),a=a.replace(L,function(d,g,y){return g&&g.length%2?d:(g||"")+y}),!t&&w.wrap?p+a+p:a};r.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1},r.version="3.0.0",Y.exports=r},9097:(Y,R,v)=>{v.d(R,{V:()=>w});var _=v(4244),L=v(8444),r=v(5760),h=v(1317),k=function(p,t,o,a){return new(o||(o=Promise))(function(f,C){function A(i){try{c(a.next(i))}catch(d){C(d)}}function u(i){try{c(a.throw(i))}catch(d){C(d)}}function c(i){var d;i.done?f(i.value):(d=i.value,d instanceof o?d:new o(function(g){g(d)})).then(A,u)}c((a=a.apply(p,[])).next())})};class w{static startAutoSync(){this.autoSyncInterval||(this.nextSyncTime=Date.now()+this.SYNC_INTERVAL_MS,this.autoSyncInterval=setInterval(()=>{const t=Date.now();this.nextSyncTime&&t>=this.nextSyncTime&&(this.nextSyncTime=t+this.SYNC_INTERVAL_MS,this.sendPackageLogsToServer(),this.sendApplicationLogsToServer())},3e4))}static stopAutoSync(){this.autoSyncInterval!==null&&(clearInterval(this.autoSyncInterval),this.autoSyncInterval=null,this.nextSyncTime=null)}static setLogLevel(t){this.logLevel=t}static shouldLog(t){return this.LOG_LEVELS.indexOf(t)>=this.LOG_LEVELS.indexOf(this.logLevel)}static formatLogData(t,o,a){const f=Object.assign({timestamp:new Date().toISOString(),level:t,message:o},a);return this.packageLogsData.push(f),t=="ERROR"&&(this.sendPackageLogsToServer(),this.sendApplicationLogsToServer()),f}static log(t,o,a){if(this.logPackageActivationStatus)try{this.formatLogData(t,o,a||null)}catch{}}static logUpdate(t){var o;try{if(!this.logPackageActivationStatus)return{};if(!t)return{};const a=Date.now();t.startTime=(o=t.startTime)!==null&&o!==void 0?o:a;const f=a-t.startTime;t.responseTime=`${f} ms`,!t.serviceWorker&&(t.serviceWorker=!1)}catch(a){(0,r.ey)(t,"Logger.logUpdate",a)}}static logfunction(t,...o){if(!this.logPackageActivationStatus)return{};const a=Date.now();let f=o;const C=_.BaseUrl.getRandomizer(),A=L.b.sessionId;let u={startTime:a,functionName:t,functionParameters:f,requestFrom:_.BaseUrl.BASE_APPLICATION,sessionId:A,applicationId:C};return this.formatLogData("INFO","function called",u)}static logError(t,o,a,f,C,A,u,c,i,d,g){try{const y=L.b.sessionId,b=`${(performance.now()-t).toFixed(3)}ms`,x={startTime:t,userId:o,operationType:a,requestFrom:f,requestIP:C,responseStatus:A,responseTime:b,responseSize:u?`${JSON.stringify(u).length}`:"0",sessionId:y?.toString(),functionName:c,functionParameters:i,userAgent:d,conceptsUsed:g};this.formatLogData("ERROR",`Information logged for ${c}`,x)}catch{}}static logApplication(t,o,a){if(this.logApplicationActivationStatus)try{const f={timestamp:new Date().toISOString(),level:t,message:o,data:a||null};this.applicationLogsData.push(f),t!="ROUTE"&&t!="USER_EVENT"||(this.sendPackageLogsToServer(),this.sendApplicationLogsToServer())}catch{}}static checkLoggerServerStatus(){return k(this,void 0,void 0,function*(){let t=1e4+w.checkInterval;const o=new Date;if(!(w.lastCheck&&o.getTime()-w.lastCheck.getTime()<t)){try{let a=_.BaseUrl.LogHealth();w.lastCheck=new Date,(yield fetch(a,{method:"GET"})).ok&&(w.isLoggerActive=!0,w.checkInterval=0)}catch{}w.checkInterval=w.checkInterval+500}})}static sendApplicationLogsToServer(){return k(this,void 0,void 0,function*(){const t=this.applicationLogsData;try{if(!w.isLoggerActive)return void w.checkLoggerServerStatus();if(t.length===0)return;this.applicationLogsData=[],L.b.BearerAccessToken;const o=50;let a=yield(0,h.Xr)(),f=0;for(;t.length!=0;){const C=t.slice(0,o),A=yield fetch(_.BaseUrl.PostLogger(),{method:"POST",headers:a,body:JSON.stringify({logType:this.appLogs,logData:C})});A.ok||A.status===404&&(w.isLoggerActive=!1),t.splice(0,o),f+=o,f++}}catch{w.isLoggerActive=!1}})}static sendPackageLogsToServer(){return k(this,void 0,void 0,function*(){const t=this.packageLogsData;try{if(!w.isLoggerActive)return void w.checkLoggerServerStatus();if(t.length===0)return;this.packageLogsData=[];const o=300;let a=0;for(;t.length!=0;){const f=t.slice(0,o);let C=yield(0,h.Xr)();const A=yield fetch(_.BaseUrl.PostLogger(),{method:"POST",headers:C,body:JSON.stringify({logType:this.mftsccsBrowser,logData:f})});if(!A.ok)return void(A.status===404&&(w.isLoggerActive=!1));t.splice(0,o),a++}}catch{w.isLoggerActive=!1}})}static saveLogToLocalStorage(t,o){try{if(typeof localStorage===void 0)return;{const a=JSON.parse((localStorage==null?void 0:localStorage.getItem(t))||"[]");a.push(o),localStorage?.setItem(t,JSON.stringify(a))}}catch{this.log("ERROR","Error while saving log in local storage")}}static clearLogsFromLocalStorage(t){typeof localStorage!==void 0&&localStorage?.removeItem(t)}}w.isLoggerActive=!0,w.lastCheck=new Date,w.checkInterval=0,w.logLevel="INFO",w.packageLogsData=[],w.applicationLogsData=[],w.LOG_LEVELS=["DEBUG","INFO","WARNING","ERROR","ROUTE"],w.SYNC_INTERVAL_MS=6e4,w.nextSyncTime=null,w.appLogs="app",w.mftsccsBrowser="mftsccs",w.logApplicationActivationStatus=!1,w.logPackageActivationStatus=!1,w.autoSyncInterval=null},9196:(Y,R,v)=>{v.d(R,{x:()=>_});class _{constructor(r,h,k,w){this.variants=[],this.height=1,this.key=r,this.value=h,this.leftNode=k,this.rightNode=w,this.currentNode=null}addCurrentNode(r,h){return h==null?h=r:(r.value.typeId!=h.value.typeId&&(h.currentNode=this.addCurrentNode(r,h.currentNode)),h)}addCurrentNodeType(r,h){if(h==null)return h=r;var k=!1;for(let w=0;w<h.variants.length;w++)h.variants[w].value.id==r.value.id&&(k=!0);return k||h.variants.push(r),h}addNode(r,h,k){if(h==null)return h=r;var w=h.leftNode,p=h.rightNode;if(h.key>r.key)h.leftNode=this.addNode(r,w,k);else{if(!(h.key<r.key))return h;h.rightNode=this.addNode(r,p,k)}h.height=1+Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode));let t=this.getBalanceFactor(h);if(t>1&&h.leftNode){if(r.key<h.leftNode.key)return this.rightRotate(h);if(r.key>h.leftNode.key)return h.leftNode=this.leftRotate(h.leftNode),this.rightRotate(h)}if(t<-1&&h.rightNode){if(r.key>h.rightNode.key)return this.leftRotate(h);if(r.key<h.rightNode.key)return h.rightNode=this.rightRotate(h.rightNode),this.leftRotate(h)}return h}addCharacterNode(r,h,k){if(r.value.characterValue!=""){if(h==null)return h=r;var w=h.leftNode,p=h.rightNode;if(h.key>r.key)h.leftNode=this.addCharacterNode(r,w,k);else{if(!(h.key<r.key))return h.key==r.key&&h.key!=""&&h.value.id!=r.value.id&&h.addCurrentNodeType(r,h),h;h.rightNode=this.addCharacterNode(r,p,k)}h.height=1+Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode));let t=this.getBalanceFactor(h);if(t>1&&h.leftNode){if(r.key<h.leftNode.key)return this.rightRotate(h);if(r.key>h.leftNode.key)return h.leftNode=this.leftRotate(h.leftNode),this.rightRotate(h)}if(t<-1&&h.rightNode){if(r.key>h.rightNode.key)return this.leftRotate(h);if(r.key<h.rightNode.key)return h.rightNode=this.rightRotate(h.rightNode),this.leftRotate(h)}}return h}addTypeNode(r,h,k){if(r.value.typeId!=0){if(h==null)return h=r;var w=h.leftNode,p=h.rightNode;if(h.key>r.key)h.leftNode=this.addTypeNode(r,w,k);else{if(!(h.key<r.key))return h.key==r.key&&h.key!=0&&h.value.id!=r.value.id&&h.addCurrentNodeType(r,h),h;h.rightNode=this.addTypeNode(r,p,k)}h.height=1+Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode));let t=this.getBalanceFactor(h);if(t>1&&h.leftNode){if(r.key<h.leftNode.key)return this.rightRotate(h);if(r.key>h.leftNode.key)return h.leftNode=this.leftRotate(h.leftNode),this.rightRotate(h)}if(t<-1&&h.rightNode){if(r.key>h.rightNode.key)return this.leftRotate(h);if(r.key<h.rightNode.key)return h.rightNode=this.rightRotate(h.rightNode),this.leftRotate(h)}}return h}rightRotate(r){if(r){let h=r.leftNode;if(h){let k=h.rightNode;return r.leftNode=k,h.rightNode=r,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,h.height=Math.max(this.getHeight(h.leftNode),this.getHeight(h.rightNode))+1,h}}return r}leftRotate(r){if(r){let h=r.rightNode;if(h){let k=h.leftNode;return h.leftNode=r,r.rightNode=k,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,h.height=Math.max(this.getHeight(h.leftNode),this.getHeight(r.rightNode))+1,h}}return r}getHeight(r){return r?r.height:0}getBalanceFactor(r){return r==null?0:this.getHeight(r.leftNode)-this.getHeight(r.rightNode)}getFromNode(r,h){return h&&(r==h.key?h:r<h.key?this.getFromNode(r,h.leftNode):r>h.key?this.getFromNode(r,h.rightNode):h)}updateNodeSyncStatus(r,h,k){if(k){if(r==k.key){let w=k.value;return w.isSynced=h,k.value=w,k}return r<k.key?this.updateNodeSyncStatus(r,h,k.leftNode):r>k.key?this.updateNodeSyncStatus(r,h,k.rightNode):k}return k}getCharacterFromNode(r,h){return h&&(r==h.key?h:r<h.key?this.getCharacterFromNode(r,h.leftNode):r>h.key?this.getCharacterFromNode(r,h.rightNode):h)}getFromNodeWithCharacterAndType(r,h,k){if(r=`${r}`,k){if(r==k.key){if(r==k.value.characterValue&&h==k.value.typeId)return k;for(let w=0;w<k.variants.length;w++)if(k.variants[w].value.typeId==h)return k.variants[w]}else{if(r<k.key)return this.getFromNodeWithCharacterAndType(r,h,k.leftNode);if(r>k.key)return this.getFromNodeWithCharacterAndType(r,h,k.rightNode)}return null}return k}getFromNodeWithCharacterAndCategory(r,h,k){if(r=`${r}`,k){if(r==k.key){if(r==k.value.characterValue&&h==k.value.categoryId)return k;for(let w=0;w<k.variants.length;w++)if(k.variants[w].value.categoryId==h)return k.variants[w]}else{if(r<k.key)return this.getFromNodeWithCharacterAndCategory(r,h,k.leftNode);if(r>k.key)return this.getFromNodeWithCharacterAndCategory(r,h,k.rightNode)}return null}return k}removeNode(r,h){if(r==null)return r;if(r.key>h)return r.leftNode=this.removeNode(r.leftNode,h),r;if(r.key<h)return r.rightNode=this.removeNode(r.rightNode,h),r;if(r.leftNode==null){let w=r.rightNode;return r=null,w}if(r.rightNode==null){let w=r.leftNode;return r=null,w}var k=this.inOrderSuccessor(r.rightNode);return r.value=k.value,r.key=k.key,r.variants=k.variants,r.currentNode=k.currentNode,r.rightNode=this.removeNode(r.rightNode,k.key),r}removeNodeWithVariants(r,h,k){if(r==null)return r;if(r.key>h)return r.leftNode=this.removeNodeWithVariants(r.leftNode,h,k),r;if(r.key<h)return r.rightNode=this.removeNodeWithVariants(r.rightNode,h,k),r;if(r.variants.length>0){if(r.value.id==k){var w=r.variants[0];if(w)return r.value=w.value,r.key=w.key,r.currentNode=w.currentNode,r.variants.splice(0,1),r}else for(let t=0;t<r.variants.length;t++)if(k==r.variants[t].value.id)return r.variants.splice(t,1),r}if(r.leftNode==null){let t=r.rightNode;return r=null,t}if(r.rightNode==null){let t=r.leftNode;return r=null,t}var p=this.inOrderSuccessor(r.rightNode);return r.value=p.value,r.key=p.key,r.variants=p.variants,r.currentNode=p.currentNode,r.rightNode=this.removeNodeWithVariants(r.rightNode,p.key,k),r}countNodeBelow(r){return r==null?0:1+this.countNodeBelow(r.leftNode)+this.countNodeBelow(r.rightNode)}inOrderSuccessor(r){for(;r.leftNode!=null;)r=r.leftNode;return r}}},9368:(Y,R,v)=>{v.d(R,{I:()=>o,r:()=>t});var _=v(1833),L=v(370),r=v(1317),h=v(5760),k=v(4244),w=v(3693),p=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})};function t(a){return p(this,void 0,void 0,function*(){const f=k.Logger.logfunction("GetConceptBulk",[a.length])||{};let C=[],A=(new Date().getTime(),performance.now()),u=Array.from(new Set(a));try{if(k.serviceWorker){f.serviceWorker=!0;try{const c=yield(0,k.sendMessage)("GetConceptBulk",{passedConcepts:a});if(c.data&&c.data.length>0)for(const i of c.data)_.I.AddConceptToMemory(i);return k.Logger.logUpdate(f),c.data}catch(c){(0,h.ey)(f,"GetConceptBulk",c),(0,k.handleServiceWorkerException)(c)}}if(u.length>0){let c=[];for(let i=0;i<u.length;i++)if(!_.I.GetNpc(u[i])){Number(u[i]);let d=yield _.I.GetConcept(u[i]);d.id==0?c.push(u[i]):C.push(d)}if(c.length==0)return k.Logger.logfunction(f),C;{let i;const d={method:"POST",headers:yield(0,r.Xr)(),body:JSON.stringify(c)};try{i=yield(0,r.Hh)(L.B.GetConceptBulkUrl(),d)}catch{i=yield(0,w.g)(d,"/api/get_concept_bulk")}yield function(g,y,b,x,N){return p(this,void 0,void 0,function*(){if(g.ok){let B=yield g.json();if(B.length>0)for(let O=0;O<B.length;O++){let G=B[O];_.I.AddConcept(G),b.push(G)}k.Logger.logUpdate(x)}else k.Logger.logError(N,"unknown","read","unknown",void 0,g.status,g,"GetConceptBulk",[y],"unknown",void 0),(0,h.ry)(g)})}(i,a,C,f,A)}}}catch(c){k.Logger.logError(A,"unknown","read","unknown",void 0,500,c,"GetConceptBulk",[a],"unknown",void 0),(0,h.Mb)(c,L.B.GetConceptBulkUrl()),(0,h.ey)(f,"GetConceptBulk",c)}return C})}function o(a){return p(this,void 0,void 0,function*(){const f=[];if(a.length>0){const C=yield(0,r.Xr)("application/json");try{const A=yield(0,r.Hh)(L.B.GetConceptBulkUrl(),{method:"POST",headers:C,body:JSON.stringify(a)});if(A.ok){const u=yield A.json();if(u.length>0)for(let c=0;c<u.length;c++){const i=u[c];f.push(i),_.I.AddConcept(i)}}else(0,h.ry)(A)}catch(A){(0,h.Mb)(A,L.B.GetConceptBulkUrl())}}return f})}},9371:(Y,R,v)=>{let _=v(3152);class L extends _{constructor(h){super(h),this.type="comment"}}Y.exports=L,L.default=L},9536:(Y,R,v)=>{v.d(R,{r:()=>t});var _=v(1833),L=v(370),r=v(1317),h=v(4244),k=v(5760),w=v(3693),p=function(o,a,f,C){return new(f||(f=Promise))(function(A,u){function c(g){try{d(C.next(g))}catch(y){u(y)}}function i(g){try{d(C.throw(g))}catch(y){u(y)}}function d(g){var y;g.done?A(g.value):(y=g.value,y instanceof f?y:new f(function(b){b(y)})).then(c,i)}d((C=C.apply(o,[])).next())})};function t(o){var a=arguments;return p(this,void 0,void 0,function*(){const f=h.Logger.logfunction("GetConcept",a)||{};let C=(0,h.CreateDefaultConcept)();const A=new FormData;A.append("id",o.toString());try{if(h.serviceWorker){f.serviceWorker=!0;try{const i=yield(0,h.sendMessage)("GetConcept",{id:o});return h.Logger.logUpdate(f),i.data}catch(i){(0,k.ey)(f,"GetConcept",i),(0,h.handleServiceWorkerException)(i)}}if(o==0||o==null||o==null)return C;var u=yield _.I.GetConcept(o);let c=_.I.GetNpc(o);if(u.id!=0||c)return h.Logger.logUpdate(f),u;{let i;const d={method:"POST",body:A,headers:yield(0,r.BZ)()};try{i=yield(0,r.Hh)(L.B.GetConceptUrl(),d)}catch{i=yield(0,w.g)(d,"/api/getConcept")}return yield function(g,y,b,x){return p(this,void 0,void 0,function*(){return g.ok?(y=yield g.json()).id>0?_.I.AddConcept(y):_.I.AddNpc(x):(0,k.ry)(g),h.Logger.logUpdate(b),y})}(i,C,f,o)}}catch(c){(0,k.Mb)(c,L.B.GetConceptUrl()),(0,k.ey)(f,"GetConcept",c)}})}},9577:(Y,R,v)=>{let _=v(7793),L=v(1106),r=v(8339);function h(k,w){let p=new L(k,w),t=new r(p);try{t.parse()}catch(o){throw o}return t.root}Y.exports=h,h.default=h,_.registerParse(h)},9606:(Y,R,v)=>{R.__esModule=!0,R.unesc=R.stripComments=R.getProp=R.ensureObject=void 0;var _=k(v(5286));R.unesc=_.default;var L=k(v(6291));R.getProp=L.default;var r=k(v(1557));R.ensureObject=r.default;var h=k(v(8354));function k(w){return w&&w.__esModule?w:{default:w}}R.stripComments=h.default},9720:(Y,R,v)=>{R.__esModule=!0,R.default=void 0;var _,L=(_=v(3295))&&_.__esModule?_:{default:_},r=v(1581);function h(w,p){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},h(w,p)}var k=function(w){var p,t;function o(a){var f;return(f=w.call(this,a)||this).type=r.TAG,f}return t=w,(p=o).prototype=Object.create(t.prototype),p.prototype.constructor=p,h(p,t),o}(L.default);R.default=k,Y.exports=R.default},9746:()=>{},9775:(Y,R,v)=>{v.d(R,{p:()=>o,B:()=>t});var _=v(370),L=v(1317),r=v(5760),h=v(4244),k=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})},w=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})},p=function(a,f,C,A){return new(C||(C=Promise))(function(u,c){function i(y){try{g(A.next(y))}catch(b){c(b)}}function d(y){try{g(A.throw(y))}catch(b){c(b)}}function g(y){var b;y.done?u(y.value):(b=y.value,b instanceof C?b:new C(function(x){x(b)})).then(i,d)}g((A=A.apply(a,[])).next())})};class t{static getId(){return p(this,void 0,void 0,function*(){this.ids.length<5&&(yield function(){var C=arguments;return w(this,void 0,void 0,function*(){const A=h.Logger.logfunction("GetReservedIds",C);try{let u=yield(0,L.Xr)("application/x-www-form-urlencoded");const c=yield(0,L.Hh)(_.B.GetReservedIdUrl(),{method:"GET",headers:u});if(!c.ok)throw(0,r.ry)(c),new Error(`Error! status: ${c.status}`);const i=yield c.json();for(let d=0;d<i.length;d++)t.AddId(i[d]);h.Logger.logUpdate(A)}catch(u){(0,r.Mb)(u,_.B.GetReservedIdUrl()),(0,r.ey)(A,"GetReservedIds",u)}})}());var f=this.ids[0];return this.ids.shift(),f})}static AddId(f){this.ids.includes(f)||this.ids.push(f)}}t.ids=[];class o{static getId(){return p(this,void 0,void 0,function*(){this.connectionIds.length<5&&(yield function(){var C=arguments;return k(this,void 0,void 0,function*(){const A=h.Logger.logfunction("GetReservedConnectionIds",C);try{let u=yield(0,L.Xr)("application/x-www-form-urlencoded");const c=yield(0,L.Hh)(_.B.GetReservedConnectionIdUrl(),{method:"GET",headers:u});if(!c.ok)throw(0,r.ry)(c),new Error(`Error! status: ${c.status}`);const i=yield c.json();for(let d=0;d<i.length;d++)o.AddId(i[d]);h.Logger.logUpdate(A)}catch(u){(0,r.Mb)(u,_.B.GetReservedConnectionIdUrl()),(0,r.ey)(A,"GetReservedConnectionIds",u)}})}());var f=this.connectionIds[0];return this.connectionIds.shift(),f})}static AddId(f){this.connectionIds.includes(f)||this.connectionIds.push(f)}}o.connectionIds=[]},9783:(Y,R,v)=>{v.d(R,{d:()=>p});var _=v(4244),L=v(6931),r=v(4174),h=v(8800),k=function(t,o,a,f){return new(a||(a=Promise))(function(C,A){function u(d){try{i(f.next(d))}catch(g){A(g)}}function c(d){try{i(f.throw(d))}catch(g){A(g)}}function i(d){var g;d.done?C(d.value):(g=d.value,g instanceof a?g:new a(function(y){y(g)})).then(u,c)}i((f=f.apply(t,[])).next())})};class w extends h.w{constructor(o,a,f,C,A){super(),this.connections=[],this.data=[],this.mainConcept=o,this.linker=a,this.inpage=f,this.page=C,this.format=A}bind(){return k(this,void 0,void 0,function*(){var o;if(!this.isDataLoaded){let C=yield(0,_.GetTheConcept)(this.mainConcept),A=((o=C.type)===null||o===void 0?void 0:o.characterValue)+"_s_"+this.linker,u=yield(0,_.GetConceptByCharacterAndType)(A,16);if(u.id>0){let c=yield(0,_.GetConnectionOfTheConcept)(u.id,C.id,C.userId,this.inpage,this.page);this.connections=c;for(var a=[],f=0;f<this.connections.length;f++)a.push(this.connections[f].toTheConceptId),this.linkers.push(this.connections[f].id),this.listenToEvent(this.connections[f].toTheConceptId);yield(0,_.GetAllConnectionsOfCompositionBulk)(a)}this.isDataLoaded=!0,this.listenToEvent(this.mainConcept)}return yield this.build()})}build(){return k(this,void 0,void 0,function*(){this.data=[],this.connections=yield(0,_.GetConnectionBulk)(this.linkers);for(var o=0;o<this.connections.length;o++){let a=this.connections[o].toTheConceptId,f=yield(0,_.GetTheConcept)(a);if(this.format==L.yv){let C=yield(0,r.RW)(f.id);this.data.push(C)}else if(this.format==L.ZJ){let C=yield(0,r.kx)(f.id);this.data.push(C)}else if(this.format==L.iw){let C=yield(0,_.GetCompositionWithIdAndDateFromMemory)(f.id);this.data.push(C)}else{let C=yield(0,_.GetCompositionWithIdAndDateFromMemory)(f.id);this.data.push(C)}}return this.data})}}function p(t,o,a,f,C=L.yv){return new w(t,o,a,f,C)}},9789:(Y,R,v)=>{v.d(R,{B:()=>_});class _{static getValue(r,h=null){return r in this.environments?this.environments[r]:h}static setValue(r,h){return this.environments[r]=h,this}}_.environments={}},9858:(Y,R,v)=>{v.d(R,{m:()=>a,E:()=>f});var _=v(4244),L=v(5760),r=v(1317),h=function(C,A,u,c){return new(u||(u=Promise))(function(i,d){function g(x){try{b(c.next(x))}catch(N){d(N)}}function y(x){try{b(c.throw(x))}catch(N){d(N)}}function b(x){var N;x.done?i(x.value):(N=x.value,N instanceof u?N:new u(function(B){B(N)})).then(g,y)}b((c=c.apply(C,[])).next())})},k=v(370),w=function(C,A,u,c){return new(u||(u=Promise))(function(i,d){function g(x){try{b(c.next(x))}catch(N){d(N)}}function y(x){try{b(c.throw(x))}catch(N){d(N)}}function b(x){var N;x.done?i(x.value):(N=x.value,N instanceof u?N:new u(function(B){B(N)})).then(g,y)}b((c=c.apply(C,[])).next())})},p=v(413),t=v(3967),o=function(C,A,u,c){return new(u||(u=Promise))(function(i,d){function g(x){try{b(c.next(x))}catch(N){d(N)}}function y(x){try{b(c.throw(x))}catch(N){d(N)}}function b(x){var N;x.done?i(x.value):(N=x.value,N instanceof u?N:new u(function(B){B(N)})).then(g,y)}b((c=c.apply(C,[])).next())})};function a(C){var A=arguments;return o(this,void 0,void 0,function*(){const u=_.Logger.logfunction("DeleteConnectionById",A);if(_.serviceWorker)try{return(yield(0,_.sendMessage)("DeleteConnectionById",{id:C})).data}catch(i){(0,_.handleServiceWorkerException)(i)}let c=!0;return C>0?(c=yield function(i){var d=arguments;return w(this,void 0,void 0,function*(){const g=_.Logger.logfunction("DeleteTheConnection",d);let y=!1;try{const b=new FormData;b.append("id",i.toString());let x=yield(0,r.BZ)();const N=yield(0,r.Hh)(k.B.DeleteTheConnectionUrl(),{method:"POST",headers:x,body:b,redirect:"follow"});_.Logger.logUpdate(g),N.ok?y=(yield N.json()).success:(0,L.ry)(N),y&&_.ConnectionData.AddNpConn(i)}catch(b){(0,L.Mb)(b,k.B.DeleteTheConnectionUrl()),(0,L.ey)(g,"DeleteTheConnection",b)}return y})}(C),p.O.removeNodeFromTree(C)):t.G.RemoveConnectionById(C),_.Logger.logUpdate(u),c})}function f(C){var A=arguments;return o(this,void 0,void 0,function*(){const u=_.Logger.logfunction("DeleteConnectionByIdBulk",A);if(_.serviceWorker)try{return(yield(0,_.sendMessage)("DeleteConnectionByIdBulk",{ids:C})).data}catch(i){(0,_.handleServiceWorkerException)(i)}let c=yield function(i){var d=arguments;return h(this,void 0,void 0,function*(){const g=_.Logger.logfunction("DeleteTheConnectionBulkApi",d);let y=!1;try{let b=yield(0,r.BZ)();b.append("Content-Type","application/json");const x=yield(0,r.Hh)(_.BaseUrl.DeleteTheConnectionBulkUrl(),{method:"POST",headers:b,body:JSON.stringify(i)});if(_.Logger.logUpdate(g),x.ok?y=(yield x.json()).success:(0,L.ry)(x),y)for(let N=0;N<i.length;N++){let B=i[N];_.ConnectionData.AddNpConn(B)}}catch(b){(0,L.Mb)(b,_.BaseUrl.DeleteTheConnectionUrl()),(0,L.ey)(g,"DeleteTheConnectionBulkApi",b)}return y})}(C);if(c)for(let i=0;i<C.length;i++){let d=C[i];d>0?p.O.removeNodeFromTree(d):t.G.RemoveConnectionById(d)}return _.Logger.logUpdate(u),c})}},9911:(Y,R,v)=>{v.d(R,{u:()=>L});var _=v(3008);function L(){let r=new Date,h=new Date;return new _.j(0,0,0,0,0,"0",0,!1,r,h,"0")}},9977:()=>{}},As={};function Vt(Y){var R=As[Y];if(R!==void 0)return R.exports;var v=As[Y]={exports:{}};return Ua[Y](v,v.exports,Vt),v.exports}Vt.n=Y=>{var R=Y&&Y.__esModule?()=>Y.default:()=>Y;return Vt.d(R,{a:R}),R},Vt.d=(Y,R)=>{for(var v in R)Vt.o(R,v)&&!Vt.o(Y,v)&&Object.defineProperty(Y,v,{enumerable:!0,get:R[v]})},Vt.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),Vt.o=(Y,R)=>Object.prototype.hasOwnProperty.call(Y,R),Vt.r=Y=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Y,"__esModule",{value:!0})};var Z=Vt(4244);const Ga=Z.ADMIN,Ma=Z.ALLID,Wa=Z.AccessControlService,ja=Z.AccessTracker,Va=Z.AddGhostConcept,qa=Z.Anomaly,Ha=Z.BaseUrl,$a=Z.BinaryTree,za=Z.BuildWidgetFromId,Ja=Z.BuilderStatefulWidget,Qa=Z.Composition,Ya=Z.CompositionBinaryTree,Xa=Z.CompositionNode,Ka=Z.Concept,Za=Z.ConceptsData,ec=Z.Connection,tc=Z.ConnectionData,nc=Z.CountInfo,oc=Z.CreateComposition,ic=Z.CreateConnection,rc=Z.CreateConnectionBetweenEntityLocal,sc=Z.CreateConnectionBetweenTwoConcepts,ac=Z.CreateConnectionBetweenTwoConceptsGeneral,cc=Z.CreateConnectionBetweenTwoConceptsLocal,lc=Z.CreateData,dc=Z.CreateDefaultConcept,uc=Z.CreateDefaultLConcept,hc=Z.CreateSession,pc=Z.CreateSessionVisit,fc=Z.CreateTheCompositionLocal,mc=Z.CreateTheCompositionWithCache,yc=Z.CreateTheConnection,gc=Z.CreateTheConnectionGeneral,vc=Z.CreateTheConnectionLocal,Cc=Z.DATAID,bc=Z.DATAIDDATE,Ic=Z.DATAV2,wc=Z.DelayFunctionExecution,Tc=Z.DeleteConceptById,kc=Z.DeleteConceptLocal,Ac=Z.DeleteConnectionById,_c=Z.DeleteConnectionByIdBulk,Sc=Z.DeleteConnectionByType,xc=Z.DeleteConnectionByTypeBulk,Nc=Z.DeleteUser,Lc=Z.DependencyObserver,Dc=Z.Environments,Pc=Z.FilterSearch,Rc=Z.FormatFromConnections,Bc=Z.FormatFromConnectionsAltered,Ec=Z.FreeschemaQuery,Oc=Z.FreeschemaQueryApi,Fc=Z.GetAllConnectionsOfComposition,Uc=Z.GetAllConnectionsOfCompositionBulk,Gc=Z.GetAllLinkerConnectionsFromTheConcept,Mc=Z.GetAllTheConnectionsByTypeAndOfTheConcept,Wc=Z.GetComposition,jc=Z.GetCompositionBulk,Vc=Z.GetCompositionBulkWithDataId,qc=Z.GetCompositionFromConnectionsWithDataId,Hc=Z.GetCompositionFromConnectionsWithDataIdFromConnections,$c=Z.GetCompositionFromConnectionsWithDataIdInObject,zc=Z.GetCompositionFromConnectionsWithDataIdIndex,Jc=Z.GetCompositionFromConnectionsWithIndex,Qc=Z.GetCompositionFromConnectionsWithIndexFromConnections,Yc=Z.GetCompositionFromMemoryWithConnections,Xc=Z.GetCompositionList,Kc=Z.GetCompositionListAll,Zc=Z.GetCompositionListAllWithId,el=Z.GetCompositionListListener,tl=Z.GetCompositionListLocal,nl=Z.GetCompositionListLocalWithId,ol=Z.GetCompositionListWithId,il=Z.GetCompositionListWithIdUpdated,rl=Z.GetCompositionListener,sl=Z.GetCompositionLocal,al=Z.GetCompositionLocalWithId,cl=Z.GetCompositionWithAllIds,ll=Z.GetCompositionWithCache,dl=Z.GetCompositionWithDataIdBulk,ul=Z.GetCompositionWithDataIdWithCache,hl=Z.GetCompositionWithId,pl=Z.GetCompositionWithIdAndDateFromMemory,fl=Z.GetConceptBulk,ml=Z.GetConceptByCharacter,yl=Z.GetConceptByCharacterAndCategoryLocal,gl=Z.GetConceptByCharacterAndType,vl=Z.GetConnectionBetweenTwoConceptsLinker,Cl=Z.GetConnectionBulk,bl=Z.GetConnectionById,Il=Z.GetConnectionDataPrefetch,wl=Z.GetConnectionOfTheConcept,Tl=Z.GetConnectionTypeForCount,kl=Z.GetConnectionsBetweenApi,Al=Z.GetFreeschemaImage,_l=Z.GetFreeschemaImageUrl,Sl=Z.GetImageApi,xl=Z.GetInstanceConceptByCharacterType,Nl=Z.GetLink,Ll=Z.GetLinkListListener,Dl=Z.GetLinkListener,Pl=Z.GetLinkRaw,Rl=Z.GetLinkerConnectionFromConcepts,Bl=Z.GetLinkerConnectionToConcepts,El=Z.GetRelation,Ol=Z.GetRelationLocal,Fl=Z.GetRelationNew,Ul=Z.GetRelationRaw,Gl=Z.GetTheConcept,Ml=Z.GetTheConceptLocal,Wl=Z.GetUserGhostId,jl=Z.JUSTDATA,Vl=Z.LConcept,ql=Z.LConnection,Hl=Z.LISTNORMAL,$l=Z.LocalConceptsData,zl=Z.LocalSyncData,Jl=Z.LocalTransaction,Ql=Z.LogEvent,Yl=Z.Logger,Xl=Z.LoginToBackend,Kl=Z.MakeTheInstanceConcept,Zl=Z.MakeTheInstanceConceptLocal,ed=Z.MakeTheTimestamp,td=Z.MakeTheTypeConceptApi,nd=Z.MakeTheTypeConceptLocal,od=Z.NORMAL,id=Z.PRIVATE,rd=Z.PUBLIC,sd=Z.PatcherStructure,ad=Z.Prototype,cd=Z.RAW,ld=Z.RecursiveSearchApi,dd=Z.RecursiveSearchApiNewRawFullLinker,ud=Z.RecursiveSearchApiRaw,hd=Z.RecursiveSearchApiRawFullLinker,pd=Z.RecursiveSearchApiWithInternalConnections,fd=Z.RecursiveSearchListener,md=Z.SchemaQuery,yd=Z.SchemaQueryListener,gd=Z.SearchAllConcepts,vd=Z.SearchLinkInternal,Cd=Z.SearchLinkInternalAll,bd=Z.SearchLinkMultipleAll,Id=Z.SearchLinkMultipleAllObservable,wd=Z.SearchLinkMultipleApi,Td=Z.SearchQuery,kd=Z.SearchStructure,Ad=Z.SearchWithLinker,_d=Z.SearchWithTypeAndLinker,Sd=Z.SearchWithTypeAndLinkerApi,xd=Z.Selector,Nd=Z.SessionData,Ld=Z.Signin,Dd=Z.Signup,Pd=Z.SignupEntity,Rd=Z.SplitStrings,Bd=Z.StatefulWidget,Ed=Z.SyncData,Od=Z.TokenStorage,Fd=Z.TrashTheConcept,Ud=Z.UpdateComposition,Gd=Z.UpdateCompositionLocal,Md=Z.UserBinaryTree,Wd=Z.Validator,jd=Z.ViewInternalData,Vd=Z.ViewInternalDataApi,qd=Z.WidgetTree,Hd=Z.buildFetchConnection,$d=Z.clearAllCaches,zd=Z.convertFromConceptToLConcept,Jd=Z.convertFromLConceptToConcept,Qd=Z.convertWidgetTreeToWidget,Yd=Z.convertWidgetTreeToWidgetWithWrapper,Xd=Z.createFormFieldData,Kd=Z.createPrototypeLocal,Zd=Z.dispatchIdEvent,eu=Z.getFromDatabaseWithType,tu=Z.getObjectsFromIndexDb,nu=Z.getR2PresignedUploadUrl,ou=Z.getUploadFileLimit,iu=Z.getUserDetails,ru=Z.getUserDetailsWithRefresh,su=Z.getWidgetBulkFromId,au=Z.getWidgetFromId,cu=Z.handleServiceWorkerException,lu=Z.hasActivatedSW,du=Z.importLatestWidget,uu=Z.importRecentWidget,hu=Z.init,pu=Z.orderTheConnections,fu=Z.recursiveFetch,mu=Z.recursiveFetchNew,yu=Z.removeAllChildren,gu=Z.renderImportedWidget,vu=Z.renderLatestWidget,Cu=Z.renderPage,bu=Z.renderWidget,Iu=Z.searchLinkMultipleListener,wu=Z.sendEmail,Tu=Z.sendMessage,ku=Z.sendPersonalEmail,Au=Z.serviceWorker,_u=Z.setHasActivatedSW,Su=Z.storeToDatabase,xu=Z.subscribedListeners,Nu=Z.unwrapContainers,Lu=Z.updateAccessToken,Du=Z.uploadAttachment,Pu=Z.uploadFile,Ru=Z.uploadImage,Bu=Z.uploadImageV2,Eu=Z.uploadR2Storage,Ou=Z.uploadToR2PresignedUrl,Fu=Z.uploadWithR2PresignedUrl,Uu=Z.validDocumentFormats,Gu=Z.validImageFormats,Mu=Object.freeze(Object.defineProperty({__proto__:null,ADMIN:Ga,ALLID:Ma,AccessControlService:Wa,AccessTracker:ja,AddGhostConcept:Va,Anomaly:qa,BaseUrl:Ha,BinaryTree:$a,BuildWidgetFromId:za,BuilderStatefulWidget:Ja,Composition:Qa,CompositionBinaryTree:Ya,CompositionNode:Xa,Concept:Ka,ConceptsData:Za,Connection:ec,ConnectionData:tc,CountInfo:nc,CreateComposition:oc,CreateConnection:ic,CreateConnectionBetweenEntityLocal:rc,CreateConnectionBetweenTwoConcepts:sc,CreateConnectionBetweenTwoConceptsGeneral:ac,CreateConnectionBetweenTwoConceptsLocal:cc,CreateData:lc,CreateDefaultConcept:dc,CreateDefaultLConcept:uc,CreateSession:hc,CreateSessionVisit:pc,CreateTheCompositionLocal:fc,CreateTheCompositionWithCache:mc,CreateTheConnection:yc,CreateTheConnectionGeneral:gc,CreateTheConnectionLocal:vc,DATAID:Cc,DATAIDDATE:bc,DATAV2:Ic,DelayFunctionExecution:wc,DeleteConceptById:Tc,DeleteConceptLocal:kc,DeleteConnectionById:Ac,DeleteConnectionByIdBulk:_c,DeleteConnectionByType:Sc,DeleteConnectionByTypeBulk:xc,DeleteUser:Nc,DependencyObserver:Lc,Environments:Dc,FilterSearch:Pc,FormatFromConnections:Rc,FormatFromConnectionsAltered:Bc,FreeschemaQuery:Ec,FreeschemaQueryApi:Oc,GetAllConnectionsOfComposition:Fc,GetAllConnectionsOfCompositionBulk:Uc,GetAllLinkerConnectionsFromTheConcept:Gc,GetAllTheConnectionsByTypeAndOfTheConcept:Mc,GetComposition:Wc,GetCompositionBulk:jc,GetCompositionBulkWithDataId:Vc,GetCompositionFromConnectionsWithDataId:qc,GetCompositionFromConnectionsWithDataIdFromConnections:Hc,GetCompositionFromConnectionsWithDataIdInObject:$c,GetCompositionFromConnectionsWithDataIdIndex:zc,GetCompositionFromConnectionsWithIndex:Jc,GetCompositionFromConnectionsWithIndexFromConnections:Qc,GetCompositionFromMemoryWithConnections:Yc,GetCompositionList:Xc,GetCompositionListAll:Kc,GetCompositionListAllWithId:Zc,GetCompositionListListener:el,GetCompositionListLocal:tl,GetCompositionListLocalWithId:nl,GetCompositionListWithId:ol,GetCompositionListWithIdUpdated:il,GetCompositionListener:rl,GetCompositionLocal:sl,GetCompositionLocalWithId:al,GetCompositionWithAllIds:cl,GetCompositionWithCache:ll,GetCompositionWithDataIdBulk:dl,GetCompositionWithDataIdWithCache:ul,GetCompositionWithId:hl,GetCompositionWithIdAndDateFromMemory:pl,GetConceptBulk:fl,GetConceptByCharacter:ml,GetConceptByCharacterAndCategoryLocal:yl,GetConceptByCharacterAndType:gl,GetConnectionBetweenTwoConceptsLinker:vl,GetConnectionBulk:Cl,GetConnectionById:bl,GetConnectionDataPrefetch:Il,GetConnectionOfTheConcept:wl,GetConnectionTypeForCount:Tl,GetConnectionsBetweenApi:kl,GetFreeschemaImage:Al,GetFreeschemaImageUrl:_l,GetImageApi:Sl,GetInstanceConceptByCharacterType:xl,GetLink:Nl,GetLinkListListener:Ll,GetLinkListener:Dl,GetLinkRaw:Pl,GetLinkerConnectionFromConcepts:Rl,GetLinkerConnectionToConcepts:Bl,GetRelation:El,GetRelationLocal:Ol,GetRelationNew:Fl,GetRelationRaw:Ul,GetTheConcept:Gl,GetTheConceptLocal:Ml,GetUserGhostId:Wl,JUSTDATA:jl,LConcept:Vl,LConnection:ql,LISTNORMAL:Hl,LocalConceptsData:$l,LocalSyncData:zl,LocalTransaction:Jl,LogEvent:Ql,Logger:Yl,LoginToBackend:Xl,MakeTheInstanceConcept:Kl,MakeTheInstanceConceptLocal:Zl,MakeTheTimestamp:ed,MakeTheTypeConceptApi:td,MakeTheTypeConceptLocal:nd,NORMAL:od,PRIVATE:id,PUBLIC:rd,PatcherStructure:sd,Prototype:ad,RAW:cd,RecursiveSearchApi:ld,RecursiveSearchApiNewRawFullLinker:dd,RecursiveSearchApiRaw:ud,RecursiveSearchApiRawFullLinker:hd,RecursiveSearchApiWithInternalConnections:pd,RecursiveSearchListener:fd,SchemaQuery:md,SchemaQueryListener:yd,SearchAllConcepts:gd,SearchLinkInternal:vd,SearchLinkInternalAll:Cd,SearchLinkMultipleAll:bd,SearchLinkMultipleAllObservable:Id,SearchLinkMultipleApi:wd,SearchQuery:Td,SearchStructure:kd,SearchWithLinker:Ad,SearchWithTypeAndLinker:_d,SearchWithTypeAndLinkerApi:Sd,Selector:xd,SessionData:Nd,Signin:Ld,Signup:Dd,SignupEntity:Pd,SplitStrings:Rd,StatefulWidget:Bd,SyncData:Ed,TokenStorage:Od,TrashTheConcept:Fd,UpdateComposition:Ud,UpdateCompositionLocal:Gd,UserBinaryTree:Md,Validator:Wd,ViewInternalData:jd,ViewInternalDataApi:Vd,WidgetTree:qd,buildFetchConnection:Hd,clearAllCaches:$d,convertFromConceptToLConcept:zd,convertFromLConceptToConcept:Jd,convertWidgetTreeToWidget:Qd,convertWidgetTreeToWidgetWithWrapper:Yd,createFormFieldData:Xd,createPrototypeLocal:Kd,dispatchIdEvent:Zd,getFromDatabaseWithType:eu,getObjectsFromIndexDb:tu,getR2PresignedUploadUrl:nu,getUploadFileLimit:ou,getUserDetails:iu,getUserDetailsWithRefresh:ru,getWidgetBulkFromId:su,getWidgetFromId:au,handleServiceWorkerException:cu,hasActivatedSW:lu,importLatestWidget:du,importRecentWidget:uu,init:hu,orderTheConnections:pu,recursiveFetch:fu,recursiveFetchNew:mu,removeAllChildren:yu,renderImportedWidget:gu,renderLatestWidget:vu,renderPage:Cu,renderWidget:bu,searchLinkMultipleListener:Iu,sendEmail:wu,sendMessage:Tu,sendPersonalEmail:ku,serviceWorker:Au,setHasActivatedSW:_u,storeToDatabase:Su,subscribedListeners:xu,unwrapContainers:Nu,updateAccessToken:Lu,uploadAttachment:Du,uploadFile:Pu,uploadImage:Ru,uploadImageV2:Bu,uploadR2Storage:Eu,uploadToR2PresignedUrl:Ou,uploadWithR2PresignedUrl:Fu,validDocumentFormats:Uu,validImageFormats:Gu},Symbol.toStringTag,{value:"Module"})),Wu=`export declare class AccessTracker {
    private static conceptsData;
    private static connectionsData;
    private static readonly SYNC_INTERVAL_MS;
    private static nextSyncTime;
    static activateStatus: boolean;
    private static readonly accessData;
    private static autoSyncInterval;
    /**
     * Increments the count for a specific conceptId.
     */
    static incrementConcept(conceptId: number): void;
    /**
     * Increments the count for a specific connectionId.
     */
    static incrementConnection(connectionId: number): void;
    /**
     * Retrieves the top N concepts by their counts.
     */
    static getTopConcepts(n: number): [number, number][];
    /**
     * Retrieves the top N connections by their counts.
     */
    static getTopConnections(n: number): [number, number][];
    /**
     * Saves the concept and connection data to localStorage.
     */
    static saveDataToLocalStorage(): void;
    /**
     * Loads the concept and connection data from localStorage.
     */
    static loadDataFromLocalStorage(): void;
    static sendToServer(): Promise<void>;
    /**
     * Syncs the concept and connection data with the server.
     */
    private static syncToServer;
    /**
     * Sets the next sync time based on the current time and sync interval.
     */
    private static setNextSyncTime;
    /**
     * Starts auto-syncing to the server every specified time interval.
     * This will automatically call \`syncToServer\` every 5 minutes
     */
    static startAutoSync(): void;
    /**
     * Stops the access tracker auto-sync timer.
     */
    static stopAutoSync(): void;
    /**
     * Sync immediately called by setInterval when time to sync has arrived.
     */
    private static syncNow;
    /**
     * Fetch suggested concepts from the server with proper error handling.
     */
    static GetSuggestedConcepts(top?: number): Promise<any>;
    /**
     * Fetch suggested connections from the server with proper error handling.
     * @param top number of connections to get load
     */
    static GetSuggestedConnections(top?: number): Promise<any>;
    /**
     * Add Concepts to Binary Tree
     */
    private static addConceptToBinaryTree;
    /**
     * Add Concepts to Binary Tree
     */
    private static addConnectionToBinaryTree;
}
`,ju=`import { FormFieldData } from "../Validator/interface";
/**
 * Class representing the Anomaly detection logic for checking data validity based on predefined rules.
 * This class contains methods for initializing, caching, and fetching anomaly parameters from an external API,
 * as well as checking for anomalies in individual concepts and bulk data.
 */
export declare class Anomaly {
    /**
     * Static cache for storing fetched anomaly parameters.
     * @type {any} - Stores the fetched anomaly parameters from the API.
     */
    private static anomalyParamsCache;
    /**
     * Flag indicating if the anomaly parameters cache has been initialized.
     * @type {boolean} - \`true\` if the cache is initialized, \`false\` otherwise.
     */
    private static cacheInitialized;
    /**
     * Timestamp indicating the last time the anomaly parameters were fetched.
     * @type {number} - Time in milliseconds.
     */
    private static lastFetchedTime;
    /**
     * Cache expiry threshold, after which the data will be considered expired.
     * @type {number} - Cache expiry threshold in milliseconds (default is 10 minutes).
     */
    private static cacheExpiryThreshold;
    /**
     * Constructor that initializes anomaly parameters if the cache is not yet initialized.
     * It ensures that the anomaly parameters are loaded and cached for use.
     */
    constructor();
    /**
     * Initializes the anomaly parameters by fetching them from the API.
     * This method is only run once on startup to ensure the cache is ready for use.
     * It will fetch the parameters from the API and store them in a static cache.
     *
     * @returns {Promise<void>} - A promise that resolves once the parameters have been initialized.
     */
    private static initializeAnomalyParameters;
    /**
     * Fetches the anomaly parameters.
     * It first checks if the parameters are cached and whether the cache is still valid (not expired).
     * If the cache is valid, it returns the cached data. If not, it fetches the data from the API.
     *
     * @returns {Promise<any>} - A promise that resolves to the anomaly parameters.
     */
    static getAnomalyParameters(): Promise<any>;
    /**
     * Fetches anomaly parameters directly from the backend API.
     * This method is used internally by \`getAnomalyParameters\` to retrieve fresh data.
     *
     * @returns {Promise<any>} - A promise that resolves to the fetched anomaly parameters.
     */
    private static fetchAnomalyParameters;
    /**
     * Refreshes the anomaly parameters cache if the cache has expired.
     * If the cache expiry threshold has been surpassed, the method re-fetches the data from the API.
     *
     * @returns {Promise<void>} - A promise that resolves when the cache has been refreshed.
     */
    private static refreshCache;
    /**
     * Detects the data type of a given value based on predefined rules.
     * It checks the value against the \`DATA_TYPES_RULES\` to find the matching data type.
     *
     * @param {string} value - The value to check.
     * @returns {string | null} - The detected data type, or \`null\` if no match is found.
     */
    detectDataType(value: string): string | null;
    /**
     * Checks whether a given concept and value pair contains an anomaly.
     * An anomaly is detected based on the concept's length and type rules.
     *
     * @param {string} typeConcept - The concept type (e.g., \`the_name\`).
     * @param {string} value - The value to check for anomalies.
     * @returns {Promise<{ valid: boolean, warnings: string[] }>} - A promise that resolves to an object containing:
     * - \`valid\`: A boolean indicating whether the value is valid according to the anomaly rules.
     * - \`warnings\`: An array of warning messages related to the value's anomalies.
     */
    checkConceptAnomaly(typeConcept: string, value: string | null): Promise<{
        valid: boolean;
        warnings: string[];
    }>;
    /**
     * Checks anomalies for multiple concepts in bulk.
     * Iterates over a record of concept-value pairs and detects anomalies.
     *
     * @param {Record<string, string>} instanceData - An object where each key is a concept type and each value is the corresponding data value.
     * @returns {Promise<Record<string, { valid: boolean, warnings: string[] }>>} - A promise that resolves to an object where each key is a concept type
     * and the value is an object containing \`valid\` (boolean) and \`warnings\` (array of warning messages).
     */
    static checkAnomalyInBulk(formData: Record<string, FormFieldData>): Promise<Record<string, {
        valid: boolean;
        warnings: string[];
    }>>;
    /**
     * List all the exported functions of the package
     * @returns Keys of the Object which has exported functions
     */
    static getExportedFunction(): string[];
    private static getFunctionaAnomalyParameters;
}
`,Vu=`import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
/**
 * Creates a character on the backend server with local caching.
 *
 * **Logic**:
 * 1. Checks CharacterRepository for existing character by data value
 * 2. If exists locally: Returns existing character ID
 * 3. If not exists: Creates on server and adds to local repository
 *
 * Character data represents string values used across the system with deduplication.
 *
 * @param characterData - TheCharacter object to create
 * @returns Returner object with character ID and metadata
 * @throws Error if HTTP request fails
 *
 * @example
 * const char = await CreateTheCharacter({
 *   data: "user@example.com",
 *   userId: 42
 * });
 * // If "user@example.com" already exists, returns existing ID
 */
export declare function CreateTheCharacter(characterData: TheCharacter): Promise<Returner>;
`,qu=`import { Concept } from "../../DataStructures/Concept";
/**
 * Creates a concept on the backend server via API.
 *
 * Sends concept data to the backend server for creation. Returns the created
 * concept with server-assigned positive ID.
 *
 * @param conceptData - Concept data to create (can be partial concept object)
 * @returns Created Concept object with server-assigned ID
 * @throws Error if HTTP request fails or server returns error status
 *
 * @example
 * const newConcept = await CreateTheConceptApi({
 *   characterValue: "Alice",
 *   typeId: 100,
 *   userId: 42
 * });
 * console.log(newConcept.id); // Positive ID from server (e.g., 12345)
 */
export declare function CreateTheConceptApi(conceptData: any): Promise<Concept | undefined>;
`,Hu=`import { Connection } from "../../DataStructures/Connection";
/**
 * Creates connections on the backend server via API.
 *
 * Sends an array of connection objects to the backend for bulk creation.
 * Used for creating multiple connections in a single API call.
 *
 * @param connectionData - Array of Connection objects to create
 * @returns Connection object (note: current implementation returns default connection)
 * @throws Error if HTTP request fails
 *
 * @example
 * const connections = await CreateTheConnectionApi([
 *   { ofTheConceptId: 100, toTheConceptId: 200, typeId: 42, ... },
 *   { ofTheConceptId: 100, toTheConceptId: 300, typeId: 42, ... }
 * ]);
 */
export declare function CreateTheConnectionApi(connectionData: Connection[]): Promise<Connection>;
`,$u=`import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../app";
/**
 * Syncs local concepts and connections to the backend server in bulk (batch sync).
 *
 * **Complex Logic**:
 * 1. Strips type objects from data to reduce payload size
 * 2. If total items ≤2000: Sends in single request
 * 3. If total items >2000: Chunks into 1000-item batches and sends in parallel
 * 4. Returns arrays of created concepts and connections with real server IDs
 *
 * "Ghost" refers to preserving original local IDs (negative) as ghostId while assigning real positive IDs.
 *
 * @param conceptData - Array of Concept objects to sync (can include local negative IDs)
 * @param connectionData - Array of Connection objects to sync
 * @param withAuth - Whether to use authentication (default: true)
 * @returns Object with {concepts: Concept[], connections: Connection[]} containing synced items
 * @throws Error if any batch request fails
 *
 * @example
 * const result = await CreateTheGhostConceptApi(
 *   [concept1, concept2],
 *   [connection1, connection2]
 * );
 * // result.concepts contains concepts with real server IDs
 * // result.connections contains connections with real server IDs
 */
export declare function CreateTheGhostConceptApi(conceptData: Concept[], connectionData: Connection[], withAuth?: boolean): Promise<any>;
`,zu=`import { Connection } from "../../app";
/**
 * Syncs local connections to the backend server preserving ghost IDs.
 *
 * Creates connections on server while maintaining ghostId for local ID tracking.
 * Used for syncing locally-created connections (negative IDs) to the backend.
 *
 * @param connectionData - Array of Connection objects to sync
 * @returns Array of created Connection objects with server-assigned positive IDs
 * @throws Error if HTTP request fails
 *
 * @example
 * const synced = await CreateTheGhostConnectionApi([
 *   { id: -123, ofTheConceptId: -100, toTheConceptId: -200, ... }
 * ]);
 * // Returns: [{ id: 5001, ghostId: -123, ofTheConceptId: 1001, toTheConceptId: 2001, ... }]
 */
export declare function CreateTheGhostConnectionApi(connectionData: Connection[]): Promise<Connection[] | undefined>;
`,Ju=`import { TheTexts } from "../../DataStructures/TheTexts";
/**
 * Creates text data on the backend server via API.
 *
 * Stores long-form text content (>255 characters) separately from concepts.
 * Used for text values that exceed the characterValue field length limit.
 *
 * @param textData - TheTexts object containing text data to store
 * @returns Created TheTexts object with server-assigned ID
 * @throws Error if HTTP request fails or server returns error status
 *
 * @example
 * const longText = await CreateTextData({
 *   data: "Very long text content that exceeds 255 characters...",
 *   userId: 42
 * });
 */
export declare function CreateTextData(textData: TheTexts): Promise<TheTexts>;
`,Qu=`/**
 * Deletes (trashes) a concept from the backend with explicit token auth.
 *
 * Alternative delete function that requires manual token passing.
 * Similar to DeleteTheConcept but with explicit authentication parameter.
 *
 * @param id - The concept ID to delete
 * @param token - Bearer authentication token
 * @throws Error if deletion fails
 *
 * @example
 * await TrashTheConcept(12345, userToken);
 */
export declare function TrashTheConcept(id: number, token: string): Promise<void>;
`,Yu=`/**
 * Deletes a user account from the backend server.
 *
 * **Process**:
 * 1. Sends delete request with user concept ID and API key
 * 2. Backend deletes user and returns email concept ID
 * 3. Deletes the associated email concept locally
 *
 * Used for complete user account removal including associated data.
 *
 * @param id - The user concept ID to delete
 * @returns Email concept ID that was deleted, or undefined if error
 * @throws Error if deletion fails
 *
 * @example
 * const emailConceptId = await DeleteUserInBackend(userId);
 * console.log("Deleted user and email concept:", emailConceptId);
 */
export declare function DeleteUserInBackend(id: number): Promise<number | undefined>;
`,Xu=`/**
 * Deletes multiple connections from the backend in a single bulk operation.
 *
 * **Process**:
 * 1. Sends array of connection IDs to backend for bulk deletion
 * 2. If successful: Marks all connections as deleted in local ConnectionData
 * 3. Returns overall deletion success status
 *
 * More efficient than calling DeleteTheConnection multiple times.
 *
 * @param ids - Array of connection IDs to delete
 * @returns boolean - true if bulk deletion successful, false otherwise
 *
 * @example
 * const deleted = await DeleteTheConnectionBulkApi([5001, 5002, 5003]);
 * if (deleted) {
 *   console.log("All 3 connections deleted successfully");
 * }
 */
export default function DeleteTheConnectionBulkApi(ids: number[]): Promise<boolean>;
`,Ku=`/**
 * Deletes a concept from the backend server by ID.
 *
 * **Process**:
 * 1. Sends delete request to backend with concept ID
 * 2. If successful: Marks concept as deleted in local ConceptsData (NPC list)
 * 3. Returns deletion success status
 *
 * NPC (Non-Present Concept) list tracks deleted concept IDs to prevent reuse.
 *
 * @param id - The concept ID to delete
 * @returns boolean - true if successfully deleted, false otherwise
 *
 * @example
 * const deleted = await DeleteTheConcept(12345);
 * if (deleted) {
 *   console.log("Concept deleted successfully");
 * }
 */
export default function DeleteTheConcept(id: number): Promise<boolean>;
`,Zu=`/**
 * Deletes a connection from the backend server by ID.
 *
 * **Process**:
 * 1. Sends delete request to backend with connection ID
 * 2. If successful: Marks connection as deleted in local ConnectionData (NpConn list)
 * 3. Returns deletion success status
 *
 * NpConn (Non-Present Connection) list tracks deleted connection IDs.
 *
 * @param id - The connection ID to delete
 * @returns boolean - true if successfully deleted, false otherwise
 *
 * @example
 * const deleted = await DeleteTheConnection(5001);
 * if (deleted) {
 *   console.log("Connection deleted successfully");
 * }
 */
export default function DeleteTheConnection(id: number): Promise<boolean>;
`,eh=`/**
 * Fetches all AI-related concept data from the backend.
 * Loads AI concepts into local ConceptsData cache and triggers database update.
 *
 * @returns void - Updates ConceptsData in-place with AI concepts
 *
 * @example
 * await GetAiData(); // Loads all AI concepts into cache
 */
export declare function GetAiData(): Promise<void>;
`,th=`/**
 * Retrieves all concepts of a specific type for a user.
 * Fetches concepts filtered by type string and user ID.
 *
 * @param type - Type string to filter concepts by
 * @param userId - User ID to filter by
 * @returns void - Updates ConceptsData cache with matching concepts
 *
 * @example
 * await GetAllConceptsByType("person", 123);
 */
export declare function GetAllConceptsByType(type: string, userId: number): Promise<void>;
`,nh=`import { Connection } from '../DataStructures/Connection';
/**
 * Retrieves all connections belonging to a specific composition.
 * Checks local cache first, then fetches from backend if needed.
 *
 * **Complex Logic**: First checks ConnectionData cache, then fetches from API,
 * compares with cached data to detect deletions, and updates cache.
 *
 * @param composition_id - ID of the composition whose connections to retrieve
 * @returns Array of Connection objects for the composition
 *
 * @example
 * const connections = await GetAllConnectionsOfComposition(456);
 */
export declare function GetAllConnectionsOfComposition(composition_id: number): Promise<Connection[]>;
/**
 * Fetches connections for a composition directly from the backend.
 * Internal helper function for GetAllConnectionsOfComposition.
 *
 * @param composition_id - ID of the composition
 * @returns Array of Connection objects from backend
 */
export declare function GetAllConnectionsOfCompositionOnline(composition_id: number): Promise<Connection[] | undefined>;
`,oh=`import { Connection } from '../DataStructures/Connection';
/**
 * Retrieves connections for multiple compositions in bulk.
 * Optimizes fetching by batching multiple composition IDs in one request.
 *
 * **Complex Logic**: Checks in-memory cache, fetches from API, detects deletions
 * by comparing old and new data, and bulk-fetches related concepts.
 *
 * @param composition_ids - Array of composition IDs to fetch connections for
 * @returns Array of Connection objects for all compositions
 *
 * @example
 * const connections = await GetAllConnectionsOfCompositionBulk([123, 456, 789]);
 */
export declare function GetAllConnectionsOfCompositionBulk(composition_ids?: number[]): Promise<any>;
/**
 * Fetches connections for multiple compositions directly from backend.
 * Internal helper function for GetAllConnectionsOfCompositionBulk.
 *
 * @param composition_ids - Array of composition IDs
 * @returns Array of Connection objects from backend
 */
export declare function GetAllConnectionsOfCompositionOnline(composition_ids?: number[]): Promise<Connection[] | undefined>;
`,ih=`import { Connection } from "../DataStructures/Connection";
/**
 * Retrieves all linker connections originating from a specific concept.
 * Fetches connections where the concept is the source/origin.
 *
 * @param conceptId - ID of the concept to get linker connections from
 * @returns Array of Connection objects originating from the concept
 *
 * @example
 * const connections = await GetAllLinkerConnectionsFromTheConcept(123);
 */
export declare function GetAllLinkerConnectionsFromTheConcept(conceptId: number): Promise<Connection[]>;
`,rh=`import { Connection } from "../DataStructures/Connection";
/**
 * Retrieves all linker connections pointing to a specific concept.
 * Fetches connections where the concept is the target/destination.
 *
 * @param conceptId - ID of the concept to get linker connections to
 * @returns Array of Connection objects pointing to the concept
 *
 * @example
 * const connections = await GetAllLinkerConnectionsToTheConcept(123);
 */
export declare function GetAllLinkerConnectionsToTheConcept(conceptId: number): Promise<Connection[]>;
`,sh=`import { TheCharacter } from "../DataStructures/TheCharacter";
/**
 * Retrieves character data by character value string.
 * Fetches TheCharacter object containing character metadata.
 *
 * @param characterValue - String value of the character to retrieve
 * @returns TheCharacter object or undefined on error
 *
 * @example
 * const char = await GetCharacterByCharacter("the_person");
 */
export declare function GetCharacterByCharacter(characterValue: string): Promise<TheCharacter | undefined>;
`,ah=`/**
 * Retrieves composition connections between two concepts.
 * Fetches connections linking two concepts filtered by a main key.
 *
 * @param ofConceptId - Source concept ID
 * @param toConcept - Target concept ID
 * @param mainKey - Main key to filter connections
 * @returns Array of Connection objects between the two concepts
 *
 * @example
 * const connections = await GetCompositionConnectionsBetweenTwoConcepts(123, 456, 789);
 */
export declare function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId: number, toConcept: number, mainKey: number): Promise<any>;
`,ch=`/**
 * This function helps you get concept from the id. This can only be positive.
 * @param id The id that you want to get the concept of
 * @returns
 */
export declare function GetConcept(id: number): Promise<any>;
`,lh=`import { Concept } from "./../DataStructures/Concept";
/**
 * This function takes in a list of ids and returns a list of concepts . This uses local memory to find concepts
 * namely in the concept binary tree. If it could not find the concepts in local memory then it fetches those from
 * the api. The fetched concepts from api are then stored in the memory for further use in future.
 * @param conceptIds list of concept ids that need to be fetched
 * @returns list of concepts
 */
export declare function GetConceptBulk(passedConcepts: number[]): Promise<Concept[]>;
/**
 * Alternative API for fetching multiple concepts by IDs.
 * Simpler version without caching logic, directly fetches from backend.
 *
 * @param bulkConceptFetch - Array of concept IDs to fetch
 * @returns Array of Concept objects
 *
 * @example
 * const concepts = await BulkConceptGetterApi([1, 2, 3, 4, 5]);
 */
export declare function BulkConceptGetterApi(bulkConceptFetch: number[]): Promise<Concept[]>;
`,dh=`/**
 * Retrieves a concept by character value and type ID.
 * Checks local cache first, then fetches from backend if not found.
 *
 * **Complex Logic**: Checks local ConceptsData cache, falls back to API,
 * supports service worker for offline capability.
 *
 * @param characterValue - Character value string to search for
 * @param typeId - Type ID to filter by
 * @returns Concept object or null if not found
 *
 * @example
 * const concept = await GetConceptByCharacterAndType("the_person", 5);
 */
export declare function GetConceptByCharacterAndType(characterValue: string, typeId: number): Promise<any>;
`,uh=`import { Concept } from "../DataStructures/Concept";
/**
 * Retrieves a concept by its character value.
 * Fetches concept matching the character string and adds type information.
 *
 * @param characterValue - Character value string to search for
 * @returns Concept object or default concept if not found
 *
 * @example
 * const concept = await GetConceptByCharacterValue("the_person");
 */
export declare function GetConceptByCharacterValue(characterValue: string): Promise<Concept>;
`,hh=`import { Connection } from "../DataStructures/Connection";
/**
 * Retrieves a connection by its ID.
 * Checks local cache first, then fetches from backend if needed.
 *
 * **Complex Logic**: Checks ConnectionData cache, falls back to API request,
 * supports cache server fallback for resilience.
 *
 * @param id - Connection ID to retrieve
 * @returns Connection object or default connection if not found
 *
 * @example
 * const connection = await GetConnection(789);
 */
export declare function GetConnection(id: number): Promise<Connection | undefined>;
`,ph=`import { Connection } from "../DataStructures/Connection";
/**
 * After fetching these connections it is saved in the local static ConnectionBinaryTree so it can be reused without being fetched
 * @param connectionIds array of connection ids that need to fetched by the local system
 * @returns the list of  connections that have been fetched
 */
export declare function GetConnectionBulk(connectionIds?: number[]): Promise<Connection[]>;
`,fh=`/**
 * Retrieves connections originating from a specific concept.
 * Fetches connections filtered by type, concept, user, and pagination.
 *
 * @param typeId - Type ID to filter connections by
 * @param ofTheConceptId - Concept ID that is the source of connections
 * @param userId - User ID to filter by
 * @param inpage - Number of results per page (default: 10)
 * @param page - Page number (default: 1)
 * @returns Array of Connection objects
 *
 * @example
 * const connections = await GetConnectionOfTheConcept(5, 123, 456, 20, 1);
 */
export declare function GetConnectionOfTheConcept(typeId: number, ofTheConceptId: number, userId: number, inpage?: number, page?: number): Promise<any>;
`,mh=`import { Connection } from "../DataStructures/Connection";
/**
 * Retrieves connections pointing to a specific concept.
 * Fetches connections filtered by type, target concept, user, and pagination.
 *
 * @param typeId - Type ID to filter connections by
 * @param toTheConceptId - Concept ID that is the target of connections
 * @param userId - User ID to filter by
 * @param inpage - Number of results per page (default: 10)
 * @param page - Page number (default: 1)
 * @returns Array of Connection objects
 * @throws Error if fetch fails
 *
 * @example
 * const connections = await GetConnectionToTheConcept(5, 123, 456, 20, 1);
 */
export declare function GetConnectionToTheConcept(typeId: number, toTheConceptId: number, userId: number, inpage?: number, page?: number): Promise<Connection[]>;
`,yh=`import { FetchConnection } from "../../DataStructures/FetchConnection";
/**
 * Fetches connections matching the given criteria from POST /api/get-connection-between.
 *
 * Accepts an array so multiple independent queries can be resolved in one HTTP request.
 * Each item in the array is resolved independently by the backend; results are returned
 * in the same order with \`connectionIds\` and the resolved \`typeId\` populated.
 *
 * **Supported query permutations (per item):**
 * 1. \`ofTheConceptId\` + \`toTheConceptId\` + \`type\` — connections between two specific concepts of that type
 * 2. \`ofTheConceptId\` + \`type\`                    — all connections FROM a concept of that type
 * 3. \`toTheConceptId\` + \`type\`                    — all connections TO a concept of that type
 * 4. \`typeId\` + \`isComposition: true\`             — all internal connections of a composition
 *
 * Fields not relevant to the chosen permutation should be left at their zero/empty defaults.
 * Use {@link buildFetchConnection} to build items without specifying every field manually.
 *
 * @param fetchConnections - Array of query objects; each item is resolved independently.
 * @returns The same array with \`connectionIds\` and resolved \`typeId\` populated by the backend.
 *          Returns an empty array on error (error is logged internally).
 *
 * @example
 * // Single query — connections between two concepts
 * const results = await GetConnectionsBetweenApi([
 *     buildFetchConnection({ ofTheConceptId: 103927382, toTheConceptId: 103927389, type: "the_project_s_page" })
 * ]);
 * console.log(results[0].connectionIds); // [18161211]
 *
 * @example
 * // Multiple queries in one request
 * const results = await GetConnectionsBetweenApi([
 *     buildFetchConnection({ ofTheConceptId: 103927382, type: "the_project_s_page" }),
 *     buildFetchConnection({ typeId: 101490186, isComposition: true }),
 * ]);
 * const allIds = results.flatMap(r => r.connectionIds);
 *
 * @see {@link buildFetchConnection} for constructing query items without filling all defaults
 * @see {@link FetchConnection} for the full field reference
 */
export declare function GetConnectionsBetweenApi(fetchConnections: FetchConnection[]): Promise<FetchConnection[]>;
`,gh=`import { Connection } from "../../app";
import { GetConnectionsByTypes } from "../../DataStructures/ConnectionByType/GetConnectionByType";
/**
 * Retrieves connections filtered by multiple connection type criteria.
 * Fetches connections matching the specified type filters.
 *
 * @param connectionTypes - GetConnectionsByTypes object containing type filter criteria
 * @returns Array of Connection objects matching the type filters
 *
 * @example
 * const types = new GetConnectionsByTypes();
 * types.typeIds = [1, 2, 3];
 * const connections = await GetConnectionsByApiTypes(types);
 */
export declare function GetConnectionsByApiTypes(connectionTypes: GetConnectionsByTypes): Promise<Connection[]>;
`,vh=`import { Concept } from "../DataStructures/Concept";
/**
 * Fetches an instance concept from the backend API by its character value and type.
 *
 * @param characterValue - The character value of the concept, such as a URL or identifier.
 * @param type - The type string that qualifies the character value, such as "the_source_url".
 * @returns The matching Concept object, or a default empty Concept if not found.
 */
export declare function GetInstanceConceptByCharacterType(characterValue: string, type: string): Promise<Concept>;
`,Ch=`/**
 * Fetches reserved connection IDs from the backend.
 * Loads system-reserved connection IDs into ReservedConnectionIds cache.
 *
 * @returns void - Updates ReservedConnectionIds cache with reserved IDs
 *
 * @example
 * await GetReservedConnectionIds(); // Loads reserved connection IDs
 */
export declare function GetReservedConnectionIds(): Promise<void>;
`,bh=`/**
 * Fetches reserved concept IDs from the backend.
 * Loads system-reserved concept IDs into ReservedIds cache.
 *
 * @returns void - Updates ReservedIds cache with reserved concept IDs
 *
 * @example
 * await GetReservedIds(); // Loads reserved concept IDs
 */
export declare function GetReservedIds(): Promise<void>;
`,Ih=`/**
 * Retrieves an image by name from the cached images endpoint.
 * Returns a readable stream for the image data.
 *
 * @param imageName - Name/identifier of the image to retrieve
 * @returns Promise resolving to ReadableStream of image data, or null/undefined on error
 * @throws Image stream on error (legacy behavior)
 *
 * @example
 * const imageStream = await GetImageApi("profile-pic-123.jpg");
 * if (imageStream) {
 *   // Process image stream
 * }
 */
export declare function GetImageApi(imageName: string): Promise<ReadableStream<Uint8Array> | null | undefined>;
`,wh=`import { Concept } from "../../DataStructures/Concept";
/**
 * Retrieves a local concept by its character value.
 * Fetches from backend and caches in LocalConceptsData.
 *
 * @param characterValue - Character value string to search for
 * @returns Local Concept object or default local concept if not found
 * @throws Default concept on error (legacy behavior)
 *
 * @example
 * const localConcept = await GetLocalConceptByCharacterValue("the_local_person");
 */
export declare function GetLocalConceptByCharacterValue(characterValue: string): Promise<Concept>;
`,Th=`/**
 * Authenticates a user with the backend API and obtains an access token.
 *
 * This is the primary authentication function that validates user credentials against the backend
 * server and retrieves a JWT bearer token for subsequent API requests.
 *
 * **Authentication Flow:**
 * 1. Sends email and password to backend login endpoint
 * 2. Receives JWT token in response
 * 3. Automatically stores token in TokenStorage.BearerAccessToken
 * 4. Token is used for all subsequent authenticated API calls
 * 5. Logs the authentication attempt for audit purposes
 *
 * **Features:**
 * - Automatic token storage (no manual handling required)
 * - Error handling and logging
 * - Application-specific authentication
 * - Performance and audit logging
 *
 * **Security Notes:**
 * - Credentials are sent over HTTPS (ensure BaseUrl uses HTTPS)
 * - Token is stored in memory (TokenStorage)
 * - Token should be refreshed before expiration
 * - Never log or expose the token in client-side code
 *
 * @param email - The user's email address. Must be a valid registered email.
 *               Used as the primary login identifier.
 * @param password - The user's password. Sent to backend for verification.
 *                  Should meet password complexity requirements.
 * @param application - The application identifier for multi-tenant authentication.
 *                     Defaults to "boomconsole.com". Used to scope authentication
 *                     to specific applications in the system.
 *
 * @returns Promise resolving to the authentication result object containing:
 *         - data.token: The JWT bearer token
 *         - user information
 *         - session details
 *         Returns undefined on error
 *
 * @example
 * // Basic login
 * const result = await LoginToBackend(
 *   "user@example.com",
 *   "securePassword123"
 * );
 * if (result) {
 *   console.log("Logged in successfully");
 *   console.log("Token:", result.data.token); // Now stored in TokenStorage
 * }
 *
 * @example
 * // Login for specific application
 * const result = await LoginToBackend(
 *   "admin@company.com",
 *   "adminPass",
 *   "admin.company.com"  // Custom application
 * );
 *
 * @example
 * // Use with other authenticated operations
 * const loginResult = await LoginToBackend("user@example.com", "pass123");
 * if (loginResult) {
 *   // Token is automatically available for subsequent calls
 *   const concepts = await SearchAllConcepts("", "search term", "", TokenStorage.BearerAccessToken);
 * }
 *
 * @throws Does not throw but logs errors. Returns undefined on failure.
 *        Error scenarios include:
 *        - Invalid credentials (401 Unauthorized)
 *        - Network errors
 *        - Server errors (5xx)
 *        - Malformed request
 *
 * @see {@link Signin} for alternative sign-in function
 * @see {@link Signup} for user registration
 * @see {@link updateAccessToken} for manually updating the stored token
 */
export declare function LoginToBackend(email: string, password: string, application?: string): Promise<any>;
`,kh=`/**
 * Creates a name/referent association for a concept in the backend.
 * Associates a human-readable name with a concept ID.
 *
 * @param newConceptId - ID of the concept to name
 * @param referent - Human-readable name/referent string
 * @param typeId - Type ID for the name association
 * @param typeUserId - User ID who owns the type
 * @returns void
 *
 * @example
 * await MakeTheNameInBackend(123, "John Doe", 5, 456);
 */
export declare function MakeTheNameInBackend(newConceptId: number, referent: string, typeId: number, typeUserId: number): Promise<void>;
`,Ah=`import { Concept } from "../DataStructures/Concept";
/**
 *  This function is used to check the type concpet of a passed string
 *  if the text is "the_person" then the function finds the related concept
 * @param type This is the type of the concept that needs to be created.
 * @param userId This is the userId of the creator.
 * @returns the concept created.
 */
export declare function MakeTheTypeConceptApi(type: string, userId: number): Promise<Concept>;
`,_h=`import { StatefulWidget } from "../../app";
/**
 * Selector widget for searchable dropdown selection.
 * Provides a UI component with search filtering and freeschema query integration.
 *
 * **Complex Logic**: Builds a searchable select element that queries data using
 * FreeschemaQuery, filters results dynamically, and populates options based on
 * nested data structures.
 *
 * @example
 * const selector = new Selector("person", "has_name", parentElement, "text", 10);
 */
export declare class Selector extends StatefulWidget {
    selector: string;
    mainType: string;
    mainDetails: any;
    filterType: string;
    query: any;
    inpage: number;
    parentDomElement: HTMLElement;
    constructor(mainType: string, selector: string, parentElement: HTMLElement, filterType?: string, inpage?: number);
    before_render(): void;
    addFilter(value: string): void;
    after_render(): void;
    getHtml(): string;
}
`,Sh=`/**
 * Performs recursive search through composition hierarchy.
 * Searches through nested compositions using linker relationships.
 *
 * **Complex Logic**: Constructs SearchQuery, fetches composition IDs and connections,
 * processes internal/external connections, and builds composition objects from results.
 *
 * @param composition - Root composition ID to start search from (default: 0)
 * @param listLinkers - Array of linker strings to traverse (default: [])
 * @param textSearch - Text search filter (default: "")
 * @param fullLinkers - Array of full linker paths (default: [])
 * @returns Array of composition objects with connections
 *
 * @example
 * const results = await RecursiveSearchApi(123, ["has_child", "has_property"], "search text");
 */
export declare function RecursiveSearchApi(composition?: number, listLinkers?: string[], textSearch?: string, fullLinkers?: string[]): Promise<any>;
/**
 * Performs recursive search returning results with internal connections.
 * Similar to RecursiveSearchApi but uses different connection formatting.
 *
 * @param composition - Root composition ID to start search from (default: 0)
 * @param listLinkers - Array of linker strings to traverse (default: [])
 * @param textSearch - Text search filter (default: "")
 * @returns Array of composition objects with internal connections
 */
export declare function RecursiveSearchApiWithInternalConnections(composition?: number, listLinkers?: string[], textSearch?: string): Promise<any>;
/**
 * Performs recursive search returning raw API response.
 * Returns unprocessed result with composition IDs and connection arrays.
 *
 * @param composition - Root composition ID (default: 0)
 * @param listLinkers - Array of linker strings (default: [])
 * @param textSearch - Text search filter (default: "")
 * @param fullLinkers - Array of full linker paths (default: [])
 * @returns Raw API response object with compositionIds, internalConnections, externalConnections
 */
export declare function RecursiveSearchApiRaw(composition?: number, listLinkers?: string[], textSearch?: string, fullLinkers?: string[]): Promise<any>;
/**
 * Performs recursive search using full linker paths, returning raw response.
 * Uses complete linker path specifications instead of partial linkers.
 *
 * @param composition - Root composition ID (default: 0)
 * @param fullLinkers - Array of complete linker path strings (default: [])
 * @param textSearch - Text search filter (default: "")
 * @returns Raw API response object with compositionIds and connections
 */
export declare function RecursiveSearchApiRawFullLinker(composition?: number, fullLinkers?: string[], textSearch?: string): Promise<any>;
/**
 * New version of recursive search with full linker paths.
 * Alternative implementation of RecursiveSearchApiRawFullLinker.
 *
 * @param composition - Root composition ID (default: 0)
 * @param fullLinkers - Array of complete linker path strings (default: [])
 * @param textSearch - Text search filter (default: "")
 * @returns Raw API response object with compositionIds and connections
 */
export declare function RecursiveSearchApiNewRawFullLinker(composition?: number, fullLinkers?: string[], textSearch?: string): Promise<any>;
/**
 * Performs recursive search using local data only.
 * Placeholder for local-only search implementation.
 *
 * @param composition - Root composition ID
 * @param listLinkers - Array of linker strings (default: [])
 * @param textSearch - Text search filter (default: "")
 */
export declare function RecursiveSearchLocal(composition: number, listLinkers?: string[], textSearch?: string): Promise<void>;
`,xh=`import { FreeschemaQuery } from "../../app";
/**
 * Executes a freeschema query for flexible, schema-free data retrieval.
 * Supports custom query structures with filters, pagination, and nested queries.
 *
 * @param query - FreeschemaQuery object containing query parameters, filters, and nested queries
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Query results array or empty array on error
 *
 * @example
 * const results = await FreeschemaQueryApi({
 *   type: "person",
 *   filters: [{ field: "name", operator: "like", value: "John" }],
 *   inpage: 10,
 *   page: 1
 * }, "auth-token");
 */
export declare function FreeschemaQueryApi(query: FreeschemaQuery, token?: string): Promise<any>;
`,Nh=`/**
 * Searches for concepts matching specified criteria with pagination support.
 *
 * This is the primary search function for querying concepts in the system. It performs a
 * backend API search with multiple filter parameters and returns paginated results.
 *
 * **Search Capabilities:**
 * - Text-based search on concept character values
 * - Type filtering (search within specific concept types)
 * - Composition filtering (search within specific compositions)
 * - Pagination support (page size and page number)
 * - Authenticated requests (requires valid access token)
 *
 * **Use Cases:**
 * - Finding concepts by name or partial text match
 * - Filtering results by concept type (e.g., only "Person" concepts)
 * - Searching within a specific composition context
 * - Building paginated search UIs
 *
 * @param type - The type filter for the search. Can be a type name (e.g., "Person", "Document")
 *              or empty string to search all types. Used to narrow results to specific concept types.
 * @param search - The search query string. Searches against concept character values (names/titles).
 *                Can be partial matches depending on backend implementation.
 * @param composition - Composition context filter. Can be a composition ID or identifier to limit
 *                     search scope to concepts within a specific composition. Use empty string for global search.
 * @param token - The JWT authentication token. Required for authorized access to backend search API.
 *               Should be the BearerAccessToken from TokenStorage.
 * @param inpage - Number of results per page. Controls page size for pagination. Defaults to 10.
 *                Must be a positive integer.
 * @param page - The page number to retrieve (1-indexed). Defaults to 1 (first page).
 *              Use for pagination: page 1, page 2, etc.
 *
 * @returns Promise resolving to an array of matching Concept objects, or empty array on error/no results
 *
 * @example
 * // Simple search for all concepts containing "Alice"
 * const results = await SearchAllConcepts(
 *   "",              // all types
 *   "Alice",         // search term
 *   "",              // all compositions
 *   accessToken,     // auth token
 *   10,              // 10 per page
 *   1                // first page
 * );
 *
 * @example
 * // Search for "Person" type concepts with "Smith" in name
 * const people = await SearchAllConcepts(
 *   "Person",        // only Person types
 *   "Smith",         // search term
 *   "",              // all compositions
 *   accessToken,
 *   20,              // 20 per page
 *   1
 * );
 *
 * @example
 * // Paginated search - get second page
 * const page2 = await SearchAllConcepts(
 *   "",
 *   "Project",
 *   "",
 *   accessToken,
 *   10,
 *   2                // second page
 * );
 *
 * @throws Returns empty array on error. Errors are logged via HandleHttpError and HandleInternalError
 *
 * @see {@link SearchWithLinker} for search with relationship filtering
 * @see {@link SearchWithTypeAndLinker} for advanced search with type and linker filters
 */
export declare function SearchAllConcepts(type: string, search: string, composition: string, token: string, inpage?: number, page?: number): Promise<any>;
`,Lh=`import { SearchStructure } from "../../app";
/**
 * Searches internal compositions with authentication using query parameters.
 * Performs authenticated search within a composition's internal data structure.
 *
 * @param search - Search structure containing composition, search text, internal composition, type, pagination
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Array of search results or empty array on error
 *
 * @example
 * const results = await SearchInternalApi({
 *   composition: 123,
 *   search: "example",
 *   internalComposition: 456,
 *   type: "text",
 *   inpage: 10,
 *   page: 1
 * }, "auth-token");
 */
export declare function SearchInternalApi(search: SearchStructure, token?: string): Promise<any>;
/**
 * Searches internal compositions without authentication.
 * Similar to SearchInternalApi but for public/unauthenticated searches.
 *
 * @param search - Search structure containing composition, search text, internal composition, type, pagination
 * @returns Array of search results or empty array on error
 */
export declare function SearchInternalAllApi(search: SearchStructure): Promise<any>;
`,Dh=`import { SearchQuery } from '../../DataStructures/SearchQuery';
/**
 * Searches for concepts using multiple linked queries with performance tracking.
 * Executes complex multi-criteria searches across concept relationships.
 *
 * @param searchQuery - Array of SearchQuery objects defining linked search criteria
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Array of search results or empty array on error
 *
 * @example
 * const results = await SearchLinkMultipleApi([
 *   { composition: 123, linker: "has_property", value: "example" }
 * ], "auth-token");
 */
export declare function SearchLinkMultipleApi(searchQuery: SearchQuery[], token?: string): Promise<any>;
`,Ph=`import { SearchQuery } from '../../DataStructures/SearchQuery';
/**
 * Searches concepts using multiple linker queries with authentication.
 * Allows complex searches by combining multiple search query conditions.
 *
 * @param searchQuery - Array of search query objects defining search criteria
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Array of matching search results or empty array on error
 *
 * @example
 * const results = await SearchWithLinker([
 *   { linker: "has_name", value: "John" },
 *   { linker: "has_age", value: "30" }
 * ], "auth-token");
 */
export declare function SearchWithLinker(searchQuery: SearchQuery[], token?: string): Promise<any>;
`,Rh=`import { SearchQuery, SearchStructure } from "../../app";
/**
 * Searches concepts by type with additional linker query filters.
 * Combines type-based search with linker queries for refined results.
 *
 * **Complex Logic**: Constructs URL with search structure parameters, then applies
 * linker queries as POST body for multi-dimensional filtering.
 *
 * @param searchStructure - Structure containing search text, type, pagination, and auth flag
 * @param searchQuery - Array of linker query objects for additional filtering
 * @param token - Authentication token (optional, defaults to empty string)
 * @returns Array of concepts matching both type and linker criteria, or empty array on error
 */
export declare function SearchWithTypeAndLinkerApi(searchStructure: SearchStructure, searchQuery: SearchQuery[], token?: string): Promise<any>;
`,Bh=`import { Concept } from "../../DataStructures/Concept";
/**
 * Retrieves a concept by character value with category filtering.
 * Fetches concept matching character and adds type information.
 *
 * @param characterValue - Character value string to search for
 * @returns Concept object or default concept if not found
 *
 * @example
 * const concept = await GetConceptByCharacterAndCategoryApi("the_person");
 */
export declare function GetConceptByCharacterAndCategoryApi(characterValue: string): Promise<Concept | undefined>;
`,Eh=`import { Concept } from "./../../DataStructures/Concept";
/**
 * Retrieves a concept by character value and specific category ID.
 * Direct API call with explicit category filtering.
 *
 * @param characterValue - Character value string to search for
 * @param category_id - Category ID to filter by
 * @returns Promise resolving to Concept object or default concept if not found
 *
 * @example
 * const concept = await GetConceptByCharacterAndCategoryDirectApi("the_person", 5);
 */
export declare function GetConceptByCharacterAndCategoryDirectApi(characterValue: string, category_id: number): Promise<Concept>;
`,Oh=`import { Concept } from "../../app";
/**
 * Retrieves type concepts for multiple character values in bulk.
 * Optimizes fetching by batching character lookups in one request.
 *
 * **Complex Logic**: First fetches concept IDs for all character strings,
 * then bulk-fetches the full concept objects.
 *
 * @param characters - Array of character value strings
 * @returns Array of Concept objects matching the character values
 *
 * @example
 * const concepts = await GetTypeConceptByBulk(["the_person", "the_place", "the_thing"]);
 */
export declare function GetTypeConceptByBulk(characters: string[]): Promise<Concept[]>;
`,Fh=`import { SessionData } from "../../app";
/**
 * Creates a new session for tracking user activity.
 * Records session metadata including user agent, IP, and timestamp.
 *
 * @param sessionData - SessionData object containing session information
 * @returns Session object with generated ID, or null on error
 *
 * @example
 * const session = await CreateSession({
 *   userAgent: navigator.userAgent,
 *   ipAddress: "192.168.1.1",
 *   userId: 123
 * });
 */
export declare function CreateSession(sessionData: SessionData): Promise<any>;
`,Uh=`/**
 * Records a URL visit within an existing session.
 * Tracks page navigation and user journey through the application.
 *
 * @param sessionId - ID of the session to associate the visit with
 * @param url - URL being visited
 * @returns Session visit object or null on error
 *
 * @example
 * await CreateSessionVisit(456, "/dashboard/profile");
 */
export declare function CreateSessionVisit(sessionId: number, url: string): Promise<any>;
`,Gh=`import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses";
import { SigninModel } from "../DataStructures/SigninModel";
/**
 * Alternative sign-in function using SigninModel structure.
 *
 * Similar to LoginToBackend but returns FreeschemaResponse format and
 * does NOT automatically store the token. You must manually handle the token.
 *
 * @param signinInfo - SigninModel object containing email and password
 * @returns FreeschemaResponse with {status, statusCode, message, data} structure
 *         data contains user information and token (not auto-stored)
 *
 * @example
 * const result = await Signin({
 *   email: "user@example.com",
 *   password: "password123"
 * });
 * if (result.status) {
 *   const token = result.data.token; // Manual token handling required
 * }
 *
 * @see {@link LoginToBackend} for auto-token-storage version
 */
export default function Signin(signinInfo: SigninModel): Promise<FreeschemaResponse | undefined>;
`,Mh=`import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses";
import { SignupModel } from "../DataStructures/SignupModel";
/**
 * Registers a new user account on the backend server.
 *
 * Creates a new user with provided signup information including email, password,
 * username, and profile details.
 *
 * @param signupModel - SignupModel object containing:
 *   - email: User's email address
 *   - password: User's password
 *   - username: Unique username
 *   - fname: First name
 *   - lname: Last name
 *   - title: Title/gender
 *   - type: User type
 * @returns FreeschemaResponse with signup result (status, message, data)
 *
 * @example
 * const result = await Signup({
 *   email: "newuser@example.com",
 *   password: "securePass123",
 *   username: "newuser",
 *   fname: "John",
 *   lname: "Doe"
 * });
 * if (result.status) {
 *   console.log("Account created successfully");
 * }
 */
export default function Signup(signupModel: SignupModel): Promise<FreeschemaResponse | undefined>;
/**
 * Registers a new entity (organization/company account) on the backend.
 *
 * Creates entity-type accounts (different from regular user accounts).
 * Includes timestamp for registration tracking.
 *
 * @param signupData - Signup data object containing:
 *   - type: Entity type
 *   - username: Unique username
 *   - title: Title/designation
 *   - email: Entity email
 *   - password: Account password
 *   - timestamp: Registration timestamp (ISO string)
 *   - fname: First name / Entity name
 *   - lname: Last name / Additional info
 * @returns Response JSON with entity creation result
 * @throws Error if signup fails (404, 500, or other HTTP errors)
 *
 * @example
 * const result = await SignupEntity({
 *   type: "organization",
 *   username: "acme_corp",
 *   email: "admin@acme.com",
 *   password: "securePass",
 *   timestamp: new Date().toISOString(),
 *   fname: "ACME Corporation",
 *   lname: "Inc."
 * });
 */
export declare function SignupEntity(signupData: any): Promise<any>;
`,Wh=`import { Concept } from "../../app";
/**
 * Translates a local concept ID to its real backend concept.
 * Fetches the actual concept from backend and caches it in ConceptsData.
 *
 * @param conceptId - Local concept ID to translate
 * @returns Real Concept object from backend, or default concept on error
 *
 * @example
 * const realConcept = await TranslateLocalToReal(123);
 */
export declare function TranslateLocalToReal(conceptId: number): Promise<Concept>;
`,jh=`/**
 * Retrieves internal data (connections and concepts) for multiple compositions.
 * Returns a dictionary mapping composition IDs to their internal connection arrays.
 *
 * **Complex Logic**: For each composition ID, fetches connections and related concepts,
 * builds a dictionary structure, and bulk-loads concepts for efficiency.
 *
 * @param ids - Array of composition IDs to fetch internal data for
 * @returns Dictionary mapping composition ID to Connection arrays, or empty array on error
 *
 * @example
 * const internalData = await ViewInternalDataApi([123, 456, 789]);
 * // Returns: { 123: [...connections], 456: [...connections], 789: [...connections] }
 */
export declare function ViewInternalDataApi(ids: number[]): Promise<any>;
`,Vh=`export declare const ADMIN = 3;
export declare const PRIVATE = 4;
export declare const PUBLIC = 5;
`,qh=`export declare const config: {
    BASE_URL: string;
};
export declare const BASE_URL: string;
export declare const GetConceptUrl: string;
export declare const GetConceptBulkUrl: string;
export declare const GetAllConceptsOfUserUrl: string;
export declare const GetAllConnectionsOfUserUrl: string;
export declare const GetAllConnectionsOfCompositionUrl: string;
export declare const GetAllConnectionsOfCompositionBulkUrl: string;
export declare const GetConceptByCharacterValueUrl: string;
export declare const GetConceptByCharacterAndTypeUrl: string;
export declare const GetCharacterByCharacterUrl: string;
export declare const GetAllConceptsByTypeUrl: string;
export declare const GetAllConnectionsOfConceptUrl: string;
export declare const GetAllAiData: string;
export declare const GetReservedIdUrl: string;
export declare const CreateTheTextDataUrl: string;
export declare const CreateTheCharacterDataUrl: string;
export declare const CreateTheConceptUrl: string;
export declare const CreateTheConnectionUrl: string;
export declare function changeBaseUrl(url: string): void;
export declare function getBaseUrl(): string;
`,Hh=`export declare const NORMAL = 1;
export declare const DATAID = 2;
export declare const JUSTDATA = 3;
export declare const DATAIDDATE = 4;
export declare const RAW = 5;
export declare const ALLID = 6;
export declare const LISTNORMAL = 7;
export declare const DATAV2 = 8;
`,$h=`export declare const ckeditorCSS = "\\n/* CKEditor content styles */\\n.ck-content {\\n  /* Container styles */\\n  max-width: 100%;\\n  margin: 0 auto;\\n  font-family: system-ui, -apple-system, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif;\\n  line-height: 1.5;\\n  padding: 0.75rem;\\n  background: #fff;\\n  color: #333;\\n  border: 1px solid #ccced1;\\n}\\n\\n/* Headings */\\n.ck-content h1, .ck-content h2, .ck-content h3, \\n.ck-content h4, .ck-content h5, .ck-content h6 {\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 1em 0 0.5em;\\n}\\n\\n.ck-content h1 { font-size: 2.5em; }\\n.ck-content h2 { font-size: 2em; }\\n.ck-content h3 { font-size: 1.75em; }\\n.ck-content h4 { font-size: 1.5em; }\\n.ck-content h5 { font-size: 1.25em; }\\n.ck-content h6 { font-size: 1em; }\\n\\n/* Paragraphs and spacing */\\n.ck-content p {\\n  margin: 1em 0;\\n  line-height: 1.6;\\n}\\n\\n/* Links */\\n.ck-content a {\\n  color: #1a73e8;\\n  text-decoration: none;\\n}\\n\\n.ck-content a:hover {\\n  text-decoration: underline;\\n}\\n\\n/* Lists */\\n.ck-content ul,\\n.ck-content ol {\\n  padding-left: 2em;\\n  margin: 1em 0;\\n}\\n\\n.ck-content ul {\\n  list-style: disc;\\n}\\n\\n.ck-content ol {\\n  list-style: decimal;\\n}\\n\\n.ck-content li {\\n  margin: 0.5em 0;\\n}\\n\\n/* Blockquotes */\\n.ck-content blockquote {\\n  margin: 1em 0;\\n  padding-left: 1em;\\n  border-left: 5px solid #ccc;\\n  font-style: italic;\\n  color: #666;\\n}\\n\\n/* Code blocks */\\n.ck-content pre {\\n  background: #f5f5f5;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n  padding: 1em;\\n  margin: 1em 0;\\n  overflow-x: auto;\\n  font-family: \\"SFMono-Regular\\", Consolas, \\"Liberation Mono\\", Menlo, Courier, monospace;\\n}\\n\\n.ck-content code {\\n  background: #f5f5f5;\\n  padding: 0.2em 0.4em;\\n  border-radius: 3px;\\n  font-size: 0.9em;\\n  font-family: \\"SFMono-Regular\\", Consolas, \\"Liberation Mono\\", Menlo, Courier, monospace;\\n}\\n\\n/* Tables */\\n.ck-content table {\\n  border-collapse: collapse;\\n  width: 100%;\\n  margin: 1em 0;\\n}\\n\\n.ck-content table th,\\n.ck-content table td {\\n  border: 1px solid #ddd;\\n  padding: 0.75em;\\n  text-align: left;\\n}\\n\\n.ck-content table th {\\n  background: #f5f5f5;\\n  font-weight: bold;\\n}\\n\\n/* Images */\\n.ck-content img {\\n  max-width: 100%;\\n  height: auto;\\n  margin: 1em 0;\\n}\\n\\n.ck-content figure {\\n  margin: 1em 0;\\n  text-align: center;\\n}\\n\\n.ck-content figure img {\\n  margin: 0;\\n}\\n\\n.ck-content figcaption {\\n  color: #666;\\n  font-size: 0.9em;\\n  margin-top: 0.5em;\\n}\\n\\n/* Dark mode */\\n/*\\n@media (prefers-color-scheme: dark) {\\n  .ck-content {\\n    background: #1a1a1a;\\n    color: #e0e0e0;\\n  }\\n\\n  .ck-content a {\\n    color: #64b5f6;\\n  }\\n\\n  .ck-content blockquote {\\n    border-left-color: #404040;\\n    color: #b0b0b0;\\n  }\\n\\n  .ck-content pre,\\n  .ck-content code {\\n    background: #2d2d2d;\\n    border-color: #404040;\\n  }\\n\\n  .ck-content table th,\\n  .ck-content table td {\\n    border-color: #404040;\\n  }\\n\\n  .ck-content table th {\\n    background: #2d2d2d;\\n  }\\n\\n  .ck-content figcaption {\\n    color: #b0b0b0;\\n  }\\n}\\n*/\\n\\n/* CUSTOM DOCUMENTATION CSS */\\n\\n#documentation-preview {\\n  border: 1px solid #ccc;\\n  padding: 1rem;\\n}\\n\\n#documentation-preview h3 {\\n  font-size: 1.5rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.pre-wrapper {\\n  background: #f2f5f9;\\n  border: 1px solid #cecece;\\n  display: block;\\n  padding: 1rem;\\n  border-radius: 0.25rem;\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.pre-wrapper pre {\\n  margin: 0;\\n  color: #e87aa2;\\n}\\n\\n.widget-doc-section pre {\\n  background-color: transparent;\\n}\\n\\n.widget-doc-section p {\\n  margin: 0;\\n}\\n\\n.widget-doc-section code {\\n  color: #e87aa2;\\n  font-size: 0.875rem;\\n}\\n\\n.mv-3 {\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.pv-3 {\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n\\n  .widget-documentation-heading {\\n    background-color: #6e757d;\\n    color: #eee;\\n    font-size: 1.5rem;\\n    padding: 0.5rem 1rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  .widget-documentation-heading h4 {\\n    margin-bottom: 0;\\n  }\\n\\n  .close-documentation-button {\\n    border: none;\\n    outline: none;\\n    background-color: transparent;\\n    line-height: 0;\\n    margin: 0;\\n    padding: 0;\\n    cursor: pointer;\\n  }\\n\\n  .close-documentation-button:hover,\\n  .close-documentation-button:focus  {\\n    background-color: transparent;\\n  }\\n\\n  .documentation-creator {\\n    text-align: right;\\n    color: #666;\\n    margin: 0;\\n    padding-top: 0.5rem;\\n    padding-bottom: 0.5rem;\\n  }\\n\\n  .documentation-creator span {\\n    font-style: italic;\\n  }\\n\\n  .documentation-attachments {\\n    display: flex;\\n    flex-wrap: wrap;\\n  }\\n\\n  .documentation-attachments img {\\n    width: 25%;\\n    height: auto;\\n    border: 1px solid #ccc;\\n    padding: 0.25rem;\\n    margin-top: 0.5rem;\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .documentation-attachments iframe {\\n    width: 50%;\\n    border: 1px solid #ccc;\\n    padding: 0.25rem;\\n    margin-top: 0.5rem;\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .widget-documentation-footer {\\n    text-align: right;\\n    margin-top: 1rem;\\n  }\\n\\n  .widget-documentation-footer button {\\n    border-radius: 0;\\n    border: none;\\n    padding: 0.5rem 1.5rem;\\n    text-align: center;\\n    background: #6e757d;\\n    color: #eee;\\n  }\\n\\n  #widget-details {\\n    position: absolute;\\n    right: 0px;\\n    top: 0px;\\n    z-index: 9999;\\n  }\\n\\n  #widget-details button {\\n    background: #fff;\\n    border: 1px solid #ccc;\\n    border-radius: 0 0 0 0.25rem;\\n    height: auto;\\n    width: auto;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    gap: 0.25rem;\\n  }\\n\\n  #widget-details button:hover, \\n  #widget-details button:focus {\\n    opacity: 0.75;\\n  }\\n\\n  #widget-details button span {\\n    pointer-events: none;\\n    font-size: 1rem;\\n  }\\n\\n  #widget-details button svg {\\n    pointer-events: none;\\n    width: 16px;\\n    height: 16px;\\n    fill: #999;\\n  }\\n\\n  #widget-documentation-preview-modal {\\n    border: none;\\n  }\\n\\n  @media (min-width: 768px) {\\n    #widget-documentation-preview-modal {\\n      flex: 0 0 auto;\\n      width: 66.66666667%;\\n    }\\n  }\\n\\n";
`,zh=`import type { Concept, Connection } from "../app";
export declare const broadcastChannel: {
    addEventListener(type: "message", listener: (event: MessageEvent) => void): void;
    removeEventListener(type: "message", listener: (event: MessageEvent) => void): void;
    postMessage(message: any): void;
    close(): void;
};
export interface InnerActions {
    concepts: Concept[];
    connections: Connection[];
}
`,Jh=`export declare const COMPOSITIONS: {
    PAGE_COMP_NAME: string;
    WIDGET_COMP_NAME: string;
    PROJECT_COMP_NAME: string;
};
`,Qh=`/**
 * AccessControlModels
 *
 * Data structures for Access Control operations.
 * Contains all request/response types for the access control API.
 */
export interface AccessRequest {
    accessId: number;
    permission: string;
    entityId?: number | null;
}
export interface AccessResult {
    accessId: number;
    permission: string;
    entityId?: number | null;
    hasAccess: boolean;
}
export interface AccessControlAPIResponse<T = any> {
    status: boolean;
    data?: T;
    message?: string;
    errorCode?: string;
}
export interface BulkAccessTarget {
    entityId: number;
    permissions: string[];
}
export interface BulkAccessRequest {
    accessId?: number;
    targets: BulkAccessTarget[];
}
export interface BulkCheckAccessRequest {
    accessIds: number[];
    permission: string;
    entityId?: number | null;
}
export interface AccessInheritanceRequest {
    accessId?: number;
    connectionTypeId?: number;
    enable?: boolean;
}
export interface SuperAdminRequest {
    accessId?: number;
}
/**
 * Request model for parent access inheritance operations
 * Mirrors C# ParentAccessInheritanceRequest
 */
export interface ParentAccessInheritanceRequest {
    parentAccessId: number;
    childAccessId?: number | null;
}
export interface ParentAccessInheritanceWithConceptRequest {
    parentConceptId: number;
    childConceptId?: number | null;
}
export interface BulkParentAccessInheritanceWithConceptRequest {
    parentConceptId: number;
    childConceptIds: number[];
}
export interface BulkParentAccessInheritanceResult {
    childConceptId: number;
    accessId: number;
    success: boolean;
    message?: string;
}
export interface SuperAdminWithConceptRequest {
    conceptId: number;
}
export interface AccessInheritanceWithConceptRequest {
    conceptId: number;
    connectionTypeId?: number;
    enable?: boolean;
}
export interface ConceptAccessRequest {
    conceptIds: number;
    permission: string;
    entityId?: number | null;
}
export interface BulkConceptAccessRequest {
    conceptIds: number[];
    permissions: string[];
    entityId?: number | null;
}
`,Yh=`export declare class BaseUrl {
    static BASE_URL: string;
    static NODE_CACHE_URL: string;
    static AI_URL: string;
    static MQTT_URL: string;
    static NODE_URL: string;
    static LOG_SERVER: string;
    static MQTT_CONNECTION: any;
    static BASE_APPLICATION: string;
    static DOCUMENTATION_WIDGET: number;
    static isNearestCache: boolean;
    static ACCESS_CONTROL_BASE_URL: string;
    static isPwa: boolean;
    static FLAGS: any;
    static RECAPTCHA_SITE_KEY: string;
    static RECAPTCHA_ACTION: string;
    static BASE_RANDOMIZER: number;
    static setRandomizer(id: number): void;
    static getRandomizer(): number;
    static GetConceptUrl(): string;
    static GetConnectionUrl(): string;
    static GetConceptBulkUrl(): string;
    static GetConnectionBulkUrl(): string;
    static GetAllConceptsOfUserUrl(): string;
    static GetAllConnectionsOfUserUrl(): string;
    static GetAllConnectionsOfCompositionUrl(): string;
    static GetAllConnectionsOfCompositionBulkUrl(): string;
    static GetConceptByCharacterValueUrl(): string;
    static GetConceptByCharacterAndTypeUrl(): string;
    static GetConceptByCharacterAndCategoryUrl(): string;
    static GetInstanceConceptByCharacterTypeUrl(): string;
    static GetConceptByCharacterAndCategoryDirectUrl(): string;
    static GetCharacterByCharacterUrl(): string;
    static GetAllConceptsByTypeUrl(): string;
    static GetAllConnectionsOfConceptUrl(): string;
    static GetAllConnectionsToConceptUrl(): string;
    static GetAllAiData(): string;
    static getAppConfig(): string;
    static PostPrefetchConceptConnections(): string;
    static GetSuggestedConcepts(): string;
    static GetSuggestedConnections(): string;
    static PostLogger(): string;
    static LogHealth(): string;
    static GetAllPrefetchConnectionsUrl(): string;
    static GetAllLinkerConnectionOfConceptUrl(): string;
    static GetAllLinkerConnectionToConceptUrl(): string;
    static DeleteConceptUrl(): string;
    static DeleteUserUrl(): string;
    static RecursiveSearchUrl(): string;
    static SearchLinkMultipleAllApiUrl(): string;
    static MakeTheNameInBackendUrl(): string;
    static SearchAllTypeWithLinker(auth?: boolean): string;
    static LoginUrl(): string;
    static RefreshTokenUrl(): string;
    static SignupUrl(): string;
    static GetCompositionConnectionBetweenTwoConceptsUrl(): string;
    static SearchCompositionsUrl(): string;
    static SearchLinkMultipleAll(): string;
    static CreateSessionId(): string;
    static CreateSessionVisitUrl(): string;
    static ViewInternalDataUrl(): string;
    static SearchInternalWithAuthenticatedCcsUrl(): string;
    static SearchInternalWithCcsUrl(): string;
    static CreateGhostConceptApiUrl(withAuth?: boolean): string;
    static CreateGhostConnectionApiUrl(): string;
    static GetRealConceptById(): string;
    static GetReservedIdUrl(): string;
    static GetReservedConnectionIdUrl(): string;
    static CreateTheTextDataUrl(): string;
    static CreateTheCharacterDataUrl(): string;
    static CreateTheConceptUrl(): string;
    static CreateTheConnectionUrl(): string;
    static CreateTheConnectionNewUrl(): string;
    static MakeTheTypeConceptUrl(): string;
    static DeleteTheConnectionUrl(): string;
    static DeleteTheConnectionBulkUrl(): string;
    static GetTypeConceptBulk(): string;
    static UploadFileLimitUrl(): string;
    static FreeschemaQueryUrl(): string;
    static uploadImageUrl(): string;
    static uploadImageUrlWithSmall(): string;
    static uploadFileUrl(): string;
    static uploadR2StorageUrl(): string;
    static r2PresignedUploadUrl(): string;
    static sendMail(): string;
    static sendBulkMail(): string;
    static sendPersonalMail(): string;
    static getWidgetData(): string;
    static getLatestWidgetData(): string;
    static getRecentWidgetData(): string;
    static getConnectionsByTypes(): string;
    static GetConnectionsBetweenUrl(): string;
    static CreatePrototypeUrl(): string;
    static GetCachedImage(ImageName: string): string;
}
`,Xh=`import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
export declare class BinaryCharacterTree {
    static characterRoot: Node | null;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addNodeToTree(node: Node): Promise<Node | null>;
    static removeNodeByCharacter(character: string, id: number): Promise<void>;
    static countNumberOfNodes(): number;
    static addConceptToTree(concept: Concept): void;
    static getNodeFromTree(value: string): Node | null;
    static getNodeFromTreeUpdated(value: string): Node | null;
    static getCharacterAndTypeFromTree(value: string, typeId: number): Promise<Node | null>;
    static getCharacterAndCategoryFromTree(value: string, categoryId: number): Promise<Node | null>;
    static removeConceptCharacter(id: number): void;
}
`,Kh=`import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
/**
 * BinaryTree — In-memory concept store keyed by numeric concept ID.
 *
 * Backed by a Map<number, Concept> for O(1) lookups, inserts, and deletes.
 * Also maintains the BinaryCharacterTree (character-indexed) on every insert
 * so character-based search continues to work.
 *
 * All public method signatures are preserved for backward compatibility.
 * getNodeFromTree returns a { key, value } wrapper so callers that access
 * node.value continue to work without changes.
 */
export declare class BinaryTree {
    /** Sentinel root — non-null when the map has data, null when empty. */
    static root: Node | null;
    /** Primary data store: concept ID → Concept object */
    private static conceptMap;
    private static normalizeId;
    /**
     * Low-level add — stores the node's key/value in the Map.
     * Kept for API compatibility (called internally by addConceptToTree).
     * @param node - Node with numeric key and Concept value
     */
    static addNodeToTree(node: Node): void;
    /**
     * Polls until IdentifierFlags.isDataLoaded is true (max 25 seconds).
     * Used by callers that need to wait for the initial IndexedDB load to finish.
     */
    static waitForDataToLoad(): Promise<unknown>;
    /** Recursive polling helper for waitForDataToLoad */
    static checkFlag(resolve: any): any;
    /**
     * Adds a concept to both the ID map and the character tree.
     *
     * The character tree (BinaryCharacterTree) is still an AVL tree because
     * it supports character-based search which is out of scope for this refactor.
     *
     * @param concept - The Concept to store
     */
    static addConceptToTree(concept: Concept): void;
    /**
     * Retrieves a concept by ID from the Map.
     *
     * Returns a { key, value } wrapper matching the Node shape that callers expect.
     * Callers access the returned object's .value property to get the Concept.
     *
     * @param id - The concept ID to look up
     * @returns Node-like wrapper with .value = Concept, or null if not found
     */
    static getNodeFromTree(id: number): Promise<Node | null>;
    /**
     * Removes a concept by ID. Dispatches an event before deletion
     * so listeners (e.g. UI components) can react to the removal.
     *
     * @param id - The concept ID to remove
     */
    static removeNodeFromTree(id: number): Promise<void>;
    /**
     * Bulk concept retrieval by ID list.
     *
     * For each ID found in the Map, pushes the Concept into conceptArray
     * and removes the ID from the ids array. IDs remaining in the array
     * after this call are "not found" and will be fetched from the backend.
     *
     * Performance: O(k) where k = ids.length (was O(N) full tree traversal).
     *
     * @param ids - Array of concept IDs to look up (mutated: found IDs are spliced out)
     * @param conceptArray - Output array (mutated: found Concepts are pushed)
     * @param remainingIds - Not used directly but kept for API compatibility
     */
    static getConceptListFromIds(ids: number[], conceptArray: Concept[], remainingIds: any): Promise<void>;
    /**
     * Returns the total number of concepts stored.
     * @returns Number of concepts in the Map
     */
    static countNumberOfNodes(): number;
}
`,Zh=`import { Concept } from "../DataStructures/Concept";
import { Node } from "./Node";
import { TypeNode } from "./TypeNode";
export declare class BinaryTypeTree {
    static typeRoot: Node | null;
    static root: TypeNode | null;
    static addType(node: TypeNode): Promise<TypeNode | null>;
    static addConceptToTree(concept: Concept): void;
    static removeTypeConcept(typeId: number, id: number): void;
    static getNodeFromTreeNew(id: number): TypeNode | null;
    static getTypeVariantsFromTreeNew(typeId: number): Promise<Concept[]>;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getTypeVariantsFromTreeWithUserIdNew(typeId: number, userId: number): Promise<Concept[]>;
    static getTypeVariantsWithCharacterValueNew(characterValue: string, typeId: number): Promise<Concept>;
    static countNumberOfNodes(): number;
}
`,ep=`import { TheCharacter } from "./TheCharacter";
export declare class CharacterRepository {
    name: string;
    constructor();
    static characterData: TheCharacter[];
    static AddCharacter(character: TheCharacter): void;
    static GetCharacter(value: string): TheCharacter;
}
`,tp=`import { Connection } from '../../DataStructures/Connection';
import { Concept } from '../../DataStructures/Concept';
export declare class Composition {
    id: number;
    mainConcept: Concept;
    connections: Connection[];
    concepts: Concept[];
    subcompositions: number[];
    cached: any;
    updateCache(): Promise<void>;
    UpdateAcrossDistributedSystem(): void;
    isUpdating(): void;
    GetDataCache(): any;
}
`,np=`import { Composition } from './Composition';
import { CompositionNode } from './CompositionNode';
export declare class CompositionBinaryTree {
    static root: CompositionNode | null;
    static addNodeToTree(node: CompositionNode): CompositionNode | undefined;
    static addCompositionToTree(composition: Composition): void;
    static getNodeFromTree(id: number): Promise<CompositionNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
    static countNumberOfNodes(): number;
}
`,op=`import { Composition } from './Composition';
export declare class CompositionNode {
    expiryTime: Date;
    key: number;
    value: Composition;
    leftNode: CompositionNode | null;
    rightNode: CompositionNode | null;
    height: number;
    constructor(key: number, value: Composition, leftNode: CompositionNode | null, rightNode: CompositionNode | null);
    isValid(): boolean;
    saveToCache(data: any): void;
    addNode(passedNode: CompositionNode, node: CompositionNode | null, height: number): CompositionNode | null;
    rightRotate(y: CompositionNode | null): CompositionNode | null;
    leftRotate(x: CompositionNode | null): CompositionNode | null;
    getHeight(node: CompositionNode | null): number;
    getBalanceFactor(N: CompositionNode | null): number;
    getFromNode(id: number, node: CompositionNode | null): CompositionNode | null;
    removeNode(passedNode: CompositionNode | null, id: number): CompositionNode | null;
    countNodeBelow(root: CompositionNode | null): number;
    inOrderSuccessor(root: CompositionNode): CompositionNode;
}
`,ip=`export declare class Concept {
    id: number;
    ghostId: number;
    count: number;
    userId: number;
    typeId: number;
    categoryId: number;
    accessId: number;
    characterValue: string;
    typeCharacter: string;
    entryTimeStamp: Date | string;
    referentId: number | null;
    updatedTimeStamp: Date | string;
    referent: Concept | null | void;
    type: null | void | Concept;
    isNew: boolean;
    isComposition: boolean;
    isTemp: boolean;
    isSynced: boolean;
    applicationId: number;
    x: number;
    y: number;
    constructor(id: number, userId: number, typeId: number, categoryId: number, referentId: number | null, characterValue: string, accessId: number, isNew: boolean | undefined, entryTimeStamp: Date | string, updatedTimeStamp: Date | string, typeCharacter: string);
    getType(): void;
}
`,rp=`import { Concept } from "./Concept";
import { WidgetDetails } from "./WidgetCache/WidgetDetails";
export declare class ConceptsData {
    name: string;
    constructor();
    static conceptsArray: Concept[];
    static NPC: number[];
    static conceptDictionary: Concept[];
    static CheckContains(concept: Concept): boolean;
    static AddNpc(id: number): void;
    static GetNpc(id: number): boolean;
    static AddConceptToStorage(concept: Concept): void;
    static GetConceptBulkData(ids: number[], connectionArray: Concept[], remainingIds: any): Promise<void>;
    static AddWidget(widgetDetails: WidgetDetails): void;
    static AddConcept(concept: Concept): void;
    static AddConceptToMemory(concept: Concept): void;
    static AddConceptTemporary(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static GetWidget(id: number): Promise<WidgetDetails>;
    static RemoveWidget(id: number): Promise<any>;
    static GetConcept(id: number): Promise<any>;
    static GetConceptByCharacter(characterValue: string): Promise<Concept>;
    static GetConceptByCharacterUpdated(characterValue: string): Promise<Concept>;
    static GetConceptByCharacterAndTypeLocal(character_value: string, typeId: number): Promise<Concept>;
    static GetConceptByCharacterAndCategoryLocal(character_value: string, categoryId: number): Promise<Concept>;
    static GetConceptsByTypeId(typeId: number): Concept[];
    static GetConceptsByTypeIdAndUser(typeId: number, userId: number): Promise<any>;
    static GetBinaryCharacterTree(): import("./Node").Node | null;
    getName(): string;
}
`,sp=`import { Concept } from "./Concept";
export declare class Connection {
    id: number;
    count: number;
    userId: number;
    ghostId: number;
    ofTheConceptId: number;
    toTheConceptId: number;
    entryTimeStamp: Date | string;
    terminationDateTime: Date;
    typeId: number;
    orderId: number;
    accessId: number;
    typeCharacter: string;
    localSyncTime: Date;
    isTemp: boolean;
    toUpdate: boolean;
    applicationId: number;
    type: Concept;
    ofConcept: Concept;
    toConcept: Concept;
    constructor(id: number | undefined, ofTheConceptId: number, toTheConceptId: number, userId: number, typeId: number, orderId: number, accessId: number);
}
`,ap=`import { Connection } from "../../DataStructures/Connection";
import { ConnectionNode } from "./ConnectionNode";
/**
 * ConnectionBinaryTree — In-memory connection store keyed by numeric connection ID.
 *
 * Backed by a Map<number, Connection> for O(1) lookups, inserts, and deletes.
 * The secondary index trees (ConnectionTypeTree, ConnectionOfTheTree) are
 * managed separately by ConnectionData and remain unchanged.
 *
 * All public method signatures are preserved for backward compatibility.
 * getNodeFromTree returns a { key, value } wrapper so callers that access
 * node.value continue to work without changes.
 */
export declare class ConnectionBinaryTree {
    /** Sentinel root — non-null when the map has data, null when empty. */
    static connectionroot: ConnectionNode | null;
    /** Primary data store: connection ID → Connection object */
    private static connectionMap;
    /**
     * Low-level add — stores the node's key/value in the Map.
     * Kept for API compatibility.
     * @param node - ConnectionNode with numeric key and Connection value
     */
    static addNodeToTree(node: ConnectionNode): void;
    /**
     * Adds a connection to the Map and dispatches an event for the
     * owning concept so UI listeners can react.
     *
     * The dispatchIdEvent(ofTheConceptId) was previously fired inside
     * ConnectionNode.addNode when the node was placed into a null slot.
     * We only fire it for new connections (not overwrites) to preserve
     * the original behavior.
     *
     * @param connection - The Connection to store
     */
    static addConnectionToTree(connection: Connection): void;
    /**
     * Returns the total number of connections stored.
     * @returns Number of connections in the Map
     */
    static traverse(): number;
    /**
     * Polls until IdentifierFlags.isConnectionLoaded is true (max 25 seconds).
     * Used by callers that need to wait for the initial IndexedDB load to finish.
     */
    static waitForDataToLoad(): Promise<unknown>;
    /** Recursive polling helper for waitForDataToLoad */
    static checkFlag(resolve: any): any;
    /**
     * Removes a connection by ID. Dispatches an event for the owning concept
     * before deletion so listeners can react to the removal.
     *
     * @param id - The connection ID to remove
     */
    static removeNodeFromTree(id: number): Promise<void>;
    /**
     * Retrieves a connection by ID from the Map.
     *
     * Returns a { key, value } wrapper matching the ConnectionNode shape.
     * Also increments the connection's count field for access tracking
     * (preserving the original ConnectionNode.getFromNode behavior).
     *
     * @param id - The connection ID to look up
     * @returns ConnectionNode-like wrapper with .value = Connection, or null/undefined
     */
    static getNodeFromTree(id: number): Promise<ConnectionNode | null | undefined>;
    /**
     * Bulk connection retrieval by ID list.
     *
     * For each ID found in the Map, pushes the Connection into connectionArray
     * and removes the ID from the ids array. IDs remaining after this call
     * are "not found" and will be fetched from the backend.
     *
     * Performance: O(k) where k = ids.length (was O(N) full tree traversal).
     *
     * @param ids - Array of connection IDs to look up (mutated: found IDs are spliced out)
     * @param connectionArray - Output array (mutated: found Connections are pushed)
     * @param remainingIds - Not used directly but kept for API compatibility
     */
    static getConnectionListFromIds(ids: number[], connectionArray: Connection[], remainingIds: any): Promise<void>;
}
`,cp=`import { Connection } from "./../Connection";
export declare class ConnectionNode {
    key: any;
    value: Connection;
    leftNode: ConnectionNode | null;
    rightNode: ConnectionNode | null;
    currentNode: ConnectionNode | null;
    variants: ConnectionNode[];
    height: number;
    constructor(key: any, value: Connection, leftNode: ConnectionNode | null, rightNode: ConnectionNode | null);
    addCurrentNode(passedNode: ConnectionNode, node: ConnectionNode | null): ConnectionNode;
    addCurrentNodeType(passedNode: ConnectionNode, node: ConnectionNode | null): ConnectionNode;
    getMax(a: number, b: number): number;
    addNode(passedNode: ConnectionNode, node: ConnectionNode | null, height: number): ConnectionNode | null;
    addTypeNode(passedNode: ConnectionNode, node: ConnectionNode | null, height: number): ConnectionNode | null;
    rightRotate(y: ConnectionNode | null): ConnectionNode | null;
    leftRotate(x: ConnectionNode | null): ConnectionNode | null;
    getHeight(node: ConnectionNode | null): number;
    getBalanceFactor(N: ConnectionNode | null): number;
    getFromNode(id: number, node: ConnectionNode | null): ConnectionNode | null;
    getCharacterFromNode(value: string, node: ConnectionNode | null): ConnectionNode | null;
    checkIfIdsInNode(node: ConnectionNode | null, ids: number[], connectionArray: Connection[], remainingIds: any): void;
    traverse(node: ConnectionNode | null): number;
    removeNode(passedNode: ConnectionNode | null, id: number): ConnectionNode | null;
    removeNodeWithVariants(passedNode: ConnectionNode | null, typeIdentifier: any, conceptId: number): ConnectionNode | null;
    inOrderSuccessor(root: ConnectionNode): ConnectionNode;
}
`,lp=`import { NodePrimitive } from "./NodePrimitive";
export declare class ConnectionOfNode extends NodePrimitive {
    key: string;
    value: number[];
    height: number;
    leftNode: ConnectionOfNode | null;
    rightNode: ConnectionOfNode | null;
    constructor(key: any, value: number[], leftNode: ConnectionOfNode | null, rightNode: ConnectionOfNode | null);
    addNode(passedNode: ConnectionOfNode, node: ConnectionOfNode | null, height: number): any;
}
`,dp=`import { Connection } from "../Connection";
import { ConnectionOfNode } from "./ConnectionOfNode";
/**
 * This is a binary tree that is used to store the reference to the main connection of the concept.
 */
export declare class ConnectionOfTheTree {
    static node: ConnectionOfNode | null;
    static CreateCompositionKey(ofTheConceptId: number, typeId: number): number;
    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId: number, typeId: number): any;
    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnection(connection: Connection): void;
    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static addNodeToTree(connectionOfNode: ConnectionOfNode): Promise<ConnectionOfNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
}
`,up=`import { NodePrimitive } from "./NodePrimitive";
export declare class ConnectionTypeNode extends NodePrimitive {
    key: string;
    value: number[];
    height: number;
    leftNode: ConnectionTypeNode | null;
    rightNode: ConnectionTypeNode | null;
    constructor(key: any, value: number[], leftNode: ConnectionTypeNode | null, rightNode: ConnectionTypeNode | null);
    addNode(passedNode: ConnectionTypeNode, node: ConnectionTypeNode | null, height: number): any;
}
`,hp=`import { Connection } from "../../DataStructures/Connection";
import { ConnectionTypeNode } from "./ConnectionTypeNode";
export declare class ConnectionTypeTree {
    static connectionTypeRoot: ConnectionTypeNode | null;
    static CreateCompositionKey(typeId: number): number;
    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static addNodeToTree(connectionOfNode: ConnectionTypeNode): Promise<ConnectionTypeNode | null>;
    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnectionToTree(connection: Connection): void;
    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId: number, typeId: number): any;
}
`,pp=`export declare class NodePrimitive {
    key: string;
    value: number[];
    height: number;
    leftNode: any | null;
    rightNode: any | null;
    constructor(key: any, value: number[], leftNode: NodePrimitive | null, rightNode: NodePrimitive | null);
    getFromNode(id: any, node: any | null): any | null;
    rightRotate(y: NodePrimitive | null): any;
    leftRotate(x: NodePrimitive | null): any;
    getHeight(node: NodePrimitive | null): number;
    getBalanceFactor(N: NodePrimitive | null): number;
    removeNode(passedNode: any | null, id: number): any;
    inOrderSuccessor(root: any): any;
}
`,fp=`export declare class GetConnectionsByTypes {
    ofTheConceptId: number;
    connectionTypes: string[];
}
`,mp=`import { Connection } from "./Connection";
export declare class ConnectionData {
    name: string;
    constructor();
    static deletedConnections: number[];
    static connectionArray: Connection[];
    static connectionDictionary: Connection[];
    static CheckContains(connection: Connection): boolean;
    static AddConnectionToStorage(connection: Connection): void;
    static AddNpConn(id: number): void;
    static GetNpConn(id: number): boolean;
    static AddConnection(connection: Connection): void;
    static AddConnectionToMemory(connection: Connection): void;
    static AddToDictionary(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
    static GetConnectionTypeOfTree(): void;
    static GetConnectionByOfTheConceptAndType(ofTheConceptId: number, typeId: number): Promise<any>;
    static GetConnectionByOfType(ofTheConceptId: number, typeId: number): any;
    static GetConnectionTree(): import("./ConnectionBinaryTree/ConnectionNode").ConnectionNode | null;
    static GetConnectionTypeTree(): import("./ConnectionBinaryTree/ConnectionTypeNode").ConnectionTypeNode | null;
    static GetConnectionBulkData(ids: number[], connectionArray: Connection[], remainingIds: any): Promise<void>;
    static GetConnection(id: number): Promise<any>;
    static GetConnectionsOfCompositionLocal(id: number): Promise<any>;
    static GetConnectionsOfConcept(id: number): Promise<any>;
    getName(): string;
}
`,yp=`export declare class CountInfo {
    conceptId: number;
    connectionTypeId: number;
    connectionType: string;
    count: number;
}
`,gp=`/**
 * Request/response shape for the POST /api/get-connection-between endpoint.
 *
 * Use only the fields relevant to your query permutation and leave the rest at their
 * zero/empty defaults. The backend resolves \`typeId\` from the \`type\` string when
 * \`typeId\` is 0, so you never need to supply both.
 *
 * **Query permutations:**
 * 1. \`ofTheConceptId\` + \`toTheConceptId\` + \`type\` — connections between two specific concepts of that type
 * 2. \`ofTheConceptId\` + \`type\`                    — all connections FROM a concept of that type
 * 3. \`toTheConceptId\` + \`type\`                    — all connections TO a concept of that type
 * 4. \`typeId\` + \`isComposition: true\`             — all internal connections of a composition
 *
 * After the request, the backend populates \`connectionIds\` and the resolved \`typeId\`
 * on each item and returns the same array.
 */
export interface FetchConnection {
    /** Source concept ID. 0 means "not specified". */
    ofTheConceptId: number;
    /** Target concept ID. 0 means "not specified". */
    toTheConceptId: number;
    /** Resolved type concept ID. Set directly or leave 0 — backend resolves it from \`type\`. */
    typeId: number;
    /** Human-readable type string (e.g. "the_project_s_page"). Used when typeId is 0. */
    type: string;
    /** Legacy type string resolved relative to the source concept's type. Leave empty unless required. */
    oldType: string;
    /** When true, searches for connections in the reverse direction (toTheConceptId → ofTheConceptId). */
    reverse: boolean;
    /** When true, treats typeId as a composition ID and returns its internal connections. */
    isComposition: boolean;
    /** Populated by the backend after the request — the matching connection IDs. */
    connectionIds: number[];
}
/**
 * Input-only shape for building a FetchConnection query.
 * Omits \`connectionIds\` since that is an output field populated by the backend.
 */
export type FetchConnectionQuery = Omit<FetchConnection, 'connectionIds'>;
/**
 * Builds a complete FetchConnection request object from a partial query,
 * filling unspecified fields with their zero/empty defaults.
 *
 * Use this instead of constructing FetchConnection manually so you only
 * need to specify the fields relevant to your query permutation.
 *
 * @param query - Partial query with only the fields you need.
 * @returns A fully initialised FetchConnection ready to send to the API.
 *
 * @example
 * // Between two concepts
 * buildFetchConnection({ ofTheConceptId: 1, toTheConceptId: 2, type: "the_project_s_page" })
 *
 * @example
 * // All connections from a concept
 * buildFetchConnection({ ofTheConceptId: 1, type: "the_project_s_page" })
 *
 * @example
 * // All internal connections of a composition
 * buildFetchConnection({ typeId: 101490186, isComposition: true })
 *
 * @see {@link GetConnectionsBetweenApi} to send the built query to the backend
 */
export declare function buildFetchConnection(query: Partial<FetchConnectionQuery>): FetchConnection;
`,vp=`export declare class FilterSearch {
    type: string;
    search: string;
    logicoperator: string;
    index: number;
    composition: boolean;
    name: string;
    operateon: string;
}
`,Cp=`export declare class IdentifierFlags {
    static isTypeLoaded: boolean;
    static isCharacterLoaded: boolean;
    static isDataLoaded: boolean;
    static isLocalDataLoaded: boolean;
    static isLocalCharacterLoaded: boolean;
    static isLocalTypeLoaded: boolean;
    static isConnectionLoaded: boolean;
    static isConnectionTypeLoaded: boolean;
    static isLocalConnectionLoaded: boolean;
}
`,bp=`import { Concept } from "../Concept";
export declare class LConcept {
    id: number;
    structureType: string;
    ghostId: number;
    userId: number;
    typeId: number;
    categoryId: number;
    accessId: number;
    characterValue: string;
    typeCharacter: string;
    entryTimeStamp: Date;
    referentId: number;
    updatedTimeStamp: Date;
    type: LConcept | null | void | Concept;
    isNew: boolean;
    isComposition: boolean;
    isTemp: boolean;
    isSynced: boolean;
    applicationId: number;
    constructor(id: number, userId: number, typeId: number, categoryId: number, accessId: number, characterValue: string, typeCharacter: string, isNew: boolean | undefined, entryTimeStamp: Date, updatedTimeStamp: Date, referentId: number);
    getType(): void;
}
`,Ip=`import { Concept } from "../Concept";
export declare class LConnection {
    id: number;
    ghostId: number;
    ofTheConceptId: number;
    toTheConceptId: number;
    entryTimeStamp: Date | string;
    terminationDateTime: Date;
    accessId: number;
    typeId: number;
    orderId: number;
    typeCharacter: string;
    localSyncTime: Date;
    isTemp: boolean;
    applicationId: number;
    type: Concept;
    constructor(id: number, ofTheConceptId: number, toTheConceptId: number, typeId: number, orderId: number, accessId: number);
}
`,wp=`import { Concept } from "./../Concept";
export declare class LNode {
    key: any;
    value: Concept;
    leftNode: LNode | null;
    rightNode: LNode | null;
    currentNode: LNode | null;
    variants: LNode[];
    height: number;
    constructor(key: any, value: Concept, leftNode: LNode | null, rightNode: LNode | null);
    addCurrentNode(passedNode: LNode, node: LNode | null): LNode;
    addCurrentNodeType(passedNode: LNode, node: LNode | null): LNode;
    addNode(passedNode: LNode, node: LNode | null, height: number): LNode | null;
    addCharacterNode(passedNode: LNode, node: LNode | null, height: number): LNode | null;
    addTypeNode(passedNode: LNode, node: LNode | null, height: number): LNode | null;
    rightRotate(y: LNode | null): LNode | null;
    leftRotate(x: LNode | null): LNode | null;
    getHeight(node: LNode | null): number;
    getBalanceFactor(N: LNode | null): number;
    getFromNode(id: number, node: LNode | null): LNode | null;
    updateNodeSyncStatus(id: number, value: any, node: LNode | null): LNode | null;
    getCharacterFromNode(value: string, node: LNode | null): LNode | null;
    getFromNodeWithCharacterAndType(value: string, typeId: number, node: LNode | null): LNode | null;
    getFromNodeWithCharacterAndCategory(value: string, categoryId: number, node: LNode | null): LNode | null;
    removeNode(passedNode: LNode | null, id: number): LNode | null;
    removeNodeWithVariants(passedNode: LNode | null, typeIdentifier: any, conceptId: number): LNode | null;
    countNodeBelow(root: LNode | null): number;
    inOrderSuccessor(root: LNode): LNode;
}
`,Tp=`import { Concept } from "../../DataStructures/Concept";
import { LNode } from "./../Local/LNode";
export declare class LocalBinaryCharacterTree {
    static LocalCharacterRoot: LNode | null;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addNodeToTree(node: LNode): Promise<LNode | null>;
    static addConceptToTree(concept: Concept): void;
    static getNodeFromTree(value: string): LNode | null;
    static getCharacterAndTypeFromTree(value: string, typeId: number): Promise<LNode | null>;
    static getCharacterAndCategoryFromTree(value: string, categoryId: number): Promise<LNode | null>;
    static removeConceptType(character: string, id: number): void;
}
`,kp=`import { Concept } from "../../DataStructures/Concept";
import { LNode } from "./../Local/LNode";
export declare class LocalBinaryTree {
    static root: LNode | null;
    static addNodeToTree(node: LNode): LNode | undefined;
    static addConceptToTree(concept: Concept): void;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getNodeFromTree(id: number): Promise<LNode | null>;
    static getCharacterAndTypeFromTree(value: string, typeId: number): LNode | null;
    static updateSyncStatus(id: number): LNode | null;
    static removeNodeFromTree(id: number): Promise<void>;
}
`,Ap=`import { Concept } from "../../DataStructures/Concept";
import { LNode } from "./LNode";
export declare class LocalBinaryTypeTree {
    static LocalTypeRoot: LNode | null;
    static addNodeToTree(node: LNode): Promise<LNode | null>;
    static addConceptToTree(concept: Concept): void;
    static removeConceptType(typeId: number, id: number): void;
    static getNodeFromTree(id: number): LNode | null;
    static getTypeVariantsFromTree(typeId: number): Concept[] | undefined;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getTypeVariantsFromTreeWithUserId(typeId: number, userId: number): Promise<Concept[]>;
}
`,_p=`import { Concept } from "./../Concept";
export declare class LocalConceptsData {
    name: string;
    constructor();
    static localconceptsArray: Concept[];
    static AddConcept(concept: Concept): void;
    static AddPermanentConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): Promise<void>;
    static RemoveConceptById(conceptId: number): Promise<void>;
    static AddConceptToMemory(concept: Concept): void;
    static GetConcept(id: number): Promise<Concept>;
    static UpdateConceptSyncStatus(id: number): Promise<void>;
    static GetConceptByGhostId(id: number): Promise<Concept>;
    static GetConceptByCharacter(characterValue: string): Promise<Concept>;
    static GetConceptByCharacterAndTypeLocal(character_value: string, typeId: number): Promise<Concept>;
    static GetConceptByCharacterAndCategoryLocal(character_value: string, categoryId: number): Promise<Concept>;
    static GetConceptsByTypeId(typeId: number): Concept[];
    static GetConceptsByTypeIdAndUser(typeId: number, userId: number): Promise<Concept[]>;
    static ClearData(): Promise<void>;
    getName(): string;
}
`,Sp=`import { Connection } from "../Connection";
export declare class LocalConnectionData {
    name: string;
    constructor();
    static connectionArray: Connection[];
    static connectionDictionary: Connection[];
    static CheckContains(connection: Connection): boolean;
    static AddConnection(connection: Connection): void;
    static AddConnectionToMemory(connection: Connection): void;
    static AddToDictionary(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
    static RemoveConnectionById(connectionId: number): void;
    static AddPermanentConnection(connection: Connection): void;
    static GetConnection(id: number): Connection | null;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static GetConnectionsOfCompositionLocal(id: number): Promise<Connection[]>;
    static GetConnectionOfCompositionAndTypeLocal(typeId: number, ofTheConceptId: number): Promise<Connection[]>;
    getName(): string;
}
`,xp=`import { Concept } from "../../DataStructures/Concept";
import { LNode } from "./../Local/LNode";
export declare class LocalGhostIdTree {
    static root: LNode | null;
    static addNodeToTree(node: LNode): LNode | undefined;
    static addConceptToTree(concept: Concept): void;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static getNodeFromTree(id: number): Promise<LNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
}
`,Np=`export declare class LocalId {
    static localId: number;
    static localConnectionId: number;
    static ReservedLocalId: number[];
    static ReservedConnectionId: number[];
    static AddConceptId(id: any): void;
    /**
     *
     * This function will get the local concept id from the indexdb
     * @returns the local concept id
     */
    static getConceptId(): Promise<number>;
    /**
     *
     * @param object This is the object that needs to be updated
     */
    static AddConnectionId(object: any): void;
    static getConnectionId(): Promise<number>;
}
`,Lp=`import { Concept } from "./../Concept";
import { Connection } from "../Connection";
import { InnerActions } from "../../app";
type syncContainer = {
    id: string;
    data: InnerActions;
    createdDate: string;
};
export declare class LocalSyncData {
    static conceptsSyncArray: Concept[];
    static connectionSyncArray: Connection[];
    static ghostIdMap: Map<any, any>;
    static transactionCollections: syncContainer[];
    static CheckContains(concept: Concept): boolean;
    static SyncDataDelete(id: number): void;
    static CheckContainsConnection(connection: Connection): boolean;
    static AddConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static SyncDataOnlineWithoutAuth(transactionId?: string, actions?: InnerActions, withAuth?: boolean): Promise<any>;
    static SyncDataOnline(transactionId?: string, actions?: InnerActions, withAuth?: boolean): Promise<any>;
    static ConvertGhostIdsInConnections(connectionArray: Connection[]): void;
    static UpdateConceptListToIncludeRelatedConcepts(connectionArray: Connection[], conceptsArray: Concept[]): Promise<void>;
    static AddConceptIfDoesNotExist(concept: Concept, conceptList?: Concept[]): void;
    static CheckIfTheConceptIdExists(id: number, conceptList?: Concept[]): Concept;
    static AddConnection(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
    static RemoveConnectionById(connectionId: number): void;
    static syncDataLocalDb(): Promise<string>;
    static initializeTransaction(transactionId: string): Promise<any>;
    static markTransactionActions(transactionId: string, actions: InnerActions): Promise<any>;
    static rollbackTransaction(transactionId: string, actions: InnerActions): Promise<any>;
}
export {};
`,Dp=`import { Concept } from "./Concept";
export declare class Node {
    key: any;
    value: Concept;
    leftNode: Node | null;
    rightNode: Node | null;
    currentNode: Node | null;
    variants: Node[];
    height: number;
    constructor(key: any, value: Concept, leftNode: Node | null, rightNode: Node | null);
    addCurrentNode(passedNode: Node, node: Node | null): Node;
    addCurrentNodeType(passedNode: Node, node: Node | null): Node;
    addNode(passedNode: Node, node: Node | null, height: number): Node | null;
    checkIfIdsInNode(node: Node | null, ids: number[], connectionArray: Concept[], remainingIds: any): void;
    addCharacterNode(passedNode: Node, node: Node | null, height: number): Node | null;
    addTypeNode(passedNode: Node, node: Node | null, height: number): Node | null;
    rightRotate(y: Node | null): Node | null;
    leftRotate(x: Node | null): Node | null;
    getHeight(node: Node | null): number;
    getBalanceFactor(N: Node | null): number;
    getFromNode(id: number, node: Node | null): Node | null;
    getCharacterFromNode(value: string, node: Node | null): Node | null;
    getCharacterFromNodeUpdated(value: string, node: Node | null): Node | null;
    getFromNodeWithCharacterAndType(value: string, typeId: number, node: Node | null): Node | null;
    getFromNodeWithCharacterAndCategory(value: string, categoryId: number, node: Node | null): Node | null;
    removeNode(passedNode: Node | null, id: number): Node | null;
    removeNodeWithVariants(passedNode: Node | null, typeIdentifier: any, conceptId: number): Node | null;
    countNodeBelow(root: Node | null): number;
    inOrderSuccessor(root: Node): Node;
}
`,Pp=`export declare class PatcherStructure {
    compositionId: number;
    userId: number;
    sessionId: number;
    accessId: number;
    ofTheCompositionId: number;
    patchObject: any;
}
`,Rp=`import { Concept } from "../Concept";
import { Connection } from "../Connection";
import { PrototypeOption } from "./PrototypeOption";
import { QuerySelector } from "./QuerySelector";
export declare class Prototype {
    prototype: string;
    required: string[];
    optional: string[];
    field: string;
    childPrototypes: Prototype[];
    isCompositional: boolean;
    options: PrototypeOption[];
    isQueryType: boolean;
    querySelector: QuerySelector | null;
    concepts: Concept[];
    connections: Connection[];
    addedConcepts: Concept[];
    addedConnections: Connection[];
}
`,Bp=`export declare class PrototypeOption {
    type: string;
    value: string;
}
`,Ep=`export declare class QuerySelector {
    filterType: string;
    selector: string;
}
`,Op=`export declare class ReservedIds {
    static ids: number[];
    static getId(): Promise<number>;
    static AddId(id: number): void;
}
export declare class ReservedConnectionIds {
    static connectionIds: number[];
    static getId(): Promise<number>;
    static AddId(id: number): void;
}
`,Fp=`/**
 * This is a class that is used to standardize the Response that is sent by FreeSchema.
 * This is done so that we do not have to send a HttpResponse codes.
 */
export declare class FreeSchemaResponse {
    private message;
    private status;
    private data;
    private ok;
    private url;
    /**
     *
     * @param message this is the message for the response
     * @param ok  this is the status can be true or false boolean in case that request succeds or fails
     * @param status this is the standard http codes 200 for ok, 500 for internal error etc.
     * @param data  this is the standard data that can be anything.
     */
    constructor(message: string, ok: boolean, status: number, data: any);
    /**
     * This function gets the message of the error
     * @returns
     */
    getMessage(): string;
    /**
     *
     * @param message This allows you to set a message variable in the FreeSchemaResponse
     * @returns
     */
    setMessage(message: string): FreeSchemaResponse;
    /**
     *
     * @returns status code of the FreeSchemaResponse
     */
    getStatus(): number;
    /**
     *
     * @param status standard http error codes (200 ok , 401 unauthorized, 500 internal server error etc.)
     * @returns
     */
    setStatus(status: number): FreeSchemaResponse;
    /**
     *
     * @returns returns the data for the request
     */
    getData(): any;
    /**
     *
     * @param data any type of data can be given here
     * @returns FreeSchemaReponse
     */
    setData(data: any): FreeSchemaResponse;
    /**
     *
     * @returns the status of the FreeSchemaReponse (either true or false)
     */
    getOk(): boolean;
    /**
     *
     * @param status if the status is true then the response was successful else the success was not achieved.
     * @returns returns the FreeSchemaResponse
     */
    setOk(ok: boolean): FreeSchemaResponse;
    /**
     *
     * @returns the url that caused the error
     */
    getUrl(): string;
    /**
     *
     * @param url the url from which the error or response originates
     * @returns FreeSchemaResponse
     */
    setUrl(url: string): FreeSchemaResponse;
}
`,Up=`export interface FreeschemaResponse {
    message: string;
    status: boolean;
    statusCode: number;
    data: any;
}
`,Gp=`export declare class Returner {
    id: number;
    userId: number;
    referentId: number;
    isNew: boolean;
    constructor(id: number, userId: number, referentId: number, isNew: boolean);
}
`,Mp=`import { Concept } from "../Concept";
import { FilterSearch } from "../FilterSearch";
export declare class FreeschemaQuery {
    type: string;
    inpage: number;
    page: number;
    concepts: Concept[];
    conceptIds: number[];
    selectors: string[];
    freeschemaQueries: FreeschemaQuery[];
    filters: FilterSearch[];
    filterLogic: string;
    typeConnection: string;
    order: string;
    outputFormat: number;
    name: string;
    filterAncestor: string;
    reverse: boolean;
    limit: boolean;
    isSecure: boolean;
    includeInFilter: boolean;
    isOldConnectionType: boolean;
    cache: boolean;
    usePipelineQuery: boolean;
}
`,Wp=`export declare class SearchStructure {
    type: string;
    search: string;
    composition: string;
    internalComposition: string;
    userId: number;
    inpage: number;
    page: number;
    auth: boolean;
}
`,jp=`import { FilterSearch } from "./FilterSearch";
export declare class SearchQuery {
    composition: number;
    type: string;
    linker: string;
    inpage: number;
    page: number;
    listLinkers: string[];
    fullLinkers: string[];
    textSearch: string;
    logic: string;
    reverse: boolean;
    doFilter: boolean;
    filterSearches: FilterSearch[];
    selectors: string[];
    ofCompositions: number[];
}
`,Vp=`/**
 * Encrypts and stores a profile object in localStorage.
 * Uses AES-GCM with a browser-bound derived key so the ciphertext
 * is not portable to other origins or browsers.
 */
export declare function saveProfile(profile: Record<string, any>): Promise<void>;
/**
 * Decrypts and returns the stored profile, or null if absent/tampered.
 */
export declare function loadProfile(): Promise<Record<string, any> | null>;
/**
 * Removes the stored profile.
 */
export declare function clearProfile(): void;
`,qp=`export declare class TokenStorage {
    static BearerAccessToken: string;
    static refreshToken: string;
    static sessionId: number;
    /** In-memory cache of the decrypted profile — populated by saveUserProfile or hydrateProfile */
    static profileCache: Record<string, any> | null;
    static setSession(sessionId: any): void;
    /**
     * Stores user profile securely (encrypted in sessionStorage)
     * and keeps the token in memory for API calls.
     * Also populates profileCache so getUserDetails() works synchronously.
     */
    static saveUserProfile(signinResponse: any): Promise<boolean>;
    static updateTokens(accessToken?: string, refreshToken?: string): Promise<void>;
    /**
     * Call once at app startup (e.g. in init()) to decrypt the stored profile
     * into memory so that getUserDetails() can read it synchronously.
     */
    static hydrateProfile(): Promise<void>;
    /**
     * Clears all stored credentials and profile data.
     */
    static logout(): void;
}
`,Hp=`export declare class SessionData {
    id: string;
    remote_address: string;
    server_port: string;
    server_address: string;
    server_name: string;
    server_software: string;
    http_user_agent: string;
    self: string;
    port: string;
    userId: string;
    email: string;
}
`,$p=`export declare class SettingData {
    id: number;
    isOnlineSync: boolean;
    constructor(isOnlineSync: boolean);
}
`,zp=`export declare class Settings {
    static isUpdated: boolean;
    static isOnlineSync: boolean;
}
`,Jp=`export interface SigninModel {
    email: string;
    password: string;
}
`,Qp=`export interface SignupModel {
    email: string;
    password: string;
}
`,Yp=`import { Concept } from "./Concept";
import { Connection } from "./Connection";
export declare class SyncData {
    static conceptsSyncArray: Concept[];
    static connectionSyncArray: Connection[];
    static CheckContains(concept: Concept): boolean;
    static SyncDataDelete(id: number): void;
    static CheckContainsConnection(connection: Connection): boolean;
    static AddConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static AddConnection(connection: Connection): void;
    static RemoveConnection(connection: Connection): void;
    static SyncDataOnline(): Promise<any>;
}
`,Xp=`export declare class TheCharacter {
    id: number;
    userId: number;
    data: string;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionId: number;
    sessionUserId: number;
    isNew: boolean;
    constructor(userId: number, data: string, securityId: number, securityUserId: number, accessId: number, accessUserId: number, sessionId: number, sessionUserId: number, entryTimestamp: string, isNew: boolean);
}
`,Kp=`export declare class TheTexts {
    id: number;
    userId: number;
    data: string;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionId: number;
    sessionUserId: number;
    entryTimestamp: string;
    isNew: boolean;
    constructor(userId: number, data: string, securityId: number, securityUserId: number, accessId: number, accessUserId: number, sessionId: number, sessionUserId: number, entryTimestamp: string, isNew: boolean);
}
`,Zp=`export type TLibrary = {
    order: number;
    url: string;
};
export type TMainLibrary = {
    css: TLibrary[];
    js: TLibrary[];
};
export type TAssistant = {
    id: string;
    input: string;
    type: string;
};
export type TCustomFunction = {
    id?: number;
    code: string;
    name: string;
    slug: string;
};
`,ef=`export declare class TypeNode {
    key: any;
    value: number[];
    leftNode: TypeNode | null;
    rightNode: TypeNode | null;
    currentNode: TypeNode | null;
    height: number;
    constructor(key: any, value: number);
    addType(node: TypeNode | null, key: number, value: number): TypeNode | null;
    rightRotate(y: TypeNode | null): TypeNode | null;
    leftRotate(x: TypeNode | null): TypeNode | null;
    getHeight(node: TypeNode | null): number;
    getBalanceFactor(N: TypeNode | null): number;
    getFromNode(id: number, node: TypeNode | null): TypeNode | null;
    removeNodeWithVariants(passedNode: TypeNode | null, key: any, conceptId: number): TypeNode | null;
    countNodeBelow(root: TypeNode | null): number;
    inOrderSuccessor(root: TypeNode): TypeNode;
}
`,tf=`import { Concept } from "../../DataStructures/Concept";
import { UserNode } from "./UserNode";
export declare class UserBinaryTree {
    static root: UserNode | null;
    static compositeKey(userId: number, sessionId: number): string;
    static addNodeToTree(node: UserNode): UserNode | undefined;
    static waitForDataToLoad(): Promise<unknown>;
    static checkFlag(resolve: any): any;
    static addConceptToTree(concept: Concept, userId: number, sessionId?: number): void;
    static getNodeFromTree(userId: number, sessionId: number): Promise<UserNode | null>;
    static removeNodeFromTree(userId: number, sessionId?: number): Promise<void>;
    static countNumberOfNodes(): number;
}
`,nf=`import { Concept } from "../Concept";
export declare class UserNode {
    key: any;
    value: Concept[];
    leftNode: UserNode | null;
    rightNode: UserNode | null;
    height: number;
    constructor(key: any, value: Concept, leftNode: UserNode | null, rightNode: UserNode | null);
    addNode(passedNode: UserNode, node: UserNode | null, height: number): UserNode | null;
    rightRotate(y: UserNode | null): UserNode | null;
    leftRotate(x: UserNode | null): UserNode | null;
    getHeight(node: UserNode | null): number;
    getBalanceFactor(N: UserNode | null): number;
    getFromNode(id: string, node: UserNode | null): UserNode | null;
    removeNode(passedNode: UserNode | null, id: string): UserNode | null;
    countNodeBelow(root: UserNode | null): number;
    inOrderSuccessor(root: UserNode): UserNode;
}
`,of=`import { WidgetDetails } from "./WidgetDetails";
import { WidgetNode } from "./WidgetNode";
export declare class WidgetCache {
    static root: WidgetNode | null;
    static addNodeToTree(node: WidgetNode): WidgetNode | undefined;
    static addWidgetToTree(widgetDetails: WidgetDetails): void;
    static getNodeFromTree(id: number): Promise<WidgetNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
    static countNumberOfNodes(): number;
}
`,rf=`export declare class WidgetDetails {
    widgetId: number;
    mainId: number;
    conceptIds: number[];
    linkers: number[];
    reverse: number[];
    mainCompositionIds: number[];
    countinfo: any;
}
`,sf=`import { WidgetDetails } from "./WidgetDetails";
export declare class WidgetNode {
    key: any;
    value: WidgetDetails;
    leftNode: WidgetNode | null;
    rightNode: WidgetNode | null;
    height: number;
    constructor(key: any, value: WidgetDetails, leftNode: WidgetNode | null, rightNode: WidgetNode | null);
    addNode(passedNode: WidgetNode, node: WidgetNode | null, height: number): WidgetNode | null;
    rightRotate(y: WidgetNode | null): WidgetNode | null;
    leftRotate(x: WidgetNode | null): WidgetNode | null;
    getHeight(node: WidgetNode | null): number;
    getBalanceFactor(N: WidgetNode | null): number;
    getFromNode(id: number, node: WidgetNode | null): WidgetNode | null;
    removeNode(passedNode: WidgetNode | null, id: number): WidgetNode | null;
    countNodeBelow(root: WidgetNode | null): number;
    inOrderSuccessor(root: WidgetNode): WidgetNode;
}
`,af=`/**
 * Static key-value store for runtime configuration values.
 *
 * Used throughout the package for feature flags and settings that need to be
 * readable anywhere without passing parameters down the call stack.
 *
 * **Built-in keys:**
 * - \`'enableCache'\` — controls widget and query caching (default \`true\`).
 *   Set via \`init()\` parameters or toggled at runtime. Checked on every
 *   cache read/write in \`QueryCacheManager\` and \`WidgetCacheManager\`.
 *
 * @example
 * // Disable cache at runtime
 * Environments.setValue('enableCache', false)
 *
 * @example
 * // Read with a default value (returned when key has never been set)
 * const cacheOn = Environments.getValue('enableCache', true)
 */
export declare class Environments {
    static environments: Record<string, any>;
    /**
     * Retrieves a stored value by key.
     *
     * @param key - The key to look up.
     * @param defaultValue - Value returned when the key has never been set. Defaults to \`null\`.
     * @returns The stored value, or \`defaultValue\` if the key is absent.
     *
     * @example
     * Environments.getValue('enableCache', true)   // true if never set
     * Environments.getValue('myFlag', false)        // false if never set
     */
    static getValue(key: string, defaultValue?: any): any;
    /**
     * Stores a value under the given key. Overwrites any existing value.
     * Takes effect immediately — the next call to \`getValue\` with the same key
     * returns the new value.
     *
     * @param key - The key to store under.
     * @param value - The value to store.
     * @returns The \`Environments\` class itself for chaining.
     *
     * @example
     * Environments.setValue('enableCache', false)
     * Environments.setValue('myFlag', true).setValue('otherFlag', 42)
     */
    static setValue(key: string, value: any): typeof Environments;
}
`,cf=`/** Names of the four object stores */
declare const STORE_WIDGET = "widgetCache";
declare const STORE_LATEST = "latestWidgetCache";
declare const STORE_RECENT = "recentWidgetCache";
declare const STORE_QUERY = "queryCache";
/**
 * Opens (or returns the already-opened) cache database.
 *
 * The database name includes the API base URL and application identifier so that
 * different environments/applications each get their own isolated cache store,
 * matching the naming convention used by the main database in indexeddb.ts.
 *
 * @returns Promise resolving to the IDBDatabase instance
 */
export declare function openCacheDatabase(): Promise<IDBDatabase>;
/**
 * Retrieves a single record from the specified store by key.
 *
 * @param storeName - The object store to read from
 * @param key - The key to look up (number for widget stores, string for queryCache)
 * @returns The stored value, or null if not found
 */
export declare function cacheGet(storeName: string, key: IDBValidKey): Promise<any | null>;
/**
 * Writes a record to the specified store (insert or update).
 *
 * For stores with in-line keys (widget stores), the key is read from the object's
 * "id" field. For the queryCache store (out-of-line keys), pass the key explicitly.
 *
 * @param storeName - The object store to write to
 * @param value - The value to store
 * @param key - Optional explicit key (required for queryCache which has no keyPath)
 */
export declare function cachePut(storeName: string, value: any, key?: IDBValidKey): Promise<void>;
/**
 * Deletes a single record from the specified store by key.
 *
 * @param storeName - The object store to delete from
 * @param key - The key of the record to delete
 */
export declare function cacheDelete(storeName: string, key: IDBValidKey): Promise<void>;
/**
 * Clears ALL records from the specified store.
 *
 * @param storeName - The object store to clear
 */
export declare function cacheClear(storeName: string): Promise<void>;
/**
 * Retrieves ALL records from the specified store.
 * Used during init() to load persisted cache data into memory.
 *
 * @param storeName - The object store to read from
 * @returns Array of all stored records
 */
export declare function cacheGetAll(storeName: string): Promise<any[]>;
/** Export store name constants so callers don't need magic strings */
export { STORE_WIDGET, STORE_LATEST, STORE_RECENT, STORE_QUERY };
`,lf=`import { Concept, Connection } from "../app";
/**
 * This class is a buffer class that is used to write to the indexdb. We cannot willy nilly write to indexdb because
 * it will cause the system to crash. We must also in future only allow certain types of concepts and connections
 * to be stored because a large indexdb is more problem than a blessing.
 */
export declare class IndexDbUpdate {
    static concepts: Concept[];
    static connections: Connection[];
    /**
    * This is the maximum number of concepts or connections that needs to be in the buffer before flusing them
    * to index db
    */
    static INDEX_DB_BUFFER_MAX: number;
    /**
     * This means that indexdb is in use.
     */
    static IN_USE: boolean;
    /**
     * This is a delay that you introduce between two updates to indexdb.
     */
    static DELAY_BETWEEN_INDEX_UPDATES: number;
    /**
     * This is a varaible that defines how many times a concept or connection should be used before putting
     * it to indexdb.
     */
    static MIN_USE_FOR_INDEX_DB: number;
    /**
     * This is a variable that defines that any concept / connection with count greater than this should not
     * be added to indexdb because probably this already is in the indexdb.
     */
    static MAX_USE_FOR_INDEX_DB: number;
    /**
     * This function holds the buffer to the indexdb. Only things that pass through here can be stored to the indexdb
     * This function holds the concepts in the buffer and puts them in indexdb once the INDEX_DB_BUFFER_MAX is exceeded.
     * @param concept Concept that needs to be passed on to the indexdb
     *
     */
    static UpdateConceptIndexDb(concept: Concept): Promise<void>;
    /**
    * This function holds the buffer to the indexdb. Only things that pass through here can be stored to the indexdb
    * This function holds the connections in the buffer and puts them in indexdb once the INDEX_DB_BUFFER_MAX is exceeded.
    * @param connection Connection that needs to be passed on to the indexdb
    *
    */
    static UpdateConnectionIndexDb(connection: Connection): Promise<void>;
}
`,df=`import { SettingData } from "../DataStructures/SettingData";
export declare function openDatabase(databaseName: string): IDBDatabase;
export declare function storeToDatabase(databaseName: string, object: any): void;
export declare function GetStatsFromDatabase(): SettingData;
export declare function AiUpdateFlag(object: SettingData): void;
export declare function getFromDatabaseWithType(databaseName: string, type: string, id: number): Promise<void>;
export declare function getObjectsFromIndexDb(databaseName: string): Promise<void>;
export declare function removeFromDatabase(databaseName: string, id: number): void;
export declare function getAllFromLocalDb(databaseName: string): Promise<void>;
`,uf=`/**
 * This class will help us store the indexdb  reference in memory and not go back to index db.
 */
export declare class LocalIndexDb {
    static db: IDBDatabase;
}
/**
 *
 * @param databaseName not required actually. This is not used you can pass anything.
 * @returns a promise that either resolves or rejects opening the database.
 */
export declare function openDatabase(databaseName: string): Promise<IDBDatabase>;
export declare function LockTheDatabase(databaseName: string): Promise<void>;
export declare function UnlockDatabase(databaseName: string): Promise<void>;
export declare function GetLockStatus(databaseName: string): Promise<any>;
/**
*  this function will return all the objects that are in the database
* @param databaseName name of the database
* @returns all the objects that are in the database
*/
export declare function getObjectsFromLocalIndexDb(databaseName: string): Promise<unknown>;
/**
 *
 * @param databaseName name of the database that you want to store data to.
 * @param object any object that can be stored but keep in mind it must follow the convention that we created
 * while creating the datbase.
 * @returns a promise that if a store is successful then the obejct is returned else rejects with the event.
 */
export declare function storeToDatabase(databaseName: string, object: any): Promise<unknown>;
/**
 *
 * @param databaseName name of the database
 * @param object this is the object that you want to update
 * @returns returns the object if it is updated successfully.
 */
export declare function UpdateToDatabase(databaseName: string, object: any): Promise<unknown>;
/**
 *
 * @param databaseName name of the database
 * @param id the id that we need to remove from the database (this is the index)
 * @returns an id if the deletion is successful and error with even in case it cannot.
 */
export declare function removeFromDatabase(databaseName: string, id: number): Promise<unknown>;
`,hf=`import { SettingData } from "../DataStructures/SettingData";
/**
 * This class will help us store the indexdb reference in memory and not go back to index db.
 */
export declare class IndexDb {
    static db: IDBDatabase;
}
/**
 * Opens the FreeSchema IndexedDB database (or returns the cached instance).
 *
 * - Returns the cached db reference immediately if already open.
 * - Deduplicates concurrent calls — only one indexedDB.open() runs at a time.
 * - On error, rejects without deleting the database to avoid data loss.
 *
 * @param databaseName kept for backward compatibility (not used in db name)
 * @returns a promise resolving to the IDBDatabase instance
 */
export declare function openDatabase(databaseName: string): Promise<IDBDatabase>;
/**
 *
 * @param databaseName name of the database that you want to store data to.
 * @param object any object that can be stored but keep in mind it must follow the convention that we created
 * while creating the datbase.
 * @returns a promise that if a store is successful then the obejct is returned else rejects with the event.
 */
export declare function storeToDatabase(databaseName: string, object: any): Promise<any>;
/**
  *
  * @param databaseName name of the database
  * @param object this is the object that you want to update
  * @returns returns the object if it is updated successfully.
  */
export declare function UpdateToDatabase(databaseName: string, object: any): Promise<unknown>;
/**
 *
 * @returns This returns the last object from the database.
 */
export declare function GetLastSettingsFromDatabase(): Promise<unknown>;
/**
 *
 * @param object SettingData
 * @returns this will update the indexdb with the ai flag so that another time we do not have to pull
 *  ai data from the api.
 */
export declare function AiUpdateFlag(object: SettingData): Promise<unknown>;
/**
 *  this function will return all the objects that are in the database
 * @param databaseName name of the database
 * @returns all the objects that are in the database
 */
export declare function getObjectsFromIndexDb(databaseName: string): Promise<unknown>;
/**
 *
 * @param databaseName name of the database
 * @param id the id that we need to remove from the database (this is the index)
 * @returns an id if the deletion is successful and error with even in case it cannot.
 */
export declare function removeFromDatabase(databaseName: string, id: number): Promise<unknown>;
`,pf=`import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function CheckIfConceptsExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept;
export declare function CheckIfTypeConceptsExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept[];
export declare function CheckIfTypeLConceptsExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept[];
export declare function CheckIfConnectionExistsInArray(connectionList: Connection[] | undefined, connection: Connection): Connection;
export declare function CheckIfToTheConceptExistsInConnectionArray(connectionList: Connection[] | undefined, conceptId: number): Connection;
export declare function CheckAllConnectionsConnectedInConnectionArray(connectionList: Connection[] | undefined, conceptId: number): Connection[];
export declare function CheckAllConnectionsConnectedInLConnectionArray(connectionList: Connection[] | undefined, conceptId: number): Connection[];
`,ff=`import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function RemoveConceptFromList(conceptList: Concept[] | undefined, concept: Concept): void;
export declare function RemoveConnectionFromList(connectionList: Connection[] | undefined, connection: Connection): void;
export declare function RemoveLConnectionFromList(connectionList: Connection[] | undefined, connection: Connection): void;
`,mf=`export default function InsertUniqueNumber(Array: number[], toInsert: number): number[];
`,yf=`export type TsccsAutocompleteEntry = {
    parameters: string[];
    documentation?: string;
};
export type TsccsAutocompleteMetadata = Record<string, Record<string, TsccsAutocompleteEntry>>;
export declare const tsccsAutocompleteMetadata: TsccsAutocompleteMetadata;
export declare function getTsccsAutocompleteMetadata(): TsccsAutocompleteMetadata;
`,gf=`export declare class ApplicationMonitor {
    private static globalErrorHandlersInitialized;
    private static consoleErrorPatched;
    private static errorEventListenerRegistered;
    private static unhandledErrorListenerRegistered;
    private static userInteractionListenersRegistered;
    private static networkRequestsPatched;
    private static performanceMetricsRegistered;
    private static routeChangeListenersRegistered;
    private static webSocketEventsPatched;
    private static initialLoadTimeout;
    static initialize(): void;
    static initGlobalErrorHandlers(): void;
    static logCatchError(): void;
    static logErrorEvent(): void;
    static logUnhandledError(): void;
    static logUserInteractions(): void;
    static logNetworkRequests(): void;
    static logPerformanceMetrics(): void;
    static logRouteChanges(): void;
    static logOnWindowLoad(): void;
    static logSample(): void;
    static logWebSocketEvents(): void;
    private static isBrowser;
}
`,vf=`export declare class Logger {
    private static isLoggerActive;
    private static lastCheck;
    private static checkInterval;
    private static logLevel;
    private static packageLogsData;
    private static applicationLogsData;
    private static readonly LOG_LEVELS;
    private static readonly SYNC_INTERVAL_MS;
    private static nextSyncTime;
    private static appLogs;
    private static mftsccsBrowser;
    static logApplicationActivationStatus: boolean;
    static logPackageActivationStatus: boolean;
    private static autoSyncInterval;
    /**
     * Automatically starts the auto-sync mechanism.
     * This is private and does not need external interaction.
     */
    static startAutoSync(): void;
    /**
     * Automatically stops the auto-sync mechanism when required.
     */
    static stopAutoSync(): void;
    /**
     * Set the log level (e.g., "DEBUG", "INFO", "WARNING", "ERROR").
     */
    static setLogLevel(level: string): void;
    /**
     * Determines whether the current log level permits the given level to be logged.
     */
    private static shouldLog;
    /**
     * Logs a message with optional additional structured data.
     */
    static formatLogData(level: string, message: string, data?: LogData): any;
    static log(level: 'INFO' | 'ERROR' | 'DEBUG' | 'WARNING', message: string, data?: any | null): void;
    /**
     * Updates log data with execution details.
     * @param logData The log data object to be updated.
    */
    static logUpdate(logData: LogData): {} | undefined;
    static logfunction(myFunction: string, ...args: any[]): any;
    static logError(startTime: number, userId: string | number, operationType?: "read" | "create" | "update" | "delete" | "search", requestFrom?: string, requestIP?: string, responseStatus?: number, responseData?: any, functionName?: string, functionParameters?: any[], userAgent?: string, conceptsUsed?: string[]): void;
    static logApplication(level: string, message: string, data?: any): void;
    static checkLoggerServerStatus(): Promise<void>;
    /**
     * Helper method to send logs to the server.
    */
    static sendApplicationLogsToServer(): Promise<void>;
    static sendPackageLogsToServer(): Promise<void>;
    /**
     * Helper method to save logs to localStorage.
    */
    private static saveLogToLocalStorage;
    private static clearLogsFromLocalStorage;
}
/**
 * Represents the structure of log data used for application monitoring and anomaly detection.
 */
export interface LogData {
    /**
     * The userId of the request
     */
    userId?: string | Number;
    /**
     * The type of operation performed (e.g., create, read, update, delete).
     * @example "create"
     */
    operationType?: 'create' | 'read' | 'update' | 'delete' | 'search';
    /**
     * The origin of the request (e.g., browser, API client).
     * @example "Browser"
     */
    requestFrom?: string;
    /**
     * The IP address of the client making the request.
     * @example "192.168.1.1"
     */
    requestIP?: string;
    /**
     * The HTTP status code of the request.
     * @example "200", "404", "500"
     */
    responseStatus?: string | Number;
    /**
     * The time taken to execute the function.
     * @example "150ms"
     */
    responseTime?: string;
    /**
     * The start and end time
     */
    startTime: number;
    endTime?: number;
    /**
     * The size of the response payload.
     * @example "15KB", "1.2MB"
     */
    responseSize?: string;
    /**
     * The Session Id
     */
    sessionId?: string | number;
    /**
     * The name of the function being logged.
     * @example "fetchUserData"
     */
    functionName?: string;
    applicationId?: number;
    /**
     * The error return
     * @example function could not execute
     */
    errorMessage?: string;
    /**
     * The parameters used in the function.
     * This should include all inputs to the function.
     * @example [ "userId", "concept" ]
     */
    functionParameters?: any[];
    /**
     * The user agent details for the request.
     * This includes information such as the browser or device making the request.
     * @example "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
     */
    userAgent?: string;
    /**
     * A list of concepts (features or modules) used during the function execution.
     * @example [105292435 , 105292431  ]
     */
    conceptsUsed?: string[];
    /**
     * Service worker
     * @example boolean
     */
    serviceWorker?: boolean;
}
/**getCookie
 *
 * @param cname The name of the cookie
 * @returns Cookie value
 */
export declare function getCookie(cname: string): string | null;
`,Cf=`import { Actions } from ".";
export declare const connectionActions: Actions;
`,bf=`import { Actions } from ".";
export declare const createActions: Actions;
`,If=`import { Actions } from ".";
export declare const deleteActions: Actions;
`,wf=`import { Actions } from ".";
export declare const getActions: Actions;
`,Tf=`import { InnerActions } from "../../app";
export { getActions } from '../actions/getActions';
export { searchActions } from '../actions/searchActions';
export { createActions } from '../actions/createActions';
export { updateActions } from '../actions/updateActions';
export { connectionActions } from '../actions/connectionActions';
export { deleteActions } from '../actions/deleteActions';
export { syncActions } from '../actions/syncActions';
export interface Actions {
    [key: string]: (payload: any) => Promise<{
        success: boolean;
        data?: any;
        actions?: InnerActions;
    }>;
}
`,kf=`import { Actions } from ".";
export declare const searchActions: Actions;
`,Af=`import { Actions } from ".";
export declare const syncActions: Actions;
`,_f=`import { Actions } from ".";
export declare const updateActions: Actions;
`,Sf=`/**
 * Method to handle message event in service worker
 * @param event any
 * @returns Promise<void>
 */
export declare function handleMessageEvent(event: any): Promise<void>;
/**
 * Method to check and inform main thread if sw is not initialized
 * @returns boolean
 */
export declare const checkSWInitialization: () => boolean;
`,xf=`/**
 * APIClientService
 *
 * API client service for Access Control endpoints.
 * Provides typed HTTP methods for all access control API operations.
 *
 * This is the TypeScript equivalent of the C# APIClientService class.
 */
import { AccessRequest, AccessResult, AccessControlAPIResponse, BulkAccessRequest, BulkCheckAccessRequest, AccessInheritanceRequest, SuperAdminRequest, BulkConceptAccessRequest, ConceptAccessRequest, ParentAccessInheritanceRequest, ParentAccessInheritanceWithConceptRequest, BulkParentAccessInheritanceWithConceptRequest, BulkParentAccessInheritanceResult, SuperAdminWithConceptRequest, AccessInheritanceWithConceptRequest } from '../../DataStructures/AccessControl/AccessControlModels';
export interface IAPIClientService {
    assignAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
    checkAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
    revokeAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
    assignAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    assignConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    revokeAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    revokeConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    checkAccessBulkAsync(request: BulkCheckAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    getAccessByIdAsync(accessId: number): Promise<AccessControlAPIResponse<AccessResult[]>>;
    setAccessInheritanceAsync(request: AccessInheritanceRequest): Promise<AccessControlAPIResponse>;
    getAccessInheritanceStatusAsync(accessId: number, connectionTypeId?: number): Promise<AccessControlAPIResponse>;
    assignSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse>;
    revokeSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse>;
    checkSuperAdminStatusAsync(accessId: number): Promise<AccessControlAPIResponse>;
    setParentAccessInheritanceAsync(request: ParentAccessInheritanceRequest): Promise<AccessControlAPIResponse>;
    removeParentAccessInheritanceAsync(accessId: number, parentAccessId?: number): Promise<AccessControlAPIResponse>;
    hasParentAccessInheritanceAsync(accessId: number, parentAccessId?: number): Promise<AccessControlAPIResponse>;
    getParentAccessIdAsync(accessId: number): Promise<AccessControlAPIResponse>;
    setParentAccessInheritanceByConceptAsync(request: ParentAccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse>;
    setParentAccessInheritanceBulkByConceptAsync(request: BulkParentAccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse<BulkParentAccessInheritanceResult[]>>;
    removeParentAccessInheritanceByConceptAsync(childConceptId: number, parentConceptId?: number): Promise<AccessControlAPIResponse>;
    removeParentAccessInheritanceBulkByConceptAsync(request: BulkParentAccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse<BulkParentAccessInheritanceResult[]>>;
    hasParentAccessInheritanceByConceptAsync(childConceptId: number, parentConceptId?: number): Promise<AccessControlAPIResponse>;
    getParentAccessIdByConceptAsync(childConceptId: number): Promise<AccessControlAPIResponse>;
    assignSuperAdminByConceptAsync(request: SuperAdminWithConceptRequest): Promise<AccessControlAPIResponse>;
    revokeSuperAdminByConceptAsync(request: SuperAdminWithConceptRequest): Promise<AccessControlAPIResponse>;
    checkSuperAdminByConceptAsync(conceptId: number): Promise<AccessControlAPIResponse>;
    setAccessInheritanceByConceptAsync(request: AccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse>;
    getAccessInheritanceStatusByConceptAsync(conceptId: number, connectionTypeId?: number): Promise<AccessControlAPIResponse>;
}
export declare class APIClientService implements IAPIClientService {
    private static get baseUrl();
    private static getAsync;
    private static postAsync;
    private static deleteAsync;
    /**
     * Assign access to an entity
     */
    assignAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
    /**
     * Check if an entity has access
     */
    checkAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
    /**
     * Revoke access from an entity
     */
    revokeAccessAsync(request: AccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
    /**
     * Assign access to multiple targets in bulk
     */
    assignAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    /**
     * Revoke access from multiple targets in bulk
     */
    revokeAccessBulkAsync(request: BulkAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    /**
     * Check access for multiple targets in bulk
     */
    checkAccessBulkAsync(request: BulkCheckAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    /**
     * Get all access entries for a specific accessId
     */
    getAccessByIdAsync(accessId: number): Promise<AccessControlAPIResponse<AccessResult[]>>;
    /**
     * Set access inheritance for an access ID
     */
    setAccessInheritanceAsync(request: AccessInheritanceRequest): Promise<AccessControlAPIResponse>;
    /**
     * Get access inheritance status
     */
    getAccessInheritanceStatusAsync(accessId: number, connectionTypeId?: number): Promise<AccessControlAPIResponse>;
    /**
     * Assign super admin access
     */
    assignSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse>;
    /**
     * Revoke super admin access
     */
    revokeSuperAdminAccessAsync(request: SuperAdminRequest): Promise<AccessControlAPIResponse>;
    /**
     * Check super admin status
     */
    checkSuperAdminStatusAsync(accessId: number): Promise<AccessControlAPIResponse>;
    /**
     * Create a new standalone access record for a concept
     */
    assignConceptAccessAsync(request: ConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult>>;
    /**
     * Create new standalone access records for multiple concepts in bulk
     */
    assignConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    /**
     * Revoke access records for multiple concepts in bulk
     */
    revokeConceptAccessBulkAsync(request: BulkConceptAccessRequest): Promise<AccessControlAPIResponse<AccessResult[]>>;
    /**
     * Set parent access inheritance link
     */
    setParentAccessInheritanceAsync(request: ParentAccessInheritanceRequest): Promise<AccessControlAPIResponse>;
    /**
     * Remove parent access inheritance link
     */
    removeParentAccessInheritanceAsync(accessId: number, parentAccessId?: number): Promise<AccessControlAPIResponse>;
    /**
     * Check if parent access inheritance link exists
     */
    hasParentAccessInheritanceAsync(accessId: number, parentAccessId?: number): Promise<AccessControlAPIResponse>;
    /**
     * Get the parent access ID for a given access ID
     */
    getParentAccessIdAsync(accessId: number): Promise<AccessControlAPIResponse>;
    /**
     * Set parent access inheritance by concept IDs (server resolves conceptId → accessId)
     */
    setParentAccessInheritanceByConceptAsync(request: ParentAccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse>;
    /**
     * Set parent access inheritance for multiple children with one parent (concept-based)
     */
    setParentAccessInheritanceBulkByConceptAsync(request: BulkParentAccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse<BulkParentAccessInheritanceResult[]>>;
    /**
     * Remove parent access inheritance by concept IDs
     */
    removeParentAccessInheritanceByConceptAsync(childConceptId: number, parentConceptId?: number): Promise<AccessControlAPIResponse>;
    /**
     * Remove parent access inheritance for multiple children (concept-based)
     */
    removeParentAccessInheritanceBulkByConceptAsync(request: BulkParentAccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse<BulkParentAccessInheritanceResult[]>>;
    /**
     * Check if parent access inheritance exists by concept IDs
     */
    hasParentAccessInheritanceByConceptAsync(childConceptId: number, parentConceptId?: number): Promise<AccessControlAPIResponse>;
    /**
     * Get the parent access ID by child concept ID
     */
    getParentAccessIdByConceptAsync(childConceptId: number): Promise<AccessControlAPIResponse>;
    /**
     * Assign super admin by concept ID
     */
    assignSuperAdminByConceptAsync(request: SuperAdminWithConceptRequest): Promise<AccessControlAPIResponse>;
    /**
     * Revoke super admin by concept ID
     */
    revokeSuperAdminByConceptAsync(request: SuperAdminWithConceptRequest): Promise<AccessControlAPIResponse>;
    /**
     * Check super admin status by concept ID
     */
    checkSuperAdminByConceptAsync(conceptId: number): Promise<AccessControlAPIResponse>;
    /**
     * Set access inheritance by concept ID
     */
    setAccessInheritanceByConceptAsync(request: AccessInheritanceWithConceptRequest): Promise<AccessControlAPIResponse>;
    /**
     * Get access inheritance status by concept ID
     */
    getAccessInheritanceStatusByConceptAsync(conceptId: number, connectionTypeId?: number): Promise<AccessControlAPIResponse>;
}
export default APIClientService;
`,Nf=`/**
 * AccessControlService
 *
 * This service provides access control functionality including:
 * - 5-phase bulk access check with BFS inheritance graph traversal
 * - Assign and revoke access permissions
 * - Bulk operations for access management
 * - Super admin checks
 * - Access inheritance management (including parent access inheritance)
 *
 * This is the TypeScript equivalent of the C# AccessControlService class (v3.4.0).
 */
import { AccessResult, BulkConceptAccessRequest, BulkParentAccessInheritanceResult } from '../../DataStructures/AccessControl/AccessControlModels';
import { IAPIClientService } from './APIClientService';
/**
 * Interface for the Access Control Service
 */
export interface IAccessControlService {
    checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
    checkAccessBulk(conceptIds: number[], permission: string, entityId?: number | null): Promise<Map<number, boolean>>;
    getConceptIdsWithPermission(permission: string, conceptIdsFilter: number[], entityId?: number | null): Promise<number[]>;
    assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]>;
    revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
    revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]>;
    setAccessInheritance(conceptId: number): Promise<boolean>;
    getAccessInheritanceStatus(conceptId: number, connectionTypeId?: number): Promise<boolean>;
    setAccessInheritanceStatus(conceptId: number, isEnabled: boolean, connectionTypeId?: number): Promise<boolean>;
    setParentAccessInheritance(conceptId: number, parentConceptId: number): Promise<number>;
    setParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId: number): Promise<BulkParentAccessInheritanceResult[]>;
    removeParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<string>;
    removeParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId?: number): Promise<BulkParentAccessInheritanceResult[]>;
    hasParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<boolean>;
    getParentAccessId(conceptId: number): Promise<number | null>;
    isSuperAdmin(entityId: number): Promise<boolean>;
    assignSuperAdmin(entityId: number): Promise<number>;
    revokeSuperAdmin(entityId: number): Promise<string>;
}
export declare class AccessControlService implements IAccessControlService {
    private readonly apiClient;
    constructor(apiClient?: IAPIClientService);
    /**
     * Check whether a user/entity has the specified permission on a single concept.
     * Delegates to checkAccessBulk for full inheritance + group resolution.
     */
    checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
    /**
     * 5-phase bulk access check algorithm.
     * Matches the C# AccessControlService.CheckAccessBulk implementation.
     *
     * Phase 1: Super-admin short-circuit
     * Phase 2: Fast-path classification (owner, public, type concepts)
     * Phase 3: BFS inheritance graph resolution (3 sources)
     * Phase 4: Bulk access decision resolution (API)
     * Phase 5: Grant-only merge per concept
     */
    checkAccessBulk(conceptIds: number[], permission: string, entityId?: number | null): Promise<Map<number, boolean>>;
    /**
     * Get all conceptIds which have a certain permission for an entity.
     * Delegates to checkAccessBulk for full inheritance support.
     */
    getConceptIdsWithPermission(permission: string, conceptIdsFilter: number[], entityId?: number | null): Promise<number[]>;
    /**
     * Resolve inheritance graph via 3-source BFS, depth-limited to MAX_BFS_DEPTH.
     *
     * Source 1: FreeSchema internal connections ("the_parent_access_inheritance")
     * Source 2: Explicit parent access links (via Access API)
     * Source 3: Concept-connection access inheritance
     */
    private resolveBulkInheritanceGraph;
    private resolveBulkDecisions;
    private resolveSubjects;
    private hasAnyGrant;
    assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]>;
    revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
    revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]>;
    setAccessInheritance(conceptId: number): Promise<boolean>;
    getAccessInheritanceStatus(conceptId: number, connectionTypeId?: number): Promise<boolean>;
    setAccessInheritanceStatus(conceptId: number, isEnabled: boolean, connectionTypeId?: number): Promise<boolean>;
    setParentAccessInheritance(conceptId: number, parentConceptId: number): Promise<number>;
    setParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId: number): Promise<BulkParentAccessInheritanceResult[]>;
    removeParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<string>;
    removeParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId?: number): Promise<BulkParentAccessInheritanceResult[]>;
    hasParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<boolean>;
    getParentAccessId(conceptId: number): Promise<number | null>;
    isSuperAdmin(entityId: number): Promise<boolean>;
    assignSuperAdmin(entityId: number): Promise<number>;
    revokeSuperAdmin(entityId: number): Promise<string>;
    makeConceptPrivate(conceptId: number): Promise<boolean>;
    private static parseBoolData;
    private static parseIntData;
    static isSuperAdmin(entityId: number): Promise<boolean>;
    static assignSuperAdmin(entityId: number): Promise<number>;
    static revokeSuperAdmin(entityId: number): Promise<string>;
    static checkAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
    static checkAccessBulk(conceptIds: number[], permission: string, entityId?: number | null): Promise<Map<number, boolean>>;
    static assignAccess(request: BulkConceptAccessRequest): Promise<AccessResult[]>;
    static revokeAccess(conceptId: number, permission: string, entityId?: number | null): Promise<boolean>;
    static revokeAccessBulk(request: BulkConceptAccessRequest): Promise<AccessResult[]>;
    static setParentAccessInheritance(conceptId: number, parentConceptId: number): Promise<number>;
    static setParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId: number): Promise<BulkParentAccessInheritanceResult[]>;
    static removeParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<string>;
    static removeParentAccessInheritanceBulk(childConceptIds: number[], parentConceptId?: number): Promise<BulkParentAccessInheritanceResult[]>;
    static hasParentAccessInheritance(conceptId: number, parentConceptId?: number): Promise<boolean>;
    static getParentAccessId(conceptId: number): Promise<number | null>;
}
/**
 * Get the default singleton instance of AccessControlService
 */
export declare function getAccessControlService(): AccessControlService;
/**
 * Initialize the default singleton instance with custom configuration
 */
export declare function initializeAccessControlService(apiClient?: IAPIClientService): AccessControlService;
export default AccessControlService;
`,Lf=`/**
 * Clears all application caches (both in-memory and IndexedDB).
 *
 * Call this on user logout or when you need to force-refresh all cached data.
 * Clears widget caches (standard, latest, recent) and query caches.
 */
export declare function clearAllCaches(): void;
`,Df=`import { Connection } from "../DataStructures/Connection";
export declare function CheckForConnectionDeletion(newConnections?: Connection[], oldConnections?: Connection[]): void;
export declare function CheckForConnectionDeletionWithIds(newConnectionIds?: number[], oldConnections?: Connection[]): void;
`,Pf=`import { CountInfo } from "../../DataStructures/Count/CountInfo";
export declare function DecodeCountInfo(countStrings?: string[]): CountInfo[];
export declare function GetConnectionTypeForCount(countInfos: CountInfo[]): Promise<any>;
`,Rf=`/**
 *
 * @param ms The time required to wait before executing this function
 * @param callback This is the function that needs to be executed
 * @returns returns a promise for the resolve
 */
export declare function DelayFunctionExecution(ms: number, callback: any): Promise<unknown>;
`,Bf=`export declare function HandleHttpError(response: Response): void;
export declare function HandleHttpErrorObject(response: Response, output?: any): void;
export declare function HandleInternalError(error: any, url?: string): void;
/**
 * Handle errors inside package functions
 * @updateLog existing function log at start
 * @param functionName name of the function that encountered the error
 * @param error error appeared
 */
export declare function UpdatePackageLogWithError(logData: any, functionName: string, error: any): void;
`,Ef=`/**
 *
 * @param array1 The array you want to merge into
 * @param array2 The array you want to merge
 * @returns array1 with the elements of array 2
 */
export declare function MergeTwoArrays(array1: any, array2: any): any;
`,Of=`export declare function removeThePrefix(inputString: string): string;
`,Ff=`export declare function removeAllChildren(parent: HTMLElement): void;
`,Uf=`import { Connection } from '../../DataStructures/Connection';
import { Concept } from '../../DataStructures/Concept';
export declare function recursiveFetchNew(id: number, connectionList: Connection[], conceptList: Concept[], compositionList: number[], visitedConcepts?: number[]): Promise<any>;
`,Gf=`import { Connection } from '../../DataStructures/Connection';
export declare function GetCompositionWithCache(id: number, connectionListPassed?: Connection[]): Promise<any>;
export declare function GetCompositionWithDataIdWithCache(id: number, connectionListPassed?: Connection[]): Promise<any>;
export declare function GetCompositionWithDataIdBulk(ids: number[], connections: number[]): Promise<any[]>;
`,Mf=`import { Concept } from '../../DataStructures/Concept';
import { Composition } from '../../DataStructures/Composition/Composition';
export declare function CreateTheCompositionWithCache(json: any, ofTheConceptId?: number | null, ofTheConceptUserId?: number | null, mainKey?: number | null, userId?: number | null, accessId?: number | null, sessionInformationId?: number | null, composition?: Composition | null): Promise<Concept>;
`,Wf=`import { Concept } from "../../app";
export declare function GetConceptByCharacterAndCategory(character: string): Promise<Concept>;
export declare function GetTypeConceptsByCharacterAndCategoryBulk(typeConcepts: string[]): Promise<Concept[]>;
export declare function GetConceptByCharacter(characterValue: string): Promise<Concept>;
export declare function GetConceptByCharacterAndCategoryFromMemory(character: string, category: number): Promise<Concept>;
`,jf=`import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";
export declare function convertFromConceptToLConcept(concept: Concept): Concept;
export declare function convertFromLConceptToConcept(lconcept: Concept): Concept;
export declare function convertFromConnectionToLConnection(connection: Connection): Connection;
`,Vf=`/**
 * This function builds up the binary tree on startup from the indexdb.
 * Processes records in chunks to avoid blocking the main thread.
 */
export default function CreateConceptBinaryTreeFromIndexDb(): Promise<void>;
`,qf=`import { Concept, InnerActions } from "../../app";
export declare function CreateConnectionBetweenEntityLocal(concept1Data: Concept, concept2Data: Concept, linker: string, actions?: InnerActions): Promise<any>;
`,Hf=`import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function CreateConnectionBetweenTwoConcepts(ofTheConcept: Concept, toTheConcept: Concept, linker: string, both?: boolean, count?: boolean): Promise<any>;
export declare function CountRelationship(linker: string, concept: Concept, passedUserId?: number | null): Promise<void>;
export declare function CreateConnectionBetweenTwoConceptsGeneral(ofTheConcept: Concept, toTheConcept: Concept, linker: string, both?: boolean, count?: boolean): Promise<Connection>;
`,$f=`import { Concept } from "../DataStructures/Concept";
export declare function CreateDefaultConcept(): Concept;
export declare function formatDate(date: Date): string;
`,zf=`export default function CreateTheComposition(json: any, ofTheConceptId?: number | null, ofTheConceptUserId?: number | null, mainKey?: number | null, userId?: number | null, accessId?: number | null, sessionInformationId?: number | null): Promise<any>;
`,Jf=`import { Concept } from "../DataStructures/Concept";
/**
 * Creates a new concept and adds it to the sync queue for backend synchronization.
 *
 * This is the primary function for creating concepts in the system. The concept is:
 * - Assigned a unique ID from the reserved ID pool
 * - Marked as non-temporary (persisted)
 * - Added to the SyncData queue for automatic backend synchronization
 * - Cached locally in IndexedDB for offline access
 *
 * @param {string} referent - The character value (text/name) of the concept. This is the human-readable
 *                           representation of the concept (e.g., "John Doe", "Project Alpha")
 * @param {number} userId - The ID of the user creating this concept. Used for ownership and access control.
 * @param {number} categoryId - The category classification ID. Used for further classification within a type
 *                             (e.g., for TYPE_PERSON: 1=Employee, 2=Contractor, 3=Customer)
 * @param {number} typeId - The type classification ID. Defines what kind of concept this is
 *                         (e.g., 1=Person, 2=Organization, 3=Document)
 * @param {number} referentId - Optional reference to another concept ID. Used for creating instances
 *                             that reference a type concept. Can be 0 or null if not applicable.
 * @param {number} accessId - Access control level for the concept. Determines who can view/edit
 *                           (e.g., 1=Public, 2=Private, 3=Shared, 4=Admin)
 * @param {string} typeCharacter - The string representation of the type name (e.g., "Person", "Document").
 *                                Used for display and filtering purposes.
 *
 * @returns {Promise<Concept>} A promise that resolves to the newly created Concept object with all properties set.
 *
 * @example
 * // Create a person concept
 * const person = await CreateTheConcept(
 *   "Alice Smith",  // name
 *   101,           // userId
 *   1,             // categoryId (Employee)
 *   1,             // typeId (Person)
 *   0,             // referentId (none)
 *   2,             // accessId (Private)
 *   "Person"       // typeCharacter
 * );
 * console.log(person.id); // 12345
 *
 * @see {@link CreateTheConceptTemporary} for creating non-persisted temporary concepts
 * @see {@link CreateTheConceptImmediate} for creating concepts with immediate backend sync
 */
export default function CreateTheConcept(referent: string, userId: number, categoryId: number, typeId: number, referentId: number, accessId: number, typeCharacter: string): Promise<Concept>;
/**
 * Creates a temporary concept that is NOT persisted to the database or synced to the backend.
 *
 * Use this function when you need a transient concept that exists only in memory during the
 * current session. Temporary concepts are useful for:
 * - UI state management
 * - Draft content before finalization
 * - Calculations or intermediate results
 * - Testing without affecting the database
 *
 * Temporary concepts are marked with \`isTemp = true\` and will not be saved when the application
 * closes or refreshes. They are NOT added to the SyncData queue.
 *
 * @param referent - The character value (text/name) of the concept
 * @param userId - The ID of the user creating this concept
 * @param categoryId - The category classification ID
 * @param typeId - The type classification ID
 * @param referentId - Optional reference to another concept ID
 * @param accessId - Access control level for the concept
 * @param typeCharacter - The string representation of the type name
 *
 * @returns Promise resolving to the temporary Concept object
 *
 * @example
 * // Create a temporary draft note
 * const draftNote = await CreateTheConceptTemporary(
 *   "Draft: Meeting Notes",
 *   101,
 *   1,
 *   3,  // Document type
 *   0,
 *   2,
 *   "Document"
 * );
 * console.log(draftNote.isTemp); // true
 *
 * @see {@link CreateTheConcept} for creating persistent concepts
 */
export declare function CreateTheConceptTemporary(referent: string, userId: number, categoryId: number, typeId: number, referentId: number, accessId: number, typeCharacter: string): Promise<Concept>;
/**
 * Creates a concept and immediately sends it to the backend API, bypassing the sync queue.
 *
 * This function is useful when you need guaranteed immediate synchronization to the backend,
 * such as for critical operations that must be persisted right away. Unlike the standard
 * CreateTheConcept, this function:
 * - Calls the backend API directly (CreateTheConceptApi)
 * - Does NOT use the SyncData queue (bypasses batch synchronization)
 * - Adds the concept to local ConceptsData immediately
 * - Marks the concept as NOT new (isNew = false)
 *
 * Use this for time-sensitive operations where you cannot wait for the next sync cycle.
 *
 * @param referent - The character value (text/name) of the concept
 * @param userId - The ID of the user creating this concept
 * @param categoryId - The category classification ID
 * @param typeId - The type classification ID
 * @param referentId - Optional reference to another concept ID (can be null)
 * @param accessId - Access control level for the concept
 * @param typeCharacter - The string representation of the type name
 *
 * @returns Promise resolving to the created Concept object
 *
 * @example
 * // Create a critical log entry that must be saved immediately
 * const logEntry = await CreateTheConceptImmediate(
 *   "Critical Error: System Failure",
 *   101,
 *   5,  // Log category
 *   7,  // Log type
 *   null,
 *   1,  // Public access
 *   "LogEntry"
 * );
 * // Concept is immediately sent to backend
 *
 * @see {@link CreateTheConcept} for standard queued creation
 * @see {@link CreateTheConceptApi} for the backend API call
 */
export declare function CreateTheConceptImmediate(referent: string, userId: number, categoryId: number, typeId: number, referentId: number | null, accessId: number, typeCharacter: string): Promise<Concept>;
`,Qf=`import { Connection } from "../DataStructures/Connection";
/**
 * Creates a connection (relationship) between two concepts and adds it to the sync queue.
 *
 * This is the primary function for establishing relationships in the knowledge graph.
 * Connections are directed edges that link two concepts together, representing relationships
 * like "works at", "belongs to", "authored by", etc.
 *
 * **Connection Structure:**
 * - FROM concept (ofTheConceptId) → TO concept (toTheConceptId)
 * - The relationship is directional
 * - Type ID classifies what kind of relationship it is
 * - Order ID allows sorting when multiple connections of the same type exist
 *
 * **Important Behaviors:**
 * - Connections are marked as temporary (isTemp = true) for internal compositions
 * - Added to SyncData queue for backend synchronization
 * - Assigned a random temporary ID until persisted
 * - Self-connections (same from/to) are prevented (returns invalid connection)
 * - Default access level is 4 (typically means "admin" or "restricted")
 *
 * @param ofTheConceptId - The source concept ID (start of the relationship).
 *                        This is where the connection originates FROM.
 * @param userId - The ID of the user creating this connection. Used for ownership and permissions.
 * @param toTheConceptId - The target concept ID (end of the relationship).
 *                        This is where the connection points TO.
 * @param typeId - The type classification for this connection. Defines the nature of the relationship.
 *                (e.g., 5="works_at", 6="manages", 7="member_of")
 *
 * @returns The created Connection object with all properties set, including a temporary ID
 *
 * @example
 * // Create a "works at" relationship
 * const connection = createTheConnection(
 *   aliceId,      // Alice (person)
 *   101,          // user creating this
 *   companyId,    // Tech Corp (organization)
 *   5             // "works at" connection type
 * );
 * // Result: Alice → works_at → Tech Corp
 *
 * @example
 * // Create a hierarchical relationship
 * const managerConnection = createTheConnection(
 *   managerId,    // Manager concept
 *   101,          // user
 *   employeeId,   // Employee concept
 *   6             // "manages" connection type
 * );
 * // Result: Manager → manages → Employee
 *
 * @example
 * // Attempting self-connection (will return invalid connection)
 * const selfConn = createTheConnection(123, 101, 123, 5);
 * console.log(selfConn.ofTheConceptId); // 0 (invalid)
 * console.log(selfConn.toTheConceptId); // 1 (invalid)
 *
 * @throws Errors are caught and logged via HandleInternalError but don't prevent return
 *
 * @see {@link CreateTheConnectionGeneral} for alternative connection creation
 * @see {@link CreateTheConnectionApi} for direct backend API connection creation
 */
export declare function createTheConnection(ofTheConceptId: number, userId: number, toTheConceptId: number, typeId: number): Connection;
`,Yf=`import { Connection } from "../DataStructures/Connection";
export declare function CreateTheConnectionGeneral(ofTheConceptId: number, ofTheConceptUserId: number, toTheConceptId: number, typeId: number, orderId?: number, accessId?: number): Promise<Connection>;
`,Xf=`export declare function DeleteConceptById(id: number): Promise<any>;
export declare function DeleteUser(id: number): Promise<any>;
`,Kf=`export declare function DeleteConnectionById(id: number): Promise<any>;
export declare function DeleteConnectionByIdBulk(ids: number[]): Promise<any>;
`,Zf=`/**
 *
 * @param id
 * @param linker
 * @returns
 */
export declare function DeleteConnectionByType(id: number, linker: string): Promise<any>;
export declare function DeleteConnectionByTypeBulk(id: number, linkers: string[]): Promise<any>;
/**
 * This function returns all the connections from the ofTheConceptId and connection type
 * @param id ofTheConceptId
 * @param linker the connection type
 * @returns Array of connections
 */
export declare function GetAllTheConnectionsByTypeAndOfTheConcept(id: number, linker: string, reverse?: boolean): Promise<any>;
/**
 *
 * @param id
 * @param linker
 * @returns
 */
export declare function DeleteConnectionsByTypeLocal(id: number, linkerStrings: string[]): Promise<any>;
`,em=`import { Connection } from "../DataStructures/Connection";
/**
 * This function takes in a list of connections and in bulk gets the concepts that are related with these connections.
 * @param connectionList list of connections whose concepts need to be found out.
 */
export declare function FindConceptsFromConnections(connectionList?: Connection[]): Promise<void>;
`,tm=`export declare function FindConnectionsOfCompositionsBulkInMemory(composition_ids?: number[]): Promise<any>;
`,nm=`import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function GetCompositionById(id: number): Promise<{
    connectionList: Connection[];
    compositionList: number[];
}>;
/**
 * ## format JUSTDATA ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
export declare function RecursiveFetchBuildLayer(id: number, connectionList: Connection[], compositionList: number[]): Promise<any>;
/**
 * ## format DATAID ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
export declare function RecursiveFetchBuildLayerDataId(id: number, connectionList: Connection[], compositionList: number[]): Promise<any>;
/**
 * ## format Normal ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
export declare function RecursiveFetchBuildLayerNormal(id: number, connectionList: Connection[], compositionList: number[]): Promise<any>;
/**
 * Retrieves a complete composition structure for a given concept ID in JUSTDATA format.
 *
 * This is a primary composition retrieval function that builds a hierarchical structure
 * containing the main concept, all its connections, and recursively fetched related concepts.
 * The result is formatted as a nested object organized by concept types.
 *
 * **What is a Composition?**
 * A composition represents a concept along with its connected relationships and sub-structures.
 * Think of it as getting a "full profile" of a concept including everything connected to it.
 *
 * **Process:**
 * 1. Fetches all connections associated with the concept
 * 2. Identifies all related concept IDs from those connections
 * 3. Recursively builds the composition tree
 * 4. Fetches the main concept details
 * 5. Organizes output by concept type (e.g., result["Person"] = {...})
 * 6. Routes through service worker if enabled for better performance
 *
 * **Output Format (JUSTDATA):**
 * Returns an object keyed by the main concept's type character value:
 * \`\`\`
 * {
 *   "Person": {
 *     id: 123,
 *     characterValue: "Alice",
 *     connections: [...],
 *     relatedConcepts: {...}
 *   }
 * }
 * \`\`\`
 *
 * @param id - The unique identifier of the concept for which to build the composition.
 *            This becomes the root of the composition tree.
 *
 * @returns Promise resolving to an object containing the composition data organized by
 *         the main concept's type. Returns empty object if concept not found or on error.
 *
 * @example
 * // Get composition for a person concept
 * const composition = await GetComposition(12345);
 * console.log(composition["Person"]);
 * // {
 * //   id: 12345,
 * //   characterValue: "Alice Smith",
 * //   connections: [... all connections],
 * //   Company: { ... related company data },
 * //   Projects: { ... related projects }
 * // }
 *
 * @example
 * // Get composition for an organization
 * const orgComposition = await GetComposition(456);
 * console.log(orgComposition["Organization"]);
 * // Contains the organization and all connected employees, departments, etc.
 *
 * @example
 * // Use with service worker (automatic if enabled)
 * // Service worker handles the heavy lifting in background
 * const result = await GetComposition(789);
 *
 * @see {@link GetCompositionWithId} for composition with ID and timestamp (DATAID format)
 * @see {@link GetCompositionBulk} for fetching multiple compositions efficiently
 * @see {@link GetCompositionWithCache} for cached composition retrieval
 * @see {@link recursiveFetch} for the recursive building logic
 */
export declare function GetComposition(id: number): Promise<any>;
export declare function GetCompositionWithAllIds(id: number): Promise<any>;
/**
 * ### Format JUSTDATA ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns
 */
export declare function GetCompositionFromMemory(id: number): Promise<any>;
/**
 * ### Format Normal ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns
 */
export declare function GetCompositionFromMemoryNormal(id: number): Promise<any>;
/**
 * ### Format DATAIDDATE ####
 * Gets data just from memory
 * @param id
 * @returns
 */
export declare function GetCompositionWithIdFromMemory(id: number): Promise<any>;
/**
 * ### Format Normal ####
 * Gets data just from memory
 * @param id
 * @returns
 */
export declare function GetCompositionFromMemoryWithConnections(id: number, connectionList: Connection[]): Promise<any>;
/**
 * ### Format DATAIDDATE ####
 * Gets data just from memory
 * @param id
 * @returns
 */
export declare function GetCompositionWithIdFromMemoryFromConnection(id: number, connectionList: Connection[]): Promise<any>;
/**
 * ### Format DATAIDDATE ####
 * ### experimental ####
 * This is the new format that needs to work with a single or max two loops
 * @param id the id whose composition needs to be created
 * @returns
 */
export declare function GetCompositionWithIdFromMemoryNew(id: number): Promise<any>;
/**
 * ### Format DATAIDDATE #####
 * ### This just returns composition from memory and not from anywhere else.
 * @param id
 * @returns
 */
export declare function GetCompositionWithIdAndDateFromMemory(id: number): Promise<any>;
export declare function GetCompositionWithIdFromMemoryFromConnections(id: number, connectionList?: Connection[]): Promise<any>;
/**
 * #### Format DATAID ####
 * ## This will return the composition even if it is not in the local memory ##
 * @param id
 * @returns
 */
export declare function GetCompositionWithId(id: number): Promise<any>;
/**
 * ## Format justdata ###
 * ## This contains a concept in the parameter so that you dont have to again find the concept ##
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns
 */
export declare function recursiveFetchConcept(concept: Concept, connectionList: Connection[], compositionList: number[], visitedConcepts?: number[]): Promise<any>;
/**
* ## Format Normal ###
* ## This contains a concept in the parameter so that you dont have to again find the concept ##
* This function takes concepts and connections and then builds a json.
* @param concept The concept that needs to get other concepts that are inside of it.
* @param connectionList List of connections that are available in the composition. We have to loop over it.
* @param compositionList Composition list is the list of concepts that have connections inside of them.
* @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
* @returns
*/
export declare function recursiveFetchConceptNormal(concept: Concept, connectionList: Connection[], compositionList: number[], visitedConcepts?: number[]): Promise<any>;
/**
 * ## experimental ##
* This function takes concepts and connections and then builds a json.
* @param concept The concept that needs to get other concepts that are inside of it.
* @param connectionList List of connections that are available in the composition. We have to loop over it.
* @param compositionList Composition list is the list of concepts that have connections inside of them.
* @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
* @returns
*/
export declare function recursiveFetchConceptSingleLoop(concept: Concept, connectionList: Connection[], compositionList: number[], visitedConcepts?: number[]): Promise<any>;
/**
 * ## Format justdata ##
 * @param id
 * @param connectionList
 * @param compositionList
 * @param visitedConcepts
 * @returns
 */
export declare function recursiveFetch(id: number, connectionList: Connection[], compositionList: number[], visitedConcepts?: number[]): Promise<any>;
export declare function recursiveFetchWithSubCompositions(id: number, connectionList: Connection[], compositionList: number[], visitedConcepts?: number[]): Promise<any>;
`,om=`import { Connection } from "../DataStructures/Connection";
/**
 * ## Format JUSTDATA ##
 * Function converts the conceptIds to json (compositions)
 * This function takes in the conceptIds and returns a list of compositions related to those concepts.
 * @param conceptIds  list of concept ids that are compositions.
 * @returns compositions
 */
export declare function GetCompositionBulk(conceptIds?: number[]): Promise<any[]>;
/**
 * ## FORMAT DATAIDDATE ##
 * Function converts the conceptIds to json (compositions)
 * @param conceptIds this is the list of concept ids that should be converted to compostions in data - id format.
 * @returns list of compositions in the data - id format.
 */
export declare function GetCompositionBulkWithDataId(conceptIds?: number[]): Promise<any[]>;
/**
 * ## FORMAT DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
export declare function GetCompositionFromConnectionsWithDataId(conceptIds?: number[], connectionIds?: number[]): Promise<any>;
/**
 * ## FORMAT DATAIDDATE ##
 * This is just a different version of GetCompositionFromConnectionsWithDataId, This has the added functionality that
 * it also prints out internal connections.
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
export declare function GetCompositionFromConnectionsWithDataIdFromConnections(conceptIds?: number[], connectionIds?: number[]): Promise<any>;
/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
export declare function GetCompositionFromConnectionsWithDataIdIndex(conceptIds?: number[], connectionIds?: number[]): Promise<any>;
/**
 * ## Format is dictionary with key as concept id and value as data (json) ##
 * This function converts the conceptIds and internal connectionIds to compositions format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
export declare function GetCompositionFromConnectionsWithIndex(conceptIds?: number[], connectionIds?: number[]): Promise<any>;
/**
 * ## FORMAT DATAIDDATE ##
 * This is just a different version of GetCompositionFromConnectionsWithDataId, This has the added functionality that
 * it also prints out internal connections.
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
export declare function GetCompositionFromConnectionsWithIndexFromConnections(conceptIds?: number[], connectionIds?: number[]): Promise<any>;
/**
 * Used to prefetch all the connections and their related concepts.
 * @param connectionIds these are the connection ids that are used to fetch all the connections and also their related concepts.
 * @returns all the connections that are passed as ids.
 */
export declare function GetConnectionDataPrefetch(connectionIds: number[]): Promise<Connection[]>;
/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connections to create compositions.
 * Format is of a dictionary with ids as the key and value is the composition data.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export declare function GetCompositionFromConnectionsWithDataIdInObject(conceptIds?: number[], connections?: number[]): Promise<any>;
/**
 * ## Format DATAIDDATE ##
 * ## duplicate ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export declare function GetCompositionFromConnectionsWithDataIdInObjectNew(conceptIds?: number[], connections?: number[]): Promise<any>;
/**
 * ## Format justdata ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export declare function GetCompositionFromConnectionsInObject(conceptIds?: number[], connections?: number[]): Promise<any>;
/**
 * ## Format Normal ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
export declare function GetCompositionFromConnectionsInObjectNormal(conceptIds?: number[], connections?: number[]): Promise<any>;
`,im=`import { Concept } from "../app";
export declare function GetCompositionList(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function GetCompositionListAll(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any[]>;
export declare function GetCompositionListAllWithId(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function GetCompositionListWithId(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function GetCompositionListWithIdUpdated(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function FormatTheConcepts(conceptList: Concept[], localConceptList: Concept[], inpage?: number, page?: number): Promise<any[]>;
`,rm=`export default function GetConceptByCharacter(characterValue: string): Promise<any>;
export declare function GetConceptByCharacterUpdated(characterValue: string): Promise<any>;
`,sm=`import { Concept } from "../app";
/**
 * This function will give you all the connections between two concepts by their linker or fullLinker
 * @param ofTheConcept start of the connecction
 * @param toTheConcept end of the connection
 * @param linker the primitive linkers with type connection (16) these are the old type of linkers (if you want full linker then put this as empty string)
 * @param fullLinker fullLinker is the modern linker (if you want linker then put this as empty string)
 * @param forward if you want to get the forward relation in the primitive linker put true else for backward linker false.
 * @returns list of connections
 */
export declare function GetConnectionBetweenTwoConceptsLinker(ofTheConcept: Concept, toTheConcept: Concept, linker: string, fullLinker: string, forward?: boolean): Promise<any>;
`,am=`export declare function GetConnectionById(id: number): Promise<any>;
`,cm=`export declare function GetConnectionsFromIndexDb(): Promise<void>;
export declare function GetConnectionsFromIndexDbLocal(): Promise<void>;
`,lm=`import { Concept } from "./../DataStructures/Concept";
export declare function GetLink(id: number, linker: string, inpage?: number, page?: number): Promise<any>;
export declare function GetLinkRaw(id: number, linker: string, inpage?: number, page?: number): Promise<Concept[]>;
`,dm=`import { Connection } from "../DataStructures/Connection";
export declare function GetLinkerConnectionFromConcepts(id: number): Promise<Connection[]>;
export declare function GetLinkerConnectionToConcepts(id: number): Promise<Connection[]>;
`,um=`export declare function GetRelation(id: number, relation: string, inpage?: number, page?: number, reverse?: boolean): Promise<any>;
export declare function GetRelationNew(id: number, relation: string, inpage?: number, page?: number, reverse?: boolean): Promise<void>;
export declare function GetRelationRaw(id: number, relation: string, inpage?: number, page?: number, reverse?: boolean): Promise<any>;
`,hm=`import { Concept } from "../DataStructures/Concept";
/**
 * Retrieves a concept by its ID with intelligent caching and multi-source lookup.
 *
 * This is the primary function for fetching concepts in the system. It implements a sophisticated
 * multi-level retrieval strategy:
 *
 * **Retrieval Strategy:**
 * 1. Checks in-memory promise cache to prevent duplicate requests
 * 2. For negative IDs: Fetches from local IndexedDB (LocalConceptsData)
 * 3. For positive IDs: Checks local ConceptsData cache first
 * 4. If not in cache: Fetches from backend API
 * 5. Automatically resolves and attaches the concept's type information
 * 6. Routes through service worker if enabled for better performance
 *
 * **Features:**
 * - Promise caching prevents duplicate concurrent requests for the same concept
 * - Automatic type resolution (fetches and attaches type concept)
 * - Access tracking integration (increments access counter if enabled)
 * - Service worker support for background processing
 * - Error logging and performance monitoring
 * - Supports both server concepts (positive IDs) and local concepts (negative IDs)
 *
 * @param id - The unique identifier of the concept to retrieve.
 *            Positive IDs = server concepts, Negative IDs = local-only concepts
 * @param userId - The ID of the user requesting the concept. Used for access tracking
 *                and audit logging. Defaults to 999 (system/anonymous user)
 *
 * @returns Promise resolving to the Concept object if found, or a default empty Concept if not found
 *
 * @example
 * // Get a server concept
 * const concept = await GetTheConcept(12345, 101);
 * console.log(concept.characterValue); // "Alice Smith"
 * console.log(concept.type?.characterValue); // "Person" (auto-resolved)
 *
 * @example
 * // Get a local concept (negative ID)
 * const localConcept = await GetTheConcept(-5, 101);
 * console.log(localConcept.characterValue); // "Local Draft"
 *
 * @example
 * // Multiple concurrent calls use the same promise (efficient)
 * const [c1, c2, c3] = await Promise.all([
 *   GetTheConcept(123),
 *   GetTheConcept(123),  // Same ID - uses cached promise
 *   GetTheConcept(123)   // Same ID - uses cached promise
 * ]);
 * // Only one actual fetch is performed
 *
 * @throws Will log errors but returns a default empty concept instead of throwing
 *
 * @see {@link CreateTheConcept} for creating new concepts
 * @see {@link GetConceptBulk} for fetching multiple concepts efficiently
 * @see {@link AddTypeConcept} for manually adding type information to a concept
 */
export default function GetTheConcept(id: number, userId?: number): Promise<Concept>;
/**
 * Fetches and attaches type information to a concept if not already present.
 *
 * This utility function ensures that a concept has its type information loaded and attached.
 * Every concept has a \`typeId\` that references another concept representing its type
 * (e.g., a person concept might have typeId=1 which points to a "Person" type concept).
 *
 * **Process:**
 * 1. Checks if concept.type is already set (if yes, does nothing)
 * 2. Attempts to fetch type concept from local cache (ConceptsData)
 * 3. If not in cache and typeId is valid: fetches from backend API
 * 4. Attaches the type concept to concept.type property
 * 5. Routes through service worker if enabled
 *
 * **Type Concept:**
 * A type concept is a special concept that represents a classification or category.
 * For example: "Person", "Document", "Organization" are type concepts.
 *
 * @param concept - The concept object to which type information should be added.
 *                 The concept must have a valid \`typeId\` property.
 *
 * @returns Promise that resolves when type information has been attached (or confirmed present)
 *
 * @example
 * const concept = await GetTheConcept(12345);
 * console.log(concept.type); // might be null
 *
 * await AddTypeConcept(concept);
 * console.log(concept.type?.characterValue); // "Person"
 *
 * @example
 * // Ensure multiple concepts have their types loaded
 * const concepts = await GetConceptBulk([1, 2, 3, 4, 5]);
 * await Promise.all(concepts.map(c => AddTypeConcept(c)));
 * // All concepts now have their type information
 *
 * @see {@link GetTheConcept} which automatically calls this function
 */
export declare function AddTypeConcept(concept: Concept): Promise<Concept | undefined>;
`,pm=`export default function InitializeSystem(enableAi?: boolean): Promise<boolean>;
export declare function PurgatoryDatabaseUpdated(): Promise<void>;
`,fm=`import { Concept } from "../../DataStructures/Concept";
/**
 * Converts a local concept (LConcept) to a standard Concept format.
 *
 * This function is part of the local/server concept conversion system. Currently, it
 * performs a passthrough as LConcept and Concept share the same structure. This function
 * exists for:
 * - API consistency and symmetry with convertFromConceptToLConcept
 * - Future extensibility if conversion logic is needed
 * - Type clarity in code (explicit conversion intent)
 *
 * **LConcept vs Concept:**
 * - LConcept: Local-only concepts stored in IndexedDB (negative IDs)
 * - Concept: Server-synced concepts (positive IDs)
 * - Both use the same Concept class structure
 *
 * **When to Use:**
 * - Preparing local concepts for backend sync
 * - Converting local concepts to server format
 * - Type-safe conversion in TypeScript
 * - Maintaining code clarity and intent
 *
 * @param lconcept - The local concept to convert
 *
 * @returns The concept in standard Concept format (currently identical to input)
 *
 * @example
 * // Convert local concept before syncing
 * const localConcept = await CreateTheConceptLocal('Draft', 'the_note', 101, 1, 3, 2);
 * const serverConcept = ConvertFromLConceptToConcept(localConcept);
 * // Now ready for backend sync
 *
 * @example
 * // Type-safe conversion
 * const lconcepts = await GetAllLocalConcepts();
 * const concepts = lconcepts.map(lc => ConvertFromLConceptToConcept(lc));
 *
 * @see {@link convertFromConceptToLConcept} for the reverse conversion
 * @see {@link CreateTheConceptLocal} for creating local concepts
 */
export declare function ConvertFromLConceptToConcept(lconcept: Concept): Concept;
`,mm=`import { Connection } from "../../DataStructures/Connection";
/**
 * Converts a local connection (LConnection) to a standard Connection format.
 *
 * This function extracts the essential properties from a local connection and creates
 * a new Connection object. It's part of the local/server conversion system used when
 * preparing local connections for backend sync.
 *
 * **Properties Transferred:**
 * - id: Connection identifier
 * - ofTheConceptId: Source concept ID
 * - toTheConceptId: Target concept ID
 * - typeId: Connection type ID
 * - orderId: Order for sorting connections
 *
 * **LConnection vs Connection:**
 * - LConnection: Local-only connections stored in IndexedDB (negative IDs)
 * - Connection: Server-synced connections (positive IDs)
 * - Both use the same Connection class structure
 *
 * **Use Cases:**
 * - Preparing local connections for backend sync
 * - Converting local data to server format
 * - Data export and serialization
 * - Maintaining consistency across local and server data
 *
 * @param lconnection - The local connection to convert
 *
 * @returns A new Connection object with properties copied from the local connection
 *
 * @example
 * // Convert local connection before syncing
 * const localConn = await CreateTheConnectionLocal(fromId, toId, typeId, 1);
 * const serverConn = ConvertFromLConnectionToConnection(localConn);
 * // Now ready for backend sync
 *
 * @example
 * // Batch conversion
 * const localConnections = await GetAllLocalConnections();
 * const serverConnections = localConnections.map(lc =>
 *   ConvertFromLConnectionToConnection(lc)
 * );
 *
 * @see {@link CreateTheConnectionLocal} for creating local connections
 * @see {@link ConvertFromLConceptToConcept} for concept conversion
 */
export declare function ConvertFromLConnectionToConnection(lconnection: Connection): Connection;
`,ym=`import { Concept } from "../../app";
import { InnerActions } from "../../Constants/general.const";
/**
 * Creates a named connection between two concepts with optional bidirectional linking.
 *
 * **Complex Naming Logic**:
 * - Forward connection type: "{ofType}_s_{linker}_s" (e.g., "person_s_knows_s")
 * - Backward connection type: "{toType}_s_{linker}_by" (e.g., "person_s_knows_by")
 * - Uses type.characterValue from concepts to build meaningful connection names
 *
 * **Bidirectional Mode (both=true)**:
 * - Creates two connections: A→B and B→A
 * - Forward: ofTheConcept → toTheConcept with "{ofType}_s_{linker}_s"
 * - Backward: toTheConcept → ofTheConcept with "{toType}_s_{linker}_by"
 *
 * @param ofTheConcept - Source concept (connection starts here)
 * @param toTheConcept - Target concept (connection points here)
 * @param linker - Relationship name (e.g., "knows", "works_at", "has")
 * @param both - If true, creates bidirectional connection (both A→B and B→A)
 * @param actions - Action tracking for batch operations
 * @returns The forward connection object
 * @throws Error if connection creation fails
 *
 * @example
 * // Create unidirectional "Alice knows Bob"
 * const conn = await CreateConnectionBetweenTwoConceptsLocal(
 *   aliceConcept,
 *   bobConcept,
 *   "knows",
 *   false
 * );
 * // Creates: person_s_knows_s connection from Alice to Bob
 *
 * @example
 * // Create bidirectional "Alice friends Bob" (both directions)
 * await CreateConnectionBetweenTwoConceptsLocal(
 *   aliceConcept,
 *   bobConcept,
 *   "friends",
 *   true
 * );
 * // Creates: person_s_friends_s (Alice→Bob) AND person_s_friends_by (Bob→Alice)
 */
export declare function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: Concept, toTheConcept: Concept, linker: string, both?: boolean, actions?: InnerActions): Promise<any>;
`,gm=`import { Concept } from "../../DataStructures/Concept";
/**
 * Creates a default empty local concept with all properties set to zero/default values.
 *
 * This utility function generates a blank Concept object that can be used as a placeholder
 * or default return value when a concept is not found. All IDs and values are set to 0
 * or empty defaults.
 *
 * **Default Values:**
 * - id: 0 (indicates empty/not found)
 * - userId: 0
 * - typeId: 0
 * - categoryId: 0
 * - referentId: 0
 * - characterValue: "0"
 * - accessId: 0
 * - isNew: false
 * - entryTimeStamp: current date
 * - updatedTimeStamp: current date
 * - typeCharacter: "0"
 *
 * **Use Cases:**
 * - Default return value when concept not found
 * - Placeholder for conditional logic
 * - Initial state before loading data
 * - Template for creating new concepts
 *
 * @returns A Concept object with all properties set to default/zero values
 *
 * @example
 * // Use as default return
 * let concept = await GetTheConceptLocal(id);
 * if (concept.id === 0) {
 *   concept = CreateDefaultLConcept();
 * }
 *
 * @example
 * // Check if concept is valid
 * const concept = CreateDefaultLConcept();
 * console.log(concept.id); // 0
 * console.log(concept.characterValue); // "0"
 *
 * @see {@link CreateTheConceptLocal} for creating actual local concepts
 * @see {@link GetTheConceptLocal} for retrieving local concepts
 */
export declare function CreateDefaultLConcept(): Concept;
`,vm=`/**
 * Loads local concepts from IndexedDB into memory-based binary tree for fast lookup.
 *
 * Retrieves all stored local concepts from IndexedDB and adds them to LocalConceptsData
 * in-memory structure. Sets flags indicating local data is ready for use.
 *
 * @throws Error if IndexedDB read fails (retries after 2s delay)
 */
export default function CreateLocalBinaryTreeFromIndexDb(): Promise<void>;
/**
 * We have designed our system to use local concepts and connections with its own local ids(negative ids) that
 * is only valid for the browser that creates this. We have a translator in our node server.
 * We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory
 * then we use these ids from memory and update the indexdb with the latest id frequently.
 * This function does this process in initlization from indexdb to memory.
 *
 * Here we have locked this function so that other processes cannot access this process in the case that this process is ongoing
 *
 *
 */
export declare function PopulateTheLocalConceptsToMemory(): Promise<void>;
/**
* We have designed our system to use local concepts and connections with its own local ids(negative ids) that
* is only valid for the browser that creates this. We have a translator in our node server.
* We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory
* then we use these ids from memory and update the indexdb with the latest id frequently.
* This function does this process in initlization from indexdb to memory.
*
* This function locked so that no two parallel process can access this functionality at the same time.
* That might cause some ids to be repeated.
*
*
*/
export declare function PopulateTheLocalConnectionToMemory(): Promise<void>;
`,Cm=`import { InnerActions } from "../../app";
/**
 * Converts a JSON object into a local composition structure with concepts and connections.
 *
 * This powerful function recursively transforms any JSON object into the concept-connection
 * system, creating local concepts for each key-value pair and establishing connections
 * between them to preserve the hierarchical structure.
 *
 * **JSON to Composition Conversion:**
 * - JSON keys become type concepts (e.g., "name", "email")
 * - JSON string/number values become instance concepts
 * - Nested objects/arrays create sub-compositions
 * - Connections preserve parent-child relationships
 * - All data stored locally (IndexedDB) for offline use
 *
 * **Recursive Process:**
 * 1. Iterates through each key in JSON object
 * 2. For nested objects/arrays: Creates composition concept + recurse
 * 3. For primitive values: Creates instance concept
 * 4. Creates connections from parent to child concepts
 * 5. Returns the main/root concept
 *
 * **Example Transformation:**
 * \`\`\`javascript
 * Input JSON:
 * {
 *   name: "Alice",
 *   email: "alice@example.com",
 *   address: {
 *     city: "NYC",
 *     zip: "10001"
 *   }
 * }
 *
 * Creates:
 * - Concept: "name" (type) → "Alice" (instance)
 * - Concept: "email" (type) → "alice@example.com" (instance)
 * - Concept: "address" (composition concept)
 *   - Concept: "city" → "NYC"
 *   - Concept: "zip" → "10001"
 * - Connections linking all concepts in hierarchy
 * \`\`\`
 *
 * @param json - The JSON object/array to convert to composition structure.
 *              Can be any depth of nesting.
 * @param ofTheConceptId - Parent concept ID if this is a sub-composition.
 *                        Null for root composition. Used for connecting to parent.
 * @param ofTheConceptUserId - User ID of the parent concept.
 *                            Used for ownership tracking in nested structures.
 * @param mainKey - The main composition ID (root concept ID).
 *               Used as typeId for internal connections. Null for root.
 * @param userId - User ID of the creator. Defaults to 999 (system).
 * @param accessId - Access control level. Defaults to 999 (system).
 * @param sessionInformationId - Session ID. Defaults to 999 (system).
 * @param automaticSync - Reserved for future automatic sync feature.
 *                       Currently not fully implemented.
 * @param actions - Action tracking object that accumulates all created concepts
 *                 and connections for batch operations. Defaults to empty arrays.
 *
 * @returns Promise resolving to the main/root Concept of the composition
 *
 * @example
 * // Simple flat object
 * const json = { name: "Alice", age: 30 };
 * const mainConcept = await CreateTheCompositionLocal(
 *   json,
 *   null,  // No parent
 *   null,
 *   null,
 *   101,   // userId
 *   2,     // accessId
 *   999
 * );
 * console.log(mainConcept.id); // Root concept ID
 *
 * @example
 * // Nested object with action tracking
 * const actions = { concepts: [], connections: [] };
 * const userData = {
 *   profile: {
 *     firstName: "Alice",
 *     lastName: "Smith"
 *   },
 *   settings: {
 *     theme: "dark"
 *   }
 * };
 * const root = await CreateTheCompositionLocal(
 *   userData,
 *   null, null, null,
 *   101, 2, 999,
 *   false,
 *   actions
 * );
 * console.log(actions.concepts.length); // Total concepts created
 * console.log(actions.connections.length); // Total connections created
 *
 * @throws Logs errors but does not throw. Returns created concepts even on partial failure.
 *
 * @see {@link MakeTheInstanceConceptLocal} for individual concept creation
 * @see {@link CreateTheConnectionLocal} for connection creation
 * @see {@link GetCompositionLocal} for retrieving created compositions
 */
export declare function CreateTheCompositionLocal(json: any, ofTheConceptId?: number | null, ofTheConceptUserId?: number | null, mainKey?: number | null, userId?: number | null, accessId?: number | null, sessionInformationId?: number | null, automaticSync?: boolean, actions?: InnerActions): Promise<any>;
`,bm=`import { InnerActions } from "../../app";
/**
 * Creates a concept in local storage (IndexedDB) without syncing to the backend.
 *
 * This is the primary function for creating offline-first concepts. The concept is stored
 * locally in IndexedDB and memory, but NOT immediately sent to the backend. Sync happens
 * later via the LocalSyncData class.
 *
 * **Virtual ID System:**
 * - Generates a negative ID (e.g., -12345) to indicate local/virtual status
 * - id and ghostId are initially equal and both negative
 * - After backend sync: id becomes positive (real backend ID)
 * - ghostId remains negative (preserves original local ID)
 * - Mapping is stored in LocalGhostIdTree for future lookups
 *
 * **Sync Process:**
 * 1. Create locally with negative ID
 * 2. Use LocalSyncData to sync to backend
 * 3. Backend returns positive ID
 * 4. Update local concept with positive ID
 * 5. Preserve negative ID as ghostId
 * 6. Store mapping in LocalGhostIdTree
 *
 * **Special Case:**
 * If referent is "the", returns a special concept with id=1 (system concept).
 *
 * @param referent - The character value (text/name) of the concept.
 *                  This is the human-readable content (e.g., "Draft Note", "Local Task")
 * @param typecharacter - The type name as a string (e.g., "the_note", "the_person").
 *                       Used for display and classification.
 * @param userId - The ID of the user creating this concept. Used for ownership.
 * @param categoryId - The category classification ID for further classification within type.
 * @param typeId - The type classification ID. Must correspond to typecharacter.
 * @param accessId - Access control level (e.g., 1=Public, 2=Private).
 *                  Usually matches the user's access level.
 * @param isComposition - Set to true if this concept represents a composition root.
 *                       Defaults to false.
 * @param referentId - Optional reference to another concept ID. Used for instance relationships.
 *                    Defaults to 0 (no reference).
 * @param actions - Action tracking object that accumulates created concepts and connections.
 *                 Used for batch operations and rollback. Defaults to empty arrays.
 *
 * @returns Promise resolving to the created Concept object with negative ID
 *
 * @example
 * // Create a local draft note
 * const draftNote = await CreateTheConceptLocal(
 *   "Meeting Notes - Draft",  // referent
 *   "the_note",               // typecharacter
 *   101,                      // userId
 *   1,                        // categoryId
 *   3,                        // typeId
 *   2                         // accessId (Private)
 * );
 * console.log(draftNote.id); // -12345 (negative = local)
 * console.log(draftNote.ghostId); // -12345 (same initially)
 *
 * @example
 * // Create with composition flag
 * const project = await CreateTheConceptLocal(
 *   "Local Project",
 *   "the_project",
 *   101,
 *   1,
 *   5,
 *   2,
 *   true  // isComposition = true
 * );
 *
 * @example
 * // Track actions for batch operations
 * const actions = { concepts: [], connections: [] };
 * const concept1 = await CreateTheConceptLocal("Item 1", "the_item", 101, 1, 4, 2, false, 0, actions);
 * const concept2 = await CreateTheConceptLocal("Item 2", "the_item", 101, 1, 4, 2, false, 0, actions);
 * console.log(actions.concepts.length); // 2
 * // All created concepts tracked in actions array
 *
 * @throws Logs errors and re-throws for handling by caller
 *
 * @see {@link GetTheConceptLocal} for retrieving local concepts
 * @see {@link LocalSyncData} for syncing local concepts to backend
 * @see {@link CreateTheConcept} for creating server-synced concepts directly
 */
export default function CreateTheConceptLocal(referent: string, typecharacter: string, userId: number, categoryId: number, typeId: number, accessId: number, isComposition?: boolean, referentId?: number | null, actions?: InnerActions): Promise<any>;
`,Im=`import { Concept, InnerActions } from "../../app";
/**
 * Creates a connection in local storage (IndexedDB) without syncing to the backend.
 *
 * This is the primary function for creating offline-first connections. The connection is stored
 * locally in IndexedDB and memory, but NOT immediately sent to the backend. Sync happens
 * later via LocalSyncData.SyncDataOnline().
 *
 * **Virtual ID System:**
 * - Generates a negative ID (e.g., -67890) to indicate local/virtual status
 * - id and ghostId are initially equal and both negative
 * - After backend sync: id becomes positive (real backend ID)
 * - ghostId remains negative (preserves original local ID)
 * - Mapping is stored in backend and LocalGhostIdTree
 *
 * **Connection Types:**
 * - **Internal Connections**: orderId < 3 (within a composition)
 *   - typeId is typically the composition ID
 * - **External Connections**: orderId >= 999 (between different entities)
 *   - typeId is a type concept ID
 *   - typeString provides human-readable type name
 *
 * **Self-Connection Prevention:**
 * If ofTheConceptId equals toTheConceptId, returns an empty connection (prevents loops).
 *
 * @param ofTheConceptId - Source concept ID (FROM). The connection originates here.
 *                        Can be negative (local) or positive (server) ID.
 * @param toTheConceptId - Target concept ID (TO). The connection points here.
 *                        Can be negative (local) or positive (server) ID.
 * @param typeId - The type classification for this connection.
 *                - For internal connections: composition ID
 *                - For external connections: type concept ID
 * @param orderId - Order identifier for sorting multiple connections.
 *                 - < 3: Internal connection
 *                 - >= 999: External connection
 *                 - Defaults to 1
 * @param typeString - Human-readable type name (e.g., "the_person_email").
 *                    Used primarily for external connections. Defaults to empty string.
 * @param userId - The ID of the user creating this connection. Defaults to 999 (system).
 * @param actions - Action tracking object that accumulates created concepts and connections.
 *                 Used for batch operations and rollback. Defaults to empty arrays.
 *
 * @returns Promise resolving to the created Connection object with negative ID.
 *         Returns empty connection (all IDs = 0) if self-connection attempted.
 *
 * @example
 * // Create internal connection (within composition)
 * const internalConn = await CreateTheConnectionLocal(
 *   projectId,    // -12345
 *   taskId,       // -67890
 *   compositionId,// -11111
 *   1,            // orderId < 3 = internal
 *   "",           // no typeString needed
 *   101           // userId
 * );
 * console.log(internalConn.id); // -99999 (negative = local)
 *
 * @example
 * // Create external connection (between entities)
 * const externalConn = await CreateTheConnectionLocal(
 *   personId,           // 123
 *   emailId,            // 456
 *   emailTypeId,        // 789
 *   1000,               // orderId >= 999 = external
 *   "the_person_email", // typeString for external
 *   101
 * );
 *
 * @example
 * // Track actions for batch operations
 * const actions = { concepts: [], connections: [] };
 * await CreateTheConnectionLocal(id1, id2, typeId, 1, "", 101, actions);
 * await CreateTheConnectionLocal(id2, id3, typeId, 1, "", 101, actions);
 * console.log(actions.connections.length); // 2
 * // All created connections tracked for potential rollback
 *
 * @example
 * // Self-connection prevention
 * const selfConn = await CreateTheConnectionLocal(123, 123, 5, 1);
 * console.log(selfConn.id); // 0 (empty connection, prevented)
 *
 * @throws Logs errors and re-throws for handling by caller
 *
 * @see {@link CreateConnection} for simplified connection creation with concepts
 * @see {@link LocalSyncData} for syncing local connections to backend
 * @see {@link createTheConnection} for creating server-synced connections directly
 */
export declare function CreateTheConnectionLocal(ofTheConceptId: number, toTheConceptId: number, typeId: number, orderId?: number, typeString?: string, userId?: number, actions?: InnerActions): Promise<any>;
/**
 * Simplified connection creator that accepts concepts and a type string.
 *
 * This is a convenience wrapper around CreateTheConnectionLocal that:
 * 1. Accepts Concept objects instead of IDs
 * 2. Creates the connection type concept if it doesn't exist
 * 3. Extracts necessary IDs automatically
 * 4. Sets appropriate defaults for local connections
 *
 * **Advantages:**
 * - More intuitive API (pass concepts, not IDs)
 * - Automatic type concept creation/retrieval
 * - Less boilerplate code
 * - Type-safe with TypeScript
 *
 * **Process:**
 * 1. Creates/retrieves type concept from connectionTypeString
 * 2. Extracts userId from source concept
 * 3. Calls CreateTheConnectionLocal with extracted IDs
 * 4. Returns the created connection
 *
 * @param ofTheConcept - The source Concept object (FROM)
 * @param toTheConcept - The target Concept object (TO)
 * @param connectionTypeString - Type name as string (e.g., "the_person_email").
 *                              A type concept will be created if it doesn't exist.
 * @param actions - Action tracking object for batch operations. Defaults to empty arrays.
 *
 * @returns Promise resolving to the created Connection object
 *
 * @example
 * // Simple usage with concepts
 * const person = await CreateTheConceptLocal('Alice', 'the_person', 101, 1, 1, 2);
 * const email = await CreateTheConceptLocal('alice@example.com', 'the_email', 101, 1, 2, 2);
 *
 * const connection = await CreateConnection(person, email, 'the_person_email');
 * // Connection created with:
 * // - ofTheConceptId: person.id
 * // - toTheConceptId: email.id
 * // - typeId: auto-generated from 'the_person_email'
 * // - orderId: 1000 (external connection)
 *
 * @example
 * // With action tracking
 * const actions = { concepts: [], connections: [] };
 * const conn1 = await CreateConnection(concept1, concept2, 'links_to', actions);
 * const conn2 = await CreateConnection(concept2, concept3, 'links_to', actions);
 * console.log(actions.connections.length); // 2
 *
 * @see {@link CreateTheConnectionLocal} for the underlying implementation
 * @see {@link MakeTheTypeConceptLocal} for type concept creation
 */
export declare function CreateConnection(ofTheConcept: Concept, toTheConcept: Concept, connectionTypeString: string, actions?: InnerActions): Promise<any>;
`,wm=`/**
 * Deletes a concept from local storage (IndexedDB).
 *
 * This function removes a concept from LocalConceptsData, effectively deleting it
 * from the local IndexedDB cache. This is a local-only delete - it does NOT sync
 * the deletion to the backend.
 *
 * **Important Notes:**
 * - Only deletes from local storage (IndexedDB)
 * - Does NOT delete from backend server
 * - Does NOT automatically delete related connections
 * - For full deletion including backend, use DeleteConceptById
 * - Works with both negative (local) and positive (synced) IDs
 *
 * **Use Cases:**
 * - Cleaning up local draft concepts
 * - Removing concepts before they're synced
 * - Local cache management
 * - Testing and development
 *
 * **Process:**
 * 1. Fetches the concept via GetTheConceptLocal
 * 2. Removes it from LocalConceptsData
 * 3. Updates IndexedDB
 *
 * @param id - The concept ID to delete (negative for local, positive for synced)
 *
 * @returns Promise that resolves when deletion is complete
 *
 * @example
 * // Delete a local concept
 * await DeleteConceptLocal(-12345);
 * console.log("Local concept deleted");
 *
 * @example
 * // Delete after checking existence
 * const concept = await GetTheConceptLocal(-67890);
 * if (concept.id !== 0) {
 *   await DeleteConceptLocal(concept.id);
 *   console.log("Deleted:", concept.characterValue);
 * }
 *
 * @see {@link DeleteConceptById} for full deletion including backend
 * @see {@link GetTheConceptLocal} for retrieving concepts before deletion
 * @see {@link LocalConceptsData.RemoveConcept} for the underlying removal operation
 */
export declare function DeleteConceptLocal(id: number): Promise<any>;
`,Tm=`/**
 * Retrieves all compositions of a specific type from local storage.
 *
 * **Process Flow**:
 * 1. Finds the type concept by compositionName (e.g., "the_project")
 * 2. Queries all concepts with that typeId belonging to the user
 * 3. Fetches full composition for each concept
 * 4. Returns array of complete compositions
 *
 * @param compositionName - The type name of compositions to retrieve (e.g., "the_project", "the_person")
 * @param userId - User ID to filter compositions by ownership
 * @returns Array of composition objects (empty array if type not found)
 * @throws Error if lookup or composition fetching fails
 *
 * @example
 * // Get all local projects for a user
 * const projects = await GetCompositionListLocal("the_project", 101);
 * // Returns: [{id: -1, data: {...}}, {id: -2, data: {...}}]
 */
export declare function GetCompositionListLocal(compositionName: string, userId: number): Promise<any>;
/**
 * Retrieves all compositions of a specific type with DATAID format (includes concept ID).
 *
 * Same as GetCompositionListLocal but returns compositions in data-id wrapper format,
 * which includes both the composition data and its concept ID for easier reference.
 *
 * @param compositionName - The type name of compositions to retrieve
 * @param userId - User ID to filter compositions by ownership
 * @returns Array of composition objects in {id, data} format
 * @throws Error if lookup or composition fetching fails
 *
 * @example
 * // Get all local projects with IDs
 * const projects = await GetCompositionListLocalWithId("the_project", 101);
 * // Returns: [{id: -1, data: {the_name: "Project A"}}, {id: -2, data: {...}}]
 */
export declare function GetCompositionListLocalWithId(compositionName: string, userId: number): Promise<any>;
`,km=`/**
 * Retrieves a complete composition structure from local storage (IndexedDB).
 *
 * This function fetches a composition using local-only data, building a hierarchical
 * structure from local connections and concepts. If the concept has been synced to the
 * backend, it can automatically fall back to fetching from the server.
 *
 * **Process:**
 * 1. Fetches all local connections for the composition
 * 2. Identifies all connected concept IDs
 * 3. Retrieves the main concept from LocalConceptsData
 * 4. If concept not found locally, checks if it's been synced (TranslateLocalToReal)
 * 5. Falls back to server GetComposition if concept is synced
 * 6. Recursively builds composition tree from local data
 * 7. Organizes output by concept type
 *
 * **Local vs Server:**
 * - Prioritizes local data (IndexedDB)
 * - Automatic fallback to server if concept synced
 * - Uses LocalConnectionData for connections
 * - Uses LocalConceptsData for concepts
 *
 * **Output Format (JUSTDATA):**
 * Returns an object keyed by the main concept's type:
 * \`\`\`
 * {
 *   "Person": {
 *     name: "Alice",
 *     email: {...},
 *     projects: {...}
 *   }
 * }
 * \`\`\`
 *
 * @param id - The concept ID (can be negative for local or positive for synced)
 *
 * @returns Promise resolving to composition data organized by concept type
 *
 * @example
 * // Get local composition
 * const localComp = await GetCompositionLocal(-12345);
 * console.log(localComp["Project"]);
 * // Returns all data connected to this local project
 *
 * @example
 * // Get synced concept (automatically falls back to server)
 * const syncedComp = await GetCompositionLocal(-67890);
 * // If concept synced to server, fetches from there
 *
 * @throws Re-throws errors for handling by caller
 *
 * @see {@link GetCompositionLocalWithId} for composition with ID and data wrapper
 * @see {@link GetComposition} for server-only composition retrieval
 * @see {@link recursiveFetchLocal} for the recursive building logic
 */
export declare function GetCompositionLocal(id: number): Promise<any>;
/**
 * Retrieves a local composition with ID and data wrapper (DATAID format).
 *
 * This is a variant of GetCompositionLocal that returns the composition data
 * wrapped in an object that includes both the data and the concept ID. This format
 * is useful for tracking which concept the data belongs to.
 *
 * **Output Format (DATAID):**
 * \`\`\`
 * {
 *   data: {
 *     "Person": {
 *       name: "Alice",
 *       email: {...}
 *     }
 *   },
 *   id: 12345
 * }
 * \`\`\`
 *
 * **Differences from GetCompositionLocal:**
 * - Returns { data, id } wrapper object
 * - Same local data retrieval process
 * - Same recursive building logic
 * - No automatic server fallback
 *
 * @param id - The concept ID (negative for local, positive for synced)
 *
 * @returns Promise resolving to object with { data, id } structure
 *
 * @example
 * const result = await GetCompositionLocalWithId(-12345);
 * console.log(result.id);           // -12345
 * console.log(result.data.Project); // Composition data
 *
 * @throws Re-throws errors for handling by caller
 *
 * @see {@link GetCompositionLocal} for standard format without ID wrapper
 * @see {@link GetCompositionWithId} for server version
 */
export declare function GetCompositionLocalWithId(id: number): Promise<any>;
`,Am=`import { Concept } from "../../app";
/**
 * Retrieves a local concept by character value with typeId=51 (standard type).
 *
 * Simple lookup in LocalConceptsData for concepts matching the character value
 * and having typeId of 51.
 *
 * @param characterValue - The character value to search for
 * @returns Concept matching the character and type, or empty concept if not found
 */
export default function GetConceptByCharacterLocal(characterValue: string): Promise<Concept>;
/**
 * Retrieves a local concept by character value, handling hierarchical type names.
 *
 * **Complex Logic**: For compound names (e.g., "the_person_email"):
 * 1. Splits string by underscore
 * 2. Recursively processes first part to get category ID
 * 3. Searches using character value and derived category
 * 4. Falls back to simple character search for single words
 *
 * **Special Case**: Returns concept with id=1 for character value "the".
 *
 * @param character - The character value to find (e.g., "the_status", "the_person_email")
 * @returns Concept associated with the character value
 *
 * @example
 * const concept = await GetConceptByCharacterAndCategoryLocal("the_person_email");
 * // Splits into "the_person" (category) and searches with that context
 */
export declare function GetConceptByCharacterAndCategoryLocal(character: string): Promise<any>;
/**
 * Retrieves a concept by character value and category ID from local memory.
 *
 * Direct lookup in LocalConceptsData without server fallback.
 *
 * @param value - The character value to search for
 * @param categoryId - The category ID to filter by
 * @returns Concept matching the character and category, or empty concept if not found
 */
export declare function GetConceptByCategoryAndCharacterLocalMemory(value: string, categoryId: number): Promise<Concept>;
/**
 * Retrieves a concept by character value with automatic server fallback.
 *
 * **Complex Logic**:
 * 1. First checks LocalConceptsData for existing concept
 * 2. If not found (id==0 or null), fetches from server via GetLocalConceptByCharacterValue
 * 3. After server fetch, rechecks LocalConceptsData (now populated)
 * 4. Returns the concept or throws error
 *
 * Use this when you need guaranteed concept retrieval with server sync.
 *
 * @param characterValue - The character value to search for
 * @returns Concept from local storage, fetching from server if needed
 * @throws Error if server fetch fails
 */
export declare function GetConceptByCharacterLocalFull(characterValue: string): Promise<Concept>;
`,_m=`import { Connection } from "../../app";
/**
 * Retrieves all connections originating from a specific concept with a given type.
 *
 * Searches local storage (IndexedDB) for connections where:
 * - ofTheConceptId matches the provided concept ID
 * - typeId matches the provided type
 *
 * @param ofTheConcept - The source concept ID (connections originating from this concept)
 * @param typeId - The connection type ID to filter by
 * @param userId - User ID (currently not used in filtering)
 * @returns Array of Connection objects matching the criteria (empty array if none found)
 * @throws Error if local storage query fails
 *
 * @example
 * // Get all "has_property" connections from a person concept
 * const connections = await GetConnectionOfTheConceptLocal(personId, 42, userId);
 */
export declare function GetConnectionOfTheConceptLocal(ofTheConcept: number, typeId: number, userId: number): Promise<Connection[]>;
`,Sm=`/**
 * Retrieves all related compositions from local storage by relation name.
 *
 * **Process Flow (Complex Logic)**:
 * 1. Converts relation string to type concept (e.g., "the_email" → type concept)
 * 2. Finds all connections from source concept with that relation type
 * 3. For each connection, retrieves the target composition
 * 4. Returns array of all related compositions
 *
 * @param id - The source concept ID to get relations from
 * @param relation - The relation name (e.g., "the_email", "the_address")
 * @param userId - User ID for permissions
 * @returns Array of composition objects representing related entities
 * @throws Error if relation lookup or composition retrieval fails
 *
 * @example
 * // Get all email addresses related to a person
 * const emails = await GetRelationLocal(personId, "the_email", userId);
 * // Returns: [emailComposition1, emailComposition2, ...]
 */
export declare function GetRelationLocal(id: number, relation: string, userId: number): Promise<any>;
`,xm=`/**
 * Retrieves a concept by ID with support for both local (virtual) and server concepts.
 *
 * This is the primary function for fetching concepts in offline/local mode. It intelligently
 * handles three types of concept IDs and retrieves from appropriate sources:
 *
 * **ID Types Handled:**
 * 1. **Negative IDs (Virtual/Local)**: Concepts created locally not yet synced
 *    - Stored in LocalConceptsData (IndexedDB)
 *    - Return negative IDs
 *
 * 2. **Synced Virtual IDs**: Originally local concepts now synced to backend
 *    - Looked up via LocalGhostIdTree (maps negative to positive IDs)
 *    - Returns positive (real) ID with ghostId reference
 *
 * 3. **Positive IDs (Server)**: Real backend concepts
 *    - Fetched via GetTheConcept from backend
 *    - Converted to LConcept format
 *    - May have undefined ghostId
 *
 * **Retrieval Strategy:**
 * - If id < 0: Check LocalConceptsData → Check LocalGhostIdTree
 * - If id >= 0: Fetch from backend → Convert to LConcept
 * - Routes through service worker if enabled
 * - Returns default empty concept if not found
 *
 * **Ghost ID System:**
 * - ghostId: Original negative ID (preserved after sync)
 * - id: Current ID (negative if local, positive if synced)
 * - LocalGhostIdTree maintains the mapping
 *
 * @param id - The concept ID to retrieve. Can be:
 *            - Negative (e.g., -12345) for local-only concepts
 *            - Positive (e.g., 789) for server concepts
 *
 * @returns Promise resolving to a Concept object in LConcept format.
 *         Returns default concept (id=0) if not found.
 *
 * @example
 * // Get a local concept (negative ID)
 * const localConcept = await GetTheConceptLocal(-12345);
 * console.log(localConcept.id); // -12345
 * console.log(localConcept.characterValue); // "Draft Note"
 *
 * @example
 * // Get a synced concept (originally local, now on server)
 * const syncedConcept = await GetTheConceptLocal(-12345);
 * console.log(syncedConcept.id); // 789 (now positive, synced)
 * console.log(syncedConcept.ghostId); // -12345 (original ID preserved)
 *
 * @example
 * // Get a server concept
 * const serverConcept = await GetTheConceptLocal(456);
 * console.log(serverConcept.id); // 456
 * // Converted to LConcept format for consistency
 *
 * @throws Logs errors but returns default concept instead of throwing
 *
 * @see {@link CreateTheConceptLocal} for creating local concepts
 * @see {@link GetTheConcept} for fetching server concepts only
 * @see {@link convertFromConceptToLConcept} for format conversion
 */
export declare function GetTheConceptLocal(id: number): Promise<any>;
`,Nm=`import { InnerActions } from "../../app";
/**
 * Gets or creates a local concept - implements get-or-create pattern.
 *
 * Checks LocalConceptsData for existing concept matching referent and typeId.
 * If found, returns existing concept. If not found, creates new local concept.
 *
 * **Special Case**: If typeCharacter is "the", sets categoryId to 1 (system category).
 *
 * @param referent - The character value/name of the concept
 * @param typeCharacter - Type name string (e.g., "the_name")
 * @param userId - User ID creating the concept
 * @param categoryId - Category classification ID
 * @param typeId - Type classification ID
 * @param actions - Action tracking for batch operations
 * @returns Existing or newly created Concept
 *
 * @example
 * const concept = await MakeTheConceptLocal("Active", "the_status", 101, 1, 5);
 * // Returns existing "Active" status or creates new one
 */
export default function MakeTheConceptLocal(referent: string, typeCharacter: string, userId: number, categoryId: number, typeId: number, actions?: InnerActions): Promise<any>;
`,Lm=`import { InnerActions } from "../../Constants/general.const";
/**
 * Creates or retrieves an instance concept locally - the core building block of the concept-connection system.
 *
 * This is THE fundamental function for creating concepts in local storage. It implements an intelligent
 * get-or-create pattern that checks for existing concepts before creating new ones, preventing duplicates
 * while supporting both unique instances and composition concepts.
 *
 * **Core Behaviors:**
 * 1. **Composition Mode (composition=true)**: Always creates a new concept
 *    - Used for containers/objects that need unique instances
 *    - Marks concept with isComposition flag
 *    - Example: Each "Project" is unique, even with same name
 *
 * 2. **Instance Mode (composition=false)**: Get-or-create pattern
 *    - Checks if concept with same type and value exists
 *    - Returns existing if found (deduplication)
 *    - Creates new only if not found
 *    - Example: "Published" status concept reused across items
 *
 * 3. **Long Text Handling**: Values >255 characters always create new
 *    - Prevents expensive lookups on large text
 *    - Each long text gets unique concept
 *
 * **Type String Processing:**
 * - **Best Practice**: Always pass type with "the_" prefix (e.g., "the_name", "the_email")
 * - Auto-correction: If missing, "the_" is automatically added internally
 *   - "name" → "the_name" (auto-corrected)
 *   - "email" → "the_email" (auto-corrected)
 *   - "the_status" → "the_status" (already correct)
 * - Creates type concept if it doesn't exist
 * - **Recommendation**: Use explicit "the_" prefix for code clarity and consistency
 *
 * **Sync and Storage:**
 * - Adds concept to LocalSyncData queue for backend sync
 * - Stores in LocalConceptsData (IndexedDB)
 * - Tracks in actions parameter for batch operations
 * - Assigns negative ID (virtual/local)
 *
 * **Process Flow:**
 * 1. Normalizes type string (adds "the_" prefix)
 * 2. Creates/retrieves type concept via MakeTheTypeConceptLocal
 * 3. If composition=true: Creates new concept immediately
 * 4. If referent length >255: Creates new concept
 * 5. If regular instance: Checks for existing by type+value
 * 6. Returns existing or creates new
 * 7. Attaches type information
 * 8. Adds to sync queue
 *
 * @param type - The type/key of the concept. **Should follow the format "the_xyz"**.
 *              Represents what kind of data this is.
 *              Examples: "the_name", "the_email", "the_status", "the_first_name"
 *
 *              **Note**: If you pass without "the_" prefix (e.g., "name"), the code will
 *              automatically add it internally (becomes "the_name"). However, best practice
 *              is to always include the "the_" prefix for clarity and consistency.
 *
 * @param referent - The actual value/content of the concept.
 *                  The human-readable data (e.g., "Alice", "alice@example.com", "Active").
 *                  Can be empty string for composition concepts.
 *
 * @param composition - Boolean flag determining creation behavior.
 *                     - true: Always creates new concept (unique instances)
 *                     - false: Get-or-create pattern (reuses existing)
 *                     Defaults to false.
 *
 * @param userId - The ID of the user creating this concept. Used for ownership and permissions.
 *
 * @param accessId - Access control level. Typically 4 (default internal access).
 *                  Controls who can view/modify this concept.
 *
 * @param sessionInformationId - Session identifier for tracking. Defaults to 999 (system).
 *                              Used for audit logging and session management.
 *
 * @param referentId - Optional reference to another concept ID.
 *                    Used when this concept is an instance of or refers to another concept.
 *                    Defaults to 0 (no reference).
 *
 * @param actions - Action tracking object that accumulates all created concepts and connections.
 *                 Used for batch operations, rollback, and sync management.
 *                 Structure: { concepts: Concept[], connections: Connection[] }
 *
 * @returns Promise resolving to the created or retrieved Concept object with:
 *         - Negative ID if newly created locally
 *         - Attached type information (concept.type)
 *         - All standard concept properties
 *
 * @example
 * // Create a reusable status concept (get-or-create)
 * const status = await MakeTheInstanceConceptLocal(
 *   "the_status",       // type (with "the_" prefix - best practice)
 *   "Active",           // value
 *   false,              // not composition - will reuse if exists
 *   101,                // userId
 *   4,                  // accessId
 *   999,                // sessionId
 *   0                   // no referent
 * );
 * // First call creates, subsequent calls return same concept
 *
 * @example
 * // Create a composition concept (always new)
 * const project = await MakeTheInstanceConceptLocal(
 *   "the_project",      // type (with "the_" prefix)
 *   "Project Alpha",    // value
 *   true,               // composition - always creates new
 *   101,
 *   4,
 *   999,
 *   0
 * );
 * // Each project is unique, even with same name
 * console.log(project.isComposition); // true
 *
 * @example
 * // Type prefix is added automatically if missing (but prefer explicit)
 * const email = await MakeTheInstanceConceptLocal(
 *   "email",            // Missing "the_" - will become "the_email" internally
 *   "alice@example.com",
 *   false,
 *   101, 4
 * );
 * console.log(email.typeCharacter); // "the_email" (auto-prefixed)
 *
 * // RECOMMENDED: Always include "the_" prefix explicitly
 * const emailBetter = await MakeTheInstanceConceptLocal(
 *   "the_email",        // Explicit prefix - clearer and more consistent
 *   "bob@example.com",
 *   false,
 *   101, 4
 * );
 *
 * @example
 * // Long text always creates new concept
 * const longDescription = "Lorem ipsum...".repeat(100); // >255 chars
 * const concept = await MakeTheInstanceConceptLocal(
 *   "the_description",  // type with "the_" prefix
 *   longDescription,
 *   false,              // Even with false, creates new due to length
 *   101, 4
 * );
 *
 * @example
 * // Track actions for batch operations
 * const actions = { concepts: [], connections: [] };
 * await MakeTheInstanceConceptLocal("the_name", "Alice", false, 101, 4, 999, 0, actions);
 * await MakeTheInstanceConceptLocal("the_email", "alice@ex.com", false, 101, 4, 999, 0, actions);
 * console.log(actions.concepts.length); // 2 (plus any type concepts created)
 *
 * @example
 * // Deduplication in action
 * const status1 = await MakeTheInstanceConceptLocal("the_status", "Published", false, 101, 4);
 * const status2 = await MakeTheInstanceConceptLocal("the_status", "Published", false, 101, 4);
 * console.log(status1.id === status2.id); // true - same concept reused
 *
 * @throws Logs errors and re-throws for handling by caller.
 *        Common issues: Type concept creation failures, IndexedDB errors.
 *
 * @see {@link CreateTheConceptLocal} for the underlying creation function
 * @see {@link MakeTheTypeConceptLocal} for type concept creation/retrieval
 * @see {@link LocalConceptsData.GetConceptByCharacterAndTypeLocal} for existence check
 * @see {@link LocalSyncData.AddConcept} for sync queue management
 */
export declare function MakeTheInstanceConceptLocal(type: string, referent: string, composition: boolean | undefined, userId: number, accessId: number, sessionInformationId?: number, referentId?: number, actions?: InnerActions): Promise<any>;
`,Dm=`import { Concept } from "../../DataStructures/Concept";
import { InnerActions } from "../../Constants/general.const";
/**
 * Creates or retrieves a type concept locally - handles hierarchical type system.
 *
 * Type concepts are placeholders/templates (e.g., "the_first_name", "the_email") that define
 * what kind of data a concept represents. They have no actual value themselves.
 *
 * **Hierarchical Processing (Complex Logic)**:
 * - Single word (e.g., "status"): Creates simple type concept with typeId=51
 * - Compound words (e.g., "the_person_email"): Splits into parts and creates hierarchy:
 *   1. Creates category concept from first part ("the_person")
 *   2. Creates type concept from second part ("email")
 *   3. Creates final concept with category and type linked
 *   **Uses recursion** to build multi-level type hierarchies
 *
 * Always checks for existing type concept before creating to prevent duplicates.
 *
 * @param typeString - The type name to create (e.g., "the_status", "the_person_email")
 * @param sessionId - Session identifier (typically 999)
 * @param sessionUserId - Session user ID (typically 999, not used)
 * @param userId - User creating the type concept
 * @param actions - Action tracking for batch operations
 * @returns Type Concept (existing or newly created)
 *
 * @example
 * // Simple type
 * const statusType = await MakeTheTypeConceptLocal("the_status", 999, 999, 101);
 * // Creates: "the_status" type concept
 *
 * @example
 * // Hierarchical type (recursive processing)
 * const emailType = await MakeTheTypeConceptLocal("the_person_email", 999, 999, 101);
 * // Creates: "the_person" (category) + "email" (type) + "the_person_email" (combined)
 */
export declare function MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number, actions?: InnerActions): Promise<Concept>;
`,Pm=`import { PatcherStructure } from "../../DataStructures/PatcherStructure";
import { InnerActions } from "../../app";
/**
 * Updates/patches a composition in local storage with new or modified properties.
 *
 * **Complex Patching Logic** (197 lines):
 * 1. Fetches latest composition data from backend (all connections and concepts)
 * 2. Iterates through patchObject properties to add/update
 * 3. For each property:
 *    - If value is object/array: Creates composition concept and nested composition
 *    - If value is primitive: Creates instance concept with value
 *    - Checks if concept type already exists in composition
 *    - If exists: Marks old connections for deletion (replaces old value)
 *    - If new: Simply adds new connection
 * 4. Creates connections between parent composition and new/updated concepts
 * 5. Deletes old connections (cleanup)
 * 6. Syncs changes to backend
 *
 * **Use Case**: Updating fields in an existing composition without recreating it entirely.
 *
 * @param patcherStructure - Object containing:
 *   - compositionId: The composition to update
 *   - ofTheCompositionId: Optional parent composition for nested updates
 *   - patchObject: Object with key-value pairs to add/update
 *   - userId, sessionId, accessId: User context
 * @param actions - Action tracking for batch operations and rollback
 *
 * @example
 * // Update a person's email and phone
 * await UpdateCompositionLocal({
 *   compositionId: personId,
 *   patchObject: {
 *     the_email: "newemail@example.com",
 *     the_phone: "555-1234"
 *   },
 *   userId: 101,
 *   sessionId: 999,
 *   accessId: 4
 * });
 * // Old email connection deleted, new email connection created
 */
export declare function UpdateCompositionLocal(patcherStructure: PatcherStructure, actions?: InnerActions): Promise<any>;
`,Rm=`export declare function LogEvent(EventName: string, EventDescription: string, event: any): void;
`,Bm=`export interface EmailBody {
    toAddress: string;
    heading: string;
    body?: string;
    attachments?: Array<string>;
    CaptchaToken?: string;
    recaptchaAction?: string;
}
export interface BulkEmailBody extends Omit<EmailBody, 'toAddress'> {
    toAddress?: string;
    ccAddresses: Array<string>;
}
export interface RecaptchaOptions {
    token: string;
    action?: string;
    fieldName?: string;
    actionFieldName?: string;
    headerName?: string;
}
export interface SendEmailOptions {
    bulk?: boolean;
    personal?: boolean;
    recaptcha?: string | RecaptchaOptions;
}
/**
 * Method to send Email to user
 * @param body FormData | EmailBody
 * @param token string
 * @param bulkOrOptions boolean | SendEmailOptions
 * @param recaptchaToken string
 * @returns JSON | string | null
 */
export declare const sendEmail: (body: FormData | EmailBody | BulkEmailBody, token: string, bulkOrOptions?: boolean | SendEmailOptions, recaptchaToken?: string) => Promise<any>;
/**
 * Method to send a personal Email to user.
 * @param body FormData | EmailBody
 * @param token string
 * @param options SendEmailOptions
 * @returns JSON | string | null
 */
export declare const sendPersonalEmail: (body: FormData | EmailBody, token: string, options?: Omit<SendEmailOptions, "personal" | "bulk">) => Promise<any>;
`,Em=`import { Concept } from "../DataStructures/Concept";
export default function MakeTheCharacter(the_character_data: string, userId: number, securityId: number, accessId: number, accessUserId: number, sessionId: number): Promise<Concept>;
`,Om=`import { Returner } from "../DataStructures/Returner";
export default function MakeTheCharacterData(the_character_data: string, userId: number, securityId: number, accessId: number, sessionId: number): Promise<Returner>;
`,Fm=`import { Concept } from "../DataStructures/Concept";
export default function MakeTheConcept(referent: string, userId: number, categoryId: number, typeId: number, referentId: number, accessId: number, typeCharacter: string): Promise<Concept>;
`,Um=`/**
 * This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the
 * concept connection system. This function is the building block of the concept connection system.
 * @param type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.
 * @param referent the actual value of the concept. The actual name of value of the concept.
 * @param composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also
 * connected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists
 * and creates only in the case that the concept does not already exists with its type and value as its unique identifier.
 * @param userId the userId of the creator.
 * @param passedAccessId this is the accessId of the creator. By default should be 4.
 * @param passedSessionId this is the session that is created by the system.
 * @param referentId In case we need this concept to refer to any other concept.
 * @returns a concept which is either newly created or an older concept that already exists.
 */
export default function MakeTheInstanceConcept(type: string, referent: string, composition: boolean | undefined, userId: number, passedAccessId?: number, passedSessionId?: number, referentId?: number): Promise<any>;
`,Gm=`export declare function MakeTheTimestamp(type: string, referent: string, userId: number, accessId?: number, sessionInformationId?: number): Promise<any>;
`,Mm=`export declare function MakeTheTypeConcept(typeString: string, sessionId: number, sessionUserId: number, userId: number): Promise<any>;
`,Wm=`export declare function publishMessage(topic: string, message: any): void;
`,jm=`import { Connection } from "../../app";
/**
 * ## Format DATA-ID ##
 * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
 * This is then passed on further for stiching.
 * @param connections
 * @param compositionData
 * @param reverse
 * @returns
 */
export declare function FormatFunctionDataForData(connections: Connection[], compositionData?: any[], reverse?: number[]): Promise<any[]>;
/**
 * ############ Format is data-id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
export declare function FormatFromConnectionsAlteredArrayExternal(connections: Connection[], compositionData: any[], newCompositionData: any, mainComposition: number[], reverse: number[] | undefined, CountDictionary: any[]): Promise<any[]>;
/**
 * ## Format DATA-ID ##
 * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
 * This is then passed on further for stiching.
 * @param connections
 * @param compositionData
 * @param reverse
 * @returns
 */
export declare function FormatFunctionData(connections: Connection[], compositionData: any[], reverse?: number[]): Promise<any[]>;
`,Vm=`import { Connection } from "../../app";
/**
 * ######### Format is normal ######### used for listing. This only provides type connections.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
export declare function FormatConceptsAndConnectionsNormalList(connections: Connection[], compositionData: any[], mainComposition: number[], newCompositionData: any, reverse?: number[]): Promise<any[]>;
/**
 *
 * ## Format Normal ##
 * This function takes in the connections and then converts the connections to the single level objects for further processing
 * This function is the builder of the arrays/ objects from the connections.
 */
export declare function formatFunction(connections: Connection[], compositionData: any, reverse: number[]): Promise<any>;
/**
*
* ## Format Normal ##
* This function takes in the connections and then converts the connections to the single level objects for further processing
* This function is the builder of the arrays/ objects from the connections.
*/
export declare function formatFunctionForData(connections: Connection[], compositionData: any, reverse: number[]): Promise<any>;
/**
 * ## Format DATA-ID ##
 * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
 * This is then passed on further for stiching.
 * @param connections
 * @param compositionData
 * @param reverse
 * @returns
 */
export declare function FormatFunctionData(connections: Connection[], compositionData: any[], reverse?: number[]): Promise<any[]>;
`,qm=`import { Connection } from "../../app";
/**
* ## Format Just-Id ##
* this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
* This is then passed on further for stiching.
* @param connections
* @param compositionData
* @param reverse
* @returns
*/
export declare function FormatFunctionDataForDataJustId(connections: Connection[], compositionData: any[], reverse?: number[]): Promise<any[]>;
/**
 * ############ Format is Just Id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
export declare function FormatFromConnectionsAlteredArrayExternalJustId(connections: Connection[], compositionData: any[], mainComposition: number[], reverse: number[] | undefined, CountDictionary: any[]): Promise<any[]>;
export declare function AddCount(ofTheConceptId: number, CountDictionary: any, newData: any): void;
`,Hm=`import { Connection } from "../../app";
export declare function FormatFunctionDataV2(connections: Connection[], compositionData?: Record<number, any>, reverse?: number[]): Promise<Record<number, any>>;
export declare function FormatFunctionDataForDataV2(connections: Connection[], compositionData?: Record<number, any>, reverse?: number[]): Promise<Record<number, any>>;
export declare function FormatFromConnectionsAlteredArrayExternalV2(connections: Connection[], compositionData: Record<number, any>, mainComposition: number[], reverse: number[] | undefined, CountDictionary: Record<number, any>): Promise<any[]>;
`,$m=`import { SearchStructure } from "../../app";
export declare function SearchLinkInternal(searchQuery: SearchStructure, token?: string): Promise<any[]>;
export declare function SearchLinkInternalAll(searchQuery: SearchStructure, token?: string): Promise<any>;
`,zm=`import { SearchQuery } from "../../DataStructures/SearchQuery";
import { Connection } from "../../app";
export declare function SearchLinkMultipleAll(searchQuery: SearchQuery[], token?: string, caller?: any, format?: number): Promise<any>;
/**
 * ######### This layer builds the data. Format is dataid ##########
 * @param linkers list of ids that help us
 * @param conceptIds this is all the concept ids that need  to be composited
 * @param connections these are the internal connections of the compositions that help in creating individual compositions
 * @param reverse this is the list of connection ids that need to show reverse connections(to->from)
 * @param mainCompositionId this is the main centre point of this data.
 * @returns
 */
export declare function DataIdBuildLayer(linkers: number[], conceptIds: number[], connections: number[], reverse: number[], mainCompositionId: number, searchQuery: SearchQuery, format?: number): Promise<any>;
/**
 * ## Format is DATAID ##
 * This  is altered format and is different from others because it passes all the connections prebuilt/prefetched
 * This will not let the connections to be again fetched from the memory.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is the id of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
export declare function FormatFromConnectionsAltered(connections: Connection[], compositionData: any[], mainComposition: number, reverse?: number[]): Promise<any>;
/**
 * ######### Format is normal ######### used for listing.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
export declare function FormatConceptsAndConnections(connections: Connection[], compositionData: any[], mainComposition: number[], reverse?: number[]): Promise<any[]>;
/**
 * ############ Format is data-id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
export declare function FormatFromConnectionsAlteredArray(connections: Connection[], compositionData: any[], conceptIds: number[], mainComposition: number[], reverse?: number[]): Promise<any[]>;
/**
 * ########## Format works with JUSTDATA / NORMAL ########### used for single origin concept
 * @param linkers this is the list of linkers that
 * @param compositionData
 * @param mainComposition
 * @param reverse list of connection ids that need to show reverse conneciton.
 * @returns
 */
export declare function FormatFromConnections(linkers: number[], compositionData: any[], mainComposition: number, reverse?: number[]): Promise<any>;
`,Jm=`import { SearchStructure, SearchQuery } from '../../app';
import { CountInfo } from '../../DataStructures/Count/CountInfo';
/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will give the id of the structures.
 */
export declare function SearchWithTypeAndLinkerDataId(searchStructure: SearchStructure, searchQuery: SearchQuery[], token?: string): Promise<any>;
/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will not give the id of the structures.
 */
export declare function SearchWithTypeAndLinker(searchStructure: SearchStructure, searchQuery: SearchQuery[], token?: string): Promise<any>;
/**
 * ## Format dataid ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
export declare function formatDataArrayDataId(linkers: number[], conceptIds: number[], connections: number[], mainCompositionIds: number[], reverse: number[]): Promise<any>;
/**
 * ## Format Normal ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
export declare function formatDataArrayNormal(linkers: number[], conceptIds: number[], connections: number[], mainCompositionIds: number[], reverse: number[]): Promise<any>;
/**
 * ## Format Normal ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
export declare function formatLinkersNormal(linkers: number[], conceptIds: number[], connections: number[], mainCompositionIds: number[], reverse: number[]): Promise<any>;
/**
 * ## Format Normal ##
 * This function fetches all the connections and then converts all the connections to the single level connections
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers
 * @param conceptIds
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
export declare function formatConnections(linkers: number[], conceptIds: number[], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[]): Promise<any>;
/**
 * ## Format JustId ##
 * This function fetches all the connections and then converts all the connections to the single level connections
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers
 * @param conceptIds
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
export declare function formatConnectionsJustId(linkers: number[], conceptIds: number[], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[], order?: string): Promise<any>;
/**
 * ## Format DATA-ID ##
 * This function fetches all the connections and then converts all the connections to the single level connections
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers
 * @param conceptIds
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
export declare function formatConnectionsDataId(linkers: number[], conceptIds: number[], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[], order?: string): Promise<any>;
export declare function formatConnectionsV2(linkers: number[], conceptIds: number[], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[], order?: string): Promise<any>;
`,Qm=`import { Connection } from "../../app";
export declare function orderTheConnections(connections: Connection[], order?: string): Connection[];
`,Ym=`type RequestHeader = Record<string, string>;
export declare function GetRequestHeader(contentType?: string | null, Accept?: string): Promise<RequestHeader>;
export declare function GetRequestHeaderWithAuthorization(contentType?: string | null, token?: string, Accept?: string): Promise<RequestHeader>;
export declare function GetOnlyTokenHeader(): Promise<Headers>;
export declare function fetchWithAuthRetry(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
export declare function getValidAccessToken(token?: string): Promise<string>;
export {};
`,Xm=`export declare function SplitStrings(typeString: string): string[];
`,Km=`import { Concept, InnerActions } from "../../app";
import { FetchConnectionQuery } from "../../DataStructures/FetchConnection";
export declare class LocalTransaction {
    protected transactionId: string;
    actions: InnerActions;
    protected success: boolean;
    protected pendingConnectionDeletions: number[];
    constructor();
    /**
     * Method to initialize the transactions for specified transaction
     */
    initialize(): Promise<void>;
    /**
     * Method to commi the created Transactions
     */
    commitTransaction(): Promise<void>;
    commitTransactionWithoutAuth(): Promise<void>;
    /**
     * Method to rollback all the tranctions occured
     */
    rollbackTransaction(): Promise<void>;
    /**
     * Method to move concepts and connection to transaction collection
     * @param concept Concept
     */
    protected markAction(): Promise<void>;
    protected flushPendingConnectionDeletions(): Promise<void>;
    /**
     * Deletions
     */
    /**
     * Queries the backend for connections matching the given criteria and queues all
     * returned connection IDs for batched bulk deletion when commitTransaction() is called.
     *
     * **Nothing is deleted until commitTransaction() is called.**
     * Calling rollbackTransaction() discards the queue without touching the backend.
     *
     * Supported query permutations:
     * 1. \`ofTheConceptId\` + \`toTheConceptId\` + \`type\` — connections between two specific concepts
     * 2. \`ofTheConceptId\` + \`type\`                    — all connections FROM a concept of that type
     * 3. \`toTheConceptId\` + \`type\`                    — all connections TO a concept of that type
     * 4. \`typeId\` + \`isComposition: true\`             — all internal connections of a composition
     *
     * For multiple queries in one go use {@link DeleteConnectionsBetweenBulk} — it sends
     * all queries in a single HTTP request.
     *
     * @param query - Partial FetchConnectionQuery with only the fields relevant to your permutation.
     * @returns The connection IDs queued for deletion by this call.
     *
     * @example
     * // Delete all connections of type "the_project_s_page" from concept 103927382
     * const ids = await transaction.DeleteConnectionsBetween({
     *     ofTheConceptId: 103927382,
     *     type: "the_project_s_page"
     * });
     * await transaction.commitTransaction(); // deletion fires here
     *
     * @example
     * // Delete connections between two specific concepts
     * await transaction.DeleteConnectionsBetween({
     *     ofTheConceptId: 103927382,
     *     toTheConceptId: 103927389,
     *     type: "the_project_s_page"
     * });
     *
     * @example
     * // Delete all internal connections of a composition
     * await transaction.DeleteConnectionsBetween({
     *     typeId: 101490186,
     *     isComposition: true
     * });
     *
     * @see {@link DeleteConnectionsBetweenBulk} for sending multiple queries in one HTTP request
     * @see {@link commitTransaction} where the queued deletions are executed in 300-id batches
     */
    DeleteConnectionsBetween(query: Partial<FetchConnectionQuery>): Promise<number[]>;
    /**
     * Same as {@link DeleteConnectionsBetween} but resolves multiple queries in a single
     * HTTP request to POST /api/get-connection-between.
     *
     * Prefer this over looping DeleteConnectionsBetween — all queries go to the backend
     * in one round trip, and all returned IDs are merged into the same pending-deletion queue.
     * The actual deletion fires in 300-id bulk batches inside commitTransaction().
     *
     * @param queries - Array of partial FetchConnectionQuery objects, one per query permutation.
     * @returns All connection IDs queued for deletion across every query in this call.
     *
     * @example
     * // Three different queries → one HTTP request to get IDs → one bulk delete on commit
     * await transaction.DeleteConnectionsBetweenBulk([
     *     { ofTheConceptId: 103927382, type: "the_project_s_page" },
     *     { ofTheConceptId: 103927382, type: "the_project_s_tag" },
     *     { typeId: 101490186, isComposition: true },
     * ]);
     * await transaction.commitTransaction();
     *
     * @see {@link DeleteConnectionsBetween} for the single-query convenience wrapper
     * @see {@link commitTransaction} where the queued deletions are executed in 300-id batches
     */
    DeleteConnectionsBetweenBulk(queries: Partial<FetchConnectionQuery>[]): Promise<number[]>;
    /**
     * Concepts
     */
    MakeTheInstanceConceptLocal(type: string, referent: string, composition: boolean | undefined, userId: number, accessId: number, sessionInformationId?: number, referentId?: number): Promise<any>;
    MakeTheTypeConceptLocal(typeString: string, sessionId: number, sessionUserId: number, userId: number): Promise<Concept>;
    CreateTheConceptLocal(referent: string, typecharacter: string, userId: number, categoryId: number, typeId: number, accessId: number, isComposition?: boolean, referentId?: number | null, actions?: InnerActions): Promise<any>;
    /**
     * Connections
     */
    CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: Concept, toTheConcept: Concept, linker: string, both?: boolean): Promise<any>;
    CreateTheConnectionLocal(ofTheConceptId: number, toTheConceptId: number, typeId: number, orderId?: number, typeString?: string, userId?: number): Promise<any>;
    CreateConnection(ofTheConcept: Concept, toTheConcept: Concept, connectionTypeString: string): Promise<any>;
    CreateConnectionBetweenEntityLocal(concept1Data: Concept, concept2Data: Concept, linker: string): Promise<any>;
    /**
     * Compositions
     */
    CreateTheCompositionLocal(json: any, ofTheConceptId?: number | null, ofTheConceptUserId?: number | null, mainKey?: number | null, userId?: number | null, accessId?: number | null, sessionInformationId?: number | null, automaticSync?: boolean): Promise<any>;
}
`,Zm=`import { PatcherStructure } from "../DataStructures/PatcherStructure";
export default function UpdateComposition(patcherStructure: PatcherStructure): Promise<any>;
`,ey=`export declare const validImageFormats: string[];
export declare const validDocumentFormats: string[];
export interface R2UploadData {
    key: string;
    bucket: string;
    contentType: string;
    size: number;
    eTag: string;
    url: string;
}
export interface R2PresignedUploadUrlRequest {
    fileName: string;
    contentType: string;
    folder?: string;
    expiresInSeconds?: number;
}
export interface R2PresignedUploadUrlData {
    uploadUrl: string;
    key: string;
    bucket: string;
    contentType: string;
    expiresInSeconds: number;
    expiresAt: string;
    publicUrl: string;
}
export interface R2PresignedUploadOptions {
    fileName?: string;
    contentType?: string;
    folder?: string;
    expiresInSeconds?: number;
}
export interface R2PresignedUploadResult {
    message: string;
    success: boolean;
    url?: string;
    data?: R2PresignedUploadUrlData;
    eTag?: string | null;
}
export interface UploadResponse<T = string | R2UploadData> {
    message: string;
    success: boolean;
    data?: T;
}
type UploadFileParam = Blob & {
    name?: string;
    type?: string;
    uri?: string;
};
/**
 * Generic method to upload file or image
 * @param file File
 * @returns Promise<{message: string, success: boolean, url?: string}>
 */
export declare function uploadAttachment(file: File, token?: string): Promise<{
    message: string;
    success: boolean;
    url?: string;
}>;
/**
 * Method to upload a file or image to R2 storage.
 * @param body FormData. Append the file under the "file" key.
 * @param token string?
 * @returns UploadResponse<R2UploadData> | null
 */
export declare function uploadR2Storage(body: FormData, token?: string): Promise<UploadResponse<R2UploadData> | null>;
/**
 * Method to request an R2 pre-signed upload URL from the backend.
 * @param body Request metadata for the file to upload.
 * @param token string?
 * @returns UploadResponse<R2PresignedUploadUrlData> | null
 */
export declare function getR2PresignedUploadUrl(body: R2PresignedUploadUrlRequest, token?: string): Promise<UploadResponse<R2PresignedUploadUrlData> | null>;
/**
 * Method to upload a file body to a pre-signed R2 URL.
 * @param uploadUrl URL returned by getR2PresignedUploadUrl
 * @param file Blob/File, raw body, or compatible file-like object
 * @param contentType Must match the contentType used when creating the signed URL.
 * @returns Response from R2
 */
export declare function uploadToR2PresignedUrl(uploadUrl: string, file: UploadFileParam | Blob | BodyInit | any, contentType: string): Promise<Response>;
/**
 * Full R2 pre-signed upload workflow: create URL, PUT file to R2, return public URL.
 * @param file Blob/File, raw body, or compatible file-like object
 * @param options Optional fileName/contentType/folder/expiresInSeconds overrides.
 * @param token string?
 * @returns R2PresignedUploadResult
 */
export declare function uploadWithR2PresignedUrl(file: UploadFileParam | Blob | BodyInit | any, options?: R2PresignedUploadOptions, token?: string): Promise<R2PresignedUploadResult>;
/**
 * Method to upload image to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export declare function uploadImage(body: FormData, token?: string): Promise<R2PresignedUploadResult>;
/**
 * Method to upload image to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export declare function uploadImageV2(body: FormData, token?: string): Promise<UploadResponse<string | R2UploadData> | null>;
/**
 * Method to upload file to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export declare function uploadFile(body: FormData, token?: string): Promise<UploadResponse<R2UploadData> | null>;
export declare function getUploadFileLimit(): Promise<{}>;
export {};
`,ty=`/**
 * Returns user details synchronously.
 * Priority: in-memory profileCache (encrypted) → legacy localStorage("profile") fallback.
 */
export declare function getUserDetails(): Record<string, any>;
/**
 * Returns user details after hydrating storage and refreshing an expired token.
 * Use this when callers need a valid token from the user details object.
 */
export declare function getUserDetailsWithRefresh(): Promise<Record<string, any>>;
`,ny=`import { Concept } from './../../DataStructures/Concept';
export declare function GetUserGhostId(userId: number, ghostId: number, sessionId?: number): Promise<Concept>;
export declare function AddGhostConcept(concept: Concept, userId: number, sessionId?: number): Promise<void>;
`,oy=`export declare function ViewInternalData(ids: number[]): Promise<any[]>;
`,iy=`/**
 *
 * @param url this is the url of the image that you have. This image will be cached in the cache server
 * @param format this is the format it can be either normal , small, by default it is normal
 * @returns
 */
export declare function GetFreeschemaImage(url: string, format?: string): Promise<any>;
/**
 *
 * @param url this is the url of the image that you have. This image will be cached in the cache server
 * @param format this is the format it can be either normal , small, by default it is normal
 * @returns
 */
export declare function GetFreeschemaImageUrl(url: string, format?: string): string;
`,ry=`import { Concept, InnerActions } from "../../app";
export declare function CreateData(json: any, ofConcept?: Concept | null, typeConcept?: string, actions?: InnerActions): Promise<any>;
export declare function removePrefix(key: string): string;
export declare function addPrefix(key: string): string;
export declare function addArrayPrefix(key: string): string;
export declare function removeArrayPrefix(key: string): string;
export declare function createTypeString(typeConceptString: string, key: any): string;
`,sy=`export declare function requestNextCacheServer(requestData: any, url: string): Promise<Response>;
`,ay=`export declare const DATA_TYPES_RULES: {
    [key: string]: RegExp;
};
`,cy=`export interface FormErrors {
    [key: string]: {} | undefined;
}
export interface FormFieldData {
    name: string | null;
    value: string | null;
    type?: string | null;
    dataType?: string | null;
    pattern?: string | null;
    conceptType?: string | null;
    maxLength?: number | null;
    minLength?: number | null;
    minValue?: number | null;
    maxValue?: number | null;
    accept?: string | null;
    file?: File | null;
    required?: boolean;
    isUnique?: boolean;
}
`,ly=`import { FormFieldData } from "./interface";
/**
 * Utility function to get input field data and attributes
 * @param fieldName - The Name of the form field.
 * @returns - An object containing the field's value and constraints (type, maxLength, etc.).
 */
export declare const createFormFieldData: (fieldName: string) => FormFieldData;
`,dy=`import { FormErrors, FormFieldData } from "./interface";
export declare class Validator {
    /**
     * Checks if a concept with the given type and value is unique.
     * @param type concept type where to check
     * @param value value to check
     * @returns boolean indicating uniqueness
     */
    checkUniqueness(type: string, value: string): Promise<boolean>;
    /**
     * Validates a single form field based on its constraints and uniqueness.
     * @param options - An object containing field properties including name, value, type, and validation constraints.
     * @returns An object containing validation errors if validation fails.
     */
    validateField(options: FormFieldData): Promise<{
        [fieldName: string]: string;
    }>;
    /**
     * Validates all form fields by iterating over the provided form data.
     * It checks each field's value, data type, and constraints, collecting errors where necessary.
     *
     * @param formData - An object representing the form data, where each key is a field name
     *                   and each value is an object containing the \`value\`, \`dataType\`, and constraints (e.g., \`maxLength\`, \`minLength\`).
     *
     * @returns An object containing validation errors for fields that failed validation.
     *          If no errors exist, the object will be empty.
     */
    validateForm(formData: {
        [key: string]: FormFieldData;
    }): Promise<FormErrors>;
    /**
     * Take field element attributes
     * @param options  Object conist of attributes
     * @returns Object with status and details
     */
    validate(options: FormFieldData): any;
}
`,uy=`/**
 * Observable base class implementing the Observer pattern for reactive widgets.
 *
 * Provides data change notification system allowing subscribers to react to state updates.
 */
export declare class BaseObserver {
    /** Widget data that can be observed for changes */
    data: any;
    /** Flag to enable development mode features */
    inDevelopment: boolean;
    /** Array of callback functions subscribed to data changes */
    subscribers: any;
    /**
    * Notifies all subscribers when data changes.
    *
    * @param passedData - Optional data to pass to subscribers. Uses this.data if not provided.
    */
    notify(passedData?: any): void;
    /**
     * Registers a callback function to be invoked on data changes.
     *
     * @param callback - Function to execute when data changes
     */
    dataChange(callback: any): void;
}
`,hy=`import { BaseObserver } from "./BaseObserver";
/**
 * Base widget class providing core DOM element management and identification.
 *
 * Extends BaseObserver to provide reactive data capabilities along with fundamental
 * widget element operations and unique identification.
 */
export declare class BaseWidget extends BaseObserver {
    /** The mounted DOM element wrapper for this widget */
    element: HTMLElement | null;
    /** Unique numeric identifier for this widget instance */
    elementIdentifier: number;
    /** Flag indicating whether the widget has been mounted to the DOM */
    widgetMounted: boolean;
    /**
     * Gets the root component element of this widget.
     *
     * @returns The widget's root HTML element or null if not mounted
     */
    getComponent(): HTMLElement | null;
    /**
     * Finds an element by ID within this widget's scope.
     *
     * @param identifier - The element ID to search for (without '#' prefix)
     * @returns The found HTML element or null if not found
     */
    getElementById(identifier: string): HTMLElement | null;
    /**
     * Generates a unique identifier for this widget's wrapper element.
     *
     * Creates a random number to uniquely identify the widget and its children
     * from other widgets in the DOM.
     *
     * @returns The generated identifier as a string
     */
    createWidgetWrapperIdentifier(): string;
}
`,py=`import { BuilderStatefulWidget } from "./BuilderStatefulWidget";
/**
 * Opens the type editor interface for a widget in development mode.
 *
 * Creates an input field allowing developers to change the widget type
 * dynamically. Updates the widget when type value changes.
 *
 * @param event - The click event that triggered the editor
 * @param that - The BuilderStatefulWidget instance to edit
 */
export declare function TypeEditor(event: any, that: BuilderStatefulWidget): void;
`,fy=`import { StatefulWidget } from "./StatefulWidget";
import { Concept } from "../app";
import { TCustomFunction } from "../DataStructures/TypeLibrary";
/**
 * BuilderStatefulWidget - A dynamic, stateful widget component for building interactive UI elements.
 *
 * This class extends StatefulWidget to provide a powerful widget system that supports:
 * - Dynamic HTML rendering with lifecycle hooks
 * - Child widget composition and mounting
 * - Custom function execution and event handling
 * - Type-based data binding and queries
 * - Development mode with visual editing capabilities
 * - Widget dependencies and custom functions
 *
 * **Key Features:**
 * - **Lifecycle Management**: before_render, render, after_render hooks
 * - **Dynamic Code Execution**: Safely executes user-defined JavaScript functions
 * - **Child Widgets**: Supports hierarchical widget composition
 * - **Type Integration**: Connects to TSCCS type system for data binding
 * - **Development Mode**: Visual editing and type editor integration
 * - **Custom Functions**: Execute user-defined functions within widget context
 * - **Local Connections**: Create relationships between entities at the widget level
 *
 * **Lifecycle Flow:**
 * 1. Constructor creates widget instance
 * 2. mount() attaches to parent DOM element
 * 3. render_custom_functions() executes custom code
 * 4. render_widgetDependencies() loads dependencies
 * 5. before_render() (componentDidMount equivalent) executes
 * 6. mount_child() mounts child widgets
 * 7. render() updates the DOM
 * 8. after_render() (addEvent) attaches event listeners
 *
 * **Use Cases:**
 * - Building dynamic forms with type-based data
 * - Creating reusable UI components
 * - Widget-based page builders
 * - Interactive dashboards
 * - Data-driven UI components
 *
 * @extends StatefulWidget
 *
 * @example
 * // Create and mount a widget
 * const widget = new BuilderStatefulWidget();
 * widget.html = '<div>Hello Widget</div>';
 * widget.widgetType = 'the_person_name';
 * widget.componentDidMountFunction = 'console.log("Widget mounted")';
 * await widget.mount(parentElement);
 *
 * @example
 * // Widget with custom functions
 * const widget = new BuilderStatefulWidget();
 * widget.customFunctions = [
 *   { code: 'this.handleClick = () => { console.log("Clicked!"); }' }
 * ];
 * await widget.mount(parentElement);
 *
 * @example
 * // Development mode with type editor
 * const widget = new BuilderStatefulWidget();
 * widget.inDevelopment = true; // Enables visual editing
 * widget.widgetType = 'the_element_name';
 * await widget.mount(parentElement);
 */
export declare class BuilderStatefulWidget extends StatefulWidget {
    /** Array of child component instances mounted within this widget */
    childComponents: any;
    /** Flag indicating whether the component has been mounted to the DOM */
    componentMounted: boolean;
    /** Reference to the previous HTML element (used for comparison during updates) */
    oldHtml: HTMLElement | null;
    /** Value returned from onmount lifecycle hook */
    onmountVal: any;
    /** Value returned from addEvent lifecycle hook */
    addEventVal: any;
    /** Array of phonebook data (legacy or specific use case) */
    phonebooks: any;
    /** Object containing data for child components */
    childrenData: any;
    /** JavaScript code (as string) to execute after rendering for event binding */
    addEventFunction: any;
    /** JavaScript code (as string) to execute after component mounts (like componentDidMount) */
    componentDidMountFunction: any;
    /** JavaScript code (as string) to execute for mounting child widgets */
    mountChildWidgetsFunction: any;
    /** Array of child widget instances */
    childWidgets: any;
    /** Array of type value options fetched from backend based on widgetType */
    typeValueList: any;
    /** The type identifier for this widget (e.g., "the_person_name", "the_element_name") */
    widgetType: string;
    /** Array of parent concept IDs for hierarchical relationships */
    parentConceptList: any;
    /** Array of custom function objects with code to execute in widget context */
    customFunctions: TCustomFunction[];
    /** JavaScript code (as string) for widget dependencies initialization */
    widgetDependenciesData: string;
    /**
     * Retrieves the current user's ID from local storage.
     *
     * This method fetches the user profile from localStorage and extracts the userId.
     * Used for user-specific operations and data access within widgets.
     *
     * @returns Promise resolving to the user ID (number) or undefined if not found
     *
     * @example
     * const userId = await widget.getUserId();
     * console.log('Current user:', userId);
     */
    getUserId(): any;
    /**
     * Fetches a list of type values from the backend based on the widget's type.
     *
     * This method performs a filtered search using FreeschemaQuery to retrieve all entities
     * of a specific type. The results are formatted as options for dropdowns or selection lists.
     *
     * **Process:**
     * 1. Parses widgetType to extract main composition and type-value key
     * 2. Creates filter for entities (e.g., filter by ID > 1)
     * 3. Executes FreeschemaQuery with filters
     * 4. Formats results into { id, name, text } objects
     * 5. Stores in this.typeValueList
     *
     * **Type Name Format:**
     * - widgetType: "the_element_name"
     * - mainComposition: "the_element"
     * - typevalueKey: "the_name"
     *
     * @param typeName - Optional type name (defaults to this.widgetType)
     *
     * @returns Promise resolving to array of formatted type values:
     *         [{ id: number, name: string, text: string }, ...]
     *
     * @example
     * widget.widgetType = 'the_person_name';
     * const options = await widget.getTypeValueList();
     * // Returns: [{ id: 123, name: "John Doe", text: "John Doe" }, ...]
     */
    getTypeValueList(typeName?: string): Promise<unknown>;
    /**
     * Sets the browser document title.
     *
     * @param title - The title string to set as the document title
     */
    setTitle(title: string): void;
    /**
     * Returns the HTML content of this widget.
     *
     * @returns The HTML string for this widget
     */
    getHtml(): string;
    /**
     * Generates a random identifier for this widget element.
     *
     * @returns A random number used as the element identifier
     */
    createRandomNumber(): number;
    /**
     * Mounts child widgets by executing the mountChildWidgetsFunction.
     *
     * This method dynamically executes user-defined JavaScript code for mounting
     * child widgets. The code is executed within the widget's context with access
     * to the tsccs package.
     *
     * **Execution Context:**
     * - Code is bound to \`this\` (the widget instance)
     * - Has access to \`tsccs\` module for TSCCS operations
     * - Runs asynchronously
     *
     * @throws Will log and re-throw errors if mount_child code fails
     *
     * @example
     * widget.mountChildWidgetsFunction = \`
     *   const childWidget = new tsccs.BuilderStatefulWidget();
     *   childWidget.html = '<div>Child</div>';
     *   await childWidget.mount(this.childWidgetElement);
     * \`;
     * await widget.mount_child();
     */
    mount_child(): Promise<void>;
    /**
     * Sets the widget type and fetches associated type values.
     *
     * This method updates the widget's type, fetches the corresponding type values
     * from the backend, updates DOM attributes, and triggers a re-render.
     *
     * @param widgetTypeName - The new widget type name (e.g., "the_person_name")
     *
     * @returns Promise resolving to this widget instance (for method chaining)
     *
     * @example
     * await widget.setProperty('the_person_email');
     * // Widget now displays person email options
     */
    setProperty(widgetTypeName: any): Promise<this>;
    /**
     * Opens the type editor interface for this widget.
     *
     * This method is called in development mode when the widget is clicked.
     * It opens a visual editor for modifying the widget's type and properties.
     *
     * @param event - The click event that triggered the editor
     */
    createTypeEditor(event: any): void;
    /**
     * Mounts the widget to a parent DOM element and initializes the lifecycle.
     *
     * This is the primary method for rendering a widget to the DOM. It:
     * 1. Creates a wrapper div element
     * 2. Attaches click handlers (if in development mode)
     * 3. Inserts HTML content
     * 4. Executes lifecycle hooks in order
     * 5. Mounts child widgets
     *
     * **Lifecycle Execution Order:**
     * 1. render_custom_functions() - Execute custom functions
     * 2. render_widgetDependencies() - Load dependencies
     * 3. before_render() - componentDidMount equivalent
     * 4. mount_child() - Mount child widgets
     * 5. render() - Update DOM
     *
     * **Development Mode:**
     * When \`inDevelopment\` is true, the widget becomes clickable and opens
     * the type editor for visual configuration.
     *
     * @param parent - The parent HTMLElement to mount this widget to
     *
     * @example
     * // Basic mounting
     * const widget = new BuilderStatefulWidget();
     * widget.html = '<h1>Hello World</h1>';
     * await widget.mount(document.getElementById('app'));
     *
     * @example
     * // Development mode
     * const widget = new BuilderStatefulWidget();
     * widget.inDevelopment = true;
     * widget.widgetType = 'the_person_name';
     * await widget.mount(parentElement);
     * // Widget is now clickable for editing
     */
    mount(parent: HTMLElement): Promise<void>;
    /**
     * Executes widget dependencies initialization code.
     *
     * This lifecycle method runs during the mount phase to load and initialize
     * any dependencies required by the widget. Dependencies code is executed
     * with access to the tsccs module.
     *
     * **Execution:**
     * - Runs before before_render()
     * - Code in widgetDependenciesData is executed
     * - Bound to widget context (this)
     * - Has access to tsccs package
     *
     * @throws Will log and re-throw errors if dependency code fails
     *
     * @example
     * widget.widgetDependenciesData = \`
     *   this.apiClient = await tsccs.createApiClient();
     *   this.config = await tsccs.loadConfig();
     * \`;
     */
    render_widgetDependencies(): void;
    /**
     * Executes all custom functions defined for this widget.
     *
     * This method runs during the mount phase to execute user-defined custom
     * functions. All functions in the customFunctions array are concatenated
     * and executed together in the widget's context.
     *
     * **Custom Functions:**
     * - Defined in widget.customFunctions array
     * - Each function is a TCustomFunction object with a code property
     * - All functions execute with access to \`this\` (widget) and \`tsccs\` module
     * - Functions can define methods, initialize state, or set up utilities
     *
     * @throws Will log and re-throw errors if custom function code fails
     *
     * @example
     * widget.customFunctions = [
     *   { code: 'this.handleClick = (e) => { console.log("Clicked", e); }' },
     *   { code: 'this.formatDate = (date) => date.toLocaleDateString();' }
     * ];
     * widget.render_custom_functions();
     * // Both functions are now available on widget instance
     */
    render_custom_functions(): void;
    /**
     * Executes the componentDidMount lifecycle hook.
     *
     * This function is called after the component mounts to the DOM, similar to
     * React's componentDidMount. It executes user-defined initialization code
     * stored in componentDidMountFunction.
     *
     * **Lifecycle Position:**
     * Runs after render_custom_functions() and render_widgetDependencies(),
     * but before mount_child().
     *
     * **Common Uses:**
     * - Fetch initial data from API
     * - Set up subscriptions or listeners
     * - Initialize third-party libraries
     * - Perform DOM manipulations
     * - Set initial state based on props
     *
     * @throws Will log and re-throw errors if componentDidMount code fails
     *
     * @example
     * widget.componentDidMountFunction = \`
     *   const data = await tsccs.GetTheConcept(123);
     *   this.setState({ userData: data });
     *   console.log("Widget mounted with data:", data);
     * \`;
     * widget.before_render(); // Executes the above code
     */
    before_render(): void;
    /**
     * Executes event binding code after the widget renders.
     *
     * This lifecycle method runs after the DOM is updated to attach event listeners
     * and perform post-render operations. It executes user-defined code stored in
     * addEventFunction.
     *
     * **Lifecycle Position:**
     * Runs after render() completes and DOM is updated.
     *
     * **Common Uses:**
     * - Attach click, input, or other event listeners
     * - Set up keyboard shortcuts
     * - Initialize interactive features
     * - Bind form validation
     * - Set up drag-and-drop handlers
     *
     * @throws Will log and re-throw errors if event binding code fails
     *
     * @example
     * widget.addEventFunction = \`
     *   const button = this.element.querySelector('.submit-btn');
     *   button.addEventListener('click', async (e) => {
     *     const data = await tsccs.CreateTheConcept('New Item', 1, 1);
     *     console.log('Created:', data);
     *   });
     * \`;
     * widget.after_render(); // Attaches the event listener
     */
    after_render(): void;
    /**
     * Creates a local connection between two concepts with a specified linker type.
     *
     * This helper method creates a connection relationship between two entity concepts
     * using local storage (not immediately synced to backend). The linker name is
     * automatically prefixed with the first concept's type to create a typed connection.
     *
     * **Process:**
     * 1. Extracts userId from first concept
     * 2. Creates linker name: "{concept1Type}_{linkerName}"
     * 3. Creates or gets the connection type concept locally
     * 4. Creates the connection between the two concepts
     *
     * **Use Cases:**
     * - Creating relationships in offline mode
     * - Building entity associations within widgets
     * - Temporary connections before sync
     * - Development/testing without backend
     *
     * @param concept1Data - The source concept (FROM)
     * @param concept2Data - The target concept (TO)
     * @param linker - The relationship name (e.g., "email", "phone", "address")
     *                This will be prefixed with concept1's type
     *
     * @returns Promise resolving to "connection created" string
     *
     * @example
     * const person = await tsccs.GetTheConcept(123); // type: "the_person"
     * const email = await tsccs.GetTheConcept(456);  // type: "the_email"
     *
     * await widget.CreateConnectionBetweenEntityLocal(person, email, "email");
     * // Creates connection with type: "the_person_email"
     * // Result: Person → email → Email
     *
     * @example
     * // Create organization-department connection
     * const org = await tsccs.GetTheConcept(789);  // type: "the_organization"
     * const dept = await tsccs.GetTheConcept(101); // type: "the_department"
     *
     * await widget.CreateConnectionBetweenEntityLocal(org, dept, "department");
     * // Creates: "the_organization_department" connection
     */
    CreateConnectionBetweenEntityLocal(concept1Data: Concept, concept2Data: Concept, linker: string): Promise<string>;
}
`,my=`/**
 * Statistics about the current cache state.
 */
export interface CacheStats {
    /** Number of cached entries */
    cacheSize: number;
    /** Number of pending fetch requests */
    pendingRequests: number;
    /** Array of all cache keys */
    keys: string[];
}
/**
 * Generic data cache with promise deduplication.
 *
 * Provides in-memory caching with automatic request deduplication to prevent
 * multiple simultaneous fetches for the same key.
 */
export declare class DataCache<T = any> {
    /** Map storing cached data by key */
    static cache: Map<string, any>;
    /** Map storing pending fetch promises by key */
    static promises: Map<string, Promise<any>>;
    /**
     * Gets data from cache or fetches if not cached.
     *
     * Automatically deduplicates concurrent requests for the same key.
     *
     * @param key - Cache key
     * @param fetcher - Function to fetch data if not cached
     * @returns Promise resolving to the cached or fetched data
     */
    static get<K>(key: string, fetcher: () => Promise<K>): Promise<K>;
    /**
     * Checks if a key exists in cache without fetching.
     *
     * @param key - Cache key to check
     * @returns True if key exists in cache
     */
    static has(key: string): boolean;
    /**
     * Gets cached data synchronously without fetching.
     *
     * @param key - Cache key
     * @returns Cached data or undefined if not cached
     */
    static peek<K>(key: string): K | undefined;
    /**
     * Removes a specific cache entry.
     *
     * @param key - Cache key to remove
     */
    static invalidate(key: string): void;
    /**
     * Clears all cached data and pending promises.
     */
    static clear(): void;
    /**
     * Sets data directly in cache without fetching.
     *
     * @param key - Cache key
     * @param data - Data to cache
     * @returns Promise resolving to the cached data
     */
    static set<K>(key: string, data: K): Promise<K>;
    /**
     * Gets cache statistics including size and pending requests.
     *
     * @returns Object with cache statistics
     */
    static stats(): CacheStats;
}
/**
 * Initializes and returns a new widget cache instance.
 *
 * @returns A new DataCache instance
 */
export declare function initWidgetCache(): DataCache<any>;
`,yy=`/**
 * Normalizes CSS by processing nested selectors into flat CSS.
 *
 * Uses PostCSS with postcss-nested to convert nested CSS syntax
 * into standard flat CSS rules.
 *
 * @param cssString - CSS string with nested selectors
 * @returns Promise resolving to normalized CSS string or null on error
 */
export declare function normalizeCSS(cssString: string): Promise<string | null>;
`,gy=`/**
 * Applies page-level properties from page data to the document.
 *
 * Processes meta tags, width, font size, font family, and page type settings.
 *
 * @param pageData - Page data object containing property configurations
 */
export declare function applyPageProperties(pageData: any): Promise<void>;
/**
 * Applies a single page property to the document.
 *
 * Handles width, font size, font family, page type (fixed/fluid), and meta tags.
 *
 * @param property - Property name (e.g., "width", "meta_title", "font_size")
 * @param value - Property value to apply
 */
export declare function applyPageProperty(property: string, value: any): Promise<void>;
`,vy=`import { WidgetTree } from "./WidgetTree";
/**
 * Initializes and loads external CSS and JS libraries for a widget.
 *
 * Processes widget library dependencies and injects them into the document
 * in the correct order.
 *
 * @param widgetTree - The widget tree containing library definitions
 */
export declare function initializeLibraries(widgetTree: WidgetTree): Promise<void>;
/**
 * Removes CSS library elements from document head by class name.
 *
 * @param cssClassName - The class name of CSS library elements to remove
 */
export declare function removeCSSLibrariesFromHead(cssClassName: string): void;
/**
 * Removes JavaScript library elements from document head by class name.
 *
 * @param jsClassName - The class name of JS library elements to remove
 */
export declare function removeJSLibrariesFromHead(jsClassName: string): void;
`,Cy=`import { BuilderStatefulWidget, StatefulWidget, WidgetTree } from "../app";
/**
 * Renders a complete page with its widgets and properties.
 *
 * Fetches page data, applies page-level properties (meta tags, styles), and renders
 * the page body widget. Adds fspage class for styling.
 *
 * @param pageId - The page concept ID to render
 * @param attachNode - DOM element to attach the page to
 * @param props - Optional properties to pass to the page widget
 * @param showDocumentation - Whether to show documentation button
 */
export declare function renderPage(pageId: number, attachNode: HTMLElement, props?: any, showDocumentation?: boolean): Promise<void>;
/**
 * Imports the latest version of a widget into cache for later rendering.
 *
 * Fetches widget data, builds widget tree, and stores in DataCache.
 * Used for pre-loading widgets before rendering.
 *
 * @param widgetId - The widget origin ID to import
 * @param attachNode - Optional DOM element (for future use)
 * @param props - Optional properties to pass to the widget
 * @param showDocumentation - Whether to show documentation button
 * @returns Promise resolving to the widget tree
 */
export declare function importLatestWidget(widgetId: number, attachNode?: HTMLElement, props?: any, showDocumentation?: boolean): Promise<WidgetTree | undefined>;
/**
* Imports the latest version of a widget into cache for later rendering.
*
* Fetches widget data, builds widget tree, and stores in DataCache.
* Used for pre-loading widgets before rendering.
*
* @param widgetId - The widget origin ID to import
* @param attachNode - Optional DOM element (for future use)
* @param props - Optional properties to pass to the widget
* @param showDocumentation - Whether to show documentation button
* @returns Promise resolving to the widget tree
*/
export declare function importRecentWidget(widgetId: number, attachNode?: HTMLElement, props?: any, showDocumentation?: boolean): Promise<WidgetTree | undefined>;
/**
 * Renders a previously imported widget from cache.
 *
 * Retrieves widget tree from DataCache and renders it to the DOM.
 * Must call importLatestWidget() first to populate cache.
 *
 * @param widgetId - The widget origin ID to render
 * @param attachNode - DOM element to attach the widget to
 * @param props - Optional properties to pass to the widget
 * @param showDocumentation - Whether to show documentation button
 * @returns Promise resolving to the rendered widget instance
 */
export declare function renderImportedWidget(widgetId: number, attachNode: HTMLElement, props?: any, showDocumentation?: boolean): Promise<BuilderStatefulWidget | undefined>;
/**
 * Renders the latest published version of a widget.
 *
 * Fetches and renders the most recent version of a widget by origin ID.
 * Automatically handles "use latest" flag for child widgets.
 *
 * @param widgetId - The widget origin ID to render
 * @param attachNode - DOM element to attach the widget to
 * @param props - Optional properties to pass to the widget
 * @param showDocumentation - Whether to show documentation button
 */
export declare function renderLatestWidget(widgetId: number, attachNode: HTMLElement, props?: any, showDocumentation?: boolean): Promise<BuilderStatefulWidget | undefined>;
/**
 * Renders a specific widget by ID.
 *
 * Fetches widget data and renders the exact version specified (not latest).
 *
 * @param widgetId - The specific widget ID to render
 * @param attachNode - DOM element to attach the widget to
 * @param props - Optional properties to pass to the widget
 * @param showDocumentation - Whether to show documentation button
 * @returns Promise resolving to the rendered widget instance
 */
export declare function renderWidget(widgetId: number, attachNode: HTMLElement, props?: any, showDocumentation?: boolean): Promise<BuilderStatefulWidget | undefined>;
/**
 * Materializes a widget tree into DOM elements with styles and scripts.
 *
 * Core rendering logic that converts widget data into live DOM, applies styles,
 * initializes libraries, and attaches documentation if enabled.
 *
 * @param widgetId - The widget ID being materialized
 * @param bulkWidget - Bulk widget data from backend
 * @param attachNode - DOM element to attach the widget to
 * @param props - Optional properties to pass to the widget
 * @param showDocumentation - Whether to show documentation button (default: true)
 * @returns Promise resolving to the rendered widget instance
 */
export declare function materializeWidget(widgetId: number, bulkWidget: any, attachNode: HTMLElement, props?: any, showDocumentation?: boolean): Promise<BuilderStatefulWidget | undefined>;
/**
 * Fetches and builds a complete widget tree from a widget ID.
 *
 * @param widgetId - The widget ID to fetch
 * @param visitedWidgets - Array to track visited widgets (prevents cycles)
 * @param token - Optional authentication token
 * @returns Promise resolving to the widget tree
 */
export declare function getWidgetFromId(widgetId: number, visitedWidgets?: number[], token?: string): Promise<WidgetTree>;
/**
 * Builds a complete widget tree from bulk widget data.
 *
 * Recursively processes widget hierarchy including children, custom functions,
 * libraries, and lifecycle hooks to create a full WidgetTree structure.
 *
 * @param widgetId - The widget ID to build tree for
 * @param visitedWidgets - Array tracking visited widgets to prevent cycles
 * @param bulkWidget - Bulk widget data from backend
 * @param token - Optional authentication token
 * @returns Promise resolving to the complete widget tree
 */
export declare function getWidgetBulkFromId(widgetId: number, visitedWidgets: number[] | undefined, bulkWidget: any, token?: string): Promise<WidgetTree>;
/**
 * Converts a widget tree structure into live widget instances and mounts to DOM.
 *
 * Recursively instantiates widgets from tree data, sets up parent-child relationships,
 * applies styles, and mounts to the specified parent element.
 *
 * @param tree - The widget tree to convert
 * @param parentElement - DOM element to mount the widget to
 * @param isMain - Whether this is the main/root widget
 * @param props - Optional properties to pass to the widget
 * @param state - Optional state data to pass to the widget
 * @param parentWidget - Parent widget instance for context
 * @returns Promise resolving to the instantiated widget
 */
export declare function convertWidgetTreeToWidget(tree: WidgetTree, parentElement: HTMLElement, isMain?: boolean, props?: any, state?: any, parentWidget?: StatefulWidget | null): Promise<BuilderStatefulWidget>;
/**
 * Creates a shallow copy of an object, excluding arrays and nested objects.
 *
 * @param input - Object to create shallow copy from
 * @returns Shallow copy with only primitive and null values
 */
export declare function makeShallow(input: any): any;
/**
 * Converts widget tree to widget instances with development mode wrapper support.
 *
 * Similar to convertWidgetTreeToWidget but includes development mode features
 * like visual editing and type selection.
 *
 * @param tree - The widget tree to convert
 * @param parentElement - DOM element to mount the widget to
 * @param isMain - Whether this is the main/root widget
 * @param state - Optional state data to pass to the widget
 * @param isInDevelopment - Enable development mode features
 * @param parentWidget - Parent widget instance for context
 * @returns Promise resolving to the instantiated widget
 */
export declare function convertWidgetTreeToWidgetWithWrapper(tree: WidgetTree, parentElement: HTMLElement, isMain?: boolean, state?: object, isInDevelopment?: boolean, parentWidget?: StatefulWidget | null): Promise<BuilderStatefulWidget>;
/**
 * Recursively unwraps all matching container elements within a parent.
 *
 * @param parentElement - Parent element to search within
 * @param selector - CSS selector for containers to unwrap
 */
export declare function unwrapContainers(parentElement: HTMLElement, selector: string): Promise<void>;
/**
 * Opens the documentation preview modal for a widget.
 *
 * Fetches and displays widget documentation including API specs, code examples,
 * images, videos, and links.
 *
 * @param widgetId - The widget ID to show documentation for
 */
export declare function openDocumentationPreviewModal(widgetId: number): Promise<void>;
/**
 * Renders widget documentation content into the documentation view.
 *
 * Formats and displays documentation data including text, API details,
 * code examples, and media attachments.
 *
 * @param widgetDocumentData - Documentation data to display
 * @param widgetId - The widget ID being documented
 */
export declare function showWidgetDocumentation(widgetDocumentData: any, widgetId: number): Promise<void>;
/**
 * Opens a modal dialog by ID.
 *
 * @param modalId - The ID of the modal element to open
 */
export declare function openModal(modalId: string): Promise<void>;
/**
 * Closes a modal dialog by ID and resets its form if present.
 *
 * @param modalId - The ID of the modal element to close
 */
export declare function closeModal(modalId: string): Promise<void>;
`,by=`import { BaseWidget } from "./BaseWidget";
/**
 * Stateful widget with lifecycle management and hierarchical composition.
 *
 * Provides a React-like component system with state management, lifecycle hooks,
 * and parent-child widget relationships. Extend this class to create custom widgets
 * compatible with the concept connection system.
 */
export declare class StatefulWidget extends BaseWidget {
    /** Optional parameters passed to the widget */
    params: any;
    /** HTML template string for the widget */
    html: string;
    /** CSS styles for the widget */
    css: string;
    /** JavaScript code for the widget */
    js: string;
    /** Current widget state object */
    state: {
        [key: string]: any;
    };
    /** Previous widget state for change detection */
    previousState: {
        [key: string]: any;
    };
    /** Array of child widget instances */
    childWidgets: any;
    /** Array of DOM elements hosting child widgets */
    childWidgetElement: any;
    /** Reference to the parent widget instance */
    parentWidget: any;
    /** Shared state data passed to child widgets */
    widgetState: {
        [key: string]: any;
    };
    /** ID of the parent DOM element containing this widget */
    parentElement: string;
    /**
     * Finds the first element matching a CSS selector within this widget.
     *
     * @param selector - CSS selector string
     * @returns The first matching element or null
     */
    querySelector(selector: string): Element | null;
    /**
     * Finds all elements matching a CSS selector within this widget.
     *
     * @param selector - CSS selector string
     * @returns NodeList of matching elements or null
     */
    querySelectorAll(selector: string): NodeListOf<Element> | null;
    /**
     * Gets the root DOM element of this widget.
     *
     * @returns The widget's root HTML element
     */
    getElement(): HTMLElement | null;
    /**
     * Sets the browser document title.
     *
     * @param title - The new document title
     */
    setTitle(title: string): void;
    /**
     * Gets the HTML template for this widget.
     *
     * @returns HTML string to be rendered
     */
    getHtml(): string;
    /**
     * Updates a child widget's data and triggers re-render.
     *
     * @param value - New data to pass to the child widget
     * @param widget - The child widget instance to update
     */
    UpdateChildData(value: any, widget: StatefulWidget): void;
    /**
     * Lifecycle hook called after widget data is updated.
     * Override this method to handle post-update logic.
     */
    update(): void;
    /**
     * Updates the entire widget state and triggers re-render if changed.
     *
     * @param newState - New state data to replace current state
     */
    setState(newState: any): void;
    /**
     * Updates specific state properties and triggers re-render if changed.
     *
     * @param newProperty - Object containing properties to update
     */
    setStateProperty(newProperty: Object): void;
    /**
     * Checks if the widget state has changed since last update.
     *
     * @returns True if state changed, false otherwise
     */
    hasStateChanged(): boolean;
    /**
     * Compares two state objects for shallow equality.
     *
     * @param obj1 - First state object
     * @param obj2 - Second state object
     * @returns True if objects are equal, false otherwise
     */
    private isPropertyEqual;
    /**
     * Mounts all registered child widgets to their designated parent elements.
     */
    loadChildWidgets(): void;
    /**
     * Re-renders the widget by updating the DOM with current HTML template.
     * Also triggers child widget loading and after_render hook.
     */
    render(): void;
    /**
     * Finds all elements with a specific class name within this widget.
     *
     * @param identifier - Class name to search for (without '.' prefix)
     * @returns NodeList of matching elements
     */
    getElementByClassName(identifier: string): never[] | NodeListOf<Element>;
    /**
     * Lifecycle hook for mounting child widgets.
     * Override this method to define custom child mounting logic.
     */
    mount_child(): void;
    /**
     * Mounts the widget to a parent DOM element and initializes lifecycle.
     *
     * Creates a wrapper div, assigns unique ID, renders HTML, and executes
     * lifecycle hooks in sequence.
     *
     * @param parent - The parent HTML element to mount this widget into
     */
    mount(parent: HTMLElement): Promise<void>;
    /**
     * Lifecycle hook called before rendering.
     * Override for initialization logic. Default implementation calls render().
     */
    before_render(): void;
    /**
     * Lifecycle hook called after rendering.
     * Override to add event listeners or post-render logic.
     */
    after_render(): void;
    /**
     * Recursively renders all child widgets in the hierarchy.
     */
    renderChildWidgets(): void;
    /**
     * Sets shared state data and propagates to all child widgets recursively.
     *
     * @param key - State property key
     * @param value - State value to set
     */
    setWidgetState(key: string, value: any): void;
    /**
     * Retrieves shared state data by key.
     *
     * @param key - State property key to retrieve
     * @param defaultValue - Default value if key doesn't exist
     * @returns The state value or default value
     */
    getWidgetState(key: string, defaultValue: any): object;
}
`,Iy=`/**
 * Fetches and builds widget data from the backend by widget ID.
 *
 * Retrieves complete widget structure including concepts, connections, and metadata.
 * Uses caching to prevent duplicate requests for the same widget.
 *
 * @param id - The widget ID to fetch
 * @returns Promise resolving to formatted widget data
 */
export declare function BuildWidgetFromId(id: number): Promise<any>;
/**
 * Builds widget data from local cache instead of making API request.
 *
 * @param id - The widget ID to fetch from cache
 * @returns Promise resolving to widget data object with mainId
 */
export declare function BuildWidgetFromCache(id: number): Promise<any>;
/**
 * Fetches the latest published version of a widget by origin ID.
 *
 * Retrieves the most recent version of a widget, useful for always displaying
 * updated content. Uses separate cache from standard widget requests.
 *
 * @param id - The origin widget ID to fetch latest version for
 * @returns Promise resolving to object with widget data and mainId
 */
export declare function BuildWidgetFromIdForLatest(id: number): Promise<any>;
/**
 * Fetches the recent published version of a widget by origin ID.
 *
 * Retrieves the most recent version of a widget, useful for always displaying
 * updated content. Uses separate cache from standard widget requests.
 *
 * @param id - The origin widget ID to fetch latest version for
 * @returns Promise resolving to object with widget data and mainId
 */
export declare function BuildWidgetFromIdForRecent(id: number): Promise<any>;
/**
 * Finds and returns a specific widget from bulk widget data by ID.
 *
 * @param data - Array of widget data objects
 * @param id - The widget ID to find
 * @returns The matching widget object or undefined
 */
export declare function GetWidgetForTree(data: any, id: number): any;
`,wy=`/**
 * WidgetCacheManager — In-memory cache with IndexedDB persistence for widget data.
 *
 * Architecture:
 *   - **Reads** are synchronous from in-memory Maps (fastest possible lookup).
 *   - **Writes** update the in-memory Map immediately, then persist to IndexedDB
 *     in the background (fire-and-forget) so data survives page reloads.
 *   - **On startup**, \`init()\` loads all persisted data from IndexedDB into the Maps.
 *
 * This gives us the speed of in-memory access (no async overhead, no JSON.parse)
 * with the durability of IndexedDB (no 5 MB limit, survives reloads).
 *
 * Three separate caches are maintained:
 *   - **widgetMap**  — standard widget data keyed by widget ID
 *   - **latestMap**  — latest published version keyed by origin ID
 *   - **recentMap**  — recent published version keyed by origin ID
 */
export declare class WidgetCacheManager {
    /** In-memory cache for standard widget data */
    private static widgetMap;
    /** In-memory cache for latest-version widget data */
    private static latestMap;
    /** In-memory cache for recent-version widget data */
    private static recentMap;
    /**
     * Loads all persisted widget cache data from IndexedDB into memory.
     * Called automatically during \`init()\` / \`initConceptConnection()\`.
     * Safe to call multiple times — just overwrites the Maps.
     *
     * Skips entirely when \`Environments.getValue('enableCache', true)\` is \`false\`,
     * keeping all three maps empty so no stale data is ever served.
     */
    static init(): Promise<void>;
    /**
     * Retrieves cached widget data by widget ID (synchronous, from memory).
     * Returns \`null\` when cache is disabled via \`Environments.setValue('enableCache', false)\`,
     * causing \`BuildWidgetFromId\` to always fetch fresh from the backend.
     * @param id - The widget ID to look up
     * @returns The cached data object, or null if not cached or cache is disabled
     */
    static getWidget(id: number): any | null;
    /**
     * Stores widget data in memory and persists to IndexedDB in the background.
     * No-ops when cache is disabled via \`Environments.setValue('enableCache', false)\`.
     * Skips if data is identical to what's already cached (dedup guard).
     * @param id - The widget ID
     * @param data - The widget data object to cache
     */
    static setWidget(id: number, data: any): void;
    /**
     * Removes a single widget entry from memory and IndexedDB.
     * @param id - The widget ID to remove
     */
    static removeWidget(id: number): void;
    /**
     * Retrieves cached latest-version widget data (synchronous, from memory).
     * Returns \`null\` when cache is disabled, causing a live backend fetch.
     * @param id - The origin widget ID
     * @returns The cached data object, or null if not cached or cache is disabled
     */
    static getLatest(id: number): any | null;
    /**
     * Stores latest-version widget data in memory and persists to IndexedDB.
     * No-ops when cache is disabled. Skips if data is identical to what's already cached.
     * @param id - The origin widget ID
     * @param data - The latest widget data to cache
     */
    static setLatest(id: number, data: any): void;
    /**
     * Removes a single latest-version entry from memory and IndexedDB.
     * @param id - The origin widget ID to remove
     */
    static removeLatest(id: number): void;
    /**
     * Retrieves cached recent-version widget data (synchronous, from memory).
     * Returns \`null\` when cache is disabled, causing a live backend fetch.
     * @param id - The origin widget ID
     * @returns The cached data object, or null if not cached or cache is disabled
     */
    static getRecent(id: number): any | null;
    /**
     * Stores recent-version widget data in memory and persists to IndexedDB.
     * No-ops when cache is disabled. Skips if data is identical to what's already cached.
     * @param id - The origin widget ID
     * @param data - The recent widget data to cache
     */
    static setRecent(id: number, data: any): void;
    /**
     * Removes a single recent-version entry from memory and IndexedDB.
     * @param id - The origin widget ID to remove
     */
    static removeRecent(id: number): void;
    /**
     * Clears all three widget caches from both memory and IndexedDB.
     * Useful for cache invalidation on logout or environment switch.
     */
    static clearAll(): void;
    /**
     * Checks if the new data is identical to what's already in the Map.
     * Prevents unnecessary IndexedDB writes when data hasn't changed.
     *
     * @param map - The in-memory Map to check against
     * @param id - The key to check
     * @param data - The new data to compare
     * @returns true if data is a duplicate (should be skipped)
     */
    private static _isDuplicate;
}
`,Ty=`import { TAssistant, TCustomFunction, TMainLibrary } from "../DataStructures/TypeLibrary";
import { BuilderStatefulWidget } from "./BuilderStatefulWidget";
/**
 * Hierarchical widget tree structure for nested widget composition.
 *
 * Represents a widget and its complete metadata including HTML, styles, scripts,
 * lifecycle hooks, and child widgets. Used for building complex widget hierarchies.
 */
export declare class WidgetTree {
    /** Unique widget identifier */
    id: number;
    /** Widget display name */
    name: string;
    /** HTML template string */
    html: string;
    /** CSS styles string */
    css: string;
    /** JavaScript code string */
    js: string;
    /** External CSS and JS library dependencies */
    library: TMainLibrary;
    /** AI assistant configuration for the widget */
    assistant: TAssistant;
    /** Creation/update timestamp */
    timestamp: string;
    /** Widget ID reference */
    widgetId: number;
    /** Widget type identifier (e.g., "the_element_name") */
    type: string;
    /** Clean/sanitized version of the widget */
    clean: string;
    /** Code to execute after widget renders */
    after_render: string;
    /** Code to execute before widget renders */
    before_render: string;
    /** Array of custom function definitions */
    custom_functions: TCustomFunction[];
    /** Code to execute on widget update */
    update: string;
    /** Origin widget ID for versioning */
    origin: number;
    /** Version number of this widget */
    version: number;
    /** Code to execute when mounting child widgets */
    mount_child: string;
    /** Array of child widget trees */
    children: WidgetTree[];
    /** ID of the wrapper element for this widget */
    wrapper: string;
    /** The instantiated widget object */
    widget: BuilderStatefulWidget;
    /** Child widget ID reference */
    sChildId?: number;
    /** Whether the widget is published */
    isPublished?: boolean;
    /** Whether to use the latest version of this widget */
    useLatest?: boolean;
    /** Widget dependency code string */
    dependency: string;
    root: number;
}
`,ky=`/**
 * Base observable class that tracks concepts and connections for reactive state management.
 * Implements the observer pattern to notify subscribers when tracked data changes.
 */
export declare class DependencyObserver {
    /** List of subscriber callbacks */
    subscribers: any[];
    /** Primary concept ID being observed */
    mainConcept: number;
    /** List of composition IDs */
    compositionIds: number[];
    /** List of concept IDs */
    conceptIds: number[];
    /** List of internal connection IDs */
    internalConnections: number[];
    /** List of reverse connection IDs */
    reverse: number[];
    /** List of linker connection IDs */
    linkers: number[];
    /** List of newly added IDs */
    newIds: number[];
    /** List of dependency IDs */
    dependency: number[];
    /** Whether initial data has been loaded */
    isDataLoaded: boolean;
    /** Whether an update is currently in progress */
    isUpdating: boolean;
    /** The observable data to be returned */
    data: any;
    /** Whether data has been fetched */
    fetched: boolean;
    /** Output format (NORMAL, DATAID, JUSTDATA, etc.) */
    format: number;
    /** Map of concept IDs to their event handlers (string keys to support composite keys) */
    eventHandlers: {
        [key: string]: (event: Event) => void;
    };
    /** Map of handler keys to actual browser event names. */
    private eventNames;
    /** Whether this observer has been disposed. */
    protected isDisposed: boolean;
    /**
     * Registers a window listener and tracks enough metadata to remove it later.
     * The key identifies the logical subscription; eventName is the CustomEvent name.
     */
    protected addTrackedEventListener(key: string | number, eventName: string | number, handler: (event: Event) => void): void;
    /**
     * Removes a previously tracked window listener by its logical key.
     */
    protected removeTrackedEventListener(key: string | number): void;
    /**
     * Hook for subclasses that maintain additional subscriptions.
     */
    protected onDispose(): void;
    /**
     * Removes all listeners owned by this observer.
     */
    dispose(): void;
    /**
     * Listens to changes for a specific concept type and updates subscribers when new concepts of that type are created.
     * @param id - The type concept ID to track
     */
    listenToEventType(id: number): void;
    /**
     * Listens to connection changes for a specific concept and updates subscribers when connections are modified.
     * @param id - The concept ID to track
     */
    listenToEvent(id: number): void;
    /**
     * Removes an event listener for a specific concept ID.
     * @param id - The concept ID to stop tracking
     */
    removeListenToEvent(id: number): void;
    /**
     * Listens to connection changes filtered by connection type for a specific concept.
     * @param id - The concept ID to track
     * @param connectionType - The connection type ID to filter by
     */
    listenToEventConnectionType(id: number, connectionType: number): void;
    /**
     * Binds and refreshes the observable data. Override in subclasses to implement specific data fetching logic.
     * @returns The bound data
     */
    bind(): Promise<void>;
    /**
     * Executes the observable without subscribing. Override in subclasses for non-reactive data fetching.
     * @returns The executed data
     */
    run(): Promise<void>;
    /**
     * Forces a data refresh and notifies all subscribers.
     */
    update(): Promise<void>;
    /**
     * Subscribes a callback to receive data updates whenever tracked concepts/connections change.
     * @param callback - Function to call with (data, observer) when updates occur
     * @param errorCallback - Optional function to call when errors occur
     * @returns Result of calling the callback with current data
     */
    subscribe(callback: any, errorCallback?: (error: Error) => void): any;
    /**
     * Executes the observable once without subscribing to updates.
     * @returns The executed data
     */
    execute(): Promise<void>;
    /**
     * Removes a callback from the subscriber list.
     * @param callback - The callback function to remove
     * @returns Number of remaining subscribers
     */
    unsubscribe(callback: any): number;
    /**
     * Notifies all subscribers with the current data.
     */
    notify(): void;
}
`,Ay=`import { DependencyObserver } from "./DepenedencyObserver";
/**
 * Observable wrapper for retrieving a paginated list of compositions by type with automatic updates.
 */
export declare class GetCompositionListObservable extends DependencyObserver {
    /** The composition type character name */
    compositionName: string;
    /** The user ID who owns the compositions */
    userId: number;
    /** Number of items per page */
    inpage: number;
    /** Current page number */
    page: number;
    /** List of composition data */
    data: any;
    /** Starting page index */
    startPage: number;
    /**
     * Creates a new composition list observable.
     * @param compositionName - The composition type name
     * @param userId - The user ID who owns the compositions
     * @param inpage - Number of items per page
     * @param page - Page number (1-indexed)
     * @param format - Output format (JUSTDATA, DATAID, NORMAL)
     */
    constructor(compositionName: string, userId: number, inpage: number, page: number, format: number);
    /**
     * Fetches paginated composition list and sets up change listeners.
     * @returns Array of formatted composition data
     */
    bind(): Promise<any>;
    /**
     * Builds the list of compositions in the specified format.
     * @returns Array of formatted composition data
     */
    build(): Promise<any>;
}
/**
 * Creates an observable that tracks a paginated list of compositions and updates subscribers when they change.
 * @param compositionName - The composition type name
 * @param userId - The user ID who owns the compositions
 * @param inpage - Number of items per page
 * @param page - Page number (1-indexed)
 * @param format - Output format (JUSTDATA, DATAID, NORMAL)
 * @returns Observable instance for the composition list
 *
 * @example
 * const observer = GetCompositionListListener("BlogPost", 123, 10, 1, JUSTDATA);
 * observer.subscribe((data) => console.log(data));
 */
export declare function GetCompositionListListener(compositionName: string, userId: number, inpage: number, page: number, format?: number): GetCompositionListObservable;
`,_y=`import { DependencyObserver } from "./DepenedencyObserver";
/**
 * Observable wrapper for retrieving a composition with automatic updates when the composition changes.
 */
export declare class GetCompositionObservable extends DependencyObserver {
    /** The composition ID to observe */
    id: number;
    /**
     * Creates a new composition observable.
     * @param id - The composition concept ID
     * @param format - Output format (JUSTDATA, DATAID, NORMAL)
     */
    constructor(id: number, format?: number);
    /**
     * Fetches composition data and sets up change listeners.
     * @returns The formatted composition data
     */
    bind(): Promise<any>;
    /**
     * Builds the composition data in the specified format.
     * @returns The formatted composition data
     */
    build(): Promise<any>;
}
/**
 * Creates an observable that tracks a composition and updates subscribers when it changes.
 * @param id - The composition concept ID to observe
 * @param format - Output format (JUSTDATA, DATAID, NORMAL)
 * @returns Observable instance for the composition
 *
 * @example
 * const observer = GetCompositionListener(123, JUSTDATA);
 * observer.subscribe((data) => console.log(data));
 */
export declare function GetCompositionListener(id: number, format?: number): GetCompositionObservable;
`,Sy=`import { SearchQuery, SearchStructure } from "../app";
import { DependencyObserver } from "./DepenedencyObserver";
/**
 * Observable wrapper for searching linked concepts with complex query structures and automatic updates.
 */
export declare class GetLinkListObservable extends DependencyObserver {
    /** Array of search query conditions */
    searchQuery: SearchQuery[];
    /** Search structure defining composition and linker types */
    searchStructure: SearchStructure;
    /** Output format */
    format: number;
    /** List of main composition IDs */
    mainCompositionIds: number[];
    /** Character value of the search composition */
    searchCharacter: string;
    /** Authentication token */
    token: string;
    /**
     * Creates a new link list observable.
     * @param searchStructure - Defines composition and linker types for the search
     * @param searchQuery - Array of query conditions to filter results
     * @param token - Authentication token
     * @param format - Output format (DATAID, NORMAL)
     */
    constructor(searchStructure: SearchStructure, searchQuery: SearchQuery[], token: string, format?: number);
    /**
     * Overrides base method to handle new compositions of the searched type being created.
     * @param id - The type concept ID to track
     */
    listenToEventType(id: number): void;
    /**
     * Executes the search query and sets up change listeners.
     * @returns Array of formatted search results
     */
    bind(): Promise<any>;
    /**
     * Builds the search results in the specified format.
     * @returns Array of formatted search results
     */
    build(): Promise<any>;
}
/**
 * Creates an observable that tracks search results with complex query conditions and updates subscribers when results change.
 * @param searchStructure - Defines composition and linker types for the search
 * @param searchQuery - Array of query conditions to filter results
 * @param token - Authentication token
 * @param format - Output format (DATAID, NORMAL)
 * @returns Observable instance for the search results
 *
 * @example
 * const structure = { composition: "BlogPost", linker: ["Author", "Category"] };
 * const queries = [{ type: "BlogPost", searchField: "title", searchText: "tutorial" }];
 * const observer = GetLinkListListener(structure, queries, token, DATAID);
 * observer.subscribe((results) => console.log(results));
 */
export declare function GetLinkListListener(searchStructure: SearchStructure, searchQuery: SearchQuery[], token: string, format?: number): GetLinkListObservable;
`,xy=`import { Connection } from "../app";
import { DependencyObserver } from "./DepenedencyObserver";
/**
 * Observable wrapper for retrieving linked concepts from a source concept with automatic updates.
 */
export declare class GetLinkObservable extends DependencyObserver {
    /** The linker type name defining the relationship */
    linker: string;
    /** Number of items per page */
    inpage: number;
    /** Current page number */
    page: number;
    /** List of connection objects */
    connections: Connection[];
    /** Array of linked composition data */
    data: any;
    /**
     * Creates a new link observable.
     * @param id - The source concept ID whose links to retrieve
     * @param linker - The linker type name defining the relationship
     * @param inpage - Number of items per page
     * @param page - Page number (1-indexed)
     * @param format - Output format (NORMAL, DATAID, JUSTDATA, DATAIDDATE)
     */
    constructor(id: number, linker: string, inpage: number, page: number, format: number);
    /**
     * Fetches linked concepts and sets up change listeners.
     * @returns Array of linked composition data
     */
    bind(): Promise<any>;
    /**
     * Builds the array of linked compositions in the specified format.
     * @returns Array of formatted linked composition data
     */
    build(): Promise<any>;
}
/**
 * Creates an observable that tracks linked concepts and updates subscribers when links change.
 * @param id - The source concept ID whose links to retrieve
 * @param linker - The linker type name defining the relationship
 * @param inpage - Number of items per page
 * @param page - Page number (1-indexed)
 * @param format - Output format (NORMAL, DATAID, JUSTDATA, DATAIDDATE)
 * @returns Observable instance for the linked concepts
 *
 * @example
 * const observer = GetLinkListener(123, "Author", 10, 1, NORMAL);
 * observer.subscribe((linkedData) => console.log(linkedData));
 */
export declare function GetLinkListener(id: number, linker: string, inpage: number, page: number, format?: number): GetLinkObservable;
`,Ny=`/**
 * QueryCacheManager — In-memory cache with IndexedDB persistence for freeschema query results.
 *
 * Architecture:
 *   - **Reads** (\`get\`) are synchronous from an in-memory Map — no async overhead.
 *   - **Writes** (\`set\`) update the Map immediately, then persist to IndexedDB
 *     in the background (fire-and-forget). Also dispatches a CustomEvent so
 *     active subscribers (SchemaQueryObservable) can re-render with fresh data.
 *   - **On startup**, \`init()\` loads all persisted query results from IndexedDB
 *     into the Map so cached data is available from the very first read.
 *
 * This gives us the speed of in-memory access with the durability of IndexedDB
 * (no 5 MB localStorage limit, survives page reloads).
 *
 * The stale-while-revalidate flow in FreeschemaQueryApi:
 *   1. \`get(hash)\` returns cached data synchronously from memory
 *   2. Caller returns cached data to UI immediately
 *   3. Background fetch gets fresh data from API
 *   4. \`set(hash, fresh)\` updates memory + IndexedDB + fires CustomEvent
 *   5. Subscribers pick up the event and re-render with fresh data
 */
export declare class QueryCacheManager {
    /** Prefix for CustomEvent names — ensures no collision with other window events */
    private static prefix;
    /** In-memory cache: hash → query result data */
    private static cacheMap;
    /**
     * Loads all persisted query cache data from IndexedDB into memory.
     * Call this once during app initialization (handled automatically by \`init()\`).
     * Safe to call multiple times — just overwrites the Map.
     *
     * Skips entirely when \`Environments.getValue('enableCache', true)\` is \`false\`,
     * which is set by the \`enableCache\` parameter passed to \`init()\`.
     */
    static init(): Promise<void>;
    /**
     * Computes a SHA-256 hash of a query object for use as a cache key.
     *
     * The query is canonicalized by recursively sorting all object keys before
     * hashing, so that \`{a:1, b:2}\` and \`{b:2, a:1}\` produce the same hash.
     *
     * @param query - The freeschema query object to hash
     * @returns Hex-encoded SHA-256 hash string
     */
    static getHash(query: any): Promise<string>;
    /**
     * Retrieves cached query results by hash key (synchronous, from memory).
     *
     * Returns \`null\` immediately when \`Environments.getValue('enableCache', true)\` is \`false\`,
     * causing \`FreeschemaQueryApi\` to fall through to a live backend fetch.
     *
     * @param hash - The SHA-256 hash of the query (from getHash)
     * @returns The cached result data, or null if not found or cache is disabled
     */
    static get(hash: string): any | null;
    /**
     * Stores query results in memory, persists to IndexedDB, and notifies subscribers.
     *
     * Includes a deduplication guard: if the new data serializes identically to
     * what's already in memory, the write and event dispatch are both skipped.
     * This prevents infinite revalidation loops (set → event → fetch → set → ...).
     *
     * No-ops entirely when \`Environments.getValue('enableCache', true)\` is \`false\`
     * so neither memory nor IndexedDB is written to.
     *
     * @param hash - The SHA-256 hash key for this query
     * @param data - The query result data to cache
     */
    static set(hash: string, data: any): void;
    /**
     * Subscribes to cache updates for a specific query hash.
     *
     * Uses window CustomEvents (synchronous, in-memory) so subscribers are
     * notified immediately when \`set()\` is called — no IndexedDB polling needed.
     *
     * @param hash - The query hash to listen for updates on
     * @param callback - Function called with the fresh data when cache is updated
     * @returns An unsubscribe function — call it to stop listening
     */
    static subscribe(hash: string, callback: (data: any) => void): () => void;
    /**
     * Removes a single cached query result from memory and IndexedDB.
     * @param hash - The query hash key to remove
     */
    static remove(hash: string): void;
    /**
     * Clears all cached query results from memory and IndexedDB.
     * Useful for cache invalidation on logout or environment switch.
     */
    static clearAll(): void;
}
/**
 * Computes a deterministic SHA-256 hash of any JSON-serializable object.
 *
 * To ensure that semantically identical objects always produce the same hash
 * regardless of property insertion order, all object keys are recursively sorted
 * before serialization. Arrays maintain their order (only object keys are sorted).
 *
 * @param obj - Any JSON-serializable value (object, array, string, number, etc.)
 * @returns Hex-encoded SHA-256 hash string (64 characters)
 *
 * @example
 * // These produce the same hash:
 * await hashJsonObject({ a: 1, b: 2 });
 * await hashJsonObject({ b: 2, a: 1 });
 */
export declare function hashJsonObject(obj: any): Promise<string>;
`,Ly=`import { Connection, DependencyObserver } from "../app";
/**
 * Observable wrapper for recursive multi-level searches following linker paths with automatic updates.
 */
declare class RecursiveSearchObservable extends DependencyObserver {
    /** Array of linker type names defining the search path */
    searchLinkers: string[];
    /** Search text placeholder */
    searchText: string;
    /** Text to search for in linked concepts */
    textSearch: string;
    /** List of connection objects */
    connections: Connection[];
    /** List of external (linker) connection IDs */
    externalConnectionIds: number[];
    /** Search result data */
    data: any;
    /**
     * Creates a new recursive search observable.
     * @param id - The starting concept ID for the recursive search
     * @param linkers - Array of linker type names defining the traversal path
     * @param textSearch - Optional text to search for in linked concepts
     * @param format - Output format (RAW for raw IDs, undefined for formatted compositions)
     */
    constructor(id: number, linkers: string[], textSearch?: string, format?: number);
    /**
     * Overrides base method to track connection changes for concepts in the search results.
     * @param id - The concept ID to track
     */
    listenToEvent(id: number): void;
    /**
     * Executes recursive search and sets up change listeners for all found compositions.
     * @returns Formatted search results or raw ID structure
     */
    bind(): Promise<any>;
    /**
     * Builds the search results in the specified format.
     * @returns Formatted composition data or raw ID structure
     */
    build(): Promise<any>;
}
/**
 * Creates an observable that performs recursive multi-level searches and updates subscribers when results change.
 * @param id - The starting concept ID for the recursive search
 * @param linkers - Array of linker type names defining the traversal path
 * @param searchText - Optional text to search for in linked concepts
 * @param format - Output format (RAW for raw IDs, undefined for formatted compositions)
 * @returns Observable instance for the recursive search
 *
 * @example
 * const observer = RecursiveSearchListener(123, ["Author", "Category"], "tutorial", RAW);
 * observer.subscribe((results) => console.log(results));
 */
export declare function RecursiveSearchListener(id: number, linkers: string[], searchText?: string, format?: number): RecursiveSearchObservable;
export {};
`,Dy=`import { FreeschemaQuery } from "../app";
import { DependencyObserver } from "./DepenedencyObserver";
/**
 * Observable wrapper for executing free-schema queries with automatic updates.
 * Supports complex filtering, sorting, and pagination with multiple output formats.
 */
export declare class SearchLinkMultipleAllObservable extends DependencyObserver {
    /** The free-schema query object containing all search parameters */
    query: FreeschemaQuery;
    /** Encoded count information strings */
    countInfoStrings: string[];
    /** Sort order for results */
    order: string;
    /** Total count of matching results */
    totalCount: number;
    /** Cleanup function for cache subscription */
    private unsubscribeCache;
    /** Prevents duplicate async cache listener setup. */
    private cacheSubscriptionStarted;
    /**
     * Creates a new schema query observable.
     * @param query - FreeschemaQuery object with search parameters
     * @param token - Authentication token
     */
    constructor(query: FreeschemaQuery, token: string);
    private ensureCacheSubscription;
    protected onDispose(): void;
    /**
     * Executes the query once without subscribing to updates.
     * @returns Formatted query results
     */
    run(): Promise<any>;
    /**
     * Executes the query and sets up change listeners for all matching compositions.
     * @returns Formatted query results
     */
    bind(): Promise<any>;
    /**
     * Builds the query results in the specified format.
     * @returns Formatted query results based on the output format
     */
    build(): Promise<any>;
}
/**
 * Creates an observable that executes a free-schema query and updates subscribers when results change.
 * @param query - FreeschemaQuery object with search, filter, sort, and pagination parameters
 * @param token - Authentication token
 * @returns Observable instance for the query results
 *
 * @example
 * const query = new FreeschemaQuery();
 * query.type = "BlogPost";
 * query.outputFormat = DATAID;
 * const observer = SchemaQueryListener(query, token);
 * observer.subscribe((results) => console.log(results));
 */
export declare function SchemaQueryListener(query: FreeschemaQuery, token: string): SearchLinkMultipleAllObservable;
/**
 * Executes a free-schema query once without creating a subscription.
 * @param query - FreeschemaQuery object with search parameters
 * @param token - Authentication token
 * @returns Promise resolving to formatted query results
 */
export declare function SchemaQuery(query: FreeschemaQuery, token: string): Promise<void>;
`,Py=`import { SearchQuery } from "../app";
import { DependencyObserver } from "./DepenedencyObserver";
/**
 * Observable wrapper for executing multiple search queries with automatic updates.
 */
export declare class SearchLinkMultipleAllObservable extends DependencyObserver {
    /** Array of search query conditions */
    searchQuery: SearchQuery[];
    /** Output format */
    format: number;
    /**
     * Creates a new multi-search observable.
     * @param searchQuery - Array of SearchQuery objects defining search conditions
     * @param token - Authentication token
     * @param format - Output format (DATAID by default)
     */
    constructor(searchQuery: SearchQuery[], token: string, format?: number);
    /**
     * Executes the search queries and sets up change listeners.
     * @returns Formatted search results
     */
    bind(): Promise<any>;
}
/**
 * Creates an observable that executes multiple search queries and updates subscribers when results change.
 * @param searchQueries - Array of SearchQuery objects defining search conditions
 * @param token - Authentication token
 * @param format - Output format (DATAID by default)
 * @returns Observable instance for the search results
 *
 * @example
 * const queries = [{ composition: 123, type: "BlogPost", searchField: "title", searchText: "tutorial" }];
 * const observer = searchLinkMultipleListener(queries, token, DATAID);
 * observer.subscribe((results) => console.log(results));
 */
export declare function searchLinkMultipleListener(searchQueries: SearchQuery[], token?: string, format?: number): SearchLinkMultipleAllObservable;
`,Ry=`export { init, updateAccessToken };
export { SearchLinkMultipleApi } from './Api/Search/SearchLinkMultipleApi';
export { SplitStrings } from './Services/SplitStrings';
export { GetCompositionList, GetCompositionListWithId } from './Services/GetCompositionList';
export { GetCompositionListLocal, GetCompositionListLocalWithId } from './Services/Local/GetCompositionListLocal';
export { GetAllConnectionsOfComposition } from './Api/GetAllConnectionsOfComposition';
export { GetComposition, GetCompositionWithId, recursiveFetch, GetCompositionWithAllIds } from './Services/GetComposition';
export { GetCompositionLocal, GetCompositionLocalWithId } from './Services/Local/GetCompositionLocal';
export { default as CreateComposition } from './Services/CreateTheComposition';
export { CreateTheCompositionLocal } from './Services/Local/CreateTheCompositionLocal';
export { CreateConnectionBetweenTwoConcepts, CreateConnectionBetweenTwoConceptsGeneral } from './Services/CreateConnectionBetweenTwoConcepts';
export { default as GetTheConcept } from './Services/GetTheConcept';
export { default as MakeTheInstanceConcept } from './Services/MakeTheInstanceConcept';
export { MakeTheInstanceConceptLocal } from './Services/Local/MakeTheInstanceConceptLocal';
export { storeToDatabase, getFromDatabaseWithType, getObjectsFromIndexDb } from './Database/NoIndexDb';
export { createTheConnection as CreateTheConnection } from './Services/CreateTheConnection';
export { default as GetConceptByCharacter } from './Services/GetConceptByCharacter';
export { GetLink, GetLinkRaw } from './Services/GetLink';
export { CreateDefaultConcept } from './Services/CreateDefaultConcept';
export { MakeTheTypeConceptLocal } from './Services/Local/MakeTheTypeLocal';
export { MakeTheTypeConceptApi } from './Api/MakeTheTypeConceptApi';
export { GetLinkerConnectionFromConcepts, GetLinkerConnectionToConcepts } from './Services/GetLinkerConnectionFromConcept';
export { DeleteConceptById } from './Services/DeleteConcept';
export { DeleteConnectionById, DeleteConnectionByIdBulk } from './Services/DeleteConnection';
export { TrashTheConcept } from './Api/Delete/DeleteConceptInBackend';
export { GetConnectionById } from './Services/GetConnections';
export { MakeTheTimestamp } from './Services/MakeTheTimestamp';
export { RecursiveSearchApi, RecursiveSearchApiWithInternalConnections, RecursiveSearchApiRaw, RecursiveSearchApiRawFullLinker, RecursiveSearchApiNewRawFullLinker } from './Api/RecursiveSearch';
export { GetCompositionBulkWithDataId, GetCompositionFromConnectionsWithDataIdFromConnections, GetCompositionFromConnectionsWithIndexFromConnections, GetCompositionBulk, GetCompositionFromConnectionsWithDataId } from './Services/GetCompositionBulk';
export { uploadAttachment, getR2PresignedUploadUrl, getUploadFileLimit, uploadFile, uploadImage, uploadImageV2, uploadR2Storage, uploadToR2PresignedUrl, uploadWithR2PresignedUrl, validDocumentFormats, validImageFormats, } from './Services/Upload';
export type { R2PresignedUploadOptions, R2PresignedUploadResult, R2PresignedUploadUrlData, R2PresignedUploadUrlRequest, R2UploadData, UploadResponse, } from './Services/Upload';
export { GetConceptBulk } from './Api/GetConceptBulk';
export { GetConnectionBulk } from './Api/GetConnectionBulk';
export { GetAllConnectionsOfCompositionBulk } from './Api/GetAllConnectionsOfCompositionBulk';
export { LoginToBackend } from './Api/Login';
export { GetConnectionOfTheConcept } from './Api/GetConnectionOfTheConcept';
export { default as Signup } from './Api/Signup';
export { default as Signin } from './Api/Signin';
export { SignupEntity } from './Api/Signup';
export { default as UpdateComposition } from './Services/UpdateComposition';
export { SearchAllConcepts } from './Api/Search/Search';
export { SearchWithLinker } from './Api/Search/SearchWithLinker';
export { GetCompositionWithCache, GetCompositionWithDataIdWithCache, GetCompositionWithDataIdBulk } from './Services/Composition/CompositionCache';
export { CreateSession } from './Api/Session/CreateSession';
export { CreateSessionVisit } from './Api/Session/CreateSessionVisit';
export {} from './Api/GetConceptByCharacterAndType';
export { GetRelation, GetRelationRaw, GetRelationNew } from './Services/GetRelation';
export { recursiveFetchNew } from './Services/Composition/BuildComposition';
export { CreateTheCompositionWithCache } from './Services/Composition/CreateCompositionCache';
export { CreateDefaultLConcept } from './Services/Local/CreateDefaultLConcept';
export { CreateTheConnectionGeneral } from './Services/CreateTheConnectionGeneral';
export { CreateTheConnectionLocal, CreateConnection } from './Services/Local/CreateTheConnectionLocal';
export { GetCompositionListAll, GetCompositionListAllWithId, GetCompositionListWithIdUpdated } from './Services/GetCompositionList';
export { GetUserGhostId, AddGhostConcept } from './Services/User/UserTranslation';
export { SearchLinkMultipleAll, FormatFromConnections } from './Services/Search/SearchLinkMultiple';
export { GetTheConceptLocal } from './Services/Local/GetTheConceptLocal';
export { UpdateCompositionLocal } from './Services/Local/UpdateCompositionLocal';
export { GetCompositionFromConnectionsWithDataIdInObject, GetCompositionFromConnectionsWithIndex, GetCompositionFromConnectionsWithDataIdIndex } from './Services/GetCompositionBulk';
export { GetRelationLocal } from './Services/Local/GetRelationLocal';
export { GetConceptByCharacterAndCategoryLocal } from './Services/Local/GetConceptByCharacterLocal';
export { ViewInternalData } from './Services/View/ViewInternalData';
export { ViewInternalDataApi } from './Api/View/ViewInternalDataApi';
export { convertFromLConceptToConcept, convertFromConceptToLConcept } from './Services/Conversion/ConvertConcepts';
export { SearchLinkInternal, SearchLinkInternalAll } from './Services/Search/SearchLinkInternal';
export { CreateConnectionBetweenTwoConceptsLocal } from './Services/Local/CreateConnectionBetweenTwoConceptsLocal';
export { DeleteConceptLocal } from './Services/Local/DeleteConceptLocal';
export { GetConnectionBetweenTwoConceptsLinker } from './Services/GetConnectionBetweenTwoConceptsLinker';
export { DelayFunctionExecution } from './Services/Common/DelayFunction';
export { GetCompositionWithIdAndDateFromMemory, GetCompositionFromMemoryWithConnections } from './Services/GetComposition';
export { GetConceptByCharacterAndType } from './Api/GetConceptByCharacterAndType';
export { GetInstanceConceptByCharacterType } from './Api/GetInstanceConceptByCharacterType';
export { GetConnectionDataPrefetch } from './Services/GetCompositionBulk';
export { FormatFromConnectionsAltered } from './Services/Search/SearchLinkMultiple';
export { NORMAL, JUSTDATA, DATAID, DATAIDDATE, RAW, ALLID, LISTNORMAL, DATAV2 } from './Constants/FormatConstants';
export { PRIVATE, PUBLIC, ADMIN } from './Constants/AccessConstants';
export { SearchWithTypeAndLinkerApi } from './Api/Search/SearchWithTypeAndLinker';
export { DependencyObserver } from './WrapperFunctions/DepenedencyObserver';
export { SearchLinkMultipleAllObservable, searchLinkMultipleListener } from './WrapperFunctions/SearchLinkMultipleAllObservable';
export { GetCompositionListener } from './WrapperFunctions/GetCompositionObservable';
export { GetCompositionListListener } from './WrapperFunctions/GetCompositionListObservable';
export { SearchWithTypeAndLinker } from './Services/Search/SearchWithTypeAndLinker';
export { GetLinkListener } from './WrapperFunctions/GetLinkObservable';
export { RecursiveSearchListener } from './WrapperFunctions/RecursiveSearchObservable';
export { GetLinkListListener } from './WrapperFunctions/GetLinkListObservable';
export { GetConnectionTypeForCount } from './Services/Common/DecodeCountInfo';
export { orderTheConnections } from './Services/Search/orderingConnections';
export { SyncData } from './DataStructures/SyncData';
export { Concept } from './DataStructures/Concept';
export { LConcept } from './DataStructures/Local/LConcept';
export { LConnection } from './DataStructures/Local/LConnection';
export { Connection } from './DataStructures/Connection';
export { ConceptsData } from './DataStructures/ConceptData';
export { ConnectionData } from './DataStructures/ConnectionData';
export { BinaryTree } from './DataStructures/BinaryTree';
export { SearchQuery } from './DataStructures/SearchQuery';
export { SignupModel } from './DataStructures/SignupModel';
export { SigninModel } from './DataStructures/SigninModel';
export { FreeschemaResponse } from './DataStructures/Responses/StandardResponses';
export { PatcherStructure } from './DataStructures/PatcherStructure';
export { SessionData } from './DataStructures/Session/SessionData';
export { Composition } from './DataStructures/Composition/Composition';
export { CompositionBinaryTree } from './DataStructures/Composition/CompositionBinaryTree';
export { CompositionNode } from './DataStructures/Composition/CompositionNode';
export { LocalSyncData } from './DataStructures/Local/LocalSyncData';
export { UserBinaryTree } from './DataStructures/User/UserBinaryTree';
export { FilterSearch } from './DataStructures/FilterSearch';
export { SearchStructure } from './DataStructures/Search/SearchStructure';
export { LocalConceptsData } from './DataStructures/Local/LocalConceptData';
export { Logger } from "./Middleware/logger.service";
export { sendEmail, sendPersonalEmail } from "./Services/Mail";
export type { RecaptchaOptions, SendEmailOptions } from "./Services/Mail";
export { BuilderStatefulWidget } from "./Widgets/BuilderStatefulWidget";
export { LocalTransaction } from "./Services/Transaction/LocalTransaction";
export { InnerActions } from "./Constants/general.const";
export { Anomaly } from './Anomaly/anomaly';
export { Validator } from './Validator/validator';
export { createFormFieldData } from './Validator/utils';
export { BaseUrl } from './DataStructures/BaseUrl';
export { StatefulWidget } from './Widgets/StatefulWidget';
export { DeleteConnectionByType, DeleteConnectionByTypeBulk, GetAllTheConnectionsByTypeAndOfTheConcept } from './Services/DeleteConnectionByType';
export { GetConnectionsBetweenApi } from './Api/GetConnections/GetConnectionsBetweenApi';
export { FetchConnection, FetchConnectionQuery, buildFetchConnection } from './DataStructures/FetchConnection';
export { FreeschemaQuery } from './DataStructures/Search/FreeschemaQuery';
export { FreeschemaQueryApi } from './Api/Search/FreeschemaQueryApi';
export { SchemaQueryListener, SchemaQuery } from './WrapperFunctions/SchemaQueryObservable';
export { WidgetTree } from './Widgets/WidgetTree';
export { DeleteUser } from './Services/DeleteConcept';
export { AccessTracker } from './AccessTracker/accessTracker';
export { CreateConnectionBetweenEntityLocal } from './Services/CreateConnection/CreateConnectionEntity';
export { BuildWidgetFromId } from './Widgets/WidgetBuild';
export { clearAllCaches } from './Services/CacheClear';
export { removeAllChildren } from './Services/Common/RemoveAllChild';
export { getUserDetails, getUserDetailsWithRefresh } from './Services/User/UserFromLocalStorage';
export { TokenStorage } from './DataStructures/Security/TokenStorage';
export { CountInfo } from './DataStructures/Count/CountInfo';
export { LogEvent } from './Services/Logs/LogEvent';
export { Selector } from './Api/Prototype/Selector';
export { AccessControlService } from './Services/AccessControl/AccessControl';
export { importLatestWidget, importRecentWidget, renderImportedWidget, renderLatestWidget, renderPage, renderWidget, convertWidgetTreeToWidgetWithWrapper, getWidgetFromId, convertWidgetTreeToWidget, unwrapContainers, getWidgetBulkFromId } from './Widgets/RenderWidgetService';
export { CreateData } from './Services/automated/automated-concept-connection';
export { Prototype } from './DataStructures/Prototype/Prototype';
export { Environments } from './DataStructures/environments/environments';
export { createPrototypeLocal } from './prototype/prototype.service';
export { GetImageApi } from './Api/Images/GetImages';
export { GetAllLinkerConnectionsFromTheConcept } from "./Api/GetAllLinkerConnectionsFromTheConcept";
export { GetFreeschemaImage, GetFreeschemaImageUrl } from './Services/assets/GetImageService';
type listeners = {
    listenerId: string | number;
    callback: any;
    createdAt: number;
};
export declare var serviceWorker: any;
export declare let subscribedListeners: listeners[];
export declare let hasActivatedSW: boolean;
export declare function setHasActivatedSW(value: boolean): void;
/**
 * Updates the JWT access token used for authenticated API requests.
 *
 * This function should be called after user authentication to set or update the bearer token
 * that will be used for all subsequent authenticated operations. The token is stored in
 * TokenStorage and automatically included in API request headers.
 *
 * **When to Use:**
 * - After successful login (LoginToBackend or Signin)
 * - When refreshing an expired token
 * - When switching between user sessions
 * - When restoring a saved session on app reload
 *
 * **Token Flow:**
 * 1. User logs in via LoginToBackend() or Signin()
 * 2. Backend returns JWT token
 * 3. Call updateAccessToken() with the token
 * 4. Token is stored in memory (TokenStorage.BearerAccessToken)
 * 5. All API calls automatically use this token
 * 6. If service worker enabled, token is synced to service worker
 *
 * **Security Notes:**
 * - Token is stored in memory only (not persisted to disk)
 * - Token is cleared on page refresh (unless you save/restore it)
 * - Never expose token in logs or client-side code
 * - Token should be refreshed before expiration
 *
 * @param accessToken - The JWT bearer token obtained from authentication.
 *                     Format: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                     Pass empty string to clear the token (logout).
 *
 * @param session - Optional session information to sync with token.
 *                 Reserved for future use. Currently not fully implemented.
 *
 * @returns void
 *
 * @example
 * // After login, update token
 * const loginResult = await LoginToBackend("user@example.com", "password");
 * updateAccessToken(loginResult.data.token);
 * console.log("Token updated - now authenticated");
 *
 * @example
 * // Restore token from localStorage on app reload
 * const savedToken = localStorage.getItem("authToken");
 * if (savedToken) {
 *   updateAccessToken(savedToken);
 * }
 *
 * @example
 * // Clear token on logout
 * updateAccessToken("");
 * console.log("Token cleared - logged out");
 *
 * @example
 * // Refresh expired token
 * const newToken = await refreshTokenFromBackend();
 * updateAccessToken(newToken);
 *
 * @see {@link LoginToBackend} for obtaining initial token
 * @see {@link Signin} for alternative authentication
 * @see {@link init} which can also set initial token
 */
declare function updateAccessToken(accessToken?: string, session?: any, refreshToken?: string): void;
/**
 * Initializes the mftsccs-browser package and sets up all required subsystems.
 *
 * This is the FIRST function you must call before using any other functionality in the package.
 * It configures the backend connections, initializes local databases, sets up service workers,
 * and prepares the system for concept and connection operations.
 *
 * **Initialization Process:**
 * 1. Configures Base URLs for backend, AI, and node servers
 * 2. Sets up access token for authenticated requests
 * 3. Generates unique application randomizer for IndexedDB identification
 * 4. Initializes feature flags (logging, access tracking, etc.)
 * 5. Checks for service worker support
 * 6. Initializes local IndexedDB databases for caching
 * 7. Sets up message listeners for service worker communication
 * 8. Optionally registers and activates service worker
 * 9. Falls back to main thread if service worker unavailable
 *
 * **Subsystems Initialized:**
 * - IndexedDB databases (concepts, connections, settings)
 * - Service worker (if enabled and supported)
 * - Message passing between main thread and service worker
 * - Broadcast channel for cross-tab communication
 * - Access token storage
 * - Logging and monitoring systems
 * - Access tracking (if enabled)
 *
 * @param url - The backend API base URL (C# data fabric server).
 *             This is the primary server for concept and connection data.
 *             Example: "https://api.example.com" or "https://backend.yourdomain.com"
 *             **Required** for most operations.
 *
 * @param aiurl - The AI service URL for AI-powered features and data preloading.
 *               If not using AI features, pass empty string and set enableAi to false.
 *               Example: "https://ai.example.com"
 *
 * @param accessToken - JWT bearer token for authenticated API requests.
 *                     Can be empty string on initialization - set later with updateAccessToken().
 *                     Token is obtained through LoginToBackend() or Signin().
 *                     Example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *
 * @param nodeUrl - The Node.js server URL for business logic and security features.
 *                 Used for additional server-side operations.
 *                 Example: "https://node.example.com"
 *
 * @param enableAi - Flag to enable/disable AI features and AI data preloading to IndexedDB.
 *                  Set to false if not using AI features or if aiurl is not provided.
 *                  Default: true
 *
 * @param applicationName - Unique identifier for your application.
 *                         Used to create separate IndexedDB instances for different apps.
 *                         Example: "my-app-v1", "project-manager", "knowledge-base"
 *                         Useful when multiple applications share the same domain.
 *
 * @param enableSW - Service worker configuration object. Service worker enables background
 *                  processing for better performance and offline capabilities.
 *                  - activate: boolean - Enable/disable service worker
 *                  - scope: string (optional) - Service worker scope path (default: "/")
 *                  - pathToSW: string (optional) - Path to service worker file (default: "/service-worker.js")
 *                  - manual: boolean (optional) - If true, assumes SW already registered manually
 *                  Example: {activate: true, scope: "/", pathToSW: "/sw.js"}
 *
 * @param flags - Feature flags object for enabling/disabling various features:
 *               - logApplication: boolean - Enable application-level logging
 *               - logPackage: boolean - Enable package-level logging
 *               - accessTracker: boolean - Enable access tracking/analytics
 *               - isTest: boolean - Mark as test environment
 *               All default to false if not specified.
 *
 * @param parameters - Additional configuration parameters:
 *                    - logserver: string - Custom log server URL (default: "https://logdev.freeschema.com")
 *                    - isPwa: boolean - Enable PWA offline persistence to IndexedDB (default: false)
 *                    - enableCache: boolean - Enable/disable widget and FreeschemaQuery caching.
 *                      When false, QueryCacheManager and WidgetCacheManager skip all reads and writes
 *                      (memory and IndexedDB). Stored in Environments under key 'enableCache' so it
 *                      can be read or changed at runtime via Environments.getValue/setValue.
 *                      Default: true.
 *
 * @returns Promise<boolean> - Returns true if initialization succeeds, undefined if it fails.
 *         On failure, falls back to main thread operation and logs warnings.
 *
 * @example
 * // Basic initialization (minimum required)
 * await init(
 *   "https://api.myapp.com",     // backend URL
 *   "",                           // no AI
 *   "",                           // no token yet
 *   "",                           // no node server
 *   false,                        // disable AI
 *   "my-app"                      // app name
 * );
 *
 * @example
 * // Full initialization with service worker
 * await init(
 *   "https://api.myapp.com",
 *   "https://ai.myapp.com",
 *   "",
 *   "https://node.myapp.com",
 *   true,
 *   "my-app-v2",
 *   {
 *     activate: true,
 *     scope: "/",
 *     pathToSW: "/service-worker.js"
 *   },
 *   {
 *     logApplication: true,
 *     accessTracker: true
 *   },
 *   {
 *     logserver: "https://logs.myapp.com"
 *   }
 * );
 *
 * @example
 * // Initialize then login
 * await init("https://api.example.com", "", "", "", false, "my-app");
 * const loginResult = await LoginToBackend("user@example.com", "password");
 * updateAccessToken(loginResult.data.token);
 * // Now ready to use all authenticated operations
 *
 * @throws Does not throw - logs warnings and falls back to main thread on errors.
 *        Common issues: Service worker registration failures, IndexedDB access denied.
 *
 * @see {@link updateAccessToken} for updating the access token after initialization
 * @see {@link LoginToBackend} for obtaining an access token
 * @see {@link sendMessage} for communicating with service worker after initialization
 * @param accessControlUrl This is the url for the access control system. This is another server in the data fabric that is used as server for business logic and security features.
 *
 */
declare function init(url?: string, aiurl?: string, accessToken?: string, nodeUrl?: string, enableAi?: boolean, applicationName?: string, enableSW?: {
    activate: boolean;
    scope?: string;
    pathToSW?: string;
    manual?: boolean;
} | undefined, flags?: {
    logApplication?: boolean;
    logPackage?: boolean;
    accessTracker?: boolean;
    isTest?: boolean;
    accessControl?: boolean;
}, parameters?: {
    logserver?: string;
    isPwa?: boolean;
    enableCache?: boolean;
    recaptchaSiteKey?: string;
    recaptchaAction?: string;
}, accessControlUrl?: string): Promise<true | undefined>;
/**
 * Method to send message to the service worker from main thread
 * @param type string
 * @param payload any
 * @returns Promise<any>
 */
export declare function sendMessage(type: string, payload: any, retryCount?: number): Promise<unknown>;
/**
 * Method to dispatch Event received from SW
 * @param id number|string
 * @param data any
 */
export declare function dispatchIdEvent(id: number | string, data?: any): void;
/**
 * Method to handle global exception occured in service worker
 * @param error any
 */
export declare const handleServiceWorkerException: (error: any) => void;
`,By=`import { Concept, Connection, LocalTransaction } from "../app";
import { Prototype } from "../DataStructures/Prototype/Prototype";
import { PrototypeOption } from "../DataStructures/Prototype/PrototypeOption";
import { QuerySelector } from "../DataStructures/Prototype/QuerySelector";
export declare function createPrototypeLocal(prototype: Prototype, passedTransaction?: LocalTransaction | null): Promise<{
    concepts: Concept[];
    connections: Connection[];
    mainConcept: Concept;
}>;
export declare function addOptions(options: PrototypeOption[], mainPrototype: Concept, passedTransaction: LocalTransaction): Promise<{
    concepts: Concept[];
    connections: Connection[];
}>;
export declare function addPrototypeSelector(selector: QuerySelector | null, mainPrototype: Concept, passedTransaction: LocalTransaction): Promise<{
    concepts: Concept[];
    connections: Connection[];
}>;
export declare function addPrototype(type: string, passedTransaction: LocalTransaction): Promise<any>;
export declare function addCompositionPrototype(type: string, concepts: Concept[], connections: Connection[], passedTransaction: LocalTransaction): Promise<Concept>;
export declare function CreatePrototypeConcept(prototypeConcept: Concept, typeConcept: Concept, userId: number, passedTransaction: LocalTransaction): Promise<any>;
export declare function typeSemantic(mainPrototype: Concept, required?: boolean, isComposition?: boolean): string;
export declare function compositionalTypeSemantic(mainPrototype: Concept, isOption?: boolean): string;
export declare function filterTypeSemantic(mainPrototype: Concept, isOption?: boolean): string;
export declare function selectorTypeSemantic(mainPrototype: Concept, isOption?: boolean): string;
export declare function AddPrototypeConnections(types: string[], prototype: Concept, allConcepts: Concept[], passedTransaction: LocalTransaction, required?: boolean, isComposition?: boolean): Promise<Connection[]>;
`,Ey=`export {};
`,Oy=`export * from "./app";
export { getTsccsAutocompleteMetadata, tsccsAutocompleteMetadata, } from "./Metadata/AutocompleteMetadata";
export type { TsccsAutocompleteEntry, TsccsAutocompleteMetadata, } from "./Metadata/AutocompleteMetadata";
`;export{lh as $,Yu as A,fc as B,Xu as C,gl as D,Ku as E,bd as F,Cl as G,Zu as H,od as I,eh as J,th as K,nh as L,oh as M,ih as N,rh as O,yd as P,sh as Q,md as R,ah as S,nd as T,vc as U,kc as V,Iu as W,ch as X,Lu as Y,Bd as Z,Wu as _,Zc as a,Cp as a$,dh as a0,uh as a1,hh as a2,ph as a3,fh as a4,mh as a5,yh as a6,gh as a7,vh as a8,Ch as a9,$h as aA,zh as aB,Jh as aC,Qh as aD,Yh as aE,Xh as aF,Kh as aG,Zh as aH,ep as aI,tp as aJ,np as aK,op as aL,ip as aM,rp as aN,sp as aO,ap as aP,cp as aQ,lp as aR,dp as aS,up as aT,hp as aU,pp as aV,fp as aW,mp as aX,yp as aY,gp as aZ,vp as a_,bh as aa,Ih as ab,wh as ac,Th as ad,kh as ae,Ah as af,_h as ag,Sh as ah,xh as ai,Nh as aj,Lh as ak,Dh as al,Ph as am,Rh as an,Bh as ao,Eh as ap,Oh as aq,Fh as ar,Uh as as,Gh as at,Mh as au,Wh as av,jh as aw,Vh as ax,qh as ay,Hh as az,fu as b,Lf as b$,bp as b0,Ip as b1,wp as b2,Tp as b3,kp as b4,Ap as b5,_p as b6,Sp as b7,xp as b8,Np as b9,nf as bA,of as bB,rf as bC,sf as bD,af as bE,cf as bF,lf as bG,df as bH,uf as bI,hf as bJ,pf as bK,ff as bL,mf as bM,yf as bN,gf as bO,vf as bP,Cf as bQ,bf as bR,If as bS,wf as bT,Tf as bU,kf as bV,Af as bW,_f as bX,Sf as bY,xf as bZ,Nf as b_,Lp as ba,Dp as bb,Pp as bc,Rp as bd,Bp as be,Ep as bf,Op as bg,Fp as bh,Up as bi,Gp as bj,Mp as bk,Wp as bl,jp as bm,Vp as bn,qp as bo,Hp as bp,$p as bq,zp as br,Jp as bs,Qp as bt,Yp as bu,Xp as bv,Kp as bw,Zp as bx,ef as by,tf as bz,Cc as c,Mm as c$,Df as c0,Pf as c1,Rf as c2,Bf as c3,Ef as c4,Of as c5,Ff as c6,Uf as c7,Gf as c8,Mf as c9,pm as cA,fm as cB,mm as cC,ym as cD,gm as cE,vm as cF,Cm as cG,bm as cH,Im as cI,wm as cJ,Tm as cK,km as cL,Am as cM,_m as cN,Sm as cO,xm as cP,Nm as cQ,Lm as cR,Dm as cS,Pm as cT,Rm as cU,Bm as cV,Em as cW,Om as cX,Fm as cY,Um as cZ,Gm as c_,Wf as ca,jf as cb,Vf as cc,qf as cd,Hf as ce,$f as cf,zf as cg,Jf as ch,Qf as ci,Yf as cj,Xf as ck,Kf as cl,Zf as cm,em as cn,tm as co,nm as cp,om as cq,im as cr,rm as cs,sm as ct,am as cu,cm as cv,lm as cw,dm as cx,um as cy,hm as cz,Ha as d,fl as d$,Wm as d0,jm as d1,Vm as d2,qm as d3,Hm as d4,$m as d5,zm as d6,Jm as d7,Qm as d8,Ym as d9,wy as dA,Ty as dB,ky as dC,Ay as dD,_y as dE,Sy as dF,xy as dG,Ny as dH,Ly as dI,Dy as dJ,Py as dK,Ry as dL,By as dM,Ey as dN,Oy as dO,vu as dP,qd as dQ,Yd as dR,Ic as dS,Ac as dT,Mc as dU,au as dV,vl as dW,rc as dX,El as dY,xc as dZ,ic as d_,Xm as da,Km as db,Zm as dc,ey as dd,ty as de,ny as df,oy as dg,iy as dh,ry as di,sy as dj,ay as dk,cy as dl,ly as dm,dy as dn,uy as dp,hy as dq,py as dr,fy as ds,my as dt,yy as du,gy as dv,vy as dw,Cy as dx,by as dy,Iy as dz,Ec as e,Il as e0,Kl as e1,Pc as e2,Wd as e3,jl as e4,Dc as e5,hu as e6,Wc as e7,Qd as e8,Pd as e9,Tc as f,Ja as g,zl as h,Gl as i,Td as j,ju as k,Vu as l,Zl as m,qu as n,Hu as o,Jl as p,Sc as q,Ml as r,Wa as s,Mu as t,$u as u,zu as v,td as w,hd as x,Ju as y,Qu as z};
